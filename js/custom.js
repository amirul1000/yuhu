//Loader
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2000);
    $("#loader-bg").addClass("loader-bg");
}
function showPage() {
    $("#loader-bg").removeClass("loader-bg");
    document.getElementById("loader").style.display = "none";

}



function check_login() {
    $.ajax({
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        type: "POST",
        url: localStorage.getItem("url_service") + '/rest-api/server',
        data: {
            "cmd": "check_login",
            users_id: localStorage.getItem("users_id"),
            email: localStorage.getItem("email"),
            session_id: localStorage.getItem("session_id")
        },
        success: function (data) {
            Arr = JSON.parse(data);
            if (Arr['status'] === "success")
            {
                localStorage.setItem("users_id", Arr['users_id']);
                localStorage.setItem("email", Arr['email']);
                localStorage.setItem("password", Arr['password']);
                localStorage.setItem("user_type", Arr['user_type']);
                localStorage.setItem("first_name", Arr['first_name']);
                localStorage.setItem("last_name", Arr['last_name']);

                localStorage.setItem("location", Arr['location']);
                localStorage.setItem("latitude", Arr['latitude']);
                localStorage.setItem("longitude", Arr['longitude']);

                localStorage.setItem("file_picture", Arr['file_picture']);
                localStorage.setItem("session_id", Arr['session_id']);

            } else
            {
                localStorage.clear();
                localStorage.setItem("url_service", "https://www.yuhu.life");

                window.location.href = "index.html";
                toastr.options.timeOut = 1500;
                toastr.error(Arr['msg']);
            }
        }
    });
}
check_login();


//for side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



$(document).ready(function () {


    document.querySelector("html").classList.add('js');

    var fileInput = document.querySelector(".input-file"),
            button = document.querySelector(".input-file-trigger"),
            the_return = document.querySelector(".file-return");

    button.addEventListener("keydown", function (event) {
        if ((event.keyCode === 13) || (event.keyCode === 32)) {
            fileInput.focus();
        }
    });
    button.addEventListener("click", function (event) {
        fileInput.focus();
        return false;
    });
    fileInput.addEventListener("change", function (event) {
        the_return.innerHTML = this.value;
    });



});

$(document).on('click', '.number-spinner button', function () {
    var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $('.count-num').html(newVal);
    btn.closest('.number-spinner').find('input').val(newVal);
});

$('#navbar-search').on('click', function () {
    $('#topBarArea').hide();
    $('#navbar-searchbarss').show("slow");
});


$('.serch-show').on('click', function () {
    e.preventDefault();
    $('#navbar-search').show();
    $('.short-by').show();
    $('.serch-hide').hide();
    $('#navbar-search').hide();
    $('.serch-show').addClass('full-width');
});

$('#cancel-search').on('click', function () {
    location.reload();
});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {
    $(".on-btn").click(function () {
        $(".second-hide").hide();
        $(".first-hide").show();
    });
    $(".off-btn").click(function () {
        $(".second-hide").show();
        $(".first-hide").hide();
    });
});
$(document).ready(function () {
    (function (e, t, n) {
        var r = e.querySelectorAll("html")[0];
        r.className = r.className.replace(/(^|\s)no-js(\s|$)/, "$1js$2");
    })(document, window, 0);

});

if (window.cordova && StatusBar)
{
    StatusBar.backgroundColorByHexString('#033c56');
}

//////////////////////////////////////////////////////////////////////////////
// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("14c6e2a1-3a5e-4cfb-879a-50a4b1622b0d")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);





