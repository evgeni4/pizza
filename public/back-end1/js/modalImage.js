!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
            return e[t]
        }.bind(null, r));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "./", n(n.s = "ng4s")
}({
    "2hVI": function (e, t, n) {
        var i, r, o;
        r = [n("EVdn")], void 0 === (o = "function" == typeof (i = function (e) {
            e.extend({
                highlight: function (t, n, i, r, o, s) {
                    if (3 === t.nodeType) {
                        var a = (s ? e.removeDiacritcs(t.data) : t.data).match(n);
                        if (a) {
                            var l = document.createElement(i || "span");
                            l.className = r || "highlight";
                            var c = t.data.indexOf(a[1], a.index), u = t.splitText(c);
                            u.splitText(a[1].length);
                            var d = u.cloneNode(!0);
                            return l.appendChild(d), u.parentNode.replaceChild(l, u), "function" == typeof o && o(l), 1
                        }
                    } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && (t.tagName !== i.toUpperCase() || t.className !== r)) for (var h = 0; h < t.childNodes.length; h++) h += e.highlight(t.childNodes[h], n, i, r, o, s);
                    return 0
                }, removeDiacritcs: function (e) {
                    return e.replace(/[\u00c0-\u00c6]/g, "A").replace(/[\u00e0-\u00e6]/g, "a").replace(/[\u00c7]/g, "C").replace(/[\u00e7]/g, "c").replace(/[\u00c8-\u00cb]/g, "E").replace(/[\u00e8-\u00eb]/g, "e").replace(/[\u00cc-\u00cf]/g, "I").replace(/[\u00ec-\u00ef]/g, "i").replace(/[\u00d1|\u0147]/g, "N").replace(/[\u00f1|\u0148]/g, "n").replace(/[\u00d2-\u00d8|\u0150]/g, "O").replace(/[\u00f2-\u00f8|\u0151]/g, "o").replace(/[\u0160]/g, "S").replace(/[\u0161]/g, "s").replace(/[\u00d9-\u00dc]/g, "U").replace(/[\u00f9-\u00fc]/g, "u").replace(/[\u00dd]/g, "Y").replace(/[\u00fd]/g, "y")
                }
            }), e.fn.unhighlight = function (t) {
                var n = {className: "highlight", element: "span"};
                return e.extend(n, t), this.find(n.element + "." + n.className).each((function () {
                    var e = this.parentNode;
                    e.replaceChild(this.firstChild, this), e.normalize()
                })).end()
            }, e.fn.highlight = function (t, n, i) {
                var r = {
                    className: "highlight",
                    element: "span",
                    caseSensitive: !1,
                    wordsOnly: !1,
                    wordsBoundary: "\\b",
                    ignoreDiacritics: !1
                };
                if (e.extend(r, n), "string" == typeof t && (t = [t]), t = e.grep(t, (function (e) {
                    return "" != e
                })), 0 === (t = e.map(t, (function (t) {
                    return r.ignoreDiacritics && (t = e.removeDiacritcs(t)), t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                }))).length) return this;
                var o = r.caseSensitive ? "" : "i", s = "(" + t.join("|") + ")";
                r.wordsOnly && (s = (r.wordsBoundaryStart || r.wordsBoundary) + s + (r.wordsBoundaryEnd || r.wordsBoundary));
                var a = new RegExp(s, o);
                return this.each((function () {
                    e.highlight(this, a, r.element, r.className, i, r.ignoreDiacritics)
                }))
            }
        }) ? i.apply(t, r) : i) || (e.exports = o)
    }, "8L3F": function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.16.1
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                i = function () {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                    return 0
                }();
            var r = n && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then((function () {
                        t = !1, e()
                    })))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout((function () {
                        t = !1, e()
                    }), i))
                }
            };

            function o(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function s(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function a(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function l(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case"HTML":
                    case"BODY":
                        return e.ownerDocument.body;
                    case"#document":
                        return e.body
                }
                var t = s(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? e : l(a(e))
            }

            function c(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }

            var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                d = n && /MSIE 10/.test(navigator.userAgent);

            function h(e) {
                return 11 === e ? u : 10 === e ? d : u || d
            }

            function f(e) {
                if (!e) return document.documentElement;
                for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function p(e) {
                return null !== e.parentNode ? p(e.parentNode) : e
            }

            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var s, a, l = o.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
                var c = p(e);
                return c.host ? g(c.host, t) : g(e, p(t).host)
            }

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft", i = e.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var r = e.ownerDocument.documentElement, o = e.ownerDocument.scrollingElement || r;
                    return o[n]
                }
                return e[n]
            }

            function v(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = m(t, "top"),
                    r = m(t, "left"), o = n ? -1 : 1;
                return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
            }

            function y(e, t) {
                var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
            }

            function b(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function _(e) {
                var t = e.body, n = e.documentElement, i = h(10) && getComputedStyle(n);
                return {height: b("Height", t, n, i), width: b("Width", t, n, i)}
            }

            var w = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, x = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(), E = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }, C = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };

            function T(e) {
                return C({}, e, {right: e.left + e.width, bottom: e.top + e.height})
            }

            function S(e) {
                var t = {};
                try {
                    if (h(10)) {
                        t = e.getBoundingClientRect();
                        var n = m(e, "top"), i = m(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {
                }
                var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                    o = "HTML" === e.nodeName ? _(e.ownerDocument) : {}, a = o.width || e.clientWidth || r.width,
                    l = o.height || e.clientHeight || r.height, c = e.offsetWidth - a, u = e.offsetHeight - l;
                if (c || u) {
                    var d = s(e);
                    c -= y(d, "x"), u -= y(d, "y"), r.width -= c, r.height -= u
                }
                return T(r)
            }

            function A(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = h(10),
                    r = "HTML" === t.nodeName, o = S(e), a = S(t), c = l(e), u = s(t), d = parseFloat(u.borderTopWidth),
                    f = parseFloat(u.borderLeftWidth);
                n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = T({top: o.top - a.top - d, left: o.left - a.left - f, width: o.width, height: o.height});
                if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                    var g = parseFloat(u.marginTop), m = parseFloat(u.marginLeft);
                    p.top -= d - g, p.bottom -= d - g, p.left -= f - m, p.right -= f - m, p.marginTop = g, p.marginLeft = m
                }
                return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = v(p, t)), p
            }

            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement, i = A(e, n),
                    r = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : m(n), a = t ? 0 : m(n, "left"),
                    l = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o};
                return T(l)
            }

            function k(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t) return !1;
                if ("fixed" === s(e, "position")) return !0;
                var n = a(e);
                return !!n && k(n)
            }

            function N(e) {
                if (!e || !e.parentElement || h()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function O(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                    s = r ? N(e) : g(e, c(t));
                if ("viewport" === i) o = D(s, r); else {
                    var u = void 0;
                    "scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;
                    var d = A(u, s, r);
                    if ("HTML" !== u.nodeName || k(s)) o = d; else {
                        var h = _(e.ownerDocument), f = h.height, p = h.width;
                        o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = p + d.left
                    }
                }
                var m = "number" == typeof (n = n || 0);
                return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o
            }

            function $(e) {
                return e.width * e.height
            }

            function j(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = O(n, i, o, r), a = {
                    top: {width: s.width, height: t.top - s.top},
                    right: {width: s.right - t.right, height: s.height},
                    bottom: {width: s.width, height: s.bottom - t.bottom},
                    left: {width: t.left - s.left, height: s.height}
                }, l = Object.keys(a).map((function (e) {
                    return C({key: e}, a[e], {area: $(a[e])})
                })).sort((function (e, t) {
                    return t.area - e.area
                })), c = l.filter((function (e) {
                    var t = e.width, i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                })), u = c.length > 0 ? c[0].key : l[0].key, d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function L(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = i ? N(t) : g(t, c(n));
                return A(n, r, i)
            }

            function I(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {width: e.offsetWidth + i, height: e.offsetHeight + n}
            }

            function q(e) {
                var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
                return e.replace(/left|right|bottom|top/g, (function (e) {
                    return t[e]
                }))
            }

            function P(e, t, n) {
                n = n.split("-")[0];
                var i = I(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
                    s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width",
                    c = o ? "width" : "height";
                return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[q(a)], r
            }

            function R(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function H(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function (e) {
                        return e[t] === n
                    }));
                    var i = R(e, (function (e) {
                        return e[t] === n
                    }));
                    return e.indexOf(i)
                }(e, "name", n))).forEach((function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && o(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
                })), t
            }

            function M() {
                if (!this.state.isDestroyed) {
                    var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                    e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function F(e, t) {
                return e.some((function (e) {
                    var n = e.name;
                    return e.enabled && n === t
                }))
            }

            function B(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var r = t[i], o = r ? "" + r + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function W() {
                return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function U(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function z(e, t, n, i) {
                n.updateBound = i, U(e).addEventListener("resize", n.updateBound, {passive: !0});
                var r = l(e);
                return function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, {passive: !0}), o || e(l(s.parentNode), n, i, r), r.push(s)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function V() {
                this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function Y() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, U(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function Q(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function G(e, t) {
                Object.keys(t).forEach((function (n) {
                    var i = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Q(t[n]) && (i = "px"), e.style[n] = t[n] + i
                }))
            }

            var K = n && /Firefox/i.test(navigator.userAgent);

            function X(e, t, n) {
                var i = R(e, (function (e) {
                    return e.name === t
                })), r = !!i && e.some((function (e) {
                    return e.name === n && e.enabled && e.order < i.order
                }));
                if (!r) {
                    var o = "`" + t + "`", s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }

            var Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                J = Z.slice(3);

            function ee(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = J.indexOf(e),
                    i = J.slice(n + 1).concat(J.slice(0, n));
                return t ? i.reverse() : i
            }

            var te = "flip", ne = "clockwise", ie = "counterclockwise";

            function re(e, t, n, i) {
                var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), s = e.split(/(\+|\-)/).map((function (e) {
                    return e.trim()
                })), a = s.indexOf(R(s, (function (e) {
                    return -1 !== e.search(/,|\s/)
                })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (c = c.map((function (e, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width", s = !1;
                    return e.reduce((function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }), []).map((function (e) {
                        return function (e, t, n, i) {
                            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                            if (!o) return e;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case"%p":
                                        a = n;
                                        break;
                                    case"%":
                                    case"%r":
                                    default:
                                        a = i
                                }
                                return T(a)[t] / 100 * o
                            }
                            if ("vh" === s || "vw" === s) {
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                            }
                            return o
                        }(e, r, t, n)
                    }))
                }))).forEach((function (e, t) {
                    e.forEach((function (n, i) {
                        Q(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    }))
                })), r
            }

            var oe = {
                placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
                }, onUpdate: function () {
                }, modifiers: {
                    shift: {
                        order: 100, enabled: !0, fn: function (e) {
                            var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                            if (i) {
                                var r = e.offsets, o = r.reference, s = r.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n), l = a ? "left" : "top",
                                    c = a ? "width" : "height",
                                    u = {start: E({}, l, o[l]), end: E({}, l, o[l] + o[c] - s[c])};
                                e.offsets.popper = C({}, s, u[i])
                            }
                            return e
                        }
                    }, offset: {
                        order: 200, enabled: !0, fn: function (e, t) {
                            var n = t.offset, i = e.placement, r = e.offsets, o = r.popper, s = r.reference,
                                a = i.split("-")[0], l = void 0;
                            return l = Q(+n) ? [+n, 0] : re(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                        }, offset: 0
                    }, preventOverflow: {
                        order: 300, enabled: !0, fn: function (e, t) {
                            var n = t.boundariesElement || f(e.instance.popper);
                            e.instance.reference === n && (n = f(n));
                            var i = B("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[i];
                            r.top = "", r.left = "", r[i] = "";
                            var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                            var c = t.priority, u = e.offsets.popper, d = {
                                primary: function (e) {
                                    var n = u[e];
                                    return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), E({}, e, n)
                                }, secondary: function (e) {
                                    var n = "right" === e ? "left" : "top", i = u[n];
                                    return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), E({}, n, i)
                                }
                            };
                            return c.forEach((function (e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                u = C({}, u, d[t](e))
                            })), e.offsets.popper = u, e
                        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                    }, keepTogether: {
                        order: 400, enabled: !0, fn: function (e) {
                            var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0],
                                o = Math.floor, s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom",
                                l = s ? "left" : "top", c = s ? "width" : "height";
                            return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                        }
                    }, arrow: {
                        order: 500, enabled: !0, fn: function (e, t) {
                            var n;
                            if (!X(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e
                            } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var r = e.placement.split("-")[0], o = e.offsets, a = o.popper, l = o.reference,
                                c = -1 !== ["left", "right"].indexOf(r), u = c ? "height" : "width",
                                d = c ? "Top" : "Left", h = d.toLowerCase(), f = c ? "left" : "top",
                                p = c ? "bottom" : "right", g = I(i)[u];
                            l[p] - g < a[h] && (e.offsets.popper[h] -= a[h] - (l[p] - g)), l[h] + g > a[p] && (e.offsets.popper[h] += l[h] + g - a[p]), e.offsets.popper = T(e.offsets.popper);
                            var m = l[h] + l[u] / 2 - g / 2, v = s(e.instance.popper), y = parseFloat(v["margin" + d]),
                                b = parseFloat(v["border" + d + "Width"]), _ = m - e.offsets.popper[h] - y - b;
                            return _ = Math.max(Math.min(a[u] - g, _), 0), e.arrowElement = i, e.offsets.arrow = (E(n = {}, h, Math.round(_)), E(n, f, ""), n), e
                        }, element: "[x-arrow]"
                    }, flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (F(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                i = e.placement.split("-")[0], r = q(i), o = e.placement.split("-")[1] || "", s = [];
                            switch (t.behavior) {
                                case te:
                                    s = [i, r];
                                    break;
                                case ne:
                                    s = ee(i);
                                    break;
                                case ie:
                                    s = ee(i, !0);
                                    break;
                                default:
                                    s = t.behavior
                            }
                            return s.forEach((function (a, l) {
                                if (i !== a || s.length === l + 1) return e;
                                i = e.placement.split("-")[0], r = q(i);
                                var c = e.offsets.popper, u = e.offsets.reference, d = Math.floor,
                                    h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                    f = d(c.left) < d(n.left), p = d(c.right) > d(n.right), g = d(c.top) < d(n.top),
                                    m = d(c.bottom) > d(n.bottom),
                                    v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                    y = -1 !== ["top", "bottom"].indexOf(i),
                                    b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                    _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && f || !y && "start" === o && m || !y && "end" === o && g),
                                    w = b || _;
                                (h || v || w) && (e.flipped = !0, (h || v) && (i = s[l + 1]), w && (o = function (e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = H(e.instance.modifiers, e, "flip"))
                            })), e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    }, inner: {
                        order: 700, enabled: !1, fn: function (e) {
                            var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                                s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                            return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = q(t), e.offsets.popper = T(r), e
                        }
                    }, hide: {
                        order: 800, enabled: !0, fn: function (e) {
                            if (!X(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference, n = R(e.instance.modifiers, (function (e) {
                                return "preventOverflow" === e.name
                            })).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    }, computeStyle: {
                        order: 850, enabled: !0, fn: function (e, t) {
                            var n = t.x, i = t.y, r = e.offsets.popper, o = R(e.instance.modifiers, (function (e) {
                                return "applyStyle" === e.name
                            })).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== o ? o : t.gpuAcceleration, a = f(e.instance.popper), l = S(a),
                                c = {position: r.position}, u = function (e, t) {
                                    var n = e.offsets, i = n.popper, r = n.reference, o = Math.round, s = Math.floor,
                                        a = function (e) {
                                            return e
                                        }, l = o(r.width), c = o(i.width),
                                        u = -1 !== ["left", "right"].indexOf(e.placement),
                                        d = -1 !== e.placement.indexOf("-"), h = t ? u || d || l % 2 == c % 2 ? o : s : a,
                                        f = t ? o : a;
                                    return {
                                        left: h(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left),
                                        top: f(i.top),
                                        bottom: f(i.bottom),
                                        right: h(i.right)
                                    }
                                }(e, window.devicePixelRatio < 2 || !K), d = "bottom" === n ? "top" : "bottom",
                                h = "right" === i ? "left" : "right", p = B("transform"), g = void 0, m = void 0;
                            if (m = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + g + "px, " + m + "px, 0)", c[d] = 0, c[h] = 0, c.willChange = "transform"; else {
                                var v = "bottom" === d ? -1 : 1, y = "right" === h ? -1 : 1;
                                c[d] = m * v, c[h] = g * y, c.willChange = d + ", " + h
                            }
                            var b = {"x-placement": e.placement};
                            return e.attributes = C({}, b, e.attributes), e.styles = C({}, c, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
                        }, gpuAcceleration: !0, x: "bottom", y: "right"
                    }, applyStyle: {
                        order: 900, enabled: !0, fn: function (e) {
                            var t, n;
                            return G(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            })), e.arrowElement && Object.keys(e.arrowStyles).length && G(e.arrowElement, e.arrowStyles), e
                        }, onLoad: function (e, t, n, i, r) {
                            var o = L(r, t, e, n.positionFixed),
                                s = j(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", s), G(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                        }, gpuAcceleration: void 0
                    }
                }
            }, se = function () {
                function e(t, n) {
                    var i = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    w(this, e), this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update)
                    }, this.update = r(this.update.bind(this)), this.options = C({}, e.Defaults, s), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, s.modifiers)).forEach((function (t) {
                        i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                    })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                        return C({name: e}, i.options.modifiers[e])
                    })).sort((function (e, t) {
                        return e.order - t.order
                    })), this.modifiers.forEach((function (e) {
                        e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                    })), this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), this.state.eventsEnabled = a
                }

                return x(e, [{
                    key: "update", value: function () {
                        return M.call(this)
                    }
                }, {
                    key: "destroy", value: function () {
                        return W.call(this)
                    }
                }, {
                    key: "enableEventListeners", value: function () {
                        return V.call(this)
                    }
                }, {
                    key: "disableEventListeners", value: function () {
                        return Y.call(this)
                    }
                }]), e
            }();
            se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = Z, se.Defaults = oe, t.default = se
        }.call(this, n("yLpj"))
    }, C6pt: function (e, t, n) {
        (function (e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            /*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.8
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*
* NOTE: this is a modified version created for EasyAdmin theme. It removes some
* original code for features we don't want to be activated.
*/
            if (void 0 === e) throw new Error("AdminLTE requires jQuery");
            !function (e) {
                "use strict";
                var n = {animationSpeed: 500, accordion: !0, followLink: !1, trigger: ".treeview a"}, i = ".treeview",
                    r = ".treeview-menu", o = ".menu-open, .active", s = '[data-widget="tree"]', a = ".active",
                    l = "menu-open", c = "tree", u = "collapsed.tree", d = "expanded.tree", h = function (t, n) {
                        this.element = t, this.options = n, e(this.element).addClass(c), e(i + a, this.element).addClass(l), this._setUpListeners()
                    };

                function f(i) {
                    return this.each((function () {
                        var r = e(this);
                        if (!r.data("lte.tree")) {
                            var o = e.extend({}, n, r.data(), "object" == t(i) && i);
                            r.data("lte.tree", new h(r, o))
                        }
                    }))
                }

                h.prototype.toggle = function (e, t) {
                    var n = e.next(r), o = e.parent(), s = o.hasClass(l);
                    o.is(i) && (this.options.followLink && "#" !== e.attr("href") || t.preventDefault(), s ? this.collapse(n, o) : this.expand(n, o))
                }, h.prototype.expand = function (t, n) {
                    var i = e.Event(d);
                    if (this.options.accordion) {
                        var s = n.siblings(o), a = s.children(r);
                        this.collapse(a, s)
                    }
                    n.addClass(l), t.slideDown(this.options.animationSpeed, function () {
                        e(this.element).trigger(i)
                    }.bind(this))
                }, h.prototype.collapse = function (t, n) {
                    var i = e.Event(u);
                    n.removeClass(l), t.slideUp(this.options.animationSpeed, function () {
                        e(this.element).trigger(i)
                    }.bind(this))
                }, h.prototype._setUpListeners = function () {
                    var t = this;
                    e(this.element).on("click", this.options.trigger, (function (n) {
                        t.toggle(e(this), n)
                    }))
                };
                var p = e.fn.tree;
                e.fn.tree = f, e.fn.tree.Constructor = h, e.fn.tree.noConflict = function () {
                    return e.fn.tree = p, this
                }, e(window).on("load", (function () {
                    e(s).each((function () {
                        f.call(e(this))
                    }))
                }))
            }(e)
        }).call(this, n("EVdn"))
    }, DjPg: function (e, t, n) {
        (function (i) {
            var r, o, s;
            o = [n("EVdn")], void 0 === (s = "function" == typeof (r = function (e) {
                var t = function () {
                    if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
                    return function () {
                        /**
                         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                         */
                        var e, n, i;
                        t && t.requirejs || (t ? n = t : t = {}, function (t) {
                            var r, o, s, a, l = {}, c = {}, u = {}, d = {}, h = Object.prototype.hasOwnProperty,
                                f = [].slice, p = /\.js$/;

                            function g(e, t) {
                                return h.call(e, t)
                            }

                            function m(e, t) {
                                var n, i, r, o, s, a, l, c, d, h, f, g = t && t.split("/"), m = u.map,
                                    v = m && m["*"] || {};
                                if (e) {
                                    for (s = (e = e.split("/")).length - 1, u.nodeIdCompat && p.test(e[s]) && (e[s] = e[s].replace(p, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), d = 0; d < e.length; d++) if ("." === (f = e[d])) e.splice(d, 1), d -= 1; else if (".." === f) {
                                        if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                                        d > 0 && (e.splice(d - 1, 2), d -= 2)
                                    }
                                    e = e.join("/")
                                }
                                if ((g || v) && m) {
                                    for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                                        if (i = n.slice(0, d).join("/"), g) for (h = g.length; h > 0; h -= 1) if ((r = m[g.slice(0, h).join("/")]) && (r = r[i])) {
                                            o = r, a = d;
                                            break
                                        }
                                        if (o) break;
                                        !l && v && v[i] && (l = v[i], c = d)
                                    }
                                    !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                                }
                                return e
                            }

                            function v(e, t) {
                                return function () {
                                    var n = f.call(arguments, 0);
                                    return "string" != typeof n[0] && 1 === n.length && n.push(null), o.apply(void 0, n.concat([e, t]))
                                }
                            }

                            function y(e) {
                                return function (t) {
                                    l[e] = t
                                }
                            }

                            function b(e) {
                                if (g(c, e)) {
                                    var t = c[e];
                                    delete c[e], d[e] = !0, r.apply(void 0, t)
                                }
                                if (!g(l, e) && !g(d, e)) throw new Error("No " + e);
                                return l[e]
                            }

                            function _(e) {
                                var t, n = e ? e.indexOf("!") : -1;
                                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                            }

                            function w(e) {
                                return e ? _(e) : []
                            }

                            function x(e) {
                                return function () {
                                    return u && u.config && u.config[e] || {}
                                }
                            }

                            s = function (e, t) {
                                var n, i, r = _(e), o = r[0], s = t[1];
                                return e = r[1], o && (n = b(o = m(o, s))), o ? e = n && n.normalize ? n.normalize(e, (i = s, function (e) {
                                    return m(e, i)
                                })) : m(e, s) : (o = (r = _(e = m(e, s)))[0], e = r[1], o && (n = b(o))), {
                                    f: o ? o + "!" + e : e,
                                    n: e,
                                    pr: o,
                                    p: n
                                }
                            }, a = {
                                require: function (e) {
                                    return v(e)
                                }, exports: function (e) {
                                    var t = l[e];
                                    return void 0 !== t ? t : l[e] = {}
                                }, module: function (e) {
                                    return {id: e, uri: "", exports: l[e], config: x(e)}
                                }
                            }, r = function (e, t, n, i) {
                                var r, o, u, h, f, p, m, _ = [], x = typeof n;
                                if (p = w(i = i || e), "undefined" === x || "function" === x) {
                                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1) if ("require" === (o = (h = s(t[f], p)).f)) _[f] = a.require(e); else if ("exports" === o) _[f] = a.exports(e), m = !0; else if ("module" === o) r = _[f] = a.module(e); else if (g(l, o) || g(c, o) || g(d, o)) _[f] = b(o); else {
                                        if (!h.p) throw new Error(e + " missing " + o);
                                        h.p.load(h.n, v(i, !0), y(o), {}), _[f] = l[o]
                                    }
                                    u = n ? n.apply(l[e], _) : void 0, e && (r && void 0 !== r.exports && r.exports !== l[e] ? l[e] = r.exports : void 0 === u && m || (l[e] = u))
                                } else e && (l[e] = n)
                            }, e = n = o = function (e, t, n, i, l) {
                                if ("string" == typeof e) return a[e] ? a[e](t) : b(s(e, w(t)).f);
                                if (!e.splice) {
                                    if ((u = e).deps && o(u.deps, u.callback), !t) return;
                                    t.splice ? (e = t, t = n, n = null) : e = void 0
                                }
                                return t = t || function () {
                                }, "function" == typeof n && (n = i, i = l), i ? r(void 0, e, t, n) : setTimeout((function () {
                                    r(void 0, e, t, n)
                                }), 4), o
                            }, o.config = function (e) {
                                return o(e)
                            }, e._defined = l, (i = function (e, t, n) {
                                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), g(l, e) || g(c, e) || (c[e] = [e, t, n])
                            }).amd = {jQuery: !0}
                        }(), t.requirejs = e, t.require = n, t.define = i)
                    }(), t.define("almond", (function () {
                    })), t.define("jquery", [], (function () {
                        var t = e || i;
                        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                    })), t.define("select2/utils", ["jquery"], (function (e) {
                        var t = {};

                        function n(e) {
                            var t = e.prototype, n = [];
                            for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                            return n
                        }

                        t.Extend = function (e, t) {
                            var n = {}.hasOwnProperty;

                            function i() {
                                this.constructor = e
                            }

                            for (var r in t) n.call(t, r) && (e[r] = t[r]);
                            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                        }, t.Decorate = function (e, t) {
                            var i = n(t), r = n(e);

                            function o() {
                                var n = Array.prototype.unshift, i = t.prototype.constructor.length,
                                    r = e.prototype.constructor;
                                i > 0 && (n.call(arguments, e.prototype.constructor), r = t.prototype.constructor), r.apply(this, arguments)
                            }

                            t.displayName = e.displayName, o.prototype = new function () {
                                this.constructor = o
                            };
                            for (var s = 0; s < r.length; s++) {
                                var a = r[s];
                                o.prototype[a] = e.prototype[a]
                            }
                            for (var l = function (e) {
                                var n = function () {
                                };
                                e in o.prototype && (n = o.prototype[e]);
                                var i = t.prototype[e];
                                return function () {
                                    var e = Array.prototype.unshift;
                                    return e.call(arguments, n), i.apply(this, arguments)
                                }
                            }, c = 0; c < i.length; c++) {
                                var u = i[c];
                                o.prototype[u] = l(u)
                            }
                            return o
                        };
                        var i = function () {
                            this.listeners = {}
                        };
                        i.prototype.on = function (e, t) {
                            this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                        }, i.prototype.trigger = function (e) {
                            var t = Array.prototype.slice, n = t.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, i.prototype.invoke = function (e, t) {
                            for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                        }, t.Observable = i, t.generateChars = function (e) {
                            for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                            return t
                        }, t.bind = function (e, t) {
                            return function () {
                                e.apply(t, arguments)
                            }
                        }, t._convertData = function (e) {
                            for (var t in e) {
                                var n = t.split("-"), i = e;
                                if (1 !== n.length) {
                                    for (var r = 0; r < n.length; r++) {
                                        var o = n[r];
                                        (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                                    }
                                    delete e[t]
                                }
                            }
                            return e
                        }, t.hasScroll = function (t, n) {
                            var i = e(n), r = n.style.overflowX, o = n.style.overflowY;
                            return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                        }, t.escapeMarkup = function (e) {
                            var t = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function (e) {
                                return t[e]
                            }))
                        }, t.appendMany = function (t, n) {
                            if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                var i = e();
                                e.map(n, (function (e) {
                                    i = i.add(e)
                                })), n = i
                            }
                            t.append(n)
                        }, t.__cache = {};
                        var r = 0;
                        return t.GetUniqueElementId = function (e) {
                            var t = e.getAttribute("data-select2-id");
                            return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), t = r.toString())), t
                        }, t.StoreData = function (e, n, i) {
                            var r = t.GetUniqueElementId(e);
                            t.__cache[r] || (t.__cache[r] = {}), t.__cache[r][n] = i
                        }, t.GetData = function (n, i) {
                            var r = t.GetUniqueElementId(n);
                            return i ? t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i) : t.__cache[r]
                        }, t.RemoveData = function (e) {
                            var n = t.GetUniqueElementId(e);
                            null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id")
                        }, t
                    })), t.define("select2/results", ["jquery", "./utils"], (function (e, t) {
                        function n(e, t, i) {
                            this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                        }

                        return t.Extend(n, t.Observable), n.prototype.render = function () {
                            var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                        }, n.prototype.clear = function () {
                            this.$results.empty()
                        }, n.prototype.displayMessage = function (t) {
                            var n = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                                r = this.options.get("translations").get(t.message);
                            i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                        }, n.prototype.hideMessages = function () {
                            this.$results.find(".select2-results__message").remove()
                        }, n.prototype.append = function (e) {
                            this.hideLoading();
                            var t = [];
                            if (null != e.results && 0 !== e.results.length) {
                                e.results = this.sort(e.results);
                                for (var n = 0; n < e.results.length; n++) {
                                    var i = e.results[n], r = this.option(i);
                                    t.push(r)
                                }
                                this.$results.append(t)
                            } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
                        }, n.prototype.position = function (e, t) {
                            t.find(".select2-results").append(e)
                        }, n.prototype.sort = function (e) {
                            return this.options.get("sorter")(e)
                        }, n.prototype.highlightFirstItem = function () {
                            var e = this.$results.find(".select2-results__option[aria-selected]"),
                                t = e.filter("[aria-selected=true]");
                            t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, n.prototype.setClasses = function () {
                            var n = this;
                            this.data.current((function (i) {
                                var r = e.map(i, (function (e) {
                                    return e.id.toString()
                                }));
                                n.$results.find(".select2-results__option[aria-selected]").each((function () {
                                    var n = e(this), i = t.GetData(this, "data"), o = "" + i.id;
                                    null != i.element && i.element.selected || null == i.element && e.inArray(o, r) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                                }))
                            }))
                        }, n.prototype.showLoading = function (e) {
                            this.hideLoading();
                            var t = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(e)
                            }, n = this.option(t);
                            n.className += " loading-results", this.$results.prepend(n)
                        }, n.prototype.hideLoading = function () {
                            this.$results.find(".loading-results").remove()
                        }, n.prototype.option = function (n) {
                            var i = document.createElement("li");
                            i.className = "select2-results__option";
                            var r = {role: "option", "aria-selected": "false"},
                                o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                            for (var s in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r) {
                                var a = r[s];
                                i.setAttribute(s, a)
                            }
                            if (n.children) {
                                var l = e(i), c = document.createElement("strong");
                                c.className = "select2-results__group", e(c), this.template(n, c);
                                for (var u = [], d = 0; d < n.children.length; d++) {
                                    var h = n.children[d], f = this.option(h);
                                    u.push(f)
                                }
                                var p = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                                p.append(u), l.append(c), l.append(p)
                            } else this.template(n, i);
                            return t.StoreData(i, "data", n), i
                        }, n.prototype.bind = function (n, i) {
                            var r = this, o = n.id + "-results";
                            this.$results.attr("id", o), n.on("results:all", (function (e) {
                                r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem())
                            })), n.on("results:append", (function (e) {
                                r.append(e.data), n.isOpen() && r.setClasses()
                            })), n.on("query", (function (e) {
                                r.hideMessages(), r.showLoading(e)
                            })), n.on("select", (function () {
                                n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                            })), n.on("unselect", (function () {
                                n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                            })), n.on("open", (function () {
                                r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
                            })), n.on("close", (function () {
                                r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
                            })), n.on("results:toggle", (function () {
                                var e = r.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup")
                            })), n.on("results:select", (function () {
                                var e = r.getHighlightedResults();
                                if (0 !== e.length) {
                                    var n = t.GetData(e[0], "data");
                                    "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", {data: n})
                                }
                            })), n.on("results:previous", (function () {
                                var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"),
                                    n = t.index(e);
                                if (!(n <= 0)) {
                                    var i = n - 1;
                                    0 === e.length && (i = 0);
                                    var o = t.eq(i);
                                    o.trigger("mouseenter");
                                    var s = r.$results.offset().top, a = o.offset().top,
                                        l = r.$results.scrollTop() + (a - s);
                                    0 === i ? r.$results.scrollTop(0) : a - s < 0 && r.$results.scrollTop(l)
                                }
                            })), n.on("results:next", (function () {
                                var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"),
                                    n = t.index(e) + 1;
                                if (!(n >= t.length)) {
                                    var i = t.eq(n);
                                    i.trigger("mouseenter");
                                    var o = r.$results.offset().top + r.$results.outerHeight(!1),
                                        s = i.offset().top + i.outerHeight(!1), a = r.$results.scrollTop() + s - o;
                                    0 === n ? r.$results.scrollTop(0) : s > o && r.$results.scrollTop(a)
                                }
                            })), n.on("results:focus", (function (e) {
                                e.element.addClass("select2-results__option--highlighted")
                            })), n.on("results:message", (function (e) {
                                r.displayMessage(e)
                            })), e.fn.mousewheel && this.$results.on("mousewheel", (function (e) {
                                var t = r.$results.scrollTop(), n = r.$results.get(0).scrollHeight - t + e.deltaY,
                                    i = e.deltaY > 0 && t - e.deltaY <= 0, o = e.deltaY < 0 && n <= r.$results.height();
                                i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
                            })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function (n) {
                                var i = e(this), o = t.GetData(this, "data");
                                "true" !== i.attr("aria-selected") ? r.trigger("select", {
                                    originalEvent: n,
                                    data: o
                                }) : r.options.get("multiple") ? r.trigger("unselect", {
                                    originalEvent: n,
                                    data: o
                                }) : r.trigger("close", {})
                            })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function (n) {
                                var i = t.GetData(this, "data");
                                r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
                                    data: i,
                                    element: e(this)
                                })
                            }))
                        }, n.prototype.getHighlightedResults = function () {
                            return this.$results.find(".select2-results__option--highlighted")
                        }, n.prototype.destroy = function () {
                            this.$results.remove()
                        }, n.prototype.ensureHighlightVisible = function () {
                            var e = this.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                                    i = e.offset().top, r = this.$results.scrollTop() + (i - n), o = i - n;
                                r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                            }
                        }, n.prototype.template = function (t, n) {
                            var i = this.options.get("templateResult"), r = this.options.get("escapeMarkup"),
                                o = i(t, n);
                            null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
                        }, n
                    })), t.define("select2/keys", [], (function () {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        }
                    })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function (e, t, n) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }

                        return t.Extend(i, t.Observable), i.prototype.render = function () {
                            var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n
                        }, i.prototype.bind = function (e, t) {
                            var i = this, r = e.id + "-results";
                            this.container = e, this.$selection.on("focus", (function (e) {
                                i.trigger("focus", e)
                            })), this.$selection.on("blur", (function (e) {
                                i._handleBlur(e)
                            })), this.$selection.on("keydown", (function (e) {
                                i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                            })), e.on("results:focus", (function (e) {
                                i.$selection.attr("aria-activedescendant", e.data._resultId)
                            })), e.on("selection:update", (function (e) {
                                i.update(e.data)
                            })), e.on("open", (function () {
                                i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
                            })), e.on("close", (function () {
                                i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e)
                            })), e.on("enable", (function () {
                                i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false")
                            })), e.on("disable", (function () {
                                i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true")
                            }))
                        }, i.prototype._handleBlur = function (t) {
                            var n = this;
                            window.setTimeout((function () {
                                document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                            }), 1)
                        }, i.prototype._attachCloseHandler = function (n) {
                            e(document.body).on("mousedown.select2." + n.id, (function (n) {
                                var i = e(n.target).closest(".select2");
                                e(".select2.select2-container--open").each((function () {
                                    this != i[0] && t.GetData(this, "element").select2("close")
                                }))
                            }))
                        }, i.prototype._detachCloseHandler = function (t) {
                            e(document.body).off("mousedown.select2." + t.id)
                        }, i.prototype.position = function (e, t) {
                            t.find(".selection").append(e)
                        }, i.prototype.destroy = function () {
                            this._detachCloseHandler(this.container)
                        }, i.prototype.update = function (e) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, i.prototype.isEnabled = function () {
                            return !this.isDisabled()
                        }, i.prototype.isDisabled = function () {
                            return this.options.get("disabled")
                        }, i
                    })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function (e, t, n, i) {
                        function r() {
                            r.__super__.constructor.apply(this, arguments)
                        }

                        return n.Extend(r, t), r.prototype.render = function () {
                            var e = r.__super__.render.call(this);
                            return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                        }, r.prototype.bind = function (e, t) {
                            var n = this;
                            r.__super__.bind.apply(this, arguments);
                            var i = e.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", (function (e) {
                                1 === e.which && n.trigger("toggle", {originalEvent: e})
                            })), this.$selection.on("focus", (function (e) {
                            })), this.$selection.on("blur", (function (e) {
                            })), e.on("focus", (function (t) {
                                e.isOpen() || n.$selection.trigger("focus")
                            }))
                        }, r.prototype.clear = function () {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(), e.removeAttr("title")
                        }, r.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }, r.prototype.selectionContainer = function () {
                            return e("<span></span>")
                        }, r.prototype.update = function (e) {
                            if (0 !== e.length) {
                                var t = e[0], n = this.$selection.find(".select2-selection__rendered"),
                                    i = this.display(t, n);
                                n.empty().append(i);
                                var r = t.title || t.text;
                                r ? n.attr("title", r) : n.removeAttr("title")
                            } else this.clear()
                        }, r
                    })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function (e, t, n) {
                        function i(e, t) {
                            i.__super__.constructor.apply(this, arguments)
                        }

                        return n.Extend(i, t), i.prototype.render = function () {
                            var e = i.__super__.render.call(this);
                            return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                        }, i.prototype.bind = function (t, r) {
                            var o = this;
                            i.__super__.bind.apply(this, arguments), this.$selection.on("click", (function (e) {
                                o.trigger("toggle", {originalEvent: e})
                            })), this.$selection.on("click", ".select2-selection__choice__remove", (function (t) {
                                if (!o.isDisabled()) {
                                    var i = e(this).parent(), r = n.GetData(i[0], "data");
                                    o.trigger("unselect", {originalEvent: t, data: r})
                                }
                            }))
                        }, i.prototype.clear = function () {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(), e.removeAttr("title")
                        }, i.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }, i.prototype.selectionContainer = function () {
                            return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                        }, i.prototype.update = function (e) {
                            if (this.clear(), 0 !== e.length) {
                                for (var t = [], i = 0; i < e.length; i++) {
                                    var r = e[i], o = this.selectionContainer(), s = this.display(r, o);
                                    o.append(s);
                                    var a = r.title || r.text;
                                    a && o.attr("title", a), n.StoreData(o[0], "data", r), t.push(o)
                                }
                                var l = this.$selection.find(".select2-selection__rendered");
                                n.appendMany(l, t)
                            }
                        }, i
                    })), t.define("select2/selection/placeholder", ["../utils"], (function (e) {
                        function t(e, t, n) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                        }

                        return t.prototype.normalizePlaceholder = function (e, t) {
                            return "string" == typeof t && (t = {id: "", text: t}), t
                        }, t.prototype.createPlaceholder = function (e, t) {
                            var n = this.selectionContainer();
                            return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                        }, t.prototype.update = function (e, t) {
                            var n = 1 == t.length && t[0].id != this.placeholder.id;
                            if (t.length > 1 || n) return e.call(this, t);
                            this.clear();
                            var i = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(i)
                        }, t
                    })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function (e, t, n) {
                        function i() {
                        }

                        return i.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function (e) {
                                i._handleClear(e)
                            })), t.on("keypress", (function (e) {
                                i._handleKeyboardClear(e, t)
                            }))
                        }, i.prototype._handleClear = function (e, t) {
                            if (!this.isDisabled()) {
                                var i = this.$selection.find(".select2-selection__clear");
                                if (0 !== i.length) {
                                    t.stopPropagation();
                                    var r = n.GetData(i[0], "data"), o = this.$element.val();
                                    this.$element.val(this.placeholder.id);
                                    var s = {data: r};
                                    if (this.trigger("clear", s), s.prevented) this.$element.val(o); else {
                                        for (var a = 0; a < r.length; a++) if (s = {data: r[a]}, this.trigger("unselect", s), s.prevented) return void this.$element.val(o);
                                        this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                                    }
                                }
                            }
                        }, i.prototype._handleKeyboardClear = function (e, n, i) {
                            i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                        }, i.prototype.update = function (t, i) {
                            if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                                var r = this.options.get("translations").get("removeAllItems"),
                                    o = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                                n.StoreData(o[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(o)
                            }
                        }, i
                    })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function (e, t, n) {
                        function i(e, t, n) {
                            e.call(this, t, n)
                        }

                        return i.prototype.render = function (t) {
                            var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = n, this.$search = n.find("input");
                            var i = t.call(this);
                            return this._transferTabIndex(), i
                        }, i.prototype.bind = function (e, i, r) {
                            var o = this, s = i.id + "-results";
                            e.call(this, i, r), i.on("open", (function () {
                                o.$search.attr("aria-controls", s), o.$search.trigger("focus")
                            })), i.on("close", (function () {
                                o.$search.val(""), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                            })), i.on("enable", (function () {
                                o.$search.prop("disabled", !1), o._transferTabIndex()
                            })), i.on("disable", (function () {
                                o.$search.prop("disabled", !0)
                            })), i.on("focus", (function (e) {
                                o.$search.trigger("focus")
                            })), i.on("results:focus", (function (e) {
                                e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                            })), this.$selection.on("focusin", ".select2-search--inline", (function (e) {
                                o.trigger("focus", e)
                            })), this.$selection.on("focusout", ".select2-search--inline", (function (e) {
                                o._handleBlur(e)
                            })), this.$selection.on("keydown", ".select2-search--inline", (function (e) {
                                if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
                                    var i = o.$searchContainer.prev(".select2-selection__choice");
                                    if (i.length > 0) {
                                        var r = t.GetData(i[0], "data");
                                        o.searchRemoveChoice(r), e.preventDefault()
                                    }
                                }
                            })), this.$selection.on("click", ".select2-search--inline", (function (e) {
                                o.$search.val() && e.stopPropagation()
                            }));
                            var a = document.documentMode, l = a && a <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", (function (e) {
                                l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                            })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function (e) {
                                if (l && "input" === e.type) o.$selection.off("input.search input.searchcheck"); else {
                                    var t = e.which;
                                    t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                                }
                            }))
                        }, i.prototype._transferTabIndex = function (e) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, i.prototype.createPlaceholder = function (e, t) {
                            this.$search.attr("placeholder", t.text)
                        }, i.prototype.update = function (e, t) {
                            var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
                        }, i.prototype.handleSearch = function () {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {term: e})
                            }
                            this._keyUpPrevented = !1
                        }, i.prototype.searchRemoveChoice = function (e, t) {
                            this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
                        }, i.prototype.resizeSearch = function () {
                            this.$search.css("width", "25px");
                            var e = "";
                            e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                        }, i
                    })), t.define("select2/selection/eventRelay", ["jquery"], (function (e) {
                        function t() {
                        }

                        return t.prototype.bind = function (t, n, i) {
                            var r = this,
                                o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                            t.call(this, n, i), n.on("*", (function (t, n) {
                                if (-1 !== e.inArray(t, o)) {
                                    n = n || {};
                                    var i = e.Event("select2:" + t, {params: n});
                                    r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                                }
                            }))
                        }, t
                    })), t.define("select2/translation", ["jquery", "require"], (function (e, t) {
                        function n(e) {
                            this.dict = e || {}
                        }

                        return n.prototype.all = function () {
                            return this.dict
                        }, n.prototype.get = function (e) {
                            return this.dict[e]
                        }, n.prototype.extend = function (t) {
                            this.dict = e.extend({}, t.all(), this.dict)
                        }, n._cache = {}, n.loadPath = function (e) {
                            if (!(e in n._cache)) {
                                var i = t(e);
                                n._cache[e] = i
                            }
                            return new n(n._cache[e])
                        }, n
                    })), t.define("select2/diacritics", [], (function () {
                        return {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Œ": "OE",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "œ": "oe",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ώ": "ω",
                            "ς": "σ",
                            "’": "'"
                        }
                    })), t.define("select2/data/base", ["../utils"], (function (e) {
                        function t(e, n) {
                            t.__super__.constructor.call(this)
                        }

                        return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, t.prototype.query = function (e, t) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, t.prototype.bind = function (e, t) {
                        }, t.prototype.destroy = function () {
                        }, t.prototype.generateResultId = function (t, n) {
                            var i = t.id + "-result-";
                            return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
                        }, t
                    })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function (e, t, n) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }

                        return t.Extend(i, e), i.prototype.current = function (e) {
                            var t = [], i = this;
                            this.$element.find(":selected").each((function () {
                                var e = n(this), r = i.item(e);
                                t.push(r)
                            })), e(t)
                        }, i.prototype.select = function (e) {
                            var t = this;
                            if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
                            if (this.$element.prop("multiple")) this.current((function (i) {
                                var r = [];
                                (e = [e]).push.apply(e, i);
                                for (var o = 0; o < e.length; o++) {
                                    var s = e[o].id;
                                    -1 === n.inArray(s, r) && r.push(s)
                                }
                                t.$element.val(r), t.$element.trigger("input").trigger("change")
                            })); else {
                                var i = e.id;
                                this.$element.val(i), this.$element.trigger("input").trigger("change")
                            }
                        }, i.prototype.unselect = function (e) {
                            var t = this;
                            if (this.$element.prop("multiple")) {
                                if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
                                this.current((function (i) {
                                    for (var r = [], o = 0; o < i.length; o++) {
                                        var s = i[o].id;
                                        s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                                    }
                                    t.$element.val(r), t.$element.trigger("input").trigger("change")
                                }))
                            }
                        }, i.prototype.bind = function (e, t) {
                            var n = this;
                            this.container = e, e.on("select", (function (e) {
                                n.select(e.data)
                            })), e.on("unselect", (function (e) {
                                n.unselect(e.data)
                            }))
                        }, i.prototype.destroy = function () {
                            this.$element.find("*").each((function () {
                                t.RemoveData(this)
                            }))
                        }, i.prototype.query = function (e, t) {
                            var i = [], r = this;
                            this.$element.children().each((function () {
                                var t = n(this);
                                if (t.is("option") || t.is("optgroup")) {
                                    var o = r.item(t), s = r.matches(e, o);
                                    null !== s && i.push(s)
                                }
                            })), t({results: i})
                        }, i.prototype.addOptions = function (e) {
                            t.appendMany(this.$element, e)
                        }, i.prototype.option = function (e) {
                            var i;
                            e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                            var r = n(i), o = this._normalizeItem(e);
                            return o.element = i, t.StoreData(i, "data", o), r
                        }, i.prototype.item = function (e) {
                            var i = {};
                            if (null != (i = t.GetData(e[0], "data"))) return i;
                            if (e.is("option")) i = {
                                id: e.val(),
                                text: e.text(),
                                disabled: e.prop("disabled"),
                                selected: e.prop("selected"),
                                title: e.prop("title")
                            }; else if (e.is("optgroup")) {
                                i = {text: e.prop("label"), children: [], title: e.prop("title")};
                                for (var r = e.children("option"), o = [], s = 0; s < r.length; s++) {
                                    var a = n(r[s]), l = this.item(a);
                                    o.push(l)
                                }
                                i.children = o
                            }
                            return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
                        }, i.prototype._normalizeItem = function (e) {
                            return e !== Object(e) && (e = {
                                id: e,
                                text: e
                            }), null != (e = n.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                                selected: !1,
                                disabled: !1
                            }, e)
                        }, i.prototype.matches = function (e, t) {
                            return this.options.get("matcher")(e, t)
                        }, i
                    })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function (e, t, n) {
                        function i(e, t) {
                            this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t)
                        }

                        return t.Extend(i, e), i.prototype.bind = function (e, t) {
                            i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
                        }, i.prototype.select = function (e) {
                            var t = this.$element.find("option").filter((function (t, n) {
                                return n.value == e.id.toString()
                            }));
                            0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                        }, i.prototype.convertToOptions = function (e) {
                            var i = this, r = this.$element.find("option"), o = r.map((function () {
                                return i.item(n(this)).id
                            })).get(), s = [];

                            function a(e) {
                                return function () {
                                    return n(this).val() == e.id
                                }
                            }

                            for (var l = 0; l < e.length; l++) {
                                var c = this._normalizeItem(e[l]);
                                if (n.inArray(c.id, o) >= 0) {
                                    var u = r.filter(a(c)), d = this.item(u), h = n.extend(!0, {}, c, d),
                                        f = this.option(h);
                                    u.replaceWith(f)
                                } else {
                                    var p = this.option(c);
                                    if (c.children) {
                                        var g = this.convertToOptions(c.children);
                                        t.appendMany(p, g)
                                    }
                                    s.push(p)
                                }
                            }
                            return s
                        }, i
                    })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function (e, t, n) {
                        function i(e, t) {
                            this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                        }

                        return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                            var t = {
                                data: function (e) {
                                    return n.extend({}, e, {q: e.term})
                                }, transport: function (e, t, i) {
                                    var r = n.ajax(e);
                                    return r.then(t), r.fail(i), r
                                }
                            };
                            return n.extend({}, t, e, !0)
                        }, i.prototype.processResults = function (e) {
                            return e
                        }, i.prototype.query = function (e, t) {
                            var i = this;
                            null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var r = n.extend({type: "GET"}, this.ajaxOptions);

                            function o() {
                                var o = r.transport(r, (function (r) {
                                    var o = i.processResults(r, e);
                                    i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                                }), (function () {
                                    (!("status" in o) || 0 !== o.status && "0" !== o.status) && i.trigger("results:message", {message: "errorLoading"})
                                }));
                                i._request = o
                            }

                            "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
                        }, i
                    })), t.define("select2/data/tags", ["jquery"], (function (e) {
                        function t(t, n, i) {
                            var r = i.get("tags"), o = i.get("createTag");
                            void 0 !== o && (this.createTag = o);
                            var s = i.get("insertTag");
                            if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r)) for (var a = 0; a < r.length; a++) {
                                var l = r[a], c = this._normalizeItem(l), u = this.option(c);
                                this.$element.append(u)
                            }
                        }

                        return t.prototype.query = function (e, t, n) {
                            var i = this;
                            this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(r, o) {
                                for (var s = r.results, a = 0; a < s.length; a++) {
                                    var l = s[a], c = null != l.children && !e({results: l.children}, !0);
                                    if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !o && (r.data = s, void n(r))
                                }
                                if (o) return !0;
                                var u = i.createTag(t);
                                if (null != u) {
                                    var d = i.option(u);
                                    d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(s, u)
                                }
                                r.results = s, n(r)
                            })) : e.call(this, t, n)
                        }, t.prototype.createTag = function (t, n) {
                            var i = e.trim(n.term);
                            return "" === i ? null : {id: i, text: i}
                        }, t.prototype.insertTag = function (e, t, n) {
                            t.unshift(n)
                        }, t.prototype._removeOldTags = function (t) {
                            this.$element.find("option[data-select2-tag]").each((function () {
                                this.selected || e(this).remove()
                            }))
                        }, t
                    })), t.define("select2/data/tokenizer", ["jquery"], (function (e) {
                        function t(e, t, n) {
                            var i = n.get("tokenizer");
                            void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                        }

                        return t.prototype.bind = function (e, t, n) {
                            e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                        }, t.prototype.query = function (t, n, i) {
                            var r = this;
                            n.term = n.term || "";
                            var o = this.tokenizer(n, this.options, (function (t) {
                                var n = r._normalizeItem(t);
                                if (!r.$element.find("option").filter((function () {
                                    return e(this).val() === n.id
                                })).length) {
                                    var i = r.option(n);
                                    i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i])
                                }
                                !function (e) {
                                    r.trigger("select", {data: e})
                                }(n)
                            }));
                            o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), n.term = o.term), t.call(this, n, i)
                        }, t.prototype.tokenizer = function (t, n, i, r) {
                            for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                                return {id: e.term, text: e.term}
                            }; a < s.length;) {
                                var c = s[a];
                                if (-1 !== e.inArray(c, o)) {
                                    var u = s.substr(0, a), d = l(e.extend({}, n, {term: u}));
                                    null != d ? (r(d), s = s.substr(a + 1) || "", a = 0) : a++
                                } else a++
                            }
                            return {term: s}
                        }, t
                    })), t.define("select2/data/minimumInputLength", [], (function () {
                        function e(e, t, n) {
                            this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                        }

                        return e.prototype.query = function (e, t, n) {
                            t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {minimum: this.minimumInputLength, input: t.term, params: t}
                            }) : e.call(this, t, n)
                        }, e
                    })), t.define("select2/data/maximumInputLength", [], (function () {
                        function e(e, t, n) {
                            this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                        }

                        return e.prototype.query = function (e, t, n) {
                            t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {maximum: this.maximumInputLength, input: t.term, params: t}
                            }) : e.call(this, t, n)
                        }, e
                    })), t.define("select2/data/maximumSelectionLength", [], (function () {
                        function e(e, t, n) {
                            this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                        }

                        return e.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("select", (function () {
                                i._checkIfMaximumSelected()
                            }))
                        }, e.prototype.query = function (e, t, n) {
                            var i = this;
                            this._checkIfMaximumSelected((function () {
                                e.call(i, t, n)
                            }))
                        }, e.prototype._checkIfMaximumSelected = function (e, t) {
                            var n = this;
                            this.current((function (e) {
                                var i = null != e ? e.length : 0;
                                n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {maximum: n.maximumSelectionLength}
                                }) : t && t()
                            }))
                        }, e
                    })), t.define("select2/dropdown", ["jquery", "./utils"], (function (e, t) {
                        function n(e, t) {
                            this.$element = e, this.options = t, n.__super__.constructor.call(this)
                        }

                        return t.Extend(n, t.Observable), n.prototype.render = function () {
                            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                        }, n.prototype.bind = function () {
                        }, n.prototype.position = function (e, t) {
                        }, n.prototype.destroy = function () {
                            this.$dropdown.remove()
                        }, n
                    })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function (e, t) {
                        function n() {
                        }

                        return n.prototype.render = function (t) {
                            var n = t.call(this),
                                i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                            return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                        }, n.prototype.bind = function (t, n, i) {
                            var r = this, o = n.id + "-results";
                            t.call(this, n, i), this.$search.on("keydown", (function (e) {
                                r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                            })), this.$search.on("input", (function (t) {
                                e(this).off("keyup")
                            })), this.$search.on("keyup input", (function (e) {
                                r.handleSearch(e)
                            })), n.on("open", (function () {
                                r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", o), r.$search.trigger("focus"), window.setTimeout((function () {
                                    r.$search.trigger("focus")
                                }), 0)
                            })), n.on("close", (function () {
                                r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur")
                            })), n.on("focus", (function () {
                                n.isOpen() || r.$search.trigger("focus")
                            })), n.on("results:all", (function (e) {
                                null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                            })), n.on("results:focus", (function (e) {
                                e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                            }))
                        }, n.prototype.handleSearch = function (e) {
                            if (!this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {term: t})
                            }
                            this._keyUpPrevented = !1
                        }, n.prototype.showSearch = function (e, t) {
                            return !0
                        }, n
                    })), t.define("select2/dropdown/hidePlaceholder", [], (function () {
                        function e(e, t, n, i) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                        }

                        return e.prototype.append = function (e, t) {
                            t.results = this.removePlaceholder(t.results), e.call(this, t)
                        }, e.prototype.normalizePlaceholder = function (e, t) {
                            return "string" == typeof t && (t = {id: "", text: t}), t
                        }, e.prototype.removePlaceholder = function (e, t) {
                            for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                                var r = t[i];
                                this.placeholder.id === r.id && n.splice(i, 1)
                            }
                            return n
                        }, e
                    })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function (e) {
                        function t(e, t, n, i) {
                            this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }

                        return t.prototype.append = function (e, t) {
                            this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
                        }, t.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("query", (function (e) {
                                i.lastParams = e, i.loading = !0
                            })), t.on("query:append", (function (e) {
                                i.lastParams = e, i.loading = !0
                            })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                        }, t.prototype.loadMoreIfNeeded = function () {
                            var t = e.contains(document.documentElement, this.$loadingMore[0]);
                            !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()
                        }, t.prototype.loadMore = function () {
                            this.loading = !0;
                            var t = e.extend({}, {page: 1}, this.lastParams);
                            t.page++, this.trigger("query:append", t)
                        }, t.prototype.showLoadingMore = function (e, t) {
                            return t.pagination && t.pagination.more
                        }, t.prototype.createLoadingMore = function () {
                            var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                                n = this.options.get("translations").get("loadingMore");
                            return t.html(n(this.lastParams)), t
                        }, t
                    })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function (e, t) {
                        function n(t, n, i) {
                            this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i)
                        }

                        return n.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("open", (function () {
                                i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t)
                            })), t.on("close", (function () {
                                i._hideDropdown(), i._detachPositioningHandler(t)
                            })), this.$dropdownContainer.on("mousedown", (function (e) {
                                e.stopPropagation()
                            }))
                        }, n.prototype.destroy = function (e) {
                            e.call(this), this.$dropdownContainer.remove()
                        }, n.prototype.position = function (e, t, n) {
                            t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = n
                        }, n.prototype.render = function (t) {
                            var n = e("<span></span>"), i = t.call(this);
                            return n.append(i), this.$dropdownContainer = n, n
                        }, n.prototype._hideDropdown = function (e) {
                            this.$dropdownContainer.detach()
                        }, n.prototype._bindContainerResultHandlers = function (e, t) {
                            if (!this._containerResultsHandlersBound) {
                                var n = this;
                                t.on("results:all", (function () {
                                    n._positionDropdown(), n._resizeDropdown()
                                })), t.on("results:append", (function () {
                                    n._positionDropdown(), n._resizeDropdown()
                                })), t.on("results:message", (function () {
                                    n._positionDropdown(), n._resizeDropdown()
                                })), t.on("select", (function () {
                                    n._positionDropdown(), n._resizeDropdown()
                                })), t.on("unselect", (function () {
                                    n._positionDropdown(), n._resizeDropdown()
                                })), this._containerResultsHandlersBound = !0
                            }
                        }, n.prototype._attachPositioningHandler = function (n, i) {
                            var r = this, o = "scroll.select2." + i.id, s = "resize.select2." + i.id,
                                a = "orientationchange.select2." + i.id,
                                l = this.$container.parents().filter(t.hasScroll);
                            l.each((function () {
                                t.StoreData(this, "select2-scroll-position", {
                                    x: e(this).scrollLeft(),
                                    y: e(this).scrollTop()
                                })
                            })), l.on(o, (function (n) {
                                var i = t.GetData(this, "select2-scroll-position");
                                e(this).scrollTop(i.y)
                            })), e(window).on(o + " " + s + " " + a, (function (e) {
                                r._positionDropdown(), r._resizeDropdown()
                            }))
                        }, n.prototype._detachPositioningHandler = function (n, i) {
                            var r = "scroll.select2." + i.id, o = "resize.select2." + i.id,
                                s = "orientationchange.select2." + i.id;
                            this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + s)
                        }, n.prototype._positionDropdown = function () {
                            var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"), r = null,
                                o = this.$container.offset();
                            o.bottom = o.top + this.$container.outerHeight(!1);
                            var s = {height: this.$container.outerHeight(!1)};
                            s.top = o.top, s.bottom = o.top + s.height;
                            var a = this.$dropdown.outerHeight(!1), l = t.scrollTop(), c = t.scrollTop() + t.height(),
                                u = l < o.top - a, d = c > o.bottom + a, h = {left: o.left, top: s.bottom},
                                f = this.$dropdownParent;
                            "static" === f.css("position") && (f = f.offsetParent());
                            var p = {top: 0, left: 0};
                            (e.contains(document.body, f[0]) || f[0].isConnected) && (p = f.offset()), h.top -= p.top, h.left -= p.left, n || i || (r = "below"), d || !u || n ? !u && d && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (h.top = s.top - p.top - a), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(h)
                        }, n.prototype._resizeDropdown = function () {
                            var e = {width: this.$container.outerWidth(!1) + "px"};
                            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                        }, n.prototype._showDropdown = function (e) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, n
                    })), t.define("select2/dropdown/minimumResultsForSearch", [], (function () {
                        function e(e, t, n, i) {
                            this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                        }

                        return e.prototype.showSearch = function (e, t) {
                            return !(function e(t) {
                                for (var n = 0, i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.children ? n += e(r.children) : n++
                                }
                                return n
                            }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                        }, e
                    })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function (e) {
                        function t() {
                        }

                        return t.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("close", (function (e) {
                                i._handleSelectOnClose(e)
                            }))
                        }, t.prototype._handleSelectOnClose = function (t, n) {
                            if (n && null != n.originalSelect2Event) {
                                var i = n.originalSelect2Event;
                                if ("select" === i._type || "unselect" === i._type) return
                            }
                            var r = this.getHighlightedResults();
                            if (!(r.length < 1)) {
                                var o = e.GetData(r[0], "data");
                                null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {data: o})
                            }
                        }, t
                    })), t.define("select2/dropdown/closeOnSelect", [], (function () {
                        function e() {
                        }

                        return e.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("select", (function (e) {
                                i._selectTriggered(e)
                            })), t.on("unselect", (function (e) {
                                i._selectTriggered(e)
                            }))
                        }, e.prototype._selectTriggered = function (e, t) {
                            var n = t.originalEvent;
                            n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                                originalEvent: n,
                                originalSelect2Event: t
                            })
                        }, e
                    })), t.define("select2/i18n/en", [], (function () {
                        return {
                            errorLoading: function () {
                                return "The results could not be loaded."
                            }, inputTooLong: function (e) {
                                var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                                return 1 != t && (n += "s"), n
                            }, inputTooShort: function (e) {
                                return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                            }, loadingMore: function () {
                                return "Loading more results…"
                            }, maximumSelected: function (e) {
                                var t = "You can only select " + e.maximum + " item";
                                return 1 != e.maximum && (t += "s"), t
                            }, noResults: function () {
                                return "No results found"
                            }, searching: function () {
                                return "Searching…"
                            }, removeAllItems: function () {
                                return "Remove all items"
                            }
                        }
                    })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function (e, t, n, i, r, o, s, a, l, c, u, d, h, f, p, g, m, v, y, b, _, w, x, E, C, T, S, A, D) {
                        function k() {
                            this.reset()
                        }

                        return k.prototype.apply = function (u) {
                            if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) {
                                if (null != u.ajax ? u.dataAdapter = p : null != u.data ? u.dataAdapter = f : u.dataAdapter = h, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null != u.query) {
                                    var d = t(u.amdBase + "compat/query");
                                    u.dataAdapter = c.Decorate(u.dataAdapter, d)
                                }
                                if (null != u.initSelection) {
                                    var D = t(u.amdBase + "compat/initSelection");
                                    u.dataAdapter = c.Decorate(u.dataAdapter, D)
                                }
                            }
                            if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, E)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, x)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S))), null == u.dropdownAdapter) {
                                if (u.multiple) u.dropdownAdapter = _; else {
                                    var k = c.Decorate(_, w);
                                    u.dropdownAdapter = k
                                }
                                if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                                    var N = t(u.amdBase + "compat/dropdownCss");
                                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, N)
                                }
                                u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)
                            }
                            if (null == u.selectionAdapter) {
                                if (u.multiple ? u.selectionAdapter = r : u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                                    var O = t(u.amdBase + "compat/containerCss");
                                    u.selectionAdapter = c.Decorate(u.selectionAdapter, O)
                                }
                                u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                            }
                            u.language = this._resolveLanguage(u.language), u.language.push("en");
                            for (var $ = [], j = 0; j < u.language.length; j++) {
                                var L = u.language[j];
                                -1 === $.indexOf(L) && $.push(L)
                            }
                            return u.language = $, u.translations = this._processTranslations(u.language, u.debug), u
                        }, k.prototype.reset = function () {
                            function t(e) {
                                return e.replace(/[^\u0000-\u007E]/g, (function (e) {
                                    return d[e] || e
                                }))
                            }

                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: c.escapeMarkup,
                                language: {},
                                matcher: function n(i, r) {
                                    if ("" === e.trim(i.term)) return r;
                                    if (r.children && r.children.length > 0) {
                                        for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) null == n(i, r.children[s]) && o.children.splice(s, 1);
                                        return o.children.length > 0 ? o : n(i, o)
                                    }
                                    var a = t(r.text).toUpperCase(), l = t(i.term).toUpperCase();
                                    return a.indexOf(l) > -1 ? r : null
                                },
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                scrollAfterSelect: !1,
                                sorter: function (e) {
                                    return e
                                },
                                templateResult: function (e) {
                                    return e.text
                                },
                                templateSelection: function (e) {
                                    return e.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, k.prototype.applyFromElement = function (e, t) {
                            var n = e.language, i = this.defaults.language, r = t.prop("lang"),
                                o = t.closest("[lang]").prop("lang"),
                                s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
                            return e.language = s, e
                        }, k.prototype._resolveLanguage = function (t) {
                            if (!t) return [];
                            if (e.isEmptyObject(t)) return [];
                            if (e.isPlainObject(t)) return [t];
                            var n;
                            n = e.isArray(t) ? t : [t];
                            for (var i = [], r = 0; r < n.length; r++) if (i.push(n[r]), "string" == typeof n[r] && n[r].indexOf("-") > 0) {
                                var o = n[r].split("-")[0];
                                i.push(o)
                            }
                            return i
                        }, k.prototype._processTranslations = function (t, n) {
                            for (var i = new u, r = 0; r < t.length; r++) {
                                var o = new u, s = t[r];
                                if ("string" == typeof s) try {
                                    o = u.loadPath(s)
                                } catch (e) {
                                    try {
                                        s = this.defaults.amdLanguageBase + s, o = u.loadPath(s)
                                    } catch (e) {
                                        n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                                    }
                                } else o = e.isPlainObject(s) ? new u(s) : s;
                                i.extend(o)
                            }
                            return i
                        }, k.prototype.set = function (t, n) {
                            var i = {};
                            i[e.camelCase(t)] = n;
                            var r = c._convertData(i);
                            e.extend(!0, this.defaults, r)
                        }, new k
                    })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function (e, t, n, i) {
                        function r(t, r) {
                            if (this.options = t, null != r && this.fromElement(r), null != r && (this.options = n.applyFromElement(this.options, r)), this.options = n.apply(this.options), r && r.is("input")) {
                                var o = e(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                            }
                        }

                        return r.prototype.fromElement = function (e) {
                            var n = ["select2"];
                            null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                            var r = {};

                            function o(e, t) {
                                return t.toUpperCase()
                            }

                            for (var s = 0; s < e[0].attributes.length; s++) {
                                var a = e[0].attributes[s].name;
                                if ("data-" == a.substr(0, "data-".length)) {
                                    var l = a.substring("data-".length), c = i.GetData(e[0], l);
                                    r[l.replace(/-([a-z])/g, o)] = c
                                }
                            }
                            t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (r = t.extend(!0, {}, e[0].dataset, r));
                            var u = t.extend(!0, {}, i.GetData(e[0]), r);
                            for (var d in u = i._convertData(u)) t.inArray(d, n) > -1 || (t.isPlainObject(this.options[d]) ? t.extend(this.options[d], u[d]) : this.options[d] = u[d]);
                            return this
                        }, r.prototype.get = function (e) {
                            return this.options[e]
                        }, r.prototype.set = function (e, t) {
                            this.options[e] = t
                        }, r
                    })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function (e, t, n, i) {
                        var r = function (e, i) {
                            null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), r.__super__.constructor.call(this);
                            var o = e.attr("tabindex") || 0;
                            n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
                            var s = this.options.get("dataAdapter");
                            this.dataAdapter = new s(e, this.options);
                            var a = this.render();
                            this._placeContainer(a);
                            var l = this.options.get("selectionAdapter");
                            this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                            var c = this.options.get("dropdownAdapter");
                            this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                            var u = this.options.get("resultsAdapter");
                            this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var d = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function (e) {
                                d.trigger("selection:update", {data: e})
                            })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                        };
                        return n.Extend(r, n.Observable), r.prototype._generateId = function (e) {
                            return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                        }, r.prototype._placeContainer = function (e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(this.$element, this.options.get("width"));
                            null != t && e.css("width", t)
                        }, r.prototype._resolveWidth = function (e, t) {
                            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                                var i = this._resolveWidth(e, "style");
                                return null != i ? i : this._resolveWidth(e, "element")
                            }
                            if ("element" == t) {
                                var r = e.outerWidth(!1);
                                return r <= 0 ? "auto" : r + "px"
                            }
                            if ("style" == t) {
                                var o = e.attr("style");
                                if ("string" != typeof o) return null;
                                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                                    var c = s[a].replace(/\s/g, "").match(n);
                                    if (null !== c && c.length >= 1) return c[1]
                                }
                                return null
                            }
                            return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                        }, r.prototype._bindAdapters = function () {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, r.prototype._registerDomEvents = function () {
                            var e = this;
                            this.$element.on("change.select2", (function () {
                                e.dataAdapter.current((function (t) {
                                    e.trigger("selection:update", {data: t})
                                }))
                            })), this.$element.on("focus.select2", (function (t) {
                                e.trigger("focus", t)
                            })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != t ? (this._observer = new t((function (t) {
                                e._syncA(), e._syncS(null, t)
                            })), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                        }, r.prototype._registerDataEvents = function () {
                            var e = this;
                            this.dataAdapter.on("*", (function (t, n) {
                                e.trigger(t, n)
                            }))
                        }, r.prototype._registerSelectionEvents = function () {
                            var t = this, n = ["toggle", "focus"];
                            this.selection.on("toggle", (function () {
                                t.toggleDropdown()
                            })), this.selection.on("focus", (function (e) {
                                t.focus(e)
                            })), this.selection.on("*", (function (i, r) {
                                -1 === e.inArray(i, n) && t.trigger(i, r)
                            }))
                        }, r.prototype._registerDropdownEvents = function () {
                            var e = this;
                            this.dropdown.on("*", (function (t, n) {
                                e.trigger(t, n)
                            }))
                        }, r.prototype._registerResultsEvents = function () {
                            var e = this;
                            this.results.on("*", (function (t, n) {
                                e.trigger(t, n)
                            }))
                        }, r.prototype._registerEvents = function () {
                            var e = this;
                            this.on("open", (function () {
                                e.$container.addClass("select2-container--open")
                            })), this.on("close", (function () {
                                e.$container.removeClass("select2-container--open")
                            })), this.on("enable", (function () {
                                e.$container.removeClass("select2-container--disabled")
                            })), this.on("disable", (function () {
                                e.$container.addClass("select2-container--disabled")
                            })), this.on("blur", (function () {
                                e.$container.removeClass("select2-container--focus")
                            })), this.on("query", (function (t) {
                                e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function (n) {
                                    e.trigger("results:all", {data: n, query: t})
                                }))
                            })), this.on("query:append", (function (t) {
                                this.dataAdapter.query(t, (function (n) {
                                    e.trigger("results:append", {data: n, query: t})
                                }))
                            })), this.on("keypress", (function (t) {
                                var n = t.which;
                                e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                            }))
                        }, r.prototype._syncAttributes = function () {
                            this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, r.prototype._isChangeMutation = function (t, n) {
                            var i = !1, r = this;
                            if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                if (n) if (n.addedNodes && n.addedNodes.length > 0) for (var o = 0; o < n.addedNodes.length; o++) n.addedNodes[o].selected && (i = !0); else n.removedNodes && n.removedNodes.length > 0 ? i = !0 : e.isArray(n) && e.each(n, (function (e, t) {
                                    if (r._isChangeMutation(e, t)) return i = !0, !1
                                })); else i = !0;
                                return i
                            }
                        }, r.prototype._syncSubtree = function (e, t) {
                            var n = this._isChangeMutation(e, t), i = this;
                            n && this.dataAdapter.current((function (e) {
                                i.trigger("selection:update", {data: e})
                            }))
                        }, r.prototype.trigger = function (e, t) {
                            var n = r.__super__.trigger, i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting",
                                clear: "clearing"
                            };
                            if (void 0 === t && (t = {}), e in i) {
                                var o = i[e], s = {prevented: !1, name: e, args: t};
                                if (n.call(this, o, s), s.prevented) return void (t.prevented = !0)
                            }
                            n.call(this, e, t)
                        }, r.prototype.toggleDropdown = function () {
                            this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                        }, r.prototype.open = function () {
                            this.isOpen() || this.isDisabled() || this.trigger("query", {})
                        }, r.prototype.close = function (e) {
                            this.isOpen() && this.trigger("close", {originalEvent: e})
                        }, r.prototype.isEnabled = function () {
                            return !this.isDisabled()
                        }, r.prototype.isDisabled = function () {
                            return this.options.get("disabled")
                        }, r.prototype.isOpen = function () {
                            return this.$container.hasClass("select2-container--open")
                        }, r.prototype.hasFocus = function () {
                            return this.$container.hasClass("select2-container--focus")
                        }, r.prototype.focus = function (e) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, r.prototype.enable = function (e) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                            var t = !e[0];
                            this.$element.prop("disabled", t)
                        }, r.prototype.data = function () {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var e = [];
                            return this.dataAdapter.current((function (t) {
                                e = t
                            })), e
                        }, r.prototype.val = function (t) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                            var n = t[0];
                            e.isArray(n) && (n = e.map(n, (function (e) {
                                return e.toString()
                            }))), this.$element.val(n).trigger("input").trigger("change")
                        }, r.prototype.destroy = function () {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, r.prototype.render = function () {
                            var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                        }, r
                    })), t.define("jquery-mousewheel", ["jquery"], (function (e) {
                        return e
                    })), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function (e, t, n, i, r) {
                        if (null == e.fn.select2) {
                            var o = ["open", "close", "destroy"];
                            e.fn.select2 = function (t) {
                                if ("object" == typeof (t = t || {})) return this.each((function () {
                                    var i = e.extend(!0, {}, t);
                                    new n(e(this), i)
                                })), this;
                                if ("string" == typeof t) {
                                    var i, s = Array.prototype.slice.call(arguments, 1);
                                    return this.each((function () {
                                        var e = r.GetData(this, "select2");
                                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, s)
                                    })), e.inArray(t, o) > -1 ? this : i
                                }
                                throw new Error("Invalid arguments for Select2: " + t)
                            }
                        }
                        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                    })), {define: t.define, require: t.require}
                }(), n = t.require("jquery.select2");
                return e.fn.select2.amd = t, n
            }) ? r.apply(t, o) : r) || (e.exports = s)
        }).call(this, n("EVdn"))
    }, EVdn: function (e, t, n) {
        var i;
        /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
        !function (t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, (function (n, r) {
            "use strict";
            var o = [], s = Object.getPrototypeOf, a = o.slice, l = o.flat ? function (e) {
                    return o.flat.call(e)
                } : function (e) {
                    return o.concat.apply([], e)
                }, c = o.push, u = o.indexOf, d = {}, h = d.toString, f = d.hasOwnProperty, p = f.toString,
                g = p.call(Object), m = {}, v = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                }, y = function (e) {
                    return null != e && e === e.window
                }, b = n.document, _ = {type: !0, src: !0, nonce: !0, noModule: !0};

            function w(e, t, n) {
                var i, r, o = (n = n || b).createElement("script");
                if (o.text = e, t) for (i in _) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
            }

            var E = function (e, t) {
                return new E.fn.init(e, t)
            };

            function C(e) {
                var t = !!e && "length" in e && e.length, n = x(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            E.fn = E.prototype = {
                jquery: "3.5.1", constructor: E, length: 0, toArray: function () {
                    return a.call(this)
                }, get: function (e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                }, pushStack: function (e) {
                    var t = E.merge(this.constructor(), e);
                    return t.prevObject = this, t
                }, each: function (e) {
                    return E.each(this, e)
                }, map: function (e) {
                    return this.pushStack(E.map(this, (function (t, n) {
                        return e.call(t, n, t)
                    })))
                }, slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, even: function () {
                    return this.pushStack(E.grep(this, (function (e, t) {
                        return (t + 1) % 2
                    })))
                }, odd: function () {
                    return this.pushStack(E.grep(this, (function (e, t) {
                        return t % 2
                    })))
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: c, sort: o.sort, splice: o.splice
            }, E.extend = E.fn.extend = function () {
                var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {}, r = !1, s[t] = E.extend(c, o, i)) : void 0 !== i && (s[t] = i));
                return s
            }, E.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== h.call(e)) && (!(t = s(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === g)
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, globalEval: function (e, t, n) {
                    w(e, {nonce: t && t.nonce}, n)
                }, each: function (e, t) {
                    var n, i = 0;
                    if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : u.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                }, grep: function (e, t, n) {
                    for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                    return i
                }, map: function (e, t, n) {
                    var i, r, o = 0, s = [];
                    if (C(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                    return l(s)
                }, guid: 1, support: m
            }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase()
            }));
            var T =
                /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
                function (e) {
                    var t, n, i, r, o, s, a, l, c, u, d, h, f, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
                        w = e.document, x = 0, E = 0, C = le(), T = le(), S = le(), A = le(), D = function (e, t) {
                            return e === t && (d = !0), 0
                        }, k = {}.hasOwnProperty, N = [], O = N.pop, $ = N.push, j = N.push, L = N.slice,
                        I = function (e, t) {
                            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                            return -1
                        },
                        q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        P = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        H = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
                        M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                        F = new RegExp(P + "+", "g"),
                        B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                        W = new RegExp("^" + P + "*," + P + "*"),
                        U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), z = new RegExp(P + "|>"),
                        V = new RegExp(M), Y = new RegExp("^" + R + "$"), Q = {
                            ID: new RegExp("^#(" + R + ")"),
                            CLASS: new RegExp("^\\.(" + R + ")"),
                            TAG: new RegExp("^(" + R + "|[*])"),
                            ATTR: new RegExp("^" + H),
                            PSEUDO: new RegExp("^" + M),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + q + ")$", "i"),
                            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                        }, G = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i,
                        Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                        ne = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function (e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }, oe = function () {
                            h()
                        }, se = _e((function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {dir: "parentNode", next: "legend"});
                    try {
                        j.apply(N = L.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
                    } catch (e) {
                        j = {
                            apply: N.length ? function (e, t) {
                                $.apply(e, L.call(t))
                            } : function (e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                                e.length = n - 1
                            }
                        }
                    }

                    function ae(e, t, i, r) {
                        var o, a, c, u, d, p, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
                        if (!r && (h(t), t = t || f, g)) {
                            if (11 !== w && (d = J.exec(e))) if (o = d[1]) {
                                if (9 === w) {
                                    if (!(c = t.getElementById(o))) return i;
                                    if (c.id === o) return i.push(c), i
                                } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                            } else {
                                if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                                if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                            }
                            if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (v = e, y = t, 1 === w && (z.test(e) || U.test(e))) {
                                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = _)), a = (p = s(e)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                                    v = p.join(",")
                                }
                                try {
                                    return j.apply(i, y.querySelectorAll(v)), i
                                } catch (t) {
                                    A(e, !0)
                                } finally {
                                    u === _ && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(B, "$1"), t, i, r)
                    }

                    function le() {
                        var e = [];
                        return function t(n, r) {
                            return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                        }
                    }

                    function ce(e) {
                        return e[_] = !0, e
                    }

                    function ue(e) {
                        var t = f.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function de(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                    }

                    function he(e, t) {
                        var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (i) return i;
                        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function fe(e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function pe(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function ge(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function me(e) {
                        return ce((function (t) {
                            return t = +t, ce((function (n, i) {
                                for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                            }))
                        }))
                    }

                    function ve(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    for (t in n = ae.support = {}, o = ae.isXML = function (e) {
                        var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                        return !G.test(t || n && n.nodeName || "HTML")
                    }, h = ae.setDocument = function (e) {
                        var t, r, s = e ? e.ownerDocument || e : w;
                        return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function (e) {
                            return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ue((function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ue((function (e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ue((function (e) {
                            return p.appendChild(e).id = _, !f.getElementsByName || !f.getElementsByName(_).length
                        })), n.getById ? (i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, i, r, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, i = [], r = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ue((function (e) {
                            var t;
                            p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        })), ue((function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        }))), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                        })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function (e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        }, D = t ? function (e, t) {
                            if (e === t) return d = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return d = !0, 0;
                            var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                            if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                            if (r === o) return he(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? he(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                        }, f) : f
                    }, ae.matches = function (e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function (e, t) {
                        if (h(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {
                            A(t, !0)
                        }
                        return ae(t, f, null, [e]).length > 0
                    }, ae.contains = function (e, t) {
                        return (e.ownerDocument || e) != f && h(e), b(e, t)
                    }, ae.attr = function (e, t) {
                        (e.ownerDocument || e) != f && h(e);
                        var r = i.attrHandle[t.toLowerCase()],
                            o = r && k.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, ae.escape = function (e) {
                        return (e + "").replace(ie, re)
                    }, ae.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function (e) {
                        var t, i = [], r = 0, o = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), d) {
                            for (; t = e[o++];) t === e[o] && (r = i.push(o));
                            for (; r--;) e.splice(i[r], 1)
                        }
                        return u = null, e
                    }, r = ae.getText = function (e) {
                        var t, n = "", i = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else for (; t = e[i++];) n += r(t);
                        return n
                    }, (i = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            }, CLASS: function (e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, (function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            }, ATTR: function (e, t, n) {
                                return function (i) {
                                    var r = ae.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            }, CHILD: function (e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                                return 1 === i && 0 === r ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var c, u, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                        m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (h = t; h = h[g];) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                p = g = "only" === e && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                            for (b = (f = (c = (u = (d = (h = m)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) if (1 === h.nodeType && ++b && h === t) {
                                                u[e] = [x, f, b];
                                                break
                                            }
                                        } else if (y && (b = f = (c = (u = (d = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [x, b]), h !== t));) ;
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            }, PSEUDO: function (e, t) {
                                var n,
                                    r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                                    for (var i, o = r(e, t), s = o.length; s--;) e[i = I(e, o[s])] = !(n[i] = o[s])
                                })) : function (e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ce((function (e) {
                                var t = [], n = [], i = a(e.replace(B, "$1"));
                                return i[_] ? ce((function (e, t, n, r) {
                                    for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                                })) : function (e, r, o) {
                                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                }
                            })), has: ce((function (e) {
                                return function (t) {
                                    return ae(e, t).length > 0
                                }
                            })), contains: ce((function (e) {
                                return e = e.replace(te, ne), function (t) {
                                    return (t.textContent || r(t)).indexOf(e) > -1
                                }
                            })), lang: ce((function (e) {
                                return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            })), target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            }, root: function (e) {
                                return e === p
                            }, focus: function (e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            }, parent: function (e) {
                                return !i.pseudos.empty(e)
                            }, header: function (e) {
                                return X.test(e.nodeName)
                            }, input: function (e) {
                                return K.test(e.nodeName)
                            }, button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            }, text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: me((function () {
                                return [0]
                            })), last: me((function (e, t) {
                                return [t - 1]
                            })), eq: me((function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            })), even: me((function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })), odd: me((function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })), lt: me((function (e, t, n) {
                                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                return e
                            })), gt: me((function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            }))
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = fe(t);
                    for (t in {submit: !0, reset: !0}) i.pseudos[t] = pe(t);

                    function ye() {
                    }

                    function be(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                        return i
                    }

                    function _e(e, t, n) {
                        var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = E++;
                        return t.first ? function (t, n, r) {
                            for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
                            return !1
                        } : function (t, n, l) {
                            var c, u, d, h = [x, a];
                            if (l) {
                                for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                            } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                                if ((c = u[o]) && c[0] === x && c[1] === a) return h[2] = c[2];
                                if (u[o] = h, h[2] = e(t, n, l)) return !0
                            }
                            return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function xe(e, t, n, i, r) {
                        for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                        return s
                    }

                    function Ee(e, t, n, i, r, o) {
                        return i && !i[_] && (i = Ee(i)), r && !r[_] && (r = Ee(r, o)), ce((function (o, s, a, l) {
                            var c, u, d, h = [], f = [], p = s.length, g = o || function (e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                    return n
                                }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xe(g, h, e, a, l),
                                v = n ? r || (o ? e : p || i) ? [] : s : m;
                            if (n && n(m, v, a, l), i) for (c = xe(v, f), i(c, [], a, l), u = c.length; u--;) (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (c = [], u = v.length; u--;) (d = v[u]) && c.push(m[u] = d);
                                        r(null, v = [], c, l)
                                    }
                                    for (u = v.length; u--;) (d = v[u]) && (c = r ? I(o, d) : h[u]) > -1 && (o[c] = !(s[c] = d))
                                }
                            } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : j.apply(s, v)
                        }))
                    }

                    function Ce(e) {
                        for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) {
                            return e === t
                        }), a, !0), d = _e((function (e) {
                            return I(t, e) > -1
                        }), a, !0), h = [function (e, n, i) {
                            var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                            return t = null, r
                        }]; l < o; l++) if (n = i.relative[e[l].type]) h = [_e(we(h), n)]; else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                                return Ee(l > 1 && we(h), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && be(e))
                            }
                            h.push(n)
                        }
                        return we(h)
                    }

                    return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
                        var n, r, o, s, a, l, c, u = T[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (a = e, l = [], c = i.preFilter; a;) {
                            for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }), a = a.slice(n.length)), i.filter) !(r = Q[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                                value: n,
                                type: s,
                                matches: r
                            }), a = a.slice(n.length));
                            if (!n) break
                        }
                        return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
                    }, a = ae.compile = function (e, t) {
                        var n, r = [], o = [], a = S[e + " "];
                        if (!a) {
                            for (t || (t = s(e)), n = t.length; n--;) (a = Ce(t[n]))[_] ? r.push(a) : o.push(a);
                            (a = S(e, function (e, t) {
                                var n = t.length > 0, r = e.length > 0, o = function (o, s, a, l, u) {
                                    var d, p, m, v = 0, y = "0", b = o && [], _ = [], w = c,
                                        E = o || r && i.find.TAG("*", u), C = x += null == w ? 1 : Math.random() || .1,
                                        T = E.length;
                                    for (u && (c = s == f || s || u); y !== T && null != (d = E[y]); y++) {
                                        if (r && d) {
                                            for (p = 0, s || d.ownerDocument == f || (h(d), a = !g); m = e[p++];) if (m(d, s || f, a)) {
                                                l.push(d);
                                                break
                                            }
                                            u && (x = C)
                                        }
                                        n && ((d = !m && d) && v--, o && b.push(d))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (p = 0; m = t[p++];) m(b, _, s, a);
                                        if (o) {
                                            if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = O.call(l));
                                            _ = xe(_)
                                        }
                                        j.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                    }
                                    return u && (x = C, c = w), b
                                };
                                return n ? ce(o) : o
                            }(o, r))).selector = e
                        }
                        return a
                    }, l = ae.select = function (e, t, n, r) {
                        var o, l, c, u, d, h = "function" == typeof e && e, f = !r && s(e = h.selector || e);
                        if (n = n || [], 1 === f.length) {
                            if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                            }
                            for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                if (l.splice(o, 1), !(e = r.length && be(l))) return j.apply(n, r), n;
                                break
                            }
                        }
                        return (h || a(e, f))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                    }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!d, h(), n.sortDetached = ue((function (e) {
                        return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                    })), ue((function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || de("type|href|height|width", (function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), n.attributes && ue((function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || de("value", (function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), ue((function (e) {
                        return null == e.getAttribute("disabled")
                    })) || de(q, (function (e, t, n) {
                        var i;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    })), ae
                }(n);
            E.find = T, E.expr = T.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = T.uniqueSort, E.text = T.getText, E.isXMLDoc = T.isXML, E.contains = T.contains, E.escapeSelector = T.escape;
            var S = function (e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (r && E(e).is(n)) break;
                    i.push(e)
                }
                return i
            }, A = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }, D = E.expr.match.needsContext;

            function k(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, t, n) {
                return v(t) ? E.grep(e, (function (e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? E.grep(e, (function (e) {
                    return e === t !== n
                })) : "string" != typeof t ? E.grep(e, (function (e) {
                    return u.call(t, e) > -1 !== n
                })) : E.filter(t, e, n)
            }

            E.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, (function (e) {
                    return 1 === e.nodeType
                })))
            }, E.fn.extend({
                find: function (e) {
                    var t, n, i = this.length, r = this;
                    if ("string" != typeof e) return this.pushStack(E(e).filter((function () {
                        for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
                    return i > 1 ? E.uniqueSort(n) : n
                }, filter: function (e) {
                    return this.pushStack(O(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(O(this, e || [], !0))
                }, is: function (e) {
                    return !!O(this, "string" == typeof e && D.test(e) ? E(e) : e || [], !1).length
                }
            });
            var $, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (E.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || $, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), N.test(i[1]) && E.isPlainObject(t)) for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
            }).prototype = E.fn, $ = E(b);
            var L = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

            function q(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            E.fn.extend({
                has: function (e) {
                    var t = E(e, this), n = t.length;
                    return this.filter((function () {
                        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
                    }))
                }, closest: function (e, t) {
                    var n, i = 0, r = this.length, o = [], s = "string" != typeof e && E(e);
                    if (!D.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                }, index: function (e) {
                    return e ? "string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), E.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return S(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return S(e, "parentNode", n)
                }, next: function (e) {
                    return q(e, "nextSibling")
                }, prev: function (e) {
                    return q(e, "previousSibling")
                }, nextAll: function (e) {
                    return S(e, "nextSibling")
                }, prevAll: function (e) {
                    return S(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return S(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return S(e, "previousSibling", n)
                }, siblings: function (e) {
                    return A((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return A(e.firstChild)
                }, contents: function (e) {
                    return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
                }
            }, (function (e, t) {
                E.fn[e] = function (n, i) {
                    var r = E.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = E.filter(i, r)), this.length > 1 && (I[e] || E.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
                }
            }));
            var P = /[^\x20\t\r\n\f]+/g;

            function R(e) {
                return e
            }

            function H(e) {
                throw e
            }

            function M(e, t, n, i) {
                var r;
                try {
                    e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            E.Callbacks = function (e) {
                e = "string" == typeof e ? function (e) {
                    var t = {};
                    return E.each(e.match(P) || [], (function (e, n) {
                        t[n] = !0
                    })), t
                }(e) : E.extend({}, e);
                var t, n, i, r, o = [], s = [], a = -1, l = function () {
                    for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                }, c = {
                    add: function () {
                        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                            E.each(n, (function (n, i) {
                                v(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i)
                            }))
                        }(arguments), n && !t && l()), this
                    }, remove: function () {
                        return E.each(arguments, (function (e, t) {
                            for (var n; (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                        })), this
                    }, has: function (e) {
                        return e ? E.inArray(e, o) > -1 : o.length > 0
                    }, empty: function () {
                        return o && (o = []), this
                    }, disable: function () {
                        return r = s = [], o = n = "", this
                    }, disabled: function () {
                        return !o
                    }, lock: function () {
                        return r = s = [], n || t || (o = n = ""), this
                    }, locked: function () {
                        return !!r
                    }, fireWith: function (e, n) {
                        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!i
                    }
                };
                return c
            }, E.extend({
                Deferred: function (e) {
                    var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                        i = "pending", r = {
                            state: function () {
                                return i
                            }, always: function () {
                                return o.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return r.then(null, e)
                            }, pipe: function () {
                                var e = arguments;
                                return E.Deferred((function (n) {
                                    E.each(t, (function (t, i) {
                                        var r = v(e[i[4]]) && e[i[4]];
                                        o[i[1]]((function () {
                                            var e = r && r.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            }, then: function (e, i, r) {
                                var o = 0;

                                function s(e, t, i, r) {
                                    return function () {
                                        var a = this, l = arguments, c = function () {
                                            var n, c;
                                            if (!(e < o)) {
                                                if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? r ? c.call(n, s(o, t, R, r), s(o, t, H, r)) : (o++, c.call(n, s(o, t, R, r), s(o, t, H, r), s(o, t, R, t.notifyWith))) : (i !== R && (a = void 0, l = [n]), (r || t.resolveWith)(a, l))
                                            }
                                        }, u = r ? c : function () {
                                            try {
                                                c()
                                            } catch (n) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== H && (a = void 0, l = [n]), t.rejectWith(a, l))
                                            }
                                        };
                                        e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), n.setTimeout(u))
                                    }
                                }

                                return E.Deferred((function (n) {
                                    t[0][3].add(s(0, n, v(r) ? r : R, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : R)), t[2][3].add(s(0, n, v(i) ? i : H))
                                })).promise()
                            }, promise: function (e) {
                                return null != e ? E.extend(e, r) : r
                            }
                        }, o = {};
                    return E.each(t, (function (e, n) {
                        var s = n[2], a = n[5];
                        r[n[1]] = s.add, a && s.add((function () {
                            i = a
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[n[0] + "With"] = s.fireWith
                    })), r.promise(o), e && e.call(o, o), o
                }, when: function (e) {
                    var t = arguments.length, n = t, i = Array(n), r = a.call(arguments), o = E.Deferred(),
                        s = function (e) {
                            return function (n) {
                                i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(i, r)
                            }
                        };
                    if (t <= 1 && (M(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                    for (; n--;) M(r[n], s(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            E.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, E.readyException = function (e) {
                n.setTimeout((function () {
                    throw e
                }))
            };
            var B = E.Deferred();

            function W() {
                b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), E.ready()
            }

            E.fn.ready = function (e) {
                return B.then(e).catch((function (e) {
                    E.readyException(e)
                })), this
            }, E.extend({
                isReady: !1, readyWait: 1, ready: function (e) {
                    (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || B.resolveWith(b, [E]))
                }
            }), E.ready.then = B.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
            var U = function (e, t, n, i, r, o, s) {
                var a = 0, l = e.length, c = null == n;
                if ("object" === x(n)) for (a in r = !0, n) U(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(E(e), n)
                })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            }, z = /^-ms-/, V = /-([a-z])/g;

            function Y(e, t) {
                return t.toUpperCase()
            }

            function Q(e) {
                return e.replace(z, "ms-").replace(V, Y)
            }

            var G = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function K() {
                this.expando = E.expando + K.uid++
            }

            K.uid = 1, K.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                }, set: function (e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[Q(t)] = n; else for (i in t) r[Q(i)] = t[i];
                    return r
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
                }, access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(P) || []).length;
                            for (; n--;) delete i[t[n]]
                        }
                        (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !E.isEmptyObject(t)
                }
            };
            var X = new K, Z = new K, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

            function te(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = function (e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {
                    }
                    Z.set(e, t, n)
                } else n = void 0;
                return n
            }

            E.extend({
                hasData: function (e) {
                    return Z.hasData(e) || X.hasData(e)
                }, data: function (e, t, n) {
                    return Z.access(e, t, n)
                }, removeData: function (e, t) {
                    Z.remove(e, t)
                }, _data: function (e, t, n) {
                    return X.access(e, t, n)
                }, _removeData: function (e, t) {
                    X.remove(e, t)
                }
            }), E.fn.extend({
                data: function (e, t) {
                    var n, i, r, o = this[0], s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = Z.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), te(o, i, r[i]));
                            X.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each((function () {
                        Z.set(this, e)
                    })) : U(this, (function (t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                        this.each((function () {
                            Z.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each((function () {
                        Z.remove(this, e)
                    }))
                }
            }), E.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, E.makeArray(n)) : i.push(n)), i || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = E.queue(e, t), i = n.length, r = n.shift(), o = E._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                        E.dequeue(e, t)
                    }), o)), !i && o && o.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return X.get(e, n) || X.access(e, n, {
                        empty: E.Callbacks("once memory").add((function () {
                            X.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), E.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                    }))
                }, dequeue: function (e) {
                    return this.each((function () {
                        E.dequeue(this, e)
                    }))
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, i = 1, r = E.Deferred(), o = this, s = this.length, a = function () {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = X.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                    return a(), r.promise(t)
                }
            });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"],
                oe = b.documentElement, se = function (e) {
                    return E.contains(e.ownerDocument, e)
                }, ae = {composed: !0};
            oe.getRootNode && (se = function (e) {
                return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            });
            var le = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display")
            };

            function ce(e, t, n, i) {
                var r, o, s = 20, a = i ? function () {
                        return i.cur()
                    } : function () {
                        return E.css(e, t, "")
                    }, l = a(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && ie.exec(E.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                    u *= 2, E.style(e, t, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }

            var ue = {};

            function de(e) {
                var t, n = e.ownerDocument, i = e.nodeName, r = ue[i];
                return r || (t = n.body.appendChild(n.createElement(i)), r = E.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ue[i] = r, r)
            }

            function he(e, t) {
                for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = X.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && le(i) && (r[o] = de(i))) : "none" !== n && (r[o] = "none", X.set(i, "display", n)));
                for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                return e
            }

            E.fn.extend({
                show: function () {
                    return he(this, !0)
                }, hide: function () {
                    return he(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                        le(this) ? E(this).show() : E(this).hide()
                    }))
                }
            });
            var fe, pe, ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i;
            fe = b.createDocumentFragment().appendChild(b.createElement("div")), (pe = b.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", m.option = !!fe.lastChild;
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function be(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? E.merge([e], n) : n
            }

            function _e(e, t) {
                for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
            }

            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;

            function xe(e, t, n, i, r) {
                for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((o = e[f]) || 0 === o) if ("object" === x(o)) E.merge(h, o.nodeType ? [o] : o); else if (we.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                    E.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
                } else h.push(t.createTextNode(o));
                for (d.textContent = "", f = 0; o = h[f++];) if (i && E.inArray(o, i) > -1) r && r.push(o); else if (c = se(o), s = be(d.appendChild(o), "script"), c && _e(s), n) for (u = 0; o = s[u++];) ve.test(o.type || "") && n.push(o);
                return d
            }

            var Ee = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;

            function Se() {
                return !0
            }

            function Ae() {
                return !1
            }

            function De(e, t) {
                return e === function () {
                    try {
                        return b.activeElement
                    } catch (e) {
                    }
                }() == ("focus" === t)
            }

            function ke(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ae; else if (!r) return e;
                return 1 === o && (s = r, (r = function (e) {
                    return E().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = E.guid++)), e.each((function () {
                    E.event.add(this, t, r, i, n)
                }))
            }

            function Ne(e, t, n) {
                n ? (X.set(e, t, !1), E.event.add(e, t, {
                    namespace: !1, handler: function (e) {
                        var i, r, o = X.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = a.call(arguments), X.set(this, t, o), i = n(this, t), this[t](), o !== (r = X.get(this, t)) || i ? X.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                        } else o.length && (X.set(this, t, {value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
                    }
                })) : void 0 === X.get(e, t) && E.event.add(e, t, Se)
            }

            E.event = {
                global: {}, add: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, d, h, f, p, g, m = X.get(e);
                    if (G(e)) for (n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(oe, r), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(P) || [""]).length; c--;) f = g = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = E.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = E.event.special[f] || {}, u = E.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && E.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), E.event.global[f] = !0)
                }, remove: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, d, h, f, p, g, m = X.hasData(e) && X.get(e);
                    if (m && (l = m.events)) {
                        for (c = (t = (t || "").match(P) || [""]).length; c--;) if (f = g = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = E.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || E.removeEvent(e, f, m.handle), delete l[f])
                        } else for (f in l) E.event.remove(e, f + t[c], n, i, !0);
                        E.isEmptyObject(l) && X.remove(e, "handle events")
                    }
                }, dispatch: function (e) {
                    var t, n, i, r, o, s, a = new Array(arguments.length), l = E.event.fix(e),
                        c = (X.get(this, "events") || Object.create(null))[l.type] || [],
                        u = E.event.special[l.type] || {};
                    for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (s = E.event.handlers.call(this, l, c), t = 0; (r = s[t++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result
                    }
                }, handlers: function (e, t) {
                    var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? E(r, this).index(c) > -1 : E.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({elem: c, handlers: o})
                    }
                    return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
                }, addProp: function (e, t) {
                    Object.defineProperty(E.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                        }
                    })
                }, fix: function (e) {
                    return e[E.expando] ? e : new E.Event(e)
                }, special: {
                    load: {noBubble: !0}, click: {
                        setup: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && k(t, "input") && Ne(t, "click", Se), !1
                        }, trigger: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && k(t, "input") && Ne(t, "click"), !0
                        }, _default: function (e) {
                            var t = e.target;
                            return ge.test(t.type) && t.click && k(t, "input") && X.get(t, "click") || k(t, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, E.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, E.Event = function (e, t) {
                if (!(this instanceof E.Event)) return new E.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
            }, E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, E.event.addProp), E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                E.event.special[e] = {
                    setup: function () {
                        return Ne(this, e, De), !1
                    }, trigger: function () {
                        return Ne(this, e), !0
                    }, delegateType: t
                }
            })), E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (e, t) {
                E.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, i = this, r = e.relatedTarget, o = e.handleObj;
                        return r && (r === i || E.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), E.fn.extend({
                on: function (e, t, n, i) {
                    return ke(this, e, t, n, i)
                }, one: function (e, t, n, i) {
                    return ke(this, e, t, n, i, 1)
                }, off: function (e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function () {
                        E.event.remove(this, e, n, t)
                    }))
                }
            });
            var Oe = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
                je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
            }

            function Ie(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function qe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Pe(e, t) {
                var n, i, r, o, s, a;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (a = X.get(e).events)) for (r in X.remove(t, "handle events"), a) for (n = 0, i = a[r].length; n < i; n++) E.event.add(t, r, a[r][n]);
                    Z.hasData(e) && (o = Z.access(e), s = E.extend({}, o), Z.set(t, s))
                }
            }

            function Re(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function He(e, t, n, i) {
                t = l(t);
                var r, o, s, a, c, u, d = 0, h = e.length, f = h - 1, p = t[0], g = v(p);
                if (g || h > 1 && "string" == typeof p && !m.checkClone && $e.test(p)) return e.each((function (r) {
                    var o = e.eq(r);
                    g && (t[0] = p.call(this, r, o.html())), He(o, t, n, i)
                }));
                if (h && (o = (r = xe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (a = (s = E.map(be(r, "script"), Ie)).length; d < h; d++) c = r, d !== f && (c = E.clone(c, !0, !0), a && E.merge(s, be(c, "script"))), n.call(e[d], c, d);
                    if (a) for (u = s[s.length - 1].ownerDocument, E.map(s, qe), d = 0; d < a; d++) c = s[d], ve.test(c.type || "") && !X.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : w(c.textContent.replace(je, ""), c, u))
                }
                return e
            }

            function Me(e, t, n) {
                for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(be(i)), i.parentNode && (n && se(i) && _e(be(i, "script")), i.parentNode.removeChild(i));
                return e
            }

            E.extend({
                htmlPrefilter: function (e) {
                    return e
                }, clone: function (e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0), l = se(e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (s = be(a), i = 0, r = (o = be(e)).length; i < r; i++) Re(o[i], s[i]);
                    if (t) if (n) for (o = o || be(e), s = s || be(a), i = 0, r = o.length; i < r; i++) Pe(o[i], s[i]); else Pe(e, a);
                    return (s = be(a, "script")).length > 0 && _e(s, !l && be(e, "script")), a
                }, cleanData: function (e) {
                    for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                        if (t = n[X.expando]) {
                            if (t.events) for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                            n[X.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
                }
            }), E.fn.extend({
                detach: function (e) {
                    return Me(this, e, !0)
                }, remove: function (e) {
                    return Me(this, e)
                }, text: function (e) {
                    return U(this, (function (e) {
                        return void 0 === e ? E.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                }, append: function () {
                    return He(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    }))
                }, prepend: function () {
                    return He(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                }, before: function () {
                    return He(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                }, after: function () {
                    return He(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return E.clone(this, e, t)
                    }))
                }, html: function (e) {
                    return U(this, (function (e) {
                        var t = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Oe.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return He(this, arguments, (function (t) {
                        var n = this.parentNode;
                        E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                E.fn[e] = function (e) {
                    for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), E(r[s])[t](n), c.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"), Be = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            }, We = function (e, t, n) {
                var i, r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                for (r in i = n.call(e), t) e.style[r] = o[r];
                return i
            }, Ue = new RegExp(re.join("|"), "i");

            function ze(e, t, n) {
                var i, r, o, s, a = e.style;
                return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = E.style(e, t)), !m.pixelBoxStyles() && Fe.test(s) && Ue.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function Ve(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                function e() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
                        var e = n.getComputedStyle(u);
                        i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), oe.removeChild(c), u = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }

                var i, r, o, s, a, l, c = b.createElement("div"), u = b.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(m, {
                    boxSizingReliable: function () {
                        return e(), r
                    }, pixelBoxStyles: function () {
                        return e(), s
                    }, pixelPosition: function () {
                        return e(), i
                    }, reliableMarginLeft: function () {
                        return e(), l
                    }, scrollboxSize: function () {
                        return e(), o
                    }, reliableTrDimensions: function () {
                        var e, t, i, r;
                        return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", oe.appendChild(e).appendChild(t).appendChild(i), r = n.getComputedStyle(t), a = parseInt(r.height) > 3, oe.removeChild(e)), a
                    }
                }))
            }();
            var Ye = ["Webkit", "Moz", "ms"], Qe = b.createElement("div").style, Ge = {};

            function Ke(e) {
                var t = E.cssProps[e] || Ge[e];
                return t || (e in Qe ? e : Ge[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) if ((e = Ye[n] + t) in Qe) return e
                }(e) || e)
            }

            var Xe = /^(none|table(?!-c[ea]).+)/, Ze = /^--/,
                Je = {position: "absolute", visibility: "hidden", display: "block"},
                et = {letterSpacing: "0", fontWeight: "400"};

            function tt(e, t, n) {
                var i = ie.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function nt(e, t, n, i, r, o) {
                var s = "width" === t ? 1 : 0, a = 0, l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + re[s], !0, r)), i ? ("content" === n && (l -= E.css(e, "padding" + re[s], !0, r)), "margin" !== n && (l -= E.css(e, "border" + re[s] + "Width", !0, r))) : (l += E.css(e, "padding" + re[s], !0, r), "padding" !== n ? l += E.css(e, "border" + re[s] + "Width", !0, r) : a += E.css(e, "border" + re[s] + "Width", !0, r));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
            }

            function it(e, t, n) {
                var i = Be(e), r = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    o = r, s = ze(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Fe.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
            }

            function rt(e, t, n, i, r) {
                return new rt.prototype.init(e, t, n, i, r)
            }

            E.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = ze(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = Q(t), l = Ze.test(t), c = e.style;
                        if (l || (t = Ke(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                        "string" === (o = typeof n) && (r = ie.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function (e, t, n, i) {
                    var r, o, s, a = Q(t);
                    return Ze.test(t) || (t = Ke(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = ze(e, t, i)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), E.each(["height", "width"], (function (e, t) {
                E.cssHooks[t] = {
                    get: function (e, n, i) {
                        if (n) return !Xe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : We(e, Je, (function () {
                            return it(e, t, i)
                        }))
                    }, set: function (e, n, i) {
                        var r, o = Be(e), s = !m.scrollboxSize() && "absolute" === o.position,
                            a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o),
                            l = i ? nt(e, t, i, a, o) : 0;
                        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), l && (r = ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = E.css(e, t)), tt(0, n, l)
                    }
                }
            })), E.cssHooks.marginLeft = Ve(m.reliableMarginLeft, (function (e, t) {
                if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {marginLeft: 0}, (function () {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), E.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
                E.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + re[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, "margin" !== e && (E.cssHooks[e + t].set = tt)
            })), E.fn.extend({
                css: function (e, t) {
                    return U(this, (function (e, t, n) {
                        var i, r, o = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (i = Be(e), r = t.length; s < r; s++) o[t[s]] = E.css(e, t[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), E.Tween = rt, rt.prototype = {
                constructor: rt, init: function (e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (E.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = rt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = rt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                }
            }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    }, set: function (e) {
                        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, E.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, E.fx = rt.prototype.init, E.fx.step = {};
            var ot, st, at = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;

            function ct() {
                st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, E.fx.interval), E.fx.tick())
            }

            function ut() {
                return n.setTimeout((function () {
                    ot = void 0
                })), ot = Date.now()
            }

            function dt(e, t) {
                var n, i = 0, r = {height: e};
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = re[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function ht(e, t, n) {
                for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
            }

            function ft(e, t, n) {
                var i, r, o = 0, s = ft.prefilters.length, a = E.Deferred().always((function () {
                    delete l.elem
                })), l = function () {
                    if (r) return !1;
                    for (var t = ot || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                    return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                }, c = a.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0, i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }), u = c.props;
                for (!function (e, t) {
                    var n, i, r, o, s;
                    for (n in e) if (r = t[i = Q(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = E.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
                }(u, c.opts.specialEasing); o < s; o++) if (i = ft.prefilters[o].call(c, e, u, c.opts)) return v(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return E.map(u, ht, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }

            E.Animation = E.extend(ft, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, ie.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(P);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
                }, prefilters: [function (e, t, n) {
                    var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t, h = this, f = {}, p = e.style,
                        g = e.nodeType && le(e), m = X.get(e, "fxshow");
                    for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || a()
                    }), s.unqueued++, h.always((function () {
                        h.always((function () {
                            s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                        }))
                    }))), t) if (r = t[i], at.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        f[i] = m && m[i] || E.style(e, i)
                    }
                    if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = X.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (he([e], !0), c = e.style.display || c, u = E.css(e, "display"), he([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (h.done((function () {
                        p.display = c
                    })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && he([e], !0), h.done((function () {
                        for (i in g || he([e]), X.remove(e, "fxshow"), f) E.style(e, i, f[i])
                    }))), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }], prefilter: function (e, t) {
                    t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                }
            }), E.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
                }, i
            }, E.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(le).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
                }, animate: function (e, t, n, i) {
                    var r = E.isEmptyObject(e), o = E.speed(t, n, i), s = function () {
                        var t = ft(this, E.extend({}, e), o);
                        (r || X.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                }, stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                        var t = !0, r = null != e && e + "queueHooks", o = E.timers, s = X.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || E.dequeue(this, e)
                    }))
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each((function () {
                        var t, n = X.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = E.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, E.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), E.each(["toggle", "show", "hide"], (function (e, t) {
                var n = E.fn[t];
                E.fn[t] = function (e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r)
                }
            })), E.each({
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, (function (e, t) {
                E.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            })), E.timers = [], E.fx.tick = function () {
                var e, t = 0, n = E.timers;
                for (ot = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(), ot = void 0
            }, E.fx.timer = function (e) {
                E.timers.push(e), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function () {
                st || (st = !0, ct())
            }, E.fx.stop = function () {
                st = null
            }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (e, t) {
                return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
                    var r = n.setTimeout(t, e);
                    i.stop = function () {
                        n.clearTimeout(r)
                    }
                }))
            }, function () {
                var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
            }();
            var pt, gt = E.expr.attrHandle;
            E.fn.extend({
                attr: function (e, t) {
                    return U(this, E.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each((function () {
                        E.removeAttr(this, e)
                    }))
                }
            }), E.extend({
                attr: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!m.radioValue && "radio" === t && k(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, i = 0, r = t && t.match(P);
                    if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
                }
            }), pt = {
                set: function (e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var n = gt[t] || E.find.attr;
                gt[t] = function (e, t, i) {
                    var r, o, s = t.toLowerCase();
                    return i || (o = gt[s], gt[s] = r, r = null != n(e, t, i) ? s : null, gt[s] = o), r
                }
            }));
            var mt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;

            function yt(e) {
                return (e.match(P) || []).join(" ")
            }

            function bt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function _t(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
            }

            E.fn.extend({
                prop: function (e, t) {
                    return U(this, E.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each((function () {
                        delete this[E.propFix[e] || e]
                    }))
                }
            }), E.extend({
                prop: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, r = E.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = E.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), m.optSelected || (E.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                E.propFix[this.toLowerCase()] = this
            })), E.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (v(e)) return this.each((function (t) {
                        E(this).addClass(e.call(this, t, bt(this)))
                    }));
                    if ((t = _t(e)).length) for (; n = this[l++];) if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, i, r, o, s, a, l = 0;
                    if (v(e)) return this.each((function (t) {
                        E(this).removeClass(e.call(this, t, bt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = _t(e)).length) for (; n = this[l++];) if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e, i = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
                        E(this).toggleClass(e.call(this, n, bt(this), t), t)
                    })) : this.each((function () {
                        var t, r, o, s;
                        if (i) for (r = 0, o = E(this), s = _t(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = bt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
                    }))
                }, hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var wt = /\r/g;
            E.fn.extend({
                val: function (e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = v(e), this.each((function (n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? e.call(this, n, E(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, (function (e) {
                            return null == e ? "" : e + ""
                        }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    }))) : r ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                }
            }), E.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : yt(E.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type,
                                a = s ? null : [], l = s ? o + 1 : r.length;
                            for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), s) return t;
                                a.push(t)
                            }
                            return a
                        }, set: function (e, t) {
                            for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), E.each(["radio", "checkbox"], (function () {
                E.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                    }
                }, m.checkOn || (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), m.focusin = "onfocusin" in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/, Et = function (e) {
                e.stopPropagation()
            };
            E.extend(E.event, {
                trigger: function (e, t, i, r) {
                    var o, s, a, l, c, u, d, h, p = [i || b], g = f.call(e, "type") ? e.type : e,
                        m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = h = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : E.makeArray(t, [e]), d = E.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                        if (!r && !d.noBubble && !y(i)) {
                            for (l = d.delegateType || g, xt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                            a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
                        }
                        for (o = 0; (s = p[o++]) && !e.isPropagationStopped();) h = s, e.type = o > 1 ? l : d.bindType || g, (u = (X.get(s, "events") || Object.create(null))[e.type] && X.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && G(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = g, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !G(i) || c && v(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), E.event.triggered = g, e.isPropagationStopped() && h.addEventListener(g, Et), i[g](), e.isPropagationStopped() && h.removeEventListener(g, Et), E.event.triggered = void 0, a && (i[c] = a)), e.result
                    }
                }, simulate: function (e, t, n) {
                    var i = E.extend(new E.Event, n, {type: e, isSimulated: !0});
                    E.event.trigger(i, null, t)
                }
            }), E.fn.extend({
                trigger: function (e, t) {
                    return this.each((function () {
                        E.event.trigger(e, t, this)
                    }))
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0)
                }
            }), m.focusin || E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                var n = function (e) {
                    E.event.simulate(t, e.target, E.event.fix(e))
                };
                E.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this, r = X.access(i, t);
                        r || i.addEventListener(e, n, !0), X.access(i, t, (r || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this.document || this, r = X.access(i, t) - 1;
                        r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0), X.remove(i, t))
                    }
                }
            }));
            var Ct = n.location, Tt = {guid: Date.now()}, St = /\?/;
            E.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
            };
            var At = /\[\]$/, Dt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
                Nt = /^(?:input|select|textarea|keygen)/i;

            function Ot(e, t, n, i) {
                var r;
                if (Array.isArray(t)) E.each(t, (function (t, r) {
                    n || At.test(e) ? i(e, r) : Ot(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                })); else if (n || "object" !== x(t)) i(e, t); else for (r in t) Ot(e + "[" + r + "]", t[r], n, i)
            }

            E.param = function (e, t) {
                var n, i = [], r = function (e, t) {
                    var n = v(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function () {
                    r(this.name, this.value)
                })); else for (n in e) Ot(n, e[n], t, r);
                return i.join("&")
            }, E.fn.extend({
                serialize: function () {
                    return E.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map((function () {
                        var e = E.prop(this, "elements");
                        return e ? E.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e))
                    })).map((function (e, t) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) {
                            return {name: t.name, value: e.replace(Dt, "\r\n")}
                        })) : {name: t.name, value: n.replace(Dt, "\r\n")}
                    })).get()
                }
            });
            var $t = /%20/g, jt = /#.*$/, Lt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                qt = /^(?:GET|HEAD)$/, Pt = /^\/\//, Rt = {}, Ht = {}, Mt = "*/".concat("*"), Ft = b.createElement("a");

            function Bt(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0, o = t.toLowerCase().match(P) || [];
                    if (v(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Wt(e, t, n, i) {
                var r = {}, o = e === Ht;

                function s(a) {
                    var l;
                    return r[a] = !0, E.each(e[a] || [], (function (e, a) {
                        var c = a(t, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                    })), l
                }

                return s(t.dataTypes[0]) || !r["*"] && s("*")
            }

            function Ut(e, t) {
                var n, i, r = E.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && E.extend(!0, e, i), e
            }

            Ft.href = Ct.href, E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(Rt),
                ajaxTransport: Bt(Ht),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var i, r, o, s, a, l, c, u, d, h, f = E.ajaxSetup({}, t), p = f.context || f,
                        g = f.context && (p.nodeType || p.jquery) ? E(p) : E.event, m = E.Deferred(),
                        v = E.Callbacks("once memory"), y = f.statusCode || {}, _ = {}, w = {}, x = "canceled", C = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (c) {
                                    if (!s) for (s = {}; t = It.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            }, getAllResponseHeaders: function () {
                                return c ? o : null
                            }, setRequestHeader: function (e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == c && (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (c) C.always(e[C.status]); else for (t in e) y[t] = [y[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || x;
                                return i && i.abort(t), T(0, t), this
                            }
                        };
                    if (m.promise(C), f.url = ((e || f.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = f.url, l.href = l.href, f.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Wt(Rt, f, t, C), c) return C;
                    for (d in (u = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qt.test(f.type), r = f.url.replace(jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace($t, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (St.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Lt, "$1"), h = (St.test(r) ? "&" : "?") + "_=" + Tt.guid++ + h), f.url = r + h), f.ifModified && (E.lastModified[r] && C.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || c)) return C.abort();
                    if (x = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), i = Wt(Ht, f, t, C)) {
                        if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), c) return C;
                        f.async && f.timeout > 0 && (a = n.setTimeout((function () {
                            C.abort("timeout")
                        }), f.timeout));
                        try {
                            c = !1, i.send(_, T)
                        } catch (e) {
                            if (c) throw e;
                            T(-1, e)
                        }
                    } else T(-1, "No Transport");

                    function T(e, t, s, l) {
                        var d, h, b, _, w, x = t;
                        c || (c = !0, a && n.clearTimeout(a), i = void 0, o = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) {
                            for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) for (r in a) if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                            if (l[0] in n) o = l[0]; else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s || (s = r)
                                }
                                o = o || s
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(f, C, s)), !d && E.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {
                        }), _ = function (e, t, n, i) {
                            var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                            if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                }
                                if (!0 !== s) if (s && e.throws) t = s(t); else try {
                                    t = s(t)
                                } catch (e) {
                                    return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
                                }
                            }
                            return {state: "success", data: t}
                        }(f, _, C, d), d ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (E.etag[r] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, h = _.data, d = !(b = _.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || x) + "", d ? m.resolveWith(p, [h, x, C]) : m.rejectWith(p, [C, x, b]), C.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? h : b]), v.fireWith(p, [C, x]), u && (g.trigger("ajaxComplete", [C, f]), --E.active || E.event.trigger("ajaxStop")))
                    }

                    return C
                },
                getJSON: function (e, t, n) {
                    return E.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return E.get(e, void 0, t, "script")
                }
            }), E.each(["get", "post"], (function (e, t) {
                E[t] = function (e, n, i, r) {
                    return v(n) && (r = r || i, i = n, n = void 0), E.ajax(E.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, E.isPlainObject(e) && e))
                }
            })), E.ajaxPrefilter((function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), E._evalUrl = function (e, t, n) {
                return E.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {
                        }
                    },
                    dataFilter: function (e) {
                        E.globalEval(e, t, n)
                    }
                })
            }, E.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                }, wrapInner: function (e) {
                    return v(e) ? this.each((function (t) {
                        E(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = E(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                }, wrap: function (e) {
                    var t = v(e);
                    return this.each((function (n) {
                        E(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                }, unwrap: function (e) {
                    return this.parent(e).not("body").each((function () {
                        E(this).replaceWith(this.childNodes)
                    })), this
                }
            }), E.expr.pseudos.hidden = function (e) {
                return !E.expr.pseudos.visible(e)
            }, E.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, E.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {
                }
            };
            var zt = {0: 200, 1223: 204}, Vt = E.ajaxSettings.xhr();
            m.cors = !!Vt && "withCredentials" in Vt, m.ajax = Vt = !!Vt, E.ajaxTransport((function (e) {
                var t, i;
                if (m.cors || Vt && !e.crossDomain) return {
                    send: function (r, o) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                        t = function (e) {
                            return function () {
                                t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                            }
                        }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                            4 === a.readyState && n.setTimeout((function () {
                                t && i()
                            }))
                        }, t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    }, abort: function () {
                        t && t()
                    }
                }
            })), E.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })), E.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return E.globalEval(e), e
                    }
                }
            }), E.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), E.ajaxTransport("script", (function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function (i, r) {
                        t = E("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), b.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }));
            var Yt, Qt = [], Gt = /(=)\?(?=&|$)|\?\?/;
            E.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Qt.pop() || E.expando + "_" + Tt.guid++;
                    return this[e] = !0, e
                }
            }), E.ajaxPrefilter("json jsonp", (function (e, t, i) {
                var r, o, s,
                    a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return s || E.error(r + " was not called"), s[0]
                }, e.dataTypes[0] = "json", o = n[r], n[r] = function () {
                    s = arguments
                }, i.always((function () {
                    void 0 === o ? E(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Qt.push(r)), s && v(o) && o(s[0]), s = o = void 0
                })), "script"
            })), m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), E.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), o = !n && [], (r = N.exec(e)) ? [t.createElement(r[1])] : (r = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], r.childNodes)));
                var i, r, o
            }, E.fn.load = function (e, t, n) {
                var i, r, o, s = this, a = e.indexOf(" ");
                return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && E.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    o = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
                })).always(n && function (e, t) {
                    s.each((function () {
                        n.apply(this, o || [e.responseText, t, e])
                    }))
                }), this
            }, E.expr.pseudos.animated = function (e) {
                return E.grep(E.timers, (function (t) {
                    return e === t.elem
                })).length
            }, E.offset = {
                setOffset: function (e, t, n) {
                    var i, r, o, s, a, l, c = E.css(e, "position"), u = E(e), d = {};
                    "static" === c && (e.style.position = "relative"), a = u.offset(), o = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
                }
            }, E.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                        E.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n, i = this[0], r = {top: 0, left: 0};
                        if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect(); else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0), r.left += E.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - E.css(i, "marginTop", !0),
                            left: t.left - r.left - E.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                        return e || oe
                    }))
                }
            }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (i) {
                    return U(this, (function (e, i, r) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                    }), e, i, arguments.length)
                }
            })), E.each(["top", "left"], (function (e, t) {
                E.cssHooks[t] = Ve(m.pixelPosition, (function (e, n) {
                    if (n) return n = ze(e, t), Fe.test(n) ? E(e).position()[t] + "px" : n
                }))
            })), E.each({Height: "height", Width: "width"}, (function (e, t) {
                E.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
                    E.fn[i] = function (r, o) {
                        var s = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === o ? "margin" : "border");
                        return U(this, (function (t, n, r) {
                            var o;
                            return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? E.css(t, n, a) : E.style(t, n, r, a)
                        }), t, s ? r : void 0, s)
                    }
                }))
            })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                E.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })), E.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }, hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                E.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            E.proxy = function (e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (r = function () {
                    return e.apply(t || this, i.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || E.guid++, r
            }, E.holdReady = function (e) {
                e ? E.readyWait++ : E.ready(!0)
            }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = k, E.isFunction = v, E.isWindow = y, E.camelCase = Q, E.type = x, E.now = Date.now, E.isNumeric = function (e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, E.trim = function (e) {
                return null == e ? "" : (e + "").replace(Kt, "")
            }, void 0 === (i = function () {
                return E
            }.apply(t, [])) || (e.exports = i);
            var Xt = n.jQuery, Zt = n.$;
            return E.noConflict = function (e) {
                return n.$ === E && (n.$ = Zt), e && n.jQuery === E && (n.jQuery = Xt), E
            }, void 0 === r && (n.jQuery = n.$ = E), E
        }))
    }, SYky: function (e, t, n) {
        /*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
        !function (e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function r(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }

            function o() {
                return (o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e) {
                var n = this, i = !1;
                return t(this).one(a.TRANSITION_END, (function () {
                    i = !0
                })), setTimeout((function () {
                    i || a.triggerTransitionEnd(n)
                }), e), this
            }

            t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
            var a = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                }, getSelectorFromElement: function (e) {
                    var t = e.getAttribute("data-target");
                    if (!t || "#" === t) {
                        var n = e.getAttribute("href");
                        t = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (e) {
                    if (!e) return 0;
                    var n = t(e).css("transition-duration"), i = t(e).css("transition-delay"), r = parseFloat(n),
                        o = parseFloat(i);
                    return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
                }, reflow: function (e) {
                    return e.offsetHeight
                }, triggerTransitionEnd: function (e) {
                    t(e).trigger("transitionend")
                }, supportsTransitionEnd: function () {
                    return Boolean("transitionend")
                }, isElement: function (e) {
                    return (e[0] || e).nodeType
                }, typeCheckConfig: function (e, t, n) {
                    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i], o = t[i],
                            s = o && a.isElement(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                    var l
                }, findShadowRoot: function (e) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        var t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null
                }, jQueryDetection: function () {
                    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var e = t.fn.jquery.split(" ")[0].split(".");
                    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                }
            };
            a.jQueryDetection(), t.fn.emulateTransitionEnd = s, t.event.special[a.TRANSITION_END] = {
                bindType: "transitionend",
                delegateType: "transitionend",
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            };
            var l = "alert", c = t.fn[l], u = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (e) {
                    var n = a.getSelectorFromElement(e), i = !1;
                    return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
                }, n._triggerCloseEvent = function (e) {
                    var n = t.Event("close.bs.alert");
                    return t(e).trigger(n), n
                }, n._removeElement = function (e) {
                    var n = this;
                    if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                        var i = a.getTransitionDurationFromElement(e);
                        t(e).one(a.TRANSITION_END, (function (t) {
                            return n._destroyElement(e, t)
                        })).emulateTransitionEnd(i)
                    } else this._destroyElement(e)
                }, n._destroyElement = function (e) {
                    t(e).detach().trigger("closed.bs.alert").remove()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this), r = i.data("bs.alert");
                        r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                    }))
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.2"
                    }
                }]), e
            }();
            t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u)), t.fn[l] = u._jQueryInterface, t.fn[l].Constructor = u, t.fn[l].noConflict = function () {
                return t.fn[l] = c, u._jQueryInterface
            };
            var d = t.fn.button, h = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.toggle = function () {
                    var e = !0, n = !0, i = t(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var r = this._element.querySelector('input:not([type="hidden"])');
                        if (r) {
                            if ("radio" === r.type) if (r.checked && this._element.classList.contains("active")) e = !1; else {
                                var o = i.querySelector(".active");
                                o && t(o).removeClass("active")
                            }
                            e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.button");
                        i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.2"
                    }
                }]), e
            }();
            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
                var n = e.target, i = n;
                if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault(); else {
                    var r = n.querySelector('input:not([type="hidden"])');
                    if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                    ("LABEL" !== i.tagName || r && "checkbox" !== r.type) && h._jQueryInterface.call(t(n), "toggle")
                }
            })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
                var n = t(e.target).closest(".btn")[0];
                t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
            })), t(window).on("load.bs.button.data-api", (function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                    var i = e[t], r = i.querySelector('input:not([type="hidden"])');
                    r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
                }
                for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
                    var a = e[o];
                    "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
                }
            })), t.fn.button = h._jQueryInterface, t.fn.button.Constructor = h, t.fn.button.noConflict = function () {
                return t.fn.button = d, h._jQueryInterface
            };
            var f = "carousel", p = ".bs.carousel", g = t.fn[f],
                m = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, v = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                }, y = {TOUCH: "touch", PEN: "pen"}, b = function () {
                    function e(e, t) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                    }

                    var n = e.prototype;
                    return n.next = function () {
                        this._isSliding || this._slide("next")
                    }, n.nextWhenVisible = function () {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, n.prev = function () {
                        this._isSliding || this._slide("prev")
                    }, n.pause = function (e) {
                        e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, n.cycle = function (e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, n.to = function (e) {
                        var n = this;
                        this._activeElement = this._element.querySelector(".active.carousel-item");
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
                            return n.to(e)
                        })); else {
                            if (i === e) return this.pause(), void this.cycle();
                            var r = e > i ? "next" : "prev";
                            this._slide(r, this._items[e])
                        }
                    }, n.dispose = function () {
                        t(this._element).off(p), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, n._getConfig = function (e) {
                        return e = o({}, m, e), a.typeCheckConfig(f, e, v), e
                    }, n._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                        }
                    }, n._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
                            return e._keydown(t)
                        })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
                            return e.pause(t)
                        })).on("mouseleave.bs.carousel", (function (t) {
                            return e.cycle(t)
                        })), this._config.touch && this._addTouchEventListeners()
                    }, n._addTouchEventListeners = function () {
                        var e = this;
                        if (this._touchSupported) {
                            var n = function (t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            }, i = function (t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                    return e.cycle(t)
                                }), 500 + e._config.interval))
                            };
                            t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                                return e.preventDefault()
                            })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (e) {
                                return n(e)
                            })), t(this._element).on("pointerup.bs.carousel", (function (e) {
                                return i(e)
                            })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (e) {
                                return n(e)
                            })), t(this._element).on("touchmove.bs.carousel", (function (t) {
                                return function (t) {
                                    t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                                }(t)
                            })), t(this._element).on("touchend.bs.carousel", (function (e) {
                                return i(e)
                            })))
                        }
                    }, n._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, n._getItemIndex = function (e) {
                        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                    }, n._getItemByDirection = function (e, t) {
                        var n = "next" === e, i = "prev" === e, r = this._getItemIndex(t), o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                        var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, n._triggerSlideEvent = function (e, n) {
                        var i = this._getItemIndex(e),
                            r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                            o = t.Event("slide.bs.carousel", {relatedTarget: e, direction: n, from: r, to: i});
                        return t(this._element).trigger(o), o
                    }, n._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                            t(n).removeClass("active");
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass("active")
                        }
                    }, n._slide = function (e, n) {
                        var i, r, o, s = this, l = this._element.querySelector(".active.carousel-item"),
                            c = this._getItemIndex(l), u = n || l && this._getItemByDirection(e, l),
                            d = this._getItemIndex(u), h = Boolean(this._interval);
                        if ("next" === e ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && t(u).hasClass("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                            var f = t.Event("slid.bs.carousel", {relatedTarget: u, direction: o, from: c, to: d});
                            if (t(this._element).hasClass("slide")) {
                                t(u).addClass(r), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                                var p = parseInt(u.getAttribute("data-interval"), 10);
                                p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                var g = a.getTransitionDurationFromElement(l);
                                t(l).one(a.TRANSITION_END, (function () {
                                    t(u).removeClass(i + " " + r).addClass("active"), t(l).removeClass("active " + r + " " + i), s._isSliding = !1, setTimeout((function () {
                                        return t(s._element).trigger(f)
                                    }), 0)
                                })).emulateTransitionEnd(g)
                            } else t(l).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(f);
                            h && this.cycle()
                        }
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var i = t(this).data("bs.carousel"), r = o({}, m, t(this).data());
                            "object" == typeof n && (r = o({}, r, n));
                            var s = "string" == typeof n ? n : r.slide;
                            if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n); else if ("string" == typeof s) {
                                if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                                i[s]()
                            } else r.interval && r.ride && (i.pause(), i.cycle())
                        }))
                    }, e._dataApiClickHandler = function (n) {
                        var i = a.getSelectorFromElement(this);
                        if (i) {
                            var r = t(i)[0];
                            if (r && t(r).hasClass("carousel")) {
                                var s = o({}, t(r).data(), t(this).data()), l = this.getAttribute("data-slide-to");
                                l && (s.interval = !1), e._jQueryInterface.call(t(r), s), l && t(r).data("bs.carousel").to(l), n.preventDefault()
                            }
                        }
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "Default", get: function () {
                            return m
                        }
                    }]), e
                }();
            t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
                    var r = t(e[n]);
                    b._jQueryInterface.call(r, r.data())
                }
            })), t.fn[f] = b._jQueryInterface, t.fn[f].Constructor = b, t.fn[f].noConflict = function () {
                return t.fn[f] = g, b._jQueryInterface
            };
            var _ = "collapse", w = t.fn[_], x = {toggle: !0, parent: ""},
                E = {toggle: "boolean", parent: "(string|element)"}, C = function () {
                    function e(e, t) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                            var o = n[i], s = a.getSelectorFromElement(o),
                                l = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                                    return t === e
                                }));
                            null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }

                    var n = e.prototype;
                    return n.toggle = function () {
                        t(this._element).hasClass("show") ? this.hide() : this.show()
                    }, n.show = function () {
                        var n, i, r = this;
                        if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                            return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                        }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                            var o = t.Event("show.bs.collapse");
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                                var s = this._getDimension();
                                t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                    c = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, (function () {
                                    t(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse")
                                })).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                            }
                        }
                    }, n.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass("show")) {
                            var n = t.Event("hide.bs.collapse");
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                                var r = this._triggerArray.length;
                                if (r > 0) for (var o = 0; o < r; o++) {
                                    var s = this._triggerArray[o], l = a.getSelectorFromElement(s);
                                    null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass("show") || t(s).addClass("collapsed").attr("aria-expanded", !1))
                                }
                                this.setTransitioning(!0), this._element.style[i] = "";
                                var c = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, (function () {
                                    e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                })).emulateTransitionEnd(c)
                            }
                        }
                    }, n.setTransitioning = function (e) {
                        this._isTransitioning = e
                    }, n.dispose = function () {
                        t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, n._getConfig = function (e) {
                        return (e = o({}, x, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(_, e, E), e
                    }, n._getDimension = function () {
                        return t(this._element).hasClass("width") ? "width" : "height"
                    }, n._getParent = function () {
                        var n, i = this;
                        a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(n.querySelectorAll(r));
                        return t(o).each((function (t, n) {
                            i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                        })), n
                    }, n._addAriaAndCollapsedClass = function (e, n) {
                        var i = t(e).hasClass("show");
                        n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                    }, e._getTargetFromElement = function (e) {
                        var t = a.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var i = t(this), r = i.data("bs.collapse"),
                                s = o({}, x, i.data(), "object" == typeof n && n ? n : {});
                            if (!r && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), r || (r = new e(this, s), i.data("bs.collapse", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        }))
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "Default", get: function () {
                            return x
                        }
                    }]), e
                }();
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var n = t(this), i = a.getSelectorFromElement(this), r = [].slice.call(document.querySelectorAll(i));
                t(r).each((function () {
                    var e = t(this), i = e.data("bs.collapse") ? "toggle" : n.data();
                    C._jQueryInterface.call(e, i)
                }))
            })), t.fn[_] = C._jQueryInterface, t.fn[_].Constructor = C, t.fn[_].noConflict = function () {
                return t.fn[_] = w, C._jQueryInterface
            };
            var T = "dropdown", S = t.fn[T], A = new RegExp("38|40|27"), D = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            }, k = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            }, N = function () {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var i = e.prototype;
                return i.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                        var n = t(this._menu).hasClass("show");
                        e._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function (i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                        var r = {relatedTarget: this._element}, o = t.Event("show.bs.dropdown", r),
                            s = e._getParentFromElement(this._element);
                        if (t(s).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar && i) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = s : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", r))
                        }
                    }
                }, i.hide = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                        var n = {relatedTarget: this._element}, i = t.Event("hide.bs.dropdown", n),
                            r = e._getParentFromElement(this._element);
                        t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
                    }
                }, i.dispose = function () {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, i.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, i._addEventListeners = function () {
                    var e = this;
                    t(this._element).on("click.bs.dropdown", (function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    }))
                }, i._getConfig = function (e) {
                    return e = o({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(T, e, this.constructor.DefaultType), e
                }, i._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }, i._getPlacement = function () {
                    var e = t(this._element.parentNode), n = "bottom-start";
                    return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
                }, i._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, i._getOffset = function () {
                    var e = this, t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, i._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: !1}), o({}, e, this._config.popperConfig)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.dropdown");
                        if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, e._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                        var s = e._getParentFromElement(i[r]), a = t(i[r]).data("bs.dropdown"),
                            l = {relatedTarget: i[r]};
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var u = t.Event("hide.bs.dropdown", l);
                                t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
                }, e._getParentFromElement = function (e) {
                    var t, n = a.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (n) {
                    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !A.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                        var i = e._getParentFromElement(this), r = t(i).hasClass("show");
                        if (r || 27 !== n.which) {
                            if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                            var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                                return t(e).is(":visible")
                            }));
                            if (0 !== o.length) {
                                var s = o.indexOf(n.target);
                                38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                            }
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default", get: function () {
                        return D
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return k
                    }
                }]), e
            }();
            t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
                e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle")
            })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
                e.stopPropagation()
            })), t.fn[T] = N._jQueryInterface, t.fn[T].Constructor = N, t.fn[T].noConflict = function () {
                return t.fn[T] = S, N._jQueryInterface
            };
            var O = t.fn.modal, $ = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
                j = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"},
                L = function () {
                    function e(e, t) {
                        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                    }

                    var n = e.prototype;
                    return n.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, n.show = function (e) {
                        var n = this;
                        if (!this._isShown && !this._isTransitioning) {
                            t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                            var i = t.Event("show.bs.modal", {relatedTarget: e});
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                                return n.hide(e)
                            })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                                t(n._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                }))
                            })), this._showBackdrop((function () {
                                return n._showElement(e)
                            })))
                        }
                    }, n.hide = function (e) {
                        var n = this;
                        if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                            var i = t.Event("hide.bs.modal");
                            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = t(this._element).hasClass("fade");
                                if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                                    var o = a.getTransitionDurationFromElement(this._element);
                                    t(this._element).one(a.TRANSITION_END, (function (e) {
                                        return n._hideModal(e)
                                    })).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, n.dispose = function () {
                        [window, this._element, this._dialog].forEach((function (e) {
                            return t(e).off(".bs.modal")
                        })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                    }, n.handleUpdate = function () {
                        this._adjustDialog()
                    }, n._getConfig = function (e) {
                        return e = o({}, $, e), a.typeCheckConfig("modal", e, j), e
                    }, n._triggerBackdropTransition = function () {
                        var e = this;
                        if ("static" === this._config.backdrop) {
                            var n = t.Event("hidePrevented.bs.modal");
                            if (t(this._element).trigger(n), n.defaultPrevented) return;
                            var i = this._element.scrollHeight > document.documentElement.clientHeight;
                            i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                            var r = a.getTransitionDurationFromElement(this._dialog);
                            t(this._element).off(a.TRANSITION_END), t(this._element).one(a.TRANSITION_END, (function () {
                                e._element.classList.remove("modal-static"), i || t(e._element).one(a.TRANSITION_END, (function () {
                                    e._element.style.overflowY = ""
                                })).emulateTransitionEnd(e._element, r)
                            })).emulateTransitionEnd(r), this._element.focus()
                        } else this.hide()
                    }, n._showElement = function (e) {
                        var n = this, i = t(this._element).hasClass("fade"),
                            r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                        var o = t.Event("shown.bs.modal", {relatedTarget: e}), s = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                        };
                        if (i) {
                            var l = a.getTransitionDurationFromElement(this._dialog);
                            t(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(l)
                        } else s()
                    }, n._enforceFocus = function () {
                        var e = this;
                        t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                        }))
                    }, n._setEscapeEvent = function () {
                        var e = this;
                        this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                            e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                        })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                    }, n._setResizeEvent = function () {
                        var e = this;
                        this._isShown ? t(window).on("resize.bs.modal", (function (t) {
                            return e.handleUpdate(t)
                        })) : t(window).off("resize.bs.modal")
                    }, n._hideModal = function () {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
                            t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                        }))
                    }, n._removeBackdrop = function () {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, n._showBackdrop = function (e) {
                        var n = this, i = t(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                            })), i && a.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                            if (!i) return void e();
                            var r = a.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass("show");
                            var o = function () {
                                n._removeBackdrop(), e && e()
                            };
                            if (t(this._element).hasClass("fade")) {
                                var s = a.getTransitionDurationFromElement(this._backdrop);
                                t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o()
                        } else e && e()
                    }, n._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, n._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, n._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, n._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                                i = [].slice.call(document.querySelectorAll(".sticky-top"));
                            t(n).each((function (n, i) {
                                var r = i.style.paddingRight, o = t(i).css("padding-right");
                                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                            })), t(i).each((function (n, i) {
                                var r = i.style.marginRight, o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            }));
                            var r = document.body.style.paddingRight, o = t(document.body).css("padding-right");
                            t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                        }
                        t(document.body).addClass("modal-open")
                    }, n._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                        t(e).each((function (e, n) {
                            var i = t(n).data("padding-right");
                            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                        }));
                        var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each((function (e, n) {
                            var i = t(n).data("margin-right");
                            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                        }));
                        var i = t(document.body).data("padding-right");
                        t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                    }, n._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, e._jQueryInterface = function (n, i) {
                        return this.each((function () {
                            var r = t(this).data("bs.modal"),
                                s = o({}, $, t(this).data(), "object" == typeof n && n ? n : {});
                            if (r || (r = new e(this, s), t(this).data("bs.modal", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n](i)
                            } else s.show && r.show(i)
                        }))
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "Default", get: function () {
                            return $
                        }
                    }]), e
                }();
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
                var n, i = this, r = a.getSelectorFromElement(this);
                r && (n = document.querySelector(r));
                var s = t(n).data("bs.modal") ? "toggle" : o({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(n).one("show.bs.modal", (function (e) {
                    e.isDefaultPrevented() || l.one("hidden.bs.modal", (function () {
                        t(i).is(":visible") && i.focus()
                    }))
                }));
                L._jQueryInterface.call(t(n), s, this)
            })), t.fn.modal = L._jQueryInterface, t.fn.modal.Constructor = L, t.fn.modal.noConflict = function () {
                return t.fn.modal = O, L._jQueryInterface
            };
            var I = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], q = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                }, P = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                R = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

            function H(e, t, n) {
                if (0 === e.length) return e;
                if (n && "function" == typeof n) return n(e);
                for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
                    var i = o[e], s = i.nodeName.toLowerCase();
                    if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes), l = [].concat(t["*"] || [], t[s] || []);
                    a.forEach((function (e) {
                        (function (e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === I.indexOf(n) || Boolean(e.nodeValue.match(P) || e.nodeValue.match(R));
                            for (var i = t.filter((function (e) {
                                return e instanceof RegExp
                            })), r = 0, o = i.length; r < o; r++) if (n.match(i[r])) return !0;
                            return !1
                        })(e, l) || i.removeAttribute(e.nodeName)
                    }))
                }, a = 0, l = o.length; a < l; a++) s(a);
                return i.body.innerHTML
            }

            var M = "tooltip", F = t.fn[M], B = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                W = ["sanitize", "whiteList", "sanitizeFn"], U = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)"
                }, z = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, V = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: q,
                    popperConfig: null
                }, Y = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                }, Q = function () {
                    function e(e, t) {
                        if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }

                    var i = e.prototype;
                    return i.enable = function () {
                        this._isEnabled = !0
                    }, i.disable = function () {
                        this._isEnabled = !1
                    }, i.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, i.toggle = function (e) {
                        if (this._isEnabled) if (e) {
                            var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, i.dispose = function () {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, i.show = function () {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = a.findShadowRoot(this.element),
                                o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !o) return;
                            var s = this.getTipElement(), l = a.getUID(this.constructor.NAME);
                            s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass("fade");
                            var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                u = this._getAttachment(c);
                            this.addAttachmentClass(u);
                            var d = this._getContainer();
                            t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                            var h = function () {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                            };
                            if (t(this.tip).hasClass("fade")) {
                                var f = a.getTransitionDurationFromElement(this.tip);
                                t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(f)
                            } else h()
                        }
                    }, i.hide = function (e) {
                        var n = this, i = this.getTipElement(), r = t.Event(this.constructor.Event.HIDE), o = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                        };
                        if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                            if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                                var s = a.getTransitionDurationFromElement(i);
                                t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o();
                            this._hoverState = ""
                        }
                    }, i.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, i.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, i.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, i.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, i.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                    }, i.setElementContent = function (e, n) {
                        "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = H(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                    }, i.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, i._getPopperConfig = function (e) {
                        var t = this;
                        return o({}, {
                            placement: e,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: ".arrow"},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function (e) {
                                return t._handlePopperPlacementChange(e)
                            }
                        }, this.config.popperConfig)
                    }, i._getOffset = function () {
                        var e = this, t = {};
                        return "function" == typeof this.config.offset ? t.fn = function (t) {
                            return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                        } : t.offset = this.config.offset, t
                    }, i._getContainer = function () {
                        return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                    }, i._getAttachment = function (e) {
                        return z[e.toUpperCase()]
                    }, i._setListeners = function () {
                        var e = this;
                        this.config.trigger.split(" ").forEach((function (n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                                return e.toggle(t)
                            })); else if ("manual" !== n) {
                                var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    r = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, (function (t) {
                                    return e._enter(t)
                                })).on(r, e.config.selector, (function (t) {
                                    return e._leave(t)
                                }))
                            }
                        })), this._hideModalHandler = function () {
                            e.element && e.hide()
                        }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, i._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, i._enter = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                            "show" === n._hoverState && n.show()
                        }), n.config.delay.show) : n.show())
                    }, i._leave = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                            "out" === n._hoverState && n.hide()
                        }), n.config.delay.hide) : n.hide())
                    }, i._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1
                    }, i._getConfig = function (e) {
                        var n = t(this.element).data();
                        return Object.keys(n).forEach((function (e) {
                            -1 !== W.indexOf(e) && delete n[e]
                        })), "number" == typeof (e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(M, e, this.constructor.DefaultType), e.sanitize && (e.template = H(e.template, e.whiteList, e.sanitizeFn)), e
                    }, i._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, i._cleanTipClass = function () {
                        var e = t(this.getTipElement()), n = e.attr("class").match(B);
                        null !== n && n.length && e.removeClass(n.join(""))
                    }, i._handlePopperPlacementChange = function (e) {
                        this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, i._fixTransition = function () {
                        var e = this.getTipElement(), n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var i = t(this).data("bs.tooltip"), r = "object" == typeof n && n;
                            if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]()
                            }
                        }))
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "Default", get: function () {
                            return V
                        }
                    }, {
                        key: "NAME", get: function () {
                            return M
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event", get: function () {
                            return Y
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return ".bs.tooltip"
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return U
                        }
                    }]), e
                }();
            t.fn[M] = Q._jQueryInterface, t.fn[M].Constructor = Q, t.fn[M].noConflict = function () {
                return t.fn[M] = F, Q._jQueryInterface
            };
            var G = "popover", K = t.fn[G], X = new RegExp("(^|\\s)bs-popover\\S+", "g"), Z = o({}, Q.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), J = o({}, Q.DefaultType, {content: "(string|element|function)"}), ee = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            }, te = function (e) {
                var n, i;

                function o() {
                    return e.apply(this, arguments) || this
                }

                i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
                var s = o.prototype;
                return s.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, s.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, s.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                }, s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function () {
                    var e = t(this.getTipElement()), n = e.attr("class").match(X);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, o._jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = t(this).data("bs.popover"), i = "object" == typeof e ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    }))
                }, r(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default", get: function () {
                        return Z
                    }
                }, {
                    key: "NAME", get: function () {
                        return G
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event", get: function () {
                        return ee
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return J
                    }
                }]), o
            }(Q);
            t.fn[G] = te._jQueryInterface, t.fn[G].Constructor = te, t.fn[G].noConflict = function () {
                return t.fn[G] = K, te._jQueryInterface
            };
            var ne = "scrollspy", ie = t.fn[ne], re = {offset: 10, method: "auto", target: ""},
                oe = {offset: "number", method: "string", target: "(string|element)"}, se = function () {
                    function e(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                            return i._process(e)
                        })), this.refresh(), this._process()
                    }

                    var n = e.prototype;
                    return n.refresh = function () {
                        var e = this, n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = "position" === i ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                            var n, o = a.getSelectorFromElement(e);
                            if (o && (n = document.querySelector(o)), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [t(n)[i]().top + r, o]
                            }
                            return null
                        })).filter((function (e) {
                            return e
                        })).sort((function (e, t) {
                            return e[0] - t[0]
                        })).forEach((function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        }))
                    }, n.dispose = function () {
                        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, n._getConfig = function (e) {
                        if ("string" != typeof (e = o({}, re, "object" == typeof e && e ? e : {})).target && a.isElement(e.target)) {
                            var n = t(e.target).attr("id");
                            n || (n = a.getUID(ne), t(e.target).attr("id", n)), e.target = "#" + n
                        }
                        return a.typeCheckConfig(ne, e, oe), e
                    }, n._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, n._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, n._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, n._process = function () {
                        var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, n._activate = function (e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",").map((function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        })), i = t([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: e})
                    }, n._clear = function () {
                        [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                            return e.classList.contains("active")
                        })).forEach((function (e) {
                            return e.classList.remove("active")
                        }))
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var i = t(this).data("bs.scrollspy");
                            if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]()
                            }
                        }))
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "Default", get: function () {
                            return re
                        }
                    }]), e
                }();
            t(window).on("load.bs.scrollspy.data-api", (function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
                    var i = t(e[n]);
                    se._jQueryInterface.call(i, i.data())
                }
            })), t.fn[ne] = se._jQueryInterface, t.fn[ne].Constructor = se, t.fn[ne].noConflict = function () {
                return t.fn[ne] = ie, se._jQueryInterface
            };
            var ae = t.fn.tab, le = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                        var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                            o = a.getSelectorFromElement(this._element);
                        if (r) {
                            var s = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                            i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                        }
                        var l = t.Event("hide.bs.tab", {relatedTarget: this._element}),
                            c = t.Event("show.bs.tab", {relatedTarget: i});
                        if (i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var u = function () {
                                var n = t.Event("hidden.bs.tab", {relatedTarget: e._element}),
                                    r = t.Event("shown.bs.tab", {relatedTarget: i});
                                t(i).trigger(n), t(e._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, u) : u()
                        }
                    }
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (e, n, i) {
                    var r = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                        s = i && o && t(o).hasClass("fade"), l = function () {
                            return r._transitionComplete(e, o, i)
                        };
                    if (o && s) {
                        var c = a.getTransitionDurationFromElement(o);
                        t(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }, n._transitionComplete = function (e, n, i) {
                    if (n) {
                        t(n).removeClass("active");
                        var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                        r && t(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                        var o = t(e).closest(".dropdown")[0];
                        if (o) {
                            var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                            t(s).addClass("active")
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this), r = i.data("bs.tab");
                        if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.2"
                    }
                }]), e
            }();
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
                e.preventDefault(), le._jQueryInterface.call(t(this), "show")
            })), t.fn.tab = le._jQueryInterface, t.fn.tab.Constructor = le, t.fn.tab.noConflict = function () {
                return t.fn.tab = ae, le._jQueryInterface
            };
            var ce = t.fn.toast, ue = {animation: "boolean", autohide: "boolean", delay: "number"},
                de = {animation: !0, autohide: !0, delay: 500}, he = function () {
                    function e(e, t) {
                        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                    }

                    var n = e.prototype;
                    return n.show = function () {
                        var e = this, n = t.Event("show.bs.toast");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                            var i = function () {
                                e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                                    e.hide()
                                }), e._config.delay))
                            };
                            if (this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                                var r = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(r)
                            } else i()
                        }
                    }, n.hide = function () {
                        if (this._element.classList.contains("show")) {
                            var e = t.Event("hide.bs.toast");
                            t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                        }
                    }, n.dispose = function () {
                        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                    }, n._getConfig = function (e) {
                        return e = o({}, de, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                    }, n._setListeners = function () {
                        var e = this;
                        t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                            return e.hide()
                        }))
                    }, n._close = function () {
                        var e = this, n = function () {
                            e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                        };
                        if (this._element.classList.remove("show"), this._config.animation) {
                            var i = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else n()
                    }, n._clearTimeout = function () {
                        clearTimeout(this._timeout), this._timeout = null
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var i = t(this), r = i.data("bs.toast");
                            if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n](this)
                            }
                        }))
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.5.2"
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return ue
                        }
                    }, {
                        key: "Default", get: function () {
                            return de
                        }
                    }]), e
                }();
            t.fn.toast = he._jQueryInterface, t.fn.toast.Constructor = he, t.fn.toast.noConflict = function () {
                return t.fn.toast = ce, he._jQueryInterface
            }, e.Alert = u, e.Button = h, e.Carousel = b, e.Collapse = C, e.Dropdown = N, e.Modal = L, e.Popover = te, e.Scrollspy = se, e.Tab = le, e.Toast = he, e.Tooltip = Q, e.Util = a, Object.defineProperty(e, "__esModule", {value: !0})
        }(t, n("EVdn"), n("8L3F"))
    }, W8rw: function (e, t, n) {
        var i, r, o;
        r = [n("EVdn")], void 0 === (o = "function" == typeof (i = function (e) {
            "use strict";

            function t(e, n) {
                if (!(this instanceof t)) {
                    var i = new t(e, n);
                    return i.open(), i
                }
                this.id = t.id++, this.setup(e, n), this.chainCallbacks(t._callbackChain)
            }

            if (void 0 !== e) if (e.fn.jquery.match(/-ajax/)) "console" in window && window.console.info("Featherlight needs regular jQuery, not the slim version."); else {
                var n = [], i = function (t) {
                    return n = e.grep(n, (function (e) {
                        return e !== t && e.$instance.closest("body").length > 0
                    }))
                }, r = {
                    allow: 1,
                    allowfullscreen: 1,
                    frameborder: 1,
                    height: 1,
                    longdesc: 1,
                    marginheight: 1,
                    marginwidth: 1,
                    mozallowfullscreen: 1,
                    name: 1,
                    referrerpolicy: 1,
                    sandbox: 1,
                    scrolling: 1,
                    src: 1,
                    srcdoc: 1,
                    style: 1,
                    webkitallowfullscreen: 1,
                    width: 1
                }, o = {keyup: "onKeyUp", resize: "onResize"}, s = function (n) {
                    e.each(t.opened().reverse(), (function () {
                        return n.isDefaultPrevented() || !1 !== this[o[n.type]](n) ? void 0 : (n.preventDefault(), n.stopPropagation(), !1)
                    }))
                }, a = function (n) {
                    if (n !== t._globalHandlerInstalled) {
                        t._globalHandlerInstalled = n;
                        var i = e.map(o, (function (e, n) {
                            return n + "." + t.prototype.namespace
                        })).join(" ");
                        e(window)[n ? "on" : "off"](i, s)
                    }
                };
                t.prototype = {
                    constructor: t,
                    namespace: "featherlight",
                    targetAttr: "data-featherlight",
                    variant: null,
                    resetCss: !1,
                    background: null,
                    openTrigger: "click",
                    closeTrigger: "click",
                    filter: null,
                    root: "body",
                    openSpeed: 250,
                    closeSpeed: 250,
                    closeOnClick: "background",
                    closeOnEsc: !0,
                    closeIcon: "&#10005;",
                    loading: "",
                    persist: !1,
                    otherClose: null,
                    beforeOpen: e.noop,
                    beforeContent: e.noop,
                    beforeClose: e.noop,
                    afterOpen: e.noop,
                    afterContent: e.noop,
                    afterClose: e.noop,
                    onKeyUp: e.noop,
                    onResize: e.noop,
                    type: null,
                    contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
                    setup: function (t, n) {
                        "object" != typeof t || t instanceof e != 0 || n || (n = t, t = void 0);
                        var i = e.extend(this, n, {target: t}), r = i.resetCss ? i.namespace + "-reset" : i.namespace,
                            o = e(i.background || ['<div class="' + r + "-loading " + r + '">', '<div class="' + r + '-content">', '<button class="' + r + "-close-icon " + i.namespace + '-close" aria-label="Close">', i.closeIcon, "</button>", '<div class="' + i.namespace + '-inner">' + i.loading + "</div>", "</div>", "</div>"].join("")),
                            s = "." + i.namespace + "-close" + (i.otherClose ? "," + i.otherClose : "");
                        return i.$instance = o.clone().addClass(i.variant), i.$instance.on(i.closeTrigger + "." + i.namespace, (function (t) {
                            if (!t.isDefaultPrevented()) {
                                var n = e(t.target);
                                ("background" === i.closeOnClick && n.is("." + i.namespace) || "anywhere" === i.closeOnClick || n.closest(s).length) && (i.close(t), t.preventDefault())
                            }
                        })), this
                    },
                    getContent: function () {
                        if (!1 !== this.persist && this.$content) return this.$content;
                        var t = this, n = this.constructor.contentFilters, i = function (e) {
                            return t.$currentTarget && t.$currentTarget.attr(e)
                        }, r = i(t.targetAttr), o = t.target || r || "", s = n[t.type];
                        if (!s && o in n && (s = n[o], o = t.target && r), o = o || i("href") || "", !s) for (var a in n) t[a] && (s = n[a], o = t[a]);
                        if (!s) {
                            var l = o;
                            if (o = null, e.each(t.contentFilters, (function () {
                                return (s = n[this]).test && (o = s.test(l)), !o && s.regex && l.match && l.match(s.regex) && (o = l), !o
                            })), !o) return "console" in window && window.console.error("Featherlight: no content filter found " + (l ? ' for "' + l + '"' : " (no target specified)")), !1
                        }
                        return s.process.call(t, o)
                    },
                    setContent: function (t) {
                        return this.$instance.removeClass(this.namespace + "-loading"), this.$instance.toggleClass(this.namespace + "-iframe", t.is("iframe")), this.$instance.find("." + this.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(e.contains(this.$instance[0], t[0]) ? "" : t), this.$content = t.addClass(this.namespace + "-inner"), this
                    },
                    open: function (t) {
                        var i = this;
                        if (i.$instance.hide().appendTo(i.root), !(t && t.isDefaultPrevented() || !1 === i.beforeOpen(t))) {
                            t && t.preventDefault();
                            var r = i.getContent();
                            if (r) return n.push(i), a(!0), i.$instance.fadeIn(i.openSpeed), i.beforeContent(t), e.when(r).always((function (e) {
                                e && (i.setContent(e), i.afterContent(t))
                            })).then(i.$instance.promise()).done((function () {
                                i.afterOpen(t)
                            }))
                        }
                        return i.$instance.detach(), e.Deferred().reject().promise()
                    },
                    close: function (t) {
                        var n = this, r = e.Deferred();
                        return !1 === n.beforeClose(t) ? r.reject() : (0 === i(n).length && a(!1), n.$instance.fadeOut(n.closeSpeed, (function () {
                            n.$instance.detach(), n.afterClose(t), r.resolve()
                        }))), r.promise()
                    },
                    resize: function (e, t) {
                        if (e && t) {
                            this.$content.css("width", "").css("height", "");
                            var n = Math.max(e / (this.$content.parent().width() - 1), t / (this.$content.parent().height() - 1));
                            n > 1 && (n = t / Math.floor(t / n), this.$content.css("width", e / n + "px").css("height", t / n + "px"))
                        }
                    },
                    chainCallbacks: function (t) {
                        for (var n in t) this[n] = e.proxy(t[n], this, e.proxy(this[n], this))
                    }
                }, e.extend(t, {
                    id: 0,
                    autoBind: "[data-featherlight]",
                    defaults: t.prototype,
                    contentFilters: {
                        jquery: {
                            regex: /^[#.]\w/, test: function (t) {
                                return t instanceof e && t
                            }, process: function (t) {
                                return !1 !== this.persist ? e(t) : e(t).clone(!0)
                            }
                        }, image: {
                            regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i, process: function (t) {
                                var n = e.Deferred(), i = new Image,
                                    r = e('<img src="' + t + '" alt="" class="' + this.namespace + '-image" />');
                                return i.onload = function () {
                                    r.naturalWidth = i.width, r.naturalHeight = i.height, n.resolve(r)
                                }, i.onerror = function () {
                                    n.reject(r)
                                }, i.src = t, n.promise()
                            }
                        }, html: {
                            regex: /^\s*<[\w!][^<]*>/, process: function (t) {
                                return e(t)
                            }
                        }, ajax: {
                            regex: /./, process: function (t) {
                                var n = e.Deferred(), i = e("<div></div>").load(t, (function (e, t) {
                                    "error" !== t && n.resolve(i.contents()), n.reject()
                                }));
                                return n.promise()
                            }
                        }, iframe: {
                            process: function (t) {
                                var n = new e.Deferred, i = e("<iframe/>"), o = function (e, t) {
                                    var n = {}, i = new RegExp("^" + t + "([A-Z])(.*)");
                                    for (var r in e) {
                                        var o = r.match(i);
                                        o && (n[(o[1] + o[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = e[r])
                                    }
                                    return n
                                }(this, "iframe"), s = function (e, t) {
                                    var n = {};
                                    for (var i in e) i in t && (n[i] = e[i], delete e[i]);
                                    return n
                                }(o, r);
                                return i.hide().attr("src", t).attr(s).css(o).on("load", (function () {
                                    n.resolve(i.show())
                                })).appendTo(this.$instance.find("." + this.namespace + "-content")), n.promise()
                            }
                        }, text: {
                            process: function (t) {
                                return e("<div>", {text: t})
                            }
                        }
                    },
                    functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
                    readElementConfig: function (t, n) {
                        var i = this, r = new RegExp("^data-" + n + "-(.*)"), o = {};
                        return t && t.attributes && e.each(t.attributes, (function () {
                            var t = this.name.match(r);
                            if (t) {
                                var n = this.value, s = e.camelCase(t[1]);
                                if (e.inArray(s, i.functionAttributes) >= 0) n = new Function(n); else try {
                                    n = JSON.parse(n)
                                } catch (e) {
                                }
                                o[s] = n
                            }
                        })), o
                    },
                    extend: function (t, n) {
                        var i = function () {
                            this.constructor = t
                        };
                        return i.prototype = this.prototype, t.prototype = new i, t.__super__ = this.prototype, e.extend(t, this, n), t.defaults = t.prototype, t
                    },
                    attach: function (t, n, i) {
                        var r = this;
                        "object" != typeof n || n instanceof e != 0 || i || (i = n, n = void 0);
                        var o, s = (i = e.extend({}, i)).namespace || r.defaults.namespace,
                            a = e.extend({}, r.defaults, r.readElementConfig(t[0], s), i), l = function (s) {
                                var l = e(s.currentTarget), c = e.extend({
                                        $source: t,
                                        $currentTarget: l
                                    }, r.readElementConfig(t[0], a.namespace), r.readElementConfig(s.currentTarget, a.namespace), i),
                                    u = o || l.data("featherlight-persisted") || new r(n, c);
                                "shared" === u.persist ? o = u : !1 !== u.persist && l.data("featherlight-persisted", u), c.$currentTarget.blur && c.$currentTarget.blur(), u.open(s)
                            };
                        return t.on(a.openTrigger + "." + a.namespace, a.filter, l), {filter: a.filter, handler: l}
                    },
                    current: function () {
                        var e = this.opened();
                        return e[e.length - 1] || null
                    },
                    opened: function () {
                        var t = this;
                        return i(), e.grep(n, (function (e) {
                            return e instanceof t
                        }))
                    },
                    close: function (e) {
                        var t = this.current();
                        return t ? t.close(e) : void 0
                    },
                    _onReady: function () {
                        var t = this;
                        if (t.autoBind) {
                            var n = e(t.autoBind);
                            n.each((function () {
                                t.attach(e(this))
                            })), e(document).on("click", t.autoBind, (function (i) {
                                if (!i.isDefaultPrevented()) {
                                    var r = e(i.currentTarget);
                                    if (n.length !== (n = n.add(r)).length) {
                                        var o = t.attach(r);
                                        (!o.filter || e(i.target).parentsUntil(r, o.filter).length > 0) && o.handler(i)
                                    }
                                }
                            }))
                        }
                    },
                    _callbackChain: {
                        onKeyUp: function (t, n) {
                            return 27 === n.keyCode ? (this.closeOnEsc && e.featherlight.close(n), !1) : t(n)
                        }, beforeOpen: function (t, n) {
                            return e(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = e("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = e("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map((function (t, n) {
                                return e(n).attr("tabindex")
                            })), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), t(n)
                        }, afterClose: function (n, i) {
                            var r = n(i), o = this;
                            return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each((function (t, n) {
                                e(n).attr("tabindex", o._previousWithTabIndices[t])
                            })), this._previouslyActive.focus(), 0 === t.opened().length && e(document.documentElement).removeClass("with-featherlight"), r
                        }, onResize: function (e, t) {
                            return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), e(t)
                        }, afterContent: function (e, t) {
                            var n = e(t);
                            return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(t), n
                        }
                    }
                }), e.featherlight = t, e.fn.featherlight = function (e, n) {
                    return t.attach(this, e, n), this
                }, e(document).ready((function () {
                    t._onReady()
                }))
            } else "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.")
        }) ? i.apply(t, r) : i) || (e.exports = o)
    }, WyS6: function (e, t, n) {
        (function (e) {
            /*!
 * jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 * https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Author:  chris.dance@papercut.com
 * Version: 1.9.0
 * Date:    13th August 2014
 */
            var t;
            (t = e).fn.areYouSure = function (e) {
                var n = t.extend({
                    message: "You have unsaved changes!",
                    dirtyClass: "dirty",
                    change: null,
                    silent: !1,
                    addRemoveFieldsMarksDirty: !1,
                    fieldEvents: "change keyup propertychange input",
                    fieldSelector: ":input:not(input[type=submit]):not(input[type=button])"
                }, e), i = function (e) {
                    if (e.hasClass("ays-ignore") || e.hasClass("aysIgnore") || e.attr("data-ays-ignore") || void 0 === e.attr("name")) return null;
                    if (e.is(":disabled")) return "ays-disabled";
                    var n, i = e.attr("type");
                    switch (e.is("select") && (i = "select"), i) {
                        case"checkbox":
                        case"radio":
                            n = e.is(":checked");
                            break;
                        case"select":
                            n = "", e.find("option").each((function (e) {
                                var i = t(this);
                                i.is(":selected") && (n += i.val())
                            }));
                            break;
                        default:
                            n = e.val()
                    }
                    return n
                }, r = function (e) {
                    e.data("ays-orig", i(e))
                }, o = function (e) {
                    var r = function (e) {
                        var t = e.data("ays-orig");
                        return void 0 !== t && i(e) != t
                    }, o = t(this).is("form") ? t(this) : t(this).parents("form");
                    if (r(t(e.target))) a(o, !0); else {
                        if ($fields = o.find(n.fieldSelector), n.addRemoveFieldsMarksDirty && o.data("ays-orig-field-count") != $fields.length) return void a(o, !0);
                        var s = !1;
                        $fields.each((function () {
                            if ($field = t(this), r($field)) return s = !0, !1
                        })), a(o, s)
                    }
                }, s = function (e) {
                    var i = e.find(n.fieldSelector);
                    t(i).each((function () {
                        r(t(this))
                    })), t(i).unbind(n.fieldEvents, o), t(i).bind(n.fieldEvents, o), e.data("ays-orig-field-count", t(i).length), a(e, !1)
                }, a = function (e, t) {
                    var i = t != e.hasClass(n.dirtyClass);
                    e.toggleClass(n.dirtyClass, t), i && (n.change && n.change.call(e, e), t && e.trigger("dirty.areYouSure", [e]), t || e.trigger("clean.areYouSure", [e]), e.trigger("change.areYouSure", [e]))
                }, l = function () {
                    var e = t(this), i = e.find(n.fieldSelector);
                    t(i).each((function () {
                        var e = t(this);
                        e.data("ays-orig") || (r(e), e.bind(n.fieldEvents, o))
                    })), e.trigger("checkform.areYouSure")
                }, c = function () {
                    s(t(this))
                };
                return n.silent || window.aysUnloadSet || (window.aysUnloadSet = !0, t(window).bind("beforeunload", (function () {
                    if ($dirtyForms = t("form").filter("." + n.dirtyClass), 0 != $dirtyForms.length) {
                        if (navigator.userAgent.toLowerCase().match(/msie|chrome/)) {
                            if (window.aysHasPrompted) return;
                            window.aysHasPrompted = !0, window.setTimeout((function () {
                                window.aysHasPrompted = !1
                            }), 900)
                        }
                        return n.message
                    }
                }))), this.each((function (e) {
                    if (t(this).is("form")) {
                        var i = t(this);
                        i.submit((function () {
                            i.removeClass(n.dirtyClass)
                        })), i.bind("reset", (function () {
                            a(i, !1)
                        })), i.bind("rescan.areYouSure", l), i.bind("reinitialize.areYouSure", c), i.bind("checkform.areYouSure", o), s(i)
                    }
                }))
            }
        }).call(this, n("EVdn"))
    }, XENs: function (e, t, n) {
    }, ng4s: function (e, t, n) {
        "use strict";
        n.r(t), function (e, t) {
            n("SYky"), n("C6pt"), n("WyS6"), n("W8rw"), n("2hVI"), n("DjPg");

            function i() {
                t('[data-widget="select2"]:not(.select2-hidden-accessible)').each((function () {
                    var e = t(this), n = e.data("ea-autocomplete-endpoint-url"), i = e.data("allow-clear");
                    void 0 === n ? e.select2({
                        theme: "bootstrap",
                        placeholder: "",
                        allowClear: !0
                    }) : e.select2({
                        theme: "bootstrap",
                        ajax: {
                            url: n, dataType: "json", delay: 250, data: function (e) {
                                return {query: e.term, page: e.page}
                            }, processResults: function (e, n) {
                                return {
                                    results: t.map(e.results, (function (e) {
                                        return {id: e.entityId, text: e.entityAsString}
                                    })), pagination: {more: e.has_next_page}
                                }
                            }, cache: !0
                        },
                        placeholder: "",
                        allowClear: i,
                        minimumInputLength: 1
                    })
                }))
            }

            n("XENs"), e.$ = e.jQuery = n("EVdn"), window.addEventListener("load", (function () {
                var e;
                t('[data-toggle="popover"]').popover(), t('[data-toggle="tooltip"]').tooltip(), e = function () {
                    var e = t(this);
                    e.closest(".form-group").find('select, input[type="date"], input[type="time"], input[type="datetime-local"]').each((function () {
                        var n = e.is(":checked");
                        t(this).prop("disabled", n), n ? t(this).closest(".datetime-widget").slideUp({duration: 200}) : t(this).closest(".datetime-widget").slideDown({duration: 200})
                    }))
                }, t(".nullable-control :checkbox").bind("change", e).each(e), i(), document.addEventListener("ea.collection.item-added", i), function () {
                    var e = document.getElementById("sidebar-resizer-handler"),
                        t = document.getElementById("content-resizer-handler");
                    null !== e && e.addEventListener("click", (function () {
                        var e = localStorage.getItem("ea/sidebar/width") || "normal",
                            t = "normal" == e ? "compact" : "normal";
                        document.querySelector("body").classList.remove("ea-sidebar-width-" + e), document.querySelector("body").classList.add("ea-sidebar-width-" + t), localStorage.setItem("ea/sidebar/width", t)
                    }));
                    null !== t && t.addEventListener("click", (function () {
                        var e = localStorage.getItem("ea/content/width") || "normal",
                            t = "normal" == e ? "full" : "normal";
                        document.querySelector("body").classList.remove("ea-content-width-" + e), document.querySelector("body").classList.add("ea-content-width-" + t), localStorage.setItem("ea/content/width", t)
                    }))
                }(), function () {
                    var e, t = document.getElementById("navigation-toggler"), n = "ea-mobile-sidebar-visible";
                    if (null === t) return;
                    t.addEventListener("click", (function () {
                        document.querySelector("body").classList.toggle(n), document.querySelector("body").classList.contains(n) ? ((e = document.createElement("div")).classList.add("modal-backdrop", "fade", "show"), e.onclick = function () {
                            document.querySelector("body").classList.remove(n), document.body.removeChild(e), e = null
                        }, document.body.appendChild(e)) : e && (document.body.removeChild(e), e = null)
                    }))
                }(), t(document).on("change", ".ea-fileupload input[type=file].custom-file-input", (function () {
                    if (0 !== this.files.length) {
                        var e = "";
                        e = 1 === this.files.length ? this.files[0].name : this.files.length + " " + t(this).data("files-label");
                        for (var n = 0, i = 0; i < this.files.length; i++) n += this.files[i].size;
                        var r = t(this).closest(".ea-fileupload");
                        r.find(".custom-file-label").text(e), r.find(".input-group-text").text(function (e) {
                            var t = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
                            return parseInt(e / Math.pow(1024, t)) + ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"][t]
                        }(n)).show(), r.find(".ea-fileupload-delete-btn").show()
                    }
                })), t(document).on("click", ".ea-fileupload .ea-fileupload-delete-btn", (function () {
                    var e = t(this).closest(".ea-fileupload");
                    e.find("input").val("").removeAttr("title"), e.find(".custom-file-label").text(""), e.find(".input-group-text").text("").hide(), e.find(".fileupload-list").hide(), t(this).hide()
                }))
            }))
        }.call(this, n("yLpj"), n("EVdn"))
    }, yLpj: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
});