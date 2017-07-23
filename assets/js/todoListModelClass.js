/**
 *
 * @param task
 * @param done
 * @constructor
 */
function Todo(task, done) {
    this.task = task;
    this.done = done;
}

/**
 *
 * @constructor
 */
var TodoModels = function() {
    var todos = [];

    // Add task
    function addTodo(task) {
        todos.push(new Todo(task, false));
    }

    // update task
    function updateTodo(index, task, done) {
        // todos[index] = new //odo(task,done);
        if(task){
            todos[index].task = task;
        }
        if (done) {
            todos[index].done = done;
        }
    }

    // delete task
    function deleteTodo(index) {
        todos.splice(index, 1);
        return todos;
    }

    // View tasks
    function getAllTodos() {
        return todos;
    }

    return {
        add: addTodo,
        displayAll:getAllTodos,
        delete: deleteTodo,
        update: updateTodo
    };

};

// var mModel = TodoModels();