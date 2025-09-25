import z, { useState as E, useEffect as S, useRef as A } from "react";
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
function Ze() {
  if (we) return W;
  we = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function r(c, o, i) {
    var n = null;
    if (i !== void 0 && (n = "" + i), o.key !== void 0 && (n = "" + o.key), "key" in o) {
      i = {};
      for (var _ in o)
        _ !== "key" && (i[_] = o[_]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: c,
      key: n,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return W.Fragment = s, W.jsx = r, W.jsxs = r, W;
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
function We() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === $e ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case y:
          return "Fragment";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Le:
          return "SuspenseList";
        case qe:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case R:
            return "Portal";
          case b:
            return (a.displayName || "Context") + ".Provider";
          case h:
            return (a._context.displayName || "Context") + ".Consumer";
          case f:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case ze:
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
    function r(a) {
      try {
        s(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var v = m.error, k = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), s(a);
      }
    }
    function c(a) {
      if (a === y) return "<>";
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
    function i() {
      return Error("react-stack-top-frame");
    }
    function n(a) {
      if (me.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function _(a, m) {
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
    function l() {
      var a = e(this.type);
      return fe[a] || (fe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, m, v, k, L, P, ne, se) {
      return v = P.ref, a = {
        $$typeof: j,
        type: a,
        key: m,
        props: P,
        _owner: L
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
    function u(a, m, v, k, L, P, ne, se) {
      var C = m.children;
      if (C !== void 0)
        if (k)
          if (Ie(C)) {
            for (k = 0; k < C.length; k++)
              d(C[k]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (me.call(m, "key")) {
        C = e(a);
        var I = Object.keys(m).filter(function(De) {
          return De !== "key";
        });
        k = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", ye[C + k] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          C,
          I,
          C
        ), ye[C + k] = !0);
      }
      if (C = null, v !== void 0 && (r(v), C = "" + v), n(m) && (r(m.key), C = "" + m.key), "key" in m) {
        v = {};
        for (var ae in m)
          ae !== "key" && (v[ae] = m[ae]);
      } else v = m;
      return C && _(
        v,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        C,
        P,
        L,
        o(),
        v,
        ne,
        se
      );
    }
    function d(a) {
      typeof a == "object" && a !== null && a.$$typeof === j && a._store && (a._store.validated = 1);
    }
    var p = z, j = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), b = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), qe = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), te = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, Ie = Array.isArray, re = console.createTask ? console.createTask : function() {
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
    )(), ge = re(c(i)), ye = {};
    V.Fragment = y, V.jsx = function(a, m, v, k, L) {
      var P = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        m,
        v,
        !1,
        k,
        L,
        P ? Error("react-stack-top-frame") : pe,
        P ? re(c(a)) : ge
      );
    }, V.jsxs = function(a, m, v, k, L) {
      var P = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        a,
        m,
        v,
        !0,
        k,
        L,
        P ? Error("react-stack-top-frame") : pe,
        P ? re(c(a)) : ge
      );
    };
  })()), V;
}
var xe;
function Ve() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? H.exports = Ze() : H.exports = We()), H.exports;
}
var t = Ve(), Te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, be = z.createContext && /* @__PURE__ */ z.createContext(Te), Be = ["attr", "size", "title"];
function He(e, s) {
  if (e == null) return {};
  var r = Ye(e, s), c, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      c = i[o], !(s.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (r[c] = e[c]);
  }
  return r;
}
function Ye(e, s) {
  if (e == null) return {};
  var r = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (s.indexOf(c) >= 0) continue;
      r[c] = e[c];
    }
  return r;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
    }
    return e;
  }, X.apply(this, arguments);
}
function je(e, s) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    s && (c = c.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, c);
  }
  return r;
}
function ee(e) {
  for (var s = 1; s < arguments.length; s++) {
    var r = arguments[s] != null ? arguments[s] : {};
    s % 2 ? je(Object(r), !0).forEach(function(c) {
      Ge(e, c, r[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(r, c));
    });
  }
  return e;
}
function Ge(e, s, r) {
  return s = Fe(s), s in e ? Object.defineProperty(e, s, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[s] = r, e;
}
function Fe(e) {
  var s = Ue(e, "string");
  return typeof s == "symbol" ? s : s + "";
}
function Ue(e, s) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var c = r.call(e, s);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(e);
}
function Me(e) {
  return e && e.map((s, r) => /* @__PURE__ */ z.createElement(s.tag, ee({
    key: r
  }, s.attr), Me(s.child)));
}
function N(e) {
  return (s) => /* @__PURE__ */ z.createElement(Je, X({
    attr: ee({}, e.attr)
  }, s), Me(e.child));
}
function Je(e) {
  var s = (r) => {
    var {
      attr: c,
      size: o,
      title: i
    } = e, n = He(e, Be), _ = o || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ z.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, c, n, {
      className: l,
      style: ee(ee({
        color: e.color || r.color
      }, r.style), e.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ z.createElement("title", null, i), e.children);
  };
  return be !== void 0 ? /* @__PURE__ */ z.createElement(be.Consumer, null, (r) => s(r)) : s(Te);
}
function Ke(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Qe(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Xe(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function et(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function tt(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function rt(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function nt(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function st(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function at(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function it(e) {
  return N({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function ot(e) {
  return N({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" }, child: [] }, { tag: "path", attr: { d: "m8 16 5-4-5-4zm5-4v4h2V8h-2z" }, child: [] }] })(e);
}
function ct(e) {
  return N({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function lt(e) {
  return N({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function ut(e) {
  return N({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
function dt(e) {
  return N({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M352.7 21.04l-194.4.41L21.04 159.3l.41 194.4L159.3 491l194.4-.4L491 352.7l-.4-194.4L352.7 21.04zm-8 19.66l126.2 125.7.4 178.3-123.1 123.6-2.6 2.6-178.3.4L41.08 345.6l-.38-178.3L166.4 41.08l178.3-.38zm-7.5 18.01l-163.3.34L58.71 174.8l.34 163.3L174.8 453.3l163.3-.3 115.2-115.8-.3-163.3L337.2 58.71zM108.4 210.4c5.3 0 10.8.5 16.4 1.3 5.7.8 11.5 2 17.5 3.6v20.5c-5.3-2.4-10.5-4.2-15.6-5.4-5.1-1.2-9.9-1.8-14.4-1.8-6 0-10.4.8-13.25 2.5-2.87 1.6-4.3 4.2-4.3 7.7 0 2.6.96 4.6 2.87 6.1 1.95 1.4 5.48 2.7 10.58 3.7l10.6 2.1c10.8 2.2 18.5 5.5 23.1 9.9 4.5 4.5 6.8 10.8 6.8 18.9 0 10.7-3.2 18.7-9.5 24-6.4 5.2-16.1 7.8-29.2 7.8-6.1 0-12.3-.6-18.51-1.8-6.2-1.1-12.41-2.9-18.61-5.2v-21.1c6.2 3.3 12.19 5.8 17.96 7.5 5.82 1.6 11.46 2.4 16.76 2.4 5.5 0 9.7-.9 12.6-2.7 2.9-1.8 4.4-4.4 4.4-7.8 0-3.1-1-5.4-3-7.1-2-1.6-5.9-3.1-11.8-4.4l-9.7-2.1c-9.73-2.1-16.85-5.4-21.37-10-4.47-4.5-6.7-10.7-6.7-18.4 0-9.7 3.12-17.1 9.37-22.3 6.25-5.3 15.24-7.9 27-7.9zm187.7 0c15.6 0 27.8 4.5 36.7 13.5 8.9 8.9 13.3 21.2 13.3 37 0 15.7-4.4 28-13.3 37-8.9 8.9-21.1 13.4-36.7 13.4-15.6 0-27.8-4.5-36.7-13.4-8.9-9-13.3-21.3-13.3-37 0-15.8 4.4-28.1 13.3-37 8.9-9 21.1-13.5 36.7-13.5zm-141.9 1.8h89.6v18.9h-32.2v78.3h-25.1v-78.3h-32.3v-18.9zm205.8 0h41.6c12.3 0 21.8 2.8 28.4 8.3 6.7 5.4 10 13.2 10 23.4s-3.3 18.1-10 23.6c-6.6 5.4-16.1 8.2-28.4 8.2H385v33.7h-25v-97.2zm-63.9 16.4c-7.7 0-13.6 2.8-17.8 8.5-4.2 5.6-6.3 13.6-6.3 23.8 0 10.2 2.1 18.1 6.3 23.8 4.2 5.6 10.1 8.4 17.8 8.4 7.7 0 13.6-2.8 17.8-8.4 4.2-5.7 6.3-13.6 6.3-23.8 0-10.2-2.1-18.2-6.3-23.8-4.2-5.7-10.1-8.5-17.8-8.5zm88.9 1.8v27.1h13.9c4.9 0 8.6-1.2 11.3-3.5 2.6-2.4 3.9-5.8 3.9-10.1s-1.3-7.7-3.9-10c-2.7-2.4-6.4-3.5-11.3-3.5H385z" }, child: [] }] })(e);
}
const _t = "_captcha__wrapper_69j60_5", mt = "_buttons_69j60_59", ht = "_captcha__failed_69j60_109", ft = "_captcha__failed__content_69j60_139", pt = "_captcha__btn_69j60_167", gt = "_captcha__btn__main_69j60_199", yt = "_captcha__btn__footer_69j60_223", wt = "_captcha__unchecked_69j60_233", vt = "_captcha__content_69j60_249", T = {
  captcha__wrapper: _t,
  buttons: mt,
  captcha__failed: ht,
  captcha__failed__content: ft,
  captcha__btn: pt,
  captcha__btn__main: gt,
  captcha__btn__footer: yt,
  captcha__unchecked: wt,
  captcha__content: vt
}, ke = [
  Xe,
  et,
  tt,
  rt,
  nt,
  st,
  at,
  it
];
function xt() {
  const [e, s] = E(7);
  S(() => {
    const c = setInterval(() => {
      s((o) => (o + 1) % ke.length);
    }, 100);
    return () => {
      clearInterval(c);
    };
  }, []);
  const r = ke[e];
  return /* @__PURE__ */ t.jsx(r, { style: { margin: -8 }, size: 46 });
}
const bt = "_timer__wrapper_17tk4_1", ie = {
  timer__wrapper: bt,
  "timer--last": "_timer--last_17tk4_33"
};
function jt(e) {
  return e < 10;
}
function $({ start: e = 60, on_time_finished: s, on_change: r }) {
  const [c, o] = E(e), i = A(e);
  return S(() => {
    if (c <= 0) {
      s?.();
      return;
    }
    const n = setTimeout(() => {
      o((_) => _ - 1), i.current -= 1, r?.(i.current);
    }, 1e3);
    return () => clearTimeout(n);
  }, [c]), S(() => {
    o(e);
  }, [e]), /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `${ie.timer__wrapper} ${jt(c) ? ie["timer--last"] : ie["timer--normal"]}`,
      children: /* @__PURE__ */ t.jsx("span", { children: c })
    }
  );
}
const kt = "_main_1ex2e_1", Ct = {
  main: kt
}, Et = "_button_u3ipf_1", Nt = {
  button: Et
};
function D({ children: e, className: s, ...r }) {
  return /* @__PURE__ */ t.jsx("button", { className: `${Nt.button} ${s ?? ""}`, ...r, children: e });
}
function Y({
  question: e,
  answer: s,
  time: r = 100,
  onSuccess: c,
  onFail: o
}) {
  const i = A(null);
  S(() => {
    i && i.current.focus();
  }, []);
  const [n, _] = E(!0), l = () => {
    n && (o({
      score: 0,
      message: "Looks like you are not a human"
    }), _(!1));
  }, g = () => {
    if (!i.current || !n)
      return;
    i.current.value.toLocaleLowerCase() === s.toLocaleLowerCase() ? c({
      score: 1,
      message: "How did you get that?"
    }) : o({
      score: 0,
      message: "Wasn't it obvious for a human??"
    }), _(!1);
  }, u = (d) => {
    d.key === "Enter" && n && g();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Quiz..." }),
        /* @__PURE__ */ t.jsx("p", { children: "Can you answer??" })
      ] }),
      /* @__PURE__ */ t.jsx($, { start: r, on_time_finished: l })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: Ct.main, children: [
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
          autoComplete: "false",
          onKeyDown: u
        }
      ),
      /* @__PURE__ */ t.jsx(D, { onClick: g, children: "Submit" })
    ] })
  ] });
}
const Rt = "_alphabet_showcase_e7eh5_1", Ot = "_alphabet_input_e7eh5_41", Pt = "_light_e7eh5_79", G = {
  alphabet_showcase: Rt,
  alphabet_input: Ot,
  light: Pt,
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
  total_light_glows: r = 3,
  onSuccess: c,
  onFail: o
}) {
  const [i, n] = E({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [_, l] = E(s), g = A(null);
  let u = Ce;
  e && (u = [...Ce].reverse()), S(() => {
    g.current.focus();
    const y = Array(r).fill(null).map((w) => ({
      time: Math.floor(Math.random() * (s - 1)),
      duration: Math.floor(Math.random() * s * 100)
    }));
    n((w) => ({ ...w, lights: y }));
  }, []);
  const d = () => {
    i.active && o({
      score: (i.index + 1) / 26,
      message: "My brother could type it faster."
    }), n((y) => ({ ...y, active: !1 }));
  }, p = (y) => {
    if (!i.active)
      return;
    const w = y.key;
    i.glow && (o({
      score: (i.index + 1) / 26,
      message: "Told you. Don't type while the light is glowing"
    }), n((x) => ({ ...x, active: !1 }))), w === u[i.index + 1] ? (w === u.at(-1) && (c({
      score: 1,
      message: "Didn't expect you to be that fast"
    }), n((x) => ({ ...x, active: !1 }))), n((x) => ({ ...x, index: x.index + 1 }))) : o({
      score: (i.index + 1) / 26,
      message: "You are the typo master"
    });
  }, j = () => {
    g.current.value = "";
  }, R = (y) => {
    l(y);
  };
  return S(() => {
    let y;
    if (i.lights) {
      const w = i.lights.map((b) => b.time), x = i.lights.map((b) => b.duration), h = w.indexOf(_);
      h !== -1 && (n((b) => ({ ...b, glow: !0 })), y = setTimeout(() => {
        n((b) => ({ ...b, glow: !1 }));
      }, x[h]));
    }
    return () => y && clearTimeout(y);
  }, [_]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
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
        $,
        {
          start: s,
          on_time_finished: d,
          on_change: R
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
      /* @__PURE__ */ t.jsx("div", { className: G.alphabet_showcase, children: i.index >= 0 && u.slice(0, i.index + 1).map((y) => /* @__PURE__ */ t.jsx("span", { children: y }, y)) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: g,
          onKeyDown: p,
          onKeyUp: j,
          className: G.alphabet_input
        }
      )
    ] })
  ] });
}
function q(e, s, r = 1) {
  const o = e, i = [];
  let n = 0;
  for (; n < o; )
    i.push(n), n += r;
  return i;
}
function Ae(e) {
  const s = [...e];
  for (let r = s.length - 1; r > 0; r--) {
    const c = Math.floor(Math.random() * (r + 1));
    [s[r], s[c]] = [s[c], s[r]];
  }
  return s;
}
function Q(e, s) {
  return Ae(e).slice(0, s);
}
const St = "_main_wz9d7_1", Tt = "_instruction_wz9d7_9", Mt = "_emoji_display_wz9d7_27", F = {
  main: St,
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
  time: s = [5, 3, 10],
  onSuccess: r,
  onFail: c
}) {
  const [o, i] = E({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [n, _] = E(
    Q(q(U.length), e)
  ), l = () => {
    if (o.stage === 0)
      i((u) => ({
        ...u,
        correct_indexes: n,
        stage: 1,
        instruction: "Do you know you can't lick your elbow?"
      }));
    else if (o.stage === 1) {
      i((p) => ({
        ...p,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let u = Q(
        q(U.length),
        e * (e - 1)
      );
      for (; u.some((p) => o.correct_indexes.includes(p)); )
        u = Q(
          q(U.length),
          e * (e - 1)
        );
      const d = Ae([...n, ...u]);
      _(d);
    } else o.stage == 2 && o.active && (c({
      score: o.score / e,
      message: "Time and tides waits for none"
    }), i((u) => ({ ...u, active: !1 })));
  }, g = (u) => {
    if (!(o.stage !== 2 || !o.active))
      if (o.correct_indexes.includes(u)) {
        if (o.score === e - 1) {
          r({
            score: 1,
            message: "Are you a memory king?"
          }), i((d) => ({
            ...d,
            active: !1,
            user_clicked: [...d.user_clicked, u]
          }));
          return;
        }
        i((d) => ({
          ...d,
          score: d.score + 1,
          user_clicked: [...d.user_clicked, u]
        }));
      } else
        i((d) => ({
          ...d,
          user_clicked: [...d.user_clicked, u],
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
        $,
        {
          start: s[o?.stage ?? 0],
          on_time_finished: l
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
          children: n.map((u, d) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: g.bind(null, u),
              className: o.user_clicked.includes(u) ? F["button--correct"] : "",
              children: /* @__PURE__ */ t.jsx("span", { children: U[u] })
            },
            d
          ))
        }
      )
    ] })
  ] });
}
const At = "_question_2wb7v_1", Lt = "_horizontal_flipped_2wb7v_15", zt = "_vertical_flipped_2wb7v_23", qt = "_both_flipped_2wb7v_31", $t = "_input__wrapper_2wb7v_39", It = "_input_2wb7v_39", J = {
  question: At,
  horizontal_flipped: Lt,
  vertical_flipped: zt,
  both_flipped: qt,
  input__wrapper: $t,
  input: It
}, Dt = {
  easy: "normal",
  medium: "horizontal_flipped",
  hard: "vertical_flipped",
  "very hard": "both_flipped"
};
function le({
  difficulty: e = "easy",
  time: s = 10,
  question: r,
  answer: c,
  onFail: o,
  onSuccess: i
}) {
  const [n, _] = E({
    active: !0
  }), l = A(null), g = () => {
    if (!n.active)
      return;
    const p = +l.current.value;
    o(p === c ? {
      score: 0.5,
      message: "You were right but hey, time and tide waits for none."
    } : {
      score: 0.5,
      message: "My two year brother solves the question faster than you."
    }), _((j) => ({ ...j, active: !1 }));
  };
  S(() => {
    l.current && l.current.focus();
  }, [e]);
  const u = () => {
    if (!n.active)
      return;
    +l.current.value === c ? i({
      score: 1,
      message: "Didn't expect you to win. Wait for another challenge."
    }) : o({
      score: 0,
      message: "I have not encountered any human who couldn't solve this simple math."
    }), _((j) => ({ ...j, active: !1 }));
  }, d = (p) => {
    p.key === "Enter" && u();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Solve this simple maths" }),
        /* @__PURE__ */ t.jsx("p", { children: "Watch out for the time." })
      ] }),
      /* @__PURE__ */ t.jsx($, { start: s, on_time_finished: g })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      /* @__PURE__ */ t.jsx("p", { className: `${J.question} ${J[Dt[e]]}`, children: r }),
      /* @__PURE__ */ t.jsxs("div", { className: J.input__wrapper, children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "number",
            ref: l,
            onKeyDown: d,
            className: J.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ t.jsx(D, { onClick: u, children: "Submit" })
      ] })
    ] })
  ] });
}
const Zt = "_main_2gc3q_1", Wt = "_instruction_2gc3q_9", Vt = "_pattern_grid_2gc3q_23", K = {
  main: Zt,
  instruction: Wt,
  pattern_grid: Vt,
  "button--correct": "_button--correct_2gc3q_59"
};
function ue({
  width: e = 3,
  numbers: s = 4,
  order_matters: r = !0,
  time: c = [5, 3, 15],
  onSuccess: o,
  onFail: i
}) {
  const [n, _] = E({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: Q(q(e * e), s),
    clicked: []
  }), l = () => {
    n.stage === 0 ? _((u) => ({
      ...u,
      stage: 1,
      instruction: "Do you know you cannot laugh while your nose are closed?"
    })) : n.stage === 1 ? _((u) => ({
      ...u,
      stage: 2,
      instruction: r ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : n.stage === 2 && n.active && (_((u) => ({
      ...u,
      active: !1
    })), i({
      score: n.clicked.length,
      message: "Better care about your time at next round"
    }));
  }, g = (u) => {
    if (!n.active || n.stage !== 2)
      return;
    const d = Math.max(0, n.clicked.length);
    if (n.correct[d] === u || !r && n.correct.includes(u)) {
      if (n.clicked.length === s - 1) {
        _((p) => ({ ...p, active: !1 })), o({
          score: 1,
          message: "Didn't knew you were that sharp"
        });
        return;
      }
      _((p) => ({ ...p, clicked: [...p.clicked, u] }));
    } else
      _((p) => ({ ...p, active: !1 })), i({
        score: n.clicked.length / s,
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
        $,
        {
          start: c[n?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: K.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: K.instruction, children: n.instruction }),
      n.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: K.pattern_grid,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: q(e * e).map((u) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: g.bind(null, u),
              className: (n.clicked.includes(u) || n.stage !== 2) && n.correct.includes(u) ? K["button--correct"] : "",
              children: r && (n.clicked.includes(u) || n.stage !== 2) && n.correct.includes(u) && /* @__PURE__ */ t.jsx("span", { children: n.correct.indexOf(u) + 1 })
            },
            u
          ))
        }
      )
    ] })
  ] });
}
const Bt = "_form__pin_1kyyk_1", Ht = {
  form__pin: Bt
};
function Ee(e, s) {
  const r = q(s).map((c) => e.current[c].value);
  return r.map((c) => c.length > 0).every(Boolean) ? r.reduce((c, o) => `${c}${o}`) : !1;
}
function Yt({ digits: e = 4, onChange: s }) {
  const r = A([]), c = (i, n) => {
    const _ = n.target.value;
    i < e - 1 && _.length === 1 && r.current[i + 1].focus();
    const l = Ee(r, e);
    s(l ? +l : void 0);
  }, o = (i, n) => {
    const _ = n.target.value;
    _.length > 0 && n.key === "Backspace" ? (r.current[i].value = null, Ee(r, e) || s(void 0)) : i !== 0 && (n.key === "Backspace" || n.key === "ArrowLeft") ? r.current[i - 1].focus() : i !== e - 1 && n.key === "ArrowRight" ? r.current[i + 1].focus() : _.length === 1 && n.key.length == 1 && !n.ctrlKey && !n.metaKey && (r.current[i].value = String(n.key), n.preventDefault(), i < e - 1 && r.current[i + 1].focus());
  };
  return /* @__PURE__ */ t.jsx("div", { className: Ht.form__pin, children: q(e).map((i) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: c.bind(null, i),
      onKeyDown: o.bind(null, i),
      ref: (n) => r.current[i] = n
    },
    i
  )) });
}
const Gt = "_form__pin__wrapper_r131o_1", Ft = "_form__btn__wrapper_r131o_13", Ut = "_enter_pin_r131o_29", M = {
  form__pin__wrapper: Gt,
  form__btn__wrapper: Ft,
  enter_pin: Ut
};
function Ne({
  digit: e = 4,
  time: s = [10, 30],
  onFail: r,
  onSuccess: c
}) {
  const [o, i] = E(void 0), [n, _] = E("enter-pin"), [l, g] = E(null), u = A(!1), d = () => {
    u.current || r({
      score: 0,
      message: "A turtle is faster than you"
    });
  }, p = (w) => {
    i(w);
  }, j = (w) => {
    w.preventDefault(), o && (_("verify-pin"), g(
      +o < Math.pow(10, e) / 2 ? Array(e).fill("9").join("") : Array(e).fill("0").join("")
    ));
  }, R = (w) => {
    const x = +l + w;
    x >= 0 && x <= Math.pow(10, e) - 1 && g(String(x));
  }, y = () => {
    u.current = !0, o === +l ? c({
      score: 1,
      message: "Looks like you need something little harder"
    }) : r({
      score: 0,
      message: "Looks like you are not human enough"
    });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { className: M.header, children: [
      /* @__PURE__ */ t.jsxs("div", { className: M.header__info, children: [
        /* @__PURE__ */ t.jsx("h3", { children: "PIN Challenge" }),
        n === "enter-pin" && /* @__PURE__ */ t.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        n === "verify-pin" && /* @__PURE__ */ t.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ t.jsx(
        $,
        {
          start: n === "enter-pin" ? s[0] : s[1],
          on_time_finished: d
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: M.main, children: [
      n === "enter-pin" && /* @__PURE__ */ t.jsxs("form", { className: M.form, onSubmit: j, children: [
        /* @__PURE__ */ t.jsx("div", { className: M.form__pin__wrapper, children: /* @__PURE__ */ t.jsx(Yt, { digits: e, onChange: p }) }),
        /* @__PURE__ */ t.jsx("div", { className: M.form__btn__wrapper, children: /* @__PURE__ */ t.jsx(D, { type: "submit", disabled: !o, children: "Submit PIN" }) })
      ] }),
      n === "verify-pin" && /* @__PURE__ */ t.jsx("div", { className: M.form, children: /* @__PURE__ */ t.jsxs("div", { className: M.form__btn__wrapper, children: [
        /* @__PURE__ */ t.jsxs("div", { className: M.enter_pin, children: [
          /* @__PURE__ */ t.jsx(D, { onClick: R.bind(null, -1), children: "-" }),
          /* @__PURE__ */ t.jsx("span", { children: l }),
          /* @__PURE__ */ t.jsx(D, { onClick: R.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ t.jsx(D, { onClick: y, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
const Jt = "_wasd__display_1j3za_1", Kt = "_wasd__display__row_1j3za_9", Qt = "_wasd__key_1j3za_31", Xt = "_active_1j3za_57", er = "_wrong_1j3za_65", tr = "_correct_1j3za_77", rr = "_pressed_1j3za_89", nr = "_streaks_1j3za_103", O = {
  wasd__display: Jt,
  wasd__display__row: Kt,
  wasd__key: Qt,
  active: Xt,
  wrong: er,
  correct: tr,
  pressed: rr,
  streaks: nr
}, sr = "_streak_meter_1o9ug_1", ar = "_intermedite_1o9ug_29", ir = "_advance_1o9ug_37", or = "_fire_big_1o9ug_1", Re = {
  streak_meter: sr,
  intermedite: ar,
  advance: ir,
  fire_big: or
};
function cr(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function lr(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function ur({
  streak: e,
  max_streak: s = void 0,
  target: r = "♾"
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: Re.streak_meter, children: [
    /* @__PURE__ */ t.jsxs("p", { className: Re[lr(e)], children: [
      cr(e),
      "/",
      r
    ] }),
    typeof s < "u" && /* @__PURE__ */ t.jsxs("p", { children: [
      "Max Streak: ",
      s
    ] })
  ] });
}
function dr(e, s, r) {
  return e ? s === r ? "correct" : "wrong" : "normal";
}
function _r(e) {
  const s = ["w", "a", "s", "d"];
  let r = "";
  for (let c = 0; c < e; c++) {
    const o = Math.floor(Math.random() * s.length);
    r += s[o];
  }
  return r;
}
const Oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function mr(e) {
  return Object.keys(Oe).find((s) => Oe[s].includes(e));
}
function de({
  target: e = 5,
  times: s = [6, 30],
  speed_factor: r = 1,
  onSuccess: c,
  onFail: o
}) {
  const [i, n] = E({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), _ = _r(100), l = A({
    active: !1,
    first_stage_done: !1,
    word: _,
    corrects: Array(_.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [g, u] = E(s[0]), d = () => {
    l.current.active = !0, l.current.first_stage_done = !0, u(s[1]);
  }, p = () => {
    l.current.max_streak >= e ? c({
      score: l.current.max_streak / e,
      message: "As quick as a Crane."
    }) : o({
      score: l.current.max_streak / e,
      message: "Didn't knew you were such a loser."
    });
  };
  return S(() => {
    const j = setInterval(() => {
      if (!l.current.active) return;
      if (l.current.index >= l.current.word.length) {
        l.current.active = !1, clearInterval(j);
        return;
      }
      const R = l.current.word[l.current.index];
      l.current.index += 1, n({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [R]: "active"
      });
    }, 600 * r);
    return () => clearInterval(j);
  }, [r]), S(() => {
    const j = /* @__PURE__ */ new Set(), R = (w) => {
      const x = mr(w.key);
      if (!x || j.has(w.key)) return;
      j.add(w.key);
      const h = l.current.index - 1, b = l.current.word[h], f = dr(
        l.current.active,
        x,
        b
      );
      typeof l.current.corrects[h] > "u" && (f === "correct" ? (l.current.corrects[h] = !0, l.current.streak++, l.current.max_streak = Math.max(
        l.current.max_streak,
        l.current.streak
      )) : f === "wrong" && (l.current.corrects[h] = !1, l.current.streak = 0)), n((Z) => ({ ...Z, [x]: f })), setTimeout(() => {
        n((Z) => ({ ...Z, [x]: "normal" }));
      }, 150);
    }, y = (w) => {
      j.delete(w.key);
    };
    return window.addEventListener("keydown", R), window.addEventListener("keyup", y), () => {
      window.removeEventListener("keydown", R), window.removeEventListener("keyup", y);
    };
  }, []), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ t.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ t.jsx(
        $,
        {
          start: g,
          on_time_finished: () => {
            l.current.first_stage_done ? p() : d();
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ t.jsx("div", { className: O.streaks, children: /* @__PURE__ */ t.jsx(
        ur,
        {
          max_streak: l.current.max_streak,
          streak: l.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: O.wasd__display, children: [
        /* @__PURE__ */ t.jsx("div", { className: O.wasd__display__row, children: /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `${O.wasd__key} ${O[i.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ t.jsxs("div", { className: O.wasd__display__row, children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${O.wasd__key} ${O[i.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${O.wasd__key} ${O[i.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${O.wasd__key} ${O[i.d]}`,
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
].slice(2, 3);
function Pe(e, s, r) {
  const c = B.length;
  let [o, i] = [void 0, void 0];
  return r === "random" ? (o = Math.floor(Math.random() * c), i = Math.floor(Math.random() * 3)) : r === "ladder" && (typeof s > "u" || typeof e > "u" ? [o, i] = [0, 0] : (i = s == 2 ? 0 : s + 1, o = s == 2 ? e + 1 : e)), [o, i];
}
const hr = ({ index: e, difficulty: s, onFail: r, onSuccess: c }) => {
  const o = B[e].component, i = B[e].props[s];
  return /* @__PURE__ */ t.jsx(o, { ...i, onSuccess: c, onFail: r });
}, Se = {
  total_games: 0,
  total_retries: 0,
  total_fail: 0,
  total_success: 0,
  total_one_shot_success: 0
};
function pr({
  difficulty: e = "ladder",
  questions: s = -1,
  tries: r = 2,
  show_cancel: c = !0,
  onComplete: o
}) {
  const i = {
    state: "initial",
    questions: s,
    try: r,
    index: void 0,
    difficulty: void 0,
    score: 0
  }, [n, _] = E(i), [l, g] = E(null), u = A(1), d = A(Se);
  S(() => {
    _(i), d.current = Se;
  }, [e, r]);
  const p = () => {
    if (n.state !== "initial")
      return;
    let [h, b] = Pe(
      n.index,
      n.difficulty,
      e
    );
    _((f) => ({
      ...f,
      state: f.state === "initial" ? "progress" : f,
      questions: f.questions - 1,
      try: f.try - 1,
      index: h,
      difficulty: b
    })), d.current = {
      ...d.current,
      total_games: 1
    };
  }, j = ({ score: h, message: b }) => {
    if (d.current = {
      ...d.current,
      total_fail: n.try === 0 ? d.current.total_fail + 1 : d.current.total_fail
    }, e === "ladder" && n.index === B.length - 1 && n.difficulty === 2 && n.try == 0) {
      _((f) => ({
        ...f,
        state: "error",
        score: f.score + h
      })), o({
        score: n.score + h,
        record: d.current
      });
      return;
    }
    if (n.questions === 0 && n.try === 0) {
      _((f) => ({
        ...f,
        state: "error",
        score: f.score + h
      })), o({
        score: n.score + h,
        record: d.current
      });
      return;
    }
    if (n.try === 0) {
      _((f) => ({ ...f, score: f.score + h })), g({
        score: h,
        message: b,
        type: "failure",
        option: "next"
      });
      return;
    }
    _((f) => ({ ...f, score: f.score + h })), g({
      score: h,
      message: b,
      type: "failure",
      option: "retry"
    });
  }, R = () => {
    d.current = {
      ...d.current,
      total_retries: d.current.total_retries + 1
    }, _((h) => ({
      ...h,
      try: h.try - 1
    })), u.current = Date.now(), g(null);
  }, y = () => {
    d.current = {
      ...d.current,
      total_games: d.current.total_games + 1
    };
    const [h, b] = Pe(
      n.index,
      n.difficulty,
      e
    );
    _((f) => ({
      ...f,
      try: r - 1,
      index: h,
      questions: f.questions - 1,
      difficulty: b
    })), g(null), u.current += 1;
  }, w = ({ score: h, message: b }) => {
    if (d.current = {
      ...d.current,
      total_success: d.current.total_success + 1,
      total_one_shot_success: n.try === r - 1 ? d.current.total_one_shot_success + 1 : d.current.total_one_shot_success
    }, e === "ladder" && n.index === B.length - 1 && n.difficulty === 2) {
      o?.({
        score: n.score + h,
        message: "You completed all the challenge.",
        record: d.current
      }), _((f) => ({
        ...f,
        state: "success",
        score: f.score + h
      }));
      return;
    }
    _((f) => ({ ...f, score: n.score + h })), g({
      score: h,
      message: b,
      type: "success",
      option: "next"
    });
  }, x = () => {
    _((h) => ({
      ...h,
      state: "success"
    })), o({
      score: n.score,
      record: d.current
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: T.captcha__wrapper, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: T.captcha__btn,
        onClick: p,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: T.captcha__btn__main, children: [
            n.state === "initial" && /* @__PURE__ */ t.jsx("div", { className: T.captcha__unchecked }),
            n.state === "success" && /* @__PURE__ */ t.jsx(Ke, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            n.state === "error" && /* @__PURE__ */ t.jsx(
              Qe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            n.state === "progress" && /* @__PURE__ */ t.jsx(xt, {}),
            /* @__PURE__ */ t.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: T.captcha__btn__footer, children: /* @__PURE__ */ t.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ t.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    n.state === "progress" && /* @__PURE__ */ t.jsxs("div", { className: T.captcha__content, children: [
      /* @__PURE__ */ t.jsx(
        hr,
        {
          index: n.index,
          difficulty: n.difficulty,
          onFail: j,
          onSuccess: w
        },
        u.current
      ),
      l && /* @__PURE__ */ t.jsx("div", { className: T.captcha__failed, children: /* @__PURE__ */ t.jsxs("div", { className: T.captcha__failed__content, children: [
        l.type === "failure" ? /* @__PURE__ */ t.jsx(ct, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ t.jsx(lt, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ t.jsx("p", { children: l.message }),
        l.option === "retry" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: R, children: /* @__PURE__ */ t.jsx(ut, { size: "32px" }) }),
        l.option === "next" && /* @__PURE__ */ t.jsxs("div", { className: T.buttons, children: [
          /* @__PURE__ */ t.jsx("button", { onClick: y, children: /* @__PURE__ */ t.jsx(ot, { size: "32px" }) }),
          c && /* @__PURE__ */ t.jsx("button", { onClick: x, children: /* @__PURE__ */ t.jsx(dt, { size: "32px", color: "var(--color-red)" }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  pr as Captcha
};
