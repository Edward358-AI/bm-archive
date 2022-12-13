((function(){
	var a,b,c;
  c=prompt("Please provide a proxy link to go to (don't forget the https:// or http://!)");
  b=document.createElement("iframe");
  b.setAttribute("src",c),b.setAttribute("id","myohthegod");
  b.setAttribute("style","position: fixed; z-index: 999999; width: 100%; height: 100%; top: 0px; left: 0px; border: 0;");
  a=document.getElementsByTagName("body")[0];
  a.appendChild(b)
})).call(this)
