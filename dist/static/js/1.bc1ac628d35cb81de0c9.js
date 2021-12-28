webpackJsonp([1], {
  NlzQ: function (e, t) {
  }, ao80: function (e, t) {
  }, b5Js: function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = s("Dd8w"), a = s.n(i), n = "undefined" == typeof document ? {
      body: {}, addEventListener: function () {
      }, removeEventListener: function () {
      }, activeElement: {
        blur: function () {
        }, nodeName: ""
      }, querySelector: function () {
        return null
      }, querySelectorAll: function () {
        return []
      }, getElementById: function () {
        return null
      }, createEvent: function () {
        return {
          initEvent: function () {
          }
        }
      }, createElement: function () {
        return {
          children: [], childNodes: [], style: {}, setAttribute: function () {
          }, getElementsByTagName: function () {
            return []
          }
        }
      }, location: {hash: ""}
    } : document, r = "undefined" == typeof window ? {
      document: n,
      navigator: {userAgent: ""},
      location: {},
      history: {},
      CustomEvent: function () {
        return this
      },
      addEventListener: function () {
      },
      removeEventListener: function () {
      },
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return ""
          }
        }
      },
      Image: function () {
      },
      Date: function () {
      },
      screen: {},
      setTimeout: function () {
      },
      clearTimeout: function () {
      }
    } : window;

    class o {
      constructor(e) {
        const t = this;
        for (let s = 0; s < e.length; s += 1) t[s] = e[s];
        return t.length = e.length, this
      }
    }

    function l(e, t) {
      const s = [];
      let i = 0;
      if (e && !t && e instanceof o) return e;
      if (e) if ("string" == typeof e) {
        let a, r;
        const o = e.trim();
        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          let e = "div";
          for (0 === o.indexOf("<li") && (e = "ul"), 0 === o.indexOf("<tr") && (e = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (e = "tr"), 0 === o.indexOf("<tbody") && (e = "table"), 0 === o.indexOf("<option") && (e = "select"), (r = n.createElement(e)).innerHTML = o, i = 0; i < r.childNodes.length; i += 1) s.push(r.childNodes[i])
        } else for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim()) : [n.getElementById(e.trim().split("#")[1])], i = 0; i < a.length; i += 1) a[i] && s.push(a[i])
      } else if (e.nodeType || e === r || e === n) s.push(e); else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) s.push(e[i]);
      return new o(s)
    }

    function d(e) {
      const t = [];
      for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
      return t
    }

    l.fn = o.prototype, l.Class = o, l.Dom7 = o;
    "resize scroll".split(" ");
    const c = {
      addClass: function (e) {
        if (void 0 === e) return this;
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[e]);
        return this
      }, removeClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[e]);
        return this
      }, hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e)
      }, toggleClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[e]);
        return this
      }, attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
        return this
      }, removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this
      }, data: function (e, t) {
        let s;
        if (void 0 !== t) {
          for (let i = 0; i < this.length; i += 1) (s = this[i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
          return this
        }
        if (s = this[0]) {
          if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
          const t = s.getAttribute(`data-${e}`);
          return t || void 0
        }
      }, transform: function (e) {
        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          s.webkitTransform = e, s.transform = e
        }
        return this
      }, transition: function (e) {
        "string" != typeof e && (e = `${e}ms`);
        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          s.webkitTransitionDuration = e, s.transitionDuration = e
        }
        return this
      }, on: function (...e) {
        let [t, s, i, a] = e;

        function n(e) {
          const t = e.target;
          if (!t) return;
          const a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), l(t).is(s)) i.apply(t, a); else {
            const e = l(t).parents();
            for (let t = 0; t < e.length; t += 1) l(e[t]).is(s) && i.apply(e[t], a)
          }
        }

        function r(e) {
          const t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
        }

        "function" == typeof e[1] && ([t, i, a] = e, s = void 0), a || (a = !1);
        const o = t.split(" ");
        let d;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s) for (d = 0; d < o.length; d += 1) {
            const e = o[d];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
              listener: i,
              proxyListener: n
            }), t.addEventListener(e, n, a)
          } else for (d = 0; d < o.length; d += 1) {
            const e = o[d];
            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
              listener: i,
              proxyListener: r
            }), t.addEventListener(e, r, a)
          }
        }
        return this
      }, off: function (...e) {
        let [t, s, i, a] = e;
        "function" == typeof e[1] && ([t, i, a] = e, s = void 0), a || (a = !1);
        const n = t.split(" ");
        for (let e = 0; e < n.length; e += 1) {
          const t = n[e];
          for (let e = 0; e < this.length; e += 1) {
            const n = this[e];
            let r;
            if (!s && n.dom7Listeners ? r = n.dom7Listeners[t] : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]), r && r.length) for (let e = r.length - 1; e >= 0; e -= 1) {
              const s = r[e];
              i && s.listener === i ? (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1)) : i || (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1))
            }
          }
        }
        return this
      }, trigger: function (...e) {
        const t = e[0].split(" "), s = e[1];
        for (let i = 0; i < t.length; i += 1) {
          const a = t[i];
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];
            let o;
            try {
              o = new r.CustomEvent(a, {detail: s, bubbles: !0, cancelable: !0})
            } catch (e) {
              (o = n.createEvent("Event")).initEvent(a, !0, !0), o.detail = s
            }
            i.dom7EventData = e.filter((e, t) => t > 0), i.dispatchEvent(o), i.dom7EventData = [], delete i.dom7EventData
          }
        }
        return this
      }, transitionEnd: function (e) {
        const t = ["webkitTransitionEnd", "transitionend"], s = this;
        let i;

        function a(n) {
          if (n.target === this) for (e.call(this, n), i = 0; i < t.length; i += 1) s.off(t[i], a)
        }

        if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
        return this
      }, outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      }, outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      }, offset: function () {
        if (this.length > 0) {
          const e = this[0], t = e.getBoundingClientRect(), s = n.body, i = e.clientTop || s.clientTop || 0,
            a = e.clientLeft || s.clientLeft || 0, o = e === r ? r.scrollY : e.scrollTop,
            l = e === r ? r.scrollX : e.scrollLeft;
          return {top: t.top + o - i, left: t.left + l - a}
        }
        return null
      }, css: function (e, t) {
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1) for (let t in e) this[s].style[t] = e[t];
            return this
          }
          if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this
        }
        return this
      }, each: function (e) {
        if (!e) return this;
        for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
        return this
      }, html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      }, text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this
      }, is: function (e) {
        const t = this[0];
        let s, i;
        if (!t || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (t.matches) return t.matches(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);
          for (s = l(e), i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
          return !1
        }
        if (e === n) return t === n;
        if (e === r) return t === r;
        if (e.nodeType || e instanceof o) {
          for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
          return !1
        }
        return !1
      }, index: function () {
        let e, t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e
        }
      }, eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        let s;
        return new o(e > t - 1 ? [] : e < 0 ? (s = t + e) < 0 ? [] : [this[s]] : [this[e]])
      }, append: function (...e) {
        let t;
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
            const s = n.createElement("div");
            for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
          } else if (t instanceof o) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]); else this[e].appendChild(t)
        }
        return this
      }, prepend: function (e) {
        let t, s;
        for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
          const i = n.createElement("div");
          for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
        } else if (e instanceof o) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
        return this
      }, next: function (e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && l(this[0].nextElementSibling).is(e) ? new o([this[0].nextElementSibling]) : new o([]) : this[0].nextElementSibling ? new o([this[0].nextElementSibling]) : new o([]) : new o([])
      }, nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return new o([]);
        for (; s.nextElementSibling;) {
          const i = s.nextElementSibling;
          e ? l(i).is(e) && t.push(i) : t.push(i), s = i
        }
        return new o(t)
      }, prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e ? t.previousElementSibling && l(t.previousElementSibling).is(e) ? new o([t.previousElementSibling]) : new o([]) : t.previousElementSibling ? new o([t.previousElementSibling]) : new o([])
        }
        return new o([])
      }, prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return new o([]);
        for (; s.previousElementSibling;) {
          const i = s.previousElementSibling;
          e ? l(i).is(e) && t.push(i) : t.push(i), s = i
        }
        return new o(t)
      }, parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? l(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
        return l(d(t))
      }, parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i;) e ? l(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
        }
        return l(d(t))
      }, closest: function (e) {
        let t = this;
        return void 0 === e ? new o([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      }, find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e])
        }
        return new o(t)
      }, children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].childNodes;
          for (let s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && l(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s])
        }
        return new o(d(t))
      }, remove: function () {
        for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      }, add: function (...e) {
        const t = this;
        let s, i;
        for (s = 0; s < e.length; s += 1) {
          const a = l(e[s]);
          for (i = 0; i < a.length; i += 1) t[t.length] = a[i], t.length += 1
        }
        return t
      }, styles: function () {
        return this[0] ? r.getComputedStyle(this[0], null) : {}
      }
    };
    Object.keys(c).forEach(e => {
      l.fn[e] = c[e]
    });
    const p = {
      deleteProps(e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null
          } catch (e) {
          }
          try {
            delete t[e]
          } catch (e) {
          }
        })
      }, nextTick: (e, t = 0) => setTimeout(e, t), now: () => Date.now(), getTranslate(e, t = "x") {
        let s, i, a;
        const n = r.getComputedStyle(e, null);
        return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix("none" === i ? "" : i)) : s = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = r.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
      }, parseUrlQuery(e) {
        const t = {};
        let s, i, a, n, o = e || r.location.href;
        if ("string" == typeof o && o.length) for (n = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length, s = 0; s < n; s += 1) a = i[s].replace(/#\S+/g, "").split("="), t[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
        return t
      }, isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object, extend(...e) {
        const t = Object(e[0]);
        for (let s = 1; s < e.length; s += 1) {
          const i = e[s];
          if (void 0 !== i && null !== i) {
            const e = Object.keys(Object(i));
            for (let s = 0, a = e.length; s < a; s += 1) {
              const a = e[s], n = Object.getOwnPropertyDescriptor(i, a);
              void 0 !== n && n.enumerable && (p.isObject(t[a]) && p.isObject(i[a]) ? p.extend(t[a], i[a]) : !p.isObject(t[a]) && p.isObject(i[a]) ? (t[a] = {}, p.extend(t[a], i[a])) : t[a] = i[a])
            }
          }
        }
        return t
      }
    }, h = function () {
      const e = n.createElement("div");
      return {
        touch: r.Modernizr && !0 === r.Modernizr.touch || !!("ontouchstart" in r || r.DocumentTouch && n instanceof r.DocumentTouch),
        pointerEvents: !(!r.navigator.pointerEnabled && !r.PointerEvent),
        prefixedPointerEvents: !!r.navigator.msPointerEnabled,
        transition: function () {
          const t = e.style;
          return "transition" in t || "webkitTransition" in t || "MozTransition" in t
        }(),
        transforms3d: r.Modernizr && !0 === r.Modernizr.csstransforms3d || function () {
          const t = e.style;
          return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
        }(),
        flexbox: function () {
          const t = e.style,
            s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
          for (let e = 0; e < s.length; e += 1) if (s[e] in t) return !0;
          return !1
        }(),
        observer: "MutationObserver" in r || "WebkitMutationObserver" in r,
        passiveListener: function () {
          let e = !1;
          try {
            const t = Object.defineProperty({}, "passive", {
              get() {
                e = !0
              }
            });
            r.addEventListener("testPassiveListener", null, t)
          } catch (e) {
          }
          return e
        }(),
        gestures: "ongesturestart" in r
      }
    }();

    class u {
      constructor(e = {}) {
        const t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
          t.on(e, t.params.on[e])
        })
      }

      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return e.split(" ").forEach(e => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
        }), i
      }

      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        return i.on(e, function s(...a) {
          t.apply(i, a), i.off(e, s)
        }, s)
      }

      off(e, t) {
        const s = this;
        return s.eventsListeners ? (e.split(" ").forEach(e => {
          void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e].forEach((i, a) => {
            i === t && s.eventsListeners[e].splice(a, 1)
          })
        }), s) : s
      }

      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, i, a;
        return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), a = t) : (s = e[0].events, i = e[0].data, a = e[0].context || t), (Array.isArray(s) ? s : s.split(" ")).forEach(e => {
          if (t.eventsListeners && t.eventsListeners[e]) {
            const s = [];
            t.eventsListeners[e].forEach(e => {
              s.push(e)
            }), s.forEach(e => {
              e.apply(a, i)
            })
          }
        }), t
      }

      useModulesParams(e) {
        const t = this;
        t.modules && Object.keys(t.modules).forEach(s => {
          const i = t.modules[s];
          i.params && p.extend(e, i.params)
        })
      }

      useModules(e = {}) {
        const t = this;
        t.modules && Object.keys(t.modules).forEach(s => {
          const i = t.modules[s], a = e[s] || {};
          i.instance && Object.keys(i.instance).forEach(e => {
            const s = i.instance[e];
            t[e] = "function" == typeof s ? s.bind(t) : s
          }), i.on && t.on && Object.keys(i.on).forEach(e => {
            t.on(e, i.on[e])
          }), i.create && i.create.bind(t)(a)
        })
      }

      static set components(e) {
        this.use && this.use(e)
      }

      static installModule(e, ...t) {
        const s = this;
        s.prototype.modules || (s.prototype.modules = {});
        const i = e.name || `${Object.keys(s.prototype.modules).length}_${p.now()}`;
        return s.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(t => {
          s.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(t => {
          s[t] = e.static[t]
        }), e.install && e.install.apply(s, t), s
      }

      static use(e, ...t) {
        const s = this;
        return Array.isArray(e) ? (e.forEach(e => s.installModule(e)), s) : s.installModule(e, ...t)
      }
    }

    var g = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), p.extend(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        }))
      }, updateSlides: function () {
        const e = this, t = e.params, {$wrapperEl: s, size: i, rtlTranslate: a, wrongRTL: n} = e,
          o = e.virtual && t.virtual.enabled, l = o ? e.virtual.slides.length : e.slides.length,
          d = s.children(`.${e.params.slideClass}`), c = o ? e.virtual.slides.length : d.length;
        let u = [];
        const g = [], m = [];
        let f = t.slidesOffsetBefore;
        "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
        let v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length, w = e.snapGrid.length;
        let y, x, C = t.spaceBetween, T = -f, E = 0, S = 0;
        if (void 0 === i) return;
        "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * i), e.virtualSize = -C, a ? d.css({
          marginLeft: "",
          marginTop: ""
        }) : d.css({
          marginRight: "",
          marginBottom: ""
        }), t.slidesPerColumn > 1 && (y = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
        const I = t.slidesPerColumn, M = y / I, $ = M - (t.slidesPerColumn * M - c);
        for (let s = 0; s < c; s += 1) {
          x = 0;
          const a = d.eq(s);
          if (t.slidesPerColumn > 1) {
            let i, n, r;
            "column" === t.slidesPerColumnFill ? (r = s - (n = Math.floor(s / I)) * I, (n > $ || n === $ && r === I - 1) && (r += 1) >= I && (r = 0, n += 1), i = n + r * y / I, a.css({
              "-webkit-box-ordinal-group": i,
              "-moz-box-ordinal-group": i,
              "-ms-flex-order": i,
              "-webkit-order": i,
              order: i
            })) : n = s - (r = Math.floor(s / M)) * M, a.css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== r && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", n).attr("data-swiper-row", r)
          }
          if ("none" !== a.css("display")) {
            if ("auto" === t.slidesPerView) {
              const s = r.getComputedStyle(a[0], null), i = a[0].style.transform, n = a[0].style.webkitTransform;
              i && (a[0].style.transform = "none"), n && (a[0].style.webkitTransform = "none"), x = e.isHorizontal() ? a[0].getBoundingClientRect().width + parseFloat(s.getPropertyValue("margin-left")) + parseFloat(s.getPropertyValue("margin-right")) : a[0].getBoundingClientRect().height + parseFloat(s.getPropertyValue("margin-top")) + parseFloat(s.getPropertyValue("margin-bottom")), i && (a[0].style.transform = i), n && (a[0].style.webkitTransform = n), t.roundLengths && (x = Math.floor(x))
            } else x = (i - (t.slidesPerView - 1) * C) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), d[s] && (e.isHorizontal() ? d[s].style.width = `${x}px` : d[s].style.height = `${x}px`);
            d[s] && (d[s].swiperSlideSize = x), m.push(x), t.centeredSlides ? (T = T + x / 2 + E / 2 + C, 0 === E && 0 !== s && (T = T - i / 2 - C), 0 === s && (T = T - i / 2 - C), Math.abs(T) < .001 && (T = 0), t.roundLengths && (T = Math.floor(T)), S % t.slidesPerGroup == 0 && u.push(T), g.push(T)) : (t.roundLengths && (T = Math.floor(T)), S % t.slidesPerGroup == 0 && u.push(T), g.push(T), T = T + x + C), e.virtualSize += x + C, E = x, S += 1
          }
        }
        let z;
        if (e.virtualSize = Math.max(e.virtualSize, i) + v, a && n && ("slide" === t.effect || "coverflow" === t.effect) && s.css({width: `${e.virtualSize + t.spaceBetween}px`}), h.flexbox && !t.setWrapperSize || (e.isHorizontal() ? s.css({width: `${e.virtualSize + t.spaceBetween}px`}) : s.css({height: `${e.virtualSize + t.spaceBetween}px`})), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * y, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({width: `${e.virtualSize + t.spaceBetween}px`}) : s.css({height: `${e.virtualSize + t.spaceBetween}px`}), t.centeredSlides)) {
          z = [];
          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            t.roundLengths && (i = Math.floor(i)), u[s] < e.virtualSize + u[0] && z.push(i)
          }
          u = z
        }
        if (!t.centeredSlides) {
          z = [];
          for (let s = 0; s < u.length; s += 1) {
            let a = u[s];
            t.roundLengths && (a = Math.floor(a)), u[s] <= e.virtualSize - i && z.push(a)
          }
          u = z, Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - i)
        }
        0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? d.css({marginLeft: `${C}px`}) : d.css({marginRight: `${C}px`}) : d.css({marginBottom: `${C}px`})), p.extend(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: g,
          slidesSizesGrid: m
        }), c !== l && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== w && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
      }, updateAutoHeight: function (e) {
        const t = this, s = [];
        let i, a = 0;
        if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          const e = t.activeIndex + i;
          if (e > t.slides.length) break;
          s.push(t.slides.eq(e)[0])
        } else s.push(t.slides.eq(t.activeIndex)[0]);
        for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          a = e > a ? e : a
        }
        a && t.$wrapperEl.css("height", `${a}px`)
      }, updateSlidesOffset: function () {
        const e = this, t = e.slides;
        for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
      }, updateSlidesProgress: function (e = this && this.translate || 0) {
        const t = this, s = t.params, {slides: i, rtlTranslate: a} = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        a && (n = e), i.removeClass(s.slideVisibleClass);
        for (let e = 0; e < i.length; e += 1) {
          const r = i[e],
            o = (n + (s.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + s.spaceBetween);
          if (s.watchSlidesVisibility) {
            const a = -(n - r.swiperSlideOffset), o = a + t.slidesSizesGrid[e];
            (a >= 0 && a < t.size || o > 0 && o <= t.size || a <= 0 && o >= t.size) && i.eq(e).addClass(s.slideVisibleClass)
          }
          r.progress = a ? -o : o
        }
      }, updateProgress: function (e = this && this.translate || 0) {
        const t = this, s = t.params, i = t.maxTranslate() - t.minTranslate();
        let {progress: a, isBeginning: n, isEnd: r} = t;
        const o = n, l = r;
        0 === i ? (a = 0, n = !0, r = !0) : (n = (a = (e - t.minTranslate()) / i) <= 0, r = a >= 1), p.extend(t, {
          progress: a,
          isBeginning: n,
          isEnd: r
        }), (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !n || l && !r) && t.emit("fromEdge"), t.emit("progress", a)
      }, updateSlidesClasses: function () {
        const e = this, {slides: t, params: s, $wrapperEl: i, activeIndex: a, realIndex: n} = e,
          r = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), (o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)).addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop && 0 === l.length && (l = t.eq(0)).addClass(s.slideNextClass);
        let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass))
      }, updateActiveIndex: function (e) {
        const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
          slidesGrid: i,
          snapGrid: a,
          params: n,
          activeIndex: r,
          realIndex: o,
          snapIndex: l
        } = t;
        let d, c = e;
        if (void 0 === c) {
          for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
          n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
        }
        if ((d = a.indexOf(s) >= 0 ? a.indexOf(s) : Math.floor(c / n.slidesPerGroup)) >= a.length && (d = a.length - 1), c === r) return void (d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
        const h = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
        p.extend(t, {
          snapIndex: d,
          realIndex: h,
          previousIndex: r,
          activeIndex: c
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== h && t.emit("realIndexChange"), t.emit("slideChange")
      }, updateClickedSlide: function (e) {
        const t = this, s = t.params, i = l(e.target).closest(`.${s.slideClass}`)[0];
        let a = !1;
        if (i) for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === i && (a = !0);
        if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(l(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = l(i).index(), s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
      }
    };
    var m = {
      getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
        const {params: t, rtlTranslate: s, translate: i, $wrapperEl: a} = this;
        if (t.virtualTranslate) return s ? -i : i;
        let n = p.getTranslate(a[0], e);
        return s && (n = -n), n || 0
      }, setTranslate: function (e, t) {
        const s = this, {rtlTranslate: i, params: a, $wrapperEl: n, progress: r} = s;
        let o, l = 0, d = 0;
        s.isHorizontal() ? l = i ? -e : e : d = e, a.roundLengths && (l = Math.floor(l), d = Math.floor(d)), a.virtualTranslate || (h.transforms3d ? n.transform(`translate3d(${l}px, ${d}px, 0px)`) : n.transform(`translate(${l}px, ${d}px)`)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d;
        const c = s.maxTranslate() - s.minTranslate();
        (o = 0 === c ? 0 : (e - s.minTranslate()) / c) !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
      }, minTranslate: function () {
        return -this.snapGrid[0]
      }, maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      }
    };
    var f = {
      setTransition: function (e, t) {
        this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
      }, transitionStart: function (e = !0, t) {
        const s = this, {activeIndex: i, params: a, previousIndex: n} = s;
        a.autoHeight && s.updateAutoHeight();
        let r = t;
        if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionStart"), e && i !== n) {
          if ("reset" === r) return void s.emit("slideResetTransitionStart");
          s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart")
        }
      }, transitionEnd: function (e = !0, t) {
        const s = this, {activeIndex: i, previousIndex: a} = s;
        s.animating = !1, s.setTransition(0);
        let n = t;
        if (n || (n = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionEnd"), e && i !== a) {
          if ("reset" === n) return void s.emit("slideResetTransitionEnd");
          s.emit("slideChangeTransitionEnd"), "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
        }
      }
    };
    var v = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i) {
        const a = this;
        let n = e;
        n < 0 && (n = 0);
        const {params: r, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: c, rtlTranslate: p} = a;
        if (a.animating && r.preventIntercationOnTransition) return !1;
        let u = Math.floor(n / r.slidesPerGroup);
        u >= o.length && (u = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
        const g = -o[u];
        if (a.updateProgress(g), r.normalizeSlideIndex) for (let e = 0; e < l.length; e += 1) -Math.floor(100 * g) >= Math.floor(100 * l[e]) && (n = e);
        if (a.initialized && n !== c) {
          if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== n) return !1
        }
        let m;
        return m = n > c ? "next" : n < c ? "prev" : "reset", p && -g === a.translate || !p && g === a.translate ? (a.updateActiveIndex(n), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(g), "reset" !== m && (a.transitionStart(s, m), a.transitionEnd(s, m)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, m), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(s, m))
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, m), a.transitionEnd(s, m)), !0)
      }, slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        const a = this;
        let n = e;
        return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i)
      }, slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this, {params: a, animating: n} = i;
        return a.loop ? !n && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s)
      }, slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this, {params: a, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l} = i;
        if (a.loop) {
          if (n) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }

        const c = d(l ? i.translate : -i.translate), p = r.map(e => d(e)),
          h = (o.map(e => d(e)), r[p.indexOf(c)], r[p.indexOf(c) - 1]);
        let u;
        return void 0 !== h && (u = o.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, s)
      }, slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s)
      }, slideToClosest: function (e = this.params.speed, t = !0, s) {
        const i = this;
        let a = i.activeIndex;
        const n = Math.floor(a / i.params.slidesPerGroup);
        if (n < i.snapGrid.length - 1) {
          const e = i.rtlTranslate ? i.translate : -i.translate, t = i.snapGrid[n];
          e - t > (i.snapGrid[n + 1] - t) / 2 && (a = i.params.slidesPerGroup)
        }
        return i.slideTo(a, e, t, s)
      }, slideToClickedSlide: function () {
        const e = this, {params: t, $wrapperEl: s} = e,
          i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let a, n = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          a = parseInt(l(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p.nextTick(() => {
            e.slideTo(n)
          })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p.nextTick(() => {
            e.slideTo(n)
          })) : e.slideTo(n)
        } else e.slideTo(n)
      }
    };
    var b = {
      loopCreate: function () {
        const e = this, {params: t, $wrapperEl: s} = e;
        s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
        let i = s.children(`.${t.slideClass}`);
        if (t.loopFillGroupWithBlank) {
          const e = t.slidesPerGroup - i.length % t.slidesPerGroup;
          if (e !== t.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = l(n.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
              s.append(e)
            }
            i = s.children(`.${t.slideClass}`)
          }
        }
        "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
        const a = [], r = [];
        i.each((t, s) => {
          const n = l(s);
          t < e.loopedSlides && r.push(s), t < i.length && t >= i.length - e.loopedSlides && a.push(s), n.attr("data-swiper-slide-index", t)
        });
        for (let e = 0; e < r.length; e += 1) s.append(l(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1) s.prepend(l(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
      }, loopFix: function () {
        const e = this, {
          params: t,
          activeIndex: s,
          slides: i,
          loopedSlides: a,
          allowSlidePrev: n,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: l
        } = e;
        let d;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        const c = -o[s] - e.getTranslate();
        s < a ? (d = i.length - 3 * a + s, d += a, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)) : ("auto" === t.slidesPerView && s >= 2 * a || s >= i.length - a) && (d = -i.length + s + a, d += a, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c));
        e.allowSlidePrev = n, e.allowSlideNext = r
      }, loopDestroy: function () {
        const {$wrapperEl: e, params: t, slides: s} = this;
        e.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove(), s.removeAttr("data-swiper-slide-index")
      }
    };
    var w = {
      setGrabCursor: function (e) {
        if (h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
        const t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
      }, unsetGrabCursor: function () {
        h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
      }
    };
    var y = {
      appendSlide: function (e) {
        const t = this, {$wrapperEl: s, params: i} = t;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
        i.loop && t.loopCreate(), i.observer && h.observer || t.update()
      }, prependSlide: function (e) {
        const t = this, {params: s, $wrapperEl: i, activeIndex: a} = t;
        s.loop && t.loopDestroy();
        let n = a + 1;
        if ("object" == typeof e && "length" in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
          n = a + e.length
        } else i.prepend(e);
        s.loop && t.loopCreate(), s.observer && h.observer || t.update(), t.slideTo(n, 0, !1)
      }, addSlide: function (e, t) {
        const s = this, {$wrapperEl: i, params: a, activeIndex: n} = s;
        let r = n;
        a.loop && (r -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${a.slideClass}`));
        const o = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= o) return void s.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const d = [];
        for (let t = o - 1; t >= e; t -= 1) {
          const e = s.slides.eq(t);
          e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
          l = r > e ? r + t.length : r
        } else i.append(t);
        for (let e = 0; e < d.length; e += 1) i.append(d[e]);
        a.loop && s.loopCreate(), a.observer && h.observer || s.update(), a.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
      }, removeSlide: function (e) {
        const t = this, {params: s, $wrapperEl: i, activeIndex: a} = t;
        let n = a;
        s.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
        let r, o = n;
        if ("object" == typeof e && "length" in e) {
          for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
          o = Math.max(o, 0)
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
        s.loop && t.loopCreate(), s.observer && h.observer || t.update(), s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
      }, removeAllSlides: function () {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
      }
    };
    const x = function () {
      const e = r.navigator.userAgent, t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: r.cordova || r.phonegap,
          phonegap: r.cordova || r.phonegap
        }, s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        a = e.match(/(iPad).*OS\s([\d_]+)/), o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (s && (t.os = "windows", t.osVersion = s[2], t.windows = !0), i && !s && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (a || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || a || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        const e = t.osVersion.split("."), s = n.querySelector('meta[name="viewport"]');
        t.minimalUi = !t.webView && (o || l) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0
      }
      return t.pixelRatio = r.devicePixelRatio || 1, t
    }();

    function C() {
      const e = this, {params: t, el: s} = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const {allowSlideNext: i, allowSlidePrev: a, snapGrid: n} = e;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
      e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
    }

    var T = {
      attachEvents: function () {
        const e = this, {params: t, touchEvents: s, el: i, wrapperEl: a} = e;
        e.onTouchStart = function (e) {
          const t = this, s = t.touchEventsData, {params: i, touches: a} = t;
          if (t.animating && i.preventIntercationOnTransition) return;
          let o = e;
          if (o.originalEvent && (o = o.originalEvent), s.isTouchEvent = "touchstart" === o.type, !s.isTouchEvent && "which" in o && 3 === o.which) return;
          if (s.isTouched && s.isMoved) return;
          if (i.noSwiping && l(o.target).closest(i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`)[0]) return void (t.allowClick = !0);
          if (i.swipeHandler && !l(o).closest(i.swipeHandler)[0]) return;
          a.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, a.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
          const d = a.currentX, c = a.currentY;
          if (!x.ios || x.cordova || !i.iOSEdgeSwipeDetection || !(d <= i.iOSEdgeSwipeThreshold || d >= r.screen.width - i.iOSEdgeSwipeThreshold)) {
            if (p.extend(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }), a.startX = d, a.startY = c, s.touchStartTime = p.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
              let e = !0;
              l(o.target).is(s.formElements) && (e = !1), n.activeElement && l(n.activeElement).is(s.formElements) && n.activeElement !== o.target && n.activeElement.blur(), e && t.allowTouchMove && o.preventDefault()
            }
            t.emit("touchStart", o)
          }
        }.bind(e), e.onTouchMove = function (e) {
          const t = this, s = t.touchEventsData, {params: i, touches: a, rtlTranslate: r} = t;
          let o = e;
          if (o.originalEvent && (o = o.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o));
          if (s.isTouchEvent && "mousemove" === o.type) return;
          const d = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
            c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
          if (o.preventedByNestedSwiper) return a.startX = d, void (a.startY = c);
          if (!t.allowTouchMove) return t.allowClick = !1, void (s.isTouched && (p.extend(a, {
            startX: d,
            startY: c,
            currentX: d,
            currentY: c
          }), s.touchStartTime = p.now()));
          if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
            if (c < a.startY && t.translate <= t.maxTranslate() || c > a.startY && t.translate >= t.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1)
          } else if (d < a.startX && t.translate <= t.maxTranslate() || d > a.startX && t.translate >= t.minTranslate()) return;
          if (s.isTouchEvent && n.activeElement && o.target === n.activeElement && l(o.target).is(s.formElements)) return s.isMoved = !0, void (t.allowClick = !1);
          if (s.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
          a.currentX = d, a.currentY = c;
          const h = a.currentX - a.startX, u = a.currentY - a.startY;
          if (void 0 === s.isScrolling) {
            let e;
            t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : h * h + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(h)) / Math.PI, s.isScrolling = t.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
          }
          if (s.isScrolling && t.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) return void (s.isTouched = !1);
          if (!s.startMoving) return;
          t.allowClick = !1, o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), s.isMoved || (i.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", o)), t.emit("sliderMove", o), s.isMoved = !0;
          let g = t.isHorizontal() ? h : u;
          a.diff = g, g *= i.touchRatio, r && (g = -g), t.swipeDirection = g > 0 ? "prev" : "next", s.currentTranslate = g + s.startTranslate;
          let m = !0, f = i.resistanceRatio;
          if (i.touchReleaseOnEdges && (f = 0), g > 0 && s.currentTranslate > t.minTranslate() ? (m = !1, i.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** f)) : g < 0 && s.currentTranslate < t.maxTranslate() && (m = !1, i.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** f)), m && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.threshold > 0) {
            if (!(Math.abs(g) > i.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void (a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
          }
          i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === s.velocities.length && s.velocities.push({
            position: a[t.isHorizontal() ? "startX" : "startY"],
            time: s.touchStartTime
          }), s.velocities.push({
            position: a[t.isHorizontal() ? "currentX" : "currentY"],
            time: p.now()
          })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
        }.bind(e), e.onTouchEnd = function (e) {
          const t = this, s = t.touchEventsData, {
            params: i,
            touches: a,
            rtlTranslate: n,
            $wrapperEl: r,
            slidesGrid: o,
            snapGrid: l
          } = t;
          let d = e;
          if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
          i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          const c = p.now(), h = c - s.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), h < 300 && c - s.lastClickTime > 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), s.clickTimeout = p.nextTick(() => {
            t && !t.destroyed && t.emit("click", d)
          }, 300)), h < 300 && c - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", d))), s.lastClickTime = p.now(), p.nextTick(() => {
            t.destroyed || (t.allowClick = !0)
          }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
          let u;
          if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, i.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (s.velocities.length > 1) {
                const e = s.velocities.pop(), a = s.velocities.pop(), n = e.position - a.position, r = e.time - a.time;
                t.velocity = n / r, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (r > 150 || p.now() - e.time > 300) && (t.velocity = 0)
              } else t.velocity = 0;
              t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
              let e = 1e3 * i.freeModeMomentumRatio;
              const a = t.velocity * e;
              let o = t.translate + a;
              n && (o = -o);
              let d, c = !1;
              const h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              let u;
              if (o < t.maxTranslate()) i.freeModeMomentumBounce ? (o + t.maxTranslate() < -h && (o = t.maxTranslate() - h), d = t.maxTranslate(), c = !0, s.allowMomentumBounce = !0) : o = t.maxTranslate(), i.loop && i.centeredSlides && (u = !0); else if (o > t.minTranslate()) i.freeModeMomentumBounce ? (o - t.minTranslate() > h && (o = t.minTranslate() + h), d = t.minTranslate(), c = !0, s.allowMomentumBounce = !0) : o = t.minTranslate(), i.loop && i.centeredSlides && (u = !0); else if (i.freeModeSticky) {
                let e;
                for (let t = 0; t < l.length; t += 1) if (l[t] > -o) {
                  e = t;
                  break
                }
                o = -(o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1])
              }
              if (u && t.once("transitionEnd", () => {
                t.loopFix()
              }), 0 !== t.velocity) e = n ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && c ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(d), r.transitionEnd(() => {
                  t && !t.destroyed && t.transitionEnd()
                }))
              })) : t.velocity ? (t.updateProgress(o), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                t && !t.destroyed && t.transitionEnd()
              }))) : t.updateProgress(o), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (i.freeModeSticky) return void t.slideToClosest();
            return void ((!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
          }
          let g = 0, m = t.slidesSizesGrid[0];
          for (let e = 0; e < o.length; e += i.slidesPerGroup) void 0 !== o[e + i.slidesPerGroup] ? u >= o[e] && u < o[e + i.slidesPerGroup] && (g = e, m = o[e + i.slidesPerGroup] - o[e]) : u >= o[e] && (g = e, m = o[o.length - 1] - o[o.length - 2]);
          const f = (u - o[g]) / m;
          if (h > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (f >= i.longSwipesRatio ? t.slideTo(g + i.slidesPerGroup) : t.slideTo(g)), "prev" === t.swipeDirection && (f > 1 - i.longSwipesRatio ? t.slideTo(g + i.slidesPerGroup) : t.slideTo(g))
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(g + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(g)
          }
        }.bind(e), e.onClick = function (e) {
          const t = this;
          t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }.bind(e);
        const o = "container" === t.touchEventsTarget ? i : a, d = !!t.nested;
        if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
          if (h.touch) {
            const i = !("touchstart" !== s.start || !h.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            o.addEventListener(s.start, e.onTouchStart, i), o.addEventListener(s.move, e.onTouchMove, h.passiveListener ? {
              passive: !1,
              capture: d
            } : d), o.addEventListener(s.end, e.onTouchEnd, i)
          }
          (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !h.touch && x.ios) && (o.addEventListener("mousedown", e.onTouchStart, !1), n.addEventListener("mousemove", e.onTouchMove, d), n.addEventListener("mouseup", e.onTouchEnd, !1))
        } else o.addEventListener(s.start, e.onTouchStart, !1), n.addEventListener(s.move, e.onTouchMove, d), n.addEventListener(s.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && o.addEventListener("click", e.onClick, !0), e.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0)
      }, detachEvents: function () {
        const e = this, {params: t, touchEvents: s, el: i, wrapperEl: a} = e,
          r = "container" === t.touchEventsTarget ? i : a, o = !!t.nested;
        if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
          if (h.touch) {
            const i = !("onTouchStart" !== s.start || !h.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.removeEventListener(s.start, e.onTouchStart, i), r.removeEventListener(s.move, e.onTouchMove, o), r.removeEventListener(s.end, e.onTouchEnd, i)
          }
          (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !h.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), n.removeEventListener("mousemove", e.onTouchMove, o), n.removeEventListener("mouseup", e.onTouchEnd, !1))
        } else r.removeEventListener(s.start, e.onTouchStart, !1), n.removeEventListener(s.move, e.onTouchMove, o), n.removeEventListener(s.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C)
      }
    };
    var E = {
      setBreakpoint: function () {
        const e = this, {activeIndex: t, initialized: s, loopedSlides: i = 0, params: a} = e, n = a.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        const r = e.getBreakpoint(n);
        if (r && e.currentBreakpoint !== r) {
          const o = r in n ? n[r] : e.originalParams, l = a.loop && o.slidesPerView !== a.slidesPerView;
          p.extend(e.params, o), p.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), e.currentBreakpoint = r, l && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
        }
      }, getBreakpoint: function (e) {
        if (!e) return;
        let t = !1;
        const s = [];
        Object.keys(e).forEach(e => {
          s.push(e)
        }), s.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
        for (let e = 0; e < s.length; e += 1) {
          const i = s[e];
          i >= r.innerWidth && !t && (t = i)
        }
        return t || "max"
      }
    };
    const S = function () {
      return {
        isIE: !!r.navigator.userAgent.match(/Trident/g) || !!r.navigator.userAgent.match(/MSIE/g),
        isSafari: function () {
          const e = r.navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
      }
    }();
    var I = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventIntercationOnTransition: !1,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    };
    const M = {
      update: g,
      translate: m,
      transition: f,
      slide: v,
      loop: b,
      grabCursor: w,
      manipulation: y,
      events: T,
      breakpoints: E,
      checkOverflow: {
        checkOverflow: function () {
          const e = this, t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
        }
      },
      classes: {
        addClasses: function () {
          const {classNames: e, params: t, rtl: s, $el: i} = this, a = [];
          a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), s && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), x.android && a.push("android"), x.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push(`wp8-${t.direction}`), a.forEach(s => {
            e.push(t.containerModifierClass + s)
          }), i.addClass(e.join(" "))
        }, removeClasses: function () {
          const {$el: e, classNames: t} = this;
          e.removeClass(t.join(" "))
        }
      },
      images: {
        loadImage: function (e, t, s, i, a, n) {
          let o;

          function l() {
            n && n()
          }

          e.complete && a ? l() : t ? ((o = new r.Image).onload = l, o.onerror = l, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : l()
        }, preloadImages: function () {
          const e = this;

          function t() {
            void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
          }

          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
          }
        }
      }
    }, $ = {};

    class z extends u {
      constructor(...e) {
        let t, s;
        1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : [t, s] = e, s || (s = {}), s = p.extend({}, s), t && !s.el && (s.el = t), super(s), Object.keys(M).forEach(e => {
          Object.keys(M[e]).forEach(t => {
            z.prototype[t] || (z.prototype[t] = M[e][t])
          })
        });
        const i = this;
        void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(e => {
          const t = i.modules[e];
          if (t.params) {
            const e = Object.keys(t.params)[0], i = t.params[e];
            if ("object" != typeof i) return;
            if (!(e in s && "enabled" in i)) return;
            !0 === s[e] && (s[e] = {enabled: !0}), "object" != typeof s[e] || "enabled" in s[e] || (s[e].enabled = !0), s[e] || (s[e] = {enabled: !1})
          }
        });
        const a = p.extend({}, I);
        i.useModulesParams(a), i.params = p.extend({}, a, $, s), i.originalParams = p.extend({}, i.params), i.passedParams = p.extend({}, s), i.$ = l;
        const n = l(i.params.el);
        if (!(t = n[0])) return;
        if (n.length > 1) {
          const e = [];
          return n.each((t, i) => {
            const a = p.extend({}, s, {el: i});
            e.push(new z(a))
          }), e
        }
        t.swiper = i, n.data("swiper", i);
        const r = n.children(`.${i.params.wrapperClass}`);
        return p.extend(i, {
          $el: n,
          el: t,
          $wrapperEl: r,
          wrapperEl: r[0],
          classNames: [],
          slides: l(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: function () {
            const e = ["touchstart", "touchmove", "touchend"];
            let t = ["mousedown", "mousemove", "mouseup"];
            return h.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), i.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2]
            }, i.touchEventsDesktop = {
              start: t[0],
              move: t[1],
              end: t[2]
            }, h.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video",
            lastClickTime: p.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
          imagesToLoad: [],
          imagesLoaded: 0
        }), i.useModules(), i.params.init && i.init(), i
      }

      slidesPerViewDynamic() {
        const {params: e, slides: t, slidesGrid: s, size: i, activeIndex: a} = this;
        let n = 1;
        if (e.centeredSlides) {
          let e, s = t[a].swiperSlideSize;
          for (let r = a + 1; r < t.length; r += 1) t[r] && !e && (n += 1, (s += t[r].swiperSlideSize) > i && (e = !0));
          for (let r = a - 1; r >= 0; r -= 1) t[r] && !e && (n += 1, (s += t[r].swiperSlideSize) > i && (e = !0))
        } else for (let e = a + 1; e < t.length; e += 1) s[e] - s[a] < i && (n += 1);
        return n
      }

      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {snapGrid: t, params: s} = e;

        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        let a;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (a = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
      }

      init() {
        const e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
      }

      destroy(e = !0, t = !0) {
        const s = this, {params: i, $el: a, $wrapperEl: n, slides: r} = s;
        return void 0 === s.params || s.destroyed ? null : (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
          s.off(e)
        }), !1 !== e && (s.$el[0].swiper = null, s.$el.data("swiper", null), p.deleteProps(s)), s.destroyed = !0, null)
      }

      static extendDefaults(e) {
        p.extend($, e)
      }

      static get extendedDefaults() {
        return $
      }

      static get defaults() {
        return I
      }

      static get Class() {
        return u
      }

      static get $() {
        return l
      }
    }

    var P = {name: "device", proto: {device: x}, static: {device: x}},
      k = {name: "support", proto: {support: h}, static: {support: h}},
      A = {name: "browser", proto: {browser: S}, static: {browser: S}}, D = {
        name: "resize", create() {
          const e = this;
          p.extend(e, {
            resize: {
              resizeHandler() {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
              }, orientationChangeHandler() {
                e && !e.destroyed && e.initialized && e.emit("orientationchange")
              }
            }
          })
        }, on: {
          init() {
            r.addEventListener("resize", this.resize.resizeHandler), r.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          }, destroy() {
            r.removeEventListener("resize", this.resize.resizeHandler), r.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
          }
        }
      };
    const L = {
      func: r.MutationObserver || r.WebkitMutationObserver, attach(e, t = {}) {
        const s = this, i = new (0, L.func)(e => {
          e.forEach(e => {
            s.emit("observerUpdate", e)
          })
        });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), s.observer.observers.push(i)
      }, init() {
        const e = this;
        if (h.observer && e.params.observer) {
          if (e.params.observeParents) {
            const t = e.$el.parents();
            for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s])
          }
          e.observer.attach(e.$el[0], {childList: !1}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
        }
      }, destroy() {
        this.observer.observers.forEach(e => {
          e.disconnect()
        }), this.observer.observers = []
      }
    };
    var O = {
      name: "observer", params: {observer: !1, observeParents: !1}, create() {
        p.extend(this, {
          observer: {
            init: L.init.bind(this),
            attach: L.attach.bind(this),
            destroy: L.destroy.bind(this),
            observers: []
          }
        })
      }, on: {
        init() {
          this.observer.init()
        }, destroy() {
          this.observer.destroy()
        }
      }
    };
    const N = {
      update(e) {
        const t = this, {slidesPerView: s, slidesPerGroup: i, centeredSlides: a} = t.params, {
          from: n,
          to: r,
          slides: o,
          slidesGrid: l,
          renderSlide: d,
          offset: c
        } = t.virtual;
        t.updateActiveIndex();
        const h = t.activeIndex || 0;
        let u, g, m;
        u = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (g = Math.floor(s / 2) + i, m = Math.floor(s / 2) + i) : (g = s + (i - 1), m = i);
        const f = Math.max((h || 0) - m, 0), v = Math.min((h || 0) + g, o.length - 1),
          b = (t.slidesGrid[f] || 0) - (t.slidesGrid[0] || 0);

        function w() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
        }

        if (p.extend(t.virtual, {
          from: f,
          to: v,
          offset: b,
          slidesGrid: t.slidesGrid
        }), n === f && r === v && !e) return t.slidesGrid !== l && b !== c && t.slides.css(u, `${b}px`), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: b,
          from: f,
          to: v,
          slides: function () {
            const e = [];
            for (let t = f; t <= v; t += 1) e.push(o[t]);
            return e
          }()
        }), void w();
        const y = [], x = [];
        if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove(); else for (let e = n; e <= r; e += 1) (e < f || e > v) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
        for (let t = 0; t < o.length; t += 1) t >= f && t <= v && (void 0 === r || e ? x.push(t) : (t > r && x.push(t), t < n && y.push(t)));
        x.forEach(e => {
          t.$wrapperEl.append(d(o[e], e))
        }), y.sort((e, t) => e < t).forEach(e => {
          t.$wrapperEl.prepend(d(o[e], e))
        }), t.$wrapperEl.children(".swiper-slide").css(u, `${b}px`), w()
      }, renderSlide(e, t) {
        const s = this, i = s.params.virtual;
        if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const a = i.renderSlide ? l(i.renderSlide.call(s, e, t)) : l(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (s.virtual.cache[t] = a), a
      }, appendSlide(e) {
        this.virtual.slides.push(e), this.virtual.update(!0)
      }, prependSlide(e) {
        const t = this;
        if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
          const e = t.virtual.cache, s = {};
          Object.keys(e).forEach(t => {
            s[t + 1] = e[t]
          }), t.virtual.cache = s
        }
        t.virtual.update(!0), t.slideNext(0)
      }
    };
    var G = {
      name: "virtual",
      params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
      create() {
        p.extend(this, {
          virtual: {
            update: N.update.bind(this),
            appendSlide: N.appendSlide.bind(this),
            prependSlide: N.prependSlide.bind(this),
            renderSlide: N.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit() {
          if (!this.params.virtual.enabled) return;
          this.classNames.push(`${this.params.containerModifierClass}virtual`);
          const e = {watchSlidesProgress: !0};
          p.extend(this.params, e), p.extend(this.originalParams, e), this.virtual.update()
        }, setTranslate() {
          this.params.virtual.enabled && this.virtual.update()
        }
      }
    };
    const H = {
      handle(e) {
        const t = this, {rtlTranslate: s} = t;
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
            let e = !1;
            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
            const i = r.innerWidth, a = r.innerHeight, n = t.$el.offset();
            s && (n.left -= t.$el[0].scrollLeft);
            const o = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]];
            for (let t = 0; t < o.length; t += 1) {
              const s = o[t];
              s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= a && (e = !0)
            }
            if (!e) return
          }
          t.isHorizontal() ? (37 !== a && 39 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === a && !s || 37 === a && s) && t.slideNext(), (37 === a && !s || 39 === a && s) && t.slidePrev()) : (38 !== a && 40 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === a && t.slideNext(), 38 === a && t.slidePrev()), t.emit("keyPress", a)
        }
      }, enable() {
        this.keyboard.enabled || (l(n).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
      }, disable() {
        this.keyboard.enabled && (l(n).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
      }
    };
    var B = {
      name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create() {
        p.extend(this, {
          keyboard: {
            enabled: !1,
            enable: H.enable.bind(this),
            disable: H.disable.bind(this),
            handle: H.handle.bind(this)
          }
        })
      }, on: {
        init() {
          const e = this;
          e.params.keyboard.enabled && e.keyboard.enable()
        }, destroy() {
          const e = this;
          e.keyboard.enabled && e.keyboard.disable()
        }
      }
    };
    const Y = {
      lastScrollTime: p.now(), event: r.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        let e = "onwheel" in n;
        if (!e) {
          const t = n.createElement("div");
          t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
        }
        return !e && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (e = n.implementation.hasFeature("Events.wheel", "3.0")), e
      }() ? "wheel" : "mousewheel", normalize(e) {
        let t = 0, s = 0, i = 0, a = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, a = 10 * s, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !s && (s = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: i,
          pixelY: a
        }
      }, handleMouseEnter() {
        this.mouseEntered = !0
      }, handleMouseLeave() {
        this.mouseEntered = !1
      }, handle(e) {
        let t = e;
        const s = this, i = s.params.mousewheel;
        if (!s.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        let a = 0;
        const n = s.rtlTranslate ? -1 : 1, o = Y.normalize(t);
        if (i.forceToAxis) if (s.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
          a = o.pixelX * n
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
          a = o.pixelY
        } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
        if (0 === a) return !0;
        if (i.invert && (a = -a), s.params.freeMode) {
          s.params.loop && s.loopFix();
          let e = s.getTranslate() + a * i.sensitivity;
          const n = s.isBeginning, r = s.isEnd;
          if (e >= s.minTranslate() && (e = s.minTranslate()), e <= s.maxTranslate() && (e = s.maxTranslate()), s.setTransition(0), s.setTranslate(e), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!n && s.isBeginning || !r && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = p.nextTick(() => {
            s.slideToClosest()
          }, 300)), s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), e === s.minTranslate() || e === s.maxTranslate()) return !0
        } else {
          if (p.now() - s.mousewheel.lastScrollTime > 60) if (a < 0) if (s.isEnd && !s.params.loop || s.animating) {
            if (i.releaseOnEdges) return !0
          } else s.slideNext(), s.emit("scroll", t); else if (s.isBeginning && !s.params.loop || s.animating) {
            if (i.releaseOnEdges) return !0
          } else s.slidePrev(), s.emit("scroll", t);
          s.mousewheel.lastScrollTime = (new r.Date).getTime()
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
      }, enable() {
        const e = this;
        if (!Y.event) return !1;
        if (e.mousewheel.enabled) return !1;
        let t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = l(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(Y.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
      }, disable() {
        const e = this;
        if (!Y.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        let t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = l(e.params.mousewheel.eventsTarged)), t.off(Y.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
      }
    };
    const X = {
      update() {
        const e = this, t = e.params.navigation;
        if (e.params.loop) return;
        const {$nextEl: s, $prevEl: i} = e.navigation;
        i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
      }, init() {
        const e = this, t = e.params.navigation;
        if (!t.nextEl && !t.prevEl) return;
        let s, i;
        t.nextEl && (s = l(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))), t.prevEl && (i = l(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))), s && s.length > 0 && s.on("click", t => {
          t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
        }), i && i.length > 0 && i.on("click", t => {
          t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
        }), p.extend(e.navigation, {$nextEl: s, nextEl: s && s[0], $prevEl: i, prevEl: i && i[0]})
      }, destroy() {
        const e = this, {$nextEl: t, $prevEl: s} = e.navigation;
        t && t.length && (t.off("click"), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click"), s.removeClass(e.params.navigation.disabledClass))
      }
    };
    const V = {
      update() {
        const e = this, t = e.rtl, s = e.params.pagination;
        if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
        const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          a = e.pagination.$el;
        let n;
        const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides), n > r - 1 && (n -= r), n < 0 && "bullets" !== e.params.paginationType && (n = r + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
          const i = e.pagination.bullets;
          let r, o, d;
          if (s.dynamicBullets && (e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), r = n - e.pagination.dynamicBulletIndex, d = ((o = r + (Math.min(i.length, s.dynamicMainBullets) - 1)) + r) / 2), i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`), a.length > 1) i.each((e, t) => {
            const i = l(t), a = i.index();
            a === n && i.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= r && a <= o && i.addClass(`${s.bulletActiveClass}-main`), a === r && i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), a === o && i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`))
          }); else {
            if (i.eq(n).addClass(s.bulletActiveClass), s.dynamicBullets) {
              const e = i.eq(r), t = i.eq(o);
              for (let e = r; e <= o; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              e.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), t.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`)
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              n = (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
              r = t ? "right" : "left";
            i.css(e.isHorizontal() ? r : "top", `${n}px`)
          }
        }
        if ("fraction" === s.type && (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)), a.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))), "progressbar" === s.type) {
          let t;
          t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          const i = (n + 1) / r;
          let o = 1, l = 1;
          "horizontal" === t ? o = i : l = i, a.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed)
        }
        "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, r)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
      }, render() {
        const e = this, t = e.params.pagination;
        if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
        const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el;
        let a = "";
        if ("bullets" === t.type) {
          const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          for (let s = 0; s < n; s += 1) t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
          i.html(a), e.pagination.bullets = i.find(`.${t.bulletClass}`)
        }
        "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`, i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
      }, init() {
        const e = this, t = e.params.pagination;
        if (!t.el) return;
        let s = l(t.el);
        0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", `.${t.bulletClass}`, function (t) {
          t.preventDefault();
          let s = l(this).index() * e.params.slidesPerGroup;
          e.params.loop && (s += e.loopedSlides), e.slideTo(s)
        }), p.extend(e.pagination, {$el: s, el: s[0]}))
      }, destroy() {
        const e = this.params.pagination;
        if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
        const t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", `.${e.bulletClass}`)
      }
    };
    const R = {
      setTranslate() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {scrollbar: t, rtlTranslate: s, progress: i} = e, {dragSize: a, trackSize: n, $dragEl: r, $el: o} = t,
          l = e.params.scrollbar;
        let d = a, c = (n - a) * i;
        s ? (c = -c) > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c) : c < 0 ? (d = a + c, c = 0) : c + a > n && (d = n - c), e.isHorizontal() ? (h.transforms3d ? r.transform(`translate3d(${c}px, 0, 0)`) : r.transform(`translateX(${c}px)`), r[0].style.width = `${d}px`) : (h.transforms3d ? r.transform(`translate3d(0px, ${c}px, 0)`) : r.transform(`translateY(${c}px)`), r[0].style.height = `${d}px`), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
          o[0].style.opacity = 0, o.transition(400)
        }, 1e3))
      }, setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
      }, updateSize() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {scrollbar: t} = e, {$dragEl: s, $el: i} = t;
        s[0].style.width = "", s[0].style.height = "";
        const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize,
          r = n * (a / e.size);
        let o;
        o = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), p.extend(t, {
          trackSize: a,
          divider: n,
          moveDivider: r,
          dragSize: o
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
      }, setDragPosition(e) {
        const {scrollbar: t, rtlTranslate: s} = this, {$el: i, dragSize: a, trackSize: n} = t;
        let r, o;
        o = ((r = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - i.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (n - a), o = Math.max(Math.min(o, 1), 0), s && (o = 1 - o);
        const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
      }, onDragStart(e) {
        const t = this.params.scrollbar, {scrollbar: s, $wrapperEl: i} = this, {$el: a, $dragEl: n} = s;
        this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), n.transition(100), s.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
      }, onDragMove(e) {
        const {scrollbar: t, $wrapperEl: s} = this, {$el: i, $dragEl: a} = t;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), s.transition(0), i.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
      }, onDragEnd(e) {
        const t = this, s = t.params.scrollbar, {scrollbar: i} = t, {$el: a} = i;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = p.nextTick(() => {
          a.css("opacity", 0), a.transition(400)
        }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
      }, enableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {scrollbar: t, touchEvents: s, touchEventsDesktop: i, params: a} = e, r = t.$el[0],
          o = !(!h.passiveListener || !a.passiveListener) && {passive: !1, capture: !1},
          l = !(!h.passiveListener || !a.passiveListener) && {passive: !0, capture: !1};
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(s.start, e.scrollbar.onDragStart, o), r.addEventListener(s.move, e.scrollbar.onDragMove, o), r.addEventListener(s.end, e.scrollbar.onDragEnd, l)), (a.simulateTouch && !x.ios && !x.android || a.simulateTouch && !h.touch && x.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, o), n.addEventListener("mousemove", e.scrollbar.onDragMove, o), n.addEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, o), n.addEventListener(i.move, e.scrollbar.onDragMove, o), n.addEventListener(i.end, e.scrollbar.onDragEnd, l))
      }, disableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {scrollbar: t, touchEvents: s, touchEventsDesktop: i, params: a} = e, r = t.$el[0],
          o = !(!h.passiveListener || !a.passiveListener) && {passive: !1, capture: !1},
          l = !(!h.passiveListener || !a.passiveListener) && {passive: !0, capture: !1};
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(s.start, e.scrollbar.onDragStart, o), r.removeEventListener(s.move, e.scrollbar.onDragMove, o), r.removeEventListener(s.end, e.scrollbar.onDragEnd, l)), (a.simulateTouch && !x.ios && !x.android || a.simulateTouch && !h.touch && x.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, o), n.removeEventListener("mousemove", e.scrollbar.onDragMove, o), n.removeEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, o), n.removeEventListener(i.move, e.scrollbar.onDragMove, o), n.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
      }, init() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {scrollbar: t, $el: s} = e, i = e.params.scrollbar;
        let a = l(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
        let n = a.find(`.${e.params.scrollbar.dragClass}`);
        0 === n.length && (n = l(`<div class="${e.params.scrollbar.dragClass}"></div>`), a.append(n)), p.extend(t, {
          $el: a,
          el: a[0],
          $dragEl: n,
          dragEl: n[0]
        }), i.draggable && t.enableDraggable()
      }, destroy() {
        this.scrollbar.disableDraggable()
      }
    };
    const Z = {
      setTransform(e, t) {
        const {rtl: s} = this, i = l(e), a = s ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
        let r = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
        const d = i.attr("data-swiper-parallax-scale"), c = i.attr("data-swiper-parallax-opacity");
        if (r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = n, o = "0") : (o = n, r = "0"), r = r.indexOf("%") >= 0 ? `${parseInt(r, 10) * t * a}%` : `${r * t * a}px`, o = o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t}%` : `${o * t}px`, void 0 !== c && null !== c) {
          const e = c - (c - 1) * (1 - Math.abs(t));
          i[0].style.opacity = e
        }
        if (void 0 === d || null === d) i.transform(`translate3d(${r}, ${o}, 0px)`); else {
          const e = d - (d - 1) * (1 - Math.abs(t));
          i.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`)
        }
      }, setTranslate() {
        const e = this, {$el: t, slides: s, progress: i, snapGrid: a} = e;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
          e.parallax.setTransform(s, i)
        }), s.each((t, s) => {
          let n = s.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - i * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), l(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
            e.parallax.setTransform(s, n)
          })
        })
      }, setTransition(e = this.params.speed) {
        const {$el: t} = this;
        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
          const i = l(s);
          let a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), i.transition(a)
        })
      }
    };
    const _ = {
      getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt((i - t) ** 2 + (a - s) ** 2)
      }, onGestureStart(e) {
        const t = this, s = t.params.zoom, i = t.zoom, {gesture: a} = i;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, a.scaleStart = _.getDistanceBetweenTouches(e)
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = l(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0
      }, onGestureChange(e) {
        const t = this, s = t.params.zoom, i = t.zoom, {gesture: a} = i;
        if (!h.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureMoved = !0, a.scaleMove = _.getDistanceBetweenTouches(e)
        }
        a.$imageEl && 0 !== a.$imageEl.length && (h.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = a.scaleMove / a.scaleStart * i.currentScale, i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + (i.scale - a.maxRatio + 1) ** .5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5), a.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
      }, onGestureEnd(e) {
        const t = this.params.zoom, s = this.zoom, {gesture: i} = s;
        if (!h.gestures) {
          if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
          s.fakeGestureTouched = !1, s.fakeGestureMoved = !1
        }
        i.$imageEl && 0 !== i.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`), s.currentScale = s.scale, s.isScaling = !1, 1 === s.scale && (i.$slideEl = void 0))
      }, onTouchStart(e) {
        const t = this.zoom, {gesture: s, image: i} = t;
        s.$imageEl && 0 !== s.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      }, onTouchMove(e) {
        const t = this, s = t.zoom, {gesture: i, image: a, velocity: n} = s;
        if (!i.$imageEl || 0 === i.$imageEl.length) return;
        if (t.allowClick = !1, !a.isTouched || !i.$slideEl) return;
        a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, a.startX = p.getTranslate(i.$imageWrapEl[0], "x") || 0, a.startY = p.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
        const r = a.width * s.scale, o = a.height * s.scale;
        if (!(r < i.slideWidth && o < i.slideHeight)) {
          if (a.minX = Math.min(i.slideWidth / 2 - r / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - o / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !s.isScaling) {
            if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void (a.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void (a.isTouched = !1)
          }
          e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** .8), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** .8), a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** .8), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** .8), n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = a.touchesCurrent.x, n.prevPositionY = a.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`)
        }
      }, onTouchEnd() {
        const e = this.zoom, {gesture: t, image: s, velocity: i} = e;
        if (!t.$imageEl || 0 === t.$imageEl.length) return;
        if (!s.isTouched || !s.isMoved) return s.isTouched = !1, void (s.isMoved = !1);
        s.isTouched = !1, s.isMoved = !1;
        let a = 300, n = 300;
        const r = i.x * a, o = s.currentX + r, l = i.y * n, d = s.currentY + l;
        0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
        const c = Math.max(a, n);
        s.currentX = o, s.currentY = d;
        const p = s.width * e.scale, h = s.height * e.scale;
        s.minX = Math.min(t.slideWidth / 2 - p / 2, 0), s.maxX = -s.minX, s.minY = Math.min(t.slideHeight / 2 - h / 2, 0), s.maxY = -s.minY, s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX), s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY), t.$imageWrapEl.transition(c).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
      }, onTransitionEnd() {
        const e = this.zoom, {gesture: t} = e;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
      }, toggle(e) {
        const t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      }, in(e) {
        const t = this, s = t.zoom, i = t.params.zoom, {gesture: a, image: n} = s;
        if (a.$slideEl || (a.$slideEl = t.clickedSlide ? l(t.clickedSlide) : t.slides.eq(t.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`)), !a.$imageEl || 0 === a.$imageEl.length) return;
        let r, o, d, c, p, h, u, g, m, f, v, b, w, y, x, C, T, E;
        a.$slideEl.addClass(`${i.zoomedSlideClass}`), void 0 === n.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = n.touchesStart.x, o = n.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (T = a.$slideEl[0].offsetWidth, E = a.$slideEl[0].offsetHeight, p = (d = a.$slideEl.offset().left) + T / 2 - r, h = (c = a.$slideEl.offset().top) + E / 2 - o, m = a.$imageEl[0].offsetWidth, f = a.$imageEl[0].offsetHeight, v = m * s.scale, b = f * s.scale, x = -(w = Math.min(T / 2 - v / 2, 0)), C = -(y = Math.min(E / 2 - b / 2, 0)), u = p * s.scale, g = h * s.scale, u < w && (u = w), u > x && (u = x), g < y && (g = y), g > C && (g = C)) : (u = 0, g = 0), a.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${g}px,0)`), a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
      }, out() {
        const e = this, t = e.zoom, s = e.params.zoom, {gesture: i} = t;
        i.$slideEl || (i.$slideEl = e.clickedSlide ? l(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass(`${s.zoomedSlideClass}`), i.$slideEl = void 0)
      }, enable() {
        const e = this, t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const s = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
      }, disable() {
        const e = this, t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        const s = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
      }
    };
    const W = {
      loadInSlide(e, t = !0) {
        const s = this, i = s.params.lazy;
        if (void 0 === e) return;
        if (0 === s.slides.length) return;
        const a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
        let n = a.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
        !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (n = n.add(a[0])), 0 !== n.length && n.each((e, n) => {
          const r = l(n);
          r.addClass(i.loadingClass);
          const o = r.attr("data-background"), d = r.attr("data-src"), c = r.attr("data-srcset"),
            p = r.attr("data-sizes");
          s.loadImage(r[0], d || o, c, p, !1, () => {
            if (void 0 !== s && null !== s && s && (!s || s.params) && !s.destroyed) {
              if (o ? (r.css("background-image", `url("${o}")`), r.removeAttr("data-background")) : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")), p && (r.attr("sizes", p), r.removeAttr("data-sizes")), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), a.find(`.${i.preloaderClass}`).remove(), s.params.loop && t) {
                const e = a.attr("data-swiper-slide-index");
                if (a.hasClass(s.params.slideDuplicateClass)) {
                  const t = s.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`);
                  s.lazy.loadInSlide(t.index(), !1)
                } else {
                  const t = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                  s.lazy.loadInSlide(t.index(), !1)
                }
              }
              s.emit("lazyImageReady", a[0], r[0])
            }
          }), s.emit("lazyImageLoad", a[0], r[0])
        })
      }, load() {
        const e = this, {$wrapperEl: t, params: s, slides: i, activeIndex: a} = e, n = e.virtual && s.virtual.enabled,
          r = s.lazy;
        let o = s.slidesPerView;

        function d(e) {
          if (n) {
            if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
          } else if (i[e]) return !0;
          return !1
        }

        function c(e) {
          return n ? l(e).attr("data-swiper-slide-index") : l(e).index()
        }

        if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${s.slideVisibleClass}`).each((t, s) => {
          const i = n ? l(s).attr("data-swiper-slide-index") : l(s).index();
          e.lazy.loadInSlide(i)
        }); else if (o > 1) for (let t = a; t < a + o; t += 1) d(t) && e.lazy.loadInSlide(t); else e.lazy.loadInSlide(a);
        if (r.loadPrevNext) if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
          const t = r.loadPrevNextAmount, s = o, n = Math.min(a + s + Math.max(t, s), i.length),
            l = Math.max(a - Math.max(s, t), 0);
          for (let t = a + o; t < n; t += 1) d(t) && e.lazy.loadInSlide(t);
          for (let t = l; t < a; t += 1) d(t) && e.lazy.loadInSlide(t)
        } else {
          const i = t.children(`.${s.slideNextClass}`);
          i.length > 0 && e.lazy.loadInSlide(c(i));
          const a = t.children(`.${s.slidePrevClass}`);
          a.length > 0 && e.lazy.loadInSlide(c(a))
        }
      }
    };
    const j = {
      LinearSpline: function (e, t) {
        const s = function () {
          let e, t, s;
          return (i, a) => {
            for (t = -1, e = i.length; e - t > 1;) i[s = e + t >> 1] <= a ? t = s : e = s;
            return e
          }
        }();
        let i, a;
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (a = s(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
        }, this
      }, getInterpolateFunction(e) {
        const t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid))
      }, setTranslate(e, t) {
        const s = this, i = s.controller.control;
        let a, n;

        function r(e) {
          const t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== t && i[e] instanceof z && r(i[e]); else i instanceof z && t !== i && r(i)
      }, setTransition(e, t) {
        const s = this, i = s.controller.control;
        let a;

        function n(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(() => {
            i && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
          }))
        }

        if (Array.isArray(i)) for (a = 0; a < i.length; a += 1) i[a] !== t && i[a] instanceof z && n(i[a]); else i instanceof z && t !== i && n(i)
      }
    };
    const F = {
      makeElFocusable: e => (e.attr("tabIndex", "0"), e),
      addElRole: (e, t) => (e.attr("role", t), e),
      addElLabel: (e, t) => (e.attr("aria-label", t), e),
      disableEl: e => (e.attr("aria-disabled", !0), e),
      enableEl: e => (e.attr("aria-disabled", !1), e),
      onEnterKey(e) {
        const t = this, s = t.params.a11y;
        if (13 !== e.keyCode) return;
        const i = l(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)), t.pagination && i.is(`.${t.params.pagination.bulletClass}`) && i[0].click()
      },
      notify(e) {
        const t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e))
      },
      updateNavigation() {
        const e = this;
        if (e.params.loop) return;
        const {$nextEl: t, $prevEl: s} = e.navigation;
        s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t))
      },
      updatePagination() {
        const e = this, t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((s, i) => {
          const a = l(i);
          e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
        })
      },
      init() {
        const e = this;
        e.$el.append(e.a11y.liveRegion);
        const t = e.params.a11y;
        let s, i;
        e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
      },
      destroy() {
        const e = this;
        let t, s;
        e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), s && s.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
      }
    };
    const U = {
      init() {
        const e = this;
        if (!e.params.history) return;
        if (!r.history || !r.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        const t = e.history;
        t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || r.addEventListener("popstate", e.history.setHistoryPopState))
      },
      destroy() {
        const e = this;
        e.params.history.replaceState || r.removeEventListener("popstate", e.history.setHistoryPopState)
      },
      setHistoryPopState() {
        this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
      },
      getPathValues() {
        const e = r.location.pathname.slice(1).split("/").filter(e => "" !== e), t = e.length;
        return {key: e[t - 2], value: e[t - 1]}
      },
      setHistory(e, t) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        const s = this.slides.eq(t);
        let i = U.slugify(s.attr("data-history"));
        r.location.pathname.includes(e) || (i = `${e}/${i}`);
        const a = r.history.state;
        a && a.value === i || (this.params.history.replaceState ? r.history.replaceState({value: i}, null, i) : r.history.pushState({value: i}, null, i))
      },
      slugify: e => e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
      scrollToSlide(e, t, s) {
        const i = this;
        if (t) for (let a = 0, n = i.slides.length; a < n; a += 1) {
          const n = i.slides.eq(a);
          if (U.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            const t = n.index();
            i.slideTo(t, e, s)
          }
        } else i.slideTo(0, e, s)
      }
    };
    const q = {
      onHashCange() {
        const e = this, t = n.location.hash.replace("#", "");
        t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index())
      }, setHash() {
        const e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && r.history && r.history.replaceState) r.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""); else {
          const t = e.slides.eq(e.activeIndex), s = t.attr("data-hash") || t.attr("data-history");
          n.location.hash = s || ""
        }
      }, init() {
        const e = this;
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        e.hashNavigation.initialized = !0;
        const t = n.location.hash.replace("#", "");
        if (t) {
          const s = 0;
          for (let i = 0, a = e.slides.length; i < a; i += 1) {
            const a = e.slides.eq(i);
            if ((a.attr("data-hash") || a.attr("data-history")) === t && !a.hasClass(e.params.slideDuplicateClass)) {
              const t = a.index();
              e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
            }
          }
        }
        e.params.hashNavigation.watchState && l(r).on("hashchange", e.hashNavigation.onHashCange)
      }, destroy() {
        const e = this;
        e.params.hashNavigation.watchState && l(r).off("hashchange", e.hashNavigation.onHashCange)
      }
    };
    const K = {
      run() {
        const e = this, t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = p.nextTick(() => {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
        }, s)
      }, start() {
        return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
      }, stop() {
        const e = this;
        return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
      }, pause(e) {
        const t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
      }
    };
    const J = {
      setTranslate() {
        const e = this, {slides: t} = e;
        for (let s = 0; s < t.length; s += 1) {
          const t = e.slides.eq(s);
          let i = -t[0].swiperSlideOffset;
          e.params.virtualTranslate || (i -= e.translate);
          let a = 0;
          e.isHorizontal() || (a = i, i = 0);
          const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
          t.css({opacity: n}).transform(`translate3d(${i}px, ${a}px, 0px)`)
        }
      }, setTransition(e) {
        const t = this, {slides: s, $wrapperEl: i} = t;
        if (s.transition(e), t.params.virtualTranslate && 0 !== e) {
          let e = !1;
          s.transitionEnd(() => {
            if (e) return;
            if (!t || t.destroyed) return;
            e = !0, t.animating = !1;
            const s = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < s.length; e += 1) i.trigger(s[e])
          })
        }
      }
    };
    const Q = {
      setTranslate() {
        const {$el: e, $wrapperEl: t, slides: s, width: i, height: a, rtlTranslate: n, size: r} = this,
          o = this.params.cubeEffect, d = this.isHorizontal(), c = this.virtual && this.params.virtual.enabled;
        let p, h = 0;
        o.shadow && (d ? (0 === (p = t.find(".swiper-cube-shadow")).length && (p = l('<div class="swiper-cube-shadow"></div>'), t.append(p)), p.css({height: `${i}px`})) : 0 === (p = e.find(".swiper-cube-shadow")).length && (p = l('<div class="swiper-cube-shadow"></div>'), e.append(p)));
        for (let e = 0; e < s.length; e += 1) {
          const t = s.eq(e);
          let i = e;
          c && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
          let a = 90 * i, p = Math.floor(a / 360);
          n && (a = -a, p = Math.floor(-a / 360));
          const u = Math.max(Math.min(t[0].progress, 1), -1);
          let g = 0, m = 0, f = 0;
          i % 4 == 0 ? (g = 4 * -p * r, f = 0) : (i - 1) % 4 == 0 ? (g = 0, f = 4 * -p * r) : (i - 2) % 4 == 0 ? (g = r + 4 * p * r, f = r) : (i - 3) % 4 == 0 && (g = -r, f = 3 * r + 4 * r * p), n && (g = -g), d || (m = g, g = 0);
          const v = `rotateX(${d ? 0 : -a}deg) rotateY(${d ? a : 0}deg) translate3d(${g}px, ${m}px, ${f}px)`;
          if (u <= 1 && u > -1 && (h = 90 * i + 90 * u, n && (h = 90 * -i - 90 * u)), t.transform(v), o.slideShadows) {
            let e = d ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
              s = d ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = l(`<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`), t.append(e)), 0 === s.length && (s = l(`<div class="swiper-slide-shadow-${d ? "right" : "bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = Math.max(-u, 0)), s.length && (s[0].style.opacity = Math.max(u, 0))
          }
        }
        if (t.css({
          "-webkit-transform-origin": `50% 50% -${r / 2}px`,
          "-moz-transform-origin": `50% 50% -${r / 2}px`,
          "-ms-transform-origin": `50% 50% -${r / 2}px`,
          "transform-origin": `50% 50% -${r / 2}px`
        }), o.shadow) if (d) p.transform(`translate3d(0px, ${i / 2 + o.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`); else {
          const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = o.shadowScale,
            i = o.shadowScale / t, n = o.shadowOffset;
          p.transform(`scale3d(${s}, 1, ${i}) translate3d(0px, ${a / 2 + n}px, ${-a / 2 / i}px) rotateX(-90deg)`)
        }
        const u = S.isSafari || S.isUiWebView ? -r / 2 : 0;
        t.transform(`translate3d(0px,0,${u}px) rotateX(${this.isHorizontal() ? 0 : h}deg) rotateY(${this.isHorizontal() ? -h : 0}deg)`)
      }, setTransition(e) {
        const {$el: t, slides: s} = this;
        s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
      }
    };
    const ee = {
      setTranslate() {
        const e = this, {slides: t, rtlTranslate: s} = e;
        for (let i = 0; i < t.length; i += 1) {
          const a = t.eq(i);
          let n = a[0].progress;
          e.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
          let r = -180 * n, o = 0, d = -a[0].swiperSlideOffset, c = 0;
          if (e.isHorizontal() ? s && (r = -r) : (c = d, d = 0, o = -r, r = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, e.params.flipEffect.slideShadows) {
            let t = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              s = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
            0 === t.length && (t = l(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`), a.append(t)), 0 === s.length && (s = l(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`), a.append(s)), t.length && (t[0].style.opacity = Math.max(-n, 0)), s.length && (s[0].style.opacity = Math.max(n, 0))
          }
          a.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`)
        }
      }, setTransition(e) {
        const t = this, {slides: s, activeIndex: i, $wrapperEl: a} = t;
        if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          let e = !1;
          s.eq(i).transitionEnd(function () {
            if (e) return;
            if (!t || t.destroyed) return;
            e = !0, t.animating = !1;
            const s = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < s.length; e += 1) a.trigger(s[e])
          })
        }
      }
    };
    const te = {
      setTranslate() {
        const {width: e, height: t, slides: s, $wrapperEl: i, slidesSizesGrid: a} = this,
          n = this.params.coverflowEffect, r = this.isHorizontal(), o = this.translate, d = r ? e / 2 - o : t / 2 - o,
          c = r ? n.rotate : -n.rotate, p = n.depth;
        for (let e = 0, t = s.length; e < t; e += 1) {
          const t = s.eq(e), i = a[e], o = (d - t[0].swiperSlideOffset - i / 2) / i * n.modifier;
          let h = r ? c * o : 0, u = r ? 0 : c * o, g = -p * Math.abs(o), m = r ? 0 : n.stretch * o,
            f = r ? n.stretch * o : 0;
          Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0);
          const v = `translate3d(${f}px,${m}px,${g}px)  rotateX(${u}deg) rotateY(${h}deg)`;
          if (t.transform(v), t[0].style.zIndex = 1 - Math.abs(Math.round(o)), n.slideShadows) {
            let e = r ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
              s = r ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = l(`<div class="swiper-slide-shadow-${r ? "left" : "top"}"></div>`), t.append(e)), 0 === s.length && (s = l(`<div class="swiper-slide-shadow-${r ? "right" : "bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = o > 0 ? o : 0), s.length && (s[0].style.opacity = -o > 0 ? -o : 0)
          }
        }
        if (h.pointerEvents || h.prefixedPointerEvents) {
          i[0].style.perspectiveOrigin = `${d}px 50%`
        }
      }, setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      }
    };
    const se = [P, k, A, D, O, G, B, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create() {
        p.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: Y.enable.bind(this),
            disable: Y.disable.bind(this),
            handle: Y.handle.bind(this),
            handleMouseEnter: Y.handleMouseEnter.bind(this),
            handleMouseLeave: Y.handleMouseLeave.bind(this),
            lastScrollTime: p.now()
          }
        })
      },
      on: {
        init() {
          this.params.mousewheel.enabled && this.mousewheel.enable()
        }, destroy() {
          this.mousewheel.enabled && this.mousewheel.disable()
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create() {
        p.extend(this, {
          navigation: {
            init: X.init.bind(this),
            update: X.update.bind(this),
            destroy: X.destroy.bind(this)
          }
        })
      },
      on: {
        init() {
          this.navigation.init(), this.navigation.update()
        }, toEdge() {
          this.navigation.update()
        }, fromEdge() {
          this.navigation.update()
        }, destroy() {
          this.navigation.destroy()
        }, click(e) {
          const t = this, {$nextEl: s, $prevEl: i} = t.navigation;
          !t.params.navigation.hideOnClick || l(e.target).is(i) || l(e.target).is(s) || (s && s.toggleClass(t.params.navigation.hiddenClass), i && i.toggleClass(t.params.navigation.hiddenClass))
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: e => e,
          formatFractionTotal: e => e,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create() {
        p.extend(this, {
          pagination: {
            init: V.init.bind(this),
            render: V.render.bind(this),
            update: V.update.bind(this),
            destroy: V.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        })
      },
      on: {
        init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update()
        }, activeIndexChange() {
          const e = this;
          e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
        }, snapIndexChange() {
          const e = this;
          e.params.loop || e.pagination.update()
        }, slidesLengthChange() {
          const e = this;
          e.params.loop && (e.pagination.render(), e.pagination.update())
        }, snapGridLengthChange() {
          const e = this;
          e.params.loop || (e.pagination.render(), e.pagination.update())
        }, destroy() {
          this.pagination.destroy()
        }, click(e) {
          const t = this;
          t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !l(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create() {
        p.extend(this, {
          scrollbar: {
            init: R.init.bind(this),
            destroy: R.destroy.bind(this),
            updateSize: R.updateSize.bind(this),
            setTranslate: R.setTranslate.bind(this),
            setTransition: R.setTransition.bind(this),
            enableDraggable: R.enableDraggable.bind(this),
            disableDraggable: R.disableDraggable.bind(this),
            setDragPosition: R.setDragPosition.bind(this),
            onDragStart: R.onDragStart.bind(this),
            onDragMove: R.onDragMove.bind(this),
            onDragEnd: R.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        })
      },
      on: {
        init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
        }, update() {
          this.scrollbar.updateSize()
        }, resize() {
          this.scrollbar.updateSize()
        }, observerUpdate() {
          this.scrollbar.updateSize()
        }, setTranslate() {
          this.scrollbar.setTranslate()
        }, setTransition(e) {
          this.scrollbar.setTransition(e)
        }, destroy() {
          this.scrollbar.destroy()
        }
      }
    }, {
      name: "parallax", params: {parallax: {enabled: !1}}, create() {
        p.extend(this, {
          parallax: {
            setTransform: Z.setTransform.bind(this),
            setTranslate: Z.setTranslate.bind(this),
            setTransition: Z.setTransition.bind(this)
          }
        })
      }, on: {
        beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
        }, init() {
          this.params.parallax && this.parallax.setTranslate()
        }, setTranslate() {
          this.params.parallax && this.parallax.setTranslate()
        }, setTransition(e) {
          this.params.parallax && this.parallax.setTransition(e)
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create() {
        const e = this, t = {
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
        };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(s => {
          t[s] = _[s].bind(e)
        }), p.extend(e, {zoom: t})
      },
      on: {
        init() {
          const e = this;
          e.params.zoom.enabled && e.zoom.enable()
        }, destroy() {
          this.zoom.disable()
        }, touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e)
        }, touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e)
        }, doubleTap(e) {
          const t = this;
          t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
        }, transitionEnd() {
          const e = this;
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create() {
        p.extend(this, {lazy: {initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this)}})
      },
      on: {
        beforeInit() {
          const e = this;
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        }, init() {
          const e = this;
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
        }, scroll() {
          const e = this;
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
        }, resize() {
          const e = this;
          e.params.lazy.enabled && e.lazy.load()
        }, scrollbarDragMove() {
          const e = this;
          e.params.lazy.enabled && e.lazy.load()
        }, transitionStart() {
          const e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
        }, transitionEnd() {
          const e = this;
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
        }
      }
    }, {
      name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create() {
        p.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: j.getInterpolateFunction.bind(this),
            setTranslate: j.setTranslate.bind(this),
            setTransition: j.setTransition.bind(this)
          }
        })
      }, on: {
        update() {
          const e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }, resize() {
          const e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }, observerUpdate() {
          const e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }, setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t)
        }, setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t)
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create() {
        const e = this;
        p.extend(e, {a11y: {liveRegion: l(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}}), Object.keys(F).forEach(t => {
          e.a11y[t] = F[t].bind(e)
        })
      },
      on: {
        init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
        }, toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        }, fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        }, paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination()
        }, destroy() {
          this.params.a11y.enabled && this.a11y.destroy()
        }
      }
    }, {
      name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create() {
        p.extend(this, {
          history: {
            init: U.init.bind(this),
            setHistory: U.setHistory.bind(this),
            setHistoryPopState: U.setHistoryPopState.bind(this),
            scrollToSlide: U.scrollToSlide.bind(this),
            destroy: U.destroy.bind(this)
          }
        })
      }, on: {
        init() {
          const e = this;
          e.params.history.enabled && e.history.init()
        }, destroy() {
          const e = this;
          e.params.history.enabled && e.history.destroy()
        }, transitionEnd() {
          const e = this;
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
        }
      }
    }, {
      name: "hash-navigation", params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}}, create() {
        p.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: q.init.bind(this),
            destroy: q.destroy.bind(this),
            setHash: q.setHash.bind(this),
            onHashCange: q.onHashCange.bind(this)
          }
        })
      }, on: {
        init() {
          const e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.init()
        }, destroy() {
          const e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.destroy()
        }, transitionEnd() {
          const e = this;
          e.hashNavigation.initialized && e.hashNavigation.setHash()
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create() {
        const e = this;
        p.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: K.run.bind(e),
            start: K.start.bind(e),
            stop: K.stop.bind(e),
            pause: K.pause.bind(e),
            onTransitionEnd(t) {
              e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
            }
          }
        })
      },
      on: {
        init() {
          const e = this;
          e.params.autoplay.enabled && e.autoplay.start()
        }, beforeTransitionStart(e, t) {
          const s = this;
          s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop())
        }, sliderFirstMove() {
          const e = this;
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
        }, destroy() {
          const e = this;
          e.autoplay.running && e.autoplay.stop()
        }
      }
    }, {
      name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create() {
        p.extend(this, {
          fadeEffect: {
            setTranslate: J.setTranslate.bind(this),
            setTransition: J.setTransition.bind(this)
          }
        })
      }, on: {
        beforeInit() {
          if ("fade" !== this.params.effect) return;
          this.classNames.push(`${this.params.containerModifierClass}fade`);
          const e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          p.extend(this.params, e), p.extend(this.originalParams, e)
        }, setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate()
        }, setTransition(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-cube",
      params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
      create() {
        p.extend(this, {
          cubeEffect: {
            setTranslate: Q.setTranslate.bind(this),
            setTransition: Q.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          if ("cube" !== this.params.effect) return;
          this.classNames.push(`${this.params.containerModifierClass}cube`), this.classNames.push(`${this.params.containerModifierClass}3d`);
          const e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          p.extend(this.params, e), p.extend(this.originalParams, e)
        }, setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate()
        }, setTransition(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create() {
        p.extend(this, {
          flipEffect: {
            setTranslate: ee.setTranslate.bind(this),
            setTransition: ee.setTransition.bind(this)
          }
        })
      }, on: {
        beforeInit() {
          if ("flip" !== this.params.effect) return;
          this.classNames.push(`${this.params.containerModifierClass}flip`), this.classNames.push(`${this.params.containerModifierClass}3d`);
          const e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          p.extend(this.params, e), p.extend(this.originalParams, e)
        }, setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate()
        }, setTransition(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-coverflow",
      params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
      create() {
        p.extend(this, {
          coverflowEffect: {
            setTranslate: te.setTranslate.bind(this),
            setTransition: te.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          "coverflow" === this.params.effect && (this.classNames.push(`${this.params.containerModifierClass}coverflow`), this.classNames.push(`${this.params.containerModifierClass}3d`), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
        }, setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
        }, setTransition(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
        }
      }
    }];
    void 0 === z.use && (z.use = z.Class.use, z.installModule = z.Class.installModule), z.use(se);
    var ie = z, ae = (s("mgS3"), s("3Zko")), ne = s("NYxO"), re = s("o7co"), oe = {
      data: function () {
        return {baseImgUrl: "https://raw.githubusercontent.com/W-Qing/Vue-MintShop/master/mintshop-client/src/components/ShopList/images/"}
      }, computed: a()({}, Object(ne.d)(["shops"])), components: {Star: re.a}
    }, le = {
      render: function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "shop_container"}, [e.shops.length ? i("ul", {staticClass: "shop_list"}, e._l(e.shops, function (t, s) {
          return i("li", {
            key: s, staticClass: "shop_li border-1px", on: {
              click: function (t) {
                e.$router.push("/shop")
              }
            }
          }, [i("a", [i("div", {staticClass: "shop_left"}, [i("img", {
            staticClass: "shop_img",
            attrs: {src: e.baseImgUrl + t.image_path}
          })]), e._v(" "), i("div", {staticClass: "shop_right"}, [i("section", {staticClass: "shop_detail_header"}, [i("h4", {staticClass: "shop_title ellipsis"}, [e._v(e._s(t.name))]), e._v(" "), i("ul", {staticClass: "shop_detail_ul"}, e._l(t.supports, function (t, s) {
            return i("li", {
              key: s,
              staticClass: "supports"
            }, [e._v("\n                " + e._s(t.icon_name) + "\n              ")])
          }))]), e._v(" "), i("section", {staticClass: "shop_rating_order"}, [i("section", {staticClass: "shop_rating_order_left"}, [i("Star", {
            attrs: {
              score: t.rating,
              size: 24
            }
          }), e._v(" "), i("div", {staticClass: "rating_section"}, [e._v("\n                " + e._s(t.rating) + "\n              ")]), e._v(" "), i("div", {staticClass: "order_section"}, [e._v("\n                月售" + e._s(t.recent_order_num) + "单\n              ")])], 1), e._v(" "), i("section", {staticClass: "shop_rating_order_right"}, [i("span", {staticClass: "delivery_style delivery_right"}, [e._v(e._s(t.delivery_mode))])])]), e._v(" "), i("section", {staticClass: "shop_distance"}, [i("p", {staticClass: "shop_delivery_msg"}, [i("span", [e._v("¥" + e._s(t.minimum_order_amount) + "起送")]), e._v(" "), i("span", {staticClass: "segmentation"}, [e._v("/")]), e._v(" "), i("span", [e._v("配送费约¥" + e._s(t.delivery_fee))])])])])])])
        })) : i("ul", e._l(6, function (e) {
          return i("li", {key: e}, [i("img", {attrs: {src: s("yP0H"), alt: "back"}})])
        }))])
      }, staticRenderFns: []
    };
    var de = s("VU/8")(oe, le, !1, function (e) {
      s("NlzQ")
    }, null, null).exports, ce = {
      data: function () {
        return {baseImageUrl: "https://fuss10.elemecdn.com"}
      },
      components: {HeaderTop: ae.a, ShopList: de},
      computed: a()({}, Object(ne.d)(["address", "categorys", "userInfo"]), {
        categorysArr: function () {
          var e = [], t = [];
          return this.categorys.forEach(function (s) {
            8 === t.length && (t = []), 0 === t.length && e.push(t), t.push(s)
          }), e
        }
      }),
      watch: {
        categorys: function (e) {
          this.$nextTick(function () {
            new ie(".swiper-container", {autoplay: !0, pagination: {el: ".swiper-pagination", clickable: !0}})
          })
        }
      },
      mounted: function () {
        this.$store.dispatch("getCategorys"), this.$store.dispatch("getShops")
      }
    }, pe = {
      render: function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("section", {staticClass: "msite"}, [i("HeaderTop", {attrs: {title: e.address.name}}, [i("router-link", {
          staticClass: "header_search",
          attrs: {slot: "left", to: "/search"},
          slot: "left"
        }, [i("i", {staticClass: "iconfont icon-sousuo"})]), e._v(" "), i("router-link", {
          staticClass: "header_login",
          attrs: {slot: "right", to: e.userInfo.id ? "/profile" : "/login"},
          slot: "right"
        }, [e.userInfo.id ? i("span", {staticClass: "header_login_text"}, [i("i", {staticClass: "iconfont icon-yonghuming"})]) : i("span", {staticClass: "header_login_text"}, [e._v("\n        登录|注册\n      ")])])], 1), e._v(" "), i("nav", {staticClass: "msite_nav"}, [e.categorys.length ? i("div", {staticClass: "swiper-container"}, [i("div", {staticClass: "swiper-wrapper"}, e._l(e.categorysArr, function (t, s) {
          return i("div", {key: s, staticClass: "swiper-slide"}, e._l(t, function (t, s) {
            return i("a", {
              key: s,
              staticClass: "link_to_food",
              attrs: {href: "javascript:"}
            }, [i("div", {staticClass: "food_container"}, [i("img", {attrs: {src: e.baseImageUrl + t.image_url}})]), e._v(" "), i("span", [e._v(e._s(t.title))])])
          }))
        })), e._v(" "), i("div", {staticClass: "swiper-pagination"})]) : i("img", {
          attrs: {
            src: s("nUDA"),
            alt: "back"
          }
        })]), e._v(" "), i("div", {staticClass: "msite_shop_list"}, [e._m(0), e._v(" "), i("ShopList")], 1)], 1)
      }, staticRenderFns: [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "shop_header"}, [t("i", {staticClass: "iconfont icon-xuanxiang"}), this._v(" "), t("span", {staticClass: "shop_header_title"}, [this._v("附近商家")])])
      }]
    };
    var he = s("VU/8")(ce, pe, !1, function (e) {
      s("ao80")
    }, null, null);
    t.default = he.exports
  }, mgS3: function (e, t) {
  }, nUDA: function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPgogIDxkZWZzPgogICAgPHBhdGggaWQ9ImIiIGQ9Ik0wIDBoMTA4MHY0ODlIMHoiLz4KICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIgogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Zz4KICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4KICAgIDwvZz4KICAgIDxnIGZpbGw9IiNGNkY2RjYiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAzNikiPgogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4KICAgICAgPC9nPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDYgMzYpIj4KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDM2KSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPgogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPgogICAgICA8L2c+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAzNikiPgogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgZmlsbD0iI0Y2RjZGNiI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2IDI1MikiPgogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4KICAgICAgPC9nPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDYgMjUyKSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPgogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPgogICAgICA8L2c+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNiAyNTIpIj4KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODg2IDI1MikiPgogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+"
  }, yP0H: function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPg0KICA8ZGVmcz4NCiAgICA8cGF0aCBpZD0iYiIgZD0iTTAgMGgxMDgwdjI2MEgweiIvPg0KICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICA8ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+DQogICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIg0KICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz4NCiAgICA8L2ZpbHRlcj4NCiAgPC9kZWZzPg0KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiPg0KICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPg0KICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICA8cGF0aCBmaWxsPSIjRjZGNkY2IiBkPSJNMjMwIDQ0aDUzM3Y0NkgyMzB6Ii8+DQogICAgPHJlY3Qgd2lkdGg9IjE3MiIgaGVpZ2h0PSIxNzIiIHg9IjMwIiB5PSI0NCIgZmlsbD0iI0Y2RjZGNiIgcng9IjQiLz4NCiAgICA8cGF0aCBmaWxsPSIjRjZGNkY2Ig0KICAgICAgICAgIGQ9Ik0yMzAgMTE4aDM2OXYzMEgyMzB6TTIzMCAxODJoMzIzdjMwSDIzMHpNODEyIDExNWgyMzh2MzlIODEyek04MDggMTg0aDI0MnYzMEg4MDh6TTkxNyA0OGgxMzN2MzdIOTE3eiIvPg0KICA8L2c+DQo8L3N2Zz4="
  }
});
//# sourceMappingURL=1.bc1ac628d35cb81de0c9.js.map
