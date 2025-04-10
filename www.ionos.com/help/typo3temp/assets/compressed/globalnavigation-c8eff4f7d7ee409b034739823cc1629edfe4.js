var OAO = OAO || {}; // OAO refers to the global OAO variable.
OAO.q = OAO.q || {};
OAO.q.c = OAO.q.c || [];
OAO.q.navigation = OAO.q.navigation || [];

window.ionos_help = window.ionos_help || {};
window.ionos_help.globalnavigation = window.ionos_help.globalnavigation || {};
window.ionos_help.globalnavigation.setup = function(market, locale) {

    locale = locale.replace('.UTF-8', '');

    OAO.q.c.push(['setMarket', market]);
    OAO.q.c.push(['setLanguage', locale]);
    OAO.q.c.push(['setPageName', window.document.location.pathname]);

    window.ionos_help.globalnavigation.setupFrontendToken(OAO);

    window.ionos_help.globalnavigation.fetchNGUserId();

    var productArea = null;
    var categoryEnumElement = document.querySelector("meta[name='category-enum']");
    if (categoryEnumElement !== null) {
        productArea = categoryEnumElement.getAttribute('content');
    } else {
        var categoryMetaElement = document.querySelector("meta[name='category-name']");
        if (categoryMetaElement !== null) {
            productArea = categoryMetaElement.getAttribute('content');
        }
    }

    if (productArea !== null) {
        OAO.q.navigation.push(['setProductArea', productArea]);
    }
    else {
        OAO.q.navigation.push(['setProductArea', 'Home']);
    }

};


window.ionos_help.globalnavigation.setupFrontendToken = function(OAO) {

    const sessionPathUrl = window.ionos_help.login.getSessionPathUrl();
    const loginUrls = window.ionos_help.login.getLoginUrls();

    if(document.cookie.indexOf("eue_ftk") > -1) {
        OAO.q.c.push(['setFrontendToken', /eue_ftk=([A-z,a-z,0-9,-]*);*?/.exec(document.cookie)[1]]);
        OAO.q.navigation.push(['setLogoutUrl', sessionPathUrl + "logout"]);
    }
    else {
        if (typeof window.loginUrlExtraCheck !== "undefined" && typeof window.loginUrlExtraCheck === "function") {
            if (window.loginUrlExtraCheck()) {
                OAO.q.navigation.push(['setLoginUrl', loginUrls.url]);
            }
        } else {
            OAO.q.navigation.push(['setLoginUrl', loginUrls.url]);
        }
    }
};


window.ionos_help.globalnavigation.fetchNGUserId = async function() {
    let requestUrl = window.ionos_help.login.baseUrl + 'checkIonosId?no_cache=' + Date.now();
    // no need to do anything with the response
    await fetch(requestUrl);
}