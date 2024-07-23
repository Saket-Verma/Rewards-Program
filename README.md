# Rewards Program

This project is a React application that calculates and displays the reward points earned by customers based on their purchase transactions. Customers earn points based on the amount they spend, with specific rules for how points are awarded.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

The Rewards Program application simulates an asynchronous API call to fetch customer transaction data and calculates the reward points earned per month for each customer. The calculation rules are as follows:

- 2 points for every dollar spent over $100 in each transaction.
- 1 point for every dollar spent between $50 and $100 in each transaction.

## Features

- Calculate reward points based on transaction amounts.
- Display reward points earned by each customer per month and in total.
- Error handling for API call failures.
- Responsive and reusable components.
- Well-documented and tested code.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rewards-program.git
   cd rewards-program
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
src/
├── components/
│   ├── CustomerRewards.js
│   ├── RewardsTable.js
│   ├── ErrorBoundary.js
├── services/
│   └── api.js
├── utils/
│   └── calculateRewards.js
├── App.js
├── index.js
├── App.css
└── index.css
```

### Components

- **CustomerRewards**: Fetches transaction data, calculates rewards, and manages state.
- **RewardsTable**: Displays the reward points in a table format.
- **ErrorBoundary**: Catches and displays errors in the application.

### Services

- **api.js**: Simulates an asynchronous API call to fetch transaction data.

### Utilities

- **calculateRewards.js**: Contains the logic for calculating reward points based on transaction amounts.

## Testing

Unit tests are written using Jest and React Testing Library.

1. Run the tests:
   ```bash
   npm test
   ```

### Test Files

- `src/utils/calculateRewards.test.js`: Tests for the `calculateRewards` utility function.
- `src/components/RewardsTable.test.js`: Tests for the `RewardsTable` component.
- `src/components/CustomerRewards.test.js`: Tests for the `CustomerRewards` component.
- `src/components/ErrorBoundary.test.js`: Tests for the `ErrorBoundary` component.

## Technologies Used

- React
- Jest
- React Testing Library

## License

This project is licensed under the MIT License.

