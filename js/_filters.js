(function _filters() {
    const g = require('./_globals');

    function init() {
        g.filters.click(function() {
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-secondary');

            // show tasks that apply this this filter
            if(this.value === 'all') _showAll();
            else if(this.value === 'completed') _showCompleted();
            else if(this.value === 'incomplete') _showIncomplete();

            if($(g.filters).not(this).hasClass('btn-primary')) {
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
