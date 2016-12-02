(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function _filters() {
    var g = require('./_globals');

    function init() {
        g.filters.click(function () {
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-secondary');
            // show tasks that apply this this filter
            if ($(g.filters).not(this).hasClass('btn-primary')) {
                $(g.filters).not(this).removeClass('btn-primary');
                $(g.filters).not(this).addClass('btn-secondary');
                // hide tasks that don't apply to this filter
            }
        });
    }

    module.exports.init = init;
})();

},{"./_globals":2}],2:[function(require,module,exports){
'use strict';

(function () {
    var filters = $('.filter');
    var taskList = $('#taskList');

    module.exports.filters = filters;
    module.exports.taskList = taskList;
})();

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function _task() {
    var task = function () {
        function task(name) {
            _classCallCheck(this, task);

            this.name = name;
            this.html = "<li class=\"task list-group-item\" id=\"" + this.name + "\">" + this.name + "</li>";
            this.completed = false;
            this.dateCreated = Date.now();
        }

        _createClass(task, [{
            key: "toggleComplete",
            value: function toggleComplete() {
                this.completed = !this.completed;
            }
        }]);

        return task;
    }();

    module.exports = task;
})();

},{}],4:[function(require,module,exports){
'use strict';

(function _taskList() {
    var g = require('./_globals');

    function add(task) {
        g.taskList.append(task.html);
    }

    function remove(task) {}

    module.exports.add = add;
    module.exports.remove = remove;
})();

},{"./_globals":2}],5:[function(require,module,exports){
'use strict';

(function () {
    var _this = this;

    var g = require('./_globals');
    var task = require('./_task');
    var taskList = require('./_taskList');
    var filters = require('./_filters');

    filters.init();

    $('#plus-sign').click(function () {
        if ($(_this).val() !== "") {
            var addTask;

            (function () {
                var newTask = new task($('#taskInput').val());

                addTask = function addTask() {
                    return new Promise(function (resolve) {
                        taskList.add(newTask);resolve();
                    });
                };

                addTask().then(function () {
                    $('#' + newTask.name).click(function () {
                        $(this).toggleClass('completed');
                    });
                });
            })();
        }
        $(_this).val('');
    });
})();

},{"./_filters":1,"./_globals":2,"./_task":3,"./_taskList":4}]},{},[5]);
