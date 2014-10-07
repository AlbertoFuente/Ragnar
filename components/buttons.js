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
            this.dropDownContainer.className = "dropDownContainer";

            setTimeout(function () {
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

                this.createOption.onclick = function () {
                    thisHolder.dropDownContainer.style.display = "none";

                    thisHolder.buttonBox.style.color = jsonData.basicButton.textColor;
                    thisHolder.buttonBox.style.background = jsonData.basicButton.backgroundColor;
                    thisHolder.buttonBox.style.mozBoxShadow = jsonData.basicButton.innerShadowColor;
                    thisHolder.buttonBox.style.webkitBoxShadow = jsonData.basicButton.innerShadowColor;
                    thisHolder.buttonBox.style.boxShadow = jsonData.basicButton.innerShadowColor;
                }
            }
        }
    }

    this.buttonBox.onclick = function() {
        var next = this.nextSibling;

        if (next.className == "dropDownContainer") {
            if (thisHolder.dropDownContainer.style.display == "none") {
                thisHolder.dropDownContainer.style.display = "block";
                this.style.color = jsonData.basicButtonActive.textColor;
                this.style.background = jsonData.basicButtonActive.backgroundColor;
                this.style.mozBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                this.style.webkitBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                this.style.boxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
            } else {
                thisHolder.dropDownContainer.style.display = "none";
                this.style.color = jsonData.basicButton.textColor;
                this.style.background = jsonData.basicButton.backgroundColor;
                this.style.mozBoxShadow = jsonData.basicButton.innerShadowColor;
                this.style.webkitBoxShadow = jsonData.basicButton.innerShadowColor;
                this.style.boxShadow = jsonData.basicButton.innerShadowColor;
            }
        }
    };

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

    var jsonData = connectJSON();

    if (data != undefined) {

        this.parentS = data.parentElement;
        this.seriesLength = data.seriesLength;
        this.type = data.type;
        this.buttonSize = data.buttonSize;
        this.buttons = data.buttons;

        this.backgroundColor = jsonData.seriesButtons.backgroundColor;
        this.borderColor = jsonData.seriesButtons.borderColor;
        this.borderSize = jsonData.seriesButtons.borderSize;
        this.borderType = jsonData.seriesButtons.borderType;
        this.borderRadius = jsonData.seriesButtons.borderRadius;
        this.textColor = jsonData.seriesButtons.textColor;
        this.textSize = jsonData.seriesButtons.textSize;
        //this.innerShadow = jsonData.seriesButtons.innerShadowColor;

        this.buttonsContainer = document.createElement("div");
        this.buttonsContainer.className = "seriesButtonContainer";

        for (var i in this.buttons) {
            this.button = this.buttons[i];

            this.divButton = document.createElement("div");
            this.divButton.id = this.button.buttonId;
            this.divButton.className = this.button.buttonClass;
            this.divButton.icon = this.button.icon;
            this.divButton.iconClass = this.button.iconClass;
            this.divButton.dropDown = this.button.dropDown;

            if (this.divButton.icon == true) {
                this.icon = document.createElement('i');
                this.icon.className = this.divButton.iconClass;
                this.icon.setAttribute('style', 'border-right: none !important; margin-right: 10px');
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

            if (this.divButton.dropDown == true) {

                this.dropDownContainerSeries = document.createElement('div');
                this.dropDownContainerSeries.className = "dropDownContainerSeriesButtons";

                setTimeout(function () {
                    thisHolder.parentPositionS = thisHolder.divButton.getBoundingClientRect();
                    thisHolder.parentPositionLeftS = thisHolder.parentPositionS.left;
                    thisHolder.parentPositionTopS = thisHolder.parentPositionS.top;
                    thisHolder.parentPositionWidthS = thisHolder.parentPositionS.width;
                    thisHolder.parentPositionHeightS = thisHolder.parentPositionS.height;

                    thisHolder.dropDownContainerSeries.style.position = "absolute";
                    thisHolder.dropDownContainerSeries.style.display = "none";
                    thisHolder.dropDownContainerSeries.style.left = thisHolder.parentPositionLeftS + "px";
                    thisHolder.dropDownContainerSeries.style.top = (thisHolder.parentPositionTopS + thisHolder.parentPositionHeight + 3) + "px";
                    thisHolder.dropDownContainerSeries.style.minWidth = thisHolder.parentPositionWidthS + "px";
                    thisHolder.dropDownContainerSeries.style.width = "auto";
                    thisHolder.dropDownContainerSeries.style.height = "auto";
                    thisHolder.dropDownContainerSeries.style.background = thisHolder.backgroundColorS;
                    thisHolder.dropDownContainerSeries.style.border = thisHolder.borderSize + " " + thisHolder.borderType + " " + thisHolder.borderColor;
                    thisHolder.dropDownContainerSeries.style.borderRadius = thisHolder.borderRadius;
                }, 100);

                for (var opt in this.button.dropDownElements) {
                    this.dropOptions = this.button.dropDownElements[opt];

                    this.createOptionS = document.createElement('div');
                    this.createOptionS.className = "dropDownOptionSeriesButtons";

                    this.createOptionLabelS = document.createTextNode(this.dropOptions);
                    this.createOptionS.appendChild(this.createOptionLabelS);
                    this.dropDownContainerSeries.appendChild(this.createOptionS);
                    this.parentS.appendChild(this.dropDownContainerSeries);

                    this.createOptionS.onclick = function () {
                        thisHolder.dropDownContainerSeries.style.display = "none";

                        thisHolder.divButton.style.color = jsonData.seriesButtons.textColor;
                        thisHolder.divButton.style.background = jsonData.seriesButtons.backgroundColor;
                        thisHolder.divButton.style.mozBoxShadow = jsonData.seriesButtons.innerShadowColor;
                        thisHolder.divButton.style.webkitBoxShadow = jsonData.seriesButtons.innerShadowColor;
                        thisHolder.divButton.style.boxShadow = jsonData.seriesButtons.innerShadowColor;
                    }
                }
            }
        }
        this.divButton.onclick = function() {
            var next = this.parentNode.nextSibling;

            if (next.className == "dropDownContainerSeriesButtons") {
                if (thisHolder.dropDownContainerSeries.style.display == "none") {
                    thisHolder.dropDownContainerSeries.style.display = "block";
                    this.style.color = jsonData.seriesButtonsActive.textColor;
                    this.style.background = jsonData.seriesButtonsActive.backgroundColor;
                    this.style.mozBoxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                    this.style.webkitBoxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                    this.style.boxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                } else {
                    thisHolder.dropDownContainerSeries.style.display = "none";
                    this.style.color = jsonData.seriesButtons.textColor;
                    this.style.background = jsonData.seriesButtons.backgroundColor;
                    this.style.mozBoxShadow = jsonData.seriesButtons.innerShadowColor;
                    this.style.webkitBoxShadow = jsonData.seriesButtons.innerShadowColor;
                    this.style.boxShadow = jsonData.seriesButtons.innerShadowColor;
                }
            }
        };
    }
}

function addRadioButton(data) {

    if (data != undefined) {

        this.parent = data.parentElement;
        this.label = data.label;
        this.labelText = data.labelText;

        this.radioButtonContainer = document.createElement('div');
        this.radioButtonContainer.className = "radioButtonContainer";

        this.radioButton = document.createElement('div');
        this.radioButton.className = "radioButton";

        this.radioButtonActive = document.createElement('div');
        this.radioButtonActive.className = "radioButtonActive";

        if (this.label == true) {
            this.labelRadioButtonContainer = document.createElement('div');
            this.labelRadioButtonContainer.className = "labelRadioButtonContainer";

            this.labelRadioButton = document.createTextNode(this.labelText);

            this.labelRadioButtonContainer.appendChild(this.labelRadioButton);
        }

        this.radioButton.appendChild(this.radioButtonActive);
        this.radioButtonContainer.appendChild(this.radioButton);
        this.radioButtonContainer.appendChild(this.labelRadioButtonContainer);
        this.parent.appendChild(this.radioButtonContainer);
    }
}