$(document).ready(function () {
    modelTasks.add('dormir');
    modelTasks.add('manger');
    modelTasks.add('coder');
    modelTasks.add('precher');

    var res = modelTasks.findAll();

    console.log(res);
    $('#table_tasks').dataTable();
});