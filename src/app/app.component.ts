import { ElementRef, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { LogService } from "./log-service/log.service";

@Component({
    selector: "second-test-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit
{
    @ViewChild("input") input: ElementRef;
    number: number;
    state: "won" | "lost" | "fresh";
    guesses: Array<number>;

    private _numberOfGuesses: number;

    private readonly MAX_ATTEMPTS = 3;

    constructor(private _logService: LogService){}

    ngOnInit()
    {
        this.newGame();
    }

    newGame()
    {
        this.number = Math.round(Math.random() * 100);
        this._numberOfGuesses = 0;
        this.guesses = [];
        this.state = "fresh";
        this.clearInput();
        console.log("The number is: ", this.number);
    }

    checkGuess(guess: string)
    {
        if (guess === "" || isNaN(+guess))
        {
            return;
        }

        this.logGuess(guess);

        if (+guess === this.number)
        {
            this.state = "won";
            return;
        }

        if (++this._numberOfGuesses >= this.MAX_ATTEMPTS)
        {
            this.state = "lost";
        }
        this.clearInput();
    }

    private clearInput()
    {
        this.input.nativeElement.value = null;
    }

    private logGuess(guess: string)
    {
        this.guesses.push(+guess);
        this._logService.log(+guess, this.number);
    }
}
