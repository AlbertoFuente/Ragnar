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
basicButtonObj.icon = true;
basicButtonObj.iconClass = "fa fa-bar-chart";
basicButtonObj.dropDown = false;
basicButtonObj.dropDownElements = {};
var basicButtonBig = addBasicButton(basicButtonObj);

// normal button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Normal";
basicButtonObj.buttonId = "basicButton-2";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
basicButtonObj.icon = true;
basicButtonObj.iconClass = "fa fa-book";
basicButtonObj.dropDown = false;
basicButtonObj.dropDownElements = {};
var basicButtonNormal = addBasicButton(basicButtonObj);

// small button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Small";
basicButtonObj.buttonId = "basicButton-3";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
basicButtonObj.icon = true;
basicButtonObj.iconClass = "fa fa-bars";
basicButtonObj.dropDown = true;
basicButtonObj.dropDownElements = {};
basicButtonObj.dropDownElements.element1 = "Option1";
basicButtonObj.dropDownElements.element2 = "Option2";
basicButtonObj.dropDownElements.element3 = "Option3";
basicButtonObj.dropDownElements.element4 = "Option4";
var basicButtonSmall = addBasicButton(basicButtonObj);


/**
 * Series Buttons text
 */

var seriesButtonsTextContainer = document.createElement('div');
seriesButtonsTextContainer.className = "seriesButtonsTextContainer";
var seriesButtonTitleText = document.createTextNode('Series Buttons Sample:');
seriesButtonsTextContainer.appendChild(seriesButtonTitleText);
document.body.appendChild(seriesButtonsTextContainer);

/**
 * Implementing series buttons
 */

var seriesButtonsObj = {};

seriesButtonsObj.seriesLength = 4;
seriesButtonsObj.buttonSize = "Big";
seriesButtonsObj.type = "div";
seriesButtonsObj.parentElement = document.body;
seriesButtonsObj.buttons = {};
seriesButtonsObj.buttons.button1 = {};
seriesButtonsObj.buttons.button2 = {};
seriesButtonsObj.buttons.button3 = {};
seriesButtonsObj.buttons.button4 = {};

// First button
seriesButtonsObj.buttons.button1.buttonId = "seriesButton-1";
seriesButtonsObj.buttons.button1.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button1.buttonText = "First";
seriesButtonsObj.buttons.button1.icon = false;
seriesButtonsObj.buttons.button1.iconClass = "";
seriesButtonsObj.buttons.button1.dropDown = false;

// Second button
seriesButtonsObj.buttons.button2.buttonId = "seriesButton-2";
seriesButtonsObj.buttons.button2.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button2.buttonText = "Second";
seriesButtonsObj.buttons.button2.icon = false;
seriesButtonsObj.buttons.button2.iconClass = "";
seriesButtonsObj.buttons.button2.dropDown = false;

// First button
seriesButtonsObj.buttons.button3.buttonId = "seriesButton-3";
seriesButtonsObj.buttons.button3.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button3.buttonText = "Third";
seriesButtonsObj.buttons.button3.icon = false;
seriesButtonsObj.buttons.button3.iconClass = "";
seriesButtonsObj.buttons.button3.dropDown = false;

// First button
seriesButtonsObj.buttons.button4.buttonId = "seriesButton-4";
seriesButtonsObj.buttons.button4.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button4.buttonText = "Fourth";
seriesButtonsObj.buttons.button4.icon = true;
seriesButtonsObj.buttons.button4.iconClass = "fa fa-bars";
seriesButtonsObj.buttons.button4.dropDown = true;
seriesButtonsObj.buttons.button4.dropDownElements = {};
seriesButtonsObj.buttons.button4.dropDownElements.element1 = "Option1";
seriesButtonsObj.buttons.button4.dropDownElements.element2 = "Option2";
seriesButtonsObj.buttons.button4.dropDownElements.element3 = "Option3";
seriesButtonsObj.buttons.button4.dropDownElements.element4 = "Option4";

addSeriesButtons(seriesButtonsObj);


/**
 * Radio Buttons text
 */

var radioButtonTextContainer = document.createElement('div');
radioButtonTextContainer.className = "radioButtonTextContainer";
var radioButtonTitleText = document.createTextNode('Radio Button Sample:');
radioButtonTextContainer.appendChild(radioButtonTitleText);
document.body.appendChild(radioButtonTextContainer);

var radioButton = {};

radioButton.label = true;
radioButton.labelText = "Radio Button";
radioButton.parentElement = document.body;

addRadioButton(radioButton);
