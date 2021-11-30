const importanceValues = {
  urgently_important: {
    id: "1",
    name: "Срочно - важно",
    color: "danger"
  },
  notUrgently_important: {
    id: "2",
    name: "Не срочно - важно",
    color: "success"
  },
  urgently_notImportant: {
    id: "3",
    name: "Срочно - не важно",
    color: "warning"
  },
  notUrgently_notImportant: {
    id: "4",
    name: "Не срочно - не важно",
    color: "secondary"
  }
};

const tasks = [
  {
    id: "1",
    title: "Titlte1",
    description: "Description1",
    ownerId: "1",
    belongsToCardId: "1",
    isDone: false,
    deadline: "date",
    importance: importanceValues.urgently_important
  },
  {
    id: "2",
    title:
      "Titlte2Titlte2Titlte2Titlte2Titlte2Titlte2Titlte2Titlte2Titlte2Titlte2",
    description: "Description2",
    ownerId: "1",
    belongsToCardId: "3",
    isDone: false,
    deadline: "date",
    importance: importanceValues.notUrgently_important
  },
  {
    id: "3",
    title: "Titlte3",
    description: "Description3",
    ownerId: "1",
    belongsToCardId: "1",
    isDone: false,
    deadline: "date",
    importance: importanceValues.urgently_notImportant
  },
  {
    id: "4",
    title: "Titlte4",
    description: "Description4",
    ownerId: "1",
    belongsToCardId: "3",
    isDone: false,
    deadline: "date",
    importance: importanceValues.notUrgently_notImportant
  },
  {
    id: "5",
    title: "Titlte5",
    description: "Description5",
    ownerId: "1",
    belongsToCardId: "3",
    isDone: false,
    deadline: "date",
    importance: importanceValues.notUrgently_notImportant
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks);
    }, 1000);
  });

const getTaskById = (taskId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks.find((task) => task.id === taskId));
    }, 1000);
  });

const getTaskByBelongCard = (cardId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks.filter((task) => task.belongsToCardId === cardId));
    }, 1000);
  });

export default {
  fetchAll,
  getTaskByBelongCard,
  getTaskById
};

//   id - id задачи string
// title - название задачи string
// description - описание задачи string
// ownerId - id пользователя, который создал задачу, владелец string
// belongsToCardId - id карточки, к которой принадлежит задача string
// isDone - выполнено ли bool
// deadline - время, когда нужно выполнить задачку date
// importance - tags - теги, [obj] срочно-важно, не срочно-важно, не срочно-важно, не срочно-не важно
