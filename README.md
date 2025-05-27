# Scholarship Hub

**Scholarship Hub** is a web application designed to streamline the scholarship application process for students. It allows users to manage their scholarship applications, submit reviews, explore opportunities, and track application statuses through an intuitive dashboard. Built with React and hosted on Firebase, it integrates with a Vercel-hosted backend API for seamless data management.

## Live Links

- **Frontend**: [https://assignment12-ae127.web.app/](https://assignment12-ae127.web.app/)
- **Backend API**: [https://scholarship-server-beta.vercel.app/](https://scholarship-server-beta.vercel.app/)

## Features

- **User Authentication**: Secure login and role-based access using Firebase Authentication and a custom `useRole` hook.
- **Application Management**:
  - View a list of submitted applications with details like university name, address, subject, degree, fees, and status (Pending, Approved, Rejected).
  - Add, update, or delete applications with form validation and image uploads via ImgBB API.
  - Edit application details (e.g., phone number, address, photo) for "Pending" applications.
- **Review System**:
  - Add reviews for scholarships with a custom star rating system (1-5 stars) and comments.
  - Update or delete existing reviews with immediate table updates.
  - Display reviews with ratings, scholarship titles, university names, and dates.
- **Scholarship Exploration**:
  - Browse a list of scholarship opportunities with details like university, scholarship name, degree, funding type, and application dates.
  - **Search Functionality**: Use a search bar to find scholarships by keywords and a "Search by Category" dropdown to filter by scholarship name, university name, or degree name.
- **Real-time Data Updates**: Fetch and update data dynamically using the backend API.
- **Responsive Design**: Optimized for desktop and mobile with Tailwind CSS.
- **Toast Notifications**: Feedback on actions (e.g., updates, deletions) using `react-toastify`.

## Technologies Used

- **Frontend**:
  - React
  - React Router (for navigation)
  - React Icons (for custom star ratings and icons)
  - Tailwind CSS (styling)
  - Firebase Authentication
  - Firebase Hosting
- **Backend**:
  - Node.js (assumed based on Vercel hosting)
  - Vercel (API hosting)
- **API Integration**:
  - Fetch API for CRUD operations
  - ImgBB API for image uploads
- **Notifications**: `react-toastify`

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for authentication and hosting)
- Vercel account (for backend API hosting)
- ImgBB API key (for image uploads)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd scholarship-hub
   ```
