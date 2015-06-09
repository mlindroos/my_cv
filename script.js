
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
        var titles = Array("Education", "Work_Experience", "Pos._of_Responsibilities", "IT_Skills", "Languages", "Basics");
        if(window.matchMedia('(max-width: 568px)').matches) {
            document.getElementById("IT_Skills").appendChild(document.createTextNode("IT_Skills |");
        }
        else if(window.matchMedia('(max-width: 768px)').matches) {
            document.getElementById("Education").appendChild(document.createTextNode("Education |"));
            document.getElementById("IT_Skills").appendChild(document.createTextNode("| IT Skills"));
            document.getElementById("Basics").appendChild(document.createTextNode("| Contact Me"));
        }
        else if(window.matchMedia('(max-width: 1200px)').matches) {
            document.getElementById("Work_Experience").appendChild(document.createTextNode("| Work_Experience |"));
            document.getElementById("IT_Skills").appendChild(document.createTextNode("| IT Skills"));
            document.getElementById("Basics").appendChild(document.createTextNode("| Contact Me"));
        }
        else {
            document.getElementById("Work_Experience").appendChild(document.createTextNode("| Work_Experience |"));
            document.getElementById("IT_Skills").appendChild(document.createTextNode("| IT Skills |"));
            document.getElementById("Basics").appendChild(document.createTextNode("| Contact Me"));
        }
});
})

