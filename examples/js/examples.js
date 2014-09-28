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

var basicButton = addButton(basicButtonObj);
