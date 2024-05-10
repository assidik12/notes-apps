## register & login

- POST /api/user/login

request body :

```json
{
  "email": "email",
  "password": "password"
}
```

response body :

```json
{
  "token": "token",
  "message": "message"
}
```

- POST /api/user/refreshToken

request body :

```json
{
  "token": "token"
}
```

response body:

```json
{
  "accesToken": "accesToken",
  "message": "message"
}
```

- POST /api/user/register

request body :

```json
{
  "username": "username",
  "email": "email",
  "password": "password"
}
```

response body:

```json
{
  "data": "data",
  "message": "message"
}
```
