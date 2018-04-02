// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;

        var arr = [], /*l = document_root.links;*/ l = document_root.getElementsByTagName("video");
for(var i=0; i<l.length; i++) {
    console.log(l[i]);
    var temp = l[i].href;
    temp = l[i].currentSrc;

    //alert(temp);

    var ext = temp.split('.').pop();
    //alert(ext);
    if(ext=="mp3" || ext=="mp4")
    {
        var link = document.createElement('a');
        link.href = temp;
        link.setAttribute('download', temp);
        document.getElementsByTagName("body")[0].appendChild(link);
        // Firefox
        if (document.createEvent) {
            var event = document.createEvent("MouseEvents");
            event.initEvent("click", true, true);
            link.dispatchEvent(event);
        }
        //alert(link);
            link.click();
        link.parentNode.removeChild(link);
    
    }
  arr.push(l[i].href);
}
return "Success";

    while (node) {
        html+=node+"<br/>";
        node = node.nextSibling;
    }
    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
