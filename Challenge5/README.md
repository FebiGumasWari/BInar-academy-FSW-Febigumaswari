## CHALLENGE 5: Car Management API

## SUPERADMIN
```shell
superadmin@gmail.com
```
```shell
superadmin123
```
## Check Open API from Swegger-UI
```shell
http://localhost:8000/api-docs/
```

### ERD Database

![ERD Database](https://github.com/FebiGumasWari/BInar-academy-FSW-Febigumaswari/blob/master/Challange5/public/IMG/ERDCH5.png)

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
$ cd BInar-academy-FSW-Febigumaswari/Challange5
```

3. Install dependencies

```shell
$ npm install
```

```shell
$ npm install express
```

4. Check your configuration in `config/database.js`. Ensure that the username and password match your local database.

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

