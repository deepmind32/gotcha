import x, { useState as j, useEffect as H, useRef as ae } from "react";
import './index.css';var S = { exports: {} }, k = {};
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
  if (X) return k;
  X = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, s, c) {
    var l = null;
    if (c !== void 0 && (l = "" + c), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      c = {};
      for (var u in s)
        u !== "key" && (c[u] = s[u]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: a,
      key: l,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return k.Fragment = n, k.jsx = t, k.jsxs = t, k;
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
var K;
function Ce() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === pe ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case v:
          return "Fragment";
        case ie:
          return "Profiler";
        case R:
          return "StrictMode";
        case _e:
          return "Suspense";
        case fe:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case I:
            return "Portal";
          case le:
            return (r.displayName || "Context") + ".Provider";
          case se:
            return (r._context.displayName || "Context") + ".Consumer";
          case ue:
            var i = r.render;
            return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case de:
            return i = r.displayName || null, i !== null ? i : e(r.type) || "Memo";
          case Y:
            i = r._payload, r = r._init;
            try {
              return e(r(i));
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
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var _ = i.error, d = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return _.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(r);
      }
    }
    function a(r) {
      if (r === v) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Y)
        return "<...>";
      try {
        var i = e(r);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var r = V.A;
      return r === null ? null : r.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function l(r) {
      if (W.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function u(r, i) {
      function _() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: _,
        configurable: !0
      });
    }
    function f() {
      var r = e(this.type);
      return G[r] || (G[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function P(r, i, _, d, C, m, z, $) {
      return _ = m.ref, r = {
        $$typeof: E,
        type: r,
        key: i,
        props: m,
        _owner: C
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(r, "ref", {
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
        value: z
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function N(r, i, _, d, C, m, z, $) {
      var h = i.children;
      if (h !== void 0)
        if (d)
          if (me(h)) {
            for (d = 0; d < h.length; d++)
              T(h[d]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(h);
      if (W.call(i, "key")) {
        h = e(r);
        var w = Object.keys(i).filter(function(ve) {
          return ve !== "key";
        });
        d = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", q[h + d] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          h,
          w,
          h
        ), q[h + d] = !0);
      }
      if (h = null, _ !== void 0 && (t(_), h = "" + _), l(i) && (t(i.key), h = "" + i.key), "key" in i) {
        _ = {};
        for (var D in i)
          D !== "key" && (_[D] = i[D]);
      } else _ = i;
      return h && u(
        _,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), P(
        r,
        h,
        m,
        C,
        s(),
        _,
        z,
        $
      );
    }
    function T(r) {
      typeof r == "object" && r !== null && r.$$typeof === E && r._store && (r._store.validated = 1);
    }
    var y = x, E = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), se = Symbol.for("react.consumer"), le = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), pe = Symbol.for("react.client.reference"), V = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, me = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var F, G = {}, U = y.react_stack_bottom_frame.bind(
      y,
      c
    )(), J = Z(a(c)), q = {};
    O.Fragment = v, O.jsx = function(r, i, _, d, C) {
      var m = 1e4 > V.recentlyCreatedOwnerStacks++;
      return N(
        r,
        i,
        _,
        !1,
        d,
        C,
        m ? Error("react-stack-top-frame") : U,
        m ? Z(a(r)) : J
      );
    }, O.jsxs = function(r, i, _, d, C) {
      var m = 1e4 > V.recentlyCreatedOwnerStacks++;
      return N(
        r,
        i,
        _,
        !0,
        d,
        C,
        m ? Error("react-stack-top-frame") : U,
        m ? Z(a(r)) : J
      );
    };
  })()), O;
}
var Q;
function ge() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? S.exports = be() : S.exports = Ce()), S.exports;
}
var o = ge(), ce = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ee = x.createContext && /* @__PURE__ */ x.createContext(ce), xe = ["attr", "size", "title"];
function je(e, n) {
  if (e == null) return {};
  var t = ye(e, n), a, s;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (s = 0; s < c.length; s++)
      a = c[s], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
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
function A() {
  return A = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, A.apply(this, arguments);
}
function re(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function L(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? re(Object(t), !0).forEach(function(a) {
      we(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : re(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function we(e, n, t) {
  return n = Ee(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Ee(e) {
  var n = Re(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Re(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function oe(e) {
  return e && e.map((n, t) => /* @__PURE__ */ x.createElement(n.tag, L({
    key: t
  }, n.attr), oe(n.child)));
}
function p(e) {
  return (n) => /* @__PURE__ */ x.createElement(ke, A({
    attr: L({}, e.attr)
  }, n), oe(e.child));
}
function ke(e) {
  var n = (t) => {
    var {
      attr: a,
      size: s,
      title: c
    } = e, l = je(e, xe), u = s || t.size || "1em", f;
    return t.className && (f = t.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ x.createElement("svg", A({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, l, {
      className: f,
      style: L(L({
        color: e.color || t.color
      }, t.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ x.createElement("title", null, c), e.children);
  };
  return ee !== void 0 ? /* @__PURE__ */ x.createElement(ee.Consumer, null, (t) => n(t)) : n(ce);
}
function Oe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Pe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Ne(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Te(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Se(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Ie(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ve(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Ze(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ze(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function $e(e) {
  return p({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const De = "_captcha__wrapper_cvlpo_5", Be = "_captcha__failed_cvlpo_71", He = "_captcha__failed__content_cvlpo_101", Ye = "_captcha__btn_cvlpo_129", We = "_captcha__btn__main_cvlpo_161", Fe = "_captcha__btn__footer_cvlpo_185", Ge = "_captcha__unchecked_cvlpo_195", Ue = "_captcha__content_cvlpo_211", g = {
  captcha__wrapper: De,
  captcha__failed: Be,
  captcha__failed__content: He,
  captcha__btn: Ye,
  captcha__btn__main: We,
  captcha__btn__footer: Fe,
  captcha__unchecked: Ge,
  captcha__content: Ue
}, te = [
  Ne,
  Te,
  Se,
  Me,
  Ae,
  Le,
  Ie,
  Ve
];
function Je() {
  const [e, n] = j(7);
  H(() => {
    const a = setInterval(() => {
      n((s) => (s + 1) % te.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const t = te[e];
  return /* @__PURE__ */ o.jsx(t, { style: { margin: -8 }, size: 46 });
}
function qe(e, n, t = 1) {
  const s = e, c = [];
  let l = 0;
  for (; l < s; )
    c.push(l), l += t;
  return c;
}
const Xe = "_form__pin_1kyyk_1", Ke = {
  form__pin: Xe
};
function ne(e, n) {
  const t = qe(n).map((a) => e.current[a].value);
  return t.map((a) => a.length > 0).every(Boolean) ? t.reduce((a, s) => `${a}${s}`) : !1;
}
function Qe({ digits: e = 4, onChange: n }) {
  const t = ae([]), a = (c, l) => {
    const u = l.target.value;
    c <= 2 && u.length === 1 && t.current[c + 1].focus();
    const f = ne(t, e);
    n(f || void 0);
  }, s = (c, l) => {
    const u = l.target.value;
    u.length > 0 && l.key === "Backspace" ? (t.current[c].value = null, ne(t, e) || n(void 0)) : c !== 0 && (l.key === "Backspace" || l.key === "ArrowLeft") ? t.current[c - 1].focus() : c !== e - 1 && l.key === "ArrowRight" ? t.current[c + 1].focus() : u.length === 1 && l.key.length == 1 && !l.ctrlKey && !l.metaKey && (t.current[c].value = String(l.key), l.preventDefault(), c < e - 1 && t.current[c + 1].focus());
  };
  return /* @__PURE__ */ o.jsx("div", { className: Ke.form__pin, children: [0, 1, 2, 3].map((c) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: a.bind(null, c),
      onKeyDown: s.bind(null, c),
      ref: (l) => t.current[c] = l
    },
    c
  )) });
}
const er = "_timer__wrapper_17tk4_1", B = {
  timer__wrapper: er,
  "timer--last": "_timer--last_17tk4_33"
};
function rr(e) {
  return e < 10;
}
function tr({ start: e = 60, on_time_finished: n }) {
  const [t, a] = j(e);
  return H(() => {
    const s = setInterval(() => {
      a((c) => c > 0 ? c - 1 : (n(), clearInterval(s), 0));
    }, 1e3);
    return () => {
      clearInterval(s);
    };
  }, []), H(() => {
    a(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${B.timer__wrapper} ${rr(t) ? B["timer--last"] : B["timer--normal"]}
		`,
      children: /* @__PURE__ */ o.jsx("span", { children: t })
    }
  );
}
const nr = "_header_1caus_1", ar = "_header__info_1caus_15", cr = "_form__pin__wrapper_1caus_43", or = "_form__btn__wrapper_1caus_55", ir = "_enter_pin_1caus_73", b = {
  header: nr,
  header__info: ar,
  form__pin__wrapper: cr,
  form__btn__wrapper: or,
  enter_pin: ir
}, sr = "_button_u3ipf_1", lr = {
  button: sr
};
function M({ children: e, className: n, ...t }) {
  return /* @__PURE__ */ o.jsx("button", { className: `${lr.button} ${n ?? ""}`, ...t, children: e });
}
function ur({ onFail: e, onSuccess: n }) {
  const [a, s] = j(void 0), [c, l] = j("enter-pin"), [u, f] = j("0000"), P = ae(!1), N = () => {
    P.current || e({
      score: 0,
      message: "A turtle is faster than you"
    });
  }, T = (v) => {
    s(v);
  }, y = (v) => {
    v.preventDefault(), a && (l("verify-pin"), f(+a < Math.pow(10, 4) / 2 ? "9999" : "0000"));
  }, E = (v) => {
    const R = +u + v;
    R >= 0 && R <= Math.pow(10, 4) - 1 && f(String(R));
  }, I = () => {
    P.current = !0, a === u ? n({
      score: 1,
      message: "Looks like you need something little harder"
    }) : e({
      score: 0,
      message: "Looks like you are not human enough"
    });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: b.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: b.header__info, children: [
        /* @__PURE__ */ o.jsx("h3", { children: "PIN Challenge" }),
        c === "enter-pin" && /* @__PURE__ */ o.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        c === "verify-pin" && /* @__PURE__ */ o.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ o.jsx(
        tr,
        {
          start: c === "enter-pin" ? 10 : 30,
          on_time_finished: N
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("main", { className: b.main, children: [
      c === "enter-pin" && /* @__PURE__ */ o.jsxs("form", { className: b.form, onSubmit: y, children: [
        /* @__PURE__ */ o.jsx("div", { className: b.form__pin__wrapper, children: /* @__PURE__ */ o.jsx(Qe, { digits: 4, onChange: T }) }),
        /* @__PURE__ */ o.jsx("div", { className: b.form__btn__wrapper, children: /* @__PURE__ */ o.jsx(M, { type: "submit", disabled: !a, children: "Submit PIN" }) })
      ] }),
      c === "verify-pin" && /* @__PURE__ */ o.jsx("div", { className: b.form, children: /* @__PURE__ */ o.jsxs("div", { className: b.form__btn__wrapper, children: [
        /* @__PURE__ */ o.jsxs("div", { className: b.enter_pin, children: [
          /* @__PURE__ */ o.jsx(M, { onClick: E.bind(null, -1), children: "-" }),
          /* @__PURE__ */ o.jsx("span", { children: u }),
          /* @__PURE__ */ o.jsx(M, { onClick: E.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ o.jsx(M, { onClick: I, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
function fr() {
  const [e, n] = j(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [t, a] = j(null), s = () => {
    n((u) => u === "initial" ? "progress" : u);
  }, c = ({ score: u, message: f }) => {
    a({
      score: u,
      message: f,
      type: "failure"
    });
  }, l = ({ score: u, message: f }) => {
    a({
      score: u,
      message: f,
      type: "success"
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: g.captcha__wrapper, children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: g.captcha__btn,
        onClick: s,
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: g.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ o.jsx("div", { className: g.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ o.jsx(Oe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ o.jsx(
              Pe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ o.jsx(Je, {}),
            /* @__PURE__ */ o.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: g.captcha__btn__footer, children: /* @__PURE__ */ o.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ o.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ o.jsxs("div", { className: g.captcha__content, children: [
      /* @__PURE__ */ o.jsx(
        ur,
        {
          onFail: c,
          onSuccess: l
        }
      ),
      t && /* @__PURE__ */ o.jsx("div", { className: g.captcha__failed, children: /* @__PURE__ */ o.jsxs("div", { className: g.captcha__failed__content, children: [
        t.type === "failure" ? /* @__PURE__ */ o.jsx(Ze, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ o.jsx(ze, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ o.jsx("p", { children: t.message }),
        /* @__PURE__ */ o.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ o.jsx($e, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  fr as Captcha
};
