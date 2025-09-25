import A, { useState as C, useEffect as L, useRef as T } from "react";
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
var ye;
function De() {
  if (ye) return W;
  ye = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function n(c, o, r) {
    var i = null;
    if (r !== void 0 && (i = "" + r), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      r = {};
      for (var d in o)
        d !== "key" && (r[d] = o[d]);
    } else r = o;
    return o = r.ref, {
      $$typeof: e,
      type: c,
      key: i,
      ref: o !== void 0 ? o : null,
      props: r
    };
  }
  return W.Fragment = s, W.jsx = n, W.jsxs = n, W;
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
var ve;
function Ze() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === $e ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case g:
          return "Fragment";
        case _:
          return "Profiler";
        case y:
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
          case N:
            return "Portal";
          case h:
            return (a.displayName || "Context") + ".Provider";
          case b:
            return (a._context.displayName || "Context") + ".Consumer";
          case D:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Le:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case _e:
            m = a._payload, a = a._init;
            try {
              return e(a(m));
            } catch {
            }
        }
      return null;
    }
    function s(a) {
      return "" + a;
    }
    function n(a) {
      try {
        s(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var v = m.error, j = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), s(a);
      }
    }
    function c(a) {
      if (a === g) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === _e)
        return "<...>";
      try {
        var m = e(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = te.A;
      return a === null ? null : a.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function i(a) {
      if (me.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, m) {
      function v() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: v,
        configurable: !0
      });
    }
    function u() {
      var a = e(this.type);
      return fe[a] || (fe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function w(a, m, v, j, M, O, ne, se) {
      return v = O.ref, a = {
        $$typeof: x,
        type: a,
        key: m,
        props: O,
        _owner: M
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
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
    function l(a, m, v, j, M, O, ne, se) {
      var k = m.children;
      if (k !== void 0)
        if (j)
          if (qe(k)) {
            for (j = 0; j < k.length; j++)
              f(k[j]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(k);
      if (me.call(m, "key")) {
        k = e(a);
        var $ = Object.keys(m).filter(function(Ie) {
          return Ie !== "key";
        });
        j = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", we[k + j] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          k,
          $,
          k
        ), we[k + j] = !0);
      }
      if (k = null, v !== void 0 && (n(v), k = "" + v), i(m) && (n(m.key), k = "" + m.key), "key" in m) {
        v = {};
        for (var ae in m)
          ae !== "key" && (v[ae] = m[ae]);
      } else v = m;
      return k && d(
        v,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), w(
        a,
        k,
        O,
        M,
        o(),
        v,
        ne,
        se
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === x && a._store && (a._store.validated = 1);
    }
    var p = A, x = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), h = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ze = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), te = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, qe = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var he, fe = {}, pe = p.react_stack_bottom_frame.bind(
      p,
      r
    )(), ge = re(c(r)), we = {};
    V.Fragment = g, V.jsx = function(a, m, v, j, M) {
      var O = 1e4 > te.recentlyCreatedOwnerStacks++;
      return l(
        a,
        m,
        v,
        !1,
        j,
        M,
        O ? Error("react-stack-top-frame") : pe,
        O ? re(c(a)) : ge
      );
    }, V.jsxs = function(a, m, v, j, M) {
      var O = 1e4 > te.recentlyCreatedOwnerStacks++;
      return l(
        a,
        m,
        v,
        !0,
        j,
        M,
        O ? Error("react-stack-top-frame") : pe,
        O ? re(c(a)) : ge
      );
    };
  })()), V;
}
var xe;
function We() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? H.exports = De() : H.exports = Ze()), H.exports;
}
var t = We(), Se = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, be = A.createContext && /* @__PURE__ */ A.createContext(Se), Ve = ["attr", "size", "title"];
function Be(e, s) {
  if (e == null) return {};
  var n = He(e, s), c, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      c = r[o], !(s.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (n[c] = e[c]);
  }
  return n;
}
function He(e, s) {
  if (e == null) return {};
  var n = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (s.indexOf(c) >= 0) continue;
      n[c] = e[c];
    }
  return n;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var n = arguments[s];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c]);
    }
    return e;
  }, X.apply(this, arguments);
}
function je(e, s) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    s && (c = c.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, c);
  }
  return n;
}
function ee(e) {
  for (var s = 1; s < arguments.length; s++) {
    var n = arguments[s] != null ? arguments[s] : {};
    s % 2 ? je(Object(n), !0).forEach(function(c) {
      Ye(e, c, n[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(n, c));
    });
  }
  return e;
}
function Ye(e, s, n) {
  return s = Ge(s), s in e ? Object.defineProperty(e, s, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[s] = n, e;
}
function Ge(e) {
  var s = Fe(e, "string");
  return typeof s == "symbol" ? s : s + "";
}
function Fe(e, s) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var c = n.call(e, s);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(e);
}
function Te(e) {
  return e && e.map((s, n) => /* @__PURE__ */ A.createElement(s.tag, ee({
    key: n
  }, s.attr), Te(s.child)));
}
function E(e) {
  return (s) => /* @__PURE__ */ A.createElement(Ue, X({
    attr: ee({}, e.attr)
  }, s), Te(e.child));
}
function Ue(e) {
  var s = (n) => {
    var {
      attr: c,
      size: o,
      title: r
    } = e, i = Be(e, Ve), d = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ A.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, c, i, {
      className: u,
      style: ee(ee({
        color: e.color || n.color
      }, n.style), e.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), r && /* @__PURE__ */ A.createElement("title", null, r), e.children);
  };
  return be !== void 0 ? /* @__PURE__ */ A.createElement(be.Consumer, null, (n) => s(n)) : s(Se);
}
function Je(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Ke(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Qe(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Xe(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function et(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function tt(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function rt(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function nt(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function st(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function at(e) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function it(e) {
  return E({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" }, child: [] }, { tag: "path", attr: { d: "m8 16 5-4-5-4zm5-4v4h2V8h-2z" }, child: [] }] })(e);
}
function ot(e) {
  return E({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ct(e) {
  return E({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function lt(e) {
  return E({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
function ut(e) {
  return E({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M352.7 21.04l-194.4.41L21.04 159.3l.41 194.4L159.3 491l194.4-.4L491 352.7l-.4-194.4L352.7 21.04zm-8 19.66l126.2 125.7.4 178.3-123.1 123.6-2.6 2.6-178.3.4L41.08 345.6l-.38-178.3L166.4 41.08l178.3-.38zm-7.5 18.01l-163.3.34L58.71 174.8l.34 163.3L174.8 453.3l163.3-.3 115.2-115.8-.3-163.3L337.2 58.71zM108.4 210.4c5.3 0 10.8.5 16.4 1.3 5.7.8 11.5 2 17.5 3.6v20.5c-5.3-2.4-10.5-4.2-15.6-5.4-5.1-1.2-9.9-1.8-14.4-1.8-6 0-10.4.8-13.25 2.5-2.87 1.6-4.3 4.2-4.3 7.7 0 2.6.96 4.6 2.87 6.1 1.95 1.4 5.48 2.7 10.58 3.7l10.6 2.1c10.8 2.2 18.5 5.5 23.1 9.9 4.5 4.5 6.8 10.8 6.8 18.9 0 10.7-3.2 18.7-9.5 24-6.4 5.2-16.1 7.8-29.2 7.8-6.1 0-12.3-.6-18.51-1.8-6.2-1.1-12.41-2.9-18.61-5.2v-21.1c6.2 3.3 12.19 5.8 17.96 7.5 5.82 1.6 11.46 2.4 16.76 2.4 5.5 0 9.7-.9 12.6-2.7 2.9-1.8 4.4-4.4 4.4-7.8 0-3.1-1-5.4-3-7.1-2-1.6-5.9-3.1-11.8-4.4l-9.7-2.1c-9.73-2.1-16.85-5.4-21.37-10-4.47-4.5-6.7-10.7-6.7-18.4 0-9.7 3.12-17.1 9.37-22.3 6.25-5.3 15.24-7.9 27-7.9zm187.7 0c15.6 0 27.8 4.5 36.7 13.5 8.9 8.9 13.3 21.2 13.3 37 0 15.7-4.4 28-13.3 37-8.9 8.9-21.1 13.4-36.7 13.4-15.6 0-27.8-4.5-36.7-13.4-8.9-9-13.3-21.3-13.3-37 0-15.8 4.4-28.1 13.3-37 8.9-9 21.1-13.5 36.7-13.5zm-141.9 1.8h89.6v18.9h-32.2v78.3h-25.1v-78.3h-32.3v-18.9zm205.8 0h41.6c12.3 0 21.8 2.8 28.4 8.3 6.7 5.4 10 13.2 10 23.4s-3.3 18.1-10 23.6c-6.6 5.4-16.1 8.2-28.4 8.2H385v33.7h-25v-97.2zm-63.9 16.4c-7.7 0-13.6 2.8-17.8 8.5-4.2 5.6-6.3 13.6-6.3 23.8 0 10.2 2.1 18.1 6.3 23.8 4.2 5.6 10.1 8.4 17.8 8.4 7.7 0 13.6-2.8 17.8-8.4 4.2-5.7 6.3-13.6 6.3-23.8 0-10.2-2.1-18.2-6.3-23.8-4.2-5.7-10.1-8.5-17.8-8.5zm88.9 1.8v27.1h13.9c4.9 0 8.6-1.2 11.3-3.5 2.6-2.4 3.9-5.8 3.9-10.1s-1.3-7.7-3.9-10c-2.7-2.4-6.4-3.5-11.3-3.5H385z" }, child: [] }] })(e);
}
const dt = "_captcha__wrapper_4k6ae_5", _t = "_buttons_4k6ae_59", mt = "_captcha__failed_4k6ae_109", ht = "_captcha__failed__content_4k6ae_139", ft = "_captcha__btn_4k6ae_167", pt = "_captcha__btn__main_4k6ae_199", gt = "_captcha__btn__footer_4k6ae_223", wt = "_captcha__unchecked_4k6ae_233", yt = "_captcha__content_4k6ae_249", P = {
  captcha__wrapper: dt,
  buttons: _t,
  captcha__failed: mt,
  captcha__failed__content: ht,
  captcha__btn: ft,
  captcha__btn__main: pt,
  captcha__btn__footer: gt,
  captcha__unchecked: wt,
  captcha__content: yt
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
  const [e, s] = C(7);
  L(() => {
    const c = setInterval(() => {
      s((o) => (o + 1) % ke.length);
    }, 100);
    return () => {
      clearInterval(c);
    };
  }, []);
  const n = ke[e];
  return /* @__PURE__ */ t.jsx(n, { style: { margin: -8 }, size: 46 });
}
const xt = "_timer__wrapper_17tk4_1", ie = {
  timer__wrapper: xt,
  "timer--last": "_timer--last_17tk4_33"
};
function bt(e) {
  return e < 10;
}
function z({ start: e = 60, on_time_finished: s, on_change: n }) {
  const [c, o] = C(e), r = T(e);
  return L(() => {
    if (c <= 0) {
      s?.();
      return;
    }
    const i = setTimeout(() => {
      o((d) => d - 1), r.current -= 1, n?.(r.current);
    }, 1e3);
    return () => clearTimeout(i);
  }, [c]), L(() => {
    o(e);
  }, [e]), /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `${ie.timer__wrapper} ${bt(c) ? ie["timer--last"] : ie["timer--normal"]}`,
      children: /* @__PURE__ */ t.jsx("span", { children: c })
    }
  );
}
const jt = "_main_1ex2e_1", kt = {
  main: jt
}, Ct = "_button_u3ipf_1", Et = {
  button: Ct
};
function q({ children: e, className: s, ...n }) {
  return /* @__PURE__ */ t.jsx("button", { className: `${Et.button} ${s ?? ""}`, ...n, children: e });
}
function Y({
  question: e,
  answer: s,
  time: n = 100,
  onSuccess: c,
  onFail: o
}) {
  const r = T(null), i = () => {
    d && o({
      score: 0,
      message: "Looks like you are not a human"
    });
  }, [d, u] = C(!0), w = () => {
    if (!r.current || !d)
      return;
    r.current.value.toLocaleLowerCase() === s.toLocaleLowerCase() ? c({
      score: 1,
      message: "How did you get that?"
    }) : o({
      score: 0,
      message: "Wasn't it obvious for a human??"
    }), u(!1);
  }, l = (f) => {
    f.key === "Enter" && w();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Quiz..." }),
        /* @__PURE__ */ t.jsx("p", { children: "Can you answer??" })
      ] }),
      /* @__PURE__ */ t.jsx(z, { start: n, on_time_finished: i })
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
          ref: r,
          placeholder: "Answer",
          autoComplete: "false",
          onKeyDown: l
        }
      ),
      /* @__PURE__ */ t.jsx(q, { onClick: w, children: "Submit" })
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
  time: s = 26,
  total_light_glows: n = 3,
  onSuccess: c,
  onFail: o
}) {
  const [r, i] = C({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [d, u] = C(s), w = T(null);
  let l = Ce;
  e && (l = [...Ce].reverse()), L(() => {
    w.current.focus();
    const g = Array(n).fill(null).map((y) => ({
      time: Math.floor(Math.random() * (s - 1)),
      duration: Math.floor(Math.random() * s * 100)
    }));
    i((y) => ({ ...y, lights: g }));
  }, []);
  const f = () => {
    r.active && o({
      score: (r.index + 1) / 26,
      message: "My brother could type it faster."
    }), i((g) => ({ ...g, active: !1 }));
  }, p = (g) => {
    if (!r.active)
      return;
    const y = g.key;
    r.glow && (o({
      score: (r.index + 1) / 26,
      message: "Told you. Don't type while the light is glowing"
    }), i((_) => ({ ..._, active: !1 }))), y === l[r.index + 1] ? (y === l.at(-1) && (c({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), i((_) => ({ ..._, active: !1 }))), i((_) => ({ ..._, index: _.index + 1 }))) : o({
      score: (r.index + 1) / 26,
      message: "You are the typo master"
    });
  }, x = () => {
    w.current.value = "";
  }, N = (g) => {
    u(g);
  };
  return L(() => {
    let g;
    if (r.lights) {
      const y = r.lights.map((h) => h.time), _ = r.lights.map((h) => h.duration), b = y.indexOf(d);
      b !== -1 && (i((h) => ({ ...h, glow: !0 })), g = setTimeout(() => {
        i((h) => ({ ...h, glow: !1 }));
      }, _[b]));
    }
    return () => g && clearTimeout(g);
  }, [d]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Type to win" }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "Write ",
          l[0],
          " to ",
          l.at(-1),
          " in given time. No backspaces. Only lowercase allowed.",
          " ",
          n >= 1 && /* @__PURE__ */ t.jsx("span", { children: "Don't write when the light is glowing" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: s,
          on_time_finished: f,
          on_change: N
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      n >= 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `${G.light} ${r.glow ? G["light--active"] : ""}`
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: G.alphabet_showcase, children: r.index >= 0 && l.slice(0, r.index + 1).map((g) => /* @__PURE__ */ t.jsx("span", { children: g }, g)) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: w,
          onKeyDown: p,
          onKeyUp: x,
          className: G.alphabet_input
        }
      )
    ] })
  ] });
}
function I(e, s, n = 1) {
  const o = e, r = [];
  let i = 0;
  for (; i < o; )
    r.push(i), i += n;
  return r;
}
function Me(e) {
  const s = [...e];
  for (let n = s.length - 1; n > 0; n--) {
    const c = Math.floor(Math.random() * (n + 1));
    [s[n], s[c]] = [s[c], s[n]];
  }
  return s;
}
function Q(e, s) {
  return Me(e).slice(0, s);
}
const Pt = "_main_wz9d7_1", St = "_instruction_wz9d7_9", Tt = "_emoji_display_wz9d7_27", F = {
  main: Pt,
  instruction: St,
  emoji_display: Tt,
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
  time: s = [5, 3, 10],
  onSuccess: n,
  onFail: c
}) {
  const [o, r] = C({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [i, d] = C(
    Q(I(U.length), e)
  ), u = () => {
    if (o.stage === 0)
      r((l) => ({
        ...l,
        correct_indexes: i,
        stage: 1,
        instruction: "Do you know you can't lick your elbow?"
      }));
    else if (o.stage === 1) {
      r((p) => ({
        ...p,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let l = Q(
        I(U.length),
        e * (e - 1)
      );
      for (; l.some((p) => o.correct_indexes.includes(p)); )
        l = Q(
          I(U.length),
          e * (e - 1)
        );
      const f = Me([...i, ...l]);
      d(f);
    } else o.stage == 2 && o.active && (c({
      score: o.score / e,
      message: "Time and tides waits for none"
    }), r((l) => ({ ...l, active: !1 })));
  }, w = (l) => {
    if (!(o.stage !== 2 || !o.active))
      if (o.correct_indexes.includes(l)) {
        if (o.score === e - 1) {
          n({
            score: 1,
            message: "Are you a memory king?"
          }), r((f) => ({
            ...f,
            active: !1,
            user_clicked: [...f.user_clicked, l]
          }));
          return;
        }
        r((f) => ({
          ...f,
          score: f.score + 1,
          user_clicked: [...f.user_clicked, l]
        }));
      } else
        r((f) => ({
          ...f,
          user_clicked: [...f.user_clicked, l],
          active: !1
        })), c({
          score: o.score / e,
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
            s[0],
            " seconds"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: s[o?.stage ?? 0],
          on_time_finished: u
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: F.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: F.instruction, children: o.instruction }),
      o.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: F.emoji_display,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: i.map((l, f) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: w.bind(null, l),
              className: o.user_clicked.includes(l) ? F["button--correct"] : "",
              children: /* @__PURE__ */ t.jsx("span", { children: U[l] })
            },
            f
          ))
        }
      )
    ] })
  ] });
}
const Mt = "_question_2wb7v_1", At = "_horizontal_flipped_2wb7v_15", Lt = "_vertical_flipped_2wb7v_23", zt = "_both_flipped_2wb7v_31", $t = "_input__wrapper_2wb7v_39", qt = "_input_2wb7v_39", J = {
  question: Mt,
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
  time: s = 10,
  question: n,
  answer: c,
  onFail: o,
  onSuccess: r
}) {
  const [i, d] = C({
    active: !0
  }), u = T(null), w = () => {
    if (!i.active)
      return;
    const p = +u.current.value;
    o(p === c ? {
      score: 0.5,
      message: "You were right but hey, time and tide waits for none."
    } : {
      score: 0.5,
      message: "My two year brother solves the question faster than you."
    }), d((x) => ({ ...x, active: !1 }));
  };
  L(() => {
    u.current && u.current.focus();
  }, [e]);
  const l = () => {
    if (!i.active)
      return;
    +u.current.value === c ? r({
      score: 1,
      message: "Didn't expect you to win. Wait for another challenge."
    }) : o({
      score: 0,
      message: "I have not encountered any human who couldn't solve this simple math."
    }), d((x) => ({ ...x, active: !1 }));
  }, f = (p) => {
    p.key === "Enter" && l();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Solve this simple maths" }),
        /* @__PURE__ */ t.jsx("p", { children: "Watch out for the time." })
      ] }),
      /* @__PURE__ */ t.jsx(z, { start: s, on_time_finished: w })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      /* @__PURE__ */ t.jsx("p", { className: `${J.question} ${J[It[e]]}`, children: n }),
      /* @__PURE__ */ t.jsxs("div", { className: J.input__wrapper, children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "number",
            ref: u,
            onKeyDown: f,
            className: J.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ t.jsx(q, { onClick: l, children: "Submit" })
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
  numbers: s = 4,
  order_matters: n = !0,
  time: c = [5, 3, 15],
  onSuccess: o,
  onFail: r
}) {
  const [i, d] = C({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: Q(I(e * e), s),
    clicked: []
  }), u = () => {
    i.stage === 0 ? d((l) => ({
      ...l,
      stage: 1,
      instruction: "Do you know you cannot laugh while your nose are closed?"
    })) : i.stage === 1 ? d((l) => ({
      ...l,
      stage: 2,
      instruction: n ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : i.stage === 2 && i.active && (d((l) => ({
      ...l,
      active: !1
    })), r({
      score: i.clicked.length,
      message: "Better care about your time at next round"
    }));
  }, w = (l) => {
    if (!i.active || i.stage !== 2)
      return;
    const f = Math.max(0, i.clicked.length);
    if (i.correct[f] === l || !n && i.correct.includes(l)) {
      if (i.clicked.length === s - 1) {
        d((p) => ({ ...p, active: !1 })), o({
          score: 1,
          message: "Didn't knew you were that sharp"
        });
        return;
      }
      d((p) => ({ ...p, clicked: [...p.clicked, l] }));
    } else
      d((p) => ({ ...p, active: !1 })), r({
        score: i.clicked.length / s,
        message: "Whoops! you may need to sharpen your brain"
      });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Test your brain" }),
        n && /* @__PURE__ */ t.jsx("p", { children: "Remember the number patterns and click as per the pattern later" }),
        !n && /* @__PURE__ */ t.jsx("p", { children: "Remember the number patterns and click the pattern later" })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: c[i?.stage ?? 0],
          on_time_finished: u
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
          children: I(e * e).map((l) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: w.bind(null, l),
              className: (i.clicked.includes(l) || i.stage !== 2) && i.correct.includes(l) ? K["button--correct"] : "",
              children: n && (i.clicked.includes(l) || i.stage !== 2) && i.correct.includes(l) && /* @__PURE__ */ t.jsx("span", { children: i.correct.indexOf(l) + 1 })
            },
            l
          ))
        }
      )
    ] })
  ] });
}
const Vt = "_form__pin_1kyyk_1", Bt = {
  form__pin: Vt
};
function Ee(e, s) {
  const n = I(s).map((c) => e.current[c].value);
  return n.map((c) => c.length > 0).every(Boolean) ? n.reduce((c, o) => `${c}${o}`) : !1;
}
function Ht({ digits: e = 4, onChange: s }) {
  const n = T([]), c = (r, i) => {
    const d = i.target.value;
    r <= 2 && d.length === 1 && n.current[r + 1].focus();
    const u = Ee(n, e);
    s(u || void 0);
  }, o = (r, i) => {
    const d = i.target.value;
    d.length > 0 && i.key === "Backspace" ? (n.current[r].value = null, Ee(n, e) || s(void 0)) : r !== 0 && (i.key === "Backspace" || i.key === "ArrowLeft") ? n.current[r - 1].focus() : r !== e - 1 && i.key === "ArrowRight" ? n.current[r + 1].focus() : d.length === 1 && i.key.length == 1 && !i.ctrlKey && !i.metaKey && (n.current[r].value = String(i.key), i.preventDefault(), r < e - 1 && n.current[r + 1].focus());
  };
  return /* @__PURE__ */ t.jsx("div", { className: Bt.form__pin, children: [0, 1, 2, 3].map((r) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: c.bind(null, r),
      onKeyDown: o.bind(null, r),
      ref: (i) => n.current[r] = i
    },
    r
  )) });
}
const Yt = "_form__pin__wrapper_r131o_1", Gt = "_form__btn__wrapper_r131o_13", Ft = "_enter_pin_r131o_29", S = {
  form__pin__wrapper: Yt,
  form__btn__wrapper: Gt,
  enter_pin: Ft
};
function Ne({
  digit: e = 4,
  time: s = [10, 30],
  onFail: n,
  onSuccess: c
}) {
  const [o, r] = C(void 0), [i, d] = C("enter-pin"), [u, w] = C("0000"), l = T(!1), f = () => {
    l.current || n({
      score: 0,
      message: "A turtle is faster than you"
    });
  }, p = (y) => {
    r(y);
  }, x = (y) => {
    y.preventDefault(), o && (d("verify-pin"), w(+o < Math.pow(10, e) / 2 ? "9999" : "0000"));
  }, N = (y) => {
    const _ = +u + y;
    _ >= 0 && _ <= Math.pow(10, e) - 1 && w(String(_));
  }, g = () => {
    l.current = !0, o === u ? c({
      score: 1,
      message: "Looks like you need something little harder"
    }) : n({
      score: 0,
      message: "Looks like you are not human enough"
    });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { className: S.header, children: [
      /* @__PURE__ */ t.jsxs("div", { className: S.header__info, children: [
        /* @__PURE__ */ t.jsx("h3", { children: "PIN Challenge" }),
        i === "enter-pin" && /* @__PURE__ */ t.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        i === "verify-pin" && /* @__PURE__ */ t.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          start: i === "enter-pin" ? s[0] : s[1],
          on_time_finished: f
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: S.main, children: [
      i === "enter-pin" && /* @__PURE__ */ t.jsxs("form", { className: S.form, onSubmit: x, children: [
        /* @__PURE__ */ t.jsx("div", { className: S.form__pin__wrapper, children: /* @__PURE__ */ t.jsx(Ht, { digits: e, onChange: p }) }),
        /* @__PURE__ */ t.jsx("div", { className: S.form__btn__wrapper, children: /* @__PURE__ */ t.jsx(q, { type: "submit", disabled: !o, children: "Submit PIN" }) })
      ] }),
      i === "verify-pin" && /* @__PURE__ */ t.jsx("div", { className: S.form, children: /* @__PURE__ */ t.jsxs("div", { className: S.form__btn__wrapper, children: [
        /* @__PURE__ */ t.jsxs("div", { className: S.enter_pin, children: [
          /* @__PURE__ */ t.jsx(q, { onClick: N.bind(null, -1), children: "-" }),
          /* @__PURE__ */ t.jsx("span", { children: u }),
          /* @__PURE__ */ t.jsx(q, { onClick: N.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ t.jsx(q, { onClick: g, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
const Ut = "_wasd__display_1j3za_1", Jt = "_wasd__display__row_1j3za_9", Kt = "_wasd__key_1j3za_31", Qt = "_active_1j3za_57", Xt = "_wrong_1j3za_65", er = "_correct_1j3za_77", tr = "_pressed_1j3za_89", rr = "_streaks_1j3za_103", R = {
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
  max_streak: s = void 0,
  target: n = "♾"
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: Re.streak_meter, children: [
    /* @__PURE__ */ t.jsxs("p", { className: Re[cr(e)], children: [
      or(e),
      "/",
      n
    ] }),
    typeof s < "u" && /* @__PURE__ */ t.jsxs("p", { children: [
      "Max Streak: ",
      s
    ] })
  ] });
}
function ur(e, s, n) {
  return e ? s === n ? "correct" : "wrong" : "normal";
}
function dr(e) {
  const s = ["w", "a", "s", "d"];
  let n = "";
  for (let c = 0; c < e; c++) {
    const o = Math.floor(Math.random() * s.length);
    n += s[o];
  }
  return n;
}
const Oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function _r(e) {
  return Object.keys(Oe).find((s) => Oe[s].includes(e));
}
function de({
  target: e = 5,
  times: s = [6, 30],
  speed_factor: n = 1,
  onSuccess: c,
  onFail: o
}) {
  const [r, i] = C({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), d = dr(100), u = T({
    active: !1,
    first_stage_done: !1,
    word: d,
    corrects: Array(d.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [w, l] = C(s[0]), f = () => {
    u.current.active = !0, u.current.first_stage_done = !0, l(s[1]);
  }, p = () => {
    u.current.max_streak >= e ? c({
      score: u.current.max_streak / e,
      message: "As quick as a Crane."
    }) : o({
      score: u.current.max_streak / e,
      message: "Didn't knew you were such a loser."
    });
  };
  return L(() => {
    const x = setInterval(() => {
      if (!u.current.active) return;
      if (u.current.index >= u.current.word.length) {
        u.current.active = !1, clearInterval(x);
        return;
      }
      const N = u.current.word[u.current.index];
      u.current.index += 1, i({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [N]: "active"
      });
    }, 600 * n);
    return () => clearInterval(x);
  }, [n]), L(() => {
    const x = /* @__PURE__ */ new Set(), N = (y) => {
      const _ = _r(y.key);
      if (!_ || x.has(y.key)) return;
      x.add(y.key);
      const b = u.current.index - 1, h = u.current.word[b], D = ur(
        u.current.active,
        _,
        h
      );
      typeof u.current.corrects[b] > "u" && (D === "correct" ? (u.current.corrects[b] = !0, u.current.streak++, u.current.max_streak = Math.max(
        u.current.max_streak,
        u.current.streak
      )) : D === "wrong" && (u.current.corrects[b] = !1, u.current.streak = 0)), i((Z) => ({ ...Z, [_]: D })), setTimeout(() => {
        i((Z) => ({ ...Z, [_]: "normal" }));
      }, 150);
    }, g = (y) => {
      x.delete(y.key);
    };
    return window.addEventListener("keydown", N), window.addEventListener("keyup", g), () => {
      window.removeEventListener("keydown", N), window.removeEventListener("keyup", g);
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
          start: w,
          on_time_finished: () => {
            u.current.first_stage_done ? p() : f();
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ t.jsx("div", { className: R.streaks, children: /* @__PURE__ */ t.jsx(
        lr,
        {
          max_streak: u.current.max_streak,
          streak: u.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: R.wasd__display, children: [
        /* @__PURE__ */ t.jsx("div", { className: R.wasd__display__row, children: /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `${R.wasd__key} ${R[r.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ t.jsxs("div", { className: R.wasd__display__row, children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[r.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[r.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[r.d]}`,
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
];
function Pe(e, s, n) {
  const c = B.length;
  let [o, r] = [void 0, void 0];
  return n === "random" ? (o = Math.floor(Math.random() * c), r = Math.floor(Math.random() * 3)) : n === "ladder" && (typeof s > "u" || typeof e > "u" ? [o, r] = [0, 0] : (r = s == 2 ? 0 : s + 1, o = s == 2 ? e + 1 : e)), [o, r];
}
const mr = ({ index: e, difficulty: s, onFail: n, onSuccess: c }) => {
  const o = B[e].component, r = B[e].props[s];
  return /* @__PURE__ */ t.jsx(o, { ...r, onSuccess: c, onFail: n });
};
function fr({
  difficulty: e = "random",
  questions: s = -1,
  tries: n = 1,
  show_cancel: c = !0,
  onComplete: o
}) {
  const [r, i] = C({
    state: "initial",
    questions: s,
    try: n,
    index: void 0,
    difficulty: void 0,
    score: 0
  }), [d, u] = C(null), w = T(1), l = T({
    total_games: 0,
    total_retries: 0,
    total_fail: 0,
    total_success: 0,
    total_one_shot_success: 0
  }), f = () => {
    if (r.state !== "initial")
      return;
    let [_, b] = Pe(
      r.index,
      r.difficulty,
      e
    );
    i((h) => ({
      ...h,
      state: h.state === "initial" ? "progress" : h,
      questions: h.questions - 1,
      try: h.try - 1,
      index: _,
      difficulty: b
    })), l.current = {
      ...l.current,
      total_games: 1
    };
  }, p = ({ score: _, message: b }) => {
    if (l.current = {
      ...l.current,
      total_fail: l.current.total_fail + 1
    }, e === "ladder" && r.index === B.length - 1 && r.difficulty === 2 && r.try == 0) {
      i((h) => ({
        ...h,
        state: "error",
        score: h.score + _
      })), o({
        score: r.score + _,
        record: l.current
      });
      return;
    }
    if (r.questions === 0 && r.try === 0) {
      i((h) => ({
        ...h,
        state: "error",
        score: h.score + _
      })), o({
        score: r.score + _,
        record: l.current
      });
      return;
    }
    if (r.try === 0) {
      i((h) => ({ ...h, score: h.score + _ })), u({
        score: _,
        message: b,
        type: "failure",
        option: "next"
      });
      return;
    }
    i((h) => ({ ...h, score: h.score + _ })), u({
      score: _,
      message: b,
      type: "failure",
      option: "retry"
    });
  }, x = () => {
    l.current = {
      ...l.current,
      total_retries: l.current.total_retries + 1
    }, i((_) => ({
      ..._,
      try: _.try - 1
    })), w.current = Date.now(), u(null);
  }, N = () => {
    l.current = {
      ...l.current,
      total_games: l.current.total_games + 1
    };
    const [_, b] = Pe(
      r.index,
      r.difficulty,
      e
    );
    i((h) => ({
      ...h,
      try: n - 1,
      index: _,
      questions: h.questions - 1,
      difficulty: b
    })), u(null), w.current += 1;
  }, g = ({ score: _, message: b }) => {
    if (l.current = {
      ...l.current,
      total_success: l.current.total_success + 1,
      total_one_shot_success: r.try === n - 1 ? l.current.total_one_shot_success + 1 : l.current.total_one_shot_success
    }, e === "ladder" && r.index === B.length - 1 && r.difficulty === 2) {
      o?.({
        score: r.score + _,
        message: "You completed all the challenge.",
        record: l.current
      }), i((h) => ({
        ...h,
        state: "success",
        score: h.score + _
      }));
      return;
    }
    i((h) => ({ ...h, score: r.score + _ })), u({
      score: _,
      message: b,
      type: "success",
      option: "next"
    });
  }, y = () => {
    i((_) => ({
      ..._,
      state: "success"
    })), o({
      score: r.score,
      record: l.current
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: P.captcha__wrapper, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: P.captcha__btn,
        onClick: f,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: P.captcha__btn__main, children: [
            r.state === "initial" && /* @__PURE__ */ t.jsx("div", { className: P.captcha__unchecked }),
            r.state === "success" && /* @__PURE__ */ t.jsx(Je, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r.state === "error" && /* @__PURE__ */ t.jsx(
              Ke,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            r.state === "progress" && /* @__PURE__ */ t.jsx(vt, {}),
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
    r.state === "progress" && /* @__PURE__ */ t.jsxs("div", { className: P.captcha__content, children: [
      /* @__PURE__ */ t.jsx(
        mr,
        {
          index: r.index,
          difficulty: r.difficulty,
          onFail: p,
          onSuccess: g
        },
        w.current
      ),
      d && /* @__PURE__ */ t.jsx("div", { className: P.captcha__failed, children: /* @__PURE__ */ t.jsxs("div", { className: P.captcha__failed__content, children: [
        d.type === "failure" ? /* @__PURE__ */ t.jsx(ot, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ t.jsx(ct, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ t.jsx("p", { children: d.message }),
        d.option === "retry" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: x, children: /* @__PURE__ */ t.jsx(lt, { size: "32px" }) }),
        d.option === "next" && /* @__PURE__ */ t.jsxs("div", { className: P.buttons, children: [
          /* @__PURE__ */ t.jsx("button", { onClick: N, children: /* @__PURE__ */ t.jsx(it, { size: "32px" }) }),
          c && /* @__PURE__ */ t.jsx("button", { onClick: y, children: /* @__PURE__ */ t.jsx(ut, { size: "32px", color: "var(--color-red)" }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  fr as Captcha
};
