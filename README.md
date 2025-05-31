# 🍕 Pizza Dashboard

### Author: Atharv Soni

## 📌 Project Overview

Pizza Dashboard is a secure and responsive web application built using **Next.js**. It features **Google OAuth authentication**, **protected routes**, and a clean dashboard interface displaying mock pizza order data. The app demonstrates modern UI/UX practices and works across desktop, tablet, and mobile screens.

---

## 🚀 Features

- 🔐 Google OAuth Login using NextAuth.js
- 🛡️ Protected Dashboard Routes (`/dashboard`, `/pizza-orders`)
- 📄 Dynamic pages:
  - Welcome Page – “Hello, [User Name]”
  - Pizza Orders Table – With Order ID, Customer, Type, Quantity, Date, and Status
- 🚪 Logout Button & Navigation
- 📱 Responsive UI with modern CSS (no Tailwind)

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Authentication:** NextAuth.js (Google OAuth)
- **Styling:** Vanilla CSS (globals.css)
- **Deployment:** Vercel

---
# 🍕 Pizza Dashboard

### Author: Atharv Soni

## 📌 Project Overview

Pizza Dashboard is a secure and responsive web application built using **Next.js**. It features **Google OAuth authentication**, **protected routes**, and a clean dashboard interface displaying mock pizza order data. The app demonstrates modern UI/UX practices and works across desktop, tablet, and mobile screens.

---

## 🚀 Features

- 🔐 Google OAuth Login using NextAuth.js
- 🛡️ Protected Dashboard Routes (`/dashboard`, `/pizza-orders`)
- 📄 Dynamic pages:
  - Welcome Page – “Hello, [User Name]”
  - Pizza Orders Table – With Order ID, Customer, Type, Quantity, Date, and Status
- 🚪 Logout Button & Navigation
- 📱 Responsive UI with modern CSS (no Tailwind)

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Authentication:** NextAuth.js (Google OAuth)
- **Styling:** Vanilla CSS (globals.css)
- **Deployment:** Vercel

---

## ⚙️ Local Setup Instructions

1. **Clone the Repository**

git clone https://github.com/your-username/pizza-dashboard.git
cd pizza-dashboard

Install Dependencies


npm install


2. **Create .env.local File**

Create a .env.local file in the root of the project and add the following:


GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=any-random-secret
NEXTAUTH_URL=http://localhost:3000
🔐 Important: Never commit .env.local to Git. It contains sensitive credentials.

3. **Run the App Locally**


npm run dev
Visit: http://localhost:3000

🔍 Assumptions & Challenges
Assumptions:
No backend/database is used; mock pizza order data is hardcoded.

Google OAuth credentials are set up in Google Developer Console for localhost.

Challenges Faced:
CSS not applying initially due to missing globals.css import.

Redirection loop after login was resolved by properly setting the redirect path and wrapping protected routes with SessionProvider.

Tailwind was removed due to PostCSS issues; switched to plain CSS for full control.

📦 Third-Party Libraries Used
next-auth – Authentication


🧑‍💻 Author
Atharv Soni
📫 LinkedIn [(optional link)](https://www.linkedin.com/in/atharv-soni-a7143532b/)

✅ Deployment
Deployed on: [https://pizza-dashboard.vercel.app](https://internship-assignment-omega-rust.vercel.app/login)


