webpackJsonp([4],{87:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return u.default.createElement("div",null,u.default.createElement(d.Switch,null,u.default.createElement(d.Route,{path:"/pageA/main",component:h}),u.default.createElement(d.Route,{path:"/pageA/pageA1",component:i.default}),u.default.createElement(d.Route,{path:"/pageA/pageA2",component:f.default})))}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadablePageA=void 0,t.default=o;var a=n(0),u=r(a),l=n(89),c=(r(l),n(90)),i=r(c),s=n(91),f=r(s),d=n(15),_=n(89),p=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(_),n(25)),A=r(p),b=n(26),m=r(b),h=t.LoadablePageA=(0,A.default)({loader:function(){return new Promise(function(e){e()}).then(n.bind(null,89))},loading:m.default});!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"LoadablePageA","/Users/qiancheng/Documents/react/reactjs-shrewd-react-loadable/src/modules/moduleA/routeA.js"),__REACT_HOT_LOADER__.register(o,"RouteModuleA","/Users/qiancheng/Documents/react/reactjs-shrewd-react-loadable/src/modules/moduleA/routeA.js"))}()},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),i=r(c),s=(n(15),n(25)),f=(r(s),n(26)),d=(r(f),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,"This is Page A.")}}]),t}(i.default.Component)),_=d;t.default=_;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"PageA","/Users/qiancheng/Documents/react/reactjs-shrewd-react-loadable/src/modules/moduleA/PageA.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/qiancheng/Documents/react/reactjs-shrewd-react-loadable/src/modules/moduleA/PageA.js"))}()}});