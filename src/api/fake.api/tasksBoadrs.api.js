export const taskBoards = {
  private: {
    id: 1,
    title: "Личная доска"
  },
  work: {
    id: 2,
    title: "Рабочая доска"
  },
  public: {
    id: 3,
    title: "Общая доска"
  }
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(taskBoards);
    }, 1000);
  });

export default {
  fetchAll
};
