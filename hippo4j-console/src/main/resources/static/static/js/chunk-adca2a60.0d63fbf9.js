(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adca2a60"],{"03c9":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"租户（必填）",filterable:""},on:{change:function(t){return e.tenantSelectList()}},model:{value:e.listQuery.tenantId,callback:function(t){e.$set(e.listQuery,"tenantId",t)},expression:"listQuery.tenantId"}},e._l(e.tenantOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"项目（必填）",filterable:""},on:{change:function(t){return e.itemSelectList()}},model:{value:e.listQuery.itemId,callback:function(t){e.$set(e.listQuery,"itemId",t)},expression:"listQuery.itemId"}},e._l(e.itemOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"线程池标识（必填）",filterable:""},model:{value:e.listQuery.threadPoolKey,callback:function(t){e.$set(e.listQuery,"threadPoolKey",t)},expression:"listQuery.threadPoolKey"}},e._l(e.threadPoolKeyOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.refreshData}},[e._v("\n      重置\n    ")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",fit:"",border:"","max-height":"714","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index+1))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"实例标识",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{attrs:{type:"primary",underline:!1}},[e._v(e._s(t.row.identify))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Active"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:e._f("statusFilter")(t.row.active)}},[e._v("\n          "+e._s(t.row.active)+"\n        ")])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"线程池标识"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.threadPoolKey)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"核心线程"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{attrs:{type:"success",underline:!1}},[e._v(e._s(t.row.coreSize))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"最大线程"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{attrs:{type:"danger",underline:!1}},[e._v(e._s(t.row.maximumSize))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v(" 编辑 ")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[i("el-form-item",{attrs:{label:"核心线程",prop:"coreSize"}},[[i("el-input-number",{attrs:{"controls-position":"right",min:1,max:9999},model:{value:e.temp.coreSize,callback:function(t){e.$set(e.temp,"coreSize",t)},expression:"temp.coreSize"}})]],2),e._v(" "),i("el-form-item",{attrs:{label:"最大线程",prop:"maximumSize"}},[[i("el-input-number",{attrs:{"controls-position":"right",min:1,max:9999},model:{value:e.temp.maximumSize,callback:function(t){e.$set(e.temp,"maximumSize",t)},expression:"temp.maximumSize"}})]],2),e._v(" "),i("el-form-item",{attrs:{label:"全部修改",prop:"allUpdate"}},[i("el-switch",{model:{value:e.temp.allUpdate,callback:function(t){e.$set(e.temp,"allUpdate",t)},expression:"temp.allUpdate"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" 取消 ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v(" 确认 ")])],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},a=[],l=i("3737"),r=i("dd71"),o=i("4d85"),s=i("47ec"),u=i("6724"),d={name:"JobProject",directives:{waves:u["a"]},filters:{statusFilter:function(e){var t={DEV:"info",TEST:"success",UAT:"warning",PROD:"danger"};return t[e]}},data:function(){return{isRejectShow:!1,list:null,listLoading:!1,total:0,listQuery:{itemId:"",mark:"RabbitMQSpringCloudStream",tenantId:"",threadPoolKey:""},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,runTimeTemp:{},typeOptions:[{key:"Dubbo",display_name:"Dubbo"},{key:"Kafka",display_name:"Kafka"},{key:"KafkaSpringCloudStream",display_name:"KafkaSpringCloudStream"},{key:"RocketMQ",display_name:"RocketMQ"},{key:"RocketMQSpringCloudStream",display_name:"RocketMQSpringCloudStream"},{key:"RabbitMQ",display_name:"RabbitMQ"},{key:"RabbitMQSpringCloudStream",display_name:"RabbitMQSpringCloudStream"}],tenantOptions:[],instanceDialogFormVisible:!1,threadPoolOptions:[],itemOptions:[],threadPoolKeyOptions:[],itemTempOptions:[],queueTypeOptions:[{key:1,display_name:"ArrayBlockingQueue"},{key:2,display_name:"LinkedBlockingQueue"},{key:3,display_name:"LinkedBlockingDeque"},{key:4,display_name:"SynchronousQueue"},{key:5,display_name:"LinkedTransferQueue"},{key:6,display_name:"PriorityBlockingQueue"},{key:9,display_name:"ResizableLinkedBlockingQueue (动态修改队列大小)"}],rejectedOptions:[{key:1,display_name:"CallerRunsPolicy"},{key:2,display_name:"AbortPolicy"},{key:3,display_name:"DiscardPolicy"},{key:4,display_name:"DiscardOldestPolicy"},{key:5,display_name:"RunsOldestTaskPolicy"},{key:6,display_name:"SyncPutQueuePolicy"},{key:99,display_name:"CustomRejectedPolicy（自定义 SPI 策略）"}],alarmTypes:[{key:1,display_name:"报警"},{key:0,display_name:"不报警"}],allowCoreThreadTimeOutTypes:[{key:1,display_name:"超时"},{key:0,display_name:"不超时"}],size:500,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{coreSize:[{required:!0,message:"this is required",trigger:"blur"}],maximumSize:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,tenantId:"",itemId:"",rejectedType:null,allUpdate:"1",customRejectedType:null},visible:!0}},created:function(){this.initSelect()},methods:{onInput:function(){this.$forceUpdate()},fetchData:function(){var e=this;this.listQuery.mark?this.listQuery.tenantId?this.listQuery.itemId?this.listQuery.threadPoolKey?(this.listLoading=!0,s["a"](this.listQuery).then((function(t){null==t&&(e.listLoading=!1),e.list=t,e.listLoading=!1}))):this.$message.warning("线程池标识不允许为空"):this.$message.warning("项目不允许为空"):this.$message.warning("租户不允许为空"):this.$message.warning("线程池类型不允许为空")},initSelect:function(){var e=this;r["c"]({size:this.size}).then((function(t){for(var i=t.records,n=0;n<i.length;n++)e.tenantOptions.push({key:i[n].tenantId,display_name:i[n].tenantId+" "+i[n].tenantName})}))},resetTemp:function(){this.isRejectShow=!1,this.temp={id:void 0,tenantId:"",itemId:"",rejectedType:null,customRejectedType:null}},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(parseInt(e.temp.maximumSize)<parseInt(e.temp.coreSize))return void e.$message({message:"最大线程必须大于等于核心线程",type:"warning"});var i=[],n={mark:e.listQuery.mark,tenant:e.listQuery.tenantId,item:e.listQuery.itemId,threadPoolKey:e.temp.threadPoolKey,identify:e.temp.identify,clientAddressList:i,corePoolSize:e.temp.coreSize,maximumPoolSize:e.temp.maximumSize};if("0"===e.temp.allUpdate||void 0==e.temp.allUpdate||null==e.temp.allUpdate)i[0]=e.temp.clientAddress;else for(var a=0;a<e.list.length;a++)null!=e.list[a]&&(i[a]=e.list[a].clientAddress);e.updateExecute(n)}}))},updateExecute:function(e){var t=this;s["c"](e).then((function(e){t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),t.fetchData()})).catch((function(e){console.log(e),t.$message.error("修改线程池失败")}))},openDelConfirm:function(e){return this.$confirm("此操作将删除 ".concat(e,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},selectQueueType:function(e){4===e?this.temp.capacity=0:5===e&&(this.temp.capacity=2147483647)},tenantSelectList:function(){var e=this;this.listQuery.itemId=null,this.listQuery.threadPoolKey=null,this.temp.itemId=null,this.itemOptions=[],this.itemTempOptions=[],this.threadPoolKeyOptions=[];var t={tenantId:this.listQuery.tenantId,size:this.size};l["c"](t).then((function(t){for(var i=t.records,n=0;n<i.length;n++)e.itemOptions.push({key:i[n].itemId,display_name:i[n].itemId+" "+i[n].itemName})}))},itemSelectList:function(){var e=this;this.listQuery.tpId=null,this.threadPoolKeyOptions=[];var t={mark:this.listQuery.mark,tenantId:this.listQuery.tenantId,itemId:this.listQuery.itemId};s["b"](t).then((function(t){for(var i=0;i<t.length;i++)e.threadPoolKeyOptions.push({key:t[i],display_name:t[i]})}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},selectRejectedType:function(e){this.isRejectShow=99==e},handleInfo:function(e){this.instanceDialogFormVisible=!0,this.dialogStatus="info","undefined"==typeof e||null==e?e=this.tempRow:this.tempRow={clientAddress:e.clientAddress},this.refresh(e)},refreshData:function(){this.listQuery.mark=null,this.listQuery.tenantId=null,this.listQuery.itemId=null,this.listQuery.threadPoolKey=null,this.itemOptions=[],this.threadPoolKeyOptions=[]},refresh:function(e){var t=this,i="",n=e.clientAddress,a=e.clientBasePath;i=null!=a?n+a:n,o["j"]({clientAddress:i}).then((function(e){t.runTimeTemp=e})).catch((function(e){console.log(e),t.$message.error("查询失败，请尝试刷新页面")}))}}},c=d,p=i("2877"),m=Object(p["a"])(c,n,a,!1,null,null,null);t["default"]=m.exports},3737:function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var n=i("b775");function a(e){return Object(n["a"])({url:"/hippo4j/v1/cs/item/query/page",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/hippo4j/v1/cs/item/update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/hippo4j/v1/cs/item/save",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/hippo4j/v1/cs/item/delete/"+e[0]+"/"+e[1],method:"delete"})}},"47ec":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return r}));var n=i("b775");function a(e){return Object(n["a"])({url:"/hippo4j/v1/cs/adapter/thread-pool/query?mark="+e.mark+"&tenant="+e.tenantId+"&item="+e.itemId+"&threadPoolKey="+e.threadPoolKey,method:"get"})}function l(e){return Object(n["a"])({url:"/hippo4j/v1/cs/adapter/thread-pool/query/key?mark="+e.mark+"&tenant="+e.tenantId+"&item="+e.itemId,method:"get"})}function r(e){return Object(n["a"])({url:"/hippo4j/v1/cs/adapter/thread-pool/update",method:"post",data:e})}},"4d85":function(e,t,i){"use strict";i.d(t,"e",(function(){return a})),i.d(t,"f",(function(){return l})),i.d(t,"d",(function(){return r})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return s})),i.d(t,"j",(function(){return u})),i.d(t,"k",(function(){return d})),i.d(t,"i",(function(){return c})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return m})),i.d(t,"a",(function(){return h}));var n=i("b775");function a(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/query/page",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/list/client/instance/"+e.itemId,method:"get",data:e})}function r(e){return Object(n["a"])({url:"/hippo4j/v1/cs/configs?tpId="+e.tpId+"&itemId="+e.itemId+"&namespace="+e.tenantId+"&instanceId="+e.identify,method:"get"})}function o(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/run/state/"+e.tpId+"?clientAddress="+e.clientAddress,method:"get"})}function s(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/run/thread/state/"+e.tpId+"?clientAddress="+e.clientAddress,method:"get"})}function u(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/web/run/state?clientAddress="+e.clientAddress,method:"get"})}function d(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/web/update/pool",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/delete",method:"delete",data:e})}function h(e){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/alarm/enable/"+e.id+"/"+e.isAlarm,method:"post"})}},6724:function(e,t,i){"use strict";i("8d41");var n="@@wavesContext";function a(e,t){function i(i){var n=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=a.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),a.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-r.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-r.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=i:e[n]={removeHandle:i},i}var l={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},r=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(r)),l.install=r;t["a"]=l},"8d41":function(e,t,i){},dd71:function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var n=i("b775");function a(e){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/query/page",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/save",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/delete/"+e,method:"delete"})}}}]);