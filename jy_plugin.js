//将函数加入触发的事件中;
//确认
/*
jy_alert(
	"提示的信息",
	'确定按钮',
	function(){
		//确定
	}
);
*/
function jy_alert(a,b,callback){
	var ccheck=true;
	$('.popupbox.alert').remove();
	var boxcon='<div class="popupbox alert"><div class="popup_bg"></div><div class="popup_br"><div class="popup"><div class="text"></div><button class="sure"></button></div></div>';
	$('body').append(boxcon);
	$('.popupbox.alert .text').text(a);
	$('.popupbox.alert .sure').text('确定');
	$('.popupbox.alert .sure').text(b);
	$('.popupbox.alert').fadeIn(200);
	$('.popupbox.alert .sure').click(function(){
		if(ccheck){
			ccheck=false;
			$('.popupbox.alert').fadeOut(100);
			try{callback();}catch(e){};
		}
	});
	$(document).keypress(function(e){
		if(ccheck){
			 if(e.which == 13){
				ccheck=false;
			 	e.preventDefault();
			 	$('.popupbox.alert').fadeOut(100);
			 	try{callback();}catch(e){};
			 };
		};
	});
};

//确认取消
/*
jy_confirm(
	"提示的信息",
	'确定按钮',
	'取消取消',
	function(choose){
		if(choose){
			//确定
		}else{
			//取消
		};
	}
);
*/
function jy_confirm(a,b,c,callback,scope){
	var ccheck=true;
	$('.popupbox.confirm').remove();
	var boxcon='<div class="popupbox confirm"><div class="popup_bg"></div><div class="popup_br"><div class="popup"><div class="text"></div><button class="sure"></button><button class="cancel"></button></div></div></div>';
	$('body').append(boxcon);
	$('.popupbox.confirm .text').text(a);
	$('.popupbox.confirm .sure').text('确定');
	$('.popupbox.confirm .sure').text(b);
	$('.popupbox.confirm .cancel').text('取消');
	$('.popupbox.confirm .cancel').text(c);
	$('.popupbox.confirm').fadeIn(200);
	$('.popupbox.confirm .sure').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback.call(scope,true);}catch(e){};
			$('.popupbox.confirm').fadeOut(100);
		};
	});
	$('.popupbox.confirm .cancel').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback.call(scope,false);}catch(e){};
			$('.popupbox.confirm').fadeOut(100);
		};
	});
	$(document).keypress(function(e){
		if(ccheck){
			 if(e.which == 13){
				ccheck=false;
			 	try{callback.call(scope,true);}catch(e){};
				$('.popupbox.confirm').fadeOut(100);
			 };
		};
	});
};

//填写确认
/*
jy_prompt(
	"提示的信息",
	'确定',
	'取消',
	'旧信息',
	function(choose,text){
		if(choose){
			//替换对象.html($('.popupbox.prompt .text').val());
		}else{
			//取消
		};
	}
);
*/
function jy_prompt(a,b,c,d,callback){
	var ccheck=true;
	$('.popupbox.prompt').remove();
	var boxcon='<div class="popupbox prompt"><div class="popup_bg"></div><div class="popup_br"><div class="popup"><div class="title"></div><textarea class="text"></textarea><button class="sure"></button><button class="cancel"></button></div></div></div>';
	$('body').append(boxcon);
	$('.popupbox.prompt .title').text(a);
	$('.popupbox.prompt .sure').text('确定');
	$('.popupbox.prompt .sure').text(b);
	$('.popupbox.prompt .cancel').text('取消');
	$('.popupbox.prompt .cancel').text(c);
	$('.popupbox.prompt .text').val(d.replace(/(^\s+)|(\s+$)/g,''));
	$('.popupbox.prompt').fadeIn(200);
	$('.popupbox.prompt .text').focus();
	$('.popupbox.prompt .text').keypress(function(e){
		if(ccheck){
			 if(e.which == 13){
				ccheck=false;
				try{callback(true,$('.popupbox.prompt .text').val());}catch(e){};
				$('.popupbox.prompt').fadeOut(100);
			 };
		};
	});
	$('.popupbox.prompt .sure').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback(true,$('.popupbox.prompt .text').val());}catch(e){};
			$('.popupbox.prompt').fadeOut(100);
		};
	});
	$('.popupbox.prompt .cancel').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback(false,$('.popupbox.prompt .text').val());}catch(e){};
			$('.popupbox.prompt').fadeOut(100);
		};
	});
};

