javascript:
var command=prompt('Javascriptを入力');
command=command.replace(/‘/g,"'").replace(/’/,"'").replace(/“/g,'"').replace(/”/g,'"');
eval(command);
void(0);
