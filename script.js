
$(document).ready(function() {

    $.getJSON("database.json",{}, function(data) {
        var text;
        var textNode;
        var title;
        for(var key in data) {
           text = ""
           textNode = ""
           title = key;
           if(key == "Programming_Languages" || key == "Softwares") {
            title = "IT_Skills"
           }
           var element = document.getElementById(title);
           for(part in data[title]) {
            for (i = 0; i < Object.keys(data[key][part]).length; i++) {
                element.appendChild(document.createTextNode(data[key][part][i])); 
                if(key == "Education" || key == "Work_Experience") {
                    element.appendChild(document.createElement("br")); 
                }
                  
            }
            element.appendChild(document.createElement("br")); 
           }
           
        }
    
});
})

$(li a).mouseover(function() {
    $(this).css("opacity", "0.2");
})
