## CHALLENGE 4: Simple CRUD Application for Rental Cars

### ERD Database

![ERD Database](Challange4/data/ERD.png)

## Application Installation

Before you can run this application, make sure you have installed the following components:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Postman: [https://www.postman.com/](https://www.postman.com/)
- PostgreSQL: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

## Development

1. Clone the repository

```shell
$ git clone https://github.com/FebiGumasWari/BInar-academy-FSW-Febigumaswari.git
```

2. Change directory to the project

```shell
$ cd BInar-academy-FSW-Febigumaswari/Challange4
```

3. Install dependencies

```shell
$ npm install
```

```shell
$ npm install express
```

```shell
$ npm install sequelize pg pg-hstore
```

4. Check your configuration in `config/config.json`. Ensure that the username and password match your local database.

5. Create the database

```shell
$ npm run db:create
```

6. Run migrations

```shell
$ npm run db:migrate
```

7. Run Seeders

```shell
$ npm run db:seed
```

8. Run the application

```shell
$ npm run dev
```

## Here is a list of available endpoints in this project:

1. **GET /**

   - Description: This endpoint is used to check the application and ensure that it is running correctly.
   - Example Usage: [http://localhost:8000/](http://localhost:8000/)

2. **GET /cars**

   - Description: This endpoint is used to retrieve a list of available cars.
   - Example Usage: [http://localhost:8000/cars](http://localhost:8000/cars)

3. **GET /cars/:id**

   - Description: This endpoint is used to retrieve car data based on its ID.
   - Example Usage: [http://localhost:8000/cars/1](http://localhost:8000/cars/1)

4. **POST /cars**

   - Description: This endpoint is used to add new car data.
   - Example Usage: [http://localhost:8000/cars](http://localhost:8000/cars)
   - Note: ID is not required to be input as data because it's generated using UUID.

5. **PUT /cars/:id**

   - Description: This endpoint is used to update car data based on its ID.
   - Example Usage: [http://localhost:8000/cars/1](http://localhost:8000/cars/1)
   - Note: The following fields are mandatory when updating data: id, image, capacity, rentPerDay, description, availableAt.

6. **DELETE /cars/:id**

   - Description: This endpoint is used to delete car data based on its ID.
   - Example Usage: [http://localhost:8000/cars/1](http://localhost:8000/cars/1)

I hope this helps you with the installation and usage of the CRUD application for rental cars.
