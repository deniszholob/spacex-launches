// Testing
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

// Service
import { SpacexLaunchesService } from './SpacexLaunches.service';

// Definitions
import { Launch } from '@app/definitions';

describe('Service: SpacexLaunches', () => {
    let service: SpacexLaunchesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [SpacexLaunchesService],
        });

        service = TestBed.get(SpacexLaunchesService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('be able to retrieve all launch data from the API with GET', () => {
        const dummyData: Launch[] = [];
        service.getAllLaunches().subscribe(posts => {
            expect(posts.length).toBe(0);
            expect(posts).toEqual(dummyData);
        });
        const request = httpMock.expectOne(`${service.API_FULL_BASE_URL}/`);
        expect(request.request.method).toBe('GET');
        request.flush(dummyData);
    });
});
