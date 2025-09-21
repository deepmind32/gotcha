import E, { useState as S, useEffect as N, useRef as me } from "react";
import './index.css';var M = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function ve() {
  if (X) return T;
  X = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(c, i, l) {
    var a = null;
    if (l !== void 0 && (a = "" + l), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      l = {};
      for (var _ in i)
        _ !== "key" && (l[_] = i[_]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: c,
      key: a,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return T.Fragment = n, T.jsx = t, T.jsxs = t, T;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function we() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === fe ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case k:
          return "Fragment";
        case ce:
          return "Profiler";
        case x:
          return "StrictMode";
        case le:
          return "Suspense";
        case ue:
          return "SuspenseList";
        case _e:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case P:
            return "Portal";
          case se:
            return (r.displayName || "Context") + ".Provider";
          case oe:
            return (r._context.displayName || "Context") + ".Consumer";
          case ie:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case de:
            return o = r.displayName || null, o !== null ? o : e(r.type) || "Memo";
          case H:
            o = r._payload, r = r._init;
            try {
              return e(r(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var u = o.error, h = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), n(r);
      }
    }
    function c(r) {
      if (r === k) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === H)
        return "<...>";
      try {
        var o = e(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = I.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (B.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function _(r, o) {
      function u() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: u,
        configurable: !0
      });
    }
    function f() {
      var r = e(this.type);
      return U[r] || (U[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function R(r, o, u, h, y, b, $, D) {
      return u = b.ref, r = {
        $$typeof: g,
        type: r,
        key: o,
        props: b,
        _owner: y
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: f
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
        value: $
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function v(r, o, u, h, y, b, $, D) {
      var p = o.children;
      if (p !== void 0)
        if (h)
          if (he(p)) {
            for (h = 0; h < p.length; h++)
              d(p[h]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(p);
      if (B.call(o, "key")) {
        p = e(r);
        var O = Object.keys(o).filter(function(pe) {
          return pe !== "key";
        });
        h = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", q[p + h] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          p,
          O,
          p
        ), q[p + h] = !0);
      }
      if (p = null, u !== void 0 && (t(u), p = "" + u), a(o) && (t(o.key), p = "" + o.key), "key" in o) {
        u = {};
        for (var W in o)
          W !== "key" && (u[W] = o[W]);
      } else u = o;
      return p && _(
        u,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), R(
        r,
        p,
        b,
        y,
        i(),
        u,
        $,
        D
      );
    }
    function d(r) {
      typeof r == "object" && r !== null && r.$$typeof === g && r._store && (r._store.validated = 1);
    }
    var C = E, g = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), se = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), fe = Symbol.for("react.client.reference"), I = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, he = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var F, U = {}, G = C.react_stack_bottom_frame.bind(
      C,
      l
    )(), J = z(c(l)), q = {};
    A.Fragment = k, A.jsx = function(r, o, u, h, y) {
      var b = 1e4 > I.recentlyCreatedOwnerStacks++;
      return v(
        r,
        o,
        u,
        !1,
        h,
        y,
        b ? Error("react-stack-top-frame") : G,
        b ? z(c(r)) : J
      );
    }, A.jsxs = function(r, o, u, h, y) {
      var b = 1e4 > I.recentlyCreatedOwnerStacks++;
      return v(
        r,
        o,
        u,
        !0,
        h,
        y,
        b ? Error("react-stack-top-frame") : G,
        b ? z(c(r)) : J
      );
    };
  })()), A;
}
var K;
function Ce() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? M.exports = ve() : M.exports = we()), M.exports;
}
var s = Ce(), ne = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ee = E.createContext && /* @__PURE__ */ E.createContext(ne), be = ["attr", "size", "title"];
function ge(e, n) {
  if (e == null) return {};
  var t = xe(e, n), c, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      c = l[i], !(n.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (t[c] = e[c]);
  }
  return t;
}
function xe(e, n) {
  if (e == null) return {};
  var t = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (n.indexOf(c) >= 0) continue;
      t[c] = e[c];
    }
  return t;
}
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Z.apply(this, arguments);
}
function re(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    n && (c = c.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, c);
  }
  return t;
}
function V(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? re(Object(t), !0).forEach(function(c) {
      ye(e, c, t[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : re(Object(t)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(t, c));
    });
  }
  return e;
}
function ye(e, n, t) {
  return n = je(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function je(e) {
  var n = Ee(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Ee(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var c = t.call(e, n);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ae(e) {
  return e && e.map((n, t) => /* @__PURE__ */ E.createElement(n.tag, V({
    key: t
  }, n.attr), ae(n.child)));
}
function m(e) {
  return (n) => /* @__PURE__ */ E.createElement(ke, Z({
    attr: V({}, e.attr)
  }, n), ae(e.child));
}
function ke(e) {
  var n = (t) => {
    var {
      attr: c,
      size: i,
      title: l
    } = e, a = ge(e, be), _ = i || t.size || "1em", f;
    return t.className && (f = t.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ E.createElement("svg", Z({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, c, a, {
      className: f,
      style: V(V({
        color: e.color || t.color
      }, t.style), e.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ E.createElement("title", null, l), e.children);
  };
  return ee !== void 0 ? /* @__PURE__ */ E.createElement(ee.Consumer, null, (t) => n(t)) : n(ne);
}
function Re(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Oe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Pe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
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
function Ie(e) {
  return m({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function ze(e) {
  return m({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const $e = "_captcha__wrapper_1drdb_5", De = "_captcha__failed_1drdb_91", We = "_captcha__failed__content_1drdb_121", Ye = "_captcha__btn_1drdb_149", He = "_captcha__btn__main_1drdb_181", Be = "_captcha__btn__footer_1drdb_205", Fe = "_captcha__unchecked_1drdb_215", Ue = "_captcha__content_1drdb_231", j = {
  captcha__wrapper: $e,
  captcha__failed: De,
  captcha__failed__content: We,
  captcha__btn: Ye,
  captcha__btn__main: He,
  captcha__btn__footer: Be,
  captcha__unchecked: Fe,
  captcha__content: Ue
}, te = [
  Pe,
  Te,
  Ae,
  Se,
  Ne,
  Me,
  Le,
  Ze
];
function Ge() {
  const [e, n] = S(7);
  N(() => {
    const c = setInterval(() => {
      n((i) => (i + 1) % te.length);
    }, 100);
    return () => {
      clearInterval(c);
    };
  }, []);
  const t = te[e];
  return /* @__PURE__ */ s.jsx(t, { style: { margin: -8 }, size: 46 });
}
const Je = "_timer__wrapper_17tk4_1", Y = {
  timer__wrapper: Je,
  "timer--last": "_timer--last_17tk4_33"
};
function qe(e) {
  return e < 10;
}
function Xe({ start: e = 60, on_time_finished: n }) {
  const [t, c] = S(e);
  return N(() => {
    const i = setInterval(() => {
      c((l) => l > 0 ? l - 1 : (n(), clearInterval(i), 0));
    }, 1e3);
    return () => {
      clearInterval(i);
    };
  }, []), N(() => {
    c(e);
  }, [e]), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${Y.timer__wrapper} ${qe(t) ? Y["timer--last"] : Y["timer--normal"]}
		`,
      children: /* @__PURE__ */ s.jsx("span", { children: t })
    }
  );
}
const Qe = "_wasd__display_twnf6_1", Ke = "_wasd__display__row_twnf6_9", er = "_wasd__key_twnf6_31", rr = "_active_twnf6_57", tr = "_wrong_twnf6_65", nr = "_correct_twnf6_73", ar = "_pressed_twnf6_81", w = {
  wasd__display: Qe,
  wasd__display__row: Ke,
  wasd__key: er,
  active: rr,
  wrong: tr,
  correct: nr,
  pressed: ar
};
function L(e, n, t) {
  return e ? n === t ? "correct" : "wrong" : "pressed";
}
function cr({
  word: e = "wasdwasdwasdsawdsawdssswwwwa",
  speed_factor: n = 1,
  onSuccess: t,
  onFail: c
}) {
  const [i, l] = S({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), a = me({
    active: !1,
    word: e,
    corrects: Array(e.length).fill(void 0),
    index: 0
  }), _ = () => {
    a.current.active = !0;
  };
  return N(() => {
    const f = setInterval(() => {
      if (a.current.active) {
        if (a.current.index >= a.current.word.length) {
          a.current.active = !1, a.current.ranned = !0, clearInterval(a);
          const v = a.current.corrects, d = v.reduce(
            (C, g) => C + (typeof g == "boolean" && g ? 1 : 0),
            0
          );
          d > 0 ? t({
            score: d / v.length,
            message: `You completed with score ${d} out of ${v.length}`
          }) : c({
            score: 1 - d / v.length,
            message: "You failed"
          });
          return;
        }
        const R = a.current.word[a.current.index];
        a.current.index += 1, l((v) => ({
          w: "normal",
          a: "normal",
          s: "normal",
          d: "normal",
          [R]: "active"
        }));
      }
    }, 400 * n);
    return () => {
      clearInterval(f);
    };
  }, [a.current.active]), N(() => {
    const f = (v) => {
      const d = a.current.word[a.current.index - 1];
      switch (v.key) {
        case "w":
        case "W":
        case "ArrowUp":
          const C = L(
            a.current.active,
            "w",
            d
          );
          typeof a.current.corrects[a.current.index - 1] > "u" && (C === "correct" ? a.current.corrects[a.current.index - 1] = !0 : C === "wrong" && (a.current.corrects[a.current.index - 1] = !1)), l((x) => ({
            ...x,
            w: C
          }));
          break;
        case "a":
        case "A":
        case "ArrowLeft":
          let g = L(
            a.current.active,
            "a",
            d
          );
          typeof a.current.corrects[a.current.index - 1] > "u" && (g === "correct" ? a.current.corrects[a.current.index - 1] = !0 : g === "wrong" && (a.current.corrects[a.current.index - 1] = !1)), l((x) => ({
            ...x,
            a: g
          }));
          break;
        case "s":
        case "S":
        case "ArrowDown":
          let P = L(
            a.current.active,
            "s",
            d
          );
          typeof a.current.corrects[a.current.index - 1] > "u" && (P === "correct" ? a.current.corrects[a.current.index - 1] = !0 : P === "wrong" && (a.current.corrects[a.current.index - 1] = !1)), l((x) => ({
            ...x,
            s: P
          }));
          break;
        case "d":
        case "D":
        case "ArrowRight":
          let k = L(
            a.current.active,
            "d",
            d
          );
          typeof a.current.corrects[a.current.index - 1] > "u" && (k === "correct" ? a.current.corrects[a.current.index - 1] = !0 : k === "wrong" && (a.current.corrects[a.current.index - 1] = !1)), l((x) => ({
            ...x,
            d: k
          }));
          break;
      }
    }, R = (v) => {
      switch (v.key) {
        case "w":
        case "W":
        case "ArrowUp":
          l((d) => ({ ...d, w: "normal" }));
          break;
        case "a":
        case "A":
        case "ArrowLeft":
          l((d) => ({ ...d, a: "normal" }));
          break;
        case "s":
        case "S":
        case "ArrowDown":
          l((d) => ({ ...d, s: "normal" }));
          break;
        case "d":
        case "D":
        case "ArrowRight":
          l((d) => ({ ...d, d: "normal" }));
          break;
      }
    };
    return window.addEventListener("keydown", f), window.addEventListener("keyup", R), () => {
      window.removeEventListener("keydown", f), window.removeEventListener("keyup", R);
    };
  }, []), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("header", { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ s.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ s.jsx(Xe, { start: 5, on_time_finished: _ })
    ] }),
    /* @__PURE__ */ s.jsx("main", { style: { position: "relative" }, children: /* @__PURE__ */ s.jsxs("div", { className: w.wasd__display, children: [
      /* @__PURE__ */ s.jsx("div", { className: w.wasd__display__row, children: /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `${w.wasd__key} ${w[i.w]}`,
          children: "W"
        }
      ) }),
      /* @__PURE__ */ s.jsxs("div", { className: w.wasd__display__row, children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `${w.wasd__key} ${w[i.a]}`,
            children: "A"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `${w.wasd__key} ${w[i.s]}`,
            children: "S"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `${w.wasd__key} ${w[i.d]}`,
            children: "D"
          }
        )
      ] })
    ] }) })
  ] });
}
function sr() {
  const [e, n] = S(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [t, c] = S(null), i = () => {
    n((_) => _ === "initial" ? "progress" : _);
  }, l = ({ score: _, message: f }) => {
    c({
      score: _,
      message: f,
      type: "failure"
    });
  }, a = ({ score: _, message: f }) => {
    c({
      score: _,
      message: f,
      type: "success"
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: j.captcha__wrapper, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: j.captcha__btn,
        onClick: i,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: j.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ s.jsx("div", { className: j.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ s.jsx(Re, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ s.jsx(
              Oe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ s.jsx(Ge, {}),
            /* @__PURE__ */ s.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: j.captcha__btn__footer, children: /* @__PURE__ */ s.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ s.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ s.jsxs("div", { className: j.captcha__content, children: [
      /* @__PURE__ */ s.jsx(
        cr,
        {
          onFail: l,
          onSuccess: a
        }
      ),
      t && /* @__PURE__ */ s.jsx("div", { className: j.captcha__failed, children: /* @__PURE__ */ s.jsxs("div", { className: j.captcha__failed__content, children: [
        t.type === "failure" ? /* @__PURE__ */ s.jsx(Ve, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ s.jsx(Ie, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ s.jsx("p", { children: t.message }),
        /* @__PURE__ */ s.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ s.jsx(ze, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  sr as Captcha
};
