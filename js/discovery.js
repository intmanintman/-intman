/*回到顶部功能*/
function returnTop()
{
	//开启一个定时器
	var id = setInterval(function(){
		//调用js自带的函数
	    scrollBy(0,-10); //向上移动10个像素  第一参数为x  第二个参数y
		//判断滚动条是否到达顶部
		var scrollTop = document.body.scrollTop+document.documentElement.scrollTop;
		console.info(scrollTop);
		if(scrollTop==0)
		{
			clearInterval(id);
		}
	},10); //每个10毫秒调用一次
}


//显示或隐藏return——top按钮
setInterval(function(){
	var scrollTop = document.body.scrollTop+document.documentElement.scrollTop;
//	console.info(scrollTop);
	divset =document.getElementsByClassName("scroll_to_top");
	if(scrollTop<100)
	{
		divset[0].style.display="none";
	}else{
		divset[0].style.display="block";
	}
},1000); //每个10毫秒调用一次
//
var i=0;
function sort()
{
	i++;
	divset=document.getElementsByClassName("index_sort");
	if(i%2)
	{
		if(j%2)
		{
			document.getElementById("three_ul_font_edit").style.display="none";
			document.getElementsByClassName("down-arrow")[0].style.transform="rotate(0deg)";
		}
		if(l%2)
		{
			document.getElementById("three_ul_font_copyright").style.display="none";
			document.getElementsByClassName("down-arrow")[1].style.transform="rotate(0deg)";
		}
		divset[0].style.display="block";
	}else
	{
		divset[0].style.display="none";		
	}
//	console.info("i="+i);
}
var j=0;
function edit(){
	j++;
	divset=document.getElementById("three_ul_font_edit");
	down_arrow=document.getElementsByClassName("down-arrow");
	if(j%2)
	{
		if(i%2)
		{
			document.getElementsByClassName("index_sort")[0].style.display="none";
		}
		if(l%2)
		{
			document.getElementById("three_ul_font_copyright").style.display="none";
			document.getElementsByClassName("down-arrow")[1].style.transform="rotate(0deg)";
		}
		divset.style.display="block";
		down_arrow[0].style.transform="rotate(180deg)";
	}else
	{
		divset.style.display="none";
		down_arrow[0].style.transform="rotate(0deg)";
	}
//	console.info("j="+j);
	
}
var l=0;
function copyright(){
	l++;
	divset=document.getElementById("three_ul_font_copyright");
	down_arrow=document.getElementsByClassName("down-arrow");
//	divset=document.getElementsByClassName("")
	if(l%2)
	{
		if(i%2)
		{
			document.getElementsByClassName("index_sort")[0].style.display="none";
		}
		if(j%2)
		{
			document.getElementById("three_ul_font_edit").style.display="none";
			document.getElementsByClassName("down-arrow")[0].style.transform="rotate(0deg)";
		}
		divset.style.display="block";
		down_arrow[1].style.transform="rotate(180deg)";
	}else
	{
		divset.style.display="none";		
		down_arrow[1].style.transform="rotate(0deg)";
	}
	console.info("l="+l);
	
}
