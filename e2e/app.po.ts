import { browser, by, element } from "protractor";

export class AppPage
{
    navigateTo()
    {
        return browser.get("/");
    }

    getWelcomeText()
    {
        return element(by.css(".container-fluid h1")).getText();
    }

    getInstructionText()
    {
        return element(by.css(".container-fluid h4")).getText();
    }

    getGuessInput()
    {
        return element(by.css("input#guessInput"));
    }

    getFirstGuessListItem()
    {
        return element(by.css("ul#guessList li.guess-list-item")).getText();
    }

    getAllGuessListItems()
    {
        return element.all(by.css("ul#guessList li.guess-list-item"));
    }

    getGuessButton()
    {
        return element(by.css("button#guessButton"));
    }

    getDisabledGuessButton()
    {
        return element.all(by.css("button#guessButton.disabled"));
    }

    getFailureEndMessageDiv()
    {
        return element.all(by.css("div.end-message.alert-danger"));
    }
}
