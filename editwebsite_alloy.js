javascript:
if(document.title==="規制"){
var url=document.getElementById("url");
var blockedurl=url.innerText;
url.innerHTML='
<div class="container">
           <div class="form">
                <input type="text" value="http://isgcblock-iss-netstar-inc-8080.herokuapp.com/" style="width:500px;" id="input">
                <button id="initiate">Go</button>
           </div>  
     </div>
<style>
#form{
　　　　　word-break:break-all;	
}
#form input[type="text"] {
	font-size:1.0em;
        border: 0px solid #ffffff;
        outline: 0;
	-webkit-appearance: none;
	font-family:"Hiragino Mincho ProN"
}
#form input[type="text"]:focus{
	outline: 0;
	-webkit-appearance: none;
        border-color: #ffffff;
	font-family:"Hiragino Mincho ProN"
	font-size:1.0em;
}
#form input[type="submit"]{
	font-size:1.0em;
        position: relative;
        display: inline-block;
        cursor: pointer;
	border: none; 
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
	color: #ffffff;
        background-color: #ffffff;
	background: transparent;
}</style>
';
var input = document.querySelector("#input");
input.addEventListener("keyup", (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`https://isgcblock-iss-netstar-inc-8080.herokuapp.com/prox/?url=${btoa(input.value)}`);
    }
});
document.querySelector("#initiate").addEventListener("click", () => {
    if (!input.value.trim().length) return;
    window.location.assign(`https://isgcblock-iss-netstar-inc-8080.herokuapp.com/prox/?url=${btoa(input.value)}`);

});
document.close();
}
void(0);
