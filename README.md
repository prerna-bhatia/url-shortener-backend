# url-shortener-backend
# 🚀 URL Shortener API

This is a simple **Node.js + Express.js** based REST API that takes long URLs and returns a shortened version using a unique code. It also supports redirecting the short URL to the original one.

---

## 🔧 Tech Stack

- **Language:** JavaScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Tools Used:** shortid, valid-url, dotenv

---

## 📁 Project Structure

url-shortener-api/
├── models/
│ └── Url.js # Mongoose Schema
├── routes/
│ └── url.js # All route handlers
├── .env # Environment variables
├── server.js # Entry point of app
├── package.json
└── README.md


---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/prerna-bhatia/url-shortener-backend.git
cd url-shortener-backend
2. Install dependencies
npm install
3. Set up your .env file
Create a .env file in the root with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
Replace your_mongodb_connection_string with your actual MongoDB Atlas URI

4. Run the server
node server.js
🔗 API Endpoints
📌 POST /shorten
Purpose: Create a short URL from a long one.

Request Body:

{
  "url": "https://example.com/some/very/long/link"
}
Response:

{
  "shortUrl": "http://localhost:5000/abc123"
}
📌 GET /:code
Purpose: Redirect to original URL using short code

Usage:

Open browser or Postman

GET http://localhost:5000/abc123

Action: Redirects to long/original URL

✅ Features
URL validation using valid-url

Short code generation using shortid

MongoDB schema stores:

Original URL

Short code

Timestamp

Basic error handling

.env config for clean secrets

🚀 Future Improvements (Bonus Ideas)
Link expiration logic

Analytics (number of clicks)

Rate limiting middleware

Frontend UI to input and show links

📌 Author
Prerna Bhatia
GitHub
