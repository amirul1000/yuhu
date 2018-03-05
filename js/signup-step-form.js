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

        if ($("#first_name").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("First name is required field");
            return;

        }
        if ($("#last_name").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Last name is required field");
            return;

        }

        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        //$(this).remove();
    });

    $('#activate-step-3').on('click', function (event) {

        event.preventDefault();
        event.stopPropagation();

        if ($("#location").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Location is a required field");
            return;
        }

        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        //$(this).remove();
    });
    $('#activate-step-4').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#email").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Email is a required field");
            return;
        }
        
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test($("#email").val())) {
            toastr.options.timeOut = 1500;
            toastr.error("Please enter valid email address");
            return;
        }
        // check email
        $.ajax({
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            type: "POST",
            url: localStorage.getItem("url_service") + '/rest-api/server',
            data: {
                "cmd": "checkEmail",
                "email": $("#email").val()
            },
            success: function (data) {
                Arr = JSON.parse(data);
                if (Arr.status === 'yes') {
                    toastr.options.timeOut = 1500;
                    toastr.error("This email already exists!");
                    return;
                } else {
                    $('ul.setup-panel li:eq(3)').removeClass('disabled');
                    $('ul.setup-panel li a[href="#step-4"]').trigger('click');
                }
            }
        });


    });
    $('#activate-step-5').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#password").val() == "") {
            toastr.options.timeOut = 1500;
            toastr.error("Password is required field");
            return;
        }
        if ($("#password").val().length <= 5) {
            toastr.options.timeOut = 1500;
            toastr.error("Password at least 6 character.");
            return;
        }
        if ($("#con-password").val() == "") {
            toastr.options.timeOut = 1500;
            toastr.error("Confirm password is required field");
            return;
        }
        if ($("#con-password").val() != $("#password").val()) {
            toastr.options.timeOut = 1500;
            toastr.error("Password not match!");
            return;
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
        event.preventDefault();
        event.stopPropagation();

        if ($("#dob").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Date of Birth a is required field");
            return;

        }
        $('ul.setup-panel li:eq(6)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-7"]').trigger('click');
    });
    $('#activate-step-8').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("select[name='states[]']").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Skills a is required field");
            return falsel;
        }

        $('ul.setup-panel li:eq(7)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-8"]').trigger('click');
    });

    $('#activate-step-9').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#working_distance").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Working distance a is required field");
            return falsel;
        }

        $('ul.setup-panel li:eq(8)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-9"]').trigger('click');
    });
    $('#activate-step-10').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#about").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("About a is required field");
            return falsel;
        }

        $('ul.setup-panel li:eq(9)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-10"]').trigger('click');
    });
    $('#activate-step-11').on('click', function (e) {
        event.preventDefault();
        event.stopPropagation();

        if ($("#language").val() == "")
        {
            toastr.options.timeOut = 1500;
            toastr.error("Language a is required field");
            return falsel;
        }

        $('ul.setup-panel li:eq(10)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-11"]').trigger('click');
    });

});


