import x, { useState as O, useEffect as z, useRef as K } from "react";
import './index.css';var y = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function me() {
  if (G) return E;
  G = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(a, i, s) {
    var _ = null;
    if (s !== void 0 && (_ = "" + s), i.key !== void 0 && (_ = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: a,
      key: _,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return E.Fragment = r, E.jsx = n, E.jsxs = n, E;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function pe() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === _e ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case S:
          return "Fragment";
        case ae:
          return "Profiler";
        case ne:
          return "StrictMode";
        case se:
          return "Suspense";
        case le:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case re:
            return "Portal";
          case ce:
            return (t.displayName || "Context") + ".Provider";
          case oe:
            return (t._context.displayName || "Context") + ".Consumer";
          case ie:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ue:
            return o = t.displayName || null, o !== null ? o : e(t.type) || "Memo";
          case H:
            o = t._payload, t = t._init;
            try {
              return e(t(o));
            } catch {
            }
        }
      return null;
    }
    function r(t) {
      return "" + t;
    }
    function n(t) {
      try {
        r(t);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var l = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), r(t);
      }
    }
    function a(t) {
      if (t === S) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === H)
        return "<...>";
      try {
        var o = e(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = N.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function _(t) {
      if ($.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, o) {
      function l() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function m() {
      var t = e(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function T(t, o, l, u, b, p, A, L) {
      return l = p.ref, t = {
        $$typeof: I,
        type: t,
        key: o,
        props: p,
        _owner: b
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function R(t, o, l, u, b, p, A, L) {
      var f = o.children;
      if (f !== void 0)
        if (u)
          if (de(f)) {
            for (u = 0; u < f.length; u++)
              v(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(f);
      if ($.call(o, "key")) {
        f = e(t);
        var j = Object.keys(o).filter(function(he) {
          return he !== "key";
        });
        u = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", F[f + u] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          j,
          f
        ), F[f + u] = !0);
      }
      if (f = null, l !== void 0 && (n(l), f = "" + l), _(o) && (n(o.key), f = "" + o.key), "key" in o) {
        l = {};
        for (var Z in o)
          Z !== "key" && (l[Z] = o[Z]);
      } else l = o;
      return f && d(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), T(
        t,
        f,
        p,
        b,
        i(),
        l,
        A,
        L
      );
    }
    function v(t) {
      typeof t == "object" && t !== null && t.$$typeof === I && t._store && (t._store.validated = 1);
    }
    var C = x, I = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), _e = Symbol.for("react.client.reference"), N = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, de = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var D, W = {}, Y = C.react_stack_bottom_frame.bind(
      C,
      s
    )(), B = M(a(s)), F = {};
    w.Fragment = S, w.jsx = function(t, o, l, u, b) {
      var p = 1e4 > N.recentlyCreatedOwnerStacks++;
      return R(
        t,
        o,
        l,
        !1,
        u,
        b,
        p ? Error("react-stack-top-frame") : Y,
        p ? M(a(t)) : B
      );
    }, w.jsxs = function(t, o, l, u, b) {
      var p = 1e4 > N.recentlyCreatedOwnerStacks++;
      return R(
        t,
        o,
        l,
        !0,
        u,
        b,
        p ? Error("react-stack-top-frame") : Y,
        p ? M(a(t)) : B
      );
    };
  })()), w;
}
var q;
function ve() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? y.exports = me() : y.exports = pe()), y.exports;
}
var c = ve(), ee = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, J = x.createContext && /* @__PURE__ */ x.createContext(ee), Ce = ["attr", "size", "title"];
function be(e, r) {
  if (e == null) return {};
  var n = ge(e, r), a, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      a = s[i], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function ge(e, r) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (r.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, P.apply(this, arguments);
}
function X(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function k(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? X(Object(n), !0).forEach(function(a) {
      xe(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function xe(e, r, n) {
  return r = je(r), r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function je(e) {
  var r = Ee(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Ee(e, r) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, r);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function te(e) {
  return e && e.map((r, n) => /* @__PURE__ */ x.createElement(r.tag, k({
    key: n
  }, r.attr), te(r.child)));
}
function h(e) {
  return (r) => /* @__PURE__ */ x.createElement(we, P({
    attr: k({}, e.attr)
  }, r), te(e.child));
}
function we(e) {
  var r = (n) => {
    var {
      attr: a,
      size: i,
      title: s
    } = e, _ = be(e, Ce), d = i || n.size || "1em", m;
    return n.className && (m = n.className), e.className && (m = (m ? m + " " : "") + e.className), /* @__PURE__ */ x.createElement("svg", P({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, _, {
      className: m,
      style: k(k({
        color: e.color || n.color
      }, n.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ x.createElement("title", null, s), e.children);
  };
  return J !== void 0 ? /* @__PURE__ */ x.createElement(J.Consumer, null, (n) => r(n)) : r(ee);
}
function Re(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function ye(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Oe(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Pe(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function ke(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Le(e) {
  return h({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function Ze(e) {
  return h({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ve(e) {
  return h({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const ze = "_captcha__wrapper_109tv_5", Ie = "_captcha__failed_109tv_93", He = "_captcha__failed__content_109tv_123", $e = "_captcha__btn_109tv_151", De = "_captcha__btn__main_109tv_183", We = "_captcha__btn__footer_109tv_207", Ye = "_captcha__unchecked_109tv_217", Be = "_captcha__content_109tv_233", g = {
  captcha__wrapper: ze,
  captcha__failed: Ie,
  captcha__failed__content: He,
  captcha__btn: $e,
  captcha__btn__main: De,
  captcha__btn__footer: We,
  captcha__unchecked: Ye,
  captcha__content: Be
}, Q = [
  Oe,
  Pe,
  ke,
  Te,
  Se,
  Ne,
  Me,
  Ae
];
function Fe() {
  const [e, r] = O(7);
  z(() => {
    const a = setInterval(() => {
      r((i) => (i + 1) % Q.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = Q[e];
  return /* @__PURE__ */ c.jsx(n, { style: { margin: -8 }, size: 46 });
}
const Ge = "_timer__wrapper_17tk4_1", V = {
  timer__wrapper: Ge,
  "timer--last": "_timer--last_17tk4_33"
};
function Ue(e) {
  return e < 10;
}
function qe({ start: e = 60, on_time_finished: r, on_change: n }) {
  const [a, i] = O(e), s = K(e);
  return z(() => {
    if (a <= 0) {
      r?.();
      return;
    }
    const _ = setTimeout(() => {
      i((d) => d - 1), s.current -= 1, n?.(s.current);
    }, 1e3);
    return () => clearTimeout(_);
  }, [a]), z(() => {
    i(e);
  }, [e]), /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `${V.timer__wrapper} ${Ue(a) ? V["timer--last"] : V["timer--normal"]}`,
      children: /* @__PURE__ */ c.jsx("span", { children: a })
    }
  );
}
const Je = "_button_u3ipf_1", Xe = {
  button: Je
};
function Qe({ children: e, className: r, ...n }) {
  return /* @__PURE__ */ c.jsx("button", { className: `${Xe.button} ${r ?? ""}`, ...n, children: e });
}
const Ke = "_main_1ex2e_1", et = {
  main: Ke
};
function tt({
  question: e,
  answer: r,
  time: n = 100,
  onSuccess: a,
  onFail: i
}) {
  const s = K(null), _ = () => {
    i({
      score: 0,
      message: "Looks like you are not a human"
    });
  }, d = () => {
    if (!s.current)
      return;
    s.current.value.toLocaleLowerCase() === r.toLocaleLowerCase() ? a({
      score: 1,
      message: "How did you get that?"
    }) : i({
      score: 0,
      message: "Wasn't it obvious for a human??"
    });
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h3", { children: "Quiz..." }),
        /* @__PURE__ */ c.jsx("p", { children: "Can you answer??" })
      ] }),
      /* @__PURE__ */ c.jsx(qe, { start: n, on_time_finished: _ })
    ] }),
    /* @__PURE__ */ c.jsxs("main", { className: et.main, children: [
      /* @__PURE__ */ c.jsxs("p", { children: [
        /* @__PURE__ */ c.jsx("span", { children: "Q:" }),
        " ",
        e
      ] }),
      /* @__PURE__ */ c.jsx("input", { type: "text", ref: s, placeholder: "Answer", autoComplete: "false" }),
      /* @__PURE__ */ c.jsx(Qe, { onClick: d, children: "Submit" })
    ] })
  ] });
}
function nt({
  difficulty: e,
  tries: r = 1,
  shuffle_on_retry: n = !1,
  on_complete: a
}) {
  const [i, s] = O(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [_, d] = O(null), m = () => {
    s((v) => v === "initial" ? "progress" : v);
  }, T = ({ score: v, message: C }) => {
    d({
      score: v,
      message: C,
      type: "failure"
    });
  }, R = ({ score: v, message: C }) => {
    d({
      score: v,
      message: C,
      type: "success"
    });
  };
  return /* @__PURE__ */ c.jsxs("div", { className: g.captcha__wrapper, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: g.captcha__btn,
        onClick: m,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: g.captcha__btn__main, children: [
            i === "initial" && /* @__PURE__ */ c.jsx("div", { className: g.captcha__unchecked }),
            i === "success" && /* @__PURE__ */ c.jsx(Re, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            i === "error" && /* @__PURE__ */ c.jsx(
              ye,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            i === "progress" && /* @__PURE__ */ c.jsx(Fe, {}),
            /* @__PURE__ */ c.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: g.captcha__btn__footer, children: /* @__PURE__ */ c.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ c.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    i === "progress" && /* @__PURE__ */ c.jsxs("div", { className: g.captcha__content, children: [
      /* @__PURE__ */ c.jsx(
        tt,
        {
          question: "What is the capital city of Nepal?",
          answer: "Kathmandu",
          onFail: T,
          onSuccess: R
        }
      ),
      _ && /* @__PURE__ */ c.jsx("div", { className: g.captcha__failed, children: /* @__PURE__ */ c.jsxs("div", { className: g.captcha__failed__content, children: [
        _.type === "failure" ? /* @__PURE__ */ c.jsx(Le, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ c.jsx(Ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ c.jsx("p", { children: _.message }),
        /* @__PURE__ */ c.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ c.jsx(Ve, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  nt as Captcha
};
