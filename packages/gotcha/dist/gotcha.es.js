import z, { useState as E, useEffect as T, useRef as A } from "react";
import './index.css';var G = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Ve() {
  if (xe) return Z;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function r(c, i, o) {
    var n = null;
    if (o !== void 0 && (n = "" + o), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      o = {};
      for (var _ in i)
        _ !== "key" && (o[_] = i[_]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: c,
      key: n,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Z.Fragment = s, Z.jsx = r, Z.jsxs = r, Z;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function He() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === We ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case W:
          return "Suspense";
        case qe:
          return "SuspenseList";
        case De:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case N:
            return "Portal";
          case x:
            return (a.displayName || "Context") + ".Provider";
          case m:
            return (a._context.displayName || "Context") + ".Consumer";
          case f:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case $e:
            return h = a.displayName || null, h !== null ? h : e(a.type) || "Memo";
          case fe:
            h = a._payload, a = a._init;
            try {
              return e(a(h));
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
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var b = h.error, k = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), s(a);
      }
    }
    function c(a) {
      if (a === y) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === fe)
        return "<...>";
      try {
        var h = e(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = ne.A;
      return a === null ? null : a.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function n(a) {
      if (pe.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function _(a, h) {
      function b() {
        ge || (ge = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function l() {
      var a = e(this.type);
      return ye[a] || (ye[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, h, b, k, L, S, ae, oe) {
      return b = S.ref, a = {
        $$typeof: j,
        type: a,
        key: h,
        props: S,
        _owner: L
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: ae
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, h, b, k, L, S, ae, oe) {
      var C = h.children;
      if (C !== void 0)
        if (k)
          if (Ze(C)) {
            for (k = 0; k < C.length; k++)
              d(C[k]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (pe.call(h, "key")) {
        C = e(a);
        var $ = Object.keys(h).filter(function(Be) {
          return Be !== "key";
        });
        k = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", be[C + k] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          C,
          $,
          C
        ), be[C + k] = !0);
      }
      if (C = null, b !== void 0 && (r(b), C = "" + b), n(h) && (r(h.key), C = "" + h.key), "key" in h) {
        b = {};
        for (var ie in h)
          ie !== "key" && (b[ie] = h[ie]);
      } else b = h;
      return C && _(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        C,
        S,
        L,
        i(),
        b,
        ae,
        oe
      );
    }
    function d(a) {
      typeof a == "object" && a !== null && a.$$typeof === j && a._store && (a._store.validated = 1);
    }
    var p = z, j = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), x = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), $e = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), De = Symbol.for("react.activity"), We = Symbol.for("react.client.reference"), ne = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, Ze = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var ge, ye = {}, ve = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), we = se(c(o)), be = {};
    B.Fragment = y, B.jsx = function(a, h, b, k, L) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return u(
        a,
        h,
        b,
        !1,
        k,
        L,
        S ? Error("react-stack-top-frame") : ve,
        S ? se(c(a)) : we
      );
    }, B.jsxs = function(a, h, b, k, L) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return u(
        a,
        h,
        b,
        !0,
        k,
        L,
        S ? Error("react-stack-top-frame") : ve,
        S ? se(c(a)) : we
      );
    };
  })()), B;
}
var ke;
function Ge() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? G.exports = Ve() : G.exports = He()), G.exports;
}
var t = Ge(), Le = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ce = z.createContext && /* @__PURE__ */ z.createContext(Le), Fe = ["attr", "size", "title"];
function Ue(e, s) {
  if (e == null) return {};
  var r = Je(e, s), c, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      c = o[i], !(s.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (r[c] = e[c]);
  }
  return r;
}
function Je(e, s) {
  if (e == null) return {};
  var r = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (s.indexOf(c) >= 0) continue;
      r[c] = e[c];
    }
  return r;
}
function te() {
  return te = Object.assign ? Object.assign.bind() : function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
    }
    return e;
  }, te.apply(this, arguments);
}
function Ee(e, s) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    s && (c = c.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, c);
  }
  return r;
}
function re(e) {
  for (var s = 1; s < arguments.length; s++) {
    var r = arguments[s] != null ? arguments[s] : {};
    s % 2 ? Ee(Object(r), !0).forEach(function(c) {
      Ke(e, c, r[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(r, c));
    });
  }
  return e;
}
function Ke(e, s, r) {
  return s = Xe(s), s in e ? Object.defineProperty(e, s, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[s] = r, e;
}
function Xe(e) {
  var s = Qe(e, "string");
  return typeof s == "symbol" ? s : s + "";
}
function Qe(e, s) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var c = r.call(e, s);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(e);
}
function ze(e) {
  return e && e.map((s, r) => /* @__PURE__ */ z.createElement(s.tag, re({
    key: r
  }, s.attr), ze(s.child)));
}
function M(e) {
  return (s) => /* @__PURE__ */ z.createElement(et, te({
    attr: re({}, e.attr)
  }, s), ze(e.child));
}
function et(e) {
  var s = (r) => {
    var {
      attr: c,
      size: i,
      title: o
    } = e, n = Ue(e, Fe), _ = i || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ z.createElement("svg", te({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, c, n, {
      className: l,
      style: re(re({
        color: e.color || r.color
      }, r.style), e.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ z.createElement("title", null, o), e.children);
  };
  return Ce !== void 0 ? /* @__PURE__ */ z.createElement(Ce.Consumer, null, (r) => s(r)) : s(Le);
}
function tt(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function rt(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function nt(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function st(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function at(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function ot(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function it(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function ct(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function lt(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function ut(e) {
  return M({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function dt(e) {
  return M({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" }, child: [] }, { tag: "path", attr: { d: "m8 16 5-4-5-4zm5-4v4h2V8h-2z" }, child: [] }] })(e);
}
function _t(e) {
  return M({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function ht(e) {
  return M({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function mt(e) {
  return M({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
function ft(e) {
  return M({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M352.7 21.04l-194.4.41L21.04 159.3l.41 194.4L159.3 491l194.4-.4L491 352.7l-.4-194.4L352.7 21.04zm-8 19.66l126.2 125.7.4 178.3-123.1 123.6-2.6 2.6-178.3.4L41.08 345.6l-.38-178.3L166.4 41.08l178.3-.38zm-7.5 18.01l-163.3.34L58.71 174.8l.34 163.3L174.8 453.3l163.3-.3 115.2-115.8-.3-163.3L337.2 58.71zM108.4 210.4c5.3 0 10.8.5 16.4 1.3 5.7.8 11.5 2 17.5 3.6v20.5c-5.3-2.4-10.5-4.2-15.6-5.4-5.1-1.2-9.9-1.8-14.4-1.8-6 0-10.4.8-13.25 2.5-2.87 1.6-4.3 4.2-4.3 7.7 0 2.6.96 4.6 2.87 6.1 1.95 1.4 5.48 2.7 10.58 3.7l10.6 2.1c10.8 2.2 18.5 5.5 23.1 9.9 4.5 4.5 6.8 10.8 6.8 18.9 0 10.7-3.2 18.7-9.5 24-6.4 5.2-16.1 7.8-29.2 7.8-6.1 0-12.3-.6-18.51-1.8-6.2-1.1-12.41-2.9-18.61-5.2v-21.1c6.2 3.3 12.19 5.8 17.96 7.5 5.82 1.6 11.46 2.4 16.76 2.4 5.5 0 9.7-.9 12.6-2.7 2.9-1.8 4.4-4.4 4.4-7.8 0-3.1-1-5.4-3-7.1-2-1.6-5.9-3.1-11.8-4.4l-9.7-2.1c-9.73-2.1-16.85-5.4-21.37-10-4.47-4.5-6.7-10.7-6.7-18.4 0-9.7 3.12-17.1 9.37-22.3 6.25-5.3 15.24-7.9 27-7.9zm187.7 0c15.6 0 27.8 4.5 36.7 13.5 8.9 8.9 13.3 21.2 13.3 37 0 15.7-4.4 28-13.3 37-8.9 8.9-21.1 13.4-36.7 13.4-15.6 0-27.8-4.5-36.7-13.4-8.9-9-13.3-21.3-13.3-37 0-15.8 4.4-28.1 13.3-37 8.9-9 21.1-13.5 36.7-13.5zm-141.9 1.8h89.6v18.9h-32.2v78.3h-25.1v-78.3h-32.3v-18.9zm205.8 0h41.6c12.3 0 21.8 2.8 28.4 8.3 6.7 5.4 10 13.2 10 23.4s-3.3 18.1-10 23.6c-6.6 5.4-16.1 8.2-28.4 8.2H385v33.7h-25v-97.2zm-63.9 16.4c-7.7 0-13.6 2.8-17.8 8.5-4.2 5.6-6.3 13.6-6.3 23.8 0 10.2 2.1 18.1 6.3 23.8 4.2 5.6 10.1 8.4 17.8 8.4 7.7 0 13.6-2.8 17.8-8.4 4.2-5.7 6.3-13.6 6.3-23.8 0-10.2-2.1-18.2-6.3-23.8-4.2-5.7-10.1-8.5-17.8-8.5zm88.9 1.8v27.1h13.9c4.9 0 8.6-1.2 11.3-3.5 2.6-2.4 3.9-5.8 3.9-10.1s-1.3-7.7-3.9-10c-2.7-2.4-6.4-3.5-11.3-3.5H385z" }, child: [] }] })(e);
}
const pt = "_captcha__wrapper_1ay43_5", gt = "_buttons_1ay43_59", yt = "_captcha__failed_1ay43_109", vt = "_captcha__failed__content_1ay43_139", wt = "_captcha__btn_1ay43_169", bt = "_captcha__btn__main_1ay43_203", xt = "_captcha__btn__footer_1ay43_227", jt = "_captcha__unchecked_1ay43_237", kt = "_captcha__content_1ay43_253", O = {
  captcha__wrapper: pt,
  buttons: gt,
  captcha__failed: yt,
  captcha__failed__content: vt,
  captcha__btn: wt,
  captcha__btn__main: bt,
  captcha__btn__footer: xt,
  captcha__unchecked: jt,
  captcha__content: kt
}, Me = [
  nt,
  st,
  at,
  ot,
  it,
  ct,
  lt,
  ut
];
function Ct() {
  const [e, s] = E(7);
  T(() => {
    const c = setInterval(() => {
      s((i) => (i + 1) % Me.length);
    }, 100);
    return () => {
      clearInterval(c);
    };
  }, []);
  const r = Me[e];
  return /* @__PURE__ */ t.jsx(r, { style: { margin: -8 }, size: 46 });
}
const Et = "_timer__wrapper_17tk4_1", ce = {
  timer__wrapper: Et,
  "timer--last": "_timer--last_17tk4_33"
};
function Mt(e) {
  return e < 10;
}
function I({ start: e = 60, on_time_finished: s, on_change: r }) {
  const [c, i] = E(e), o = A(e);
  return T(() => {
    if (c <= 0) {
      s?.();
      return;
    }
    const n = setTimeout(() => {
      i((_) => _ - 1), o.current -= 1, r?.(o.current);
    }, 1e3);
    return () => clearTimeout(n);
  }, [c]), T(() => {
    i(e);
  }, [e]), /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `${ce.timer__wrapper} ${Mt(c) ? ce["timer--last"] : ce["timer--normal"]}`,
      children: /* @__PURE__ */ t.jsx("span", { children: c })
    }
  );
}
const Nt = "_main_1ex2e_1", Rt = {
  main: Nt
}, St = "_button_u3ipf_1", Tt = {
  button: St
};
function D({ children: e, className: s, ...r }) {
  return /* @__PURE__ */ t.jsx("button", { className: `${Tt.button} ${s ?? ""}`, ...r, children: e });
}
function Ot() {
  const e = [
    "Even my grandma types faster… and she uses one finger.",
    "Autocorrect just beat your high score.",
    "Your keyboard fell asleep waiting for you.",
    "Is this a typing test or a meditation session?",
    "My Wi-Fi lagged and still finished before you.",
    "Even Morse code is quicker than that.",
    "Did you stop to write a novel mid-sentence?",
    "You type like you’re scared of the keys.",
    "Voice typing would’ve lapped you twice.",
    "Even a captcha bot types faster than you."
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function Pt() {
  const e = [
    "Your ABCs just rage quit.",
    "Sesame Street is ashamed of you.",
    "Even kindergarteners are side-eyeing you rn.",
    "Imagine failing the alphabet in 2025.",
    "School called. They want their tuition back.",
    "This isn’t A to Z, it’s A to ???",
    "Bro just leaked Season 2 of the alphabet.",
    "Alphabet soup makes more sense than that."
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function At() {
  const e = [
    "Breaking rules like a true rebel… kinda dumb tho.",
    "That light was glowing, not giving consent.",
    "Congratulations, you just pressed ‘oops’ IRL.",
    "Rule #1: Light = stop. You: lol nope.",
    "Next time, try reading lights like humans do.",
    "Glowing light called, it wants its respect back.",
    "You typed… and the universe facepalmed."
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function q() {
  const e = [
    "Whoa! You actually did it",
    "Impressive! Your fingers deserve a medal",
    "Speed typing legend unlocked!",
    "You crushed it! Respect",
    "A+ performance! Even I’m impressed.",
    "Nice! But next time… prepare for chaos",
    "Well done… don’t get too comfy, harder awaits!",
    "You nailed it… I’ll see you in the next round!",
    "Congrats! Next time, the challenge fights back.",
    "Good job… but next level won’t go easy on you!",
    "Nice! Next time… chaos incoming",
    "GG! Harder mode is watching",
    "You won… but I’m coming",
    "Fastest? Yes. Safe? Not next round"
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function Ye() {
  const e = [
    "You can’t lick your elbow.",
    "You can’t breathe and swallow at the same time.",
    "It’s impossible to sneeze with your eyes open.",
    "You can’t hum if you pinch your nose shut.",
    "Your tongue can’t touch your chin.",
    "You can’t tickle yourself.",
    "It’s impossible to fold a paper more than 7 times.",
    "You can’t blow air out while laughing.",
    "You can’t say ‘toy boat’ five times fast without messing up.",
    "You can’t wiggle your ears without moving your eyebrows."
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function Lt() {
  const e = [
    "Congrats, you remembered something that never existed.",
    "Even your brain’s doing improv now.",
    "Nice try, but that emoji is from the DLC pack.",
    "You just clicked pure imagination",
    "That emoji is playing hide-and-seek in your head only.",
    "Bro unlocked ‘false memories’ achievement",
    "I wasn't here before"
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function me() {
  const e = [
    "Time’s up — even a sloth moves faster than you.",
    "Bro lost to a clock",
    "Did you think this was a turn-based game?",
    "Deadline said hi, you said bye.",
    "Your speed: Windows XP loading screen.",
    "Even buffering YouTube beats you.",
    "Timer won, you didn’t.",
    "You moved slower than my grandma’s Wi-Fi.",
    "Imagine losing to numbers counting down",
    "Time flies, you… clearly don’t.",
    "Are you internet explorer?"
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function zt() {
  const e = [
    "You wrote your homework but forgot to turn it in.",
    "So close… yet your keyboard betrayed you.",
    "You had the answer, but the clock said ‘nah.’",
    "Imagine losing to the submit button.",
    "Congrats, you solved it in another timeline.",
    "Right answer, wrong century",
    "You typed history… but history forgot you.",
    "Submit button speedrun: failed.",
    "The timer clutched harder than you.",
    "Correct but late = still wrong"
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function Yt() {
  const e = [
    "Math: 1, You: still loading…",
    "Looks like numbers won this round",
    "Even the calculator is giggling.",
    "So close, yet so… unsolved.",
    "Math isn’t mad, just disappointed.",
    "Don’t worry, numbers confuse me too.",
    "Math teachers everywhere just sighed in sync.",
    "You gave effort… math wanted answers.",
    "Wrong submission? Nah, just ‘creative math.’"
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function V() {
  const e = [
    "Error 404: skills not found.",
    "You had one job… and missed it.",
    "Failure achieved, achievement unlocked",
    "Even your shadow facepalmed.",
    "Close, but nope.exe",
    "You lost… but stylishly",
    "Don’t worry, failure builds character… lots of it.",
    "Mission failed successfully",
    "Well… that was something.",
    "Game: 1, You: still buffering."
  ];
  return e[Math.floor(Math.random() * e.length)] ?? e[0];
}
function F({
  question: e,
  answer: s,
  time: r = 100,
  onSuccess: c,
  onFail: i
}) {
  const o = A(null);
  T(() => {
    o && o.current.focus();
  }, []);
  const [n, _] = E(!0), l = () => {
    n && (i({
      score: 0,
      message: V()
    }), _(!1));
  }, g = () => {
    if (!o.current || !n)
      return;
    o.current.value.toLocaleLowerCase() === s.toLocaleLowerCase() ? c({
      score: 1,
      message: q()
    }) : i({
      score: 0,
      message: V()
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
      /* @__PURE__ */ t.jsx(I, { start: r, on_time_finished: l })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: Rt.main, children: [
      /* @__PURE__ */ t.jsxs("p", { children: [
        /* @__PURE__ */ t.jsx("span", { children: "Q:" }),
        " ",
        e
      ] }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: o,
          placeholder: "Answer",
          autoComplete: "false",
          onKeyDown: u
        }
      ),
      /* @__PURE__ */ t.jsx(D, { onClick: g, children: "Submit" })
    ] })
  ] });
}
const It = "_alphabet_showcase_e7eh5_1", qt = "_alphabet_input_e7eh5_41", $t = "_light_e7eh5_79", U = {
  alphabet_showcase: It,
  alphabet_input: qt,
  light: $t,
  "light--active": "_light--active_e7eh5_95"
}, Ne = [
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
function le({
  reverse: e = !1,
  time: s = 26,
  total_light_glows: r = 3,
  onSuccess: c,
  onFail: i
}) {
  const [o, n] = E({
    active: !0,
    index: -1,
    light_glow: !1,
    lights: null,
    glow: !1
  }), [_, l] = E(s), g = A(null);
  let u = Ne;
  e && (u = [...Ne].reverse()), T(() => {
    g.current.focus();
    const y = Array(r).fill(null).map((v) => ({
      time: Math.floor(Math.random() * (s - 1)),
      duration: Math.floor(Math.random() * s * 100)
    }));
    n((v) => ({ ...v, lights: y }));
  }, []);
  const d = () => {
    o.active && i({
      score: (o.index + 1) / 26,
      message: Ot()
    }), n((y) => ({ ...y, active: !1 }));
  }, p = (y) => {
    if (!o.active)
      return;
    const v = y.key;
    o.glow && (i({
      score: (o.index + 1) / 26,
      message: At()
    }), n((w) => ({ ...w, active: !1 }))), v === u[o.index + 1] ? (v === u.at(-1) && (c({
      score: 1,
      message: q()
    }), n((w) => ({ ...w, active: !1 }))), n((w) => ({ ...w, index: w.index + 1 }))) : (i({
      score: (o.index + 1) / 26,
      message: Pt()
    }), n((w) => ({ ...w, active: !1 })));
  }, j = () => {
    g.current.value = "";
  }, N = (y) => {
    l(y);
  };
  return T(() => {
    let y;
    if (o.lights) {
      const v = o.lights.map((x) => x.time), w = o.lights.map((x) => x.duration), m = v.indexOf(_);
      m !== -1 && (n((x) => ({ ...x, glow: !0 })), y = setTimeout(() => {
        n((x) => ({ ...x, glow: !1 }));
      }, w[m]));
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
        I,
        {
          start: s,
          on_time_finished: d,
          on_change: N
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      r >= 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `${U.light} ${o.glow ? U["light--active"] : ""}`
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: U.alphabet_showcase, children: o.index >= 0 && u.slice(0, o.index + 1).map((y) => /* @__PURE__ */ t.jsx("span", { children: y }, y)) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          ref: g,
          onKeyDown: p,
          onKeyUp: j,
          className: U.alphabet_input
        }
      )
    ] })
  ] });
}
function Y(e, s, r = 1) {
  const i = e, o = [];
  let n = 0;
  for (; n < i; )
    o.push(n), n += r;
  return o;
}
function Ie(e) {
  const s = [...e];
  for (let r = s.length - 1; r > 0; r--) {
    const c = Math.floor(Math.random() * (r + 1));
    [s[r], s[c]] = [s[c], s[r]];
  }
  return s;
}
function ee(e, s) {
  return Ie(e).slice(0, s);
}
const Dt = "_main_1gv5v_1", Wt = "_instruction_1gv5v_9", Zt = "_emoji_display_1gv5v_27", J = {
  main: Dt,
  instruction: Wt,
  emoji_display: Zt,
  "button--correct": "_button--correct_1gv5v_61"
}, K = [
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
function ue({
  width: e = 3,
  time: s = [5, 3, 10],
  onSuccess: r,
  onFail: c
}) {
  const [i, o] = E({
    width: e,
    stage: 0,
    correct_indexes: [],
    instruction: "Remember them...",
    score: 0,
    user_clicked: [],
    active: !0
  }), [n, _] = E(
    ee(Y(K.length), e)
  ), l = () => {
    if (i.stage === 0)
      o((u) => ({
        ...u,
        correct_indexes: n,
        stage: 1,
        instruction: Ye()
      }));
    else if (i.stage === 1) {
      o((p) => ({
        ...p,
        stage: 2,
        instruction: "Click on the old emojis"
      }));
      let u = ee(
        Y(K.length),
        e * (e - 1)
      );
      for (; u.some((p) => i.correct_indexes.includes(p)); )
        u = ee(
          Y(K.length),
          e * (e - 1)
        );
      const d = Ie([...n, ...u]);
      _(d);
    } else i.stage == 2 && i.active && (c({
      score: i.score / e,
      message: "Time and tides waits for none"
    }), o((u) => ({ ...u, active: !1 })));
  }, g = (u) => {
    if (!(i.stage !== 2 || !i.active))
      if (i.correct_indexes.includes(u)) {
        if (i.score === e - 1) {
          r({
            score: 1,
            message: q()
          }), o((d) => ({
            ...d,
            active: !1,
            user_clicked: [...d.user_clicked, u]
          }));
          return;
        }
        o((d) => ({
          ...d,
          score: d.score + 1,
          user_clicked: [...d.user_clicked, u]
        }));
      } else
        o((d) => ({
          ...d,
          user_clicked: [...d.user_clicked, u],
          active: !1
        })), c({
          score: i.score / e,
          message: Lt()
        });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Remember Emojis" }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "Look at all the emojis carefully for",
          " ",
          /* @__PURE__ */ t.jsxs("u", { children: [
            s[i.stage],
            " seconds"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx(
        I,
        {
          start: s[i?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: J.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: J.instruction, children: i.instruction }),
      i.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: J.emoji_display,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: n.map((u, d) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: g.bind(null, u),
              className: i.user_clicked.includes(u) ? J["button--correct"] : "",
              children: /* @__PURE__ */ t.jsx("span", { children: K[u] })
            },
            d
          ))
        }
      )
    ] })
  ] });
}
const Bt = "_question_2wb7v_1", Vt = "_horizontal_flipped_2wb7v_15", Ht = "_vertical_flipped_2wb7v_23", Gt = "_both_flipped_2wb7v_31", Ft = "_input__wrapper_2wb7v_39", Ut = "_input_2wb7v_39", X = {
  question: Bt,
  horizontal_flipped: Vt,
  vertical_flipped: Ht,
  both_flipped: Gt,
  input__wrapper: Ft,
  input: Ut
}, Jt = {
  easy: "normal",
  medium: "horizontal_flipped",
  hard: "vertical_flipped",
  "very hard": "both_flipped"
};
function de({
  difficulty: e = "easy",
  time: s = 10,
  question: r,
  answer: c,
  onFail: i,
  onSuccess: o
}) {
  const [n, _] = E({
    active: !0
  }), l = A(null), g = () => {
    if (!n.active)
      return;
    const p = +l.current.value;
    i(p === c ? {
      score: 0.5,
      message: zt()
    } : {
      score: 0,
      message: me()
    }), _((j) => ({ ...j, active: !1 }));
  };
  T(() => {
    l.current && l.current.focus();
  }, [e]);
  const u = () => {
    if (!n.active)
      return;
    +l.current.value === c ? o({
      score: 1,
      message: q()
    }) : i({
      score: 0,
      message: Yt()
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
      /* @__PURE__ */ t.jsx(I, { start: s, on_time_finished: g })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { children: [
      /* @__PURE__ */ t.jsx("p", { className: `${X.question} ${X[Jt[e]]}`, children: r }),
      /* @__PURE__ */ t.jsxs("div", { className: X.input__wrapper, children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "number",
            ref: l,
            onKeyDown: d,
            className: X.input,
            placeholder: "Eg. 4"
          }
        ),
        /* @__PURE__ */ t.jsx(D, { onClick: u, children: "Submit" })
      ] })
    ] })
  ] });
}
const Kt = "_main_2gc3q_1", Xt = "_instruction_2gc3q_9", Qt = "_pattern_grid_2gc3q_23", Q = {
  main: Kt,
  instruction: Xt,
  pattern_grid: Qt,
  "button--correct": "_button--correct_2gc3q_59"
};
function _e({
  width: e = 3,
  numbers: s = 4,
  order_matters: r = !0,
  time: c = [5, 3, 15],
  onSuccess: i,
  onFail: o
}) {
  const [n, _] = E({
    active: !0,
    stage: 0,
    instruction: "Memorize the patterns",
    correct: ee(Y(e * e), s),
    clicked: []
  }), l = () => {
    n.stage === 0 ? _((u) => ({
      ...u,
      stage: 1,
      instruction: Ye()
    })) : n.stage === 1 ? _((u) => ({
      ...u,
      stage: 2,
      instruction: r ? "Click the boxes in correct order." : "Click the earlier highlighted boxes."
    })) : n.stage === 2 && n.active && (_((u) => ({
      ...u,
      active: !1
    })), o({
      score: n.clicked.length,
      message: me()
    }));
  }, g = (u) => {
    if (!n.active || n.stage !== 2)
      return;
    const d = Math.max(0, n.clicked.length);
    if (n.correct[d] === u || !r && n.correct.includes(u)) {
      if (n.clicked.length === s - 1) {
        _((p) => ({ ...p, active: !1 })), i({
          score: 1,
          message: q()
        });
        return;
      }
      _((p) => ({ ...p, clicked: [...p.clicked, u] }));
    } else
      _((p) => ({ ...p, active: !1 })), o({
        score: n.clicked.length / s,
        message: V()
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
        I,
        {
          start: c[n?.stage ?? 0],
          on_time_finished: l
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: Q.main, children: [
      /* @__PURE__ */ t.jsx("p", { className: Q.instruction, children: n.instruction }),
      n.stage !== 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: Q.pattern_grid,
          style: { gridTemplateColumns: `repeat(${e}, auto)` },
          children: Y(e * e).map((u) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: g.bind(null, u),
              className: (n.clicked.includes(u) || n.stage !== 2) && n.correct.includes(u) ? Q["button--correct"] : "",
              children: r && (n.clicked.includes(u) || n.stage !== 2) && n.correct.includes(u) && /* @__PURE__ */ t.jsx("span", { children: n.correct.indexOf(u) + 1 })
            },
            u
          ))
        }
      )
    ] })
  ] });
}
const er = "_form__pin_1kyyk_1", tr = {
  form__pin: er
};
function Re(e, s) {
  const r = Y(s).map((c) => e.current[c].value);
  return r.map((c) => c.length > 0).every(Boolean) ? r.reduce((c, i) => `${c}${i}`) : !1;
}
function rr({ digits: e = 4, onChange: s }) {
  const r = A([]), c = (o, n) => {
    const _ = n.target.value;
    o < e - 1 && _.length === 1 && r.current[o + 1].focus();
    const l = Re(r, e);
    s(l ? +l : void 0);
  }, i = (o, n) => {
    const _ = n.target.value;
    _.length > 0 && n.key === "Backspace" ? (r.current[o].value = null, Re(r, e) || s(void 0)) : o !== 0 && (n.key === "Backspace" || n.key === "ArrowLeft") ? r.current[o - 1].focus() : o !== e - 1 && n.key === "ArrowRight" ? r.current[o + 1].focus() : _.length === 1 && n.key.length == 1 && !n.ctrlKey && !n.metaKey && (r.current[o].value = String(n.key), n.preventDefault(), o < e - 1 && r.current[o + 1].focus());
  };
  return /* @__PURE__ */ t.jsx("div", { className: tr.form__pin, children: Y(e).map((o) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "number",
      placeholder: "x",
      onInput: c.bind(null, o),
      onKeyDown: i.bind(null, o),
      ref: (n) => r.current[o] = n
    },
    o
  )) });
}
const nr = "_form__pin__wrapper_r131o_1", sr = "_form__btn__wrapper_r131o_13", ar = "_enter_pin_r131o_29", P = {
  form__pin__wrapper: nr,
  form__btn__wrapper: sr,
  enter_pin: ar
};
function Se({
  digit: e = 4,
  time: s = [10, 30],
  onFail: r,
  onSuccess: c
}) {
  const [i, o] = E(void 0), [n, _] = E("enter-pin"), [l, g] = E(null), u = A(!1), d = () => {
    u.current || r({
      score: 0,
      message: me()
    });
  }, p = (v) => {
    o(v);
  }, j = (v) => {
    v.preventDefault(), i && (_("verify-pin"), g(
      +i < Math.pow(10, e) / 2 ? Array(e).fill("9").join("") : Array(e).fill("0").join("")
    ));
  }, N = (v) => {
    const w = +l + v;
    w >= 0 && w <= Math.pow(10, e) - 1 && g(String(w));
  }, y = () => {
    u.current = !0, i === +l ? c({
      score: 1,
      message: q()
    }) : r({
      score: 0,
      message: V()
    });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { className: P.header, children: [
      /* @__PURE__ */ t.jsxs("div", { className: P.header__info, children: [
        /* @__PURE__ */ t.jsx("h3", { children: "PIN Challenge" }),
        n === "enter-pin" && /* @__PURE__ */ t.jsx("p", { children: "Prove yourself a human by creating a random pin" }),
        n === "verify-pin" && /* @__PURE__ */ t.jsx("p", { children: "Human can remember their earlier PIN" })
      ] }),
      /* @__PURE__ */ t.jsx(
        I,
        {
          start: n === "enter-pin" ? s[0] : s[1],
          on_time_finished: d
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: P.main, children: [
      n === "enter-pin" && /* @__PURE__ */ t.jsxs("form", { className: P.form, onSubmit: j, children: [
        /* @__PURE__ */ t.jsx("div", { className: P.form__pin__wrapper, children: /* @__PURE__ */ t.jsx(rr, { digits: e, onChange: p }) }),
        /* @__PURE__ */ t.jsx("div", { className: P.form__btn__wrapper, children: /* @__PURE__ */ t.jsx(D, { type: "submit", disabled: !i, children: "Submit PIN" }) })
      ] }),
      n === "verify-pin" && /* @__PURE__ */ t.jsx("div", { className: P.form, children: /* @__PURE__ */ t.jsxs("div", { className: P.form__btn__wrapper, children: [
        /* @__PURE__ */ t.jsxs("div", { className: P.enter_pin, children: [
          /* @__PURE__ */ t.jsx(D, { onClick: N.bind(null, -1), children: "-" }),
          /* @__PURE__ */ t.jsx("span", { children: l }),
          /* @__PURE__ */ t.jsx(D, { onClick: N.bind(null, 1), children: "+" })
        ] }),
        /* @__PURE__ */ t.jsx(D, { onClick: y, children: "Verify PIN" })
      ] }) })
    ] })
  ] });
}
const or = "_wasd__display_1j3za_1", ir = "_wasd__display__row_1j3za_9", cr = "_wasd__key_1j3za_31", lr = "_active_1j3za_57", ur = "_wrong_1j3za_65", dr = "_correct_1j3za_77", _r = "_pressed_1j3za_89", hr = "_streaks_1j3za_103", R = {
  wasd__display: or,
  wasd__display__row: ir,
  wasd__key: cr,
  active: lr,
  wrong: ur,
  correct: dr,
  pressed: _r,
  streaks: hr
}, mr = "_streak_meter_1o9ug_1", fr = "_intermedite_1o9ug_29", pr = "_advance_1o9ug_37", gr = "_fire_big_1o9ug_1", Te = {
  streak_meter: mr,
  intermedite: fr,
  advance: pr,
  fire_big: gr
};
function yr(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function vr(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function wr({
  streak: e,
  max_streak: s = void 0,
  target: r = "♾"
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: Te.streak_meter, children: [
    /* @__PURE__ */ t.jsxs("p", { className: Te[vr(e)], children: [
      yr(e),
      "/",
      r
    ] }),
    typeof s < "u" && /* @__PURE__ */ t.jsxs("p", { children: [
      "Max Streak: ",
      s
    ] })
  ] });
}
function br(e, s, r) {
  return e ? s === r ? "correct" : "wrong" : "normal";
}
function xr(e) {
  const s = ["w", "a", "s", "d"];
  let r = "";
  for (let c = 0; c < e; c++) {
    const i = Math.floor(Math.random() * s.length);
    r += s[i];
  }
  return r;
}
const Oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function jr(e) {
  return Object.keys(Oe).find((s) => Oe[s].includes(e));
}
function he({
  target: e = 5,
  times: s = [6, 30],
  speed_factor: r = 1,
  onSuccess: c,
  onFail: i
}) {
  const [o, n] = E({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), _ = xr(100), l = A({
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
      message: q()
    }) : i({
      score: l.current.max_streak / e,
      message: V()
    });
  };
  return T(() => {
    const j = setInterval(() => {
      if (!l.current.active) return;
      if (l.current.index >= l.current.word.length) {
        l.current.active = !1, clearInterval(j);
        return;
      }
      const N = l.current.word[l.current.index];
      l.current.index += 1, n({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [N]: "active"
      });
    }, 600 / r);
    return () => clearInterval(j);
  }, [r]), T(() => {
    const j = /* @__PURE__ */ new Set(), N = (v) => {
      const w = jr(v.key);
      if (!w || j.has(v.key)) return;
      j.add(v.key);
      const m = l.current.index - 1, x = l.current.word[m], f = br(
        l.current.active,
        w,
        x
      );
      typeof l.current.corrects[m] > "u" && (f === "correct" ? (l.current.corrects[m] = !0, l.current.streak++, l.current.max_streak = Math.max(
        l.current.max_streak,
        l.current.streak
      )) : f === "wrong" && (l.current.corrects[m] = !1, l.current.streak = 0)), n((W) => ({ ...W, [w]: f })), setTimeout(() => {
        n((W) => ({ ...W, [w]: "normal" }));
      }, 150);
    }, y = (v) => {
      j.delete(v.key);
    };
    return window.addEventListener("keydown", N), window.addEventListener("keyup", y), () => {
      window.removeEventListener("keydown", N), window.removeEventListener("keyup", y);
    };
  }, []), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("header", { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ t.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ t.jsx(
        I,
        {
          start: g,
          on_time_finished: () => {
            l.current.first_stage_done ? p() : d();
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ t.jsx("div", { className: R.streaks, children: /* @__PURE__ */ t.jsx(
        wr,
        {
          max_streak: l.current.max_streak,
          streak: l.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: R.wasd__display, children: [
        /* @__PURE__ */ t.jsx("div", { className: R.wasd__display__row, children: /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `${R.wasd__key} ${R[o.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ t.jsxs("div", { className: R.wasd__display__row, children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[o.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[o.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `${R.wasd__key} ${R[o.d]}`,
              children: "D"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const H = [
  {
    game: "quiz",
    component: F,
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
        time: 10
      }
    ]
  },
  {
    type: "math game",
    component: de,
    props: [
      {
        difficulty: "easy",
        time: 10,
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
    component: _e,
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
    component: le,
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
        time: 40,
        total_light_glows: 0,
        reverse: !0
      }
    ]
  },
  {
    type: "quiz",
    component: F,
    props: [
      {
        question: "Who is the yellow color electric pokemon?",
        answer: "pikachu",
        time: 12
      },
      {
        question: "What does LOL stands for?",
        answer: "Laugh Out Loud",
        time: 15
      },
      {
        question: "Right or Wrong?",
        answer: "wrong",
        time: 10
      }
    ]
  },
  {
    type: "Imposter Emoji",
    component: ue,
    props: [
      {
        width: 3,
        time: [9, 3, 15]
      },
      {
        width: 4,
        time: [9, 3, 10]
      },
      {
        width: 4,
        time: [9, 3, 10]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: he,
    props: [
      {
        target: 3,
        times: [10, 20],
        speed_factor: 0.5
      },
      {
        target: 5,
        times: [5, 20],
        speed_factor: 0.8
      },
      {
        target: 8,
        times: [5, 20],
        speed_factor: 0.8
      }
    ]
  },
  {
    type: "select-pin",
    component: Se,
    props: [
      {
        digit: 1,
        time: [10, 15]
      },
      {
        digit: 2,
        time: [10, 40]
      },
      {
        digit: 2,
        time: [10, 30]
      }
    ]
  },
  {
    type: "quiz",
    component: F,
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
    component: de,
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
        time: 20
      },
      {
        difficulty: "very hard",
        question: "87+49=?",
        answer: 136,
        time: 22
      }
    ]
  },
  {
    type: "remember",
    component: _e,
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
    component: le,
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
    component: ue,
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
        time: [8, 5, 8]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: he,
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
        speed_factor: 1.1
      }
    ]
  },
  // impossible begins here
  {
    type: "select-pin",
    component: Se,
    props: [
      {
        digit: 3,
        time: [5, 30]
      },
      {
        digits: 4,
        time: [5, 30]
      },
      {
        digits: 5,
        time: [5, 40]
      }
    ]
  },
  {
    type: "quiz",
    component: F,
    props: [
      {
        question: "Can you unhash the string using MD5 hash? 474433b791d01af5c4a0e802e419014f",
        answer: "i am not a robot duhh!",
        time: 20
      },
      {
        question: "100 digits of PI?",
        answer: "You can't type that within 10 seconds",
        time: 20
      },
      {
        question: "What is the largest prime number?",
        answer: "noone knows",
        time: 20
      }
    ]
  },
  {
    type: "math game",
    component: de,
    props: [
      {
        difficulty: "medium",
        question: "73x21=?",
        answer: 1533,
        time: 15
      },
      {
        difficulty: "hard",
        question: "136x25=?",
        answer: 3400,
        time: 15
      },
      {
        difficulty: "very hard",
        question: "87x49=?",
        answer: 4263,
        time: 12
      }
    ]
  },
  {
    type: "remember",
    component: _e,
    props: [
      {
        width: 6,
        numbers: 9,
        order_matters: !0,
        time: [10, 3, 15]
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
    component: le,
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
    component: ue,
    props: [
      {
        width: 6,
        time: [7, 5, 10]
      },
      {
        width: 7,
        time: [7, 5, 10]
      },
      {
        width: 7,
        time: [4, 5, 4]
      }
    ]
  },
  {
    type: "wasd reflex",
    component: he,
    props: [
      {
        target: 12,
        times: [5, 15],
        speed_factor: 0.9
      },
      {
        target: 15,
        times: [5, 20],
        speed_factor: 1.1
      },
      {
        target: 16,
        times: [5, 20],
        speed_factor: 1.3
      }
    ]
  }
];
function Pe(e, s, r) {
  const c = H.length;
  let [i, o] = [void 0, void 0];
  return r === "random" ? (i = Math.floor(Math.random() * c), o = Math.floor(Math.random() * 3)) : r === "ladder" && (typeof s > "u" || typeof e > "u" ? [i, o] = [0, 0] : (o = s == 2 ? 0 : s + 1, i = s == 2 ? e + 1 : e)), [i, o];
}
const kr = ({ index: e, difficulty: s, onFail: r, onSuccess: c }) => {
  const i = H[e].component, o = H[e].props[s];
  return /* @__PURE__ */ t.jsx(i, { ...o, onSuccess: c, onFail: r });
}, Ae = {
  total_games: 0,
  total_retries: 0,
  total_fail: 0,
  total_success: 0,
  total_one_shot_success: 0
};
function Er({
  difficulty: e = "ladder",
  questions: s = -1,
  tries: r = 2,
  show_cancel: c = !0,
  onComplete: i
}) {
  const o = {
    state: "initial",
    questions: s,
    try: r,
    index: void 0,
    difficulty: void 0,
    score: 0
  }, [n, _] = E(o), [l, g] = E(null), u = A(1), d = A(Ae);
  T(() => {
    _(o), d.current = Ae, g(null);
  }, [e, r]);
  const p = () => {
    if (n.state !== "initial")
      return;
    let [m, x] = Pe(
      n.index,
      n.difficulty,
      e
    );
    _((f) => ({
      ...f,
      state: f.state === "initial" ? "progress" : f,
      questions: f.questions - 1,
      try: f.try - 1,
      index: m,
      difficulty: x
    })), d.current = {
      ...d.current,
      total_games: 1
    };
  }, j = ({ score: m, message: x }) => {
    if (d.current = {
      ...d.current,
      total_fail: n.try === 0 ? d.current.total_fail + 1 : d.current.total_fail
    }, e === "ladder" && n.index === H.length - 1 && n.difficulty === 2 && n.try == 0) {
      _((f) => ({
        ...f,
        state: "error",
        score: f.score + m
      })), i({
        score: n.score + m,
        record: d.current
      });
      return;
    }
    if (n.questions === 0 && n.try === 0) {
      _((f) => ({
        ...f,
        state: "error",
        score: f.score + m
      })), i({
        score: n.score + m,
        record: d.current
      });
      return;
    }
    if (n.try === 0) {
      _((f) => ({ ...f, score: f.score + m })), g({
        score: m,
        message: x,
        type: "failure",
        option: "next"
      });
      return;
    }
    _((f) => ({ ...f, score: f.score + m })), g({
      score: m,
      message: x,
      type: "failure",
      option: "retry"
    });
  }, N = () => {
    d.current = {
      ...d.current,
      total_retries: d.current.total_retries + 1
    }, _((m) => ({
      ...m,
      try: m.try - 1
    })), u.current = Date.now(), g(null);
  }, y = () => {
    d.current = {
      ...d.current,
      total_games: d.current.total_games + 1
    };
    const [m, x] = Pe(
      n.index,
      n.difficulty,
      e
    );
    _((f) => ({
      ...f,
      try: r - 1,
      index: m,
      questions: f.questions - 1,
      difficulty: x
    })), g(null), u.current += 1;
  }, v = ({ score: m, message: x }) => {
    if (d.current = {
      ...d.current,
      total_success: d.current.total_success + 1,
      total_one_shot_success: n.try === r - 1 ? d.current.total_one_shot_success + 1 : d.current.total_one_shot_success
    }, e === "ladder" && n.index === H.length - 1 && n.difficulty === 2) {
      i?.({
        score: n.score + m,
        message: "You completed all the challenge.",
        record: d.current
      }), _((f) => ({
        ...f,
        state: "success",
        score: f.score + m
      }));
      return;
    }
    _((f) => ({ ...f, score: n.score + m })), g({
      score: m,
      message: x,
      type: "success",
      option: "next"
    });
  }, w = () => {
    _((m) => ({
      ...m,
      state: "success"
    })), i({
      score: n.score,
      record: d.current
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: O.captcha__wrapper, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: O.captcha__btn,
        onClick: p,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: O.captcha__btn__main, children: [
            n.state === "initial" && /* @__PURE__ */ t.jsx("div", { className: O.captcha__unchecked }),
            n.state === "success" && /* @__PURE__ */ t.jsx(tt, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            n.state === "error" && /* @__PURE__ */ t.jsx(
              rt,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            n.state === "progress" && /* @__PURE__ */ t.jsx(Ct, {}),
            /* @__PURE__ */ t.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: O.captcha__btn__footer, children: /* @__PURE__ */ t.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ t.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    n.state === "progress" && /* @__PURE__ */ t.jsxs("div", { className: O.captcha__content, children: [
      /* @__PURE__ */ t.jsx(
        kr,
        {
          index: n.index,
          difficulty: n.difficulty,
          onFail: j,
          onSuccess: v
        },
        u.current
      ),
      l && /* @__PURE__ */ t.jsx("div", { className: O.captcha__failed, children: /* @__PURE__ */ t.jsxs("div", { className: O.captcha__failed__content, children: [
        l.type === "failure" ? /* @__PURE__ */ t.jsx(_t, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ t.jsx(ht, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ t.jsx("p", { children: l.message }),
        l.option === "retry" && /* @__PURE__ */ t.jsx("button", { style: { marginTop: 16 }, onClick: N, children: /* @__PURE__ */ t.jsx(mt, { size: "32px" }) }),
        l.option === "next" && /* @__PURE__ */ t.jsxs("div", { className: O.buttons, children: [
          c && /* @__PURE__ */ t.jsx("button", { onClick: w, children: /* @__PURE__ */ t.jsx(ft, { size: "26px", color: "var(--color-red)" }) }),
          /* @__PURE__ */ t.jsx("button", { onClick: y, children: /* @__PURE__ */ t.jsx(
            dt,
            {
              size: "32px",
              color: "var(--color-green)"
            }
          ) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Er as Captcha
};
