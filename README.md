# Full-Stack Coding Interview

## Objective

Build a full-stack application with a React frontend and Node.js/Express backend. This challenge evaluates your ability to:
- Create RESTful API endpoints
- Fetch and display data from your own API
- Manage state with React hooks
- Handle async operations across the stack
- Write clean, maintainable code

## 🛠 Prerequisites
**Make sure you have Node.js installed (v16 or later recommended).**
   You can check with:

   ```bash
   node -v
   npm -v
   ```

   If not installed, download it from [https://nodejs.org](https://nodejs.org).


## 🚀 Getting Started

### 1. Clone the Repository and navigate into it

   ```bash
   git clone git@github.com:lys-jcole/interview-react.git
   cd interview-react
   ```

### 2. Install dependencies

   ```bash
   npm install
   ```

### 3. Start the development server

   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:5000`
   - Frontend React app on `http://localhost:3000`

   **Alternatively**, run them separately in different terminals:
   ```bash
   npm run server  # Backend only
   npm start       # Frontend only
   ```

## 4. You're ready to start coding!

Open `server/index.js` for the backend and `src/App.jsx` for the frontend.

**Recommended approach:** Build the backend API first, test it, then build the frontend.

---

## ✅ Challenge Requirements

### **Backend Requirements (Node.js/Express)**
- [ ] Create a GET endpoint `/api/users` that fetches data from JSONPlaceholder
- [ ] Fetch from `https://jsonplaceholder.typicode.com/users` in your backend
- [ ] Return the fetched data as JSON to your frontend
- [ ] Enable CORS to allow frontend requests
- [ ] Add proper error handling
- [ ] Return appropriate HTTP status codes

**Key Task:** Your backend should act as a proxy - fetch from JSONPlaceholder and return the data.

### **Frontend Requirements (React)**
- [ ] Fetch data from your backend API (`http://localhost:5000/api/users`)
- [ ] Display a table showing: name, username, email, and city
- [ ] Add a search box to filter users by name (client-side)
- [ ] Add a button to sort users alphabetically by name
- [ ] Handle loading states while fetching data
- [ ] Handle errors gracefully (display error message if API fails)
- [ ] Use functional components and hooks (useState, useEffect)

### **Bonus Points** (Optional - only if time permits)
- [ ] Add a POST endpoint to create new users
- [ ] Add input validation on the backend
- [ ] Add CSS styling for better UX
- [ ] Extract reusable React components (SearchBar, UserTable, etc.)
- [ ] Add a form to create new users from the frontend

## 📚 API Documentation

### External API (JSONPlaceholder)
**URL:** `https://jsonplaceholder.typicode.com/users`

This is the API your backend should fetch from.

### Your Backend API
Create an endpoint that fetches from JSONPlaceholder and returns the data:

**Endpoint:** `GET http://localhost:5000/api/users`

**What it should do:**
1. Fetch data from `https://jsonplaceholder.typicode.com/users`
2. Return that data as JSON
3. Handle errors if the fetch fails

**Testing Your API:**
```bash
# Test in browser
http://localhost:5000/api/users

# Or with curl
curl http://localhost:5000/api/users
```

You should see the same user data from JSONPlaceholder.

## Notes

- Your backend acts as a proxy/middleman between frontend and JSONPlaceholder
- Node.js has built-in `fetch()` in v18+, or you can install `node-fetch`
- Use any styling method (inline styles, CSS, etc.)
- Focus on making it work first, then refine
- Add comments explaining key decisions

## 🗂 Project Structure

```
.
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.jsx            # React component (implement frontend here)
│   ├── index.jsx          # React entry point
│   └── index.css          # Optional: Add your styles here
├── server/
│   └── index.js           # Express server (implement backend here)
├── package.json
└── README.md
```

## 💡 Tips

- **First**, test JSONPlaceholder directly: `https://jsonplaceholder.typicode.com/users`
- **Start with the backend**: Create the endpoint that fetches from JSONPlaceholder
- You can use `fetch()` or `node-fetch` in Node.js to make HTTP requests
- Test your backend API in the browser before connecting the frontend
- Once the backend works, build the frontend to consume it
- Handle edge cases (loading, errors from both your API and JSONPlaceholder)
- Use `console.log` to debug
- Search and sort should happen client-side in React
- Make incremental progress - get basic functionality working first

---

## 📌 For Interviewers

Reference implementations and test examples are available in the `solution/` directory (excluded from git). See `solution/README.md` for details.

---

Happy coding and good luck! 🚀
