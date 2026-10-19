# git remote add origin 📚

A beginner-friendly Node.js project exploring MongoDB integration using **Mongoose**. This project demonstrates schema creation, document validation, CRUD operations, and querying MongoDB collections using JavaScript.

## 🚀 Features

### 👤 User Management (`index.js`)
- Connect to MongoDB using Mongoose.
- Define a `User` schema with name, email, and age fields.
- Create and save individual documents.
- Insert multiple documents using `insertMany()`.
- Retrieve documents using `find()`, `findOne()`, and `findById()`.
- Filter records using query operators such as `$gte`.
- Update documents using `updateOne()`, `updateMany()`, `findOneAndUpdate()`, and `findByIdAndUpdate()`.
- Delete documents using `deleteOne()`, `findOneAndDelete()`, and `findByIdAndDelete()`.

### 📖 Book Management (`books.js`)
- Define a `Book` schema with title, author, price, discount, genre, and category.
- Apply schema validation using `required`, `min`, and `enum`.
- Set default values for fields.
- Store multiple genres using an array of strings.
- Create and save book documents.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Language:** JavaScript

## 📋 Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

MongoDB must be running locally for the connection strings used in this project to work.

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd MongoosePlayground
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   If Mongoose is not already listed in `package.json`, install it with:

   ```bash
   npm install mongoose
   ```

4. Run the user CRUD examples:

   ```bash
   node index.js
   ```

5. Run the book schema example:

   ```bash
   node books.js
   ```

## 🗄️ Database Configuration

The project uses local MongoDB databases:

| File | Database | Collection |
|---|---|---|
| `index.js` | `test` | `users` |
| `books.js` | `books` | `books` |

The connection strings are:

```javascript
mongodb://127.0.0.1:27017/test
mongodb://127.0.0.1:27017/books
```

Mongoose automatically creates the database and collection when data is first written, provided the MongoDB server is running.

## 📂 Project Structure

```text
MongoosePlayground/
├── node_modules/
├── books.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🎯 Learning Objectives

This project helps practice:

- MongoDB connectivity with Mongoose.
- Schema and model creation.
- Document creation and persistence.
- Validation rules and default values.
- Query filters and comparison operators.
- CRUD operations and their return values.
- Working with MongoDB collections from Node.js.

## 📝 Notes

- The examples insert, update, and delete database records. Run them against a development database.
- The `findById()` and related examples use a hardcoded MongoDB ObjectId. Replace it with an existing document ID when needed.
- The `index.js` examples use multiple asynchronous operations. Their output order can vary, and some reads may execute before earlier writes finish.

## 📄 License

This project is intended for educational and personal learning purposes.

## 👥 Contributors

- **Likith G** – Contributor