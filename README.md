# 🏥 FI-Money Drug Inventory Management System

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-blue)
![Docker](https://img.shields.io/badge/Docker-Containers-lightblue)

## 📌 Overview
A secure backend API for pharmaceutical inventory management with JWT authentication, product CRUD operations, and real-time analytics.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop ([Install Guide](https://www.docker.com/products/docker-desktop/))
- Node.js 18+ (for local development)
- MongoDB Atlas account (for production)

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/FI-Money-Assignment.git
cd FI-Money-Assignment
2. Configure Environment
Create .env file:

bash
cp .env.example .env
Edit .env:

env
PORT=5000
MONGO_URI=mongodb://admin:password@mongo:27017/inventoryDB?authSource=admin
JWT_SECRET=your_32_character_secure_secret
3. Start with Docker
bash
docker-compose up --build

🐳 Docker Architecture
Diagram
Code
graph TD
    A[Frontend] -->|HTTP Requests| B[Backend:8080]
    B -->|MongoDB| C[(MongoDB:27017)]
🌐 API Endpoints
🔐 Authentication

run http://localhost:5000
Method	Endpoint	Description
POST	/api/register	User registration
POST	/api/login	JWT token generation
💊 Product Management
Method	Endpoint	Description
POST	/api/products	Add new product
PUT	/api/products/:id/quantity	Update stock quantity
GET	/api/products	List all products (paginated)
📊 Analytics
Method	Endpoint	Metrics Provided
GET	/api/analytics	Total products, inventory value, low stock alerts
🛠️ Development
Local Setup (Without Docker)
bash
npm install
npm start
Running Tests
bash
npm test
🚨 Production Deployment
MongoDB Atlas Configuration
Create free cluster on MongoDB Atlas

Update .env:

env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/inventoryDB?retryWrites=true&w=majority
Comment out mongo service in docker-compose.yml

Kubernetes Deployment (Optional)
bash
kubectl apply -f k8s-deployment.yaml
🔒 Security Best Practices
Always:

Use HTTPS in production

Rotate JWT secrets quarterly

Whitelist IPs in MongoDB Atlas

Never:

Commit .env to version control

Use default credentials

Expose MongoDB ports publicly

🧪 Testing with Postman
Import Postman Collection

Set environment variables:

baseUrl: http://localhost:8080

token: (from login response)

📈 Monitoring
bash
docker stats
Monitor:

CPU/Memory usage

Container health

🤝 Contributing
Fork the repository

Create feature branch (git checkout -b feature/xyz)

Commit changes (git commit -am 'Add feature xyz')

Push to branch (git push origin feature/xyz)

Open Pull Request

📜 License
MIT © 2025 Krishna Kaushik Thota

💡 Pro Tip: Use docker-compose down -v to completely reset your development environment.

text

### Key Features:
1. **Modern Formatting**: Badges, tables, and Mermaid diagrams
2. **Complete Documentation**: From local setup to production deployment
3. **Security Focus**: Clear do's/don'ts
4. **Multi-environment Ready**: Docker, Kubernetes, and bare-metal
5. **Professional Structure**: Consistent headers and sections

### Files You'll Need:
1. `.env.example` (template)
2. `postman/` directory with collection
3. `k8s-deployment.yaml` (if using Kubernetes)

Would you like me to provide any of these additional files?

