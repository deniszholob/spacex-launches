# SpaceX Launches [![Build Status](https://travis-ci.org/deniszholob/spacex-launches.svg?branch=master)](https://travis-ci.org/deniszholob/spacex-launchest)

Simple Angular Web App that displays SpaceX Launches in a sortable and paginated table using the [SpaceX API](https://github.com/r-spacex/SpaceX-API).

[https://deniszholob.github.io/spacex-launches/](https://deniszholob.github.io/spacex-launches/)


## Some improvements that can be made
* Adding error handler for the API service
* Move the code from the app.component into a dedicated view for expandability
* Data table component could be enhanced:
  * Moving the Launch details to a collapsible/expandable row by following a "Master-Details" pattern.
  * Moving the press kit link to the details section or into a separate column with an Icon
  * Add options to only view past launches, as the last data entries are empty for future launches
  * Launch year could be changed to a Year/Month format for more granularity
  * Better loading icon integration
