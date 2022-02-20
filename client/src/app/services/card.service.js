import httpService from "./http.service";

const cardEndpoint = "card/";

const cardService = {
  getById: async (cardId) => {
    const { data } = await httpService.get(cardEndpoint + cardId);
    // console.log(data);

    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(cardEndpoint + payload.id, payload);
    return data;
  }
};

export default cardService;
