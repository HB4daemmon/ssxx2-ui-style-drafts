/* Same-origin Godot Web kernel host.
 * Godot Web cannot instantiate ssxx2-kernel-wasm from GDScript. This object is
 * the documented seam: it loads a pinned sibling ssxx2_kernel_wasm.wasm, talks
 * to the seven ABI exports, and stays available=false until validation succeeds.
 * It does not call gameplay APIs, CDNs, or remote URLs. Fixture catalog numbers
 * are never stamped as authoritative/wasm.
 */
(function (root) {
  var ABI_VERSION = 65536;
  var HOST_SCHEMA = "ssxx2.godot.kernel-host.v1";
  var CALL_SCHEMA = "ssxx2.kernel.call.v1";
  var OUTPUT_SCHEMA = "ssxx2.kernel.output.v1";
  var KERNEL_WASM_FILE = "ssxx2_kernel_wasm.wasm";
  var SOURCE_WASM = "authoritative/wasm";
  var SOURCE_UNAVAILABLE = "untrusted/unavailable";
  var UNBOUND_REASON =
    "Godot Web cannot instantiate ssxx2-kernel-wasm from GDScript; ssxx2KernelHost is unbound";
  var REQUIRED_EXPORTS = [
    "ssxx2_abi_version",
    "ssxx2_alloc",
    "ssxx2_dealloc",
    "ssxx2_call",
    "ssxx2_output_ptr",
    "ssxx2_output_len",
    "ssxx2_output_free",
  ];
  var PRESENTATION_ONLY = {
    AUTH_SET_NAME: true,
    AUTH_SUBMIT: true,
    AUTH_OPEN_RECOVERY: true,
    AUTH_RETRY_RECOVERY: true,
    AUTH_BACK_LOGIN: true,
    BATTLE_PLAY: true,
    BATTLE_SPEED: true,
    BATTLE_SKIP_ASK: true,
    BATTLE_REPLAY: true,
    BATTLE_TICK: true,
    TOGGLE_REDUCED_MOTION: true,
    QUERY: true,
  };
  /* Documented forward mapping: Godot typed commands that are not presentation-only
   * are sent as contracts/kernel/v1/fixtures/valid/probe-02-start-act.json
   * input_canonical. Canonical ssxx2.kernel.call.v1 requests pass through unchanged.
   */
  var DOCUMENTED_FORWARD_FIXTURE =
    "contracts/kernel/v1/fixtures/valid/probe-02-start-act.json";
  var DOCUMENTED_FORWARD_CANONICAL = "{\"abi_version\":65536,\"bindings\":{\"act_digest\":\"4444444444444444444444444444444444444444444444444444444444444444\",\"act_ref\":\"act.probe.01\",\"base_digest\":\"2222222222222222222222222222222222222222222222222222222222222222\",\"base_ref\":\"base.probe\",\"capability_registry_digest\":\"5555555555555555555555555555555555555555555555555555555555555555\",\"entity_registry_digest\":\"6666666666666666666666666666666666666666666666666666666666666666\",\"gameplay_image_digest\":\"ddaae218d6c051b11d46148083004ce1c96a1a4f290f884b6d8eb465e05ebda3\",\"kernel_digest\":\"1111111111111111111111111111111111111111111111111111111111111111\",\"kernel_ref\":\"kernel.probe\",\"season_digest\":\"3333333333333333333333333333333333333333333333333333333333333333\",\"season_ref\":\"season.probe\"},\"content_input\":{\"expected_digest\":\"ddaae218d6c051b11d46148083004ce1c96a1a4f290f884b6d8eb465e05ebda3\",\"image\":{\"act_digest\":\"4444444444444444444444444444444444444444444444444444444444444444\",\"act_ref\":\"act.probe.01\",\"base_digest\":\"2222222222222222222222222222222222222222222222222222222222222222\",\"base_ref\":\"base.probe\",\"capability_registry_digest\":\"5555555555555555555555555555555555555555555555555555555555555555\",\"definitions\":{\"domain\":\"probe\",\"node_ref\":\"probe.node.01\",\"reward_per_point\":7,\"reward_resource_ref\":\"resource.spirit-stone\",\"roll_faces\":20},\"entity_registry_digest\":\"6666666666666666666666666666666666666666666666666666666666666666\",\"gameplay_image_digest\":\"ddaae218d6c051b11d46148083004ce1c96a1a4f290f884b6d8eb465e05ebda3\",\"kernel_digest\":\"1111111111111111111111111111111111111111111111111111111111111111\",\"kernel_ref\":\"kernel.probe\",\"schema\":\"ssxx2.kernel.gameplay-image.v1\",\"season_digest\":\"3333333333333333333333333333333333333333333333333333333333333333\",\"season_profiles\":null,\"season_ref\":\"season.probe\",\"structural_counts\":{\"capability_use_count\":1,\"definition_count\":1,\"max_condition_depth\":0,\"node_count\":1}},\"mode\":\"inline\"},\"input\":{\"account_meta\":{\"meta_snapshot_digest\":\"442f42eea202c346f456499fede15294f4048a5820c7d83c33ec838376d58160\",\"progress\":{\"entries\":[],\"progress_registry_digest\":\"0000000000000000000000000000000000000000000000000000000000000000\",\"progress_snapshot_digest\":\"22f6a41c350172fd5ccdbeabf0279aa82c4a3e93b9e3cb3bccaa420880337b2d\"},\"schema\":\"ssxx2.kernel.account-meta-snapshot.v1\",\"unlocks\":{\"achievement_refs\":[],\"codex_fact_refs\":[],\"unlock_registry_digest\":\"0000000000000000000000000000000000000000000000000000000000000000\",\"unlock_snapshot_digest\":\"e2f014485221c6acbf18ee1af953d2288ec939949f9bbe3e37d1ee87db9174b5\"}},\"act_instance_id\":\"fedcba9876543210fedcba9876543210\",\"operation\":\"start_act\",\"pinned_difficulty\":{\"catalog_digest\":\"7777777777777777777777777777777777777777777777777777777777777777\",\"level\":1,\"profile_ref\":\"difficulty.s1\"},\"root_seed_hex\":\"000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f\",\"run_id\":\"0123456789abcdef0123456789abcdef\"},\"operation\":\"start_act\",\"resource_profile\":{\"profile_digest\":\"7777777777777777777777777777777777777777777777777777777777777777\",\"profile_ref\":\"profile.foundation-spike-v1\"},\"schema\":\"ssxx2.kernel.call.v1\"}";

  function utf8Encode(text) {
    return new TextEncoder().encode(text);
  }

  function utf8Decode(bytes) {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  }

  function stringify(value) {
    return JSON.stringify(value);
  }

  function parseJson(text) {
    try {
      return { ok: true, value: JSON.parse(text) };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  function unavailablePayload(reason, extra) {
    var payload = {
      ok: false,
      host_available: false,
      source_kind: SOURCE_UNAVAILABLE,
      abi_code: -4,
      reason: reason || UNBOUND_REASON,
    };
    if (extra) {
      var key;
      for (key in extra) {
        if (Object.prototype.hasOwnProperty.call(extra, key)) {
          payload[key] = extra[key];
        }
      }
    }
    return stringify(payload);
  }

  function isFunction(value) {
    return typeof value === "function";
  }

  function siblingUrl() {
    if (typeof document !== "undefined" && document.currentScript && document.currentScript.src) {
      return document.currentScript.src.replace(/[^/?#]+([?#].*)?$/, "") + KERNEL_WASM_FILE;
    }
    return "./" + KERNEL_WASM_FILE;
  }

  function sameOriginGet() {
    var get = root && root.fetch;
    if (isFunction(get)) {
      return get.bind(root);
    }
    if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) {
      return globalThis.fetch.bind(globalThis);
    }
    return null;
  }

  function instantiateBuffer(buffer) {
    return WebAssembly.instantiate(buffer, {});
  }

  function loadKernelModule(url) {
    var get = sameOriginGet();
    if (!get) {
      return Promise.reject(new Error("no same-origin loader for " + KERNEL_WASM_FILE));
    }
    function fromResponse(response) {
      if (!response || response.ok === false) {
        throw new Error("kernel wasm missing");
      }
      return response.arrayBuffer().then(instantiateBuffer);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      return WebAssembly.instantiateStreaming(get(url), {}).catch(function () {
        return get(url).then(fromResponse);
      });
    }
    return get(url).then(fromResponse);
  }

  function isCanonicalCall(value) {
    return (
      value &&
      typeof value === "object" &&
      value.schema === CALL_SCHEMA &&
      value.abi_version === ABI_VERSION &&
      typeof value.operation === "string"
    );
  }

  function isGodotRequest(value) {
    return (
      value &&
      typeof value === "object" &&
      value.schema === HOST_SCHEMA &&
      typeof value.command_kind === "string"
    );
  }

  function isValidOutput(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (value.schema !== OUTPUT_SCHEMA) {
      return false;
    }
    if (value.abi_version !== ABI_VERSION) {
      return false;
    }
    if (typeof value.ok !== "boolean") {
      return false;
    }
    if (typeof value.operation !== "string") {
      return false;
    }
    if (value.ok === true) {
      return value.result != null && typeof value.result === "object" && value.error == null;
    }
    return value.error != null && typeof value.error === "object" && value.result == null;
  }

  function stringList(prefix, value) {
    if (value == null || value === "") {
      return [];
    }
    return [prefix + String(value)];
  }

  function projectFromKernel(output) {
    var result = output.result || {};
    var pub = result.projection && typeof result.projection === "object" ? result.projection : {};
    var facts = [];
    facts = facts.concat(stringList("operation=", output.operation));
    facts = facts.concat(stringList("act_ref=", pub.act_ref));
    if (typeof pub.step_seq === "number") {
      facts.push("step_seq=" + pub.step_seq);
    }
    if (typeof pub.terminal === "boolean") {
      facts.push("terminal=" + String(pub.terminal));
    }
    facts = facts.concat(stringList("gameplay_image_digest=", pub.gameplay_image_digest || result.gameplay_image_digest));
    if (typeof result.cached === "boolean") {
      facts.push("cached=" + String(result.cached));
    }
    var intents = Array.isArray(pub.legal_intents) ? pub.legal_intents : [];
    var cards = [];
    var i;
    for (i = 0; i < intents.length; i += 1) {
      var intent = intents[i] || {};
      cards.push({
        id: String(intent.instance_id || intent.archetype || i),
        title: String(intent.archetype || "intent"),
        body: String(intent.instance_id || ""),
      });
    }
    var domain = pub.domain_public && typeof pub.domain_public === "object" ? pub.domain_public : {};
    var battle = {};
    if (domain.active_combat && typeof domain.active_combat === "object") {
      battle = domain.active_combat;
    }
    var tower = {};
    if (domain.route_map && typeof domain.route_map === "object") {
      tower = {
        route_map: domain.route_map,
        current_row: domain.current_row,
        current_slot: domain.current_slot,
        offered_slots: domain.offered_slots,
      };
    }
    return {
      page_id: "difficulty",
      surface: tower.route_map ? "tower" : "scroll",
      kicker: "权威内核 · authoritative/wasm",
      title: String(pub.act_ref || output.operation || ""),
      summary: String(output.operation || ""),
      hud_line: "权威内核 · authoritative/wasm",
      primary_label: intents.length ? "继续" : "已绑定",
      primary_enabled: intents.length > 0 && pub.terminal !== true,
      back_visible: false,
      facts: facts,
      cards: cards,
      battle: battle,
      tower: tower,
    };
  }

  function createKernelHost(options) {
    options = options || {};
    var host = {
      schema: HOST_SCHEMA,
      abiVersion: ABI_VERSION,
      callEnvelopeSchema: CALL_SCHEMA,
      outputSchema: OUTPUT_SCHEMA,
      available: false,
      reason: UNBOUND_REASON,
      exports: REQUIRED_EXPORTS.slice(),
      documentedForwardFixture: DOCUMENTED_FORWARD_FIXTURE,
    };
    var runtime = null;
    var lastTrustedProjection = null;
    var lastOwnership = [];
    var forwardCanonical = options.forwardCanonical || DOCUMENTED_FORWARD_CANONICAL;

    function record(step) {
      lastOwnership.push(step);
    }

    function resetUnbound(reason) {
      runtime = null;
      lastTrustedProjection = null;
      host.available = false;
      host.reason = reason || UNBOUND_REASON;
    }

    function poison(abiCode, reason) {
      resetUnbound(reason || "kernel ABI failure; instance destroyed");
      host.lastAbiCode = abiCode;
    }

    function validateExports(exports) {
      if (!exports || typeof exports !== "object") {
        return "kernel exports object missing";
      }
      if (!exports.memory || !exports.memory.buffer) {
        return "kernel memory export missing";
      }
      var i;
      for (i = 0; i < REQUIRED_EXPORTS.length; i += 1) {
        var name = REQUIRED_EXPORTS[i];
        if (!isFunction(exports[name])) {
          return "kernel export missing: " + name;
        }
      }
      var version = exports.ssxx2_abi_version();
      if (version !== ABI_VERSION) {
        return "kernel ABI version mismatch: " + String(version);
      }
      return "";
    }

    function bindRuntime(exports) {
      var problem = validateExports(exports);
      if (problem) {
        resetUnbound(problem);
        return false;
      }
      runtime = exports;
      host.available = true;
      host.reason = "";
      host.lastAbiCode = 0;
      return true;
    }

    function invokeCanonicalText(text) {
      lastOwnership = [];
      var guest = runtime;
      if (!guest || host.available !== true) {
        return {
          ok: false,
          host_available: false,
          source_kind: SOURCE_UNAVAILABLE,
          abi_code: -4,
          reason: host.reason || UNBOUND_REASON,
        };
      }
      var bytes = utf8Encode(text);
      var ptr = 0;
      var outputOwned = false;
      var pendingPoison = null;
      var result;
      try {
        ptr = guest.ssxx2_alloc(bytes.length) >>> 0;
        record("alloc");
        if (!ptr) {
          pendingPoison = { code: -3, reason: "kernel refused to allocate the input slot" };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: -3,
            reason: pendingPoison.reason,
          };
          return result;
        }
        var mem = new Uint8Array(guest.memory.buffer);
        if (ptr + bytes.length > mem.length) {
          pendingPoison = { code: -4, reason: "input slot is outside guest memory" };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: -4,
            reason: pendingPoison.reason,
          };
          return result;
        }
        mem.set(bytes, ptr);
        record("copy-in");
        var code = guest.ssxx2_call(ptr, bytes.length);
        record("call");
        if (code !== 0) {
          pendingPoison = {
            code: code,
            reason: "ssxx2_call returned untrusted ABI code " + String(code),
          };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: code,
            reason: pendingPoison.reason,
          };
          return result;
        }
        outputOwned = true;
        var outPtr = guest.ssxx2_output_ptr() >>> 0;
        var outLen = guest.ssxx2_output_len() >>> 0;
        mem = new Uint8Array(guest.memory.buffer);
        if (!outPtr || !outLen || outPtr + outLen > mem.length) {
          pendingPoison = { code: -4, reason: "kernel reported an unusable output slot" };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: -4,
            reason: pendingPoison.reason,
          };
          return result;
        }
        var outBytes = mem.slice(outPtr, outPtr + outLen);
        record("copy-out");
        var decoded;
        try {
          decoded = utf8Decode(outBytes);
        } catch (error) {
          pendingPoison = { code: -4, reason: "kernel output is not valid UTF-8" };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: -4,
            reason: pendingPoison.reason,
          };
          return result;
        }
        var parsed = parseJson(decoded);
        if (!parsed.ok || !isValidOutput(parsed.value)) {
          pendingPoison = { code: -4, reason: "kernel output schema or ABI is not trustworthy" };
          result = {
            ok: false,
            host_available: false,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: -4,
            reason: pendingPoison.reason,
          };
          return result;
        }
        var output = parsed.value;
        if (output.ok !== true) {
          result = {
            ok: false,
            host_available: true,
            source_kind: SOURCE_UNAVAILABLE,
            abi_code: 0,
            reason: "kernel returned a trusted error envelope",
            kernel_output: output,
          };
          return result;
        }
        var projection = projectFromKernel(output);
        lastTrustedProjection = projection;
        result = {
          ok: true,
          host_available: true,
          source_kind: SOURCE_WASM,
          abi_code: 0,
          reason: "",
          projection: projection,
          kernel_output: output,
        };
        return result;
      } catch (error) {
        pendingPoison = { code: -4, reason: "kernel call trapped" };
        return {
          ok: false,
          host_available: false,
          source_kind: SOURCE_UNAVAILABLE,
          abi_code: -4,
          reason: pendingPoison.reason,
        };
      } finally {
        try {
          if (outputOwned) {
            guest.ssxx2_output_free();
            record("output_free");
          }
        } catch (_freeError) {}
        try {
          if (ptr) {
            guest.ssxx2_dealloc(ptr, bytes.length);
            record("dealloc");
          }
        } catch (_deallocError) {}
        host.lastOwnership = lastOwnership.slice();
        if (pendingPoison) {
          poison(pendingPoison.code, pendingPoison.reason);
        }
      }
    }

    function resolveEnvelope(request) {
      if (isCanonicalCall(request)) {
        return { kind: "canonical", envelope: request };
      }
      if (!isGodotRequest(request)) {
        return { kind: "invalid", reason: "request is not a canonical envelope or Godot host command" };
      }
      var presentation = request.presentation_only === true || PRESENTATION_ONLY[request.command_kind] === true;
      if (presentation || request.command_kind === "QUERY") {
        return { kind: "presentation", command: request };
      }
      var parsed = parseJson(forwardCanonical);
      if (!parsed.ok || !isCanonicalCall(parsed.value)) {
        return { kind: "invalid", reason: "documented forward fixture envelope is unusable" };
      }
      return {
        kind: "mapped",
        envelopeText: forwardCanonical,
        fixture: DOCUMENTED_FORWARD_FIXTURE,
        command: request,
      };
    }

    function submit(requestJson) {
      if (!host.available || !runtime) {
        return unavailablePayload(host.reason, {
          echo: typeof requestJson === "string" ? requestJson : "",
        });
      }
      var originalText = typeof requestJson === "string" ? requestJson : "";
      var raw = requestJson;
      if (typeof requestJson === "string") {
        var parsedRequest = parseJson(requestJson);
        if (!parsedRequest.ok) {
          return unavailablePayload("host request is not JSON", { abi_code: -4, host_available: true });
        }
        raw = parsedRequest.value;
      }
      var resolved = resolveEnvelope(raw);
      if (resolved.kind === "presentation") {
        var snapshot = {
          ok: false,
          host_available: true,
          source_kind: SOURCE_UNAVAILABLE,
          abi_code: 0,
          presentation_only: true,
          command_kind: resolved.command.command_kind,
          reason: "presentation-only command; kernel was not mutated and fixtures are not stamped authoritative/wasm",
        };
        if (resolved.command.command_kind === "QUERY" && lastTrustedProjection) {
          snapshot.ok = true;
          snapshot.source_kind = SOURCE_WASM;
          snapshot.reason = "";
          snapshot.projection = lastTrustedProjection;
          snapshot.from_last_trusted = true;
        }
        return stringify(snapshot);
      }
      if (resolved.kind === "invalid") {
        return unavailablePayload(resolved.reason, { host_available: true, abi_code: -4 });
      }
      var envelopeText = resolved.kind === "mapped"
        ? resolved.envelopeText
        : originalText && isCanonicalCall(raw)
          ? originalText
          : stringify(resolved.envelope);
      return stringify(invokeCanonicalText(envelopeText));
    }

    function probe() {
      return stringify({
        available: host.available === true,
        reason: host.reason,
        abiVersion: host.abiVersion,
        schema: host.schema,
        module: KERNEL_WASM_FILE,
      });
    }

    function bindInstance(result) {
      var instance = result && result.instance ? result.instance : result;
      var exports = instance && instance.exports ? instance.exports : instance;
      return bindRuntime(exports);
    }

    function bindFromUrl(url) {
      return loadKernelModule(url || siblingUrl()).then(function (result) {
        if (!bindInstance(result)) {
          throw new Error(host.reason || "kernel bind failed");
        }
        return host;
      }).catch(function (error) {
        resetUnbound(error && error.message ? error.message : "kernel wasm missing or invalid");
        return host;
      });
    }

    host.probe = probe;
    host.submit = submit;
    host.bindRuntime = bindRuntime;
    host.bindInstance = bindInstance;
    host.bindFromUrl = bindFromUrl;
    host.unbind = function (reason) {
      resetUnbound(reason);
    };
    host.kernelWasmFile = KERNEL_WASM_FILE;
    return host;
  }

  var host = createKernelHost();
  root.ssxx2KernelHost = host;
  root.ssxx2CreateKernelHost = createKernelHost;
  if (typeof document !== "undefined" && root.SSXX2_KERNEL_HOST_AUTOBIND !== false) {
    host.bindFromUrl(siblingUrl());
  }
})(typeof window !== "undefined" ? window : globalThis);
