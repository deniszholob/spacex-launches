// Angular
import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Definitions
import { Launch } from '@app/definitions';
import { MatPaginator } from '@angular/material';

@Component({
    selector: 'sxl-data-table',
    templateUrl: './data-table.component.html',
    // styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
    @ViewChild(MatSort, { static: true })
    public matSort: MatSort;
    @ViewChild(MatPaginator, { static: true })
    public matPaginator: MatPaginator;

    public dataTableSource: MatTableDataSource<Launch>;
    public columnsToDisplay: string[] = [
        'flight_number',
        'launch_year',
        'rocket_name',
        'details',
    ];

    /**
     * Converts SpaceX Launch data to MaterialDataSource to use in the material table
     * Adds pagination and sorting functionalities.
     */
    @Input()
    set inputData(launchData: Launch[]) {
        if (!launchData) { launchData = []; }
        this.dataTableSource = new MatTableDataSource(launchData);
        this.dataTableSource.sort = this.matSort;
        this.dataTableSource.paginator = this.matPaginator;
    }

    @Input()
    public isLoading = false;

    /** Default pagination option that user can select form */
    public paginatorPageSizeOptions: number[] = [
        5, 10, 25, 50, 100,
    ];

    /**
     * Opens a new window with the given url
     * Should be activated on a table row click
     * @param url a valid url to browse to
     */
    public openUrl(url: string): void {
        if (url) {
            window.open(url, '_blank');
        }
    }

}
