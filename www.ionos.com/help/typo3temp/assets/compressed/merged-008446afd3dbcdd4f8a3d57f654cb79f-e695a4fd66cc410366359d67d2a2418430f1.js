
function responsiveHeader() {

    var mqlLarge = window.matchMedia('(min-width: 1160px)'),
        mqlMediumL = window.matchMedia('(min-width: 864px) and (max-width: 1159px)'),
        mqlMedium = window.matchMedia('(min-width: 667px) and (max-width: 863px)'),
        mqlSmall = window.matchMedia('(max-width: 666px)'),
        mqlLargeHandler, mqlMediumLHandler, mqlMediumHandler, mqlSmallHandler;

    mqlLargeHandler = function(mql) {

        var dbCL = document.body;

        if (mql.matches) {
            if (dbCL) {
                dbCL.classList.remove('responsive-small');
                dbCL.classList.remove('responsive-medium');
                dbCL.classList.remove('page-navi-togglable');
                dbCL.classList.remove('page-navi-blocked');
                dbCL.classList.add('responsive-large');
            }
        }

    };

    mqlMediumLHandler = function(mql) {

        var dbCL = document.body;

        if (mql.matches) {
            if (dbCL) {
                dbCL.classList.remove('responsive-small');
                dbCL.classList.remove('responsive-large');
                dbCL.classList.add('page-navi-blocked');
                dbCL.classList.add('responsive-medium');
                dbCL.classList.add('page-navi-togglable');
            }
        }

    };

    mqlMediumHandler = function(mql) {

        var dbCL = document.body;

        if (mql.matches) {
            if (dbCL) {
                dbCL.classList.remove('responsive-small');
                dbCL.classList.remove('responsive-large');
                dbCL.classList.add('page-navi-blocked');
                dbCL.classList.add('responsive-medium');
                dbCL.classList.add('page-navi-togglable');
            }
        }

    };

    mqlSmallHandler = function(mql) {

        var dbCL = document.body;

        if (mql.matches) {
            if (dbCL) {
                dbCL.classList.remove('responsive-medium');
                dbCL.classList.remove('responsive-large');
                dbCL.classList.add('responsive-small');
                dbCL.classList.add('page-navi-togglable');
                dbCL.classList.add('page-navi-blocked');
            }
        }

    };

    mqlLarge.addListener(mqlLargeHandler); /* listen to responsive mode changes */
    mqlLargeHandler(mqlLarge); /* detect and set initial responsive state */

    mqlMediumL.addListener(mqlMediumLHandler); /* listen to responsive mode changes */
    mqlMediumLHandler(mqlMediumL); /* detect and set initial resposnive state */

    mqlMedium.addListener(mqlMediumHandler); /* listen to responsive mode changes */
    mqlMediumHandler(mqlMedium); /* detect and set initial resposnive state */

    mqlSmall.addListener(mqlSmallHandler); /* listen to responsive mode changes */
    mqlSmallHandler(mqlSmall); /* detect and set initial responsive state */

}

