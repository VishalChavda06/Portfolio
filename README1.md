# 🛍️ Sharddha Craft - Full-Stack E-Commerce Platform

A complete, production-ready e-commerce platform for selling handmade women's accessories. Built with modern web technologies, featuring a robust NestJS backend and a beautiful React frontend.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Projects](#projects)
  - [Backend API](#backend-api-sharddha_carft_backend)
  - [Frontend Application](#frontend-application-shraddha_carft)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## 🎯 Overview

**Sharddha Craft** is a full-stack e-commerce solution designed for small businesses selling handmade women's accessories. The platform provides:

- **Complete Shopping Experience**: Product browsing, cart management, wishlist, and checkout
- **Admin Dashboard**: Comprehensive management tools for products, orders, and users
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Scalable Architecture**: Production-ready backend with PostgreSQL database
- **Advanced Features**: BOGO offers, discount system, location-based shipping, product reviews

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Customer   │  │    Admin     │  │   Shopping   │    │
│  │   Portal     │  │   Dashboard  │  │   Features   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST API
                            │ JWT Authentication
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend API (NestJS + Prisma)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Auth Module │  │ Product API  │  │  Order API   │    │
│  │  User API    │  │  Cart API    │  │  Review API  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Prisma ORM
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              PostgreSQL Database                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │    Users     │  │   Products   │  │   Orders    │    │
│  │    Cart      │  │  Wishlist    │  │   Reviews   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Projects

This repository contains two main projects:

### 1. Backend API (`sharddha_carft_backend`)

A comprehensive RESTful API built with **NestJS**, **Prisma**, and **PostgreSQL**.

**Location**: `./sharddha_carft_backend/`

**Key Features**:
- RESTful API with Swagger documentation
- JWT-based authentication
- Role-based access control (User/Admin)
- Product catalog with size-based pricing
- Shopping cart and wishlist management
- Order processing with location-based shipping
- Product reviews system
- Admin dashboard APIs
- Newsletter subscription management
- Cloudinary image upload integration

**Tech Stack**:
- NestJS 11.x
- Prisma ORM 6.x
- PostgreSQL
- JWT Authentication
- Swagger/OpenAPI
- Cloudinary

### 2. Frontend Application (`Shraddha_carft`)

A modern, responsive React application built with **Vite** and **Tailwind CSS**.

**Location**: `./Shraddha_carft/`

**Key Features**:
- Beautiful, mobile-responsive UI
- Customer shopping portal
- Admin dashboard interface
- Shopping cart with real-time updates
- Wishlist functionality
- Product reviews and ratings
- Toast notification system
- Smooth animations with Framer Motion
- Protected routes and authentication

**Tech Stack**:
- React 19.1.0
- Vite 7.0.4
- React Router DOM 7.7.1
- Tailwind CSS 3.4.17
- Axios
- Context API for state management
- ShadCN UI components

---

## ✨ Features

### 🛒 Shopping Features

- ✅ **Product Catalog**: Browse products with categories, search, and filtering
- ✅ **Size-Based Pricing**: Multiple size variants per product with individual pricing
- ✅ **Shopping Cart**: Add, update, remove items with quantity management
- ✅ **Wishlist**: Save favorite products for later
- ✅ **Product Reviews**: Order-based review system with ratings (1-5 stars) and comments
- ✅ **Discount System**: Original price with strikethrough, discounted price, and percentage badges
- ✅ **BOGO Offers**: Buy One Get One Free promotions with live countdown timers
- ✅ **Location-Based Shipping**: Automatic shipping calculation based on customer location
  - Same city: ₹30
  - Same state: ₹40
  - Other state: ₹70
  - International: ₹500
- ✅ **Free Delivery**: Clear indicators for products with free shipping
- ✅ **Order Management**: Track orders, cancel within 30 minutes, view order history

### 👤 User Features

- ✅ **Authentication**: Secure JWT-based login/registration
- ✅ **Profile Management**: Update personal information, address, and preferences
- ✅ **Password Management**: Change password with validation
- ✅ **Order History**: View all past orders with detailed information
- ✅ **Review Management**: Create, update, and delete product reviews
- ✅ **Protected Routes**: Secure access to cart, profile, and orders

### 👨‍💼 Admin Features

- ✅ **Dashboard**: Real-time statistics for orders, revenue, users, and products
- ✅ **User Management**: View, manage, and update user accounts
- ✅ **Product Management**: Full CRUD operations with size variants and stock management
- ✅ **Order Management**: Track orders, update statuses, print shipping labels
- ✅ **BOGO Management**: Create and manage Buy One Get One Free offers
- ✅ **Analytics**: Business insights and performance metrics
- ✅ **Order Label Printing**: Generate shipping labels with complete order details

### 🎨 UI/UX Features

- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Modern UI**: Clean, minimal design with Tailwind CSS
- ✅ **Smooth Animations**: Framer Motion for transitions and loading states
- ✅ **Toast Notifications**: Professional notification system with multiple types
- ✅ **Loading States**: Professional loading indicators
- ✅ **Error Handling**: User-friendly error messages and validation
- ✅ **Brand Colors**: Consistent color scheme throughout the application

---

## 🛠️ Tech Stack

### Backend
- **Framework**: NestJS 11.x
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma 6.x
- **Authentication**: JWT (Passport)
- **API Documentation**: Swagger/OpenAPI
- **File Upload**: Cloudinary
- **Validation**: class-validator, class-transformer

### Frontend
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: ShadCN UI, Radix UI
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** database
- **npm** or **yarn**
- **Git**

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd 4s
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd sharddha_carft_backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database credentials and JWT secret

# Database setup
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run database migrations
npm run db:seed        # Seed database (optional)

# Start development server
npm run start:dev
```

**Backend will run on**: `http://localhost:3000`
**Swagger docs available at**: `http://localhost:3000/api`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd Shraddha_carft

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend will run on**: `http://localhost:5173`

### Environment Variables

#### Backend (.env)

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/sharddha_craft"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Admin Account
ADMIN_EMAIL="admin@gmail.com"
ADMIN_PASSWORD="iamadmin"

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Application
PORT=3000
NODE_ENV=development
```

#### Frontend

Update the API base URL in `src/services/api.js` if needed:

```javascript
const API_BASE_URL = 'http://localhost:3000';
```

---

## 📚 API Documentation

### Base URLs

- **Local Backend**: `http://localhost:3000`
- **Production Backend**: `https://shhardha-carft.vercel.app`
- **Swagger Docs**: `http://localhost:3000/api`

### Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Main API Endpoints

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User/Admin login

#### Products
- `GET /products` - Get all products (with pagination, filtering, search)
- `GET /products/:id` - Get product by ID
- `POST /products` - Create product (authenticated)
- `PUT /products/:id` - Update product (authenticated)
- `DELETE /products/:id` - Delete product (authenticated)

#### Categories
- `GET /categories` - Get all unique categories

#### Cart
- `GET /cart` - Get user's cart
- `POST /cart/add` - Add item to cart
- `PUT /cart/:itemId` - Update cart item
- `DELETE /cart/:itemId` - Remove from cart
- `DELETE /cart/clear` - Clear entire cart

#### Wishlist
- `GET /wishlist` - Get user's wishlist
- `POST /wishlist/add` - Add to wishlist
- `DELETE /wishlist/:productId` - Remove from wishlist

#### Orders
- `POST /orders` - Create order from cart
- `GET /orders` - Get user's orders
- `GET /orders/:id` - Get order details
- `PATCH /orders/:id/cancel` - Cancel order (within 30 minutes)
- `POST /orders/calculate-shipping` - Calculate shipping charges

#### Reviews
- `GET /reviews/product/:productId` - Get product reviews
- `POST /reviews` - Create review (order-based)
- `PUT /reviews/:id` - Update review
- `DELETE /reviews/:id` - Delete review
- `GET /reviews/product/:productId/can-review` - Check if user can review

#### Users
- `GET /users/profile` - Get user profile
- `PATCH /users/profile` - Update profile
- `PATCH /users/password` - Change password

#### Admin
- `GET /admin/stats` - Dashboard statistics
- `GET /admin/users` - Get all users
- `GET /admin/products` - Get all products (admin view)
- `GET /admin/orders` - Get all orders

For complete API documentation, visit the Swagger UI at `http://localhost:3000/api` when the backend is running.

---

## 🚀 Deployment

### Backend Deployment

#### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy automatically on push to main branch

#### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- `DATABASE_URL`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `PORT`
- `NODE_ENV=production`

### Frontend Deployment

#### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory: `cd Shraddha_carft`
3. Run: `vercel`
4. Follow the prompts to configure deployment

#### Netlify Deployment

1. Connect your GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Set environment variables if needed

#### Update API Base URL

Before deploying, update the API base URL in `src/services/api.js` to point to your production backend:

```javascript
const API_BASE_URL = 'https://your-backend-url.vercel.app';
```

---

## 📁 Project Structure

### Backend Structure

```
sharddha_carft_backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── migrations/            # Database migrations
│   └── seed.ts               # Database seeding
├── src/
│   ├── auth/                 # Authentication module
│   │   ├── dto/              # Auth DTOs
│   │   ├── strategies/       # JWT strategy
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── users/                # User management
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── users.controller.ts
│   │   ├── admin.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── products/             # Product management
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── products.controller.ts
│   │   ├── categories.controller.ts
│   │   ├── products.service.ts
│   │   └── products.module.ts
│   ├── cart/                 # Shopping cart
│   ├── wishlist/             # Wishlist
│   ├── orders/               # Order management
│   ├── reviews/              # Product reviews
│   ├── newsletter/           # Newsletter subscriptions
│   ├── upload/               # File uploads
│   ├── common/               # Shared utilities
│   │   ├── guards/           # Auth guards
│   │   ├── services/         # Shared services
│   │   └── pipes/            # Custom pipes
│   ├── database/             # Database configuration
│   ├── app.module.ts
│   ├── app.controller.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Frontend Structure

```
Shraddha_carft/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable components
│   │   ├── ui/              # Base UI components (ShadCN)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FeaturedProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ReviewForm.jsx
│   │   ├── ReviewList.jsx
│   │   ├── Toast.jsx
│   │   └── ...
│   ├── context/              # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── AdminContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── WishlistContext.jsx
│   │   └── ToastContext.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Checkout.jsx
│   │   ├── Profile.jsx
│   │   ├── Orders.jsx
│   │   ├── UnifiedLogin.jsx
│   │   ├── Register.jsx
│   │   ├── TermsAndPolicies.jsx
│   │   └── Admin/
│   │       ├── Login.jsx
│   │       ├── Dashboard.jsx
│   │       ├── Products.jsx
│   │       ├── Orders.jsx
│   │       └── Users.jsx
│   ├── services/            # API services
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── productService.js
│   │   ├── cartService.js
│   │   ├── wishlistService.js
│   │   ├── orderService.js
│   │   ├── reviewService.js
│   │   └── adminService.js
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── lib/                 # Library utilities
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎯 Key Features in Detail

### Discount System

Products support flexible discount pricing:
- **Original Price**: Base price before discount
- **Discounted Price**: Current selling price
- **Discount Percentage**: Visual percentage badge
- **Strikethrough Display**: Original price shown with strikethrough

### BOGO (Buy One Get One Free)

Special promotional offers for festivals and special occasions:
- **BOGO Badges**: Prominent display on product cards
- **Live Countdown**: Real-time countdown timer for time-limited offers
- **Automatic Calculation**: Cart automatically calculates free items
- **Order Tracking**: BOGO information included in order details

### Location-Based Shipping

Automatic shipping charge calculation:
- **Same City**: ₹30 (e.g., Surat)
- **Same State**: ₹40 (e.g., Gujarat)
- **Other State**: ₹70 (rest of India)
- **International**: ₹500
- **Free Delivery**: Products can be marked for free delivery

### Product Reviews

Order-based review system:
- **Order Requirement**: Only customers who ordered can review
- **One Review Per Product**: Each customer can review once
- **Rating System**: 1-5 star ratings with optional comments
- **Review Statistics**: Average rating and total reviews displayed
- **Review Management**: Users can update or delete their reviews

### Order Management

Comprehensive order processing:
- **Order Creation**: Create orders from cart with size selection
- **Order Tracking**: Track order status (Pending, Confirmed, Shipped, Delivered, Cancelled)
- **Order Cancellation**: Cancel orders within 30 minutes
- **Shipping Labels**: Admin can print shipping labels with complete details
- **Order History**: Users can view all past orders

---

## 🔐 Default Credentials

### Admin Account

- **Email**: `admin@gmail.com`
- **Password**: `iamadmin`

**Note**: Change these credentials in production!

---

## 📊 Database Schema

The application uses PostgreSQL with Prisma ORM. Key models:

- **User**: User accounts with roles (USER, ADMIN)
- **UserProfile**: Extended user information
- **Product**: Product catalog with categories
- **ProductSizeVariant**: Size-specific pricing and stock
- **CartItem**: Shopping cart items
- **WishlistItem**: User wishlist items
- **Order**: Customer orders with shipping information
- **OrderItem**: Order line items with BOGO tracking
- **Review**: Product reviews with ratings
- **NewsletterSubscriber**: Newsletter subscription management

See `sharddha_carft_backend/prisma/schema.prisma` for complete schema.

---

## 🧪 Testing

### Backend Testing

```bash
cd sharddha_carft_backend

# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov
```

### Frontend Testing

```bash
cd Shraddha_carft

# Run linting
npm run lint
```

---

## 📝 Available Scripts

### Backend Scripts

```bash
# Development
npm run start:dev          # Start in development mode
npm run start:debug        # Start in debug mode
npm run start:local        # Local development with auto-reload

# Production
npm run build              # Build the application
npm run start:prod         # Start in production mode

# Database
npm run db:generate        # Generate Prisma client
npm run db:migrate         # Run database migrations
npm run db:deploy          # Deploy migrations to production
npm run db:seed            # Seed the database
npm run db:reset           # Reset and seed the database
npm run db:studio          # Open Prisma Studio

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format code with Prettier
```

### Frontend Scripts

```bash
# Development
npm run dev                # Start development server

# Production
npm run build              # Build for production
npm run preview            # Preview production build

# Code Quality
npm run lint               # Run ESLint
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the UNLICENSED license.

---

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the Swagger API documentation at `/api` endpoint

---

## 🎉 Acknowledgments

- Built with ❤️ using NestJS, React, Prisma, PostgreSQL, and modern web technologies
- UI components powered by ShadCN UI and Radix UI
- Icons provided by Lucide React

---

## 📈 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal/Razorpay)
- [ ] Real-time notifications
- [ ] Advanced search and filtering
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Shipping integration (tracking)
- [ ] Mobile app (React Native)
- [ ] Inventory alerts
- [ ] Customer support chat
- [ ] Social media integration

---

**Sharddha Craft - Powering handcrafted e-commerce experiences** 🛍️✨

