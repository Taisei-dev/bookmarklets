javascript:
var newwin=window.open('about:blank');
newwin.document.write('<pre><code>'+(document.documentElement.outerHTML%7C%7Cdocument.documentElement.innerHTML).replace(/&/g,%22&amp;%22).replace(/%3C/g,%22&lt;%22).replace(/%3E/g,%22&gt;%22)+'</code></pre><style>body{background:#25292f;color:#fff;overflow-x:auto;-webkit-overflow-scrolling:touch;}</style>');
document.close();void(0);
