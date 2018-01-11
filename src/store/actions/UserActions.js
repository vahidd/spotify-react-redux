import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchCurrentUserRequest () {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_REQUEST
  };
}

function fetchCurrentUserResponse (response) {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_RESPONSE,
    response
  };
}

export function fetchCurrentUser () {
  return (dispatch) => {
    dispatch(fetchCurrentUserRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/me')
      .then((res) => {
        dispatch(fetchCurrentUserResponse(res.data));
      });
  };
}

function fetchFollowingStatusRequest (ids, type) {
  return {
    type  : ActionsConstants.FETCH_FOLLOWING_STATUS_REQUEST,
    ids,
    idType: type
  };
}

function fetchFollowingStatusResponse (ids, type, response) {
  return {
    type  : ActionsConstants.FETCH_FOLLOWING_STATUS_RESPONSE,
    ids,
    idType: type,
    response
  };
}

export function fetchFollowingStatus (ids, type) {
  return (dispatch) => {
    dispatch(fetchFollowingStatusRequest(ids, type));
    return axiosInstance().get(CONFIGS.API_URL + '/me/following/contains', {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(fetchFollowingStatusResponse(ids, type, res.data));
      });
  };
}

function followRequest (ids, type) {
  return {
    type  : ActionsConstants.FOLLOW_REQUEST,
    ids,
    idType: type,
  };
}

function followResponse (ids, type, response) {
  return {
    type  : ActionsConstants.FOLLOW_RESPONSE,
    ids,
    idType: type,
    response
  };
}

export function follow (ids, type) {
  return (dispatch) => {
    dispatch(followRequest(ids, type));
    return axiosInstance().put(CONFIGS.API_URL + '/me/following', {}, {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(followResponse(ids, type, res.data));
        dispatch(fetchFollowingStatus(ids, type));
      });
  };
}

function unfollowRequest (ids, type) {
  return {
    type  : ActionsConstants.UNFOLLOW_REQUEST,
    ids,
    idType: type
  };
}

function unfollowResponse (ids, type, response) {
  return {
    type  : ActionsConstants.UNFOLLOW_RESPONSE,
    ids,
    idType: type,
    response
  };
}

export function unfollow (ids, type) {
  return (dispatch) => {
    dispatch(unfollowRequest(ids, type));
    return axiosInstance().delete(CONFIGS.API_URL + '/me/following', {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(unfollowResponse(ids, type, res.data));
        dispatch(fetchFollowingStatus(ids, type));
      });
  };
}
