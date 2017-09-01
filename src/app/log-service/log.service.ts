import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LogService
{
    apiUrl = "http://localhost:3000";

    constructor(private http: Http) { }
    async log(guess: number, solution: number)
    {
        try
        {
            console.log("The user guessed:", guess);
            await this.logToDatabase(guess, solution);
        }
        catch (err)
        {
            console.log("Error occurred while saving the guess to the database:", err);
        }
    }

    logToDatabase(guess: number, solution: number)
    {
        return this.http.post(this.apiUrl + "/log-guess", { guess, solution })
            .toPromise();
    }
}
