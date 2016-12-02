(function() {
    const g = require('./_globals');
    const taskList = require('./_taskList');
    const filters = require('./_filters');

    filters.init();

    $('#plus-sign').click(() => {
        addNewTask();
    });
    g.taskInput.on('keydown', (e) => {
        if(e.keyCode === 13) {
            addNewTask();
        }
    });

    function addNewTask() {
        taskList.addTask(g.taskInput.val());
        g.taskInput.focus();
    }

})();
