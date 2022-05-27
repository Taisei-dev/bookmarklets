javascript:
var newwin=window.open('about:blank');
newwin.document.write('
  <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark.min.css">
  <pre><code>'+(document.documentElement.outerHTML%7C%7Cdocument.documentElement.innerHTML).replace(/&/g,%22&amp;%22).replace(/%3C/g,%22&lt;%22).replace(/%3E/g,%22&gt;%22)+'</code></pre>
  <style>body{margin:0;padding:0;background:#282C34;}pre{color:white;overflow-x:auto;-webkit-overflow-scrolling:touch;}</style>
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
  <script>document.querySelectorAll("pre code").forEach((el)=>{hljs.highlightElement(el);})</script>');
newwin.document.close();void(0);
