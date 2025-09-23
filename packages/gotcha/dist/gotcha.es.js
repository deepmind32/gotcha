import C, { useState as P, useEffect as N, useRef as pe } from "react";
import './index.css';var k = { exports: {} }, R = {};
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
function me() {
  if (U) return R;
  U = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(a, c, s) {
    var p = null;
    if (s !== void 0 && (p = "" + s), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      s = {};
      for (var u in c)
        u !== "key" && (s[u] = c[u]);
    } else s = c;
    return c = s.ref, {
      $$typeof: e,
      type: a,
      key: p,
      ref: c !== void 0 ? c : null,
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
var J;
function ve() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === de ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case L:
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
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case y:
            return "Portal";
          case ie:
            return (t.displayName || "Context") + ".Provider";
          case oe:
            return (t._context.displayName || "Context") + ".Consumer";
          case ce:
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
        var l = o.error, _ = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), n(t);
      }
    }
    function a(t) {
      if (t === L) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === H)
        return "<...>";
      try {
        var o = e(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var t = z.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function p(t) {
      if (Y.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function u(t, o) {
      function l() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function f() {
      var t = e(this.type);
      return B[t] || (B[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function g(t, o, l, _, v, m, V, I) {
      return l = m.ref, t = {
        $$typeof: w,
        type: t,
        key: o,
        props: m,
        _owner: v
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: f
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
        value: V
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function T(t, o, l, _, v, m, V, I) {
      var d = o.children;
      if (d !== void 0)
        if (_)
          if (fe(d)) {
            for (_ = 0; _ < d.length; _++)
              E(d[_]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(d);
      if (Y.call(o, "key")) {
        d = e(t);
        var j = Object.keys(o).filter(function(he) {
          return he !== "key";
        });
        _ = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", G[d + _] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          d,
          j,
          d
        ), G[d + _] = !0);
      }
      if (d = null, l !== void 0 && (r(l), d = "" + l), p(o) && (r(o.key), d = "" + o.key), "key" in o) {
        l = {};
        for (var $ in o)
          $ !== "key" && (l[$] = o[$]);
      } else l = o;
      return d && u(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), g(
        t,
        d,
        m,
        v,
        c(),
        l,
        V,
        I
      );
    }
    function E(t) {
      typeof t == "object" && t !== null && t.$$typeof === w && t._store && (t._store.validated = 1);
    }
    var x = C, w = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), z = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, fe = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var W, B = {}, F = x.react_stack_bottom_frame.bind(
      x,
      s
    )(), q = Z(a(s)), G = {};
    O.Fragment = L, O.jsx = function(t, o, l, _, v) {
      var m = 1e4 > z.recentlyCreatedOwnerStacks++;
      return T(
        t,
        o,
        l,
        !1,
        _,
        v,
        m ? Error("react-stack-top-frame") : F,
        m ? Z(a(t)) : q
      );
    }, O.jsxs = function(t, o, l, _, v) {
      var m = 1e4 > z.recentlyCreatedOwnerStacks++;
      return T(
        t,
        o,
        l,
        !0,
        _,
        v,
        m ? Error("react-stack-top-frame") : F,
        m ? Z(a(t)) : q
      );
    };
  })()), O;
}
var X;
function be() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? k.exports = me() : k.exports = ve()), k.exports;
}
var i = be(), te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Q = C.createContext && /* @__PURE__ */ C.createContext(te), Ce = ["attr", "size", "title"];
function ge(e, n) {
  if (e == null) return {};
  var r = we(e, n), a, c;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (c = 0; c < s.length; c++)
      a = s[c], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
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
function M() {
  return M = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, M.apply(this, arguments);
}
function K(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? K(Object(r), !0).forEach(function(a) {
      xe(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function xe(e, n, r) {
  return n = je(n), n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function je(e) {
  var n = Ee(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Ee(e, n) {
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
  return e && e.map((n, r) => /* @__PURE__ */ C.createElement(n.tag, A({
    key: r
  }, n.attr), re(n.child)));
}
function h(e) {
  return (n) => /* @__PURE__ */ C.createElement(ye, M({
    attr: A({}, e.attr)
  }, n), re(e.child));
}
function ye(e) {
  var n = (r) => {
    var {
      attr: a,
      size: c,
      title: s
    } = e, p = ge(e, Ce), u = c || r.size || "1em", f;
    return r.className && (f = r.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ C.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, p, {
      className: f,
      style: A(A({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ C.createElement("title", null, s), e.children);
  };
  return Q !== void 0 ? /* @__PURE__ */ C.createElement(Q.Consumer, null, (r) => n(r)) : n(te);
}
function Re(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Oe(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Pe(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function ke(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function ze(e) {
  return h({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function Ze(e) {
  return h({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ve(e) {
  return h({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const Ie = "_captcha__wrapper_1drdb_5", $e = "_captcha__failed_1drdb_91", De = "_captcha__failed__content_1drdb_121", He = "_captcha__btn_1drdb_149", Ye = "_captcha__btn__main_1drdb_181", We = "_captcha__btn__footer_1drdb_205", Be = "_captcha__unchecked_1drdb_215", Fe = "_captcha__content_1drdb_231", b = {
  captcha__wrapper: Ie,
  captcha__failed: $e,
  captcha__failed__content: De,
  captcha__btn: He,
  captcha__btn__main: Ye,
  captcha__btn__footer: We,
  captcha__unchecked: Be,
  captcha__content: Fe
}, ee = [
  Pe,
  Te,
  ke,
  Se,
  Ne,
  Me,
  Ae,
  Le
];
function qe() {
  const [e, n] = P(7);
  N(() => {
    const a = setInterval(() => {
      n((c) => (c + 1) % ee.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const r = ee[e];
  return /* @__PURE__ */ i.jsx(r, { style: { margin: -8 }, size: 46 });
}
const Ge = "_timer__wrapper_17tk4_1", D = {
  timer__wrapper: Ge,
  "timer--last": "_timer--last_17tk4_33"
};
function Ue(e) {
  return e < 10;
}
function Je({ start: e = 60, on_time_finished: n }) {
  const [r, a] = P(e);
  return N(() => {
    if (r <= 0) {
      n?.();
      return;
    }
    const c = setTimeout(() => {
      a((s) => s - 1);
    }, 1e3);
    return () => {
      clearTimeout(c);
    };
  }, [r]), N(() => {
    a(e);
  }, [e]), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${D.timer__wrapper} ${Ue(r) ? D["timer--last"] : D["timer--normal"]}
		`,
      children: /* @__PURE__ */ i.jsx("span", { children: r })
    }
  );
}
const Xe = "_button_u3ipf_1", Qe = {
  button: Xe
};
function Ke({ children: e, className: n, ...r }) {
  return /* @__PURE__ */ i.jsx("button", { className: `${Qe.button} ${n ?? ""}`, ...r, children: e });
}
const et = "_question_2wb7v_1", tt = "_horizontal_flipped_2wb7v_15", rt = "_vertical_flipped_2wb7v_23", nt = "_both_flipped_2wb7v_31", at = "_input__wrapper_2wb7v_39", ot = "_input_2wb7v_39", S = {
  question: et,
  horizontal_flipped: tt,
  vertical_flipped: rt,
  both_flipped: nt,
  input__wrapper: at,
  input: ot
}, it = {
  easy: "normal",
  medium: "horizontal_flipped",
  hard: "vertical_flipped",
  "very hard": "both_flipped"
};
function ct({
  difficulty: e = "easy",
  time: n = 10,
  question: r,
  answer: a,
  level: c = "easy",
  onFail: s,
  onSuccess: p
}) {
  const [u, f] = P({
    active: !0
  }), g = pe(null), T = () => {
    if (!u.active)
      return;
    const w = +g.current.value;
    s(w === a ? {
      score: 0.5,
      message: "You were right but hey, time and tide waits for none."
    } : {
      score: 0.5,
      message: "My two year brother solves the question faster than you."
    }), f((y) => ({ ...y, active: !1 }));
  };
  N(() => {
    g.current && g.current.focus();
  }, [c]);
  const E = () => {
    if (!u.active)
      return;
    +g.current.value === a ? p({
      score: 1,
      message: "Didn't expect you to win. Wait for another challenge."
    }) : s({
      score: 0,
      message: "I have not encountered any human who couldn't solve this simple math."
    }), f((y) => ({ ...y, active: !1 }));
  }, x = (w) => {
    w.key === "Enter" && E();
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Solve this simple maths" }),
        /* @__PURE__ */ i.jsx("p", { children: "Watch out for the time." })
      ] }),
      /* @__PURE__ */ i.jsx(Je, { start: n, on_time_finished: T })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { children: [
      /* @__PURE__ */ i.jsx("p", { className: `${S.question} ${S[it[e]]}`, children: r }),
      /* @__PURE__ */ i.jsxs("div", { className: S.input__wrapper, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            ref: g,
            onKeyDown: x,
            className: S.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ i.jsx(Ke, { onClick: E, children: "Submit" })
      ] })
    ] })
  ] });
}
function lt() {
  const [e, n] = P(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [r, a] = P(null), c = () => {
    n((u) => u === "initial" ? "progress" : u);
  }, s = ({ score: u, message: f }) => {
    a({
      score: u,
      message: f,
      type: "failure"
    });
  }, p = ({ score: u, message: f }) => {
    a({
      score: u,
      message: f,
      type: "success"
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: b.captcha__wrapper, children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: b.captcha__btn,
        onClick: c,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: b.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ i.jsx("div", { className: b.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ i.jsx(Re, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ i.jsx(
              Oe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ i.jsx(qe, {}),
            /* @__PURE__ */ i.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: b.captcha__btn__footer, children: /* @__PURE__ */ i.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ i.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ i.jsxs("div", { className: b.captcha__content, children: [
      /* @__PURE__ */ i.jsx(
        ct,
        {
          difficulty: "hard",
          question: "2+3",
          answer: 5,
          time: 400,
          onFail: s,
          onSuccess: p
        }
      ),
      r && /* @__PURE__ */ i.jsx("div", { className: b.captcha__failed, children: /* @__PURE__ */ i.jsxs("div", { className: b.captcha__failed__content, children: [
        r.type === "failure" ? /* @__PURE__ */ i.jsx(ze, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ i.jsx(Ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ i.jsx("p", { children: r.message }),
        /* @__PURE__ */ i.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ i.jsx(Ve, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  lt as Captcha
};
