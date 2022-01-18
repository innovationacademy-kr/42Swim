var vt=Object.defineProperty,kt=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var _e=(e,n,i)=>n in e?vt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,g=(e,n)=>{for(var i in n||(n={}))Pe.call(n,i)&&_e(e,i,n[i]);if(ae)for(var i of ae(n))Ve.call(n,i)&&_e(e,i,n[i]);return e},v=(e,n)=>kt(e,Dt(n));var k=(e,n)=>{var i={};for(var o in e)Pe.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&ae)for(var o of ae(e))n.indexOf(o)<0&&Ve.call(e,o)&&(i[o]=e[o]);return i};import{r as D,j as t,R as Re,a as $,Z as _,q as Ze,C as B,s as r,w as $t,L as te,b as qe,l as Ne,c as a,F as z,d as Lt,u as Ue,e as ge,f as me,U as At,H as fe,M as R,m as Et,g as we,h as zt,i as Ft,k as St,W as Mt,n as It,o as ne,S as Tt,p as Z,t as Ht,B as Wt,v as Pt,x as Vt,y as _t}from"./vendor.f407a81b.js";const Rt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};Rt();const Zt=n=>{var e=k(n,[]);const i=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${i}`)})()},[i]),t(Re,{to:"/"})},qt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(i=>i.data).catch(i=>{if(i.status)throw i}),q=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:i}=_(e,qt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!i&&!n,isError:i}},Nt=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),K=()=>{const e=Ze.parse(location.search).id,{data:n,error:i,mutate:o}=_(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,Nt),s=(d,f,w,b)=>{if(n)if(b){let x=n.questionInfo.like_count;x=w?x-1:x+1,o({questionInfo:v(g({},n.questionInfo),{like_count:x,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${f}&questionUserId=${d}&isLike=${w}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}else{let x=n.questionInfo.like_count;x=w?x+1:x-1,o({questionInfo:v(g({},n.questionInfo),{like_count:x,is_like:w})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:d,questionId:f,isLike:w},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{o()})}},l=(d,f,w,b)=>{if(b){let x=n.questionInfo.like_count;x=w?x-1:x+1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=x,c.is_like=null),c));o({questionInfo:v(g({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${f}&answerUserId=${d}&isLike=${w}`,{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}else{let x=n.questionInfo.like_count;x=w?x+1:x-1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=x,c.is_like=w),c));o({questionInfo:v(g({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:d,answerId:f,isLike:w},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}},u=(d,f,w)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:d,questionId:f,answerId:w},{withCredentials:!0}).catch(b=>{throw alert(b),b}).finally(()=>o())},m=(d,f,w,b)=>{if(n){const x="https://swim.42seoul.io/api/posts/comment",y=g({},n);b?y.questionInfo.answer=y.questionInfo.answer.map(c=>(c.id===b&&(c.comment=c.comment.map(M=>(M.id===f&&(M.text=d),M))),c)):y.questionInfo.answer=y.questionInfo.comment.map(c=>(c.id===f&&(c.text=d),c)),o(y,!1),$.patch(x,{text:d,commentId:f,questionId:w,answerId:b},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>o())}},p=(d,f,w)=>{if(n){const b=`https://swim.42seoul.io/api/posts/comment?commentId=${d}&questionId=${f}${w?`&answerId=${w}`:""}`,x=g({},n);w?x.questionInfo.answer=x.questionInfo.answer.map(y=>(y.id===w&&(y.comment=y.comment.filter(c=>c.id!==d)),y)):x.questionInfo.comment=x.questionInfo.comment.filter(y=>y.id!==d),o(x,!1),$.delete(b,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}},C=(d,f,w,b)=>{if(n){const x=g({},n);x.questionInfo.answer.push({text:f,user:{nickname:w}}),o(x,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:d,text:f},{withCredentials:!0}).then(()=>b("")).catch(y=>{throw alert(y),y}).finally(()=>o())}},h=async(d,f,w)=>{try{const b=g({},n);b.is_solved=!0,b.questionInfo.answer=b.questionInfo.answer.map(y=>(y.id===f&&(y.is_solved=!0),y));const x="https://swim.42seoul.io/api/posts/answer/choice";o(b,!1),await $.post(x,{questionId:d,answerId:f,answerUserId:w},{withCredentials:!0}),o()}catch(b){throw alert(b),b}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!i&&!n,isError:i,QuestionThumbPost:s,AnswerThumbPost:l,CommentPost:u,CommentEdit:m,CommentDelete:p,AnswerPost:C,ChoicePost:h}},I=(e,n=()=>!0)=>{const[i,o]=D.exports.useState(e),[s,l]=D.exports.useState(!0);return{value:i,onChange:p=>{const{target:{value:C}}=p;n(C)?o(C):l(!1)},onBlur:p=>{const C=p.target.innerText;n(C)?o(C):l(!1)},setValue:o,valid:s}},Ut={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},L={color:Ut},jt=B`
  ${({theme:e,fontcolor:n})=>n&&B`
      color: ${e.color.a[n]};
    `}
  ${({underline:e})=>e&&B`
      text-decoration: underline;
    `}
  ${({small:e})=>e&&B`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${L.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({bold:e})=>e&&B`
      font-weight: bold;
    `}
`,Qt=r.span`
  font-size: 18px;
  font-weight: 700;
  display: block;
  cursor: pointer;
  margin-bottom: 5px;
  ${jt}
`,Kt=s=>{var l=s,{to:e,children:n,location:i}=l,o=k(l,["to","children","location"]);return t(te,{to:e||i.pathname+i.search,children:t(Qt,v(g({},o),{children:n}))})};var F=$t(Kt);const Gt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `};
`,N=o=>{var s=o,{children:e,visible:n=!0}=s,i=k(s,["children","visible"]);return t(Gt,v(g({visible:n},i),{children:e}))},Yt=B`
  ${({isChecked:e})=>e==!0&&B`
      border: 3px solid ${L.color.primary};
      box-shadow: none;
    `}
