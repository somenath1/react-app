(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){},200:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(32),o=a.n(l),c=(a(92),a(10)),i=a(11),s=a(14),m=a(12),d=a(13),h=(a(94),a(212)),u=a(219),b=(a(96),a(220)),y=a(222),g=a(221),p=(a(98),a(15)),E=a(207),f=a(208),v=a(209),k=a(210),w=a(211),O=(a(100),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={rSelected:!1},a.onRemmemberMeClick=a.onRemmemberMeClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onRemmemberMeClick",value:function(e){this.setState({rSelected:!e})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"login float-right"},r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{for:"emailId"},"Email"),r.a.createElement(k.a,{type:"email",name:"email",id:"emailId",placeholder:"Email"})),r.a.createElement(f.a,null,r.a.createElement(v.a,{for:"password"},"Password"),r.a.createElement(k.a,{type:"password",name:"password",id:"password",placeholder:"Password"})),r.a.createElement(f.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(k.a,{type:"checkbox",onClick:function(){return e.onRemmemberMeClick()},active:this.state.rSelected?"true":"false"})," ","Remmember Me")),r.a.createElement(w.a,{color:"primary",size:"lg",block:!0,className:"form-submit-button"},"Submit")))}}]),t}(n.Component)),j=a(213),C=a(214),S=a(215),T=a(216),N=a(217),I=a(218),B=a(3),R=a.n(B),A=(a(104),a(29)),K=(a(196),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={editorState:A.EditorState.createEmpty()},a.focus=function(){return a.refs.editor.focus()},a.onChange=function(e){return a.setState({editorState:e})},a.handleKeyCommand=a._handleKeyCommand.bind(Object(p.a)(Object(p.a)(a))),a.mapKeyToEditorCommand=a._mapKeyToEditorCommand.bind(Object(p.a)(Object(p.a)(a))),a.toggleBlockType=a._toggleBlockType.bind(Object(p.a)(Object(p.a)(a))),a.toggleInlineStyle=a._toggleInlineStyle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_handleKeyCommand",value:function(e,t){var a=A.RichUtils.handleKeyCommand(t,e);return!!a&&(this.onChange(a),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return Object(A.getDefaultKeyBinding)(e);var t=A.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(A.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(A.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",a=e.getCurrentContent();return a.hasText()||"unstyled"!==a.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),r.a.createElement(E.a,null,r.a.createElement("h2",null,"Add Your Stories:"),r.a.createElement(f.a,null,r.a.createElement(v.a,{for:"headingId"},"Header"),r.a.createElement(k.a,{type:"text",name:"heading",id:"headingId",placeholder:"Heading..."})),r.a.createElement(f.a,null,r.a.createElement(v.a,{for:"pictureId"},"Picture"),r.a.createElement(k.a,{type:"file",name:"picture",id:"pictureId",placeholder:"Upload..."})),r.a.createElement(f.a,null,r.a.createElement(v.a,{for:"story"},"Story"),r.a.createElement("div",{className:"RichEditor-root"},r.a.createElement(D,{editorState:e,onToggle:this.toggleBlockType}),r.a.createElement(_,{editorState:e,onToggle:this.toggleInlineStyle}),r.a.createElement("div",{className:t,onClick:this.focus},r.a.createElement(A.Editor,{blockStyleFn:H,customStyleMap:M,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Tell a story...",ref:"editor",spellCheck:!0})))),r.a.createElement(h.a,{className:"mb-5"},r.a.createElement(j.a,{className:"text-center"},r.a.createElement(w.a,{color:"secondary"},"Preview"),r.a.createElement(w.a,{color:"primary"},"Add"))))}}]),t}(n.Component)),M={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function H(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),r.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),t}(r.a.Component),U=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],D=function(e){var t=e.editorState,a=t.getSelection(),n=t.getCurrentContent().getBlockForKey(a.getStartKey()).getType();return r.a.createElement("div",{className:"RichEditor-controls"},U.map(function(t){return r.a.createElement(x,{key:t.label,active:t.style===n,label:t.label,onToggle:e.onToggle,style:t.style})}))},L=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],_=function(e){var t=e.editorState.getCurrentInlineStyle();return r.a.createElement("div",{className:"RichEditor-controls"},L.map(function(a){return r.a.createElement(x,{key:a.label,active:t.has(a.style),label:a.label,onToggle:e.onToggle,style:a.style})}))},q=(a(198),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Stories:"),r.a.createElement(j.a,{className:"story-block"},r.a.createElement("article",{className:"user-story-container"},r.a.createElement("aside",{className:"user-image"},r.a.createElement("img",{alt:"User",src:"default.png"})),r.a.createElement("section",{class:"story-description"},r.a.createElement("h4",null,"The Needle Tree"),r.a.createElement("div",{class:"story-lines"},r.a.createElement("div",{className:"story-image-container"},r.a.createElement("img",{alt:"Default",src:"default.png"})),"Brothers who lived on the edge of a forest. The elder brother was very mean to his younger brother and ate up all the food and took all his good clothes. One day, the elder brother went into the forest to find some firewood to sell in the market. As he went around chopping the branches of a tree after tree, he came upon a magical tree. The tree said to him, \u2018Oh kind sir, please do not cut my branches. If you spare me, I will give you my golden apples\u2019. The elder brother agreed but was disappointed with the number apples the tree gave him. Greed overcame him, and he threatened to cut the entire trunk if the tree didn\u2019t give him more apples. The magical tree instead showered upon the elder brother hundreds upon hundreds of tiny needles. The elder brother lay on the ground crying in pain as the sun began to lower down the horizon. The younger brother grew worried and went in search of his elder brother. He found him with hundreds of needles on his skin. He rushed to his brother and removed each needle with painstaking love. After he finished, the elder brother apologised for treating him badly and promised to be better. The tree saw the change in the elder brother\u2019s heart and gave them all the golden apples they could ever need."),r.a.createElement(w.a,{color:"primary",className:"read-more-button"},"Read More")))),r.a.createElement(j.a,{className:"story-block"},r.a.createElement("article",{className:"user-story-container"},r.a.createElement("aside",{className:"user-image"},r.a.createElement("img",{alt:"User",src:"default.png"})),r.a.createElement("section",{class:"story-description"},r.a.createElement("h4",null,"Counting Wisely"),r.a.createElement("div",{class:"story-lines"},r.a.createElement("div",{className:"story-image-container"},r.a.createElement("img",{alt:"Default",src:"default.png"})),"Akbar once put a question to his court that left everyone puzzled. As they all tried to figure out the answer, Birbal walked and asked what the matter was. And so they told him the question. \u2018How many crows are there in the city?\u2019 Birbal immediately smiled, went up to Akbar and announced that the answer to his questions was twenty-one thousand five hundred and twenty-three. When asked how he knew the answer, Birbal replied, \u2018Ask your men to count the number of crows. If there are more, then the crows\u2019 relatives from outside the city are visiting them. If there are fewer, then the crows are visiting their relatives outside the city.\u2019 Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain."),r.a.createElement(w.a,{color:"primary",className:"read-more-button"},"Read More")))))}}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a.state={activeTab:"viewStory"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"dashboard"},r.a.createElement(j.a,{xs:"12",className:"p-0 float-left"},r.a.createElement(C.a,{tabs:!0,className:"side-nav"},r.a.createElement(S.a,{className:R()({active:"viewStory"===this.state.activeTab}),onClick:function(){e.toggle("viewStory")}},r.a.createElement(T.a,null,"View Stories")),r.a.createElement(S.a,{className:R()({active:"addStory"===this.state.activeTab}),onClick:function(){e.toggle("addStory")}},r.a.createElement(T.a,null,"Add New Story")))),r.a.createElement(j.a,{xs:"12",className:"float-left"},r.a.createElement(N.a,{activeTab:this.state.activeTab},r.a.createElement(I.a,{tabId:"viewStory"},r.a.createElement(q,null)),r.a.createElement(I.a,{tabId:"addStory"},r.a.createElement(K,null)))))}}]),t}(n.Component),z=(a(200),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Loading.....")}}]),t}(n.Component)),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(b.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(z,null)},r.a.createElement(y.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:P}),r.a.createElement(g.a,{path:"/login",component:O}),r.a.createElement(g.a,{component:P})))))}}]),t}(n.Component),W=(a(203),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-logo-section"},r.a.createElement(j.a,{xs:"12",className:"p-0"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{alt:"Logo",src:"Logo.png"}))),r.a.createElement("aside",{className:"registration-links"},r.a.createElement("a",{className:"log-in"},"LOG IN"),r.a.createElement(w.a,{color:"primary"},"Register"))),r.a.createElement("div",{className:"site-name"},r.a.createElement("span",null,"Story"),r.a.createElement("span",null,"Teller"))),r.a.createElement("div",{class:"header-info-container"},r.a.createElement("span",null,"\u201cA good story needs"),r.a.createElement("br",null),r.a.createElement("span",{class:"gap-provider"},"only a good storyteller\u201d")))}}]),t}(n.Component)),G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(h.a,null,r.a.createElement(u.a,{className:"app-body"},r.a.createElement("header",null,r.a.createElement(W,null)),r.a.createElement("section",null,r.a.createElement(F,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(205)},92:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[87,2,1]]]);
//# sourceMappingURL=main.4f25d625.chunk.js.map