# Web-мессенджер

## Содержание

- [Описание](#описание)
- [Используемые технологии](#используемые-технологии)
- [Макет](#макет)
- [Команды](#команды)
- [Ссылки на страницы](#ссылки-на-страницы)
- [Netlify](#ссылки-на-страницы)

## Описание

Проект представляет из себя web-мессенджер, предоставляющий пользователю следующую функциональность:

- Возможность регистрации и авторизации.
- Возможность заполнить и сохранить информацию о пользователе.
- Возможность писать и читать сообщения в личных чатах с другими пользователями и в общих чатах на несколько пользователей.

## Используемые технологии

Название      | Описание
-------------------------------------------------------- | -------------------------------------------------
[Vite](https://vitejs.dev/)  				  			 | Сборка проекта
[Handlebars](https://handlebarsjs.com/) 	  			 | Шаблонизатор
[Express](https://expressjs.com/)			  			 | Сервер для раздачи статитки
[Typescript](https://www.typescriptlang.org/) 			 | Типизация
[SCSS](https://sass-scss.ru/) 				  			 | Стили описаны с использованием препроцессора
[Сss-modules](https://github.com/css-modules/css-modules)| Организация пространства имен для css-классов
[Eslint](https://eslint.org/)				   			 | Статический анализ кода в файлах *.js, *.ts
[Stylelint](https://stylelint.io/)						 | Статический анализ кода в файлах *.css, *.scss
[Jest](https://jestjs.io/)				  				 | Фрйемворк для юнит-тестов
[Husky](https://typicode.github.io/husky/)				 | Прекоммит хуки


## Макет

Ссылка на макет в Figma – [Макеты](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=1-600&mode=design&t=VCp4U8leBxHmG3QZ-4)


## Команды

`npm run start` – сборка проекта и запуск Express-сервера

`npm run dev` – запуск проекта в режиме разработки

`npm run build` – сборка проекта

`npm run lint` – запуск ESLint и Stylelint

`npm run test` – запуск тестов


## Ссылки на страницы

`/login` – страница авторизации

`/signup` – страница регистрации

`/chats` – страница чатов

`/profile` – страница профиля

`/404` – страница 404

`/500` – страница 500

Сайт со всеми страницами доступен по адресу [https://messanger-praktikum.netlify.app](https://messanger-praktikum.netlify.app/):

[Страница авторизации](https://messanger-praktikum.netlify.app/login)

[Страница регистрации](https://messanger-praktikum.netlify.app/signup)

[Страница чатов](https://messanger-praktikum.netlify.app/chats)

[Страница профиля](https://messanger-praktikum.netlify.app/profile)

[Страница 404](https://messanger-praktikum.netlify.app/404)

[Страница 500](https://messanger-praktikum.netlify.app/500)