function jy_cipher(a,b,c,d,callback){
	var ccheck=true;
	$('.popupbox.cipher').remove();
	var boxcon='<div class="popupbox cipher"><div class="popup_bg"></div><div class="popup_br"><div class="popup"><div class="title"></div><input class="text" type="password"><button class="sure"></button><button class="cancel"></button></div></div></div>';
	$('body').append(boxcon);
	$('.popupbox.cipher .title').text(a);
	$('.popupbox.cipher .sure').text('确定');
	$('.popupbox.cipher .sure').text(b);
	$('.popupbox.cipher .cancel').text('取消');
	$('.popupbox.cipher .cancel').text(c);
	$('.popupbox.cipher .text').val(d.replace(/(^\s+)|(\s+$)/g,''));
	$('.popupbox.cipher').fadeIn(200);
	$('.popupbox.cipher .text').focus();
	$('.popupbox.cipher .text').keypress(function(e){
		if(ccheck){
			 if(e.which == 13){
				ccheck=false;
				try{callback(true,$('.popupbox.cipher .text').val());}catch(e){};
				$('.popupbox.cipher').fadeOut(100);
			 };
		};
	});
	$('.popupbox.cipher .sure').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback(true,$('.popupbox.cipher .text').val());}catch(e){};
			$('.popupbox.cipher').fadeOut(100);
		};
	});
	$('.popupbox.cipher .cancel').click(function(){
		if(ccheck){
			ccheck=false;
			try{callback(false,$('.popupbox.cipher .text').val());}catch(e){};
			$('.popupbox.cipher').fadeOut(100);
		};
	});
};

/*----------
滚屏
html
<div class="jy_screenbox">
	<div class="jy_page"></div>
</div>

css
jy_screenscoll.css

js
jy_screenscoll.initialize(function(){
	//上滚附加
},function(){
	//下滚附加
});
----------*/
var jy_screenscoll={
	pagenum : 1,
	winflag : null,
	count : -1,
	pagebox : '.jy_screenbox',
	page : '.jy_screenbox .jy_page',
	drawstart : 0,
	drawmove : 0,
	touchflag : true,
	scrollpass : true,
	initialize : function(callback1,callback2){
		var self=this;
		$(self.pagebox).css({'top':'0%'});
		var pagenum=self.pagenum;
		$(self.page).each(function(){
			$(self).attr('data-num',pagenum);
			pagenum++;
		});
		$(document).jy_wheel('up',self.pagebox,function(){
			if(self.scrollpass){
				self.wheelup(function(){try{callback1();}catch(e){};});
			};
		});
		$(document).jy_wheel('down',self.pagebox,function(){
			if(self.scrollpass){
				self.wheeldown(function(){try{callback2();}catch(e){};});
			};
		});
	},
	wheelup : function(callback){
		var self=this;
		if(self.pagenum>1){
			if(self.count==-1){
				self.pagenum--;
				var i=self.pagenum-1;
				//$(self.pagebox).stop(false,false).animate({'top':'-'+i+'00%'},500);
				$(self.pagebox).css({'top':'-'+i+'00%'});
				self.count=0;
				self.winflag=setInterval(function(){self.wheeltime()}, 500);
				try{callback();}catch(e){};
			};
		};
	},
	wheeldown : function(callback){
		var self=this;
		if(self.pagenum<$(self.page).length){
			if(self.count==-1){
				self.pagenum++;
				var i=self.pagenum-1;
				//$(self.pagebox).stop(false,false).animate({'top':'-'+i+'00%'},500);
				$(self.pagebox).css({'top':'-'+i+'00%'});
				self.count=0;
				self.winflag=setInterval(function(){self.wheeltime()}, 500);
				try{callback();}catch(e){};
			};
		};
	},
	wheelchoose : function(i,callback){
		var self=this;
		if(self.count==-1){
			self.pagenum=i+1;
			//$(self.pagebox).stop(false,false).animate({'top':'-'+i+'00%'},500);
			$(self.pagebox).css({'top':'-'+i+'00%'});
			self.count=0;
			self.winflag=setInterval(function(){self.wheeltime()}, 500);
			try{callback();}catch(e){};
		};
	},
	wheeltime : function(){
		var self=this;
		if(self.count==0)
		{clearInterval(self.winflag);self.count=-1}
		else{self.count--};
	}
};

