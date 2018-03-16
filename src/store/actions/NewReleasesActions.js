import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchNewReleasesRequest () {
  return {
    type: ActionsConstants.FETCH_NEW_RELEASES_REQUEST
  };
}

function fetchNewReleasesResponse (response) {
  return {
    type: ActionsConstants.FETCH_NEW_RELEASES_RESPONSE,
    response
  };
}

export function fetchNewReleases (limit = 40, offset = 0) {
  return (dispatch, getState) => {
    dispatch(fetchNewReleasesRequest());
    const params = {limit, offset};
    const {data} = getState().newReleases;
    if (data && data.length >= (limit + offset)) {
      return fetchNewReleasesResponse(data.slice(offset, limit + offset));
    }
    return axiosInstance().get(CONFIGS.API_URL + '/browse/new-releases', {params})
      .then((res) => {
        dispatch(fetchNewReleasesResponse(res.data.albums.items));
      });
  };
}
