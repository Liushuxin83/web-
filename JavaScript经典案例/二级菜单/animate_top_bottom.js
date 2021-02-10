		function animate_top_bottom(obj, target, callback){
			obj.timer = setInterval(function() {
				var step = (target - obj.offsetTop)/10;//步长
				step = step>0?Math.ceil(step):Math.floor(step);
			    obj.style.top = obj.offsetTop+step+'px';
				if(obj.offsetTop==target){
					clearInterval(obj.timer);
					callback&&callback();
				}
			}, 30)
		}