import{u as i,r as d,y as n,j as e}from"./index-8c8e92dd.js";const j=()=>{const[c,{isLoading:l,isError:h,isSuccess:t,error:a,data:r}]=i();return d.useEffect(()=>{c()},[]),d.useEffect(()=>{t&&n.success("resturant fetch success")},[t]),e.jsx("div",{className:" container mt-5",children:r&&e.jsxs("table",{className:"table table-bordered table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"id"}),e.jsx("th",{children:"name"}),e.jsx("th",{children:"email"}),e.jsx("th",{children:"mobile"}),e.jsx("th",{children:"address"}),e.jsx("th",{children:"city"}),e.jsx("th",{children:"type"}),e.jsx("th",{children:"infoComplete"}),e.jsx("th",{children:"isActive"}),e.jsx("th",{children:"certificate"})]})}),e.jsx("tbody",{children:r.result.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s._id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.mobile}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.city}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.infoComplete.toString()}),e.jsx("td",{children:s.isActive.toString()}),e.jsx("td",{children:e.jsx("img",{height:100,src:s.certificate,alt:""})})]},s._id))})]})})};export{j as default};
