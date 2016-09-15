export * from 'framework7';

export const $ = Dom7;
window.$ = $

export default function initRouter() {
    $(document).on('pageBeforeInit', e => {
        let page = e.detail.page;
        load(page.name, page.query);
    });
}

export function load(moduleName, query) {
    let page = require(`./${moduleName}/${moduleName}`);
    page.init(query)
}

export function sendMessage(moduleName, message) {
    let page = require(`./${moduleName}/${moduleName}`);
    page.sendMessage(message)
}
