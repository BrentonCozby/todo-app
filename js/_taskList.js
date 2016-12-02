(function _taskList() {
    const g = require('./_globals');
    const Task = require('./_Task');

    function addTask(taskName) {
        if(taskName !== "" && taskName !== " ") {
            let newTask = _createTaskModel(taskName);
            if(newTask === 'duplicate') return false;
            var append = () => new Promise((resolve) => {
                g.taskList.append(_createTaskHTML(newTask));
                resolve();
            });
            append().then(() => {
                $(`#task${newTask.id}`).on('click', function(e) {
                    newTask.clickHandler.call(this);
                    if(e.target.classList.contains('glyphicon-remove')) {
                        _removeTask(newTask);
                    }
                });
            });
            g.taskInput.val('');
        }
    }

    function _createTaskModel(taskName) {
        let newTask = new Task(taskName);
        let id = (function() {
            var counter = 1;
            while(g.tasksDB[counter]) {
                counter++;
            }
            return counter;
        })();
        newTask.id = id;
        g.tasksDB[id] = newTask;
        return newTask;
    }

    function _createTaskHTML(task) {
        var status = '';
        if(task.completed) status = 'completed';
        var listItem =
        `<li class="task list-group-item ${status}" id="task${task.id}">
            ${task.name}
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </li>`;
        return listItem;
    }

    function _removeTask(task) {
        for(let key in g.tasksDB) {
            if(g.tasksDB.hasOwnProperty(key)) {
                if(task.id === g.tasksDB[key].id) {
                    delete g.tasksDB[key];
                    $(`#task${task.id}`).remove();
                    break;
                }
            }
        }
    }

    module.exports.addTask = addTask;
})();
