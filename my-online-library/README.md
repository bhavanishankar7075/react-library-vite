
# **Online Library — React Assignment (Internshala)**

This project is a complete Online Library application built using **Vite + React**, as required in the assignment.
Styling is done using **Bootstrap (CDN)** and separate custom CSS files for each component.
State management is handled using **Redux Toolkit**.


---

## **Features Implemented**

### **1. Home Page**

* Displays major book categories dynamically.
* Shows a list of popular books.
* Fully responsive modern UI.

### **2. Browse Books Page**

* Displays all books stored in Redux.
* Search functionality (search by title or author).
* Category filter using dynamic route: `/books/:category`.
* Clean grid layout.
* Includes a button to navigate to the Add Book page.

### **3. Book Details Page**

* Route: `/book/:id`.
* Shows book title, author, category, rating, description, and image.
* Modern UI with badges and star rating.
* Provides a Back to Browse button.

### **4. Add Book Page**

* Includes form fields:

  * Title
  * Author
  * Category
  * Rating (0–5)
  * Description
  * Image URL (optional)
* Form validation for all required fields.
* After successful submit:

  * Book is added into Redux state.
  * A success notification is shown.
  * Automatic redirect to the Browse Books page.

### **5. Not Found Page (404)**

* Shown for any invalid URL.
* Displays an error message and a link to return to the Books page.

### **6. Redux Toolkit**

* Stores and manages the entire book list.
* New books are added using a reducer.
* Contains 15 initial books as required.

### **7. Styling**

* Bootstrap included via **CDN link** in `index.html`.
* Additional custom CSS files for:

  * Header
  * Home
  * BookCard
  * BrowseBooks
  * AddBook
  * BookDetails
  * Notification
  * Global styles

---

## **Folder Structure**

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── BookCard.jsx
│   ├── Notification.jsx
│   └── OptimizedImage.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBook.jsx
│   └── NotFound.jsx
│
├── store/
│   ├── index.js
│   └── booksSlice.js
│
├── styles/
│   ├── Header.css
│   ├── Home.css
│   ├── BookCard.css
│   ├── BrowseBooks.css
│   ├── BookDetails.css
│   ├── AddBook.css
│   ├── Notification.css
│   └── globals.css
│
├── assets/
│   └── placeholder-book.jpg
│
├── App.jsx
├── main.jsx
└── initialBooks.js
```

---

## **How to Run the Project**

### **1. Install dependencies**

```
npm install
```

### **2. Start development server**

```
npm run dev
```

### **3. Build for production**

```
npm run build
```

### **4. Preview production build**

```
npm run preview
```

---

## **Assignment Requirements Completed**

* React Router used
* Dynamic routes implemented
* Redux Toolkit used for state management
* Add Book form with validation
* Book browsing, searching, and filtering
* Book details page
* Bootstrap CDN included
* Separate component files
* Separate CSS files
* Responsive layout
* Not Found page
* No extra libraries added
* Clean and simple Vite config