/*----------
banner
----------*/
function jy_banner(){
	var self=this;
	self.number=0;
	self.timepass=true;
	self.speed=1000;
	self.winflag=null;
	self.touchstart=0;
	self.touchmove=0;
	self.touchpass=false;

	self.initialize=function(json){
		self.bannerbox=json.bannerbox;
		self.bannermove=json.bannermove;
		self.banner=json.banner;
		self.count=$(self.banner).length-1;
		var num=-1;
		$(self.banner).each(function(){
			num++;
			$(this).attr({'data-num':num});
		});
		if(typeof(json.bannerprev)!='undefined'){
			self.bannerprev=json.bannerprev;
		};
		if(typeof(json.bannernext)!='undefined'){
			self.bannernext=json.bannernext;
		};
		if(typeof(json.bannerchoose)!='undefined'){
			self.bannerchoose=json.bannerchoose;
			$(self.bannerchoose).eq(0).addClass('active');
		};
		if(typeof(json.timepass)!='undefined'){
			self.timepass=json.timepass;
		};
		if(typeof(json.speed)!='undefined'){
			self.speed=json.speed;
		};
		self.resize();
		$(document).on('click',self.bannernext,function(){
			self.next();
		});
		$(document).on('click',self.bannerprev,function(){
			self.prev();
		});
		$(document).on('click',self.bannerchoose,function(){
			self.choose($(this).index());
		});
		$(document).on('touchstart',function(e){
			self.touchstart=0;
	  		self.touchmove=0;
	  		var touch= e.originalEvent.touches[0];
	  		self.touchstart=touch.pageX;
	  		self.touchpass=true;
		});
		$(document).on('touchmove',self.bannerbox,function(e){
			if(self.touchpass){
		  		var touch= e.originalEvent.touches[0];
		  		self.touchmove=touch.pageX;
				if(self.touchmove-self.touchstart>50){
					self.prev();
					self.touchpass=false;
				};
				if(self.touchmove-self.touchstart<-50){
					self.next();
					self.touchpass=false;
				};
			};
		});
		self.showbanner();
		self.banneranime();
	};
	self.wheeltime=function(){
		if(self.number<self.count){
			self.number++;
		}else{
			self.number=0;
		};
		self.showbanner();
	};
	self.resize=function(){
		var num=-1;
		$(self.banner).each(function(){
			num++;
			$(this).css({'left':num+'00%'});
		});
	};
	self.showbanner=function(){
		if(self.count>=2){
			if(self.number==0){
				self.number++;
				$(self.banner).eq(self.count).insertBefore($(self.banner).eq(0));
				self.resize();
			};
			if(self.number==self.count){
				self.number--;
				$(self.banner).eq(0).insertAfter($(self.banner).eq(self.count));
				self.resize();
			};
		};
		$(self.bannermove).css({'left':-self.number+'00%'});
		$(self.bannerchoose).removeClass('active');
		$(self.bannerchoose).eq($(self.banner).eq(self.number).attr('data-num')).addClass('active');
	};
	self.prev=function(){
		if(self.number>0){
			self.number--;
		}else{
			self.number=self.count;
		};
		self.showbanner();
		self.banneranime();
	};
	self.next=function(){
		if(self.number<self.count){
			self.number++;
		}else{
			self.number=0;
		};
		self.showbanner();
		self.banneranime();
	};
	self.choose=function(i){
		self.number=$(self.banner+'[data-num='+i+']').index();
		self.showbanner();
		self.banneranime();
	};
	self.banneranime=function(){
		if($(self.banner).length!=1&&self.timepass){
			clearInterval(self.winflag);
			self.winflag=setInterval(function(){self.wheeltime()},self.speed);
		};
	};
};
/*----------
瀑布流
初始化
jy_waterfall.initialize({'failw':'内容宽度','addtype':'加载方式','addtag':'标签','addid':'加载对象'});
加载
jy_waterfall.append({'con':'对象内容','data':'对象data'});
清空
jy_waterfall.remove();
----------*/
var jy_waterfall={
	waterfailbox : '.jy_waterfailbox',
	waterfail : '.jy_waterfailbox .jy_waterfail',
	col : null,
	failw : 250,
	addtype : 'append',
	addtag : 'div',
	addid : null,
	dataname : null,
	waterfailcon : [],
	waterfaildata : [],
	initialize : function(json){
		if(typeof(json)!='undefined'&&typeof(json.failw)!='undefined'){
			this.failw=json.failw;
		};
		if(typeof(json)!='undefined'&&typeof(json.addtype)!='undefined'){
			this.addtype=json.addtype;
		};
		if(typeof(json)!='undefined'&&typeof(json.addtag)!='undefined'){
			this.addtag=json.addtag;
		};
		if(typeof(json)!='undefined'&&typeof(json.addid)!='undefined'){
			this.addid=json.addid;
		};
		this.col=jy_waterfall.waterfailnum();
		jy_waterfall.addbox();
		$(window).resize(function(){
			jy_waterfall.resize();
		});
	},
	addbox : function(){
		$(this.waterfail).remove();
		for(var i=0;i<this.col;i++){
			var waterfailcon='<'+this.addtag+' class="jy_waterfail" style=" width: '+(100/this.col)+'%"></'+this.addtag+'>';
			switch(this.addtype){
				case 'append' :
					$(this.waterfailbox).append(waterfailcon);
				break;
				case 'before' :
					$(this.addid).before(waterfailcon);
				break;
				default :
					$(this.waterfailbox).append(waterfailcon);
				break;
			}
		};
	},
	resize : function(){
		if(this.col!=jy_waterfall.waterfailnum()){
			this.col=jy_waterfall.waterfailnum();
			jy_waterfall.addbox();
			if(this.waterfailcon.length!=0){
				for(var i=0;i<this.waterfailcon.length;i++){
					var addnum=0;
					for(var o=0;o<this.col;o++){
						if($(this.waterfail).eq(addnum).height()>$(this.waterfail).eq(o).height()){
							addnum=o;
						};
					};
					$(this.waterfail).eq(addnum).append(this.waterfailcon[i]);
					$(this.waterfail).eq(addnum).children().eq(-1).data(this.dataname,this.waterfaildata[i]);
				};
			};
		};
	},
	append : function(json){
		var addnum=0;
		if(typeof(json)!='undefined'&&typeof(json.dataname)!='undefined'){
			this.dataname=json.dataname;
		};
		for(var i=0;i<this.col;i++){
			if($(this.waterfail).eq(addnum).height()>$(this.waterfail).eq(i).height()){
				addnum=i;
			};
		};
		$(this.waterfail).eq(addnum).append(json.con);
		$(this.waterfail).eq(addnum).children().eq(-1).data(this.dataname,json.data);
		this.waterfailcon.push(json.con);
		if(typeof(json)!='undefined'&&typeof(json.data)!='undefined'){
			this.waterfaildata.push(json.data);
		};
	},
	remove : function(){
		this.waterfailcon=[];
		this.waterfaildata=[];
		jy_waterfall.addbox();
	},
	waterfailnum : function(){
		var num=parseInt($(this.waterfailbox).width()/this.failw);
		return num;
	}
};
/*-----瀑布流结束-----*/

