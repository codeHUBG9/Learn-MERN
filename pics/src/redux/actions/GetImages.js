import axios from "axios";
import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAIL } from "../constants";
import { root_url, AccessKey } from "../../utility/config";

// Get Images from Unsplash.com

export const searchImage = (term, pageNo) => async (dispatch) => {
  try {
    const per_page = 8;
    dispatch({ type: IMAGE_REQUEST });
    const config = {
      headers: {
        Authorization: `Client-ID ${AccessKey}`,
      },
      params: {
        query: term,
        per_page: per_page,
        page: pageNo,
      },
    };
    const response = await axios.get(`${root_url}/search/photos`, config);
    const data = { ...response.data, per_page: per_page };
    dispatch({
      type: IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
