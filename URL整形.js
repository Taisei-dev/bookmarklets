jsvascript:
window.location.href=new URL(document.getElementById("url").innerText).host.includes('google')?blockedurl.searchParams.get('url'):blockedurl.href;
void(0);
