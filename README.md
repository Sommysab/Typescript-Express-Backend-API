This is a CRUD boilerplate for Typescript Nodejs and Mongodb Database applications and also needs you to have DOCKER installed in the local machine.

## About Project
This project is a CRUD application for a book inventory management and is built using TYPESCRIPT to demonstrate creating, editing, deleting, and accessing APIs and how to connect and use Docker Resources, like mongoDB database in this case, from the Host machine.

## Setting Up A MongoDB Database with Docker

Run the following command to help quickly setup an instance of a mongodb application for database integration 

### `docker pull mongo`
### `docker run -d -p 27017:27017 mongo`


## Available Scripts

In the project directory, you can run:

### `yarn global add typescript`
Installs the `tsc` cli on the local machine

### `yarn add`
Installs packages that the project depends on

### `yarn watch`
Starts up the application


## Base REST APIs

To access the application, we created a very simple REST API to access the 5 distinct API endpoints

```
- GET - /books ## returns all books
- GET - /book/1 ## returns a book with id 1
- POST - /book ## inserts a new book into the table
- DELETE - /book/1 ## deletes a book with id of 1
- PUT - /book/1 ## updates a book with id of 1
```