function doResponsiveThings() {

    var mqlLarge = window.matchMedia('(min-width: 1160px)'),
        mqlMediumL = window.matchMedia('(min-width: 864px) and (max-width: 1159px)'),
        mqlMedium = window.matchMedia('(min-width: 667px) and (max-width: 863px)'),
        mqlSmall = window.matchMedia('(max-width: 666px)'),
        largeMobileDeviceMode = window.ontouchstart,
        mqlLargeHandler, mqlMediumLHandler, mqlMediumHandler, mqlSmallHandler;

    /* can not use multiple parameters for classList add() and remove() because of IE11
     http://caniuse.com/#feat=classlist */

    mqlLargeHandler = function(mql) {

        var rwdGrid = document.querySelectorAll('.rwd-grid.grid-12, .rwd-grid.grid-disabled'),
            rwdGridN = document.querySelectorAll('.rwd-grid .rwd-grid.grid-12, .rwd-grid .rwd-grid.grid-disabled'),
            rwdGridQ = document.querySelectorAll('.rwd-grid.card-only-grid.grid-12 > .grid-03 + .grid-03 + .grid-03 + .grid-03, .rwd-grid.card-only-grid.grid-12 > .grid-03-doubled + .grid-03-doubled + .grid-03-doubled + .grid-03-doubled'),
            i;

        if (mql.matches) {
            if (rwdGrid.length) {
                for (i = 0; i < rwdGrid.length; i += 1) {
                    rwdGrid[i].classList.remove('grid-disabled');
                    rwdGrid[i].classList.add('grid-12');
                }
            }
            if (rwdGridQ.length) {
                for (i = 0; i < rwdGridQ.length; i += 1) {
                    for (var c = 0; c < rwdGridQ[i].parentNode.childNodes.length; c++) {
                        rwdGridQ[i].parentNode.childNodes[c].classList.remove('grid-03-doubled');
                    }
                }
            }
            if (rwdGridN.length) {
                for (i = 0; i < rwdGridN.length; i += 1) {
                    rwdGridN[i].classList.remove('grid-disabled');
                    rwdGridN[i].classList.add('grid-12');
                }
            }
        }

    };

    mqlMediumLHandler = function(mql) {

        var rwdGrid = document.querySelectorAll('.rwd-grid.grid-12, .rwd-grid.grid-disabled'),
            rwdGridN = document.querySelectorAll('.rwd-grid .rwd-grid.grid-12, .rwd-grid .rwd-grid.grid-disabled'),
            rwdGridQ = document.querySelectorAll('.rwd-grid.card-only-grid.grid-12 > .grid-03 + .grid-03 + .grid-03 + .grid-03, .rwd-grid.card-only-grid.grid-12 > .grid-03-doubled + .grid-03-doubled + .grid-03-doubled + .grid-03-doubled'),
            i;

        if (mql.matches) {
            if (rwdGrid.length) {
                for (i = 0; i < rwdGrid.length; i += 1) {
                    rwdGrid[i].classList.remove('grid-disabled');
                    rwdGrid[i].classList.add('grid-12');
                }
            }
            if (rwdGridQ.length) {
                for (i = 0; i < rwdGridQ.length; i += 1) {
                    for (var c = 0; c < rwdGridQ[i].parentNode.childNodes.length; c++) {
                        rwdGridQ[i].parentNode.childNodes[c].classList.remove('grid-03-doubled');
                    }
                }
            }
            if (rwdGridN.length) {
                for (i = 0; i < rwdGridN.length; i += 1) {
                    rwdGridN[i].classList.remove('grid-disabled');
                    rwdGridN[i].classList.add('grid-12');
                }
            }
        }

    };

    mqlMediumHandler = function(mql) {

        var rwdGrid = document.querySelectorAll('.rwd-grid.grid-12, .rwd-grid.grid-disabled'),
            rwdGridN = document.querySelectorAll('.rwd-grid .rwd-grid.grid-12, .rwd-grid .rwd-grid.grid-disabled'),
            rwdGridQ = document.querySelectorAll('.rwd-grid.card-only-grid.grid-12 > .grid-03 + .grid-03 + .grid-03 + .grid-03, .rwd-grid.card-only-grid.grid-12 > .grid-03-doubled + .grid-03-doubled + .grid-03-doubled + .grid-03-doubled'),
            i;

        if (mql.matches) {
            if (rwdGrid.length) {
                for (i = 0; i < rwdGrid.length; i += 1) {
                    rwdGrid[i].classList.remove('grid-disabled');
                    rwdGrid[i].classList.add('grid-12');
                }
            }
            if (rwdGridQ.length) {
                for (i = 0; i < rwdGridQ.length; i += 1) {
                    for (var c = 0; c < rwdGridQ[i].parentNode.childNodes.length; c++) {
                        rwdGridQ[i].parentNode.childNodes[c].classList.add('grid-03-doubled');
                    }
                }
            }
            if (rwdGridN.length) {
                for (i = 0; i < rwdGridN.length; i += 1) {
                    rwdGridN[i].classList.remove('grid-12');
                    rwdGridN[i].classList.add('grid-disabled');
                }
            }
        }

    };

    mqlSmallHandler = function(mql) {

        var rwdGrid = document.querySelectorAll('.rwd-grid.grid-12, .rwd-grid.grid-disabled'),
            rwdGridN = document.querySelectorAll('.rwd-grid .rwd-grid.grid-12, .rwd-grid .rwd-grid.grid-disabled'),
            rwdGridQ = document.querySelectorAll('.rwd-grid.card-only-grid.grid-12 > .grid-03 + .grid-03 + .grid-03 + .grid-03, .rwd-grid.card-only-grid.grid-12 > .grid-03-doubled + .grid-03-doubled + .grid-03-doubled + .grid-03-doubled'),
            i;

        if (mql.matches) {
            if (rwdGrid.length) {
                for (i = 0; i < rwdGrid.length; i += 1) {
                    rwdGrid[i].classList.remove('grid-12');
                    rwdGrid[i].classList.add('grid-disabled');
                }
            }
            if (rwdGridQ.length) {
                for (i = 0; i < rwdGridQ.length; i += 1) {
                    for (var c = 0; c < rwdGridQ[i].parentNode.childNodes.length; c++) {
                        rwdGridQ[i].parentNode.childNodes[c].classList.add('grid-03-doubled');
                    }
                }
            }
            if (rwdGridN.length) {
                for (i = 0; i < rwdGridN.length; i += 1) {
                    rwdGridN[i].classList.remove('grid-12');
                    rwdGridN[i].classList.add('grid-disabled');
                }
            }
        }

    };

    /* remove same height effect for IE10 and IE11 because of rendering issues for scaled images (e. g. all card visuals) */
    /* do not stress this code too much, keep it simple! */

    if (navigator.userAgent.indexOf('MSIE 10.0') !== -1 || (navigator.userAgent.indexOf('Trident') !== -1 && navigator.userAgent.indexOf('rv:11.0') !== -1)) {
        (function() {
            var equalHeightCollection = document.body.getElementsByClassName('equal-grid-height'),
                expandableCollection = document.body.getElementsByClassName('expandable');
            while (equalHeightCollection.length > 0) {
                equalHeightCollection[0].classList.remove('equal-grid-height');
            }
            while (expandableCollection.length > 0) {
                expandableCollection[0].classList.remove('expandable');
            }
        }());
    }

    /* we have to force large mobile devices to go into medium mode because only in medium and small mode
     specific css rules are played out which gets some stuff to work (i.e. touch- & scrollable left nav).
     we don't want this css to be palyed out in large mode because it would break some things on desktop/non-touch devices.
     so for now: large mode is kind of reserved for non-touch devices. */

    if (largeMobileDeviceMode) {

        /* force medium mode on touch devices with large px width */

        mqlLarge.addListener(mqlMediumLHandler); /* listen to responsive mode changes */
        mqlLargeHandler(mqlMediumL); /* detect and set initial responsive state */

    } else {

        /* standard */

        mqlLarge.addListener(mqlLargeHandler); /* listen to responsive mode changes */
        mqlLargeHandler(mqlLarge); /* detect and set initial responsive state */

    }

    /* standard */

    mqlMediumL.addListener(mqlMediumLHandler); /* listen to responsive mode changes */
    mqlMediumLHandler(mqlMediumL); /* detect and set initial resposnive state */

    mqlMedium.addListener(mqlMediumHandler); /* listen to responsive mode changes */
    mqlMediumHandler(mqlMedium); /* detect and set initial resposnive state */

    mqlSmall.addListener(mqlSmallHandler); /* listen to responsive mode changes */
    mqlSmallHandler(mqlSmall); /* detect and set initial responsive state */

}
let parts = document.location.pathname.substring(1).split('/'); let checkStateUrl = 'https://' + document.location.hostname + '/' + parts[0] + '/'; window.ionos_help.login.checkState(checkStateUrl);
window.ionos_help.globalnavigation.setup("us", "en_US.UTF-8");