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
var basicButtonBig = addBasicButton(basicButtonObj);

// normal button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Normal";
basicButtonObj.buttonId = "basicButton-2";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
var basicButtonNormal = addBasicButton(basicButtonObj);

// small button
basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "Small";
basicButtonObj.buttonId = "basicButton-3";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
var basicButtonSmall = addBasicButton(basicButtonObj);


/**
 * Series Buttons text
 */

var seriesButtonsTextContainer = document.createElement('div');
seriesButtonsTextContainer.className = "seriesButtonsTextContainer";
var seriesButtonTitleText = document.createTextNode('Series Buttons Sample:');
seriesButtonsTextContainer.appendChild(seriesButtonTitleText);
document.body.appendChild(seriesButtonsTextContainer);

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
seriesButtonsObj.buttons.button1.buttonId = "basicButton-1";
seriesButtonsObj.buttons.button1.buttonClass = "basicButton";
seriesButtonsObj.buttons.button1.buttonText = "First";

// Second button
seriesButtonsObj.buttons.button2.buttonId = "basicButton-2";
seriesButtonsObj.buttons.button2.buttonClass = "basicButton";
seriesButtonsObj.buttons.button2.buttonText = "Second";

// First button
seriesButtonsObj.buttons.button3.buttonId = "basicButton-3";
seriesButtonsObj.buttons.button3.buttonClass = "basicButton";
seriesButtonsObj.buttons.button3.buttonText = "Third";

// First button
seriesButtonsObj.buttons.button4.buttonId = "basicButton-4";
seriesButtonsObj.buttons.button4.buttonClass = "basicButton";
seriesButtonsObj.buttons.button4.buttonText = "Fourth";

addSeriesButtons(seriesButtonsObj);
