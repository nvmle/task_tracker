import { taskBoards } from "./tasksBoadrs.api";

const tasks = [
  {
    id: 1,
    belong_board: taskBoards.private,
    ownerId: 1,
    title: "Задача 1"
  },
  {
    id: 2,
    belong_board: taskBoards.private,
    ownerId: 1,
    title: "Задача 2"
  },
  {
    id: 3,
    belong_board: taskBoards.work,
    ownerId: 1,
    title: "Задача 1"
  },
  {
    id: 4,
    belong_board: taskBoards.work,
    ownerId: 1,
    title: "Задача 2"
  },
  {
    id: 5,
    belong_board: taskBoards.public,
    ownerId: 1,
    title: "Задача 1"
  },
  {
    id: 6,
    belong_board: taskBoards.public,
    ownerId: 1,
    title: "Задача 2"
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks);
    }, 0);
  });

export default {
  fetchAll
  //   getTaskByBelongBoard
};
