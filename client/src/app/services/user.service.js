import httpService from "./http.service";

const userEndpoint = "user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  },
  getUserInfo: async (userId) => {
    const { data } = await httpService.get(userEndpoint + userId);
    // console.log("user service", data);

    return data;
  },
  edit: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  }
};

export default userService;
