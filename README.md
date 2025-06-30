# FreelancerHub 🧑‍💻

**FreelancerHub** is a modern freelance marketplace web application where users can create an account, log in, and manage their tasks. Users can add, edit, delete, and bid on tasks — but must be logged in to access these features. The platform includes a sleek dark mode for an enhanced user experience.

---

### Homepage View

![Homepage Screenshot](https://github.com/Mohammad7558/Freelancer-Hub-Frontend/blob/main/assignment-10-client-sid-c420b.web.app_.png))


## 🔗 Live Website

[🌐 Visit FreelancerHub](https://assignment-10-client-sid-c420b.web.app/)

---

## ✨ Features

- 📝 Task Management (Add, Edit, Delete)  
- 💬 Bid on Tasks  
- 🌙 Dark Mode Support  
- ⚠️ Protected Routes (Login required to perform actions)  
- 📦 Full-stack integration with a modern tech stack  

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- React.js  
- Tailwind CSS  
- DaisyUI  
- React Router  
- React Hot Toast  
- SweetAlert2  
- React Typewriter  
- React Lottie  
- Firebase Hosting & Authentication  

### 🗄️ Backend

- Express.js  
- MongoDB  
- Vercel Hosting  

---

## 💻 Local Installation & Running Guide

Follow these steps to run FreelancerHub locally on your computer.

### 🔧 Prerequisites

Make sure you have installed:

- ✅ [Node.js](https://nodejs.org/) (v16 or higher) — comes with npm  
- ✅ MongoDB account or local MongoDB installed  
- ✅ Firebase project setup with Authentication enabled  

---

### 🧪 Step-by-step Setup

#### 1️⃣ Clone the repository
git clone https://github.com/your-username/freelancerhub.git
cd freelancerhub


### 2️⃣ Install backend dependencies
cd server
npm install


### 3️⃣ Install frontend dependencies
Edit
cd ../client
npm install


### 4️⃣ Configure environment variables
Create a .env file inside the /server folder with the following variables:
env<br>
PORT=5000<br>
MONGO_URI=your_mongodb_connection_string<br>
JWT_SECRET=your_jwt_secret_key<br>

FIREBASE_API_KEY=your_firebase_api_key<br>
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain<br>
FIREBASE_PROJECT_ID=your_firebase_project_id<br>
Replace the placeholders with your actual credentials.<br>


### 5️⃣ Run the backend server
cd ../server
npm run dev
This will start your backend on http://localhost:5000.



### 6️⃣ Run the frontend client (in a new terminal)
cd ../client
npm run dev
This will start your frontend on http://localhost:5173.



### 🌐 Access the app
Open your browser and visit:
http://localhost:5173

---

📌 Tips & Troubleshooting
Make sure your MongoDB Atlas cluster allows connections from your IP address.

Enable Email/Password and Google sign-in in your Firebase Authentication settings.

If ports 3000 or 5000 are busy, update your .env or project config accordingly.

Use Chrome DevTools for debugging and network inspection.
