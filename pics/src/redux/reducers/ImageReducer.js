import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAIL } from "../constants";

export const imageReducers = (state = { data: {} }, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        loading: true,
        results: [],
      };
    case IMAGE_SUCCESS:
      return {
        loading: false,
        results: action.payload.results,
        total: action.payload.total,
        total_pages: action.payload.total_pages,
        per_page: action.payload.per_page,
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
