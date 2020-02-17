(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{22:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=(n(27),n(10)),l=n.n(c),u=n(14),d=n(4),s=n(5),h=n(7),f=n(6),p=n(3),m=n(8),b=n(15),v=n(2),g=n(1);function y(){var e=Object(v.a)(["\n  body, html, * {\n    font-family: 'Montserrat Alternates', sans-serif;\n    font-size: 18px;\n    color: #143642;\n  }\n\n  body {\n    background: #0F8B8D;\n  }\n"]);return y=function(){return e},e}var w=Object(g.createGlobalStyle)(y()),j=n(19),x=n.n(j);function E(){var e=Object(v.a)(["\n  font-size: 2.2rem;\n    color: #DAD2D8;\n"]);return E=function(){return e},e}function O(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #143642;\n  padding: 20px;\n  width: 100%;\n"]);return O=function(){return e},e}var k=g.default.header(O()),D=g.default.h1(E()),C=function(){return r.a.createElement(k,null,r.a.createElement(D,null,"Weather Checker!"))},S=n(20);function A(){var e=Object(v.a)(["\n  border: none;\n  border-radius: 8px;\n  padding: 6px 8px;\n  width: 100px;\n  margin: 0 auto;\n  color: #EC9A29;\n  background: #A8201A;\n  font-weight: bold;\n  cursor: pointer;\n"]);return A=function(){return e},e}function W(){var e=Object(v.a)(["\n  text-align: center;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 18px;\n  background: #DAD2D8;\n"]);return W=function(){return e},e}function L(){var e=Object(v.a)(["\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 10px;\n"]);return L=function(){return e},e}function T(){var e=Object(v.a)(["\n  display: grid;\n  gap: 10px;\n"]);return T=function(){return e},e}function B(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 15px 0;\n  width: 80%;\n"]);return B=function(){return e},e}var M=g.default.div(B()),z=g.default.form(T()),_=g.default.h2(L()),q=g.default.input(W()),F=g.default.button(A()),H=function(e){return r.a.createElement(M,null,r.a.createElement(z,null,r.a.createElement(_,null,"Find weather"),r.a.createElement(q,{placeholder:e.placeholder,type:"text",name:"location",id:"location",minLength:"2",required:!0,value:e.data.location,onChange:e.handleChange}),r.a.createElement(F,{className:"search-button",onClick:e.handleSubmit},"SEARCH")))},J=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).sendToParent=function(){n.props.updateLocation(n.state)},n.state={location:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(S.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.sendToParent(),this.setState({location:""})}},{key:"render",value:function(){return r.a.createElement(H,{data:this.state,placeholder:this.props.placeholder,handleSubmit:this.handleSubmit,handleChange:this.handleChange})}}]),t}(a.Component);function P(){var e=Object(v.a)(["\n  color: #A8201A;\n  font-weight: bold;\n"]);return P=function(){return e},e}function R(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n  padding: 5px 0;\n  border-bottom: 1px solid #A8201A;\n"]);return R=function(){return e},e}function G(){var e=Object(v.a)(["\n\n"]);return G=function(){return e},e}function I(){var e=Object(v.a)(["\n  width: 80%;\n  padding: 20px;\n  margin-top: 15px;\n  border-left: 5px ridge #143642;\n  \n  @media only screen and (min-width: 600px) {\n    width: 60%;\n  }  \n  \n  @media only screen and (min-width: 900px) {\n    width: 40%;\n  }\n"]);return I=function(){return e},e}var N=g.default.div(I()),$=g.default.ul(G()),K=g.default.li(R()),Q=g.default.span(P()),U=function(e){return r.a.createElement(N,null,r.a.createElement($,null,r.a.createElement(K,null,"City: ",r.a.createElement(Q,null,e.data.location)),r.a.createElement(K,null,"Current temperature: ",r.a.createElement(Q,null,e.data.temp," \xb0C")),r.a.createElement(K,null,"Today's high: ",r.a.createElement(Q,null,e.data.high," \xb0C")),r.a.createElement(K,null,"Today's low: ",r.a.createElement(Q,null,e.data.low," \xb0C")),r.a.createElement(K,null,"Humidity: ",r.a.createElement(Q,null,e.data.humidity,"%")),r.a.createElement(K,null,"Wind: ",r.a.createElement(Q,null,e.data.wind," m/s"))))};function V(){var e=Object(v.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      min-height: 100vh;\n    "]);return V=function(){return e},e}var X=g.default.div(V()),Y=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).state={temp:"",high:"",low:"",humidity:"",wind:"",location:"",loaded:!1,placeholder:"City"},e.updateLocation=e.updateLocation.bind(Object(p.a)(e)),e.processData=e.processData.bind(Object(p.a)(e)),e.loadDefault=e.loadDefault.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.getWeatherData("Berlin","metric").then((function(t){return e.processData(t)})).then((function(){return e.setState({loaded:!0})}))}),1200)}},{key:"getWeatherData",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"87bcbd5f9f4448845754d436206e7c16",e.next=4,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=").concat(n,"&appid=").concat("87bcbd5f9f4448845754d436206e7c16"),{mode:"cors"});case 4:if(200===(a=e.sent).status){e.next=9;break}throw new Error("not 200 response");case 9:return e.abrupt("return",a.json());case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({placeholder:"City not found! Try again!"});case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"processData",value:function(e){this.setState({temp:Math.round(e.main.temp),low:Math.round(e.main.temp_min),high:Math.round(e.main.temp_max),humidity:e.main.humidity,wind:e.wind.speed,location:e.name})}},{key:"loadDefault",value:function(){var e=this;this.getWeatherData("Berlin","metric").then((function(t){return e.processData(t)})).then((function(){return e.setState({loaded:!0})}))}},{key:"updateLocation",value:function(e){var t=this;this.setState({loaded:!1,location:e.location},(function(){setTimeout((function(){t.getWeatherData(t.state.location,"metric").then((function(e){return t.processData(e)})).then((function(){return t.setState({loaded:!0,placeholder:"City"})})).catch((function(){return t.loadDefault()}))}),1200)}))}},{key:"render",value:function(){return r.a.createElement(X,null,r.a.createElement(b.Reset,null),r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(J,{updateLocation:this.updateLocation,placeholder:this.state.placeholder}),this.state.loaded?r.a.createElement(U,{data:this.state}):r.a.createElement(x.a,{type:"bubbles",color:"#143642"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.a33a4550.chunk.js.map