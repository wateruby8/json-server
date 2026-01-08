const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// 把 db.json 綁到 server 上，讓 json-server-auth 可以存取使用者資料
app.db = router.db;

// 1. 掛上預設 middleware，處理 logger、CORS、cache-control
//  Logger → 每個 request 都印在 console，方便 debug
//  CORS → 允許前端網站跨域呼叫 API
//  Cache-control → 防止瀏覽器快取，確保拿到最新資料
app.use(middlewares);

// 2. 解析前端送來的 JSON 資料 (POST/PUT request)
app.use(jsonServer.bodyParser);

// 3. 把 auth 加到 server 上。 處理 /login、/register
//  登入/註冊 → 發 JWT token 
//  受保護路由 → 驗證 token 是否有效
app.use(auth);

// 4. 使用路由，讓 db.json 變成可操作的 API，提供 CRUD 功能 (GET, POST, PUT, DELETE)
app.use(router);

// 5. 啟動伺服器
app.listen(3000,() => {
    console.log("JSON Server running at http://localhost:3000");
});
