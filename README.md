# 🎓 Scholarship Hub Frontend

**Scholarship Hub** is a modern web application designed to streamline the scholarship application process for students. It enables users to discover scholarships, manage applications, submit reviews, and track statuses—all through an intuitive dashboard.

Built with **React** and styled using **Tailwind CSS**, the frontend is integrated with Firebase for authentication and Vercel for backend API support.

---

## 🌐 Live Links

- 🔗 **Frontend**: [https://assignment12-ae127.web.app](https://assignment12-ae127.web.app)
- 🔗 **Backend API**: [https://scholarship-server-beta.vercel.app](https://scholarship-server-beta.vercel.app)

---

## ✨ Features

### 🔐 User Authentication

- Firebase Authentication (Google login)
- Role-based access using a custom `useRole` hook

### 📄 Application Management

- List applications with detailed info: university, subject, degree, fees, status
- Add new applications with image uploads (via **ImgBB API**)
- Edit or delete applications (edit restricted to "Pending" ones)
- Input validations and responsive form handling

### ⭐ Review System

- Add reviews for scholarships (1-5 star custom rating)
- Update and delete reviews with dynamic table updates
- Display reviews with rating, scholarship title, university, and date

### 🎓 Scholarship Exploration

- Browse a list of available scholarships
- Rich search: filter by **keyword** or **category** (scholarship name, university, degree)
- Detailed scholarship cards with funding info and dates

### 🔁 Real-time Data Interaction

- Seamless integration with backend API
- Dynamic state updates for CRUD actions

### 📱 Responsive Design

- Mobile-friendly interface using **Tailwind CSS**

### 🔔 Toast Notifications

- User feedback for all actions via `react-toastify`

---

## 🛠️ Technologies Used

| Layer        | Technologies                                      |
| ------------ | ------------------------------------------------- |
| **Frontend** | React, React Router, React Icons, Tailwind CSS    |
| **Backend**  | Node.js (Vercel-hosted API)                       |
| **Auth**     | Firebase Authentication                           |
| **Hosting**  | Firebase Hosting (Frontend), Vercel (Backend API) |
| **Uploads**  | ImgBB API for image uploads                       |
| **UX/UI**    | Toasts via `react-toastify`, responsive layouts   |

---

## 📦 Prerequisites

- Node.js v14 or later
- npm or yarn
- Firebase account (for auth & hosting)
- Vercel account (for backend deployment)
- ImgBB API key

---

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd scholarship-hub
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup Environment Variables**

   - Firebase config
   - ImgBB API key
   - Backend API base URL

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to your fork: `git push origin feature-name`
5. Submit a Pull Request

---

## 📄 License

Licensed under the **MIT License**. See `LICENSE` for more info.
