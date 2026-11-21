# Campus Desk - React Routing & Firebase Authentication

Course: Tools & Technologies for Internet Programming

A simple React app with multiple pages, React Router navigation, Firebase
Email/Password authentication and protected routes.

## Pages

| Page      | Route        | Access    |
| --------- | ------------ | --------- |
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

## Tech Stack

React 19, Vite, React Router v7, Firebase Authentication

## Project Structure

```
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── main.jsx                 # entry: BrowserRouter + AuthProvider
    ├── App.jsx                  # all routes
    ├── firebase.js              # Firebase config + getAuth
    ├── index.css                # very simple styling
    ├── context
    │   └── AuthContext.jsx      # user state, login/register/logout, onAuthStateChanged
    ├── components
    │   ├── Navbar.jsx           # links change with login state
    │   └── ProtectedRoute.jsx   # redirects to /login if not logged in
    ├── pages
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Dashboard.jsx
    │   └── Profile.jsx
    └── utils
        └── authErrors.js        # readable Firebase error messages
```

## Setup

1. Install Node.js (LTS).
2. Run `npm install`.
3. Create a project at https://console.firebase.google.com/.
4. Project settings > Your apps > add a **Web app** and copy the config.
5. Authentication > Get started > Sign-in method > enable **Email/Password**.
6. Paste the config into `src/firebase.js`.
7. Run `npm run dev` and open http://localhost:5173.

## How to test

1. Register with an email and a password of 6+ characters.
2. Dashboard shows the logged-in email.
3. Refresh the page - you stay logged in.
4. Open Profile and click Logout.
5. Try `/dashboard` or `/profile` while logged out - you are redirected to Login.

## Note

Firebase web config is not a secret, but never commit real passwords or
service-account keys to GitHub.
# React-Firebase-Authentication
