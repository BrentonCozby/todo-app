(function _filters() {
    const g = require('./_globals');

    function init() {
        g.filters.click(function() {
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-secondary');
            // show tasks that apply this this filter
            if($(g.filters).not(this).hasClass('btn-primary')) {
                $(g.filters).not(this).removeClass('btn-primary');
                $(g.filters).not(this).addClass('btn-secondary');
                // hide tasks that don't apply to this filter
            }
        });
    }

    module.exports.init = init;

})();
