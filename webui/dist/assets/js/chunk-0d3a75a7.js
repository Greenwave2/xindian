(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d3a75a7"],{"120a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",[e("el-col",{attrs:{span:24}})],1),e("el-row",{attrs:{gutter:20}},[e("el-col",[e("el-card",{staticClass:"box-card dashboard_data"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(" temperture ")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){t.$router.push("Pig00001/TEMP/history")}}},[t._v("詳細資料")])],1),e("div",{staticClass:"text item"},[t._v("\n          100C\n        ")])])],1)],1)],1)},n=[],o=(e("a481"),{name:"dashboard",data:function(){return{sensorData:{}}},created:function(){this.getSensorsData(),this.polling=setInterval(this.getSensorsData,1e3)},beforeDestroy:function(){clearInterval(this.polling),console.log("destroy")},computed:{currentArea:function(){return this.$route.params.id}},methods:{getSensorsData:function(){var t=this;this.$ajax({method:"GET",url:"http://54.65.68.13:8080/Pig/"+this.$route.params.id+"/#"}).then((function(a){var e=JSON.stringify(a.data);console.log(e),t.sensorData=a.data})).catch((function(t){console.log(t)}))},gotoGateway:function(t){this.$router.replace({namd:"dashboard",params:{id:t}})}},watch:{}}),r=o,i=(e("964a"),e("2877")),c=Object(i["a"])(r,s,n,!1,null,"316cdaa0",null);c.options.__file="Dashboard.vue";a["default"]=c.exports},"964a":function(t,a,e){"use strict";var s=e("b06b"),n=e.n(s);n.a},b06b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-0d3a75a7.js.map