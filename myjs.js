function Paginator(){
	this.getPage=function(event){
		var index=parseInt(event.target.innerHTML);
		setPage(index-1);
	}
	this.next=function(){
		var active=document.querySelector('.active');
		var index=parseInt(active.innerHTML);
		shouldDisableButtons();
		if(!inDiapason(index,'next')){
			return;
		}
		setPage(index);
	}
	this.prev=function(){
		var active=document.querySelector('.active');
		var index=parseInt(active.innerHTML);
		shouldDisableButtons();
		if(!inDiapason(index,'prev')){
			return;
		}
		setPage(index-2);
	}
				
	function setPage(ind){
		var buttons=document.getElementsByClassName('btn');
		var divs=document.getElementsByClassName('page');
		for(var i=0;i<buttons.length;i++){
			buttons[i].classList.remove('active');
		}
		for(var j=0;j<divs.length;j++){
			divs[j].style.display='none';
		}
		buttons[ind].classList.add('active');
		divs[ind].style.display='block';
		shouldDisableButtons();
	}
				
	function shouldDisableButtons(){
		var active=document.querySelector('.active');
		var activeIndex=parseInt(active.innerHTML);
		var buttons=document.getElementsByClassName('btn');
		if(activeIndex > 1 && activeIndex < buttons.length){
			document.getElementById('prev').disabled=false;
			document.getElementById('next').disabled=false;
		}
		else if(activeIndex<=1){
			document.getElementById('prev').disabled=true;
			document.getElementById('next').disabled=false;
		}
		else if(activeIndex>=buttons.length){
			document.getElementById('next').disabled=true;
			document.getElementById('prev').disabled=false;
		}
	}
				
	function inDiapason(ind,dir){
		var buttons=document.getElementsByClassName('btn');
		if(dir==='prev'){
			return (ind >1 && ind<=buttons.length);
		}
		else if(dir==='next'){
			return (ind<buttons.length && ind>=1);
		}
	}
}