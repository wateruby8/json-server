## 1.下載套件
npm install

## 2.啟動server
node server.js

## 3.（本機測試）使用 Postman 註冊帳號

- 方法：POST
- 路徑：http://localhost:8080/register
- Body：raw (JSON)

```json
{
  "email": "xxxxx@example.com",
  "password": "xxxxxxx"
}
```
- post完成後，到db.json觀察，users有新增的註冊資料。

## 4. 後端部署tips （zeabur）
https://zeabur.com/zh-TW/

- 主要設定於package.json & server.js
- 儲存庫可設定private
- zeabur 登入推薦先選github
- 免費版過一段時間後，會自動取消部署。以後展示前要記得重新部署