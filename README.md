# S3 Order Fetcher

## 簡介
S3 Order Fetcher 是一個使用 Node.js 和 AWS SDK v3 建立的無伺服器應用程式，旨在從指定的 S3 存儲桶中獲取訂單資料。此應用程式通過 AWS Lambda 運行，可以根據查詢參數返回特定的訂單信息。

## 功能
- 從 AWS S3 獲取指定的檔案資料。
- 根據訂單 ID 查詢特定訂單。
- 返回 JSON 格式的訂單資料，或在出錯時返回錯誤信息。

## 安裝與使用方式
1. 確保已安裝 `Node.js` 和 `npm`。
2. 克隆此存儲庫：
   ```bash
   git clone https://github.com/your-username/S3-Order-Fetcher.git
   cd S3-Order-Fetcher
   ```
3. 安裝必要的依賴模組：
   ```bash
   npm install
   ```
4. 在程式碼中，設置你的 S3 桶名、檔案名、AWS 區域及憑證：
   ```javascript
   const BUCKET_NAME = '你的 S3 桶名';
   const FILE_NAME = '你的檔案名';
   ```

   ```javascript
   const s3Client = new S3Client({
       region: '你的區域',
       credentials: {
           accessKeyId: '你的 AWS 存取金鑰',
           secretAccessKey: '你的 AWS 私密金鑰'
       }
   });
   ```
5. 部署此程式碼至 AWS Lambda，並設置 API Gateway 以便接收 HTTP 請求。

## 必要的依賴模組清單
- `@aws-sdk/client-s3`: 用於與 AWS S3 進行交互的 AWS SDK 客戶端。

## 授權條款
本專案採用 MIT 授權條款，詳細的授權內容請參閱 [LICENSE](LICENSE) 文件。
```
*請務必根據實際專案名稱、檔案名稱及參與者資訊，修改 GitHub 的 URL 及相關信息。*