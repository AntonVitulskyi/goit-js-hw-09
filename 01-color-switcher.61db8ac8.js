!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(e){document.body.style.backgroundColor=o(),e.target.disabled=!0,n.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor=o()}),1e3)})),n.addEventListener("click",(function(n){n.target.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.61db8ac8.js.map
