Personal Expense Tracker - RESTful API

Features:
User can add, update, delete, and retrieve income and expense transactions.
MongoDB used for storing transactions.

Technologies Used:
Node.js
Express.js
MongoDB

Setup and Run Instructions:
Prerequisites
Ensure that you have the following installed:

Node.js: npm intall
MongoDB
Git (for version control)

API Documentation

1. Add a New Transaction
   Endpoint: POST (http://localhost:3031/transactions)
   Description: Adds a new income or expense transaction.

   Request Body:
   json

   {
   "type": "income",
   "category": "67184d3e4c246465b46d210b", // The category id from the category collection
   "amount": 20000,
   "date": "2024-11-03",
   "description": "freelance amount "
   }
   Response:
   json
   {
   "success": true,
   "data": {
   "type": "income",
   "category": "67184d3e4c246465b46d210b",
   "amount": 20000,
   "date": "2024-11-03T00:00:00.000Z",
   "description": "freelance amount ",
   "\_id": "67185412b31f66a55afa14fa",
   "\_\_v": 0
   }

2. Retrieve All Transactions
   Endpoint: GET http://localhost:3031/transactions
   Description: Fetches all the transactions.
   Response:
   json
   {
   "success": true,
   "data": [
   {
   "_id": "6717d0ce13a22d5c18279e96",
   "type": "income",
   "category": "6717cbe813a22d5c18279e8e",
   "amount": 5000,
   "date": "2024-10-01T00:00:00.000Z",
   "description": "Monthly Salary",
   "__v": 0
   },
   {
   "_id": "6717db36c56da217b2cfae98",
   "type": "income",
   "category": "6717dabcc56da217b2cfae92",
   "amount": 10000,
   "date": "2024-10-03T00:00:00.000Z",
   "description": "salary amount ",
   "__v": 0
   },
   {
   "_id": "67185412b31f66a55afa14fa",
   "type": "income",
   "category": "67184d3e4c246465b46d210b",
   "amount": 20000,
   "date": "2024-11-03T00:00:00.000Z",
   "description": "freelance amount ",
   "__v": 0
   }
   ]
   }
3. Retrieve a Transaction by ID
   Endpoint: GET /transactions/:id (http://localhost:3031/transactions/6717d0ce13a22d5c18279e96)
   Description: Fetches a specific transaction by its ID.
   Response:
   json
   {
   "success": true,
   "data": {
   "\_id": "6717d0ce13a22d5c18279e96",
   "type": "income",
   "category": "6717cbe813a22d5c18279e8e",
   "amount": 3300,
   "date": "2024-10-01T00:00:00.000Z",
   "description": "Monthly Salary",
   "\_\_v": 0
   }
   }

4. Update a Transaction
   Endpoint: PUT /transactions/:id (http://localhost:3031/transactions/6717d0ce13a22d5c18279e96)
   Description: Updates a specific transaction by its ID.

   Request Body (Partial Update):
   json

   {
   "amount": 3300
   }
   Response:
   json

   {
   "success": true,
   "data": {
   "\_id": "6717d0ce13a22d5c18279e96",
   "type": "income",
   "category": "6717cbe813a22d5c18279e8e",
   "amount": 3300,
   "date": "2024-10-01T00:00:00.000Z",
   "description": "Monthly Salary",
   "\_\_v": 0
   }
   }

5. Delete a Transaction
   Endpoint: DELETE /transactions/:id (http://localhost:3031/transactions/67185412b31f66a55afa14fa)
   Description: Deletes a specific transaction by its ID.
   Response:
   json
   {
   "success": true,
   "message": "Transaction deleted..."
   }
