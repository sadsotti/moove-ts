# 📚 Moove: Urban Micromobility System in TypeScript

---

## 🚀 Project Overview

**Moove** is a simplified simulation of a shared urban micromobility system (bike sharing, scooter sharing, kickscooters), developed as part of the **TypeScript** module of the **Full Stack Development and AI** Master by start2impact.

This project demonstrates the practical application of **Object-Oriented Programming (OOP)** principles, the use of **interfaces** to define clear contracts, and the power of **TypeScript's strong typing** to build robust, maintainable, and scalable code.

---

## 🔗 Try it Live!

You can test the simulation directly in your browser and observe the console output by clicking the link below:
👉 **[Moove on CodePen](https://codepen.io/sadsotti/pen/gbardBj)** 👈

---

## ✨ Implemented Features

* **Entity Modeling:** Clear representation of `Vehicle`, `User`, and `City` through classes and interfaces.
* **Vehicle Status Management:** Tracking of each vehicle's status (`available`, `in_use`, `maintenance`).
* **Booking Logic:** Users can book available vehicles, with status management and warnings for non-bookable vehicles.
* **City Management:** Each city can add and display the status of vehicles at its disposal.
* **Output:** Console messages track operations (creation, assignment, booking, status change), providing real-time feedback on the simulation.

---

## 🛠️ Technologies Used

* **TypeScript:** Primary language for development, ensures static typing and advanced OOP concepts implementation.
* **Node.js & npm:** Used for package management and running the TypeScript compilation and execution locally.

---

## 🚀 How to Use the Project Locally

Follow these steps to clone the repository and use the project on your computer:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sadsotti/moove-ts.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd moove-ts
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will read the `package.json` file and install all necessary development dependencies (like TypeScript).

4.  **Verify and Compile the TypeScript code:**
    ```bash
    npm run verify # Checks for syntax errors
    npm run build  # Compiles TypeScript to JavaScript (output in /dist folder)
    ```

5.  **Run the compiled application:**
    ```bash
    npm start
    ```
    This will execute the `app.js` file located in the `dist` folder.

---

## 📂 Project Structure

The project has a simple and clean structure to facilitate its use and understanding:

* `app.ts`: Contains all the TypeScript source code for the Moove system, including interfaces, classes, and the test/simulation logic.
* `package.json`: Manages project metadata and dependencies. Includes scripts for `verify` (TypeScript linting), `build` (TypeScript compilation), and `start` (running the compiled application).
* `tsconfig.json`: TypeScript compiler configuration file.
* `dist/`: (Automatically generated after `npm run build`) This directory contains the compiled JavaScript output files.
* `README.md`: This project description file.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix:**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Make your changes and ensure all code is in English.**
4.  **Run `npm run verify` to check for TypeScript errors.**
5.  **Commit your changes with a clear and concise message.**
6.  **Push your branch to your forked repository.**
7.  **Open a Pull Request to the `development` branch of the original repository.**

---

## 🔗 Useful Links

* **My CodePen:** [https://codepen.io/sadsotti](https://codepen.io/sadsotti)
* **start2impact:** [https://www.start2impact.it/](https://www.start2impact.it/)
* **My LinkedIn:** [https://www.linkedin.com/in/lorenzo-sottile/](https://www.linkedin.com/in/lorenzo-sottile/)

---
