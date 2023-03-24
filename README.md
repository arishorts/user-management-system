# User-Management-System ![alt text](https://img.shields.io/badge/License-MIT-blue.svg)

## Description:

The system is designed to help administrators manage all users by providing a database to track sensitive information. Admins can create, read, update, and delete (CRUD) users in the database. For example, if a user wants to add Johnny Depp to their database, they can use the '+ add user' button to create a new entry and assign an email, activity status, as well as phone number. They can also add comments to help administrators retain special information about the user.

The site works real time by using the Sequelize ORM library to interact with a MySQL database. The database schema is defined using a model, which is a JavaScript class extending Sequelize's Model class. The model represents a table in the database and defines fields. It also provides a RESTful API using Express.js, which allows admins to interact with the database by sending HTTP requests. The API routes handle CRUD operations for each model and return JSON responses to clients. There are multiple views that are rendered using express handlebars for the purpose of templating.

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Badges](#badges)
- [How_to_Contribute](#how_to_contribute)
- [Questions](#questions)
- [License](#license)

## Installation:

1. Start by opening a terminal or command prompt and navigating to the directory where the code is located.<br>
2. Run 'npm i' install to install the required packages.<br>

```
npm i
```

3. Save the required information into a .env file saved in the root directory:

```
DB_HOST="________"
DB_USER="_________"
DB_PASSWORD="________"
DB_NAME="user_db"
```

4. Enter the command below to be prompted for your password to log in to the MySQL server.

```
mysql -u root -p
```

5. Run the following commands to create the database.

```
source db/schema.sql
```

6. Run the following commands to seed with values.

```
node seeds/seed.js
```

## Usage:

&nbsp; The website can be found at: https://github.com/arishorts/user-management-system <br>

![alt text](./assets/images/demo.JPG)

### Operation

This code is an application for managing user information in an SQL database. To use it, you need to have MySQL installed on your computer and have access to an SQL server.<br>

1. After the packages are installed, run the command node app.js to start the server.<br>
2. Open the website at http://localhost:3001.<br>
3. To exit, press Ctrl+C in the terminal/command prompt to stop the server when complete.<br>

## Tests:

&nbsp; None

## Badges:

![badmath](https://img.shields.io/badge/JavaScript-99%25-purple)
![badmath](https://img.shields.io/badge/Shell-1%25-purple)

## How_to_Contribute:

&nbsp; If you would like to contribute, refer to the [Contributor Covenant](https://www.contributor-covenant.org/)

## Questions:

&nbsp; My GitHub profile can be found at: https://github.com/arishorts
<br>&nbsp; Reach me with additional questions at : arieljschwartz@gmail.com

## License:

&nbsp; http://choosealicense.com/licenses/mit/

---

© 2022 Ariel Schwartz LLC. Confidential and Proprietary. All Rights Reserved.
