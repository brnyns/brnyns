
if (typeof window.sentryIntegration !== "undefined" &&
    typeof window.sentryIntegration.dsn !== "undefined" &&
    typeof window.sentryIntegration.release !== "undefined") {

    Sentry.init({
        dsn: window.sentryIntegration.dsn,
        release: window.sentryIntegration.release,
        environment: window.sentryIntegration.env || "local",
        integrations: [],

        denyUrls: [
            // Chrome extensions
            /extensions\//i,
            /^chrome:\/\//i,
            /^safari-extension:\/\//i,
        ],
        ignoreErrors: [
            "Non-Error exception captured",
            "Non-Error promise rejection captured"
        ],
    });

}