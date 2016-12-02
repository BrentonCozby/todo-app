(function() {
    var tasksDB = {idCounter: 0};
    const filters = $('.filter');
    const taskList = $('#taskList');
    const taskInput = $('#taskInput');

    module.exports.tasksDB = tasksDB;
    module.exports.filters = filters;
    module.exports.taskList = taskList;
    module.exports.taskInput = taskInput;
})();
