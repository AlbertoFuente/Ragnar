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
basicButtonObj.iconClass = "fa fa-bars";
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
var basicButtonNormal = addBasicButton(basicButtonObj);

// small button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Small";
basicButtonObj.buttonId = "basicButton-3";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
basicButtonObj.icon = true;
basicButtonObj.iconClass = "fa fa-cogs";
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

// Second button
seriesButtonsObj.buttons.button2.buttonId = "seriesButton-2";
seriesButtonsObj.buttons.button2.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button2.buttonText = "Second";
seriesButtonsObj.buttons.button2.icon = false;
seriesButtonsObj.buttons.button2.iconClass = "";

// First button
seriesButtonsObj.buttons.button3.buttonId = "seriesButton-3";
seriesButtonsObj.buttons.button3.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button3.buttonText = "Third";
seriesButtonsObj.buttons.button3.icon = false;
seriesButtonsObj.buttons.button3.iconClass = "";

// First button
seriesButtonsObj.buttons.button4.buttonId = "seriesButton-4";
seriesButtonsObj.buttons.button4.buttonClass = "seriesButton";
seriesButtonsObj.buttons.button4.buttonText = "Fourth";
seriesButtonsObj.buttons.button4.icon = false;
seriesButtonsObj.buttons.button4.iconClass = "";

addSeriesButtons(seriesButtonsObj);
