this["JST"] = this["JST"] || {};

this["JST"]["audio-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'play-button-surround\'>\n    <div class=\'play-button\'>\n        <div class="play-glyph ';
 playing ? print('isPlaying') : print('isPaused') ;
__p += '">\n            ';
 playing ? print('<svg xmlns="http://www.w3.org/2000/svg" width="39.694" height="42.748" viewBox="0 0 39.694 42.748"><g ><path d="M13.687 9.32h4.32v18h-4.32zM21.687 9.32h4.32v18h-4.32z"/></g></svg>') : print('<svg xmlns="http://www.w3.org/2000/svg" width="39.694" height="42.748" viewBox="0 0 39.694 42.748"><path  d="M14.905 13.516l15.592 9.002-15.592 9.002z"/></svg>') ;
__p += '\n        </div>\n    </div>\n</div>\n<div class=\'controls tooltip clearfix\'>\n    <div class=\'';
 if (!(totalTracks -1 > trackNumber)) print("disabled ") ;
__p += ' prev move-button\'>\n        <svg xmlns="http://www.w3.org/2000/svg" width="39.693" height="42.748" viewBox="0 0 39.693 42.748"><g ><path d="M31.612 29.374L21.11 21.372l10.502-7.998zM21.67 29.374l-10.503-8.002 10.503-7.998zM8.083 13.694h3.555V29.05H8.083z"/></g></svg>\n    </div>\n    <div class=\'';
 if(trackNumber == 0) print("disabled ") ;
__p += ' next move-button\'>\n        <svg xmlns="http://www.w3.org/2000/svg" width="39.693" height="42.748" viewBox="0 0 39.693 42.748"><g ><path d="M8.083 13.374l10.503 8-10.503 8zM18.025 13.374l10.503 8-10.503 8zM28.058 13.696h3.555V29.05h-3.555z"/></g></svg>\n    </div>\n    <div class=\'scrubber\'>\n        <div class=\'scrubber-ticks left\'></div>\n        <div class=\'scrubber-ticks right\'></div>\n        <div class=\'scrubber-handle\'></div>\n    </div>\n    <div class=\'time\'>';
 print( AS.util.timeStringFromSeconds(currentDuration))  ;
__p += ' / ';
 print( AS.util.timeStringFromSeconds(totalDuration))  ;
__p += '</div>\n    <div class=\'arrow arrow-right\'></div>\n</div>';

}
return __p
};

