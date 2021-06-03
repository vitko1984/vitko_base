var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/.pnpm/cookie@0.4.1/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/.pnpm/cookie@0.4.1/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/.pnpm/svelte-use-click-outside@1.0.0/node_modules/svelte-use-click-outside/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/svelte-use-click-outside@1.0.0/node_modules/svelte-use-click-outside/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clickOutside = void 0;
    function clickOutside(node, handler) {
      var onClick = function(event) {
        return node && !node.contains(event.target) && !event.defaultPrevented && handler();
      };
      document.addEventListener("click", onClick, true);
      return {
        destroy: function() {
          document.removeEventListener("click", onClick, true);
        }
      };
    }
    exports.clickOutside = clickOutside;
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.113_svelte@3.38.2/node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      return fulfil(null);
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    if (isNaN(length) && h["transfer-encoding"] == null) {
      return fulfil(null);
    }
    let data = new Uint8Array(length || 0);
    if (length > 0) {
      let offset = 0;
      req.on("data", (chunk) => {
        const new_len = offset + Buffer.byteLength(chunk);
        if (new_len > length) {
          return reject({
            status: 413,
            reason: 'Exceeded "Content-Length" limit'
          });
        }
        data.set(chunk, offset);
        offset = new_len;
      });
    } else {
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data, 0);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        return fulfil(data);
      }
      const encoding = h["content-encoding"] || "utf-8";
      fulfil(new TextDecoder(encoding).decode(data));
    });
  });
}

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.113_svelte@3.38.2/node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.113_svelte@3.38.2/node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page.path)},
						query: new URLSearchParams(${s$1(page.query.toString())}),
						params: ${s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}<\/script>` : `<script type="svelte-data" url="${url}">${json}<\/script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const { name, message, stack } = error3;
    serialized = try_serialize({ name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error3 };
    }
    return { status, error: error3 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base2, path) {
  const baseparts = path[0] === "/" ? [] : base2.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = { ...opts.headers };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: { ...context }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error3 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({ request, options: options2, state, $session, route }) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({ status, error: error3 } = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({ ...request, params });
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let { status = 200, body, headers = {} } = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = { ...headers, "content-type": "application/json" };
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return { status, body: normalized_body, headers };
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const [type, ...directives] = headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    const headers = lowercase_keys(incoming.headers);
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers,
        body: parse_body(incoming.rawBody, headers),
        params: null,
        locals: {}
      },
      resolve: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store2, ...callbacks) {
  if (store2 == null) {
    return noop2;
  }
  const unsub = store2.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_store_value(store2, ret, value = ret) {
  store2.set(value);
  return ret;
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop2;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function custom_event(type, detail) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, false, false, detail);
  return e;
}
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/.pnpm/@lukeed+uuid@2.0.0/node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}

// .svelte-kit/output/server/app.js
var import_svelte_use_click_outside = __toModule(require_dist());

// node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/motion/index.mjs
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d2 = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d2) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d2) : current_value + d2;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store2 = writable2(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store2.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store2.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store2.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}

