Base url: http://127.0.0.1:8000

* *Для всех эндпойнтов, которым необходима авторизация
указать токен в headers:* **<u>Authorization: Token <auth_token></u>**

1. Login
- Endpoint: /auth/token/login/ (POST)
- Payload: username, password
- Desc: Получить токен для пользователя. 
Теперь, отправляя свой токен в headers каждого запроса, 
система распознает юзера как авторизованного и предоставит ему доступ.

2. Logout
- Endpoint: /auth/token/logout/ (POST)
- Headers: Authorization: Token <auth_token>
- Desc: Удалить текущий токен из БД. Он больше не существует и не привязан к юзеру.

3. Register
- Endpoint: /auth/users/ (POST)
- Payload: username, password, email
- Desc: Создать юзера и добавить его в БД.
