/*!
 * CoreUI v3.4.0 (https://coreui.io)
 * Copyright 2020 creativeLabs Łukasz Holeczek
 * Licensed under MIT (https://coreui.io)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core"), require("perfect-scrollbar")) : "function" == typeof define && define.amd ? define(["@popperjs/core", "perfect-scrollbar"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).coreui = e(t.createPopper, t.PerfectScrollbar) }(this, (function(t, e) { "use strict";

    function n(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var i = n(e);

    function o(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

    function s(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

    function a(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, i) } return n }

    function l(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(n), !0).forEach((function(e) { s(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var c, u, f, d, h = "transitionend",
        p = function(t) { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t },
        g = function(t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null } return e },
        m = function(t) { var e = g(t); return e && document.querySelector(e) ? e : null },
        _ = function(t) { var e = g(t); return e ? document.querySelector(e) : null },
        v = function(t) { if (!t) return 0; var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = parseFloat(n),
                r = parseFloat(i); return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0 },
        y = function(t) { t.dispatchEvent(new Event(h)) },
        b = function(t) { return (t[0] || t).nodeType },
        E = function(t, e) { var n = !1,
                i = e + 5;
            t.addEventListener(h, (function e() { n = !0, t.removeEventListener(h, e) })), setTimeout((function() { n || y(t) }), i) },
        w = function(t, e, n) { Object.keys(n).forEach((function(i) { var o, r = n[i],
                    s = e[i],
                    a = s && b(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".') })) },
        k = function(t) { if (!t) return !1; if (t.style && t.parentNode && t.parentNode.style) { var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode); return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility } return !1 },
        L = function t(e) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof e.getRootNode) { var n = e.getRootNode(); return n instanceof ShadowRoot ? n : null } return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null },
        C = function() { return function() {} },
        T = function(t) { return t.offsetHeight },
        A = function() { var t = window.jQuery; return t && !document.body.hasAttribute("data-no-jquery") ? t : null },
        S = (c = {}, u = 1, { set: function(t, e, n) { "undefined" == typeof t.key && (t.key = { key: e, id: u }, u++), c[t.key.id] = n }, get: function(t, e) { if (!t || "undefined" == typeof t.key) return null; var n = t.key; return n.key === e ? c[n.id] : null }, delete: function(t, e) { if ("undefined" != typeof t.key) { var n = t.key;
                    n.key === e && (delete c[n.id], delete t.key) } } }),
        O = function(t, e, n) { S.set(t, e, n) },
        N = function(t, e) { return S.get(t, e) },
        I = function(t, e) { S.delete(t, e) },
        D = Element.prototype.querySelectorAll,
        j = Element.prototype.querySelector,
        P = (f = new CustomEvent("Bootstrap", { cancelable: !0 }), (d = document.createElement("div")).addEventListener("Bootstrap", (function() { return null })), f.preventDefault(), d.dispatchEvent(f), f.defaultPrevented),
        x = /:scope\b/;
    (function() { var t = document.createElement("div"); try { t.querySelectorAll(":scope *") } catch (t) { return !1 } return !0 })() || (D = function(t) { if (!x.test(t)) return this.querySelectorAll(t); var e = Boolean(this.id);
        e || (this.id = p("scope")); var n = null; try { t = t.replace(x, "#" + this.id), n = this.querySelectorAll(t) } finally { e || this.removeAttribute("id") } return n }, j = function(t) { if (!x.test(t)) return this.querySelector(t); var e = D.call(this, t); return "undefined" != typeof e[0] ? e[0] : null }); var R = A(),
        M = /[^.]*(?=\..*)\.|.*/,
        B = /\..*/,
        H = /::\d+$/,
        U = {},
        Q = 1,
        q = { mouseenter: "mouseover", mouseleave: "mouseout" },
        F = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

    function V(t, e) { return e && e + "::" + Q++ || t.uidEvent || Q++ }

    function W(t) { var e = V(t); return t.uidEvent = e, U[e] = U[e] || {}, U[e] }

    function z(t, e, n) { void 0 === n && (n = null); for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) { var s = t[i[o]]; if (s.originalHandler === e && s.delegationSelector === n) return s } return null }

    function X(t, e, n) { var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(B, ""),
            s = q[r]; return s && (r = s), F.indexOf(r) > -1 || (r = t), [i, o, r] }

    function K(t, e, n, i, o) { if ("string" == typeof e && t) { n || (n = i, i = null); var r = X(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = W(t),
                u = c[l] || (c[l] = {}),
                f = z(u, a, s ? n : null); if (f) f.oneOff = f.oneOff && o;
            else { var d = V(a, e.replace(M, "")),
                    h = s ? function(t, e, n) { return function i(o) { for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return o.delegateTarget = s, i.oneOff && $.off(t, o.type, n), n.apply(s, [o]);
                            return null } }(t, n, i) : function(t, e) { return function n(i) { return i.delegateTarget = t, n.oneOff && $.off(t, i.type, e), e.apply(t, [i]) } }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s) } } }

    function Y(t, e, n, i, o) { var r = z(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]) } var $ = { on: function(t, e, n, i) { K(t, e, n, i, !1) }, one: function(t, e, n, i) { K(t, e, n, i, !0) }, off: function(t, e, n, i) { if ("string" == typeof e && t) { var o = X(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = W(t),
                        u = "." === e.charAt(0); if ("undefined" == typeof s) { u && Object.keys(c).forEach((function(n) {! function(t, e, n, i) { var o = e[n] || {};
                                Object.keys(o).forEach((function(r) { if (r.indexOf(i) > -1) { var s = o[r];
                                        Y(t, e, n, s.originalHandler, s.delegationSelector) } })) }(t, c, n, e.slice(1)) })); var f = c[a] || {};
                        Object.keys(f).forEach((function(n) { var i = n.replace(H, ""); if (!l || e.indexOf(i) > -1) { var o = f[n];
                                Y(t, c, a, o.originalHandler, o.delegationSelector) } })) } else { if (!c || !c[a]) return;
                        Y(t, c, a, s, r ? n : null) } } }, trigger: function(t, e, n) { if ("string" != typeof e || !t) return null; var i, o = e.replace(B, ""),
                    r = e !== o,
                    s = F.indexOf(o) > -1,
                    a = !0,
                    l = !0,
                    c = !1,
                    u = null; return r && R && (i = R.Event(e, n), R(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(e, { bubbles: a, cancelable: !0 }), "undefined" != typeof n && Object.keys(n).forEach((function(t) { Object.defineProperty(u, t, { get: function() { return n[t] } }) })), c && (u.preventDefault(), P || Object.defineProperty(u, "defaultPrevented", { get: function() { return !0 } })), l && t.dispatchEvent(u), u.defaultPrevented && "undefined" != typeof i && i.preventDefault(), u } },
        G = "asyncLoad",
        J = "coreui.asyncLoad",
        Z = "c-active",
        tt = "c-show",
        et = ".c-sidebar-nav-dropdown",
        nt = ".c-xhr-link, .c-sidebar-nav-link",
        it = { defaultPage: "main.html", errorPage: "404.html", subpagesDirectory: "views/" },
        ot = function() {
            function t(t, e) { this._config = this._getConfig(e), this._element = t; var n = location.hash.replace(/^#/, ""); "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage), this._addEventListeners() } var e = t.prototype; return e._getConfig = function(t) { return t = l(l({}, it), t) }, e._loadPage = function(t) { var e = this,
                    n = this._element,
                    i = this._config,
                    o = function t(n, i) { void 0 === i && (i = 0); var o = document.createElement("script");
                        o.type = "text/javascript", o.src = n[i], o.className = "view-script", o.onload = o.onreadystatechange = function() { e.readyState && "complete" !== e.readyState || n.length > i + 1 && t(n, i + 1) }, document.getElementsByTagName("body")[0].appendChild(o) },
                    r = new XMLHttpRequest;
                r.open("GET", i.subpagesDirectory + t); var s = new CustomEvent("xhr", { detail: { url: t, status: r.status } });
                n.dispatchEvent(s), r.onload = function(e) { if (200 === r.status) { s = new CustomEvent("xhr", { detail: { url: t, status: r.status } }), n.dispatchEvent(s); var a = document.createElement("div");
                        a.innerHTML = e.target.response; var l = Array.from(a.querySelectorAll("script")).map((function(t) { return t.attributes.getNamedItem("src").nodeValue }));
                        a.querySelectorAll("script").forEach((function(t) { return t.remove(t) })), window.scrollTo(0, 0), n.innerHTML = "", n.appendChild(a), (c = document.querySelectorAll(".view-script")).length && c.forEach((function(t) { t.remove() })), l.length && o(l), window.location.hash = t } else window.location.href = i.errorPage; var c }, r.send() }, e._setUpUrl = function(t) { t = t.replace(/^\//, "").split("?")[0], Array.from(document.querySelectorAll(nt)).forEach((function(t) { t.classList.remove(Z) })), Array.from(document.querySelectorAll(nt)).forEach((function(t) { t.classList.remove(Z) })), Array.from(document.querySelectorAll(et)).forEach((function(t) { t.classList.remove(tt) })), Array.from(document.querySelectorAll(et)).forEach((function(e) { Array.from(e.querySelectorAll('a[href*="' + t + '"]')).length > 0 && e.classList.add(tt) })), Array.from(document.querySelectorAll('.c-sidebar-nav-item a[href*="' + t + '"]')).forEach((function(t) { t.classList.add(Z) })), this._loadPage(t) }, e._loadBlank = function(t) { window.open(t) }, e._loadTop = function(t) { window.location = t }, e._update = function(t) { "#" !== t.href && ("undefined" != typeof t.dataset.toggle && "null" !== t.dataset.toggle || ("_top" === t.target ? this._loadTop(t.href) : "_blank" === t.target ? this._loadBlank(t.href) : this._setUpUrl(t.getAttribute("href")))) }, e._addEventListeners = function() { var t = this;
                $.on(document, "click.coreui.asyncLoad.data-api", nt, (function(e) { e.preventDefault(); var n = e.target;
                    n.classList.contains("c-sidebar-nav-link") || (n = n.closest(nt)), n.classList.contains("c-sidebar-nav-dropdown-toggle") || "#" === n.getAttribute("href") || t._update(n) })) }, t._asyncLoadInterface = function(e, n) { var i = N(e, J); if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) { if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]() } }, t.jQueryInterface = function(e) { return this.each((function() { t._asyncLoadInterface(this, e) })) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return it } }]), t }(),
        rt = A(); if (rt) { var st = rt.fn[G];
        rt.fn[G] = ot.jQueryInterface, rt.fn[G].Constructor = ot, rt.fn[G].noConflict = function() { return rt.fn[G] = st, ot.jQueryInterface } } var at = "coreui.alert",
        lt = function() {
            function t(t) { this._element = t, this._element && O(t, at, this) } var e = t.prototype; return e.close = function(t) { var e = t ? this._getRootElement(t) : this._element,
                    n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e) }, e.dispose = function() { I(this._element, at), this._element = null }, e._getRootElement = function(t) { return _(t) || t.closest(".alert") }, e._triggerCloseEvent = function(t) { return $.trigger(t, "close.coreui.alert") }, e._removeElement = function(t) { var e = this; if (t.classList.remove("show"), t.classList.contains("fade")) { var n = v(t);
                    $.one(t, h, (function() { return e._destroyElement(t) })), E(t, n) } else this._destroyElement(t) }, e._destroyElement = function(t) { t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.coreui.alert") }, t.jQueryInterface = function(e) { return this.each((function() { var n = N(this, at);
                    n || (n = new t(this)), "close" === e && n[e](this) })) }, t.handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, t.getInstance = function(t) { return N(t, at) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }]), t }();
    $.on(document, "click.coreui.alert.data-api", '[data-dismiss="alert"]', lt.handleDismiss(new lt)); var ct = A(); if (ct) { var ut = ct.fn.alert;
        ct.fn.alert = lt.jQueryInterface, ct.fn.alert.Constructor = lt, ct.fn.alert.noConflict = function() { return ct.fn.alert = ut, lt.jQueryInterface } } var ft = { matches: function(t, e) { return t.matches(e) }, find: function(t, e) { var n; return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, D.call(e, t)) }, findOne: function(t, e) { return void 0 === e && (e = document.documentElement), j.call(e, t) }, children: function(t, e) { var n, i = (n = []).concat.apply(n, t.children); return i.filter((function(t) { return t.matches(e) })) }, parents: function(t, e) { for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode; return n }, prev: function(t, e) { for (var n = t.previousElementSibling; n;) { if (n.matches(e)) return [n];
                    n = n.previousElementSibling } return [] }, next: function(t, e) { for (var n = t.nextElementSibling; n;) { if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling } return [] } },
        dt = "coreui.button",
        ht = "active",
        pt = "disabled",
        gt = "focus",
        mt = '[data-toggle^="button"]',
        _t = ".btn",
        vt = function() {
            function t(t) { this._element = t, O(t, dt, this) } var e = t.prototype; return e.toggle = function() { var t = !0,
                    e = !0,
                    n = this._element.closest('[data-toggle="buttons"]'); if (n) { var i = ft.findOne('input:not([type="hidden"])', this._element); if (i && "radio" === i.type) { if (i.checked && this._element.classList.contains(ht)) t = !1;
                        else { var o = ft.findOne(".active", n);
                            o && o.classList.remove(ht) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains(pt) || n.classList.contains(pt)) return;
                            i.checked = !this._element.classList.contains(ht), $.trigger(i, "change") }
                        i.focus(), e = !1 } }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ht)), t && this._element.classList.toggle(ht) }, e.dispose = function() { I(this._element, dt), this._element = null }, t.jQueryInterface = function(e) { return this.each((function() { var n = N(this, dt);
                    n || (n = new t(this)), "toggle" === e && n[e]() })) }, t.getInstance = function(t) { return N(t, dt) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }]), t }();
    $.on(document, "click.coreui.button.data-api", mt, (function(t) { t.preventDefault(); var e = t.target.closest(_t),
            n = N(e, dt);
        n || (n = new vt(e)), n.toggle() })), $.on(document, "focus.coreui.button.data-api", mt, (function(t) { var e = t.target.closest(_t);
        e && e.classList.add(gt) })), $.on(document, "blur.coreui.button.data-api", mt, (function(t) { var e = t.target.closest(_t);
        e && e.classList.remove(gt) })); var yt = A(); if (yt) { var bt = yt.fn.button;
        yt.fn.button = vt.jQueryInterface, yt.fn.button.Constructor = vt, yt.fn.button.noConflict = function() { return yt.fn.button = bt, vt.jQueryInterface } }

    function Et(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) }

    function wt(t) { return t.replace(/[A-Z]/g, (function(t) { return "-" + t.toLowerCase() })) } var kt = { setDataAttribute: function(t, e, n) { t.setAttribute("data-" + wt(e), n) }, removeDataAttribute: function(t, e) { t.removeAttribute("data-" + wt(e)) }, getDataAttributes: function(t) { if (!t) return {}; var e = l({}, t.dataset); return Object.keys(e).forEach((function(t) { e[t] = Et(e[t]) })), e }, getDataAttribute: function(t, e) { return Et(t.getAttribute("data-" + wt(e))) }, offset: function(t) { var e = t.getBoundingClientRect(); return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft } }, position: function(t) { return { top: t.offsetTop, left: t.offsetLeft } }, toggleClass: function(t, e) { t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)) } },
        Lt = "carousel",
        Ct = "coreui.carousel",
        Tt = "." + Ct,
        At = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        St = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        Ot = "next",
        Nt = "prev",
        It = "slid" + Tt,
        Dt = "active",
        jt = ".active.carousel-item",
        Pt = { TOUCH: "touch", PEN: "pen" },
        xt = function() {
            function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = ft.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), O(t, Ct, this) } var e = t.prototype; return e.next = function() { this._isSliding || this._slide(Ot) }, e.nextWhenVisible = function() {!document.hidden && k(this._element) && this.next() }, e.prev = function() { this._isSliding || this._slide(Nt) }, e.pause = function(t) { t || (this._isPaused = !0), ft.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (y(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(t) { var e = this;
                this._activeElement = ft.findOne(jt, this._element); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) $.one(this._element, It, (function() { return e.to(t) }));
                    else { if (n === t) return this.pause(), void this.cycle(); var i = t > n ? Ot : Nt;
                        this._slide(i, this._items[t]) } }, e.dispose = function() { $.off(this._element, Tt), I(this._element, Ct), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(t) { return t = l(l({}, At), t), w(Lt, t, St), t }, e._handleSwipe = function() { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next() } }, e._addEventListeners = function() { var t = this;
                this._config.keyboard && $.on(this._element, "keydown.coreui.carousel", (function(e) { return t._keydown(e) })), "hover" === this._config.pause && ($.on(this._element, "mouseenter.coreui.carousel", (function(e) { return t.pause(e) })), $.on(this._element, "mouseleave.coreui.carousel", (function(e) { return t.cycle(e) }))), this._config.touch && this._touchSupported && this._addTouchEventListeners() }, e._addTouchEventListeners = function() { var t = this,
                    e = function(e) { t._pointerEvent && Pt[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX) },
                    n = function(e) { t._pointerEvent && Pt[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) { return t.cycle(e) }), 500 + t._config.interval)) };
                ft.find(".carousel-item img", this._element).forEach((function(t) { $.on(t, "dragstart.coreui.carousel", (function(t) { return t.preventDefault() })) })), this._pointerEvent ? ($.on(this._element, "pointerdown.coreui.carousel", (function(t) { return e(t) })), $.on(this._element, "pointerup.coreui.carousel", (function(t) { return n(t) })), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.coreui.carousel", (function(t) { return e(t) })), $.on(this._element, "touchmove.coreui.carousel", (function(e) { return function(e) { e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX }(e) })), $.on(this._element, "touchend.coreui.carousel", (function(t) { return n(t) }))) }, e._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(), this.prev(); break;
                    case "ArrowRight":
                        t.preventDefault(), this.next() } }, e._getItemIndex = function(t) { return this._items = t && t.parentNode ? ft.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) }, e._getItemByDirection = function(t, e) { var n = t === Ot,
                    i = t === Nt,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === Nt ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, e._triggerSlideEvent = function(t, e) { var n = this._getItemIndex(t),
                    i = this._getItemIndex(ft.findOne(jt, this._element)); return $.trigger(this._element, "slide.coreui.carousel", { relatedTarget: t, direction: e, from: i, to: n }) }, e._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { for (var e = ft.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove(Dt); var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add(Dt) } }, e._slide = function(t, e) { var n, i, o, r = this,
                    s = ft.findOne(jt, this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval); if (t === Ot ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && l.classList.contains(Dt)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) { if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains("slide")) { l.classList.add(i), T(l), s.classList.add(n), l.classList.add(n); var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval; var d = v(s);
                        $.one(s, h, (function() { l.classList.remove(n, i), l.classList.add(Dt), s.classList.remove(Dt, i, n), r._isSliding = !1, setTimeout((function() { $.trigger(r._element, It, { relatedTarget: l, direction: o, from: a, to: c }) }), 0) })), E(s, d) } else s.classList.remove(Dt), l.classList.add(Dt), this._isSliding = !1, $.trigger(this._element, It, { relatedTarget: l, direction: o, from: a, to: c });
                    u && this.cycle() } }, t.carouselInterface = function(e, n) { var i = N(e, Ct),
                    o = l(l({}, At), kt.getDataAttributes(e)); "object" == typeof n && (o = l(l({}, o), n)); var r = "string" == typeof n ? n : o.slide; if (i || (i = new t(e, o)), "number" == typeof n) i.to(n);
                else if ("string" == typeof r) { if ("undefined" == typeof i[r]) throw new TypeError('No method named "' + r + '"');
                    i[r]() } else o.interval && o.ride && (i.pause(), i.cycle()) }, t.jQueryInterface = function(e) { return this.each((function() { t.carouselInterface(this, e) })) }, t.dataApiClickHandler = function(e) { var n = _(this); if (n && n.classList.contains("carousel")) { var i = l(l({}, kt.getDataAttributes(n)), kt.getDataAttributes(this)),
                        o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), t.carouselInterface(n, i), o && N(n, Ct).to(o), e.preventDefault() } }, t.getInstance = function(t) { return N(t, Ct) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return At } }]), t }();
    $.on(document, "click.coreui.carousel.data-api", "[data-slide], [data-slide-to]", xt.dataApiClickHandler), $.on(window, "load.coreui.carousel.data-api", (function() { for (var t = ft.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) xt.carouselInterface(t[e], N(t[e], Ct)) })); var Rt = A(); if (Rt) { var Mt = Rt.fn[Lt];
        Rt.fn[Lt] = xt.jQueryInterface, Rt.fn[Lt].Constructor = xt, Rt.fn[Lt].noConflict = function() { return Rt.fn[Lt] = Mt, xt.jQueryInterface } } var Bt = "class-toggler",
        Ht = "coreui.class-toggler",
        Ut = { addClass: "(null|array|string)", breakpoints: "(null|array|string)", removeClass: "(null|array|string)", responsive: "(null|boolean)", target: "(null|string)", toggleClass: "(null|array|string)" },
        Qt = { addClass: null, breakpoints: ["", "sm", "md", "lg", "xl"], removeClass: null, responsive: !1, target: "body", toggleClass: null },
        qt = "classremoved",
        Ft = "classtoggle",
        Vt = ".c-class-toggler",
        Wt = function() {
            function t(t, e) { this._element = t, this._config = this._getConfig(e), O(t, Ht, this) } var e = t.prototype; return e.add = function() { var t = this,
                    e = this._target();
                this._config.addClass.replace(/\s/g, "").split(",").forEach((function(n) { e.classList.add(n), t._customEvent("classadded", e, !0, n) })) }, e.remove = function() { var t = this,
                    e = this._target();
                this._config.removeClass.replace(/\s/g, "").split(",").forEach((function(n) { t._config.responsive ? t._updateResponsiveClassNames(n).forEach((function(n) { e.classList.remove(n), t._customEvent(qt, e, !1, n) })) : (e.classList.remove(n), t._customEvent(qt, e, !1, n)) })) }, e.toggle = function() { var t = this,
                    e = this._target(),
                    n = this._config.toggleClass.replace(/\s/g, "").split(",");
                this._config.responsive ? n.forEach((function(n) { t._updateResponsiveClassNames(n).filter((function(t) { return e.classList.contains(t) })).length ? t._updateResponsiveClassNames(n).forEach((function(n) { t._config.removeClass = n, t.remove(), t._customEvent(Ft, e, !1, n) })) : (t._config.addClass = n, t.add(), t._customEvent(Ft, e, !0, n)) })) : n.forEach((function(n) { e.classList.contains(n) ? (t._config.removeClass = n, t.remove(), t._customEvent(Ft, e, !1, n)) : (t._config.addClass = n, t.add(), t._customEvent(Ft, e, !0, n)) })) }, e.class = function() { this._config.toggleClass = this._config.class, this._element.getAttribute("responsive") && (this._config.responsive = this._element.getAttribute("responsive")), this.toggle() }, e._target = function() { return "body" === this._config.target ? document.querySelector(this._config.target) : "_parent" === this._config.target ? this._element.parentNode : document.querySelector(this._config.target) }, e._customEvent = function(t, e, n, i) { var o = new CustomEvent(t, { detail: { target: e, add: n, className: i } });
                e.dispatchEvent(o) }, e._breakpoint = function(t) { return this._config.breakpoints.filter((function(t) { return t.length > 0 })).filter((function(e) { return t.includes(e) }))[0] }, e._breakpoints = function(t) { var e = this._config.breakpoints; return e.slice(0, e.indexOf(e.filter((function(t) { return t.length > 0 })).filter((function(e) { return t.includes(e) }))[0]) + 1) }, e._updateResponsiveClassNames = function(t) { var e = this._breakpoint(t); return this._breakpoints(t).map((function(n) { return n.length > 0 ? t.replace(e, n) : t.replace("-" + e, n) })) }, e._includesResponsiveClass = function(t) { var e = this; return this._updateResponsiveClassNames(t).filter((function(t) { return e._config.target.contains(t) })) }, e._getConfig = function(t) { return t = l(l(l({}, this.constructor.Default), kt.getDataAttributes(this._element)), t), w(Bt, t, this.constructor.DefaultType), t }, t.classTogglerInterface = function(e, n) { var i = N(e, Ht); if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) { if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]() } }, t.jQueryInterface = function(e) { return this.each((function() { t.classTogglerInterface(this, e) })) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return Qt } }, { key: "DefaultType", get: function() { return Ut } }]), t }();
    $.on(document, "click.coreui.class-toggler.data-api", Vt, (function(t) { t.preventDefault(), t.stopPropagation(); var e = t.target;
        e.classList.contains("c-class-toggler") || (e = e.closest(Vt)), "undefined" != typeof e.dataset.addClass && Wt.classTogglerInterface(e, "add"), "undefined" != typeof e.dataset.removeClass && Wt.classTogglerInterface(e, "remove"), "undefined" != typeof e.dataset.toggleClass && Wt.classTogglerInterface(e, "toggle"), "undefined" != typeof e.dataset.class && Wt.classTogglerInterface(e, "class") })); var zt = A(); if (zt) { var Xt = zt.fn[Bt];
        zt.fn[Bt] = Wt.jQueryInterface, zt.fn[Bt].Constructor = Wt, zt.fn[Bt].noConflict = function() { return zt.fn[Bt] = Xt, Wt.jQueryInterface } } var Kt = "collapse",
        Yt = "coreui.collapse",
        $t = { toggle: !0, parent: "" },
        Gt = { toggle: "boolean", parent: "(string|element)" },
        Jt = "show",
        Zt = "collapse",
        te = "collapsing",
        ee = "collapsed",
        ne = "width",
        ie = '[data-toggle="collapse"]',
        oe = function() {
            function t(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = ft.find(ie + '[href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'); for (var n = ft.find(ie), i = 0, o = n.length; i < o; i++) { var r = n[i],
                        s = m(r),
                        a = ft.find(s).filter((function(e) { return e === t }));
                    null !== s && a.length && (this._selector = s, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), O(t, Yt, this) } var e = t.prototype; return e.toggle = function() { this._element.classList.contains(Jt) ? this.hide() : this.show() }, e.show = function() { var e = this; if (!this._isTransitioning && !this._element.classList.contains(Jt)) { var n, i;
                    this._parent && 0 === (n = ft.find(".show, .collapsing", this._parent).filter((function(t) { return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains(Zt) }))).length && (n = null); var o = ft.findOne(this._selector); if (n) { var r = n.filter((function(t) { return o !== t })); if ((i = r[0] ? N(r[0], Yt) : null) && i._isTransitioning) return } if (!$.trigger(this._element, "show.coreui.collapse").defaultPrevented) { n && n.forEach((function(e) { o !== e && t.collapseInterface(e, "hide"), i || O(e, Yt, null) })); var s = this._getDimension();
                        this._element.classList.remove(Zt), this._element.classList.add(te), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(t) { t.classList.remove(ee), t.setAttribute("aria-expanded", !0) })), this.setTransitioning(!0); var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = v(this._element);
                        $.one(this._element, h, (function() { e._element.classList.remove(te), e._element.classList.add(Zt, Jt), e._element.style[s] = "", e.setTransitioning(!1), $.trigger(e._element, "shown.coreui.collapse") })), E(this._element, l), this._element.style[s] = this._element[a] + "px" } } }, e.hide = function() { var t = this; if (!this._isTransitioning && this._element.classList.contains(Jt) && !$.trigger(this._element, "hide.coreui.collapse").defaultPrevented) { var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", T(this._element), this._element.classList.add(te), this._element.classList.remove(Zt, Jt); var n = this._triggerArray.length; if (n > 0)
                        for (var i = 0; i < n; i++) { var o = this._triggerArray[i],
                                r = _(o);
                            r && !r.classList.contains(Jt) && (o.classList.add(ee), o.setAttribute("aria-expanded", !1)) }
                    this.setTransitioning(!0);
                    this._element.style[e] = ""; var s = v(this._element);
                    $.one(this._element, h, (function() { t.setTransitioning(!1), t._element.classList.remove(te), t._element.classList.add(Zt), $.trigger(t._element, "hidden.coreui.collapse") })), E(this._element, s) } }, e.setTransitioning = function(t) { this._isTransitioning = t }, e.dispose = function() { I(this._element, Yt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(t) { return (t = l(l({}, $t), t)).toggle = Boolean(t.toggle), w(Kt, t, Gt), t }, e._getDimension = function() { return this._element.classList.contains(ne) ? ne : "height" }, e._getParent = function() { var t = this,
                    e = this._config.parent;
                b(e) ? "undefined" == typeof e.jquery && "undefined" == typeof e[0] || (e = e[0]) : e = ft.findOne(e); var n = ie + '[data-parent="' + e + '"]'; return ft.find(n, e).forEach((function(e) { var n = _(e);
                    t._addAriaAndCollapsedClass(n, [e]) })), e }, e._addAriaAndCollapsedClass = function(t, e) { if (t && e.length) { var n = t.classList.contains(Jt);
                    e.forEach((function(t) { n ? t.classList.remove(ee) : t.classList.add(ee), t.setAttribute("aria-expanded", n) })) } }, t.collapseInterface = function(e, n) { var i = N(e, Yt),
                    o = l(l(l({}, $t), kt.getDataAttributes(e)), "object" == typeof n && n ? n : {}); if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new t(e, o)), "string" == typeof n) { if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]() } }, t.jQueryInterface = function(e) { return this.each((function() { t.collapseInterface(this, e) })) }, t.getInstance = function(t) { return N(t, Yt) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return $t } }]), t }();
    $.on(document, "click.coreui.collapse.data-api", ie, (function(t) { "A" === t.target.tagName && t.preventDefault(); var e = kt.getDataAttributes(this),
            n = m(this);
        ft.find(n).forEach((function(t) { var n, i = N(t, Yt);
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, oe.collapseInterface(t, n) })) })); var re = A(); if (re) { var se = re.fn[Kt];
        re.fn[Kt] = oe.jQueryInterface, re.fn[Kt].Constructor = oe, re.fn[Kt].noConflict = function() { return re.fn[Kt] = se, oe.jQueryInterface } } var ae = "dropdown",
        le = "coreui.dropdown",
        ce = "." + le,
        ue = "Escape",
        fe = "Space",
        de = "ArrowUp",
        he = "ArrowDown",
        pe = new RegExp("ArrowUp|ArrowDown|Escape"),
        ge = "hide" + ce,
        me = "hidden" + ce,
        _e = "click.coreui.dropdown.data-api",
        ve = "keydown.coreui.dropdown.data-api",
        ye = "disabled",
        be = "show",
        Ee = "dropdown-menu-right",
        we = '[data-toggle="dropdown"]',
        ke = ".dropdown-menu",
        Le = { offset: [0, 0], flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        Ce = { offset: "(array|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        Te = function() {
            function e(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._addEventListeners(), O(t, le, this) } var n = e.prototype; return n.toggle = function() { if (!this._element.disabled && !this._element.classList.contains(ye)) { var t = this._menu.classList.contains(be);
                    e.clearMenus(), t || this.show() } }, n.show = function() { if (!(this._element.disabled || this._element.classList.contains(ye) || this._menu.classList.contains(be))) { var n = e.getParentFromElement(this._element),
                        i = { relatedTarget: this._element }; if (!$.trigger(n, "show.coreui.dropdown", i).defaultPrevented) { if (!this._inNavbar && !this._inHeader) { if ("undefined" == typeof t.createPopper) throw new TypeError("CoreUI's dropdowns require Popper.js (https://popper.js.org)"); var o = this._element; "parent" === this._config.reference ? o = n : b(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && n.classList.add("position-static"), this._popper = t.createPopper(o, this._menu, this._getPopperConfig()) } var r, s; if ("ontouchstart" in document.documentElement && !n.closest(".navbar-nav"))(r = []).concat.apply(r, document.body.children).forEach((function(t) { return $.on(t, "mouseover", null, (function() {})) })); if ("ontouchstart" in document.documentElement && !n.closest(".c-header-nav"))(s = []).concat.apply(s, document.body.children).forEach((function(t) { return $.on(t, "mouseover", null, (function() {})) }));
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), kt.toggleClass(this._menu, be), kt.toggleClass(n, be), $.trigger(n, "shown.coreui.dropdown", i) } } }, n.hide = function() { if (!this._element.disabled && !this._element.classList.contains(ye) && this._menu.classList.contains(be)) { var t = e.getParentFromElement(this._element),
                        n = { relatedTarget: this._element };
                    $.trigger(t, ge, n).defaultPrevented || (this._popper && this._popper.destroy(), kt.toggleClass(this._menu, be), kt.toggleClass(t, be), $.trigger(t, me, n)) } }, n.dispose = function() { I(this._element, le), $.off(this._element, ce), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null) }, n.update = function() { this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._popper && this._popper.update() }, n._addEventListeners = function() { var t = this;
                $.on(this._element, "click.coreui.dropdown", (function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })) }, n._getConfig = function(t) { return t = l(l(l({}, this.constructor.Default), kt.getDataAttributes(this._element)), t), w(ae, t, this.constructor.DefaultType), t }, n._getMenuElement = function() { var t = e.getParentFromElement(this._element); return ft.findOne(ke, t) }, n._getPlacement = function() { var t = this._element.parentNode,
                    e = "bottom-start"; return t.classList.contains("dropup") ? (e = "top-start", this._menu.classList.contains(Ee) && (e = "top-end")) : t.classList.contains("dropright") ? e = "right-start" : t.classList.contains("dropleft") ? e = "left-start" : this._menu.classList.contains(Ee) && (e = "bottom-end"), e }, n._detectNavbar = function() { return Boolean(this._element.closest(".navbar")) }, n._detectHeader = function() { return Boolean(this._element.closest(".c-header")) }, n._getOffset = function() { var t = this; return "function" == typeof this._config.offset ? function(e) { var n = e.placement,
                        i = e.reference,
                        o = e.popper; return t._config.offset({ placement: n, reference: i, popper: o }) } : this._config.offset }, n._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: [{ name: "offset", options: { offset: this._getOffset() } }, { name: "flip", enabled: this._config.flip }, { name: "preventOverflow", options: { boundary: this._config.boundary } }] }; return "static" === this._config.display && (t.modifiers = { name: "applyStyles", enabled: !1 }), l(l({}, t), this._config.popperConfig) }, e.dropdownInterface = function(t, n) { var i = N(t, le); if (i || (i = new e(t, "object" == typeof n ? n : null)), "string" == typeof n) { if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]() } }, e.jQueryInterface = function(t) { return this.each((function() { e.dropdownInterface(this, t) })) }, e.clearMenus = function(t) { if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                    for (var n = ft.find(we), i = 0, o = n.length; i < o; i++) { var r = e.getParentFromElement(n[i]),
                            s = N(n[i], le),
                            a = { relatedTarget: n[i] }; if (t && "click" === t.type && (a.clickEvent = t), s) { var l = s._menu; if (r.classList.contains(be))
                                if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && r.contains(t.target)))
                                    if (!$.trigger(r, ge, a).defaultPrevented) { var c; if ("ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function(t) { return $.off(t, "mouseover", null, (function() {})) }));
                                        n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove(be), r.classList.remove(be), $.trigger(r, me, a) } } } }, e.getParentFromElement = function(t) { return _(t) || t.parentNode }, e.dataApiKeydownHandler = function(t) { if (!(/input|textarea/i.test(t.target.tagName) ? t.key === fe || t.key !== ue && (t.key !== he && t.key !== de || t.target.closest(ke)) : !pe.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains(ye))) { var n = e.getParentFromElement(this),
                        i = n.classList.contains(be); if (t.key === ue) return (this.matches(we) ? this : ft.prev(this, we)[0]).focus(), void e.clearMenus(); if (i && t.key !== fe) { var o = ft.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(k); if (o.length) { var r = o.indexOf(t.target);
                            t.key === de && r > 0 && r--, t.key === he && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus() } } else e.clearMenus() } }, e.getInstance = function(t) { return N(t, le) }, r(e, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return Le } }, { key: "DefaultType", get: function() { return Ce } }]), e }();
    $.on(document, ve, we, Te.dataApiKeydownHandler), $.on(document, ve, ke, Te.dataApiKeydownHandler), $.on(document, _e, Te.clearMenus), $.on(document, "keyup.coreui.dropdown.data-api", Te.clearMenus), $.on(document, _e, we, (function(t) { t.preventDefault(), t.stopPropagation(), Te.dropdownInterface(this, "toggle") })), $.on(document, _e, ".dropdown form", (function(t) { return t.stopPropagation() })); var Ae = A(); if (Ae) { var Se = Ae.fn[ae];
        Ae.fn[ae] = Te.jQueryInterface, Ae.fn[ae].Constructor = Te, Ae.fn[ae].noConflict = function() { return Ae.fn[ae] = Se, Te.jQueryInterface } } var Oe = "modal",
        Ne = "coreui.modal",
        Ie = "." + Ne,
        De = "Escape",
        je = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Pe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        xe = "hidden" + Ie,
        Re = "show" + Ie,
        Me = "focusin" + Ie,
        Be = "resize" + Ie,
        He = "click.dismiss" + Ie,
        Ue = "keydown.dismiss" + Ie,
        Qe = "mousedown.dismiss" + Ie,
        qe = "modal-open",
        Fe = "fade",
        Ve = "show",
        We = "modal-static",
        ze = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Xe = ".sticky-top",
        Ke = function() {
            function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = ft.findOne(".modal-dialog", t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, O(t, Ne, this) } var e = t.prototype; return e.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, e.show = function(t) { var e = this; if (!this._isShown && !this._isTransitioning) { this._element.classList.contains(Fe) && (this._isTransitioning = !0); var n = $.trigger(this._element, Re, { relatedTarget: t });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, He, '[data-dismiss="modal"]', (function(t) { return e.hide(t) })), $.on(this._dialog, Qe, (function() { $.one(e._element, "mouseup.dismiss.coreui.modal", (function(t) { t.target === e._element && (e._ignoreBackdropClick = !0) })) })), this._showBackdrop((function() { return e._showElement(t) }))) } }, e.hide = function(t) { var e = this; if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !$.trigger(this._element, "hide.coreui.modal").defaultPrevented) { this._isShown = !1; var n = this._element.classList.contains(Fe); if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, Me), this._element.classList.remove(Ve), $.off(this._element, He), $.off(this._dialog, Qe), n) { var i = v(this._element);
                        $.one(this._element, h, (function(t) { return e._hideModal(t) })), E(this._element, i) } else this._hideModal() } }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) { return $.off(t, Ie) })), $.off(document, Me), I(this._element, Ne), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(t) { return t = l(l({}, je), t), w(Oe, t, Pe), t }, e._showElement = function(t) { var e = this,
                    n = this._element.classList.contains(Fe),
                    i = ft.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && T(this._element), this._element.classList.add(Ve), this._config.focus && this._enforceFocus(); var o = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, $.trigger(e._element, "shown.coreui.modal", { relatedTarget: t }) }; if (n) { var r = v(this._dialog);
                    $.one(this._dialog, h, o), E(this._dialog, r) } else o() }, e._enforceFocus = function() { var t = this;
                $.off(document, Me), $.on(document, Me, (function(e) { document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus() })) }, e._setEscapeEvent = function() { var t = this;
                this._isShown ? $.on(this._element, Ue, (function(e) { t._config.keyboard && e.key === De ? (e.preventDefault(), t.hide()) : t._config.keyboard || e.key !== De || t._triggerBackdropTransition() })) : $.off(this._element, Ue) }, e._setResizeEvent = function() { var t = this;
                this._isShown ? $.on(window, Be, (function() { return t._adjustDialog() })) : $.off(window, Be) }, e._hideModal = function() { var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() { document.body.classList.remove(qe), t._resetAdjustments(), t._resetScrollbar(), $.trigger(t._element, xe) })) }, e._removeBackdrop = function() { this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null }, e._showBackdrop = function(t) { var e = this,
                    n = this._element.classList.contains(Fe) ? Fe : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), $.on(this._element, He, (function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition() })), n && T(this._backdrop), this._backdrop.classList.add(Ve), !n) return void t(); var i = v(this._backdrop);
                    $.one(this._backdrop, h, t), E(this._backdrop, i) } else if (!this._isShown && this._backdrop) { this._backdrop.classList.remove(Ve); var o = function() { e._removeBackdrop(), t() }; if (this._element.classList.contains(Fe)) { var r = v(this._backdrop);
                        $.one(this._backdrop, h, o), E(this._backdrop, r) } else o() } else t() }, e._triggerBackdropTransition = function() { var t = this; if ("static" === this._config.backdrop) { if ($.trigger(this._element, "hidePrevented.coreui.modal").defaultPrevented) return; var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    e || (this._element.style.overflowY = "hidden"), this._element.classList.add(We); var n = v(this._dialog);
                    $.off(this._element, h), $.one(this._element, h, (function() { t._element.classList.remove(We), e || ($.one(t._element, h, (function() { t._element.style.overflowY = "" })), E(t._element, n)) })), E(this._element, n), this._element.focus() } else this.hide() }, e._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var t = this; if (this._isBodyOverflowing) { ft.find(ze).forEach((function(e) { var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        kt.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px" })), ft.find(Xe).forEach((function(e) { var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        kt.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px" })); var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    kt.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px" }
                document.body.classList.add(qe) }, e._resetScrollbar = function() { ft.find(ze).forEach((function(t) { var e = kt.getDataAttribute(t, "padding-right"); "undefined" != typeof e && (kt.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e) })), ft.find(".sticky-top").forEach((function(t) { var e = kt.getDataAttribute(t, "margin-right"); "undefined" != typeof e && (kt.removeDataAttribute(t, "margin-right"), t.style.marginRight = e) })); var t = kt.getDataAttribute(document.body, "padding-right"); "undefined" == typeof t ? document.body.style.paddingRight = "" : (kt.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t) }, e._getScrollbarWidth = function() { var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, t.jQueryInterface = function(e, n) { return this.each((function() { var i = N(this, Ne),
                        o = l(l(l({}, je), kt.getDataAttributes(this)), "object" == typeof e && e ? e : {}); if (i || (i = new t(this, o)), "string" == typeof e) { if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](n) } else o.show && i.show(n) })) }, t.getInstance = function(t) { return N(t, Ne) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return je } }]), t }();
    $.on(document, "click.coreui.modal.data-api", '[data-toggle="modal"]', (function(t) { var e = this,
            n = _(this); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), $.one(n, Re, (function(t) { t.defaultPrevented || $.one(n, xe, (function() { k(e) && e.focus() })) })); var i = N(n, Ne); if (!i) { var o = l(l({}, kt.getDataAttributes(n)), kt.getDataAttributes(this));
            i = new Ke(n, o) }
        i.show(this) })); var Ye = A(); if (Ye) { var $e = Ye.fn.modal;
        Ye.fn.modal = Ke.jQueryInterface, Ye.fn.modal.Constructor = Ke, Ye.fn.modal.noConflict = function() { return Ye.fn.modal = $e, Ke.jQueryInterface } } var Ge = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Je = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        tn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] };

    function en(t, e, n) { var i; if (!t.length) return t; if (n && "function" == typeof n) return n(t); for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) { var i, o = s[t],
                    a = o.nodeName.toLowerCase(); if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), "continue"; var l = (i = []).concat.apply(i, o.attributes),
                    c = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function(t) {
                    (function(t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === Ge.indexOf(n) || Boolean(t.nodeValue.match(Je) || t.nodeValue.match(Ze)); for (var i = e.filter((function(t) { return t instanceof RegExp })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1 })(t, c) || o.removeAttribute(t.nodeName) })) }, l = 0, c = s.length; l < c; l++) a(l); return o.body.innerHTML } var nn = "tooltip",
        on = "coreui.tooltip",
        rn = "." + on,
        sn = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        an = ["sanitize", "whiteList", "sanitizeFn"],
        ln = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|function)", container: "(string|element|boolean)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        cn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        un = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: tn, popperConfig: null },
        fn = { HIDE: "hide" + rn, HIDDEN: "hidden" + rn, SHOW: "show" + rn, SHOWN: "shown" + rn, INSERTED: "inserted" + rn, CLICK: "click" + rn, FOCUSIN: "focusin" + rn, FOCUSOUT: "focusout" + rn, MOUSEENTER: "mouseenter" + rn, MOUSELEAVE: "mouseleave" + rn },
        dn = "fade",
        hn = "show",
        pn = "show",
        gn = "out",
        mn = "hover",
        _n = "focus",
        vn = function() {
            function e(e, n) { if ("undefined" == typeof t.createPopper) throw new TypeError("CoreUI's tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners(), O(e, this.constructor.DATA_KEY, this) } var n = e.prototype; return n.enable = function() { this._isEnabled = !0 }, n.disable = function() { this._isEnabled = !1 }, n.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, n.toggle = function(t) { if (this._isEnabled)
                    if (t) { var e = this.constructor.DATA_KEY,
                            n = N(t.delegateTarget, e);
                        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), O(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (this.getTipElement().classList.contains(hn)) return void this._leave(null, this);
                        this._enter(null, this) } }, n.dispose = function() { clearTimeout(this._timeout), I(this.element, this.constructor.DATA_KEY), $.off(this.element, this.constructor.EVENT_KEY), $.off(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, n.show = function() { var e = this; if ("none" === this.element.style.display) throw new Error("Please use show on visible elements"); if (this.isWithContent() && this._isEnabled) { var n = $.trigger(this.element, this.constructor.Event.SHOW),
                        i = L(this.element),
                        o = null === i ? this.element.ownerDocument.documentElement.contains(this.element) : i.contains(this.element); if (n.defaultPrevented || !o) return; var r = this.getTipElement(),
                        s = p(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && r.classList.add(dn); var a, l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        c = this._getAttachment(l),
                        u = this._getContainer(); if (O(r, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(r), $.trigger(this.element, this.constructor.Event.INSERTED), this._popper = t.createPopper(this.element, r, this._getPopperConfig(c)), r.classList.add(hn), "ontouchstart" in document.documentElement)(a = []).concat.apply(a, document.body.children).forEach((function(t) { $.on(t, "mouseover", (function() {})) })); var f = function() { e.config.animation && e._fixTransition(); var t = e._hoverState;
                        e._hoverState = null, $.trigger(e.element, e.constructor.Event.SHOWN), t === gn && e._leave(null, e) }; if (this.tip.classList.contains(dn)) { var d = v(this.tip);
                        $.one(this.tip, h, f), E(this.tip, d) } else f() } }, n.hide = function() { var t = this,
                    e = this.getTipElement(),
                    n = function() { t._hoverState !== pn && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), $.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy() }; if (!$.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) { var i; if (e.classList.remove(hn), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach((function(t) { return $.off(t, "mouseover", C) })); if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains(dn)) { var o = v(e);
                        $.one(e, h, n), E(e, o) } else n();
                    this._hoverState = "" } }, n.update = function() { null !== this._popper && this._popper.update() }, n.isWithContent = function() { return Boolean(this.getTitle()) }, n.getTipElement = function() { if (this.tip) return this.tip; var t = document.createElement("div"); return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip }, n.setContent = function() { var t = this.getTipElement();
                this.setElementContent(ft.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove(dn, hn) }, n.setElementContent = function(t, e) { if (null !== t) return "object" == typeof e && b(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = en(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) }, n.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, n._getPopperConfig = function(t) { var e = this; return l(l({}, { placement: t, modifiers: [{ name: "offset", options: { offset: this._getOffset() } }, { name: "arrow", options: { element: "." + this.constructor.NAME + "-arrow" } }, { name: "preventOverflow", options: { boundary: this.config.boundary } }], onFirstUpdate: function(t) { t.originalPlacement !== t.placement && e._popper.update() } }), this.config.popperConfig) }, n._getOffset = function() { var t = this; return "function" == typeof this.config.offset ? function(e) { var n = e.placement,
                        i = e.reference,
                        o = e.popper; return t.config.offset({ placement: n, reference: i, popper: o }) } : this.config.offset }, n._getContainer = function() { return !1 === this.config.container ? document.body : b(this.config.container) ? this.config.container : ft.findOne(this.config.container) }, n._getAttachment = function(t) { return cn[t.toUpperCase()] }, n._setListeners = function() { var t = this;
                this.config.trigger.split(" ").forEach((function(e) { if ("click" === e) $.on(t.element, t.constructor.Event.CLICK, t.config.selector, (function(e) { return t.toggle(e) }));
                    else if ("manual" !== e) { var n = e === mn ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = e === mn ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        $.on(t.element, n, t.config.selector, (function(e) { return t._enter(e) })), $.on(t.element, i, t.config.selector, (function(e) { return t._leave(e) })) } })), this._hideModalHandler = function() { t.element && t.hide() }, $.on(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.config.selector ? this.config = l(l({}, this.config), {}, { trigger: "manual", selector: "" }) : this._fixTitle() }, n._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, n._enter = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || N(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), O(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? _n : mn] = !0), e.getTipElement().classList.contains(hn) || e._hoverState === pn ? e._hoverState = pn : (clearTimeout(e._timeout), e._hoverState = pn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() { e._hoverState === pn && e.show() }), e.config.delay.show) : e.show()) }, n._leave = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || N(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), O(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? _n : mn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = gn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() { e._hoverState === gn && e.hide() }), e.config.delay.hide) : e.hide()) }, n._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, n._getConfig = function(t) { var e = kt.getDataAttributes(this.element); return Object.keys(e).forEach((function(t) {-1 !== an.indexOf(t) && delete e[t] })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = l(l(l({}, this.constructor.Default), e), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), w(nn, t, this.constructor.DefaultType), t.sanitize && (t.template = en(t.template, t.whiteList, t.sanitizeFn)), t }, n._getDelegateConfig = function() { var t = {}; if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, n._cleanTipClass = function() { var t = this.getTipElement(),
                    e = t.getAttribute("class").match(sn);
                null !== e && e.length > 0 && e.map((function(t) { return t.trim() })).forEach((function(e) { return t.classList.remove(e) })) }, n._fixTransition = function() { var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("data-popper-placement") && (t.classList.remove(dn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, e.jQueryInterface = function(t) { return this.each((function() { var n = N(this, on),
                        i = "object" == typeof t && t; if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i)), "string" == typeof t)) { if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]() } })) }, e.getInstance = function(t) { return N(t, on) }, r(e, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return un } }, { key: "NAME", get: function() { return nn } }, { key: "DATA_KEY", get: function() { return on } }, { key: "Event", get: function() { return fn } }, { key: "EVENT_KEY", get: function() { return rn } }, { key: "DefaultType", get: function() { return ln } }]), e }(),
        yn = A(); if (yn) { var bn = yn.fn.tooltip;
        yn.fn.tooltip = vn.jQueryInterface, yn.fn.tooltip.Constructor = vn, yn.fn.tooltip.noConflict = function() { return yn.fn.tooltip = bn, vn.jQueryInterface } } var En = "popover",
        wn = "coreui.popover",
        kn = "." + wn,
        Ln = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Cn = l(l({}, vn.Default), {}, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Tn = l(l({}, vn.DefaultType), {}, { content: "(string|element|function)" }),
        An = { HIDE: "hide" + kn, HIDDEN: "hidden" + kn, SHOW: "show" + kn, SHOWN: "shown" + kn, INSERTED: "inserted" + kn, CLICK: "click" + kn, FOCUSIN: "focusin" + kn, FOCUSOUT: "focusout" + kn, MOUSEENTER: "mouseenter" + kn, MOUSELEAVE: "mouseleave" + kn },
        Sn = function(t) { var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var o = i.prototype; return o.isWithContent = function() { return this.getTitle() || this._getContent() }, o.setContent = function() { var t = this.getTipElement();
                this.setElementContent(ft.findOne(".popover-header", t), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(ft.findOne(".popover-body", t), e), t.classList.remove("fade", "show") }, o._addAttachmentClass = function(t) { this.getTipElement().classList.add("bs-popover-" + t) }, o._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function() { var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Ln);
                null !== e && e.length > 0 && e.map((function(t) { return t.trim() })).forEach((function(e) { return t.classList.remove(e) })) }, i.jQueryInterface = function(t) { return this.each((function() { var e = N(this, wn),
                        n = "object" == typeof t ? t : null; if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), O(this, wn, e)), "string" == typeof t)) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } })) }, i.getInstance = function(t) { return N(t, wn) }, r(i, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return Cn } }, { key: "NAME", get: function() { return En } }, { key: "DATA_KEY", get: function() { return wn } }, { key: "Event", get: function() { return An } }, { key: "EVENT_KEY", get: function() { return kn } }, { key: "DefaultType", get: function() { return Tn } }]), i }(vn),
        On = A(); if (On) { var Nn = On.fn.popover;
        On.fn.popover = Sn.jQueryInterface, On.fn.popover.Constructor = Sn, On.fn.popover.noConflict = function() { return On.fn.popover = Nn, Sn.jQueryInterface } } var In = "scrollspy",
        Dn = "coreui.scrollspy",
        jn = "." + Dn,
        Pn = { offset: 10, method: "auto", target: "" },
        xn = { offset: "number", method: "string", target: "(string|element)" },
        Rn = "dropdown-item",
        Mn = "active",
        Bn = ".nav-link",
        Hn = "position",
        Un = function() {
            function t(t, e) { var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ".nav-link, " + this._config.target + " " + ".list-group-item, " + this._config.target + " ." + Rn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.coreui.scrollspy", (function(t) { return n._process(t) })), this.refresh(), this._process(), O(t, Dn, this) } var e = t.prototype; return e.refresh = function() { var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : Hn,
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = n === Hn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), ft.find(this._selector).map((function(t) { var e = m(t),
                        o = e ? ft.findOne(e) : null; if (o) { var r = o.getBoundingClientRect(); if (r.width || r.height) return [kt[n](o).top + i, e] } return null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })) }, e.dispose = function() { I(this._element, Dn), $.off(this._scrollElement, jn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(t) { if ("string" != typeof(t = l(l({}, Pn), "object" == typeof t && t ? t : {})).target && b(t.target)) { var e = t.target.id;
                    e || (e = p(In), t.target.id = e), t.target = "#" + e } return w(In, t, xn), t }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() { var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, e._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",").map((function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })),
                    n = ft.findOne(e.join(","));
                n.classList.contains(Rn) ? (ft.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Mn), n.classList.add(Mn)) : (n.classList.add(Mn), ft.parents(n, ".nav, .list-group").forEach((function(t) { ft.prev(t, ".nav-link, .list-group-item").forEach((function(t) { return t.classList.add(Mn) })), ft.prev(t, ".nav-item").forEach((function(t) { ft.children(t, Bn).forEach((function(t) { return t.classList.add(Mn) })) })) }))), $.trigger(this._scrollElement, "activate.coreui.scrollspy", { relatedTarget: t }) }, e._clear = function() { ft.find(this._selector).filter((function(t) { return t.classList.contains(Mn) })).forEach((function(t) { return t.classList.remove(Mn) })) }, t.jQueryInterface = function(e) { return this.each((function() { var n = N(this, Dn); if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } })) }, t.getInstance = function(t) { return N(t, Dn) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return Pn } }]), t }();
    $.on(window, "load.coreui.scrollspy.data-api", (function() { ft.find('[data-spy="scroll"]').forEach((function(t) { return new Un(t, kt.getDataAttributes(t)) })) })); var Qn = A(); if (Qn) { var qn = Qn.fn[In];
        Qn.fn[In] = Un.jQueryInterface, Qn.fn[In].Constructor = Un, Qn.fn[In].noConflict = function() { return Qn.fn[In] = qn, Un.jQueryInterface } } var Fn = "sidebar",
        Vn = "coreui.sidebar",
        Wn = { activeLinksExact: !0, breakpoints: { xs: "c-sidebar-show", sm: "c-sidebar-sm-show", md: "c-sidebar-md-show", lg: "c-sidebar-lg-show", xl: "c-sidebar-xl-show", xxl: "c-sidebar-xxl-show" }, dropdownAccordion: !0 },
        zn = { activeLinksExact: "boolean", breakpoints: "object", dropdownAccordion: "(string|boolean)" },
        Xn = "c-active",
        Kn = "c-sidebar-nav-dropdown",
        Yn = "c-show",
        $n = "c-sidebar-minimized",
        Gn = "c-sidebar-unfoldable",
        Jn = "click.coreui.sidebar.data-api",
        Zn = ".c-sidebar-nav-dropdown-toggle",
        ti = ".c-sidebar-nav-dropdown",
        ei = ".c-sidebar-nav-link",
        ni = ".c-sidebar-nav",
        ii = ".c-sidebar",
        oi = function() {
            function t(t, e) { if ("undefined" == typeof i.default) throw new TypeError("CoreUI's sidebar require Perfect Scrollbar");
                this._element = t, this._config = this._getConfig(e), this._open = this._isVisible(), this._mobile = this._isMobile(), this._overlaid = this._isOverlaid(), this._minimize = this._isMinimized(), this._unfoldable = this._isUnfoldable(), this._setActiveLink(), this._ps = null, this._backdrop = null, this._psInit(), this._addEventListeners(), O(t, Vn, this) } var e = t.prototype; return e.open = function(t) { var e = this;
                $.trigger(this._element, "open.coreui.sidebar"), this._isMobile() ? (this._addClassName(this._firstBreakpointClassName()), this._showBackdrop(), $.one(this._element, h, (function() { e._addClickOutListener() }))) : t ? (this._addClassName(this._getBreakpointClassName(t)), this._isOverlaid() && $.one(this._element, h, (function() { e._addClickOutListener() }))) : (this._addClassName(this._firstBreakpointClassName()), this._isOverlaid() && $.one(this._element, h, (function() { e._addClickOutListener() }))); var n = v(this._element);
                $.one(this._element, h, (function() {!0 === e._isVisible() && (e._open = !0, $.trigger(e._element, "opened.coreui.sidebar")) })), E(this._element, n) }, e.close = function(t) { var e = this;
                $.trigger(this._element, "close.coreui.sidebar"), this._isMobile() ? (this._element.classList.remove(this._firstBreakpointClassName()), this._removeBackdrop(), this._removeClickOutListener()) : t ? (this._element.classList.remove(this._getBreakpointClassName(t)), this._isOverlaid() && this._removeClickOutListener()) : (this._element.classList.remove(this._firstBreakpointClassName()), this._isOverlaid() && this._removeClickOutListener()); var n = v(this._element);
                $.one(this._element, h, (function() {!1 === e._isVisible() && (e._open = !1, $.trigger(e._element, "closed.coreui.sidebar")) })), E(this._element, n) }, e.toggle = function(t) { this._open ? this.close(t) : this.open(t) }, e.minimize = function() { this._isMobile() || (this._addClassName($n), this._minimize = !0, this._psDestroy()) }, e.unfoldable = function() { this._isMobile() || (this._addClassName(Gn), this._unfoldable = !0) }, e.reset = function() { this._element.classList.contains($n) && (this._element.classList.remove($n), this._minimize = !1, $.one(this._element, h, this._psInit())), this._element.classList.contains(Gn) && (this._element.classList.remove(Gn), this._unfoldable = !1) }, e._getConfig = function(t) { return t = l(l(l({}, this.constructor.Default), kt.getDataAttributes(this._element)), t), w(Fn, t, this.constructor.DefaultType), t }, e._isMobile = function() { return Boolean(window.getComputedStyle(this._element, null).getPropertyValue("--is-mobile")) }, e._isIOS = function() { var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]; if (Boolean(navigator.platform))
                    for (; t.length;)
                        if (navigator.platform === t.pop()) return !0;
                return !1 }, e._isMinimized = function() { return this._element.classList.contains($n) }, e._isOverlaid = function() { return this._element.classList.contains("c-sidebar-overlaid") }, e._isUnfoldable = function() { return this._element.classList.contains(Gn) }, e._isVisible = function() { var t = this._element.getBoundingClientRect(); return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth) }, e._addClassName = function(t) { this._element.classList.add(t) }, e._firstBreakpointClassName = function() { return Object.keys(Wn.breakpoints).map((function(t) { return Wn.breakpoints[t] }))[0] }, e._getBreakpointClassName = function(t) { return Wn.breakpoints[t] }, e._removeBackdrop = function() { this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null) }, e._showBackdrop = function() { this._backdrop || (this._backdrop = document.createElement("div"), this._backdrop.className = "c-sidebar-backdrop", this._backdrop.classList.add("c-fade"), document.body.appendChild(this._backdrop), T(this._backdrop), this._backdrop.classList.add(Yn)) }, e._clickOutListener = function(t, e) { null === t.target.closest(ii) && (t.preventDefault(), t.stopPropagation(), e.close()) }, e._addClickOutListener = function() { var t = this;
                $.on(document, Jn, (function(e) { t._clickOutListener(e, t) })) }, e._removeClickOutListener = function() { $.off(document, Jn) }, e._getAllSiblings = function(t, e) { var n = [];
                t = t.parentNode.firstChild;
                do { 3 !== t.nodeType && 8 !== t.nodeType && (e && !e(t) || n.push(t)) } while (t = t.nextSibling); return n }, e._toggleDropdown = function(t, e) { var n = t.target;
                n.classList.contains("c-sidebar-nav-dropdown-toggle") || (n = n.closest(Zn)); var i = n.closest(ni).dataset; "undefined" != typeof i.dropdownAccordion && (Wn.dropdownAccordion = JSON.parse(i.dropdownAccordion)), !0 === Wn.dropdownAccordion && this._getAllSiblings(n.parentElement, (function(t) { return Boolean(t.classList.contains(Kn)) })).forEach((function(t) { t !== n.parentNode && t.classList.contains(Kn) && t.classList.remove(Yn) })), n.parentNode.classList.toggle(Yn), e._psUpdate() }, e._psInit = function() { this._element.querySelector(ni) && !this._isIOS() && (this._ps = new i.default(this._element.querySelector(ni), { suppressScrollX: !0, wheelPropagation: !1 })) }, e._psUpdate = function() { this._ps && this._ps.update() }, e._psDestroy = function() { this._ps && (this._ps.destroy(), this._ps = null) }, e._getParents = function(t, e) { for (var n = []; t && t !== document; t = t.parentNode) e ? t.matches(e) && n.push(t) : n.push(t); return n }, e._setActiveLink = function() { var t = this;
                Array.from(this._element.querySelectorAll(ei)).forEach((function(e) { var n = String(window.location);
                    (/\?.*=/.test(n) || /\?./.test(n)) && (n = n.split("?")[0]), /#./.test(n) && (n = n.split("#")[0]); var i = e.closest(ni).dataset; "undefined" != typeof i.activeLinksExact && (Wn.activeLinksExact = JSON.parse(i.activeLinksExact)), Wn.activeLinksExact && e.href === n && (e.classList.add(Xn), Array.from(t._getParents(e, ti)).forEach((function(t) { t.classList.add(Yn) }))), !Wn.activeLinksExact && e.href.startsWith(n) && (e.classList.add(Xn), Array.from(t._getParents(e, ti)).forEach((function(t) { t.classList.add(Yn) }))) })) }, e._addEventListeners = function() { var t = this;
                this._mobile && this._open && this._addClickOutListener(), this._overlaid && this._open && this._addClickOutListener(), $.on(this._element, "classtoggle", (function(e) { if (e.detail.className === $n && (t._element.classList.contains($n) ? t.minimize() : t.reset()), e.detail.className === Gn && (t._element.classList.contains(Gn) ? t.unfoldable() : t.reset()), "undefined" != typeof Object.keys(Wn.breakpoints).find((function(t) { return Wn.breakpoints[t] === e.detail.className }))) { var n = e.detail.className,
                            i = Object.keys(Wn.breakpoints).find((function(t) { return Wn.breakpoints[t] === n }));
                        e.detail.add ? t.open(i) : t.close(i) } })), $.on(this._element, Jn, Zn, (function(e) { e.preventDefault(), t._toggleDropdown(e, t) })), $.on(this._element, Jn, ei, (function() { t._isMobile() && t.close() })) }, t._sidebarInterface = function(e, n) { var i = N(e, Vn); if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) { if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]() } }, t.jQueryInterface = function(e) { return this.each((function() { t._sidebarInterface(this, e) })) }, t.getInstance = function(t) { return N(t, Vn) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "Default", get: function() { return Wn } }, { key: "DefaultType", get: function() { return zn } }]), t }();
    $.on(window, "load.coreui.sidebar.data-api", (function() { Array.from(document.querySelectorAll(ii)).forEach((function(t) { oi._sidebarInterface(t) })) })); var ri = A(); if (ri) { var si = ri.fn.sidebar;
        ri.fn.sidebar = oi.jQueryInterface, ri.fn.sidebar.Constructor = oi, ri.fn.sidebar.noConflict = function() { return ri.fn.sidebar = si, oi.jQueryInterface } } var ai = "coreui.tab",
        li = "active",
        ci = "fade",
        ui = "show",
        fi = ".active",
        di = ":scope > li > .active",
        hi = function() {
            function t(t) { this._element = t, O(this._element, ai, this) } var e = t.prototype; return e.show = function() { var t = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(li) || this._element.classList.contains("disabled"))) { var e, n = _(this._element),
                        i = this._element.closest(".nav, .list-group"); if (i) { var o = "UL" === i.nodeName || "OL" === i.nodeName ? di : fi;
                        e = (e = ft.find(o, i))[e.length - 1] } var r = null; if (e && (r = $.trigger(e, "hide.coreui.tab", { relatedTarget: this._element })), !($.trigger(this._element, "show.coreui.tab", { relatedTarget: e }).defaultPrevented || null !== r && r.defaultPrevented)) { this._activate(this._element, i); var s = function() { $.trigger(e, "hidden.coreui.tab", { relatedTarget: t._element }), $.trigger(t._element, "shown.coreui.tab", { relatedTarget: e }) };
                        n ? this._activate(n, n.parentNode, s) : s() } } }, e.dispose = function() { I(this._element, ai), this._element = null }, e._activate = function(t, e, n) { var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? ft.children(e, fi) : ft.find(di, e))[0],
                    r = n && o && o.classList.contains(ci),
                    s = function() { return i._transitionComplete(t, o, n) }; if (o && r) { var a = v(o);
                    o.classList.remove(ui), $.one(o, h, s), E(o, a) } else s() }, e._transitionComplete = function(t, e, n) { if (e) { e.classList.remove(li); var i = ft.findOne(":scope > .dropdown-menu .active", e.parentNode);
                    i && i.classList.remove(li), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) }(t.classList.add(li), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), T(t), t.classList.contains(ci) && t.classList.add(ui), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && ft.find(".dropdown-toggle").forEach((function(t) { return t.classList.add(li) })), t.setAttribute("aria-expanded", !0));
                n && n() }, t.jQueryInterface = function(e) { return this.each((function() { var n = N(this, ai) || new t(this); if ("string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } })) }, t.getInstance = function(t) { return N(t, ai) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }]), t }();
    $.on(document, "click.coreui.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) { t.preventDefault(), (N(this, ai) || new hi(this)).show() })); var pi = A(); if (pi) { var gi = pi.fn.tab;
        pi.fn.tab = hi.jQueryInterface, pi.fn.tab.Constructor = hi, pi.fn.tab.noConflict = function() { return pi.fn.tab = gi, hi.jQueryInterface } } var mi, _i, vi, yi, bi, Ei = "toast",
        wi = "coreui.toast",
        ki = "." + wi,
        Li = "click.dismiss" + ki,
        Ci = "hide",
        Ti = "show",
        Ai = "showing",
        Si = { animation: "boolean", autohide: "boolean", delay: "number" },
        Oi = { animation: !0, autohide: !0, delay: 5e3 },
        Ni = function() {
            function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), O(t, wi, this) } var e = t.prototype; return e.show = function() { var t = this; if (!$.trigger(this._element, "show.coreui.toast").defaultPrevented) { this._clearTimeout(), this._config.animation && this._element.classList.add("fade"); var e = function() { t._element.classList.remove(Ai), t._element.classList.add(Ti), $.trigger(t._element, "shown.coreui.toast"), t._config.autohide && (t._timeout = setTimeout((function() { t.hide() }), t._config.delay)) }; if (this._element.classList.remove(Ci), T(this._element), this._element.classList.add(Ai), this._config.animation) { var n = v(this._element);
                        $.one(this._element, h, e), E(this._element, n) } else e() } }, e.hide = function() { var t = this; if (this._element.classList.contains(Ti) && !$.trigger(this._element, "hide.coreui.toast").defaultPrevented) { var e = function() { t._element.classList.add(Ci), $.trigger(t._element, "hidden.coreui.toast") }; if (this._element.classList.remove(Ti), this._config.animation) { var n = v(this._element);
                        $.one(this._element, h, e), E(this._element, n) } else e() } }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains(Ti) && this._element.classList.remove(Ti), $.off(this._element, Li), I(this._element, wi), this._element = null, this._config = null }, e._getConfig = function(t) { return t = l(l(l({}, Oi), kt.getDataAttributes(this._element)), "object" == typeof t && t ? t : {}), w(Ei, t, this.constructor.DefaultType), t }, e._setListeners = function() { var t = this;
                $.on(this._element, Li, '[data-dismiss="toast"]', (function() { return t.hide() })) }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, t.jQueryInterface = function(e) { return this.each((function() { var n = N(this, wi); if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](this) } })) }, t.getInstance = function(t) { return N(t, wi) }, r(t, null, [{ key: "VERSION", get: function() { return "3.2.2" } }, { key: "DefaultType", get: function() { return Si } }, { key: "Default", get: function() { return Oi } }]), t }(),
        Ii = A(); if (Ii) { var Di = Ii.fn.toast;
        Ii.fn.toast = Ni.jQueryInterface, Ii.fn.toast.Constructor = Ni, Ii.fn.toast.noConflict = function() { return Ii.fn.toast = Di, Ni.jQueryInterface } } return Array.from || (Array.from = (mi = Object.prototype.toString, _i = function(t) { return "function" == typeof t || "[object Function]" === mi.call(t) }, vi = Math.pow(2, 53) - 1, yi = function(t) { var e = function(t) { var e = Number(t); return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e }(t); return Math.min(Math.max(e, 0), vi) }, function(t) { var e = this,
                n = Object(t); if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var i, o = arguments.length > 1 ? arguments[1] : void 0; if ("undefined" != typeof o) { if (!_i(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2]) } for (var r, s = yi(n.length), a = _i(e) ? Object(new e(s)) : new Array(s), l = 0; l < s;) r = n[l], a[l] = o ? "undefined" == typeof i ? o(r, l) : o.call(i, r, l) : r, l += 1; return a.length = s, a })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) { var e = this;
            do { if (e.matches(t)) return e;
                e = e.parentElement || e.parentNode } while (null !== e && 1 === e.nodeType); return null }),
        function() { if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function(t, e) { e = e || { bubbles: !1, cancelable: !1, detail: null }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n } }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) { for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;); return n > -1 }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(t) { if (null == this) throw new TypeError('"this" is null or not defined'); var e = Object(this),
                    n = e.length >>> 0; if ("function" != typeof t) throw new TypeError("predicate must be a function"); for (var i = arguments[1], o = 0; o < n;) { var r = e[o]; if (t.call(i, r, o, e)) return r;
                    o++ } } }), "function" != typeof Object.assign && (Object.assign = function(t, e) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var n = Object(t), i = 1; i < arguments.length; i++) { var o = arguments[i]; if (null != o)
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]) } return n }), bi = function() {
            function t(t) { var e = this.constructor; return this.then((function(n) { return e.resolve(t()).then((function() { return n })) }), (function(n) { return e.resolve(t()).then((function() { return e.reject(n) })) })) } var e = setTimeout;

            function n(t) { return Boolean(t && "undefined" != typeof t.length) }

            function i() {}

            function o(t) { if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this) }

            function r(t, e) { for (; 3 === t._state;) t = t._value;
                0 !== t._state ? (t._handled = !0, o._immediateFn((function() { var n = 1 === t._state ? e.onFulfilled : e.onRejected; if (null !== n) { var i; try { i = n(t._value) } catch (t) { return void a(e.promise, t) }
                        s(e.promise, i) } else(1 === t._state ? s : a)(e.promise, t._value) }))) : t._deferreds.push(e) }

            function s(t, e) { try { if (e === t) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if (e instanceof o) return t._state = 3, t._value = e, void l(t); if ("function" == typeof n) return void u((i = n, r = e, function() { i.apply(r, arguments) }), t) }
                    t._state = 1, t._value = e, l(t) } catch (e) { a(t, e) } var i, r }

            function a(t, e) { t._state = 2, t._value = e, l(t) }

            function l(t) { 2 === t._state && 0 === t._deferreds.length && o._immediateFn((function() { t._handled || o._unhandledRejectionFn(t._value) })); for (var e = 0, n = t._deferreds.length; e < n; e++) r(t, t._deferreds[e]);
                t._deferreds = null }

            function c(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n }

            function u(t, e) { var n = !1; try { t((function(t) { n || (n = !0, s(e, t)) }), (function(t) { n || (n = !0, a(e, t)) })) } catch (t) { if (n) return;
                    n = !0, a(e, t) } }
            o.prototype.catch = function(t) { return this.then(null, t) }, o.prototype.then = function(t, e) { var n = new this.constructor(i); return r(this, new c(t, e, n)), n }, o.prototype.finally = t, o.all = function(t) { return new o((function(e, i) { if (!n(t)) return i(new TypeError("Promise.all accepts an array")); var o = Array.prototype.slice.call(t); if (0 === o.length) return e([]); var r = o.length;

                    function s(t, n) { try { if (n && ("object" == typeof n || "function" == typeof n)) { var a = n.then; if ("function" == typeof a) return void a.call(n, (function(e) { s(t, e) }), i) }
                            o[t] = n, 0 == --r && e(o) } catch (t) { i(t) } } for (var a = 0; a < o.length; a++) s(a, o[a]) })) }, o.resolve = function(t) { return t && "object" == typeof t && t.constructor === o ? t : new o((function(e) { e(t) })) }, o.reject = function(t) { return new o((function(e, n) { n(t) })) }, o.race = function(t) { return new o((function(e, i) { if (!n(t)) return i(new TypeError("Promise.race accepts an array")); for (var r = 0, s = t.length; r < s; r++) o.resolve(t[r]).then(e, i) })) }, o._immediateFn = "function" == typeof setImmediate && function(t) { setImmediate(t) } || function(t) { e(t, 0) }, o._unhandledRejectionFn = function(t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) }; var f = function() { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw new Error("unable to locate global object") }(); "Promise" in f ? f.Promise.prototype.finally || (f.Promise.prototype.finally = t) : f.Promise = o }, "object" == typeof exports && "undefined" != typeof module ? bi() : "function" == typeof define && define.amd ? define(bi) : bi(),
        function() {
            function t(t, e) { e = e || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n } "function" == typeof window.CustomEvent || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1 || (t.prototype = window.Event.prototype, window.CustomEvent = t) }(), { AsyncLoad: ot, Alert: lt, Button: vt, Carousel: xt, ClassToggler: Wt, Collapse: oe, Dropdown: Te, Modal: Ke, Popover: Sn, Scrollspy: Un, Sidebar: oi, Tab: hi, Toast: Ni, Tooltip: vn } }));
//# sourceMappingURL=coreui.min.js.map