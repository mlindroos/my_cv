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
var header;
var education;

function BackgroundImage() {
    this.header;
    this.education;
}

BackgroundImage.prototype.preload = function() {
    this.header = new Image();
    this.header.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LC5LZA1EKABrh1Z99k38DPBhjZFXkqbQENnziK9hfd0WejlUvwj";
    this.education = new Image();
    this.education.src = "keyboards.jpg"
}

images = new BackgroundImage();
images.preload();

$(window).resize(function(){
    $(this.currentBackgroundImg).css('height', window.innerHeight);
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
           var element = document.getElementById(key);
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


