# admin

## Назначение проекта

Основное приложение, которое интегрирует все остальные приложения и предоставляет возможность выполнить любую доступную операцию.

Функциональность: просмотр карточек с контентом (например, статьи блога) и выбор действий над ними (CRUD).

## ❗️ Зависимости

Убедитесь, что у вас установлен node на машине.

```bash
node -v
```

Если у Вас не установлен node, то установите.

Установка node.

Ссылка на документацию для установки https://nodejs.org/en/download/package-manager/

Версия node 16.13.0
Версия npm 8.1.0
Версия ОС - Ubuntu 20.04

## Запуск

Когда склонируете этот репозиторий, перейдете в текущую директорию -- запустите команды для установки глобальной переменной yarn и установки зависимостей проекта.

```bash
npm i -g yarn
yarn install
```

Выполнить для старта приложения в режиме разработки.

```bash
yarn dev
```

Приложение должно развернуться на http://localhost:3000

## ❗️ Переменные окружения

Если проект не запустился, возможно, не хватает переменных окружения (.env) файл.

Спросить файл переменных у коллег.