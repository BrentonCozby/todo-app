(function() {
    const g = require('./_globals');
    const task = require('./_task');
    const taskList = require('./_taskList');
    const filters = require('./_filters');

    filters.init();

    $('#plus-sign').click(() => {
        if($(this).val() !== "") {
            let newTask = new task($('#taskInput').val());
            var addTask = ()=> new Promise((resolve)=> {taskList.add(newTask); resolve()});
            addTask().then(() => {
                $(`#${newTask.name}`).click(function() {
                    $(this).toggleClass('completed');
                });
            });
        }
        $(this).val('');
    });

})();
