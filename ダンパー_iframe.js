javascript:
var url=document.getElementById("url");
var blockedurl=new URL(url.innerText);
var newurl=blockedurl.host.includes('google')?blockedurl.searchParams.get('url'):blockedurl.href;
document.write(`<iframe src="https://goooggle.herokuapp.com/prox/?url=${btoa(newurl)}" style="width:100%;height:100%;border:0px"></iframe>`);
void(0);
