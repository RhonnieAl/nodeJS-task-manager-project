## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 3100.

## REST API endpoints

Use the following endpoints to perform all CRUD operations (create, read, update & destroy)

`/api/v1/tasks` - get all the tasks (GET)

`/api/v1/tasks` - create a new tasks (POST)

`/api/v1/tasks/:id` - get single task (GET)

`/api/v1/tasks/:id` - update tasks (PATCH)

`/api/v1/tasks/:id` - delete tasks (DELETE)
