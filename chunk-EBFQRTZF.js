import{$a as $,Aa as o,Ba as r,Ca as x,Da as R,Ea as m,Fa as u,Ga as c,Ha as y,Ia as g,Ja as G,K as U,Ka as A,R as d,S as B,Z as C,_ as h,ab as J,bb as f,fa as _,ga as v,ma as k,oa as l,ta as F,ua as z,va as p,wa as S,xa as j,ya as Y,za as q}from"./chunk-QVOQ563C.js";var w=class i{inputField=v.required();sendValue=_();inputEvent(t){this.sendValue.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["shared-input"]],inputs:{inputField:[1,"inputField"]},outputs:{sendValue:"sendValue"},standalone:!0,features:[g],decls:4,vars:7,consts:[[1,"control-group","row","g-1"],["for","overlay-text"],[3,"input","type","value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"label",1),c(2),r(),o(3,"input",2),m("input",function(s){return n.inputEvent(s)}),r()()),e&2&&(l(2),y(" ",n.inputField().label," "),l(),p("type",n.inputField().type)("value",n.inputField().value),z("placeholder",n.inputField().placeholder||null)("min",n.inputField().min||null)("max",n.inputField().max||null)("step",n.inputField().step||null))},dependencies:[f],styles:[".control-group[_ngcontent-%COMP%]{justify-content:space-between}"]})};var V=class i{buttonField=v.required();sendValue=_();inputEvent(){this.sendValue.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["shared-button"]],inputs:{buttonField:[1,"buttonField"]},outputs:{sendValue:"sendValue"},standalone:!0,features:[g],decls:2,vars:2,consts:[[1,"btn",3,"click","ngClass"]],template:function(e,n){e&1&&(o(0,"button",0),m("click",function(){return n.inputEvent()}),c(1),r()),e&2&&(p("ngClass",n.buttonField().class?"btn-secondary":""),l(),y(" ",n.buttonField().name,`
`))},dependencies:[f,$]})};function X(i,t){if(i&1&&(o(0,"option",3),c(1),r()),i&2){let e=t.$implicit;p("value",e.value),l(),y(" ",e.label," ")}}function Z(i,t){if(i&1&&Y(0,X,2,2,"option",3,j),i&2){let e=u();q(e.selectField().options)}}var I=class i{selectField=v.required();sendValue=_();selectEvent(t){this.sendValue.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["shared-select"]],inputs:{selectField:[1,"selectField"]},outputs:{sendValue:"sendValue"},standalone:!0,features:[g],decls:5,vars:3,consts:[[1,"control-group","row","g-1","wd-100"],["for","text-position"],["id","text-position",3,"change","value"],[3,"value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"label",1),c(2),r(),o(3,"select",2),m("change",function(s){return n.selectEvent(s)}),F(4,Z,2,0),r()()),e&2&&(l(2),y(" ",n.selectField().label," "),l(),p("value",n.selectField().value),l(),S(n.selectField().options?4:-1))},dependencies:[f],styles:[".control-group[_ngcontent-%COMP%]{justify-content:space-between}"]})};var E=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=U({imports:[f,V,w,I]})};function te(i,t){if(i&1){let e=R();o(0,"div",4)(1,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onOverlayTextChange(a))}),r(),o(2,"shared-select",6),m("sendValue",function(a){C(e);let s=u();return h(s.onTextPositionChange(a))}),r(),o(3,"div",7)(4,"shared-button",8),m("sendValue",function(){C(e);let a=u();return h(a.toggleBold())}),r(),o(5,"shared-button",8),m("sendValue",function(){C(e);let a=u();return h(a.toggleItalic())}),r(),o(6,"shared-button",8),m("sendValue",function(){C(e);let a=u();return h(a.toggleUnderline())}),r()(),o(7,"div",7)(8,"label",9),c(9,"Usar logo oscuro:"),r(),o(10,"input",10),m("change",function(){C(e);let a=u();return h(a.toggleLogo())}),r()(),o(11,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onOverlayOpacityChange(a))}),r(),o(12,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onBackgroundColorChange(a))}),r(),o(13,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onFontSizeChange(a))}),r(),o(14,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onPaddingChange(a))}),r(),o(15,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onGapChange(a))}),r(),o(16,"shared-input",5),m("sendValue",function(a){C(e);let s=u();return h(s.onOverlayYChange(a))}),r(),o(17,"button",11),c(18,"Descargar Imagen"),r()()}if(i&2){let e=u();l(),p("inputField",e.textValue),l(),p("selectField",e.textPosition),l(2),p("buttonField",e.buttonsOptions[0]),l(),p("buttonField",e.buttonsOptions[1]),l(),p("buttonField",e.buttonsOptions[2]),l(5),p("inputField",e.opacityValue),l(),p("inputField",e.colorValue),l(),p("inputField",e.fontValue),l(),p("inputField",e.paddingValue),l(),p("inputField",e.distanceValue),l(),p("inputField",e.verticalValue)}}var M=class i{imageUploaded=_();isImgSrc=!1;imageProperties={overlayText:"Texto de ejemplo",overlayOpacity:1,backgroundColor:"#000000",fontSize:20,textPosition:"center",bold:!1,italic:!1,underline:!1,padding:10,gap:10,overlayY:50,useDarkLogo:!1};textValue={label:"Texto",type:"text",placeholder:"Escribe tu texto aqu\xED",value:this.imageProperties.overlayText};opacityValue={label:"Opacidad del fondo",type:"range",value:this.imageProperties.overlayOpacity,min:0,max:1,step:.1};colorValue={label:"Color del fondo",type:"color",value:this.imageProperties.backgroundColor};fontValue={label:"Tama\xF1o de fuente",type:"number",value:this.imageProperties.fontSize,min:10,max:100};textPosition={label:"Posici\xF3n del texto",value:this.imageProperties.fontSize,options:[{label:"Izquierda",value:"start"},{label:"Centro",value:"center"},{label:"Derecha",value:"end"}]};buttonsOptions=[{name:"Negrita",class:this.imageProperties.bold},{name:"Cursiva",class:this.imageProperties.italic},{name:"Subrayado",class:this.imageProperties.underline}];paddingValue={label:"Padding",type:"range",value:this.imageProperties.padding,min:0,max:50};distanceValue={label:"Distancia entre logo y texto",type:"range",value:this.imageProperties.gap,min:0,max:50};verticalValue={label:"Ubicaci\xF3n del eje Y",type:"range",value:this.imageProperties.overlayY,min:0,max:100};imageOptions=_();onImageUpload(t){let e=t.target;if(e?.files?.[0]){let n=e.files[0],a=new FileReader;a.onload=s=>{let H=s.target?.result;H&&(this.isImgSrc=!0,this.imageUploaded.emit(H))},a.readAsDataURL(n)}}onOverlayTextChange(t){this.imageProperties.overlayText=t.target.value,this.imageOptions.emit(this.imageProperties)}onOverlayOpacityChange(t){this.imageProperties.overlayOpacity=parseFloat(t.target.value),this.imageOptions.emit(this.imageProperties)}onBackgroundColorChange(t){this.imageProperties.backgroundColor=t.target.value,this.imageOptions.emit(this.imageProperties)}onFontSizeChange(t){this.imageProperties.fontSize=parseInt(t.target.value,10),this.imageOptions.emit(this.imageProperties)}onTextPositionChange(t){this.imageProperties.textPosition=t.target.value,this.imageOptions.emit(this.imageProperties)}toggleBold(){this.imageProperties.bold=!this.imageProperties.bold,this.imageOptions.emit(this.imageProperties)}toggleItalic(){this.imageProperties.italic=!this.imageProperties.italic,this.imageOptions.emit(this.imageProperties)}toggleUnderline(){this.imageProperties.underline=!this.imageProperties.underline,this.imageOptions.emit(this.imageProperties)}onPaddingChange(t){this.imageProperties.padding=parseInt(t.target.value,10),this.imageOptions.emit(this.imageProperties)}onGapChange(t){this.imageProperties.gap=parseInt(t.target.value,10),this.imageOptions.emit(this.imageProperties)}onOverlayYChange(t){this.imageProperties.overlayY=parseInt(t.target.value,10),this.imageOptions.emit(this.imageProperties)}toggleLogo(){this.imageProperties.useDarkLogo=!this.imageProperties.useDarkLogo,this.imageOptions.emit(this.imageProperties)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["home-controls"]],outputs:{imageUploaded:"imageUploaded",imageOptions:"imageOptions"},standalone:!0,features:[g],decls:8,vars:1,consts:[[1,"control","bg-white","column","g-2"],[1,"control-group"],["for","image-upload",1,"btn","btn-secondary"],["type","file","id","image-upload","accept","image/*",3,"change"],[1,"image-controls","column","g-1","wd-100"],[1,"wd-100",3,"sendValue","inputField"],[1,"wd-100",3,"sendValue","selectField"],[1,"control-group","row","g-1","wd-100"],[3,"sendValue","buttonField"],["for","logo-toggle"],["type","checkbox","id","logo-toggle",3,"change"],[1,"btn","btn-secondary","wd-100"]],template:function(e,n){e&1&&(o(0,"aside",0)(1,"h1"),c(2,"Editor de Logo Patreon"),r(),o(3,"div",1)(4,"label",2),c(5,"Subir Imagen"),r(),o(6,"input",3),m("change",function(s){return n.onImageUpload(s)}),r()(),F(7,te,19,11,"div",4),r()),e&2&&(l(7),S(n.isImgSrc?7:-1))},dependencies:[f,E,V,w,I],styles:[".control[_ngcontent-%COMP%]{width:100%;padding:2rem;border-radius:1rem;box-shadow:0 4px 6px #0000001a}.control-group[_ngcontent-%COMP%]{justify-content:space-between}.image-controls[_ngcontent-%COMP%]{align-items:start}#image-upload[_ngcontent-%COMP%]{display:none}"]})};var ne=(i,t,e,n,a,s)=>({"background-color":i,opacity:t,padding:e,gap:n,top:a,"justify-content":s}),ie=(i,t,e,n)=>({"font-size":i,"font-weight":t,"font-style":e,"text-decoration":n}),O=class i{imageSrc=v.required();imageProperties=v.required();isBold(t){return t==null?"normal":t?"bold":"normal"}isItalic(t){return t==null?"normal":t?"italic":"normal"}isUnderline(t){return t==null?"none":t?"underline":"none"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["home-preview"]],inputs:{imageSrc:[1,"imageSrc"],imageProperties:[1,"imageProperties"]},standalone:!0,features:[g],decls:7,vars:17,consts:[[1,"preview"],[1,"preview-image","row","bg-white"],["alt","Uploaded Image","id","uploaded-image",3,"src"],[1,"overlay","row","color-white",3,"ngStyle"],["alt","Patreon Logo",1,"logo",3,"src"],["id","overlay-text-display",3,"ngStyle"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"div",1),x(2,"img",2),o(3,"div",3),x(4,"img",4),o(5,"span",5),c(6),r()()()()),e&2&&(l(2),p("src",n.imageSrc(),k),l(),p("ngStyle",A(5,ne,n.imageProperties().backgroundColor,n.imageProperties().overlayOpacity,n.imageProperties().padding+"px",n.imageProperties().gap+"px",n.imageProperties().overlayY+"%",n.imageProperties().textPosition)),l(),p("src",n.imageProperties().useDarkLogo?"/dark_logo.svg":"/light_logo.svg",k),l(),p("ngStyle",G(12,ie,n.imageProperties().fontSize+"px",n.isBold(n.imageProperties().bold),n.isItalic(n.imageProperties().italic),n.isUnderline(n.imageProperties().underline))),l(),y(" ",n.imageProperties().overlayText," "))},dependencies:[f,J],styles:[".preview[_ngcontent-%COMP%]{width:100%;position:relative}.preview-image[_ngcontent-%COMP%]{position:relative;width:100%;overflow:hidden}#uploaded-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.overlay[_ngcontent-%COMP%]{position:absolute;gap:1rem;background:#00000080;padding:1rem;border-radius:.5rem;transform:translateY(50%);width:100%}.logo[_ngcontent-%COMP%]{width:5rem;height:auto}#overlay-text-display[_ngcontent-%COMP%]{isolation:isolate}"]})};function oe(i,t){if(i&1&&x(0,"home-preview",2),i&2){let e=u();p("imageSrc",e.uploadedImageSrc)("imageProperties",e.imageProperties)}}var T=class i{uploadedImageSrc="";imageProperties={overlayText:"Texto de ejemplo",overlayOpacity:1,backgroundColor:"#000000",fontSize:20,textPosition:"center",bold:!1,italic:!1,underline:!1,padding:10,gap:10,overlayY:50,useDarkLogo:!1};handleImageUpload(t){this.uploadedImageSrc=t}handleImageOptions(t){t&&(this.imageProperties=t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["pages-home"]],standalone:!0,features:[g],decls:3,vars:1,consts:[[1,"container","row"],[3,"imageUploaded","imageOptions"],[3,"imageSrc","imageProperties"]],template:function(e,n){e&1&&(o(0,"main",0)(1,"home-controls",1),m("imageUploaded",function(s){return n.handleImageUpload(s)})("imageOptions",function(s){return n.handleImageOptions(s)}),r(),F(2,oe,1,2,"home-preview",2),r()),e&2&&(l(2),S(n.uploadedImageSrc?2:-1))},dependencies:[f,M,O],styles:[".container[_ngcontent-%COMP%]{gap:2rem;padding:2rem}"]})};var D=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["shared-footer"]],standalone:!0,features:[g],decls:3,vars:0,consts:[[1,"footer","row"],[1,"color-white"]],template:function(e,n){e&1&&(o(0,"footer",0)(1,"p",1),c(2,"Development by FeithNoir"),r()())},styles:[".footer[_ngcontent-%COMP%]{padding:1rem;width:100%}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.6rem}"]})};var N=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["shared-header"]],standalone:!0,features:[g],decls:3,vars:0,consts:[[1,"header"],[1,"header-title","color-white"]],template:function(e,n){e&1&&(o(0,"header",0)(1,"h1",1),c(2,"Studio Overlay"),r()())},styles:[".header[_ngcontent-%COMP%]{padding:2rem;width:100%}.header-title[_ngcontent-%COMP%]{font-size:3rem}"]})};var L=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=d({type:i,selectors:[["app-layout"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"layout"],[1,"navbar","bg-black"],[1,"main","layout-height"],[1,"footer","bg-black"]],template:function(e,n){e&1&&(o(0,"div",0),x(1,"shared-header",1)(2,"pages-home",2)(3,"shared-footer",3),r())},dependencies:[f,E,D,N,T],styles:['.layout[_ngcontent-%COMP%]{min-height:100vh;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr auto;grid-template-areas:"navbar navbar" "main main" "footer footer";overflow:hidden}.navbar[_ngcontent-%COMP%]{top:0;position:sticky;grid-area:navbar;z-index:100}.main[_ngcontent-%COMP%]{grid-area:main}.footer[_ngcontent-%COMP%]{grid-area:footer;z-index:100}']})};export{L as default};