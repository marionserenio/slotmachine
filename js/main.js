//note parseInt
//note stop


var opts = ['A','B','C','D','F'];




function go(){
	addSlots($("#slots_a .wrapper"));
	moveSlots($("#slots_a .wrapper"));
	addSlots($("#slots_b .wrapper"));
	moveSlots($("#slots_b .wrapper"));
	addSlots($("#slots_c .wrapper"));
	moveSlots($("#slots_c .wrapper"));

	setTimeout(function(){
		moveSlots($("#Coffee ul"));
		addSlots($("#Coffee ul"));
	}, 50);

	setTimeout(function(){
		moveSlots($("#Tea ul"));
		addSlots($("#Tea ul"));
		addSlots($("#Espresso ul"));
	}, 75);

	setTimeout(function(){
		moveSlots($("#Espresso ul"));
		addSlots($("#Espresso ul"));
	}, 100);	


	// $('.slot-column').addClass('blur');

	setTimeout(function(){
		$('.slot-column').removeClass('blur');
	}, 750)


	// $('.slot-machine2').css('height', '44px');
}

$(document).ready(
	function(){
		addSlots($("#Coffee ul"));
		addSlots($("#slots_b .wrapper"));
		addSlots($("#slots_c .wrapper"));
		
	}		
);


function addSlots(jqo){
	for(var i = 0; i < 15; i++){
		var ctr = Math.floor(Math.random()*opts.length);
		jqo.append("<li>"+opts[ctr]+"</li>");
	}
}

function moveSlots(jqo){
		var time = 5400;
		time += Math.round(Math.random()*1000);
		jqo.stop(true,true);

		var marginTop = parseInt(jqo.css("margin-top"), 10)
		
		marginTop -= (6 * 129)
		
	jqo.animate(
		{"margin-top":marginTop+"px"},
		{'duration' : time, 'easing' : "easeOutElastic"});

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