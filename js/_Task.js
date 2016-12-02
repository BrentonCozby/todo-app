(function _Task() {

    class Task {
        constructor(name) {
            this.name = name;
            this.completed = false;
            this.dateCreated = Date.now();
        }

        clickHandler() {
            $(this).toggleClass('completed');
        }
    }

    module.exports = Task;
})();
