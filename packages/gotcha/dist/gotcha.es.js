import j, { useState as w, useEffect as I, useRef as pe } from "react";
import './index.css';var O = { exports: {} }, R = {};
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
function ve() {
  if (U) return R;
  U = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(a, s, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      l = {};
      for (var d in s)
        d !== "key" && (l[d] = s[d]);
    } else l = s;
    return s = l.ref, {
      $$typeof: e,
      type: a,
      key: c,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return R.Fragment = r, R.jsx = n, R.jsxs = n, R;
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
var J;
function ge() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === _e ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case N:
          return "Fragment";
        case ce:
          return "Profiler";
        case ae:
          return "StrictMode";
        case le:
          return "Suspense";
        case ue:
          return "SuspenseList";
        case de:
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
          case oe:
            return (t._context.displayName || "Context") + ".Consumer";
          case se:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case fe:
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
        var u = o.error, _ = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), r(t);
      }
    }
    function a(t) {
      if (t === N) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === H)
        return "<...>";
      try {
        var o = e(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = S.A;
      return t === null ? null : t.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function c(t) {
      if (Y.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, o) {
      function u() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: u,
        configurable: !0
      });
    }
    function v() {
      var t = e(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function y(t, o, u, _, b, C, L, Z) {
      return u = C.ref, t = {
        $$typeof: D,
        type: t,
        key: o,
        props: C,
        _owner: b
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: v
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
        value: L
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function f(t, o, u, _, b, C, L, Z) {
      var h = o.children;
      if (h !== void 0)
        if (_)
          if (he(h)) {
            for (_ = 0; _ < h.length; _++)
              g(h[_]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(h);
      if (Y.call(o, "key")) {
        h = e(t);
        var E = Object.keys(o).filter(function(me) {
          return me !== "key";
        });
        _ = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", G[h + _] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          h,
          E,
          h
        ), G[h + _] = !0);
      }
      if (h = null, u !== void 0 && (n(u), h = "" + u), c(o) && (n(o.key), h = "" + o.key), "key" in o) {
        u = {};
        for (var V in o)
          V !== "key" && (u[V] = o[V]);
      } else u = o;
      return h && d(
        u,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), y(
        t,
        h,
        C,
        b,
        s(),
        u,
        L,
        Z
      );
    }
    function g(t) {
      typeof t == "object" && t !== null && t.$$typeof === D && t._store && (t._store.validated = 1);
    }
    var m = j, D = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), _e = Symbol.for("react.client.reference"), S = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, he = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var B, W = {}, $ = m.react_stack_bottom_frame.bind(
      m,
      l
    )(), F = A(a(l)), G = {};
    k.Fragment = N, k.jsx = function(t, o, u, _, b) {
      var C = 1e4 > S.recentlyCreatedOwnerStacks++;
      return f(
        t,
        o,
        u,
        !1,
        _,
        b,
        C ? Error("react-stack-top-frame") : $,
        C ? A(a(t)) : F
      );
    }, k.jsxs = function(t, o, u, _, b) {
      var C = 1e4 > S.recentlyCreatedOwnerStacks++;
      return f(
        t,
        o,
        u,
        !0,
        _,
        b,
        C ? Error("react-stack-top-frame") : $,
        C ? A(a(t)) : F
      );
    };
  })()), k;
}
var q;
function Ce() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? O.exports = ve() : O.exports = ge()), O.exports;
}
var i = Ce(), te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, X = j.createContext && /* @__PURE__ */ j.createContext(te), be = ["attr", "size", "title"];
function xe(e, r) {
  if (e == null) return {};
  var n = je(e, r), a, s;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (s = 0; s < l.length; s++)
      a = l[s], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function je(e, r) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (r.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, T.apply(this, arguments);
}
function Q(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function M(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Q(Object(n), !0).forEach(function(a) {
      Ee(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Ee(e, r, n) {
  return r = ye(r), r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function ye(e) {
  var r = Re(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Re(e, r) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, r);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function re(e) {
  return e && e.map((r, n) => /* @__PURE__ */ j.createElement(r.tag, M({
    key: n
  }, r.attr), re(r.child)));
}
function p(e) {
  return (r) => /* @__PURE__ */ j.createElement(ke, T({
    attr: M({}, e.attr)
  }, r), re(e.child));
}
function ke(e) {
  var r = (n) => {
    var {
      attr: a,
      size: s,
      title: l
    } = e, c = xe(e, be), d = s || n.size || "1em", v;
    return n.className && (v = n.className), e.className && (v = (v ? v + " " : "") + e.className), /* @__PURE__ */ j.createElement("svg", T({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, c, {
      className: v,
      style: M(M({
        color: e.color || n.color
      }, n.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ j.createElement("title", null, l), e.children);
  };
  return X !== void 0 ? /* @__PURE__ */ j.createElement(X.Consumer, null, (n) => r(n)) : r(te);
}
function we(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Oe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Pe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Me(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Ve(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ze(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ie(e) {
  return p({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const De = "_captcha__wrapper_109tv_5", He = "_captcha__failed_109tv_93", Ye = "_captcha__failed__content_109tv_123", Be = "_captcha__btn_109tv_151", We = "_captcha__btn__main_109tv_183", $e = "_captcha__btn__footer_109tv_207", Fe = "_captcha__unchecked_109tv_217", Ge = "_captcha__content_109tv_233", x = {
  captcha__wrapper: De,
  captcha__failed: He,
  captcha__failed__content: Ye,
  captcha__btn: Be,
  captcha__btn__main: We,
  captcha__btn__footer: $e,
  captcha__unchecked: Fe,
  captcha__content: Ge
}, K = [
  Pe,
  Te,
  Me,
  Ne,
  Se,
  Ae,
  Le,
  Ze
];
function Ue() {
  const [e, r] = w(7);
  I(() => {
    const a = setInterval(() => {
      r((s) => (s + 1) % K.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = K[e];
  return /* @__PURE__ */ i.jsx(n, { style: { margin: -8 }, size: 46 });
}
function ee(e, r, n = 1) {
  const s = e, l = [];
  let c = 0;
  for (; c < s; )
    l.push(c), c += n;
  return l;
}
const Je = "_timer__wrapper_17tk4_1", z = {
  timer__wrapper: Je,
  "timer--last": "_timer--last_17tk4_33"
};
function qe(e) {
  return e < 10;
}
function Xe({ start: e = 60, on_time_finished: r, on_change: n }) {
  const [a, s] = w(e), l = pe(e);
  return I(() => {
    if (a <= 0) {
      r?.();
      return;
    }
    const c = setTimeout(() => {
      s((d) => d - 1), l.current -= 1, n?.(l.current);
    }, 1e3);
    return () => clearTimeout(c);
  }, [a]), I(() => {
    s(e);
  }, [e]), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${z.timer__wrapper} ${qe(a) ? z["timer--last"] : z["timer--normal"]}`,
      children: /* @__PURE__ */ i.jsx("span", { children: a })
    }
  );
}
function Qe(e) {
  const r = [...e];
  for (let n = r.length - 1; n > 0; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [r[n], r[a]] = [r[a], r[n]];
  }
  return r;
}
function Ke(e, r) {
  return Qe(e).slice(0, r);
}
const et = "_main_1kxxm_1", tt = "_instruction_1kxxm_9", rt = "_pattern_grid_1kxxm_23", P = {
  main: et,
  instruction: tt,
  pattern_grid: rt,
  "button--correct": "_button--correct_1kxxm_57"
};
function nt({
  width: e = 3,
  numbers: r = 4,
  order_matters: n = !0,
  time: a = [5, 3, 15],
  onSuccess: s,
  onFail: l
}) {
  const [c, d] = w({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: Ke(ee(e * e), r),
    clicked: []
  }), v = () => {
    c.stage === 0 ? d((f) => ({
      ...f,
      stage: 1,
      instruction: "Do you know you cannot laugh while your nose are closed?"
    })) : c.stage === 1 ? d((f) => ({
      ...f,
      stage: 2,
      instruction: n ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : c.stage === 2 && c.active && (d((f) => ({
      ...f,
      active: !1
    })), l({
      score: c.clicked.length,
      message: "Better care about your time at next round"
    }));
  }, y = (f) => {
    if (!c.active || c.stage !== 2)
      return;
    const g = Math.max(0, c.clicked.length);
    if (c.correct[g] === f || !n && c.correct.includes(f)) {
      if (c.clicked.length === r - 1) {
        d((m) => ({ ...m, active: !1 })), s({
          score: 1,
          message: "Didn't knew you were that sharp"
        });
        return;
      }
      d((m) => ({ ...m, clicked: [...m.clicked, f] }));
    } else
      d((m) => ({ ...m, active: !1 })), l({
        score: c.clicked.length / r,
        message: "Whoops! you may need to sharpen your brain"
      });
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Test your brain" }),
        n && /* @__PURE__ */ i.jsx("p", { children: "Remember the number patterns and click as per the pattern later" }),
        !n && /* @__PURE__ */ i.jsx("p", { children: "Remember the number patterns and click the pattern later" })
      ] }),
      /* @__PURE__ */ i.jsx(
        Xe,
        {
          start: a[c?.stage ?? 0],
          on_time_finished: v
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: P.main, children: [
      /* @__PURE__ */ i.jsx("p", { className: P.instruction, children: c.instruction }),
      c.stage !== 1 && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: P.pattern_grid,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: ee(e * e).map((f) => /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: y.bind(null, f),
              className: (c.clicked.includes(f) || c.stage !== 2) && c.correct.includes(f) ? P["button--correct"] : "",
              children: n && (c.clicked.includes(f) || c.stage !== 2) && c.correct.includes(f) && /* @__PURE__ */ i.jsx("span", { children: c.correct.indexOf(f) + 1 })
            },
            f
          ))
        }
      )
    ] })
  ] });
}
function ct({ difficulty: e, tries: r = 1, shuffle_on_retry: n = !1, on_complete: a }) {
  const [s, l] = w(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [c, d] = w(null), v = () => {
    l((g) => g === "initial" ? "progress" : g);
  }, y = ({ score: g, message: m }) => {
    d({
      score: g,
      message: m,
      type: "failure"
    });
  }, f = ({ score: g, message: m }) => {
    d({
      score: g,
      message: m,
      type: "success"
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: x.captcha__wrapper, children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: x.captcha__btn,
        onClick: v,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: x.captcha__btn__main, children: [
            s === "initial" && /* @__PURE__ */ i.jsx("div", { className: x.captcha__unchecked }),
            s === "success" && /* @__PURE__ */ i.jsx(we, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            s === "error" && /* @__PURE__ */ i.jsx(
              Oe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            s === "progress" && /* @__PURE__ */ i.jsx(Ue, {}),
            /* @__PURE__ */ i.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: x.captcha__btn__footer, children: /* @__PURE__ */ i.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ i.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    s === "progress" && /* @__PURE__ */ i.jsxs("div", { className: x.captcha__content, children: [
      /* @__PURE__ */ i.jsx(
        nt,
        {
          onFail: y,
          onSuccess: f
        }
      ),
      c && /* @__PURE__ */ i.jsx("div", { className: x.captcha__failed, children: /* @__PURE__ */ i.jsxs("div", { className: x.captcha__failed__content, children: [
        c.type === "failure" ? /* @__PURE__ */ i.jsx(Ve, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ i.jsx(ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ i.jsx("p", { children: c.message }),
        /* @__PURE__ */ i.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ i.jsx(Ie, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  ct as Captcha
};
