import configFile from "../config.json";
import axios from "axios";

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
  (config) => {
    if (configFile.isFirebase) {
      const containsSlash = /\/$/gi.test(config.url);
      config.url =
        (containsSlash ? config.url.slice(0, -1) : config.url) + ".json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete
};

export default httpService;
