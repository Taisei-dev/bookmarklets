javascript:
if(document.title==="規制"){
var url=document.getElementById("url");
var blockedurl=url.innerText;
url.innerHTML='
<form action="https://manabijuku.herokuapp.com/index.php" method="post" style="margin-bottom:0;">
  <input name="url" type="text" style="width:400px;" autocomplete="off" value="">
  <input type="submit" value="Go">
</form>
<style>
#url{
　　　　　word-break:break-all;	
}
#url input[type="text"] {
	font-size:1.0em;
        border: 0px solid #ffffff;
        outline: 0;
	-webkit-appearance: none;
	font-family:"Hiragino Mincho ProN"
}
#url input[type="text"]:focus{
	outline: 0;
	-webkit-appearance: none;
        border-color: #ffffff;
	font-family:"Hiragino Mincho ProN"
	font-size:1.0em;
}
#url input[type="submit"]{
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
}</style>';
document.getElementsByName("url")[0].value=blockedurl;
document.close();
document.body.contentEditable = "true";
document.designMode = "on";
}
else{
document.body.contentEditable = "true";
document.designMode = "on";
}
completion();
