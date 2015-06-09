var index;

$(document).ready(function() {
    index = 0;
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
    var interval = setInterval(function() {change()}, 5000);
});
});
function change() {
    console.log("orkif")
    if(index == 0) {
        $("header").css("background-image", "url = https://cloud.githubusercontent.com/assets/10785456/8024126/323d26cc-0d31-11e5-9f12-d95937216843.jpg");
    }
    elif(index == 1) {
        $("header").css("background-image", "url = https://cloud.githubusercontent.com/assets/10785456/8069202/68778b5c-0f01-11e5-8505-0319064c82ab.jpg");
    }
    else {
    $("header").css("background-image", "url = https://cloud.githubusercontent.com/assets/10785456/8069406/f554b36e-0f02-11e5-8da4-ba47f68dff15.jpg");
    index = -1;
    }
    index = index + 1;
}
$( "#navigation" ).on("mouseover", function() {
    console.log("HEI");
     $(this).css("color", "red");
});
