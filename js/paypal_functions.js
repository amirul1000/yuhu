/* set month */
function fill_month(input_id){
	var d = new Date();
	var monthArray = new Array();
	monthArray[0] = "January";
	monthArray[1] = "February";
	monthArray[2] = "March";
	monthArray[3] = "April";
	monthArray[4] = "May";
	monthArray[5] = "June";
	monthArray[6] = "July";
	monthArray[7] = "August";
	monthArray[8] = "September";
	monthArray[9] = "October";
	monthArray[10] = "November";
	monthArray[11] = "December";
	for(m = 0; m <= 11; m++) {
		var optn = document.createElement("OPTION");
		optn.text = monthArray[m];
		// server side month start from one
		optn.value = (m+1);
		document.getElementById(input_id).options.add(optn);
	}
}

/* fill year drop down */
function fill_year(input_id_year){
	var current_year = (new Date()).getFullYear();
	/* add 20 years to current year*/
	var to_years = current_year + 20;

	for(y = current_year; y <= to_years; y++) {
		var optn = document.createElement("OPTION");
		optn.text = y;
		optn.value = y;
		document.getElementById(input_id_year).options.add(optn);
	}
}

function submit_form(form_id, loader){
	$('#'+loader).show();
	var form_str = $("#"+form_id).serialize();
	var session_id = localStorage.getItem("session_id");
	var users_id = localStorage.getItem("users_id");
	var task_id = localStorage.getItem("task_id");
	form_str = form_str+"&users_id="+users_id+"&task_id="+task_id+"&session_id="+session_id;

	$.ajax({
		type: "POST",
		url: localStorage.getItem("url_service") + '/rest-api/server',
		data: {
			cmd: "pay_onsite_job",
			form_str: form_str
		},
		success: function(data){
			console.log(data);
			$('#'+loader).hide();
			Arr = JSON.parse(data);
			if (Arr['status'] === "error") {
				toastr.options.timeOut = 3000;
				toastr.error(Arr['msg']);
			} else {
				$("#"+form_id)[0].reset();
				toastr.options.timeOut = 3000;
				toastr.success(Arr['msg']);
				setTimeout(function(){ window.location.reload(); }, 2000);
			}
		}
	});
}

$( document ).ready(function() {
/* submit paypal form */
	$('#btn_pay_now1').on('click', function (e) {
		$('#ajax_loader').show();
		var form_str = $("#frm_pay_onsite_job").serialize();
		var session_id = localStorage.getItem("session_id");
		var users_id = localStorage.getItem("users_id");
		var task_id = localStorage.getItem("task_id");
		form_str = form_str+"&users_id="+users_id+"&task_id="+task_id+"&session_id="+session_id;
		$.ajax({
			type: "POST",
			url: localStorage.getItem("url_service") + '/rest-api/server',
			data: {
				cmd: "pay_onsite_job",
				form_str: form_str
			},
			success: function(data){
				$('#ajax_loader').hide();
				Arr = JSON.parse(data);
				if (Arr['status'] === "error") {
					toastr.options.timeOut = 3000;
					toastr.error(Arr['msg']);
				} else {
					$("#frm_pay_onsite_job")[0].reset();
					toastr.options.timeOut = 3000;
					toastr.success(Arr['msg']);
					window.location.reload();
				}
			}
		});
	});
});
