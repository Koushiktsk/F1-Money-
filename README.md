# FI-Money-Assinment (Drug Inventory Application)

# 📦 Inventory Management Tool (Backend)

This is a backend REST API for managing inventory and user authentication for a small business. Built using **Node.js**, **Express**, and **MongoDB**, it provides secure JWT-based login, CRUD operations for products, and analytics for tracking inventory metrics.

---

## 🚀 Features

- ✅ User login with **JWT authentication**
- 🧾 Add new products with details like name, SKU, price, and quantity
- 🔄 Update product stock quantity
- 🔍 View all products with pagination
- 📊 Product Analytics:
  - Total products
  - Total stock in inventory
  - Products below a quantity threshold
  - Total inventory value (price × quantity)
  - Recently Added Product 

---

## 🧰 Tech Stack

- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (jsonwebtoken)
- **Security:** bcryptjs for password hashing
- **Environment Management:** dotenv

---

## 📁 Project Structure

FIM/
├── app.js
├── .env
├── models/
│ ├── User.js
│ └── Product.js
├── controllers/
│ ├── authController.js
│ └── productController.js
├── routes/
│ ├── authRoutes.js
│ ├── productRoutes.js
│ └── analyticsRoutes.js
├── middleware/
│ └── auth.js
└── package.json

yaml
Copy
Edit

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/inventoryDB
JWT_SECRET=your_jwt_secret
📦 Install Dependencies
bash
Copy
Edit
npm install
Required dependencies:

express

mongoose

jsonwebtoken

bcryptjs

dotenv

cors

You can install them in one go:

bash
Copy
Edit
npm install express mongoose jsonwebtoken bcryptjs dotenv cors
▶️ Run the Server
bash
Copy
Edit
node app.js
Server runs on: http://localhost:5000

📬 API Endpoints
🔐 User Authentication
POST /login
Request:

json
Copy
Edit
{
  "username": "admin",
  "password": "password"
}
Response: JWT token

📦 Product Management
POST /products
Adds a new product (requires JWT)

Payload:

json
Copy
Edit
{
  "name": "Drug name",
  "type": "Drug Type",
  "sku": "PH123",
  "image_url": "http://example.com/image.jpg",
  "description": "Drug Description",
  "quantity": 10,
  "price": 19999
}
PUT /products/:id/quantity
Updates stock quantity

Payload:

json
Copy
Edit
{
  "quantity": 20
}
GET /products?page=1&limit=10
Lists paginated products

📊 Analytics Endpoints
All analytics require JWT.

GET /analytics/total-products – Total number of products

GET /analytics/total-stock – Total quantity of all products

GET /analytics/low-stock?threshold=5 – Products below threshold

GET /analytics/inventory-value – Total inventory value

🧪 Postman Collection
You can import the provided Postman collection from the postman/ folder (if you created one) or use the above endpoints manually.

🛡️ Security
Passwords are hashed using bcryptjs

JWT tokens are signed and verified securely

🙋‍♂️ Author
Krishna Kaushik Thota
ECE IIIT Bhagalpur
