//定义一个函数，用来向一个元素中添加指定的class属性值
		function addClass(obj, classname){
			//obj:要添加class属性的元素
			//classname：要添加的class值
			//检查obj中是否含有className
			if(!hasClass(obj,classname)){
				obj.className+=" "+classname;
			}
			
		}
		
		//判断一个元素是否含有指定的class属性值
		function hasClass(obj,classname){
			//判断obj中是否有className，有返回true，没有返回false
			//创建一个正则表达式,\b \b为单词边界
			//var reg = /\bb2\b/;
			//动态设置
			var reg = new RegExp('\\b'+classname+'\\b');
			//alert(reg);
			return reg.test(obj.className);
		}
		
		//删除一个元素中指定的class属性值
		function removeClass(obj,classname){
			//把要删除的属性值替换成空字符串即可
			var reg = new RegExp('\\b'+classname+'\\b');
			obj.className = obj.className.replace(reg,'');
		}
		
		
		//切换，可以用来切换一个类，如果元素中具有该类，则删除；如果没有该元素，则添加
		function toggleClass(obj,classname){
			//判断obj中是否含有className
			if(hasClass(obj,classname)){
				removeClass(obj,classname);
			}else{
				addClass(obj,classname);
			}
		}