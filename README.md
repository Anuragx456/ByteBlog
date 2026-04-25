# 📝 ByteBlog

<div align="center">

![ByteBlog Logo](client/src/assets/logo.svg)

**A modern full-stack blog platform built with React and Express.js**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

ByteBlog is a feature-rich, full-stack blogging platform that enables users to create, read, and manage blog content seamlessly. With a modern React frontend and an Express.js backend powered by MongoDB, ByteBlog offers a smooth and responsive user experience.

---

## ✨ Features

### 🖥️ Frontend Features

- **📰 Blog Browsing** - Browse and read blog posts with a clean, modern interface
- **🔍 Category Filtering** - Filter blogs by categories for easy navigation
- **📝 Rich Text Editor** - Create and edit blogs using Quill rich text editor
- **🎨 Responsive Design** - Fully responsive layout powered by Tailwind CSS
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🎬 Smooth Animations** - Engaging animations using Motion library
- **📧 Newsletter Subscription** - Stay updated with the latest blog posts

### 🔧 Admin Dashboard

- **📊 Dashboard Overview** - View blog statistics and key metrics
- **➕ Add New Blog** - Create new blog posts with image upload support
- **📋 Blog Management** - List, edit, and delete existing blog posts
- **💬 Comment Moderation** - Manage and moderate user comments
- **🔐 Admin Authentication** - Secure login system for administrators

### 🛠️ Backend Features

- **🔗 RESTful API** - Well-structured Express.js API endpoints
- **🗃️ MongoDB Integration** - Scalable NoSQL database for data storage
- **🔒 JWT Authentication** - Secure token-based authentication
- **📤 File Upload** - Image upload support with Multer
- **🔀 CORS Support** - Cross-origin resource sharing enabled

---

## 🏗️ Project Structure

```
ByteBlog/
├── client/                    # Frontend (React + Vite)
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/           # Images, icons, and static files
│   │   ├── components/       # Reusable React components
│   │   │   ├── admin/        # Admin-specific components
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Newsletter.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── admin/        # Admin pages
│   │   │   │   ├── AddBlog.jsx
│   │   │   │   ├── Comments.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   └── ListBlog.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── package.json
│   └── vite.config.js
│
└── server/                    # Backend (Express.js)
    ├── configs/
    │   └── db.js             # MongoDB connection configuration
    ├── controllers/          # Route controllers
    ├── middleware/           # Custom middleware
    ├── models/               # Mongoose models
    ├── routes/               # API routes
    ├── server.js             # Server entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ByteBlog.git
   cd ByteBlog
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../server
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the `server` directory:

   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd server
   npm run server    # Development mode with nodemon
   # or
   npm start         # Production mode
   ```

2. **Start the Frontend Development Server**

   ```bash
   cd client
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React 19         | UI Library              |
| Vite             | Build Tool & Dev Server |
| React Router DOM | Client-side Routing     |
| Tailwind CSS 4   | Styling Framework       |
| Quill            | Rich Text Editor        |
| Motion           | Animations              |
| Moment.js        | Date Formatting         |

### Backend

| Technology   | Purpose              |
| ------------ | -------------------- |
| Express.js 5 | Web Framework        |
| MongoDB      | Database             |
| Mongoose     | ODM                  |
| JWT          | Authentication       |
| Multer       | File Upload          |
| CORS         | Cross-Origin Support |

---

## 📜 Available Scripts

### Frontend (`client/`)

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

### Backend (`server/`)

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run server` | Start with nodemon (dev) |
| `npm start`      | Start production server  |

---

## 📸 Screenshots

### Home Page

> A clean and modern home page with featured blogs, category filters, and newsletter subscription.
<img width="1919" height="1047" alt="HomePage" src="https://github.com/user-attachments/assets/e9c6a9ed-c77e-4589-b367-0a3583ad12ba" />


### Admin Dashboard

> Comprehensive admin panel for managing blog posts, viewing statistics, and moderating comments.
<img width="1917" height="1010" alt="Dashboard" src="https://github.com/user-attachments/assets/cac70921-e218-4c95-985e-4f4c16a587d2" />


### Blog Editor

> Rich text editor powered by Quill for creating beautiful blog posts with image support.
<img width="1919" height="1031" alt="Add Blogs" src="https://github.com/user-attachments/assets/ae872eca-2559-4071-a46a-4878fdc5172f" />

### SignUp Page
<img width="1919" height="1044" alt="SignUp Page" src="https://github.com/user-attachments/assets/89b3c878-bfd1-4e64-8b23-8a18dc50ee17" />

### SignIn Page
<img width="1919" height="1043" alt="SignIn Page" src="https://github.com/user-attachments/assets/cc4d3583-993b-4dca-ab54-717ea2aac6fc" />

### Comments Page
<img width="1917" height="1018" alt="Comments Page" src="https://github.com/user-attachments/assets/c0248a0e-f9f3-4e06-8782-d14193d7c2f2" />




---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**ByteBlog Team**

- GitHub: [@Anuragx456](https://github.com/Anuragx456)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and ☕

</div>
