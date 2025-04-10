
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(d){var c=/\blang(?:uage)?-([\w-]+)\b/i,t=0,e={},D={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof F?new F(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function a(e,r){var n,t;switch(r=r||{},D.util.type(e)){case"Object":if(t=D.util.objId(e),r[t])return r[t];for(var i in n={},r[t]=n,e)e.hasOwnProperty(i)&&(n[i]=a(e[i],r));return n;case"Array":return t=D.util.objId(e),r[t]?r[t]:(n=[],r[t]=n,e.forEach(function(e,t){n[t]=a(e,r)}),n);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack)||[])[1];if(t){var a=document.getElementsByTagName("script");for(var r in a)if(a[r].src==t)return a[r]}return null}},isActive:function(e,t,a){for(var r="no-"+t;e;){var n=e.classList;if(n.contains(t))return!0;if(n.contains(r))return!1;e=e.parentElement}return!!a}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,t){var a=D.util.clone(D.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(a,e,t,r){var n=(r=r||D.languages)[a],i={};for(var s in n)if(n.hasOwnProperty(s)){if(s==e)for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);t.hasOwnProperty(s)||(i[s]=n[s])}var l=r[a];return r[a]=i,D.languages.DFS(D.languages,function(e,t){t===l&&e!=a&&(this[e]=i)}),i},DFS:function e(t,a,r,n){n=n||{};var i=D.util.objId;for(var s in t)if(t.hasOwnProperty(s)){a.call(t,s,t[s],r||s);var o=t[s],l=D.util.type(o);"Object"!==l||n[i(o)]?"Array"!==l||n[i(o)]||(n[i(o)]=!0,e(o,a,s,n)):(n[i(o)]=!0,e(o,a,null,n))}}},plugins:{},highlightAll:function(e,t){D.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};D.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),D.hooks.run("before-all-elements-highlight",r);for(var n,i=0;n=r.elements[i++];)D.highlightElement(n,!0===t,r.callback)},highlightElement:function(e,t,a){var r=D.util.getLanguage(e),n=D.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var s={element:e,language:r,grammar:n,code:e.textContent};function o(e){s.highlightedCode=e,D.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,D.hooks.run("after-highlight",s),D.hooks.run("complete",s),a&&a.call(s.element)}if(D.hooks.run("before-sanity-check",s),(i=s.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!s.code)return D.hooks.run("complete",s),void(a&&a.call(s.element));if(D.hooks.run("before-highlight",s),s.grammar)if(t&&d.Worker){var l=new Worker(D.filename);l.onmessage=function(e){o(e.data)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else o(D.highlight(s.code,s.grammar,s.language));else o(D.util.encode(s.code))},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return D.hooks.run("before-tokenize",r),r.tokens=D.tokenize(r.code,r.grammar),D.hooks.run("after-tokenize",r),F.stringify(D.util.encode(r.tokens),r.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var r in a)t[r]=a[r];delete t.rest}var n=new i;return M(n,n.head,e),function e(t,a,r,n,i,s){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var l=r[o];l=Array.isArray(l)?l:[l];for(var d=0;d<l.length;++d){if(s&&s.cause==o+","+d)return;var c=l[d],u=c.inside,p=!!c.lookbehind,m=!!c.greedy,g=c.alias;if(m&&!c.pattern.global){var f=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,f+"g")}for(var h=c.pattern||c,E=n.next,S=i;E!==a.tail&&!(s&&S>=s.reach);S+=E.value.length,E=E.next){var b=E.value;if(a.length>t.length)return;if(!(b instanceof F)){var T,A=1;if(m){if(!(T=x(h,S,t,p)))break;var I=T.index,y=T.index+T[0].length,C=S;for(C+=E.value.length;C<=I;)C+=(E=E.next).value.length;if(S=C-=E.value.length,E.value instanceof F)continue;for(var L=E;L!==a.tail&&(C<y||"string"==typeof L.value);L=L.next)A++,C+=L.value.length;A--,b=t.slice(S,C),T.index-=S}else if(!(T=x(h,0,b,p)))continue;I=T.index;var R=T[0],P=b.slice(0,I),v=b.slice(I+R.length),N=S+b.length;s&&N>s.reach&&(s.reach=N);var k=E.prev;if(P&&(k=M(a,k,P),S+=P.length),_(a,k,A),E=M(a,k,new F(o,u?D.tokenize(R,u):R,g,R)),v&&M(a,E,v),1<A){var O={cause:o+","+d,reach:N};e(t,a,r,E.prev,S,O),s&&O.reach>s.reach&&(s.reach=O.reach)}}}}}}(e,n,t,n.head,0),function(e){for(var t=[],a=e.head.next;a!==e.tail;)t.push(a.value),a=a.next;return t}(n)},hooks:{all:{},add:function(e,t){var a=D.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=D.hooks.all[e];if(a&&a.length)for(var r,n=0;r=a[n++];)r(t)}},Token:F};function F(e,t,a,r){this.type=e,this.content=t,this.alias=a,this.length=0|(r||"").length}function x(e,t,a,r){e.lastIndex=t;var n=e.exec(a);if(n&&r&&n[1]){var i=n[1].length;n.index+=i,n[0]=n[0].slice(i)}return n}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function M(e,t,a){var r=t.next,n={value:a,prev:t,next:r};return t.next=n,r.prev=n,e.length++,n}function _(e,t,a){for(var r=t.next,n=0;n<a&&r!==e.tail;n++)r=r.next;(t.next=r).prev=t,e.length-=n}if(d.Prism=D,F.stringify=function t(e,a){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=t(e,a)}),r}var n={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(n.classes,i):n.classes.push(i)),D.hooks.run("wrap",n);var s="";for(var o in n.attributes)s+=" "+o+'="'+(n.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+s+">"+n.content+"</"+n.tag+">"},!d.document)return d.addEventListener&&(D.disableWorkerMessageHandler||d.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,n=t.immediateClose;d.postMessage(D.highlight(r,D.languages[a],a)),n&&d.close()},!1)),D;var a=D.util.currentScript();function r(){D.manual||D.highlightAll()}if(a&&(D.filename=a.src,a.hasAttribute("data-manual")&&(D.manual=!0)),!D.manual){var n=document.readyState;"loading"===n||"interactive"===n&&a&&a.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return D}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),function(E){function S(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(E.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,n,e,i){if(r.language===n){var s=r.tokenStack=[];r.code=r.code.replace(e,function(e){if("function"==typeof i&&!i(e))return e;for(var t,a=s.length;-1!==r.code.indexOf(t=S(n,a));)++a;return s[a]=e,t}),r.grammar=E.languages.markup}}},tokenizePlaceholders:{value:function(m,g){if(m.language===g&&m.tokenStack){m.grammar=E.languages[g];var f=0,h=Object.keys(m.tokenStack);!function e(t){for(var a=0;a<t.length&&!(f>=h.length);a++){var r=t[a];if("string"==typeof r||r.content&&"string"==typeof r.content){var n=h[f],i=m.tokenStack[n],s="string"==typeof r?r:r.content,o=S(g,n),l=s.indexOf(o);if(-1<l){++f;var d=s.substring(0,l),c=new E.Token(g,E.tokenize(i,m.grammar),"language-"+g,i),u=s.substring(l+o.length),p=[];d&&p.push.apply(p,e([d])),p.push(c),u&&p.push.apply(p,e([u])),"string"==typeof r?t.splice.apply(t,[a,1].concat(p)):r.content=p}}else r.content&&e(r.content)}return t}(m.tokens)}}}})}(Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var n={};n[e]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+e+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,Prism.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(?:[\w=],?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}},variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/,regex:/\^?.*\$|\^.*\$?/},function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript,Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json,function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=r.variable[1].inside,s=0;s<n.length;s++)i[n[s]]=e.languages.bash[n[s]];e.languages.shell=e.languages.bash}(Prism),function(t){var e=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,a=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],r=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,i=/[{}\[\](),:;]/;t.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:e,variable:/\$+(?:\w+\b|(?=\{))/i,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:null|false)\b/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:a,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:r,operator:n,punctuation:i};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:t.languages.php},o=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];t.languages.insertBefore("php","variable",{string:o,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:e,string:o,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:a,number:r,operator:n,punctuation:i}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),t.hooks.add("before-tokenize",function(e){/<\?/.test(e.code)&&t.languages["markup-templating"].buildPlaceholders(e,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi)}),t.hooks.add("after-tokenize",function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"php")})}(Prism),Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),Prism.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/static|self|parent/,punctuation:/::|\\/}}}),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+a.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+a.source+")?)",n="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),i="\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";function s(e,t){t=(t||"").replace(/m/g,"")+"m";var a="([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return e});return RegExp(a,t)}e.languages.yaml={scalar:{pattern:RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+n+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:s("true|false","i"),lookbehind:!0,alias:"important"},null:{pattern:s("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:a,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism),Prism.languages.typoscript=Prism.languages.extend("javascript",{comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))|((\s|^)(\/\/).*(\r?\n|$))/g,keyword:/\b(TEXT|_GIFBUILDER|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|EDITPANEL|EFFECT|FILE|FORM|FRAME|FRAMESET|GIFBUILDER|global|globalString|globalVar|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IMAGE|IMG_RESOURCE|IMGMENU|IMGMENUITEM|IMGTEXT|JSMENU|JSMENUITEM|LOAD_REGISTER|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENU_LAYERS|TMENUITEM|USER|USER_INT)\b/g,tag:/\b(admPanel|alt_print|auth|browser|cache|CHECK|cObj|cObject|COMMENT|config|content|copy|CSS_inlineStyle|cut|dataArray|dayofmonth|dayofweek|db_list|device|dynCSS|edit|edit_access|edit_pageheader|folder|folderTree|foldoutMenu|Functions|gmenu_foldout|gmenu_layers|hostname|hour|imgList|imgResource|imgText|info|IP|jsmenu|JSwindow|LABEL|layout|layoutKey|lib|loginUser|marks|minute|mod|module|month|move_wizard|new|new_wizard|noResultObj|numRows|options|page|pageTree|paste|perms|PIDinRootline|PIDupinRootline|plugin|postform|postform_newThread|preview|publish|RADIO|renderObj|REQ|RTE|RTE_compliant|select|setup|split|stdWrap|subparts|system|temp|template|treeLevel|tsdebug|typolink|url|useragent|userFunc|version|view|workOnSubpart|ACT|ACTIFSUB|ACTIFSUBR|ACTRO|all|arrowACT|arrowNO|ascii|atLeast|atMost|BE|be_groups|be_users|BOX|browse|bullets|CUR|CURIFSUB|CURIFSUBRO|CURRO|default|description|directory|directReturn|div|else|email|end|equals|external|false|FE|fe_groups|fe_users|feadmin|header|html|id|if|ifEmpty|IFSUB|IFSUBRO|image|inBranch|isFalse|isGreaterThan|isInList|isLessThan|isPositive|isTrue|keyword3|language|leveltitle|list|login|mailform|media|menu|mod|multimedia|negate|NEW|NO|none|pages|pages_language_overlay|parseFunc_RTE|pid|required|RO|rootline|search|shortcut|sitemap|SPC|sys_dmail|sys_domain|sys_filemounts|sys_note|sys_template|tabel|text|textpic|this|top|true|twice|uid|uniqueGlobal|uniqueLocal|unsetEmpty|updated|uploads|us|user_task|USERDEF1|USERDEF1RO|USERDEF2|USERDEF2RO|usergroup|USR|USRRO|web_func|web_info|web_layout|web_list|web_t|xhtml_strict|xhtml_trans|XY|ypMenu|_CSS_DEFAULT_STYLE|_DEFAULT_PI_VARS|_LOCAL_LANG|CARRAY|CLEARGIF|COLUMNS|CONFIG|CONSTANTS|CTABLE|CType|DB|DOCUMENT_BODY|EFFECT|FORM|FRAME|FRAMESET|global|globalString|globalVar|GMENU_FOLDOUT|GMENU_LAYERS|GP|HTML|IENV|IMGMENUITEM|IMGTEXT|INCLUDE_TYPOSCRIPT|includeLibs|JSMENU|JSMENUITEM|LIT|MULTIMEDIA|OTABLE|PAGE_TARGET|PAGE_TSCONFIG_ID|PAGE_TSCONFIG_IDLIST|PAGE_TSCONFIG_STR|RECORDS|REMOTE_ADDR|RTE|SEARCHRESULT|SHARED|TCAdefaults|TCEFORM|TCEMAIN|TMENU_LAYERS|TMENUITEM|TSFE|applicationContext|templateName|dataProcessing|templateRootPaths|partialRootPaths|layoutRootPaths|_offset|absRefPrefix|accessibility|accessKey|addAttributes|addExtUrlsAndShortCuts|addItems|additionalHeaders|additionalParams|addParams|addQueryString|adjustItemsH|adjustSubItemsH|adminPanelStyles|after|afterImg|afterImgLink|afterImgTagParams|afterROImg|afterWrap|age|alertPopups|align|allow|allowCaching|allowedAttribs|allowedClasses|allowedCols|allowedNewTables|allowTags|allowTVlisting|allSaveFunctions|allStdWrap|allWrap|alternateBgColors|alternativeSortingField|alternativeTempPath|altImgResource|altLabels|altTarget|altText|altUrl|altUrl_noDefaultParams|altWrap|always|alwaysActivePIDlist|alwaysLink|alwaysShowClickMenuInTopFrame|andWhere|angle|antiAlias|append|applyTotalH|applyTotalW|archive|archiveTypoLink|arrayReturnMode|arrowACT|arrowImgParams|arrowNO|ATagAfterWrap|ATagBeforeWrap|ATagParams|ATagTitle|attribute|autoLevels|autonumber|backColor|background|badMess|baseURL|before|beforeImg|beforeImgLink|beforeImgTagParams|beforeROImg|beforeWrap|begin|beLoginLinkIPList|beLoginLinkIPList_login|beLoginLinkIPList_logout|bgCol|bgImg|blankStrEqFalse|blur|bm|bodyTag|bodyTagAdd|bodyTagCObject|bodyTagMargins|bodytext|border|borderCol|bordersWithin|borderThick|bottomBackColor|bottomContent|bottomHeight|bottomImg|bottomImg_mask|br|brTag|bullet|bulletlist|bytes|cache_clearAtMidnight|cache_period|caption|caption_stdWrap|captionAlign|captionHeader|captionSplit|case|casesensitiveComp|cellpadding|cellspacing|centerImgACT|centerImgCUR|centerImgNO|centerLeftImgACT|centerLeftImgCUR|centerLeftImgNO|centerRightImgACT|centerRightImgCUR|centerRightImgNO|char|charcoal|charMapConfig|check|class|classesAnchor|classesCharacter|classesImage|classesParagraph|classicPageEditMode|clear|clearCache|clearCache_disable|clearCache_pageGrandParent|clearCache_pageSiblingChildren|clearCacheCmd|clearCacheLevels|clearCacheOfPages|clickMenuTimeOut|clickTitleMode|clipboardNumberPads|cMargins|cObjNum|collapse|color|color1|color2|color3|color4|colors|colour|colPos_list|colRelations|cols|colSpace|comment_auto|commentWrap|compensateFieldWidth|compX|compY|conf|constants|content_from_pid_allowOutsideDomain|contextMenu|copyLevels|count_HMENU_MENUOBJ|count_menuItems|count_MENUOBJ|create|createFoldersInEB|crop|csConv|CSS_inlineStyle|current|curUid|cWidth|data|dataWrap|date|date_stdWrap|datePrefix|debug|debugData|debugFunc|debugItemConf|debugRenumberedObject|default|defaultAlign|defaultCmd|defaultFileUploads|defaultHeaderType|defaultOutput|defaults|defaultType|delete|denyTags|depth|DESC|dimensions|directionLeft|directionUp|disableAdvanced|disableAllHeaderCode|disableAltText|disableBigButtons|disableBodyTag|disableCacheSelector|disableCharsetHeader|disabled|disableDelete|disableDocSelector|disableHideAtCopy|disableIconLinkToContextmenu|disableItems|disableNewContentElementWizard|disableNoMatchingValueElement|disablePageExternalUrl|disablePrefixComment|disablePrependAtCopy|disableSearchBox|disableSingleTableView|disableTabInTextarea|displayActiveOnLoad|displayContent|displayFieldIcons|displayIcons|displayMessages|displayQueries|displayRecord|displayTimes|distributeX|distributeY|DIV|doctype|doctypeSwitch|doktype|doNotLinkIt|doNotShowLink|doNotStripHTML|dontCheckPid|dontFollowMouse|dontHideOnMouseUp|dontLinkIfSubmenu|dontShowPalettesOnFocusInAB|dontWrapInTable|doubleBrTag|dWorkArea|edge|edit_docModuleUplaod|edit_docModuleUpload|edit_RTE|editFieldsAtATime|editFormsOnPage|editIcons|editNoPopup|editPanel|elements|emailMeAtLogin|emailMess|emboss|enable|encapsLines|encapsLinesStdWrap|encapsTagList|entryLevel|equalH|everybody|excludeDoktypes|excludeUidList|expAll|expand|explode|ext|externalBlocks|extTarget|face|fe_adminLib|field|fieldOrder|fieldRequired|fields|fieldWrap|file|file1|file2|file3|file4|file5|filelink|filelist|firstLabel|firstLabelGeneral|fixAttrib|flip|flop|foldSpeed|foldTimer|fontColor|fontFile|fontOffset|fontSize|fontSizeMultiplicator|fontTag|forceDisplayFieldIcons|forceDisplayIcons|forceTemplateParsing|forceTypeValue|format|frame|frameReloadIfNotInFrameset|frameSet|freezeMouseover|ftu|function|gamma|gapBgCol|gapLineCol|gapLineThickness|gapWidth|get|getBorder|getLeft|getRight|globalNesting|goodMess|gray|group|groupBy|groupid|header|header_layout|headerComment|headerData|headerSpace|headTag|height|helpText|hidden|hiddenFields|hide|hideButCreateMap|hideMenuTimer|hideMenuWhenNotOver|hidePStyleItems|hideRecords|hideSubmoduleIcons|highColor|history|HTMLparser|HTMLparser_tags|htmlSpecialChars|htmlTag_dir|htmlTag_langKey|htmlTag_setParams|http|icon|icon_image_ext_list|icon_link|iconCObject|ifEmpty|image|image_compression|image_effects|image_frames|imageLinkWrap|imagePath|images|imageWrapIfAny|imgList|imgMap|imgMapExtras|imgMax|imgNameNotRandom|imgNamePrefix|imgObjNum|imgParams|imgPath|imgStart|import|inc|includeCSS|includeLibrary|includeJSFooter|includeJS|includeJSLibs|includeJSFooterlibs|includeCSSLibs|includeNotInMenu|incT3Lib_htmlmail|index|index_descrLgd|index_enable|index_externals|inlineStyle2TempFile|innerStdWrap|innerStdWrap_all|innerWrap|innerWrap2|input|inputLevels|insertClassesFromRTE|insertData|insertDmailerBoundaries|intensity|intTarget|intval|invert|IProcFunc|itemArrayProcFunc|itemH|items|itemsProcFunc|iterations|join|JSWindow|JSwindow_params|jumpurl|jumpUrl|jumpurl_enable|jumpurl_mailto_disable|jumpUrl_transferSession|keep|keepEntries|keepNonMatchedTags|key|label|labelStdWrap|labelWrap|lang|language|language_alt|languageField|layer_menu_id|layerStyle|left|leftIcons|leftImgACT|leftImgCUR|leftImgNO|leftjoin|leftOffset|levels|leveluid|limit|line|lineColor|lineThickness|linkPrefix|linkTitleToSelf|linkVars|linkWrap|listNum|listOnlyInSingleTableView|lm|locale_all|localNesting|locationData|lockFilePath|lockPosition|lockPosition_addSelf|lockPosition_adjust|lockToIP|longdescURL|lowColor|lower|LR|mailto|main|mainScript|makelinks|markerWrap|mask|max|maxAge|maxChars|maxH|maxHeight|maxItems|maxW|maxWidth|maxWInText|mayNotCreateEditShortcuts|menu_type|menuBackColor|menuHeight|menuName|menuOffset|menuWidth|message_page_is_being_generated|message_preview|meta|metaCharset|method|min|minH|minItems|minW|mode|moduleMenuCollapsable|MP_defaults|MP_disableTypolinkClosestMPvalue|MP_mapRootPoints|name|navFrameResizable|navFrameWidth|nesting|netprintApplicationLink|neverHideAtCopy|newPageWiz|newRecordFromTable|newWindow|newWizards|next|niceText|nicetext|no_cache|no_search|noAttrib|noCache|noCols|noCreateRecordsLink|noLink|noMatchingValue_label|noMenuMode|nonCachedSubst|nonTypoTagStdWrap|nonTypoTagUserFunc|nonWrappedTag|noOrderBy|noPageTitle|noRows|noScaleUp|noStretchAndMarginCells|noThumbsInEB|noThumbsInRTEimageSelect|notification_email_charset|notification_email_encoding|notification_email_urlmode|noTrimWrap|noValueInsert|obj|offset|offsetWrap|onlineWorkspaceInfo|onlyCurrentPid|opacity|orderBy|outerWrap|outline|outputLevels|override|overrideAttribs|overrideId|overridePageModule|overrideWithExtension|pageFrameObj|pageGenScript|pageTitleFirst|parameter|params|parseFunc|parser|password|path|permissions|pid_list|pidInList|pixelSpaceFontSizeRef|plaintextLib|plainTextStdWrap|postCObject|postLineBlanks|postLineChar|postLineLen|postUserFunc|postUserFuncInt|preBlanks|preCObject|prefix|prefixComment|prefixLocalAnchors|prefixRelPathWith|preIfEmptyListNum|preLineBlanks|preLineChar|preLineLen|prepend|preserveEntities|preUserFunc|prev|previewBorder|prevnextToSection|printheader|prioriCalc|proc|properties|protect|protectLvar|publish_levels|QEisDefault|quality|radio|radioWrap|range|rawUrlEncode|recipient|recursive|recursiveDelete|redirect|redirectToURL|reduceColors|register|relativeToParentLayer|relativeToTriggerItem|relPathPrefix|remap|remapTag|removeBadHTML|removeDefaultJS|removeIfEquals|removeIfFalse|removeItems|removeObjectsOfDummy|removePrependedNumbers|removeTags|removeWrapping|renderCharset|renderWrap|reset|resources|resultObj|returnLast|returnUrl|rightImgACT|rightImgCUR|rightImgNO|rightjoin|rm|rmTagIfNoAttrib|RO_chBgColor|rotate|rows|rowSpace|RTEfullScreenWidth|rules|sample|saveClipboard|saveDocNew|secondRow|section|sectionIndex|select|select_key|selectFields|separator|set|setContentToCurrent|setCurrent|setfixed|setFixedHeight|setFixedWidth|setJS_mouseOver|setJS_openPic|setOnly|shadow|sharpen|shear|short|shortcut|shortcut_onEditId_dontSetPageTree|shortcut_onEditId_keepExistingExpanded|shortcutFrame|shortcutGroups|shortcutIcon|show|showAccessRestrictedPages|showActive|showClipControlPanelsDespiteOfCMlayers|showFirst|showHiddenPages|showHiddenRecords|showHistory|showPageIdWithTitle|showTagFreeClasses|simulateDate|simulateUserGroup|singlePid|site_author|site_reserved|sitetitle|siteUrl|size|solarize|sorting|source|space|spaceAfter|spaceBefore|spaceBelowAbove|spaceLeft|spaceRight|spacing|spamProtectEmailAddresses|spamProtectEmailAddresses_atSubst|spamProtectEmailAddresses_lastDotSubst|special|splitChar|splitRendering|src|startInTaskCenter|stayFolded|stdheader|stdWrap|stdWrap2|strftime|stripHtml|styles|stylesheet|submenuObjSuffixes|subMenuOffset|submit|subst_elementUid|substMarksSeparately|substring|swirl|sword|sword_noMixedCase|SWORD_PARAMS|sword_standAlone|sys_language_mode|sys_language_overlay|sys_language_softMergeIfNotBlank|sys_language_uid|table|tableCellColor|tableParams|tables|tableStdWrap|tableStyle|tableWidth|tags|target|TDparams|templateContent|templateFile|text|textarea|textMargin|textMargin_outOfText|textMaxLength|textObjNum|textPos|textStyle|thickness|thumbnailsByDefault|tile|time_stdWrap|tipafriendLib|title|titleLen|titleTagFunction|titleText|tm|token|topOffset|totalWidth|transparentBackground|transparentColor|trim|tsdebug_tree|type|typeNum|types|typolinkCheckRootline|uidInList|unset|uploadFieldsInTopOfEB|uploads|upper|useCacheHash|useLargestItemX|useLargestItemY|user|userdefined|userfunction|userid|USERNAME_substToken|userProc|value|valueArray|wave|where|width|wiz|wordSpacing|workArea|wrap|wrap1|wrap2|wrap3|wrapAfterTags|wrapAlign|wrapFieldName|wrapItemAndSub|wrapNonWrappedLines|wraps|xhtml_cleanig|xmlprologue|xPosOffset|yPosOffset|addChr10BetweenParagraphs|ifBlank|treatIdAsReference|element|sourceCollection|small|srcsetCandidate|mediaQuery|dataKey|smallRetina|pixelDensity|directImageLink|linkParams|returnKey|emptyTitleHandling|titleInLink|titleInLinkAndImg|imageTextSplit|borderClass|borderSpace|separateRows|addClasses|addClassesCol|addClassesImage|imageStdWrap|imageStdWrapNoWidth|imageColumnStdWrap|rendering|singleNoCaption|fallbackRendering|singleStdWrap|rowStdWrap|noRowsStdWrap|lastRowStdWrap|columnStdWrap|imgTagStdWrap|editIconsStdWrap|noCaption|splitCaption|singleCaption|renderMethod|tt_content|beforeLastTag|iconTitle|references|fieldName|collections|folders|fileTarget|replacement|replace|useRegExp|categories|order|relation|preRenderRegisters|allImageCaptions|classStdWrap|constant|parseTarget|removeEmptyEntries|as|fieldDelimiter|maxGalleryWidth|maxGalleryWidthInText|columnSpacing|borderWidth|borderPadding|textmedia)\b/g,string:[{pattern:/^([^=]*=[< ]?)((?!\]\n).)*/g,lookbehind:!0,inside:{variable:/(\{\$.*\})|(\{(register|field|cObj):.*\})|((TSFE|file):.*\n?\s?)/g,keyword:/\b(_GIFBUILDER|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|EDITPANEL|EFFECT|FILE|FORM|FRAME|FRAMESET|GIFBUILDER|global|globalString|globalVar|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IMAGE|IMG_RESOURCE|IMGMENU|IMGMENUITEM|IMGTEXT|JSMENU|JSMENUITEM|LOAD_REGISTER|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENU_LAYERS|TMENUITEM|USER|USER_INT)\b/g}}]}),function(){if(void 0!==Prism&&"undefined"!=typeof document){function s(){}var o=[],l={};Prism.plugins.toolbar={};var e=Prism.plugins.toolbar.registerButton=function(e,a){var t;t="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){a.onClick.call(this,e)})):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},e in l?console.warn('There is a button with the key "'+e+'" registered already.'):o.push(l[e]=t)},t=Prism.plugins.toolbar.hook=function(r){var e=r.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&!e.parentNode.classList.contains("code-toolbar")){var t=document.createElement("div");t.classList.add("code-toolbar"),e.parentNode.insertBefore(t,e),t.appendChild(e);var n=document.createElement("div");n.classList.add("toolbar");var a=o,i=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(r.element);i&&(a=i.map(function(e){return l[e]||s})),a.forEach(function(e){var t=e(r);if(t){var a=document.createElement("div");a.classList.add("toolbar-item"),a.appendChild(t),n.appendChild(a)}}),t.appendChild(n)}};e("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var a,r,n=t.getAttribute("data-label");try{r=document.querySelector("template#"+n)}catch(e){}return r?a=r.content:(t.hasAttribute("data-url")?(a=document.createElement("a")).href=t.getAttribute("data-url"):a=document.createElement("span"),a.textContent=n),a}}),Prism.hooks.add("complete",t)}}(),function(){if(void 0!==Prism&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},d="data-src-status",c="loading",u="pre[data-src]:not(["+d+'="loaded"]):not(['+d+'="'+c+'"])',r=/\blang(?:uage)?-([\w-]+)\b/i;Prism.hooks.add("before-highlightall",function(e){e.selector+=", "+u}),Prism.hooks.add("before-sanity-check",function(e){var t=e.element;if(t.matches(u)){e.code="",t.setAttribute(d,c);var a=t.appendChild(document.createElement("CODE"));a.textContent="Loading…";var r=t.getAttribute("data-src"),n=e.language;if("none"===n){var i=(/\.(\w+)$/.exec(r)||[,"none"])[1];n=l[i]||i}p(a,n),p(t,n);var s=Prism.plugins.autoloader;s&&s.loadLanguages(n);var o=new XMLHttpRequest;o.open("GET",r,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(t.setAttribute(d,"loaded"),a.textContent=o.responseText,Prism.highlightElement(a)):(t.setAttribute(d,"failed"),400<=o.status?a.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:a.textContent="✖ Error: File does not exist or is empty"))},o.send(null)}});var e=!(Prism.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(u),r=0;t=a[r++];)Prism.highlightElement(t)}});Prism.fileHighlight=function(){e||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),e=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}function p(e,t){var a=e.className;a=a.replace(r," ")+" language-"+t,e.className=a.replace(/\s+/g," ").trim()}}(),function(){if(void 0!==Prism&&"undefined"!=typeof document){var o="line-numbers",l=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(o)){var a=e.querySelector(".line-numbers-rows");if(a){var r=parseInt(e.getAttribute("data-start"),10)||1,n=r+(a.children.length-1);t<r&&(t=r),n<t&&(t=n);var i=t-r;return a.children[i]}}},resize:function(e){d([e])},assumeViewportIndependence:!0},t=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&t===window.innerWidth||(t=window.innerWidth,d(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,a=t.parentNode;if(a&&/pre/i.test(a.nodeName)&&!t.querySelector(".line-numbers-rows")&&Prism.util.isActive(t,o)){t.classList.remove(o),a.classList.add(o);var r,n=e.code.match(l),i=n?n.length+1:1,s=new Array(i+1).join("<span></span>");(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=s,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),e.element.appendChild(r),d([a]),Prism.hooks.run("line-numbers",e)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function d(e){if(0!=(e=e.filter(function(e){var t,a=((t=e)?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null)["white-space"];return"pre-wrap"===a||"pre-line"===a})).length){var t=e.map(function(e){var t=e.querySelector("code"),a=e.querySelector(".line-numbers-rows");if(t&&a){var r=e.querySelector(".line-numbers-sizer"),n=t.textContent.split(l);r||((r=document.createElement("span")).className="line-numbers-sizer",t.appendChild(r)),r.innerHTML="0",r.style.display="block";var i=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:n,lineHeights:[],oneLinerHeight:i,sizer:r}}}).filter(Boolean);t.forEach(function(e){var r=e.sizer,t=e.lines,n=e.lineHeights,i=e.oneLinerHeight;n[t.length-1]=void 0,t.forEach(function(e,t){if(e&&1<e.length){var a=r.appendChild(document.createElement("span"));a.style.display="block",a.textContent=e}else n[t]=i})}),t.forEach(function(e){for(var t=e.sizer,a=e.lineHeights,r=0,n=0;n<a.length;n++)void 0===a[n]&&(a[n]=t.children[r++].getBoundingClientRect().height)}),t.forEach(function(e){var t=e.sizer,a=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){a.children[t].style.height=e+"px"})})}}}(),function(){if(void 0!==Prism&&"undefined"!=typeof document)if(Prism.plugins.toolbar){var i={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",arff:"ARFF",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",basic:"BASIC",bbcode:"BBcode",bnf:"BNF",rbnf:"RBNF",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",glsl:"GLSL",gn:"GN",gni:"GN",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",iecst:"Structured Text (IEC 61131-3)",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)){var a,r=t.getAttribute("data-language")||i[e.language]||((a=e.language)?(a.substring(0,1).toUpperCase()+a.substring(1)).replace(/s(?=cript)/,"S"):a);if(r){var n=document.createElement("span");return n.textContent=r,n}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}(),function(){if(void 0!==Prism&&"undefined"!=typeof document){var p=/(?:^|\s)command-line(?:\s|$)/,m="command-line-prompt",d="".startsWith?function(e,t){return e.startsWith(t)}:function(e,t){return 0===e.indexOf(t)};Prism.hooks.add("before-highlight",function(e){var t=f(e);if(!t.complete&&e.code){var a=e.element.parentElement;if(a&&/pre/i.test(a.nodeName)&&(p.test(a.className)||p.test(e.element.className))){var r=e.element.querySelector("."+m);r&&r.remove();var i=e.code.split("\n");t.numberOfLines=i.length;var s=t.outputLines=[],n=a.getAttribute("data-output"),o=a.getAttribute("data-filter-output");if(null!==n)n.split(",").forEach(function(e){var t=e.split("-"),a=parseInt(t[0],10),r=2===t.length?parseInt(t[1],10):a;if(!isNaN(a)&&!isNaN(r)){a<1&&(a=1),r>i.length&&(r=i.length),r--;for(var n=--a;n<=r;n++)s[n]=i[n],i[n]=""}});else if(o)for(var l=0;l<i.length;l++)d(i[l],o)&&(s[l]=i[l].slice(o.length),i[l]="");e.code=i.join("\n")}else t.complete=!0}else t.complete=!0}),Prism.hooks.add("before-insert",function(e){var t=f(e);if(!t.complete){for(var a=e.highlightedCode.split("\n"),r=t.outputLines||[],n=0,i=r.length;n<i;n++)r.hasOwnProperty(n)&&(a[n]=r[n]);e.highlightedCode=a.join("\n")}}),Prism.hooks.add("complete",function(e){if("command-line"in(e.vars=e.vars||{})){var t=f(e);if(!t.complete){var a,r=e.element.parentElement;p.test(e.element.className)&&(e.element.className=e.element.className.replace(p," ")),p.test(r.className)||(r.className+=" command-line");var n=t.numberOfLines||0,i=u("data-prompt","");a=g(""!==i?'<span data-prompt="'+i+'"></span>':'<span data-user="'+u("data-user","user")+'" data-host="'+u("data-host","localhost")+'"></span>',n);var s=document.createElement("span");s.className=m,s.innerHTML=a;for(var o=t.outputLines||[],l=0,d=o.length;l<d;l++)if(o.hasOwnProperty(l)){var c=s.children[l];c.removeAttribute("data-user"),c.removeAttribute("data-host"),c.removeAttribute("data-prompt")}e.element.insertBefore(s,e.element.firstChild),t.complete=!0}}function u(e,t){return(r.getAttribute(e)||t).replace(/"/g,"&quot")}})}function g(e,t){for(var a="",r=0;r<t;r++)a+=e;return a}function f(e){var t=e.vars=e.vars||{};return t["command-line"]=t["command-line"]||{}}}();
// Use a AJAX request to display the button to send the article as PDF to a customer email
window.Cip = window.Cip || {};
Cip.AgentFunctions = Cip.AgentFunctions || {};

Cip.AgentFunctions.baseURL = window.location.protocol + '//' + window.location.host + '/';
Cip.AgentFunctions.pathNameParts = window.location.pathname.split('/');
Cip.AgentFunctions.pathNameParts.shift();

Cip.AgentFunctions.baseURL += Cip.AgentFunctions.pathNameParts[0] + '/agentFunction';

Cip.AgentFunctions.pageIdElement = document.querySelector('meta[name=page-id]');
Cip.AgentFunctions.pageId = 1;
if (Cip.AgentFunctions.pageIdElement != null) {
    Cip.AgentFunctions.pageId = Cip.AgentFunctions.pageIdElement.getAttribute('content');
}

Cip.AgentFunctions.show = $.ajax(Cip.AgentFunctions.baseURL, {
    data: {
        id: Cip.AgentFunctions.pageId,
        no_cache: 1,
    },

    /**
     * Result of rendering the template 'showAgentLink'
     *
     * @param result string rendered HTML part to be included in page
     */
    success: function (result)
    {
        // HTML is a nested <DIV> element with content
        Cip.AgentFunctions.html = result.trim();

        // only if the current user is logged in and has the rights content is returned in the response
        if (Cip.AgentFunctions.html.length > 0)
        {
            // call all registered callbacks and hand them in the HTML and the callback to call after manipulation
            if (Cip.AgentFunctions.callbacks.has()) {
                Cip.AgentFunctions.callbacks.fire(Cip.AgentFunctions.html, Cip.AgentFunctions.resultCallback);
            }

            // insert it into the footer as last list element of the first list
            var targetContainer = $('main#content');
            targetContainer.append(Cip.AgentFunctions.html);

            // add the tooltip functionality
            targetContainer.find('.reveal-title-by-hover').each(function (index, element) {
                $(element).revealTitle();
            });

        }
    },

    error: function () {
        // fail silently - provide logging later on
    }
});

// setup registered callbacks - if the HTML should be manipulated before this hook can be used
Cip.AgentFunctions.callbacks = $.Callbacks();
Cip.AgentFunctions.registerCallback = function(callback) {
    Cip.AgentFunctions.callbacks.add(callback);
};

// provided callback to gather the manipulated HTML
Cip.AgentFunctions.resultCallback = function(html) {
    Cip.AgentFunctions.html = html;
};



window.Ciso = window.Ciso || {};
Ciso.ArticleToCustomer = Ciso.ArticleToCustomer || {};

/**
 * Manipulate the HTML if necessary before it is displayed
 *
 * @param html string provided HTML as string
 * @param callback function callback to execute to return the value
 */
Ciso.ArticleToCustomer.setupAppearance = function(html, callback)
{
    var result = html;

    // disable the link if it is displayed on any non-article page and add a additional hint for the agents
    var container = $('#content');
    if (!container.hasClass('knowledge') && !container.hasClass('marketing') && !container.hasClass('glossary'))
    {
        var htmlObject = $(html);
        var mailLink = htmlObject.find('#pdfMailingText');
        mailLink.addClass('disabled').removeClass('oao-pi-open-in-overlay');
        mailLink.attr('href', null);

        var title = mailLink.attr('title') + mailLink.data('labelNotavailable');
        mailLink.attr('title', title);

        // create a temporary object to transform it back into a string
        result = $('<div>').append(htmlObject).clone().html();
    }

    // use a callback for returning the HTML to be sure it is synchronous
    callback.call(window, result);
};

// register callback to manipulate the HTML
if (window.Cip && Cip.AgentFunctions &&
    Cip.AgentFunctions.registerCallback &&
    jQuery.isFunction(Cip.AgentFunctions.registerCallback)) {

    Cip.AgentFunctions.registerCallback(Ciso.ArticleToCustomer.setupAppearance);
}
document.addEventListener('DOMContentLoaded', function() {

    getProvidedValues = async function(url) {
        const response = await fetch(url);
        const values = await response.json();

        if (values && document.getElementsByTagName('form').length > 0) {
            let formPrefix = document.getElementsByTagName('form').item(0).id;

            document.getElementById(formPrefix + '-pageName').value = values.pageName;
            document.getElementById(formPrefix + '-pageId').value = values.pageId;
            document.getElementById(formPrefix + '-baseHref').value = values.baseHref;
            document.getElementById(formPrefix + '-customerNumber').value = values.customerNumber;
            document.getElementById(formPrefix + '-customerSurname').value = values.customerSurname;
            document.getElementById(formPrefix + '-customerEmail').value = values.customerEmail;

            if (values.customerSalutation == 'FEMALE') {
                document.getElementById(formPrefix + '-customerSalutationSelect').selectedIndex = 1;
            }
        }
    }

    let url = document.location.protocol + '//' + document.location.host + document.location.pathname + "providePdfMailingValues";
    getProvidedValues(url);

});

(function ($) {

    $.fn.initTabs = function () {

        var self = this;

        this.init = function () {

            var hash = window.location.hash.replace("#", "");
            var tabItems = $(self).find('.page-tabbar__item-link');
            var tabPanels = $(self).find('.page-tabbar__panel');

            if ($(self).find('[data-href='+hash+']').length > 0){
                $(tabItems).removeClass('page-tabbar__item-link--active');
                $(tabPanels).removeClass('page-tabbar__panel--active');

                $(self).find('[data-href='+hash+']').addClass('page-tabbar__item-link--active');
                $(self).find('#'+hash).addClass('page-tabbar__panel--active');
            }

            $(tabItems).on( "click", function(ev) {
                $(tabItems).removeClass('page-tabbar__item-link--active');
                $(tabPanels).removeClass('page-tabbar__panel--active');

                tabId = $(this).attr('data-href');

                $(self).find('[data-href='+tabId+']').addClass('page-tabbar__item-link--active');
                $(self).find('#'+tabId).addClass('page-tabbar__panel--active');

                ev.preventDefault();
                ev.stopPropagation();
            });

        };

        this.init();
    };

}(jQuery));

$(function () {

    $('.page-tabs').initTabs();
});
(function ($) {

    $.fn.accordionWidget = function (options) {
        var settings = $.extend({
            openFirstPanel: true,
            header: 'header'
        }, options);

        this.init = function () {
            var headerElements = this.find(settings.header);

            // extend active accordion item after page load
            if (window.location.hash) {
                if (window.location.hash.indexOf('open-flyin:') === -1) {
                    var activeHeader = headerElements.filter(window.location.hash.replace('acc',''));
                    if (activeHeader.length === 1) {
                        this.togglePanel(activeHeader);
                        return;
                    }
                }
            }

            // check for a stored info for an opened accordion
            var storedAccordion = this.getSessionStorageKey();
            if (window.location.hash.indexOf('open-flyin:') === -1 &&
                window['sessionStorage'] && window.sessionStorage.getItem(storedAccordion))
            {
                var elementId = window.sessionStorage.getItem(storedAccordion);
                var headerElement = document.getElementById(elementId);
                if (headerElement !== null) {
                    this.togglePanel($(headerElement));

                    // use hash to scroll to the element
                    if (document.location.hash.length === 0) {
                        document.location.hash = 'acc' + elementId;
                    }
                    return;
                }
            }

            // no valid accordion item transmitted through url hash
            if (settings.openFirstPanel) {
                var i = 0;

                // open first visible panel by default
                while(headerElements.length > i) {
                    if(headerElements.eq(i).is(':visible')) {
                        this.togglePanel(headerElements.eq(i));
                        break;
                    }
                    i++;
                }
            }
        };

        this.togglePanel = function (header) {
            header.parent().toggleClass('accordion__item--expanded');
            header.find('span.copy-text-e1').toggleClass('hidden');
        };

        this.rememberAccordion = function(headerElement) {
            if (window['sessionStorage']) {
                var accordionId = headerElement.id;
                var key = this.getSessionStorageKey();

                if (headerElement.parentNode.className.indexOf('accordion__item--expanded') !== -1) {
                    window.sessionStorage.setItem(key, accordionId);
                } else if (window.sessionStorage.getItem(key) === accordionId) {
                    window.sessionStorage.removeItem(key);
                }
            }
        };

        this.getSessionStorageKey = function () {
            var application = document.querySelector("meta[name='application']").getAttribute('content');
            var lang = document.querySelector("meta[name='lang']").getAttribute('content');
            var pageId = document.querySelector("meta[name='page-id']").getAttribute('content');

            return (application + '-' + lang + '-' + pageId);
        };

        this.init();
    };

}(jQuery));

$(function () {
    $('ul.accordion').accordionWidget();
});

(function ($) {

    $.fn.sidebar = function () {

        var self = this;

        this.stickySection = $('.page-section.has-sticky-sidebar');
        this.stickySectionTopBackup = null;
        this.stickySidebar = $('.grid-col--article-sticky-sidebar');
        this.stickySidebarTopBackup = null;
        this.stickySidebarTopBottomBackup = null;
        this.windowScrollPosition = 0;
        this.$window = $(window);

        this.startDocumentScrollPositionWatcher = function () {
            if (this.stickySection.length > 0 || this.stickySidebar.length > 0) {
                this.documentScrollPositionWatcher();
                $(document).on("scroll", this.documentScrollPositionWatcher.bind(this));
            }
        };

        this.initInPageNavigation = function () {
            var inPageNaviContainer = $('.grid-col--article-sticky-sidebar .card__content');
            if (inPageNaviContainer.length > 0) {

                /* make sure first navi entry is active by default */
                inPageNaviContainer.find('a').first().addClass('fake-hover');

                /* catch all clicks on anchor tags inside this container */
                $(inPageNaviContainer).on('click', this.inPageNaviClickHandler.bind(this));
            }
        };

        this.inPageNaviClickHandler = function (ev) {
            var clickTarget = $(ev.target),
                inPageTargetAnchor;

            if (clickTarget.prop("tagName") === 'A') {

                ev.preventDefault();

                inPageTargetAnchor = this.getIdFromAnchor(clickTarget);

                if (inPageTargetAnchor === '#top') {
                    this.scrollTo(0);

                    /* reset page navi active state */
                    $('.grid-col--article-sticky-sidebar .card__content a').removeClass('fake-hover');
                    $('.grid-col--article-sticky-sidebar .card__content a').first().addClass('fake-hover');
                    this.setUrlHash('');
                } else if (inPageTargetAnchor.length > 0) {
                    var scrollTo = $(inPageTargetAnchor).offset().top;
                    if(scrollTo !== this.windowScrollPosition) {
                        this.setUrlHash(inPageTargetAnchor);
                        this.scrollTo(scrollTo);
                    }
                }

            }
        };

        this.syncInPageNaviActiveState = function (documentScrollTopPosition) {
            var allInPageTargetAnchors = $('.grid-col--article-sticky-sidebar .card__content a');
            /* make sure first navi entry is selected when no other link target matches */
            allInPageTargetAnchors.each(function(index, item) {
                var current = $(item),
                    inPageTargetAnchor = $(self.getIdFromAnchor(current)),
                    inPageTargetScrollPosition;

                if (inPageTargetAnchor.length > 0) {
                    inPageTargetScrollPosition = inPageTargetAnchor.offset().top;
                    if (parseInt(inPageTargetScrollPosition) <= 0) {
                        $('.grid-col--article-sticky-sidebar .card__content a').removeClass('fake-hover');
                        current.addClass('fake-hover');
                    }
                    else if (documentScrollTopPosition >= parseInt(inPageTargetScrollPosition)-10 && documentScrollTopPosition <= parseInt(inPageTargetScrollPosition)+10){
                        $('.grid-col--article-sticky-sidebar .card__content a').removeClass('fake-hover');
                        current.addClass('fake-hover');
                    }
                    else if (documentScrollTopPosition + window.innerHeight == document.body.scrollHeight){
                        $('.grid-col--article-sticky-sidebar .card__content a').removeClass('fake-hover');
                        $(allInPageTargetAnchors[allInPageTargetAnchors.length-2]).addClass('fake-hover');
                    }
                }
            });

            /* special case 'jump to top' not covered by the logic above */
            if (documentScrollTopPosition === 0) {
                $('.grid-col--article-sticky-sidebar .card__content a').removeClass('fake-hover');
                $(allInPageTargetAnchors[0]).addClass('fake-hover');
            }
        };

        this.documentScrollPositionWatcher = function (ev) {

            var documentScrollTopPosition = ev && ev.pageY ? ev.pageY : this.$window.scrollTop(),
                globalNavigationHeight = 64;

            this.windowScrollPosition = documentScrollTopPosition;

            self.handleStickyPageContentSection(documentScrollTopPosition, globalNavigationHeight);

            if ($('footer.page-footer').length > 0) {
                self.handleStickySidebar(documentScrollTopPosition, globalNavigationHeight);
            }

        };

        this.handleStickySidebar = function (documentScrollTopPosition, globalNavigationHeight) {

            var stickySidebarTop = this.getStickySidebarTop();
            var contentHeight = $('#content').height();

            if ($(this.stickySidebar).length > 0) {
                if (documentScrollTopPosition + globalNavigationHeight + 32 > stickySidebarTop) {
                    this.stickySidebarTopBackup = stickySidebarTop;

                    if($('.page-section.has-sticky-sidebar').offset().top + documentScrollTopPosition + globalNavigationHeight - stickySidebarTop + $('.grid-col--article-sticky-sidebar').height() >= contentHeight){
                        this.showBackToTop();
                    }
                    else if(($(window).height() + documentScrollTopPosition) >= $(document).height()){
                        this.showBackToTop();
                    }
                    else if((documentScrollTopPosition) < ($(document).height() - $('#footer-container').height() - $('.grid-col--article-sticky-sidebar').height() + 280 - parseInt($('#content').css('paddingBottom')))){
                        this.hideBackToTop();
                    }
                    else {
                        this.showBackToTop();
                    }
                }

                if (this.stickySidebarTopBottomBackup === null && (this.stickySidebar.offset().top + this.stickySidebar.height() + 64) > $('footer.page-footer').position().top) {
                    this.stickySidebarTopBottomBackup = this.stickySidebar.offset().top;
                    this.stickySidebar.find('.closable').addClass('close');
                    this.stickySidebar.find('.jump-to-top');
                } else {
                    if (this.stickySidebar.offset().top < this.stickySidebarTopBottomBackup) {
                        this.stickySidebarTopBottomBackup = null;
                        this.stickySidebar.find('.closable').removeClass('close');
                        /* hide jump to top option */
                        self.stickySidebar.find('.jump-to-top').addClass('hidden');
                    }
                }
            }

            this.syncInPageNaviActiveState(documentScrollTopPosition);
        };

        this.showBackToTop = function (){
            self.stickySidebar.find('.jump-to-top').removeClass('hidden');
        };

        this.hideBackToTop = function (){
            self.stickySidebar.find('.jump-to-top').addClass('hidden');
        };

        this.getStickySectionTop = function () {
            var curtop = 0,
                stickyNode = this.stickySection[0];

            if (this.stickySectionTopBackup !== null) {
                return this.stickySectionTopBackup;
            }

            if (stickyNode && stickyNode.offsetParent) {
                do {
                    curtop += stickyNode.offsetTop;
                } while (stickyNode == stickyNode.offsetParent);
                return curtop;
            }
        };

        this.getStickySidebarTop = function () {

            var curtop = 0,
                stickyNode = this.stickySidebar[0];

            if (this.stickySidebarTopBackup !== null) {
                return this.stickySidebarTopBackup;
            }

            if (stickyNode && stickyNode.offsetParent) {
                do {
                    curtop += stickyNode.offsetTop;

                } while (stickyNode == stickyNode.offsetParent);

                return curtop;
            }
        };

        this.handleStickyPageContentSection = function (documentScrollTopPosition, globalNavigationHeight) {

            var stickySectionTop = this.getStickySectionTop(),
                stickySectionHeight,
                stickySectionDescendant;

            if (this.stickySection.length > 0) {

                stickySectionHeight = this.stickySection.height(true);

                if (documentScrollTopPosition + globalNavigationHeight > stickySectionTop && !this.stickySection.hasClass('active')) {

                    this.stickySection.addClass('active');

                    this.stickySectionTopBackup = stickySectionTop;

                    /* fill up the space missing for the active sticky section */

                    stickySectionDescendant = this.stickySection.nextAll('.page-section:not(.hidden)').first();

                    //stickySectionDescendant.css('padding-top', (stickySectionHeight + parseInt(stickySectionDescendant.css('padding-top').replace('px', ''), 10)) + 'px').addClass('sticky-section-descendant');

                } else if (documentScrollTopPosition + globalNavigationHeight <= stickySectionTop && this.stickySection.hasClass('active')) {

                    this.stickySection.removeClass('active');

                    this.stickySectionTopBackup = null;

                    this.stickySection.nextAll('.sticky-section-descendant').removeAttr('style').removeClass('sticky-section-descendant');
                }

            }

        };

        this.getIdFromAnchor = function($anchor) {
            var targetHashMatches = $anchor.attr('href').match(/#.*/);

            if(targetHashMatches.length > 0) {
                return targetHashMatches[0];
            }
            return '';
        };

        this.scrollTo = function(y) {
            $('html, body').animate({ scrollTop: y}, 1000, function() {
                self.syncInPageNaviActiveState();
            });
        };

        this.scrollToHash = function(){
            var hash = this.getUrlHash();

            if ($(hash).length > 0) {
                if(hash.indexOf('acc') > 0){
                    this.scrollTo($(hash).offset().top - 64 + window.scrollY);
                }
                else {
                    this.scrollTo($(hash).offset().top + window.scrollY);
                }
            }
        };

        this.getUrlHash = function(){
            if (window.location.hash.indexOf('open-flyin:') == -1) {
                return window.location.hash;
            }
        };

        this.setUrlHash = function(hash) {
            var loc = window.location;

            // check if history api is available
            if ("replaceState" in history) {
                // prevent clogging up the users browser history by using replaceState if possible
                history.replaceState("", document.title, loc.origin + loc.pathname + loc.search + hash);
            } else {
                // set url hash normally as fallback
                loc.hash = hash;
            }
        };

        this.initInPageNavigation();
        this.startDocumentScrollPositionWatcher();
        this.scrollToHash();
    };

}(jQuery));

$(function () {
    $('.content-sidebar.sticky').sidebar();
});

(function ($) {

    $.fn.cisoDeeplinks = function () {

        this.init = function() {
            var deeplinks = this.find('a'),
                parameters = this.getDeeplinkParameters(),
                showMultipleLinks = parseInt(this.data('showmultiple')) || 0;

            this.substituteParameters(deeplinks, parameters, showMultipleLinks);
        };

        /**
         * Get deeplink parameters from url
         * deeplink parameters are contained in dl[] array
         * @returns {Array}
         */
        this.getDeeplinkParameters = function() {
            var search = window.location.search.substr(1),
                searchArray = search.split('&'),
                parameters = [];

            for(var i = 0; i < searchArray.length; i++) {
                var param = searchArray[i].split('='),
                    key,
                    value = param[1];

                if(key = param[0].match(/^dl\[(.*)]/)) {
                    parameters[key[1]] = value;
                }
            }

            return parameters;
        };

        /**
         * Substitute Url Parameters for matching Placeholders in Deeplinks
         * @param deeplinks
         * @param parameters
         * @param showMultipleLinks
         */
        this.substituteParameters = function(deeplinks, parameters, showMultipleLinks)
        {
            deeplinks.each(function(index, element)
            {
                var el = $(element),
                    href = el.attr('href'),
                    html = el.html();

                for (var key in parameters)
                {
                    var regExp = new RegExp('{' + key + '}', 'g');
                    href = href.replace(regExp, parameters[key]);
                    html = html.replace(regExp, parameters[key]);
                }

                if (href.search(/{(.*)}/) < 0 && html.search(/{(.*)}/) < 0)
                {
                    el.removeClass('hidden').html(html).attr('href', href);

                    if (!showMultipleLinks) {
                        return false;
                    }
                }
            });
        };

        this.init();
    }
}(jQuery));

$(function () {
    $('.ciso_deeplinks').each(function(index, element) {
        $(element).cisoDeeplinks();
    });
});
(function ($) {

    $.fn.toggle = function () {

        this.init = function () {

            // bind toggle events
            $(this).on( "click", function(ev) {
                if($(this).hasClass('expand-icon')){
                    $(this).addClass('collapse-icon');
                    $(this).removeClass('expand-icon');
                    $(this).parentsUntil('.grid-12','div').parent().next().toggleClass('hidden');
                }
                else {
                    $(this).addClass('expand-icon');
                    $(this).removeClass('collapse-icon');
                    $(this).parentsUntil('.grid-12','div').parent().next().toggleClass('hidden');
                }

                ev.preventDefault();
                ev.stopPropagation();
            });

        };

        this.init();
    };

}(jQuery));

$(function () {
    $('a.toggle-anchor').toggle();
});
window.addEventListener('DOMContentLoaded', function() {
    if (document.location.search.includes('downloadArticleAsPdf')) {
        let displayDownloadPdfHintElement = window.document.getElementById('displayDownloadPdfHint');
        if (displayDownloadPdfHintElement !== null) {
            displayDownloadPdfHintElement.style.display = 'block';
        }
    }
});
(function ($) {
    $.fn.revealTitle = function () {

        var self = this;
        hasLineBreaks = false;

        this.init = function () {
            this.initTooltipsBehavior();
        };

        this.initTooltipsBehavior = function() {
            $(self).on('mouseover', this.handleTooltipShow);
            $(self).on('click', this.handleTooltipHide);
            $(self).on('mouseout', this.handleTooltipHide);
        };

        this.showCustomTooltip = function(targetElement) {

            var customTooltipElement,
                targetElementPosition = $(targetElement).offset(),
                targetElementWidth = $(targetElement).innerWidth(),
                targetElementHeight = $(targetElement).innerHeight(),
                customTooltipElementWidth,
                customTooltipElementHeight,
                calculatedLeftTooltipPosition;

            /* recycle existing tooltip element */
            /* there is only one active at one time */

            if ($('.custom-title').length <= 1) {
                $('#content').after('<span class="custom-title"></span>');
            }

            /* only show tooltips when there is no active / visible one */
            if (!$('.custom-title.active').length) {
                customTooltipElement = $('.custom-title:not(.last-used)').first();

                if ($(targetElement).hasClass('with-line-breaks')){
                    customTooltipElement.html(this.replaceCommaWithLineBreaks(targetElement.data.titleCopy));
                }
                else {
                    customTooltipElement.text(targetElement.data.titleCopy);
                }

                /* position tooltip element relative to target element */
                customTooltipElementWidth = $(customTooltipElement).innerWidth();
                customTooltipElementHeight = $(customTooltipElement).innerHeight();

                if ($(targetElement).hasClass('reveal-left')) {
                    calculatedLeftTooltipPosition = targetElementPosition.left - 8;
                } else if ($(targetElement).hasClass('reveal-right')) {
                    calculatedLeftTooltipPosition = targetElementPosition.left + (targetElementWidth - customTooltipElementWidth) - 8;
                } else {
                    calculatedLeftTooltipPosition = targetElementPosition.left + (targetElementWidth / 2) - (customTooltipElementWidth / 2);
                }

                $(customTooltipElement).css({
                    left: calculatedLeftTooltipPosition + 'px',
                    top: (targetElementPosition.top+targetElementHeight) + 'px'
                });

                $(customTooltipElement).addClass('active');
            }
        };

        this.handleTooltipShow = function(ev) {
            var targetElement = self;
            ev.preventDefault();
            if (targetElement) {
                /* move title attribute to customized title element */
                if (targetElement.attr('title')) {
                    targetElement.data.titleCopy = targetElement.attr('title');
                    targetElement.removeAttr('title');
                }
                self.showCustomTooltip(targetElement);
            }
        };

        this.handleTooltipHide = function(ev) {

            var relatedTargetElement = ev.relatedTarget,
                currentTargetElement = ev.currentTarget,
                tooltipContainerElement = $(currentTargetElement).closest('.reveal-title-by-hover')[0],
                customTooltipElement = $('.custom-title.active');

            /* If the target is not the tooltip container), end the function immediately */
            if (!currentTargetElement.isSameNode(tooltipContainerElement)) {
                return;
            }

            /* If relatedTarget/toElement is a child of the tooltip container, end the function immediately */
            /* Custom case added: if the realted target is  the tooltip container, end the function immediately (needed for icon links) */

            if (relatedTargetElement) {
                if (relatedTargetElement.isSameNode(tooltipContainerElement) ||
                    $.contains(tooltipContainerElement, relatedTargetElement)) {
                    return;
                }
            }

            /* When the function has survived all these checks we're certain that the mouse has actually left the layer */
            if (customTooltipElement.length) {
                $('.custom-title').remove('');
                self.attr('title', self.data.titleCopy);
            }
        };

        this.replaceCommaWithLineBreaks = function(text){
            var array = text.split(',');
            var div = document.createElement('i');

            array.forEach(function(el){
                div.appendChild(document.createTextNode(el));
                div.innerHTML += '</br>';
            });

            return $(div)[0].innerHTML;
        };

        this.init();
    };

}(jQuery));

$(function () {
    $('.reveal-title-by-hover').each(function(index, element) {
        $(element).revealTitle();
    });
});

(function ($) {
    $.fn.print = function () {

        var self = this;

        this.init = function () {

            // bind toggle events
            $(self).on( "click", function(ev) {

                window.print();

                ev.preventDefault();
                ev.stopPropagation();
            });

        };

        this.init();
    };

}(jQuery));

$(function () {
    $('a.print-icon').each(function(index, element) {
        $(element).print();
    });
});

/*! (C) Andrea Giammarchi - Mit Style License */
var URLSearchParams=URLSearchParams||function(){"use strict";function URLSearchParams(query){var index,key,value,pairs,i,length,dict=Object.create(null);this[secret]=dict;if(!query)return;if(typeof query==="string"){if(query.charAt(0)==="?"){query=query.slice(1)}for(pairs=query.split("&"),i=0,length=pairs.length;i<length;i++){value=pairs[i];index=value.indexOf("=");if(-1<index){appendTo(dict,decode(value.slice(0,index)),decode(value.slice(index+1)))}else if(value.length){appendTo(dict,decode(value),"")}}}else{if(isArray(query)){for(i=0,length=query.length;i<length;i++){value=query[i];appendTo(dict,value[0],value[1])}}else{for(key in query){appendTo(dict,key,query[key])}}}}var isArray=Array.isArray,URLSearchParamsProto=URLSearchParams.prototype,find=/[!'\(\)~]|%20|%00/g,plus=/\+/g,replace={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},replacer=function(match){return replace[match]},secret="__URLSearchParams__:"+Math.random();function appendTo(dict,name,value){if(name in dict){dict[name].push(""+value)}else{dict[name]=isArray(value)?value:[""+value]}}function decode(str){return decodeURIComponent(str.replace(plus," "))}function encode(str){return encodeURIComponent(str).replace(find,replacer)}URLSearchParamsProto.append=function append(name,value){appendTo(this[secret],name,value)};URLSearchParamsProto["delete"]=function del(name){delete this[secret][name]};URLSearchParamsProto.get=function get(name){var dict=this[secret];return name in dict?dict[name][0]:null};URLSearchParamsProto.getAll=function getAll(name){var dict=this[secret];return name in dict?dict[name].slice(0):[]};URLSearchParamsProto.has=function has(name){return name in this[secret]};URLSearchParamsProto.set=function set(name,value){this[secret][name]=[""+value]};URLSearchParamsProto.forEach=function forEach(callback,thisArg){var dict=this[secret];Object.getOwnPropertyNames(dict).forEach(function(name){dict[name].forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)};URLSearchParamsProto.toJSON=function toJSON(){return{}};URLSearchParamsProto.toString=function toString(){var dict=this[secret],query=[],i,key,name,value;for(key in dict){name=encode(key);for(i=0,value=dict[key];i<value.length;i++){query.push(name+"="+encode(value[i]))}}return query.join("&")};var dP=Object.defineProperty,gOPD=Object.getOwnPropertyDescriptor,createSearchParamsPollute=function(search){function append(name,value){URLSearchParamsProto.append.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function del(name){URLSearchParamsProto["delete"].call(this,name);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function set(name,value){URLSearchParamsProto.set.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}return function(sp,value){sp.append=append;sp["delete"]=del;sp.set=set;return dP(sp,"_usp",{configurable:true,writable:true,value:value})}},createSearchParamsCreate=function(polluteSearchParams){return function(obj,sp){dP(obj,"_searchParams",{configurable:true,writable:true,value:polluteSearchParams(sp,obj)});return sp}},updateSearchParams=function(sp){var append=sp.append;sp.append=URLSearchParamsProto.append;URLSearchParams.call(sp,sp._usp.search.slice(1));sp.append=append},verifySearchParams=function(obj,Class){if(!(obj instanceof Class))throw new TypeError("'searchParams' accessed on an object that "+"does not implement interface "+Class.name)},upgradeClass=function(Class){var ClassProto=Class.prototype,searchParams=gOPD(ClassProto,"searchParams"),href=gOPD(ClassProto,"href"),search=gOPD(ClassProto,"search"),createSearchParams;if(!searchParams&&search&&search.set){createSearchParams=createSearchParamsCreate(createSearchParamsPollute(search));Object.defineProperties(ClassProto,{href:{get:function(){return href.get.call(this)},set:function(value){var sp=this._searchParams;href.set.call(this,value);if(sp)updateSearchParams(sp)}},search:{get:function(){return search.get.call(this)},set:function(value){var sp=this._searchParams;search.set.call(this,value);if(sp)updateSearchParams(sp)}},searchParams:{get:function(){verifySearchParams(this,Class);return this._searchParams||createSearchParams(this,new URLSearchParams(this.search.slice(1)))},set:function(sp){verifySearchParams(this,Class);createSearchParams(this,sp)}}})}};upgradeClass(HTMLAnchorElement);if(/^function|object$/.test(typeof URL)&&URL.prototype)upgradeClass(URL);return URLSearchParams}();(function(URLSearchParamsProto){var iterable=function(){try{return!!Symbol.iterator}catch(error){return false}}();if(!("forEach"in URLSearchParamsProto)){URLSearchParamsProto.forEach=function forEach(callback,thisArg){var names=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(name){if(!name.length||name in names)return;(names[name]=this.getAll(name)).forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)}}if(!("keys"in URLSearchParamsProto)){URLSearchParamsProto.keys=function keys(){var items=[];this.forEach(function(value,name){items.push(name)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("values"in URLSearchParamsProto)){URLSearchParamsProto.values=function values(){var items=[];this.forEach(function(value){items.push(value)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("entries"in URLSearchParamsProto)){URLSearchParamsProto.entries=function entries(){var items=[];this.forEach(function(value,name){items.push([name,value])});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(iterable&&!(Symbol.iterator in URLSearchParamsProto)){URLSearchParamsProto[Symbol.iterator]=URLSearchParamsProto.entries}if(!("sort"in URLSearchParamsProto)){URLSearchParamsProto.sort=function sort(){var entries=this.entries(),entry=entries.next(),done=entry.done,keys=[],values=Object.create(null),i,key,value;while(!done){value=entry.value;key=value[0];keys.push(key);if(!(key in values)){values[key]=[]}values[key].push(value[1]);entry=entries.next();done=entry.done}keys.sort();for(i=0;i<keys.length;i++){this["delete"](keys[i])}for(i=0;i<keys.length;i++){key=keys[i];this.append(key,values[key].shift())}}}})(URLSearchParams.prototype);
(function ($) {
    $.fn.insertData = function () {
        var self = this;
        this.init = function () {
            $.ajax({
                data: {
                    type: 5020,
                    no_cache: 1,
                    ce: this.attr('id').replace('a','')
                },
                success: function (result)
                {
                   if(result.trim().length > 0){
                       markup = '<div class="sheet-agent"><p>Agent related content:</p>'+result.trim()+"</div>";
                       self.replaceWith(markup);
                   }
                }
            });
        };
        this.init();
    };
}(jQuery));

$(function () {
    $('div.agent').each(function(index, element) {
        $(element).insertData();
    });
});
/*! exos - 2.1.3 (6ea30763) (c) IONOS, 2024 */
var EXOS;(()=>{var t={381:()=>{[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(t){Object.prototype.hasOwnProperty.call(t,"prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){const t=document.createDocumentFragment();for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];n.forEach((function(e){const n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.insertBefore(t,this.firstChild)}})}))},699:()=>{!function(t){const e={},n={attachEvent:function(e,n,o){if("addEventListener"in t)return e.addEventListener(n,o,!1)},fireFakeEvent:function(t,e){if(document.createEvent)return t.target.dispatchEvent(n.createEvent(e))},createEvent:function(e){if(document.createEvent){const n=t.document.createEvent("HTMLEvents");return n.initEvent(e,!0,!0),n.eventName=e,n}},getRealEvent:function(t){return t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches.length?t.originalEvent.touches[0]:t.touches&&t.touches.length?t.touches[0]:t}},o=[{test:("propertyIsEnumerable"in t||"hasOwnProperty"in document)&&(Object.prototype.propertyIsEnumerable.call(t,"ontouchstart")||Object.prototype.hasOwnProperty.call(document,"ontouchstart")||Object.prototype.hasOwnProperty.call(t,"ontouchstart")),events:{start:"touchstart",move:"touchmove",end:"touchend"}},{test:t.navigator.msPointerEnabled,events:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},{test:t.navigator.pointerEnabled,events:{start:"pointerdown",move:"pointermove",end:"pointerup"}}];e.options={eventName:"exosTap",fingerMaxOffset:11};let i,c={};const r=function(t){return n.attachEvent(document.documentElement,i[t],s[t])},s={start:function(t){t=n.getRealEvent(t),c.start=[t.pageX,t.pageY],c.offset=[0,0]},move:function(t){if(!c.start&&!c.move)return!1;t=n.getRealEvent(t),c.move=[t.pageX,t.pageY],c.offset=[Math.abs(c.move[0]-c.start[0]),Math.abs(c.move[1]-c.start[1])]},end:function(o){if(o=n.getRealEvent(o),c.offset&&o.preventDefault&&c.offset[0]<e.options.fingerMaxOffset&&c.offset[1]<e.options.fingerMaxOffset&&!n.fireFakeEvent(o,e.options.eventName)){if(t.navigator.msPointerEnabled||t.navigator.pointerEnabled){const t=function(e){e.preventDefault(),o.target.removeEventListener("click",t)};o.target.addEventListener("click",t,!1)}o.preventDefault()}c={}},click:function(t){if(!n.fireFakeEvent(t,e.options.eventName))return t.preventDefault()}},a=function(){let t=0;for(;t<o.length;t++)if(o[t].test){i=o[t].events,r("start"),r("move"),r("end");break}return n.attachEvent(document.documentElement,"click",s.click)};"complete"===document.readyState?setTimeout(a,0):n.attachEvent(t,"load",a),"function"==typeof t.define&&t.define.amd?t.define((function(){return a(),e})):t.Tap=e}(window)},767:()=>{var t;"function"!=typeof(t=window.Element.prototype).matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(t){for(var e=this,n=(e.document||e.ownerDocument).querySelectorAll(t),o=0;n[o]&&n[o]!==e;)++o;return Boolean(n[o])}),"function"!=typeof t.closest&&(t.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null})},914:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.d(o,{default:()=>Ti});var t={};n.r(t),n.d(t,{initialize:()=>D});var e={};n.r(e),n.d(e,{activating:()=>Et,activatingWithIcon:()=>kt,critical:()=>yt,criticalWithIcon:()=>St,error:()=>Lt,hide:()=>At,hideSnackbar:()=>ft,neutral:()=>bt,neutralWithIcon:()=>_t,showActivatingSnackbar:()=>rt,showActivatingSnackbarWithIcon:()=>ut,showCriticalSnackbar:()=>ot,showCriticalSnackbarWithIcon:()=>lt,showErrorSnackbar:()=>it,showNeutralSnackbar:()=>ct,showNeutralSnackbarWithIcon:()=>dt,showSuccessSnackbar:()=>et,showSuccessSnackbarWithIcon:()=>st,showWarningSnackbar:()=>nt,showWarningSnackbarWithIcon:()=>at,success:()=>ht,successWithIcon:()=>wt,warning:()=>vt,warningWithIcon:()=>xt});var i={};n.r(i),n.d(i,{initialize:()=>Ut});var c={};n.r(c),n.d(c,{initialize:()=>ce});var r={};n.r(r),n.d(r,{initialize:()=>ve});var s={};n.r(s),n.d(s,{initialize:()=>Te});var a={};n.r(a),n.d(a,{initialize:()=>Be});var l={};n.r(l),n.d(l,{initialize:()=>Je});var d={};n.r(d),n.d(d,{hidePopover:()=>mo,initialize:()=>ho,showPopover:()=>po});var u={};n.r(u),n.d(u,{closeOverlay:()=>Co,initialize:()=>Po,openOverlay:()=>To});var f={};n.r(f),n.d(f,{initialize:()=>_i});n(914),n(767),n(699),n(381);function p(t){const e=document;t&&"function"==typeof t&&("complete"===e.readyState||"loading"!==e.readyState&&!e.documentElement.doScroll?window.setTimeout(t,1):e.addEventListener("DOMContentLoaded",(function e(n){document.removeEventListener("DOMContentLoaded",e),t(n)})))}const m=["ionos","arsys","strato"],g="oao.exos.theme";function h(t){-1!==m.indexOf(t)&&document.documentElement.setAttribute("data-exos-theme",t)}p((function(){const t=new URLSearchParams(window.location.search).get("__exos_theme");if(t&&-1!==m.indexOf(t))return e=t,void(-1!==m.indexOf(e)&&(window.localStorage.setItem(g,e),h(e)));var e;const n=window.localStorage.getItem(g);n&&-1!==m.indexOf(n)&&h(n)}));const v="accordion",y=v+"__item",L=y+"--expanded",b=y+"-header",E="accordion-selection-mode",w="multiple";function x(t){if(!t||!t.target)return;const e=t.target,n=e.closest("."+v);if(!n)return;if(!e.classList.contains(b))return;const o=e.closest("."+y);if(!o)return;t.preventDefault();const i=o.classList.contains(L),c=n.getAttribute("data-"+E);let r=!1;if(c&&c.toLowerCase()===w&&(r=!0),r)o.classList.toggle(L);else{n.querySelectorAll("."+y).forEach((function(t){t.classList.remove(L)})),i||o.classList.add(L)}}p((function(){document.body.addEventListener("exosTap",x),document.body.addEventListener("keyup",(function(t){(t&&"Enter"===t.key||" "===t.key)&&x(t)}))}));const S="data-autofill-text",_="data-autofill-target";let k=!1;function A(){k=!1}function q(){k=!0}function T(t){if(k)return;if(!t||!t.target)return;const e=t.target,n=e.getAttribute(S);if(!n)return;const o=e.getAttribute(_);o&&n&&o&&(document.querySelector("#"+o).value=n)}function C(){document.querySelectorAll("["+_+"]").forEach((function(t){var e;(e=t)&&(e.addEventListener("exosTap",T),e.addEventListener("touchstart",A),e.addEventListener("touchmove",q))}))}p(C);const D=C,O="button",M=O+"--primary",N=O+"--secondary",P=O+"--tertiary",R=O+"--bright",W=O+"--disabled",I=O+"--with-loader",H=O+"--loading";p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e)return;if(!e.classList.contains(I))return;if(e.classList.contains(W))return;if(e.classList.contains(H))return t.preventDefault(),void t.stopPropagation();const n=document.createElement("div");n.classList.add("button__loader");const o=document.createElement("div");o.classList.add("loading-circle"),o.classList.add("loading-circle--small"),e.classList.contains(M)&&o.classList.add("loading-circle--bright"),e.classList.contains(R)&&o.classList.add("loading-circle--bright"),e.classList.contains(N)&&o.classList.add("loading-circle--secondary"),e.classList.contains(P)&&o.classList.add("loading-circle--secondary");for(let t=0;t<3;t++){const t=document.createElement("span");t.classList.add("loading-circle__circle"),o.appendChild(t)}n.appendChild(o),e.classList.add(H),e.querySelector(".loading-circle")||e.appendChild(n)}))}));const z="snackbar-container",B="snackbar",F=B+"--visible",j=B+"--hidden",V=B+"--critical-solid",X=B+"--warning-solid",Y=B+"--success-solid",U=B+"--activating-solid",G=B+"--neutral-solid",$=B+"--with-icon";let J=null,K=!1,Q=!1,Z=!1,tt=!1;function et(t){pt(),mt(t,Y)}function nt(t){pt(),mt(t,X)}function ot(t){pt(),mt(t,V)}function it(t){pt(),mt(t,V)}function ct(t){pt(),mt(t,G)}function rt(t){pt(),mt(t,U)}function st(t){pt(),mt(t,Y,$)}function at(t){pt(),mt(t,X,$)}function lt(t){pt(),mt(t,V,$)}function dt(t){pt(),mt(t,G,$)}function ut(t){pt(),mt(t,U,$)}function ft(){tt&&gt()}function pt(){tt||(tt=window.document.createElement("div"),tt.classList.add(z),tt.setAttribute("role","alert"),tt.setAttribute("aria-live","polite"),window.document.body.appendChild(tt),J=window.document.createElement("div"),J.id=B,J.classList.add(B),tt.appendChild(J))}function mt(t,e,n){J&&(clearTimeout(Q),clearTimeout(Z),clearTimeout(K),J.classList.add(j),K=setTimeout((function(){gt(),J.innerText=t,J.classList.add(e),n&&J.classList.add(n),J.classList.add(F),J.classList.remove(j)}),200),Q=setTimeout((function(){J.classList.add(j)}),2e3),Z=setTimeout((function(){gt()}),4e3))}function gt(){J&&(J.classList.remove(F),J.classList.remove(j),J.classList.remove(Y),J.classList.remove(X),J.classList.remove(V),J.classList.remove(G),J.classList.remove(U),J.classList.remove($))}const ht=et,vt=nt,yt=ot,Lt=it,bt=ct,Et=rt,wt=st,xt=at,St=lt,_t=dt,kt=ut,At=ft;p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e.classList.contains("clipboard-link"))return;let n=e.getAttribute("data-clipboard");if(!n){const t=e.getAttribute("data-clipboard-target"),o=t.startsWith(".")?t:"#"+t,i=document.querySelectorAll(o)||[];if(!i||0===i.length)return;if(n=i[0].value||i[0].innerText,!n)return}t.preventDefault();const o=e.getAttribute("data-clipboard-success");navigator.clipboard.writeText(n).then((function(){o&&et(o)}))}))}));const qt="context-menu",Tt=qt+"--expanded",Ct=qt+"__trigger",Dt=Ct+"--active",Ot=qt+"__list",Mt=qt+"__list-link",Nt=Ot+"--visible";function Pt(){document.querySelectorAll("."+Nt).forEach((function(t){t.classList.remove(Nt)})),document.querySelectorAll("."+Dt).forEach((function(t){t.classList.remove(Dt)})),document.querySelectorAll("."+Tt).forEach((function(t){t.classList.remove(Tt)}))}p((function(){document.body.addEventListener("exosTap",(function(t){if(!t||!t.target)return;const e=t.target;if(!e.classList.contains(Mt)){if(e.classList.contains(Ct)){return function(t){if(!t)return;const e=t.querySelector("."+Ct),n=t.querySelector("."+Ot);if(!e||!n)return;n.classList.contains(Nt)?Pt():(Pt(),t.classList.add(Tt),e.classList.add(Dt),n.classList.add(Nt))}(e.closest("."+qt)),void t.preventDefault()}Pt()}})),document.documentElement.addEventListener("keydown",(function(t){"escape"===(t.key||"").toLowerCase()&&Pt()}))}));const Rt="__direct-selection",Wt="__direct-selection--target",It="context-menu__trigger";let Ht=!1;function zt(){Ht=!1}function Bt(){Ht=!0}function Ft(t){if(!t||!t.target)return!1;if(t.target.classList.contains(Wt))return!1;const e=t.target.closest("."+Rt);if(!e)return!1;const n=e.querySelector("."+Wt);return!!n&&{container:e,target:n}}function jt(t){const e=Ft(t);if(!1===e)return;if(Ht)return;const n=t.target||!1;("A"!==n.nodeName||n.classList.contains(Wt))&&(n.classList.contains(It)||(t.preventDefault(),"SELECT"===e.target.nodeName||"INPUT"===e.target.nodeName?e.target.focus():e.target.click()))}function Vt(t){const e=Ft(t);if(!1===e)return;const n=t.target||!1;("A"!==n.nodeName||n.classList.contains(Wt))&&(n.classList.contains(It)||e.target.classList.add("__hover"))}function Xt(t){const e=Ft(t);!1!==e&&e.target.classList.remove("__hover")}function Yt(){document.querySelectorAll("."+Rt).forEach((function(t){var e;(e=t)&&(e.addEventListener("mouseover",Vt),e.addEventListener("mouseout",Xt),e.addEventListener("exosTap",jt),e.addEventListener("touchstart",zt),e.addEventListener("touchmove",Bt))}))}p(Yt);const Ut=Yt,Gt="ghost-button",$t=Gt+"--bright",Jt=Gt+"--secondary",Kt=Gt+"--with-loader",Qt=Gt+"--loading";p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e)return;if(!e.classList.contains(Kt))return;const n=document.createElement("span");n.classList.add("ghost-button__loader");const o=document.createElement("span");o.classList.add("loading-circle"),o.classList.add("loading-circle--small"),e.classList.contains($t)&&o.classList.add("loading-circle--bright"),e.classList.contains(Jt)&&o.classList.add("loading-circle--secondary");for(let t=0;t<3;t++){const t=document.createElement("span");t.classList.add("loading-circle__circle"),o.appendChild(t)}n.appendChild(o),e.classList.add(Qt),e.querySelector(".loading-circle")||e.appendChild(n)}))}));const Zt="exosinit";const te="data-counter",ee="data-counter-ref";let ne=0;function oe(t){if(!t)return;if(!(e=t)||"true"===e.dataset[Zt]||(e.dataset[Zt]="true",0))return;var e;const n=document.createElement("p");n.classList.add("input-counter"),n.id="input-counter__"+ne;const o=t.parentNode||!1;!1!==o&&(o.insertBefore(n,t.nextSibling),t.setAttribute(ee,"input-counter__"+ne),ne+=1,n.textContent=t.value.length+"/"+t.getAttribute(te),["keyup","input"].forEach((function(e){t.addEventListener(e,function(){const e=t.value.length,o=parseInt(t.getAttribute(te));n.textContent=e+"/"+o,e>o?n.classList.add("input-counter--error"):n.classList.remove("input-counter--error")}.bind(t,n))})))}function ie(){document.querySelectorAll("["+te+"]").forEach((function(t){oe(t)}))}p(ie);const ce=ie,re="input-text-group",se=re+"--focus",ae=re+"--empty",le="input-text",de=re+"__action",ue=de+"--reset",fe=de+"--show-password",pe=de+"--hide-password",me=de+"--copy";function ge(t){if(!t)return;const e=t.querySelector("."+le);if(!e)return;let n=e.value||"";n=n.trim(),""===n?t.classList.add(ae):t.classList.remove(ae)}function he(){document.querySelectorAll("."+re).forEach(ge)}p((function(){function t(t){if(!t)return;const e=t.target.closest("."+re);e&&ge(e)}he(),document.body.addEventListener("focus",(function(t){if(!t)return;const e=t.target.closest("."+re);e&&e.classList.add(se)}),!0),document.body.addEventListener("blur",(function(t){if(!t)return;const e=t.target.closest("."+re);e&&e.classList.remove(se)}),!0),document.body.addEventListener("change",t,!0),document.body.addEventListener("keyup",t,!0),document.body.addEventListener("click",(function(t){if(!t)return;const e=t.target;if(!e||!e.classList.contains(de))return;const n=e.closest("."+re);if(!n)return;const o=n.querySelector("."+le);return o?e.classList.contains(ue)?(t.preventDefault(),o.value="",ge(n),void o.focus()):e.classList.contains(fe)?(t.preventDefault(),"password"===o.type&&(o.type="text",e.classList.replace(fe,pe)),ge(n),void o.focus()):e.classList.contains(pe)?(t.preventDefault(),"text"===o.type&&(o.type="password",e.classList.replace(pe,fe)),ge(n),void o.focus()):void(e.classList.contains(me)&&(t.preventDefault(),o.select(),document.execCommand("copy"),document.getSelection().removeAllRanges())):void 0}))}));const ve=he,ye="left-navigation",Le=ye+"__toggle",be="__left-navigation-active",Ee="(max-width: 1184px)",we=ye+"__first-level-link",xe=we+"--collapsed",Se=we+"--expanded",_e=ye+"__second-level-link",ke=_e+"--collapsed",Ae=_e+"--expanded";function qe(){const t=document.querySelector("."+Le);t&&t.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),document.body.classList.toggle(be)}))}p((function(){document.body.addEventListener("exosTap",(function(t){if(!t||!t.target)return;t.target.closest("."+ye)?function(t){const e=t.target,n=e.classList||!1,o=document.querySelectorAll("."+we),i=document.querySelectorAll("."+Ae);if(!1===n||!n.contains(xe)&&!n.contains(Se)&&!n.contains(_e)&&!n.contains(ke)&&!n.contains(Ae))return;e.classList.contains(xe)?(o.forEach((function(t){t.classList.add(xe),t.classList.remove(Se)})),e.classList.add(Se),e.classList.remove(xe)):e.classList.contains(Se)&&(e.classList.add(xe),e.classList.remove(Se));e.classList.contains(ke)?(i.forEach((function(t){t.classList.add(ke),t.classList.remove(Ae)})),e.classList.add(Ae),e.classList.remove(ke)):e.classList.contains(Ae)?(e.classList.add(ke),e.classList.remove(Ae)):e.classList.contains(_e)&&i.forEach((function(t){t.classList.add(ke),t.classList.remove(Ae)}))}(t):window.matchMedia(Ee).matches&&document.body.classList.contains(be)&&(t.stopPropagation(),t.preventDefault(),document.body.classList.remove(be))})),qe()}));const Te=qe,Ce="page-tabbar",De=Ce+"__items",Oe=Ce+"__item",Me=Ce+"__navigation--right",Ne=Ce+"__navigation--left",Pe="page-tabbar__navigation--hidden",Re=100;function We(t){const e=t.querySelectorAll("."+Oe);return Array.from(e).reduce(((t,e)=>t+e.offsetWidth),0)}function Ie(t){const e=t.querySelector("."+De),n=e.offsetWidth,o=We(t),i=t.querySelector("."+Me),c=t.querySelector("."+Ne);null!==i&&null!==c&&(o>n?(e.classList.add("page-tabbar__items--scrollable"),i.classList.remove(Pe)):(i.classList.add(Pe),c.classList.add(Pe),e.classList.remove("page-tabbar__items--scrollable")))}function He(t,e){t.preventDefault();const n=t.currentTarget,o=n.querySelector("."+De),i="wheel"===e?t.deltaY>0:t.touches[0].clientX>0,c=o.offsetWidth,r=We(n),s=n.querySelector("."+Ne),a=n.querySelector("."+Me);o.scrollLeft+=i?Re:-Re,r>c&&(i&&null!==s?s.classList.remove(Pe):i||null===a||a.classList.remove(Pe))}function ze(){document.querySelectorAll("."+Ce).forEach((function(t){const e=t;Ie(e),function(t){const e=t.querySelector("."+De),n=e.offsetWidth,o=We(t)-n,i=t.querySelector("."+Me),c=t.querySelector("."+Ne);let r=e.scrollLeft;null!==i&&null!==c&&(i.addEventListener("click",(function(){r+=Re,r>=o+100&&(r=o+100,i.classList.add(Pe)),e.scrollLeft=r,c.classList.remove(Pe)})),c.addEventListener("click",(function(){i.classList.remove(Pe),r-=Re,r<=0&&(r=0,c.classList.add(Pe)),e.scrollLeft=r})))}(e),e.onwheel=t=>He(t,"wheel"),e.ontouchmove=t=>He(t,"touch")})),window.addEventListener("resize",(function(){document.querySelectorAll("."+Ce).forEach((function(t){Ie(t)}))}))}p(ze);const Be=ze,Fe="page-transition",je=Fe+"--blocking",Ve=Fe+"__indicator-bar",Xe=Ve+"--running",Ye=Fe+"__blocker",Ue="(max-width: 1184px)";function Ge(){const t=document.querySelector(".content, .page-content");if(t){const e=document.createElement("span");e.className=Ve,t.prepend(e)}if(document.body){const t=document.createElement("div");t.className=Ye,t.innerHTML='<div class="page-transition__loading-spin loading-spin"></div>',document.body.appendChild(t)}}function $e(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}p((function(){Ge(),window.addEventListener("beforeunload",(function(t){const e=document.body;if(e){if(t&&t.target&&t.target.activeElement){const e=t.target.activeElement,n=$e(e,'[href^="mailto:"]'),o=$e(e,'[href^="tel:"]');if(n||o)return}e.classList.contains(je)?function(){const t=document.querySelector("."+Ye);t&&t.classList.add(Ye+"--active")}():window.matchMedia(Ue).matches||function(){const t=document.querySelector("."+Ve);t&&t.classList.add(Xe)}()}}))}));const Je=Ge,Ke="panel",Qe=Ke+"__item",Ze=Qe+"--expanded",tn=Qe+"--closed",en=Ke+"--disable-js";p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target,n=e.closest("."+Ke),o=e.closest("."+Qe),i=e.closest(".panel__item-header");if(!n||!o||!i)return;if(n.classList.contains(en))return;t.preventDefault();const c=n.getAttribute("data-panel-selection-mode");let r=!1;if(c&&"multiple"===c.toLowerCase()&&(r=!0),r)o.classList.toggle(Ze);else{const t=document.querySelectorAll("."+Qe);o.classList.contains(Ze)?(t.forEach((function(t){t.classList.remove(Ze)})),o.classList.remove(Ze),o.classList.add(tn)):(t.forEach((function(t){t.classList.remove(Ze)})),o.classList.add(Ze),o.classList.remove(tn))}}))}));const nn=Math.min,on=Math.max,cn=Math.round,rn=(Math.floor,t=>({x:t,y:t}));function sn(t){return t.split("-")[0]}function an(t){return t.split("-")[1]}function ln(t){return"y"===t?"height":"width"}function dn(t){return["top","bottom"].includes(sn(t))?"y":"x"}function un(t){return"x"===dn(t)?"y":"x"}function fn(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function pn(t,e,n){let{reference:o,floating:i}=t;const c=dn(e),r=un(e),s=ln(r),a=sn(e),l="y"===c,d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,f=o[s]/2-i[s]/2;let p;switch(a){case"top":p={x:d,y:o.y-i.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-i.width,y:u};break;default:p={x:o.x,y:o.y}}switch(an(e)){case"start":p[r]-=f*(n&&l?-1:1);break;case"end":p[r]+=f*(n&&l?-1:1)}return p}function mn(t){return vn(t)?(t.nodeName||"").toLowerCase():"#document"}function gn(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function hn(t){var e;return null==(e=(vn(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function vn(t){return t instanceof Node||t instanceof gn(t).Node}function yn(t){return t instanceof Element||t instanceof gn(t).Element}function Ln(t){return t instanceof HTMLElement||t instanceof gn(t).HTMLElement}function bn(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof gn(t).ShadowRoot)}function En(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=An(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function wn(t){return["table","td","th"].includes(mn(t))}function xn(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function Sn(t){const e=_n(),n=yn(t)?An(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function _n(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function kn(t){return["html","body","#document"].includes(mn(t))}function An(t){return gn(t).getComputedStyle(t)}function qn(t){return yn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Tn(t){if("html"===mn(t))return t;const e=t.assignedSlot||t.parentNode||bn(t)&&t.host||hn(t);return bn(e)?e.host:e}function Cn(t){const e=Tn(t);return kn(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ln(e)&&En(e)?e:Cn(e)}function Dn(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=Cn(t),c=i===(null==(o=t.ownerDocument)?void 0:o.body),r=gn(i);return c?e.concat(r,r.visualViewport||[],En(i)?i:[],r.frameElement&&n?Dn(r.frameElement):[]):e.concat(i,Dn(i,[],n))}function On(t){const e=An(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=Ln(t),c=i?t.offsetWidth:n,r=i?t.offsetHeight:o,s=cn(n)!==c||cn(o)!==r;return s&&(n=c,o=r),{width:n,height:o,$:s}}function Mn(t){return yn(t)?t:t.contextElement}function Nn(t){const e=Mn(t);if(!Ln(e))return rn(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:c}=On(e);let r=(c?cn(n.width):n.width)/o,s=(c?cn(n.height):n.height)/i;return r&&Number.isFinite(r)||(r=1),s&&Number.isFinite(s)||(s=1),{x:r,y:s}}const Pn=rn(0);function Rn(t){const e=gn(t);return _n()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Pn}function Wn(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),c=Mn(t);let r=rn(1);e&&(o?yn(o)&&(r=Nn(o)):r=Nn(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==gn(t))&&e}(c,n,o)?Rn(c):rn(0);let a=(i.left+s.x)/r.x,l=(i.top+s.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(c){const t=gn(c),e=o&&yn(o)?gn(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=Nn(i),e=i.getBoundingClientRect(),o=An(i),c=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,l*=t.y,d*=t.x,u*=t.y,a+=c,l+=r,n=gn(i),i=n.frameElement}}return fn({width:d,height:u,x:a,y:l})}function In(t){return Wn(hn(t)).left+qn(t).scrollLeft}function Hn(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=gn(t),o=hn(t),i=n.visualViewport;let c=o.clientWidth,r=o.clientHeight,s=0,a=0;if(i){c=i.width,r=i.height;const t=_n();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:c,height:r,x:s,y:a}}(t,n);else if("document"===e)o=function(t){const e=hn(t),n=qn(t),o=t.ownerDocument.body,i=on(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),c=on(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+In(t);const s=-n.scrollTop;return"rtl"===An(o).direction&&(r+=on(e.clientWidth,o.clientWidth)-i),{width:i,height:c,x:r,y:s}}(hn(t));else if(yn(e))o=function(t,e){const n=Wn(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,c=Ln(t)?Nn(t):rn(1);return{width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:i*c.x,y:o*c.y}}(e,n);else{const n=Rn(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return fn(o)}function zn(t,e){const n=Tn(t);return!(n===e||!yn(n)||kn(n))&&("fixed"===An(n).position||zn(n,e))}function Bn(t,e,n){const o=Ln(e),i=hn(e),c="fixed"===n,r=Wn(t,!0,c,e);let s={scrollLeft:0,scrollTop:0};const a=rn(0);if(o||!o&&!c)if(("body"!==mn(e)||En(i))&&(s=qn(e)),o){const t=Wn(e,!0,c,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=In(i));return{x:r.left+s.scrollLeft-a.x,y:r.top+s.scrollTop-a.y,width:r.width,height:r.height}}function Fn(t){return"static"===An(t).position}function jn(t,e){return Ln(t)&&"fixed"!==An(t).position?e?e(t):t.offsetParent:null}function Vn(t,e){const n=gn(t);if(xn(t))return n;if(!Ln(t)){let e=Tn(t);for(;e&&!kn(e);){if(yn(e)&&!Fn(e))return e;e=Tn(e)}return n}let o=jn(t,e);for(;o&&wn(o)&&Fn(o);)o=jn(o,e);return o&&kn(o)&&Fn(o)&&!Sn(o)?n:o||function(t){let e=Tn(t);for(;Ln(e)&&!kn(e);){if(Sn(e))return e;if(xn(e))return null;e=Tn(e)}return null}(t)||n}const Xn={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const c="fixed"===i,r=hn(o),s=!!e&&xn(e.floating);if(o===r||s&&c)return n;let a={scrollLeft:0,scrollTop:0},l=rn(1);const d=rn(0),u=Ln(o);if((u||!u&&!c)&&(("body"!==mn(o)||En(r))&&(a=qn(o)),Ln(o))){const t=Wn(o);l=Nn(o),d.x=t.x+o.clientLeft,d.y=t.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+d.x,y:n.y*l.y-a.scrollTop*l.y+d.y}},getDocumentElement:hn,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const c=[..."clippingAncestors"===n?xn(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=Dn(t,[],!1).filter((t=>yn(t)&&"body"!==mn(t))),i=null;const c="fixed"===An(t).position;let r=c?Tn(t):t;for(;yn(r)&&!kn(r);){const e=An(r),n=Sn(r);n||"fixed"!==e.position||(i=null),(c?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||En(r)&&!n&&zn(t,r))?o=o.filter((t=>t!==r)):i=e,r=Tn(r)}return e.set(t,o),o}(e,this._c):[].concat(n),o],r=c[0],s=c.reduce(((t,n)=>{const o=Hn(e,n,i);return t.top=on(o.top,t.top),t.right=nn(o.right,t.right),t.bottom=nn(o.bottom,t.bottom),t.left=on(o.left,t.left),t}),Hn(e,r,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Vn,getElementRects:async function(t){const e=this.getOffsetParent||Vn,n=this.getDimensions,o=await n(t.floating);return{reference:Bn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=On(t);return{width:e,height:n}},getScale:Nn,isElement:yn,isRTL:function(t){return"rtl"===An(t).direction}};const Yn=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:c,placement:r,middlewareData:s}=e,a=await async function(t,e){const{placement:n,platform:o,elements:i}=t,c=await(null==o.isRTL?void 0:o.isRTL(i.floating)),r=sn(n),s=an(n),a="y"===dn(n),l=["left","top"].includes(r)?-1:1,d=c&&a?-1:1,u=(p=t,"function"==typeof(f=e)?f(p):f);var f,p;let{mainAxis:m,crossAxis:g,alignmentAxis:h}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return s&&"number"==typeof h&&(g="end"===s?-1*h:h),a?{x:g*d,y:m*l}:{x:m*l,y:g*d}}(e,t);return r===(null==(n=s.offset)?void 0:n.placement)&&null!=(o=s.arrow)&&o.alignmentOffset?{}:{x:i+a.x,y:c+a.y,data:{...a,placement:r}}}}},Un=(t,e,n)=>{const o=new Map,i={platform:Xn,...n},c={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:c=[],platform:r}=n,s=c.filter(Boolean),a=await(null==r.isRTL?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=pn(l,o,a),f=o,p={},m=0;for(let n=0;n<s.length;n++){const{name:c,fn:g}=s[n],{x:h,y:v,data:y,reset:L}=await g({x:d,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:p,rects:l,platform:r,elements:{reference:t,floating:e}});d=null!=h?h:d,u=null!=v?v:u,p={...p,[c]:{...p[c],...y}},L&&m<=50&&(m++,"object"==typeof L&&(L.placement&&(f=L.placement),L.rects&&(l=!0===L.rects?await r.getElementRects({reference:t,floating:e,strategy:i}):L.rects),({x:d,y:u}=pn(l,f,a))),n=-1)}return{x:d,y:u,placement:f,strategy:i,middlewareData:p}})(t,e,{...i,platform:c})},Gn="popover",$n=Gn+"--active",Jn=Gn+"__show-next",Kn=Gn+"__close",Qn="data-popover-id",Zn="data-popover-target",to="data-popover-group",eo="data-popover-group-target",no="data-popover-trigger";let oo=[],io=[];const co=["top","bottom","left","right"],ro=["bottom","top","right","left"];function so(){document.querySelectorAll("."+Gn+"["+to+"]").forEach((function(t){if(t)if(0===oo.length)oo.push({group:t.dataset.popoverGroup,popovers:[{id:t.dataset.popoverId,step:t.dataset.popoverStep}]});else{let e=null;for(let n=0;n<oo.length;n++)if(oo[n].group===t.dataset.popoverGroup){e=oo[n];break}e?e.popovers.push({id:t.dataset.popoverId,step:t.dataset.popoverStep}):oo.push({group:t.dataset.popoverGroup,popovers:[{id:t.dataset.popoverId,step:t.dataset.popoverStep}]})}})),function(){if(0===oo.length)return;for(let t=0;t<oo.length;t++)ao(oo[t])}()}function ao(t){const e=t.popovers.length;for(let n=0;n<t.popovers.length;n++)lo(t.popovers[n].id,e,t.popovers[n].step)}function lo(t,e,n){const o=document.querySelector("."+Gn+"["+Qn+"="+t+"]").querySelector(".popover__steps");for(let t=0;t<e;t++){const e=document.createElement("span");t==n&&e.classList.add("active"),o.appendChild(e)}}function uo(){if(0!==io.length)for(let t=0;t<io.length;t++){const e=document.getElementById(io[t].id);if(!e)return;const n=io[t].relativeElement;if(!n)return;const o=io[t].position;if(!o)return;fo(e,n,o)}}function fo(t,e){Un(e,t,{placement:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bottom",middleware:[Yn({mainAxis:24,crossAxis:0})]}).then((e=>{let{x:n,y:o}=e;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})}))}function po(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bottom";if(!t&&!e)return;const i=document.getElementById(t);if(!i&&!e)return;i.dataset.popoverPlacement&&(o=i.dataset.popoverPlacement),fo(i,e,o),i.classList.add($n);let c=!1;for(let e=0;e<io.length;e++)if(io[e].id==t){c=!0;break}c||io.push({id:t,relativeElement:e,placement:o}),n&&setTimeout((function(){!function(t){if(!t)return;let e=256;null!==document.querySelector(".oao-navi-navigation")&&(e=4*document.querySelector(".oao-navi-navigation").offsetHeight);const n=t.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:n,behavior:"smooth"})}(i)}),100)}function mo(t){const e=document.getElementById(t);if(e){e.classList.remove($n);for(let e=io.length-1;e>=0;e--)if(io[e].id===t){io.splice(e,1);break}}}function go(){so(),document.querySelectorAll("."+Gn).forEach((function(t){if(!t)return;t.id=t.getAttribute(Qn);const e=t.dataset.popoverPlacement;if(e&&co.includes(e)){const n=co.indexOf(e);-1!==n&&t.querySelector(".popover__tip").classList.add("popover__tip--"+ro[n])}t.querySelectorAll("."+Kn).forEach((function(t){t&&t.addEventListener("click",(function(t){t.preventDefault();const e=t.currentTarget.closest("."+Gn).id;null!==e&&mo(e)}))}))})),document.querySelectorAll("["+Zn+"]").forEach((function(t){if(!t)return;const e=t.getAttribute(Zn);e&&(null===t.getAttribute(no)?(t.addEventListener("mouseover",(function(n){n&&n.currentTarget&&po(e,t)})),t.addEventListener("mouseout",(function(t){t&&t.currentTarget&&mo(e)}))):"click"===t.getAttribute(no)&&t.addEventListener("click",(function(n){n.preventDefault(),po(e,t)})))})),document.querySelectorAll("."+Jn).forEach((function(t){t&&t.addEventListener("click",(function(e){e.preventDefault();const n=t.dataset.popoverNext;po(n,document.querySelector("["+eo+'="'+n+'"]'),!0);const o=e.currentTarget.closest("."+Gn);o&&mo(o.id)}))})),addEventListener("resize",uo)}p(go);const ho=go,vo="static-overlay",yo=vo+"__blocker",Lo=yo+"--hidden",bo=yo+"--active",Eo=vo+"__container",wo=Eo+"--hidden",xo=Eo+"--active",So=vo+"__content",_o=vo+"--closable",ko="data-static-overlay-id",Ao="data-open-static-overlay",qo=vo+"__close";function To(t){if(!t)return;const e=document.getElementById(t);e&&Do(e)}function Co(t){if(!t)return;const e=document.getElementById(t);e&&Oo(e)}function Do(t){if(!t)return;const e=document.querySelector("."+yo);t.classList.remove(wo),e&&e.classList.remove(Lo),setTimeout((function(){t.classList.add(xo),e&&e.classList.add(bo),Mo()}),10)}function Oo(t){if(!t)return;const e=document.querySelector("."+yo);t.classList.remove(xo),t.classList.add(wo),e&&(e.classList.remove(bo),e.classList.add(Lo)),"function"==typeof window.EXOS.staticOverlay.onCloseOverlay&&window.EXOS.staticOverlay.onCloseOverlay()}function Mo(){const t=window.innerHeight,e=document.querySelector("."+xo+" ."+So)||!1;if(!1===e)return;const n=e.offsetHeight;e.style.marginTop=t>n?"inherit":n-t+64+"px"}function No(){!function(){let t=document.querySelector("."+yo);t||(t=document.createElement("div"),t.className=yo+" "+Lo,document.body.appendChild(t))}(),document.querySelectorAll("."+vo+"["+ko+"]").forEach((function(t){if(!t)return;const e=document.createElement("div");e.className=Eo+" "+wo,e.id=t.getAttribute(ko),t.parentNode.removeChild(t),t.classList.remove(vo),t.classList.add(So),t.classList.contains("sheet")&&t.classList.add("sheet--micro-effect"),e.appendChild(t),e.addEventListener("click",(function(t){if(!t||!t.target)return;const n=t.target;n&&(n.closest("."+So)||!e.querySelector("."+_o)?n.classList.contains(qo)&&Oo(e):Oo(e))})),document.body.appendChild(e)})),document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e)return;if(!e.hasAttribute(Ao))return;const n=e.getAttribute(Ao),o=document.getElementById(n);o&&Do(o)})),window.onresize=Mo}p(No);const Po=No,Ro="table",Wo=Ro+"--responsive",Io=Ro+"--selectable",Ho=Ro+"__header",zo=Ro+"__row",Bo=zo+"--selectable",Fo=Ro+"__checkbox",jo=Fo+":checked",Vo=Ro+"__check-all",Xo=zo+"--selection",Yo=zo+"--hidden",Uo=Ro+"__selection-close",Go=Ro+"__selection-count",$o="666px";let Jo=0;function Ko(t){if(!t)return;t.id||(t.id="table__"+Jo,Jo+=1);const e=t.querySelectorAll("."+Ho+" th");let n="";for(let o=0;o<e.length;o+=1){const i=e[o];let c=i.dataset&&(i.dataset.caption||""===i.dataset.caption)?i.dataset.caption:i.textContent;c=c||"",c=c.trim(),c=c.replace(/"/g,'\\"'),n+="#"+t.id+" ."+zo+" td:nth-child("+(o+1)+')::before { content: "'+c+'"; }\n'}n&&(n="@media only screen and (max-width: "+$o+") {\n"+n+"}",function(t){const e=document.createElement("style");e.type="text/css",e.innerHTML=t;const n=document.querySelector("head");n&&n.appendChild(e)}(n))}function Qo(){document.querySelector("script[data-disable-responsive-tables]")||document.querySelectorAll("."+Wo).forEach((function(t){Ko(t)}))}function Zo(){document.querySelectorAll("."+Io).forEach((function(t){!function(t){const e=t.querySelectorAll("."+Io+" ."+Bo+" ."+Fo),n=t.querySelector("."+Io+" ."+Vo),o=t.querySelector("."+Io+" ."+Uo);for(let o=0;o<e.length;o+=1)e[o].addEventListener("change",(function(){const e=t.querySelectorAll("."+Io+" ."+Bo+" ."+jo).length,o=e.toString();t.querySelector("."+Go).innerHTML=o,e>0?t.querySelector("."+Xo).classList.remove(Yo):(t.querySelector("."+Xo).classList.add(Yo),n.checked=!1)}));n&&n.addEventListener("change",(function(o){const i=o.target;for(let o=0;o<e.length;o+=1)if(e[o]!=i){e[o].checked=i.checked;const c=t.querySelectorAll("."+Io+" ."+Bo+" ."+jo).length,r=c.toString();t.querySelector("."+Go).innerHTML=r,c>0?t.querySelector("."+Xo).classList.remove(Yo):(t.querySelector("."+Xo).classList.add(Yo),n.checked=!1)}})),o&&o.addEventListener("click",(function(){t.querySelector("."+Go).innerHTML=0,t.querySelector("."+Xo).classList.add(Yo);for(let t=0;t<e.length;t+=1)e[t].checked=!1;n&&(n.checked=!1)}))}(t)}))}p(Qo),p(Zo);const ti={initialize:Qo},ei={initialize:Zo},ni="toggle",oi=ni+"--expanded",ii=ni+"--collapsed",ci=ni+"__content--hidden";p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e.classList.contains(ni))return;const n=e.getAttribute("data-toggle-id"),o=document.querySelector("#"+n);if(!n||!o)return;t.preventDefault();const i=e.getAttribute("data-toggle-expanded-text"),c=e.getAttribute("data-toggle-collapsed-text");if(o.classList.contains(ci))return o.classList.remove(ci),e.classList.add(oi),e.classList.remove(ii),void(i&&(e.childNodes[0].nodeValue=i));o.classList.add(ci),e.classList.remove(oi),e.classList.add(ii),c&&(e.childNodes[0].nodeValue=c)}))}));const ri="toggle-button",si=ri+"--expanded",ai=ri+"--collapsed",li=ri+"__content--hidden";p((function(){document.body.addEventListener("click",(function(t){if(!t||!t.target)return;const e=t.target;if(!e.classList.contains(ri))return;const n=e.getAttribute("data-button-toggle"),o=document.querySelector("#"+n);if(!n||!o)return;t.preventDefault();const i=e.getAttribute("data-button-expanded-text"),c=e.getAttribute("data-button-collapsed-text");if(o.classList.contains(li))return o.classList.remove(li),e.classList.add(si),e.classList.remove(ai),void(i&&(e.childNodes[0].nodeValue=i));o.classList.add(li),e.classList.remove(si),e.classList.add(ai),c&&(e.childNodes[0].nodeValue=c)}))}));const di="toggle-link",ui=di+"--expanded",fi=di+"--collapsed",pi=di+"__content--hidden",mi="data-link-toggle",gi="data-link-expanded-text",hi="data-link-collapsed-text";function vi(t){if(!t||!t.target)return;const e=t.target;if(!e.classList.contains(di))return;const n=e.getAttribute(mi);if(!n)return;const o=n.startsWith(".")?n:"#"+n,i=document.querySelectorAll(o)||[];if(!i||0===i.length)return;t.preventDefault();const c=e.getAttribute(gi),r=e.getAttribute(hi);e.classList.contains(fi)&&c&&(e.textContent=c),e.classList.contains(ui)&&r&&(e.textContent=r),i.forEach((t=>{if(t.classList.contains(pi))return t.classList.remove(pi),e.classList.add(ui),void e.classList.remove(fi);t.classList.add(pi),e.classList.remove(ui),e.classList.add(fi)}))}p((function(){document.body.addEventListener("keyup",(function(t){(t&&"Enter"===t.key||" "===t.key)&&vi(t)})),document.body.addEventListener("click",vi)}));const yi="tooltip",Li="tooltip__element",bi=Li+"--active",Ei=Li+"--last-used";function wi(t){if(!t||!t.target)return;const e=t.target.closest("."+yi);if(!e)return;if(!e.dataset||!e.dataset.tooltip)return;if(t.preventDefault(),document.querySelector("."+bi))return;const n=function(){if(document.querySelectorAll("."+Li).length<=1){const t=document.createElement("span");t.classList.add(Li),t.setAttribute("role","tooltip"),document.body.appendChild(t)}return document.querySelector("."+Li+":not(."+Ei+")")}();if(!n)return;let o=e.dataset.tooltipPosition||"bottom";o=o.toLowerCase(),n.textContent=e.dataset.tooltip;const i=function(t,e,n){const o=t.offsetWidth,i=t.getBoundingClientRect(),c=window.pageXOffset+i.left,r=window.pageYOffset+i.bottom,s=e.offsetWidth,a={};a.left="left"===n?c-8:"right"===n?c+(o-s)-8:c+(o/2-s/2);return a.top=r,a}(e,n,o);n.style.left=i.left+"px",n.style.top=i.top+"px";const c="tooltip-"+Math.random().toString(36).substring(2,9);e.setAttribute("aria-describedby",c),n.id=c,n.classList.add(bi)}function xi(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t||!t.currentTarget||!t.relatedTarget&&e)return;const n=t.currentTarget.closest("."+yi);if(!n)return;if(!t.currentTarget.isSameNode(n))return;const o=t.relatedTarget;if(e&&o.isSameNode(n)||n.contains(o))return;const i=document.querySelector("."+bi);i&&(i.removeAttribute("id"),n.removeAttribute("aria-describedby"),document.querySelectorAll("."+Li).forEach((function(t){t.classList.remove(Ei)})),i.classList.remove(bi),i.classList.add(Ei))}function Si(){document.querySelectorAll("."+yi).forEach((function(t){var e;(e=t)&&(e.setAttribute("tabindex","0"),e.addEventListener("mouseover",wi),e.addEventListener("mouseout",xi),e.addEventListener("click",xi),e.addEventListener("focus",(function(t){wi(t)})),e.addEventListener("blur",(function(t){xi(t,!1)})),e.addEventListener("keydown",(function(t){"Escape"===t.key&&xi(t,!1)})))}))}p(Si);const _i=Si,ki="exosDebug",Ai="debug";function qi(){document.cookie.indexOf(ki)>=0&&document.body.classList.add(Ai)}p(qi);const Ti={version:"2.1.3",fullVersion:"2.1.3-6ea30763",enableDebugMode:function(){const t=new Date;t.setTime(t.getTime()+36e5),document.cookie=ki+"=true;expires="+t.toUTCString()+";path=/",qi()},reinitAfterMarkupUpdate:function(){Ut(),ce(),ve(),Po(),_i()},autofillText:t,directSelection:i,inputCounter:c,inputTextGroup:r,leftNavigation:s,tabbar:a,pageTransition:l,popover:d,snackbar:e,staticOverlay:u,table:ti,selectableTable:ei,tooltip:f}})(),EXOS=o.default})();
// creating namespace if not existing
window.CisoLog = window.CisoLog || {};

window.addEventListener('DOMContentLoaded', function() {
    CisoLog.sendLogData();
    CisoLog.attachTrackLinkListeners();
});

CisoLog.sendLogData = async function()
{
    let params = document.location.search.substring(1);
    let parts = params.split('&');

    let found = false;
    let utm_log = {
        utm_source: '',
        utm_campaign: '',
        utm_medium: '',
        utm_term: '',
        utm_content: ''
    };
    for (let part in parts) {
        let value = parts[part];

        if (value.indexOf("utm_") !== -1) {
            let utmParts = value.split("=");
            utm_log[utmParts[0]] = utmParts[1];
            found = true;
        }
    }

    const data = {
        pageId: document.querySelector('meta[name=page-id]').getAttribute('content'),
        referrer: window.encodeURIComponent(window.document.referrer),
        pageLayout: document.querySelector('meta[property=pagelayout]').getAttribute('content'),
        utm: found ? utm_log: null,
    };

    const url = document.querySelector('meta[property=siteurl]').getAttribute('content') + 'logging';

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch(error) {
        console.error('Error:', error);
    };
};


CisoLog.attachTrackLinkListeners = function()
{
    // get all tracking links and intercept them with a event handler
    // differentiate between internal and external links
    let trackLinks = document.querySelectorAll('a[data-tracklink]');

    trackLinks.forEach(function(element) {

        if (element.getAttribute('target') === '_blank') {
            element.addEventListener('click', function() {
                CisoLog.trackLink(element, false);
            })
        } else {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                CisoLog.trackLink(element, true);
            });
        }

    });

};

CisoLog.trackLink = async function(element, redirect) {
    const href = element.getAttribute('href');
    const desc = element.dataset.tracklinkDesc;

    const data = {
        trackLinkHref: href,
        trackLinkDesc: desc
    };

    const url = document.querySelector('meta[property=siteurl]').getAttribute('content') + 'trackLink';

    // send the data and redirect to the requested URL if it's in in our own document (same window)
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
    catch(error) {
        console.error('Error:', error);
    }
    finally{
        if (redirect === true) {
            document.location.href = href;
        }
    };
};