/*-----滚动位置-----*/
function jy_scrollpos(box,con,callback){
	var self=this;
	self.box=box;
	self.con=con;
	self.otop=0;
	self.num=1;
	self.addtop=200;
	self.initialize=function(){
		self.toparray=[];
		self.creatcon();
		self.otop=$(self.box).scrollTop();
		self.scrollmove();
		$(self.box).scroll(function(){
			self.scrollmove();
		});
	};
	self.resize=function(){
		self.toparray=[];
		self.creatcon();
		self.scrollmove();
	};
	self.creatcon=function(){
		var zzz=1;
		$(self.con).each(function(){
			$(this).text(zzz);
			zzz++;
			self.toparray.push($(this)[0].getBoundingClientRect().top-$(self.box)[0].getBoundingClientRect().top+$(self.box).scrollTop()-self.addtop);
		});
		self.realh=$(self.box)[0].scrollHeight;
	};
	self.scrollmove=function(){
		if($(self.box)[0].scrollHeight==self.realh){
			if($(self.box).scrollTop()>=self.otop){
				for(var i=self.num;i<self.toparray.length;i++){
					if($(self.box).scrollTop()<=self.toparray[i]){
						break;
					}else{
						self.num++;
					};
				};
			}else{
				for(var i=self.num;i>0;i--){
					if($(self.box).scrollTop()>=self.toparray[i-1]){
						break;
					}else{
						self.num--;
					};
				};
			};
			self.otop=$(self.box).scrollTop();
			callback(self.num);
		}else{
			self.resize();
		};
	};
	self.initialize();
};
/*-----滚动位置结束-----*/

