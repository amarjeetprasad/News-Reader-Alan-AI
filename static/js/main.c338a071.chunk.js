(this["webpackJsonpalan-ai-news-reader"]=this["webpackJsonpalan-ai-news-reader"]||[]).push([[0],{38:function(e,t,a){e.exports=a(48)},43:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),l=(a(43),a(20)),o=a(71),s=a(70),m=a(66),d=a(72),p=a(64),u=a(65),f=a(67),g=a(68),b=a(69),h=a(62),x=Object(h.a)({media:{height:150},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a",transition:"all 0.5s",transform:"scale(1.08)"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),y=a(29),w=a.n(y);function v(e){var t=e.article,a=t.source,r=t.title,c=t.url,o=t.urlToImage,s=t.publishedAt,h=t.description,y=e.i,v=e.activeArticle,E=x(),j=Object(n.useState)([]),C=Object(l.a)(j,2),N=C[0],A=C[1];return Object(n.useEffect)((function(){window.scroll(0,0),A((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;y===v&&N[v]&&(e=N[v],window.scroll(0,e.current.offsetTop-50))}),[y,v,N]),i.a.createElement(d.a,{ref:N[y],className:w()(E.card,v===y?E.activeCard:null)},i.a.createElement(p.a,{href:c,target:"_blank"},i.a.createElement(u.a,{className:E.media,image:o||"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxJmVppYgb9m5bMNpp5vblMUpzUbTFNBwJKQ&usqp=CAU"}),i.a.createElement("div",{className:E.details},i.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(s).toDateString()),i.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"h2"},a.name)),i.a.createElement(m.a,{className:E.title,gutterBottom:!0,variant:"h5"},r),i.a.createElement(f.a,null,i.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},h))),i.a.createElement(g.a,{className:E.cardActions},i.a.createElement(b.a,{size:"small",color:"primary",href:c,target:"_blank"},"Learn More"),i.a.createElement(m.a,{variant:"h5",color:"textSecondary"},y+1)))}var E=Object(h.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"55vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),j=[{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"},{color:"rgb(50, 174, 147)",title:"News by Countries",info:"India , Argentina , Antarctica , Australia , Belgium , Bulgaria , Canada , United States of America ,  japan , Russia , Singapore....",text:"news of india"}];function C(e){var t=e.articles,a=e.activeArticle,n=E();return t.length?i.a.createElement(o.a,{in:!0},i.a.createElement(s.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(v,{article:e,i:t,activeArticle:a}),";")})))):i.a.createElement(o.a,{in:!0},i.a.createElement(s.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},j.map((function(e){return i.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(m.a,{variant:"h5"},e.title),e.info?i.a.createElement(m.a,{variant:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2],":"),i.a.createElement("br",null),e.info):null,i.a.createElement(m.a,{variant:"h6"},"Try Saying:",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))}var N=a(31),A=a.n(N),O=a(16),S=Object(h.a)((function(e){return{footer:Object(O.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(O.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(O.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(O.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}}));var k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(-1),o=Object(l.a)(c,2),s=o[0],m=o[1],d=S();return Object(n.useEffect)((function(){A()({key:"cf1b9335231eb9146f8d93226453e2aa2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles;"newsHeadlines"===t?(r(a),m(-1)):"highlight"===t&&m((function(e){return e+1}))}})}),[]),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:d.logoContainer},i.a.createElement("img",{src:"https://alan.app/voice/images/previews/preview.jpg",alt:"Alan Logo",className:d.alanLogo})),i.a.createElement(C,{articles:a,activeArticle:s}))};c.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c338a071.chunk.js.map