// .svelte-kit/output/server/app.js
var css$c = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}</style>"],"names":[],"mappings":"AAqDO,gCAAiB,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$c);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1pdgbjn"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({ request, resolve: resolve2 }) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  request.locals.userid = cookies.userid || v4();
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }
  const response = await resolve2(request);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-5bbed95a.js",
      css: ["/./_app/assets/start-0826e215.css"],
      js: ["/./_app/start-5bbed95a.js", "/./_app/chunks/vendor-3b9a9427.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{ "file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon" }, { "file": "robots.txt", "size": 67, "type": "text/plain" }, { "file": "svelte-welcome.png", "size": 360807, "type": "image/png" }, { "file": "svelte-welcome.webp", "size": 115470, "type": "image/webp" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/localStore\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return localStore$1;
      })
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/store\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return store;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/todos\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json;
      })
    },
    {
      type: "page",
      pattern: /^\/todos\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/todos\/([^/]+?)\.json$/,
      params: (m) => ({ uid: d(m[1]) }),
      load: () => Promise.resolve().then(function() {
        return _uid__json;
      })
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/todos/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "/./_app/pages/__layout.svelte-73d0d0e9.js", "css": ["/./_app/assets/pages/__layout.svelte-93dd1bc4.css"], "js": ["/./_app/pages/__layout.svelte-73d0d0e9.js", "/./_app/chunks/vendor-3b9a9427.js"], "styles": null }, ".svelte-kit/build/components/error.svelte": { "entry": "/./_app/error.svelte-3cbcd7a7.js", "css": [], "js": ["/./_app/error.svelte-3cbcd7a7.js", "/./_app/chunks/vendor-3b9a9427.js"], "styles": null }, "src/routes/index.svelte": { "entry": "/./_app/pages/index.svelte-477c52b0.js", "css": ["/./_app/assets/pages/index.svelte-a47133f8.css"], "js": ["/./_app/pages/index.svelte-477c52b0.js", "/./_app/chunks/vendor-3b9a9427.js"], "styles": null }, "src/routes/about.svelte": { "entry": "/./_app/pages/about.svelte-edf4c337.js", "css": ["/./_app/assets/pages/about.svelte-51ba7a34.css"], "js": ["/./_app/pages/about.svelte-edf4c337.js", "/./_app/chunks/vendor-3b9a9427.js"], "styles": null }, "src/routes/todos/index.svelte": { "entry": "/./_app/pages/todos/index.svelte-7a8ee9c9.js", "css": ["/./_app/assets/pages/todos/index.svelte-ab14594b.css"], "js": ["/./_app/pages/todos/index.svelte-7a8ee9c9.js", "/./_app/chunks/vendor-3b9a9427.js"], "styles": null } };
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({ paths: { "base": "", "assets": "/." } });
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender: prerender2 });
}
function localStore(key, value) {
  const data = typeof localStorage != "undefined" ? localStorage.getItem(key) : null;
  const store2 = writable2(value);
  if (data !== null) {
    store2.set(data);
  }
  store2.subscribe((val) => {
    if (typeof localStorage == "undefined") {
      return;
    }
    localStorage.setItem(key, val);
  });
  return store2;
}
var modal = writable2({});
var localStore$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  localStore,
  modal
});
var theme = localStore("theme", "dark");
var store = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  theme
});
var base = "https://api.svelte.dev";
async function api(request, resource, data) {
  if (!request.locals.userid) {
    return { status: 401 };
  }
  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request.method !== "GET" && request.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/todos"
      }
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`);
  if (response.status === 404) {
    return { body: [] };
  }
  return response;
};
var post = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`, {
    text: request.body.get("text")
  });
  return response;
};
var index_json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get,
  post
});
var patch = async (request) => {
  return api(request, `todos/${request.locals.userid}/${request.params.uid}`, {
    text: request.body.get("text"),
    done: request.body.has("done") ? !!request.body.get("done") : void 0
  });
};
var del = async (request) => {
  return api(request, `todos/${request.locals.userid}/${request.params.uid}`);
};
var _uid__json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  patch,
  del
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"sm:hidden"}"></div>`;
});
var account = {
  errors: {
    weakPassword: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
    wrongPassword: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    tooManyRequests: "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
    inputVoid: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F",
    differentPasswords: "\u041F\u0430\u0440\u043E\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u044B\u043C\u0438"
  },
  changedPassword: "\u041F\u0430\u0440\u043E\u043B\u044C \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D"
};
var lp = {
  pageTitle: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0434\u043B\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 - \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432 iFinik \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",
  pageDescription: "iFinik \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0432\u0441\u044E \u0432\u0430\u0436\u043D\u0443\u044E \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0438\u0433\u0440\u043E\u043A\u0430\u0445 \u0444\u043E\u0434\u043E\u0432\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438, \u0410\u043C\u0435\u0440\u0438\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u0440\u0430\u043D, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u0438 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u0442\u044C \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0440\u0433\u043E\u0432.",
  first: {
    investTitle: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",
    ecosystem: "\u042D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432",
    list: [
      {
        text: "\u2022 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432, \u0441 \u0441\u0438\u0433\u043D\u0430\u043B\u0430\u043C\u0438 \u043E\u0442 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043E \u0434\u043E\u0445\u043E\u0434\u043D\u044B\u0445 \u0442\u043E\u0440\u0433\u0430\u0445"
      },
      {
        text: "\u2022 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u0431\u043E\u0440\u0430 \u0431\u0440\u043E\u043A\u0435\u0440\u0430"
      },
      {
        text: "\u2022 \u0441\u043A\u0440\u0438\u043D\u0435\u0440\u044B, \u0430\u043D\u0430\u043B\u0438\u0437 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0440\u0433\u043E\u0432"
      }
    ],
    joinNow: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F"
  },
  second: {
    title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
    description: "\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439 \u0432\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440 \u0438\u043B\u0438 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C, \u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0442\u044C \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435!",
    cards: {
      swiftness: {
        title: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",
        description: "\u0411\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D \u0440\u044B\u043D\u043E\u043A \u0438 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. \u0418 \u043D\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u0430\u0442\u044C."
      },
      simplicity: {
        title: "\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430",
        description: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0443\u044E \u0438 \u0431\u0438\u0440\u0436\u0435\u0432\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u043C \u0432\u0438\u0434\u0435. \u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0434\u043E\u0445\u043E\u0434\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F."
      },
      confidence: {
        title: "\u0423\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        description: "\u041D\u0435 \u0431\u044B\u0442\u044C \u043E\u0431\u043C\u0430\u043D\u0443\u0442\u044B\u043C. \u0418 \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C."
      }
    }
  },
  third: {
    title: "\u0427\u0442\u043E \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C",
    cards: {
      screener: {
        title: "\u0421\u043A\u0440\u0438\u043D\u0435\u0440 \u0430\u043A\u0446\u0438\u0439",
        description: "\u041C\u043E\u0449\u043D\u044B\u0439 \u0441\u043A\u0440\u0438\u043D\u0435\u0440 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433. \u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0434\u043E\u0445\u043E\u0434\u043D\u044B\u0435 \u0431\u0443\u043C\u0430\u0433\u0438 \u043F\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0443 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432: \u0434\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B, \u043C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440\u044B, \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u0438 \u0442.\u0434.\n\n\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u043A\u0440\u0438\u043D\u0435\u0440\u043E\u0432 \u043F\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0439 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438\u0445 \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430."
      },
      single: {
        title: "\u0415\u0434\u0438\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438",
        description: "\u0412\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u043D\u0430 \u0435\u0434\u0438\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435! \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u043C \u0432\u0430\u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C, \u0441\u043A\u0440\u0438\u043D\u0435\u0440\u044B, \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043C\u044B\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438, \u0441\u0438\u0433\u043D\u0430\u043B\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432 \u0438 \u0432\u044B\u0431\u043E\u0440 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u043A\u0435\u0440\u0430."
      },
      analytics: {
        title: "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E \u0412\u0430\u0448\u0438\u043C \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F\u043C",
        description: "C\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0440\u0433\u043E\u0432. \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E, \u0434\u0430\u043D\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439."
      }
    }
  },
  fourth: {
    title: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    description: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F iOS \u0438 Android \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0432\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0435\u0434\u0438\u043D\u043E\u043C\u0443 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0443 \u0438\u0437 \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043C\u0438\u0440\u0430."
  },
  fifth: {
    description: "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2013 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u043D\u0430 \u0435\u0434\u0438\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0451 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432."
  }
};
var screener = {
  caption: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
  addFilter: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440",
  searchFilters: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C",
  add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
  nameCaption: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0421\u043A\u0440\u0438\u043D\u0435\u0440\u0430",
  typeName: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043A\u0440\u0438\u043D\u0435\u0440\u0430",
  results: "\u0438\u0437",
  save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  saveScrAsNew: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A \u043D\u043E\u0432\u044B\u0439 \u0441\u043A\u0440\u0438\u043D\u0435\u0440",
  saveScr: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043D\u0435\u0440",
  cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  isNonSelected: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0441\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430.",
  filters: {
    general: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435",
    statistics: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    fundamental: "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
    region: "\u0421\u0442\u0440\u0430\u043D\u0430",
    stockExchange: "\u0411\u0438\u0440\u0436\u0430",
    industry: "\u041E\u0442\u0440\u0430\u0441\u043B\u044C",
    sector: "\u0421\u0435\u043A\u0442\u043E\u0440",
    currency: "\u0412\u0430\u043B\u044E\u0442\u0430",
    volume: "\u041E\u0431\u044A\u0435\u043C",
    priceChangeOneD: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B 1\u0414",
    priceChangeOneW: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B 1\u041D",
    priceChangeOneM: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B 1M",
    priceChangeSixM: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B 6M",
    priceChangeOneY: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B 52 \u043D\u0435\u0434. (1 \u0433\u043E\u0434)",
    period: "\u041F\u0435\u0440\u0438\u043E\u0434",
    revenue: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430",
    netProfit: "\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C",
    ebitda: "EBITDA",
    operatingActivities: "\u0414\u0435\u043D\u044C\u0433\u0438 \u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    endOfThePeriod: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u043A\u043E\u043D\u0435\u0446 \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
    totalAssets: "\u0412\u0441\u0435\u0433\u043E \u0430\u043A\u0442\u0438\u0432\u043E\u0432",
    currentAssets: "\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B",
    nonCurrentAssets: "\u0412\u043D\u0435\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u043D\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B",
    totalLiabilities: "\u0412\u0441\u0435\u0433\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432",
    longDebt: "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u044B \u0438 \u0437\u0430\u0439\u043C\u044B",
    shortDebt: "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u044B \u0438 \u0437\u0430\u0439\u043C\u044B",
    totalEquity: "\u0412\u0441\u0435\u0433\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B"
  },
  default: "\u041E\u043F\u0446\u0438\u044F",
  currencies: {
    mlnRub: "\u041C\u043B\u043D. \u0440\u0443\u0431."
  },
  stockExchanges: {
    micex: "Micex"
  },
  regions: {
    russia: "\u0420\u043E\u0441\u0441\u0438\u044F"
  }
};
var brokers = {
  pageTitle: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u0438\u0439 \u0441\u0447\u0435\u0442 \u0432 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A, \u0412\u0422\u0411 \u0438 \u0410\u043B\u044C\u0444\u0430-\u0411\u0430\u043D\u043A\u0435",
  pageDescription: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E iFinik \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u044B\u0433\u043E\u0434\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u0438\u0439 \u0441\u0447\u0435\u0442 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0440\u044B\u043D\u043A\u0430, \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u0431\u0440\u043E\u043A\u0435\u0440, \u0412\u0422\u0411 \u0431\u0440\u043E\u043A\u0435\u0440, \u0410\u043B\u044C\u0444\u0430-\u0434\u0438\u0440\u0435\u043A\u0442 \u0438 \u0424\u0440\u0438\u0434\u043E\u043C \u0444\u0438\u043D\u0430\u043D\u0441.",
  header: "\u041D\u0430\u0448\u0438 \u0431\u0440\u043E\u043A\u0435\u0440\u044B",
  paragraphs: [
    {
      text: `iFinik Investments \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u043C \u043C\u0435\u0436\u0434\u0443 \u0431\u0440\u043E\u043A\u0435\u0440\u043E\u043C, \u0443\xA0\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u044B\xA0\u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0435 \u0441\u0447\u0435\u0442, \u0438\xA0\u043F\u0440\u0438\u0431\u044B\u043B\u044C\u044E, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B\xA0\u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u0441\xA0\u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432.`,
      class: "strong"
    },
    {
      text: `\u041D\u0430\u0448\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0431\u0443\u0434\u0443\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0441 \u043E\u0442\u043A\u0440\u043E\u0435\u0442
      \u0441\u0447\u0435\u0442 \u0443\xA0\u0431\u0440\u043E\u043A\u0435\u0440\u0430. \u0410\xA0\u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0434\u0430\u0436\u0435 \u043D\u0438\u0436\u0435, \u0447\u0435\u043C \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0441\u0447\u0435\u0442\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0443\xA0\u0431\u0440\u043E\u043A\u0435\u0440\u0430. \u0422\u0430\u043A \u043A\u0430\u043A \u0431\u0440\u043E\u043A\u0435\u0440\u044B \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0442 \u0434\u043B\u044F \u043D\u0430\u0441 \u043B\u044C\u0433\u043E\u0442\u043D\u044B\u0435 \u0442\u0430\u0440\u0438\u0444\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B.`,
      class: "strong"
    },
    { text: `\u041D\u0430\xA0\u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u044B\xA0\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u0441\xA0\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438:` }
  ],
  createAcc: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442",
  freedom: {
    name: "\u0424\u0440\u0438\u0434\u043E\u043C \u0424\u0438\u043D\u0430\u043D\u0441",
    strong: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432\xA0IPO!",
    normal: {
      first: "\u0422\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://www.ffin.ru",
    frameLink: "https://ffin.site/reg/?ref=pfu1115787"
  },
  otkr: {
    name: "\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0411\u0440\u043E\u043A\u0435\u0440",
    normal: {
      first: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://www.open-broker.ru",
    frameLink: "https://open-broker.ru/open-account/?aid=40439"
  },
  sber: {
    name: "\u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u0411\u0440\u043E\u043A\u0435\u0440",
    normal: {
      first: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://www.sberbank.ru",
    frameLink: "https://www.sberbank.ru"
  },
  alfa: {
    name: "\u0410\u043B\u044C\u0444\u0430-\u0414\u0438\u0440\u0435\u043A\u0442",
    normal: {
      first: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://www.alfadirect.ru",
    frameLink: "https://www.alfadirect.ru"
  },
  bks: {
    name: "\u0411\u041A\u0421 \u0411\u0440\u043E\u043A\u0435\u0440",
    normal: {
      first: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://www.broker.ru",
    frameLink: "https://www.broker.ru"
  },
  vtb: {
    name: "\u0412\u0422\u0411 \u0411\u0440\u043E\u043A\u0435\u0440",
    normal: {
      first: "\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043A\u0430\u043A \u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      second: " \u0442\u0430\u043A \u0438\xA0\u043D\u0430\xA0\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 iFinik Investments."
    },
    link: "https://broker.vtb.ru",
    frameLink: "https://broker.vtb.ru"
  }
};
var menu = {
  account,
  lp,
  screener,
  brokers,
  searchString: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u0430...",
  buttons: {
    signIn: "\u0412\u043E\u0439\u0442\u0438",
    registration: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
  },
  footerHeaders: {
    first: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    second: "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
    third: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
    fourth: "\u042F\u0437\u044B\u043A",
    five: "\u0421\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043D\u0430\u043C\u0438 \u0432:"
  },
  company: {
    name: "\u041E\u041E\u041E \xAB\u0410\u0439\u0424\u0438\u043D\u0438\u043A\xBB",
    address: "\u041F\u0440\u0435\u0447\u0438\u0441\u0442\u0435\u043D\u0441\u043A\u0430\u044F \u043D\u0430\u0431., 17, \u0411\u0426 \xAB\u0411\u0430\u0440\u043A\u043B\u0438 \u041F\u043B\u0430\u0437\u0430\xBB, \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F",
    tel: "\u0422\u0435\u043B.: +7 (499) 651-90-42"
  },
  responsibility: "\u041F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u043C\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u044B \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u043C\u0438, \u043E\u0434\u043D\u0430\u043A\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u041E\u041E\u041E \xAB\u0410\u0439\u0424\u0438\u043D\u0438\u043A\xBB \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0435 \u043D\u0435\u0441\u0451\u0442. \u041E\u041E\u041E \xAB\u0410\u0439\u0424\u0438\u043D\u0438\u043A\xBB \u0438 \u0435\u0451 \u0430\u0444\u0444\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043B\u0438\u0446\u0430 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043D\u0435 \u043D\u0435\u0441\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043F\u0440\u044F\u043C\u043E\u0439 \u0438\u043B\u0438 \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0439 \u0443\u0449\u0435\u0440\u0431, \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u0432\u0448\u0438\u0439 \u0432\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0437\u0430 \u0435\u0435 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C.",
  servicesLinks: {
    privacy: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    terms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
  },
  menuList: [
    {
      name: "\u0421 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C",
      path: "/easystart"
    },
    {
      name: "\u0420\u044B\u043D\u043A\u0438",
      sublist: [
        {
          name: "\u041E\u0431\u0437\u043E\u0440",
          path: "/markets"
        },
        {
          name: "\u0410\u043A\u0446\u0438\u0438",
          path: "/markets/stocks"
        }
      ]
    },
    {
      name: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      sublist: [
        {
          name: "\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          path: "/news"
        },
        {
          name: "\u041D\u043E\u0432\u043E\u0441\u0442\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430",
          path: "/news/feed/"
        }
      ]
    },
    {
      name: "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C",
      path: "/invest"
    },
    {
      name: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
      sublist: [
        {
          name: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",
          path: "/about"
        },
        {
          name: "\u041D\u0430\u0448\u0438 \u0431\u0440\u043E\u043A\u0435\u0440\u044B",
          path: "/brokers"
        },
        {
          name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
          path: "/contacts"
        }
      ]
    }
  ],
  informationList: [
    {
      name: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",
      path: "/about"
    },
    {
      name: "\u041D\u0430\u0448\u0438 \u0431\u0440\u043E\u043A\u0435\u0440\u044B",
      path: "/brokers"
    },
    {
      name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      path: "/contacts"
    },
    {
      name: "\u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C?",
      path: "/easystart"
    }
  ],
  navigationList: [
    {
      name: "\u0420\u044B\u043D\u043A\u0438",
      path: "/markets"
    },
    {
      name: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      path: "/news"
    }
  ],
  Downoloads: [
    {
      name: "iOS app",
      path: "",
      blank: true
    },
    {
      name: "Android app",
      path: "",
      blank: true
    }
  ],
  Auth: {
    caption: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0412\u0438\u0442-\u041A\u043E",
    text: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C, \u0442\u0430\u043A\u0438\u043C \u043A\u0430\u043A \u0441\u043F\u0438\u0441\u043A\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F, \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!",
    label: "\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? ",
    labelLink: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
    alternative: "\u0418\u043B\u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
    button: "\u0412\u043E\u0439\u0442\u0438",
    signinLink: "\u0432\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
    sms: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C sms \u043A\u043E\u0434",
    smsPlaceholder: "SMS \u043A\u043E\u0434",
    pswdPlaceholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
    newPswd: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    labelPswd: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
    tabs: [
      {
        name: "Phone",
        text: "\u041F\u043E \u043D\u043E\u043C\u0435\u0440\u0443"
      },
      {
        name: "Email",
        text: "\u041F\u043E email"
      }
    ]
  },
  Register: {
    enterCode: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434",
    caption: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u0412\u0438\u0442-\u041A\u043E",
    text: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C, \u0442\u0430\u043A\u0438\u043C \u043A\u0430\u043A \u0441\u043F\u0438\u0441\u043A\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F, \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!",
    label: "\u0412\u044B \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? ",
    labelLink: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
    alternative: "\u0418\u043B\u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
    linkGroup: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044F\u0441\u044C, \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435",
    linkTerms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    linkPrivacy: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    linkGroup2: "\u0438",
    button: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
    sms: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C sms \u043A\u043E\u0434",
    smsPlaceholder: "SMS \u043A\u043E\u0434",
    pswdPlaceholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
    tabs: [
      {
        name: "Phone",
        text: "\u041F\u043E \u043D\u043E\u043C\u0435\u0440\u0443"
      },
      {
        name: "Email",
        text: "\u041F\u043E \u043D\u043E\u043C\u0435\u0440\u0443"
      }
    ],
    successSms: "SMS \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  },
  Reset: {
    resetMsg: "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E \u0432\u0430\u043C \u043D\u0430 Email",
    caption: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    captionChange: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    button: "\u0421\u0431\u0440\u043E\u0441",
    changePass: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
  },
  Errors: {
    emailRequired: "Email \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D!",
    emailIncorect: "Email \u043D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439!",
    pswdRequired: "\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D!",
    pswdLength: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
    phoneInvalid: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435",
    codeError: "\u041A\u043E\u0434 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432!",
    registeredEmail: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0434\u0430\u043D\u043D\u044B\u043C e-mail \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 ",
    registeredPhone: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0434\u0430\u043D\u043D\u044B\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u043C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 "
  },
  personal: {
    account: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    name: "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F",
    firstName: "\u0418\u043C\u044F",
    lastName: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    email: "Email",
    creationTime: "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u0441 ",
    lastSignInTime: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
    registrationType: "\u0422\u0438\u043F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
    buttonOut: "\u0412\u044B\u0439\u0442\u0438",
    phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    birth: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
    location: "\u041B\u043E\u043A\u0430\u0446\u0438\u044F",
    about: "\u041E \u0441\u0435\u0431\u0435",
    caption: "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    subcaption: "\u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430",
    editBtn: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    saveBtn: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    menuProfile: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    menuSettings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    menuNotification: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    avatarChange: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
    avatarRemove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    errDate: "\u041F\u0430\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043C\u0435\u0441\u044F\u0446, \u0433\u043E\u0434 \u0438 \u0434\u0435\u043D\u044C"
  },
  acountMenu: {
    profile: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    notification: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
  },
  moreBtn: {
    share: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
    addBookmark: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"
  },
  MenuSecondary: {
    summary: "\u041E\u0431\u0437\u043E\u0440",
    financial: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438",
    news: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
  },
  chart: {
    title: "\u0413\u0440\u0430\u0444\u0438\u043A",
    marker: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0435",
    btnVolume: "\u041E\u0431\u044A\u0435\u043C",
    btnNews: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
    changes: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435"
  },
  dividends: {
    title: "\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B",
    marker: "Ex date - \u044D\u0442\u043E \u0434\u0430\u0442\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u043A\u0443\u043F\u0438\u0442\u044C \u0430\u043A\u0446\u0438\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B."
  },
  profile: {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    executives: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438",
    marker: "\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u0430\u0436\u043D\u044B\u0435 \u0444\u0430\u043A\u0442\u043E\u0440\u044B",
    structureTitle: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u0439",
    structureMarker: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438",
    labelSector: "\u0421\u0435\u043A\u0442\u043E\u0440",
    labelIndustry: "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F",
    labelEmployees: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
  },
  banner: {
    equity: "\u0410\u043A\u0446\u0438\u0438"
  },
  marketData: {
    title: "\u0420\u044B\u043D\u043E\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    PreviousClose: "\u0426\u0435\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F",
    Open: "\u0426\u0435\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F",
    DaysRange: "\u0414\u043D\u0435\u0432\u043D\u043E\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    WRange: "\u0413\u043E\u0434\u043E\u0432\u043E\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D (52w)"
  },
  prtflData: {
    title: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F",
    consensusPE: "\u041A\u043E\u043D\u0441\u0435\u043D\u0441\u0443\u0441 P/E \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C",
    consensusGrowth: "\u0420\u043E\u0441\u0442 \u043A\u043E\u043D\u0441\u0435\u043D\u0441\u0443\u0441\u0430 \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C",
    epsGrowth: "\u0420\u043E\u0441\u0442 EPS",
    dividendYield: "\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u043D\u0430\u044F \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C",
    volatility: "\u0412\u043E\u043B\u0430\u0442\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    betaTrend: "\u0411\u0435\u0442\u0430 \u0422\u0440\u0435\u043D\u0434"
  },
  financialTab: {
    title: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"
  },
  companyCard: {
    update: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
    btnWishlist: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C",
    btnAlert: "Create Price Alert"
  },
  companyInfo: {
    btnBuy: "\u041A\u0443\u043F\u0438\u0442\u044C",
    btnSell: "\u041F\u0440\u043E\u0434\u0430\u0442\u044C",
    closedMark: "\u0411\u0438\u0440\u0436\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0430. \u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ",
    dividendYield: "\u0414\u0438\u0432. \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C"
  },
  moreBtn: {
    share: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
    addBookmark: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"
  },
  policy: {
    header: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    description: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E IFinik \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u0441\u0431\u043E\u0440 \u043B\u0438\u0447\u043D\u043E\u0439 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438, \u0432 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u0435\u0451 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0439 \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u043D\u0430\u0448\u0435\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ifinik@ifinik.com",
    firstItem: {
      caption: "1. \u0422\u0415\u0420\u041C\u0418\u041D\u042B",
      items: [
        {
          item: "1.1. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u2013 \u0441\u0430\u0439\u0442, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 www.ifinik.com \u0438\u043B\u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u043E\u0435 \u0432 Appstore."
        },
        { item: "1.2. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u2014 \u043B\u0438\u0446\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0435\u0435 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443." },
        {
          item: "1.3. \u0417\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u2014 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438."
        },
        {
          item: "1.4. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u2014 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043E \u0441\u0435\u0431\u0435 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0438 \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B."
        },
        {
          item: "1.5. \u0414\u0430\u043D\u043D\u044B\u0435 \u2014 \u0438\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435 (\u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432 \u043F\u043E\u043D\u044F\u0442\u0438\u0435 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445)."
        }
      ]
    },
    secondItem: {
      caption: "2. \u041F\u041E\u0420\u042F\u0414\u041E\u041A \u041E\u0411\u0420\u0410\u0411\u041E\u0422\u041A\u0418 \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0418 \u0418\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425",
      items: [
        {
          item: "2.1. IFinik \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0417\u0430\u043A\u043E\u043D\u043E\u043C \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB \u2116 152-\u0424\u0417 \u043E\u0442 27 \u0438\u044E\u043B\u044F 2006 \u0433. \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 IFinik."
        },
        {
          item: "2.2. \u0412 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u043D\u044B\u0445 \u0414\u0430\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u0445 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0440\u043E\u043C\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438."
        },
        {
          item: "2.3. IFinik \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0414\u0430\u043D\u043D\u044B\u0445, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."
        },
        {
          item: "2.4. IFinik \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0414\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0431\u0435\u0437 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043B\u0438\u0446\u0430\u043C:"
        },
        {
          item: "2.4.1 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043E\u0440\u0433\u0430\u043D\u0430\u043C, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043E\u0440\u0433\u0430\u043D\u0430\u043C \u0434\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0438 \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F, \u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C \u043C\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u0445 \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443;"
        },
        { item: "2.4.2 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C IFinik;" },
        {
          item: "2.4.3 \u0432 \u0438\u043D\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u043F\u0440\u044F\u043C\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424."
        },
        {
          item: "2.5. IFinik \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0414\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C, \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u0432 \u043F. 3.4. \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445:"
        },
        { item: "2.5.1 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0440\u0430\u0437\u0438\u043B \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0442\u0430\u043A\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F;" },
        {
          item: "2.5.2 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438\u043B\u0438 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0423\u0441\u043B\u0443\u0433 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E;"
        },
        {
          item: "2.5.3 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 (\u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043B\u0438 \u0432 \u0447\u0430\u0441\u0442\u0438), \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043A \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u044E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044F\u0442 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438."
        },
        {
          item: "2.6. IFinik \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0414\u0430\u043D\u043D\u044B\u0445."
        }
      ]
    },
    thirdItem: {
      caption: "3. \u0418\u0417\u041C\u0415\u041D\u0415\u041D\u0418\u0415 \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425",
      items: [
        {
          item: "3.1. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C (\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C) \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u041B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043B\u0438\u0431\u043E \u043F\u0443\u0442\u0435\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F IFinik."
        },
        {
          item: "3.2. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435."
        },
        {
          item: "3.3. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043E \u0432\u0441\u0435 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C."
        }
      ]
    },
    fourthItem: {
      caption: "4. \u0417\u0410\u0429\u0418\u0422\u0410 \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425",
      items: [
        {
          item: "4.1. IFinik \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0443\u044E \u0437\u0430\u0449\u0438\u0442\u0443 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u0438\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0417\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0440\u044B \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."
        },
        {
          item: "4.2. \u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0435 \u043C\u0435\u0440\u044B \u0437\u0430\u0449\u0438\u0442\u044B \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u0438\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441 \u043D\u0438\u043C\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446."
        }
      ]
    },
    fifthItem: {
      caption: "5. \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0415 \u0414\u0410\u041D\u041D\u042B\u0415 \u0422\u0420\u0415\u0422\u042C\u0425 \u041B\u0418\u0426 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u0423\u0415\u041C\u042B\u0415 \u041F\u041E\u041B\u042C\u0417\u041E\u0412\u0410\u0422\u0415\u041B\u042F\u041C\u0418",
      items: [
        {
          item: "5.1. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0437\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 \u0434\u043B\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F."
        },
        {
          item: "5.2. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B."
        },
        {
          item: "5.3. IFinik \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 \u0437\u0430\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C."
        },
        {
          item: "5.4. IFinik \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043C\u0435\u0440\u044B \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0437\u0430\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C."
        }
      ]
    },
    sixthItem: {
      caption: "6. \u0418\u041D\u042B\u0415 \u041F\u041E\u041B\u041E\u0416\u0415\u041D\u0418\u042F",
      items: [
        {
          item: "6.1. \u041A \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C \u043C\u0435\u0436\u0434\u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0438 IFinik, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u043C \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0434\u043B\u0435\u0436\u0438\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u043F\u0440\u0430\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438."
        },
        {
          item: "6.2. \u0412\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0441\u043F\u043E\u0440\u044B, \u0432\u044B\u0442\u0435\u043A\u0430\u044E\u0449\u0438\u0435 \u0438\u0437 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u043E \u043C\u0435\u0441\u0442\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 IFinik.\u041F\u0435\u0440\u0435\u0434 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435\u043C \u0432 \u0441\u0443\u0434 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0431\u043B\u044E\u0441\u0442\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C IFinik \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044E \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435. \u0421\u0440\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0430 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044E \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 30 (\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C) \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439."
        },
        {
          item: "6.3. \u0415\u0441\u043B\u0438 \u043F\u043E \u0442\u0435\u043C \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u043E\u0434\u043D\u043E \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u044B \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u043C\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0438\u043B\u044B, \u044D\u0442\u043E \u043D\u0435 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u043B\u0438\u044F\u043D\u0438\u044F \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438."
        },
        {
          item: "6.4. IFinik \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 (\u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043B\u0438 \u0432 \u0447\u0430\u0441\u0442\u0438) \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0431\u0435\u0437 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C. \u0412\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0441\u0438\u043B\u0443 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435."
        },
        {
          item: "6.5. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0443\u0442\u0435\u043C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0435\u0439."
        }
      ]
    },
    seventhItem: {
      caption: "7. \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0410\u042F \u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F IFinik",
      items: [
        { item: "7.1. \u0422\u0435\u043B\u0435\u0444\u043E\u043D: +7 (499) 651-90-42" },
        { item: "7.2. E-mail: ifinik@ifinik.com" },
        {
          item: "7.3. \u0410\u0434\u0440\u0435\u0441: \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041F\u0440\u0435\u0447\u0438\u0441\u0442\u0435\u043D\u0441\u043A\u0430\u044F \u043D\u0430\u0431., 17, \u0414\u0426 \xABBarkley Plaza\xBB"
        }
      ]
    }
  },
  aboutPage: {
    title: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",
    description: [
      { text: "iFinik Investments - \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F." },
      {
        text: "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2013 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0443\u044E \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0451 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432."
      },
      {
        text: "\u0412\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439, \u043C\u043D\u043E\u0433\u043E\u043E\u0431\u0435\u0449\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2013 \u0443 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C. \u0412 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u2013 \u044D\u0442\u043E \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u044B\u0435, \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B, \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043A \u043E\u0441\u0432\u043E\u0435\u043D\u0438\u044E \u043D\u043E\u0432\u044B\u0445 \u0432\u0435\u0440\u0448\u0438\u043D."
      },
      {
        text: "\u0412 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0431\u0438\u0440\u0436\u0435\u0432\u043E\u0439 \u0440\u044B\u043D\u043E\u043A, \u043F\u043E \u0441\u0443\u0442\u0438, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u0438\u043C\u0435\u0435\u0442 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u044B \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0421\u0435\u0439\u0447\u0430\u0441 \u2013 \u0432\u0430\u0436\u043D\u043E \u0438\u0445 \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C. \u041E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u044B \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u044B \u2013 \u043E\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0444\u043E\u043D\u0434\u043E\u0432\u044B\u0439 \u0440\u044B\u043D\u043E\u043A. \u0414\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u2013 \u0441\u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E, \u043A\u0430\u043A \u0432 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435, \u0442\u0430\u043A \u0438 \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B!"
      }
    ],
    team: {
      caption: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430",
      persons: [
        {
          id: "AlexeyKleutin",
          name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u043B\u0435\u0443\u0442\u0438\u043D",
          position: "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
          info: [
            { text: "\u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0432 1984 \u0433\u043E\u0434\u0443." },
            {
              text: '\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0441\u0442 \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E, \u0438\u043C\u0435\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0439 \u0434\u0438\u043F\u043B\u043E\u043C \u043F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442" \u0438 \u0441\u0442\u0435\u043F\u0435\u043D\u044C EMBA. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0431\u043E\u043B\u0435\u0435 15 \u043B\u0435\u0442. \u041E\u043F\u044B\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u0436\u0435\u0432\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442. \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u043B \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0431\u043B\u043E\u043A\u043E\u043C (in-house) \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A, \u041C\u0438\u0440\u0430\u0442\u043E\u0440\u0433, \u0421\u0438\u043C\u043F\u043B. \u0418\u043C\u0435\u0435\u0442 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0435.'
            },
            {
              text: "\u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0438 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432."
            }
          ],
          shortInfo: [
            {
              text: '\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0441\u0442 \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E, \u0438\u043C\u0435\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0439 \u0434\u0438\u043F\u043B\u043E\u043C \u043F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442" \u0438 \u0441\u0442\u0435\u043F\u0435\u043D\u044C EMBA. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0431\u043E\u043B\u0435\u0435 15 \u043B\u0435\u0442. \u041E\u043F\u044B\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u0436\u0435\u0432\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442. \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u043B \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0431\u043B\u043E\u043A\u043E\u043C (in-house) \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A, \u041C\u0438\u0440\u0430\u0442\u043E\u0440\u0433, \u0421\u0438\u043C\u043F\u043B. \u0418\u043C\u0435\u0435\u0442 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0435.'
            },
            {
              text: "\u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0438 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432."
            }
          ]
        },
        {
          id: "AnnaAndronova",
          name: "\u0410\u043D\u043D\u0430 \u0410\u043D\u0434\u0440\u043E\u043D\u043E\u0432\u0430",
          position: "\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
          info: [
            {
              text: "\u0412\u044B\u0441\u0448\u0435\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0441\u0442\u0435\u043F\u0435\u043D\u044C \u041C\u0412\u0410. \u0411\u043E\u043B\u0435\u0435 15 \u043B\u0435\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430 \u0432 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0435 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438."
            }
          ],
          shortInfo: [
            {
              text: "\u0412\u044B\u0441\u0448\u0435\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0441\u0442\u0435\u043F\u0435\u043D\u044C \u041C\u0412\u0410. \u0411\u043E\u043B\u0435\u0435 15 \u043B\u0435\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430 \u0432 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0435 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438. \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u043D\u0430 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u0439 \u0431\u0438\u0440\u0436\u0435 \u0441 2015 \u0433\u043E\u0434\u0430."
            },
            {
              text: "\u0421\u043E-\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438 \u0438\u0434\u0435\u0439\u043D\u044B\u0439 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0438\u0442\u0435\u043B\u044C iFinik. \u0417\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u0438 PR."
            }
          ]
        },
        {
          id: "IvanKopylov",
          name: "\u0418\u0432\u0430\u043D \u041A\u043E\u043F\u044B\u043B\u043E\u0432",
          position: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A",
          info: [
            { text: "\u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0432 1992 \u0433\u043E\u0434\u0443." },
            {
              text: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440 \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0431\u043E\u043B\u0435\u0435 5 \u043B\u0435\u0442. \u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0439 \u044D\u043D\u0442\u0443\u0437\u0438\u0430\u0441\u0442 \u0441 2017 \u0433\u043E\u0434\u0430. \u0420\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u0411\u041A\u0421. \u041E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
            },
            {
              text: "\u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 QA \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0430."
            }
          ],
          shortInfo: [
            {
              text: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440 \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0431\u043E\u043B\u0435\u0435 5 \u043B\u0435\u0442. \u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0439 \u044D\u043D\u0442\u0443\u0437\u0438\u0430\u0441\u0442 \u0441 2017 \u0433\u043E\u0434\u0430. \u0420\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u0411\u041A\u0421. \u041E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
            },
            {
              text: "\u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 QA \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0430."
            }
          ]
        }
      ]
    }
  },
  newsPage: {
    showMore: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435...",
    relatedNews: "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
    emptyMsg: "\u041D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0435\u0442",
    mentionedCompanies: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044B\u0435 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435"
  },
  stocksPage: {
    topGainers: "\u0422\u043E\u043F \u0440\u043E\u0441\u0442\u0430 \u0434\u043D\u044F",
    topLoosers: "\u0422\u043E\u043F \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0434\u043D\u044F",
    page: "\u0421\u0442\u0440 .",
    ticker: "\u0422\u0438\u043A\u0435\u0440",
    change: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435",
    changePerc: "% \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435",
    price: "\u0426\u0435\u043D\u0430",
    company: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    prefShare: "\u0410\u043A\u0446\u0438\u0438 \u043F\u0440\u0438\u0432\u0438\u043B\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
    depoRec: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u0440\u0430\u0441\u043F\u0438\u0441\u043A\u0430"
  },
  prtflPage: {
    symbol: "\u0421\u0418\u041C\u0412\u041E\u041B",
    company: "\u041A\u041E\u041C\u041F\u0410\u041D\u0418\u042F",
    gty: "GTY",
    last_price: "\u041F\u041E\u0421\u041B. \u0426\u0415\u041D\u0410",
    mkt_value: "\u0417\u041D\u0410\u0427\u0415\u041D\u0418\u0415 MKT",
    total_gain: "\u041E\u0411\u0429. \u041F\u0420\u0418\u0411\u042B\u041B\u042C"
  },
  financialPage: {
    title: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438",
    querterly: "\u041A\u0432\u0430\u0440\u0442\u0430\u043B\u044C\u043D\u044B\u0439",
    annual: "\u0413\u043E\u0434\u043E\u0432\u043E\u0439",
    tableNote: "\u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430\u0445 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0440\u0443\u0431\u043B\u0435\u0439, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043D\u043E\u0435"
  },
  searchInput: {
    noRes: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0438\u043A\u0435\u0440\u0430."
  },
  partners: {
    caption: "iFinik Investments \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C"
  },
  AccountSettings: {
    title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430",
    phoneCaption: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    phoneSubcation: "\u0414\u043B\u044F \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439 \u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438",
    verificationBtn: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F",
    addBtn: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    emailCaption: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    emailSubcaption: "\u0414\u043B\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439, \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439, \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439 \u0438 \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
    passwordCaption: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u041F\u0430\u0440\u043E\u043B\u044C",
    passwordSubcaption: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B.",
    newPasswordLabel: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    hideLabel: "\u0421\u043A\u0440\u044B\u0442\u044C",
    confirmLabel: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    showLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",
    currentLabel: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    updatePasswordLabel: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    socialCaption: "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438",
    notConnected: "\u041D\u0435 \u0441\u0432\u044F\u0437\u0430\u043D",
    connected: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u043D",
    connectBtn: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C",
    removeBtn: "\u041E\u0442\u0432\u044F\u0437\u0430\u0442\u044C",
    deleteCaption: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0410\u043A\u0430\u0443\u043D\u0430\u0442",
    deleteSubcaption: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E\u043C\u0443 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044E \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.",
    deleteBtn: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
    cancelBtn: "\u041E\u0442\u043C\u0435\u043D\u0430",
    enterPassword: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
  },
  AccountNotification: {
    Notifications: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    Safety: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    notifedSession: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u0432\u0445\u043E\u0434\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
    notifiedLogin: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u0432\u0445\u043E\u0434\u0435",
    confirmSms: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u0445\u043E\u0434\u0430 \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u043C \u0421\u041C\u0421 \u043A\u043E\u0434\u043E\u043C",
    priceNotification: "\u0423\u0432\u043E\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0446\u0435\u043D\u044B",
    prefetNotifed: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u043F\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0446\u0435\u043D\u044B \u0430\u043A\u0442\u0438\u0432\u0430 \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E",
    notifedEmail: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435",
    notifedSms: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0421\u041C\u0421",
    notifedBrowser: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",
    Subscriptions: "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438",
    newsNotifed: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0430",
    weeklyDigest: "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0430\u0439\u0434\u0436\u0435\u0441\u0442 \u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435",
    Announcements: "\u0410\u043D\u043E\u043D\u0441\u044B"
  }
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<div class="${"auth-reset"}">${`<span class="${"block text-base font-semibold mt-0 mx-0 mb-5"}">${escape2(menu.Reset.caption)}</span>`}

  ${`<form class="${"flex flex-col gap-2 items-end"}"><input type="${"text"}" name="${"email"}" placeholder="${"Email"}" class="${"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none"}"${add_attribute("value", email, 1)}>
      <button type="${"submit"}" name="${"button"}" class="${"w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-blue-500 text-white rounded-sm"}">${escape2(menu.Reset.button)}</button>
      ${``}</form>`}
</div>`;
});
var css$b = {
  code: ".invalid.svelte-1gj4kbc{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity));font-size:.75rem;line-height:1rem;text-align:left;width:100%}",
  map: `{"version":3,"file":"AuthEmail.svelte","sources":["AuthEmail.svelte"],"sourcesContent":["<div class=\\"auth-email\\">\\n  {#if !isReset}\\n    <form method=\\"post\\" class=\\"flex flex-col gap-y-2 items-end\\" on:submit|preventDefault={login}>\\n      <input \\n            type=\\"text\\" \\n            name=\\"email\\"\\n            bind:value={email}\\n            placeholder=\\"Email\\"\\n            class=\\"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none\\" \\n            class:invalid={isReset}>\\n      <input \\n            type=\\"password\\" \\n            name=\\"password\\"\\n            minlength=\\"6\\"\\n            bind:value={password}\\n            placeholder={menu.Auth.pswdPlaceholder}\\n            class=\\"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none\\" \\n            class:invalid={isReset}>\\n      <div class=\\"w-full flex justify-end\\">\\n        <a href=\\"#\\" on:click={() => isReset = true}>{menu.Auth.labelPswd}</a>  \\n      </div>        \\n      <button type=\\"submit\\" name=\\"button\\" class=\\"w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm\\">\\n        {menu.Auth.button}\\n      </button>      \\n    </form>\\n  {:else}\\n    <ResetPswd />    \\n  {/if}\\n</div>\\n  \\n<script>\\nimport menu from '$lib/local/ru-RU';\\n\\nimport ResetPswd from \\"./ResetPswd.svelte\\";\\n\\nlet isReset = false;\\nlet email = \\"\\";\\nlet password = \\"\\";\\n\\nconst login = () => {\\n\\n};\\n<\/script>\\n  \\n<style lang=\\"postcss\\">.invalid{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity));font-size:.75rem;line-height:1rem;text-align:left;width:100%}</style>"],"names":[],"mappings":"AA4CsB,uBAAQ,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,UAAU,MAAM,CAAC,YAAY,IAAI,CAAC,WAAW,IAAI,CAAC,MAAM,IAAI,CAAC"}`
};
var AuthEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css$b);
  return `<div class="${"auth-email"}">${`<form method="${"post"}" class="${"flex flex-col gap-y-2 items-end"}"><input type="${"text"}" name="${"email"}" placeholder="${"Email"}" class="${[
    "w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none svelte-1gj4kbc",
    ""
  ].join(" ").trim()}"${add_attribute("value", email, 1)}>
      <input type="${"password"}" name="${"password"}" minlength="${"6"}"${add_attribute("placeholder", menu.Auth.pswdPlaceholder, 0)} class="${[
    "w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none svelte-1gj4kbc",
    ""
  ].join(" ").trim()}"${add_attribute("value", password, 1)}>
      <div class="${"w-full flex justify-end"}"><a href="${"#"}">${escape2(menu.Auth.labelPswd)}</a></div>        
      <button type="${"submit"}" name="${"button"}" class="${"w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm"}">${escape2(menu.Auth.button)}</button></form>`}
</div>`;
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var css$a = {
  code: ".marg-top.svelte-k3x4ga{margin-top:0}",
  map: `{"version":3,"file":"RegisterEmail.svelte","sources":["RegisterEmail.svelte"],"sourcesContent":["<div class=\\"auth-email\\">\\n  <form \\n        action=\\"index.html\\" \\n        method=\\"post\\"\\n        class=\\"flex flex-col gap-y-2 items-end\\" \\n        on:submit|preventDefault={registerUser}>\\n        {#if !isSendingCode}\\n          <input \\n            type=\\"text\\" \\n            name=\\"email\\"\\n            bind:value={email}\\n            placeholder=\\"Email\\" \\n            class=\\"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none\\">\\n          <input \\n            type=\\"password\\"\\n            name=\\"password\\"\\n            minlength=\\"6\\"\\n            bind:value={password}\\n            placeholder={menu.Register.pswdPlaceholder} \\n            class=\\"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none\\">\\n          <input \\n            type=\\"tel\\"\\n            name=\\"code\\"\\n            maxlength=\\"6\\"\\n            bind:value={code} \\n            placeholder={menu.Register.enterCode}\\n            class=\\"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none\\">\\n          <span class=\\"block w-full mt-2 mr-0 mb-0 -ml-1 text-gray-600 text-sm text-center\\" class:marg-top={isSendingCode}>\\n            {menu.Register.linkGroup}\\n            <a href=\\"#\\" class=\\"text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600\\">{menu.Register.linkTerms}</a>\\n            {menu.Register.linkGroup2}\\n            <a href=\\"#\\" class=\\"text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600\\">{menu.Register.linkPrivacy}</a>\\n          </span>  \\n        {/if}\\n        <button class=\\"w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm\\">\\n          {menu.Register.button}    \\n        </button>\\n  </form>\\n</div>\\n  \\n<script>\\nimport menu from '$lib/local/ru-RU';\\n\\nlet email = \\"\\";\\nlet password = \\"\\";\\nlet code = \\"\\";\\nlet isSendingCode = false;\\n\\nconst registerUser = () => {};\\n<\/script>\\n  \\n<style lang=\\"postcss\\">.marg-top{margin-top:0}</style>"],"names":[],"mappings":"AAmDsB,uBAAS,CAAC,WAAW,CAAC,CAAC"}`
};
var RegisterEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let code = "";
  $$result.css.add(css$a);
  return `<div class="${"auth-email"}"><form action="${"index.html"}" method="${"post"}" class="${"flex flex-col gap-y-2 items-end"}">${`<input type="${"text"}" name="${"email"}" placeholder="${"Email"}" class="${"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none"}"${add_attribute("value", email, 1)}>
          <input type="${"password"}" name="${"password"}" minlength="${"6"}"${add_attribute("placeholder", menu.Register.pswdPlaceholder, 0)} class="${"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none"}"${add_attribute("value", password, 1)}>
          <input type="${"tel"}" name="${"code"}" maxlength="${"6"}"${add_attribute("placeholder", menu.Register.enterCode, 0)} class="${"w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none"}"${add_attribute("value", code, 1)}>
          <span class="${[
    "block w-full mt-2 mr-0 mb-0 -ml-1 text-gray-600 text-sm text-center svelte-k3x4ga",
    ""
  ].join(" ").trim()}">${escape2(menu.Register.linkGroup)}
            <a href="${"#"}" class="${"text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600"}">${escape2(menu.Register.linkTerms)}</a>
            ${escape2(menu.Register.linkGroup2)}
            <a href="${"#"}" class="${"text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600"}">${escape2(menu.Register.linkPrivacy)}</a></span>`}
        <button class="${"w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm"}">${escape2(menu.Register.button)}</button></form>
</div>`;
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var google = "/_app/assets/icon-google.b9815458.svg";
var AuthGoogle1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="${"button"}" name="${"button"}" class="${"uppercase w-40 h-14 flex items-center justify-center font-bold border-0 mr-4 text-black bg-gray-100 hover:bg-gray-50 rounded-sm"}"><img${add_attribute("src", google, 0)} alt="${"Google"}" class="${"mr-5"}">
  Google
</button>`;
});
var urlFacebook = "https://www.facebook.com/v5.0/dialog/oauth";
var FacebookLogin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clientId } = $$props;
  let { state } = $$props;
  let { redirectUri } = $$props;
  let { responseType = void 0 } = $$props;
  let { scope = void 0 } = $$props;
  let { pollInterval = 500 } = $$props;
  const dispatch = createEventDispatcher();
  let interval = 0;
  let popupWindow;
  const convertQueryParams = (url) => {
    const query = url.substr(1);
    const result = {};
    query.split("&").forEach((param) => {
      const item = param.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  };
  const close = () => {
    if (interval) {
      window.clearInterval(interval);
      interval = null;
    }
    if (popupWindow) {
      popupWindow.close();
    }
  };
  const poll = () => {
    interval = window.setInterval(() => {
      try {
        if (!popupWindow || popupWindow.closed !== false) {
          close();
          dispatch("error", new Error("The popup was closed"));
          return;
        }
        if (popupWindow.location.href === urlFacebook || popupWindow.location.pathname === "blank") {
          return;
        }
        dispatch("success", convertQueryParams(popupWindow.location.search));
        close();
      } catch (error22) {
      }
    }, pollInterval);
  };
  const onLogin = () => {
    let urlParams = `client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}`;
    if (responseType) {
      urlParams += `&response_type=${responseType}`;
    }
    if (scope) {
      urlParams += `&scope=${scope}`;
    }
    popupWindow = window.open(`${urlFacebook}?${urlParams}`, "facebook-oauth", "");
    dispatch("request");
    poll();
  };
  if ($$props.clientId === void 0 && $$bindings.clientId && clientId !== void 0)
    $$bindings.clientId(clientId);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.redirectUri === void 0 && $$bindings.redirectUri && redirectUri !== void 0)
    $$bindings.redirectUri(redirectUri);
  if ($$props.responseType === void 0 && $$bindings.responseType && responseType !== void 0)
    $$bindings.responseType(responseType);
  if ($$props.scope === void 0 && $$bindings.scope && scope !== void 0)
    $$bindings.scope(scope);
  if ($$props.pollInterval === void 0 && $$bindings.pollInterval && pollInterval !== void 0)
    $$bindings.pollInterval(pollInterval);
  return `${slots.default ? slots.default({ onLogin }) : ``}`;
});
var fb = "/_app/assets/icon-fb.907f2d68.svg";
var AuthFacebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  $$unsubscribe_modal();
  return `${validate_component(FacebookLogin, "FacebookLogin").$$render($$result, {
    clientId: "2918569291764665",
    state: "1",
    redirectUri: "http://localhost:3000"
  }, {}, {
    default: ({ onLogin }) => `<button type="${"button"}" name="${"button"}" class="${"uppercase w-40 h-14 flex justify-center items-center font-bold border-0 mr-4 text-white bg-blue-800 hover:bg-blue-600 rounded-sm"}"><img${add_attribute("src", fb, 0)} alt="${"Facebook"}" class="${"mr-5"}">
    Facebook
  </button>`
  })}`;
});
var css$9 = {
  code: ".auth.svelte-hhr1oj{height:100%;left:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:20}.auth__wrap.svelte-hhr1oj{--tw-bg-opacity:1;--tw-bg-opacity:0.6;height:100%;overflow-y:auto;width:100%}.auth__inner.svelte-hhr1oj,.auth__wrap.svelte-hhr1oj{background-color:rgba(255,255,255,var(--tw-bg-opacity))}.auth__inner.svelte-hhr1oj{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-translate-x:-50%;--tw-translate-y:-50%;--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(75,85,99,var(--tw-text-opacity));flex-direction:column;left:50%;max-width:100%;padding:3rem 1.5rem 2.5rem;position:absolute;top:50%;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:468px}.auth__header.svelte-hhr1oj,.auth__inner.svelte-hhr1oj{display:flex}.auth__header.svelte-hhr1oj{align-items:center;justify-content:space-between;margin:0 0 .5rem}.auth__caption.svelte-hhr1oj{font-size:1.25rem;font-weight:700;line-height:1.75rem}.auth__text.svelte-hhr1oj{font-size:.875rem;line-height:1.25rem;margin:0 0 .5rem}.auth__forms.svelte-hhr1oj{margin:0 0 1.25rem}.auth__label.svelte-hhr1oj{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;margin:0 0 .5rem;text-align:center}.auth__group.svelte-hhr1oj{display:flex;flex-wrap:wrap;justify-content:center}.auth__reserve.svelte-hhr1oj{display:flex;flex-direction:column;margin:2.5rem 0 0}.auth__tab.svelte-hhr1oj{box-shadow:inset 0 -1px 0 #f2f4f6;display:flex;margin:0 0 1.5rem}.active-btn.svelte-hhr1oj{--tw-shadow:0px 0px 0px transparent,inset 0px -2px 0px #1b7afa;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}",
  map: `{"version":3,"file":"Auth.svelte","sources":["Auth.svelte"],"sourcesContent":["<div class=\\"auth\\" transition:fly={{ y:500, duration:500 }}>\\n  <div class=\\"auth__wrap backdrop-filter backdrop-blur-md\\">\\n    {#if $modal.event === 'signIn'}\\n      <div class=\\"auth__inner\\">\\n        <div class=\\"auth__header\\">\\n          <span class=\\"auth__caption\\">{menu.Auth.caption}</span>\\n          <!--<span class=\\"fas fa-times fa-2x cursor-pointer\\" on:click={() => $modal = {show:false, event:''}}></span>-->\\n        </div>\\n        <span class=\\"auth__text\\">{menu.Auth.text}</span>\\n        <div class=\\"auth__forms\\">\\n          <div class=\\"auth__tab\\">\\n            {#each menu.Auth.tabs as tab, id}\\n              <button \\n                  key={tab.name} \\n                  class=\\"w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0\\" \\n                  class:active-btn={currentTab === tab.name} \\n                  on:click={() => selectTab(tab.name)}>\\n                  {tab.text}\\n              </button>                    \\n            {/each}\\n          </div>\\n          <div class=\\"auth__tab-wrap\\">\\n            {#if currentTab === 'Email'}\\n              <AuthEmail />\\n            {:else}\\n              <AuthPhone />\\n            {/if}\\n          </div>\\n        </div>\\n        <span class=\\"auth__label\\" on:click={() => toggleAuth('register')}>{menu.Auth.label}<a href=\\"#\\" class=\\"auth__link\\">{menu.Auth.labelLink}</a></span>\\n        <div class=\\"auth__reserve\\">\\n          <span class=\\"auth__label\\">{menu.Auth.alternative}:</span>\\n          <div class=\\"auth__group\\">\\n            <AuthFacebook />\\n            <AuthGoogle />\\n          </div>\\n        </div>      \\n      </div>  \\n    {/if}\\n\\n    {#if $modal.event === 'register'}\\n      <div class=\\"auth__inner\\">\\n        <div class=\\"auth__header\\">\\n          <span class=\\"auth__caption\\">{menu.Register.caption}</span>\\n          <!--<span class=\\"fas fa-times fa-2x\\" on:click={() => $modal = {show:false, event:''}}></span>-->\\n        </div>\\n        <span class=\\"auth__text\\">{menu.Register.text}</span>\\n        <div class=\\"auth__forms\\">\\n          <div class=\\"auth__tab\\">\\n            {#each menu.Auth.tabs as tab, id}\\n              <button key={tab.name} \\n                  class=\\"w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0\\" \\n                  class:active-btn={currentTab === tab.name} \\n                  on:click={() => selectTab(tab.name)}>\\n                  {tab.text}\\n              </button>                    \\n            {/each}\\n          </div>\\n          <div class=\\"auth__tab-wrap\\">\\n            {#if currentTab === 'Email'}\\n              <RegisterEmail />\\n            {:else}\\n              <RegisterPhone />\\n            {/if}\\n          </div>\\n        </div>\\n        <span class=\\"auth__label\\" on:click={() => toggleAuth('signIn')}>{menu.Register.label}<a href=\\"#\\" class=\\"auth__link\\">{menu.Register.labelLink}</a></span>\\n        <div class=\\"auth__reserve\\">\\n          <span class=\\"auth__label\\">{menu.Register.alternative}:</span>\\n          <div class=\\"auth__group\\">\\n            <AuthFacebook />\\n            <AuthGoogle />\\n          </div>\\n        </div>      \\n      </div>  \\n    {/if}\\n  </div>\\n</div>\\n  \\n<script>\\nimport { fly } from 'svelte/transition';\\n\\nimport AuthEmail from './AuthEmail.svelte'\\nimport AuthPhone from './AuthPhone.svelte'\\nimport RegisterEmail from './RegisterEmail.svelte'\\nimport RegisterPhone from './RegisterPhone.svelte'\\nimport AuthGoogle from './AuthGoogle1.svelte'\\nimport AuthFacebook from './AuthFacebook.svelte'\\n\\nimport menu from '$lib/local/ru-RU';\\nimport { modal } from '../../routes/localStore';\\n\\nlet currentTab = 'Email';\\n\\nconst selectTab = (vl) => {\\n  currentTab = vl;\\n};\\nconst toggleAuth = (vl) => {\\n  $modal = {show: true, event: vl};\\n};\\n\\n$: console.log('modal: ', $modal);\\n$: console.log('currentTab: ', currentTab);\\n<\/script>\\n\\n<style lang=\\"postcss\\">.auth{height:100%;left:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:20}.auth__wrap{--tw-bg-opacity:1;--tw-bg-opacity:0.6;height:100%;overflow-y:auto;width:100%}.auth__inner,.auth__wrap{background-color:rgba(255,255,255,var(--tw-bg-opacity))}.auth__inner{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-translate-x:-50%;--tw-translate-y:-50%;--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:rgba(75,85,99,var(--tw-text-opacity));flex-direction:column;left:50%;max-width:100%;padding:3rem 1.5rem 2.5rem;position:absolute;top:50%;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:468px}.auth__header,.auth__inner{display:flex}.auth__header{align-items:center;justify-content:space-between;margin:0 0 .5rem}.auth__caption{font-size:1.25rem;font-weight:700;line-height:1.75rem}.auth__text{font-size:.875rem;line-height:1.25rem;margin:0 0 .5rem}.auth__forms{margin:0 0 1.25rem}.auth__label{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;margin:0 0 .5rem;text-align:center}.auth__group{display:flex;flex-wrap:wrap;justify-content:center}.auth__reserve{display:flex;flex-direction:column;margin:2.5rem 0 0}.auth__tab{box-shadow:inset 0 -1px 0 #f2f4f6;display:flex;margin:0 0 1.5rem}.btn{height:3rem;margin:0 .5rem .5rem;width:10rem}.active-btn{--tw-shadow:0px 0px 0px transparent,inset 0px -2px 0px #1b7afa;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}</style>"],"names":[],"mappings":"AAyGsB,mBAAK,CAAC,OAAO,IAAI,CAAC,KAAK,CAAC,CAAC,SAAS,MAAM,CAAC,SAAS,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC,QAAQ,EAAE,CAAC,yBAAW,CAAC,gBAAgB,CAAC,CAAC,gBAAgB,GAAG,CAAC,OAAO,IAAI,CAAC,WAAW,IAAI,CAAC,MAAM,IAAI,CAAC,0BAAY,CAAC,yBAAW,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,0BAAY,CAAC,iBAAiB,CAAC,CAAC,iBAAiB,CAAC,CAAC,YAAY,CAAC,CAAC,YAAY,CAAC,CAAC,YAAY,CAAC,CAAC,aAAa,CAAC,CAAC,aAAa,CAAC,CAAC,iBAAiB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,CAAC,CAAC,kBAAkB,CAAC,CAAC,YAAY,mDAAmD,CAAC,0BAA0B,KAAK,CAAC,2BAA2B,KAAK,CAAC,WAAW,IAAI,uBAAuB,CAAC,eAAe,CAAC,CAAC,IAAI,gBAAgB,CAAC,eAAe,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,MAAM,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,eAAe,MAAM,CAAC,KAAK,GAAG,CAAC,UAAU,IAAI,CAAC,QAAQ,IAAI,CAAC,MAAM,CAAC,MAAM,CAAC,SAAS,QAAQ,CAAC,IAAI,GAAG,CAAC,UAAU,WAAW,IAAI,gBAAgB,CAAC,CAAC,CAAC,WAAW,IAAI,gBAAgB,CAAC,CAAC,CAAC,OAAO,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,MAAM,KAAK,CAAC,2BAAa,CAAC,0BAAY,CAAC,QAAQ,IAAI,CAAC,2BAAa,CAAC,YAAY,MAAM,CAAC,gBAAgB,aAAa,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,4BAAc,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,yBAAW,CAAC,UAAU,OAAO,CAAC,YAAY,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,0BAAY,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,0BAAY,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,WAAW,MAAM,CAAC,0BAAY,CAAC,QAAQ,IAAI,CAAC,UAAU,IAAI,CAAC,gBAAgB,MAAM,CAAC,4BAAc,CAAC,QAAQ,IAAI,CAAC,eAAe,MAAM,CAAC,OAAO,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,wBAAU,CAAC,WAAW,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CAAC,QAAQ,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,AAAkD,yBAAW,CAAC,YAAY,kDAAkD,CAAC,WAAW,IAAI,uBAAuB,CAAC,eAAe,CAAC,CAAC,IAAI,gBAAgB,CAAC,eAAe,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC"}`
};
var Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  let currentTab = "Email";
  $$result.css.add(css$9);
  {
    console.log("modal: ", $modal);
  }
  {
    console.log("currentTab: ", currentTab);
  }
  $$unsubscribe_modal();
  return `<div class="${"auth svelte-hhr1oj"}"><div class="${"auth__wrap backdrop-filter backdrop-blur-md svelte-hhr1oj"}">${$modal.event === "signIn" ? `<div class="${"auth__inner svelte-hhr1oj"}"><div class="${"auth__header svelte-hhr1oj"}"><span class="${"auth__caption svelte-hhr1oj"}">${escape2(menu.Auth.caption)}</span>
          </div>
        <span class="${"auth__text svelte-hhr1oj"}">${escape2(menu.Auth.text)}</span>
        <div class="${"auth__forms svelte-hhr1oj"}"><div class="${"auth__tab svelte-hhr1oj"}">${each(menu.Auth.tabs, (tab, id) => `<button${add_attribute("key", tab.name, 0)} class="${[
    "w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0 svelte-hhr1oj",
    currentTab === tab.name ? "active-btn" : ""
  ].join(" ").trim()}">${escape2(tab.text)}
              </button>`)}</div>
          <div class="${"auth__tab-wrap"}">${`${validate_component(AuthEmail, "AuthEmail").$$render($$result, {}, {}, {})}`}</div></div>
        <span class="${"auth__label svelte-hhr1oj"}">${escape2(menu.Auth.label)}<a href="${"#"}" class="${"auth__link"}">${escape2(menu.Auth.labelLink)}</a></span>
        <div class="${"auth__reserve svelte-hhr1oj"}"><span class="${"auth__label svelte-hhr1oj"}">${escape2(menu.Auth.alternative)}:</span>
          <div class="${"auth__group svelte-hhr1oj"}">${validate_component(AuthFacebook, "AuthFacebook").$$render($$result, {}, {}, {})}
            ${validate_component(AuthGoogle1, "AuthGoogle").$$render($$result, {}, {}, {})}</div></div></div>` : ``}

    ${$modal.event === "register" ? `<div class="${"auth__inner svelte-hhr1oj"}"><div class="${"auth__header svelte-hhr1oj"}"><span class="${"auth__caption svelte-hhr1oj"}">${escape2(menu.Register.caption)}</span>
          </div>
        <span class="${"auth__text svelte-hhr1oj"}">${escape2(menu.Register.text)}</span>
        <div class="${"auth__forms svelte-hhr1oj"}"><div class="${"auth__tab svelte-hhr1oj"}">${each(menu.Auth.tabs, (tab, id) => `<button${add_attribute("key", tab.name, 0)} class="${[
    "w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0 svelte-hhr1oj",
    currentTab === tab.name ? "active-btn" : ""
  ].join(" ").trim()}">${escape2(tab.text)}
              </button>`)}</div>
          <div class="${"auth__tab-wrap"}">${`${validate_component(RegisterEmail, "RegisterEmail").$$render($$result, {}, {}, {})}`}</div></div>
        <span class="${"auth__label svelte-hhr1oj"}">${escape2(menu.Register.label)}<a href="${"#"}" class="${"auth__link"}">${escape2(menu.Register.labelLink)}</a></span>
        <div class="${"auth__reserve svelte-hhr1oj"}"><span class="${"auth__label svelte-hhr1oj"}">${escape2(menu.Register.alternative)}:</span>
          <div class="${"auth__group svelte-hhr1oj"}">${validate_component(AuthFacebook, "AuthFacebook").$$render($$result, {}, {}, {})}
            ${validate_component(AuthGoogle1, "AuthGoogle").$$render($$result, {}, {}, {})}</div></div></div>` : ``}</div>
</div>`;
});
var css$8 = {
  code: ".authBtn.svelte-1x8hplu{display:flex;font-size:.875rem;font-weight:400;line-height:1.25rem;max-width:100%}",
  map: `{"version":3,"file":"AuthBtnGroup.svelte","sources":["AuthBtnGroup.svelte"],"sourcesContent":["<div class=\\"authBtn\\">\\n  <button type=\\"button\\" name=\\"button\\" on:click={() => showModal('signIn')} class=\\"px-2 h-12 w-1/2 md:w-full hover:text-gray-400\\">\\n    <i>{ menu.buttons.signIn }</i>\\n  </button>\\n  <button type=\\"button\\" name=\\"button\\" on:click={() => showModal('register')} class=\\"px-2 h-12 w-1/2 md:w-full bg-purple-400 text-white hover:text-gray-200\\">\\n    <i>{ menu.buttons.registration }</i>\\n  </button>\\n\\n  {#if $modal.show}\\n    <Auth />\\n  {/if}\\n</div>\\n\\n<script>\\nimport menu from '$lib/local/ru-RU';\\nimport { modal } from '../routes/localStore';\\n\\nimport Auth from './Auth/Auth.svelte';\\n\\nlet params = {\\n  show: true,\\n  event: 'signIn'\\n}\\n\\nconst showModal = (vl) => {\\n  params.show = true;\\n  params.event = vl;      \\n};\\n\\n$: $modal = params;\\n<\/script>\\n\\n<style lang=\\"postcss\\">.authBtn{display:flex;font-size:.875rem;font-weight:400;line-height:1.25rem;max-width:100%}</style>"],"names":[],"mappings":"AAgCsB,uBAAQ,CAAC,QAAQ,IAAI,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,UAAU,IAAI,CAAC"}`
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  let params = { show: true, event: "signIn" };
  $$result.css.add(css$8);
  set_store_value(modal, $modal = params, $modal);
  $$unsubscribe_modal();
  return `<div class="${"authBtn svelte-1x8hplu"}"><button type="${"button"}" name="${"button"}" class="${"px-2 h-12 w-1/2 md:w-full hover:text-gray-400"}"><i>${escape2(menu.buttons.signIn)}</i></button>
  <button type="${"button"}" name="${"button"}" class="${"px-2 h-12 w-1/2 md:w-full bg-purple-400 text-white hover:text-gray-200"}"><i>${escape2(menu.buttons.registration)}</i></button>

  ${$modal.show ? `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}` : ``}
</div>`;
});
var css$7 = {
  code: '@media(min-width:1024px){.menu.svelte-kt53jy{width:auto}}.menu__wrap.svelte-kt53jy{background-color:transparent;display:flex;flex-shrink:0;height:auto;padding-left:.5rem;padding-right:.5rem;position:relative;top:auto;visibility:visible;width:auto}.menu__wrap-md.svelte-kt53jy{--tw-bg-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;background-color:rgba(255,255,255,var(--tw-bg-opacity));box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);flex-direction:column;overflow:auto;right:25%;width:75%;z-index:20}.menu__wrap-md.svelte-kt53jy,.shadow.svelte-kt53jy{height:calc(100vh - 44px);position:absolute;top:2.75rem}.shadow.svelte-kt53jy{--tw-bg-opacity:1;background-color:rgba(107,114,128,var(--tw-bg-opacity));left:75%;opacity:.3;width:25%;z-index:30}.menu__btn.svelte-kt53jy{position:absolute;right:.5rem;top:.75rem}.menu__list.svelte-kt53jy{list-style-type:none;position:relative}.menu__link.svelte-kt53jy{display:block;font-size:.875rem;font-weight:600;line-height:1.25rem;line-height:1;padding-left:.5rem;padding-right:.5rem}.menu__link.svelte-kt53jy:focus{outline:2px solid transparent;outline-offset:2px}.menu__sub_md.svelte-kt53jy{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity));flex-direction:column;height:auto;overflow:auto;padding-left:.5rem;width:auto;z-index:20}.menu__sub-link.svelte-kt53jy{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;padding-left:1rem;padding-right:1rem}.menu__sub-link.svelte-kt53jy:hover{--tw-text-opacity:1;color:rgba(167,139,250,var(--tw-text-opacity))}.menu__arrow.svelte-kt53jy{--tw-scale-y:1;--tw-rotate:90deg;--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity));content:"";position:absolute;right:1.25rem;top:1.25rem;transition-duration:.15s;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu__arrow.svelte-kt53jy,.menu__arrow-active.svelte-kt53jy{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.menu__arrow-active.svelte-kt53jy{--tw-scale-y:1;--tw-rotate:-90deg}@media(min-width:768px){.menu__list.svelte-kt53jy{display:flex}.menu__link.svelte-kt53jy{position:relative}.menu__sub.svelte-kt53jy{--tw-bg-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:auto;position:absolute;top:1.75rem;width:12rem}.menu__sub-list.svelte-kt53jy{align-items:flex-start;display:flex;flex-direction:column;padding-bottom:1rem;padding-top:1rem}.menu__sub-item.svelte-kt53jy{width:100%}.menu__sub-item.svelte-kt53jy:hover{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}}.link-active.svelte-kt53jy,.textDark.svelte-kt53jy{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.themeDark.svelte-kt53jy{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}',
  map: `{"version":3,"file":"Menu.svelte","sources":["Menu.svelte"],"sourcesContent":["<svelte:window bind:innerWidth={ widthWin } />\\n\\n<div class=\\"menu\\">\\n  <div class=\\" menu__btn md:hidden\\">\\n    {#if isActiveMenu}\\n      <label for=\\"menu-toggle\\" class=\\"cursor-pointer fas fa-times\\" in:fade></label>\\n    {:else}\\n      <label for=\\"menu-toggle\\" class=\\"cursor-pointer fas fa-bars\\" in:fade></label>    \\n    {/if}\\n    <input id=\\"menu-toggle\\" type=\\"checkbox\\" bind:checked={isActiveMenu} class=\\"hidden\\" />\\n  </div>\\n\\n  {#if widthWin <= 768}\\n    {#if isActiveMenu}\\n      <nav class=\\"menu__wrap-md\\" transition:fly={{ x:-200, duration:500 }} class:themeDark={ $theme }>\\n        <div class=\\"mt-1 border-b border-solid border-gray-100\\">\\n          {#if isLogin}\\n            <Account />\\n          {:else}\\n            <AuthBtnGroup />\\n          {/if}\\n        </div>\\n        <ul class=\\"menu__list\\">\\n          {#each menuList as items, id}\\n            <li key={id} \\n                on:click={() => toggleVisited(id)} class:link-active={!$theme && keyList === id} class:textDark={$theme && keyList === id} \\n                class=\\"relative flex h-16 px-2 border-b border-solid border-gray-100 items-center\\">\\n              <button class=\\"text-sm font-semibold text-gray-400 hover:text-purple-400 focus:outline-none\\" on:click={ navigateTo(items.path) }>\\n                <i>{ items.name }</i>\\n              </button>\\n              {#if items.sublist}\\n                <span on:click={ () => {if (items.sublist) {isActiveSubMenu = !isActiveSubMenu; keySubMenuList = id;}} } \\n                    class=\\"menu__arrow\\" \\n                    class:menu__arrow-active={ isActiveSubMenu &&  keySubMenuList === id}>\\n                  <i class=\\"fas fa-chevron-right\\"></i>\\n                </span>\\n              {/if}\\n              \\n            </li>\\n            {#if isActiveSubMenu && keySubMenuList === id}\\n              <nav class=\\"menu__sub_md\\" class:themeDark={ $theme }>\\n                <ul class=\\"menu__sub-list_md\\">\\n                  {#each items.sublist as subitem, id}\\n                    <li on:click={() => {isActiveMenu = false; isActiveSubMenu = false;}}\\n                    class=\\"flex items-center hover:bg-gray-100 h-16\\" key={id}>\\n                      <a href={ subitem.path } class=\\"menu__sub-link text-gray-400\\" class:textDark={ $theme }>\\n                        <i>{ subitem.name }</i>\\n                      </a>\\n                    </li>\\n                  {/each}\\n                </ul>\\n              </nav>\\n            {/if}\\n          {/each}\\n        </ul>\\n      </nav>\\n      <span class=\\"shadow\\" transition:fly={{ x:200, duration:500 }}></span>\\n    {/if}\\n  {:else}\\n    <nav class=\\"menu__wrap\\">\\n      <ul class=\\"menu__list\\">\\n        {#each menuList as items, id}\\n          <li  \\n              key={id} \\n              on:click={() => toggleVisited(id)} class:link-active={!$theme && keyList === id}\\n              on:mouseover={() => {isActiveSubMenu = items.sublist ? true : false; keySubMenuList = id;}}\\n              use:clickOutside={() => {isActiveSubMenu = false; keySubMenuList = undefined; keyList = undefined;}} \\n              class=\\"menu__item\\" \\n              class:textDark={$theme && keyList === id}>\\n            <button class=\\"menu__link\\" on:click={ navigateTo(items.path) }>\\n              <i>{ items.name }</i>\\n            </button>\\n            {#if isActiveSubMenu && keySubMenuList === id}\\n              <nav class=\\"menu__sub\\" class:themeDark={ $theme }>\\n                <ul class=\\"menu__sub-list\\">\\n                  {#each items.sublist as subitem, id}\\n                    <li class=\\"menu__sub-item\\" key={id}>\\n                      <a href={ subitem.path } class=\\"menu__sub-link\\" class:textDark={ $theme }>\\n                        <i>{ subitem.name }</i>\\n                      </a>\\n                    </li>\\n                  {/each}\\n                </ul>\\n              </nav>\\n            {/if}\\n          </li>\\n        {/each}\\n      </ul>\\n    </nav>\\n  {/if}    \\n</div>\\n\\n<script>\\nimport { theme } from '../routes/store';\\nimport { fade, fly } from 'svelte/transition';\\nimport { onMount } from 'svelte';\\nimport { clickOutside } from 'svelte-use-click-outside';\\nimport menu from '$lib/local/ru-RU';  \\nimport Account from '../components/Account.svelte';\\nimport AuthBtnGroup from '../components/AuthBtnGroup.svelte';\\n\\nexport let isActiveMenu = false;\\n\\nlet menuList = [];\\nlet isActiveSubMenu = false;\\nlet isVisited = false;\\nlet keyList;\\nlet keySubMenuList;\\nlet widthWin;\\nlet isLogin = false;\\n\\nconst toggleVisited = (id) => {\\n  keyList = id;\\n  if (!isVisited) isVisited = true;\\n  console.log('key: ',keyList);\\n};\\n\\nconst getMenuData = () => {\\n  menuList = menu.menuList;\\n};\\n\\nconst navigateTo = (path) => {\\n  if (path) {\\n    console.log('path: ', path);\\n  } else {\\n    return;\\n  }\\n};\\n\\nonMount(() => getMenuData());\\n\\n$: console.log('isActiveMenu: ', isActiveMenu);\\n$: console.log('isActiveSubMenu: ', isActiveSubMenu);\\n<\/script>\\n\\n<style lang=\\"postcss\\">@media (min-width:1024px){.menu{width:auto}}.menu__wrap{background-color:transparent;display:flex;flex-shrink:0;height:auto;padding-left:.5rem;padding-right:.5rem;position:relative;top:auto;visibility:visible;width:auto}.menu__wrap-md{--tw-bg-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;background-color:rgba(255,255,255,var(--tw-bg-opacity));box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);flex-direction:column;overflow:auto;right:25%;width:75%;z-index:20}.menu__wrap-md,.shadow{height:calc(100vh - 44px);position:absolute;top:2.75rem}.shadow{--tw-bg-opacity:1;background-color:rgba(107,114,128,var(--tw-bg-opacity));left:75%;opacity:.3;width:25%;z-index:30}.menu__btn{position:absolute;right:.5rem;top:.75rem}.menu__list{list-style-type:none;position:relative}.menu__link{display:block;font-size:.875rem;font-weight:600;line-height:1.25rem;line-height:1;padding-left:.5rem;padding-right:.5rem}.menu__link:focus{outline:2px solid transparent;outline-offset:2px}.menu__sub_md{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity));flex-direction:column;height:auto;overflow:auto;padding-left:.5rem;width:auto;z-index:20}.menu__sub-link{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;padding-left:1rem;padding-right:1rem}.menu__sub-link:hover{--tw-text-opacity:1;color:rgba(167,139,250,var(--tw-text-opacity))}.menu__arrow{--tw-scale-y:1;--tw-rotate:90deg;--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity));content:\\"\\";position:absolute;right:1.25rem;top:1.25rem;transition-duration:.15s;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu__arrow,.menu__arrow-active{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.menu__arrow-active{--tw-scale-y:1;--tw-rotate:-90deg}@media (min-width:768px){.menu__list{display:flex}.menu__link{position:relative}.menu__sub{--tw-bg-opacity:1;--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:auto;position:absolute;top:1.75rem;width:12rem}.menu__sub-list{align-items:flex-start;display:flex;flex-direction:column;padding-bottom:1rem;padding-top:1rem}.menu__sub-item{width:100%}.menu__sub-item:hover{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.active{--tw-shadow:0px 2px 4px rgba(0,0,0,0.08),inset 0px 4px 0px #333;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:block;left:0}}.link-active,.textDark{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.themeDark{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}</style>"],"names":[],"mappings":"AAuIsB,MAAM,AAAC,WAAW,MAAM,CAAC,CAAC,mBAAK,CAAC,MAAM,IAAI,CAAC,CAAC,yBAAW,CAAC,iBAAiB,WAAW,CAAC,QAAQ,IAAI,CAAC,YAAY,CAAC,CAAC,OAAO,IAAI,CAAC,aAAa,KAAK,CAAC,cAAc,KAAK,CAAC,SAAS,QAAQ,CAAC,IAAI,IAAI,CAAC,WAAW,OAAO,CAAC,MAAM,IAAI,CAAC,4BAAc,CAAC,gBAAgB,CAAC,CAAC,YAAY,mDAAmD,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,WAAW,IAAI,uBAAuB,CAAC,eAAe,CAAC,CAAC,IAAI,gBAAgB,CAAC,eAAe,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,eAAe,MAAM,CAAC,SAAS,IAAI,CAAC,MAAM,GAAG,CAAC,MAAM,GAAG,CAAC,QAAQ,EAAE,CAAC,4BAAc,CAAC,qBAAO,CAAC,OAAO,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,SAAS,QAAQ,CAAC,IAAI,OAAO,CAAC,qBAAO,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,KAAK,GAAG,CAAC,QAAQ,EAAE,CAAC,MAAM,GAAG,CAAC,QAAQ,EAAE,CAAC,wBAAU,CAAC,SAAS,QAAQ,CAAC,MAAM,KAAK,CAAC,IAAI,MAAM,CAAC,yBAAW,CAAC,gBAAgB,IAAI,CAAC,SAAS,QAAQ,CAAC,yBAAW,CAAC,QAAQ,KAAK,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,YAAY,CAAC,CAAC,aAAa,KAAK,CAAC,cAAc,KAAK,CAAC,yBAAW,MAAM,CAAC,QAAQ,GAAG,CAAC,KAAK,CAAC,WAAW,CAAC,eAAe,GAAG,CAAC,2BAAa,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,eAAe,MAAM,CAAC,OAAO,IAAI,CAAC,SAAS,IAAI,CAAC,aAAa,KAAK,CAAC,MAAM,IAAI,CAAC,QAAQ,EAAE,CAAC,6BAAe,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,aAAa,IAAI,CAAC,cAAc,IAAI,CAAC,6BAAe,MAAM,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,0BAAY,CAAC,aAAa,CAAC,CAAC,YAAY,KAAK,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC,SAAS,QAAQ,CAAC,MAAM,OAAO,CAAC,IAAI,OAAO,CAAC,oBAAoB,IAAI,CAAC,oBAAoB,GAAG,CAAC,oBAAoB,SAAS,CAAC,2BAA2B,aAAa,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,0BAAY,CAAC,iCAAmB,CAAC,iBAAiB,CAAC,CAAC,iBAAiB,CAAC,CAAC,YAAY,CAAC,CAAC,YAAY,CAAC,CAAC,YAAY,CAAC,CAAC,aAAa,CAAC,CAAC,UAAU,WAAW,IAAI,gBAAgB,CAAC,CAAC,CAAC,WAAW,IAAI,gBAAgB,CAAC,CAAC,CAAC,OAAO,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,iCAAmB,CAAC,aAAa,CAAC,CAAC,YAAY,MAAM,CAAC,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,yBAAW,CAAC,QAAQ,IAAI,CAAC,yBAAW,CAAC,SAAS,QAAQ,CAAC,wBAAU,CAAC,gBAAgB,CAAC,CAAC,YAAY,mDAAmD,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,0BAA0B,KAAK,CAAC,2BAA2B,KAAK,CAAC,WAAW,IAAI,uBAAuB,CAAC,eAAe,CAAC,CAAC,IAAI,gBAAgB,CAAC,eAAe,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,OAAO,IAAI,CAAC,SAAS,QAAQ,CAAC,IAAI,OAAO,CAAC,MAAM,KAAK,CAAC,6BAAe,CAAC,YAAY,UAAU,CAAC,QAAQ,IAAI,CAAC,eAAe,MAAM,CAAC,eAAe,IAAI,CAAC,YAAY,IAAI,CAAC,6BAAe,CAAC,MAAM,IAAI,CAAC,6BAAe,MAAM,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,AAA4M,CAAC,0BAAY,CAAC,uBAAS,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,wBAAU,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC"}`
};
var Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { isActiveMenu = false } = $$props;
  let menuList = [];
  let isActiveSubMenu = false;
  let keyList;
  const getMenuData = () => {
    menuList = menu.menuList;
  };
  onMount(() => getMenuData());
  if ($$props.isActiveMenu === void 0 && $$bindings.isActiveMenu && isActiveMenu !== void 0)
    $$bindings.isActiveMenu(isActiveMenu);
  $$result.css.add(css$7);
  {
    console.log("isActiveMenu: ", isActiveMenu);
  }
  {
    console.log("isActiveSubMenu: ", isActiveSubMenu);
  }
  $$unsubscribe_theme();
  return `

<div class="${"menu svelte-kt53jy"}"><div class="${" menu__btn md:hidden svelte-kt53jy"}">${isActiveMenu ? `<label for="${"menu-toggle"}" class="${"cursor-pointer fas fa-times"}"></label>` : `<label for="${"menu-toggle"}" class="${"cursor-pointer fas fa-bars"}"></label>`}
    <input id="${"menu-toggle"}" type="${"checkbox"}" class="${"hidden"}"${add_attribute("checked", isActiveMenu, 1)}></div>

  ${`<nav class="${"menu__wrap svelte-kt53jy"}"><ul class="${"menu__list svelte-kt53jy"}">${each(menuList, (items, id) => `<li${add_attribute("key", id, 0)} class="${[
    "menu__item svelte-kt53jy",
    (!$theme && keyList === id ? "link-active" : "") + " " + ($theme && keyList === id ? "textDark" : "")
  ].join(" ").trim()}"><button class="${"menu__link svelte-kt53jy"}"><i>${escape2(items.name)}</i></button>
            ${``}
          </li>`)}</ul></nav>`}    
</div>`;
});
var css$6 = {
  code: ".btnDark.svelte-173cewz{cursor:pointer;margin-bottom:.5rem;margin-top:.5rem;outline:2px solid transparent;outline-offset:2px;padding:.25rem .5rem}",
  map: `{"version":3,"file":"ToggleTheme.svelte","sources":["ToggleTheme.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { theme } from '../routes/store';\\n\\n  let isDark = false;\\n\\n  $: $theme = isDark;\\n\\n  const toggleTheme = () => {\\n    isDark = !isDark;\\n    document.querySelector('html').classList.toggle('dark', isDark);\\n  }\\n\\n  onMount(() => {\\n    if (!$theme ) {   \\n      document.querySelector('html').classList.add('light');\\n    }\\n  })\\n  <\/script>\\n  \\n  <button on:click={ toggleTheme } class=\\"btnDark\\">\\n    {#if !$theme }\\n      <i class=\\"far fa-moon\\"></i>\\n    {:else}\\n      <i class=\\"far fa-sun\\"></i>\\n    {/if}\\n  </button>\\n\\n  <style lang=\\"postcss\\">.btnDark{cursor:pointer;margin-bottom:.5rem;margin-top:.5rem;outline:2px solid transparent;outline-offset:2px;padding:.25rem .5rem}</style>"],"names":[],"mappings":"AA4BwB,uBAAQ,CAAC,OAAO,OAAO,CAAC,cAAc,KAAK,CAAC,WAAW,KAAK,CAAC,QAAQ,GAAG,CAAC,KAAK,CAAC,WAAW,CAAC,eAAe,GAAG,CAAC,QAAQ,MAAM,CAAC,KAAK,CAAC"}`
};
var ToggleTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let isDark = false;
  onMount(() => {
    if (!$theme) {
      document.querySelector("html").classList.add("light");
    }
  });
  $$result.css.add(css$6);
  set_store_value(theme, $theme = isDark, $theme);
  $$unsubscribe_theme();
  return `<button class="${"btnDark svelte-173cewz"}">${!$theme ? `<i class="${"far fa-moon"}"></i>` : `<i class="${"far fa-sun"}"></i>`}
  </button>`;
});
var css$5 = {
  code: ".search.svelte-ttsnoy{flex:1 1 0%;height:2rem;margin-right:.5rem;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;position:absolute;right:.5rem;top:.75rem}@media(min-width:768px){.search.svelte-ttsnoy{max-width:36rem;position:static}}.search__input.svelte-ttsnoy{background-color:transparent;font-size:.875rem;font-weight:400;line-height:1.25rem;width:100%}.search__form.svelte-ttsnoy{border-style:none;display:flex;padding-left:1rem;padding-right:1rem}@media(min-width:768px){.search__form.svelte-ttsnoy{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity));border-radius:.5rem;border-style:solid;border-width:1px;justify-content:flex-start}}",
  map: `{"version":3,"file":"Search.svelte","sources":["Search.svelte"],"sourcesContent":["<div class=\\"search\\" class:active-input={ searchValue || isFocus } on:click|stopPropagation use:clickOutside={closeSearchList}>\\n  <div class=\\"search__form\\">\\n    <span on:click={showMobileInput} class=\\"search__icon\\">\\n      <i class=\\"fas fa-search mr-3\\"></i>\\n    </span>\\n    <input type=\\"text\\" placeholder={menu.searchString} on:focus={() => {isFocus = true;}} on:input={loadCompanies()} class=\\"search__input\\" />\\n  </div>\\n  <!--{#if isFocus && searchQuery && !isLoading}\\n    <div class=\\"search__list pt-3\\" use:clickOutside={closeSearchList}>\\n      {#if companiesRes.length > 0 && searchQuery}\\n        <span class=\\"search__header-results\\">{ resHeader }</span>\\n      {/if}\\n      {#if companiesRes.length === 0 && searchQuery && !isLoading}\\n        <p class=\\"search-list__no-res pl-4\\">\\n          { $t(\\"searchInput.noRes\\") }\\n        </p>\\n      {/if}\\n      {#each companiesRes as el,index}\\n        <ul :key=\\"el.id\\" class=\\"search-list\\">\\n          <li on:click={navigateToInstrument(el.code)} on:mouseenter={el.isHover = true} on:mouseleave={el.isHover = false} class=\\"search-list__item\\">\\n            <div class=\\"row align-items-center ml-0\\">\\n              <img src={minFileName(el.logo, 'T')} class=\\"search-list__logo\\"/>\\n              <p class:blue-text={el.isHover } class=\\"search-list__ticker\\">\\n                { el.tiker }\\n              </p>\\n              <span class:blue-text={el.isHover } class=\\"search-list__company-name\\">\\n                { el.name }\\n              </span>\\n            </div>\\n            <span class=\\"search-list__kind-stocks\\">\\n              { kindStocks(index) }\\n            </span>\\n          </li>\\n        </ul> \\n      {/each}      \\n    </div>  \\n  {/if}-->  \\n</div>\\n\\n  <script>\\n  import { clickOutside } from 'svelte-use-click-outside';\\n  import menu from '$lib/local/ru-RU';\\n\\n  let isFocus = false;\\n  let isLoading = false;\\n  let searchValue = '';\\n  let searchQuery = '';\\n  let companiesRes = [];\\n  \\n  const closeSearchList = () => {\\n    // handler logic\\n  };\\n\\n  const showMobileInput = (e) => {\\n      e.target.nextElementSibling.classList.toggle(\\"is-active\\");\\n  };\\n\\n  const loadCompanies = (e) => {\\n    /*searchQuery = e.target.value;\\n    if (!searchQuery) {\\n      companiesRes = [];\\n    };\\n    isLoading = true;\\n    $api.get('/company/search', {q: searchQuery})\\n    .then(data => {\\n      isLoading = false;\\n      companiesRes = data.data;\\n    })\\n    .catch(err => {\\n        isLoading = false;\\n    });*/\\n  };\\n  <\/script>\\n\\n  <style lang=\\"postcss\\">.search{flex:1 1 0%;height:2rem;margin-right:.5rem;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;position:absolute;right:.5rem;top:.75rem}@media (min-width:768px){.search{max-width:36rem;position:static}}.search__input{background-color:transparent;font-size:.875rem;font-weight:400;line-height:1.25rem;width:100%}.search__form{border-style:none;display:flex;padding-left:1rem;padding-right:1rem}@media (min-width:768px){.search__form{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity));border-radius:.5rem;border-style:solid;border-width:1px;justify-content:flex-start}}</style>"],"names":[],"mappings":"AA0EwB,qBAAO,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,OAAO,IAAI,CAAC,aAAa,KAAK,CAAC,UAAU,mBAAmB,CAAC,UAAU,gBAAgB,CAAC,UAAU,WAAW,CAAC,SAAS,QAAQ,CAAC,MAAM,KAAK,CAAC,IAAI,MAAM,CAAC,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,qBAAO,CAAC,UAAU,KAAK,CAAC,SAAS,MAAM,CAAC,CAAC,4BAAc,CAAC,iBAAiB,WAAW,CAAC,UAAU,OAAO,CAAC,YAAY,GAAG,CAAC,YAAY,OAAO,CAAC,MAAM,IAAI,CAAC,2BAAa,CAAC,aAAa,IAAI,CAAC,QAAQ,IAAI,CAAC,aAAa,IAAI,CAAC,cAAc,IAAI,CAAC,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,2BAAa,CAAC,oBAAoB,CAAC,CAAC,aAAa,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAAC,cAAc,KAAK,CAAC,aAAa,KAAK,CAAC,aAAa,GAAG,CAAC,gBAAgB,UAAU,CAAC,CAAC"}`
};
var Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${["search svelte-ttsnoy", ""].join(" ").trim()}"><div class="${"search__form svelte-ttsnoy"}"><span class="${"search__icon"}"><i class="${"fas fa-search mr-3"}"></i></span>
    <input type="${"text"}"${add_attribute("placeholder", menu.searchString, 0)} class="${"search__input svelte-ttsnoy"}"></div>
    
