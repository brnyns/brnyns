window.ionos_help = window.ionos_help || {};
window.ionos_help.login = window.ionos_help.login || {};
window.ionos_help.login.checkState = async function(baseUrl) {
    window.ionos_help.login.baseUrl = baseUrl;

    const sessionPathUrl = window.ionos_help.login.getSessionPathUrl();
    const cacheBuster = "no_cache=" + Date.now();

    if (window === window.top) {
        const loginUrls = window.ionos_help.login.getLoginUrls();

        const requestUrl = sessionPathUrl + "state?" + cacheBuster;
        const sessionState = await window.ionos_help.login.getState(requestUrl);
        switch (sessionState) {
            case "invalidateSession":
                window.location.href = sessionPathUrl + "invalidate?" + cacheBuster;
            break;

            case "localLogin":
                window.location.href = loginUrls.optional;
            break;

            case "logout":
                window.location.href = sessionPathUrl + 'logout?redirect_url=' + encodeURIComponent(document.location.href);
            break;

            default: // sessionState is null -> no action required
        }
    }
};

window.ionos_help.login.getSessionPathUrl = function() {
    const sessionPath = "session/";
    return window.ionos_help.login.baseUrl + sessionPath;
}

window.ionos_help.login.getLoginUrls = function() {
    const cacheBuster = "no_cache=" + Date.now();
    const loginBaseUrl = (document.location.protocol + '//' + window.location.host).replace('www', 'login');
    let loginUrl = loginBaseUrl + "/login?redirect_url=";
    let optionalLoginUrl = loginBaseUrl + "/optional?redirect_url=";

    const loginRedirectUrl = window.ionos_help.login.getSessionPathUrl() + "login";

    var originParamLogin = "?origin=" + document.location.pathname;
    var idPosition = document.location.search.indexOf('id');
    if (idPosition !== -1) {
        var matches = document.location.search.match(/[?&]id=([\d]+)/);
        if (matches !== null && matches.length > 1) {
            originParamLogin += "&id=" + matches.pop();
        }
    }
    originParamLogin += "&" + cacheBuster;

    loginUrl += encodeURIComponent(loginRedirectUrl + originParamLogin);
    optionalLoginUrl += encodeURIComponent(loginRedirectUrl + originParamLogin);

    return { url: loginUrl, optional: optionalLoginUrl };
}

window.ionos_help.login.getState = async function(url) {
    const response = await fetch(url);
    const state = await response.json();
    return state.sessionState;
}