(function(){"use strict";var e={472:function(e,t,l){var n=l(9242),i=l(3396),a=l.p+"static/img/logo_od.5c85fd74.png",o=l.p+"static/img/logo_git.55dd1831.png",s=l(7718),r=l(6281),c=l(1556),u=l(3369),d=l(6824),_=l(8521),m=l(8694),f=l(3140);const p=(0,i._)("h2",null,"Object Detection Evaluator",-1);function h(e,t,l,n,h,g){const v=(0,i.up)("EvalSetting"),w=(0,i.up)("EvalResult");return(0,i.wg)(),(0,i.j4)(s.q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r.L,{style:{"background-color":"#6991a1",color:"#FFFFFF"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m.f,{"max-width":55,"max-height":55,src:a,style:{"margin-left":"20px"}}),(0,i.Wm)(c.o,null,{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(m.f,{"max-width":114,"max-height":64,src:o,onClick:t[0]||(t[0]=e=>g.openGitHub()),justify:"end",style:{"margin-right":"20px"}})])),_:1}),(0,i.Wm)(f.O,{style:{"background-color":"#504f5a",color:"#FFFFFF"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_.D,{lg:"3"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{ref:"evalsetting_component",gt_id:h.gt_id,infer_id:h.infer_id,class_iou_list:h.class_iou_list,onClickedEvaluate:g.initEvaluateResult,onClickedApply:g.applyEvaluateResult},null,8,["gt_id","infer_id","class_iou_list","onClickedEvaluate","onClickedApply"])])),_:1}),(0,i.Wm)(_.D,{lg:"9"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{ref:"evalresult_component",eval_result_list:h.eval_result_list,gt_id:h.gt_id,infer_id:h.infer_id},null,8,["eval_result_list","gt_id","infer_id"])])),_:1})])),_:1}),(0,i.Wm)(d.o)])),_:1})])),_:1})])),_:1})}var g=l(7139),v=l(7312),w=l(3289),y=l(1278),b=l(4413),k=l(678);const W={style:{display:"flex","align-items":"center"}},x=(0,i._)("h4",null,"Ground Truth Data List",-1),C=(0,i._)("th",null,"ID",-1),F=(0,i._)("th",null,"GT Name",-1),T=(0,i._)("th",null,null,-1),I={style:{"text-align":"center"}},D=["value","checked"],E={style:{"text-align":"center"}},j={style:{display:"flex","align-items":"center"}},P=(0,i._)("h4",null,"Inferred Result Data List",-1),U=(0,i._)("th",null,"ID",-1),G=(0,i._)("th",null,"Model Name",-1),L=(0,i._)("th",null,null,-1),R={style:{"text-align":"center"}},z=["value","checked"],O={style:{"text-align":"center"}},S=(0,i._)("input",{type:"hidden",name:"class_iou_list",value:'[{"class_name":"all", "iou_th":0.5}]'},null,-1),N={style:{display:"flex","align-items":"center"}},V=(0,i._)("h4",null,"IoU Threshold Setting",-1),Z=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Class"),(0,i._)("th"),(0,i._)("th",null,"IoU Threshold"),(0,i._)("th")])],-1),B=["onUpdate:modelValue"];function Y(e,t,l,a,o,s){const r=(0,i.up)("GroundTruthUpload"),c=(0,i.up)("InferUpload");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d.o,{class:"flex-column pa-1"},{default:(0,i.w5)((()=>[(0,i._)("div",W,[x,(0,i.Wm)(k.N,{text:"Select or upload annotation files of XML format."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),(0,i.Wm)(b.Y,{"fixed-header":"",height:"200px",density:"compact",style:{color:"#504f5a"}},{default:(0,i.w5)((()=>[(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,[(0,i.Wm)(r,{onClickedUpload:s.getList},null,8,["onClickedUpload"])]),C,F,T])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.gt_list,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.gt_id},[(0,i._)("td",I,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.selected_gt_id=e),class:"form-check-input",type:"radio",value:e.gt_id,checked:l.gt_id===e.gt_id},null,8,D),[[n.G2,o.selected_gt_id]])]),(0,i._)("td",null,(0,g.zw)(e.gt_id),1),(0,i._)("td",null,(0,g.zw)(e.gt_name),1),(0,i._)("td",E,[(0,i.Wm)(w.t,{icon:"mdi-trash-can",onClick:t=>s.deleteList("gt_"+e.gt_id),color:"#0D6EFD"},null,8,["onClick"])])])))),128))])])),_:1})])),_:1}),(0,i.Wm)(d.o,{class:"flex-column pa-1"},{default:(0,i.w5)((()=>[(0,i._)("div",j,[P,(0,i.Wm)(k.N,{text:"Select or upload a text file generated by the OD model."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),(0,i.Wm)(b.Y,{"fixed-header":"",height:"200px",density:"compact",style:{color:"#504f5a"}},{default:(0,i.w5)((()=>[(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,[(0,i.Wm)(c,{onClickedUpload:s.getList},null,8,["onClickedUpload"])]),U,G,L])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.infer_list,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.infer_id},[(0,i._)("td",R,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.selected_infer_id=e),class:"form-check-input",type:"radio",value:e.infer_id,checked:l.infer_id===e.infer_id},null,8,z),[[n.G2,o.selected_infer_id]])]),(0,i._)("td",null,(0,g.zw)(e.infer_id),1),(0,i._)("td",null,(0,g.zw)(e.model_name),1),(0,i._)("td",O,[(0,i.Wm)(w.t,{icon:"mdi-trash-can",onClick:t=>s.deleteList("infer_"+e.infer_id),color:"#0D6EFD"},null,8,["onClick"])])])))),128))])])),_:1}),S])),_:1}),(0,i.Wm)(d.o,{class:"pa-0",justify:"end"},{default:(0,i.w5)((()=>[(0,i.Wm)(v.T,{variant:"flat",color:"#0D6EFD",onClick:t[2]||(t[2]=e=>s.getEvaluateResult())},{default:(0,i.w5)((()=>[(0,i.Uk)("Evaluate")])),_:1})])),_:1}),(0,i.Wm)(d.o,{class:"flex-column pa-2"},{default:(0,i.w5)((()=>[(0,i._)("div",N,[V,(0,i.Wm)(k.N,{text:"Select the class name for evaluation.\r\n\t\t\tAdjust the IoU threshold used for correct and incorrect detections."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),(0,i.Wm)(b.Y,{"fixed-header":"",height:"200px",density:"compact",style:{color:"#504f5a"}},{default:(0,i.w5)((()=>[Z,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.class_iou_list,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.class_name,style:{"vertical-align":"middle"}},[(0,i._)("td",null,[(0,i.Wm)(y.G,{small:"",modelValue:e.checked,"onUpdate:modelValue":t=>e.checked=t,color:"#0D6EFD",value:!0,"hide-details":"","model-value":e.checked},null,8,["modelValue","onUpdate:modelValue","model-value"])]),(0,i._)("td",null,(0,g.zw)(e.class_name),1),(0,i._)("td",null,[(0,i.wy)((0,i._)("input",{class:"form-range",type:"range","onUpdate:modelValue":t=>e.iou_th=t,max:"0.9",min:"0.1",step:"0.1","hide-details":""},null,8,B),[[n.nr,e.iou_th]])]),(0,i._)("td",null,(0,g.zw)(e.iou_th),1)])))),128))])])),_:1})])),_:1}),(0,i.Wm)(d.o,{class:"pa-0",justify:"end"},{default:(0,i.w5)((()=>[(0,i.Wm)(v.T,{variant:"flat",color:"#0D6EFD",onClick:t[3]||(t[3]=e=>s.updateClassIouList())},{default:(0,i.w5)((()=>[(0,i.Uk)("Apply")])),_:1})])),_:1})],64)}var A=l(11),H=l(6572),K=l(1888),M=l(1334),$=l(4009),q=l(8258),J=l(9234),X=l(2902);const Q=(0,i._)("span",{class:"text-h5"},"Add Ground Truth",-1);function ee(e,t,l,n,a,o){return(0,i.wg)(),(0,i.j4)($.B,{modelValue:a.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>a.dialog=e),persistent:"",width:"500"},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-upload"},e,{color:"#0D6EFD"}),null,16)])),default:(0,i.w5)((()=>[(0,i.Wm)(A._,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H.E,null,{default:(0,i.w5)((()=>[Q])),_:1}),(0,i.Wm)(K.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(X.h,{modelValue:a.gt_name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.gt_name=e),label:"GT name",class:"pa-md-4"},null,8,["modelValue"]),(0,i.Wm)(q.Z,{modelValue:a.gt_files,"onUpdate:modelValue":t[1]||(t[1]=e=>a.gt_files=e),multiple:"",label:"GT files"},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(M.h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(J.C),(0,i.Wm)(v.T,{color:"#69a195",variant:"text",onClick:t[2]||(t[2]=e=>a.dialog=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Close ")])),_:1}),(0,i.Wm)(v.T,{color:"#69a195",variant:"text",onClick:t[3]||(t[3]=e=>{o.addGt(),a.dialog=!1})},{default:(0,i.w5)((()=>[(0,i.Uk)(" Upload ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var te=l(4161),le={name:"GroundTruthUpload",data(){return{gt_name:"",gt_files:null,dialog:!1}},methods:{addGt(){const e=new FormData;e.append("gt_name",this.gt_name);for(let t=0;t<this.gt_files.length;t++)e.append("gt_files[]",this.gt_files[t]);te.Z.post("http://localhost:5000/addGt",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{this.$emit("clicked-Upload"),console.log("succeeded /addGt")}))}}},ne=l(89);const ie=(0,ne.Z)(le,[["render",ee]]);var ae=ie;const oe=(0,i._)("span",{class:"text-h5"},"Add Infer Result",-1);function se(e,t,l,n,a,o){return(0,i.wg)(),(0,i.j4)($.B,{modelValue:a.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>a.dialog=e),persistent:"",width:"500"},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-upload"},e,{color:"#0D6EFD"}),null,16)])),default:(0,i.w5)((()=>[(0,i.Wm)(A._,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H.E,null,{default:(0,i.w5)((()=>[oe])),_:1}),(0,i.Wm)(K.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(X.h,{modelValue:a.model_name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.model_name=e),label:"Model name"},null,8,["modelValue"]),(0,i.Wm)(q.Z,{modelValue:a.infer_file,"onUpdate:modelValue":t[1]||(t[1]=e=>a.infer_file=e),label:"Infer File"},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(M.h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(J.C),(0,i.Wm)(v.T,{color:"#69a195",variant:"text",onClick:t[2]||(t[2]=e=>a.dialog=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Close ")])),_:1}),(0,i.Wm)(v.T,{color:"#69a195",variant:"text",onClick:t[3]||(t[3]=e=>{o.addInfer(),a.dialog=!1})},{default:(0,i.w5)((()=>[(0,i.Uk)(" Upload ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var re={name:"InferUpload",data(){return{model_name:"",infer_file:null,dialog:!1}},methods:{addInfer(){const e=new FormData;e.append("model_name",this.model_name),e.append("infer_file",this.infer_file[0]),te.Z.post("http://localhost:5000/addInfer",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{this.$emit("clicked-Upload"),console.log("succeeded /addInfer")}))}}};const ce=(0,ne.Z)(re,[["render",se]]);var ue=ce,de={name:"EvalSetting",components:{GroundTruthUpload:ae,InferUpload:ue},props:["gt_id","infer_id","class_iou_list"],data(){return{selected_gt_id:null,selected_infer_id:null,gt_list:[],infer_list:[]}},methods:{getList(){te.Z.get("/getList").then((e=>{this.gt_list=e.data.gt_list,this.infer_list=e.data.infer_list,console.log("succeeded /getList")}))},deleteList(e){te.Z.get("/deleteList",{params:{delete_info:e}}).then((()=>{console.log("succeeded /deleteList"),this.getList()}))},getEvaluateResult(){const e=this.selected_gt_id,t=this.selected_infer_id;this.$emit("clicked-evaluate",e,t)},updateClassIouList(){this.$emit("clicked-apply",!1)}},mounted(){this.getList()}};const _e=(0,ne.Z)(de,[["render",Y]]);var me=_e;const fe={style:{display:"flex","align-items":"center"}},pe=(0,i._)("h4",null,"Best Performance Score",-1),he=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Class"),(0,i._)("th",null,"Best Score TH"),(0,i._)("th",null,"Precision"),(0,i._)("th",null,"Recall"),(0,i._)("th",null,"F1"),(0,i._)("th",null,"TP(Infer)"),(0,i._)("th",null,"TP(GT)"),(0,i._)("th",null,"FP"),(0,i._)("th",null,"FN")])],-1),ge=["onClick"],ve=["onClick"],we=["onClick"],ye=["onClick"],be={style:{display:"flex","align-items":"center"}},ke=(0,i._)("h4",null,"PR Curve",-1),We=(0,i._)("div",{style:{width:"550px",height:"550px"}},[(0,i._)("canvas",{id:"pr-chart"})],-1),xe={style:{display:"flex","align-items":"center"}},Ce=(0,i._)("h4",null,"Image Inspection",-1),Fe={style:{display:"flex","justify-content":"space-between","text-align":"center"}},Te={key:0,style:{"line-height":"0.5"}},Ie={key:1,style:{"line-height":"0.5"}},De={style:{display:"flex","align-items":"center"}},Ee=(0,i._)("h4",null,"Detail",-1),je=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Score TH"),(0,i._)("th",null,"Num of infer"),(0,i._)("th",null,"Num of GT"),(0,i._)("th",null,"TP(Infer)"),(0,i._)("th",null,"TP(GT)"),(0,i._)("th",null,"FP"),(0,i._)("th",null,"FN"),(0,i._)("th",null,"Precision"),(0,i._)("th",null,"Recall"),(0,i._)("th",null,"F1")])],-1),Pe=["onClick"],Ue=["onClick"],Ge=["onClick"],Le=["onClick"];function Re(e,t,l,n,a,o){const s=(0,i.up)("viewer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d.o,{class:"flex-column pa-1"},{default:(0,i.w5)((()=>[(0,i._)("div",fe,[pe,(0,i.Wm)(k.N,{text:"Displaying the optimal score threshold used for deploying the model (to maximize F1) \r\n        and the model's performance under these conditions."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),(0,i.Wm)(b.Y,{"fixed-header":"",height:"200px",density:"compact",style:{color:"#504f5a"}},{default:(0,i.w5)((()=>[he,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.eval_result_list,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.classname},[(0,i._)("td",null,(0,g.zw)(e.class_name),1),(0,i._)("td",null,(0,g.zw)(e.best_score),1),(0,i._)("td",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).precision),1),(0,i._)("td",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).recall),1),(0,i._)("td",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).f1),1),(0,i._)("td",{onClick:t=>o.FilterImageList(e,e.best_score,"TP_infer")},[(0,i._)("u",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).TP_infer.num)+" obj",1)],8,ge),(0,i._)("td",{onClick:t=>o.FilterImageList(e,e.best_score,"TP_gt")},[(0,i._)("u",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).TP_gt.num)+" obj",1)],8,ve),(0,i._)("td",{onClick:t=>o.FilterImageList(e,e.best_score,"FP")},[(0,i._)("u",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).FP.num)+" obj",1)],8,we),(0,i._)("td",{onClick:t=>o.FilterImageList(e,e.best_score,"FN")},[(0,i._)("u",null,(0,g.zw)(o.findEvalResultByScore(e,e.best_score).FN.num)+" obj",1)],8,ye)])))),128))])])),_:1})])),_:1}),(0,i.Wm)(d.o,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(_.D,{lg:"5",class:"flex-column"},{default:(0,i.w5)((()=>[(0,i._)("div",be,[ke,(0,i.Wm)(k.N,{text:"Displaying the tradeoff between precision and recall for different threshold."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),We])),_:1}),(0,i.Wm)(_.D,{lg:"7",class:"flex-column"},{default:(0,i.w5)((()=>[(0,i._)("div",xe,[Ce,(0,i.Wm)(k.N,{text:"Review each object(true positive, false positive, false negative) in the images."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),(0,i._)("div",Fe,[(0,i.Wm)(w.t,{icon:"mdi-page-first",onClick:t[0]||(t[0]=e=>o.InspectionFirst())}),(0,i.Wm)(w.t,{icon:"mdi-chevron-left",onClick:t[1]||(t[1]=e=>o.InspectionPrevious())}),(0,i.Wm)(w.t,{icon:"mdi-chevron-right",onClick:t[2]||(t[2]=e=>o.InspectionNext())}),(0,i.Wm)(w.t,{icon:"mdi-page-last",onClick:t[3]||(t[3]=e=>o.InspectionLast())})]),0==a.inspection_filename_list.length?((0,i.wg)(),(0,i.iD)("p",Te,' ( select "xx obj" in the table ... )')):(0,i.kq)("",!0),a.inspection_filename_list.length>0?((0,i.wg)(),(0,i.iD)("p",Ie," ("+(0,g.zw)(a.current_page+1)+" / "+(0,g.zw)(a.inspection_filename_list.length)+") "+(0,g.zw)(a.filename),1)):(0,i.kq)("",!0),(0,i.Wm)(s,{images:a.image_source},{default:(0,i.w5)((()=>[(0,i.Wm)(m.f,{src:a.image_source,alt:a.filename},null,8,["src","alt"])])),_:1},8,["images"])])),_:1})])),_:1}),(0,i.Wm)(d.o,{class:"pa-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(_.D,{lg:"12",class:"flex-column"},{default:(0,i.w5)((()=>[(0,i._)("div",De,[Ee,(0,i.Wm)(k.N,{text:"Displaying all score threshold and the model's performance under these conditions."},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(v.T,(0,i.dG)({icon:"mdi-information",variant:"plain"},e),{default:(0,i.w5)((()=>[(0,i.Wm)(w.t,(0,i.dG)({icon:"mdi-information"},e,{color:"#e39a39"}),null,16)])),_:2},1040)])),_:1})]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.eval_result_list,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.classname},[(0,i._)("h5",null,"Class : "+(0,g.zw)(e.class_name),1),(0,i.Wm)(b.Y,{"fixed-header":"",height:"200px",density:"compact",style:{color:"#504f5a"}},{default:(0,i.w5)((()=>[je,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.eval_result,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.score},[(0,i._)("td",null,(0,g.zw)(t.score),1),(0,i._)("td",null,(0,g.zw)(t.infers)+" obj",1),(0,i._)("td",null,(0,g.zw)(t.gts)+" obj",1),(0,i._)("td",{onClick:l=>o.FilterImageList(e,t.score,"TP_infer")},[(0,i._)("u",null,(0,g.zw)(t.TP_infer.num)+" obj",1)],8,Pe),(0,i._)("td",{onClick:l=>o.FilterImageList(e,t.score,"TP_gt")},[(0,i._)("u",null,(0,g.zw)(t.TP_gt.num)+" obj",1)],8,Ue),(0,i._)("td",{onClick:l=>o.FilterImageList(e,t.score,"FP")},[(0,i._)("u",null,(0,g.zw)(t.FP.num)+" obj",1)],8,Ge),(0,i._)("td",{onClick:l=>o.FilterImageList(e,t.score,"FN")},[(0,i._)("u",null,(0,g.zw)(t.FN.num)+" obj",1)],8,Le),(0,i._)("td",null,(0,g.zw)(t.precision),1),(0,i._)("td",null,(0,g.zw)(t.recall),1),(0,i._)("td",null,(0,g.zw)(t.f1),1)])))),128))])])),_:2},1024)])))),128))])),_:1})])),_:1})],64)}l(7658),l(6229),l(7330),l(2062);var ze=l(1632),Oe={name:"EvalResult",props:["eval_result_list","gt_id","infer_id"],data(){return{myChart:{},color_chart:["#f06060","#60f0b6","#60ccf0","#f0ee60","#f0a860","#c5f060","#6e60f0","#f2b8dc"],options_chart:{scales:{x:{min:0,max:1,title:{display:!0,text:"Recall",color:"white"},grid:{color:"white",lineWidth:"0.2"},ticks:{color:"white"}},y:{min:0,max:1,title:{display:!0,text:"Precision",color:"white"},grid:{color:"white",lineWidth:"0.2"},ticks:{color:"white"}}},plugins:{legend:{labels:{color:"white"}}},maintainAspectRatio:!1},inspection_filename_list:[],inspection_score:0,inspection_class_name:"",current_page:0,filename:"",image_source:""}},methods:{findEvalResultByScore(e,t){return e.eval_result.find((e=>e.score===t))},FilterImageList(e,t,l){"TP_infer"==l?(this.inspection_filename_list=[...new Set(e.eval_result.find((e=>e.score===t)).TP_infer.filename)],this.inspection_score=t,this.inspection_class_name=e.class_name):"TP_gt"==l?(this.inspection_filename_list=[...new Set(e.eval_result.find((e=>e.score===t)).TP_gt.filename)],this.inspection_score=t,this.inspection_class_name=e.class_name):"FP"==l?(this.inspection_filename_list=[...new Set(e.eval_result.find((e=>e.score===t)).FP.filename)],this.inspection_score=t,this.inspection_class_name=e.class_name):"FN"==l&&(this.inspection_filename_list=[...new Set(e.eval_result.find((e=>e.score===t)).FN.filename)],this.inspection_score=t,this.inspection_class_name=e.class_name),this.InspectionFirst()},drawChart(e){Object.keys(this.myChart).length>0&&this.myChart.destroy();const t=[];e.forEach(((e,l)=>{const n=[];e.eval_result.forEach((e=>{0==e.recall&&0==e.precision||n.push({x:e.recall,y:e.precision})})),t.push({label:e.class_name,data:n,pointBackgroundColor:this.color_chart[l%6],borderColor:this.color_chart[l%6],showLine:!0})}));const l=document.getElementById("pr-chart");this.myChart=new ze.ZP(l,{type:"scatter",data:{datasets:t},options:this.options_chart})},InspectionFirst(){this.current_page=0,this.filename=this.inspection_filename_list[this.current_page],this.getImage()},InspectionPrevious(){this.current_page=Math.max(0,this.current_page-1),this.filename=this.inspection_filename_list[this.current_page],this.getImage()},InspectionNext(){this.current_page=Math.min(this.current_page+1,this.inspection_filename_list.length-1),this.filename=this.inspection_filename_list[this.current_page],this.getImage()},InspectionLast(){this.current_page=this.inspection_filename_list.length-1,this.filename=this.inspection_filename_list[this.current_page],this.getImage()},getImage(){te.Z.get("/getImage",{params:{filename:this.filename,gt_id:this.gt_id,infer_id:this.infer_id,inspection_score:this.inspection_score,inspection_class_name:this.inspection_class_name},responseType:"arraybuffer"}).then((e=>{const t=new Blob([e.data],{type:"image/jpeg"}),l=URL.createObjectURL(t);this.image_source=l,console.log("succeeded /getImage")}))}},mounted(){}};const Se=(0,ne.Z)(Oe,[["render",Re]]);var Ne=Se,Ve={name:"App",components:{EvalSetting:me,EvalResult:Ne},data(){return{gt_id:0,infer_id:0,class_iou_list:[],eval_result_list:[]}},methods:{openGitHub(){window.open("https://github.com/RyunosukeIchiyasu","_blank")},applyEvaluateResult(e){const t=this.class_iou_list.filter((e=>!0===e.checked));te.Z.get("/getEval",{params:{gt_id:this.gt_id,infer_id:this.infer_id,class_iou_list:JSON.stringify(t)}}).then((t=>{this.eval_result_list=t.data.eval_result_list,e&&(this.class_iou_list=this.eval_result_list.map((e=>({class_name:e.class_name,iou_th:.5,checked:!0})))),this.$refs.evalresult_component.drawChart(this.eval_result_list),console.log("succeeded /getEval")}))},initEvaluateResult(e,t){this.gt_id=e,this.infer_id=t,this.class_iou_list=[{class_name:"all",iou_th:0,checked:!0}],this.applyEvaluateResult(!0)}}};const Ze=(0,ne.Z)(Ve,[["render",h]]);var Be=Ze,Ye=(l(9773),l(8727)),Ae=(0,Ye.Rd)(),He=l(3017);async function Ke(){const e=await l.e(461).then(l.t.bind(l,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ke();const Me=(0,n.ri)(Be);Me.use(Ae),Me.use(He.ZP),Me.mount("#app")}},t={};function l(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,n,i,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],a=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&a||o>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[r])}))?n.splice(r--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,i,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var a=Object.create(null);l.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},l.d(a,o),a}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,n){return l.f[n](e,t),t}),[]))}}(),function(){l.u=function(e){return"static/js/webfontloader.1b1a049f.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="object_detection_evaluation_app_spa:";l.l=function(n,i,a,o){if(e[n])e[n].push(i);else{var s,r;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[i];var _=function(t,l){s.onerror=s.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(l)})),t)return t(l)},m=setTimeout(_.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=_.bind(null,s.onerror),s.onload=_.bind(null,s.onload),r&&document.head.appendChild(s)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/"}(),function(){var e={143:0};l.f.j=function(t,n){var i=l.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(l,n){i=e[t]=[l,n]}));n.push(i[2]=a);var o=l.p+l.u(t),s=new Error,r=function(n){if(l.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};l.l(o,r,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)l.o(s,i)&&(l.m[i]=s[i]);if(r)var u=r(l)}for(t&&t(n);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},n=self["webpackChunkobject_detection_evaluation_app_spa"]=self["webpackChunkobject_detection_evaluation_app_spa"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(472)}));n=l.O(n)})();
//# sourceMappingURL=app.2ab1b023.js.map