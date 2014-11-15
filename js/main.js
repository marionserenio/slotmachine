//note parseInt
//note stop


var opts = ['A','B','C','D','F'];

var column1 = ['Coffee Maker', 'Teapot', 'Espresso Machine']




function go(){
	// addSlots($("#slots_a .wrapper"));
	// moveSlots($("#slots_a .wrapper"));
	// addSlots($("#slots_b .wrapper"));
	// moveSlots($("#slots_b .wrapper"));
	// addSlots($("#slots_c .wrapper"));
	// moveSlots($("#slots_c .wrapper"));

	moveSlots($(".column ul"));
	addSlots($(".column ul"));


	$('.slots').addClass('blur');

	setTimeout(function(){
		$('.slots').removeClass('blur');
	}, 750)
}

$(document).ready(
	function(){
		addSlots($("#slots_a .wrapper"));
		addSlots($("#slots_b .wrapper"));
		addSlots($("#slots_c .wrapper"));
		
	}		
);


function addSlotsColumn1(jqo){
	for(var i = 0; i < 15; i++){
		var ctr = Math.floor(Math.random()*column1.length);
		jqo.append("<li>"+column1[ctr]+"</li>");
	}
}

function moveSlots(jqo){
		var time = 500;
		time += Math.round(Math.random()*1000);
	jqo.stop(true,true);

		var marginTop = parseInt(jqo.css("margin-top"), 10)
		
		marginTop -= (7 * 100)
		
	jqo.animate(
		{"margin-top":marginTop+"px"},
		{'duration' : time, });

}

// function rollslot(){
// 	elem = $('.column');

// 	var time = 6500;
// 	elem += Math.round(Math.random()*450);
// 	// elem.stop(true,true);
// 	var marginTop = parseInt(elem.css("margin-top"), 10)
// 	marginTop -= (7 * 100)

// 	elem.animate(
// 		{'margin-top' : marginTop + 'px'},
// 		{'duration' : time, 'easing' : 'easeOut'});

// }