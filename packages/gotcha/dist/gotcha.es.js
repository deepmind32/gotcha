import j, { useState as k, useEffect as T, useRef as me } from "react";
import './index.css';var P = { exports: {} }, R = {};
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
function ve() {
  if (G) return R;
  G = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(a, i, s) {
    var h = null;
    if (s !== void 0 && (h = "" + s), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      s = {};
      for (var u in i)
        u !== "key" && (s[u] = i[u]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return R.Fragment = n, R.jsx = r, R.jsxs = r, R;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function be() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === he ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case M:
          return "Fragment";
        case oe:
          return "Profiler";
        case ae:
          return "StrictMode";
        case le:
          return "Suspense";
        case ue:
          return "SuspenseList";
        case _e:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case ne:
            return "Portal";
          case ie:
            return (t.displayName || "Context") + ".Provider";
          case ce:
            return (t._context.displayName || "Context") + ".Consumer";
          case se:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case de:
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
      if (t === M) return "<>";
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
      var t = A.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function h(t) {
      if (Y.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function u(t, o) {
      function l() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function p() {
      var t = e(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function m(t, o, l, d, g, v, Z, V) {
      return l = v.ref, t = {
        $$typeof: E,
        type: t,
        key: o,
        props: v,
        _owner: g
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: p
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
        value: Z
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function C(t, o, l, d, g, v, Z, V) {
      var _ = o.children;
      if (_ !== void 0)
        if (d)
          if (fe(_)) {
            for (d = 0; d < _.length; d++)
              b(_[d]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(_);
      if (Y.call(o, "key")) {
        _ = e(t);
        var y = Object.keys(o).filter(function(pe) {
          return pe !== "key";
        });
        d = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", U[_ + d] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          _,
          y,
          _
        ), U[_ + d] = !0);
      }
      if (_ = null, l !== void 0 && (r(l), _ = "" + l), h(o) && (r(o.key), _ = "" + o.key), "key" in o) {
        l = {};
        for (var z in o)
          z !== "key" && (l[z] = o[z]);
      } else l = o;
      return _ && u(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), m(
        t,
        _,
        v,
        g,
        i(),
        l,
        Z,
        V
      );
    }
    function b(t) {
      typeof t == "object" && t !== null && t.$$typeof === E && t._store && (t._store.validated = 1);
    }
    var w = j, E = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), he = Symbol.for("react.client.reference"), A = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, fe = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var B, W = {}, $ = w.react_stack_bottom_frame.bind(
      w,
      s
    )(), F = L(a(s)), U = {};
    O.Fragment = M, O.jsx = function(t, o, l, d, g) {
      var v = 1e4 > A.recentlyCreatedOwnerStacks++;
      return C(
        t,
        o,
        l,
        !1,
        d,
        g,
        v ? Error("react-stack-top-frame") : $,
        v ? L(a(t)) : F
      );
    }, O.jsxs = function(t, o, l, d, g) {
      var v = 1e4 > A.recentlyCreatedOwnerStacks++;
      return C(
        t,
        o,
        l,
        !0,
        d,
        g,
        v ? Error("react-stack-top-frame") : $,
        v ? L(a(t)) : F
      );
    };
  })()), O;
}
var J;
function Ce() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? P.exports = ve() : P.exports = be()), P.exports;
}
var c = Ce(), te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, X = j.createContext && /* @__PURE__ */ j.createContext(te), ge = ["attr", "size", "title"];
function xe(e, n) {
  if (e == null) return {};
  var r = je(e, n), a, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      a = s[i], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function je(e, n) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, N.apply(this, arguments);
}
function K(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? K(Object(r), !0).forEach(function(a) {
      we(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function we(e, n, r) {
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
function re(e) {
  return e && e.map((n, r) => /* @__PURE__ */ j.createElement(n.tag, S({
    key: r
  }, n.attr), re(n.child)));
}
function f(e) {
  return (n) => /* @__PURE__ */ j.createElement(Re, N({
    attr: S({}, e.attr)
  }, n), re(e.child));
}
function Re(e) {
  var n = (r) => {
    var {
      attr: a,
      size: i,
      title: s
    } = e, h = xe(e, ge), u = i || r.size || "1em", p;
    return r.className && (p = r.className), e.className && (p = (p ? p + " " : "") + e.className), /* @__PURE__ */ j.createElement("svg", N({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, h, {
      className: p,
      style: S(S({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ j.createElement("title", null, s), e.children);
  };
  return X !== void 0 ? /* @__PURE__ */ j.createElement(X.Consumer, null, (r) => n(r)) : n(te);
}
function Oe(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function ke(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Pe(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Ve(e) {
  return f({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ze(e) {
  return f({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ie(e) {
  return f({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const De = "_captcha__wrapper_1drdb_5", He = "_captcha__failed_1drdb_91", Ye = "_captcha__failed__content_1drdb_121", Be = "_captcha__btn_1drdb_149", We = "_captcha__btn__main_1drdb_181", $e = "_captcha__btn__footer_1drdb_205", Fe = "_captcha__unchecked_1drdb_215", Ue = "_captcha__content_1drdb_231", x = {
  captcha__wrapper: De,
  captcha__failed: He,
  captcha__failed__content: Ye,
  captcha__btn: Be,
  captcha__btn__main: We,
  captcha__btn__footer: $e,
  captcha__unchecked: Fe,
  captcha__content: Ue
}, Q = [
  Pe,
  Te,
  Ne,
  Se,
  Me,
  Ae,
  Le,
  Ze
];
function Ge() {
  const [e, n] = k(7);
  T(() => {
    const a = setInterval(() => {
      n((i) => (i + 1) % Q.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const r = Q[e];
  return /* @__PURE__ */ c.jsx(r, { style: { margin: -8 }, size: 46 });
}
const qe = "_timer__wrapper_17tk4_1", I = {
  timer__wrapper: qe,
  "timer--last": "_timer--last_17tk4_33"
};
function Je(e) {
  return e < 10;
}
function Xe({ start: e = 60, on_time_finished: n }) {
  const [r, a] = k(e);
  return T(() => {
    if (r <= 0) {
      n?.();
      return;
    }
    const i = setTimeout(() => {
      a((s) => s - 1);
    }, 1e3);
    return () => {
      clearTimeout(i);
    };
  }, [r]), T(() => {
    a(e);
  }, [e]), /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `${I.timer__wrapper} ${Je(r) ? I["timer--last"] : I["timer--normal"]}
		`,
      children: /* @__PURE__ */ c.jsx("span", { children: r })
    }
  );
}
const Ke = "_alphabet_showcase_1akm0_1", Qe = "_alphabet_input_1akm0_41", et = "_light_1akm0_79", D = {
  alphabet_showcase: Ke,
  alphabet_input: Qe,
  light: et
}, ee = [
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
  onSuccess: r,
  onFail: a
}) {
  const [i, s] = k({
    active: !0,
    index: -1
  }), h = me(null);
  let u = ee;
  (e === "medium" || u === "very hard") && (u = ee.reverse()), T(() => {
    h.current.focus();
  }, []);
  const p = () => {
    i.active && a({
      score: 0,
      message: "My brother could type it faster."
    }), s((b) => ({ ...b, active: !1 }));
  }, m = (b) => {
    if (!i.active)
      return;
    const w = b.key;
    w === u[i.index + 1] ? (w === u.at(-1) && (r({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), s((E) => ({ ...E, active: !1 }))), s((E) => ({ ...E, index: E.index + 1 }))) : a({
      score: (i.index + 1) / 26,
      message: "You are the typo master"
    });
  }, C = () => {
    h.current.value = "";
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h3", { children: "Type to win" }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "Write ",
          u[0],
          " to ",
          u.at(-1),
          " in given time. No backspaces. Only lowercase allowed.",
          " ",
          (e === "hard" || e === "very hard") && /* @__PURE__ */ c.jsx("span", { children: "Don't write when the light is glowing" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(Xe, { start: n, on_time_finished: p })
    ] }),
    /* @__PURE__ */ c.jsxs("main", { children: [
      (e === "hard" || e === "very hard") && /* @__PURE__ */ c.jsx("div", { className: D.light }),
      /* @__PURE__ */ c.jsx("div", { className: D.alphabet_showcase, children: i.index >= 0 && u.slice(0, i.index + 1).map((b) => /* @__PURE__ */ c.jsx("span", { children: b }, b)) }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: "text",
          ref: h,
          onKeyDown: m,
          onKeyUp: C,
          className: D.alphabet_input
        }
      )
    ] })
  ] });
}
function nt({ difficulty: e, onComplete: n }) {
  const [r, a] = k(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [i, s] = k(null), h = () => {
    a((m) => m === "initial" ? "progress" : m);
  }, u = ({ score: m, message: C }) => {
    s({
      score: m,
      message: C,
      type: "failure"
    });
  }, p = ({ score: m, message: C }) => {
    s({
      score: m,
      message: C,
      type: "success"
    });
  };
  return /* @__PURE__ */ c.jsxs("div", { className: x.captcha__wrapper, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: x.captcha__btn,
        onClick: h,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: x.captcha__btn__main, children: [
            r === "initial" && /* @__PURE__ */ c.jsx("div", { className: x.captcha__unchecked }),
            r === "success" && /* @__PURE__ */ c.jsx(Oe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r === "error" && /* @__PURE__ */ c.jsx(
              ke,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            r === "progress" && /* @__PURE__ */ c.jsx(Ge, {}),
            /* @__PURE__ */ c.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: x.captcha__btn__footer, children: /* @__PURE__ */ c.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ c.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    r === "progress" && /* @__PURE__ */ c.jsxs("div", { className: x.captcha__content, children: [
      /* @__PURE__ */ c.jsx(
        tt,
        {
          difficulty: "hard",
          time: 400,
          onFail: u,
          onSuccess: p
        }
      ),
      i && /* @__PURE__ */ c.jsx("div", { className: x.captcha__failed, children: /* @__PURE__ */ c.jsxs("div", { className: x.captcha__failed__content, children: [
        i.type === "failure" ? /* @__PURE__ */ c.jsx(Ve, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ c.jsx(ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ c.jsx("p", { children: i.message }),
        /* @__PURE__ */ c.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ c.jsx(Ie, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  nt as Captcha
};
