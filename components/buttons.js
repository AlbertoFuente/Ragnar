define('buttons', function () {
    /**
     * Buttons components
     */
     'use strict';

     return {

         getJsonData: () => {
             let services = require('services'),
                 data = [],
                 jsonData = services.getJsonData('../JSON/global.json').then((response) => {
                     data.push(response);
                 }, (error) => {
                     throw new Error ('there is a problem with the json data: ' + error);
                 });
            return data;
         },

         addBasicButton: (data) => {
             var self = this,
                jsonData = this.getJsonData(),
                basicButton = null;

             if (data !== undefined && jsonData !== undefined) {

                 basicButton.parent = data.parentElement;
                 basicButton.type = data.type;
                 basicButton.buttonId = data.buttonId;
                 basicButton.buttonClass = data.buttonClass;
                 basicButton.buttonText = data.buttonText;

                 // Styles
                 basicButton.backgroundColor = jsonData.basicButton.backgroundColor;
                 basicButton.borderColor = jsonData.basicButton.borderColor;
                 basicButton.borderSize = jsonData.basicButton.borderSize;
                 basicButton.borderType = jsonData.basicButton.borderType;
                 basicButton.borderRadius = jsonData.basicButton.borderRadius;
                 basicButton.textColor = jsonData.basicButton.textColor;
                 basicButton.textSize = jsonData.basicButton.textSize;
                 basicButton.icon = data.icon;
                 basicButton.iconClass = data.iconClass;
                 basicButton.dropDown = data.dropDown;
                 basicButton.dropDownElements = data.dropDownElements;

                 if (basicButton.icon) {
                     basicButton.buttonBox = document.createElement("div");
                     basicButton.buttonBox.id = self.buttonId;

                     basicButton.iconCont = document.createElement('li');
                     basicButton.iconCont.className = basicButton.iconClass + " iconBasicButton";

                     basicButton.buttonText = document.createTextNode(self.buttonText);

                     basicButton.buttonBox.appendChild(self.iconCont);
                     basicButton.buttonBox.appendChild(self.buttonText);
                     basicButton.parent.appendChild(self.buttonBox);
                 } else {
                     basicButton.buttonBox = document.createElement("div");
                     basicButton.buttonBox.id = self.buttonId;

                     basicButton.buttonText = document.createTextNode(self.buttonText);

                     basicButton.buttonBox.appendChild(self.buttonText);
                     basicButton.parent.appendChild(self.buttonBox);
                 }

                 if (basicButton.dropDown) {
                     basicButton.dropDownContainer = document.createElement('div');
                     basicButton.dropDownContainer.className = "dropDownContainer";

                     setTimeout(function () {
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

                     Object.keys(basicButton.dropDownElements).forEach(function(opt) {
                         basicButton.options = basicButton.dropDownElements[opt];

                         basicButton.createOption = document.createElement('div');
                         basicButton.createOption.className = "dropDownOption";

                         basicButton.createOptionLabel = document.createTextNode(basicButton.options);
                         basicButton.createOption.appendChild(basicButton.createOptionLabel);
                         basicButton.dropDownContainer.appendChild(basicButton.createOption);
                         basicButton.parent.appendChild(basicButton.dropDownContainer);

                         basicButton.createOption.onclick = function () {
                             basicButton.dropDownContainer.style.display = "none";

                             basicButton.buttonBox.style.color = jsonData.basicButton.textColor;
                             basicButton.buttonBox.style.background = jsonData.basicButton.backgroundColor;
                             basicButton.buttonBox.style.mozBoxShadow = jsonData.basicButton.innerShadowColor;
                             basicButton.buttonBox.style.webkitBoxShadow = jsonData.basicButton.innerShadowColor;
                             basicButton.buttonBox.style.boxShadow = jsonData.basicButton.innerShadowColor;
                         };
                     });
                 }
             }

             basicButton.buttonBox.onclick = function () {
                 var next = this.nextSibling;

                 if (next.className === "dropDownContainer") {
                     if (self.dropDownContainer.style.display === "none") {
                         self.dropDownContainer.style.display = "block";
                         this.style.color = jsonData.basicButtonActive.textColor;
                         this.style.background = jsonData.basicButtonActive.backgroundColor;
                         this.style.mozBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                         this.style.webkitBoxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                         this.style.boxShadow = "inset 0 0 10px " + jsonData.basicButtonActive.innerShadowColor;
                     } else {
                         self.dropDownContainer.style.display = "none";
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
         },

         addSeriesButtons: function(data) {
             var thisHolder = this,
                 jsonData = connectJSON(),
                 i = "",
                 opt = "";

             if (data !== undefined) {

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

                 for (i in this.buttons) {
                     this.button = this.buttons[i];

                     this.divButton = document.createElement("div");
                     this.divButton.id = this.button.buttonId;
                     this.divButton.className = this.button.buttonClass;
                     this.divButton.icon = this.button.icon;
                     this.divButton.iconClass = this.button.iconClass;
                     this.divButton.dropDown = this.button.dropDown;

                     if (this.divButton.icon) {
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

                     if (this.divButton.dropDown) {

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

                         for (opt in this.button.dropDownElements) {
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
                             };
                         }
                     }
                 }
                 this.divButton.onclick = function () {
                     var next = this.parentNode.nextSibling;

                     if (next.className === "dropDownContainerSeriesButtons") {
                         if (thisHolder.dropDownContainerSeries.style.display === "none") {
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
         },

         addRadioButton: function(data) {

             if (data !== undefined) {

                 this.parent = data.parentElement;
                 this.label = data.label;
                 this.labelText = data.labelText;

                 this.radioButtonContainer = document.createElement('div');
                 this.radioButtonContainer.className = "radioButtonContainer";

                 this.radioButton = document.createElement('div');
                 this.radioButton.className = "radioButton";

                 this.radioButtonActive = document.createElement('div');
                 this.radioButtonActive.className = "radioButtonActive";

                 if (this.label) {
                     this.labelRadioButtonContainer = document.createElement('div');
                     this.labelRadioButtonContainer.className = "labelRadioButtonContainer";

                     this.labelRadioButton = document.createTextNode(this.labelText);

                     this.labelRadioButtonContainer.appendChild(this.labelRadioButton);
                 }

                 this.radioButton.appendChild(this.radioButtonActive);
                 this.radioButtonContainer.appendChild(this.radioButton);
                 this.radioButtonContainer.appendChild(this.labelRadioButtonContainer);
                 this.parent.appendChild(this.radioButtonContainer);

                 this.radioButtonActive.onclick = function () {
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

                 this.parent = data.parentElement;
                 this.label = data.label;
                 this.labelText = data.labelText;

                 this.checkButtonContainer = document.createElement('div');
                 this.checkButtonContainer.className = "checkButtonContainer";

                 this.checkButton = document.createElement('div');
                 this.checkButton.className= "checkButton fa fa-check";

                 if (this.label) {
                     this.labelCheckButtonContainer = document.createElement('div');
                     this.labelCheckButtonContainer.className = "labelCheckButtonContainer";

                     this.labelCheckButton = document.createTextNode(this.labelText);

                     this.labelCheckButtonContainer.appendChild(this.labelCheckButton);
                 }

                 this.checkButtonContainer.appendChild(this.checkButton);
                 this.checkButtonContainer.appendChild(this.labelCheckButtonContainer);
                 this.parent.appendChild(this.checkButtonContainer);

                 this.checkButton.onclick = function () {
                     if (this.className === "checkButton fa fa-check") {
                         this.className = "checkButton fa fa-check Active";
                     } else {
                         this.className = "checkButton fa fa-check";
                     }
                 };
             }
         }
     };
}());
