# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React JS Class

## Installation

---

### **✅Q: What is the ESLint extension used for?**

1. Install required software:\*\*

#### **✅Q: What is the ESLint extension used for?**

> ESLint is used for identifying and reporting on patterns found in ECMAScript/JavaScript code. ESLint has the goal of making code more consistent and avoiding bugs.

## Warm Up Exercise

---

### **✅1. Create a simple react component called “HelloWorld” that receives a name as prop and displays a simple message: “Hello World! My name is [your name] and this is my first React App!”**

### **✅2.Q: What are Design Systems and what are their advantages? Examples: a. Bootstrap Design Systems; b. Material-UI**

> Design systems are also known as the single source of truth for the team involved in creating the product. The Design System is a comprehensive guide to project design, which contains a collection of rules, principles, restrictions and best practices. It allows the team to design, develop and maintain product quality. The central element of the Design System is often a library of user interface components (such as Material-UI or Boostrap). These UI elements also have their representation implemented in the code.

## Project

---

> _Build a Web application using React, with a login form and after that, a page to search for GitHub Repositories, using public GitHub API, with pagination._

### **✅1. Choose a Design System for the Project. In the following steps, you should use appropriate components for each scenario.**

- Design System: Material-UI

### **✅2. Create a stateful component for Sign in page.**

-

Tip: Choose between using Class Components or Functional Components.
Note: Make a decision on your folder structure.

### **⚠️3.Class vs Functional Component. Which one did you choose and why?**

-

### **⚠️4. Add validation to the Form. Could be a simple validation, like the number of characters of the email and password).**

-

Note: You will not be implementing a real sign in. No need for backend communication. Just to simulate the session after sign in form being submitted, you can store user information at local storage.

### **⚠️5. Implement a Loading mechanism when submitting the form (simulate a delay of 2 seconds).**

-

### **⚠️6. Show an Alert message, on top of Sign in form, when the form is invalid (use Design Systems)**

-

### **⚠️7. Create a stateful component for the Github Repositories page. Example:**

-

Tip: Skip the change page logic and change your entry component from the Sign In page to this newly created Repository Catalog page.

### **⚠️8. Use GitHub Api for Repository search:**

a. Search Repositories API documentation here;
b. Example of Repositories Search Endpoint: https://api.github.com/search/repositories?q=tetris&per_page=9
c. Pagination API documentation here;
d. Search Users API documentation here;
e. Example of Users Search Endpoint: https://api.github.com/search/users?q=joao&per_page=5;

### **⚠️9. Create search bar component.**

### **⚠️10. Fetch repositories using the Github Api and show a list of repository names to see the results. Do not forget to use key prop.**

Note: You could use fetch to consume GitHub API, or add another library (like axios) if you prefer.

### **⚠️11. Create a Card component to display the list of repositories. A Card should have:**

a. Profile Image
b. Title
c. Subtitle
d. Description
e. Two buttons: “View” and “Star”.

### **⚠️12. Create a Modal component, to show a single repository detail – it opens when you click on the “View” button. It contains the same information as the Card, but bigger and with more details (you choose).**

-

### **⚠️13. Add the “Star” button behavior: should work as an “Add to Favorites” – Each card that is starred is marked as such.**

-

### **⚠️14. Add pagination to the Repos Page.**

-

### **✅15. So far, you probably have have been changing our entry component to your Application manually. This cannot happen in a real project. The user needs a dynamic Application.**

What we want to have is the following use cases:
• App -> User is logged in -> Repos Page
• App -> User is not logged in -> Sign In -> User successfully signs in -> Repos Page
➔ Try to immplement this Authentication logic, making use of the local storage and conditional rendering.

### **✅16. Re-Implement the Authentication logic, using React’s Context Api. Apply the Context Api to connect and share user session among different components that need it. The current page should update accordingly to application state in the Context.**

Note: You could also use a React Router to help you change pages. The purpose of this lesson is to show you one use case for Context Api sharing data among different components.
After that you could try react-router to add a more sophisticated navigation system.

### **⚠️17. Q: Context API vs Redux.**

a. Which one should we use and when?
b. What is Redux and what are it’s advantages?

### **⚠️18. Use Jest and Enzyme to Test some of your components:**

a. Start with a simple component, like a Button, or the Search Bar.
b. Add tests to your Sign In page.