/*滚动事件*/
$.fn.jy_wheel=function(wheel,ele,callback){
	var element=ele;
	var $element=$(ele);
	var self=this;
	self.wheel=wheel;
	self.drawstart=0;
	self.drawmove=0;
	self.touchflag=true;
	self.events=function(){
		$(document).on({
			DOMMouseScroll : function(e){
				self.scrolldms(e,function(){try{callback($element);}catch(e){}});
			},
			mousewheel : function(){
				self.scrollmw(function(){try{callback($element);}catch(e){}});
			}
		},element);
	  	$(document).on('touchstart',element,function(e){
	  		self.drawstart=0;
	  		self.drawmove=0;
	  		var touch= e.originalEvent.touches[0];
	  		self.drawstart=touch.pageY;
	    });
	  	$(document).on('touchmove',element,function(e){
	  		//e.preventDefault();
	        var touch= e.originalEvent.touches[0];
			self.drawmove=self.drawstart-touch.pageY;
			self.scrolldw(function(){try{callback($element);}catch(e){}});
	    });
	  	$(document).on('touchend',element,function(){
	  		self.touchflag=true;
	    });
	};
	self.scrolldms=function(e,callback){
		e = e || window.event;
		//Firefox滑轮事件  
		if (e.originalEvent.detail< 0&&self.wheel=='up') { //当滑轮向上滚动时  
			try{callback();}catch(e){};
		}  
		if (e.originalEvent.detail> 0&&self.wheel=='down') { //当滑轮向下滚动时  
			try{callback();}catch(e){};
		}  
	};
	self.scrollmw=function(callback){
		var e = window.event;
		//判断浏览器IE，谷歌滑轮事件
		if (e.wheelDelta > 0&&self.wheel=='up') { //当滑轮向上滚动时
			try{callback();}catch(e){};
		}  
		if (e.wheelDelta < 0&&self.wheel=='down') { //当滑轮向下滚动时  
			try{callback();}catch(e){};
		}  
	};
	self.scrolldw=function(callback){
 		if (self.drawmove <= -50&&self.wheel=='up') {
	  		if(self.touchflag){
				try{callback();}catch(e){};
	 			self.touchflag=false;
	  		};
		}  
		if (self.drawmove >= 50&&self.wheel=='down') {
	  		if(self.touchflag){
				try{callback();}catch(e){};
	 			self.touchflag=false;
	  		};
		}  
	};
	self.events();
};
