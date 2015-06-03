define('samples', ['jquery', 'services', 'buttons'], function ($, services, buttons) {
    'use strict';

    return {
        init: function() {
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

            function BasicButtonBig() {
                this.parentElement = document.body;
                this.type = "div";
                this.buttonSize = "Big";
                this.buttonId = "basicButton-1";
                this.buttonClass = "basicButton";
                this.buttonText = "Basic";
                this.icon = true;
                this.iconClass = "fa fa-bar-chart";
                this.dropDown = false;
                this.dropDownElements = {};
            }

            function BasicButtonNormal() {
                BasicButtonBig.call(this);

                this.buttonSize = "Normal";
                this.buttonId = "basicButton-2";
                this.iconClass = "fa fa-book";
            }

            function BasicButtonSmall() {
                BasicButtonBig.call(this);

                this.buttonSize = "Small";
                this.buttonId = "basicButton-3";
                this.iconClass = "fa fa-bars";
                this.dropDownElements.element1 = "Option1";
                this.dropDownElements.element2 = "Option2";
                this.dropDownElements.element3 = "Option3";
                this.dropDownElements.element4 = "Option4";
            }

            // big button
            var basicButtonBig = buttons.addBasicButton(new BasicButtonBig());

            // normal button
            var basicButtonNormal = buttons.addBasicButton(new BasicButtonNormal());

            // small button
            var basicButtonSmall = buttons.addBasicButton(new BasicButtonSmall());


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

             function SeriesButtons() {
                 BasicButtonBig.call(this);
                 this.seriesLength = 4;
                 this.buttons = {
                     button1: {},
                     button2: {},
                     button3: {},
                     button4: {}
                 };
             }

             function SeriesButtons1() {
                 SeriesButtons.call(this);
                 this.buttons.button1 = {
                     buttonId : "seriesButton-1",
                     buttonClass : "seriesButton",
                     buttonText : "First",
                     icon : false,
                     iconClass : "",
                     dropDown : false
                 };
             }

             function SeriesButtons2() {
                 SeriesButtons.call(this);
                 this.buttons.button2 = {
                     buttonId : "seriesButton-2",
                     buttonClass : "seriesButton",
                     buttonText : "Second",
                     icon : false,
                     iconClass : "",
                     dropDown : false
                 };
             }

             function SeriesButtons3() {
                 SeriesButtons.call(this);
                 this.buttons.button3 = {
                     buttonId : "seriesButton-3",
                     buttonClass : "seriesButton",
                     buttonText : "Third",
                     icon : false,
                     iconClass : "",
                     dropDown : false
                 };
             }

             function SeriesButtons4() {
                 SeriesButtons.call(this);
                 this.buttons.button4 = {
                     buttonId : "seriesButton-4",
                     buttonClass : "seriesButton",
                     buttonText : "Fourth",
                     icon : false,
                     iconClass : "fa fa-bars",
                     dropDown : false,
                     dropDownElements : {
                         element1 : "Option1",
                         element2 : "Option2",
                         element3 : "Option3",
                         element4 : "Option4"
                     }
                 };
             }

             function AllSeriesButtons() {
                 SeriesButtons1.call(this);
                 SeriesButtons2.call(this);
                 SeriesButtons3.call(this);
                 SeriesButtons4.call(this);
             }

            var seriesButton = buttons.addSeriesButtons(new AllSeriesButtons());


            /**
             * Radio Buttons text
             */

            var radioButtonTextContainer = document.createElement('div');
            radioButtonTextContainer.className = "radioButtonTextContainer";
            var radioButtonTitleText = document.createTextNode('Radio Button Sample:');
            radioButtonTextContainer.appendChild(radioButtonTitleText);
            document.body.appendChild(radioButtonTextContainer);

            function RadioButtons() {
                this.label = true;
                this.labelText = "Radio Button";
                this.parentElement = document.body;
            }

            var radioButtons = buttons.addRadioButton(new RadioButtons());


            /**
             * Checkbox Button text
             */

            var checkButtonTextContainer = document.createElement('div');
            checkButtonTextContainer.className = "checkButtonTextContainer";
            var checkButtonTitleText = document.createTextNode("Check Box Sample:");
            checkButtonTextContainer.appendChild(checkButtonTitleText);
            document.body.appendChild(checkButtonTextContainer);

            function CheckButtons() {
                this.label = true;
                this.labelText = "Check Box Button";
                this.parentElement = document.body;
            }

            var checkButton = buttons.addCheckButton(new CheckButtons());

        }
    };
});
