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
function T(e) {
	return e === 0 || e === 1 ? e : -(2 ** (10 * e - 10)) * Math.sin((10 * e - 10.75) * (2 * Math.PI / 3));
}
function E(e) {
	return e === 0 || e === 1 ? e : 2 ** (-10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI / 3)) + 1;
}
function D(e) {
	if (e === 0 || e === 1) return e;
	let t = Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5));
	return e < .5 ? -(2 ** (20 * e - 10) * t) / 2 : 2 ** (-20 * e + 10) * t / 2 + 1;
}
function O(e) {
	if (e === 0 || e === 1) return e;
	let t = 7.5625, n = 2.75;
	return e < 1 / n ? t * e * e : e < 2 / n ? t * (e - 1.5 / n) ** 2 + .75 : e < 2.5 / n ? t * (e - 2.25 / n) ** 2 + .9375 : t * (e - 2.625 / n) ** 2 + .984375;
}
function ee(e) {
	return e === 0 || e === 1 ? e : 1 - O(1 - e);
}
function te(e) {
	return e === 0 || e === 1 ? e : e < .5 ? (1 - O(1 - 2 * e)) / 2 : (1 + O(2 * e - 1)) / 2;
}
function ne(e) {
	return e * e * (3 - 2 * e);
}
function re(e) {
	return e ** 3 * (e * (e * 6 - 15) + 10);
}
var ie = {
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
	elasticIn: T,
	elasticOut: E,
	elasticInOut: D,
	bounceIn: ee,
	bounceOut: O,
	bounceInOut: te,
	smoothStep: ne,
	smootherStep: re
};
function ae(e, t) {
	let [n = 0, r = 0, i = 1, a = 1] = t, o = le(e), s = o;
	for (let e = 0; e < 8; e += 1) {
		let e = se(s, 0, n, i, 1) - o, t = ce(s, 0, n, i, 1);
		if (Math.abs(e) < 1e-5 || Math.abs(t) < 1e-5) break;
		s = le(s - e / t);
	}
	let c = 0, l = 1;
	for (let e = 0; e < 12; e += 1) {
		let e = se(s, 0, n, i, 1);
		if (Math.abs(e - o) < 1e-5) break;
		e < o ? c = s : l = s, s = (c + l) / 2;
	}
	return se(s, 0, r, a, 1);
}
function oe(e, t, n) {
	let r = le(t);
	return e === "step" ? 0 : e === "bezier" ? ae(r, n ?? [
		.25,
		.1,
		.25,
		1
	]) : ie[e]?.(r) ?? r;
}
function se(e, t, n, r, i) {
	let a = 1 - e;
	return a ** 3 * t + 3 * a ** 2 * e * n + 3 * a * e ** 2 * r + e ** 3 * i;
}
function ce(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a ** 2 * (n - t) + 6 * a * e * (r - n) + 3 * e ** 2 * (i - r);
}
function le(e) {
	return Math.max(0, Math.min(1, e));
}
//#endregion
//#region src/core/keyframes.ts
function ue(e, t, n) {
	if (!t || t.length === 0) return e.value;
	let r = [...t].sort((e, t) => e.frame - t.frame), i = fe(r, n), a = pe(r, n);
	if (!i) return r[0].value;
	if (!a || i.frame === a.frame || !he(e)) return i.value;
	let o = oe(e.type === "color" && i.easing === "step" ? "linear" : i.easing, (n - i.frame) / (a.frame - i.frame), i.bezier);
	return me(e, i.value, a.value, o);
}
function de(e, t, n) {
	return Object.fromEntries(Object.entries(e).map(([e, r]) => [e, ue(r, t?.[e], n)]));
}
function fe(e, t) {
	return [...e].reverse().find((e) => e.frame <= t);
}
function pe(e, t) {
	return e.find((e) => e.frame > t);
}
function me(e, t, n, r) {
	return e.type === "number" ? _e(Number(t), Number(n), r) : (e.type === "vec2" || e.type === "vec3") && Array.isArray(t) && Array.isArray(n) ? t.map((e, t) => _e(Number(e), Number(n[t] ?? e), r)) : e.type === "color" && typeof t == "string" && typeof n == "string" ? ge(t, n, r) : t;
}
function he(e) {
	return e.type === "color" || !!e.interpolable;
}
function ge(e, t, n) {
	let r = k(e), i = k(t);
	return !r || !i ? e : `#${r.map((e, t) => Math.max(0, Math.min(255, Math.round(_e(e, i[t], n)))).toString(16).padStart(2, "0")).join("")}`;
}
function k(e) {
	let t = e.match(/^#([0-9a-fA-F]{6})$/);
	if (!t) return null;
	let n = t[1];
	return [
		Number.parseInt(n.slice(0, 2), 16),
		Number.parseInt(n.slice(2, 4), 16),
		Number.parseInt(n.slice(4, 6), 16)
	];
}
function _e(e, t, n) {
	return e + (t - e) * n;
}
//#endregion
//#region src/core/feedbackContracts.ts
var A = Object.freeze({
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
}), ve = Object.freeze({
	offset: 0,
	rate: 1,
	loop: !1
}), j = class extends Error {
	code;
	assetId;
	channelId;
	constructor(e, t, n = {}) {
		super(`Feedback: ${t}`), this.name = "FeedbackError", this.code = e, this.assetId = n.assetId, this.channelId = n.channelId;
	}
};
function ye(e) {
	return e.kind === "pointer" || e.kind === "number" || e.kind === "osc";
}
//#endregion
//#region src/core/feedbackValidation.ts
var be = new TextEncoder(), xe = /* @__PURE__ */ new Set([
	"move",
	"down",
	"up",
	"enter",
	"leave",
	"cancel",
	"click",
	"double-click",
	"wheel"
]), Se = /* @__PURE__ */ new Set([
	"composition",
	"normalized",
	"clip"
]), Ce = /* @__PURE__ */ new Set([
	"__proto__",
	"prototype",
	"constructor"
]);
function M(e, t) {
	throw new j(e, t);
}
function we(e, t) {
	return (!e || typeof e != "object" || Array.isArray(e)) && M("invalid-format", `${t} must be an object.`), e;
}
function Te(e, t, n) {
	Object.keys(e).some((e) => !t.includes(e)) && M("invalid-format", `${n} contains an unknown field.`);
}
function Ee(e, t) {
	(typeof e != "string" || !e.trim() || e.includes("\0") || be.encode(e).length > A.maxStringBytes) && M("invalid-value", `${t} must be a non-empty string of at most ${A.maxStringBytes} UTF-8 bytes.`);
}
function De(e, t) {
	(typeof e != "number" || !Number.isFinite(e) || Math.abs(e) > A.maxValue) && M("invalid-value", `${t} is out of range.`);
}
function Oe(e, t, n, r) {
	(typeof e != "number" || !Number.isSafeInteger(e) || e < t || e > n) && M("invalid-time", `${r} must be an integer in range.`);
}
function ke(e, t) {
	De(e.x, `${t}.x`), De(e.y, `${t}.y`), (typeof e.buttons != "number" || !Number.isInteger(e.buttons) || e.buttons < 0 || e.buttons > 31 || typeof e.inside != "boolean") && M("invalid-value", `${t} has invalid buttons/inside.`);
}
function Ae(e) {
	return Array.isArray(e) ? ((!e.length || e.length > A.maxArgs) && M("invalid-value", "Numeric vectors require 1..16 values."), e.forEach((e) => De(e, "Numeric vector value")), e) : (De(e, "Numeric value"), e);
}
function je(e, t = A.maxAssetBytes) {
	let n = 0, r = /* @__PURE__ */ new Set(), i = (e) => {
		n += e, n > t && M("size-limit", `JSON exceeds ${t} bytes.`);
	}, a = (e) => {
		e.length > t - n && M("size-limit", `JSON exceeds ${t} bytes.`), i(be.encode(JSON.stringify(e)).length);
	}, o = (e, t) => {
		if (t > A.maxJsonDepth && M("size-limit", "JSON nesting is too deep."), e === null) {
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
		(!e || typeof e != "object") && M("invalid-format", "Expected finite, plain JSON data."), r.has(e) && M("invalid-format", "JSON contains a cycle.");
		let n = Object.getPrototypeOf(e);
		if ((Array.isArray(e) ? n !== Array.prototype : n !== Object.prototype && n !== null) && M("invalid-format", "JSON must use plain objects/arrays."), Object.getOwnPropertySymbols(e).length && M("invalid-format", "JSON cannot contain symbol keys."), r.add(e), i(2), Array.isArray(e)) {
			e.length > A.maxRecords && M("size-limit", "JSON array exceeds the record limit."), Object.getOwnPropertyNames(e).length !== e.length + 1 && M("invalid-format", "JSON arrays cannot have holes or extra properties.");
			for (let n = 0; n < e.length; n++) {
				n && i(1);
				let r = Object.getOwnPropertyDescriptor(e, String(n));
				(!r || !r.enumerable || !("value" in r)) && M("invalid-format", "JSON cannot contain accessors or sparse arrays."), o(r.value, t + 1);
			}
		} else Object.getOwnPropertyNames(e).forEach((n, r) => {
			Ce.has(n) && M("invalid-format", "JSON contains a reserved object key.");
			let s = Object.getOwnPropertyDescriptor(e, n);
			(!s.enumerable || !("value" in s)) && M("invalid-format", "JSON cannot contain accessors or hidden fields."), r && i(1), a(n), i(1), o(s.value, t + 1);
		});
		r.delete(e);
	};
	return o(e, 0), n;
}
function Me(e) {
	return e && typeof e == "object" && (Object.values(e).forEach(Me), Object.freeze(e)), e;
}
function Ne(e) {
	let t = je(e), n = we(e, "Feedback document");
	Te(n, [
		"formatVersion",
		"timeUnit",
		"durationUs",
		"source",
		"channels"
	], "Feedback document"), n.formatVersion !== 1 && M("unsupported-version", "Only Feedback formatVersion 1 is supported."), n.timeUnit !== "us" && M("invalid-time", "Feedback timeUnit must be us."), Oe(n.durationUs, 0, A.maxDurationUs, "durationUs");
	let r = n.durationUs, i = we(n.source, "source");
	Te(i, [
		"compositionId",
		"width",
		"height"
	], "source"), De(i.width, "source.width"), De(i.height, "source.height"), (i.width < 1 || i.height < 1) && M("invalid-value", "Source dimensions must be at least one logical pixel."), i.compositionId !== void 0 && Ee(i.compositionId, "source.compositionId"), Array.isArray(n.channels) || M("invalid-format", "Feedback requires a channels array."), n.channels.length > A.maxChannels && M("size-limit", "Feedback requires at most 32 channels.");
	let a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = [], c = 0, l = n.channels.map((e) => {
		let t = we(e, "channel");
		Ee(t.id, "channel.id"), Ee(t.kind, "channel.kind"), a.has(t.id) && M("invalid-format", `Duplicate channel ${t.id}.`), a.add(t.id);
		let n = [
			"pointer",
			"number",
			"osc"
		].includes(t.kind);
		if (!n) return t.records !== void 0 && !Array.isArray(t.records) && M("invalid-format", `Unknown channel ${t.id} has invalid records.`), c += Array.isArray(t.records) ? t.records.length : 0, Array.isArray(t.records) && t.records.forEach((e) => je(e, A.maxRecordBytes)), c > A.maxRecords && M("size-limit", "Feedback exceeds 500,000 records."), s.push({
			code: "unsupported-channel",
			channelId: t.id,
			message: `Channel ${t.id} (${t.kind}) is retained but cannot be used.`
		}), {
			id: t.id,
			kind: t.kind,
			supported: n,
			records: Array.isArray(t.records) ? t.records.length : 0
		};
		Te(t, t.kind === "pointer" ? [
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
		], `Channel ${t.id}`), Array.isArray(t.records) || M("invalid-format", `Channel ${t.id} requires records.`), c += t.records.length, c > A.maxRecords && M("size-limit", "Feedback exceeds 500,000 records.");
		let i = -1;
		if (t.kind === "pointer") {
			let e = we(t.initial, "pointer.initial");
			Te(e, [
				"x",
				"y",
				"buttons",
				"inside"
			], "pointer.initial"), ke(e, "pointer.initial");
		} else if (t.kind === "number") {
			t.interpolation !== "linear" && t.interpolation !== "hold" && M("invalid-value", "Numeric interpolation must be linear or hold.");
			let e = Ae(t.initial);
			i = Array.isArray(e) ? e.length : -1;
		} else Ee(t.address, "OSC address"), t.address.startsWith("/") || M("invalid-value", "OSC address must start with /.");
		let l = -1, u = -1;
		for (let e of t.records) {
			let n = we(e, `Channel ${t.id} record`);
			if (je(n, A.maxRecordBytes), Oe(n.t, 0, r, `Channel ${t.id} time`), Oe(n.seq, 0, 2 ** 53 - 1, `Channel ${t.id} seq`), (n.t < l || n.seq <= u || o.has(n.seq)) && M("invalid-time", `Channel ${t.id} has unordered or duplicate records.`), o.add(n.seq), l = n.t, u = n.seq, t.kind === "pointer") {
				Te(n, [
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
				], "pointer record"), ke(n, "pointer record"), n.event !== null && (typeof n.event != "string" || !xe.has(n.event)) && M("invalid-value", "Invalid pointer event.");
				let e = [
					"down",
					"up",
					"click",
					"double-click"
				].includes(String(n.event));
				(e || n.button !== void 0) && (typeof n.button != "number" || !Number.isInteger(n.button) || n.button < 0 || n.button > 4) && M("invalid-value", "Invalid pointer button."), !e && n.button !== void 0 && M("invalid-value", "Only button events may contain button."), (n.event === "down" && !(n.buttons & [
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
				][n.button] || n.event === "cancel" && n.buttons !== 0 || n.event === "enter" && n.inside !== !0 || n.event === "leave" && n.inside !== !1) && M("invalid-value", "Pointer event/state disagree."), n.event === "wheel" ? (De(n.deltaX, "deltaX"), De(n.deltaY, "deltaY")) : (n.deltaX !== void 0 || n.deltaY !== void 0) && M("invalid-value", "Only wheel events may contain deltas.");
			} else if (t.kind === "number") {
				Te(n, [
					"t",
					"seq",
					"value"
				], "number record");
				let e = Ae(n.value);
				(Array.isArray(e) ? e.length : -1) !== i && M("invalid-value", "Numeric values must have a fixed shape.");
			} else {
				Te(n, [
					"t",
					"seq",
					"args"
				], "OSC record"), (!Array.isArray(n.args) || n.args.length > A.maxArgs) && M("invalid-value", "OSC requires at most 16 args.");
				for (let e of n.args) typeof e == "number" ? De(e, "OSC arg") : typeof e == "string" ? (e.includes("\0") || be.encode(e).length > A.maxStringBytes) && M("invalid-value", "OSC string is too large or contains NUL.") : typeof e != "boolean" && M("invalid-value", "OSC args must be numbers, strings or booleans.");
			}
		}
		return {
			id: t.id,
			kind: t.kind,
			supported: n,
			records: t.records.length
		};
	});
	return Me({
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
function Pe(e = ve, t) {
	let n = we(e, "mapping");
	Te(n, [
		"offset",
		"rate",
		"loop"
	], "mapping"), (typeof n.offset != "number" || !Number.isFinite(n.offset) || Math.abs(n.offset) > 3600 || typeof n.rate != "number" || !Number.isFinite(n.rate) || Math.abs(n.rate) > 16 || typeof n.loop != "boolean") && M("invalid-time", "Mapping requires offset (-3600..3600), rate (-16..16), and loop."), n.loop && t && (t.durationUs || M("invalid-time", "Cannot loop an empty Feedback duration."), t.channels.some((e) => ye(e) && e.records.some((n) => n.t === t.durationUs && (e.kind === "osc" || e.kind === "pointer" && "event" in n && n.event !== null))) && M("invalid-time", "Looping Feedback cannot contain an event at its exact endpoint."));
}
function Fe(e, t, n) {
	je(e, A.maxRecordBytes);
	let r = we(e, "Clip binding");
	Te(r, [
		"assetId",
		"pointerChannelId",
		"space",
		"offset",
		"rate",
		"loop"
	], "Clip binding"), Ee(r.assetId, "binding.assetId"), Se.has(String(r.space)) || M("invalid-value", "Unknown Feedback coordinate space.");
	let i = t.find((e) => e.id === r.assetId);
	if ((!i || i.kind !== "feedback") && M("missing-asset", `Binding asset ${r.assetId} is not Feedback.`), Pe({
		offset: r.offset,
		rate: r.rate,
		loop: r.loop
	}, i.recording), r.pointerChannelId !== void 0) {
		Ee(r.pointerChannelId, "binding.pointerChannelId");
		let e = i.recording.channels.find((e) => e.id === r.pointerChannelId);
		e || M("missing-channel", `Pointer channel ${r.pointerChannelId} is missing.`), e.kind !== "pointer" && M("unsupported-channel", `Channel ${r.pointerChannelId} is not pointer input.`);
	}
	n === "isolated-replay" && M("unsupported-playback", "Feedback input in isolated replay requires P4.");
}
function Ie(e) {
	let t = 0, n = 0;
	for (let r of e) if (r.kind === "feedback") {
		++t > A.maxAssets && M("size-limit", "Project exceeds 64 Feedback assets."), Ee(r.id, "Feedback asset ID"), Ee(r.name, "Feedback asset name"), (typeof r.detail != "string" || be.encode(r.detail).length > A.maxStringBytes) && M("invalid-value", "Feedback detail must be at most 1024 UTF-8 bytes.");
		try {
			n += Ne(r.recording).summary.bytes;
		} catch (e) {
			throw e instanceof j ? new j(e.code, `Asset ${r.name}: ${e.message}`, {
				assetId: r.id,
				channelId: e.channelId
			}) : e;
		}
		n > A.maxProjectBytes && M("size-limit", "Project Feedback exceeds 64 MiB.");
	}
	let r = (t) => {
		t.feedback !== void 0 && Fe(t.feedback, e, t.p5Playback);
	};
	for (let t of e) if (t.kind === "html-clip" && r(t.htmlTemplate), t.kind === "composition") {
		for (let e of t.composition.layers) if (e && Array.isArray(e.clips)) for (let t of e.clips) t?.kind === "html" && r(t);
	}
}
//#endregion
//#region src/core/feedbackSampling.ts
function Le(e) {
	let t = Math.round(e * 1e6);
	if (!Number.isFinite(e) || !Number.isSafeInteger(t)) throw new j("invalid-time", "Time must be finite seconds within the safe microsecond range.");
	return t;
}
function Re(e, t, n = ve) {
	if (Pe(n), !Number.isFinite(e)) throw new j("invalid-time", "Clip-local time must be finite seconds.");
	if (!Number.isSafeInteger(t) || t < 0 || t > A.maxDurationUs) throw new j("invalid-time", "Invalid Feedback duration.");
	let r = Le(e * n.rate + n.offset);
	if (n.loop) {
		if (!t) throw new j("invalid-time", "Cannot loop an empty Feedback duration.");
		return (r % t + t) % t;
	}
	return Math.min(t, Math.max(0, r));
}
function ze(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = Math.floor((n + r) / 2);
		e[i].t <= t ? n = i + 1 : r = i;
	}
	return n;
}
function Be(e) {
	let t = Ne(e), n = t.document, r = n.channels.some((e) => ye(e) && e.records.some((t) => t.t === n.durationUs && (e.kind === "osc" || e.kind === "pointer" && "event" in t && t.event !== null))), i = new Map(n.channels.map((e) => [e.id, e])), a = (e) => {
		let t = i.get(e);
		if (!t) throw new j("missing-channel", `Channel ${e} is missing.`, { channelId: e });
		if (!ye(t)) throw new j("unsupported-channel", `Channel ${e} (${t.kind}) cannot be read.`, { channelId: e });
		return t;
	}, o = (e, t) => {
		let r = e.space ?? "composition";
		if (r === "composition") return [1, 1];
		if (r === "normalized") return [1 / n.source.width, 1 / n.source.height];
		if (r !== "clip" || !t || ![t.clipWidth, t.clipHeight].every((e) => Number.isFinite(e) && e > 0 && e <= A.maxValue)) throw new j("invalid-value", "Clip space requires positive logical Clip dimensions.");
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
		if (i.kind !== "pointer" && n.space !== void 0) throw new j("invalid-value", "Only pointer channels accept a coordinate space.");
		let o = ze(i.records, t) - 1;
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
			if (Pe(e), e.loop && (!n.durationUs || r)) throw new j("invalid-time", "Cannot loop empty Feedback or an endpoint event.");
		},
		at(e, t, r = {}, i) {
			return c(e, Math.min(n.durationUs, Math.max(0, Le(t))), r, i);
		},
		sample(e, t, i = ve, a = {}, o) {
			if (Pe(i), i.loop && r) throw new j("invalid-time", "Looping Feedback cannot contain an event at its exact endpoint.");
			return c(e, Re(t, n.durationUs, i), a, o);
		},
		events(e, t, n, r = {}, i) {
			if (t > n) throw new j("invalid-time", "Event range must be ascending.");
			let c = Le(t), l = Le(n), u = a(e);
			if (u.kind !== "pointer" && r.space !== void 0) throw new j("invalid-value", "Only pointer channels accept a coordinate space.");
			u.kind === "pointer" && o(r, i);
			let d = [];
			if (u.kind === "number") return d;
			let f = ze(u.records, c), p = ze(u.records, l);
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
				if (d.length > A.maxEventsPerTick) throw new j("event-budget", `Channel ${e} exceeds the event limit; request a smaller interval.`, { channelId: e });
			}
			return d;
		}
	};
}
//#endregion
//#region src/core/feedbackDelivery.ts
function Ve(e, t) {
	if (!Number.isSafeInteger(e) || e < 1) throw new j("invalid-time", `Invalid ${t}.`);
	return e;
}
function He(e) {
	if (!e || Object.getPrototypeOf(e) !== Object.prototype) throw new j("invalid-format", "Invalid input delivery context.");
	if (Object.getOwnPropertySymbols(e).length) throw new j("invalid-format", "Invalid input delivery symbol field.");
	let t = [
		"transportEpoch",
		"deliveryId",
		"mode",
		"previousLocalTime"
	];
	for (let [n, r] of Object.entries(Object.getOwnPropertyDescriptors(e))) if (!t.includes(n) || !r.enumerable || !("value" in r)) throw new j("invalid-format", "Invalid input delivery field.");
	if (Ve(e.transportEpoch, "transport epoch"), Ve(e.deliveryId, "delivery ID"), e.mode === "historical") throw new j("unsupported-playback", "Historical input delivery requires P4.");
	if (!["sample-only", "continuous"].includes(e.mode)) throw new j("invalid-value", "Invalid input delivery mode.");
	if (e.previousLocalTime !== void 0 && Le(e.previousLocalTime), e.mode === "continuous" && e.previousLocalTime === void 0) throw new j("invalid-time", "Continuous input requires a previous local time.");
}
function Ue() {
	let e = 1, t = 0, n, r, i, a = () => {
		e = Ve(e + 1, "transport epoch"), t = 0, n = void 0, r = void 0, i = void 0;
	};
	return {
		reset: a,
		visit(o, s = {}, c) {
			Le(o);
			let l = s.inputDelivery ?? "sample-only";
			if (!["sample-only", "playback"].includes(l)) throw new j("invalid-value", "Invalid host playback intent.");
			if (c && a(), i && o === n && l === r) return i;
			let u = !c && l === "playback" && r === "sample-only" && n !== void 0 && o > n;
			n !== void 0 && !u && (l !== r || l !== "playback" || o < n) && a();
			let d = l === "playback" && (r === "playback" || u) && n !== void 0 && o > n, f = Object.freeze({
				transportEpoch: e,
				deliveryId: t = Ve(t + 1, "delivery ID"),
				mode: d ? "continuous" : "sample-only",
				...d ? { previousLocalTime: n } : {}
			});
			return n = o, r = l, i = f, f;
		}
	};
}
//#endregion
//#region src/core/composition.ts
var We = performance.now();
function Ge(e, t, n, r = {}, i = {}) {
	if (!Number.isFinite(t.frame) || t.frame < e.inFrame || t.frame >= e.outFrame) return i.feedback?.forClip(e, null), null;
	let a = t.frame - e.inFrame, o = typeof n == "number" ? n : n.bpm, s = Math.max(1, e.outFrame - e.inFrame), c = i.exportMode ? t.frame / t.fps : (performance.now() - We) / 1e3, l = Math.max(1, t.fps * 60 / Math.max(1, o)), u = l * 4, d = Math.floor(t.frame / u) + 1, f = Math.floor(t.frame % u / l) + 1, p = {
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
		params: de(e.params ?? {}, e.keyframeTracks, a),
		compositionParams: r,
		...i.exportMode ? {
			exportMode: !0,
			exportFrameId: i.exportFrameId
		} : {}
	}, m = i.feedback?.forClip(e, p);
	if (m) {
		if (He(m), !["playback", "sample-only"].includes(i.feedback.inputDelivery) || i.feedback.inputDelivery === "sample-only" && m.mode === "continuous") throw new j("invalid-value", "Inconsistent tick input intent.");
		p.feedbackDelivery = Object.freeze({ ...m }), p.feedbackInputIntent = i.feedback.inputDelivery;
	}
	return p;
}
function Ke(e, t) {
	let n = qe(e.size, t), r = [Math.max(1, n[0]), Math.max(1, n[1])];
	return {
		opacity: Je(e.opacity, 1, 0, 1),
		position: qe(e.position, [0, 0]),
		scale: qe(e.scale, [1, 1]),
		size: r,
		anchorPoint: qe(e.anchorPoint, [r[0] / 2, r[1] / 2]),
		rotation: Je(e.rotation, 0),
		blendMode: String(e.blendMode ?? "normal")
	};
}
function qe(e, t) {
	return Array.isArray(e) && e.length >= 2 ? [Je(e[0], t[0]), Je(e[1], t[1])] : t;
}
function Je(e, t, n = -Infinity, r = Infinity) {
	let i = Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, i)) : t;
}
//#endregion
//#region src/core/timeline.ts
function Ye(e, t, n, r = {}, i = {}) {
	return Ge(e, t, n, r, i);
}
function Xe(e, t, n, r) {
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
function Ze(e, t, n) {
	return Xe(e, t, n, "maskClipId");
}
function Qe(e, t, n) {
	return Xe(e, t, n, "instanceOfClipId");
}
//#endregion
//#region src/player/paramValues.ts
function $e(e, t) {
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
//#region src/core/canvasComposite.ts
var et = {
	normal: "source-over",
	add: "lighter",
	multiply: "multiply",
	screen: "screen",
	overlay: "overlay",
	lighten: "lighten",
	darken: "darken"
};
function tt(e, t, n, r, i, a) {
	let { position: o, scale: s, size: c, anchorPoint: l, opacity: u, rotation: d } = Ke(r, i), f = Math.PI / 180 * d, p = et[String(r.blendMode)] ?? "source-over";
	return e.save(), e.globalAlpha = u, e.globalCompositeOperation = a ?? p, e.translate(t.width / 2, t.height / 2), e.scale(t.width / n.width, t.height / n.height), e.translate(o[0], o[1]), e.scale(s[0], s[1]), e.rotate(f), e.translate(-l[0], -l[1]), c;
}
function nt(e, t, n, r) {
	let [i, a] = n, [o, s] = r, c = i / a, l = o / s, u = c > l ? a * l : i, d = c > l ? a : i / l, f = (i - u) / 2, p = (a - d) / 2;
	e.drawImage(t, f, p, u, d, 0, 0, o, s);
}
//#endregion
//#region src/core/effectLayers.ts
function rt(e) {
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
var it = /* @__PURE__ */ new WeakMap();
function at(e) {
	if (typeof e != "string") {
		let t = it.get(e);
		if (t) return t;
		let n = e.pipeline ? { label: "Multipass" } : at(e.fragmentShader);
		return it.set(e, n), n;
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
var ot = {
	100: "attribute vec2 position; varying vec2 vUv; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,(1.-position.y)*.5); }",
	300: "#version 300 es\nin vec2 position; out vec2 vUv; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,(1.-position.y)*.5); }"
}, st = {
	100: "attribute vec2 position; varying vec2 vUv; uniform float mfRenderToTexture; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,.5+position.y*(mfRenderToTexture-.5)); }",
	300: "#version 300 es\nin vec2 position; out vec2 vUv; uniform float mfRenderToTexture; void main(){ gl_Position=vec4(position,0.,1.); vUv=vec2((position.x+1.)*.5,.5+position.y*(mfRenderToTexture-.5)); }"
}, ct = /^[A-Za-z_]\w*$/, lt = (e) => typeof e == "object" && !!e && !Array.isArray(e), ut = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function dt(e) {
	if (!lt(e)) throw Error("Shader source is required.");
	let t = ut(e, "fragmentShader");
	if (t === ut(e, "pipeline")) throw Error("Shader source requires exactly one of fragmentShader or pipeline.");
	if (t) {
		if (typeof e.fragmentShader != "string") throw Error("Shader fragment source is required.");
		return;
	}
	let n = e.pipeline;
	if (!lt(n) || n.version !== 1) throw Error("Unsupported shader pipeline version.");
	if (!Array.isArray(n.passes) || n.passes.length < 1 || n.passes.length > 8) throw Error("Shader pipeline requires 1-8 passes.");
	let r = /* @__PURE__ */ new Set();
	for (let e of n.passes) {
		if (!lt(e) || typeof e.id != "string" || !ct.test(e.id) || e.id.startsWith("gl_") || r.has(e.id)) throw Error("Shader pass IDs must be unique identifiers.");
		if (typeof e.name != "string" || !e.name.trim()) throw Error(`Shader pass ${e.id} requires a name.`);
		if (typeof e.fragmentShader != "string") throw Error(`Shader pass ${e.id} requires fragment source.`);
		if (!at(e).version) throw Error(`Shader pass ${e.id} uses an unsupported GLSL version.`);
		if (![
			1,
			.5,
			.25
		].includes(e.scale)) throw Error(`Shader pass ${e.id} has an unsupported scale.`);
		if (!lt(e.inputs) || !ut(e.inputs, "inputTexture")) throw Error(`Shader pass ${e.id} requires inputTexture binding.`);
		let t = Object.entries(e.inputs);
		if (t.length > 4) throw Error(`Shader pass ${e.id} exceeds 4 sampler inputs.`);
		for (let [n, i] of t) {
			if (!ct.test(n) || n.startsWith("gl_") || [
				"__proto__",
				"constructor",
				"prototype"
			].includes(n)) throw Error(`Invalid shader sampler: ${n}`);
			if (i !== "original" && (!lt(i) || Object.keys(i).length !== 1 || typeof i.passId != "string" || !r.has(i.passId))) throw Error(`Shader pass ${e.id} has a missing, forward, or cyclic input: ${n}`);
		}
		r.add(e.id);
	}
	if (n.passes[n.passes.length - 1].scale !== 1) throw Error("Final shader pass must use full resolution.");
}
function ft(e) {
	return e.pipeline ? e.pipeline.passes.map((e) => e.fragmentShader) : [e.fragmentShader];
}
//#endregion
//#region src/core/shaderTargetPlan.ts
function pt(e, t, n) {
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
var mt = /* @__PURE__ */ new Set([
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
]), ht = new Set("attribute const uniform varying break continue do for while if else in out inout float int void bool true false lowp mediump highp precision invariant discard return mat2 mat3 mat4 vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 sampler2D samplerCube struct".split(" ")), gt = new Set("layout centroid flat smooth switch case default uint uvec2 uvec3 uvec4 mat2x2 mat2x3 mat2x4 mat3x2 mat3x3 mat3x4 mat4x2 mat4x3 mat4x4 sampler3D sampler2DArray sampler2DShadow samplerCubeShadow sampler2DArrayShadow isampler2D isampler3D isamplerCube isampler2DArray usampler2D usampler3D usamplerCube usampler2DArray".split(" "));
function _t(e) {
	dt(e.source);
	let t = e.source.pipeline ? e.source.pipeline.passes.some((e) => at(e).version === 300) : at(e.source).version === 300, n = /* @__PURE__ */ new Set();
	if (e.source.pipeline) {
		n.add("originalResolution"), n.add("mfRenderToTexture");
		for (let t of e.source.pipeline.passes) {
			let e = Object.keys(t.inputs), r = new Set(e.map((e) => `${e}Resolution`));
			for (let i of e) {
				if (i !== "inputTexture" && (mt.has(i) || i === "originalResolution" || i === "mfRenderToTexture" || r.has(i)) || ht.has(i) || at(t).version === 300 && gt.has(i)) throw Error(`Reserved shader sampler: ${i}`);
				n.add(i), n.add(`${i}Resolution`);
			}
		}
	}
	for (let [r, i] of Object.entries(e.params)) {
		if (!/^[A-Za-z_]\w*$/.test(r) || r.startsWith("gl_") || mt.has(r) || n.has(r) || ht.has(r) || t && gt.has(r)) throw Error(`Reserved or invalid shader uniform: ${r}`);
		if (![
			"number",
			"boolean",
			"vec2",
			"vec3",
			"color"
		].includes(i.type)) throw Error(`Unsupported shader uniform type: ${r}`);
	}
}
function vt() {
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
		let a = at(e);
		if (!a.version) throw Error(`Shader version error: unsupported #version ${a.directive || "(empty)"}; use #version 100 or #version 300 es.`);
		let o = n.get(a.version), s = `${r ? "pipeline" : "single"}\0${e.fragmentShader}`, c = o?.get(s);
		if (c) return c.program;
		let l = [], u = t.createProgram();
		if (!u) throw Error("Unable to allocate shader program.");
		try {
			l.push(g(t.VERTEX_SHADER, (r ? st : ot)[a.version], a.label)), l.push(g(t.FRAGMENT_SHADER, e.fragmentShader, a.label));
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
			if (_t(u), c.width < 1 || c.height < 1 || c.width > o || c.height > o) throw Error("Shader input exceeds device texture limits.");
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
					plan: pt(m, c.width, c.height)
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
				throw new yt(u.id, w.id, w.name, at(w).version, e);
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
var yt = class extends Error {
	clipId;
	passId;
	passName;
	glslVersion;
	originalCause;
	constructor(e, t, n, r, i) {
		super(`${i instanceof Error ? i.message : String(i)} [Clip ${e}, pass ${t} (${n})]`), this.clipId = e, this.passId = t, this.passName = n, this.glslVersion = r, this.originalCause = i, this.name = "ShaderPassError";
	}
}, bt = class extends Error {
	layerId;
	clipId;
	constructor(e, t, n) {
		super(`Effect ${e}, Shader ${t}: ${n instanceof Error ? n.message : String(n)}`), this.layerId = e, this.clipId = t, this.name = "EffectRenderError";
	}
};
function xt(e = vt) {
	let t, n = /* @__PURE__ */ new Map();
	return {
		render(r, i, a, o, s, c, l = !1, u) {
			let d = rt(i.layers), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = (r, h) => {
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
						let r = Ye(n, a, i, o, { exportMode: l });
						if (!r) continue;
						y = n.id;
						for (let e of ft(n.source)) p.add(e);
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
					let t = new bt(h.id, y, e);
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
var St = /* @__PURE__ */ new WeakMap();
function Ct(e) {
	St.delete(e);
}
function wt(e, t) {
	let n = St.get(e);
	if (n?.frame === t) return n.snapshot;
	let r = Object.fromEntries(e.flatMap((e) => e.clips.map((e) => [e.id, de(e.params, e.keyframeTracks, t - e.inFrame)])));
	return St.set(e, {
		frame: t,
		snapshot: r
	}), r;
}
//#endregion
//#region src/core/frameParamBus.ts
function Tt(e, t, n) {
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
function Et() {
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
				return !!(t && Tt(t, e.key, e.value));
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
var Dt = [
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
], Ot = [
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
], kt = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", At = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", jt = {
	3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
	5: "class enum extends super const export import",
	6: "enum",
	strict: "implements interface let package private protected public static yield",
	strictBind: "eval arguments"
}, Mt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Nt = {
	5: Mt,
	"5module": Mt + " export import",
	6: Mt + " const class extends export import super"
}, Pt = /^in(stanceof)?$/, Ft = RegExp("[" + At + "]"), It = RegExp("[" + At + kt + "]");
function Lt(e, t) {
	for (var n = 65536, r = 0; r < t.length; r += 2) {
		if (n += t[r], n > e) return !1;
		if (n += t[r + 1], n >= e) return !0;
	}
	return !1;
}
function Rt(e, t) {
	return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Ft.test(String.fromCharCode(e)) : t !== !1 && Lt(e, Ot);
}
function zt(e, t) {
	return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && It.test(String.fromCharCode(e)) : t === !1 ? !1 : Lt(e, Ot) || Lt(e, Dt);
}
var N = function(e, t) {
	t === void 0 && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null;
};
function Bt(e, t) {
	return new N(e, {
		beforeExpr: !0,
		binop: t
	});
}
var Vt = { beforeExpr: !0 }, Ht = { startsExpr: !0 }, Ut = {};
function P(e, t) {
	return t === void 0 && (t = {}), t.keyword = e, Ut[e] = new N(e, t);
}
var F = {
	num: new N("num", Ht),
	regexp: new N("regexp", Ht),
	string: new N("string", Ht),
	name: new N("name", Ht),
	privateId: new N("privateId", Ht),
	eof: new N("eof"),
	bracketL: new N("[", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	bracketR: new N("]"),
	braceL: new N("{", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	braceR: new N("}"),
	parenL: new N("(", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	parenR: new N(")"),
	comma: new N(",", Vt),
	semi: new N(";", Vt),
	colon: new N(":", Vt),
	dot: new N("."),
	question: new N("?", Vt),
	questionDot: new N("?."),
	arrow: new N("=>", Vt),
	template: new N("template"),
	invalidTemplate: new N("invalidTemplate"),
	ellipsis: new N("...", Vt),
	backQuote: new N("`", Ht),
	dollarBraceL: new N("${", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	eq: new N("=", {
		beforeExpr: !0,
		isAssign: !0
	}),
	assign: new N("_=", {
		beforeExpr: !0,
		isAssign: !0
	}),
	incDec: new N("++/--", {
		prefix: !0,
		postfix: !0,
		startsExpr: !0
	}),
	prefix: new N("!/~", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	logicalOR: Bt("||", 1),
	logicalAND: Bt("&&", 2),
	bitwiseOR: Bt("|", 3),
	bitwiseXOR: Bt("^", 4),
	bitwiseAND: Bt("&", 5),
	equality: Bt("==/!=/===/!==", 6),
	relational: Bt("</>/<=/>=", 7),
	bitShift: Bt("<</>>/>>>", 8),
	plusMin: new N("+/-", {
		beforeExpr: !0,
		binop: 9,
		prefix: !0,
		startsExpr: !0
	}),
	modulo: Bt("%", 10),
	star: Bt("*", 10),
	slash: Bt("/", 10),
	starstar: new N("**", { beforeExpr: !0 }),
	coalesce: Bt("??", 1),
	_break: P("break"),
	_case: P("case", Vt),
	_catch: P("catch"),
	_continue: P("continue"),
	_debugger: P("debugger"),
	_default: P("default", Vt),
	_do: P("do", {
		isLoop: !0,
		beforeExpr: !0
	}),
	_else: P("else", Vt),
	_finally: P("finally"),
	_for: P("for", { isLoop: !0 }),
	_function: P("function", Ht),
	_if: P("if"),
	_return: P("return", Vt),
	_switch: P("switch"),
	_throw: P("throw", Vt),
	_try: P("try"),
	_var: P("var"),
	_const: P("const"),
	_while: P("while", { isLoop: !0 }),
	_with: P("with"),
	_new: P("new", {
		beforeExpr: !0,
		startsExpr: !0
	}),
	_this: P("this", Ht),
	_super: P("super", Ht),
	_class: P("class", Ht),
	_extends: P("extends", Vt),
	_export: P("export"),
	_import: P("import", Ht),
	_null: P("null", Ht),
	_true: P("true", Ht),
	_false: P("false", Ht),
	_in: P("in", {
		beforeExpr: !0,
		binop: 7
	}),
	_instanceof: P("instanceof", {
		beforeExpr: !0,
		binop: 7
	}),
	_typeof: P("typeof", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	_void: P("void", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	}),
	_delete: P("delete", {
		beforeExpr: !0,
		prefix: !0,
		startsExpr: !0
	})
}, Wt = /\r\n?|\n|\u2028|\u2029/, Gt = new RegExp(Wt.source, "g");
function Kt(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function qt(e, t, n) {
	n === void 0 && (n = e.length);
	for (var r = t; r < n; r++) {
		var i = e.charCodeAt(r);
		if (Kt(i)) return r < n - 1 && i === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
	}
	return -1;
}
var Jt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Yt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Xt = Object.prototype, Zt = Xt.hasOwnProperty, Qt = Xt.toString, $t = Object.hasOwn || (function(e, t) {
	return Zt.call(e, t);
}), en = Array.isArray || (function(e) {
	return Qt.call(e) === "[object Array]";
}), tn = Object.create(null);
function nn(e) {
	return tn[e] || (tn[e] = RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function rn(e) {
	return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var an = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, on = function(e, t) {
	this.line = e, this.column = t;
};
on.prototype.offset = function(e) {
	return new on(this.line, this.column + e);
};
var sn = function(e, t, n) {
	this.start = t, this.end = n, e.sourceFile !== null && (this.source = e.sourceFile);
};
function cn(e, t) {
	for (var n = 1, r = 0;;) {
		var i = qt(e, r, t);
		if (i < 0) return new on(n, t - r);
		++n, r = i;
	}
}
var ln = {
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
}, un = !1;
function dn(e) {
	var t = {};
	for (var n in ln) t[n] = e && $t(e, n) ? e[n] : ln[n];
	if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!un && typeof console == "object" && console.warn && (un = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved ??= t.ecmaVersion < 5, (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), en(t.onToken)) {
		var r = t.onToken;
		t.onToken = function(e) {
			return r.push(e);
		};
	}
	if (en(t.onComment) && (t.onComment = fn(t, t.onComment)), t.sourceType === "commonjs" && t.allowAwaitOutsideFunction) throw Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
	return t;
}
function fn(e, t) {
	return function(n, r, i, a, o, s) {
		var c = {
			type: n ? "Block" : "Line",
			value: r,
			start: i,
			end: a
		};
		e.locations && (c.loc = new sn(this, o, s)), e.ranges && (c.range = [i, a]), t.push(c);
	};
}
var pn = 1, mn = 2, hn = 4, gn = 8, _n = 16, vn = 32, yn = 64, bn = 128, xn = 256, Sn = 512, Cn = 1024, wn = pn | mn | xn;
function Tn(e, t) {
	return mn | (e ? hn : 0) | (t ? gn : 0);
}
var En = 0, Dn = 1, On = 2, kn = 3, An = 4, jn = 5, I = function(e, t, n) {
	this.options = e = dn(e), this.sourceFile = e.sourceFile, this.keywords = nn(Nt[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
	var r = "";
	e.allowReserved !== !0 && (r = jt[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (r += " await")), this.reservedWords = nn(r);
	var i = (r ? r + " " : "") + jt.strict;
	this.reservedWordsStrict = nn(i), this.reservedWordsStrictBind = nn(i + " " + jt.strictBind), this.input = String(t), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf("\n", n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Wt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = F.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(this.options.sourceType === "commonjs" ? mn : pn), this.regexpState = null, this.privateNameStack = [];
}, Mn = {
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
I.prototype.parse = function() {
	var e = this.options.program || this.startNode();
	return this.nextToken(), this.parseTopLevel(e);
}, Mn.inFunction.get = function() {
	return (this.currentVarScope().flags & mn) > 0;
}, Mn.inGenerator.get = function() {
	return (this.currentVarScope().flags & gn) > 0;
}, Mn.inAsync.get = function() {
	return (this.currentVarScope().flags & hn) > 0;
}, Mn.canAwait.get = function() {
	for (var e = this.scopeStack.length - 1; e >= 0; e--) {
		var t = this.scopeStack[e].flags;
		if (t & (xn | Sn)) return !1;
		if (t & mn) return (t & hn) > 0;
	}
	return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
}, Mn.allowReturn.get = function() {
	return !!(this.inFunction || this.options.allowReturnOutsideFunction && this.currentVarScope().flags & pn);
}, Mn.allowSuper.get = function() {
	return (this.currentThisScope().flags & yn) > 0 || this.options.allowSuperOutsideMethod;
}, Mn.allowDirectSuper.get = function() {
	return (this.currentThisScope().flags & bn) > 0;
}, Mn.treatFunctionsAsVar.get = function() {
	return this.treatFunctionsAsVarInScope(this.currentScope());
}, Mn.allowNewDotTarget.get = function() {
	for (var e = this.scopeStack.length - 1; e >= 0; e--) {
		var t = this.scopeStack[e].flags;
		if (t & (xn | Sn) || t & mn && !(t & _n)) return !0;
	}
	return !1;
}, Mn.allowUsing.get = function() {
	var e = this.currentScope().flags;
	return !(e & Cn || !this.inModule && e & pn);
}, Mn.inClassStaticBlock.get = function() {
	return (this.currentVarScope().flags & xn) > 0;
}, I.extend = function() {
	for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
	for (var n = this, r = 0; r < e.length; r++) n = e[r](n);
	return n;
}, I.parse = function(e, t) {
	return new this(t, e).parse();
}, I.parseExpressionAt = function(e, t, n) {
	var r = new this(n, e, t);
	return r.nextToken(), r.parseExpression();
}, I.tokenizer = function(e, t) {
	return new this(t, e);
}, Object.defineProperties(I.prototype, Mn);
var Nn = I.prototype, Pn = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Nn.strictDirective = function(e) {
	if (this.options.ecmaVersion < 5) return !1;
	for (;;) {
		Yt.lastIndex = e, e += Yt.exec(this.input)[0].length;
		var t = Pn.exec(this.input.slice(e));
		if (!t) return !1;
		if ((t[1] || t[2]) === "use strict") {
			Yt.lastIndex = e + t[0].length;
			var n = Yt.exec(this.input), r = n.index + n[0].length, i = this.input.charAt(r);
			return i === ";" || i === "}" || Wt.test(n[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || i === "!" && this.input.charAt(r + 1) === "=");
		}
		e += t[0].length, Yt.lastIndex = e, e += Yt.exec(this.input)[0].length, this.input[e] === ";" && e++;
	}
}, Nn.eat = function(e) {
	return this.type === e && (this.next(), !0);
}, Nn.isContextual = function(e) {
	return this.type === F.name && this.value === e && !this.containsEsc;
}, Nn.eatContextual = function(e) {
	return this.isContextual(e) ? (this.next(), !0) : !1;
}, Nn.expectContextual = function(e) {
	this.eatContextual(e) || this.unexpected();
}, Nn.canInsertSemicolon = function() {
	return this.type === F.eof || this.type === F.braceR || Wt.test(this.input.slice(this.lastTokEnd, this.start));
}, Nn.insertSemicolon = function() {
	if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
}, Nn.semicolon = function() {
	!this.eat(F.semi) && !this.insertSemicolon() && this.unexpected();
}, Nn.afterTrailingComma = function(e, t) {
	if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
}, Nn.expect = function(e) {
	this.eat(e) || this.unexpected();
}, Nn.unexpected = function(e) {
	this.raise(e ?? this.start, "Unexpected token");
};
var Fn = function() {
	this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
Nn.checkPatternErrors = function(e, t) {
	if (e) {
		e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
		var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
		n > -1 && this.raiseRecoverable(n, t ? "Assigning to rvalue" : "Parenthesized pattern");
	}
}, Nn.checkExpressionErrors = function(e, t) {
	if (!e) return !1;
	var n = e.shorthandAssign, r = e.doubleProto;
	if (!t) return n >= 0 || r >= 0;
	n >= 0 && this.raise(n, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
}, Nn.checkYieldAwaitInDefaultParams = function() {
	this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
}, Nn.isSimpleAssignTarget = function(e) {
	return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var L = I.prototype;
L.parseTopLevel = function(e) {
	var t = Object.create(null);
	for (e.body ||= []; this.type !== F.eof;) {
		var n = this.parseStatement(null, !0, t);
		e.body.push(n);
	}
	if (this.inModule) for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
		var a = i[r];
		this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
	}
	return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType, this.finishNode(e, "Program");
};
var In = { kind: "loop" }, Ln = { kind: "switch" };
L.isLet = function(e) {
	if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
	Yt.lastIndex = this.pos;
	var t = Yt.exec(this.input), n = this.pos + t[0].length, r = this.fullCharCodeAt(n);
	if (r === 91 || r === 92) return !0;
	if (e) return !1;
	if (r === 123) return !0;
	if (Rt(r)) {
		var i = n;
		do
			n += r <= 65535 ? 1 : 2;
		while (zt(r = this.fullCharCodeAt(n)));
		if (r === 92) return !0;
		var a = this.input.slice(i, n);
		if (!Pt.test(a)) return !0;
	}
	return !1;
}, L.isAsyncFunction = function() {
	if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
	Yt.lastIndex = this.pos;
	var e = Yt.exec(this.input), t = this.pos + e[0].length, n;
	return !Wt.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(zt(n = this.fullCharCodeAt(t + 8)) || n === 92));
}, L.isUsingKeyword = function(e, t) {
	if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using")) return !1;
	Yt.lastIndex = this.pos;
	var n = Yt.exec(this.input), r = this.pos + n[0].length;
	if (Wt.test(this.input.slice(this.pos, r))) return !1;
	if (e) {
		var i = r + 5, a;
		if (this.input.slice(r, i) !== "using" || i === this.input.length || zt(a = this.fullCharCodeAt(i)) || a === 92) return !1;
		Yt.lastIndex = i;
		var o = Yt.exec(this.input);
		if (r = i + o[0].length, o && Wt.test(this.input.slice(i, r))) return !1;
	}
	var s = this.fullCharCodeAt(r);
	if (!Rt(s) && s !== 92) return !1;
	var c = r;
	do
		r += s <= 65535 ? 1 : 2;
	while (zt(s = this.fullCharCodeAt(r)));
	if (s === 92) return !0;
	var l = this.input.slice(c, r);
	return !(Pt.test(l) || t && l === "of");
}, L.isAwaitUsing = function(e) {
	return this.isUsingKeyword(!0, e);
}, L.isUsing = function(e) {
	return this.isUsingKeyword(!1, e);
}, L.parseStatement = function(e, t, n) {
	var r = this.type, i = this.startNode(), a;
	switch (this.isLet(e) && (r = F._var, a = "let"), r) {
		case F._break:
		case F._continue: return this.parseBreakContinueStatement(i, r.keyword);
		case F._debugger: return this.parseDebuggerStatement(i);
		case F._do: return this.parseDoStatement(i);
		case F._for: return this.parseForStatement(i);
		case F._function: return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(i, !1, !e);
		case F._class: return e && this.unexpected(), this.parseClass(i, !0);
		case F._if: return this.parseIfStatement(i);
		case F._return: return this.parseReturnStatement(i);
		case F._switch: return this.parseSwitchStatement(i);
		case F._throw: return this.parseThrowStatement(i);
		case F._try: return this.parseTryStatement(i);
		case F._const:
		case F._var: return a ||= this.value, e && a !== "var" && this.unexpected(), this.parseVarStatement(i, a);
		case F._while: return this.parseWhileStatement(i);
		case F._with: return this.parseWithStatement(i);
		case F.braceL: return this.parseBlock(!0, i);
		case F.semi: return this.parseEmptyStatement(i);
		case F._export:
		case F._import:
			if (this.options.ecmaVersion > 10 && r === F._import) {
				Yt.lastIndex = this.pos;
				var o = Yt.exec(this.input), s = this.pos + o[0].length, c = this.input.charCodeAt(s);
				if (c === 40 || c === 46) return this.parseExpressionStatement(i, this.parseExpression());
			}
			return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === F._import ? this.parseImport(i) : this.parseExport(i, n);
		default:
			if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
			var l = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
			if (l) return this.allowUsing || this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement"), l === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(i, !1, l), this.semicolon(), this.finishNode(i, "VariableDeclaration");
			var u = this.value, d = this.parseExpression();
			return r === F.name && d.type === "Identifier" && this.eat(F.colon) ? this.parseLabeledStatement(i, u, d, e) : this.parseExpressionStatement(i, d);
	}
}, L.parseBreakContinueStatement = function(e, t) {
	var n = t === "break";
	this.next(), this.eat(F.semi) || this.insertSemicolon() ? e.label = null : this.type === F.name ? (e.label = this.parseIdent(), this.semicolon()) : this.unexpected();
	for (var r = 0; r < this.labels.length; ++r) {
		var i = this.labels[r];
		if ((e.label == null || i.name === e.label.name) && (i.kind != null && (n || i.kind === "loop") || e.label && n)) break;
	}
	return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, n ? "BreakStatement" : "ContinueStatement");
}, L.parseDebuggerStatement = function(e) {
	return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
}, L.parseDoStatement = function(e) {
	return this.next(), this.labels.push(In), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(F._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(F.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
}, L.parseForStatement = function(e) {
	this.next();
	var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
	if (this.labels.push(In), this.enterScope(0), this.expect(F.parenL), this.type === F.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
	var n = this.isLet();
	if (this.type === F._var || this.type === F._const || n) {
		var r = this.startNode(), i = n ? "let" : this.value;
		return this.next(), this.parseVar(r, !0, i), this.finishNode(r, "VariableDeclaration"), this.parseForAfterInit(e, r, t);
	}
	var a = this.isContextual("let"), o = !1, s = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
	if (s) {
		var c = this.startNode();
		return this.next(), s === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.parseVar(c, !0, s), this.finishNode(c, "VariableDeclaration"), this.parseForAfterInit(e, c, t);
	}
	var l = this.containsEsc, u = new Fn(), d = this.start, f = t > -1 ? this.parseExprSubscripts(u, "await") : this.parseExpression(!0, u);
	return this.type === F._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === F._in && this.unexpected(t), e.await = !0) : o && this.options.ecmaVersion >= 8 && (f.start === d && !l && f.type === "Identifier" && f.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), a && o && this.raise(f.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(f, !1, u), this.checkLValPattern(f), this.parseForIn(e, f)) : (this.checkExpressionErrors(u, !0), t > -1 && this.unexpected(t), this.parseFor(e, f));
}, L.parseForAfterInit = function(e, t, n) {
	return (this.type === F._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === F._in ? n > -1 && this.unexpected(n) : e.await = n > -1), this.parseForIn(e, t)) : (n > -1 && this.unexpected(n), this.parseFor(e, t));
}, L.parseFunctionStatement = function(e, t, n) {
	return this.next(), this.parseFunction(e, zn | (n ? 0 : Bn), !1, t);
}, L.parseIfStatement = function(e) {
	return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(F._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
}, L.parseReturnStatement = function(e) {
	return this.allowReturn || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(F.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
}, L.parseSwitchStatement = function(e) {
	this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(F.braceL), this.labels.push(Ln), this.enterScope(Cn);
	for (var t, n = !1; this.type !== F.braceR;) if (this.type === F._case || this.type === F._default) {
		var r = this.type === F._case;
		t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (n && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), n = !0, t.test = null), this.expect(F.colon);
	} else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
	return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
}, L.parseThrowStatement = function(e) {
	return this.next(), Wt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Rn = [];
L.parseCatchClauseParam = function() {
	var e = this.parseBindingAtom(), t = e.type === "Identifier";
	return this.enterScope(t ? vn : 0), this.checkLValPattern(e, t ? An : On), this.expect(F.parenR), e;
}, L.parseTryStatement = function(e) {
	if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === F._catch) {
		var t = this.startNode();
		this.next(), this.eat(F.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
	}
	return e.finalizer = this.eat(F._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
}, L.parseVarStatement = function(e, t, n) {
	return this.next(), this.parseVar(e, !1, t, n), this.semicolon(), this.finishNode(e, "VariableDeclaration");
}, L.parseWhileStatement = function(e) {
	return this.next(), e.test = this.parseParenExpression(), this.labels.push(In), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
}, L.parseWithStatement = function(e) {
	return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
}, L.parseEmptyStatement = function(e) {
	return this.next(), this.finishNode(e, "EmptyStatement");
}, L.parseLabeledStatement = function(e, t, n, r) {
	for (var i = 0, a = this.labels; i < a.length; i += 1) a[i].name === t && this.raise(n.start, "Label '" + t + "' is already declared");
	for (var o = this.type.isLoop ? "loop" : this.type === F._switch ? "switch" : null, s = this.labels.length - 1; s >= 0; s--) {
		var c = this.labels[s];
		if (c.statementStart === e.start) c.statementStart = this.start, c.kind = o;
		else break;
	}
	return this.labels.push({
		name: t,
		kind: o,
		statementStart: this.start
	}), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = n, this.finishNode(e, "LabeledStatement");
}, L.parseExpressionStatement = function(e, t) {
	return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
}, L.parseBlock = function(e, t, n) {
	for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(F.braceL), e && this.enterScope(0); this.type !== F.braceR;) {
		var r = this.parseStatement(null);
		t.body.push(r);
	}
	return n && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
}, L.parseFor = function(e, t) {
	return e.init = t, this.expect(F.semi), e.test = this.type === F.semi ? null : this.parseExpression(), this.expect(F.semi), e.update = this.type === F.parenR ? null : this.parseExpression(), this.expect(F.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
}, L.parseForIn = function(e, t) {
	var n = this.type === F._in;
	return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!n || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = n ? this.parseExpression() : this.parseMaybeAssign(), this.expect(F.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, n ? "ForInStatement" : "ForOfStatement");
}, L.parseVar = function(e, t, n, r) {
	for (e.declarations = [], e.kind = n;;) {
		var i = this.startNode();
		if (this.parseVarId(i, n), this.eat(F.eq) ? i.init = this.parseMaybeAssign(t) : !r && n === "const" && !(this.type === F._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && (n === "using" || n === "await using") && this.options.ecmaVersion >= 17 && this.type !== F._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + n + " declaration") : !r && i.id.type !== "Identifier" && !(t && (this.type === F._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(F.comma)) break;
	}
	return e;
}, L.parseVarId = function(e, t) {
	e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Dn : On, !1);
};
var zn = 1, Bn = 2, Vn = 4;
L.parseFunction = function(e, t, n, r, i) {
	this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === F.star && t & Bn && this.unexpected(), e.generator = this.eat(F.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & zn && (e.id = t & Vn && this.type !== F.name ? null : this.parseIdent(), e.id && !(t & Bn) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Dn : On : kn));
	var a = this.yieldPos, o = this.awaitPos, s = this.awaitIdentPos;
	return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Tn(e.async, e.generator)), t & zn || (e.id = this.type === F.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, n, !1, i), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = s, this.finishNode(e, t & zn ? "FunctionDeclaration" : "FunctionExpression");
}, L.parseFunctionParams = function(e) {
	this.expect(F.parenL), e.params = this.parseBindingList(F.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
}, L.parseClass = function(e, t) {
	this.next();
	var n = this.strict;
	this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
	var r = this.enterClassBody(), i = this.startNode(), a = !1;
	for (i.body = [], this.expect(F.braceL); this.type !== F.braceR;) {
		var o = this.parseClassElement(e.superClass !== null);
		o && (i.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (a && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), a = !0) : o.key && o.key.type === "PrivateIdentifier" && Hn(r, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
	}
	return this.strict = n, this.next(), e.body = this.finishNode(i, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
}, L.parseClassElement = function(e) {
	if (this.eat(F.semi)) return null;
	var t = this.options.ecmaVersion, n = this.startNode(), r = "", i = !1, a = !1, o = "method", s = !1;
	if (this.eatContextual("static")) {
		if (t >= 13 && this.eat(F.braceL)) return this.parseClassStaticBlock(n), n;
		this.isClassElementNameStart() || this.type === F.star ? s = !0 : r = "static";
	}
	if (n.static = s, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === F.star) && !this.canInsertSemicolon() ? a = !0 : r = "async"), !r && (t >= 9 || !a) && this.eat(F.star) && (i = !0), !r && !a && !i) {
		var c = this.value;
		(this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = c : r = c);
	}
	if (r ? (n.computed = !1, n.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), n.key.name = r, this.finishNode(n.key, "Identifier")) : this.parseClassElementName(n), t < 13 || this.type === F.parenL || o !== "method" || i || a) {
		var l = !n.static && Un(n, "constructor"), u = l && e;
		l && o !== "method" && this.raise(n.key.start, "Constructor can't have get/set modifier"), n.kind = l ? "constructor" : o, this.parseClassMethod(n, i, a, u);
	} else this.parseClassField(n);
	return n;
}, L.isClassElementNameStart = function() {
	return this.type === F.name || this.type === F.privateId || this.type === F.num || this.type === F.string || this.type === F.bracketL || this.type.keyword;
}, L.parseClassElementName = function(e) {
	this.type === F.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
}, L.parseClassMethod = function(e, t, n, r) {
	var i = e.key;
	e.kind === "constructor" ? (t && this.raise(i.start, "Constructor can't be a generator"), n && this.raise(i.start, "Constructor can't be an async method")) : e.static && Un(e, "prototype") && this.raise(i.start, "Classes may not have a static property named prototype");
	var a = e.value = this.parseMethod(t, n, r);
	return e.kind === "get" && a.params.length !== 0 && this.raiseRecoverable(a.start, "getter should have no params"), e.kind === "set" && a.params.length !== 1 && this.raiseRecoverable(a.start, "setter should have exactly one param"), e.kind === "set" && a.params[0].type === "RestElement" && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
}, L.parseClassField = function(e) {
	return Un(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Un(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(F.eq) ? (this.enterScope(Sn | yn), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
}, L.parseClassStaticBlock = function(e) {
	e.body = [];
	var t = this.labels;
	for (this.labels = [], this.enterScope(xn | yn); this.type !== F.braceR;) {
		var n = this.parseStatement(null);
		e.body.push(n);
	}
	return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
}, L.parseClassId = function(e, t) {
	this.type === F.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, On, !1)) : (t === !0 && this.unexpected(), e.id = null);
}, L.parseClassSuper = function(e) {
	e.superClass = this.eat(F._extends) ? this.parseExprSubscripts(null, !1) : null;
}, L.enterClassBody = function() {
	var e = {
		declared: Object.create(null),
		used: []
	};
	return this.privateNameStack.push(e), e.declared;
}, L.exitClassBody = function() {
	var e = this.privateNameStack.pop(), t = e.declared, n = e.used;
	if (this.options.checkPrivateFields) for (var r = this.privateNameStack.length, i = r === 0 ? null : this.privateNameStack[r - 1], a = 0; a < n.length; ++a) {
		var o = n[a];
		$t(t, o.name) || (i ? i.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
	}
};
function Hn(e, t) {
	var n = t.key.name, r = e[n], i = "true";
	return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (i = (t.static ? "s" : "i") + t.kind), r === "iget" && i === "iset" || r === "iset" && i === "iget" || r === "sget" && i === "sset" || r === "sset" && i === "sget" ? (e[n] = "true", !1) : r ? !0 : (e[n] = i, !1);
}
function Un(e, t) {
	var n = e.computed, r = e.key;
	return !n && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
L.parseExportAllDeclaration = function(e, t) {
	return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== F.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
}, L.parseExport = function(e, t) {
	if (this.next(), this.eat(F.star)) return this.parseExportAllDeclaration(e, t);
	if (this.eat(F._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
	if (this.shouldParseExportStatement()) e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
	else {
		if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== F.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
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
}, L.parseExportDeclaration = function(e) {
	return this.parseStatement(null);
}, L.parseExportDefaultDeclaration = function() {
	var e;
	if (this.type === F._function || (e = this.isAsyncFunction())) {
		var t = this.startNode();
		return this.next(), e && this.next(), this.parseFunction(t, zn | Vn, !1, e);
	}
	if (this.type === F._class) {
		var n = this.startNode();
		return this.parseClass(n, "nullableID");
	}
	var r = this.parseMaybeAssign();
	return this.semicolon(), r;
}, L.checkExport = function(e, t, n) {
	e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), $t(e, t) && this.raiseRecoverable(n, "Duplicate export '" + t + "'"), e[t] = !0);
}, L.checkPatternExport = function(e, t) {
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
}, L.checkVariableExport = function(e, t) {
	if (e) for (var n = 0, r = t; n < r.length; n += 1) {
		var i = r[n];
		this.checkPatternExport(e, i.id);
	}
}, L.shouldParseExportStatement = function() {
	return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
}, L.parseExportSpecifier = function(e) {
	var t = this.startNode();
	return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
}, L.parseExportSpecifiers = function(e) {
	var t = [], n = !0;
	for (this.expect(F.braceL); !this.eat(F.braceR);) {
		if (n) n = !1;
		else if (this.expect(F.comma), this.afterTrailingComma(F.braceR)) break;
		t.push(this.parseExportSpecifier(e));
	}
	return t;
}, L.parseImport = function(e) {
	return this.next(), this.type === F.string ? (e.specifiers = Rn, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === F.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
}, L.parseImportSpecifier = function() {
	var e = this.startNode();
	return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, On), this.finishNode(e, "ImportSpecifier");
}, L.parseImportDefaultSpecifier = function() {
	var e = this.startNode();
	return e.local = this.parseIdent(), this.checkLValSimple(e.local, On), this.finishNode(e, "ImportDefaultSpecifier");
}, L.parseImportNamespaceSpecifier = function() {
	var e = this.startNode();
	return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, On), this.finishNode(e, "ImportNamespaceSpecifier");
}, L.parseImportSpecifiers = function() {
	var e = [], t = !0;
	if (this.type === F.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(F.comma))) return e;
	if (this.type === F.star) return e.push(this.parseImportNamespaceSpecifier()), e;
	for (this.expect(F.braceL); !this.eat(F.braceR);) {
		if (t) t = !1;
		else if (this.expect(F.comma), this.afterTrailingComma(F.braceR)) break;
		e.push(this.parseImportSpecifier());
	}
	return e;
}, L.parseWithClause = function() {
	var e = [];
	if (!this.eat(F._with)) return e;
	this.expect(F.braceL);
	for (var t = {}, n = !0; !this.eat(F.braceR);) {
		if (n) n = !1;
		else if (this.expect(F.comma), this.afterTrailingComma(F.braceR)) break;
		var r = this.parseImportAttribute(), i = r.key.type === "Identifier" ? r.key.name : r.key.value;
		$t(t, i) && this.raiseRecoverable(r.key.start, "Duplicate attribute key '" + i + "'"), t[i] = !0, e.push(r);
	}
	return e;
}, L.parseImportAttribute = function() {
	var e = this.startNode();
	return e.key = this.type === F.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(F.colon), this.type !== F.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
}, L.parseModuleExportName = function() {
	if (this.options.ecmaVersion >= 13 && this.type === F.string) {
		var e = this.parseLiteral(this.value);
		return an.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
	}
	return this.parseIdent(!0);
}, L.adaptDirectivePrologue = function(e) {
	for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
}, L.isDirectiveCandidate = function(e) {
	return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === "\"" || this.input[e.start] === "'");
};
var Wn = I.prototype;
Wn.toAssignable = function(e, t, n) {
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
}, Wn.toAssignableList = function(e, t) {
	for (var n = e.length, r = 0; r < n; r++) {
		var i = e[r];
		i && this.toAssignable(i, t);
	}
	if (n) {
		var a = e[n - 1];
		this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
	}
	return e;
}, Wn.parseSpread = function(e) {
	var t = this.startNode();
	return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
}, Wn.parseRestBinding = function() {
	var e = this.startNode();
	return this.next(), this.options.ecmaVersion === 6 && this.type !== F.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
}, Wn.parseBindingAtom = function() {
	if (this.options.ecmaVersion >= 6) switch (this.type) {
		case F.bracketL:
			var e = this.startNode();
			return this.next(), e.elements = this.parseBindingList(F.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
		case F.braceL: return this.parseObj(!0);
	}
	return this.parseIdent();
}, Wn.parseBindingList = function(e, t, n, r) {
	for (var i = [], a = !0; !this.eat(e);) if (a ? a = !1 : this.expect(F.comma), t && this.type === F.comma) i.push(null);
	else if (n && this.afterTrailingComma(e)) break;
	else if (this.type === F.ellipsis) {
		var o = this.parseRestBinding();
		this.parseBindingListItem(o), i.push(o), this.type === F.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
		break;
	} else i.push(this.parseAssignableListItem(r));
	return i;
}, Wn.parseAssignableListItem = function(e) {
	var t = this.parseMaybeDefault(this.start, this.startLoc);
	return this.parseBindingListItem(t), t;
}, Wn.parseBindingListItem = function(e) {
	return e;
}, Wn.parseMaybeDefault = function(e, t, n) {
	if (n ||= this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(F.eq)) return n;
	var r = this.startNodeAt(e, t);
	return r.left = n, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
}, Wn.checkLValSimple = function(e, t, n) {
	t === void 0 && (t = En);
	var r = t !== En;
	switch (e.type) {
		case "Identifier":
			this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === On && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), n && ($t(n, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), n[e.name] = !0), t !== jn && this.declareName(e.name, t, e.start));
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
}, Wn.checkLValPattern = function(e, t, n) {
	switch (t === void 0 && (t = En), e.type) {
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
}, Wn.checkLValInnerPattern = function(e, t, n) {
	switch (t === void 0 && (t = En), e.type) {
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
var Gn = function(e, t, n, r, i) {
	this.token = e, this.isExpr = !!t, this.preserveSpace = !!n, this.override = r, this.generator = !!i;
}, R = {
	b_stat: new Gn("{", !1),
	b_expr: new Gn("{", !0),
	b_tmpl: new Gn("${", !1),
	p_stat: new Gn("(", !1),
	p_expr: new Gn("(", !0),
	q_tmpl: new Gn("`", !0, !0, function(e) {
		return e.tryReadTemplateToken();
	}),
	f_stat: new Gn("function", !1),
	f_expr: new Gn("function", !0),
	f_expr_gen: new Gn("function", !0, !1, null, !0),
	f_gen: new Gn("function", !1, !1, null, !0)
}, Kn = I.prototype;
Kn.initialContext = function() {
	return [R.b_stat];
}, Kn.curContext = function() {
	return this.context[this.context.length - 1];
}, Kn.braceIsBlock = function(e) {
	var t = this.curContext();
	return t === R.f_expr || t === R.f_stat ? !0 : e === F.colon && (t === R.b_stat || t === R.b_expr) ? !t.isExpr : e === F._return || e === F.name && this.exprAllowed ? Wt.test(this.input.slice(this.lastTokEnd, this.start)) : e === F._else || e === F.semi || e === F.eof || e === F.parenR || e === F.arrow ? !0 : e === F.braceL ? t === R.b_stat : e === F._var || e === F._const || e === F.name ? !1 : !this.exprAllowed;
}, Kn.inGeneratorContext = function() {
	for (var e = this.context.length - 1; e >= 1; e--) {
		var t = this.context[e];
		if (t.token === "function") return t.generator;
	}
	return !1;
}, Kn.updateContext = function(e) {
	var t, n = this.type;
	n.keyword && e === F.dot ? this.exprAllowed = !1 : (t = n.updateContext) ? t.call(this, e) : this.exprAllowed = n.beforeExpr;
}, Kn.overrideContext = function(e) {
	this.curContext() !== e && (this.context[this.context.length - 1] = e);
}, F.parenR.updateContext = F.braceR.updateContext = function() {
	if (this.context.length === 1) {
		this.exprAllowed = !0;
		return;
	}
	var e = this.context.pop();
	e === R.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
}, F.braceL.updateContext = function(e) {
	this.context.push(this.braceIsBlock(e) ? R.b_stat : R.b_expr), this.exprAllowed = !0;
}, F.dollarBraceL.updateContext = function() {
	this.context.push(R.b_tmpl), this.exprAllowed = !0;
}, F.parenL.updateContext = function(e) {
	var t = e === F._if || e === F._for || e === F._with || e === F._while;
	this.context.push(t ? R.p_stat : R.p_expr), this.exprAllowed = !0;
}, F.incDec.updateContext = function() {}, F._function.updateContext = F._class.updateContext = function(e) {
	e.beforeExpr && e !== F._else && (e !== F.semi || this.curContext() === R.p_stat) && !(e === F._return && Wt.test(this.input.slice(this.lastTokEnd, this.start))) && (e !== F.colon && e !== F.braceL || this.curContext() !== R.b_stat) ? this.context.push(R.f_expr) : this.context.push(R.f_stat), this.exprAllowed = !1;
}, F.colon.updateContext = function() {
	this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
}, F.backQuote.updateContext = function() {
	this.curContext() === R.q_tmpl ? this.context.pop() : this.context.push(R.q_tmpl), this.exprAllowed = !1;
}, F.star.updateContext = function(e) {
	if (e === F._function) {
		var t = this.context.length - 1;
		this.context[t] === R.f_expr ? this.context[t] = R.f_expr_gen : this.context[t] = R.f_gen;
	}
	this.exprAllowed = !0;
}, F.name.updateContext = function(e) {
	var t = !1;
	this.options.ecmaVersion >= 6 && e !== F.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var z = I.prototype;
z.checkPropClash = function(e, t, n) {
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
}, z.parseExpression = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseMaybeAssign(e, t);
	if (this.type === F.comma) {
		var a = this.startNodeAt(n, r);
		for (a.expressions = [i]; this.eat(F.comma);) a.expressions.push(this.parseMaybeAssign(e, t));
		return this.finishNode(a, "SequenceExpression");
	}
	return i;
}, z.parseMaybeAssign = function(e, t, n) {
	if (this.isContextual("yield")) {
		if (this.inGenerator) return this.parseYield(e);
		this.exprAllowed = !1;
	}
	var r = !1, i = -1, a = -1, o = -1;
	t ? (i = t.parenthesizedAssign, a = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Fn(), r = !0);
	var s = this.start, c = this.startLoc;
	(this.type === F.parenL || this.type === F.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
	var l = this.parseMaybeConditional(e, t);
	if (n && (l = n.call(this, l, s, c)), this.type.isAssign) {
		var u = this.startNodeAt(s, c);
		return u.operator = this.value, this.type === F.eq && (l = this.toAssignable(l, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= l.start && (t.shorthandAssign = -1), this.type === F.eq ? this.checkLValPattern(l) : this.checkLValSimple(l), u.left = l, this.next(), u.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(u, "AssignmentExpression");
	}
	return r && this.checkExpressionErrors(t, !0), i > -1 && (t.parenthesizedAssign = i), a > -1 && (t.trailingComma = a), l;
}, z.parseMaybeConditional = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseExprOps(e, t);
	if (this.checkExpressionErrors(t)) return i;
	if (this.eat(F.question)) {
		var a = this.startNodeAt(n, r);
		return a.test = i, a.consequent = this.parseMaybeAssign(), this.expect(F.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
	}
	return i;
}, z.parseExprOps = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseMaybeUnary(t, !1, !1, e);
	return this.checkExpressionErrors(t) || i.start === n && i.type === "ArrowFunctionExpression" ? i : this.parseExprOp(i, n, r, -1, e);
}, z.parseExprOp = function(e, t, n, r, i) {
	var a = this.type.binop;
	if (a != null && (!i || this.type !== F._in) && a > r) {
		var o = this.type === F.logicalOR || this.type === F.logicalAND, s = this.type === F.coalesce;
		s && (a = F.logicalAND.binop);
		var c = this.value;
		this.next();
		var l = this.start, u = this.startLoc, d = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, i), l, u, a, i), f = this.buildBinary(t, n, e, d, c, o || s);
		return (o && this.type === F.coalesce || s && (this.type === F.logicalOR || this.type === F.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(f, t, n, r, i);
	}
	return e;
}, z.buildBinary = function(e, t, n, r, i, a) {
	r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
	var o = this.startNodeAt(e, t);
	return o.left = n, o.operator = i, o.right = r, this.finishNode(o, a ? "LogicalExpression" : "BinaryExpression");
}, z.parseMaybeUnary = function(e, t, n, r) {
	var i = this.start, a = this.startLoc, o;
	if (this.isContextual("await") && this.canAwait) o = this.parseAwait(r), t = !0;
	else if (this.type.prefix) {
		var s = this.startNode(), c = this.type === F.incDec;
		s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0, c, r), this.checkExpressionErrors(e, !0), c ? this.checkLValSimple(s.argument) : this.strict && s.operator === "delete" && qn(s.argument) ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : s.operator === "delete" && Jn(s.argument) ? this.raiseRecoverable(s.start, "Private fields can not be deleted") : t = !0, o = this.finishNode(s, c ? "UpdateExpression" : "UnaryExpression");
	} else if (!t && this.type === F.privateId) (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== F._in && this.unexpected();
	else {
		if (o = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e)) return o;
		for (; this.type.postfix && !this.canInsertSemicolon();) {
			var l = this.startNodeAt(i, a);
			l.operator = this.value, l.prefix = !1, l.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(l, "UpdateExpression");
		}
	}
	if (!n && this.eat(F.starstar)) {
		if (t) this.unexpected(this.lastTokStart);
		else return this.buildBinary(i, a, o, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
	} else return o;
};
function qn(e) {
	return e.type === "Identifier" || e.type === "ParenthesizedExpression" && qn(e.expression);
}
function Jn(e) {
	return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Jn(e.expression) || e.type === "ParenthesizedExpression" && Jn(e.expression);
}
z.parseExprSubscripts = function(e, t) {
	var n = this.start, r = this.startLoc, i = this.parseExprAtom(e, t);
	if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return i;
	var a = this.parseSubscripts(i, n, r, !1, t);
	return e && a.type === "MemberExpression" && (e.parenthesizedAssign >= a.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= a.start && (e.parenthesizedBind = -1), e.trailingComma >= a.start && (e.trailingComma = -1)), a;
}, z.parseSubscripts = function(e, t, n, r, i) {
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
}, z.shouldParseAsyncArrow = function() {
	return !this.canInsertSemicolon() && this.eat(F.arrow);
}, z.parseSubscriptAsyncArrow = function(e, t, n, r) {
	return this.parseArrowExpression(this.startNodeAt(e, t), n, !0, r);
}, z.parseSubscript = function(e, t, n, r, i, a, o) {
	var s = this.options.ecmaVersion >= 11, c = s && this.eat(F.questionDot);
	r && c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
	var l = this.eat(F.bracketL);
	if (l || c && this.type !== F.parenL && this.type !== F.backQuote || this.eat(F.dot)) {
		var u = this.startNodeAt(t, n);
		u.object = e, l ? (u.property = this.parseExpression(), this.expect(F.bracketR)) : u.property = this.type === F.privateId && e.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), u.computed = !!l, s && (u.optional = c), e = this.finishNode(u, "MemberExpression");
	} else if (!r && this.eat(F.parenL)) {
		var d = new Fn(), f = this.yieldPos, p = this.awaitPos, m = this.awaitIdentPos;
		this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
		var h = this.parseExprList(F.parenR, this.options.ecmaVersion >= 8, !1, d);
		if (i && !c && this.shouldParseAsyncArrow()) return this.checkPatternErrors(d, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = f, this.awaitPos = p, this.awaitIdentPos = m, this.parseSubscriptAsyncArrow(t, n, h, o);
		this.checkExpressionErrors(d, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = p || this.awaitPos, this.awaitIdentPos = m || this.awaitIdentPos;
		var g = this.startNodeAt(t, n);
		g.callee = e, g.arguments = h, s && (g.optional = c), e = this.finishNode(g, "CallExpression");
	} else if (this.type === F.backQuote) {
		(c || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
		var _ = this.startNodeAt(t, n);
		_.tag = e, _.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(_, "TaggedTemplateExpression");
	}
	return e;
}, z.parseExprAtom = function(e, t, n) {
	this.type === F.slash && this.readRegexp();
	var r, i = this.potentialArrowAt === this.start;
	switch (this.type) {
		case F._super: return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === F.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== F.dot && this.type !== F.bracketL && this.type !== F.parenL && this.unexpected(), this.finishNode(r, "Super");
		case F._this: return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
		case F.name:
			var a = this.start, o = this.startLoc, s = this.containsEsc, c = this.parseIdent(!1);
			if (this.options.ecmaVersion >= 8 && !s && c.name === "async" && !this.canInsertSemicolon() && this.eat(F._function)) return this.overrideContext(R.f_expr), this.parseFunction(this.startNodeAt(a, o), 0, !1, !0, t);
			if (i && !this.canInsertSemicolon()) {
				if (this.eat(F.arrow)) return this.parseArrowExpression(this.startNodeAt(a, o), [c], !1, t);
				if (this.options.ecmaVersion >= 8 && c.name === "async" && this.type === F.name && !s && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return c = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(F.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, o), [c], !0, t);
			}
			return c;
		case F.regexp:
			var l = this.value;
			return r = this.parseLiteral(l.value), r.regex = {
				pattern: l.pattern,
				flags: l.flags
			}, r;
		case F.num:
		case F.string: return this.parseLiteral(this.value);
		case F._null:
		case F._true:
		case F._false: return r = this.startNode(), r.value = this.type === F._null ? null : this.type === F._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
		case F.parenL:
			var u = this.start, d = this.parseParenAndDistinguishExpression(i, t);
			return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(d) && (e.parenthesizedAssign = u), e.parenthesizedBind < 0 && (e.parenthesizedBind = u)), d;
		case F.bracketL: return r = this.startNode(), this.next(), r.elements = this.parseExprList(F.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
		case F.braceL: return this.overrideContext(R.b_expr), this.parseObj(!1, e);
		case F._function: return r = this.startNode(), this.next(), this.parseFunction(r, 0);
		case F._class: return this.parseClass(this.startNode(), !1);
		case F._new: return this.parseNew();
		case F.backQuote: return this.parseTemplate();
		case F._import: return this.options.ecmaVersion >= 11 ? this.parseExprImport(n) : this.unexpected();
		default: return this.parseExprAtomDefault();
	}
}, z.parseExprAtomDefault = function() {
	this.unexpected();
}, z.parseExprImport = function(e) {
	var t = this.startNode();
	if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === F.parenL && !e) return this.parseDynamicImport(t);
	if (this.type === F.dot) {
		var n = this.startNodeAt(t.start, t.loc && t.loc.start);
		return n.name = "import", t.meta = this.finishNode(n, "Identifier"), this.parseImportMeta(t);
	}
	this.unexpected();
}, z.parseDynamicImport = function(e) {
	if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(F.parenR) ? e.options = null : (this.expect(F.comma), this.afterTrailingComma(F.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(F.parenR) || (this.expect(F.comma), this.afterTrailingComma(F.parenR) || this.unexpected())));
	else if (!this.eat(F.parenR)) {
		var t = this.start;
		this.eat(F.comma) && this.eat(F.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
	}
	return this.finishNode(e, "ImportExpression");
}, z.parseImportMeta = function(e) {
	this.next();
	var t = this.containsEsc;
	return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
}, z.parseLiteral = function(e) {
	var t = this.startNode();
	return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value == null ? t.raw.slice(0, -1).replace(/_/g, "") : t.value.toString()), this.next(), this.finishNode(t, "Literal");
}, z.parseParenExpression = function() {
	this.expect(F.parenL);
	var e = this.parseExpression();
	return this.expect(F.parenR), e;
}, z.shouldParseArrow = function(e) {
	return !this.canInsertSemicolon();
}, z.parseParenAndDistinguishExpression = function(e, t) {
	var n = this.start, r = this.startLoc, i, a = this.options.ecmaVersion >= 8;
	if (this.options.ecmaVersion >= 6) {
		this.next();
		var o = this.start, s = this.startLoc, c = [], l = !0, u = !1, d = new Fn(), f = this.yieldPos, p = this.awaitPos, m;
		for (this.yieldPos = 0, this.awaitPos = 0; this.type !== F.parenR;) {
			if (l ? l = !1 : this.expect(F.comma), a && this.afterTrailingComma(F.parenR, !0)) {
				u = !0;
				break;
			}
			if (this.type === F.ellipsis) {
				m = this.start, c.push(this.parseParenItem(this.parseRestBinding())), this.type === F.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
				break;
			}
			c.push(this.parseMaybeAssign(!1, d, this.parseParenItem));
		}
		var h = this.lastTokEnd, g = this.lastTokEndLoc;
		if (this.expect(F.parenR), e && this.shouldParseArrow(c) && this.eat(F.arrow)) return this.checkPatternErrors(d, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = f, this.awaitPos = p, this.parseParenArrowList(n, r, c, t);
		(!c.length || u) && this.unexpected(this.lastTokStart), m && this.unexpected(m), this.checkExpressionErrors(d, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = p || this.awaitPos, c.length > 1 ? (i = this.startNodeAt(o, s), i.expressions = c, this.finishNodeAt(i, "SequenceExpression", h, g)) : i = c[0];
	} else i = this.parseParenExpression();
	if (this.options.preserveParens) {
		var _ = this.startNodeAt(n, r);
		return _.expression = i, this.finishNode(_, "ParenthesizedExpression");
	}
	return i;
}, z.parseParenItem = function(e) {
	return e;
}, z.parseParenArrowList = function(e, t, n, r) {
	return this.parseArrowExpression(this.startNodeAt(e, t), n, !1, r);
};
var Yn = [];
z.parseNew = function() {
	this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
	var e = this.startNode();
	if (this.next(), this.options.ecmaVersion >= 6 && this.type === F.dot) {
		var t = this.startNodeAt(e.start, e.loc && e.loc.start);
		t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
		var n = this.containsEsc;
		return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), n && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
	}
	var r = this.start, i = this.startLoc;
	return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, i, !0, !1), e.arguments = this.eat(F.parenL) ? this.parseExprList(F.parenR, this.options.ecmaVersion >= 8, !1) : Yn, this.finishNode(e, "NewExpression");
}, z.parseTemplateElement = function(e) {
	var t = e.isTagged, n = this.startNode();
	return this.type === F.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), n.value = {
		raw: this.value.replace(/\r\n?/g, "\n"),
		cooked: null
	}) : n.value = {
		raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
		cooked: this.value
	}, this.next(), n.tail = this.type === F.backQuote, this.finishNode(n, "TemplateElement");
}, z.parseTemplate = function(e) {
	e === void 0 && (e = {});
	var t = e.isTagged;
	t === void 0 && (t = !1);
	var n = this.startNode();
	this.next(), n.expressions = [];
	var r = this.parseTemplateElement({ isTagged: t });
	for (n.quasis = [r]; !r.tail;) this.type === F.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(F.dollarBraceL), n.expressions.push(this.parseExpression()), this.expect(F.braceR), n.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
	return this.next(), this.finishNode(n, "TemplateLiteral");
}, z.isAsyncProp = function(e) {
	return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === F.name || this.type === F.num || this.type === F.string || this.type === F.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === F.star) && !Wt.test(this.input.slice(this.lastTokEnd, this.start));
}, z.parseObj = function(e, t) {
	var n = this.startNode(), r = !0, i = {};
	for (n.properties = [], this.next(); !this.eat(F.braceR);) {
		if (r) r = !1;
		else if (this.expect(F.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(F.braceR)) break;
		var a = this.parseProperty(e, t);
		e || this.checkPropClash(a, i, t), n.properties.push(a);
	}
	return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression");
}, z.parseProperty = function(e, t) {
	var n = this.startNode(), r, i, a, o;
	if (this.options.ecmaVersion >= 9 && this.eat(F.ellipsis)) return e ? (n.argument = this.parseIdent(!1), this.type === F.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (n.argument = this.parseMaybeAssign(!1, t), this.type === F.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
	this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (e || t) && (a = this.start, o = this.startLoc), e || (r = this.eat(F.star)));
	var s = this.containsEsc;
	return this.parsePropertyName(n), !e && !s && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(n) ? (i = !0, r = this.options.ecmaVersion >= 9 && this.eat(F.star), this.parsePropertyName(n)) : i = !1, this.parsePropertyValue(n, e, r, i, a, o, t, s), this.finishNode(n, "Property");
}, z.parseGetterSetter = function(e) {
	var t = e.key.name;
	this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
	var n = e.kind === "get" ? 0 : 1;
	if (e.value.params.length !== n) {
		var r = e.value.start;
		e.kind === "get" ? this.raiseRecoverable(r, "getter should have no params") : this.raiseRecoverable(r, "setter should have exactly one param");
	} else e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
}, z.parsePropertyValue = function(e, t, n, r, i, a, o, s) {
	(n || r) && this.type === F.colon && this.unexpected(), this.eat(F.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === F.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(n, r), e.kind = "init") : !t && !s && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== F.comma && this.type !== F.braceR && this.type !== F.eq ? ((n || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((n || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i), t ? e.value = this.parseMaybeDefault(i, a, this.copyNode(e.key)) : this.type === F.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, a, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
}, z.parsePropertyName = function(e) {
	if (this.options.ecmaVersion >= 6) {
		if (this.eat(F.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(F.bracketR), e.key;
		e.computed = !1;
	}
	return e.key = this.type === F.num || this.type === F.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
}, z.initFunction = function(e) {
	e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
}, z.parseMethod = function(e, t, n) {
	var r = this.startNode(), i = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
	return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Tn(t, r.generator) | yn | (n ? bn : 0)), this.expect(F.parenL), r.params = this.parseBindingList(F.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(r, "FunctionExpression");
}, z.parseArrowExpression = function(e, t, n, r) {
	var i = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
	return this.enterScope(Tn(n, !1) | _n), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
}, z.parseFunctionBody = function(e, t, n, r) {
	var i = t && this.type !== F.braceL, a = this.strict, o = !1;
	if (i) e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
	else {
		var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
		(!a || s) && (o = this.strictDirective(this.end), o && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
		var c = this.labels;
		this.labels = [], o && (this.strict = !0), this.checkParams(e, !a && !o && !t && !n && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, jn), e.body = this.parseBlock(!1, void 0, o && !a), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = c;
	}
	this.exitScope();
}, z.isSimpleParamList = function(e) {
	for (var t = 0, n = e; t < n.length; t += 1) if (n[t].type !== "Identifier") return !1;
	return !0;
}, z.checkParams = function(e, t) {
	for (var n = Object.create(null), r = 0, i = e.params; r < i.length; r += 1) {
		var a = i[r];
		this.checkLValInnerPattern(a, Dn, t ? null : n);
	}
}, z.parseExprList = function(e, t, n, r) {
	for (var i = [], a = !0; !this.eat(e);) {
		if (a) a = !1;
		else if (this.expect(F.comma), t && this.afterTrailingComma(e)) break;
		var o = void 0;
		n && this.type === F.comma ? o = null : this.type === F.ellipsis ? (o = this.parseSpread(r), r && this.type === F.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : o = this.parseMaybeAssign(!1, r), i.push(o);
	}
	return i;
}, z.checkUnreserved = function(e) {
	var t = e.start, n = e.end, r = e.name;
	this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & wn) && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, n).indexOf("\\") !== -1) && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
}, z.parseIdent = function(e) {
	var t = this.parseIdentNode();
	return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
}, z.parseIdentNode = function() {
	var e = this.startNode();
	return this.type === F.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = F.name) : this.unexpected(), e;
}, z.parsePrivateIdent = function() {
	var e = this.startNode();
	return this.type === F.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
}, z.parseYield = function(e) {
	this.yieldPos ||= this.start;
	var t = this.startNode();
	return this.next(), this.type === F.semi || this.canInsertSemicolon() || this.type !== F.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(F.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
}, z.parseAwait = function(e) {
	this.awaitPos ||= this.start;
	var t = this.startNode();
	return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Xn = I.prototype;
Xn.raise = function(e, t) {
	var n = cn(this.input, e);
	t += " (" + n.line + ":" + n.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
	var r = SyntaxError(t);
	throw r.pos = e, r.loc = n, r.raisedAt = this.pos, r;
}, Xn.raiseRecoverable = Xn.raise, Xn.curPosition = function() {
	if (this.options.locations) return new on(this.curLine, this.pos - this.lineStart);
};
var Zn = I.prototype, Qn = function(e) {
	this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
Zn.enterScope = function(e) {
	this.scopeStack.push(new Qn(e));
}, Zn.exitScope = function() {
	this.scopeStack.pop();
}, Zn.treatFunctionsAsVarInScope = function(e) {
	return e.flags & mn || !this.inModule && e.flags & pn;
}, Zn.declareName = function(e, t, n) {
	var r = !1;
	if (t === On) {
		var i = this.currentScope();
		r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && i.flags & pn && delete this.undefinedExports[e];
	} else if (t === An) this.currentScope().lexical.push(e);
	else if (t === kn) {
		var a = this.currentScope();
		r = this.treatFunctionsAsVar ? a.lexical.indexOf(e) > -1 : a.lexical.indexOf(e) > -1 || a.var.indexOf(e) > -1, a.functions.push(e);
	} else for (var o = this.scopeStack.length - 1; o >= 0; --o) {
		var s = this.scopeStack[o];
		if (s.lexical.indexOf(e) > -1 && !(s.flags & vn && s.lexical[0] === e) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(e) > -1) {
			r = !0;
			break;
		}
		if (s.var.push(e), this.inModule && s.flags & pn && delete this.undefinedExports[e], s.flags & wn) break;
	}
	r && this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared");
}, Zn.checkLocalExport = function(e) {
	this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
}, Zn.currentScope = function() {
	return this.scopeStack[this.scopeStack.length - 1];
}, Zn.currentVarScope = function() {
	for (var e = this.scopeStack.length - 1;; e--) {
		var t = this.scopeStack[e];
		if (t.flags & (wn | Sn | xn)) return t;
	}
}, Zn.currentThisScope = function() {
	for (var e = this.scopeStack.length - 1;; e--) {
		var t = this.scopeStack[e];
		if (t.flags & (wn | Sn | xn) && !(t.flags & _n)) return t;
	}
};
var $n = function(e, t, n) {
	this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new sn(e, n)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0]);
}, er = I.prototype;
er.startNode = function() {
	return new $n(this, this.start, this.startLoc);
}, er.startNodeAt = function(e, t) {
	return new $n(this, e, t);
};
function tr(e, t, n, r) {
	return e.type = t, e.end = n, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = n), e;
}
er.finishNode = function(e, t) {
	return tr.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
}, er.finishNodeAt = function(e, t, n, r) {
	return tr.call(this, e, t, n, r);
}, er.copyNode = function(e) {
	var t = new $n(this, e.start, this.startLoc);
	for (var n in e) t[n] = e[n];
	return t;
};
var nr = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz", rr = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", ir = rr + " Extended_Pictographic", ar = ir, or = ar + " EBase EComp EMod EPres ExtPict", sr = or, cr = {
	9: rr,
	10: ir,
	11: ar,
	12: or,
	13: sr,
	14: sr
}, lr = {
	9: "",
	10: "",
	11: "",
	12: "",
	13: "",
	14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
}, ur = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", dr = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", fr = dr + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", pr = fr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", mr = pr + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", hr = mr + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", gr = {
	9: dr,
	10: fr,
	11: pr,
	12: mr,
	13: hr,
	14: hr + " " + nr
}, _r = {};
function vr(e) {
	var t = _r[e] = {
		binary: nn(cr[e] + " " + ur),
		binaryOfStrings: nn(lr[e]),
		nonBinary: {
			General_Category: nn(ur),
			Script: nn(gr[e])
		}
	};
	t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var yr = 0, br = [
	9,
	10,
	11,
	12,
	13,
	14
]; yr < br.length; yr += 1) {
	var xr = br[yr];
	vr(xr);
}
var B = I.prototype, Sr = function(e, t) {
	this.parent = e, this.base = t || this;
};
Sr.prototype.separatedFrom = function(e) {
	for (var t = this; t; t = t.parent) for (var n = e; n; n = n.parent) if (t.base === n.base && t !== n) return !0;
	return !1;
}, Sr.prototype.sibling = function() {
	return new Sr(this.parent, this.base);
};
var Cr = function(e) {
	this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = _r[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Cr.prototype.reset = function(e, t, n) {
	var r = n.indexOf("v") !== -1, i = n.indexOf("u") !== -1;
	this.start = e | 0, this.source = t + "", this.flags = n, r && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = i && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = i && this.parser.options.ecmaVersion >= 9);
}, Cr.prototype.raise = function(e) {
	this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
}, Cr.prototype.at = function(e, t) {
	t === void 0 && (t = !1);
	var n = this.source, r = n.length;
	if (e >= r) return -1;
	var i = n.charCodeAt(e);
	if (!(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r) return i;
	var a = n.charCodeAt(e + 1);
	return a >= 56320 && a <= 57343 ? (i << 10) + a - 56613888 : i;
}, Cr.prototype.nextIndex = function(e, t) {
	t === void 0 && (t = !1);
	var n = this.source, r = n.length;
	if (e >= r) return r;
	var i = n.charCodeAt(e), a;
	return !(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r || (a = n.charCodeAt(e + 1)) < 56320 || a > 57343 ? e + 1 : e + 2;
}, Cr.prototype.current = function(e) {
	return e === void 0 && (e = !1), this.at(this.pos, e);
}, Cr.prototype.lookahead = function(e) {
	return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
}, Cr.prototype.advance = function(e) {
	e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
}, Cr.prototype.eat = function(e, t) {
	return t === void 0 && (t = !1), this.current(t) === e && (this.advance(t), !0);
}, Cr.prototype.eatChars = function(e, t) {
	t === void 0 && (t = !1);
	for (var n = this.pos, r = 0, i = e; r < i.length; r += 1) {
		var a = i[r], o = this.at(n, t);
		if (o === -1 || o !== a) return !1;
		n = this.nextIndex(n, t);
	}
	return this.pos = n, !0;
}, B.validateRegExpFlags = function(e) {
	for (var t = e.validFlags, n = e.flags, r = !1, i = !1, a = 0; a < n.length; a++) {
		var o = n.charAt(a);
		t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), n.indexOf(o, a + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (r = !0), o === "v" && (i = !0);
	}
	this.options.ecmaVersion >= 15 && r && i && this.raise(e.start, "Invalid regular expression flag");
};
function wr(e) {
	for (var t in e) return !0;
	return !1;
}
B.validateRegExpPattern = function(e) {
	this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && wr(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
}, B.regexp_pattern = function(e) {
	e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
	for (var t = 0, n = e.backReferenceNames; t < n.length; t += 1) {
		var r = n[t];
		e.groupNames[r] || e.raise("Invalid named capture referenced");
	}
}, B.regexp_disjunction = function(e) {
	var t = this.options.ecmaVersion >= 16;
	for (t && (e.branchID = new Sr(e.branchID, null)), this.regexp_alternative(e); e.eat(124);) t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
	t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
}, B.regexp_alternative = function(e) {
	for (; e.pos < e.source.length && this.regexp_eatTerm(e););
}, B.regexp_eatTerm = function(e) {
	return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
}, B.regexp_eatAssertion = function(e) {
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
}, B.regexp_eatQuantifier = function(e, t) {
	return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
}, B.regexp_eatQuantifierPrefix = function(e, t) {
	return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
}, B.regexp_eatBracedQuantifier = function(e, t) {
	var n = e.pos;
	if (e.eat(123)) {
		var r = 0, i = -1;
		if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) return i !== -1 && i < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
		e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = n;
	}
	return !1;
}, B.regexp_eatAtom = function(e) {
	return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
}, B.regexp_eatReverseSolidusAtomEscape = function(e) {
	var t = e.pos;
	if (e.eat(92)) {
		if (this.regexp_eatAtomEscape(e)) return !0;
		e.pos = t;
	}
	return !1;
}, B.regexp_eatUncapturingGroup = function(e) {
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
}, B.regexp_eatCapturingGroup = function(e) {
	if (e.eat(40)) {
		if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
		e.raise("Unterminated group");
	}
	return !1;
}, B.regexp_eatModifiers = function(e) {
	for (var t = "", n = 0; (n = e.current()) !== -1 && Tr(n);) t += rn(n), e.advance();
	return t;
};
function Tr(e) {
	return e === 105 || e === 109 || e === 115;
}
B.regexp_eatExtendedAtom = function(e) {
	return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
}, B.regexp_eatInvalidBracedQuantifier = function(e) {
	return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
}, B.regexp_eatSyntaxCharacter = function(e) {
	var t = e.current();
	return Er(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Er(e) {
	return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
B.regexp_eatPatternCharacters = function(e) {
	for (var t = e.pos, n = 0; (n = e.current()) !== -1 && !Er(n);) e.advance();
	return e.pos !== t;
}, B.regexp_eatExtendedPatternCharacter = function(e) {
	var t = e.current();
	return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 && (e.advance(), !0);
}, B.regexp_groupSpecifier = function(e) {
	if (e.eat(63)) {
		this.regexp_eatGroupName(e) || e.raise("Invalid group");
		var t = this.options.ecmaVersion >= 16, n = e.groupNames[e.lastStringValue];
		if (n) {
			if (t) for (var r = 0, i = n; r < i.length; r += 1) i[r].separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
			else e.raise("Duplicate capture group name");
		}
		t ? (n || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
	}
}, B.regexp_eatGroupName = function(e) {
	if (e.lastStringValue = "", e.eat(60)) {
		if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
		e.raise("Invalid capture group name");
	}
	return !1;
}, B.regexp_eatRegExpIdentifierName = function(e) {
	if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
		for (e.lastStringValue += rn(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += rn(e.lastIntValue);
		return !0;
	}
	return !1;
}, B.regexp_eatRegExpIdentifierStart = function(e) {
	var t = e.pos, n = this.options.ecmaVersion >= 11, r = e.current(n);
	return e.advance(n), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue), Dr(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Dr(e) {
	return Rt(e, !0) || e === 36 || e === 95;
}
B.regexp_eatRegExpIdentifierPart = function(e) {
	var t = e.pos, n = this.options.ecmaVersion >= 11, r = e.current(n);
	return e.advance(n), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue), Or(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Or(e) {
	return zt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
B.regexp_eatAtomEscape = function(e) {
	return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
}, B.regexp_eatBackReference = function(e) {
	var t = e.pos;
	if (this.regexp_eatDecimalEscape(e)) {
		var n = e.lastIntValue;
		if (e.switchU) return n > e.maxBackReference && (e.maxBackReference = n), !0;
		if (n <= e.numCapturingParens) return !0;
		e.pos = t;
	}
	return !1;
}, B.regexp_eatKGroupName = function(e) {
	if (e.eat(107)) {
		if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
		e.raise("Invalid named reference");
	}
	return !1;
}, B.regexp_eatCharacterEscape = function(e) {
	return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
}, B.regexp_eatCControlLetter = function(e) {
	var t = e.pos;
	if (e.eat(99)) {
		if (this.regexp_eatControlLetter(e)) return !0;
		e.pos = t;
	}
	return !1;
}, B.regexp_eatZero = function(e) {
	return e.current() === 48 && !Br(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0);
}, B.regexp_eatControlEscape = function(e) {
	var t = e.current();
	return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 && (e.lastIntValue = 13, e.advance(), !0);
}, B.regexp_eatControlLetter = function(e) {
	var t = e.current();
	return kr(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function kr(e) {
	return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
B.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
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
		if (r && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Ar(e.lastIntValue)) return !0;
		r && e.raise("Invalid unicode escape"), e.pos = n;
	}
	return !1;
};
function Ar(e) {
	return e >= 0 && e <= 1114111;
}
B.regexp_eatIdentityEscape = function(e) {
	if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? (e.lastIntValue = 47, !0) : !1;
	var t = e.current();
	return t !== 99 && (!e.switchN || t !== 107) && (e.lastIntValue = t, e.advance(), !0);
}, B.regexp_eatDecimalEscape = function(e) {
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
var jr = 0, Mr = 1, Nr = 2;
B.regexp_eatCharacterClassEscape = function(e) {
	var t = e.current();
	if (Pr(t)) return e.lastIntValue = -1, e.advance(), Mr;
	var n = !1;
	if (e.switchU && this.options.ecmaVersion >= 9 && ((n = t === 80) || t === 112)) {
		e.lastIntValue = -1, e.advance();
		var r;
		if (e.eat(123) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) return n && r === Nr && e.raise("Invalid property name"), r;
		e.raise("Invalid property name");
	}
	return jr;
};
function Pr(e) {
	return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
B.regexp_eatUnicodePropertyValueExpression = function(e) {
	var t = e.pos;
	if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
		var n = e.lastStringValue;
		if (this.regexp_eatUnicodePropertyValue(e)) {
			var r = e.lastStringValue;
			return this.regexp_validateUnicodePropertyNameAndValue(e, n, r), Mr;
		}
	}
	if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
		var i = e.lastStringValue;
		return this.regexp_validateUnicodePropertyNameOrValue(e, i);
	}
	return jr;
}, B.regexp_validateUnicodePropertyNameAndValue = function(e, t, n) {
	$t(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(n) || e.raise("Invalid property value");
}, B.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
	if (e.unicodeProperties.binary.test(t)) return Mr;
	if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return Nr;
	e.raise("Invalid property name");
}, B.regexp_eatUnicodePropertyName = function(e) {
	var t = 0;
	for (e.lastStringValue = ""; Fr(t = e.current());) e.lastStringValue += rn(t), e.advance();
	return e.lastStringValue !== "";
};
function Fr(e) {
	return kr(e) || e === 95;
}
B.regexp_eatUnicodePropertyValue = function(e) {
	var t = 0;
	for (e.lastStringValue = ""; Ir(t = e.current());) e.lastStringValue += rn(t), e.advance();
	return e.lastStringValue !== "";
};
function Ir(e) {
	return Fr(e) || Br(e);
}
B.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
	return this.regexp_eatUnicodePropertyValue(e);
}, B.regexp_eatCharacterClass = function(e) {
	if (e.eat(91)) {
		var t = e.eat(94), n = this.regexp_classContents(e);
		return e.eat(93) || e.raise("Unterminated character class"), t && n === Nr && e.raise("Negated character class may contain strings"), !0;
	}
	return !1;
}, B.regexp_classContents = function(e) {
	return e.current() === 93 ? Mr : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Mr);
}, B.regexp_nonEmptyClassRanges = function(e) {
	for (; this.regexp_eatClassAtom(e);) {
		var t = e.lastIntValue;
		if (e.eat(45) && this.regexp_eatClassAtom(e)) {
			var n = e.lastIntValue;
			e.switchU && (t === -1 || n === -1) && e.raise("Invalid character class"), t !== -1 && n !== -1 && t > n && e.raise("Range out of order in character class");
		}
	}
}, B.regexp_eatClassAtom = function(e) {
	var t = e.pos;
	if (e.eat(92)) {
		if (this.regexp_eatClassEscape(e)) return !0;
		if (e.switchU) {
			var n = e.current();
			(n === 99 || Ur(n)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
		}
		e.pos = t;
	}
	var r = e.current();
	return r !== 93 && (e.lastIntValue = r, e.advance(), !0);
}, B.regexp_eatClassEscape = function(e) {
	var t = e.pos;
	if (e.eat(98)) return e.lastIntValue = 8, !0;
	if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
	if (!e.switchU && e.eat(99)) {
		if (this.regexp_eatClassControlLetter(e)) return !0;
		e.pos = t;
	}
	return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
}, B.regexp_classSetExpression = function(e) {
	var t = Mr, n;
	if (!this.regexp_eatClassSetRange(e)) {
		if (n = this.regexp_eatClassSetOperand(e)) {
			n === Nr && (t = Nr);
			for (var r = e.pos; e.eatChars([38, 38]);) {
				if (e.current() !== 38 && (n = this.regexp_eatClassSetOperand(e))) {
					n !== Nr && (t = Mr);
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
		n === Nr && (t = Nr);
	}
}, B.regexp_eatClassSetRange = function(e) {
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
}, B.regexp_eatClassSetOperand = function(e) {
	return this.regexp_eatClassSetCharacter(e) ? Mr : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
}, B.regexp_eatNestedClass = function(e) {
	var t = e.pos;
	if (e.eat(91)) {
		var n = e.eat(94), r = this.regexp_classContents(e);
		if (e.eat(93)) return n && r === Nr && e.raise("Negated character class may contain strings"), r;
		e.pos = t;
	}
	if (e.eat(92)) {
		var i = this.regexp_eatCharacterClassEscape(e);
		if (i) return i;
		e.pos = t;
	}
	return null;
}, B.regexp_eatClassStringDisjunction = function(e) {
	var t = e.pos;
	if (e.eatChars([92, 113])) {
		if (e.eat(123)) {
			var n = this.regexp_classStringDisjunctionContents(e);
			if (e.eat(125)) return n;
		} else e.raise("Invalid escape");
		e.pos = t;
	}
	return null;
}, B.regexp_classStringDisjunctionContents = function(e) {
	for (var t = this.regexp_classString(e); e.eat(124);) this.regexp_classString(e) === Nr && (t = Nr);
	return t;
}, B.regexp_classString = function(e) {
	for (var t = 0; this.regexp_eatClassSetCharacter(e);) t++;
	return t === 1 ? Mr : Nr;
}, B.regexp_eatClassSetCharacter = function(e) {
	var t = e.pos;
	if (e.eat(92)) return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(98) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
	var n = e.current();
	return n < 0 || n === e.lookahead() && Lr(n) || Rr(n) ? !1 : (e.advance(), e.lastIntValue = n, !0);
};
function Lr(e) {
	return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function Rr(e) {
	return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
B.regexp_eatClassSetReservedPunctuator = function(e) {
	var t = e.current();
	return zr(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function zr(e) {
	return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
B.regexp_eatClassControlLetter = function(e) {
	var t = e.current();
	return Br(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
}, B.regexp_eatHexEscapeSequence = function(e) {
	var t = e.pos;
	if (e.eat(120)) {
		if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
		e.switchU && e.raise("Invalid escape"), e.pos = t;
	}
	return !1;
}, B.regexp_eatDecimalDigits = function(e) {
	var t = e.pos, n = 0;
	for (e.lastIntValue = 0; Br(n = e.current());) e.lastIntValue = 10 * e.lastIntValue + (n - 48), e.advance();
	return e.pos !== t;
};
function Br(e) {
	return e >= 48 && e <= 57;
}
B.regexp_eatHexDigits = function(e) {
	var t = e.pos, n = 0;
	for (e.lastIntValue = 0; Vr(n = e.current());) e.lastIntValue = 16 * e.lastIntValue + Hr(n), e.advance();
	return e.pos !== t;
};
function Vr(e) {
	return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Hr(e) {
	return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
B.regexp_eatLegacyOctalEscapeSequence = function(e) {
	if (this.regexp_eatOctalDigit(e)) {
		var t = e.lastIntValue;
		if (this.regexp_eatOctalDigit(e)) {
			var n = e.lastIntValue;
			e.lastIntValue = t <= 3 && this.regexp_eatOctalDigit(e) ? t * 64 + n * 8 + e.lastIntValue : t * 8 + n;
		} else e.lastIntValue = t;
		return !0;
	}
	return !1;
}, B.regexp_eatOctalDigit = function(e) {
	var t = e.current();
	return Ur(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Ur(e) {
	return e >= 48 && e <= 55;
}
B.regexp_eatFixedHexDigits = function(e, t) {
	var n = e.pos;
	e.lastIntValue = 0;
	for (var r = 0; r < t; ++r) {
		var i = e.current();
		if (!Vr(i)) return e.pos = n, !1;
		e.lastIntValue = 16 * e.lastIntValue + Hr(i), e.advance();
	}
	return !0;
};
var Wr = function(e) {
	this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new sn(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, V = I.prototype;
V.next = function(e) {
	!e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Wr(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
}, V.getToken = function() {
	return this.next(), new Wr(this);
}, typeof Symbol < "u" && (V[Symbol.iterator] = function() {
	var e = this;
	return { next: function() {
		var t = e.getToken();
		return {
			done: t.type === F.eof,
			value: t
		};
	} };
}), V.nextToken = function() {
	var e = this.curContext();
	if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(F.eof);
	if (e.override) return e.override(this);
	this.readToken(this.fullCharCodeAtPos());
}, V.readToken = function(e) {
	return Rt(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
}, V.fullCharCodeAt = function(e) {
	var t = this.input.charCodeAt(e);
	if (t <= 55295 || t >= 56320) return t;
	var n = this.input.charCodeAt(e + 1);
	return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
}, V.fullCharCodeAtPos = function() {
	return this.fullCharCodeAt(this.pos);
}, V.skipBlockComment = function() {
	var e = this.options.onComment && this.curPosition(), t = this.pos, n = this.input.indexOf("*/", this.pos += 2);
	if (n === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (var r = void 0, i = t; (r = qt(this.input, i, this.pos)) > -1;) ++this.curLine, i = this.lineStart = r;
	this.options.onComment && this.options.onComment(!0, this.input.slice(t + 2, n), t, this.pos, e, this.curPosition());
}, V.skipLineComment = function(e) {
	for (var t = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Kt(r);) r = this.input.charCodeAt(++this.pos);
	this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, n, this.curPosition());
}, V.skipSpace = function() {
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
			default: if (e > 8 && e < 14 || e >= 5760 && Jt.test(String.fromCharCode(e))) ++this.pos;
			else break loop;
		}
	}
}, V.finishToken = function(e, t) {
	this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
	var n = this.type;
	this.type = e, this.value = t, this.updateContext(n);
}, V.readToken_dot = function() {
	var e = this.input.charCodeAt(this.pos + 1);
	if (e >= 48 && e <= 57) return this.readNumber(!0);
	var t = this.input.charCodeAt(this.pos + 2);
	return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(F.ellipsis)) : (++this.pos, this.finishToken(F.dot));
}, V.readToken_slash = function() {
	var e = this.input.charCodeAt(this.pos + 1);
	return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(F.assign, 2) : this.finishOp(F.slash, 1);
}, V.readToken_mult_modulo_exp = function(e) {
	var t = this.input.charCodeAt(this.pos + 1), n = 1, r = e === 42 ? F.star : F.modulo;
	return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++n, r = F.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(F.assign, n + 1) : this.finishOp(r, n);
}, V.readToken_pipe_amp = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === e ? this.options.ecmaVersion >= 12 && this.input.charCodeAt(this.pos + 2) === 61 ? this.finishOp(F.assign, 3) : this.finishOp(e === 124 ? F.logicalOR : F.logicalAND, 2) : t === 61 ? this.finishOp(F.assign, 2) : this.finishOp(e === 124 ? F.bitwiseOR : F.bitwiseAND, 1);
}, V.readToken_caret = function() {
	return this.input.charCodeAt(this.pos + 1) === 61 ? this.finishOp(F.assign, 2) : this.finishOp(F.bitwiseXOR, 1);
}, V.readToken_plus_min = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Wt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(F.incDec, 2) : t === 61 ? this.finishOp(F.assign, 2) : this.finishOp(F.plusMin, 1);
}, V.readToken_lt_gt = function(e) {
	var t = this.input.charCodeAt(this.pos + 1), n = 1;
	return t === e ? (n = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + n) === 61 ? this.finishOp(F.assign, n + 1) : this.finishOp(F.bitShift, n)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (n = 2), this.finishOp(F.relational, n));
}, V.readToken_eq_excl = function(e) {
	var t = this.input.charCodeAt(this.pos + 1);
	return t === 61 ? this.finishOp(F.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(F.arrow)) : this.finishOp(e === 61 ? F.eq : F.prefix, 1);
}, V.readToken_question = function() {
	var e = this.options.ecmaVersion;
	if (e >= 11) {
		var t = this.input.charCodeAt(this.pos + 1);
		if (t === 46) {
			var n = this.input.charCodeAt(this.pos + 2);
			if (n < 48 || n > 57) return this.finishOp(F.questionDot, 2);
		}
		if (t === 63) return e >= 12 && this.input.charCodeAt(this.pos + 2) === 61 ? this.finishOp(F.assign, 3) : this.finishOp(F.coalesce, 2);
	}
	return this.finishOp(F.question, 1);
}, V.readToken_numberSign = function() {
	var e = this.options.ecmaVersion, t = 35;
	if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), Rt(t, !0) || t === 92)) return this.finishToken(F.privateId, this.readWord1());
	this.raise(this.pos, "Unexpected character '" + rn(t) + "'");
}, V.getTokenFromCode = function(e) {
	switch (e) {
		case 46: return this.readToken_dot();
		case 40: return ++this.pos, this.finishToken(F.parenL);
		case 41: return ++this.pos, this.finishToken(F.parenR);
		case 59: return ++this.pos, this.finishToken(F.semi);
		case 44: return ++this.pos, this.finishToken(F.comma);
		case 91: return ++this.pos, this.finishToken(F.bracketL);
		case 93: return ++this.pos, this.finishToken(F.bracketR);
		case 123: return ++this.pos, this.finishToken(F.braceL);
		case 125: return ++this.pos, this.finishToken(F.braceR);
		case 58: return ++this.pos, this.finishToken(F.colon);
		case 96:
			if (this.options.ecmaVersion < 6) break;
			return ++this.pos, this.finishToken(F.backQuote);
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
		case 126: return this.finishOp(F.prefix, 1);
		case 35: return this.readToken_numberSign();
	}
	this.raise(this.pos, "Unexpected character '" + rn(e) + "'");
}, V.finishOp = function(e, t) {
	var n = this.input.slice(this.pos, this.pos + t);
	return this.pos += t, this.finishToken(e, n);
}, V.readRegexp = function() {
	for (var e, t, n = this.pos;;) {
		this.pos >= this.input.length && this.raise(n, "Unterminated regular expression");
		var r = this.input.charAt(this.pos);
		if (Wt.test(r) && this.raise(n, "Unterminated regular expression"), e) e = !1;
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
	var s = this.regexpState ||= new Cr(this);
	s.reset(n, i, o), this.validateRegExpFlags(s), this.validateRegExpPattern(s);
	var c = null;
	try {
		c = new RegExp(i, o);
	} catch {}
	return this.finishToken(F.regexp, {
		pattern: i,
		flags: o,
		value: c
	});
}, V.readInt = function(e, t, n) {
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
function Gr(e, t) {
	return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Kr(e) {
	return typeof BigInt == "function" ? BigInt(e.replace(/_/g, "")) : null;
}
V.readRadixNumber = function(e) {
	var t = this.pos;
	this.pos += 2;
	var n = this.readInt(e);
	return n ?? this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (n = Kr(this.input.slice(t, this.pos)), ++this.pos) : Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(F.num, n);
}, V.readNumber = function(e) {
	var t = this.pos;
	!e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
	var n = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
	n && this.strict && this.raise(t, "Invalid number");
	var r = this.input.charCodeAt(this.pos);
	if (!n && !e && this.options.ecmaVersion >= 11 && r === 110) {
		var i = Kr(this.input.slice(t, this.pos));
		return ++this.pos, Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(F.num, i);
	}
	n && /[89]/.test(this.input.slice(t, this.pos)) && (n = !1), r === 46 && !n && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !n && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
	var a = Gr(this.input.slice(t, this.pos), n);
	return this.finishToken(F.num, a);
}, V.readCodePoint = function() {
	var e = this.input.charCodeAt(this.pos), t;
	if (e === 123) {
		this.options.ecmaVersion < 6 && this.unexpected();
		var n = ++this.pos;
		t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(n, "Code point out of bounds");
	} else t = this.readHexChar(4);
	return t;
}, V.readString = function(e) {
	for (var t = "", n = ++this.pos;;) {
		this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
		var r = this.input.charCodeAt(this.pos);
		if (r === e) break;
		r === 92 ? (t += this.input.slice(n, this.pos), t += this.readEscapedChar(!1), n = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Kt(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
	}
	return t += this.input.slice(n, this.pos++), this.finishToken(F.string, t);
};
var qr = {};
V.tryReadTemplateToken = function() {
	this.inTemplateElement = !0;
	try {
		this.readTmplToken();
	} catch (e) {
		if (e === qr) this.readInvalidTemplateToken();
		else throw e;
	}
	this.inTemplateElement = !1;
}, V.invalidStringToken = function(e, t) {
	if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw qr;
	this.raise(e, t);
}, V.readTmplToken = function() {
	for (var e = "", t = this.pos;;) {
		this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
		var n = this.input.charCodeAt(this.pos);
		if (n === 96 || n === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === F.template || this.type === F.invalidTemplate) ? n === 36 ? (this.pos += 2, this.finishToken(F.dollarBraceL)) : (++this.pos, this.finishToken(F.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(F.template, e));
		if (n === 92) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
		else if (Kt(n)) {
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
}, V.readInvalidTemplateToken = function() {
	for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
		case "\\":
			++this.pos;
			break;
		case "$": if (this.input[this.pos + 1] !== "{") break;
		case "`": return this.finishToken(F.invalidTemplate, this.input.slice(this.start, this.pos));
		case "\r": this.input[this.pos + 1] === "\n" && ++this.pos;
		case "\n":
		case "\u2028":
		case "\u2029": ++this.curLine, this.lineStart = this.pos + 1;
	}
	this.raise(this.start, "Unterminated template");
}, V.readEscapedChar = function(e) {
	var t = this.input.charCodeAt(++this.pos);
	switch (++this.pos, t) {
		case 110: return "\n";
		case 114: return "\r";
		case 120: return String.fromCharCode(this.readHexChar(2));
		case 117: return rn(this.readCodePoint());
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
			return Kt(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
	}
}, V.readHexChar = function(e) {
	var t = this.pos, n = this.readInt(16, e);
	return n === null && this.invalidStringToken(t, "Bad character escape sequence"), n;
}, V.readWord1 = function() {
	this.containsEsc = !1;
	for (var e = "", t = !0, n = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
		var i = this.fullCharCodeAtPos();
		if (zt(i, r)) this.pos += i <= 65535 ? 1 : 2;
		else if (i === 92) {
			this.containsEsc = !0, e += this.input.slice(n, this.pos);
			var a = this.pos;
			this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
			var o = this.readCodePoint();
			(t ? Rt : zt)(o, r) || this.invalidStringToken(a, "Invalid Unicode escape"), e += rn(o), n = this.pos;
		} else break;
		t = !1;
	}
	return e + this.input.slice(n, this.pos);
}, V.readWord = function() {
	var e = this.readWord1(), t = F.name;
	return this.keywords.test(e) && (t = Ut[e]), this.finishToken(t, e);
}, I.acorn = {
	Parser: I,
	version: "8.16.0",
	defaultOptions: ln,
	Position: on,
	SourceLocation: sn,
	getLineInfo: cn,
	Node: $n,
	TokenType: N,
	tokTypes: F,
	keywordTypes: Ut,
	TokContext: Gn,
	tokContexts: R,
	isIdentifierChar: zt,
	isIdentifierStart: Rt,
	Token: Wr,
	isNewLine: Kt,
	lineBreak: Wt,
	lineBreakG: Gt,
	nonASCIIwhitespace: Jt
};
function Jr(e, t) {
	return I.parse(e, t);
}
//#endregion
//#region src/core/clipParamDependencies.ts
var Yr = /* @__PURE__ */ new Set([
	"opacity",
	"position",
	"anchorPoint",
	"scale",
	"rotation",
	"blendMode",
	"size"
]);
function Xr(e) {
	return !!e && typeof e == "object" && typeof e.type == "string";
}
function Zr(e) {
	return Xr(e) ? e.type === "Literal" && typeof e.value == "string" ? e.value : e.type === "TemplateLiteral" && Array.isArray(e.expressions) && e.expressions.length === 0 ? (Array.isArray(e.quasis) ? e.quasis[0] : void 0)?.value?.cooked ?? null : null : null;
}
function Qr(e) {
	let t = Xr(e) && e.type === "ChainExpression" ? e.expression : e;
	if (!Xr(t) || t.type !== "MemberExpression") return !1;
	let n = t.object, r = t.property;
	return !Xr(n) || n.type !== "Identifier" || n.name !== "clip" ? !1 : t.computed === !0 ? Zr(r) === "setParam" : Xr(r) && r.type === "Identifier" && r.name === "setParam";
}
function $r(e) {
	let t;
	try {
		t = Jr(e.source.js, {
			ecmaVersion: "latest",
			allowReturnOutsideFunction: !0,
			allowAwaitOutsideFunction: !0
		});
	} catch {
		throw Error(`Cannot analyze Clip ${e.id}: JavaScript parse error.`);
	}
	let n = [], r = (t) => {
		if (t.type === "CallExpression" && Qr(t.callee)) {
			let r = Array.isArray(t.arguments) ? t.arguments : [], i = Zr(r[0]), a = Zr(r[1]);
			if (!i || !a || r.length !== 3) throw Error(`Clip ${e.id}: clip.setParam requires literal placement ID and key.`);
			n.push({
				sourceId: e.id,
				targetId: i,
				key: a
			});
		}
		for (let e of Object.values(t)) if (Xr(e)) r(e);
		else if (Array.isArray(e)) for (let t of e) Xr(t) && r(t);
	};
	return r(t), n;
}
function ei(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.layers) for (let e of n.clips) {
		if (t.has(e.id)) throw Error(`Duplicate Clip placement ID: ${e.id}`);
		t.set(e.id, e);
	}
	let n = e.layers.flatMap((e) => e.clips.flatMap((e) => e.kind === "html" && !e.instanceOfClipId ? $r(e) : [])), r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = t.get(e.targetId);
		if (!n) throw Error(`Clip ${e.sourceId}: target placement not found: ${e.targetId}`);
		if (n.kind === "html" && n.instanceOfClipId) throw Error(`Clip ${e.sourceId}: HTML instance cannot be a parameter target.`);
		if (n.kind === "wgsl") throw Error(`Clip ${e.sourceId}: WGSL parameter writes are not supported yet.`);
		if (n.kind !== "html" && n.kind !== "shader") throw Error(`Clip ${e.sourceId}: parameter target kind is not supported: ${n.kind}`);
		if (e.sourceId === e.targetId) throw Error(`Clip ${e.sourceId}: self dependency is not allowed; assign clip.${e.key} instead.`);
		let i = n.params[e.key];
		if (!i || i.writable === !1 || i.group !== "custom" || Yr.has(e.key)) throw Error(`Clip ${e.sourceId}: parameter is not writable: ${e.targetId}.${e.key}`);
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
function ti(e, t, n) {
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
function ni(e, t, n, r) {
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
				if (!n || !ti(n, e.key, e.value)) throw Error(`Clip ${t} sent an invalid value for ${e.targetClipId}.${e.key}.`);
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
var ri = /* @__PURE__ */ new WeakMap(), ii = 0;
function ai(e) {
	let t = ri.get(e.recording);
	return t || (t = {
		revision: `feedback-${++ii}`,
		sampler: Be(e.recording)
	}, ri.set(e.recording, t)), t;
}
function oi(e) {
	let { revision: t, sampler: n } = ai(e);
	return {
		assetId: e.id,
		name: e.name,
		revision: t,
		bytes: n.summary.bytes,
		document: n.document
	};
}
var si = /* @__PURE__ */ new Map();
function ci() {
	let e = 0;
	for (let t of si.values()) e += t;
	return e;
}
function li(e, t, n, r) {
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
			if (ci() - (si.get(i) ?? 0) + e > A.maxResourceCloneBytes) throw new j("size-limit", `Clip ${n}: Feedback clone budget exceeded.`);
			t.postMessage(f, "*"), si.set(i, e), l = d;
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
			o || (o = !0, si.delete(i), window.removeEventListener("message", d));
		}
	};
}
//#endregion
//#region src/core/assets.ts
function ui(e, t = []) {
	let n = new Set(t);
	if (n.size !== t.length) throw Error("Clip libraries must be unique asset IDs.");
	for (let t of n) if (!e.some((e) => e.id === t && e.kind === "script" && e.scriptMode === "global")) throw Error(`Clip library ${t} must reference a global Script asset.`);
	return e.filter((e) => e.kind !== "script" || e.scriptMode !== "global" || n.has(e.id));
}
function di(e, t = !1) {
	let n = e.flatMap((e) => {
		let n = fi(e, t);
		return n ? [n] : [];
	}), r = new Map(n.map((e) => [e.id, e])), i = /* @__PURE__ */ new Map();
	for (let e of n) i.set(e.name, [...i.get(e.name) ?? [], e]);
	return {
		feedbackResources: e.filter((e) => e.kind === "feedback").map(oi),
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
function fi(e, t) {
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
		sourceUrl: e.sourceUrl && pi(e.sourceUrl, t) ? e.sourceUrl : void 0,
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
		feedbackRevision: ai(e).revision
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
		sourceUrl: e.sourceUrl && pi(e.sourceUrl, t) ? e.sourceUrl : void 0
	};
}
function pi(e, t = !1) {
	let n = e.trim();
	return n ? t && /^macroflush-asset:\/\/asset\/[a-f0-9]{64}$/.test(n) || n.startsWith("data:") || n.startsWith("blob:") ? !0 : n.startsWith("//") || n.startsWith("/") || n.startsWith("\\") ? !1 : !/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(n) : !1;
}
//#endregion
//#region src/core/audioWaveform.ts
var mi = 2048, hi = 16, gi = 2, _i = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map();
function yi(e, t) {
	let n = _i.get(e);
	if (n?.sourceUrl === t) return n.promise;
	let r = bi(e, t).then(Si).catch((t) => {
		throw _i.get(e)?.promise === r && _i.delete(e), t;
	});
	return _i.delete(e), _i.set(e, {
		sourceUrl: t,
		promise: r
	}), _i.size > hi && _i.delete(_i.keys().next().value), r;
}
function bi(e, t) {
	let n = vi.get(e);
	if (n?.sourceUrl === t) return n.promise;
	let r = xi(t).catch((t) => {
		throw vi.get(e)?.promise === r && vi.delete(e), t;
	});
	return vi.delete(e), vi.set(e, {
		sourceUrl: t,
		promise: r
	}), vi.size > gi && vi.delete(vi.keys().next().value), r;
}
async function xi(e) {
	if (typeof OfflineAudioContext > "u") throw Error("Audio decoding is unavailable.");
	let t = await fetch(e);
	if (!t.ok) throw Error("Unable to load audio for waveform.");
	let n = await new OfflineAudioContext(1, 1, 44100).decodeAudioData(await t.arrayBuffer());
	if (!n.length || !n.duration) throw Error("Audio has no samples.");
	return n;
}
async function Si(e) {
	let t = new Float32Array(mi), n = new Float32Array(mi), r = Array.from({ length: e.numberOfChannels }, (t, n) => e.getChannelData(n)), i = 0, a = 0;
	for (let o = 0; o < mi; o += 1) {
		let s = Math.floor(o * e.length / mi), c = Math.max(s + 1, Math.floor((o + 1) * e.length / mi)), l = 0, u = 0;
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
var Ci = [
	"drums",
	"bass",
	"other",
	"vocals"
], wi = 2048, Ti = 32, Ei = 12e4, Di = 16, Oi = /* @__PURE__ */ new Map(), ki = (e) => /\b(?:audioBand|audioSpectrum|audioPeaks|audioSpectrogram|audioStem|audioStemPeaks|audioStemSpectrogram)\b/.test(e);
function Ai(e) {
	return e.flatMap((e) => e.visible === !1 ? [] : e.clips.flatMap((e) => e.kind === "audio" ? [{
		clipId: e.id,
		assetId: e.assetId,
		inFrame: e.inFrame,
		outFrame: e.outFrame
	}] : []));
}
function ji(e, t, n) {
	let r = `${e}:${n}`, i = Oi.get(r);
	if (i?.sourceUrl === t) return i.promise;
	let a = Promise.all([bi(e, t), yi(e, t)]).then(([e, t]) => Ni(e, t, n)).catch((e) => {
		throw Oi.get(r)?.promise === a && Oi.delete(r), e;
	});
	return Oi.delete(r), Oi.set(r, {
		sourceUrl: t,
		promise: a
	}), Oi.size > Di && Oi.delete(Oi.keys().next().value), a;
}
async function Mi(e, t, n, r = !1) {
	let i = {}, a = {}, o = Ai(t);
	return await Promise.all(e.filter((e) => e.kind === "audio" && !!e.sourceUrl && pi(e.sourceUrl, r)).map(async (e) => {
		try {
			i[e.id] = await ji(e.id, e.sourceUrl, n);
		} catch (t) {
			console.warn(`MacroFlush: audio analysis failed for "${e.name}"`, t);
		}
		let t = (await Promise.all(Ci.flatMap((t) => {
			let i = e.stemSources?.[t];
			return !i || !pi(i, r) ? [] : [ji(`${e.id}:stem:${t}`, i, n).then((e) => [t, e]).catch((n) => (console.warn(`MacroFlush: ${t} stem analysis failed for "${e.name}"`, n), null))];
		}))).filter((e) => e !== null);
		t.length && (a[e.id] = Object.fromEntries(t));
	})), {
		analyses: i,
		stems: a,
		placements: o
	};
}
async function Ni(e, t, n) {
	if (!Number.isFinite(n) || n <= 0) throw Error("Audio analysis requires a positive frame rate.");
	let r = Math.ceil(e.duration * n);
	if (r > Ei) throw Error("Audio is too long for frame-resolution analysis.");
	let i = new Float32Array(r * Ti), a = {
		low: new Float32Array(r),
		mid: new Float32Array(r),
		high: new Float32Array(r)
	}, o = Array.from({ length: e.numberOfChannels }, (t, n) => e.getChannelData(n)), s = new Float32Array(wi), c = new Float32Array(wi), l = Float32Array.from({ length: wi }, (e, t) => .5 - .5 * Math.cos(2 * Math.PI * t / 2047)), u = l.reduce((e, t) => e + t, 0), d = e.sampleRate / 2, f = Math.min(2e4, d), p = Array.from({ length: 1025 }, (t, n) => {
		let r = n * e.sampleRate / wi;
		return r < 20 || r > f ? null : {
			logIndex: Math.min(31, Math.floor(Math.log(r / 20) / Math.log(f / 20) * Ti)),
			band: r < 250 ? "low" : r < 4e3 ? "mid" : "high"
		};
	});
	for (let t = 0; t < r; t += 1) {
		let r = Math.floor(t * e.sampleRate / n), d = !1;
		for (let t = 0; t < wi; t += 1) {
			let n = r + t - wi / 2, i = 0;
			if (n >= 0 && n < e.length) {
				for (let e of o) i += e[n];
				i /= o.length || 1;
			}
			s[t] = i * l[t], i !== 0 && (d = !0);
		}
		if (d) {
			c.fill(0), Pi(s, c);
			let e = {
				low: 0,
				mid: 0,
				high: 0
			};
			for (let n = 1; n < p.length; n += 1) {
				let r = p[n];
				if (!r) continue;
				let a = Math.min(1, 2 * Math.hypot(s[n], c[n]) / u);
				i[t * Ti + r.logIndex] = Math.max(i[t * Ti + r.logIndex], a), e[r.band] += a * a;
			}
			a.low[t] = Math.min(1, Math.sqrt(e.low)), a.mid[t] = Math.min(1, Math.sqrt(e.mid)), a.high[t] = Math.min(1, Math.sqrt(e.high));
		}
		t % 64 == 63 && await new Promise((e) => setTimeout(e, 0));
	}
	return {
		duration: e.duration,
		fps: n,
		bins: Ti,
		buckets: r,
		spectrum: i,
		bands: a,
		peaks: t
	};
}
function Pi(e, t) {
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
function Fi(e) {
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
function Ii(e, t, n) {
	let r = Object.entries(Fi(e)).map(([e, t]) => ({
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
function Li(e) {
	return e && typeof e == "object" && !Array.isArray(e) ? e : {};
}
var Ri = [
	"basic",
	"lambert",
	"phong",
	"standard",
	"physical",
	"toon",
	"normal",
	"matcap"
], zi = {
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
function Bi(e, t) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : t;
}
function Vi(e, t, n) {
	return Math.max(n, Math.min(128, Math.floor(Bi(e, t))));
}
function Hi(e, t = "#ffffff") {
	if (typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215) return `#${e.toString(16).padStart(6, "0")}`;
	if (typeof e != "string") return t;
	let n = e.trim();
	return /^#[\da-f]{6}$/i.test(n) ? n.toLowerCase() : /^#[\da-f]{3}$/i.test(n) ? `#${[...n.slice(1)].map((e) => e + e).join("").toLowerCase()}` : t;
}
function Ui(e) {
	let t = Li(e);
	return t.primitive === "sphere" ? {
		primitive: "sphere",
		radius: Bi(t.radius, 1),
		widthSegments: Vi(t.widthSegments, 32, 3),
		heightSegments: Vi(t.heightSegments, 16, 2)
	} : t.primitive === "plane" ? {
		primitive: "plane",
		width: Bi(t.width, 1),
		height: Bi(t.height, 1)
	} : {
		primitive: "box",
		width: Bi(t.width, 1),
		height: Bi(t.height, 1),
		depth: Bi(t.depth, 1)
	};
}
function Wi(e, t) {
	let n = {
		...Li(e),
		...t
	}, r = typeof n.opacity == "number" && Number.isFinite(n.opacity) ? Math.max(0, Math.min(1, n.opacity)) : 1;
	return {
		type: Ri.includes(n.type) ? n.type : "phong",
		color: Hi(n.color),
		opacity: r,
		wireframe: n.wireframe === !0,
		side: n.side === "double" ? "double" : "front",
		...Object.fromEntries(Object.entries(zi).filter(([e]) => ![
			"color",
			"opacity",
			"wireframe",
			"side"
		].includes(e) && n[e] !== void 0).map(([e, t]) => {
			let r = n[e];
			return [e, t.type === "color" ? Hi(r, String(t.default)) : t.type === "number" ? typeof r == "number" && Number.isFinite(r) ? Math.max(t.min ?? -Infinity, Math.min(t.max ?? Infinity, r)) : t.default : t.type === "boolean" ? r === !0 : typeof r == "string" ? r : ""];
		}))
	};
}
//#endregion
//#region src/core/managedEditorContracts.ts
function Gi(e) {
	if (!e || e.managedAngleCodecVersion !== 1 || e.angleUnit !== "degrees" || "clipFormatVersion" in e || typeof e.compositionId != "string" || !e.composition || !Array.isArray(e.composition.layers) || !Array.isArray(e.assets)) throw Error("Expected an internal degree Editor workspace.");
}
function Ki(e) {
	if (!e || e.managedAngleCodecVersion !== 1 || e.angleUnit !== "degrees" || e.sourceFormatVersion !== 2 || !e.document || "clipFormatVersion" in e || "clipFormatVersion" in e.document || !Array.isArray(e.document.assets) || typeof e.document.rootCompositionId != "string" || e.document.persistentFormatVersion !== void 0 && e.document.persistentFormatVersion !== 3) throw Error("Expected an internal degree Editor document.");
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
function H(e) {
	throw Error(`Invalid MacroFlush project: ${e}`);
}
function $i(e, t = "radians") {
	t !== "radians" && t !== "degrees" && H("Unsupported managed angle unit.");
	let n = new Map(e.map((e) => [e.id, e]));
	for (let r of e) {
		if (!Zi(r) && r.kind !== "geometry-3d" && r.kind !== "material-3d" || ((!r.descriptor || typeof r.descriptor != "object" || Array.isArray(r.descriptor)) && H(`3D asset ${r.id} needs an object descriptor.`), r.kind === "geometry-3d" && r.descriptor.primitive !== void 0 && r.descriptor.primitive !== "box" && r.descriptor.primitive !== "sphere" && r.descriptor.primitive !== "plane" && H(`Geometry asset ${r.id} has an unsupported primitive.`), r.kind === "material-3d" && r.descriptor.type !== void 0 && !Ri.includes(r.descriptor.type) && H(`Material asset ${r.id} has an unsupported material type.`), !Zi(r))) continue;
		if (r.kind === "light-3d") {
			let e = aa(r.descriptor);
			e.lightType !== void 0 && ![
				"directional",
				"point",
				"spot",
				"ambient"
			].includes(String(e.lightType)) && H(`Light asset ${r.id} has an unsupported lightType.`);
			for (let n of [
				"intensity",
				"distance",
				"decay",
				"angle",
				"penumbra"
			]) {
				let i = e[n];
				i !== void 0 && (typeof i == "number" && Number.isFinite(i) && (n === "angle" ? i > 0 && i <= (t === "degrees" ? 90 : Math.PI / 2) : n === "penumbra" ? i >= 0 && i <= 1 : i >= 0) || H(`Light asset ${r.id} has an invalid ${n}.`));
			}
		}
		r.scriptAssetId && n.get(r.scriptAssetId)?.kind !== "script" && H(`3D asset ${r.id} references an unknown script asset ${r.scriptAssetId}.`);
		let e = r.scriptAssetId ? n.get(r.scriptAssetId) : void 0;
		if (e?.kind === "script" && e.mode === "global" && H(`3D asset ${r.id} requires a module Script, not a global library.`), r.kind === "mesh-3d" ? ((!r.geometryAssetId || n.get(r.geometryAssetId)?.kind !== "geometry-3d") && H(`Mesh asset ${r.id} needs a geometry-3d asset.`), (!r.materialAssetId || n.get(r.materialAssetId)?.kind !== "material-3d") && H(`Mesh asset ${r.id} needs a material-3d asset.`)) : (r.geometryAssetId || r.materialAssetId) && H(`Only mesh assets can reference geometry or material (${r.id}).`), r.kind === "model-3d") try {
			Yi(r.format, r.sourceUrl);
		} catch (e) {
			H(`Model asset ${r.id}: ${e instanceof Error ? e.message : String(e)}`);
		}
		if (r.kind === "camera-3d") {
			let e = aa(r.descriptor);
			e.cameraType !== void 0 && e.cameraType !== "perspective" && e.cameraType !== "orthographic" && H(`Camera asset ${r.id} has an unsupported cameraType.`), e.orthoHeight !== void 0 && (typeof e.orthoHeight != "number" || !Number.isFinite(e.orthoHeight) || e.orthoHeight < .001 || e.orthoHeight > 1e5) && H(`Camera asset ${r.id} needs orthoHeight from 0.001 through 100000.`);
		}
	}
}
function ea(e, t) {
	let n = new Map(t.map((e) => [e.id, e])), r = /* @__PURE__ */ new Map();
	for (let t of e.layers) for (let e of t.clips) r.set(e.id, e);
	let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = (e) => {
		if (a.has(e.id) && H(`3D parent cycle detected from placement ${e.id}.`), i.has(e.id)) return;
		a.add(e.id);
		let t = n.get(e.assetId);
		(!t || !Xi.has(t.kind)) && H(`3D placement ${e.id} needs a 3D object asset.`), e.maskClipId && H(`3D placement ${e.id} cannot have an alpha mask.`);
		let s = r.get(e.targetClipId);
		if ((s?.kind !== "html" || !Qi(s) || s.instanceOfClipId) && H(`3D placement ${e.id} needs a centi3d HTML Clip placement as its target.`), e.parentPlacementId) {
			let t = r.get(e.parentPlacementId);
			t?.kind !== "object-3d" && H(`3D placement ${e.id} has an unknown parent placement.`), t.targetClipId !== e.targetClipId && H(`3D placement ${e.id} has a parent in another scene.`), o(t);
		}
		if (e.aimTargetPlacementId) {
			t.kind !== "camera-3d" && H(`Only Camera placement ${e.id} can have an Aim target.`);
			let n = r.get(e.aimTargetPlacementId);
			(n?.kind !== "object-3d" || n.targetClipId !== e.targetClipId) && H(`Camera placement ${e.id} has an Aim target outside its 3D scene.`), o(n);
		}
		e.cameraTransition && (t.kind !== "camera-3d" || ![
			"cut",
			"dissolve",
			"transform"
		].includes(e.cameraTransition.type) || !Number.isInteger(e.cameraTransition.durationFrames) || e.cameraTransition.durationFrames < (e.cameraTransition.type === "cut" ? 0 : 1) || e.cameraTransition.durationFrames > (e.cameraTransition.type === "cut" ? 0 : 120)) && H(`Camera placement ${e.id} has an invalid transition.`), a.delete(e.id), i.add(e.id);
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
function oa(e, t, n, r, i) {
	let a = new Map(t.map((e) => [e.id, e])), o = [], s = /* @__PURE__ */ new Set();
	for (let t of na(e, n, r)) {
		let e = a.get(t.assetId);
		if (e?.kind !== "null-3d" && e?.kind !== "light-3d" && e?.kind !== "camera-3d" && e?.kind !== "mesh-3d" && e?.kind !== "model-3d" || t.parentPlacementId && !s.has(t.parentPlacementId)) continue;
		let n = aa(e.descriptor);
		if (e.kind === "light-3d" && n.lightType !== void 0 && ![
			"directional",
			"point",
			"spot",
			"ambient"
		].includes(String(n.lightType)) || e.kind === "camera-3d" && n.cameraType !== void 0 && n.cameraType !== "perspective" && n.cameraType !== "orthographic") continue;
		let c = aa(n.transform), l = de(t.params, t.keyframeTracks, r - t.inFrame), u = ra(l.position ?? c.position, e.kind === "camera-3d" ? [
			0,
			0,
			367
		] : [
			0,
			0,
			0
		]), d = ra(l.rotation ?? c.rotation, [
			0,
			0,
			0
		]), f = ra(l.scale ?? c.scale, [
			1,
			1,
			1
		]), p = {
			id: t.id,
			...t.parentPlacementId ? { parentPlacementId: t.parentPlacementId } : {},
			kind: e.kind,
			position: u,
			rotation: d,
			scale: f,
			placementFrame: r - t.inFrame,
			...e.kind === "model-3d" ? { modelAssetId: e.id } : {},
			...e.scriptAssetId ? { scriptAssetId: e.scriptAssetId } : {}
		};
		if (e.kind === "light-3d") {
			let e = l.lightType ?? n.lightType;
			p.lightType = e === "point" || e === "spot" || e === "ambient" ? e : "directional";
			let t = l.color ?? n.color;
			p.color = typeof t == "string" || typeof t == "number" ? t : "#ffffff";
			let r = l.intensity ?? n.intensity;
			if (p.intensity = typeof r == "number" && Number.isFinite(r) && r >= 0 ? r : 1, p.lightType === "point" || p.lightType === "spot") {
				let e = l.distance ?? n.distance, t = l.decay ?? n.decay;
				p.distance = typeof e == "number" && Number.isFinite(e) && e >= 0 ? e : 0, p.decay = typeof t == "number" && Number.isFinite(t) && t >= 0 ? t : 2;
			}
			if (p.lightType === "spot") {
				let e = l.angle ?? n.angle, t = l.penumbra ?? n.penumbra;
				p.angle = i === "degrees" ? typeof e == "number" && Number.isFinite(e) ? e : 1.0472 * 180 / Math.PI : typeof e == "number" && Number.isFinite(e) && e > 0 && e <= Math.PI / 2 ? e : 1.0472, p.penumbra = typeof t == "number" && Number.isFinite(t) && t >= 0 && t <= 1 ? t : 0;
			}
		} else if (e.kind === "camera-3d") {
			p.cameraType = (l.cameraType ?? n.cameraType) === "orthographic" ? "orthographic" : "perspective";
			let e = l.orthoHeight ?? n.orthoHeight;
			p.orthoHeight = typeof e == "number" && Number.isFinite(e) && e >= .001 && e <= 1e5 ? e : 405;
			let r = l.fov ?? n.fov, i = l.near ?? n.near, a = l.far ?? n.far;
			p.fov = typeof r == "number" && r > 0 && r < 180 ? r : 60, p.near = typeof i == "number" && Number.isFinite(i) && i > 0 ? i : 1, p.far = typeof a == "number" && Number.isFinite(a) && a > p.near ? a : Math.max(1e5, p.near + 1);
			let o = ia(l.aimTarget ?? n.aimTarget), s = l.aimMode ?? n.aimMode ?? (o ? "aim" : "rotation");
			s === "aim" && o && (p.aimTarget = o), s === "placement" && t.aimTargetPlacementId && (p.aimTargetPlacementId = t.aimTargetPlacementId);
		} else if (e.kind === "model-3d") {
			let e = Wi(void 0, l);
			p.modelMaterialOverrides = Object.fromEntries(["type", ...Object.keys(zi)].filter((e) => l[e] !== void 0 && (e !== "type" || l[e] !== "")).map((t) => [t, e[t]]));
		} else if (e.kind === "mesh-3d") {
			let t = a.get(e.geometryAssetId ?? ""), n = a.get(e.materialAssetId ?? "");
			if (t?.kind !== "geometry-3d" || n?.kind !== "material-3d") continue;
			p.geometry = Ui(t.descriptor), p.material = Wi(n.descriptor, Object.fromEntries(["type", ...Object.keys(zi)].filter((e) => l[e] !== void 0).map((e) => [e, l[e]])));
		}
		o.push(p), s.add(t.id);
	}
	for (let e of o) e.aimTargetPlacementId && !s.has(e.aimTargetPlacementId) && delete e.aimTargetPlacementId;
	return o;
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
function ua(e, t, n, r) {
	let i = la.get(e.layers);
	i || la.set(e.layers, i = /* @__PURE__ */ new WeakMap());
	let a = i.get(t);
	a || i.set(t, a = /* @__PURE__ */ new Map());
	let o = `${r}:${n}`, s = a.get(o);
	if (!s || s.durationFrames !== e.durationFrames) {
		let r = e.layers.flatMap((e) => e.clips).filter((e) => e.kind === "object-3d" && e.targetClipId === n), i = new Set(t.filter((e) => e.kind === "camera-3d").map((e) => e.id)), c = r.some((e) => i.has(e.assetId) && (e.cameraTransition?.type === "dissolve" || e.cameraTransition?.type === "transform"));
		s = {
			durationFrames: e.durationFrames,
			clips: new Map(r.map((e) => [e.id, e])),
			boundaries: c ? [...new Set(r.flatMap((e) => [e.inFrame, e.outFrame]))].filter((e) => e > 0).sort((e, t) => t - e) : [],
			snapshots: /* @__PURE__ */ new Map()
		}, a.set(o, s);
	}
	return s;
}
function da(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + Math.floor((r - n) / 2);
		e[i] > t ? n = i + 1 : r = i;
	}
	return n;
}
function fa(e, t, n, r, i, a) {
	if (r <= 0) return;
	let o = ua(e, t, n, a);
	for (let s = da(o.boundaries, r); s < o.boundaries.length; s++) {
		let c = o.boundaries[s];
		if (c <= r - 120) break;
		let l = o.snapshots.get(c);
		if (!l) {
			let r = oa(e, t, n, c - 1, a), i = oa(e, t, n, c, a), s = sa(e, r);
			l = {
				fromCameraId: s,
				toCameraId: sa(e, i),
				fromObjects: s ? ca(r, s) : []
			}, o.snapshots.set(c, l);
		}
		let { fromCameraId: u, toCameraId: d } = l;
		if (u === d) continue;
		if (d !== i) return;
		let f = d ? o.clips.get(d)?.cameraTransition : o.clips.get(u ?? "")?.cameraTransition;
		return f?.type !== "dissolve" && f?.type !== "transform" || r >= c + f.durationFrames || f.type === "transform" && (!u || !d) ? void 0 : {
			type: f.type,
			boundaryFrame: c,
			fromCameraId: u,
			fromObjects: l.fromObjects,
			progress: (r - c + 1) / f.durationFrames
		};
	}
}
function pa(e, t, n) {
	Gi(e);
	let r = oa(e.composition, e.assets, t, n, "degrees"), i = sa(e.composition, r), a = fa(e.composition, e.assets, t, n, i, "degrees");
	return {
		managedAngleCodecVersion: 1,
		angleUnit: "degrees",
		objects: r,
		cameraId: i,
		...a ? { cameraTransition: a } : {}
	};
}
function ma(e, t, n) {
	if (Gi(t), e.threeDObjects !== void 0 || e.threeDCameraId !== void 0 || e.threeDCameraTransition !== void 0) throw Error("A 3D tick cannot mix legacy and managed snapshots.");
	return Qi(n) ? {
		...e,
		managedThreeDScene: pa(t, n.id, e.compFrame)
	} : e;
}
//#endregion
//#region src/core/libraryValidation.ts
function ha(e) {
	if (!e || typeof e != "object" || typeof e.sha256 != "string" || !/^[a-f0-9]{64}$/.test(e.sha256) || !Number.isSafeInteger(e.bytes) || e.bytes < 0 || e.bytes > 67108864 || typeof e.fetchedAt != "string" || e.fetchedAt.length > 64 || !Number.isFinite(Date.parse(e.fetchedAt))) throw Error("Invalid library provenance.");
	for (let t of [e.url, e.finalUrl]) {
		if (typeof t != "string" || t.length > 8192) throw Error("Invalid library provenance URL.");
		let e = new URL(t);
		if (e.protocol !== "https:" || e.username || e.password) throw Error("Invalid library provenance URL.");
	}
}
function ga(e, t) {
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
function _a(e) {
	if (!Number.isFinite(e)) throw Error("P5 replay requires a finite local frame.");
	let t = Math.floor(Math.max(0, e) + 1e-9);
	if (!Number.isSafeInteger(t)) throw Error("P5 replay frame exceeds the safe integer range.");
	return t;
}
//#endregion
//#region src/core/p5ReplayLimits.ts
var va = Object.freeze({
	maxDraws: 1200,
	maxCpuMs: 5e3
}), ya = Object.freeze({
	maxDraws: 6e3,
	maxCpuMs: 3e4
});
function ba(e, t) {
	if (e !== void 0) {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`P5 replay ${t}: p5ReplayLimits must be an object.`);
		for (let n of ["maxDraws", "maxCpuMs"]) {
			let r = e[n];
			if (r !== void 0 && (typeof r != "number" || !Number.isInteger(r) || r < 1 || r > ya[n])) throw Error(`P5 replay ${t}: p5ReplayLimits.${n} must be an integer from 1 to ${ya[n]}; received ${String(r)}.`);
		}
	}
}
function xa(e) {
	if (e.p5Playback !== void 0 && e.p5Playback !== "timeline" && e.p5Playback !== "isolated-replay") throw Error(`P5 replay ${e.id}: unsupported p5Playback ${String(e.p5Playback)}.`);
	ba(e.p5ReplayLimits, e.id);
}
function Sa(e) {
	ba(e.p5ReplayLimits, e.id);
	let t = e.p5ReplayLimits?.maxCpuMs ?? va.maxCpuMs;
	return {
		maxDrawsPerReset: e.p5ReplayLimits?.maxDraws ?? va.maxDraws,
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
function Ca(e) {
	let t = Ra(e);
	if (t !== 1 && t !== 2) throw Error("Unsupported MacroFlush project format.");
	let n = wa(t === 1 ? Da(e) : Ha(e));
	return Ea(n), n;
}
function wa(e) {
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
function Ta(e, t) {
	let n = e.assets.find((e) => e.kind === "composition" && e.id === t);
	if (!n) throw Error(`Composition asset not found: ${t}`);
	return n;
}
function Ea(e) {
	(!za(e) || e.clipFormatVersion !== 2) && U("Expected clipFormatVersion 2."), Ba(e.rootCompositionId) || U("rootCompositionId is required."), Array.isArray(e.assets) || U("assets must be an array."), za(e.remoteAssetPolicy) || U("remoteAssetPolicy is required.");
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e.assets) (!za(r) || !Ba(r.id) || !Ba(r.kind)) && U("Every asset needs a non-empty id and kind."), t.has(r.id) && U(`Duplicate asset id: ${r.id}`), t.add(r.id), r.kind === "composition" ? (Na(r.composition) || U(`Composition asset ${r.id} has no valid document.`), n.set(r.id, r)) : r.kind === "html-clip" ? ((!za(r.htmlTemplate) || r.htmlTemplate.kind !== "html") && U(`HTML asset ${r.id} has no valid template.`), xa(r.htmlTemplate)) : r.kind === "wgsl-clip" ? (!za(r.wgslTemplate) || r.wgslTemplate.kind !== "wgsl") && U(`WGSL asset ${r.id} has no valid template.`) : r.kind === "shader-clip" ? ((!za(r.shaderTemplate) || r.shaderTemplate.kind !== "shader") && U(`Shader asset ${r.id} has no valid template.`), _t(r.shaderTemplate)) : r.kind === "font" ? Ba(r.fontFamily) || U(`Font asset ${r.id} has no font family.`) : r.kind === "data" ? (!("value" in r) || r.value === void 0) && U(`Data asset ${r.id} has no value.`) : r.kind === "feedback" ? r.recording === void 0 && U(`Feedback asset ${r.id} has no recording.`) : r.kind === "script" ? (typeof r.source != "string" && U(`Script asset ${r.id} has no source.`), r.mode !== void 0 && r.mode !== "module" && r.mode !== "global" && U(`Invalid Script mode on ${r.id}.`), r.origin !== void 0 && ha(r.origin)) : r.kind !== "image" && r.kind !== "video" && r.kind !== "audio" && r.kind !== "camera-3d" && r.kind !== "light-3d" && r.kind !== "null-3d" && r.kind !== "mesh-3d" && r.kind !== "model-3d" && r.kind !== "geometry-3d" && r.kind !== "material-3d" && U(`Unknown asset kind on ${r.id}: ${String(r.kind)}`);
	$i(e.assets), Ie(e.assets);
	for (let t of e.assets) t.kind === "html-clip" && ga(t.htmlTemplate, e.assets);
	n.has(e.rootCompositionId) || U(`Root composition does not exist: ${e.rootCompositionId}`);
	let r = /* @__PURE__ */ new Map();
	for (let [i, a] of n) {
		let o = a.composition, s = /* @__PURE__ */ new Set(), c = [];
		for (let r of o.layers) {
			(!za(r) || !Ba(r.id) || !Array.isArray(r.clips)) && U(`Composition ${i} contains an invalid layer.`), r.kind !== void 0 && r.kind !== "chromium" && r.kind !== "wgsl" && r.kind !== "effect" && U(`Layer ${r.id} has an invalid kind.`);
			for (let a of r.clips) Aa(a, i, s, t, n, c), a.kind === "html" && ga(a, e.assets), a.kind === "shader" && !e.assets.some((e) => e.id === a.assetId && e.kind === "shader-clip") && U(`Shader clip ${a.id} must reference a shader asset.`), (r.kind ?? "chromium") === "wgsl" != (a.kind === "wgsl") && U(`Layer ${r.id} cannot contain ${a.kind} clips.`);
		}
		rt(o.layers);
		for (let e of o.layers) for (let t of e.clips) {
			t.maskClipId && !o.layers.some((e) => e.clips.some((e) => e.id === t.maskClipId)) && U(`Clip ${t.id} references unknown mask clip ${t.maskClipId}.`), Ze(o.layers, t.id, t.maskClipId) && U(`Mask cycle detected from clip ${t.id}.`);
			let e = t.instanceOfClipId;
			if (e !== void 0 && !Ba(e) && U(`Clip ${t.id} has an invalid instance clip reference.`), typeof e == "string") {
				t.kind !== "html" && U(`Only HTML clips can be instances (${t.id}).`);
				let n = o.layers.flatMap((e) => e.clips).find((t) => t.id === e);
				n || U(`Clip ${t.id} references unknown instance clip ${e}.`), n.kind !== "html" && U(`Clip ${t.id} must instance an HTML clip.`), n.instanceOfClipId && U(`Clip ${t.id} cannot instance another instance.`), Qe(o.layers, t.id, e) && U(`Instance cycle detected from clip ${t.id}.`);
			}
		}
		ea(o, e.assets), r.set(i, c);
	}
	Ma(r);
}
function Da(e) {
	ka(e);
	let t = Ha(e), n = Pa(t), r = t.assets.find((e) => e.kind === "composition" && e.composition && Fa(e.composition, n))?.id ?? Ia(t.assets), i = !1, a = t.assets.map((e) => {
		if (e.kind === "html-clip" && !e.htmlTemplate) {
			let t = n.layers.flatMap((e) => e.clips).find((t) => t.kind === "html" && (t.id === e.clipId || t.assetId === e.id));
			return (!t || t.kind !== "html") && U(`HTML asset ${e.id} has no reusable template.`), {
				...e,
				htmlTemplate: Ha(t)
			};
		}
		if (e.kind === "wgsl-clip" && !e.wgslTemplate) {
			let t = n.layers.flatMap((e) => e.clips).find((t) => t.kind === "wgsl" && (t.id === e.clipId || t.assetId === e.id));
			return (!t || t.kind !== "wgsl") && U(`WGSL asset ${e.id} has no reusable template.`), {
				...e,
				wgslTemplate: Ha(t)
			};
		}
		return e.kind === "composition" ? e.id === r ? (i = !0, {
			...e,
			composition: n,
			detail: La(n)
		}) : e.composition ? e : {
			...e,
			composition: {
				...n,
				layers: []
			},
			detail: e.detail || La(n)
		} : e;
	});
	return i || a.unshift({
		id: r,
		name: "MainComposition",
		kind: "composition",
		detail: La(n),
		composition: n
	}), {
		clipFormatVersion: 2,
		rootCompositionId: r,
		assets: a,
		remoteAssetPolicy: t.remoteAssetPolicy
	};
}
function Oa(e) {
	let t = e.assets.find((t) => t.kind === "composition" && t.id === e.rootCompositionId);
	t || U(`Root composition does not exist: ${e.rootCompositionId}`);
	let n = [t, ...e.assets.filter((e) => e.id !== t.id)];
	return {
		clipFormatVersion: 1,
		...Ha(t.composition),
		assets: Ha(n),
		remoteAssetPolicy: Ha(e.remoteAssetPolicy)
	};
}
function ka(e) {
	(!za(e) || e.clipFormatVersion !== 1) && U("Expected a V1 MacroFlush project.");
	for (let t of [
		"width",
		"height",
		"fps",
		"bpm",
		"durationFrames"
	]) Va(e[t]) || U(`${t} must be a positive number.`);
	(!Array.isArray(e.layers) || !Array.isArray(e.assets) || !za(e.remoteAssetPolicy)) && U("Project layers, assets, or remote asset policy are invalid.");
}
function Aa(e, t, n, r, i, a) {
	(!za(e) || !Ba(e.id) || !Ba(e.kind)) && U(`Composition ${t} contains an invalid clip.`), n.has(e.id) && U(`Duplicate clip id ${e.id} in composition ${t}.`), n.add(e.id), (!Number.isFinite(e.inFrame) || !Number.isFinite(e.outFrame) || e.inFrame < 0 || e.outFrame <= e.inFrame) && U(`Clip ${e.id} has an invalid in/out range.`), "assetId" in e && e.assetId && !r.has(e.assetId) && U(`Clip ${e.id} references unknown asset ${e.assetId}.`), "maskClipId" in e && e.maskClipId !== void 0 && !Ba(e.maskClipId) && U(`Clip ${e.id} has an invalid mask clip reference.`), e.kind === "composition-ref" && (i.has(e.assetId) || U(`Clip ${e.id} does not reference a composition asset.`), a.push(e.assetId)), e.kind === "html" && xa(e), e.kind === "wgsl" && typeof e.source != "string" && U(`WGSL clip ${e.id} has no source.`), e.kind === "shader" && (e.maskClipId && U(`Shader clip ${e.id} cannot have a mask.`), _t(e)), e.kind === "wgsl" && "paramLayout" in e && e.paramLayout !== void 0 && ja(e.id, e.paramLayout), e.kind !== "html" && e.kind !== "image" && e.kind !== "video" && e.kind !== "audio" && e.kind !== "composition-ref" && e.kind !== "wgsl" && e.kind !== "object-3d" && e.kind !== "shader" && U(`Clip ${e.id} has an unknown kind.`);
}
function ja(e, t) {
	za(t) || U(`WGSL clip ${e} has an invalid parameter layout.`);
	let n = /* @__PURE__ */ new Set();
	for (let [r, i] of Object.entries(t)) {
		za(i) || U(`WGSL clip ${e} has an invalid parameter slot for ${r}.`);
		let t = i.slot, a = i.componentCount;
		(typeof t != "number" || typeof a != "number" || !Number.isInteger(t) || !Number.isInteger(a) || t < 0 || ![
			1,
			2,
			4
		].includes(a) || t + a > 16) && U(`WGSL clip ${e} has an invalid parameter slot for ${r}.`);
		for (let r = t; r < t + a; r += 1) n.has(r) && U(`WGSL clip ${e} has overlapping parameter slots.`), n.add(r);
	}
}
function Ma(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = (i, a) => {
		if (t.has(i) && U(`Composition cycle detected: ${[...a, i].join(" -> ")}`), !n.has(i)) {
			t.add(i);
			for (let t of e.get(i) ?? []) r(t, [...a, i]);
			t.delete(i), n.add(i);
		}
	};
	for (let t of e.keys()) r(t, []);
}
function Na(e) {
	return za(e) ? Va(e.width) && Va(e.height) && Va(e.fps) && Va(e.bpm) && Va(e.durationFrames) && (e.parameters === void 0 || za(e.parameters)) && (e.parameterKeyframeTracks === void 0 || za(e.parameterKeyframeTracks)) && (e.cueScript === void 0 || typeof e.cueScript == "string") && Array.isArray(e.layers) : !1;
}
function Pa(e) {
	return {
		width: e.width,
		height: e.height,
		fps: e.fps,
		bpm: e.bpm,
		durationFrames: e.durationFrames,
		...e.parameters ? { parameters: Ha(e.parameters) } : {},
		...e.parameterKeyframeTracks ? { parameterKeyframeTracks: Ha(e.parameterKeyframeTracks) } : {},
		...e.cues ? { cues: Ha(e.cues) } : {},
		...e.cueScript ? { cueScript: e.cueScript } : {},
		layers: Ha(e.layers)
	};
}
function Fa(e, t) {
	return JSON.stringify(e) === JSON.stringify(t);
}
function Ia(e) {
	let t = new Set(e.map((e) => e.id));
	if (!t.has("composition-root")) return "composition-root";
	let n = 2;
	for (; t.has(`composition-root-${n}`);) n += 1;
	return `composition-root-${n}`;
}
function La(e) {
	return `${e.width} x ${e.height}, ${e.fps} fps`;
}
function Ra(e) {
	return za(e) && typeof e.clipFormatVersion == "number" ? e.clipFormatVersion : null;
}
function za(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ba(e) {
	return typeof e == "string" && e.trim().length > 0;
}
function Va(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0;
}
function Ha(e) {
	return structuredClone(e);
}
function U(e) {
	throw Error(`Invalid MacroFlush project: ${e}`);
}
//#endregion
//#region src/core/sceneGraph.ts
function Ua(e, t) {
	return e.kind !== "html-clip" || !e.htmlTemplate.capabilities?.includes("p5") || e.htmlTemplate.p5Playback !== "isolated-replay" || !Object.keys(t.clip ?? {}).length ? null : /* @__PURE__ */ Error(`P5 replay runtime:${t.id} (${e.name}): object.clip writes are unsupported in isolated replay; use timeline mode.`);
}
var Wa = 64;
function Ga(e) {
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
function Ka(e, t) {
	let n = new Map(e);
	if (t.type === "remove") {
		let e = /* @__PURE__ */ new Set([t.id]);
		for (let t = !0; t;) {
			t = !1;
			for (let r of n.values()) r.parentId && e.has(r.parentId) && !e.has(r.id) && (e.add(r.id), t = !0);
		}
		for (let t of e) n.delete(t);
	} else {
		let e = qa(t.object);
		(e.parentId === e.id || no(n, e.id, e.parentId, "parentId")) && delete e.parentId, (e.maskId === e.id || no(n, e.id, e.maskId, "maskId")) && delete e.maskId, (e.instanceOfId === e.id || no(n, e.id, e.instanceOfId, "instanceOfId")) && delete e.instanceOfId, e.instanceOfId && n.get(e.instanceOfId)?.instanceOfId && delete e.instanceOfId, n.set(e.id, e);
	}
	return n;
}
function qa(e) {
	return {
		id: e.id,
		assetId: e.assetId,
		x: $a(e.x, 0),
		y: $a(e.y, 0),
		scale: $a(e.scale, 1),
		rotation: $a(e.rotation, 0),
		opacity: Math.max(0, Math.min(1, $a(e.opacity, 1))),
		visible: e.visible !== !1,
		volume: Math.max(0, Math.min(1, $a(e.volume, 1))),
		clip: eo(e.clip) ? { ...e.clip } : {},
		zIndex: $a(e.zIndex, 0),
		width: Ja(e.width),
		height: Ja(e.height),
		anchorPoint: e.anchorPoint ? to(e.anchorPoint, [0, 0]) : void 0,
		blendMode: typeof e.blendMode == "string" ? e.blendMode : "normal",
		parentId: typeof e.parentId == "string" ? e.parentId : void 0,
		maskId: typeof e.maskId == "string" ? e.maskId : void 0,
		instanceOfId: typeof e.instanceOfId == "string" ? e.instanceOfId : void 0
	};
}
function Ja(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
}
function Ya(e, t, n, r) {
	let i = Ua(e, t);
	if (i) throw i;
	let a = e.kind === "html-clip" ? e.htmlTemplate : null, o = e.kind === "html-clip" && r ? r : a?.params ?? {}, s = e.kind === "composition" ? [e.composition.width, e.composition.height] : Qa(o), c = structuredClone(o);
	Za(c, "position", [t.x, t.y]), Za(c, "scale", [t.scale, t.scale]), Za(c, "rotation", t.rotation), Za(c, "opacity", t.opacity), Za(c, "size", s), Za(c, "anchorPoint", t.anchorPoint ?? [s[0] / 2, s[1] / 2]), Za(c, "blendMode", t.blendMode ?? "normal");
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
function Xa(e) {
	let t = Qa(e.params), n = {
		...e,
		params: structuredClone(e.params),
		keyframeTracks: {}
	};
	return Za(n.params, "position", [0, 0]), Za(n.params, "anchorPoint", [t[0] / 2, t[1] / 2]), Za(n.params, "scale", [1, 1]), Za(n.params, "rotation", 0), Za(n.params, "opacity", 1), Za(n.params, "blendMode", "normal"), {
		contentClip: n,
		size: t
	};
}
function Za(e, t, n) {
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
function Qa(e) {
	let t = e.size?.value;
	return Array.isArray(t) ? [Number(t[0]) || 640, Number(t[1]) || 360] : [640, 360];
}
function $a(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function eo(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function to(e, t) {
	return Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1])) ? [Number(e[0]), Number(e[1])] : t;
}
function no(e, t, n, r) {
	let i = n, a = /* @__PURE__ */ new Set(), o = 0;
	for (; i;) {
		if (o++ >= Wa) return console.warn(`MacroFlush rejected ${r} for display object ${t}: maximum scene graph depth is ${Wa}.`), !0;
		if (i === t || a.has(i)) return !0;
		a.add(i), i = e.get(i)?.[r];
	}
	return !1;
}
//#endregion
//#region node_modules/parse5/dist/common/unicode.js
var ro = /* @__PURE__ */ new Set([
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
]), W;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(W ||= {});
var io = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function ao(e) {
	return e >= 55296 && e <= 57343;
}
function oo(e) {
	return e >= 56320 && e <= 57343;
}
function so(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function co(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function lo(e) {
	return e >= 64976 && e <= 65007 || ro.has(e);
}
//#endregion
//#region node_modules/parse5/dist/common/error-codes.js
var G;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(G ||= {});
//#endregion
//#region node_modules/parse5/dist/tokenizer/preprocessor.js
var uo = 65536, fo = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = uo, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
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
			if (oo(t)) return this.pos++, this._addGap(), so(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, W.EOF;
		return this._err(G.surrogateInInputStream), e;
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
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, W.EOF;
		let n = this.html.charCodeAt(t);
		return n === W.CARRIAGE_RETURN ? W.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, W.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === W.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, W.LINE_FEED) : e === W.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ao(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === W.LINE_FEED || e === W.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		co(e) ? this._err(G.controlCharacterInInputStream) : lo(e) && this._err(G.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, K;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(K ||= {});
function po(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
//#endregion
//#region node_modules/entities/dist/decode-codepoint.js
var mo = [
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
function ho(e) {
	return e === 0 || e >= 55296 && e <= 57343 || e > 1114111;
}
function go(e) {
	return ho(e) ? 65533 : e >= 128 && e <= 159 && mo[e - 128] || e;
}
function _o(e) {
	return ho(e) ? 65533 : e;
}
//#endregion
//#region node_modules/entities/dist/internal/decode-shared.js
var vo = /* #__PURE__ */ (() => {
	let e = /* @__PURE__ */ new Uint8Array(127), t = 0;
	for (let n = 33; n <= 126; n++) n !== 34 && n !== 36 && n !== 92 && (e[n] = t++);
	return e;
})();
function yo(e, t, n, r, i, a) {
	let o = e.length, s = a * 90, c = 0, l = () => {
		let t = vo[e.charCodeAt(c++)];
		return t < a ? t : t * 91 - s + vo[e.charCodeAt(c++)];
	}, u = n - r, d = n + i, f = new Int32Array(d);
	f.fill(-1, r, a), f.fill(-1, a + u, d);
	let p = new Int32Array(d), m = new Int32Array(d);
	function h(t, n) {
		let r = 0, i = n, a = n + t;
		for (; i < a;) {
			let t = vo[e.charCodeAt(c++)];
			if (t < 89) r += t, f[i++] = r;
			else if (t === 89) {
				let t = vo[e.charCodeAt(c++)] + 2;
				for (; t--;) f[i++] = ++r;
			} else {
				let t = vo[e.charCodeAt(c++)];
				r += 89 + (t < 90 ? t * 91 + vo[e.charCodeAt(c++)] : vo[e.charCodeAt(c++)] * 8281 + vo[e.charCodeAt(c++)] * 91 + vo[e.charCodeAt(c++)]), f[i++] = r;
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
		let t = vo[e.charCodeAt(c++)];
		t >= a && (t = t * 91 - s + vo[e.charCodeAt(c++)]);
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
var bo = /* #__PURE__ */ yo("!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P", 13494, 2713, 49, 25, 61), xo = /* #__PURE__ */ new Uint16Array([
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
]), So;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.FLAG13 = 8192] = "FLAG13", e[e.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE", e[e.VALUE_MASK = 8191] = "VALUE_MASK";
})(So ||= {});
//#endregion
//#region node_modules/entities/dist/decode.js
var Co;
(function(e) {
	e[e.AMP = 38] = "AMP", e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_X = 120] = "LOWER_X";
})(Co ||= {});
var wo = 32;
function To(e) {
	return e - Co.ZERO >>> 0 <= 9;
}
function Eo(e) {
	return (e | wo) - Co.LOWER_A >>> 0 <= 5;
}
function Do(e) {
	return (e | wo) - Co.LOWER_A >>> 0 <= 25;
}
function Oo(e) {
	return e === Co.EQUALS || Do(e) || To(e);
}
var ko;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(ko ||= {});
var Ao;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Ao ||= {});
var jo = class {
	decodeTree;
	emitCodePoint;
	errors;
	state = ko.EntityStart;
	consumed = 1;
	result = 0;
	treeIndex = 0;
	excess = 1;
	decodeMode = Ao.Strict;
	runConsumed = 0;
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = ko.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
	}
	write(e, t) {
		switch (this.state) {
			case ko.EntityStart: return e.charCodeAt(t) === Co.NUM ? (this.state = ko.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = ko.NamedEntity, this.stateNamedEntity(e, t));
			case ko.NumericStart: return this.stateNumericStart(e, t);
			case ko.NumericDecimal: return this.stateNumericDecimal(e, t);
			case ko.NumericHex: return this.stateNumericHex(e, t);
			default: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | wo) === Co.LOWER_X ? (this.state = ko.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = ko.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	stateNumericHex(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t);
			if (To(n) || Eo(n)) {
				let e = n <= Co.NINE ? n - Co.ZERO : (n | wo) - Co.LOWER_A + 10;
				r = r * 16 + e, i += 1, t += 1;
			} else return this.result = r, this.consumed = i, this.emitNumericEntity(n, 3);
		}
		return this.result = r, this.consumed = i, -1;
	}
	stateNumericDecimal(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t) - Co.ZERO;
			if (n >>> 0 > 9) return this.result = r, this.consumed = i, this.emitNumericEntity(n + Co.ZERO, 2);
			r = r * 10 + n, i += 1, t += 1;
		}
		return this.result = r, this.consumed = i, -1;
	}
	emitNumericEntity(e, t) {
		if (this.consumed <= t) return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === Co.SEMI) this.consumed += 1;
		else if (this.decodeMode === Ao.Strict) return 0;
		return this.emitCodePoint((this.decodeTree === xo ? _o : go)(this.result), this.consumed), this.errors && (e !== Co.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	flushAndEmitLegacyOrReject(e, t, n, r) {
		return this.consumed = e, this.excess = t, this.result === 0 || this.decodeMode === Ao.Attribute && (r === 0 || t > 1 || Oo(n)) ? 0 : this.emitNotTerminatedNamedEntity();
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = e.length, i = this.decodeMode === Ao.Strict, { treeIndex: a } = this, { excess: o } = this, { consumed: s } = this, c = n[a];
		for (; t < r;) {
			for (; (c & (So.VALUE_LENGTH | So.FLAG13)) === 0 && (c & So.JUMP_TABLE) !== 0;) {
				let i = e.charCodeAt(t), l = c & So.JUMP_TABLE, u = (c & So.BRANCH_LENGTH) >> 7;
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
			if ((c & (So.VALUE_LENGTH | So.FLAG13)) === So.FLAG13) {
				let i = (c & So.BRANCH_LENGTH) >> 7, { runConsumed: l } = this;
				if (l === 0) {
					let n = e.charCodeAt(t);
					if (n !== (c & So.JUMP_TABLE)) return this.flushAndEmitLegacyOrReject(s, o, n, 0);
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
				if (!i && (c & So.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), u === Co.SEMI) return this.emitNamedEntityData(a, l, s + o);
				if (l === 1) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			}
			let d = Mo(n, c, a + (l || 1), u);
			if (d < 0) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			a = d, c = n[a], t += 1, o += 1;
		}
		return !i && c >>> 14 && (c & So.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), this.treeIndex = a, this.excess = o, this.consumed = s, -1;
	}
	emitNotTerminatedNamedEntity() {
		let { result: e, decodeTree: t } = this, n = t[e] >>> 14;
		return this.emitNamedEntityData(e, n, this.consumed), this.errors?.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & So.VALUE_MASK : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		switch (this.state) {
			case ko.NamedEntity: return this.result !== 0 && (this.decodeMode !== Ao.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case ko.NumericDecimal: return this.emitNumericEntity(0, 2);
			case ko.NumericHex: return this.emitNumericEntity(0, 3);
			case ko.NumericStart: return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			default: return 0;
		}
	}
};
function Mo(e, t, n, r) {
	let i = (t & So.BRANCH_LENGTH) >> 7, a = t & So.JUMP_TABLE;
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
var q;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(q ||= {});
var No;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(No ||= {});
var Po;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Po ||= {});
var J;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(J ||= {});
var Y;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(Y ||= {});
var Fo = /* @__PURE__ */ new Map([
	[J.A, Y.A],
	[J.ADDRESS, Y.ADDRESS],
	[J.ANNOTATION_XML, Y.ANNOTATION_XML],
	[J.APPLET, Y.APPLET],
	[J.AREA, Y.AREA],
	[J.ARTICLE, Y.ARTICLE],
	[J.ASIDE, Y.ASIDE],
	[J.B, Y.B],
	[J.BASE, Y.BASE],
	[J.BASEFONT, Y.BASEFONT],
	[J.BGSOUND, Y.BGSOUND],
	[J.BIG, Y.BIG],
	[J.BLOCKQUOTE, Y.BLOCKQUOTE],
	[J.BODY, Y.BODY],
	[J.BR, Y.BR],
	[J.BUTTON, Y.BUTTON],
	[J.CAPTION, Y.CAPTION],
	[J.CENTER, Y.CENTER],
	[J.CODE, Y.CODE],
	[J.COL, Y.COL],
	[J.COLGROUP, Y.COLGROUP],
	[J.DD, Y.DD],
	[J.DESC, Y.DESC],
	[J.DETAILS, Y.DETAILS],
	[J.DIALOG, Y.DIALOG],
	[J.DIR, Y.DIR],
	[J.DIV, Y.DIV],
	[J.DL, Y.DL],
	[J.DT, Y.DT],
	[J.EM, Y.EM],
	[J.EMBED, Y.EMBED],
	[J.FIELDSET, Y.FIELDSET],
	[J.FIGCAPTION, Y.FIGCAPTION],
	[J.FIGURE, Y.FIGURE],
	[J.FONT, Y.FONT],
	[J.FOOTER, Y.FOOTER],
	[J.FOREIGN_OBJECT, Y.FOREIGN_OBJECT],
	[J.FORM, Y.FORM],
	[J.FRAME, Y.FRAME],
	[J.FRAMESET, Y.FRAMESET],
	[J.H1, Y.H1],
	[J.H2, Y.H2],
	[J.H3, Y.H3],
	[J.H4, Y.H4],
	[J.H5, Y.H5],
	[J.H6, Y.H6],
	[J.HEAD, Y.HEAD],
	[J.HEADER, Y.HEADER],
	[J.HGROUP, Y.HGROUP],
	[J.HR, Y.HR],
	[J.HTML, Y.HTML],
	[J.I, Y.I],
	[J.IMG, Y.IMG],
	[J.IMAGE, Y.IMAGE],
	[J.INPUT, Y.INPUT],
	[J.IFRAME, Y.IFRAME],
	[J.KEYGEN, Y.KEYGEN],
	[J.LABEL, Y.LABEL],
	[J.LI, Y.LI],
	[J.LINK, Y.LINK],
	[J.LISTING, Y.LISTING],
	[J.MAIN, Y.MAIN],
	[J.MALIGNMARK, Y.MALIGNMARK],
	[J.MARQUEE, Y.MARQUEE],
	[J.MATH, Y.MATH],
	[J.MENU, Y.MENU],
	[J.META, Y.META],
	[J.MGLYPH, Y.MGLYPH],
	[J.MI, Y.MI],
	[J.MO, Y.MO],
	[J.MN, Y.MN],
	[J.MS, Y.MS],
	[J.MTEXT, Y.MTEXT],
	[J.NAV, Y.NAV],
	[J.NOBR, Y.NOBR],
	[J.NOFRAMES, Y.NOFRAMES],
	[J.NOEMBED, Y.NOEMBED],
	[J.NOSCRIPT, Y.NOSCRIPT],
	[J.OBJECT, Y.OBJECT],
	[J.OL, Y.OL],
	[J.OPTGROUP, Y.OPTGROUP],
	[J.OPTION, Y.OPTION],
	[J.P, Y.P],
	[J.PARAM, Y.PARAM],
	[J.PLAINTEXT, Y.PLAINTEXT],
	[J.PRE, Y.PRE],
	[J.RB, Y.RB],
	[J.RP, Y.RP],
	[J.RT, Y.RT],
	[J.RTC, Y.RTC],
	[J.RUBY, Y.RUBY],
	[J.S, Y.S],
	[J.SCRIPT, Y.SCRIPT],
	[J.SEARCH, Y.SEARCH],
	[J.SECTION, Y.SECTION],
	[J.SELECT, Y.SELECT],
	[J.SOURCE, Y.SOURCE],
	[J.SMALL, Y.SMALL],
	[J.SPAN, Y.SPAN],
	[J.STRIKE, Y.STRIKE],
	[J.STRONG, Y.STRONG],
	[J.STYLE, Y.STYLE],
	[J.SUB, Y.SUB],
	[J.SUMMARY, Y.SUMMARY],
	[J.SUP, Y.SUP],
	[J.TABLE, Y.TABLE],
	[J.TBODY, Y.TBODY],
	[J.TEMPLATE, Y.TEMPLATE],
	[J.TEXTAREA, Y.TEXTAREA],
	[J.TFOOT, Y.TFOOT],
	[J.TD, Y.TD],
	[J.TH, Y.TH],
	[J.THEAD, Y.THEAD],
	[J.TITLE, Y.TITLE],
	[J.TR, Y.TR],
	[J.TRACK, Y.TRACK],
	[J.TT, Y.TT],
	[J.U, Y.U],
	[J.UL, Y.UL],
	[J.SVG, Y.SVG],
	[J.VAR, Y.VAR],
	[J.WBR, Y.WBR],
	[J.XMP, Y.XMP]
]);
function Io(e) {
	return Fo.get(e) ?? Y.UNKNOWN;
}
var X = Y, Lo = {
	[q.HTML]: /* @__PURE__ */ new Set([
		X.ADDRESS,
		X.APPLET,
		X.AREA,
		X.ARTICLE,
		X.ASIDE,
		X.BASE,
		X.BASEFONT,
		X.BGSOUND,
		X.BLOCKQUOTE,
		X.BODY,
		X.BR,
		X.BUTTON,
		X.CAPTION,
		X.CENTER,
		X.COL,
		X.COLGROUP,
		X.DD,
		X.DETAILS,
		X.DIR,
		X.DIV,
		X.DL,
		X.DT,
		X.EMBED,
		X.FIELDSET,
		X.FIGCAPTION,
		X.FIGURE,
		X.FOOTER,
		X.FORM,
		X.FRAME,
		X.FRAMESET,
		X.H1,
		X.H2,
		X.H3,
		X.H4,
		X.H5,
		X.H6,
		X.HEAD,
		X.HEADER,
		X.HGROUP,
		X.HR,
		X.HTML,
		X.IFRAME,
		X.IMG,
		X.INPUT,
		X.LI,
		X.LINK,
		X.LISTING,
		X.MAIN,
		X.MARQUEE,
		X.MENU,
		X.META,
		X.NAV,
		X.NOEMBED,
		X.NOFRAMES,
		X.NOSCRIPT,
		X.OBJECT,
		X.OL,
		X.P,
		X.PARAM,
		X.PLAINTEXT,
		X.PRE,
		X.SCRIPT,
		X.SECTION,
		X.SELECT,
		X.SOURCE,
		X.STYLE,
		X.SUMMARY,
		X.TABLE,
		X.TBODY,
		X.TD,
		X.TEMPLATE,
		X.TEXTAREA,
		X.TFOOT,
		X.TH,
		X.THEAD,
		X.TITLE,
		X.TR,
		X.TRACK,
		X.UL,
		X.WBR,
		X.XMP
	]),
	[q.MATHML]: /* @__PURE__ */ new Set([
		X.MI,
		X.MO,
		X.MN,
		X.MS,
		X.MTEXT,
		X.ANNOTATION_XML
	]),
	[q.SVG]: /* @__PURE__ */ new Set([
		X.TITLE,
		X.FOREIGN_OBJECT,
		X.DESC
	]),
	[q.XLINK]: /* @__PURE__ */ new Set(),
	[q.XML]: /* @__PURE__ */ new Set(),
	[q.XMLNS]: /* @__PURE__ */ new Set()
}, Ro = /* @__PURE__ */ new Set([
	X.H1,
	X.H2,
	X.H3,
	X.H4,
	X.H5,
	X.H6
]), zo = /* @__PURE__ */ new Set([
	J.STYLE,
	J.SCRIPT,
	J.XMP,
	J.IFRAME,
	J.NOEMBED,
	J.NOFRAMES,
	J.PLAINTEXT
]);
function Bo(e, t) {
	return zo.has(e) || t && e === J.NOSCRIPT;
}
//#endregion
//#region node_modules/parse5/dist/tokenizer/index.js
var Z;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Z ||= {});
var Vo = {
	DATA: Z.DATA,
	RCDATA: Z.RCDATA,
	RAWTEXT: Z.RAWTEXT,
	SCRIPT_DATA: Z.SCRIPT_DATA,
	PLAINTEXT: Z.PLAINTEXT,
	CDATA_SECTION: Z.CDATA_SECTION
};
function Ho(e) {
	return e >= W.DIGIT_0 && e <= W.DIGIT_9;
}
function Uo(e) {
	return e >= W.LATIN_CAPITAL_A && e <= W.LATIN_CAPITAL_Z;
}
function Wo(e) {
	return e >= W.LATIN_SMALL_A && e <= W.LATIN_SMALL_Z;
}
function Go(e) {
	return Wo(e) || Uo(e);
}
function Ko(e) {
	return Go(e) || Ho(e);
}
function qo(e) {
	return e + 32;
}
function Jo(e) {
	return e === W.SPACE || e === W.LINE_FEED || e === W.TABULATION || e === W.FORM_FEED;
}
function Yo(e) {
	return Jo(e) || e === W.SOLIDUS || e === W.GREATER_THAN_SIGN;
}
function Xo(e) {
	return e === W.NULL ? G.nullCharacterReference : e > 1114111 ? G.characterReferenceOutsideUnicodeRange : ao(e) ? G.surrogateCharacterReference : lo(e) ? G.noncharacterCharacterReference : co(e) || e === W.CARRIAGE_RETURN ? G.controlCharacterReference : null;
}
var Zo = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Z.DATA, this.returnState = Z.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new fo(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new jo(bo, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(G.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(G.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = Xo(e);
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
			type: K.START_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: K.END_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: K.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: K.DOCTYPE,
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
		if (po(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(G.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = Io(e.tagName), e.type === K.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(G.endTagWithAttributes), e.selfClosing && this._err(G.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
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
				case K.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case K.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case K.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: K.EOF,
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
		let t = Jo(e) ? K.WHITESPACE_CHARACTER : e === W.NULL ? K.NULL_CHARACTER : K.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, e < 65536 ? String.fromCharCode(e) : String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(K.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = Z.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Ao.Attribute : Ao.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case Z.DATA:
				this._stateData(e);
				break;
			case Z.RCDATA:
				this._stateRcdata(e);
				break;
			case Z.RAWTEXT:
				this._stateRawtext(e);
				break;
			case Z.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case Z.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case Z.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case Z.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case Z.TAG_NAME:
				this._stateTagName(e);
				break;
			case Z.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case Z.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case Z.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case Z.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case Z.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case Z.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case Z.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case Z.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case Z.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case Z.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case Z.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case Z.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case Z.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case Z.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case Z.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case Z.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case Z.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case Z.COMMENT:
				this._stateComment(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case Z.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case Z.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case Z.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case Z.DOCTYPE:
				this._stateDoctype(e);
				break;
			case Z.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case Z.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case Z.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case Z.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case Z.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case Z.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case Z.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case Z.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.TAG_OPEN;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.RCDATA_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.RAWTEXT_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (Go(e)) this._createStartTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case W.EXCLAMATION_MARK:
				this.state = Z.MARKUP_DECLARATION_OPEN;
				break;
			case W.SOLIDUS:
				this.state = Z.END_TAG_OPEN;
				break;
			case W.QUESTION_MARK:
				this._err(G.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case W.EOF:
				this._err(G.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(G.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Z.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (Go(e)) this._createEndTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case W.GREATER_THAN_SIGN:
				this._err(G.missingEndTagName), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(G.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.tagName += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(Uo(e) ? qo(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		Go(e) ? (this.state = Z.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = Z.BEFORE_ATTRIBUTE_NAME, !1;
			case W.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = Z.SELF_CLOSING_START_TAG, !1;
			case W.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Z.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		Go(e) ? (this.state = Z.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case W.SOLIDUS:
				this.state = Z.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case W.EXCLAMATION_MARK:
				this.state = Z.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		Go(e) ? (this.state = Z.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === W.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === W.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Go(e) ? (this._emitChars("<"), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		Go(e) ? (this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(io.SCRIPT, !1) && Yo(this.preprocessor.peek(io.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < io.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === W.SOLIDUS ? (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(io.SCRIPT, !1) && Yo(this.preprocessor.peek(io.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < io.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.SOLIDUS:
			case W.GREATER_THAN_SIGN:
			case W.EOF:
				this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case W.EQUALS_SIGN:
				this._err(G.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Z.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
			case W.SOLIDUS:
			case W.GREATER_THAN_SIGN:
			case W.EOF:
				this._leaveAttrName(), this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case W.EQUALS_SIGN:
				this._leaveAttrName(), this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case W.QUOTATION_MARK:
			case W.APOSTROPHE:
			case W.LESS_THAN_SIGN:
				this._err(G.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(Uo(e) ? qo(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.EQUALS_SIGN:
				this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				this.state = Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this.state = Z.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingAttributeValue), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = Z.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.QUOTATION_MARK:
			case W.APOSTROPHE:
			case W.LESS_THAN_SIGN:
			case W.EQUALS_SIGN:
			case W.GRAVE_ACCENT:
				this._err(G.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.SOLIDUS:
				this._leaveAttrValue(), this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._err(G.missingWhitespaceBetweenAttributes), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case W.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			}
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._err(G.unexpectedSolidusInTag), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(io.DASH_DASH, !0) ? (this._createCommentToken(io.DASH_DASH.length + 1), this.state = Z.COMMENT_START) : this._consumeSequenceIfMatch(io.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(io.DOCTYPE.length + 1), this.state = Z.DOCTYPE) : this._consumeSequenceIfMatch(io.CDATA_START, !0) ? this.inForeignNode ? this.state = Z.CDATA_SECTION : (this._err(G.cdataInHtmlContent), this._createCommentToken(io.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Z.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(G.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_START_DASH;
				break;
			case W.GREATER_THAN_SIGN: {
				this._err(G.abruptClosingOfEmptyComment), this.state = Z.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptClosingOfEmptyComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END_DASH;
				break;
			case W.LESS_THAN_SIGN:
				t.data += "<", this.state = Z.COMMENT_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.data += "�";
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case W.EXCLAMATION_MARK:
				t.data += "!", this.state = Z.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case W.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === W.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Z.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === W.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Z.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== W.GREATER_THAN_SIGN && e !== W.EOF && this._err(G.nestedComment), this.state = Z.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EXCLAMATION_MARK:
				this.state = Z.COMMENT_END_BANG;
				break;
			case W.HYPHEN_MINUS:
				t.data += "-";
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				t.data += "--!", this.state = Z.COMMENT_END_DASH;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.incorrectlyClosedComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case W.EOF: {
				this._err(G.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(G.missingWhitespaceBeforeDoctypeName), this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (Uo(e)) this._createDoctypeToken(String.fromCharCode(qo(e))), this.state = Z.DOCTYPE_NAME;
		else switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = Z.DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN: {
				this._err(G.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Z.DATA;
				break;
			}
			case W.EOF: {
				this._err(G.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = Z.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.AFTER_DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.name += "�";
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(Uo(e) ? qo(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(io.PUBLIC, !1) ? this.state = Z.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(io.SYSTEM, !1) ? this.state = Z.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(G.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.publicId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.publicId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.systemId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.systemId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter);
				break;
			case W.EOF: this.emitCurrentDoctype(t), this._emitEOFToken();
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case W.RIGHT_SQUARE_BRACKET:
				this.state = Z.CDATA_SECTION_BRACKET;
				break;
			case W.EOF:
				this._err(G.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === W.RIGHT_SQUARE_BRACKET ? this.state = Z.CDATA_SECTION_END : (this._emitChars("]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA;
				break;
			case W.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e);
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
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(W.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Ko(this.preprocessor.peek(1)) ? Z.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		Ko(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === W.SEMICOLON && this._err(G.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, Qo = /* @__PURE__ */ new Set([
	Y.DD,
	Y.DT,
	Y.LI,
	Y.OPTGROUP,
	Y.OPTION,
	Y.P,
	Y.RB,
	Y.RP,
	Y.RT,
	Y.RTC
]), $o = /* @__PURE__ */ new Set([
	...Qo,
	Y.CAPTION,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]), es = /* @__PURE__ */ new Set([
	Y.APPLET,
	Y.CAPTION,
	Y.HTML,
	Y.MARQUEE,
	Y.OBJECT,
	Y.TABLE,
	Y.TD,
	Y.TEMPLATE,
	Y.TH
]), ts = /* @__PURE__ */ new Set([
	...es,
	Y.OL,
	Y.UL
]), ns = /* @__PURE__ */ new Set([...es, Y.BUTTON]), rs = /* @__PURE__ */ new Set([
	Y.ANNOTATION_XML,
	Y.MI,
	Y.MN,
	Y.MO,
	Y.MS,
	Y.MTEXT
]), is = /* @__PURE__ */ new Set([
	Y.DESC,
	Y.FOREIGN_OBJECT,
	Y.TITLE
]), as = /* @__PURE__ */ new Set([
	Y.TR,
	Y.TEMPLATE,
	Y.HTML
]), os = /* @__PURE__ */ new Set([
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TEMPLATE,
	Y.HTML
]), ss = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TEMPLATE,
	Y.HTML
]), cs = /* @__PURE__ */ new Set([Y.TD, Y.TH]), ls = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = Y.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === Y.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === q.HTML;
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
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== q.HTML);
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
		this.popUntilPopped(Ro, q.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(cs, q.HTML);
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
		this.clearBackTo(ss, q.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(os, q.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(as, q.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === Y.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === Y.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case q.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case q.SVG:
					if (is.has(r)) return !1;
					break;
				case q.MATHML: if (rs.has(r)) return !1;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, es);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, ts);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, ns);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case q.HTML:
					if (Ro.has(t)) return !0;
					if (es.has(t)) return !1;
					break;
				case q.SVG:
					if (is.has(t)) return !1;
					break;
				case q.MATHML: if (rs.has(t)) return !1;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === q.HTML) switch (this.tagIDs[e]) {
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.OPTION:
			case Y.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && Qo.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && $o.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && $o.has(this.currentTagId);) this.pop();
	}
}, us = 3, ds;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(ds ||= {});
var fs = { type: ds.Marker }, ps = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === ds.Marker) break;
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
		if (this.entries.length < us) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < us) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= us && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(fs);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: ds.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: ds.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(fs);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === ds.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === ds.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === ds.Element && t.element === e);
	}
}, ms = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: Po.NO_QUIRKS,
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
			ms.appendChild(e, i);
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
			if (ms.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		ms.appendChild(e, ms.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && ms.isTextNode(r) ? r.value += t : ms.insertBefore(e, ms.createTextNode(t), n);
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
}, hs = "html", gs = "about:legacy-compat", _s = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", vs = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), ys = [
	...vs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], bs = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), xs = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Ss = [
	...xs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function Cs(e, t) {
	return t.some((t) => e.startsWith(t));
}
function ws(e) {
	return e.name === hs && e.publicId === null && (e.systemId === null || e.systemId === gs);
}
function Ts(e) {
	if (e.name !== hs) return Po.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === _s) return Po.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), bs.has(n)) return Po.QUIRKS;
		let e = t === null ? ys : vs;
		if (Cs(n, e)) return Po.QUIRKS;
		if (e = t === null ? xs : Ss, Cs(n, e)) return Po.LIMITED_QUIRKS;
	}
	return Po.NO_QUIRKS;
}
//#endregion
//#region node_modules/parse5/dist/common/foreign-content.js
var Es = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, Ds = "definitionurl", Os = "definitionURL", ks = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), As = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: q.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: q.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: q.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: q.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: q.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: q.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: q.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: q.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: q.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: q.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: q.XMLNS
	}]
]), js = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), Ms = /* @__PURE__ */ new Set([
	Y.B,
	Y.BIG,
	Y.BLOCKQUOTE,
	Y.BODY,
	Y.BR,
	Y.CENTER,
	Y.CODE,
	Y.DD,
	Y.DIV,
	Y.DL,
	Y.DT,
	Y.EM,
	Y.EMBED,
	Y.H1,
	Y.H2,
	Y.H3,
	Y.H4,
	Y.H5,
	Y.H6,
	Y.HEAD,
	Y.HR,
	Y.I,
	Y.IMG,
	Y.LI,
	Y.LISTING,
	Y.MENU,
	Y.META,
	Y.NOBR,
	Y.OL,
	Y.P,
	Y.PRE,
	Y.RUBY,
	Y.S,
	Y.SMALL,
	Y.SPAN,
	Y.STRONG,
	Y.STRIKE,
	Y.SUB,
	Y.SUP,
	Y.TABLE,
	Y.TT,
	Y.U,
	Y.UL,
	Y.VAR
]);
function Ns(e) {
	let t = e.tagID;
	return t === Y.FONT && e.attrs.some(({ name: e }) => e === No.COLOR || e === No.SIZE || e === No.FACE) || Ms.has(t);
}
function Ps(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === Ds) {
		e.attrs[t].name = Os;
		break;
	}
}
function Fs(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = ks.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Is(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = As.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function Ls(e) {
	let t = js.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = Io(e.tagName));
}
function Rs(e, t) {
	return t === q.MATHML && (e === Y.MI || e === Y.MO || e === Y.MN || e === Y.MS || e === Y.MTEXT);
}
function zs(e, t, n) {
	if (t === q.MATHML && e === Y.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === No.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === Es.TEXT_HTML || t === Es.APPLICATION_XML;
		}
	}
	return t === q.SVG && (e === Y.FOREIGN_OBJECT || e === Y.DESC || e === Y.TITLE);
}
function Bs(e, t, n, r) {
	return (!r || r === q.HTML) && zs(e, t, n) || (!r || r === q.MATHML) && Rs(e, t);
}
//#endregion
//#region node_modules/parse5/dist/parser/index.js
var Vs = "hidden", Hs = 8, Us = 3, Q;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(Q ||= {});
var Ws = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, Gs = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TR
]), Ks = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: ms,
	onParseError: null
}, qs = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = Q.INITIAL, this.originalInsertionMode = Q.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...Ks,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Zo(this.options, this), this.activeFormattingElements = new ps(this.treeAdapter), this.fragmentContextID = n ? Io(this.treeAdapter.getTagName(n)) : Y.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new ls(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...Ks,
			...t
		};
		e ??= n.treeAdapter.createElement(J.TEMPLATE, q.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", q.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === Y.TEMPLATE && i.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? Ws, i = {
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
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === q.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, q.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = Q.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = Q.TEXT, this.originalInsertionMode = Q.IN_BODY, this.tokenizer.state = Vo.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === J.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== q.HTML)) switch (this.fragmentContextID) {
			case Y.TITLE:
			case Y.TEXTAREA:
				this.tokenizer.state = Vo.RCDATA;
				break;
			case Y.STYLE:
			case Y.XMP:
			case Y.IFRAME:
			case Y.NOEMBED:
			case Y.NOFRAMES:
			case Y.NOSCRIPT:
				this.tokenizer.state = Vo.RAWTEXT;
				break;
			case Y.SCRIPT:
				this.tokenizer.state = Vo.SCRIPT_DATA;
				break;
			case Y.PLAINTEXT: this.tokenizer.state = Vo.PLAINTEXT;
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
		let n = this.treeAdapter.createElement(e, q.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, q.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(J.HTML, q.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, Y.HTML);
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
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === K.END_TAG && r === t.tagName ? {
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
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === Y.SVG && this.treeAdapter.getTagName(t) === J.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === q.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === Y.MGLYPH || e.tagID === Y.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, q.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case K.CHARACTER:
				this.onCharacter(e);
				break;
			case K.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case K.COMMENT:
				this.onComment(e);
				break;
			case K.DOCTYPE:
				this.onDoctype(e);
				break;
			case K.START_TAG:
				this._processStartTag(e);
				break;
			case K.END_TAG:
				this.onEndTag(e);
				break;
			case K.EOF:
				this.onEof(e);
				break;
			case K.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(e);
		}
	}
	_isIntegrationPoint(e, t, n) {
		return Bs(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === ds.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = Q.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(Y.P), this.openElements.popUntilTagNamePopped(Y.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case Y.TR:
				this.insertionMode = Q.IN_ROW;
				return;
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT:
				this.insertionMode = Q.IN_TABLE_BODY;
				return;
			case Y.CAPTION:
				this.insertionMode = Q.IN_CAPTION;
				return;
			case Y.COLGROUP:
				this.insertionMode = Q.IN_COLUMN_GROUP;
				return;
			case Y.TABLE:
				this.insertionMode = Q.IN_TABLE;
				return;
			case Y.BODY:
				this.insertionMode = Q.IN_BODY;
				return;
			case Y.FRAMESET:
				this.insertionMode = Q.IN_FRAMESET;
				return;
			case Y.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case Y.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case Y.HTML:
				this.insertionMode = this.headElement ? Q.AFTER_HEAD : Q.BEFORE_HEAD;
				return;
			case Y.TD:
			case Y.TH:
				if (e > 0) {
					this.insertionMode = Q.IN_CELL;
					return;
				}
				break;
			case Y.HEAD: if (e > 0) {
				this.insertionMode = Q.IN_HEAD;
				return;
			}
		}
		this.insertionMode = Q.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === Y.TEMPLATE) break;
			if (e === Y.TABLE) {
				this.insertionMode = Q.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = Q.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return Gs.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case Y.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === q.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case Y.TABLE: {
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
		return Lo[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			du(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
				oc(this, e);
				break;
			case Q.BEFORE_HTML:
				lc(this, e);
				break;
			case Q.BEFORE_HEAD:
				fc(this, e);
				break;
			case Q.IN_HEAD:
				gc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				yc(this, e);
				break;
			case Q.AFTER_HEAD:
				Sc(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
				Tc(this, e);
				break;
			case Q.TEXT:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				bl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Nl(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Bl(this, e);
				break;
			case Q.AFTER_BODY:
				nu(this, e);
				break;
			case Q.AFTER_AFTER_BODY: cu(this, e);
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			uu(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
				oc(this, e);
				break;
			case Q.BEFORE_HTML:
				lc(this, e);
				break;
			case Q.BEFORE_HEAD:
				fc(this, e);
				break;
			case Q.IN_HEAD:
				gc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				yc(this, e);
				break;
			case Q.AFTER_HEAD:
				Sc(this, e);
				break;
			case Q.TEXT:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				bl(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Bl(this, e);
				break;
			case Q.AFTER_BODY:
				nu(this, e);
				break;
			case Q.AFTER_AFTER_BODY: cu(this, e);
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			tc(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
			case Q.BEFORE_HTML:
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_TEMPLATE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				tc(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Pl(this, e);
				break;
			case Q.AFTER_BODY:
				nc(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET: rc(this, e);
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case Q.INITIAL:
				ac(this, e);
				break;
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
				this._err(e, G.misplacedDoctype);
				break;
			case Q.IN_TABLE_TEXT: Pl(this, e);
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, G.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? pu(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				oc(this, e);
				break;
			case Q.BEFORE_HTML:
				sc(this, e);
				break;
			case Q.BEFORE_HEAD:
				uc(this, e);
				break;
			case Q.IN_HEAD:
				pc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				_c(this, e);
				break;
			case Q.AFTER_HEAD:
				bc(this, e);
				break;
			case Q.IN_BODY:
				il(this, e);
				break;
			case Q.IN_TABLE:
				kl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Pl(this, e);
				break;
			case Q.IN_CAPTION:
				Il(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Rl(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Vl(this, e);
				break;
			case Q.IN_ROW:
				Ul(this, e);
				break;
			case Q.IN_CELL:
				Gl(this, e);
				break;
			case Q.IN_SELECT:
				ql(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Yl(this, e);
				break;
			case Q.IN_TEMPLATE:
				Zl(this, e);
				break;
			case Q.AFTER_BODY:
				eu(this, e);
				break;
			case Q.IN_FRAMESET:
				ru(this, e);
				break;
			case Q.AFTER_FRAMESET:
				au(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				su(this, e);
				break;
			case Q.AFTER_AFTER_FRAMESET: lu(this, e);
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? mu(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				oc(this, e);
				break;
			case Q.BEFORE_HTML:
				cc(this, e);
				break;
			case Q.BEFORE_HEAD:
				dc(this, e);
				break;
			case Q.IN_HEAD:
				mc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				vc(this, e);
				break;
			case Q.AFTER_HEAD:
				xc(this, e);
				break;
			case Q.IN_BODY:
				gl(this, e);
				break;
			case Q.TEXT:
				vl(this, e);
				break;
			case Q.IN_TABLE:
				Al(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Pl(this, e);
				break;
			case Q.IN_CAPTION:
				Ll(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				zl(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Hl(this, e);
				break;
			case Q.IN_ROW:
				Wl(this, e);
				break;
			case Q.IN_CELL:
				Kl(this, e);
				break;
			case Q.IN_SELECT:
				Jl(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Xl(this, e);
				break;
			case Q.IN_TEMPLATE:
				Ql(this, e);
				break;
			case Q.AFTER_BODY:
				tu(this, e);
				break;
			case Q.IN_FRAMESET:
				iu(this, e);
				break;
			case Q.AFTER_FRAMESET:
				ou(this, e);
				break;
			case Q.AFTER_AFTER_BODY: cu(this, e);
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				oc(this, e);
				break;
			case Q.BEFORE_HTML:
				lc(this, e);
				break;
			case Q.BEFORE_HEAD:
				fc(this, e);
				break;
			case Q.IN_HEAD:
				gc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				yc(this, e);
				break;
			case Q.AFTER_HEAD:
				Sc(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				_l(this, e);
				break;
			case Q.TEXT:
				yl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Pl(this, e);
				break;
			case Q.IN_TEMPLATE:
				$l(this, e);
				break;
			case Q.AFTER_BODY:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET: ic(this, e);
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === W.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.TEXT:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
			case Q.AFTER_BODY:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET:
				wc(this, e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				bl(this, e);
				break;
			case Q.IN_TABLE_TEXT: Ml(this, e);
		}
	}
};
function Js(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : hl(e, t), n;
}
function Ys(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function Xs(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= Us;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = Zs(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function Zs(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function Qs(e, t, n) {
	let r = Io(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === Y.TEMPLATE && i === q.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function $s(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function ec(e, t) {
	for (let n = 0; n < Hs; n++) {
		let n = Js(e, t);
		if (!n) break;
		let r = Ys(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = Xs(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && Qs(e, a, i), $s(e, r, n);
	}
}
function tc(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function nc(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function rc(e, t) {
	e._appendCommentNode(t, e.document);
}
function ic(e, t) {
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
function ac(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? Po.QUIRKS : Ts(t);
	ws(t) || e._err(t, G.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = Q.BEFORE_HTML;
}
function oc(e, t) {
	e._err(t, G.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Po.QUIRKS), e.insertionMode = Q.BEFORE_HTML, e._processToken(t);
}
function sc(e, t) {
	t.tagID === Y.HTML ? (e._insertElement(t, q.HTML), e.insertionMode = Q.BEFORE_HEAD) : lc(e, t);
}
function cc(e, t) {
	let n = t.tagID;
	(n === Y.HTML || n === Y.HEAD || n === Y.BODY || n === Y.BR) && lc(e, t);
}
function lc(e, t) {
	e._insertFakeRootElement(), e.insertionMode = Q.BEFORE_HEAD, e._processToken(t);
}
function uc(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.HEAD:
			e._insertElement(t, q.HTML), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD;
			break;
		default: fc(e, t);
	}
}
function dc(e, t) {
	let n = t.tagID;
	n === Y.HEAD || n === Y.BODY || n === Y.HTML || n === Y.BR ? fc(e, t) : e._err(t, G.endTagWithoutMatchingOpenElement);
}
function fc(e, t) {
	e._insertFakeElement(J.HEAD, Y.HEAD), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function pc(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TITLE:
			e._switchToTextParsing(t, Vo.RCDATA);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Vo.RAWTEXT) : (e._insertElement(t, q.HTML), e.insertionMode = Q.IN_HEAD_NO_SCRIPT);
			break;
		case Y.NOFRAMES:
		case Y.STYLE:
			e._switchToTextParsing(t, Vo.RAWTEXT);
			break;
		case Y.SCRIPT:
			e._switchToTextParsing(t, Vo.SCRIPT_DATA);
			break;
		case Y.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = Q.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE);
			break;
		case Y.HEAD:
			e._err(t, G.misplacedStartTagForHeadElement);
			break;
		default: gc(e, t);
	}
}
function mc(e, t) {
	switch (t.tagID) {
		case Y.HEAD:
			e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD;
			break;
		case Y.BODY:
		case Y.BR:
		case Y.HTML:
			gc(e, t);
			break;
		case Y.TEMPLATE:
			hc(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function hc(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== Y.TEMPLATE && e._err(t, G.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, G.endTagWithoutMatchingOpenElement);
}
function gc(e, t) {
	e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD, e._processToken(t);
}
function _c(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.HEAD:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.STYLE:
			pc(e, t);
			break;
		case Y.NOSCRIPT:
			e._err(t, G.nestedNoscriptInHead);
			break;
		default: yc(e, t);
	}
}
function vc(e, t) {
	switch (t.tagID) {
		case Y.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = Q.IN_HEAD;
			break;
		case Y.BR:
			yc(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function yc(e, t) {
	let n = t.type === K.EOF ? G.openElementsLeftAfterEof : G.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function bc(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.BODY:
			e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_BODY;
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML), e.insertionMode = Q.IN_FRAMESET;
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			e._err(t, G.abandonedHeadElementChild), e.openElements.push(e.headElement, Y.HEAD), pc(e, t), e.openElements.remove(e.headElement);
			break;
		case Y.HEAD:
			e._err(t, G.misplacedStartTagForHeadElement);
			break;
		default: Sc(e, t);
	}
}
function xc(e, t) {
	switch (t.tagID) {
		case Y.BODY:
		case Y.HTML:
		case Y.BR:
			Sc(e, t);
			break;
		case Y.TEMPLATE:
			hc(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function Sc(e, t) {
	e._insertFakeElement(J.BODY, Y.BODY), e.insertionMode = Q.IN_BODY, Cc(e, t);
}
function Cc(e, t) {
	switch (t.type) {
		case K.CHARACTER:
			Tc(e, t);
			break;
		case K.WHITESPACE_CHARACTER:
			wc(e, t);
			break;
		case K.COMMENT:
			tc(e, t);
			break;
		case K.START_TAG:
			il(e, t);
			break;
		case K.END_TAG:
			gl(e, t);
			break;
		case K.EOF: _l(e, t);
	}
}
function wc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Tc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Ec(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Dc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Oc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_FRAMESET);
}
function kc(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Ac(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Ro.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, q.HTML);
}
function jc(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Mc(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), n || (e.formElement = e.openElements.current));
}
function Nc(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === Y.LI && r === Y.LI || (n === Y.DD || n === Y.DT) && (r === Y.DD || r === Y.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== Y.ADDRESS && r !== Y.DIV && r !== Y.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Pc(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.tokenizer.state = Vo.PLAINTEXT;
}
function Fc(e, t) {
	e.openElements.hasInScope(Y.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1;
}
function Ic(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(J.A);
	n && (ec(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Lc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Rc(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(Y.NOBR) && (ec(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function zc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Bc(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== Po.QUIRKS && e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_TABLE;
}
function Vc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Hc(e) {
	let t = po(e, No.TYPE);
	return t != null && t.toLowerCase() === Vs;
}
function Uc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), Hc(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Wc(e, t) {
	e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
}
function Gc(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Kc(e, t) {
	t.tagName = J.IMG, t.tagID = Y.IMG, Vc(e, t);
}
function qc(e, t) {
	e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Vo.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = Q.TEXT;
}
function Jc(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Vo.RAWTEXT);
}
function Yc(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Vo.RAWTEXT);
}
function Xc(e, t) {
	e._switchToTextParsing(t, Vo.RAWTEXT);
}
function Zc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === Q.IN_TABLE || e.insertionMode === Q.IN_CAPTION || e.insertionMode === Q.IN_TABLE_BODY || e.insertionMode === Q.IN_ROW || e.insertionMode === Q.IN_CELL ? Q.IN_SELECT_IN_TABLE : Q.IN_SELECT;
}
function Qc(e, t) {
	e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function $c(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, q.HTML);
}
function el(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(Y.RTC), e._insertElement(t, q.HTML);
}
function tl(e, t) {
	e._reconstructActiveFormattingElements(), Ps(t), Is(t), t.selfClosing ? e._appendElement(t, q.MATHML) : e._insertElement(t, q.MATHML), t.ackSelfClosing = !0;
}
function nl(e, t) {
	e._reconstructActiveFormattingElements(), Fs(t), Is(t), t.selfClosing ? e._appendElement(t, q.SVG) : e._insertElement(t, q.SVG), t.ackSelfClosing = !0;
}
function rl(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function il(e, t) {
	switch (t.tagID) {
		case Y.I:
		case Y.S:
		case Y.B:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			Lc(e, t);
			break;
		case Y.A:
			Ic(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			Ac(e, t);
			break;
		case Y.P:
		case Y.DL:
		case Y.OL:
		case Y.UL:
		case Y.DIV:
		case Y.DIR:
		case Y.NAV:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.DETAILS:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			kc(e, t);
			break;
		case Y.LI:
		case Y.DD:
		case Y.DT:
			Nc(e, t);
			break;
		case Y.BR:
		case Y.IMG:
		case Y.WBR:
		case Y.AREA:
		case Y.EMBED:
		case Y.KEYGEN:
			Vc(e, t);
			break;
		case Y.HR:
			Gc(e, t);
			break;
		case Y.RB:
		case Y.RTC:
			$c(e, t);
			break;
		case Y.RT:
		case Y.RP:
			el(e, t);
			break;
		case Y.PRE:
		case Y.LISTING:
			jc(e, t);
			break;
		case Y.XMP:
			Jc(e, t);
			break;
		case Y.SVG:
			nl(e, t);
			break;
		case Y.HTML:
			Ec(e, t);
			break;
		case Y.BASE:
		case Y.LINK:
		case Y.META:
		case Y.STYLE:
		case Y.TITLE:
		case Y.SCRIPT:
		case Y.BGSOUND:
		case Y.BASEFONT:
		case Y.TEMPLATE:
			pc(e, t);
			break;
		case Y.BODY:
			Dc(e, t);
			break;
		case Y.FORM:
			Mc(e, t);
			break;
		case Y.NOBR:
			Rc(e, t);
			break;
		case Y.MATH:
			tl(e, t);
			break;
		case Y.TABLE:
			Bc(e, t);
			break;
		case Y.INPUT:
			Uc(e, t);
			break;
		case Y.PARAM:
		case Y.TRACK:
		case Y.SOURCE:
			Wc(e, t);
			break;
		case Y.IMAGE:
			Kc(e, t);
			break;
		case Y.BUTTON:
			Fc(e, t);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			zc(e, t);
			break;
		case Y.IFRAME:
			Yc(e, t);
			break;
		case Y.SELECT:
			Zc(e, t);
			break;
		case Y.OPTION:
		case Y.OPTGROUP:
			Qc(e, t);
			break;
		case Y.NOEMBED:
		case Y.NOFRAMES:
			Xc(e, t);
			break;
		case Y.FRAMESET:
			Oc(e, t);
			break;
		case Y.TEXTAREA:
			qc(e, t);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? Xc(e, t) : rl(e, t);
			break;
		case Y.PLAINTEXT:
			Pc(e, t);
			break;
		case Y.COL:
		case Y.TH:
		case Y.TD:
		case Y.TR:
		case Y.HEAD:
		case Y.FRAME:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.CAPTION:
		case Y.COLGROUP: break;
		default: rl(e, t);
	}
}
function al(e, t) {
	if (e.openElements.hasInScope(Y.BODY) && (e.insertionMode = Q.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function ol(e, t) {
	e.openElements.hasInScope(Y.BODY) && (e.insertionMode = Q.AFTER_BODY, tu(e, t));
}
function sl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function cl(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(Y.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(Y.FORM) : n && e.openElements.remove(n));
}
function ll(e) {
	e.openElements.hasInButtonScope(Y.P) || e._insertFakeElement(J.P, Y.P), e._closePElement();
}
function ul(e) {
	e.openElements.hasInListItemScope(Y.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(Y.LI), e.openElements.popUntilTagNamePopped(Y.LI));
}
function dl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function fl(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function pl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function ml(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(J.BR, Y.BR), e.openElements.pop(), e.framesetOk = !1;
}
function hl(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== Y.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function gl(e, t) {
	switch (t.tagID) {
		case Y.A:
		case Y.B:
		case Y.I:
		case Y.S:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.NOBR:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			ec(e, t);
			break;
		case Y.P:
			ll(e);
			break;
		case Y.DL:
		case Y.UL:
		case Y.OL:
		case Y.DIR:
		case Y.DIV:
		case Y.NAV:
		case Y.PRE:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.BUTTON:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.DETAILS:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.LISTING:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			sl(e, t);
			break;
		case Y.LI:
			ul(e);
			break;
		case Y.DD:
		case Y.DT:
			dl(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			fl(e);
			break;
		case Y.BR:
			ml(e);
			break;
		case Y.BODY:
			al(e, t);
			break;
		case Y.HTML:
			ol(e, t);
			break;
		case Y.FORM:
			cl(e);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			pl(e, t);
			break;
		case Y.TEMPLATE:
			hc(e, t);
			break;
		default: hl(e, t);
	}
}
function _l(e, t) {
	e.tmplInsertionModeStack.length > 0 ? $l(e, t) : ic(e, t);
}
function vl(e, t) {
	var n;
	t.tagID === Y.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function yl(e, t) {
	e._err(t, G.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function bl(e, t) {
	if (e.openElements.currentTagId !== void 0 && Gs.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = Q.IN_TABLE_TEXT, t.type) {
		case K.CHARACTER:
			Nl(e, t);
			break;
		case K.WHITESPACE_CHARACTER: Ml(e, t);
	}
	else jl(e, t);
}
function xl(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_CAPTION;
}
function Sl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_COLUMN_GROUP;
}
function Cl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.COLGROUP, Y.COLGROUP), e.insertionMode = Q.IN_COLUMN_GROUP, Rl(e, t);
}
function wl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_TABLE_BODY;
}
function Tl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.TBODY, Y.TBODY), e.insertionMode = Q.IN_TABLE_BODY, Vl(e, t);
}
function El(e, t) {
	e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function Dl(e, t) {
	Hc(t) ? e._appendElement(t, q.HTML) : jl(e, t), t.ackSelfClosing = !0;
}
function Ol(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, q.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function kl(e, t) {
	switch (t.tagID) {
		case Y.TD:
		case Y.TH:
		case Y.TR:
			Tl(e, t);
			break;
		case Y.STYLE:
		case Y.SCRIPT:
		case Y.TEMPLATE:
			pc(e, t);
			break;
		case Y.COL:
			Cl(e, t);
			break;
		case Y.FORM:
			Ol(e, t);
			break;
		case Y.TABLE:
			El(e, t);
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			wl(e, t);
			break;
		case Y.INPUT:
			Dl(e, t);
			break;
		case Y.CAPTION:
			xl(e, t);
			break;
		case Y.COLGROUP:
			Sl(e, t);
			break;
		default: jl(e, t);
	}
}
function Al(e, t) {
	switch (t.tagID) {
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode());
			break;
		case Y.TEMPLATE:
			hc(e, t);
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: jl(e, t);
	}
}
function jl(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, Cc(e, t), e.fosterParentingEnabled = n;
}
function Ml(e, t) {
	e.pendingCharacterTokens.push(t);
}
function Nl(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Pl(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) jl(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var Fl = /* @__PURE__ */ new Set([
	Y.CAPTION,
	Y.COL,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]);
function Il(e, t) {
	let n = t.tagID;
	Fl.has(n) ? e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, kl(e, t)) : il(e, t);
}
function Ll(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.CAPTION:
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, n === Y.TABLE && Al(e, t));
			break;
		case Y.BODY:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: gl(e, t);
	}
}
function Rl(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.COL:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TEMPLATE:
			pc(e, t);
			break;
		default: Bl(e, t);
	}
}
function zl(e, t) {
	switch (t.tagID) {
		case Y.COLGROUP:
			e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case Y.TEMPLATE:
			hc(e, t);
			break;
		case Y.COL: break;
		default: Bl(e, t);
	}
}
function Bl(e, t) {
	e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE, e._processToken(t));
}
function Vl(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_ROW;
			break;
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(J.TR, Y.TR), e.insertionMode = Q.IN_ROW, Ul(e, t);
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, kl(e, t));
			break;
		default: kl(e, t);
	}
}
function Hl(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case Y.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, Al(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH:
		case Y.TR: break;
		default: Al(e, t);
	}
}
function Ul(e, t) {
	switch (t.tagID) {
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Vl(e, t));
			break;
		default: kl(e, t);
	}
}
function Wl(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY);
			break;
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Hl(e, t));
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(Y.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Hl(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH: break;
		default: Al(e, t);
	}
}
function Gl(e, t) {
	let n = t.tagID;
	Fl.has(n) ? (e.openElements.hasInTableScope(Y.TD) || e.openElements.hasInTableScope(Y.TH)) && (e._closeTableCell(), Ul(e, t)) : il(e, t);
}
function Kl(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.TD:
		case Y.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_ROW);
			break;
		case Y.TABLE:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), Wl(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML: break;
		default: gl(e, t);
	}
}
function ql(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.OPTGROUP:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.HR:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.INPUT:
		case Y.KEYGEN:
		case Y.TEXTAREA:
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), t.tagID !== Y.SELECT && e._processStartTag(t));
			break;
		case Y.SCRIPT:
		case Y.TEMPLATE: pc(e, t);
	}
}
function Jl(e, t) {
	switch (t.tagID) {
		case Y.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === Y.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === Y.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop();
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop();
			break;
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode());
			break;
		case Y.TEMPLATE: hc(e, t);
	}
}
function Yl(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : ql(e, t);
}
function Xl(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Jl(e, t);
}
function Zl(e, t) {
	switch (t.tagID) {
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			pc(e, t);
			break;
		case Y.CAPTION:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE, e.insertionMode = Q.IN_TABLE, kl(e, t);
			break;
		case Y.COL:
			e.tmplInsertionModeStack[0] = Q.IN_COLUMN_GROUP, e.insertionMode = Q.IN_COLUMN_GROUP, Rl(e, t);
			break;
		case Y.TR:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE_BODY, e.insertionMode = Q.IN_TABLE_BODY, Vl(e, t);
			break;
		case Y.TD:
		case Y.TH:
			e.tmplInsertionModeStack[0] = Q.IN_ROW, e.insertionMode = Q.IN_ROW, Ul(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = Q.IN_BODY, e.insertionMode = Q.IN_BODY, il(e, t);
	}
}
function Ql(e, t) {
	t.tagID === Y.TEMPLATE && hc(e, t);
}
function $l(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : ic(e, t);
}
function eu(e, t) {
	t.tagID === Y.HTML ? il(e, t) : nu(e, t);
}
function tu(e, t) {
	if (t.tagID === Y.HTML) {
		if (e.fragmentContext || (e.insertionMode = Q.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === Y.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else nu(e, t);
}
function nu(e, t) {
	e.insertionMode = Q.IN_BODY, Cc(e, t);
}
function ru(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML);
			break;
		case Y.FRAME:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.NOFRAMES: pc(e, t);
	}
}
function iu(e, t) {
	t.tagID === Y.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== Y.FRAMESET && (e.insertionMode = Q.AFTER_FRAMESET));
}
function au(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.NOFRAMES: pc(e, t);
	}
}
function ou(e, t) {
	t.tagID === Y.HTML && (e.insertionMode = Q.AFTER_AFTER_FRAMESET);
}
function su(e, t) {
	t.tagID === Y.HTML ? il(e, t) : cu(e, t);
}
function cu(e, t) {
	e.insertionMode = Q.IN_BODY, Cc(e, t);
}
function lu(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			il(e, t);
			break;
		case Y.NOFRAMES: pc(e, t);
	}
}
function uu(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function du(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function fu(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== q.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function pu(e, t) {
	if (Ns(t)) fu(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === q.MATHML ? Ps(t) : r === q.SVG && (Ls(t), Fs(t)), Is(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function mu(e, t) {
	if (t.tagID === Y.P || t.tagID === Y.BR) {
		fu(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === q.HTML) {
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
function hu(e) {
	return e === 34 ? "&quot;" : e === 38 ? "&amp;" : e === 39 ? "&apos;" : e === 60 ? "&lt;" : e === 62 ? "&gt;" : "&nbsp;";
}
function gu(e, t) {
	if (e.lastIndex = 0, !e.test(t)) return t;
	let n = "", r = 0;
	do {
		let i = e.lastIndex - 1;
		r !== i && (n += t.substring(r, i));
		let a = t.charCodeAt(i);
		n += hu(a), r = i + 1;
	} while (e.test(t));
	return n + t.substring(r);
}
var _u = /["&\u{A0}]/gu;
function vu(e) {
	return gu(_u, e);
}
var yu = /[&<>\u{A0}]/gu;
function bu(e) {
	return gu(yu, e);
}
//#endregion
//#region node_modules/parse5/dist/serializer/index.js
var xu = /* @__PURE__ */ new Set([
	J.AREA,
	J.BASE,
	J.BASEFONT,
	J.BGSOUND,
	J.BR,
	J.COL,
	J.EMBED,
	J.FRAME,
	J.HR,
	J.IMG,
	J.INPUT,
	J.KEYGEN,
	J.LINK,
	J.META,
	J.PARAM,
	J.SOURCE,
	J.TRACK,
	J.WBR
]);
function Su(e, t) {
	return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === q.HTML && xu.has(t.treeAdapter.getTagName(e));
}
var Cu = {
	treeAdapter: ms,
	scriptingEnabled: !0
};
function wu(e, t) {
	return Eu(e, {
		...Cu,
		...t
	});
}
function Tu(e, t) {
	let n = "", r = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === J.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === q.HTML ? t.treeAdapter.getTemplateContent(e) : e, i = t.treeAdapter.getChildNodes(r);
	if (i) for (let e of i) n += Eu(e, t);
	return n;
}
function Eu(e, t) {
	return t.treeAdapter.isElementNode(e) ? Du(e, t) : t.treeAdapter.isTextNode(e) ? ku(e, t) : t.treeAdapter.isCommentNode(e) ? Au(e, t) : t.treeAdapter.isDocumentTypeNode(e) ? ju(e, t) : "";
}
function Du(e, t) {
	let n = t.treeAdapter.getTagName(e);
	return `<${n}${Ou(e, t)}>${Su(e, t) ? "" : `${Tu(e, t)}</${n}>`}`;
}
function Ou(e, { treeAdapter: t }) {
	let n = "";
	for (let r of t.getAttrList(e)) {
		if (n += " ", r.namespace) switch (r.namespace) {
			case q.XML:
				n += `xml:${r.name}`;
				break;
			case q.XMLNS:
				r.name !== "xmlns" && (n += "xmlns:"), n += r.name;
				break;
			case q.XLINK:
				n += `xlink:${r.name}`;
				break;
			default: n += `${r.prefix}:${r.name}`;
		}
		else n += r.name;
		n += `="${vu(r.value)}"`;
	}
	return n;
}
function ku(e, t) {
	let { treeAdapter: n } = t, r = n.getTextNodeContent(e), i = n.getParentNode(e), a = i && n.isElementNode(i) && n.getTagName(i);
	return a && n.getNamespaceURI(i) === q.HTML && Bo(a, t.scriptingEnabled) ? r : bu(r);
}
function Au(e, { treeAdapter: t }) {
	return `<!--${t.getCommentNodeContent(e)}-->`;
}
function ju(e, { treeAdapter: t }) {
	return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
}
//#endregion
//#region node_modules/parse5/dist/index.js
function Mu(e, t, n) {
	typeof e == "string" && (n = t, t = e, e = null);
	let r = qs.getFragmentParser(e, n);
	return r.tokenizer.write(t, !0), r.getFragment();
}
//#endregion
//#region src/runtime/managedThreeDObjects.ts
function Nu(e, t, n, r, i = 1, a, o) {
	let s = /* @__PURE__ */ new Map(), c = !Array.isArray(r) && r !== void 0;
	if (c && (!r || r.managedAngleCodecVersion !== 1 || r.angleUnit !== "degrees" || !Array.isArray(r.objects))) throw Error("Unsupported managed 3D snapshot unit, version or shape.");
	let l = Array.isArray(r) ? r : r?.objects ?? [];
	if (c && r.cameraTransition && !Array.isArray(r.cameraTransition.fromObjects)) throw Error("Invalid managed 3D Camera transition snapshot.");
	if (c) {
		for (let e of [...l, ...r.cameraTransition?.fromObjects ?? []]) if (!e || !Array.isArray(e.rotation) || e.rotation.length !== 3 || !e.rotation.every((e) => typeof e == "number" && Number.isFinite(e)) || e.kind === "light-3d" && e.angle !== void 0 && (typeof e.angle != "number" || !Number.isFinite(e.angle))) throw Error("Invalid finite managed 3D angle.");
	}
	let u = Math.PI / 180, d = (e) => e.lightType === "point" || e.lightType === "spot" || e.lightType === "ambient" ? e.lightType : "directional", f = (t) => {
		let n = d(t);
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
	}, p = (t) => {
		let n = t.geometry;
		return n?.primitive === "sphere" ? new e.SphereGeometry(n.radius, n.widthSegments, n.heightSegments) : n?.primitive === "plane" ? new e.PlaneGeometry(n.width, n.height) : new e.BoxGeometry(n?.primitive === "box" ? n.width : 1, n?.primitive === "box" ? n.height : 1, n?.primitive === "box" ? n.depth : 1);
	}, m = (t) => {
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
	}, h = (t) => new {
		basic: e.MeshBasicMaterial,
		lambert: e.MeshLambertMaterial,
		phong: e.MeshPhongMaterial,
		standard: e.MeshStandardMaterial,
		physical: e.MeshPhysicalMaterial,
		toon: e.MeshToonMaterial,
		normal: e.MeshNormalMaterial,
		matcap: e.MeshMatcapMaterial
	}[t.material?.type ?? "phong"](m(t)), g = (e, t) => {
		for (let [n, r] of Object.entries(m(t))) [
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
	}, _ = (e) => {
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
	}, v = (e) => {
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
	for (let t of l) {
		if (!t || typeof t.id != "string" || t.kind !== "null-3d" && t.kind !== "light-3d" && t.kind !== "camera-3d" && t.kind !== "mesh-3d" && t.kind !== "model-3d" || s.has(t.id)) continue;
		let r = n.get(t.id);
		if (r?.kind === "camera-3d" && !!r.object.isOrthographicCamera != (t.cameraType === "orthographic") && (_(r), r = void 0), r?.kind === "light-3d" && r.lightType !== d(t) && (_(r), r = void 0), r?.kind === "model-3d" && r.modelAssetId !== t.modelAssetId && (_(r), r = void 0), !r || r.kind !== t.kind) {
			if (r && _(r), t.kind === "model-3d") {
				let e = t.modelAssetId ?? "", n = v(e);
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
				object: f(t),
				lightType: d(t)
			} : t.kind === "camera-3d" ? {
				kind: "camera-3d",
				object: t.cameraType === "orthographic" ? new e.OrthographicCamera(-202.5 * i, 202.5 * i, 202.5, -202.5, 1, 1e5) : new e.PerspectiveCamera(60, i, 1, 1e5)
			} : {
				kind: "mesh-3d",
				object: new e.Mesh(p(t), h(t)),
				geometrySignature: JSON.stringify(t.geometry),
				materialSignature: t.material?.type ?? "phong"
			};
		} else if (r.kind === "mesh-3d") {
			let e = JSON.stringify(t.geometry), n = t.material?.type ?? "phong";
			r.geometrySignature !== e && (r.object.geometry.dispose(), r.object.geometry = p(t), r.geometrySignature = e), r.materialSignature !== n && (r.object.material.dispose(), r.object.material = h(t), r.materialSignature = n);
		}
		s.set(t.id, r);
	}
	for (let [e, t] of n) s.has(e) || _(t);
	for (let n of l) {
		let r = s.get(n?.id);
		if (!r) continue;
		let a = s.get(n.parentPlacementId ?? "")?.object ?? t;
		r.object.parent !== a && a.add(r.object);
		let o = (e, t) => Array.isArray(e) && e.length === 3 && e.every((e) => typeof e == "number" && Number.isFinite(e)) ? e : t;
		r.object.position.fromArray(o(n.position, [
			0,
			0,
			0
		]));
		let l = o(n.rotation, [
			0,
			0,
			0
		]);
		if (r.object.rotation.fromArray([...c ? l.map((e) => e * u) : l, "XYZ"]), r.object.scale.fromArray(o(n.scale, [
			1,
			1,
			1
		])), r.kind === "light-3d") {
			if (r.object.color.set(n.color ?? "#ffffff"), r.object.intensity = Number.isFinite(n.intensity) ? n.intensity : 1, (r.lightType === "point" || r.lightType === "spot") && (r.object.distance = n.distance ?? 0, r.object.decay = n.decay ?? 2), r.lightType === "spot") {
				let e = n.angle === void 0 ? void 0 : c ? n.angle * u : n.angle;
				r.object.angle = c ? e !== void 0 && e > 0 && e <= Math.PI / 2 ? e : 1.0472 : e ?? 1.0472, r.object.penumbra = n.penumbra ?? 0;
			}
		} else if (r.kind === "camera-3d") {
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
				e !== r.replacementType && (r.replacement?.dispose(), r.replacement = h(i), r.replacementType = e), g(r.replacement, i);
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
			t.color?.set(n.material?.color ?? "#ffffff"), t.opacity = i, t.transparent = a, t.wireframe = o, t.side = s, c && (t.needsUpdate = !0), g(t, n);
		}
	}
	let y = new Map(l.map((e) => [e.id, e])), b = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), S = (n) => {
		if (b.has(n) || x.has(n)) return;
		let r = y.get(n);
		if (r?.kind !== "camera-3d") return;
		x.add(n);
		let i = [r.parentPlacementId, r.aimTargetPlacementId];
		for (let e of i) for (; e;) S(e), e = y.get(e)?.parentPlacementId;
		let a = s.get(n), o = r.aimTarget, c = r.aimTargetPlacementId ? s.get(r.aimTargetPlacementId)?.object : void 0;
		if (a?.kind === "camera-3d" && (c || o?.length === 3 && o.every(Number.isFinite))) {
			t.updateMatrixWorld(!0);
			let n = c?.getWorldPosition(new e.Vector3());
			n ? a.object.lookAt(n.x, n.y, n.z) : o && a.object.lookAt(o[0], o[1], o[2]);
		}
		x.delete(n), b.add(n);
	};
	for (let e of l) e.kind === "camera-3d" && S(e.id);
	return s;
}
//#endregion
//#region src/runtime/managedThreeDFrameInput.ts
function Pu(e) {
	let t = e.managedThreeDScene;
	if (t !== void 0) {
		if (!t || t.managedAngleCodecVersion !== 1 || t.angleUnit !== "degrees" || !Array.isArray(t.objects) || t.cameraTransition && !Array.isArray(t.cameraTransition.fromObjects)) throw Error("Unsupported managed 3D frame unit, version or shape.");
		if (e.threeDObjects !== void 0 || e.threeDCameraId !== void 0 || e.threeDCameraTransition !== void 0) throw Error("A 3D frame cannot mix legacy and managed snapshots.");
		let n = t.cameraTransition;
		for (let e of [...t.objects, ...n?.fromObjects ?? []]) if (!e || !Array.isArray(e.rotation) || e.rotation.length !== 3 || !e.rotation.every((e) => typeof e == "number" && Number.isFinite(e)) || e.kind === "light-3d" && e.angle !== void 0 && (typeof e.angle != "number" || !Number.isFinite(e.angle))) throw Error("Invalid finite managed 3D frame angle.");
		return {
			snapshot: t,
			objects: t.objects,
			cameraId: t.cameraId,
			transition: n,
			fromSnapshot: n ? {
				...t,
				objects: n.fromObjects,
				cameraId: n.fromCameraId,
				cameraTransition: void 0
			} : void 0
		};
	}
	let n = Array.isArray(e.threeDObjects) ? e.threeDObjects : [];
	return {
		snapshot: n,
		objects: n,
		cameraId: e.threeDCameraId,
		transition: e.threeDCameraTransition,
		fromSnapshot: e.threeDCameraTransition?.fromObjects
	};
}
//#endregion
//#region src/runtime/editorThreeDHelpers.ts
function Fu(e) {
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
function Iu(e, t) {
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
function Lu(e, t) {
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
function Ru(e) {
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
var zu = {
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
}, Bu = {
	script: "script-src",
	style: "style-src",
	font: "font-src",
	image: "img-src",
	data: "connect-src",
	other: "connect-src"
};
function Vu(e, t, n = !1, r = !1, i = !1, a = !1) {
	let o = /* @__PURE__ */ new Map(), s = Hu(t ?? "");
	if (s) for (let e of Object.values(Bu)) {
		let t = o.get(e) ?? /* @__PURE__ */ new Set();
		t.add(s), o.set(e, t);
	}
	for (let t of e) {
		let e = Hu(t.url);
		if (!e) continue;
		let n = Bu[t.kind], r = o.get(n) ?? /* @__PURE__ */ new Set();
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
function Hu(e) {
	try {
		let t = new URL(e);
		return t.protocol !== "http:" && t.protocol !== "https:" || t.origin === "null" ? null : t.origin;
	} catch {
		return null;
	}
}
//#endregion
//#region src/runtime/centi.bitmapFont.js?raw
var Uu = "(function (Centi) {\n    Centi.prototype.bmFont = \n    Centi.prototype.bitmapFont = function(size){\n        this.bitmapFontSize = size;\n	};\n    Centi.prototype.bmTxt = \n    Centi.prototype.bitmapText = function(str, x, y, size){\n        if ( this.bitmapFontSize == undefined ) {\n            this.bitmapFontSize = 32;\n        }\n        if ( size != undefined ) {\n            this.bitmapFontSize = size;\n        }\n        size = this.bitmapFontSize;\n        var _str = str;\n        if ( typeof str !== \"string\" ) {\n            _str = str.toString(10);\n        }\n        for ( var i=0; i<_str.length; i++ ) {\n            var code = _str.charCodeAt(i);\n            var hex = this.getBitmapFontCode(code);\n            this.bitmap5by8(hex, x, y, size/8);\n            x += (size / 8) * 6;\n        }\n	};\n    Centi.prototype.bm5x8 = \n    Centi.prototype.bm5by8 = \n    Centi.prototype.bitmap5by8 = function(bin, x, y, dot_size){\n        var bit_max = Math.pow(2,32);\n        var bin_32bit_arr = [bin%bit_max, Math.floor(bin/bit_max)];\n        var c = 0;\n        for ( var i=0; i<5; i++ ) {\n            if ( i == 0 ) c = bin_32bit_arr[0];\n            if ( i == 4 ) c = bin_32bit_arr[1];\n            for ( var j=0; j<8; j++ ) {\n                if ( c & 1 ) {\n                    this.rect(x+i*dot_size, y+j*dot_size, dot_size, dot_size);\n                }\n                c = c >> 1;\n            }\n        }\n	};\n    Centi.prototype.getBitmapFontCode = function(code) {\n        var val = 0;\n        if ( code >= 0x20 && code <= 0x7F ) {\n            if ( !this.bitmapFontCodes ) {\n                this.bitmapFontCodes = _initCodes();\n//                for ( var i=this.bitmapFontCodes.length-1; i>=0; i-- ) {\n//                    for ( var j=0; j<this.bitmapFontCodes[i].length; j++ ) {\n//                        this.bitmapFontCodes[i][j] = parseInt(this.bitmapFontCodes[i][j].toString(10));\n//                    }\n//                }\n            }\n            var arr = this.bitmapFontCodes[code - 0x20];\n            for ( var i=arr.length-1; i>=0; i-- ) {\n                val += arr[i] * Math.pow(2, i*8);\n            }\n        }\n        return val;\n        function _initCodes() {\n            return [\n                [ // 20\n                    0b00000000,\n                    0b00000000,\n                    0b00000000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 21\n                    0b00000000,\n                    0b00000000,\n                    0b01001111,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 22\n                    0b00000000,\n                    0b00000111,\n                    0b00000000,\n                    0b00000111,\n                    0b00000000  \n                ],\n                  [ // 23\n                    0b00010100,\n                    0b01111111,\n                    0b00010100,\n                    0b01111111,\n                    0b00010100  \n                ],\n                  [ // 24\n                    0b00100100,\n                    0b00101010,\n                    0b01111111,\n                    0b00101010,\n                    0b00010010  \n                ],\n                  [ // 25\n                    0b00100011,\n                    0b00010011,\n                    0b00001000,\n                    0b01100100,\n                    0b01100010  \n                ],\n                  [ // 26\n                    0b00110110,\n                    0b01001001,\n                    0b01010101,\n                    0b00100010,\n                    0b01010000  \n                ],\n                  [ // 27\n                    0b00000000,\n                    0b00000101,\n                    0b00000011,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 28\n                    0b00000000,\n                    0b00011100,\n                    0b00100010,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 29\n                    0b00000000,\n                    0b01000001,\n                    0b00100010,\n                    0b00011100,\n                    0b00000000  \n                ],\n                  [ // 2A\n                    0b00010100,\n                    0b00001000,\n                    0b00111110,\n                    0b00001000,\n                    0b00010100  \n                ],\n                  [ // 2B\n                    0b00001000,\n                    0b00001000,\n                    0b00111110,\n                    0b00001000,\n                    0b00001000  \n                ],\n                  [ // 2C\n                    0b00000000,\n                    0b01010000,\n                    0b00110000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 2D\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000  \n                ],\n                  [ // 2E\n                    0b00000000,\n                    0b01100000,\n                    0b01100000,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 2F\n                    0b00100000,\n                    0b00010000,\n                    0b00001000,\n                    0b00000100,\n                    0b00000010  \n                ],\n                  [ // 30\n                    0b00111110,\n                    0b01010001,\n                    0b01001001,\n                    0b01000101,\n                    0b00111110  \n                ],\n                  [ // 31\n                    0b00000000,\n                    0b01000010,\n                    0b01111111,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 32\n                    0b01000010,\n                    0b01100001,\n                    0b01010001,\n                    0b01001001,\n                    0b01000110  \n                ],\n                  [ // 33\n                    0b00100001,\n                    0b01000001,\n                    0b01000101,\n                    0b01001011,\n                    0b00110001  \n                ],\n                  [ // 34\n                    0b00011000,\n                    0b00010100,\n                    0b00010010,\n                    0b01111111,\n                    0b00010000  \n                ],\n                  [ // 35\n                    0b00100111,\n                    0b01000101,\n                    0b01000101,\n                    0b01000101,\n                    0b00111001  \n                ],\n                  [ // 36\n                    0b00111100,\n                    0b01001010,\n                    0b01001001,\n                    0b01001001,\n                    0b00110000  \n                ],\n                  [ // 37\n                    0b00000001,\n                    0b01110001,\n                    0b00001001,\n                    0b00000101,\n                    0b00000011  \n                ],\n                  [ // 38\n                    0b00110110,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110110  \n                ],\n                  [ // 39\n                    0b00000110,\n                    0b01001001,\n                    0b01001001,\n                    0b00101001,\n                    0b00011110  \n                ],\n                  [ // 3A\n                    0b00000000,\n                    0b00110110,\n                    0b00110110,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 3B\n                    0b00000000,\n                    0b01010110,\n                    0b00110110,\n                    0b00000000,\n                    0b00000000  \n                ],\n                  [ // 3C\n                    0b00001000,\n                    0b00010100,\n                    0b00100010,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 3D\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100  \n                ],\n                  [ // 3E\n                    0b00000000,\n                    0b01000001,\n                    0b00100010,\n                    0b00010100,\n                    0b00001000  \n                ],\n                  [ // 3F\n                    0b00000010,\n                    0b00000001,\n                    0b01010001,\n                    0b00001001,\n                    0b00000110  \n                ],\n                  [ // 40\n                    0b00110010,\n                    0b01001001,\n                    0b01111001,\n                    0b01000001,\n                    0b00111110  \n                ],\n                  [ // 41\n                    0b01111110,\n                    0b00010001,\n                    0b00010001,\n                    0b00010001,\n                    0b01111110  \n                ],\n                  [ // 42\n                    0b01111111,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110110  \n                ],\n                  [ // 43\n                    0b00111110,\n                    0b01000001,\n                    0b01000001,\n                    0b01000001,\n                    0b00100010  \n                ],\n                  [ // 44\n                    0b01111111,\n                    0b01000001,\n                    0b01000001,\n                    0b00100010,\n                    0b00011100  \n                ],\n                  [ // 45\n                    0b01111111,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b01000001  \n                ],\n                  [ // 46\n                    0b01111111,\n                    0b00001001,\n                    0b00001001,\n                    0b00001001,\n                    0b00000001  \n                ],\n                  [ // 47\n                    0b00111110,\n                    0b01000001,\n                    0b01001001,\n                    0b01001001,\n                    0b01111010  \n                ],\n                  [ // 48\n                    0b01111111,\n                    0b00001000,\n                    0b00001000,\n                    0b00001000,\n                    0b01111111  \n                ],\n                  [ // 49\n                    0b00000000,\n                    0b01000001,\n                    0b01111111,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 4A\n                    0b00100000,\n                    0b01000000,\n                    0b01000001,\n                    0b00111111,\n                    0b00000001  \n                ],\n                  [ // 4B\n                    0b01111111,\n                    0b00001000,\n                    0b00010100,\n                    0b00100010,\n                    0b01000001  \n                ],\n                  [ // 4C\n                    0b01111111,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000  \n                ],\n                  [ // 4D\n                    0b01111111,\n                    0b00000010,\n                    0b00001100,\n                    0b00000010,\n                    0b01111111  \n                ],\n                  [ // 4E\n                    0b01111111,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b01111111  \n                ],\n                  [ // 4F\n                    0b00111110,\n                    0b01000001,\n                    0b01000001,\n                    0b01000001,\n                    0b00111110  \n                ],\n                  [ // 50\n                    0b01111111,\n                    0b00001001,\n                    0b00001001,\n                    0b00001001,\n                    0b00000110  \n                ],\n                  [ // 51\n                    0b00111110,\n                    0b01000001,\n                    0b01010001,\n                    0b00100001,\n                    0b01011110  \n                ],\n                  [ // 52\n                    0b01111111,\n                    0b00001001,\n                    0b00011001,\n                    0b00101001,\n                    0b01000110  \n                ],\n                  [ // 53\n                    0b01000110,\n                    0b01001001,\n                    0b01001001,\n                    0b01001001,\n                    0b00110001  \n                ],\n                  [ // 54\n                    0b00000001,\n                    0b00000001,\n                    0b01111111,\n                    0b00000001,\n                    0b00000001  \n                ],\n                  [ // 55\n                    0b00111111,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b00111111  \n                ],\n                  [ // 56\n                    0b00011111,\n                    0b00100000,\n                    0b01000000,\n                    0b00100000,\n                    0b00011111  \n                ],\n                  [ // 57\n                    0b00111111,\n                    0b01000000,\n                    0b00111000,\n                    0b01000000,\n                    0b00111111  \n                ],\n                  [ // 58\n                    0b01100011,\n                    0b00010100,\n                    0b00001000,\n                    0b00010100,\n                    0b01100011  \n                ],\n                  [ // 59\n                    0b00000111,\n                    0b00001000,\n                    0b01110000,\n                    0b00001000,\n                    0b00000111  \n                ],\n                  [ // 5A\n                    0b01100001,\n                    0b01010001,\n                    0b01001001,\n                    0b01000101,\n                    0b01000011  \n                ],\n                  [ // 5B\n                    0b00000000,\n                    0b01111111,\n                    0b01000001,\n                    0b01000001,\n                    0b00000000  \n                ],\n                  [ // 5C\n                    0b00000010,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b00100000  \n                ],\n                  [ // 5D\n                    0b00000000,\n                    0b01000001,\n                    0b01000001,\n                    0b01111111,\n                    0b00000000  \n                ],\n                  [ // 5E\n                    0b00000100,\n                    0b00000010,\n                    0b00000001,\n                    0b00000010,\n                    0b00000100  \n                ],\n                  [ // 5F\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000,\n                    0b01000000  \n                ],\n                  [ // 60\n                    0b00000000,\n                    0b00000001,\n                    0b00000010,\n                    0b00000100,\n                    0b00000000  \n                ],\n                  [ // 61\n                    0b00100000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b01111000  \n                ],\n                  [ // 62\n                    0b01111111,\n                    0b01001000,\n                    0b01000100,\n                    0b01000100,\n                    0b00111000  \n                ],\n                  [ // 63\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01000100,\n                    0b00100000  \n                ],\n                  [ // 64\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01001000,\n                    0b01111111  \n                ],\n                  [ // 65\n                    0b00111000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b00011000  \n                ],\n                  [ // 66\n                    0b00001000,\n                    0b01111110,\n                    0b00001001,\n                    0b00000001,\n                    0b00000010  \n                ],\n                  [ // 67\n                    0b00001100,\n                    0b01010010,\n                    0b01010010,\n                    0b01010010,\n                    0b00111110  \n                ],\n                  [ // 68\n                    0b01111111,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 69\n                    0b00000000,\n                    0b01000100,\n                    0b01111101,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 6A\n                    0b00100000,\n                    0b01000000,\n                    0b01000100,\n                    0b00111101,\n                    0b00000000  \n                ],\n                  [ // 6B\n                    0b01111111,\n                    0b00010000,\n                    0b00101000,\n                    0b01000100,\n                    0b00000000  \n                ],\n                  [ // 6C\n                    0b00000000,\n                    0b01000001,\n                    0b01111111,\n                    0b01000000,\n                    0b00000000  \n                ],\n                  [ // 6D\n                    0b01111100,\n                    0b00000100,\n                    0b00011000,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 6E\n                    0b01111100,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b01111000  \n                ],\n                  [ // 6F\n                    0b00111000,\n                    0b01000100,\n                    0b01000100,\n                    0b01000100,\n                    0b00111000  \n                ],\n                  [ // 70\n                    0b01111100,\n                    0b00010100,\n                    0b00010100,\n                    0b00010100,\n                    0b00001000  \n                ],\n                  [ // 71\n                    0b00001000,\n                    0b00010100,\n                    0b00010100,\n                    0b00011000,\n                    0b01111100  \n                ],\n                  [ // 72\n                    0b01111100,\n                    0b00001000,\n                    0b00000100,\n                    0b00000100,\n                    0b00001000  \n                ],\n                  [ // 73\n                    0b01001000,\n                    0b01010100,\n                    0b01010100,\n                    0b01010100,\n                    0b00100000  \n                ],\n                  [ // 74\n                    0b00000100,\n                    0b00111111,\n                    0b01000100,\n                    0b01000000,\n                    0b00100000  \n                ],\n                  [ // 75\n                    0b00111100,\n                    0b01000000,\n                    0b01000000,\n                    0b00100000,\n                    0b01111100  \n                ],\n                  [ // 76\n                    0b00011100,\n                    0b00100000,\n                    0b01000000,\n                    0b00100000,\n                    0b00011100  \n                ],\n                  [ // 77\n                    0b00111100,\n                    0b01000000,\n                    0b00110000,\n                    0b01000000,\n                    0b00111100  \n                ],\n                  [ // 78\n                    0b01000100,\n                    0b00101000,\n                    0b00010000,\n                    0b00101000,\n                    0b01000100  \n                ],\n                  [ // 79\n                    0b00001100,\n                    0b01010000,\n                    0b01010000,\n                    0b01010000,\n                    0b00111100\n                ],\n                  [ // 7A\n                    0b01000100,\n                    0b01100100,\n                    0b01010100,\n                    0b01001100,\n                    0b01000100\n                ],\n                  [ // 7B\n                    0b00000000,\n                    0b00001000,\n                    0b00110110,\n                    0b01000001,\n                    0b00000000\n                ],\n                  [ // 7C\n                    0b00000000,\n                    0b00000000,\n                    0b01111111,\n                    0b00000000,\n                    0b00000000\n                ],\n                  [ // 7D\n                    0b00000000,\n                    0b01000001,\n                    0b00110110,\n                    0b00001000,\n                    0b00000000  \n                ],\n                  [ // 7E\n                    0b00001000,\n                    0b00000100,\n                    0b00001000,\n                    0b00010000,\n                    0b00001000  \n                ],\n                  [ // 7F\n                    0b00000001,\n                    0b00101010,\n                    0b01111100,\n                    0b00101010,\n                    0b00000001  \n                ]\n            ];\n        }\n    }\n})(Centi);", Wu = "(function(Centi) {\n\n	function readVec2(args) {\n		var arg0 = args[0];\n		if (args.length >= 2 && typeof arg0 === 'number') {\n			return new Centi.Vec2(args[0], args[1]);\n		} else if (Array.isArray(arg0)) {\n			return new Centi.Vec2(arg0[0], arg0[1]);\n		} else if (arg0 && arg0.x !== undefined && arg0.y !== undefined) {\n			return new Centi.Vec2(arg0.x, arg0.y);\n		}\n		return new Centi.Vec2();\n	}\n\n	Centi.prototype.Matrix = function(){\n		return this.new(Centi.Matrix, arguments);\n	};\n\n    Centi.Matrix = function() {\n        var count = arguments.length,\n            ok = true;\n        if (count === 6) {\n            this.set.apply(this, arguments);\n        } else if (count === 1) {\n            var arg = arguments[0];\n            if (arg instanceof Centi.Matrix) {\n                this.set(arg._a, arg._c, arg._b, arg._d, arg._tx, arg._ty);\n            } else if (Array.isArray(arg)) {\n                this.set.apply(this, arg);\n            } else {\n                ok = false;\n            }\n        } else if (count === 0) {\n            this.reset();\n        } else {\n            ok = false;\n        }\n        if (!ok)\n            throw new Error('Unsupported matrix parameters');\n    };\n\n    Centi.Matrix.prototype.set = function(a, c, b, d, tx, ty, _dontNotify) {\n        this._a = a;\n        this._c = c;\n        this._b = b;\n        this._d = d;\n        this._tx = tx;\n        this._ty = ty;\n        if (!_dontNotify)\n            this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype._changed = function() {\n        var owner = this._owner;\n        if (owner) {\n            if (owner._applyMatrix) {\n                owner.transform(null, true);\n            } else {\n                owner._changed(9);\n            }\n        }\n    };\n\n    Centi.Matrix.prototype.clone = function() {\n        return new Centi.Matrix(this._a, this._c, this._b, this._d,\n            this._tx, this._ty);\n    };\n\n    Centi.Matrix.prototype.equals = function(mx) {\n        return mx === this || mx && this._a === mx._a && this._b === mx._b && this._c === mx._c && this._d === mx._d && this._tx === mx._tx && this._ty === mx._ty || false;\n    };\n\n    Centi.Matrix.prototype.reset = function(_dontNotify) {\n        this._a = this._d = 1;\n        this._c = this._b = this._tx = this._ty = 0;\n        if (!_dontNotify)\n            this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.apply = function() {\n        var owner = this._owner;\n        if (owner) {\n            owner.transform(null, true);\n            return this.isIdentity();\n        }\n        return false;\n    };\n\n    Centi.Matrix.prototype.translate = function(x, y) {\n        this._tx += x * this._a + y * this._b;\n        this._ty += x * this._c + y * this._d;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.scale = function(x, y, cx, cy) {\n        var scale = new Centi.Vec2(x, y);\n        if (arguments.length == 4)\n            this.translate(cx, cy);\n        this._a *= scale.x;\n        this._c *= scale.x;\n        this._b *= scale.y;\n        this._d *= scale.y;\n        if (arguments.length == 4)\n            this.translate(-cx, -cy);\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.rotate = function(angle, x, y) {\n        angle *= Math.PI / 180;\n        x = x || 0;\n        y = y || 0;\n        var cos = Math.cos(angle),\n            sin = Math.sin(angle),\n            tx = x - x * cos + y * sin,\n            ty = y - x * sin - y * cos,\n            a = this._a,\n            b = this._b,\n            c = this._c,\n            d = this._d;\n        this._a = cos * a + sin * b;\n        this._b = -sin * a + cos * b;\n        this._c = cos * c + sin * d;\n        this._d = -sin * c + cos * d;\n        this._tx += tx * a + ty * b;\n        this._ty += tx * c + ty * d;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.shear = function(x, y, cx, cy) {\n        var shear = new Centi.Vec2(x, y);\n        if (arguments.length == 4)\n            this.translate(cx, cy);\n        var a = this._a,\n            c = this._c;\n        this._a += shear.y * this._b;\n        this._c += shear.y * this._d;\n        this._b += shear.x * a;\n        this._d += shear.x * c;\n        if (arguments.length == 4)\n            this.translate(-cx, -cy);\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.skew = function(x, y, cx, cy) {\n        var skew = new Centi.Vec2(x, y),\n            toRadians = Math.PI / 180,\n            shear = new Centi.Vec2(Math.tan(skew.x * toRadians),\n                Math.tan(skew.y * toRadians));\n        return this.shear(shear.x, shear.y, cx, cy);\n    };\n\n    Centi.Matrix.prototype.concatenate = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        this._a = a2 * a1 + c2 * b1;\n        this._b = b2 * a1 + d2 * b1;\n        this._c = a2 * c1 + c2 * d1;\n        this._d = b2 * c1 + d2 * d1;\n        this._tx += tx2 * a1 + ty2 * b1;\n        this._ty += tx2 * c1 + ty2 * d1;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.preConcatenate = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            tx1 = this._tx,\n            ty1 = this._ty,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        this._a = a2 * a1 + b2 * c1;\n        this._b = a2 * b1 + b2 * d1;\n        this._c = c2 * a1 + d2 * c1;\n        this._d = c2 * b1 + d2 * d1;\n        this._tx = a2 * tx1 + b2 * ty1 + tx2;\n        this._ty = c2 * tx1 + d2 * ty1 + ty2;\n        this._changed();\n        return this;\n    };\n\n    Centi.Matrix.prototype.chain = function(mx) {\n        var a1 = this._a,\n            b1 = this._b,\n            c1 = this._c,\n            d1 = this._d,\n            tx1 = this._tx,\n            ty1 = this._ty,\n            a2 = mx._a,\n            b2 = mx._b,\n            c2 = mx._c,\n            d2 = mx._d,\n            tx2 = mx._tx,\n            ty2 = mx._ty;\n        return new Centi.Matrix(\n            a2 * a1 + c2 * b1,\n            a2 * c1 + c2 * d1,\n            b2 * a1 + d2 * b1,\n            b2 * c1 + d2 * d1,\n            tx1 + tx2 * a1 + ty2 * b1,\n            ty1 + tx2 * c1 + ty2 * d1);\n    };\n\n    Centi.Matrix.prototype.isIdentity = function() {\n        return this._a === 1 && this._c === 0 && this._b === 0 && this._d === 1 && this._tx === 0 && this._ty === 0;\n    };\n\n    Centi.Matrix.prototype.orNullIfIdentity = function() {\n        return this.isIdentity() ? null : this;\n    };\n\n    Centi.Matrix.prototype.isInvertible = function() {\n        return !!this._getDeterminant();\n    };\n\n    Centi.Matrix.prototype.isSingular = function() {\n        return !this._getDeterminant();\n    };\n\n    Centi.Matrix.prototype.transform = function(src, dst, count) {\n        return arguments.length < 3 ? this._transformPoint(readVec2(arguments)) : this._transformCoordinates(src, dst, count);\n    };\n\n    Centi.Matrix.prototype._transformPoint = function(point, dest, _dontNotify) {\n        var x = point.x,\n            y = point.y;\n        if (!dest)\n            dest = new Centi.Vec2();\n        return dest.set(\n            x * this._a + y * this._b + this._tx,\n            x * this._c + y * this._d + this._ty,\n            _dontNotify\n        );\n    };\n\n    Centi.Matrix.prototype._transformCoordinates = function(src, dst, count) {\n        var i = 0,\n            j = 0,\n            max = 2 * count;\n        while (i < max) {\n            var x = src[i++],\n                y = src[i++];\n            dst[j++] = x * this._a + y * this._b + this._tx;\n            dst[j++] = x * this._c + y * this._d + this._ty;\n        }\n        return dst;\n    };\n\n    Centi.Matrix.prototype._transformCorners = function(rect) {\n        var x1 = rect.x,\n            y1 = rect.y,\n            x2 = x1 + rect.width,\n            y2 = y1 + rect.height,\n            coords = [x1, y1, x2, y1, x2, y2, x1, y2];\n        return this._transformCoordinates(coords, coords, 4);\n    };\n\n    Centi.Matrix.prototype._transformBounds = function(bounds, dest, _dontNotify) {\n        var coords = this._transformCorners(bounds),\n            min = coords.slice(0, 2),\n            max = coords.slice();\n        for (var i = 2; i < 8; i++) {\n            var val = coords[i],\n                j = i & 1;\n            if (val < min[j])\n                min[j] = val;\n            else if (val > max[j])\n                max[j] = val;\n        }\n        return new Centi.Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);\n    };\n\n    Centi.Matrix.prototype.inverseTransform = function() {\n        return this._inverseTransform(readVec2(arguments));\n    };\n\n    Centi.Matrix.prototype._getDeterminant = function() {\n        var det = this._a * this._d - this._b * this._c;\n        return isFinite(det) && !Centi.Numerical.isZero(det) && isFinite(this._tx) && isFinite(this._ty) ? det : null;\n    };\n\n    Centi.Matrix.prototype._inverseTransform = function(point, dest, _dontNotify) {\n        var det = this._getDeterminant();\n        if (!det)\n            return null;\n        var x = point.x - this._tx,\n            y = point.y - this._ty;\n        if (!dest)\n            dest = new Centi.Vec2();\n        return dest.set(\n            (x * this._d - y * this._b) / det, (y * this._a - x * this._c) / det,\n            _dontNotify\n        );\n    };\n\n    Centi.Matrix.prototype.decompose = function() {\n        var a = this._a,\n            b = this._b,\n            c = this._c,\n            d = this._d;\n        if (Centi.Numerical.isZero(a * d - b * c))\n            return null;\n\n        var scaleX = Math.sqrt(a * a + b * b);\n        a /= scaleX;\n        b /= scaleX;\n\n        var shear = a * c + b * d;\n        c -= a * shear;\n        d -= b * shear;\n\n        var scaleY = Math.sqrt(c * c + d * d);\n        c /= scaleY;\n        d /= scaleY;\n        shear /= scaleY;\n\n        if (a * d < b * c) {\n            a = -a;\n            b = -b;\n            shear = -shear;\n            scaleX = -scaleX;\n        }\n\n        return {\n            scaling: new Centi.Vec2(scaleX, scaleY),\n            rotation: -Math.atan2(b, a) * 180 / Math.PI,\n            shearing: shear\n        };\n    };\n\n    Centi.Matrix.prototype.getValues = function() {\n        return [this._a, this._c, this._b, this._d, this._tx, this._ty];\n    };\n\n    Centi.Matrix.prototype.getTranslation = function() {\n        return new Centi.Vec2(this._tx, this._ty);\n    };\n\n    Centi.Matrix.prototype.getScaling = function() {\n        return (this.decompose() || {}).scaling;\n    };\n\n    Centi.Matrix.prototype.getRotation = function() {\n        return (this.decompose() || {}).rotation;\n    };\n\n    Centi.Matrix.prototype.inverted = function() {\n        var det = this._getDeterminant();\n        return det && new Centi.Matrix(\n            this._d / det, -this._c / det, -this._b / det,\n            this._a / det, (this._b * this._ty - this._d * this._tx) / det, (this._c * this._tx - this._a * this._ty) / det);\n    };\n\n    Centi.Matrix.prototype.shiftless = function() {\n        return new Centi.Matrix(this._a, this._c, this._b, this._d, 0, 0);\n    };\n\n    Centi.Matrix.prototype.applyToContext = function(ctx) {\n        ctx.transform(this._a, this._c, this._b, this._d, this._tx, this._ty);\n    };\n\n})(Centi);", Gu = "/**\n * k-d Tree JavaScript - V 1.01\n *\n * https://github.com/ubilabs/kd-tree-javascript\n *\n * @author Mircea Pricop <pricop@ubilabs.net>, 2012\n * @author Martin Kleppe <kleppe@ubilabs.net>, 2012\n * @author Ubilabs http://ubilabs.net, 2012\n * @license MIT License <http://www.opensource.org/licenses/mit-license.php>\n */(function(e,t){if(typeof define===\"function\"&&define.amd){define([\"exports\"],t)}else if(typeof exports===\"object\"){t(exports)}else{t(e.commonJsStrict={})}})(this,function(e){function t(e,t,n){this.obj=e;this.left=null;this.right=null;this.parent=n;this.dimension=t}function n(e,n,i){function o(e,n,r){var s=n%i.length,u,a;if(e.length===0){return null}if(e.length===1){return new t(e[0],s,r)}e.sort(function(e,t){return e[i[s]]-t[i[s]]});u=Math.floor(e.length/2);a=new t(e[u],s,r);a.left=o(e.slice(0,u),n+1,a);a.right=o(e.slice(u+1),n+1,a);return a}function u(e){function t(e){if(e.left){e.left.parent=e;t(e.left)}if(e.right){e.right.parent=e;t(e.right)}}s.root=e;t(s.root)}var s=this;if(!Array.isArray(e))u(e,n,i);else this.root=o(e,0,null);this.toJSON=function(e){if(!e)e=this.root;var n=new t(e.obj,e.dimension,null);if(e.left)n.left=s.toJSON(e.left);if(e.right)n.right=s.toJSON(e.right);return n};this.insert=function(e){function n(t,r){if(t===null){return r}var s=i[t.dimension];if(e[s]<t.obj[s]){return n(t.left,t)}else{return n(t.right,t)}}var r=n(this.root,null),s,o;if(r===null){this.root=new t(e,0,null);return}s=new t(e,(r.dimension+1)%i.length,r);o=i[r.dimension];if(e[o]<r.obj[o]){r.left=s}else{r.right=s}};this.remove=function(e){function n(t){if(t===null){return null}if(t.obj===e){return t}var r=i[t.dimension];if(e[r]<t.obj[r]){return n(t.left,t)}else{return n(t.right,t)}}function r(e){function u(e,t){var n,r,s,o,a;if(e===null){return null}n=i[t];if(e.dimension===t){if(e.right!==null){return u(e.right,t)}return e}r=e.obj[n];s=u(e.left,t);o=u(e.right,t);a=e;if(s!==null&&s.obj[n]>r){a=s}if(o!==null&&o.obj[n]>a.obj[n]){a=o}return a}function a(e,t){var n,r,s,o,u;if(e===null){return null}n=i[t];if(e.dimension===t){if(e.left!==null){return a(e.left,t)}return e}r=e.obj[n];s=a(e.left,t);o=a(e.right,t);u=e;if(s!==null&&s.obj[n]<r){u=s}if(o!==null&&o.obj[n]<u.obj[n]){u=o}return u}var t,n,o;if(e.left===null&&e.right===null){if(e.parent===null){s.root=null;return}o=i[e.parent.dimension];if(e.obj[o]<e.parent.obj[o]){e.parent.left=null}else{e.parent.right=null}return}if(e.left!==null){t=u(e.left,e.dimension)}else{t=a(e.right,e.dimension)}n=t.obj;r(t);e.obj=n}var t;t=n(s.root);if(t===null){return}r(t)};this.nearest=function(e,t,o){function l(r){function d(e,n){f.push([e,n]);if(f.size()>t){f.pop()}}var s,o=i[r.dimension],u=n(e,r.obj),a={},c,h,p;for(p=0;p<i.length;p+=1){if(p===r.dimension){a[i[p]]=e[i[p]]}else{a[i[p]]=r.obj[i[p]]}}c=n(a,r.obj);if(r.right===null&&r.left===null){if(f.size()<t||u<f.peek()[1]){d(r,u)}return}if(r.right===null){s=r.left}else if(r.left===null){s=r.right}else{if(e[o]<r.obj[o]){s=r.left}else{s=r.right}}l(s);if(f.size()<t||u<f.peek()[1]){d(r,u)}if(f.size()<t||Math.abs(c)<f.peek()[1]){if(s===r.left){h=r.right}else{h=r.left}if(h!==null){l(h)}}}var u,a,f;f=new r(function(e){return-e[1]});if(o){for(u=0;u<t;u+=1){f.push([null,o])}}l(s.root);a=[];for(u=0;u<t;u+=1){if(f.content[u][0]){a.push([f.content[u][0].obj,f.content[u][1]])}}return a};this.balanceFactor=function(){function e(t){if(t===null){return 0}return Math.max(e(t.left),e(t.right))+1}function t(e){if(e===null){return 0}return t(e.left)+t(e.right)+1}return e(s.root)/(Math.log(t(s.root))/Math.log(2))}}function r(e){this.content=[];this.scoreFunction=e}r.prototype={push:function(e){this.content.push(e);this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0];var t=this.content.pop();if(this.content.length>0){this.content[0]=t;this.sinkDown(0)}return e},peek:function(){return this.content[0]},remove:function(e){var t=this.content.length;for(var n=0;n<t;n++){if(this.content[n]==e){var r=this.content.pop();if(n!=t-1){this.content[n]=r;if(this.scoreFunction(r)<this.scoreFunction(e))this.bubbleUp(n);else this.sinkDown(n)}return}}throw new Error(\"Node not found.\")},size:function(){return this.content.length},bubbleUp:function(e){var t=this.content[e];while(e>0){var n=Math.floor((e+1)/2)-1,r=this.content[n];if(this.scoreFunction(t)<this.scoreFunction(r)){this.content[n]=t;this.content[e]=r;e=n}else{break}}},sinkDown:function(e){var t=this.content.length,n=this.content[e],r=this.scoreFunction(n);while(true){var i=(e+1)*2,s=i-1;var o=null;if(s<t){var u=this.content[s],a=this.scoreFunction(u);if(a<r)o=s}if(i<t){var f=this.content[i],l=this.scoreFunction(f);if(l<(o==null?r:a)){o=i}}if(o!=null){this.content[e]=this.content[o];this.content[o]=n;e=o}else{break}}}};this.kdTree=n;e.kdTree=n;e.BinaryHeap=r})", Ku = "export type KeyframeEasing =\n  | \"linear\"\n  | \"step\"\n  | \"quadIn\"\n  | \"quadOut\"\n  | \"quadInOut\"\n  | \"cubicIn\"\n  | \"cubicOut\"\n  | \"cubicInOut\"\n  | \"quartIn\" | \"quartOut\" | \"quartInOut\"\n  | \"quintIn\" | \"quintOut\" | \"quintInOut\"\n  | \"sineIn\"\n  | \"sineOut\"\n  | \"sineInOut\"\n  | \"expoIn\"\n  | \"expoOut\"\n  | \"expoInOut\"\n  | \"circIn\" | \"circOut\" | \"circInOut\"\n  | \"backIn\" | \"backOut\" | \"backInOut\"\n  | \"elasticIn\" | \"elasticOut\" | \"elasticInOut\"\n  | \"bounceIn\" | \"bounceOut\" | \"bounceInOut\"\n  | \"smoothStep\" | \"smootherStep\"\n  | \"bezier\";\n\nexport const keyframeEasingOptions = [\n  \"linear\", \"step\", \"quadIn\", \"quadOut\", \"quadInOut\",\n  \"cubicIn\", \"cubicOut\", \"cubicInOut\",\n  \"quartIn\", \"quartOut\", \"quartInOut\", \"quintIn\", \"quintOut\", \"quintInOut\",\n  \"sineIn\", \"sineOut\", \"sineInOut\",\n  \"expoIn\", \"expoOut\", \"expoInOut\", \"circIn\", \"circOut\", \"circInOut\",\n  \"backIn\", \"backOut\", \"backInOut\", \"elasticIn\", \"elasticOut\", \"elasticInOut\",\n  \"bounceIn\", \"bounceOut\", \"bounceInOut\", \"smoothStep\", \"smootherStep\"\n];\n\n/** @param {number} value */\nexport function linear(value: number) { return value; }\n/** @param {number} value */\nexport function quadIn(value: number) { return value * value; }\n/** @param {number} value */\nexport function quadOut(value: number) { return value * (2 - value); }\n/** @param {number} value */\nexport function quadInOut(value: number) { return value < 0.5 ? 2 * value * value : -1 + (4 - 2 * value) * value; }\n/** @param {number} value */\nexport function cubicIn(value: number) { return value * value * value; }\n/** @param {number} value */\nexport function cubicOut(value: number) { return 1 + (--value) * value * value; }\n/** @param {number} value */\nexport function cubicInOut(value: number) { return value < 0.5 ? 4 * value * value * value : (value - 1) * (2 * value - 2) * (2 * value - 2) + 1; }\n/** @param {number} value */\nexport function sineIn(value: number) { return value === 1 ? 1 : 1 - Math.cos(value * Math.PI / 2); }\n/** @param {number} value */\nexport function sineOut(value: number) { return Math.sin(value * Math.PI / 2); }\n/** @param {number} value */\nexport function sineInOut(value: number) { return value === 0 || value === 0.5 || value === 1 ? value : (1 - Math.cos(Math.PI * value)) / 2; }\n/** @param {number} value */\nexport function expoIn(value: number) { return value === 0 ? 0 : Math.pow(2, 10 * value - 10); }\n/** @param {number} value */\nexport function expoOut(value: number) { return value === 1 ? 1 : 1 - Math.pow(2, -10 * value); }\n/** @param {number} value */\nexport function expoInOut(value: number) { return value === 0 || value === 1 ? value : value < 0.5 ? Math.pow(2, 20 * value - 10) / 2 : (2 - Math.pow(2, -20 * value + 10)) / 2; }\n\n/** @param {number} value */\nexport function quartIn(value: number) { return value ** 4; }\n/** @param {number} value */\nexport function quartOut(value: number) { return 1 - (1 - value) ** 4; }\n/** @param {number} value */\nexport function quartInOut(value: number) { return value < 0.5 ? 8 * value ** 4 : 1 - (-2 * value + 2) ** 4 / 2; }\n/** @param {number} value */\nexport function quintIn(value: number) { return value ** 5; }\n/** @param {number} value */\nexport function quintOut(value: number) { return 1 - (1 - value) ** 5; }\n/** @param {number} value */\nexport function quintInOut(value: number) { return value < 0.5 ? 16 * value ** 5 : 1 - (-2 * value + 2) ** 5 / 2; }\n/** @param {number} value */\nexport function circIn(value: number) { return 1 - Math.sqrt(Math.max(0, 1 - value ** 2)); }\n/** @param {number} value */\nexport function circOut(value: number) { return Math.sqrt(Math.max(0, 1 - (value - 1) ** 2)); }\n/** @param {number} value */\nexport function circInOut(value: number) { return value < 0.5 ? (1 - Math.sqrt(Math.max(0, 1 - (2 * value) ** 2))) / 2 : (Math.sqrt(Math.max(0, 1 - (-2 * value + 2) ** 2)) + 1) / 2; }\n/** @param {number} value */\nexport function backIn(value: number) { return value === 0 || value === 1 ? value : 2.70158 * value ** 3 - 1.70158 * value ** 2; }\n/** @param {number} value */\nexport function backOut(value: number) { return value === 0 || value === 1 ? value : 1 + 2.70158 * (value - 1) ** 3 + 1.70158 * (value - 1) ** 2; }\n/** @param {number} value */\nexport function backInOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const c2 = 1.70158 * 1.525;\n  return value < 0.5 ? (2 * value) ** 2 * ((c2 + 1) * 2 * value - c2) / 2 : ((2 * value - 2) ** 2 * ((c2 + 1) * (2 * value - 2) + c2) + 2) / 2;\n}\n/** @param {number} value */\nexport function elasticIn(value: number) { return value === 0 || value === 1 ? value : -(2 ** (10 * value - 10)) * Math.sin((10 * value - 10.75) * (2 * Math.PI / 3)); }\n/** @param {number} value */\nexport function elasticOut(value: number) { return value === 0 || value === 1 ? value : 2 ** (-10 * value) * Math.sin((10 * value - 0.75) * (2 * Math.PI / 3)) + 1; }\n/** @param {number} value */\nexport function elasticInOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const oscillation = Math.sin((20 * value - 11.125) * (2 * Math.PI / 4.5));\n  return value < 0.5 ? -(2 ** (20 * value - 10) * oscillation) / 2 : (2 ** (-20 * value + 10) * oscillation) / 2 + 1;\n}\n/** @param {number} value */\nexport function bounceOut(value: number) {\n  if (value === 0 || value === 1) return value;\n  const n1 = 7.5625, d1 = 2.75;\n  if (value < 1 / d1) return n1 * value * value;\n  if (value < 2 / d1) return n1 * (value - 1.5 / d1) ** 2 + 0.75;\n  if (value < 2.5 / d1) return n1 * (value - 2.25 / d1) ** 2 + 0.9375;\n  return n1 * (value - 2.625 / d1) ** 2 + 0.984375;\n}\n/** @param {number} value */\nexport function bounceIn(value: number) { return value === 0 || value === 1 ? value : 1 - bounceOut(1 - value); }\n/** @param {number} value */\nexport function bounceInOut(value: number) { return value === 0 || value === 1 ? value : value < 0.5 ? (1 - bounceOut(1 - 2 * value)) / 2 : (1 + bounceOut(2 * value - 1)) / 2; }\n/** @param {number} value */\nexport function smoothStep(value: number) { return value * value * (3 - 2 * value); }\n/** @param {number} value */\nexport function smootherStep(value: number) { return value ** 3 * (value * (value * 6 - 15) + 10); }\n\nexport const namedEasingFunctions = {\n  linear, quadIn, quadOut, quadInOut, cubicIn, cubicOut, cubicInOut,\n  quartIn, quartOut, quartInOut, quintIn, quintOut, quintInOut,\n  sineIn, sineOut, sineInOut, expoIn, expoOut, expoInOut, circIn, circOut, circInOut,\n  backIn, backOut, backInOut, elasticIn, elasticOut, elasticInOut,\n  bounceIn, bounceOut, bounceInOut, smoothStep, smootherStep\n};\n\nexport const centiEase = {\n  Linear: { None: linear },\n  Quadratic: { In: quadIn, Out: quadOut, InOut: quadInOut },\n  Cubic: { In: cubicIn, Out: cubicOut, InOut: cubicInOut },\n  Quartic: { In: quartIn, Out: quartOut, InOut: quartInOut },\n  Quintic: { In: quintIn, Out: quintOut, InOut: quintInOut },\n  Sinusoidal: { In: sineIn, Out: sineOut, InOut: sineInOut },\n  Exponential: { In: expoIn, Out: expoOut, InOut: expoInOut },\n  Circular: { In: circIn, Out: circOut, InOut: circInOut },\n  Back: { In: backIn, Out: backOut, InOut: backInOut },\n  Elastic: { In: elasticIn, Out: elasticOut, InOut: elasticInOut },\n  Bounce: { In: bounceIn, Out: bounceOut, InOut: bounceInOut },\n  Smoothstep: { InOut: smoothStep },\n  Smootherstep: { InOut: smootherStep }\n};\n\n/** @param {number} value @param {number[]} bezier */\nexport function cubicBezier(value: number, bezier: number[]) {\n  const [x1 = 0, y1 = 0, x2 = 1, y2 = 1] = bezier;\n  const target = clamp01(value);\n  let parameter = target;\n\n  // Newton-Raphson converges quickly for normal CSS cubic-bezier handles.\n  for (let iteration = 0; iteration < 8; iteration += 1) {\n    const difference = cubic(parameter, 0, x1, x2, 1) - target;\n    const slope = cubicDerivative(parameter, 0, x1, x2, 1);\n    if (Math.abs(difference) < 0.00001 || Math.abs(slope) < 0.00001) break;\n    parameter = clamp01(parameter - difference / slope);\n  }\n\n  // Bisection stabilizes non-linear or flat x control regions.\n  let lower = 0;\n  let upper = 1;\n  for (let iteration = 0; iteration < 12; iteration += 1) {\n    const x = cubic(parameter, 0, x1, x2, 1);\n    if (Math.abs(x - target) < 0.00001) break;\n    if (x < target) lower = parameter;\n    else upper = parameter;\n    parameter = (lower + upper) / 2;\n  }\n\n  return cubic(parameter, 0, y1, y2, 1);\n}\n\n/** @param {string | undefined} easing @param {number} value @param {number[] | undefined} bezier */\nexport function evaluateEasing(easing: string | undefined, value: number, bezier?: number[]) {\n  const progress = clamp01(value);\n  if (easing === \"step\") return 0;\n  if (easing === \"bezier\") return cubicBezier(progress, bezier ?? [0.25, 0.1, 0.25, 1]);\n  return namedEasingFunctions[easing as keyof typeof namedEasingFunctions]?.(progress) ?? progress;\n}\n\n/** @param {number} value @param {number} a @param {number} b @param {number} c @param {number} d */\nfunction cubic(value: number, a: number, b: number, c: number, d: number) {\n  const inverse = 1 - value;\n  return inverse ** 3 * a + 3 * inverse ** 2 * value * b + 3 * inverse * value ** 2 * c + value ** 3 * d;\n}\n\n/** @param {number} value @param {number} a @param {number} b @param {number} c @param {number} d */\nfunction cubicDerivative(value: number, a: number, b: number, c: number, d: number) {\n  const inverse = 1 - value;\n  return 3 * inverse ** 2 * (b - a) + 6 * inverse * value * (c - b) + 3 * value ** 2 * (d - c);\n}\n\n/** @param {number} value */\nfunction clamp01(value: number) { return Math.max(0, Math.min(1, value)); }\n";
//#endregion
//#region src/runtime/exportRandomSeed.ts
function qu(e, t) {
	let n = `${e}:${Math.trunc(t)}`, r = 2166136261;
	for (let e = 0; e < n.length; e += 1) r ^= n.charCodeAt(e), r = Math.imul(r, 16777619);
	return r >>> 0;
}
function Ju(e) {
	let t = e >>> 0;
	return () => {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
//#endregion
//#region src/core/exportScenePlan.ts
function Yu(e, t) {
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
function Xu(e, t = {}) {
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
function Zu(e, t) {
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
function Qu(e) {
	return !!e && typeof e == "object" && typeof e.type == "string";
}
function $u(e) {
	return Qu(e) ? e.type === "Literal" && typeof e.value == "string" ? e.value : e.type !== "TemplateLiteral" || !Array.isArray(e.expressions) || e.expressions.length ? null : (Array.isArray(e.quasis) ? e.quasis[0] : void 0)?.value?.cooked ?? null : null;
}
function ed(e) {
	return td(e, /* @__PURE__ */ new Set(["assetImage", "assetTexture"]));
}
function td(e, t, n = !1) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) try {
		let e = /* @__PURE__ */ new Set(), a = {
			ecmaVersion: "latest",
			allowReturnOutsideFunction: !0,
			allowAwaitOutsideFunction: !0
		}, o;
		try {
			o = Jr(i, a);
		} catch (e) {
			if (!n) throw e;
			o = Jr(i, {
				...a,
				sourceType: "module"
			});
		}
		let s = [o];
		for (; s.length;) {
			let n = s.pop();
			if (n.type === "CallExpression" && Qu(n.callee) && n.callee.type === "Identifier" && typeof n.callee.name == "string" && t.has(n.callee.name)) {
				let t = $u(Array.isArray(n.arguments) ? n.arguments[0] : void 0);
				t !== null && e.add(t);
			}
			let r = [];
			for (let e of Object.values(n)) if (Qu(e)) r.push(e);
			else if (Array.isArray(e)) for (let t of e) Qu(t) && r.push(t);
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
function nd(e, t, n = () => new Image(), r = {
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
function rd(e) {
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
function id(e) {
	return typeof e == "string" && /^sha384-[A-Za-z0-9+/]{64}$/.test(e);
}
function ad(e) {
	if (typeof e != "string" || !e || e.length > 8192 || /[\x00-\x20\x7f]/.test(e)) throw Error("Enter a valid HTTPS resource URL.");
	let t = new URL(e), n = t.hostname.toLowerCase().replace(/\.$/, "");
	if (t.protocol !== "https:" || t.username || t.password || !n.includes(".") || n.startsWith("[") || /^\d+\.\d+\.\d+\.\d+$/.test(n) || n.split(".").some((e) => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(e)) || /(?:^|\.)(localhost|local|internal|lan|home|test|invalid|example|onion)$/.test(n) || n === "home.arpa" || n.endsWith(".home.arpa")) throw Error("Resource URLs must use HTTPS and a public domain without credentials.");
	return t.hostname = n, t.hash = "", t.href;
}
function od(e) {
	if (!e || ![
		"script",
		"style",
		"font",
		"image",
		"data"
	].includes(e.kind)) throw Error("Unsupported resource kind.");
	if (ad(e.url) !== e.url) throw Error("The resource URL must be its canonical final HTTPS URL.");
	if (!e.origin || typeof e.approvedAt != "string" || e.approvedAt.length > 64 || !Number.isFinite(Date.parse(e.approvedAt))) throw Error("Resource approval is required.");
	if (e.varyByClient !== void 0 && typeof e.varyByClient != "boolean") throw Error("Invalid resource Vary metadata.");
	if (ha(e.origin), ad(e.origin.url), ad(e.origin.finalUrl) !== e.url) throw Error("Resource provenance does not match its final URL.");
	if ((e.kind === "script" || e.kind === "style") && !id(e.hash)) throw Error("The resource requires one canonical sha384 SRI hash.");
}
//#endregion
//#region src/runtime/remoteResources.ts
function sd(e, t, n = []) {
	let r = [], i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let e of t) {
		if (e.kind !== "script" && e.kind !== "style") continue;
		let t = `${e.kind}:${e.url}`;
		try {
			if (o.has(t)) throw Error("Duplicate declaration.");
			o.add(t), od(e), r.push(e);
		} catch (t) {
			i.push(`External ${e.kind} ${e.url}: ${String(t)}`);
		}
		for (let t of [e.url, e.origin?.url]) if (t) try {
			let n = `${e.kind}:${ad(t)}`;
			a.has(n) && a.get(n) !== e && i.push(`Ambiguous external resource alias: ${t}`), a.set(n, e);
		} catch {}
	}
	for (let e of n) for (let t of [e.url, e.finalUrl]) try {
		let n = ad(t), r = `script:${n}`;
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
				n = ad(o);
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
	c(Mu(e, { sourceCodeLocationInfo: !0 }));
	for (let t of s.sort((e, t) => t.start - e.start)) e = e.slice(0, t.start) + e.slice(t.end);
	return {
		html: e,
		resources: r,
		errors: i
	};
}
function cd(e, t, n, r, i = 1e4) {
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
function ld(e) {
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
	], T = () => {
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
	}, E = () => {
		x("windowWidth", p.compositionWidth), x("windowHeight", p.compositionHeight);
	}, D = (e) => {
		e?.GL && i.add(e.GL);
	}, O = () => {
		let e = s?.canvas;
		e && (e.style.setProperty("width", "100%", "important"), e.style.setProperty("height", "100%", "important"), e.style.display = "block", D(s._renderer));
	}, ee = (e, t) => {
		f = t * 1e3, x("frameCount", e), x("deltaTime", e === 0 ? 0 : 1e3 / p.fps), x("_frameRate", p.fps), x("_targetFrameRate", p.fps), T();
	}, te = (e, t) => {
		t && typeof t.then == "function" && v(e + "() must be synchronous in timeline mode.");
	}, ne = (e) => {
		let n = t[e];
		typeof n == "function" && (n.constructor?.name === "AsyncFunction" && v(e + "() must be synchronous in timeline mode."), t[e] = function(...t) {
			let r = n.apply(this, t);
			return te(e, r), r;
		});
	}, re = (e) => {
		typeof t.p5 == "function" && (o && o !== t.p5 && (d = e), o = t.p5);
	};
	return {
		observeLibrary: re,
		get canvas() {
			return s?.canvas;
		},
		get logicalSize() {
			return s?.canvas ? [s.width, s.height] : void 0;
		},
		prepare() {
			if (u && v("the Clip is disposed."), s) return;
			re("authored HTML"), d && v("multiple p5 libraries were loaded (" + d + "). Keep one approved p5 global Library."), o || v("p5 is not loaded. Add an approved p5.js global Script to Clip Libraries, or an approved p5.js Online resource."), n.includes(o.VERSION) || v("unsupported p5 version " + o.VERSION + ". Use 1.11.1 or 1.11.11."), o.instance && v("p5 was already started. Remove manually created p5 instances from this global-mode Clip."), b(p) || v("the host did not provide FPS and composition dimensions."), (t.Tone || o.SoundFile || o.AudioIn) && v("Tone.js and p5.sound are not supported in timeline mode.");
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
				new o(), (!s || !m || !h) && v("the p5 initialization hook did not execute."), e.input?.attach(s), x("_updateWindowSize", E), x("_pixelDensity", 1), x("_maxAllowedPixelDimensions", 1), E(), ee(0, 0), x("millis", () => f), x("keyIsDown", () => !1), x("frameRate", (e) => (e !== void 0 && e !== p.fps && y("frameRate() cannot change the Master Timeline FPS."), e === void 0 ? p.fps : s)), x("setFrameRate", (e) => s.frameRate(e)), x("getFrameRate", () => p.fps), x("getTargetFrameRate", () => p.fps), x("loop", () => y("loop() cannot start a self-driven loop; the Master Timeline drives draw().")), x("noLoop", () => x("_loop", !1)), x("redraw", () => y("redraw() is host-controlled; draw() runs once per Master Timeline tick.")), x("remove", () => a.dispose());
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
					return O(), t;
				});
				let c = s.resizeCanvas.bind(s);
				x("resizeCanvas", (e, t) => {
					let n = c(e, t, !0);
					return O(), n;
				});
				for (let e of ["createGraphics", "createFramebuffer"]) {
					let t = s[e].bind(s);
					x(e, (...e) => {
						let n = t(...e);
						r.add(n), D(n._renderer);
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
			]) ne(e);
			l = !0;
		},
		prepareFrame(e) {
			this.render(e, !0);
		},
		drawFrame(t) {
			(u || !l || !c) && v("p5 frame is not prepared."), ee(Math.max(0, Math.floor(t.frame)), t.time), m(), O(), e.markDirty();
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
			p = i, E(), c ? a && typeof t.windowResized == "function" && t.windowResized() : (ee(0, 0), e.beforeSetup?.(n), s._setup(), s._setupDone || v("setup did not complete."), c = !0, e.afterSetup?.(n)), ee(Math.max(0, Math.floor(n.frame)), n.time), !r && (m(), O(), e.markDirty());
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
function ud(e, t) {
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
var dd = "\"use strict\";var MacroFlushFeedbackKernel=(()=>{var T=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var te=(e,r,n)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var re=(e,r)=>{for(var n in r)T(e,n,{get:r[n],enumerable:!0})},ae=(e,r,n,l)=>{if(r&&typeof r==\"object\"||typeof r==\"function\")for(let c of ee(r))!ne.call(e,c)&&c!==n&&T(e,c,{get:()=>r[c],enumerable:!(l=Z(r,c))||l.enumerable});return e};var oe=e=>ae(T({},\"__esModule\",{value:!0}),e);var M=(e,r,n)=>te(e,typeof r!=\"symbol\"?r+\"\":r,n);var se={};re(se,{FEEDBACK_LIMITS:()=>f,createFeedbackDeliveryCursor:()=>G,createFeedbackInputIndex:()=>Q,createFeedbackSampler:()=>X,planFeedbackInput:()=>W,validateFeedbackDeliveryContext:()=>B});var f=Object.freeze({maxAssetBytes:16777216,maxProjectBytes:67108864,maxAssets:64,maxChannels:32,maxRecords:5e5,maxDurationUs:36e8,maxStringBytes:1024,maxRecordBytes:16384,maxArgs:16,maxValue:1e9,maxEventsPerTick:4096,maxLoopBoundariesPerTick:16,maxPointerHz:120,maxOscMessagesPerSecond:1e3,maxPageRecords:1e3,maxPageBytes:1048576,maxResourceCloneBytes:67108864,maxJsonDepth:32}),N=Object.freeze({offset:0,rate:1,loop:!1}),b=class extends Error{constructor(n,l,c={}){super(`Feedback: ${l}`);M(this,\"code\");M(this,\"assetId\");M(this,\"channelId\");this.name=\"FeedbackError\",this.code=n,this.assetId=c.assetId,this.channelId=c.channelId}};function D(e){return e.kind===\"pointer\"||e.kind===\"number\"||e.kind===\"osc\"}var J=new TextEncoder,ie=new Set([\"move\",\"down\",\"up\",\"enter\",\"leave\",\"cancel\",\"click\",\"double-click\",\"wheel\"]);var de=new Set([\"__proto__\",\"prototype\",\"constructor\"]);function s(e,r){throw new b(e,r)}function A(e,r){return(!e||typeof e!=\"object\"||Array.isArray(e))&&s(\"invalid-format\",`${r} must be an object.`),e}function E(e,r,n){Object.keys(e).some(l=>!r.includes(l))&&s(\"invalid-format\",`${n} contains an unknown field.`)}function j(e,r){(typeof e!=\"string\"||!e.trim()||e.includes(\"\\0\")||J.encode(e).length>f.maxStringBytes)&&s(\"invalid-value\",`${r} must be a non-empty string of at most ${f.maxStringBytes} UTF-8 bytes.`)}function O(e,r){(typeof e!=\"number\"||!Number.isFinite(e)||Math.abs(e)>f.maxValue)&&s(\"invalid-value\",`${r} is out of range.`)}function $(e,r,n,l){(typeof e!=\"number\"||!Number.isSafeInteger(e)||e<r||e>n)&&s(\"invalid-time\",`${l} must be an integer in range.`)}function K(e,r){O(e.x,`${r}.x`),O(e.y,`${r}.y`),(typeof e.buttons!=\"number\"||!Number.isInteger(e.buttons)||e.buttons<0||e.buttons>31||typeof e.inside!=\"boolean\")&&s(\"invalid-value\",`${r} has invalid buttons/inside.`)}function L(e){return Array.isArray(e)?((!e.length||e.length>f.maxArgs)&&s(\"invalid-value\",\"Numeric vectors require 1..16 values.\"),e.forEach(r=>O(r,\"Numeric vector value\")),e):(O(e,\"Numeric value\"),e)}function z(e,r=f.maxAssetBytes){let n=0,l=new Set,c=u=>{n+=u,n>r&&s(\"size-limit\",`JSON exceeds ${r} bytes.`)},C=u=>{u.length>r-n&&s(\"size-limit\",`JSON exceeds ${r} bytes.`),c(J.encode(JSON.stringify(u)).length)},h=(u,v)=>{if(v>f.maxJsonDepth&&s(\"size-limit\",\"JSON nesting is too deep.\"),u===null){c(4);return}if(typeof u==\"string\"){C(u);return}if(typeof u==\"boolean\"){c(u?4:5);return}if(typeof u==\"number\"&&Number.isFinite(u)){c(JSON.stringify(u).length);return}(!u||typeof u!=\"object\")&&s(\"invalid-format\",\"Expected finite, plain JSON data.\"),l.has(u)&&s(\"invalid-format\",\"JSON contains a cycle.\");let i=Object.getPrototypeOf(u);if((Array.isArray(u)?i!==Array.prototype:i!==Object.prototype&&i!==null)&&s(\"invalid-format\",\"JSON must use plain objects/arrays.\"),Object.getOwnPropertySymbols(u).length&&s(\"invalid-format\",\"JSON cannot contain symbol keys.\"),l.add(u),c(2),Array.isArray(u)){u.length>f.maxRecords&&s(\"size-limit\",\"JSON array exceeds the record limit.\"),Object.getOwnPropertyNames(u).length!==u.length+1&&s(\"invalid-format\",\"JSON arrays cannot have holes or extra properties.\");for(let o=0;o<u.length;o++){o&&c(1);let t=Object.getOwnPropertyDescriptor(u,String(o));(!t||!t.enumerable||!(\"value\"in t))&&s(\"invalid-format\",\"JSON cannot contain accessors or sparse arrays.\"),h(t.value,v+1)}}else Object.getOwnPropertyNames(u).forEach((t,m)=>{de.has(t)&&s(\"invalid-format\",\"JSON contains a reserved object key.\");let d=Object.getOwnPropertyDescriptor(u,t);(!d.enumerable||!(\"value\"in d))&&s(\"invalid-format\",\"JSON cannot contain accessors or hidden fields.\"),m&&c(1),C(t),c(1),h(d.value,v+1)});l.delete(u)};return h(e,0),n}function _(e){return e&&typeof e==\"object\"&&(Object.values(e).forEach(_),Object.freeze(e)),e}function H(e){let r=z(e),n=A(e,\"Feedback document\");E(n,[\"formatVersion\",\"timeUnit\",\"durationUs\",\"source\",\"channels\"],\"Feedback document\"),n.formatVersion!==1&&s(\"unsupported-version\",\"Only Feedback formatVersion 1 is supported.\"),n.timeUnit!==\"us\"&&s(\"invalid-time\",\"Feedback timeUnit must be us.\"),$(n.durationUs,0,f.maxDurationUs,\"durationUs\");let l=n.durationUs,c=A(n.source,\"source\");E(c,[\"compositionId\",\"width\",\"height\"],\"source\"),O(c.width,\"source.width\"),O(c.height,\"source.height\"),(c.width<1||c.height<1)&&s(\"invalid-value\",\"Source dimensions must be at least one logical pixel.\"),c.compositionId!==void 0&&j(c.compositionId,\"source.compositionId\"),Array.isArray(n.channels)||s(\"invalid-format\",\"Feedback requires a channels array.\"),n.channels.length>f.maxChannels&&s(\"size-limit\",\"Feedback requires at most 32 channels.\");let C=new Set,h=new Set,u=[],v=0,i=n.channels.map(o=>{let t=A(o,\"channel\");j(t.id,\"channel.id\"),j(t.kind,\"channel.kind\"),C.has(t.id)&&s(\"invalid-format\",`Duplicate channel ${t.id}.`),C.add(t.id);let m=[\"pointer\",\"number\",\"osc\"].includes(t.kind);if(!m)return t.records!==void 0&&!Array.isArray(t.records)&&s(\"invalid-format\",`Unknown channel ${t.id} has invalid records.`),v+=Array.isArray(t.records)?t.records.length:0,Array.isArray(t.records)&&t.records.forEach(y=>z(y,f.maxRecordBytes)),v>f.maxRecords&&s(\"size-limit\",\"Feedback exceeds 500,000 records.\"),u.push({code:\"unsupported-channel\",channelId:t.id,message:`Channel ${t.id} (${t.kind}) is retained but cannot be used.`}),{id:t.id,kind:t.kind,supported:m,records:Array.isArray(t.records)?t.records.length:0};E(t,t.kind===\"pointer\"?[\"id\",\"kind\",\"initial\",\"records\"]:t.kind===\"number\"?[\"id\",\"kind\",\"interpolation\",\"initial\",\"records\"]:[\"id\",\"kind\",\"address\",\"records\"],`Channel ${t.id}`),Array.isArray(t.records)||s(\"invalid-format\",`Channel ${t.id} requires records.`),v+=t.records.length,v>f.maxRecords&&s(\"size-limit\",\"Feedback exceeds 500,000 records.\");let d=-1;if(t.kind===\"pointer\"){let y=A(t.initial,\"pointer.initial\");E(y,[\"x\",\"y\",\"buttons\",\"inside\"],\"pointer.initial\"),K(y,\"pointer.initial\")}else if(t.kind===\"number\"){t.interpolation!==\"linear\"&&t.interpolation!==\"hold\"&&s(\"invalid-value\",\"Numeric interpolation must be linear or hold.\");let y=L(t.initial);d=Array.isArray(y)?y.length:-1}else j(t.address,\"OSC address\"),t.address.startsWith(\"/\")||s(\"invalid-value\",\"OSC address must start with /.\");let F=-1,g=-1;for(let y of t.records){let a=A(y,`Channel ${t.id} record`);if(z(a,f.maxRecordBytes),$(a.t,0,l,`Channel ${t.id} time`),$(a.seq,0,Number.MAX_SAFE_INTEGER,`Channel ${t.id} seq`),(a.t<F||a.seq<=g||h.has(a.seq))&&s(\"invalid-time\",`Channel ${t.id} has unordered or duplicate records.`),h.add(a.seq),F=a.t,g=a.seq,t.kind===\"pointer\"){E(a,[\"t\",\"seq\",\"x\",\"y\",\"buttons\",\"inside\",\"event\",\"button\",\"deltaX\",\"deltaY\"],\"pointer record\"),K(a,\"pointer record\"),a.event!==null&&(typeof a.event!=\"string\"||!ie.has(a.event))&&s(\"invalid-value\",\"Invalid pointer event.\");let k=[\"down\",\"up\",\"click\",\"double-click\"].includes(String(a.event));(k||a.button!==void 0)&&(typeof a.button!=\"number\"||!Number.isInteger(a.button)||a.button<0||a.button>4)&&s(\"invalid-value\",\"Invalid pointer button.\"),!k&&a.button!==void 0&&s(\"invalid-value\",\"Only button events may contain button.\"),(a.event===\"down\"&&!(a.buttons&[1,4,2,8,16][a.button])||a.event===\"up\"&&a.buttons&[1,4,2,8,16][a.button]||a.event===\"cancel\"&&a.buttons!==0||a.event===\"enter\"&&a.inside!==!0||a.event===\"leave\"&&a.inside!==!1)&&s(\"invalid-value\",\"Pointer event/state disagree.\"),a.event===\"wheel\"?(O(a.deltaX,\"deltaX\"),O(a.deltaY,\"deltaY\")):(a.deltaX!==void 0||a.deltaY!==void 0)&&s(\"invalid-value\",\"Only wheel events may contain deltas.\")}else if(t.kind===\"number\"){E(a,[\"t\",\"seq\",\"value\"],\"number record\");let k=L(a.value);(Array.isArray(k)?k.length:-1)!==d&&s(\"invalid-value\",\"Numeric values must have a fixed shape.\")}else{E(a,[\"t\",\"seq\",\"args\"],\"OSC record\"),(!Array.isArray(a.args)||a.args.length>f.maxArgs)&&s(\"invalid-value\",\"OSC requires at most 16 args.\");for(let k of a.args)typeof k==\"number\"?O(k,\"OSC arg\"):typeof k==\"string\"?(k.includes(\"\\0\")||J.encode(k).length>f.maxStringBytes)&&s(\"invalid-value\",\"OSC string is too large or contains NUL.\"):typeof k!=\"boolean\"&&s(\"invalid-value\",\"OSC args must be numbers, strings or booleans.\")}}return{id:t.id,kind:t.kind,supported:m,records:t.records.length}});return _({document:JSON.parse(JSON.stringify(e)),summary:{bytes:r,duration:n.durationUs/1e6,records:v,channels:i},warnings:u})}function q(e=N,r){let n=A(e,\"mapping\");E(n,[\"offset\",\"rate\",\"loop\"],\"mapping\"),(typeof n.offset!=\"number\"||!Number.isFinite(n.offset)||Math.abs(n.offset)>3600||typeof n.rate!=\"number\"||!Number.isFinite(n.rate)||Math.abs(n.rate)>16||typeof n.loop!=\"boolean\")&&s(\"invalid-time\",\"Mapping requires offset (-3600..3600), rate (-16..16), and loop.\"),n.loop&&r&&(r.durationUs||s(\"invalid-time\",\"Cannot loop an empty Feedback duration.\"),r.channels.some(l=>D(l)&&l.records.some(c=>c.t===r.durationUs&&(l.kind===\"osc\"||l.kind===\"pointer\"&&\"event\"in c&&c.event!==null)))&&s(\"invalid-time\",\"Looping Feedback cannot contain an event at its exact endpoint.\"))}function P(e){let r=Math.round(e*1e6);if(!Number.isFinite(e)||!Number.isSafeInteger(r))throw new b(\"invalid-time\",\"Time must be finite seconds within the safe microsecond range.\");return r}function V(e,r,n=N){if(q(n),!Number.isFinite(e))throw new b(\"invalid-time\",\"Clip-local time must be finite seconds.\");if(!Number.isSafeInteger(r)||r<0||r>f.maxDurationUs)throw new b(\"invalid-time\",\"Invalid Feedback duration.\");let l=P(e*n.rate+n.offset);if(n.loop){if(!r)throw new b(\"invalid-time\",\"Cannot loop an empty Feedback duration.\");return(l%r+r)%r}return Math.min(r,Math.max(0,l))}function U(e,r){let n=0,l=e.length;for(;n<l;){let c=Math.floor((n+l)/2);e[c].t<=r?n=c+1:l=c}return n}function X(e){let r=H(e),n=r.document,l=n.channels.some(i=>D(i)&&i.records.some(o=>o.t===n.durationUs&&(i.kind===\"osc\"||i.kind===\"pointer\"&&\"event\"in o&&o.event!==null))),c=new Map(n.channels.map(i=>[i.id,i])),C=i=>{let o=c.get(i);if(!o)throw new b(\"missing-channel\",`Channel ${i} is missing.`,{channelId:i});if(!D(o))throw new b(\"unsupported-channel\",`Channel ${i} (${o.kind}) cannot be read.`,{channelId:i});return o},h=(i,o)=>{let t=i.space??\"composition\";if(t===\"composition\")return[1,1];if(t===\"normalized\")return[1/n.source.width,1/n.source.height];if(t!==\"clip\"||!o||![o.clipWidth,o.clipHeight].every(m=>Number.isFinite(m)&&m>0&&m<=f.maxValue))throw new b(\"invalid-value\",\"Clip space requires positive logical Clip dimensions.\");return[o.clipWidth/n.source.width,o.clipHeight/n.source.height]},u=(i,o,t)=>{let[m,d]=h(o,t);return{kind:\"pointer\",x:i.x*m,y:i.y*d,buttons:i.buttons,inside:i.inside}},v=(i,o,t={},m)=>{let d=C(i);if(d.kind!==\"pointer\"&&t.space!==void 0)throw new b(\"invalid-value\",\"Only pointer channels accept a coordinate space.\");let F=U(d.records,o)-1;if(d.kind===\"osc\"){let p=d.records[F];return p?{kind:\"osc\",address:d.address,args:[...p.args]}:null}let g=d.records[F],y=d.records[F+1],a=y?Math.max(0,Math.min(1,(o-(g?.t??0))/Math.max(1,y.t-(g?.t??0)))):0;if(d.kind===\"pointer\"){let p=d.records[F]??d.initial,w=d.records[F+1],I=w&&p.inside&&w.inside&&w.event!==\"cancel\"&&!(\"event\"in p&&p.event===\"cancel\");return u({...p,x:I?p.x+(w.x-p.x)*a:p.x,y:I?p.y+(w.y-p.y)*a:p.y},t,m)}let k=d.records[F]?.value??d.initial,x=d.records[F+1]?.value,S=(p,w)=>d.interpolation===\"linear\"?p+(w-p)*a:p;return{kind:\"number\",value:Array.isArray(k)?k.map((p,w)=>x===void 0?p:S(p,x[w])):x===void 0?k:S(k,x)}};return{document:n,summary:r.summary,warnings:r.warnings,validateMapping(i){if(q(i),i.loop&&(!n.durationUs||l))throw new b(\"invalid-time\",\"Cannot loop empty Feedback or an endpoint event.\")},at(i,o,t={},m){return v(i,Math.min(n.durationUs,Math.max(0,P(o))),t,m)},sample(i,o,t=N,m={},d){if(q(t),t.loop&&l)throw new b(\"invalid-time\",\"Looping Feedback cannot contain an event at its exact endpoint.\");return v(i,V(o,n.durationUs,t),m,d)},events(i,o,t,m={},d){if(o>t)throw new b(\"invalid-time\",\"Event range must be ascending.\");let F=P(o),g=P(t),y=C(i);if(y.kind!==\"pointer\"&&m.space!==void 0)throw new b(\"invalid-value\",\"Only pointer channels accept a coordinate space.\");y.kind===\"pointer\"&&h(m,d);let a=[];if(y.kind===\"number\")return a;let k=U(y.records,F),x=U(y.records,g);for(let S=k;S<x;S++){let R=y.records[S];if(y.kind===\"pointer\"){let p=y.records[S];if(p.event===null)continue;let[w,I]=h(m,d);a.push({...u(p,m,d),channelId:i,time:p.t/1e6,seq:p.seq,event:p.event,...p.button===void 0?{}:{button:p.button},...p.deltaX===void 0?{}:{deltaX:p.deltaX*w},...p.deltaY===void 0?{}:{deltaY:p.deltaY*I}})}else a.push({kind:\"osc\",channelId:i,time:R.t/1e6,seq:R.seq,address:y.address,args:[...y.records[S].args]});if(a.length>f.maxEventsPerTick)throw new b(\"event-budget\",`Channel ${i} exceeds the event limit; request a smaller interval.`,{channelId:i})}return a}}}function Y(e,r){if(!Number.isSafeInteger(e)||e<1)throw new b(\"invalid-time\",`Invalid ${r}.`);return e}function B(e){if(!e||Object.getPrototypeOf(e)!==Object.prototype)throw new b(\"invalid-format\",\"Invalid input delivery context.\");if(Object.getOwnPropertySymbols(e).length)throw new b(\"invalid-format\",\"Invalid input delivery symbol field.\");let r=[\"transportEpoch\",\"deliveryId\",\"mode\",\"previousLocalTime\"];for(let[n,l]of Object.entries(Object.getOwnPropertyDescriptors(e)))if(!r.includes(n)||!l.enumerable||!(\"value\"in l))throw new b(\"invalid-format\",\"Invalid input delivery field.\");if(Y(e.transportEpoch,\"transport epoch\"),Y(e.deliveryId,\"delivery ID\"),e.mode===\"historical\")throw new b(\"unsupported-playback\",\"Historical input delivery requires P4.\");if(![\"sample-only\",\"continuous\"].includes(e.mode))throw new b(\"invalid-value\",\"Invalid input delivery mode.\");if(e.previousLocalTime!==void 0&&P(e.previousLocalTime),e.mode===\"continuous\"&&e.previousLocalTime===void 0)throw new b(\"invalid-time\",\"Continuous input requires a previous local time.\")}function G(){let e=0,r=0;return{consume(n){if(B(n),n.transportEpoch<e||n.transportEpoch===e&&n.deliveryId<r)throw new b(\"invalid-time\",\"Stale input delivery.\");return n.transportEpoch===e&&n.deliveryId===r?!1:(e=n.transportEpoch,r=n.deliveryId,!0)}}}function W(e){let{sampler:r,binding:n,time:l,fps:c,coordinates:C,delivery:h}=e,u={offset:n.offset,rate:n.rate,loop:n.loop};if(P(l),!Number.isFinite(c)||c<=0)throw new b(\"invalid-value\",\"Input requires a positive FPS.\");h&&B(h),r.validateMapping(u);let v=h?Object.freeze({...h}):void 0;if(n.pointerChannelId===void 0)return Object.freeze({current:null,previousNominal:null,events:Object.freeze([]),delivery:v});let i=n.pointerChannelId,o={space:n.space},t=y=>{let a=r.sample(i,y,u,o,C);if(!a||a.kind!==\"pointer\")throw new b(\"unsupported-channel\",`Channel ${i} is not pointer input.`,{channelId:i});return Object.freeze(a)},m=t(l),d=t(Math.max(0,l-1/c)),F=[],g=(y,a,k)=>{for(let x of r.events(i,y/1e6,a/1e6,o,C)){if(x.kind!==\"pointer\")throw new b(\"unsupported-channel\",\"Only pointer events can be standard input.\");if(F.length>=f.maxEventsPerTick)throw new b(\"event-budget\",\"Input interval exceeds the event limit.\",{channelId:i});F.push(Object.freeze({cycle:k,event:Object.freeze(x)}))}};if(h?.mode===\"continuous\"&&n.rate>0){let y=h.previousLocalTime;if(y>l)throw new b(\"invalid-time\",\"Continuous input cannot move backwards.\");let a=P(y*n.rate+n.offset),k=P(l*n.rate+n.offset);if(!n.loop)g(a,k,0);else if(k>a){let x=r.document.durationUs,S=Math.floor(a/x),p=Math.floor(k/x)-S;if(p>f.maxLoopBoundariesPerTick)throw new b(\"event-budget\",\"Input interval exceeds the loop-boundary limit.\",{channelId:i});let w=I=>(I%x+x)%x;for(let I=0;I<=p;I++)g(I===0?w(a):-1,I===p?w(k):x-1,S+I)}}return Object.freeze({current:m,previousNominal:d,events:Object.freeze(F),delivery:v})}function Q(e,r){let n=e.document.channels.find(o=>o.id===r);if(!n||n.kind!==\"pointer\")throw new b(\"unsupported-channel\",\"Standard input requires a pointer channel.\");let l=n,c=l.records.filter(o=>o.event!==null),C=c.filter(o=>o.event===\"down\"),h=new Map,u=l.initial;for(let o of c)h.set(o.seq,u),u=o;let v=(o,t,m)=>{let d=e.document.source,F=t===\"clip\"?m.clipWidth/d.width:t===\"normalized\"?1/d.width:1,g=t===\"clip\"?m.clipHeight/d.height:t===\"normalized\"?1/d.height:1;return{...o,x:o.x*F,y:o.y*g}},i=(o,t)=>{let m=0,d=C.length;for(;m<d;){let F=Math.floor((m+d)/2),g=C[F];g.t<o||g.t===o&&g.seq<=t?m=F+1:d=F}return C[m-1]?.button??0};return{previous(o,t,m){let d=h.get(o);if(!d)throw new b(\"invalid-value\",\"Input event is not in the recording.\");return v(d,t,m)},eventButton(o){return i(o.t,o.seq)},button(o,t){return i(V(o,e.document.durationUs,{offset:t.offset,rate:t.rate,loop:t.loop}),1/0)}}}return oe(se);})();\n";
//#endregion
//#region src/runtime/feedbackRuntime.ts
function fd(e) {
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
function pd(e) {
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
function md(e) {
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
function hd(e, t = "") {
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
						replacement: wu(e)
					});
				}
			}
			"childNodes" in e && e.childNodes.forEach(a);
		}
	};
	a(Mu(e, { sourceCodeLocationInfo: !0 }));
	for (let t of r.sort((e, t) => t.start - e.start)) e = e.slice(0, t.start) + t.replacement + e.slice(t.end);
	return {
		html: e,
		scripts: n
	};
}
//#endregion
//#region src/runtime/createClipDocument.ts
var gd = /\.use\(\s*["']centi3d["']/;
function _d(e) {
	return gd.test(e.js);
}
async function vd() {
	return (await import("./three.global-lsYzNWMC.js")).default;
}
function yd(e, t, n, r, i = [], a = !1, o = {}) {
	return xd(e, t, n, r, i, "", !1, a, o);
}
async function bd(e, t, n, r, i = [], a = !1, o = !1, s = {}) {
	return xd(e, t, n, r, i, _d(t) ? await vd() : "", a, o, s);
}
function xd(e, t, n, r, i, a, o = !1, s = !1, c = {}) {
	i = ui(i, c.libraries);
	let l = c.capabilities?.includes("p5") === !0, u = l && c.p5Playback === "isolated-replay", d = !u && (c.hasFeedback === !0 || i.some((e) => e.kind === "feedback")), f = d && c.feedbackInputEnabled === !0 && c.feedback?.pointerChannelId !== void 0, p = sd(t.html, r, i.filter((e) => e.scriptMode === "global" && e.scriptOrigin).map((e) => e.scriptOrigin)), m = p.resources.length > 0 || p.errors.length > 0, h = d ? hd(p.html, c.documentToken ?? "") : {
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
		t(Mu(p.html));
	}
	let g = ed([
		t.js,
		...h.scripts.map((e) => e.source),
		...i.filter((e) => e.kind === "script").map((e) => e.scriptSource ?? "")
	]), _ = Object.fromEntries(Object.entries(zu).map(([e, t]) => [e, {
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
    ${Uu}
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
  const editorThreeDHelpers = ${o && a ? `(${Fu.toString()})(THREE)` : "null"};
  window.addEventListener("pagehide", () => editorThreeDHelpers?.dispose());
  const hashExportRandomSeed = ${qu.toString()};
  const createSeededRandom = ${Ju.toString()};
  const nativeMathRandom = Math.random;
  const reconcileManagedThreeDObjects = (${Nu.toString()});
  const readThreeDFrameInput = (${Pu.toString()});
  const builtinDefinitions = ${JSON.stringify(_)};
  const hostParamDefinitions = ${JSON.stringify(n)};
  const assetDescriptors = ${JSON.stringify(i)};
  const modelRegistry = typeof THREE === "undefined" ? null : (${Iu.toString()})(THREE, assetDescriptors);
  const materialTextures = typeof THREE === "undefined" ? null : (${Lu.toString()})(THREE, () => assetDescriptors);
  const scriptRegistry = (${Ru.toString()})(assetDescriptors);
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

  const getCameraTransitionResources = (transition, canvas, fromSnapshot) => {
    const key = JSON.stringify([Array.isArray(fromSnapshot) ? 'radians' : 'degrees', transition.type, transition.boundaryFrame, transition.fromCameraId, transition.fromObjects, canvas.width, canvas.height]);
    if (cameraTransitionResources?.key === key) return cameraTransitionResources;
    disposeCameraTransitionResources();
    const rigScene = new THREE.Scene();
    const rigObjects = reconcileManagedThreeDObjects(THREE, rigScene, new Map(), fromSnapshot, canvas.width / canvas.height);
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
  const reportRuntimeError = (error, phase, frame = lastCompFrame, recordSetup = true) => {
    const message = error instanceof Error ? error.message : String(error);
    const setupError = recordingSetupSources && recordSetup;
    if (activeExportFrameId) exportFrameFailure = phase ? phase + ": " + message : message;
    if (setupError) setupFailure = phase ? phase + ": " + message : message;
    if (phase?.startsWith("feedback") || error?.name === "FeedbackError") {
      feedbackFrameFailure = message;
      if (setupError) feedbackSetupFailure = message;
    }
    if (setupError || phase?.startsWith("feedback") || error?.feedbackInputCode || error?.name === "FeedbackError") {
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
      ...(${f} && (setupError || phase?.startsWith("feedback") || error?.feedbackInputCode || error?.name === "FeedbackError") ? { feedbackInputDiagnostic: true } : {}),
      ...(p5Isolated && error?.p5ReplayCode ? { p5ReplayCode: error.p5ReplayCode } : {}),
      stack: error instanceof Error ? error.stack : undefined
    }, "*");
  };
  ${m ? `const remotePreparation = (${cd.toString()})(${Cd(p.resources)}, ${Cd(p.errors)}, imageWorkTimers, message => {
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

  const runManaged3dScripts = (message, descriptors) => {
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
    ${m ? `if (!activeGlobalLibrary && ${Cd(p.resources.filter((e) => e.kind === "script").map((e) => e.url))}.includes(event.filename || document.currentScript?.src)) {
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
  const feedbackP5Input = ${f && l ? `(${md.toString()})(event => feedbackOwnedEvents.has(event))` : "null"};
  const p5Adapter = p5Enabled ? (${ld.toString()})({ clip: window.clip,
    input: feedbackP5Input ? { owns: event => feedbackOwnedEvents.has(event), attach: sketch => feedbackP5Input.attach(sketch), dispose: () => feedbackP5Input.dispose() } : undefined,
    beforeSetup: message => { feedbackTime = 0; feedbackInput?.prime(message.fps); },
    context: ${Cd(c.runtimeContext ?? null)}, seed: hashExportRandomSeed(${Cd(c.p5SeedIdentity ?? e)}, 0), markDirty: markFrameDirty,
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
      if (p5Isolated) p5IsolatedGuards = (${ud.toString()})(clipId, ${Cd(c.p5ReplayBudget ?? null)});
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

  const feedbackKernel = ${d ? `(() => { ${dd}; return MacroFlushFeedbackKernel; })()` : "null"};
  const feedbackBinding = ${Cd(c.feedback ?? null)};
  const feedbackDimensions = () => {
    const p5Size = p5Adapter?.logicalSize;
    const canvas = p5Adapter?.canvas || document.querySelector("#canvas") || document.querySelector("canvas");
    const size = paramSchemas.get("size")?.value || [640, 360];
    return { clipWidth: p5Size?.[0] || canvas?.width || size[0], clipHeight: p5Size?.[1] || canvas?.height || size[1] };
  };
  const feedbackState = (${fd.toString()})({ sampler: feedbackKernel?.createFeedbackSampler,
    lookup: id => assetDescriptors.find(asset => asset.id === id && asset.kind === "feedback"),
    unavailable: (id, error) => {
      const asset = assetDescriptors.find(asset => asset.id === id) || { id, name: id };
      checkSourceUse(asset, null);
      throw new Error(error);
    }, available: id => { const asset = assetDescriptors.find(asset => asset.id === id); if (asset) checkSourceUse(asset, "ready"); },
    time: () => feedbackTime,
    dimensions: feedbackDimensions
  });
  const feedbackInput = ${f ? `(${pd.toString()})({ kernel: feedbackKernel, binding: feedbackBinding,
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

  const assetImages = (${nd.toString()})(() => assetDescriptors, typeof THREE === "undefined" ? null : THREE, () => new Image(), imageWorkTimers);
  const assetImageWork = (${rd.toString()})({ report: reportRuntimeError, ...imageWorkTimers });
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
    parent.postMessage({ type: "macroflush:scene", clipId, documentToken, operation }, "*");
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
      id: ${Cd(c.displayObjectIdentity ?? e)} + ":display:" + nextDisplayObjectId++,
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
    ${Wu}
    CentiNamespace.Matrix = Centi.Matrix;
    return Centi.prototype;
  })();

  const KdTree = (() => {
    const exports = {};
    ${Gu}
    return exports.kdTree;
  })();

  const pointOnCubicBezier = (t, a, b, c, d) => {
    const inverse = 1 - t;
    return inverse * inverse * inverse * a + 3 * inverse * inverse * t * b + 3 * inverse * t * t * c + t * t * t * d;
  };

  let timelineTimeMs = 0;
  const timelineTweens = new Set();
  const easingModule = (() => {
    ${Ku.replace(/\r\n/g, "\n").replace(/export type KeyframeEasing =[\s\S]*?;\n/, "").replace(/: string \| undefined(?=[,)\s])/g, "").replace(/\?: number\[\]/g, "").replace(/: number\[\](?=[,)\s])/g, "").replace(/: number(?=[,)\s])/g, "").replace(/ as keyof typeof namedEasingFunctions/g, "").replace(/^export /gm, "")}
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
      documentToken,
      operations: [...pendingSceneOperations.values()]
    }, "*");
    pendingSceneOperations.clear();
  };

  const fontUsage = assetDescriptors.some(asset => asset.kind === "font" && asset.fontFamily)
    ? (${Zu.toString()})(document, error => {
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
        (${Yu.toString()})(exportSceneObjects, assetDescriptors);
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
        ...(!isExportFrame && typeof message.liveSourceVisitId === "string" ? { liveSourceVisitId: message.liveSourceVisitId } : {}),
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
      if (message.documentToken !== undefined && message.documentToken !== documentToken) return;
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
      if (message.documentToken !== undefined && message.documentToken !== documentToken) return;
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

    const failThreeDFrame = (error) => {
      reportRuntimeError(error, "managed 3D frame", message.compFrame, false);
      if (message.exportMode === true) parent.postMessage({ type: "macroflush:export-error", clipId,
        exportFrameId: message.exportFrameId, error: error instanceof Error ? error.message : String(error) }, "*");
      activeExportFrameId = null;
    };
    let threeDFrame;
    try { threeDFrame = readThreeDFrameInput(message); }
    catch (error) { failThreeDFrame(error); return; }

    const modelAssetIds = [...new Set(threeDFrame.objects
      .filter((descriptor) => descriptor.kind === "model-3d")
      .map((descriptor) => descriptor.modelAssetId))];
    const loading = modelAssetIds.map((id) => modelRegistry?.ensure(id)).filter(Boolean);
    const requiredTextures = new Set();
    for (const descriptor of threeDFrame.objects) {
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
      const next3dScripts = new Map(threeDFrame.objects
        .map((descriptor) => [descriptor.id, descriptor.scriptAssetId]));
      for (const [id, entry] of managed3dScripts) {
        if (next3dScripts.get(id) === entry.scriptAssetId) continue;
        disposeManaged3dScript(id, entry);
        managed3dScripts.delete(id);
      }
      try {
        managed3dObjects = reconcileManagedThreeDObjects(
          THREE, centi3d.scene, managed3dObjects, threeDFrame.snapshot, canvas.width / canvas.height, modelRegistry, materialTextures
        );
      } catch (error) { failThreeDFrame(error); return; }
      materialTextures?.prune(requiredTextures);
      runManaged3dScripts(message, threeDFrame.objects);
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
        const selected = managed3dObjects.get(threeDFrame.cameraId);
        const renderCamera = selected?.kind === "camera-3d" ? selected.object : centi3d.camera;
        let helperCamera = renderCamera;
        try {
          const transition = threeDFrame.transition;
          if (transition && transition.progress < 1) {
            const canvas = findCanvas();
            const resources = getCameraTransitionResources(transition, canvas, threeDFrame.fromSnapshot);
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
`, y = Vu(r.filter((e) => e.kind !== "script" && e.kind !== "style" || p.resources.includes(e)), typeof window > "u" ? void 0 : window.location.origin, i.some((e) => e.kind === "font" && e.sourceUrl?.startsWith("data:")), i.some((e) => e.kind === "model-3d"), s, c.hasDataUriImages === !0 || i.some((e) => e.kind === "image" && e.sourceUrl?.startsWith("data:"))), b = i.filter((e) => e.kind === "font" && e.fontFamily), x = "window.__macroflushNotifyReady();", S = l || b.length || c.liveAssets || g.length || m || d ? `<script>${Sd(`(() => {
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
      const authoredScripts = ${Cd(h.scripts)};
      for (let index = 0; index < authoredScripts.length; index++) {
        const item = authoredScripts[index];
        const marker = [...document.querySelectorAll("script[data-macroflush-feedback-script]")].find(tag => tag.getAttribute("data-macroflush-feedback-script") === ${Cd(c.documentToken ?? "")} + ":" + index);
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
  })();`)}<\/script>` : `<script>${Sd(t.js)}<\/script><script>${x}<\/script>`, C = i.filter((e) => e.kind === "script" && e.scriptMode !== "global").map((e) => `<script>${Sd(`window.__macroflushRegisterScript(${JSON.stringify(e.id)}, function() {\n${e.scriptSource ?? ""}\n});`)}<\/script>`).join("\n"), w = (c.libraries ?? []).map((e) => i.find((t) => t.id === e)).map((e) => `<script>window.__macroflushLoadGlobalLibrary(${Cd(e.name)}, ${Cd(e.scriptSource ?? "")});<\/script>`).join("\n"), T = p.errors.length ? "" : p.resources.map((e, t) => {
		let n = `onload="${l && e.kind === "script" ? `window.__macroflushObserveP5(${wd(JSON.stringify(e.url))});` : ""}window.__macroflushRemotePreparation.complete(${t}, true)" onerror="window.__macroflushRemotePreparation.complete(${t}, false)"`, r = `integrity="${e.hash}" crossorigin="anonymous" ${n}`;
		return e.kind === "script" ? `<script src="${wd(e.url)}" ${r}><\/script>` : `<link rel="stylesheet" href="${wd(e.url)}" ${r} />`;
	}).join("\n");
	return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="${y}" />
    ${b.length ? `<script>${Sd(`window.__macroflushFontPreparation = (${Xu.toString()})(${JSON.stringify(b)});`)}<\/script>` : ""}
    <script>${Sd(v)}<\/script>
    ${C}
    ${w}
    ${T}
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
function Sd(e) {
	return e.replace(/<\/script/gi, "<\\/script");
}
function Cd(e) {
	return JSON.stringify(e).replace(/[<\u2028\u2029]/g, (e) => e === "<" ? "\\u003c" : e === "\u2028" ? "\\u2028" : "\\u2029");
}
function wd(e) {
	return e.replace(/[&"<>]/g, (e) => ({
		"&": "&amp;",
		"\"": "&quot;",
		"<": "&lt;",
		">": "&gt;"
	})[e]);
}
//#endregion
//#region src/core/feedbackProducers.ts
function Td(e) {
	if (![
		"editor",
		"player",
		"export-sequence",
		"export-still"
	].includes(e)) throw new j("invalid-value", "Invalid input host scope.");
	let t = Ue(), n = !1;
	return {
		reset() {
			n || t.reset();
		},
		dispose() {
			n = !0;
		},
		visit(r, i = {}, a) {
			if (n) throw new j("canceled", "Input host is disposed.");
			let o = e === "export-sequence" ? "playback" : e === "export-still" ? "sample-only" : i.inputDelivery ?? "sample-only";
			return Object.freeze({
				time: r,
				inputDelivery: o,
				delivery: t.visit(r, { inputDelivery: o }, a)
			});
		}
	};
}
function Ed() {
	let e = /* @__PURE__ */ new Map(), t = !1, n = (e, t) => {
		if (typeof e != "string" || !e || e.length > 16384) throw new j("invalid-value", `Invalid ${t}.`);
	}, r = (e) => {
		if (e === null) return null;
		if (!e || typeof e != "object") throw new j("invalid-time", "Invalid child time mapping.");
		return Le(e.time), n(e.segmentKey, "mapping segment"), e;
	}, i = (e) => {
		e.active && e.transport.reset(), e.active = !1, e.parent = void 0, e.local = void 0;
	}, a = (e) => Object.freeze({
		...e,
		delivery: Object.freeze({ ...e.delivery })
	});
	return {
		visit(o) {
			if (t) throw new j("canceled", "Input paths are disposed.");
			n(o.pathId, "execution path"), n(o.definitionKey, "input definition");
			let s = o.parent;
			if (Le(s.time), He(s.delivery), !["playback", "sample-only"].includes(s.inputDelivery) || s.inputDelivery === "sample-only" && s.delivery.mode === "continuous") throw new j("invalid-value", "Inconsistent parent input intent.");
			if (s.delivery.mode === "continuous" && s.delivery.previousLocalTime >= s.time) throw new j("invalid-time", "Parent continuity must advance time.");
			let c = e.get(o.pathId), l = c?.parent, u = c?.lastSeen;
			if (u && (s.delivery.transportEpoch < u.delivery.transportEpoch || s.delivery.transportEpoch === u.delivery.transportEpoch && s.delivery.deliveryId < u.delivery.deliveryId)) throw new j("invalid-time", "Stale parent input delivery.");
			let d = l && s.delivery.transportEpoch === l.delivery.transportEpoch && s.delivery.deliveryId === l.delivery.deliveryId;
			if (u && s.delivery.transportEpoch === u.delivery.transportEpoch && s.delivery.deliveryId === u.delivery.deliveryId && (s.time !== u.time || s.inputDelivery !== u.inputDelivery || s.delivery.mode !== u.delivery.mode || s.delivery.previousLocalTime !== u.delivery.previousLocalTime)) throw new j("invalid-time", "One parent delivery cannot represent different visits.");
			let f = r(o.mapTime(s.time));
			if (!f) return c && (c.lastSeen = a(s), i(c)), null;
			let p = c ?? {
				transport: Ue(),
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
function Dd(e) {
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
		let { revision: a, sampler: o } = ai(i);
		if (o.validateMapping({
			offset: t.offset,
			rate: t.rate,
			loop: t.loop
		}), ![
			"composition",
			"normalized",
			"clip"
		].includes(t.space)) throw new j("invalid-value", "Unknown Feedback coordinate space.");
		let s = o.summary.channels.find((e) => e.id === t.pointerChannelId);
		return s ? s.kind !== "pointer" || !s.supported ? r("unavailable", "unsupported-channel", `Channel ${s.id} is not supported pointer input.`) : e.runtimeIssue ? r(e.runtimeIssue.code === "unsupported-playback" ? "unsupported" : "unavailable", e.runtimeIssue.code, e.runtimeIssue.message) : Object.freeze({
			status: "ready",
			requested: !0,
			...n,
			revision: a
		}) : r("unavailable", "missing-channel", `Pointer channel ${t.pointerChannelId} is unavailable.`);
	} catch (e) {
		return r("unavailable", e instanceof j ? e.code : "invalid-format", e instanceof Error ? e.message : "Invalid Feedback resource.");
	}
}
Object.freeze(["radians", "degrees"]);
var Od = Object.freeze({
	key: "rotation",
	shape: "xyz"
}), kd = Object.freeze({
	key: "angle",
	shape: "scalar"
}), Ad = Object.freeze([Od]), jd = Object.freeze([Od, kd]), Md = Object.freeze([]), Nd = {
	"camera-3d": Ad,
	"light-3d": jd,
	"null-3d": Ad,
	"mesh-3d": Ad,
	"model-3d": Ad
}, Pd = /* @__PURE__ */ new WeakMap();
function Fd(e) {
	return Object.prototype.hasOwnProperty.call(Nd, e);
}
function Id(e) {
	return Fd(e) ? Nd[e] : Md;
}
function Ld(e) {
	let t = Pd.get(e);
	if (!t) {
		let n = /* @__PURE__ */ new Map();
		for (let t of e) n.has(t.id) || n.set(t.id, Object.freeze({
			id: t.id,
			kind: t.kind
		}));
		t = n, Pd.set(e, t);
	}
	return t;
}
function Rd(e, t, n) {
	if (e.kind !== "object-3d") return null;
	let r = e.assetId ? n.get(e.assetId) : void 0;
	if (!r || !Fd(r.kind)) throw Error(`Unknown managed object asset on ${e.id}.`);
	return Id(r.kind).find((e) => e.key === t) ?? null;
}
function zd(e = "radians") {
	if (e !== "radians" && e !== "degrees") throw Error("angleUnit must be radians or degrees.");
	return e;
}
function Bd(e, t, n) {
	if (typeof e != "number" || !Number.isFinite(e) || !Number.isFinite(e * t)) throw Error(`Invalid finite managed angle at ${n}.`);
	return e * t;
}
function Vd(e, t) {
	if (e === void 0 || t === void 0) throw Error("Conversion requires an explicit angleUnit at both boundaries.");
	return zd(e), zd(t), e === t ? 1 : e === "radians" ? 180 / Math.PI : Math.PI / 180;
}
function Hd(e, t, n, r = "angle") {
	return Bd(e, Vd(t, n), r);
}
function Ud(e, t, n, r, i = t.key) {
	let a = Vd(n, r);
	if (t.shape === "scalar") return Bd(e, a, i);
	if (!Array.isArray(e) || e.length !== 3) throw Error(`Invalid managed XYZ rotation at ${i}.`);
	return [
		0,
		1,
		2
	].map((t) => Bd(e[t], a, `${i}[${t}]`));
}
function Wd(e, t, n, r, i = t.key) {
	let a = Vd(n, r);
	if (!e || typeof e != "object" || Array.isArray(e) || e.type !== (t.shape === "xyz" ? "vec3" : "number")) throw Error(`Invalid managed angle schema at ${i}.`);
	let o = { ...e };
	for (let a of ["default", "value"]) Object.prototype.hasOwnProperty.call(e, a) && e[a] !== void 0 && (o[a] = Ud(e[a], t, n, r, `${i}.${a}`));
	for (let t of [
		"min",
		"max",
		"step"
	]) Object.prototype.hasOwnProperty.call(e, t) && e[t] !== void 0 && (o[t] = Bd(e[t], a, `${i}.${t}`));
	return o;
}
//#endregion
//#region src/core/managedAngleCodec.ts
var Gd = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Kd = (e) => !!(e && typeof e == "object" && !Array.isArray(e));
function qd(e) {
	if (!Kd(e) || ![
		1,
		2,
		3
	].includes(Number(e.clipFormatVersion)) || typeof e.clipFormatVersion != "number" || !Array.isArray(e.assets) || e.clipFormatVersion === 1 && !Array.isArray(e.layers)) throw Error("Managed angles require a legacy V1, V2 or V3 project.");
	if (Gd(e, "managedAngleCodecVersion") || Gd(e, "angleUnit") || Gd(e, "sourceFormatVersion")) throw Error("Managed angle tags must be outside the legacy project body.");
}
function Jd(e) {
	if (!Kd(e) || e.managedAngleCodecVersion !== 1 || e.angleUnit !== "degrees" || ![
		1,
		2,
		3
	].includes(Number(e.sourceFormatVersion)) || typeof e.sourceFormatVersion != "number" || Gd(e, "clipFormatVersion") || !Kd(e.document) || Gd(e.document, "clipFormatVersion")) throw Error("Unsupported managed angle document unit, version or shape.");
	qd({
		...e.document,
		clipFormatVersion: e.sourceFormatVersion
	});
}
function Yd(e, t, n) {
	let r = structuredClone(e), i = Ld(r.assets), a = (e) => e.map((e) => ({
		...e,
		clips: e.clips.map((e) => {
			if (e.kind !== "object-3d") return e;
			Rd(e, "rotation", i);
			let r = { ...e.params }, a = e.keyframeTracks;
			for (let o of Id(i.get(e.assetId).kind)) {
				let i = o.key;
				Gd(r, i) && (r[i] = Wd(r[i], o, t, n, `${e.id}.params.${i}`)), a && Gd(a, i) && (a = {
					...a,
					[i]: a[i].map((r) => ({
						...r,
						value: Ud(r.value, o, t, n, `${e.id}.keyframeTracks.${i}.value`)
					}))
				});
			}
			return {
				...e,
				params: r,
				...a ? { keyframeTracks: a } : {}
			};
		})
	})), o = (e) => {
		if (e.kind === "composition") return {
			...e,
			composition: {
				...e.composition,
				layers: a(e.composition.layers)
			}
		};
		if (!Fd(e.kind)) return e;
		let r = e, i = { ...r.descriptor }, o = i.transform;
		for (let r of Id(e.kind)) r.key === "rotation" && Kd(o) && Gd(o, "rotation") && o.rotation !== void 0 ? i.transform = {
			...o,
			rotation: Ud(o.rotation, r, t, n, `${e.id}.descriptor.transform.rotation`)
		} : r.key === "angle" && Gd(i, "angle") && i.angle !== void 0 && (i.angle = Ud(i.angle, r, t, n, `${e.id}.descriptor.angle`));
		return {
			...r,
			descriptor: i
		};
	};
	return {
		...r,
		assets: r.assets.map(o),
		...r.clipFormatVersion === 1 ? { layers: a(r.layers) } : {}
	};
}
function Xd(e) {
	if (Kd(e) && (Gd(e, "managedAngleCodecVersion") || Gd(e, "angleUnit") || Gd(e, "sourceFormatVersion"))) return Jd(e), structuredClone(e);
	qd(e);
	let { clipFormatVersion: t, ...n } = Yd(e, "radians", "degrees");
	return {
		managedAngleCodecVersion: 1,
		angleUnit: "degrees",
		sourceFormatVersion: t,
		document: n
	};
}
//#endregion
//#region src/core/sourceRef.ts
var $ = class extends Error {
	code;
	constructor(e, t) {
		super(t), this.code = e, this.name = "SourceResolutionError";
	}
};
function Zd(e) {
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
function Qd(e) {
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
	let r = Zd(t.kind === "embedded" ? t.dataUrl : t.kind === "url" ? t.url : void 0);
	if (r.status !== "ready" || r.source.kind !== t.kind) throw Error("Invalid persistent SourceRef.");
	if (t.kind === "url" && r.source.kind === "url" && t.base !== r.source.base) throw Error("SourceRef URL base does not match its URL.");
}
function $d(e) {
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
		if (t.sourceRef !== void 0 && Qd(t.sourceRef), t.stemRefs !== void 0) {
			if (e.kind !== "audio" || !t.stemRefs || typeof t.stemRefs != "object" || Array.isArray(t.stemRefs)) throw Error("Only audio assets can contain stemRefs.");
			for (let [e, n] of Object.entries(t.stemRefs)) {
				if (![
					"drums",
					"bass",
					"other",
					"vocals"
				].includes(e)) throw Error("Unknown stem reference.");
				Qd(n);
			}
		}
		if (e.kind === "model-3d" && t.sourceRef?.kind !== "embedded") throw new $("unsupported", "V3 models remain embedded until dependency-aware 3D support is implemented.");
		let { sourceRef: n, stemRefs: r, ...i } = t;
		return {
			...i,
			...n?.kind === "embedded" ? { sourceUrl: n.dataUrl } : {}
		};
	});
	return Ca({
		...t,
		clipFormatVersion: 2,
		assets: n
	}), t;
}
//#endregion
//#region src/core/sourceResolver.ts
function ef() {
	return new $("aborted", "Source resolution was aborted.");
}
function tf() {
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
			if (r || c.signal?.aborted) throw ef();
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
					g = () => t(ef()), c.signal.addEventListener("abort", g, { once: !0 }), c.signal.aborted && g();
				})]) : h.promise);
				if (r || c.signal?.aborted) throw ef();
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
function nf(e) {
	return e && typeof e == "object" && "clipFormatVersion" in e && e.clipFormatVersion === 3 ? $d(e) : Ca(e);
}
function rf() {
	let e = tf(), t = !1, n = 0, r = 0, i = () => {
		t && !n && !r && e.dispose();
	};
	return {
		async resolve(a, o, s) {
			if (t) throw new $("aborted", "Project source session is closed.");
			let c = nf(a), l = [], u = [];
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
var af = (e) => [
	"image",
	"video",
	"audio",
	"font",
	"model-3d"
].includes(e.kind), of = (e) => e?.kind === "embedded" ? e.dataUrl : void 0;
function sf(e) {
	let t = nf(e);
	return t.assets = t.assets.map((e) => {
		let { sourceRevision: t, stemRevisions: n, ...r } = e;
		return r;
	}), t.clipFormatVersion === 2 ? t : {
		...t,
		clipFormatVersion: 2,
		persistentFormatVersion: 3,
		assets: t.assets.map((e) => {
			if (!af(e)) return e;
			let t = e, n = of(t.sourceRef), r = Object.fromEntries(Object.entries(t.stemRefs ?? {}).flatMap(([e, t]) => {
				let n = of(t);
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
//#region src/core/managedEditorDocument.ts
function cf(e) {
	return Xd(sf(e));
}
function lf(e, t) {
	let n = e.document.assets.find((e) => e.kind === "composition" && e.id === t);
	if (!n) throw Error(`Composition asset not found: ${t}`);
	return n;
}
function uf(e, t) {
	return {
		managedAngleCodecVersion: 1,
		angleUnit: "degrees",
		compositionId: t,
		composition: lf(e, t).composition,
		assets: e.document.assets
	};
}
function df(e, t) {
	let n = new Map(t.map((e) => [e.id, e]));
	return {
		...e,
		assets: e.assets.map((e) => {
			if (![
				"image",
				"video",
				"audio",
				"font",
				"model-3d"
			].includes(e.kind)) return e;
			let t = n.get(e.id);
			if (t && t.kind !== e.kind) throw Error(`Resolved source kind changed: ${e.id}`);
			let { sourceUrl: r, stemSources: i, ...a } = e, o = t;
			return {
				...a,
				...o?.sourceUrl ? { sourceUrl: o.sourceUrl } : {},
				...o?.stemSources ? { stemSources: { ...o.stemSources } } : {}
			};
		})
	};
}
//#endregion
//#region src/player/legacyPlayerProject.ts
var ff = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function pf(e, t = (e) => console.warn(e)) {
	if (!e || ![
		1,
		2,
		3
	].includes(e.clipFormatVersion) || "angleUnit" in e || "managedAngleCodecVersion" in e) throw Error("The public Player requires a legacy radian project file.");
	if (e.clipFormatVersion === 3) {
		let t = cf(e);
		return {
			document: t,
			workspace: uf(t, t.document.rootCompositionId),
			remoteAssetPolicy: t.document.remoteAssetPolicy
		};
	}
	let n = e.clipFormatVersion === 2 ? Oa(e) : e, r = new Map(n.assets.map((e) => [e.id, e])), i = /* @__PURE__ */ new Set(), a = (e) => {
		if (!i.has(e)) {
			i.add(e);
			try {
				t(`MacroFlush Player angle overflow at ${e.replace(/[\u0000-\u001f\u007f]/g, " ").slice(0, 240)}; using the native fallback.`);
			} catch {}
		}
	}, o = (e, t, n) => {
		if (!(t.shape === "scalar" ? typeof e == "number" && Number.isFinite(e) : Array.isArray(e) && e.length === 3 && [
			0,
			1,
			2
		].every((t) => typeof e[t] == "number" && Number.isFinite(e[t])))) return e;
		try {
			return Ud(e, t, "radians", "degrees", n);
		} catch {
			return a(n), t.shape === "scalar" ? NaN : [
				NaN,
				NaN,
				NaN
			];
		}
	}, s = (e, t) => {
		if (typeof e != "number" || !Number.isFinite(e)) return e;
		try {
			return Hd(e, "radians", "degrees", t);
		} catch {
			return a(t), NaN;
		}
	}, c = (e, t, n = "params") => {
		if (!ff(e)) return e;
		let r = Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ff(t) ? { ...t } : t]));
		for (let e of Id(t ?? "")) {
			let t = r[e.key];
			if (ff(t)) {
				for (let r of ["value", "default"]) r in t && (t[r] = o(t[r], e, `${n}.${e.key}.${r}`));
				for (let r of [
					"min",
					"max",
					"step"
				]) r in t && (t[r] = s(t[r], `${n}.${e.key}.${r}`));
			}
		}
		return r;
	}, l = (e, t) => ({
		...e,
		...e.parameters ? { parameters: c(e.parameters) } : {},
		layers: e.layers.map((e) => ({
			...e,
			clips: e.clips.map((e) => {
				let n = e.kind === "object-3d" ? r.get(e.assetId)?.kind : void 0, i = Id(n ?? ""), a = e.keyframeTracks;
				for (let n of i) {
					let r = a?.[n.key];
					Array.isArray(r) && (a = {
						...a,
						[n.key]: r.map((r, i) => ff(r) ? {
							...r,
							value: o(r.value, n, `${t}.${e.id}.keys.${n.key}.${i}`)
						} : r)
					});
				}
				return {
					...e,
					params: c(e.params, n, `${t}.${e.id}.params`),
					...a ? { keyframeTracks: a } : {}
				};
			})
		}))
	}), u = n.assets.map((e) => {
		if (e.kind === "composition") return {
			...e,
			composition: l(e.composition, e.id)
		};
		if (!Fd(e.kind) || !("descriptor" in e) || !ff(e.descriptor)) return e;
		let t = { ...e.descriptor };
		for (let n of Id(e.kind)) n.key === "rotation" && ff(t.transform) && "rotation" in t.transform ? t.transform = {
			...t.transform,
			rotation: o(t.transform.rotation, n, `${e.id}.descriptor.rotation`)
		} : n.key === "angle" && "angle" in t && (t.angle = o(t.angle, n, `${e.id}.descriptor.angle`));
		return {
			...e,
			descriptor: t
		};
	}), { assets: d, remoteAssetPolicy: f, clipFormatVersion: p, ...m } = n;
	return {
		document: null,
		workspace: {
			managedAngleCodecVersion: 1,
			angleUnit: "degrees",
			compositionId: e.clipFormatVersion === 2 ? e.rootCompositionId : "public-v1-root",
			composition: l(m, "root"),
			assets: u
		},
		remoteAssetPolicy: n.remoteAssetPolicy ?? {
			trustedDomains: [],
			projectAllowlist: [],
			requireHumanConfirmationForAi: !0
		}
	};
}
//#endregion
//#region src/core/managedEditorSources.ts
function mf(e, t) {
	Ki(e);
	let n = df(uf(e, e.document.rootCompositionId), t);
	return {
		...e,
		document: {
			...e.document,
			assets: [...n.assets]
		}
	};
}
//#endregion
//#region src/player/managedAnglePlayerApi.ts
function hf(e, t, n = {}) {
	let r = zd(n.angleUnit);
	Gi(t());
	let i = {
		setClipParam: e.setClipParam.bind(e),
		getClipParam: e.getClipParam.bind(e),
		set: e.set.bind(e),
		get: e.get.bind(e)
	}, a = (e, t) => {
		if (!t) return null;
		if (!n.legacyInput) return Rd(t.clip, t.key, Ld(e.assets));
		if (t.clip.kind !== "object-3d") return null;
		let r = "";
		for (let n of e.assets) n.id === t.clip.assetId && (r = n.kind);
		return Id(r).find((e) => e.key === t.key) ?? null;
	};
	function o(e, t) {
		let n = e.composition, r = t;
		for (; r.length >= 3;) {
			let t = n.layers.find((e) => e.name === r[0])?.clips.find((e) => e.name === r[1]);
			if (!t) return null;
			if (r.length === 3) return Object.prototype.hasOwnProperty.call(t.params, r[2]) ? {
				clip: t,
				key: r[2],
				schema: t.params[r[2]]
			} : null;
			if (t.kind !== "composition-ref") return null;
			let i = e.assets.find((e) => e.id === t.assetId);
			if (!i || i.kind !== "composition") return null;
			n = i.composition, r = r.slice(2);
		}
		return null;
	}
	function s(e, i, s) {
		let c = t();
		Gi(c);
		let l = o(c, e), u = a(c, l);
		if (!l || !u) return s(i);
		let d = $e(l.schema.type, i);
		if (d === void 0) return !1;
		if (!(u.shape === "scalar" ? typeof d == "number" && Number.isFinite(d) : Array.isArray(d) && d.length === 3 && d.every((e) => typeof e == "number" && Number.isFinite(e)))) return n.legacyInput ? s(i) : !1;
		let f;
		try {
			f = Ud(d, u, r, "degrees");
		} catch {
			return !1;
		}
		return s(Array.isArray(f) ? f : [f]);
	}
	function c(e, i) {
		if (i === void 0) return i;
		let s = t();
		Gi(s);
		let c = o(s, e), l = a(s, c);
		if (!l) return i;
		try {
			return Ud(i, l, "degrees", r);
		} catch (e) {
			if (n.legacyInput) return i;
			throw e;
		}
	}
	return {
		setClipParam: (e, t, n, ...r) => s([
			e,
			t,
			n
		], r, (r) => i.setClipParam(e, t, n, ...r)),
		getClipParam: (e, t, n) => c([
			e,
			t,
			n
		], i.getClipParam(e, t, n)),
		set: (e, ...t) => s(e.split("/").filter(Boolean), t, (t) => i.set(e, ...t)),
		get: (e) => c(e.split("/").filter(Boolean), i.get(e))
	};
}
//#endregion
//#region src/core/p5ReplayHistory.ts
function gf(e, t, n = []) {
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
		budget: Sa(r),
		definition: r,
		context: i,
		tick(e) {
			let t = _a(e), n = r.inFrame + t, a = de(i.parameters ?? {}, i.parameterKeyframeTracks, n), o = Ge(r, {
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
				params: de(r.params, r.keyframeTracks, t)
			};
		}
	};
}
//#endregion
//#region src/core/p5ReplaySession.ts
var _f = class extends Error {
	diagnostic;
	constructor(e) {
		super(e.message), this.diagnostic = e, this.name = "P5ReplayError";
	}
};
function vf(e) {
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
	}, u = (t, n, r) => new _f({
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
		let o = _a(n.localFrame), g = a.signal, _ = () => {
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
			let t = e instanceof _f ? e : u(g.aborted ? "canceled" : "draw-failed", o, e instanceof Error ? e.message : String(e));
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
				s = _a(t.localFrame);
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
var yf = /* @__PURE__ */ new WeakSet(), bf = !1, xf = () => {
	bf || (bf = !0, window.addEventListener("message", (e) => {
		!e.source || !yf.has(e.source) || (e.data?.bitmap?.close?.(), e.data?.helperBitmap?.close?.());
	}));
};
function Sf(e) {
	return async (t) => {
		xf();
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
		let f, p = (t, n) => new _f({
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
			r || (r = !0, m(p("canceled", "candidate disposed")), clearTimeout(y), t.signal.removeEventListener("abort", _), window.removeEventListener("message", g), n.contentWindow && yf.add(n.contentWindow), n.remove());
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
function Cf(e) {
	let { history: t } = e, n = t.definition, r = e.sourceId ?? n.id, i = structuredClone(e.descriptors), a = [], o = {
		draws: 0,
		cpuMs: 0,
		finalCaptures: 0,
		peakPixels: 0,
		peakSurfaces: 0,
		peakAccountedBytes: 0
	}, s = Sf({
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
		document: (a) => yd(r, n.source, n.params, n.remoteAssets, i, e.nativeAssetSources, {
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
	}), c = vf({
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
				let t = de(n.params, n.keyframeTracks, r);
				if (Object.keys(t).some((e) => JSON.stringify(t[e]) !== JSON.stringify(a[e]))) {
					let t = new _f({
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
function wf(e, t, n) {
	let r = e * t;
	return n === "html" ? Math.round(r) : Math.floor(r);
}
function Tf(e, t, n) {
	return wf(e, t, n) / t;
}
//#endregion
//#region src/core/sceneGraphTransform.ts
function Ef(e, t) {
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
function Df(e, t) {
	return [
		e[0] * t[0] + e[2] * t[1],
		e[1] * t[0] + e[3] * t[1],
		e[0] * t[2] + e[2] * t[3],
		e[1] * t[2] + e[3] * t[3],
		e[0] * t[4] + e[2] * t[5] + e[4],
		e[1] * t[4] + e[3] * t[5] + e[5]
	];
}
function Of(e, t, n) {
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
		o = Df(o, Ef(e, e.anchorPoint ?? [t[0] / 2, t[1] / 2])), s *= e.opacity, c &&= e.visible;
	}
	return {
		transform: o,
		opacity: s,
		visible: c
	};
}
//#endregion
//#region src/core/mediaTransport.ts
var kf = { mode: "realtime" }, Af = { mode: "paused-sample" }, jf = { mode: "prepared" }, Mf = (e) => e ? kf : Af, Nf = /* @__PURE__ */ new WeakMap();
function Pf(e, t) {
	!t.active || t.context.mode !== "paused-sample" || e.readyState === 0 || t.appliedTarget === t.target || (Math.abs(e.currentTime - t.target) > 1e-6 && (e.currentTime = t.target), t.appliedTarget = t.target);
}
function Ff(e) {
	let t = Nf.get(e);
	t && (t.active = !1), e.pause();
}
function If(e) {
	for (let t of e.values()) t instanceof HTMLMediaElement && Ff(t);
}
function Lf(e, t, n, r, i, a = 0, o = .15) {
	if (i.mode === "prepared") return;
	if (!t) {
		Ff(e);
		return;
	}
	let s = Nf.get(e);
	if (s || (s = {
		active: t,
		target: 0,
		context: i
	}, Nf.set(e, s), e.addEventListener("loadedmetadata", () => {
		let t = Nf.get(e);
		t && (t.appliedTarget = void 0, Pf(e, t));
	})), s.active = !0, s.target = Math.max(0, (n - a) / r), s.context = i, i.mode === "paused-sample") {
		e.pause(), Pf(e, s);
		return;
	}
	s.appliedTarget = void 0, Math.abs(e.currentTime - s.target) > o && (e.currentTime = s.target), e.play().catch(() => void 0);
}
//#endregion
//#region src/player/createClipPlayer.ts
function Rf(e) {
	if (!e || ![
		1,
		2,
		3
	].includes(e.clipFormatVersion) || "angleUnit" in e || "managedAngleCodecVersion" in e) throw Error("The public Player requires a legacy radian project file.");
}
function zf(e, t, n = !0) {
	if (Gi(e), !t) throw Error("Managed Player remote asset policy is required.");
	return {
		...n ? structuredClone(e.composition) : e.composition,
		assets: [...e.assets],
		remoteAssetPolicy: t
	};
}
var Bf = /* @__PURE__ */ new WeakMap();
function Vf(e, t, n = [0, 0]) {
	let [r, i] = t?.dimensions ?? [0, 0];
	return [typeof e.width == "number" && e.width > 0 ? e.width : r > 0 ? r : n[0], typeof e.height == "number" && e.height > 0 ? e.height : i > 0 ? i : n[1]];
}
function Hf(e) {
	return e instanceof HTMLImageElement ? [e.naturalWidth, e.naturalHeight] : e instanceof HTMLVideoElement ? [e.videoWidth, e.videoHeight] : typeof ImageBitmap < "u" && e instanceof ImageBitmap || e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? [e.width, e.height] : [0, 0];
}
function Uf(e, t) {
	if (!Array.isArray(e) || e.length < 2) return t;
	let n = Number(e[0]), r = Number(e[1]);
	return [Number.isFinite(n) ? n : t[0], Number.isFinite(r) ? r : t[1]];
}
function Wf(e, t, n) {
	let r = e.params[t];
	r && (r.value = n);
}
function Gf(e) {
	let t = zd(e.angleUnit);
	Rf(e.project);
	let n = pf(e.project), { angleUnit: r, project: i, ...a } = e, o = qf(a, {
		kind: "public",
		project: e.project,
		...n
	});
	return Object.assign(o.player, hf(o.player, o.getWorkspace, {
		angleUnit: t,
		legacyInput: !0
	}));
}
function Kf(e) {
	if ("angleUnit" in e) throw Error("Internal managed Player controls use degrees; angleUnit is a public API option.");
	Gi(e.workspace);
	let t = qf(e, {
		kind: "managed",
		workspace: e.workspace,
		remoteAssetPolicy: e.remoteAssetPolicy
	});
	return Object.assign(t.player, { setWorkspace: t.setWorkspace });
}
function qf(e, t) {
	let n = e.editorNativeAssetSources === !0, r = e.canvas ?? document.createElement("canvas"), i = e.iframeHost ?? document.createElement("div"), a = !e.iframeHost, o = Math.max(1, e.frameTransferFps ?? 30), s = e.dirtyOnly ?? !0, c = e.runtimeDepth ?? 0, l = /* @__PURE__ */ new Map(), u = {
		framesReceived: 0,
		framesComposited: 0,
		replacedFrames: 0,
		lastCompositeMs: 0
	}, d = null, f = null, p = null, m = null, h = Td("player"), g = Ed(), _ = Ed(), v = "root", y, b = 0, x, S = t.kind === "public" ? t.document : null, C = t.workspace, w = t.kind === "managed" || t.project.clipFormatVersion !== 1, T = zf(C, t.remoteAssetPolicy, t.kind === "managed"), E = di(T.assets, n), D = [], O = /* @__PURE__ */ new Map(), ee = [], te = /* @__PURE__ */ new Map(), ne = xt(), re = Et(), ie = null, ae = null, oe = 0, se = null, ce = /* @__PURE__ */ new Map(), le = new Map(T.assets.map((e) => [e.id, e])), ue = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), he = null, ge = null, k = !1, _e = e.mediaPlaying ?? !0, A = rf(), ve, j, ye = 0, be = Promise.resolve(), xe = [], Se = t.kind === "public" && t.project.clipFormatVersion === 3, Ce = (e, t, n) => {
		let { assets: r, remoteAssetPolicy: i, ...a } = e;
		return Kf({
			...n,
			workspace: {
				managedAngleCodecVersion: 1,
				angleUnit: "degrees",
				compositionId: t,
				composition: a,
				assets: r
			},
			remoteAssetPolicy: i
		});
	}, M = (e, t) => ma(e, {
		...C,
		composition: T,
		assets: T.assets
	}, t);
	i.setAttribute("aria-hidden", "true"), Object.assign(i.style, {
		position: "fixed",
		width: "1px",
		height: "1px",
		overflow: "hidden",
		opacity: "0",
		pointerEvents: "none",
		inset: "0"
	}), a && document.body.appendChild(i);
	let we = (e, t) => {
		r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
	}, Te = (e) => {
		let t = {
			type: "macroflush:frame-config",
			clipId: e.clip.id,
			enabled: !0,
			fps: o,
			dirtyOnly: s
		};
		e.iframe.contentWindow?.postMessage(t, "*");
	}, Ee = () => {
		le = new Map(T.assets.map((e) => [e.id, e])), ue = /* @__PURE__ */ new Map();
		for (let e of T.layers) for (let t of e.clips) t.kind === "html" && (t.assetId && !ue.has(t.assetId) && ue.set(t.assetId, t), ue.has(t.id) || ue.set(t.id, t));
		for (let e of T.assets) {
			if (e.kind !== "html-clip") continue;
			let t = ue.get(e.clipId ?? "") ?? ue.get(e.htmlTemplate.id) ?? e.htmlTemplate;
			ue.has(e.id) || ue.set(e.id, t);
		}
	}, De = () => {
		O = new Map(D.map((e) => [e.clip.id, e])), ee = [...D].reverse(), te = /* @__PURE__ */ new Map();
		for (let e of ee) {
			let t = te.get(e.layerRef.id) ?? [];
			t.push(e), te.set(e.layerRef.id, t);
		}
		ce.clear();
		for (let e of D) e.kind !== "html" || !e.iframe.contentWindow || ce.set(e.iframe.contentWindow, e);
	}, Oe = () => {
		ne.dispose();
		for (let e of D) if (e.kind === "html") e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.dispose(), e.bitmap?.close(), e.feedbackHost?.dispose(), e.feedbackStartup?.reject(/* @__PURE__ */ Error("Feedback Player slot disposed.")), e.iframe.remove(), e.documentToken && g.forget(e.documentToken);
		else if (e.kind === "instance") continue;
		else if (e.kind === "runtime-instance") continue;
		else if (e.kind === "composition-ref" || e.kind === "runtime") e.player.destroy(), g.forget(`child:${e.clip.id}`);
		else if (e.kind === "image") e.image.onload = null, e.image.onerror = null, e.image.src = "";
		else {
			let t = e.kind === "video" ? e.video : e.audio;
			Ff(t), t.removeAttribute("src"), t.load(), t.remove();
		}
		D = [], De(), pe.clear();
		for (let e of me.values()) e instanceof HTMLMediaElement && (Ff(e), e.removeAttribute("src"), e.load(), e.remove());
		me.clear(), he &&= (he.width = 0, he.height = 0, null), ge &&= (ge.width = 0, ge.height = 0, null);
	}, ke = () => {
		Oe(), xe = [];
		let t = new Set(T.layers.flatMap((e) => e.clips.map((e) => e.id))), r = new Map(T.layers.flatMap((e) => e.clips.map((e) => [e.id, e])));
		fe = new Set(T.layers.flatMap((e) => e.visible === !1 ? [] : e.clips.flatMap((e) => {
			let n = e.maskClipId && t.has(e.maskClipId) ? [e.maskClipId] : [];
			if (e.kind === "html" && e.instanceOfClipId) {
				let t = r.get(e.instanceOfClipId);
				t?.kind === "html" && !t.instanceOfClipId && n.push(t.id);
			}
			return n;
		})));
		for (let e of [...fe]) {
			let t = r.get(e);
			if (t?.kind !== "html" || !t.instanceOfClipId) continue;
			let n = r.get(t.instanceOfClipId);
			n?.kind === "html" && !n.instanceOfClipId && fe.add(n.id);
		}
		for (let t of T.layers) for (let a of t.clips) {
			if (a.kind === "shader") continue;
			if (a.kind === "composition-ref") {
				let n = le.get(a.assetId);
				if (!n || n.kind !== "composition") {
					console.warn(`MacroFlush player skipped composition clip "${a.name}": source composition is unavailable.`);
					continue;
				}
				let r = {
					...structuredClone(n.composition),
					assets: T.assets,
					remoteAssetPolicy: T.remoteAssetPolicy
				}, o = document.createElement("canvas"), s = Ce(r, n.id, {
					...e,
					mediaPlaying: _e,
					canvas: o,
					iframeHost: i,
					onComposite: () => He()
				});
				E.feedbackResources?.length && xe.push(s.ready), D.push({
					kind: "composition-ref",
					layerRef: t,
					clip: a,
					player: s
				});
				continue;
			}
			if (a.kind === "image" || a.kind === "video" || a.kind === "audio") {
				let e = le.get(a.assetId);
				if (!e || e.kind !== a.kind || !e.sourceUrl) {
					console.warn(`MacroFlush player skipped ${a.kind} clip "${a.name}": source asset is unavailable.`);
					continue;
				}
				if (!pi(e.sourceUrl, n)) {
					console.warn(`MacroFlush player skipped ${a.kind} clip "${a.name}": remote media URLs are not allowed.`);
					continue;
				}
				if (a.kind === "image") {
					let n = new Image();
					n.crossOrigin = "anonymous";
					let r = {
						kind: "image",
						layerRef: t,
						clip: a,
						image: n,
						ready: !1
					};
					n.onload = () => {
						k || (r.ready = !0);
					}, n.onerror = () => {
						k || console.warn(`MacroFlush player could not load image clip "${a.name}".`);
					}, n.src = e.sourceUrl, D.push(r);
					continue;
				}
				if (a.kind === "video") {
					let n = document.createElement("video");
					n.crossOrigin = "anonymous", n.muted = !0, n.loop = !0, n.playsInline = !0, n.preload = "auto";
					let r = {
						kind: "video",
						layerRef: t,
						clip: a,
						video: n,
						ready: !1
					};
					n.onloadeddata = () => {
						k || (r.ready = !0);
					}, n.onerror = () => {
						k || console.warn(`MacroFlush player could not load video clip "${a.name}".`);
					}, n.src = e.sourceUrl, i.appendChild(n), D.push(r);
					continue;
				}
				let r = document.createElement("audio");
				r.loop = !0, r.preload = "auto";
				let o = {
					kind: "audio",
					layerRef: t,
					clip: a,
					audio: r,
					ready: !1
				};
				r.oncanplay = () => {
					k || (o.ready = !0);
				}, r.onerror = () => {
					k || console.warn(`MacroFlush player could not load audio clip "${a.name}".`);
				}, r.src = e.sourceUrl, i.appendChild(r), D.push(o);
				continue;
			}
			if (a.kind !== "html") continue;
			if (a.instanceOfClipId) {
				let e = r.get(a.instanceOfClipId);
				if (e?.kind === "html" && !e.instanceOfClipId) {
					D.push({
						kind: "instance",
						layerRef: t,
						clip: a,
						masterClipId: e.id
					});
					continue;
				}
			}
			let o = document.createElement("iframe"), s = crypto.randomUUID(), c = Dd({
				binding: a.feedback,
				assets: T.assets,
				isolated: a.capabilities?.includes("p5") && a.p5Playback === "isolated-replay"
			}), l = {
				kind: "html",
				layerRef: t,
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
				l.ready = !0, l.replayDirty = !0, l.replayRequest = 0, D.push(l);
				continue;
			}
			if (E.feedbackResources?.length) {
				let e, t, n = new Promise((n, r) => {
					e = n, t = r;
				});
				n.catch(() => void 0), l.feedbackStartup = {
					promise: n,
					resolve: e,
					reject: t
				}, xe.push(n);
			}
			_d(a.source) ? bd(a.id, a.source, a.params, a.remoteAssets, E.descriptors, !1, n, {
				documentToken: s,
				feedback: a.feedback,
				feedbackInputEnabled: l.feedbackInputEnabled,
				libraries: a.libraries,
				capabilities: a.capabilities,
				runtimeContext: {
					fps: T.fps,
					compositionWidth: T.width,
					compositionHeight: T.height
				}
			}).then((e) => {
				!k && o.isConnected && (o.srcdoc = e);
			}).catch((t) => {
				if (!k) {
					let n = /* @__PURE__ */ Error(`MacroFlush player failed to build clip document for "${a.name}": ${String(t)}`);
					l.feedbackStartup?.reject(n), e.onError?.(n), console.error(n);
				}
			}) : o.srcdoc = yd(a.id, a.source, a.params, a.remoteAssets, E.descriptors, n, {
				documentToken: s,
				feedback: a.feedback,
				feedbackInputEnabled: l.feedbackInputEnabled,
				libraries: a.libraries,
				capabilities: a.capabilities,
				runtimeContext: {
					fps: T.fps,
					compositionWidth: T.width,
					compositionHeight: T.height
				}
			}), l.feedbackHost = li(o, E, a.id, s), i.appendChild(o), o.contentWindow && ce.set(o.contentWindow, l), D.push(l);
		}
		De(), Ae();
	}, Ae = () => {
		let e = new Set(D.flatMap((e) => e.kind === "html" ? [...e.sceneGraph.values()].map((e) => e.assetId) : []));
		for (let [t, n] of me) e.has(t) || (n instanceof HTMLMediaElement && (n.pause(), n.removeAttribute("src"), n.load(), n.remove()), me.delete(t));
	}, je = (e, t, n) => {
		let r = t.kind === "composition" ? [t.composition.width, t.composition.height] : Uf(e.params.size?.value, [T.width, T.height]);
		Wf(e, "position", [n.x, n.y]), Wf(e, "scale", [n.scale, n.scale]), Wf(e, "rotation", n.rotation), Wf(e, "opacity", n.opacity), Wf(e, "size", r), Wf(e, "anchorPoint", n.anchorPoint ?? [r[0] / 2, r[1] / 2]), Wf(e, "blendMode", n.blendMode ?? "normal");
		for (let [t, r] of Object.entries(n.clip ?? {})) Wf(e, t, r);
	}, Me = () => {
		let t = /* @__PURE__ */ new Map();
		for (let e of D) {
			if (e.kind !== "html") continue;
			let n = e.sceneGraph, r = new Set([...n.values()].filter((e) => e.visible && e.instanceOfId).map((e) => e.instanceOfId));
			for (let i of e.sceneGraph.values()) {
				let a = le.get(i.assetId);
				if (!i.visible && !r.has(i.id) || a?.kind !== "html-clip" && a?.kind !== "composition") continue;
				if (c >= 1) {
					console.warn(`MacroFlush player ignored nested runtime asset "${a.name}" to prevent recursion.`);
					continue;
				}
				let o = a.kind === "html-clip" ? ue.get(a.id) : null, s = Ua(a, i);
				if (s) throw s;
				let l = o?.kind === "html" ? o.params : void 0, u = i.instanceOfId ? n.get(i.instanceOfId) : void 0, d = a.kind === "html-clip" && i.instanceOfId && u && !u.instanceOfId && u.assetId === i.assetId, f = pe.get(i.id), p = !!(f && (d && f.kind === "runtime-instance" || !d && f.kind === "runtime") && f.clip.assetId === a.id), m = p ? f.clip : Ya(a, i, T.durationFrames, l);
				if (p && je(m, a, i), d) {
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
						...structuredClone(a.composition),
						assets: T.assets,
						remoteAssetPolicy: T.remoteAssetPolicy
					};
					else {
						let { contentClip: e, size: t } = Xa(m);
						h = {
							...T,
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
					time: se?.ticks.get(e.clip.id)?.time
				});
			}
		}
		for (let [e, n] of pe) t.has(e) || (n.kind === "runtime" && (n.player.destroy(), g.forget(`child:${n.clip.id}`)), pe.delete(e), D = D.filter((e) => e !== n));
		for (let [n, r] of t) {
			let t = pe.get(n);
			if (t?.kind === "runtime" && r.kind === "runtime") {
				t.clip = r.clip, t.layerRef = r.layerRef, t.visible = r.visible, t.parentClipId = r.parentClipId;
				continue;
			}
			if (t?.kind === "runtime-instance" && r.kind === "runtime-instance") {
				t.clip = r.clip, t.layerRef = r.layerRef, t.masterObjectId = r.masterObjectId, t.visible = r.visible, t.parentClipId = r.parentClipId;
				continue;
			}
			if (t && (t.kind === "runtime" && (t.player.destroy(), g.forget(`child:${t.clip.id}`)), pe.delete(n), D = D.filter((e) => e !== t)), r.kind === "runtime-instance") {
				let e = {
					kind: "runtime-instance",
					layerRef: r.layerRef,
					clip: r.clip,
					masterObjectId: r.masterObjectId,
					objectId: r.objectId,
					parentClipId: r.parentClipId,
					visible: r.visible
				};
				pe.set(n, e), D.push(e);
				continue;
			}
			let a = document.createElement("canvas"), o = Ce(r.project, r.clip.assetId ?? `runtime:${r.clip.id}`, {
				...e,
				mediaPlaying: _e,
				canvas: a,
				iframeHost: i,
				runtimeDepth: c + 1,
				onComposite: () => He()
			}), s = {
				kind: "runtime",
				layerRef: r.layerRef,
				clip: r.clip,
				player: o,
				objectId: r.objectId,
				visible: r.visible,
				parentClipId: r.parentClipId
			};
			if (pe.set(n, s), D.push(s), r.time !== void 0) {
				let e = r.clip.kind === "html" && r.clip.capabilities?.includes("p5") && r.clip.p5Playback === "isolated-replay";
				o.tickTime(e ? r.time : Tf(r.time, r.project.fps, r.clip.kind === "html" ? "html" : "composition"));
			}
		}
		De();
	}, Ne = (t) => {
		if (k || !t.data || typeof t.data != "object") return;
		let r = t.data;
		if (typeof r.clipId != "string") return;
		let i = ce.get(t.source);
		if (!(!i || i.clip.id !== r.clipId)) {
			if (r.type === "macroflush:runtime-error" && r.documentToken === i.documentToken && r.feedbackError === !0) {
				let t = Error(String(r.error));
				i.feedbackStartup?.reject(t), e.onError?.(t);
				return;
			}
			if (r.type === "macroflush:param-frame-complete") {
				if (typeof r.frameParamToken == "string" && Array.isArray(r.writes)) {
					if (ae) try {
						ae.complete(r.frameParamToken, i.clip.id, r.writes) && (Ke(), He());
					} catch (t) {
						ae = null, se = null, e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
					}
					else re.complete(r.frameParamToken, i.clip.id, r.writes) && He();
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
				}, "*"), ki(i.clip.source.js) ? Mi(T.assets, T.layers, T.fps, n).then((t) => {
					k || !i.iframe.isConnected || i.iframe.contentWindow !== e || (e?.postMessage({
						type: "macroflush:audio-analysis",
						clipId: i.clip.id,
						payload: t
					}, "*"), i.ready = !0, nt());
				}).catch((t) => {
					console.error(`MacroFlush player failed to prepare audio analysis for "${i.clip.name}"`, t), !(k || !i.iframe.isConnected || i.iframe.contentWindow !== e) && (e?.postMessage({
						type: "macroflush:audio-analysis",
						clipId: i.clip.id,
						payload: {
							analyses: {},
							stems: {},
							placements: []
						}
					}, "*"), i.ready = !0, nt());
				}) : (i.ready = !0, nt());
				return;
			}
			if (r.type === "macroflush:cue" && typeof r.name == "string" && Number.isFinite(Number(r.frame))) {
				l.set(r.name, Math.max(0, Math.floor(Number(r.frame))));
				return;
			}
			if (r.type === "macroflush:go" && typeof r.name == "string") {
				let t = l.get(r.name);
				t !== void 0 && e.onGo?.(r.name, t);
				return;
			}
			if (r.type === "macroflush:comp-param-change" && typeof r.key == "string") {
				let e = T.parameters?.[r.key];
				e && (e.value = r.value);
				return;
			}
			if (r.type === "macroflush:param-change" && typeof r.key == "string") {
				let e = i.clip.params[r.key];
				e && (e.value = r.value, Ct(T.layers));
				return;
			}
			if (r.type === "macroflush:scene") {
				let t = Array.isArray(r.operations) ? r.operations.filter(Qf) : Qf(r.operation) ? [r.operation] : [];
				if (t.length === 0) return;
				let n = i.sceneGraph;
				for (let e of t) n = Ka(n, e);
				i.sceneGraph = n;
				try {
					Me();
				} catch (t) {
					e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
				}
				return;
			}
			if (!(r.type !== "macroflush:frame" || !(r.bitmap instanceof ImageBitmap))) {
				if (ae && r.frameParamToken !== ae.token) {
					r.bitmap.close();
					return;
				}
				i.bitmap && (i.bitmap.close(), u.replacedFrames += 1), i.bitmap = r.bitmap, Number.isFinite(Number(r.frameSeq)) && (i.lastFrameSeq = Math.max(i.lastFrameSeq, Math.floor(Number(r.frameSeq)))), u.framesReceived += 1, He();
			}
		}
	}, Pe = (e) => {
		if (!e.bitmap) return;
		let t = e.bitmap;
		(e.frameCanvas.width !== t.width || e.frameCanvas.height !== t.height) && (e.frameCanvas.width = t.width, e.frameCanvas.height = t.height);
		let n = e.frameCanvas.getContext("2d");
		n?.clearRect(0, 0, e.frameCanvas.width, e.frameCanvas.height), n?.drawImage(t, 0, 0), t.close(), e.bitmap = null, e.hasFrame = !0;
	}, Fe = (e, t, n, i, a) => {
		if (t.kind === "runtime-instance") {
			let n = pe.get(t.masterObjectId);
			return !n || n.kind !== "runtime" ? !1 : Ie(e, t, n.player.canvas, i, a);
		}
		if (t.kind === "instance") {
			let o = O.get(t.masterClipId);
			if (!o || o.kind !== "html" || i < o.clip.inFrame || i >= o.clip.outFrame) return !1;
			Pe(o);
			let s = tt(e, r, T, n.params, [o.frameCanvas.width, o.frameCanvas.height], a);
			return o.hasFrame && e.drawImage(o.frameCanvas, 0, 0, s[0], s[1]), Yf(e, o.sceneGraph, E, me, o.matteCache, i, T.fps, Mf(_e), ze()), e.restore(), o.hasFrame || o.sceneGraph.size > 0;
		}
		if (t.kind === "image") return t.ready ? (Jf(e, T, n.params, t.image, [t.image.naturalWidth, t.image.naturalHeight], a), !0) : !1;
		if (t.kind === "video") return !t.ready || t.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ? !1 : (Jf(e, T, n.params, t.video, [t.video.videoWidth, t.video.videoHeight], a), !0);
		if (t.kind === "audio") return !1;
		if (t.kind === "composition-ref" || t.kind === "runtime") {
			if (t.kind === "runtime" && !Re(t)) return Ie(e, t, t.player.canvas, i, a);
			let o = tt(e, r, T, n.params, [t.player.canvas.width, t.player.canvas.height], a);
			return e.drawImage(t.player.canvas, 0, 0, o[0], o[1]), e.restore(), !0;
		}
		Pe(t);
		let o = tt(e, r, T, n.params, [t.frameCanvas.width, t.frameCanvas.height], a);
		return t.hasFrame && e.drawImage(t.frameCanvas, 0, 0, o[0], o[1]), Yf(e, t.sceneGraph, E, me, t.matteCache, i, T.fps, Mf(_e), ze()), e.restore(), t.hasFrame || t.sceneGraph.size > 0;
	}, Ie = (e, t, n, i, a) => {
		let o = t.parentClipId ? O.get(t.parentClipId) : void 0, s = o?.kind === "html" ? o.sceneGraph.get(t.objectId) : void 0;
		if (!o || o.kind !== "html" || !s) return !1;
		let c = Ye(o.clip, {
			frame: i,
			fps: T.fps,
			playing: !0,
			speed: 1
		}, T), l = Of(o.sceneGraph, s.id, (e) => Vf(e, E.get(e.assetId)));
		if (!c || !l?.visible) return !1;
		let u = Vf(s, E.get(s.assetId), [n.width, n.height]);
		return tt(e, r, T, {
			...c.params,
			opacity: 1,
			blendMode: "normal"
		}, [o.frameCanvas.width, o.frameCanvas.height], "source-over"), e.beginPath(), e.rect(0, 0, o.frameCanvas.width, o.frameCanvas.height), e.clip(), e.transform(...l.transform), e.globalAlpha = Math.max(0, Math.min(1, l.opacity)), e.globalCompositeOperation = a ?? et[s.blendMode ?? "normal"] ?? "source-over", e.drawImage(n, 0, 0, u[0], u[1]), e.restore(), !0;
	}, Le = (e) => {
		if (e.kind === "html") return e.sceneGraph;
		if (e.kind !== "instance") return null;
		let t = O.get(e.masterClipId);
		return t?.kind === "html" ? t.sceneGraph : null;
	}, Re = (e) => e?.kind === "runtime" && e.clip.kind === "html" && !!e.clip.capabilities?.includes("p5") && e.clip.p5Playback === "isolated-replay", ze = () => new Map([...pe].flatMap(([e, t]) => {
		let n = t.kind === "runtime-instance" ? pe.get(t.masterObjectId) : t;
		return n?.kind === "runtime" && Re(n) ? [[e, n.player.canvas]] : [];
	})), Be = (e, t, n, i) => {
		let a = Le(t);
		if (!a || a.size === 0) return Fe(e, t, n, i, "destination-in");
		let o = ge ??= document.createElement("canvas");
		(o.width !== r.width || o.height !== r.height) && (o.width = r.width, o.height = r.height);
		let s = o.getContext("2d");
		return !s || (s.clearRect(0, 0, o.width, o.height), !Fe(s, t, n, i, "source-over")) ? !1 : (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalCompositeOperation = "destination-in", e.drawImage(o, 0, 0), e.restore(), !0);
	}, Ve = (t, n, i, a) => {
		let o = performance.now(), s = r.getContext("2d");
		if (!s) return;
		s.clearRect(0, 0, r.width, r.height);
		let c = (e) => {
			if (a.has(e.clip.id)) {
				let t = a.get(e.clip.id), n = ae?.overridesFor(e.clip.id);
				return t && n && Object.keys(n).length ? {
					...t,
					params: {
						...t.params,
						...n
					}
				} : t ?? null;
			}
			let t = Ye(e.clip, n, T, i);
			return a.set(e.clip.id, t), t;
		}, l = !1, d = (e, n) => {
			for (let i of te.get(n.id) ?? []) {
				if (Re(i) || i.kind === "runtime-instance" && Re(pe.get(i.masterObjectId)) || (i.kind === "runtime" || i.kind === "runtime-instance") && !i.visible || i.layerRef.visible === !1) continue;
				let n = c(i);
				if (!n) {
					i.kind === "html" && (i.bitmap?.close(), i.bitmap = null, i.hasFrame = !1);
					continue;
				}
				let a = i.clip.maskClipId ? O.get(i.clip.maskClipId) : void 0, o = a ? c(a) : null;
				if (!a || !o) {
					Fe(e, i, n, t) && (u.framesComposited += 1);
					continue;
				}
				let s = he ??= document.createElement("canvas");
				l = !0, (s.width !== r.width || s.height !== r.height) && (s.width = r.width, s.height = r.height);
				let d = s.getContext("2d");
				if (d) {
					if (d.clearRect(0, 0, s.width, s.height), !Fe(d, i, n, t, "source-over") || !Be(d, a, o, t)) {
						Fe(e, i, n, t) && (u.framesComposited += 1);
						continue;
					}
					e.save(), e.globalCompositeOperation = et[String(n.params.blendMode)] ?? "source-over", e.drawImage(s, 0, 0), e.restore(), u.framesComposited += 1;
				}
			}
		};
		if (T.layers.some((e) => e.kind === "effect")) ne.render(s, T, n, i, (e, t) => d(e, t), (t) => {
			e.onError ? e.onError(t) : console.error(t);
		}, !1, ae?.overrides ?? re.overrides);
		else for (let e of [...T.layers].reverse()) d(s, e);
		!l && he && (he.width = 0, he.height = 0, he = null), !l && ge && (ge.width = 0, ge.height = 0, ge = null), u.lastCompositeMs = performance.now() - o, e.onComposite?.();
	}, He = () => {
		!se || !(ae ? ae.done : re.ready) || Ve(se.frame, se.state, se.compositionParams, se.ticks);
	}, Ue = (e, t, n, r) => g.visit({
		pathId: e,
		definitionKey: JSON.stringify([
			t,
			T.fps,
			n.inFrame,
			n.outFrame
		]),
		parent: r,
		mapTime: (e) => {
			let t = e * T.fps;
			return t >= n.inFrame && t < n.outFrame ? {
				time: (t - n.inFrame) / T.fps,
				segmentKey: String(b)
			} : null;
		}
	}), We = (e, t, n) => {
		if (!e.feedbackInputEnabled) return t;
		let r = Ue(e.documentToken, e.feedbackDefinition, e.clip, n);
		return r ? {
			...t,
			feedbackDelivery: r,
			feedbackInputIntent: n.inputDelivery
		} : t;
	}, Ge = (e) => {
		e.kind === "html" && e.documentToken && g.deactivate(e.documentToken), (e.kind === "composition-ref" || e.kind === "runtime") && (e.player.setMediaPlaying(!1), g.deactivate(`child:${e.clip.id}`), Bf.get(e.player)?.deactivate());
	}, Ke = () => {
		let t = se, n = ae;
		if (!(!t || !n)) for (let r of n.readyIds) {
			let i = O.get(r), a = t.ticks.get(r);
			if (!i || i.kind !== "html" || !i.ready || !a) continue;
			n.dispatch(r);
			let o = !i.hasEntered;
			i.hasEntered = !0;
			let s = n.overridesFor(r), c = M({
				...a,
				params: {
					...a.params,
					...s
				}
			}, i.clip);
			if (i.replayDirty !== void 0) {
				if (Object.keys(s).length) {
					let t = /* @__PURE__ */ Error(`P5 replay ${i.clip.id}: incoming cross-Clip writes cannot be reconstructed; use timeline mode.`);
					e.onError ? e.onError(t) : console.error(t);
					continue;
				}
				qe(i, {
					...c,
					frameParamToken: n.token
				});
				continue;
			}
			i.iframe.contentWindow?.postMessage({
				...We(i, c, t.feedback),
				entering: o,
				cueName: t.cueName,
				frameParamToken: n.token,
				crossClipParams: wt(T.layers, t.frame),
				allowedParamWrites: ie?.graph.links.filter((e) => e.sourceId === r).map((e) => [e.targetId, e.key]),
				frameTransferAvailable: i.bitmap === null,
				frameTransferAckSeq: i.lastFrameSeq
			}, "*");
		}
	}, qe = (t, r) => {
		t.replayDirty &&= (t.replay?.dispose(), t.replay = Cf({
			history: gf(t.clip, T, ui(E.descriptors, t.clip.libraries)),
			descriptors: ui(E.descriptors, t.clip.libraries),
			container: i,
			mode: "live",
			nativeAssetSources: n
		}), !1);
		let a = t.replay, o = t.replayRequest = (t.replayRequest ?? 0) + 1;
		a.request(r.frame, "playback").then(({ bitmap: e }) => {
			if (k || t.replay !== a || t.replayRequest !== o) {
				e.close();
				return;
			}
			if (r.frameParamToken && r.frameParamToken !== se?.token) {
				e.close();
				return;
			}
			t.bitmap && (t.bitmap.close(), u.replacedFrames++), t.bitmap = e, t.lastFrameSeq++, u.framesReceived++, r.frameParamToken && (ae ? (ae.complete(r.frameParamToken, t.clip.id, []), Ke()) : re.complete(r.frameParamToken, t.clip.id, [])), He();
		}).catch((n) => {
			k || t.replay !== a || t.replayRequest !== o || n instanceof _f && n.diagnostic.code === "canceled" || (e.onError ? e.onError(n instanceof Error ? n : Error(String(n))) : console.error(n));
		});
	}, Je = (e) => {
		if (p !== null) return x = "cue", d = p, f = e, p = null, d;
		if (!(T.cues && Object.keys(T.cues).length > 0)) return d = null, f = null, e;
		let t = Math.max(1, T.durationFrames), n = f === null ? 0 : e + t - f, r = f !== null && e < f && f >= t / 2 && e < t / 2;
		if (d === null || f === null || e < f && !r) return d = e, f = e, d;
		let i = r ? n : e - f, a = d + i, o = Ii(T.cues, T.durationFrames, d);
		return o && a >= o.rangeEnd ? (x = o.mode === "stop" ? "pause" : "wrap", d = o.mode === "loop" ? o.rangeStart : o.mode === "stop" ? Math.max(o.rangeStart, o.rangeEnd - 1) : a % t) : (d = a % t, (a >= t || r) && (x = "wrap")), f = e, d;
	}, Xe = (t, n = {}, r, i = !1) => {
		if (k) return;
		let a = Math.round(t * T.fps);
		se = null, ae = null, m = t, x = void 0;
		let o = i && y ? Math.round(y.time * T.fps) : Je(a);
		x && b++;
		let s;
		if (i && y) s = y;
		else {
			let e = r ? "child" : "root";
			if (e !== v && (g.resetParent(), _.resetParent(), h.reset(), v = e), r) {
				let e = _.visit({
					pathId: "clock",
					definitionKey: String(T.fps),
					parent: r,
					cause: x,
					mapTime: (e) => ({
						time: (Math.round(e * T.fps) + o - a) / T.fps,
						segmentKey: String(b)
					})
				});
				s = Object.freeze({
					time: o / T.fps,
					inputDelivery: r.inputDelivery,
					delivery: e
				});
			} else s = h.visit(o / T.fps, n, x);
			y = s;
		}
		let c = Ii(T.cues, T.durationFrames, o)?.name ?? null, l = {
			frame: o,
			fps: T.fps,
			playing: _e,
			speed: 1
		};
		_e || If(me);
		let u = T.cues && Object.keys(T.cues).length ? l : {
			...l,
			frame: t * T.fps
		}, d = de(T.parameters ?? {}, T.parameterKeyframeTracks, o), f = wt(T.layers, o), p = T.layers.some((e) => e.kind === "effect");
		try {
			ie?.layers !== T.layers && (ie = {
				layers: T.layers,
				graph: ei(T)
			});
		} catch (t) {
			e.onError ? e.onError(t instanceof Error ? t : Error(String(t))) : console.error(t);
			return;
		}
		let S = ie.graph, C = S.links.some((e) => T.layers.some((t) => t.clips.some((t) => t.id === e.targetId && t.kind === "html"))), w = p || C ? `player:${++oe}:${o}` : void 0, E = D.filter((e) => e.kind === "html" && (e.layerRef.visible !== !1 || fe.has(e.clip.id)) && Ye(e.clip, l, T, d)).map((e) => e.clip.id);
		C && w && (ae = ni(T, S, w, E)), re.begin(w ?? `player:plain:${oe}:${o}`, T, p && !C ? E : []);
		let ee = /* @__PURE__ */ new Map();
		for (let e of D) {
			if (e.layerRef.visible === !1 && !fe.has(e.clip.id)) {
				Ge(e), e.kind === "html" ? (e.hasEntered = !1, e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.cancelPending()) : e.kind === "runtime" && Re(e) ? e.player.tickTime(e.clip.outFrame / T.fps) : (e.kind === "video" || e.kind === "audio") && Lf(e.kind === "video" ? e.video : e.audio, !1, o, T.fps, Mf(_e), e.clip.inFrame);
				continue;
			}
			let t = Ye(e.clip, e.kind === "html" && e.replayDirty !== void 0 ? u : l, T, d);
			if (ee.set(e.clip.id, t), e.kind === "html") {
				if (!t) Ge(e), e.hasEntered = !1, e.replayRequest = (e.replayRequest ?? 0) + 1, e.replay?.cancelPending();
				else if (e.ready && !C) {
					let n = !e.hasEntered;
					e.hasEntered = !0;
					let r = e.bitmap === null, i = e.lastFrameSeq, a = M(t, e.clip);
					if (e.replayDirty !== void 0) {
						qe(e, {
							...a,
							frameParamToken: w
						});
						continue;
					}
					e.iframe.contentWindow?.postMessage(n ? {
						...We(e, a, s),
						entering: !0,
						cueName: c,
						crossClipParams: f,
						frameParamToken: w,
						frameTransferAvailable: r,
						frameTransferAckSeq: i
					} : {
						...We(e, a, s),
						cueName: c,
						crossClipParams: f,
						frameParamToken: w,
						frameTransferAvailable: r,
						frameTransferAckSeq: i
					}, "*");
				}
			} else if (e.kind === "composition-ref" || e.kind === "runtime") {
				if (e.player.setMediaPlaying(_e), e.kind === "runtime" && e.parentClipId && !Re(e)) {
					let n = O.get(e.parentClipId), r = n ? Ye(n.clip, l, T, d) : null;
					if (!n || !r || !t) {
						Ge(e);
						continue;
					}
					let i = le.get(e.clip.assetId), a = e.clip.kind === "html" ? "html" : "composition", o = i?.kind === "composition" ? i.composition.fps : T.fps, c = Tf(r.time, o, a), u = g.visit({
						pathId: `child:${e.clip.id}`,
						definitionKey: JSON.stringify([
							e.clip.assetId,
							n.clip.id,
							n.clip.inFrame,
							n.clip.outFrame,
							T.fps,
							o,
							a
						]),
						parent: s,
						mapTime: (e) => {
							let t = e * T.fps;
							return t >= n.clip.inFrame && t < n.clip.outFrame ? {
								time: Tf((t - n.clip.inFrame) / T.fps, o, a),
								segmentKey: String(b)
							} : null;
						}
					});
					u && Bf.get(e.player)?.tick(Object.freeze({
						time: c,
						inputDelivery: s.inputDelivery,
						delivery: u
					}));
					continue;
				}
				if (e.kind === "runtime" && Re(e) && e.parentClipId) {
					let t = O.get(e.parentClipId), n = t ? Ye(t.clip, l, T, d) : null;
					n ? e.player.tickTime(n.time) : (e.player.setMediaPlaying(!1), e.player.tickTime(e.clip.outFrame / T.fps));
				} else if (t) {
					let n = Ue(`child:${e.clip.id}`, e.clip.assetId ?? e.clip.id, e.clip, s);
					n && Bf.get(e.player)?.tick(Object.freeze({
						time: t.time,
						inputDelivery: s.inputDelivery,
						delivery: n
					}));
				} else Ge(e);
			} else (e.kind === "video" || e.kind === "audio") && Lf(e.kind === "video" ? e.video : e.audio, !!t, o, T.fps, Mf(_e), e.clip.inFrame);
		}
		se = {
			frame: o,
			state: l,
			compositionParams: d,
			cueName: c,
			token: w,
			ticks: ee,
			feedback: s
		}, C && Ke(), He();
	}, Ze = (e, t) => Xe(e, t), Qe = (e, t) => Ze(e / T.fps, t), nt = () => {
		m !== null && Xe(m, {}, void 0, !0);
	}, rt = (e) => {
		if (!(k || _e === e)) {
			_e = e, e || If(me);
			for (let t of D) !e && (t.kind === "video" || t.kind === "audio") ? Ff(t.kind === "video" ? t.video : t.audio) : (t.kind === "composition-ref" || t.kind === "runtime") && t.player.setMediaPlaying(e);
		}
	}, it = (t) => {
		j?.abort();
		let r = ++ye;
		if (Se = t.clipFormatVersion === 3, !Se) {
			be = Promise.all(xe).then(() => void 0), be.catch(() => void 0);
			return;
		}
		let i = nf(t), a = j = new AbortController();
		be = A.resolve(i, {
			securityScope: `web-player:${r}`,
			assetBaseUrl: e.assetBaseUrl,
			revision: () => String(r)
		}, a.signal).then((e) => {
			if (k || r !== ye) {
				e.release();
				return;
			}
			let t = e.states.filter((e) => e.status !== "ready");
			if (t.length) throw e.release(), Error(`Player sources unresolved: ${t.map((e) => `${e.assetId}: ${e.status}`).join(", ")}`);
			let i = C.compositionId;
			Se = !1;
			try {
				if (!S) throw Error("Public source resolution requires a normalized document owner.");
				S = mf(S, e.project.assets), C = uf(S, i), T = zf(C, S.document.remoteAssetPolicy), E = di(T.assets, n), Ee(), we(T.width, T.height), ke();
			} catch (t) {
				throw Oe(), e.release(), t;
			}
			let a = ve;
			return ve = e, a?.release(), m === null ? Ze(0) : nt(), Promise.all(xe).then(() => void 0);
		}), be.catch((e) => {
			!k && r === ye && !a.signal.aborted && console.warn("Unable to resolve Player sources.", e);
		});
	}, at = (e) => {
		if (k) throw Error("Cannot change a project after the Player is destroyed.");
		if (t.kind !== "public") throw Error("A managed Player requires setWorkspace(), not a raw project replacement.");
		Rf(e);
		let r = pf(e), i = r.workspace, a = zf(i, r.remoteAssetPolicy, !1);
		S = r.document, C = i, w = e.clipFormatVersion !== 1, T = a, d = null, f = null, p = null, h.reset(), _.reset(), g.reset(), y = void 0, E = di(T.assets, n), Ee(), we(T.width, T.height), e.clipFormatVersion === 3 ? Oe() : ke(), ve?.release(), ve = void 0, it(e);
	}, ot = (e, r) => {
		if (k) throw Error("Cannot change a workspace after the Player is destroyed.");
		if (t.kind !== "managed") throw Error("A public Player cannot install an internal workspace.");
		let i = zf(e, r);
		C = e, T = i, d = null, f = null, p = null, h.reset(), _.reset(), g.reset(), y = void 0, E = di(T.assets, n), Ee(), we(T.width, T.height), ke(), be = Promise.all(xe).then(() => void 0), be.catch(() => void 0);
	}, st = (e) => {
		if (k) throw Error("Cannot open a composition after the Player is destroyed.");
		if (!w) throw Error("openComposition() requires a V2 project file.");
		let t = Ta({ assets: T.assets }, e);
		return C = {
			...C,
			compositionId: t.id,
			composition: t.composition
		}, T = zf(C, T.remoteAssetPolicy), d = null, f = null, p = null, m = null, h.reset(), _.reset(), g.reset(), y = void 0, l.clear(), E = di(T.assets, n), Ee(), we(T.width, T.height), Se || (ke(), be = Promise.all(xe).then(() => void 0), be.catch(() => void 0)), Ze(0), {
			compositionId: t.id,
			width: T.width,
			height: T.height,
			fps: T.fps,
			bpm: T.bpm,
			durationFrames: T.durationFrames
		};
	}, ct = (e, t, n, ...r) => {
		let i = T.layers.find((t) => t.name === e)?.clips.find((e) => e.name === t), a = i?.params[n];
		if (!a) return !1;
		let o = $e(a.type, r);
		if (o === void 0) return !1;
		if (Object.is(a.value, o) || Array.isArray(a.value) && Array.isArray(o) && a.value.length === o.length && a.value.every((e, t) => Object.is(e, o[t]))) return !0;
		a.value = o;
		let s = O.get(i.id);
		return s?.kind === "html" && s.replayDirty !== void 0 && (s.replayDirty = !0), Ct(T.layers), !0;
	}, lt = (e, ...t) => {
		let n = T.layers.find((t) => t.name === e);
		if (!n) return !1;
		if (n.visible = !!t[0], !n.visible) for (let e of D) e.layerRef === n && !fe.has(e.clip.id) && Ge(e);
		return !0;
	}, ut = (e) => {
		let t = T.layers.find((t) => t.name === e);
		return t ? t.visible !== !1 : void 0;
	}, dt = (e, t, n) => T.layers.find((t) => t.name === e)?.clips.find((e) => e.name === t)?.params[n]?.value, ft = (e, ...t) => {
		let n = T.parameters?.[e];
		if (!n) return !1;
		let r = $e(n.type, t);
		if (r === void 0) return !1;
		n.value = r;
		for (let e of D) e.kind === "html" && e.replayDirty !== void 0 && (e.replayDirty = !0);
		return !0;
	}, pt = (e) => T.parameters?.[e]?.value, mt = (e) => {
		if (e.length <= 3) return null;
		let t = T.layers.find((t) => t.name === e[0])?.clips.find((t) => t.name === e[1]);
		if (!t || t.kind !== "composition-ref") return null;
		let n = D.find((e) => (e.kind === "composition-ref" || e.kind === "runtime") && e.clip === t);
		return !n || n.kind !== "composition-ref" && n.kind !== "runtime" ? null : {
			player: n.player,
			rest: `/${e.slice(2).join("/")}`
		};
	}, ht = (e) => {
		let t = T.cues?.[e];
		return t ? (p = t.frame, !0) : !1;
	}, gt = (e, ...t) => {
		let n = e.split("/").filter((e) => e.length > 0);
		if (n.length === 1) return lt(n[0], ...t);
		if (n.length === 2 && n[0] === "comp") return ft(n[1], ...t);
		if (n.length === 2 && n[0] === "layer") return lt(n[1], ...t);
		if (n.length === 3) return ct(n[0], n[1], n[2], ...t);
		let r = mt(n);
		return r ? r.player.set(r.rest, ...t) : !1;
	}, _t = (e) => {
		let t = e.split("/").filter((e) => e.length > 0);
		if (t.length === 1) return ut(t[0]);
		if (t.length === 2 && t[0] === "comp") return pt(t[1]);
		if (t.length === 2 && t[0] === "layer") return ut(t[1]);
		if (t.length === 3) return dt(t[0], t[1], t[2]);
		let n = mt(t);
		return n?.player.get(n.rest);
	}, vt = (e, t) => {
		if (!k) for (let n of D) n.kind === "html" && n.ready ? n.iframe.contentWindow?.postMessage({
			type: "macroflush:emit",
			clipId: n.clip.id,
			name: e,
			payload: t
		}, "*") : (n.kind === "composition-ref" || n.kind === "runtime") && n.player.emit(e, t);
	};
	we(T.width, T.height), Ee(), window.addEventListener("message", Ne), Se || ke(), t.kind === "public" ? it(t.project) : (be = Promise.all(xe).then(() => void 0), be.catch(() => void 0));
	let yt = {
		canvas: r,
		get ready() {
			return be;
		},
		tickTime: Ze,
		tick: Qe,
		setMediaPlaying: rt,
		resize: we,
		setProject: at,
		openComposition: st,
		setLayerVisible: lt,
		getLayerVisible: ut,
		setClipParam: ct,
		getClipParam: dt,
		setParam: ft,
		getParam: pt,
		go: ht,
		set: gt,
		get: _t,
		emit: vt,
		getStats: () => ({ ...u }),
		destroy() {
			k || (k = !0, Bf.delete(yt), h.dispose(), _.dispose(), g.dispose(), window.removeEventListener("message", Ne), Oe(), j?.abort(), ve?.release(), A.dispose(), a && i.remove());
		}
	};
	return Bf.set(yt, {
		tick: (e) => Xe(e.time, { inputDelivery: e.inputDelivery }, e),
		deactivate: () => {
			_.deactivate("clock"), g.reset();
		}
	}), {
		player: yt,
		setWorkspace: ot,
		getWorkspace: () => ({
			...C,
			composition: T,
			assets: T.assets
		})
	};
}
function Jf(e, t, n, r, i, a) {
	let o = [Math.max(1, i[0]), Math.max(1, i[1])];
	nt(e, r, o, tt(e, e.canvas, t, n, o, a)), e.restore();
}
function Yf(e, t, n, r, i, a, o, s = kf, c = /* @__PURE__ */ new Map()) {
	let l = typeof s == "boolean" ? s ? jf : kf : s, u = l.mode === "prepared";
	l.mode === "paused-sample" && If(r);
	let d = new Map([...t].filter(([, e]) => {
		let t = n.get(e.assetId)?.kind;
		return t === "image" || t === "video" || t === "audio" || (t === "html-clip" || t === "composition") && (u || c.has(e.id));
	})), f = (e) => {
		let t = n.get(d.get(e)?.assetId ?? "")?.kind;
		return t === "image" || t === "video";
	}, p = new Set([...d.values()].filter((e) => e.maskId && f(e.id) && f(e.maskId)).map((e) => e.id));
	for (let e of i.keys()) p.has(e) || i.delete(e);
	let m = Ga(d), h = e.getTransform(), g = /* @__PURE__ */ new Map();
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
		parent: Xf
	}));
	for (; v.length;) {
		let { node: e, parent: t } = v.pop(), r = e.object, i = n.get(r.assetId), a = Vf(r, i, Hf(c.get(r.id) ?? _(i))), o = r.anchorPoint ?? [a[0] / 2, a[1] / 2], s = {
			transform: Df(t.transform, Ef(r, o)),
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
		let [f, p] = Vf(t.object, s, Hf(d));
		if (d instanceof HTMLAudioElement) {
			if (u) return;
			d.volume = $f(t.object.volume, 1, 0, 1), Lf(d, !!(i.ignoreVisibility || r.visible), a, o, l);
			return;
		}
		d instanceof HTMLVideoElement && !u && Lf(d, !!(i.ignoreVisibility || r.visible), a, o, l), !(f <= 0 || p <= 0 || d instanceof HTMLImageElement && !d.complete || d instanceof HTMLVideoElement && d.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) && (e.save(), e.setTransform(h.a, h.b, h.c, h.d, h.e, h.f), e.transform(...r.transform), e.globalAlpha = $f(r.opacity, 1, 0, 1), e.globalCompositeOperation = i.composite ?? et[t.object.blendMode ?? "normal"] ?? "source-over", e.drawImage(d, 0, 0, f, p), e.restore());
	}, b = (e, t, n) => {
		let r = g.get(t.object.id);
		if (!r || !r.visible) return;
		let a = t.object.maskId && p.has(t.object.id) ? Zf(m, t.object.maskId) : void 0, o = a ? g.get(a.object.id) : void 0;
		if (t.object.id !== n && a && o) {
			let n = i.get(t.object.id);
			n || (n = document.createElement("canvas"), i.set(t.object.id, n)), (n.width !== e.canvas.width || n.height !== e.canvas.height) && (n.width = e.canvas.width, n.height = e.canvas.height);
			let r = n.getContext("2d");
			if (!r) return;
			r.clearRect(0, 0, n.width, n.height), b(r, t, t.object.id), y(r, a, o, {
				ignoreVisibility: !0,
				composite: "destination-in"
			}), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalAlpha = 1, e.globalCompositeOperation = et[t.object.blendMode ?? "normal"] ?? "source-over", e.drawImage(n, 0, 0), e.restore();
			return;
		}
		y(e, t, r, { composite: t.object.id === n ? "source-over" : void 0 });
		for (let r of t.children) b(e, r, n);
	};
	for (let t of m) b(e, t);
}
var Xf = {
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
function Zf(e, t) {
	for (let n of e) {
		if (n.object.id === t) return n;
		let e = Zf(n.children, t);
		if (e) return e;
	}
}
function Qf(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (t.type === "remove") return typeof t.id == "string";
	let n = t.object;
	return t.type === "upsert" && typeof n?.id == "string";
}
function $f(e, t, n = -Infinity, r = Infinity) {
	let i = Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, i)) : t;
}
//#endregion
export { tt as applyClipTransform, et as canvasBlendModes, Yf as compositeSceneGraph, Gf as createClipPlayer, Kf as createManagedClipPlayer, nt as drawImageCover, Vf as resolveDisplaySize };
