/**
 * Implementing basic button
 */

var basicButtonObj = {};

basicButtonObj.parentElement = document.body;
basicButtonObj.type = "div";
basicButtonObj.buttonSize = "big";
basicButtonObj.buttonId = "basicButton-1";
basicButtonObj.buttonClass = "basicButton";
basicButtonObj.buttonText = "Basic";
basicButtonObj.backgroundColor = "rgb(255,255,255)";
basicButtonObj.borderColor = "rgb(239,148,19)";
basicButtonObj.borderSize = "1px";
basicButtonObj.borderType = "solid";
basicButtonObj.textColor = "rgb(239,148,19)";
basicButtonObj.textSize = "12px";

var basicButton = addButton(basicButtonObj);
