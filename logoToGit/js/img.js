let ImgUrlArrOld = [{"ImgName":"ATQ","url":"url(\"./logo/ATQ.png\")"},{"ImgName":"BCF","url":"url(\"./logo/BCF.png\")"},{"ImgName":"BENSO-RPF","url":"url(\"./logo/BENSO-RPF.png\")"},{"ImgName":"BOSCH","url":"url(\"./logo/BOSCH.png\")"},{"ImgName":"CASE","url":"url(\"./logo/CASE.png\")"},{"ImgName":"CAT","url":"url(\"./logo/CAT.png\")"},{"ImgName":"Cummins","url":"url(\"./logo/Cummins.png\")"},{"ImgName":"DAIDO-METAL","url":"url(\"./logo/DAIDO-METAL.png\")"},{"ImgName":"DAMEIS","url":"url(\"./logo/DAMEIS.png\")"},{"ImgName":"Donaldson","url":"url(\"./logo/Donaldson.png\")"},{"ImgName":"DOOSAN","url":"url(\"./logo/DOOSAN.png\")"},{"ImgName":"Enface","url":"url(\"./logo/Enface.png\")"},{"ImgName":"Garrett","url":"url(\"./logo/Garrett.png\")"},{"ImgName":"GiMPO","url":"url(\"./logo/GiMPO.png\")"},{"ImgName":"GS.BLAZERS","url":"url(\"./logo/GS.BLAZERS.png\")"},{"ImgName":"Henvo","url":"url(\"./logo/Henvo.png\")"},{"ImgName":"HINO","url":"url(\"./logo/HINO.png\")"},{"ImgName":"HITACHI","url":"url(\"./logo/HITACHI.png\")"},{"ImgName":"HJYB","url":"url(\"./logo/HJYB.png\")"},{"ImgName":"HYUNDAI","url":"url(\"./logo/HYUNDAI.png\")"},{"ImgName":"IHI","url":"url(\"./logo/IHI.png\")"},{"ImgName":"ISUZU","url":"url(\"./logo/ISUZU.png\")"},{"ImgName":"JCB","url":"url(\"./logo/JCB.png\")"},{"ImgName":"JiaQing","url":"url(\"./logo/JiaQing.png\")"},{"ImgName":"JOHN DEERE","url":"url(\"./logo/JOHN DEERE.png\")"},{"ImgName":"JOMOK","url":"url(\"./logo/JOMOK.png\")"},{"ImgName":"KATO","url":"url(\"./logo/KATO.png\")"},{"ImgName":"kawasaki","url":"url(\"./logo/kawasaki.png\")"},{"ImgName":"KOBELCO","url":"url(\"./logo/KOBELCO.png\")"},{"ImgName":"KOMAISU","url":"url(\"./logo/KOMAISU.png\")"},{"ImgName":"Koyo","url":"url(\"./logo/Koyo.png\")"},{"ImgName":"KYB","url":"url(\"./logo/KYB.png\")"},{"ImgName":"KZ","url":"url(\"./logo/KZ.png\")"},{"ImgName":"LIEBHERR","url":"url(\"./logo/LIEBHERR.png\")"},{"ImgName":"LISHIDE","url":"url(\"./logo/LISHIDE.png\")"},{"ImgName":"LiuGong","url":"url(\"./logo/LiuGong.png\")"},{"ImgName":"LONKING","url":"url(\"./logo/LONKING.png\")"},{"ImgName":"LOVOL","url":"url(\"./logo/LOVOL.png\")"},{"ImgName":"MAHLE","url":"url(\"./logo/MAHLE.png\")"},{"ImgName":"MITSUBISHI","url":"url(\"./logo/MITSUBISHI.png\")"},{"ImgName":"NOK","url":"url(\"./logo/NOK.png\")"},{"ImgName":"NTN","url":"url(\"./logo/NTN.png\")"},{"ImgName":"PHOSSET","url":"url(\"./logo/PHOSSET.png\")"},{"ImgName":"QFS","url":"url(\"./logo/QFS.png\")"},{"ImgName":"REGAL","url":"url(\"./logo/REGAL.png\")"},{"ImgName":"RIKEN","url":"url(\"./logo/RIKEN.png\")"},{"ImgName":"SAKURA","url":"url(\"./logo/SAKURA.png\")"},{"ImgName":"SANY","url":"url(\"./logo/SANY.png\")"},{"ImgName":"SDLG","url":"url(\"./logo/SDLG.png\")"},{"ImgName":"SHANTUI","url":"url(\"./logo/SHANTUI.png\")"},{"ImgName":"sintery","url":"url(\"./logo/sintery.png\")"},{"ImgName":"ST","url":"url(\"./logo/ST.png\")"},{"ImgName":"SUMITOMO","url":"url(\"./logo/SUMITOMO.png\")"},{"ImgName":"SUNWARD","url":"url(\"./logo/SUNWARD.png\")"},{"ImgName":"TBK-1","url":"url(\"./logo/TBK-1.png\")"},{"ImgName":"TBK","url":"url(\"./logo/TBK.png\")"},{"ImgName":"TOSD","url":"url(\"./logo/TOSD.png\")"},{"ImgName":"VOLVO","url":"url(\"./logo/VOLVO.png\")"},{"ImgName":"XGMA","url":"url(\"./logo/XGMA.png\")"},{"ImgName":"YANMAR","url":"url(\"./logo/YANMAR.png\")"},{"ImgName":"YOUFU","url":"url(\"./logo/YOUFU.png\")"},{"ImgName":"YTM","url":"url(\"./logo/YTM.png\")"},{"ImgName":"YUCHAI","url":"url(\"./logo/YUCHAI.png\")"},{"ImgName":"YXM","url":"url(\"./logo/YXM.png\")"},{"ImgName":"ZEXEL","url":"url(\"./logo/ZEXEL.png\")"},{"ImgName":"ZOOMLION","url":"url(\"./logo/ZOOMLION.png\")"},{"ImgName":"久保田","url":"url(\"./logo/久保田.png\")"},{"ImgName":"佰工","url":"url(\"./logo/佰工.png\")"},{"ImgName":"冠卓","url":"url(\"./logo/冠卓.png\")"},{"ImgName":"山字牌","url":"url(\"./logo/山字牌.png\")"},{"ImgName":"幸佳比","url":"url(\"./logo/幸佳比.png\")"},{"ImgName":"漆先生","url":"url(\"./logo/漆先生.png\")"},{"ImgName":"银钛","url":"url(\"./logo/银钛.png\")"}];
//生成随机数组 Generate random arrays
let ImgUrlArr = new Array();
while(ImgUrlArr.length<ImgUrlArrOld.length){
    let num = ImgUrlArrOld[Math.floor(Math.random() * ImgUrlArrOld.length)];
    if (ImgUrlArr.indexOf(num)<0) {
    	ImgUrlArr.push(num);
    }
}
let vm = new Vue({
    el:'#app',
    data:{
    	src:ImgUrlArr,
    	backgroundRepeat: 'no-repeat',
    	backgroundPosition: 'center',
    	backgroundSize: '100% 100%',
    },
    // 加载无限平移函数 Loading infinite translation function
    methods:{
    	ImgInfiniteRolling: function(){
    		ImgInfiniteRolling(-200,1)
    	},
    },
    //页面模板加载完成后调用无限平移函数 Call infinite translation function after loading page template
    mounted(){
    	this.ImgInfiniteRolling()
    }
})
//无限平移方法封装函数，begin返回尾部的触发值，speed每毫秒平移的速度 
//The infinite translation method encapsulates the function, begin: Returns the trigger value at the tail, speed: the speed of translation per millisecond.
function ImgInfiniteRolling(begin,speed){
    let img = document.getElementById('ImgUl').children;
    let WindowHeight = document.body.clientHeight;
    let WindowWidth = document.body.clientWidth;
    let WindowHeightNum;
    if (WindowHeight>=700) {
        WindowHeightNum=1;
    }else if(WindowHeight<700){
        WindowHeightNum=0.75;
    }
    if(WindowWidth<=736){
        WindowHeightNum=0.52;
    }
    //随机生成logo的left、top、width、height
    //Random generation of left, top, width, height of pictures
    for (let i = 0; i<img.length;i++) {
        let left = i,top;
        if (i%5==0) {
            top =  (25*Math.random()+250)*WindowHeightNum;
            img[i].style.transform = "translate3d("+left+"px,"+top+"px,"+"0)";
            img[i].style.width = (70*Math.random()+80)*WindowHeightNum+'px';
            img[i].style.height = img[i].style.width;
        }else if (i%5==1) {
            top =  (25*Math.random()-25)*WindowHeightNum;
            img[i].style.transform = "translate3d("+left+"px,"+top+"px,"+"0)";                  
            img[i].style.width = (50*Math.random()+100)*WindowHeightNum+'px';
            img[i].style.height = img[i].style.width;
        }else if (i%5==2) {
            top =  (25*Math.random()+175)*WindowHeightNum;
            img[i].style.transform = "translate3d("+left+"px,"+top+"px,"+"0)";                      
            img[i].style.width = (40*Math.random()+100)*WindowHeightNum+'px';
            img[i].style.height = img[i].style.width;
        }else if (i%5==3) {
            top =  (25*Math.random()+325)*WindowHeightNum;
            img[i].style.transform = "translate3d("+left+"px,"+top+"px,"+"0)";                      
            img[i].style.width = (70*Math.random()+80)*WindowHeightNum+'px';
            img[i].style.height = img[i].style.width;
        }else if (i%5==4) {
            top =  (25*Math.random()+80)*WindowHeightNum;
            img[i].style.transform = "translate3d("+left+"px,"+top+"px,"+"0)";                      
            img[i].style.width = (70*Math.random()+80)*WindowHeightNum+'px';
            img[i].style.height = img[i].style.width;
        }
        TimeSet(img[i],begin,speed);
    }
    //最后一个logo的位置，传递给平移函数，判断末尾衔接位置
    //The position of the last picture is passed to the translation function to determine the connection position between the beginning and the end.
    let endLeft = img[img.length-1].offsetLeft + img[img.length-1].offsetWidth*0.3;
    //无限循环调用平移函数Infinite loop calls translation function
    function TimeSet(img,begin,speed) {             
        setInterval(function (){ImgFun(img,endLeft,begin,speed);}, 100);
    }
    //平移函数，设置平移起点begin，平移速度speed   
    //Transverse movement function, set translation starting point: begin, translation speed: speed. 
    function ImgFun(img,endLeft,begin,speed) {
        //获取transform属性，并解析成X,Y轴数值 Get the transform attribute and parse it to X, Y axis values
        let translates = document.defaultView.getComputedStyle(img,null).transform;
        let translateX = parseFloat(translates.substring(6).split(',')[4]);
        let tanslateY = parseFloat(translates.substring(6).split(',')[5]);
        begin = begin-img.offsetLeft;
        if (translateX>begin) {
            translateX = translateX-speed;
            img.style.transform = "translate3d("+translateX+"px,"+tanslateY+"px,"+"0)";
        }else if (translateX<=begin) {
            translateX = endLeft-img.offsetLeft;
            img.style.transform = "translate3d("+translateX+"px,"+tanslateY+"px,"+"0)"; 
        }       
    }           
}	