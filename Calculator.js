$(document).ready(function(){

	document.onkeyup = keyCheck;
	function keyCheck(){
		var keyId = event.keyCode;
		var currScreenVal = $('.screen').val();
		console.log(keyId);
		switch(keyId){
			case 49:
				$('.screen').val(currScreenVal + 1);
			break;
			case 50:
				$('.screen').val(currScreenVal + 2);
			break;
			case 51:
				$('.screen').val(currScreenVal + 3);
			break;
			case 52:
				$('.screen').val(currScreenVal + 4);
			break;
			case 53:
				$('.screen').val(currScreenVal + 5);
			break;
			case 54:
				$('.screen').val(currScreenVal + 6);
			break;
			case 55:
				$('.screen').val(currScreenVal + 7);
			break;
			case 56:
				$('.screen').val(currScreenVal + 8);
			break;
			case 57:
				$('.screen').val(currScreenVal + 9);
			break;
			case 48:
				$('.screen').val(currScreenVal + 0);
			break;
			case 88:
				$('.screen').val(currScreenVal + '*');
			break;
			case 191:
				$('.screen').val(currScreenVal + '/');
			break;
			case 189:
				$('.screen').val(currScreenVal + '-');
			break;
			case 102:
				$('.screen').val(currScreenVal + '+');
			break;
			case 27:
				$('.screen').val('');
			break;
			case 13:
				doIt();
			break;
			case 187:
				doIt();
			break;
		}
	}
	
});

function doIt(){
	try{
	var total = eval($('.screen').val());
	console.log(screen.val);
	} catch(e){
		console.log(e);
		if(e instanceof SyntaxError){
			alert('eat a popcicle');
			return;
		}
		else if(e instanceof ReferenceError){
			alert('this doesnt work');
			return;
		}
	}
	$('.screen').val(total);
	if(total == 311){
		// $('#meaning').animate({left:'2000px'})
		$('#meaning').addClass('move');
	}else if(total == 45){
		$('.row').addClass('scale');
	}else if(total == 60){
		$('.row').addClass('sixty');
	}else if(total == 1800){
		$('.row').addClass('rotate');
	}else if(total == 90){
		$('.number').addClass('ninety');
	}
};

$('.operator, .number').click(function(){
		if($(this).hasClass('equal')){
			doIt();
		}else if($(this).hasClass('clear')){
			$('.screen').val('');
			$('#meaning').removeClass('move');
			$('.row').removeClass('scale');
			$('.row').removeClass('sixty');
			$('.row').removeClass('rotate');
			$('.number').removeClass('ninety');

		}else{
			var currScreenVal = $('.screen').val();
			$('.screen').val(currScreenVal + $(this).val());
		}
        // var currScreenVal = $('.screen').val();
        // $('.screen').val(currScreenVal + $(this).val());
    });



