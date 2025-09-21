import b, { useState as P, useEffect as M, useRef as ve } from "react";
import './index.css';var Z = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function we() {
  if (re) return N;
  re = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, i, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      l = {};
      for (var _ in i)
        _ !== "key" && (l[_] = i[_]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return N.Fragment = n, N.jsx = t, N.jsxs = t, N;
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
var te;
function ge() {
  return te || (te = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === he ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case k:
          return "Fragment";
        case E:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case j:
            return "Portal";
          case D:
            return (r.displayName || "Context") + ".Provider";
          case R:
            return (r._context.displayName || "Context") + ".Consumer";
          case T:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case de:
            return o = r.displayName || null, o !== null ? o : e(r.type) || "Memo";
          case G:
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
        var u = o.error, d = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(r);
      }
    }
    function a(r) {
      if (r === k) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === G)
        return "<...>";
      try {
        var o = e(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = W.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function h(r) {
      if (q.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function _(r, o) {
      function u() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: u,
        configurable: !0
      });
    }
    function c() {
      var r = e(this.type);
      return X[r] || (X[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function $(r, o, u, d, g, v, Y, B) {
      return u = v.ref, r = {
        $$typeof: w,
        type: r,
        key: o,
        props: v,
        _owner: g
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: c
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
        value: Y
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function L(r, o, u, d, g, v, Y, B) {
      var f = o.children;
      if (f !== void 0)
        if (d)
          if (me(f)) {
            for (d = 0; d < f.length; d++)
              z(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else z(f);
      if (q.call(o, "key")) {
        f = e(r);
        var O = Object.keys(o).filter(function(pe) {
          return pe !== "key";
        });
        d = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", ee[f + d] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          O,
          f
        ), ee[f + d] = !0);
      }
      if (f = null, u !== void 0 && (t(u), f = "" + u), h(o) && (t(o.key), f = "" + o.key), "key" in o) {
        u = {};
        for (var F in o)
          F !== "key" && (u[F] = o[F]);
      } else u = o;
      return f && _(
        u,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), $(
        r,
        f,
        v,
        g,
        i(),
        u,
        Y,
        B
      );
    }
    function z(r) {
      typeof r == "object" && r !== null && r.$$typeof === w && r._store && (r._store.validated = 1);
    }
    var y = b, w = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), D = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), he = Symbol.for("react.client.reference"), W = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, me = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var J, X = {}, Q = y.react_stack_bottom_frame.bind(
      y,
      l
    )(), K = H(a(l)), ee = {};
    A.Fragment = k, A.jsx = function(r, o, u, d, g) {
      var v = 1e4 > W.recentlyCreatedOwnerStacks++;
      return L(
        r,
        o,
        u,
        !1,
        d,
        g,
        v ? Error("react-stack-top-frame") : Q,
        v ? H(a(r)) : K
      );
    }, A.jsxs = function(r, o, u, d, g) {
      var v = 1e4 > W.recentlyCreatedOwnerStacks++;
      return L(
        r,
        o,
        u,
        !0,
        d,
        g,
        v ? Error("react-stack-top-frame") : Q,
        v ? H(a(r)) : K
      );
    };
  })()), A;
}
var ne;
function Ce() {
  return ne || (ne = 1, process.env.NODE_ENV === "production" ? Z.exports = we() : Z.exports = ge()), Z.exports;
}
var s = Ce(), le = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ae = b.createContext && /* @__PURE__ */ b.createContext(le), be = ["attr", "size", "title"];
function xe(e, n) {
  if (e == null) return {};
  var t = ye(e, n), a, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      a = l[i], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function ye(e, n) {
  if (e == null) return {};
  var t = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0) continue;
      t[a] = e[a];
    }
  return t;
}
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, V.apply(this, arguments);
}
function se(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function I(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? se(Object(t), !0).forEach(function(a) {
      je(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : se(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function je(e, n, t) {
  return n = ke(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function ke(e) {
  var n = Ee(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Ee(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ue(e) {
  return e && e.map((n, t) => /* @__PURE__ */ b.createElement(n.tag, I({
    key: t
  }, n.attr), ue(n.child)));
}
function m(e) {
  return (n) => /* @__PURE__ */ b.createElement(Re, V({
    attr: I({}, e.attr)
  }, n), ue(e.child));
}
function Re(e) {
  var n = (t) => {
    var {
      attr: a,
      size: i,
      title: l
    } = e, h = xe(e, be), _ = i || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ b.createElement("svg", V({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, h, {
      className: c,
      style: I(I({
        color: e.color || t.color
      }, t.style), e.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ b.createElement("title", null, l), e.children);
  };
  return ae !== void 0 ? /* @__PURE__ */ b.createElement(ae.Consumer, null, (t) => n(t)) : n(le);
}
function Oe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Pe(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Te(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return m({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function ze(e) {
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
function $e(e) {
  return m({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const De = "_captcha__wrapper_1drdb_5", We = "_captcha__failed_1drdb_91", He = "_captcha__failed__content_1drdb_121", Ye = "_captcha__btn_1drdb_149", Be = "_captcha__btn__main_1drdb_181", Fe = "_captcha__btn__footer_1drdb_205", Ue = "_captcha__unchecked_1drdb_215", Ge = "_captcha__content_1drdb_231", C = {
  captcha__wrapper: De,
  captcha__failed: We,
  captcha__failed__content: He,
  captcha__btn: Ye,
  captcha__btn__main: Be,
  captcha__btn__footer: Fe,
  captcha__unchecked: Ue,
  captcha__content: Ge
}, oe = [
  Te,
  Se,
  Ne,
  Ae,
  Me,
  Le,
  ze,
  Ze
];
function qe() {
  const [e, n] = P(7);
  M(() => {
    const a = setInterval(() => {
      n((i) => (i + 1) % oe.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const t = oe[e];
  return /* @__PURE__ */ s.jsx(t, { style: { margin: -8 }, size: 46 });
}
const Je = "_timer__wrapper_17tk4_1", U = {
  timer__wrapper: Je,
  "timer--last": "_timer--last_17tk4_33"
};
function Xe(e) {
  return e < 10;
}
function Qe({ start: e = 60, on_time_finished: n }) {
  const [t, a] = P(e);
  return M(() => {
    if (t <= 0) {
      n?.();
      return;
    }
    const i = setTimeout(() => {
      a((l) => l - 1);
    }, 1e3);
    return () => {
      clearTimeout(i);
    };
  }, [t]), M(() => {
    a(e);
  }, [e]), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${U.timer__wrapper} ${Xe(t) ? U["timer--last"] : U["timer--normal"]}
		`,
      children: /* @__PURE__ */ s.jsx("span", { children: t })
    }
  );
}
const Ke = "_wasd__display_1j3za_1", er = "_wasd__display__row_1j3za_9", rr = "_wasd__key_1j3za_31", tr = "_active_1j3za_57", nr = "_wrong_1j3za_65", ar = "_correct_1j3za_77", sr = "_pressed_1j3za_89", or = "_streaks_1j3za_103", p = {
  wasd__display: Ke,
  wasd__display__row: er,
  wasd__key: rr,
  active: tr,
  wrong: nr,
  correct: ar,
  pressed: sr,
  streaks: or
}, cr = "_streak_meter_1o9ug_1", ir = "_intermedite_1o9ug_29", lr = "_advance_1o9ug_37", ur = "_fire_big_1o9ug_1", ce = {
  streak_meter: cr,
  intermedite: ir,
  advance: lr,
  fire_big: ur
};
function _r(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function dr(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function fr({
  streak: e,
  max_streak: n = void 0,
  target: t = "♾"
}) {
  return /* @__PURE__ */ s.jsxs("div", { className: ce.streak_meter, children: [
    /* @__PURE__ */ s.jsxs("p", { className: ce[dr(e)], children: [
      _r(e),
      "/",
      t
    ] }),
    typeof n < "u" && /* @__PURE__ */ s.jsxs("p", { children: [
      "Max Streak: ",
      n
    ] })
  ] });
}
function hr(e, n, t) {
  return e ? n === t ? "correct" : "wrong" : "normal";
}
function mr(e) {
  const n = ["w", "a", "s", "d"];
  let t = "";
  for (let a = 0; a < e; a++) {
    const i = Math.floor(Math.random() * n.length);
    t += n[i];
  }
  return t;
}
const ie = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function pr(e) {
  return Object.keys(ie).find((n) => ie[n].includes(e));
}
function vr({
  target: e = 5,
  times: n = [6, 30],
  speed_factor: t = 1,
  onSuccess: a,
  onFail: i
}) {
  const [l, h] = P({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), _ = mr(100), c = ve({
    active: !1,
    first_stage_done: !1,
    word: _,
    corrects: Array(_.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [$, L] = P(n[0]), z = () => {
    c.current.active = !0, c.current.first_stage_done = !0, L(n[1]);
  }, y = () => {
    c.current.max_streak >= e ? a({
      score: c.current.max_streak / e,
      message: "As quick as a Crane."
    }) : i({
      score: 0,
      message: "Didn't knew you were such a loser."
    });
  };
  return M(() => {
    const w = setInterval(() => {
      if (!c.current.active) return;
      if (c.current.index >= c.current.word.length) {
        c.current.active = !1, clearInterval(w);
        return;
      }
      const j = c.current.word[c.current.index];
      c.current.index += 1, h({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [j]: "active"
      });
    }, 600 * t);
    return () => clearInterval(w);
  }, [t]), M(() => {
    const w = /* @__PURE__ */ new Set(), j = (x) => {
      const E = pr(x.key);
      if (!E || w.has(x.key)) return;
      w.add(x.key);
      const R = c.current.index - 1, D = c.current.word[R], T = hr(
        c.current.active,
        E,
        D
      );
      typeof c.current.corrects[R] > "u" && (T === "correct" ? (c.current.corrects[R] = !0, c.current.streak++, c.current.max_streak = Math.max(
        c.current.max_streak,
        c.current.streak
      )) : T === "wrong" && (c.current.corrects[R] = !1, c.current.streak = 0)), h((S) => ({ ...S, [E]: T })), setTimeout(() => {
        h((S) => ({ ...S, [E]: "normal" }));
      }, 150);
    }, k = (x) => {
      w.delete(x.key);
    };
    return window.addEventListener("keydown", j), window.addEventListener("keyup", k), () => {
      window.removeEventListener("keydown", j), window.removeEventListener("keyup", k);
    };
  }, []), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("header", { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ s.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ s.jsx(
        Qe,
        {
          start: $,
          on_time_finished: () => {
            c.current.first_stage_done ? y() : z();
          }
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ s.jsx("div", { className: p.streaks, children: /* @__PURE__ */ s.jsx(
        fr,
        {
          max_streak: c.current.max_streak,
          streak: c.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ s.jsxs("div", { className: p.wasd__display, children: [
        /* @__PURE__ */ s.jsx("div", { className: p.wasd__display__row, children: /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `${p.wasd__key} ${p[l.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ s.jsxs("div", { className: p.wasd__display__row, children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `${p.wasd__key} ${p[l.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `${p.wasd__key} ${p[l.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `${p.wasd__key} ${p[l.d]}`,
              children: "D"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function gr() {
  const [e, n] = P(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [t, a] = P(null), i = () => {
    n((_) => _ === "initial" ? "progress" : _);
  }, l = ({ score: _, message: c }) => {
    a({
      score: _,
      message: c,
      type: "failure"
    });
  }, h = ({ score: _, message: c }) => {
    a({
      score: _,
      message: c,
      type: "success"
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: C.captcha__wrapper, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: C.captcha__btn,
        onClick: i,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: C.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ s.jsx("div", { className: C.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ s.jsx(Oe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ s.jsx(
              Pe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ s.jsx(qe, {}),
            /* @__PURE__ */ s.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: C.captcha__btn__footer, children: /* @__PURE__ */ s.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ s.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ s.jsxs("div", { className: C.captcha__content, children: [
      /* @__PURE__ */ s.jsx(
        vr,
        {
          onFail: l,
          onSuccess: h
        }
      ),
      t && /* @__PURE__ */ s.jsx("div", { className: C.captcha__failed, children: /* @__PURE__ */ s.jsxs("div", { className: C.captcha__failed__content, children: [
        t.type === "failure" ? /* @__PURE__ */ s.jsx(Ve, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ s.jsx(Ie, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ s.jsx("p", { children: t.message }),
        /* @__PURE__ */ s.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ s.jsx($e, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  gr as Captcha
};
