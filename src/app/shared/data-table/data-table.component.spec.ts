// Testing
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

// Component
import { DataTableComponent } from './data-table.component';

// Modules
import { MatPaginatorModule, MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DataTableComponent', () => {
    let fixture: ComponentFixture<DataTableComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatProgressSpinnerModule,
            ],
            declarations: [DataTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableComponent);
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        const component = debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have a table', () => {
        const compiled = debugElement.nativeElement;
        expect(compiled.querySelector('table')).toBeDefined();
    });

    it('should have a paginator', () => {
        const compiled = debugElement.nativeElement;
        expect(compiled.querySelector('mat-paginator')).toBeDefined();
    });

    it('should have sorting', () => {
        const compiled = debugElement.nativeElement;
        expect(compiled.querySelector('matSort')).toBeDefined();
    });
});