`,Jt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${Yt};
`,xe=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Jt,v(g({},n),{children:e}))};function X(e){const n=new Date,i=new Date(e),o=Math.floor((n.getTime()-i.getTime())/1e3/60);if(o<1)return"\uBC29\uAE08\uC804";if(o<60)return`${o}\uBD84\uC804`;const s=Math.floor(o/60);if(s<24)return`${s}\uC2DC\uAC04\uC804`;const l=Math.floor(o/60/24);return l<365?`${l}\uC77C\uC804`:`${Math.floor(l/365)}\uB144\uC804`}const Xt=r.p`
  padding-bottom: 8rem;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.5;
  font-size: 16px !important;
  color: black;
  span,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input {
    font-size: inherit;
  }

  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 2em !important;
  }
  h3 {
    font-size: 1.4em !important;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  blockquote {
    margin-left: 0;
    padding: 0 1em;
    color: #777;
    border-left: 0.25em solid #ddd;
  }
  a {
    color: #4078c0 !important;
    text-decoration: none;
    a:visited,
    a:link {
      color: #4078c0;
    }
  }
  code {
    padding: 0.2em;
    margin: 0;
    font-size: 90%;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 1.4rem;
  }
  line-height: 1.5;
`,Ot=new qe.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Ne({pre:!0})]}),je=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(z,{children:[t(Xt,v(g({},n),{dangerouslySetInnerHTML:{__html:Ot.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},en=B`
  ${({size:e})=>e&&B`
      font-size: ${e+"px"};
      line-height: ${parseInt(e)*1.5+"px"};
    `}
  ${({theme:e,color:n})=>n&&B`
      color: ${e.color.text[n]};
    `}
    ${({weight:e})=>e&&B`
      font-weight: ${e};
    `}
`,tn=r.p`
  color: black;
  word-break: break-all;
  ${en}
`,A=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(tn,v(g({},n),{children:e}))};var nn="/assets/cat0.7e5dd6fb.jpeg";const Be={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},on=B`
  ${({size:e})=>e&&B`
      width: ${Be[e].size};
      height: ${Be[e].size};
      background-size: ${Be[e].size} auto;
    `}
  ${({color:e})=>e&&B`
      background-color: ${e};
    `}
  background-image: ${({img:e})=>e?`url(${e})`:"url()"};
  /* ${({img:e})=>e?B`
          background-image: url(${e});
          margin: 2 2;
        `:B`
          margin: 3 3;
          color: pink;
          background-image: url(${nn});
        `} */
`,be=r.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 12px 120px;
  background-color: #c4c4c4;
  font-size: 20px;
  font-weight: 700;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
  ${on}
`,ye=r.div`
  display: flex;
  align-items: center;
`,ve=r(be)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&B`
      border: 2px solid ${e.color.primary};
    `}
`,G=({nickname:e,size:n,photo:i,color:o,children:s,onMouseEnter:l,onMouseLeave:u,onClick:m,border:p})=>n==="sm"?a(ye,{size:n,children:[t(ve,{size:"xsm",img:i||"",border:p}),t(A,{size:"14",color:"grey",children:e}),s]}):n==="xsm"?a(ye,{size:n,children:[t(ve,{size:"xsm",img:i||"",border:p}),t(A,{size:"12",color:"grey",children:e}),s]}):a(ye,{onMouseEnter:l,onMouseLeave:u,onClick:m,size:n,children:[t(ve,{size:"sm",img:i||"",border:p}),t(A,{size:"18",weight:"bold",color:o,children:e}),s]}),rn=r.div`
  display: block;
  white-space: normal;
`,sn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,ln=s=>{var l=s,{created_at:e,user:n,text:i}=l,o=k(l,["created_at","user","text"]);const u=X(e);return a(rn,v(g({},o),{children:[a(sn,{children:[t(G,v(g({},n),{size:"sm"})),t(A,{size:"14",color:"grey",children:u})]}),t(je,{children:i})]}))},an=()=>a("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),un=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,cn=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(un,v(g({},n),{children:t(an,{children:e})}))},dn=B`
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,hn=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${dn}
`,U=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(hn,v(g({},n),{children:e}))},pn=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,E=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,W=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,Qe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,Cn=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,gn=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,mn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,fn=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,wn=r(U)`
  width: inherit;
  display: none;
  z-index: 1;

  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

  left: -2rem;
  top: 3rem;
  &:focus {
    outline: 0;
  }

  ${({show:e})=>e&&B`
      display: inherit;
    `};
`,xn=r(W)`
  width: 100%;
  height: 100%;
`,Ke=r(F)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&B`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,Bn=r(N)`
  position: relative;
`,Ge=({created_at:e,questionId:n,answerId:i,user:o,text:s,userEmail:l,id:u})=>{const{CommentEdit:m,CommentDelete:p}=K(),C=X(e),[h,d]=D.exports.useState(!1),[f,w]=D.exports.useState(!1),{value:b,setValue:x,onBlur:y}=I(s),c=D.exports.useRef(),M=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&p(u,n,i),d(!1)},V=()=>{w(!0),setTimeout(function(){c.current.focus()},1),d(!h)},Q=async()=>{m(b,u,n,i),w(!1)};return a(Cn,{children:[a(gn,{children:[t(A,{weight:"bold",size:"14",children:o.nickname}),t(A,{size:"14",color:"grey",children:C})]}),a(mn,{children:[t(fn,{contentEditable:f,onBlur:y,ref:c,suppressContentEditableWarning:!0,children:b}),o.email===l?a(z,{children:[a(Bn,{visible:!f,children:[t(cn,{onClick:()=>d(!h)}),t(wn,{show:h,children:a(xn,{children:[t(Ke,{small:!0,onClick:V,children:"\uC218\uC815"}),t(Ke,{small:!0,onClick:M,children:"\uC0AD\uC81C"})]})})]}),a(N,{visible:f,children:[t(F,{fontcolor:"deepgray",onClick:()=>{x(s),w(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(F,{onClick:Q,children:"\uC644\uB8CC"})]})]}):null]})]},u)},bn=B`
  ${({border:e})=>e===!1&&B`
      border: none;
    `}
`,yn=r.input`
  width: 100%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus::placeholder {
    color: transparent;
  }
  color: rgba(0, 0, 0, 0.6);
  ${bn}
`,P=n=>{var e=k(n,[]);return t(yn,g({},e))},vn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kn=r(P)`
  width: 80%;
  padding: 0px;
`,Dn=r(F)`
  white-space: nowrap;
  /*background-color: black;*/
`,Ye=o=>{var s=o,{questionId:e,answerId:n}=s,i=k(s,["questionId","answerId"]);const{user:l,isLoading:u,isError:m}=q(),{CommentPost:p}=K(),{value:C,onChange:h,setValue:d}=I("");if(u)return m?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const f=w=>{w.preventDefault(),C?l?(p(C,e,n),d("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return a(vn,v(g({onSubmit:f},i),{children:[t(kn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:C,border:!1,onChange:h}),t(Dn,{fontcolor:"primary",underline:!1,onClick:f,children:"\uB313\uAE00 \uC785\uB825"})]}))}},$n=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: pre-line;
  word-break: break-all;
  /* margin-top: 3rem; */
  button {
    padding: 4px;
  }

  button {
    color: lightgrey;
    border-radius: 0px !important;
  }
  .mde-tabs button {
    font-size: 16px;
    font-style: Roboto;
    font-weight: 600;
  }
  button.selected {
    border: 0px !important;
    color: black !important;
  }
  .mde-preview-content {
    background-color: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 18px;
    line-height: 1.5;
    min-height: 20rem;
  }
  .mde-header {
    margin-bottom: 18px;
    background-color: inherit;
    border: 0px;
  }
  .react-mde .image-tip {
    display: none !important;
  }
  .mde-text {
    min-height: 20rem;
    background-color: inherit;
    background-color: white;
    padding: 20px !important;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 16px;
    outline: none;
    line-height: 1.5;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .react-mde {
    font-family: inherit;
    width: 100%;
    border: 0px;
    background-color: inherit;
    margin-bottom: 3rem;
  }
  /*
  pre {
    background-color: white !important;
  }*/

  span,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input {
    font-size: inherit;
  }

  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 2em !important;
  }
  h3 {
    font-size: 1.4em !important;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }
  img {
    max-width: 100%;
  }
`,Ln=new qe.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Ne({pre:!0})]}),ue=s=>{var l=s,{value:e,setValue:n,placeHolder:i}=l,o=k(l,["value","setValue","placeHolder"]);const u=document.getElementsByClassName("mde-text")[0],[m,p]=D.exports.useState("write"),C=async function*(h){try{yield await new Promise(f=>{const w=new FormData,b=new File([h],"Image"),x="https://swim.42seoul.io/api/posts/image";w.append("imgFile",b),$.post(x,w,{withCredentials:!0}).then(y=>{var c;y.status===200&&f((c=y==null?void 0:y.data)==null?void 0:c.image)})})}catch(d){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return a($n,v(g({},o),{children:[t(Lt,{classes:{},value:e,onChange:h=>{const d=(event==null?void 0:event.target.scrollHeight)+"px";n(h),u.style.height="auto",u.style.height=d},selectedTab:m,onTabChange:p,generateMarkdownPreview:h=>Promise.resolve(Ln.makeHtml(h)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:i}},paste:{saveImage:C}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},An=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),En=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),zn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),Fn=l=>{var u=l,{is_solved:e,isChosen:n,isChoosable:i,onClick:o}=u,s=k(u,["is_solved","isChosen","isChoosable","onClick"]);const[m,p]=D.exports.useState(!1);return e&&n?t(An,g({},s)):!e&&i?t("button",v(g({onClick:o,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1)},s),{children:m?t(En,{}):t(zn,{})})):t(z,{})},Sn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),Mn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),In=r.button`
  background-color: inherit;
`,Tn=i=>{var o=i,{active:e}=o,n=k(o,["active"]);return t(In,v(g({},n),{children:e?t(Sn,{}):t(Mn,{})}))},Hn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),Wn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),Pn=r.button`
  background-color: inherit;
`,Vn=o=>{var s=o,{active:e,onClick:n}=s,i=k(s,["active","onClick"]);return t(Pn,v(g({onClick:n},i),{children:e?t(Hn,{}):t(Wn,{})}))},_n=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,Rn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,ke=C=>{var h=C,{like_count:e,is_solved:n,is_like:i,isChoosable:o,is_chosen:s,onUpClick:l,onDownClick:u,onChooseClick:m}=h,p=k(h,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return a(_n,v(g({},p),{children:[a(Rn,{children:[t(Vn,{onClick:l,active:i===!0}),t(A,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(Tn,{onClick:u,active:i===!1})]}),t(Fn,{isChosen:s,isChoosable:o,onClick:m,is_solved:n})]}))},Zn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(ke)`
  width: 13rem;
  margin-right: 2rem;
`;const qn=r(xe)`
  padding: 0 0;
  padding: 20px 25px;

  > * > * > * > * > .mde-text,
  > * > * > * > .mde-preview-content {
    box-shadow: none;
    resize: none !important;
  }
  > * > * > * > * > .mde-text {
    background-color: #f4f5f7;
  }
`,Je=r(N)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,Nn=C=>{var h=C,{is_solved:e,like_count:n,is_like:i,is_chosen:o,isChoosable:s,comment:l,id:u,user:m}=h,p=k(h,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:d,ChoicePost:f}=K(),{user:w}=q(),[b,x]=D.exports.useState(!1),[y,c]=D.exports.useState(!1),{value:M,setValue:V}=I(p.text),Q=!!w,mt=Ue(),le=new URLSearchParams(mt.search).get("id"),He=H=>{if(!Q)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");if((m==null?void 0:m.email)===(w==null?void 0:w.email))return alert("\uBCF8\uC778\uC774 \uC4F4 \uAE00\uC740 \uC88B\uC544\uC694 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");y===!1?(c(!0),i===H?d(m.id,u,H,!0):i===!H?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):d(m.id,u,H,!1),setTimeout(()=>{c(!1)},3e3)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 3\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},ft=()=>{He(!0)},wt=()=>{He(!1)},xt=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&le&&f(parseInt(le),u,m.id)},Bt=async()=>{const H="https://swim.42seoul.io/api/posts/answer",We={questionId:le,answerId:u,text:M};await $.patch(H,We,{withCredentials:!0}).then(os=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),x(!1)},bt=async()=>{const H=`https://swim.42seoul.io/api/posts/answer?questionId=${le}&answerId=${u}`;await $.delete(H,{withCredentials:!0}).then(We=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),x(!1)},yt=l==null?void 0:l.map(H=>t(Ge,g({userEmail:w==null?void 0:w.email,answerId:u},H),H.id));return a(Zn,v(g({},p),{children:[t(ke,{is_solved:e,is_chosen:o,like_count:n,is_like:i,isChoosable:s,onUpClick:ft,onDownClick:wt,onChooseClick:xt}),t(N,{width:"100%",visible:!b,children:a(xe,{isChecked:o,children:[t(ln,v(g({},p),{id:u,user:m})),a(Je,{visible:Q?(m==null?void 0:m.email)===(w==null?void 0:w.email):!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>x(!0),children:"\uC218\uC815"}),t(F,{onClick:bt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),yt,t(Ye,{answerId:u})]})}),t(N,{width:"100%",height:"100%",visible:b,children:a(qn,{children:[t(ue,{value:M,setValue:V}),a(Je,{visible:!0,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>x(!1),children:"\uCDE8\uC18C"}),t(F,{onClick:Bt,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},ce={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},Un=B`
  ${({theme:e,color:n})=>n&&B`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${ge(.1,e.color.button[n])};
      }
      &:active {
        background: ${me(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&B`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,i;return e&&B`
      width: ${((n=ce[e])==null?void 0:n.width)?(i=ce[e])==null?void 0:i.width:"auto"};
      height: ${ce[e].height};
      font-size: ${ce[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&B`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,jn=r.button`
  background-color: ${L.color.button.primary};
  color: black;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 2rem;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  padding: 0px 18px;
  &:hover {
    background: ${ge(.1,`${L.color.primary}`)};
    color: ${ge(.1,"white")};
  }
  &:active {
    background: ${me(.1,`${L.color.primary}`)};
  }
  ${Un}
`,T=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(jn,v(g({},n),{children:e}))},Xe={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},Qn={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},Kn=B`
  ${({weight:e})=>e&&B`
      background-color: ${Xe[e].background};
      height: ${Xe[e].height};
    `}
  ${({width:e})=>e&&B`
      width: ${e};
    `}
	${({direction:e})=>e&&B`
      transform: ${Qn[e]};
    `}
`,Gn=r.div`
  ${Kn}
`,de=n=>{var e=k(n,[]);return t(Gn,g({},e))},Yn={h1:{size:"36px"},h2:{size:"24px"},h3:{size:"18px"}},Jn=B`
  ${({size:e})=>e&&B`
      font-size: ${Yn[e].size};
    `}
  ${({color:e})=>e&&B`
      color: ${e};
    `}
`,Xn=r.div`
  color: black;
  font-weight: 700;
  ${Jn}
`,Y=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Xn,v(g({},n),{children:e}))},On=r(Y)`
  margin-bottom: 3rem;
`,ei=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Oe=r.div`
  margin: 8rem 0 5rem 0;
  background-color: ${L.color.lightgrey};
  border-radius: 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${L.color.lightblack};
`,ti=()=>{const{value:e,setValue:n}=I(""),{question:i,isLoading:o,AnswerPost:s}=K(),{user:l,isLoading:u}=q();if(!o&&!u)if(!!l){const p=l.nickname;return a(ei,{children:[t(On,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(de,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(ue,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(T,{onClick:async()=>{e?s(i.id,e,p,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Oe,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},ni=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: auto;
  height: 100%;
  background-color: ${L.color.tag.primary};
  box-sizing: border-box;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0px 10px;
  ${({name:e})=>e==="..."&&B`
      background-color: ${L.color.deepgray};
    `}
`,ii=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,oi=()=>a("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),ie=l=>{var u=l,{name:e,isDel:n,size:i="14",onDelClick:o}=u,s=k(u,["name","isDel","size","onDelClick"]);return a(ni,v(g({},s),{name:e,children:[t(A,{size:i,style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(ii,{onClick:()=>{o(e)},children:t(oi,{})}):""]}))},ri=r.div`
  display: block;
  white-space: normal;
`,et=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,si=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(A)`
  white-space: pre-line;
`;const li=({user:e,created_at:n,title:i,hashtag:o,text:s})=>{const l=X(n),u=o==null?void 0:o.map(m=>t(ie,{name:m.name},m.name));return a(ri,{children:[a(et,{children:[t(Y,{size:"h1",children:i}),t(A,{size:"14",color:"grey",children:l})]}),a(et,{children:[t(G,v(g({},e),{size:"sm"})),t(si,{children:u})]}),t(je,{children:s})]})},ai=r.div`
  display: flex;
  justify-content: space-between;
`,ui=r(N)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,ci=n=>{var e=k(n,[]);var h;const{question:i,isLoading:o,isError:s,QuestionThumbPost:l}=K(),{user:u,isLoading:m}=q(),[p,C]=D.exports.useState(!1);if(!o&&!m){const d=!!u,f=c=>{if(!d)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");if(i.user.email===u.email)return alert("\uBCF8\uC778\uC774 \uC4F4 \uAE00\uC740 \uC88B\uC544\uC694 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");p===!1?(C(!0),c===i.is_like?l(i.user.id,i.id,c,!0):!c===i.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):l(i.user.id,i.id,c,!1),setTimeout(()=>{C(!1)},3e3)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 3\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},w=()=>{f(!0)},b=()=>{f(!1)},x=c=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${i.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):c.preventDefault()},y=(h=i.comment)==null?void 0:h.map(c=>t(Ge,g({userEmail:u==null?void 0:u.email,questionId:i.id},c),c.id));return a(ai,v(g({},e),{children:[t(ke,{like_count:i.like_count,is_like:i.is_like,onUpClick:w,onDownClick:b}),a(xe,{children:[t(li,g({},i)),a(ui,{visible:u?u.email===i.user.email:!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${Ze.parse(location.search).id}`,children:"\uC218\uC815"}),t(F,{fontcolor:"deepgray",small:!0,onClick:x,children:"\uC0AD\uC81C"})]}),y,t(Ye,{questionId:i.id})]})]}))}else return s?t("div",{children:"Err..."}):t("div",{children:"loading..."})};function di(){return a("svg",{width:"150",height:"45",viewBox:"0 0 183 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M108.611 34.9284L113.359 0H117.042L112.295 34.9284H108.611Z",fill:"white"}),t("path",{d:"M158.182 3.50693e-05L162.929 34.9285L166.613 34.9285L161.865 3.47473e-05L158.182 3.50693e-05Z",fill:"white"}),t("path",{d:"M124.269 34.9284L129.016 0H132.7L127.952 34.9284H124.269Z",fill:"white"}),t("path",{d:"M173.839 3.50693e-05L178.587 34.9285L182.27 34.9285L177.523 3.47473e-05L173.839 3.50693e-05Z",fill:"white"}),t("path",{d:"M34.8624 0.000183105H23.2416L0 23.3274V32.8839H23.3737V44.564H34.9284V23.3274H11.6538L34.8624 0.000183105Z",fill:"white"}),t("path",{d:"M144.744 34.9284V0H136.313V34.9284H144.744Z",fill:"white"}),t("path",{d:"M112.224 34.9284L107.546 0H98.9757L103.654 34.9284H112.224Z",fill:"white"}),t("path",{d:"M161.795 3.3174e-05L157.116 34.9285L148.546 34.9285L153.225 3.39233e-05L161.795 3.3174e-05Z",fill:"white"}),t("path",{d:"M127.882 34.9284L123.204 0H114.633L119.312 34.9284H127.882Z",fill:"white"}),t("path",{d:"M177.453 3.3174e-05L172.774 34.9285L164.204 34.9285L168.882 3.39233e-05L177.453 3.3174e-05Z",fill:"white"}),t("path",{d:"M40.9506 12.0443V0H51.7904L40.9506 12.0443Z",fill:"white"}),t("path",{d:"M95.3624 12.0443V0H84.5226L95.3624 12.0443Z",fill:"white"}),t("path",{d:"M63.8347 24.0886L63.8347 34.9285L51.7904 34.9285L63.8347 24.0886Z",fill:"white"}),t("path",{d:"M72.4783 24.0881L72.4783 34.928L84.5226 34.928L72.4783 24.0881Z",fill:"white"}),t("path",{d:"M52.3926 11.5986V0H63.8347V11.5986L52.3926 23.3298V34.9284H40.9506V23.3298L52.3926 11.5986Z",fill:"white"}),t("path",{d:"M83.3181 11.5986V0H71.2739V11.5986L83.3181 23.3298V34.9284H95.3624V23.3298L83.3181 11.5986Z",fill:"white"})]})}var hi="/assets/FooterImg.ac064f67.png";const pi=r(W)`
  width: 100%;
  height: 280px;
  margin-top: 15rem;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0px;
  background-image: url(${hi});
  background-size: contain;
  background-repeat: repeat-x;
`,Ci=r.div`
  margin-top: 5rem;
  margin-bottom: 1rem;
`,gi=r.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,De=r.div`
  margin-left: 3rem;
  margin-bottom: 2rem;
`,mi=r.div`
  width: 100%;
  height: 200px;
  background-color: #86d7ef;
  position: absolute;
  bottom: 0px;
  z-index: -1;
`,j=r.a`
  color: white;
  font-size: 14px;
  display: block;
  margin-top: 5px;
  text-decoration: underline;
  &:visited,
  &:link {
    color: white;
  }
`,fi=()=>a(pi,{children:[t(Ci,{children:t(di,{})}),a(gi,{children:[a(De,{children:[t(A,{size:"18",color:"primary",weight:"bold",children:"MAKER"}),t(j,{target:"_blank",href:"https://github.com/Yenowme",children:"yejeong"}),t(j,{target:"_blank",href:"https://github.com/Chloekkk",children:"nkim"}),t(j,{target:"_blank",href:"https://github.com/hainho",children:"iha"}),t(j,{target:"_blank",href:"https://github.com/earthkingman",children:"ji-park"})]}),a(De,{children:[t(A,{size:"16",color:"primary",weight:"bold",children:"ABOUT"}),t(j,{target:"_blank",href:"https://github.com/innovationacademy-kr/42Swim",children:"GitHub"}),t(j,{target:"_blank",href:"https://github.com/innovationacademy-kr/42Swim/wiki",children:"Wiki"})]}),a(De,{children:[t(A,{size:"16",color:"primary",weight:"bold",children:"CONTACT"}),t(j,{style:{textDecoration:"none"},children:"42sof.staff@gmail.com"}),t(j,{target:"_blank",href:"https://github.com/innovationacademy-kr/42Swim/issues/new?assignees=&labels=&template=bug_report.md&title=",children:"Bug Report"})]})]}),t(A,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."}),t(mi,{})]});function wi(){return a("svg",{width:"183",height:"53",viewBox:"0 0 183 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 25.5209C0 23.2044 2.53709 21.7109 4.61131 22.7423C10.2169 25.5298 19.8645 29.7064 27.4286 29.7538C39.0025 29.8263 43.8554 20.4301 55.4287 20.2926C67.4244 20.1501 72.5752 29.8237 84.5716 29.7538C96.3565 29.685 101.382 21.0287 113.143 20.2926C127.675 19.3831 134.583 29.9945 149.143 29.7538C158.92 29.5921 171.913 24.8425 178.553 22.1358C180.58 21.3093 182.857 22.7915 182.857 24.9808V49.5719C182.857 51.2287 181.514 52.5719 179.857 52.5719H3C1.34315 52.5719 0 51.2287 0 49.5719V25.5209Z",fill:"#3EC2EC",fillOpacity:"0.57"}),t("path",{d:"M32.5492 0.0102209L22.3662 1.80629L5.60537 25.8396L7.08239 34.2138L27.5643 30.6012L29.3695 40.8363L39.4947 39.0505L36.2125 20.4412L15.8174 24.0384L32.5492 0.0102209Z",fill:"black"}),t("path",{d:"M137.502 35.0795V4H130V35.0795H137.502Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M122.387 40.888L114.769 40.5395L112.731 17.285L108.532 40.2541L108.469 40.2513L100.851 39.9028L98.1133 8.66543L105.731 9.01397L107.42 28.2767L110.898 9.25034L112.031 9.30218L112.031 9.30217L119.649 9.6507L121.337 28.9136L124.816 9.88707L128.09 10.0369L122.449 40.8909L122.387 40.888Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M167.096 19.8615L159.91 37.8132L154.594 36.4693L154.594 36.4694L151.417 35.666L153.589 16.4465L146.402 34.3983L139.009 32.5291L150.663 3.41797L154.939 4.49909L158.117 5.30246L155.494 28.5045L164.17 6.83285L171.563 8.70203L171.563 8.70203L171.624 8.71734L168.101 39.8842L164.924 39.0809L167.096 19.8615Z",fill:"black"}),t("path",{d:"M42 13.7171V3H51.6454L42 13.7171Z",fill:"black"}),t("path",{d:"M93.3856 16.665L92.3299 6L82.7314 6.95015L93.3856 16.665Z",fill:"black"}),t("path",{d:"M62.3624 24.4341L62.3624 34.0795L51.6453 34.0795L62.3624 24.4341Z",fill:"black"}),t("path",{d:"M74.1778 29.3354L75.128 38.9338L85.7929 37.8781L74.1778 29.3354Z",fill:"black"}),t("path",{d:"M52.2252 13.3205V3H62.4064V13.3205L52.2252 23.759V34.0795H42.0439V23.759L52.2252 13.3205Z",fill:"black"}),t("path",{d:"M82.6816 17.3261L81.6649 7.05572L71 8.11144L72.0166 18.3818L83.7099 27.7138L84.7265 37.9841L95.3915 36.9284L94.3748 26.658L82.6816 17.3261Z",fill:"black"})]})}var xi="/assets/422.bd7f157a.png";const Bi=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,bi=At`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,yi=r.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 84px;
  border: 5px solid white;
  border-top: 5px solid ${L.color.primary};
  border-radius: 50%;

  background-color: white;
  background-size: 55px 55px;

  animation-name: ${bi};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,vi=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${xi});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,tt=({visible:e})=>t(z,{children:a(Bi,{visible:e,children:[t(yi,{}),t(vi,{})]})}),ki=e=>{const[n,i]=D.exports.useState(!1);return a("svg",v(g({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?L.color.lightblack:L.color.black})]}))},Di=r(Qe)``,$i=r(U)`
  margin-top: 54px;
  width: inherit;
  /* height: 100px; */
  display: none;
  z-index: 1;
  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

  &:focus {
    outline: 0;
  }

  ${({show:e})=>e&&B`
      display: inherit;
    `};
`,Li=r(W)`
  width: 100%;
  height: 100%;
`,nt=r(F)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&B`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,Ai=({user:e})=>{const[n,i]=D.exports.useState(!1),[o,s]=D.exports.useState(!1),l=C=>{s(!0),C.target.style.cursor="pointer",C.stopPropagation()},u=()=>{s(!1)},m=()=>{i(!n)},p=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return a(Di,{children:[t(G,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:l,onMouseLeave:u,onClick:m,color:o?"grey":"black",children:t(ki,{onClick:()=>{}})}),t($i,{show:n,tabIndex:0,onFocus:()=>i(!0),children:a(Li,{children:[t(nt,{to:"/setting",children:"\uC124\uC815"}),t(nt,{onClick:p,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},Ei=B`
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,zi=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${Ei}
`,Fi=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(zi,v(g({},n),{children:e}))},Si=()=>a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),Mi=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,Ii=r(Y)`
  margin-top: 75px;
`,Ti=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,it=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,ot=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,Hi=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`,$e=u=>{var m=u,{children:e,onClose:n,visible:i,title:o,subtitle:s}=m,l=k(m,["children","onClose","visible","title","subtitle"]);return t(Hi,{visible:i,children:a(Fi,v(g({},l),{children:[t(Mi,{onClick:n,children:t(Si,{})}),t(Ii,{size:"h1",children:o}),t(Ti,{children:s}),e]}))})};$e.defaultProps={visible:!0};const Wi=o=>{var s=o,{onClose:e,onRegist:n}=s,i=k(s,["onClose","onRegist"]);const[l,u]=D.exports.useState({email:"",password:""}),{email:m,password:p}=l,[C,h]=D.exports.useState(!1),d=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",l,{withCredentials:!0})).status===200?(fe("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(b){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}u({email:"",password:""})},f=b=>{const{name:x,value:y}=b.target;u(v(g({},l),{[x]:y}))},w=()=>{location.href="https://localhost:5000/auth/42login",e(!1),h(!0)};return a(z,{children:[t(tt,{visible:C}),t($e,v(g({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},i),{children:a(it,{height:"392px",children:[a(ot,{height:"265px",children:[t(P,{name:"email",value:m,onChange:f,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(P,{name:"password",value:p,type:"password",onChange:f,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(T,{onClick:d,size:"lg",children:"\uB85C\uADF8\uC778"}),t(F,{onClick:w,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(F,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},Pi=i=>{var o=i,{onClose:e}=o,n=k(o,["onClose"]);const[s,l]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:u,email:m,password:p,confirm_pass:C}=s,h=w=>{const{name:b,value:x}=w.target;if(l(v(g({},s),{[b]:x})),b==="confirm_pass"&&p!==""){const y=document.getElementById("diffpass");y.style.display="inherit",p===C?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},d=w=>{if(w.target.name==="confirm_pass"&&p!==""){const b=document.getElementById("diffpass");b.style.display="inherit",p===C?(b.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",b.style.color="blue"):(b.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",b.style.color="red")}},f=async()=>{const w=await $.post("https://swim.42seoul.io/api/auth/signup",s,{withCredentials:!0});l({nickname:"",email:"",password:"",confirm_pass:""}),w.data.result===!0&&e(!1),location.reload()};return t($e,v(g({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:a(it,{height:"420px",children:[a(ot,{height:"300px",children:[t(P,{name:"nickname",value:u,onChange:h,placeholder:"\uB2C9\uB124\uC784"}),t(P,{name:"email",value:m,onChange:h,placeholder:"\uC774\uBA54\uC77C"}),t(P,{name:"password",value:p,type:"password",onChange:h,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(P,{name:"confirm_pass",value:C,type:"password",onChange:h,onKeyUp:d,onBlur:d,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(A,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(T,{onClick:f,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},Vi=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${L.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,_i=r.div`
  /*display: flex;
  justify-content: flex-end;
  align-items: flex-end;*/
`,Ri=r.div``,Zi=r.button`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${L.color.lightblack};
  color: ${L.color.lightblack};
  margin-left: 10px;
  padding: 5px 1rem;
  &:hover {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    color: #ffb84c;
    border-color: #ffb84c;
  }
`,qi=r(Y)`
  margin-right: 7px;
`,Ni=()=>{const[e,n]=D.exports.useState(!1),[i,o]=D.exports.useState(!1),{user:s,isLoading:l,isError:u}=q(),[m,p]=D.exports.useState(!1);return D.exports.useEffect(()=>{fe("https://swim.42seoul.io/api/users/info")},[]),a(z,{children:[t(tt,{visible:m}),t(Wi,{onRegist:o,visible:e,onClose:n}),t(Pi,{visible:i,onClose:o}),a(Vi,{children:[t(_i,{children:t(te,{to:"/",children:t(qi,{size:"h1",children:t(wi,{})})})}),s&&!l?t(Ai,{user:s}):t(Ri,{children:t(Zi,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",p(!0),setTimeout(()=>{p(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},Ui=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 15%;

    @media (min-width: 768) and (max-width: 1023px) {
      padding: 0 3rem;
    }
    @media (max-width: 767px) {
      padding: 0 1.5rem;
    }
  }
`,ji=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,J=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(Ui,{children:[t(Ni,{}),t(ji,v(g({},n),{children:e})),t(fi,{})]})},Qi=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const Ki=s=>{var l=s,{question:e,answer:n,answerWriting:i}=l,o=k(l,["question","answer","answerWriting"]);return a("div",v(g({},o),{children:[t(Qi,{children:e}),n,i]}))},Gi=n=>{var e=k(n,[]);const{question:i,answer:o,isLoading:s,isError:l}=K(),{user:u,isLoading:m}=q();let p;return!s&&!m&&(p=o==null?void 0:o.map(C=>t(Nn,g({isChoosable:u?i.user.email===u.email:!1,is_solved:i.is_solved},C),C.id))),l?t(z,{children:"err"}):t(J,v(g({},e),{children:t(Ki,{question:t(ci,{}),answer:p,answerWriting:t(ti,{})})}))},Yi=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Ji=r.div``,Xi=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,rt=m=>{var p=m,{value:e,inputChange:n,setValue:i,tag:o,setTag:s,placeholder:l}=p,u=k(p,["value","inputChange","setValue","tag","setTag","placeholder"]);const C=document.getElementsByClassName("tagMsgEl")[0],h=document.getElementsByClassName("tagInput")[0],d=new RegExp(/^[a-z0-9+#_]+$/),f=()=>{const c=[...o];e&&!o.includes(e)&&c.push(e),i(""),s(c),h.style.color="black"},w=c=>{c.preventDefault(),n(c),c.target.value&&d.test(c.target.value)&&(C.style.display="none",h.style.color="black")},b=c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),d.test(e)?f():(C.style.display="block",h.style.color="red"))},x=c=>{const M=o.filter(V=>V!==c);s(M)},y=o==null?void 0:o.map(c=>t(ie,{name:c,onDelClick:x,isDel:!0},c));return a(Ji,v(g({},u),{children:[t(Xi,{children:y}),t(Yi,{value:e,className:"tagInput",onChange:w,onBlur:f,onKeyPress:b,placeholder:l}),t(A,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},st=r.input`
  font-size: 36px;
  font-weight: 600;
  color: black;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:hover,
  &:focus {
    outline: none;
  }
`,Oi=r.div`
  width: 100%;
  height: 100%;
`,eo=r(st)`
  width: 100%;
  margin-bottom: 20px;
`,to=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,no=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,io=()=>{const{question:e,isLoading:n,isError:i}=K(),o=h=>/^[\w]*$/g.test(h)&&h.length<20,s=h=>h.length<40,l=I("",o),u=I("",s),m=I(""),[p,C]=D.exports.useState([]);if(D.exports.useEffect(()=>{const h=e==null?void 0:e.hashtag.map(d=>d.name);C(h),u.setValue(e?e.title:""),m.setValue(e?e.text:"")},[]),!n&&!i){const h=async d=>{if(d.preventDefault(),!u.value||!m.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:u.value,hashtag:p,text:m.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return a(Oi,{children:[t(eo,{value:u.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:u.onChange}),t(rt,{inputChange:l.onChange,value:l.value,setValue:l.setValue,tag:p,setTag:C,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(de,{weight:"bold",width:"4rem"}),a(to,{children:[t(ue,{value:m.value,setValue:m.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),a(no,{children:[t(F,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(T,{size:"sm",onClick:h,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return i?t("div",{children:"err.."}):t("div",{children:"loading"})},oo=n=>{var e=k(n,[]);return t(J,v(g({},e),{children:t(io,{})}))},ro=e=>a("svg",v(g({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),so=r.div`
  width: 60%;
  height: 43px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  background: white;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:hover {
    border: 1px solid #c2c2c2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
`,lo=r(P)`
  /* width: 500px; */
  height: 41px;
  border-radius: 20px 0 0 20px;
`,ao=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,Le=s=>{var l=s,{onChange:e,onSearch:n,search:i}=l,o=k(l,["onChange","onSearch","search"]);const[u,m]=D.exports.useState(!1),p={border:`1px solid ${L.color.primary}`},C=h=>{h.key==="Enter"&&n()};return t(z,{children:a(so,v(g({style:u?p:{}},o),{children:[t(lo,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:i,border:!1,onKeyPress:C,onChange:e,onFocus:()=>m(!0),onBlur:()=>m(!1)}),t(ao,{onClick:n,children:t(ro,{})})]}))})},lt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`,at=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,ut=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,uo=r(Oe)`
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`,Ae=r(E)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({size:e})=>e==="sm"&&B`
      width: 100%;
      height: 150px;
      padding: 0.5rem 0.5rem;
    `}
  ${({size:e})=>e==="xsm"&&B`
      width: 100%;
      height: 160px;
      padding: 0.5rem 0.2rem;
    `}
`,Ee=r(W)`
  width: 76%;
  height: 90%;
  align-items: flex-start;

  ${({size:e})=>e==="sm"&&B`
      width: 100%;
    `}
`,ze=r(Y)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&B`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,Fe=r(A)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,ct=r(E)`
  width: 100%;
`,Se=r(A)``,oe=r(E)`
  width: 100%;
`,Me=r(E)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
  ${({size:e})=>e==="sm"&&B`
      justify-content: flex-start;
      padding: 0;

      > p {
        margin-right: 1rem;
      }
    `}
`,O=r(A)``;r(W)`
  width: 10%;
  height: 100%;
`;const Ie=s=>{var l=s,{name:e,count:n,color:i}=l,o=k(l,["name","count","color"]);return a(Qe,v(g({width:"40px",height:"60px"},o),{children:[t(A,{weight:"bold",size:"18",color:i,children:e}),t(A,{weight:"bold",size:"18",color:i,children:n})]}))},co=f=>{var w=f,{id:e,title:n,text:i,is_solved:o,photo:s,nickname:l,answer_cnt:u=1,like_count:m,view_count:p,created_at:C,hashtag:h}=w,d=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),h.length>5&&(h=h.slice(0,3),h.push({name:"..."}));const b=()=>{const x="https://swim.42seoul.io/api/pages/question/viewCount";$.post(x,{questionId:e},{withCredentials:!0})};return a(Ae,v(g({},d),{children:[a(Ee,{size:"lg",children:[t(te,{to:`/detail?id=${e}`,onClick:b,children:t(ze,{size:"h2",children:n})}),t(Fe,{size:"18",weight:"normal",color:"grey",children:i}),a(oe,{children:[a(E,{children:[t(Se,{size:"14",weight:"normal",color:"grey",children:X(C)}),h.map((x,y)=>t(ie,{name:x==null?void 0:x.name,style:{marginTop:"0px"}},y))]}),t(G,{size:"sm",photo:s,nickname:l,id:0})]})]}),a(Me,{children:[t(Ie,{name:"\uB2F5\uBCC0",count:u,color:o?"primary":"black"}),t(Ie,{name:"\uCD94\uCC9C",count:m}),t(Ie,{name:"\uC870\uD68C",count:p})]})]}))},ho=f=>{var w=f,{id:e,title:n,text:i,is_solved:o,photo:s,nickname:l,answer_cnt:u=1,like_count:m,view_count:p,created_at:C,hashtag:h}=w,d=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i==null?void 0:i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),(h==null?void 0:h.length)>2&&(h=h.slice(0,2),h.push({name:"..."}));const b=()=>{const x="https://swim.42seoul.io/api/pages/question/viewCount";$.post(x,{questionId:e},{withCredentials:!0})};return t(Ae,v(g({size:"xsm"},d),{children:a(Ee,{size:"sm",children:[t(te,{to:`/detail?id=${e}`,onClick:b,children:t(ze,{size:"h3",children:n})}),t(Fe,{style:{lineHeight:"18px"},size:"12",weight:"normal",color:"grey",children:i}),t(oe,{children:a(E,{children:[t(Se,{size:"12",weight:"normal",color:"grey",children:X(C)}),h==null?void 0:h.map((x,y)=>t(ie,{name:x==null?void 0:x.name,style:{marginTop:"0px"},size:"12"},y))]})}),t(oe,{children:a(ct,{children:[a(Me,{size:"sm",children:[a(O,{size:"12",weight:"normal",color:o?"primary":"black",children:["\uB2F5\uBCC0 ",u]}),a(O,{size:"12",weight:"normal",color:"black",children:["\uCD94\uCC9C ",m]}),a(O,{size:"12",weight:"normal",color:"black",children:["\uC870\uD68C ",p]})]}),t(G,{size:"xsm",photo:s,nickname:l,id:0})]})})]})}))},po=f=>{var w=f,{id:e,title:n,text:i,is_solved:o,photo:s,nickname:l,answer_cnt:u=1,like_count:m,view_count:p,created_at:C,hashtag:h}=w,d=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i==null?void 0:i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),(h==null?void 0:h.length)>2&&(h=h.slice(0,2),h.push({name:"..."}));const b=()=>{const x="https://swim.42seoul.io/api/pages/question/viewCount";$.post(x,{questionId:e},{withCredentials:!0})};return t(Ae,v(g({size:"sm"},d),{children:a(Ee,{size:"sm",children:[t(te,{to:`/detail?id=${e}`,onClick:b,children:t(ze,{size:"h2",children:n})}),t(Fe,{style:{lineHeight:"18px"},size:"14",weight:"normal",color:"grey",children:i}),t(oe,{children:a(E,{children:[t(Se,{size:"14",weight:"normal",color:"grey",children:X(C)}),h.map((x,y)=>t(ie,{name:x==null?void 0:x.name,style:{marginTop:"0px"}},y))]})}),t(oe,{children:a(ct,{children:[a(Me,{size:"sm",children:[a(O,{size:"14",weight:"normal",color:o?"primary":"black",children:["\uB2F5\uBCC0 ",u]}),a(O,{size:"14",weight:"normal",color:"black",children:["\uCD94\uCC9C ",m]}),a(O,{size:"14",weight:"normal",color:"black",children:["\uC870\uD68C ",p]})]}),t(G,{size:"sm",photo:s,nickname:l,id:0})]})})]})}))},he=n=>{var e=k(n,[]);return a(z,{children:[t(R,{minWidth:1024,children:t(co,g({},e))}),t(R,{minWidth:768,maxWidth:1023,children:t(po,g({},e))}),t(R,{maxWidth:767,children:t(ho,g({},e))})]})},Co=r.ul`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      width: ${e};
    `}
  ${({size:e})=>e==="sm"&&B`
      height: 21px;
      /* width: 224px; */
    `}
	${({size:e})=>e==="xsm"&&B`
      margin: 0 0;
    `}
`,go=r.li`
  color: #c4c4c4;
  font-size: 20px;
  border: none;
  font-weight: 700;
  margin: 0.2rem 0.8rem;
  /* width: 95px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  ${({size:e})=>e==="sm"&&B`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({size:e})=>e==="xsm"&&B`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`,S=s=>{var l=s,{active:e,children:n,onTabClick:i}=l,o=k(l,["active","children","onTabClick"]);return t(go,v(g({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:i},o),{children:n}))},ee=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Co,v(g({},n),{children:e}))};ee.Item=S;const mo=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(g({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?L.color.lightblack:L.color.black})}))},fo=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(g({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?L.color.lightblack:L.color.black})}))},wo=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,xo=s=>{var l=s,{number:e,active:n,onClick:i}=l,o=k(l,["number","active","onClick"]);const[u,m]=D.exports.useState(!1),p=d=>{m(!0),d.target.style.color=L.color.lightblack,d.stopPropagation()},C=d=>{m(!1),d.target.style.color=L.color.black},h={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(be,v(g({onClick:i,size:"sm",color:n?L.color.primary:L.color.white,style:h,onMouseEnter:p,onMouseLeave:C},o),{children:e}))};function Bo(e,n){const i=10*(n.current-1)+1;let o;return e<=10?o=e:i+9>=e?o=e-i+1:o=10,Array(o).fill(i).map((s,l)=>s+l)}function dt(e,n){let i=parseInt(n/e);return n%e==0&&(i=i-1),i+1}const pe=l=>{var u=l,{page:e=1,limit:n=8,onPage:i,questionCount:o=10}=u,s=k(u,["page","limit","onPage","questionCount"]);const m=dt(n,o),p=D.exports.useRef(1),C=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(p.current-=1),i(e-1)},h=()=>{if(e===m){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(p.current+=1),i(e+1)};return a(wo,v(g({},s),{children:[t(fo,{onClick:C}),t(E,{children:Bo(m,p).map(d=>t(xo,{number:d,onClick:()=>i(d),active:e===d},d))}),t(mo,{onClick:h})]}))},bo=async e=>await $.get(e).then(i=>i.data).catch(i=>{throw we(i),Error()}),yo=async e=>await $.get(e).then(i=>i.data.questionList).catch(i=>{throw we(i),Error()}),vo=async()=>await $.get("https://swim.42seoul.io/api/pages/list/question?pageNumber=1").then(n=>n.data).catch(n=>{throw we(n),Error()}),ko=(e,n)=>n&&!n.length?null:`https://swim.42seoul.io/api/pages/list/question?pageNumber=${e+1}`,Do=()=>{const{data:e,size:n,setSize:i,error:o,isValidating:s}=Et(ko,yo);return{question:e,page:n,setPage:i,isLoading:!o&&!e,isError:o,isRefreshing:s&&e&&e.length===n}},$o=()=>{const{data:e,error:n}=_("questionCount",vo,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),i=8;return{questionCount:e==null?void 0:e.questionCount,pageSize:dt(i,e==null?void 0:e.questionCount),isLoading:!n&&!e,isError:n}},Lo=(e,n)=>{const i=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:o,error:s}=_(i,bo);return{question:o,isLoading:!s&&!o,isError:s}},Ce=r.div`
	width: 100%;
	height: 120px; /* change height to see repeat-y behㅊavior */

	background-image:
			linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 );

		background-repeat: no-repeat;

		background-size:
			50px 200px, /* highlight */
			150px 200px,
			350px 200px,
			300px 200px,
			250px 0px;

		background-position:
			0 0, /* highlight */
			0 0,
			0 40px,
			0 80px,
			0 120px;

		animation: shine 1s infinite;
	}

	@keyframes shine {
		to {
			background-position:
				100% 0, /* move highlight to right */
				0 0,
				0 40px,
				0 80px,
				0 120px;
	${({height:e})=>e&&B`
      height: ${e};
    `}
	${({width:e})=>e&&B`
      width: ${e};
    `}
`,Ao=async e=>(await $.get(e)).data;function Eo(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:i,error:o}=_(n,Ao);return{tagList:i&&i.hashtag,isLoading:!o&&!i,isError:o}}const zo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Fo=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${L.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${me(.1,L.color.text.primary)};
  }
`,So=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${L.color.text.grey};

  margin-top: 12px;
`;function Mo(s){var l=s,{name:e,questionCount:n,onClick:i}=l,o=k(l,["name","questionCount","onClick"]);return a(zo,v(g({},o),{children:[t(Fo,{onClick:i,children:e}),a(So,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const Io=r(U)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,To=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Ho=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function ht(n){var e=k(n,[]);const[i,o]=D.exports.useState(1),{tagList:s,isLoading:l}=Eo(i),u=zt();if(l)return t("div",{children:"loading"});{const m=s==null?void 0:s.hashTagList.map(p=>t(Mo,g({onClick:()=>{u.push({pathname:`/tag/${p.name}`,state:{hashtagId:p.id,hashtagName:p.name}})}},p),p.id));return a(Io,v(g({},e),{children:[a(To,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",s==null?void 0:s.hashTagListCount,")\uAC1C"]}),t(Ho,{children:m}),t(W,{height:"115px",children:t(pe,{limit:30,questionCount:s==null?void 0:s.hashTagListCount,page:i,onPage:o})})]}))}}function Wo(e){const[n,i]=D.exports.useState(!1);return D.exports.useEffect(()=>{if(!e.current)return;const o=new IntersectionObserver(([s])=>i(s.isIntersecting));return o.observe(e.current),()=>{o.disconnect()}},[]),n}const Po=n=>{var e=k(n,[]);var y;const i=D.exports.useRef(null),o=Wo(i),[s,l]=D.exports.useState(0),{question:u,page:m,setPage:p,isLoading:C,isError:h,isRefreshing:d}=Do(),f=((y=u==null?void 0:u[0])==null?void 0:y.length)===0,w=u?[].concat(...u):[],{pageSize:b}=$o(),x=f||o&&m>=b;return D.exports.useEffect(()=>{o&&!x&&!d&&p(m+1)},[o,d]),h?t("div",{children:"Error!!"}):a(lt,{children:[a(ee,v(g({},e),{children:[t(S,{active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:s===3,onTabClick:()=>l(3),children:"\uD0DC\uADF8"})]})),s===3?t(ht,{}):a(ut,{children:[C?[...Array(8)].map((c,M)=>t(at,{children:t(Ce,{})},M)):w&&w.map((c,M)=>{var V,Q;return t(he,g({id:c==null?void 0:c.id,title:c==null?void 0:c.title,text:c==null?void 0:c.text,photo:(V=c==null?void 0:c.user)==null?void 0:V.photo,nickname:(Q=c==null?void 0:c.user)==null?void 0:Q.nickname,is_solved:c==null?void 0:c.is_solved,answer_cnt:c==null?void 0:c.answer_count,like_count:c==null?void 0:c.like_count,view_count:c==null?void 0:c.view_count,hashtag:c==null?void 0:c.hashtag,created_at:c==null?void 0:c.created_at},e),M)}),t("div",{ref:i}),x?t(uo,{children:"\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4!"}):t(z,{})]})]})},Vo=n=>{var e=k(n,[]);const[i,o]=D.exports.useState(0),[s,l]=D.exports.useState(1),{question:u,isLoading:m,isError:p}=Lo(i,s);return p?t("div",{children:"Error!!"}):a(lt,{children:[a(ee,v(g({},e),{children:[t(S,{active:i===0,onTabClick:()=>o(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:i===1,onTabClick:()=>o(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:i===2,onTabClick:()=>o(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:i===3,onTabClick:()=>o(3),children:"\uD0DC\uADF8"})]})),i===3?t(ht,{}):a(ut,{children:[m?[...Array(8)].map((C,h)=>t(at,{children:t(Ce,{})},h)):(u==null?void 0:u.questionList)&&(u==null?void 0:u.questionList.map((C,h)=>{var d;return t(he,g({id:C.id,title:C.title,text:C.text,photo:C.user.photo,nickname:(d=C==null?void 0:C.user)==null?void 0:d.nickname,is_solved:C.is_solved,answer_cnt:C.answer_count,like_count:C.like_count,view_count:C.view_count,hashtag:C.hashtag,created_at:C.created_at},e),h)})),t(W,{height:"115px",children:t(pe,{questionCount:u==null?void 0:u.questionCount,page:s,onPage:l})})]})]})},_o=n=>{var e=k(n,[]);return a(z,{children:[t(R,{minWidth:768,children:t(Vo,g({},e))}),t(R,{maxWidth:767,children:t(Po,g({},e))})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Ro=r(E)`
  width: 100%;
  margin-bottom: 3rem;
`,Zo=r(E)`
  align-items: flex-start;
`;r(E)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const qo=({panel:e,content1:n,content2:i})=>a(z,{children:[t(Ro,{children:e}),a(Zo,{children:[n,i]})]}),No=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 1023px) {
    display: none;
    background-color: pink;
  }
`,Uo=r(U)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,jo=r(E)``,Qo=r.span`
  ${({theme:e})=>e&&B`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,Ko=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,Go=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>B`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Yo=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,Jo=r.div`
  /* z-index: 100; */
`,Xo=({onHover:e})=>{const[n,i]=D.exports.useState(!1),o=D.exports.useRef(null),s=u=>{if(u.type=="click")e(!n),i(!n);else if(u.type=="mouseleave"){if(n)return;e(!1)}},l=u=>{u.target.style.cursor="pointer",e(!0)};return a("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${L.color.lightprimary}`:"black",onClick:s,onMouseEnter:l,onMouseLeave:s,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Oo=async e=>(await $.get(e)).data,er=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:i}=_(e,Oo),o=n==null?void 0:n.monthRankerInfo.filter(l=>l.id!=null),s=n==null?void 0:n.totalRankerInfo.filter(l=>l.id!=null);return{ranking:{month:o,total:s},isLoading:!i&&!n,isError:i}},tr=r(U)`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({visible:e})=>e===!1&&B`
      display: none;
    `}
`,nr=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const re=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,ir=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,or=r.a`
  text-decoration: underline;
  color: #3e4d74;

  &:visited,
  &:link {
    color: #3e4d74;
  }
  &:hover {
    color: #c9e8ff;
    -webkit-transition: color 0.5s ease;
    -moz-transition: color 0.5s ease;
    transition: color 0.5s ease;
    cursor: pointer;
  }
`,rr=({visible:e=!1})=>a(tr,{visible:e,children:[a(nr,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(re,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(re,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(re,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(re,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(re,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),a(ir,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(or,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),pt=({rank:e,photo:n,nickname:i})=>a(Yo,{children:[t(A,{size:"18",weight:"bold",color:"deepgray",children:e}),t(G,{border:!0,size:"lg",nickname:i,photo:n})]}),sr=()=>{const{ranking:e,isLoading:n,isError:i}=er(),{month:o,total:s}=e,[l,u]=D.exports.useState(0),[m,p]=D.exports.useState(!1),C=h=>{p(h)};return n?t("div",{children:"loading"}):i?t("div",{children:"error"}):a(No,{children:[t(pn,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),a(Uo,{children:[a(jo,{children:[t(A,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(Qo,{}),t(Xo,{onHover:C}),t(rr,{visible:m})]}),t(Ko,{children:a(ee,{size:"xsm",children:[t(S,{size:"xsm",active:l===0,onTabClick:()=>u(0),children:"\uC6D4\uBCC4\uC21C"}),t(Go,{}),t(S,{size:"xsm",active:l===1,onTabClick:()=>u(1),children:"\uC804\uCCB4\uC21C"})]})}),t(Jo,{children:l===0?o.map((h,d)=>t(pt,{rank:d,nickname:h.nickname,photo:h.photo},h.id)):s.map((h,d)=>t(pt,{rank:d,nickname:h.nickname,photo:h.photo},h.id))})]})]})},se=e=>t("svg",v(g({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),lr=r(T)`
  border-radius: 50%;
  width: 41px;
  padding: 0;
`,ar=({onClick:e})=>a(z,{children:[t(R,{minWidth:1024,children:a(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(se,{style:{marginLeft:"2rem"}})]})}),t(R,{minWidth:768,maxWidth:1023,children:a(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(se,{style:{marginLeft:"2rem"}})]})}),t(R,{maxWidth:767,children:t(lr,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:t(se,{})})})]}),ur=i=>{var o=i,{history:e}=o,n=k(o,["history"]);const{value:s,onChange:l}=I("");return t(z,{children:t(J,{children:t(qo,{panel:a(z,{children:[t(Le,{onChange:l,search:s,onSearch:m=>{Ft(m),e.push(`/search?keyword=${s}`)}}),t(ar,{onClick:()=>e.push("/writing")})]}),content1:t(_o,{}),content2:t(sr,{})})})})},cr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,dr=r(E)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,hr=r.span`
  font-size: 18px;
  font-weight: 700;
`,pr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Cr=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,gr=async e=>(await $.get(e)).data,mr=(e,n,i)=>{const s=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:l,error:u}=_(s,gr);return{question:l,isLoading:!u&&!l,isError:u}},Ct=i=>{var o=i,{keyword:e}=o,n=k(o,["keyword"]);const[s,l]=D.exports.useState(0),[u,m]=D.exports.useState(1),{question:p,isLoading:C,isError:h}=mr(s,u,e);return h?t("div",{children:"Error!!"}):t(cr,{children:a(Cr,{children:[a(dr,{children:[a(hr,{children:["\uAC80\uC0C9\uACB0\uACFC (",p==null?void 0:p.questionCount,"\uAC74)"]}),a(ee,v(g({size:"sm"},n),{children:[t(S,{size:"sm",active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),C?[...Array(8)].map((d,f)=>t(pr,{children:t(Ce,{})},f)):p==null?void 0:p.questionList.map((d,f)=>{var w;return t(he,g({id:d.id,title:d.title,text:d.text,photo:d.user.photo,nickname:(w=d==null?void 0:d.user)==null?void 0:w.nickname,is_solved:d.is_solved,answer_cnt:d.answer_count,like_count:d.like_count,view_count:d.view_count,hashtag:d.hashtag,created_at:d.created_at},n),f)}),t(W,{height:"115px",children:t(pe,{questionCount:p==null?void 0:p.questionCount,page:u,onPage:m})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const fr=r(E)`
  width: 100%;
  margin-bottom: 3rem;
`,wr=r(E)`
  align-items: flex-start;
`;r(E)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const xr=({panel:e,content:n})=>a(z,{children:[t(fr,{children:e}),t(wr,{children:n})]}),Br=({location:e})=>{const i=St.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:o,onChange:s}=I(i),[l,u]=D.exports.useState(i);return t(J,{children:t(xr,{panel:a(z,{children:[t(Le,{onChange:s,search:o,onSearch:()=>{u(o)}}),a(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(se,{style:{marginLeft:"2rem"}})]})]}),content:t(Ct,{keyword:l})})})},br=r.div`
  padding: 0 5rem;
`,yr=r(E)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,vr=r(W)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,kr=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>B`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Dr=r.div`
  width: 59%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;

  > * {
    margin-bottom: 1.5rem;
  }
  * {
    margin-bottom: 1.5rem;
  }

  > * > button {
    float: right;
  }
`,$r=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,Lr=({tlPanel:e,trPanel:n,bPanel:i})=>a(br,{children:[a(yr,{children:[t(vr,{children:e}),t(kr,{}),t(Dr,{children:n})]}),t($r,{children:i})]}),Ar=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>B`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,Er=r(E)`
  padding: 1.5rem 0;
`,zr=r(Y)`
  width: 25%;
`,Fr=r(A)`
  width: 65%;
`,Sr=r(E)`
  width: 10%;
`,Mr=r(A)`
  margin-bottom: 1.5rem;
`,gt=({name:e,value:n,etc:i,desc:o})=>a(Ar,{children:[a(Er,{children:[t(zr,{size:"h2",children:e}),t(Fr,{weight:"normal",size:"20",children:n}),t(Sr,{children:i})]}),t(Mr,{size:"14",color:"lightgrey",children:o})]}),Ir=r(P)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;r(P)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;const Tr=r(N)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,Te=r(T)`
  width: 153px;
`,Hr=n=>{var e=k(n,[]);const{user:i,isLoading:o,isError:s}=q(),{value:l,onChange:u,setValue:m}=I(i==null?void 0:i.nickname),[p,C]=D.exports.useState(!1);if(s)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(Re,{to:"/"});if(o)return t("div",{children:"loading..."});const h=()=>{const b=document.getElementById("uploadImg");b==null||b.click()},d=async()=>{const b=new FormData,x=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";b.append("imgFile",x),await $.patch(y,b,{withCredentials:!0}).then(c=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},f=async()=>{const b="https://swim.42seoul.io/api/users/image";await $.delete(b,{withCredentials:!0}).then(x=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},w=async()=>{const b="https://swim.42seoul.io/api/users/nickname",x={nickname:l};await $.patch(b,x,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),fe("https://swim.42seoul.io/api/users/info"),C(!1)};return t(J,v(g({},e),{children:t(Lr,{tlPanel:a(z,{children:[t(be,{size:"lg",img:(i==null?void 0:i.image)?i.image:null}),t(Te,{size:"sm",color:"primary",shadow:!0,onClick:h,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:d})}),t(Te,{size:"sm",color:"white",shadow:!0,onClick:f,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:a(z,{children:[a(N,{visible:!p,children:[t(Y,{size:"h1",children:i==null?void 0:i.nickname}),t(de,{weight:"bold",width:"4rem"}),t(F,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{m(i==null?void 0:i.nickname),C(!0)},children:"\uC218\uC815"})]}),a(Tr,{visible:p,children:[t(Ir,{value:l||"",onChange:u}),t(T,{size:"sm",color:"lightprimary",shadow:!0,onClick:w,children:"\uC218\uC815\uD558\uAE30"}),t(F,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>C(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:a(z,{children:[t(gt,{name:"\uC774\uBA54\uC77C",value:i.email,desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(gt,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(F,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(Te,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},Wr=r.div`
  width: 100%;
  height: 100%;
`,Pr=r(st)`
  width: 100%;
  margin-bottom: 20px;
`,Vr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,_r=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=d=>/[\w]*$/g.test(d)&&d.length<20,i=d=>d.length<40,o=I("",n),s=I("",i),l=I(e),[u,m]=D.exports.useState([]),{isLoading:p,user:C}=q();D.exports.useEffect(()=>{!p&&!C&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[C]);const h=async d=>{if(d.preventDefault(),!s.value||!l.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const f=await $.post("https://swim.42seoul.io/api/posts/question",{title:s.value,hashtag:u,text:l.value},{withCredentials:!0});f.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${f.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return a(Wr,{children:[t(Pr,{value:s.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:s.onChange}),t(rt,{inputChange:o.onChange,value:o.value,setValue:o.setValue,tag:u,setTag:m,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(de,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),a(Vr,{children:[t(ue,{value:l.value,setValue:l.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(T,{size:"sm",onClick:h,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},Rr=n=>{var e=k(n,[]);return t(J,v(g({},e),{children:t(_r,{})}))},Zr=Mt`
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 !important;
    overflow-y: scroll;
	height: 100%;
	background: #f9f9f9;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  html, body {
	  height: 100%;
  }
  #root {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background-color: inherit;
    border: none;
    padding: 0;
  }
  button:focus{
    outline:none;
  }
  input:focus{
	  outline: none;
  }
  a{
	  outline: none;
	  text-decoration: none;
  }
  a:visited, a:link {
	  color: inherit;
  }
`,qr=({children:e})=>a(It,{theme:L,children:[t(Zr,{}),e]});r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Nr=r(E)`
  width: 100%;
  margin-bottom: 3rem;
`,Ur=r(E)`
  align-items: flex-start;
`;r(E)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const jr=({panel:e,content:n})=>a(z,{children:[t(Nr,{children:e}),t(Ur,{children:n})]}),Qr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Kr=r(E)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Gr=r.span`
  font-size: 18px;
  font-weight: 700;
`,Yr=r.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.color.primary};
`,Jr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Xr=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Or=async e=>(await $.get(e)).data,es=(e,n,i)=>{const s=`https://swim.42seoul.io/api/pages/list/question/hashtag/id?pageNumber=${n}&hashtagId=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:l,error:u}=_(s,Or);return{question:l,isLoading:!u&&!l,isError:u}},ts=o=>{var s=o,{hashtagName:e,hashtagId:n}=s,i=k(s,["hashtagName","hashtagId"]);const[l,u]=D.exports.useState(0),[m,p]=D.exports.useState(1),{question:C,isLoading:h,isError:d}=es(l,m,n);return d?t("div",{children:"Error!!"}):t(Qr,{children:a(Xr,{children:[a(Kr,{children:[a(Gr,{children:[a(Yr,{children:["#",e]})," \uAC80\uC0C9\uACB0\uACFC (",C==null?void 0:C.questionCount,"\uAC74)"]}),a(ee,v(g({size:"sm"},i),{children:[t(S,{size:"sm",active:l===0,onTabClick:()=>u(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:l===1,onTabClick:()=>u(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:l===2,onTabClick:()=>u(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),h?[...Array(8)].map((f,w)=>t(Jr,{children:t(Ce,{})},w)):C==null?void 0:C.questionList.map((f,w)=>{var b;return t(he,g({id:f.id,title:f.title,text:f.text,photo:f.user.photo,nickname:(b=f==null?void 0:f.user)==null?void 0:b.nickname,is_solved:f.is_solved,answer_cnt:f.answer_count,like_count:f.like_count,view_count:f.view_count,hashtag:f.hashtag,created_at:f.created_at},i),w)}),t(W,{height:"115px",children:t(pe,{questionCount:C==null?void 0:C.questionCount,page:m,onPage:p})})]})})},ns=({location:e})=>{const n=e.state,{value:i,onChange:o}=I(""),[s,l]=D.exports.useState("");return t(J,{children:t(jr,{panel:a(z,{children:[t(Le,{onChange:o,search:i,onSearch:()=>{l(i)}}),a(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(se,{style:{marginLeft:"2rem"}})]})]}),content:s===""?t(ts,{hashtagName:n.hashtagName,hashtagId:n.hashtagId}):t(Ct,{keyword:s})})})};ne.event({category:"User",action:"Created an Account"});ne.exception({description:"An error ocurred",fatal:!0});const is=()=>{const e=Ue();return D.exports.useEffect(()=>{ne.initialize("UA-215641389-1"),ne.set({page:e.pathname}),ne.pageview(e.pathname)},[e]),t(qr,{children:a(Tt,{children:[t(Z,{path:"/",exact:!0,render:n=>t(ur,g({},n))}),t(Z,{path:"/search",exact:!0,render:n=>t(Br,g({},n))}),t(Z,{path:"/tag/:hashtagName",exact:!0,render:n=>t(ns,g({},n))}),t(Z,{path:"/detail",exact:!0,render:n=>t(Gi,g({},n))}),t(Z,{path:"/writing",exact:!0,render:n=>t(Rr,g({},n))}),t(Z,{path:"/edit",exact:!0,render:n=>t(oo,g({},n))}),t(Z,{path:"/setting",exact:!0,render:n=>t(Hr,g({},n))}),t(Z,{path:"/auth",render:n=>t(Zt,g({},n))})]})})};Ht({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new Wt],tracesSampleRate:1});Pt.render(t(Vt.StrictMode,{children:t(_t,{children:t(is,{})})}),document.getElementById("root"));
