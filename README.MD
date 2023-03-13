## Task Manager App

A NodeJS app in Express, that allows you to schedule To-Do tasks and mark them as done. Add tasks, edit them, and delete them.

To add a new Task simply start typing and and click "Submit"

Completed Tasks are crossed-out, incomplete tasks remain.

To edit a Tasks, click the "green edit" icon, rename the task or mark it as done and submit. And click "Back to Tasks" button.

To delete a Task, clcik the "trash" icon.

![NOde-Task-Manager-App](https://github.com/RhonnieAl/nodeJS-task-manager-project/blob/master/screenshots/Screenshot1.png)

![Edit-Feature](https://github.com/RhonnieAl/nodeJS-task-manager-project/blob/master/screenshots/Screenshot2.png)

## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 3100.

## REST API endpoints

`/api/v1/tasks` - get all the tasks (GET)

`/api/v1/tasks` - create a new tasks (POST)

`/api/v1/tasks/:id` - get single task (GET)

`/api/v1/tasks/:id` - update tasks (PATCH)

`/api/v1/tasks/:id` - delete tasks (DELETE)

### Database

Data is not stored in browser, "Tasks" are stored in a Database using MongoDB with Atlas.

Mongoose is used to set up database collections and document structure and perform CRUD operations (create, read, update & destroy).

### Basic validation

Create Validation:

Validation on this node app is handled on the backend with [Mongoose Validation](https://mongoosejs.com/docs/validation.html)

Accepted values: `name` , `completed`.

Empty strings throw an error, max string length is set to 30 characters. Non-bool entries spit out an error as well. All other key:value pairs, ignored.

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

A Task's default state is "Not completed".
