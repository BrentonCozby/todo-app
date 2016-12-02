(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function _Task() {
    var Task = function () {
        function Task(name) {
            _classCallCheck(this, Task);

            this.name = name;
            this.completed = false;
            this.dateCreated = Date.now();
        }

        _createClass(Task, [{
            key: 'clickHandler',
            value: function clickHandler() {
                $(this).toggleClass('completed');
            }
        }]);

        return Task;
    }();

    module.exports = Task;
})();

},{}],2:[function(require,module,exports){
'use strict';

(function _filters() {
    var g = require('./_globals');

    function init() {
        g.filters.click(function () {
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-secondary');

            // show tasks that apply this this filter
            if (this.value === 'all') _showAll();else if (this.value === 'completed') _showCompleted();else if (this.value === 'incomplete') _showIncomplete();

            if ($(g.filters).not(this).hasClass('btn-primary')) {
                $(g.filters).not(this).removeClass('btn-primary');
                $(g.filters).not(this).addClass('btn-secondary');
            }
        });
    }

    function _showAll() {
        $('.task').show();
    }

    function _showCompleted() {
        $('.task.completed').show();
        $('.task').not('.completed').hide();
    }

    function _showIncomplete() {
        $('.task.completed').hide();
        $('.task').not('.completed').show();
    }

    module.exports.init = init;
})();

},{"./_globals":3}],3:[function(require,module,exports){
'use strict';

(function () {
    var tasksDB = { idCounter: 0 };
    var filters = $('.filter');
    var taskList = $('#taskList');
    var taskInput = $('#taskInput');

    module.exports.tasksDB = tasksDB;
    module.exports.filters = filters;
    module.exports.taskList = taskList;
    module.exports.taskInput = taskInput;
})();

},{}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function _taskList() {
    var g = require('./_globals');
    var Task = require('./_Task');

    function addTask(taskName) {
        if (taskName !== "" && taskName !== " ") {
            var append;

            var _ret = function () {
                var newTask = _createTaskModel(taskName);
                if (newTask === 'duplicate') return {
                        v: false
                    };

                append = function append() {
                    return new Promise(function (resolve) {
                        g.taskList.append(_createTaskHTML(newTask));
                        resolve();
                    });
                };

                append().then(function () {
                    $('#task' + newTask.id).on('click', function (e) {
                        newTask.clickHandler.call(this);
                        if (e.target.classList.contains('glyphicon-remove')) {
                            _removeTask(newTask);
                        }
                    });
                });
                g.taskInput.val('');
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
    }

    function _createTaskModel(taskName) {
        var newTask = new Task(taskName);
        var id = function () {
            var counter = 1;
            while (g.tasksDB[counter]) {
                counter++;
            }
            return counter;
        }();
        newTask.id = id;
        g.tasksDB[id] = newTask;
        return newTask;
    }

    function _createTaskHTML(task) {
        var status = '';
        if (task.completed) status = 'completed';
        var listItem = '<li class="task list-group-item ' + status + '" id="task' + task.id + '">\n            ' + task.name + '\n            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n        </li>';
        return listItem;
    }

    function _removeTask(task) {
        for (var key in g.tasksDB) {
            if (g.tasksDB.hasOwnProperty(key)) {
                if (task.id === g.tasksDB[key].id) {
                    delete g.tasksDB[key];
                    $('#task' + task.id).remove();
                    break;
                }
            }
        }
    }

    module.exports.addTask = addTask;
})();

},{"./_Task":1,"./_globals":3}],5:[function(require,module,exports){
'use strict';

(function () {
    var g = require('./_globals');
    var taskList = require('./_taskList');
    var filters = require('./_filters');

    filters.init();

    $('#plus-sign').click(function () {
        addNewTask();
    });
    g.taskInput.on('keydown', function (e) {
        if (e.keyCode === 13) {
            addNewTask();
        }
    });

    function addNewTask() {
        taskList.addTask(g.taskInput.val());
        g.taskInput.focus();
    }
})();

},{"./_filters":2,"./_globals":3,"./_taskList":4}]},{},[5]);
