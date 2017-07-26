function displayTasks(data) {
    var $target = $('#tbody_task');
    var $tbody = target.clone();

    data.forEach(function (elmt) {
        $line = ('#todoLineTemplate').clone();
        $line.removeAttr('id');

        $line.find('td').eq(0).text(elmt.task);
        if (elmt.done) {
            $line.find('input').attr('checked', 'checked');
        }

        $tbody.append($line);
    });

    $target.replaceWith($tbody);
}

$(document).ready(function () {
    modelTasks.add('dormir');
    modelTasks.add('manger');
    modelTasks.add('coder');
    modelTasks.add('precher');

    var res = modelTasks.findAll();

    console.log(res);
    $('#table_tasks').dataTable();

    displayTasks(res);

});