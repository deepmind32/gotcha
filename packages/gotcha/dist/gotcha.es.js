import b, { useState as P, useEffect as Q, useRef as he } from "react";
import './index.css';const Ce = "_captcha__wrapper_1pyfx_1", be = "_captcha__btn_1pyfx_23", ve = "_captcha__btn__main_1pyfx_47", ge = "_captcha__btn__footer_1pyfx_71", ye = "_captcha__unchecked_1pyfx_81", xe = "_captcha__content_1pyfx_97", g = {
  captcha__wrapper: Ce,
  captcha__btn: be,
  captcha__btn__main: ve,
  captcha__btn__footer: ge,
  captcha__unchecked: ye,
  captcha__content: xe
};
var E = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function je() {
  if (H) return x;
  H = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, i, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      o = {};
      for (var d in i)
        d !== "key" && (o[d] = i[d]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: a,
      key: l,
      ref: i !== void 0 ? i : null,
      props: o
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
function we() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === de ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case k:
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
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case ne:
            return "Portal";
          case ie:
            return (r.displayName || "Context") + ".Provider";
          case ce:
            return (r._context.displayName || "Context") + ".Consumer";
          case se:
            var c = r.render;
            return r = r.displayName, r || (r = c.displayName || c.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case fe:
            return c = r.displayName || null, c !== null ? c : e(r.type) || "Memo";
          case V:
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
        var u = c.error, f = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), n(r);
      }
    }
    function a(r) {
      if (r === k) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === V)
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
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(r) {
      if ($.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function d(r, c) {
      function u() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: u,
        configurable: !0
      });
    }
    function p() {
      var r = e(this.type);
      return B[r] || (B[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function te(r, c, u, f, C, m, S, A) {
      return u = m.ref, r = {
        $$typeof: D,
        type: r,
        key: c,
        props: m,
        _owner: C
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: p
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
        value: A
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function Z(r, c, u, f, C, m, S, A) {
      var _ = c.children;
      if (_ !== void 0)
        if (f)
          if (pe(_)) {
            for (f = 0; f < _.length; f++)
              I(_[f]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(_);
      if ($.call(c, "key")) {
        _ = e(r);
        var v = Object.keys(c).filter(function(me) {
          return me !== "key";
        });
        f = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", W[_ + f] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          _,
          v,
          _
        ), W[_ + f] = !0);
      }
      if (_ = null, u !== void 0 && (t(u), _ = "" + u), l(c) && (t(c.key), _ = "" + c.key), "key" in c) {
        u = {};
        for (var M in c)
          M !== "key" && (u[M] = c[M]);
      } else u = c;
      return _ && d(
        u,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), te(
        r,
        _,
        m,
        C,
        i(),
        u,
        S,
        A
      );
    }
    function I(r) {
      typeof r == "object" && r !== null && r.$$typeof === D && r._store && (r._store.validated = 1);
    }
    var w = b, D = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), T = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, pe = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var Y, B = {}, F = w.react_stack_bottom_frame.bind(
      w,
      o
    )(), z = N(a(o)), W = {};
    j.Fragment = k, j.jsx = function(r, c, u, f, C) {
      var m = 1e4 > T.recentlyCreatedOwnerStacks++;
      return Z(
        r,
        c,
        u,
        !1,
        f,
        C,
        m ? Error("react-stack-top-frame") : F,
        m ? N(a(r)) : z
      );
    }, j.jsxs = function(r, c, u, f, C) {
      var m = 1e4 > T.recentlyCreatedOwnerStacks++;
      return Z(
        r,
        c,
        u,
        !0,
        f,
        C,
        m ? Error("react-stack-top-frame") : F,
        m ? N(a(r)) : z
      );
    };
  })()), j;
}
var U;
function Ee() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? E.exports = je() : E.exports = we()), E.exports;
}
var s = Ee(), ee = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, J = b.createContext && /* @__PURE__ */ b.createContext(ee), Re = ["attr", "size", "title"];
function Oe(e, n) {
  if (e == null) return {};
  var t = Pe(e, n), a, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      a = o[i], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function Pe(e, n) {
  if (e == null) return {};
  var t = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (n.indexOf(a) >= 0) continue;
      t[a] = e[a];
    }
  return t;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, R.apply(this, arguments);
}
function q(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function O(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? q(Object(t), !0).forEach(function(a) {
      ke(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function ke(e, n, t) {
  return n = Te(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Te(e) {
  var n = Ne(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Ne(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function re(e) {
  return e && e.map((n, t) => /* @__PURE__ */ b.createElement(n.tag, O({
    key: t
  }, n.attr), re(n.child)));
}
function h(e) {
  return (n) => /* @__PURE__ */ b.createElement(Se, R({
    attr: O({}, e.attr)
  }, n), re(e.child));
}
function Se(e) {
  var n = (t) => {
    var {
      attr: a,
      size: i,
      title: o
    } = e, l = Oe(e, Re), d = i || t.size || "1em", p;
    return t.className && (p = t.className), e.className && (p = (p ? p + " " : "") + e.className), /* @__PURE__ */ b.createElement("svg", R({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, l, {
      className: p,
      style: O(O({
        color: e.color || t.color
      }, t.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ b.createElement("title", null, o), e.children);
  };
  return J !== void 0 ? /* @__PURE__ */ b.createElement(J.Consumer, null, (t) => n(t)) : n(ee);
}
function Ae(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Me(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Le(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ie(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function De(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ve(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function $e(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Ye(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Be(e) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
const X = [
  Le,
  Ze,
  Ie,
  De,
  Ve,
  $e,
  Ye,
  Be
];
function Fe() {
  const [e, n] = P(7);
  Q(() => {
    const a = setInterval(() => {
      n((i) => (i + 1) % X.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const t = X[e];
  return /* @__PURE__ */ s.jsx(t, { style: { margin: -8 }, size: 46 });
}
function ze(e, n, t = 1) {
  const i = e, o = [];
  let l = 0;
  for (; l < i; )
    o.push(l), l += t;
  return o;
}
const We = "_form__pin_1kyyk_1", He = {
  form__pin: We
};
function K(e, n) {
  const t = ze(n).map((a) => e.current[a].value);
  return t.map((a) => a.length > 0).every(Boolean) ? t.reduce((a, i) => `${a}${i}`) : !1;
}
function Ge({ digits: e = 4, onChange: n }) {
  const t = he([]), a = (o, l) => {
    const d = l.target.value;
    o <= 2 && d.length === 1 && t.current[o + 1].focus();
    const p = K(t, e);
    n(p || void 0);
  }, i = (o, l) => {
    const d = l.target.value;
    d.length > 0 && l.key === "Backspace" ? (t.current[o].value = null, K(t, e) || n(void 0)) : o !== 0 && (l.key === "Backspace" || l.key === "ArrowLeft") ? t.current[o - 1].focus() : o !== e - 1 && l.key === "ArrowRight" ? t.current[o + 1].focus() : d.length === 1 && l.key.length == 1 && !l.ctrlKey && !l.metaKey && (t.current[o].value = String(l.key), l.preventDefault(), o < e - 1 && t.current[o + 1].focus());
  };
  return /* @__PURE__ */ s.jsx("div", { className: He.form__pin, children: [0, 1, 2, 3].map((o) => /* @__PURE__ */ s.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: a.bind(null, o),
      onKeyDown: i.bind(null, o),
      ref: (l) => t.current[o] = l
    },
    o
  )) });
}
const Ue = "_timer__wrapper_17tk4_1", L = {
  timer__wrapper: Ue,
  "timer--last": "_timer--last_17tk4_33"
};
function Je(e) {
  return e < 10;
}
function qe({ start: e = 60, on_time_finished: n }) {
  const [t, a] = P(e);
  return Q(() => {
    const i = setInterval(() => {
      a((o) => o > 0 ? o - 1 : (n(), clearInterval(i), 0));
    }, 1e3);
    return () => {
      clearInterval(i);
    };
  }, []), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${L.timer__wrapper} ${Je(t) ? L["timer--last"] : L["timer--normal"]}
		`,
      children: /* @__PURE__ */ s.jsx("span", { children: t })
    }
  );
}
const Xe = "_header_s76go_1", Ke = "_header__info_s76go_15", Qe = "_form__pin__wrapper_s76go_25", er = "_form__btn_s76go_37", y = {
  header: Xe,
  header__info: Ke,
  form__pin__wrapper: Qe,
  form__btn: er
};
function rr() {
  const [e, n] = P(void 0), t = () => {
    console.log("Oops, you failed");
  }, a = (o) => {
    n(o);
  }, i = (o) => {
    o.preventDefault();
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("header", { className: y.header, children: [
      /* @__PURE__ */ s.jsxs("div", { className: y.header__info, children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Set the pin" }),
        /* @__PURE__ */ s.jsx("p", { children: "Prove yourself a human by changing a random pin" })
      ] }),
      /* @__PURE__ */ s.jsx(qe, { start: 15, on_time_finished: t })
    ] }),
    /* @__PURE__ */ s.jsx("main", { className: y.main, children: /* @__PURE__ */ s.jsxs("form", { className: y.form, onSubmit: i, children: [
      /* @__PURE__ */ s.jsx("div", { className: y.form__pin__wrapper, children: /* @__PURE__ */ s.jsx(Ge, { digits: 4, onChange: a }) }),
      /* @__PURE__ */ s.jsx("div", { className: y.form__btn, children: /* @__PURE__ */ s.jsx("button", { type: "submit", disabled: !e, children: "Submit" }) })
    ] }) })
  ] });
}
function nr() {
  const [e, n] = P("progress"), t = () => {
    n((a) => a === "initial" ? "progress" : a);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: g.captcha__wrapper, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: g.captcha__btn,
        onClick: t,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: g.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ s.jsx("div", { className: g.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ s.jsx(Ae, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ s.jsx(
              Me,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ s.jsx(Fe, {}),
            /* @__PURE__ */ s.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: g.captcha__btn__footer, children: /* @__PURE__ */ s.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ s.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ s.jsx("div", { className: g.captcha__content, children: /* @__PURE__ */ s.jsx(rr, {}) })
  ] });
}
export {
  nr as Captcha
};
