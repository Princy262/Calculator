# Calculator Web Application

This project is a simple yet functional calculator web application developed using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations and leverages the JavaScript `eval()` function to evaluate mathematical expressions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Security Considerations](#security-considerations)
- [License](#license)

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear (C) button to delete the last input.
- All Clear (AC) button to reset the entire input.
- Ans button to reuse the result of the previous calculation.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- **HTML**: Provides the structure of the calculator.
- **CSS**: Styles the calculator for a visually appealing interface.
- **JavaScript**: Implements the functionality of the calculator using the `eval()` function.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Princy262/Calculator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd calculator
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Open `index.html` in a web browser.
2. Use the on-screen buttons to input numbers and arithmetic operations.
3. Click the `=` button to evaluate the expression.
4. Use the `C` button to clear the last input and the `AC` button to clear the entire input.
5. Use the `Ans` button to use the result of the previous calculation.

## How It Works

The calculator application operates by attaching event listeners to each button. When a button is clicked, the corresponding value is appended to the display. The `eval()` function is used to compute the result of the arithmetic expression when the `=` button is pressed.

## Security Considerations

The use of the `eval()` function can pose security risks if not handled correctly, as it can execute arbitrary code. This calculator is intended for educational purposes and should not be used in production environments without proper input validation and sanitization.