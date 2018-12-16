
function timer(){
	setTimeout(main, 1000);
};

function main(){

	var d = new Date();

	var time = d.toTimeString();
	var h = time.substr(0,2);
	var m = time.substr(3,2);
	var s = time.substr(6,2);

	ifs(s,1,5);
	ifs(s,0,4);
	ifs(m,1,3);
	ifs(m,0,2);
	ifs(h,1,1);
	ifs(h,0,0);

	timer();
};

function ifs(t,x,c){
	if (t[x] === '0'){
		zero(c);
	}
	else if (t[x] === '1'){
		one(c);
	}
	else if (t[x] === '2'){
		two(c);
	}
	else if (t[x] === '3'){
		three(c);
	}
	else if (t[x] === '4'){
		four(c);
	}
	else if (t[x] === '5'){
		five(c);
	}
	else if (t[x] === '6'){
		six(c);
	}
	else if (t[x] === '7'){
		seven(c);
	}
	else if (t[x] === '8'){
		eight(c);
	}
	else if (t[x] === '9'){
		nine(c);
	}
};

function zero(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 0;
	three.innerHTML = 0;
	four.innerHTML = 0;
};

function one(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 0;
	three.innerHTML = 0;
	four.innerHTML = 1;
};

function two(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 0;
	three.innerHTML = 1;
	four.innerHTML = 0;
};

function three(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 0;
	three.innerHTML = 1;
	four.innerHTML = 1;
};

function four(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 1;
	three.innerHTML = 0;
	four.innerHTML = 0;
};

function five(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 1;
	three.innerHTML = 0;
	four.innerHTML = 1;
};

function six(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 1;
	three.innerHTML = 1;
	four.innerHTML = 0;
};

function seven(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 0;
	two.innerHTML = 1;
	three.innerHTML = 1;
	four.innerHTML = 1;
};

function eight(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 1;
	two.innerHTML = 0;
	three.innerHTML = 0;
	four.innerHTML = 0;
};

function nine(c){
	var one=document.getElementById('table').rows[0].cells[c];
	var two=document.getElementById('table').rows[1].cells[c];
	var three=document.getElementById('table').rows[2].cells[c];
	var four=document.getElementById('table').rows[3].cells[c];
	one.innerHTML = 1;
	two.innerHTML = 0;
	three.innerHTML = 0;
	four.innerHTML = 1;
};






main();


