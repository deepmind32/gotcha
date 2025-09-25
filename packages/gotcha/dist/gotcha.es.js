import S, { useState as k, useEffect as A, useRef as L } from "react";
import './index.css';var H = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function De() {
  if (we) return W;
  we = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(o, c, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), c.key !== void 0 && (i = "" + c.key), "key" in c) {
      s = {};
      for (var d in c)
        d !== "key" && (s[d] = c[d]);
    } else s = c;
    return c = s.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: c !== void 0 ? c : null,
      props: s
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
var ye;
function Ze() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === $e ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case p:
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
          case E:
            return "Portal";
          case R:
            return (a.displayName || "Context") + ".Provider";
          case v:
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
        var w = _.error, b = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), n(a);
      }
    }
    function o(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === _e)
        return "<...>";
      try {
        var _ = e(a);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var a = te.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(a) {
      if (me.call(a, "key")) {
        var _ = Object.getOwnPropertyDescriptor(a, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, _) {
      function w() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: w,
        configurable: !0
      });
    }
    function l() {
      var a = e(this.type);
      return fe[a] || (fe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function y(a, _, w, b, M, O, ne, se) {
      return w = O.ref, a = {
        $$typeof: x,
        type: a,
        key: _,
        props: O,
        _owner: M
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
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
    function u(a, _, w, b, M, O, ne, se) {
      var j = _.children;
      if (j !== void 0)
        if (b)
          if (qe(j)) {
            for (b = 0; b < j.length; b++)
              h(j[b]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(j);
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
      if (j = null, w !== void 0 && (r(w), j = "" + w), i(_) && (r(_.key), j = "" + _.key), "key" in _) {
        w = {};
        for (var ae in _)
          ae !== "key" && (w[ae] = _[ae]);
      } else w = _;
      return j && d(
        w,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), y(
        a,
        j,
        O,
        M,
        c(),
        w,
        ne,
        se
      );
    }
    function h(a) {
      typeof a == "object" && a !== null && a.$$typeof === x && a._store && (a._store.validated = 1);
    }
    var f = S, x = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), R = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ze = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), te = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, qe = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var he, fe = {}, pe = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), ge = re(o(s)), ve = {};
    V.Fragment = g, V.jsx = function(a, _, w, b, M) {
      var O = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        _,
        w,
        !1,
        b,
        M,
        O ? Error("react-stack-top-frame") : pe,
        O ? re(o(a)) : ge
      );
    }, V.jsxs = function(a, _, w, b, M) {
      var O = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        _,
        w,
        !0,
        b,
        M,
        O ? Error("react-stack-top-frame") : pe,
        O ? re(o(a)) : ge
      );
    };
  })()), V;
}
var xe;
function We() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? H.exports = De() : H.exports = Ze()), H.exports;
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
  var r = He(e, n), o, c;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (c = 0; c < s.length; c++)
      o = s[c], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
  }
  return r;
}
function He(e, n) {
  if (e == null) return {};
  var r = {};
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      if (n.indexOf(o) >= 0) continue;
      r[o] = e[o];
    }
  return r;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, X.apply(this, arguments);
}
function je(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function ee(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? je(Object(r), !0).forEach(function(o) {
      Ye(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Ye(e, n, r) {
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
    var o = r.call(e, n);
    if (typeof o != "object") return o;
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
      attr: o,
      size: c,
      title: s
    } = e, i = Be(e, Ve), d = c || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ S.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, o, i, {
      className: l,
      style: ee(ee({
        color: e.color || r.color
      }, r.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ S.createElement("title", null, s), e.children);
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
function ut(e) {
  return C({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M352.7 21.04l-194.4.41L21.04 159.3l.41 194.4L159.3 491l194.4-.4L491 352.7l-.4-194.4L352.7 21.04zm-8 19.66l126.2 125.7.4 178.3-123.1 123.6-2.6 2.6-178.3.4L41.08 345.6l-.38-178.3L166.4 41.08l178.3-.38zm-7.5 18.01l-163.3.34L58.71 174.8l.34 163.3L174.8 453.3l163.3-.3 115.2-115.8-.3-163.3L337.2 58.71zM108.4 210.4c5.3 0 10.8.5 16.4 1.3 5.7.8 11.5 2 17.5 3.6v20.5c-5.3-2.4-10.5-4.2-15.6-5.4-5.1-1.2-9.9-1.8-14.4-1.8-6 0-10.4.8-13.25 2.5-2.87 1.6-4.3 4.2-4.3 7.7 0 2.6.96 4.6 2.87 6.1 1.95 1.4 5.48 2.7 10.58 3.7l10.6 2.1c10.8 2.2 18.5 5.5 23.1 9.9 4.5 4.5 6.8 10.8 6.8 18.9 0 10.7-3.2 18.7-9.5 24-6.4 5.2-16.1 7.8-29.2 7.8-6.1 0-12.3-.6-18.51-1.8-6.2-1.1-12.41-2.9-18.61-5.2v-21.1c6.2 3.3 12.19 5.8 17.96 7.5 5.82 1.6 11.46 2.4 16.76 2.4 5.5 0 9.7-.9 12.6-2.7 2.9-1.8 4.4-4.4 4.4-7.8 0-3.1-1-5.4-3-7.1-2-1.6-5.9-3.1-11.8-4.4l-9.7-2.1c-9.73-2.1-16.85-5.4-21.37-10-4.47-4.5-6.7-10.7-6.7-18.4 0-9.7 3.12-17.1 9.37-22.3 6.25-5.3 15.24-7.9 27-7.9zm187.7 0c15.6 0 27.8 4.5 36.7 13.5 8.9 8.9 13.3 21.2 13.3 37 0 15.7-4.4 28-13.3 37-8.9 8.9-21.1 13.4-36.7 13.4-15.6 0-27.8-4.5-36.7-13.4-8.9-9-13.3-21.3-13.3-37 0-15.8 4.4-28.1 13.3-37 8.9-9 21.1-13.5 36.7-13.5zm-141.9 1.8h89.6v18.9h-32.2v78.3h-25.1v-78.3h-32.3v-18.9zm205.8 0h41.6c12.3 0 21.8 2.8 28.4 8.3 6.7 5.4 10 13.2 10 23.4s-3.3 18.1-10 23.6c-6.6 5.4-16.1 8.2-28.4 8.2H385v33.7h-25v-97.2zm-63.9 16.4c-7.7 0-13.6 2.8-17.8 8.5-4.2 5.6-6.3 13.6-6.3 23.8 0 10.2 2.1 18.1 6.3 23.8 4.2 5.6 10.1 8.4 17.8 8.4 7.7 0 13.6-2.8 17.8-8.4 4.2-5.7 6.3-13.6 6.3-23.8 0-10.2-2.1-18.2-6.3-23.8-4.2-5.7-10.1-8.5-17.8-8.5zm88.9 1.8v27.1h13.9c4.9 0 8.6-1.2 11.3-3.5 2.6-2.4 3.9-5.8 3.9-10.1s-1.3-7.7-3.9-10c-2.7-2.4-6.4-3.5-11.3-3.5H385z" }, child: [] }] })(e);
}
const dt = "_captcha__wrapper_4k6ae_5", _t = "_buttons_4k6ae_59", mt = "_captcha__failed_4k6ae_109", ht = "_captcha__failed__content_4k6ae_139", ft = "_captcha__btn_4k6ae_167", pt = "_captcha__btn__main_4k6ae_199", gt = "_captcha__btn__footer_4k6ae_223", vt = "_captcha__unchecked_4k6ae_233", wt = "_captcha__content_4k6ae_249", P = {
  captcha__wrapper: dt,
  buttons: _t,
  captcha__failed: mt,
  captcha__failed__content: ht,
  captcha__btn: ft,
  captcha__btn__main: pt,
  captcha__btn__footer: gt,
  captcha__unchecked: vt,
  captcha__content: wt
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
function yt() {
  const [e, n] = k(7);
  A(() => {
    const o = setInterval(() => {
      n((c) => (c + 1) % ke.length);
    }, 100);
    return () => {
      clearInterval(o);
    };
  }, []);
  const r = ke[e];
  return /* @__PURE__ */ t.jsx(r, { style: { margin: -8 }, size: 46 });
}
const xt = "_timer__wrapper_17tk4_1", ie = {
  timer__wrapper: xt,
  "timer--last": "_timer--last_17tk4_33"
};
function bt(e) {
  return e < 10;
}
function z({ start: e = 60, on_time_finished: n, on_change: r }) {
  const [o, c] = k(e), s = L(e);
  return A(() => {
    if (o <= 0) {
      n?.();
      return;
    }
    const i = setTimeout(() => {
      c((d) => d - 1), s.current -= 1, r?.(s.current);
    }, 1e3);
    return () => clearTimeout(i);
  }, [o]), A(() => {
    c(e);
  }, [e]), /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `${ie.timer__wrapper} ${bt(o) ? ie["timer--last"] : ie["timer--normal"]}`,
      children: /* @__PURE__ */ t.jsx("span", { children: o })
    }
  );
}
const jt = "_main_1ex2e_1", kt = {
  main: jt
}, Ct = "_button_u3ipf_1", Et = {
  button: Ct
};
function q({ children: e, className: n, ...r }) {
  return /* @__PURE__ */ t.jsx("button", { className: `${Et.button} ${n ?? ""}`, ...r, children: e });
}
function Y({
  question: e,
  answer: n,
  time: r = 100,
  onSuccess: o,
  onFail: c
}) {
  const s = L(null), i = () => {
    d && c({
      score: 0,
      message: "Looks like you are not a human"
    });
  }, [d, l] = k(!0), y = () => {
    if (!s.current || !d)
      return;
    s.current.value.toLocaleLowerCase() === n.toLocaleLowerCase() ? o({
      score: 1,
      message: "How did you get that?"
    }) : c({
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
      /* @__PURE__ */ t.jsx(z, { start: r, on_time_finished: i })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: kt.main, children: [
      /* @__PURE__ */ t.jsxs("p", { children: [
        /* @__PURE__ */ t.jsx("span", { children: "Q:" }),
        " ",
        e
      ] }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: s,
          placeholder: "Answer",
          autoComplete: "false"
        }
      ),
      /* @__PURE__ */ t.jsx(q, { onClick: y, children: "Submit" })
    ] })
  ] });
}
const Nt = "_alphabet_showcase_e7eh5_1", Rt = "_alphabet_input_e7eh5_41", Ot = "_light_e7eh5_79", G = {
  alphabet_showcase: Nt,
  alphabet_input: Rt,
  light: Ot,
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
  onSuccess: o,
  onFail: c
}) {
  const [s, i] = k({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [d, l] = k(n), y = L(null);
  let u = Ce;
  e && (u = [...Ce].reverse()), A(() => {
    y.current.focus();
    const g = Array(r).fill(null).map((m) => ({
      time: Math.floor(Math.random() * (n - 1)),
      duration: Math.floor(Math.random() * n * 100)
    }));
    i((m) => ({ ...m, lights: g }));
  }, []);
  const h = () => {
    s.active && c({
      score: 0,
      message: "My brother could type it faster."
    }), i((g) => ({ ...g, active: !1 }));
  }, f = (g) => {
    if (!s.active)
      return;
    const m = g.key;
    s.glow && (o({
      score: 0,
      message: "Told you. Don't type while the light is glowing"
    }), i((p) => ({ ...p, active: !1 }))), m === u[s.index + 1] ? (m === u.at(-1) && (o({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), i((p) => ({ ...p, active: !1 }))), i((p) => ({ ...p, index: p.index + 1 }))) : c({
      score: (s.index + 1) / 26,
      message: "You are the typo master"
    });
  }, x = () => {
    y.current.value = "";
  }, E = (g) => {
    l(g);
  };
  return A(() => {
    let g;
    if (s.lights) {
      const m = s.lights.map((R) => R.time), p = s.lights.map((R) => R.duration), v = m.indexOf(d);
      v !== -1 && (i((R) => ({ ...R, glow: !0 })), g = setTimeout(() => {
        i((R) => ({ ...R, glow: !1 }));
      }, p[v]));
    }
    return () => g && clearTimeout(g);
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
          on_time_finished: h,
          on_change: E
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      r >= 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `${G.light} ${s.glow ? G["light--active"] : ""}`
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: G.alphabet_showcase, children: s.index >= 0 && u.slice(0, s.index + 1).map((g) => /* @__PURE__ */ t.jsx("span", { children: g }, g)) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: y,
          onKeyDown: f,
          onKeyUp: x,
          className: G.alphabet_input
        }
      )
    ] })
  ] });
}
function I(e, n, r = 1) {
  const c = e, s = [];
  let i = 0;
  for (; i < c; )
    s.push(i), i += r;
  return s;
}
function Se(e) {
  const n = [...e];
  for (let r = n.length - 1; r > 0; r--) {
    const o = Math.floor(Math.random() * (r + 1));
    [n[r], n[o]] = [n[o], n[r]];
  }
  return n;
}
function Q(e, n) {
  return Se(e).slice(0, n);
}
const Pt = "_main_wz9d7_1", Tt = "_instruction_wz9d7_9", Mt = "_emoji_display_wz9d7_27", F = {
  main: Pt,
  instruction: Tt,
  emoji_display: Mt,
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
  onFail: o
}) {
  const [c, s] = k({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [i, d] = k(
    Q(I(U.length), e)
  ), l = () => {
    if (c.stage === 0)
      s((u) => ({
        ...u,
        correct_indexes: i,
        stage: 1,
        instruction: "Do you know you can't lick your elbow?"
      }));
    else if (c.stage === 1) {
      s((f) => ({
        ...f,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let u = Q(
        I(U.length),
        e * (e - 1)
      );
      for (; u.some((f) => c.correct_indexes.includes(f)); )
        u = Q(
          I(U.length),
          e * (e - 1)
        );
      const h = Se([...i, ...u]);
      d(h);
    } else c.stage == 2 && c.active && (o({
      score: c.score / e,
      message: "Time and tides waits for none"
    }), s((u) => ({ ...u, active: !1 })));
  }, y = (u) => {
    if (!(c.stage !== 2 || !c.active))
      if (c.correct_indexes.includes(u)) {
        if (c.score === e - 1) {
          r({
            score: 1,
            message: "Are you a memory king?"
          }), s((h) => ({
            ...h,
            active: !1,
            user_clicked: [...h.user_clicked, u]
          }));
          return;
        }
        s((h) => ({
          ...h,
          score: h.score + 1,
          user_clicked: [...h.user_clicked, u]
        }));
      } else
        s((h) => ({
          ...h,
          user_clicked: [...h.user_clicked, u],
          active: !1
        })), o({
          score: c.score / e,
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
          start: n[c?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: F.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: F.instruction, children: c.instruction }),
      c.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: F.emoji_display,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: i.map((u, h) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: y.bind(null, u),
              className: c.user_clicked.includes(u) ? F["button--correct"] : "",
              children: /* @__PURE__ */ t.jsx("span", { children: U[u] })
            },
            h
          ))
        }
      )
    ] })
  ] });
}
const St = "_question_2wb7v_1", At = "_horizontal_flipped_2wb7v_15", Lt = "_vertical_flipped_2wb7v_23", zt = "_both_flipped_2wb7v_31", $t = "_input__wrapper_2wb7v_39", qt = "_input_2wb7v_39", J = {
  question: St,
  horizontal_flipped: At,
  vertical_flipped: Lt,
  both_flipped: zt,
  input__wrapper: $t,
  input: qt
}, It = {
  easy: "normal",
  medium: "horizontal_flipped",
  hard: "vertical_flipped",
  "very hard": "both_flipped"
};
function le({
  difficulty: e = "easy",
  time: n = 10,
  question: r,
  answer: o,
  onFail: c,
  onSuccess: s
}) {
  const [i, d] = k({
    active: !0
  }), l = L(null), y = () => {
    if (!i.active)
      return;
    const f = +l.current.value;
    c(f === o ? {
      score: 0.5,
      message: "You were right but hey, time and tide waits for none."
    } : {
      score: 0.5,
      message: "My two year brother solves the question faster than you."
    }), d((x) => ({ ...x, active: !1 }));
  };
  A(() => {
    l.current && l.current.focus();
  }, [e]);
  const u = () => {
    if (!i.active)
      return;
    +l.current.value === o ? s({
      score: 1,
      message: "Didn't expect you to win. Wait for another challenge."
    }) : c({
      score: 0,
      message: "I have not encountered any human who couldn't solve this simple math."
    }), d((x) => ({ ...x, active: !1 }));
  }, h = (f) => {
    f.key === "Enter" && u();
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
      /* @__PURE__ */ t.jsx("p", { className: `${J.question} ${J[It[e]]}`, children: r }),
      /* @__PURE__ */ t.jsxs("div", { className: J.input__wrapper, children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "number",
            ref: l,
            onKeyDown: h,
            className: J.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ t.jsx(q, { onClick: u, children: "Submit" })
      ] })
    ] })
  ] });
}
const Dt = "_main_1kxxm_1", Zt = "_instruction_1kxxm_9", Wt = "_pattern_grid_1kxxm_23", K = {
  main: Dt,
  instruction: Zt,
  pattern_grid: Wt,
  "button--correct": "_button--correct_1kxxm_57"
};
function ue({
  width: e = 3,
  numbers: n = 4,
  order_matters: r = !0,
  time: o = [5, 3, 15],
  onSuccess: c,
  onFail: s
}) {
  const [i, d] = k({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: Q(I(e * e), n),
    clicked: []
  }), l = () => {
    i.stage === 0 ? d((u) => ({
      ...u,
      stage: 1,
      instruction: "Do you know you cannot laugh while your nose are closed?"
    })) : i.stage === 1 ? d((u) => ({
      ...u,
      stage: 2,
      instruction: r ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : i.stage === 2 && i.active && (d((u) => ({
      ...u,
      active: !1
    })), s({
      score: i.clicked.length,
      message: "Better care about your time at next round"
    }));
  }, y = (u) => {
    if (!i.active || i.stage !== 2)
      return;
    const h = Math.max(0, i.clicked.length);
    if (i.correct[h] === u || !r && i.correct.includes(u)) {
      if (i.clicked.length === n - 1) {
        d((f) => ({ ...f, active: !1 })), c({
          score: 1,
          message: "Didn't knew you were that sharp"
        });
        return;
      }
      d((f) => ({ ...f, clicked: [...f.clicked, u] }));
    } else
      d((f) => ({ ...f, active: !1 })), s({
        score: i.clicked.length / n,
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
          start: o[i?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: K.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: K.instruction, children: i.instruction }),
      i.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: K.pattern_grid,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: I(e * e).map((u) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: y.bind(null, u),
              className: (i.clicked.includes(u) || i.stage !== 2) && i.correct.includes(u) ? K["button--correct"] : "",
              children: r && (i.clicked.includes(u) || i.stage !== 2) && i.correct.includes(u) && /* @__PURE__ */ t.jsx("span", { children: i.correct.indexOf(u) + 1 })
            },
            u
          ))
        }
      )
    ] })
  ] });
}
const Vt = "_form__pin_1kyyk_1", Bt = {
  form__pin: Vt
};
function Ee(e, n) {
  const r = I(n).map((o) => e.current[o].value);
  return r.map((o) => o.length > 0).every(Boolean) ? r.reduce((o, c) => `${o}${c}`) : !1;
}
function Ht({ digits: e = 4, onChange: n }) {
  const r = L([]), o = (s, i) => {
    const d = i.target.value;
    s <= 2 && d.length === 1 && r.current[s + 1].focus();
    const l = Ee(r, e);
    n(l || void 0);
  }, c = (s, i) => {
    const d = i.target.value;
    d.length > 0 && i.key === "Backspace" ? (r.current[s].value = null, Ee(r, e) || n(void 0)) : s !== 0 && (i.key === "Backspace" || i.key === "ArrowLeft") ? r.current[s - 1].focus() : s !== e - 1 && i.key === "ArrowRight" ? r.current[s + 1].focus() : d.length === 1 && i.key.length == 1 && !i.ctrlKey && !i.metaKey && (r.current[s].value = String(i.key), i.preventDefault(), s < e - 1 && r.current[s + 1].focus());
  };
  return /* @__PURE__ */ t.jsx("div", { className: Bt.form__pin, children: [0, 1, 2, 3].map((s) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: o.bind(null, s),
      onKeyDown: c.bind(null, s),
      ref: (i) => r.current[s] = i
    },
    s
  )) });
}
const Yt = "_form__pin__wrapper_r131o_1", Gt = "_form__btn__wrapper_r131o_13", Ft = "_enter_pin_r131o_29", T = {
  form__pin__wrapper: Yt,
  form__btn__wrapper: Gt,
  enter_pin: Ft
};
function Ne({
  digit: e = 4,
  time: n = [10, 30],
  onFail: r,
  onSuccess: o
}) {
  const [c, s] = k(void 0), [i, d] = k("enter-pin"), [l, y] = k("0000"), u = L(!1), h = () => {
    u.current || r({
      score: 0,
      message: "A turtle is faster than you"
    });
  }, f = (m) => {
    s(m);
  }, x = (m) => {
    m.preventDefault(), c && (d("verify-pin"), y(+c < Math.pow(10, e) / 2 ? "9999" : "0000"));
  }, E = (m) => {
    const p = +l + m;
    p >= 0 && p <= Math.pow(10, e) - 1 && y(String(p));
  }, g = () => {
    u.current = !0, c === l ? o({
      score: 1,
      message: "Looks like you need something little harder"
    }) : r({
      score: 0,
      message: "Looks like you are not human enough"
    });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { className: T.header, children: [
      /* @__PURE__ */ t.jsxs("div", { className: T.header__info, children: [
        /* @__PURE__ */ t.jsx("h3", { children: "PIN Challenge" }),
        i === "enter-pin" && /* @__PURE__ */ t.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        i === "verify-pin" && /* @__PURE__ */ t.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: i === "enter-pin" ? n[0] : n[1],
          on_time_finished: h
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: T.main, children: [
      i === "enter-pin" && /* @__PURE__ */ t.jsxs("form", { className: T.form, onSubmit: x, children: [
        /* @__PURE__ */ t.jsx("div", { className: T.form__pin__wrapper, children: /* @__PURE__ */ t.jsx(Ht, { digits: e, onChange: f }) }),
        /* @__PURE__ */ t.jsx("div", { className: T.form__btn__wrapper, children: /* @__PURE__ */ t.jsx(q, { type: "submit", disabled: !c, children: "Submit PIN" }) })
      ] }),
      i === "verify-pin" && /* @__PURE__ */ t.jsx("div", { className: T.form, children: /* @__PURE__ */ t.jsxs("div", { className: T.form__btn__wrapper, children: [
        /* @__PURE__ */ t.jsxs("div", { className: T.enter_pin, children: [
          /* @__PURE__ */ t.jsx(q, { onClick: E.bind(null, -1), children: "-" }),
          /* @__PURE__ */ t.jsx("span", { children: l }),
          /* @__PURE__ */ t.jsx(q, { onClick: E.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ t.jsx(q, { onClick: g, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
const Ut = "_wasd__display_1j3za_1", Jt = "_wasd__display__row_1j3za_9", Kt = "_wasd__key_1j3za_31", Qt = "_active_1j3za_57", Xt = "_wrong_1j3za_65", er = "_correct_1j3za_77", tr = "_pressed_1j3za_89", rr = "_streaks_1j3za_103", N = {
  wasd__display: Ut,
  wasd__display__row: Jt,
  wasd__key: Kt,
  active: Qt,
  wrong: Xt,
  correct: er,
  pressed: tr,
  streaks: rr
}, nr = "_streak_meter_1o9ug_1", sr = "_intermedite_1o9ug_29", ar = "_advance_1o9ug_37", ir = "_fire_big_1o9ug_1", Re = {
  streak_meter: nr,
  intermedite: sr,
  advance: ar,
  fire_big: ir
};
function or(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function cr(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function lr({
  streak: e,
  max_streak: n = void 0,
  target: r = "♾"
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: Re.streak_meter, children: [
    /* @__PURE__ */ t.jsxs("p", { className: Re[cr(e)], children: [
      or(e),
      "/",
      r
    ] }),
    typeof n < "u" && /* @__PURE__ */ t.jsxs("p", { children: [
      "Max Streak: ",
      n
    ] })
  ] });
}
function ur(e, n, r) {
  return e ? n === r ? "correct" : "wrong" : "normal";
}
function dr(e) {
  const n = ["w", "a", "s", "d"];
  let r = "";
  for (let o = 0; o < e; o++) {
    const c = Math.floor(Math.random() * n.length);
    r += n[c];
  }
  return r;
}
const Oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function _r(e) {
  return Object.keys(Oe).find((n) => Oe[n].includes(e));
}
function de({
  target: e = 5,
  times: n = [6, 30],
  speed_factor: r = 1,
  onSuccess: o,
  onFail: c
}) {
  const [s, i] = k({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), d = dr(100), l = L({
    active: !1,
    first_stage_done: !1,
    word: d,
    corrects: Array(d.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [y, u] = k(n[0]), h = () => {
    l.current.active = !0, l.current.first_stage_done = !0, u(n[1]);
  }, f = () => {
    l.current.max_streak >= e ? o({
      score: l.current.max_streak / e,
      message: "As quick as a Crane."
    }) : c({
      score: 0,
      message: "Didn't knew you were such a loser."
    });
  };
  return A(() => {
    const x = setInterval(() => {
      if (!l.current.active) return;
      if (l.current.index >= l.current.word.length) {
        l.current.active = !1, clearInterval(x);
        return;
      }
      const E = l.current.word[l.current.index];
      l.current.index += 1, i({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [E]: "active"
      });
    }, 600 * r);
    return () => clearInterval(x);
  }, [r]), A(() => {
    const x = /* @__PURE__ */ new Set(), E = (m) => {
      const p = _r(m.key);
      if (!p || x.has(m.key)) return;
      x.add(m.key);
      const v = l.current.index - 1, R = l.current.word[v], D = ur(
        l.current.active,
        p,
        R
      );
      typeof l.current.corrects[v] > "u" && (D === "correct" ? (l.current.corrects[v] = !0, l.current.streak++, l.current.max_streak = Math.max(
        l.current.max_streak,
        l.current.streak
      )) : D === "wrong" && (l.current.corrects[v] = !1, l.current.streak = 0)), i((Z) => ({ ...Z, [p]: D })), setTimeout(() => {
        i((Z) => ({ ...Z, [p]: "normal" }));
      }, 150);
    }, g = (m) => {
      x.delete(m.key);
    };
    return window.addEventListener("keydown", E), window.addEventListener("keyup", g), () => {
      window.removeEventListener("keydown", E), window.removeEventListener("keyup", g);
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
            l.current.first_stage_done ? f() : h();
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ t.jsx("div", { className: N.streaks, children: /* @__PURE__ */ t.jsx(
        lr,
        {
          max_streak: l.current.max_streak,
          streak: l.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: N.wasd__display, children: [
        /* @__PURE__ */ t.jsx("div", { className: N.wasd__display__row, children: /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `${N.wasd__key} ${N[s.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ t.jsxs("div", { className: N.wasd__display__row, children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${N.wasd__key} ${N[s.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${N.wasd__key} ${N[s.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${N.wasd__key} ${N[s.d]}`,
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
    component: Y,
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
    component: Y,
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
    component: Y,
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
    component: Y,
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
  const o = B.length;
  let [c, s] = [void 0, void 0];
  return r === "random" ? (c = Math.floor(Math.random() * o), s = Math.floor(Math.random() * 3)) : r === "ladder" && (typeof n > "u" || typeof e > "u" ? [c, s] = [0, 0] : (s = n == 2 ? 0 : n + 1, c = n == 2 ? e + 1 : e)), [c, s];
}
const mr = ({ index: e, difficulty: n, onFail: r, onSuccess: o }) => {
  const c = B[e].component, s = B[e].props[n];
  return /* @__PURE__ */ t.jsx(c, { ...s, onSuccess: o, onFail: r });
};
function fr({
  difficulty: e = "random",
  questions: n = -1,
  tries: r = 2,
  show_cancel: o = !0,
  on_complete: c
}) {
  const [s, i] = k({
    state: "initial",
    questions: n,
    try: r,
    index: void 0,
    difficulty: void 0
  }), [d, l] = k(null), y = L(1), u = () => {
    if (s.state !== "initial")
      return;
    let [m, p] = Pe(
      s.index,
      s.difficulty,
      e
    );
    i((v) => ({
      ...v,
      state: v.state === "initial" ? "progress" : v,
      questions: v.questions - 1,
      try: v.try - 1,
      index: m,
      difficulty: p
    }));
  }, h = ({ score: m, message: p }) => {
    if (e === "ladder" && s.index === B.length - 1 && s.difficulty === 2 && s.try == 0 && i((v) => ({
      ...v,
      state: "error"
    })), s.questions === 0 && s.try === 0) {
      i((v) => ({
        ...v,
        state: "error"
      }));
      return;
    }
    if (s.try === 0) {
      l({
        score: m,
        message: p,
        type: "failure",
        option: "next"
      });
      return;
    }
    l({
      score: m,
      message: p,
      type: "failure",
      option: "retry"
    });
  }, f = () => {
    i((m) => ({
      ...m,
      try: m.try - 1
    })), y.current = Date.now(), l(null);
  }, x = () => {
    const [m, p] = Pe(
      s.index,
      s.difficulty,
      e
    );
    i((v) => ({
      ...v,
      try: r - 1,
      index: m,
      questions: v.questions - 1,
      difficulty: p
    })), l(null), y.current += 1;
  }, E = ({ score: m, message: p }) => {
    if (s.index === B.length - 1 && s.difficulty === 2) {
      c?.({
        score: s.score,
        message: "You completed all the challenge."
      }), i((v) => ({ ...v, state: "success" }));
      return;
    }
    l({
      score: m,
      message: p,
      type: "success",
      option: "next"
    });
  }, g = () => {
    i((m) => ({
      ...m,
      state: "success"
    }));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: P.captcha__wrapper, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: P.captcha__btn,
        onClick: u,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: P.captcha__btn__main, children: [
            s.state === "initial" && /* @__PURE__ */ t.jsx("div", { className: P.captcha__unchecked }),
            s.state === "success" && /* @__PURE__ */ t.jsx(Je, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            s.state === "error" && /* @__PURE__ */ t.jsx(
              Ke,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            s.state === "progress" && /* @__PURE__ */ t.jsx(yt, {}),
            /* @__PURE__ */ t.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: P.captcha__btn__footer, children: /* @__PURE__ */ t.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ t.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    s.state === "progress" && /* @__PURE__ */ t.jsxs("div", { className: P.captcha__content, children: [
      /* @__PURE__ */ t.jsx(
        mr,
        {
          index: s.index,
          difficulty: s.difficulty,
          onFail: h,
          onSuccess: E
        },
        y.current
      ),
      d && /* @__PURE__ */ t.jsx("div", { className: P.captcha__failed, children: /* @__PURE__ */ t.jsxs("div", { className: P.captcha__failed__content, children: [
        d.type === "failure" ? /* @__PURE__ */ t.jsx(ot, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ t.jsx(ct, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ t.jsx("p", { children: d.message }),
        d.option === "retry" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: f, children: /* @__PURE__ */ t.jsx(lt, { size: "32px" }) }),
        d.option === "next" && /* @__PURE__ */ t.jsxs("div", { className: P.buttons, children: [
          /* @__PURE__ */ t.jsx("button", { onClick: x, children: /* @__PURE__ */ t.jsx(it, { size: "32px" }) }),
          o && /* @__PURE__ */ t.jsx("button", { onClick: g, children: /* @__PURE__ */ t.jsx(ut, { size: "32px", color: "var(--color-red)" }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  fr as Captcha
};
