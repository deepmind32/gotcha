import C, { useState as R, useEffect as Z } from "react";
import './index.css';var y = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function pe() {
  if (U) return x;
  U = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, i, l) {
    var b = null;
    if (l !== void 0 && (b = "" + l), i.key !== void 0 && (b = "" + i.key), "key" in i) {
      l = {};
      for (var p in i)
        p !== "key" && (l[p] = i[p]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: a,
      key: b,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return x.Fragment = n, x.jsx = t, x.jsxs = t, x;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function me() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === de ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case P:
          return "Fragment";
        case ae:
          return "Profiler";
        case ne:
          return "StrictMode";
        case se:
          return "Suspense";
        case le:
          return "SuspenseList";
        case _e:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case te:
            return "Portal";
          case oe:
            return (r.displayName || "Context") + ".Provider";
          case ce:
            return (r._context.displayName || "Context") + ".Consumer";
          case ie:
            var c = r.render;
            return r = r.displayName, r || (r = c.displayName || c.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case ue:
            return c = r.displayName || null, c !== null ? c : e(r.type) || "Memo";
          case $:
            c = r._payload, r = r._init;
            try {
              return e(r(c));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function t(r) {
      try {
        n(r);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var s = c.error, u = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return s.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), n(r);
      }
    }
    function a(r) {
      if (r === P) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === $)
        return "<...>";
      try {
        var c = e(r);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = T.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function b(r) {
      if (D.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, c) {
      function s() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: s,
        configurable: !0
      });
    }
    function g() {
      var r = e(this.type);
      return W[r] || (W[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function re(r, c, s, u, m, f, S, M) {
      return s = f.ref, r = {
        $$typeof: I,
        type: r,
        key: c,
        props: f,
        _owner: m
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function V(r, c, s, u, m, f, S, M) {
      var _ = c.children;
      if (_ !== void 0)
        if (u)
          if (fe(_)) {
            for (u = 0; u < _.length; u++)
              z(_[u]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else z(_);
      if (D.call(c, "key")) {
        _ = e(r);
        var w = Object.keys(c).filter(function(he) {
          return he !== "key";
        });
        u = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", B[_ + u] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          _,
          w,
          _
        ), B[_ + u] = !0);
      }
      if (_ = null, s !== void 0 && (t(s), _ = "" + s), b(c) && (t(c.key), _ = "" + c.key), "key" in c) {
        s = {};
        for (var A in c)
          A !== "key" && (s[A] = c[A]);
      } else s = c;
      return _ && p(
        s,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), re(
        r,
        _,
        f,
        m,
        i(),
        s,
        S,
        M
      );
    }
    function z(r) {
      typeof r == "object" && r !== null && r.$$typeof === I && r._store && (r._store.validated = 1);
    }
    var E = C, I = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), T = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, fe = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var H, W = {}, Y = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), F = N(a(l)), B = {};
    j.Fragment = P, j.jsx = function(r, c, s, u, m) {
      var f = 1e4 > T.recentlyCreatedOwnerStacks++;
      return V(
        r,
        c,
        s,
        !1,
        u,
        m,
        f ? Error("react-stack-top-frame") : Y,
        f ? N(a(r)) : F
      );
    }, j.jsxs = function(r, c, s, u, m) {
      var f = 1e4 > T.recentlyCreatedOwnerStacks++;
      return V(
        r,
        c,
        s,
        !0,
        u,
        m,
        f ? Error("react-stack-top-frame") : Y,
        f ? N(a(r)) : F
      );
    };
  })()), j;
}
var J;
function ve() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? y.exports = pe() : y.exports = me()), y.exports;
}
var o = ve(), K = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, q = C.createContext && /* @__PURE__ */ C.createContext(K), Ce = ["attr", "size", "title"];
function be(e, n) {
  if (e == null) return {};
  var t = ge(e, n), a, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      a = l[i], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function ge(e, n) {
  if (e == null) return {};
  var t = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0) continue;
      t[a] = e[a];
    }
  return t;
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, O.apply(this, arguments);
}
function X(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function k(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? X(Object(t), !0).forEach(function(a) {
      we(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function we(e, n, t) {
  return n = xe(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function xe(e) {
  var n = je(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function je(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ee(e) {
  return e && e.map((n, t) => /* @__PURE__ */ C.createElement(n.tag, k({
    key: t
  }, n.attr), ee(n.child)));
}
function d(e) {
  return (n) => /* @__PURE__ */ C.createElement(Ee, O({
    attr: k({}, e.attr)
  }, n), ee(e.child));
}
function Ee(e) {
  var n = (t) => {
    var {
      attr: a,
      size: i,
      title: l
    } = e, b = be(e, Ce), p = i || t.size || "1em", g;
    return t.className && (g = t.className), e.className && (g = (g ? g + " " : "") + e.className), /* @__PURE__ */ C.createElement("svg", O({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, b, {
      className: g,
      style: k(k({
        color: e.color || t.color
      }, t.style), e.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ C.createElement("title", null, l), e.children);
  };
  return q !== void 0 ? /* @__PURE__ */ C.createElement(q.Consumer, null, (t) => n(t)) : n(K);
}
function ye(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Re(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Oe(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function ke(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Pe(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Le(e) {
  return d({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function Ze(e) {
  return d({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ve(e) {
  return d({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const ze = "_captcha__wrapper_1drdb_5", Ie = "_captcha__failed_1drdb_91", $e = "_captcha__failed__content_1drdb_121", De = "_captcha__btn_1drdb_149", He = "_captcha__btn__main_1drdb_181", We = "_captcha__btn__footer_1drdb_205", Ye = "_captcha__unchecked_1drdb_215", Fe = "_captcha__content_1drdb_231", v = {
  captcha__wrapper: ze,
  captcha__failed: Ie,
  captcha__failed__content: $e,
  captcha__btn: De,
  captcha__btn__main: He,
  captcha__btn__footer: We,
  captcha__unchecked: Ye,
  captcha__content: Fe
}, Q = [
  Oe,
  ke,
  Pe,
  Te,
  Ne,
  Se,
  Me,
  Ae
];
function Be() {
  const [e, n] = R(7);
  Z(() => {
    const a = setInterval(() => {
      n((i) => (i + 1) % Q.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const t = Q[e];
  return /* @__PURE__ */ o.jsx(t, { style: { margin: -8 }, size: 46 });
}
const Ue = "_timer__wrapper_17tk4_1", L = {
  timer__wrapper: Ue,
  "timer--last": "_timer--last_17tk4_33"
};
function Ge(e) {
  return e < 10;
}
function Je({ start: e = 60, on_time_finished: n }) {
  const [t, a] = R(e);
  return Z(() => {
    const i = setInterval(() => {
      a((l) => l > 0 ? l - 1 : (n(), clearInterval(i), 0));
    }, 1e3);
    return () => {
      clearInterval(i);
    };
  }, []), Z(() => {
    a(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${L.timer__wrapper} ${Ge(t) ? L["timer--last"] : L["timer--normal"]}
		`,
      children: /* @__PURE__ */ o.jsx("span", { children: t })
    }
  );
}
const qe = "_wasd__display_68c1u_1", Xe = "_wasd__display__row_68c1u_9", Qe = "_wasd__key_68c1u_29", Ke = "_active_68c1u_51", er = "_wrong_68c1u_59", rr = "_correct_68c1u_67", h = {
  wasd__display: qe,
  wasd__display__row: Xe,
  wasd__key: Qe,
  active: Ke,
  wrong: er,
  correct: rr
};
function tr({
  number: e = [],
  time: n = [],
  onSuccess: t,
  onFail: a
}) {
  const i = () => {
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ o.jsx("p", { children: "You get 3 tries: 2 practice, 1 real. Use WASD or arrow keys to hit the glowing key. Fastest wins." })
      ] }),
      /* @__PURE__ */ o.jsx(Je, { start: 60, on_time_finished: i })
    ] }),
    /* @__PURE__ */ o.jsx("main", { children: /* @__PURE__ */ o.jsxs("div", { className: h.wasd__display, children: [
      /* @__PURE__ */ o.jsx("div", { className: h.wasd__display__row, children: /* @__PURE__ */ o.jsx("div", { className: `${h.wasd__key} ${h.active}`, children: "W" }) }),
      /* @__PURE__ */ o.jsxs("div", { className: h.wasd__display__row, children: [
        /* @__PURE__ */ o.jsx("div", { className: `${h.wasd__key} ${h.correct}`, children: "A" }),
        /* @__PURE__ */ o.jsx("div", { className: `${h.wasd__key} ${h.wrong}`, children: "S" }),
        /* @__PURE__ */ o.jsx("div", { className: h.wasd__key, children: "D" })
      ] })
    ] }) })
  ] });
}
function ar() {
  const [e, n] = R(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [t, a] = R(null), i = () => {
    n((l) => l === "initial" ? "progress" : l);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: v.captcha__wrapper, children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: v.captcha__btn,
        onClick: i,
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: v.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ o.jsx("div", { className: v.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ o.jsx(ye, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ o.jsx(
              Re,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ o.jsx(Be, {}),
            /* @__PURE__ */ o.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: v.captcha__btn__footer, children: /* @__PURE__ */ o.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ o.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ o.jsxs("div", { className: v.captcha__content, children: [
      /* @__PURE__ */ o.jsx(tr, {}),
      t && /* @__PURE__ */ o.jsx("div", { className: v.captcha__failed, children: /* @__PURE__ */ o.jsxs("div", { className: v.captcha__failed__content, children: [
        t.type === "failure" ? /* @__PURE__ */ o.jsx(Le, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ o.jsx(Ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ o.jsx("p", { children: t.message }),
        /* @__PURE__ */ o.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ o.jsx(Ve, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  ar as Captcha
};
