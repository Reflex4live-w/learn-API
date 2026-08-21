// git add .
// git commit -m "Краткое описание изменений"
// git push
// Запомни команды, они будут с тобой пока учишь API

//API (Aplication Programming Interface) - Это способ, 
// с помощью которого одна программа общается с другой.

//Обычно сервер на который поступает запрос отдает ланные в формате JSON


//HTTP методы - команды для сервера 

//GET - получить данные(список пользователей)
//POST - Создать новые данные (Добавить пользователей)
//PUT - обновить данные (Изменить имя пользователя)
//DELETE - Удалить данные (Удалить пользователя)


//Структура запроса и ответа

// Запрос:

// URL (адрес, например: https://api.example.com/users)

// Метод (GET, POST...)

// Заголовки (headers) — служебная информация

// Тело (body) — данные, если отправляешь (POST/PUT)

// Ответ:

// Статус (например, 200 — успех, 404 — не найдено)

// Тело (обычно JSON)

const button = document.getElementById('loadBtn');
const userList = document.getElementById('userList');

button.addEventListener('click', () => {
    //делаем гет запросы к API
    fetch('https://jsonplaceholder.typicode.com/users')

        .then(response => response.json())

        .then(users => {
            userList.innerHTML = "";
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        })

        .catch(error => {
            console.error('Ошибка:', error);
        })

})
