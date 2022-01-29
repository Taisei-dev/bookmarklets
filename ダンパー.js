javascript:
var url=document.getElementById("url");
var blockedurl=new URL(url.innerText);
var newurl=blockedurl.host.includes('google')?blockedurl.searchParams.get('url'):blockedurl.href;
window.location.href=`https://goooggle.herokuapp.com/prox/?url=${btoa(newurl)}`;
void(0);
