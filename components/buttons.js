/**
 * Buttons components
 */

function connectJSON() {
    var url = "../JSON/global.json";
    var data = {};

    $.ajax({
        type:"GET",
        dataType: "json",
        url: url,
        success:function (result) {

            if(result!=undefined){

                data = result;
            }
        },
        async: false
    });
    return data;
}

function addBasicButton(data) {

    var thisHolder = this;

    var jsonData = connectJSON();
    console.log(jsonData);

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
        this.icon = data.icon;
        this.iconClass = data.iconClass;

        if (this.icon = true) {
            this.buttonBox = document.createElement("div");
            this.buttonBox.id = thisHolder.buttonId;

            this.iconCont = document.createElement('li');
            this.iconCont.className = this.iconClass + " iconBasicButton";

            this.buttonText = document.createTextNode(thisHolder.buttonText);

            this.buttonBox.appendChild(thisHolder.iconCont);
            this.buttonBox.appendChild(thisHolder.buttonText);
            this.parent.appendChild(thisHolder.buttonBox);
        } else {
            this.buttonBox = document.createElement("div");
            this.buttonBox.id = thisHolder.buttonId;

            this.buttonText = document.createTextNode(thisHolder.buttonText);

            this.buttonBox.appendChild(thisHolder.buttonText);
            this.parent.appendChild(thisHolder.buttonBox);
        }
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
            this.divButton.icon = this.button.icon;
            this.divButton.iconClass = this.button.iconClass;

            if (this.divButton.icon == true) {
                this.icon = document.createElement('i');
                this.icon.className = this.divButton.iconClass;
                this.textButton = document.createTextNode(this.button.buttonText);

                if (data.buttonSize == "Big") {
                    thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonsBig";
                } else if (data.buttonSize == "Normal") {
                    thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonNormal";
                } else {
                    thisHolder.divButton.className = thisHolder.button.buttonClass + " seriesButtonSmall";
                }
                this.divButton.appendChild(this.icon);
                this.divButton.appendChild(this.textButton);
                this.buttonsContainer.appendChild(this.divButton);
                this.parent.appendChild(this.buttonsContainer);
            } else {
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
}