(function _task() {

    class task {
        constructor(name) {
            this.name = name;
            this.html = `<li class="task list-group-item" id="${this.name}">${this.name}</li>`;
            this.completed = false;
            this.dateCreated = Date.now();
        }

        toggleComplete() {
            this.completed = !this.completed;
        }
    }

    module.exports = task;
})();
