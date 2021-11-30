const users = [
  {
    id: "1", // "67rdca3eeb7f6fgeed471815",
    name: "Имя Фамилия",
    email: "johndorian@fastcompany.ru",
    password: "password",
    userCardsId: ["1"]
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users);
    }, 1000);
  });

const createNewUser = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: "",
        email: data.email,
        password: data.password,
        userCardsId: []
      };
      users.push(newUser);
      resolve(newUser);
    }, 1000);
  });

export default {
  fetchAll,
  createNewUser

  //   getTaskByBelongBoard
};

//   const fetchAll = () =>
//     new Promise((resolve) => {
//       window.setTimeout(function () {
//         resolve(taskBoards);
//       }, 1000);
//     });

//   export default {
//     fetchAll
//   };
