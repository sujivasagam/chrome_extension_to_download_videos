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
        alert(link);

        //else if (link.click) {
            link.click();
        //}
        link.parentNode.removeChild(link);


       /* var element = document.createElement('a');
       // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('text'));
        element.setAttribute('download', l[i].href);

        element.style.display = 'none';
        document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);


  /*      chrome.downloads.download({
  url: l[i].href,
  filename: "suggested/filename/with/relative.path" // Optional*/
//});
    //    html+="<a href="+l[i].href+" target='_blank'>"+l[i].href+"</a><br/>";
       // html+='<iframe width="1" height="1" frameborder="0" src="'+l[i].href+'"></iframe>';
    
    }

        //html+="<a href="+l[i].href+" target='_blank'>"+l[i].href+"</a><br/>";
  arr.push(l[i].href);
}
return "Success";

    while (node) {
        html+=node+"<br/>";
       /* switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }*/
        node = node.nextSibling;
    }
    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
