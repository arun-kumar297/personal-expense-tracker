Personal Expense Tracker - RESTful API
This project is a Personal Expense Tracker API built using Node.js, Express.js, and MongoDB. It allows users to manage their personal financial records, including income and expenses, and provides summaries by category or time period.

Features
User can add, update, delete, and retrieve income and expense transactions.
Summary endpoint that provides total income, total expenses, and balance.
Option to filter transactions by date range or category.
MongoDB used for storing transactions.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose for database interaction
Setup and Run Instructions
Prerequisites
Ensure that you have the following installed:

Node.js (v14 or later)
MongoDB (local or cloud instance like MongoDB Atlas)
Git (for version control)

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/yourusername/personal-expense-tracker.git
   cd personal-expense-tracker
2. Install Dependencies
   bash
   Copy code
   npm install
3. Setup Environment Variables
   Create a .env file in the root of the project and add the following:

bash
Copy code
MONGO_URI=<your-mongodb-connection-string>
PORT=3000
JWT_SECRET=<your-secret-key> 4. Start the Server
bash
Copy code
npm start
The API will be running at http://localhost:3000.

API Documentation

1. Add a New Transaction
   Endpoint: POST /transactions
   Description: Adds a new income or expense transaction.
   Request Body:
   json
   Copy code
   {
   "type": "income",
   "category": "Salary",
   "amount": 5000,
   "date": "2024-10-22",
   "description": "October Salary"
   }
   Response:
   json
   Copy code
   {
   "\_id": "647cf1bf3e123a9e9fe8",
   "type": "income",
   "category": "Salary",
   "amount": 5000,
   "date": "2024-10-22",
   "description": "October Salary",
   "\_\_v": 0
   }
2. Retrieve All Transactions
   Endpoint: GET /transactions
   Description: Fetches all the transactions.
   Response:
   json
   Copy code
   [
   {
   "_id": "647cf1bf3e123a9e9fe8",
   "type": "income",
   "category": "Salary",
   "amount": 5000,
   "date": "2024-10-22",
   "description": "October Salary"
   },
   {
   "_id": "647cf1bf3e123a9e9fe9",
   "type": "expense",
   "category": "Groceries",
   "amount": 200,
   "date": "2024-10-20",
   "description": "Groceries for the week"
   }
   ]
3. Retrieve a Transaction by ID
   Endpoint: GET /transactions/:id
   Description: Fetches a specific transaction by its ID.
   Response:
   json
   Copy code
   {
   "\_id": "647cf1bf3e123a9e9fe8",
   "type": "income",
   "category": "Salary",
   "amount": 5000,
   "date": "2024-10-22",
   "description": "October Salary"
   }
4. Update a Transaction
   Endpoint: PUT /transactions/:id
   Description: Updates a specific transaction by its ID.
   Request Body (Partial Update):
   json
   Copy code
   {
   "amount": 5500
   }
   Response:
   json
   Copy code
   {
   "\_id": "647cf1bf3e123a9e9fe8",
   "type": "income",
   "category": "Salary",
   "amount": 5500,
   "date": "2024-10-22",
   "description": "October Salary"
   }
5. Delete a Transaction
   Endpoint: DELETE /transactions/:id
   Description: Deletes a specific transaction by its ID.
   Response:
   json
   Copy code
   {
   "message": "Transaction deleted"
   }