this["JST"]["help-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div id="helpView">\n\n\t\t<div id="helpMenu">\n            <h2>' +
((__t = ( helpTitle )) == null ? '' : __t) +
'</h2>\n\n            <button class="help-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></button>\n\n\t\t    <ul id="helpMenuContainer">\n\n\t\t    \t<li><button data-action="help-bookmark" class="help-button ">' +
((__t = ( bookmarkTitle )) == null ? '' : __t) +
'</button></li>\n\t\t    \t<li><button data-action="help-toolbar" class="help-button">' +
((__t = ( toolbarTitle )) == null ? '' : __t) +
'</button></li>\n\t\t    \t<li><button data-action="help-scrubber" class="help-button ">' +
((__t = ( scrubTitle )) == null ? '' : __t) +
'</button></li>\n\t\t    \t';
 if( AS.config.get('features.timelineScrubber') === true ) { ;
__p += '\n\t\t    \t\t<li><button data-action="help-strip" class="help-button ">' +
((__t = ( stripTitle )) == null ? '' : __t) +
'</button></li>\n\t\t    \t';
 } ;
__p += '\n\t\t    \t<li><button data-action="help-moving" class="help-button ">' +
((__t = ( menuMoving )) == null ? '' : __t) +
'</button></li>\n\t\t    \t<li><button data-action="help-zoom" class="help-button ">' +
((__t = ( zoomTitle )) == null ? '' : __t) +
'</button></li>\n\n\n\t\t    </ul>\n\t\t</div>\n\n\t\t<div id="help-toolbar" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<h3>' +
((__t = ( toolbarTitle )) == null ? '' : __t) +
'</h3>\n\t\t\t\t' +
((__t = ( toolbarDescription )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="help-scrubber" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<h3>' +
((__t = ( scrubTitle )) == null ? '' : __t) +
'</h3>\n\t\t\t\t' +
((__t = ( scrubDescription )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="help-strip" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<h3>' +
((__t = ( stripTitle )) == null ? '' : __t) +
'</h3>\n\t\t\t\t' +
((__t = ( stripDescription )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div id="help-bookmark" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<h3>' +
((__t = ( bookmarkTitle )) == null ? '' : __t) +
'</h3>\n\t\t\t\t' +
((__t = ( bookmarkDescription )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="help-zoom" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<h3>' +
((__t = ( zoomTitle )) == null ? '' : __t) +
'</h3>\n\t\t\t\t' +
((__t = ( zoomDescription )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="help-moving" class="help-panel">\n\t\t\t<div class="padding">\n\t\t\t\t<div id="help-diagram" />\n\t\t\t\t<span class="key-up">' +
((__t = ( keyUp )) == null ? '' : __t) +
'</span>\n\t\t\t\t<span class="key-down">' +
((__t = ( keyDown )) == null ? '' : __t) +
'</span>\n\t\t\t\t<span class="key-left">' +
((__t = ( keyLeft )) == null ? '' : __t) +
'</span>\n\t\t\t\t<span class="key-right">' +
((__t = ( keyRight )) == null ? '' : __t) +
'</span>\n\t\t\t</div>\n\n\t\t\t<div class="help-sub-panel">\n\t\t\t\t<div class="padding">\n\t\t\t\t\t' +
((__t = ( moveContent )) == null ? '' : __t) +
'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="helpBackground"></div>\n\n</div>';

}
return __p
};

this["JST"]["ie9iframe-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if ( AS.util.isIE9() ) { ;
__p += '\n    <iframe id=\'ie9Frame\' src=\'' +
((__t = (  AS.config.get( 'app.auth.authProxy' ) )) == null ? '' : __t) +
'\'></iframe>\n';
 } ;


}
return __p
};

this["JST"]["issuepage-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n    <div class="page-content"></div>\n</div>';

}
return __p
};

this["JST"]["issueview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="issue">\n\n</div>';

}
return __p
};

this["JST"]["loader-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="loader-screen" class="loader-block">\n\n    <div class="holder">\n        <div class="loadMsg msg-loading">' +
((__t = ( "loading-message-loading".toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="loadMsg msg-rotate">' +
((__t = ( "loading-message-rotate".toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div id="loadingCircle" class="circle inner">\n            <div class="rotate">\n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" class="baseLoading">\n                    <circle cx="50px" cy="50px" r="80%" stroke="#00ADEF" stroke-width="3" fill="none"></circle>\n                </svg>\n\n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" class="baseLoader">\n                    <circle cx="50%" cy="50%" r="40%" stroke="#CCCCCC" stroke-width="3" fill="none"></circle>\n                </svg>\n            </div>\n        </div>\n        <div id="loadingCircle" class="circle outer"></div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["loadercustom-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="loader-screen" style="background-color:' +
((__t = ( backgroundColor )) == null ? '' : __t) +
'">\n    <div id="loading-logo">\n        <img id="loading-image">\n    </div>\n    <div id="loading-text">\n        <div class="message issueload" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'loading-message-issue'.toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="message loading" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'loading-message-loading'.toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="message not-available" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'issue-no-content'.toLocaleString() )) == null ? '' : __t) +
'</div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["issuelogin-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="issue-login" class="login popup">\n    <div class="popup-back"></div>\n    <div class="popup-content">\n        <header>\n            <h3>' +
((__t = ( "issue-login-title".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n        </header>\n        <section class="main">\n            <form id="login-form">\n                <p class="error-message"></p>\n                <div class="form-container">\n                    <input id=\'usernamefield\' name="username" type="text" autocapitalize="off"\n                           placeholder="' +
((__t = ( "username".toLocaleString() )) == null ? '' : __t) +
'">\n                    <input id=\'passwordfield\' name="password" type="password"\n                           placeholder="' +
((__t = ( "password".toLocaleString() )) == null ? '' : __t) +
'">\n                </div>\n                <footer class="surround">\n                    ';
 if ( config.passwordRequestUrl ) { ;
__p += '\n                        <a href="' +
((__t = ( config.passwordRequestUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "password-request".toLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    ';
 } ;
__p += '\n                    <input type="submit" value="' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'" class="btn btn-submit pull-right">\n                    <a id="cancel" class="btn btn-gray pull-right" href="javascript:;">\n                        ' +
((__t = ( "cancel".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                </footer>\n            </form>\n        </section>\n        ';
 if ( config.subscribeUrl ) { ;
__p += '\n            <footer class="surround">\n                <h3>' +
((__t = ( "issue-login-subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n                <a id="subcribe" href="' +
((__t = ( config.subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="btn btn-gray pull-right">\n                    ' +
((__t = ( "subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            </footer>\n        ';
 } ;
__p += '\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["storelogin-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="store-login" class="login popup">\n    <div class="popup-back"></div>\n    <div class="popup-content">\n        <header>\n            <h3>' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n        </header>\n        <section class="main">\n            <form id="login-form">\n                <p class="error-message"></p>\n                <div class="form-container">\n                    <input id=\'usernamefield\' name="username" type="text" autocapitalize="off"\n                           placeholder="' +
((__t = ( "username".toLocaleString() )) == null ? '' : __t) +
'">\n                    <input id=\'passwordfield\' name="password" type="password"\n                           placeholder="' +
((__t = ( "password".toLocaleString() )) == null ? '' : __t) +
'">\n                </div>\n                <input type="submit" value="' +
((__t = ( "login".toLocaleString() )) == null ? '' : __t) +
'" class="btn btn-submit pull-right invisible">\n                ';
 if ( config.passwordRequestUrl ) { ;
__p += '\n                    <footer class="surround">\n                        <a href="' +
((__t = ( config.passwordRequestUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "password-request".toLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    </footer>\n                ';
 } ;
__p += '\n            </form>\n        </section>\n        <footer>\n            <a id="cancel" class="btn btn-gray" href="javascript:;">\n                ' +
((__t = ( "cancel".toLocaleString() )) == null ? '' : __t) +
'\n            </a>\n            <a id="login" class="btn btn-submit" href="javascript:;" target="_blank">\n                ' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n            </a>\n        </footer>\n    </div>\n</div>';

}
return __p
};

this["JST"]["nocookies-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="no-cookies-screen" style="background-color:' +
((__t = ( loader.backgroundColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( cookieTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( cookieText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["nooffline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="no-offline-screen" style="background-color:' +
((__t = ( loaderColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loaderFontColor )) == null ? '' : __t) +
'">' +
((__t = ( offlineTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loaderFontColor )) == null ? '' : __t) +
'">' +
((__t = ( offlineText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["notification-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="notifications">\n    <div id="messageBar" class="">\n        <span class="inner-message"></span>\n        <div class="close"></div>\n    </div>\n    ';
 if ( AS.browser.ios ) { ;
__p += '\n    <div class="ios-home-screen">\n        <svg xmlns="http://www.w3.org/2000/svg" width="560" height="960" viewBox="0 0 560 960"><path d="M75 68H10V23h12.975s3.447-4.484 10.85-10H5c-2.762 0-5 2.238-5 5v55c0 2.762 2.238 5 5 5h75c2.762 0 5-2.238 5-5V54.268l-10 8.226V68zm-8.19-34.75V51L100 24.997 66.81 0v15.652C26.5 15.652 26.5 55.5 26.5 55.5c11.408-18.74 18.43-22.25 40.31-22.25z"/></svg>\n        Add this to your home screen\n        <span class="arrow"></span>\n    <div>\n    ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["offline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="offline-screen" style="background-color:' +
((__t = ( loader.backgroundColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( offlineTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( offlineText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["pagelistview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="pagelistview">\n    <div id="pagelist"></div>\n    ';
 if ( AS.config.get('features.pageNavigation') ) { ;
__p += '\n\t\t<button class="left-arrow"></button>\n\t\t<button class="right-arrow"></button>\n\t';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["geolocation-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n        <div class="popupHolder">\n            <div id="mapCanvas"></div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["popupvideo-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n    \t<div class="pv-closeButtonHolder">\n\t\t\t<a class="pv-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></a>\n\t\t</div>\n        <div class="popupHolder">\n                <video controls="true" class="hide" id="modelvideo"></video>\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["zoomableimage-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n\t\t<div class="zw-closeButtonHolder">\n\t\t\t<a class="zw-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></a>\n\t\t</div>\n        <div class="popupHolder zoom-widget">\n            <img>\n            <div class="centred spinner"></div>\n        </div>\n    </div>\n\n</div>\n\n';

}
return __p
};

this["JST"]["navigationwrapper-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="navigation-wrapper"></div>';

}
return __p
};

this["JST"]["scrubberpagenos-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pageID pull-left">' +
((__t = ( startPage )) == null ? '' : __t) +
'</div>\n<div class="pageID pull-right">' +
((__t = ( endPage )) == null ? '' : __t) +
'</div>';

}
return __p
};

this["JST"]["scrubberthumbnail-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="thumbnail" data-index="' +
((__t = ( index )) == null ? '' : __t) +
'">\n    <img src="' +
((__t = ( thumbnail )) == null ? '' : __t) +
'">\n    ';
 if ( article.title ) { ;
__p += '\n        <span class="page-title">' +
((__t = ( article.title )) == null ? '' : __t) +
'</span>\n    ';
 } ;
__p += '\n    <span class="page-index">' +
((__t = ( index + 1 )) == null ? '' : __t) +
'</span>\n</li>';

}
return __p
};

this["JST"]["scrubberthumbnailgroup-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="thumbnail-group">\n    <h5 class="thumbnail-group-title"><span class="title">' +
((__t = ( name.toLocaleString() )) == null ? '' : __t) +
'</span></h5>\n    <ul class="thumbnail-list" style="border-top-color: ' +
((__t = ( colour )) == null ? '' : __t) +
'"></ul>\n</li>';

}
return __p
};

this["JST"]["scrubbertick-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tick">\n    <span class="tick-inner"></span>\n</div>';

}
return __p
};

this["JST"]["scrubbertimeline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="scrubber-timeline">\n    <ul id="scrubber-timeline-list"></ul>\n</div>';

}
return __p
};

this["JST"]["scrubberview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="scrubber-wrapper">\n    <button class=\'home-button\'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" enable-background="new 0 0 36 36"><style type="text/css">.st0{fill:#676767;}</style><path class="st0" d="M17.8 1.7L1 18.5v16.7h13.1V24h7.4v11.2h13V18.5z"/></svg></button>\n    <button class=\'end-button\'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" enable-background="new 0 0 36 36"><style type="text/css">.st0{fill:#676767;}</style><path class="st0" d="M32.4 4.2v27.4c0 1.7-1.5 3.2-3.2 3.2-1.7 0-3.2-1.5-3.2-3.2V4.4c0-1.7 1.5-3.2 3.2-3.2 1.8-.1 3.2 1.3 3.2 3zM17 20.2L4.7 8c-1.2-1.2-1.2-3.3 0-4.5 1.2-1.2 3.3-1.2 4.5 0l12.2 12.2c1.2 1.2 1.2 3.3 0 4.5-1.2 1.3-3.2 1.2-4.4 0zM21.5 20.3L9.2 32.5c-1.2 1.2-3.3 1.2-4.5 0-1.2-1.2-1.2-3.3 0-4.5L17 15.8c1.2-1.2 3.3-1.2 4.5 0 1.3 1.3 1.2 3.3 0 4.5z"/></svg></button>\n\n    <div id="scrubber">\n        <div class="ticks">\n        </div>\n        <div id="scrubber-thumb"></div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["touchscrubberview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="scrubber-wrapper">\n\t<button class=\'home-button\'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" enable-background="new 0 0 36 36"><style type="text/css">.st0{fill:#676767;}</style><path class="st0" d="M17.8 1.7L1 18.5v16.7h13.1V24h7.4v11.2h13V18.5z"/></svg></button>\n    <button class=\'end-button\'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" enable-background="new 0 0 36 36"><style type="text/css">.st0{fill:#676767;}</style><path class="st0" d="M32.4 4.2v27.4c0 1.7-1.5 3.2-3.2 3.2-1.7 0-3.2-1.5-3.2-3.2V4.4c0-1.7 1.5-3.2 3.2-3.2 1.8-.1 3.2 1.3 3.2 3zM17 20.2L4.7 8c-1.2-1.2-1.2-3.3 0-4.5 1.2-1.2 3.3-1.2 4.5 0l12.2 12.2c1.2 1.2 1.2 3.3 0 4.5-1.2 1.3-3.2 1.2-4.4 0zM21.5 20.3L9.2 32.5c-1.2 1.2-3.3 1.2-4.5 0-1.2-1.2-1.2-3.3 0-4.5L17 15.8c1.2-1.2 3.3-1.2 4.5 0 1.3 1.3 1.2 3.3 0 4.5z"/></svg></button>\n    <div id="scrubber">\n        <div class="ticks">\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["settings-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="settings">\n\n\t<div id="settings-menu">\n        <h2>' +
((__t = ( settingsTitle )) == null ? '' : __t) +
'</h2>\n        <button class="settings-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></button>\n\t    <ul id="settings-menu-list">\n\n\t    \t<li><button class="settings-button selected">Offline Options</button></li>\n\n\t    </ul>\n\t</div>\n\n\t<div class="settings-panel">\n\n\t\t<h3>Offline Capabilities</h3>\n\t\t<div class="padding">\n\t\t\t<p>Would you like to use your browers offline capabilities to save issues to read at a later date when you may not have any internet access.</p>\n\n\t\t\t<div class="options-display">\n\t\t\t\t<div class="options" data-option="0">\n\t\t\t\t\t<span data-option="0" >Off</span><span data-option="1" >On</span>\n\t\t\t\t</div>\n\t\t\t\t<label>Turn offline options on or off</label>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t</div>\n\n</div>';

}
return __p
};

this["JST"]["sharing-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div style="height:40px;position:absolute;padding-right:20px;display:none;">\n<div class=\'tooltip sharingtooltip\' style="position:relative;">\n    <div id="toolbox" class="addthis_toolbox">\n        <div class="sharing_icons">';
 if ( AS.config.get('sharing.options.emailShare') ) { ;
__p += '<a class="addthis_button_email"><div class="icon email"></div></a>';
 } ;

 if ( AS.config.get('sharing.options.linkedinShare') ) { ;
__p += '<a class="addthis_button_linkedin"><div class="icon linkedin"></div></a>';
 } ;

 if ( AS.config.get('sharing.options.twitterShare') ) { ;
__p += '<a class="addthis_button_twitter"><div class="icon twitter"></div></a>';
 } ;

 if ( AS.config.get('sharing.options.facebookShare') ) { ;
__p += '<a class="at300b"><div class="icon facebook"></div></a>';
 } ;
__p += '\n        </div>\n    </div>\n    <div class=\'arrow arrow-right\'></div>\n</div>\n</div>';

}
return __p
};

this["JST"]["storebanner-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner" style="height:' +
((__t = ( bannerHeight )) == null ? '' : __t) +
'px;">\n    <iframe style="height:' +
((__t = ( bannerHeight )) == null ? '' : __t) +
'px;" src="' +
((__t = ( bannerSrc )) == null ? '' : __t) +
'"></iframe>\n</div>';

}
return __p
};

this["JST"]["storefooter-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<footer title="' +
((__t = ( timestamp )) == null ? '' : __t) +
'">\n    <small>\n        Powered by <span class="appstudio-logo"></span>\n        Version ' +
((__t = ( version )) == null ? '' : __t);
 if ( branch ) { ;
__p += ' (' +
((__t = ( branch )) == null ? '' : __t) +
'-' +
((__t = ( buildNumber )) == null ? '' : __t) +
')';
 } ;
__p += '\n    </small>\n</footer>';

}
return __p
};

this["JST"]["storeheader-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<header>\n    <div class=\'store-greeting\'>\n        <h1 class=\'tight\'>' +
((__t = ( greeting )) == null ? '' : __t) +
'</h1>\n        ';
 if ( summary ) { ;
__p += '\n            <p id=\'lorem\'>' +
((__t = ( summary )) == null ? '' : __t) +
'</p>\n        ';
 } ;
__p += '\n    </div>\n    <div class="store-tools">\n\n        <div id="fullscr"\n                data-ttip-width="160"\n                data-ttip-side="bottom"\n                data-ttip-align="right"\n                data-ttip-text-align="left" >\n            <svg xmlns="http://www.w3.org/2000/svg" width="26.083" height="24.167" viewBox="0 0 26.083 24.167"><g ><path d="M16.402 6.052l-3.26 3.26 2.322 2.32 3.26-3.258 2.45 2.45.515-7.74-7.74.517zM6.656 15.795l3.26-3.26 2.323 2.323-3.26 3.26 2.45 2.45-7.74.516.515-7.74z"/></g></svg>\n        </div>\n        ';
 if ( AS.browser.ios || AS.browser.android || AS.browser.kindle ) { ;
__p += '\n            <button id="get-app">\n                ' +
((__t = ( "downloadApp".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n            </button>\n        ';
 } ;
__p += '\n        ';
 if ( AS.AuthProxy.enabled && isConnected && AS.AuthProxy.level !== 'publication' ) { ;
__p += '\n            <div class="actions">\n                ';
 if ( !AS.Session.authenticated ) { ;
__p += '\n                    <a id="login-button" href="javascript:;">\n                        ' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                    ';
 if ( AS.config.get('app.auth.subscribeUrl') !== '' ) { ;
__p += '\n                        <a id="subscribe-button" href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    ';
 } ;
__p += '\n                ';
 } else { ;
__p += '\n                    <p>' +
((__t = ("logged-in".toLocaleString() )) == null ? '' : __t) +
'\n                        <span>' +
((__t = ( username )) == null ? '' : __t) +
'</span>\n                    </p>\n                    <a id="logout-button" href="javascript:;">\n                        ' +
((__t = ( "logout".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } ;
__p += '\n            </div>\n        ';
 } ;
__p += '\n        ';
 if (offline) { ;
__p += '\n            <div id="btnLibrary" class="' +
((__t = ( activeClass )) == null ? '' : __t) +
'"\n                        data-ttip-width="160"\n                        data-ttip-side="bottom"\n                        data-ttip-align="right"\n                        data-ttip-text-align="left" >\n                <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.117 144.635l121.356-40.716 101.792 303.39-121.356 40.717zM0 448h128V96H0v352zm32-288h64v32H32v-32zm128 288h128V96H160v352zm32-288h64v32h-64v-32z"/></svg>\n            </div>\n        ';
 } ;
__p += '\n    </div>\n</header>\n';

}
return __p
};

this["JST"]["storeissue-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="issue">\n\n    <div class="thumb">\n        <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="image-loader">\n            <img src="' +
((__t = ( imageSrc )) == null ? '' : __t) +
'" />\n        </a>\n    </div>\n\n    <div class="info">\n        <a class="h2" href=\'#issue/' +
((__t = ( id )) == null ? '' : __t) +
'\'>' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n        ';
 if ( false ) { ;
__p += '\n            <p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n        ';
 } ;
__p += '\n        <div class="ctrl">\n            ';
 if ( viewable ) { ;
__p += '\n                <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="store-link">\n                    ' +
((__t = ( "view".toLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            ';
 } else { ;
__p += '\n                <a href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="store-link">\n                    ' +
((__t = ( "subscribe".toLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n\n</li>\n';

}
return __p
};

this["JST"]["storeissuecontainer-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section>\n    <section id=\'promotedIssue\'></section>\n\n    <section id=\'externalBanner\'></section>\n\n    <section id=\'standardIssue\'>\n        <ul id="issueContainer"></ul>\n\n    </section>\n\n    <div id="more" class="spinMe">\n        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="1.7 1 60 60" enable-background="new 1.7 1 60 60"><style type="text/css">.spinner0{opacity:0.5;enable-background:new ;} .st1{opacity:0.25;enable-background:new ;} .st2{opacity:0.65;enable-background:new ;} .st3{opacity:0.2;enable-background:new ;} .st4{opacity:0.6;enable-background:new ;} .st5{opacity:0.8;enable-background:new ;} .st6{opacity:0.45;enable-background:new ;} .st7{opacity:0.15;enable-background:new ;} .st8{opacity:0.55;enable-background:new ;} .st9{opacity:0.7;enable-background:new ;} .st10{opacity:0.35;enable-background:new ;}</style><g id="Spinners"><path class="spinner0" d="M34.7 13c0 1.7-1.3 3-3 3s-3-1.3-3-3V4c0-1.7 1.3-3 3-3s3 1.3 3 3v9z"/><path d="M34.7 58c0 1.7-1.3 3-3 3s-3-1.3-3-3v-9c0-1.7 1.3-3 3-3s3 1.3 3 3v9z"/><path class="st1" d="M13.7 28c1.7 0 3 1.3 3 3s-1.3 3-3 3h-9c-1.7 0-3-1.3-3-3s1.3-3 3-3h9z"/><path class="st2" d="M58.7 28c1.7 0 3 1.3 3 3s-1.3 3-3 3h-9c-1.7 0-3-1.3-3-3s1.3-3 3-3h9z"/><path class="st3" d="M14.6 37.4c1.4-.8 3.3-.3 4.1 1.1.8 1.4.3 3.3-1.1 4.1l-7.8 4.5c-1.4.8-3.3.3-4.1-1.1-.8-1.4-.3-3.3 1.1-4.1l7.8-4.5z"/><path class="st4" d="M53.6 14.9c1.4-.8 3.3-.3 4.1 1.1.8 1.4.3 3.3-1.1 4.1l-7.8 4.5c-1.4.8-3.3.3-4.1-1.1-.8-1.4-.3-3.3 1.1-4.1l7.8-4.5z"/><path class="st5" d="M38.1 48.1c-.8-1.4-.3-3.3 1.1-4.1 1.4-.8 3.3-.3 4.1 1.1l4.5 7.8c.8 1.4.3 3.3-1.1 4.1-1.4.8-3.3.3-4.1-1.1l-4.5-7.8z"/><path class="st6" d="M15.6 9.1c-.8-1.4-.3-3.3 1.1-4.1 1.4-.8 3.3-.3 4.1 1.1l4.5 7.8c.8 1.4.3 3.3-1.1 4.1-1.4.8-3.3.3-4.1-1.1l-4.5-7.8z"/><path class="st7" d="M20.1 45.1c.8-1.4 2.7-1.9 4.1-1.1 1.4.8 1.9 2.7 1.1 4.1l-4.5 7.8c-.8 1.4-2.7 1.9-4.1 1.1-1.4-.8-1.9-2.7-1.1-4.1l4.5-7.8z"/><path class="st8" d="M42.6 6.1c.8-1.4 2.7-1.9 4.1-1.1 1.4.8 1.9 2.7 1.1 4.1l-4.5 7.8c-.8 1.4-2.7 1.9-4.1 1.1-1.4-.8-1.9-2.7-1.1-4.1l4.5-7.8z"/><path class="st9" d="M45.8 42.6c-1.4-.8-1.9-2.7-1.1-4.1.8-1.4 2.7-1.9 4.1-1.1l7.8 4.5c1.4.8 1.9 2.7 1.1 4.1-.8 1.4-2.7 1.9-4.1 1.1l-7.8-4.5z"/><path class="st10" d="M6.8 20.1c-1.4-.8-1.9-2.7-1.1-4.1.8-1.4 2.7-1.9 4.1-1.1l7.8 4.5c1.4.8 1.9 2.7 1.1 4.1-.8 1.4-2.7 1.9-4.1 1.1l-7.8-4.5z"/></g></svg>\n    </div>\n\n</section>\n';

}
return __p
};

this["JST"]["storepromotion-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="jumbotron">\n    <div class="background-container"></div>\n    <div class="content-container">\n        <div class="thumb">\n            <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'">\n                <img src="' +
((__t = ( imageSrc )) == null ? '' : __t) +
'" />\n            </a>\n        </div>\n        <div class="info">\n            <h2><a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" title="' +
((__t = ( title )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a></h2>\n            <p title="' +
((__t = ( description )) == null ? '' : __t) +
'">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n            <div class="ctrl">\n                ';
 if ( viewable ) { ;
__p += '\n                    <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="store-link">\n                        ' +
((__t = ( "view".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } else { ;
__p += '\n                    <a href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="store-link">\n                        ' +
((__t = ( "subscribe".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["toc-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="toc" class="tocWrapper">\n    <ul class="tocContainer"></ul>\n    <div id="tocSwipeHandle">\n        <svg xmlns="http://www.w3.org/2000/svg" width="26.083" height="24.167" viewBox="0 0 26.083 24.167"><g ><circle cx="5.344" cy="12.084" r="2.303"/><circle cx="13.041" cy="12.084" r="2.303"/><path d="M23.042 12.084c0 1.272-1.028 2.302-2.304 2.302-1.27 0-2.303-1.03-2.303-2.302 0-1.273 1.03-2.304 2.303-2.304 1.276 0 2.304 1.03 2.304 2.304z"/></g></svg>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["tocitem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'tocColour\' style=\'background-color:' +
((__t = ( colour )) == null ? '' : __t) +
';\'></div>\n<button class="sectionHeader">' +
((__t = ( name.toLocaleString() )) == null ? '' : __t) +
'</button>\n<ul class="sectionItems">\n\n</ul>';

}
return __p
};

this["JST"]["tocsubitem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button class="goToArticle" data-target="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\t';
 if ( imageShow ){ ;
__p += '\n\t<img src="' +
((__t = ( image )) == null ? '' : __t) +
'"/>\n\t';
 } ;
__p += '\n\t<span class="articleTitle">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\n\t';
 if ( descriptionShow ) { ;
__p += '\n\t<span class="articleDescription">' +
((__t = ( description )) == null ? '' : __t) +
'' +
((__t = ( page )) == null ? '' : __t) +
'</span>\n\t';
 } ;
__p += '\n</button>';

}
return __p
};

this["JST"]["toolbar-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="toolbarWrapper" class="floatRight">\n    <ul id="toolbarContainer">\n\n    </ul>\n    <ul id="toolbarContainerMore">\n\n    </ul>\n</div>';

}
return __p
};

this["JST"]["toolbaritem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="toolbarItem" data-action="' +
((__t = ( buttonAction )) == null ? '' : __t) +
'" data-ttip-side="left" style=\'position:realtive;\'>\n    <button class="' +
((__t = ( cssClass )) == null ? '' : __t) +
'">\n    \t' +
((__t = ( svgData )) == null ? '' : __t) +
'\n\t</button>\n</li>';

}
return __p
};

this["JST"]["tooltip-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'tooltip transparent\'>\n    <span class=\'tooltip-content\'>' +
((__t = ( content )) == null ? '' : __t) +
'</span>\n    <div class=\'arrow\'></div>\n</div>';

}
return __p
};

this["JST"]["ttip-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="ttip">\n    <span class=\'tooltip-content\'></span>\n    <div class=\'arrow\'></div>\n    <div class=\'inner-arrow\'></div>\n</div>';

}
return __p
};

this["JST"]["unsupported-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="unsupported" class="container">\n\n    <div class="info">\n        <h1>' +
((__t = ( "non-supported-browser-title".toLocaleString() )) == null ? '' : __t) +
'</h1>\n        <p>' +
((__t = ( "non-supported-browser-info".toLocaleString() )) == null ? '' : __t) +
'</p>\n        <p>' +
((__t = ( "browser-recommendation".toLocaleString() )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <div>\n        <a href="http://windows.microsoft.com/en-GB/internet-explorer/download-ie" class="browser">\n            <img src="webreader/images/browsers/64-ie.png" alt="Internet Explorer" />\n            <p>' +
((__t = ( "ie9".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://www.google.com/chrome" class="browser">\n            <img src="webreader/images/browsers/64-chrome.png" alt="Chrome" />\n            <p>' +
((__t = ( "chrome".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://getfirefox.com" class="browser">\n            <img src="webreader/images/browsers/64-firefox.png" alt="Firefox" />\n            <p>' +
((__t = ( "firefox".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://www.apple.com/uk/safari/" class="browser">\n            <img src="webreader/images/browsers/64-safari.png" alt="Safari" />\n            <p>' +
((__t = ( "safari".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["zoomview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="zoombar">\n\t<ul id="zoomviewContainer">\n\n    </ul>\n</div>';

}
return __p
};