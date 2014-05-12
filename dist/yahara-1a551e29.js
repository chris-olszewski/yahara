Ember.TEMPLATES.albums=Ember.Handlebars.template(function(e,t,s,a,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var r;r=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),n.buffer.push(r||0===r?r:"")}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){t.buffer.push('<img src="/assets/images/logo-horiz.png">')}function o(e,t){t.buffer.push("About")}function h(e,t){t.buffer.push("Catalog")}function l(e,t){var a,n,r,o="";return t.buffer.push("\n        <li>"),n=s["link-to"]||e&&e["link-to"],r={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(8,i,t),contexts:[e],types:["STRING"],data:t},a=n?n.call(e,"collection",r):m.call(e,"link-to","collection",r),(a||0===a)&&t.buffer.push(a),t.buffer.push('</li>\n         <li><a href="/logout" '),t.buffer.push(y(s.action.call(e,"signOut",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(">Logout</a></li>\n        "),o}function i(e,t){t.buffer.push("Your Collection")}function u(e,t){var a="";return t.buffer.push('\n         <li><a href="/login" '),t.buffer.push(y(s.action.call(e,"openModal",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(">Login</a></li>\n        "),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var c,p,f,d="",b=this,m=s.helperMissing,y=this.escapeExpression;return n.buffer.push(y((p=s.headTitle||t&&t.headTitle,f={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n},p?p.call(t,"Yahara Music Library",f):m.call(t,"headTitle","Yahara Music Library",f)))),n.buffer.push("\n\n"),n.buffer.push(y((p=s.render||t&&t.render,f={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n},p?p.call(t,"player",f):m.call(t,"render","player",f)))),n.buffer.push('\n\n<div id="content">\n  <div id="header">\n    <div id=\'logo\'>\n      '),p=s["link-to"]||t&&t["link-to"],f={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(1,r,n),contexts:[t],types:["STRING"],data:n},c=p?p.call(t,"albums",f):m.call(t,"link-to","albums",f),(c||0===c)&&n.buffer.push(c),n.buffer.push('\n    </div>\n    <div id="nav">\n      <ul class="menu">\n        <li>'),p=s["link-to"]||t&&t["link-to"],f={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(3,o,n),contexts:[t,t],types:["STRING","STRING"],data:n},c=p?p.call(t,"page","about",f):m.call(t,"link-to","page","about",f),(c||0===c)&&n.buffer.push(c),n.buffer.push("</li>\n        <li>"),p=s["link-to"]||t&&t["link-to"],f={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(5,h,n),contexts:[t],types:["STRING"],data:n},c=p?p.call(t,"albums",f):m.call(t,"link-to","albums",f),(c||0===c)&&n.buffer.push(c),n.buffer.push("</li>\n        "),c=s["if"].call(t,"authorized",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(10,u,n),fn:b.program(7,l,n),contexts:[t],types:["ID"],data:n}),(c||0===c)&&n.buffer.push(c),n.buffer.push('\n      </ul>\n    </div>\n    <div id="mobile-nav" class="small-12 columns">\n      <ul class="mobile-menu">\n        <li>'),p=s["link-to"]||t&&t["link-to"],f={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(5,h,n),contexts:[t],types:["STRING"],data:n},c=p?p.call(t,"albums",f):m.call(t,"link-to","albums",f),(c||0===c)&&n.buffer.push(c),n.buffer.push("</li>\n        "),c=s["if"].call(t,"authorized",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(10,u,n),fn:b.program(7,l,n),contexts:[t],types:["ID"],data:n}),(c||0===c)&&n.buffer.push(c),n.buffer.push("\n      </ul>\n    </div>\n  "),n.buffer.push(y((p=s.render||t&&t.render,f={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n},p?p.call(t,"search",f):m.call(t,"render","search",f)))),n.buffer.push('\n</div>\n  <div class="row">\n    <div class="small-12 columns">\n      <div id="divider">\n      </div>\n    </div>\n  </div>\n  '),c=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(c||0===c)&&n.buffer.push(c),n.buffer.push('\n  <div id="footer">\n    '),c=s._triageMustache.call(t,"y-toplink",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(c||0===c)&&n.buffer.push(c),n.buffer.push("\n  </div>\n</div>\n\n"),n.buffer.push(y((p=s.render||t&&t.render,f={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n},p?p.call(t,"modal",f):m.call(t,"render","modal",f)))),n.buffer.push("\n"),d}),Ember.TEMPLATES.artist=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n="";return t.buffer.push("\n      "),a=s._triageMustache.call(e,"bio",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n    "),n}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var o,h,l,i="",u=this.escapeExpression,c=this,p=s.helperMissing;return n.buffer.push("<div id=\"artist\">\n  <div class='artist-header'>\n    <img "),n.buffer.push(u(s["bind-attr"].call(t,{hash:{src:"banner_image"},hashTypes:{src:"STRING"},hashContexts:{src:t},contexts:[],types:[],data:n}))),n.buffer.push("/>\n    <h1 class='artist-name'>"),o=s._triageMustache.call(t,"name",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("</h1>\n  </div>\n  <div class='info'>\n    "),h=s["y-block"]||t&&t["y-block"],l={hash:{title:"Biography",expanded:"true"},hashTypes:{title:"STRING",expanded:"STRING"},hashContexts:{title:t,expanded:t},inverse:c.noop,fn:c.program(1,r,n),contexts:[],types:[],data:n},o=h?h.call(t,l):p.call(t,"y-block",l),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n  </div>\n</div>\n"),i}),Ember.TEMPLATES.collection=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n,r="";return t.buffer.push("\n        "),t.buffer.push(i((a=s.render||e&&e.render,n={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t},a?a.call(e,"list/album","album",n):l.call(e,"render","list/album","album",n)))),t.buffer.push("\n      "),r}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var o,h="",l=s.helperMissing,i=this.escapeExpression,u=this;return n.buffer.push('<div class="row">\n  <div class="small-12 columns">\n    <ul id=\'catalog\'>\n      '),o=s.each.call(t,"album","in","content",{hash:{},hashTypes:{},hashContexts:{},inverse:u.noop,fn:u.program(1,r,n),contexts:[t,t,t],types:["ID","ID","ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n    </ul>\n  </div>\n</div>\n"),h}),Ember.TEMPLATES.modal=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){t.buffer.push('\n      <div class="flash-login">\n        <i class ="flash-icon ion-alert"></i><p>Please enter a valid library ID\n        <br>(instructions on where to look for it?)</p>\n      </div>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var o,h,l,i="",u=this.escapeExpression,c=this,p=s.helperMissing;return n.buffer.push('<div id=\'modal\'>\n  <div class="reveal-modal-bg" style="display: block;" '),n.buffer.push(u(s.action.call(t,"close",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push('></div>\n  <div class="reveal-modal" data-reveal="" style="visibility: visible; display: block; opacity: 1;">\n    <h2>Woah there!</h2>\n    <p>We\'ll need you to give us some more information before you can access that page</p>\n    '),o=s["if"].call(t,"currentUser.error",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,r,n),contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n    <p>"),n.buffer.push(u((h=s.input||t&&t.input,l={hash:{id:"card-number",value:"currentUser.cardnumber",placeholder:"Card Number"},hashTypes:{id:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{id:t,value:t,placeholder:t},contexts:[],types:[],data:n},h?h.call(t,l):p.call(t,"input",l)))),n.buffer.push("</p>\n    <p>"),n.buffer.push(u((h=s.input||t&&t.input,l={hash:{id:"password",value:"currentUser.password",placeholder:"Password"},hashTypes:{id:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{id:t,value:t,placeholder:t},contexts:[],types:[],data:n},h?h.call(t,l):p.call(t,"input",l)))),n.buffer.push("</p>\n    <button class='login' "),n.buffer.push(u(s.action.call(t,"submit",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}))),n.buffer.push('>Submit</button>\n    <a class="close-reveal-modal" '),n.buffer.push(u(s.action.call(t,"close",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push(">×</a>\n  </div>\n</div>\n"),i}),Ember.TEMPLATES.page=Ember.Handlebars.template(function(e,t,s,a,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var r="",o=this.escapeExpression;return n.buffer.push('<div class="row">\n  <div class="small-12 columns">\n    '),n.buffer.push(o(s._triageMustache.call(t,"html",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:t},contexts:[t],types:["ID"],data:n}))),n.buffer.push("\n  </div>\n</div>\n"),r}),Ember.TEMPLATES.player=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n,r,p="";return t.buffer.push('\n  <div id="player">\n    <div class="previous-track">\n      '),a=s["if"].call(e,"previousTrack",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(4,h,t),fn:b.program(2,o,t),contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push('\n    </div>\n    <div class="current-track">\n      <div class="album">\n        <img class=\'art\' '),t.buffer.push(d(s["bind-attr"].call(e,{hash:{src:"album.art"},hashTypes:{src:"STRING"},hashContexts:{src:e},contexts:[],types:[],data:t}))),t.buffer.push(">\n        <div class='title'>"),a=s._triageMustache.call(e,"album.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n        <div class='artist'>"),a=s._triageMustache.call(e,"album.artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n        "),a=s._triageMustache.call(e,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push('\n      </div>\n      <div class="album-mobile">\n        '),n=s["link-to"]||e&&e["link-to"],r={hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(6,l,t),contexts:[e,e],types:["STRING","ID"],data:t},a=n?n.call(e,"albums.show","album",r):m.call(e,"link-to","albums.show","album",r),(a||0===a)&&t.buffer.push(a),t.buffer.push('\n      </div>\n      <div class="controls">\n        <i class="icon ion-ios7-rewind" '),t.buffer.push(d(s.action.call(e,"play","previousTrack",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push("></i>\n        "),a=s["if"].call(e,"playing",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(10,u,t),fn:b.program(8,i,t),contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push('\n        <i class="icon ion-ios7-fastforward" '),t.buffer.push(d(s.action.call(e,"play","nextTrack",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push('></i>\n        <div class="position">\n          <div '),t.buffer.push(d(s["bind-attr"].call(e,{hash:{style:"pctStyle"},hashTypes:{style:"STRING"},hashContexts:{style:e},contexts:[],types:[],data:t}))),t.buffer.push('></div>\n        </div>\n      </div>\n    </div>\n\n    <div class="next-track">\n      '),a=s["if"].call(e,"nextTrack",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(4,h,t),fn:b.program(12,c,t),contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push('\n    </div>\n  </div>\n  <div id="player-shadow">\n  </div>\n'),p}function o(e,t){var a,n="";return t.buffer.push("\n        <div class=\"album\">\n          <img class='art' "),t.buffer.push(d(s["bind-attr"].call(e,{hash:{src:"previousTrack.album.art"},hashTypes:{src:"STRING"},hashContexts:{src:e},contexts:[],types:[],data:t}))),t.buffer.push(">\n          <div class='title'>"),a=s._triageMustache.call(e,"previousTrack.album.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n          <div class='artist'>"),a=s._triageMustache.call(e,"previousTrack.album.artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n          "),a=s._triageMustache.call(e,"previousTrack.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n        </div>\n      "),n}function h(e,t){t.buffer.push("\n        &nbsp;\n      ")}function l(e,t){var a,n="";return a=s._triageMustache.call(e,"album.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push(" - "),a=s._triageMustache.call(e,"album.artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push(" - "),a=s._triageMustache.call(e,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),n}function i(e,t){var a="";return t.buffer.push('\n          <i class="icon ion-ios7-pause" '),t.buffer.push(d(s.action.call(e,"toggle",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("></i>\n        "),a}function u(e,t){var a="";return t.buffer.push('\n          <i class="icon ion-ios7-play" '),t.buffer.push(d(s.action.call(e,"toggle",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("></i>\n        "),a}function c(e,t){var a,n="";return t.buffer.push("\n        <div class=\"album\">\n          <img class='art' "),t.buffer.push(d(s["bind-attr"].call(e,{hash:{src:"nextTrack.album.art"},hashTypes:{src:"STRING"},hashContexts:{src:e},contexts:[],types:[],data:t}))),t.buffer.push(">\n          <div class='title'>"),a=s._triageMustache.call(e,"nextTrack.album.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n          <div class='artist'>"),a=s._triageMustache.call(e,"nextTrack.album.artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n          "),a=s._triageMustache.call(e,"nextTrack.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n        </div>\n      "),n}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var p,f="",d=this.escapeExpression,b=this,m=s.helperMissing;return p=s["if"].call(t,"content",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(1,r,n),contexts:[t],types:["ID"],data:n}),(p||0===p)&&n.buffer.push(p),n.buffer.push("\n"),f}),Ember.TEMPLATES.search=Ember.Handlebars.template(function(e,t,s,a,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var r,o,h="",l=s.helperMissing,i=this.escapeExpression;return n.buffer.push('<div class="small-12 large-4 medium-6 columns large-offset-2">\n  '),n.buffer.push(i((r=s.input||t&&t.input,o={hash:{id:"search",placeholder:"SEARCH CATALOG",value:"searchString"},hashTypes:{id:"STRING",placeholder:"STRING",value:"ID"},hashContexts:{id:t,placeholder:t,value:t},contexts:[],types:[],data:n},r?r.call(t,o):l.call(t,"input",o)))),n.buffer.push('\n  <div class="spyglass"><img src="/assets/images/spyglass_grey.png"></div>\n</div>\n'),h}),Ember.TEMPLATES["albums/index"]=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){t.buffer.push("\n      <p>No results found. Please try searching for something different</p>\n    ")}function o(e,t){var a,n="";return t.buffer.push("\n      <ul id='catalog'>\n        "),a=s.each.call(e,"album","in","filteredContent",{hash:{},hashTypes:{},hashContexts:{},inverse:p.noop,fn:p.program(4,h,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n      </ul>\n    "),n}function h(e,t){var a,n,r="";return t.buffer.push("\n          "),t.buffer.push(c((a=s.render||e&&e.render,n={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t},a?a.call(e,"list/album","album",n):u.call(e,"render","list/album","album",n)))),t.buffer.push("\n        "),r}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var l,i="",u=s.helperMissing,c=this.escapeExpression,p=this;return n.buffer.push('<div class="row">\n  <div class="small-12 columns">\n    '),l=s["if"].call(t,"empty",{hash:{},hashTypes:{},hashContexts:{},inverse:p.program(3,o,n),fn:p.program(1,r,n),contexts:[t],types:["ID"],data:n}),(l||0===l)&&n.buffer.push(l),n.buffer.push("\n  </div>\n</div>\n"),i}),Ember.TEMPLATES["albums/show"]=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n="";return t.buffer.push("\n        "),a=s._triageMustache.call(e,"artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n      "),n}function o(e,t){var a,n,r,o="";return t.buffer.push("\n      "),n=s["y-block"]||e&&e["y-block"],r={hash:{title:"Remove from Your Collection",action:"remove",parameter:"model","class":"add-button"},hashTypes:{title:"STRING",action:"STRING",parameter:"ID","class":"STRING"},hashContexts:{title:e,action:e,parameter:e,"class":e},inverse:g.noop,fn:g.program(4,h,t),contexts:[],types:[],data:t},a=n?n.call(e,r):x.call(e,"y-block",r),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n    "),o}function h(e,t){t.buffer.push("\n      ")}function l(e,t){var a,n,r,o="";return t.buffer.push("\n      "),n=s["y-block"]||e&&e["y-block"],r={hash:{title:"Add to Your Collection",action:"collect",parameter:"model","class":"add-button"},hashTypes:{title:"STRING",action:"STRING",parameter:"ID","class":"STRING"},hashContexts:{title:e,action:e,parameter:e,"class":e},inverse:g.noop,fn:g.program(4,h,t),contexts:[],types:[],data:t},a=n?n.call(e,r):x.call(e,"y-block",r),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n    "),o}function i(e,t){var a="";return t.buffer.push("\n      <p>\n      <a href='#' "),t.buffer.push(T(s.action.call(e,"download","mp3",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:t}))),t.buffer.push('><img class="download-filetype-images" src="/assets/images/download-icon.png">MP3</a>\n      </p>\n      <p>\n      <a href=\'#\' '),t.buffer.push(T(s.action.call(e,"download","flac",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:t}))),t.buffer.push('><img class="download-filetype-images" src="/assets/images/download-icon.png">FLAC</a>\n      </p>\n      <p>\n      <a href=\'#\' '),t.buffer.push(T(s.action.call(e,"download","aac",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:t}))),t.buffer.push('><img class="download-filetype-images" src="/assets/images/download-icon.png">AAC</a>\n      </p>\n      <p>\n      <a href=\'#\' '),t.buffer.push(T(s.action.call(e,"download","alac",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:t}))),t.buffer.push('><img class="download-filetype-images" src="/assets/images/download-icon.png">ALAC</a>\n      </p>\n    '),a}function u(e,t){var a,n="";return t.buffer.push("\n      <table>\n        <tbody>\n          "),a=s.each.call(e,"track","in","tracks",{hash:{},hashTypes:{},hashContexts:{},inverse:g.noop,fn:g.program(11,c,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n        </tbody>\n      </table>\n    "),n}function c(e,t){var a,n,r="";return t.buffer.push("\n            "),t.buffer.push(T((a=s.render||e&&e.render,n={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t},a?a.call(e,"list/track","track",n):x.call(e,"render","list/track","track",n)))),t.buffer.push("\n          "),r}function p(e,t){t.buffer.push('\n      <p>\n        <a href="https://www.murfie.com/">Murfie - CD, Vinyl, Download, Stream</a>\n      </p>\n      <p>\n        <a href="http://www.b-sidemadison.com/">B-Side Records - CD, Vinyl</a>\n      </p>\n      <p>\n        <a href="http://www.madcitymusic.net/">MadCity Music Exchange - CD, Vinyl</a>\n      </p>\n\n    ')}function f(e,t){var a="";return t.buffer.push("\n      <p>"),t.buffer.push(T(s._triageMustache.call(e,"review",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:e},contexts:[e],types:["ID"],data:t}))),t.buffer.push("</p>\n    "),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var d,b,m,y="",g=this,x=s.helperMissing,T=this.escapeExpression;return n.buffer.push('<div id="album">\n  <div class="meta-data">\n    <img class=\'art\' '),n.buffer.push(T(s["bind-attr"].call(t,{hash:{src:"art"},hashTypes:{src:"STRING"},hashContexts:{src:t},contexts:[],types:[],data:n}))),n.buffer.push('>\n    <div class="album-info-block">\n      <h3 class="album">'),d=s._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(d||0===d)&&n.buffer.push(d),n.buffer.push("</h3>\n      "),b=s["link-to"]||t&&t["link-to"],m={hash:{classNames:"artist"},hashTypes:{classNames:"STRING"},hashContexts:{classNames:t},inverse:g.noop,fn:g.program(1,r,n),contexts:[t,t],types:["STRING","ID"],data:n},d=b?b.call(t,"artist","artistSlug",m):x.call(t,"link-to","artist","artistSlug",m),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n      <h4>\n        "),d=s._triageMustache.call(t,"record_label",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n      </h4>\n      <h4>\n        "),d=s._triageMustache.call(t,"release_date",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(d||0===d)&&n.buffer.push(d),n.buffer.push('\n      </h4>\n    </div>\n    <div class="play-button" '),n.buffer.push(T(s.action.call(t,"playPause","firstTrack",{hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","ID"],data:n}))),n.buffer.push("><img src=\"/assets/images/play_button.png\"></div>\n  </div>\n  <div class='actions'>\n    "),d=s["if"].call(t,"inCollection",{hash:{},hashTypes:{},hashContexts:{},inverse:g.program(6,l,n),fn:g.program(3,o,n),contexts:[t],types:["ID"],data:n}),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n    "),b=s["y-block"]||t&&t["y-block"],m={hash:{title:"Download","class":"download-block"},hashTypes:{title:"STRING","class":"STRING"},hashContexts:{title:t,"class":t},inverse:g.noop,fn:g.program(8,i,n),contexts:[],types:[],data:n},d=b?b.call(t,m):x.call(t,"y-block",m),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n\n    "),b=s["y-block"]||t&&t["y-block"],m={hash:{title:"Track List",expanded:"true"},hashTypes:{title:"STRING",expanded:"STRING"},hashContexts:{title:t,expanded:t},inverse:g.noop,fn:g.program(10,u,n),contexts:[],types:[],data:n},d=b?b.call(t,m):x.call(t,"y-block",m),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n\n    "),b=s["y-block"]||t&&t["y-block"],m={hash:{title:"Options to Purchase"},hashTypes:{title:"STRING"},hashContexts:{title:t},inverse:g.noop,fn:g.program(13,p,n),contexts:[],types:[],data:n},d=b?b.call(t,m):x.call(t,"y-block",m),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n  </div>\n  <div class='info'>\n    "),b=s["y-block"]||t&&t["y-block"],m={hash:{title:"Review",expanded:"true",column:"left-col"},hashTypes:{title:"STRING",expanded:"STRING",column:"STRING"},hashContexts:{title:t,expanded:t,column:t},inverse:g.noop,fn:g.program(15,f,n),contexts:[],types:[],data:n},d=b?b.call(t,m):x.call(t,"y-block",m),(d||0===d)&&n.buffer.push(d),n.buffer.push("\n  </div>\n</div>\n"),y}),Ember.TEMPLATES["components/y-block"]=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n="";return t.buffer.push("\n    <span class='icon'>\n      "),a=s["if"].call(e,"expanded",{hash:{},hashTypes:{},hashContexts:{},inverse:c.program(4,h,t),fn:c.program(2,o,t),contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n    </span>\n  "),n}function o(e,t){t.buffer.push("\n        -\n      ")}function h(e,t){t.buffer.push("\n        +\n      ")}function l(e,t){var a,n="";return t.buffer.push("\n  "),a=s._triageMustache.call(e,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n"),n}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var i,u="",c=this,p=this.escapeExpression;return n.buffer.push('<h3 class="header" '),n.buffer.push(p(s.action.call(t,"toggle",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push(" "),n.buffer.push(p(s["bind-attr"].call(t,{hash:{"class":"expanded"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:n}))),n.buffer.push(">\n  "),i=s._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("\n  "),i=s.unless.call(t,"action",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,r,n),contexts:[t],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("\n</h3>\n"),i=s["if"].call(t,"expanded",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(6,l,n),contexts:[t],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("\n"),u}),Ember.TEMPLATES["components/y-toplink"]=Ember.Handlebars.template(function(e,t,s,a,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{},n.buffer.push("<a href='#' class=\"top-link\">↑ Top</a>\n")}),Ember.TEMPLATES["list/album"]=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){var a,n="";return t.buffer.push("\n    <div class='art-wrapper'>\n      <img class='art' "),t.buffer.push(c(s["bind-attr"].call(e,{hash:{src:"art"},hashTypes:{src:"STRING"},hashContexts:{src:e},contexts:[],types:[],data:t}))),t.buffer.push('>\n    </div>\n    <div class="play-button" '),t.buffer.push(c(s.action.call(e,"playPause","firstTrack",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push("><img src=\"/assets/images/play_button.png\"></div>\n    <div class='title'>"),a=s._triageMustache.call(e,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</div>\n  "),n}function o(e,t){var a,n="";return t.buffer.push("\n    "),a=s._triageMustache.call(e,"artist_name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n  "),n}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var h,l,i,u="",c=this.escapeExpression,p=this,f=s.helperMissing;return n.buffer.push('<li class="album">\n  '),l=s["link-to"]||t&&t["link-to"],i={hash:{classNames:"album"},hashTypes:{classNames:"STRING"},hashContexts:{classNames:t},inverse:p.noop,fn:p.program(1,r,n),contexts:[t,t],types:["STRING","ID"],data:n},h=l?l.call(t,"albums.show","",i):f.call(t,"link-to","albums.show","",i),(h||0===h)&&n.buffer.push(h),n.buffer.push("\n  "),l=s["link-to"]||t&&t["link-to"],i={hash:{classNames:"artist"},hashTypes:{classNames:"STRING"},hashContexts:{classNames:t},inverse:p.noop,fn:p.program(3,o,n),contexts:[t,t],types:["STRING","ID"],data:n},h=l?l.call(t,"artist","album.artistSlug",i):f.call(t,"link-to","artist","album.artistSlug",i),(h||0===h)&&n.buffer.push(h),n.buffer.push("\n</li>\n"),u}),Ember.TEMPLATES["list/track"]=Ember.Handlebars.template(function(e,t,s,a,n){function r(e,t){t.buffer.push('\n      <i class="icon ion-ios7-pause"></i>\n    ')}function o(e,t){t.buffer.push('\n      <i class="icon ion-ios7-play"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,Ember.Handlebars.helpers),n=n||{};var h,l,i,u="",c=this.escapeExpression,p=s.helperMissing,f=this;return n.buffer.push('<tr class="track" '),n.buffer.push(c(s["bind-attr"].call(t,{hash:{"class":"playing:playing"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:n}))),n.buffer.push(" "),n.buffer.push(c(s.action.call(t,"playPause","track",{hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","ID"],data:n}))),n.buffer.push(">\n  <td>"),h=s._triageMustache.call(t,"position",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(h||0===h)&&n.buffer.push(h),n.buffer.push("</td>\n  <td>"),h=s._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(h||0===h)&&n.buffer.push(h),n.buffer.push("</td>\n  <td>"),n.buffer.push(c((l=s["format-duration"]||t&&t["format-duration"],i={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n},l?l.call(t,"length",i):p.call(t,"format-duration","length",i)))),n.buffer.push("</td>\n  <td>\n    "),h=s["if"].call(t,"playing",{hash:{},hashTypes:{},hashContexts:{},inverse:f.program(3,o,n),fn:f.program(1,r,n),contexts:[t],types:["ID"],data:n}),(h||0===h)&&n.buffer.push(h),n.buffer.push("\n  </td>\n</tr>\n"),u});var ENV={};ENV.HOST="https://yahara-api.herokuapp.com",Yahara=Ember.Application.create(),Yahara.Router.map(function(){this.resource("albums",{path:"/"},function(){this.route("show",{path:"/album/:slug"})}),this.resource("artist",{path:"/artist/:artistSlug"}),this.route("catalog"),this.route("collection"),this.route("profile"),this.route("page",{path:"/:page"})}),Yahara.Router.reopen({location:"auto"}),Yahara.Adapter=Ember.Adapter.extend({find:function(e,t){var s=this.buildURL(e.constructor,t),a=this;return this.ajax(s).then(function(s){return a.didFind(e,t,s),e})},didFind:function(e,t,s){var a=Ember.get(e.constructor,"rootKey"),n=a?s[a]:s;e.load(t,n)},findAll:function(e,t){var s=this.buildURL(e),a=this;return this.ajax(s).then(function(s){return a.didFindAll(e,t,s),t})},didFindAll:function(e,t,s){var a=Ember.get(e,"collectionKey"),n=a?s[a]:s;n.map(function(e){e.id=e.mprint.active,e.tracks.map(function(t){t.album_id=e.id})}),t.load(e,n)},ajax:function(e,t,s){return this._ajax(e,t,s||"GET")},buildURL:function(e,t){var s=ENV.HOST+Ember.get(e,"url"),a=Ember.get(e,"urlSuffix")||"";if(!s)throw new Error("Ember.RESTAdapter requires a `url` property to be specified");return Ember.isEmpty(t)?s+a:s+"/"+t+a},_ajax:function(e,t,s){return ic.ajax.request({url:e,method:s})}}),Yahara.YBlockComponent=Ember.Component.extend({classNames:["y-block"],classNameBindings:["expanded:expanded"],action:null,expanded:!1,title:null,parameter:null,actions:{toggle:function(){this.get("action")?this.sendAction("action",this.get("parameter")):this.toggleProperty("expanded")}}}),Yahara.YToplinkComponent=Ember.Component.extend({click:function(){window.scrollTo(0,0)}}),Yahara.Album=Ember.Model.extend({id:Ember.attr(),title:Ember.attr(),record_label:Ember.attr(),release_date:Ember.attr(),album_art:Ember.attr(),tracks:Ember.hasMany("Yahara.Track",{key:"tracks",embedded:!0}),artist_name:Ember.attr(),mprint:Ember.attr(),review:Ember.attr(),artist_url:Ember.attr(),slug:Ember.attr(),art:Ember.computed.alias("album_art"),firstTrack:function(){return this.get("tracks.firstObject")}.property("tracks.@each"),artistSlug:function(){return this.get("artist_url").match(/artist\/([a-z\-]+)/)[1]}.property("artist_name"),download:function(e){var t=ENV.HOST+"/download/"+this.get("id")+"/"+encodeURIComponent(this.get("slug"))+"-"+e+".zip?token="+localStorage.token;ic.ajax.request(t).then(function(e){window.location=e.url})}}),Yahara.Album.url="/catalog/yahara",Yahara.Album.adapter=Yahara.Adapter.create(),Yahara.CurrentUser=Ember.Object.extend({token:null,cardnumber:null,password:"",authorized:Ember.computed.bool("token"),notAuthorized:Ember.computed.not("authorized"),error:!1,collection:Ember.A(),validPassword:function(){return"imwiththeband"===this.get("password").replace(/[^A-Za-z;]/g,"").toLowerCase()
}.property("password"),collection_ids:function(){return this.get("collection").map(function(e){return e.mprint.origin})}.property("collection.@each"),init:function(){this.set("token",localStorage.token)},signOut:function(){this.set("token",null),localStorage.removeItem("token")},signIn:function(e){this.set("token",e),localStorage.token=e,this.loadCollection()},collect:function(e){var t=this;return ic.ajax.request({type:"POST",url:ENV.HOST+"/collection",data:{mprint:e.get("id"),token:this.get("token")}}).then(function(e){t.loadCollection(e)})},removeFromCollection:function(e){var t=this,s=this.get("collection").find(function(t){return t.mprint.origin===e.get("mprint.origin")});ic.ajax.request({type:"DELETE",url:ENV.HOST+"/collection/"+s.mprint.active+"?token="+t.get("token")}).then(function(e){t.loadCollection(e)})},loadCollection:function(e){var t=this;1===arguments.length?t.get("collection").setObjects(e):ic.ajax.request({type:"GET",url:ENV.HOST+"/collection",data:t.getProperties("token")}).then(function(e){t.get("collection").addObjects(e)},function(){console.error("There was a problem loading the collection")})}}),Yahara.Track=Ember.Model.extend({id:Ember.attr(),title:Ember.attr(),position:Ember.attr(Number),length:Ember.attr(Number),filename:Ember.attr(),album:Ember.belongsTo("Yahara.Album",{key:"album_id"}),media_uri:function(){return ENV.HOST+"/stream/"+this.get("album.id")+"/"+encodeURIComponent(this.get("filename"))+".mp3?token="}.property("file_name"),playing:!1,sound:null,currentPosition:0,finished:!1,pctStyle:function(){return"width: "+this.get("currentPosition")/this.get("length")*100+"%"}.property("currentPosition"),play:function(){var e=this;e.loadSound().then(function(){e.get("sound").play(),e.set("playing",!0)})},nextTrack:function(){return this.get("album.tracks").findBy("position",this.get("position")+1)}.property("album"),previousTrack:function(){return this.get("album.tracks").findBy("position",this.get("position")-1)}.property("album"),pause:function(){this.set("playing",!1),this.get("sound").pause()},stop:function(){this.set("playing",!1),this.get("sound").stop()},resume:function(){this.set("playing",!0),this.get("sound").play()},loadSound:function(){var e=this;return Ember.$.ajax(e.get("media_uri")+localStorage.token).then(function(t){e.set("sound",soundManager.createSound({url:t.url,whileplaying:function(){e.updatePosition()},onfinish:function(){e.set("finished",!0)}}))})},updatePosition:function(){this.set("currentPosition",this.get("sound").position)}}),Yahara.Track.url="/api/catalog",Yahara.Track.collectionKey="albums",Yahara.Track.adapter=Yahara.Adapter.create(),Yahara.ApplicationController=Ember.ObjectController.extend({searchString:null,nextAction:null,nextActionParams:null}),Yahara.CollectionController=Ember.ArrayController.extend(),Yahara.ModalController=Ember.ObjectController.extend({needs:"application",currentUser:Ember.computed.alias("controllers.application.model"),previousTransition:null,actions:{open:function(){$("#modal").show()},close:function(){$("#modal").hide()},submit:function(){var e=this.get("currentUser");e.get("validPassword")?ic.ajax.request({type:"POST",url:ENV.HOST+"/userforcard",data:e.getProperties("cardnumber")}).then(function(t){$("#modal").hide(),e.signIn(t.private_info.token)},function(){e.set("error",!0)}):e.set("error",!0)}}}),Yahara.PlayerController=Ember.ObjectController.extend({trackFinished:function(){this.get("content.finished")&&this.send("play",this.get("content.nextTrack"))}.observes("content.finished"),actions:{pause:function(){this.get("content").pause()},toggle:function(){this.get("playing")?this.get("content").pause():this.get("content").resume()},play:function(e){"undefined"!=typeof e&&(null!==this.get("content")&&this.get("content").stop(),this.set("content",e),this.get("content").play())}}}),Yahara.SearchController=Ember.ObjectController.extend({needs:"application",searchString:Ember.computed.alias("controllers.application.searchString")}),Yahara.AlbumsIndexController=Ember.ArrayController.extend({needs:["application"],searchString:Ember.computed.alias("controllers.application.searchString"),empty:Ember.computed.empty("filteredContent.[]"),filteredContent:function(){var e=this.get("searchString");return e?this.get("content").filter(function(t){var s=new RegExp("\\b"+e,"i");return s.test([t.get("title"),t.get("artist_name")].join(" "))}):this.get("content")}.property("content","searchString"),mover:function(){1===this.get("filteredContent.length")?this.transitionToRoute("albums.show",this.get("filteredContent.firstObject")):this.transitionToRoute("/")}.observes("filteredContent.@each")}),Yahara.AlbumsShowController=Ember.ObjectController.extend({needs:["application"],inCollection:function(){return this.get("controllers.application.model.collection_ids").contains(this.get("model.mprint.origin"))}.property("controllers.application.model.collection.@each","model.mprint.origin")}),Ember.Handlebars.helper("format-duration",function(e){var t,s,a,n;return n=e/1e3,t=Math.floor(n/3600),s=Math.floor(n%3600/60),a=Math.floor(n%3600%60),(t>0?t+":":"")+(s>0?(t>0&&10>s?"0":"")+s+":":"0:")+(10>a?"0":"")+a}),Ember.Handlebars.helper("headTitle",function(e){Ember.$("head").find("title").text(e)},"title"),Yahara.ApplicationRoute=Ember.Route.extend({model:function(){return Ember.RSVP.hash({user:Yahara.CurrentUser.create(),albums:Yahara.Album.fetch()})},setupController:function(e,t){t.user.get("authorized")&&t.user.loadCollection(),e.set("content",t.user),e.set("albums",t.user)},actions:{playPause:function(e){var t=this.controllerFor("player"),s=this.controller.get("model");s.get("authorized")?e.get("playing")?t.send("pause"):t.send("play",e):this.send("openModal")},download:function(e){var t=this.controller.get("model");t.get("authorized")?this.modelFor("albums.show").download(e):this.send("openModal")},openModal:function(){return this.controllerFor("modal").send("open")},closeModal:function(){return this.controllerFor("modal").send("close")},signOut:function(){this.controller.get("model").signOut(),this.transitionTo("application.index")},collect:function(e){var t=this.controllerFor("application").get("model");t.get("authorized")?t.collect(e):this.send("openModal")},remove:function(e){var t=this.controllerFor("application").get("model");t.removeFromCollection(e)}}}),Yahara.ArtistRoute=Ember.Route.extend({model:function(e){return ic.ajax.request(ENV.HOST+"/artist/"+e.artistSlug)}}),Yahara.CollectionRoute=Ember.Route.extend({beforeModel:function(){this.controllerFor("application").get("notAuthorized")&&this.transitionTo("application")},setupController:function(e){var t=this.modelFor("application").albums,s=this.controllerFor("application").get("collection_ids"),a=t.filter(function(e){return s.contains(e.get("mprint.origin"))});e.set("content",a)}}),Yahara.PageRoute=Ember.Route.extend({setupController:function(e,t){ic.ajax.request("/pages/"+t.page).then(function(t){e.set("model",t)})}}),Yahara.PofileRoute=Ember.Route.extend({beforeModel:function(e){this.controllerFor("application").get("currentUser.authorized")||(e.abort(),this.controllerFor("modal").send("open"),this.controllerFor("modal").set("previousTransition",e))},model:function(){return{}}}),Yahara.AlbumsIndexRoute=Ember.Route.extend({model:function(){return this.modelFor("application").albums}}),Yahara.AlbumsShowRoute=Ember.Route.extend({model:function(e){return this.modelFor("application").albums.findBy("slug",e.slug)}});