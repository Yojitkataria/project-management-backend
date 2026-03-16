# Project Management Backend

A scalable backend API for a **Project Management System** built with **Node.js, Express, MongoDB, and JWT Authentication**.

---

## 🚀 Features

* User Registration
* Email Verification via Email
* Secure Password Hashing (bcrypt)
* JWT Authentication
* Access Token & Refresh Token system
* RESTful API architecture
* Production style backend structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* Nodemailer
* Mailgen

---

## 📸 Screenshots

### 1️⃣ User Registration API (Postman)

Shows successful user registration with a `201 Created` response.

<img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/2bcf0a00-93c4-48c8-8b33-050467d5eb1a" />


---

### 2️⃣ User Stored in MongoDB

User document stored securely with **hashed password** and verification token.

<img width="1910" height="1003" alt="image" src="https://github.com/user-attachments/assets/3f142a17-8ab6-45d2-9376-ab29745f1efa" />


---

### 3️⃣ Email Verification Mail

Verification email sent using **Mailgen + Nodemailer**.

<img width="1603" height="1067" alt="image" src="https://github.com/user-attachments/assets/9db80bb4-282c-4c36-b79b-8c7329a86130" />


---

## 📁 Project Structure

```
src
 ├ controllers
 │   └ auth.controllers.js
 │
 ├ models
 │   └ user.models.js
 │
 ├ routes
 │   ├ auth.routes.js
 │   └ healthcheck.routes.js
 │
 ├ utils
 │   ├ api-error.js
 │   ├ api-response.js
 │   ├ async-handler.js
 │   └ mail.js
 │
 ├ db
 │   └ index.js
 │
 ├ app.js
 └ index.js
```

---

## ⚙️ Installation

Clone repository

```
git clone https://github.com/Yojitkataria/project-management-backend.git
```

Move into project

```
cd project-management-backend
```

Install dependencies

```
npm install
```

---

## 🔐 Environment Variables

Create `.env` file

```
PORT=8000

MONGODB_URI=your_mongodb_uri

ACCESS_TOKEN_SECRET=your_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_secret
REFRESH_TOKEN_EXPIRY=10d

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_user
SMTP_PASS=your_pass
```

---

## ▶️ Run Server

```
npm run dev
```

Server runs at

```
http://localhost:8000
```

---

## 📡 API Endpoints

Register User

```
POST /api/v1/auth/register
```

Login

```
POST /api/v1/auth/login
```

Verify Email

```
GET /api/v1/auth/verify-email/:token
```

Refresh Token

```
POST /api/v1/auth/refresh-token
```

Logout

```
POST /api/v1/auth/logout
```

---

## 👨‍💻 Author

**Yojit Kataria**

GitHub
https://github.com/Yojitkataria

LinkedIn
https://www.linkedin.com/in/yojit-kataria/
