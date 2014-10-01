/**
 * Buttons components
 */

function connectJSON() {
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
    return dataVars;
}

function addBasicButton(data) {

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

    if (data.buttonSize == "Big") {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonBig";
    } else if (data.buttonSize == "Normal") {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonNormal";
    } else {
        thisHolder.buttonBox.className = thisHolder.buttonClass + " basicButtonSmall";
    }
}


function addSeriesButtons(data) {
    var thisHolder = this;

    if (data != undefined) {

        this.parent = data.parentElement;
        this.seriesLength = data.seriesLength;
        this.type = data.type;
        this.buttonSize = data.buttonSize;
        this.buttons = data.buttons;

        this.buttonsContainer = document.createElement("div");
        this.buttonsContainer.className = "seriesButtonContainer";

        for (var i in this.buttons) {
            this.button = this.buttons[i];

            this.divButton = document.createElement("div");
            this.divButton.id = this.button.buttonId;
            this.divButton.className = this.button.buttonClass;

            this.textButton = document.createTextNode(this.button.buttonText);

            if (data.buttonSize == "Big") {
                thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonsBig";
            } else if (data.buttonSize == "Normal") {
                thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonNormal";
            } else {
                thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonSmall";
            }

            this.divButton.appendChild(this.textButton);
            this.buttonsContainer.appendChild(this.divButton);
            this.parent.appendChild(this.buttonsContainer);
        }

    }
}