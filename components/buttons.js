/**
 * Buttons components
 */

function addButton(data) {

    var thisHolder = this;

    if (data != undefined) {

        this.parent = data.parentElement;
        this.type = data.type;
        this.buttonId = data.buttonId;
        this.buttonClass = data.buttonClass;
        this.buttonText = data.buttonText;

        // Styles
        this.backgroundColor = data.backgroundColor;
        this.borderColor = data.borderColor;
        this.borderSize = data.borderSize;
        this.borderType = data.borderType;
        this.textColor = data.textColor;
        this.textSize = data.textSize;

        this.buttonBox = document.createElement("div");
        this.buttonBox.id = thisHolder.buttonId;

        this.buttonText = document.createTextNode(thisHolder.buttonText);

        this.buttonBox.appendChild(thisHolder.buttonText);
        this.parent.appendChild(thisHolder.buttonBox);
    }

    var url = "../JSON/global.json";
    var dataVars = {};

    var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';

        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                dataVars = xhr.response;
            } else {
                console.log(status);
            }
        };
        xhr.send();

    if (data.buttonSize == "Big") {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonBig";
    } else if (data.buttonSize == "Normal") {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonNormal";
    } else {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonSmall";
    }
}
