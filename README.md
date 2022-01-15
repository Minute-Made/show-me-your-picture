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

## KAKAO Login  
### [GET] http://127.0.0.1:8000/accounts/kakao/login/  
[RESPONSE]   
{  
    "key": "5eeacaa5e81abf30799f6c38632389ceb87d7187"  
}  

---
## User Profile  
### [GET] http://127.0.0.1:8000/accounts/user_id/  
[RESPONSE]  
{  
    "nickname":"Abby",  
    "gender":"F",  
    "description":"hi"  
}  

### [PUT] http://127.0.0.1:8000/accounts/user_id/

[RESPONSE]  
{  
    "nickname":"change",  
    "gender":"F",  
    "description":"hi"  
}  

### [GET] http://127.0.0.1:8000/accounts/getUser/  
헤더 Authorization : Token 9aa239fe3d45422c2c7d03755eea9d9144b04574  
[RESPONSE] - Token 유효할 경우  
{  
    "user_id": 2  
}  
  
[RESPONSE] - Token 유효 X  
401 Error

---
## Picture
### user_id에게 사진 업로드
### [POST] http://127.0.0.1:8000/pictures/{user_id}/
[REQUEST]  
![image](https://user-images.githubusercontent.com/52378625/149621911-53a54155-6930-4283-9cfb-30830fb2dfd0.png)  

[RESPONSE]  
{   
    "userid": 3,  
    "pictureid": 4,  
    "title": "s3test",  
    "description": "test",  
    "author": "test",  
    "image": "/media/image/20220115/8705dc6c59394a77955ffd6a51e38363.png"  
}  

### user_id의 사진 전체 불러오기
### [GET] http://127.0.0.1:8000/pictures/{user_id}/  
[REQUEST]  
헤더 Authorization : Token 9aa239fe3d45422c2c7d03755eea9d9144b04574  

[RESPONSE]  토큰 일치 혹은 교환한 사진이면 사진 공개  
[  
    {  
        "userid": 2,  
        "pictureid": 3,  
        "title": "s3test",  
        "description": "test",  
        "author": "test",  
        "image": "/media/image/20220115/81988879c76943288058bea95fb531d8.png"  
    }  
]  

[RESPONSE]  비공개  
[  
    {  
        "userid": 2,  
        "pictureid": 3,  
        "title": "s3test",  
        "description": "test",  
        "author": "test",  
        "image": "/media/image/private_image_show_me_your_picture.jpg"  
    }  
]  

### user_id의 사진 하나 불러오기  
### [GET] http://127.0.0.1:8000/pictures/{user_id}/{picture_id}/  
[RESPONSE]    
[  
    {  
        "userid": 2,  
        "pictureid": 3,  
        "title": "s3test",  
        "description": "test",  
        "author": "test",  
        "image": "/media/image/20220115/81988879c76943288058bea95fb531d8.png"  
    }  
]    


### user_id의 picture_id 사진 삭제  
### [DELETE] http://127.0.0.1:8000/pictures/{user_id}/{picture_id}/  
[RESPONSE]  
"Delete completed!"  
