import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LogService
{
    apiUrl = "http://localhost:3000";

    constructor(private http: Http) { }
    async log(guess: number)
    {
        try
        {
            console.log("The user guessed:", guess);
            await this.logToDatabase(guess);
        }
        catch (err)
        {
            console.log("Error occurred while saving the guiess to the database:", err);
        }

    }

    logToDatabase(guess: number)
    {
        return this.http.post(this.apiUrl + "/log-guess", { guess: guess })
            .toPromise();
    }
}
