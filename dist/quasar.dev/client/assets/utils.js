const n=/[\s·/_\\,:;\.\(\)\[\]]+/g,s=/&/g,a=/[^\w-]+/g,c=/--+/g;function o(e){return String(e).toLowerCase().replace(n,"-").replace(s,"-and-").replace(a,"").replace(c,"-")}export{o as s};
