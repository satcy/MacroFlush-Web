import { englishUI } from "./ui-en.js";

export function currentLanguage() {
  return typeof document !== "undefined" && document.documentElement.lang === "en" ? "en" : "ja";
}

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const phrases = Object.keys(englishUI).filter(phrase => phrase.length > 2).sort((a, b) => b.length - a.length);
const pattern = new RegExp(phrases.map(escapeRegex).join("|"), "g");

export function translate(text, language = currentLanguage(), values = {}) {
  const input = String(text);
  const result = language === "en" ? Object.hasOwn(englishUI, input.trim())
    ? input.replace(input.trim(), englishUI[input.trim()])
    : input.replace(pattern, phrase => englishUI[phrase]) : input;
  return result.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const decodeHtml = value => value.replace(/&(amp|lt|gt|quot|#39);/g, (_, entity) => ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'" }[entity]));

// Translate text and attribute values, preserving markup and escaped code.
export function translateHtml(html, language) {
  if (language !== "en") return html;
  return html.split(/(<[^>]+>)/g).map(part => part.startsWith("<")
    ? part.replace(/([\w-]+)="([^"]*)"/g, (_, name, value) => {
      const translated = translate(decodeHtml(value), language);
      return `${name}="${escapeHtml(name === "data-search" ? translated.toLowerCase() : translated)}"`;
    })
    : escapeHtml(translate(decodeHtml(part), language))).join("");
}