</div>`;
});
var css$4 = {
  code: ".header__logo.svelte-16frv7r{display:flex;flex-shrink:0;left:.5rem;position:absolute}@media(min-width:768px){.header__logo.svelte-16frv7r{position:static}}.themeDark.svelte-16frv7r{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.textDark.svelte-16frv7r{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<svelte:window bind:innerWidth={ widthWin } />\\n\\n<header class=\\"header\\" class:themeDark={ $theme }>\\n  <div class=\\"container-no-height\\">\\n    <div class=\\"relative flex justify-between items-center h-12\\">  \\n      <a href=\\"/\\" class=\\"header__logo\\">\\n        <i class=\\"fab fa-accusoft fa-2x mr-2 text-purple-500\\"></i>   \\n        <div class=\\"grid gap-0 text-gray-600\\" class:textDark={$theme}>\\n          <i class=\\"font-bold text-lg leading-none\\">\u0412\u0438\u0442-\u041A\u043E</i>\\n          <i class=\\"font-semibold text-xs leading-none\\">\u043A\u0440\u043E\u0432\u043B\u044F \u0438 \u0441\u0442\u0440\u043E\u0439\u043A\u0430</i>\\n        </div>\\n      </a>\\n      <Menu />\\n      {#if isSearch}\\n        <Search />        \\n      {/if}\\n      {#if widthWin > 768}\\n        {#if !!isLogin}\\n          <Account />\\n        {:else}\\n          <AuthBtnGroup />\\n        {/if}       \\n      {/if}\\n      <div class=\\"invisible md:visible\\">\\n        <DarkModeSwitcher />\\n      </div>\\n    </div>\\n  </div>\\n</header>\\n\\n<script>\\n  import { theme } from '../routes/store';  \\n  import Account from '../components/Account.svelte';\\n  import AuthBtnGroup from '../components/AuthBtnGroup.svelte';\\n  import Menu from '../components/Menu.svelte';\\n  import DarkModeSwitcher from './ToggleTheme.svelte';\\n  import Search from './Search.svelte';\\n\\n  let isSearch = true;\\n  let isLogin = '';\\n  let widthWin;\\n<\/script>\\n\\n<style lang=\\"postcss\\">.header__logo{display:flex;flex-shrink:0;left:.5rem;position:absolute}@media (min-width:768px){.header__logo{position:static}}.themeDark{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.textDark{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}</style>"],"names":[],"mappings":"AA2CsB,4BAAa,CAAC,QAAQ,IAAI,CAAC,YAAY,CAAC,CAAC,KAAK,KAAK,CAAC,SAAS,QAAQ,CAAC,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,4BAAa,CAAC,SAAS,MAAM,CAAC,CAAC,yBAAU,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,wBAAS,CAAC,kBAAkB,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `

