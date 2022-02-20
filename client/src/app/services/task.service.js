import httpService from "./http.service";

const taskEndpoint = "task/";

const taskService = {
  getById: async (taskId) => {
    const { data } = await httpService.get(taskEndpoint + taskId);

    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(taskEndpoint + payload.id, payload);
    return data;
  }
};

export default taskService;
