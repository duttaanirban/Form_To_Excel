# Form to Excel

## Overview

The **Form to Excel** project is a web application that allows users to fill out a data entry form and submit their information. The application collects data such as name, email, phone number, age, address, city, and gender, and saves it to an Excel file. Users can then download this file for their records. The application is built using HTML, CSS (with Tailwind CSS), JavaScript, and Node.js.

## Features

- **User-Friendly Interface**: A responsive and stylish form for easy data entry.
- **Data Collection**: Collects user information including:
  - Full Name
  - Email Address
  - Phone Number
  - Age
  - Address (Street, City, Region, Postal Code)
  - Gender
- **Excel File Generation**: Submits the collected data to a Node.js server, which generates an Excel file.
- **Downloadable File**: Provides a download link for the generated Excel file after form submission.
- **CORS Support**: Allows requests from different origins, making it suitable for various frontend deployments.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS (Tailwind CSS)
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js
  - Body-parser (for parsing JSON)
  - xlsx (for Excel file handling)
  - CORS (for cross-origin requests)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) should be installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. **Install server dependencies:**

  Navigate to the server directory and install the required packages:

  ```bash
  cd server
  npm install
  ```
3. **Install client dependencies (if you are using npm for Tailwind CSS):**

  Navigate to your frontend directory and install dependencies:

  ```bash
  npm install
  ```

### Running the Application
  1. **Start the Node.js server:**

  From the server directory, run:

  ```bash
  node server.js
  ```

  2.Open the HTML file:

  Open `index.html` in your web browser, or serve it using a local server (like Live Server in VSCode).



### Usage

  1. Fill out the data entry form with your details.
  2. Click the Submit button to send the data to the server.
  3. After submission, a download link for the generated Excel file will be displayed.
