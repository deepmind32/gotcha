import E, { useState as w, useEffect as Y, useRef as ge } from "react";
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
var X;
function be() {
  if (X) return R;
  X = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(a, o, i) {
    var _ = null;
    if (i !== void 0 && (_ = "" + i), o.key !== void 0 && (_ = "" + o.key), "key" in o) {
      i = {};
      for (var m in o)
        m !== "key" && (i[m] = o[m]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: a,
      key: _,
      ref: o !== void 0 ? o : null,
      props: i
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
var Q;
function je() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === pe ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case M:
          return "Fragment";
        case ie:
          return "Profiler";
        case se:
          return "StrictMode";
        case fe:
          return "Suspense";
        case de:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case ce:
            return "Portal";
          case ue:
            return (t.displayName || "Context") + ".Provider";
          case le:
            return (t._context.displayName || "Context") + ".Consumer";
          case _e:
            var c = t.render;
            return t = t.displayName, t || (t = c.displayName || c.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case he:
            return c = t.displayName || null, c !== null ? c : e(t.type) || "Memo";
          case B:
            c = t._payload, t = t._init;
            try {
              return e(t(c));
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
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var u = c.error, d = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(t);
      }
    }
    function a(t) {
      if (t === M) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === B)
        return "<...>";
      try {
        var c = e(t);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var t = A.A;
      return t === null ? null : t.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function _(t) {
      if (W.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function m(t, c) {
      function u() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: u,
        configurable: !0
      });
    }
    function v() {
      var t = e(this.type);
      return G[t] || (G[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function C(t, c, u, d, j, g, z, Z) {
      return u = g.ref, t = {
        $$typeof: $,
        type: t,
        key: c,
        props: g,
        _owner: j
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
        value: z
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function l(t, c, u, d, j, g, z, Z) {
      var h = c.children;
      if (h !== void 0)
        if (d)
          if (ve(h)) {
            for (d = 0; d < h.length; d++)
              f(h[d]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(h);
      if (W.call(c, "key")) {
        h = e(t);
        var y = Object.keys(c).filter(function(Ce) {
          return Ce !== "key";
        });
        d = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", q[h + d] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          h,
          y,
          h
        ), q[h + d] = !0);
      }
      if (h = null, u !== void 0 && (r(u), h = "" + u), _(c) && (r(c.key), h = "" + c.key), "key" in c) {
        u = {};
        for (var V in c)
          V !== "key" && (u[V] = c[V]);
      } else u = c;
      return h && m(
        u,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), C(
        t,
        h,
        g,
        j,
        o(),
        u,
        z,
        Z
      );
    }
    function f(t) {
      typeof t == "object" && t !== null && t.$$typeof === $ && t._store && (t._store.validated = 1);
    }
    var b = E, $ = Symbol.for("react.transitional.element"), ce = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), le = Symbol.for("react.consumer"), ue = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), he = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), pe = Symbol.for("react.client.reference"), A = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, ve = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var F, G = {}, U = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), J = L(a(i)), q = {};
    O.Fragment = M, O.jsx = function(t, c, u, d, j) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        t,
        c,
        u,
        !1,
        d,
        j,
        g ? Error("react-stack-top-frame") : U,
        g ? L(a(t)) : J
      );
    }, O.jsxs = function(t, c, u, d, j) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        t,
        c,
        u,
        !0,
        d,
        j,
        g ? Error("react-stack-top-frame") : U,
        g ? L(a(t)) : J
      );
    };
  })()), O;
}
var K;
function xe() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? k.exports = be() : k.exports = je()), k.exports;
}
var s = xe(), ne = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ee = E.createContext && /* @__PURE__ */ E.createContext(ne), Ee = ["attr", "size", "title"];
function ye(e, n) {
  if (e == null) return {};
  var r = we(e, n), a, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      a = i[o], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
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
function te(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? te(Object(r), !0).forEach(function(a) {
      Re(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Re(e, n, r) {
  return n = Oe(n), n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Oe(e) {
  var n = ke(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ke(e, n) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ae(e) {
  return e && e.map((n, r) => /* @__PURE__ */ E.createElement(n.tag, S({
    key: r
  }, n.attr), ae(n.child)));
}
function p(e) {
  return (n) => /* @__PURE__ */ E.createElement(Pe, N({
    attr: S({}, e.attr)
  }, n), ae(e.child));
}
function Pe(e) {
  var n = (r) => {
    var {
      attr: a,
      size: o,
      title: i
    } = e, _ = ye(e, Ee), m = o || r.size || "1em", v;
    return r.className && (v = r.className), e.className && (v = (v ? v + " " : "") + e.className), /* @__PURE__ */ E.createElement("svg", N({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, _, {
      className: v,
      style: S(S({
        color: e.color || r.color
      }, r.style), e.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ E.createElement("title", null, i), e.children);
  };
  return ee !== void 0 ? /* @__PURE__ */ E.createElement(ee.Consumer, null, (r) => n(r)) : n(ne);
}
function Te(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Ne(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Se(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Ve(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ie(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function De(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function He(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function Ye(e) {
  return p({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const $e = "_captcha__wrapper_109tv_5", Be = "_captcha__failed_109tv_93", We = "_captcha__failed__content_109tv_123", Fe = "_captcha__btn_109tv_151", Ge = "_captcha__btn__main_109tv_183", Ue = "_captcha__btn__footer_109tv_207", Je = "_captcha__unchecked_109tv_217", qe = "_captcha__content_109tv_233", x = {
  captcha__wrapper: $e,
  captcha__failed: Be,
  captcha__failed__content: We,
  captcha__btn: Fe,
  captcha__btn__main: Ge,
  captcha__btn__footer: Ue,
  captcha__unchecked: Je,
  captcha__content: qe
}, re = [
  Se,
  Me,
  Ae,
  Le,
  ze,
  Ze,
  Ve,
  Ie
];
function Xe() {
  const [e, n] = w(7);
  Y(() => {
    const a = setInterval(() => {
      n((o) => (o + 1) % re.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const r = re[e];
  return /* @__PURE__ */ s.jsx(r, { style: { margin: -8 }, size: 46 });
}
function I(e, n, r = 1) {
  const o = e, i = [];
  let _ = 0;
  for (; _ < o; )
    i.push(_), _ += r;
  return i;
}
const Qe = "_timer__wrapper_17tk4_1", D = {
  timer__wrapper: Qe,
  "timer--last": "_timer--last_17tk4_33"
};
function Ke(e) {
  return e < 10;
}
function et({ start: e = 60, on_time_finished: n, on_change: r }) {
  const [a, o] = w(e), i = ge(e);
  return Y(() => {
    if (a <= 0) {
      n?.();
      return;
    }
    const _ = setTimeout(() => {
      o((m) => m - 1), i.current -= 1, r?.(i.current);
    }, 1e3);
    return () => clearTimeout(_);
  }, [a]), Y(() => {
    o(e);
  }, [e]), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${D.timer__wrapper} ${Ke(a) ? D["timer--last"] : D["timer--normal"]}`,
      children: /* @__PURE__ */ s.jsx("span", { children: a })
    }
  );
}
function oe(e) {
  const n = [...e];
  for (let r = n.length - 1; r > 0; r--) {
    const a = Math.floor(Math.random() * (r + 1));
    [n[r], n[a]] = [n[a], n[r]];
  }
  return n;
}
function H(e, n) {
  return oe(e).slice(0, n);
}
const tt = "_main_wz9d7_1", rt = "_instruction_wz9d7_9", nt = "_emoji_display_wz9d7_27", P = {
  main: tt,
  instruction: rt,
  emoji_display: nt,
  "button--correct": "_button--correct_wz9d7_53"
}, T = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😭",
  "😉",
  "😗",
  "😙",
  "😚",
  "😘",
  "🥰",
  "😍",
  "🤩",
  "🥳",
  "🙃",
  "🙂",
  "🥲",
  "🥹",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "😇",
  "😊",
  "☺️",
  "😏",
  "😌",
  "😔",
  "😑",
  "😐",
  "😶",
  "🫡",
  "🤔",
  "🤫",
  "🫢",
  "🤭",
  "🥱",
  "🤗",
  "🫣",
  "😱",
  "🤨",
  "🧐",
  "😒",
  "🙄",
  "😮‍💨",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🥺",
  "😟",
  "😥",
  "😢",
  "☹️",
  "🙁",
  "🫤",
  "😕",
  "🤐",
  "😰",
  "😨",
  "😧",
  "😦",
  "😮",
  "😯",
  "😲",
  "😳",
  "🤯",
  "😬",
  "😓",
  "😞",
  "😖",
  "😣",
  "😩",
  "😫",
  "😵",
  "😵‍💫",
  "🫥",
  "😴",
  "😪",
  "🤤",
  "🌛",
  "🌜",
  "🌚",
  "🌝",
  "🌞",
  "🫠",
  "😶‍🌫️",
  "🥴",
  "🥵",
  "🥶",
  "🤢",
  "🤮",
  "🤧",
  "🤒",
  "🤕",
  "😷",
  "🤠",
  "🤑",
  "😎",
  "🤓",
  "🥸",
  "🤥",
  "🤡",
  "👻",
  "💩",
  "👽",
  "🤖",
  "🎃",
  "😈",
  "👿",
  "👹",
  "👺",
  "🔥",
  "💫",
  "⭐",
  "🌟",
  "✨",
  "💥",
  "💯",
  "💢",
  "💨",
  "💦",
  "🫧",
  "💤",
  "🕳️",
  "🎉",
  "🎊",
  "🙈",
  "🙉",
  "🙊",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "♥️",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💌",
  "💟",
  "❣️",
  "❤️‍🩹",
  "💔",
  "❤️‍🔥",
  "💋",
  "🫂",
  "👥",
  "👤",
  "🗣️",
  "👣",
  "🧠",
  "🫀",
  "🫁",
  "🩸",
  "🦠",
  "🦷",
  "🦴",
  "☠️",
  "💀",
  "👀",
  "👁️",
  "👄",
  "🫦",
  "👅",
  "👃",
  "👂",
  "🦻",
  "🦶",
  "🦵",
  "🦿",
  "🦾",
  "💪",
  "👍",
  "👎",
  "👏",
  "🫶",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🤜",
  "🤛",
  "✊",
  "👊",
  "🫳",
  "🫴",
  "🫱",
  "🫲",
  "🤚",
  "👋",
  "🖐️",
  "✋",
  "🖖",
  "🤟",
  "🤘",
  "✌️",
  "🤞",
  "🫰",
  "🤙",
  "🤌",
  "🤏",
  "👌",
  "🖕",
  "☝️",
  "👆",
  "👇",
  "👉",
  "👈",
  "🫵",
  "✍️",
  "🤳",
  "🙏",
  "💅",
  "🙇",
  "🙋",
  "💁",
  "🙆",
  "🙅",
  "🤷",
  "🤦",
  "🙍",
  "🙎",
  "🧏",
  "💆",
  "💇",
  "🧖",
  "🛀",
  "🛌",
  "🧘",
  "🧑‍🦯",
  "🧑‍🦼",
  "🧑‍🦽",
  "🧎",
  "🧍",
  "🚶",
  "🏃",
  "🤸",
  "🏋️",
  "⛹️",
  "🤾",
  "🚴",
  "🚵",
  "🧗",
  "🤼",
  "🤹",
  "🏌️",
  "🏇",
  "🤺",
  "⛷️",
  "🏂",
  "🪂",
  "🏄",
  "🚣",
  "🏊",
  "🤽",
  "🧜",
  "🧚",
  "🧞",
  "🧝",
  "🧙",
  "🧛",
  "🧟",
  "🧌",
  "🦸",
  "🦹",
  "🥷",
  "🧑‍🎄",
  "👼",
  "💂",
  "🫅",
  "🤵",
  "👰",
  "🧑‍🚀",
  "👷",
  "👮",
  "🕵️",
  "🧑‍✈️",
  "🧑‍🔬",
  "🧑‍⚕️",
  "🧑‍🔧",
  "🧑‍🏭",
  "🧑‍🚒",
  "🧑‍🌾",
  "🧑‍🏫",
  "🧑‍🎓",
  "🧑‍💼",
  "🧑‍⚖️",
  "🧑‍💻",
  "🧑‍🎤",
  "🧑‍🎨",
  "🧑‍🍳",
  "👳",
  "🧕",
  "👲",
  "👶",
  "🧒",
  "🧑",
  "🧓",
  "🧑‍🦳",
  "🧑‍🦰",
  "👱",
  "🧑‍🦱",
  "🧑‍🦲",
  "🧔",
  "🕴️",
  "💃",
  "🕺",
  "👯",
  "🧑‍🤝‍🧑",
  "👭",
  "👬",
  "👫",
  "💏",
  "👩‍❤️‍💋‍👨",
  "👨‍❤️‍💋‍👨",
  "👩‍❤️‍💋‍👩",
  "💑",
  "👩‍❤️‍👨",
  "👨‍❤️‍👨",
  "👩‍❤️‍👩",
  "🫄",
  "🤱",
  "🧑‍🍼",
  "👪",
  "💐",
  "🌹",
  "🥀",
  "🌺",
  "🌷",
  "🪷",
  "🌸",
  "💮",
  "🏵️",
  "🌻",
  "🌼",
  "🍂",
  "🍁",
  "🍄",
  "🌾",
  "🌱",
  "🌿",
  "🍃",
  "☘️",
  "🍀",
  "🪴",
  "🌵",
  "🌴",
  "🌳",
  "🌲",
  "🪹",
  "🪺",
  "🪵",
  "🪨",
  "⛰️",
  "🏔️",
  "❄️",
  "☃️",
  "⛄",
  "🌊",
  "🫧",
  "🌬️",
  "🌀",
  "🌪️",
  "🌁",
  "🌫️",
  "🌡️",
  "🔥",
  "🌋",
  "🏜️",
  "🏞️",
  "🏖️",
  "⛱️",
  "🌅",
  "🌄",
  "☀️",
  "🌤️",
  "⛅",
  "🌥️",
  "🌦️",
  "☁️",
  "🌨️",
  "⛈️",
  "🌩️",
  "🌧️",
  "💧",
  "☔",
  "⚡",
  "🌈",
  "⭐",
  "🌟",
  "💫",
  "✨",
  "🌙",
  "☄️",
  "🌠",
  "🌌",
  "🪐",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌍",
  "🌎",
  "🌏",
  "🙈",
  "🙉",
  "🙊",
  "🐵",
  "🦁",
  "🐯",
  "🐱",
  "🐶",
  "🐺",
  "🐻",
  "🐻‍❄️",
  "🐨",
  "🐼",
  "🐹",
  "🐭",
  "🐰",
  "🦊",
  "🦝",
  "🐮",
  "🐷",
  "🐽",
  "🐗",
  "🦓",
  "🦄",
  "🐴",
  "🐸",
  "🐲",
  "🦎",
  "🐉",
  "🦖",
  "🦕",
  "🐢",
  "🐊",
  "🐍",
  "🐁",
  "🐀",
  "🐇",
  "🐈",
  "🐈‍⬛",
  "🐩",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐅",
  "🐆",
  "🐎",
  "🐖",
  "🐄",
  "🐂",
  "🐃",
  "🦬",
  "🐏",
  "🐑",
  "🐐",
  "🦌",
  "🦙",
  "🦥",
  "🦘",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🦒",
  "🐒",
  "🦍",
  "🦧",
  "🐪",
  "🐫",
  "🐿️",
  "🦫",
  "🦨",
  "🦡",
  "🦔",
  "🦦",
  "🦇",
  "🪶",
  "🦅",
  "🦉",
  "🐓",
  "🐔",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🦜",
  "🕊️",
  "🦤",
  "🦢",
  "🦩",
  "🦚",
  "🦃",
  "🦆",
  "🐧",
  "🦭",
  "🦈",
  "🐬",
  "🐋",
  "🐳",
  "🐟",
  "🐠",
  "🐡",
  "🦐",
  "🦞",
  "🦀",
  "🦑",
  "🐙",
  "🦪",
  "🪸",
  "🦂",
  "🕷️",
  "🕸️",
  "🐚",
  "🐌",
  "🐜",
  "🦗",
  "🪲",
  "🦟",
  "🪳",
  "🪰",
  "🐝",
  "🐞",
  "🦋",
  "🐛",
  "🪱",
  "🦠",
  "🐾",
  "🍓",
  "🍒",
  "🍎",
  "🍉",
  "🍑",
  "🍊",
  "🥭",
  "🍍",
  "🍌",
  "🍋",
  "🍈",
  "🍏",
  "🍐",
  "🥝",
  "🫒",
  "🫐",
  "🍇",
  "🥥",
  "🍅",
  "🌶️",
  "🥕",
  "🍠",
  "🧅",
  "🌽",
  "🥦",
  "🥒",
  "🥬",
  "🫑",
  "🥑",
  "🍆",
  "🧄",
  "🥔",
  "🫘",
  "🌰",
  "🥜",
  "🍞",
  "🫓",
  "🥐",
  "🥖",
  "🥯",
  "🧇",
  "🥞",
  "🍳",
  "🥚",
  "🧀",
  "🥓",
  "🥩",
  "🍗",
  "🍖",
  "🍔",
  "🌭",
  "🥪",
  "🥨",
  "🍟",
  "🍕",
  "🫔",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🥘",
  "🍝",
  "🥫",
  "🫕",
  "🥣",
  "🥗",
  "🍲",
  "🍛",
  "🍜",
  "🦪",
  "🦞",
  "🍣",
  "🍤",
  "🥡",
  "🍚",
  "🍱",
  "🥟",
  "🍢",
  "🍙",
  "🍘",
  "🍥",
  "🍡",
  "🥠",
  "🥮",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🍰",
  "🍮",
  "🎂",
  "🧁",
  "🍭",
  "🍬",
  "🍫",
  "🍩",
  "🍪",
  "🍯",
  "🧂",
  "🧈",
  "🍿",
  "🧊",
  "🫙",
  "🥤",
  "🧋",
  "🧃",
  "🥛",
  "🍼",
  "🍵",
  "☕",
  "🫖",
  "🧉",
  "🍺",
  "🍻",
  "🥂",
  "🍾",
  "🍷",
  "🥃",
  "🫗",
  "🍸",
  "🍹",
  "🍶",
  "🥢",
  "🍴",
  "🥄",
  "🔪",
  "🍽️",
  "🛑",
  "🚧",
  "🚨",
  "⛽",
  "🛢️",
  "🧭",
  "🛞",
  "🛟",
  "⚓",
  "🚏",
  "🚇",
  "🚥",
  "🚦",
  "🛴",
  "🦽",
  "🦼",
  "🩼",
  "🚲",
  "🛵",
  "🏍️",
  "🚙",
  "🚗",
  "🛻",
  "🚐",
  "🚚",
  "🚛",
  "🚜",
  "🏎️",
  "🚒",
  "🚑",
  "🚓",
  "🚕",
  "🛺",
  "🚌",
  "🚈",
  "🚝",
  "🚅",
  "🚄",
  "🚂",
  "🚃",
  "🚋",
  "🚎",
  "🚞",
  "🚊",
  "🚉",
  "🚍",
  "🚔",
  "🚘",
  "🚖",
  "🚆",
  "🚢",
  "🛳️",
  "🛥️",
  "🚤",
  "⛴️",
  "⛵",
  "🛶",
  "🚟",
  "🚠",
  "🚡",
  "🚁",
  "🛸",
  "🚀",
  "✈️",
  "🛫",
  "🛬",
  "🛩️",
  "🛝",
  "🎢",
  "🎡",
  "🎠",
  "🎪",
  "🗼",
  "🗽",
  "🗿",
  "🗻",
  "🏛️",
  "💈",
  "⛲",
  "⛩️",
  "🕍",
  "🕌",
  "🕋",
  "🛕",
  "⛪",
  "💒",
  "🏩",
  "🏯",
  "🏰",
  "🏗️",
  "🏢",
  "🏭",
  "🏬",
  "🏪",
  "🏟️",
  "🏦",
  "🏫",
  "🏨",
  "🏣",
  "🏤",
  "🏥",
  "🏚️",
  "🏠",
  "🏡",
  "🏘️",
  "🛖",
  "⛺",
  "🏕️",
  "🏙️",
  "🌆",
  "🌇",
  "🌃",
  "🌉",
  "🌁",
  "🛤️",
  "🛣️",
  "🏝️",
  "🗾",
  "🗺️",
  "🌐",
  "💺",
  "🧳",
  "🎉",
  "🎊",
  "🎈",
  "🎂",
  "🎀",
  "🎁",
  "🎇",
  "🎆",
  "🧨",
  "🧧",
  "🪔",
  "🪅",
  "🪩",
  "🎐",
  "🎏",
  "🎎",
  "🎑",
  "🎍",
  "🎋",
  "🎄",
  "🎃",
  "🎗️",
  "🥇",
  "🥈",
  "🥉",
  "🏅",
  "🎖️",
  "🏆",
  "📢",
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🥅",
  "🏸",
  "🥍",
  "🏏",
  "🏑",
  "🏒",
  "🥌",
  "🛷",
  "🎿",
  "⛸️",
  "🛼",
  "🩰",
  "🛹",
  "⛳",
  "🎯",
  "🏹",
  "🥏",
  "🪃",
  "🪁",
  "🎣",
  "🤿",
  "🩱",
  "🎽",
  "🥋",
  "🥊",
  "🎱",
  "🏓",
  "🎳",
  "♟️",
  "🪀",
  "🧩",
  "🎮",
  "🕹️",
  "👾",
  "🔫",
  "🎲",
  "🎰",
  "🎴",
  "🀄",
  "🃏",
  "🪄",
  "🎩",
  "📷",
  "📸",
  "🖼️",
  "🎨",
  "🖌️",
  "🖍️",
  "🪡",
  "🧵",
  "🧶",
  "🎹",
  "🎷",
  "🎺",
  "🎸",
  "🪕",
  "🎻",
  "🪘",
  "🥁",
  "🪗",
  "🎤",
  "🎧",
  "🎚️",
  "🎛️",
  "🎙️",
  "📻",
  "📺",
  "📼",
  "📹",
  "📽️",
  "🎥",
  "🎞️",
  "🎬",
  "🎭",
  "🎫",
  "🎟️",
  "📱",
  "☎️",
  "📞",
  "📟",
  "📠",
  "🔌",
  "🔋",
  "🪫",
  "🖲️",
  "💽",
  "💾",
  "💿",
  "📀",
  "🖥️",
  "💻",
  "⌨️",
  "🖨️",
  "🖱️",
  "🪙",
  "💸",
  "💵",
  "💴",
  "💶",
  "💷",
  "💳",
  "💰",
  "🧾",
  "🧮",
  "⚖️",
  "🛒",
  "🛍️",
  "🕯️",
  "💡",
  "🔦",
  "🏮",
  "🧱",
  "🪟",
  "🪞",
  "🚪",
  "🪑",
  "🛏️",
  "🛋️",
  "🚿",
  "🛁",
  "🚽",
  "🧻",
  "🪠",
  "🧸",
  "🪆",
  "🧷",
  "🪢",
  "🧹",
  "🧴",
  "🧽",
  "🧼",
  "🪥",
  "🪒",
  "🧺",
  "🧦",
  "🧤",
  "🧣",
  "👖",
  "👕",
  "🎽",
  "👚",
  "👔",
  "👗",
  "👘",
  "🥻",
  "🩱",
  "👙",
  "🩳",
  "🩲",
  "🧥",
  "🥼",
  "🦺",
  "⛑️",
  "🪖",
  "🎓",
  "🎩",
  "👒",
  "🧢",
  "👑",
  "🎒",
  "👝",
  "👛",
  "👜",
  "💼",
  "🧳",
  "☂️",
  "🌂",
  "💍",
  "💎",
  "💄",
  "👠",
  "👟",
  "👞",
  "🥿",
  "🩴",
  "👡",
  "👢",
  "🥾",
  "👓",
  "🕶️",
  "🦯",
  "🥽",
  "⚗️",
  "🧫",
  "🧪",
  "🌡️",
  "🧬",
  "💉",
  "💊",
  "🩹",
  "🩺",
  "🩻",
  "🔭",
  "🔬",
  "📡",
  "🛰️",
  "🧯",
  "🪓",
  "🪜",
  "🪣",
  "🪝",
  "🧲",
  "🧰",
  "🗜️",
  "🔩",
  "🪛",
  "🪚",
  "🔧",
  "🔨",
  "⚒️",
  "🛠️",
  "⛏️",
  "⚙️",
  "🔗",
  "⛓️",
  "📎",
  "🖇️",
  "📏",
  "📐",
  "✂️",
  "📌",
  "📍",
  "🗑️",
  "🖌️",
  "🖍️",
  "🖊️",
  "🖋️",
  "✒️",
  "✏️",
  "📝",
  "📒",
  "📔",
  "📕",
  "📓",
  "📗",
  "📘",
  "📙",
  "📚",
  "📖",
  "🔖",
  "🗒️",
  "📄",
  "📃",
  "📋",
  "📇",
  "📑",
  "🗃️",
  "🗄️",
  "🗂️",
  "📂",
  "📁",
  "📰",
  "🗞️",
  "📊",
  "📈",
  "📉",
  "🪧",
  "🪪",
  "🏷️",
  "📦",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "✉️",
  "📧",
  "📩",
  "📨",
  "💌",
  "📤",
  "📥",
  "🗳️",
  "⏱️",
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕡",
  "🕖",
  "🕢",
  "🕗",
  "🕣",
  "🕘",
  "🕤",
  "🕙",
  "🕥",
  "🕚",
  "🕦",
  "⌛",
  "⏳",
  "🕰️",
  "⌚",
  "⏲️",
  "⏰",
  "🗓️",
  "📅",
  "📆",
  "🛎️",
  "🔔",
  "📯",
  "📢",
  "📣",
  "🔍",
  "🔎",
  "🔮",
  "🧿",
  "🪬",
  "📿",
  "🏺",
  "⚱️",
  "⚰️",
  "🪦",
  "🚬",
  "💣",
  "🪤",
  "📜",
  "⚔️",
  "🗡️",
  "🛡️",
  "🗝️",
  "🔑",
  "🔐",
  "🔏",
  "🔒",
  "🔓",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🔵",
  "🟣",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "⬛",
  "⬜",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎",
  "♀️",
  "♂️",
  "⚧️",
  "🔻",
  "🔺",
  "❕",
  "❗",
  "❔",
  "❓",
  "⁉️",
  "‼️",
  "⭕",
  "❌",
  "🚫",
  "🚳",
  "🚭",
  "🚯",
  "🚱",
  "🚷",
  "📵",
  "🔞",
  "🔕",
  "🔇",
  "🅰️",
  "🆎",
  "🅱️",
  "🅾️",
  "🆑",
  "🆘",
  "🛑",
  "⛔",
  "📛",
  "♨️",
  "🉐",
  "㊙️",
  "㊗️",
  "🈴",
  "🈵",
  "🈹",
  "🈲",
  "🉑",
  "🈶",
  "🈚",
  "🈸",
  "🈺",
  "🈷️",
  "🔶",
  "🔸",
  "🔆",
  "🔅",
  "✴️",
  "🆚",
  "🎦",
  "📶",
  "🔁",
  "🔂",
  "🔀",
  "▶️",
  "⏩",
  "⏭️",
  "⏯️",
  "◀️",
  "⏪",
  "⏮️",
  "🔼",
  "⏫",
  "🔽",
  "⏬",
  "⏸️",
  "⏹️",
  "⏺️",
  "⏏️",
  "📴",
  "📳",
  "📲",
  "🔈",
  "🔉",
  "🔊",
  "🎼",
  "🎵",
  "🎶",
  "☢️",
  "☣️",
  "⚠️",
  "🚸",
  "⚜️",
  "🔱",
  "〽️",
  "🔰",
  "✳️",
  "❇️",
  "♻️",
  "💱",
  "💲",
  "💹",
  "🈯",
  "❎",
  "✅",
  "✔️",
  "☑️",
  "⬆️",
  "↗️",
  "➡️",
  "↘️",
  "⬇️",
  "↙️",
  "⬅️",
  "↖️",
  "↕️",
  "↔️",
  "↩️",
  "↪️",
  "⤴️",
  "⤵️",
  "🔃",
  "🔄",
  "🔙",
  "🔛",
  "🔝",
  "🔚",
  "🔜",
  "🆕",
  "🆓",
  "🆙",
  "🆗",
  "🆒",
  "🆖",
  "ℹ️",
  "🅿️",
  "🈁",
  "🈂️",
  "🈳",
  "🔣",
  "🔤",
  "🔠",
  "🔡",
  "🔢",
  "#️⃣",
  "*️⃣",
  "0️⃣",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
  "💠",
  "🔷",
  "🔹",
  "🌐",
  "🏧",
  "Ⓜ️",
  "🚾",
  "🚻",
  "🚹",
  "🚺",
  "♿",
  "🚼",
  "🛗",
  "🚮",
  "🚰",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "💟",
  "⚛️",
  "🛐",
  "🕉️",
  "☸️",
  "☮️",
  "☯️",
  "☪️",
  "✝️",
  "☦️",
  "✡️",
  "🔯",
  "🕎",
  "♾️",
  "🆔",
  "⚕️",
  "✖️",
  "➕",
  "➖",
  "➗",
  "🟰",
  "➰",
  "➿",
  "〰️",
  "©️",
  "®️",
  "™️",
  "♥️",
  "♦️",
  "♣️",
  "♠️",
  "🔘",
  "🔳",
  "◼️",
  "◾",
  "▪️",
  "🔲",
  "◻️",
  "◽",
  "▫️",
  "💭",
  "🗯️",
  "💬",
  "🗨️",
  "👁️‍🗨️"
];
function at({
  width: e = 3,
  time: n = [5, 3, 10],
  onSuccess: r,
  onFail: a
}) {
  const [o, i] = w({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [_, m] = w(
    H(I(T.length), e)
  ), v = () => {
    if (o.stage === 0)
      i((l) => ({
        ...l,
        correct_indexes: _,
        stage: 1,
        instruction: "Do you know you can't lick your elbow?"
      }));
    else if (o.stage === 1) {
      i((b) => ({
        ...b,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let l = H(
        I(T.length),
        e * (e - 1)
      );
      for (; l.some((b) => o.correct_indexes.includes(b)); )
        l = H(
          I(T.length),
          e * (e - 1)
        );
      const f = oe([..._, ...l]);
      m(f);
    } else o.stage == 2 && o.active && (a({
      score: o.score / e,
      message: "Time and tides waits for none"
    }), i((l) => ({ ...l, active: !1 })));
  }, C = (l) => {
    if (!(o.stage !== 2 || !o.active))
      if (o.correct_indexes.includes(l)) {
        if (o.score === e - 1) {
          r({
            score: 1,
            message: "Are you a memory king?"
          }), i((f) => ({
            ...f,
            active: !1,
            user_clicked: [...f.user_clicked, l]
          }));
          return;
        }
        i((f) => ({
          ...f,
          score: f.score + 1,
          user_clicked: [...f.user_clicked, l]
        }));
      } else
        i((f) => ({
          ...f,
          user_clicked: [...f.user_clicked, l],
          active: !1
        })), a({
          score: o.score / e,
          message: "Oops! I just arrived here"
        });
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("header", { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Remember Emojis" }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Look at all the emojis carefully for ",
          /* @__PURE__ */ s.jsxs("u", { children: [
            n[0],
            " seconds"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsx(
        et,
        {
          start: n[o?.stage ?? 0],
          on_time_finished: v
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("main", { className: P.main, children: [
      /* @__PURE__ */ s.jsx("p", { className: P.instruction, children: o.instruction }),
      o.stage !== 1 && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: P.emoji_display,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: _.map((l, f) => /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: C.bind(null, l),
              className: o.user_clicked.includes(l) ? P["button--correct"] : "",
              children: /* @__PURE__ */ s.jsx("span", { children: T[l] })
            },
            f
          ))
        }
      )
    ] })
  ] });
}
function ct({ difficulty: e, onComplete: n }) {
  const [r, a] = w(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [o, i] = w(null), _ = () => {
    a((C) => C === "initial" ? "progress" : C);
  }, m = ({ score: C, message: l }) => {
    i({
      score: C,
      message: l,
      type: "failure"
    });
  }, v = ({ score: C, message: l }) => {
    i({
      score: C,
      message: l,
      type: "success"
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: x.captcha__wrapper, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: x.captcha__btn,
        onClick: _,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: x.captcha__btn__main, children: [
            r === "initial" && /* @__PURE__ */ s.jsx("div", { className: x.captcha__unchecked }),
            r === "success" && /* @__PURE__ */ s.jsx(Te, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r === "error" && /* @__PURE__ */ s.jsx(
              Ne,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            r === "progress" && /* @__PURE__ */ s.jsx(Xe, {}),
            /* @__PURE__ */ s.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: x.captcha__btn__footer, children: /* @__PURE__ */ s.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ s.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    r === "progress" && /* @__PURE__ */ s.jsxs("div", { className: x.captcha__content, children: [
      /* @__PURE__ */ s.jsx(
        at,
        {
          onFail: m,
          onSuccess: v
        }
      ),
      o && /* @__PURE__ */ s.jsx("div", { className: x.captcha__failed, children: /* @__PURE__ */ s.jsxs("div", { className: x.captcha__failed__content, children: [
        o.type === "failure" ? /* @__PURE__ */ s.jsx(De, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ s.jsx(He, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ s.jsx("p", { children: o.message }),
        /* @__PURE__ */ s.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ s.jsx(Ye, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  ct as Captcha
};
