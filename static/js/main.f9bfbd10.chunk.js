(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var r,o,a,u,i,c,l,d,s=t(0),b=t.n(s),f=t(26),g=t.n(f),v=t(7),h=t(8),j=Object(h.a)(r||(r=Object(v.a)(["\n  :root {\n    --bgColor1: #1C1E26;\n    --bgColor2: #3C4347;\n    --textColor: #90A4AE;\n    --textColor2: #9569BE;\n    --highlight: #2b2d39;\n    --borders: #B4435C;\n    \n    background-color: var(--bgColor1);\n    color: var(--textColor);\n  }\n  #root {\n    display: grid;\n    place-items: center;\n    font-family: sans-serif;\n  }\n"]))),O=h.c.div(o||(o=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(9, auto);\n  width: min-content;\n\n  padding-top: 1em;\n  padding-left: 1em;\n\n  // Temporary\n  border: 1px solid var(--borders);\n  border-radius: .4em;\n"]))),m=h.c.input(a||(a=Object(v.a)(["\n  height: 2em;\n  width: 2em;\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  text-align: center;\n\n  ","\n  ","\n\n  ","\n\n  ","\n\n  // Temporary\n  border: 1px solid var(--borders);\n\n  // Center number\n  display: grid;\n  place-items: center;\n"])),(function(e){return e.horrizontalEdge&&Object(h.b)(u||(u=Object(v.a)(["\n    margin-right: 1em;\n  "])))}),(function(e){return e.verticalEdge&&Object(h.b)(i||(i=Object(v.a)(["\n    margin-bottom: 1em;\n  "])))}),(function(e){return e.highlight&&Object(h.b)(c||(c=Object(v.a)(["\n    background-color: var(--highlight);\n  "])))}),(function(e){return!e.editable&&Object(h.b)(l||(l=Object(v.a)(["\n    color: var(--textColor2);\n  "])))})),p=t(11),I=t(1),y=t(19),x=t(16),w=t(30),C=t(15),S=t(31),k=t(34),E=t(35);!function(e){e[e.Invalid_Row=0]="Invalid_Row",e[e.Invalid_Column=1]="Invalid_Column",e[e.Invalid_Square=2]="Invalid_Square"}(d||(d={}));var N,_,q,A,R,D,M,H=function(e){Object(S.a)(t,e);var n=Object(k.a)(t);function t(e){var r;switch(Object(x.a)(this,t),(r=n.call(this,"Sudoku Error")).collisionIndex=void 0,r.type=void 0,r.type=e.type,e.type){case d.Invalid_Column:case d.Invalid_Row:case d.Invalid_Square:r.collisionIndex=e.errorData.collisionIndex}return r}return t}(Object(E.a)(Error)),U=t(32),P=t.n(U);function B(){return function(e,n,t){var r=t.value;return t.value=P()(r),t}}var K=(N=B(),_=B(),q=B(),A=B(),M=D=function(){function e(){Object(x.a)(this,e)}return Object(w.a)(e,null,[{key:"getRow",value:function(e){return Math.floor(e/9)}},{key:"getColumn",value:function(e){return e%9}},{key:"getSquare",value:function(e){return Math.floor(e%9/3)+3*Math.floor(e/27)}},{key:"getNumbersInSquare",value:function(e){var n=27*Math.floor(e/3)+e%3*3;return Array.from({length:9},(function(e,t){return 0===t?n:n+9*Math.floor(t/3)+t%3}))}},{key:"getNumbersInColumn",value:function(e){return Array.from({length:9},(function(n,t){return e+9*t}))}},{key:"getNumbersInRow",value:function(e){return Array.from({length:9},(function(n,t){return 9*e+t}))}},{key:"validNumber",value:function(n){return n>0&&n<=Math.pow(e.SUDOKU_N,2)}},{key:"hasErrors",value:function(n,t,r){var o,a=[],u=e.getRow(n),i=e.getNumbersInRow(u),c=Object(y.a)(i);try{for(c.s();!(o=c.n()).done;){var l=o.value;if(l!==n&&r[l].value===t){a.push(new H({type:d.Invalid_Row,errorData:{collisionIndex:l}}));break}}}catch(I){c.e(I)}finally{c.f()}var s,b=e.getColumn(n),f=e.getNumbersInColumn(b),g=Object(y.a)(f);try{for(g.s();!(s=g.n()).done;){var v=s.value;if(v!==n&&r[v].value===t){a.push(new H({type:d.Invalid_Column,errorData:{collisionIndex:v}}));break}}}catch(I){g.e(I)}finally{g.f()}var h,j=e.getSquare(n),O=e.getNumbersInSquare(j),m=Object(y.a)(O);try{for(m.s();!(h=m.n()).done;){var p=h.value;if(p!==n&&r[p].value===t){a.push(new H({type:d.Invalid_Square,errorData:{collisionIndex:p}}));break}}}catch(I){m.e(I)}finally{m.f()}return a}}]),e}(),D.SUDOKU_N=3,R=M,Object(C.a)(R,"getSquare",[N],Object.getOwnPropertyDescriptor(R,"getSquare"),R),Object(C.a)(R,"getNumbersInSquare",[_],Object.getOwnPropertyDescriptor(R,"getNumbersInSquare"),R),Object(C.a)(R,"getNumbersInColumn",[q],Object.getOwnPropertyDescriptor(R,"getNumbersInColumn"),R),Object(C.a)(R,"getNumbersInRow",[A],Object.getOwnPropertyDescriptor(R,"getNumbersInRow"),R),R),T=t(3),z={board:new Array(81).fill(0),setAtIndex:function(){},highlighted:new Array(81).fill(!1),setHighlighted:function(){}},J=Object(s.createContext)(z),L=J.Provider,Y=function(e){var n=e.children,t=function(e){var n=Object(s.useState)(function(e){var n=e.split(",");return(n.length<Math.pow(K.SUDOKU_N,4)?F:n).map((function(e){var n=parseInt(e);return{value:n,editable:0===n}}))}(e)),t=Object(p.a)(n,2),r=t[0],o=t[1],a=Object(I.d)();function u(e,n){K.validNumber(n)?K.hasErrors(e,n,r).length||o((function(t){return t.map((function(t,r){return r===e?{editable:!0,value:n}:t}))})):console.log("notvalid")}return Object(s.useEffect)((function(){a.push(r.map((function(e){return e.value})).toString())}),[r,a]),function(e,n){Object(s.useEffect)((function(){e.find((function(e){return 0===e.value}))||n(!0)}),[e,n])}(r,(function(){alert("Yay, you've won!")})),{board:r,setAtIndex:u}}(Object(I.e)().pathname.substr(1)),r=t.board,o=t.setAtIndex,a=function(){var e=Object(s.useState)(new Array(81).fill(!1)),n=Object(p.a)(e,2),t=n[0],r=n[1];function o(e){var n=function(e){var n=K.getColumn(e),t=K.getRow(e),r=K.getSquare(e),o=new Set;return K.getNumbersInRow(t).forEach((function(e){return o.add(e)})),K.getNumbersInColumn(n).forEach((function(e){return o.add(e)})),K.getNumbersInSquare(r).forEach((function(e){return o.add(e)})),Array.from(o.values())}(e);r(t.map((function(e,t){return!!n.includes(t)})))}return{highlighted:t,setHighlighted:o}}(),u=a.highlighted,i=a.setHighlighted;return Object(T.jsx)(L,{value:{board:r,setAtIndex:o,highlighted:u,setHighlighted:i},children:n})};var F=["3","0","0","5","0","8","4","0","0","5","2","0","0","0","0","0","0","0","0","8","0","0","0","0","0","3","1","0","0","3","0","1","0","0","8","0","9","0","0","8","6","3","0","0","5","0","5","0","0","9","0","6","0","0","1","3","0","0","0","0","2","5","0","0","0","0","0","0","0","0","7","4","0","0","5","2","0","6","3","0","0"];var G=t(33),Q=function(){return Object(T.jsxs)(G.a,{children:[Object(T.jsx)(j,{}),Object(T.jsx)("h1",{children:"Sudoku"}),Object(T.jsx)(Y,{children:Object(T.jsx)(X,{})})]})},V=function(e){var n=e.cell,t=e.index,r=e.highlight,o=e.onHover,a=Object(s.useRef)(null),u=Object(s.useState)((t+1)%3===0),i=Object(p.a)(u,1)[0],c=Object(s.useState)((t+1)%27===0),l=Object(p.a)(c,1)[0],d=Object(s.useContext)(J).setAtIndex;function b(){var e;null===(e=a.current)||void 0===e||e.select()}Object(s.useEffect)((function(){var e=a.current;null===e||void 0===e||e.addEventListener("mouseenter",o),null===e||void 0===e||e.addEventListener("focus",b)}),[t,o]);return Object(T.jsx)(m,{ref:a,horrizontalEdge:i,verticalEdge:l,editable:n.editable,highlight:r,value:0===n.value?"":n.value,onInput:function(e){if(n.editable){var r=parseInt(e.currentTarget.value);d(t,r)}else console.log("not editable")}})},W=t(53),X=function(){var e=Object(s.useContext)(J),n=e.board,t=e.highlighted,r=e.setHighlighted;return Object(T.jsx)(O,{children:n.map((function(e,n){return Object(T.jsx)(V,{index:n,cell:e,onHover:function(){return r(n)},highlight:t[n]},Object(W.a)())}))})};g.a.render(Object(T.jsx)(b.a.StrictMode,{children:Object(T.jsx)(Q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f9bfbd10.chunk.js.map