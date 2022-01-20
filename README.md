# Simple Dcard Reader

## Development
更改 .env.development 參數，並執行以下指令啟用 devlopment server
```bash
$ npm start
```

## Production
新增 .env.production 並複製 .env.development 內容，修改對應參數並執行以下指令建立 production 檔案
```bash
$ npm run build
```

## 架構說明
本專案使用 Create React App 建立，使用 Koa + axios 解決 Dcard API 跨網域問題

使用一層 Context 處理基本資料流，並於載入時先放入 Skeleton 資料，API response 回來時移除 Skeleton 並移除重複的資料。

捲動載入則是使用 Intersection Observer 並於 isIntersecting 時觸發 Context 提供的 getPosts 