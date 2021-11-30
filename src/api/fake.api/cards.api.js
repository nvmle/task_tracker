const cards = [
  {
    id: "1",
    title: "Card title",
    description: "Caard description",
    ownerId: "67rdca3eeb7f6fgeed471815",
    isShare: false,
    // bookmark: false,
    label: "label one",
    usersId: ["1", "67rdca3eeb7f6fgeed471815"],
    tasksId: ["1", "3"]
  },
  {
    id: "2",
    title: "Card title2",
    description: "Caard description2",
    ownerId: "67rdca3eeb7f6fgeed471815",
    isShare: false,
    // bookmark: false,
    label: "label one",
    usersId: ["11", "67rdca3eeb7f6fgeed471815"],
    tasksId: ["11"]
  },
  {
    id: "3",
    title: "Card title3",
    description: "Caard description3",
    ownerId: "67rdca3eeb7f6fgeed471815",
    isShare: false,
    // bookmark: false,
    label: "label one",
    usersId: ["1", "11", "67rdca3eeb7f6fgeed471815"],
    tasksId: ["2", "4"]
  }
];

// if (!localStorage.getItem("cards")) {
//   localStorage.setItem("cards", JSON.stringify(cards));
// }

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cards);
      //   resolve(JSON.parse(localStorage.getItem("cards")));
    }, 1000);
  });

const getCardsByUserId = (userId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cards.filter((card) => card.usersId.includes(userId)));
      //   resolve(
      //     JSON.parse(localStorage.getItem("cards")).filter((card) =>
      //       card.usersId.includes(userId)
      //     )
      //   );
    }, 1000);
  });

export default {
  fetchAll,
  getCardsByUserId
};
// id - id картоки string
// title - название карточки string
// description - описание карточки string
// ownerId - id пользователя, который создал карточку, владелец string
// isShared - шарится ли на других карточка, boolean
// bookmark - закладка, для фильтрации boolean
// label - тег карточки, типа рабочего стола, для фильтрации (личное, работа, фывфыв, фывфы, название11). эти теги создаются отдельно как в гуглкипе
// usersId - id пользователей кто видит карточку и может с ней работать
// tasksId - id задачек, которые относятся к этой карточке
