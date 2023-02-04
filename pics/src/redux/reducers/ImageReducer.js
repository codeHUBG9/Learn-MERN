import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAIL } from "../constants";

export const imageReducers = (state = { data: {} }, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        loading: true,
        results: {},
      };
    case IMAGE_SUCCESS:
      return {
        loading: false,
        results: action.payload,
      };
    case IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
