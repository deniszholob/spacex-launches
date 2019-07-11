// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';

// Services
import * as Services from '@app/services';

// Components
import { AppComponent } from './app.component';
import { DataTableComponent } from './shared/data-table/data-table.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        AppComponent,
        DataTableComponent,
    ],
    providers: [
        Services.SpacexLaunchesService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
