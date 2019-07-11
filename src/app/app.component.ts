// Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// Services
import { SpacexLaunchesService } from '@app/services';

// Constants
import { Launch } from '@app/definitions';

@Component({
    selector: 'sxl-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    public launches: Launch[] = [];
    public isLoading = false;

    constructor(
        private spacexLaunchesService: SpacexLaunchesService,
    ) { }

    public ngOnInit(): void {
        this.getLaunchData();
    }

    /** Retrieves Launch data from service */
    public getLaunchData(): void {
        this.isLoading = true;

        this.subscription = this.spacexLaunchesService.getAllLaunches().subscribe(
            (response: Launch[]) => {
                this.launches = response;
                this.isLoading = false;
            },
            err => {
                console.log(err);
                this.isLoading = false;
            },
        );
    }

    /** Cleans up data subscription if exists */
    public ngOnDestroy(): void {
        if (this.subscription) { this.subscription.unsubscribe(); }
    }
}
