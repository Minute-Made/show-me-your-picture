# SNU x KU LIKELION 연합 해커톤
---
## Signup  
### [POST] http://127.0.0.1:8000/accounts/signup/  
[REQUEST]  
{  
    "id":"test1",  
    "password":"user",  
    "nickname":"user"  
}  

[RESPONSE] - 200  
{  
    "Token": "d30e3f522cfec2bb676b74a31407223b8e93fcba",  
    "user_id": 10  
}  

[RESPONSE] - 400 (dulpicated id)  
{  
    "err_msg": "username exists"  
}  

---
## Login  
### [POST] http://127.0.0.1:8000/accounts/login/  
[REQUEST]  
{  
    "id":"test1",  
    "password":"user"  
}  

[RESPONSE] - 200  
{  
    "Token": "d30e3f522cfec2bb676b74a31407223b8e93fcba",  
    "user_id": 10  
}  

[RESPONSE] - 401 (Unauthorized, when Login failed)

---
## KAKAO Login  
### [GET] http://127.0.0.1:8000/accounts/kakao/login/  
