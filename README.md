# GreenCart — Full Stack MERN E-Commerce Platform 🛒

A production-style full-stack e-commerce platform built using the MERN stack, designed for grocery product ordering with secure authentication, seller-side product management, online payments, and order tracking.

## Live Deployment 🌍

https://grocery-delivery-application-blush.vercel.app/
---

## Core Features 🚀

### User Side

* Secure signup and login authentication
* Browse products by categories
* Best seller products section
* Add to cart functionality
* Direct purchase flow
* Razorpay online payment integration
* Cash on Delivery support
* My Orders page
* Contact page

### Seller Dashboard

* Seller authentication
* Add new products
* View all products
* Update stock availability
* Manage customer orders

---

## Tech Stack 🛠️

### Frontend

* React
* Tailwind CSS
* Axios
* React Router DOM
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* JWT
* bcryptjs
* Cookie Parser

### Payments

* Razorpay

### File Upload & Media

* Multer
* Cloudinary

---

## Project Architecture 📂

client/
├── components/
├── pages/
├── context/
├── assets/

server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/

---

## Installation & Setup ⚙️

### Clone Repository

git clone https://github.com/your-username/your-repository-name.git

### Frontend Setup

cd client
npm install
npm run dev

### Backend Setup

cd server
npm install
npm run server

---

## Environment Variables 🔐

Create a .env file inside backend folder:

PORT=4000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret

---

## Deployment 🚀

* Frontend and backend deployed using Vercel
* MongoDB Atlas used for database hosting

---

## Future Enhancements 📈

* Product search and filters
* Wishlist system
* Product reviews and ratings
* Coupon system
* Order tracking stages
* Admin analytics dashboard

---


## Author 👨‍💻

Muhammed Abdurahman C K

---

## License 📄

This project is for educational and portfolio purposes.
