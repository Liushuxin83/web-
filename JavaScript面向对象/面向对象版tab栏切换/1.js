//1.点击tab栏，可以实现切换效果
//2.点击+号，可以添加tab项和内容项
//3.点击x号，可以删除tab项和内容项
//4.双击tab项文字或者内容选项文字，可以编辑里面的文字内容
//抽象对象（Tab对象）
//该对象具有切换功能；该对象具有添加功能；该对象具有删除功能；该对象具有修改功能
window.onload = function() {
	var that;
	class Tab {
		constructor(id) { //接收参数
			//获取元素
			//获取整个tab栏(最大盒子)
			//console.log(this);
			that = this;
			this.main = document.querySelector(id);

			this.tabadd = this.main.querySelector('.tabadd');
			this.ul = this.main.querySelector('.fisrstnav ul:first-child');
			this.tabscon = this.main.querySelector('.tabscon');
			this.init();
		}
		//初始化操作，让相关的元素绑定元素
		init() {
			this.updateNode();
			for (var i = 0; i < this.lis.length; i++) {
				this.lis[i].index = i;
				this.lis[i].onclick = this.toggleTab; //这里不需要加小括号
				this.remove[i].onclick = this.removeTab;
				this.spans[i].ondblclick = this.editTab;
				this.sections[i].ondblclick = this.editTab;
			}
			this.tabadd.onclick = this.addTab;
		}
		//获取所以的小li和 section
		updateNode() {
			this.lis = this.main.querySelectorAll('li');
			this.sections = this.main.querySelectorAll('section');
			this.remove = this.main.querySelectorAll('.icon-guanbi');
			this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
		}
		//切换功能
		toggleTab() {
			//console.log(this.index);//这里的this指向函数的调用者,就是当前小li  lis[i]
			//为所以小li和section 清除类样式
			that.clearClass(); //这里面的this是当前的一个小li ，所以这里不能使用this调用
			this.className = 'liactive';
			that.sections[this.index].className = 'conactive';
		}
		//清除类样式
		clearClass() {
			for (var i = 0; i < this.lis.length; i++) {
				this.lis[i].className = '';
				that.sections[i].className = '';
			}
		}
		//添加功能
		addTab() {
			//点击+号 可以实现添加新的选项卡和内容
			//1.创建新的选项卡li和新的内容section
			//2.把创建的两个元素追加到对应的父元素中
			//以前的做法：动态创建元素createElement，但是元素里面内容较多，需要
			//innerHTML赋值，在appendChild追加到父元素里面
			//现在的高级做法：利用insertAdjacentHTML（）可以直接把字符串格式元素添加到父元素中
			//appendChild不支持追加字符串的子元素，insertAdjacentHTML支持追加字符串的元素
			var random = Math.random();
			that.clearClass();
			var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
			var section = '<section class="conactive">测试' + random + '</section>';
			//因为是tabadd这个按钮调用的这个方法，所以this为这个按钮
			that.ul.insertAdjacentHTML('beforeend', li);
			that.tabscon.insertAdjacentHTML('beforeend', section);
			that.init();
		}
		//删除功能
		removeTab(e) {
			//点击X号可以删除当前的li选项卡和当前的section
			//X是没有索引号的，但是它的父亲li有索引号，
			//点击X号可以删除这个索引号对应的li和section
			var index = this.parentNode.index;
			//console.log(index);
			//因为X号和小li都有点击事件，会有冒泡,所以要阻止冒泡,这样就不会触发li的点击事件
			e.stopPropagation();
			//根据相应索引号删除li和section,remove（）方法可以直接删除指定的元素
			that.lis[index].remove();
			that.sections[index].remove();
			that.init(); //重新获取删除完之后剩下 的小li和section

			//当删除的不是选中状态的小li的时候，原来选中状态的小li保持不变
			if (document.querySelector('.liactive')) {
				return; //如果进入if语句的话，return后面的代码将不会执行!!!!!!!
				//如果是删除选中状态的小li，则这个选中状态的小li没有.liactive样式
			}
			//当删除了选的状态的li的时候，让他前一个li处于选定状态,其实就是让前面的li为点击状态
			index--;
			//手动调用点击事件，不需要鼠标触发,但是当index等于0的时候再删会报错
			//当index==-1时就找不到这个索引的小li了
			that.lis[index] && that.lis[index].click();

		}
		//修改功能
		editTab() {
			var str = this.innerHTML;
			//双击选项卡li或者section里面的文字可以实现修改操作
			//如果双击文字，默认会选定文字，此时需要双击禁止选中文字
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			this.innerHTML = '<input type="text" />';
			var input = this.children[0];
			input.value = str;
			input.select(); //让文本框里面的文字处于选定状态
			//当文本框失去焦点是，就把文本框内的值给span
			input.onblur = function() {
				this.parentNode.innerHTML = this.value;
			}
			//按下回车也可以把文本框的值给span
			input.onkeyup = function(e) {
				if (e.keyCode === 13) {
					//this.blur();
					this.parentNode.innerHTML = this.value;
				}
			}
		}
	}
	new Tab('#tab');
}
