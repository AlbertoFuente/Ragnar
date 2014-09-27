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
        this.buttonClass = thisHolder.buttonClass;

        this.buttonText = document.createTextNode(thisHolder.buttonText);

        this.buttonBox.appendChild(thisHolder.buttonText);
        this.parent.appendChild(thisHolder.buttonBox);

    }
}
