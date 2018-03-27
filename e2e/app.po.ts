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
}
