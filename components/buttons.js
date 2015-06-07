define('buttons', function() {
    /**
     * Buttons components
     */
    'use strict';

    return {

        addBasicButton: function(data, jsonData) {
            if (data !== undefined && jsonData !== undefined) {

                let basicButton = {
                    parent: data.parentElement,
                    type: data.type,
                    buttonId: data.buttonId,
                    buttonClass: data.buttonClass,
                    buttonText: data.buttonText,
                    // Styles
                    backgroundColor: jsonData.basicButton.backgroundColor,
                    borderColor: jsonData.basicButton.borderColor,
                    borderSize: jsonData.basicButton.borderSize,
                    borderType: jsonData.basicButton.borderType,
                    borderRadius: jsonData.basicButton.borderRadius,
                    textColor: jsonData.basicButton.textColor,
                    textSize: jsonData.basicButton.textSize,
                    icon: data.icon,
                    iconClass: data.iconClass,
                    dropDown: data.dropDown,
                    dropDownElements: data.dropDownElements
                };

                if (basicButton.icon) {
                    basicButton.buttonBox = document.createElement("div");
                    basicButton.buttonBox.id = basicButton.buttonId;

                    basicButton.iconCont = document.createElement('li');
                    basicButton.iconCont.className = basicButton.iconClass + " iconBasicButton";

                    basicButton.buttonText = document.createTextNode(basicButton.buttonText);

                    basicButton.buttonBox.appendChild(basicButton.iconCont);
                    basicButton.buttonBox.appendChild(basicButton.buttonText);
                    basicButton.parent.appendChild(basicButton.buttonBox);
                } else {
                    basicButton.buttonBox = document.createElement("div");
                    basicButton.buttonBox.id = basicButton.buttonId;

                    basicButton.buttonText = document.createTextNode(basicButton.buttonText);

                    basicButton.buttonBox.appendChild(basicButton.buttonText);
                    basicButton.parent.appendChild(basicButton.buttonBox);
                }

                if (basicButton.dropDown) {
                    basicButton.dropDownContainer = document.createElement('div');
                    basicButton.dropDownContainer.className = "dropDownContainer";

                    window.setTimeout(function() {
                        basicButton.parentPosition = basicButton.buttonBox.getBoundingClientRect();
                        basicButton.parentPositionLeft = basicButton.parentPosition.left;
                        basicButton.parentPositionTop = basicButton.parentPosition.top;
                        basicButton.parentPositionWidth = basicButton.parentPosition.width;
                        basicButton.parentPositionHeight = basicButton.parentPosition.height;

                        basicButton.dropDownContainer.style.position = "absolute";
                        basicButton.dropDownContainer.style.display = "none";
                        basicButton.dropDownContainer.style.left = basicButton.parentPositionLeft + "px";
                        basicButton.dropDownContainer.style.top = (basicButton.parentPositionTop + basicButton.parentPositionHeight + 3) + "px";
                        basicButton.dropDownContainer.style.minWidth = basicButton.parentPositionWidth + "px";
                        basicButton.dropDownContainer.style.width = "auto";
                        basicButton.dropDownContainer.style.height = "auto";
                        basicButton.dropDownContainer.style.background = basicButton.backgroundColor;
                        basicButton.dropDownContainer.style.border = basicButton.borderSize + " " + basicButton.borderType + " " + basicButton.borderColor;
                        basicButton.dropDownContainer.style.borderRadius = basicButton.borderRadius;
                    }, 100);

                    Object.keys(basicButton.dropDownElements).forEach(function(key) {
                        basicButton.options = basicButton.dropDownElements[key];

                        basicButton.createOption = document.createElement('div');
                        basicButton.createOption.className = "dropDownOption";

                        basicButton.createOptionLabel = document.createTextNode(basicButton.options);
                        basicButton.createOption.appendChild(basicButton.createOptionLabel);
                        basicButton.dropDownContainer.appendChild(basicButton.createOption);
                        basicButton.parent.appendChild(basicButton.dropDownContainer);

                        basicButton.createOption.onclick = function() {
                            basicButton.dropDownContainer.style.display = "none";

                            basicButton.buttonBox.style.color = jsonData.basicButton.textColor;
                            basicButton.buttonBox.style.background = jsonData.basicButton.backgroundColor;
                            basicButton.buttonBox.style.mozBoxShadow = jsonData.basicButton.innerShadowColor;
                            basicButton.buttonBox.style.webkitBoxShadow = jsonData.basicButton.innerShadowColor;
                            basicButton.buttonBox.style.boxShadow = jsonData.basicButton.innerShadowColor;
                        };
                    });
                }
                basicButton.buttonBox.onclick = function() {
                    var next = this.nextSibling;

                    if (next.className === "dropDownContainer") {
                        if (basicButton.dropDownContainer.style.display === "none") {
                            basicButton.dropDownContainer.style.display = "block";
                            this.style.color = jsonData.basicButtonActive.textColor;
                            this.style.background = jsonData.basicButtonActive.backgroundColor;
                            this.style.mozBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                            this.style.webkitBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                            this.style.boxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                        } else {
                            basicButton.dropDownContainer.style.display = "none";
                            this.style.color = jsonData.basicButton.textColor;
                            this.style.background = jsonData.basicButton.backgroundColor;
                            this.style.mozBoxShadow = jsonData.basicButton.innerShadowColor;
                            this.style.webkitBoxShadow = jsonData.basicButton.innerShadowColor;
                            this.style.boxShadow = jsonData.basicButton.innerShadowColor;
                        }
                    }
                };

                if (data.buttonSize === "Big") {
                    basicButton.buttonBox.className = basicButton.buttonClass + " basicButtonBig";
                } else if (data.buttonSize === "Normal") {
                    basicButton.buttonBox.className = basicButton.buttonClass + " basicButtonNormal";
                } else {
                    basicButton.buttonBox.className = basicButton.buttonClass + " basicButtonSmall";
                }
            }
        },

        addSeriesButtons: function(data, jsonData) {

            if (data !== undefined && jsonData !== undefined) {

                let seriesButtons = {
                    parentS: data.parentElement,
                    seriesLength: data.seriesLength,
                    type: data.type,
                    buttonSize: data.buttonSize,
                    buttons: data.buttons,
                    backgroundColor: jsonData.seriesButtons.backgroundColor,
                    borderColor: jsonData.seriesButtons.borderColor,
                    borderSize: jsonData.seriesButtons.borderSize,
                    borderType: jsonData.seriesButtons.borderType,
                    borderRadius: jsonData.seriesButtons.borderRadius,
                    textColor: jsonData.seriesButtons.textColor,
                    textSize: jsonData.seriesButtons.textSize
                };

                seriesButtons.buttonsContainer = document.createElement("div");
                seriesButtons.buttonsContainer.className = "seriesButtonContainer";

                Object.keys(seriesButtons.buttons).forEach(function(key) {
                    seriesButtons.button = seriesButtons.buttons[key];

                    seriesButtons.divButton = document.createElement("div");
                    seriesButtons.divButton.id = seriesButtons.button.buttonId;
                    seriesButtons.divButton.className = seriesButtons.button.buttonClass;
                    seriesButtons.divButton.icon = seriesButtons.button.icon;
                    seriesButtons.divButton.iconClass = seriesButtons.button.iconClass;
                    seriesButtons.divButton.dropDown = seriesButtons.button.dropDown;

                    if (seriesButtons.divButton.icon) {
                        seriesButtons.icon = document.createElement('i');
                        seriesButtons.icon.className = seriesButtons.divButton.iconClass;
                        seriesButtons.icon.setAttribute('style', 'border-right: none !important; margin-right: 10px');
                        seriesButtons.textButton = document.createTextNode(seriesButtons.button.buttonText);

                        if (data.buttonSize === "Big") {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonsBig";
                        } else if (data.buttonSize === "Normal") {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonNormal";
                        } else {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonSmall";
                        }
                        seriesButtons.divButton.appendChild(seriesButtons.icon);
                        seriesButtons.divButton.appendChild(seriesButtons.textButton);
                        seriesButtons.buttonsContainer.appendChild(seriesButtons.divButton);
                        seriesButtons.parentS.appendChild(seriesButtons.buttonsContainer);
                    } else {
                        seriesButtons.textButton = document.createTextNode(seriesButtons.button.buttonText);

                        if (data.buttonSize === "Big") {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonsBig";
                        } else if (data.buttonSize === "Normal") {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonNormal";
                        } else {
                            seriesButtons.divButton.className = seriesButtons.button.buttonClass + " seriesButtonSmall";
                        }

                        seriesButtons.divButton.appendChild(seriesButtons.textButton);
                        seriesButtons.buttonsContainer.appendChild(seriesButtons.divButton);
                        seriesButtons.parentS.appendChild(seriesButtons.buttonsContainer);
                    }

                    if (seriesButtons.divButton.dropDown) {

                        seriesButtons.dropDownContainerSeries = document.createElement('div');
                        seriesButtons.dropDownContainerSeries.className = "dropDownContainerSeriesButtons";

                        window.setTimeout(function() {
                            seriesButtons.parentPositionS = seriesButtons.divButton.getBoundingClientRect();
                            seriesButtons.parentPositionLeftS = seriesButtons.parentPositionS.left;
                            seriesButtons.parentPositionTopS = seriesButtons.parentPositionS.top;
                            seriesButtons.parentPositionWidthS = seriesButtons.parentPositionS.width;
                            seriesButtons.parentPositionHeightS = seriesButtons.parentPositionS.height;

                            seriesButtons.dropDownContainerSeries.style.position = "absolute";
                            seriesButtons.dropDownContainerSeries.style.display = "none";
                            seriesButtons.dropDownContainerSeries.style.left = seriesButtons.parentPositionLeftS + "px";
                            seriesButtons.dropDownContainerSeries.style.top = (seriesButtons.parentPositionTopS + seriesButtons.parentPositionHeightS + 3) + "px";
                            seriesButtons.dropDownContainerSeries.style.minWidth = seriesButtons.parentPositionWidthS + "px";
                            seriesButtons.dropDownContainerSeries.style.width = "auto";
                            seriesButtons.dropDownContainerSeries.style.height = "auto";
                            seriesButtons.dropDownContainerSeries.style.background = seriesButtons.backgroundColorS;
                            seriesButtons.dropDownContainerSeries.style.border = seriesButtons.borderSize + " " + seriesButtons.borderType + " " + seriesButtons.borderColor;
                            seriesButtons.dropDownContainerSeries.style.borderRadius = seriesButtons.borderRadius;
                        }, 100);

                        Object.keys(seriesButtons.button.dropDownElements).forEach(function(key) {
                            seriesButtons.dropOptions = seriesButtons.button.dropDownElements[key];

                            seriesButtons.createOptionS = document.createElement('div');
                            seriesButtons.createOptionS.className = "dropDownOptionSeriesButtons";

                            seriesButtons.createOptionLabelS = document.createTextNode(seriesButtons.dropOptions);
                            seriesButtons.createOptionS.appendChild(seriesButtons.createOptionLabelS);
                            seriesButtons.dropDownContainerSeries.appendChild(seriesButtons.createOptionS);
                            seriesButtons.parentS.appendChild(seriesButtons.dropDownContainerSeries);

                            seriesButtons.createOptionS.onclick = function() {
                                seriesButtons.dropDownContainerSeries.style.display = "none";

                                seriesButtons.divButton.style.color = jsonData.seriesButtons.textColor;
                                seriesButtons.divButton.style.background = jsonData.seriesButtons.backgroundColor;
                                seriesButtons.divButton.style.mozBoxShadow = jsonData.seriesButtons.innerShadowColor;
                                seriesButtons.divButton.style.webkitBoxShadow = jsonData.seriesButtons.innerShadowColor;
                                seriesButtons.divButton.style.boxShadow = jsonData.seriesButtons.innerShadowColor;
                            };
                        });
                    }
                });

                seriesButtons.divButton.onclick = function() {
                    var next = this.parentNode.nextSibling;

                    if (next.className === "dropDownContainerSeriesButtons") {
                        if (seriesButtons.dropDownContainerSeries.style.display === "none") {
                            seriesButtons.dropDownContainerSeries.style.display = "block";
                            this.style.color = jsonData.seriesButtonsActive.textColor;
                            this.style.background = jsonData.seriesButtonsActive.backgroundColor;
                            this.style.mozBoxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                            this.style.webkitBoxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                            this.style.boxShadow = "inset 0 0 10px " + jsonData.seriesButtonsActive.innerShadowColor;
                        } else {
                            seriesButtons.dropDownContainerSeries.style.display = "none";
                            this.style.color = jsonData.seriesButtons.textColor;
                            this.style.background = jsonData.seriesButtons.backgroundColor;
                            this.style.mozBoxShadow = jsonData.seriesButtons.innerShadowColor;
                            this.style.webkitBoxShadow = jsonData.seriesButtons.innerShadowColor;
                            this.style.boxShadow = jsonData.seriesButtons.innerShadowColor;
                        }
                    }
                };
            }
        },

        addRadioButton: function(data) {

            if (data !== undefined) {

                let radioButton = {
                    parent: data.parentElement,
                    label: data.label,
                    labelText: data.labelText
                };

                radioButton.radioButtonContainer = document.createElement('div');
                radioButton.radioButtonContainer.className = "radioButtonContainer";

                radioButton.radioButton = document.createElement('div');
                radioButton.radioButton.className = "radioButton";

                radioButton.radioButtonActive = document.createElement('div');
                radioButton.radioButtonActive.className = "radioButtonActive";

                if (radioButton.label) {
                    radioButton.labelRadioButtonContainer = document.createElement('div');
                    radioButton.labelRadioButtonContainer.className = "labelRadioButtonContainer";

                    radioButton.labelRadioButton = document.createTextNode(radioButton.labelText);

                    radioButton.labelRadioButtonContainer.appendChild(radioButton.labelRadioButton);
                }

                radioButton.radioButton.appendChild(radioButton.radioButtonActive);
                radioButton.radioButtonContainer.appendChild(radioButton.radioButton);
                radioButton.radioButtonContainer.appendChild(radioButton.labelRadioButtonContainer);
                radioButton.parent.appendChild(radioButton.radioButtonContainer);

                radioButton.radioButtonActive.onclick = function() {
                    if (this.className === "radioButtonActive") {
                        this.className = "radioButtonActive Active";
                    } else {
                        this.className = "radioButtonActive";
                    }
                };
            }
        },

        addCheckButton: function(data) {

            if (data !== undefined) {

                let checkButton = {
                    parent: data.parentElement,
                    label: data.label,
                    labelText: data.labelText
                };

                checkButton.checkButtonContainer = document.createElement('div');
                checkButton.checkButtonContainer.className = "checkButtonContainer";

                checkButton.checkButton = document.createElement('div');
                checkButton.checkButton.className = "checkButton fa fa-check";

                if (checkButton.label) {
                    checkButton.labelCheckButtonContainer = document.createElement('div');
                    checkButton.labelCheckButtonContainer.className = "labelCheckButtonContainer";

                    checkButton.labelCheckButton = document.createTextNode(checkButton.labelText);

                    checkButton.labelCheckButtonContainer.appendChild(checkButton.labelCheckButton);
                }

                checkButton.checkButtonContainer.appendChild(checkButton.checkButton);
                checkButton.checkButtonContainer.appendChild(checkButton.labelCheckButtonContainer);
                checkButton.parent.appendChild(checkButton.checkButtonContainer);

                checkButton.checkButton.onclick = function() {
                    if (this.className === "checkButton fa fa-check") {
                        this.className = "checkButton fa fa-check Active";
                    } else {
                        this.className = "checkButton fa fa-check";
                    }
                };
            }
        }
    };
});
