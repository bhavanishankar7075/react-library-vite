# Online Library — React Assignment (Internshala)

This project is a complete Online Library application built using **Vite + React** as required in the assignment. The UI uses **Bootstrap (CDN)** for styling. State management is handled by **Redux Toolkit**.

This project follows all the instructions from the assignment PDF.

---

## 📌 Features Implemented (All Requirements Covered)

### ✔ 1. Home Page
- Displays book categories dynamically.
- Shows popular books (first 3 from the list).

### ✔ 2. Browse Books Page
- Lists all books with search functionality.
- Search filters by **title** or **author**.
- Category filter using dynamic route `/books/:category`.
- “Add Book” button on the page.

### ✔ 3. Book Details Page
- Opens through dynamic route `/book/:id`.
- Shows title, author, rating, category, and description.

### ✔ 4. Add Book Page
- Form to add a new book.
- Form validation included:
  - Title required  
  - Author required  
  - Category required  
  - Rating (0–5 only)  
  - Description required  
- On successful submit:
  - Book is added using Redux
  - Redirects to `/books`
  - Newly added book appears at the top of the list

### ✔ 5. 404 Page
- Shown for any invalid route.
- Does **not** include Header (per assignment rules).
- Displays the invalid URL.

### ✔ 6. Redux Toolkit Used
- `booksSlice.js` manages book data.
- New books are added using `addBook` reducer.

### ✔ 7. Bootstrap Styling
- Using Bootstrap via **CDN link** inside `index.html`.

---


---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install


