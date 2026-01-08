## 1.下載套件
npm install

## 2.啟動server
node server.js

## 3.（本機測試）使用 Postman 註冊帳號

- 方法：POST
- 路徑：http://localhost:3000/register
- Body：raw (JSON)

```json
{
  "email": "xxxxx@example.com",
  "password": "xxxxxxx"
}

post完成後，到db.json觀察，users有新增的註冊資料。
