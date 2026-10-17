//#region src/core/easing.ts
function e(e) {
	return e;
}
function t(e) {
	return e * e;
}
function n(e) {
	return e * (2 - e);
}
function r(e) {
	return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
}
function i(e) {
	return e * e * e;
}
function a(e) {
	return 1 + --e * e * e;
}
function o(e) {
	return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
}
function s(e) {
	return e === 1 ? 1 : 1 - Math.cos(e * Math.PI / 2);
}
function c(e) {
	return Math.sin(e * Math.PI / 2);
}
function l(e) {
	return e === 0 || e === .5 || e === 1 ? e : (1 - Math.cos(Math.PI * e)) / 2;
}
function u(e) {
	return e === 0 ? 0 : 2 ** (10 * e - 10);
}
function d(e) {
	return e === 1 ? 1 : 1 - 2 ** (-10 * e);
}
function f(e) {
	return e === 0 || e === 1 ? e : e < .5 ? 2 ** (20 * e - 10) / 2 : (2 - 2 ** (-20 * e + 10)) / 2;
}
function p(e) {
	return e ** 4;
}
function m(e) {
	return 1 - (1 - e) ** 4;
}
function h(e) {
	return e < .5 ? 8 * e ** 4 : 1 - (-2 * e + 2) ** 4 / 2;
}
function g(e) {
	return e ** 5;
}
function _(e) {
	return 1 - (1 - e) ** 5;
}
function v(e) {
	return e < .5 ? 16 * e ** 5 : 1 - (-2 * e + 2) ** 5 / 2;
}
function y(e) {
	return 1 - Math.sqrt(Math.max(0, 1 - e ** 2));
}
function b(e) {
	return Math.sqrt(Math.max(0, 1 - (e - 1) ** 2));
}
function x(e) {
	return e < .5 ? (1 - Math.sqrt(Math.max(0, 1 - (2 * e) ** 2))) / 2 : (Math.sqrt(Math.max(0, 1 - (-2 * e + 2) ** 2)) + 1) / 2;
}
function S(e) {
	return e === 0 || e === 1 ? e : 2.70158 * e ** 3 - 1.70158 * e ** 2;
}
function C(e) {
	return e === 0 || e === 1 ? e : 1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2;
}
function w(e) {
	if (e === 0 || e === 1) return e;
	let t = 2.5949095;
	return e < .5 ? (2 * e) ** 2 * (7.189819 * e - t) / 2 : ((2 * e - 2) ** 2 * (3.5949095 * (2 * e - 2) + t) + 2) / 2;
}
function ee(e) {
	return e === 0 || e === 1 ? e : -(2 ** (10 * e - 10)) * Math.sin((10 * e - 10.75) * (2 * Math.PI / 3));
}
function te(e) {
	return e === 0 || e === 1 ? e : 2 ** (-10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI / 3)) + 1;
}
function ne(e) {
	if (e === 0 || e === 1) return e;
	let t = Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5));
	return e < .5 ? -(2 ** (20 * e - 10) * t) / 2 : 2 ** (-20 * e + 10) * t / 2 + 1;
}
function re(e) {
	if (e === 0 || e === 1) return e;
	let t = 7.5625, n = 2.75;
	return e < 1 / n ? t * e * e : e < 2 / n ? t * (e - 1.5 / n) ** 2 + .75 : e < 2.5 / n ? t * (e - 2.25 / n) ** 2 + .9375 : t * (e - 2.625 / n) ** 2 + .984375;
}
function ie(e) {
	return e === 0 || e === 1 ? e : 1 - re(1 - e);
}
function ae(e) {
	return e === 0 || e === 1 ? e : e < .5 ? (1 - re(1 - 2 * e)) / 2 : (1 + re(2 * e - 1)) / 2;
}
function oe(e) {
	return e * e * (3 - 2 * e);
}
function se(e) {
	return e ** 3 * (e * (e * 6 - 15) + 10);
}
var ce = {
	linear: e,
	quadIn: t,
	quadOut: n,
	quadInOut: r,
	cubicIn: i,
	cubicOut: a,
	cubicInOut: o,
	quartIn: p,
	quartOut: m,
	quartInOut: h,
	quintIn: g,
	quintOut: _,
	quintInOut: v,
	sineIn: s,
	sineOut: c,
	sineInOut: l,
	expoIn: u,
	expoOut: d,
	expoInOut: f,
	circIn: y,
	circOut: b,
	circInOut: x,
	backIn: S,
	backOut: C,
	backInOut: w,
	elasticIn: ee,
	elasticOut: te,
	elasticInOut: ne,
	bounceIn: ie,
	bounceOut: re,
	bounceInOut: ae,
	smoothStep: oe,
	smootherStep: se
};
function le(e, t) {
	let [n = 0, r = 0, i = 1, a = 1] = t, o = pe(e), s = o;
	for (let e = 0; e < 8; e += 1) {
		let e = de(s, 0, n, i, 1) - o, t = fe(s, 0, n, i, 1);
		if (Math.abs(e) < 1e-5 || Math.abs(t) < 1e-5) break;
		s = pe(s - e / t);
	}
	let c = 0, l = 1;
	for (let e = 0; e < 12; e += 1) {
		let e = de(s, 0, n, i, 1);
		if (Math.abs(e - o) < 1e-5) break;
		e < o ? c = s : l = s, s = (c + l) / 2;
	}
	return de(s, 0, r, a, 1);
}
function ue(e, t, n) {
	let r = pe(t);
	return e === "step" ? 0 : e === "bezier" ? le(r, n ?? [
		.25,
		.1,
		.25,
		1
	]) : ce[e]?.(r) ?? r;
}
function de(e, t, n, r, i) {
	let a = 1 - e;
	return a ** 3 * t + 3 * a ** 2 * e * n + 3 * a * e ** 2 * r + e ** 3 * i;
}
function fe(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a ** 2 * (n - t) + 6 * a * e * (r - n) + 3 * e ** 2 * (i - r);
}
function pe(e) {
	return Math.max(0, Math.min(1, e));
}
//#endregion
//#region src/core/keyframes.ts
function me(e, t, n) {
	if (!t || t.length === 0) return e.value;
	let r = [...t].sort((e, t) => e.frame - t.frame), i = ge(r, n), a = _e(r, n);
	if (!i) return r[0].value;
	if (!a || i.frame === a.frame || !ve(e)) return i.value;
	let o = ue(e.type === "color" && i.easing === "step" ? "linear" : i.easing, (n - i.frame) / (a.frame - i.frame), i.bezier);
	return T(e, i.value, a.value, o);
}
function he(e, t, n) {
	return Object.fromEntries(Object.entries(e).map(([e, r]) => [e, me(r, t?.[e], n)]));
}
function ge(e, t) {
	return [...e].reverse().find((e) => e.frame <= t);
}
function _e(e, t) {
	return e.find((e) => e.frame > t);
}
function T(e, t, n, r) {
	return e.type === "number" ? xe(Number(t), Number(n), r) : (e.type === "vec2" || e.type === "vec3") && Array.isArray(t) && Array.isArray(n) ? t.map((e, t) => xe(Number(e), Number(n[t] ?? e), r)) : e.type === "color" && typeof t == "string" && typeof n == "string" ? ye(t, n, r) : t;
}
function ve(e) {
	return e.type === "color" || !!e.interpolable;
}
function ye(e, t, n) {
	let r = be(e), i = be(t);
	return !r || !i ? e : `#${r.map((e, t) => Math.max(0, Math.min(255, Math.round(xe(e, i[t], n)))).toString(16).padStart(2, "0")).join("")}`;
}
function be(e) {
	let t = e.match(/^#([0-9a-fA-F]{6})$/);
	if (!t) return null;
	let n = t[1];
	return [
		Number.parseInt(n.slice(0, 2), 16),
		Number.parseInt(n.slice(2, 4), 16),
		Number.parseInt(n.slice(4, 6), 16)
	];
}
function xe(e, t, n) {
	return e + (t - e) * n;
}
//#endregion
//#region src/core/feedbackContracts.ts
var E = Object.freeze({
	maxAssetBytes: 16777216,
	maxProjectBytes: 67108864,
	maxAssets: 64,
	maxChannels: 32,
	maxRecords: 5e5,
	maxDurationUs: 36e8,
	maxStringBytes: 1024,
	maxRecordBytes: 16384,
	maxArgs: 16,
	maxValue: 1e9,
	maxEventsPerTick: 4096,
	maxLoopBoundariesPerTick: 16,
	maxPointerHz: 120,
	maxOscMessagesPerSecond: 1e3,
	maxPageRecords: 1e3,
	maxPageBytes: 1048576,
	maxResourceCloneBytes: 67108864,
	maxJsonDepth: 32
}), Se = Object.freeze({
	offset: 0,
	rate: 1,
	loop: !1
}), D = class extends Error {
	code;
	assetId;
	channelId;
	constructor(e, t, n = {}) {
		super(`Feedback: ${t}`), this.name = "FeedbackError", this.code = e, this.assetId = n.assetId, this.channelId = n.channelId;
	}
};
function Ce(e) {
	return e.kind === "pointer" || e.kind === "number" || e.kind === "osc";
}
//#endregion
//#region src/core/feedbackValidation.ts
var we = new TextEncoder(), Te = /* @__PURE__ */ new Set([
	"move",
	"down",
	"up",
	"enter",
	"leave",
	"cancel",
	"click",
	"double-click",
	"wheel"
]), Ee = /* @__PURE__ */ new Set([
	"composition",
	"normalized",
	"clip"
]), De = /* @__PURE__ */ new Set([
	"__proto__",
	"prototype",
	"constructor"
]);
function O(e, t) {
	throw new D(e, t);
}
function Oe(e, t) {
	return (!e || typeof e != "object" || Array.isArray(e)) && O("invalid-format", `${t} must be an object.`), e;
}
function ke(e, t, n) {
	Object.keys(e).some((e) => !t.includes(e)) && O("invalid-format", `${n} contains an unknown field.`);
}
function Ae(e, t) {
	(typeof e != "string" || !e.trim() || e.includes("\0") || we.encode(e).length > E.maxStringBytes) && O("invalid-value", `${t} must be a non-empty string of at most ${E.maxStringBytes} UTF-8 bytes.`);
}
function je(e, t) {
	(typeof e != "number" || !Number.isFinite(e) || Math.abs(e) > E.maxValue) && O("invalid-value", `${t} is out of range.`);
}
function Me(e, t, n, r) {
	(typeof e != "number" || !Number.isSafeInteger(e) || e < t || e > n) && O("invalid-time", `${r} must be an integer in range.`);
}
function Ne(e, t) {
	je(e.x, `${t}.x`), je(e.y, `${t}.y`), (typeof e.buttons != "number" || !Number.isInteger(e.buttons) || e.buttons < 0 || e.buttons > 31 || typeof e.inside != "boolean") && O("invalid-value", `${t} has invalid buttons/inside.`);
}
function Pe(e) {
	return Array.isArray(e) ? ((!e.length || e.length > E.maxArgs) && O("invalid-value", "Numeric vectors require 1..16 values."), e.forEach((e) => je(e, "Numeric vector value")), e) : (je(e, "Numeric value"), e);
}
function Fe(e, t = E.maxAssetBytes) {
	let n = 0, r = /* @__PURE__ */ new Set(), i = (e) => {
		n += e, n > t && O("size-limit", `JSON exceeds ${t} bytes.`);
	}, a = (e) => {
		e.length > t - n && O("size-limit", `JSON exceeds ${t} bytes.`), i(we.encode(JSON.stringify(e)).length);
	}, o = (e, t) => {
		if (t > E.maxJsonDepth && O("size-limit", "JSON nesting is too deep."), e === null) {
			i(4);
			return;
		}
		if (typeof e == "string") {
			a(e);
			return;
		}
		if (typeof e == "boolean") {
			i(e ? 4 : 5);
			return;
		}
		if (typeof e == "number" && Number.isFinite(e)) {
			i(JSON.stringify(e).length);
			return;
		}
		(!e || typeof e != "object") && O("invalid-format", "Expected finite, plain JSON data."), r.has(e) && O("invalid-format", "JSON contains a cycle.");
		let n = Object.getPrototypeOf(e);
		if ((Array.isArray(e) ? n !== Array.prototype : n !== Object.prototype && n !== null) && O("invalid-format", "JSON must use plain objects/arrays."), Object.getOwnPropertySymbols(e).length && O("invalid-format", "JSON cannot contain symbol keys."), r.add(e), i(2), Array.isArray(e)) {
			e.length > E.maxRecords && O("size-limit", "JSON array exceeds the record limit."), Object.getOwnPropertyNames(e).length !== e.length + 1 && O("invalid-format", "JSON arrays cannot have holes or extra properties.");
			for (let n = 0; n < e.length; n++) {
				n && i(1);
				let r = Object.getOwnPropertyDescriptor(e, String(n));
				(!r || !r.enumerable || !("value" in r)) && O("invalid-format", "JSON cannot contain accessors or sparse arrays."), o(r.value, t + 1);
			}
		} else Object.getOwnPropertyNames(e).forEach((n, r) => {
			De.has(n) && O("invalid-format", "JSON contains a reserved object key.");
			let s = Object.getOwnPropertyDescriptor(e, n);
			(!s.enumerable || !("value" in s)) && O("invalid-format", "JSON cannot contain accessors or hidden fields."), r && i(1), a(n), i(1), o(s.value, t + 1);
		});
		r.delete(e);
	};
	return o(e, 0), n;
}
function Ie(e) {
	return e && typeof e == "object" && (Object.values(e).forEach(Ie), Object.freeze(e)), e;
}
function Le(e) {
	let t = Fe(e), n = Oe(e, "Feedback document");
	ke(n, [
		"formatVersion",
		"timeUnit",
		"durationUs",
		"source",
		"channels"
	], "Feedback document"), n.formatVersion !== 1 && O("unsupported-version", "Only Feedback formatVersion 1 is supported."), n.timeUnit !== "us" && O("invalid-time", "Feedback timeUnit must be us."), Me(n.durationUs, 0, E.maxDurationUs, "durationUs");
	let r = n.durationUs, i = Oe(n.source, "source");
	ke(i, [
		"compositionId",
		"width",
		"height"
	], "source"), je(i.width, "source.width"), je(i.height, "source.height"), (i.width < 1 || i.height < 1) && O("invalid-value", "Source dimensions must be at least one logical pixel."), i.compositionId !== void 0 && Ae(i.compositionId, "source.compositionId"), Array.isArray(n.channels) || O("invalid-format", "Feedback requires a channels array."), n.channels.length > E.maxChannels && O("size-limit", "Feedback requires at most 32 channels.");
	let a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = [], c = 0, l = n.channels.map((e) => {
		let t = Oe(e, "channel");
		Ae(t.id, "channel.id"), Ae(t.kind, "channel.kind"), a.has(t.id) && O("invalid-format", `Duplicate channel ${t.id}.`), a.add(t.id);
		let n = [
			"pointer",
			"number",
			"osc"
		].includes(t.kind);
		if (!n) return t.records !== void 0 && !Array.isArray(t.records) && O("invalid-format", `Unknown channel ${t.id} has invalid records.`), c += Array.isArray(t.records) ? t.records.length : 0, Array.isArray(t.records) && t.records.forEach((e) => Fe(e, E.maxRecordBytes)), c > E.maxRecords && O("size-limit", "Feedback exceeds 500,000 records."), s.push({
			code: "unsupported-channel",
			channelId: t.id,
			message: `Channel ${t.id} (${t.kind}) is retained but cannot be used.`
		}), {
			id: t.id,
			kind: t.kind,
			supported: n,
			records: Array.isArray(t.records) ? t.records.length : 0
		};
		ke(t, t.kind === "pointer" ? [
			"id",
			"kind",
			"initial",
			"records"
		] : t.kind === "number" ? [
			"id",
			"kind",
			"interpolation",
			"initial",
			"records"
		] : [
			"id",
			"kind",
			"address",
			"records"
		], `Channel ${t.id}`), Array.isArray(t.records) || O("invalid-format", `Channel ${t.id} requires records.`), c += t.records.length, c > E.maxRecords && O("size-limit", "Feedback exceeds 500,000 records.");
		let i = -1;
		if (t.kind === "pointer") {
			let e = Oe(t.initial, "pointer.initial");
			ke(e, [
				"x",
				"y",
				"buttons",
				"inside"
			], "pointer.initial"), Ne(e, "pointer.initial");
		} else if (t.kind === "number") {
			t.interpolation !== "linear" && t.interpolation !== "hold" && O("invalid-value", "Numeric interpolation must be linear or hold.");
			let e = Pe(t.initial);
			i = Array.isArray(e) ? e.length : -1;
		} else Ae(t.address, "OSC address"), t.address.startsWith("/") || O("invalid-value", "OSC address must start with /.");
		let l = -1, u = -1;
		for (let e of t.records) {
			let n = Oe(e, `Channel ${t.id} record`);
			if (Fe(n, E.maxRecordBytes), Me(n.t, 0, r, `Channel ${t.id} time`), Me(n.seq, 0, 2 ** 53 - 1, `Channel ${t.id} seq`), (n.t < l || n.seq <= u || o.has(n.seq)) && O("invalid-time", `Channel ${t.id} has unordered or duplicate records.`), o.add(n.seq), l = n.t, u = n.seq, t.kind === "pointer") {
				ke(n, [
					"t",
					"seq",
					"x",
					"y",
					"buttons",
					"inside",
					"event",
					"button",
					"deltaX",
					"deltaY"
				], "pointer record"), Ne(n, "pointer record"), n.event !== null && (typeof n.event != "string" || !Te.has(n.event)) && O("invalid-value", "Invalid pointer event.");
				let e = [
					"down",
					"up",
					"click",
					"double-click"
				].includes(String(n.event));
				(e || n.button !== void 0) && (typeof n.button != "number" || !Number.isInteger(n.button) || n.button < 0 || n.button > 4) && O("invalid-value", "Invalid pointer button."), !e && n.button !== void 0 && O("invalid-value", "Only button events may contain button."), (n.event === "down" && !(n.buttons & [
					1,
					4,
					2,
					8,
					16
				][n.button]) || n.event === "up" && n.buttons & [
					1,
					4,
					2,
					8,
					16
				][n.button] || n.event === "cancel" && n.buttons !== 0 || n.event === "enter" && n.inside !== !0 || n.event === "leave" && n.inside !== !1) && O("invalid-value", "Pointer event/state disagree."), n.event === "wheel" ? (je(n.deltaX, "deltaX"), je(n.deltaY, "deltaY")) : (n.deltaX !== void 0 || n.deltaY !== void 0) && O("invalid-value", "Only wheel events may contain deltas.");
			} else if (t.kind === "number") {
				ke(n, [
					"t",
					"seq",
					"value"
				], "number record");
				let e = Pe(n.value);
				(Array.isArray(e) ? e.length : -1) !== i && O("invalid-value", "Numeric values must have a fixed shape.");
			} else {
				ke(n, [
					"t",
					"seq",
					"args"
				], "OSC record"), (!Array.isArray(n.args) || n.args.length > E.maxArgs) && O("invalid-value", "OSC requires at most 16 args.");
				for (let e of n.args) typeof e == "number" ? je(e, "OSC arg") : typeof e == "string" ? (e.includes("\0") || we.encode(e).length > E.maxStringBytes) && O("invalid-value", "OSC string is too large or contains NUL.") : typeof e != "boolean" && O("invalid-value", "OSC args must be numbers, strings or booleans.");
			}
		}
		return {
			id: t.id,
			kind: t.kind,
			supported: n,
			records: t.records.length
		};
	});
	return Ie({
		document: JSON.parse(JSON.stringify(e)),
		summary: {
			bytes: t,
			duration: n.durationUs / 1e6,
			records: c,
			channels: l
		},
		warnings: s
	});
}
function Re(e = Se, t) {
	let n = Oe(e, "mapping");
	ke(n, [
		"offset",
		"rate",
		"loop"
	], "mapping"), (typeof n.offset != "number" || !Number.isFinite(n.offset) || Math.abs(n.offset) > 3600 || typeof n.rate != "number" || !Number.isFinite(n.rate) || Math.abs(n.rate) > 16 || typeof n.loop != "boolean") && O("invalid-time", "Mapping requires offset (-3600..3600), rate (-16..16), and loop."), n.loop && t && (t.durationUs || O("invalid-time", "Cannot loop an empty Feedback duration."), t.channels.some((e) => Ce(e) && e.records.some((n) => n.t === t.durationUs && (e.kind === "osc" || e.kind === "pointer" && "event" in n && n.event !== null))) && O("invalid-time", "Looping Feedback cannot contain an event at its exact endpoint."));
}
function ze(e, t, n) {
	Fe(e, E.maxRecordBytes);
	let r = Oe(e, "Clip binding");
	ke(r, [
		"assetId",
		"pointerChannelId",
		"space",
		"offset",
		"rate",
		"loop"
	], "Clip binding"), Ae(r.assetId, "binding.assetId"), Ee.has(String(r.space)) || O("invalid-value", "Unknown Feedback coordinate space.");
	let i = t.find((e) => e.id === r.assetId);
	if ((!i || i.kind !== "feedback") && O("missing-asset", `Binding asset ${r.assetId} is not Feedback.`), Re({
		offset: r.offset,
		rate: r.rate,
		loop: r.loop
	}, i.recording), r.pointerChannelId !== void 0) {
		Ae(r.pointerChannelId, "binding.pointerChannelId");
		let e = i.recording.channels.find((e) => e.id === r.pointerChannelId);
		e || O("missing-channel", `Pointer channel ${r.pointerChannelId} is missing.`), e.kind !== "pointer" && O("unsupported-channel", `Channel ${r.pointerChannelId} is not pointer input.`);
	}
	n === "isolated-replay" && O("unsupported-playback", "Feedback input in isolated replay requires P4.");
}
function Be(e) {
	let t = 0, n = 0;
	for (let r of e) if (r.kind === "feedback") {
		++t > E.maxAssets && O("size-limit", "Project exceeds 64 Feedback assets."), Ae(r.id, "Feedback asset ID"), Ae(r.name, "Feedback asset name"), (typeof r.detail != "string" || we.encode(r.detail).length > E.maxStringBytes) && O("invalid-value", "Feedback detail must be at most 1024 UTF-8 bytes.");
		try {
			n += Le(r.recording).summary.bytes;
		} catch (e) {
			throw e instanceof D ? new D(e.code, `Asset ${r.name}: ${e.message}`, {
				assetId: r.id,
				channelId: e.channelId
			}) : e;
		}
		n > E.maxProjectBytes && O("size-limit", "Project Feedback exceeds 64 MiB.");
	}
	let r = (t) => {
		t.feedback !== void 0 && ze(t.feedback, e, t.p5Playback);
	};
	for (let t of e) if (t.kind === "html-clip" && r(t.htmlTemplate), t.kind === "composition") {
		for (let e of t.composition.layers) if (e && Array.isArray(e.clips)) for (let t of e.clips) t?.kind === "html" && r(t);
	}
}
//#endregion
//#region src/core/feedbackSampling.ts
function Ve(e) {
	let t = Math.round(e * 1e6);
	if (!Number.isFinite(e) || !Number.isSafeInteger(t)) throw new D("invalid-time", "Time must be finite seconds within the safe microsecond range.");
	return t;
}
function He(e, t, n = Se) {
	if (Re(n), !Number.isFinite(e)) throw new D("invalid-time", "Clip-local time must be finite seconds.");
	if (!Number.isSafeInteger(t) || t < 0 || t > E.maxDurationUs) throw new D("invalid-time", "Invalid Feedback duration.");
	let r = Ve(e * n.rate + n.offset);
	if (n.loop) {
		if (!t) throw new D("invalid-time", "Cannot loop an empty Feedback duration.");
		return (r % t + t) % t;
	}
	return Math.min(t, Math.max(0, r));
}
function Ue(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = Math.floor((n + r) / 2);
		e[i].t <= t ? n = i + 1 : r = i;
	}
	return n;
}
function We(e) {
	let t = Le(e), n = t.document, r = n.channels.some((e) => Ce(e) && e.records.some((t) => t.t === n.durationUs && (e.kind === "osc" || e.kind === "pointer" && "event" in t && t.event !== null))), i = new Map(n.channels.map((e) => [e.id, e])), a = (e) => {
		let t = i.get(e);
		if (!t) throw new D("missing-channel", `Channel ${e} is missing.`, { channelId: e });
		if (!Ce(t)) throw new D("unsupported-channel", `Channel ${e} (${t.kind}) cannot be read.`, { channelId: e });
		return t;
	}, o = (e, t) => {
		let r = e.space ?? "composition";
		if (r === "composition") return [1, 1];
		if (r === "normalized") return [1 / n.source.width, 1 / n.source.height];
		if (r !== "clip" || !t || ![t.clipWidth, t.clipHeight].every((e) => Number.isFinite(e) && e > 0 && e <= E.maxValue)) throw new D("invalid-value", "Clip space requires positive logical Clip dimensions.");
		return [t.clipWidth / n.source.width, t.clipHeight / n.source.height];
	}, s = (e, t, n) => {
		let [r, i] = o(t, n);
		return {
			kind: "pointer",
			x: e.x * r,
			y: e.y * i,
			buttons: e.buttons,
			inside: e.inside
		};
	}, c = (e, t, n = {}, r) => {
		let i = a(e);
		if (i.kind !== "pointer" && n.space !== void 0) throw new D("invalid-value", "Only pointer channels accept a coordinate space.");
		let o = Ue(i.records, t) - 1;
		if (i.kind === "osc") {
			let e = i.records[o];
			return e ? {
				kind: "osc",
				address: i.address,
				args: [...e.args]
			} : null;
		}
		let c = i.records[o], l = i.records[o + 1], u = l ? Math.max(0, Math.min(1, (t - (c?.t ?? 0)) / Math.max(1, l.t - (c?.t ?? 0)))) : 0;
		if (i.kind === "pointer") {
			let e = i.records[o] ?? i.initial, t = i.records[o + 1], a = t && e.inside && t.inside && t.event !== "cancel" && !("event" in e && e.event === "cancel");
			return s({
				...e,
				x: a ? e.x + (t.x - e.x) * u : e.x,
				y: a ? e.y + (t.y - e.y) * u : e.y
			}, n, r);
		}
		let d = i.records[o]?.value ?? i.initial, f = i.records[o + 1]?.value, p = (e, t) => i.interpolation === "linear" ? e + (t - e) * u : e;
		return {
			kind: "number",
			value: Array.isArray(d) ? d.map((e, t) => f === void 0 ? e : p(e, f[t])) : f === void 0 ? d : p(d, f)
		};
	};
	return {
		document: n,
		summary: t.summary,
		warnings: t.warnings,
		validateMapping(e) {
			if (Re(e), e.loop && (!n.durationUs || r)) throw new D("invalid-time", "Cannot loop empty Feedback or an endpoint event.");
		},
		at(e, t, r = {}, i) {
			return c(e, Math.min(n.durationUs, Math.max(0, Ve(t))), r, i);
		},
		sample(e, t, i = Se, a = {}, o) {
			if (Re(i), i.loop && r) throw new D("invalid-time", "Looping Feedback cannot contain an event at its exact endpoint.");
			return c(e, He(t, n.durationUs, i), a, o);
		},
		events(e, t, n, r = {}, i) {
			if (t > n) throw new D("invalid-time", "Event range must be ascending.");
			let c = Ve(t), l = Ve(n), u = a(e);
			if (u.kind !== "pointer" && r.space !== void 0) throw new D("invalid-value", "Only pointer channels accept a coordinate space.");
			u.kind === "pointer" && o(r, i);
			let d = [];
			if (u.kind === "number") return d;
			let f = Ue(u.records, c), p = Ue(u.records, l);
			for (let t = f; t < p; t++) {
				let n = u.records[t];
				if (u.kind === "pointer") {
					let n = u.records[t];
					if (n.event === null) continue;
					let [a, c] = o(r, i);
					d.push({
						...s(n, r, i),
						channelId: e,
						time: n.t / 1e6,
						seq: n.seq,
						event: n.event,
						...n.button === void 0 ? {} : { button: n.button },
						...n.deltaX === void 0 ? {} : { deltaX: n.deltaX * a },
						...n.deltaY === void 0 ? {} : { deltaY: n.deltaY * c }
					});
				} else d.push({
					kind: "osc",
					channelId: e,
					time: n.t / 1e6,
					seq: n.seq,
					address: u.address,
					args: [...u.records[t].args]
				});
				if (d.length > E.maxEventsPerTick) throw new D("event-budget", `Channel ${e} exceeds the event limit; request a smaller interval.`, { channelId: e });
			}
			return d;
		}
	};
}
//#endregion
//#region src/core/feedbackDelivery.ts
function Ge(e, t) {
	if (!Number.isSafeInteger(e) || e < 1) throw new D("invalid-time", `Invalid ${t}.`);
	return e;
}
function Ke(e) {
	if (!e || Object.getPrototypeOf(e) !== Object.prototype) throw new D("invalid-format", "Invalid input delivery context.");
	if (Object.getOwnPropertySymbols(e).length) throw new D("invalid-format", "Invalid input delivery symbol field.");
	let t = [
		"transportEpoch",
		"deliveryId",
		"mode",
		"previousLocalTime"
	];
	for (let [n, r] of Object.entries(Object.getOwnPropertyDescriptors(e))) if (!t.includes(n) || !r.enumerable || !("value" in r)) throw new D("invalid-format", "Invalid input delivery field.");
	if (Ge(e.transportEpoch, "transport epoch"), Ge(e.deliveryId, "delivery ID"), e.mode === "historical") throw new D("unsupported-playback", "Historical input delivery requires P4.");
	if (!["sample-only", "continuous"].includes(e.mode)) throw new D("invalid-value", "Invalid input delivery mode.");
	if (e.previousLocalTime !== void 0 && Ve(e.previousLocalTime), e.mode === "continuous" && e.previousLocalTime === void 0) throw new D("invalid-time", "Continuous input requires a previous local time.");
}
function qe() {
	let e = 1, t = 0, n, r, i, a = () => {
		e = Ge(e + 1, "transport epoch"), t = 0, n = void 0, r = void 0, i = void 0;
	};
	return {
		reset: a,
		visit(o, s = {}, c) {
			Ve(o);
			let l = s.inputDelivery ?? "sample-only";
			if (!["sample-only", "playback"].includes(l)) throw new D("invalid-value", "Invalid host playback intent.");
			if (c && a(), i && o === n && l === r) return i;
			let u = !c && l === "playback" && r === "sample-only" && n !== void 0 && o > n;
			n !== void 0 && !u && (l !== r || l !== "playback" || o < n) && a();
			let d = l === "playback" && (r === "playback" || u) && n !== void 0 && o > n, f = Object.freeze({
				transportEpoch: e,
				deliveryId: t = Ge(t + 1, "delivery ID"),
				mode: d ? "continuous" : "sample-only",
				...d ? { previousLocalTime: n } : {}
			});
			return n = o, r = l, i = f, f;
		}
	};
}
//#endregion
//#region src/core/composition.ts
var Je = performance.now();
function Ye(e, t, n, r = {}, i = {}) {
	if (!Number.isFinite(t.frame) || t.frame < e.inFrame || t.frame >= e.outFrame) return i.feedback?.forClip(e, null), null;
	let a = t.frame - e.inFrame, o = typeof n == "number" ? n : n.bpm, s = Math.max(1, e.outFrame - e.inFrame), c = i.exportMode ? t.frame / t.fps : (performance.now() - Je) / 1e3, l = Math.max(1, t.fps * 60 / Math.max(1, o)), u = l * 4, d = Math.floor(t.frame / u) + 1, f = Math.floor(t.frame % u / l) + 1, p = {
		type: "macroflush:tick",
		clipId: e.id,
		fps: t.fps,
		...typeof n == "number" ? {} : {
			compositionWidth: n.width,
			compositionHeight: n.height
		},
		frame: a,
		time: a / t.fps,
		progress: a / s,
		compTime: t.frame / t.fps,
		compFrame: t.frame,
		appRuntime: c,
		runFrame: i.exportMode ? t.frame : Math.floor(c * t.fps),
		bar: d,
		beat: f,
		params: he(e.params ?? {}, e.keyframeTracks, a),
		compositionParams: r,
		...i.exportMode ? {
			exportMode: !0,
			exportFrameId: i.exportFrameId
		} : {}
	}, m = i.feedback?.forClip(e, p);
	if (m) {
		if (Ke(m), !["playback", "sample-only"].includes(i.feedback.inputDelivery) || i.feedback.inputDelivery === "sample-only" && m.mode === "continuous") throw new D("invalid-value", "Inconsistent tick input intent.");
		p.feedbackDelivery = Object.freeze({ ...m }), p.feedbackInputIntent = i.feedback.inputDelivery;
	}
	return p;
}
function Xe(e, t) {
	let n = Ze(e.size, t), r = [Math.max(1, n[0]), Math.max(1, n[1])];
	return {
		opacity: Qe(e.opacity, 1, 0, 1),
		position: Ze(e.position, [0, 0]),
		scale: Ze(e.scale, [1, 1]),
		size: r,
		anchorPoint: Ze(e.anchorPoint, [r[0] / 2, r[1] / 2]),
		rotation: Qe(e.rotation, 0),
		blendMode: String(e.blendMode ?? "normal")
	};
}
function Ze(e, t) {
	return Array.isArray(e) && e.length >= 2 ? [Qe(e[0], t[0]), Qe(e[1], t[1])] : t;
}
function Qe(e, t, n = -Infinity, r = Infinity) {
	let i = Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, i)) : t;
}
//#endregion
//#region src/core/timeline.ts
function $e(e, t, n, r = {}, i = {}) {
	return Ye(e, t, n, r, i);
}
function et(e, t, n, r) {
	if (!n) return !1;
	let i = new Map(e.flatMap((e) => e.clips.map((e) => [e.id, e]))), a = /* @__PURE__ */ new Set(), o = n, s = 0;
	for (; o;) {
		if (s++ >= 64 || o === t || a.has(o)) return !0;
		a.add(o);
		let e = i.get(o);
		o = r === "instanceOfClipId" && e?.kind === "html" ? e.instanceOfClipId : r === "maskClipId" ? e?.maskClipId : void 0;
	}
	return !1;
}
function tt(e, t, n) {
	return et(e, t, n, "maskClipId");
}
function nt(e, t, n) {
	return et(e, t, n, "instanceOfClipId");
}
//#endregion
//#region src/core/canvasComposite.ts
var rt = {
	normal: "source-over",
	add: "lighter",
	multiply: "multiply",
	screen: "screen",
	overlay: "overlay",
	lighten: "lighten",
	darken: "darken"
};
function it(e, t, n, r, i, a) {
	let { position: o, scale: s, size: c, anchorPoint: l, opacity: u, rotation: d } = Xe(r, i), f = Math.PI / 180 * d, p = rt[String(r.blendMode)] ?? "source-over";
	return e.save(), e.globalAlpha = u, e.globalCompositeOperation = a ?? p, e.translate(t.width / 2, t.height / 2), e.scale(t.width / n.width, t.height / n.height), e.translate(o[0], o[1]), e.scale(s[0], s[1]), e.rotate(f), e.translate(-l[0], -l[1]), c;
}
function at(e, t, n, r) {
	let [i, a] = n, [o, s] = r, c = i / a, l = o / s, u = c > l ? a * l : i, d = c > l ? a : i / l, f = (i - u) / 2, p = (a - d) / 2;
	e.drawImage(t, f, p, u, d, 0, 0, o, s);
}
//#endregion
//#region src/core/effectLayers.ts
function ot(e) {
	let t = new Map(e.map((e) => [e.id, e]));
	if (t.size !== e.length) throw Error("Duplicate layer identity.");
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.effectMembers !== void 0 && (!Array.isArray(r.effectMembers) || !r.effectMembers.every((e) => typeof e == "string"))) throw Error("Effect membership must be an array of layer IDs.");
		if (r.effectInputMode !== void 0 && (r.kind !== "effect" || !["selected", "below"].includes(r.effectInputMode))) throw Error("Invalid Effect input mode.");
		if (r.kind !== "effect") {
			if (r.effectMembers?.length) throw Error("Only Effect layers can own inputs.");
			if (r.clips.some((e) => e.kind === "shader")) throw Error("Shader clips require an Effect layer.");
			continue;
		}
		if (r.clips.some((e) => e.kind !== "shader")) throw Error("Effect layers accept only Shader clips.");
		if (r.effectInputMode !== "below") for (let e of r.effectMembers ?? []) {
			if (!t.has(e)) throw Error(`Effect input layer is missing: ${e}`);
			if (t.get(e).kind === "wgsl") throw Error("WGSL inputs are not supported by GLSL Effect layers.");
			if (e === r.id || n.has(e)) throw Error("Effect input must have exactly one owner and cannot own itself.");
			n.set(e, r.id);
		}
	}
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = (e, n = 0) => {
		if (n >= 64) throw Error("Effect layer depth limit.");
		if (i.has(e)) throw Error("Effect layer cycle.");
		if (r.has(e)) return a.get(e);
		i.add(e);
		let s = 0, c = t.get(e);
		for (let e of c.effectInputMode === "below" ? [] : c.effectMembers ?? []) s = Math.max(s, o(e, n + 1));
		let l = 1 + s;
		if (l >= 64) throw Error("Effect layer depth limit.");
		return i.delete(e), r.add(e), a.set(e, l), l;
	};
	for (let t of e) o(t.id);
	let s = [...e].reverse();
	return {
		owners: n,
		roots: s.filter((e) => !n.has(e.id)),
		inputs: (e) => s.filter((t) => n.get(t.id) === e.id)
	};
}
//#endregion
//#region src/core/shaderLanguage.ts
var st = /* @__PURE__ */ new WeakMap();
function ct(e) {
	if (typeof e != "string") {
		let t = st.get(e);
		if (t) return t;
		let n = e.pipeline ? { label: "Multipass" } : ct(e.fragmentShader);
		return st.set(e, n), n;
	}
	let t = e.replace(/\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/g, (e) => e.replace(/[^\r\n]/g, " ")), n = /^[\t ]*#[\t ]*version\b([^\r\n]*)/m.exec(t);
	if (!n) return {
		version: 100,
		label: "GLSL ES 1.00"
	};
	let r = n[1].trim();
	return r === "100" ? {
		version: 100,
		label: "GLSL ES 1.00",
		directive: r
	} : /^300\s+es$/.test(r) ? {
		version: 300,
		label: "GLSL ES 3.00",
		directive: r
	} : {
		label: "Unsupported GLSL version",
		directive: r
	};
}
var lt = {
	100: "attribute vec2 position; varying vec2 vUv; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,(1.-position.y)*.5); }",
	300: "#version 300 es\nin vec2 position; out vec2 vUv; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,(1.-position.y)*.5); }"
}, ut = {
	100: "attribute vec2 position; varying vec2 vUv; uniform float mfRenderToTexture; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,.5+position.y*(mfRenderToTexture-.5)); }",
	300: "#version 300 es\nin vec2 position; out vec2 vUv; uniform float mfRenderToTexture; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,.5+position.y*(mfRenderToTexture-.5)); }"
}, dt = /^[A-Za-z_]\w*$/, ft = (e) => typeof e == "object" && !!e && !Array.isArray(e), pt = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function mt(e) {
	if (!ft(e)) throw Error("Shader source is required.");
	let t = pt(e, "fragmentShader");
	if (t === pt(e, "pipeline")) throw Error("Shader source requires exactly one of fragmentShader or pipeline.");
	if (t) {
		if (typeof e.fragmentShader != "string") throw Error("Shader fragment source is required.");
		return;
	}
	let n = e.pipeline;
	if (!ft(n) || n.version !== 1) throw Error("Unsupported shader pipeline version.");
	if (!Array.isArray(n.passes) || n.passes.length < 1 || n.passes.length > 8) throw Error("Shader pipeline requires 1-8 passes.");
	let r = /* @__PURE__ */ new Set();
	for (let e of n.passes) {
		if (!ft(e) || typeof e.id != "string" || !dt.test(e.id) || e.id.startsWith("gl_") || r.has(e.id)) throw Error("Shader pass IDs must be unique identifiers.");
		if (typeof e.name != "string" || !e.name.trim()) throw Error(`Shader pass ${e.id} requires a name.`);
		if (typeof e.fragmentShader != "string") throw Error(`Shader pass ${e.id} requires fragment source.`);
		if (!ct(e).version) throw Error(`Shader pass ${e.id} uses an unsupported GLSL version.`);
		if (![
			1,
			.5,
			.25
		].includes(e.scale)) throw Error(`Shader pass ${e.id} has an unsupported scale.`);
		if (!ft(e.inputs) || !pt(e.inputs, "inputTexture")) throw Error(`Shader pass ${e.id} requires inputTexture binding.`);
		let t = Object.entries(e.inputs);
		if (t.length > 4) throw Error(`Shader pass ${e.id} exceeds 4 sampler inputs.`);
		for (let [n, i] of t) {
			if (!dt.test(n) || n.startsWith("gl_") || [
				"__proto__",
				"constructor",
				"prototype"
			].includes(n)) throw Error(`Invalid shader sampler: ${n}`);
			if (i !== "original" && (!ft(i) || Object.keys(i).length !== 1 || typeof i.passId != "string" || !r.has(i.passId))) throw Error(`Shader pass ${e.id} has a missing, forward, or cyclic input: ${n}`);
		}
		r.add(e.id);
	}
	if (n.passes[n.passes.length - 1].scale !== 1) throw Error("Final shader pass must use full resolution.");
}
function ht(e) {
	return e.pipeline ? e.pipeline.passes.map((e) => e.fragmentShader) : [e.fragmentShader];
}
//#endregion
//#region src/core/shaderTargetPlan.ts
function gt(e, t, n) {
	let r = new Map(e.map((e, t) => [e.id, t])), i = e.map((e, t) => t);
	e.forEach((e, t) => {
		for (let n of Object.values(e.inputs)) if (n !== "original") {
			let e = r.get(n.passId);
			if (e === void 0 || e >= t) throw Error("Invalid shader target dependency.");
			i[e] = Math.max(i[e], t);
		}
	});
	let a = [], o = [];
	return {
		targets: a,
		passes: e.map((r, s) => {
			let c = {
				width: Math.max(1, Math.ceil(t * r.scale)),
				height: Math.max(1, Math.ceil(n * r.scale))
			};
			if (s === e.length - 1) return c;
			let l = a.findIndex((e, t) => e.width === c.width && e.height === c.height && o[t] < s);
			return l < 0 && (l = a.length, a.push(c)), o[l] = i[s], {
				...c,
				slot: l
			};
		})
	};
}
//#endregion
//#region src/core/shaderProcessor.ts
var _t = /* @__PURE__ */ new Set([
	"time",
	"frame",
	"progress",
	"compTime",
	"compFrame",
	"runTime",
	"runFrame",
	"bar",
	"beat",
	"resolution",
	"inputTexture"
]), vt = new Set("attribute const uniform varying break continue do for while if else in out inout float int void bool true false lowp mediump highp precision invariant discard return mat2 mat3 mat4 vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 sampler2D samplerCube struct".split(" ")), yt = new Set("layout centroid flat smooth switch case default uint uvec2 uvec3 uvec4 mat2x2 mat2x3 mat2x4 mat3x2 mat3x3 mat3x4 mat4x2 mat4x3 mat4x4 sampler3D sampler2DArray sampler2DShadow samplerCubeShadow sampler2DArrayShadow isampler2D isampler3D isamplerCube isampler2DArray usampler2D usampler3D usamplerCube usampler2DArray".split(" "));
function bt(e) {
	mt(e.source);
	let t = e.source.pipeline ? e.source.pipeline.passes.some((e) => ct(e).version === 300) : ct(e.source).version === 300, n = /* @__PURE__ */ new Set();
	if (e.source.pipeline) {
		n.add("originalResolution"), n.add("mfRenderToTexture");
		for (let t of e.source.pipeline.passes) {
			let e = Object.keys(t.inputs), r = new Set(e.map((e) => `${e}Resolution`));
			for (let i of e) {
				if (i !== "inputTexture" && (_t.has(i) || i === "originalResolution" || i === "mfRenderToTexture" || r.has(i)) || vt.has(i) || ct(t).version === 300 && yt.has(i)) throw Error(`Reserved shader sampler: ${i}`);
				n.add(i), n.add(`${i}Resolution`);
			}
		}
	}
	for (let [r, i] of Object.entries(e.params)) {
		if (!/^[A-Za-z_]\w*$/.test(r) || r.startsWith("gl_") || _t.has(r) || n.has(r) || vt.has(r) || t && yt.has(r)) throw Error(`Reserved or invalid shader uniform: ${r}`);
		if (![
			"number",
			"boolean",
			"vec2",
			"vec3",
			"color"
		].includes(i.type)) throw Error(`Unsupported shader uniform type: ${r}`);
	}
}
function xt() {
	let e = new OffscreenCanvas(1, 1), t = e.getContext("webgl2", {
		alpha: !0,
		premultipliedAlpha: !1,
		preserveDrawingBuffer: !0
	});
	if (!t) throw Error("WebGL2 is unavailable for Shader clips (GLSL ES 1.00 / 3.00).");
	let n = /* @__PURE__ */ new Map(), r = [], i = !1, a = /* @__PURE__ */ new WeakMap(), o = t.getParameter(t.MAX_TEXTURE_SIZE), s = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), c = t.createBuffer(), l = t.createTexture();
	if (!c || !l) throw c && t.deleteBuffer(c), l && t.deleteTexture(l), t.getExtension("WEBGL_lose_context")?.loseContext(), Error("Unable to allocate shader resources.");
	t.bindBuffer(t.ARRAY_BUFFER, c), t.bufferData(t.ARRAY_BUFFER, new Float32Array([
		-1,
		-1,
		1,
		-1,
		-1,
		1,
		1,
		1
	]), t.STATIC_DRAW);
	let u = (e) => {
		t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
	};
	u(l);
	let d = !1, f = (e) => {
		t.deleteFramebuffer(e.framebuffer), t.deleteTexture(e.texture);
	}, p = () => {
		for (let e of r) f(e);
		r = [];
	}, m = (e) => {
		let n = t.createTexture(), r = t.createFramebuffer();
		try {
			if (!n || !r) throw Error("Unable to allocate shader target.");
			u(n), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA8, e.width, e.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
			let i = t.checkFramebufferStatus(t.FRAMEBUFFER), a = t.getError();
			if (i !== t.FRAMEBUFFER_COMPLETE || a !== t.NO_ERROR) throw Error("Shader framebuffer allocation is incomplete.");
			return {
				...e,
				texture: n,
				framebuffer: r
			};
		} catch (e) {
			throw r && t.deleteFramebuffer(r), n && t.deleteTexture(n), t.getError(), e;
		}
	}, h = (e) => {
		let t = [...r], n = [];
		try {
			return {
				selected: e.map((e) => {
					let r = t.findIndex((t) => t.width === e.width && t.height === e.height);
					if (r >= 0) return t.splice(r, 1)[0];
					let i = m(e);
					return n.push(i), i;
				}),
				created: n,
				obsolete: t
			};
		} catch (e) {
			for (let e of n) f(e);
			throw e;
		}
	}, g = (e, n, r) => {
		let i = t.createShader(e);
		if (!i) throw Error("Unable to allocate shader.");
		if (t.shaderSource(i, n), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) {
			let n = t.getShaderInfoLog(i);
			throw t.deleteShader(i), Error(`Shader compile error: [${r}, ${e === t.VERTEX_SHADER ? "vertex" : "fragment"}] ${n}`);
		}
		return i;
	}, _ = (e, r = !1, i) => {
		let a = ct(e);
		if (!a.version) throw Error(`Shader version error: unsupported #version ${a.directive || "(empty)"}; use #version 100 or #version 300 es.`);
		let o = n.get(a.version), s = `${r ? "pipeline" : "single"}\0${e.fragmentShader}`, c = o?.get(s);
		if (c) return c.program;
		let l = [], u = t.createProgram();
		if (!u) throw Error("Unable to allocate shader program.");
		try {
			l.push(g(t.VERTEX_SHADER, (r ? ut : lt)[a.version], a.label)), l.push(g(t.FRAGMENT_SHADER, e.fragmentShader, a.label));
			for (let e of l) t.attachShader(u, e);
			if (t.linkProgram(u), !t.getProgramParameter(u, t.LINK_STATUS)) throw Error(`Shader link error: [${a.label}] ${t.getProgramInfoLog(u)}`);
			o || (o = /* @__PURE__ */ new Map(), n.set(a.version, o));
			let c = {
				program: u,
				fragmentShader: e.fragmentShader,
				pipeline: r
			};
			return o.set(s, c), i?.push({
				version: a.version,
				key: s,
				entry: c
			}), u;
		} catch (e) {
			throw t.deleteProgram(u), e;
		} finally {
			for (let e of l) t.deleteShader(e);
		}
	}, v = (e, n, r) => {
		for (let [n, i] of Object.entries({
			time: r.time,
			frame: r.frame,
			progress: r.progress,
			compTime: r.compTime,
			compFrame: r.compFrame,
			runTime: r.appRuntime,
			runFrame: r.runFrame,
			bar: r.bar,
			beat: r.beat
		})) {
			let r = Number(i ?? 0);
			if (!Number.isFinite(r)) throw Error(`Invalid shader time: ${n}`);
			t.uniform1f(t.getUniformLocation(e, n), r);
		}
		for (let [i, a] of Object.entries(n.params)) {
			let n = t.getUniformLocation(e, i), o = r.params[i];
			if (n !== null) {
				if (a.type === "color") {
					let e = String(o).replace(/^#/, ""), r = e.length === 3 ? [...e].map((e) => e + e).join("") : e;
					if (!/^[\da-f]{6}$/i.test(r)) throw Error(`Invalid shader color: ${i}`);
					let a = parseInt(r, 16);
					t.uniform3f(n, (a >> 16) / 255, (a >> 8 & 255) / 255, (a & 255) / 255);
				} else if (a.type === "vec2" || a.type === "vec3") {
					if (!Array.isArray(o) || o.length !== (a.type === "vec2" ? 2 : 3) || !o.every((e) => typeof e == "number" && Number.isFinite(e))) throw Error(`Invalid shader vector: ${i}`);
					a.type === "vec2" ? t.uniform2fv(n, o) : t.uniform3fv(n, o);
				} else {
					let e = a.type === "boolean" ? +!!o : Number(o);
					if (!Number.isFinite(e)) throw Error(`Invalid shader number: ${i}`);
					t.uniform1f(n, e);
				}
			}
		}
	}, y = /* @__PURE__ */ new Set([
		t.SAMPLER_2D,
		t.SAMPLER_CUBE,
		t.SAMPLER_3D,
		t.SAMPLER_2D_SHADOW,
		t.SAMPLER_CUBE_SHADOW,
		t.SAMPLER_2D_ARRAY,
		t.SAMPLER_2D_ARRAY_SHADOW,
		t.INT_SAMPLER_2D,
		t.INT_SAMPLER_3D,
		t.INT_SAMPLER_CUBE,
		t.INT_SAMPLER_2D_ARRAY,
		t.UNSIGNED_INT_SAMPLER_2D,
		t.UNSIGNED_INT_SAMPLER_3D,
		t.UNSIGNED_INT_SAMPLER_CUBE,
		t.UNSIGNED_INT_SAMPLER_2D_ARRAY
	]), b = (e, n) => {
		for (let r = 0; r < t.getProgramParameter(e, t.ACTIVE_UNIFORMS); r++) {
			let i = t.getActiveUniform(e, r);
			if (i && y.has(i.type) && (i.type !== t.SAMPLER_2D || i.size !== 1 || !n.includes(i.name))) throw Error(`Shader sampler must have an explicit 2D binding: ${i.name}`);
		}
	}, x = (n) => {
		if (e.width !== n.width && (e.width = n.width), e.height !== n.height && (e.height = n.height), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, l), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n), t.getError() !== t.NO_ERROR) throw Error("Shader input upload failed.");
	}, S = (e, n, r) => {
		t.bindFramebuffer(t.FRAMEBUFFER, r?.framebuffer ?? null), t.viewport(0, 0, n.width, n.height), t.useProgram(e), t.disable(t.BLEND), t.bindBuffer(t.ARRAY_BUFFER, c);
		let i = t.getAttribLocation(e, "position");
		i >= 0 && (t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0)), t.uniform1f(t.getUniformLocation(e, "mfRenderToTexture"), +!!r), t.uniform2f(t.getUniformLocation(e, "resolution"), n.width, n.height);
	}, C = () => {
		if (t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_STRIP, 0, 4), t.getError() !== t.NO_ERROR || t.isContextLost()) throw Error("Shader uniform binding or render failed.");
	};
	return {
		apply(c, u, p) {
			if (d || t.isContextLost()) throw Error("Shader context is disposed or lost.");
			if (bt(u), c.width < 1 || c.height < 1 || c.width > o || c.height > o) throw Error("Shader input exceeds device texture limits.");
			if (!u.source.pipeline) {
				let n = _(u.source);
				return x(c), S(n, c), t.uniform1i(t.getUniformLocation(n, "inputTexture"), 0), v(n, u, p), C(), e;
			}
			let m = u.source.pipeline.passes, g = [], y, w = m[0];
			try {
				let n = m.map((e) => {
					w = e;
					let t = Object.keys(e.inputs);
					if (t.length > s) throw Error("Shader pass exceeds device sampler limits.");
					let n = _(e, !0, g);
					return b(n, t), n;
				}), o = a.get(u.source);
				(!o || o.width !== c.width || o.height !== c.height) && (o = {
					width: c.width,
					height: c.height,
					plan: gt(m, c.width, c.height)
				}, a.set(u.source, o)), y = h(o.plan.targets), x(c);
				let d = /* @__PURE__ */ new Map();
				m.forEach((e, r) => {
					w = e;
					let i = o.plan.passes[r], a = i.slot === void 0 ? void 0 : y.selected[i.slot], s = n[r];
					S(s, i, a), t.uniform2f(t.getUniformLocation(s, "originalResolution"), c.width, c.height), Object.entries(e.inputs).forEach(([e, n], r) => {
						let i = n === "original" ? {
							texture: l,
							width: c.width,
							height: c.height
						} : d.get(n.passId);
						if (!i || i.texture === a?.texture) throw Error("Shader target feedback or missing input.");
						t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, i.texture), t.uniform1i(t.getUniformLocation(s, e), r), t.uniform2f(t.getUniformLocation(s, `${e}Resolution`), i.width, i.height);
					}), v(s, u, p), C(), a && d.set(e.id, a);
				});
				for (let e of y.obsolete) f(e);
				return r = y.selected, i = !0, e;
			} catch (e) {
				if (y) for (let e of y.created) f(e);
				for (let { version: e, key: r, entry: i } of g) t.deleteProgram(i.program), n.get(e)?.delete(r);
				throw new St(u.id, w.id, w.name, ct(w).version, e);
			} finally {
				t.bindFramebuffer(t.FRAMEBUFFER, null);
				for (let e = 0; e < Math.min(4, s); e++) t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, null);
				t.activeTexture(t.TEXTURE0);
			}
		},
		prune(e) {
			for (let [r, i] of n) {
				for (let [n, r] of i) e.has(r.fragmentShader) || (t.deleteProgram(r.program), i.delete(n));
				i.size || n.delete(r);
			}
			(!i || !e.size) && p(), i = !1;
		},
		dispose() {
			if (!d) {
				d = !0, p();
				for (let e of n.values()) for (let n of e.values()) t.deleteProgram(n.program);
				n.clear(), t.deleteBuffer(c), t.deleteTexture(l), t.getExtension("WEBGL_lose_context")?.loseContext(), e.width = e.height = 1;
			}
		}
	};
}
var St = class extends Error {
	clipId;
	passId;
	passName;
	glslVersion;
	originalCause;
	constructor(e, t, n, r, i) {
		super(`${i instanceof Error ? i.message : String(i)} [Clip ${e}, pass ${t} (${n})]`), this.clipId = e, this.passId = t, this.passName = n, this.glslVersion = r, this.originalCause = i, this.name = "ShaderPassError";
	}
}, Ct = class extends Error {
	layerId;
	clipId;
	constructor(e, t, n) {
		super(`Effect ${e}, Shader ${t}: ${n instanceof Error ? n.message : String(n)}`), this.layerId = e, this.clipId = t, this.name = "EffectRenderError";
	}
};
function wt(e = xt) {
	let t, n = /* @__PURE__ */ new Map();
	return {
		render(r, i, a, o, s, c, l = !1, u) {
			let d = ot(i.layers), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = (r, h) => {
				if (h.visible === !1) return;
				if (h.kind !== "effect") {
					s(r, h);
					return;
				}
				f.add(h.id);
				let g = n.get(h.id);
				g || (g = new OffscreenCanvas(i.width, i.height), n.set(h.id, g)), g.width !== i.width && (g.width = i.width), g.height !== i.height && (g.height = i.height);
				let _ = g.getContext("2d");
				if (!_) throw Error("Unable to allocate Effect input canvas.");
				_.clearRect(0, 0, g.width, g.height);
				let v = h.effectInputMode === "below";
				if (v) _.drawImage(r.canvas, 0, 0);
				else for (let e of d.inputs(h)) m(_, e);
				let y = "";
				try {
					for (let n of [...h.clips].reverse()) {
						if (n.kind !== "shader") continue;
						let r = $e(n, a, i, o, { exportMode: l });
						if (!r) continue;
						y = n.id;
						for (let e of ht(n.source)) p.add(e);
						t ??= e();
						let s = u?.get(n.id), c = t.apply(g, n, s ? {
							...r,
							params: {
								...r.params,
								...s
							}
						} : r);
						_.clearRect(0, 0, g.width, g.height), _.drawImage(c, 0, 0);
					}
					v && r.clearRect(0, 0, r.canvas.width, r.canvas.height), r.drawImage(g, 0, 0);
				} catch (e) {
					let t = new Ct(h.id, y, e);
					if (!c) throw t;
					v && r.clearRect(0, 0, r.canvas.width, r.canvas.height), c(t);
				}
			};
			try {
				for (let e of d.roots) m(r, e);
			} finally {
				t?.prune(p);
				for (let [e, t] of n) f.has(e) || (t.width = t.height = 1, n.delete(e));
			}
		},
		dispose() {
			t?.dispose(), t = void 0;
			for (let e of n.values()) e.width = e.height = 1;
			n.clear();
		}
	};
}
//#endregion
//#region src/core/crossClipParams.ts
var Tt = /* @__PURE__ */ new WeakMap();
function Et(e) {
	Tt.delete(e);
}
function Dt(e, t) {
	let n = Tt.get(e);
	if (n?.frame === t) return n.snapshot;
	let r = Object.fromEntries(e.flatMap((e) => e.clips.map((e) => [e.id, he(e.params, e.keyframeTracks, t - e.inFrame)])));
	return Tt.set(e, {
		frame: t,
		snapshot: r
	}), r;
}
//#endregion
//#region src/core/frameParamBus.ts
function Ot(e, t, n) {
	let r = e.params[t];
	if (!r || r.group !== "custom" || r.writable === !1) return !1;
	switch (r.type) {
		case "number": return typeof n == "number" && Number.isFinite(n);
		case "boolean": return typeof n == "boolean";
		case "color": return typeof n == "string" && /^#[0-9a-fA-F]{6}$/.test(n);
		case "vec2":
		case "vec3": return Array.isArray(n) && n.length === (r.type === "vec2" ? 2 : 3) && n.every((e) => typeof e == "number" && Number.isFinite(e));
		default: return !1;
	}
}
function kt() {
	let e = "", t, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
	return {
		begin(i, a, o) {
			(e !== i || t !== a) && (e = i, t = a, n = new Set(o), r = /* @__PURE__ */ new Map());
		},
		complete(i, a, o) {
			if (i !== e || !n.has(a) || r.has(a)) return !1;
			let s = new Map(t.layers.flatMap((e) => e.clips.filter((e) => e.kind === "shader").map((e) => [e.id, e])));
			return r.set(a, o.slice(0, 256).filter((e) => {
				if (!e || typeof e.targetClipId != "string" || typeof e.key != "string") return !1;
				let t = s.get(e.targetClipId);
				return !!(t && Ot(t, e.key, e.value));
			})), !0;
		},
		get ready() {
			return r.size === n.size;
		},
		get overrides() {
			let e = /* @__PURE__ */ new Map();
			for (let n of [...t.layers].reverse()) for (let t of [...n.clips].reverse()) for (let n of r.get(t.id) ?? []) {
				let t = e.get(n.targetClipId) ?? Object.create(null);
				t[n.key] = n.value, e.set(n.targetClipId, t);
			}
			return e;
		}
	};
}
//#endregion
//#region node_modules/acorn/dist/acorn.mjs
var At = [
	509,
	0,
	227,
	0,
	150,
	4,
	294,
	9,
	1368,
	2,
	2,
	1,
	6,
	3,
	41,
	2,
	5,
	0,
	166,
	1,
	574,
	3,
	9,
	9,
	7,
	9,
	32,
	4,
	318,
	1,
	78,
	5,
	71,
	10,
	50,
	3,
	123,
	2,
	54,
	14,
	32,
	10,
	3,
	1,
	11,
	3,
	46,
	10,
	8,
	0,
	46,
	9,
	7,
	2,
	37,
	13,
	2,
	9,
	6,
	1,
	45,
	0,
	13,
	2,
	49,
	13,
	9,
	3,
	2,
	11,
	83,
	11,
	7,
	0,
	3,
	0,
	158,
	11,
	6,
	9,
	7,
	3,
	56,
	1,
	2,
	6,
	3,
	1,
	3,
	2,
	10,
	0,
	11,
	1,
	3,
	6,
	4,
	4,
	68,
	8,
	2,
	0,
	3,
	0,
	2,
	3,
	2,
	4,
	2,
	0,
	15,
	1,
	83,
	17,
	10,
	9,
	5,
	0,
	82,
	19,
	13,
	9,
	214,
	6,
	3,
	8,
	28,
	1,
	83,
	16,
	16,
	9,
	82,
	12,
	9,
	9,
	7,
	19,
	58,
	14,
	5,
	9,
	243,
	14,
	166,
	9,
	71,
	5,
	2,
	1,
	3,
	3,
	2,
	0,
	2,
	1,
	13,
	9,
	120,
	6,
	3,
	6,
	4,
	0,
	29,
	9,
	41,
	6,
	2,
	3,
	9,
	0,
	10,
	10,
	47,
	15,
	199,
	7,
	137,
	9,
	54,
	7,
	2,
	7,
	17,
	9,
	57,
	21,
	2,
	13,
	123,
	5,
	4,
	0,
	2,
	1,
	2,
	6,
	2,
	0,
	9,
	9,
	49,
	4,
	2,
	1,
	2,
	4,
	9,
	9,
	55,
	9,
	266,
	3,
	10,
	1,
	2,
	0,
	49,
	6,
	4,
	4,
	14,
	10,
	5350,
	0,
	7,
	14,
	11465,
	27,
	2343,
	9,
	87,
	9,
	39,
	4,
	60,
	6,
	26,
	9,
	535,
	9,
	470,
	0,
	2,
	54,
	8,
	3,
	82,
	0,
	12,
	1,
	19628,
	1,
	4178,
	9,
	519,
	45,
	3,
	22,
	543,
	4,
	4,
	5,
	9,
	7,
	3,
	6,
	31,
	3,
	149,
	2,
	1418,
	49,
	513,
	54,
	5,
	49,
	9,
	0,
	15,
	0,
	23,
	4,
	2,
	14,
	1361,
	6,
	2,
	16,
	3,
	6,
	2,
	1,
	2,
	4,
	101,
	0,
	161,
	6,
	10,
	9,
	357,
	0,
	62,
	13,
	499,
	13,
	245,
	1,
	2,
	9,
	233,
	0,
	3,
	0,
	8,
	1,
	6,
	0,
	475,
	6,
	110,
	6,
	6,
	9,
	4759,
	9,
	787719,
	239
], jt = [
	0,
	11,
	2,
	25,
	2,
	18,
	2,
	1,
	2,
	14,
	3,
	13,
	35,
	122,
	70,
	52,
	268,
	28,
	4,
	48,
	48,
	31,
	14,
	29,
	6,
	37,
	11,
	29,
	3,
	35,
	5,
	7,
	2,
	4,
	43,
	157,
	19,
	35,
	5,
	35,
	5,
	39,
	9,
	51,
	13,
	10,
	2,
	14,
	2,
	6,
	2,
	1,
	2,
	10,
	2,
	14,
	2,
	6,
	2,
	1,
	4,
	51,
	13,
	310,
	10,
	21,
	11,
	7,
	25,
	5,
	2,
	41,
	2,
	8,
	70,
	5,
	3,
	0,
	2,
	43,
	2,
	1,
	4,
	0,
	3,
	22,
	11,
	22,
	10,
	30,
	66,
	18,
	2,
	1,
	11,
	21,
	11,
	25,
	7,
	25,
	39,
	55,
	7,
	1,
	65,
	0,
	16,
	3,
	2,
	2,
	2,
	28,
	43,
	28,
	4,
	28,
	36,
	7,
	2,
	27,
	28,
	53,
	11,
	21,
	11,
	18,
	14,
	17,
	111,
	72,
	56,
	50,
	14,
	50,
	14,
	35,
	39,
	27,
	10,
	22,
	251,
	41,
	7,
	1,
	17,
	5,
	57,
	28,
	11,
	0,
	9,
	21,
	43,
	17,
	47,
	20,
	28,
	22,
	13,
	52,
	58,
	1,
	3,
	0,
	14,
	44,
	33,
	24,
	27,
	35,
	30,
	0,
	3,
	0,
	9,
	34,
	4,
	0,
	13,
	47,
	15,
	3,
	22,
	0,
	2,
	0,
	36,
	17,
	2,
	24,
	20,
	1,
	64,
	6,
	2,
	0,
	2,
	3,
	2,
	14,
	2,
	9,
	8,
	46,
	39,
	7,
	3,
	1,
	3,
	21,
	2,
	6,
	2,
	1,
	2,
	4,
	4,
	0,
	19,
	0,
	13,
	4,
	31,
	9,
	2,
	0,
	3,
	0,
	2,
	37,
	2,
	0,
	26,
	0,
	2,
	0,
	45,
	52,
	19,
	3,
	21,
	2,
	31,
	47,
	21,
	1,
	2,
	0,
	185,
	46,
	42,
	3,
	37,
	47,
	21,
	0,
	60,
	42,
	14,
	0,
	72,
	26,
	38,
	6,
	186,
	43,
	117,
	63,
	32,
	7,
	3,
	0,
	3,
	7,
	2,
	1,
	2,
	23,
	16,
	0,
	2,
	0,
	95,
	7,
	3,
	38,
	17,
	0,
	2,
	0,
	29,
	0,
	11,
	39,
	8,
	0,
	22,
	0,
	12,
	45,
	20,
	0,
	19,
	72,
	200,
	32,
	32,
	8,
	2,
	36,
	18,
	0,
	50,
	29,
	113,
	6,
	2,
	1,
	2,
	37,
	22,
	0,
	26,
	5,
	2,
	1,
	2,
	31,
	15,
	0,
	24,
	43,
	261,
	18,
	16,
	0,
	2,
	12,
	2,
	33,
	125,
	0,
	80,
	921,
	103,
	110,
	18,
	195,
	2637,
	96,
	16,
	1071,
	18,
	5,
	26,
	3994,
	6,
	582,
	6842,
	29,
	1763,
	568,
	8,
	30,
	18,
	78,
	18,
	29,
	19,
	47,
	17,
	3,
	32,
	20,
	6,
	18,
	433,
	44,
	212,
	63,
	33,
	24,
	3,
	24,
	45,
	74,
	6,
	0,
	67,
	12,
	65,
	1,
	2,
	0,
	15,
	4,
	10,
	7381,
	42,
	31,
	98,
	114,
	8702,
	3,
	2,
	6,
	2,
	1,
	2,
	290,
	16,
	0,
	30,
	2,
	3,
	0,
	15,
	3,
	9,
	395,
	2309,
	106,
	6,
	12,
	4,
	8,
	8,
	9,
	5991,
	84,
	2,
	70,
	2,
	1,
	3,
	0,
	3,
	1,
	3,
	3,
	2,
	11,
	2,
	0,
	2,
	6,
	2,
	64,
	2,
	3,
	3,
	7,
	2,
	6,
	2,
	27,
	2,
	3,
	2,
	4,
	2,
	0,
	4,
	6,
	2,
	339,
	3,
	24,
	2,
	24,
	2,
	30,
	2,
	24,
	2,
	30,
	2,
	24,
	2,
	30,
	2,
	24,
	2,
	30,
	2,
	24,
	2,
	7,
	1845,
	30,
	7,
	5,
	262,
	61,
	147,
	44,
	11,
	6,
	17,
	0,
	322,
	29,
	19,
	43,
	485,
	27,
	229,
	29,
	3,
	0,
	208,
	30,
	2,
	2,
	2,
	1,
	2,
	6,
	3,
	4,
	10,
	1,
	225,
	6,
	2,
	3,
	2,
	1,
	2,
	14,
	2,
	196,
	60,
	67,
	8,
	0,
	1205,
	3,
	2,
	26,
	2,
	1,
	2,
	0,
	3,
	0,
	2,
	9,
	2,
	3,
	2,
	0,
	2,
	0,
	7,
	0,
	5,
	0,
	2,
	0,
	2,
	0,
	2,
	2,
	2,
	1,
	2,
	0,
	3,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	1,
	2,
	0,
	3,
	3,
	2,
	6,
	2,
	3,
	2,
	3,
	2,
	0,
	2,
	9,
	2,
	16,
	6,
	2,
	2,
	4,
	2,
	16,
	4421,
	42719,
	33,
	4381,
	3,
	5773,
	3,
	7472,
	16,
	621,
	2467,
	541,
	1507,
	4938,
	6,
	8489
], Mt = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", Nt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Pt = {
	3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
	5: "class enum extends super const export import",
	6: "enum",
	strict: "implements interface let package private protected public static yield",
	strictBind: "eval arguments"
}, Ft = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", It = {
	5: Ft,
	"5module": Ft + " export import",
	6: Ft + " const class extends export import super"
}, Lt = /^in(stanceof)?$/, Rt = RegExp("[" + Nt + "]"), zt = RegExp("[" + Nt + Mt + "]");
function Bt(e, t) {
	for (var n = 65536, r = 0; r < t.length; r += 2) {
		if (n += t[r], n > e) return !1;
		if (n += t[r + 1], n >= e) return !0;
	}
	return !1;
}
function Vt(e, t) {
	return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Rt.test(String.fromCharCode(e)) : t !== !1 && Bt(e, jt);
}
function Ht(e, t) {
	return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && zt.test(String.fromCharCode(e)) : t === !1 ? !1 : Bt(e, jt) || Bt(e, At);
}
var k = function(e, t) {
	t === void 0 && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null;
};
function Ut(e, t) {
	return new k(e, {
		beforeExpr: !0,
		binop: t
	});
}
var Wt = { beforeExpr: !0 }, Gt = { startsExpr: !0 }, Kt = {};
function A(e, t) {
	return t === void 0 && (t = {}), t.keyword = e, Kt[e] = new k(e, t);
}
var j = {
	num: new k("num", Gt),
	regexp: new k("regexp", Gt),
	string: new k("string", Gt),
	name: new k("name", Gt),
	privateId: new k("privateId", Gt),
	eof: new k("eof"),
	bracketL: new k("[", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	bracketR: new k("]"),
	braceL: new k("{", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	braceR: new k("}"),
	parenL: new k("(", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	parenR: new k(")"),
	comma: new k(",", Wt),
	semi: new k(";", Wt),
	colon: new k(":", Wt),
	dot: new k("."),
	question: new k("?", Wt),
	questionDot: new k("?."),
	arrow: new k("=>", Wt),
	template: new k("template"),
	invalidTemplate: new k("invalidTemplate"),
	ellipsis: new k("...", Wt),
	backQuote: new k("`", Gt),
	dollarBraceL: new k("${", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	eq: new k("=", {
		beforeExpr: !0,
		isAssign: !0
	}),
	assign: new k("_=", {
		beforeExpr: !0,
		isAssign: !0
	}),
	incDec: new k("++/--", {
		prefix: !0,
		postfix: !0,
		startsExpr: !0
	}),
	prefix: new k("!/~", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	logicalOR: Ut("||", 1),
	logicalAND: Ut("&&", 2),
	bitwiseOR: Ut("|", 3),
	bitwiseXOR: Ut("^", 4),
	bitwiseAND: Ut("&", 5),
	equality: Ut("==/!=/===/!==", 6),
	relational: Ut("</>/<=/>=", 7),
	bitShift: Ut("<</>>/>>>", 8),
	plusMin: new k("+/-", {
		beforeExpr: !0,
		binop: 9,
		prefix: !0,
		startsExpr: !0
	}),
	modulo: Ut("%", 10),
	star: Ut("*", 10),
	slash: Ut("/", 10),
	starstar: new k("**", { beforeExpr: !0 }),
	coalesce: Ut("??", 1),
	_break: A("break"),
	_case: A("case", Wt),
	_catch: A("catch"),
	_continue: A("continue"),
	_debugger: A("debugger"),
	_default: A("default", Wt),
	_do: A("do", {
		isLoop: !0,
		beforeExpr: !0
	}),
	_else: A("else", Wt),
	_finally: A("finally"),
	_for: A("for", { isLoop: !0 }),
	_function: A("function", Gt),
	_if: A("if"),
	_return: A("return", Wt),
	_switch: A("switch"),
	_throw: A("throw", Wt),
	_try: A("try"),
	_var: A("var"),
	_const: A("const"),
	_while: A("while", { isLoop: !0 }),
	_with: A("with"),
	_new: A("new", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	_this: A("this", Gt),
	_super: A("super", Gt),
	_class: A("class", Gt),
	_extends: A("extends", Wt),
	_export: A("export"),
	_import: A("import", Gt),
	_null: A("null", Gt),
	_true: A("true", Gt),
	_false: A("false", Gt),
	_in: A("in", {
		beforeExpr: !0,
		binop: 7
	}),
	_instanceof: A("instanceof", {
		beforeExpr: !0,
		binop: 7
	}),
	_typeof: A("typeof", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	_void: A("void", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	_delete: A("delete", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	})
}, qt = /\r\n?|\n|\u2028|\u2029/, Jt = new RegExp(qt.source, "g");
function Yt(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Xt(e, t, n) {
	n === void 0 && (n = e.length);
	for (var r = t; r < n; r++) {
		var i = e.charCodeAt(r);
		if (Yt(i)) return r < n - 1 && i === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
	}
	return -1;
}
var Zt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, M = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Qt = Object.prototype, $t = Qt.hasOwnProperty, en = Qt.toString, tn = Object.hasOwn || (function(e, t) {
	return $t.call(e, t);
}), nn = Array.isArray || (function(e) {
	return en.call(e) === "[object Array]";
}), rn = Object.create(null);
function an(e) {
	return rn[e] || (rn[e] = RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function on(e) {
	return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var sn = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, cn = function(e, t) {
	this.line = e, this.column = t;
};
cn.prototype.offset = function(e) {
	return new cn(this.line, this.column + e);
};
var ln = function(e, t, n) {
	this.start = t, this.end = n, e.sourceFile !== null && (this.source = e.sourceFile);
};
function un(e, t) {
	for (var n = 1, r = 0;;) {
		var i = Xt(e, r, t);
		if (i < 0) return new cn(n, t - r);
		++n, r = i;
	}
}
var dn = {
	ecmaVersion: null,
	sourceType: "script",
	onInsertedSemicolon: null,
	onTrailingComma: null,
	allowReserved: null,
	allowReturnOutsideFunction: !1,
	allowImportExportEverywhere: !1,
	allowAwaitOutsideFunction: null,
	allowSuperOutsideMethod: null,
	allowHashBang: !1,
	checkPrivateFields: !0,
	locations: !1,
	onToken: null,
	onComment: null,
	ranges: !1,
	program: null,
	sourceFile: null,
	directSourceFile: null,
	preserveParens: !1
}, fn = !1;
function pn(e) {
	var t = {};
	for (var n in dn) t[n] = e && tn(e, n) ? e[n] : dn[n];
	if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!fn && typeof console == "object" && console.warn && (fn = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved ??= t.ecmaVersion < 5, (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), nn(t.onToken)) {
		var r = t.onToken;
		t.onToken = function(e) {
			return r.push(e);
		};
	}
	if (nn(t.onComment) && (t.onComment = mn(t, t.onComment)), t.sourceType === "commonjs" && t.allowAwaitOutsideFunction) throw Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
	return t;
}
function mn(e, t) {
	return function(n, r, i, a, o, s) {
		var c = {
			type: n ? "Block" : "Line",
			value: r,
			start: i,
			end: a
		};
		e.locations && (c.loc = new ln(this, o, s)), e.ranges && (c.range = [i, a]), t.push(c);
	};
}
var hn = 1, gn = 2, _n = 4, vn = 8, yn = 16, bn = 32, xn = 64, Sn = 128, Cn = 256, wn = 512, Tn = 1024, En = hn | gn | Cn;
function Dn(e, t) {
	return gn | (e ? _n : 0) | (t ? vn : 0);
}
var On = 0, kn = 1, An = 2, jn = 3, Mn = 4, Nn = 5, N = function(e, t, n) {
	this.options = e = pn(e), this.sourceFile = e.sourceFile, this.keywords = an(It[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
	var r = "";
	e.allowReserved !== !0 && (r = Pt[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (r += " await")), this.reservedWords = an(r);
	var i = (r ? r + " " : "") + Pt.strict;
	this.reservedWordsStrict = an(i), this.reservedWordsStrictBind = an(i + " " + Pt.strictBind), this.input = String(t), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf("\n", n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(qt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = j.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(this.options.sourceType === "commonjs" ? gn : hn), this.regexpState = null, this.privateNameStack = [];
}, Pn = {
	inFunction: { configurable: !0 },
	inGenerator: { configurable: !0 },
	inAsync: { configurable: !0 },
	canAwait: { configurable: !0 },
	allowReturn: { configurable: !0 },
	allowSuper: { configurable: !0 },
	allowDirectSuper: { configurable: !0 },
	treatFunctionsAsVar: { configurable: !0 },
	allowNewDotTarget: { configurable: !0 },
	allowUsing: { configurable: !0 },
	inClassStaticBlock: { configurable: !0 }
};
N.prototype.parse = function() {
	var e = this.options.program || this.startNode();
	return this.nextToken(), this.parseTopLevel(e);
}, Pn.inFunction.get = function() {
	return (this.currentVarScope().flags & gn) > 0;
}, Pn.inGenerator.get = function() {
	return (this.currentVarScope().flags & vn) > 0;
}, Pn.inAsync.get = function() {
	return (this.currentVarScope().flags & _n) > 0;
}, Pn.canAwait.get = function() {
	for (var e = this.scopeStack.length - 1; e >= 0; e--) {
		var t = this.scopeStack[e].flags;
		if (t & (Cn | wn)) return !1;
		if (t & gn) return (t & _n) > 0;
	}
	return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
}, Pn.allowReturn.get = function() {
	return !!(this.inFunction || this.options.allowReturnOutsideFunction && this.currentVarScope().flags & hn);
}, Pn.allowSuper.get = function() {
	return (this.currentThisScope().flags & xn) > 0 || this.options.allowSuperOutsideMethod;
}, Pn.allowDirectSuper.get = function() {
	return (this.currentThisScope().flags & Sn) > 0;
}, Pn.treatFunctionsAsVar.get = function() {
	return this.treatFunctionsAsVarInScope(this.currentScope());
}, Pn.allowNewDotTarget.get = function() {
	for (var e = this.scopeStack.length - 1; e >= 0; e--) {
		var t = this.scopeStack[e].flags;
		if (t & (Cn | wn) || t & gn && !(t & yn)) return !0;
	}
	return !1;
}, Pn.allowUsing.get = function() {
	var e = this.currentScope().flags;
	return !(e & Tn || !this.inModule && e & hn);
}, Pn.inClassStaticBlock.get = function() {
	return (this.currentVarScope().flags & Cn) > 0;
}, N.extend = function() {
	for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
	for (var n = this, r = 0; r < e.length; r++) n = e[r](n);
	return n;
}, N.parse = function(e, t) {
	return new this(t, e).parse();
}, N.parseExpressionAt = function(e, t, n) {
	var r = new this(n, e, t);
	return r.nextToken(), r.parseExpression();
}, N.tokenizer = function(e, t) {
	return new this(t, e);
}, Object.defineProperties(N.prototype, Pn);
var Fn = N.prototype, In = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Fn.strictDirective = function(e) {
	if (this.options.ecmaVersion < 5) return !1;
	for (;;) {
		M.lastIndex = e, e += M.exec(this.input)[0].length;
		var t = In.exec(this.input.slice(e));
		if (!t) return !1;
		if ((t[1] || t[2]) === "use strict") {
			M.lastIndex = e + t[0].length;
			var n = M.exec(this.input), r = n.index + n[0].length, i = this.input.charAt(r);
			return i === ";" || i === "}" || qt.test(n[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || i === "!" && this.input.charAt(r + 1) === "=");
		}
		e += t[0].length, M.lastIndex = e, e += M.exec(this.input)[0].length, this.input[e] === ";" && e++;
	}
}, Fn.eat = function(e) {
	return this.type === e && (this.next(), !0);
}, Fn.isContextual = function(e) {
	return this.type === j.name && this.value === e && !this.containsEsc;
}, Fn.eatContextual = function(e) {
	return this.isContextual(e) ? (this.next(), !0) : !1;
}, Fn.expectContextual = function(e) {
	this.eatContextual(e) || this.unexpected();
}, Fn.canInsertSemicolon = function() {
	return this.type === j.eof || this.type === j.braceR || qt.test(this.input.slice(this.lastTokEnd, this.start));
}, Fn.insertSemicolon = function() {
	if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
}, Fn.semicolon = function() {
	!this.eat(j.semi) && !this.insertSemicolon() && this.unexpected();
}, Fn.afterTrailingComma = function(e, t) {
	if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
}, Fn.expect = function(e) {
	this.eat(e) || this.unexpected();
}, Fn.unexpected = function(e) {
	this.raise(e ?? this.start, "Unexpected token");
};
var Ln = function() {
	this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
Fn.checkPatternErrors = function(e, t) {
	if (e) {
		e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
		var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
		n > -1 && this.raiseRecoverable(n, t ? "Assigning to rvalue" : "Parenthesized pattern");
	}
}, Fn.checkExpressionErrors = function(e, t) {
	if (!e) return !1;
	var n = e.shorthandAssign, r = e.doubleProto;
	if (!t) return n >= 0 || r >= 0;
	n >= 0 && this.raise(n, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
}, Fn.checkYieldAwaitInDefaultParams = function() {
	this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
}, Fn.isSimpleAssignTarget = function(e) {
	return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var P = N.prototype;
P.parseTopLevel = function(e) {
	var t = Object.create(null);
	for (e.body ||= []; this.type !== j.eof;) {
		var n = this.parseStatement(null, !0, t);
		e.body.push(n);
	}
	if (this.inModule) for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
		var a = i[r];
		this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
	}
	return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType, this.finishNode(e, "Program");
};
var Rn = { kind: "loop" }, zn = { kind: "switch" };
P.isLet = function(e) {
	if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
	M.lastIndex = this.pos;
	var t = M.exec(this.input), n = this.pos + t[0].length, r = this.fullCharCodeAt(n);
	if (r === 91 || r === 92) return !0;
	if (e) return !1;
	if (r === 123) return !0;
	if (Vt(r)) {
		var i = n;
		do
			n += r <= 65535 ? 1 : 2;
		while (Ht(r = this.fullCharCodeAt(n)));
		if (r === 92) return !0;
		var a = this.input.slice(i, n);
		if (!Lt.test(a)) return !0;
	}
	return !1;
}, P.isAsyncFunction = function() {
	if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
	M.lastIndex = this.pos;
	var e = M.exec(this.input), t = this.pos + e[0].length, n;
	return !qt.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(Ht(n = this.fullCharCodeAt(t + 8)) || n === 92));
}, P.isUsingKeyword = function(e, t) {
	if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using")) return !1;
	M.lastIndex = this.pos;
	var n = M.exec(this.input), r = this.pos + n[0].length;
	if (qt.test(this.input.slice(this.pos, r))) return !1;
	if (e) {
		var i = r + 5, a;
		if (this.input.slice(r, i) !== "using" || i === this.input.length || Ht(a = this.fullCharCodeAt(i)) || a === 92) return !1;
		M.lastIndex = i;
		var o = M.exec(this.input);
		if (r = i + o[0].length, o && qt.test(this.input.slice(i, r))) return !1;
	}
	var s = this.fullCharCodeAt(r);
	if (!Vt(s) && s !== 92) return !1;
	var c = r;
	do
		r += s <= 65535 ? 1 : 2;
	while (Ht(s = this.fullCharCodeAt(r)));
	if (s === 92) return !0;
	var l = this.input.slice(c, r);
	return !(Lt.test(l) || t && l === "of");
}, P.isAwaitUsing = function(e) {
	return this.isUsingKeyword(!0, e);
}, P.isUsing = function(e) {
	return this.isUsingKeyword(!1, e);
}, P.parseStatement = function(e, t, n) {
	var r = this.type, i = this.startNode(), a;
	switch (this.isLet(e) && (r = j._var, a = "let"), r) {
		case j._break:
		case j._continue: return this.parseBreakContinueStatement(i, r.keyword);
		case j._debugger: return this.parseDebuggerStatement(i);
		case j._do: return this.parseDoStatement(i);
		case j._for: return this.parseForStatement(i);
		case j._function: return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(i, !1, !e);
		case j._class: return e && this.unexpected(), this.parseClass(i, !0);
		case j._if: return this.parseIfStatement(i);
		case j._return: return this.parseReturnStatement(i);
		case j._switch: return this.parseSwitchStatement(i);
		case j._throw: return this.parseThrowStatement(i);
		case j._try: return this.parseTryStatement(i);
		case j._const:
		case j._var: return a ||= this.value, e && a !== "var" && this.unexpected(), this.parseVarStatement(i, a);
		case j._while: return this.parseWhileStatement(i);
		case j._with: return this.parseWithStatement(i);
		case j.braceL: return this.parseBlock(!0, i);
		case j.semi: return this.parseEmptyStatement(i);
		case j._export:
		case j._import:
			if (this.options.ecmaVersion > 10 && r === j._import) {
				M.lastIndex = this.pos;
				var o = M.exec(this.input), s = this.pos + o[0].length, c = this.input.charCodeAt(s);
				if (c === 40 || c === 46) return this.parseExpressionStatement(i, this.parseExpression());
			}
			return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === j._import ? this.parseImport(i) : this.parseExport(i, n);
		default:
			if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
			var l = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
			if (l) return this.allowUsing || this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement"), l === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(i, !1, l), this.semicolon(), this.finishNode(i, "VariableDeclaration");
			var u = this.value, d = this.parseExpression();
			return r === j.name && d.type === "Identifier" && this.eat(j.colon) ? this.parseLabeledStatement(i, u, d, e) : this.parseExpressionStatement(i, d);
	}
}, P.parseBreakContinueStatement = function(e, t) {
	var n = t === "break";
	this.next(), this.eat(j.semi) || this.insertSemicolon() ? e.label = null : this.type === j.name ? (e.label = this.parseIdent(), this.semicolon()) : this.unexpected();
	for (var r = 0; r < this.labels.length; ++r) {
		var i = this.labels[r];
		if ((e.label == null || i.name === e.label.name) && (i.kind != null && (n || i.kind === "loop") || e.label && n)) break;
	}
	return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, n ? "BreakStatement" : "ContinueStatement");
}, P.parseDebuggerStatement = function(e) {
	return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
}, P.parseDoStatement = function(e) {
	return this.next(), this.labels.push(Rn), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(j._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(j.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
}, P.parseForStatement = function(e) {
	this.next();
	var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
	if (this.labels.push(Rn), this.enterScope(0), this.expect(j.parenL), this.type === j.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
	var n = this.isLet();
	if (this.type === j._var || this.type === j._const || n) {
		var r = this.startNode(), i = n ? "let" : this.value;
		return this.next(), this.parseVar(r, !0, i), this.finishNode(r, "VariableDeclaration"), this.parseForAfterInit(e, r, t);
	}
	var a = this.isContextual("let"), o = !1, s = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
	if (s) {
		var c = this.startNode();
		return this.next(), s === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.parseVar(c, !0, s), this.finishNode(c, "VariableDeclaration"), this.parseForAfterInit(e, c, t);
	}
	var l = this.containsEsc, u = new Ln(), d = this.start, f = t > -1 ? this.parseExprSubscripts(u, "await") : this.parseExpression(!0, u);
	return this.type === j._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === j._in && this.unexpected(t), e.await = !0) : o && this.options.ecmaVersion >= 8 && (f.start === d && !l && f.type === "Identifier" && f.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), a && o && this.raise(f.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(f, !1, u), this.checkLValPattern(f), this.parseForIn(e, f)) : (this.checkExpressionErrors(u, !0), t > -1 && this.unexpected(t), this.parseFor(e, f));
}, P.parseForAfterInit = function(e, t, n) {
	return (this.type === j._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === j._in ? n > -1 && this.unexpected(n) : e.await = n > -1), this.parseForIn(e, t)) : (n > -1 && this.unexpected(n), this.parseFor(e, t));
}, P.parseFunctionStatement = function(e, t, n) {
	return this.next(), this.parseFunction(e, Vn | (n ? 0 : Hn), !1, t);
}, P.parseIfStatement = function(e) {
	return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(j._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
}, P.parseReturnStatement = function(e) {
	return this.allowReturn || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(j.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
}, P.parseSwitchStatement = function(e) {
	this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(j.braceL), this.labels.push(zn), this.enterScope(Tn);
	for (var t, n = !1; this.type !== j.braceR;) if (this.type === j._case || this.type === j._default) {
		var r = this.type === j._case;
		t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (n && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), n = !0, t.test = null), this.expect(j.colon);
	} else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
	return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
}, P.parseThrowStatement = function(e) {
	return this.next(), qt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Bn = [];
P.parseCatchClauseParam = function() {
	var e = this.parseBindingAtom(), t = e.type === "Identifier";
	return this.enterScope(t ? bn : 0), this.checkLValPattern(e, t ? Mn : An), this.expect(j.parenR), e;
}, P.parseTryStatement = function(e) {
	if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === j._catch) {
		var t = this.startNode();
		this.next(), this.eat(j.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
	}
	return e.finalizer = this.eat(j._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
}, P.parseVarStatement = function(e, t, n) {
	return this.next(), this.parseVar(e, !1, t, n), this.semicolon(), this.finishNode(e, "VariableDeclaration");
}, P.parseWhileStatement = function(e) {
	return this.next(), e.test = this.parseParenExpression(), this.labels.push(Rn), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
}, P.parseWithStatement = function(e) {
	return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
}, P.parseEmptyStatement = function(e) {
	return this.next(), this.finishNode(e, "EmptyStatement");
}, P.parseLabeledStatement = function(e, t, n, r) {
	for (var i = 0, a = this.labels; i < a.length; i += 1) a[i].name === t && this.raise(n.start, "Label '" + t + "' is already declared");
	for (var o = this.type.isLoop ? "loop" : this.type === j._switch ? "switch" : null, s = this.labels.length - 1; s >= 0; s--) {
		var c = this.labels[s];
		if (c.statementStart === e.start) c.statementStart = this.start, c.kind = o;
		else break;
	}
	return this.labels.push({
		name: t,
		kind: o,
		statementStart: this.start
	}), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = n, this.finishNode(e, "LabeledStatement");
}, P.parseExpressionStatement = function(e, t) {
	return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
}, P.parseBlock = function(e, t, n) {
	for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(j.braceL), e && this.enterScope(0); this.type !== j.braceR;) {
		var r = this.parseStatement(null);
		t.body.push(r);
	}
	return n && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
}, P.parseFor = function(e, t) {
	return e.init = t, this.expect(j.semi), e.test = this.type === j.semi ? null : this.parseExpression(), this.expect(j.semi), e.update = this.type === j.parenR ? null : this.parseExpression(), this.expect(j.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
}, P.parseForIn = function(e, t) {
	var n = this.type === j._in;
	return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!n || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = n ? this.parseExpression() : this.parseMaybeAssign(), this.expect(j.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, n ? "ForInStatement" : "ForOfStatement");
}, P.parseVar = function(e, t, n, r) {
	for (e.declarations = [], e.kind = n;;) {
		var i = this.startNode();
		if (this.parseVarId(i, n), this.eat(j.eq) ? i.init = this.parseMaybeAssign(t) : !r && n === "const" && !(this.type === j._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && (n === "using" || n === "await using") && this.options.ecmaVersion >= 17 && this.type !== j._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + n + " declaration") : !r && i.id.type !== "Identifier" && !(t && (this.type === j._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(j.comma)) break;
	}
	return e;
}, P.parseVarId = function(e, t) {
	e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? kn : An, !1);
};
var Vn = 1, Hn = 2, Un = 4;
P.parseFunction = function(e, t, n, r, i) {
	this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === j.star && t & Hn && this.unexpected(), e.generator = this.eat(j.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & Vn && (e.id = t & Un && this.type !== j.name ? null : this.parseIdent(), e.id && !(t & Hn) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? kn : An : jn));
	var a = this.yieldPos, o = this.awaitPos, s = this.awaitIdentPos;
	return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Dn(e.async, e.generator)), t & Vn || (e.id = this.type === j.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, n, !1, i), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = s, this.finishNode(e, t & Vn ? "FunctionDeclaration" : "FunctionExpression");
}, P.parseFunctionParams = function(e) {
	this.expect(j.parenL), e.params = this.parseBindingList(j.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
}, P.parseClass = function(e, t) {
	this.next();
	var n = this.strict;
	this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
	var r = this.enterClassBody(), i = this.startNode(), a = !1;
	for (i.body = [], this.expect(j.braceL); this.type !== j.braceR;) {
		var o = this.parseClassElement(e.superClass !== null);
		o && (i.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (a && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), a = !0) : o.key && o.key.type === "PrivateIdentifier" && Wn(r, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
	}
	return this.strict = n, this.next(), e.body = this.finishNode(i, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
}, P.parseClassElement = function(e) {
	if (this.eat(j.semi)) return null;
	var t = this.options.ecmaVersion, n = this.startNode(), r = "", i = !1, a = !1, o = "method", s = !1;
	if (this.eatContextual("static")) {
		if (t >= 13 && this.eat(j.braceL)) return this.parseClassStaticBlock(n), n;
		this.isClassElementNameStart() || this.type === j.star ? s = !0 : r = "static";
	}
	if (n.static = s, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === j.star) && !this.canInsertSemicolon() ? a = !0 : r = "async"), !r && (t >= 9 || !a) && this.eat(j.star) && (i = !0), !r && !a && !i) {
		var c = this.value;
		(this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = c : r = c);
	}
	if (r ? (n.computed = !1, n.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), n.key.name = r, this.finishNode(n.key, "Identifier")) : this.parseClassElementName(n), t < 13 || this.type === j.parenL || o !== "method" || i || a) {
		var l = !n.static && Gn(n, "constructor"), u = l && e;
		l && o !== "method" && this.raise(n.key.start, "Constructor can't have get/set modifier"), n.kind = l ? "constructor" : o, this.parseClassMethod(n, i, a, u);
	} else this.parseClassField(n);
	return n;
}, P.isClassElementNameStart = function() {
	return this.type === j.name || this.type === j.privateId || this.type === j.num || this.type === j.string || this.type === j.bracketL || this.type.keyword;
}, P.parseClassElementName = function(e) {
	this.type === j.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
}, P.parseClassMethod = function(e, t, n, r) {
	var i = e.key;
	e.kind === "constructor" ? (t && this.raise(i.start, "Constructor can't be a generator"), n && this.raise(i.start, "Constructor can't be an async method")) : e.static && Gn(e, "prototype") && this.raise(i.start, "Classes may not have a static property named prototype");
	var a = e.value = this.parseMethod(t, n, r);
	return e.kind === "get" && a.params.length !== 0 && this.raiseRecoverable(a.start, "getter should have no params"), e.kind === "set" && a.params.length !== 1 && this.raiseRecoverable(a.start, "setter should have exactly one param"), e.kind === "set" && a.params[0].type === "RestElement" && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
}, P.parseClassField = function(e) {
	return Gn(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Gn(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(j.eq) ? (this.enterScope(wn | xn), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
}, P.parseClassStaticBlock = function(e) {
	e.body = [];
	var t = this.labels;
	for (this.labels = [], this.enterScope(Cn | xn); this.type !== j.braceR;) {
		var n = this.parseStatement(null);
		e.body.push(n);
	}
	return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
}, P.parseClassId = function(e, t) {
	this.type === j.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, An, !1)) : (t === !0 && this.unexpected(), e.id = null);
}, P.parseClassSuper = function(e) {
	e.superClass = this.eat(j._extends) ? this.parseExprSubscripts(null, !1) : null;
}, P.enterClassBody = function() {
	var e = {
		declared: Object.create(null),
		used: []
	};
	return this.privateNameStack.push(e), e.declared;
}, P.exitClassBody = function() {
	var e = this.privateNameStack.pop(), t = e.declared, n = e.used;
	if (this.options.checkPrivateFields) for (var r = this.privateNameStack.length, i = r === 0 ? null : this.privateNameStack[r - 1], a = 0; a < n.length; ++a) {
		var o = n[a];
		tn(t, o.name) || (i ? i.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
	}
};
function Wn(e, t) {
	var n = t.key.name, r = e[n], i = "true";
	return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (i = (t.static ? "s" : "i") + t.kind), r === "iget" && i === "iset" || r === "iset" && i === "iget" || r === "sget" && i === "sset" || r === "sset" && i === "sget" ? (e[n] = "true", !1) : r ? !0 : (e[n] = i, !1);
}
function Gn(e, t) {
	var n = e.computed, r = e.key;
	return !n && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
P.parseExportAllDeclaration = function(e, t) {
	return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== j.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
}, P.parseExport = function(e, t) {
	if (this.next(), this.eat(j.star)) return this.parseExportAllDeclaration(e, t);
	if (this.eat(j._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
	if (this.shouldParseExportStatement()) e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
	else {
		if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== j.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
		else {
			for (var n = 0, r = e.specifiers; n < r.length; n += 1) {
				var i = r[n];
				this.checkUnreserved(i.local), this.checkLocalExport(i.local), i.local.type === "Literal" && this.raise(i.local.start, "A string literal cannot be used as an exported binding without `from`.");
			}
			e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
		}
		this.semicolon();
	}
	return this.finishNode(e, "ExportNamedDeclaration");
}, P.parseExportDeclaration = function(e) {
	return this.parseStatement(null);
}, P.parseExportDefaultDeclaration = function() {
	var e;
	if (this.type === j._function || (e = this.isAsyncFunction())) {
		var t = this.startNode();
		return this.next(), e && this.next(), this.parseFunction(t, Vn | Un, !1, e);
	}
	if (this.type === j._class) {
		var n = this.startNode();
		return this.parseClass(n, "nullableID");
	}
	var r = this.parseMaybeAssign();
	return this.semicolon(), r;
}, P.checkExport = function(e, t, n) {
	e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), tn(e, t) && this.raiseRecoverable(n, "Duplicate export '" + t + "'"), e[t] = !0);
}, P.checkPatternExport = function(e, t) {
	var n = t.type;
	if (n === "Identifier") this.checkExport(e, t, t.start);
	else if (n === "ObjectPattern") for (var r = 0, i = t.properties; r < i.length; r += 1) {
		var a = i[r];
		this.checkPatternExport(e, a);
	}
	else if (n === "ArrayPattern") for (var o = 0, s = t.elements; o < s.length; o += 1) {
		var c = s[o];
		c && this.checkPatternExport(e, c);
	}
	else n === "Property" ? this.checkPatternExport(e, t.value) : n === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : n === "RestElement" && this.checkPatternExport(e, t.argument);
}, P.checkVariableExport = function(e, t) {
	if (e) for (var n = 0, r = t; n < r.length; n += 1) {
		var i = r[n];
		this.checkPatternExport(e, i.id);
	}
}, P.shouldParseExportStatement = function() {
	return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
}, P.parseExportSpecifier = function(e) {
	var t = this.startNode();
	return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
}, P.parseExportSpecifiers = function(e) {
	var t = [], n = !0;
	for (this.expect(j.braceL); !this.eat(j.braceR);) {
		if (n) n = !1;
		else if (this.expect(j.comma), this.afterTrailingComma(j.braceR)) break;
		t.push(this.parseExportSpecifier(e));
	}
	return t;
}, P.parseImport = function(e) {
	return this.next(), this.type === j.string ? (e.specifiers = Bn, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === j.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
}, P.parseImportSpecifier = function() {
	var e = this.startNode();
	return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, An), this.finishNode(e, "ImportSpecifier");
}, P.parseImportDefaultSpecifier = function() {
	var e = this.startNode();
	return e.local = this.parseIdent(), this.checkLValSimple(e.local, An), this.finishNode(e, "ImportDefaultSpecifier");
}, P.parseImportNamespaceSpecifier = function() {
	var e = this.startNode();
	return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, An), this.finishNode(e, "ImportNamespaceSpecifier");
}, P.parseImportSpecifiers = function() {
	var e = [], t = !0;
	if (this.type === j.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(j.comma))) return e;
	if (this.type === j.star) return e.push(this.parseImportNamespaceSpecifier()), e;
	for (this.expect(j.braceL); !this.eat(j.braceR);) {
		if (t) t = !1;
		else if (this.expect(j.comma), this.afterTrailingComma(j.braceR)) break;
		e.push(this.parseImportSpecifier());
	}
	return e;
}, P.parseWithClause = function() {
	var e = [];
	if (!this.eat(j._with)) return e;
	this.expect(j.braceL);
	for (var t = {}, n = !0; !this.eat(j.braceR);) {
		if (n) n = !1;
		else if (this.expect(j.comma), this.afterTrailingComma(j.braceR)) break;
		var r = this.parseImportAttribute(), i = r.key.type === "Identifier" ? r.key.name : r.key.value;
		tn(t, i) && this.raiseRecoverable(r.key.start, "Duplicate attribute key '" + i + "'"), t[i] = !0, e.push(r);
	}
	return e;
}, P.parseImportAttribute = function() {
	var e = this.startNode();
	return e.key = this.type === j.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(j.colon), this.type !== j.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
}, P.parseModuleExportName = function() {
	if (this.options.ecmaVersion >= 13 && this.type === j.string) {
		var e = this.parseLiteral(this.value);
		return sn.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
	}
	return this.parseIdent(!0);
}, P.adaptDirectivePrologue = function(e) {
	for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
}, P.isDirectiveCandidate = function(e) {
	return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === "\"" || this.input[e.start] === "'");
};
var Kn = N.prototype;
Kn.toAssignable = function(e, t, n) {
	if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
		case "Identifier":
			this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
			break;
		case "ObjectPattern":
		case "ArrayPattern":
		case "AssignmentPattern":
		case "RestElement": break;
		case "ObjectExpression":
			e.type = "ObjectPattern", n && this.checkPatternErrors(n, !0);
			for (var r = 0, i = e.properties; r < i.length; r += 1) {
				var a = i[r];
				this.toAssignable(a, t), a.type === "RestElement" && (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") && this.raise(a.argument.start, "Unexpected token");
			}
			break;
		case "Property":
			e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
			break;
		case "ArrayExpression":
			e.type = "ArrayPattern", n && this.checkPatternErrors(n, !0), this.toAssignableList(e.elements, t);
			break;
		case "SpreadElement":
			e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
			break;
		case "AssignmentExpression":
			e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
			break;
		case "ParenthesizedExpression":
			this.toAssignable(e.expression, t, n);
			break;
		case "ChainExpression":
			this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
			break;
		case "MemberExpression": if (!t) break;
		default: this.raise(e.start, "Assigning to rvalue");
	}
	else n && this.checkPatternErrors(n, !0);
	return e;
}, Kn.toAssignableList = function(e, t) {
	for (var n = e.length, r = 0; r < n; r++) {
		var i = e[r];
		i && this.toAssignable(i, t);
	}
	if (n) {
		var a = e[n - 1];
		this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
	}
	return e;
}, Kn.parseSpread = function(e) {
	var t = this.startNode();
	return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
}, Kn.parseRestBinding = function() {
	var e = this.startNode();
	return this.next(), this.options.ecmaVersion === 6 && this.type !== j.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
}, Kn.parseBindingAtom = function() {
	if (this.options.ecmaVersion >= 6) switch (this.type) {
		case j.bracketL:
			var e = this.startNode();
			return this.next(), e.elements = this.parseBindingList(j.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
		case j.braceL: return this.parseObj(!0);
	}
	return this.parseIdent();
}, Kn.parseBindingList = function(e, t, n, r) {
	for (var i = [], a = !0; !this.eat(e);) if (a ? a = !1 : this.expect(j.comma), t && this.type === j.comma) i.push(null);
	else if (n && this.afterTrailingComma(e)) break;
	else if (this.type === j.ellipsis) {
		var o = this.parseRestBinding();
		this.parseBindingListItem(o), i.push(o), this.type === j.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
		break;
	} else i.push(this.parseAssignableListItem(r));
	return i;
}, Kn.parseAssignableListItem = function(e) {
	var t = this.parseMaybeDefault(this.start, this.startLoc);
	return this.parseBindingListItem(t), t;
}, Kn.parseBindingListItem = function(e) {
	return e;
}, Kn.parseMaybeDefault = function(e, t, n) {
	if (n ||= this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(j.eq)) return n;
	var r = this.startNodeAt(e, t);
	return r.left = n, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
}, Kn.checkLValSimple = function(e, t, n) {
	t === void 0 && (t = On);
	var r = t !== On;
	switch (e.type) {
		case "Identifier":
			this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === An && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), n && (tn(n, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), n[e.name] = !0), t !== Nn && this.declareName(e.name, t, e.start));
			break;
		case "ChainExpression":
			this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
			break;
		case "MemberExpression":
			r && this.raiseRecoverable(e.start, "Binding member expression");
			break;
		case "ParenthesizedExpression": return r && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, n);
		default: this.raise(e.start, (r ? "Binding" : "Assigning to") + " rvalue");
	}
}, Kn.checkLValPattern = function(e, t, n) {
	switch (t === void 0 && (t = On), e.type) {
		case "ObjectPattern":
			for (var r = 0, i = e.properties; r < i.length; r += 1) {
				var a = i[r];
				this.checkLValInnerPattern(a, t, n);
			}
			break;
		case "ArrayPattern":
			for (var o = 0, s = e.elements; o < s.length; o += 1) {
				var c = s[o];
				c && this.checkLValInnerPattern(c, t, n);
			}
			break;
		default: this.checkLValSimple(e, t, n);
	}
}, Kn.checkLValInnerPattern = function(e, t, n) {
	switch (t === void 0 && (t = On), e.type) {
		case "Property":
			this.checkLValInnerPattern(e.value, t, n);
			break;
		case "AssignmentPattern":
			this.checkLValPattern(e.left, t, n);
			break;
		case "RestElement":
			this.checkLValPattern(e.argument, t, n);
			break;
		default: this.checkLValPattern(e, t, n);
	}
};
var qn = function(e, t, n, r, i) {
	this.token = e, this.isExpr = !!t, this.preserveSpace = !!n, this.override = r, this.generator = !!i;
}, F = {
	b_stat: new qn("{", !1),
	b_expr: new qn("{", !0),
	b_tmpl: new qn("${", !1),
	p_stat: new qn("(", !1),
	p_expr: new qn("(", !0),
	q_tmpl: new qn("`", !0, !0, function(e) {
		return e.tryReadTemplateToken();
	}),
	f_stat: new qn("function", !1),
	f_expr: new qn("function", !0),
	f_expr_gen: new qn("function", !0, !1, null, !0),
	f_gen: new qn("function", !1, !1, null, !0)
}, Jn = N.prototype;
Jn.initialContext = function() {
	return [F.b_stat];
}, Jn.curContext = function() {
	return this.context[this.context.length - 1];
}, Jn.braceIsBlock = function(e) {
	var t = this.curContext();
	return t === F.f_expr || t === F.f_stat ? !0 : e === j.colon && (t === F.b_stat || t === F.b_expr) ? !t.isExpr : e === j._return || e === j.name && this.exprAllowed ? qt.test(this.input.slice(this.lastTokEnd, this.start)) : e === j._else || e === j.semi || e === j.eof || e === j.parenR || e === j.arrow ? !0 : e === j.braceL ? t === F.b_stat : e === j._var || e === j._const || e === j.name ? !1 : !this.exprAllowed;
}, Jn.inGeneratorContext = function() {
	for (var e = this.context.length - 1; e >= 1; e--) {
		var t = this.context[e];
		if (t.token === "function") return t.generator;
	}
	return !1;
}, Jn.updateContext = function(e) {
	var t, n = this.type;
	n.keyword && e === j.dot ? this.exprAllowed = !1 : (t = n.updateContext) ? t.call(this, e) : this.exprAllowed = n.beforeExpr;
}, Jn.overrideContext = function(e) {
	this.curContext() !== e && (this.context[this.context.length - 1] = e);
}, j.parenR.updateContext = j.braceR.updateContext = function() {
	if (this.context.length === 1) {
		this.exprAllowed = !0;
		return;
	}
	var e = this.context.pop();
	e === F.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
}, j.braceL.updateContext = function(e) {
	this.context.push(this.braceIsBlock(e) ? F.b_stat : F.b_expr), this.exprAllowed = !0;
}, j.dollarBraceL.updateContext = function() {
	this.context.push(F.b_tmpl), this.exprAllowed = !0;
}, j.parenL.updateContext = function(e) {
	var t = e === j._if || e === j._for || e === j._with || e === j._while;
	this.context.push(t ? F.p_stat : F.p_expr), this.exprAllowed = !0;
}, j.incDec.updateContext = function() {}, j._function.updateContext = j._class.updateContext = function(e) {
	e.beforeExpr && e !== j._else && (e !== j.semi || this.curContext() === F.p_stat) && !(e === j._return && qt.test(this.input.slice(this.lastTokEnd, this.start))) && (e !== j.colon && e !== j.braceL || this.curContext() !== F.b_stat) ? this.context.push(F.f_expr) : this.context.push(F.f_stat), this.exprAllowed = !1;
}, j.colon.updateContext = function() {
	this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
}, j.backQuote.updateContext = function() {
	this.curContext() === F.q_tmpl ? this.context.pop() : this.context.push(F.q_tmpl), this.exprAllowed = !1;
}, j.star.updateContext = function(e) {
	if (e === j._function) {
		var t = this.context.length - 1;
		this.context[t] === F.f_expr ? this.context[t] = F.f_expr_gen : this.context[t] = F.f_gen;
	}
	this.exprAllowed = !0;
}, j.name.updateContext = function(e) {
	var t = !1;
	this.options.ecmaVersion >= 6 && e !== j.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var I = N.prototype;
I.checkPropClash = function(e, t, n) {
	if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
		var r = e.key, i;
		switch (r.type) {
			case "Identifier":
				i = r.name;
				break;
			case "Literal":
				i = String(r.value);
				break;
			default: return;
		}
		var a = e.kind;
		if (this.options.ecmaVersion >= 6) {
			i === "__proto__" && a === "init" && (t.proto && (n ? n.doubleProto < 0 && (n.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), t.proto = !0);
			return;
		}
		i = "$" + i;
		var o = t[i];
		o ? (a === "init" ? this.strict && o.init || o.get || o.set : o.init || o[a]) && this.raiseRecoverable(r.start, "Redefinition of property") : o = t[i] = {
			init: !1,
			get: !1,
			set: !1
		}, o[a] = !0;
	}
}, I.parseExpression = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseMaybeAssign(e, t);
	if (this.type === j.comma) {
		var a = this.startNodeAt(n, r);
		for (a.expressions = [i]; this.eat(j.comma);) a.expressions.push(this.parseMaybeAssign(e, t));
		return this.finishNode(a, "SequenceExpression");
	}
	return i;
}, I.parseMaybeAssign = function(e, t, n) {
	if (this.isContextual("yield")) {
		if (this.inGenerator) return this.parseYield(e);
		this.exprAllowed = !1;
	}
	var r = !1, i = -1, a = -1, o = -1;
	t ? (i = t.parenthesizedAssign, a = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Ln(), r = !0);
	var s = this.start, c = this.startLoc;
	(this.type === j.parenL || this.type === j.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
	var l = this.parseMaybeConditional(e, t);
	if (n && (l = n.call(this, l, s, c)), this.type.isAssign) {
		var u = this.startNodeAt(s, c);
		return u.operator = this.value, this.type === j.eq && (l = this.toAssignable(l, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= l.start && (t.shorthandAssign = -1), this.type === j.eq ? this.checkLValPattern(l) : this.checkLValSimple(l), u.left = l, this.next(), u.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(u, "AssignmentExpression");
	}
	return r && this.checkExpressionErrors(t, !0), i > -1 && (t.parenthesizedAssign = i), a > -1 && (t.trailingComma = a), l;
}, I.parseMaybeConditional = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseExprOps(e, t);
	if (this.checkExpressionErrors(t)) return i;
	if (this.eat(j.question)) {
		var a = this.startNodeAt(n, r);
		return a.test = i, a.consequent = this.parseMaybeAssign(), this.expect(j.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
	}
	return i;
}, I.parseExprOps = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseMaybeUnary(t, !1, !1, e);
	return this.checkExpressionErrors(t) || i.start === n && i.type === "ArrowFunctionExpression" ? i : this.parseExprOp(i, n, r, -1, e);
}, I.parseExprOp = function(e, t, n, r, i) {
	var a = this.type.binop;
	if (a != null && (!i || this.type !== j._in) && a > r) {
		var o = this.type === j.logicalOR || this.type === j.logicalAND, s = this.type === j.coalesce;
		s && (a = j.logicalAND.binop);
		var c = this.value;
		this.next();
		var l = this.start, u = this.startLoc, d = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, i), l, u, a, i), f = this.buildBinary(t, n, e, d, c, o || s);
		return (o && this.type === j.coalesce || s && (this.type === j.logicalOR || this.type === j.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(f, t, n, r, i);
	}
	return e;
}, I.buildBinary = function(e, t, n, r, i, a) {
	r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
	var o = this.startNodeAt(e, t);
	return o.left = n, o.operator = i, o.right = r, this.finishNode(o, a ? "LogicalExpression" : "BinaryExpression");
}, I.parseMaybeUnary = function(e, t, n, r) {
	var i = this.start, a = this.startLoc, o;
	if (this.isContextual("await") && this.canAwait) o = this.parseAwait(r), t = !0;
	else if (this.type.prefix) {
		var s = this.startNode(), c = this.type === j.incDec;
		s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0, c, r), this.checkExpressionErrors(e, !0), c ? this.checkLValSimple(s.argument) : this.strict && s.operator === "delete" && Yn(s.argument) ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : s.operator === "delete" && Xn(s.argument) ? this.raiseRecoverable(s.start, "Private fields can not be deleted") : t = !0, o = this.finishNode(s, c ? "UpdateExpression" : "UnaryExpression");
	} else if (!t && this.type === j.privateId) (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== j._in && this.unexpected();
	else {
		if (o = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e)) return o;
		for (; this.type.postfix && !this.canInsertSemicolon();) {
			var l = this.startNodeAt(i, a);
			l.operator = this.value, l.prefix = !1, l.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(l, "UpdateExpression");
		}
	}
	if (!n && this.eat(j.starstar)) {
		if (t) this.unexpected(this.lastTokStart);
		else return this.buildBinary(i, a, o, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
	} else return o;
};
function Yn(e) {
	return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Yn(e.expression);
}
function Xn(e) {
	return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Xn(e.expression) || e.type === "ParenthesizedExpression" && Xn(e.expression);
}
I.parseExprSubscripts = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseExprAtom(e, t);
	if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return i;
	var a = this.parseSubscripts(i, n, r, !1, t);
	return e && a.type === "MemberExpression" && (e.parenthesizedAssign >= a.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= a.start && (e.parenthesizedBind = -1), e.trailingComma >= a.start && (e.trailingComma = -1)), a;
}, I.parseSubscripts = function(e, t, n, r, i) {
	for (var a = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = !1;;) {
		var s = this.parseSubscript(e, t, n, r, a, o, i);
		if (s.optional && (o = !0), s === e || s.type === "ArrowFunctionExpression") {
			if (o) {
				var c = this.startNodeAt(t, n);
				c.expression = s, s = this.finishNode(c, "ChainExpression");
			}
			return s;
		}
		e = s;
	}
}, I.shouldParseAsyncArrow = function() {
	return !this.canInsertSemicolon() && this.eat(j.arrow);
}, I.parseSubscriptAsyncArrow = function(e, t, n, r) {
	return this.parseArrowExpression(this.startNodeAt(e, t), n, !0, r);
}, I.parseSubscript = function(e, t, n, r, i, a, o) {
	var s = this.options.ecmaVersion >= 11, c = s && this.eat(j.questionDot);
	r && c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
	var l = this.eat(j.bracketL);
	if (l || c && this.type !== j.parenL && this.type !== j.backQuote || this.eat(j.dot)) {
		var u = this.startNodeAt(t, n);
		u.object = e, l ? (u.property = this.parseExpression(), this.expect(j.bracketR)) : u.property = this.type === j.privateId && e.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), u.computed = !!l, s && (u.optional = c), e = this.finishNode(u, "MemberExpression");
	} else if (!r && this.eat(j.parenL)) {
		var d = new Ln(), f = this.yieldPos, p = this.awaitPos, m = this.awaitIdentPos;
		this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
		var h = this.parseExprList(j.parenR, this.options.ecmaVersion >= 8, !1, d);
		if (i && !c && this.shouldParseAsyncArrow()) return this.checkPatternErrors(d, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = f, this.awaitPos = p, this.awaitIdentPos = m, this.parseSubscriptAsyncArrow(t, n, h, o);
		this.checkExpressionErrors(d, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = p || this.awaitPos, this.awaitIdentPos = m || this.awaitIdentPos;
		var g = this.startNodeAt(t, n);
		g.callee = e, g.arguments = h, s && (g.optional = c), e = this.finishNode(g, "CallExpression");
	} else if (this.type === j.backQuote) {
		(c || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
		var _ = this.startNodeAt(t, n);
		_.tag = e, _.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(_, "TaggedTemplateExpression");
	}
	return e;
}, I.parseExprAtom = function(e, t, n) {
	this.type === j.slash && this.readRegexp();
	var r, i = this.potentialArrowAt === this.start;
	switch (this.type) {
		case j._super: return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === j.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== j.dot && this.type !== j.bracketL && this.type !== j.parenL && this.unexpected(), this.finishNode(r, "Super");
		case j._this: return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
		case j.name:
			var a = this.start, o = this.startLoc, s = this.containsEsc, c = this.parseIdent(!1);
			if (this.options.ecmaVersion >= 8 && !s && c.name === "async" && !this.canInsertSemicolon() && this.eat(j._function)) return this.overrideContext(F.f_expr), this.parseFunction(this.startNodeAt(a, o), 0, !1, !0, t);
			if (i && !this.canInsertSemicolon()) {
				if (this.eat(j.arrow)) return this.parseArrowExpression(this.startNodeAt(a, o), [c], !1, t);
				if (this.options.ecmaVersion >= 8 && c.name === "async" && this.type === j.name && !s && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return c = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(j.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, o), [c], !0, t);
			}
			return c;
		case j.regexp:
			var l = this.value;
			return r = this.parseLiteral(l.value), r.regex = {
				pattern: l.pattern,
				flags: l.flags
			}, r;
		case j.num:
		case j.string: return this.parseLiteral(this.value);
		case j._null:
		case j._true:
		case j._false: return r = this.startNode(), r.value = this.type === j._null ? null : this.type === j._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
		case j.parenL:
			var u = this.start, d = this.parseParenAndDistinguishExpression(i, t);
			return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(d) && (e.parenthesizedAssign = u), e.parenthesizedBind < 0 && (e.parenthesizedBind = u)), d;
		case j.bracketL: return r = this.startNode(), this.next(), r.elements = this.parseExprList(j.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
		case j.braceL: return this.overrideContext(F.b_expr), this.parseObj(!1, e);
		case j._function: return r = this.startNode(), this.next(), this.parseFunction(r, 0);
		case j._class: return this.parseClass(this.startNode(), !1);
		case j._new: return this.parseNew();
		case j.backQuote: return this.parseTemplate();
		case j._import: return this.options.ecmaVersion >= 11 ? this.parseExprImport(n) : this.unexpected();
		default: return this.parseExprAtomDefault();
	}
}, I.parseExprAtomDefault = function() {
	this.unexpected();
}, I.parseExprImport = function(e) {
	var t = this.startNode();
	if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === j.parenL && !e) return this.parseDynamicImport(t);
	if (this.type === j.dot) {
		var n = this.startNodeAt(t.start, t.loc && t.loc.start);
		return n.name = "import", t.meta = this.finishNode(n, "Identifier"), this.parseImportMeta(t);
	}
	this.unexpected();
}, I.parseDynamicImport = function(e) {
	if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(j.parenR) ? e.options = null : (this.expect(j.comma), this.afterTrailingComma(j.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(j.parenR) || (this.expect(j.comma), this.afterTrailingComma(j.parenR) || this.unexpected())));
	else if (!this.eat(j.parenR)) {
		var t = this.start;
		this.eat(j.comma) && this.eat(j.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
	}
	return this.finishNode(e, "ImportExpression");
}, I.parseImportMeta = function(e) {
	this.next();
	var t = this.containsEsc;
	return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
}, I.parseLiteral = function(e) {
	var t = this.startNode();
	return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value == null ? t.raw.slice(0, -1).replace(/_/g, "") : t.value.toString()), this.next(), this.finishNode(t, "Literal");
}, I.parseParenExpression = function() {
	this.expect(j.parenL);
	var e = this.parseExpression();
	return this.expect(j.parenR), e;
}, I.shouldParseArrow = function(e) {
	return !this.canInsertSemicolon();
}, I.parseParenAndDistinguishExpression = function(e, t) {
	var n = this.start, r = this.startLoc, i, a = this.options.ecmaVersion >= 8;
	if (this.options.ecmaVersion >= 6) {
		this.next();
		var o = this.start, s = this.startLoc, c = [], l = !0, u = !1, d = new Ln(), f = this.yieldPos, p = this.awaitPos, m;
		for (this.yieldPos = 0, this.awaitPos = 0; this.type !== j.parenR;) {
			if (l ? l = !1 : this.expect(j.comma), a && this.afterTrailingComma(j.parenR, !0)) {
				u = !0;
				break;
			}
			if (this.type === j.ellipsis) {
				m = this.start, c.push(this.parseParenItem(this.parseRestBinding())), this.type === j.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
				break;
			}
			c.push(this.parseMaybeAssign(!1, d, this.parseParenItem));
		}
		var h = this.lastTokEnd, g = this.lastTokEndLoc;
		if (this.expect(j.parenR), e && this.shouldParseArrow(c) && this.eat(j.arrow)) return this.checkPatternErrors(d, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = f, this.awaitPos = p, this.parseParenArrowList(n, r, c, t);
		(!c.length || u) && this.unexpected(this.lastTokStart), m && this.unexpected(m), this.checkExpressionErrors(d, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = p || this.awaitPos, c.length > 1 ? (i = this.startNodeAt(o, s), i.expressions = c, this.finishNodeAt(i, "SequenceExpression", h, g)) : i = c[0];
	} else i = this.parseParenExpression();
	if (this.options.preserveParens) {
		var _ = this.startNodeAt(n, r);
		return _.expression = i, this.finishNode(_, "ParenthesizedExpression");
	}
	return i;
}, I.parseParenItem = function(e) {
	return e;
}, I.parseParenArrowList = function(e, t, n, r) {
	return this.parseArrowExpression(this.startNodeAt(e, t), n, !1, r);
};
var Zn = [];
I.parseNew = function() {
	this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
	var e = this.startNode();
	if (this.next(), this.options.ecmaVersion >= 6 && this.type === j.dot) {
		var t = this.startNodeAt(e.start, e.loc && e.loc.start);
		t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
		var n = this.containsEsc;
		return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), n && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
	}
	var r = this.start, i = this.startLoc;
	return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, i, !0, !1), e.arguments = this.eat(j.parenL) ? this.parseExprList(j.parenR, this.options.ecmaVersion >= 8, !1) : Zn, this.finishNode(e, "NewExpression");
}, I.parseTemplateElement = function(e) {
	var t = e.isTagged, n = this.startNode();
	return this.type === j.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), n.value = {
		raw: this.value.replace(/\r\n?/g, "\n"),
		cooked: null
	}) : n.value = {
		raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
		cooked: this.value
	}, this.next(), n.tail = this.type === j.backQuote, this.finishNode(n, "TemplateElement");
}, I.parseTemplate = function(e) {
	e === void 0 && (e = {});
	var t = e.isTagged;
	t === void 0 && (t = !1);
	var n = this.startNode();
	this.next(), n.expressions = [];
	var r = this.parseTemplateElement({ isTagged: t });
	for (n.quasis = [r]; !r.tail;) this.type === j.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(j.dollarBraceL), n.expressions.push(this.parseExpression()), this.expect(j.braceR), n.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
	return this.next(), this.finishNode(n, "TemplateLiteral");
}, I.isAsyncProp = function(e) {
	return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === j.name || this.type === j.num || this.type === j.string || this.type === j.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === j.star) && !qt.test(this.input.slice(this.lastTokEnd, this.start));
}, I.parseObj = function(e, t) {
	var n = this.startNode(), r = !0, i = {};
	for (n.properties = [], this.next(); !this.eat(j.braceR);) {
		if (r) r = !1;
		else if (this.expect(j.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(j.braceR)) break;
		var a = this.parseProperty(e, t);
		e || this.checkPropClash(a, i, t), n.properties.push(a);
	}
	return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression");
}, I.parseProperty = function(e, t) {
	var n = this.startNode(), r, i, a, o;
	if (this.options.ecmaVersion >= 9 && this.eat(j.ellipsis)) return e ? (n.argument = this.parseIdent(!1), this.type === j.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (n.argument = this.parseMaybeAssign(!1, t), this.type === j.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
	this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (e || t) && (a = this.start, o = this.startLoc), e || (r = this.eat(j.star)));
	var s = this.containsEsc;
	return this.parsePropertyName(n), !e && !s && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(n) ? (i = !0, r = this.options.ecmaVersion >= 9 && this.eat(j.star), this.parsePropertyName(n)) : i = !1, this.parsePropertyValue(n, e, r, i, a, o, t, s), this.finishNode(n, "Property");
}, I.parseGetterSetter = function(e) {
	var t = e.key.name;
	this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
	var n = e.kind === "get" ? 0 : 1;
	if (e.value.params.length !== n) {
		var r = e.value.start;
		e.kind === "get" ? this.raiseRecoverable(r, "getter should have no params") : this.raiseRecoverable(r, "setter should have exactly one param");
	} else e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
}, I.parsePropertyValue = function(e, t, n, r, i, a, o, s) {
	(n || r) && this.type === j.colon && this.unexpected(), this.eat(j.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === j.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(n, r), e.kind = "init") : !t && !s && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== j.comma && this.type !== j.braceR && this.type !== j.eq ? ((n || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((n || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i), t ? e.value = this.parseMaybeDefault(i, a, this.copyNode(e.key)) : this.type === j.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, a, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
}, I.parsePropertyName = function(e) {
	if (this.options.ecmaVersion >= 6) {
		if (this.eat(j.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(j.bracketR), e.key;
		e.computed = !1;
	}
	return e.key = this.type === j.num || this.type === j.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
}, I.initFunction = function(e) {
	e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
}, I.parseMethod = function(e, t, n) {
	var r = this.startNode(), i = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
	return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Dn(t, r.generator) | xn | (n ? Sn : 0)), this.expect(j.parenL), r.params = this.parseBindingList(j.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(r, "FunctionExpression");
}, I.parseArrowExpression = function(e, t, n, r) {
	var i = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
	return this.enterScope(Dn(n, !1) | yn), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
}, I.parseFunctionBody = function(e, t, n, r) {
	var i = t && this.type !== j.braceL, a = this.strict, o = !1;
	if (i) e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
	else {
		var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
		(!a || s) && (o = this.strictDirective(this.end), o && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
		var c = this.labels;
		this.labels = [], o && (this.strict = !0), this.checkParams(e, !a && !o && !t && !n && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Nn), e.body = this.parseBlock(!1, void 0, o && !a), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = c;
	}
	this.exitScope();
}, I.isSimpleParamList = function(e) {
	for (var t = 0, n = e; t < n.length; t += 1) if (n[t].type !== "Identifier") return !1;
	return !0;
}, I.checkParams = function(e, t) {
	for (var n = Object.create(null), r = 0, i = e.params; r < i.length; r += 1) {
		var a = i[r];
		this.checkLValInnerPattern(a, kn, t ? null : n);
	}
}, I.parseExprList = function(e, t, n, r) {
	for (var i = [], a = !0; !this.eat(e);) {
		if (a) a = !1;
		else if (this.expect(j.comma), t && this.afterTrailingComma(e)) break;
		var o = void 0;
		n && this.type === j.comma ? o = null : this.type === j.ellipsis ? (o = this.parseSpread(r), r && this.type === j.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : o = this.parseMaybeAssign(!1, r), i.push(o);
	}
	return i;
}, I.checkUnreserved = function(e) {
	var t = e.start, n = e.end, r = e.name;
	this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & En) && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, n).indexOf("\\") !== -1) && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
}, I.parseIdent = function(e) {
	var t = this.parseIdentNode();
	return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
}, I.parseIdentNode = function() {
	var e = this.startNode();
	return this.type === j.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = j.name) : this.unexpected(), e;
}, I.parsePrivateIdent = function() {
	var e = this.startNode();
	return this.type === j.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
}, I.parseYield = function(e) {
	this.yieldPos ||= this.start;
	var t = this.startNode();
	return this.next(), this.type === j.semi || this.canInsertSemicolon() || this.type !== j.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(j.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
}, I.parseAwait = function(e) {
	this.awaitPos ||= this.start;
	var t = this.startNode();
	return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Qn = N.prototype;
Qn.raise = function(e, t) {
	var n = un(this.input, e);
	t += " (" + n.line + ":" + n.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
	var r = SyntaxError(t);
	throw r.pos = e, r.loc = n, r.raisedAt = this.pos, r;
}, Qn.raiseRecoverable = Qn.raise, Qn.curPosition = function() {
	if (this.options.locations) return new cn(this.curLine, this.pos - this.lineStart);
};
var $n = N.prototype, er = function(e) {
	this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
$n.enterScope = function(e) {
	this.scopeStack.push(new er(e));
}, $n.exitScope = function() {
	this.scopeStack.pop();
}, $n.treatFunctionsAsVarInScope = function(e) {
	return e.flags & gn || !this.inModule && e.flags & hn;
}, $n.declareName = function(e, t, n) {
	var r = !1;
	if (t === An) {
		var i = this.currentScope();
		r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && i.flags & hn && delete this.undefinedExports[e];
	} else if (t === Mn) this.currentScope().lexical.push(e);
	else if (t === jn) {
		var a = this.currentScope();
		r = this.treatFunctionsAsVar ? a.lexical.indexOf(e) > -1 : a.lexical.indexOf(e) > -1 || a.var.indexOf(e) > -1, a.functions.push(e);
	} else for (var o = this.scopeStack.length - 1; o >= 0; --o) {
		var s = this.scopeStack[o];
		if (s.lexical.indexOf(e) > -1 && !(s.flags & bn && s.lexical[0] === e) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(e) > -1) {
			r = !0;
			break;
		}
		if (s.var.push(e), this.inModule && s.flags & hn && delete this.undefinedExports[e], s.flags & En) break;
	}
	r && this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared");
}, $n.checkLocalExport = function(e) {
	this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
}, $n.currentScope = function() {
	return this.scopeStack[this.scopeStack.length - 1];
}, $n.currentVarScope = function() {
	for (var e = this.scopeStack.length - 1;; e--) {
		var t = this.scopeStack[e];
		if (t.flags & (En | wn | Cn)) return t;
	}
}, $n.currentThisScope = function() {
	for (var e = this.scopeStack.length - 1;; e--) {
		var t = this.scopeStack[e];
		if (t.flags & (En | wn | Cn) && !(t.flags & yn)) return t;
	}
};
var tr = function(e, t, n) {
	this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new ln(e, n)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0]);
}, nr = N.prototype;
nr.startNode = function() {
	return new tr(this, this.start, this.startLoc);
}, nr.startNodeAt = function(e, t) {
	return new tr(this, e, t);
};
function rr(e, t, n, r) {
	return e.type = t, e.end = n, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = n), e;
}
nr.finishNode = function(e, t) {
	return rr.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
}, nr.finishNodeAt = function(e, t, n, r) {
	return rr.call(this, e, t, n, r);
}, nr.copyNode = function(e) {
	var t = new tr(this, e.start, this.startLoc);
	for (var n in e) t[n] = e[n];
	return t;
};
var ir = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz", ar = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", or = ar + " Extended_Pictographic", sr = or, cr = sr + " EBase EComp EMod EPres ExtPict", lr = cr, ur = {
	9: ar,
	10: or,
	11: sr,
	12: cr,
	13: lr,
	14: lr
}, dr = {
	9: "",
	10: "",
	11: "",
	12: "",
	13: "",
	14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
}, fr = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", pr = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", mr = pr + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", hr = mr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", gr = hr + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", _r = gr + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", vr = {
	9: pr,
	10: mr,
	11: hr,
	12: gr,
	13: _r,
	14: _r + " " + ir
}, yr = {};
function br(e) {
	var t = yr[e] = {
		binary: an(ur[e] + " " + fr),
		binaryOfStrings: an(dr[e]),
		nonBinary: {
			General_Category: an(fr),
			Script: an(vr[e])
		}
	};
	t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var xr = 0, Sr = [
	9,
	10,
	11,
	12,
	13,
	14
]; xr < Sr.length; xr += 1) {
	var Cr = Sr[xr];
	br(Cr);
}
var L = N.prototype, wr = function(e, t) {
	this.parent = e, this.base = t || this;
};
wr.prototype.separatedFrom = function(e) {
	for (var t = this; t; t = t.parent) for (var n = e; n; n = n.parent) if (t.base === n.base && t !== n) return !0;
	return !1;
}, wr.prototype.sibling = function() {
	return new wr(this.parent, this.base);
};
var Tr = function(e) {
	this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = yr[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Tr.prototype.reset = function(e, t, n) {
	var r = n.indexOf("v") !== -1, i = n.indexOf("u") !== -1;
	this.start = e | 0, this.source = t + "", this.flags = n, r && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = i && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = i && this.parser.options.ecmaVersion >= 9);
}, Tr.prototype.raise = function(e) {
	this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
}, Tr.prototype.at = function(e, t) {
	t === void 0 && (t = !1);
	var n = this.source, r = n.length;
	if (e >= r) return -1;
	var i = n.charCodeAt(e);
	if (!(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r) return i;
	var a = n.charCodeAt(e + 1);
	return a >= 56320 && a <= 57343 ? (i << 10) + a - 56613888 : i;
}, Tr.prototype.nextIndex = function(e, t) {
	t === void 0 && (t = !1);
	var n = this.source, r = n.length;
	if (e >= r) return r;
	var i = n.charCodeAt(e), a;
	return !(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r || (a = n.charCodeAt(e + 1)) < 56320 || a > 57343 ? e + 1 : e + 2;
}, Tr.prototype.current = function(e) {
	return e === void 0 && (e = !1), this.at(this.pos, e);
}, Tr.prototype.lookahead = function(e) {
	return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
}, Tr.prototype.advance = function(e) {
	e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
}, Tr.prototype.eat = function(e, t) {
	return t === void 0 && (t = !1), this.current(t) === e && (this.advance(t), !0);
}, Tr.prototype.eatChars = function(e, t) {
	t === void 0 && (t = !1);
	for (var n = this.pos, r = 0, i = e; r < i.length; r += 1) {
		var a = i[r], o = this.at(n, t);
		if (o === -1 || o !== a) return !1;
		n = this.nextIndex(n, t);
	}
	return this.pos = n, !0;
}, L.validateRegExpFlags = function(e) {
	for (var t = e.validFlags, n = e.flags, r = !1, i = !1, a = 0; a < n.length; a++) {
		var o = n.charAt(a);
		t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), n.indexOf(o, a + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (r = !0), o === "v" && (i = !0);
	}
	this.options.ecmaVersion >= 15 && r && i && this.raise(e.start, "Invalid regular expression flag");
};
function Er(e) {
	for (var t in e) return !0;
	return !1;
}
L.validateRegExpPattern = function(e) {
	this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Er(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
}, L.regexp_pattern = function(e) {
	e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
	for (var t = 0, n = e.backReferenceNames; t < n.length; t += 1) {
		var r = n[t];
		e.groupNames[r] || e.raise("Invalid named capture referenced");
	}
}, L.regexp_disjunction = function(e) {
	var t = this.options.ecmaVersion >= 16;
	for (t && (e.branchID = new wr(e.branchID, null)), this.regexp_alternative(e); e.eat(124);) t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
	t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
}, L.regexp_alternative = function(e) {
	for (; e.pos < e.source.length && this.regexp_eatTerm(e););
}, L.regexp_eatTerm = function(e) {
	return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
}, L.regexp_eatAssertion = function(e) {
	var t = e.pos;
	if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;
	if (e.eat(92)) {
		if (e.eat(66) || e.eat(98)) return !0;
		e.pos = t;
	}
	if (e.eat(40) && e.eat(63)) {
		var n = !1;
		if (this.options.ecmaVersion >= 9 && (n = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !n, !0;
	}
	return e.pos = t, !1;
}, L.regexp_eatQuantifier = function(e, t) {
	return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
}, L.regexp_eatQuantifierPrefix = function(e, t) {
	return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
}, L.regexp_eatBracedQuantifier = function(e, t) {
	var n = e.pos;
	if (e.eat(123)) {
		var r = 0, i = -1;
		if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) return i !== -1 && i < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
		e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = n;
	}
	return !1;
}, L.regexp_eatAtom = function(e) {
	return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
}, L.regexp_eatReverseSolidusAtomEscape = function(e) {
	var t = e.pos;
	if (e.eat(92)) {
		if (this.regexp_eatAtomEscape(e)) return !0;
		e.pos = t;
	}
	return !1;
}, L.regexp_eatUncapturingGroup = function(e) {
	var t = e.pos;
	if (e.eat(40)) {
		if (e.eat(63)) {
			if (this.options.ecmaVersion >= 16) {
				var n = this.regexp_eatModifiers(e), r = e.eat(45);
				if (n || r) {
					for (var i = 0; i < n.length; i++) {
						var a = n.charAt(i);
						n.indexOf(a, i + 1) > -1 && e.raise("Duplicate regular expression modifiers");
					}
					if (r) {
						var o = this.regexp_eatModifiers(e);
						!n && !o && e.current() === 58 && e.raise("Invalid regular expression modifiers");
						for (var s = 0; s < o.length; s++) {
							var c = o.charAt(s);
							(o.indexOf(c, s + 1) > -1 || n.indexOf(c) > -1) && e.raise("Duplicate regular expression modifiers");
						}
					}
				}
			}
			if (e.eat(58)) {
				if (this.regexp_disjunction(e), e.eat(41)) return !0;
				e.raise("Unterminated group");
			}
		}
		e.pos = t;
	}
	return !1;
}, L.regexp_eatCapturingGroup = function(e) {
	if (e.eat(40)) {
		if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
		e.raise("Unterminated group");
	}
	return !1;
}, L.regexp_eatModifiers = function(e) {
	for (var t = "", n = 0; (n = e.current()) !== -1 && Dr(n);) t += on(n), e.advance();
	return t;
};
function Dr(e) {
	return e === 105 || e === 109 || e === 115;
}
L.regexp_eatExtendedAtom = function(e) {
	return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
}, L.regexp_eatInvalidBracedQuantifier = function(e) {
	return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
}, L.regexp_eatSyntaxCharacter = function(e) {
	var t = e.current();
	return Or(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Or(e) {
	return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
L.regexp_eatPatternCharacters = function(e) {
	for (var t = e.pos, n = 0; (n = e.current()) !== -1 && !Or(n);) e.advance();
	return e.pos !== t;
}, L.regexp_eatExtendedPatternCharacter = function(e) {
	var t = e.current();
	return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 && (e.advance(), !0);
}, L.regexp_groupSpecifier = function(e) {
	if (e.eat(63)) {
		this.regexp_eatGroupName(e) || e.raise("Invalid group");
		var t = this.options.ecmaVersion >= 16, n = e.groupNames[e.lastStringValue];
		if (n) {
			if (t) for (var r = 0, i = n; r < i.length; r += 1) i[r].separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
			else e.raise("Duplicate capture group name");
		}
		t ? (n || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
	}
}, L.regexp_eatGroupName = function(e) {
	if (e.lastStringValue = "", e.eat(60)) {
		if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
		e.raise("Invalid capture group name");
	}
	return !1;
}, L.regexp_eatRegExpIdentifierName = function(e) {
	if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
		for (e.lastStringValue += on(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += on(e.lastIntValue);
		return !0;
	}
	return !1;
}, L.regexp_eatRegExpIdentifierStart = function(e) {
	var t = e.pos, n = this.options.ecmaVersion >= 11, r = e.current(n);
	return e.advance(n), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue), kr(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function kr(e) {
	return Vt(e, !0) || e === 36 || e === 95;
}
L.regexp_eatRegExpIdentifierPart = function(e) {
	var t = e.pos, n = this.options.ecmaVersion >= 11, r = e.current(n);
	return e.advance(n), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue), Ar(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Ar(e) {
	return Ht(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
L.regexp_eatAtomEscape = function(e) {
	return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
}, L.regexp_eatBackReference = function(e) {
	var t = e.pos;
	if (this.regexp_eatDecimalEscape(e)) {
		var n = e.lastIntValue;
		if (e.switchU) return n > e.maxBackReference && (e.maxBackReference = n), !0;
		if (n <= e.numCapturingParens) return !0;
		e.pos = t;
	}
	return !1;
}, L.regexp_eatKGroupName = function(e) {
	if (e.eat(107)) {
		if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
		e.raise("Invalid named reference");
	}
	return !1;
}, L.regexp_eatCharacterEscape = function(e) {
	return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
}, L.regexp_eatCControlLetter = function(e) {
	var t = e.pos;
	if (e.eat(99)) {
		if (this.regexp_eatControlLetter(e)) return !0;
		e.pos = t;
	}
	return !1;
}, L.regexp_eatZero = function(e) {
	return e.current() === 48 && !Hr(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0);
}, L.regexp_eatControlEscape = function(e) {
	var t = e.current();
	return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 && (e.lastIntValue = 13, e.advance(), !0);
}, L.regexp_eatControlLetter = function(e) {
	var t = e.current();
	return jr(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function jr(e) {
	return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
L.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
	t === void 0 && (t = !1);
	var n = e.pos, r = t || e.switchU;
	if (e.eat(117)) {
		if (this.regexp_eatFixedHexDigits(e, 4)) {
			var i = e.lastIntValue;
			if (r && i >= 55296 && i <= 56319) {
				var a = e.pos;
				if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
					var o = e.lastIntValue;
					if (o >= 56320 && o <= 57343) return e.lastIntValue = (i - 55296) * 1024 + (o - 56320) + 65536, !0;
				}
				e.pos = a, e.lastIntValue = i;
			}
			return !0;
		}
		if (r && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Mr(e.lastIntValue)) return !0;
		r && e.raise("Invalid unicode escape"), e.pos = n;
	}
	return !1;
};
function Mr(e) {
	return e >= 0 && e <= 1114111;
}
L.regexp_eatIdentityEscape = function(e) {
	if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? (e.lastIntValue = 47, !0) : !1;
	var t = e.current();
	return t !== 99 && (!e.switchN || t !== 107) && (e.lastIntValue = t, e.advance(), !0);
}, L.regexp_eatDecimalEscape = function(e) {
	e.lastIntValue = 0;
	var t = e.current();
	if (t >= 49 && t <= 57) {
		do
			e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
		while ((t = e.current()) >= 48 && t <= 57);
		return !0;
	}
	return !1;
};
var Nr = 0, Pr = 1, Fr = 2;
L.regexp_eatCharacterClassEscape = function(e) {
	var t = e.current();
	if (Ir(t)) return e.lastIntValue = -1, e.advance(), Pr;
	var n = !1;
	if (e.switchU && this.options.ecmaVersion >= 9 && ((n = t === 80) || t === 112)) {
		e.lastIntValue = -1, e.advance();
		var r;
		if (e.eat(123) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) return n && r === Fr && e.raise("Invalid property name"), r;
		e.raise("Invalid property name");
	}
	return Nr;
};
function Ir(e) {
	return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
L.regexp_eatUnicodePropertyValueExpression = function(e) {
	var t = e.pos;
	if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
		var n = e.lastStringValue;
		if (this.regexp_eatUnicodePropertyValue(e)) {
			var r = e.lastStringValue;
			return this.regexp_validateUnicodePropertyNameAndValue(e, n, r), Pr;
		}
	}
	if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
		var i = e.lastStringValue;
		return this.regexp_validateUnicodePropertyNameOrValue(e, i);
	}
	return Nr;
}, L.regexp_validateUnicodePropertyNameAndValue = function(e, t, n) {
	tn(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(n) || e.raise("Invalid property value");
}, L.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
	if (e.unicodeProperties.binary.test(t)) return Pr;
	if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return Fr;
	e.raise("Invalid property name");
}, L.regexp_eatUnicodePropertyName = function(e) {
	var t = 0;
	for (e.lastStringValue = ""; Lr(t = e.current());) e.lastStringValue += on(t), e.advance();
	return e.lastStringValue !== "";
};
function Lr(e) {
	return jr(e) || e === 95;
}
L.regexp_eatUnicodePropertyValue = function(e) {
	var t = 0;
	for (e.lastStringValue = ""; Rr(t = e.current());) e.lastStringValue += on(t), e.advance();
	return e.lastStringValue !== "";
};
function Rr(e) {
	return Lr(e) || Hr(e);
}
L.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
	return this.regexp_eatUnicodePropertyValue(e);
}, L.regexp_eatCharacterClass = function(e) {
	if (e.eat(91)) {
		var t = e.eat(94), n = this.regexp_classContents(e);
		return e.eat(93) || e.raise("Unterminated character class"), t && n === Fr && e.raise("Negated character class may contain strings"), !0;
	}
	return !1;
}, L.regexp_classContents = function(e) {
	return e.current() === 93 ? Pr : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Pr);
}, L.regexp_nonEmptyClassRanges = function(e) {
	for (; this.regexp_eatClassAtom(e);) {
		var t = e.lastIntValue;
		if (e.eat(45) && this.regexp_eatClassAtom(e)) {
			var n = e.lastIntValue;
			e.switchU && (t === -1 || n === -1) && e.raise("Invalid character class"), t !== -1 && n !== -1 && t > n && e.raise("Range out of order in character class");
		}
	}
}, L.regexp_eatClassAtom = function(e) {
	var t = e.pos;
	if (e.eat(92)) {
		if (this.regexp_eatClassEscape(e)) return !0;
		if (e.switchU) {
			var n = e.current();
			(n === 99 || Gr(n)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
		}
		e.pos = t;
	}
	var r = e.current();
	return r !== 93 && (e.lastIntValue = r, e.advance(), !0);
}, L.regexp_eatClassEscape = function(e) {
	var t = e.pos;
	if (e.eat(98)) return e.lastIntValue = 8, !0;
	if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
	if (!e.switchU && e.eat(99)) {
		if (this.regexp_eatClassControlLetter(e)) return !0;
		e.pos = t;
	}
	return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
}, L.regexp_classSetExpression = function(e) {
	var t = Pr, n;
	if (!this.regexp_eatClassSetRange(e)) {
		if (n = this.regexp_eatClassSetOperand(e)) {
			n === Fr && (t = Fr);
			for (var r = e.pos; e.eatChars([38, 38]);) {
				if (e.current() !== 38 && (n = this.regexp_eatClassSetOperand(e))) {
					n !== Fr && (t = Pr);
					continue;
				}
				e.raise("Invalid character in character class");
			}
			if (r !== e.pos) return t;
			for (; e.eatChars([45, 45]);) this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
			if (r !== e.pos) return t;
		} else e.raise("Invalid character in character class");
	}
	for (;;) if (!this.regexp_eatClassSetRange(e)) {
		if (n = this.regexp_eatClassSetOperand(e), !n) return t;
		n === Fr && (t = Fr);
	}
}, L.regexp_eatClassSetRange = function(e) {
	var t = e.pos;
	if (this.regexp_eatClassSetCharacter(e)) {
		var n = e.lastIntValue;
		if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
			var r = e.lastIntValue;
			return n !== -1 && r !== -1 && n > r && e.raise("Range out of order in character class"), !0;
		}
		e.pos = t;
	}
	return !1;
}, L.regexp_eatClassSetOperand = function(e) {
	return this.regexp_eatClassSetCharacter(e) ? Pr : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
}, L.regexp_eatNestedClass = function(e) {
	var t = e.pos;
	if (e.eat(91)) {
		var n = e.eat(94), r = this.regexp_classContents(e);
		if (e.eat(93)) return n && r === Fr && e.raise("Negated character class may contain strings"), r;
		e.pos = t;
	}
	if (e.eat(92)) {
		var i = this.regexp_eatCharacterClassEscape(e);
		if (i) return i;
		e.pos = t;
	}
	return null;
}, L.regexp_eatClassStringDisjunction = function(e) {
	var t = e.pos;
	if (e.eatChars([92, 113])) {
		if (e.eat(123)) {
			var n = this.regexp_classStringDisjunctionContents(e);
			if (e.eat(125)) return n;
		} else e.raise("Invalid escape");
		e.pos = t;
	}
	return null;
}, L.regexp_classStringDisjunctionContents = function(e) {
	for (var t = this.regexp_classString(e); e.eat(124);) this.regexp_classString(e) === Fr && (t = Fr);
	return t;
}, L.regexp_classString = function(e) {
	for (var t = 0; this.regexp_eatClassSetCharacter(e);) t++;
	return t === 1 ? Pr : Fr;
}, L.regexp_eatClassSetCharacter = function(e) {
	var t = e.pos;
	if (e.eat(92)) return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(98) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
	var n = e.current();
	return n < 0 || n === e.lookahead() && zr(n) || Br(n) ? !1 : (e.advance(), e.lastIntValue = n, !0);
};
function zr(e) {
	return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function Br(e) {
	return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
L.regexp_eatClassSetReservedPunctuator = function(e) {
	var t = e.current();
	return Vr(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Vr(e) {
	return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
L.regexp_eatClassControlLetter = function(e) {
	var t = e.current();
	return Hr(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
}, L.regexp_eatHexEscapeSequence = function(e) {
	var t = e.pos;
	if (e.eat(120)) {
		if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
		e.switchU && e.raise("Invalid escape"), e.pos = t;
	}
	return !1;
}, L.regexp_eatDecimalDigits = function(e) {
	var t = e.pos, n = 0;
	for (e.lastIntValue = 0; Hr(n = e.current());) e.lastIntValue = 10 * e.lastIntValue + (n - 48), e.advance();
	return e.pos !== t;
};
function Hr(e) {
	return e >= 48 && e <= 57;
}
L.regexp_eatHexDigits = function(e) {
	var t = e.pos, n = 0;
	for (e.lastIntValue = 0; Ur(n = e.current());) e.lastIntValue = 16 * e.lastIntValue + Wr(n), e.advance();
	return e.pos !== t;
};
function Ur(e) {
	return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Wr(e) {
	return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
L.regexp_eatLegacyOctalEscapeSequence = function(e) {
	if (this.regexp_eatOctalDigit(e)) {
		var t = e.lastIntValue;
		if (this.regexp_eatOctalDigit(e)) {
			var n = e.lastIntValue;
			e.lastIntValue = t <= 3 && this.regexp_eatOctalDigit(e) ? t * 64 + n * 8 + e.lastIntValue : t * 8 + n;
		} else e.lastIntValue = t;
		return !0;
	}
	return !1;
}, L.regexp_eatOctalDigit = function(e) {
	var t = e.current();
	return Gr(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Gr(e) {
	return e >= 48 && e <= 55;
}
L.regexp_eatFixedHexDigits = function(e, t) {
	var n = e.pos;
	e.lastIntValue = 0;
	for (var r = 0; r < t; ++r) {
		var i = e.current();
		if (!Ur(i)) return e.pos = n, !1;
		e.lastIntValue = 16 * e.lastIntValue + Wr(i), e.advance();
	}
	return !0;
};
var Kr = function(e) {
	this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new ln(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, R = N.prototype;
R.next = function(e) {
	!e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Kr(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
}, R.getToken = function() {
	return this.next(), new Kr(this);
}, typeof Symbol < "u" && (R[Symbol.iterator] = function() {
	var e = this;
	return { next: function() {
		var t = e.getToken();
		return {
			done: t.type === j.eof,
			value: t
		};
	} };
}), R.nextToken = function() {
	var e = this.curContext();
	if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(j.eof);
	if (e.override) return e.override(this);
	this.readToken(this.fullCharCodeAtPos());
}, R.readToken = function(e) {
	return Vt(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
}, R.fullCharCodeAt = function(e) {
	var t = this.input.charCodeAt(e);
	if (t <= 55295 || t >= 56320) return t;
	var n = this.input.charCodeAt(e + 1);
	return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
}, R.fullCharCodeAtPos = function() {
	return this.fullCharCodeAt(this.pos);
}, R.skipBlockComment = function() {
	var e = this.options.onComment && this.curPosition(), t = this.pos, n = this.input.indexOf("*/", this.pos += 2);
	if (n === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (var r = void 0, i = t; (r = Xt(this.input, i, this.pos)) > -1;) ++this.curLine, i = this.lineStart = r;
	this.options.onComment && this.options.onComment(!0, this.input.slice(t + 2, n), t, this.pos, e, this.curPosition());
}, R.skipLineComment = function(e) {
	for (var t = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Yt(r);) r = this.input.charCodeAt(++this.pos);
	this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, n, this.curPosition());
}, R.skipSpace = function() {
	loop: for (; this.pos < this.input.length;) {
		var e = this.input.charCodeAt(this.pos);
		switch (e) {
			case 32:
			case 160:
				++this.pos;
				break;
			case 13: this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
			case 10:
			case 8232:
			case 8233:
				++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
				break;
			case 47:
				switch (this.input.charCodeAt(this.pos + 1)) {
					case 42:
						this.skipBlockComment();
						break;
					case 47:
						this.skipLineComment(2);
						break;
					default: break loop;
				}
				break;
			default: if (e > 8 && e < 14 || e >= 5760 && Zt.test(String.fromCharCode(e))) ++this.pos;
			else break loop;
		}
	}
}, R.finishToken = function(e, t) {
	this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
	var n = this.type;
	this.type = e, this.value = t, this.updateContext(n);
}, R.readToken_dot = function() {
	var e = this.input.charCodeAt(this.pos + 1);
	if (e >= 48 && e <= 57) return this.readNumber(!0);
	var t = this.input.charCodeAt(this.pos + 2);
	return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(j.ellipsis)) : (++this.pos, this.finishToken(j.dot));
}, R.readToken_slash = function() {
	var e = this.input.charCodeAt(this.pos + 1);
	return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(j.assign, 2) : this.finishOp(j.slash, 1);
}, R.readToken_mult_modulo_exp = function(e) {
	var t = this.input.charCodeAt(this.pos + 1), n = 1, r = e === 42 ? j.star : j.modulo;
	return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++n, r = j.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(j.assign, n + 1) : this.finishOp(r, n);
}, R.readToken_pipe_amp = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === e ? this.options.ecmaVersion >= 12 && this.input.charCodeAt(this.pos + 2) === 61 ? this.finishOp(j.assign, 3) : this.finishOp(e === 124 ? j.logicalOR : j.logicalAND, 2) : t === 61 ? this.finishOp(j.assign, 2) : this.finishOp(e === 124 ? j.bitwiseOR : j.bitwiseAND, 1);
}, R.readToken_caret = function() {
	return this.input.charCodeAt(this.pos + 1) === 61 ? this.finishOp(j.assign, 2) : this.finishOp(j.bitwiseXOR, 1);
}, R.readToken_plus_min = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || qt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(j.incDec, 2) : t === 61 ? this.finishOp(j.assign, 2) : this.finishOp(j.plusMin, 1);
}, R.readToken_lt_gt = function(e) {
	var t = this.input.charCodeAt(this.pos + 1), n = 1;
	return t === e ? (n = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + n) === 61 ? this.finishOp(j.assign, n + 1) : this.finishOp(j.bitShift, n)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (n = 2), this.finishOp(j.relational, n));
}, R.readToken_eq_excl = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === 61 ? this.finishOp(j.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(j.arrow)) : this.finishOp(e === 61 ? j.eq : j.prefix, 1);
}, R.readToken_question = function() {
	var e = this.options.ecmaVersion;
	if (e >= 11) {
		var t = this.input.charCodeAt(this.pos + 1);
		if (t === 46) {
			var n = this.input.charCodeAt(this.pos + 2);
			if (n < 48 || n > 57) return this.finishOp(j.questionDot, 2);
		}
		if (t === 63) return e >= 12 && this.input.charCodeAt(this.pos + 2) === 61 ? this.finishOp(j.assign, 3) : this.finishOp(j.coalesce, 2);
	}
	return this.finishOp(j.question, 1);
}, R.readToken_numberSign = function() {
	var e = this.options.ecmaVersion, t = 35;
	if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), Vt(t, !0) || t === 92)) return this.finishToken(j.privateId, this.readWord1());
	this.raise(this.pos, "Unexpected character '" + on(t) + "'");
}, R.getTokenFromCode = function(e) {
	switch (e) {
		case 46: return this.readToken_dot();
		case 40: return ++this.pos, this.finishToken(j.parenL);
		case 41: return ++this.pos, this.finishToken(j.parenR);
		case 59: return ++this.pos, this.finishToken(j.semi);
		case 44: return ++this.pos, this.finishToken(j.comma);
		case 91: return ++this.pos, this.finishToken(j.bracketL);
		case 93: return ++this.pos, this.finishToken(j.bracketR);
		case 123: return ++this.pos, this.finishToken(j.braceL);
		case 125: return ++this.pos, this.finishToken(j.braceR);
		case 58: return ++this.pos, this.finishToken(j.colon);
		case 96:
			if (this.options.ecmaVersion < 6) break;
			return ++this.pos, this.finishToken(j.backQuote);
		case 48:
			var t = this.input.charCodeAt(this.pos + 1);
			if (t === 120 || t === 88) return this.readRadixNumber(16);
			if (this.options.ecmaVersion >= 6) {
				if (t === 111 || t === 79) return this.readRadixNumber(8);
				if (t === 98 || t === 66) return this.readRadixNumber(2);
			}
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57: return this.readNumber(!1);
		case 34:
		case 39: return this.readString(e);
		case 47: return this.readToken_slash();
		case 37:
		case 42: return this.readToken_mult_modulo_exp(e);
		case 124:
		case 38: return this.readToken_pipe_amp(e);
		case 94: return this.readToken_caret();
		case 43:
		case 45: return this.readToken_plus_min(e);
		case 60:
		case 62: return this.readToken_lt_gt(e);
		case 61:
		case 33: return this.readToken_eq_excl(e);
		case 63: return this.readToken_question();
		case 126: return this.finishOp(j.prefix, 1);
		case 35: return this.readToken_numberSign();
	}
	this.raise(this.pos, "Unexpected character '" + on(e) + "'");
}, R.finishOp = function(e, t) {
	var n = this.input.slice(this.pos, this.pos + t);
	return this.pos += t, this.finishToken(e, n);
}, R.readRegexp = function() {
	for (var e, t, n = this.pos;;) {
		this.pos >= this.input.length && this.raise(n, "Unterminated regular expression");
		var r = this.input.charAt(this.pos);
		if (qt.test(r) && this.raise(n, "Unterminated regular expression"), e) e = !1;
		else {
			if (r === "[") t = !0;
			else if (r === "]" && t) t = !1;
			else if (r === "/" && !t) break;
			e = r === "\\";
		}
		++this.pos;
	}
	var i = this.input.slice(n, this.pos);
	++this.pos;
	var a = this.pos, o = this.readWord1();
	this.containsEsc && this.unexpected(a);
	var s = this.regexpState ||= new Tr(this);
	s.reset(n, i, o), this.validateRegExpFlags(s), this.validateRegExpPattern(s);
	var c = null;
	try {
		c = new RegExp(i, o);
	} catch {}
	return this.finishToken(j.regexp, {
		pattern: i,
		flags: o,
		value: c
	});
}, R.readInt = function(e, t, n) {
	for (var r = this.options.ecmaVersion >= 12 && t === void 0, i = n && this.input.charCodeAt(this.pos) === 48, a = this.pos, o = 0, s = 0, c = 0, l = t ?? Infinity; c < l; ++c, ++this.pos) {
		var u = this.input.charCodeAt(this.pos), d = void 0;
		if (r && u === 95) {
			i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), s === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), c === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), s = u;
			continue;
		}
		if (d = u >= 97 ? u - 97 + 10 : u >= 65 ? u - 65 + 10 : u >= 48 && u <= 57 ? u - 48 : Infinity, d >= e) break;
		s = u, o = o * e + d;
	}
	return r && s === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || t != null && this.pos - a !== t ? null : o;
};
function qr(e, t) {
	return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Jr(e) {
	return typeof BigInt == "function" ? BigInt(e.replace(/_/g, "")) : null;
}
R.readRadixNumber = function(e) {
	var t = this.pos;
	this.pos += 2;
	var n = this.readInt(e);
	return n ?? this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (n = Jr(this.input.slice(t, this.pos)), ++this.pos) : Vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(j.num, n);
}, R.readNumber = function(e) {
	var t = this.pos;
	!e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
	var n = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
	n && this.strict && this.raise(t, "Invalid number");
	var r = this.input.charCodeAt(this.pos);
	if (!n && !e && this.options.ecmaVersion >= 11 && r === 110) {
		var i = Jr(this.input.slice(t, this.pos));
		return ++this.pos, Vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(j.num, i);
	}
	n && /[89]/.test(this.input.slice(t, this.pos)) && (n = !1), r === 46 && !n && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !n && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
	var a = qr(this.input.slice(t, this.pos), n);
	return this.finishToken(j.num, a);
}, R.readCodePoint = function() {
	var e = this.input.charCodeAt(this.pos), t;
	if (e === 123) {
		this.options.ecmaVersion < 6 && this.unexpected();
		var n = ++this.pos;
		t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(n, "Code point out of bounds");
	} else t = this.readHexChar(4);
	return t;
}, R.readString = function(e) {
	for (var t = "", n = ++this.pos;;) {
		this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
		var r = this.input.charCodeAt(this.pos);
		if (r === e) break;
		r === 92 ? (t += this.input.slice(n, this.pos), t += this.readEscapedChar(!1), n = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Yt(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
	}
	return t += this.input.slice(n, this.pos++), this.finishToken(j.string, t);
};
var Yr = {};
R.tryReadTemplateToken = function() {
	this.inTemplateElement = !0;
	try {
		this.readTmplToken();
	} catch (e) {
		if (e === Yr) this.readInvalidTemplateToken();
		else throw e;
	}
	this.inTemplateElement = !1;
}, R.invalidStringToken = function(e, t) {
	if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Yr;
	this.raise(e, t);
}, R.readTmplToken = function() {
	for (var e = "", t = this.pos;;) {
		this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
		var n = this.input.charCodeAt(this.pos);
		if (n === 96 || n === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === j.template || this.type === j.invalidTemplate) ? n === 36 ? (this.pos += 2, this.finishToken(j.dollarBraceL)) : (++this.pos, this.finishToken(j.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(j.template, e));
		if (n === 92) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
		else if (Yt(n)) {
			switch (e += this.input.slice(t, this.pos), ++this.pos, n) {
				case 13: this.input.charCodeAt(this.pos) === 10 && ++this.pos;
				case 10:
					e += "\n";
					break;
				default: e += String.fromCharCode(n);
			}
			this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
		} else ++this.pos;
	}
}, R.readInvalidTemplateToken = function() {
	for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
		case "\\":
			++this.pos;
			break;
		case "$": if (this.input[this.pos + 1] !== "{") break;
		case "`": return this.finishToken(j.invalidTemplate, this.input.slice(this.start, this.pos));
		case "\r": this.input[this.pos + 1] === "\n" && ++this.pos;
		case "\n":
		case "\u2028":
		case "\u2029": ++this.curLine, this.lineStart = this.pos + 1;
	}
	this.raise(this.start, "Unterminated template");
}, R.readEscapedChar = function(e) {
	var t = this.input.charCodeAt(++this.pos);
	switch (++this.pos, t) {
		case 110: return "\n";
		case 114: return "\r";
		case 120: return String.fromCharCode(this.readHexChar(2));
		case 117: return on(this.readCodePoint());
		case 116: return "	";
		case 98: return "\b";
		case 118: return "\v";
		case 102: return "\f";
		case 13: this.input.charCodeAt(this.pos) === 10 && ++this.pos;
		case 10: return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
		case 56:
		case 57: if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e) {
			var n = this.pos - 1;
			this.invalidStringToken(n, "Invalid escape sequence in template string");
		}
		default:
			if (t >= 48 && t <= 55) {
				var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], i = parseInt(r, 8);
				return i > 255 && (r = r.slice(0, -1), i = parseInt(r, 8)), this.pos += r.length - 1, t = this.input.charCodeAt(this.pos), (r !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(this.pos - 1 - r.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(i);
			}
			return Yt(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
	}
}, R.readHexChar = function(e) {
	var t = this.pos, n = this.readInt(16, e);
	return n === null && this.invalidStringToken(t, "Bad character escape sequence"), n;
}, R.readWord1 = function() {
	this.containsEsc = !1;
	for (var e = "", t = !0, n = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
		var i = this.fullCharCodeAtPos();
		if (Ht(i, r)) this.pos += i <= 65535 ? 1 : 2;
		else if (i === 92) {
			this.containsEsc = !0, e += this.input.slice(n, this.pos);
			var a = this.pos;
			this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
			var o = this.readCodePoint();
			(t ? Vt : Ht)(o, r) || this.invalidStringToken(a, "Invalid Unicode escape"), e += on(o), n = this.pos;
		} else break;
		t = !1;
	}
	return e + this.input.slice(n, this.pos);
}, R.readWord = function() {
	var e = this.readWord1(), t = j.name;
	return this.keywords.test(e) && (t = Kt[e]), this.finishToken(t, e);
}, N.acorn = {
	Parser: N,
	version: "8.16.0",
	defaultOptions: dn,
	Position: cn,
	SourceLocation: ln,
	getLineInfo: un,
	Node: tr,
	TokenType: k,
	tokTypes: j,
	keywordTypes: Kt,
	TokContext: qn,
	tokContexts: F,
	isIdentifierChar: Ht,
	isIdentifierStart: Vt,
	Token: Kr,
	isNewLine: Yt,
	lineBreak: qt,
	lineBreakG: Jt,
	nonASCIIwhitespace: Zt
};
function Xr(e, t) {
	return N.parse(e, t);
}
//#endregion
//#region src/core/clipParamDependencies.ts
var Zr = /* @__PURE__ */ new Set([
	"opacity",
	"position",
	"anchorPoint",
	"scale",
	"rotation",
	"blendMode",
	"size"
]);
function Qr(e) {
	return !!e && typeof e == "object" && typeof e.type == "string";
}
function $r(e) {
	return Qr(e) ? e.type === "Literal" && typeof e.value == "string" ? e.value : e.type === "TemplateLiteral" && Array.isArray(e.expressions) && e.expressions.length === 0 ? (Array.isArray(e.quasis) ? e.quasis[0] : void 0)?.value?.cooked ?? null : null : null;
}
function ei(e) {
	let t = Qr(e) && e.type === "ChainExpression" ? e.expression : e;
	if (!Qr(t) || t.type !== "MemberExpression") return !1;
	let n = t.object, r = t.property;
	return !Qr(n) || n.type !== "Identifier" || n.name !== "clip" ? !1 : t.computed === !0 ? $r(r) === "setParam" : Qr(r) && r.type === "Identifier" && r.name === "setParam";
}
function ti(e) {
	let t;
	try {
		t = Xr(e.source.js, {
			ecmaVersion: "latest",
			allowReturnOutsideFunction: !0,
			allowAwaitOutsideFunction: !0
		});
	} catch {
		throw Error(`Cannot analyze Clip ${e.id}: JavaScript parse error.`);
	}
	let n = [], r = (t) => {
		if (t.type === "CallExpression" && ei(t.callee)) {
			let r = Array.isArray(t.arguments) ? t.arguments : [], i = $r(r[0]), a = $r(r[1]);
			if (!i || !a || r.length !== 3) throw Error(`Clip ${e.id}: clip.setParam requires literal placement ID and key.`);
			n.push({
				sourceId: e.id,
				targetId: i,
				key: a
			});
		}
		for (let e of Object.values(t)) if (Qr(e)) r(e);
		else if (Array.isArray(e)) for (let t of e) Qr(t) && r(t);
	};
	return r(t), n;
}
function ni(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.layers) for (let e of n.clips) {
		if (t.has(e.id)) throw Error(`Duplicate Clip placement ID: ${e.id}`);
		t.set(e.id, e);
	}
	let n = e.layers.flatMap((e) => e.clips.flatMap((e) => e.kind === "html" && !e.instanceOfClipId ? ti(e) : [])), r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = t.get(e.targetId);
		if (!n) throw Error(`Clip ${e.sourceId}: target placement not found: ${e.targetId}`);
		if (n.kind === "html" && n.instanceOfClipId) throw Error(`Clip ${e.sourceId}: HTML instance cannot be a parameter target.`);
		if (n.kind === "wgsl") throw Error(`Clip ${e.sourceId}: WGSL parameter writes are not supported yet.`);
		if (n.kind !== "html" && n.kind !== "shader") throw Error(`Clip ${e.sourceId}: parameter target kind is not supported: ${n.kind}`);
		if (e.sourceId === e.targetId) throw Error(`Clip ${e.sourceId}: self dependency is not allowed; assign clip.${e.key} instead.`);
		let i = n.params[e.key];
		if (!i || i.writable === !1 || i.group !== "custom" || Zr.has(e.key)) throw Error(`Clip ${e.sourceId}: parameter is not writable: ${e.targetId}.${e.key}`);
		if (n.kind === "html") {
			let t = r.get(n.id) ?? /* @__PURE__ */ new Set();
			t.add(e.sourceId), r.set(n.id, t);
		}
	}
	let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = (e, t) => {
		if (i.has(e)) throw Error(`Cross-Clip parameter cycle: ${[...t, e].join(" -> ")}`);
		if (!a.has(e)) {
			i.add(e);
			for (let n of r.get(e) ?? []) o(n, [...t, e]);
			i.delete(e), a.add(e);
		}
	};
	for (let e of t.values()) e.kind === "html" && o(e.id, []);
	return {
		links: n,
		predecessors: r
	};
}
//#endregion
//#region src/core/clipParamCoordinator.ts
function ri(e, t, n) {
	let r = e.params[t];
	if (!r || r.writable === !1) return !1;
	switch (r.type) {
		case "number": return typeof n == "number" && Number.isFinite(n);
		case "boolean": return typeof n == "boolean";
		case "color": return typeof n == "string" && /^#[0-9a-fA-F]{6}$/.test(n);
		case "string": return typeof n == "string" && n.length <= 4096;
		case "select": return typeof n == "string" && !!r.options?.includes(n);
		case "vec2":
		case "vec3": return Array.isArray(n) && n.length === (r.type === "vec2" ? 2 : 3) && n.every((e) => typeof e == "number" && Number.isFinite(e));
		default: return !1;
	}
}
function ii(e, t, n, r) {
	let i = new Map(e.layers.flatMap((e) => e.clips.map((e) => [e.id, e]))), a = e.layers.flatMap((e) => e.clips.map((e) => e.id)).reverse(), o = new Set(r), s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), l = new Set(t.links.map((e) => `${e.sourceId}\u0000${e.targetId}\u0000${e.key}`)), u = (e) => {
		let t = Object.create(null);
		for (let n of a) for (let r of c.get(n) ?? []) r.targetClipId === e && (t[r.key] = r.value);
		return t;
	};
	return {
		token: n,
		get readyIds() {
			return a.filter((e) => o.has(e) && !s.has(e) && [...t.predecessors.get(e) ?? []].every((e) => !o.has(e) || c.has(e)));
		},
		dispatch(e) {
			if (!this.readyIds.includes(e)) throw Error(`Clip ${e} is not ready for frame ${n}.`);
			s.add(e);
		},
		complete(e, t, r) {
			if (e !== n || !s.has(t) || c.has(t)) return !1;
			if (r.length > 256) throw Error(`Clip ${t} exceeded the per-frame write limit.`);
			for (let e of r) {
				if (!e || typeof e.targetClipId != "string" || typeof e.key != "string" || !l.has(`${t}\u0000${e.targetClipId}\u0000${e.key}`)) throw Error(`Clip ${t} sent an undeclared parameter write.`);
				let n = i.get(e.targetClipId);
				if (!n || !ri(n, e.key, e.value)) throw Error(`Clip ${t} sent an invalid value for ${e.targetClipId}.${e.key}.`);
			}
			return c.set(t, r), !0;
		},
		overridesFor: u,
		get overrides() {
			return new Map([...i.keys()].map((e) => [e, u(e)]).filter(([, e]) => Object.keys(e).length > 0));
		},
		get done() {
			return c.size === o.size;
		}
	};
}
//#endregion
//#region src/core/feedbackResources.ts
var ai = /* @__PURE__ */ new WeakMap(), oi = 0;
function si(e) {
	let t = ai.get(e.recording);
	return t || (t = {
		revision: `feedback-${++oi}`,
		sampler: We(e.recording)
	}, ai.set(e.recording, t)), t;
}
function ci(e) {
	let { revision: t, sampler: n } = si(e);
	return {
		assetId: e.id,
		name: e.name,
		revision: t,
		bytes: n.summary.bytes,
		document: n.document
	};
}
var li = /* @__PURE__ */ new Map();
function ui() {
	let e = 0;
	for (let t of li.values()) e += t;
	return e;
}
function di(e, t, n, r) {
	let i = Symbol("feedback-iframe"), a = t, o = !1, s = !1, c = 0, l = "", u = () => {
		let t = e.contentWindow;
		if (o || !s || !t) return;
		let u = a.feedbackResources ?? [], d = JSON.stringify(u.map((e) => [e.assetId, e.revision]));
		if (l === d) return;
		let f = {
			type: "macroflush:feedback-resources",
			clipId: n,
			documentToken: r,
			generation: ++c,
			resources: u
		};
		try {
			let e = u.reduce((e, t) => e + t.bytes, 0);
			if (ui() - (li.get(i) ?? 0) + e > E.maxResourceCloneBytes) throw new D("size-limit", `Clip ${n}: Feedback clone budget exceeded.`);
			t.postMessage(f, "*"), li.set(i, e), l = d;
		} catch (e) {
			l = "", t.postMessage({
				...f,
				resources: [],
				error: e instanceof Error ? e.message : String(e)
			}, "*");
		}
	}, d = (t) => {
		o || t.source !== e.contentWindow || t.data?.type !== "macroflush:feedback-request" || t.data.clipId !== n || t.data.documentToken !== r || (s = !0, u());
	};
	return window.addEventListener("message", d), {
		update(e) {
			a = e, u();
		},
		reload() {
			l = "", u();
		},
		dispose() {
			o || (o = !0, li.delete(i), window.removeEventListener("message", d));
		}
	};
}
//#endregion
//#region src/core/assets.ts
function fi(e, t = []) {
	let n = new Set(t);
	if (n.size !== t.length) throw Error("Clip libraries must be unique asset IDs.");
	for (let t of n) if (!e.some((e) => e.id === t && e.kind === "script" && e.scriptMode === "global")) throw Error(`Clip library ${t} must reference a global Script asset.`);
	return e.filter((e) => e.kind !== "script" || e.scriptMode !== "global" || n.has(e.id));
}
function pi(e, t = !1) {
	let n = e.flatMap((e) => {
		let n = mi(e, t);
		return n ? [n] : [];
	}), r = new Map(n.map((e) => [e.id, e])), i = /* @__PURE__ */ new Map();
	for (let e of n) i.set(e.name, [...i.get(e.name) ?? [], e]);
	return {
		feedbackResources: e.filter((e) => e.kind === "feedback").map(ci),
		descriptors: n,
		get: (e) => r.get(e),
		resolveName(e) {
			let t = i.get(e) ?? [];
			if (t.length === 0) throw Error(`Unknown asset name: ${e}`);
			if (t.length > 1) throw Error(`Ambiguous asset name: ${e}`);
			return t[0];
		}
	};
}
function mi(e, t) {
	if (e.kind === "composition") return e.composition ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [e.composition.width, e.composition.height]
	} : (console.warn(`MacroFlush skipped composition asset "${e.name}" because it has no composition document.`), null);
	if (e.kind === "html-clip") {
		let t = e.htmlTemplate.params.size?.value;
		return {
			id: e.id,
			name: e.name,
			kind: e.kind,
			dimensions: Array.isArray(t) ? [Number(t[0]) || 640, Number(t[1]) || 360] : [640, 360]
		};
	}
	return e.kind === "wgsl-clip" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0]
	} : e.kind === "font" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0],
		sourceUrl: e.sourceUrl && hi(e.sourceUrl, t) ? e.sourceUrl : void 0,
		fontFamily: e.fontFamily,
		fontWeight: e.weight,
		fontStyle: e.style,
		fontFormat: e.format
	} : e.kind === "data" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0],
		data: e.value
	} : e.kind === "feedback" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0],
		feedbackRevision: si(e).revision
	} : e.kind === "script" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0],
		scriptSource: e.source,
		...e.mode ? { scriptMode: e.mode } : {},
		...e.origin ? { scriptOrigin: e.origin } : {}
	} : e.kind === "model-3d" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0],
		sourceUrl: e.sourceUrl,
		modelFormat: e.format
	} : e.kind === "camera-3d" || e.kind === "light-3d" || e.kind === "null-3d" || e.kind === "shader-clip" || e.kind === "mesh-3d" || e.kind === "geometry-3d" || e.kind === "material-3d" ? {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [0, 0]
	} : {
		id: e.id,
		name: e.name,
		kind: e.kind,
		dimensions: [e.width ?? 0, e.height ?? 0],
		sourceUrl: e.sourceUrl && hi(e.sourceUrl, t) ? e.sourceUrl : void 0
	};
}
function hi(e, t = !1) {
	let n = e.trim();
	return n ? t && /^macroflush-asset:\/\/asset\/[a-f0-9]{64}$/.test(n) || n.startsWith("data:") || n.startsWith("blob:") ? !0 : n.startsWith("//") || n.startsWith("/") || n.startsWith("\\") ? !1 : !/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(n) : !1;
}
//#endregion
//#region src/core/audioWaveform.ts
var gi = 2048, _i = 16, vi = 2, yi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map();
function xi(e, t) {
	let n = yi.get(e);
	if (n?.sourceUrl === t) return n.promise;
	let r = Si(e, t).then(wi).catch((t) => {
		throw yi.get(e)?.promise === r && yi.delete(e), t;
	});
	return yi.delete(e), yi.set(e, {
		sourceUrl: t,
		promise: r
	}), yi.size > _i && yi.delete(yi.keys().next().value), r;
}
function Si(e, t) {
	let n = bi.get(e);
	if (n?.sourceUrl === t) return n.promise;
	let r = Ci(t).catch((t) => {
		throw bi.get(e)?.promise === r && bi.delete(e), t;
	});
	return bi.delete(e), bi.set(e, {
		sourceUrl: t,
		promise: r
	}), bi.size > vi && bi.delete(bi.keys().next().value), r;
}
async function Ci(e) {
	if (typeof OfflineAudioContext > "u") throw Error("Audio decoding is unavailable.");
	let t = await fetch(e);
	if (!t.ok) throw Error("Unable to load audio for waveform.");
	let n = await new OfflineAudioContext(1, 1, 44100).decodeAudioData(await t.arrayBuffer());
	if (!n.length || !n.duration) throw Error("Audio has no samples.");
	return n;
}
async function wi(e) {
	let t = new Float32Array(gi), n = new Float32Array(gi), r = Array.from({ length: e.numberOfChannels }, (t, n) => e.getChannelData(n)), i = 0, a = 0;
	for (let o = 0; o < gi; o += 1) {
		let s = Math.floor(o * e.length / gi), c = Math.max(s + 1, Math.floor((o + 1) * e.length / gi)), l = 0, u = 0;
		for (let e of r) for (let t = s; t < c && t < e.length; t += 1) {
			let n = e[t];
			n < l && (l = n), n > u && (u = n);
		}
		t[o] = l, n[o] = u, i = Math.min(i, l), a = Math.max(a, u), o % 128 == 127 && await new Promise((e) => setTimeout(e, 0));
	}
	return {
		duration: e.duration,
		minimum: t,
		maximum: n,
		floor: i,
		ceiling: a
	};
}
//#endregion
//#region src/core/audioAnalysis.ts
var Ti = [
	"drums",
	"bass",
	"other",
	"vocals"
], Ei = 2048, Di = 32, Oi = 12e4, ki = 16, Ai = /* @__PURE__ */ new Map(), ji = (e) => /\b(?:audioBand|audioSpectrum|audioPeaks|audioSpectrogram|audioStem|audioStemPeaks|audioStemSpectrogram)\b/.test(e);
function Mi(e) {
	return e.flatMap((e) => e.visible === !1 ? [] : e.clips.flatMap((e) => e.kind === "audio" ? [{
		clipId: e.id,
		assetId: e.assetId,
		inFrame: e.inFrame,
		outFrame: e.outFrame
	}] : []));
}
function Ni(e, t, n) {
	let r = `${e}:${n}`, i = Ai.get(r);
	if (i?.sourceUrl === t) return i.promise;
	let a = Promise.all([Si(e, t), xi(e, t)]).then(([e, t]) => Fi(e, t, n)).catch((e) => {
		throw Ai.get(r)?.promise === a && Ai.delete(r), e;
	});
	return Ai.delete(r), Ai.set(r, {
		sourceUrl: t,
		promise: a
	}), Ai.size > ki && Ai.delete(Ai.keys().next().value), a;
}
async function Pi(e, t, n, r = !1) {
	let i = {}, a = {}, o = Mi(t);
	return await Promise.all(e.filter((e) => e.kind === "audio" && !!e.sourceUrl && hi(e.sourceUrl, r)).map(async (e) => {
		try {
			i[e.id] = await Ni(e.id, e.sourceUrl, n);
		} catch (t) {
			console.warn(`MacroFlush: audio analysis failed for "${e.name}"`, t);
		}
		let t = (await Promise.all(Ti.flatMap((t) => {
			let i = e.stemSources?.[t];
			return !i || !hi(i, r) ? [] : [Ni(`${e.id}:stem:${t}`, i, n).then((e) => [t, e]).catch((n) => (console.warn(`MacroFlush: ${t} stem analysis failed for "${e.name}"`, n), null))];
		}))).filter((e) => e !== null);
		t.length && (a[e.id] = Object.fromEntries(t));
	})), {
		analyses: i,
		stems: a,
		placements: o
	};
}
async function Fi(e, t, n) {
	if (!Number.isFinite(n) || n <= 0) throw Error("Audio analysis requires a positive frame rate.");
	let r = Math.ceil(e.duration * n);
	if (r > Oi) throw Error("Audio is too long for frame-resolution analysis.");
	let i = new Float32Array(r * Di), a = {
		low: new Float32Array(r),
		mid: new Float32Array(r),
		high: new Float32Array(r)
	}, o = Array.from({ length: e.numberOfChannels }, (t, n) => e.getChannelData(n)), s = new Float32Array(Ei), c = new Float32Array(Ei), l = Float32Array.from({ length: Ei }, (e, t) => .5 - .5 * Math.cos(2 * Math.PI * t / 2047)), u = l.reduce((e, t) => e + t, 0), d = e.sampleRate / 2, f = Math.min(2e4, d), p = Array.from({ length: 1025 }, (t, n) => {
		let r = n * e.sampleRate / Ei;
		return r < 20 || r > f ? null : {
			logIndex: Math.min(31, Math.floor(Math.log(r / 20) / Math.log(f / 20) * Di)),
			band: r < 250 ? "low" : r < 4e3 ? "mid" : "high"
		};
	});
	for (let t = 0; t < r; t += 1) {
		let r = Math.floor(t * e.sampleRate / n), d = !1;
		for (let t = 0; t < Ei; t += 1) {
			let n = r + t - Ei / 2, i = 0;
			if (n >= 0 && n < e.length) {
				for (let e of o) i += e[n];
				i /= o.length || 1;
			}
			s[t] = i * l[t], i !== 0 && (d = !0);
		}
		if (d) {
			c.fill(0), Ii(s, c);
			let e = {
				low: 0,
				mid: 0,
				high: 0
			};
			for (let n = 1; n < p.length; n += 1) {
				let r = p[n];
				if (!r) continue;
				let a = Math.min(1, 2 * Math.hypot(s[n], c[n]) / u);
				i[t * Di + r.logIndex] = Math.max(i[t * Di + r.logIndex], a), e[r.band] += a * a;
			}
			a.low[t] = Math.min(1, Math.sqrt(e.low)), a.mid[t] = Math.min(1, Math.sqrt(e.mid)), a.high[t] = Math.min(1, Math.sqrt(e.high));
		}
		t % 64 == 63 && await new Promise((e) => setTimeout(e, 0));
	}
	return {
		duration: e.duration,
		fps: n,
		bins: Di,
		buckets: r,
		spectrum: i,
		bands: a,
		peaks: t
	};
}
function Ii(e, t) {
	let n = e.length;
	for (let r = 1, i = 0; r < n; r += 1) {
		let a = n >> 1;
		for (; i & a; a >>= 1) i ^= a;
		i ^= a, r < i && ([e[r], e[i]] = [e[i], e[r]], [t[r], t[i]] = [t[i], t[r]]);
	}
	for (let r = 2; r <= n; r <<= 1) {
		let i = -2 * Math.PI / r, a = Math.cos(i), o = Math.sin(i);
		for (let i = 0; i < n; i += r) {
			let n = 1, s = 0;
			for (let c = 0; c < r / 2; c += 1) {
				let l = i + c, u = l + r / 2, d = n * e[u] - s * t[u], f = n * t[u] + s * e[u];
				e[u] = e[l] - d, t[u] = t[l] - f, e[l] += d, t[l] += f;
				let p = n * a - s * o;
				s = n * o + s * a, n = p;
			}
		}
	}
}
//#endregion
//#region src/core/cues.ts
function Li(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		if (typeof t == "number" && Number.isFinite(t)) return [[e, {
			frame: Math.max(0, Math.floor(t)),
			mode: "loop"
		}]];
		if (!t || typeof t != "object" || Array.isArray(t)) return [];
		let n = t, r = Number(n.frame);
		if (!Number.isFinite(r)) return [];
		let i = Number(n.endFrame);
		return [[e, {
			frame: Math.max(0, Math.floor(r)),
			endFrame: Number.isFinite(i) ? Math.max(0, Math.floor(i)) : void 0,
			mode: n.mode === "loop" || n.mode === "none" ? n.mode : "stop"
		}]];
	}));
}
function Ri(e, t, n) {
	let r = Object.entries(Li(e)).map(([e, t]) => ({
		name: e,
		...t
	})).sort((e, t) => e.frame - t.frame), i = [...r].reverse().find((e) => e.frame <= n);
	if (!i) return null;
	let a = r.find((e) => e.frame > i.frame)?.frame ?? Math.max(1, t), o = Math.max(i.frame + 1, Math.min(Math.max(1, t), i.endFrame ?? a));
	return n < o ? {
		name: i.name,
		rangeStart: i.frame,
		rangeEnd: o,
		mode: i.mode
	} : null;
}
//#endregion
//#region src/core/threeDDescriptors.ts
function zi(e) {
	return e && typeof e == "object" && !Array.isArray(e) ? e : {};
}
var Bi = [
	"basic",
	"lambert",
	"phong",
	"standard",
	"physical",
	"toon",
	"normal",
	"matcap"
], Vi = {
	color: {
		type: "color",
		default: "#ffffff"
	},
	opacity: {
		type: "number",
		default: 1,
		min: 0,
		max: 1
	},
	wireframe: {
		type: "boolean",
		default: !1
	},
	side: {
		type: "select",
		default: "front"
	},
	emissive: {
		type: "color",
		default: "#000000",
		types: [
			"lambert",
			"phong",
			"standard",
			"physical",
			"toon"
		]
	},
	emissiveIntensity: {
		type: "number",
		default: 1,
		min: 0,
		types: [
			"lambert",
			"phong",
			"standard",
			"physical",
			"toon"
		]
	},
	specular: {
		type: "color",
		default: "#111111",
		types: ["phong"]
	},
	shininess: {
		type: "number",
		default: 30,
		min: 0,
		types: ["phong"]
	},
	metalness: {
		type: "number",
		default: 0,
		min: 0,
		max: 1,
		types: ["standard", "physical"]
	},
	roughness: {
		type: "number",
		default: 1,
		min: 0,
		max: 1,
		types: ["standard", "physical"]
	},
	clearcoat: {
		type: "number",
		default: 0,
		min: 0,
		max: 1,
		types: ["physical"]
	},
	clearcoatRoughness: {
		type: "number",
		default: 0,
		min: 0,
		max: 1,
		types: ["physical"]
	},
	transmission: {
		type: "number",
		default: 0,
		min: 0,
		max: 1,
		types: ["physical"]
	},
	ior: {
		type: "number",
		default: 1.5,
		min: 1,
		max: 2.333,
		types: ["physical"]
	},
	thickness: {
		type: "number",
		default: 0,
		min: 0,
		types: ["physical"]
	},
	flatShading: {
		type: "boolean",
		default: !1,
		types: ["normal"]
	},
	gradientMapAssetId: {
		type: "select",
		default: "",
		types: ["toon"]
	},
	matcapAssetId: {
		type: "select",
		default: "",
		types: ["matcap"]
	}
};
function Hi(e, t) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : t;
}
function Ui(e, t, n) {
	return Math.max(n, Math.min(128, Math.floor(Hi(e, t))));
}
function Wi(e, t = "#ffffff") {
	if (typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215) return `#${e.toString(16).padStart(6, "0")}`;
	if (typeof e != "string") return t;
	let n = e.trim();
	return /^#[\da-f]{6}$/i.test(n) ? n.toLowerCase() : /^#[\da-f]{3}$/i.test(n) ? `#${[...n.slice(1)].map((e) => e + e).join("").toLowerCase()}` : t;
}
function Gi(e) {
	let t = zi(e);
	return t.primitive === "sphere" ? {
		primitive: "sphere",
		radius: Hi(t.radius, 1),
		widthSegments: Ui(t.widthSegments, 32, 3),
		heightSegments: Ui(t.heightSegments, 16, 2)
	} : t.primitive === "plane" ? {
		primitive: "plane",
		width: Hi(t.width, 1),
		height: Hi(t.height, 1)
	} : {
		primitive: "box",
		width: Hi(t.width, 1),
		height: Hi(t.height, 1),
		depth: Hi(t.depth, 1)
	};
}
function Ki(e, t) {
	let n = {
		...zi(e),
		...t
	}, r = typeof n.opacity == "number" && Number.isFinite(n.opacity) ? Math.max(0, Math.min(1, n.opacity)) : 1;
	return {
		type: Bi.includes(n.type) ? n.type : "phong",
		color: Wi(n.color),
		opacity: r,
		wireframe: n.wireframe === !0,
		side: n.side === "double" ? "double" : "front",
		...Object.fromEntries(Object.entries(Vi).filter(([e]) => ![
			"color",
			"opacity",
			"wireframe",
			"side"
		].includes(e) && n[e] !== void 0).map(([e, t]) => {
			let r = n[e];
			return [e, t.type === "color" ? Wi(r, String(t.default)) : t.type === "number" ? typeof r == "number" && Number.isFinite(r) ? Math.max(t.min ?? -Infinity, Math.min(t.max ?? Infinity, r)) : t.default : t.type === "boolean" ? r === !0 : typeof r == "string" ? r : ""];
		}))
	};
}
function qi(e) {
	let t = /^data:[^,]*;base64,([A-Za-z0-9+/=]+)$/.exec(e);
	if (!t) throw Error("3D model source must be an embedded base64 data URL.");
	try {
		let e = atob(t[1]);
		if (e.length > 8388608) throw Error("3D model exceeds the 8 MB import limit.");
		return Uint8Array.from(e, (e) => e.charCodeAt(0));
	} catch (e) {
		throw e instanceof Error && e.message.includes("8 MB") ? e : Error("3D model data is not valid base64.");
	}
}
function Ji(e, t) {
	let n = e && typeof e == "object" && !Array.isArray(e) ? e : {}, r = n.asset && typeof n.asset == "object" ? n.asset : {};
	if (typeof r.version != "string" || !r.version.startsWith("2.")) throw Error("Only glTF 2.x models are supported.");
	let i = (e) => Array.isArray(e) ? e : [];
	if (i(n.animations).length || i(n.skins).length) throw Error("Animated or skinned glTF models are not supported yet.");
	if (Array.isArray(n.extensionsRequired) && n.extensionsRequired.length) throw Error("glTF models requiring extensions are not supported yet.");
	for (let e of i(n.meshes)) for (let t of i(e.primitives)) if (Array.isArray(t.targets) && t.targets.length) throw Error("Morph targets are not supported yet.");
	for (let e of i(n.buffers)) if ((typeof e.uri == "string" || t !== "glb") && (typeof e.uri != "string" || !e.uri.startsWith("data:"))) throw Error("External glTF buffer files are not supported. Embed them as data URIs.");
	for (let e of i(n.images)) if (e.bufferView === void 0 && (typeof e.uri != "string" || !e.uri.startsWith("data:"))) throw Error("External glTF texture files are not supported. Embed them as data URIs.");
}
function Yi(e, t) {
	let n = qi(t);
	if (e === "obj") {
		let e = new TextDecoder().decode(n);
		if (/^\s*mtllib\s+/im.test(e)) throw Error("OBJ material libraries (MTL) are not supported yet.");
		if (!/^\s*v\s+[-+\d.]/im.test(e) || !/^\s*f\s+/im.test(e)) throw Error("OBJ model needs vertices and faces.");
		return;
	}
	if (e === "gltf") {
		try {
			Ji(JSON.parse(new TextDecoder().decode(n)), e);
		} catch (e) {
			throw e instanceof SyntaxError ? Error("glTF JSON is invalid.") : e;
		}
		return;
	}
	if (e !== "glb") throw Error(`Unsupported 3D model format: ${e}`);
	if (n.length < 20) throw Error("GLB file is incomplete.");
	let r = new DataView(n.buffer, n.byteOffset, n.byteLength);
	if (r.getUint32(0, !0) !== 1179937895 || r.getUint32(4, !0) !== 2 || r.getUint32(8, !0) !== n.length || r.getUint32(16, !0) !== 1313821514) throw Error("GLB header or JSON chunk is invalid.");
	let i = r.getUint32(12, !0);
	if (20 + i > n.length) throw Error("GLB JSON chunk is incomplete.");
	try {
		Ji(JSON.parse(new TextDecoder().decode(n.subarray(20, 20 + i))), e);
	} catch (e) {
		throw e instanceof SyntaxError ? Error("GLB JSON chunk is invalid.") : e;
	}
}
//#endregion
//#region src/core/threeDGraph.ts
var Xi = /* @__PURE__ */ new Set([
	"camera-3d",
	"light-3d",
	"null-3d",
	"mesh-3d",
	"model-3d"
]);
function Zi(e) {
	return Xi.has(e.kind);
}
function Qi(e) {
	return Array.isArray(e.capabilities) && e.capabilities.includes("centi3d");
}
function z(e) {
	throw Error(`Invalid MacroFlush project: ${e}`);
}
function $i(e) {
	let t = new Map(e.map((e) => [e.id, e]));
	for (let n of e) {
		if (!Zi(n) && n.kind !== "geometry-3d" && n.kind !== "material-3d" || ((!n.descriptor || typeof n.descriptor != "object" || Array.isArray(n.descriptor)) && z(`3D asset ${n.id} needs an object descriptor.`), n.kind === "geometry-3d" && n.descriptor.primitive !== void 0 && n.descriptor.primitive !== "box" && n.descriptor.primitive !== "sphere" && n.descriptor.primitive !== "plane" && z(`Geometry asset ${n.id} has an unsupported primitive.`), n.kind === "material-3d" && n.descriptor.type !== void 0 && !Bi.includes(n.descriptor.type) && z(`Material asset ${n.id} has an unsupported material type.`), !Zi(n))) continue;
		if (n.kind === "light-3d") {
			let e = aa(n.descriptor);
			e.lightType !== void 0 && ![
				"directional",
				"point",
				"spot",
				"ambient"
			].includes(String(e.lightType)) && z(`Light asset ${n.id} has an unsupported lightType.`);
			for (let t of [
				"intensity",
				"distance",
				"decay",
				"angle",
				"penumbra"
			]) {
				let r = e[t];
				r !== void 0 && (typeof r == "number" && Number.isFinite(r) && (t === "angle" ? r > 0 && r <= Math.PI / 2 : t === "penumbra" ? r >= 0 && r <= 1 : r >= 0) || z(`Light asset ${n.id} has an invalid ${t}.`));
			}
		}
		n.scriptAssetId && t.get(n.scriptAssetId)?.kind !== "script" && z(`3D asset ${n.id} references an unknown script asset ${n.scriptAssetId}.`);
		let e = n.scriptAssetId ? t.get(n.scriptAssetId) : void 0;
		if (e?.kind === "script" && e.mode === "global" && z(`3D asset ${n.id} requires a module Script, not a global library.`), n.kind === "mesh-3d" ? ((!n.geometryAssetId || t.get(n.geometryAssetId)?.kind !== "geometry-3d") && z(`Mesh asset ${n.id} needs a geometry-3d asset.`), (!n.materialAssetId || t.get(n.materialAssetId)?.kind !== "material-3d") && z(`Mesh asset ${n.id} needs a material-3d asset.`)) : (n.geometryAssetId || n.materialAssetId) && z(`Only mesh assets can reference geometry or material (${n.id}).`), n.kind === "model-3d") try {
			Yi(n.format, n.sourceUrl);
		} catch (e) {
			z(`Model asset ${n.id}: ${e instanceof Error ? e.message : String(e)}`);
		}
		if (n.kind === "camera-3d") {
			let e = aa(n.descriptor);
			e.cameraType !== void 0 && e.cameraType !== "perspective" && e.cameraType !== "orthographic" && z(`Camera asset ${n.id} has an unsupported cameraType.`), e.orthoHeight !== void 0 && (typeof e.orthoHeight != "number" || !Number.isFinite(e.orthoHeight) || e.orthoHeight < .001 || e.orthoHeight > 1e5) && z(`Camera asset ${n.id} needs orthoHeight from 0.001 through 100000.`);
		}
	}
}
function ea(e, t) {
	let n = new Map(t.map((e) => [e.id, e])), r = /* @__PURE__ */ new Map();
	for (let t of e.layers) for (let e of t.clips) r.set(e.id, e);
	let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = (e) => {
		if (a.has(e.id) && z(`3D parent cycle detected from placement ${e.id}.`), i.has(e.id)) return;
		a.add(e.id);
		let t = n.get(e.assetId);
		(!t || !Xi.has(t.kind)) && z(`3D placement ${e.id} needs a 3D object asset.`), e.maskClipId && z(`3D placement ${e.id} cannot have an alpha mask.`);
		let s = r.get(e.targetClipId);
		if ((s?.kind !== "html" || !Qi(s) || s.instanceOfClipId) && z(`3D placement ${e.id} needs a centi3d HTML Clip placement as its target.`), e.parentPlacementId) {
			let t = r.get(e.parentPlacementId);
			t?.kind !== "object-3d" && z(`3D placement ${e.id} has an unknown parent placement.`), t.targetClipId !== e.targetClipId && z(`3D placement ${e.id} has a parent in another scene.`), o(t);
		}
		if (e.aimTargetPlacementId) {
			t.kind !== "camera-3d" && z(`Only Camera placement ${e.id} can have an Aim target.`);
			let n = r.get(e.aimTargetPlacementId);
			(n?.kind !== "object-3d" || n.targetClipId !== e.targetClipId) && z(`Camera placement ${e.id} has an Aim target outside its 3D scene.`), o(n);
		}
		e.cameraTransition && (t.kind !== "camera-3d" || ![
			"cut",
			"dissolve",
			"transform"
		].includes(e.cameraTransition.type) || !Number.isInteger(e.cameraTransition.durationFrames) || e.cameraTransition.durationFrames < (e.cameraTransition.type === "cut" ? 0 : 1) || e.cameraTransition.durationFrames > (e.cameraTransition.type === "cut" ? 0 : 120)) && z(`Camera placement ${e.id} has an invalid transition.`), a.delete(e.id), i.add(e.id);
	};
	for (let e of r.values()) e.kind === "object-3d" && o(e);
}
function ta(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	for (let r of e.layers) for (let e of r.clips) if (t.set(e.id, {
		clip: e,
		visible: r.visible !== !1
	}), e.kind === "object-3d") {
		let t = n.get(e.targetClipId);
		t || n.set(e.targetClipId, t = []), t.push(e);
	}
	return {
		byClipId: t,
		byTargetClipId: n
	};
}
function na(e, t, n, r) {
	if (!Number.isInteger(n) || n < 0 || n >= e.durationFrames) return [];
	let i = r?.byClipId.get(t);
	if (!r) for (let n of e.layers) for (let e of n.clips) e.id === t && (i = {
		clip: e,
		visible: n.visible !== !1
	});
	if (!i || i.clip.kind !== "html" || !Qi(i.clip) || i.clip.instanceOfClipId || !i.visible || n < i.clip.inFrame || n >= i.clip.outFrame) return [];
	let a = r ?? ta(e), o = a.byTargetClipId.get(t);
	if (!o?.length) return [];
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), l = [], u = (e) => {
		if (s.has(e)) return s.get(e);
		if (c.has(e)) return !1;
		let r = a.byClipId.get(e);
		if (!r || r.clip.kind !== "object-3d" || r.clip.targetClipId !== t) return !1;
		c.add(e);
		let i = r.clip, o = r.visible && n >= i.inFrame && n < i.outFrame && (!i.parentPlacementId || u(i.parentPlacementId));
		return c.delete(e), s.set(e, o), o && l.push(i), o;
	};
	for (let e of o) u(e.id);
	return l;
}
function ra(e, t) {
	return !Array.isArray(e) || e.length !== 3 || e.some((e) => typeof e != "number" || !Number.isFinite(e)) ? t : [
		e[0],
		e[1],
		e[2]
	];
}
function ia(e) {
	return !Array.isArray(e) || e.length !== 3 || e.some((e) => typeof e != "number" || !Number.isFinite(e)) ? null : [
		e[0],
		e[1],
		e[2]
	];
}
function aa(e) {
	return e && typeof e == "object" && !Array.isArray(e) ? e : {};
}
function oa(e, t, n, r) {
	let i = new Map(t.map((e) => [e.id, e])), a = [], o = /* @__PURE__ */ new Set();
	for (let t of na(e, n, r)) {
		let e = i.get(t.assetId);
		if (e?.kind !== "null-3d" && e?.kind !== "light-3d" && e?.kind !== "camera-3d" && e?.kind !== "mesh-3d" && e?.kind !== "model-3d" || t.parentPlacementId && !o.has(t.parentPlacementId)) continue;
		let n = aa(e.descriptor);
		if (e.kind === "light-3d" && n.lightType !== void 0 && ![
			"directional",
			"point",
			"spot",
			"ambient"
		].includes(String(n.lightType)) || e.kind === "camera-3d" && n.cameraType !== void 0 && n.cameraType !== "perspective" && n.cameraType !== "orthographic") continue;
		let s = aa(n.transform), c = he(t.params, t.keyframeTracks, r - t.inFrame), l = ra(c.position ?? s.position, e.kind === "camera-3d" ? [
			0,
			0,
			367
		] : [
			0,
			0,
			0
		]), u = ra(c.rotation ?? s.rotation, [
			0,
			0,
			0
		]), d = ra(c.scale ?? s.scale, [
			1,
			1,
			1
		]), f = {
			id: t.id,
			...t.parentPlacementId ? { parentPlacementId: t.parentPlacementId } : {},
			kind: e.kind,
			position: l,
			rotation: u,
			scale: d,
			placementFrame: r - t.inFrame,
			...e.kind === "model-3d" ? { modelAssetId: e.id } : {},
			...e.scriptAssetId ? { scriptAssetId: e.scriptAssetId } : {}
		};
		if (e.kind === "light-3d") {
			let e = c.lightType ?? n.lightType;
			f.lightType = e === "point" || e === "spot" || e === "ambient" ? e : "directional";
			let t = c.color ?? n.color;
			f.color = typeof t == "string" || typeof t == "number" ? t : "#ffffff";
			let r = c.intensity ?? n.intensity;
			if (f.intensity = typeof r == "number" && Number.isFinite(r) && r >= 0 ? r : 1, f.lightType === "point" || f.lightType === "spot") {
				let e = c.distance ?? n.distance, t = c.decay ?? n.decay;
				f.distance = typeof e == "number" && Number.isFinite(e) && e >= 0 ? e : 0, f.decay = typeof t == "number" && Number.isFinite(t) && t >= 0 ? t : 2;
			}
			if (f.lightType === "spot") {
				let e = c.angle ?? n.angle, t = c.penumbra ?? n.penumbra;
				f.angle = typeof e == "number" && Number.isFinite(e) && e > 0 && e <= Math.PI / 2 ? e : 1.0472, f.penumbra = typeof t == "number" && Number.isFinite(t) && t >= 0 && t <= 1 ? t : 0;
			}
		} else if (e.kind === "camera-3d") {
			f.cameraType = (c.cameraType ?? n.cameraType) === "orthographic" ? "orthographic" : "perspective";
			let e = c.orthoHeight ?? n.orthoHeight;
			f.orthoHeight = typeof e == "number" && Number.isFinite(e) && e >= .001 && e <= 1e5 ? e : 405;
			let r = c.fov ?? n.fov, i = c.near ?? n.near, a = c.far ?? n.far;
			f.fov = typeof r == "number" && r > 0 && r < 180 ? r : 60, f.near = typeof i == "number" && Number.isFinite(i) && i > 0 ? i : 1, f.far = typeof a == "number" && Number.isFinite(a) && a > f.near ? a : Math.max(1e5, f.near + 1);
			let o = ia(c.aimTarget ?? n.aimTarget), s = c.aimMode ?? n.aimMode ?? (o ? "aim" : "rotation");
			s === "aim" && o && (f.aimTarget = o), s === "placement" && t.aimTargetPlacementId && (f.aimTargetPlacementId = t.aimTargetPlacementId);
		} else if (e.kind === "model-3d") {
			let e = Ki(void 0, c);
			f.modelMaterialOverrides = Object.fromEntries(["type", ...Object.keys(Vi)].filter((e) => c[e] !== void 0 && (e !== "type" || c[e] !== "")).map((t) => [t, e[t]]));
		} else if (e.kind === "mesh-3d") {
			let t = i.get(e.geometryAssetId ?? ""), n = i.get(e.materialAssetId ?? "");
			if (t?.kind !== "geometry-3d" || n?.kind !== "material-3d") continue;
			f.geometry = Gi(t.descriptor), f.material = Ki(n.descriptor, Object.fromEntries(["type", ...Object.keys(Vi)].filter((e) => c[e] !== void 0).map((e) => [e, c[e]])));
		}
		a.push(f), o.add(t.id);
	}
	for (let e of a) e.aimTargetPlacementId && !o.has(e.aimTargetPlacementId) && delete e.aimTargetPlacementId;
	return a;
}
function sa(e, t) {
	let n = new Set(t.filter((e) => e.kind === "camera-3d").map((e) => e.id));
	for (let t of e.layers) for (let e = t.clips.length - 1; e >= 0; --e) {
		let r = t.clips[e];
		if (n.has(r.id)) return r.id;
	}
	return null;
}
function ca(e, t) {
	let n = new Map(e.map((e) => [e.id, e])), r = /* @__PURE__ */ new Set(), i = (e) => {
		if (!e || r.has(e)) return;
		let t = n.get(e);
		t && (r.add(e), i(t.parentPlacementId), t.kind === "camera-3d" && i(t.aimTargetPlacementId));
	};
	return i(t), e.filter((e) => r.has(e.id)).map((e) => e.kind === "camera-3d" ? e : {
		...e,
		kind: "null-3d",
		modelAssetId: void 0,
		geometry: void 0,
		material: void 0
	});
}
var la = /* @__PURE__ */ new WeakMap();
function ua(e, t, n) {
	let r = la.get(e.layers);
	r || la.set(e.layers, r = /* @__PURE__ */ new WeakMap());
	let i = r.get(t);
	i || r.set(t, i = /* @__PURE__ */ new Map());
	let a = i.get(n);
	if (!a || a.durationFrames !== e.durationFrames) {
		let r = e.layers.flatMap((e) => e.clips).filter((e) => e.kind === "object-3d" && e.targetClipId === n), o = new Set(t.filter((e) => e.kind === "camera-3d").map((e) => e.id)), s = r.some((e) => o.has(e.assetId) && (e.cameraTransition?.type === "dissolve" || e.cameraTransition?.type === "transform"));
		a = {
			durationFrames: e.durationFrames,
			clips: new Map(r.map((e) => [e.id, e])),
			boundaries: s ? [...new Set(r.flatMap((e) => [e.inFrame, e.outFrame]))].filter((e) => e > 0).sort((e, t) => t - e) : [],
			snapshots: /* @__PURE__ */ new Map()
		}, i.set(n, a);
	}
	return a;
}
function da(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + Math.floor((r - n) / 2);
		e[i] > t ? n = i + 1 : r = i;
	}
	return n;
}
function fa(e, t, n, r, i) {
	if (r <= 0) return;
	let a = ua(e, t, n);
	for (let o = da(a.boundaries, r); o < a.boundaries.length; o++) {
		let s = a.boundaries[o];
		if (s <= r - 120) break;
		let c = a.snapshots.get(s);
		if (!c) {
			let r = oa(e, t, n, s - 1), i = oa(e, t, n, s), o = sa(e, r);
			c = {
				fromCameraId: o,
				toCameraId: sa(e, i),
				fromObjects: o ? ca(r, o) : []
			}, a.snapshots.set(s, c);
		}
		let { fromCameraId: l, toCameraId: u } = c;
		if (l === u) continue;
		if (u !== i) return;
		let d = u ? a.clips.get(u)?.cameraTransition : a.clips.get(l ?? "")?.cameraTransition;
		return d?.type !== "dissolve" && d?.type !== "transform" || r >= s + d.durationFrames || d.type === "transform" && (!l || !u) ? void 0 : {
			type: d.type,
			boundaryFrame: s,
			fromCameraId: l,
			fromObjects: c.fromObjects,
			progress: (r - s + 1) / d.durationFrames
		};
	}
}
function pa(e, t, n, r) {
	if (!Qi(r)) return e;
	let i = oa(t, n, r.id, e.compFrame), a = sa(t, i), o = fa(t, n, r.id, e.compFrame, a);
	return {
		...e,
		threeDObjects: i,
		threeDCameraId: a,
		...o ? { threeDCameraTransition: o } : {}
	};
}
//#endregion
//#region src/core/libraryValidation.ts
function ma(e) {
	if (!e || typeof e != "object" || typeof e.sha256 != "string" || !/^[a-f0-9]{64}$/.test(e.sha256) || !Number.isSafeInteger(e.bytes) || e.bytes < 0 || e.bytes > 67108864 || typeof e.fetchedAt != "string" || e.fetchedAt.length > 64 || !Number.isFinite(Date.parse(e.fetchedAt))) throw Error("Invalid library provenance.");
	for (let t of [e.url, e.finalUrl]) {
		if (typeof t != "string" || t.length > 8192) throw Error("Invalid library provenance URL.");
		let e = new URL(t);
		if (e.protocol !== "https:" || e.username || e.password) throw Error("Invalid library provenance URL.");
	}
}
function ha(e, t) {
	if (e.libraries !== void 0) {
		if (!Array.isArray(e.libraries) || e.libraries.length > 256 || e.libraries.some((e) => typeof e != "string" || !e) || new Set(e.libraries).size !== e.libraries.length) throw Error("Clip libraries must be unique asset IDs.");
		for (let n of e.libraries) {
			let e = t.find((e) => e.id === n);
			if (e?.kind !== "script" || e.mode !== "global") throw Error(`Clip library ${n} must reference a global Script asset.`);
		}
	}
}
//#endregion
//#region src/core/p5ReplayContracts.ts
function ga(e) {
	if (!Number.isFinite(e)) throw Error("P5 replay requires a finite local frame.");
	let t = Math.floor(Math.max(0, e) + 1e-9);
	if (!Number.isSafeInteger(t)) throw Error("P5 replay frame exceeds the safe integer range.");
	return t;
}
//#endregion
//#region src/core/p5ReplayLimits.ts
var _a = Object.freeze({
	maxDraws: 1200,
	maxCpuMs: 5e3
}), va = Object.freeze({
	maxDraws: 6e3,
	maxCpuMs: 3e4
});
function ya(e, t) {
	if (e !== void 0) {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`P5 replay ${t}: p5ReplayLimits must be an object.`);
		for (let n of ["maxDraws", "maxCpuMs"]) {
			let r = e[n];
			if (r !== void 0 && (typeof r != "number" || !Number.isInteger(r) || r < 1 || r > va[n])) throw Error(`P5 replay ${t}: p5ReplayLimits.${n} must be an integer from 1 to ${va[n]}; received ${String(r)}.`);
		}
	}
}
function ba(e) {
	if (e.p5Playback !== void 0 && e.p5Playback !== "timeline" && e.p5Playback !== "isolated-replay") throw Error(`P5 replay ${e.id}: unsupported p5Playback ${String(e.p5Playback)}.`);
	ya(e.p5ReplayLimits, e.id);
}
function xa(e) {
	ya(e.p5ReplayLimits, e.id);
	let t = e.p5ReplayLimits?.maxCpuMs ?? _a.maxCpuMs;
	return {
		maxDrawsPerReset: e.p5ReplayLimits?.maxDraws ?? _a.maxDraws,
		maxCpuMs: t,
		maxWallMs: Math.max(15e3, t * 3),
		chunkDraws: 16,
		chunkMs: 8,
		maxPixelsPerRealm: 4e6,
		maxAccountedBytesPerRealm: 67108864
	};
}
//#endregion
//#region src/core/projectFormat.ts
function Sa(e) {
	let t = La(e);
	if (t !== 1 && t !== 2) throw Error("Unsupported MacroFlush project format.");
	let n = Ca(t === 1 ? Ea(e) : Ba(e));
	return Ta(n), n;
}
function Ca(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.assets) if (n.kind === "composition") for (let e of n.composition.layers) t.add(e.id);
	let n = (e) => {
		let n = 1, r = `${e}-wgsl`;
		for (; t.has(r);) r = `${e}-wgsl-${n++}`;
		return t.add(r), r;
	}, r = !1, i = e.assets.map((e) => {
		if (e.kind !== "composition") return e;
		let t = e.composition.layers.flatMap((e) => {
			if (e.kind !== void 0) return [e];
			let t = e.clips.filter((e) => e.kind === "wgsl");
			if (t.length === 0) return [e];
			r = !0;
			let i = e.clips.filter((e) => e.kind !== "wgsl"), a = {
				id: n(e.id),
				name: `${e.name} WGSL`,
				kind: "wgsl",
				visible: e.visible,
				clips: t
			};
			return i.length ? [{
				...e,
				clips: i
			}, a] : [a];
		});
		return t === e.composition.layers ? e : {
			...e,
			composition: {
				...e.composition,
				layers: t
			}
		};
	});
	return r ? {
		...e,
		assets: i
	} : e;
}
function wa(e, t) {
	let n = e.assets.find((e) => e.kind === "composition" && e.id === t);
	if (!n) throw Error(`Composition asset not found: ${t}`);
	return n;
}
function Ta(e) {
	(!B(e) || e.clipFormatVersion !== 2) && V("Expected clipFormatVersion 2."), Ra(e.rootCompositionId) || V("rootCompositionId is required."), Array.isArray(e.assets) || V("assets must be an array."), B(e.remoteAssetPolicy) || V("remoteAssetPolicy is required.");
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e.assets) (!B(r) || !Ra(r.id) || !Ra(r.kind)) && V("Every asset needs a non-empty id and kind."), t.has(r.id) && V(`Duplicate asset id: ${r.id}`), t.add(r.id), r.kind === "composition" ? (Ma(r.composition) || V(`Composition asset ${r.id} has no valid document.`), n.set(r.id, r)) : r.kind === "html-clip" ? ((!B(r.htmlTemplate) || r.htmlTemplate.kind !== "html") && V(`HTML asset ${r.id} has no valid template.`), ba(r.htmlTemplate)) : r.kind === "wgsl-clip" ? (!B(r.wgslTemplate) || r.wgslTemplate.kind !== "wgsl") && V(`WGSL asset ${r.id} has no valid template.`) : r.kind === "shader-clip" ? ((!B(r.shaderTemplate) || r.shaderTemplate.kind !== "shader") && V(`Shader asset ${r.id} has no valid template.`), bt(r.shaderTemplate)) : r.kind === "font" ? Ra(r.fontFamily) || V(`Font asset ${r.id} has no font family.`) : r.kind === "data" ? (!("value" in r) || r.value === void 0) && V(`Data asset ${r.id} has no value.`) : r.kind === "feedback" ? r.recording === void 0 && V(`Feedback asset ${r.id} has no recording.`) : r.kind === "script" ? (typeof r.source != "string" && V(`Script asset ${r.id} has no source.`), r.mode !== void 0 && r.mode !== "module" && r.mode !== "global" && V(`Invalid Script mode on ${r.id}.`), r.origin !== void 0 && ma(r.origin)) : r.kind !== "image" && r.kind !== "video" && r.kind !== "audio" && r.kind !== "camera-3d" && r.kind !== "light-3d" && r.kind !== "null-3d" && r.kind !== "mesh-3d" && r.kind !== "model-3d" && r.kind !== "geometry-3d" && r.kind !== "material-3d" && V(`Unknown asset kind on ${r.id}: ${String(r.kind)}`);
	$i(e.assets), Be(e.assets);
	for (let t of e.assets) t.kind === "html-clip" && ha(t.htmlTemplate, e.assets);
	n.has(e.rootCompositionId) || V(`Root composition does not exist: ${e.rootCompositionId}`);
	let r = /* @__PURE__ */ new Map();
	for (let [i, a] of n) {
		let o = a.composition, s = /* @__PURE__ */ new Set(), c = [];
		for (let r of o.layers) {
			(!B(r) || !Ra(r.id) || !Array.isArray(r.clips)) && V(`Composition ${i} contains an invalid layer.`), r.kind !== void 0 && r.kind !== "chromium" && r.kind !== "wgsl" && r.kind !== "effect" && V(`Layer ${r.id} has an invalid kind.`);
			for (let a of r.clips) ka(a, i, s, t, n, c), a.kind === "html" && ha(a, e.assets), a.kind === "shader" && !e.assets.some((e) => e.id === a.assetId && e.kind === "shader-clip") && V(`Shader clip ${a.id} must reference a shader asset.`), (r.kind ?? "chromium") === "wgsl" != (a.kind === "wgsl") && V(`Layer ${r.id} cannot contain ${a.kind} clips.`);
		}
		ot(o.layers);
		for (let e of o.layers) for (let t of e.clips) {
			t.maskClipId && !o.layers.some((e) => e.clips.some((e) => e.id === t.maskClipId)) && V(`Clip ${t.id} references unknown mask clip ${t.maskClipId}.`), tt(o.layers, t.id, t.maskClipId) && V(`Mask cycle detected from clip ${t.id}.`);
			let e = t.instanceOfClipId;
			if (e !== void 0 && !Ra(e) && V(`Clip ${t.id} has an invalid instance clip reference.`), typeof e == "string") {
				t.kind !== "html" && V(`Only HTML clips can be instances (${t.id}).`);
				let n = o.layers.flatMap((e) => e.clips).find((t) => t.id === e);
				n || V(`Clip ${t.id} references unknown instance clip ${e}.`), n.kind !== "html" && V(`Clip ${t.id} must instance an HTML clip.`), n.instanceOfClipId && V(`Clip ${t.id} cannot instance another instance.`), nt(o.layers, t.id, e) && V(`Instance cycle detected from clip ${t.id}.`);
			}
		}
		ea(o, e.assets), r.set(i, c);
	}
	ja(r);
}
function Ea(e) {
	Oa(e);
	let t = Ba(e), n = Na(t), r = t.assets.find((e) => e.kind === "composition" && e.composition && Pa(e.composition, n))?.id ?? Fa(t.assets), i = !1, a = t.assets.map((e) => {
		if (e.kind === "html-clip" && !e.htmlTemplate) {
			let t = n.layers.flatMap((e) => e.clips).find((t) => t.kind === "html" && (t.id === e.clipId || t.assetId === e.id));
			return (!t || t.kind !== "html") && V(`HTML asset ${e.id} has no reusable template.`), {
				...e,
				htmlTemplate: Ba(t)
			};
		}
		if (e.kind === "wgsl-clip" && !e.wgslTemplate) {
			let t = n.layers.flatMap((e) => e.clips).find((t) => t.kind === "wgsl" && (t.id === e.clipId || t.assetId === e.id));
			return (!t || t.kind !== "wgsl") && V(`WGSL asset ${e.id} has no reusable template.`), {
				...e,
				wgslTemplate: Ba(t)
			};
		}
		return e.kind === "composition" ? e.id === r ? (i = !0, {
			...e,
			composition: n,
			detail: Ia(n)
		}) : e.composition ? e : {
			...e,
			composition: {
				...n,
				layers: []
			},
			detail: e.detail || Ia(n)
		} : e;
	});
	return i || a.unshift({
		id: r,
		name: "MainComposition",
		kind: "composition",
		detail: Ia(n),
		composition: n
	}), {
		clipFormatVersion: 2,
		rootCompositionId: r,
		assets: a,
		remoteAssetPolicy: t.remoteAssetPolicy
	};
}
function Da(e) {
	let t = e.assets.find((t) => t.kind === "composition" && t.id === e.rootCompositionId);
	t || V(`Root composition does not exist: ${e.rootCompositionId}`);
	let n = [t, ...e.assets.filter((e) => e.id !== t.id)];
	return {
		clipFormatVersion: 1,
		...Ba(t.composition),
		assets: Ba(n),
		remoteAssetPolicy: Ba(e.remoteAssetPolicy)
	};
}
function Oa(e) {
	(!B(e) || e.clipFormatVersion !== 1) && V("Expected a V1 MacroFlush project.");
	for (let t of [
		"width",
		"height",
		"fps",
		"bpm",
		"durationFrames"
	]) za(e[t]) || V(`${t} must be a positive number.`);
	(!Array.isArray(e.layers) || !Array.isArray(e.assets) || !B(e.remoteAssetPolicy)) && V("Project layers, assets, or remote asset policy are invalid.");
}
function ka(e, t, n, r, i, a) {
	(!B(e) || !Ra(e.id) || !Ra(e.kind)) && V(`Composition ${t} contains an invalid clip.`), n.has(e.id) && V(`Duplicate clip id ${e.id} in composition ${t}.`), n.add(e.id), (!Number.isFinite(e.inFrame) || !Number.isFinite(e.outFrame) || e.inFrame < 0 || e.outFrame <= e.inFrame) && V(`Clip ${e.id} has an invalid in/out range.`), "assetId" in e && e.assetId && !r.has(e.assetId) && V(`Clip ${e.id} references unknown asset ${e.assetId}.`), "maskClipId" in e && e.maskClipId !== void 0 && !Ra(e.maskClipId) && V(`Clip ${e.id} has an invalid mask clip reference.`), e.kind === "composition-ref" && (i.has(e.assetId) || V(`Clip ${e.id} does not reference a composition asset.`), a.push(e.assetId)), e.kind === "html" && ba(e), e.kind === "wgsl" && typeof e.source != "string" && V(`WGSL clip ${e.id} has no source.`), e.kind === "shader" && (e.maskClipId && V(`Shader clip ${e.id} cannot have a mask.`), bt(e)), e.kind === "wgsl" && "paramLayout" in e && e.paramLayout !== void 0 && Aa(e.id, e.paramLayout), e.kind !== "html" && e.kind !== "image" && e.kind !== "video" && e.kind !== "audio" && e.kind !== "composition-ref" && e.kind !== "wgsl" && e.kind !== "object-3d" && e.kind !== "shader" && V(`Clip ${e.id} has an unknown kind.`);
}
function Aa(e, t) {
	B(t) || V(`WGSL clip ${e} has an invalid parameter layout.`);
	let n = /* @__PURE__ */ new Set();
	for (let [r, i] of Object.entries(t)) {
		B(i) || V(`WGSL clip ${e} has an invalid parameter slot for ${r}.`);
		let t = i.slot, a = i.componentCount;
		(typeof t != "number" || typeof a != "number" || !Number.isInteger(t) || !Number.isInteger(a) || t < 0 || ![
			1,
			2,
			4
		].includes(a) || t + a > 16) && V(`WGSL clip ${e} has an invalid parameter slot for ${r}.`);
		for (let r = t; r < t + a; r += 1) n.has(r) && V(`WGSL clip ${e} has overlapping parameter slots.`), n.add(r);
	}
}
function ja(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = (i, a) => {
		if (t.has(i) && V(`Composition cycle detected: ${[...a, i].join(" -> ")}`), !n.has(i)) {
			t.add(i);
			for (let t of e.get(i) ?? []) r(t, [...a, i]);
			t.delete(i), n.add(i);
		}
	};
	for (let t of e.keys()) r(t, []);
}
function Ma(e) {
	return B(e) ? za(e.width) && za(e.height) && za(e.fps) && za(e.bpm) && za(e.durationFrames) && (e.parameters === void 0 || B(e.parameters)) && (e.parameterKeyframeTracks === void 0 || B(e.parameterKeyframeTracks)) && (e.cueScript === void 0 || typeof e.cueScript == "string") && Array.isArray(e.layers) : !1;
}
function Na(e) {
	return {
		width: e.width,
		height: e.height,
		fps: e.fps,
		bpm: e.bpm,
		durationFrames: e.durationFrames,
		...e.parameters ? { parameters: Ba(e.parameters) } : {},
		...e.parameterKeyframeTracks ? { parameterKeyframeTracks: Ba(e.parameterKeyframeTracks) } : {},
		...e.cues ? { cues: Ba(e.cues) } : {},
		...e.cueScript ? { cueScript: e.cueScript } : {},
		layers: Ba(e.layers)
	};
}
function Pa(e, t) {
	return JSON.stringify(e) === JSON.stringify(t);
}
function Fa(e) {
	let t = new Set(e.map((e) => e.id));
	if (!t.has("composition-root")) return "composition-root";
	let n = 2;
	for (; t.has(`composition-root-${n}`);) n += 1;
	return `composition-root-${n}`;
}
function Ia(e) {
	return `${e.width} x ${e.height}, ${e.fps} fps`;
}
function La(e) {
	return B(e) && typeof e.clipFormatVersion == "number" ? e.clipFormatVersion : null;
}
function B(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ra(e) {
	return typeof e == "string" && e.trim().length > 0;
}
function za(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0;
}
function Ba(e) {
	return structuredClone(e);
}
function V(e) {
	throw Error(`Invalid MacroFlush project: ${e}`);
}
//#endregion
//#region src/core/sceneGraph.ts
function Va(e, t) {
	return e.kind !== "html-clip" || !e.htmlTemplate.capabilities?.includes("p5") || e.htmlTemplate.p5Playback !== "isolated-replay" || !Object.keys(t.clip ?? {}).length ? null : /* @__PURE__ */ Error(`P5 replay runtime:${t.id} (${e.name}): object.clip writes are unsupported in isolated replay; use timeline mode.`);
}
var Ha = 64;
function Ua(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.values()) t.set(n.id, {
		object: n,
		children: []
	});
	let n = [];
	for (let e of t.values()) {
		let r = e.object.parentId ? t.get(e.object.parentId) : void 0;
		r ? r.children.push(e) : n.push(e);
	}
	let r = (e, t) => (e.object.zIndex ?? 0) - (t.object.zIndex ?? 0);
	n.sort(r);
	let i = [...n];
	for (; i.length;) {
		let e = i.pop();
		e.children.sort(r), i.push(...e.children);
	}
	return n;
}
function Wa(e, t) {
	let n = new Map(e);
	if (t.type === "remove") {
		let e = /* @__PURE__ */ new Set([t.id]);
		for (let t = !0; t;) {
			t = !1;
			for (let r of n.values()) r.parentId && e.has(r.parentId) && !e.has(r.id) && (e.add(r.id), t = !0);
		}
		for (let t of e) n.delete(t);
	} else {
		let e = Ga(t.object);
		(e.parentId === e.id || eo(n, e.id, e.parentId, "parentId")) && delete e.parentId, (e.maskId === e.id || eo(n, e.id, e.maskId, "maskId")) && delete e.maskId, (e.instanceOfId === e.id || eo(n, e.id, e.instanceOfId, "instanceOfId")) && delete e.instanceOfId, e.instanceOfId && n.get(e.instanceOfId)?.instanceOfId && delete e.instanceOfId, n.set(e.id, e);
	}
	return n;
}
function Ga(e) {
	return {
		id: e.id,
		assetId: e.assetId,
		x: Za(e.x, 0),
		y: Za(e.y, 0),
		scale: Za(e.scale, 1),
		rotation: Za(e.rotation, 0),
		opacity: Math.max(0, Math.min(1, Za(e.opacity, 1))),
		visible: e.visible !== !1,
		volume: Math.max(0, Math.min(1, Za(e.volume, 1))),
		clip: Qa(e.clip) ? { ...e.clip } : {},
		zIndex: Za(e.zIndex, 0),
		width: Ka(e.width),
		height: Ka(e.height),
		anchorPoint: e.anchorPoint ? $a(e.anchorPoint, [0, 0]) : void 0,
		blendMode: typeof e.blendMode == "string" ? e.blendMode : "normal",
		parentId: typeof e.parentId == "string" ? e.parentId : void 0,
		maskId: typeof e.maskId == "string" ? e.maskId : void 0,
		instanceOfId: typeof e.instanceOfId == "string" ? e.instanceOfId : void 0
	};
}
function Ka(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
}
function qa(e, t, n, r) {
	let i = Va(e, t);
	if (i) throw i;
	let a = e.kind === "html-clip" ? e.htmlTemplate : null, o = e.kind === "html-clip" && r ? r : a?.params ?? {}, s = e.kind === "composition" ? [e.composition.width, e.composition.height] : Xa(o), c = structuredClone(o);
	Ya(c, "position", [t.x, t.y]), Ya(c, "scale", [t.scale, t.scale]), Ya(c, "rotation", t.rotation), Ya(c, "opacity", t.opacity), Ya(c, "size", s), Ya(c, "anchorPoint", t.anchorPoint ?? [s[0] / 2, s[1] / 2]), Ya(c, "blendMode", t.blendMode ?? "normal");
	for (let [e, n] of Object.entries(t.clip ?? {})) c[e] && (c[e] = {
		...c[e],
		value: n
	});
	let l = {
		id: `runtime:${t.id}`,
		name: e.name,
		assetId: e.id,
		inFrame: 0,
		outFrame: Math.max(1, n),
		params: c,
		keyframeTracks: {}
	};
	return e.kind === "html-clip" ? {
		...l,
		kind: "html",
		authoredBy: a.authoredBy,
		source: structuredClone(a.source),
		remoteAssets: structuredClone(a.remoteAssets),
		...a.libraries ? { libraries: [...a.libraries] } : {},
		...a.capabilities ? { capabilities: [...a.capabilities] } : {},
		...a.p5Playback ? { p5Playback: a.p5Playback } : {},
		...a.p5ReplayLimits ? { p5ReplayLimits: structuredClone(a.p5ReplayLimits) } : {},
		...a.feedback ? { feedback: structuredClone(a.feedback) } : {}
	} : {
		...l,
		kind: "composition-ref"
	};
}
function Ja(e) {
	let t = Xa(e.params), n = {
		...e,
		params: structuredClone(e.params),
		keyframeTracks: {}
	};
	return Ya(n.params, "position", [0, 0]), Ya(n.params, "anchorPoint", [t[0] / 2, t[1] / 2]), Ya(n.params, "scale", [1, 1]), Ya(n.params, "rotation", 0), Ya(n.params, "opacity", 1), Ya(n.params, "blendMode", "normal"), {
		contentClip: n,
		size: t
	};
}
function Ya(e, t, n) {
	let r = e[t];
	e[t] = r ? {
		...r,
		key: t,
		value: n
	} : {
		key: t,
		type: Array.isArray(n) ? "vec2" : "number",
		default: n,
		group: "builtin",
		interpolable: !1,
		value: n
	};
}
function Xa(e) {
	let t = e.size?.value;
	return Array.isArray(t) ? [Number(t[0]) || 640, Number(t[1]) || 360] : [640, 360];
}
function Za(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Qa(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function $a(e, t) {
	return Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1])) ? [Number(e[0]), Number(e[1])] : t;
}
function eo(e, t, n, r) {
	let i = n, a = /* @__PURE__ */ new Set(), o = 0;
	for (; i;) {
		if (o++ >= Ha) return console.warn(`MacroFlush rejected ${r} for display object ${t}: maximum scene graph depth is ${Ha}.`), !0;
		if (i === t || a.has(i)) return !0;
		a.add(i), i = e.get(i)?.[r];
	}
	return !1;
}
//#endregion
//#region node_modules/parse5/dist/common/unicode.js
var to = /* @__PURE__ */ new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), H;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(H ||= {});
var no = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function ro(e) {
	return e >= 55296 && e <= 57343;
}
function io(e) {
	return e >= 56320 && e <= 57343;
}
function ao(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function oo(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function so(e) {
	return e >= 64976 && e <= 65007 || to.has(e);
}
//#endregion
//#region node_modules/parse5/dist/common/error-codes.js
var U;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(U ||= {});
//#endregion
//#region node_modules/parse5/dist/tokenizer/preprocessor.js
var co = 65536, lo = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = co, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (io(t)) return this.pos++, this._addGap(), ao(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, H.EOF;
		return this._err(U.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, H.EOF;
		let n = this.html.charCodeAt(t);
		return n === H.CARRIAGE_RETURN ? H.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, H.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === H.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, H.LINE_FEED) : e === H.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ro(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === H.LINE_FEED || e === H.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		oo(e) ? this._err(U.controlCharacterInInputStream) : so(e) && this._err(U.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, W;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(W ||= {});
function uo(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
//#endregion
//#region node_modules/entities/dist/decode-codepoint.js
var fo = [
	8364,
	0,
	8218,
	402,
	8222,
	8230,
	8224,
	8225,
	710,
	8240,
	352,
	8249,
	338,
	0,
	381,
	0,
	0,
	8216,
	8217,
	8220,
	8221,
	8226,
	8211,
	8212,
	732,
	8482,
	353,
	8250,
	339,
	0,
	382,
	376
];
function po(e) {
	return e === 0 || e >= 55296 && e <= 57343 || e > 1114111;
}
function mo(e) {
	return po(e) ? 65533 : e >= 128 && e <= 159 && fo[e - 128] || e;
}
function ho(e) {
	return po(e) ? 65533 : e;
}
//#endregion
//#region node_modules/entities/dist/internal/decode-shared.js
var go = /* #__PURE__ */ (() => {
	let e = /* @__PURE__ */ new Uint8Array(127), t = 0;
	for (let n = 33; n <= 126; n++) n !== 34 && n !== 36 && n !== 92 && (e[n] = t++);
	return e;
})();
function _o(e, t, n, r, i, a) {
	let o = e.length, s = a * 90, c = 0, l = () => {
		let t = go[e.charCodeAt(c++)];
		return t < a ? t : t * 91 - s + go[e.charCodeAt(c++)];
	}, u = n - r, d = n + i, f = new Int32Array(d);
	f.fill(-1, r, a), f.fill(-1, a + u, d);
	let p = new Int32Array(d), m = new Int32Array(d);
	function h(t, n) {
		let r = 0, i = n, a = n + t;
		for (; i < a;) {
			let t = go[e.charCodeAt(c++)];
			if (t < 89) r += t, f[i++] = r;
			else if (t === 89) {
				let t = go[e.charCodeAt(c++)] + 2;
				for (; t--;) f[i++] = ++r;
			} else {
				let t = go[e.charCodeAt(c++)];
				r += 89 + (t < 90 ? t * 91 + go[e.charCodeAt(c++)] : go[e.charCodeAt(c++)] * 8281 + go[e.charCodeAt(c++)] * 91 + go[e.charCodeAt(c++)]), f[i++] = r;
			}
		}
	}
	h(r, 0), h(u, a);
	let g = new Int32Array(i * 2), _ = 0, v = 0;
	function y(e, t) {
		for (let n = 0; n < e; n++) {
			let e = t + n, r = l(), i = l();
			g[v * 2] = r, g[v * 2 + 1] = i, v += 1, p[e] = _;
			let a = (f[r] < 0 ? m[r] : 1) + (f[i] < 0 ? m[i] : 1);
			m[e] = a, _ += a;
		}
	}
	y(i - a + r, a + u), y(a - r, r);
	let b = new Uint16Array(_), x = 0;
	for (let e = 0; e < v; e++) for (let t = 0; t < 2; t++) {
		let n = g[e * 2 + t], r = f[n];
		if (r < 0) {
			let e = p[n], t = e + m[n];
			for (; e < t;) b[x++] = b[e++];
		} else b[x++] = r;
	}
	let S = new Uint16Array(t), C = 0;
	for (; c < o;) {
		let t = go[e.charCodeAt(c++)];
		t >= a && (t = t * 91 - s + go[e.charCodeAt(c++)]);
		let n = f[t];
		if (n < 0) {
			let e = p[t], n = e + m[t];
			for (; e < n;) S[C++] = b[e++];
		} else S[C++] = n;
	}
	return S;
}
//#endregion
//#region node_modules/entities/dist/generated/decode-data-html.js
var vo = /* #__PURE__ */ _o("!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P", 13494, 2713, 49, 25, 61), yo = /* #__PURE__ */ new Uint16Array([
	512,
	26465,
	29036,
	7,
	0,
	2,
	4,
	116,
	24638,
	116,
	24636,
	8693,
	29807,
	24610,
	621,
	1,
	0,
	0,
	3,
	112,
	24614,
	111,
	115,
	24615
]), G;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.FLAG13 = 8192] = "FLAG13", e[e.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE", e[e.VALUE_MASK = 8191] = "VALUE_MASK";
})(G ||= {});
//#endregion
//#region node_modules/entities/dist/decode.js
var bo;
(function(e) {
	e[e.AMP = 38] = "AMP", e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_X = 120] = "LOWER_X";
})(bo ||= {});
var xo = 32;
function So(e) {
	return e - bo.ZERO >>> 0 <= 9;
}
function Co(e) {
	return (e | xo) - bo.LOWER_A >>> 0 <= 5;
}
function wo(e) {
	return (e | xo) - bo.LOWER_A >>> 0 <= 25;
}
function To(e) {
	return e === bo.EQUALS || wo(e) || So(e);
}
var Eo;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(Eo ||= {});
var Do;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Do ||= {});
var Oo = class {
	decodeTree;
	emitCodePoint;
	errors;
	state = Eo.EntityStart;
	consumed = 1;
	result = 0;
	treeIndex = 0;
	excess = 1;
	decodeMode = Do.Strict;
	runConsumed = 0;
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = Eo.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
	}
	write(e, t) {
		switch (this.state) {
			case Eo.EntityStart: return e.charCodeAt(t) === bo.NUM ? (this.state = Eo.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = Eo.NamedEntity, this.stateNamedEntity(e, t));
			case Eo.NumericStart: return this.stateNumericStart(e, t);
			case Eo.NumericDecimal: return this.stateNumericDecimal(e, t);
			case Eo.NumericHex: return this.stateNumericHex(e, t);
			default: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | xo) === bo.LOWER_X ? (this.state = Eo.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = Eo.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	stateNumericHex(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t);
			if (So(n) || Co(n)) {
				let e = n <= bo.NINE ? n - bo.ZERO : (n | xo) - bo.LOWER_A + 10;
				r = r * 16 + e, i += 1, t += 1;
			} else return this.result = r, this.consumed = i, this.emitNumericEntity(n, 3);
		}
		return this.result = r, this.consumed = i, -1;
	}
	stateNumericDecimal(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t) - bo.ZERO;
			if (n >>> 0 > 9) return this.result = r, this.consumed = i, this.emitNumericEntity(n + bo.ZERO, 2);
			r = r * 10 + n, i += 1, t += 1;
		}
		return this.result = r, this.consumed = i, -1;
	}
	emitNumericEntity(e, t) {
		if (this.consumed <= t) return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === bo.SEMI) this.consumed += 1;
		else if (this.decodeMode === Do.Strict) return 0;
		return this.emitCodePoint((this.decodeTree === yo ? ho : mo)(this.result), this.consumed), this.errors && (e !== bo.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	flushAndEmitLegacyOrReject(e, t, n, r) {
		return this.consumed = e, this.excess = t, this.result === 0 || this.decodeMode === Do.Attribute && (r === 0 || t > 1 || To(n)) ? 0 : this.emitNotTerminatedNamedEntity();
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = e.length, i = this.decodeMode === Do.Strict, { treeIndex: a } = this, { excess: o } = this, { consumed: s } = this, c = n[a];
		for (; t < r;) {
			for (; (c & (G.VALUE_LENGTH | G.FLAG13)) === 0 && (c & G.JUMP_TABLE) !== 0;) {
				let i = e.charCodeAt(t), l = c & G.JUMP_TABLE, u = (c & G.BRANCH_LENGTH) >> 7;
				if (u === 0) {
					if (i !== l) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					a += 1;
				} else {
					let e = i - l;
					if (e >>> 0 >= u) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					let t = n[a + 1 + e];
					if (t === 0) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					a = a + u + t & 65535;
				}
				if (c = n[a], t += 1, o += 1, t >= r) break;
			}
			if (t >= r) break;
			if ((c & (G.VALUE_LENGTH | G.FLAG13)) === G.FLAG13) {
				let i = (c & G.BRANCH_LENGTH) >> 7, { runConsumed: l } = this;
				if (l === 0) {
					let n = e.charCodeAt(t);
					if (n !== (c & G.JUMP_TABLE)) return this.flushAndEmitLegacyOrReject(s, o, n, 0);
					t += 1, o += 1, l = 1;
				}
				for (; l < i;) {
					if (t >= r) return this.treeIndex = a, this.excess = o, this.consumed = s, this.runConsumed = l, -1;
					let i = l - 1, c = n[a + 1 + (i >> 1)] >> ((i & 1) << 3) & 255, u = e.charCodeAt(t);
					if (u !== c) return this.runConsumed = 0, this.flushAndEmitLegacyOrReject(s, o, u, 0);
					t += 1, o += 1, l += 1;
				}
				this.runConsumed = 0, a += 1 + (i >> 1), c = n[a];
				continue;
			}
			let l = c >>> 14, u = e.charCodeAt(t);
			if (l !== 0) {
				if (!i && (c & G.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), u === bo.SEMI) return this.emitNamedEntityData(a, l, s + o);
				if (l === 1) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			}
			let d = ko(n, c, a + (l || 1), u);
			if (d < 0) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			a = d, c = n[a], t += 1, o += 1;
		}
		return !i && c >>> 14 && (c & G.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), this.treeIndex = a, this.excess = o, this.consumed = s, -1;
	}
	emitNotTerminatedNamedEntity() {
		let { result: e, decodeTree: t } = this, n = t[e] >>> 14;
		return this.emitNamedEntityData(e, n, this.consumed), this.errors?.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & G.VALUE_MASK : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		switch (this.state) {
			case Eo.NamedEntity: return this.result !== 0 && (this.decodeMode !== Do.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case Eo.NumericDecimal: return this.emitNumericEntity(0, 2);
			case Eo.NumericHex: return this.emitNumericEntity(0, 3);
			case Eo.NumericStart: return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			default: return 0;
		}
	}
};
function ko(e, t, n, r) {
	let i = (t & G.BRANCH_LENGTH) >> 7, a = t & G.JUMP_TABLE;
	if (a) {
		if (i === 0) return r === a ? n : -1;
		let t = r - a;
		if (t >>> 0 >= i) return -1;
		let o = e[n + t];
		return o === 0 ? -1 : n + i + o - 1 & 65535;
	}
	if (i === 0) return -1;
	let o = i + 1 >> 1, s = n + o + i;
	for (let t = 0; t < i; t++) {
		let i = e[n + (t >> 1)] >> ((t & 1) << 3) & 255;
		if (i === r) return s + e[n + o + t] & 65535;
		if (i > r) return -1;
	}
	return -1;
}
//#endregion
//#region node_modules/parse5/dist/common/html.js
var K;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(K ||= {});
var Ao;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(Ao ||= {});
var jo;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(jo ||= {});
var q;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(q ||= {});
var J;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(J ||= {});
var Mo = /* @__PURE__ */ new Map([
	[q.A, J.A],
	[q.ADDRESS, J.ADDRESS],
	[q.ANNOTATION_XML, J.ANNOTATION_XML],
	[q.APPLET, J.APPLET],
	[q.AREA, J.AREA],
	[q.ARTICLE, J.ARTICLE],
	[q.ASIDE, J.ASIDE],
	[q.B, J.B],
	[q.BASE, J.BASE],
	[q.BASEFONT, J.BASEFONT],
	[q.BGSOUND, J.BGSOUND],
	[q.BIG, J.BIG],
	[q.BLOCKQUOTE, J.BLOCKQUOTE],
	[q.BODY, J.BODY],
	[q.BR, J.BR],
	[q.BUTTON, J.BUTTON],
	[q.CAPTION, J.CAPTION],
	[q.CENTER, J.CENTER],
	[q.CODE, J.CODE],
	[q.COL, J.COL],
	[q.COLGROUP, J.COLGROUP],
	[q.DD, J.DD],
	[q.DESC, J.DESC],
	[q.DETAILS, J.DETAILS],
	[q.DIALOG, J.DIALOG],
	[q.DIR, J.DIR],
	[q.DIV, J.DIV],
	[q.DL, J.DL],
	[q.DT, J.DT],
	[q.EM, J.EM],
	[q.EMBED, J.EMBED],
	[q.FIELDSET, J.FIELDSET],
	[q.FIGCAPTION, J.FIGCAPTION],
	[q.FIGURE, J.FIGURE],
	[q.FONT, J.FONT],
	[q.FOOTER, J.FOOTER],
	[q.FOREIGN_OBJECT, J.FOREIGN_OBJECT],
	[q.FORM, J.FORM],
	[q.FRAME, J.FRAME],
	[q.FRAMESET, J.FRAMESET],
	[q.H1, J.H1],
	[q.H2, J.H2],
	[q.H3, J.H3],
	[q.H4, J.H4],
	[q.H5, J.H5],
	[q.H6, J.H6],
	[q.HEAD, J.HEAD],
	[q.HEADER, J.HEADER],
	[q.HGROUP, J.HGROUP],
	[q.HR, J.HR],
	[q.HTML, J.HTML],
	[q.I, J.I],
	[q.IMG, J.IMG],
	[q.IMAGE, J.IMAGE],
	[q.INPUT, J.INPUT],
	[q.IFRAME, J.IFRAME],
	[q.KEYGEN, J.KEYGEN],
	[q.LABEL, J.LABEL],
	[q.LI, J.LI],
	[q.LINK, J.LINK],
	[q.LISTING, J.LISTING],
	[q.MAIN, J.MAIN],
	[q.MALIGNMARK, J.MALIGNMARK],
	[q.MARQUEE, J.MARQUEE],
	[q.MATH, J.MATH],
	[q.MENU, J.MENU],
	[q.META, J.META],
	[q.MGLYPH, J.MGLYPH],
	[q.MI, J.MI],
	[q.MO, J.MO],
	[q.MN, J.MN],
	[q.MS, J.MS],
	[q.MTEXT, J.MTEXT],
	[q.NAV, J.NAV],
	[q.NOBR, J.NOBR],
	[q.NOFRAMES, J.NOFRAMES],
	[q.NOEMBED, J.NOEMBED],
	[q.NOSCRIPT, J.NOSCRIPT],
	[q.OBJECT, J.OBJECT],
	[q.OL, J.OL],
	[q.OPTGROUP, J.OPTGROUP],
	[q.OPTION, J.OPTION],
	[q.P, J.P],
	[q.PARAM, J.PARAM],
	[q.PLAINTEXT, J.PLAINTEXT],
	[q.PRE, J.PRE],
	[q.RB, J.RB],
	[q.RP, J.RP],
	[q.RT, J.RT],
	[q.RTC, J.RTC],
	[q.RUBY, J.RUBY],
	[q.S, J.S],
	[q.SCRIPT, J.SCRIPT],
	[q.SEARCH, J.SEARCH],
	[q.SECTION, J.SECTION],
	[q.SELECT, J.SELECT],
	[q.SOURCE, J.SOURCE],
	[q.SMALL, J.SMALL],
	[q.SPAN, J.SPAN],
	[q.STRIKE, J.STRIKE],
	[q.STRONG, J.STRONG],
	[q.STYLE, J.STYLE],
	[q.SUB, J.SUB],
	[q.SUMMARY, J.SUMMARY],
	[q.SUP, J.SUP],
	[q.TABLE, J.TABLE],
	[q.TBODY, J.TBODY],
	[q.TEMPLATE, J.TEMPLATE],
	[q.TEXTAREA, J.TEXTAREA],
	[q.TFOOT, J.TFOOT],
	[q.TD, J.TD],
	[q.TH, J.TH],
	[q.THEAD, J.THEAD],
	[q.TITLE, J.TITLE],
	[q.TR, J.TR],
	[q.TRACK, J.TRACK],
	[q.TT, J.TT],
	[q.U, J.U],
	[q.UL, J.UL],
	[q.SVG, J.SVG],
	[q.VAR, J.VAR],
	[q.WBR, J.WBR],
	[q.XMP, J.XMP]
]);
function No(e) {
	return Mo.get(e) ?? J.UNKNOWN;
}
var Y = J, Po = {
	[K.HTML]: /* @__PURE__ */ new Set([
		Y.ADDRESS,
		Y.APPLET,
		Y.AREA,
		Y.ARTICLE,
		Y.ASIDE,
		Y.BASE,
		Y.BASEFONT,
		Y.BGSOUND,
		Y.BLOCKQUOTE,
		Y.BODY,
		Y.BR,
		Y.BUTTON,
		Y.CAPTION,
		Y.CENTER,
		Y.COL,
		Y.COLGROUP,
		Y.DD,
		Y.DETAILS,
		Y.DIR,
		Y.DIV,
		Y.DL,
		Y.DT,
		Y.EMBED,
		Y.FIELDSET,
		Y.FIGCAPTION,
		Y.FIGURE,
		Y.FOOTER,
		Y.FORM,
		Y.FRAME,
		Y.FRAMESET,
		Y.H1,
		Y.H2,
		Y.H3,
		Y.H4,
		Y.H5,
		Y.H6,
		Y.HEAD,
		Y.HEADER,
		Y.HGROUP,
		Y.HR,
		Y.HTML,
		Y.IFRAME,
		Y.IMG,
		Y.INPUT,
		Y.LI,
		Y.LINK,
		Y.LISTING,
		Y.MAIN,
		Y.MARQUEE,
		Y.MENU,
		Y.META,
		Y.NAV,
		Y.NOEMBED,
		Y.NOFRAMES,
		Y.NOSCRIPT,
		Y.OBJECT,
		Y.OL,
		Y.P,
		Y.PARAM,
		Y.PLAINTEXT,
		Y.PRE,
		Y.SCRIPT,
		Y.SECTION,
		Y.SELECT,
		Y.SOURCE,
		Y.STYLE,
		Y.SUMMARY,
		Y.TABLE,
		Y.TBODY,
		Y.TD,
		Y.TEMPLATE,
		Y.TEXTAREA,
		Y.TFOOT,
		Y.TH,
		Y.THEAD,
		Y.TITLE,
		Y.TR,
		Y.TRACK,
		Y.UL,
		Y.WBR,
		Y.XMP
	]),
	[K.MATHML]: /* @__PURE__ */ new Set([
		Y.MI,
		Y.MO,
		Y.MN,
		Y.MS,
		Y.MTEXT,
		Y.ANNOTATION_XML
	]),
	[K.SVG]: /* @__PURE__ */ new Set([
		Y.TITLE,
		Y.FOREIGN_OBJECT,
		Y.DESC
	]),
	[K.XLINK]: /* @__PURE__ */ new Set(),
	[K.XML]: /* @__PURE__ */ new Set(),
	[K.XMLNS]: /* @__PURE__ */ new Set()
}, Fo = /* @__PURE__ */ new Set([
	Y.H1,
	Y.H2,
	Y.H3,
	Y.H4,
	Y.H5,
	Y.H6
]), Io = /* @__PURE__ */ new Set([
	q.STYLE,
	q.SCRIPT,
	q.XMP,
	q.IFRAME,
	q.NOEMBED,
	q.NOFRAMES,
	q.PLAINTEXT
]);
function Lo(e, t) {
	return Io.has(e) || t && e === q.NOSCRIPT;
}
//#endregion
//#region node_modules/parse5/dist/tokenizer/index.js
var X;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(X ||= {});
var Ro = {
	DATA: X.DATA,
	RCDATA: X.RCDATA,
	RAWTEXT: X.RAWTEXT,
	SCRIPT_DATA: X.SCRIPT_DATA,
	PLAINTEXT: X.PLAINTEXT,
	CDATA_SECTION: X.CDATA_SECTION
};
function zo(e) {
	return e >= H.DIGIT_0 && e <= H.DIGIT_9;
}
function Bo(e) {
	return e >= H.LATIN_CAPITAL_A && e <= H.LATIN_CAPITAL_Z;
}
function Vo(e) {
	return e >= H.LATIN_SMALL_A && e <= H.LATIN_SMALL_Z;
}
function Ho(e) {
	return Vo(e) || Bo(e);
}
function Uo(e) {
	return Ho(e) || zo(e);
}
function Wo(e) {
	return e + 32;
}
function Go(e) {
	return e === H.SPACE || e === H.LINE_FEED || e === H.TABULATION || e === H.FORM_FEED;
}
function Ko(e) {
	return Go(e) || e === H.SOLIDUS || e === H.GREATER_THAN_SIGN;
}
function qo(e) {
	return e === H.NULL ? U.nullCharacterReference : e > 1114111 ? U.characterReferenceOutsideUnicodeRange : ro(e) ? U.surrogateCharacterReference : so(e) ? U.noncharacterCharacterReference : oo(e) || e === H.CARRIAGE_RETURN ? U.controlCharacterReference : null;
}
var Jo = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = X.DATA, this.returnState = X.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new lo(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Oo(vo, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(U.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(U.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = qo(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: W.START_TAG,
			tagName: "",
			tagID: J.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: W.END_TAG,
			tagName: "",
			tagID: J.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: W.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: W.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (uo(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(U.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = No(e.tagName), e.type === W.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(U.endTagWithAttributes), e.selfClosing && this._err(U.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case W.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case W.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case W.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: W.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) {
			if (this.currentCharacterToken.type === e) {
				this.currentCharacterToken.chars += t;
				return;
			}
			this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		}
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = Go(e) ? W.WHITESPACE_CHARACTER : e === H.NULL ? W.NULL_CHARACTER : W.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, e < 65536 ? String.fromCharCode(e) : String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(W.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = X.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Do.Attribute : Do.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === X.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === X.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === X.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case X.DATA:
				this._stateData(e);
				break;
			case X.RCDATA:
				this._stateRcdata(e);
				break;
			case X.RAWTEXT:
				this._stateRawtext(e);
				break;
			case X.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case X.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case X.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case X.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case X.TAG_NAME:
				this._stateTagName(e);
				break;
			case X.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case X.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case X.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case X.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case X.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case X.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case X.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case X.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case X.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case X.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case X.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case X.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case X.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case X.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case X.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case X.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case X.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case X.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case X.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case X.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case X.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case X.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case X.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case X.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case X.COMMENT:
				this._stateComment(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case X.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case X.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case X.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case X.DOCTYPE:
				this._stateDoctype(e);
				break;
			case X.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case X.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case X.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case X.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case X.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case X.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case X.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case X.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case X.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case X.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case X.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case X.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case X.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case X.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case H.LESS_THAN_SIGN:
				this.state = X.TAG_OPEN;
				break;
			case H.AMPERSAND:
				this._startCharacterReference();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case H.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case H.AMPERSAND:
				this._startCharacterReference();
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.RCDATA_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case H.LESS_THAN_SIGN:
				this.state = X.RAWTEXT_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (Ho(e)) this._createStartTagToken(), this.state = X.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case H.EXCLAMATION_MARK:
				this.state = X.MARKUP_DECLARATION_OPEN;
				break;
			case H.SOLIDUS:
				this.state = X.END_TAG_OPEN;
				break;
			case H.QUESTION_MARK:
				this._err(U.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case H.EOF:
				this._err(U.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(U.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = X.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (Ho(e)) this._createEndTagToken(), this.state = X.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case H.GREATER_THAN_SIGN:
				this._err(U.missingEndTagName), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(U.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case H.SOLIDUS:
				this.state = X.SELF_CLOSING_START_TAG;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.tagName += "�";
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === H.SOLIDUS ? this.state = X.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		Ho(e) ? (this.state = X.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = X.BEFORE_ATTRIBUTE_NAME, !1;
			case H.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = X.SELF_CLOSING_START_TAG, !1;
			case H.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = X.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === H.SOLIDUS ? this.state = X.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		Ho(e) ? (this.state = X.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case H.SOLIDUS:
				this.state = X.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case H.EXCLAMATION_MARK:
				this.state = X.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = X.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		Ho(e) ? (this.state = X.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === H.HYPHEN_MINUS ? (this.state = X.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === H.HYPHEN_MINUS ? (this.state = X.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.SCRIPT_DATA, this._emitChars(">");
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === H.SOLIDUS ? this.state = X.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Ho(e) ? (this._emitChars("<"), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		Ho(e) ? (this.state = X.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(no.SCRIPT, !1) && Ko(this.preprocessor.peek(no.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < no.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case H.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.SCRIPT_DATA, this._emitChars(">");
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case H.EOF:
				this._err(U.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === H.SOLIDUS ? (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(no.SCRIPT, !1) && Ko(this.preprocessor.peek(no.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < no.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = X.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.SOLIDUS:
			case H.GREATER_THAN_SIGN:
			case H.EOF:
				this.state = X.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case H.EQUALS_SIGN:
				this._err(U.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = X.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = X.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
			case H.SOLIDUS:
			case H.GREATER_THAN_SIGN:
			case H.EOF:
				this._leaveAttrName(), this.state = X.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case H.EQUALS_SIGN:
				this._leaveAttrName(), this.state = X.BEFORE_ATTRIBUTE_VALUE;
				break;
			case H.QUOTATION_MARK:
			case H.APOSTROPHE:
			case H.LESS_THAN_SIGN:
				this._err(U.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.SOLIDUS:
				this.state = X.SELF_CLOSING_START_TAG;
				break;
			case H.EQUALS_SIGN:
				this.state = X.BEFORE_ATTRIBUTE_VALUE;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = X.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.QUOTATION_MARK:
				this.state = X.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				this.state = X.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.missingAttributeValue), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = X.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case H.QUOTATION_MARK:
				this.state = X.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case H.AMPERSAND:
				this._startCharacterReference();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case H.APOSTROPHE:
				this.state = X.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case H.AMPERSAND:
				this._startCharacterReference();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this._leaveAttrValue(), this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case H.AMPERSAND:
				this._startCharacterReference();
				break;
			case H.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case H.QUOTATION_MARK:
			case H.APOSTROPHE:
			case H.LESS_THAN_SIGN:
			case H.EQUALS_SIGN:
			case H.GRAVE_ACCENT:
				this._err(U.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this._leaveAttrValue(), this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case H.SOLIDUS:
				this._leaveAttrValue(), this.state = X.SELF_CLOSING_START_TAG;
				break;
			case H.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this._err(U.missingWhitespaceBetweenAttributes), this.state = X.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case H.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = X.DATA, this.emitCurrentTagToken();
				break;
			}
			case H.EOF:
				this._err(U.eofInTag), this._emitEOFToken();
				break;
			default: this._err(U.unexpectedSolidusInTag), this.state = X.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case H.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(no.DASH_DASH, !0) ? (this._createCommentToken(no.DASH_DASH.length + 1), this.state = X.COMMENT_START) : this._consumeSequenceIfMatch(no.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(no.DOCTYPE.length + 1), this.state = X.DOCTYPE) : this._consumeSequenceIfMatch(no.CDATA_START, !0) ? this.inForeignNode ? this.state = X.CDATA_SECTION : (this._err(U.cdataInHtmlContent), this._createCommentToken(no.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = X.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(U.incorrectlyOpenedComment), this._createCommentToken(2), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.COMMENT_START_DASH;
				break;
			case H.GREATER_THAN_SIGN: {
				this._err(U.abruptClosingOfEmptyComment), this.state = X.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.COMMENT_END;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.abruptClosingOfEmptyComment), this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case H.EOF:
				this._err(U.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.COMMENT_END_DASH;
				break;
			case H.LESS_THAN_SIGN:
				t.data += "<", this.state = X.COMMENT_LESS_THAN_SIGN;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.data += "�";
				break;
			case H.EOF:
				this._err(U.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case H.EXCLAMATION_MARK:
				t.data += "!", this.state = X.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case H.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === H.HYPHEN_MINUS ? this.state = X.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = X.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === H.HYPHEN_MINUS ? this.state = X.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = X.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== H.GREATER_THAN_SIGN && e !== H.EOF && this._err(U.nestedComment), this.state = X.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case H.HYPHEN_MINUS:
				this.state = X.COMMENT_END;
				break;
			case H.EOF:
				this._err(U.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case H.EXCLAMATION_MARK:
				this.state = X.COMMENT_END_BANG;
				break;
			case H.HYPHEN_MINUS:
				t.data += "-";
				break;
			case H.EOF:
				this._err(U.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case H.HYPHEN_MINUS:
				t.data += "--!", this.state = X.COMMENT_END_DASH;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.incorrectlyClosedComment), this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case H.EOF:
				this._err(U.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_NAME;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case H.EOF: {
				this._err(U.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(U.missingWhitespaceBeforeDoctypeName), this.state = X.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (Bo(e)) this._createDoctypeToken(String.fromCharCode(Wo(e))), this.state = X.DOCTYPE_NAME;
		else switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = X.DOCTYPE_NAME;
				break;
			case H.GREATER_THAN_SIGN: {
				this._err(U.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = X.DATA;
				break;
			}
			case H.EOF: {
				this._err(U.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = X.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.AFTER_DOCTYPE_NAME;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.name += "�";
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(no.PUBLIC, !1) ? this.state = X.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(no.SYSTEM, !1) ? this.state = X.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(U.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case H.QUOTATION_MARK:
				this._err(U.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				this._err(U.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.QUOTATION_MARK:
				t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case H.QUOTATION_MARK:
				this.state = X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.publicId += "�";
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case H.APOSTROPHE:
				this.state = X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.publicId += "�";
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.QUOTATION_MARK:
				this._err(U.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				this._err(U.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.QUOTATION_MARK:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case H.QUOTATION_MARK:
				this._err(U.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				this._err(U.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.QUOTATION_MARK:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case H.APOSTROPHE:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case H.QUOTATION_MARK:
				this.state = X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.systemId += "�";
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case H.APOSTROPHE:
				this.state = X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter), t.systemId += "�";
				break;
			case H.GREATER_THAN_SIGN:
				this._err(U.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case H.SPACE:
			case H.LINE_FEED:
			case H.TABULATION:
			case H.FORM_FEED: break;
			case H.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.EOF:
				this._err(U.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(U.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case H.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case H.NULL:
				this._err(U.unexpectedNullCharacter);
				break;
			case H.EOF: this.emitCurrentDoctype(t), this._emitEOFToken();
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case H.RIGHT_SQUARE_BRACKET:
				this.state = X.CDATA_SECTION_BRACKET;
				break;
			case H.EOF:
				this._err(U.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === H.RIGHT_SQUARE_BRACKET ? this.state = X.CDATA_SECTION_END : (this._emitChars("]"), this.state = X.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case H.GREATER_THAN_SIGN:
				this.state = X.DATA;
				break;
			case H.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = X.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) {
			if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
			else {
				this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
				return;
			}
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(H.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Uo(this.preprocessor.peek(1)) ? X.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		Uo(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === H.SEMICOLON && this._err(U.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, Yo = /* @__PURE__ */ new Set([
	J.DD,
	J.DT,
	J.LI,
	J.OPTGROUP,
	J.OPTION,
	J.P,
	J.RB,
	J.RP,
	J.RT,
	J.RTC
]), Xo = /* @__PURE__ */ new Set([
	...Yo,
	J.CAPTION,
	J.COLGROUP,
	J.TBODY,
	J.TD,
	J.TFOOT,
	J.TH,
	J.THEAD,
	J.TR
]), Zo = /* @__PURE__ */ new Set([
	J.APPLET,
	J.CAPTION,
	J.HTML,
	J.MARQUEE,
	J.OBJECT,
	J.TABLE,
	J.TD,
	J.TEMPLATE,
	J.TH
]), Qo = /* @__PURE__ */ new Set([
	...Zo,
	J.OL,
	J.UL
]), $o = /* @__PURE__ */ new Set([...Zo, J.BUTTON]), es = /* @__PURE__ */ new Set([
	J.ANNOTATION_XML,
	J.MI,
	J.MN,
	J.MO,
	J.MS,
	J.MTEXT
]), ts = /* @__PURE__ */ new Set([
	J.DESC,
	J.FOREIGN_OBJECT,
	J.TITLE
]), ns = /* @__PURE__ */ new Set([
	J.TR,
	J.TEMPLATE,
	J.HTML
]), rs = /* @__PURE__ */ new Set([
	J.TBODY,
	J.TFOOT,
	J.THEAD,
	J.TEMPLATE,
	J.HTML
]), is = /* @__PURE__ */ new Set([
	J.TABLE,
	J.TEMPLATE,
	J.HTML
]), as = /* @__PURE__ */ new Set([J.TD, J.TH]), os = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = J.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === J.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === K.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== K.HTML);
		this.shortenToLength(Math.max(t, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(Math.max(t, 0));
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(Math.max(n, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(Fo, K.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(as, K.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(is, K.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(rs, K.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(ns, K.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === J.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === J.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case K.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case K.SVG:
					if (ts.has(r)) return !1;
					break;
				case K.MATHML: if (es.has(r)) return !1;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, Zo);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, Qo);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, $o);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case K.HTML:
					if (Fo.has(t)) return !0;
					if (Zo.has(t)) return !1;
					break;
				case K.SVG:
					if (ts.has(t)) return !1;
					break;
				case K.MATHML: if (es.has(t)) return !1;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === K.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case J.TABLE:
			case J.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === K.HTML) switch (this.tagIDs[e]) {
			case J.TBODY:
			case J.THEAD:
			case J.TFOOT: return !0;
			case J.TABLE:
			case J.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === K.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case J.OPTION:
			case J.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && Yo.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && Xo.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && Xo.has(this.currentTagId);) this.pop();
	}
}, ss = 3, cs;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(cs ||= {});
var ls = { type: cs.Marker }, us = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === cs.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < ss) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < ss) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= ss && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(ls);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: cs.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: cs.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(ls);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === cs.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === cs.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === cs.Element && t.element === e);
	}
}, ds = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: jo.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			ds.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (ds.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		ds.appendChild(e, ds.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && ds.isTextNode(r) ? r.value += t : ds.insertBefore(e, ds.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
}, fs = "html", ps = "about:legacy-compat", ms = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", hs = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), gs = [
	...hs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], _s = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), vs = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], ys = [
	...vs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function bs(e, t) {
	return t.some((t) => e.startsWith(t));
}
function xs(e) {
	return e.name === fs && e.publicId === null && (e.systemId === null || e.systemId === ps);
}
function Ss(e) {
	if (e.name !== fs) return jo.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === ms) return jo.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), _s.has(n)) return jo.QUIRKS;
		let e = t === null ? gs : hs;
		if (bs(n, e)) return jo.QUIRKS;
		if (e = t === null ? vs : ys, bs(n, e)) return jo.LIMITED_QUIRKS;
	}
	return jo.NO_QUIRKS;
}
//#endregion
//#region node_modules/parse5/dist/common/foreign-content.js
var Cs = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, ws = "definitionurl", Ts = "definitionURL", Es = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), Ds = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: K.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: K.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: K.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: K.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: K.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: K.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: K.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: K.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: K.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: K.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: K.XMLNS
	}]
]), Os = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), ks = /* @__PURE__ */ new Set([
	J.B,
	J.BIG,
	J.BLOCKQUOTE,
	J.BODY,
	J.BR,
	J.CENTER,
	J.CODE,
	J.DD,
	J.DIV,
	J.DL,
	J.DT,
	J.EM,
	J.EMBED,
	J.H1,
	J.H2,
	J.H3,
	J.H4,
	J.H5,
	J.H6,
	J.HEAD,
	J.HR,
	J.I,
	J.IMG,
	J.LI,
	J.LISTING,
	J.MENU,
	J.META,
	J.NOBR,
	J.OL,
	J.P,
	J.PRE,
	J.RUBY,
	J.S,
	J.SMALL,
	J.SPAN,
	J.STRONG,
	J.STRIKE,
	J.SUB,
	J.SUP,
	J.TABLE,
	J.TT,
	J.U,
	J.UL,
	J.VAR
]);
function As(e) {
	let t = e.tagID;
	return t === J.FONT && e.attrs.some(({ name: e }) => e === Ao.COLOR || e === Ao.SIZE || e === Ao.FACE) || ks.has(t);
}
function js(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === ws) {
		e.attrs[t].name = Ts;
		break;
	}
}
function Ms(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Es.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Ns(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Ds.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function Ps(e) {
	let t = Os.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = No(e.tagName));
}
function Fs(e, t) {
	return t === K.MATHML && (e === J.MI || e === J.MO || e === J.MN || e === J.MS || e === J.MTEXT);
}
function Is(e, t, n) {
	if (t === K.MATHML && e === J.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === Ao.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === Cs.TEXT_HTML || t === Cs.APPLICATION_XML;
		}
	}
	return t === K.SVG && (e === J.FOREIGN_OBJECT || e === J.DESC || e === J.TITLE);
}
function Ls(e, t, n, r) {
	return (!r || r === K.HTML) && Is(e, t, n) || (!r || r === K.MATHML) && Fs(e, t);
}
//#endregion
//#region node_modules/parse5/dist/parser/index.js
var Rs = "hidden", zs = 8, Bs = 3, Z;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(Z ||= {});
var Vs = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, Hs = /* @__PURE__ */ new Set([
	J.TABLE,
	J.TBODY,
	J.TFOOT,
	J.THEAD,
	J.TR
]), Us = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: ds,
	onParseError: null
}, Ws = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = Z.INITIAL, this.originalInsertionMode = Z.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...Us,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Jo(this.options, this), this.activeFormattingElements = new us(this.treeAdapter), this.fragmentContextID = n ? No(this.treeAdapter.getTagName(n)) : J.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new os(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...Us,
			...t
		};
		e ??= n.treeAdapter.createElement(q.TEMPLATE, K.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", K.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === J.TEMPLATE && i.tmplInsertionModeStack.unshift(Z.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? Vs, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === K.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, K.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = Z.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = Z.TEXT, this.originalInsertionMode = Z.IN_BODY, this.tokenizer.state = Ro.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === q.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== K.HTML)) switch (this.fragmentContextID) {
			case J.TITLE:
			case J.TEXTAREA:
				this.tokenizer.state = Ro.RCDATA;
				break;
			case J.STYLE:
			case J.XMP:
			case J.IFRAME:
			case J.NOEMBED:
			case J.NOFRAMES:
			case J.NOSCRIPT:
				this.tokenizer.state = Ro.RAWTEXT;
				break;
			case J.SCRIPT:
				this.tokenizer.state = Ro.SCRIPT_DATA;
				break;
			case J.PLAINTEXT: this.tokenizer.state = Ro.PLAINTEXT;
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t ?? this.document, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, K.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, K.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(q.HTML, K.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, J.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === W.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === J.SVG && this.treeAdapter.getTagName(t) === q.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === K.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === J.MGLYPH || e.tagID === J.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, K.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case W.CHARACTER:
				this.onCharacter(e);
				break;
			case W.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case W.COMMENT:
				this.onComment(e);
				break;
			case W.DOCTYPE:
				this.onDoctype(e);
				break;
			case W.START_TAG:
				this._processStartTag(e);
				break;
			case W.END_TAG:
				this.onEndTag(e);
				break;
			case W.EOF:
				this.onEof(e);
				break;
			case W.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(e);
		}
	}
	_isIntegrationPoint(e, t, n) {
		return Ls(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === cs.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = Z.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(J.P), this.openElements.popUntilTagNamePopped(J.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case J.TR:
				this.insertionMode = Z.IN_ROW;
				return;
			case J.TBODY:
			case J.THEAD:
			case J.TFOOT:
				this.insertionMode = Z.IN_TABLE_BODY;
				return;
			case J.CAPTION:
				this.insertionMode = Z.IN_CAPTION;
				return;
			case J.COLGROUP:
				this.insertionMode = Z.IN_COLUMN_GROUP;
				return;
			case J.TABLE:
				this.insertionMode = Z.IN_TABLE;
				return;
			case J.BODY:
				this.insertionMode = Z.IN_BODY;
				return;
			case J.FRAMESET:
				this.insertionMode = Z.IN_FRAMESET;
				return;
			case J.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case J.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case J.HTML:
				this.insertionMode = this.headElement ? Z.AFTER_HEAD : Z.BEFORE_HEAD;
				return;
			case J.TD:
			case J.TH:
				if (e > 0) {
					this.insertionMode = Z.IN_CELL;
					return;
				}
				break;
			case J.HEAD: if (e > 0) {
				this.insertionMode = Z.IN_HEAD;
				return;
			}
		}
		this.insertionMode = Z.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === J.TEMPLATE) break;
			if (e === J.TABLE) {
				this.insertionMode = Z.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = Z.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return Hs.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case J.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === K.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case J.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return Po[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			su(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Z.INITIAL:
				rc(this, e);
				break;
			case Z.BEFORE_HTML:
				oc(this, e);
				break;
			case Z.BEFORE_HEAD:
				lc(this, e);
				break;
			case Z.IN_HEAD:
				pc(this, e);
				break;
			case Z.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Z.AFTER_HEAD:
				yc(this, e);
				break;
			case Z.IN_BODY:
			case Z.IN_CAPTION:
			case Z.IN_CELL:
			case Z.IN_TEMPLATE:
				Sc(this, e);
				break;
			case Z.TEXT:
			case Z.IN_SELECT:
			case Z.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case Z.IN_TABLE:
			case Z.IN_TABLE_BODY:
			case Z.IN_ROW:
				gl(this, e);
				break;
			case Z.IN_TABLE_TEXT:
				kl(this, e);
				break;
			case Z.IN_COLUMN_GROUP:
				Il(this, e);
				break;
			case Z.AFTER_BODY:
				Ql(this, e);
				break;
			case Z.AFTER_AFTER_BODY: iu(this, e);
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			ou(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Z.INITIAL:
				rc(this, e);
				break;
			case Z.BEFORE_HTML:
				oc(this, e);
				break;
			case Z.BEFORE_HEAD:
				lc(this, e);
				break;
			case Z.IN_HEAD:
				pc(this, e);
				break;
			case Z.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Z.AFTER_HEAD:
				yc(this, e);
				break;
			case Z.TEXT:
				this._insertCharacters(e);
				break;
			case Z.IN_TABLE:
			case Z.IN_TABLE_BODY:
			case Z.IN_ROW:
				gl(this, e);
				break;
			case Z.IN_COLUMN_GROUP:
				Il(this, e);
				break;
			case Z.AFTER_BODY:
				Ql(this, e);
				break;
			case Z.AFTER_AFTER_BODY: iu(this, e);
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			Qs(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Z.INITIAL:
			case Z.BEFORE_HTML:
			case Z.BEFORE_HEAD:
			case Z.IN_HEAD:
			case Z.IN_HEAD_NO_SCRIPT:
			case Z.AFTER_HEAD:
			case Z.IN_BODY:
			case Z.IN_TABLE:
			case Z.IN_CAPTION:
			case Z.IN_COLUMN_GROUP:
			case Z.IN_TABLE_BODY:
			case Z.IN_ROW:
			case Z.IN_CELL:
			case Z.IN_SELECT:
			case Z.IN_SELECT_IN_TABLE:
			case Z.IN_TEMPLATE:
			case Z.IN_FRAMESET:
			case Z.AFTER_FRAMESET:
				Qs(this, e);
				break;
			case Z.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Z.AFTER_BODY:
				$s(this, e);
				break;
			case Z.AFTER_AFTER_BODY:
			case Z.AFTER_AFTER_FRAMESET: ec(this, e);
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case Z.INITIAL:
				nc(this, e);
				break;
			case Z.BEFORE_HEAD:
			case Z.IN_HEAD:
			case Z.IN_HEAD_NO_SCRIPT:
			case Z.AFTER_HEAD:
				this._err(e, U.misplacedDoctype);
				break;
			case Z.IN_TABLE_TEXT: Al(this, e);
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, U.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? lu(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Z.INITIAL:
				rc(this, e);
				break;
			case Z.BEFORE_HTML:
				ic(this, e);
				break;
			case Z.BEFORE_HEAD:
				sc(this, e);
				break;
			case Z.IN_HEAD:
				uc(this, e);
				break;
			case Z.IN_HEAD_NO_SCRIPT:
				mc(this, e);
				break;
			case Z.AFTER_HEAD:
				_c(this, e);
				break;
			case Z.IN_BODY:
				Q(this, e);
				break;
			case Z.IN_TABLE:
				Tl(this, e);
				break;
			case Z.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Z.IN_CAPTION:
				Ml(this, e);
				break;
			case Z.IN_COLUMN_GROUP:
				Pl(this, e);
				break;
			case Z.IN_TABLE_BODY:
				Ll(this, e);
				break;
			case Z.IN_ROW:
				zl(this, e);
				break;
			case Z.IN_CELL:
				Vl(this, e);
				break;
			case Z.IN_SELECT:
				Ul(this, e);
				break;
			case Z.IN_SELECT_IN_TABLE:
				Gl(this, e);
				break;
			case Z.IN_TEMPLATE:
				ql(this, e);
				break;
			case Z.AFTER_BODY:
				Xl(this, e);
				break;
			case Z.IN_FRAMESET:
				$l(this, e);
				break;
			case Z.AFTER_FRAMESET:
				tu(this, e);
				break;
			case Z.AFTER_AFTER_BODY:
				ru(this, e);
				break;
			case Z.AFTER_AFTER_FRAMESET: au(this, e);
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? uu(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Z.INITIAL:
				rc(this, e);
				break;
			case Z.BEFORE_HTML:
				ac(this, e);
				break;
			case Z.BEFORE_HEAD:
				cc(this, e);
				break;
			case Z.IN_HEAD:
				dc(this, e);
				break;
			case Z.IN_HEAD_NO_SCRIPT:
				hc(this, e);
				break;
			case Z.AFTER_HEAD:
				vc(this, e);
				break;
			case Z.IN_BODY:
				fl(this, e);
				break;
			case Z.TEXT:
				ml(this, e);
				break;
			case Z.IN_TABLE:
				El(this, e);
				break;
			case Z.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Z.IN_CAPTION:
				Nl(this, e);
				break;
			case Z.IN_COLUMN_GROUP:
				Fl(this, e);
				break;
			case Z.IN_TABLE_BODY:
				Rl(this, e);
				break;
			case Z.IN_ROW:
				Bl(this, e);
				break;
			case Z.IN_CELL:
				Hl(this, e);
				break;
			case Z.IN_SELECT:
				Wl(this, e);
				break;
			case Z.IN_SELECT_IN_TABLE:
				Kl(this, e);
				break;
			case Z.IN_TEMPLATE:
				Jl(this, e);
				break;
			case Z.AFTER_BODY:
				Zl(this, e);
				break;
			case Z.IN_FRAMESET:
				eu(this, e);
				break;
			case Z.AFTER_FRAMESET:
				nu(this, e);
				break;
			case Z.AFTER_AFTER_BODY: iu(this, e);
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case Z.INITIAL:
				rc(this, e);
				break;
			case Z.BEFORE_HTML:
				oc(this, e);
				break;
			case Z.BEFORE_HEAD:
				lc(this, e);
				break;
			case Z.IN_HEAD:
				pc(this, e);
				break;
			case Z.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Z.AFTER_HEAD:
				yc(this, e);
				break;
			case Z.IN_BODY:
			case Z.IN_TABLE:
			case Z.IN_CAPTION:
			case Z.IN_COLUMN_GROUP:
			case Z.IN_TABLE_BODY:
			case Z.IN_ROW:
			case Z.IN_CELL:
			case Z.IN_SELECT:
			case Z.IN_SELECT_IN_TABLE:
				pl(this, e);
				break;
			case Z.TEXT:
				hl(this, e);
				break;
			case Z.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Z.IN_TEMPLATE:
				Yl(this, e);
				break;
			case Z.AFTER_BODY:
			case Z.IN_FRAMESET:
			case Z.AFTER_FRAMESET:
			case Z.AFTER_AFTER_BODY:
			case Z.AFTER_AFTER_FRAMESET: tc(this, e);
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === H.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case Z.IN_HEAD:
			case Z.IN_HEAD_NO_SCRIPT:
			case Z.AFTER_HEAD:
			case Z.TEXT:
			case Z.IN_COLUMN_GROUP:
			case Z.IN_SELECT:
			case Z.IN_SELECT_IN_TABLE:
			case Z.IN_FRAMESET:
			case Z.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case Z.IN_BODY:
			case Z.IN_CAPTION:
			case Z.IN_CELL:
			case Z.IN_TEMPLATE:
			case Z.AFTER_BODY:
			case Z.AFTER_AFTER_BODY:
			case Z.AFTER_AFTER_FRAMESET:
				xc(this, e);
				break;
			case Z.IN_TABLE:
			case Z.IN_TABLE_BODY:
			case Z.IN_ROW:
				gl(this, e);
				break;
			case Z.IN_TABLE_TEXT: Ol(this, e);
		}
	}
};
function Gs(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : dl(e, t), n;
}
function Ks(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function qs(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= Bs;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = Js(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function Js(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function Ys(e, t, n) {
	let r = No(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === J.TEMPLATE && i === K.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function Xs(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function Zs(e, t) {
	for (let n = 0; n < zs; n++) {
		let n = Gs(e, t);
		if (!n) break;
		let r = Ks(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = qs(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && Ys(e, a, i), Xs(e, r, n);
	}
}
function Qs(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function $s(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function ec(e, t) {
	e._appendCommentNode(t, e.document);
}
function tc(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function nc(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? jo.QUIRKS : Ss(t);
	xs(t) || e._err(t, U.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = Z.BEFORE_HTML;
}
function rc(e, t) {
	e._err(t, U.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, jo.QUIRKS), e.insertionMode = Z.BEFORE_HTML, e._processToken(t);
}
function ic(e, t) {
	t.tagID === J.HTML ? (e._insertElement(t, K.HTML), e.insertionMode = Z.BEFORE_HEAD) : oc(e, t);
}
function ac(e, t) {
	let n = t.tagID;
	(n === J.HTML || n === J.HEAD || n === J.BODY || n === J.BR) && oc(e, t);
}
function oc(e, t) {
	e._insertFakeRootElement(), e.insertionMode = Z.BEFORE_HEAD, e._processToken(t);
}
function sc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.HEAD:
			e._insertElement(t, K.HTML), e.headElement = e.openElements.current, e.insertionMode = Z.IN_HEAD;
			break;
		default: lc(e, t);
	}
}
function cc(e, t) {
	let n = t.tagID;
	n === J.HEAD || n === J.BODY || n === J.HTML || n === J.BR ? lc(e, t) : e._err(t, U.endTagWithoutMatchingOpenElement);
}
function lc(e, t) {
	e._insertFakeElement(q.HEAD, J.HEAD), e.headElement = e.openElements.current, e.insertionMode = Z.IN_HEAD, e._processToken(t);
}
function uc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.TITLE:
			e._switchToTextParsing(t, Ro.RCDATA);
			break;
		case J.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Ro.RAWTEXT) : (e._insertElement(t, K.HTML), e.insertionMode = Z.IN_HEAD_NO_SCRIPT);
			break;
		case J.NOFRAMES:
		case J.STYLE:
			e._switchToTextParsing(t, Ro.RAWTEXT);
			break;
		case J.SCRIPT:
			e._switchToTextParsing(t, Ro.SCRIPT_DATA);
			break;
		case J.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = Z.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(Z.IN_TEMPLATE);
			break;
		case J.HEAD:
			e._err(t, U.misplacedStartTagForHeadElement);
			break;
		default: pc(e, t);
	}
}
function dc(e, t) {
	switch (t.tagID) {
		case J.HEAD:
			e.openElements.pop(), e.insertionMode = Z.AFTER_HEAD;
			break;
		case J.BODY:
		case J.BR:
		case J.HTML:
			pc(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: e._err(t, U.endTagWithoutMatchingOpenElement);
	}
}
function fc(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== J.TEMPLATE && e._err(t, U.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(J.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, U.endTagWithoutMatchingOpenElement);
}
function pc(e, t) {
	e.openElements.pop(), e.insertionMode = Z.AFTER_HEAD, e._processToken(t);
}
function mc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.BASEFONT:
		case J.BGSOUND:
		case J.HEAD:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.STYLE:
			uc(e, t);
			break;
		case J.NOSCRIPT:
			e._err(t, U.nestedNoscriptInHead);
			break;
		default: gc(e, t);
	}
}
function hc(e, t) {
	switch (t.tagID) {
		case J.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = Z.IN_HEAD;
			break;
		case J.BR:
			gc(e, t);
			break;
		default: e._err(t, U.endTagWithoutMatchingOpenElement);
	}
}
function gc(e, t) {
	let n = t.type === W.EOF ? U.openElementsLeftAfterEof : U.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = Z.IN_HEAD, e._processToken(t);
}
function _c(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.BODY:
			e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = Z.IN_BODY;
			break;
		case J.FRAMESET:
			e._insertElement(t, K.HTML), e.insertionMode = Z.IN_FRAMESET;
			break;
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.SCRIPT:
		case J.STYLE:
		case J.TEMPLATE:
		case J.TITLE:
			e._err(t, U.abandonedHeadElementChild), e.openElements.push(e.headElement, J.HEAD), uc(e, t), e.openElements.remove(e.headElement);
			break;
		case J.HEAD:
			e._err(t, U.misplacedStartTagForHeadElement);
			break;
		default: yc(e, t);
	}
}
function vc(e, t) {
	switch (t.tagID) {
		case J.BODY:
		case J.HTML:
		case J.BR:
			yc(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: e._err(t, U.endTagWithoutMatchingOpenElement);
	}
}
function yc(e, t) {
	e._insertFakeElement(q.BODY, J.BODY), e.insertionMode = Z.IN_BODY, bc(e, t);
}
function bc(e, t) {
	switch (t.type) {
		case W.CHARACTER:
			Sc(e, t);
			break;
		case W.WHITESPACE_CHARACTER:
			xc(e, t);
			break;
		case W.COMMENT:
			Qs(e, t);
			break;
		case W.START_TAG:
			Q(e, t);
			break;
		case W.END_TAG:
			fl(e, t);
			break;
		case W.EOF: pl(e, t);
	}
}
function xc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Sc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Cc(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function wc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Tc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_FRAMESET);
}
function Ec(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML);
}
function Dc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Fo.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, K.HTML);
}
function Oc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function kc(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), n || (e.formElement = e.openElements.current));
}
function Ac(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === J.LI && r === J.LI || (n === J.DD || n === J.DT) && (r === J.DD || r === J.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== J.ADDRESS && r !== J.DIV && r !== J.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML);
}
function jc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.tokenizer.state = Ro.PLAINTEXT;
}
function Mc(e, t) {
	e.openElements.hasInScope(J.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.framesetOk = !1;
}
function Nc(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(q.A);
	n && (Zs(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Pc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Fc(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(J.NOBR) && (Zs(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Ic(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Lc(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== jo.QUIRKS && e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = Z.IN_TABLE;
}
function Rc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, K.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function zc(e) {
	let t = uo(e, Ao.TYPE);
	return t != null && t.toLowerCase() === Rs;
}
function Bc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, K.HTML), zc(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Vc(e, t) {
	e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
}
function Hc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._appendElement(t, K.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Uc(e, t) {
	t.tagName = q.IMG, t.tagID = J.IMG, Rc(e, t);
}
function Wc(e, t) {
	e._insertElement(t, K.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Ro.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = Z.TEXT;
}
function Gc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Ro.RAWTEXT);
}
function Kc(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Ro.RAWTEXT);
}
function qc(e, t) {
	e._switchToTextParsing(t, Ro.RAWTEXT);
}
function Jc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === Z.IN_TABLE || e.insertionMode === Z.IN_CAPTION || e.insertionMode === Z.IN_TABLE_BODY || e.insertionMode === Z.IN_ROW || e.insertionMode === Z.IN_CELL ? Z.IN_SELECT_IN_TABLE : Z.IN_SELECT;
}
function Yc(e, t) {
	e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML);
}
function Xc(e, t) {
	e.openElements.hasInScope(J.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, K.HTML);
}
function Zc(e, t) {
	e.openElements.hasInScope(J.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(J.RTC), e._insertElement(t, K.HTML);
}
function Qc(e, t) {
	e._reconstructActiveFormattingElements(), js(t), Ns(t), t.selfClosing ? e._appendElement(t, K.MATHML) : e._insertElement(t, K.MATHML), t.ackSelfClosing = !0;
}
function $c(e, t) {
	e._reconstructActiveFormattingElements(), Ms(t), Ns(t), t.selfClosing ? e._appendElement(t, K.SVG) : e._insertElement(t, K.SVG), t.ackSelfClosing = !0;
}
function el(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML);
}
function Q(e, t) {
	switch (t.tagID) {
		case J.I:
		case J.S:
		case J.B:
		case J.U:
		case J.EM:
		case J.TT:
		case J.BIG:
		case J.CODE:
		case J.FONT:
		case J.SMALL:
		case J.STRIKE:
		case J.STRONG:
			Pc(e, t);
			break;
		case J.A:
			Nc(e, t);
			break;
		case J.H1:
		case J.H2:
		case J.H3:
		case J.H4:
		case J.H5:
		case J.H6:
			Dc(e, t);
			break;
		case J.P:
		case J.DL:
		case J.OL:
		case J.UL:
		case J.DIV:
		case J.DIR:
		case J.NAV:
		case J.MAIN:
		case J.MENU:
		case J.ASIDE:
		case J.CENTER:
		case J.FIGURE:
		case J.FOOTER:
		case J.HEADER:
		case J.HGROUP:
		case J.DIALOG:
		case J.DETAILS:
		case J.ADDRESS:
		case J.ARTICLE:
		case J.SEARCH:
		case J.SECTION:
		case J.SUMMARY:
		case J.FIELDSET:
		case J.BLOCKQUOTE:
		case J.FIGCAPTION:
			Ec(e, t);
			break;
		case J.LI:
		case J.DD:
		case J.DT:
			Ac(e, t);
			break;
		case J.BR:
		case J.IMG:
		case J.WBR:
		case J.AREA:
		case J.EMBED:
		case J.KEYGEN:
			Rc(e, t);
			break;
		case J.HR:
			Hc(e, t);
			break;
		case J.RB:
		case J.RTC:
			Xc(e, t);
			break;
		case J.RT:
		case J.RP:
			Zc(e, t);
			break;
		case J.PRE:
		case J.LISTING:
			Oc(e, t);
			break;
		case J.XMP:
			Gc(e, t);
			break;
		case J.SVG:
			$c(e, t);
			break;
		case J.HTML:
			Cc(e, t);
			break;
		case J.BASE:
		case J.LINK:
		case J.META:
		case J.STYLE:
		case J.TITLE:
		case J.SCRIPT:
		case J.BGSOUND:
		case J.BASEFONT:
		case J.TEMPLATE:
			uc(e, t);
			break;
		case J.BODY:
			wc(e, t);
			break;
		case J.FORM:
			kc(e, t);
			break;
		case J.NOBR:
			Fc(e, t);
			break;
		case J.MATH:
			Qc(e, t);
			break;
		case J.TABLE:
			Lc(e, t);
			break;
		case J.INPUT:
			Bc(e, t);
			break;
		case J.PARAM:
		case J.TRACK:
		case J.SOURCE:
			Vc(e, t);
			break;
		case J.IMAGE:
			Uc(e, t);
			break;
		case J.BUTTON:
			Mc(e, t);
			break;
		case J.APPLET:
		case J.OBJECT:
		case J.MARQUEE:
			Ic(e, t);
			break;
		case J.IFRAME:
			Kc(e, t);
			break;
		case J.SELECT:
			Jc(e, t);
			break;
		case J.OPTION:
		case J.OPTGROUP:
			Yc(e, t);
			break;
		case J.NOEMBED:
		case J.NOFRAMES:
			qc(e, t);
			break;
		case J.FRAMESET:
			Tc(e, t);
			break;
		case J.TEXTAREA:
			Wc(e, t);
			break;
		case J.NOSCRIPT:
			e.options.scriptingEnabled ? qc(e, t) : el(e, t);
			break;
		case J.PLAINTEXT:
			jc(e, t);
			break;
		case J.COL:
		case J.TH:
		case J.TD:
		case J.TR:
		case J.HEAD:
		case J.FRAME:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.CAPTION:
		case J.COLGROUP: break;
		default: el(e, t);
	}
}
function tl(e, t) {
	if (e.openElements.hasInScope(J.BODY) && (e.insertionMode = Z.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function nl(e, t) {
	e.openElements.hasInScope(J.BODY) && (e.insertionMode = Z.AFTER_BODY, Zl(e, t));
}
function rl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function il(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(J.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(J.FORM) : n && e.openElements.remove(n));
}
function al(e) {
	e.openElements.hasInButtonScope(J.P) || e._insertFakeElement(q.P, J.P), e._closePElement();
}
function ol(e) {
	e.openElements.hasInListItemScope(J.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(J.LI), e.openElements.popUntilTagNamePopped(J.LI));
}
function sl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function cl(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function ll(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function ul(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(q.BR, J.BR), e.openElements.pop(), e.framesetOk = !1;
}
function dl(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== J.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function fl(e, t) {
	switch (t.tagID) {
		case J.A:
		case J.B:
		case J.I:
		case J.S:
		case J.U:
		case J.EM:
		case J.TT:
		case J.BIG:
		case J.CODE:
		case J.FONT:
		case J.NOBR:
		case J.SMALL:
		case J.STRIKE:
		case J.STRONG:
			Zs(e, t);
			break;
		case J.P:
			al(e);
			break;
		case J.DL:
		case J.UL:
		case J.OL:
		case J.DIR:
		case J.DIV:
		case J.NAV:
		case J.PRE:
		case J.MAIN:
		case J.MENU:
		case J.ASIDE:
		case J.BUTTON:
		case J.CENTER:
		case J.FIGURE:
		case J.FOOTER:
		case J.HEADER:
		case J.HGROUP:
		case J.DIALOG:
		case J.ADDRESS:
		case J.ARTICLE:
		case J.DETAILS:
		case J.SEARCH:
		case J.SECTION:
		case J.SUMMARY:
		case J.LISTING:
		case J.FIELDSET:
		case J.BLOCKQUOTE:
		case J.FIGCAPTION:
			rl(e, t);
			break;
		case J.LI:
			ol(e);
			break;
		case J.DD:
		case J.DT:
			sl(e, t);
			break;
		case J.H1:
		case J.H2:
		case J.H3:
		case J.H4:
		case J.H5:
		case J.H6:
			cl(e);
			break;
		case J.BR:
			ul(e);
			break;
		case J.BODY:
			tl(e, t);
			break;
		case J.HTML:
			nl(e, t);
			break;
		case J.FORM:
			il(e);
			break;
		case J.APPLET:
		case J.OBJECT:
		case J.MARQUEE:
			ll(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: dl(e, t);
	}
}
function pl(e, t) {
	e.tmplInsertionModeStack.length > 0 ? Yl(e, t) : tc(e, t);
}
function ml(e, t) {
	var n;
	t.tagID === J.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function hl(e, t) {
	e._err(t, U.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function gl(e, t) {
	if (e.openElements.currentTagId !== void 0 && Hs.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = Z.IN_TABLE_TEXT, t.type) {
		case W.CHARACTER:
			kl(e, t);
			break;
		case W.WHITESPACE_CHARACTER: Ol(e, t);
	}
	else Dl(e, t);
}
function _l(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_CAPTION;
}
function vl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_COLUMN_GROUP;
}
function yl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(q.COLGROUP, J.COLGROUP), e.insertionMode = Z.IN_COLUMN_GROUP, Pl(e, t);
}
function bl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_TABLE_BODY;
}
function xl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(q.TBODY, J.TBODY), e.insertionMode = Z.IN_TABLE_BODY, Ll(e, t);
}
function Sl(e, t) {
	e.openElements.hasInTableScope(J.TABLE) && (e.openElements.popUntilTagNamePopped(J.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function Cl(e, t) {
	zc(t) ? e._appendElement(t, K.HTML) : Dl(e, t), t.ackSelfClosing = !0;
}
function wl(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, K.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function Tl(e, t) {
	switch (t.tagID) {
		case J.TD:
		case J.TH:
		case J.TR:
			xl(e, t);
			break;
		case J.STYLE:
		case J.SCRIPT:
		case J.TEMPLATE:
			uc(e, t);
			break;
		case J.COL:
			yl(e, t);
			break;
		case J.FORM:
			wl(e, t);
			break;
		case J.TABLE:
			Sl(e, t);
			break;
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			bl(e, t);
			break;
		case J.INPUT:
			Cl(e, t);
			break;
		case J.CAPTION:
			_l(e, t);
			break;
		case J.COLGROUP:
			vl(e, t);
			break;
		default: Dl(e, t);
	}
}
function El(e, t) {
	switch (t.tagID) {
		case J.TABLE:
			e.openElements.hasInTableScope(J.TABLE) && (e.openElements.popUntilTagNamePopped(J.TABLE), e._resetInsertionMode());
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TBODY:
		case J.TD:
		case J.TFOOT:
		case J.TH:
		case J.THEAD:
		case J.TR: break;
		default: Dl(e, t);
	}
}
function Dl(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, bc(e, t), e.fosterParentingEnabled = n;
}
function Ol(e, t) {
	e.pendingCharacterTokens.push(t);
}
function kl(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Al(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) Dl(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var jl = /* @__PURE__ */ new Set([
	J.CAPTION,
	J.COL,
	J.COLGROUP,
	J.TBODY,
	J.TD,
	J.TFOOT,
	J.TH,
	J.THEAD,
	J.TR
]);
function Ml(e, t) {
	let n = t.tagID;
	jl.has(n) ? e.openElements.hasInTableScope(J.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Z.IN_TABLE, Tl(e, t)) : Q(e, t);
}
function Nl(e, t) {
	let n = t.tagID;
	switch (n) {
		case J.CAPTION:
		case J.TABLE:
			e.openElements.hasInTableScope(J.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Z.IN_TABLE, n === J.TABLE && El(e, t));
			break;
		case J.BODY:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TBODY:
		case J.TD:
		case J.TFOOT:
		case J.TH:
		case J.THEAD:
		case J.TR: break;
		default: fl(e, t);
	}
}
function Pl(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.COL:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.TEMPLATE:
			uc(e, t);
			break;
		default: Il(e, t);
	}
}
function Fl(e, t) {
	switch (t.tagID) {
		case J.COLGROUP:
			e.openElements.currentTagId === J.COLGROUP && (e.openElements.pop(), e.insertionMode = Z.IN_TABLE);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		case J.COL: break;
		default: Il(e, t);
	}
}
function Il(e, t) {
	e.openElements.currentTagId === J.COLGROUP && (e.openElements.pop(), e.insertionMode = Z.IN_TABLE, e._processToken(t));
}
function Ll(e, t) {
	switch (t.tagID) {
		case J.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_ROW;
			break;
		case J.TH:
		case J.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(q.TR, J.TR), e.insertionMode = Z.IN_ROW, zl(e, t);
			break;
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE, Tl(e, t));
			break;
		default: Tl(e, t);
	}
}
function Rl(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE);
			break;
		case J.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE, El(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TD:
		case J.TH:
		case J.TR: break;
		default: El(e, t);
	}
}
function zl(e, t) {
	switch (t.tagID) {
		case J.TH:
		case J.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, K.HTML), e.insertionMode = Z.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.TR:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE_BODY, Ll(e, t));
			break;
		default: Tl(e, t);
	}
}
function Bl(e, t) {
	switch (t.tagID) {
		case J.TR:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE_BODY);
			break;
		case J.TABLE:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE_BODY, Rl(e, t));
			break;
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(J.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Z.IN_TABLE_BODY, Rl(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TD:
		case J.TH: break;
		default: El(e, t);
	}
}
function Vl(e, t) {
	let n = t.tagID;
	jl.has(n) ? (e.openElements.hasInTableScope(J.TD) || e.openElements.hasInTableScope(J.TH)) && (e._closeTableCell(), zl(e, t)) : Q(e, t);
}
function Hl(e, t) {
	let n = t.tagID;
	switch (n) {
		case J.TD:
		case J.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Z.IN_ROW);
			break;
		case J.TABLE:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), Bl(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML: break;
		default: fl(e, t);
	}
}
function Ul(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.OPTION:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e._insertElement(t, K.HTML);
			break;
		case J.OPTGROUP:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop(), e._insertElement(t, K.HTML);
			break;
		case J.HR:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop(), e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.INPUT:
		case J.KEYGEN:
		case J.TEXTAREA:
		case J.SELECT:
			e.openElements.hasInSelectScope(J.SELECT) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), t.tagID !== J.SELECT && e._processStartTag(t));
			break;
		case J.SCRIPT:
		case J.TEMPLATE: uc(e, t);
	}
}
function Wl(e, t) {
	switch (t.tagID) {
		case J.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === J.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === J.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop();
			break;
		case J.OPTION:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop();
			break;
		case J.SELECT:
			e.openElements.hasInSelectScope(J.SELECT) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode());
			break;
		case J.TEMPLATE: fc(e, t);
	}
}
function Gl(e, t) {
	let n = t.tagID;
	n === J.CAPTION || n === J.TABLE || n === J.TBODY || n === J.TFOOT || n === J.THEAD || n === J.TR || n === J.TD || n === J.TH ? (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Ul(e, t);
}
function Kl(e, t) {
	let n = t.tagID;
	n === J.CAPTION || n === J.TABLE || n === J.TBODY || n === J.TFOOT || n === J.THEAD || n === J.TR || n === J.TD || n === J.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Wl(e, t);
}
function ql(e, t) {
	switch (t.tagID) {
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.SCRIPT:
		case J.STYLE:
		case J.TEMPLATE:
		case J.TITLE:
			uc(e, t);
			break;
		case J.CAPTION:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.tmplInsertionModeStack[0] = Z.IN_TABLE, e.insertionMode = Z.IN_TABLE, Tl(e, t);
			break;
		case J.COL:
			e.tmplInsertionModeStack[0] = Z.IN_COLUMN_GROUP, e.insertionMode = Z.IN_COLUMN_GROUP, Pl(e, t);
			break;
		case J.TR:
			e.tmplInsertionModeStack[0] = Z.IN_TABLE_BODY, e.insertionMode = Z.IN_TABLE_BODY, Ll(e, t);
			break;
		case J.TD:
		case J.TH:
			e.tmplInsertionModeStack[0] = Z.IN_ROW, e.insertionMode = Z.IN_ROW, zl(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = Z.IN_BODY, e.insertionMode = Z.IN_BODY, Q(e, t);
	}
}
function Jl(e, t) {
	t.tagID === J.TEMPLATE && fc(e, t);
}
function Yl(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(J.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : tc(e, t);
}
function Xl(e, t) {
	t.tagID === J.HTML ? Q(e, t) : Ql(e, t);
}
function Zl(e, t) {
	if (t.tagID === J.HTML) {
		if (e.fragmentContext || (e.insertionMode = Z.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === J.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else Ql(e, t);
}
function Ql(e, t) {
	e.insertionMode = Z.IN_BODY, bc(e, t);
}
function $l(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.FRAMESET:
			e._insertElement(t, K.HTML);
			break;
		case J.FRAME:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.NOFRAMES: uc(e, t);
	}
}
function eu(e, t) {
	t.tagID === J.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== J.FRAMESET && (e.insertionMode = Z.AFTER_FRAMESET));
}
function tu(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.NOFRAMES: uc(e, t);
	}
}
function nu(e, t) {
	t.tagID === J.HTML && (e.insertionMode = Z.AFTER_AFTER_FRAMESET);
}
function ru(e, t) {
	t.tagID === J.HTML ? Q(e, t) : iu(e, t);
}
function iu(e, t) {
	e.insertionMode = Z.IN_BODY, bc(e, t);
}
function au(e, t) {
	switch (t.tagID) {
		case J.HTML:
			Q(e, t);
			break;
		case J.NOFRAMES: uc(e, t);
	}
}
function ou(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function su(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function cu(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== K.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function lu(e, t) {
	if (As(t)) cu(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === K.MATHML ? js(t) : r === K.SVG && (Ps(t), Ms(t)), Ns(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function uu(e, t) {
	if (t.tagID === J.P || t.tagID === J.BR) {
		cu(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === K.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
//#endregion
//#region node_modules/entities/dist/escape.js
function du(e) {
	return e === 34 ? "&quot;" : e === 38 ? "&amp;" : e === 39 ? "&apos;" : e === 60 ? "&lt;" : e === 62 ? "&gt;" : "&nbsp;";
}
function fu(e, t) {
	if (e.lastIndex = 0, !e.test(t)) return t;
	let n = "", r = 0;
	do {
		let i = e.lastIndex - 1;
		r !== i && (n += t.substring(r, i));
		let a = t.charCodeAt(i);
		n += du(a), r = i + 1;
	} while (e.test(t));
	return n + t.substring(r);
}
var pu = /["&\u{A0}]/gu;
function mu(e) {
	return fu(pu, e);
}
var hu = /[&<>\u{A0}]/gu;
function gu(e) {
	return fu(hu, e);
}
//#endregion
//#region node_modules/parse5/dist/serializer/index.js
var _u = /* @__PURE__ */ new Set([
	q.AREA,
	q.BASE,
	q.BASEFONT,
	q.BGSOUND,
	q.BR,
	q.COL,
	q.EMBED,
	q.FRAME,
	q.HR,
	q.IMG,
	q.INPUT,
	q.KEYGEN,
	q.LINK,
	q.META,
	q.PARAM,
	q.SOURCE,
	q.TRACK,
	q.WBR
]);
function vu(e, t) {
	return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === K.HTML && _u.has(t.treeAdapter.getTagName(e));
}
var yu = {
	treeAdapter: ds,
	scriptingEnabled: !0
};
function bu(e, t) {
	return Su(e, {
		...yu,
		...t
	});
}
function xu(e, t) {
	let n = "", r = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === q.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === K.HTML ? t.treeAdapter.getTemplateContent(e) : e, i = t.treeAdapter.getChildNodes(r);
	if (i) for (let e of i) n += Su(e, t);
	return n;
}
function Su(e, t) {
	return t.treeAdapter.isElementNode(e) ? Cu(e, t) : t.treeAdapter.isTextNode(e) ? Tu(e, t) : t.treeAdapter.isCommentNode(e) ? Eu(e, t) : t.treeAdapter.isDocumentTypeNode(e) ? Du(e, t) : "";
}
function Cu(e, t) {
	let n = t.treeAdapter.getTagName(e);
	return `<${n}${wu(e, t)}>${vu(e, t) ? "" : `${xu(e, t)}</${n}>`}`;
}
function wu(e, { treeAdapter: t }) {
	let n = "";
	for (let r of t.getAttrList(e)) {
		if (n += " ", r.namespace) switch (r.namespace) {
			case K.XML:
				n += `xml:${r.name}`;
				break;
			case K.XMLNS:
				r.name !== "xmlns" && (n += "xmlns:"), n += r.name;
				break;
			case K.XLINK:
				n += `xlink:${r.name}`;
				break;
			default: n += `${r.prefix}:${r.name}`;
		}
		else n += r.name;
		n += `="${mu(r.value)}"`;
	}
	return n;
}
function Tu(e, t) {
	let { treeAdapter: n } = t, r = n.getTextNodeContent(e), i = n.getParentNode(e), a = i && n.isElementNode(i) && n.getTagName(i);
	return a && n.getNamespaceURI(i) === K.HTML && Lo(a, t.scriptingEnabled) ? r : gu(r);
}
function Eu(e, { treeAdapter: t }) {
	return `<!--${t.getCommentNodeContent(e)}-->`;
}
function Du(e, { treeAdapter: t }) {
	return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
}
//#endregion
//#region node_modules/parse5/dist/index.js
function Ou(e, t, n) {
	typeof e == "string" && (n = t, t = e, e = null);
	let r = Ws.getFragmentParser(e, n);
	return r.tokenizer.write(t, !0), r.getFragment();
}
//#endregion
//#region src/runtime/managedThreeDObjects.ts
function ku(e, t, n, r, i = 1, a, o) {
	let s = /* @__PURE__ */ new Map(), c = Array.isArray(r) ? r : [], l = (e) => e.lightType === "point" || e.lightType === "spot" || e.lightType === "ambient" ? e.lightType : "directional", u = (t) => {
		let n = l(t);
		if (n === "point") return new e.PointLight(16777215, 1, 0, 2);
		if (n === "ambient") return new e.AmbientLight(16777215, 1);
		if (n === "spot") {
			let t = new e.SpotLight(16777215, 1, 0, 1.0472, 0, 2);
			return t.target && (t.target.position.fromArray([
				0,
				0,
				-1
			]), t.add(t.target)), t;
		}
		return new e.DirectionalLight(16777215, 1);
	}, d = (t) => {
		let n = t.geometry;
		return n?.primitive === "sphere" ? new e.SphereGeometry(n.radius, n.widthSegments, n.heightSegments) : n?.primitive === "plane" ? new e.PlaneGeometry(n.width, n.height) : new e.BoxGeometry(n?.primitive === "box" ? n.width : 1, n?.primitive === "box" ? n.height : 1, n?.primitive === "box" ? n.depth : 1);
	}, f = (t) => {
		let n = t.material, r = n?.opacity ?? 1, i = {
			color: n?.color ?? "#ffffff",
			opacity: r,
			transparent: r < 1,
			wireframe: n?.wireframe ?? !1,
			side: n?.side === "double" ? e.DoubleSide : e.FrontSide
		}, a = n?.type ?? "phong";
		a === "normal" && delete i.color;
		let s = a === "phong" ? [
			"emissive",
			"emissiveIntensity",
			"specular",
			"shininess"
		] : a === "physical" ? [
			"emissive",
			"emissiveIntensity",
			"metalness",
			"roughness",
			"clearcoat",
			"clearcoatRoughness",
			"transmission",
			"ior",
			"thickness"
		] : a === "standard" ? [
			"emissive",
			"emissiveIntensity",
			"metalness",
			"roughness"
		] : a === "lambert" || a === "toon" ? ["emissive", "emissiveIntensity"] : a === "normal" ? ["flatShading"] : [];
		for (let e of s) i[e] = n?.[e] ?? {
			emissive: "#000000",
			emissiveIntensity: 1,
			specular: "#111111",
			shininess: 30,
			metalness: 0,
			roughness: 1,
			clearcoat: 0,
			clearcoatRoughness: 0,
			transmission: 0,
			ior: 1.5,
			thickness: 0,
			flatShading: !1
		}[e];
		return a === "toon" && n?.gradientMapAssetId && (i.gradientMap = o?.get(n.gradientMapAssetId, "gradient")), a === "matcap" && n?.matcapAssetId && (i.matcap = o?.get(n.matcapAssetId, "matcap")), a === "toon" && !n?.gradientMapAssetId && (i.gradientMap = null), a === "matcap" && !n?.matcapAssetId && (i.matcap = null), i;
	}, p = (t) => new {
		basic: e.MeshBasicMaterial,
		lambert: e.MeshLambertMaterial,
		phong: e.MeshPhongMaterial,
		standard: e.MeshStandardMaterial,
		physical: e.MeshPhysicalMaterial,
		toon: e.MeshToonMaterial,
		normal: e.MeshNormalMaterial,
		matcap: e.MeshMatcapMaterial
	}[t.material?.type ?? "phong"](f(t)), m = (e, t) => {
		for (let [n, r] of Object.entries(f(t))) [
			"color",
			"emissive",
			"specular"
		].includes(n) ? e[n]?.set?.(r) : e[n] !== r && ([
			"transparent",
			"side",
			"wireframe",
			"flatShading",
			"gradientMap",
			"matcap",
			"transmission"
		].includes(n) && (e.needsUpdate = !0), e[n] = r);
	}, h = (e) => {
		if (e.object.removeFromParent(), e.kind === "mesh-3d") e.object.geometry.dispose(), e.object.material.dispose();
		else if (e.kind === "model-3d") {
			e.replacement?.dispose();
			for (let t of e.assignments) t.node.material = t.material;
			for (let t of e.originals.values()) t.dispose();
			e.object.traverse?.((e) => {
				e.geometry?.dispose();
				let t = Array.isArray(e.material) ? e.material : e.material ? [e.material] : [];
				for (let e of t) {
					for (let t of Object.values(e)) t && typeof t == "object" && "isTexture" in t && "dispose" in t && typeof t.dispose == "function" && t.dispose();
					e.dispose();
				}
			});
		}
	}, g = (e) => {
		let t = a?.get(e);
		if (!t?.clone) return;
		let n = t.clone(!0);
		return n.traverse?.((e) => {
			e.geometry?.clone && (e.geometry = e.geometry.clone());
			let t = (e) => {
				let t = e.clone?.() ?? e;
				for (let [e, n] of Object.entries(t)) n && typeof n == "object" && "isTexture" in n && "clone" in n && typeof n.clone == "function" && (t[e] = n.clone());
				return t;
			};
			Array.isArray(e.material) ? e.material = e.material.map(t) : e.material &&= t(e.material);
		}), n;
	};
	for (let t of c) {
		if (!t || typeof t.id != "string" || t.kind !== "null-3d" && t.kind !== "light-3d" && t.kind !== "camera-3d" && t.kind !== "mesh-3d" && t.kind !== "model-3d" || s.has(t.id)) continue;
		let r = n.get(t.id);
		if (r?.kind === "camera-3d" && !!r.object.isOrthographicCamera != (t.cameraType === "orthographic") && (h(r), r = void 0), r?.kind === "light-3d" && r.lightType !== l(t) && (h(r), r = void 0), r?.kind === "model-3d" && r.modelAssetId !== t.modelAssetId && (h(r), r = void 0), !r || r.kind !== t.kind) {
			if (r && h(r), t.kind === "model-3d") {
				let e = t.modelAssetId ?? "", n = g(e);
				if (!n) continue;
				let i = /* @__PURE__ */ new Map();
				n.traverse?.((e) => {
					for (let t of Array.isArray(e.material) ? e.material : e.material ? [e.material] : []) !i.has(t) && t.clone && i.set(t, t.clone());
				});
				let a = [];
				n.traverse?.((e) => {
					e.material && a.push({
						node: e,
						material: e.material
					});
				}), r = {
					kind: "model-3d",
					object: n,
					modelAssetId: e,
					originals: i,
					assignments: a
				};
			} else r = t.kind === "null-3d" ? {
				kind: "null-3d",
				object: new e.Group()
			} : t.kind === "light-3d" ? {
				kind: "light-3d",
				object: u(t),
				lightType: l(t)
			} : t.kind === "camera-3d" ? {
				kind: "camera-3d",
				object: t.cameraType === "orthographic" ? new e.OrthographicCamera(-202.5 * i, 202.5 * i, 202.5, -202.5, 1, 1e5) : new e.PerspectiveCamera(60, i, 1, 1e5)
			} : {
				kind: "mesh-3d",
				object: new e.Mesh(d(t), p(t)),
				geometrySignature: JSON.stringify(t.geometry),
				materialSignature: t.material?.type ?? "phong"
			};
		} else if (r.kind === "mesh-3d") {
			let e = JSON.stringify(t.geometry), n = t.material?.type ?? "phong";
			r.geometrySignature !== e && (r.object.geometry.dispose(), r.object.geometry = d(t), r.geometrySignature = e), r.materialSignature !== n && (r.object.material.dispose(), r.object.material = p(t), r.materialSignature = n);
		}
		s.set(t.id, r);
	}
	for (let [e, t] of n) s.has(e) || h(t);
	for (let n of c) {
		let r = s.get(n?.id);
		if (!r) continue;
		let a = s.get(n.parentPlacementId ?? "")?.object ?? t;
		r.object.parent !== a && a.add(r.object);
		let o = (e, t) => Array.isArray(e) && e.length === 3 && e.every((e) => typeof e == "number" && Number.isFinite(e)) ? e : t;
		if (r.object.position.fromArray(o(n.position, [
			0,
			0,
			0
		])), r.object.rotation.fromArray([...o(n.rotation, [
			0,
			0,
			0
		]), "XYZ"]), r.object.scale.fromArray(o(n.scale, [
			1,
			1,
			1
		])), r.kind === "light-3d") r.object.color.set(n.color ?? "#ffffff"), r.object.intensity = Number.isFinite(n.intensity) ? n.intensity : 1, (r.lightType === "point" || r.lightType === "spot") && (r.object.distance = n.distance ?? 0, r.object.decay = n.decay ?? 2), r.lightType === "spot" && (r.object.angle = n.angle ?? 1.0472, r.object.penumbra = n.penumbra ?? 0);
		else if (r.kind === "camera-3d") {
			let e = Number.isFinite(i) && i > 0 ? i : 1;
			if (r.object.isOrthographicCamera) {
				let t = Number.isFinite(n.orthoHeight) && n.orthoHeight > 0 ? n.orthoHeight : 405;
				r.object.userData.macroflushOrthoHeight = t, r.object.top = t / 2, r.object.bottom = -t / 2, r.object.left = -t * e / 2, r.object.right = t * e / 2;
			} else r.object.aspect = e, r.object.fov = Number.isFinite(n.fov) ? n.fov : 60;
			r.object.near = Number.isFinite(n.near) ? n.near : 1, r.object.far = Number.isFinite(n.far) ? n.far : 1e5, r.object.updateProjectionMatrix();
		} else if (r.kind === "model-3d") {
			let t = n.modelMaterialOverrides;
			if (t?.type) {
				let e = t.type, i = {
					...n,
					material: {
						type: t.type,
						color: "#ffffff",
						opacity: 1,
						wireframe: !1,
						side: "front",
						...t
					}
				};
				e !== r.replacementType && (r.replacement?.dispose(), r.replacement = p(i), r.replacementType = e), m(r.replacement, i);
				for (let e of r.assignments) e.node.material = Array.isArray(e.material) ? e.material.map(() => r.replacement) : r.replacement;
				continue;
			}
			if (r.replacement) {
				r.replacement.dispose(), r.replacement = void 0, r.replacementType = void 0;
				for (let e of r.assignments) e.node.material = e.material;
			}
			for (let [t, i] of r.originals) {
				let r = [
					t.transparent,
					t.wireframe,
					t.side
				];
				t.copy?.(i);
				let a = n.modelMaterialOverrides;
				a?.color !== void 0 && t.color?.set(a.color), a?.opacity !== void 0 && (t.opacity = a.opacity, t.transparent = a.opacity < 1), a?.wireframe !== void 0 && (t.wireframe = a.wireframe), a?.side !== void 0 && (t.side = a.side === "double" ? e.DoubleSide : e.FrontSide), (r[0] !== t.transparent || r[1] !== t.wireframe || r[2] !== t.side) && (t.needsUpdate = !0);
			}
		} else if (r.kind === "mesh-3d") {
			let t = r.object.material, i = n.material?.opacity ?? 1, a = i < 1, o = n.material?.wireframe ?? !1, s = n.material?.side === "double" ? e.DoubleSide : e.FrontSide, c = t.transparent !== a || t.wireframe !== o || t.side !== s;
			t.color?.set(n.material?.color ?? "#ffffff"), t.opacity = i, t.transparent = a, t.wireframe = o, t.side = s, c && (t.needsUpdate = !0), m(t, n);
		}
	}
	let _ = new Map(c.map((e) => [e.id, e])), v = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), b = (n) => {
		if (v.has(n) || y.has(n)) return;
		let r = _.get(n);
		if (r?.kind !== "camera-3d") return;
		y.add(n);
		let i = [r.parentPlacementId, r.aimTargetPlacementId];
		for (let e of i) for (; e;) b(e), e = _.get(e)?.parentPlacementId;
		let a = s.get(n), o = r.aimTarget, c = r.aimTargetPlacementId ? s.get(r.aimTargetPlacementId)?.object : void 0;
		if (a?.kind === "camera-3d" && (c || o?.length === 3 && o.every(Number.isFinite))) {
			t.updateMatrixWorld(!0);
			let n = c?.getWorldPosition(new e.Vector3());
			n ? a.object.lookAt(n.x, n.y, n.z) : o && a.object.lookAt(o[0], o[1], o[2]);
		}
		y.delete(n), v.add(n);
	};
	for (let e of c) e.kind === "camera-3d" && b(e.id);
	return s;
}
//#endregion
//#region src/runtime/editorThreeDHelpers.ts
function Au(e) {
	let t = null, n = () => {
		if (t) {
			for (let e of t.helpers) e.dispose();
			t.renderer.dispose(), t.renderer.forceContextLoss(), t.canvas.remove(), t = null;
		}
	};
	return {
		render: (r, i, a) => {
			if (!r || !i) {
				n();
				return;
			}
			if (t?.object !== r.object) {
				n();
				let i = document.createElement("canvas");
				i.dataset.macroflushEditorHelpers = "true", i.setAttribute("aria-hidden", "true"), i.style.cssText = "position:fixed;pointer-events:none;z-index:2147483647;background:transparent;", document.body.appendChild(i);
				let a = new e.WebGLRenderer({
					canvas: i,
					alpha: !0
				});
				a.setClearColor(0, 0);
				let o = new e.Scene(), s = new e.AxesHelper(72);
				s.matrixAutoUpdate = !1;
				let c = [s];
				r.object.isDirectionalLight ? c.push(new e.DirectionalLightHelper(r.object, 36)) : r.object.isPointLight ? c.push(new e.PointLightHelper(r.object, 12)) : r.object.isSpotLight ? c.push(new e.SpotLightHelper(r.object)) : r.object.isCamera && c.push(new e.CameraHelper(r.object));
				for (let e of c) o.add(e);
				t = {
					object: r.object,
					canvas: i,
					renderer: a,
					scene: o,
					axes: s,
					helpers: c
				};
			}
			r.object.updateWorldMatrix(!0, !1), t.axes.matrix.copy(r.object.matrixWorld);
			for (let e of t.helpers) e.update?.();
			let o = a.getBoundingClientRect();
			Object.assign(t.canvas.style, {
				left: `${o.left}px`,
				top: `${o.top}px`,
				width: `${o.width}px`,
				height: `${o.height}px`
			}), (t.canvas.width !== a.width || t.canvas.height !== a.height) && t.renderer.setSize(a.width, a.height, !1), t.renderer.render(t.scene, i);
		},
		dispose: n
	};
}
//#endregion
//#region src/runtime/model3DRegistry.ts
function ju(e, t) {
	let n = new Map(t.filter((e) => e.kind === "model-3d").map((e) => [e.id, e])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = !1, o = (e) => e.traverse((e) => {
		let t = e;
		t.geometry?.dispose();
		let n = Array.isArray(t.material) ? t.material : t.material ? [t.material] : [];
		for (let e of n) {
			for (let t of Object.values(e)) t && typeof t == "object" && "isTexture" in t && "dispose" in t && typeof t.dispose == "function" && t.dispose();
			e.dispose();
		}
	}), s = (e) => {
		let t = e.indexOf(",");
		if (!e.startsWith("data:") || t < 0) throw Error("Model source must be an embedded data URL.");
		let n = e.slice(t + 1), r = e.slice(0, t).includes(";base64") ? atob(n) : decodeURIComponent(n);
		return Uint8Array.from(r, (e) => e.charCodeAt(0));
	};
	return {
		ensure: (t) => {
			if (a) return Promise.reject(/* @__PURE__ */ Error("3D model registry has been disposed."));
			if (r.has(t)) return;
			let c = i.get(t);
			if (c) return c;
			let l = n.get(t);
			if (!l?.sourceUrl || !l.modelFormat) return Promise.reject(/* @__PURE__ */ Error(`Unknown 3D model asset: ${t}`));
			let u = Promise.resolve().then(async () => {
				let n = s(l.sourceUrl), i = new TextDecoder().decode(n), c = l.modelFormat === "obj" ? new e.OBJLoader().parse(i) : await new Promise((t, r) => {
					let a = l.modelFormat === "glb" ? n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength) : i;
					new e.GLTFLoader().parse(a, "", (e) => t(e.scene), r);
				});
				a ? o(c) : r.set(t, c);
			});
			return i.set(t, u), u;
		},
		get: (e) => r.get(e),
		dispose: () => {
			a = !0;
			for (let e of r.values()) o(e);
			r.clear();
		}
	};
}
//#endregion
//#region src/runtime/materialTextureRegistry.ts
function Mu(e, t) {
	let n = /* @__PURE__ */ new Map(), r = !1, i = new e.TextureLoader();
	return {
		async ensure(a, o) {
			if (r) throw Error("Material texture registry is closed.");
			let s = t().find((e) => e.id === a && e.kind === "image");
			if (!s?.sourceUrl) throw Error(`Unresolved material image: ${a}`);
			let c = `${o}:${a}`, l = n.get(c);
			if (l?.url === s.sourceUrl) return l.promise;
			l?.texture?.dispose();
			let u = {
				url: s.sourceUrl,
				promise: Promise.resolve()
			};
			return n.set(c, u), u.promise = new Promise((t, a) => {
				i.load(u.url, (i) => {
					if (r || n.get(c) !== u) {
						i.dispose(), a(/* @__PURE__ */ Error("Material texture load superseded."));
						return;
					}
					i.colorSpace = o === "matcap" ? e.SRGBColorSpace : e.NoColorSpace, o === "gradient" && (i.minFilter = e.NearestFilter, i.magFilter = e.NearestFilter, i.generateMipmaps = !1), i.needsUpdate = !0, u.texture = i, t(i);
				}, void 0, (e) => {
					n.get(c) === u && n.delete(c), a(e);
				});
			}), u.promise;
		},
		get(e, t) {
			return n.get(`${t}:${e}`)?.texture;
		},
		prune(e) {
			for (let [t, r] of n) e.has(t) || (n.delete(t), r.texture?.dispose());
		},
		dispose() {
			r = !0;
			for (let e of n.values()) e.texture?.dispose();
			n.clear();
		}
	};
}
//#endregion
//#region src/runtime/scriptAssets.ts
function Nu(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (t) => {
		if (typeof t != "string" || !t) throw Error("useScript(nameOrId) requires a non-empty string.");
		let n = e.find((e) => e.kind === "script" && e.id === t), r = n ? [n] : e.filter((e) => e.kind === "script" && e.name === t);
		if (r.length !== 1) throw Error(r.length ? `Ambiguous script asset: ${t}` : `Unknown script asset: ${t}`);
		if (r[0].scriptMode === "global") throw Error(`Global library ${r[0].name} must be selected in Clip Libraries, not called with useScript().`);
		return r[0];
	}, a = (e, n) => {
		if (r.has(e.id)) throw Error(`Circular script dependency: ${e.name}`);
		let i = n ?? t.get(e.id);
		if (!i) throw Error(`Script asset failed to load: ${e.name}`);
		r.add(e.id);
		try {
			let t = i();
			if (t === null || typeof t != "object" && typeof t != "function") throw Error(`Script asset must return an exports object: ${e.name}`);
			return t;
		} finally {
			r.delete(e.id);
		}
	};
	return {
		register(e, n) {
			t.set(e, n);
		},
		use(e) {
			let t = i(e);
			if (n.has(t.id)) return n.get(t.id);
			let r = a(t);
			return n.set(t.id, r), r;
		},
		instantiate(e) {
			return a(i(e));
		},
		instantiateFactory(e, t) {
			return a(i(e), t);
		}
	};
}
//#endregion
//#region src/core/params.ts
var Pu = {
	opacity: {
		key: "opacity",
		type: "number",
		default: 1,
		value: 1,
		min: 0,
		max: 1,
		step: .01,
		group: "builtin",
		interpolable: !0
	},
	position: {
		key: "position",
		type: "vec2",
		default: [0, 0],
		value: [0, 0],
		group: "builtin",
		space: "pixels",
		interpolable: !0
	},
	anchorPoint: {
		key: "anchorPoint",
		type: "vec2",
		default: [320, 180],
		value: [320, 180],
		label: "anchorPoint",
		group: "builtin",
		space: "pixels",
		interpolable: !0
	},
	scale: {
		key: "scale",
		type: "vec2",
		default: [1, 1],
		value: [1, 1],
		step: .01,
		group: "builtin",
		interpolable: !0
	},
	rotation: {
		key: "rotation",
		type: "number",
		default: 0,
		value: 0,
		group: "builtin",
		space: "degrees",
		interpolable: !0
	},
	blendMode: {
		key: "blendMode",
		type: "select",
		default: "normal",
		value: "normal",
		options: [
			"normal",
			"add",
			"multiply",
			"screen",
			"overlay",
			"lighten",
			"darken"
		],
		group: "builtin",
		interpolable: !1
	},
	size: {
		key: "size",
		type: "vec2",
		default: [640, 360],
		value: [640, 360],
		group: "builtin",
		space: "pixels",
		interpolable: !1
	}
}, Fu = {
	script: "script-src",
	style: "style-src",
	font: "font-src",
	image: "img-src",
	data: "connect-src",
	other: "connect-src"
};
function Iu(e, t, n = !1, r = !1, i = !1, a = !1) {
	let o = /* @__PURE__ */ new Map(), s = Lu(t ?? "");
	if (s) for (let e of Object.values(Fu)) {
		let t = o.get(e) ?? /* @__PURE__ */ new Set();
		t.add(s), o.set(e, t);
	}
	for (let t of e) {
		let e = Lu(t.url);
		if (!e) continue;
		let n = Fu[t.kind], r = o.get(n) ?? /* @__PURE__ */ new Set();
		r.add(e), o.set(n, r);
	}
	if (n) {
		let e = o.get("font-src") ?? /* @__PURE__ */ new Set();
		e.add("data:"), o.set("font-src", e);
	}
	if (a) {
		let e = o.get("img-src") ?? /* @__PURE__ */ new Set();
		e.add("data:"), o.set("img-src", e);
	}
	if (i) for (let e of [
		"img-src",
		"media-src",
		"font-src",
		"connect-src"
	]) {
		let t = o.get(e) ?? /* @__PURE__ */ new Set();
		t.add("macroflush-asset:"), o.set(e, t);
	}
	if (r) for (let e of ["img-src", "connect-src"]) {
		let t = o.get(e) ?? /* @__PURE__ */ new Set();
		t.add("data:"), t.add("blob:"), o.set(e, t);
	}
	let c = (e, t = !1) => {
		let n = [t ? "'unsafe-inline'" : "", ...o.get(e) ?? []].filter(Boolean);
		return `${e} ${n.length ? n.join(" ") : "'none'"}`;
	};
	return [
		"default-src 'none'",
		c("script-src", !0),
		c("style-src", !0),
		c("img-src"),
		c("media-src"),
		c("font-src"),
		c("connect-src"),
		"base-uri 'none'",
		"form-action 'none'"
	].join("; ");
}
function Lu(e) {
	try {
		let t = new URL(e);
		return t.protocol !== "http:" && t.protocol !== "https:" || t.origin === "null" ? null : t.origin;
	} catch {
		return null;
	}
}
//#endregion
//#region src/runtime/centi.bitmapFont.js?raw
var Ru = "(function (Centi) {\n    Centi.prototype.bmFont = \n    Centi.prototype.bitmapFont = function(size){\n        this.bitmapFontSize = size;\n	};\n    Centi.prototype.bmTxt = \n    Centi.prototype.bitmapText = function(str, x, y, size){\n        if ( this.bitmapFontSize == undefined ) {\n            this.bitmapFontSize = 32;\n        }\n        if ( size != undefined ) {\n            this.bitmapFontSize = size;\n        }\n        size = this.bitmapFontSize;\n        var _str = str;\n        if ( typeof str !== \"string\" ) {\n            _str = str.toString(10);\n        }\n        for ( var i=0; i<_str.length; i++ ) {\n            var code = _str.charCodeAt(i);\n            var hex = this.getBitmapFontCode(code);\n            this.bitmap5by8(hex, x, y, size/8);\n            x += (size / 8) * 6;\n        }\n	};\n    Centi.prototype.bm5x8 = \n    Centi.prototype.bm5by8 = \n    Centi.prototype.bitmap5by8 = function(bin, x, y, dot_size){\n        var bit_max = Math.pow(2,32);\n        var bin_32bit_arr = [bin%bit_max, Math.floor(bin/bit_max)];\n        var c = 0;\n        for ( var i=0; i<5; i++ ) {\n            if ( i == 0 ) c = bin_32bit_arr[0];\n            if ( i == 4 ) c = bin_32bit_arr[1];\n            for ( var j=0; j<8; j++ ) {\n                if ( c & 1 ) {\n                    this.rect(x+i*dot_size, y+j*dot_size, dot_size, dot_size);\n                }\n                c = c >> 1;\n            }\n        }\n	};\n    Centi.prototype.getBitmapFontCode = function(code) {\n        var val = 0;\n        if ( code >= 0x20 && code <= 0x7F ) {\n            if ( !this.bitmapFontCodes ) {\n                this.bitmapFontCodes = _initCodes();\n//                for ( var i=this.bitmapFontCodes.length-1; i>=0; i-- ) {\n//                    for ( var j=0; j<this.bitmapFontCodes[i].length; j++ ) {\n//                        this.bitmapFontCodes[i][j] = parseInt(this.bitmapFontCodes[i][j].toString(10));\n//                    }\n//                }\n            }\n            var arr = this.bitmapFontCodes[code - 0x20];\n            for ( var i=arr.length-1; i>=0; i-- ) {\n                val += arr[i] * Math.pow(2, i*8);\n            }\n        }\n        return val;\n        function _initCodes() {\n            return [\n                [ // 20\n                    0b00000000,\n                    0b00000000,\n                    0b00000000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 21\n                    0b00000000,\n                    0b00000000,\n                    0b01001111,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 22\n                    0b00000000,\n                    0b00000111,\n                    0b00000000,\n                    0b00000111,\n                    0b00000000  \n                ],\n                  [ // 23\n                    0b00010100,\n                    0b01111111,\n                    0b00010100,\n                    0b01111111,\n                    0b00010100  \n                ],\n                  [ // 24\n                    0b00100100,\n                    0b00101010,\n                    0b01111111,\n                    0b00101010,\n                    0b00010010  \n                ],\n                  [ // 25\n                    0b00100011,\n                    0b00010011,\n                    0b00001000,\n                    0b01100100,\n                    0b01100010  \n                ],\n                  [ // 26\n                    0b00110110,\n                    0b01001001,\n                    0b01010101,\n                    0b00100010,\n                    0b01010000  \n                ],\n                  [ // 27\n                    0b00000000,\n                    0b00000101,\n                    0b00000011,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 28\n                    0b00000000,\n                    0b00011100,\n                    0b00100010,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 29\n                    0b00000000,\n                    0b01000001,\n                    0b00100010,\n                    0b00011100,\n                    0b00000000  \n                ],\n                  [ // 2A\n                    0b00010100,\n                    0b00001000,\n                    0b00111110,\n                    0b00001000,\n                    0b00010100  \n                ],\n                  [ // 2B\n                    0b00001000,\n                    0b00001000,\n                    0b00111110,\n                    0b00001000,\n                    0b00001000  \n                ],\n                  [ // 2C\n                    0b00000000,\n                    0b01010000,\n                    0b00110000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 2D\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000  \n                ],\n                  [ // 2E\n                    0b00000000,\n                    0b01100000,\n                    0b01100000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 2F\n                    0b00100000,\n                    0b00010000,\n                    0b00001000,\n                    0b00000100,\n                    0b00000010  \n                ],\n                  [ // 30\n                    0b00111110,\n                    0b01010001,\n                    0b01001001,\n                    0b01000101,\n                    0b00111110  \n                ],\n                  [ // 31\n                    0b00000000,\n                    0b01000010,\n                    0b01111111,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 32\n                    0b01000010,\n                    0b01100001,\n                    0b01010001,\n                    0b01001001,\n                    0b01000110  \n                ],\n                  [ // 33\n                    0b00100001,\n                    0b01000001,\n                    0b01000101,\n                    0b01001011,\n                    0b00110001  \n                ],\n                  [ // 34\n                    0b00011000,\n                    0b00010100,\n                    0b00010010,\n                    0b01111111,\n                    0b00010000  \n                ],\n                  [ // 35\n                    0b00100111,\n                    0b01000101,\n                    0b01000101,\n                    0b01000101,\n                    0b00111001  \n                ],\n                  [ // 36\n                    0b00111100,\n                    0b01001010,\n                    0b01001001,\n                    0b01001001,\n                    0b00110000  \n                ],\n                  [ // 37\n                    0b00000001,\n                    0b01110001,\n                    0b00001001,\n                    0b00000101,\n                    0b00000011  \n                ],\n                  [ // 38\n                    0b00110110,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110110  \n                ],\n                  [ // 39\n                    0b00000110,\n                    0b01001001,\n                    0b01001001,\n                    0b00101001,\n                    0b00011110  \n                ],\n                  [ // 3A\n                    0b00000000,\n                    0b00110110,\n                    0b00110110,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 3B\n                    0b00000000,\n                    0b01010110,\n                    0b00110110,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 3C\n                    0b00001000,\n                    0b00010100,\n                    0b00100010,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 3D\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100  \n                ],\n                  [ // 3E\n                    0b00000000,\n                    0b01000001,\n                    0b00100010,\n                    0b00010100,\n                    0b00001000  \n                ],\n                  [ // 3F\n                    0b00000010,\n                    0b00000001,\n                    0b01010001,\n                    0b00001001,\n                    0b00000110  \n                ],\n                  [ // 40\n                    0b00110010,\n                    0b01001001,\n                    0b01111001,\n                    0b01000001,\n                    0b00111110  \n                ],\n                  [ // 41\n                    0b01111110,\n                    0b00010001,\n                    0b00010001,\n                    0b00010001,\n                    0b01111110  \n                ],\n                  [ // 42\n                    0b01111111,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110110  \n                ],\n                  [ // 43\n                    0b00111110,\n                    0b01000001,\n                    0b01000001,\n                    0b01000001,\n                    0b00100010  \n                ],\n                  [ // 44\n                    0b01111111,\n                    0b01000001,\n                    0b01000001,\n                    0b00100010,\n                    0b00011100  \n                ],\n                  [ // 45\n                    0b01111111,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b01000001  \n                ],\n                  [ // 46\n                    0b01111111,\n                    0b00001001,\n                    0b00001001,\n                    0b00001001,\n                    0b00000001  \n                ],\n                  [ // 47\n                    0b00111110,\n                    0b01000001,\n                    0b01001001,\n                    0b01001001,\n                    0b01111010  \n                ],\n                  [ // 48\n                    0b01111111,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b01111111  \n                ],\n                  [ // 49\n                    0b00000000,\n                    0b01000001,\n                    0b01111111,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 4A\n                    0b00100000,\n                    0b01000000,\n                    0b01000001,\n                    0b00111111,\n                    0b00000001  \n                ],\n                  [ // 4B\n                    0b01111111,\n                    0b00001000,\n                    0b00010100,\n                    0b00100010,\n                    0b01000001  \n                ],\n                  [ // 4C\n                    0b01111111,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000  \n                ],\n                  [ // 4D\n                    0b01111111,\n                    0b00000010,\n                    0b00001100,\n                    0b00000010,\n                    0b01111111  \n                ],\n                  [ // 4E\n                    0b01111111,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b01111111  \n                ],\n                  [ // 4F\n                    0b00111110,\n                    0b01000001,\n                    0b01000001,\n                    0b01000001,\n                    0b00111110  \n                ],\n                  [ // 50\n                    0b01111111,\n                    0b00001001,\n                    0b00001001,\n                    0b00001001,\n                    0b00000110  \n                ],\n                  [ // 51\n                    0b00111110,\n                    0b01000001,\n                    0b01010001,\n                    0b00100001,\n                    0b01011110  \n                ],\n                  [ // 52\n                    0b01111111,\n                    0b00001001,\n                    0b00011001,\n                    0b00101001,\n                    0b01000110  \n                ],\n                  [ // 53\n                    0b01000110,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110001  \n                ],\n                  [ // 54\n                    0b00000001,\n                    0b00000001,\n                    0b01111111,\n                    0b00000001,\n                    0b00000001  \n                ],\n                  [ // 55\n                    0b00111111,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b00111111  \n                ],\n                  [ // 56\n                    0b00011111,\n                    0b00100000,\n                    0b01000000,\n                    0b00100000,\n                    0b00011111  \n                ],\n                  [ // 57\n                    0b00111111,\n                    0b01000000,\n                    0b00111000,\n                    0b01000000,\n                    0b00111111  \n                ],\n                  [ // 58\n                    0b01100011,\n                    0b00010100,\n                    0b00001000,\n                    0b00010100,\n                    0b01100011  \n                ],\n                  [ // 59\n                    0b00000111,\n                    0b00001000,\n                    0b01110000,\n                    0b00001000,\n                    0b00000111  \n                ],\n                  [ // 5A\n                    0b01100001,\n                    0b01010001,\n                    0b01001001,\n                    0b01000101,\n                    0b01000011  \n                ],\n                  [ // 5B\n                    0b00000000,\n                    0b01111111,\n                    0b01000001,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 5C\n                    0b00000010,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b00100000  \n                ],\n                  [ // 5D\n                    0b00000000,\n                    0b01000001,\n                    0b01000001,\n                    0b01111111,\n                    0b00000000  \n                ],\n                  [ // 5E\n                    0b00000100,\n                    0b00000010,\n                    0b00000001,\n                    0b00000010,\n                    0b00000100  \n                ],\n                  [ // 5F\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000  \n                ],\n                  [ // 60\n                    0b00000000,\n                    0b00000001,\n                    0b00000010,\n                    0b00000100,\n                    0b00000000  \n                ],\n                  [ // 61\n                    0b00100000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b01111000  \n                ],\n                  [ // 62\n                    0b01111111,\n                    0b01001000,\n                    0b01000100,\n                    0b01000100,\n                    0b00111000  \n                ],\n                  [ // 63\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01000100,\n                    0b00100000  \n                ],\n                  [ // 64\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01001000,\n                    0b01111111  \n                ],\n                  [ // 65\n                    0b00111000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b00011000  \n                ],\n                  [ // 66\n                    0b00001000,\n                    0b01111110,\n                    0b00001001,\n                    0b00000001,\n                    0b00000010  \n                ],\n                  [ // 67\n                    0b00001100,\n                    0b01010010,\n                    0b01010010,\n                    0b01010010,\n                    0b00111110  \n                ],\n                  [ // 68\n                    0b01111111,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 69\n                    0b00000000,\n                    0b01000100,\n                    0b01111101,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 6A\n                    0b00100000,\n                    0b01000000,\n                    0b01000100,\n                    0b00111101,\n                    0b00000000  \n                ],\n                  [ // 6B\n                    0b01111111,\n                    0b00010000,\n                    0b00101000,\n                    0b01000100,\n                    0b00000000  \n                ],\n                  [ // 6C\n                    0b00000000,\n                    0b01000001,\n                    0b01111111,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 6D\n                    0b01111100,\n                    0b00000100,\n                    0b00011000,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 6E\n                    0b01111100,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 6F\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01000100,\n                    0b00111000  \n                ],\n                  [ // 70\n                    0b01111100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00001000  \n                ],\n                  [ // 71\n                    0b00001000,\n                    0b00010100,\n                    0b00010100,\n                    0b00011000,\n                    0b01111100  \n                ],\n                  [ // 72\n                    0b01111100,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b00001000  \n                ],\n                  [ // 73\n                    0b01001000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b00100000  \n                ],\n                  [ // 74\n                    0b00000100,\n                    0b00111111,\n                    0b01000100,\n                    0b01000000,\n                    0b00100000  \n                ],\n                  [ // 75\n                    0b00111100,\n                    0b01000000,\n                    0b01000000,\n                    0b00100000,\n                    0b01111100  \n                ],\n                  [ // 76\n                    0b00011100,\n                    0b00100000,\n                    0b01000000,\n                    0b00100000,\n                    0b00011100  \n                ],\n                  [ // 77\n                    0b00111100,\n                    0b01000000,\n                    0b00110000,\n                    0b01000000,\n                    0b00111100  \n                ],\n                  [ // 78\n                    0b01000100,\n                    0b00101000,\n                    0b00010000,\n                    0b00101000,\n                    0b01000100  \n                ],\n                  [ // 79\n                    0b00001100,\n                    0b01010000,\n                    0b01010000,\n                    0b01010000,\n                    0b00111100\n                ],\n                  [ // 7A\n                    0b01000100,\n                    0b01100100,\n                    0b01010100,\n                    0b01001100,\n                    0b01000100\n                ],\n                  [ // 7B\n                    0b00000000,\n                    0b00001000,\n                    0b00110110,\n                    0b01000001,\n                    0b00000000\n                ],\n                  [ // 7C\n                    0b00000000,\n                    0b00000000,\n                    0b01111111,\n                    0b00000000,\n                    0b00000000\n                ],\n                  [ // 7D\n                    0b00000000,\n                    0b01000001,\n                    0b00110110,\n                    0b00001000,\n                    0b00000000  \n                ],\n                  [ // 7E\n                    0b00001000,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b00001000  \n                ],\n                  [ // 7F\n                    0b00000001,\n                    0b00101010,\n                    0b01111100,\n                    0b00101010,\n                    0b00000001  \n                ]\n            ];\n        }\n    }\n})(Centi);", zu = "(function(Centi) {\n\n	function readVec2(args) {\n		var arg0 = args[0];\n		if (args.length >= 2 && typeof arg0 === 'number') {\n			return new Centi.Vec2(args[0], args[1]);\n		} else if (Array.isArray(arg0)) {\n			return new Centi.Vec2(arg0[0], arg0[1]);\n		} else if (arg0 && arg0.x !== undefined && arg0.y !== undefined) {\n			return new Centi.Vec2(arg0.x, arg0.y);\n		}\n		return new Centi.Vec2();\n	}\n\n	Centi.prototype.Matrix = function(){\n		return this.new(Centi.Matrix, arguments);\n	};\n\n    Centi.Matrix = function() {\n        var count = arguments.length,\n            ok = true;\n        if (count === 6) {\n            this.set.apply(this, arguments);\n        } else if (count === 1) {\n            var arg = arguments[0];\n            if (arg instanceof Centi.Matrix) {\n                this.set(arg._a, arg._c, arg._b, arg._d, arg._tx, arg._ty);\n            } else if (Array.isArray(arg)) {\n                this.set.apply(this, arg);\n            } else {\n                ok = false;\n            }\n        } else if (count === 0) {\n            this.reset();\n        } else {\n            ok = false;\n        }\n        if (!ok)\n            throw new Error('Unsupported matrix parameters');\n    };\n\n    Centi.Matrix.prototype.set = function(a, c, b, d, tx, ty, _dontNotify) {\n        this._a = a;\n        this._c = c;\n        this._b = b;\n        this._d = d;\n        this._tx = tx;\n        this._ty = ty;\n        if (!_dontNotify)\n            this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype._changed = function() {\n        var owner = this._owner;\n        if (owner) {\n            if (owner._applyMatrix) {\n                owner.transform(null, true);\n            } else {\n                owner._changed(9);\n            }\n        }\n    };\n\n    Centi.Matrix.prototype.clone = function() {\n        return new Centi.Matrix(this._a, this._c, this._b, this._d,\n            this._tx, this._ty);\n    };\n\n    Centi.Matrix.prototype.equals = function(mx) {\n        return mx === this || mx && this._a === mx._a && this._b === mx._b && this._c === mx._c && this._d === mx._d && this._tx === mx._tx && this._ty === mx._ty || false;\n    };\n\n    Centi.Matrix.prototype.reset = function(_dontNotify) {\n        this._a = this._d = 1;\n        this._c = this._b = this._tx = this._ty = 0;\n        if (!_dontNotify)\n            this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.apply = function() {\n        var owner = this._owner;\n        if (owner) {\n            owner.transform(null, true);\n            return this.isIdentity();\n        }\n        return false;\n    };\n\n    Centi.Matrix.prototype.translate = function(x, y) {\n        this._tx += x * this._a + y * this._b;\n        this._ty += x * this._c + y * this._d;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.scale = function(x, y, cx, cy) {\n        var scale = new Centi.Vec2(x, y);\n        if (arguments.length == 4)\n            this.translate(cx, cy);\n        this._a *= scale.x;\n        this._c *= scale.x;\n        this._b *= scale.y;\n        this._d *= scale.y;\n        if (arguments.length == 4)\n            this.translate(-cx, -cy);\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.rotate = function(angle, x, y) {\n        angle *= Math.PI / 180;\n        x = x || 0;\n        y = y || 0;\n        var cos = Math.cos(angle),\n            sin = Math.sin(angle),\n            tx = x - x * cos + y * sin,\n            ty = y - x * sin - y * cos,\n            a = this._a,\n            b = this._b,\n            c = this._c,\n            d = this._d;\n        this._a = cos * a + sin * b;\n        this._b = -sin * a + cos * b;\n        this._c = cos * c + sin * d;\n        this._d = -sin * c + cos * d;\n        this._tx += tx * a + ty * b;\n        this._ty += tx * c + ty * d;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.shear = function(x, y, cx, cy) {\n        var shear = new Centi.Vec2(x, y);\n        if (arguments.length == 4)\n            this.translate(cx, cy);\n        var a = this._a,\n            c = this._c;\n        this._a += shear.y * this._b;\n        this._c += shear.y * this._d;\n        this._b += shear.x * a;\n        this._d += shear.x * c;\n        if (arguments.length == 4)\n            this.translate(-cx, -cy);\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.skew = function(x, y, cx, cy) {\n        var skew = new Centi.Vec2(x, y),\n            toRadians = Math.PI / 180,\n            shear = new Centi.Vec2(Math.tan(skew.x * toRadians),\n                Math.tan(skew.y * toRadians));\n        return this.shear(shear.x, shear.y, cx, cy);\n    };\n\n    Centi.Matrix.prototype.concatenate = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        this._a = a2 * a1 + c2 * b1;\n        this._b = b2 * a1 + d2 * b1;\n        this._c = a2 * c1 + c2 * d1;\n        this._d = b2 * c1 + d2 * d1;\n        this._tx += tx2 * a1 + ty2 * b1;\n        this._ty += tx2 * c1 + ty2 * d1;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.preConcatenate = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            tx1 = this._tx,\n            ty1 = this._ty,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        this._a = a2 * a1 + b2 * c1;\n        this._b = a2 * b1 + b2 * d1;\n        this._c = c2 * a1 + d2 * c1;\n        this._d = c2 * b1 + d2 * d1;\n        this._tx = a2 * tx1 + b2 * ty1 + tx2;\n        this._ty = c2 * tx1 + d2 * ty1 + ty2;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.chain = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            tx1 = this._tx,\n            ty1 = this._ty,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        return new Centi.Matrix(\n            a2 * a1 + c2 * b1,\n            a2 * c1 + c2 * d1,\n            b2 * a1 + d2 * b1,\n            b2 * c1 + d2 * d1,\n            tx1 + tx2 * a1 + ty2 * b1,\n            ty1 + tx2 * c1 + ty2 * d1);\n    };\n\n    Centi.Matrix.prototype.isIdentity = function() {\n        return this._a === 1 && this._c === 0 && this._b === 0 && this._d === 1 && this._tx === 0 && this._ty === 0;\n    };\n\n    Centi.Matrix.prototype.orNullIfIdentity = function() {\n        return this.isIdentity() ? null : this;\n    };\n\n    Centi.Matrix.prototype.isInvertible = function() {\n        return !!this._getDeterminant();\n    };\n\n    Centi.Matrix.prototype.isSingular = function() {\n        return !this._getDeterminant();\n    };\n\n    Centi.Matrix.prototype.transform = function(src, dst, count) {\n        return arguments.length < 3 ? this._transformPoint(readVec2(arguments)) : this._transformCoordinates(src, dst, count);\n    };\n\n    Centi.Matrix.prototype._transformPoint = function(point, dest, _dontNotify) {\n        var x = point.x,\n            y = point.y;\n        if (!dest)\n            dest = new Centi.Vec2();\n        return dest.set(\n            x * this._a + y * this._b + this._tx,\n            x * this._c + y * this._d + this._ty,\n            _dontNotify\n        );\n    };\n\n    Centi.Matrix.prototype._transformCoordinates = function(src, dst, count) {\n        var i = 0,\n            j = 0,\n            max = 2 * count;\n        while (i < max) {\n            var x = src[i++],\n                y = src[i++];\n            dst[j++] = x * this._a + y * this._b + this._tx;\n            dst[j++] = x * this._c + y * this._d + this._ty;\n        }\n        return dst;\n    };\n\n    Centi.Matrix.prototype._transformCorners = function(rect) {\n        var x1 = rect.x,\n            y1 = rect.y,\n            x2 = x1 + rect.width,\n            y2 = y1 + rect.height,\n            coords = [x1, y1, x2, y1, x2, y2, x1, y2];\n        return this._transformCoordinates(coords, coords, 4);\n    };\n\n    Centi.Matrix.prototype._transformBounds = function(bounds, dest, _dontNotify) {\n        var coords = this._transformCorners(bounds),\n            min = coords.slice(0, 2),\n            max = coords.slice();\n        for (var i = 2; i < 8; i++) {\n            var val = coords[i],\n                j = i & 1;\n            if (val < min[j])\n                min[j] = val;\n            else if (val > max[j])\n                max[j] = val;\n        }\n        return new Centi.Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);\n    };\n\n    Centi.Matrix.prototype.inverseTransform = function() {\n        return this._inverseTransform(readVec2(arguments));\n    };\n\n    Centi.Matrix.prototype._getDeterminant = function() {\n        var det = this._a * this._d - this._b * this._c;\n        return isFinite(det) && !Centi.Numerical.isZero(det) && isFinite(this._tx) && isFinite(this._ty) ? det : null;\n    };\n\n    Centi.Matrix.prototype._inverseTransform = function(point, dest, _dontNotify) {\n        var det = this._getDeterminant();\n        if (!det)\n            return null;\n        var x = point.x - this._tx,\n            y = point.y - this._ty;\n        if (!dest)\n            dest = new Centi.Vec2();\n        return dest.set(\n            (x * this._d - y * this._b) / det, (y * this._a - x * this._c) / det,\n            _dontNotify\n        );\n    };\n\n    Centi.Matrix.prototype.decompose = function() {\n        var a = this._a,\n            b = this._b,\n            c = this._c,\n            d = this._d;\n        if (Centi.Numerical.isZero(a * d - b * c))\n            return null;\n\n        var scaleX = Math.sqrt(a * a + b * b);\n        a /= scaleX;\n        b /= scaleX;\n\n        var shear = a * c + b * d;\n        c -= a * shear;\n        d -= b * shear;\n\n        var scaleY = Math.sqrt(c * c + d * d);\n        c /= scaleY;\n        d /= scaleY;\n        shear /= scaleY;\n\n        if (a * d < b * c) {\n            a = -a;\n            b = -b;\n            shear = -shear;\n            scaleX = -scaleX;\n        }\n\n        return {\n            scaling: new Centi.Vec2(scaleX, scaleY),\n            rotation: -Math.atan2(b, a) * 180 / Math.PI,\n            shearing: shear\n        };\n    };\n\n    Centi.Matrix.prototype.getValues = function() {\n        return [this._a, this._c, this._b, this._d, this._tx, this._ty];\n    };\n\n    Centi.Matrix.prototype.getTranslation = function() {\n        return new Centi.Vec2(this._tx, this._ty);\n    };\n\n    Centi.Matrix.prototype.getScaling = function() {\n        return (this.decompose() || {}).scaling;\n    };\n\n    Centi.Matrix.prototype.getRotation = function() {\n        return (this.decompose() || {}).rotation;\n    };\n\n    Centi.Matrix.prototype.inverted = function() {\n        var det = this._getDeterminant();\n        return det && new Centi.Matrix(\n            this._d / det, -this._c / det, -this._b / det,\n            this._a / det, (this._b * this._ty - this._d * this._tx) / det, (this._c * this._tx - this._a * this._ty) / det);\n    };\n\n    Centi.Matrix.prototype.shiftless = function() {\n        return new Centi.Matrix(this._a, this._c, this._b, this._d, 0, 0);\n    };\n\n    Centi.Matrix.prototype.applyToContext = function(ctx) {\n        ctx.transform(this._a, this._c, this._b, this._d, this._tx, this._ty);\n    };\n\n})(Centi);", Bu = "/**\n * k-d Tree JavaScript - V 1.01\n *\n * https://github.com/ubilabs/kd-tree-javascript\n *\n * @author Mircea Pricop <pricop@ubilabs.net>, 2012\n * @author Martin Kleppe <kleppe@ubilabs.net>, 2012\n * @author Ubilabs http://ubilabs.net, 2012\n * @license MIT License <http://www.opensource.org/licenses/mit-license.php>\n */(function(e,t){if(typeof define===\"function\"&&define.amd){define([\"exports\"],t)}else if(typeof exports===\"object\"){t(exports)}else{t(e.commonJsStrict={})}})(this,function(e){function t(e,t,n){this.obj=e;this.left=null;this.right=null;this.parent=n;this.dimension=t}function n(e,n,i){function o(e,n,r){var s=n%i.length,u,a;if(e.length===0){return null}if(e.length===1){return new t(e[0],s,r)}e.sort(function(e,t){return e[i[s]]-t[i[s]]});u=Math.floor(e.length/2);a=new t(e[u],s,r);a.left=o(e.slice(0,u),n+1,a);a.right=o(e.slice(u+1),n+1,a);return a}function u(e){function t(e){if(e.left){e.left.parent=e;t(e.left)}if(e.right){e.right.parent=e;t(e.right)}}s.root=e;t(s.root)}var s=this;if(!Array.isArray(e))u(e,n,i);else this.root=o(e,0,null);this.toJSON=function(e){if(!e)e=this.root;var n=new t(e.obj,e.dimension,null);if(e.left)n.left=s.toJSON(e.left);if(e.right)n.right=s.toJSON(e.right);return n};this.insert=function(e){function n(t,r){if(t===null){return r}var s=i[t.dimension];if(e[s]<t.obj[s]){return n(t.left,t)}else{return n(t.right,t)}}var r=n(this.root,null),s,o;if(r===null){this.root=new t(e,0,null);return}s=new t(e,(r.dimension+1)%i.length,r);o=i[r.dimension];if(e[o]<r.obj[o]){r.left=s}else{r.right=s}};this.remove=function(e){function n(t){if(t===null){return null}if(t.obj===e){return t}var r=i[t.dimension];if(e[r]<t.obj[r]){return n(t.left,t)}else{return n(t.right,t)}}function r(e){function u(e,t){var n,r,s,o,a;if(e===null){return null}n=i[t];if(e.dimension===t){if(e.right!==null){return u(e.right,t)}return e}r=e.obj[n];s=u(e.left,t);o=u(e.right,t);a=e;if(s!==null&&s.obj[n]>r){a=s}if(o!==null&&o.obj[n]>a.obj[n]){a=o}return a}function a(e,t){var n,r,s,o,u;if(e===null){return null}n=i[t];if(e.dimension===t){if(e.left!==null){return a(e.left,t)}return e}r=e.obj[n];s=a(e.left,t);o=a(e.right,t);u=e;if(s!==null&&s.obj[n]<r){u=s}if(o!==null&&o.obj[n]<u.obj[n]){u=o}return u}var t,n,o;if(e.left===null&&e.right===null){if(e.parent===null){s.root=null;return}o=i[e.parent.dimension];if(e.obj[o]<e.parent.obj[o]){e.parent.left=null}else{e.parent.right=null}return}if(e.left!==null){t=u(e.left,e.dimension)}else{t=a(e.right,e.dimension)}n=t.obj;r(t);e.obj=n}var t;t=n(s.root);if(t===null){return}r(t)};this.nearest=function(e,t,o){function l(r){function d(e,n){f.push([e,n]);if(f.size()>t){f.pop()}}var s,o=i[r.dimension],u=n(e,r.obj),a={},c,h,p;for(p=0;p<i.length;p+=1){if(p===r.dimension){a[i[p]]=e[i[p]]}else{a[i[p]]=r.obj[i[p]]}}c=n(a,r.obj);if(r.right===null&&r.left===null){if(f.size()<t||u<f.peek()[1]){d(r,u)}return}if(r.right===null){s=r.left}else if(r.left===null){s=r.right}else{if(e[o]<r.obj[o]){s=r.left}else{s=r.right}}l(s);if(f.size()<t||u<f.peek()[1]){d(r,u)}if(f.size()<t||Math.abs(c)<f.peek()[1]){if(s===r.left){h=r.right}else{h=r.left}if(h!==null){l(h)}}}var u,a,f;f=new r(function(e){return-e[1]});if(o){for(u=0;u<t;u+=1){f.push([null,o])}}l(s.root);a=[];for(u=0;u<t;u+=1){if(f.content[u][0]){a.push([f.content[u][0].obj,f.content[u][1]])}}return a};this.balanceFactor=function(){function e(t){if(t===null){return 0}return Math.max(e(t.left),e(t.right))+1}function t(e){if(e===null){return 0}return t(e.left)+t(e.right)+1}return e(s.root)/(Math.log(t(s.root))/Math.log(2))}}function r(e){this.content=[];this.scoreFunction=e}r.prototype={push:function(e){this.content.push(e);this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0];var t=this.content.pop();if(this.content.length>0){this.content[0]=t;this.sinkDown(0)}return e},peek:function(){return this.content[0]},remove:function(e){var t=this.content.length;for(var n=0;n<t;n++){if(this.content[n]==e){var r=this.content.pop();if(n!=t-1){this.content[n]=r;if(this.scoreFunction(r)<this.scoreFunction(e))this.bubbleUp(n);else this.sinkDown(n)}return}}throw new Error(\"Node not found.\")},size:function(){return this.content.length},bubbleUp:function(e){var t=this.content[e];while(e>0){var n=Math.floor((e+1)/2)-1,r=this.content[n];if(this.scoreFunction(t)<this.scoreFunction(r)){this.content[n]=t;this.content[e]=r;e=n}else{break}}},sinkDown:function(e){var t=this.content.length,n=this.content[e],r=this.scoreFunction(n);while(true){var i=(e+1)*2,s=i-1;var o=null;if(s<t){var u=this.content[s],a=this.scoreFunction(u);if(a<r)o=s}if(i<t){var f=this.content[i],l=this.scoreFunction(f);if(l<(o==null?r:a)){o=i}}if(o!=null){this.content[e]=this.content[o];this.content[o]=n;e=o}else{break}}}};this.kdTree=n;e.kdTree=n;e.BinaryHeap=r})", Vu = "export type KeyframeEasing =\n  | \"linear\"\n  | \"step\"\n  | \"quadIn\"\n  | \"quadOut\"\n  | \"quadInOut\"\n  | \"cubicIn\"\n  | \"cubicOut\"\n  | \"cubicInOut\"\n  | \"quartIn\" | \"quartOut\" | \"quartInOut\"\n  | \"quintIn\" | \"quintOut\" | \"quintInOut\"\n  | \"sineIn\"\n  | \"sineOut\"\n  | \"sineInOut\"\n  | \"expoIn\"\n  | \"expoOut\"\n  | \"expoInOut\"\n  | \"circIn\" | \"circOut\" | \"circInOut\"\n  | \"backIn\" | \"backOut\" | \"backInOut\"\n  | \"elasticIn\" | \"elasticOut\" | \"elasticInOut\"\n  | \"bounceIn\" | \"bounceOut\" | \"bounceInOut\"\n  | \"smoothStep\" | \"smootherStep\"\n  | \"bezier\";\n\nexport const keyframeEasingOptions = [\n  \"linear\", \"step\", \"quadIn\", \"quadOut\", \"quadInOut\",\n  \"cubicIn\", \"cubicOut\", \"cubicInOut\",\n  \"quartIn\", \"quartOut\", \"quartInOut\", \"quintIn\", \"quintOut\", \"quintInOut\",\n  \"sineIn\", \"sineOut\", \"sineInOut\",\n  \"expoIn\", \"expoOut\", \"expoInOut\", \"circIn\", \"circOut\", \"circInOut\",\n  \"backIn\", \"backOut\", \"backInOut\", \"elasticIn\", \"elasticOut\", \"elasticInOut\",\n  \"bounceIn\", \"bounceOut\", \"bounceInOut\", \"smoothStep\", \"smootherStep\"\n];\n\n/** @param {number} value */\nexport function linear(value: number) { return value; }\n/** @param {number} value */\nexport function quadIn(value: number) { return value * value; }\n/** @param {number} value */\nexport function quadOut(value: number) { return value * (2 - value); }\n/** @param {number} value */\nexport function quadInOut(value: number) { return value < 0.5 ? 2 * value * value : -1 + (4 - 2 * value) * value; }\n/** @param {number} value */\nexport function cubicIn(value: number) { return value * value * value; }\n/** @param {number} value */\nexport function cubicOut(value: number) { return 1 + (--value) * value * value; }\n/** @param {number} value */\nexport function cubicInOut(value: number) { return value < 0.5 ? 4 * value * value * value : (value - 1) * (2 * value - 2) * (2 * value - 2) + 1; }\n/** @param {number} value */\nexport function sineIn(value: number) { return value === 1 ? 1 : 1 - Math.cos(value * Math.PI / 2); }\n/** @param {number} value */\nexport function sineOut(value: number) { return Math.sin(value * Math.PI / 2); }\n/** @param {number} value */\nexport function sineInOut(value: number) { return value === 0 || value === 0.5 || value === 1 ? value : (1 - Math.cos(Math.PI * value)) / 2; }\n/** @param {number} value */\nexport function expoIn(value: number) { return value === 0 ? 0 : Math.pow(2, 10 * value - 10); }\n/** @param {number} value */\nexport function expoOut(value: number) { return value === 1 ? 1 : 1 - Math.pow(2, -10 * value); }\n/** @param {number} value */\nexport function expoInOut(value: number) { return value === 0 || value === 1 ? value : value < 0.5 ? Math.pow(2, 20 * value - 10) / 2 : (2 - Math.pow(2, -20 * value + 10)) / 2; }\n\n/** @param {number} value */\nexport function quartIn(value: number) { return value ** 4; }\n/** @param {number} value */\nexport function quartOut(value: number) { return 1 - (1 - value) ** 4; }\n/** @param {number} value */\nexport function quartInOut(value: number) { return value < 0.5 ? 8 * value ** 4 : 1 - (-2 * value + 2) ** 4 / 2; }\n/** @param {number} value */\nexport function quintIn(value: number) { return value ** 5; }\n/** @param {number} value */\nexport function quintOut(value: number) { return 1 - (1 - value) ** 5; }\n/** @param {number} value */\nexport function quintInOut(value: number) { return value < 0.5 ? 16 * value ** 5 : 1 - (-2 * value + 2) ** 5 / 2; }\n/** @param {number} value */\nexport function circIn(value: number) { return 1 - Math.sqrt(Math.max(0, 1 - value ** 2)); }\n/** @param {number} value */\nexport function circOut(value: number) { return Math.sqrt(Math.max(0, 1 - (value - 1) ** 2)); }\n/** @param {number} value */\nexport function circInOut(value: number) { return value < 0.5 ? (1 - Math.sqrt(Math.max(0, 1 - (2 * value) ** 2))) / 2 : (Math.sqrt(Math.max(0, 1 - (-2 * value + 2) ** 2)) + 1) / 2; }\n/** @param {number} value */\nexport function backIn(value: number) { return value === 0 || value === 1 ? value : 2.70158 * value ** 3 - 1.70158 * value ** 2; }\n/** @param {number} value */\nexport function backOut(value: number) { return value === 0 || value === 1 ? value : 1 + 2.70158 * (value - 1) ** 3 + 1.70158 * (value - 1) ** 2; }\n/** @param {number} value */\nexport function backInOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const c2 = 1.70158 * 1.525;\n  return value < 0.5 ? (2 * value) ** 2 * ((c2 + 1) * 2 * value - c2) / 2 : ((2 * value - 2) ** 2 * ((c2 + 1) * (2 * value - 2) + c2) + 2) / 2;\n}\n/** @param {number} value */\nexport function elasticIn(value: number) { return value === 0 || value === 1 ? value : -(2 ** (10 * value - 10)) * Math.sin((10 * value - 10.75) * (2 * Math.PI / 3)); }\n/** @param {number} value */\nexport function elasticOut(value: number) { return value === 0 || value === 1 ? value : 2 ** (-10 * value) * Math.sin((10 * value - 0.75) * (2 * Math.PI / 3)) + 1; }\n/** @param {number} value */\nexport function elasticInOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const oscillation = Math.sin((20 * value - 11.125) * (2 * Math.PI / 4.5));\n  return value < 0.5 ? -(2 ** (20 * value - 10) * oscillation) / 2 : (2 ** (-20 * value + 10) * oscillation) / 2 + 1;\n}\n/** @param {number} value */\nexport function bounceOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const n1 = 7.5625, d1 = 2.75;\n  if (value < 1 / d1) return n1 * value * value;\n  if (value < 2 / d1) return n1 * (value - 1.5 / d1) ** 2 + 0.75;\n  if (value < 2.5 / d1) return n1 * (value - 2.25 / d1) ** 2 + 0.9375;\n  return n1 * (value - 2.625 / d1) ** 2 + 0.984375;\n}\n/** @param {number} value */\nexport function bounceIn(value: number) { return value === 0 || value === 1 ? value : 1 - bounceOut(1 - value); }\n/** @param {number} value */\nexport function bounceInOut(value: number) { return value === 0 || value === 1 ? value : value < 0.5 ? (1 - bounceOut(1 - 2 * value)) / 2 : (1 + bounceOut(2 * value - 1)) / 2; }\n/** @param {number} value */\nexport function smoothStep(value: number) { return value * value * (3 - 2 * value); }\n/** @param {number} value */\nexport function smootherStep(value: number) { return value ** 3 * (value * (value * 6 - 15) + 10); }\n\nexport const namedEasingFunctions = {\n  linear, quadIn, quadOut, quadInOut, cubicIn, cubicOut, cubicInOut,\n  quartIn, quartOut, quartInOut, quintIn, quintOut, quintInOut,\n  sineIn, sineOut, sineInOut, expoIn, expoOut, expoInOut, circIn, circOut, circInOut,\n  backIn, backOut, backInOut, elasticIn, elasticOut, elasticInOut,\n  bounceIn, bounceOut, bounceInOut, smoothStep, smootherStep\n};\n\nexport const centiEase = {\n  Linear: { None: linear },\n  Quadratic: { In: quadIn, Out: quadOut, InOut: quadInOut },\n  Cubic: { In: cubicIn, Out: cubicOut, InOut: cubicInOut },\n  Quartic: { In: quartIn, Out: quartOut, InOut: quartInOut },\n  Quintic: { In: quintIn, Out: quintOut, InOut: quintInOut },\n  Sinusoidal: { In: sineIn, Out: sineOut, InOut: sineInOut },\n  Exponential: { In: expoIn, Out: expoOut, InOut: expoInOut },\n  Circular: { In: circIn, Out: circOut, InOut: circInOut },\n  Back: { In: backIn, Out: backOut, InOut: backInOut },\n  Elastic: { In: elasticIn, Out: elasticOut, InOut: elasticInOut },\n  Bounce: { In: bounceIn, Out: bounceOut, InOut: bounceInOut },\n  Smoothstep: { InOut: smoothStep },\n  Smootherstep: { InOut: smootherStep }\n};\n\n/** @param {number} value @param {number[]} bezier */\nexport function cubicBezier(value: number, bezier: number[]) {\n  const [x1 = 0, y1 = 0, x2 = 1, y2 = 1] = bezier;\n  const target = clamp01(value);\n  let parameter = target;\n\n  // Newton-Raphson converges quickly for normal CSS cubic-bezier handles.\n  for (let iteration = 0; iteration < 8; iteration += 1) {\n    const difference = cubic(parameter, 0, x1, x2, 1) - target;\n    const slope = cubicDerivative(parameter, 0, x1, x2, 1);\n    if (Math.abs(difference) < 0.00001 || Math.abs(slope) < 0.00001) break;\n    parameter = clamp01(parameter - difference / slope);\n  }\n\n  // Bisection stabilizes non-linear or flat x control regions.\n  let lower = 0;\n  let upper = 1;\n  for (let iteration = 0; iteration < 12; iteration += 1) {\n    const x = cubic(parameter, 0, x1, x2, 1);\n    if (Math.abs(x - target) < 0.00001) break;\n    if (x < target) lower = parameter;\n    else upper = parameter;\n    parameter = (lower + upper) / 2;\n  }\n\n  return cubic(parameter, 0, y1, y2, 1);\n}\n\n/** @param {string | undefined} easing @param {number} value @param {number[] | undefined} bezier */\nexport function evaluateEasing(easing: string | undefined, value: number, bezier?: number[]) {\n  const progress = clamp01(value);\n  if (easing === \"step\") return 0;\n  if (easing === \"bezier\") return cubicBezier(progress, bezier ?? [0.25, 0.1, 0.25, 1]);\n  return namedEasingFunctions[easing as keyof typeof namedEasingFunctions]?.(progress) ?? progress;\n}\n\n/** @param {number} value @param {number} a @param {number} b @param {number} c @param {number} d */\nfunction cubic(value: number, a: number, b: number, c: number, d: number) {\n  const inverse = 1 - value;\n  return inverse ** 3 * a + 3 * inverse ** 2 * value * b + 3 * inverse * value ** 2 * c + value ** 3 * d;\n}\n\n/** @param {number} value @param {number} a @param {number} b @param {number} c @param {number} d */\nfunction cubicDerivative(value: number, a: number, b: number, c: number, d: number) {\n  const inverse = 1 - value;\n  return 3 * inverse ** 2 * (b - a) + 6 * inverse * value * (c - b) + 3 * value ** 2 * (d - c);\n}\n\n/** @param {number} value */\nfunction clamp01(value: number) { return Math.max(0, Math.min(1, value)); }\n";
//#endregion
//#region src/runtime/exportRandomSeed.ts
function Hu(e, t) {
	let n = `${e}:${Math.trunc(t)}`, r = 2166136261;
	for (let e = 0; e < n.length; e += 1) r ^= n.charCodeAt(e), r = Math.imul(r, 16777619);
	return r >>> 0;
}
function Uu(e) {
	let t = e >>> 0;
	return () => {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
//#endregion
//#region src/core/exportScenePlan.ts
function Wu(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t || typeof t.id != "string" || !t.id || typeof t.assetId != "string" || typeof t.visible != "boolean") throw Error("Invalid export scene object.");
		for (let e of [
			"x",
			"y",
			"scale",
			"rotation",
			"opacity"
		]) if (!Number.isFinite(t[e])) throw Error("Invalid export scene transform.");
		for (let e of [
			"parentId",
			"maskId",
			"instanceOfId"
		]) if (t[e] !== void 0 && typeof t[e] != "string") throw Error("Invalid export scene reference.");
		if (n.has(t.id)) throw Error("Duplicate export scene object identity.");
		n.set(t.id, t);
	}
	for (let e of [
		"parentId",
		"maskId",
		"instanceOfId"
	]) for (let t of n.values()) {
		let r = /* @__PURE__ */ new Set(), i = t;
		for (; i;) {
			if (r.has(i.id) || r.size >= 64) throw Error(`Export scene ${e} cycle or depth limit.`);
			r.add(i.id), i = i[e] ? n.get(i[e]) : void 0;
		}
	}
	let r = (e) => {
		let t = e;
		for (; t;) {
			if (!t.visible) return !1;
			t = t.parentId ? n.get(t.parentId) : void 0;
		}
		return !0;
	}, i = /* @__PURE__ */ new Set(), a = (e) => {
		if (!i.has(e.id) && (i.add(e.id), e.maskId)) {
			let t = n.get(e.maskId);
			if (!t) throw Error("Export scene mask is unavailable.");
			a(t);
		}
	};
	for (let e of n.values()) r(e) && a(e);
	let o = new Map(t.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set();
	for (let e of i) {
		let t = n.get(e), r = o.get(t.assetId);
		if (!r) throw Error(`Export scene asset unavailable: ${t.assetId}`);
		if (t.instanceOfId) throw Error("Runtime instances are not supported in export yet.");
		if (t.maskId) {
			let e = o.get(n.get(t.maskId).assetId)?.kind;
			if (!["image", "video"].includes(r.kind) || !["image", "video"].includes(e ?? "")) throw Error("Mixed runtime masks are not supported in export yet.");
		}
		if (r.kind === "html-clip" || r.kind === "composition") {
			s.add(r.id);
			continue;
		}
		if (![
			"image",
			"video",
			"audio"
		].includes(r.kind)) throw Error(`Unsupported export scene asset: ${r.kind}`);
		if (!r.sourceUrl) throw Error(`Export source unavailable: ${r.name ?? r.id}`);
		s.add(r.id);
	}
	return {
		requiredObjectIds: [...i],
		requiredAssetIds: [...s]
	};
}
//#endregion
//#region src/runtime/projectFontPreparation.ts
function Gu(e, t = {}) {
	let n = e.filter((e) => e.kind === "font" && e.fontFamily), r = t.fonts ?? document.fonts, i = t.makeFace ?? ((e, t, n) => new FontFace(e, t, n)), a = [], o = /* @__PURE__ */ new Set(), s = setTimeout, c = clearTimeout, l = !1, u, d = (e) => ({
		weight: e.fontWeight || "400",
		style: e.fontStyle || "normal"
	}), f = (e) => {
		let t = i(e.fontFamily, new Uint8Array([0]).buffer, d(e));
		return t.load().catch(() => void 0), t;
	}, p = (e) => {
		r.add(e), o.add(e);
	};
	return {
		prepare() {
			if (l) return Promise.reject(/* @__PURE__ */ Error("Font preparation is closed."));
			if (u) return u;
			if (!n.length) return u = Promise.resolve(a);
			let e = Number.isFinite(t.timeoutMs) ? Math.max(1, t.timeoutMs) : 5e3, m = Date.now() + e, h = Math.max(1, Math.min(n.length, Math.trunc(Number.isFinite(t.concurrency) ? t.concurrency : 4))), g = 0;
			return u = Promise.all(Array.from({ length: h }, async () => {
				for (; !l && g < n.length;) {
					let e = n[g++], t = m - Date.now();
					if (!e.sourceUrl || t <= 0) {
						let t = f(e);
						p(t), a.push({
							assetId: e.id,
							face: t,
							status: e.sourceUrl ? "timeout" : "missing"
						});
						continue;
					}
					let u = i(e.fontFamily, `url(${JSON.stringify(e.sourceUrl)})`, d(e));
					p(u);
					let h = {
						assetId: e.id,
						face: u,
						status: "failed"
					};
					a.push(h);
					let _;
					try {
						let n = u.load(), i = await Promise.race([n.then(() => "ready"), new Promise((e) => {
							_ = s(() => e("timeout"), t);
						})]);
						if (l) continue;
						h.status = i, i === "timeout" && (r.delete(u), o.delete(u), u = f(e), p(u), h.face = u);
					} catch (e) {
						l || (h.status = "failed", h.message = e instanceof Error ? e.message : String(e));
					} finally {
						_ !== void 0 && c(_);
					}
				}
			})).then(async () => {
				let e;
				try {
					await Promise.race([r.ready, new Promise((t) => {
						e = s(t, Math.max(0, m - Date.now()));
					})]);
				} finally {
					e !== void 0 && c(e);
				}
				if (l) throw Error("Font preparation is closed.");
				return a;
			}).catch((e) => {
				l = !0;
				for (let e of o) r.delete(e);
				throw o.clear(), e;
			}), u;
		},
		check(e, t = " ") {
			return r.check(e, t);
		},
		dispose() {
			l = !0;
			for (let e of o) r.delete(e);
			o.clear();
		}
	};
}
//#endregion
//#region src/runtime/projectFontUsage.ts
function Ku(e, t) {
	let n = (n, r) => {
		if (r.trim()) try {
			e.fonts.check(n, r) || t(`Font unavailable for text: ${n}`);
		} catch (e) {
			t(`Font validation failed: ${e instanceof Error ? e.message : String(e)}`);
		}
	}, r = [e.defaultView?.CanvasRenderingContext2D?.prototype], i = [];
	for (let e of r) if (e) for (let t of [
		"fillText",
		"strokeText",
		"measureText"
	]) {
		let r = e[t], a = function(...e) {
			return n(this.font, String(e[0])), Reflect.apply(r, this, e);
		};
		Object.defineProperty(e, t, {
			configurable: !0,
			writable: !0,
			value: a
		}), i.push(() => {
			e[t] === a && Object.defineProperty(e, t, {
				configurable: !0,
				writable: !0,
				value: r
			});
		});
	}
	let a = (e, t) => {
		n(e.font || `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`, t);
	};
	return {
		validateDom() {
			if (!e.body || !e.defaultView) return;
			let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = (n) => {
				let r = t.get(n);
				return r || (r = e.defaultView.getComputedStyle(n), t.set(n, r)), r;
			}, o = (e) => {
				if (r.has(e)) return r.get(e);
				let t = [], a = e;
				for (; a && !n.has(a);) t.push(a), a = a.parentElement;
				let o = !a || n.get(a);
				for (let e = t.length - 1; e >= 0; e--) {
					let r = i(t[e]);
					o = o && r.display !== "none" && r.visibility !== "hidden" && r.visibility !== "collapse" && Number(r.opacity) !== 0, n.set(t[e], o);
				}
				let s = n.get(e) && e.getClientRects().length > 0;
				return r.set(e, s), s;
			}, s = e.createTreeWalker(e.body, 4);
			for (let e = s.nextNode(); e; e = s.nextNode()) {
				let t = e.parentElement;
				t && ![
					"SCRIPT",
					"STYLE",
					"NOSCRIPT"
				].includes(t.tagName) && o(t) && a(i(t), e.textContent || "");
			}
			for (let t of [e.body, ...e.body.querySelectorAll("*")]) if (o(t)) for (let n of ["::before", "::after"]) {
				let r = e.defaultView.getComputedStyle(t, n);
				r.display !== "none" && r.visibility !== "hidden" && Number(r.opacity) !== 0 && r.content && ![
					"none",
					"normal",
					"\"\"",
					"''"
				].includes(r.content) && a(r, r.content);
			}
		},
		dispose() {
			i.splice(0).forEach((e) => e());
		}
	};
}
//#endregion
//#region src/core/assetImageDependencies.ts
function qu(e) {
	return !!e && typeof e == "object" && typeof e.type == "string";
}
function Ju(e) {
	return qu(e) ? e.type === "Literal" && typeof e.value == "string" ? e.value : e.type !== "TemplateLiteral" || !Array.isArray(e.expressions) || e.expressions.length ? null : (Array.isArray(e.quasis) ? e.quasis[0] : void 0)?.value?.cooked ?? null : null;
}
function Yu(e) {
	return Xu(e, /* @__PURE__ */ new Set(["assetImage", "assetTexture"]));
}
function Xu(e, t, n = !1) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) try {
		let e = /* @__PURE__ */ new Set(), a = {
			ecmaVersion: "latest",
			allowReturnOutsideFunction: !0,
			allowAwaitOutsideFunction: !0
		}, o;
		try {
			o = Xr(i, a);
		} catch (e) {
			if (!n) throw e;
			o = Xr(i, {
				...a,
				sourceType: "module"
			});
		}
		let s = [o];
		for (; s.length;) {
			let n = s.pop();
			if (n.type === "CallExpression" && qu(n.callee) && n.callee.type === "Identifier" && typeof n.callee.name == "string" && t.has(n.callee.name)) {
				let t = Ju(Array.isArray(n.arguments) ? n.arguments[0] : void 0);
				t !== null && e.add(t);
			}
			let r = [];
			for (let e of Object.values(n)) if (qu(e)) r.push(e);
			else if (Array.isArray(e)) for (let t of e) qu(t) && r.push(t);
			for (let e = r.length - 1; e >= 0; e--) s.push(r[e]);
		}
		for (let t of e) r.add(t);
	} catch {
		continue;
	}
	return [...r];
}
//#endregion
//#region src/runtime/assetImageRegistry.ts
function Zu(e, t, n = () => new Image(), r = {
	schedule: setTimeout,
	cancel: clearTimeout
}) {
	let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = !1, s = new AbortController(), c = (t) => {
		if (o) throw Error("Image registry is closed.");
		if (typeof t != "string") throw Error("Image asset name must be a string.");
		let n = e().filter((e) => e.name === t);
		if (n.length !== 1) throw Error((n.length ? "Ambiguous asset name: " : "Unknown asset name: ") + t);
		let r = n[0];
		if (r.kind !== "image") throw Error("Asset is not an image: " + t);
		if (!r.sourceUrl) throw Error("Image source unavailable: " + t);
		return r;
	}, l = (e) => {
		let t = i.get(e.id);
		if (t && t.url === e.sourceUrl) return t;
		let c = {
			url: e.sourceUrl,
			promise: Promise.resolve(),
			textures: /* @__PURE__ */ new Map()
		};
		return i.set(e.id, c), c.promise = (async () => {
			try {
				let t = n();
				if (t.crossOrigin = "anonymous", t.src = c.url, await new Promise((e, n) => {
					let i = () => {
						r.cancel(o), s.signal.removeEventListener("abort", a);
					}, a = () => {
						i(), n(/* @__PURE__ */ Error("Image decode cancelled."));
					}, o = r.schedule(() => {
						i(), n(/* @__PURE__ */ Error("Image decode timed out."));
					}, 5e3);
					if (s.signal.addEventListener("abort", a, { once: !0 }), s.signal.aborted) {
						a();
						return;
					}
					t.decode().then(() => {
						i(), e();
					}, (e) => {
						i(), n(e);
					});
				}), !o && i.get(e.id) === c) {
					let n = a.get(e.id);
					c.image = t, a.set(e.id, c);
					for (let e of n?.textures.values() ?? []) e.dispose();
				}
			} catch (t) {
				c.error = /* @__PURE__ */ Error("Failed to load image: " + e.name + " (" + (t instanceof Error ? t.message : String(t)) + ")");
			}
		})(), c;
	}, u = (e) => {
		let t = c(e), n = i.get(t.id);
		if (n?.error) throw n.error;
		let r = a.get(t.id);
		if (!r?.image) throw Error("assetImage(\"" + e + "\") is not preloaded. Use a string literal name or await assetImageLoad(\"" + e + "\").");
		return r;
	};
	return {
		async preload(t) {
			let n = [];
			for (let r of t) {
				let t = e().filter((e) => e.name === r), i = t.length === 1 ? t[0] : void 0;
				i?.kind === "image" && i.sourceUrl && n.push(l(i).promise);
			}
			await Promise.all(n);
		},
		image(e) {
			return u(e).image;
		},
		async load(e) {
			let t = c(e), n = l(t);
			for (;;) {
				await n.promise;
				let t = c(e), r = l(t);
				if (r === n) return u(e).image;
				n = r;
			}
		},
		refresh() {
			for (let t of i.keys()) {
				let n = e().find((e) => e.id === t && e.kind === "image");
				if (n?.sourceUrl) l(n);
				else {
					i.delete(t);
					for (let e of a.get(t)?.textures.values() ?? []) e.dispose();
					a.delete(t);
				}
			}
		},
		texture(e, n) {
			if (!t) throw Error("THREE is unavailable for this clip.");
			let r = n?.colorSpace ?? "srgb";
			if (r !== "srgb" && r !== "linear") throw Error("Invalid image texture colorSpace.");
			let i = u(e), a = i.textures.get(r);
			return a || (a = new t.Texture(i.image), a.colorSpace = r === "srgb" ? t.SRGBColorSpace : t.NoColorSpace, a.needsUpdate = !0, i.textures.set(r, a)), a;
		},
		dispose() {
			o = !0, s.abort();
			for (let e of a.values()) for (let t of e.textures.values()) t.dispose();
			i.clear(), a.clear();
		}
	};
}
//#endregion
//#region src/runtime/assetImageWork.ts
function Qu(e) {
	let t = /* @__PURE__ */ new Map(), n = [], r = new AbortController(), i = e.now ?? (() => Date.now()), a = 0, o = (r, i) => (t.set(r, i), r.then(() => t.delete(r), (a) => {
		t.delete(r);
		let o = /* @__PURE__ */ Error(`${i}: ${a instanceof Error ? a.message : String(a)}`);
		n.push(o), e.report(o, "image work");
	}), r);
	return {
		load(e, t) {
			return a++, o(Promise.resolve().then(t), `image ${e}`);
		},
		callback(t, n, r) {
			let i = a, s = n();
			if (s && typeof s.then == "function") {
				let n = Promise.resolve(s);
				r && a !== i ? o(n, `callback ${t}`) : n.catch((n) => e.report(n, t));
			}
			return s;
		},
		async drain(a = i() + (e.timeoutMs ?? 5e3)) {
			for (; t.size;) {
				if (r.signal.aborted) throw r.signal.reason;
				let n = [...t.values()].join(", "), o = Promise.allSettled([...t.keys()]);
				await new Promise((t, s) => {
					let c, l = () => {
						e.cancel(c), r.signal.removeEventListener("abort", u);
					}, u = () => {
						l(), s(r.signal.reason);
					};
					c = e.schedule(() => {
						let e = /* @__PURE__ */ Error(`Timed out waiting for ${n} for export.`);
						l(), r.abort(e), s(e);
					}, Math.max(0, a - i())), r.signal.addEventListener("abort", u, { once: !0 }), o.then(() => {
						l(), t();
					});
				});
			}
			if (r.signal.aborted) throw r.signal.reason;
			if (n.length) throw n[0];
		},
		dispose() {
			r.abort(/* @__PURE__ */ Error("Image export work cancelled."));
		}
	};
}
//#endregion
//#region src/core/remoteResourceValidation.ts
function $u(e) {
	return typeof e == "string" && /^sha384-[A-Za-z0-9+/]{64}$/.test(e);
}
function ed(e) {
	if (typeof e != "string" || !e || e.length > 8192 || /[\x00-\x20\x7f]/.test(e)) throw Error("Enter a valid HTTPS resource URL.");
	let t = new URL(e), n = t.hostname.toLowerCase().replace(/\.$/, "");
	if (t.protocol !== "https:" || t.username || t.password || !n.includes(".") || n.startsWith("[") || /^\d+\.\d+\.\d+\.\d+$/.test(n) || n.split(".").some((e) => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(e)) || /(?:^|\.)(localhost|local|internal|lan|home|test|invalid|example|onion)$/.test(n) || n === "home.arpa" || n.endsWith(".home.arpa")) throw Error("Resource URLs must use HTTPS and a public domain without credentials.");
	return t.hostname = n, t.hash = "", t.href;
}
function td(e) {
	if (!e || ![
		"script",
		"style",
		"font",
		"image",
		"data"
	].includes(e.kind)) throw Error("Unsupported resource kind.");
	if (ed(e.url) !== e.url) throw Error("The resource URL must be its canonical final HTTPS URL.");
	if (!e.origin || typeof e.approvedAt != "string" || e.approvedAt.length > 64 || !Number.isFinite(Date.parse(e.approvedAt))) throw Error("Resource approval is required.");
	if (e.varyByClient !== void 0 && typeof e.varyByClient != "boolean") throw Error("Invalid resource Vary metadata.");
	if (ma(e.origin), ed(e.origin.url), ed(e.origin.finalUrl) !== e.url) throw Error("Resource provenance does not match its final URL.");
	if ((e.kind === "script" || e.kind === "style") && !$u(e.hash)) throw Error("The resource requires one canonical sha384 SRI hash.");
}
//#endregion
//#region src/runtime/remoteResources.ts
function nd(e, t, n = []) {
	let r = [], i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let e of t) {
		if (e.kind !== "script" && e.kind !== "style") continue;
		let t = `${e.kind}:${e.url}`;
		try {
			if (o.has(t)) throw Error("Duplicate declaration.");
			o.add(t), td(e), r.push(e);
		} catch (t) {
			i.push(`External ${e.kind} ${e.url}: ${String(t)}`);
		}
		for (let t of [e.url, e.origin?.url]) if (t) try {
			let n = `${e.kind}:${ed(t)}`;
			a.has(n) && a.get(n) !== e && i.push(`Ambiguous external resource alias: ${t}`), a.set(n, e);
		} catch {}
	}
	for (let e of n) for (let t of [e.url, e.finalUrl]) try {
		let n = ed(t), r = `script:${n}`;
		a.has(r) && a.get(r)?.origin !== e && i.push(`External Script ${n} is already provided by a selected embedded library.`), a.set(r, {
			kind: "script",
			url: n,
			origin: e
		});
	} catch {}
	if (!a.size) return {
		html: e,
		resources: r,
		errors: i
	};
	let s = [], c = (e) => {
		if (!("tagName" in e)) {
			"childNodes" in e && e.childNodes.forEach(c);
			return;
		}
		if (e.tagName === "template") return;
		let t = new Map(e.attrs.map((e) => [e.name, e.value])), n = e.tagName === "link" && (t.get("rel") ?? "").toLowerCase().split(/\s+/).includes("stylesheet"), r = e.tagName === "script" ? "script" : n ? "style" : null, o = r === "script" ? t.get("src") : r === "style" ? t.get("href") : void 0;
		if (r && o !== void 0) {
			let n;
			try {
				n = ed(o);
			} catch {}
			if (n && a.has(`${r}:${n}`)) {
				let a = (t.get("type") ?? "").toLowerCase().trim();
				(r === "script" ? a && ![
					"text/javascript",
					"application/javascript",
					"text/ecmascript",
					"application/ecmascript"
				].includes(a) || t.has("async") || t.has("defer") || t.has("nomodule") : a && a !== "text/css" || t.has("disabled") || t.get("media") && t.get("media") !== "all") && i.push(`External ${r} ${n}: unsupported authored tag attributes. Use an ordered classic Script or unconditional stylesheet.`);
				let o = e.sourceCodeLocation;
				o && s.push({
					start: o.startOffset,
					end: o.endOffset
				});
			} else !n && !/^[a-z][a-z0-9+.-]*:/i.test(o) && i.push(`External ${r} ${o}: use an absolute HTTPS URL; relative resource URLs are not inferred.`);
		}
		"childNodes" in e && e.childNodes.forEach(c);
	};
	c(Ou(e, { sourceCodeLocationInfo: !0 }));
	for (let t of s.sort((e, t) => t.start - e.start)) e = e.slice(0, t.start) + e.slice(t.end);
	return {
		html: e,
		resources: r,
		errors: i
	};
}
function rd(e, t, n, r, i = 1e4) {
	let a = !1, o = !1, s = e.map((e) => {
		let t, n;
		return {
			resource: e,
			promise: new Promise((e, r) => {
				t = e, n = r;
			}),
			resolve: t,
			reject: n,
			settled: !1
		};
	}), c, l = (e) => {
		if (!(a || o)) {
			o = !0, c !== void 0 && n.cancel(c), r(e);
			for (let t of s) t.settled || (t.settled = !0, t.reject(Error(e)));
		}
	}, u = Promise.all(s.map((e) => e.promise)).then(() => {
		if (c !== void 0 && n.cancel(c), o) throw Error(t[0] ?? "External resource preparation failed.");
	});
	return u.catch(() => void 0), t.length ? l(t.join("\n")) : s.length && (c = n.schedule(() => {
		let e = s.find((e) => !e.settled);
		l(`External ${e.resource.kind} ${e.resource.url}: loading timed out (network, CORS, CSP or integrity).`);
	}, i)), {
		ready: u,
		fail: l,
		get failed() {
			return o;
		},
		complete(e, t) {
			let n = s[e];
			if (!(!n || n.settled || a || o)) {
				if (!t) {
					l(`External ${n.resource.kind} ${n.resource.url}: failed to load (network, CORS, CSP or integrity).`);
					return;
				}
				n.settled = !0, n.resolve();
			}
		},
		dispose() {
			a = !0, c !== void 0 && n.cancel(c);
			for (let e of s) e.settled || (e.settled = !0, e.reject(/* @__PURE__ */ Error("External resource preparation disposed.")));
		}
	};
}
//#endregion
//#region src/runtime/p5GlobalAdapter.ts
function id(e) {
	let t = window, n = ["1.11.1", "1.11.11"], r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o, s, c = !1, l = !1, u = !1, d, f = 0, p = e.context, m, h, g, _, v = (e) => {
		throw Error("MacroFlush p5: " + e);
	}, y = (e) => {
		a.has(e) || (a.add(e), console.warn("MacroFlush p5: " + e));
	}, b = (e) => !!(e && Number.isFinite(e.fps) && e.fps > 0 && Number.isFinite(e.compositionWidth) && e.compositionWidth > 0 && Number.isFinite(e.compositionHeight) && e.compositionHeight > 0), x = (e, t) => s._setProperty(e, t), S = [
		"keydown",
		"keypress",
		"keyup",
		"mousedown",
		"mousemove",
		"mouseup",
		"click",
		"dblclick",
		"wheel",
		"mouseover",
		"mouseout",
		"touchstart",
		"touchmove",
		"touchend",
		"devicemotion",
		"deviceorientation",
		"focus",
		"blur",
		"resize"
	], C = (t) => {
		e.input?.owns(t) || t.stopImmediatePropagation();
	}, w = [
		"mouseX",
		"mouseY",
		"pmouseX",
		"pmouseY",
		"winMouseX",
		"winMouseY",
		"pwinMouseX",
		"pwinMouseY",
		"movedX",
		"movedY"
	], ee = () => {
		for (let t of [
			...w,
			"keyCode",
			"accelerationX",
			"accelerationY",
			"accelerationZ",
			"pAccelerationX",
			"pAccelerationY",
			"pAccelerationZ",
			"rotationX",
			"rotationY",
			"rotationZ",
			"pRotationX",
			"pRotationY",
			"pRotationZ"
		]) (!e.input || !w.includes(t)) && x(t, 0);
		e.input || x("mouseIsPressed", !1), x("keyIsPressed", !1), x("isKeyPressed", !1), x("key", ""), x("touches", []), x("focused", !0), e.input || x("mouseButton", s.LEFT), x("deviceOrientation", s.LANDSCAPE);
	}, te = () => {
		x("windowWidth", p.compositionWidth), x("windowHeight", p.compositionHeight);
	}, ne = (e) => {
		e?.GL && i.add(e.GL);
	}, re = () => {
		let e = s?.canvas;
		e && (e.style.setProperty("width", "100%", "important"), e.style.setProperty("height", "100%", "important"), e.style.display = "block", ne(s._renderer));
	}, ie = (e, t) => {
		f = t * 1e3, x("frameCount", e), x("deltaTime", e === 0 ? 0 : 1e3 / p.fps), x("_frameRate", p.fps), x("_targetFrameRate", p.fps), ee();
	}, ae = (e, t) => {
		t && typeof t.then == "function" && v(e + "() must be synchronous in timeline mode.");
	}, oe = (e) => {
		let n = t[e];
		typeof n == "function" && (n.constructor?.name === "AsyncFunction" && v(e + "() must be synchronous in timeline mode."), t[e] = function(...t) {
			let r = n.apply(this, t);
			return ae(e, r), r;
		});
	}, se = (e) => {
		typeof t.p5 == "function" && (o && o !== t.p5 && (d = e), o = t.p5);
	};
	return {
		observeLibrary: se,
		get canvas() {
			return s?.canvas;
		},
		get logicalSize() {
			return s?.canvas ? [s.width, s.height] : void 0;
		},
		prepare() {
			if (u && v("the Clip is disposed."), s) return;
			se("authored HTML"), d && v("multiple p5 libraries were loaded (" + d + "). Keep one approved p5 global Library."), o || v("p5 is not loaded. Add an approved p5.js global Script to Clip Libraries, or an approved p5.js Online resource."), n.includes(o.VERSION) || v("unsupported p5 version " + o.VERSION + ". Use 1.11.1 or 1.11.11."), o.instance && v("p5 was already started. Remove manually created p5 instances from this global-mode Clip."), b(p) || v("the host did not provide FPS and composition dimensions."), (t.Tone || o.SoundFile || o.AudioIn) && v("Tone.js and p5.sound are not supported in timeline mode.");
			let i = o.prototype;
			for (let e of [
				"registerMethod",
				"unregisterMethod",
				"redraw",
				"randomSeed",
				"noiseSeed",
				"_updateWindowSize",
				"_createFriendlyGlobalFunctionBinder"
			]) typeof i[e] != "function" && v("unsupported p5 runtime hook: " + e);
			_ = Object.getOwnPropertyDescriptors(t), delete t.clip;
			for (let e of S) t.addEventListener(e, C, !0);
			let a = this;
			g = function() {
				s = o.instance ?? this;
				for (let e of [
					"_setup",
					"_start",
					"_draw",
					"_setProperty",
					"remove"
				]) typeof s[e] != "function" && v("unsupported p5 instance hook: " + e);
				m = i.redraw.bind(s), h = s.remove.bind(s), x("_start", () => void 0), x("_draw", () => void 0), x("_loop", !1);
			}, i.registerMethod("init", g);
			try {
				new o(), (!s || !m || !h) && v("the p5 initialization hook did not execute."), e.input?.attach(s), x("_updateWindowSize", te), x("_pixelDensity", 1), x("_maxAllowedPixelDimensions", 1), te(), ie(0, 0), x("millis", () => f), x("keyIsDown", () => !1), x("frameRate", (e) => (e !== void 0 && e !== p.fps && y("frameRate() cannot change the Master Timeline FPS."), e === void 0 ? p.fps : s)), x("setFrameRate", (e) => s.frameRate(e)), x("getFrameRate", () => p.fps), x("getTargetFrameRate", () => p.fps), x("loop", () => y("loop() cannot start a self-driven loop; the Master Timeline drives draw().")), x("noLoop", () => x("_loop", !1)), x("redraw", () => y("redraw() is host-controlled; draw() runs once per Master Timeline tick.")), x("remove", () => a.dispose());
				let n = s.clip.bind(s);
				t.clip = new Proxy((...e) => n(...e), {
					get(t, n, r) {
						return typeof n == "symbol" || [
							"call",
							"apply",
							"bind"
						].includes(String(n)) ? Reflect.get(t, n, r) : Reflect.get(e.clip, n);
					},
					set(t, n, r) {
						return Reflect.set(e.clip, n, r);
					},
					ownKeys() {
						return Reflect.ownKeys(e.clip);
					},
					getOwnPropertyDescriptor(t, n) {
						return Reflect.getOwnPropertyDescriptor(e.clip, n);
					}
				});
				for (let e of [
					...Object.keys(s._preloadMethods),
					"httpDo",
					"httpGet",
					"httpPost",
					"createImg",
					"createVideo",
					"createAudio",
					"createCapture"
				]) x(e, () => v(e + "() is not supported. Import media into Project; p5 asset integration is not available in this version."));
				let i = s.createCanvas.bind(s);
				x("createCanvas", (...e) => {
					let t = i(...e);
					return re(), t;
				});
				let c = s.resizeCanvas.bind(s);
				x("resizeCanvas", (e, t) => {
					let n = c(e, t, !0);
					return re(), n;
				});
				for (let e of ["createGraphics", "createFramebuffer"]) {
					let t = s[e].bind(s);
					x(e, (...e) => {
						let n = t(...e);
						r.add(n), ne(n._renderer);
						let i = n.remove.bind(n);
						return n.remove = () => {
							r.delete(n), i();
						}, n;
					});
				}
				s.randomSeed(e.seed), s.noiseSeed(e.seed);
			} catch (e) {
				throw this.dispose(), e;
			} finally {
				i.unregisterMethod("init", g);
			}
		},
		validate() {
			(u || !s) && v("p5 is not prepared."), typeof t.preload == "function" && v("preload() is not supported in timeline mode."), (t.p5 !== o || o.instance !== s) && v("multiple p5 instances/libraries are not supported in global mode.");
			for (let e of [
				"setup",
				"draw",
				"windowResized"
			]) oe(e);
			l = !0;
		},
		prepareFrame(e) {
			this.render(e, !0);
		},
		drawFrame(t) {
			(u || !l || !c) && v("p5 frame is not prepared."), ie(Math.max(0, Math.floor(t.frame)), t.time), m(), re(), e.markDirty();
		},
		render(n, r = !1) {
			(u || !l) && v("p5 startup failed or the Clip was disposed.");
			let i = {
				fps: n.fps,
				compositionWidth: n.compositionWidth,
				compositionHeight: n.compositionHeight
			};
			(!b(i) || !Number.isFinite(n.time) || !Number.isFinite(n.frame)) && v("invalid timeline context.");
			let a = i.compositionWidth !== p.compositionWidth || i.compositionHeight !== p.compositionHeight;
			p = i, te(), c ? a && typeof t.windowResized == "function" && t.windowResized() : (ie(0, 0), e.beforeSetup?.(n), s._setup(), s._setupDone || v("setup did not complete."), c = !0, e.afterSetup?.(n)), ie(Math.max(0, Math.floor(n.frame)), n.time), !r && (m(), re(), e.markDirty());
		},
		dispose() {
			if (u) return;
			u = !0;
			for (let e of S) t.removeEventListener(e, C, !0);
			try {
				e.input?.dispose();
			} catch {}
			for (let e of [...r]) try {
				e.remove();
			} catch {}
			r.clear();
			let n = s ? /* @__PURE__ */ new Set([...Object.keys(o.prototype), ...Object.keys(s)]) : /* @__PURE__ */ new Set();
			try {
				h?.();
			} finally {
				for (let e of i) try {
					e.getExtension("WEBGL_lose_context")?.loseContext();
				} catch {}
				i.clear();
				for (let e of n) _?.[e] && Object.defineProperty(t, e, _[e]);
				t.clip = e.clip;
			}
		}
	};
}
//#endregion
//#region src/runtime/p5IsolatedGuards.ts
function ad(e, t) {
	let n = window, r = n.p5.instance, i = /* @__PURE__ */ new Map(), a = Symbol("main canvas"), o = !1, s = (t) => {
		throw Object.assign(/* @__PURE__ */ Error(`P5 replay ${e}: ${t} is unsupported in isolated 2D mode; use timeline mode.`), { p5ReplayCode: "unsupported-api" });
	}, c = () => {
		let e = 0;
		for (let t of i.values()) e += Math.floor(t.width * t.density) * Math.floor(t.height * t.density);
		return {
			surfaces: i.size,
			pixels: e,
			accountedBytes: e * 8
		};
	}, l = (n, r, a) => {
		[
			r.width,
			r.height,
			r.density
		].every((e) => Number.isFinite(e) && e > 0 && e <= 16384) || s("invalid canvas dimensions/density");
		let o = i.get(n);
		i.set(n, r);
		try {
			let n = c();
			if (n.pixels > t.maxPixelsPerRealm || n.accountedBytes > t.maxAccountedBytesPerRealm || n.surfaces > 128) throw Object.assign(/* @__PURE__ */ Error(`P5 replay ${e}: allocation-budget exceeded before canvas allocation.`), { p5ReplayCode: "allocation-budget" });
			return a();
		} catch (e) {
			throw o ? i.set(n, o) : i.delete(n), e;
		}
	}, u = (e, t, n) => {
		let r = e.resizeCanvas.bind(e), i = e.pixelDensity.bind(e);
		n("resizeCanvas", (n, i, ...a) => l(t, {
			width: n,
			height: i,
			density: e._pixelDensity
		}, () => r(n, i, ...a))), n("pixelDensity", (n) => n === void 0 ? i() : l(t, {
			width: e.width,
			height: e.height,
			density: n
		}, () => i(n))), n("createFramebuffer", () => s("createFramebuffer()"));
	}, d = r.createCanvas.bind(r);
	r._setProperty("createCanvas", (e, t, n, i) => ((n !== void 0 && n !== r.P2D || i !== void 0) && s("createCanvas(WEBGL/external canvas)"), l(a, {
		width: e,
		height: t,
		density: r._pixelDensity
	}, () => d(e, t, n)))), u(r, a, (e, t) => r._setProperty(e, t));
	let f = r.createGraphics.bind(r);
	r._setProperty("createGraphics", (e, t, n, a) => {
		(n !== void 0 && n !== r.P2D || a !== void 0) && s("createGraphics(WEBGL/external canvas)");
		let o = {}, c = l(o, {
			width: e,
			height: t,
			density: r._pixelDensity
		}, () => f(e, t, n)), d = i.get(o);
		i.delete(o), i.set(c, d), u(c, c, (e, t) => {
			c[e] = t;
		});
		let p = c.remove.bind(c);
		return c.remove = () => {
			i.delete(c), p();
		}, c;
	});
	for (let e of /* @__PURE__ */ "onFrame.onEnter.onBeat.onCue.onEvent.add.data.feedback.assetSvg.assetImage.assetImageLoad.assetTexture.assetTextureLoad.useScript.go.sendOsc.audioBand.audioSpectrum.audioPeaks.audioSpectrogram.audioStem.audioStemPeaks.audioStemSpectrogram.fetch.XMLHttpRequest.WebSocket.Worker".split(".")) n[e] = function() {
		return s(e + "()");
	};
	let p = n.clip, m = /* @__PURE__ */ new WeakMap(), h = (e) => !e || typeof e != "object" ? e : (m.has(e) || m.set(e, new Proxy(e, {
		get: (e, t) => h(Reflect.get(e, t)),
		set: () => s("nested parameter write"),
		deleteProperty: () => s("nested parameter removal"),
		defineProperty: () => s("nested parameter definition")
	})), m.get(e));
	return n.clip = new Proxy(p, {
		get(e, t, n) {
			if (t === "use") return (t, ...n) => (t !== "p5" && s("clip.use(" + t + ")"), e.use(t, ...n));
			if (["getParam", "setParam"].includes(String(t))) return () => s("clip." + String(t));
			if (t === "defineParams") return (...t) => (o && s("clip.defineParams() after setup"), e.defineParams(...t));
			let r = Reflect.get(e, t, n);
			return o ? h(r) : r;
		},
		set(e, t, n) {
			return o && s("clip." + String(t) + " parameter write"), Reflect.set(e, t, n);
		}
	}), n.comp = new Proxy({}, {
		get: () => s("comp parameter access"),
		set: () => s("comp parameter write")
	}), {
		seal() {
			o = !0;
		},
		accounting: c
	};
}
//#endregion
//#region src/runtime/vendor/feedback.global.js?raw
var od = "\"use strict\";var MacroFlushFeedbackKernel=(()=>{var T=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var te=(e,r,n)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var re=(e,r)=>{for(var n in r)T(e,n,{get:r[n],enumerable:!0})},ae=(e,r,n,l)=>{if(r&&typeof r==\"object\"||typeof r==\"function\")for(let c of ee(r))!ne.call(e,c)&&c!==n&&T(e,c,{get:()=>r[c],enumerable:!(l=Z(r,c))||l.enumerable});return e};var oe=e=>ae(T({},\"__esModule\",{value:!0}),e);var M=(e,r,n)=>te(e,typeof r!=\"symbol\"?r+\"\":r,n);var se={};re(se,{FEEDBACK_LIMITS:()=>f,createFeedbackDeliveryCursor:()=>G,createFeedbackInputIndex:()=>Q,createFeedbackSampler:()=>X,planFeedbackInput:()=>W,validateFeedbackDeliveryContext:()=>B});var f=Object.freeze({maxAssetBytes:16777216,maxProjectBytes:67108864,maxAssets:64,maxChannels:32,maxRecords:5e5,maxDurationUs:36e8,maxStringBytes:1024,maxRecordBytes:16384,maxArgs:16,maxValue:1e9,maxEventsPerTick:4096,maxLoopBoundariesPerTick:16,maxPointerHz:120,maxOscMessagesPerSecond:1e3,maxPageRecords:1e3,maxPageBytes:1048576,maxResourceCloneBytes:67108864,maxJsonDepth:32}),N=Object.freeze({offset:0,rate:1,loop:!1}),b=class extends Error{constructor(n,l,c={}){super(`Feedback: ${l}`);M(this,\"code\");M(this,\"assetId\");M(this,\"channelId\");this.name=\"FeedbackError\",this.code=n,this.assetId=c.assetId,this.channelId=c.channelId}};function D(e){return e.kind===\"pointer\"||e.kind===\"number\"||e.kind===\"osc\"}var J=new TextEncoder,ie=new Set([\"move\",\"down\",\"up\",\"enter\",\"leave\",\"cancel\",\"click\",\"double-click\",\"wheel\"]);var de=new Set([\"__proto__\",\"prototype\",\"constructor\"]);function s(e,r){throw new b(e,r)}function A(e,r){return(!e||typeof e!=\"object\"||Array.isArray(e))&&s(\"invalid-format\",`${r} must be an object.`),e}function E(e,r,n){Object.keys(e).some(l=>!r.includes(l))&&s(\"invalid-format\",`${n} contains an unknown field.`)}function j(e,r){(typeof e!=\"string\"||!e.trim()||e.includes(\"\\0\")||J.encode(e).length>f.maxStringBytes)&&s(\"invalid-value\",`${r} must be a non-empty string of at most ${f.maxStringBytes} UTF-8 bytes.`)}function O(e,r){(typeof e!=\"number\"||!Number.isFinite(e)||Math.abs(e)>f.maxValue)&&s(\"invalid-value\",`${r} is out of range.`)}function $(e,r,n,l){(typeof e!=\"number\"||!Number.isSafeInteger(e)||e<r||e>n)&&s(\"invalid-time\",`${l} must be an integer in range.`)}function K(e,r){O(e.x,`${r}.x`),O(e.y,`${r}.y`),(typeof e.buttons!=\"number\"||!Number.isInteger(e.buttons)||e.buttons<0||e.buttons>31||typeof e.inside!=\"boolean\")&&s(\"invalid-value\",`${r} has invalid buttons/inside.`)}function L(e){return Array.isArray(e)?((!e.length||e.length>f.maxArgs)&&s(\"invalid-value\",\"Numeric vectors require 1..16 values.\"),e.forEach(r=>O(r,\"Numeric vector value\")),e):(O(e,\"Numeric value\"),e)}function z(e,r=f.maxAssetBytes){let n=0,l=new Set,c=u=>{n+=u,n>r&&s(\"size-limit\",`JSON exceeds ${r} bytes.`)},C=u=>{u.length>r-n&&s(\"size-limit\",`JSON exceeds ${r} bytes.`),c(J.encode(JSON.stringify(u)).length)},h=(u,v)=>{if(v>f.maxJsonDepth&&s(\"size-limit\",\"JSON nesting is too deep.\"),u===null){c(4);return}if(typeof u==\"string\"){C(u);return}if(typeof u==\"boolean\"){c(u?4:5);return}if(typeof u==\"number\"&&Number.isFinite(u)){c(JSON.stringify(u).length);return}(!u||typeof u!=\"object\")&&s(\"invalid-format\",\"Expected finite, plain JSON data.\"),l.has(u)&&s(\"invalid-format\",\"JSON contains a cycle.\");let i=Object.getPrototypeOf(u);if((Array.isArray(u)?i!==Array.prototype:i!==Object.prototype&&i!==null)&&s(\"invalid-format\",\"JSON must use plain objects/arrays.\"),Object.getOwnPropertySymbols(u).length&&s(\"invalid-format\",\"JSON cannot contain symbol keys.\"),l.add(u),c(2),Array.isArray(u)){u.length>f.maxRecords&&s(\"size-limit\",\"JSON array exceeds the record limit.\"),Object.getOwnPropertyNames(u).length!==u.length+1&&s(\"invalid-format\",\"JSON arrays cannot have holes or extra properties.\");for(let o=0;o<u.length;o++){o&&c(1);let t=Object.getOwnPropertyDescriptor(u,String(o));(!t||!t.enumerable||!(\"value\"in t))&&s(\"invalid-format\",\"JSON cannot contain accessors or sparse arrays.\"),h(t.value,v+1)}}else Object.getOwnPropertyNames(u).forEach((t,m)=>{de.has(t)&&s(\"invalid-format\",\"JSON contains a reserved object key.\");let d=Object.getOwnPropertyDescriptor(u,t);(!d.enumerable||!(\"value\"in d))&&s(\"invalid-format\",\"JSON cannot contain accessors or hidden fields.\"),m&&c(1),C(t),c(1),h(d.value,v+1)});l.delete(u)};return h(e,0),n}function _(e){return e&&typeof e==\"object\"&&(Object.values(e).forEach(_),Object.freeze(e)),e}function H(e){let r=z(e),n=A(e,\"Feedback document\");E(n,[\"formatVersion\",\"timeUnit\",\"durationUs\",\"source\",\"channels\"],\"Feedback document\"),n.formatVersion!==1&&s(\"unsupported-version\",\"Only Feedback formatVersion 1 is supported.\"),n.timeUnit!==\"us\"&&s(\"invalid-time\",\"Feedback timeUnit must be us.\"),$(n.durationUs,0,f.maxDurationUs,\"durationUs\");let l=n.durationUs,c=A(n.source,\"source\");E(c,[\"compositionId\",\"width\",\"height\"],\"source\"),O(c.width,\"source.width\"),O(c.height,\"source.height\"),(c.width<1||c.height<1)&&s(\"invalid-value\",\"Source dimensions must be at least one logical pixel.\"),c.compositionId!==void 0&&j(c.compositionId,\"source.compositionId\"),Array.isArray(n.channels)||s(\"invalid-format\",\"Feedback requires a channels array.\"),n.channels.length>f.maxChannels&&s(\"size-limit\",\"Feedback requires at most 32 channels.\");let C=new Set,h=new Set,u=[],v=0,i=n.channels.map(o=>{let t=A(o,\"channel\");j(t.id,\"channel.id\"),j(t.kind,\"channel.kind\"),C.has(t.id)&&s(\"invalid-format\",`Duplicate channel ${t.id}.`),C.add(t.id);let m=[\"pointer\",\"number\",\"osc\"].includes(t.kind);if(!m)return t.records!==void 0&&!Array.isArray(t.records)&&s(\"invalid-format\",`Unknown channel ${t.id} has invalid records.`),v+=Array.isArray(t.records)?t.records.length:0,Array.isArray(t.records)&&t.records.forEach(y=>z(y,f.maxRecordBytes)),v>f.maxRecords&&s(\"size-limit\",\"Feedback exceeds 500,000 records.\"),u.push({code:\"unsupported-channel\",channelId:t.id,message:`Channel ${t.id} (${t.kind}) is retained but cannot be used.`}),{id:t.id,kind:t.kind,supported:m,records:Array.isArray(t.records)?t.records.length:0};E(t,t.kind===\"pointer\"?[\"id\",\"kind\",\"initial\",\"records\"]:t.kind===\"number\"?[\"id\",\"kind\",\"interpolation\",\"initial\",\"records\"]:[\"id\",\"kind\",\"address\",\"records\"],`Channel ${t.id}`),Array.isArray(t.records)||s(\"invalid-format\",`Channel ${t.id} requires records.`),v+=t.records.length,v>f.maxRecords&&s(\"size-limit\",\"Feedback exceeds 500,000 records.\");let d=-1;if(t.kind===\"pointer\"){let y=A(t.initial,\"pointer.initial\");E(y,[\"x\",\"y\",\"buttons\",\"inside\"],\"pointer.initial\"),K(y,\"pointer.initial\")}else if(t.kind===\"number\"){t.interpolation!==\"linear\"&&t.interpolation!==\"hold\"&&s(\"invalid-value\",\"Numeric interpolation must be linear or hold.\");let y=L(t.initial);d=Array.isArray(y)?y.length:-1}else j(t.address,\"OSC address\"),t.address.startsWith(\"/\")||s(\"invalid-value\",\"OSC address must start with /.\");let F=-1,g=-1;for(let y of t.records){let a=A(y,`Channel ${t.id} record`);if(z(a,f.maxRecordBytes),$(a.t,0,l,`Channel ${t.id} time`),$(a.seq,0,Number.MAX_SAFE_INTEGER,`Channel ${t.id} seq`),(a.t<F||a.seq<=g||h.has(a.seq))&&s(\"invalid-time\",`Channel ${t.id} has unordered or duplicate records.`),h.add(a.seq),F=a.t,g=a.seq,t.kind===\"pointer\"){E(a,[\"t\",\"seq\",\"x\",\"y\",\"buttons\",\"inside\",\"event\",\"button\",\"deltaX\",\"deltaY\"],\"pointer record\"),K(a,\"pointer record\"),a.event!==null&&(typeof a.event!=\"string\"||!ie.has(a.event))&&s(\"invalid-value\",\"Invalid pointer event.\");let k=[\"down\",\"up\",\"click\",\"double-click\"].includes(String(a.event));(k||a.button!==void 0)&&(typeof a.button!=\"number\"||!Number.isInteger(a.button)||a.button<0||a.button>4)&&s(\"invalid-value\",\"Invalid pointer button.\"),!k&&a.button!==void 0&&s(\"invalid-value\",\"Only button events may contain button.\"),(a.event===\"down\"&&!(a.buttons&[1,4,2,8,16][a.button])||a.event===\"up\"&&a.buttons&[1,4,2,8,16][a.button]||a.event===\"cancel\"&&a.buttons!==0||a.event===\"enter\"&&a.inside!==!0||a.event===\"leave\"&&a.inside!==!1)&&s(\"invalid-value\",\"Pointer event/state disagree.\"),a.event===\"wheel\"?(O(a.deltaX,\"deltaX\"),O(a.deltaY,\"deltaY\")):(a.deltaX!==void 0||a.deltaY!==void 0)&&s(\"invalid-value\",\"Only wheel events may contain deltas.\")}else if(t.kind===\"number\"){E(a,[\"t\",\"seq\",\"value\"],\"number record\");let k=L(a.value);(Array.isArray(k)?k.length:-1)!==d&&s(\"invalid-value\",\"Numeric values must have a fixed shape.\")}else{E(a,[\"t\",\"seq\",\"args\"],\"OSC record\"),(!Array.isArray(a.args)||a.args.length>f.maxArgs)&&s(\"invalid-value\",\"OSC requires at most 16 args.\");for(let k of a.args)typeof k==\"number\"?O(k,\"OSC arg\"):typeof k==\"string\"?(k.includes(\"\\0\")||J.encode(k).length>f.maxStringBytes)&&s(\"invalid-value\",\"OSC string is too large or contains NUL.\"):typeof k!=\"boolean\"&&s(\"invalid-value\",\"OSC args must be numbers, strings or booleans.\")}}return{id:t.id,kind:t.kind,supported:m,records:t.records.length}});return _({document:JSON.parse(JSON.stringify(e)),summary:{bytes:r,duration:n.durationUs/1e6,records:v,channels:i},warnings:u})}function q(e=N,r){let n=A(e,\"mapping\");E(n,[\"offset\",\"rate\",\"loop\"],\"mapping\"),(typeof n.offset!=\"number\"||!Number.isFinite(n.offset)||Math.abs(n.offset)>3600||typeof n.rate!=\"number\"||!Number.isFinite(n.rate)||Math.abs(n.rate)>16||typeof n.loop!=\"boolean\")&&s(\"invalid-time\",\"Mapping requires offset (-3600..3600), rate (-16..16), and loop.\"),n.loop&&r&&(r.durationUs||s(\"invalid-time\",\"Cannot loop an empty Feedback duration.\"),r.channels.some(l=>D(l)&&l.records.some(c=>c.t===r.durationUs&&(l.kind===\"osc\"||l.kind===\"pointer\"&&\"event\"in c&&c.event!==null)))&&s(\"invalid-time\",\"Looping Feedback cannot contain an event at its exact endpoint.\"))}function P(e){let r=Math.round(e*1e6);if(!Number.isFinite(e)||!Number.isSafeInteger(r))throw new b(\"invalid-time\",\"Time must be finite seconds within the safe microsecond range.\");return r}function V(e,r,n=N){if(q(n),!Number.isFinite(e))throw new b(\"invalid-time\",\"Clip-local time must be finite seconds.\");if(!Number.isSafeInteger(r)||r<0||r>f.maxDurationUs)throw new b(\"invalid-time\",\"Invalid Feedback duration.\");let l=P(e*n.rate+n.offset);if(n.loop){if(!r)throw new b(\"invalid-time\",\"Cannot loop an empty Feedback duration.\");return(l%r+r)%r}return Math.min(r,Math.max(0,l))}function U(e,r){let n=0,l=e.length;for(;n<l;){let c=Math.floor((n+l)/2);e[c].t<=r?n=c+1:l=c}return n}function X(e){let r=H(e),n=r.document,l=n.channels.some(i=>D(i)&&i.records.some(o=>o.t===n.durationUs&&(i.kind===\"osc\"||i.kind===\"pointer\"&&\"event\"in o&&o.event!==null))),c=new Map(n.channels.map(i=>[i.id,i])),C=i=>{let o=c.get(i);if(!o)throw new b(\"missing-channel\",`Channel ${i} is missing.`,{channelId:i});if(!D(o))throw new b(\"unsupported-channel\",`Channel ${i} (${o.kind}) cannot be read.`,{channelId:i});return o},h=(i,o)=>{let t=i.space??\"composition\";if(t===\"composition\")return[1,1];if(t===\"normalized\")return[1/n.source.width,1/n.source.height];if(t!==\"clip\"||!o||![o.clipWidth,o.clipHeight].every(m=>Number.isFinite(m)&&m>0&&m<=f.maxValue))throw new b(\"invalid-value\",\"Clip space requires positive logical Clip dimensions.\");return[o.clipWidth/n.source.width,o.clipHeight/n.source.height]},u=(i,o,t)=>{let[m,d]=h(o,t);return{kind:\"pointer\",x:i.x*m,y:i.y*d,buttons:i.buttons,inside:i.inside}},v=(i,o,t={},m)=>{let d=C(i);if(d.kind!==\"pointer\"&&t.space!==void 0)throw new b(\"invalid-value\",\"Only pointer channels accept a coordinate space.\");let F=U(d.records,o)-1;if(d.kind===\"osc\"){let p=d.records[F];return p?{kind:\"osc\",address:d.address,args:[...p.args]}:null}let g=d.records[F],y=d.records[F+1],a=y?Math.max(0,Math.min(1,(o-(g?.t??0))/Math.max(1,y.t-(g?.t??0)))):0;if(d.kind===\"pointer\"){let p=d.records[F]??d.initial,w=d.records[F+1],I=w&&p.inside&&w.inside&&w.event!==\"cancel\"&&!(\"event\"in p&&p.event===\"cancel\");return u({...p,x:I?p.x+(w.x-p.x)*a:p.x,y:I?p.y+(w.y-p.y)*a:p.y},t,m)}let k=d.records[F]?.value??d.initial,x=d.records[F+1]?.value,S=(p,w)=>d.interpolation===\"linear\"?p+(w-p)*a:p;return{kind:\"number\",value:Array.isArray(k)?k.map((p,w)=>x===void 0?p:S(p,x[w])):x===void 0?k:S(k,x)}};return{document:n,summary:r.summary,warnings:r.warnings,validateMapping(i){if(q(i),i.loop&&(!n.durationUs||l))throw new b(\"invalid-time\",\"Cannot loop empty Feedback or an endpoint event.\")},at(i,o,t={},m){return v(i,Math.min(n.durationUs,Math.max(0,P(o))),t,m)},sample(i,o,t=N,m={},d){if(q(t),t.loop&&l)throw new b(\"invalid-time\",\"Looping Feedback cannot contain an event at its exact endpoint.\");return v(i,V(o,n.durationUs,t),m,d)},events(i,o,t,m={},d){if(o>t)throw new b(\"invalid-time\",\"Event range must be ascending.\");let F=P(o),g=P(t),y=C(i);if(y.kind!==\"pointer\"&&m.space!==void 0)throw new b(\"invalid-value\",\"Only pointer channels accept a coordinate space.\");y.kind===\"pointer\"&&h(m,d);let a=[];if(y.kind===\"number\")return a;let k=U(y.records,F),x=U(y.records,g);for(let S=k;S<x;S++){let R=y.records[S];if(y.kind===\"pointer\"){let p=y.records[S];if(p.event===null)continue;let[w,I]=h(m,d);a.push({...u(p,m,d),channelId:i,time:p.t/1e6,seq:p.seq,event:p.event,...p.button===void 0?{}:{button:p.button},...p.deltaX===void 0?{}:{deltaX:p.deltaX*w},...p.deltaY===void 0?{}:{deltaY:p.deltaY*I}})}else a.push({kind:\"osc\",channelId:i,time:R.t/1e6,seq:R.seq,address:y.address,args:[...y.records[S].args]});if(a.length>f.maxEventsPerTick)throw new b(\"event-budget\",`Channel ${i} exceeds the event limit; request a smaller interval.`,{channelId:i})}return a}}}function Y(e,r){if(!Number.isSafeInteger(e)||e<1)throw new b(\"invalid-time\",`Invalid ${r}.`);return e}function B(e){if(!e||Object.getPrototypeOf(e)!==Object.prototype)throw new b(\"invalid-format\",\"Invalid input delivery context.\");if(Object.getOwnPropertySymbols(e).length)throw new b(\"invalid-format\",\"Invalid input delivery symbol field.\");let r=[\"transportEpoch\",\"deliveryId\",\"mode\",\"previousLocalTime\"];for(let[n,l]of Object.entries(Object.getOwnPropertyDescriptors(e)))if(!r.includes(n)||!l.enumerable||!(\"value\"in l))throw new b(\"invalid-format\",\"Invalid input delivery field.\");if(Y(e.transportEpoch,\"transport epoch\"),Y(e.deliveryId,\"delivery ID\"),e.mode===\"historical\")throw new b(\"unsupported-playback\",\"Historical input delivery requires P4.\");if(![\"sample-only\",\"continuous\"].includes(e.mode))throw new b(\"invalid-value\",\"Invalid input delivery mode.\");if(e.previousLocalTime!==void 0&&P(e.previousLocalTime),e.mode===\"continuous\"&&e.previousLocalTime===void 0)throw new b(\"invalid-time\",\"Continuous input requires a previous local time.\")}function G(){let e=0,r=0;return{consume(n){if(B(n),n.transportEpoch<e||n.transportEpoch===e&&n.deliveryId<r)throw new b(\"invalid-time\",\"Stale input delivery.\");return n.transportEpoch===e&&n.deliveryId===r?!1:(e=n.transportEpoch,r=n.deliveryId,!0)}}}function W(e){let{sampler:r,binding:n,time:l,fps:c,coordinates:C,delivery:h}=e,u={offset:n.offset,rate:n.rate,loop:n.loop};if(P(l),!Number.isFinite(c)||c<=0)throw new b(\"invalid-value\",\"Input requires a positive FPS.\");h&&B(h),r.validateMapping(u);let v=h?Object.freeze({...h}):void 0;if(n.pointerChannelId===void 0)return Object.freeze({current:null,previousNominal:null,events:Object.freeze([]),delivery:v});let i=n.pointerChannelId,o={space:n.space},t=y=>{let a=r.sample(i,y,u,o,C);if(!a||a.kind!==\"pointer\")throw new b(\"unsupported-channel\",`Channel ${i} is not pointer input.`,{channelId:i});return Object.freeze(a)},m=t(l),d=t(Math.max(0,l-1/c)),F=[],g=(y,a,k)=>{for(let x of r.events(i,y/1e6,a/1e6,o,C)){if(x.kind!==\"pointer\")throw new b(\"unsupported-channel\",\"Only pointer events can be standard input.\");if(F.length>=f.maxEventsPerTick)throw new b(\"event-budget\",\"Input interval exceeds the event limit.\",{channelId:i});F.push(Object.freeze({cycle:k,event:Object.freeze(x)}))}};if(h?.mode===\"continuous\"&&n.rate>0){let y=h.previousLocalTime;if(y>l)throw new b(\"invalid-time\",\"Continuous input cannot move backwards.\");let a=P(y*n.rate+n.offset),k=P(l*n.rate+n.offset);if(!n.loop)g(a,k,0);else if(k>a){let x=r.document.durationUs,S=Math.floor(a/x),p=Math.floor(k/x)-S;if(p>f.maxLoopBoundariesPerTick)throw new b(\"event-budget\",\"Input interval exceeds the loop-boundary limit.\",{channelId:i});let w=I=>(I%x+x)%x;for(let I=0;I<=p;I++)g(I===0?w(a):-1,I===p?w(k):x-1,S+I)}}return Object.freeze({current:m,previousNominal:d,events:Object.freeze(F),delivery:v})}function Q(e,r){let n=e.document.channels.find(o=>o.id===r);if(!n||n.kind!==\"pointer\")throw new b(\"unsupported-channel\",\"Standard input requires a pointer channel.\");let l=n,c=l.records.filter(o=>o.event!==null),C=c.filter(o=>o.event===\"down\"),h=new Map,u=l.initial;for(let o of c)h.set(o.seq,u),u=o;let v=(o,t,m)=>{let d=e.document.source,F=t===\"clip\"?m.clipWidth/d.width:t===\"normalized\"?1/d.width:1,g=t===\"clip\"?m.clipHeight/d.height:t===\"normalized\"?1/d.height:1;return{...o,x:o.x*F,y:o.y*g}},i=(o,t)=>{let m=0,d=C.length;for(;m<d;){let F=Math.floor((m+d)/2),g=C[F];g.t<o||g.t===o&&g.seq<=t?m=F+1:d=F}return C[m-1]?.button??0};return{previous(o,t,m){let d=h.get(o);if(!d)throw new b(\"invalid-value\",\"Input event is not in the recording.\");return v(d,t,m)},eventButton(o){return i(o.t,o.seq)},button(o,t){return i(V(o,e.document.durationUs,{offset:t.offset,rate:t.rate,loop:t.loop}),1/0)}}}return oe(se);})();\n";
//#endregion
//#region src/runtime/feedbackRuntime.ts
function sd(e) {
	let t = 0, n, r = /* @__PURE__ */ new Map(), i = (t) => {
		let i = e.lookup(t), a = r.get(t);
		return n || !i || !a || i.feedbackRevision !== a.revision ? e.unavailable(t, n ?? `Feedback resource unavailable: ${i?.name ?? t}`) : (e.available(t), a);
	};
	return {
		snapshot: i,
		receive(i) {
			if (!Number.isSafeInteger(i.generation) || i.generation <= t) return !1;
			try {
				if (i.error) throw Error(i.error);
				if (!Array.isArray(i.resources) || i.resources.length > 64) throw Error("Feedback: Invalid resource snapshot.");
				let a = /* @__PURE__ */ new Map();
				for (let t of i.resources) {
					if (typeof t.assetId != "string" || typeof t.revision != "string" || a.has(t.assetId)) throw Error("Feedback: Invalid resource identity.");
					let n = r.get(t.assetId);
					a.set(t.assetId, n && n.revision === t.revision ? n : {
						revision: t.revision,
						sampler: e.sampler(t.document)
					});
				}
				return r.clear(), a.forEach((e, t) => r.set(t, e)), t = i.generation, n = void 0, !0;
			} catch (e) {
				throw t = i.generation, n = e instanceof Error ? e.message : String(e), e;
			}
		},
		reader(t, n) {
			let r = () => i(t).sampler;
			return r().validateMapping(n), {
				get duration() {
					return r().summary.duration;
				},
				get channels() {
					return r().summary.channels;
				},
				sample(t, i = {}) {
					return r().sample(t, e.time(), n, i, e.dimensions());
				},
				at(t, n, i = {}) {
					return r().at(t, n, i, e.dimensions());
				},
				events(t, n, i, a = {}) {
					return r().events(t, n, i, a, e.dimensions());
				}
			};
		},
		dispose() {
			r.clear(), n = "Feedback realm disposed.";
		}
	};
}
//#endregion
//#region src/runtime/feedbackInput.ts
function cd(e) {
	let t = e.binding, n = e.kernel, r = n.createFeedbackDeliveryCursor(), i, a, o, s, c, l = !1, u, d, f = (e) => {
		l && (u ??= e.error ?? Error(e.message));
	};
	window.addEventListener("error", f);
	let p = (t, n) => {
		e.owned.add(n), u = void 0, l = !0;
		try {
			if (t.dispatchEvent(n), u) throw u;
		} finally {
			l = !1;
		}
	}, m = () => e.canvas() || document.querySelector("#canvas") || document.querySelector("canvas") || (c || (c = document.createElement("div"), c.style.cssText = "position:absolute;inset:0;pointer-events:none", document.body.append(c)), c), h = () => e.snapshot(t.assetId), g = () => {
		let t = e.dimensions();
		if (![t.clipWidth, t.clipHeight].every((e) => Number.isFinite(e) && e > 0 && e <= n.FEEDBACK_LIMITS.maxValue)) throw Error("Standard input requires positive logical dimensions.");
		return t;
	}, _ = (e) => (e !== a && (i = n.createFeedbackInputIndex(e, t.pointerChannelId), a = e), i), v = (r) => {
		let i = h(), a = g(), o = n.planFeedbackInput({
			sampler: i.sampler,
			binding: t,
			time: r.time,
			fps: r.fps,
			coordinates: a
		}), s = _(i.sampler);
		o.current && o.previousNominal && e.p5?.set(o.current, o.previousNominal, s.button(r.time, t));
	};
	return {
		prime(e) {
			v({
				time: 0,
				fps: e
			});
		},
		restore(e) {
			v(e);
		},
		prepare(a) {
			let c = a.feedbackDelivery?.transportEpoch;
			try {
				let l = h(), u = g(), f = m(), v = JSON.stringify([
					l.revision,
					t,
					u.clipWidth,
					u.clipHeight,
					a.fps
				]), y = o !== v || s !== f;
				if (y && (r = n.createFeedbackDeliveryCursor(), o = v, s = f, d = void 0), d && d.epoch === c) throw d.error;
				d = void 0, _(l.sampler), a.feedbackDelivery && n.validateFeedbackDeliveryContext(a.feedbackDelivery);
				let b = y && a.feedbackDelivery ? {
					transportEpoch: a.feedbackDelivery.transportEpoch,
					deliveryId: a.feedbackDelivery.deliveryId,
					mode: "sample-only"
				} : a.feedbackDelivery, x = n.planFeedbackInput({
					sampler: l.sampler,
					binding: t,
					time: a.time,
					fps: a.fps,
					coordinates: u,
					delivery: b
				});
				e.p5?.qualify();
				let S = f.getBoundingClientRect(), C = y ? [] : x.events.map(({ event: e }) => {
					let n = i.previous(e.seq, t.space, u), r = i.eventButton({
						t: Math.round(e.time * 1e6),
						seq: e.seq
					}), a = {
						bubbles: !0,
						cancelable: !0,
						clientX: S.left + e.x * S.width / u.clipWidth,
						clientY: S.top + e.y * S.height / u.clipHeight,
						screenX: 0,
						screenY: 0,
						button: e.button ?? (e.event === "move" ? -1 : 0),
						buttons: e.buttons
					}, o = {
						down: "pointerdown",
						up: "pointerup",
						move: "pointermove",
						enter: "pointerenter",
						leave: "pointerleave",
						cancel: "pointercancel"
					}[e.event], s = {
						down: "mousedown",
						up: "mouseup",
						move: "mousemove",
						enter: "mouseenter",
						leave: "mouseleave",
						click: "click",
						"double-click": "dblclick",
						wheel: "wheel"
					}[e.event], c = !["enter", "leave"].includes(e.event);
					return {
						event: e,
						previous: n,
						button: r,
						pointer: o ? new PointerEvent(o, {
							...a,
							bubbles: c,
							cancelable: c && e.event !== "cancel",
							pointerId: 1,
							pointerType: "mouse",
							isPrimary: !0
						}) : void 0,
						mouse: s ? s === "wheel" ? new WheelEvent(s, {
							...a,
							deltaMode: 0,
							deltaX: e.deltaX ?? 0,
							deltaY: e.deltaY ?? 0
						}) : new MouseEvent(s, {
							...a,
							bubbles: c,
							cancelable: c,
							button: e.button ?? 0
						}) : void 0
					};
				});
				if (a.feedbackDelivery && r.consume(a.feedbackDelivery)) for (let t of C) {
					let n = e.p5?.set(t.event, t.previous, t.button);
					t.pointer && p(f, t.pointer), t.mouse && (p(f, t.mouse), n && e.p5.deliver(t.mouse, n));
				}
				x.current && x.previousNominal && e.p5?.set(x.current, x.previousNominal, i.button(a.time, t));
			} catch (e) {
				if (d?.error === e) throw e;
				let n = e?.feedbackInputCode ?? e?.code ?? "input-failed", r = Object.assign(/* @__PURE__ */ Error("Feedback input " + t.assetId + ": " + (e instanceof Error ? e.message : String(e))), { feedbackInputCode: n });
				throw d = {
					epoch: c,
					error: r
				}, r;
			}
		},
		dispose() {
			window.removeEventListener("error", f), c?.remove();
		}
	};
}
//#endregion
//#region src/runtime/feedbackP5Input.ts
function ld(e) {
	let t = window, n = [
		"mousedown",
		"mouseup",
		"mousemove",
		"click",
		"dblclick",
		"wheel"
	], r = [
		"mousePressed",
		"mouseReleased",
		"mouseMoved",
		"mouseDragged",
		"mouseClicked",
		"doubleClicked",
		"mouseWheel",
		"touchStarted",
		"touchMoved",
		"touchEnded"
	], i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new WeakSet(), s = /* @__PURE__ */ new Map(), c, l, u, d, f = (e, t = !1) => {
		throw Object.assign(/* @__PURE__ */ Error("Feedback p5 input: " + e), { feedbackInputCode: t ? "unsupported-playback" : "input-failed" });
	}, p = (e) => {
		for (let [t, n] of Object.entries(e)) c._setProperty(t, n);
	}, m = () => {
		if (l) throw l;
		(!c || c._updateNextMouseCoords !== d || n.some((e) => c._events[e] !== a.get(e))) && f("the qualified native mouse hooks changed.", !0);
	}, h = () => {
		for (let n of r) {
			let r = t[n];
			if (typeof r != "function" || o.has(r)) continue;
			let i = function(t) {
				if (!u || !e(t)) return r.call(this, t);
				if (n.startsWith("touch")) return;
				p(u), r.constructor?.name === "AsyncFunction" && f(n + "() must be synchronous.");
				let i = r.call(this, t);
				return i && typeof i.then == "function" && (Promise.resolve(i).catch(() => void 0), f(n + "() must be synchronous.")), i;
			};
			o.add(i), s.set(n, {
				callback: r,
				wrapper: i
			}), t[n] = i;
		}
	};
	return {
		attach(r) {
			c = r;
			try {
				(!["1.11.1", "1.11.11"].includes(t.p5?.VERSION) || !c._isGlobal || typeof c._setProperty != "function" || typeof c._updateNextMouseCoords != "function" || !c._events) && f("unsupported native mouse listener shape.", !0);
				for (let e of n) {
					let t = Object.getOwnPropertyDescriptor(c._events, e)?.value;
					(typeof t != "function" || !t.name.startsWith("bound ") || typeof c["_on" + e] != "function") && f("unsupported native mouse listener: " + e, !0), i.set(e, t);
				}
				let r = c._updateNextMouseCoords;
				d = function(t) {
					if (!e(t)) return r.call(this, t);
				}, c._updateNextMouseCoords = d;
				for (let r of n) {
					let n = i.get(r), o = (t) => {
						e(t) || n(t);
					};
					t.removeEventListener(r, n), t.addEventListener(r, o, { passive: !1 }), c._events[r] = o, a.set(r, o);
				}
			} catch (e) {
				l = e;
			}
		},
		qualify: m,
		set(e, t, n) {
			m();
			let r = {
				mouseX: e.x,
				mouseY: e.y,
				pmouseX: t.x,
				pmouseY: t.y,
				winMouseX: e.x,
				winMouseY: e.y,
				pwinMouseX: t.x,
				pwinMouseY: t.y,
				movedX: e.x - t.x,
				movedY: e.y - t.y,
				mouseIsPressed: e.buttons !== 0,
				mouseButton: n === 2 ? c.RIGHT : n === 1 ? c.CENTER : c.LEFT
			};
			return p(r), r;
		},
		deliver(e, t) {
			m(), h(), u = t;
			try {
				i.get(e.type)?.(e);
			} finally {
				u = void 0, p(t);
			}
		},
		dispose() {
			for (let e of n) {
				let n = a.get(e), r = i.get(e);
				n && t.removeEventListener(e, n), r && t.removeEventListener(e, r);
			}
			for (let [e, n] of s) t[e] === n.wrapper && (t[e] = n.callback);
			a.clear(), i.clear(), s.clear(), u = void 0, l = /* @__PURE__ */ Error("Feedback p5 input: the Clip is disposed.");
		}
	};
}
//#endregion
//#region src/runtime/feedbackHtml.ts
function ud(e, t = "") {
	let n = [], r = [], i = /* @__PURE__ */ new Set([
		"text/javascript",
		"application/javascript",
		"text/ecmascript",
		"application/ecmascript",
		"text/jscript",
		"text/livescript",
		"text/x-javascript",
		"application/x-javascript",
		"text/x-ecmascript",
		"application/x-ecmascript",
		...[
			0,
			1,
			2,
			3,
			4,
			5
		].map((e) => `text/javascript1.${e}`)
	]), a = (e) => {
		if (!("tagName" in e && (e.tagName === "template" || e.tagName === "noscript"))) {
			if ("tagName" in e && e.tagName === "script") {
				let a = new Map(e.attrs.map((e) => [e.name, e.value])), o = a.get("type"), s = a.get("language"), c = (o === "" || o === void 0 && !s ? "text/javascript" : o ?? `text/${s}`).toLowerCase();
				if ((c === "module" || i.has(c) || o !== void 0 && i.has(c.trim())) && !a.has("nomodule") && e.sourceCodeLocation) {
					n.push({
						attrs: e.attrs.map((e) => ({
							name: e.name,
							value: e.value
						})),
						source: e.childNodes.filter((e) => e.nodeName === "#text").map((e) => e.value).join("")
					});
					let i = n.length - 1;
					e.attrs = e.attrs.filter((e) => e.name !== "type" && e.name !== "data-macroflush-feedback-script"), e.attrs.push({
						name: "type",
						value: "application/x-macroflush-feedback"
					}, {
						name: "data-macroflush-feedback-script",
						value: `${t}:${i}`
					}), r.push({
						start: e.sourceCodeLocation.startOffset,
						end: e.sourceCodeLocation.endOffset,
						replacement: bu(e)
					});
				}
			}
			"childNodes" in e && e.childNodes.forEach(a);
		}
	};
	a(Ou(e, { sourceCodeLocationInfo: !0 }));
	for (let t of r.sort((e, t) => t.start - e.start)) e = e.slice(0, t.start) + t.replacement + e.slice(t.end);
	return {
		html: e,
		scripts: n
	};
}
//#endregion
//#region src/runtime/createClipDocument.ts
var dd = /\.use\(\s*["']centi3d["']/;
function fd(e) {
	return dd.test(e.js);
}
async function pd() {
	return (await import("./three.global-lsYzNWMC.js")).default;
}
function md(e, t, n, r, i = [], a = !1, o = {}) {
	return gd(e, t, n, r, i, "", !1, a, o);
}
async function hd(e, t, n, r, i = [], a = !1, o = !1, s = {}) {
	return gd(e, t, n, r, i, fd(t) ? await pd() : "", a, o, s);
}
function gd(e, t, n, r, i, a, o = !1, s = !1, c = {}) {
	i = fi(i, c.libraries);
	let l = c.capabilities?.includes("p5") === !0, u = l && c.p5Playback === "isolated-replay", d = !u && (c.hasFeedback === !0 || i.some((e) => e.kind === "feedback")), f = d && c.feedbackInputEnabled === !0 && c.feedback?.pointerChannelId !== void 0, p = nd(t.html, r, i.filter((e) => e.scriptMode === "global" && e.scriptOrigin).map((e) => e.scriptOrigin)), m = p.resources.length > 0 || p.errors.length > 0, h = d ? ud(p.html, c.documentToken ?? "") : {
		html: p.html,
		scripts: []
	};
	if (u) {
		if (!c.p5ReplayBudget) throw Error(`P5 replay ${e}: an explicit replay budget is required.`);
		if (i.filter((e) => e.kind === "script" && e.scriptMode === "global").length + p.resources.filter((e) => e.kind === "script").length !== 1) throw Error(`P5 replay ${e}: exactly one p5 Script is supported; extra executable Libraries are unsupported.`);
		let t = (n) => {
			if (!("tagName" in n && n.tagName === "template")) {
				if ("tagName" in n && n.tagName === "script") throw Error(`P5 replay ${e}: authored HTML script tags are unsupported.`);
				"childNodes" in n && n.childNodes.forEach(t);
			}
		};
		t(Ou(p.html));
	}
	let g = Yu([
		t.js,
		...h.scripts.map((e) => e.source),
		...i.filter((e) => e.kind === "script").map((e) => e.scriptSource ?? "")
	]), _ = Object.fromEntries(Object.entries(Pu).map(([e, t]) => [e, {
		type: t.type,
		default: t.default,
		value: t.value,
		label: t.label,
		group: t.group,
		writable: t.writable,
		min: t.min,
		max: t.max,
		step: t.step,
		options: t.options,
		interpolable: t.interpolable,
		space: t.space,
		version: t.version
	}])), v = `
(() => {
  const p5Enabled = ${l};
  const p5Isolated = ${u};
  if (p5Enabled) window.mocha = true;
  const THREE = ${a ? `(() => { ${a}; return THREE; })()` : "undefined"};
  const bitmapFontPrototype = (() => {
    const Centi = function() {};
    ${Ru}
    return Centi.prototype;
  })();
  const clipId = ${JSON.stringify(e)};
  const documentToken = ${JSON.stringify(c.documentToken ?? "")};
  let documentReady = false;
  let readyRequestId;
  const notifyDocumentReady = () => {
    documentReady = true;
    parent.postMessage({ type: "macroflush:ready", clipId, documentToken, readyRequestId }, "*");
  };
  window.__macroflushNotifyReady = notifyDocumentReady;
  const liveAssetUpdates = ${!!c.liveAssets};
  const hasFeedback = ${d};
  const imageWorkTimers = { schedule: window.setTimeout.bind(window), cancel: window.clearTimeout.bind(window) };
  let assetVersion = 0;
  let audioAnalysisVersion = 0;
  let initialAssetsResolve;
  window.__macroflushAssetsReady = liveAssetUpdates ? new Promise(resolve => { initialAssetsResolve = resolve; }) : Promise.resolve();
  const editorThreeDHelpers = ${o && a ? `(${Au.toString()})(THREE)` : "null"};
  window.addEventListener("pagehide", () => editorThreeDHelpers?.dispose());
  const hashExportRandomSeed = ${Hu.toString()};
  const createSeededRandom = ${Uu.toString()};
  const nativeMathRandom = Math.random;
  const reconcileManagedThreeDObjects = (${ku.toString()});
  const builtinDefinitions = ${JSON.stringify(_)};
  const hostParamDefinitions = ${JSON.stringify(n)};
  const assetDescriptors = ${JSON.stringify(i)};
  const modelRegistry = typeof THREE === "undefined" ? null : (${ju.toString()})(THREE, assetDescriptors);
  const materialTextures = typeof THREE === "undefined" ? null : (${Mu.toString()})(THREE, () => assetDescriptors);
  const scriptRegistry = (${Nu.toString()})(assetDescriptors);
  window.__macroflushRegisterScript = scriptRegistry.register;
  let genericScriptUseReported = false;
  window.useScript = (name) => {
    if (liveAssetUpdates && !genericScriptUseReported) {
      genericScriptUseReported = true;
      parent.postMessage({ type: "macroflush:generic-script-use", clipId, documentToken }, "*");
    }
    return scriptRegistry.use(name);
  };
  const scriptVersions = new Map();
  let stagingScript = false;
  const builtinParamKeys = new Set(Object.keys(builtinDefinitions));
  const paramSchemas = new Map();
  const pendingParams = new Map();
  const pendingMetadata = new Map();
  const pendingParamChanges = new Map();
  const pendingSceneOperations = new Map();
  const frameCallbacks = [];
  const enterCallbacks = [];
  const beatCallbacks = [];
  const cueCallbacks = [];
  const eventListeners = new Map();
  let lastBeatKey = null;
  let lastCueName = null;
  let lastCueCompFrame = null;
  const displayObjects = new Map();
  let nextDisplayObjectId = 1;
  const setupCallbacks = [];
  let setupComplete = false;
  let frameDirty = true;
  let dirtyVersion = 0;
  let lastFrameTransferTime = -Infinity;
  let lastTickCompFrame = null;
  let frameTransferEpoch = 0;
  let lastTransferredEpoch = -1;
  let lastTransferredCaptureEpoch = 0;
  let lastTransferredFrameParamToken = null;
  let frameTransferPending = false;
  let lastCompletedLiveTick = null;
  let recapturePending = false;
  let frameTransferClosed = false;
  window.addEventListener("pagehide", () => { frameTransferClosed = true; });
  let sentFrameSeq = 0;
  let acknowledgedFrameSeq = 0;
  let frameTransfer = { enabled: false, fps: 30, dirtyOnly: true };
  let centiEnabled = false;
  let centi3dEnabled = false;
  let centi3d = null;
  let managed3dObjects = new Map();
  let cameraTransitionResources = null;
  const managed3dScripts = new Map();
  let lastCompFrame;
  let feedbackTime = 0;
  let compositionParamValues = {};
  let crossClipParamValues = null;
  let crossClipFrameToken = null;
  let allowedParamWrites = null;
  let crossClipWrites = new Map();
  let audioAnalysisPayload = { analyses: {}, stems: {}, placements: [] };

  const disposeCameraTransitionResources = () => {
    if (!cameraTransitionResources) return;
    const resources = cameraTransitionResources;
    reconcileManagedThreeDObjects(THREE, resources.rigScene, resources.rigObjects, []);
    resources.fromTarget?.dispose();
    resources.toTarget?.dispose();
    resources.quad?.geometry.dispose();
    resources.quad?.material.dispose();
    cameraTransitionResources = null;
  };

  const getCameraTransitionResources = (transition, canvas) => {
    const key = JSON.stringify([transition.type, transition.boundaryFrame, transition.fromCameraId, transition.fromObjects, canvas.width, canvas.height]);
    if (cameraTransitionResources?.key === key) return cameraTransitionResources;
    disposeCameraTransitionResources();
    const rigScene = new THREE.Scene();
    const rigObjects = reconcileManagedThreeDObjects(THREE, rigScene, new Map(), transition.fromObjects, canvas.width / canvas.height);
    rigScene.updateMatrixWorld(true);
    cameraTransitionResources = { key, rigScene, rigObjects };
    if (transition.type === 'dissolve') {
      const fromTarget = new THREE.WebGLRenderTarget(canvas.width, canvas.height);
      const toTarget = new THREE.WebGLRenderTarget(canvas.width, canvas.height);
      const material = new THREE.ShaderMaterial({
        uniforms: { fromTexture: { value: fromTarget.texture }, toTexture: { value: toTarget.texture }, progress: { value: 0 } },
        vertexShader: 'varying vec2 uvPoint; void main(){ uvPoint=uv; gl_Position=vec4(position,1.0); }',
        fragmentShader: 'uniform sampler2D fromTexture; uniform sampler2D toTexture; uniform float progress; varying vec2 uvPoint; void main(){ vec4 a=texture2D(fromTexture,uvPoint); vec4 b=texture2D(toTexture,uvPoint); float alpha=mix(a.a,b.a,progress); vec3 rgb=mix(a.rgb*a.a,b.rgb*b.a,progress); gl_FragColor=vec4(alpha>0.0?rgb/alpha:vec3(0.0),alpha); }',
        depthTest: false,
        depthWrite: false
      });
      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      const quadScene = new THREE.Scene();
      quadScene.add(quad);
      Object.assign(cameraTransitionResources, {
        fromTarget, toTarget, quad, quadScene,
        quadCamera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
      });
    }
    return cameraTransitionResources;
  };

  const makeTransformCamera = (resources, fromCamera, toCamera, progress, canvas) => {
    fromCamera.updateWorldMatrix(true, false);
    toCamera.updateWorldMatrix(true, false);
    const fromPosition = fromCamera.getWorldPosition(new THREE.Vector3());
    const fromRotation = fromCamera.getWorldQuaternion(new THREE.Quaternion());
    const toPosition = toCamera.getWorldPosition(new THREE.Vector3());
    const toRotation = toCamera.getWorldQuaternion(new THREE.Quaternion());
    if (!resources.virtualCamera || resources.virtualCamera.isOrthographicCamera !== toCamera.isOrthographicCamera) {
      resources.virtualCamera = toCamera.isOrthographicCamera
        ? new THREE.OrthographicCamera()
        : new THREE.PerspectiveCamera();
    }
    const camera = resources.virtualCamera;
    camera.position.copy(fromPosition).lerp(toPosition, progress);
    camera.quaternion.copy(fromRotation).slerp(toRotation, progress);
    camera.near = toCamera.near;
    camera.far = toCamera.far;
    const aspect = canvas.width / canvas.height;
    if (camera.isOrthographicCamera) {
      const toHeight = toCamera.userData.macroflushOrthoHeight ?? toCamera.top - toCamera.bottom;
      const fromHeight = fromCamera.isOrthographicCamera
        ? fromCamera.userData.macroflushOrthoHeight ?? fromCamera.top - fromCamera.bottom : toHeight;
      const height = THREE.MathUtils.lerp(fromHeight, toHeight, progress);
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.left = -height * aspect / 2;
      camera.right = height * aspect / 2;
    } else {
      camera.aspect = aspect;
      camera.fov = THREE.MathUtils.lerp(fromCamera.isPerspectiveCamera ? fromCamera.fov : toCamera.fov, toCamera.fov, progress);
    }
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
    return camera;
  };

  const setRandomForTick = (message) => {
    if (message.exportMode === true && Number.isFinite(Number(message.compFrame))) {
      Math.random = createSeededRandom(hashExportRandomSeed(clipId, Number(message.compFrame)));
      return;
    }
    Math.random = nativeMathRandom;
  };

  // Explicitly release iframe-owned Three.js resources when its document is discarded.
  window.addEventListener("pagehide", () => {
    for (const [id, entry] of managed3dScripts) disposeManaged3dScript(id, entry);
    managed3dScripts.clear();
    if (centi3d) managed3dObjects = reconcileManagedThreeDObjects(THREE, centi3d.scene, managed3dObjects, []);
    disposeCameraTransitionResources();
    modelRegistry?.dispose();
    materialTextures?.dispose();
    try { centi3d?.renderer.dispose(); centi3d?.renderer.forceContextLoss();}
    catch (error) { console.warn("MacroFlush: failed to dispose centi3d renderer", error); }
  });

  const blockedTimer = () => {
    throw new Error("MacroFlush owns time. Use onFrame() instead of self-driven timers.");
  };

  window.requestAnimationFrame = blockedTimer;
  window.setInterval = blockedTimer;
  window.setTimeout = blockedTimer;
  if (!p5Enabled) window.setup = (callback) => {
    if (typeof callback === "function") setupCallbacks.push(callback);
  };
  window.size = (width, height) => {
    setParam("size", [width, height], true);
  };
  window.sz = (width, height) => {
    window.size(width, height);
  };

  const inferType = (value) => {
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    if (Array.isArray(value) && value.length === 2) return "vec2";
    if (Array.isArray(value) && value.length === 3) return "vec3";
    if (typeof value === "string" && /^#[0-9a-fA-F]{6}$/.test(value)) return "color";
    return "string";
  };

  const normalizeParam = (key, schema) => {
    const type = schema.type || inferType(schema.default);
    return {
      key,
      type,
      default: schema.default,
      value: schema.value ?? schema.default,
      label: schema.label,
      group: schema.group || "custom",
      writable: schema.writable === true,
      min: schema.min,
      max: schema.max,
      step: schema.step,
      options: schema.options,
      interpolable: type === "color" ? true : schema.interpolable ?? type === "number",
      space: schema.space,
      version: schema.version || 1
    };
  };

  const emitSchema = () => {
    parent.postMessage({
      type: "macroflush:schema",
      clipId,
      documentToken,
      params: Array.from(paramSchemas.values())
    }, "*");
  };

  let activeExportFrameId = null;
  let exportFrameFailure = null;
  let setupFailure = null;
  let feedbackFrameFailure = null;
  let feedbackSetupFailure = null;
  let feedbackPreparationFailure = null;
  let feedbackInputStatusKey = "";
  const reportFeedbackInputStatus = issue => {
    if (!${f}) return;
    const key = JSON.stringify(issue || null);
    if (key === feedbackInputStatusKey) return;
    feedbackInputStatusKey = key;
    parent.postMessage({ type: "macroflush:feedback-input-status", clipId, documentToken, issue: issue || null }, "*");
  };
  const unresolvedSourceUses = new Map();
  const setupSourceUses = new Map();
  let recordingSetupSources = true;
  const reportRuntimeError = (error, phase, frame = lastCompFrame) => {
    const message = error instanceof Error ? error.message : String(error);
    if (activeExportFrameId) exportFrameFailure = phase ? phase + ": " + message : message;
    if (recordingSetupSources) setupFailure = phase ? phase + ": " + message : message;
    if (phase?.startsWith("feedback") || error?.name === "FeedbackError") {
      feedbackFrameFailure = message;
      if (recordingSetupSources) feedbackSetupFailure = message;
    }
    if (recordingSetupSources || phase?.startsWith("feedback") || error?.feedbackInputCode || error?.name === "FeedbackError") {
      reportFeedbackInputStatus({ code: error?.feedbackInputCode === "unsupported-playback" ? "unsupported-playback"
        : phase === "feedback resources" || phase === "feedback external resource" ? "resource-not-ready" : "input-failed", message });
    }
    parent.postMessage({
      type: "macroflush:runtime-error",
      clipId,
      documentToken,
      frame,
      error: phase ? phase + ": " + message : message,
      ...(phase?.startsWith("feedback") || error?.name === "FeedbackError" ? { feedbackError: true } : {}),
      ...(${f} && (recordingSetupSources || phase?.startsWith("feedback") || error?.feedbackInputCode || error?.name === "FeedbackError") ? { feedbackInputDiagnostic: true } : {}),
      ...(p5Isolated && error?.p5ReplayCode ? { p5ReplayCode: error.p5ReplayCode } : {}),
      stack: error instanceof Error ? error.stack : undefined
    }, "*");
  };
  ${m ? `const remotePreparation = (${rd.toString()})(${vd(p.resources)}, ${vd(p.errors)}, imageWorkTimers, message => {
    setupFailure = message;
    reportRuntimeError(message, hasFeedback ? "feedback external resource" : "external resource");
    notifyDocumentReady();
  });
  window.__macroflushRemotePreparation = remotePreparation;
  window.addEventListener("pagehide", () => remotePreparation.dispose());` : ""}

  let activeGlobalLibrary = null;
  const reportGlobalLibraryError = error => {
    if (activeGlobalLibrary.reported) return;
    activeGlobalLibrary.reported = true;
    reportRuntimeError(error, "Global library " + activeGlobalLibrary.name);
  };
  window.__macroflushLoadGlobalLibrary = (name, source) => {
    const previous = activeGlobalLibrary;
    activeGlobalLibrary = { name, reported: false };
    try {
      const script = document.createElement("script");
      script.textContent = source;
      document.head.appendChild(script);
    } catch (error) {
      reportGlobalLibraryError(error);
    } finally {
      activeGlobalLibrary = previous;
      p5Adapter?.observeLibrary(name);
    }
  };

  const disposeManaged3dScript = (id, entry) => {
    try { entry.controller.onDispose?.(); }
    catch (error) { reportRuntimeError(error, "3D script " + id + " onDispose"); }
  };

  const updateManaged3dScript = (message) => {
    const { assetId, source, version } = message;
    if (typeof assetId !== "string" || typeof source !== "string" || !Number.isSafeInteger(version)
      || version <= (scriptVersions.get(assetId) ?? 0)
      || !assetDescriptors.some((asset) => asset.kind === "script" && asset.scriptMode !== "global" && asset.id === assetId)) return;

    let factory = null;
    const token = Math.random().toString(36).slice(2);
    window.__macroflushStageScript = (receivedToken, candidate) => {
      if (receivedToken === token && typeof candidate === "function") factory = candidate;
    };
    const script = document.createElement("script");
    script.textContent = "window.__macroflushStageScript(" + JSON.stringify(token)
      + ", function() {\\n" + source + "\\n});";
    try {
      stagingScript = true;
      document.head.appendChild(script);
      stagingScript = false;
      if (!factory) throw new Error("Script source could not be compiled.");

      const replacements = [];
      try {
        for (const [id, entry] of managed3dScripts) {
          if (entry.scriptAssetId !== assetId) continue;
          const controller = scriptRegistry.instantiateFactory(assetId, factory);
          if (!controller || typeof controller.onFrame !== "function") {
            throw new Error("3D Script asset must return an object with onFrame(payload).");
          }
          replacements.push([id, entry, controller]);
        }
      } catch (error) {
        for (const [id, , controller] of replacements) disposeManaged3dScript(id, { controller });
        throw error;
      }

      scriptRegistry.register(assetId, factory);
      for (const [id, entry, controller] of replacements) {
        disposeManaged3dScript(id, entry);
        managed3dScripts.set(id, { ...entry, controller });
      }
      scriptVersions.set(assetId, version);
      parent.postMessage({ type: "macroflush:script-updated", clipId, assetId, version }, "*");
    } catch (error) {
      reportRuntimeError(error, "3D script " + assetId + " hot reload");
      parent.postMessage({ type: "macroflush:script-update-error", clipId, assetId, version }, "*");
    } finally {
      stagingScript = false;
      script.remove();
      delete window.__macroflushStageScript;
    }
  };

  const runManaged3dScripts = (message) => {
    const descriptors = Array.isArray(message.threeDObjects) ? message.threeDObjects : [];
    const byId = new Map(descriptors.map((descriptor) => [descriptor.id, descriptor]));
    for (const [id, entry] of managed3dScripts) {
      const descriptor = byId.get(id);
      const object = managed3dObjects.get(id)?.object;
      if (descriptor?.scriptAssetId === entry.scriptAssetId && object === entry.object) continue;
      disposeManaged3dScript(id, entry);
      managed3dScripts.delete(id);
    }
    for (const descriptor of descriptors) {
      if (!descriptor?.scriptAssetId) continue;
      const object = managed3dObjects.get(descriptor.id)?.object;
      if (!object) continue;
      let entry = managed3dScripts.get(descriptor.id);
      if (!entry) {
        try {
          const controller = scriptRegistry.instantiate(descriptor.scriptAssetId);
          if (!controller || typeof controller.onFrame !== "function") {
            throw new Error("3D Script asset must return an object with onFrame(payload).");
          }
          entry = { scriptAssetId: descriptor.scriptAssetId, object, controller };
          managed3dScripts.set(descriptor.id, entry);
        } catch (error) {
          reportRuntimeError(error, "3D script " + descriptor.id + " setup", message.compFrame);
          continue;
        }
      }
      try {
        assetImageWork.callback("3D script " + descriptor.id, () => entry.controller.onFrame({
          object, placementId: descriptor.id, placementFrame: descriptor.placementFrame,
          time: message.time, frame: message.frame, progress: message.progress,
          compTime: message.compTime, compFrame: message.compFrame,
          runTime: message.appRuntime, runFrame: message.runFrame,
          bar: message.bar, beat: message.beat, cueName: message.cueName ?? null,
          scene: centi3d.scene, camera: centi3d.camera, T: THREE
        }), message.exportMode === true);
      } catch (error) {
        reportRuntimeError(error, "3D script " + descriptor.id + " onFrame", message.compFrame);
      }
    }
  };

  window.addEventListener("error", (event) => {
    if (stagingScript) return;
    ${m ? `if (!activeGlobalLibrary && ${vd(p.resources.filter((e) => e.kind === "script").map((e) => e.url))}.includes(event.filename || document.currentScript?.src)) {
      remotePreparation.fail("External script " + (event.filename || document.currentScript?.src) + ": " + (event.message || "initializer failed"));
      return;
    }` : ""}
    if (activeGlobalLibrary) { reportGlobalLibraryError(event.error || event.message); return; }
    reportRuntimeError(event.error || event.message, "top-level");
  });
  window.addEventListener("unhandledrejection", (event) => {
    reportRuntimeError(event.reason, "unhandled rejection");
  });

  const markFrameDirty = () => {
    frameDirty = true;
    dirtyVersion += 1;
  };

  const valuesEqual = (left, right) => {
    if (left === right) return true;
    if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
    return left.every((value, index) => value === right[index]);
  };

  const setParam = (key, value, notify = false) => {
    const schema = paramSchemas.get(key);
    if (!schema) {
      return;
    }
    const changed = !valuesEqual(schema.value, value);
    schema.value = value;
    if (changed) markFrameDirty();

    if (!p5Enabled && key === "size" && Array.isArray(value)) {
      resizeCanvas(value[0], value[1]);
    }

    // Built-ins remain host-owned in their schema, but a Clip may request an
    // update to its own transform through the same assignment path as custom
    // writable parameters.
    const shouldSyncToHost = changed && (schema.writable || builtinParamKeys.has(key));
    if (notify && shouldSyncToHost) {
      pendingParamChanges.set(key, value);
    } else if (!notify) {
      // The host is authoritative before callbacks run, including immediately
      // after setup(). Do not send a stale pre-tick script-side assignment back.
      pendingParamChanges.delete(key);
    }
  };

  const resolveWritable = (key, rawSchema, previous, origin) => {
    // Built-ins are host-owned even when older project files label some of
    // them as custom. Keys, rather than groups, are the durable boundary.
    if (builtinParamKeys.has(key)) return false;
    if (Object.prototype.hasOwnProperty.call(rawSchema, "writable")) {
      return rawSchema.writable === true;
    }
    // A script declaration is an explicit opt-in to exposing this value, so
    // custom values are writable unless the author said otherwise.
    if (origin === "script") return true;
    return previous?.writable === true;
  };

  const registerParams = (definitions, origin = "host", notify = true) => {
    for (const [key, rawSchema] of Object.entries(definitions)) {
      const previous = paramSchemas.get(key);
      const writable = resolveWritable(key, rawSchema, previous, origin);
      const schema = normalizeParam(key, {
        ...previous,
        ...rawSchema,
        writable,
        value: rawSchema.value ?? previous?.value ?? rawSchema.default ?? previous?.default
      });
      paramSchemas.set(key, schema);
    }
    if (notify) emitSchema();
  };

  const clipTarget = {
    setParam(targetClipId, key, value) {
      if (!crossClipFrameToken) throw new Error("clip.setParam is available only during a hosted frame transaction.");
      if (typeof targetClipId !== "string" || typeof key !== "string") {
        throw new TypeError("clip.setParam expects a placement ID and parameter key.");
      }
      if (!crossClipParamValues || !Object.prototype.hasOwnProperty.call(crossClipParamValues, targetClipId)
        || !Object.prototype.hasOwnProperty.call(crossClipParamValues[targetClipId], key)) {
        throw new Error("clip.setParam: placement or parameter not found: " + targetClipId + "." + key);
      }
      if (allowedParamWrites && !allowedParamWrites.some(pair => Array.isArray(pair) && pair[0] === targetClipId && pair[1] === key)) {
        throw new Error("clip.setParam: undeclared target: " + targetClipId + "." + key);
      }
      const valid = (typeof value === "number" && Number.isFinite(value)) || typeof value === "boolean"
        || (typeof value === "string" && value.length <= 4096)
        || (Array.isArray(value) && (value.length === 2 || value.length === 3)
          && value.every(item => typeof item === "number" && Number.isFinite(item)));
      if (!valid) throw new TypeError("clip.setParam requires a finite parameter value.");
      if (!crossClipWrites.has(targetClipId + "\u0000" + key) && crossClipWrites.size >= 256) {
        throw new Error("clip.setParam exceeded the per-frame write limit.");
      }
      crossClipWrites.set(targetClipId + "\u0000" + key, { targetClipId, key, value: structuredClone(value) });
    },
    getParam(targetClipId, key) {
      if (typeof targetClipId !== "string" || typeof key !== "string") {
        throw new TypeError("clip.getParam expects a placement ID and parameter key.");
      }
      if (!crossClipParamValues || !Object.prototype.hasOwnProperty.call(crossClipParamValues, targetClipId)) {
        throw new Error("clip.getParam: placement not found in this composition: " + targetClipId);
      }
      const params = crossClipParamValues[targetClipId];
      if (!Object.prototype.hasOwnProperty.call(params, key)) {
        throw new Error("clip.getParam: parameter not found: " + key);
      }
      return structuredClone(crossClipWrites.get(targetClipId + "\u0000" + key)?.value ?? params[key]);
    },
    defineParams(definitions) {
      registerParams(definitions, "script");
    },
    meta: new Proxy({}, {
      set(_target, key, metadata) {
        if (typeof key !== "string" || !metadata || typeof metadata !== "object") return false;
        const current = paramSchemas.get(key);
        if (!current) {
          pendingMetadata.set(key, metadata);
          return true;
        }
        registerParams({
          [key]: {
            ...current,
            ...metadata,
            default: current.default,
            value: current.value
          }
        }, "metadata");
        return true;
      }
    }),
    use(name, options = {}) {
      if (name === "p5") {
        if (!p5Enabled) throw new Error('MacroFlush p5: enable the p5 capability in Inspector before calling clip.use("p5").');
        return;
      }
      if (p5Enabled && (name === "centi" || name === "centi3d")) throw new Error('MacroFlush: p5 global mode cannot be combined with centi or centi3d on the same Clip.');
      if (name === "centi3d") {
        if (centiEnabled) throw new Error('MacroFlush: clip.use("centi") and clip.use("centi3d") cannot both be active on the same clip.');
        if (typeof THREE === "undefined") throw new Error("MacroFlush: three.js is unavailable for this clip.");
        centi3dEnabled = true;
        const api = createCenti3dApi();
        if (options.global !== false) { window.THREE = THREE; window.T = THREE; }
        return api;
      }
      if (name !== "centi") {
        throw new Error("Unknown MacroFlush helper: " + name);
      }
      if (centi3dEnabled) throw new Error('MacroFlush: clip.use("centi") and clip.use("centi3d") cannot both be active on the same clip.');
      centiEnabled = true;
      applyCentiPaintState();
      const api = createCentiApi();
      if (options.global !== false) {
        installCentiGlobals(api);
      }
      return api;
    },
    markDirty() {
      markFrameDirty();
    }
  };

  window.clip = new Proxy(clipTarget, {
    get(target, key) {
      if (typeof key !== "string") return target[key];
      if (key in target) return target[key];
      return paramSchemas.get(key)?.value ?? pendingParams.get(key);
    },
    set(target, key, value) {
      if (typeof key !== "string") return false;
      if (!paramSchemas.has(key)) {
        pendingParams.set(key, value);
        return true;
      }
      setParam(key, value, true);
      return true;
    }
  });

  let p5IsolatedGuards;
  const feedbackOwnedEvents = new WeakSet();
  const feedbackP5Input = ${f && l ? `(${ld.toString()})(event => feedbackOwnedEvents.has(event))` : "null"};
  const p5Adapter = p5Enabled ? (${id.toString()})({ clip: window.clip,
    input: feedbackP5Input ? { owns: event => feedbackOwnedEvents.has(event), attach: sketch => feedbackP5Input.attach(sketch), dispose: () => feedbackP5Input.dispose() } : undefined,
    beforeSetup: message => { feedbackTime = 0; feedbackInput?.prime(message.fps); },
    context: ${vd(c.runtimeContext ?? null)}, seed: hashExportRandomSeed(${vd(c.p5SeedIdentity ?? e)}, 0), markDirty: markFrameDirty,
    afterSetup: message => {
      feedbackTime = message.time;
      if (!p5Isolated) return;
      p5IsolatedGuards.seal();
      for (const [key, value] of Object.entries(message.params || {})) setParam(key, value, false);
      // Retain initialization metadata without exposing or registering pending values.
      const schemas = new Map(paramSchemas);
      for (const [key, value] of pendingParams) schemas.set(key, normalizeParam(key, {
        type: inferType(value), default: value, value, group: "custom", writable: true,
        ...(pendingMetadata.get(key) || {})
      }));
      parent.postMessage({ type: "macroflush:schema", clipId, params: Array.from(schemas.values()) }, "*");
    } }) : null;
  if (p5Adapter) {
    window.__macroflushPrepareP5 = () => {
      if (setupFailure) throw new Error(setupFailure);
      if (${!!c.capabilities?.includes("centi3d")}) throw new Error("MacroFlush: p5 and centi3d capabilities cannot both be active on the same Clip.");
      p5Adapter.prepare();
      if (p5Isolated) p5IsolatedGuards = (${ad.toString()})(clipId, ${vd(c.p5ReplayBudget ?? null)});
    };
    window.__macroflushValidateP5 = () => {
      if (setupFailure) throw new Error(setupFailure);
      p5Adapter.validate();
    };
    window.__macroflushObserveP5 = name => p5Adapter.observeLibrary(name);
    window.__macroflushFailP5 = error => {
      reportRuntimeError(error, "p5 preparation");
      p5Adapter.dispose();
    };
    window.addEventListener("pagehide", () => p5Adapter.dispose());
  }

  window.comp = new Proxy({}, {
    get(_target, key) {
      return typeof key === "string" ? compositionParamValues[key] : undefined;
    },
    set(_target, key, value) {
      if (typeof key !== "string") return false;
      parent.postMessage({ type: "macroflush:comp-param-change", clipId, key, value }, "*");
      return true;
    }
  });

  const checkSourceUse = (asset, url, stem) => {
    const key = JSON.stringify([asset.id, stem || null]);
    if (url) { unresolvedSourceUses.delete(key); setupSourceUses.delete(key); return; }
    const error = "Export source unavailable: " + asset.name + (stem ? ":" + stem : "");
    (recordingSetupSources ? setupSourceUses : unresolvedSourceUses).set(key, error);
    if (activeExportFrameId) { exportFrameFailure = error; throw new Error(error); }
  };
  const resolveAssetName = (name, requireSource = true) => {
    const matches = assetDescriptors.filter((asset) => asset.name === name);
    if (matches.length !== 1) {
      const error = (matches.length === 0 ? "Unknown asset name: " : "Ambiguous asset name: ") + name;
      if (activeExportFrameId) exportFrameFailure = error;
      throw new Error(error);
    }
    const asset = matches[0];
    if (requireSource && ["image", "video", "audio", "font", "model-3d"].includes(asset.kind)) checkSourceUse(asset, asset.sourceUrl);
    return asset;
  };

  const feedbackKernel = ${d ? `(() => { ${od}; return MacroFlushFeedbackKernel; })()` : "null"};
  const feedbackBinding = ${vd(c.feedback ?? null)};
  const feedbackDimensions = () => {
    const p5Size = p5Adapter?.logicalSize;
    const canvas = p5Adapter?.canvas || document.querySelector("#canvas") || document.querySelector("canvas");
    const size = paramSchemas.get("size")?.value || [640, 360];
    return { clipWidth: p5Size?.[0] || canvas?.width || size[0], clipHeight: p5Size?.[1] || canvas?.height || size[1] };
  };
  const feedbackState = (${sd.toString()})({ sampler: feedbackKernel?.createFeedbackSampler,
    lookup: id => assetDescriptors.find(asset => asset.id === id && asset.kind === "feedback"),
    unavailable: (id, error) => {
      const asset = assetDescriptors.find(asset => asset.id === id) || { id, name: id };
      checkSourceUse(asset, null);
      throw new Error(error);
    }, available: id => { const asset = assetDescriptors.find(asset => asset.id === id); if (asset) checkSourceUse(asset, "ready"); },
    time: () => feedbackTime,
    dimensions: feedbackDimensions
  });
  const feedbackInput = ${f ? `(${cd.toString()})({ kernel: feedbackKernel, binding: feedbackBinding,
    snapshot: id => feedbackState.snapshot(id), owned: feedbackOwnedEvents, p5: feedbackP5Input,
    canvas: () => p5Adapter?.canvas,
    dimensions: feedbackDimensions })` : "null"};
  window.addEventListener("pagehide", () => feedbackInput?.dispose());
  let feedbackResolve, feedbackReject;
  const feedbackReady = hasFeedback ? new Promise((resolve, reject) => { feedbackResolve = resolve; feedbackReject = reject; }) : Promise.resolve();
  void feedbackReady.catch(() => undefined);
  const feedbackTimer = hasFeedback ? imageWorkTimers.schedule(() => feedbackReject(new Error("Feedback resource preparation timed out for " + clipId)), 5000) : null;
  window.__macroflushFeedbackReady = feedbackReady;
  let feedbackAuthoredActive = false;
  window.__macroflushFeedbackAuthored = active => { feedbackAuthoredActive = active; };
  window.__macroflushFeedbackStartupCheck = () => { if (setupFailure) throw new Error(setupFailure); };
  if (hasFeedback) window.addEventListener("error", event => { if (feedbackAuthoredActive) reportRuntimeError(event.error || event.message, "feedback authored code"); });
  const feedbackCall = callback => {
    try { return callback(); }
    catch (error) { reportRuntimeError(error, "feedback"); throw error; }
  };
  window.feedback = (name, mapping) => feedbackCall(() => {
    if (typeof name !== "string") throw new Error("feedback(name) requires a Feedback asset name string.");
    const asset = resolveAssetName(name, false);
    if (asset.kind !== "feedback") throw new Error("Asset is not Feedback: " + name);
    const defaults = feedbackBinding?.assetId === asset.id ? feedbackBinding : { offset: 0, rate: 1, loop: false };
    const reader = feedbackState.reader(asset.id, { offset: mapping?.offset ?? defaults.offset, rate: mapping?.rate ?? defaults.rate, loop: mapping?.loop ?? defaults.loop });
    return { get duration() { return feedbackCall(() => reader.duration); }, get channels() { return feedbackCall(() => reader.channels); },
      sample: (...args) => feedbackCall(() => reader.sample(...args)), at: (...args) => feedbackCall(() => reader.at(...args)),
      events: (...args) => feedbackCall(() => reader.events(...args)) };
  });
  window.addEventListener("pagehide", () => { if (feedbackTimer !== null) imageWorkTimers.cancel(feedbackTimer); feedbackState.dispose(); feedbackReject?.(new Error("Feedback realm disposed.")); });

  const assetImages = (${Zu.toString()})(() => assetDescriptors, typeof THREE === "undefined" ? null : THREE, () => new Image(), imageWorkTimers);
  const assetImageWork = (${Qu.toString()})({ report: reportRuntimeError, ...imageWorkTimers });
  window.addEventListener("pagehide", () => { assetImageWork.dispose(); assetImages.dispose(); });
  const imageApi = (method, name, options) => {
    try {
      resolveAssetName(name);
      return assetImages[method](name, options);
    } catch (error) {
      reportRuntimeError(error, "image asset", lastCompFrame);
      throw error;
    }
  };
  window.assetImage = (name) => imageApi("image", name);
  window.assetTexture = (name, options) => imageApi("texture", name, options);
  window.assetImageLoad = (name) => assetImageWork.load(name, () => {
    resolveAssetName(name);
    return assetImages.load(name);
  });
  window.assetTextureLoad = (name, options) => assetImageWork.load(name, async () => {
    resolveAssetName(name);
    await assetImages.load(name);
    return assetImages.texture(name, options);
  });
  window.__macroflushImagesReady = window.__macroflushAssetsReady.then(() => assetImages.preload(${JSON.stringify(g)}));

  const queueSceneOperation = (operation) => {
    if (operation.type === "upsert" && !displayObjects.has(operation.object.id)) return;
    const id = operation.type === "remove" ? operation.id : operation.object.id;
    // Reinsert so the batch retains the final operation order across related objects.
    // This preserves cases such as add(parent), add(child), remove(parent).
    pendingSceneOperations.delete(id);
    pendingSceneOperations.set(id, operation);
    markFrameDirty();
  };

  const emitSceneOperation = (operation) => {
    parent.postMessage({ type: "macroflush:scene", clipId, operation }, "*");
    markFrameDirty();
  };

  window.go = (name) => {
    if (typeof name !== "string") return;
    parent.postMessage({ type: "macroflush:go", clipId, name }, "*");
  };

  window.sendOsc = (address, ...values) => {
    if (typeof address !== "string") return;
    parent.postMessage({ type: "macroflush:osc-send", clipId, address, values }, "*");
  };

  window.data = (name) => {
    if (typeof name !== "string") throw new Error("data(name) requires an asset name string.");
    return resolveAssetName(name).data;
  };

  const resolveAudioAnalysis = (name, requirePrimary = true) => {
    if (typeof name !== "string") throw new Error("Audio analysis requires an asset name string.");
    const asset = resolveAssetName(name, requirePrimary);
    if (asset.kind !== "audio") throw new Error("Asset is not audio: " + name);
    if (requirePrimary) checkSourceUse(asset, audioAnalysisPayload.analyses[asset.id]);
    return { asset, analysis: audioAnalysisPayload.analyses[asset.id] };
  };

  const currentAudioBucket = (assetId, analysis, mediaClipId) => {
    if (!analysis || !Number.isFinite(lastCompFrame)) return -1;
    // First active placement wins in layer/clip order unless a media clip ID is supplied.
    const placement = audioAnalysisPayload.placements.find((item) => item.assetId === assetId
      && (mediaClipId === undefined || item.clipId === mediaClipId)
      && lastCompFrame >= item.inFrame && lastCompFrame < item.outFrame);
    if (!placement) return -1;
    const localTime = Math.max(0, (lastCompFrame - placement.inFrame) / analysis.fps);
    const loopTime = localTime % analysis.duration;
    return Math.min(analysis.buckets - 1, Math.floor(loopTime * analysis.fps));
  };

  const resolveAudioStem = (name, stem) => {
    if (stem !== "drums" && stem !== "bass" && stem !== "other" && stem !== "vocals") {
      throw new Error("Unknown audio stem: " + stem);
    }
    const { asset } = resolveAudioAnalysis(name, false);
    checkSourceUse(asset, audioAnalysisPayload.stems?.[asset.id]?.[stem], stem);
    return { asset, analysis: audioAnalysisPayload.stems?.[asset.id]?.[stem] };
  };

  window.audioBand = (name, band, mediaClipId) => {
    if (band !== "low" && band !== "mid" && band !== "high") throw new Error("Unknown audio band: " + band);
    const { asset, analysis } = resolveAudioAnalysis(name);
    const bucket = currentAudioBucket(asset.id, analysis, mediaClipId);
    return bucket < 0 ? 0 : analysis.bands[band][bucket];
  };

  window.audioSpectrum = (name, mediaClipId) => {
    const { asset, analysis } = resolveAudioAnalysis(name);
    const bucket = currentAudioBucket(asset.id, analysis, mediaClipId);
    return bucket < 0 ? new Float32Array(analysis?.bins || 32)
      : analysis.spectrum.slice(bucket * analysis.bins, (bucket + 1) * analysis.bins);
  };

  window.audioPeaks = (name) => {
    const { analysis } = resolveAudioAnalysis(name);
    if (!analysis) return null;
    const peaks = analysis.peaks;
    return { duration: peaks.duration, minimum: peaks.minimum.slice(), maximum: peaks.maximum.slice() };
  };

  window.audioSpectrogram = (name) => {
    const { analysis } = resolveAudioAnalysis(name);
    if (!analysis) return null;
    return { duration: analysis.duration, fps: analysis.fps, bins: analysis.bins,
      buckets: analysis.buckets, data: analysis.spectrum.slice() };
  };

  window.audioStem = (name, stem, band, mediaClipId) => {
    if (band !== undefined && band !== "low" && band !== "mid" && band !== "high") {
      throw new Error("Unknown audio band: " + band);
    }
    const { asset, analysis } = resolveAudioStem(name, stem);
    const bucket = currentAudioBucket(asset.id, analysis, mediaClipId);
    if (bucket < 0) return 0;
    if (band) return analysis.bands[band][bucket];
    return Math.min(1, Math.hypot(analysis.bands.low[bucket], analysis.bands.mid[bucket], analysis.bands.high[bucket]));
  };

  window.audioStemPeaks = (name, stem) => {
    const { analysis } = resolveAudioStem(name, stem);
    if (!analysis) return null;
    const peaks = analysis.peaks;
    return { duration: peaks.duration, minimum: peaks.minimum.slice(), maximum: peaks.maximum.slice() };
  };

  window.audioStemSpectrogram = (name, stem) => {
    const { analysis } = resolveAudioStem(name, stem);
    if (!analysis) return null;
    return { duration: analysis.duration, fps: analysis.fps, bins: analysis.bins,
      buckets: analysis.buckets, data: analysis.spectrum.slice() };
  };

  const svgAssetCache = new Map();

  const decodeSvgDataUrl = (sourceUrl) => {
    const commaIndex = sourceUrl.indexOf(",");
    if (commaIndex < 0) throw new Error("SVG asset source is not a valid data URL.");
    const header = sourceUrl.slice(0, commaIndex).toLowerCase();
    if (!header.startsWith("data:image/svg+xml")) throw new Error("Asset is not an SVG image.");
    const payload = sourceUrl.slice(commaIndex + 1);
    try {
      return header.includes(";base64") ? atob(payload) : decodeURIComponent(payload);
    } catch {
      throw new Error("SVG asset data could not be decoded.");
    }
  };

  const parseSvgNumber = (value) => {
    const match = String(value ?? "").trim().match(/^[-+]?(?:\\d+\\.?\\d*|\\.\\d+)(?:e[-+]?\\d+)?(?:px)?$/i);
    return match ? Number.parseFloat(match[0]) : null;
  };

  const svgViewBox = (svg) => {
    const values = String(svg.getAttribute("viewBox") ?? "").trim().split(/[\\s,]+/).map(Number);
    if (values.length === 4 && values.every(Number.isFinite)) {
      return { x: values[0], y: values[1], width: values[2], height: values[3] };
    }
    const width = parseSvgNumber(svg.getAttribute("width"));
    const height = parseSvgNumber(svg.getAttribute("height"));
    return { x: 0, y: 0, width: width ?? 0, height: height ?? 0 };
  };

  const sanitizeSvgDocument = (document) => {
    const sanitizeSvgUrls = (value) => String(value ?? "").replace(/url\\(\\s*(?:(['\"])(.*?)\\1|([^)]*))\\s*\\)/gi, (match, _quote, quotedTarget, bareTarget) => {
      const reference = String(quotedTarget ?? bareTarget ?? "").trim();
      return reference.startsWith("#") ? match : "none";
    });
    for (const style of document.querySelectorAll("style")) {
      style.textContent = String(style.textContent ?? "")
        .replace(/@import[\\s\\S]*?;/gi, "")
        .replace(/url\\(\\s*(?:(['\"])(.*?)\\1|([^)]*))\\s*\\)/gi, (match, _quote, quotedTarget, bareTarget) => String(quotedTarget ?? bareTarget ?? "").trim().startsWith("#") ? match : "none");
    }
    for (const node of document.querySelectorAll("script, foreignObject, iframe, object, embed, image, audio, video, use, animate, animateMotion, animateTransform, set")) node.remove();
    for (const element of document.querySelectorAll("*")) {
      for (const attribute of [...element.attributes]) {
        const name = attribute.name.toLowerCase();
        if (name.startsWith("on") || name === "href" || name === "xlink:href") {
          element.removeAttribute(attribute.name);
          continue;
        }
        const value = sanitizeSvgUrls(attribute.value);
        if (value !== attribute.value) element.setAttribute(attribute.name, value);
      }
    }
  };

  const createSvgMeasureRoot = () => {
    const root = document.createElement("div");
    root.setAttribute("aria-hidden", "true");
    root.style.cssText = "position:fixed;left:-10000px;top:-10000px;width:1px;height:1px;overflow:visible;visibility:hidden;pointer-events:none";
    (document.body ?? document.documentElement).append(root);
    return root;
  };

  const svgTransformMatrix = (svg, geometry) => {
    try {
      const rootMatrix = svg.getCTM();
      const geometryMatrix = geometry.getCTM();
      const matrix = rootMatrix && geometryMatrix ? rootMatrix.inverse().multiply(geometryMatrix) : geometryMatrix;
      if (matrix) return { a: matrix.a, b: matrix.b, c: matrix.c, d: matrix.d, e: matrix.e, f: matrix.f };
    } catch {
      // SVGs without a resolvable CTM still expose their local user coordinates.
    }
    return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  };

  const transformSvgPoint = (point, matrix) => ({
    x: point.x * matrix.a + point.y * matrix.c + matrix.e,
    y: point.x * matrix.b + point.y * matrix.d + matrix.f
  });

  const transformSvgBox = (box, matrix) => {
    const points = [
      transformSvgPoint({ x: box.x, y: box.y }, matrix),
      transformSvgPoint({ x: box.x + box.width, y: box.y }, matrix),
      transformSvgPoint({ x: box.x, y: box.y + box.height }, matrix),
      transformSvgPoint({ x: box.x + box.width, y: box.y + box.height }, matrix)
    ];
    const xs = points.map((point) => point.x);
    const ys = points.map((point) => point.y);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    return { x, y, width: Math.max(...xs) - x, height: Math.max(...ys) - y };
  };

  const svgByte = (value) => Math.max(0, Math.min(255, Math.round(Number(value) || 0)));

  const svgUnit = (value, fallback = 1) => {
    const text = String(value ?? "").trim();
    const number = Number.parseFloat(text);
    const normalized = text.endsWith("%") ? number / 100 : number;
    return Number.isFinite(normalized) ? Math.max(0, Math.min(1, normalized)) : fallback;
  };

  const svgRgbPaint = (css, opacity = 1) => {
    const value = String(css ?? "none").trim();
    if (value.toLowerCase() === "none") {
      return { type: "none", css: "none", r: 0, g: 0, b: 0, a: 0, int: 0, hex: "#000000" };
    }
    const channels = value.match(/[-+]?(?:\\d+\\.?\\d*|\\.\\d+)(?:e[-+]?\\d+)?/gi)?.map(Number) ?? [];
    const r = svgByte(channels[0]);
    const g = svgByte(channels[1]);
    const b = svgByte(channels[2]);
    const intrinsicAlpha = channels.length > 3 && Number.isFinite(channels[3]) ? svgUnit(channels[3]) : 1;
    const int = r << 16 | g << 8 | b;
    const hex = "#" + int.toString(16).padStart(6, "0");
    return { type: "color", css: value, r, g, b, a: svgByte(255 * intrinsicAlpha * opacity), int, hex };
  };

  const svgPaintReference = (css) => {
    const match = String(css ?? "").match(/^url\\(\\s*['\"]?(#[^)'\"\\s]+)['\"]?\\s*\\)$/i);
    return match ? match[1].slice(1) : null;
  };

  const svgPaintDefinition = (svg, id) => {
    if (!id) return null;
    return [...svg.querySelectorAll("linearGradient, radialGradient, pattern")].find((element) => element.id === id) ?? null;
  };

  const svgGradientStops = (gradient) => [...gradient.children]
    .filter((child) => child.localName === "stop")
    .map((stop) => {
      const style = getComputedStyle(stop);
      const color = svgRgbPaint(style.stopColor, svgUnit(style.stopOpacity));
      return {
        offset: svgUnit(stop.getAttribute("offset"), 0),
        css: color.css,
        r: color.r,
        g: color.g,
        b: color.b,
        a: color.a
      };
    });

  const svgPaint = (geometry, style, property) => {
    const css = style[property];
    const definition = svgPaintDefinition(geometry.ownerSVGElement, svgPaintReference(css));
    if (definition?.localName === "linearGradient" || definition?.localName === "radialGradient") {
      return { type: "gradient", css, r: 0, g: 0, b: 0, a: 0, int: 0, hex: "#000000", stops: svgGradientStops(definition) };
    }
    if (definition?.localName === "pattern") {
      return { type: "pattern", css, r: 0, g: 0, b: 0, a: 0, int: 0, hex: "#000000" };
    }
    return svgRgbPaint(css, svgUnit(style[property + "Opacity"]));
  };

  const svgStyle = (geometry) => {
    const style = getComputedStyle(geometry);
    const strokeWidth = Number.parseFloat(style.strokeWidth);
    const opacity = Number.parseFloat(style.opacity);
    return {
      fill: svgPaint(geometry, style, "fill"),
      stroke: svgPaint(geometry, style, "stroke"),
      strokeWidth: Number.isFinite(strokeWidth) ? strokeWidth : 1,
      fillRule: style.fillRule,
      opacity: Number.isFinite(opacity) ? opacity : 1
    };
  };

  const svgPathSubpaths = (pathData) => {
    const matches = [...String(pathData ?? "").matchAll(/[Mm][^Mm]*/g)];
    return matches.length ? matches.map((match) => ({ end: match.index + match[0].length, closed: /[Zz]/.test(match[0]) })) : [{ end: String(pathData ?? "").length, closed: false }];
  };

  const sampleSvgGeometry = (geometry, matrix, segments, count) => {
    const sampleCount = Math.max(2, Math.min(10000, Math.floor(Number(count) || 64)));
    return segments.map((segment) => {
      if (segment.length <= 0) return [transformSvgPoint(segment.geometry.getPointAtLength(segment.start), matrix)];
      // At an SVG subpath boundary Chromium returns the prior contour's final point.
      const firstLength = segment.start > 0
        ? segment.start + Math.min(segment.length * 1e-4, 0.001)
        : segment.start;
      return Array.from({ length: sampleCount }, (_, index) => transformSvgPoint(
        segment.geometry.getPointAtLength(index === 0 ? firstLength : segment.start + segment.length * index / (sampleCount - 1)),
        matrix
      ));
    });
  };

  const svgLengthScale = (matrix) => Math.sqrt(Math.abs(matrix.a * matrix.d - matrix.b * matrix.c)) || 1;

  const buildSvgAsset = (asset) => {
    if (asset.kind !== "image") throw new Error("Asset is not an SVG image: " + asset.name);
    if (!asset.sourceUrl?.startsWith("data:")) throw new Error("SVG asset must use an embedded data URL: " + asset.name);
    const parsed = new DOMParser().parseFromString(decodeSvgDataUrl(asset.sourceUrl), "image/svg+xml");
    if (parsed.querySelector("parsererror") || parsed.documentElement?.localName !== "svg") throw new Error("SVG asset could not be parsed: " + asset.name);
    sanitizeSvgDocument(parsed);

    const measureRoot = createSvgMeasureRoot();
    const svg = document.importNode(parsed.documentElement, true);
    measureRoot.append(svg);
    const viewBox = svgViewBox(svg);
    const width = parseSvgNumber(svg.getAttribute("width"));
    const height = parseSvgNumber(svg.getAttribute("height"));
    const excludedGeometry = "defs, clipPath, mask, marker, pattern, symbol";
    const shapes = [];

    for (const geometry of svg.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon")) {
      if (geometry.closest(excludedGeometry) || typeof geometry.getTotalLength !== "function") continue;
      const matrix = svgTransformMatrix(svg, geometry);
      const totalLength = geometry.getTotalLength();
      const tag = geometry.localName;
      const segments = [];
      if (tag === "path") {
        const pathData = geometry.getAttribute("d") ?? "";
        let start = 0;
        for (const subpath of svgPathSubpaths(pathData)) {
          const probe = document.createElementNS("http://www.w3.org/2000/svg", "path");
          probe.setAttribute("d", pathData.slice(0, subpath.end));
          svg.append(probe);
          const end = probe.getTotalLength();
          segments.push({ geometry: probe, start, length: Math.max(0, end - start), closed: subpath.closed });
          start = end;
        }
      } else {
        segments.push({
          geometry,
          start: 0,
          length: totalLength,
          closed: tag === "rect" || tag === "circle" || tag === "ellipse" || tag === "polygon"
        });
      }
      const groupIds = [];
      for (let parent = geometry.parentElement; parent && parent !== svg; parent = parent.parentElement) {
        if (parent.localName === "g" && parent.id) groupIds.unshift(parent.id);
      }
      const rawBox = geometry.getBBox();
      const localLength = segments.reduce((sum, segment) => sum + segment.length, 0);
      const cachedShape = {
        id: geometry.id || null,
        tag,
        groupIds,
        length: localLength * svgLengthScale(matrix),
        localLength,
        bbox: transformSvgBox(rawBox, matrix),
        closed: segments.every((segment) => segment.closed),
        style: svgStyle(geometry),
        subpathCount: segments.length,
        points(count = 64) {
          return sampleSvgGeometry(geometry, matrix, segments, count);
        },
        subpaths(count = 64) {
          const points = sampleSvgGeometry(geometry, matrix, segments, count);
          return points.map((path, index) => ({ closed: segments[index].closed, points: path }));
        }
      };
      shapes.push(cachedShape);
    }

    return {
      viewBox,
      intrinsic: width === null || height === null ? null : { width, height },
      shapes
    };
  };

  const cloneSvgAsset = (svgAsset) => ({
    viewBox: { ...svgAsset.viewBox },
    intrinsic: svgAsset.intrinsic ? { ...svgAsset.intrinsic } : null,
    shapes: svgAsset.shapes.map((shape) => ({
      id: shape.id,
      tag: shape.tag,
      groupIds: [...shape.groupIds],
      length: shape.length,
      localLength: shape.localLength,
      bbox: { ...shape.bbox },
      closed: shape.closed,
      style: { ...shape.style },
      subpathCount: shape.subpathCount,
      points: shape.points,
      subpaths: shape.subpaths
    }))
  });

  window.assetSvg = (name) => {
    if (typeof name !== "string") throw new Error("assetSvg(name) requires an asset name string.");
    const asset = resolveAssetName(name);
    let svgAsset = svgAssetCache.get(asset.id);
    if (!svgAsset) {
      svgAsset = buildSvgAsset(asset);
      svgAssetCache.set(asset.id, svgAsset);
    }
    return cloneSvgAsset(svgAsset);
  };

  window.onEvent = (name, callback) => {
    if (typeof name !== "string" || typeof callback !== "function") return;
    if (!eventListeners.has(name)) eventListeners.set(name, new Set());
    eventListeners.get(name).add(callback);
  };

  const wouldCreateDisplayObjectCycle = (id, referenceId, key) => {
    let current = referenceId;
    const seen = new Set();
    let depth = 0;
    while (current) {
      if (depth++ >= 64) {
        console.warn("MacroFlush rejected " + key + " for display object " + id + ": maximum scene graph depth is 64.");
        return true;
      }
      if (current === id || seen.has(current)) return true;
      seen.add(current);
      current = displayObjects.get(current)?.[key];
    }
    return false;
  };

  window.add = (name, options = {}) => {
    if (typeof name !== "string") throw new Error("add(name) requires an asset name string.");
    const asset = resolveAssetName(name, false);
    if (asset.kind === "feedback") throw new Error("Feedback assets are read with feedback(name), not placed with add().");
    const state = {
      id: ${vd(c.displayObjectIdentity ?? e)} + ":display:" + nextDisplayObjectId++,
      assetId: asset.id,
      x: Number(options.x) || 0,
      y: Number(options.y) || 0,
      scale: Number.isFinite(Number(options.scale)) ? Number(options.scale) : 1,
      rotation: Number(options.rotation) || 0,
      opacity: Math.max(0, Math.min(1, Number.isFinite(Number(options.opacity)) ? Number(options.opacity) : 1)),
      visible: options.visible !== false,
      volume: Math.max(0, Math.min(1, Number.isFinite(Number(options.volume)) ? Number(options.volume) : 1)),
      clip: options.clip && typeof options.clip === "object" && !Array.isArray(options.clip) ? { ...options.clip } : {},
      zIndex: Number.isFinite(Number(options.zIndex)) ? Number(options.zIndex) : 0,
      width: Number.isFinite(Number(options.width)) && Number(options.width) > 0 ? Number(options.width) : undefined,
      height: Number.isFinite(Number(options.height)) && Number(options.height) > 0 ? Number(options.height) : undefined,
      anchorPoint: Array.isArray(options.anchorPoint) && options.anchorPoint.length >= 2 ? [Number(options.anchorPoint[0]) || 0, Number(options.anchorPoint[1]) || 0] : undefined,
      blendMode: typeof options.blendMode === "string" ? options.blendMode : "normal",
      parentId: typeof options.parent === "string" ? options.parent : typeof options.parent?.id === "string" ? options.parent.id : undefined,
      maskId: typeof options.mask === "string" ? options.mask : typeof options.mask?.id === "string" ? options.mask.id : undefined,
      instanceOfId: typeof options.instanceOf === "string" ? options.instanceOf : typeof options.instanceOf?.id === "string" ? options.instanceOf.id : undefined
    };
    if (state.parentId === state.id || wouldCreateDisplayObjectCycle(state.id, state.parentId, "parentId")) state.parentId = undefined;
    if (state.maskId === state.id || wouldCreateDisplayObjectCycle(state.id, state.maskId, "maskId")) state.maskId = undefined;
    if (state.instanceOfId === state.id || wouldCreateDisplayObjectCycle(state.id, state.instanceOfId, "instanceOfId") || displayObjects.get(state.instanceOfId)?.instanceOfId) state.instanceOfId = undefined;
    displayObjects.set(state.id, state);
    const object = { id: state.id, assetId: state.assetId, remove() {
      if (!displayObjects.has(state.id)) return;
      const removed = new Set([state.id]);
      const childrenByParent = new Map();
      for (const child of displayObjects.values()) {
        if (!child.parentId) continue;
        let children = childrenByParent.get(child.parentId);
        if (!children) childrenByParent.set(child.parentId, children = []);
        children.push(child.id);
      }
      const pending = [state.id];
      while (pending.length) {
        for (const id of childrenByParent.get(pending.pop()) || []) {
          if (removed.has(id)) continue;
          removed.add(id); pending.push(id);
        }
      }
      for (const id of removed) displayObjects.delete(id);
      queueSceneOperation({ type: "remove", id: state.id });
    } };
    for (const key of ["x", "y", "scale", "rotation", "opacity", "visible", "volume", "zIndex", "width", "height", "anchorPoint", "blendMode"]) {
      Object.defineProperty(object, key, {
        enumerable: true,
        get: () => state[key],
        set: (value) => {
          const numeric = Number(value);
          state[key] = key === "visible" ? value !== false : key === "anchorPoint" ? (Array.isArray(value) ? [Number(value[0]) || 0, Number(value[1]) || 0] : [0, 0]) : key === "blendMode" ? String(value || "normal") : key === "width" || key === "height" ? (Number.isFinite(numeric) && numeric > 0 ? numeric : undefined) : (Number.isFinite(numeric) ? numeric : (key === "scale" ? 1 : 0));
          if (key === "opacity" || key === "volume") state[key] = Math.max(0, Math.min(1, state[key]));
          queueSceneOperation({ type: "upsert", object: { ...state } });
        }
      });
    }
    const clipOverrides = new Proxy(state.clip, {
      set(target, key, value) {
        if (typeof key !== "string") return false;
        target[key] = value;
        queueSceneOperation({ type: "upsert", object: { ...state, clip: { ...state.clip } } });
        return true;
      }
    });
    Object.defineProperty(object, "clip", {
      enumerable: true,
      get: () => clipOverrides,
      set: (value) => {
        if (!value || typeof value !== "object" || Array.isArray(value)) return;
        for (const key of Object.keys(state.clip)) delete state.clip[key];
        Object.assign(state.clip, value);
        queueSceneOperation({ type: "upsert", object: { ...state, clip: { ...state.clip } } });
      }
    });
    Object.defineProperty(object, "parent", {
      enumerable: true,
      get: () => state.parentId,
      set: (value) => {
        const parentId = typeof value === "string" ? value : typeof value?.id === "string" ? value.id : undefined;
        if (parentId === state.id || wouldCreateDisplayObjectCycle(state.id, parentId, "parentId")) return;
        state.parentId = parentId;
        queueSceneOperation({ type: "upsert", object: { ...state, clip: { ...state.clip } } });
      }
    });
    Object.defineProperty(object, "mask", {
      enumerable: true,
      get: () => state.maskId,
      set: (value) => {
        const maskId = typeof value === "string" ? value : typeof value?.id === "string" ? value.id : undefined;
        if (maskId === state.id || wouldCreateDisplayObjectCycle(state.id, maskId, "maskId")) return;
        state.maskId = maskId;
        queueSceneOperation({ type: "upsert", object: { ...state, clip: { ...state.clip } } });
      }
    });
    Object.defineProperty(object, "instanceOf", {
      enumerable: true,
      get: () => state.instanceOfId,
      set: (value) => {
        const instanceOfId = typeof value === "string" ? value : typeof value?.id === "string" ? value.id : undefined;
        if (instanceOfId === state.id || wouldCreateDisplayObjectCycle(state.id, instanceOfId, "instanceOfId") || displayObjects.get(instanceOfId)?.instanceOfId) return;
        state.instanceOfId = instanceOfId;
        queueSceneOperation({ type: "upsert", object: { ...state, clip: { ...state.clip } } });
      }
    });
    queueSceneOperation({ type: "upsert", object: { ...state } });
    return object;
  };

  window.onFrame = (callback) => {
    frameCallbacks.push(callback);
  };

  window.onEnter = (callback) => {
    enterCallbacks.push(callback);
  };

  window.onBeat = (callback) => {
    beatCallbacks.push(callback);
  };

  window.onCue = (callback) => {
    cueCallbacks.push(callback);
  };

  // Publish only after host definitions replace the temporary built-in defaults.
  registerParams(builtinDefinitions, "builtin", false);
  registerParams(hostParamDefinitions, "host");

  let canvasElement = null;
  let canvasContext = null;

  const findCanvas = () => {
    if (p5Enabled) {
      if (!p5Adapter.canvas) throw new Error("MacroFlush p5: no canvas is available for capture.");
      return p5Adapter.canvas;
    }
    if (!canvasElement) {
      canvasElement = document.querySelector("canvas");
      if (!canvasElement) {
        canvasElement = document.createElement("canvas");
        document.body.appendChild(canvasElement);
      }
    }
    return canvasElement;
  };

  const resizeCanvas = (width, height) => {
    const canvas = findCanvas();
    canvas.width = Math.max(1, Number(width) || 1);
    canvas.height = Math.max(1, Number(height) || 1);
    if (centiEnabled && canvasContext) applyCentiPaintState();
    if (centi3d) {
      centi3d.renderer.setSize(width, height, false);
      centi3d.camera.aspect = canvas.width / canvas.height;
      centi3d.camera.updateProjectionMatrix();
      for (const entry of managed3dObjects.values()) {
        if (entry.kind !== "camera-3d") continue;
        if (entry.object.isOrthographicCamera) {
          const height = entry.object.userData.macroflushOrthoHeight || 405;
          entry.object.top = height / 2;
          entry.object.bottom = -height / 2;
          entry.object.left = -height * canvas.width / canvas.height / 2;
          entry.object.right = height * canvas.width / canvas.height / 2;
        } else entry.object.aspect = canvas.width / canvas.height;
        entry.object.updateProjectionMatrix();
      }
    }
    markFrameDirty();
  };

  const getContext = () => {
    if (!canvasContext) {
      // Note: getContext("2d", { willReadFrequently: true }) was tried here as an experiment
      // to force CPU-only rendering, to work around a Chromium-only paint bug after
      // composition switching (see App.tsx, near the "stage" div). It did not fix the issue,
      // so this stays GPU-accelerated.
      canvasContext = findCanvas().getContext("2d");
    }
    return canvasContext;
  };

  let fillMode = true;
  let backgroundColor = "rgba(0, 0, 0, 0)";
  let gradient = null;
  let centiFillStyle = "rgb(255, 255, 255)";
  let centiStrokeStyle = "rgb(255, 255, 255)";
  const applyCentiPaintState = () => {
    const context = getContext();
    context.fillStyle = centiFillStyle;
    context.strokeStyle = centiStrokeStyle;
  };
  const macroFlushReservedGlobals = new Set(["clip", "onFrame", "add"]);
  const centiMathFunctions = ["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "imul", "log", "max", "min", "pow", "random", "round", "sin", "sqrt", "tan"];
  const centiMathConstants = {
    E: Math.E,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    PI: Math.PI,
    PI2: Math.PI * 2,
    HALF_PI: Math.PI / 2,
    SQRT1_2: Math.SQRT1_2,
    SQRT2: Math.SQRT2,
    GOLD: (1 + Math.sqrt(5)) / 2
  };

  const colorString = (...values) => {
    if (values.length === 1 && typeof values[0] === "string") return values[0];
    if (values.length === 1 && values[0] && typeof values[0] === "object" && typeof values[0].css === "string") return values[0].css;
    const channels = values.map(Number);
    if (channels.length === 1) return "rgb(" + channels[0] + ", " + channels[0] + ", " + channels[0] + ")";
    if (channels.length === 2) return "rgba(" + channels[0] + ", " + channels[0] + ", " + channels[0] + ", " + channels[1] / 255 + ")";
    if (channels.length === 3) return "rgb(" + channels[0] + ", " + channels[1] + ", " + channels[2] + ")";
    return "rgba(" + channels[0] + ", " + channels[1] + ", " + channels[2] + ", " + channels[3] / 255 + ")";
  };

  const hexToInt = (value) => {
    if (typeof value !== "string" || !/^#[0-9a-fA-F]{6}$/.test(value)) {
      throw new TypeError("hexToInt() expects a #rrggbb color string.");
    }
    return Number.parseInt(value.slice(1), 16);
  };

  const intToHex = (value) => {
    if (!Number.isInteger(value) || value < 0 || value > 0xffffff) {
      throw new RangeError("intToHex() expects an integer from 0x000000 to 0xffffff.");
    }
    return "#" + value.toString(16).padStart(6, "0");
  };

  class CentiVec2 {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    set(x, y) { this.x = x; this.y = y; return this; }
    clone() { return new CentiVec2(this.x, this.y); }
    equals(point) { return this === point || Boolean(point && (this.x === point.x && this.y === point.y || Array.isArray(point) && this.x === point[0] && this.y === point[1])); }
    normalized() { const length = this.len(); return new CentiVec2(this.x / length, this.y / length); }
    normalize() { const length = this.len(); this.x /= length; this.y /= length; }
    dist(pointOrX, y) {
      if (arguments.length === 0) return this.len();
      const point = arguments.length === 1 ? pointOrX : { x: pointOrX, y };
      return Math.hypot(this.x - point.x, this.y - point.y);
    }
    distance(pointOrX, y) { return this.dist(pointOrX, y); }
    dot(point) { return this.x * point.x + this.y * point.y; }
    cross(point) { return this.x * point.y - this.y * point.x; }
    rotation(point) {
      if (!point) return this.isZero() ? this._rotation || 0 : this._rotation = Math.atan2(this.y, this.x);
      const divisor = this.len() * point.len();
      if (Math.abs(divisor) <= 10e-12) return NaN;
      const ratio = this.dot(point) / divisor;
      return Math.acos(Math.min(1, Math.max(-1, ratio)));
    }
    setRotation(radian) {
      this._rotation = radian;
      if (!this.isZero()) this.set(Math.cos(radian) * this.len(), Math.sin(radian) * this.len());
    }
    len() { return Math.hypot(this.x, this.y); }
    setLen(length) {
      if (this.isZero()) {
        const rotation = this._rotation || 0;
        this.set(Math.cos(rotation) * length, Math.sin(rotation) * length);
      } else {
        const scale = length / this.len();
        if (Math.abs(scale) <= 10e-12) this.rotation();
        this.set(this.x * scale, this.y * scale);
      }
    }
    rotate(radian, center) {
      if (radian === 0) return this.clone();
      const point = center ? this.subtract(center) : this;
      const sine = Math.sin(radian);
      const cosine = Math.cos(radian);
      const rotated = new CentiVec2(point.x * cosine - point.y * sine, point.x * sine + point.y * cosine);
      return center ? rotated.add(center) : rotated;
    }
    add(point) { return new CentiVec2(this.x + point.x, this.y + point.y); }
    subtract(point) { return new CentiVec2(this.x - point.x, this.y - point.y); }
    multiply(point) { return new CentiVec2(this.x * point.x, this.y * point.y); }
    divide(point) { return new CentiVec2(this.x / point.x, this.y / point.y); }
    modulo(point) { return new CentiVec2(this.x % point.x, this.y % point.y); }
    negate() { return new CentiVec2(-this.x, -this.y); }
    isZero() { return Math.abs(this.x) <= 10e-12 && Math.abs(this.y) <= 10e-12; }
  }

  class CentiRectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.x = x; this.y = y; this.w = this.width = width; this.h = this.height = height;
      this.r = this.right = x + width; this.b = this.bottom = y + height;
    }
  }

  const CentiNamespace = {
    Vec2: CentiVec2,
    Rectangle: CentiRectangle,
    Numerical: {
      EPSILON: 10e-12,
      isZero(value) { return Math.abs(value) <= this.EPSILON; }
    }
  };

  const matrixPrototype = (() => {
    const Centi = function() {};
    Object.assign(Centi, CentiNamespace);
    ${zu}
    CentiNamespace.Matrix = Centi.Matrix;
    return Centi.prototype;
  })();

  const KdTree = (() => {
    const exports = {};
    ${Bu}
    return exports.kdTree;
  })();

  const pointOnCubicBezier = (t, a, b, c, d) => {
    const inverse = 1 - t;
    return inverse * inverse * inverse * a + 3 * inverse * inverse * t * b + 3 * inverse * t * t * c + t * t * t * d;
  };

  let timelineTimeMs = 0;
  const timelineTweens = new Set();
  const easingModule = (() => {
    ${Vu.replace(/\r\n/g, "\n").replace(/export type KeyframeEasing =[\s\S]*?;\n/, "").replace(/: string \| undefined(?=[,)\s])/g, "").replace(/\?: number\[\]/g, "").replace(/: number\[\](?=[,)\s])/g, "").replace(/: number(?=[,)\s])/g, "").replace(/ as keyof typeof namedEasingFunctions/g, "").replace(/^export /gm, "")}
    return { centiEase, namedEasingFunctions };
  })();
  const ease = easingModule.centiEase;

  class TimelineTween {
    constructor(object) {
      this.object = object; this.target = {}; this.duration = 1000; this.delayMs = 0; this.repeatCount = 0; this.yoyoEnabled = false;
      this.easingFunction = ease.Linear.None; this.updateCallback = null; this.completeCallback = null; this.playing = false; this.startTime = 0; this.startValues = {}; this.startValuesCaptured = false;
    }
    to(target, duration = 1000) { this.target = { ...target }; this.duration = Math.max(0, Number(duration) || 0); return this; }
    easing(callback) { this.easingFunction = callback || ease.Linear.None; return this; }
    delay(duration) { this.delayMs = Math.max(0, Number(duration) || 0); return this; }
    repeat(count = Infinity) { this.repeatCount = count === Infinity ? Infinity : Math.max(0, Number(count) || 0); return this; }
    yoyo(enabled = true) { this.yoyoEnabled = Boolean(enabled); return this; }
    onUpdate(callback) { this.updateCallback = callback; return this; }
    onComplete(callback) { this.completeCallback = callback; return this; }
    start(time = timelineTimeMs) {
      this.startTime = Number(time) || 0; this.startValues = {}; this.startValuesCaptured = false;
      this.playing = true; this.completed = false; timelineTweens.add(this); return this;
    }
    stop() { this.playing = false; timelineTweens.delete(this); return this; }
    isPlaying() { return this.playing; }
    captureStartValues() {
      this.startValues = Object.fromEntries(Object.keys(this.target).map((key) => [key, Number(this.object[key]) || 0]));
      this.startValuesCaptured = true;
    }
    takeOverlappingProperties() {
      const keys = Object.keys(this.target);
      if (!keys.length) return;
      for (const other of timelineTweens) {
        if (other === this || !other.playing || other.object !== this.object) continue;
        for (const key of keys) {
          if (!Object.hasOwn(other.target, key)) continue;
          delete other.target[key];
          delete other.startValues[key];
        }
        if (!Object.keys(other.target).length) other.stop();
      }
    }
    update(time) {
      if (!this.playing) return false;
      const elapsed = time - this.startTime - this.delayMs;
      if (elapsed < 0) return true;
      if (!this.startValuesCaptured) {
        this.captureStartValues();
        this.takeOverlappingProperties();
      }
      const duration = Math.max(1, this.duration);
      const cycles = this.repeatCount === Infinity ? Infinity : this.repeatCount + 1;
      const cycle = Math.floor(elapsed / duration);
      const finished = cycle >= cycles;
      const progress = finished ? 1 : Math.max(0, Math.min(1, (elapsed % duration) / duration));
      const directed = this.yoyoEnabled && cycle % 2 === 1 ? 1 - progress : progress;
      const eased = this.easingFunction(directed);
      for (const [key, target] of Object.entries(this.target)) this.object[key] = this.startValues[key] + (Number(target) - this.startValues[key]) * eased;
      this.updateCallback?.(this.object, directed);
      if (!finished) {
        this.completed = false;
        return true;
      }
      this.completed = true;
      this.playing = false;
      timelineTweens.delete(this);
      this.completeCallback?.(this.object);
      return false;
    }
  }

  const updateTimelineTweens = (time) => {
    for (const tween of timelineTweens) tween.update(time);
  };

  const drawPath = () => {
    const ctx = getContext();
    if (fillMode) ctx.fill();
    else ctx.stroke();
    markFrameDirty();
  };

  let effectCanvas = null;
  let effectContext = null;
  let crashScanlinePattern = null;
  const getEffectContext = () => {
    const canvas = findCanvas();
    if (!effectCanvas) {
      effectCanvas = document.createElement("canvas");
      effectContext = effectCanvas.getContext("2d", { willReadFrequently: true });
    }
    if (effectCanvas.width !== canvas.width || effectCanvas.height !== canvas.height) {
      effectCanvas.width = canvas.width;
      effectCanvas.height = canvas.height;
    }
    return effectContext;
  };

  const applyEffect = (render) => {
    const canvas = findCanvas();
    const ctx = getContext();
    const temp = getEffectContext();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    temp.setTransform(1, 0, 0, 1, 0, 0);
    render(ctx, temp, canvas);
    ctx.restore();
    markFrameDirty();
  };

  const getCrashScanlinePattern = (context) => {
    if (crashScanlinePattern) return crashScanlinePattern;
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = 1;
    patternCanvas.height = 2;
    const patternContext = patternCanvas.getContext("2d");
    patternContext.fillStyle = "rgba(0,0,0,0.28)";
    patternContext.fillRect(0, 0, 1, 1);
    crashScanlinePattern = context.createPattern(patternCanvas, "repeat");
    return crashScanlinePattern;
  };

  // Matches Centiscript's bundled lib/perlin.js with its default seed (0).
  const centiPerlinGradients = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
  ];
  const centiPerlinPermutation = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171,
    168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173,
    186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223,
    183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
    178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192,
    214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141,
    128, 195, 78, 66, 215, 61, 156, 180
  ];
  const centiPerlinPerm = [...centiPerlinPermutation, ...centiPerlinPermutation];
  const centiPerlinGradient = (index) => centiPerlinGradients[centiPerlinPerm[index] % 12];
  const centiPerlinFade = (value) => value * value * value * (value * (value * 6 - 15) + 10);
  const centiPerlinLerp = (a, b, amount) => (1 - amount) * a + amount * b;
  const centiPerlin2 = (inputX, inputY) => {
    let x = inputX;
    let y = inputY;
    let gridX = Math.floor(x);
    let gridY = Math.floor(y);
    x -= gridX;
    y -= gridY;
    gridX &= 255;
    gridY &= 255;
    const dot = (index, offsetX, offsetY) => {
      const gradient = centiPerlinGradient(index);
      return gradient[0] * offsetX + gradient[1] * offsetY;
    };
    const n00 = dot(gridX + centiPerlinPerm[gridY], x, y);
    const n01 = dot(gridX + centiPerlinPerm[gridY + 1], x, y - 1);
    const n10 = dot(gridX + 1 + centiPerlinPerm[gridY], x - 1, y);
    const n11 = dot(gridX + 1 + centiPerlinPerm[gridY + 1], x - 1, y - 1);
    const fadeX = centiPerlinFade(x);
    return centiPerlinLerp(centiPerlinLerp(n00, n10, fadeX), centiPerlinLerp(n01, n11, fadeX), centiPerlinFade(y));
  };
  const centiPerlin3 = (inputX, inputY, inputZ) => {
    let x = inputX;
    let y = inputY;
    let z = inputZ;
    let gridX = Math.floor(x);
    let gridY = Math.floor(y);
    let gridZ = Math.floor(z);
    x -= gridX;
    y -= gridY;
    z -= gridZ;
    gridX &= 255;
    gridY &= 255;
    gridZ &= 255;
    const dot = (index, offsetX, offsetY, offsetZ) => {
      const gradient = centiPerlinGradient(index);
      return gradient[0] * offsetX + gradient[1] * offsetY + gradient[2] * offsetZ;
    };
    const index = (offsetX, offsetY, offsetZ) => gridX + offsetX + centiPerlinPerm[gridY + offsetY + centiPerlinPerm[gridZ + offsetZ]];
    const n000 = dot(index(0, 0, 0), x, y, z);
    const n001 = dot(index(0, 0, 1), x, y, z - 1);
    const n010 = dot(index(0, 1, 0), x, y - 1, z);
    const n011 = dot(index(0, 1, 1), x, y - 1, z - 1);
    const n100 = dot(index(1, 0, 0), x - 1, y, z);
    const n101 = dot(index(1, 0, 1), x - 1, y, z - 1);
    const n110 = dot(index(1, 1, 0), x - 1, y - 1, z);
    const n111 = dot(index(1, 1, 1), x - 1, y - 1, z - 1);
    const fadeX = centiPerlinFade(x);
    const fadeY = centiPerlinFade(y);
    const fadeZ = centiPerlinFade(z);
    return centiPerlinLerp(
      centiPerlinLerp(centiPerlinLerp(n000, n100, fadeX), centiPerlinLerp(n001, n101, fadeX), fadeZ),
      centiPerlinLerp(centiPerlinLerp(n010, n110, fadeX), centiPerlinLerp(n011, n111, fadeX), fadeZ),
      fadeY
    );
  };

  const createCentiApi = () => {
    const api = {
      getContext,
      setup(callback) {
        if (typeof callback === "function") setupCallbacks.push(callback);
      },
      size(width, height) {
        setParam("size", [width, height], true);
      },
      sz(width, height) {
        setParam("size", [width, height], true);
      },
      clear() {
        const canvas = findCanvas();
        const ctx = getContext();
        const blendMode = ctx.globalCompositeOperation;
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = blendMode;
        markFrameDirty();
      },
      clr(...values) {
        if (values.length > 0) {
          backgroundColor = values.length === 1 && typeof values[0] === "number"
            ? intToHex(values[0])
            : colorString(...values);
        }
        api.clear();
      },
      bg(...values) {
        backgroundColor = colorString(...values);
        api.clear();
      },
      col(...values) {
        const ctx = getContext();
        const color = colorString(...values);
        centiFillStyle = color;
        centiStrokeStyle = color;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        gradient = null;
      },
      hcol(hex, alphaOverride) {
        const value = Number(hex) >>> 0;
        const alpha = alphaOverride == null ? (value > 0xffffff ? value >>> 24 : 255) : alphaOverride;
        api.col(value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff, alpha);
      },
      hexToInt,
      intToHex,
      fill() {
        fillMode = true;
        gradient = null;
      },
      stroke() {
        fillMode = false;
        gradient = null;
      },
      strk() {
        api.stroke();
      },
      lineWidth(width) {
        getContext().lineWidth = width;
      },
      lw(width) {
        api.lineWidth(width);
      },
      lineJoin(value) {
        const joins = ["bevel", "round", "miter"];
        getContext().lineJoin = joins[value] || getContext().lineJoin;
      },
      lj(value) {
        api.lineJoin(value);
      },
      lineCap(value) {
        const caps = ["butt", "round", "square"];
        getContext().lineCap = caps[value] || getContext().lineCap;
      },
      lc(value) {
        api.lineCap(value);
      },
      blendMode(value) {
        const modes = ["source-over", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
        getContext().globalCompositeOperation = modes[value] || "source-over";
      },
      bm(value) {
        api.blendMode(value);
      },
      pixel(x, y, snap = true) {
        api.rect(snap ? Math.floor(x) : x, snap ? Math.floor(y) : y, 1, 1);
      },
      rect(x, y, width, height) {
        const ctx = getContext();
        if (fillMode) ctx.fillRect(x, y, width, height);
        else ctx.strokeRect(x, y, width, height);
        markFrameDirty();
      },
      oval(x, y, radius, resolution = -1) {
        const ctx = getContext();
        ctx.beginPath();
        if (resolution === -1 || resolution == null) {
          ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        } else {
          const count = Math.max(3, Math.floor(resolution));
          for (let index = 0; index <= count; index += 1) {
            const angle = Math.PI * 2 * index / count;
            const pointX = Math.cos(angle) * radius + x;
            const pointY = Math.sin(angle) * radius + y;
            if (index === 0) ctx.moveTo(pointX, pointY);
            else ctx.lineTo(pointX, pointY);
          }
        }
        drawPath();
      },
      arc(x, y, radius, start, end, anticlockwise = false) {
        const ctx = getContext();
        ctx.beginPath();
        ctx.arc(x, y, radius, start, end, anticlockwise);
        drawPath();
      },
      tri(...points) {
        const values = points.length === 3 ? points.flatMap((point) => [point.x, point.y]) : points;
        if (values.length !== 6) return;
        const ctx = getContext();
        ctx.beginPath();
        ctx.moveTo(values[0], values[1]);
        ctx.lineTo(values[2], values[3]);
        ctx.lineTo(values[4], values[5]);
        ctx.closePath();
        drawPath();
      },
      line(x1, y1, x2, y2) {
        const ctx = getContext();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        markFrameDirty();
      },
      ln(x1, y1, x2, y2) {
        api.line(x1, y1, x2, y2);
      },
      beginShape() {
        getContext().beginPath();
      },
      endShape() {
        drawPath();
      },
      moveTo(x, y) {
        getContext().moveTo(x, y);
      },
      lineTo(x, y) {
        getContext().lineTo(x, y);
      },
      curveTo(...points) {
        const values = points.length === 1 ? points[0] : points;
        if (values.length === 6) getContext().bezierCurveTo(...values);
      },
      curve(...points) {
        const values = points.length === 1 ? points[0] : points;
        if (values.length !== 8) return;
        api.beginShape();
        api.moveTo(values[0], values[1]);
        api.curveTo(values.slice(2));
        api.endShape();
      },
      lines(points, closed = false) {
        if (!points?.length) return;
        const objectPoints = typeof points[0] === "object";
        for (let index = 0; index < points.length; index += objectPoints ? 1 : 2) {
          const x = objectPoints ? points[index].x : points[index];
          const y = objectPoints ? points[index].y : points[index + 1];
          if (index === 0) api.moveTo(x, y);
          else api.lineTo(x, y);
        }
        if (closed) {
          const first = objectPoints ? points[0] : { x: points[0], y: points[1] };
          api.lineTo(first.x, first.y);
        }
      },
      font(face, size, bold = false, italic = false) {
        const resolvedSize = size == null ? (typeof face === "number" ? face : 12) : size;
        const resolvedFace = size == null && typeof face !== "string" ? "Helvetica" : face;
        getContext().font = (italic ? "italic " : "") + (bold ? "bold " : "") + resolvedSize + "px " + resolvedFace;
      },
      text(value, x = 0, y = 0, size) {
        const ctx = getContext();
        if (size != null) ctx.font = "600 " + size + "px Inter, system-ui, sans-serif";
        if (fillMode) ctx.fillText(String(value), x, y);
        else ctx.strokeText(String(value), x, y);
        markFrameDirty();
      },
      textFit(value, x = 0, y = 0, maxWidth) {
        const ctx = getContext();
        if (fillMode) ctx.fillText(String(value), x, y, maxWidth);
        else ctx.strokeText(String(value), x, y, maxWidth);
        markFrameDirty();
      },
      push() { getContext().save(); },
      pop() { getContext().restore(); },
      rotate(radians) { getContext().rotate(radians); },
      scale(x, y = x) { getContext().scale(x, y); },
      translate(x, y) { getContext().translate(x, y); },
      transform(a, b, c, d, e, f) { getContext().transform(a, b, c, d, e, f); },
      grad(x0, y0, x1, y1) {
        fillMode = true;
        gradient = getContext().createLinearGradient(x0, y0, x1, y1);
        getContext().fillStyle = gradient;
      },
      gradR(x0, y0, r0, x1, y1, r1) {
        fillMode = true;
        gradient = getContext().createRadialGradient(x0, y0, r0, x1, y1, r1);
        getContext().fillStyle = gradient;
      },
      gradColor(ratio, ...values) {
        gradient?.addColorStop(Math.min(1, Math.max(0, ratio)), colorString(...values));
      },
      gradHex(ratio, hex, alphaOverride) {
        const value = Number(hex) >>> 0;
        const alpha = alphaOverride == null ? (value > 0xffffff ? value >>> 24 : 255) : alphaOverride;
        gradient?.addColorStop(Math.min(1, Math.max(0, ratio)), colorString(value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff, alpha));
      },
      rnd(min = 1, max) {
        if (max == null) return Math.random() * min;
        return min + Math.random() * (max - min);
      },
      rand(min, max) {
        if (min == null) return Math.random();
        return api.rnd(min, max);
      },
      nz(...values) {
        if (values.length === 1) return centiPerlin2(values[0], 0);
        if (values.length === 2) return centiPerlin2(values[0], values[1]);
        if (values.length === 3) return centiPerlin3(values[0], values[1], values[2]);
        return 0;
      },
      noise(...values) {
        return api.nz(...values);
      },
      interp(a, b, rate) { return a + (b - a) * rate; },
      dist(...values) {
        const [x1, y1, x2, y2] = values.length === 2 ? [values[0].x, values[0].y, values[1].x, values[1].y] : values;
        return Math.hypot(x1 - x2, y1 - y2);
      },
      wrap(value, min, max) {
        const distance = max - min;
        if (distance <= 0) return value;
        while (value < min) value += distance;
        while (value > max) value -= distance;
        return value;
      },
      minMax(value, min, max) { return Math.min(max, Math.max(value, min)); },
      minmax(value, min, max) { return api.minMax(value, min, max); },
      map(value, inMin, inMax, outMin, outMax) { return (value - inMin) / (inMax - inMin) * (outMax - outMin) + outMin; },
      zmap(value, inMin, inMax, outMin, outMax) { return api.minMax(api.map(value, inMin, inMax, outMin, outMax), outMin, outMax); },
      avg(values) { return values?.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0; },
      r2d(radians) { return radians * 180 / Math.PI; },
      radToDeg(radians) { return api.r2d(radians); },
      d2r(degrees) { return degrees * Math.PI / 180; },
      degToRad(degrees) { return api.d2r(degrees); },
      loop(start, end, callback) {
        const increment = end - start > 0 ? 1 : -1;
        for (let value = start; increment > 0 ? value <= end : value >= end; value += increment) callback(value);
      },
      sortNum(values) { values.sort((a, b) => a - b); },
      reverse(values) { values.reverse(); },
      fold(values) { return values.reduce((sum, value) => sum + value, 0); },
      remove(values, predicate) { return values.filter((value) => !predicate(value)); },
      leave(values, count) { return values.length < count ? values : values.slice(values.length - count); },
      Vec2(x, y) { return new CentiVec2(x, y); },
      vec2(x, y) { return new CentiVec2(x, y); },
      Rectangle(x, y, width, height) { return new CentiRectangle(x, y, width, height); },
      boundingBox(points) {
        if (!points?.length) return new CentiRectangle();
        const objectPoints = typeof points[0] === "object";
        const xs = objectPoints ? points.map((point) => point.x) : points.filter((_point, index) => index % 2 === 0);
        const ys = objectPoints ? points.map((point) => point.y) : points.filter((_point, index) => index % 2 === 1);
        const minX = Math.min(...xs); const minY = Math.min(...ys);
        return new CentiRectangle(minX, minY, Math.max(...xs) - minX, Math.max(...ys) - minY);
      },
      cent(points) {
        if (!points || points.length < 2) return { x: 0, y: 0 };
        let x = 0; let y = 0; let area = 0;
        for (let index = 0; index < points.length; index += 1) {
          const first = points[index]; const second = points[(index + 1) % points.length];
          const cross = first.x * second.y - second.x * first.y;
          x += (first.x + second.x) * cross; y += (first.y + second.y) * cross; area += cross;
        }
        area /= 2;
        return area ? { x: x / (6 * area), y: y / (6 * area) } : { x: 0, y: 0 };
      },
      getPointOnCubicBezier(t, a, b, c, d) { return pointOnCubicBezier(t, a, b, c, d); },
      getPointsOnCurve(divisions, x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2) {
        const count = Math.max(2, divisions); const points = [];
        for (let index = 0; index < count; index += 1) {
          const t = index / (count - 1);
          points.push(pointOnCubicBezier(t, x1, cp1x, cp2x, x2), pointOnCubicBezier(t, y1, cp1y, cp2y, y2));
        }
        return points;
      },
      curves(...values) {
        const args = values.length === 1 ? values[0] : values.length === 2 ? [values[0], ...values[1]] : values;
        return args.length === 9 ? api.getPointsOnCurve(...args) : undefined;
      },
      n2f(note) { return Math.pow(2, (note - 69) / 12) * 440; },
      noteToFreq(note) { return api.n2f(note); },
      grid(width, height, columns, rows) {
        const cellWidth = width / columns; const cellHeight = height / rows; const cells = [];
        for (let x = 0; x < columns; x += 1) for (let y = 0; y < rows; y += 1) cells.push({ ix: x, iy: y, x: x * cellWidth, y: y * cellHeight, w: cellWidth, h: cellHeight });
        return cells;
      },
      tree(points) {
        api.kdtree = new KdTree(points, (left, right) => Math.pow(left.x - right.x, 2) + Math.pow(left.y - right.y, 2), ["x", "y"]);
        return api.kdtree;
      },
      nears(point, count, distance) {
        return api.kdtree ? api.kdtree.nearest(point, count, distance) : [];
      },
      new(constructor, args) { return Reflect.construct(constructor, Array.from(args)); },
      seg(number, x, y, width, height) {
        const segments = [1, 2, 11, 19, 20, 29, 37];
        const digits = [0x77, 0x24, 0x5d, 0x6d, 0x2e, 0x6b, 0x7b, 0x25, 0x7f, 0x6f];
        let value = digits[Math.min(9, Math.max(0, Math.floor(number)))];
        for (let index = 0; index < 7; index += 1) {
          if (value & 1) {
            const start = segments[index] & 7;
            const end = segments[index] >> 3;
            api.line(x + width * (start & 1), y + height * 0.5 * (start >> 1), x + width * (end & 1), y + height * 0.5 * (end >> 1));
          }
          value >>= 1;
        }
      },
      segs(number, x, y, width, height, spacing = 0.1) {
        let cursor = x;
        for (const character of String(number)) {
          const digit = Number.parseInt(character, 10);
          if (Number.isNaN(digit)) cursor += width * (0.1 + spacing);
          else { api.seg(digit, cursor, y, width, height); cursor += width * (1 + spacing); }
        }
      },
      shrink(radiusX = 1, radiusY = radiusX) {
        const scaleX = Math.max(1, radiusX); const scaleY = Math.max(1, radiusY);
        applyEffect((ctx, temp, canvas) => {
          const width = canvas.width / scaleX; const height = canvas.height / scaleY;
          temp.clearRect(0, 0, canvas.width, canvas.height);
          temp.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height);
          ctx.drawImage(effectCanvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
        });
      },
      mosaic(radiusX = 1, radiusY = radiusX) {
        const scaleX = Math.max(1, radiusX); const scaleY = Math.max(1, radiusY);
        applyEffect((ctx, temp, canvas) => {
          const width = Math.max(1, Math.floor(canvas.width / scaleX)); const height = Math.max(1, Math.floor(canvas.height / scaleY));
          temp.clearRect(0, 0, canvas.width, canvas.height);
          temp.save();
          temp.imageSmoothingEnabled = false;
          temp.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height);
          temp.restore();
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(effectCanvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
        });
      },
      crash(amount = 6) {
        applyEffect((ctx, temp, canvas) => {
          const width = canvas.width; const height = canvas.height; const length = Math.max(1, Math.floor(amount));
          temp.clearRect(0, 0, width, height); temp.drawImage(canvas, 0, 0);
          const maxOffset = length * length / 100 * width;
          for (let index = 0; index < length; index += 1) {
            const y = Math.floor(api.rand(0, height)); const chunkHeight = Math.min(Math.floor(api.rand(1, height / 4)), height - y);
            const x = Math.floor(api.rand(1, Math.max(2, maxOffset))); const chunkWidth = width - x;
            temp.drawImage(canvas, 0, y, chunkWidth, chunkHeight, x, y, chunkWidth, chunkHeight);
            temp.drawImage(canvas, chunkWidth, y, x, chunkHeight, 0, y, x, chunkHeight);
          }
          const channelOffset = Math.max(1, Math.floor(api.rand(-length * 2, length * 2)));
          temp.save();
          temp.globalCompositeOperation = "lighter";
          temp.globalAlpha = 0.42;
          temp.drawImage(canvas, channelOffset, Math.floor(api.rand(-length, length)));
          temp.drawImage(canvas, -channelOffset, Math.floor(api.rand(-length, length)));
          temp.restore();
          temp.save();
          temp.fillStyle = getCrashScanlinePattern(temp);
          temp.fillRect(0, 0, width, height);
          temp.restore();
          ctx.drawImage(effectCanvas, 0, 0);
        });
      },
      tween(params) { return new TimelineTween(params); }
    };

    for (const key of Object.getOwnPropertyNames(bitmapFontPrototype)) {
      if (key !== "constructor") api[key] = bitmapFontPrototype[key].bind(api);
    }
    for (const key of Object.getOwnPropertyNames(matrixPrototype)) {
      if (key !== "constructor") api[key] = matrixPrototype[key].bind(api);
    }

    for (const key of centiMathFunctions) {
      api[key] = Math[key].bind(Math);
    }
    Object.assign(api, centiMathConstants);
    api.Centi = CentiNamespace;
    api.ease = ease;
    api.Linear = ease.Linear.None;
    api.QuadIn = ease.Quadratic.In; api.QuadOut = ease.Quadratic.Out; api.QuadInOut = ease.Quadratic.InOut;
    api.CubicIn = ease.Cubic.In; api.CubicOut = ease.Cubic.Out; api.CubicInOut = ease.Cubic.InOut;
    api.QuartIn = ease.Quartic.In; api.QuartOut = ease.Quartic.Out; api.QuartInOut = ease.Quartic.InOut;
    api.QuintIn = ease.Quintic.In; api.QuintOut = ease.Quintic.Out; api.QuintInOut = ease.Quintic.InOut;
    api.SineIn = ease.Sinusoidal.In; api.SineOut = ease.Sinusoidal.Out; api.SineInOut = ease.Sinusoidal.InOut;
    api.ExpoIn = ease.Exponential.In; api.ExpoOut = ease.Exponential.Out; api.ExpoInOut = ease.Exponential.InOut;
    api.CircIn = ease.Circular.In; api.CircOut = ease.Circular.Out; api.CircInOut = ease.Circular.InOut;
    api.BackIn = ease.Back.In; api.BackOut = ease.Back.Out; api.BackInOut = ease.Back.InOut;
    api.ElasticIn = ease.Elastic.In; api.ElasticOut = ease.Elastic.Out; api.ElasticInOut = ease.Elastic.InOut;
    api.BounceIn = ease.Bounce.In; api.BounceOut = ease.Bounce.Out; api.BounceInOut = ease.Bounce.InOut;
    api.SmoothStep = ease.Smoothstep.InOut; api.SmootherStep = ease.Smootherstep.InOut;

    Object.defineProperties(api, {
      width: { get: () => findCanvas().width },
      height: { get: () => findCanvas().height },
      cx: { get: () => findCanvas().width / 2 },
      cy: { get: () => findCanvas().height / 2 }
    });

    return api;
  };

  const createCenti3dApi = () => {
    if (centi3d) return centi3d.api;
    const canvas = findCanvas();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.width / Math.max(1, canvas.height), 1, 100000);
    camera.position.set(0, 0, 367);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, preserveDrawingBuffer: true });
    THREE.ColorManagement.enabled = false;
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(canvas.width, canvas.height, false);
    const api = {
      scene,
      camera,
      renderer,
      T: THREE,
      new3d(Ctor, args = []) {
        const instance = Reflect.construct(Ctor, Array.from(args));
        // This only normalizes constructor intensity; later user assignments are left unchanged.
        if (Ctor === THREE.PointLight) instance.intensity *= 4 * Math.PI;
        else if (Ctor === THREE.SpotLight) instance.intensity *= Math.PI;
        return instance;
      },
      getObject(id) {
        return managed3dObjects.get(String(id))?.object ?? null;
      }
    };
    centi3d = { scene, camera, renderer, api };
    return api;
  };

  const installCentiGlobals = (api) => {
    for (const key of ["getContext", "setup", "size", "sz", "clear", "clr", "bg", "col", "hcol", "hexToInt", "intToHex", "fill", "stroke", "strk", "lineWidth", "lw", "lineJoin", "lj", "lineCap", "lc", "blendMode", "bm", "pixel", "rect", "oval", "arc", "tri", "line", "ln", "beginShape", "endShape", "moveTo", "lineTo", "curveTo", "curve", "lines", "font", "text", "textFit", "push", "pop", "rotate", "scale", "translate", "transform", "grad", "gradR", "gradColor", "gradHex", "rnd", "rand", "nz", "noise", "interp", "dist", "wrap", "minMax", "minmax", "map", "zmap", "avg", "r2d", "radToDeg", "d2r", "degToRad", "loop", "sortNum", "reverse", "fold", "remove", "leave", "Vec2", "vec2", "Rectangle", "Matrix", "boundingBox", "cent", "getPointOnCubicBezier", "getPointsOnCurve", "curves", "n2f", "noteToFreq", "grid", "tree", "nears", "seg", "segs", "shrink", "mosaic", "crash", "tween", "bmFont", "bitmapFont", "bmTxt", "bitmapText", "bm5x8", "bm5by8", "bitmap5by8", "getBitmapFontCode", "ease", "Linear", "QuadIn", "QuadOut", "QuadInOut", "CubicIn", "CubicOut", "CubicInOut", "QuartIn", "QuartOut", "QuartInOut", "QuintIn", "QuintOut", "QuintInOut", "CircIn", "CircOut", "CircInOut", "BackIn", "BackOut", "BackInOut", "ElasticIn", "ElasticOut", "ElasticInOut", "BounceIn", "BounceOut", "BounceInOut", "SmoothStep", "SmootherStep", "SineIn", "SineOut", "SineInOut", "ExpoIn", "ExpoOut", "ExpoInOut"]) {
      if (!macroFlushReservedGlobals.has(key)) window[key] = api[key];
    }
    for (const key of centiMathFunctions) {
      window[key] = api[key];
    }
    for (const [key, value] of Object.entries(centiMathConstants)) {
      window[key] = value;
    }
    window.ease = ease;
    window.Centi = CentiNamespace;
    for (const key of ["width", "height", "cx", "cy"]) {
      Object.defineProperty(window, key, { get: () => api[key], configurable: true });
    }
  };

  const installBaseMathGlobals = () => {
    // Creating the Centi API only captures helpers; it does not acquire the 2D canvas context.
    const api = createCentiApi();
    const keys = ["nz", "noise", "rnd", "rand", "interp", "dist", "wrap", "minMax", "minmax", "map", "zmap", "avg", "r2d", "radToDeg", "d2r", "degToRad", "loop", "sortNum", "reverse", "fold", "remove", "leave", "Vec2", "vec2", "Rectangle", "boundingBox", "cent", "getPointOnCubicBezier", "getPointsOnCurve", "curves", "n2f", "noteToFreq", "grid", "tree", "nears", "tween", "ease", "Linear", "QuadIn", "QuadOut", "QuadInOut", "CubicIn", "CubicOut", "CubicInOut", "QuartIn", "QuartOut", "QuartInOut", "QuintIn", "QuintOut", "QuintInOut", "CircIn", "CircOut", "CircInOut", "BackIn", "BackOut", "BackInOut", "ElasticIn", "ElasticOut", "ElasticInOut", "BounceIn", "BounceOut", "BounceInOut", "SmoothStep", "SmootherStep", "SineIn", "SineOut", "SineInOut", "ExpoIn", "ExpoOut", "ExpoInOut"];
    for (const key of keys) window[key] = api[key];
    for (const key of centiMathFunctions) window[key] = api[key];
    for (const [key, value] of Object.entries(centiMathConstants)) window[key] = value;
    window.Centi = CentiNamespace;
    for (const key of ["width", "height", "cx", "cy"]) Object.defineProperty(window, key, { get: () => api[key], configurable: true });
  };

  if (!p5Enabled) installBaseMathGlobals();

  const normalizeColor = (value) => {
    if (typeof value === "number") return "rgb(" + value + " " + value + " " + value + ")";
    return String(value);
  };

  const createPendingParams = () => {
    if (pendingParams.size === 0) return;
    const definitions = {};
    for (const [key, value] of pendingParams) {
      definitions[key] = {
        type: inferType(value),
        default: value,
        value,
        group: "custom",
        ...(pendingMetadata.get(key) || {})
      };
    }
    pendingParams.clear();
    pendingMetadata.clear();
    registerParams(definitions, "script");
  };

  const flushParamChanges = () => {
    for (const [key, value] of pendingParamChanges) {
      parent.postMessage({ type: "macroflush:param-change", clipId, key, value }, "*");
    }
    pendingParamChanges.clear();
  };

  const flushSceneOperations = () => {
    if (pendingSceneOperations.size === 0) return;
    parent.postMessage({
      type: "macroflush:scene",
      clipId,
      operations: [...pendingSceneOperations.values()]
    }, "*");
    pendingSceneOperations.clear();
  };

  const fontUsage = assetDescriptors.some(asset => asset.kind === "font" && asset.fontFamily)
    ? (${Ku.toString()})(document, error => {
      if (recordingSetupSources) setupSourceUses.set("font", error);
      if (activeExportFrameId) exportFrameFailure = error;
    }) : null;
  window.addEventListener("pagehide", () => fontUsage?.dispose());
  const recaptureFrame = () => {
    if (!recapturePending || frameTransferPending || !lastCompletedLiveTick || !frameTransfer.enabled || frameTransferClosed || activeExportFrameId) return;
    recapturePending = false;
    frameTransferEpoch += 1;
    acknowledgedFrameSeq = sentFrameSeq;
    markFrameDirty();
    void transferFrame({ ...lastCompletedLiveTick, frameTransferAvailable: true });
  };
  const transferFrame = async (message) => {
    const isExportFrame = message.exportMode === true && typeof message.exportFrameId === "string";
    const liveTransaction = !isExportFrame && message.liveFrameTransaction === true
      && typeof message.frameParamToken === "string" && message.frameParamToken !== lastTransferredFrameParamToken;
    const captureEpoch = message.captureEpoch ?? 0;
    const captureEpochChanged = captureEpoch !== lastTransferredCaptureEpoch;
    let exportSceneObjects;
    let sceneFailure = null;
    if (isExportFrame) {
      try {
        fontUsage?.validateDom();
        exportSceneObjects = structuredClone([...displayObjects.values()]);
        (${Wu.toString()})(exportSceneObjects, assetDescriptors);
      } catch (error) { sceneFailure = error instanceof Error ? error.message : String(error); }
    }
    const failure = feedbackPreparationFailure || exportFrameFailure || setupFailure || setupSourceUses.values().next().value || unresolvedSourceUses.values().next().value || sceneFailure;
    if (isExportFrame && failure) {
      parent.postMessage({ type: "macroflush:export-error", clipId, exportFrameId: message.exportFrameId, error: failure }, "*");
      return;
    }
    if (!isExportFrame && p5Enabled && failure) return;
    if (!isExportFrame && (feedbackFrameFailure || feedbackSetupFailure || feedbackPreparationFailure)) return;
    ${m ? "if (!isExportFrame && remotePreparation.failed) return;" : ""}
    if (!isExportFrame && (!frameTransfer.enabled || (!liveTransaction && frameTransfer.dirtyOnly && !frameDirty && !captureEpochChanged))) return;
    // The host already owns a bitmap it has not composited yet. Keep the dirty state
    // so the latest render is transferred on the next tick with available capacity.
    if (!isExportFrame && message.frameTransferAvailable === false) return;
    if (!isExportFrame && frameTransferPending) {
      if (liveTransaction) recapturePending = true;
      return;
    }
    if (!isExportFrame && sentFrameSeq !== acknowledgedFrameSeq) return;
    // Consecutive n / fps timestamps can differ by a few rounding bits below
    // 1 / fps. Do not discard a due frame because of that numerical noise.
    // An invalidated host capture needs a replacement even at the same clip time.
    if (!isExportFrame && !liveTransaction && !captureEpochChanged && frameTransferEpoch === lastTransferredEpoch
      && message.time >= lastFrameTransferTime && message.time - lastFrameTransferTime + 1e-9 < 1 / frameTransfer.fps) return;
    if (typeof createImageBitmap !== "function") return;

    const canvas = p5Enabled ? p5Adapter?.canvas : document.querySelector("canvas");
    if (!canvas) {
      if (isExportFrame) parent.postMessage({
        type: "macroflush:export-error",
        clipId,
        exportFrameId: message.exportFrameId,
        error: "PNG export currently requires HTML Clips to render into a canvas."
      }, "*");
      return;
    }

    if (!isExportFrame) frameTransferPending = true;
    const capturedDirtyVersion = dirtyVersion;
    const capturedEpoch = frameTransferEpoch;
    try {
      const bitmap = await createImageBitmap(canvas);
      if (frameTransferClosed) { bitmap.close(); return; }
      const helperCanvas = !isExportFrame && message.captureEditorHelpers
        ? document.querySelector('canvas[data-macroflush-editor-helpers="true"]') : null;
      let helperBitmap = null;
      if (helperCanvas) {
        try { helperBitmap = await createImageBitmap(helperCanvas); } catch (_) {}
      }
      if (frameTransferClosed) { bitmap.close(); helperBitmap?.close(); return; }
      const frameSeq = ++sentFrameSeq;
      parent.postMessage({
        type: "macroflush:frame",
        clipId,
        documentToken,
        frame: message.frame,
        compFrame: message.compFrame,
        frameParamToken: message.frameParamToken ?? null,
        captureEpoch: message.captureEpoch ?? 0,
        helperPlacementId: message.editorHelperPlacementId ?? null,
        time: message.time,
        frameSeq,
        ...(isExportFrame ? { exportFrameId: message.exportFrameId, exportSceneObjects } : {}),
        bitmap,
        ...(helperBitmap ? { helperBitmap } : {})
      }, "*", helperBitmap ? [bitmap, helperBitmap] : [bitmap]);
      frameDirty = dirtyVersion !== capturedDirtyVersion;
      lastFrameTransferTime = message.time;
      lastTransferredEpoch = capturedEpoch;
      if (!isExportFrame) {
        lastTransferredCaptureEpoch = captureEpoch;
        lastTransferredFrameParamToken = message.frameParamToken ?? null;
      }
    } catch (error) {
      console.warn("MacroFlush frame transfer failed", error);
      if (isExportFrame) parent.postMessage({
        type: "macroflush:export-error", clipId, exportFrameId: message.exportFrameId,
        error: error instanceof Error ? error.message : String(error)
      }, "*");
    } finally {
      if (!isExportFrame) frameTransferPending = false;
      if (recapturePending) Promise.resolve().then(recaptureFrame);
    }
  };

  window.addEventListener("message", async (event) => {
    const message = event.data;
    if (event.source !== parent || !message || message.clipId !== clipId) {
      return;
    }

    if (message.type === "macroflush:request-ready") {
      if (message.documentToken !== documentToken || typeof message.requestId !== "string") return;
      readyRequestId = message.requestId;
      if (documentReady) notifyDocumentReady();
      return;
    }

    if (message.type === "macroflush:feedback-resources") {
      if (!hasFeedback || message.documentToken !== documentToken) return;
      try {
        if (feedbackState.receive(message)) { feedbackPreparationFailure = null; feedbackInputStatusKey = ""; if (feedbackTimer !== null) imageWorkTimers.cancel(feedbackTimer); feedbackResolve?.(); markFrameDirty(); }
      } catch (error) { feedbackPreparationFailure = String(error); feedbackReject?.(error); reportRuntimeError(error, "feedback resources"); }
      return;
    }

    if (message.type === "macroflush:update-assets") {
      if (!liveAssetUpdates || message.documentToken !== documentToken || !Number.isSafeInteger(message.version)
        || message.version <= assetVersion || !Array.isArray(message.assets)) return;
      const previous = new Map(assetDescriptors.map(asset => [asset.id, JSON.stringify(asset)]));
      const next = new Map(message.assets.map(asset => [asset.id, JSON.stringify(asset)]));
      const audioSources = assets => JSON.stringify(assets.filter(asset => asset.kind === "audio").map(asset => [asset.id, asset.sourceUrl]));
      if (audioSources(assetDescriptors) !== audioSources(message.assets)) audioAnalysisPayload = { analyses: {}, stems: {}, placements: [] };
      for (const id of svgAssetCache.keys()) if (previous.get(id) !== next.get(id)) svgAssetCache.delete(id);
      assetDescriptors.splice(0, assetDescriptors.length, ...message.assets);
      assetImages.refresh();
      assetVersion = message.version;
      initialAssetsResolve?.();
      markFrameDirty();
      parent.postMessage({ type: "macroflush:assets-updated", clipId, documentToken, version: assetVersion }, "*");
      return;
    }

    if (message.type === "macroflush:invalidate-audio-analysis") {
      if (!liveAssetUpdates || message.documentToken !== documentToken || !Number.isSafeInteger(message.version)
        || message.version < audioAnalysisVersion) return;
      audioAnalysisVersion = message.version;
      audioAnalysisPayload = { analyses: {}, stems: {}, placements: [] };
      return;
    }

    if (message.type === "macroflush:request-schema") {
      emitSchema();
      return;
    }

    if (message.type === "macroflush:update-3d-script") {
      updateManaged3dScript(message);
      return;
    }

    if (message.type === "macroflush:request-scene") {
      for (const object of displayObjects.values()) {
        emitSceneOperation({ type: "upsert", object: { ...object } });
      }
      return;
    }

    if (message.type === "macroflush:create-params") {
      createPendingParams();
      return;
    }

    if (message.type === "macroflush:frame-config") {
      frameTransfer = {
        enabled: Boolean(message.enabled),
        fps: Math.max(1, Number(message.fps) || 30),
        dirtyOnly: message.dirtyOnly !== false
      };
      markFrameDirty();
      if (!frameTransfer.enabled) recapturePending = false;
      return;
    }

    if (message.type === "macroflush:request-frame") {
      if (message.documentToken !== documentToken || p5Isolated || !frameTransfer.enabled) return;
      recapturePending = true;
      recaptureFrame();
      return;
    }

    if (message.type === "macroflush:audio-analysis") {
      if (liveAssetUpdates && (message.documentToken !== documentToken || message.version !== audioAnalysisVersion)) return;
      audioAnalysisPayload = message.payload || { analyses: {}, stems: {}, placements: [] };
      return;
    }

    if (message.type === "macroflush:audio-placements") {
      audioAnalysisPayload.placements = message.placements || [];
      return;
    }

    if (message.type === "macroflush:emit" && typeof message.name === "string") {
      const callbacks = eventListeners.get(message.name);
      if (callbacks) {
        for (const callback of callbacks) {
          try {
            callback(message.payload);
          } catch (error) {
            reportRuntimeError(error, "onEvent:" + message.name, lastCompFrame);
          }
        }
      }
      return;
    }

    if (message.type !== "macroflush:tick") return;
    feedbackFrameFailure = null;
    if (p5Isolated && (!message.p5Replay || typeof message.p5Replay.requestId !== "string")) return;
    if (p5Enabled && setupFailure) {
      if (message.exportMode === true) parent.postMessage({ type: "macroflush:export-error", clipId, exportFrameId: message.exportFrameId, error: setupFailure }, "*");
      return;
    }
    ${m ? "if (remotePreparation.failed) {\n      if (message.exportMode === true && typeof message.exportFrameId === \"string\") parent.postMessage({\n        type: \"macroflush:export-error\", clipId, exportFrameId: message.exportFrameId, error: setupFailure || \"External resource preparation failed.\"\n      }, \"*\");\n      return;\n    }" : ""}
    activeExportFrameId = message.exportMode === true && typeof message.exportFrameId === "string" ? message.exportFrameId : null;
    exportFrameFailure = null;
    const imageWorkDeadline = Date.now() + 5000;
    const awaitImageWork = async () => {
      if (message.exportMode !== true) return true;
      try { await assetImageWork.drain(imageWorkDeadline); return true; }
      catch (error) {
        reportRuntimeError(error, "image export", message.compFrame);
        parent.postMessage({ type: "macroflush:export-error", clipId, exportFrameId: message.exportFrameId, error: String(error) }, "*");
        activeExportFrameId = null;
        return false;
      }
    };
    unresolvedSourceUses.clear();
    if (message.exportMode === true || !message.editorHelperPlacementId) editorThreeDHelpers?.dispose();

    const modelAssetIds = [...new Set((Array.isArray(message.threeDObjects) ? message.threeDObjects : [])
      .filter((descriptor) => descriptor.kind === "model-3d")
      .map((descriptor) => descriptor.modelAssetId))];
    const loading = modelAssetIds.map((id) => modelRegistry?.ensure(id)).filter(Boolean);
    const requiredTextures = new Set();
    for (const descriptor of Array.isArray(message.threeDObjects) ? message.threeDObjects : []) {
      const material = descriptor.kind === "model-3d" ? descriptor.modelMaterialOverrides : descriptor.material;
      const id = material?.type === "toon" ? material.gradientMapAssetId : material?.type === "matcap" ? material.matcapAssetId : null;
      const role = material?.type === "toon" ? "gradient" : "matcap";
      if (id) { requiredTextures.add(role + ":" + id); loading.push(materialTextures?.ensure(id, role)); }
    }
    if (loading.length) {
      try { await Promise.all(loading); }
      catch (error) {
        reportRuntimeError(error, "3D model load", message.compFrame);
        if (message.exportMode && message.exportFrameId) parent.postMessage({
          type: "macroflush:export-error", clipId, exportFrameId: message.exportFrameId,
          error: error instanceof Error ? error.message : String(error)
        }, "*");
        return;
      }
    }

    if (Number.isInteger(message.compFrame)) {
      if (lastTickCompFrame !== null && message.compFrame !== lastTickCompFrame
        && message.compFrame !== lastTickCompFrame + 1) frameTransferEpoch += 1;
      lastTickCompFrame = message.compFrame;
    }

    timelineTimeMs = message.time * 1000;
    setRandomForTick(message);
    if (message.exportMode === true) {
      for (const animation of document.getAnimations()) {
        if (animation.playState !== "paused") animation.pause();
      }
    }
    lastCompFrame = message.compFrame;
    compositionParamValues = message.compositionParams || {};
    crossClipParamValues = message.crossClipParams || {};
    crossClipFrameToken = typeof message.frameParamToken === "string" ? message.frameParamToken : null;
    allowedParamWrites = Array.isArray(message.allowedParamWrites) ? message.allowedParamWrites : null;
    crossClipWrites = new Map();
    // Editor ticks predate transfer acknowledgements. Treat an omitted field as
    // immediately acknowledged so Editor frame capture keeps its existing behavior.
    if (Number.isFinite(Number(message.frameTransferAckSeq))) {
      acknowledgedFrameSeq = Math.min(sentFrameSeq, Math.max(acknowledgedFrameSeq, Math.floor(Number(message.frameTransferAckSeq))));
    } else {
      acknowledgedFrameSeq = sentFrameSeq;
    }

    const applyHostParams = () => {
      for (const [key, value] of Object.entries(message.params || {})) {
        setParam(key, value, false);
      }
    };

    applyHostParams();

    if (!setupComplete) {
      setupComplete = true;
      for (const callback of setupCallbacks) {
        try {
          assetImageWork.callback("setup", () => callback(), message.exportMode === true);
        } catch (error) {
          reportRuntimeError(error, "setup", message.compFrame);
        }
      }
      if (message.exportMode === true && !(await awaitImageWork())) return;
      // setup() may call size() or mutate other builtins; host-evaluated values win for this tick.
      applyHostParams();
    }
    recordingSetupSources = false;
    feedbackTime = message.time;

    if (centi3dEnabled) {
      createCenti3dApi();
      const canvas = findCanvas();
      const next3dScripts = new Map((Array.isArray(message.threeDObjects) ? message.threeDObjects : [])
        .map((descriptor) => [descriptor.id, descriptor.scriptAssetId]));
      for (const [id, entry] of managed3dScripts) {
        if (next3dScripts.get(id) === entry.scriptAssetId) continue;
        disposeManaged3dScript(id, entry);
        managed3dScripts.delete(id);
      }
      managed3dObjects = reconcileManagedThreeDObjects(
        THREE, centi3d.scene, managed3dObjects, message.threeDObjects, canvas.width / canvas.height, modelRegistry, materialTextures
      );
      materialTextures?.prune(requiredTextures);
      runManaged3dScripts(message);
    }

    updateTimelineTweens(timelineTimeMs);

    const buildFramePayload = () => ({
      time: message.time,
      frame: message.frame,
      progress: message.progress,
      compTime: message.compTime,
      compFrame: message.compFrame,
      runTime: message.appRuntime,
      runFrame: message.runFrame,
      bar: message.bar,
      beat: message.beat,
      cueName: message.cueName ?? null
    });

    const runCallbacks = (callbacks) => {
      if (feedbackInput && feedbackFrameFailure) return;
      for (const callback of callbacks) {
        try {
          assetImageWork.callback("frame callback", () => callback(buildFramePayload()), message.exportMode === true);
        } catch (error) {
          reportRuntimeError(error, "callback", message.compFrame);
        }
      }
    };

    const p5DrawStarted = p5Isolated ? performance.now() : 0;
    if (feedbackInput) {
      try { p5Adapter?.prepareFrame(message); feedbackInput.prepare(message); reportFeedbackInputStatus(null); }
      catch (error) { reportRuntimeError(error, "feedback input", message.compFrame); }
    }
    const context = centiEnabled ? getContext() : null;
    context?.save();
    context?.setTransform(1, 0, 0, 1, 0, 0);
    try {
      if (message.entering) {
        runCallbacks(enterCallbacks);
      }

      const beatKey = typeof message.bar === "number" && typeof message.beat === "number" ? message.bar + "." + message.beat : null;
      if (beatKey !== null && beatKey !== lastBeatKey) {
        lastBeatKey = beatKey;
        runCallbacks(beatCallbacks);
      }

      const cueName = message.cueName ?? null;
      const cueReentered = cueName !== null
        && cueName === lastCueName
        && typeof lastCueCompFrame === "number"
        && message.compFrame < lastCueCompFrame;
      if (cueName !== lastCueName || cueReentered) {
        lastCueName = cueName;
        if (cueName !== null) runCallbacks(cueCallbacks);
      }
      lastCueCompFrame = cueName === null ? null : message.compFrame;

      runCallbacks(frameCallbacks);
      if (p5Adapter && (!feedbackInput || !feedbackFrameFailure)) {
        try {
          if (feedbackInput) { feedbackInput.restore(message); p5Adapter.drawFrame(message); }
          else p5Adapter.render(message);
        }
        catch (error) {
          reportRuntimeError(error, "p5 draw", message.compFrame);
          exportFrameFailure = "p5 draw: " + (error instanceof Error ? error.message : String(error));
        }
      }
      if (message.exportMode === true && !(await awaitImageWork())) return;
      if (centi3d) {
        const selected = managed3dObjects.get(message.threeDCameraId);
        const renderCamera = selected?.kind === "camera-3d" ? selected.object : centi3d.camera;
        let helperCamera = renderCamera;
        try {
          const transition = message.threeDCameraTransition;
          if (transition && transition.progress < 1) {
            const canvas = findCanvas();
            const resources = getCameraTransitionResources(transition, canvas);
            const fromEntry = resources.rigObjects.get(transition.fromCameraId);
            const fromCamera = fromEntry?.kind === "camera-3d" ? fromEntry.object : centi3d.camera;
            const renderer = centi3d.renderer;
            if (transition.type === 'transform') {
              helperCamera = makeTransformCamera(resources, fromCamera, renderCamera, transition.progress, canvas);
              renderer.render(centi3d.scene, helperCamera);
            } else {
              helperCamera = null;
              try {
                renderer.setRenderTarget(resources.fromTarget);
                renderer.render(centi3d.scene, fromCamera);
                renderer.setRenderTarget(resources.toTarget);
                renderer.render(centi3d.scene, renderCamera);
              } finally {
                renderer.setRenderTarget(null);
              }
              resources.quad.material.uniforms.progress.value = transition.progress;
              renderer.render(resources.quadScene, resources.quadCamera);
            }
          } else {
            disposeCameraTransitionResources();
            centi3d.renderer.render(centi3d.scene, renderCamera);
          }
          if (message.exportMode !== true && message.editorHelperPlacementId && helperCamera) {
            editorThreeDHelpers?.render(managed3dObjects.get(message.editorHelperPlacementId), helperCamera, findCanvas());
          } else editorThreeDHelpers?.dispose();
          markFrameDirty();
        }
        catch (error) { editorThreeDHelpers?.dispose(); reportRuntimeError(error, "centi3d render", message.compFrame); }
      }
    } finally {
      context?.restore();
    }

    if (p5Isolated) {
      parent.postMessage({ type: "macroflush:p5-replay-ack", clipId, documentToken,
        generation: message.p5Replay.generation, requestId: message.p5Replay.requestId,
        metrics: { cpuMs: performance.now() - p5DrawStarted, ...p5IsolatedGuards.accounting() },
        ...(exportFrameFailure ? { error: exportFrameFailure } : {}) }, "*");
      if (exportFrameFailure || !message.p5Replay.final) { activeExportFrameId = null; return; }
      transferFrame(message);
      activeExportFrameId = null;
      return;
    }

    // A script may assign the same property several times in one callback.
    // Send only its final value once per clip/key/tick to avoid host rerenders.
    flushParamChanges();
    flushSceneOperations();
    if (typeof message.frameParamToken === "string") parent.postMessage({
      type: "macroflush:param-frame-complete", clipId, documentToken,
      frameParamToken: message.frameParamToken, writes: [...crossClipWrites.values()]
    }, "*");
    if (!message.exportMode) lastCompletedLiveTick = message;
    transferFrame(message);
    activeExportFrameId = null;
  });
  if (liveAssetUpdates) parent.postMessage({ type: "macroflush:assets-request", clipId, documentToken }, "*");
  if (hasFeedback) parent.postMessage({ type: "macroflush:feedback-request", clipId, documentToken }, "*");
})();
`, y = Iu(r.filter((e) => e.kind !== "script" && e.kind !== "style" || p.resources.includes(e)), typeof window > "u" ? void 0 : window.location.origin, i.some((e) => e.kind === "font" && e.sourceUrl?.startsWith("data:")), i.some((e) => e.kind === "model-3d"), s, c.hasDataUriImages === !0 || i.some((e) => e.kind === "image" && e.sourceUrl?.startsWith("data:"))), b = i.filter((e) => e.kind === "font" && e.fontFamily), x = "window.__macroflushNotifyReady();", S = l || b.length || c.liveAssets || g.length || m || d ? `<script>${_d(`(() => {
    const preparation = window.__macroflushFontPreparation;
    const remotePreparation = window.__macroflushRemotePreparation;
    const assetsReady = window.__macroflushAssetsReady;
    const imagesReady = window.__macroflushImagesReady;
    const feedbackReady = window.__macroflushFeedbackReady;
    delete window.__macroflushFontPreparation;
    delete window.__macroflushAssetsReady;
    delete window.__macroflushImagesReady;
    delete window.__macroflushFeedbackReady;
    let closed = false;
    window.addEventListener("pagehide", () => { closed = true; preparation?.dispose(); remotePreparation?.dispose(); });
    Promise.all([preparation?.prepare(), assetsReady, imagesReady, remotePreparation?.ready, feedbackReady]).then(async () => {
      if (closed) return;
      ${l ? "window.__macroflushPrepareP5();" : ""}
      ${d ? `window.__macroflushFeedbackAuthored(true);
      const authoredScripts = ${vd(h.scripts)};
      for (let index = 0; index < authoredScripts.length; index++) {
        const item = authoredScripts[index];
        const marker = [...document.querySelectorAll("script[data-macroflush-feedback-script]")].find(tag => tag.getAttribute("data-macroflush-feedback-script") === ${vd(c.documentToken ?? "")} + ":" + index);
        if (!marker) throw new Error("Feedback authored Script placeholder is missing.");
        const tag = document.createElement("script");
        for (const attr of item.attrs) tag.setAttribute(attr.name, attr.value);
        tag.textContent = item.source;
        const waits = tag.hasAttribute("src") || tag.type.toLowerCase() === "module";
        if (waits) await new Promise((resolve, reject) => {
          const cleanup = () => { clearTimeout(timer); window.removeEventListener("pagehide", abort); tag.onload = tag.onerror = null; };
          const abort = () => { cleanup(); reject(new Error("Feedback authored Script disposed.")); };
          const timer = setTimeout(() => { cleanup(); reject(new Error("Feedback authored Script loading timed out: " + (tag.src || "inline module"))); }, 5000);
          tag.onload = () => { cleanup(); resolve(); };
          tag.onerror = () => { cleanup(); reject(new Error("Feedback authored Script failed: " + (tag.src || "inline module"))); };
          window.addEventListener("pagehide", abort, { once: true });
          tag.async = false; marker.replaceWith(tag);
        }); else marker.replaceWith(tag);
        if (closed) return;
        window.__macroflushFeedbackStartupCheck();
      }` : ""}
      const script = document.createElement("script");
      script.textContent = ${JSON.stringify(t.js)};
      document.body.appendChild(script);
      ${d ? "window.__macroflushFeedbackStartupCheck(); window.__macroflushFeedbackAuthored(false);" : ""}
      ${l ? "window.__macroflushValidateP5();" : ""}
      ${x}
    }).catch(error => {
      if (closed) return;
      ${l ? "window.__macroflushFailP5(error);" : ""}
      ${l && d ? `parent.postMessage({ type: "macroflush:runtime-error", clipId: ${JSON.stringify(e)}, documentToken: ${JSON.stringify(c.documentToken ?? "")}, feedbackError: true, error: String(error) }, "*");` : ""}
      if (remotePreparation) remotePreparation.fail("HTML Clip preparation: " + String(error));
      ${l ? "" : `else parent.postMessage({ type: "macroflush:runtime-error", clipId: ${JSON.stringify(e)}, documentToken: ${JSON.stringify(c.documentToken ?? "")}, feedbackError: ${d}, error: String(error) }, "*");`}
      ${l && !d ? x : ""}
    });
  })();`)}<\/script>` : `<script>${_d(t.js)}<\/script><script>${x}<\/script>`, C = i.filter((e) => e.kind === "script" && e.scriptMode !== "global").map((e) => `<script>${_d(`window.__macroflushRegisterScript(${JSON.stringify(e.id)}, function() {\n${e.scriptSource ?? ""}\n});`)}<\/script>`).join("\n"), w = (c.libraries ?? []).map((e) => i.find((t) => t.id === e)).map((e) => `<script>window.__macroflushLoadGlobalLibrary(${vd(e.name)}, ${vd(e.scriptSource ?? "")});<\/script>`).join("\n"), ee = p.errors.length ? "" : p.resources.map((e, t) => {
		let n = `onload="${l && e.kind === "script" ? `window.__macroflushObserveP5(${yd(JSON.stringify(e.url))});` : ""}window.__macroflushRemotePreparation.complete(${t}, true)" onerror="window.__macroflushRemotePreparation.complete(${t}, false)"`, r = `integrity="${e.hash}" crossorigin="anonymous" ${n}`;
		return e.kind === "script" ? `<script src="${yd(e.url)}" ${r}><\/script>` : `<link rel="stylesheet" href="${yd(e.url)}" ${r} />`;
	}).join("\n");
	return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="${y}" />
    ${b.length ? `<script>${_d(`window.__macroflushFontPreparation = (${Gu.toString()})(${JSON.stringify(b)});`)}<\/script>` : ""}
    <script>${_d(v)}<\/script>
    ${C}
    ${w}
    ${ee}
    <style>
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: transparent;
      }

      ${t.css}
    </style>
  </head>
  <body>
    ${h.html}
    ${S}
  </body>
</html>`;
}
function _d(e) {
	return e.replace(/<\/script/gi, "<\\/script");
}
function vd(e) {
	return JSON.stringify(e).replace(/[<\u2028\u2029]/g, (e) => e === "<" ? "\\u003c" : e === "\u2028" ? "\\u2028" : "\\u2029");
}
function yd(e) {
	return e.replace(/[&"<>]/g, (e) => ({
		"&": "&amp;",
		"\"": "&quot;",
		"<": "&lt;",
		">": "&gt;"
	})[e]);
}
//#endregion
//#region src/core/feedbackProducers.ts
function bd(e) {
	if (![
		"editor",
		"player",
		"export-sequence",
		"export-still"
	].includes(e)) throw new D("invalid-value", "Invalid input host scope.");
	let t = qe(), n = !1;
	return {
		reset() {
			n || t.reset();
		},
		dispose() {
			n = !0;
		},
		visit(r, i = {}, a) {
			if (n) throw new D("canceled", "Input host is disposed.");
			let o = e === "export-sequence" ? "playback" : e === "export-still" ? "sample-only" : i.inputDelivery ?? "sample-only";
			return Object.freeze({
				time: r,
				inputDelivery: o,
				delivery: t.visit(r, { inputDelivery: o }, a)
			});
		}
	};
}
function xd() {
	let e = /* @__PURE__ */ new Map(), t = !1, n = (e, t) => {
		if (typeof e != "string" || !e || e.length > 16384) throw new D("invalid-value", `Invalid ${t}.`);
	}, r = (e) => {
		if (e === null) return null;
		if (!e || typeof e != "object") throw new D("invalid-time", "Invalid child time mapping.");
		return Ve(e.time), n(e.segmentKey, "mapping segment"), e;
	}, i = (e) => {
		e.active && e.transport.reset(), e.active = !1, e.parent = void 0, e.local = void 0;
	}, a = (e) => Object.freeze({
		...e,
		delivery: Object.freeze({ ...e.delivery })
	});
	return {
		visit(o) {
			if (t) throw new D("canceled", "Input paths are disposed.");
			n(o.pathId, "execution path"), n(o.definitionKey, "input definition");
			let s = o.parent;
			if (Ve(s.time), Ke(s.delivery), !["playback", "sample-only"].includes(s.inputDelivery) || s.inputDelivery === "sample-only" && s.delivery.mode === "continuous") throw new D("invalid-value", "Inconsistent parent input intent.");
			if (s.delivery.mode === "continuous" && s.delivery.previousLocalTime >= s.time) throw new D("invalid-time", "Parent continuity must advance time.");
			let c = e.get(o.pathId), l = c?.parent, u = c?.lastSeen;
			if (u && (s.delivery.transportEpoch < u.delivery.transportEpoch || s.delivery.transportEpoch === u.delivery.transportEpoch && s.delivery.deliveryId < u.delivery.deliveryId)) throw new D("invalid-time", "Stale parent input delivery.");
			let d = l && s.delivery.transportEpoch === l.delivery.transportEpoch && s.delivery.deliveryId === l.delivery.deliveryId;
			if (u && s.delivery.transportEpoch === u.delivery.transportEpoch && s.delivery.deliveryId === u.delivery.deliveryId && (s.time !== u.time || s.inputDelivery !== u.inputDelivery || s.delivery.mode !== u.delivery.mode || s.delivery.previousLocalTime !== u.delivery.previousLocalTime)) throw new D("invalid-time", "One parent delivery cannot represent different visits.");
			let f = r(o.mapTime(s.time));
			if (!f) return c && (c.lastSeen = a(s), i(c)), null;
			let p = c ?? {
				transport: qe(),
				active: !1
			}, m = p.parent ? r(o.mapTime(p.parent.time)) : null;
			(o.cause || !p.active || p.definition !== o.definitionKey || l?.delivery.transportEpoch !== s.delivery.transportEpoch || s.delivery.mode !== "continuous" && !d || !m || m.segmentKey !== f.segmentKey || m.segmentKey !== p.local?.segmentKey || m.time !== p.local?.time || f.time < m.time) && p.transport.reset();
			let h = p.transport.visit(f.time, { inputDelivery: s.inputDelivery });
			return p.active = !0, p.definition = o.definitionKey, p.parent = a(s), p.lastSeen = p.parent, p.local = Object.freeze({ ...f }), e.set(o.pathId, p), h;
		},
		deactivate(t) {
			let n = e.get(t);
			n && i(n);
		},
		reset() {
			for (let t of e.values()) i(t);
		},
		resetParent() {
			for (let t of e.values()) i(t), t.lastSeen = void 0;
		},
		forget(t) {
			e.delete(t);
		},
		dispose() {
			t = !0, e.clear();
		}
	};
}
//#endregion
//#region src/core/feedbackStatus.ts
function Sd(e) {
	let { binding: t } = e, n = t ? {
		assetId: t.assetId,
		...t.pointerChannelId === void 0 ? {} : { pointerChannelId: t.pointerChannelId }
	} : {};
	if (!t || t.pointerChannelId === void 0) return Object.freeze({
		status: "off",
		requested: !1,
		...n
	});
	let r = (e, r, i) => Object.freeze({
		status: e,
		requested: !0,
		...n,
		issue: Object.freeze({
			code: r,
			message: i,
			assetId: t.assetId,
			channelId: t.pointerChannelId
		})
	});
	if (e.isolated || e.unsupportedReason) return r("unsupported", "unsupported-playback", e.unsupportedReason ?? "Feedback input in isolated replay requires P4.");
	let i = e.assets.find((e) => e.id === t.assetId);
	if (i?.kind !== "feedback") return r("unavailable", "missing-asset", `Feedback asset ${t.assetId} is unavailable.`);
	if (e.resourceError || e.resourceReady === !1) return r("unavailable", "resource-not-ready", e.resourceError ?? `Feedback resource ${i.name} is not ready.`);
	try {
		let { revision: a, sampler: o } = si(i);
		if (o.validateMapping({
			offset: t.offset,
			rate: t.rate,
			loop: t.loop
		}), ![
			"composition",
			"normalized",
			"clip"
		].includes(t.space)) throw new D("invalid-value", "Unknown Feedback coordinate space.");
		let s = o.summary.channels.find((e) => e.id === t.pointerChannelId);
		return s ? s.kind !== "pointer" || !s.supported ? r("unavailable", "unsupported-channel", `Channel ${s.id} is not supported pointer input.`) : e.runtimeIssue ? r(e.runtimeIssue.code === "unsupported-playback" ? "unsupported" : "unavailable", e.runtimeIssue.code, e.runtimeIssue.message) : Object.freeze({
			status: "ready",
			requested: !0,
			...n,
			revision: a
		}) : r("unavailable", "missing-channel", `Pointer channel ${t.pointerChannelId} is unavailable.`);
	} catch (e) {
		return r("unavailable", e instanceof D ? e.code : "invalid-format", e instanceof Error ? e.message : "Invalid Feedback resource.");
	}
}
//#endregion
//#region src/core/sourceRef.ts
var $ = class extends Error {
	code;
	constructor(e, t) {
		super(t), this.code = e, this.name = "SourceResolutionError";
	}
};
function Cd(e) {
	if (e === void 0 || e.trim() === "") return { status: "missing" };
	let t = e.trim();
	if (/^data:/i.test(t)) {
		if (!/^data:[^,]*,/i.test(t)) throw new $("invalid", "Malformed data URI.");
		return {
			status: "ready",
			source: {
				kind: "embedded",
				dataUrl: e
			}
		};
	}
	if (t.startsWith("blob:")) return {
		status: "transient",
		url: e
	};
	if (/^https?:/i.test(t)) {
		try {
			new URL(t);
		} catch {
			throw new $("invalid", "Malformed source URL.");
		}
		return {
			status: "ready",
			source: {
				kind: "url",
				url: e,
				base: "absolute"
			}
		};
	}
	if (/^(?:\/|\\|[a-zA-Z]:[\\/]|file:)/.test(t)) throw new $("unsupported", "Legacy filesystem paths require an explicit linked import.");
	if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(t)) throw new $("invalid", "Unsupported source URL scheme.");
	return {
		status: "ready",
		source: {
			kind: "url",
			url: e,
			base: "asset-base"
		}
	};
}
//#endregion
//#region src/core/projectFormatV3.ts
function wd(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid SourceRef.");
	let t = e, n = t.kind === "embedded" ? ["kind", "dataUrl"] : t.kind === "linked" ? [
		"kind",
		"path",
		"base"
	] : [
		"kind",
		"url",
		"base"
	];
	if (Object.keys(t).some((e) => !n.includes(e))) throw Error("Unexpected SourceRef field.");
	if (t.kind === "linked") {
		if (t.base !== "project" || typeof t.path != "string" || !t.path.trim() || /^(?:\/|\\|[a-zA-Z][a-zA-Z\d+.-]*:)/.test(t.path)) throw Error("Linked SourceRef must use a project-relative path.");
		return;
	}
	let r = Cd(t.kind === "embedded" ? t.dataUrl : t.kind === "url" ? t.url : void 0);
	if (r.status !== "ready" || r.source.kind !== t.kind) throw Error("Invalid persistent SourceRef.");
	if (t.kind === "url" && r.source.kind === "url" && t.base !== r.source.base) throw Error("SourceRef URL base does not match its URL.");
}
function Td(e) {
	if (!e || typeof e != "object" || e.clipFormatVersion !== 3) throw Error("Expected a V3 project.");
	let t = structuredClone(e);
	if (!Array.isArray(t.assets)) throw Error("V3 project assets are invalid.");
	let n = t.assets.map((e) => {
		if (![
			"image",
			"video",
			"audio",
			"font",
			"model-3d"
		].includes(e.kind)) return e;
		if ("sourceUrl" in e || "stemSources" in e) throw Error("V3 binary assets must use sourceRef/stemRefs, not legacy URLs.");
		let t = e;
		if (t.sourceRef !== void 0 && wd(t.sourceRef), t.stemRefs !== void 0) {
			if (e.kind !== "audio" || !t.stemRefs || typeof t.stemRefs != "object" || Array.isArray(t.stemRefs)) throw Error("Only audio assets can contain stemRefs.");
			for (let [e, n] of Object.entries(t.stemRefs)) {
				if (![
					"drums",
					"bass",
					"other",
					"vocals"
				].includes(e)) throw Error("Unknown stem reference.");
				wd(n);
			}
		}
		if (e.kind === "model-3d" && t.sourceRef?.kind !== "embedded") throw new $("unsupported", "V3 models remain embedded until dependency-aware 3D support is implemented.");
		let { sourceRef: n, stemRefs: r, ...i } = t;
		return {
			...i,
			...n?.kind === "embedded" ? { sourceUrl: n.dataUrl } : {}
		};
	});
	return Sa({
		...t,
		clipFormatVersion: 2,
		assets: n
	}), t;
}
//#endregion
//#region src/core/sourceResolver.ts
function Ed() {
	return new $("aborted", "Source resolution was aborted.");
}
function Dd() {
	let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new WeakMap(), n = 0, r = !1, i = (e) => e ? (t.has(e) || t.set(e, ++n), t.get(e)) : 0, a = (e) => {
		e.refs === 0 && e.resource && !e.disposed && (e.disposed = !0, e.resource.release());
	}, o = (t, n, r, i) => {
		i.refs = Math.max(0, i.refs - 1);
		let o = e.get(t), s = o?.get(n);
		!i.refs && s?.get(r) === i && (s.delete(r), s.size || o.delete(n), o.size || e.delete(t)), a(i);
	}, s = async (e, t) => {
		if (e.kind === "embedded") {
			if (!/^data:[^,]*,/i.test(e.dataUrl)) throw new $("invalid", "Malformed data URI.");
			return {
				url: e.dataUrl,
				release() {}
			};
		}
		if (e.kind === "linked") {
			if (e.base !== "project" || !e.path.trim()) throw new $("invalid", "Invalid linked source.");
			if (!t.resolveLinked) {
				if (!t.assetBaseUrl) throw new $("unsupported", "Linked sources require an Electron resolver or an asset base URL.");
				return s({
					kind: "url",
					base: "asset-base",
					url: e.path
				}, t);
			}
			if (!t.projectLocation) throw new $("missing", "Linked sources require a saved project location.");
			let n;
			try {
				n = await t.resolveLinked(e, t);
			} catch (e) {
				let t = e && typeof e == "object" && "code" in e ? e.code : void 0;
				throw new $(t === "missing" || t === "denied" || t === "unsupported" || t === "aborted" ? t : "invalid", e instanceof Error ? e.message : "Linked source resolution failed.");
			}
			if (!/^(?:blob:|https?:|macroflush-asset:)/i.test(n.url)) throw n.release(), new $("invalid", "Linked resolver returned an unsafe runtime URL.");
			return n;
		}
		if (e.kind !== "url" || !e.url.trim()) throw new $("invalid", "Invalid URL source.");
		if (e.base !== "absolute" && e.base !== "asset-base") throw new $("invalid", "Invalid URL base.");
		if (e.base === "asset-base" && !t.assetBaseUrl) throw new $("missing", "An explicit asset base URL is required.");
		let n;
		try {
			if (e.base === "asset-base" && /^(?:[a-zA-Z][a-zA-Z\d+.-]*:|\/|\\)/.test(e.url.trim())) throw Error("Expected a relative asset URL");
			n = e.base === "absolute" ? new URL(e.url) : new URL(e.url, t.assetBaseUrl);
		} catch {
			throw new $("invalid", "Malformed source or base URL.");
		}
		if (!/^https?:$/.test(n.protocol) || n.username || n.password) throw new $("invalid", "Unsafe source URL.");
		if (e.base === "absolute") {
			let e = !1;
			try {
				e = t.authorizeRemote?.(n.href) === !0;
			} catch {}
			if (!e) throw new $("denied", "Remote source is not authorized.");
		}
		return {
			url: n.href,
			release() {}
		};
	};
	return {
		async acquire(t, n, c = {}) {
			if (r || c.signal?.aborted) throw Ed();
			if (!n.assetId || !n.revision || !n.securityScope) throw new $("invalid", "Asset, revision and security scope are required.");
			let l = { ...n }, u = { ...t }, d = u.kind === "embedded" ? u.dataUrl : JSON.stringify(u.kind === "linked" ? [
				u.kind,
				u.base,
				u.path
			] : [
				u.kind,
				u.base,
				u.url
			]), f = JSON.stringify([
				l.assetId,
				l.revision,
				l.securityScope,
				l.projectLocation,
				l.assetBaseUrl,
				i(l.resolveLinked),
				i(l.authorizeRemote)
			]), p = e.get(u.kind) ?? /* @__PURE__ */ new Map(), m = p.get(d) ?? /* @__PURE__ */ new Map(), h = m.get(f);
			if (!h) {
				h = {
					refs: 0,
					promise: s(u, l),
					disposed: !1
				};
				let t = h;
				t.promise = t.promise.then((e) => (t.resource = e, a(t), e)), m.set(f, t), p.set(d, m), e.set(u.kind, p);
			}
			h.refs++;
			let g;
			try {
				let e = await (c.signal ? Promise.race([h.promise, new Promise((e, t) => {
					g = () => t(Ed()), c.signal.addEventListener("abort", g, { once: !0 }), c.signal.aborted && g();
				})]) : h.promise);
				if (r || c.signal?.aborted) throw Ed();
				let t = !1, n = h;
				return {
					url: e.url,
					revision: l.revision,
					release() {
						t || (t = !0, o(u.kind, d, f, n));
					}
				};
			} catch (e) {
				throw o(u.kind, d, f, h), e;
			} finally {
				g && c.signal?.removeEventListener("abort", g);
			}
		},
		dispose() {
			r = !0;
			let t = [...e.values()].flatMap((e) => [...e.values()].flatMap((e) => [...e.values()]));
			e.clear();
			for (let e of t) e.refs = 0, a(e);
		}
	};
}
//#endregion
//#region src/core/projectSources.ts
function Od(e) {
	return e && typeof e == "object" && "clipFormatVersion" in e && e.clipFormatVersion === 3 ? Td(e) : Sa(e);
}
function kd() {
	let e = Dd(), t = !1, n = 0, r = 0, i = () => {
		t && !n && !r && e.dispose();
	};
	return {
		async resolve(a, o, s) {
			if (t) throw new $("aborted", "Project source session is closed.");
			let c = Od(a), l = [], u = [];
			n++;
			try {
				let n = async (n, r, i) => {
					if (!r) {
						u.push({
							assetId: n,
							stem: i,
							status: "missing"
						});
						return;
					}
					try {
						let a = await e.acquire(r, {
							...o,
							assetId: i ? `${n}:stem:${i}` : n,
							revision: o.revision(n, i)
						}, { signal: s });
						if (r.kind === "linked" && !o.resolveLinked && o.assetBaseUrl) try {
							let e = await fetch(a.url, { signal: s });
							if (!e.ok) throw new $(e.status === 404 ? "missing" : "invalid", `Asset request failed (${e.status}).`);
							let r = await e.blob();
							if (s?.aborted || t) throw new $("aborted", "Project source resolution aborted.");
							let o = URL.createObjectURL(r);
							return l.push({
								url: o,
								revision: a.revision,
								release() {
									URL.revokeObjectURL(o), a.release();
								}
							}), u.push({
								assetId: n,
								stem: i,
								status: "ready"
							}), o;
						} catch (e) {
							throw a.release(), e;
						}
						return l.push(a), u.push({
							assetId: n,
							stem: i,
							status: "ready"
						}), a.url;
					} catch (e) {
						if (s?.aborted || e instanceof $ && e.code === "aborted") throw e;
						u.push({
							assetId: n,
							stem: i,
							status: e instanceof $ ? e.code : "invalid",
							message: e instanceof Error ? e.message : "Asset source resolution failed."
						});
						return;
					}
				}, a = [];
				for (let e of c.assets) {
					if (s?.aborted) throw new $("aborted", "Project source resolution aborted.");
					if (![
						"image",
						"video",
						"audio",
						"font",
						"model-3d"
					].includes(e.kind) || c.clipFormatVersion !== 3) {
						a.push(structuredClone(e));
						continue;
					}
					let { sourceRef: t, stemRefs: r, ...i } = e, o = await n(e.id, t), l = {};
					for (let [t, i] of Object.entries(r ?? {})) {
						let r = await n(e.id, i, t);
						r && (l[t] = r);
					}
					a.push({
						...i,
						...o ? { sourceUrl: o } : {},
						...Object.keys(l).length ? { stemSources: l } : {}
					});
				}
				if (t || s?.aborted) throw new $("aborted", "Project source resolution aborted.");
				r++;
				let d = 1, f = () => {
					if (--d === 0) {
						for (let e of l) e.release();
						r--, i();
					}
				}, p = !1;
				return {
					project: {
						...c,
						clipFormatVersion: 2,
						assets: a
					},
					states: u,
					retain() {
						if (!d) throw Error("Runtime snapshot has been released.");
						d++;
						let e = !1;
						return { release() {
							e || (e = !0, f());
						} };
					},
					release() {
						p || (p = !0, f());
					}
				};
			} catch (e) {
				for (let e of l) e.release();
				throw e;
			} finally {
				n--, i();
			}
		},
		dispose() {
			t = !0, i();
		}
	};
}
//#endregion
//#region src/core/editorProjectDocument.ts
var Ad = (e) => [
	"image",
	"video",
	"audio",
	"font",
	"model-3d"
].includes(e.kind), jd = (e) => e?.kind === "embedded" ? e.dataUrl : void 0;
function Md(e) {
	let t = Od(e);
	return t.assets = t.assets.map((e) => {
		let { sourceRevision: t, stemRevisions: n, ...r } = e;
		return r;
	}), t.clipFormatVersion === 2 ? t : {
		...t,
		clipFormatVersion: 2,
		persistentFormatVersion: 3,
		assets: t.assets.map((e) => {
			if (!Ad(e)) return e;
			let t = e, n = jd(t.sourceRef), r = Object.fromEntries(Object.entries(t.stemRefs ?? {}).flatMap(([e, t]) => {
				let n = jd(t);
				return n ? [[e, n]] : [];
			}));
			return {
				...e,
				...n ? { sourceUrl: n } : {},
				...Object.keys(r).length ? { stemSources: r } : {}
			};
		})
	};
}
//#endregion
//#region src/core/p5ReplayHistory.ts
function Nd(e, t, n = []) {
	if (![
		t.width,
		t.height,
		t.fps,
		t.bpm
	].every((e) => Number.isFinite(e) && e > 0)) throw Error(`P5 replay ${e.id}: invalid composition dimensions/FPS/BPM.`);
	let r = structuredClone(e), i = structuredClone({
		width: t.width,
		height: t.height,
		fps: t.fps,
		bpm: t.bpm,
		parameters: t.parameters,
		parameterKeyframeTracks: t.parameterKeyframeTracks
	}), a = n.filter((e) => e.kind === "font" || e.kind === "script" && r.libraries?.includes(e.id));
	return {
		epoch: JSON.stringify([
			{
				id: r.id,
				source: r.source,
				params: r.params,
				tracks: r.keyframeTracks,
				capabilities: r.capabilities,
				mode: r.p5Playback,
				limits: r.p5ReplayLimits,
				inFrame: r.inFrame,
				outFrame: r.outFrame,
				libraries: r.libraries,
				remoteAssets: r.remoteAssets
			},
			i,
			a
		]),
		budget: xa(r),
		definition: r,
		context: i,
		tick(e) {
			let t = ga(e), n = r.inFrame + t, a = he(i.parameters ?? {}, i.parameterKeyframeTracks, n), o = Ye(r, {
				frame: n,
				fps: i.fps,
				playing: !1,
				speed: 1
			}, i, a, { exportMode: !0 });
			if (!o) throw Error(`P5 replay ${r.id} frame ${t}: historical frame is outside the Clip range.`);
			return {
				...o,
				frame: t,
				time: t / i.fps,
				progress: t / Math.max(1, r.outFrame - r.inFrame),
				params: he(r.params, r.keyframeTracks, t)
			};
		}
	};
}
//#endregion
//#region src/core/p5ReplaySession.ts
var Pd = class extends Error {
	diagnostic;
	constructor(e) {
		super(e.message), this.diagnostic = e, this.name = "P5ReplayError";
	}
};
function Fd(e) {
	for (let [t, n] of Object.entries(e.budget)) if (!Number.isFinite(n) || n <= 0) throw Error(`Invalid p5 replay budget: ${t}`);
	if (!Number.isInteger(e.budget.maxDrawsPerReset) || !Number.isInteger(e.budget.chunkDraws)) throw Error("P5 draw budgets must be integers.");
	let t = e.now ?? (() => performance.now()), n = 0, r = !1, i = Promise.resolve(), a, o = /* @__PURE__ */ new Set(), s, c, l = {
		phase: "idle",
		generation: n,
		targetFrame: null,
		lastGoodFrame: null,
		completedDraws: 0,
		totalDraws: 0,
		startFrame: null
	}, u = (t, n, r) => new Pd({
		code: t,
		clipId: e.clipId,
		frame: n,
		message: `P5 replay ${e.clipName ? `${e.clipName} (${e.clipId})` : e.clipId} frame ${n}: ${r}`
	}), d = (t) => {
		l = t;
		try {
			e.onStatus?.(t);
		} catch (e) {
			console.warn("P5 replay status listener failed", e);
		}
	}, f = (e, t) => new Promise((n, r) => {
		t.throwIfAborted();
		let i = () => {
			clearTimeout(a), t.removeEventListener("abort", i), r(t.reason);
		}, a = setTimeout(() => {
			t.removeEventListener("abort", i), n();
		}, e);
		t.addEventListener("abort", i, { once: !0 });
	}), p = (e) => new Promise((t, n) => {
		e.throwIfAborted();
		let r = new MessageChannel(), i = () => {
			r.port1.close(), r.port2.close(), e.removeEventListener("abort", a);
		}, a = () => {
			i(), n(e.reason);
		};
		r.port1.onmessage = () => {
			i(), t();
		}, e.addEventListener("abort", a, { once: !0 }), r.port2.postMessage(null);
	}), m = async (e) => {
		try {
			await e?.dispose();
		} catch (e) {
			console.warn("P5 replay realm cleanup failed", e);
		}
	}, h = async () => {
		let e = s;
		s = void 0, await m(e?.realm);
	}, g = async (n, i, a) => {
		let o = ga(n.localFrame), g = a.signal, _ = () => {
			if (r || g.aborted) throw g.reason ?? u("disposed", o, "session disposed");
		}, v, y = !1, b = 0, x = null, S = (e, t = 0) => d({
			phase: e,
			generation: i,
			targetFrame: o,
			lastGoodFrame: c?.frame ?? null,
			completedDraws: t,
			totalDraws: b,
			startFrame: x
		});
		try {
			if (_(), !n.epoch) throw u("preparation-failed", o, "missing definition/history epoch");
			if (c?.epoch === n.epoch && c.frame === o) {
				let t = await e.clone(c.value);
				return (g.aborted || r) && (e.release(t), _()), S("ready"), t;
			}
			let a = s?.epoch === n.epoch && s.frame + 1 === o;
			if (x = a ? o : 0, b = a ? 1 : o + 1, !a && o + 1 > e.budget.maxDrawsPerReset) throw u("frame-budget", o, `prefix needs ${o + 1} draws, limit ${e.budget.maxDrawsPerReset}; set p5ReplayLimits.maxDraws explicitly (host cap 6000)`);
			e.mode === "live" && n.intent === "seek" && !a && (S("debouncing"), await f(e.debounceMs ?? 75, g), _()), a && s ? (v = s.realm, y = !0) : (S("preparing"), v = await e.prepare({
				generation: i,
				documentToken: crypto.randomUUID(),
				epoch: n.epoch,
				signal: g
			}), _());
			let l = t(), d = 0, m = 0, C = 0, w = t();
			for (let i = y ? o : 0; i <= o; i++) {
				_(), S("replaying", m);
				let a = await v.draw(i, i === o, g);
				(g.aborted || r) && (a.frame !== void 0 && e.release(a.frame), _());
				let f = ![
					"cpuMs",
					"surfaces",
					"pixels",
					"accountedBytes"
				].every((e) => {
					let t = a.metrics[e];
					return Number.isFinite(t) && t >= 0;
				});
				d += a.metrics.cpuMs, m++, C++;
				let b;
				if (f ? b = u("draw-failed", o, "invalid draw metrics") : a.metrics.pixels > e.budget.maxPixelsPerRealm || a.metrics.accountedBytes > e.budget.maxAccountedBytesPerRealm ? b = u("allocation-budget", o, "drawing allocation accounting exceeded") : d > e.budget.maxCpuMs ? b = u("time-budget", o, `draw time ${d.toFixed(1)} ms exceeds ${e.budget.maxCpuMs} ms (machine contention included); set p5ReplayLimits.maxCpuMs explicitly (host cap 30000)`) : t() - l > e.budget.maxWallMs && (b = u("time-budget", o, `wall deadline ${e.budget.maxWallMs} ms exceeded; deadline is host-derived, not an imported setting`)), b) throw a.frame !== void 0 && e.release(a.frame), b;
				if (i === o) {
					if (a.frame === void 0) throw u("draw-failed", o, "target draw produced no frame");
					let t = a.frame, i;
					try {
						i = await e.clone(t);
					} catch (n) {
						throw e.release(t), n;
					}
					return (g.aborted || r) && (e.release(i), e.release(t), _()), y || await h(), (g.aborted || r) && (e.release(i), e.release(t), _()), s = {
						realm: v,
						epoch: n.epoch,
						frame: o
					}, v = void 0, c && e.release(c.value), c = {
						value: t,
						epoch: n.epoch,
						frame: o
					}, S("ready", m), i;
				}
				if (a.frame !== void 0) throw e.release(a.frame), u("draw-failed", o, "intermediate draw captured a frame");
				(C >= e.budget.chunkDraws || t() - w >= e.budget.chunkMs) && (await p(g), C = 0, w = t());
			}
			throw u("draw-failed", o, "replay did not complete");
		} catch (e) {
			y ? await h() : await m(v);
			let t = e instanceof Pd ? e : u(g.aborted ? "canceled" : "draw-failed", o, e instanceof Error ? e.message : String(e));
			throw t.diagnostic.code !== "canceled" && !r && d({
				phase: "error",
				generation: i,
				targetFrame: o,
				lastGoodFrame: c?.frame ?? null,
				completedDraws: l.generation === i ? l.completedDraws : 0,
				totalDraws: b,
				startFrame: x,
				error: t.diagnostic
			}), t;
		}
	};
	return {
		get status() {
			return l;
		},
		cancelPending() {
			for (let e of o) e.abort(u("canceled", l.targetFrame ?? 0, "Clip became dormant"));
		},
		request(t) {
			let s;
			try {
				s = ga(t.localFrame);
			} catch {
				return Promise.reject(u("invalid-frame", t.localFrame, "invalid finite frame"));
			}
			if (r) return Promise.reject(u("disposed", s, "session disposed"));
			if (e.mode === "export" != (t.intent === "export")) return Promise.reject(u("unsupported-api", s, "request intent does not match session ownership"));
			let c = new AbortController(), l = ++n;
			o.add(c), e.mode === "live" && (a?.abort(u("canceled", s, "superseded by a newer target")), a = c);
			let d = i.then(() => g(t, l, c)).finally(() => o.delete(c));
			return i = d.catch(() => void 0), d;
		},
		async dispose() {
			if (r) {
				await i;
				return;
			}
			r = !0;
			for (let e of o) e.abort(u("canceled", l.targetFrame ?? 0, "session disposed"));
			await i, await h(), c && e.release(c.value), c = void 0, d({
				phase: "disposed",
				generation: n,
				targetFrame: null,
				lastGoodFrame: null,
				completedDraws: 0,
				totalDraws: 0,
				startFrame: null
			});
		}
	};
}
//#endregion
//#region src/runtime/p5ReplayRealm.ts
var Id = /* @__PURE__ */ new WeakSet(), Ld = !1, Rd = () => {
	Ld || (Ld = !0, window.addEventListener("message", (e) => {
		!e.source || !Id.has(e.source) || (e.data?.bitmap?.close?.(), e.data?.helperBitmap?.close?.());
	}));
};
function zd(e) {
	return async (t) => {
		Rd();
		let n = document.createElement("iframe");
		n.sandbox.add("allow-scripts"), n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
			position: "absolute",
			width: "1px",
			height: "1px",
			opacity: "0",
			pointerEvents: "none",
			border: "0"
		});
		let r = !1, i = !1, a = 0, o, s, c, l = new Promise((e, t) => {
			s = e, c = t;
		}), u, d = new Promise((e, t) => {
			u = t;
		});
		l.catch(() => void 0), d.catch(() => void 0);
		let f, p = (t, n) => new Pd({
			code: t,
			clipId: e.diagnosticClipId ?? e.clipId,
			frame: f?.frame ?? 0,
			message: `P5 replay ${e.clipName ? `${e.clipName} (${e.diagnosticClipId ?? e.clipId})` : e.clipId} frame ${f?.frame ?? 0}: ${n}`
		}), m = (e) => {
			if (o ??= e, u(e), c(e), f) {
				let t = f;
				f = void 0, t.cleanup(), t.bitmap?.close(), t.reject(e);
			}
		}, h = () => {
			if (!f?.metrics || f.final && !f.bitmap) return;
			let e = f;
			f = void 0, e.cleanup(), e.resolve({
				metrics: e.metrics,
				...e.bitmap ? { frame: e.bitmap } : {}
			});
		}, g = (a) => {
			if (a.source !== n.contentWindow) return;
			let o = a.data, c = () => {
				o?.bitmap?.close?.(), o?.helperBitmap?.close?.();
			};
			if (r || !o || o.clipId !== e.clipId) {
				c();
				return;
			}
			if ([
				"macroflush:ready",
				"macroflush:p5-replay-ack",
				"macroflush:frame"
			].includes(o.type) && o.documentToken !== t.documentToken) {
				c();
				return;
			}
			if (o.type === "macroflush:ready") {
				i = !0, s();
				return;
			}
			if (o.type === "macroflush:schema") {
				Array.isArray(o.params) && e.onSchema?.(structuredClone(o.params.filter((e) => e && typeof e == "object" && typeof e.key == "string")));
				return;
			}
			if (o.type === "macroflush:runtime-error" || o.type === "macroflush:export-error") {
				if (o.type === "macroflush:export-error" && o.exportFrameId !== f?.id) return;
				let e = ["unsupported-api", "allocation-budget"].includes(o.p5ReplayCode) ? o.p5ReplayCode : i ? "draw-failed" : "preparation-failed";
				m(p(e, String(o.error)));
				return;
			}
			if (o.type === "macroflush:p5-replay-ack") {
				if (!f || o.generation !== t.generation || o.requestId !== f.id) return;
				if (o.error) {
					m(p("draw-failed", String(o.error)));
					return;
				}
				f.metrics = o.metrics, h();
				return;
			}
			if (o.type === "macroflush:frame") {
				if (!f || o.exportFrameId !== f.id) {
					c();
					return;
				}
				if (!f.final || f.bitmap || !(o.bitmap instanceof ImageBitmap)) {
					c(), m(p("draw-failed", "unexpected capture"));
					return;
				}
				f.bitmap = o.bitmap, o.helperBitmap?.close?.(), h();
				return;
			}
			c(), m(p("unsupported-api", `isolated realm sent denied message ${String(o.type)}`));
		}, _ = () => m(p("canceled", "candidate canceled")), v = () => {
			r || (r = !0, m(p("canceled", "candidate disposed")), clearTimeout(y), t.signal.removeEventListener("abort", _), window.removeEventListener("message", g), n.contentWindow && Id.add(n.contentWindow), n.remove());
		}, y = setTimeout(() => m(p("preparation-failed", "candidate preparation timed out")), e.preparationTimeoutMs ?? 15e3);
		window.addEventListener("message", g), t.signal.addEventListener("abort", _, { once: !0 });
		try {
			t.signal.throwIfAborted();
			let i = await Promise.race([Promise.resolve(e.document(t)), d]);
			return t.signal.throwIfAborted(), n.srcdoc = i, e.container.appendChild(n), await l, t.signal.throwIfAborted(), clearTimeout(y), t.signal.removeEventListener("abort", _), {
				draw(i, s, c) {
					if (o) return Promise.reject(o);
					if (r || f) return Promise.reject(p("draw-failed", "candidate disposed or already drawing"));
					c.throwIfAborted();
					let l = e.tick(i, t.epoch);
					if (l.frame !== i || l.time !== i / l.fps) return Promise.reject(p("draw-failed", "historical tick does not match discrete local frame/time"));
					let u = t.documentToken + ":" + ++a, d = {
						...l,
						exportMode: !0,
						exportFrameId: u,
						p5Replay: {
							generation: t.generation,
							requestId: u,
							final: s
						}
					};
					return new Promise((t, r) => {
						let a = () => m(p("canceled", "draw canceled")), o = setTimeout(() => m(p("time-budget", "draw acknowledgement timed out")), e.budget.maxWallMs);
						f = {
							id: u,
							frame: i,
							final: s,
							resolve: t,
							reject: r,
							cleanup: () => {
								clearTimeout(o), c.removeEventListener("abort", a);
							}
						}, c.addEventListener("abort", a, { once: !0 }), n.contentWindow.postMessage(d, "*");
					});
				},
				dispose: v
			};
		} catch (e) {
			throw v(), e;
		}
	};
}
//#endregion
//#region src/runtime/p5ClipReplay.ts
function Bd(e) {
	let { history: t } = e, n = t.definition, r = e.sourceId ?? n.id, i = structuredClone(e.descriptors), a = [], o = {
		draws: 0,
		cpuMs: 0,
		finalCaptures: 0,
		peakPixels: 0,
		peakSurfaces: 0,
		peakAccountedBytes: 0
	}, s = zd({
		clipId: r,
		clipName: n.name,
		diagnosticClipId: n.id,
		container: e.container,
		budget: t.budget,
		onSchema: (e) => {
			a = e;
		},
		tick: (e) => ({
			...t.tick(e),
			clipId: r
		}),
		document: (a) => md(r, n.source, n.params, n.remoteAssets, i, e.nativeAssetSources, {
			documentToken: a.documentToken,
			libraries: n.libraries,
			capabilities: n.capabilities,
			p5Playback: "isolated-replay",
			p5ReplayBudget: t.budget,
			p5SeedIdentity: n.id,
			runtimeContext: {
				fps: t.context.fps,
				compositionWidth: t.context.width,
				compositionHeight: t.context.height
			}
		})
	}), c = Fd({
		clipId: n.id,
		clipName: n.name,
		mode: e.mode,
		budget: t.budget,
		prepare: async (e) => {
			let t = await s(e);
			return {
				dispose: () => t.dispose(),
				async draw(...e) {
					let n = await t.draw(...e);
					return o.draws++, o.cpuMs += n.metrics.cpuMs, o.finalCaptures += +!!n.frame, o.peakPixels = Math.max(o.peakPixels, n.metrics.pixels), o.peakSurfaces = Math.max(o.peakSurfaces, n.metrics.surfaces), o.peakAccountedBytes = Math.max(o.peakAccountedBytes, n.metrics.accountedBytes), n;
				}
			};
		},
		clone: (e) => createImageBitmap(e),
		release: (e) => e.close(),
		onStatus: e.onStatus
	});
	return {
		get status() {
			return c.status;
		},
		getSchemas() {
			return structuredClone(a);
		},
		getStats() {
			return { ...o };
		},
		cancelPending: () => c.cancelPending(),
		async request(r, i, a) {
			let o = t.tick(r);
			if (a) {
				let t = he(n.params, n.keyframeTracks, r);
				if (Object.keys(t).some((e) => JSON.stringify(t[e]) !== JSON.stringify(a[e]))) {
					let t = new Pd({
						code: "unsupported-api",
						clipId: n.id,
						frame: o.frame,
						message: `P5 replay ${n.id} frame ${o.frame}: incoming cross-Clip writes cannot be reconstructed; use timeline mode.`
					});
					throw e.onStatus?.({
						...c.status,
						phase: "error",
						targetFrame: o.frame,
						error: t.diagnostic
					}), t;
				}
			}
			return {
				bitmap: await c.request({
					localFrame: o.frame,
					epoch: t.epoch,
					intent: i
				}),
				tick: o
			};
		},
		dispose: () => c.dispose()
	};
}
//#endregion
//#region src/core/runtimeChildClock.ts
function Vd(e, t, n) {
	let r = e * t;
	return n === "html" ? Math.round(r) : Math.floor(r);
}
function Hd(e, t, n) {
	return Vd(e, t, n) / t;
}
//#endregion
//#region src/core/sceneGraphTransform.ts
function Ud(e, t) {
	let n = e.rotation * (Math.PI / 180), r = Math.cos(n) * e.scale, i = Math.sin(n) * e.scale, [a, o] = t;
	return [
		r,
		i,
		-i,
		r,
		e.x - r * a + i * o,
		e.y - i * a - r * o
	];
}
function Wd(e, t) {
	return [
		e[0] * t[0] + e[2] * t[1],
		e[1] * t[0] + e[3] * t[1],
		e[0] * t[2] + e[2] * t[3],
		e[1] * t[2] + e[3] * t[3],
		e[0] * t[4] + e[2] * t[5] + e[4],
		e[1] * t[4] + e[3] * t[5] + e[5]
	];
}
function Gd(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set(), a = e.get(t);
	if (!a) return null;
	for (; a;) {
		if (i.has(a.id) || r.length >= 64) return null;
		i.add(a.id), r.push(a), a = a.parentId ? e.get(a.parentId) : void 0;
	}
	let o = [
		1,
		0,
		0,
		1,
		0,
		0
	], s = 1, c = !0;
	for (let e of r.reverse()) {
		let t = n(e);
		o = Wd(o, Ud(e, e.anchorPoint ?? [t[0] / 2, t[1] / 2])), s *= e.opacity, c &&= e.visible;
	}
	return {
		transform: o,
		opacity: s,
		visible: c
	};
}
//#endregion
//#region src/core/mediaTransport.ts
var Kd = { mode: "realtime" }, qd = { mode: "paused-sample" }, Jd = { mode: "prepared" }, Yd = (e) => e ? Kd : qd, Xd = /* @__PURE__ */ new WeakMap();
function Zd(e, t) {
	!t.active || t.context.mode !== "paused-sample" || e.readyState === 0 || t.appliedTarget === t.target || (Math.abs(e.currentTime - t.target) > 1e-6 && (e.currentTime = t.target), t.appliedTarget = t.target);
}
function Qd(e) {
	let t = Xd.get(e);
	t && (t.active = !1), e.pause();
}
function $d(e) {
	for (let t of e.values()) t instanceof HTMLMediaElement && Qd(t);
}
function ef(e, t, n, r, i, a = 0, o = .15) {
	if (i.mode === "prepared") return;
	if (!t) {
		Qd(e);
		return;
	}
	let s = Xd.get(e);
	if (s || (s = {
		active: t,
		target: 0,
		context: i
	}, Xd.set(e, s), e.addEventListener("loadedmetadata", () => {
		let t = Xd.get(e);
		t && (t.appliedTarget = void 0, Zd(e, t));
	})), s.active = !0, s.target = Math.max(0, (n - a) / r), s.context = i, i.mode === "paused-sample") {
		e.pause(), Zd(e, s);
		return;
	}
	s.appliedTarget = void 0, Math.abs(e.currentTime - s.target) > o && (e.currentTime = s.target), e.play().catch(() => void 0);
}
//#endregion
//#region src/player/createClipPlayer.ts
function tf(e) {
	return e.clipFormatVersion === 3 ? Da(Md(e)) : e.clipFormatVersion === 2 ? Da(e) : e;
}
var nf = /* @__PURE__ */ new WeakMap();
function rf(e, t, n = [0, 0]) {
	let [r, i] = t?.dimensions ?? [0, 0];
	return [typeof e.width == "number" && e.width > 0 ? e.width : r > 0 ? r : n[0], typeof e.height == "number" && e.height > 0 ? e.height : i > 0 ? i : n[1]];
}
function af(e) {
	return e instanceof HTMLImageElement ? [e.naturalWidth, e.naturalHeight] : e instanceof HTMLVideoElement ? [e.videoWidth, e.videoHeight] : typeof ImageBitmap < "u" && e instanceof ImageBitmap || e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? [e.width, e.height] : [0, 0];
}
function of(e, t) {
	if (!Array.isArray(e) || e.length < 2) return t;
	let n = Number(e[0]), r = Number(e[1]);
	return [Number.isFinite(n) ? n : t[0], Number.isFinite(r) ? r : t[1]];
}
function sf(e, t, n) {
	let r = e.params[t];
	r && (r.value = n);
}
function cf(e) {
	let t = e.editorNativeAssetSources === !0, n = e.canvas ?? document.createElement("canvas"), r = e.iframeHost ?? document.createElement("div"), i = !e.iframeHost, a = Math.max(1, e.frameTransferFps ?? 30), o = e.dirtyOnly ?? !0, s = e.runtimeDepth ?? 0, c = /* @__PURE__ */ new Map(), l = {
		framesReceived: 0,
		framesComposited: 0,
		replacedFrames: 0,
		lastCompositeMs: 0
	}, u = null, d = null, f = null, p = null, m = bd("player"), h = xd(), g = xd(), _ = "root", v, y = 0, b, x = e.project.clipFormatVersion === 3 ? Md(e.project) : e.project.clipFormatVersion === 2 ? e.project : null, S = tf(e.project), C = pi(S.assets, t), w = [], ee = /* @__PURE__ */ new Map(), te = [], ne = /* @__PURE__ */ new Map(), re = wt(), ie = kt(), ae = null, oe = null, se = 0, ce = null, le = /* @__PURE__ */ new Map(), ue = new Map(S.assets.map((e) => [e.id, e])), de = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ge = null, _e = null, T = !1, ve = e.mediaPlaying ?? !0, ye = kd(), be, xe, E = 0, Se = Promise.resolve(), D = [], Ce = e.project.clipFormatVersion === 3;
	r.setAttribute("aria-hidden", "true"), Object.assign(r.style, {
		position: "fixed",
		width: "1px",
		height: "1px",
		overflow: "hidden",
		opacity: "0",
		pointerEvents: "none",
		inset: "0"
	}), i && document.body.appendChild(r);
	let we = (e, t) => {
		n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
	}, Te = (e) => {
		let t = {
			type: "macroflush:frame-config",
			clipId: e.clip.id,
			enabled: !0,
			fps: a,
			dirtyOnly: o
		};
		e.iframe.contentWindow?.postMessage(t, "*");
	}, Ee = () => {
		ue = new Map(S.assets.map((e) => [e.id, e])), de = /* @__PURE__ */ new Map();
		for (let e of S.layers) for (let t of e.clips) t.kind === "html" && (t.assetId && !de.has(t.assetId) && de.set(t.assetId, t), de.has(t.id) || de.set(t.id, t));
		for (let e of S.assets) {
			if (e.kind !== "html-clip") continue;
			let t = de.get(e.clipId ?? "") ?? de.get(e.htmlTemplate.id) ?? e.htmlTemplate;
			de.has(e.id) || de.set(e.id, t);
		}
	}, De = () => {
		ee = new Map(w.map((e) => [e.clip.id, e])), te = [...w].reverse(), ne = /* @__PURE__ */ new Map();
		for (let e of te) {
			let t = ne.get(e.layerRef.id) ?? [];
			t.push(e), ne.set(e.layerRef.id, t);
		}
		le.clear();
		for (let e of w) e.kind !== "html" || !e.iframe.contentWindow || le.set(e.iframe.contentWindow, e);
	}, O = () => {
		re.dispose();
		for (let e of w) if (e.kind === "html") e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.dispose(), e.bitmap?.close(), e.feedbackHost?.dispose(), e.feedbackStartup?.reject(/* @__PURE__ */ Error("Feedback Player slot disposed.")), e.iframe.remove(), e.documentToken && h.forget(e.documentToken);
		else if (e.kind === "instance") continue;
		else if (e.kind === "runtime-instance") continue;
		else if (e.kind === "composition-ref" || e.kind === "runtime") e.player.destroy(), h.forget(`child:${e.clip.id}`);
		else if (e.kind === "image") e.image.onload = null, e.image.onerror = null, e.image.src = "";
		else {
			let t = e.kind === "video" ? e.video : e.audio;
			Qd(t), t.removeAttribute("src"), t.load(), t.remove();
		}
		w = [], De(), pe.clear();
		for (let e of me.values()) e instanceof HTMLMediaElement && (Qd(e), e.removeAttribute("src"), e.load(), e.remove());
		me.clear(), ge &&= (ge.width = 0, ge.height = 0, null), _e &&= (_e.width = 0, _e.height = 0, null);
	}, Oe = () => {
		O(), D = [];
		let n = new Set(S.layers.flatMap((e) => e.clips.map((e) => e.id))), i = new Map(S.layers.flatMap((e) => e.clips.map((e) => [e.id, e])));
		fe = new Set(S.layers.flatMap((e) => e.visible === !1 ? [] : e.clips.flatMap((e) => {
			let t = e.maskClipId && n.has(e.maskClipId) ? [e.maskClipId] : [];
			if (e.kind === "html" && e.instanceOfClipId) {
				let n = i.get(e.instanceOfClipId);
				n?.kind === "html" && !n.instanceOfClipId && t.push(n.id);
			}
			return t;
		})));
		for (let e of [...fe]) {
			let t = i.get(e);
			if (t?.kind !== "html" || !t.instanceOfClipId) continue;
			let n = i.get(t.instanceOfClipId);
			n?.kind === "html" && !n.instanceOfClipId && fe.add(n.id);
		}
		for (let n of S.layers) for (let a of n.clips) {
			if (a.kind === "shader") continue;
			if (a.kind === "composition-ref") {
				let t = ue.get(a.assetId);
				if (!t || t.kind !== "composition") {
					console.warn(`MacroFlush player skipped composition clip "${a.name}": source composition is unavailable.`);
					continue;
				}
				let i = {
					clipFormatVersion: 1,
					...structuredClone(t.composition),
					assets: S.assets,
					remoteAssetPolicy: S.remoteAssetPolicy
				}, o = document.createElement("canvas"), s = cf({
					...e,
					mediaPlaying: ve,
					project: i,
					canvas: o,
					iframeHost: r,
					onComposite: () => Ve()
				});
				C.feedbackResources?.length && D.push(s.ready), w.push({
					kind: "composition-ref",
					layerRef: n,
					clip: a,
					player: s
				});
				continue;
			}
			if (a.kind === "image" || a.kind === "video" || a.kind === "audio") {
				let e = ue.get(a.assetId);
				if (!e || e.kind !== a.kind || !e.sourceUrl) {
					console.warn(`MacroFlush player skipped ${a.kind} clip "${a.name}": source asset is unavailable.`);
					continue;
				}
				if (!hi(e.sourceUrl, t)) {
					console.warn(`MacroFlush player skipped ${a.kind} clip "${a.name}": remote media URLs are not allowed.`);
					continue;
				}
				if (a.kind === "image") {
					let t = new Image();
					t.crossOrigin = "anonymous";
					let r = {
						kind: "image",
						layerRef: n,
						clip: a,
						image: t,
						ready: !1
					};
					t.onload = () => {
						T || (r.ready = !0);
					}, t.onerror = () => {
						T || console.warn(`MacroFlush player could not load image clip "${a.name}".`);
					}, t.src = e.sourceUrl, w.push(r);
					continue;
				}
				if (a.kind === "video") {
					let t = document.createElement("video");
					t.crossOrigin = "anonymous", t.muted = !0, t.loop = !0, t.playsInline = !0, t.preload = "auto";
					let i = {
						kind: "video",
						layerRef: n,
						clip: a,
						video: t,
						ready: !1
					};
					t.onloadeddata = () => {
						T || (i.ready = !0);
					}, t.onerror = () => {
						T || console.warn(`MacroFlush player could not load video clip "${a.name}".`);
					}, t.src = e.sourceUrl, r.appendChild(t), w.push(i);
					continue;
				}
				let i = document.createElement("audio");
				i.loop = !0, i.preload = "auto";
				let o = {
					kind: "audio",
					layerRef: n,
					clip: a,
					audio: i,
					ready: !1
				};
				i.oncanplay = () => {
					T || (o.ready = !0);
				}, i.onerror = () => {
					T || console.warn(`MacroFlush player could not load audio clip "${a.name}".`);
				}, i.src = e.sourceUrl, r.appendChild(i), w.push(o);
				continue;
			}
			if (a.kind !== "html") continue;
			if (a.instanceOfClipId) {
				let e = i.get(a.instanceOfClipId);
				if (e?.kind === "html" && !e.instanceOfClipId) {
					w.push({
						kind: "instance",
						layerRef: n,
						clip: a,
						masterClipId: e.id
					});
					continue;
				}
			}
			let o = document.createElement("iframe"), s = crypto.randomUUID(), c = Sd({
				binding: a.feedback,
				assets: S.assets,
				isolated: a.capabilities?.includes("p5") && a.p5Playback === "isolated-replay"
			}), l = {
				kind: "html",
				layerRef: n,
				clip: a,
				iframe: o,
				documentToken: s,
				feedbackInputEnabled: c.status === "ready",
				feedbackDefinition: JSON.stringify([
					s,
					c.revision,
					a.feedback
				]),
				ready: !1,
				bitmap: null,
				frameCanvas: document.createElement("canvas"),
				hasFrame: !1,
				lastFrameSeq: 0,
				sceneGraph: /* @__PURE__ */ new Map(),
				matteCache: /* @__PURE__ */ new Map(),
				hasEntered: !1
			};
			if (o.sandbox.add("allow-scripts"), a.capabilities?.includes("p5") && a.p5Playback === "isolated-replay") {
				l.ready = !0, l.replayDirty = !0, l.replayRequest = 0, w.push(l);
				continue;
			}
			if (C.feedbackResources?.length) {
				let e, t, n = new Promise((n, r) => {
					e = n, t = r;
				});
				n.catch(() => void 0), l.feedbackStartup = {
					promise: n,
					resolve: e,
					reject: t
				}, D.push(n);
			}
			fd(a.source) ? hd(a.id, a.source, a.params, a.remoteAssets, C.descriptors, !1, t, {
				documentToken: s,
				feedback: a.feedback,
				feedbackInputEnabled: l.feedbackInputEnabled,
				libraries: a.libraries,
				capabilities: a.capabilities,
				runtimeContext: {
					fps: S.fps,
					compositionWidth: S.width,
					compositionHeight: S.height
				}
			}).then((e) => {
				!T && o.isConnected && (o.srcdoc = e);
			}).catch((t) => {
				if (!T) {
					let n = /* @__PURE__ */ Error(`MacroFlush player failed to build clip document for "${a.name}": ${String(t)}`);
					l.feedbackStartup?.reject(n), e.onError?.(n), console.error(n);
				}
			}) : o.srcdoc = md(a.id, a.source, a.params, a.remoteAssets, C.descriptors, t, {
				documentToken: s,
				feedback: a.feedback,
				feedbackInputEnabled: l.feedbackInputEnabled,
				libraries: a.libraries,
				capabilities: a.capabilities,
				runtimeContext: {
					fps: S.fps,
					compositionWidth: S.width,
					compositionHeight: S.height
				}
			}), l.feedbackHost = di(o, C, a.id, s), r.appendChild(o), o.contentWindow && le.set(o.contentWindow, l), w.push(l);
		}
		De(), ke();
	}, ke = () => {
		let e = new Set(w.flatMap((e) => e.kind === "html" ? [...e.sceneGraph.values()].map((e) => e.assetId) : []));
		for (let [t, n] of me) e.has(t) || (n instanceof HTMLMediaElement && (n.pause(), n.removeAttribute("src"), n.load(), n.remove()), me.delete(t));
	}, Ae = (e, t, n) => {
		let r = t.kind === "composition" ? [t.composition.width, t.composition.height] : of(e.params.size?.value, [S.width, S.height]);
		sf(e, "position", [n.x, n.y]), sf(e, "scale", [n.scale, n.scale]), sf(e, "rotation", n.rotation), sf(e, "opacity", n.opacity), sf(e, "size", r), sf(e, "anchorPoint", n.anchorPoint ?? [r[0] / 2, r[1] / 2]), sf(e, "blendMode", n.blendMode ?? "normal");
		for (let [t, r] of Object.entries(n.clip ?? {})) sf(e, t, r);
	}, je = () => {
		let t = /* @__PURE__ */ new Map();
		for (let e of w) {
			if (e.kind !== "html") continue;
			let n = e.sceneGraph, r = new Set([...n.values()].filter((e) => e.visible && e.instanceOfId).map((e) => e.instanceOfId));
			for (let i of e.sceneGraph.values()) {
				let a = ue.get(i.assetId);
				if (!i.visible && !r.has(i.id) || a?.kind !== "html-clip" && a?.kind !== "composition") continue;
				if (s >= 1) {
					console.warn(`MacroFlush player ignored nested runtime asset "${a.name}" to prevent recursion.`);
					continue;
				}
				let o = a.kind === "html-clip" ? de.get(a.id) : null, c = Va(a, i);
				if (c) throw c;
				let l = o?.kind === "html" ? o.params : void 0, u = i.instanceOfId ? n.get(i.instanceOfId) : void 0, d = a.kind === "html-clip" && i.instanceOfId && u && !u.instanceOfId && u.assetId === i.assetId, f = pe.get(i.id), p = !!(f && (d && f.kind === "runtime-instance" || !d && f.kind === "runtime") && f.clip.assetId === a.id), m = p ? f.clip : qa(a, i, S.durationFrames, l);
				if (p && Ae(m, a, i), d) {
					t.set(i.id, {
						kind: "runtime-instance",
						clip: m,
						layerRef: e.layerRef,
						objectId: i.id,
						masterObjectId: u.id,
						visible: i.visible,
						parentClipId: e.clip.id
					});
					continue;
				}
				let h;
				if (!p) {
					if (a.kind === "composition") h = {
						clipFormatVersion: 1,
						...structuredClone(a.composition),
						assets: S.assets,
						remoteAssetPolicy: S.remoteAssetPolicy
					};
					else {
						let { contentClip: e, size: t } = Ja(m);
						h = {
							...S,
							width: Math.max(1, t[0]),
							height: Math.max(1, t[1]),
							layers: [{
								id: `runtime-layer:${i.id}`,
								name: "Runtime",
								clips: [e]
							}]
						};
					}
				}
				t.set(i.id, {
					kind: "runtime",
					clip: m,
					project: h,
					layerRef: e.layerRef,
					objectId: i.id,
					visible: i.visible,
					parentClipId: e.clip.id,
					time: ce?.ticks.get(e.clip.id)?.time
				});
			}
		}
		for (let [e, n] of pe) t.has(e) || (n.kind === "runtime" && (n.player.destroy(), h.forget(`child:${n.clip.id}`)), pe.delete(e), w = w.filter((e) => e !== n));
		for (let [n, i] of t) {
			let t = pe.get(n);
			if (t?.kind === "runtime" && i.kind === "runtime") {
				t.clip = i.clip, t.layerRef = i.layerRef, t.visible = i.visible, t.parentClipId = i.parentClipId;
				continue;
			}
			if (t?.kind === "runtime-instance" && i.kind === "runtime-instance") {
				t.clip = i.clip, t.layerRef = i.layerRef, t.masterObjectId = i.masterObjectId, t.visible = i.visible, t.parentClipId = i.parentClipId;
				continue;
			}
			if (t && (t.kind === "runtime" && (t.player.destroy(), h.forget(`child:${t.clip.id}`)), pe.delete(n), w = w.filter((e) => e !== t)), i.kind === "runtime-instance") {
				let e = {
					kind: "runtime-instance",
					layerRef: i.layerRef,
					clip: i.clip,
					masterObjectId: i.masterObjectId,
					objectId: i.objectId,
					parentClipId: i.parentClipId,
					visible: i.visible
				};
				pe.set(n, e), w.push(e);
				continue;
			}
			let a = document.createElement("canvas"), o = cf({
				...e,
				mediaPlaying: ve,
				project: i.project,
				canvas: a,
				iframeHost: r,
				runtimeDepth: s + 1,
				onComposite: () => Ve()
			}), c = {
				kind: "runtime",
				layerRef: i.layerRef,
				clip: i.clip,
				player: o,
				objectId: i.objectId,
				visible: i.visible,
				parentClipId: i.parentClipId
			};
			if (pe.set(n, c), w.push(c), i.time !== void 0) {
				let e = i.clip.kind === "html" && i.clip.capabilities?.includes("p5") && i.clip.p5Playback === "isolated-replay";
				o.tickTime(e ? i.time : Hd(i.time, i.project.fps, i.clip.kind === "html" ? "html" : "composition"));
			}
		}
		De();
	}, Me = (n) => {
		if (T || !n.data || typeof n.data != "object") return;
		let r = n.data;
		if (typeof r.clipId != "string") return;
		let i = le.get(n.source);
		if (!(!i || i.clip.id !== r.clipId)) {
			if (r.type === "macroflush:runtime-error" && r.documentToken === i.documentToken && r.feedbackError === !0) {
				let t = Error(String(r.error));
				i.feedbackStartup?.reject(t), e.onError?.(t);
				return;
			}
			if (r.type === "macroflush:param-frame-complete") {
				if (typeof r.frameParamToken == "string" && Array.isArray(r.writes)) {
					if (oe) try {
						oe.complete(r.frameParamToken, i.clip.id, r.writes) && (Ge(), Ve());
					} catch (t) {
						oe = null, ce = null, e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
					}
					else ie.complete(r.frameParamToken, i.clip.id, r.writes) && Ve();
				}
				return;
			}
			if (r.type === "macroflush:ready") {
				if (r.documentToken !== i.documentToken || (i.feedbackStartup?.resolve(), i.ready || !i.iframe.isConnected)) return;
				i.lastFrameSeq = 0, Te(i);
				let e = i.iframe.contentWindow;
				e?.postMessage({
					type: "macroflush:request-scene",
					clipId: i.clip.id
				}, "*"), ji(i.clip.source.js) ? Pi(S.assets, S.layers, S.fps, t).then((t) => {
					T || !i.iframe.isConnected || i.iframe.contentWindow !== e || (e?.postMessage({
						type: "macroflush:audio-analysis",
						clipId: i.clip.id,
						payload: t
					}, "*"), i.ready = !0, Ze());
				}).catch((t) => {
					console.error(`MacroFlush player failed to prepare audio analysis for "${i.clip.name}"`, t), !(T || !i.iframe.isConnected || i.iframe.contentWindow !== e) && (e?.postMessage({
						type: "macroflush:audio-analysis",
						clipId: i.clip.id,
						payload: {
							analyses: {},
							stems: {},
							placements: []
						}
					}, "*"), i.ready = !0, Ze());
				}) : (i.ready = !0, Ze());
				return;
			}
			if (r.type === "macroflush:cue" && typeof r.name == "string" && Number.isFinite(Number(r.frame))) {
				c.set(r.name, Math.max(0, Math.floor(Number(r.frame))));
				return;
			}
			if (r.type === "macroflush:go" && typeof r.name == "string") {
				let t = c.get(r.name);
				t !== void 0 && e.onGo?.(r.name, t);
				return;
			}
			if (r.type === "macroflush:comp-param-change" && typeof r.key == "string") {
				let e = S.parameters?.[r.key];
				e && (e.value = r.value);
				return;
			}
			if (r.type === "macroflush:param-change" && typeof r.key == "string") {
				let e = i.clip.params[r.key];
				e && (e.value = r.value, Et(S.layers));
				return;
			}
			if (r.type === "macroflush:scene") {
				let t = Array.isArray(r.operations) ? r.operations.filter(pf) : pf(r.operation) ? [r.operation] : [];
				if (t.length === 0) return;
				let n = i.sceneGraph;
				for (let e of t) n = Wa(n, e);
				i.sceneGraph = n;
				try {
					je();
				} catch (t) {
					e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
				}
				return;
			}
			if (!(r.type !== "macroflush:frame" || !(r.bitmap instanceof ImageBitmap))) {
				if (oe && r.frameParamToken !== oe.token) {
					r.bitmap.close();
					return;
				}
				i.bitmap && (i.bitmap.close(), l.replacedFrames += 1), i.bitmap = r.bitmap, Number.isFinite(Number(r.frameSeq)) && (i.lastFrameSeq = Math.max(i.lastFrameSeq, Math.floor(Number(r.frameSeq)))), l.framesReceived += 1, Ve();
			}
		}
	}, Ne = (e) => {
		if (!e.bitmap) return;
		let t = e.bitmap;
		(e.frameCanvas.width !== t.width || e.frameCanvas.height !== t.height) && (e.frameCanvas.width = t.width, e.frameCanvas.height = t.height);
		let n = e.frameCanvas.getContext("2d");
		n?.clearRect(0, 0, e.frameCanvas.width, e.frameCanvas.height), n?.drawImage(t, 0, 0), t.close(), e.bitmap = null, e.hasFrame = !0;
	}, Pe = (e, t, r, i, a) => {
		if (t.kind === "runtime-instance") {
			let n = pe.get(t.masterObjectId);
			return !n || n.kind !== "runtime" ? !1 : Fe(e, t, n.player.canvas, i, a);
		}
		if (t.kind === "instance") {
			let o = ee.get(t.masterClipId);
			if (!o || o.kind !== "html" || i < o.clip.inFrame || i >= o.clip.outFrame) return !1;
			Ne(o);
			let s = it(e, n, S, r.params, [o.frameCanvas.width, o.frameCanvas.height], a);
			return o.hasFrame && e.drawImage(o.frameCanvas, 0, 0, s[0], s[1]), uf(e, o.sceneGraph, C, me, o.matteCache, i, S.fps, Yd(ve), Re()), e.restore(), o.hasFrame || o.sceneGraph.size > 0;
		}
		if (t.kind === "image") return t.ready ? (lf(e, S, r.params, t.image, [t.image.naturalWidth, t.image.naturalHeight], a), !0) : !1;
		if (t.kind === "video") return !t.ready || t.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ? !1 : (lf(e, S, r.params, t.video, [t.video.videoWidth, t.video.videoHeight], a), !0);
		if (t.kind === "audio") return !1;
		if (t.kind === "composition-ref" || t.kind === "runtime") {
			if (t.kind === "runtime" && !Le(t)) return Fe(e, t, t.player.canvas, i, a);
			let o = it(e, n, S, r.params, [t.player.canvas.width, t.player.canvas.height], a);
			return e.drawImage(t.player.canvas, 0, 0, o[0], o[1]), e.restore(), !0;
		}
		Ne(t);
		let o = it(e, n, S, r.params, [t.frameCanvas.width, t.frameCanvas.height], a);
		return t.hasFrame && e.drawImage(t.frameCanvas, 0, 0, o[0], o[1]), uf(e, t.sceneGraph, C, me, t.matteCache, i, S.fps, Yd(ve), Re()), e.restore(), t.hasFrame || t.sceneGraph.size > 0;
	}, Fe = (e, t, r, i, a) => {
		let o = t.parentClipId ? ee.get(t.parentClipId) : void 0, s = o?.kind === "html" ? o.sceneGraph.get(t.objectId) : void 0;
		if (!o || o.kind !== "html" || !s) return !1;
		let c = $e(o.clip, {
			frame: i,
			fps: S.fps,
			playing: !0,
			speed: 1
		}, S), l = Gd(o.sceneGraph, s.id, (e) => rf(e, C.get(e.assetId)));
		if (!c || !l?.visible) return !1;
		let u = rf(s, C.get(s.assetId), [r.width, r.height]);
		return it(e, n, S, {
			...c.params,
			opacity: 1,
			blendMode: "normal"
		}, [o.frameCanvas.width, o.frameCanvas.height], "source-over"), e.beginPath(), e.rect(0, 0, o.frameCanvas.width, o.frameCanvas.height), e.clip(), e.transform(...l.transform), e.globalAlpha = Math.max(0, Math.min(1, l.opacity)), e.globalCompositeOperation = a ?? rt[s.blendMode ?? "normal"] ?? "source-over", e.drawImage(r, 0, 0, u[0], u[1]), e.restore(), !0;
	}, Ie = (e) => {
		if (e.kind === "html") return e.sceneGraph;
		if (e.kind !== "instance") return null;
		let t = ee.get(e.masterClipId);
		return t?.kind === "html" ? t.sceneGraph : null;
	}, Le = (e) => e?.kind === "runtime" && e.clip.kind === "html" && !!e.clip.capabilities?.includes("p5") && e.clip.p5Playback === "isolated-replay", Re = () => new Map([...pe].flatMap(([e, t]) => {
		let n = t.kind === "runtime-instance" ? pe.get(t.masterObjectId) : t;
		return n?.kind === "runtime" && Le(n) ? [[e, n.player.canvas]] : [];
	})), ze = (e, t, r, i) => {
		let a = Ie(t);
		if (!a || a.size === 0) return Pe(e, t, r, i, "destination-in");
		let o = _e ??= document.createElement("canvas");
		(o.width !== n.width || o.height !== n.height) && (o.width = n.width, o.height = n.height);
		let s = o.getContext("2d");
		return !s || (s.clearRect(0, 0, o.width, o.height), !Pe(s, t, r, i, "source-over")) ? !1 : (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalCompositeOperation = "destination-in", e.drawImage(o, 0, 0), e.restore(), !0);
	}, Be = (t, r, i, a) => {
		let o = performance.now(), s = n.getContext("2d");
		if (!s) return;
		s.clearRect(0, 0, n.width, n.height);
		let c = (e) => {
			if (a.has(e.clip.id)) {
				let t = a.get(e.clip.id), n = oe?.overridesFor(e.clip.id);
				return t && n && Object.keys(n).length ? {
					...t,
					params: {
						...t.params,
						...n
					}
				} : t ?? null;
			}
			let t = $e(e.clip, r, S, i);
			return a.set(e.clip.id, t), t;
		}, u = !1, d = (e, r) => {
			for (let i of ne.get(r.id) ?? []) {
				if (Le(i) || i.kind === "runtime-instance" && Le(pe.get(i.masterObjectId)) || (i.kind === "runtime" || i.kind === "runtime-instance") && !i.visible || i.layerRef.visible === !1) continue;
				let r = c(i);
				if (!r) {
					i.kind === "html" && (i.bitmap?.close(), i.bitmap = null, i.hasFrame = !1);
					continue;
				}
				let a = i.clip.maskClipId ? ee.get(i.clip.maskClipId) : void 0, o = a ? c(a) : null;
				if (!a || !o) {
					Pe(e, i, r, t) && (l.framesComposited += 1);
					continue;
				}
				let s = ge ??= document.createElement("canvas");
				u = !0, (s.width !== n.width || s.height !== n.height) && (s.width = n.width, s.height = n.height);
				let d = s.getContext("2d");
				if (d) {
					if (d.clearRect(0, 0, s.width, s.height), !Pe(d, i, r, t, "source-over") || !ze(d, a, o, t)) {
						Pe(e, i, r, t) && (l.framesComposited += 1);
						continue;
					}
					e.save(), e.globalCompositeOperation = rt[String(r.params.blendMode)] ?? "source-over", e.drawImage(s, 0, 0), e.restore(), l.framesComposited += 1;
				}
			}
		};
		if (S.layers.some((e) => e.kind === "effect")) re.render(s, S, r, i, (e, t) => d(e, t), (t) => {
			e.onError ? e.onError(t) : console.error(t);
		}, !1, oe?.overrides ?? ie.overrides);
		else for (let e of [...S.layers].reverse()) d(s, e);
		!u && ge && (ge.width = 0, ge.height = 0, ge = null), !u && _e && (_e.width = 0, _e.height = 0, _e = null), l.lastCompositeMs = performance.now() - o, e.onComposite?.();
	}, Ve = () => {
		!ce || !(oe ? oe.done : ie.ready) || Be(ce.frame, ce.state, ce.compositionParams, ce.ticks);
	}, He = (e, t, n, r) => h.visit({
		pathId: e,
		definitionKey: JSON.stringify([
			t,
			S.fps,
			n.inFrame,
			n.outFrame
		]),
		parent: r,
		mapTime: (e) => {
			let t = e * S.fps;
			return t >= n.inFrame && t < n.outFrame ? {
				time: (t - n.inFrame) / S.fps,
				segmentKey: String(y)
			} : null;
		}
	}), Ue = (e, t, n) => {
		if (!e.feedbackInputEnabled) return t;
		let r = He(e.documentToken, e.feedbackDefinition, e.clip, n);
		return r ? {
			...t,
			feedbackDelivery: r,
			feedbackInputIntent: n.inputDelivery
		} : t;
	}, We = (e) => {
		e.kind === "html" && e.documentToken && h.deactivate(e.documentToken), (e.kind === "composition-ref" || e.kind === "runtime") && (e.player.setMediaPlaying(!1), h.deactivate(`child:${e.clip.id}`), nf.get(e.player)?.deactivate());
	}, Ge = () => {
		let t = ce, n = oe;
		if (!(!t || !n)) for (let r of n.readyIds) {
			let i = ee.get(r), a = t.ticks.get(r);
			if (!i || i.kind !== "html" || !i.ready || !a) continue;
			n.dispatch(r);
			let o = !i.hasEntered;
			i.hasEntered = !0;
			let s = n.overridesFor(r), c = pa({
				...a,
				params: {
					...a.params,
					...s
				}
			}, S, S.assets, i.clip);
			if (i.replayDirty !== void 0) {
				if (Object.keys(s).length) {
					let t = /* @__PURE__ */ Error(`P5 replay ${i.clip.id}: incoming cross-Clip writes cannot be reconstructed; use timeline mode.`);
					e.onError ? e.onError(t) : console.error(t);
					continue;
				}
				Ke(i, {
					...c,
					frameParamToken: n.token
				});
				continue;
			}
			i.iframe.contentWindow?.postMessage({
				...Ue(i, c, t.feedback),
				entering: o,
				cueName: t.cueName,
				frameParamToken: n.token,
				crossClipParams: Dt(S.layers, t.frame),
				allowedParamWrites: ae?.graph.links.filter((e) => e.sourceId === r).map((e) => [e.targetId, e.key]),
				frameTransferAvailable: i.bitmap === null,
				frameTransferAckSeq: i.lastFrameSeq
			}, "*");
		}
	}, Ke = (n, i) => {
		n.replayDirty &&= (n.replay?.dispose(), n.replay = Bd({
			history: Nd(n.clip, S, fi(C.descriptors, n.clip.libraries)),
			descriptors: fi(C.descriptors, n.clip.libraries),
			container: r,
			mode: "live",
			nativeAssetSources: t
		}), !1);
		let a = n.replay, o = n.replayRequest = (n.replayRequest ?? 0) + 1;
		a.request(i.frame, "playback").then(({ bitmap: e }) => {
			if (T || n.replay !== a || n.replayRequest !== o) {
				e.close();
				return;
			}
			if (i.frameParamToken && i.frameParamToken !== ce?.token) {
				e.close();
				return;
			}
			n.bitmap && (n.bitmap.close(), l.replacedFrames++), n.bitmap = e, n.lastFrameSeq++, l.framesReceived++, i.frameParamToken && (oe ? (oe.complete(i.frameParamToken, n.clip.id, []), Ge()) : ie.complete(i.frameParamToken, n.clip.id, [])), Ve();
		}).catch((t) => {
			T || n.replay !== a || n.replayRequest !== o || t instanceof Pd && t.diagnostic.code === "canceled" || (e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t));
		});
	}, qe = (e) => {
		if (f !== null) return b = "cue", u = f, d = e, f = null, u;
		if (!(S.cues && Object.keys(S.cues).length > 0)) return u = null, d = null, e;
		let t = Math.max(1, S.durationFrames), n = d === null ? 0 : e + t - d, r = d !== null && e < d && d >= t / 2 && e < t / 2;
		if (u === null || d === null || e < d && !r) return u = e, d = e, u;
		let i = r ? n : e - d, a = u + i, o = Ri(S.cues, S.durationFrames, u);
		return o && a >= o.rangeEnd ? (b = o.mode === "stop" ? "pause" : "wrap", u = o.mode === "loop" ? o.rangeStart : o.mode === "stop" ? Math.max(o.rangeStart, o.rangeEnd - 1) : a % t) : (u = a % t, (a >= t || r) && (b = "wrap")), d = e, u;
	}, Je = (t, n = {}, r, i = !1) => {
		if (T) return;
		let a = Math.round(t * S.fps);
		ce = null, oe = null, p = t, b = void 0;
		let o = i && v ? Math.round(v.time * S.fps) : qe(a);
		b && y++;
		let s;
		if (i && v) s = v;
		else {
			let e = r ? "child" : "root";
			if (e !== _ && (h.resetParent(), g.resetParent(), m.reset(), _ = e), r) {
				let e = g.visit({
					pathId: "clock",
					definitionKey: String(S.fps),
					parent: r,
					cause: b,
					mapTime: (e) => ({
						time: (Math.round(e * S.fps) + o - a) / S.fps,
						segmentKey: String(y)
					})
				});
				s = Object.freeze({
					time: o / S.fps,
					inputDelivery: r.inputDelivery,
					delivery: e
				});
			} else s = m.visit(o / S.fps, n, b);
			v = s;
		}
		let c = Ri(S.cues, S.durationFrames, o)?.name ?? null, l = {
			frame: o,
			fps: S.fps,
			playing: ve,
			speed: 1
		};
		ve || $d(me);
		let u = S.cues && Object.keys(S.cues).length ? l : {
			...l,
			frame: t * S.fps
		}, d = he(S.parameters ?? {}, S.parameterKeyframeTracks, o), f = Dt(S.layers, o), x = S.layers.some((e) => e.kind === "effect");
		try {
			ae?.layers !== S.layers && (ae = {
				layers: S.layers,
				graph: ni(S)
			});
		} catch (t) {
			e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
			return;
		}
		let C = ae.graph, te = C.links.some((e) => S.layers.some((t) => t.clips.some((t) => t.id === e.targetId && t.kind === "html"))), ne = x || te ? `player:${++se}:${o}` : void 0, re = w.filter((e) => e.kind === "html" && (e.layerRef.visible !== !1 || fe.has(e.clip.id)) && $e(e.clip, l, S, d)).map((e) => e.clip.id);
		te && ne && (oe = ii(S, C, ne, re)), ie.begin(ne ?? `player:plain:${se}:${o}`, S, x && !te ? re : []);
		let le = /* @__PURE__ */ new Map();
		for (let e of w) {
			if (e.layerRef.visible === !1 && !fe.has(e.clip.id)) {
				We(e), e.kind === "html" ? (e.hasEntered = !1, e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.cancelPending()) : e.kind === "runtime" && Le(e) ? e.player.tickTime(e.clip.outFrame / S.fps) : (e.kind === "video" || e.kind === "audio") && ef(e.kind === "video" ? e.video : e.audio, !1, o, S.fps, Yd(ve), e.clip.inFrame);
				continue;
			}
			let t = $e(e.clip, e.kind === "html" && e.replayDirty !== void 0 ? u : l, S, d);
			if (le.set(e.clip.id, t), e.kind === "html") {
				if (!t) We(e), e.hasEntered = !1, e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.cancelPending();
				else if (e.ready && !te) {
					let n = !e.hasEntered;
					e.hasEntered = !0;
					let r = e.bitmap === null, i = e.lastFrameSeq, a = pa(t, S, S.assets, e.clip);
					if (e.replayDirty !== void 0) {
						Ke(e, {
							...a,
							frameParamToken: ne
						});
						continue;
					}
					e.iframe.contentWindow?.postMessage(n ? {
						...Ue(e, a, s),
						entering: !0,
						cueName: c,
						crossClipParams: f,
						frameParamToken: ne,
						frameTransferAvailable: r,
						frameTransferAckSeq: i
					} : {
						...Ue(e, a, s),
						cueName: c,
						crossClipParams: f,
						frameParamToken: ne,
						frameTransferAvailable: r,
						frameTransferAckSeq: i
					}, "*");
				}
			} else if (e.kind === "composition-ref" || e.kind === "runtime") {
				if (e.player.setMediaPlaying(ve), e.kind === "runtime" && e.parentClipId && !Le(e)) {
					let n = ee.get(e.parentClipId), r = n ? $e(n.clip, l, S, d) : null;
					if (!n || !r || !t) {
						We(e);
						continue;
					}
					let i = ue.get(e.clip.assetId), a = e.clip.kind === "html" ? "html" : "composition", o = i?.kind === "composition" ? i.composition.fps : S.fps, c = Hd(r.time, o, a), u = h.visit({
						pathId: `child:${e.clip.id}`,
						definitionKey: JSON.stringify([
							e.clip.assetId,
							n.clip.id,
							n.clip.inFrame,
							n.clip.outFrame,
							S.fps,
							o,
							a
						]),
						parent: s,
						mapTime: (e) => {
							let t = e * S.fps;
							return t >= n.clip.inFrame && t < n.clip.outFrame ? {
								time: Hd((t - n.clip.inFrame) / S.fps, o, a),
								segmentKey: String(y)
							} : null;
						}
					});
					u && nf.get(e.player)?.tick(Object.freeze({
						time: c,
						inputDelivery: s.inputDelivery,
						delivery: u
					}));
					continue;
				}
				if (e.kind === "runtime" && Le(e) && e.parentClipId) {
					let t = ee.get(e.parentClipId), n = t ? $e(t.clip, l, S, d) : null;
					n ? e.player.tickTime(n.time) : (e.player.setMediaPlaying(!1), e.player.tickTime(e.clip.outFrame / S.fps));
				} else if (t) {
					let n = He(`child:${e.clip.id}`, e.clip.assetId ?? e.clip.id, e.clip, s);
					n && nf.get(e.player)?.tick(Object.freeze({
						time: t.time,
						inputDelivery: s.inputDelivery,
						delivery: n
					}));
				} else We(e);
			} else (e.kind === "video" || e.kind === "audio") && ef(e.kind === "video" ? e.video : e.audio, !!t, o, S.fps, Yd(ve), e.clip.inFrame);
		}
		ce = {
			frame: o,
			state: l,
			compositionParams: d,
			cueName: c,
			token: ne,
			ticks: le,
			feedback: s
		}, te && Ge(), Ve();
	}, Ye = (e, t) => Je(e, t), Xe = (e, t) => Ye(e / S.fps, t), Ze = () => {
		p !== null && Je(p, {}, void 0, !0);
	}, Qe = (e) => {
		if (!(T || ve === e)) {
			ve = e, e || $d(me);
			for (let t of w) !e && (t.kind === "video" || t.kind === "audio") ? Qd(t.kind === "video" ? t.video : t.audio) : (t.kind === "composition-ref" || t.kind === "runtime") && t.player.setMediaPlaying(e);
		}
	}, et = (n) => {
		xe?.abort();
		let r = ++E;
		if (Ce = n.clipFormatVersion === 3, !Ce) {
			Se = Promise.all(D).then(() => void 0), Se.catch(() => void 0);
			return;
		}
		let i = Od(n), a = xe = new AbortController();
		Se = ye.resolve(i, {
			securityScope: `web-player:${r}`,
			assetBaseUrl: e.assetBaseUrl,
			revision: () => String(r)
		}, a.signal).then((e) => {
			if (T || r !== E) {
				e.release();
				return;
			}
			let n = e.states.filter((e) => e.status !== "ready");
			if (n.length) throw e.release(), Error(`Player sources unresolved: ${n.map((e) => `${e.assetId}: ${e.status}`).join(", ")}`);
			let i = x?.rootCompositionId ?? e.project.rootCompositionId;
			Ce = !1;
			try {
				x = {
					...e.project,
					rootCompositionId: i
				}, S = tf(x), C = pi(S.assets, t), Ee(), we(S.width, S.height), Oe();
			} catch (t) {
				throw O(), e.release(), t;
			}
			let a = be;
			return be = e, a?.release(), p === null ? Ye(0) : Ze(), Promise.all(D).then(() => void 0);
		}), Se.catch((e) => {
			!T && r === E && !a.signal.aborted && console.warn("Unable to resolve Player sources.", e);
		});
	}, tt = (e) => {
		if (T) throw Error("Cannot change a project after the Player is destroyed.");
		x = e.clipFormatVersion === 3 ? Md(e) : e.clipFormatVersion === 2 ? e : null, S = tf(e), u = null, d = null, f = null, m.reset(), g.reset(), h.reset(), v = void 0, C = pi(S.assets, t), Ee(), we(S.width, S.height), e.clipFormatVersion === 3 ? O() : Oe(), be?.release(), be = void 0, et(e);
	}, nt = (e) => {
		if (T) throw Error("Cannot open a composition after the Player is destroyed.");
		if (!x) throw Error("openComposition() requires a V2 project file.");
		let n = wa(x, e);
		return x = {
			...x,
			rootCompositionId: n.id
		}, S = tf({
			...x,
			rootCompositionId: n.id
		}), u = null, d = null, f = null, p = null, m.reset(), g.reset(), h.reset(), v = void 0, c.clear(), C = pi(S.assets, t), Ee(), we(S.width, S.height), Ce || (Oe(), Se = Promise.all(D).then(() => void 0), Se.catch(() => void 0)), Ye(0), {
			compositionId: n.id,
			width: S.width,
			height: S.height,
			fps: S.fps,
			bpm: S.bpm,
			durationFrames: S.durationFrames
		};
	}, at = (e, t, n, ...r) => {
		let i = S.layers.find((t) => t.name === e)?.clips.find((e) => e.name === t), a = i?.params[n];
		if (!a) return !1;
		let o = hf(a.type, r);
		if (o === void 0) return !1;
		if (Object.is(a.value, o) || Array.isArray(a.value) && Array.isArray(o) && a.value.length === o.length && a.value.every((e, t) => Object.is(e, o[t]))) return !0;
		a.value = o;
		let s = ee.get(i.id);
		return s?.kind === "html" && s.replayDirty !== void 0 && (s.replayDirty = !0), Et(S.layers), !0;
	}, ot = (e, ...t) => {
		let n = S.layers.find((t) => t.name === e);
		if (!n) return !1;
		if (n.visible = !!t[0], !n.visible) for (let e of w) e.layerRef === n && !fe.has(e.clip.id) && We(e);
		return !0;
	}, st = (e) => {
		let t = S.layers.find((t) => t.name === e);
		return t ? t.visible !== !1 : void 0;
	}, ct = (e, t, n) => S.layers.find((t) => t.name === e)?.clips.find((e) => e.name === t)?.params[n]?.value, lt = (e, ...t) => {
		let n = S.parameters?.[e];
		if (!n) return !1;
		let r = hf(n.type, t);
		if (r === void 0) return !1;
		n.value = r;
		for (let e of w) e.kind === "html" && e.replayDirty !== void 0 && (e.replayDirty = !0);
		return !0;
	}, ut = (e) => S.parameters?.[e]?.value, dt = (e) => {
		if (e.length <= 3) return null;
		let t = S.layers.find((t) => t.name === e[0])?.clips.find((t) => t.name === e[1]);
		if (!t || t.kind !== "composition-ref") return null;
		let n = w.find((e) => (e.kind === "composition-ref" || e.kind === "runtime") && e.clip === t);
		return !n || n.kind !== "composition-ref" && n.kind !== "runtime" ? null : {
			player: n.player,
			rest: `/${e.slice(2).join("/")}`
		};
	}, ft = (e) => {
		let t = S.cues?.[e];
		return t ? (f = t.frame, !0) : !1;
	}, pt = (e, ...t) => {
		let n = e.split("/").filter((e) => e.length > 0);
		if (n.length === 1) return ot(n[0], ...t);
		if (n.length === 2 && n[0] === "comp") return lt(n[1], ...t);
		if (n.length === 2 && n[0] === "layer") return ot(n[1], ...t);
		if (n.length === 3) return at(n[0], n[1], n[2], ...t);
		let r = dt(n);
		return r ? r.player.set(r.rest, ...t) : !1;
	}, mt = (e) => {
		let t = e.split("/").filter((e) => e.length > 0);
		if (t.length === 1) return st(t[0]);
		if (t.length === 2 && t[0] === "comp") return ut(t[1]);
		if (t.length === 2 && t[0] === "layer") return st(t[1]);
		if (t.length === 3) return ct(t[0], t[1], t[2]);
		let n = dt(t);
		return n?.player.get(n.rest);
	}, ht = (e, t) => {
		if (!T) for (let n of w) n.kind === "html" && n.ready ? n.iframe.contentWindow?.postMessage({
			type: "macroflush:emit",
			clipId: n.clip.id,
			name: e,
			payload: t
		}, "*") : (n.kind === "composition-ref" || n.kind === "runtime") && n.player.emit(e, t);
	};
	we(S.width, S.height), Ee(), window.addEventListener("message", Me), Ce || Oe(), et(e.project);
	let gt = {
		canvas: n,
		get ready() {
			return Se;
		},
		tickTime: Ye,
		tick: Xe,
		setMediaPlaying: Qe,
		resize: we,
		setProject: tt,
		openComposition: nt,
		setLayerVisible: ot,
		getLayerVisible: st,
		setClipParam: at,
		getClipParam: ct,
		setParam: lt,
		getParam: ut,
		go: ft,
		set: pt,
		get: mt,
		emit: ht,
		getStats: () => ({ ...l }),
		destroy() {
			T || (T = !0, nf.delete(gt), m.dispose(), g.dispose(), h.dispose(), window.removeEventListener("message", Me), O(), xe?.abort(), be?.release(), ye.dispose(), i && r.remove());
		}
	};
	return nf.set(gt, {
		tick: (e) => Je(e.time, { inputDelivery: e.inputDelivery }, e),
		deactivate: () => {
			g.deactivate("clock"), h.reset();
		}
	}), gt;
}
function lf(e, t, n, r, i, a) {
	let o = [Math.max(1, i[0]), Math.max(1, i[1])];
	at(e, r, o, it(e, e.canvas, t, n, o, a)), e.restore();
}
function uf(e, t, n, r, i, a, o, s = Kd, c = /* @__PURE__ */ new Map()) {
	let l = typeof s == "boolean" ? s ? Jd : Kd : s, u = l.mode === "prepared";
	l.mode === "paused-sample" && $d(r);
	let d = new Map([...t].filter(([, e]) => {
		let t = n.get(e.assetId)?.kind;
		return t === "image" || t === "video" || t === "audio" || (t === "html-clip" || t === "composition") && (u || c.has(e.id));
	})), f = (e) => {
		let t = n.get(d.get(e)?.assetId ?? "")?.kind;
		return t === "image" || t === "video";
	}, p = new Set([...d.values()].filter((e) => e.maskId && f(e.id) && f(e.maskId)).map((e) => e.id));
	for (let e of i.keys()) p.has(e) || i.delete(e);
	let m = Ua(d), h = e.getTransform(), g = /* @__PURE__ */ new Map();
	function _(e) {
		if (!e?.sourceUrl) return;
		let t = r.get(e.id);
		if (t) return t;
		if (!u) {
			if (e.kind === "audio") {
				let n = document.createElement("audio");
				n.loop = !0, n.preload = "auto", n.src = e.sourceUrl, t = n;
			} else if (e.kind === "video") {
				let n = document.createElement("video");
				n.muted = !0, n.loop = !0, n.playsInline = !0, n.src = e.sourceUrl, t = n;
			} else {
				let n = new Image();
				n.src = e.sourceUrl, t = n;
			}
			return r.set(e.id, t), t instanceof HTMLMediaElement && !t.isConnected && (t.setAttribute("aria-hidden", "true"), t.tabIndex = -1, Object.assign(t.style, {
				position: "fixed",
				width: "1px",
				height: "1px",
				overflow: "hidden",
				opacity: "0",
				pointerEvents: "none",
				inset: "0"
			}), document.body.appendChild(t)), t;
		}
	}
	let v = m.map((e) => ({
		node: e,
		parent: df
	}));
	for (; v.length;) {
		let { node: e, parent: t } = v.pop(), r = e.object, i = n.get(r.assetId), a = rf(r, i, af(c.get(r.id) ?? _(i))), o = r.anchorPoint ?? [a[0] / 2, a[1] / 2], s = {
			transform: Wd(t.transform, Ud(r, o)),
			opacity: t.opacity * r.opacity,
			visible: t.visible && r.visible
		};
		g.set(r.id, s);
		for (let t of e.children) v.push({
			node: t,
			parent: s
		});
	}
	let y = (e, t, r, i = {}) => {
		let s = n.get(t.object.assetId), d = c.get(t.object.id) ?? _(s);
		if (!s || !d || !i.ignoreVisibility && !r.visible) return;
		let [f, p] = rf(t.object, s, af(d));
		if (d instanceof HTMLAudioElement) {
			if (u) return;
			d.volume = mf(t.object.volume, 1, 0, 1), ef(d, !!(i.ignoreVisibility || r.visible), a, o, l);
			return;
		}
		d instanceof HTMLVideoElement && !u && ef(d, !!(i.ignoreVisibility || r.visible), a, o, l), !(f <= 0 || p <= 0 || d instanceof HTMLImageElement && !d.complete || d instanceof HTMLVideoElement && d.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) && (e.save(), e.setTransform(h.a, h.b, h.c, h.d, h.e, h.f), e.transform(...r.transform), e.globalAlpha = mf(r.opacity, 1, 0, 1), e.globalCompositeOperation = i.composite ?? rt[t.object.blendMode ?? "normal"] ?? "source-over", e.drawImage(d, 0, 0, f, p), e.restore());
	}, b = (e, t, n) => {
		let r = g.get(t.object.id);
		if (!r || !r.visible) return;
		let a = t.object.maskId && p.has(t.object.id) ? ff(m, t.object.maskId) : void 0, o = a ? g.get(a.object.id) : void 0;
		if (t.object.id !== n && a && o) {
			let n = i.get(t.object.id);
			n || (n = document.createElement("canvas"), i.set(t.object.id, n)), (n.width !== e.canvas.width || n.height !== e.canvas.height) && (n.width = e.canvas.width, n.height = e.canvas.height);
			let r = n.getContext("2d");
			if (!r) return;
			r.clearRect(0, 0, n.width, n.height), b(r, t, t.object.id), y(r, a, o, {
				ignoreVisibility: !0,
				composite: "destination-in"
			}), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalAlpha = 1, e.globalCompositeOperation = rt[t.object.blendMode ?? "normal"] ?? "source-over", e.drawImage(n, 0, 0), e.restore();
			return;
		}
		y(e, t, r, { composite: t.object.id === n ? "source-over" : void 0 });
		for (let r of t.children) b(e, r, n);
	};
	for (let t of m) b(e, t);
}
var df = {
	transform: [
		1,
		0,
		0,
		1,
		0,
		0
	],
	opacity: 1,
	visible: !0
};
function ff(e, t) {
	for (let n of e) {
		if (n.object.id === t) return n;
		let e = ff(n.children, t);
		if (e) return e;
	}
}
function pf(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (t.type === "remove") return typeof t.id == "string";
	let n = t.object;
	return t.type === "upsert" && typeof n?.id == "string";
}
function mf(e, t, n = -Infinity, r = Infinity) {
	let i = Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, i)) : t;
}
function hf(e, t) {
	if (e === "number") {
		let e = Number(t[0]);
		return Number.isFinite(e) ? e : void 0;
	}
	if (e === "vec2" || e === "vec3") {
		let n = e === "vec2" ? 2 : 3;
		if (t.length < n) return;
		let r = t.slice(0, n).map(Number);
		return r.every(Number.isFinite) ? r : void 0;
	}
	if (e === "boolean") return !!t[0];
	if (e === "color") {
		if (t.length >= 3) {
			let e = t.slice(0, 3).map((e) => Math.round(Math.min(1, Math.max(0, Number(e))) * 255));
			return e.every(Number.isFinite) ? `#${e.map((e) => e.toString(16).padStart(2, "0")).join("")}` : void 0;
		}
		return t.length === 1 ? String(t[0]) : void 0;
	}
	return t.length > 0 ? String(t[0]) : void 0;
}
//#endregion
export { it as applyClipTransform, rt as canvasBlendModes, uf as compositeSceneGraph, cf as createClipPlayer, at as drawImageCover, rf as resolveDisplaySize };
