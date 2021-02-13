function animate(obj, target, callback){
			//callback = function(){};
			//关闭上一个定时器 只保留当前的定时器  重要！！！！！
			clearInterval(obj.timer);//这是解决多次点击加速问题！！！！！！！
			obj.timer = setInterval(function(){
				//步长值写到定时器里面
				//把步长值改为整数，不要出现小数！！！！！
				var step = (target - obj.offsetLeft)/10;
				step = step>0?Math.ceil(step):Math.floor(step);
				
				if(obj.offsetLeft==target){
					clearInterval(obj.timer);
					//回调函数写到定时器结束里面!!!!!
					// if(callback){
					// 	callback();
					// }
					callback && callback();
				}
				//改变步长 （目标值-现在的位置）/10 作为每次移动的距离的步长
				obj.style.left = obj.offsetLeft + step + 'px';
			},30)
		}