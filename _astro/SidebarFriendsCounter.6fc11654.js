import{j as e}from"./jsx-runtime.391947bd.js";import{a as u}from"./http.64a7434f.js";import{r as s}from"./index.ed373d49.js";import"./jwt.1b92699e.js";function c(){const[n,a]=s.useState();async function o(){const{response:r,error:i}=await u("https://api.roadmap.sh/v1-get-friend-counts");i||!r||a(r)}s.useEffect(()=>{o().finally(()=>null)},[]);const t=n?.receivedCount||0;return t?e.jsx("span",{className:"flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white",children:t}):e.jsxs("span",{className:"relative mr-1 flex items-center",children:[e.jsx("span",{className:"relative rounded-full bg-gray-200 p-1 text-xs"}),e.jsx("span",{className:"absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-gray-400 p-1 text-xs"})]})}export{c as SidebarFriendsCounter};
