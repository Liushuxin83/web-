window.onload=function(){
	var arrow_l = document.querySelector('.arrow_l');
	var arrow_r = document.querySelector('.arrow_r');
	 var focus = document.querySelector('.focus');
	 var smallcircle = focus.querySelector('.smallcircle');
	 focus.addEventListener('mouseenter',function(){
		 arrow_l.style.display='block';
		 arrow_r.style.display='block';
		 clearInterval(timer);
		 //timer=null;//清除定时器变量
	 })
	 focus.addEventListener('mouseleave',function(){
	 		 arrow_l.style.display='none';
	 		 arrow_r.style.display='none';
			 timer = setInterval(function(){
			 		 arrow_r.click();
			 },3000)
	 })
	 //动态生成小圆圈
	 var focus_ul = focus.querySelector('.focus_ul');
	 var focusWidth=focus.offsetWidth;
	 //console.log(focusWidth);
	 
	 //console.log(focus_ul.children.length);
	 for(var i=0;i<focus_ul.children.length;i++){
		 var li = document.createElement('li');
		 li.innerHTML=i;
		 //记录当前小圆圈的索引号，通过自定义属性
		 li.setAttribute('data-index',i);
		 smallcircle.appendChild(li);
		 //生成小圆圈的同时，直接绑定点击事件（排他思想）
		 li.addEventListener('click',function(){
			 //先用for循环干掉所有人，之后留下自己
			 //console.log(smallcircle.children.length);
			 for(var i=0;i<smallcircle.children.length;i++){
				 smallcircle.children[i].className='';
				 this.className='current';
			 }
			 //当点击了某个小li就会拿到小li的索引号
			 var index = this.getAttribute('data-index');
			 //当点击某个小li，就要把这个小li的索引号给num
			 num=index;//解决bug
			 circle=index;//解决bug
			 //console.log(index);
			 //点击小圆片移动ul图片
			animate(focus_ul, -index*focusWidth);
		 })
		 
	 }
	 //为smallcircle中的第一个小li的背景色设置类名
	 smallcircle.children[0].className='current';
	 
	 //克隆第一张图片，放到focus_ul最后面
	 var first_li = focus_ul.children[0].cloneNode(true);
	 focus_ul.appendChild(first_li);
	 console.log(first_li);
	 //点击右侧箭头按钮，图片滚动一张
	 var num=0;
	 var circle=0;//箭头控制小圆圈
	 //节流阀
	 var flag=true;
	 arrow_r.addEventListener('click',function(){
		if(flag){
			flag=false;//关闭节流阀
			//如果滚动到了最后一张克隆的图片，ul要快速复原：left为0
			if(num == focus_ul.children.length-1){
						 focus_ul.style.left=0;
						 num=0;
			}
			num++;
			animate(focus_ul, -num*focusWidth, function(){
				flag = true;//打开节流阀
			});
			
			
			circle++;
			if(circle==smallcircle.children.length){
						 circle=0;
			}
			for(i=0;i<smallcircle.children.length;i++){
						 smallcircle.children[i].className='';		  
			}
			smallcircle.children[circle].className='current';
		}
	 })
	 
	 arrow_l.addEventListener('click',function(){
	 		if(flag){
				flag=false;
				//如果滚动到了最后一张克隆的图片，ul要快速复原：left为0
				if(num == 0){
								 num=focus_ul.children.length-1;
					 			 focus_ul.style.left=-num*focusWidth+'px';		 
				}
				num--;
				animate(focus_ul, -num*focusWidth, function(){
					flag = true;
				});
				
				circle--;
				//如果circle<0，小圆圈要改为第四个小圆圈
				if(circle<0){
					 			 circle=smallcircle.children.length-1;
				}
				for(i=0;i<smallcircle.children.length;i++){
					 			 smallcircle.children[i].className='';		  
				}
				smallcircle.children[circle].className='current'; 
			}
	 })
	 
	 //自动播放轮播图
	 var timer = setInterval(function(){
		 arrow_r.click();
	 },3000)
}