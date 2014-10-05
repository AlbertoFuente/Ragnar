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

    if (data != undefined) {

        this.parent = data.parentElement;
        this.type = data.type;
        this.buttonId = data.buttonId;
        this.buttonClass = data.buttonClass;
        this.buttonText = data.buttonText;

        // Styles
        this.backgroundColor = jsonData.basicButton.backgroundColor;
        this.borderColor = jsonData.basicButton.borderColor;
        this.borderSize = jsonData.basicButton.borderSize;
        this.borderType = jsonData.basicButton.borderType;
        this.borderRadius = jsonData.basicButton.borderRadius;
        this.textColor = jsonData.basicButton.textColor;
        this.textSize = jsonData.basicButton.textSize;
        this.icon = data.icon;
        this.iconClass = data.iconClass;
        this.dropDown = data.dropDown;
        this.dropDownElements = data.dropDownElements;

        if (this.icon == true) {
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

        if (this.dropDown == true) {
            this.dropDownContainer = document.createElement('div');
            this.dropDownContainer.className= "dropDownContainer";

            setTimeout(function() {
                thisHolder.parentPosition = thisHolder.buttonBox.getBoundingClientRect();
                thisHolder.parentPositionLeft = thisHolder.parentPosition.left;
                thisHolder.parentPositionTop = thisHolder.parentPosition.top;
                thisHolder.parentPositionWidth = thisHolder.parentPosition.width;
                thisHolder.parentPositionHeight = thisHolder.parentPosition.height;

                thisHolder.dropDownContainer.style.position = "absolute";
                thisHolder.dropDownContainer.style.display = "none";
                thisHolder.dropDownContainer.style.left = thisHolder.parentPositionLeft + "px";
                thisHolder.dropDownContainer.style.top = (thisHolder.parentPositionTop + thisHolder.parentPositionHeight + 3) + "px";
                thisHolder.dropDownContainer.style.minWidth = thisHolder.parentPositionWidth + "px";
                thisHolder.dropDownContainer.style.width = "auto";
                thisHolder.dropDownContainer.style.height = "auto";
                thisHolder.dropDownContainer.style.background = thisHolder.backgroundColor;
                thisHolder.dropDownContainer.style.border = thisHolder.borderSize + " " + thisHolder.borderType + " " + thisHolder.borderColor;
                thisHolder.dropDownContainer.style.borderRadius = thisHolder.borderRadius;
            }, 100);

            for (var opt in this.dropDownElements) {
                this.options = this.dropDownElements[opt];

                this.createOption = document.createElement('div');
                this.createOption.className = "dropDownOption";

                this.createOptionLabel = document.createTextNode(this.options);
                this.createOption.appendChild(this.createOptionLabel);
                this.dropDownContainer.appendChild(this.createOption);
                this.parent.appendChild(this.dropDownContainer);

                this.createOption.onclick = function() {
                    thisHolder.dropDownContainer.style.display = "none";
                }
            }
        }

        this.buttonBox.onclick = function() {
            if (thisHolder.dropDownContainer.style.display == "none") {
                thisHolder.dropDownContainer.style.display = "block";
            } else {
                thisHolder.dropDownContainer.style.display = "none";
            }
        };
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