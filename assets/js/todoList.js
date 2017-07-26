/**
 *
 * @param data
 */
function displayTasks(data) {
    var $target = $('#tbody_task');
    var $tbody = $target.clone();

    data.forEach(function (elmt) {
        var $line = $('#todoLineTemplate').clone();
        $line.removeAttr('id').removeClass('hidden');

        $line.find('td').eq(0).text(elmt.task);
        if (elmt.done) {
            $line.find('input').attr('checked', 'checked');
        }

        $tbody.append($line);
    });

    $target.replaceWith($tbody);
    $('#table_tasks').dataTable();
}


$(document).ready(function () {
    modelTasks.add('dormir');
    modelTasks.add('manger');
    modelTasks.add('coder');
    modelTasks.add('precher');

    var res = modelTasks.findAll();

    displayTasks(res);

});