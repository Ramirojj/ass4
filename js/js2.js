$(document).ready(function () {

    $('#role-select').on('change', function () {
        const role = $(this).val();
        $('.role-form').hide();
        if (role) {
            $(`#${role}-form`).fadeIn();


              }});
    $('#employees-list-btn').on('click', displayEmployees);
    $('#suppliers-list-btn').on('click', displaySuppliers);
    $('#customers-list-btn').on('click', displayCustomers);
    $('#all-lists-btn').on('click', displayAll);
});