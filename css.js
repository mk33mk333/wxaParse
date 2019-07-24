var Fs = require("fs");
var Path = require("path");
var cssList = {};
function setCssToHead(cssStrArr,info,opts){
    if(!opts){
        console.error('异常参数',cssStrArr,info,opts)
    }else{
        var path = opts.path;
        cssList[path] = cssStrArr;
    }
    return function(){}
}

var __vd_version_info__ = {
    delayedGwx:false
};
var __wxAppCode__ = {};

function $gwx () {

    return '------'
}

var cssImport = [[".",[1],"dx { box-sizing: border-box; width: 100%; height: ",[0,68],"; padding-left: ",[0,24],"; background-color: #fff; border-bottom: ",[0,1]," solid #e6e6e6; display: -webkit-flex; display: flex; -webkit-align-items: center; align-items: center; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"dx .",[1],"icon { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"dx .",[1],"title { font-size: ",[0,28],"; color: #939393; margin-left: ",[0,8],"; }\n.",[1],"dx .",[1],"title-blue { color: #507daf; }\n",],[".",[1],"slim-border { position: absolute; z-index: 9; -webkit-transform: scale(0.5); transform: scale(0.5); }\n",],];

setCssToHead([])();
setCssToHead(["body{ height: 100%; }\n.",[1],"container { height: 100%; display: -webkit-flex; display: flex; -webkit-flex-direction: column; flex-direction: column; -webkit-align-items: center; align-items: center; -webkit-justify-content: space-between; justify-content: space-between; padding: ",[0,200]," 0; box-sizing: border-box; }\nwx-button { background: inherit; padding: 0; }\nwx-button::after { border: none; }\nwx-cover-view { white-space: normal; line-height: inherit; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:26:1)",{path:"./app.wxss"})(); 
__wxAppCode__['common/Dialog/Dialog.wxss'] = setCssToHead([".",[1],"back-page{ position: fixed; top:0; left: 0; right: 0; bottom: 0; z-index: 10000; background: rgba(0,0,0,0.40); }\n.",[1],"dialog-content{ position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%,-75%); transform: translate(-50%,-75%); width: ",[0,540],"; height: ",[0,266],"; background: #f3f3f3; border-radius: ",[0,12],"; text-align: center; }\n.",[1],"dialog-text{ font-family: PingFangSC-Regular; font-size: ",[0,28],"; color: #333333; text-align: center; margin: ",[0,48]," ",[0,70]," ",[0,48],"; }\n.",[1],"btn-line{ display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row; -webkit-justify-content: center; justify-content: center; }\n.",[1],"log-btn{ width: 50%; height: ",[0,90],"; padding: 0; background: none; border-top: ",[0,1]," #dfdfdf solid; font-family: PingFangSC-Regular; font-size: ",[0,32],"; color: #636363; border-radius: 0; }\n.",[1],"contact{ color: #1B9AF4; border-left: ",[0,1]," #dfdfdf solid; }\n",],undefined,{path:"./common/Dialog/Dialog.wxss"});
if (__vd_version_info__.delayedGwx) __wxAppCode__['common/Dialog/Dialog.wxml'] = [ $gwx, './common/Dialog/Dialog.wxml' ];
else __wxAppCode__['common/Dialog/Dialog.wxml'] = $gwx( './common/Dialog/Dialog.wxml' );
__wxAppCode__['common/AdDark/AdDark.wxss'] = setCssToHead([".",[1],"ad-dark { position: relative; padding: ",[0,20]," 0; background-color: #f7f7f7; }\n.",[1],"ad-dark .",[1],"tip { width: ",[0,52],"; height: ",[0,28],"; position: absolute; left: ",[0,10],"; top: ",[0,30],"; }\n.",[1],"ad-dark .",[1],"pic { display: block; width: ",[0,750],"; height: ",[0,200],"; }\n.",[1],"ad-dark .",[1],"close-wrap { width: ",[0,48],"; height: ",[0,88],"; position: absolute; right: 0; top: 0; display: -webkit-flex; display: flex; -webkit-align-items: center; align-items: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"ad-dark .",[1],"close-wrap .",[1],"close { width: ",[0,28],"; height: ",[0,28],"; }\n",],undefined,{path:"./common/AdDark/AdDark.wxss"});
if (__vd_version_info__.delayedGwx) __wxAppCode__['common/CaptchaDialog/CaptchaDialog.wxml'] = [ $gwx, './common/CaptchaDialog/CaptchaDialog.wxml' ];
else __wxAppCode__['common/CaptchaDialog/CaptchaDialog.wxml'] = $gwx( './common/CaptchaDialog/CaptchaDialog.wxml' );
__wxAppCode__['common/Dark/Dark.wxss'] = setCssToHead([[2,0],".",[1],"dx-dark{ border-top: 1px solid transparent; border-bottom: 1px solid transparent; }\n.",[1],"dx-header{ margin: 0 ",[0,24],"; }\n.",[1],"dx-content{ margin: ",[0,24],"; width:",[0,702],"; }\n.",[1],"hot-search-content { margin: 0 ",[0,24]," ",[0,16]," ",[0,24],"; }\n.",[1],"retweet-content{ background-color:#F7F7F7; padding: ",[0,10]," 0 ",[0,24]," 0; }\n.",[1],"gray-line{ width: ",[0,750],"; height: ",[0,20],"; background-color: #f2f2f2; border-bottom:",[0,1]," solid #E6E6E6; border-top:",[0,1]," solid #E6E6E6; }\n.",[1],"dark-placeholder { display: block; width: 100%; height: ",[0,370],"; }\n.",[1],"dark-title-content { display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row; padding: 0 ",[0,26],"; -webkit-align-items: center; align-items: center; height: ",[0,88],"; }\n.",[1],"dark-title-image1 { width: ",[0,40],"; height: ",[0,40],"; margin-right: ",[0,12],"; }\n.",[1],"dark-title-image2 { width: ",[0,35],"; height: ",[0,35],"; margin-right: ",[0,12],"; }\n.",[1],"dark-title-text { font-family: PingFangSC-Medium; font-size: ",[0,34],"; line-height: ",[0,40],"; color: #333333; height: ",[0,40],"; margin-right: ",[0,10],"; }\n.",[1],"hot-search-footer { height: ",[0,88],"; width: ",[0,750],"; display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"hot-number { font-family: PingFangSC-Regular; font-size: ",[0,24],"; color: #939393; line-height: ",[0,90],"; margin-left: ",[0,26],"; width: ",[0,580],"; }\n.",[1],"footer-right { display: -webkit-flex; display: flex; -webkit-justify-content: flex-end; justify-content: flex-end; -webkit-align-items: center; align-items: center; }\n.",[1],"dx-footer-like { display: -webkit-flex; display: flex; -webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center; position: relative; -webkit-flex: 1; flex: 1; width: ",[0,140],"; height: 100%; }\n.",[1],"dx-footer-txt { font-family: PingFangSC-Regular; font-size: ",[0,22],"; color: #939393; }\n.",[1],"dx-footer-a-img { margin-right: ",[0,7],"; width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"btn { padding: 0; margin: 0; background: transparent; }\n.",[1],"hot-search-header { margin: 0; }\n.",[1],"hot-dark { background: #FFFFFF; box-shadow: 0 -1px 0 0 #E6E6E6, 0 1px 0 0 #E6E6E6; }\n",],undefined,{path:"./common/Dark/Dark.wxss"});
		
		
                         
var cssImportArr = []
cssImport.map((item,i)=>{
	cssImportArr[i] = item.map(seg=>{
		if(Array.isArray(seg)){
			if(seg.length == 1){
				if(seg[0] != 1){
					console.error('gap参数异常',seg);
				}
				return ''
			}else if(seg.length == 2){
				if(seg[0] === 0){
					return seg[1]+'rpx'
				}else{
					console.error('rpx参数异常',seg,key);
				}
			}else{
				console.log('未知异常',seg)
			}
		}
		return seg
	}).join('')

})
			
			
			
var cssMap = {};

Object.keys(cssList).forEach(key=>{

	cssMap[key] = cssList[key].map(seg=>{
		if(Array.isArray(seg)){
			if(seg.length == 1){
				if(seg[0] != 1){
					console.error('gap参数异常',seg);
				}
				return ''
			}else if(seg.length == 2){
				if(seg[0] === 0){
					return seg[1]+'rpx'
				}else if(seg[0] == 2){
					console.log(`文件${key}有导入数据`);
					return `/* import data  start */\n ${cssImportArr[seg[1]]} /* import data  end */\n `
				}else{
					console.error('rpx参数异常',seg,key);
				}
			}else{
				console.log('未知异常',seg)
			}
		}
		return seg
	}).join('')

})

console.log(__dirname);
// 将cssMap生成文件
Object.keys(cssMap).forEach(key=>{
	var filePath = Path.join(__dirname,key);
	console.log(filePath);
	// 覆盖写入/创建文件
	Fs.writeFile(filePath, cssMap[key], 'utf8', function(err,data){
			if(err){
				console.log('写入失败',filePath,err);
			}
	});
	// 删除多余的html文件
	// Fs.unlink(filePath.replace('.wxss','.html'), (err) => {
	// 	if (err) console.log(err) ;
	// 	console.log('文件已删除');
	// });
	
})
				

