import y, { useState as T, useEffect as M, useRef as ie } from "react";
import './index.css';var L = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function ve() {
  if (Q) return P;
  Q = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(a, s, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      c = {};
      for (var f in s)
        f !== "key" && (c[f] = s[f]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: a,
      key: u,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return P.Fragment = n, P.jsx = r, P.jsxs = r, P;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function ge() {
  return ee || (ee = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === fe ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case x:
          return "StrictMode";
        case ue:
          return "Suspense";
        case he:
          return "SuspenseList";
        case _e:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case D:
            return "Portal";
          case w:
            return (t.displayName || "Context") + ".Provider";
          case A:
            return (t._context.displayName || "Context") + ".Consumer";
          case le:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case de:
            return o = t.displayName || null, o !== null ? o : e(t.type) || "Memo";
          case F:
            o = t._payload, t = t._init;
            try {
              return e(t(o));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function r(t) {
      try {
        n(t);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var l = o.error, d = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(t);
      }
    }
    function a(t) {
      if (t === h) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === F)
        return "<...>";
      try {
        var o = e(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = I.A;
      return t === null ? null : t.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(t) {
      if (U.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function f(t, o) {
      function l() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function g() {
      var t = e(this.type);
      return q[t] || (q[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function v(t, o, l, d, j, C, Y, $) {
      return l = C.ref, t = {
        $$typeof: S,
        type: t,
        key: o,
        props: C,
        _owner: j
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: g
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
        value: Y
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function p(t, o, l, d, j, C, Y, $) {
      var _ = o.children;
      if (_ !== void 0)
        if (d)
          if (pe(_)) {
            for (d = 0; d < _.length; d++)
              N(_[d]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(_);
      if (U.call(o, "key")) {
        _ = e(t);
        var O = Object.keys(o).filter(function(me) {
          return me !== "key";
        });
        d = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", K[_ + d] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          _,
          O,
          _
        ), K[_ + d] = !0);
      }
      if (_ = null, l !== void 0 && (r(l), _ = "" + l), u(o) && (r(o.key), _ = "" + o.key), "key" in o) {
        l = {};
        for (var B in o)
          B !== "key" && (l[B] = o[B]);
      } else l = o;
      return _ && f(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), v(
        t,
        _,
        C,
        j,
        s(),
        l,
        Y,
        $
      );
    }
    function N(t) {
      typeof t == "object" && t !== null && t.$$typeof === S && t._store && (t._store.validated = 1);
    }
    var R = y, S = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), w = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), fe = Symbol.for("react.client.reference"), I = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, pe = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var G, q = {}, J = R.react_stack_bottom_frame.bind(
      R,
      c
    )(), X = H(a(c)), K = {};
    k.Fragment = h, k.jsx = function(t, o, l, d, j) {
      var C = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        t,
        o,
        l,
        !1,
        d,
        j,
        C ? Error("react-stack-top-frame") : J,
        C ? H(a(t)) : X
      );
    }, k.jsxs = function(t, o, l, d, j) {
      var C = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        t,
        o,
        l,
        !0,
        d,
        j,
        C ? Error("react-stack-top-frame") : J,
        C ? H(a(t)) : X
      );
    };
  })()), k;
}
var te;
function be() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? L.exports = ve() : L.exports = ge()), L.exports;
}
var i = be(), ce = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, re = y.createContext && /* @__PURE__ */ y.createContext(ce), Ce = ["attr", "size", "title"];
function xe(e, n) {
  if (e == null) return {};
  var r = we(e, n), a, s;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (s = 0; s < c.length; s++)
      a = c[s], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function we(e, n) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, V.apply(this, arguments);
}
function ne(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function z(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ne(Object(r), !0).forEach(function(a) {
      je(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function je(e, n, r) {
  return n = Ee(n), n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Ee(e) {
  var n = ye(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ye(e, n) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function se(e) {
  return e && e.map((n, r) => /* @__PURE__ */ y.createElement(n.tag, z({
    key: r
  }, n.attr), se(n.child)));
}
function m(e) {
  return (n) => /* @__PURE__ */ y.createElement(Re, V({
    attr: z({}, e.attr)
  }, n), se(e.child));
}
function Re(e) {
  var n = (r) => {
    var {
      attr: a,
      size: s,
      title: c
    } = e, u = xe(e, Ce), f = s || r.size || "1em", g;
    return r.className && (g = r.className), e.className && (g = (g ? g + " " : "") + e.className), /* @__PURE__ */ y.createElement("svg", V({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, u, {
      className: g,
      style: z(z({
        color: e.color || r.color
      }, r.style), e.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ y.createElement("title", null, c), e.children);
  };
  return re !== void 0 ? /* @__PURE__ */ y.createElement(re.Consumer, null, (r) => n(r)) : n(ce);
}
function Oe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Te(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Pe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function ke(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Me(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Ve(e) {
  return m({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ze(e) {
  return m({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function De(e) {
  return m({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const Ie = "_captcha__wrapper_1drdb_5", He = "_captcha__failed_1drdb_91", Ye = "_captcha__failed__content_1drdb_121", $e = "_captcha__btn_1drdb_149", Be = "_captcha__btn__main_1drdb_181", We = "_captcha__btn__footer_1drdb_205", Fe = "_captcha__unchecked_1drdb_215", Ue = "_captcha__content_1drdb_231", E = {
  captcha__wrapper: Ie,
  captcha__failed: He,
  captcha__failed__content: Ye,
  captcha__btn: $e,
  captcha__btn__main: Be,
  captcha__btn__footer: We,
  captcha__unchecked: Fe,
  captcha__content: Ue
}, ae = [
  Pe,
  ke,
  Me,
  Ne,
  Se,
  Ae,
  Le,
  Ze
];
function Ge() {
  const [e, n] = T(7);
  M(() => {
    const a = setInterval(() => {
      n((s) => (s + 1) % ae.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const r = ae[e];
  return /* @__PURE__ */ i.jsx(r, { style: { margin: -8 }, size: 46 });
}
const qe = "_timer__wrapper_17tk4_1", W = {
  timer__wrapper: qe,
  "timer--last": "_timer--last_17tk4_33"
};
function Je(e) {
  return e < 10;
}
function Xe({ start: e = 60, on_time_finished: n, on_change: r }) {
  const [a, s] = T(e), c = ie(e);
  return M(() => {
    if (a <= 0) {
      n?.();
      return;
    }
    const u = setTimeout(() => {
      s((f) => f - 1), c.current -= 1, r(c.current);
    }, 1e3);
    return () => clearTimeout(u);
  }, [a]), M(() => {
    s(e);
  }, [e]), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${W.timer__wrapper} ${Je(a) ? W["timer--last"] : W["timer--normal"]}`,
      children: /* @__PURE__ */ i.jsx("span", { children: a })
    }
  );
}
const Ke = "_alphabet_showcase_e7eh5_1", Qe = "_alphabet_input_e7eh5_41", et = "_light_e7eh5_79", Z = {
  alphabet_showcase: Ke,
  alphabet_input: Qe,
  light: et,
  "light--active": "_light--active_e7eh5_95"
}, oe = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
function tt({
  difficulty: e = "easy",
  time: n = 26,
  total_light_glows: r = 3,
  onSuccess: a,
  onFail: s
}) {
  const [c, u] = T({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [f, g] = T(n), v = ie(null);
  let p = oe;
  (e === "medium" || e === "very hard") && (p = [...oe].reverse()), M(() => {
    v.current.focus();
    const h = Array(r).fill(null).map((x) => ({
      time: Math.floor(Math.random() * (n - 1)),
      duration: Math.floor(Math.random() * n * 100)
    }));
    u((x) => ({ ...x, lights: h }));
  }, []);
  const N = () => {
    c.active && s({
      score: 0,
      message: "My brother could type it faster."
    }), u((h) => ({ ...h, active: !1 }));
  }, R = (h) => {
    if (!c.active)
      return;
    const x = h.key;
    c.glow && (a({
      score: 0,
      message: "Told you. Don't type while the light is glowing"
    }), u((b) => ({ ...b, active: !1 }))), x === p[c.index + 1] ? (x === p.at(-1) && (a({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), u((b) => ({ ...b, active: !1 }))), u((b) => ({ ...b, index: b.index + 1 }))) : s({
      score: (c.index + 1) / 26,
      message: "You are the typo master"
    });
  }, S = () => {
    v.current.value = "";
  }, D = (h) => {
    g(h);
  };
  return M(() => {
    let h;
    if (c.lights) {
      const x = c.lights.map((w) => w.time), b = c.lights.map((w) => w.duration), A = x.indexOf(f);
      A !== -1 && (u((w) => ({ ...w, glow: !0 })), h = setTimeout(() => {
        u((w) => ({ ...w, glow: !1 }));
      }, b[A]));
    }
    return () => h && clearTimeout(h);
  }, [f]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Type to win" }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Write ",
          p[0],
          " to ",
          p.at(-1),
          " in given time. No backspaces. Only lowercase allowed.",
          " ",
          (e === "hard" || e === "very hard") && /* @__PURE__ */ i.jsx("span", { children: "Don't write when the light is glowing" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(
        Xe,
        {
          start: n,
          on_time_finished: N,
          on_change: D
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("main", { children: [
      (e === "hard" || e === "very hard") && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: `${Z.light} ${c.glow ? Z["light--active"] : ""}`
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: Z.alphabet_showcase, children: c.index >= 0 && p.slice(0, c.index + 1).map((h) => /* @__PURE__ */ i.jsx("span", { children: h }, h)) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          ref: v,
          onKeyDown: R,
          onKeyUp: S,
          className: Z.alphabet_input
        }
      )
    ] })
  ] });
}
function nt({ difficulty: e, onComplete: n }) {
  const [r, a] = T(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [s, c] = T(null), u = () => {
    a((v) => v === "initial" ? "progress" : v);
  }, f = ({ score: v, message: p }) => {
    c({
      score: v,
      message: p,
      type: "failure"
    });
  }, g = ({ score: v, message: p }) => {
    c({
      score: v,
      message: p,
      type: "success"
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: E.captcha__wrapper, children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: E.captcha__btn,
        onClick: u,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: E.captcha__btn__main, children: [
            r === "initial" && /* @__PURE__ */ i.jsx("div", { className: E.captcha__unchecked }),
            r === "success" && /* @__PURE__ */ i.jsx(Oe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r === "error" && /* @__PURE__ */ i.jsx(
              Te,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            r === "progress" && /* @__PURE__ */ i.jsx(Ge, {}),
            /* @__PURE__ */ i.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: E.captcha__btn__footer, children: /* @__PURE__ */ i.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ i.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    r === "progress" && /* @__PURE__ */ i.jsxs("div", { className: E.captcha__content, children: [
      /* @__PURE__ */ i.jsx(
        tt,
        {
          difficulty: "hard",
          time: 10,
          onFail: f,
          onSuccess: g
        }
      ),
      s && /* @__PURE__ */ i.jsx("div", { className: E.captcha__failed, children: /* @__PURE__ */ i.jsxs("div", { className: E.captcha__failed__content, children: [
        s.type === "failure" ? /* @__PURE__ */ i.jsx(Ve, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ i.jsx(ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ i.jsx("p", { children: s.message }),
        /* @__PURE__ */ i.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ i.jsx(De, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  nt as Captcha
};
