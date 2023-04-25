## Task Manager App

A NodeJS app in Express, that allows you to schedule To-Do tasks and mark them
as done. Add tasks, edit them, and delete them.

All actions are API requests to the Backend NodeJS controller that update a
MongoDB database.

## Try it now online

To try the web application, please visit the following URL to start managing
your tasks:

- https://node-task-manager.azurewebsites.net

Kindly allow for 30 sec for database Rehydration and loading in some cases.

Add a new Task by simply start typing and and click "Submit"

Completed Tasks are crossed-out, incomplete tasks remain.

To edit a Tasks, click the "green edit" icon, rename the task or mark it as done
and submit. Then click "Back to Tasks" button.

To delete a Task, clcik the "trash" icon.

![NOde-Task-Manager-App](https://github.com/RhonnieAl/nodeJS-task-manager-project/blob/master/screenshots/Screenshot1.png)

![Edit-Feature](https://github.com/RhonnieAl/nodeJS-task-manager-project/blob/master/screenshots/Screenshot2.png)

To see the controller functions see the file located in:
`/nodeJS-task-manager-project/controllers/tasks.js`

# Running Locally: Prerequisites

Please make sure you have `Node.js` installed on your machine and `Git` version
control system to run project locally.

## Cloning the Repository

To clone this repository to your local machine, `cd` to your desired directory
(e.g `cd Desktop`).

Then run the following git clone command. This will create a folder called
`nodeJS-task-manager-project` on your specified directory.

```sh
git clone https://github.com/RhonnieAl/nodeJS-task-manager-project
```

## Project Setup

Run `npm install` to install node dependencies

Run `npm start` or `node app.js`to kickstart server.

In order to run the project, create a .env file, set your "MONGO_URI" with a
correct "connection string" to your MongoDB.

In order to avoid port collisions, port 3100 is used, feel free to change it.

Great :) Happy testing!

## REST API endpoints

Test the APIs with [Postman](https://www.postman.com/product/what-is-postman/)
by pointing to the followwing endpoints.

`/api/v1/tasks` - get all the tasks (GET)

`/api/v1/tasks` - create a new tasks (POST)

`/api/v1/tasks/:id` - get single task (GET)

`/api/v1/tasks/:id` - update tasks (PATCH)

`/api/v1/tasks/:id` - delete tasks (DELETE)

### MongoDB Database

Data is not stored in browser, "Tasks" are stored in a Database using MongoDB
with Atlas.

Mongoose is used to set up database collections and document structure and
perform CRUD operations (create, read, update & destroy).

### Basic validation

Create Validation:

Validation on this node app is handled on the backend with
[Mongoose Validation](https://mongoosejs.com/docs/validation.html)

Accepted values: `name` , `completed`.

Empty strings throw an error, max string length is set to 30 characters.
Non-bool entries spit out an error as well. All other key:value pairs, ignored.

A Task's default state is "Not completed".

```js
  name: {
    type: String,
    required: [true, "Please add a name for the task"],
    trim: true,
    maxlength: [30, "Name cannot be more than 30 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  }
```

Hobby Project maintined by [Rhonnie Allan](https://github.com/RhonnieAl)
