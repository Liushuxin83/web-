function getStyle(obj , name){
				if(window.getComputedStyle){
					return getComputedStyle(obj , null)[name];
				}else{
					return obj.currentStyle[name];
				}
			}
			/*
			 obj：要执行的对象
			 attr：修改动画的样式 要执行对象的属性 left、top、height、width
			 speed：速度(方向 设置数值的时候为正数)
			 target：目标终点
			 callback：回调函数 这个函数在动画执行完毕后执行
			 */
			//var timer;
			/* 目前定时器标识 由全局变量timer保存，
			所有执行正在执行的定时器都在这个变量中保存 */
			function move(obj ,attr ,speed ,target, callback){
				clearInterval(obj.timer);
				//获取元素目前的位置
				var current = parseInt(getStyle(obj ,attr));
				if(current > target){
					speed = -speed;
				}
				obj.timer = setInterval(function(){
					 var oldValue = parseInt(getStyle(obj ,attr));
					 var newValue = oldValue + speed;
					 //向左移动 需要判断newValue是否小于target
					 //向右移动 需要判断newValue是否大于target
					 if((speed > 0 && newValue > target) || (speed < 0 && newValue < target)){
						 newValue = target;
					 }
					 obj.style[attr] = newValue + "px";
					 if(newValue == target){
						 clearInterval(obj.timer);
						 //动画执行完毕
						 //如果有这个回调函数就调 没有就不调了
						 callback && callback();
					 }
				 },0.000001)
			}