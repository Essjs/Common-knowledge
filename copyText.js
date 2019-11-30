//获取元素
var elem=document.getElementById("box")

var range = document.createRange();
range.selectNodeContents(elem);
var selection = window.getSelection();
selection.removeAllRanges();
selection.addRange(range);
document.execCommand('copy')
        
