(function _taskList() {
    const g = require('./_globals');

    function add(task) {
        g.taskList.append(task.html);
    }

    function remove(task) {

    }

    module.exports.add = add;
    module.exports.remove = remove;
})();
