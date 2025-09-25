import S, { useState as k, useEffect as A, useRef as L } from "react";
import './index.css';var Y = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function De() {
  if (ye) return W;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(c, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var d in s)
        d !== "key" && (i[d] = s[d]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: c,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return W.Fragment = n, W.jsx = r, W.jsxs = r, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Ze() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === $e ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case h:
          return "Fragment";
        case x:
          return "Profiler";
        case m:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Ae:
          return "SuspenseList";
        case ze:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case g:
            return "Portal";
          case N:
            return (a.displayName || "Context") + ".Provider";
          case O:
            return (a._context.displayName || "Context") + ".Consumer";
          case D:
            var _ = a.render;
            return a = a.displayName, a || (a = _.displayName || _.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Le:
            return _ = a.displayName || null, _ !== null ? _ : e(a.type) || "Memo";
          case _e:
            _ = a._payload, a = a._init;
            try {
              return e(a(_));
            } catch {
            }
        }
      return null;
    }
    function n(a) {
      return "" + a;
    }
    function r(a) {
      try {
        n(a);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var v = _.error, b = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), n(a);
      }
    }
    function c(a) {
      if (a === h) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === _e)
        return "<...>";
      try {
        var _ = e(a);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var a = te.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(a) {
      if (me.call(a, "key")) {
        var _ = Object.getOwnPropertyDescriptor(a, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, _) {
      function v() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: v,
        configurable: !0
      });
    }
    function l() {
      var a = e(this.type);
      return fe[a] || (fe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function y(a, _, v, b, T, R, ne, se) {
      return v = R.ref, a = {
        $$typeof: w,
        type: a,
        key: _,
        props: R,
        _owner: T
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, _, v, b, T, R, ne, se) {
      var j = _.children;
      if (j !== void 0)
        if (b)
          if (qe(j)) {
            for (b = 0; b < j.length; b++)
              f(j[b]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(j);
      if (me.call(_, "key")) {
        j = e(a);
        var $ = Object.keys(_).filter(function(Ie) {
          return Ie !== "key";
        });
        b = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", ve[j + b] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          j,
          $,
          j
        ), ve[j + b] = !0);
      }
      if (j = null, v !== void 0 && (r(v), j = "" + v), o(_) && (r(_.key), j = "" + _.key), "key" in _) {
        v = {};
        for (var ae in _)
          ae !== "key" && (v[ae] = _[ae]);
      } else v = _;
      return j && d(
        v,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), y(
        a,
        j,
        R,
        T,
        s(),
        v,
        ne,
        se
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === w && a._store && (a._store.validated = 1);
    }
    var p = S, w = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), N = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ze = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), te = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, qe = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var he, fe = {}, pe = p.react_stack_bottom_frame.bind(
      p,
      i
    )(), ge = re(c(i)), ve = {};
    V.Fragment = h, V.jsx = function(a, _, v, b, T) {
      var R = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        _,
        v,
        !1,
        b,
        T,
        R ? Error("react-stack-top-frame") : pe,
        R ? re(c(a)) : ge
      );
    }, V.jsxs = function(a, _, v, b, T) {
      var R = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        _,
        v,
        !0,
        b,
        T,
        R ? Error("react-stack-top-frame") : pe,
        R ? re(c(a)) : ge
      );
    };
  })()), V;
}
var xe;
function We() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? Y.exports = De() : Y.exports = Ze()), Y.exports;
}
var t = We(), Te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, be = S.createContext && /* @__PURE__ */ S.createContext(Te), Ve = ["attr", "size", "title"];
function Be(e, n) {
  if (e == null) return {};
  var r = Ye(e, n), c, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      c = i[s], !(n.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (r[c] = e[c]);
  }
  return r;
}
function Ye(e, n) {
  if (e == null) return {};
  var r = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (n.indexOf(c) >= 0) continue;
      r[c] = e[c];
    }
  return r;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
    }
    return e;
  }, X.apply(this, arguments);
}
function je(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    n && (c = c.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, c);
  }
  return r;
}
function ee(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? je(Object(r), !0).forEach(function(c) {
      He(e, c, r[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(r, c));
    });
  }
  return e;
}
function He(e, n, r) {
  return n = Ge(n), n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Ge(e) {
  var n = Fe(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Fe(e, n) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var c = r.call(e, n);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Me(e) {
  return e && e.map((n, r) => /* @__PURE__ */ S.createElement(n.tag, ee({
    key: r
  }, n.attr), Me(n.child)));
}
function C(e) {
  return (n) => /* @__PURE__ */ S.createElement(Ue, X({
    attr: ee({}, e.attr)
  }, n), Me(e.child));
}
function Ue(e) {
  var n = (r) => {
    var {
      attr: c,
      size: s,
      title: i
    } = e, o = Be(e, Ve), d = s || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ S.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, c, o, {
      className: l,
      style: ee(ee({
        color: e.color || r.color
      }, r.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ S.createElement("title", null, i), e.children);
  };
  return be !== void 0 ? /* @__PURE__ */ S.createElement(be.Consumer, null, (r) => n(r)) : n(Te);
}
function Je(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Ke(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Qe(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Xe(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function et(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function tt(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function rt(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function nt(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function st(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function at(e) {
  return C({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function it(e) {
  return C({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" }, child: [] }, { tag: "path", attr: { d: "m8 16 5-4-5-4zm5-4v4h2V8h-2z" }, child: [] }] })(e);
}
function ot(e) {
  return C({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ct(e) {
  return C({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function lt(e) {
  return C({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const ut = "_captcha__wrapper_109tv_5", dt = "_captcha__failed_109tv_93", _t = "_captcha__failed__content_109tv_123", mt = "_captcha__btn_109tv_151", ht = "_captcha__btn__main_109tv_183", ft = "_captcha__btn__footer_109tv_207", pt = "_captcha__unchecked_109tv_217", gt = "_captcha__content_109tv_233", M = {
  captcha__wrapper: ut,
  captcha__failed: dt,
  captcha__failed__content: _t,
  captcha__btn: mt,
  captcha__btn__main: ht,
  captcha__btn__footer: ft,
  captcha__unchecked: pt,
  captcha__content: gt
}, ke = [
  Qe,
  Xe,
  et,
  tt,
  rt,
  nt,
  st,
  at
];
function vt() {
  const [e, n] = k(7);
  A(() => {
    const c = setInterval(() => {
      n((s) => (s + 1) % ke.length);
    }, 100);
    return () => {
      clearInterval(c);
    };
  }, []);
  const r = ke[e];
  return /* @__PURE__ */ t.jsx(r, { style: { margin: -8 }, size: 46 });
}
const yt = "_timer__wrapper_17tk4_1", ie = {
  timer__wrapper: yt,
  "timer--last": "_timer--last_17tk4_33"
};
function wt(e) {
  return e < 10;
}
function z({ start: e = 60, on_time_finished: n, on_change: r }) {
  const [c, s] = k(e), i = L(e);
  return A(() => {
    if (c <= 0) {
      n?.();
      return;
    }
    const o = setTimeout(() => {
      s((d) => d - 1), i.current -= 1, r?.(i.current);
    }, 1e3);
    return () => clearTimeout(o);
  }, [c]), A(() => {
    s(e);
  }, [e]), /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `${ie.timer__wrapper} ${wt(c) ? ie["timer--last"] : ie["timer--normal"]}`,
      children: /* @__PURE__ */ t.jsx("span", { children: c })
    }
  );
}
const xt = "_main_1ex2e_1", bt = {
  main: xt
}, jt = "_button_u3ipf_1", kt = {
  button: jt
};
function q({ children: e, className: n, ...r }) {
  return /* @__PURE__ */ t.jsx("button", { className: `${kt.button} ${n ?? ""}`, ...r, children: e });
}
function H({
  question: e,
  answer: n,
  time: r = 100,
  onSuccess: c,
  onFail: s
}) {
  const i = L(null), o = () => {
    d && s({
      score: 0,
      message: "Looks like you are not a human"
    });
  }, [d, l] = k(!0), y = () => {
    if (!i.current || !d)
      return;
    i.current.value.toLocaleLowerCase() === n.toLocaleLowerCase() ? c({
      score: 1,
      message: "How did you get that?"
    }) : s({
      score: 0,
      message: "Wasn't it obvious for a human??"
    }), l(!1);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Quiz..." }),
        /* @__PURE__ */ t.jsx("p", { children: "Can you answer??" })
      ] }),
      /* @__PURE__ */ t.jsx(z, { start: r, on_time_finished: o })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: bt.main, children: [
      /* @__PURE__ */ t.jsxs("p", { children: [
        /* @__PURE__ */ t.jsx("span", { children: "Q:" }),
        " ",
        e
      ] }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: i,
          placeholder: "Answer",
          autoComplete: "false"
        }
      ),
      /* @__PURE__ */ t.jsx(q, { onClick: y, children: "Submit" })
    ] })
  ] });
}
const Ct = "_alphabet_showcase_e7eh5_1", Et = "_alphabet_input_e7eh5_41", Nt = "_light_e7eh5_79", G = {
  alphabet_showcase: Ct,
  alphabet_input: Et,
  light: Nt,
  "light--active": "_light--active_e7eh5_95"
}, Ce = [
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
function oe({
  reverse: e = !1,
  time: n = 26,
  total_light_glows: r = 3,
  onSuccess: c,
  onFail: s
}) {
  const [i, o] = k({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [d, l] = k(n), y = L(null);
  let u = Ce;
  e && (u = [...Ce].reverse()), A(() => {
    y.current.focus();
    const h = Array(r).fill(null).map((m) => ({
      time: Math.floor(Math.random() * (n - 1)),
      duration: Math.floor(Math.random() * n * 100)
    }));
    o((m) => ({ ...m, lights: h }));
  }, []);
  const f = () => {
    i.active && s({
      score: 0,
      message: "My brother could type it faster."
    }), o((h) => ({ ...h, active: !1 }));
  }, p = (h) => {
    if (!i.active)
      return;
    const m = h.key;
    i.glow && (c({
      score: 0,
      message: "Told you. Don't type while the light is glowing"
    }), o((x) => ({ ...x, active: !1 }))), m === u[i.index + 1] ? (m === u.at(-1) && (c({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), o((x) => ({ ...x, active: !1 }))), o((x) => ({ ...x, index: x.index + 1 }))) : s({
      score: (i.index + 1) / 26,
      message: "You are the typo master"
    });
  }, w = () => {
    y.current.value = "";
  }, g = (h) => {
    l(h);
  };
  return A(() => {
    let h;
    if (i.lights) {
      const m = i.lights.map((N) => N.time), x = i.lights.map((N) => N.duration), O = m.indexOf(d);
      O !== -1 && (o((N) => ({ ...N, glow: !0 })), h = setTimeout(() => {
        o((N) => ({ ...N, glow: !1 }));
      }, x[O]));
    }
    return () => h && clearTimeout(h);
  }, [d]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Type to win" }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "Write ",
          u[0],
          " to ",
          u.at(-1),
          " in given time. No backspaces. Only lowercase allowed.",
          " ",
          r >= 1 && /* @__PURE__ */ t.jsx("span", { children: "Don't write when the light is glowing" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: n,
          on_time_finished: f,
          on_change: g
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      r >= 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `${G.light} ${i.glow ? G["light--active"] : ""}`
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: G.alphabet_showcase, children: i.index >= 0 && u.slice(0, i.index + 1).map((h) => /* @__PURE__ */ t.jsx("span", { children: h }, h)) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: y,
          onKeyDown: p,
          onKeyUp: w,
          className: G.alphabet_input
        }
      )
    ] })
  ] });
}
function I(e, n, r = 1) {
  const s = e, i = [];
  let o = 0;
  for (; o < s; )
    i.push(o), o += r;
  return i;
}
function Se(e) {
  const n = [...e];
  for (let r = n.length - 1; r > 0; r--) {
    const c = Math.floor(Math.random() * (r + 1));
    [n[r], n[c]] = [n[c], n[r]];
  }
  return n;
}
function Q(e, n) {
  return Se(e).slice(0, n);
}
const Rt = "_main_wz9d7_1", Ot = "_instruction_wz9d7_9", Pt = "_emoji_display_wz9d7_27", F = {
  main: Rt,
  instruction: Ot,
  emoji_display: Pt,
  "button--correct": "_button--correct_wz9d7_53"
}, U = [
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
function ce({
  width: e = 3,
  time: n = [5, 3, 10],
  onSuccess: r,
  onFail: c
}) {
  const [s, i] = k({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [o, d] = k(
    Q(I(U.length), e)
  ), l = () => {
    if (s.stage === 0)
      i((u) => ({
        ...u,
        correct_indexes: o,
        stage: 1,
        instruction: "Do you know you can't lick your elbow?"
      }));
    else if (s.stage === 1) {
      i((p) => ({
        ...p,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let u = Q(
        I(U.length),
        e * (e - 1)
      );
      for (; u.some((p) => s.correct_indexes.includes(p)); )
        u = Q(
          I(U.length),
          e * (e - 1)
        );
      const f = Se([...o, ...u]);
      d(f);
    } else s.stage == 2 && s.active && (c({
      score: s.score / e,
      message: "Time and tides waits for none"
    }), i((u) => ({ ...u, active: !1 })));
  }, y = (u) => {
    if (!(s.stage !== 2 || !s.active))
      if (s.correct_indexes.includes(u)) {
        if (s.score === e - 1) {
          r({
            score: 1,
            message: "Are you a memory king?"
          }), i((f) => ({
            ...f,
            active: !1,
            user_clicked: [...f.user_clicked, u]
          }));
          return;
        }
        i((f) => ({
          ...f,
          score: f.score + 1,
          user_clicked: [...f.user_clicked, u]
        }));
      } else
        i((f) => ({
          ...f,
          user_clicked: [...f.user_clicked, u],
          active: !1
        })), c({
          score: s.score / e,
          message: "Oops! I just arrived here"
        });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Remember Emojis" }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "Look at all the emojis carefully for ",
          /* @__PURE__ */ t.jsxs("u", { children: [
            n[0],
            " seconds"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: n[s?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: F.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: F.instruction, children: s.instruction }),
      s.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: F.emoji_display,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: o.map((u, f) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: y.bind(null, u),
              className: s.user_clicked.includes(u) ? F["button--correct"] : "",
              children: /* @__PURE__ */ t.jsx("span", { children: U[u] })
            },
            f
          ))
        }
      )
    ] })
  ] });
}
const Tt = "_question_2wb7v_1", Mt = "_horizontal_flipped_2wb7v_15", St = "_vertical_flipped_2wb7v_23", At = "_both_flipped_2wb7v_31", Lt = "_input__wrapper_2wb7v_39", zt = "_input_2wb7v_39", J = {
  question: Tt,
  horizontal_flipped: Mt,
  vertical_flipped: St,
  both_flipped: At,
  input__wrapper: Lt,
  input: zt
}, $t = {
  easy: "normal",
  medium: "horizontal_flipped",
  hard: "vertical_flipped",
  "very hard": "both_flipped"
};
function le({
  difficulty: e = "easy",
  time: n = 10,
  question: r,
  answer: c,
  onFail: s,
  onSuccess: i
}) {
  const [o, d] = k({
    active: !0
  }), l = L(null), y = () => {
    if (!o.active)
      return;
    const p = +l.current.value;
    s(p === c ? {
      score: 0.5,
      message: "You were right but hey, time and tide waits for none."
    } : {
      score: 0.5,
      message: "My two year brother solves the question faster than you."
    }), d((w) => ({ ...w, active: !1 }));
  };
  A(() => {
    l.current && l.current.focus();
  }, [e]);
  const u = () => {
    if (!o.active)
      return;
    +l.current.value === c ? i({
      score: 1,
      message: "Didn't expect you to win. Wait for another challenge."
    }) : s({
      score: 0,
      message: "I have not encountered any human who couldn't solve this simple math."
    }), d((w) => ({ ...w, active: !1 }));
  }, f = (p) => {
    p.key === "Enter" && u();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Solve this simple maths" }),
        /* @__PURE__ */ t.jsx("p", { children: "Watch out for the time." })
      ] }),
      /* @__PURE__ */ t.jsx(z, { start: n, on_time_finished: y })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      /* @__PURE__ */ t.jsx("p", { className: `${J.question} ${J[$t[e]]}`, children: r }),
      /* @__PURE__ */ t.jsxs("div", { className: J.input__wrapper, children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "number",
            ref: l,
            onKeyDown: f,
            className: J.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ t.jsx(q, { onClick: u, children: "Submit" })
      ] })
    ] })
  ] });
}
const qt = "_main_1kxxm_1", It = "_instruction_1kxxm_9", Dt = "_pattern_grid_1kxxm_23", K = {
  main: qt,
  instruction: It,
  pattern_grid: Dt,
  "button--correct": "_button--correct_1kxxm_57"
};
function ue({
  width: e = 3,
  numbers: n = 4,
  order_matters: r = !0,
  time: c = [5, 3, 15],
  onSuccess: s,
  onFail: i
}) {
  const [o, d] = k({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: Q(I(e * e), n),
    clicked: []
  }), l = () => {
    o.stage === 0 ? d((u) => ({
      ...u,
      stage: 1,
      instruction: "Do you know you cannot laugh while your nose are closed?"
    })) : o.stage === 1 ? d((u) => ({
      ...u,
      stage: 2,
      instruction: r ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : o.stage === 2 && o.active && (d((u) => ({
      ...u,
      active: !1
    })), i({
      score: o.clicked.length,
      message: "Better care about your time at next round"
    }));
  }, y = (u) => {
    if (!o.active || o.stage !== 2)
      return;
    const f = Math.max(0, o.clicked.length);
    if (o.correct[f] === u || !r && o.correct.includes(u)) {
      if (o.clicked.length === n - 1) {
        d((p) => ({ ...p, active: !1 })), s({
          score: 1,
          message: "Didn't knew you were that sharp"
        });
        return;
      }
      d((p) => ({ ...p, clicked: [...p.clicked, u] }));
    } else
      d((p) => ({ ...p, active: !1 })), i({
        score: o.clicked.length / n,
        message: "Whoops! you may need to sharpen your brain"
      });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Test your brain" }),
        r && /* @__PURE__ */ t.jsx("p", { children: "Remember the number patterns and click as per the pattern later" }),
        !r && /* @__PURE__ */ t.jsx("p", { children: "Remember the number patterns and click the pattern later" })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: c[o?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: K.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: K.instruction, children: o.instruction }),
      o.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: K.pattern_grid,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: I(e * e).map((u) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: y.bind(null, u),
              className: (o.clicked.includes(u) || o.stage !== 2) && o.correct.includes(u) ? K["button--correct"] : "",
              children: r && (o.clicked.includes(u) || o.stage !== 2) && o.correct.includes(u) && /* @__PURE__ */ t.jsx("span", { children: o.correct.indexOf(u) + 1 })
            },
            u
          ))
        }
      )
    ] })
  ] });
}
const Zt = "_form__pin_1kyyk_1", Wt = {
  form__pin: Zt
};
function Ee(e, n) {
  const r = I(n).map((c) => e.current[c].value);
  return r.map((c) => c.length > 0).every(Boolean) ? r.reduce((c, s) => `${c}${s}`) : !1;
}
function Vt({ digits: e = 4, onChange: n }) {
  const r = L([]), c = (i, o) => {
    const d = o.target.value;
    i <= 2 && d.length === 1 && r.current[i + 1].focus();
    const l = Ee(r, e);
    n(l || void 0);
  }, s = (i, o) => {
    const d = o.target.value;
    d.length > 0 && o.key === "Backspace" ? (r.current[i].value = null, Ee(r, e) || n(void 0)) : i !== 0 && (o.key === "Backspace" || o.key === "ArrowLeft") ? r.current[i - 1].focus() : i !== e - 1 && o.key === "ArrowRight" ? r.current[i + 1].focus() : d.length === 1 && o.key.length == 1 && !o.ctrlKey && !o.metaKey && (r.current[i].value = String(o.key), o.preventDefault(), i < e - 1 && r.current[i + 1].focus());
  };
  return /* @__PURE__ */ t.jsx("div", { className: Wt.form__pin, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: c.bind(null, i),
      onKeyDown: s.bind(null, i),
      ref: (o) => r.current[i] = o
    },
    i
  )) });
}
const Bt = "_form__pin__wrapper_r131o_1", Yt = "_form__btn__wrapper_r131o_13", Ht = "_enter_pin_r131o_29", P = {
  form__pin__wrapper: Bt,
  form__btn__wrapper: Yt,
  enter_pin: Ht
};
function Ne({
  digit: e = 4,
  time: n = [10, 30],
  onFail: r,
  onSuccess: c
}) {
  const [s, i] = k(void 0), [o, d] = k("enter-pin"), [l, y] = k("0000"), u = L(!1), f = () => {
    u.current || r({
      score: 0,
      message: "A turtle is faster than you"
    });
  }, p = (m) => {
    i(m);
  }, w = (m) => {
    m.preventDefault(), s && (d("verify-pin"), y(+s < Math.pow(10, e) / 2 ? "9999" : "0000"));
  }, g = (m) => {
    const x = +l + m;
    x >= 0 && x <= Math.pow(10, e) - 1 && y(String(x));
  }, h = () => {
    u.current = !0, s === l ? c({
      score: 1,
      message: "Looks like you need something little harder"
    }) : r({
      score: 0,
      message: "Looks like you are not human enough"
    });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { className: P.header, children: [
      /* @__PURE__ */ t.jsxs("div", { className: P.header__info, children: [
        /* @__PURE__ */ t.jsx("h3", { children: "PIN Challenge" }),
        o === "enter-pin" && /* @__PURE__ */ t.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        o === "verify-pin" && /* @__PURE__ */ t.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: o === "enter-pin" ? n[0] : n[1],
          on_time_finished: f
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: P.main, children: [
      o === "enter-pin" && /* @__PURE__ */ t.jsxs("form", { className: P.form, onSubmit: w, children: [
        /* @__PURE__ */ t.jsx("div", { className: P.form__pin__wrapper, children: /* @__PURE__ */ t.jsx(Vt, { digits: e, onChange: p }) }),
        /* @__PURE__ */ t.jsx("div", { className: P.form__btn__wrapper, children: /* @__PURE__ */ t.jsx(q, { type: "submit", disabled: !s, children: "Submit PIN" }) })
      ] }),
      o === "verify-pin" && /* @__PURE__ */ t.jsx("div", { className: P.form, children: /* @__PURE__ */ t.jsxs("div", { className: P.form__btn__wrapper, children: [
        /* @__PURE__ */ t.jsxs("div", { className: P.enter_pin, children: [
          /* @__PURE__ */ t.jsx(q, { onClick: g.bind(null, -1), children: "-" }),
          /* @__PURE__ */ t.jsx("span", { children: l }),
          /* @__PURE__ */ t.jsx(q, { onClick: g.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ t.jsx(q, { onClick: h, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
const Gt = "_wasd__display_1j3za_1", Ft = "_wasd__display__row_1j3za_9", Ut = "_wasd__key_1j3za_31", Jt = "_active_1j3za_57", Kt = "_wrong_1j3za_65", Qt = "_correct_1j3za_77", Xt = "_pressed_1j3za_89", er = "_streaks_1j3za_103", E = {
  wasd__display: Gt,
  wasd__display__row: Ft,
  wasd__key: Ut,
  active: Jt,
  wrong: Kt,
  correct: Qt,
  pressed: Xt,
  streaks: er
}, tr = "_streak_meter_1o9ug_1", rr = "_intermedite_1o9ug_29", nr = "_advance_1o9ug_37", sr = "_fire_big_1o9ug_1", Re = {
  streak_meter: tr,
  intermedite: rr,
  advance: nr,
  fire_big: sr
};
function ar(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function ir(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function or({
  streak: e,
  max_streak: n = void 0,
  target: r = "♾"
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: Re.streak_meter, children: [
    /* @__PURE__ */ t.jsxs("p", { className: Re[ir(e)], children: [
      ar(e),
      "/",
      r
    ] }),
    typeof n < "u" && /* @__PURE__ */ t.jsxs("p", { children: [
      "Max Streak: ",
      n
    ] })
  ] });
}
function cr(e, n, r) {
  return e ? n === r ? "correct" : "wrong" : "normal";
}
function lr(e) {
  const n = ["w", "a", "s", "d"];
  let r = "";
  for (let c = 0; c < e; c++) {
    const s = Math.floor(Math.random() * n.length);
    r += n[s];
  }
  return r;
}
const Oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function ur(e) {
  return Object.keys(Oe).find((n) => Oe[n].includes(e));
}
function de({
  target: e = 5,
  times: n = [6, 30],
  speed_factor: r = 1,
  onSuccess: c,
  onFail: s
}) {
  const [i, o] = k({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), d = lr(100), l = L({
    active: !1,
    first_stage_done: !1,
    word: d,
    corrects: Array(d.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [y, u] = k(n[0]), f = () => {
    l.current.active = !0, l.current.first_stage_done = !0, u(n[1]);
  }, p = () => {
    l.current.max_streak >= e ? c({
      score: l.current.max_streak / e,
      message: "As quick as a Crane."
    }) : s({
      score: 0,
      message: "Didn't knew you were such a loser."
    });
  };
  return A(() => {
    const w = setInterval(() => {
      if (!l.current.active) return;
      if (l.current.index >= l.current.word.length) {
        l.current.active = !1, clearInterval(w);
        return;
      }
      const g = l.current.word[l.current.index];
      l.current.index += 1, o({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [g]: "active"
      });
    }, 600 * r);
    return () => clearInterval(w);
  }, [r]), A(() => {
    const w = /* @__PURE__ */ new Set(), g = (m) => {
      const x = ur(m.key);
      if (!x || w.has(m.key)) return;
      w.add(m.key);
      const O = l.current.index - 1, N = l.current.word[O], D = cr(
        l.current.active,
        x,
        N
      );
      typeof l.current.corrects[O] > "u" && (D === "correct" ? (l.current.corrects[O] = !0, l.current.streak++, l.current.max_streak = Math.max(
        l.current.max_streak,
        l.current.streak
      )) : D === "wrong" && (l.current.corrects[O] = !1, l.current.streak = 0)), o((Z) => ({ ...Z, [x]: D })), setTimeout(() => {
        o((Z) => ({ ...Z, [x]: "normal" }));
      }, 150);
    }, h = (m) => {
      w.delete(m.key);
    };
    return window.addEventListener("keydown", g), window.addEventListener("keyup", h), () => {
      window.removeEventListener("keydown", g), window.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ t.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: y,
          on_time_finished: () => {
            l.current.first_stage_done ? p() : f();
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ t.jsx("div", { className: E.streaks, children: /* @__PURE__ */ t.jsx(
        or,
        {
          max_streak: l.current.max_streak,
          streak: l.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: E.wasd__display, children: [
        /* @__PURE__ */ t.jsx("div", { className: E.wasd__display__row, children: /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `${E.wasd__key} ${E[i.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ t.jsxs("div", { className: E.wasd__display__row, children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${E.wasd__key} ${E[i.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${E.wasd__key} ${E[i.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${E.wasd__key} ${E[i.d]}`,
              children: "D"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const B = [
  {
    game: "quiz",
    component: H,
    props: [
      {
        question: "2 + 2 = ?",
        answer: "4",
        time: 7
      },
      {
        question: "You ate 1 apple from an basket with 3 oranges and 2 apples. How many oranges are left?",
        answer: "3",
        time: 10
      },
      {
        question: "What is 0/0?",
        answer: "undefined",
        time: 7
      }
    ]
  },
  {
    type: "math game",
    component: le,
    props: [
      {
        difficulty: "easy",
        time: 7,
        question: "7+65=?",
        answer: 72
      },
      {
        difficulty: "medium",
        time: 10,
        question: "99+102=?",
        answer: 201
      },
      {
        difficulty: "hard",
        time: 20,
        question: "86+21=?",
        answer: 107
      }
    ]
  },
  {
    type: "remember",
    component: ue,
    props: [
      {
        width: 3,
        numbers: 5,
        order_matters: !1,
        time: [10, 3, 20]
      },
      {
        width: 4,
        numbers: 6,
        order_matters: !1,
        time: [10, 3, 20]
      },
      {
        width: 4,
        numbers: 5,
        order_matters: !0,
        time: [12, 3, 20]
      }
    ]
  },
  {
    type: "A to Z",
    component: oe,
    props: [
      {
        time: 26,
        total_light_glows: 0,
        reverse: !1
      },
      {
        time: 15,
        total_light_glows: 0,
        reverse: !1
      },
      {
        time: 26,
        total_light_glows: 0,
        reverse: !0
      }
    ]
  },
  {
    type: "quiz",
    component: H,
    props: [
      {
        question: "Who is the yellow color electric pokemon?",
        answer: "pikachu",
        time: 7
      },
      {
        question: "What does LOL stands for?",
        answer: "Laugh Out Loud",
        time: 7
      },
      {
        question: "Right or Wrong?",
        answer: "wrong",
        time: 5
      }
    ]
  },
  {
    type: "Imposter Emoji",
    component: ce,
    props: [
      {
        width: 3,
        time: [8, 3, 15]
      },
      {
        width: 4,
        time: [10, 3, 10]
      },
      {
        width: 4,
        time: [5, 3, 10]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: de,
    props: [
      {
        target: 3,
        times: [10, 30],
        speed_factor: 0.5
      },
      {
        target: 5,
        times: [5, 30],
        speed_factor: 1
      },
      {
        target: 8,
        times: [5, 30],
        speed_factor: 0.8
      }
    ]
  },
  {
    type: "select-pin",
    component: Ne,
    props: [
      {
        digit: 1,
        time: [10, 30]
      },
      {
        digit: 2,
        time: [5, 60]
      },
      {
        digit: 2,
        time: [5, 30]
      }
    ]
  },
  {
    type: "quiz",
    component: H,
    props: [
      {
        question: "Deocode this message from Base64 encoding: SSBhbSBub3QgYSByb2JvdA==",
        answer: "I am not a robot",
        time: 30
      },
      {
        question: "Which country does this coordinate belongs too? 28.3949° 84.1240° E",
        answer: "Nepal",
        time: 30
      },
      {
        question: "Type first 15 digits of PI (3.14...)",
        answer: "3.14159265358979",
        time: 25
      }
    ]
  },
  {
    type: "math game",
    component: le,
    props: [
      {
        difficulty: "medium",
        question: "73+21=?",
        answer: 94,
        time: 10
      },
      {
        difficulty: "hard",
        question: "136+25=?",
        answer: 61,
        time: 13
      },
      {
        difficulty: "very hard",
        question: "87+49=?",
        answer: 136,
        time: 15
      }
    ]
  },
  {
    type: "remember",
    component: ue,
    props: [
      {
        width: 5,
        numbers: 8,
        order_matters: !1,
        time: [10, 3, 15]
      },
      {
        width: 5,
        numbers: 8,
        order_matters: !0,
        time: [15, 3, 20]
      },
      {
        width: 6,
        numbers: 9,
        order_matters: !0,
        time: [15, 3, 20]
      }
    ]
  },
  {
    type: "A to Z",
    component: oe,
    props: [
      {
        time: 20,
        total_light_glows: 2,
        reverse: !1
      },
      {
        time: 25,
        total_light_glows: 3,
        reverse: !0
      },
      {
        time: 20,
        total_light_glows: 3,
        reverse: !0
      }
    ]
  },
  {
    type: "Imposter Emoji",
    component: ce,
    props: [
      {
        width: 5,
        time: [8, 3, 12]
      },
      {
        width: 6,
        time: [8, 5, 10]
      },
      {
        width: 6,
        time: [5, 5, 10]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: de,
    props: [
      {
        target: 8,
        times: [5, 20],
        speed_factor: 1
      },
      {
        target: 9,
        times: [5, 20],
        speed_factor: 1.1
      },
      {
        target: 11,
        times: [5, 22],
        speed_factor: 1
      }
    ]
  },
  // impossible begins here
  {
    type: "select-pin",
    component: Ne,
    props: [
      {
        digit: 3,
        time: [5, 20]
      },
      {
        digits: 4,
        time: [5, 20]
      },
      {
        digits: 5,
        time: [5, 20]
      }
    ]
  },
  {
    type: "quiz",
    component: H,
    props: [
      {
        question: "Can you unhash the string using MD5 hash? 474433b791d01af5c4a0e802e419014f",
        answer: "i am not a robot duhh!",
        time: 20
      },
      {
        question: "100 digits of PI?",
        answer: "You can't type that within 10 seconds",
        time: 10
      },
      {
        question: "What is the largest prime number?",
        answer: "noone knows",
        time: 10
      }
    ]
  },
  {
    type: "math game",
    component: le,
    props: [
      {
        difficulty: "medium",
        question: "73x21=?",
        answer: 1533,
        time: 8
      },
      {
        difficulty: "hard",
        question: "136x25=?",
        answer: 3400,
        time: 8
      },
      {
        difficulty: "very hard",
        question: "87x49=?",
        answer: 4263,
        time: 10
      }
    ]
  },
  {
    type: "remember",
    component: ue,
    props: [
      {
        width: 6,
        numbers: 9,
        order_matters: !0,
        time: [9, 3, 15]
      },
      {
        width: 6,
        numbers: 21,
        order_matters: !1,
        time: [10, 3, 15]
      },
      {
        width: 6,
        numbers: 21,
        order_matters: !0,
        time: [10, 3, 15]
      }
    ]
  },
  {
    type: "A to Z",
    component: oe,
    props: [
      {
        time: 10,
        total_light_glows: 0,
        reverse: !1
      },
      {
        time: 15,
        total_light_glows: 0,
        reverse: !0
      },
      {
        time: 15,
        total_light_glows: 2,
        reverse: !1
      }
    ]
  },
  {
    type: "Imposter Emoji",
    component: ce,
    props: [
      {
        width: 6,
        time: [5, 5, 5]
      },
      {
        width: 7,
        time: [5, 5, 5]
      },
      {
        width: 7,
        time: [4, 5, 4]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: de,
    props: [
      {
        target: 12,
        times: [5, 15],
        speed_factor: 0.9
      },
      {
        target: 15,
        times: [5, 20],
        speed_factor: 1
      },
      {
        target: 16,
        times: [5, 20],
        speed_factor: 1.1
      }
    ]
  }
].slice(0, 1);
function Pe(e, n, r) {
  const c = B.length;
  let [s, i] = [void 0, void 0];
  return r === "random" ? (s = Math.floor(Math.random() * c), i = Math.floor(Math.random() * 3)) : r === "ladder" && (typeof n > "u" || typeof e > "u" ? [s, i] = [0, 0] : (i = n == 2 ? 0 : n + 1, s = n == 2 ? e + 1 : e)), [s, i];
}
const dr = ({ index: e, difficulty: n, onFail: r, onSuccess: c }) => {
  const s = B[e].component, i = B[e].props[n];
  return /* @__PURE__ */ t.jsx(s, { ...i, onSuccess: c, onFail: r });
};
function mr({
  difficulty: e = "ladder",
  questions: n = -1,
  tries: r = 1,
  on_complete: c
}) {
  const [s, i] = k({
    state: "initial",
    questions: n,
    try: r,
    index: void 0,
    difficulty: void 0
  }), [o, d] = k(null), l = L(1), y = () => {
    if (s.state !== "initial")
      return;
    let [g, h] = Pe(
      s.index,
      s.difficulty,
      e
    );
    i((m) => ({
      ...m,
      state: m.state === "initial" ? "progress" : m,
      questions: m.questions - 1,
      try: m.try - 1,
      index: g,
      difficulty: h
    }));
  }, u = ({ score: g, message: h }) => {
    if (e === "ladder" && s.index === B.length - 1 && s.difficulty === 2 && s.try == 0 && i((m) => ({
      ...m,
      state: "error"
    })), s.questions === 0 && s.try === 0) {
      i((m) => ({
        ...m,
        state: "error"
      }));
      return;
    }
    if (s.try === 0) {
      d({
        score: g,
        message: h,
        type: "failure",
        option: "next"
      });
      return;
    }
    d({
      score: g,
      message: h,
      type: "failure",
      option: "retry"
    });
  }, f = () => {
    i((g) => ({
      ...g,
      try: g.try - 1
    })), l.current = Date.now(), d(null);
  }, p = () => {
    const [g, h] = Pe(
      s.index,
      s.difficulty,
      e
    );
    i((m) => ({
      ...m,
      try: r - 1,
      index: g,
      questions: m.questions - 1,
      difficulty: h
    })), d(null), l.current += 1;
  }, w = ({ score: g, message: h }) => {
    if (s.index === B.length - 1 && s.difficulty === 2) {
      c?.({
        score: s.score,
        message: "You completed all the challenge."
      }), i((m) => ({ ...m, state: "success" }));
      return;
    }
    d({
      score: g,
      message: h,
      type: "success",
      option: "next"
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: M.captcha__wrapper, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: M.captcha__btn,
        onClick: y,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: M.captcha__btn__main, children: [
            s.state === "initial" && /* @__PURE__ */ t.jsx("div", { className: M.captcha__unchecked }),
            s.state === "success" && /* @__PURE__ */ t.jsx(Je, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            s.state === "error" && /* @__PURE__ */ t.jsx(
              Ke,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            s.state === "progress" && /* @__PURE__ */ t.jsx(vt, {}),
            /* @__PURE__ */ t.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: M.captcha__btn__footer, children: /* @__PURE__ */ t.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ t.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    s.state === "progress" && /* @__PURE__ */ t.jsxs("div", { className: M.captcha__content, children: [
      /* @__PURE__ */ t.jsx(
        dr,
        {
          index: s.index,
          difficulty: s.difficulty,
          onFail: u,
          onSuccess: w
        },
        l.current
      ),
      o && /* @__PURE__ */ t.jsx("div", { className: M.captcha__failed, children: /* @__PURE__ */ t.jsxs("div", { className: M.captcha__failed__content, children: [
        o.type === "failure" ? /* @__PURE__ */ t.jsx(ot, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ t.jsx(ct, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ t.jsx("p", { children: o.message }),
        o.option === "retry" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: f, children: /* @__PURE__ */ t.jsx(lt, { size: "32px" }) }),
        o.option === "next" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: p, children: /* @__PURE__ */ t.jsx(it, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  mr as Captcha
};
