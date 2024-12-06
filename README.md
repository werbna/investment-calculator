# Investment Calculator

This is a simple investment calculator application built with React. It allows users to input their investment details and calculates the expected returns over a specified duration.
## Screenshots

![Investment Calculator UI](https://i.imgur.com/QWGAlzz.png)

## Live Demo
Check out the live application here: [Investment Calculator](https://werbna.github.io/investment-calculator/)

## Features
- Input investment details: initial investment, annual contribution, expected return, and duration.
- Calculates expected returns dynamically.
- Displays results in a user-friendly format.
- Responsive and accessible design.

## Utilities

- **Investment Calculation**: Contains the logic for calculating investment results. ([`investment.js`](src/util/investment.js))

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm run dev`.

## Example

The application expects the following user input:

- **Initial Investment**: The initial amount invested.
- **Annual Investment**: The amount invested every year.
- **Expected Return**: The expected annual rate of return.
- **Duration**: The investment duration in years.

The results are displayed in a formatted currency using the browser's Intl API.

## License

This project is licensed under the MIT License.

## Project Structure
```
INVESTMENT-CALCULATOR/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── investment-calculator.png
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Results/
│   │   │   └── Results.jsx
│   │   └── UserInput/
│   │       └── UserInput.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```