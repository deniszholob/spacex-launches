import { TestBed, async, ComponentFixture } from '@angular/core/testing';

// Components
import { AppComponent } from './app.component';
import { DataTableComponent } from './shared/data-table/data-table.component';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
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
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        const component = debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const compiled = debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('SpaceX Launches');
    });

    it('should render a data table', () => {
        const compiled = debugElement.nativeElement;
        expect(compiled.querySelector('slx-data-table')).toBeDefined();
        expect(compiled.querySelector('table')).toBeDefined();
    });

});
