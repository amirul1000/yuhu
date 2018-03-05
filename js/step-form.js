// Activate Next Step

$(document).ready(function () {

    var navListItems = $('ul.setup-panel li a'),
            allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function (e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');

    // DEMO ONLY //
    $('#activate-step-2').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#task_title").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Task Title is required field");
            return;

        }
        if ($("#task_title").val().length <= 9) {
            toastr.options.timeOut = 1500;
            toastr.error("Task Title at least 10 character.");
            return;
        }

        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        //$(this).remove();
    });

    $('#activate-step-3').on('click', function (event) {

        event.preventDefault();
        event.stopPropagation();

        if ($("#description").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Description is a required field");
            return;

        }
        if ($("#description").val().length <= 9) {
            toastr.options.timeOut = 1500;
            toastr.error("Task Description at least 10 character.");
            return;
        }

        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        //$(this).remove();
    });
    $('#activate-step-4').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
    });
    $('#activate-step-5').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($(".active input[name='online']").val() == 1) {
            if ($("#task_location").val() == "")
            {
                toastr.options.timeOut = 1500;
                toastr.error("Task Location is required field");
                return;
            }
        }


        $('ul.setup-panel li:eq(4)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-5"]').trigger('click');
    });
    $('#activate-step-6').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#due_date").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Due date is required field");
            return;

        }
        $('ul.setup-panel li:eq(5)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-6"]').trigger('click');
    });
    $('#activate-step-7').on('click', function (e) {
        $('ul.setup-panel li:eq(6)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-7"]').trigger('click');
    });
    $('#activate-step-8').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($(".active input[name='budget_type']").val() == 1) {
            if ($("#budget").val() == "")
            {
                toastr.options.timeOut = 1500;
                toastr.error("Budget is required field");
                return falsel;

            }
        } else {
            if ($("#hours").val() == "")
            {
                toastr.options.timeOut = 1500;
                toastr.error("Hours is required field");
                return falsel;

            }
            if ($("#price_per_hour").val() == "")
            {
                toastr.options.timeOut = 1500;
                toastr.error("Price pre hour is required field");
                return falsel;

            }
        }

        $('ul.setup-panel li:eq(7)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-8"]').trigger('click');
    });
    $('#activate-step-9').on('click', function (e) {
        $('ul.setup-panel li:eq(8)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-9"]').trigger('click');
    });
    $('#activate-step-10').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();
        
        if ($(".active input[name='onsite_quote']").val() == 'yes') {
            if ($("#date-start").val() == "") {
                toastr.options.timeOut = 1500;
                toastr.error("On-site quote start date is required field");
                return falsel;
            }
            if ($("#date-end").val() == "") {
                toastr.options.timeOut = 1500;
                toastr.error("On-site quote end date is required field");
                return falsel;
            }
        }
        $('ul.setup-panel li:eq(9)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-10"]').trigger('click');
    });
    $('#activate-step-11').on('click', function (e) {

        $('ul.setup-panel li:eq(10)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-11"]').trigger('click');
    });

});