<header class="${["header svelte-16frv7r", $theme ? "themeDark" : ""].join(" ").trim()}"><div class="${"container-no-height"}"><div class="${"relative flex justify-between items-center h-12"}"><a href="${"/"}" class="${"header__logo svelte-16frv7r"}"><i class="${"fab fa-accusoft fa-2x mr-2 text-purple-500"}"></i>   
        <div class="${["grid gap-0 text-gray-600 svelte-16frv7r", $theme ? "textDark" : ""].join(" ").trim()}"><i class="${"font-bold text-lg leading-none"}">\u0412\u0438\u0442-\u041A\u043E</i>
          <i class="${"font-semibold text-xs leading-none"}">\u043A\u0440\u043E\u0432\u043B\u044F \u0438 \u0441\u0442\u0440\u043E\u0439\u043A\u0430</i></div></a>
      ${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
      ${`${validate_component(Search, "Search").$$render($$result, {}, {}, {})}`}
      ${``}
      <div class="${"invisible md:visible"}">${validate_component(ToggleTheme, "DarkModeSwitcher").$$render($$result, {}, {}, {})}</div></div></div>
</header>`;
});
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer"}"><div class="${"flex flex-wrap text-center text-white"}"> 
    <div class="${"w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left"}"><div class="${"my-6 ml-3 text-xl font-semibold"}">\u041E \u041D\u0410\u0421</div> 
      <p class="${"p-3 text-gray-400"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p> 
      <p class="${"p-3 text-gray-400"}">Morbi tristique massa nec massa auctor, at scelerisque felis consectetur. Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.</p></div>  
    <div class="${"w-full md:w-1/3 p-5 border-r border-blue-800"}"><div class="${"my-6 text-xl font-semibold"}">\u041D\u0410\u0428\u0418 \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B</div> 
      <p class="${"mt-8 text-gray-400"}">A108 Adam Street <br> New York, NY 535022 <br> United States <br> <strong>Phone:</strong> +1 5589 55488 55 <br> <strong>Email:</strong> info@webcraft.com </p>
      <div class="${"relative w-20 h-20 mx-auto my-12 bg-blue-300 transform rotate-45"}"><div class="${"flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer"}"><i class="${"fab fa-facebook-f fa-lg text-blue-500 transform -rotate-45"}"></i></div> 
        <div class="${"flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer"}"><i class="${"fab fa-twitter fa-lg text-blue-500 transform -rotate-45"}"></i></div> 
        <div class="${"flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer"}"><i class="${"fab fa-google-plus-g fa-lg text-blue-500 transform -rotate-45"}"></i></div> 
        <div class="${"flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer"}"><i class="${"fab fa-linkedin-in fa-lg text-blue-500 transform -rotate-45"}"></i></div></div></div>  
    <div class="${"w-full md:w-1/3 p-5"}"><div class="${"mt-6 text-xl font-semibold"}">\u041F\u041E\u041F\u0420\u0418\u0412\u0415\u0422\u0421\u0422\u0412\u0423\u0419!</div> 
      <form class="${"w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded"}"><div class="${"flex items-center mb-4"}"><input class="${"w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"}" type="${"text"}" placeholder="${"Username"}"></div> 
        <div class="${"flex items-center mb-4"}"><input class="${"w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"}" type="${"text"}" placeholder="${"Email"}"></div> 
        <div class="${"mb-6"}"><textarea class="${"w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"}" placeholder="${"Message"}"></textarea></div> 
        <div class="${"flex justify-between items-center"}"><button class="${"w-full py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold"}" type="${"button"}">\u041E\u0422\u041F\u0420\u0410\u0412\u042C</button></div></form></div></div></footer>`;
});
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} 
  <main class="${"main pt-12"}">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load$1({ error: error22, status }) {
  return { props: { error: error22, status } };
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error22 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load: load$1
});
var css$3 = {
  code: ".counter.svelte-10ov3cu.svelte-10ov3cu{border-bottom:1px solid rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);display:flex;margin:1rem 0}.counter.svelte-10ov3cu button.svelte-10ov3cu{align-items:center;background-color:transparent;border:0;color:var(--text-color);display:flex;font-size:2rem;justify-content:center;padding:0;width:2em}.counter.svelte-10ov3cu button.svelte-10ov3cu:hover{background-color:var(--secondary-color)}svg.svelte-10ov3cu.svelte-10ov3cu{height:25%;width:25%}path.svelte-10ov3cu.svelte-10ov3cu{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-10ov3cu.svelte-10ov3cu{height:4em;overflow:hidden;position:relative;text-align:center;width:8em}.counter-viewport.svelte-10ov3cu strong.svelte-10ov3cu{align-items:center;color:var(--accent-color);display:block;display:flex;font-size:4rem;font-weight:400;justify-content:center}.counter-digits.svelte-10ov3cu.svelte-10ov3cu,.counter-viewport.svelte-10ov3cu strong.svelte-10ov3cu{height:100%;position:absolute;width:100%}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n\\timport { spring } from 'svelte/motion';\\n\\n\\tlet count = 0;\\n\\n\\tconst displayed_count = spring();\\n\\t$: displayed_count.set(count);\\n\\t$: offset = modulo($displayed_count, 1);\\n\\n\\tfunction modulo(n, m) {\\n\\t\\t// handle negative numbers\\n\\t\\treturn ((n % m) + m) % m;\\n\\t}\\n<\/script>\\n\\n<div class=\\"counter\\">\\n\\t<button on:click={() => (count -= 1)} aria-label=\\"Decrease the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5\\" />\\n\\t\\t</svg>\\n\\t</button>\\n\\n\\t<div class=\\"counter-viewport\\">\\n\\t\\t<div class=\\"counter-digits\\" style=\\"transform: translate(0, {100 * offset}%)\\">\\n\\t\\t\\t<strong style=\\"top: -100%\\" aria-hidden=\\"true\\">{Math.floor($displayed_count + 1)}</strong>\\n\\t\\t\\t<strong>{Math.floor($displayed_count)}</strong>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<button on:click={() => (count += 1)} aria-label=\\"Increase the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5 M0.5,0 L0.5,1\\" />\\n\\t\\t</svg>\\n\\t</button>\\n</div>\\n\\n<style>.counter{border-bottom:1px solid rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);display:flex;margin:1rem 0}.counter button{align-items:center;background-color:transparent;border:0;color:var(--text-color);display:flex;font-size:2rem;justify-content:center;padding:0;width:2em}.counter button:hover{background-color:var(--secondary-color)}svg{height:25%;width:25%}path{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport{height:4em;overflow:hidden;position:relative;text-align:center;width:8em}.counter-viewport strong{align-items:center;color:var(--accent-color);display:block;display:flex;font-size:4rem;font-weight:400;justify-content:center}.counter-digits,.counter-viewport strong{height:100%;position:absolute;width:100%}</style>\\n"],"names":[],"mappings":"AAoCO,sCAAQ,CAAC,cAAc,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,WAAW,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,QAAQ,IAAI,CAAC,OAAO,IAAI,CAAC,CAAC,CAAC,uBAAQ,CAAC,qBAAM,CAAC,YAAY,MAAM,CAAC,iBAAiB,WAAW,CAAC,OAAO,CAAC,CAAC,MAAM,IAAI,YAAY,CAAC,CAAC,QAAQ,IAAI,CAAC,UAAU,IAAI,CAAC,gBAAgB,MAAM,CAAC,QAAQ,CAAC,CAAC,MAAM,GAAG,CAAC,uBAAQ,CAAC,qBAAM,MAAM,CAAC,iBAAiB,IAAI,iBAAiB,CAAC,CAAC,iCAAG,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,kCAAI,CAAC,cAAc,kBAAkB,CAAC,aAAa,GAAG,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,+CAAiB,CAAC,OAAO,GAAG,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,WAAW,MAAM,CAAC,MAAM,GAAG,CAAC,gCAAiB,CAAC,qBAAM,CAAC,YAAY,MAAM,CAAC,MAAM,IAAI,cAAc,CAAC,CAAC,QAAQ,KAAK,CAAC,QAAQ,IAAI,CAAC,UAAU,IAAI,CAAC,YAAY,GAAG,CAAC,gBAAgB,MAAM,CAAC,6CAAe,CAAC,gCAAiB,CAAC,qBAAM,CAAC,OAAO,IAAI,CAAC,SAAS,QAAQ,CAAC,MAAM,IAAI,CAAC"}`
};
function modulo(n, m) {
  return (n % m + m) % m;
}
var Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$3);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-10ov3cu"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-10ov3cu"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-10ov3cu"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-10ov3cu"}"></path></svg></button>

	<div class="${"counter-viewport svelte-10ov3cu"}"><div class="${"counter-digits svelte-10ov3cu"}" style="${"transform: translate(0, " + escape2(100 * offset) + "%)"}"><strong style="${"top: -100%"}" aria-hidden="${"true"}" class="${"svelte-10ov3cu"}">${escape2(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-10ov3cu"}">${escape2(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-10ov3cu"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-10ov3cu"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-10ov3cu"}"></path></svg></button>
</div>`;
});
var css$2 = {
  code: "section.svelte-pmk38k.svelte-pmk38k{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center}.welcome.svelte-pmk38k.svelte-pmk38k,h1.svelte-pmk38k.svelte-pmk38k{width:100%}.welcome.svelte-pmk38k.svelte-pmk38k{height:0;padding:0 0 24.16992%;position:relative}.welcome.svelte-pmk38k img.svelte-pmk38k{display:block;height:100%;position:absolute;top:0;width:100%}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const prerender = true;\\n<\/script>\\n\\n<script>\\n\\timport Counter from '$lib/Counter/index.svelte';\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n</svelte:head>\\n\\n<section>\\n\\t<h1>\\n\\t\\t<div class=\\"welcome\\">\\n\\t\\t\\t<picture>\\n\\t\\t\\t\\t<source srcset=\\"svelte-welcome.webp\\" type=\\"image/webp\\" />\\n\\t\\t\\t\\t<img src=\\"svelte-welcome.png\\" alt=\\"Welcome\\" />\\n\\t\\t\\t</picture>\\n\\t\\t</div>\\n\\n\\t\\tto your new<br />SvelteKit app\\n\\t</h1>\\n\\n\\t<h2>\\n\\t\\ttry editing <strong>src/routes/index.svelte</strong>\\n\\t</h2>\\n\\n\\t<Counter />\\n</section>\\n\\n<style>section{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center}.welcome,h1{width:100%}.welcome{height:0;padding:0 0 24.16992%;position:relative}.welcome img{display:block;height:100%;position:absolute;top:0;width:100%}</style>\\n"],"names":[],"mappings":"AA+BO,mCAAO,CAAC,YAAY,MAAM,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,eAAe,MAAM,CAAC,gBAAgB,MAAM,CAAC,oCAAQ,CAAC,8BAAE,CAAC,MAAM,IAAI,CAAC,oCAAQ,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,QAAQ,CAAC,sBAAQ,CAAC,iBAAG,CAAC,QAAQ,KAAK,CAAC,OAAO,IAAI,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC"}`
};
var prerender$1 = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-pmk38k"}"><h1 class="${"svelte-pmk38k"}"><div class="${"welcome svelte-pmk38k"}"><picture><source srcset="${"svelte-welcome.webp"}" type="${"image/webp"}">
				<img src="${"svelte-welcome.png"}" alt="${"Welcome"}" class="${"svelte-pmk38k"}"></picture></div>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/index.svelte</strong></h2>

	${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
</section>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender: prerender$1
});
var browser = false;
var dev = false;
var css$1 = {
  code: ".content.svelte-t58uux{margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}",
  map: `{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { browser, dev } from '$app/env';\\n\\n\\t// we don't need any JS on this page, though we'll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there's no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>About this app</h1>\\n\\n\\t<p>\\n\\t\\tThis is a <a href=\\"https://kit.svelte.dev\\">SvelteKit</a> app. You can make your own by typing the\\n\\t\\tfollowing into your command line and following the prompts:\\n\\t</p>\\n\\n\\t<!-- TODO lose the @next! -->\\n\\t<pre>npm init svelte@next</pre>\\n\\n\\t<p>\\n\\t\\tThe page you're looking at is purely static HTML, with no client-side interactivity needed.\\n\\t\\tBecause of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\\n\\t\\tthe devtools network panel and reloading.\\n\\t</p>\\n\\n\\t<p>\\n\\t\\tThe <a href=\\"/todos\\">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using\\n\\t\\tit with JavaScript disabled!\\n\\t</p>\\n</div>\\n\\n<style>.content{margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}</style>\\n"],"names":[],"mappings":"AA2CO,sBAAQ,CAAC,OAAO,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU,IAAI,cAAc,CAAC,CAAC,MAAM,IAAI,CAAC"}`
};
var hydrate = dev;
var router = browser;
var prerender = true;
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-t58uux"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	
	<pre>npm init svelte@next</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About,
  hydrate,
  router,
  prerender
});
var css = {
  code: `.todos.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{line-height:1;margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}.new.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{margin:0 0 .5rem}input.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{border:1px solid transparent}input.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus-visible{border:1px solid #ff3e00!important;box-shadow:inset 1px 1px 6px rgba(0,0,0,.1);outline:none}.new.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn{background:hsla(0,0%,100%,.05);box-sizing:border-box;font-size:28px;padding:.5em 1em .3em;text-align:center;width:100%}.new.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn,.todo.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{border-radius:8px}.todo.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{grid-gap:.5rem;align-items:center;background-color:#fff;display:grid;filter:drop-shadow(2px 4px 6px rgba(0,0,0,.1));grid-template-columns:2rem 1fr 2rem;margin:0 0 .5rem;padding:.5rem;transform:translate(-1px,-1px);transition:filter .2s,transform .2s}.done.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{filter:drop-shadow(0 0 1px rgba(0,0,0,.1));opacity:.4;transform:none}form.text.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{align-items:center;display:flex;flex:1;position:relative}.todo.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn{border-radius:3px;flex:1;padding:.5em 2em .5em .8em}.todo.svelte-2qlxbn button.svelte-2qlxbn.svelte-2qlxbn{background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;border:none;height:2em;width:2em}button.toggle.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-size:1em auto;border:1px solid rgba(0,0,0,.2);border-radius:50%;box-sizing:border-box}.done.svelte-2qlxbn .toggle.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20.5 1.5-13.063 13L1.5 8.59' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5v17h15V5h-15z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10v6.5M14 10v6.5' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5h20' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m8 5 1.645-3h4.744L16 5H8z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");opacity:.2}.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus,.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:hover{opacity:1;transition:opacity .2s}.save.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2v9H7.5V2H17z' fill='%23fff' stroke='%23fff' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5v2M5.998 2H18.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");opacity:0;position:absolute;right:0}.save.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus,.todo.svelte-2qlxbn input.svelte-2qlxbn:focus+.save.svelte-2qlxbn{opacity:1;transition:opacity .2s}`,
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { enhance } from '$lib/form';\\n\\n\\t// see https://kit.svelte.dev/docs#loading\\n\\texport const load = async ({ fetch }) => {\\n\\t\\tconst res = await fetch('/todos.json');\\n\\n\\t\\tif (res.ok) {\\n\\t\\t\\tconst todos = await res.json();\\n\\n\\t\\t\\treturn {\\n\\t\\t\\t\\tprops: { todos }\\n\\t\\t\\t};\\n\\t\\t}\\n\\n\\t\\tconst { message } = await res.json();\\n\\n\\t\\treturn {\\n\\t\\t\\terror: new Error(message)\\n\\t\\t};\\n\\t};\\n<\/script>\\n\\n<script>\\n\\timport { scale } from 'svelte/transition';\\n\\timport { flip } from 'svelte/animate';\\n\\n\\texport let todos;\\n\\n\\tasync function patch(res) {\\n\\t\\tconst todo = await res.json();\\n\\n\\t\\ttodos = todos.map((t) => {\\n\\t\\t\\tif (t.uid === todo.uid) return todo;\\n\\t\\t\\treturn t;\\n\\t\\t});\\n\\t}\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Todos</title>\\n</svelte:head>\\n\\n<div class=\\"todos\\">\\n\\t<h1>Todos</h1>\\n\\n\\t<form\\n\\t\\tclass=\\"new\\"\\n\\t\\taction=\\"/todos.json\\"\\n\\t\\tmethod=\\"post\\"\\n\\t\\tuse:enhance={{\\n\\t\\t\\tresult: async (res, form) => {\\n\\t\\t\\t\\tconst created = await res.json();\\n\\t\\t\\t\\ttodos = [...todos, created];\\n\\n\\t\\t\\t\\tform.reset();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t>\\n\\t\\t<input name=\\"text\\" aria-label=\\"Add todo\\" placeholder=\\"+ tap to add a todo\\" />\\n\\t</form>\\n\\n\\t{#each todos as todo (todo.uid)}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"todo\\"\\n\\t\\t\\tclass:done={todo.done}\\n\\t\\t\\ttransition:scale|local={{ start: 0.7 }}\\n\\t\\t\\tanimate:flip={{ duration: 200 }}\\n\\t\\t>\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tpending: (data) => {\\n\\t\\t\\t\\t\\t\\ttodo.done = !!data.get('done');\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input type=\\"hidden\\" name=\\"done\\" value={todo.done ? '' : 'true'} />\\n\\t\\t\\t\\t<button class=\\"toggle\\" aria-label=\\"Mark todo as {todo.done ? 'not done' : 'done'}\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\tclass=\\"text\\"\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input aria-label=\\"Edit todo\\" type=\\"text\\" name=\\"text\\" value={todo.text} />\\n\\t\\t\\t\\t<button class=\\"save\\" aria-label=\\"Save todo\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=delete\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: () => {\\n\\t\\t\\t\\t\\t\\ttodos = todos.filter((t) => t.uid !== todo.uid);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<button class=\\"delete\\" aria-label=\\"Delete todo\\" />\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>.todos{line-height:1;margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}.new{margin:0 0 .5rem}input{border:1px solid transparent}input:focus-visible{border:1px solid #ff3e00!important;box-shadow:inset 1px 1px 6px rgba(0,0,0,.1);outline:none}.new input{background:hsla(0,0%,100%,.05);box-sizing:border-box;font-size:28px;padding:.5em 1em .3em;text-align:center;width:100%}.new input,.todo{border-radius:8px}.todo{grid-gap:.5rem;align-items:center;background-color:#fff;display:grid;filter:drop-shadow(2px 4px 6px rgba(0,0,0,.1));grid-template-columns:2rem 1fr 2rem;margin:0 0 .5rem;padding:.5rem;transform:translate(-1px,-1px);transition:filter .2s,transform .2s}.done{filter:drop-shadow(0 0 1px rgba(0,0,0,.1));opacity:.4;transform:none}form.text{align-items:center;display:flex;flex:1;position:relative}.todo input{border-radius:3px;flex:1;padding:.5em 2em .5em .8em}.todo button{background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;border:none;height:2em;width:2em}button.toggle{background-size:1em auto;border:1px solid rgba(0,0,0,.2);border-radius:50%;box-sizing:border-box}.done .toggle{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20.5 1.5-13.063 13L1.5 8.59' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\\")}.delete{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5v17h15V5h-15z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10v6.5M14 10v6.5' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5h20' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m8 5 1.645-3h4.744L16 5H8z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E\\");opacity:.2}.delete:focus,.delete:hover{opacity:1;transition:opacity .2s}.save{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2v9H7.5V2H17z' fill='%23fff' stroke='%23fff' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5v2M5.998 2H18.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\\");opacity:0;position:absolute;right:0}.save:focus,.todo input:focus+.save{opacity:1;transition:opacity .2s}</style>\\n"],"names":[],"mappings":"AA8GO,gDAAM,CAAC,YAAY,CAAC,CAAC,OAAO,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU,IAAI,cAAc,CAAC,CAAC,MAAM,IAAI,CAAC,8CAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,+CAAK,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,WAAW,CAAC,+CAAK,cAAc,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,OAAO,UAAU,CAAC,WAAW,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,QAAQ,IAAI,CAAC,kBAAI,CAAC,iCAAK,CAAC,WAAW,KAAK,CAAC,CAAC,EAAE,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,WAAW,UAAU,CAAC,UAAU,IAAI,CAAC,QAAQ,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,WAAW,MAAM,CAAC,MAAM,IAAI,CAAC,kBAAI,CAAC,iCAAK,CAAC,+CAAK,CAAC,cAAc,GAAG,CAAC,+CAAK,CAAC,SAAS,KAAK,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,CAAC,QAAQ,IAAI,CAAC,OAAO,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,sBAAsB,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,QAAQ,KAAK,CAAC,UAAU,UAAU,IAAI,CAAC,IAAI,CAAC,CAAC,WAAW,MAAM,CAAC,GAAG,CAAC,SAAS,CAAC,GAAG,CAAC,+CAAK,CAAC,OAAO,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC,UAAU,IAAI,CAAC,IAAI,+CAAK,CAAC,YAAY,MAAM,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,SAAS,QAAQ,CAAC,mBAAK,CAAC,iCAAK,CAAC,cAAc,GAAG,CAAC,KAAK,CAAC,CAAC,QAAQ,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,mBAAK,CAAC,kCAAM,CAAC,iBAAiB,WAAW,CAAC,oBAAoB,GAAG,CAAC,GAAG,CAAC,kBAAkB,SAAS,CAAC,OAAO,IAAI,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,MAAM,iDAAO,CAAC,gBAAgB,GAAG,CAAC,IAAI,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,cAAc,GAAG,CAAC,WAAW,UAAU,CAAC,mBAAK,CAAC,mCAAO,CAAC,iBAAiB,IAAI,6PAA6P,CAAC,CAAC,iDAAO,CAAC,iBAAiB,IAAI,ykBAAykB,CAAC,CAAC,QAAQ,EAAE,CAAC,iDAAO,MAAM,CAAC,iDAAO,MAAM,CAAC,QAAQ,CAAC,CAAC,WAAW,OAAO,CAAC,GAAG,CAAC,+CAAK,CAAC,iBAAiB,IAAI,ohBAAohB,CAAC,CAAC,QAAQ,CAAC,CAAC,SAAS,QAAQ,CAAC,MAAM,CAAC,CAAC,+CAAK,MAAM,CAAC,mBAAK,CAAC,mBAAK,MAAM,CAAC,mBAAK,CAAC,QAAQ,CAAC,CAAC,WAAW,OAAO,CAAC,GAAG,CAAC"}`
};
var load = async ({ fetch: fetch22 }) => {
  const res = await fetch22("/todos.json");
  if (res.ok) {
    const todos = await res.json();
    return { props: { todos } };
  }
  const { message } = await res.json();
  return { error: new Error(message) };
};
var Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todos } = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}`, ""}

<div class="${"todos svelte-2qlxbn"}"><h1>Todos</h1>

	<form class="${"new svelte-2qlxbn"}" action="${"/todos.json"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-2qlxbn"}"></form>

	${each(todos, (todo) => `<div class="${["todo svelte-2qlxbn", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-2qlxbn"}">
				<button class="${"toggle svelte-2qlxbn"}" aria-label="${"Mark todo as " + escape2(todo.done ? "not done" : "done")}"></button></form>

			<form class="${"text svelte-2qlxbn"}" action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-2qlxbn"}">
				<button class="${"save svelte-2qlxbn"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"/todos/" + escape2(todo.uid) + ".json?_method=delete"}" method="${"post"}"><button class="${"delete svelte-2qlxbn"}" aria-label="${"Delete todo"}"></button></form>
		</div>`)}
</div>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Todos,
  load
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const { pathname, searchParams } = new URL(req.url || "", "http://localhost");
  let body;
  try {
    body = await getRawBody(req);
  } catch (err) {
    res.statusCode = err.status || 400;
    return res.end(err.reason || "Invalid request body");
  }
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: body
  });
  if (rendered) {
    const { status, headers, body: body2 } = rendered;
    return res.writeHead(status, headers).end(body2);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
