// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS Observable
import { Observable } from 'rxjs';

// Constants
import { Launch } from '@app/definitions';
import { API_URL } from '../config';

@Injectable({
    providedIn: 'root',
})
export class SpacexLaunchesService {
    readonly API_BASE_ENDPOINT = 'launches';
    readonly API_FULL_BASE_URL = `${API_URL}/${this.API_BASE_ENDPOINT}`;

    constructor(
        private httpClient: HttpClient,
    ) { }

    /** @returns Data for all SpaceX Launches */
    public getAllLaunches(): Observable<Launch[]> {
        const fullUrl = this.getFullLaunchApiUrl();
        return this.httpClient.get<Launch[]>(fullUrl);
    }

    /**
     * @returns Data for a specific SpaceX Launch
     * @param launchNumber The number of the SpaceX Launch
     */
    public getLaunch(launchNumber: number): Observable<Launch> {
        const fullUrl = this.getFullLaunchApiUrl(`${launchNumber}`);
        return this.httpClient.get<Launch>(fullUrl);
    }

    /**
     * @returns The full URL to use in an AI call for the SpaceX Launches endpoint set.
     * @param endpoint Endpoint stub to use for the specific launch api call (empty by default)
     */
    private getFullLaunchApiUrl(endpoint: string = ''): string {
        const fullUrl = `${this.API_FULL_BASE_URL}/${endpoint}`;
        console.log(fullUrl);
        return fullUrl;
    }
}
