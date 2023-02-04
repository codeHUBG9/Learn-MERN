import axios from "axios";
import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAIL } from "../constants";
import { root_url, AccessKey } from "../../utility/config";

// Get Images from Unsplash.com

export const searchImage = (term) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_REQUEST });

    const config = {
      headers: {
        Authorization: `Client-ID ${AccessKey}`,
      },
      params: {
        query: term,
        per_page: 30,
      },
    };
    const { data } = await axios.get(`${root_url}/search/photos`, config);
    dispatch({
      type: IMAGE_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
