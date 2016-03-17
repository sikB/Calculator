$(document).ready(function(){
	// $('input').keyup(function(e){
	// 	console.log(e);
	// });

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
		// console.log(keyId);
	}
	
});

function doIt(){
	try{
	var total = eval($('.screen').val());
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
};

function number(){
	var currScreenVal = $('.screen').val();
	$('.1').click(function(){
		$('.screen').val(currScreenVal + '1');
	});
	$('.2').click(function(){
		$('.screen').val(currScreenVal + '2');
	});
	$('.3').click(function(){
		$('.screen').val(currScreenVal + '3');
	});
	$('.4').click(function(){
		$('.screen').val(currScreenVal + '4');
	});
	$('.5').click(function(){
		$('.screen').val(currScreenVal + '5');
	});
	$('.6').click(function(){
		$('.screen').val(currScreenVal + '6');
	});
	$('.7').click(function(){
		$('.screen').val(currScreenVal + '7');
	});
	$('.8').click(function(){
		$('.screen').val(currScreenVal + '8');
	});
	$('.9').click(function(){
		$('.screen').val(currScreenVal + '9');
	});
	$('.0').click(function(){
		$('.screen').val(currScreenVal + '0');
	});
	$('-').click(function(){
		$('.screen').val(currScreenVal + '-');
	});
}



