(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2142c70","chunk-467ddad2"],{"045a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{ref:"container"},[t("a-modal",{staticStyle:{top:"50px",height:"80%"},attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,getContainer:function(){return e.$refs.container},maskStyle:{top:"93px",left:"154px"},wrapClassName:e.wrapClassNameInfo(),mask:e.isDesktop(),maskClosable:!1,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"取消",okText:"保存"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form,id:"organizationModal"}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgAbr",e.validatorRules.orgAbr],expression:"['orgAbr', validatorRules.orgAbr ]"}],attrs:{placeholder:"请输入名称"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"编号"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgNo",e.validatorRules.orgNo],expression:"['orgNo', validatorRules.orgNo ]"}],attrs:{placeholder:"请输入编号"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级机构"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parentId"],expression:"[ 'parentId' ]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeDefaultExpandAll:!0,treeData:e.departTree,placeholder:"请选择上级机构"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort"],expression:"[ 'sort' ]"}]})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["remark"],expression:"[ 'remark' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入备注",rows:2}})],1)],1)],1)],1)],1)},o=[],i=r("0fea"),n=r("4ec3"),l=r("ca00"),s=r("ac0d"),c=r("88bc"),d=r.n(c),u=r("261e"),h={name:"OrganizationModal",mixins:[s["b"]],components:{ATextarea:u["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",visible:!1,disableSubmit:!1,model:{},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{orgAbr:{rules:[{required:!0,message:"请输入名称!"},{validator:this.validateName}]},orgNo:{rules:[{required:!0,message:"请输入编码!"}]}},url:{add:"/organization/add"}}},created:function(){},methods:{loadTreeData:function(){var e=this,t={id:""};Object(n["Ab"])(t).then((function(t){if(t){e.departTree=[];for(var r=0;r<t.length;r++){var a=t[r];e.departTree.push(a)}}}))},add:function(){this.edit()},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.loadTreeData(),this.$nextTick((function(){t.form.setFieldsValue(d()(e,"orgAbr","orgNo","parentId","sort","remark")),Object(l["a"])("organizationModal")}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var o=Object.assign(e.model,a);Object(i["f"])(e.url.add,o,"post").then((function(e){200==e.code?(t.$message.success(e.data.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateName:function(e,t,r){var a={name:t,id:this.model.id?this.model.id:0};Object(n["B"])(a).then((function(e){e&&200===e.code?e.data.status?r("名称已经存在"):r():r(e.data)}))}}},p=h,f=(r("d2ad"),r("2877")),m=Object(f["a"])(p,a,o,!1,null,"0c6dcc6b",null);t["default"]=m.exports},"70cd":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,o="[object Arguments]",i="[object Function]",n="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function h(e,t){var r=-1,a=e?e.length:0,o=Array(a);while(++r<a)o[r]=t(e[r],r,e);return o}function p(e,t){var r=-1,a=t.length,o=e.length;while(++r<a)e[o+r]=t[r];return e}var f=Object.prototype,m=f.hasOwnProperty,g=f.toString,b=d.Symbol,v=f.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,k=Math.max;function C(e,t,r,a,o){var i=-1,n=e.length;r||(r=T),o||(o=[]);while(++i<n){var l=e[i];t>0&&r(l)?t>1?C(l,t-1,r,a,o):p(o,l):a||(o[o.length]=l)}return o}function w(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,o=t.length,i={};while(++a<o){var n=t[a],l=e[n];r(l,n)&&(i[n]=l)}return i}function S(e,t){return t=k(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,o=k(r.length-t,0),i=Array(o);while(++a<o)i[a]=r[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=r[a];return n[t]=i,u(e,this,n)}}function T(e){return N(e)||K(e)||!!(y&&e&&e[y])}function A(e){if("string"==typeof e||E(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function K(e){return F(e)&&m.call(e,"callee")&&(!v.call(e,"callee")||g.call(e)==o)}var N=Array.isArray;function O(e){return null!=e&&D(e.length)&&!j(e)}function F(e){return $(e)&&O(e)}function j(e){var t=_(e)?g.call(e):"";return t==i||t==n}function D(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){return!!e&&"object"==typeof e}function E(e){return"symbol"==typeof e||$(e)&&g.call(e)==l}var I=S((function(e,t){return null==e?{}:w(e,h(C(t,1),A))}));e.exports=I}).call(this,r("c8ba"))},a18a:function(e,t,r){},ad42:function(e,t,r){"use strict";r("70cd")},d2ad:function(e,t,r){"use strict";r("a18a")},f9e3:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{md:12,sm:24}},[t("a-card",{attrs:{bordered:!1}},[t("a-row",{staticStyle:{"margin-left":"14px"}},[e.btnEnableList.indexOf(1)>-1?t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加机构")]):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-button",{attrs:{title:"删除多条数据",type:"default"},on:{click:e.batchDel}},[e._v("批量删除")]):e._e(),t("a-button",{attrs:{type:"default",icon:"reload"},on:{click:e.refresh}},[e._v("刷新")]),t("a-button",{attrs:{type:"dashed"}},[e._v("提示：机构可录入公司部门或门店")])],1),t("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[t("a-alert",{attrs:{type:"info",showIcon:!0}},[t("div",{attrs:{slot:"message"},slot:"message"},[e._v("\n            当前选择："),this.currSelected.title?t("span",[e._v(e._s(e.getCurrSelectedTitle()))]):e._e(),this.currSelected.title?t("a",{staticStyle:{"margin-left":"10px"},on:{click:e.onClearSelected}},[e._v("取消选择")]):e._e()])]),t("a-col",{attrs:{md:10,sm:24}},[[t("a-dropdown",{attrs:{trigger:[this.dropTrigger]},on:{visibleChange:e.dropStatus}},[t("span",{staticStyle:{"user-select":"none"}},[t("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.departTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:!0},on:{select:e.onSelect,check:e.onCheck,rightClick:e.rightHandle,expand:e.onExpand}})],1)])]],2)],1)],1),t("div",{staticClass:"drawer-bootom-button"},[t("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),t("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),t("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),t("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),t("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),t("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),t("a-button",[e._v("\n          树操作 "),t("a-icon",{attrs:{type:"up"}})],1)],1)],1)],1),t("a-col",{attrs:{md:12,sm:24}},[e.selectedKeys.length>0?t("a-card",{attrs:{bordered:!1}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgAbr",e.validatorRules.orgAbr],expression:"['orgAbr', validatorRules.orgAbr ]"}],attrs:{placeholder:"请输入名称"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"编号"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgNo",e.validatorRules.orgNo],expression:"['orgNo', validatorRules.orgNo ]"}],attrs:{placeholder:"请输入编号"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级机构"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parentId"],expression:"[ 'parentId' ]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeDefaultExpandAll:!0,treeData:e.treeData,placeholder:"请选择上级机构"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort"],expression:"[ 'sort' ]"}]})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["remark"],expression:"[ 'remark' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入备注",rows:2}})],1)],1),t("div",{staticClass:"anty-form-btn"},[t("a-button",{attrs:{type:"default",htmlType:"button",icon:"sync"},on:{click:e.emptyCurrForm}},[e._v("重置")]),t("a-button",{attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.submitCurrForm}},[e._v("保存")])],1)],1):t("a-card",[t("a-empty",[t("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个机构! ")])])],1)],1),t("organization-modal",{ref:"organizationModal",on:{ok:e.loadTree}})],1)},o=[],i=r("045a"),n=r("88bc"),l=r.n(n),s=r("4ec3"),c=r("0fea"),d=r("b65a"),u={name:"OrganizationList",mixins:[d["a"]],components:{OrganizationModal:i["default"]},data:function(){return{iExpandedKeys:[],loading:!1,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],rightClickSelectedKey:"",rightClickSelectedOrgCode:"",hiding:!0,model:{},dropTrigger:"",depart:{},disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},allTreeKeys:[],checkStrictly:!0,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},validatorRules:{orgAbr:{rules:[{required:!0,message:"请输入名称!"},{validator:this.validateName}]},orgNo:{rules:[{required:!0,message:"请输入编码!"}]}},url:{delete:"/organization/delete",edit:"/organization/update",deleteBatch:"/organization/deleteBatch"},orgCategoryDisabled:!1}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{loadData:function(){this.refresh()},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTree=[];var r={id:""};Object(s["Ab"])(r).then((function(r){if(r){e.allTreeKeys=[];for(var a=0;a<r.length;a++){var o=r[a];t.departTree.push(o),t.setThisExpandedKeys(o),t.getAllKeys(o)}e.loading=!1}}))},setThisExpandedKeys:function(e){if(e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},refresh:function(){this.loading=!0,this.loadTree()},rightHandle:function(e){this.dropTrigger="contextmenu",this.rightClickSelectedKey=e.node.eventKey,this.rightClickSelectedOrgCode=e.node.dataRef.orgCode},onExpand:function(e){this.iExpandedKeys=e},backFlowList:function(){this.$router.back(-1)},dropStatus:function(e){0==e&&(this.dropTrigger="")},closeDrop:function(){this.dropTrigger=""},addRootNode:function(){this.$refs.nodeModal.add(this.currFlowId,"")},batchDel:function(){if(this.checkedKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.checkedKeys.length;t++)e+=this.checkedKeys[t]+",";var r=this;this.$confirm({title:"确认删除",content:"确定要删除所选中的 "+this.checkedKeys.length+" 条数据?",onOk:function(){Object(c["a"])(r.url.deleteBatch,{ids:e}).then((function(e){200==e.code?(r.$message.success(e.data.message),r.loadTree(),r.onClearSelected()):r.$message.warning(e.data.message)}))}})}},nodeModalOk:function(){this.loadTree()},nodeModalClose:function(){},hide:function(){this.visible=!1},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},onSelect:function(e,t){var r=this;this.hiding=!1;var a=t.node.dataRef,o={};o.id=a.id,this.getTreeByParams(o),Object(s["zb"])(o).then((function(e){e&&200==e.code&&e.data&&(a.orgAbr=e.data.orgAbr,a.orgNo=e.data.orgNo,a.parentId=e.data.parentId,a.sort=e.data.sort,a.remark=e.data.remark,r.currSelected=Object.assign({},a),r.model=r.currSelected,r.selectedKeys=[a.key],r.model.parentId=a.parentId,r.setValuesToForm(a))}))},getTreeByParams:function(e){var t=this;Object(s["Ab"])(e).then((function(e){if(e){t.treeData=[];for(var r=0;r<e.length;r++)t.treeData.push(e[r])}}))},setValuesToForm:function(e){var t=this;this.$nextTick((function(){t.form.setFieldsValue(l()(e,"orgAbr","orgNo","parentId","sort","remark"))}))},getCurrSelectedTitle:function(){return this.currSelected.title?this.currSelected.title:""},onClearSelected:function(){this.hiding=!0,this.checkedKeys=[],this.currSelected={},this.form.resetFields(),this.selectedKeys=[],this.$refs.departAuth.departId=""},handleNodeTypeChange:function(e){this.currSelected.nodeType=e},notifyTriggerTypeChange:function(e){this.currSelected.notifyTriggerType=e},receiptTriggerTypeChange:function(e){this.currSelected.receiptTriggerType=e},submitCurrForm:function(){var e=this;this.form.validateFields((function(t,r){if(!t){if(!e.currSelected.id)return void e.$message.warning("请点击选择要修改机构!");var a=Object.assign(e.currSelected,r);Object(c["f"])(e.url.edit,a,"put").then((function(t){if(200==t.code){e.$message.success("保存成功!"),e.loadTree();var r={};r.id=a.id,e.getTreeByParams(r)}else e.$message.error(t.message)}))}}))},emptyCurrForm:function(){this.form.resetFields()},nodeSettingFormSubmit:function(){this.form.validateFields((function(e,t){}))},openSelect:function(){this.$refs.sysDirectiveModal.show()},validateName:function(e,t,r){var a={name:t,id:this.model.id?this.model.id:0};Object(s["B"])(a).then((function(e){e&&200===e.code?e.data.status?r("名称已经存在"):r():r(e.data)}))},handleAdd:function(){this.$refs.organizationModal.add(),this.$refs.organizationModal.title="新增"},selectDirectiveOk:function(e){this.nodeSettingForm.setFieldsValue({directiveCode:e.directiveCode}),this.currSelected.sysCode=e.sysCode},getFlowGraphData:function(e){if(this.graphDatasource.nodes.push({id:e.id,text:e.flowNodeName}),e.children.length>0)for(var t=0;t<e.children.length;t++){var r=e.children[t];this.graphDatasource.edges.push({source:e.id,target:r.id}),this.getFlowGraphData(r)}},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},h=u,p=(r("ad42"),r("2877")),f=Object(p["a"])(h,a,o,!1,null,"554c8a0e",null);t["default"]=f.exports}}]);