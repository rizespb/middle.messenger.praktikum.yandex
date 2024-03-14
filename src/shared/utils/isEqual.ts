// const isObject = (arg: object | unknown): arg is object =>
//   typeof arg === 'object' &&
//   arg !== null &&
//   value.constructor === Object &&
//   Object.prototype.toString.call(value) === '[object Object]';

// const isEqual = (a: object, b: object): boolean => {
//   const aKeys = Object.keys(a) as (keyof typeof a)[];
//   const bKeys = Object.keys(b);

//   if (aKeys.length !== bKeys.length) {
//     return false;
//   }

//   for (let i = 0; i < aKeys.length; i = i + 1) {
//     const key = aKeys[i];

//     const aValue = a[key];
//     const bValue = b[key];

//     if (isObject(aValue) && isObject(bValue)) {
//       if (isEqual(aValue, bValue)) {
//         continue;
//       }

//       return false;
//     }

//     if (aValue !== bValue) {
//       return false;
//     }
//   }

//   return true;
// };

export const isEqual = (a: unknown, b: unknown): boolean => {
  if (Number.isNaN(a)) {
    return Number.isNaN(b);
  }

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return a === b;
  }

  const aKeys = Object.keys(a) as (keyof typeof a)[];
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i += 1) {
    const key = aKeys[i];

    const isPropsEqual = isEqual(a[key], b[key]);

    if (!isPropsEqual) {
      return false;
    }
  }

  return true;
};

const a = [
  {
    id: 507,
    title: 'Замечательный чат',
    avatar: '/57382eb5-fac5-4510-8537-5b91ca444201/4377bfce-153d-4a8e-967b-042497d7908e_ava.jpg',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Kort',
        second_name: 'K',
        display_name: null,
        login: 'kort',
        avatar: null,
      },
      time: '2024-03-14T09:18:33+00:00',
      content: 'From another user',
      id: 243,
    },
  },
  {
    id: 33,
    title: 'Самый интересный чат! Все сюда!',
    avatar:
      '/0d111164-0dbe-4eca-a951-aba98855b85c/0b2d29e6-f331-44fc-8594-8b8825a8f96d_interesting.webp',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Korn',
        second_name: 'K',
        display_name: 'KornN',
        login: 'korn',
        avatar:
          '/57382eb5-fac5-4510-8537-5b91ca444201/450c43b2-10b1-4d06-b610-4b9e1f3a08bc_ava.jpg',
      },
      time: '2024-03-14T11:10:40+00:00',
      content: 'Now 14:10',
      id: 260,
    },
  },
  {
    id: 32,
    title: 'Разное',
    avatar:
      '/0d111164-0dbe-4eca-a951-aba98855b85c/feed801b-7c6a-4c7f-9cf0-b47cc7464970_different.png',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Kort',
        second_name: 'K',
        display_name: null,
        login: 'kort',
        avatar: null,
      },
      time: '2024-03-14T09:23:02+00:00',
      content: 'Still 12:22',
      id: 247,
    },
  },
  {
    id: 31,
    title: 'Новости',
    avatar: '/0d111164-0dbe-4eca-a951-aba98855b85c/b85d2ffd-1972-4062-a7ac-cc457a4e1d7a_news.png',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Korn',
        second_name: 'K',
        display_name: 'KornN',
        login: 'korn',
        avatar:
          '/57382eb5-fac5-4510-8537-5b91ca444201/450c43b2-10b1-4d06-b610-4b9e1f3a08bc_ava.jpg',
      },
      time: '2024-03-13T07:33:02+00:00',
      content: 'Новое сообщение',
      id: 219,
    },
  },
  {
    id: 30,
    title: 'Погода',
    avatar: '/57382eb5-fac5-4510-8537-5b91ca444201/91ad7918-168d-41cb-ab35-94744185640a_Погода.png',
    created_by: 9,
    unread_count: 0,
    last_message: null,
  },
];

const b = [
  {
    id: 507,
    title: 'Замечательный чат',
    avatar: '/57382eb5-fac5-4510-8537-5b91ca444201/4377bfce-153d-4a8e-967b-042497d7908e_ava.jpg',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Kort',
        second_name: 'K',
        display_name: null,
        login: 'kort',
        avatar: null,
      },
      time: '2024-03-14T09:18:33+00:00',
      content: 'From another user1',
      id: 243,
    },
  },
  {
    id: 33,
    title: 'Самый интересный чат! Все сюда!',
    avatar:
      '/0d111164-0dbe-4eca-a951-aba98855b85c/0b2d29e6-f331-44fc-8594-8b8825a8f96d_interesting.webp',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Korn',
        second_name: 'K',
        display_name: 'KornN',
        login: 'korn',
        avatar:
          '/57382eb5-fac5-4510-8537-5b91ca444201/450c43b2-10b1-4d06-b610-4b9e1f3a08bc_ava.jpg',
      },
      time: '2024-03-14T11:10:40+00:00',
      content: 'Now 14:10',
      id: 260,
    },
  },
  {
    id: 32,
    title: 'Разное',
    avatar:
      '/0d111164-0dbe-4eca-a951-aba98855b85c/feed801b-7c6a-4c7f-9cf0-b47cc7464970_different.png',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Kort',
        second_name: 'K',
        display_name: null,
        login: 'kort',
        avatar: null,
      },
      time: '2024-03-14T09:23:02+00:00',
      content: 'Still 12:22',
      id: 247,
    },
  },
  {
    id: 31,
    title: 'Новости',
    avatar: '/0d111164-0dbe-4eca-a951-aba98855b85c/b85d2ffd-1972-4062-a7ac-cc457a4e1d7a_news.png',
    created_by: 9,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Korn',
        second_name: 'K',
        display_name: 'KornN',
        login: 'korn',
        avatar:
          '/57382eb5-fac5-4510-8537-5b91ca444201/450c43b2-10b1-4d06-b610-4b9e1f3a08bc_ava.jpg',
      },
      time: '2024-03-13T07:33:02+00:00',
      content: 'Новое сообщение',
      id: 219,
    },
  },
  {
    id: 30,
    title: 'Погода',
    avatar: '/57382eb5-fac5-4510-8537-5b91ca444201/91ad7918-168d-41cb-ab35-94744185640a_Погода.png',
    created_by: 9,
    unread_count: 0,
    last_message: null,
  },
];

console.log('isEqual', isEqual(a, b));
