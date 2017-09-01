import { AppPage } from "./app.po";

describe("second-test App", () =>
{
    let page: AppPage;

    beforeEach(() =>
    {
        page = new AppPage();
    });

    it("should display welcome message", () =>
    {
        page.navigateTo();
        expect(page.getWelcomeText()).toEqual("Welcome to the guessing game!");
    });

    it("should display the instructions", () =>
    {
        page.navigateTo();
        expect(page.getInstructionText()).toEqual("Please Enter your guess between 0 and 100");
    });

    it("should guess a number and diplay it in the list", () =>
    {
        page.navigateTo();
        page.getGuessInput().sendKeys(42);
        page.getGuessButton().click();

        expect(page.getFirstGuessListItem()).toEqual("42");
    });

    it("should loose a game and have all the guesses in the list", () =>
    {
        page.navigateTo();
        page.getGuessInput().sendKeys(122);
        page.getGuessButton().click();
        page.getGuessInput().sendKeys(122);
        page.getGuessButton().click();
        page.getGuessInput().sendKeys(122);
        page.getGuessButton().click();

        expect(page.getAllGuessListItems().count()).toEqual(3);
        expect(page.getDisabledGuessButton().count()).toEqual(1);
        expect(page.getFailureEndMessageDiv().count()).toEqual(1);
    });
});
