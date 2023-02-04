import axios from "axios";
import { root_url, AccessKey } from "./config";
export const searchImage = async (term) => {
  const response = await axios.get(`${root_url}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${AccessKey}`,
    },
    params: {
      query: term,
      per_page: 30,
    },
  });

  const results = response && response.data ? response.data.results : {};
  return results;
};
