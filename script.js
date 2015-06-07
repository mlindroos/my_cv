var currentBackgroundImg;
var eduelement;
var expelement;
var itelement;
var respelement;
var langelement;
var edutext;
var expetext;
var ittext;
var resptext;
var langtext;
var cv;
var header;
var education;

function BackgroundImage() {
    this.header;
    this.education;
    this.cv;
}

BackgroundImage.prototype.preload = function() {
    this.header = new Image();
    this.header.src = "keyboard.jpg";
    this.education = new Image();
    this.education.src = "keyboards.jpg";
    this.cv = new Image();
    this.cv.src = "cv.jpg";
}

images = new BackgroundImage();
images.preload();

$(window).resize(function(){
    $(this.header).css('height', window.innerHeight);
});

$(document).ready(function() {
    var i;
    var j;

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
                if(key == "Education") {
                    element.appendChild(document.createElement("br")); 
                }
                  
            }
            element.appendChild(document.createElement("br")); 
           }
           
        }
});
})


