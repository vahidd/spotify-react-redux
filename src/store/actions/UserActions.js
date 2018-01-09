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

function fetchFollowingStatusRequest () {
  return {
    type: ActionsConstants.FETCH_FOLLOWING_STATUS_REQUEST
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
    dispatch(fetchFollowingStatusRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/me/following/contains', {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(fetchFollowingStatusResponse(ids, type, res.data));
      });
  };
}

function followRequest () {
  return {
    type: ActionsConstants.FOLLOW_REQUEST
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
    dispatch(followRequest());
    return axiosInstance().put(CONFIGS.API_URL + '/me/following', {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(followResponse(ids, type, res.data));
      });
  };
}

function unfollowRequest () {
  return {
    type: ActionsConstants.UNFOLLOW_REQUEST
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
    dispatch(unfollowRequest());
    return axiosInstance().delete(CONFIGS.API_URL + '/me/following', {params: {ids: ids.join(','), type}})
      .then((res) => {
        dispatch(unfollowResponse(ids, type, res.data));
      });
  };
}
