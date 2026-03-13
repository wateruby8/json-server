const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const path = require('path');

const app = jsonServer.create();

// 使用 path.resolve 確保在雲端環境中路徑絕對正確
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// 【核心設定】必須將資料庫掛載到 app，json-server-auth 才能執行 JWT 驗證
app.db = router.db;

// 【嚴謹的 CORS 設定】
app.use(cors({
  origin: '*', // 開發階段允許所有來源，若要更嚴謹可填寫你的 GitHub Pages 網址
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 【中間件順序】順序錯誤會導致權限失效或請求卡死
app.use(middlewares);
app.use(auth);
app.use(router);

// 【埠號監聽】Zeabur 必須監聽 0.0.0.0
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});