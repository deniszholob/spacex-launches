import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('sxl-root h1')).getText() as Promise<string>;
    }

    isDataTableDisplayed() {
        return element(by.css('sxl-data-table')).isDisplayed() as Promise<boolean>;
    }
}
