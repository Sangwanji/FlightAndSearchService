# Welcome to Flights Service

## Project Structure

```text
/
├── src/
│   ├── index.js              # Entry point (server)
│   ├── models/               # Database models
│   ├── controllers/          # Request handlers
│   ├── middlewares/          # Custom middleware
│   ├── services/             # Business logic
│   ├── utils/                # Utility functions
│   ├── config/               # Configuration files
│   └── repository/           # Database queries/repositories
│
└── tests/                    # Test cases (to be added later)
```

## Project Setup
### 1. Clone & Install
```bash
git clone <your-repo-url>
cd task-manager-api
npm install
```

### 2. Set up Environment Variables
```bash
cp .env.example .env
```
Edit `.env` with your values:
```
PORT=5000
```
### 3. Create config.json in src/config
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": <YOUR_DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Project Setup
### 1. Clone & Install
```bash
git clone https://github.com/Sangwanji/FlightAndSearchService.git
cd task-manager-api
npm install
```

### 2. Set up Environment Variables
```bash
cp .env.example .env
```
For Windows
```
copy .env.example .env
```
Edit `.env` with your values:
```
PORT=5000
```
### 3. Create config.json in src/config
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": <YOUR_DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
### Create Database
```
Once config.json create database by running below command in src
`npx sequelize db:create`
and then execute
`npx sequelize db:migrate`
```


## DB Design
 - Airplane Table
 - Flight Table
 - Airport Table
 - City Table

 - A Flight belong to an single airplane but an airplane belong to multiple flight
 - A city has many airport but an airport belong to a single city
 - One airport can have many flights but a flight belong to one airport


 ### Tables

 ### City -> id,name,created_at,updated_at
 ### Airport -> id,name,city_id,created_at,updated_at 
 ``` Relationship -> City has many airports and airport belong to city [1:n]```
 
 