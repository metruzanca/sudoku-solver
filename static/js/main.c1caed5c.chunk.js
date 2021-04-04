(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{26:function(e,t,n){"use strict";n.r(t);var r,o,u,c,a,i,l,g,b,d,s,h=n(0),f=n.n(h),j=n(10),O=n.n(j),m=n(2),v=n(3),p=Object(v.a)(r||(r=Object(m.a)(["\n  :root {\n    --bgColor1: #1C1E26;\n    --bgColor2: #3C4347;\n    --textColor: #90A4AE;\n    --highlight: #2b2d39;\n    --borders: #B4435C;\n    \n    background-color: var(--bgColor1);\n    color: var(--textColor);\n  }\n  #root {\n    display: grid;\n    place-items: center;\n  }\n"]))),x=v.c.div(o||(o=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(9, auto);\n  width: min-content;\n\n  padding-top: 1em;\n  padding-left: 1em;\n\n  // Temporary\n  border: 1px solid var(--borders);\n  border-radius: .4em;\n"]))),y=v.c.input(u||(u=Object(m.a)(["\n  height: 2em;\n  width: 2em;\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  text-align: center;\n\n  ","\n  ","\n\n  ","\n\n  // Temporary\n  border: 1px solid var(--borders);\n\n  // Center number\n  display: grid;\n  place-items: center;\n"])),(function(e){return e.horrizontalEdge&&Object(v.b)(c||(c=Object(m.a)(["\n    margin-right: 1em;\n  "])))}),(function(e){return e.verticalEdge&&Object(v.b)(a||(a=Object(m.a)(["\n    margin-bottom: 1em;\n  "])))}),(function(e){return e.highlight&&Object(v.b)(i||(i=Object(m.a)(["\n    background-color: var(--highlight);\n  "])))})),C=n(4),I=n(14),w=n(15),k=n(5),A=n(16),S=n.n(A);function E(){return function(e,t,n){var r=n.value;return n.value=S()(r),n}}var N=(l=E(),g=E(),b=E(),d=E(),s=function(){function e(){Object(I.a)(this,e)}return Object(w.a)(e,null,[{key:"getRow",value:function(e){return Math.floor(e/9)}},{key:"getColumn",value:function(e){return e%9}},{key:"getSquare",value:function(e){return Math.floor(e%9/3)+3*Math.floor(e/27)}},{key:"getNumbersInSquare",value:function(e){var t=27*Math.floor(e/3)+e%3*3;return Array.from({length:9},(function(e,n){return 0===n?t:t+9*Math.floor(n/3)+n%3}))}},{key:"getNumbersInColumn",value:function(e){return Array.from({length:9},(function(t,n){return e+9*n}))}},{key:"getNumbersInRow",value:function(e){return Array.from({length:9},(function(t,n){return 9*e+n}))}},{key:"valid",value:function(e,t,n){}}]),e}(),Object(k.a)(s,"getSquare",[l],Object.getOwnPropertyDescriptor(s,"getSquare"),s),Object(k.a)(s,"getNumbersInSquare",[g],Object.getOwnPropertyDescriptor(s,"getNumbersInSquare"),s),Object(k.a)(s,"getNumbersInColumn",[b],Object.getOwnPropertyDescriptor(s,"getNumbersInColumn"),s),Object(k.a)(s,"getNumbersInRow",[d],Object.getOwnPropertyDescriptor(s,"getNumbersInRow"),s),s),q=n(1),H={board:new Array(81).fill(0),setAtIndex:function(){},highlighted:new Array(81).fill(!1),setHighlighted:function(){}},R=Object(h.createContext)(H),M=R.Provider,P=function(e){var t=e.children,n=function(){var e=Object(h.useState)(new Array(81).fill(0)),t=Object(C.a)(e,2),n=t[0],r=t[1];function o(e,t){console.log(e,t),r((function(n){var r=n.map((function(n,r){return r===e?t:n}));return console.log(r),r}))}return{board:n,setAtIndex:o}}(),r=n.board,o=n.setAtIndex,u=function(){var e=Object(h.useState)(new Array(81).fill(!1)),t=Object(C.a)(e,2),n=t[0],r=t[1];function o(e){var t=function(e){var t=N.getColumn(e),n=N.getRow(e),r=N.getSquare(e),o=new Set;return N.getNumbersInRow(n).forEach((function(e){return o.add(e)})),N.getNumbersInColumn(t).forEach((function(e){return o.add(e)})),N.getNumbersInSquare(r).forEach((function(e){return o.add(e)})),Array.from(o.values())}(e);r(n.map((function(e,n){return!!t.includes(n)})))}return{highlighted:n,setHighlighted:o}}(),c=u.highlighted,a=u.setHighlighted;return Object(q.jsx)(M,{value:{board:r,setAtIndex:o,highlighted:c,setHighlighted:a},children:t})};var D=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(p,{}),Object(q.jsx)("h1",{children:"Sudoku"}),Object(q.jsx)(P,{children:Object(q.jsx)(B,{})})]})},T=function(e){var t=e.value,n=e.index,r=e.highlight,o=e.onHover,u=Object(h.useRef)(null),c=Object(h.useState)((n+1)%3===0),a=Object(C.a)(c,1)[0],i=Object(h.useState)((n+1)%27===0),l=Object(C.a)(i,1)[0],g=Object(h.useContext)(R).setAtIndex;Object(h.useEffect)((function(){var e=u.current;return e&&e.addEventListener("mouseenter",o),function(){e&&e.addEventListener("mouseenter",o)}}),[n,o]);return Object(q.jsx)(y,{ref:u,horrizontalEdge:a,verticalEdge:l,highlight:r,value:t,onInput:function(e){var t=parseInt(e.currentTarget.value);console.log("changing to "+t),g(n,t)}})},z=n(28),B=function(){var e=Object(h.useContext)(R),t=e.board,n=e.highlighted,r=e.setHighlighted;return Object(q.jsx)(x,{children:t.map((function(e,t){return Object(q.jsx)(T,{index:t,value:e,onHover:function(){return r(t)},highlight:n[t]},Object(z.a)())}))})};O.a.render(Object(q.jsx)(f.a.StrictMode,{children:Object(q.jsx)(D,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c1caed5c.chunk.js.map