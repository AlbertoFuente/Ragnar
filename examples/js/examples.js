/**
 * Buttons text
 */
var buttonsTextContainer = document.createElement('div');
buttonsTextContainer.className = "buttonsTextContainer";
var buttonTitleText = document.createTextNode('Buttons Sample:');
buttonsTextContainer.appendChild(buttonTitleText);
document.body.appendChild(buttonsTextContainer);


/**
 * Implementing basic button
 */

var basicButtonObj = {};

// big button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Big";
basicButtonObj.buttonId = "basicButton-1";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
var basicButtonBig = addButton(basicButtonObj);

// normal button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Normal";
basicButtonObj.buttonId = "basicButton-2";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
var basicButtonNormal = addButton(basicButtonObj);

// small button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Small";
basicButtonObj.buttonId = "basicButton-3";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
var basicButtonSmall = addButton(basicButtonObj);
