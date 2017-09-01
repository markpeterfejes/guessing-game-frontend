import { HttpModule } from "@angular/http";
import { LogService } from "./log-service/log.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [LogService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
