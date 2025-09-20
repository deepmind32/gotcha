import b, { useState as T, useEffect as ee, useRef as he } from "react";
import './index.css';const Ce = "_captcha__wrapper_1pyfx_1", be = "_captcha__btn_1pyfx_23", ve = "_captcha__btn__main_1pyfx_47", ge = "_captcha__btn__footer_1pyfx_71", xe = "_captcha__unchecked_1pyfx_81", ye = "_captcha__content_1pyfx_97", x = {
  captcha__wrapper: Ce,
  captcha__btn: be,
  captcha__btn__main: ve,
  captcha__btn__footer: ge,
  captcha__unchecked: xe,
  captcha__content: ye
};
var O = { exports: {} }, j = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function Ee() {
  if (G) return j;
  G = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, i, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      f = {};
      for (var s in i)
        s !== "key" && (f[s] = i[s]);
    } else f = i;
    return i = f.ref, {
      $$typeof: e,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: f
    };
  }
  return j.Fragment = n, j.jsx = t, j.jsxs = t, j;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function je() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === de ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case S:
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
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case fe:
            return o = r.displayName || null, o !== null ? o : e(r.type) || "Memo";
          case Y:
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
        var l = o.error, _ = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), n(r);
      }
    }
    function a(r) {
      if (r === S) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Y)
        return "<...>";
      try {
        var o = e(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = N.A;
      return r === null ? null : r.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function h(r) {
      if ($.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function s(r, o) {
      function l() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: l,
        configurable: !0
      });
    }
    function u() {
      var r = e(this.type);
      return F[r] || (F[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function v(r, o, l, _, C, m, M, L) {
      return l = m.ref, r = {
        $$typeof: V,
        type: r,
        key: o,
        props: m,
        _owner: C
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: u
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
        value: M
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function E(r, o, l, _, C, m, M, L) {
      var d = o.children;
      if (d !== void 0)
        if (_)
          if (me(d)) {
            for (_ = 0; _ < d.length; _++)
              D(d[_]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else D(d);
      if ($.call(o, "key")) {
        d = e(r);
        var g = Object.keys(o).filter(function(pe) {
          return pe !== "key";
        });
        _ = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", H[d + _] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          d,
          g,
          d
        ), H[d + _] = !0);
      }
      if (d = null, l !== void 0 && (t(l), d = "" + l), h(o) && (t(o.key), d = "" + o.key), "key" in o) {
        l = {};
        for (var Z in o)
          Z !== "key" && (l[Z] = o[Z]);
      } else l = o;
      return d && s(
        l,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), v(
        r,
        d,
        m,
        C,
        i(),
        l,
        M,
        L
      );
    }
    function D(r) {
      typeof r == "object" && r !== null && r.$$typeof === V && r._store && (r._store.validated = 1);
    }
    var R = b, V = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), N = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, me = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var B, F = {}, z = R.react_stack_bottom_frame.bind(
      R,
      f
    )(), W = A(a(f)), H = {};
    w.Fragment = S, w.jsx = function(r, o, l, _, C) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return E(
        r,
        o,
        l,
        !1,
        _,
        C,
        m ? Error("react-stack-top-frame") : z,
        m ? A(a(r)) : W
      );
    }, w.jsxs = function(r, o, l, _, C) {
      var m = 1e4 > N.recentlyCreatedOwnerStacks++;
      return E(
        r,
        o,
        l,
        !0,
        _,
        C,
        m ? Error("react-stack-top-frame") : z,
        m ? A(a(r)) : W
      );
    };
  })()), w;
}
var J;
function we() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? O.exports = Ee() : O.exports = je()), O.exports;
}
var c = we(), re = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, q = b.createContext && /* @__PURE__ */ b.createContext(re), Re = ["attr", "size", "title"];
function Oe(e, n) {
  if (e == null) return {};
  var t = Pe(e, n), a, i;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(e);
    for (i = 0; i < f.length; i++)
      a = f[i], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
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
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, P.apply(this, arguments);
}
function X(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function k(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? X(Object(t), !0).forEach(function(a) {
      ke(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function ke(e, n, t) {
  return n = Te(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Te(e) {
  var n = Se(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Se(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function te(e) {
  return e && e.map((n, t) => /* @__PURE__ */ b.createElement(n.tag, k({
    key: t
  }, n.attr), te(n.child)));
}
function p(e) {
  return (n) => /* @__PURE__ */ b.createElement(Ne, P({
    attr: k({}, e.attr)
  }, n), te(e.child));
}
function Ne(e) {
  var n = (t) => {
    var {
      attr: a,
      size: i,
      title: f
    } = e, h = Oe(e, Re), s = i || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ b.createElement("svg", P({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, a, h, {
      className: u,
      style: k(k({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), f && /* @__PURE__ */ b.createElement("title", null, f), e.children);
  };
  return q !== void 0 ? /* @__PURE__ */ b.createElement(q.Consumer, null, (t) => n(t)) : n(re);
}
function Ae(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Me(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Le(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ie(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function De(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ve(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ye(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function $e(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Be(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
const K = [
  Le,
  Ze,
  Ie,
  De,
  Ve,
  Ye,
  $e,
  Be
];
function Fe() {
  const [e, n] = T(7);
  ee(() => {
    const a = setInterval(() => {
      n((i) => (i + 1) % K.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const t = K[e];
  return /* @__PURE__ */ c.jsx(t, { style: { margin: -8 }, size: 46 });
}
const ze = "_timer__wrapper_17tk4_1", I = {
  timer__wrapper: ze,
  "timer--last": "_timer--last_17tk4_33"
};
function We(e) {
  return e < 10;
}
function He({ start: e = 60, on_time_finished: n }) {
  const [t, a] = T(e);
  return ee(() => {
    const i = setInterval(() => {
      a((f) => f > 0 ? f - 1 : (n(), clearInterval(i), 0));
    }, 1e3);
    return () => {
      clearInterval(i);
    };
  }, []), /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `${I.timer__wrapper} ${We(t) ? I["timer--last"] : I["timer--normal"]}
		`,
      children: /* @__PURE__ */ c.jsx("span", { children: t })
    }
  );
}
const Ge = "_header_449xi_1", Ue = "_header__info_449xi_15", Je = "_form__pin_449xi_25", qe = "_form__btn_449xi_101", y = {
  header: Ge,
  header__info: Ue,
  form__pin: Je,
  form__btn: qe
};
function Q(e) {
  const n = [0, 1, 2, 3].map((t) => e.current[t].value);
  return n.map((t) => t.length > 0).every(Boolean) ? n.reduce((t, a) => `${t}${a}`) : !1;
}
function Xe() {
  const e = he([]), [n, t] = T(void 0), a = () => {
    console.log("Oops, you failed");
  }, i = (s, u) => {
    const v = u.target.value;
    s <= 2 && v.length === 1 && e.current[s + 1].focus();
    const E = Q(e);
    t(E || void 0);
  }, f = (s, u) => {
    const v = u.target.value;
    v.length > 0 && u.key === "Backspace" ? (e.current[s].value = null, Q(e) || t(void 0)) : s !== 0 && (u.key === "Backspace" || u.key === "ArrowLeft") ? e.current[s - 1].focus() : s !== 3 && u.key === "ArrowRight" ? e.current[s + 1].focus() : v.length === 1 && u.key.length == 1 && !u.ctrlKey && !u.metaKey && (e.current[s].value = String(u.key), u.preventDefault(), s < 3 && e.current[s + 1].focus());
  }, h = (s) => {
    s.preventDefault();
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { className: y.header, children: [
      /* @__PURE__ */ c.jsxs("div", { className: y.header__info, children: [
        /* @__PURE__ */ c.jsx("h3", { children: "Set the pin" }),
        /* @__PURE__ */ c.jsx("p", { children: "Prove yourself a human by changing a random pin" })
      ] }),
      /* @__PURE__ */ c.jsx(He, { start: 15, on_time_finished: a })
    ] }),
    /* @__PURE__ */ c.jsx("main", { className: y.main, children: /* @__PURE__ */ c.jsxs("form", { className: y.form, onSubmit: h, children: [
      /* @__PURE__ */ c.jsx("div", { className: y.form__pin, children: [0, 1, 2, 3].map((s) => /* @__PURE__ */ c.jsx(
        "input",
        {
          type: "number",
          placeholder: "x",
          onInput: i.bind(null, s),
          onKeyDown: f.bind(null, s),
          ref: (u) => e.current[s] = u
        },
        s
      )) }),
      /* @__PURE__ */ c.jsx("div", { className: y.form__btn, children: /* @__PURE__ */ c.jsx("button", { type: "submit", disabled: !n, children: "Submit" }) })
    ] }) })
  ] });
}
function Qe() {
  const [e, n] = T("initial"), t = () => {
    n((a) => a === "initial" ? "progress" : a);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: x.captcha__wrapper, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: x.captcha__btn,
        onClick: t,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: x.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ c.jsx("div", { className: x.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ c.jsx(Ae, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ c.jsx(
              Me,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ c.jsx(Fe, {}),
            /* @__PURE__ */ c.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: x.captcha__btn__footer, children: /* @__PURE__ */ c.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ c.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ c.jsx("div", { className: x.captcha__content, children: /* @__PURE__ */ c.jsx(Xe, {}) })
  ] });
}
export {
  Qe as Captcha
};
