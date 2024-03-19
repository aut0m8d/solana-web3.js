this.globalThis = this.globalThis || {};
this.globalThis.solanaWeb3 = (function (exports) {
  'use strict';

  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ../build-scripts/env-shim.ts
  var init_env_shim = __esm({
    "../build-scripts/env-shim.ts"() {
    }
  });

  // ../../node_modules/.pnpm/fast-stable-stringify@1.0.0/node_modules/fast-stable-stringify/index.js
  var require_fast_stable_stringify = __commonJS({
    "../../node_modules/.pnpm/fast-stable-stringify@1.0.0/node_modules/fast-stable-stringify/index.js"(exports, module) {
      init_env_shim();
      var objToString = Object.prototype.toString;
      var objKeys = Object.keys || function(obj) {
        var keys = [];
        for (var name in obj) {
          keys.push(name);
        }
        return keys;
      };
      function stringify(val, isArrayProp) {
        var i, max, str, keys, key, propVal, toStr;
        if (val === true) {
          return "true";
        }
        if (val === false) {
          return "false";
        }
        switch (typeof val) {
          case "object":
            if (val === null) {
              return null;
            } else if (val.toJSON && typeof val.toJSON === "function") {
              return stringify(val.toJSON(), isArrayProp);
            } else {
              toStr = objToString.call(val);
              if (toStr === "[object Array]") {
                str = "[";
                max = val.length - 1;
                for (i = 0; i < max; i++) {
                  str += stringify(val[i], true) + ",";
                }
                if (max > -1) {
                  str += stringify(val[i], true);
                }
                return str + "]";
              } else if (toStr === "[object Object]") {
                keys = objKeys(val).sort();
                max = keys.length;
                str = "";
                i = 0;
                while (i < max) {
                  key = keys[i];
                  propVal = stringify(val[key], false);
                  if (propVal !== void 0) {
                    if (str) {
                      str += ",";
                    }
                    str += JSON.stringify(key) + ":" + propVal;
                  }
                  i++;
                }
                return "{" + str + "}";
              } else {
                return JSON.stringify(val);
              }
            }
          case "function":
          case "undefined":
            return isArrayProp ? null : void 0;
          case "string":
            return JSON.stringify(val);
          default:
            return isFinite(val) ? val : null;
        }
      }
      module.exports = function(val) {
        var returnVal = stringify(val, false);
        if (returnVal !== void 0) {
          return "" + returnVal;
        }
      };
    }
  });

  // src/index.ts
  init_env_shim();

  // ../accounts/dist/index.browser.js
  init_env_shim();

  // ../errors/dist/index.browser.js
  init_env_shim();
  var SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 1;
  var SOLANA_ERROR__INVALID_NONCE = 2;
  var SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 3;
  var SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 4;
  var SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 5;
  var SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 6;
  var SOLANA_ERROR__MALFORMED_BIGINT_STRING = 7;
  var SOLANA_ERROR__MALFORMED_NUMBER_STRING = 8;
  var SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 9;
  var SOLANA_ERROR__JSON_RPC__PARSE_ERROR = -32700;
  var SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = -32603;
  var SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = -32602;
  var SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = -32601;
  var SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = -32600;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = -32016;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = -32015;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = -32014;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = -32013;
  var SOLANA_ERROR__JSON_RPC__SCAN_ERROR = -32012;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = -32011;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = -32010;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = -32009;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = -32008;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = -32007;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = -32006;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = -32005;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = -32004;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = -32003;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = -32002;
  var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = -32001;
  var SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = 28e5;
  var SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = 2800001;
  var SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = 2800002;
  var SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = 2800003;
  var SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = 2800004;
  var SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = 2800005;
  var SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006;
  var SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007;
  var SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = 2800008;
  var SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009;
  var SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = 2800010;
  var SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = 323e4;
  var SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300001;
  var SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = 3230002;
  var SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = 3230003;
  var SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230004;
  var SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = 361e4;
  var SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = 3610001;
  var SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = 3610002;
  var SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = 3610003;
  var SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = 3610004;
  var SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = 3610005;
  var SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = 3610006;
  var SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = 3704e3;
  var SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001;
  var SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = 3704002;
  var SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003;
  var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = 4128e3;
  var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = 4128001;
  var SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = 4128002;
  var SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = 4615e3;
  var SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = 4615001;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = 4615002;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = 4615003;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = 4615004;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = 4615005;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = 4615006;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = 4615007;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = 4615008;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = 4615009;
  var SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = 4615010;
  var SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = 4615011;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = 4615012;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014;
  var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = 4615015;
  var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = 4615016;
  var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = 4615017;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = 4615018;
  var SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = 4615019;
  var SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = 4615020;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = 4615021;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = 4615022;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = 4615023;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 4615024;
  var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025;
  var SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = 4615026;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = 4615027;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = 4615028;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = 4615029;
  var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030;
  var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = 4615031;
  var SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = 4615032;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = 4615033;
  var SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = 4615034;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4615035;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = 4615036;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = 4615037;
  var SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = 4615038;
  var SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = 4615039;
  var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040;
  var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = 4615041;
  var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = 4615042;
  var SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = 4615043;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = 4615044;
  var SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = 4615045;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = 4615046;
  var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = 4615047;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = 4615048;
  var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = 4615049;
  var SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = 4615050;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = 4615052;
  var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053;
  var SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054;
  var SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508e3;
  var SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = 5508001;
  var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = 5508002;
  var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003;
  var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004;
  var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = 5508005;
  var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006;
  var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007;
  var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008;
  var SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009;
  var SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = 5508010;
  var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663e3;
  var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663001;
  var SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = 5663002;
  var SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = 5663003;
  var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = 5663004;
  var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663005;
  var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663006;
  var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663007;
  var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663008;
  var SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = 5663009;
  var SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = 5663010;
  var SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = 5663011;
  var SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = 5663012;
  var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = 5663013;
  var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = 5663014;
  var SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = 705e4;
  var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = 7050001;
  var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = 7050002;
  var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = 7050003;
  var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = 7050004;
  var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = 7050005;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = 7050006;
  var SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = 7050007;
  var SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = 7050008;
  var SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = 7050009;
  var SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = 7050010;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = 7050011;
  var SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = 7050012;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = 7050013;
  var SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = 7050014;
  var SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = 7050015;
  var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 7050016;
  var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017;
  var SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = 7050018;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = 7050019;
  var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020;
  var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021;
  var SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = 7050022;
  var SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = 7050027;
  var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028;
  var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029;
  var SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = 7050030;
  var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = 7050031;
  var SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032;
  var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033;
  var SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = 7050034;
  var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035;
  var SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = 7050036;
  var SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078e3;
  var SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001;
  var SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = 8078002;
  var SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = 8078003;
  var SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004;
  var SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005;
  var SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006;
  var SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = 8078007;
  var SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008;
  var SOLANA_ERROR__CODECS__INVALID_DATA_ENUM_VARIANT = 8078009;
  var SOLANA_ERROR__CODECS__INVALID_SCALAR_ENUM_VARIANT = 8078010;
  var SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
  var SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = 8078012;
  var SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = 8078013;
  var SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = 8078014;
  var SOLANA_ERROR__RPC__INTEGER_OVERFLOW = 81e5;
  var SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = 8100001;
  var SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = 8100002;
  var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_REQUEST = 819e4;
  var SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001;
  var SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002;
  var SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CONNECTION_CLOSED = 8190003;
  var SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_FAILED_TO_CONNECT = 8190004;
  var SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING = 99e5;
  var SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = 9900001;
  var SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002;
  var SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = 9900003;
  var SolanaErrorMessages = {
    [SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND]: "Account not found at address: $address",
    [SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
    [SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT]: "Expected decoded account at address: $address",
    [SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT]: "Failed to decode account data at address: $address",
    [SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND]: "Accounts not found at addresses: $addresses",
    [SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED]: "Unable to find a viable program address bump seed.",
    [SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS]: "$putativeAddress is not a base58-encoded address.",
    [SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY]: "The `CryptoKey` must be an `Ed25519` public key.",
    [SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE]: "Invalid seeds; point must fall off the Ed25519 curve.",
    [SOLANA_ERROR__ADDRESSES__MALFORMED_PDA]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
    [SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
    [SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
    [SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
    [SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER]: "Program address cannot end with PDA marker.",
    [SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
    [SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
    [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED]: "The network has progressed past the last block for which this transaction could have been committed.",
    [SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY]: "Codec [$codecDescription] cannot decode empty byte arrays.",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH]: "Encoder and decoder must either both be fixed-size or variable-size.",
    [SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE]: "Enum discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
    [SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH]: "Expected a fixed-size codec, got a variable-size one.",
    [SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
    [SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH]: "Expected a variable-size codec, got a fixed-size one.",
    [SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
    [SOLANA_ERROR__CODECS__INVALID_DATA_ENUM_VARIANT]: "Invalid data enum variant. Expected one of [$variants], got $value.",
    [SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS]: "Expected [$codecDescription] to have $expected items, got $actual.",
    [SOLANA_ERROR__CODECS__INVALID_SCALAR_ENUM_VARIANT]: "Invalid scalar enum variant. Expected one of [$variants] or a number between $minRange and $maxRange, got $value.",
    [SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE]: "Invalid value $value for base $base with alphabet $alphabet.",
    [SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
    [SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED]: "instruction requires an uninitialized account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED]: "instruction tries to borrow reference for an account which is already borrowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "instruction left account with an outstanding borrowed reference",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED]: "program other than the account's owner changed the size of the account data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL]: "account data too small for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE]: "instruction expected an executable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT]: "An account does not have enough lamports to be rent-exempt",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW]: "Program arithmetic overflowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR]: "Failed to serialize or deserialize account data: $encodedData",
    [SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS]: "Builtin programs must consume compute units",
    [SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH]: "Cross-program invocation call depth too deep",
    [SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED]: "Computational budget exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM]: "custom program error: #$code",
    [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX]: "instruction contains duplicate accounts",
    [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC]: "instruction modifications of multiply-passed account differ",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT]: "executable accounts must be rent exempt",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED]: "instruction changed executable accounts data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE]: "instruction changed the balance of an executable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED]: "instruction changed executable bit of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED]: "instruction modified data of an account it does not own",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND]: "instruction spent from the balance of an account it does not own",
    [SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR]: "generic instruction error",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER]: "Provided owner is not allowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE]: "Account is immutable",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY]: "Incorrect authority provided",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID]: "incorrect program id for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS]: "insufficient funds for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA]: "invalid account data for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER]: "Invalid account owner",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT]: "invalid program argument",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR]: "program returned invalid error code",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA]: "invalid instruction data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC]: "Failed to reallocate account data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS]: "Provided seeds do not result in a valid address",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED]: "Accounts data allocations exceeded the maximum allowed per transaction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED]: "Max accounts exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED]: "Max instruction trace length exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED]: "Length of the seed is too long for address generation",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT]: "An account required by the instruction is missing",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE]: "missing required signature for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID]: "instruction illegally modified the program id of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS]: "insufficient account keys for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION]: "Cross-program invocation with unauthorized signer or writable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE]: "Failed to create program execution environment",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE]: "Program failed to compile",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE]: "Program failed to complete",
    [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED]: "instruction modified data of a read-only account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE]: "instruction changed the balance of a read-only account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED]: "Cross-program invocation reentrancy not allowed for this instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED]: "instruction modified rent epoch of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION]: "sum of account balances before and after instruction do not match",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT]: "instruction requires an initialized account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN]: "",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID]: "Unsupported program id",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR]: "Unsupported sysvar",
    [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS]: "The instruction does not have any accounts.",
    [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA]: "The instruction does not have any data.",
    [SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
    [SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__INVALID_NONCE]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
    [SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__INVALID_PARAMS]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__INVALID_REQUEST]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__PARSE_ERROR]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__SCAN_ERROR]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED]: "Minimum context slot has not been reached",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY]: "Node is unhealthy; behind by $numSlotsBehind slots",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT]: "No snapshot",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE]: "Transaction simulation failed",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE]: "Transaction history is not available from this node",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH]: "Transaction signature length mismatch",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE]: "Transaction signature verification failure",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION]: "$__serverMessage",
    [SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH]: "Key pair bytes must be of length 64, got $byteLength.",
    [SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH]: "Expected private key bytes with length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
    [SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
    [SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE]: "Lamports value must be in the range [0, 2e64-1]",
    [SOLANA_ERROR__MALFORMED_BIGINT_STRING]: "`$value` cannot be parsed as a `BigInt`",
    [SOLANA_ERROR__MALFORMED_NUMBER_STRING]: "`$value` cannot be parsed as a `Number`",
    [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND]: "No nonce account could be found at address `$nonceAccountAddress`",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_REQUEST]: "Either the notification name must end in 'Notifications' or the API must supply a subscription creator function for the notification '$notificationName' to map between the notification name and the subscribe/unsubscribe method names.",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID]: "Failed to obtain a subscription id from the server",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED]: "WebSocket was closed before payload could be added to the send buffer",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CONNECTION_CLOSED]: "WebSocket connection closed",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_FAILED_TO_CONNECT]: "WebSocket failed to connect",
    [SOLANA_ERROR__RPC__INTEGER_OVERFLOW]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
    [SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR]: "HTTP error ($statusCode): $message",
    [SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
    [SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
    [SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER]: "The provided value does not implement the `KeyPairSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER]: "The provided value does not implement the `MessageModifyingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER]: "The provided value does not implement the `MessagePartialSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER]: "The provided value does not implement any of the `MessageSigner` interfaces",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER]: "The provided value does not implement the `TransactionModifyingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER]: "The provided value does not implement the `TransactionPartialSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER]: "The provided value does not implement the `TransactionSendingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER]: "The provided value does not implement any of the `TransactionSigner` interfaces",
    [SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS]: "More than one `TransactionSendingSigner` was identified.",
    [SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING]: "No `TransactionSendingSigner` was identified. Please provide a valid `ITransactionWithSingleSendingSigner` transaction.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED]: "No digest implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED]: "This runtime does not support the generation of Ed25519 key pairs.\n\nInstall and import `@solana/webcrypto-ed25519-polyfill` before generating keys in environments that do not support Ed25519.\n\nFor a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED]: "No signature verification implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED]: "No key generation implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED]: "No signing implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED]: "No key export implementation could be found.",
    [SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE]: "Timestamp value must be in the range [-8.64e15, 8.64e15]. `$value` given",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "Transaction processing left an account with an outstanding borrowed reference",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE]: "Account in use",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE]: "Account loaded twice",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND]: "Attempt to debit an account but found no record of a prior credit.",
    [SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND]: "Transaction loads an address table account that doesn't exist",
    [SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED]: "This transaction has already been processed",
    [SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND]: "Blockhash not found",
    [SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP]: "Loader call chain is too deep",
    [SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE]: "Transactions are currently disabled due to cluster maintenance",
    [SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION]: "Transaction contains a duplicate instruction ($index) that is not allowed",
    [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE]: "Insufficient funds for fee",
    [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE]: "This account may not be used to pay transaction fees",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX]: "Transaction contains an invalid account reference",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA]: "Transaction loads an address table account with invalid data",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX]: "Transaction address table lookup uses an invalid index",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER]: "Transaction loads an address table account with an invalid owner",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION]: "This program may not be used for executing instructions",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT]: "Transaction loads a writable account that cannot be written",
    [SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED]: "Transaction exceeded max loaded accounts data size cap",
    [SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE]: "Transaction requires a fee but has no signature present",
    [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND]: "Attempt to load a program that does not exist",
    [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
    [SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED]: "ResanitizationNeeded",
    [SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE]: "Transaction failed to sanitize accounts offsets correctly",
    [SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE]: "Transaction did not pass signature verification",
    [SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS]: "Transaction locked too many accounts",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION]: "Sum of account balances before and after transaction do not match",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN]: "The transaction failed with the error `$errorName`",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION]: "Transaction version is unsupported",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT]: "Transaction would exceed account data limit within the block",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT]: "Transaction would exceed total account data limit",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT]: "Transaction would exceed max account limit within the block",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT]: "Transaction would exceed max Block Cost Limit",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT]: "Transaction would exceed max Vote Cost Limit",
    [SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING]: "Transaction is missing an address at index: $index.",
    [SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME]: "Transaction does not have a blockhash lifetime",
    [SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME]: "Transaction is not a durable nonce transaction",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING]: "No fee payer set in CompiledTransaction",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND]: "Could not find program address at index $index",
    [SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING]: "Transaction is missing a fee payer.",
    [SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
    [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE]: "Transaction first instruction is not advance nonce account instruction.",
    [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING]: "Transaction with no instructions cannot be durable nonce transaction.",
    [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
    [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
    [SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING]: "Transaction is missing signatures for addresses: $addresses.",
    [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
  };
  function getHumanReadableErrorMessage(code, context = {}) {
    const messageFormatString = SolanaErrorMessages[code];
    const message = messageFormatString.replace(
      new RegExp("(?<!\\\\)\\$(\\w+)", "g"),
      (substring, variableName) => variableName in context ? `${context[variableName]}` : substring
    );
    return message;
  }
  function getErrorMessage(code, context = {}) {
    {
      return getHumanReadableErrorMessage(code, context);
    }
  }
  function isSolanaError(e3, code) {
    const isSolanaError2 = e3 instanceof Error && e3.name === "SolanaError";
    if (isSolanaError2) {
      if (code !== void 0) {
        return e3.context.__code === code;
      }
      return true;
    }
    return false;
  }
  var SolanaError = class extends Error {
    constructor(...[code, contextAndErrorOptions]) {
      let context;
      let errorOptions;
      if (contextAndErrorOptions) {
        const { cause, ...contextRest } = contextAndErrorOptions;
        if (cause) {
          errorOptions = { cause };
        }
        if (Object.keys(contextRest).length > 0) {
          context = contextRest;
        }
      }
      const message = getErrorMessage(code, context);
      super(message, errorOptions);
      __publicField(this, "context");
      this.context = {
        __code: code,
        ...context
      };
      this.name = "SolanaError";
    }
  };
  function safeCaptureStackTrace(...args) {
    if ("captureStackTrace" in Error && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(...args);
    }
  }
  function getSolanaErrorFromRpcError({ errorCodeBaseOffset, getErrorContext, orderedErrorNames, rpcEnumError }, constructorOpt) {
    let rpcErrorName;
    let rpcErrorContext;
    if (typeof rpcEnumError === "string") {
      rpcErrorName = rpcEnumError;
    } else {
      rpcErrorName = Object.keys(rpcEnumError)[0];
      rpcErrorContext = rpcEnumError[rpcErrorName];
    }
    const codeOffset = orderedErrorNames.indexOf(rpcErrorName);
    const errorCode = errorCodeBaseOffset + codeOffset;
    const errorContext = getErrorContext(errorCode, rpcErrorName, rpcErrorContext);
    const err = new SolanaError(errorCode, errorContext);
    safeCaptureStackTrace(err, constructorOpt);
    return err;
  }
  var ORDERED_ERROR_NAMES = [
    // Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/program/src/instruction.rs
    // If this list ever gets too large, consider implementing a compression strategy like this:
    // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
    "GenericError",
    "InvalidArgument",
    "InvalidInstructionData",
    "InvalidAccountData",
    "AccountDataTooSmall",
    "InsufficientFunds",
    "IncorrectProgramId",
    "MissingRequiredSignature",
    "AccountAlreadyInitialized",
    "UninitializedAccount",
    "UnbalancedInstruction",
    "ModifiedProgramId",
    "ExternalAccountLamportSpend",
    "ExternalAccountDataModified",
    "ReadonlyLamportChange",
    "ReadonlyDataModified",
    "DuplicateAccountIndex",
    "ExecutableModified",
    "RentEpochModified",
    "NotEnoughAccountKeys",
    "AccountDataSizeChanged",
    "AccountNotExecutable",
    "AccountBorrowFailed",
    "AccountBorrowOutstanding",
    "DuplicateAccountOutOfSync",
    "Custom",
    "InvalidError",
    "ExecutableDataModified",
    "ExecutableLamportChange",
    "ExecutableAccountNotRentExempt",
    "UnsupportedProgramId",
    "CallDepth",
    "MissingAccount",
    "ReentrancyNotAllowed",
    "MaxSeedLengthExceeded",
    "InvalidSeeds",
    "InvalidRealloc",
    "ComputationalBudgetExceeded",
    "PrivilegeEscalation",
    "ProgramEnvironmentSetupFailure",
    "ProgramFailedToComplete",
    "ProgramFailedToCompile",
    "Immutable",
    "IncorrectAuthority",
    "BorshIoError",
    "AccountNotRentExempt",
    "InvalidAccountOwner",
    "ArithmeticOverflow",
    "UnsupportedSysvar",
    "IllegalOwner",
    "MaxAccountsDataAllocationsExceeded",
    "MaxAccountsExceeded",
    "MaxInstructionTraceLengthExceeded",
    "BuiltinProgramsMustConsumeComputeUnits"
  ];
  function getSolanaErrorFromInstructionError(index, instructionError) {
    return getSolanaErrorFromRpcError(
      {
        errorCodeBaseOffset: 4615001,
        getErrorContext(errorCode, rpcErrorName, rpcErrorContext) {
          if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN) {
            return {
              errorName: rpcErrorName,
              index,
              ...rpcErrorContext !== void 0 ? { instructionErrorContext: rpcErrorContext } : null
            };
          } else if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM) {
            return {
              code: rpcErrorContext,
              index
            };
          } else if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR) {
            return {
              encodedData: rpcErrorContext,
              index
            };
          }
          return { index };
        },
        orderedErrorNames: ORDERED_ERROR_NAMES,
        rpcEnumError: instructionError
      },
      getSolanaErrorFromInstructionError
    );
  }
  var ORDERED_ERROR_NAMES2 = [
    // Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/src/transaction/error.rs
    // If this list ever gets too large, consider implementing a compression strategy like this:
    // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
    "AccountInUse",
    "AccountLoadedTwice",
    "AccountNotFound",
    "ProgramAccountNotFound",
    "InsufficientFundsForFee",
    "InvalidAccountForFee",
    "AlreadyProcessed",
    "BlockhashNotFound",
    // `InstructionError` intentionally omitted; delegated to `getSolanaErrorFromInstructionError`
    "CallChainTooDeep",
    "MissingSignatureForFee",
    "InvalidAccountIndex",
    "SignatureFailure",
    "InvalidProgramForExecution",
    "SanitizeFailure",
    "ClusterMaintenance",
    "AccountBorrowOutstanding",
    "WouldExceedMaxBlockCostLimit",
    "UnsupportedVersion",
    "InvalidWritableAccount",
    "WouldExceedMaxAccountCostLimit",
    "WouldExceedAccountDataBlockLimit",
    "TooManyAccountLocks",
    "AddressLookupTableNotFound",
    "InvalidAddressLookupTableOwner",
    "InvalidAddressLookupTableData",
    "InvalidAddressLookupTableIndex",
    "InvalidRentPayingAccount",
    "WouldExceedMaxVoteCostLimit",
    "WouldExceedAccountDataTotalLimit",
    "DuplicateInstruction",
    "InsufficientFundsForRent",
    "MaxLoadedAccountsDataSizeExceeded",
    "InvalidLoadedAccountsDataSizeLimit",
    "ResanitizationNeeded",
    "ProgramExecutionTemporarilyRestricted",
    "UnbalancedTransaction"
  ];
  function getSolanaErrorFromTransactionError(transactionError) {
    if (typeof transactionError === "object" && "InstructionError" in transactionError) {
      return getSolanaErrorFromInstructionError(
        ...transactionError.InstructionError
      );
    }
    return getSolanaErrorFromRpcError(
      {
        errorCodeBaseOffset: 7050001,
        getErrorContext(errorCode, rpcErrorName, rpcErrorContext) {
          if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN) {
            return {
              errorName: rpcErrorName,
              ...rpcErrorContext !== void 0 ? { transactionErrorContext: rpcErrorContext } : null
            };
          } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION) {
            return {
              index: rpcErrorContext
            };
          } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT || errorCode === SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED) {
            return {
              accountIndex: rpcErrorContext.account_index
            };
          }
        },
        orderedErrorNames: ORDERED_ERROR_NAMES2,
        rpcEnumError: transactionError
      },
      getSolanaErrorFromTransactionError
    );
  }
  function getSolanaErrorFromJsonRpcError({ code, data, message }) {
    let out;
    if (code === SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE) {
      const { err, ...preflightErrorContext } = data;
      const causeObject = err ? { cause: getSolanaErrorFromTransactionError(err) } : null;
      out = new SolanaError(SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE, {
        ...preflightErrorContext,
        ...causeObject
      });
    } else {
      let errorContext;
      switch (code) {
        case SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR:
        case SOLANA_ERROR__JSON_RPC__INVALID_PARAMS:
        case SOLANA_ERROR__JSON_RPC__INVALID_REQUEST:
        case SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND:
        case SOLANA_ERROR__JSON_RPC__PARSE_ERROR:
        case SOLANA_ERROR__JSON_RPC__SCAN_ERROR:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION:
          errorContext = { __serverMessage: message };
          break;
        default:
          if (typeof data === "object" && !Array.isArray(data)) {
            errorContext = data;
          }
      }
      out = new SolanaError(code, errorContext);
    }
    safeCaptureStackTrace(out, getSolanaErrorFromJsonRpcError);
    return out;
  }

  // ../codecs-strings/dist/index.browser.js
  init_env_shim();

  // ../codecs-core/dist/index.browser.js
  init_env_shim();
  function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset = 0) {
    if (bytes.length - offset <= 0) {
      throw new SolanaError(SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY, {
        codecDescription
      });
    }
  }
  function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset = 0) {
    const bytesLength = bytes.length - offset;
    if (bytesLength < expected) {
      throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
        bytesLength,
        codecDescription,
        expected
      });
    }
  }
  function assertByteArrayOffsetIsNotOutOfRange(codecDescription, offset, bytesLength) {
    if (offset < 0 || offset > bytesLength) {
      throw new SolanaError(SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE, {
        bytesLength,
        codecDescription,
        offset
      });
    }
  }
  var mergeBytes = (byteArrays) => {
    const nonEmptyByteArrays = byteArrays.filter((arr) => arr.length);
    if (nonEmptyByteArrays.length === 0) {
      return byteArrays.length ? byteArrays[0] : new Uint8Array();
    }
    if (nonEmptyByteArrays.length === 1) {
      return nonEmptyByteArrays[0];
    }
    const totalLength = nonEmptyByteArrays.reduce((total, arr) => total + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    nonEmptyByteArrays.forEach((arr) => {
      result.set(arr, offset);
      offset += arr.length;
    });
    return result;
  };
  var padBytes = (bytes, length) => {
    if (bytes.length >= length)
      return bytes;
    const paddedBytes = new Uint8Array(length).fill(0);
    paddedBytes.set(bytes);
    return paddedBytes;
  };
  var fixBytes = (bytes, length) => padBytes(bytes.length <= length ? bytes : bytes.slice(0, length), length);
  function getEncodedSize(value, encoder) {
    return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
  }
  function createEncoder(encoder) {
    return Object.freeze({
      ...encoder,
      encode: (value) => {
        const bytes = new Uint8Array(getEncodedSize(value, encoder));
        encoder.write(value, bytes, 0);
        return bytes;
      }
    });
  }
  function createDecoder(decoder) {
    return Object.freeze({
      ...decoder,
      decode: (bytes, offset = 0) => decoder.read(bytes, offset)[0]
    });
  }
  function createCodec(codec) {
    return Object.freeze({
      ...codec,
      decode: (bytes, offset = 0) => codec.read(bytes, offset)[0],
      encode: (value) => {
        const bytes = new Uint8Array(getEncodedSize(value, codec));
        codec.write(value, bytes, 0);
        return bytes;
      }
    });
  }
  function isFixedSize(codec) {
    return "fixedSize" in codec && typeof codec.fixedSize === "number";
  }
  function assertIsFixedSize(codec) {
    if (!isFixedSize(codec)) {
      throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH);
    }
  }
  function isVariableSize(codec) {
    return !isFixedSize(codec);
  }
  function assertIsVariableSize(codec) {
    if (!isVariableSize(codec)) {
      throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH);
    }
  }
  function combineCodec(encoder, decoder) {
    if (isFixedSize(encoder) !== isFixedSize(decoder)) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH);
    }
    if (isFixedSize(encoder) && isFixedSize(decoder) && encoder.fixedSize !== decoder.fixedSize) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH, {
        decoderFixedSize: decoder.fixedSize,
        encoderFixedSize: encoder.fixedSize
      });
    }
    if (!isFixedSize(encoder) && !isFixedSize(decoder) && encoder.maxSize !== decoder.maxSize) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH, {
        decoderMaxSize: decoder.maxSize,
        encoderMaxSize: encoder.maxSize
      });
    }
    return {
      ...decoder,
      ...encoder,
      decode: decoder.decode,
      encode: encoder.encode,
      read: decoder.read,
      write: encoder.write
    };
  }
  function fixEncoder(encoder, fixedBytes) {
    return createEncoder({
      fixedSize: fixedBytes,
      write: (value, bytes, offset) => {
        const variableByteArray = encoder.encode(value);
        const fixedByteArray = variableByteArray.length > fixedBytes ? variableByteArray.slice(0, fixedBytes) : variableByteArray;
        bytes.set(fixedByteArray, offset);
        return offset + fixedBytes;
      }
    });
  }
  function fixDecoder(decoder, fixedBytes) {
    return createDecoder({
      fixedSize: fixedBytes,
      read: (bytes, offset) => {
        assertByteArrayHasEnoughBytesForCodec("fixCodec", fixedBytes, bytes, offset);
        if (offset > 0 || bytes.length > fixedBytes) {
          bytes = bytes.slice(offset, offset + fixedBytes);
        }
        if (isFixedSize(decoder)) {
          bytes = fixBytes(bytes, decoder.fixedSize);
        }
        const [value] = decoder.read(bytes, 0);
        return [value, offset + fixedBytes];
      }
    });
  }
  function fixCodec(codec, fixedBytes) {
    return combineCodec(fixEncoder(codec, fixedBytes), fixDecoder(codec, fixedBytes));
  }
  function mapEncoder(encoder, unmap) {
    return createEncoder({
      ...isVariableSize(encoder) ? { ...encoder, getSizeFromValue: (value) => encoder.getSizeFromValue(unmap(value)) } : encoder,
      write: (value, bytes, offset) => encoder.write(unmap(value), bytes, offset)
    });
  }
  function mapDecoder(decoder, map) {
    return createDecoder({
      ...decoder,
      read: (bytes, offset) => {
        const [value, newOffset] = decoder.read(bytes, offset);
        return [map(value, bytes, offset), newOffset];
      }
    });
  }
  function mapCodec(codec, unmap, map) {
    return createCodec({
      ...mapEncoder(codec, unmap),
      read: map ? mapDecoder(codec, map).read : codec.read
    });
  }
  function offsetEncoder(encoder, config) {
    return createEncoder({
      ...encoder,
      write: (value, bytes, preOffset) => {
        const wrapBytes = (offset) => modulo(offset, bytes.length);
        const newPreOffset = config.preOffset ? config.preOffset({ bytes, preOffset, wrapBytes }) : preOffset;
        assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPreOffset, bytes.length);
        const postOffset = encoder.write(value, bytes, newPreOffset);
        const newPostOffset = config.postOffset ? config.postOffset({ bytes, newPreOffset, postOffset, preOffset, wrapBytes }) : postOffset;
        assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPostOffset, bytes.length);
        return newPostOffset;
      }
    });
  }
  function offsetDecoder(decoder, config) {
    return createDecoder({
      ...decoder,
      read: (bytes, preOffset) => {
        const wrapBytes = (offset) => modulo(offset, bytes.length);
        const newPreOffset = config.preOffset ? config.preOffset({ bytes, preOffset, wrapBytes }) : preOffset;
        assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPreOffset, bytes.length);
        const [value, postOffset] = decoder.read(bytes, newPreOffset);
        const newPostOffset = config.postOffset ? config.postOffset({ bytes, newPreOffset, postOffset, preOffset, wrapBytes }) : postOffset;
        assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPostOffset, bytes.length);
        return [value, newPostOffset];
      }
    });
  }
  function offsetCodec(codec, config) {
    return combineCodec(offsetEncoder(codec, config), offsetDecoder(codec, config));
  }
  function modulo(dividend, divisor) {
    if (divisor === 0)
      return 0;
    return (dividend % divisor + divisor) % divisor;
  }
  function resizeEncoder(encoder, resize) {
    if (isFixedSize(encoder)) {
      const fixedSize = resize(encoder.fixedSize);
      if (fixedSize < 0) {
        throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH, {
          bytesLength: fixedSize,
          codecDescription: "resizeEncoder"
        });
      }
      return createEncoder({ ...encoder, fixedSize });
    }
    return createEncoder({
      ...encoder,
      getSizeFromValue: (value) => {
        const newSize = resize(encoder.getSizeFromValue(value));
        if (newSize < 0) {
          throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH, {
            bytesLength: newSize,
            codecDescription: "resizeEncoder"
          });
        }
        return newSize;
      }
    });
  }
  function resizeDecoder(decoder, resize) {
    if (isFixedSize(decoder)) {
      const fixedSize = resize(decoder.fixedSize);
      if (fixedSize < 0) {
        throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH, {
          bytesLength: fixedSize,
          codecDescription: "resizeDecoder"
        });
      }
      return createDecoder({ ...decoder, fixedSize });
    }
    return decoder;
  }
  function resizeCodec(codec, resize) {
    return combineCodec(resizeEncoder(codec, resize), resizeDecoder(codec, resize));
  }
  function padLeftEncoder(encoder, offset) {
    return offsetEncoder(
      resizeEncoder(encoder, (size) => size + offset),
      { preOffset: ({ preOffset }) => preOffset + offset }
    );
  }
  function padRightEncoder(encoder, offset) {
    return offsetEncoder(
      resizeEncoder(encoder, (size) => size + offset),
      { postOffset: ({ postOffset }) => postOffset + offset }
    );
  }
  function padLeftDecoder(decoder, offset) {
    return offsetDecoder(
      resizeDecoder(decoder, (size) => size + offset),
      { preOffset: ({ preOffset }) => preOffset + offset }
    );
  }
  function padRightDecoder(decoder, offset) {
    return offsetDecoder(
      resizeDecoder(decoder, (size) => size + offset),
      { postOffset: ({ postOffset }) => postOffset + offset }
    );
  }
  function padLeftCodec(codec, offset) {
    return combineCodec(padLeftEncoder(codec, offset), padLeftDecoder(codec, offset));
  }
  function padRightCodec(codec, offset) {
    return combineCodec(padRightEncoder(codec, offset), padRightDecoder(codec, offset));
  }
  function reverseEncoder(encoder) {
    assertIsFixedSize(encoder);
    return createEncoder({
      ...encoder,
      write: (value, bytes, offset) => {
        const newOffset = encoder.write(value, bytes, offset);
        const slice = bytes.slice(offset, offset + encoder.fixedSize).reverse();
        bytes.set(slice, offset);
        return newOffset;
      }
    });
  }
  function reverseDecoder(decoder) {
    assertIsFixedSize(decoder);
    return createDecoder({
      ...decoder,
      read: (bytes, offset) => {
        const reverseEnd = offset + decoder.fixedSize;
        if (offset === 0 && bytes.length === reverseEnd) {
          return decoder.read(bytes.reverse(), offset);
        }
        const reversedBytes = bytes.slice();
        reversedBytes.set(bytes.slice(offset, reverseEnd).reverse(), offset);
        return decoder.read(reversedBytes, offset);
      }
    });
  }
  function reverseCodec(codec) {
    return combineCodec(reverseEncoder(codec), reverseDecoder(codec));
  }

  // ../codecs-numbers/dist/index.browser.js
  init_env_shim();
  function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
      throw new SolanaError(SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
        codecDescription,
        max,
        min,
        value
      });
    }
  }
  var Endian = /* @__PURE__ */ ((Endian2) => {
    Endian2[Endian2["LITTLE"] = 0] = "LITTLE";
    Endian2[Endian2["BIG"] = 1] = "BIG";
    return Endian2;
  })(Endian || {});
  function isLittleEndian(config) {
    return (config == null ? void 0 : config.endian) === 1 ? false : true;
  }
  function numberEncoderFactory(input) {
    return createEncoder({
      fixedSize: input.size,
      write(value, bytes, offset) {
        if (input.range) {
          assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
        }
        const arrayBuffer = new ArrayBuffer(input.size);
        input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
        bytes.set(new Uint8Array(arrayBuffer), offset);
        return offset + input.size;
      }
    });
  }
  function numberDecoderFactory(input) {
    return createDecoder({
      fixedSize: input.size,
      read(bytes, offset = 0) {
        assertByteArrayIsNotEmptyForCodec(input.name, bytes, offset);
        assertByteArrayHasEnoughBytesForCodec(input.name, input.size, bytes, offset);
        const view = new DataView(toArrayBuffer(bytes, offset, input.size));
        return [input.get(view, isLittleEndian(input.config)), offset + input.size];
      }
    });
  }
  function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset != null ? offset : 0);
    const bytesLength = length != null ? length : bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
  }
  var getF32Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "f32",
    set: (view, value, le) => view.setFloat32(0, value, le),
    size: 4
  });
  var getF32Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getFloat32(0, le),
    name: "f32",
    size: 4
  });
  var getF32Codec = (config = {}) => combineCodec(getF32Encoder(config), getF32Decoder(config));
  var getF64Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "f64",
    set: (view, value, le) => view.setFloat64(0, value, le),
    size: 8
  });
  var getF64Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getFloat64(0, le),
    name: "f64",
    size: 8
  });
  var getF64Codec = (config = {}) => combineCodec(getF64Encoder(config), getF64Decoder(config));
  var getI128Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "i128",
    range: [-BigInt("0x7fffffffffffffffffffffffffffffff") - 1n, BigInt("0x7fffffffffffffffffffffffffffffff")],
    set: (view, value, le) => {
      const leftOffset = le ? 8 : 0;
      const rightOffset = le ? 0 : 8;
      const rightMask = 0xffffffffffffffffn;
      view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
      view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
    },
    size: 16
  });
  var getI128Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => {
      const leftOffset = le ? 8 : 0;
      const rightOffset = le ? 0 : 8;
      const left = view.getBigInt64(leftOffset, le);
      const right = view.getBigUint64(rightOffset, le);
      return (left << 64n) + right;
    },
    name: "i128",
    size: 16
  });
  var getI128Codec = (config = {}) => combineCodec(getI128Encoder(config), getI128Decoder(config));
  var getI16Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "i16",
    range: [-Number("0x7fff") - 1, Number("0x7fff")],
    set: (view, value, le) => view.setInt16(0, value, le),
    size: 2
  });
  var getI16Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getInt16(0, le),
    name: "i16",
    size: 2
  });
  var getI16Codec = (config = {}) => combineCodec(getI16Encoder(config), getI16Decoder(config));
  var getI32Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "i32",
    range: [-Number("0x7fffffff") - 1, Number("0x7fffffff")],
    set: (view, value, le) => view.setInt32(0, value, le),
    size: 4
  });
  var getI32Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getInt32(0, le),
    name: "i32",
    size: 4
  });
  var getI32Codec = (config = {}) => combineCodec(getI32Encoder(config), getI32Decoder(config));
  var getI64Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "i64",
    range: [-BigInt("0x7fffffffffffffff") - 1n, BigInt("0x7fffffffffffffff")],
    set: (view, value, le) => view.setBigInt64(0, BigInt(value), le),
    size: 8
  });
  var getI64Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getBigInt64(0, le),
    name: "i64",
    size: 8
  });
  var getI64Codec = (config = {}) => combineCodec(getI64Encoder(config), getI64Decoder(config));
  var getI8Encoder = () => numberEncoderFactory({
    name: "i8",
    range: [-Number("0x7f") - 1, Number("0x7f")],
    set: (view, value) => view.setInt8(0, value),
    size: 1
  });
  var getI8Decoder = () => numberDecoderFactory({
    get: (view) => view.getInt8(0),
    name: "i8",
    size: 1
  });
  var getI8Codec = () => combineCodec(getI8Encoder(), getI8Decoder());
  var getShortU16Encoder = () => createEncoder({
    getSizeFromValue: (value) => {
      if (value <= 127)
        return 1;
      if (value <= 16383)
        return 2;
      return 3;
    },
    maxSize: 3,
    write: (value, bytes, offset) => {
      assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
      const shortU16Bytes = [0];
      for (let ii = 0; ; ii += 1) {
        const alignedValue = value >> ii * 7;
        if (alignedValue === 0) {
          break;
        }
        const nextSevenBits = 127 & alignedValue;
        shortU16Bytes[ii] = nextSevenBits;
        if (ii > 0) {
          shortU16Bytes[ii - 1] |= 128;
        }
      }
      bytes.set(shortU16Bytes, offset);
      return offset + shortU16Bytes.length;
    }
  });
  var getShortU16Decoder = () => createDecoder({
    maxSize: 3,
    read: (bytes, offset) => {
      let value = 0;
      let byteCount = 0;
      while (++byteCount) {
        const byteIndex = byteCount - 1;
        const currentByte = bytes[offset + byteIndex];
        const nextSevenBits = 127 & currentByte;
        value |= nextSevenBits << byteIndex * 7;
        if ((currentByte & 128) === 0) {
          break;
        }
      }
      return [value, offset + byteCount];
    }
  });
  var getShortU16Codec = () => combineCodec(getShortU16Encoder(), getShortU16Decoder());
  var getU128Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "u128",
    range: [0n, BigInt("0xffffffffffffffffffffffffffffffff")],
    set: (view, value, le) => {
      const leftOffset = le ? 8 : 0;
      const rightOffset = le ? 0 : 8;
      const rightMask = 0xffffffffffffffffn;
      view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
      view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
    },
    size: 16
  });
  var getU128Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => {
      const leftOffset = le ? 8 : 0;
      const rightOffset = le ? 0 : 8;
      const left = view.getBigUint64(leftOffset, le);
      const right = view.getBigUint64(rightOffset, le);
      return (left << 64n) + right;
    },
    name: "u128",
    size: 16
  });
  var getU128Codec = (config = {}) => combineCodec(getU128Encoder(config), getU128Decoder(config));
  var getU16Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "u16",
    range: [0, Number("0xffff")],
    set: (view, value, le) => view.setUint16(0, value, le),
    size: 2
  });
  var getU16Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getUint16(0, le),
    name: "u16",
    size: 2
  });
  var getU16Codec = (config = {}) => combineCodec(getU16Encoder(config), getU16Decoder(config));
  var getU32Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "u32",
    range: [0, Number("0xffffffff")],
    set: (view, value, le) => view.setUint32(0, value, le),
    size: 4
  });
  var getU32Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getUint32(0, le),
    name: "u32",
    size: 4
  });
  var getU32Codec = (config = {}) => combineCodec(getU32Encoder(config), getU32Decoder(config));
  var getU64Encoder = (config = {}) => numberEncoderFactory({
    config,
    name: "u64",
    range: [0n, BigInt("0xffffffffffffffff")],
    set: (view, value, le) => view.setBigUint64(0, BigInt(value), le),
    size: 8
  });
  var getU64Decoder = (config = {}) => numberDecoderFactory({
    config,
    get: (view, le) => view.getBigUint64(0, le),
    name: "u64",
    size: 8
  });
  var getU64Codec = (config = {}) => combineCodec(getU64Encoder(config), getU64Decoder(config));
  var getU8Encoder = () => numberEncoderFactory({
    name: "u8",
    range: [0, Number("0xff")],
    set: (view, value) => view.setUint8(0, value),
    size: 1
  });
  var getU8Decoder = () => numberDecoderFactory({
    get: (view) => view.getUint8(0),
    name: "u8",
    size: 1
  });
  var getU8Codec = () => combineCodec(getU8Encoder(), getU8Decoder());

  // ../codecs-strings/dist/index.browser.js
  function assertValidBaseString(alphabet4, testValue, givenValue = testValue) {
    if (!testValue.match(new RegExp(`^[${alphabet4}]*$`))) {
      throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
        alphabet: alphabet4,
        base: alphabet4.length,
        value: givenValue
      });
    }
  }
  var getBaseXEncoder = (alphabet4) => {
    return createEncoder({
      getSizeFromValue: (value) => {
        const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
        if (!tailChars)
          return value.length;
        const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
        return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
      },
      write(value, bytes, offset) {
        assertValidBaseString(alphabet4, value);
        if (value === "")
          return offset;
        const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
        if (!tailChars) {
          bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
          return offset + leadingZeroes.length;
        }
        let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
        const tailBytes = [];
        while (base10Number > 0n) {
          tailBytes.unshift(Number(base10Number % 256n));
          base10Number /= 256n;
        }
        const bytesToAdd = [...Array(leadingZeroes.length).fill(0), ...tailBytes];
        bytes.set(bytesToAdd, offset);
        return offset + bytesToAdd.length;
      }
    });
  };
  var getBaseXDecoder = (alphabet4) => {
    return createDecoder({
      read(rawBytes, offset) {
        const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
        if (bytes.length === 0)
          return ["", 0];
        let trailIndex = bytes.findIndex((n) => n !== 0);
        trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
        const leadingZeroes = alphabet4[0].repeat(trailIndex);
        if (trailIndex === bytes.length)
          return [leadingZeroes, rawBytes.length];
        const base10Number = bytes.slice(trailIndex).reduce((sum, byte) => sum * 256n + BigInt(byte), 0n);
        const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
        return [leadingZeroes + tailChars, rawBytes.length];
      }
    });
  };
  var getBaseXCodec = (alphabet4) => combineCodec(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
  function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp(`((?!${zeroCharacter}).*)`));
    return [leadingZeros, tailChars];
  }
  function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value) {
      sum *= base;
      sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
  }
  function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while (value > 0n) {
      tailChars.unshift(alphabet4[Number(value % base)]);
      value /= base;
    }
    return tailChars.join("");
  }
  var alphabet = "0123456789";
  var getBase10Encoder = () => getBaseXEncoder(alphabet);
  var getBase10Decoder = () => getBaseXDecoder(alphabet);
  var getBase10Codec = () => getBaseXCodec(alphabet);
  var getBase16Encoder = () => createEncoder({
    getSizeFromValue: (value) => Math.ceil(value.length / 2),
    write(value, bytes, offset) {
      const lowercaseValue = value.toLowerCase();
      assertValidBaseString("0123456789abcdef", lowercaseValue, value);
      const matches = lowercaseValue.match(/.{1,2}/g);
      const hexBytes = matches ? matches.map((byte) => parseInt(byte, 16)) : [];
      bytes.set(hexBytes, offset);
      return hexBytes.length + offset;
    }
  });
  var getBase16Decoder = () => createDecoder({
    read(bytes, offset) {
      const value = bytes.slice(offset).reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
      return [value, bytes.length];
    }
  });
  var getBase16Codec = () => combineCodec(getBase16Encoder(), getBase16Decoder());
  var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var getBase58Encoder = () => getBaseXEncoder(alphabet2);
  var getBase58Decoder = () => getBaseXDecoder(alphabet2);
  var getBase58Codec = () => getBaseXCodec(alphabet2);
  var getBaseXResliceEncoder = (alphabet4, bits) => createEncoder({
    getSizeFromValue: (value) => Math.floor(value.length * bits / 8),
    write(value, bytes, offset) {
      assertValidBaseString(alphabet4, value);
      if (value === "")
        return offset;
      const charIndices = [...value].map((c) => alphabet4.indexOf(c));
      const reslicedBytes = reslice(charIndices, bits, 8, false);
      bytes.set(reslicedBytes, offset);
      return reslicedBytes.length + offset;
    }
  });
  var getBaseXResliceDecoder = (alphabet4, bits) => createDecoder({
    read(rawBytes, offset = 0) {
      const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
      if (bytes.length === 0)
        return ["", rawBytes.length];
      const charIndices = reslice([...bytes], 8, bits, true);
      return [charIndices.map((i) => alphabet4[i]).join(""), rawBytes.length];
    }
  });
  var getBaseXResliceCodec = (alphabet4, bits) => combineCodec(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
  function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input) {
      accumulator = accumulator << inputBits | value;
      bitsInAccumulator += inputBits;
      while (bitsInAccumulator >= outputBits) {
        bitsInAccumulator -= outputBits;
        output.push(accumulator >> bitsInAccumulator & mask);
      }
    }
    if (useRemainder && bitsInAccumulator > 0) {
      output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
  }
  var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var getBase64Encoder = () => {
    {
      return createEncoder({
        getSizeFromValue: (value) => {
          try {
            return atob(value).length;
          } catch (e22) {
            throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
              alphabet: alphabet3,
              base: 64,
              value
            });
          }
        },
        write(value, bytes, offset) {
          try {
            const bytesToAdd = atob(value).split("").map((c) => c.charCodeAt(0));
            bytes.set(bytesToAdd, offset);
            return bytesToAdd.length + offset;
          } catch (e22) {
            throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
              alphabet: alphabet3,
              base: 64,
              value
            });
          }
        }
      });
    }
  };
  var getBase64Decoder = () => {
    {
      return createDecoder({
        read(bytes, offset = 0) {
          const slice = bytes.slice(offset);
          const value = btoa(String.fromCharCode(...slice));
          return [value, bytes.length];
        }
      });
    }
  };
  var getBase64Codec = () => combineCodec(getBase64Encoder(), getBase64Decoder());
  var removeNullCharacters = (value) => (
    // eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "")
  );
  var padNullCharacters = (value, chars) => value.padEnd(chars, "\0");
  var e = globalThis.TextDecoder;
  var o = globalThis.TextEncoder;
  var getUtf8Encoder = () => {
    let textEncoder;
    return createEncoder({
      getSizeFromValue: (value) => (textEncoder || (textEncoder = new o())).encode(value).length,
      write: (value, bytes, offset) => {
        const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
        bytes.set(bytesToAdd, offset);
        return offset + bytesToAdd.length;
      }
    });
  };
  var getUtf8Decoder = () => {
    let textDecoder;
    return createDecoder({
      read(bytes, offset) {
        const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
        return [removeNullCharacters(value), bytes.length];
      }
    });
  };
  var getUtf8Codec = () => combineCodec(getUtf8Encoder(), getUtf8Decoder());
  function getStringEncoder(config = {}) {
    var _a, _b;
    const size = (_a = config.size) != null ? _a : getU32Encoder();
    const encoding = (_b = config.encoding) != null ? _b : getUtf8Encoder();
    if (size === "variable") {
      return encoding;
    }
    if (typeof size === "number") {
      return fixEncoder(encoding, size);
    }
    return createEncoder({
      getSizeFromValue: (value) => {
        const contentSize = getEncodedSize(value, encoding);
        return getEncodedSize(contentSize, size) + contentSize;
      },
      write: (value, bytes, offset) => {
        const contentSize = getEncodedSize(value, encoding);
        offset = size.write(contentSize, bytes, offset);
        return encoding.write(value, bytes, offset);
      }
    });
  }
  function getStringDecoder(config = {}) {
    var _a, _b;
    const size = (_a = config.size) != null ? _a : getU32Decoder();
    const encoding = (_b = config.encoding) != null ? _b : getUtf8Decoder();
    if (size === "variable") {
      return encoding;
    }
    if (typeof size === "number") {
      return fixDecoder(encoding, size);
    }
    return createDecoder({
      read: (bytes, offset = 0) => {
        assertByteArrayIsNotEmptyForCodec("string", bytes, offset);
        const [lengthBigInt, lengthOffset] = size.read(bytes, offset);
        const length = Number(lengthBigInt);
        offset = lengthOffset;
        const contentBytes = bytes.slice(offset, offset + length);
        assertByteArrayHasEnoughBytesForCodec("string", length, contentBytes);
        const [value, contentOffset] = encoding.read(contentBytes, 0);
        offset += contentOffset;
        return [value, offset];
      }
    });
  }
  function getStringCodec(config = {}) {
    return combineCodec(getStringEncoder(config), getStringDecoder(config));
  }

  // ../accounts/dist/index.browser.js
  var BASE_ACCOUNT_SIZE = 128;
  function decodeAccount(encodedAccount, decoder) {
    try {
      if ("exists" in encodedAccount && !encodedAccount.exists) {
        return encodedAccount;
      }
      return Object.freeze({ ...encodedAccount, data: decoder.decode(encodedAccount.data) });
    } catch (e3) {
      throw new SolanaError(SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT, {
        address: encodedAccount.address
      });
    }
  }
  function accountExists(account) {
    return !("exists" in account) || "exists" in account && account.exists;
  }
  function assertAccountDecoded(account) {
    if (accountExists(account) && account.data instanceof Uint8Array) {
      throw new SolanaError(SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT, {
        address: account.address
      });
    }
  }
  function assertAccountsDecoded(accounts) {
    const encoded = accounts.filter((a) => accountExists(a) && a.data instanceof Uint8Array);
    if (encoded.length > 0) {
      const encodedAddresses = encoded.map((a) => a.address);
      throw new SolanaError(SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED, {
        addresses: encodedAddresses
      });
    }
  }
  function parseBase64RpcAccount(address2, rpcAccount) {
    if (!rpcAccount)
      return Object.freeze({ address: address2, exists: false });
    const data = getBase64Encoder().encode(rpcAccount.data[0]);
    return Object.freeze({ ...parseBaseAccount(rpcAccount), address: address2, data, exists: true });
  }
  function parseBase58RpcAccount(address2, rpcAccount) {
    if (!rpcAccount)
      return Object.freeze({ address: address2, exists: false });
    const data = getBase58Encoder().encode(typeof rpcAccount.data === "string" ? rpcAccount.data : rpcAccount.data[0]);
    return Object.freeze({ ...parseBaseAccount(rpcAccount), address: address2, data, exists: true });
  }
  function parseJsonRpcAccount(address2, rpcAccount) {
    if (!rpcAccount)
      return Object.freeze({ address: address2, exists: false });
    const data = rpcAccount.data.parsed.info;
    return Object.freeze({ ...parseBaseAccount(rpcAccount), address: address2, data, exists: true });
  }
  function parseBaseAccount(rpcAccount) {
    return Object.freeze({
      executable: rpcAccount.executable,
      lamports: rpcAccount.lamports,
      programAddress: rpcAccount.owner
    });
  }
  async function fetchEncodedAccount(rpc, address2, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getAccountInfo(address2, { ...rpcConfig, encoding: "base64" }).send({ abortSignal });
    return parseBase64RpcAccount(address2, response.value);
  }
  async function fetchJsonParsedAccount(rpc, address2, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const { value: account } = await rpc.getAccountInfo(address2, { ...rpcConfig, encoding: "jsonParsed" }).send({ abortSignal });
    return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(address2, account) : parseBase64RpcAccount(address2, account);
  }
  async function fetchEncodedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, { ...rpcConfig, encoding: "base64" }).send({ abortSignal });
    return response.value.map((account, index) => parseBase64RpcAccount(addresses[index], account));
  }
  async function fetchJsonParsedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, { ...rpcConfig, encoding: "jsonParsed" }).send({ abortSignal });
    return response.value.map((account, index) => {
      return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(addresses[index], account) : parseBase64RpcAccount(addresses[index], account);
    });
  }
  function assertAccountExists(account) {
    if (!account.exists) {
      throw new SolanaError(SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND, { address: account.address });
    }
  }
  function assertAccountsExist(accounts) {
    const missingAccounts = accounts.filter((a) => !a.exists);
    if (missingAccounts.length > 0) {
      const missingAddresses = missingAccounts.map((a) => a.address);
      throw new SolanaError(SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND, { addresses: missingAddresses });
    }
  }

  // ../addresses/dist/index.browser.js
  init_env_shim();

  // ../assertions/dist/index.browser.js
  init_env_shim();
  function assertIsSecureContext() {
    if (!globalThis.isSecureContext) {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT);
    }
  }
  var cachedEd25519Decision;
  async function isEd25519CurveSupported(subtle) {
    if (cachedEd25519Decision === void 0) {
      cachedEd25519Decision = new Promise((resolve) => {
        subtle.generateKey(
          "Ed25519",
          /* extractable */
          false,
          ["sign", "verify"]
        ).catch(() => {
          resolve(cachedEd25519Decision = false);
        }).then(() => {
          resolve(cachedEd25519Decision = true);
        });
      });
    }
    if (typeof cachedEd25519Decision === "boolean") {
      return cachedEd25519Decision;
    } else {
      return await cachedEd25519Decision;
    }
  }
  async function assertDigestCapabilityIsAvailable() {
    var _a;
    assertIsSecureContext();
    if (typeof globalThis.crypto === "undefined" || typeof ((_a = globalThis.crypto.subtle) == null ? void 0 : _a.digest) !== "function") {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED);
    }
  }
  async function assertKeyGenerationIsAvailable() {
    var _a;
    assertIsSecureContext();
    if (typeof globalThis.crypto === "undefined" || typeof ((_a = globalThis.crypto.subtle) == null ? void 0 : _a.generateKey) !== "function") {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED);
    }
    if (!await isEd25519CurveSupported(globalThis.crypto.subtle)) {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED);
    }
  }
  async function assertKeyExporterIsAvailable() {
    var _a;
    assertIsSecureContext();
    if (typeof globalThis.crypto === "undefined" || typeof ((_a = globalThis.crypto.subtle) == null ? void 0 : _a.exportKey) !== "function") {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED);
    }
  }
  async function assertSigningCapabilityIsAvailable() {
    var _a;
    assertIsSecureContext();
    if (typeof globalThis.crypto === "undefined" || typeof ((_a = globalThis.crypto.subtle) == null ? void 0 : _a.sign) !== "function") {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED);
    }
  }
  async function assertVerificationCapabilityIsAvailable() {
    var _a;
    assertIsSecureContext();
    if (typeof globalThis.crypto === "undefined" || typeof ((_a = globalThis.crypto.subtle) == null ? void 0 : _a.verify) !== "function") {
      throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED);
    }
  }

  // ../addresses/dist/index.browser.js
  var memoizedBase58Encoder;
  var memoizedBase58Decoder;
  function getMemoizedBase58Encoder() {
    if (!memoizedBase58Encoder)
      memoizedBase58Encoder = getBase58Encoder();
    return memoizedBase58Encoder;
  }
  function getMemoizedBase58Decoder() {
    if (!memoizedBase58Decoder)
      memoizedBase58Decoder = getBase58Decoder();
    return memoizedBase58Decoder;
  }
  function isAddress(putativeAddress) {
    if (
      // Lowest address (32 bytes of zeroes)
      putativeAddress.length < 32 || // Highest address (32 bytes of 255)
      putativeAddress.length > 44
    ) {
      return false;
    }
    const base58Encoder2 = getMemoizedBase58Encoder();
    const bytes = base58Encoder2.encode(putativeAddress);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
      return false;
    }
    return true;
  }
  function assertIsAddress(putativeAddress) {
    if (
      // Lowest address (32 bytes of zeroes)
      putativeAddress.length < 32 || // Highest address (32 bytes of 255)
      putativeAddress.length > 44
    ) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE, {
        actualLength: putativeAddress.length
      });
    }
    const base58Encoder2 = getMemoizedBase58Encoder();
    const bytes = base58Encoder2.encode(putativeAddress);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH, {
        actualLength: numBytes
      });
    }
  }
  function address(putativeAddress) {
    assertIsAddress(putativeAddress);
    return putativeAddress;
  }
  function getAddressEncoder() {
    return mapEncoder(
      getStringEncoder({ encoding: getMemoizedBase58Encoder(), size: 32 }),
      (putativeAddress) => address(putativeAddress)
    );
  }
  function getAddressDecoder() {
    return getStringDecoder({ encoding: getMemoizedBase58Decoder(), size: 32 });
  }
  function getAddressCodec() {
    return combineCodec(getAddressEncoder(), getAddressDecoder());
  }
  function getAddressComparator() {
    return new Intl.Collator("en", {
      caseFirst: "lower",
      ignorePunctuation: false,
      localeMatcher: "best fit",
      numeric: false,
      sensitivity: "variant",
      usage: "sort"
    }).compare;
  }
  var D = 37095705934669439343138083508754565189542113879843219016388785533085940283555n;
  var P = 57896044618658097711785492504343953926634992332820282019728792003956564819949n;
  var RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
  function mod(a) {
    const r = a % P;
    return r >= 0n ? r : P + r;
  }
  function pow2(x, power) {
    let r = x;
    while (power-- > 0n) {
      r *= r;
      r %= P;
    }
    return r;
  }
  function pow_2_252_3(x) {
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, 2n) * b2 % P;
    const b5 = pow2(b4, 1n) * x % P;
    const b10 = pow2(b5, 5n) * b5 % P;
    const b20 = pow2(b10, 10n) * b10 % P;
    const b40 = pow2(b20, 20n) * b20 % P;
    const b80 = pow2(b40, 40n) * b40 % P;
    const b160 = pow2(b80, 80n) * b80 % P;
    const b240 = pow2(b160, 80n) * b80 % P;
    const b250 = pow2(b240, 10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, 2n) * x % P;
    return pow_p_5_8;
  }
  function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7);
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * RM1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * RM1);
    if (useRoot1)
      x = root1;
    if (useRoot2 || noRoot)
      x = root2;
    if ((mod(x) & 1n) === 1n)
      x = mod(-x);
    if (!useRoot1 && !useRoot2) {
      return null;
    }
    return x;
  }
  function pointIsOnCurve(y, lastByte) {
    const y2 = mod(y * y);
    const u = mod(y2 - 1n);
    const v = mod(D * y2 + 1n);
    const x = uvRatio(u, v);
    if (x === null) {
      return false;
    }
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (x === 0n && isLastByteOdd) {
      return false;
    }
    return true;
  }
  function byteToHex(byte) {
    const hexString = byte.toString(16);
    if (hexString.length === 1) {
      return `0${hexString}`;
    } else {
      return hexString;
    }
  }
  function decompressPointBytes(bytes) {
    const hexString = bytes.reduce((acc, byte, ii) => `${byteToHex(ii === 31 ? byte & ~128 : byte)}${acc}`, "");
    const integerLiteralString = `0x${hexString}`;
    return BigInt(integerLiteralString);
  }
  async function compressedPointBytesAreOnCurve(bytes) {
    if (bytes.byteLength !== 32) {
      return false;
    }
    const y = decompressPointBytes(bytes);
    return pointIsOnCurve(y, bytes[31]);
  }
  function isProgramDerivedAddress(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number" && value[1] >= 0 && value[1] <= 255 && isAddress(value[0]);
  }
  function assertIsProgramDerivedAddress(value) {
    const validFormat = Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number";
    if (!validFormat) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__MALFORMED_PDA);
    }
    if (value[1] < 0 || value[1] > 255) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE, {
        bump: value[1]
      });
    }
    assertIsAddress(value[0]);
  }
  var MAX_SEED_LENGTH = 32;
  var MAX_SEEDS = 16;
  var PDA_MARKER_BYTES = [
    // The string 'ProgramDerivedAddress'
    80,
    114,
    111,
    103,
    114,
    97,
    109,
    68,
    101,
    114,
    105,
    118,
    101,
    100,
    65,
    100,
    100,
    114,
    101,
    115,
    115
  ];
  async function createProgramDerivedAddress({ programAddress, seeds }) {
    await assertDigestCapabilityIsAvailable();
    if (seeds.length > MAX_SEEDS) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED, {
        actual: seeds.length,
        maxSeeds: MAX_SEEDS
      });
    }
    let textEncoder;
    const seedBytes = seeds.reduce((acc, seed, ii) => {
      const bytes = typeof seed === "string" ? (textEncoder || (textEncoder = new TextEncoder())).encode(seed) : seed;
      if (bytes.byteLength > MAX_SEED_LENGTH) {
        throw new SolanaError(SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED, {
          actual: bytes.byteLength,
          index: ii,
          maxSeedLength: MAX_SEED_LENGTH
        });
      }
      acc.push(...bytes);
      return acc;
    }, []);
    const base58EncodedAddressCodec = getAddressCodec();
    const programAddressBytes = base58EncodedAddressCodec.encode(programAddress);
    const addressBytesBuffer = await crypto.subtle.digest(
      "SHA-256",
      new Uint8Array([...seedBytes, ...programAddressBytes, ...PDA_MARKER_BYTES])
    );
    const addressBytes = new Uint8Array(addressBytesBuffer);
    if (await compressedPointBytesAreOnCurve(addressBytes)) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE);
    }
    return base58EncodedAddressCodec.decode(addressBytes);
  }
  async function getProgramDerivedAddress({
    programAddress,
    seeds
  }) {
    let bumpSeed = 255;
    while (bumpSeed > 0) {
      try {
        const address2 = await createProgramDerivedAddress({
          programAddress,
          seeds: [...seeds, new Uint8Array([bumpSeed])]
        });
        return [address2, bumpSeed];
      } catch (e3) {
        if (isSolanaError(e3, SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE)) {
          bumpSeed--;
        } else {
          throw e3;
        }
      }
    }
    throw new SolanaError(SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED);
  }
  async function createAddressWithSeed({ baseAddress, programAddress, seed }) {
    const { encode, decode } = getAddressCodec();
    const seedBytes = typeof seed === "string" ? new TextEncoder().encode(seed) : seed;
    if (seedBytes.byteLength > MAX_SEED_LENGTH) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED, {
        actual: seedBytes.byteLength,
        index: 0,
        maxSeedLength: MAX_SEED_LENGTH
      });
    }
    const programAddressBytes = encode(programAddress);
    if (programAddressBytes.length >= PDA_MARKER_BYTES.length && programAddressBytes.slice(-PDA_MARKER_BYTES.length).every((byte, index) => byte === PDA_MARKER_BYTES[index])) {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER);
    }
    const addressBytesBuffer = await crypto.subtle.digest(
      "SHA-256",
      new Uint8Array([...encode(baseAddress), ...seedBytes, ...programAddressBytes])
    );
    const addressBytes = new Uint8Array(addressBytesBuffer);
    return decode(addressBytes);
  }
  async function getAddressFromPublicKey(publicKey) {
    await assertKeyExporterIsAvailable();
    if (publicKey.type !== "public" || publicKey.algorithm.name !== "Ed25519") {
      throw new SolanaError(SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY);
    }
    const publicKeyBytes = await crypto.subtle.exportKey("raw", publicKey);
    return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
  }

  // ../codecs-data-structures/dist/index.browser.js
  init_env_shim();
  function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
      throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS, {
        actual,
        codecDescription,
        expected
      });
    }
  }
  function maxCodecSizes(sizes) {
    return sizes.reduce(
      (all, size) => all === null || size === null ? null : Math.max(all, size),
      0
    );
  }
  function sumCodecSizes(sizes) {
    return sizes.reduce((all, size) => all === null || size === null ? null : all + size, 0);
  }
  function getFixedSize(codec) {
    return isFixedSize(codec) ? codec.fixedSize : null;
  }
  function getMaxSize(codec) {
    var _a;
    return isFixedSize(codec) ? codec.fixedSize : (_a = codec.maxSize) != null ? _a : null;
  }
  function getArrayEncoder(item, config = {}) {
    var _a, _b;
    const size = (_a = config.size) != null ? _a : getU32Encoder();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = (_b = computeArrayLikeCodecSize(size, getMaxSize(item))) != null ? _b : void 0;
    return createEncoder({
      ...fixedSize !== null ? { fixedSize } : {
        getSizeFromValue: (array) => {
          const prefixSize = typeof size === "object" ? getEncodedSize(array.length, size) : 0;
          return prefixSize + [...array].reduce((all, value) => all + getEncodedSize(value, item), 0);
        },
        maxSize
      },
      write: (array, bytes, offset) => {
        if (typeof size === "number") {
          assertValidNumberOfItemsForCodec("array", size, array.length);
        }
        if (typeof size === "object") {
          offset = size.write(array.length, bytes, offset);
        }
        array.forEach((value) => {
          offset = item.write(value, bytes, offset);
        });
        return offset;
      }
    });
  }
  function getArrayDecoder(item, config = {}) {
    var _a, _b;
    const size = (_a = config.size) != null ? _a : getU32Decoder();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = (_b = computeArrayLikeCodecSize(size, getMaxSize(item))) != null ? _b : void 0;
    return createDecoder({
      ...fixedSize !== null ? { fixedSize } : { maxSize },
      read: (bytes, offset) => {
        const array = [];
        if (typeof size === "object" && bytes.slice(offset).length === 0) {
          return [array, offset];
        }
        if (size === "remainder") {
          while (offset < bytes.length) {
            const [value, newOffset2] = item.read(bytes, offset);
            offset = newOffset2;
            array.push(value);
          }
          return [array, offset];
        }
        const [resolvedSize, newOffset] = typeof size === "number" ? [size, offset] : size.read(bytes, offset);
        offset = newOffset;
        for (let i = 0; i < resolvedSize; i += 1) {
          const [value, newOffset2] = item.read(bytes, offset);
          offset = newOffset2;
          array.push(value);
        }
        return [array, offset];
      }
    });
  }
  function getArrayCodec(item, config = {}) {
    return combineCodec(getArrayEncoder(item, config), getArrayDecoder(item, config));
  }
  function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number")
      return null;
    if (size === 0)
      return 0;
    return itemSize === null ? null : itemSize * size;
  }
  function getBitArrayEncoder(size, config = {}) {
    var _a;
    const parsedConfig = typeof config === "boolean" ? { backward: config } : config;
    const backward = (_a = parsedConfig.backward) != null ? _a : false;
    return createEncoder({
      fixedSize: size,
      write(value, bytes, offset) {
        var _a2;
        const bytesToAdd = [];
        for (let i = 0; i < size; i += 1) {
          let byte = 0;
          for (let j = 0; j < 8; j += 1) {
            const feature = Number((_a2 = value[i * 8 + j]) != null ? _a2 : 0);
            byte |= feature << (backward ? j : 7 - j);
          }
          if (backward) {
            bytesToAdd.unshift(byte);
          } else {
            bytesToAdd.push(byte);
          }
        }
        bytes.set(bytesToAdd, offset);
        return size;
      }
    });
  }
  function getBitArrayDecoder(size, config = {}) {
    var _a;
    const parsedConfig = typeof config === "boolean" ? { backward: config } : config;
    const backward = (_a = parsedConfig.backward) != null ? _a : false;
    return createDecoder({
      fixedSize: size,
      read(bytes, offset) {
        assertByteArrayHasEnoughBytesForCodec("bitArray", size, bytes, offset);
        const booleans = [];
        let slice = bytes.slice(offset, offset + size);
        slice = backward ? slice.reverse() : slice;
        slice.forEach((byte) => {
          for (let i = 0; i < 8; i += 1) {
            if (backward) {
              booleans.push(Boolean(byte & 1));
              byte >>= 1;
            } else {
              booleans.push(Boolean(byte & 128));
              byte <<= 1;
            }
          }
        });
        return [booleans, offset + size];
      }
    });
  }
  function getBitArrayCodec(size, config = {}) {
    return combineCodec(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
  }
  function getBooleanEncoder(config = {}) {
    var _a;
    const size = (_a = config.size) != null ? _a : getU8Encoder();
    assertIsFixedSize(size);
    return mapEncoder(size, (value) => value ? 1 : 0);
  }
  function getBooleanDecoder(config = {}) {
    var _a;
    const size = (_a = config.size) != null ? _a : getU8Decoder();
    assertIsFixedSize(size);
    return mapDecoder(size, (value) => Number(value) === 1);
  }
  function getBooleanCodec(config = {}) {
    return combineCodec(getBooleanEncoder(config), getBooleanDecoder(config));
  }
  function getBytesEncoder(config = {}) {
    var _a;
    const size = (_a = config.size) != null ? _a : "variable";
    const byteEncoder = createEncoder({
      getSizeFromValue: (value) => value.length,
      write: (value, bytes, offset) => {
        bytes.set(value, offset);
        return offset + value.length;
      }
    });
    if (size === "variable") {
      return byteEncoder;
    }
    if (typeof size === "number") {
      return fixEncoder(byteEncoder, size);
    }
    return createEncoder({
      getSizeFromValue: (value) => getEncodedSize(value.length, size) + value.length,
      write: (value, bytes, offset) => {
        offset = size.write(value.length, bytes, offset);
        return byteEncoder.write(value, bytes, offset);
      }
    });
  }
  function getBytesDecoder(config = {}) {
    var _a;
    const size = (_a = config.size) != null ? _a : "variable";
    const byteDecoder = createDecoder({
      read: (bytes, offset) => {
        const slice = bytes.slice(offset);
        return [slice, offset + slice.length];
      }
    });
    if (size === "variable") {
      return byteDecoder;
    }
    if (typeof size === "number") {
      return fixDecoder(byteDecoder, size);
    }
    return createDecoder({
      read: (bytes, offset) => {
        assertByteArrayIsNotEmptyForCodec("bytes", bytes, offset);
        const [lengthBigInt, lengthOffset] = size.read(bytes, offset);
        const length = Number(lengthBigInt);
        offset = lengthOffset;
        const contentBytes = bytes.slice(offset, offset + length);
        assertByteArrayHasEnoughBytesForCodec("bytes", length, contentBytes);
        const [value, contentOffset] = byteDecoder.read(contentBytes, 0);
        offset += contentOffset;
        return [value, offset];
      }
    });
  }
  function getBytesCodec(config = {}) {
    return combineCodec(getBytesEncoder(config), getBytesDecoder(config));
  }
  function getDataEnumEncoder(variants, config = {}) {
    var _a;
    const prefix = (_a = config.size) != null ? _a : getU8Encoder();
    const fixedSize = getDataEnumFixedSize(variants, prefix);
    return createEncoder({
      ...fixedSize !== null ? { fixedSize } : {
        getSizeFromValue: (variant) => {
          const discriminator = getVariantDiscriminator(variants, variant);
          const variantEncoder = variants[discriminator][1];
          return getEncodedSize(discriminator, prefix) + getEncodedSize(variant, variantEncoder);
        },
        maxSize: getDataEnumMaxSize(variants, prefix)
      },
      write: (variant, bytes, offset) => {
        const discriminator = getVariantDiscriminator(variants, variant);
        offset = prefix.write(discriminator, bytes, offset);
        const variantEncoder = variants[discriminator][1];
        return variantEncoder.write(variant, bytes, offset);
      }
    });
  }
  function getDataEnumDecoder(variants, config = {}) {
    var _a;
    const prefix = (_a = config.size) != null ? _a : getU8Decoder();
    const fixedSize = getDataEnumFixedSize(variants, prefix);
    return createDecoder({
      ...fixedSize !== null ? { fixedSize } : { maxSize: getDataEnumMaxSize(variants, prefix) },
      read: (bytes, offset) => {
        var _a2;
        assertByteArrayIsNotEmptyForCodec("dataEnum", bytes, offset);
        const [discriminator, dOffset] = prefix.read(bytes, offset);
        offset = dOffset;
        const variantField = (_a2 = variants[Number(discriminator)]) != null ? _a2 : null;
        if (!variantField) {
          throw new SolanaError(SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE, {
            discriminator,
            maxRange: variants.length - 1,
            minRange: 0
          });
        }
        const [variant, vOffset] = variantField[1].read(bytes, offset);
        offset = vOffset;
        return [{ __kind: variantField[0], ...variant != null ? variant : {} }, offset];
      }
    });
  }
  function getDataEnumCodec(variants, config = {}) {
    return combineCodec(
      getDataEnumEncoder(variants, config),
      getDataEnumDecoder(variants, config)
    );
  }
  function getDataEnumFixedSize(variants, prefix) {
    if (variants.length === 0)
      return isFixedSize(prefix) ? prefix.fixedSize : null;
    if (!isFixedSize(variants[0][1]))
      return null;
    const variantSize = variants[0][1].fixedSize;
    const sameSizedVariants = variants.every(
      (variant) => isFixedSize(variant[1]) && variant[1].fixedSize === variantSize
    );
    if (!sameSizedVariants)
      return null;
    return isFixedSize(prefix) ? prefix.fixedSize + variantSize : null;
  }
  function getDataEnumMaxSize(variants, prefix) {
    var _a;
    const maxVariantSize = maxCodecSizes(variants.map(([, codec]) => getMaxSize(codec)));
    return (_a = sumCodecSizes([getMaxSize(prefix), maxVariantSize])) != null ? _a : void 0;
  }
  function getVariantDiscriminator(variants, variant) {
    const discriminator = variants.findIndex(([key]) => variant.__kind === key);
    if (discriminator < 0) {
      throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_DATA_ENUM_VARIANT, {
        value: variant.__kind,
        variants: variants.map(([key]) => key)
      });
    }
    return discriminator;
  }
  function getTupleEncoder(items) {
    var _a;
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = (_a = sumCodecSizes(items.map(getMaxSize))) != null ? _a : void 0;
    return createEncoder({
      ...fixedSize === null ? {
        getSizeFromValue: (value) => items.map((item, index) => getEncodedSize(value[index], item)).reduce((all, one) => all + one, 0),
        maxSize
      } : { fixedSize },
      write: (value, bytes, offset) => {
        assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
        items.forEach((item, index) => {
          offset = item.write(value[index], bytes, offset);
        });
        return offset;
      }
    });
  }
  function getTupleDecoder(items) {
    var _a;
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = (_a = sumCodecSizes(items.map(getMaxSize))) != null ? _a : void 0;
    return createDecoder({
      ...fixedSize === null ? { maxSize } : { fixedSize },
      read: (bytes, offset) => {
        const values = [];
        items.forEach((item) => {
          const [newValue, newOffset] = item.read(bytes, offset);
          values.push(newValue);
          offset = newOffset;
        });
        return [values, offset];
      }
    });
  }
  function getTupleCodec(items) {
    return combineCodec(
      getTupleEncoder(items),
      getTupleDecoder(items)
    );
  }
  function getMapEncoder(key, value, config = {}) {
    return mapEncoder(
      getArrayEncoder(getTupleEncoder([key, value]), config),
      (map) => [...map.entries()]
    );
  }
  function getMapDecoder(key, value, config = {}) {
    return mapDecoder(
      getArrayDecoder(getTupleDecoder([key, value]), config),
      (entries) => new Map(entries)
    );
  }
  function getMapCodec(key, value, config = {}) {
    return combineCodec(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
  }
  function getNullableEncoder(item, config = {}) {
    var _a, _b, _c;
    const prefix = (_a = config.prefix) != null ? _a : getU8Encoder();
    const fixed = (_b = config.fixed) != null ? _b : false;
    const isZeroSizeItem = isFixedSize(item) && isFixedSize(prefix) && item.fixedSize === 0;
    if (fixed || isZeroSizeItem) {
      assertIsFixedSize(item);
      assertIsFixedSize(prefix);
      const fixedSize = prefix.fixedSize + item.fixedSize;
      return createEncoder({
        fixedSize,
        write: (option, bytes, offset) => {
          const prefixOffset = prefix.write(Number(option !== null), bytes, offset);
          if (option !== null) {
            item.write(option, bytes, prefixOffset);
          }
          return offset + fixedSize;
        }
      });
    }
    return createEncoder({
      getSizeFromValue: (option) => getEncodedSize(Number(option !== null), prefix) + (option !== null ? getEncodedSize(option, item) : 0),
      maxSize: (_c = sumCodecSizes([prefix, item].map(getMaxSize))) != null ? _c : void 0,
      write: (option, bytes, offset) => {
        offset = prefix.write(Number(option !== null), bytes, offset);
        if (option !== null) {
          offset = item.write(option, bytes, offset);
        }
        return offset;
      }
    });
  }
  function getNullableDecoder(item, config = {}) {
    var _a, _b, _c;
    const prefix = (_a = config.prefix) != null ? _a : getU8Decoder();
    const fixed = (_b = config.fixed) != null ? _b : false;
    let fixedSize = null;
    const isZeroSizeItem = isFixedSize(item) && isFixedSize(prefix) && item.fixedSize === 0;
    if (fixed || isZeroSizeItem) {
      assertIsFixedSize(item);
      assertIsFixedSize(prefix);
      fixedSize = prefix.fixedSize + item.fixedSize;
    }
    return createDecoder({
      ...fixedSize === null ? { maxSize: (_c = sumCodecSizes([prefix, item].map(getMaxSize))) != null ? _c : void 0 } : { fixedSize },
      read: (bytes, offset) => {
        if (bytes.length - offset <= 0) {
          return [null, offset];
        }
        const [isSome2, prefixOffset] = prefix.read(bytes, offset);
        if (isSome2 === 0) {
          return [null, fixedSize !== null ? offset + fixedSize : prefixOffset];
        }
        const [value, newOffset] = item.read(bytes, prefixOffset);
        return [value, fixedSize !== null ? offset + fixedSize : newOffset];
      }
    });
  }
  function getNullableCodec(item, config = {}) {
    const configCast = config;
    return combineCodec(getNullableEncoder(item, configCast), getNullableDecoder(item, configCast));
  }
  function getScalarEnumEncoder(constructor, config = {}) {
    var _a;
    const prefix = (_a = config.size) != null ? _a : getU8Encoder();
    const { minRange, maxRange, allStringInputs, enumKeys, enumValues } = getScalarEnumStats(constructor);
    return mapEncoder(prefix, (value) => {
      const isInvalidNumber = typeof value === "number" && (value < minRange || value > maxRange);
      const isInvalidString = typeof value === "string" && !allStringInputs.includes(value);
      if (isInvalidNumber || isInvalidString) {
        throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_SCALAR_ENUM_VARIANT, {
          maxRange,
          minRange,
          value,
          variants: allStringInputs
        });
      }
      if (typeof value === "number")
        return value;
      const valueIndex = enumValues.indexOf(value);
      if (valueIndex >= 0)
        return valueIndex;
      return enumKeys.indexOf(value);
    });
  }
  function getScalarEnumDecoder(constructor, config = {}) {
    var _a;
    const prefix = (_a = config.size) != null ? _a : getU8Decoder();
    const { minRange, maxRange, enumKeys } = getScalarEnumStats(constructor);
    return mapDecoder(prefix, (value) => {
      const valueAsNumber = Number(value);
      if (valueAsNumber < minRange || valueAsNumber > maxRange) {
        throw new SolanaError(SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE, {
          discriminator: valueAsNumber,
          maxRange,
          minRange
        });
      }
      return constructor[enumKeys[valueAsNumber]];
    });
  }
  function getScalarEnumCodec(constructor, config = {}) {
    return combineCodec(getScalarEnumEncoder(constructor, config), getScalarEnumDecoder(constructor, config));
  }
  function getScalarEnumStats(constructor) {
    const numericValues = Object.values(constructor).filter((v) => typeof v === "number");
    const deduplicatedConstructor = Object.fromEntries(
      Object.entries(constructor).slice(numericValues.length)
    );
    const enumKeys = Object.keys(deduplicatedConstructor);
    const enumValues = Object.values(deduplicatedConstructor);
    const minRange = 0;
    const maxRange = enumValues.length - 1;
    const allStringInputs = [
      .../* @__PURE__ */ new Set([...enumKeys, ...enumValues.filter((v) => typeof v === "string")])
    ];
    return {
      allStringInputs,
      enumKeys,
      enumValues,
      maxRange,
      minRange
    };
  }
  function getSetEncoder(item, config = {}) {
    return mapEncoder(getArrayEncoder(item, config), (set) => [...set]);
  }
  function getSetDecoder(item, config = {}) {
    return mapDecoder(getArrayDecoder(item, config), (entries) => new Set(entries));
  }
  function getSetCodec(item, config = {}) {
    return combineCodec(getSetEncoder(item, config), getSetDecoder(item, config));
  }
  function getStructEncoder(fields) {
    var _a;
    const fieldCodecs = fields.map(([, codec]) => codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = (_a = sumCodecSizes(fieldCodecs.map(getMaxSize))) != null ? _a : void 0;
    return createEncoder({
      ...fixedSize === null ? {
        getSizeFromValue: (value) => fields.map(([key, codec]) => getEncodedSize(value[key], codec)).reduce((all, one) => all + one, 0),
        maxSize
      } : { fixedSize },
      write: (struct, bytes, offset) => {
        fields.forEach(([key, codec]) => {
          offset = codec.write(struct[key], bytes, offset);
        });
        return offset;
      }
    });
  }
  function getStructDecoder(fields) {
    var _a;
    const fieldCodecs = fields.map(([, codec]) => codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = (_a = sumCodecSizes(fieldCodecs.map(getMaxSize))) != null ? _a : void 0;
    return createDecoder({
      ...fixedSize === null ? { maxSize } : { fixedSize },
      read: (bytes, offset) => {
        const struct = {};
        fields.forEach(([key, codec]) => {
          const [value, newOffset] = codec.read(bytes, offset);
          offset = newOffset;
          struct[key] = value;
        });
        return [struct, offset];
      }
    });
  }
  function getStructCodec(fields) {
    return combineCodec(
      getStructEncoder(fields),
      getStructDecoder(fields)
    );
  }
  function getUnitEncoder() {
    return createEncoder({
      fixedSize: 0,
      write: (_value, _bytes, offset) => offset
    });
  }
  function getUnitDecoder() {
    return createDecoder({
      fixedSize: 0,
      read: (_bytes, offset) => [void 0, offset]
    });
  }
  function getUnitCodec() {
    return combineCodec(getUnitEncoder(), getUnitDecoder());
  }

  // ../options/dist/index.browser.js
  init_env_shim();
  var some = (value) => ({ __option: "Some", value });
  var none = () => ({ __option: "None" });
  var isOption = (input) => !!(input && typeof input === "object" && "__option" in input && (input.__option === "Some" && "value" in input || input.__option === "None"));
  var isSome = (option) => option.__option === "Some";
  var isNone = (option) => option.__option === "None";
  function unwrapOption(option, fallback) {
    if (isSome(option))
      return option.value;
    return fallback ? fallback() : null;
  }
  var wrapNullable = (nullable) => nullable !== null ? some(nullable) : none();
  function getOptionEncoder(item, config = {}) {
    var _a, _b, _c;
    const prefix = (_a = config.prefix) != null ? _a : getU8Encoder();
    const fixed = (_b = config.fixed) != null ? _b : false;
    const isZeroSizeItem = isFixedSize(item) && isFixedSize(prefix) && item.fixedSize === 0;
    if (fixed || isZeroSizeItem) {
      assertIsFixedSize(item);
      assertIsFixedSize(prefix);
      const fixedSize = prefix.fixedSize + item.fixedSize;
      return createEncoder({
        fixedSize,
        write: (optionOrNullable, bytes, offset) => {
          const option = isOption(optionOrNullable) ? optionOrNullable : wrapNullable(optionOrNullable);
          const prefixOffset = prefix.write(Number(isSome(option)), bytes, offset);
          if (isSome(option)) {
            item.write(option.value, bytes, prefixOffset);
          }
          return offset + fixedSize;
        }
      });
    }
    return createEncoder({
      getSizeFromValue: (optionOrNullable) => {
        const option = isOption(optionOrNullable) ? optionOrNullable : wrapNullable(optionOrNullable);
        return getEncodedSize(Number(isSome(option)), prefix) + (isSome(option) ? getEncodedSize(option.value, item) : 0);
      },
      maxSize: (_c = sumCodecSizes2([prefix, item].map(getMaxSize2))) != null ? _c : void 0,
      write: (optionOrNullable, bytes, offset) => {
        const option = isOption(optionOrNullable) ? optionOrNullable : wrapNullable(optionOrNullable);
        offset = prefix.write(Number(isSome(option)), bytes, offset);
        if (isSome(option)) {
          offset = item.write(option.value, bytes, offset);
        }
        return offset;
      }
    });
  }
  function getOptionDecoder(item, config = {}) {
    var _a, _b, _c;
    const prefix = (_a = config.prefix) != null ? _a : getU8Decoder();
    const fixed = (_b = config.fixed) != null ? _b : false;
    let fixedSize = null;
    const isZeroSizeItem = isFixedSize(item) && isFixedSize(prefix) && item.fixedSize === 0;
    if (fixed || isZeroSizeItem) {
      assertIsFixedSize(item);
      assertIsFixedSize(prefix);
      fixedSize = prefix.fixedSize + item.fixedSize;
    }
    return createDecoder({
      ...fixedSize === null ? { maxSize: (_c = sumCodecSizes2([prefix, item].map(getMaxSize2))) != null ? _c : void 0 } : { fixedSize },
      read: (bytes, offset) => {
        if (bytes.length - offset <= 0) {
          return [none(), offset];
        }
        const [isSome2, prefixOffset] = prefix.read(bytes, offset);
        if (isSome2 === 0) {
          return [none(), fixedSize !== null ? offset + fixedSize : prefixOffset];
        }
        const [value, newOffset] = item.read(bytes, prefixOffset);
        return [some(value), fixedSize !== null ? offset + fixedSize : newOffset];
      }
    });
  }
  function getOptionCodec(item, config = {}) {
    return combineCodec(getOptionEncoder(item, config), getOptionDecoder(item, config));
  }
  function sumCodecSizes2(sizes) {
    return sizes.reduce((all, size) => all === null || size === null ? null : all + size, 0);
  }
  function getMaxSize2(codec) {
    var _a;
    return isFixedSize(codec) ? codec.fixedSize : (_a = codec.maxSize) != null ? _a : null;
  }
  function unwrapOptionRecursively(input, fallback) {
    if (!input || ArrayBuffer.isView(input)) {
      return input;
    }
    const next = (x) => fallback ? unwrapOptionRecursively(x, fallback) : unwrapOptionRecursively(x);
    if (isOption(input)) {
      if (isSome(input))
        return next(input.value);
      return fallback ? fallback() : null;
    }
    if (Array.isArray(input)) {
      return input.map(next);
    }
    if (typeof input === "object") {
      return Object.fromEntries(Object.entries(input).map(([k, v]) => [k, next(v)]));
    }
    return input;
  }

  // ../functional/dist/index.browser.js
  init_env_shim();
  function pipe(init, ...fns) {
    return fns.reduce((acc, fn) => fn(acc), init);
  }

  // ../instructions/dist/index.browser.js
  init_env_shim();
  function isInstructionForProgram(instruction, programAddress) {
    return instruction.programAddress === programAddress;
  }
  function assertIsInstructionForProgram(instruction, programAddress) {
    if (instruction.programAddress !== programAddress) {
      throw new SolanaError(SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH, {
        actualProgramAddress: instruction.programAddress,
        expectedProgramAddress: programAddress
      });
    }
  }
  function isInstructionWithAccounts(instruction) {
    return instruction.accounts !== void 0;
  }
  function assertIsInstructionWithAccounts(instruction) {
    if (instruction.accounts === void 0) {
      throw new SolanaError(SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS, {
        data: instruction.data,
        programAddress: instruction.programAddress
      });
    }
  }
  function isInstructionWithData(instruction) {
    return instruction.data !== void 0;
  }
  function assertIsInstructionWithData(instruction) {
    var _a;
    if (instruction.data === void 0) {
      throw new SolanaError(SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA, {
        accountAddresses: (_a = instruction.accounts) == null ? void 0 : _a.map((a) => a.address),
        programAddress: instruction.programAddress
      });
    }
  }
  var AccountRole = /* @__PURE__ */ ((AccountRole22) => {
    AccountRole22[AccountRole22["WRITABLE_SIGNER"] = /* 3 */
    3] = "WRITABLE_SIGNER";
    AccountRole22[AccountRole22["READONLY_SIGNER"] = /* 2 */
    2] = "READONLY_SIGNER";
    AccountRole22[AccountRole22["WRITABLE"] = /* 1 */
    1] = "WRITABLE";
    AccountRole22[AccountRole22["READONLY"] = /* 0 */
    0] = "READONLY";
    return AccountRole22;
  })(AccountRole || {});
  var IS_SIGNER_BITMASK = 2;
  var IS_WRITABLE_BITMASK = 1;
  function downgradeRoleToNonSigner(role) {
    return role & ~IS_SIGNER_BITMASK;
  }
  function downgradeRoleToReadonly(role) {
    return role & ~IS_WRITABLE_BITMASK;
  }
  function isSignerRole(role) {
    return role >= 2;
  }
  function isWritableRole(role) {
    return (role & IS_WRITABLE_BITMASK) !== 0;
  }
  function mergeRoles(roleA, roleB) {
    return roleA | roleB;
  }
  function upgradeRoleToSigner(role) {
    return role | IS_SIGNER_BITMASK;
  }
  function upgradeRoleToWritable(role) {
    return role | IS_WRITABLE_BITMASK;
  }

  // ../keys/dist/index.browser.js
  init_env_shim();
  function addPkcs8Header(bytes) {
    return new Uint8Array([
      /**
       * PKCS#8 header
       */
      48,
      // ASN.1 sequence tag
      46,
      // Length of sequence (46 more bytes)
      2,
      // ASN.1 integer tag
      1,
      // Length of integer
      0,
      // Version number
      48,
      // ASN.1 sequence tag
      5,
      // Length of sequence
      6,
      // ASN.1 object identifier tag
      3,
      // Length of object identifier
      // Edwards curve algorithms identifier https://oid-rep.orange-labs.fr/get/1.3.101.112
      43,
      // iso(1) / identified-organization(3) (The first node is multiplied by the decimal 40 and the result is added to the value of the second node)
      101,
      // thawte(101)
      // Ed25519 identifier
      112,
      // id-Ed25519(112)
      /**
       * Private key payload
       */
      4,
      // ASN.1 octet string tag
      34,
      // String length (34 more bytes)
      // Private key bytes as octet string
      4,
      // ASN.1 octet string tag
      32,
      // String length (32 bytes)
      ...bytes
    ]);
  }
  async function createPrivateKeyFromBytes(bytes, extractable) {
    const actualLength = bytes.byteLength;
    if (actualLength !== 32) {
      throw new SolanaError(SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH, {
        actualLength
      });
    }
    const privateKeyBytesPkcs8 = addPkcs8Header(bytes);
    return await crypto.subtle.importKey("pkcs8", privateKeyBytesPkcs8, "Ed25519", extractable != null ? extractable : false, ["sign"]);
  }
  async function generateKeyPair() {
    await assertKeyGenerationIsAvailable();
    const keyPair = await crypto.subtle.generateKey(
      /* algorithm */
      "Ed25519",
      // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
      /* extractable */
      false,
      // Prevents the bytes of the private key from being visible to JS.
      /* allowed uses */
      ["sign", "verify"]
    );
    return keyPair;
  }
  async function createKeyPairFromBytes(bytes, extractable) {
    if (bytes.byteLength !== 64) {
      throw new SolanaError(SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH, { byteLength: bytes.byteLength });
    }
    const [publicKey, privateKey] = await Promise.all([
      crypto.subtle.importKey(
        "raw",
        bytes.slice(32),
        "Ed25519",
        /* extractable */
        true,
        ["verify"]
      ),
      createPrivateKeyFromBytes(bytes.slice(0, 32), extractable)
    ]);
    return { privateKey, publicKey };
  }
  var base58Encoder;
  function assertIsSignature(putativeSignature) {
    if (!base58Encoder)
      base58Encoder = getBase58Encoder();
    if (
      // Lowest value (64 bytes of zeroes)
      putativeSignature.length < 64 || // Highest value (64 bytes of 255)
      putativeSignature.length > 88
    ) {
      throw new SolanaError(SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE, {
        actualLength: putativeSignature.length
      });
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
      throw new SolanaError(SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH, {
        actualLength: numBytes
      });
    }
  }
  function isSignature(putativeSignature) {
    if (!base58Encoder)
      base58Encoder = getBase58Encoder();
    if (
      // Lowest value (64 bytes of zeroes)
      putativeSignature.length < 64 || // Highest value (64 bytes of 255)
      putativeSignature.length > 88
    ) {
      return false;
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
      return false;
    }
    return true;
  }
  async function signBytes(key, data) {
    await assertSigningCapabilityIsAvailable();
    const signedData = await crypto.subtle.sign("Ed25519", key, data);
    return new Uint8Array(signedData);
  }
  function signature(putativeSignature) {
    assertIsSignature(putativeSignature);
    return putativeSignature;
  }
  async function verifySignature(key, signature2, data) {
    await assertVerificationCapabilityIsAvailable();
    return await crypto.subtle.verify("Ed25519", key, signature2, data);
  }

  // ../programs/dist/index.browser.js
  init_env_shim();
  function resolveTransactionError(error, transaction, programs) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const fullLogs = error.message + "\n" + ((_a = error.logs) != null ? _a : []).join("\n");
    const instructionRegex = /Error processing Instruction (\d+)/;
    const instructionIndexString = (_c = (_b = fullLogs.match(instructionRegex)) == null ? void 0 : _b[1]) != null ? _c : null;
    const instructionIndex = instructionIndexString ? parseInt(instructionIndexString, 10) : null;
    if (instructionIndex === null)
      return error;
    const errorCodeRegex = /Custom program error: (0x[a-f0-9]+)/i;
    const errorCodeString = (_e = (_d = fullLogs.match(errorCodeRegex)) == null ? void 0 : _d[1]) != null ? _e : null;
    const errorCode = errorCodeString ? parseInt(errorCodeString, 16) : null;
    if (errorCode === null)
      return error;
    const programAddress = (_g = (_f = transaction.instructions[instructionIndex]) == null ? void 0 : _f.programAddress) != null ? _g : null;
    if (!programAddress)
      return error;
    const program = (_h = programs.find(
      (program2) => program2.address === programAddress && typeof program2.getErrorFromCode !== "undefined"
    )) != null ? _h : null;
    if (!program)
      return error;
    return program.getErrorFromCode(errorCode, error);
  }

  // ../rpc/dist/index.browser.js
  init_env_shim();

  // ../rpc-api/dist/index.browser.js
  init_env_shim();

  // ../rpc-spec/dist/index.browser.js
  init_env_shim();

  // ../rpc-spec-types/dist/index.browser.js
  init_env_shim();
  var _nextMessageId = 0;
  function getNextMessageId() {
    const id = _nextMessageId;
    _nextMessageId = (_nextMessageId + 1) % Number.MAX_SAFE_INTEGER;
    return id;
  }
  function createRpcMessage(method, params) {
    return {
      id: getNextMessageId(),
      jsonrpc: "2.0",
      method,
      params
    };
  }

  // ../rpc-spec/dist/index.browser.js
  function createRpc(rpcConfig) {
    return makeProxy(rpcConfig);
  }
  function makeProxy(rpcConfig) {
    return new Proxy(rpcConfig.api, {
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      get(target, p, receiver) {
        return function(...rawParams) {
          const methodName = p.toString();
          const createRpcRequest = Reflect.get(target, methodName, receiver);
          const newRequest = createRpcRequest ? createRpcRequest(...rawParams) : { methodName, params: rawParams };
          return createPendingRpcRequest(rpcConfig, newRequest);
        };
      }
    });
  }
  function createPendingRpcRequest(rpcConfig, pendingRequest) {
    return {
      async send(options) {
        const { methodName, params, responseTransformer } = pendingRequest;
        const payload = createRpcMessage(methodName, params);
        const response = await rpcConfig.transport({
          payload,
          signal: options == null ? void 0 : options.abortSignal
        });
        if ("error" in response) {
          throw getSolanaErrorFromJsonRpcError(response.error);
        }
        return responseTransformer ? responseTransformer(response.result, methodName) : response.result;
      }
    };
  }
  function createRpcApi(config) {
    return new Proxy({}, {
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      get(...args) {
        const [_, p] = args;
        const methodName = p.toString();
        return function(...rawParams) {
          const params = (config == null ? void 0 : config.parametersTransformer) ? config == null ? void 0 : config.parametersTransformer(rawParams, methodName) : rawParams;
          const responseTransformer = (config == null ? void 0 : config.responseTransformer) ? config == null ? void 0 : config.responseTransformer : (rawResponse) => rawResponse;
          return {
            methodName,
            params,
            responseTransformer
          };
        };
      }
    });
  }

  // ../rpc-transformers/dist/index.browser.js
  init_env_shim();
  function applyDefaultCommitment({
    commitmentPropertyName,
    params,
    optionsObjectPositionInParams,
    overrideCommitment
  }) {
    const paramInTargetPosition = params[optionsObjectPositionInParams];
    if (
      // There's no config.
      paramInTargetPosition === void 0 || // There is a config object.
      paramInTargetPosition && typeof paramInTargetPosition === "object" && !Array.isArray(paramInTargetPosition)
    ) {
      if (
        // The config object already has a commitment set.
        paramInTargetPosition && commitmentPropertyName in paramInTargetPosition
      ) {
        if (!paramInTargetPosition[commitmentPropertyName] || paramInTargetPosition[commitmentPropertyName] === "finalized") {
          const nextParams = [...params];
          const {
            [commitmentPropertyName]: _,
            // eslint-disable-line @typescript-eslint/no-unused-vars
            ...rest
          } = paramInTargetPosition;
          if (Object.keys(rest).length > 0) {
            nextParams[optionsObjectPositionInParams] = rest;
          } else {
            if (optionsObjectPositionInParams === nextParams.length - 1) {
              nextParams.length--;
            } else {
              nextParams[optionsObjectPositionInParams] = void 0;
            }
          }
          return nextParams;
        }
      } else if (overrideCommitment !== "finalized") {
        const nextParams = [...params];
        nextParams[optionsObjectPositionInParams] = {
          ...paramInTargetPosition,
          [commitmentPropertyName]: overrideCommitment
        };
        return nextParams;
      }
    }
    return params;
  }
  function downcastNodeToNumberIfBigint(value) {
    return typeof value === "bigint" ? (
      // FIXME(solana-labs/solana/issues/30341) Create a data type to represent u64 in the Solana
      // JSON RPC implementation so that we can throw away this entire patcher instead of unsafely
      // downcasting `bigints` to `numbers`.
      Number(value)
    ) : value;
  }
  function getIntegerOverflowNodeVisitor(onIntegerOverflow) {
    return (value, { keyPath }) => {
      if (typeof value === "bigint") {
        if (onIntegerOverflow && (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER)) {
          onIntegerOverflow(keyPath, value);
        }
      }
      return value;
    };
  }
  var OPTIONS_OBJECT_POSITION_BY_METHOD = {
    accountNotifications: 1,
    blockNotifications: 1,
    getAccountInfo: 1,
    getBalance: 1,
    getBlock: 1,
    getBlockHeight: 0,
    getBlockProduction: 0,
    getBlocks: 2,
    getBlocksWithLimit: 2,
    getConfirmedBlock: 1,
    getConfirmedBlocks: 1,
    getConfirmedBlocksWithLimit: 2,
    getConfirmedSignaturesForAddress2: 1,
    getConfirmedTransaction: 1,
    getEpochInfo: 0,
    getFeeCalculatorForBlockhash: 1,
    getFeeForMessage: 1,
    getFees: 1,
    getInflationGovernor: 0,
    getInflationReward: 1,
    getLargestAccounts: 0,
    getLatestBlockhash: 0,
    getLeaderSchedule: 1,
    getMinimumBalanceForRentExemption: 1,
    getMultipleAccounts: 1,
    getProgramAccounts: 1,
    getRecentBlockhash: 1,
    getSignaturesForAddress: 1,
    getSlot: 0,
    getSlotLeader: 0,
    getStakeActivation: 1,
    getStakeMinimumDelegation: 0,
    getSupply: 0,
    getTokenAccountBalance: 1,
    getTokenAccountsByDelegate: 2,
    getTokenAccountsByOwner: 2,
    getTokenLargestAccounts: 1,
    getTokenSupply: 1,
    getTransaction: 1,
    getTransactionCount: 0,
    getVoteAccounts: 0,
    isBlockhashValid: 1,
    logsNotifications: 1,
    programNotifications: 1,
    requestAirdrop: 2,
    sendTransaction: 1,
    signatureNotifications: 1,
    simulateTransaction: 1
  };
  var KEYPATH_WILDCARD = {};
  function getTreeWalker(visitors) {
    return function traverse(node, state) {
      if (Array.isArray(node)) {
        return node.map((element, ii) => {
          const nextState = {
            ...state,
            keyPath: [...state.keyPath, ii]
          };
          return traverse(element, nextState);
        });
      } else if (typeof node === "object" && node !== null) {
        const out = {};
        for (const propName in node) {
          if (!Object.prototype.hasOwnProperty.call(node, propName)) {
            continue;
          }
          const nextState = {
            ...state,
            keyPath: [...state.keyPath, propName]
          };
          out[propName] = traverse(node[propName], nextState);
        }
        return out;
      } else {
        return visitors.reduce((acc, visitNode) => visitNode(acc, state), node);
      }
    };
  }
  function getDefaultParamsTransformerForSolanaRpc(config) {
    const defaultCommitment = config == null ? void 0 : config.defaultCommitment;
    const handleIntegerOverflow = config == null ? void 0 : config.onIntegerOverflow;
    return (rawParams, methodName) => {
      const traverse = getTreeWalker([
        ...handleIntegerOverflow ? [getIntegerOverflowNodeVisitor((...args) => handleIntegerOverflow(methodName, ...args))] : [],
        downcastNodeToNumberIfBigint
      ]);
      const initialState = {
        keyPath: []
      };
      const patchedParams = traverse(rawParams, initialState);
      if (!Array.isArray(patchedParams)) {
        return patchedParams;
      }
      const optionsObjectPositionInParams = OPTIONS_OBJECT_POSITION_BY_METHOD[methodName];
      if (optionsObjectPositionInParams == null) {
        return patchedParams;
      }
      return applyDefaultCommitment({
        commitmentPropertyName: methodName === "sendTransaction" ? "preflightCommitment" : "commitment",
        optionsObjectPositionInParams,
        overrideCommitment: defaultCommitment,
        params: patchedParams
      });
    };
  }
  function keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths) {
    return allowedNumericKeyPaths.some((prohibitedKeyPath) => {
      if (prohibitedKeyPath.length !== keyPath.length) {
        return false;
      }
      for (let ii = keyPath.length - 1; ii >= 0; ii--) {
        const keyPathPart = keyPath[ii];
        const prohibitedKeyPathPart = prohibitedKeyPath[ii];
        if (prohibitedKeyPathPart !== keyPathPart && (prohibitedKeyPathPart !== KEYPATH_WILDCARD || typeof keyPathPart !== "number")) {
          return false;
        }
      }
      return true;
    });
  }
  function getBigIntUpcastVisitor(allowedNumericKeyPaths) {
    return function upcastNodeToBigIntIfNumber(value, { keyPath }) {
      if (typeof value === "number" && Number.isInteger(value) && !keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths)) {
        return BigInt(value);
      } else {
        return value;
      }
    };
  }
  function getDefaultResponseTransformerForSolanaRpc(config) {
    return (rawResponse, methodName) => {
      const keyPaths = (config == null ? void 0 : config.allowedNumericKeyPaths) && methodName ? config.allowedNumericKeyPaths[methodName] : void 0;
      const traverse = getTreeWalker([getBigIntUpcastVisitor(keyPaths != null ? keyPaths : [])]);
      const initialState = {
        keyPath: []
      };
      return traverse(rawResponse, initialState);
    };
  }
  var jsonParsedTokenAccountsConfigs = [
    // parsed Token/Token22 token account
    ["data", "parsed", "info", "tokenAmount", "decimals"],
    ["data", "parsed", "info", "tokenAmount", "uiAmount"],
    ["data", "parsed", "info", "rentExemptReserve", "decimals"],
    ["data", "parsed", "info", "rentExemptReserve", "uiAmount"],
    ["data", "parsed", "info", "delegatedAmount", "decimals"],
    ["data", "parsed", "info", "delegatedAmount", "uiAmount"],
    ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "olderTransferFee", "transferFeeBasisPoints"],
    ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "newerTransferFee", "transferFeeBasisPoints"],
    ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "preUpdateAverageRate"],
    ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "currentRate"]
  ];
  var jsonParsedAccountsConfigs = [
    ...jsonParsedTokenAccountsConfigs,
    // parsed AddressTableLookup account
    ["data", "parsed", "info", "lastExtendedSlotStartIndex"],
    // parsed Config account
    ["data", "parsed", "info", "slashPenalty"],
    ["data", "parsed", "info", "warmupCooldownRate"],
    // parsed Token/Token22 mint account
    ["data", "parsed", "info", "decimals"],
    // parsed Token/Token22 multisig account
    ["data", "parsed", "info", "numRequiredSigners"],
    ["data", "parsed", "info", "numValidSigners"],
    // parsed Stake account
    ["data", "parsed", "info", "stake", "delegation", "warmupCooldownRate"],
    // parsed Sysvar rent account
    ["data", "parsed", "info", "exemptionThreshold"],
    ["data", "parsed", "info", "burnPercent"],
    // parsed Vote account
    ["data", "parsed", "info", "commission"],
    ["data", "parsed", "info", "votes", KEYPATH_WILDCARD, "confirmationCount"]
  ];

  // ../rpc-api/dist/index.browser.js
  function createSolanaRpcApi(config) {
    return createRpcApi({
      parametersTransformer: getDefaultParamsTransformerForSolanaRpc(config),
      responseTransformer: getDefaultResponseTransformerForSolanaRpc({
        allowedNumericKeyPaths: getAllowedNumericKeypaths()
      })
    });
  }
  var memoizedKeypaths;
  function getAllowedNumericKeypaths() {
    if (!memoizedKeypaths) {
      memoizedKeypaths = {
        getAccountInfo: jsonParsedAccountsConfigs.map((c) => ["value", ...c]),
        getBlock: [
          ["blockTime"],
          ["transactions", KEYPATH_WILDCARD, "meta", "preTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "preTokenBalances",
            KEYPATH_WILDCARD,
            "uiTokenAmount",
            "decimals"
          ],
          ["transactions", KEYPATH_WILDCARD, "meta", "postTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "postTokenBalances",
            KEYPATH_WILDCARD,
            "uiTokenAmount",
            "decimals"
          ],
          ["transactions", KEYPATH_WILDCARD, "meta", "rewards", KEYPATH_WILDCARD, "commission"],
          ["transactions", KEYPATH_WILDCARD, "meta", "innerInstructions", KEYPATH_WILDCARD, "index"],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "instructions",
            KEYPATH_WILDCARD,
            "programIdIndex"
          ],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "instructions",
            KEYPATH_WILDCARD,
            "accounts",
            KEYPATH_WILDCARD
          ],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "writableIndexes",
            KEYPATH_WILDCARD
          ],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "readonlyIndexes",
            KEYPATH_WILDCARD
          ],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "instructions",
            KEYPATH_WILDCARD,
            "programIdIndex"
          ],
          [
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "instructions",
            KEYPATH_WILDCARD,
            "accounts",
            KEYPATH_WILDCARD
          ],
          ["transactions", KEYPATH_WILDCARD, "transaction", "message", "header", "numReadonlySignedAccounts"],
          ["transactions", KEYPATH_WILDCARD, "transaction", "message", "header", "numReadonlyUnsignedAccounts"],
          ["transactions", KEYPATH_WILDCARD, "transaction", "message", "header", "numRequiredSignatures"],
          ["rewards", KEYPATH_WILDCARD, "commission"]
        ],
        getBlockTime: [[]],
        getClusterNodes: [
          [KEYPATH_WILDCARD, "featureSet"],
          [KEYPATH_WILDCARD, "shredVersion"]
        ],
        getInflationGovernor: [["initial"], ["foundation"], ["foundationTerm"], ["taper"], ["terminal"]],
        getInflationRate: [["foundation"], ["total"], ["validator"]],
        getInflationReward: [[KEYPATH_WILDCARD, "commission"]],
        getMultipleAccounts: jsonParsedAccountsConfigs.map((c) => ["value", KEYPATH_WILDCARD, ...c]),
        getProgramAccounts: jsonParsedAccountsConfigs.flatMap((c) => [
          ["value", KEYPATH_WILDCARD, "account", ...c],
          [KEYPATH_WILDCARD, "account", ...c]
        ]),
        getRecentPerformanceSamples: [[KEYPATH_WILDCARD, "samplePeriodSecs"]],
        getTokenAccountBalance: [
          ["value", "decimals"],
          ["value", "uiAmount"]
        ],
        getTokenAccountsByDelegate: jsonParsedTokenAccountsConfigs.map((c) => [
          "value",
          KEYPATH_WILDCARD,
          "account",
          ...c
        ]),
        getTokenAccountsByOwner: jsonParsedTokenAccountsConfigs.map((c) => [
          "value",
          KEYPATH_WILDCARD,
          "account",
          ...c
        ]),
        getTokenLargestAccounts: [
          ["value", KEYPATH_WILDCARD, "decimals"],
          ["value", KEYPATH_WILDCARD, "uiAmount"]
        ],
        getTokenSupply: [
          ["value", "decimals"],
          ["value", "uiAmount"]
        ],
        getTransaction: [
          ["meta", "preTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
          ["meta", "preTokenBalances", KEYPATH_WILDCARD, "uiTokenAmount", "decimals"],
          ["meta", "postTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
          ["meta", "postTokenBalances", KEYPATH_WILDCARD, "uiTokenAmount", "decimals"],
          ["meta", "rewards", KEYPATH_WILDCARD, "commission"],
          ["meta", "innerInstructions", KEYPATH_WILDCARD, "index"],
          ["meta", "innerInstructions", KEYPATH_WILDCARD, "instructions", KEYPATH_WILDCARD, "programIdIndex"],
          [
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "instructions",
            KEYPATH_WILDCARD,
            "accounts",
            KEYPATH_WILDCARD
          ],
          [
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "writableIndexes",
            KEYPATH_WILDCARD
          ],
          [
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "readonlyIndexes",
            KEYPATH_WILDCARD
          ],
          ["transaction", "message", "instructions", KEYPATH_WILDCARD, "programIdIndex"],
          ["transaction", "message", "instructions", KEYPATH_WILDCARD, "accounts", KEYPATH_WILDCARD],
          ["transaction", "message", "header", "numReadonlySignedAccounts"],
          ["transaction", "message", "header", "numReadonlyUnsignedAccounts"],
          ["transaction", "message", "header", "numRequiredSignatures"]
        ],
        getVersion: [["feature-set"]],
        getVoteAccounts: [
          ["current", KEYPATH_WILDCARD, "commission"],
          ["delinquent", KEYPATH_WILDCARD, "commission"]
        ],
        simulateTransaction: jsonParsedAccountsConfigs.map((c) => ["value", "accounts", KEYPATH_WILDCARD, ...c])
      };
    }
    return memoizedKeypaths;
  }

  // ../rpc-transport-http/dist/index.browser.js
  init_env_shim();
  var DISALLOWED_HEADERS = {
    accept: true,
    "content-length": true,
    "content-type": true
  };
  var FORBIDDEN_HEADERS = {
    "accept-charset": true,
    "accept-encoding": true,
    "access-control-request-headers": true,
    "access-control-request-method": true,
    connection: true,
    "content-length": true,
    cookie: true,
    date: true,
    dnt: true,
    expect: true,
    host: true,
    "keep-alive": true,
    origin: true,
    "permissions-policy": true,
    // Prefix matching is implemented in code, below.
    // 'proxy-': true,
    // 'sec-': true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    via: true
  };
  function assertIsAllowedHttpRequestHeaders(headers) {
    const badHeaders = Object.keys(headers).filter((headerName) => {
      const lowercaseHeaderName = headerName.toLowerCase();
      return DISALLOWED_HEADERS[headerName.toLowerCase()] === true || FORBIDDEN_HEADERS[headerName.toLowerCase()] === true || lowercaseHeaderName.startsWith("proxy-") || lowercaseHeaderName.startsWith("sec-");
    });
    if (badHeaders.length > 0) {
      throw new SolanaError(SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN, {
        headers: badHeaders
      });
    }
  }
  function normalizeHeaders(headers) {
    const out = {};
    for (const headerName in headers) {
      out[headerName.toLowerCase()] = headers[headerName];
    }
    return out;
  }
  var didWarnDispatcherWasSuppliedInNonNodeEnvironment = false;
  function warnDispatcherWasSuppliedInNonNodeEnvironment() {
    if (didWarnDispatcherWasSuppliedInNonNodeEnvironment) {
      return;
    }
    didWarnDispatcherWasSuppliedInNonNodeEnvironment = true;
    console.warn(
      "You have supplied a `Dispatcher` to `createHttpTransport()`. It has been ignored because Undici dispatchers only work in Node environments. To eliminate this warning, omit the `dispatcher_NODE_ONLY` property from your config when running in a non-Node environment."
    );
  }
  function createHttpTransport(config) {
    if ("dispatcher_NODE_ONLY" in config) {
      warnDispatcherWasSuppliedInNonNodeEnvironment();
    }
    const { headers, url } = config;
    if (headers) {
      assertIsAllowedHttpRequestHeaders(headers);
    }
    let dispatcherConfig;
    const customHeaders = headers && normalizeHeaders(headers);
    return async function makeHttpRequest({
      payload,
      signal
    }) {
      const body = JSON.stringify(payload);
      const requestInfo = {
        ...dispatcherConfig,
        body,
        headers: {
          ...customHeaders,
          // Keep these headers lowercase so they will override any user-supplied headers above.
          accept: "application/json",
          "content-length": body.length.toString(),
          "content-type": "application/json; charset=utf-8"
        },
        method: "POST",
        signal
      };
      const response = await fetch(url, requestInfo);
      if (!response.ok) {
        throw new SolanaError(SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR, {
          message: response.statusText,
          statusCode: response.status
        });
      }
      return await response.json();
    };
  }

  // ../rpc/dist/index.browser.js
  var import_fast_stable_stringify = __toESM(require_fast_stable_stringify(), 1);
  function createSolanaJsonRpcIntegerOverflowError(methodName, keyPath, value) {
    let argumentLabel = "";
    if (typeof keyPath[0] === "number") {
      const argPosition = keyPath[0] + 1;
      const lastDigit = argPosition % 10;
      const lastTwoDigits = argPosition % 100;
      if (lastDigit == 1 && lastTwoDigits != 11) {
        argumentLabel = argPosition + "st";
      } else if (lastDigit == 2 && lastTwoDigits != 12) {
        argumentLabel = argPosition + "nd";
      } else if (lastDigit == 3 && lastTwoDigits != 13) {
        argumentLabel = argPosition + "rd";
      } else {
        argumentLabel = argPosition + "th";
      }
    } else {
      argumentLabel = `\`${keyPath[0].toString()}\``;
    }
    const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart) => typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
    const error = new SolanaError(SOLANA_ERROR__RPC__INTEGER_OVERFLOW, {
      argumentLabel,
      keyPath,
      methodName,
      optionalPathLabel: path ? ` at path \`${path}\`` : "",
      value,
      ...path !== void 0 ? { path } : void 0
    });
    safeCaptureStackTrace(error, createSolanaJsonRpcIntegerOverflowError);
    return error;
  }
  var DEFAULT_RPC_CONFIG = {
    defaultCommitment: "confirmed",
    onIntegerOverflow(methodName, keyPath, value) {
      throw createSolanaJsonRpcIntegerOverflowError(methodName, keyPath, value);
    }
  };
  var EXPLICIT_ABORT_TOKEN = {
    EXPLICIT_ABORT_TOKEN: "This object is thrown from the request that underlies a series of coalesced requests when the last request in that series aborts"
  } ;
  function getRpcTransportWithRequestCoalescing(transport, getDeduplicationKey) {
    let coalescedRequestsByDeduplicationKey;
    return async function makeCoalescedHttpRequest(config) {
      const { payload, signal } = config;
      const deduplicationKey = getDeduplicationKey(payload);
      if (deduplicationKey === void 0) {
        return await transport(config);
      }
      if (!coalescedRequestsByDeduplicationKey) {
        Promise.resolve().then(() => {
          coalescedRequestsByDeduplicationKey = void 0;
        });
        coalescedRequestsByDeduplicationKey = {};
      }
      if (coalescedRequestsByDeduplicationKey[deduplicationKey] == null) {
        const abortController = new AbortController();
        const responsePromise = (async () => {
          try {
            return await transport({
              ...config,
              signal: abortController.signal
            });
          } catch (e3) {
            if (e3 === EXPLICIT_ABORT_TOKEN) {
              return;
            }
            throw e3;
          }
        })();
        coalescedRequestsByDeduplicationKey[deduplicationKey] = {
          abortController,
          numConsumers: 0,
          responsePromise
        };
      }
      const coalescedRequest = coalescedRequestsByDeduplicationKey[deduplicationKey];
      coalescedRequest.numConsumers++;
      if (signal) {
        const responsePromise = coalescedRequest.responsePromise;
        return await new Promise((resolve, reject) => {
          const handleAbort = (e3) => {
            signal.removeEventListener("abort", handleAbort);
            coalescedRequest.numConsumers -= 1;
            if (coalescedRequest.numConsumers === 0) {
              const abortController = coalescedRequest.abortController;
              abortController.abort(EXPLICIT_ABORT_TOKEN);
            }
            reject(e3.target.reason);
          };
          signal.addEventListener("abort", handleAbort);
          responsePromise.then(resolve).finally(() => {
            signal.removeEventListener("abort", handleAbort);
          });
        });
      } else {
        return await coalescedRequest.responsePromise;
      }
    };
  }
  function isJsonRpcPayload(payload) {
    if (payload == null || typeof payload !== "object" || Array.isArray(payload)) {
      return false;
    }
    return "jsonrpc" in payload && payload.jsonrpc === "2.0" && "method" in payload && typeof payload.method === "string" && "params" in payload;
  }
  function getSolanaRpcPayloadDeduplicationKey(payload) {
    return isJsonRpcPayload(payload) ? (0, import_fast_stable_stringify.default)([payload.method, payload.params]) : void 0;
  }
  function normalizeHeaders2(headers) {
    const out = {};
    for (const headerName in headers) {
      out[headerName.toLowerCase()] = headers[headerName];
    }
    return out;
  }
  function createDefaultRpcTransport(config) {
    var _a;
    return pipe(
      createHttpTransport({
        ...config,
        headers: {
          ...config.headers ? normalizeHeaders2(config.headers) : void 0,
          ...{
            // Keep these headers lowercase so they will override any user-supplied headers above.
            "solana-client": (_a = `js/${"2.0.0-preview.1"}`) != null ? _a : "UNKNOWN"
          }
        }
      }),
      (transport) => getRpcTransportWithRequestCoalescing(transport, getSolanaRpcPayloadDeduplicationKey)
    );
  }
  function createSolanaRpc(clusterUrl, config) {
    return createSolanaRpcFromTransport(createDefaultRpcTransport({ url: clusterUrl, ...config }));
  }
  function createSolanaRpcFromTransport(transport) {
    return createRpc({
      api: createSolanaRpcApi(DEFAULT_RPC_CONFIG),
      transport
    });
  }

  // ../rpc-subscriptions/dist/index.browser.js
  init_env_shim();

  // ../rpc-subscriptions-api/dist/index.browser.js
  init_env_shim();

  // ../rpc-subscriptions-spec/dist/index.browser.js
  init_env_shim();
  function createSubscriptionRpc(rpcConfig) {
    return makeProxy2(rpcConfig);
  }
  function makeProxy2(rpcConfig) {
    return new Proxy(rpcConfig.api, {
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      get(target, p, receiver) {
        return function(...rawParams) {
          const notificationName = p.toString();
          const createRpcSubscription = Reflect.get(target, notificationName, receiver);
          if (p.toString().endsWith("Notifications") === false && !createRpcSubscription) {
            throw new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_REQUEST, {
              notificationName
            });
          }
          const newRequest = createRpcSubscription ? createRpcSubscription(...rawParams) : {
            params: rawParams,
            subscribeMethodName: notificationName.replace(/Notifications$/, "Subscribe"),
            unsubscribeMethodName: notificationName.replace(/Notifications$/, "Unsubscribe")
          };
          return createPendingRpcSubscription(rpcConfig, newRequest);
        };
      }
    });
  }
  function registerIterableCleanup(iterable, cleanupFn) {
    (async () => {
      try {
        for await (const _ of iterable)
          ;
      } catch {
      } finally {
        cleanupFn();
      }
    })();
  }
  function createPendingRpcSubscription(rpcConfig, { params, subscribeMethodName, unsubscribeMethodName, responseTransformer }) {
    return {
      async subscribe({ abortSignal }) {
        abortSignal.throwIfAborted();
        let subscriptionId;
        function handleCleanup() {
          if (subscriptionId !== void 0) {
            const payload = createRpcMessage(unsubscribeMethodName, [subscriptionId]);
            connection.send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(payload).finally(() => {
              connectionAbortController.abort();
            });
          } else {
            connectionAbortController.abort();
          }
        }
        abortSignal.addEventListener("abort", handleCleanup);
        const connectionAbortController = new AbortController();
        const subscribeMessage = createRpcMessage(subscribeMethodName, params);
        const connection = await rpcConfig.transport({
          payload: subscribeMessage,
          signal: connectionAbortController.signal
        });
        function handleConnectionCleanup() {
          abortSignal.removeEventListener("abort", handleCleanup);
        }
        registerIterableCleanup(connection, handleConnectionCleanup);
        for await (const message of connection) {
          if ("id" in message && message.id === subscribeMessage.id) {
            if ("error" in message) {
              throw getSolanaErrorFromJsonRpcError(message.error);
            } else {
              subscriptionId = message.result;
              break;
            }
          }
        }
        if (subscriptionId == null) {
          throw new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID);
        }
        return {
          async *[Symbol.asyncIterator]() {
            for await (const message of connection) {
              if (!("params" in message) || message.params.subscription !== subscriptionId) {
                continue;
              }
              const notification = message.params.result;
              yield responseTransformer ? responseTransformer(notification, subscribeMethodName) : notification;
            }
          }
        };
      }
    };
  }
  function createRpcSubscriptionsApi(config) {
    return new Proxy({}, {
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      get(...args) {
        const [_, p] = args;
        const notificationName = p.toString();
        return function(...rawParams) {
          const params = (config == null ? void 0 : config.parametersTransformer) ? config == null ? void 0 : config.parametersTransformer(rawParams, notificationName) : rawParams;
          const responseTransformer = (config == null ? void 0 : config.responseTransformer) ? config == null ? void 0 : config.responseTransformer : (rawResponse) => rawResponse;
          const subscribeMethodName = (config == null ? void 0 : config.subscribeNotificationNameTransformer) ? config == null ? void 0 : config.subscribeNotificationNameTransformer(notificationName) : notificationName;
          const unsubscribeMethodName = (config == null ? void 0 : config.unsubscribeNotificationNameTransformer) ? config == null ? void 0 : config.unsubscribeNotificationNameTransformer(notificationName) : notificationName;
          return {
            params,
            responseTransformer,
            subscribeMethodName,
            unsubscribeMethodName
          };
        };
      }
    });
  }

  // ../rpc-subscriptions-api/dist/index.browser.js
  function createSolanaRpcSubscriptionsApi_INTERNAL(config) {
    return createRpcSubscriptionsApi({
      parametersTransformer: getDefaultParamsTransformerForSolanaRpc(config),
      responseTransformer: getDefaultResponseTransformerForSolanaRpc({
        allowedNumericKeyPaths: getAllowedNumericKeypaths2()
      }),
      subscribeNotificationNameTransformer: (notificationName) => notificationName.replace(/Notifications$/, "Subscribe"),
      unsubscribeNotificationNameTransformer: (notificationName) => notificationName.replace(/Notifications$/, "Unsubscribe")
    });
  }
  function createSolanaRpcSubscriptionsApi(config) {
    return createSolanaRpcSubscriptionsApi_INTERNAL(config);
  }
  function createSolanaRpcSubscriptionsApi_UNSTABLE(config) {
    return createSolanaRpcSubscriptionsApi_INTERNAL(
      config
    );
  }
  var memoizedKeypaths2;
  function getAllowedNumericKeypaths2() {
    if (!memoizedKeypaths2) {
      memoizedKeypaths2 = {
        accountNotifications: jsonParsedAccountsConfigs.map((c) => ["value", ...c]),
        blockNotifications: [
          ["value", "block", "blockTime"],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "preTokenBalances",
            KEYPATH_WILDCARD,
            "accountIndex"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "preTokenBalances",
            KEYPATH_WILDCARD,
            "uiTokenAmount",
            "decimals"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "postTokenBalances",
            KEYPATH_WILDCARD,
            "accountIndex"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "postTokenBalances",
            KEYPATH_WILDCARD,
            "uiTokenAmount",
            "decimals"
          ],
          ["value", "block", "transactions", KEYPATH_WILDCARD, "meta", "rewards", KEYPATH_WILDCARD, "commission"],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "index"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "instructions",
            KEYPATH_WILDCARD,
            "programIdIndex"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "meta",
            "innerInstructions",
            KEYPATH_WILDCARD,
            "instructions",
            KEYPATH_WILDCARD,
            "accounts",
            KEYPATH_WILDCARD
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "writableIndexes",
            KEYPATH_WILDCARD
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "addressTableLookups",
            KEYPATH_WILDCARD,
            "readonlyIndexes",
            KEYPATH_WILDCARD
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "instructions",
            KEYPATH_WILDCARD,
            "programIdIndex"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "instructions",
            KEYPATH_WILDCARD,
            "accounts",
            KEYPATH_WILDCARD
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "header",
            "numReadonlySignedAccounts"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "header",
            "numReadonlyUnsignedAccounts"
          ],
          [
            "value",
            "block",
            "transactions",
            KEYPATH_WILDCARD,
            "transaction",
            "message",
            "header",
            "numRequiredSignatures"
          ],
          ["value", "block", "rewards", KEYPATH_WILDCARD, "commission"]
        ],
        programNotifications: jsonParsedAccountsConfigs.flatMap((c) => [
          ["value", KEYPATH_WILDCARD, "account", ...c],
          [KEYPATH_WILDCARD, "account", ...c]
        ])
      };
    }
    return memoizedKeypaths2;
  }

  // ../rpc-subscriptions/dist/index.browser.js
  var import_fast_stable_stringify2 = __toESM(require_fast_stable_stringify(), 1);

  // ../rpc-subscriptions-transport-websocket/dist/index.browser.js
  init_env_shim();
  var e2 = globalThis.WebSocket;
  var EXPLICIT_ABORT_TOKEN2 = Symbol(
    "This symbol is thrown from a socket's iterator when the connection is explicitly aborted by the user" 
  );
  async function createWebSocketConnection({
    sendBufferHighWatermark,
    signal,
    url
  }) {
    return new Promise((resolve, reject) => {
      signal.addEventListener("abort", handleAbort, { once: true });
      const iteratorState = /* @__PURE__ */ new Map();
      function errorAndClearAllIteratorStates(reason) {
        const errorCallbacks = [...iteratorState.values()].filter((state) => state.__hasPolled).map(({ onError }) => onError);
        iteratorState.clear();
        errorCallbacks.forEach((cb) => {
          try {
            cb(reason);
          } catch {
          }
        });
      }
      function handleAbort() {
        errorAndClearAllIteratorStates(EXPLICIT_ABORT_TOKEN2);
        if (webSocket.readyState !== e2.CLOSED && webSocket.readyState !== e2.CLOSING) {
          webSocket.close(1e3);
        }
      }
      function handleClose(ev) {
        bufferDrainWatcher == null ? void 0 : bufferDrainWatcher.onCancel();
        signal.removeEventListener("abort", handleAbort);
        webSocket.removeEventListener("close", handleClose);
        webSocket.removeEventListener("error", handleError);
        webSocket.removeEventListener("open", handleOpen);
        webSocket.removeEventListener("message", handleMessage);
        errorAndClearAllIteratorStates(ev);
      }
      function handleError(ev) {
        if (!hasConnected) {
          reject(
            new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_FAILED_TO_CONNECT, {
              errorEvent: ev
            })
          );
        }
      }
      let hasConnected = false;
      let bufferDrainWatcher;
      function handleOpen() {
        hasConnected = true;
        resolve({
          async send(payload) {
            const message = JSON.stringify(payload);
            if (!bufferDrainWatcher && webSocket.readyState === e2.OPEN && webSocket.bufferedAmount > sendBufferHighWatermark) {
              let onCancel;
              const promise = new Promise((resolve2, reject2) => {
                const intervalId = setInterval(() => {
                  if (webSocket.readyState !== e2.OPEN || !(webSocket.bufferedAmount > sendBufferHighWatermark)) {
                    clearInterval(intervalId);
                    bufferDrainWatcher = void 0;
                    resolve2();
                  }
                }, 16);
                onCancel = () => {
                  bufferDrainWatcher = void 0;
                  clearInterval(intervalId);
                  reject2(
                    new SolanaError(
                      SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED
                    )
                  );
                };
              });
              bufferDrainWatcher = {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onCancel,
                promise
              };
            }
            if (bufferDrainWatcher) {
              await bufferDrainWatcher.promise;
            }
            webSocket.send(message);
          },
          async *[Symbol.asyncIterator]() {
            const iteratorKey = Symbol();
            iteratorState.set(iteratorKey, { __hasPolled: false, queuedMessages: [] });
            try {
              while (true) {
                const state = iteratorState.get(iteratorKey);
                if (!state) {
                  throw new SolanaError(
                    SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING
                  );
                }
                if (state.__hasPolled) {
                  throw new SolanaError(
                    SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE
                  );
                }
                const queuedMessages = state.queuedMessages;
                if (queuedMessages.length) {
                  state.queuedMessages = [];
                  yield* queuedMessages;
                } else {
                  try {
                    yield await new Promise((resolve2, reject2) => {
                      iteratorState.set(iteratorKey, {
                        __hasPolled: true,
                        onError: reject2,
                        onMessage: resolve2
                      });
                    });
                  } catch (e22) {
                    if (e22 === EXPLICIT_ABORT_TOKEN2) {
                      return;
                    } else {
                      throw new SolanaError(
                        SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CONNECTION_CLOSED,
                        {
                          cause: e22
                        }
                      );
                    }
                  }
                }
              }
            } finally {
              iteratorState.delete(iteratorKey);
            }
          }
        });
      }
      function handleMessage({ data }) {
        const message = JSON.parse(data);
        iteratorState.forEach((state, iteratorKey) => {
          if (state.__hasPolled) {
            const { onMessage } = state;
            iteratorState.set(iteratorKey, { __hasPolled: false, queuedMessages: [] });
            onMessage(message);
          } else {
            state.queuedMessages.push(message);
          }
        });
      }
      const webSocket = new e2(url);
      webSocket.addEventListener("close", handleClose);
      webSocket.addEventListener("error", handleError);
      webSocket.addEventListener("open", handleOpen);
      webSocket.addEventListener("message", handleMessage);
    });
  }
  function createWebSocketTransport({ sendBufferHighWatermark, url }) {
    if (/^wss?:/i.test(url) === false) {
      const protocolMatch = url.match(/^([^:]+):/);
      throw new DOMException(
        protocolMatch ? `Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${protocolMatch[1]}:' is not allowed.` : `Failed to construct 'WebSocket': The URL '${url}' is invalid.`
      );
    }
    return async function sendWebSocketMessage({ payload, signal }) {
      signal == null ? void 0 : signal.throwIfAborted();
      const connection = await createWebSocketConnection({
        sendBufferHighWatermark,
        signal,
        url
      });
      signal == null ? void 0 : signal.throwIfAborted();
      await connection.send(payload);
      return {
        [Symbol.asyncIterator]: connection[Symbol.asyncIterator].bind(connection),
        send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: connection.send.bind(connection)
      };
    };
  }
  function createSolanaJsonRpcIntegerOverflowError2(methodName, keyPath, value) {
    let argumentLabel = "";
    if (typeof keyPath[0] === "number") {
      const argPosition = keyPath[0] + 1;
      const lastDigit = argPosition % 10;
      const lastTwoDigits = argPosition % 100;
      if (lastDigit == 1 && lastTwoDigits != 11) {
        argumentLabel = argPosition + "st";
      } else if (lastDigit == 2 && lastTwoDigits != 12) {
        argumentLabel = argPosition + "nd";
      } else if (lastDigit == 3 && lastTwoDigits != 13) {
        argumentLabel = argPosition + "rd";
      } else {
        argumentLabel = argPosition + "th";
      }
    } else {
      argumentLabel = `\`${keyPath[0].toString()}\``;
    }
    const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart) => typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
    const error = new SolanaError(SOLANA_ERROR__RPC__INTEGER_OVERFLOW, {
      argumentLabel,
      keyPath,
      methodName,
      optionalPathLabel: path ? ` at path \`${path}\`` : "",
      value,
      ...path !== void 0 ? { path } : void 0
    });
    safeCaptureStackTrace(error, createSolanaJsonRpcIntegerOverflowError2);
    return error;
  }
  var DEFAULT_RPC_CONFIG2 = {
    defaultCommitment: "confirmed",
    onIntegerOverflow(methodName, keyPath, value) {
      throw createSolanaJsonRpcIntegerOverflowError2(methodName, keyPath, value);
    }
  };
  function registerIterableCleanup2(iterable, cleanupFn) {
    (async () => {
      try {
        for await (const _ of iterable)
          ;
      } catch {
      } finally {
        cleanupFn();
      }
    })();
  }
  function getCachedAbortableIterableFactory({
    getAbortSignalFromInputArgs,
    getCacheKeyFromInputArgs,
    onCacheHit,
    onCreateIterable
  }) {
    const cache = /* @__PURE__ */ new Map();
    function getCacheEntryOrThrow(cacheKey) {
      const currentCacheEntry = cache.get(cacheKey);
      if (!currentCacheEntry) {
        throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING, {
          cacheKey: cacheKey.toString()
        });
      }
      return currentCacheEntry;
    }
    return async (...args) => {
      const cacheKey = getCacheKeyFromInputArgs(...args);
      const signal = getAbortSignalFromInputArgs(...args);
      if (cacheKey === void 0) {
        return await onCreateIterable(signal, ...args);
      }
      const cleanup = () => {
        cache.delete(cacheKey);
        signal.removeEventListener("abort", handleAbort);
      };
      const handleAbort = () => {
        const cacheEntry = getCacheEntryOrThrow(cacheKey);
        if (cacheEntry.purgeScheduled !== true) {
          cacheEntry.purgeScheduled = true;
          globalThis.queueMicrotask(() => {
            cacheEntry.purgeScheduled = false;
            if (cacheEntry.referenceCount === 0) {
              cacheEntry.abortController.abort();
              cleanup();
            }
          });
        }
        cacheEntry.referenceCount--;
      };
      signal.addEventListener("abort", handleAbort);
      try {
        const cacheEntry = cache.get(cacheKey);
        if (!cacheEntry) {
          const singletonAbortController = new AbortController();
          const newIterablePromise = onCreateIterable(singletonAbortController.signal, ...args);
          const newCacheEntry = {
            abortController: singletonAbortController,
            iterable: newIterablePromise,
            purgeScheduled: false,
            referenceCount: 1
          };
          cache.set(cacheKey, newCacheEntry);
          const newIterable = await newIterablePromise;
          registerIterableCleanup2(newIterable, cleanup);
          newCacheEntry.iterable = newIterable;
          return newIterable;
        } else {
          cacheEntry.referenceCount++;
          const iterableOrIterablePromise = cacheEntry.iterable;
          const cachedIterable = "then" in iterableOrIterablePromise ? await iterableOrIterablePromise : iterableOrIterablePromise;
          await onCacheHit(cachedIterable, ...args);
          return cachedIterable;
        }
      } catch (e3) {
        cleanup();
        throw e3;
      }
    };
  }
  var EXPLICIT_ABORT_TOKEN3 = Symbol(
    "This symbol is thrown from a subscription's iterator when the subscription is explicitly aborted by the user" 
  );
  function registerIterableCleanup22(iterable, cleanupFn) {
    (async () => {
      try {
        for await (const _ of iterable)
          ;
      } catch {
      } finally {
        cleanupFn();
      }
    })();
  }
  function getRpcSubscriptionsWithSubscriptionCoalescing({
    getDeduplicationKey,
    rpcSubscriptions
  }) {
    const cache = /* @__PURE__ */ new Map();
    return new Proxy(rpcSubscriptions, {
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      get(target, p, receiver) {
        const subscriptionMethod = Reflect.get(target, p, receiver);
        if (typeof subscriptionMethod !== "function") {
          return subscriptionMethod;
        }
        return function(...rawParams) {
          const deduplicationKey = getDeduplicationKey(p, rawParams);
          if (deduplicationKey === void 0) {
            return subscriptionMethod(...rawParams);
          }
          if (cache.has(deduplicationKey)) {
            return cache.get(deduplicationKey);
          }
          const iterableFactory = getCachedAbortableIterableFactory({
            getAbortSignalFromInputArgs: ({ abortSignal }) => abortSignal,
            getCacheKeyFromInputArgs: () => deduplicationKey,
            async onCacheHit(_iterable, _config) {
            },
            async onCreateIterable(abortSignal, config) {
              const pendingSubscription2 = subscriptionMethod(
                ...rawParams
              );
              const iterable = await pendingSubscription2.subscribe({
                ...config,
                abortSignal
              });
              registerIterableCleanup22(iterable, () => {
                cache.delete(deduplicationKey);
              });
              return iterable;
            }
          });
          const pendingSubscription = {
            async subscribe(...args) {
              const iterable = await iterableFactory(...args);
              const { abortSignal } = args[0];
              let abortPromise;
              return {
                ...iterable,
                async *[Symbol.asyncIterator]() {
                  abortPromise || (abortPromise = abortSignal.aborted ? Promise.reject(EXPLICIT_ABORT_TOKEN3) : new Promise((_, reject) => {
                    abortSignal.addEventListener("abort", () => {
                      reject(EXPLICIT_ABORT_TOKEN3);
                    });
                  }));
                  try {
                    const iterator = iterable[Symbol.asyncIterator]();
                    while (true) {
                      const iteratorResult = await Promise.race([iterator.next(), abortPromise]);
                      if (iteratorResult.done) {
                        return;
                      } else {
                        yield iteratorResult.value;
                      }
                    }
                  } catch (e3) {
                    if (e3 === EXPLICIT_ABORT_TOKEN3) {
                      return;
                    }
                    cache.delete(deduplicationKey);
                    throw e3;
                  }
                }
              };
            }
          };
          cache.set(deduplicationKey, pendingSubscription);
          return pendingSubscription;
        };
      }
    });
  }
  var PING_PAYLOAD = {
    jsonrpc: "2.0",
    method: "ping"
  };
  function getWebSocketTransportWithAutoping({
    intervalMs,
    transport
  }) {
    const pingableConnections = /* @__PURE__ */ new Map();
    return async (...args) => {
      const connection = await transport(...args);
      let intervalId;
      function sendPing() {
        connection.send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(PING_PAYLOAD);
      }
      function restartPingTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(sendPing, intervalMs);
      }
      if (pingableConnections.has(connection) === false) {
        pingableConnections.set(connection, {
          [Symbol.asyncIterator]: connection[Symbol.asyncIterator].bind(connection),
          send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: (...args2) => {
            restartPingTimer();
            return connection.send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(...args2);
          }
        });
        (async () => {
          try {
            for await (const _ of connection) {
              restartPingTimer();
            }
          } catch {
          } finally {
            pingableConnections.delete(connection);
            clearInterval(intervalId);
            if (handleOffline) {
              globalThis.window.removeEventListener("offline", handleOffline);
            }
            if (handleOnline) {
              globalThis.window.removeEventListener("online", handleOnline);
            }
          }
        })();
        if (globalThis.navigator.onLine) {
          restartPingTimer();
        }
        let handleOffline;
        let handleOnline;
        {
          handleOffline = () => {
            clearInterval(intervalId);
          };
          handleOnline = () => {
            sendPing();
            restartPingTimer();
          };
          globalThis.window.addEventListener("offline", handleOffline);
          globalThis.window.addEventListener("online", handleOnline);
        }
      }
      return pingableConnections.get(connection);
    };
  }
  var NULL_SHARD_CACHE_KEY = Symbol(
    "Cache key to use when there is no connection sharding strategy" 
  );
  function getWebSocketTransportWithConnectionSharding({
    getShard,
    transport
  }) {
    return getCachedAbortableIterableFactory({
      getAbortSignalFromInputArgs: ({ signal }) => signal,
      getCacheKeyFromInputArgs: ({ payload }) => getShard ? getShard(payload) : NULL_SHARD_CACHE_KEY,
      onCacheHit: (connection, { payload }) => connection.send_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(payload),
      onCreateIterable: (abortSignal, config) => transport({
        ...config,
        signal: abortSignal
      })
    });
  }
  function createDefaultRpcSubscriptionsTransport(config) {
    var _a;
    const { getShard, intervalMs, ...rest } = config;
    return pipe(
      createWebSocketTransport({
        ...rest,
        sendBufferHighWatermark: (_a = config.sendBufferHighWatermark) != null ? _a : (
          // Let 128KB of data into the WebSocket buffer before buffering it in the app.
          131072
        )
      }),
      (transport) => getWebSocketTransportWithAutoping({
        intervalMs: intervalMs != null ? intervalMs : 5e3,
        transport
      }),
      (transport) => getWebSocketTransportWithConnectionSharding({
        getShard,
        transport
      })
    );
  }
  function createSolanaRpcSubscriptions(clusterUrl, config) {
    const transport = createDefaultRpcSubscriptionsTransport({ url: clusterUrl, ...config });
    return createSolanaRpcSubscriptionsFromTransport(transport);
  }
  function createSolanaRpcSubscriptions_UNSTABLE(clusterUrl, config) {
    return createSolanaRpcSubscriptions(
      clusterUrl,
      config
    );
  }
  function createSolanaRpcSubscriptionsFromTransport(transport) {
    return pipe(
      createSubscriptionRpc({
        api: createSolanaRpcSubscriptionsApi(DEFAULT_RPC_CONFIG2),
        transport
      }),
      (rpcSubscriptions) => getRpcSubscriptionsWithSubscriptionCoalescing({
        getDeduplicationKey: (...args) => (0, import_fast_stable_stringify2.default)(args),
        rpcSubscriptions
      })
    );
  }
  function createSolanaRpcSubscriptionsFromTransport_UNSTABLE(transport) {
    return createSolanaRpcSubscriptionsFromTransport(transport);
  }

  // ../rpc-types/dist/index.browser.js
  init_env_shim();
  function getEncodedSize2(value, encoder) {
    return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
  }
  function createEncoder2(encoder) {
    return Object.freeze({
      ...encoder,
      encode: (value) => {
        const bytes = new Uint8Array(getEncodedSize2(value, encoder));
        encoder.write(value, bytes, 0);
        return bytes;
      }
    });
  }
  function createDecoder2(decoder) {
    return Object.freeze({
      ...decoder,
      decode: (bytes, offset = 0) => decoder.read(bytes, offset)[0]
    });
  }
  function isFixedSize2(codec) {
    return "fixedSize" in codec && typeof codec.fixedSize === "number";
  }
  function isVariableSize2(codec) {
    return !isFixedSize2(codec);
  }
  function combineCodec2(encoder, decoder) {
    if (isFixedSize2(encoder) !== isFixedSize2(decoder)) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH);
    }
    if (isFixedSize2(encoder) && isFixedSize2(decoder) && encoder.fixedSize !== decoder.fixedSize) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH, {
        decoderFixedSize: decoder.fixedSize,
        encoderFixedSize: encoder.fixedSize
      });
    }
    if (!isFixedSize2(encoder) && !isFixedSize2(decoder) && encoder.maxSize !== decoder.maxSize) {
      throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH, {
        decoderMaxSize: decoder.maxSize,
        encoderMaxSize: encoder.maxSize
      });
    }
    return {
      ...decoder,
      ...encoder,
      decode: decoder.decode,
      encode: encoder.encode,
      read: decoder.read,
      write: encoder.write
    };
  }
  function mapEncoder2(encoder, unmap) {
    return createEncoder2({
      ...isVariableSize2(encoder) ? { ...encoder, getSizeFromValue: (value) => encoder.getSizeFromValue(unmap(value)) } : encoder,
      write: (value, bytes, offset) => encoder.write(unmap(value), bytes, offset)
    });
  }
  function mapDecoder2(decoder, map) {
    return createDecoder2({
      ...decoder,
      read: (bytes, offset) => {
        const [value, newOffset] = decoder.read(bytes, offset);
        return [map(value, bytes, offset), newOffset];
      }
    });
  }
  var memoizedBase58Encoder2;
  var memoizedBase58Decoder2;
  function getMemoizedBase58Encoder2() {
    if (!memoizedBase58Encoder2)
      memoizedBase58Encoder2 = getBase58Encoder();
    return memoizedBase58Encoder2;
  }
  function getMemoizedBase58Decoder2() {
    if (!memoizedBase58Decoder2)
      memoizedBase58Decoder2 = getBase58Decoder();
    return memoizedBase58Decoder2;
  }
  function isBlockhash(putativeBlockhash) {
    if (
      // Lowest value (32 bytes of zeroes)
      putativeBlockhash.length < 32 || // Highest value (32 bytes of 255)
      putativeBlockhash.length > 44
    ) {
      return false;
    }
    const base58Encoder2 = getMemoizedBase58Encoder2();
    const bytes = base58Encoder2.encode(putativeBlockhash);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
      return false;
    }
    return true;
  }
  function assertIsBlockhash(putativeBlockhash) {
    if (
      // Lowest value (32 bytes of zeroes)
      putativeBlockhash.length < 32 || // Highest value (32 bytes of 255)
      putativeBlockhash.length > 44
    ) {
      throw new SolanaError(SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE, {
        actualLength: putativeBlockhash.length
      });
    }
    const base58Encoder2 = getMemoizedBase58Encoder2();
    const bytes = base58Encoder2.encode(putativeBlockhash);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
      throw new SolanaError(SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH, {
        actualLength: numBytes
      });
    }
  }
  function blockhash(putativeBlockhash) {
    assertIsBlockhash(putativeBlockhash);
    return putativeBlockhash;
  }
  function getBlockhashEncoder() {
    return mapEncoder2(
      getStringEncoder({ encoding: getMemoizedBase58Encoder2(), size: 32 }),
      (putativeBlockhash) => blockhash(putativeBlockhash)
    );
  }
  function getBlockhashDecoder() {
    return getStringDecoder({ encoding: getMemoizedBase58Decoder2(), size: 32 });
  }
  function getBlockhashCodec() {
    return combineCodec2(getBlockhashEncoder(), getBlockhashDecoder());
  }
  function getBlockhashComparator() {
    return new Intl.Collator("en", {
      caseFirst: "lower",
      ignorePunctuation: false,
      localeMatcher: "best fit",
      numeric: false,
      sensitivity: "variant",
      usage: "sort"
    }).compare;
  }
  function mainnet(putativeString) {
    return putativeString;
  }
  function devnet(putativeString) {
    return putativeString;
  }
  function testnet(putativeString) {
    return putativeString;
  }
  function getCommitmentScore(commitment) {
    switch (commitment) {
      case "finalized":
        return 2;
      case "confirmed":
        return 1;
      case "processed":
        return 0;
      default:
        throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE, {
          unexpectedValue: commitment
        });
    }
  }
  function commitmentComparator(a, b) {
    if (a === b) {
      return 0;
    }
    return getCommitmentScore(a) < getCommitmentScore(b) ? -1 : 1;
  }
  var maxU64Value = 18446744073709551615n;
  var memoizedU64Encoder;
  var memoizedU64Decoder;
  function getMemoizedU64Encoder() {
    if (!memoizedU64Encoder)
      memoizedU64Encoder = getU64Encoder();
    return memoizedU64Encoder;
  }
  function getMemoizedU64Decoder() {
    if (!memoizedU64Decoder)
      memoizedU64Decoder = getU64Decoder();
    return memoizedU64Decoder;
  }
  function isLamports(putativeLamports) {
    return putativeLamports >= 0 && putativeLamports <= maxU64Value;
  }
  function assertIsLamports(putativeLamports) {
    if (putativeLamports < 0 || putativeLamports > maxU64Value) {
      throw new SolanaError(SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE);
    }
  }
  function lamports(putativeLamports) {
    assertIsLamports(putativeLamports);
    return putativeLamports;
  }
  function getLamportsEncoder() {
    return getMemoizedU64Encoder();
  }
  function getLamportsDecoder() {
    return mapDecoder2(getMemoizedU64Decoder(), lamports);
  }
  function getLamportsCodec() {
    return combineCodec2(getLamportsEncoder(), getLamportsDecoder());
  }
  function isStringifiedBigInt(putativeBigInt) {
    try {
      BigInt(putativeBigInt);
      return true;
    } catch (_) {
      return false;
    }
  }
  function assertIsStringifiedBigInt(putativeBigInt) {
    try {
      BigInt(putativeBigInt);
    } catch {
      throw new SolanaError(SOLANA_ERROR__MALFORMED_BIGINT_STRING, {
        value: putativeBigInt
      });
    }
  }
  function stringifiedBigInt(putativeBigInt) {
    assertIsStringifiedBigInt(putativeBigInt);
    return putativeBigInt;
  }
  function isStringifiedNumber(putativeNumber) {
    return !Number.isNaN(Number(putativeNumber));
  }
  function assertIsStringifiedNumber(putativeNumber) {
    if (Number.isNaN(Number(putativeNumber))) {
      throw new SolanaError(SOLANA_ERROR__MALFORMED_NUMBER_STRING, {
        value: putativeNumber
      });
    }
  }
  function stringifiedNumber(putativeNumber) {
    assertIsStringifiedNumber(putativeNumber);
    return putativeNumber;
  }
  function isUnixTimestamp(putativeTimestamp) {
    if (putativeTimestamp > 864e13 || putativeTimestamp < -864e13) {
      return false;
    }
    return true;
  }
  function assertIsUnixTimestamp(putativeTimestamp) {
    if (putativeTimestamp > 864e13 || putativeTimestamp < -864e13) {
      throw new SolanaError(SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE, {
        value: putativeTimestamp
      });
    }
  }
  function unixTimestamp(putativeTimestamp) {
    assertIsUnixTimestamp(putativeTimestamp);
    return putativeTimestamp;
  }

  // ../signers/dist/index.browser.js
  init_env_shim();

  // ../transactions/dist/index.browser.js
  init_env_shim();
  var memoizedBase58Encoder3;
  function getMemoizedBase58Encoder3() {
    if (!memoizedBase58Encoder3)
      memoizedBase58Encoder3 = getBase58Encoder();
    return memoizedBase58Encoder3;
  }
  function assertIsBlockhash2(putativeBlockhash) {
    if (
      // Lowest value (32 bytes of zeroes)
      putativeBlockhash.length < 32 || // Highest value (32 bytes of 255)
      putativeBlockhash.length > 44
    ) {
      throw new SolanaError(SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE, {
        actualLength: putativeBlockhash.length
      });
    }
    const base58Encoder2 = getMemoizedBase58Encoder3();
    const bytes = base58Encoder2.encode(putativeBlockhash);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
      throw new SolanaError(SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH, {
        actualLength: numBytes
      });
    }
  }
  function getUnsignedTransaction(transaction) {
    if ("signatures" in transaction) {
      const {
        signatures: _,
        // eslint-disable-line @typescript-eslint/no-unused-vars
        ...unsignedTransaction
      } = transaction;
      return unsignedTransaction;
    } else {
      return transaction;
    }
  }
  function isTransactionWithBlockhashLifetime(transaction) {
    const lifetimeConstraintShapeMatches = "lifetimeConstraint" in transaction && typeof transaction.lifetimeConstraint.blockhash === "string" && typeof transaction.lifetimeConstraint.lastValidBlockHeight === "bigint";
    if (!lifetimeConstraintShapeMatches)
      return false;
    try {
      assertIsBlockhash2(transaction.lifetimeConstraint.blockhash);
      return true;
    } catch {
      return false;
    }
  }
  function assertIsTransactionWithBlockhashLifetime(transaction) {
    if (!isTransactionWithBlockhashLifetime(transaction)) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME);
    }
  }
  function setTransactionLifetimeUsingBlockhash(blockhashLifetimeConstraint, transaction) {
    if ("lifetimeConstraint" in transaction && transaction.lifetimeConstraint.blockhash === blockhashLifetimeConstraint.blockhash && transaction.lifetimeConstraint.lastValidBlockHeight === blockhashLifetimeConstraint.lastValidBlockHeight) {
      return transaction;
    }
    const out = {
      ...getUnsignedTransaction(transaction),
      lifetimeConstraint: blockhashLifetimeConstraint
    };
    Object.freeze(out);
    return out;
  }
  function createTransaction({
    version
  }) {
    const out = {
      instructions: [],
      version
    };
    Object.freeze(out);
    return out;
  }
  var AccountRole2 = /* @__PURE__ */ ((AccountRole22) => {
    AccountRole22[AccountRole22["WRITABLE_SIGNER"] = /* 3 */
    3] = "WRITABLE_SIGNER";
    AccountRole22[AccountRole22["READONLY_SIGNER"] = /* 2 */
    2] = "READONLY_SIGNER";
    AccountRole22[AccountRole22["WRITABLE"] = /* 1 */
    1] = "WRITABLE";
    AccountRole22[AccountRole22["READONLY"] = /* 0 */
    0] = "READONLY";
    return AccountRole22;
  })(AccountRole2 || {});
  var IS_WRITABLE_BITMASK2 = 1;
  function isSignerRole2(role) {
    return role >= 2;
  }
  function isWritableRole2(role) {
    return (role & IS_WRITABLE_BITMASK2) !== 0;
  }
  function mergeRoles2(roleA, roleB) {
    return roleA | roleB;
  }
  var RECENT_BLOCKHASHES_SYSVAR_ADDRESS = "SysvarRecentB1ockHashes11111111111111111111";
  var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
  function assertIsDurableNonceTransaction(transaction) {
    if (!isDurableNonceTransaction(transaction)) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME);
    }
  }
  function createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress) {
    return {
      accounts: [
        { address: nonceAccountAddress, role: AccountRole2.WRITABLE },
        {
          address: RECENT_BLOCKHASHES_SYSVAR_ADDRESS,
          role: AccountRole2.READONLY
        },
        { address: nonceAuthorityAddress, role: AccountRole2.READONLY_SIGNER }
      ],
      data: new Uint8Array([4, 0, 0, 0]),
      programAddress: SYSTEM_PROGRAM_ADDRESS
    };
  }
  function isAdvanceNonceAccountInstruction(instruction) {
    var _a;
    return instruction.programAddress === SYSTEM_PROGRAM_ADDRESS && // Test for `AdvanceNonceAccount` instruction data
    instruction.data != null && isAdvanceNonceAccountInstructionData(instruction.data) && // Test for exactly 3 accounts
    ((_a = instruction.accounts) == null ? void 0 : _a.length) === 3 && // First account is nonce account address
    instruction.accounts[0].address != null && instruction.accounts[0].role === AccountRole2.WRITABLE && // Second account is recent blockhashes sysvar
    instruction.accounts[1].address === RECENT_BLOCKHASHES_SYSVAR_ADDRESS && instruction.accounts[1].role === AccountRole2.READONLY && // Third account is nonce authority account
    instruction.accounts[2].address != null && isSignerRole2(instruction.accounts[2].role);
  }
  function isAdvanceNonceAccountInstructionData(data) {
    return data.byteLength === 4 && data[0] === 4 && data[1] === 0 && data[2] === 0 && data[3] === 0;
  }
  function isDurableNonceTransaction(transaction) {
    return "lifetimeConstraint" in transaction && typeof transaction.lifetimeConstraint.nonce === "string" && transaction.instructions[0] != null && isAdvanceNonceAccountInstruction(transaction.instructions[0]);
  }
  function isAdvanceNonceAccountInstructionForNonce(instruction, nonceAccountAddress, nonceAuthorityAddress) {
    return instruction.accounts[0].address === nonceAccountAddress && instruction.accounts[2].address === nonceAuthorityAddress;
  }
  function setTransactionLifetimeUsingDurableNonce({
    nonce,
    nonceAccountAddress,
    nonceAuthorityAddress
  }, transaction) {
    let newInstructions;
    const firstInstruction = transaction.instructions[0];
    if (firstInstruction && isAdvanceNonceAccountInstruction(firstInstruction)) {
      if (isAdvanceNonceAccountInstructionForNonce(firstInstruction, nonceAccountAddress, nonceAuthorityAddress)) {
        if (isDurableNonceTransaction(transaction) && transaction.lifetimeConstraint.nonce === nonce) {
          return transaction;
        } else {
          newInstructions = [firstInstruction, ...transaction.instructions.slice(1)];
        }
      } else {
        newInstructions = [
          createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress),
          ...transaction.instructions.slice(1)
        ];
      }
    } else {
      newInstructions = [
        createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress),
        ...transaction.instructions
      ];
    }
    const out = {
      ...getUnsignedTransaction(transaction),
      instructions: newInstructions,
      lifetimeConstraint: {
        nonce
      }
    };
    Object.freeze(out);
    return out;
  }
  function setTransactionFeePayer(feePayer, transaction) {
    if ("feePayer" in transaction && feePayer === transaction.feePayer) {
      return transaction;
    }
    const out = {
      ...getUnsignedTransaction(transaction),
      feePayer
    };
    Object.freeze(out);
    return out;
  }
  function appendTransactionInstruction(instruction, transaction) {
    return appendTransactionInstructions([instruction], transaction);
  }
  function appendTransactionInstructions(instructions, transaction) {
    const out = {
      ...getUnsignedTransaction(transaction),
      instructions: [...transaction.instructions, ...instructions]
    };
    Object.freeze(out);
    return out;
  }
  function prependTransactionInstruction(instruction, transaction) {
    return prependTransactionInstructions([instruction], transaction);
  }
  function prependTransactionInstructions(instructions, transaction) {
    const out = {
      ...getUnsignedTransaction(transaction),
      instructions: [...instructions, ...transaction.instructions]
    };
    Object.freeze(out);
    return out;
  }
  function getAccountMetas(message) {
    const { header } = message;
    const numWritableSignerAccounts = header.numSignerAccounts - header.numReadonlySignerAccounts;
    const numWritableNonSignerAccounts = message.staticAccounts.length - header.numSignerAccounts - header.numReadonlyNonSignerAccounts;
    const accountMetas = [];
    let accountIndex = 0;
    for (let i = 0; i < numWritableSignerAccounts; i++) {
      accountMetas.push({
        address: message.staticAccounts[accountIndex],
        role: AccountRole2.WRITABLE_SIGNER
      });
      accountIndex++;
    }
    for (let i = 0; i < header.numReadonlySignerAccounts; i++) {
      accountMetas.push({
        address: message.staticAccounts[accountIndex],
        role: AccountRole2.READONLY_SIGNER
      });
      accountIndex++;
    }
    for (let i = 0; i < numWritableNonSignerAccounts; i++) {
      accountMetas.push({
        address: message.staticAccounts[accountIndex],
        role: AccountRole2.WRITABLE
      });
      accountIndex++;
    }
    for (let i = 0; i < header.numReadonlyNonSignerAccounts; i++) {
      accountMetas.push({
        address: message.staticAccounts[accountIndex],
        role: AccountRole2.READONLY
      });
      accountIndex++;
    }
    return accountMetas;
  }
  function getAddressLookupMetas(compiledAddressTableLookups, addressesByLookupTableAddress) {
    const compiledAddressTableLookupAddresses = compiledAddressTableLookups.map((l) => l.lookupTableAddress);
    const missing = compiledAddressTableLookupAddresses.filter((a) => addressesByLookupTableAddress[a] === void 0);
    if (missing.length > 0) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING, {
        lookupTableAddresses: missing
      });
    }
    const readOnlyMetas = [];
    const writableMetas = [];
    for (const lookup of compiledAddressTableLookups) {
      const addresses = addressesByLookupTableAddress[lookup.lookupTableAddress];
      const highestIndex = Math.max(...lookup.readableIndices, ...lookup.writableIndices);
      if (highestIndex >= addresses.length) {
        throw new SolanaError(
          SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE,
          {
            highestKnownIndex: addresses.length - 1,
            highestRequestedIndex: highestIndex,
            lookupTableAddress: lookup.lookupTableAddress
          }
        );
      }
      const readOnlyForLookup = lookup.readableIndices.map((r) => ({
        address: addresses[r],
        addressIndex: r,
        lookupTableAddress: lookup.lookupTableAddress,
        role: AccountRole2.READONLY
      }));
      readOnlyMetas.push(...readOnlyForLookup);
      const writableForLookup = lookup.writableIndices.map((w) => ({
        address: addresses[w],
        addressIndex: w,
        lookupTableAddress: lookup.lookupTableAddress,
        role: AccountRole2.WRITABLE
      }));
      writableMetas.push(...writableForLookup);
    }
    return [...writableMetas, ...readOnlyMetas];
  }
  function convertInstruction(instruction, accountMetas) {
    var _a, _b;
    const programAddress = (_a = accountMetas[instruction.programAddressIndex]) == null ? void 0 : _a.address;
    if (!programAddress) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND, {
        index: instruction.programAddressIndex
      });
    }
    const accounts = (_b = instruction.accountIndices) == null ? void 0 : _b.map((accountIndex) => accountMetas[accountIndex]);
    const { data } = instruction;
    return {
      programAddress,
      ...accounts && accounts.length ? { accounts } : {},
      ...data && data.length ? { data } : {}
    };
  }
  function getLifetimeConstraint(messageLifetimeToken, firstInstruction, lastValidBlockHeight) {
    if (!firstInstruction || !isAdvanceNonceAccountInstruction(firstInstruction)) {
      return {
        blockhash: messageLifetimeToken,
        lastValidBlockHeight: lastValidBlockHeight != null ? lastValidBlockHeight : 2n ** 64n - 1n
        // U64 MAX
      };
    } else {
      const nonceAccountAddress = firstInstruction.accounts[0].address;
      assertIsAddress(nonceAccountAddress);
      const nonceAuthorityAddress = firstInstruction.accounts[2].address;
      assertIsAddress(nonceAuthorityAddress);
      return {
        nonce: messageLifetimeToken,
        nonceAccountAddress,
        nonceAuthorityAddress
      };
    }
  }
  function convertSignatures(compiledTransaction) {
    const {
      compiledMessage: { staticAccounts },
      signatures
    } = compiledTransaction;
    return signatures.reduce((acc, sig, index) => {
      const allZeros = sig.every((byte) => byte === 0);
      if (allZeros)
        return acc;
      const address2 = staticAccounts[index];
      return { ...acc, [address2]: sig };
    }, {});
  }
  function decompileTransaction(compiledTransaction, config) {
    var _a;
    const { compiledMessage } = compiledTransaction;
    const feePayer = compiledMessage.staticAccounts[0];
    if (!feePayer) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING);
    }
    const accountMetas = getAccountMetas(compiledMessage);
    const accountLookupMetas = "addressTableLookups" in compiledMessage && compiledMessage.addressTableLookups !== void 0 && compiledMessage.addressTableLookups.length > 0 ? getAddressLookupMetas(compiledMessage.addressTableLookups, (_a = config == null ? void 0 : config.addressesByLookupTableAddress) != null ? _a : {}) : [];
    const transactionMetas = [...accountMetas, ...accountLookupMetas];
    const instructions = compiledMessage.instructions.map(
      (compiledInstruction) => convertInstruction(compiledInstruction, transactionMetas)
    );
    const firstInstruction = instructions[0];
    const lifetimeConstraint = getLifetimeConstraint(
      compiledMessage.lifetimeToken,
      firstInstruction,
      config == null ? void 0 : config.lastValidBlockHeight
    );
    const signatures = convertSignatures(compiledTransaction);
    return pipe(
      createTransaction({ version: compiledMessage.version }),
      (tx) => setTransactionFeePayer(feePayer, tx),
      (tx) => instructions.reduce((acc, instruction) => {
        return appendTransactionInstruction(instruction, acc);
      }, tx),
      (tx) => "blockhash" in lifetimeConstraint ? setTransactionLifetimeUsingBlockhash(lifetimeConstraint, tx) : setTransactionLifetimeUsingDurableNonce(lifetimeConstraint, tx),
      (tx) => Object.keys(signatures).length > 0 ? { ...tx, signatures } : tx
    );
  }
  function upsert(addressMap, address2, update) {
    var _a;
    addressMap[address2] = update((_a = addressMap[address2]) != null ? _a : { role: AccountRole2.READONLY });
  }
  var TYPE = Symbol("AddressMapTypeProperty");
  function getAddressMapFromInstructions(feePayer, instructions) {
    const addressMap = {
      [feePayer]: { [TYPE]: 0, role: AccountRole2.WRITABLE_SIGNER }
    };
    const addressesOfInvokedPrograms = /* @__PURE__ */ new Set();
    for (const instruction of instructions) {
      upsert(addressMap, instruction.programAddress, (entry) => {
        addressesOfInvokedPrograms.add(instruction.programAddress);
        if (TYPE in entry) {
          if (isWritableRole2(entry.role)) {
            switch (entry[TYPE]) {
              case 0:
                throw new SolanaError(SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES, {
                  programAddress: instruction.programAddress
                });
              default:
                throw new SolanaError(SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE, {
                  programAddress: instruction.programAddress
                });
            }
          }
          if (entry[TYPE] === 2) {
            return entry;
          }
        }
        return { [TYPE]: 2, role: AccountRole2.READONLY };
      });
      let addressComparator;
      if (!instruction.accounts) {
        continue;
      }
      for (const account of instruction.accounts) {
        upsert(addressMap, account.address, (entry) => {
          const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            address: _,
            ...accountMeta
          } = account;
          if (TYPE in entry) {
            switch (entry[TYPE]) {
              case 0:
                return entry;
              case 1: {
                const nextRole = mergeRoles2(entry.role, accountMeta.role);
                if ("lookupTableAddress" in accountMeta) {
                  const shouldReplaceEntry = (
                    // Consider using the new LOOKUP_TABLE if its address is different...
                    entry.lookupTableAddress !== accountMeta.lookupTableAddress && // ...and sorts before the existing one.
                    (addressComparator || (addressComparator = getAddressComparator()))(
                      accountMeta.lookupTableAddress,
                      entry.lookupTableAddress
                    ) < 0
                  );
                  if (shouldReplaceEntry) {
                    return {
                      [TYPE]: 1,
                      ...accountMeta,
                      role: nextRole
                    };
                  }
                } else if (isSignerRole2(accountMeta.role)) {
                  return {
                    [TYPE]: 2,
                    role: nextRole
                  };
                }
                if (entry.role !== nextRole) {
                  return {
                    ...entry,
                    role: nextRole
                  };
                } else {
                  return entry;
                }
              }
              case 2: {
                const nextRole = mergeRoles2(entry.role, accountMeta.role);
                if (
                  // Check to see if this address represents a program that is invoked
                  // in this transaction.
                  addressesOfInvokedPrograms.has(account.address)
                ) {
                  if (isWritableRole2(accountMeta.role)) {
                    throw new SolanaError(
                      SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE,
                      {
                        programAddress: account.address
                      }
                    );
                  }
                  if (entry.role !== nextRole) {
                    return {
                      ...entry,
                      role: nextRole
                    };
                  } else {
                    return entry;
                  }
                } else if ("lookupTableAddress" in accountMeta && // Static accounts can be 'upgraded' to lookup table accounts as
                // long as they are not require to sign the transaction.
                !isSignerRole2(entry.role)) {
                  return {
                    ...accountMeta,
                    [TYPE]: 1,
                    role: nextRole
                  };
                } else {
                  if (entry.role !== nextRole) {
                    return {
                      ...entry,
                      role: nextRole
                    };
                  } else {
                    return entry;
                  }
                }
              }
            }
          }
          if ("lookupTableAddress" in accountMeta) {
            return {
              ...accountMeta,
              [TYPE]: 1
              /* LOOKUP_TABLE */
            };
          } else {
            return {
              ...accountMeta,
              [TYPE]: 2
              /* STATIC */
            };
          }
        });
      }
    }
    return addressMap;
  }
  function getOrderedAccountsFromAddressMap(addressMap) {
    let addressComparator;
    const orderedAccounts = Object.entries(addressMap).sort(([leftAddress, leftEntry], [rightAddress, rightEntry]) => {
      if (leftEntry[TYPE] !== rightEntry[TYPE]) {
        if (leftEntry[TYPE] === 0) {
          return -1;
        } else if (rightEntry[TYPE] === 0) {
          return 1;
        } else if (leftEntry[TYPE] === 2) {
          return -1;
        } else if (rightEntry[TYPE] === 2) {
          return 1;
        }
      }
      const leftIsSigner = isSignerRole2(leftEntry.role);
      if (leftIsSigner !== isSignerRole2(rightEntry.role)) {
        return leftIsSigner ? -1 : 1;
      }
      const leftIsWritable = isWritableRole2(leftEntry.role);
      if (leftIsWritable !== isWritableRole2(rightEntry.role)) {
        return leftIsWritable ? -1 : 1;
      }
      addressComparator || (addressComparator = getAddressComparator());
      if (leftEntry[TYPE] === 1 && rightEntry[TYPE] === 1 && leftEntry.lookupTableAddress !== rightEntry.lookupTableAddress) {
        return addressComparator(leftEntry.lookupTableAddress, rightEntry.lookupTableAddress);
      } else {
        return addressComparator(leftAddress, rightAddress);
      }
    }).map(([address2, addressMeta]) => ({
      address: address2,
      ...addressMeta
    }));
    return orderedAccounts;
  }
  function getCompiledAddressTableLookups(orderedAccounts) {
    var _a;
    const index = {};
    for (const account of orderedAccounts) {
      if (!("lookupTableAddress" in account)) {
        continue;
      }
      const entry = index[_a = account.lookupTableAddress] || (index[_a] = {
        readableIndices: [],
        writableIndices: []
      });
      if (account.role === AccountRole2.WRITABLE) {
        entry.writableIndices.push(account.addressIndex);
      } else {
        entry.readableIndices.push(account.addressIndex);
      }
    }
    return Object.keys(index).sort(getAddressComparator()).map((lookupTableAddress) => ({
      lookupTableAddress,
      ...index[lookupTableAddress]
    }));
  }
  function getCompiledMessageHeader(orderedAccounts) {
    let numReadonlyNonSignerAccounts = 0;
    let numReadonlySignerAccounts = 0;
    let numSignerAccounts = 0;
    for (const account of orderedAccounts) {
      if ("lookupTableAddress" in account) {
        break;
      }
      const accountIsWritable = isWritableRole2(account.role);
      if (isSignerRole2(account.role)) {
        numSignerAccounts++;
        if (!accountIsWritable) {
          numReadonlySignerAccounts++;
        }
      } else if (!accountIsWritable) {
        numReadonlyNonSignerAccounts++;
      }
    }
    return {
      numReadonlyNonSignerAccounts,
      numReadonlySignerAccounts,
      numSignerAccounts
    };
  }
  function getAccountIndex(orderedAccounts) {
    const out = {};
    for (const [index, account] of orderedAccounts.entries()) {
      out[account.address] = index;
    }
    return out;
  }
  function getCompiledInstructions(instructions, orderedAccounts) {
    const accountIndex = getAccountIndex(orderedAccounts);
    return instructions.map(({ accounts, data, programAddress }) => {
      return {
        programAddressIndex: accountIndex[programAddress],
        ...accounts ? { accountIndices: accounts.map(({ address: address2 }) => accountIndex[address2]) } : null,
        ...data ? { data } : null
      };
    });
  }
  function getCompiledLifetimeToken(lifetimeConstraint) {
    if ("nonce" in lifetimeConstraint) {
      return lifetimeConstraint.nonce;
    }
    return lifetimeConstraint.blockhash;
  }
  function getCompiledStaticAccounts(orderedAccounts) {
    const firstLookupTableAccountIndex = orderedAccounts.findIndex((account) => "lookupTableAddress" in account);
    const orderedStaticAccounts = firstLookupTableAccountIndex === -1 ? orderedAccounts : orderedAccounts.slice(0, firstLookupTableAccountIndex);
    return orderedStaticAccounts.map(({ address: address2 }) => address2);
  }
  function compileMessage(transaction) {
    const addressMap = getAddressMapFromInstructions(transaction.feePayer, transaction.instructions);
    const orderedAccounts = getOrderedAccountsFromAddressMap(addressMap);
    return {
      ...transaction.version !== "legacy" ? { addressTableLookups: getCompiledAddressTableLookups(orderedAccounts) } : null,
      header: getCompiledMessageHeader(orderedAccounts),
      instructions: getCompiledInstructions(transaction.instructions, orderedAccounts),
      lifetimeToken: getCompiledLifetimeToken(transaction.lifetimeConstraint),
      staticAccounts: getCompiledStaticAccounts(orderedAccounts),
      version: transaction.version
    };
  }
  var memoizedAddressTableLookupEncoder;
  function getAddressTableLookupEncoder() {
    if (!memoizedAddressTableLookupEncoder) {
      memoizedAddressTableLookupEncoder = getStructEncoder([
        ["lookupTableAddress", getAddressEncoder()],
        [
          "writableIndices",
          getArrayEncoder(getU8Encoder(), { size: getShortU16Encoder() })
        ],
        [
          "readableIndices",
          getArrayEncoder(getU8Encoder(), { size: getShortU16Encoder() })
        ]
      ]);
    }
    return memoizedAddressTableLookupEncoder;
  }
  var memoizedAddressTableLookupDecoder;
  function getAddressTableLookupDecoder() {
    if (!memoizedAddressTableLookupDecoder) {
      memoizedAddressTableLookupDecoder = getStructDecoder([
        ["lookupTableAddress", getAddressDecoder()],
        ["writableIndices", getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() })],
        ["readableIndices", getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() })]
      ]);
    }
    return memoizedAddressTableLookupDecoder;
  }
  var memoizedU8Encoder;
  function getMemoizedU8Encoder() {
    if (!memoizedU8Encoder)
      memoizedU8Encoder = getU8Encoder();
    return memoizedU8Encoder;
  }
  var memoizedU8Decoder;
  function getMemoizedU8Decoder() {
    if (!memoizedU8Decoder)
      memoizedU8Decoder = getU8Decoder();
    return memoizedU8Decoder;
  }
  function getMessageHeaderEncoder() {
    return getStructEncoder([
      ["numSignerAccounts", getMemoizedU8Encoder()],
      ["numReadonlySignerAccounts", getMemoizedU8Encoder()],
      ["numReadonlyNonSignerAccounts", getMemoizedU8Encoder()]
    ]);
  }
  function getMessageHeaderDecoder() {
    return getStructDecoder([
      ["numSignerAccounts", getMemoizedU8Decoder()],
      ["numReadonlySignerAccounts", getMemoizedU8Decoder()],
      ["numReadonlyNonSignerAccounts", getMemoizedU8Decoder()]
    ]);
  }
  var memoizedGetInstructionEncoder;
  function getInstructionEncoder() {
    if (!memoizedGetInstructionEncoder) {
      memoizedGetInstructionEncoder = mapEncoder(
        getStructEncoder([
          ["programAddressIndex", getU8Encoder()],
          ["accountIndices", getArrayEncoder(getU8Encoder(), { size: getShortU16Encoder() })],
          ["data", getBytesEncoder({ size: getShortU16Encoder() })]
        ]),
        // Convert an instruction to have all fields defined
        (instruction) => {
          var _a, _b;
          if (instruction.accountIndices !== void 0 && instruction.data !== void 0) {
            return instruction;
          }
          return {
            ...instruction,
            accountIndices: (_a = instruction.accountIndices) != null ? _a : [],
            data: (_b = instruction.data) != null ? _b : new Uint8Array(0)
          };
        }
      );
    }
    return memoizedGetInstructionEncoder;
  }
  var memoizedGetInstructionDecoder;
  function getInstructionDecoder() {
    if (!memoizedGetInstructionDecoder) {
      memoizedGetInstructionDecoder = mapDecoder(
        getStructDecoder([
          ["programAddressIndex", getU8Decoder()],
          ["accountIndices", getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() })],
          ["data", getBytesDecoder({ size: getShortU16Decoder() })]
        ]),
        // Convert an instruction to exclude optional fields if they are empty
        (instruction) => {
          if (instruction.accountIndices.length && instruction.data.byteLength) {
            return instruction;
          }
          const { accountIndices, data, ...rest } = instruction;
          return {
            ...rest,
            ...accountIndices.length ? { accountIndices } : null,
            ...data.byteLength ? { data } : null
          };
        }
      );
    }
    return memoizedGetInstructionDecoder;
  }
  var VERSION_FLAG_MASK = 128;
  function getTransactionVersionEncoder() {
    return createEncoder({
      getSizeFromValue: (value) => value === "legacy" ? 0 : 1,
      maxSize: 1,
      write: (value, bytes, offset) => {
        if (value === "legacy") {
          return offset;
        }
        if (value < 0 || value > 127) {
          throw new SolanaError(SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE, {
            actualVersion: value
          });
        }
        bytes.set([value | VERSION_FLAG_MASK], offset);
        return offset + 1;
      }
    });
  }
  function getTransactionVersionDecoder() {
    return createDecoder({
      maxSize: 1,
      read: (bytes, offset) => {
        const firstByte = bytes[offset];
        if ((firstByte & VERSION_FLAG_MASK) === 0) {
          return ["legacy", offset];
        } else {
          const version = firstByte ^ VERSION_FLAG_MASK;
          return [version, offset + 1];
        }
      }
    });
  }
  function getCompiledMessageLegacyEncoder() {
    return getStructEncoder(getPreludeStructEncoderTuple());
  }
  function getCompiledMessageVersionedEncoder() {
    return mapEncoder(
      getStructEncoder([
        ...getPreludeStructEncoderTuple(),
        ["addressTableLookups", getAddressTableLookupArrayEncoder()]
      ]),
      (value) => {
        var _a;
        if (value.version === "legacy") {
          return value;
        }
        return {
          ...value,
          addressTableLookups: (_a = value.addressTableLookups) != null ? _a : []
        };
      }
    );
  }
  function getPreludeStructEncoderTuple() {
    return [
      ["version", getTransactionVersionEncoder()],
      ["header", getMessageHeaderEncoder()],
      ["staticAccounts", getArrayEncoder(getAddressEncoder(), { size: getShortU16Encoder() })],
      ["lifetimeToken", getStringEncoder({ encoding: getBase58Encoder(), size: 32 })],
      ["instructions", getArrayEncoder(getInstructionEncoder(), { size: getShortU16Encoder() })]
    ];
  }
  function getPreludeStructDecoderTuple() {
    return [
      ["version", getTransactionVersionDecoder()],
      ["header", getMessageHeaderDecoder()],
      ["staticAccounts", getArrayDecoder(getAddressDecoder(), { size: getShortU16Decoder() })],
      ["lifetimeToken", getStringDecoder({ encoding: getBase58Decoder(), size: 32 })],
      ["instructions", getArrayDecoder(getInstructionDecoder(), { size: getShortU16Decoder() })],
      ["addressTableLookups", getAddressTableLookupArrayDecoder()]
    ];
  }
  function getAddressTableLookupArrayEncoder() {
    return getArrayEncoder(getAddressTableLookupEncoder(), { size: getShortU16Encoder() });
  }
  function getAddressTableLookupArrayDecoder() {
    return getArrayDecoder(getAddressTableLookupDecoder(), { size: getShortU16Decoder() });
  }
  function getCompiledMessageEncoder() {
    return createEncoder({
      getSizeFromValue: (compiledMessage) => {
        if (compiledMessage.version === "legacy") {
          return getCompiledMessageLegacyEncoder().getSizeFromValue(compiledMessage);
        } else {
          return getCompiledMessageVersionedEncoder().getSizeFromValue(compiledMessage);
        }
      },
      write: (compiledMessage, bytes, offset) => {
        if (compiledMessage.version === "legacy") {
          return getCompiledMessageLegacyEncoder().write(compiledMessage, bytes, offset);
        } else {
          return getCompiledMessageVersionedEncoder().write(compiledMessage, bytes, offset);
        }
      }
    });
  }
  function getCompiledMessageDecoder() {
    return mapDecoder(
      getStructDecoder(getPreludeStructDecoderTuple()),
      ({ addressTableLookups, ...restOfMessage }) => {
        if (restOfMessage.version === "legacy" || !(addressTableLookups == null ? void 0 : addressTableLookups.length)) {
          return restOfMessage;
        }
        return { ...restOfMessage, addressTableLookups };
      }
    );
  }
  function getCompiledMessageCodec() {
    return combineCodec(getCompiledMessageEncoder(), getCompiledMessageDecoder());
  }
  function getCompiledTransaction(transaction) {
    var _a;
    const compiledMessage = compileMessage(transaction);
    let signatures;
    if ("signatures" in transaction) {
      signatures = [];
      for (let ii = 0; ii < compiledMessage.header.numSignerAccounts; ii++) {
        signatures[ii] = (_a = transaction.signatures[compiledMessage.staticAccounts[ii]]) != null ? _a : new Uint8Array(Array(64).fill(0));
      }
    } else {
      signatures = Array(compiledMessage.header.numSignerAccounts).fill(new Uint8Array(Array(64).fill(0)));
    }
    return {
      compiledMessage,
      signatures
    };
  }
  function getCompiledTransactionEncoder() {
    return getStructEncoder([
      ["signatures", getArrayEncoder(getBytesEncoder({ size: 64 }), { size: getShortU16Encoder() })],
      ["compiledMessage", getCompiledMessageEncoder()]
    ]);
  }
  function getCompiledTransactionDecoder() {
    return getStructDecoder([
      [
        "signatures",
        getArrayDecoder(getBytesDecoder({ size: 64 }), {
          size: getShortU16Decoder()
        })
      ],
      ["compiledMessage", getCompiledMessageDecoder()]
    ]);
  }
  function getTransactionEncoder() {
    return mapEncoder(getCompiledTransactionEncoder(), getCompiledTransaction);
  }
  function getTransactionDecoder(config) {
    return mapDecoder(
      getCompiledTransactionDecoder(),
      (compiledTransaction) => decompileTransaction(compiledTransaction, config)
    );
  }
  function getTransactionCodec(config) {
    return combineCodec(getTransactionEncoder(), getTransactionDecoder(config));
  }
  var base58Decoder;
  function getSignatureFromTransaction(transaction) {
    if (!base58Decoder)
      base58Decoder = getBase58Decoder();
    const signatureBytes = transaction.signatures[transaction.feePayer];
    if (!signatureBytes) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING);
    }
    const transactionSignature = base58Decoder.decode(signatureBytes);
    return transactionSignature;
  }
  async function partiallySignTransaction(keyPairs, transaction) {
    const compiledMessage = compileMessage(transaction);
    const nextSignatures = "signatures" in transaction ? { ...transaction.signatures } : {};
    const wireMessageBytes = getCompiledMessageEncoder().encode(compiledMessage);
    const publicKeySignaturePairs = await Promise.all(
      keyPairs.map(
        (keyPair) => Promise.all([getAddressFromPublicKey(keyPair.publicKey), signBytes(keyPair.privateKey, wireMessageBytes)])
      )
    );
    for (const [signerPublicKey, signature2] of publicKeySignaturePairs) {
      nextSignatures[signerPublicKey] = signature2;
    }
    const out = {
      ...transaction,
      signatures: nextSignatures
    };
    Object.freeze(out);
    return out;
  }
  async function signTransaction(keyPairs, transaction) {
    const out = await partiallySignTransaction(keyPairs, transaction);
    assertTransactionIsFullySigned(out);
    Object.freeze(out);
    return out;
  }
  function assertTransactionIsFullySigned(transaction) {
    const signerAddressesFromInstructions = transaction.instructions.flatMap((i) => {
      var _a, _b;
      return (_b = (_a = i.accounts) == null ? void 0 : _a.filter((a) => isSignerRole2(a.role))) != null ? _b : [];
    }).map((a) => a.address);
    const requiredSigners = /* @__PURE__ */ new Set([transaction.feePayer, ...signerAddressesFromInstructions]);
    const missingSigs = [];
    requiredSigners.forEach((address2) => {
      if (!transaction.signatures[address2]) {
        missingSigs.push(address2);
      }
    });
    if (missingSigs.length > 0) {
      throw new SolanaError(SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING, {
        addresses: missingSigs
      });
    }
  }
  function getBase64EncodedWireTransaction(transaction) {
    const wireTransactionBytes = getTransactionEncoder().encode(transaction);
    return getBase64Decoder().decode(wireTransactionBytes);
  }

  // ../signers/dist/index.browser.js
  function deduplicateSigners(signers) {
    const deduplicated = {};
    signers.forEach((signer) => {
      if (!deduplicated[signer.address]) {
        deduplicated[signer.address] = signer;
      } else if (deduplicated[signer.address] !== signer) {
        throw new SolanaError(SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS, {
          address: signer.address
        });
      }
    });
    return Object.values(deduplicated);
  }
  function getSignersFromInstruction(instruction) {
    var _a;
    return deduplicateSigners(
      ((_a = instruction.accounts) != null ? _a : []).flatMap((account) => "signer" in account ? account.signer : [])
    );
  }
  function getSignersFromTransaction(transaction) {
    return deduplicateSigners([
      ...transaction.feePayerSigner ? [transaction.feePayerSigner] : [],
      ...transaction.instructions.flatMap(getSignersFromInstruction)
    ]);
  }
  function addSignersToInstruction(signers, instruction) {
    if (!instruction.accounts || instruction.accounts.length === 0) {
      return instruction;
    }
    const signerByAddress = new Map(deduplicateSigners(signers).map((signer) => [signer.address, signer]));
    return Object.freeze({
      ...instruction,
      accounts: instruction.accounts.map((account) => {
        const signer = signerByAddress.get(account.address);
        if (!isSignerRole(account.role) || "signer" in account || !signer) {
          return account;
        }
        return Object.freeze({ ...account, signer });
      })
    });
  }
  function addSignersToTransaction(signers, transaction) {
    if (transaction.instructions.length === 0) {
      return transaction;
    }
    return Object.freeze({
      ...transaction,
      instructions: transaction.instructions.map((instruction) => addSignersToInstruction(signers, instruction))
    });
  }
  function setTransactionFeePayerSigner(feePayerSigner, transaction) {
    if ("feePayer" in transaction && feePayerSigner.address === transaction.feePayer) {
      if ("feePayerSigner" in transaction)
        return transaction;
      const out2 = { ...transaction, feePayerSigner };
      Object.freeze(out2);
      return out2;
    }
    const out = {
      ...getUnsignedTransaction(transaction),
      feePayer: feePayerSigner.address,
      feePayerSigner
    };
    Object.freeze(out);
    return out;
  }
  function isMessagePartialSigner(value) {
    return "signMessages" in value && typeof value.signMessages === "function";
  }
  function assertIsMessagePartialSigner(value) {
    if (!isMessagePartialSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER, {
        address: value.address
      });
    }
  }
  function isTransactionPartialSigner(value) {
    return "signTransactions" in value && typeof value.signTransactions === "function";
  }
  function assertIsTransactionPartialSigner(value) {
    if (!isTransactionPartialSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER, {
        address: value.address
      });
    }
  }
  function isKeyPairSigner(value) {
    return "keyPair" in value && typeof value.keyPair === "object" && isMessagePartialSigner(value) && isTransactionPartialSigner(value);
  }
  function assertIsKeyPairSigner(value) {
    if (!isKeyPairSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER, {
        address: value.address
      });
    }
  }
  async function createSignerFromKeyPair(keyPair) {
    const address2 = await getAddressFromPublicKey(keyPair.publicKey);
    const out = {
      address: address2,
      keyPair,
      signMessages: (messages) => Promise.all(
        messages.map(
          async (message) => Object.freeze({ [address2]: await signBytes(keyPair.privateKey, message.content) })
        )
      ),
      signTransactions: (transactions) => Promise.all(
        transactions.map(async (transaction) => {
          const signedTransaction = await partiallySignTransaction([keyPair], transaction);
          return Object.freeze({ [address2]: signedTransaction.signatures[address2] });
        })
      )
    };
    return Object.freeze(out);
  }
  async function generateKeyPairSigner() {
    return createSignerFromKeyPair(await generateKeyPair());
  }
  async function createKeyPairSignerFromBytes(bytes, extractable) {
    return createSignerFromKeyPair(await createKeyPairFromBytes(bytes, extractable));
  }
  function isMessageModifyingSigner(value) {
    return isAddress(value.address) && "modifyAndSignMessages" in value && typeof value.modifyAndSignMessages === "function";
  }
  function assertIsMessageModifyingSigner(value) {
    if (!isMessageModifyingSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER, {
        address: value.address
      });
    }
  }
  function isMessageSigner(value) {
    return isMessagePartialSigner(value) || isMessageModifyingSigner(value);
  }
  function assertIsMessageSigner(value) {
    if (!isMessageSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER, {
        address: value.address
      });
    }
  }
  function createNoopSigner(address2) {
    const out = {
      address: address2,
      signMessages: async (messages) => messages.map(() => Object.freeze({})),
      signTransactions: async (transactions) => transactions.map(() => Object.freeze({}))
    };
    return Object.freeze(out);
  }
  function isTransactionModifyingSigner(value) {
    return "modifyAndSignTransactions" in value && typeof value.modifyAndSignTransactions === "function";
  }
  function assertIsTransactionModifyingSigner(value) {
    if (!isTransactionModifyingSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER, {
        address: value.address
      });
    }
  }
  function isTransactionSendingSigner(value) {
    return "signAndSendTransactions" in value && typeof value.signAndSendTransactions === "function";
  }
  function assertIsTransactionSendingSigner(value) {
    if (!isTransactionSendingSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER, {
        address: value.address
      });
    }
  }
  function isTransactionSigner(value) {
    return isTransactionPartialSigner(value) || isTransactionModifyingSigner(value) || isTransactionSendingSigner(value);
  }
  function assertIsTransactionSigner(value) {
    if (!isTransactionSigner(value)) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER, {
        address: value.address
      });
    }
  }
  async function partiallySignTransactionWithSigners(transaction, config = {}) {
    const { partialSigners, modifyingSigners } = categorizeTransactionSigners(
      deduplicateSigners(getSignersFromTransaction(transaction).filter(isTransactionSigner)),
      { identifySendingSigner: false }
    );
    return signModifyingAndPartialTransactionSigners(transaction, modifyingSigners, partialSigners, config.abortSignal);
  }
  async function signTransactionWithSigners(transaction, config = {}) {
    const signedTransaction = await partiallySignTransactionWithSigners(transaction, config);
    assertTransactionIsFullySigned(signedTransaction);
    return signedTransaction;
  }
  async function signAndSendTransactionWithSigners(transaction, config = {}) {
    const abortSignal = config.abortSignal;
    const { partialSigners, modifyingSigners, sendingSigner } = categorizeTransactionSigners(
      deduplicateSigners(getSignersFromTransaction(transaction).filter(isTransactionSigner))
    );
    abortSignal == null ? void 0 : abortSignal.throwIfAborted();
    const signedTransaction = await signModifyingAndPartialTransactionSigners(
      transaction,
      modifyingSigners,
      partialSigners,
      abortSignal
    );
    if (!sendingSigner) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING);
    }
    abortSignal == null ? void 0 : abortSignal.throwIfAborted();
    const [signature2] = await sendingSigner.signAndSendTransactions([signedTransaction], { abortSignal });
    abortSignal == null ? void 0 : abortSignal.throwIfAborted();
    return signature2;
  }
  function categorizeTransactionSigners(signers, config = {}) {
    var _a;
    const identifySendingSigner = (_a = config.identifySendingSigner) != null ? _a : true;
    const sendingSigner = identifySendingSigner ? identifyTransactionSendingSigner(signers) : null;
    const otherSigners = signers.filter(
      (signer) => signer !== sendingSigner && (isTransactionModifyingSigner(signer) || isTransactionPartialSigner(signer))
    );
    const modifyingSigners = identifyTransactionModifyingSigners(otherSigners);
    const partialSigners = otherSigners.filter(isTransactionPartialSigner).filter((signer) => !modifyingSigners.includes(signer));
    return Object.freeze({ modifyingSigners, partialSigners, sendingSigner });
  }
  function identifyTransactionSendingSigner(signers) {
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0)
      return null;
    const sendingOnlySigners = sendingSigners.filter(
      (signer) => !isTransactionModifyingSigner(signer) && !isTransactionPartialSigner(signer)
    );
    if (sendingOnlySigners.length > 0) {
      return sendingOnlySigners[0];
    }
    return sendingSigners[0];
  }
  function identifyTransactionModifyingSigners(signers) {
    const modifyingSigners = signers.filter(isTransactionModifyingSigner);
    if (modifyingSigners.length === 0)
      return [];
    const nonPartialSigners = modifyingSigners.filter((signer) => !isTransactionPartialSigner(signer));
    if (nonPartialSigners.length > 0)
      return nonPartialSigners;
    return [modifyingSigners[0]];
  }
  async function signModifyingAndPartialTransactionSigners(transaction, modifyingSigners = [], partialSigners = [], abortSignal) {
    var _a;
    const modifiedTransaction = await modifyingSigners.reduce(
      async (transaction2, modifyingSigner) => {
        abortSignal == null ? void 0 : abortSignal.throwIfAborted();
        const [tx] = await modifyingSigner.modifyAndSignTransactions([await transaction2], { abortSignal });
        return Object.freeze(tx);
      },
      Promise.resolve(transaction)
    );
    abortSignal == null ? void 0 : abortSignal.throwIfAborted();
    const signatureDictionaries = await Promise.all(
      partialSigners.map(async (partialSigner) => {
        const [signatures] = await partialSigner.signTransactions([modifiedTransaction], { abortSignal });
        return signatures;
      })
    );
    const signedTransaction = {
      ...modifiedTransaction,
      signatures: Object.freeze(
        signatureDictionaries.reduce((signatures, signatureDictionary) => {
          return { ...signatures, ...signatureDictionary };
        }, (_a = modifiedTransaction.signatures) != null ? _a : {})
      )
    };
    return Object.freeze(signedTransaction);
  }
  var o2 = globalThis.TextEncoder;
  function createSignableMessage(content, signatures = {}) {
    return Object.freeze({
      content: typeof content === "string" ? new o2().encode(content) : content,
      signatures: Object.freeze({ ...signatures })
    });
  }
  function isTransactionWithSingleSendingSigner(transaction) {
    try {
      assertIsTransactionWithSingleSendingSigner(transaction);
      return true;
    } catch {
      return false;
    }
  }
  function assertIsTransactionWithSingleSendingSigner(transaction) {
    const signers = getSignersFromTransaction(transaction);
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING);
    }
    const sendingOnlySigners = sendingSigners.filter(
      (signer) => !isTransactionPartialSigner(signer) && !isTransactionModifyingSigner(signer)
    );
    if (sendingOnlySigners.length > 1) {
      throw new SolanaError(SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS);
    }
  }

  // src/airdrop.ts
  init_env_shim();

  // ../transaction-confirmation/dist/index.browser.js
  init_env_shim();
  function createBlockHeightExceedencePromiseFactory({
    rpc,
    rpcSubscriptions
  }) {
    return async function getBlockHeightExceedencePromise({
      abortSignal: callerAbortSignal,
      commitment,
      lastValidBlockHeight
    }) {
      const abortController = new AbortController();
      const handleAbort = () => {
        abortController.abort();
      };
      callerAbortSignal.addEventListener("abort", handleAbort, { signal: abortController.signal });
      async function getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight() {
        const { absoluteSlot, blockHeight } = await rpc.getEpochInfo({ commitment }).send({ abortSignal: abortController.signal });
        return {
          blockHeight,
          differenceBetweenSlotHeightAndBlockHeight: absoluteSlot - blockHeight
        };
      }
      try {
        const [slotNotifications, { blockHeight: initialBlockHeight, differenceBetweenSlotHeightAndBlockHeight }] = await Promise.all([
          rpcSubscriptions.slotNotifications().subscribe({ abortSignal: abortController.signal }),
          getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight()
        ]);
        let currentBlockHeight = initialBlockHeight;
        if (currentBlockHeight <= lastValidBlockHeight) {
          let lastKnownDifferenceBetweenSlotHeightAndBlockHeight = differenceBetweenSlotHeightAndBlockHeight;
          for await (const slotNotification of slotNotifications) {
            const { slot } = slotNotification;
            if (slot - lastKnownDifferenceBetweenSlotHeightAndBlockHeight > lastValidBlockHeight) {
              const {
                blockHeight: recheckedBlockHeight,
                differenceBetweenSlotHeightAndBlockHeight: currentDifferenceBetweenSlotHeightAndBlockHeight
              } = await getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight();
              currentBlockHeight = recheckedBlockHeight;
              if (currentBlockHeight > lastValidBlockHeight) {
                break;
              } else {
                lastKnownDifferenceBetweenSlotHeightAndBlockHeight = currentDifferenceBetweenSlotHeightAndBlockHeight;
              }
            }
          }
        }
        throw new SolanaError(SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED, {
          currentBlockHeight,
          lastValidBlockHeight
        });
      } finally {
        abortController.abort();
      }
    };
  }
  var NONCE_VALUE_OFFSET = 4 + // version(u32)
  4 + // state(u32)
  32;
  function createNonceInvalidationPromiseFactory(rpc, rpcSubscriptions) {
    return async function getNonceInvalidationPromise({
      abortSignal: callerAbortSignal,
      commitment,
      currentNonceValue: expectedNonceValue,
      nonceAccountAddress
    }) {
      const abortController = new AbortController();
      function handleAbort() {
        abortController.abort();
      }
      callerAbortSignal.addEventListener("abort", handleAbort, { signal: abortController.signal });
      const accountNotifications = await rpcSubscriptions.accountNotifications(nonceAccountAddress, { commitment, encoding: "base64" }).subscribe({ abortSignal: abortController.signal });
      const base58Decoder2 = getBase58Decoder();
      const base64Encoder = getBase64Encoder();
      function getNonceFromAccountData([base64EncodedBytes]) {
        const data = base64Encoder.encode(base64EncodedBytes);
        const nonceValueBytes = data.slice(NONCE_VALUE_OFFSET, NONCE_VALUE_OFFSET + 32);
        return base58Decoder2.decode(nonceValueBytes);
      }
      const nonceAccountDidAdvancePromise = (async () => {
        for await (const accountNotification of accountNotifications) {
          const nonceValue = getNonceFromAccountData(accountNotification.value.data);
          if (nonceValue !== expectedNonceValue) {
            throw new SolanaError(SOLANA_ERROR__INVALID_NONCE, {
              actualNonceValue: nonceValue,
              expectedNonceValue
            });
          }
        }
      })();
      const nonceIsAlreadyInvalidPromise = (async () => {
        const { value: nonceAccount } = await rpc.getAccountInfo(nonceAccountAddress, {
          commitment,
          dataSlice: { length: 32, offset: NONCE_VALUE_OFFSET },
          encoding: "base58"
        }).send({ abortSignal: abortController.signal });
        if (!nonceAccount) {
          throw new SolanaError(SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND, {
            nonceAccountAddress
          });
        }
        const nonceValue = (
          // This works because we asked for the exact slice of data representing the nonce
          // value, and furthermore asked for it in `base58` encoding.
          nonceAccount.data[0]
        );
        if (nonceValue !== expectedNonceValue) {
          throw new SolanaError(SOLANA_ERROR__INVALID_NONCE, {
            actualNonceValue: nonceValue,
            expectedNonceValue
          });
        } else {
          await new Promise(() => {
          });
        }
      })();
      try {
        return await Promise.race([nonceAccountDidAdvancePromise, nonceIsAlreadyInvalidPromise]);
      } finally {
        abortController.abort();
      }
    };
  }
  function createRecentSignatureConfirmationPromiseFactory(rpc, rpcSubscriptions) {
    return async function getRecentSignatureConfirmationPromise({
      abortSignal: callerAbortSignal,
      commitment,
      signature: signature2
    }) {
      const abortController = new AbortController();
      function handleAbort() {
        abortController.abort();
      }
      callerAbortSignal.addEventListener("abort", handleAbort, { signal: abortController.signal });
      const signatureStatusNotifications = await rpcSubscriptions.signatureNotifications(signature2, { commitment }).subscribe({ abortSignal: abortController.signal });
      const signatureDidCommitPromise = (async () => {
        for await (const signatureStatusNotification of signatureStatusNotifications) {
          if (signatureStatusNotification.value.err) {
            throw getSolanaErrorFromTransactionError(signatureStatusNotification.value.err);
          } else {
            return;
          }
        }
      })();
      const signatureStatusLookupPromise = (async () => {
        const { value: signatureStatusResults } = await rpc.getSignatureStatuses([signature2]).send({ abortSignal: abortController.signal });
        const signatureStatus = signatureStatusResults[0];
        if (signatureStatus && signatureStatus.confirmationStatus && commitmentComparator(signatureStatus.confirmationStatus, commitment) >= 0) {
          return;
        } else {
          await new Promise(() => {
          });
        }
      })();
      try {
        return await Promise.race([signatureDidCommitPromise, signatureStatusLookupPromise]);
      } finally {
        abortController.abort();
      }
    };
  }
  async function getTimeoutPromise({ abortSignal: callerAbortSignal, commitment }) {
    return await new Promise((_, reject) => {
      const handleAbort = (e3) => {
        clearTimeout(timeoutId);
        const abortError = new DOMException(e3.target.reason, "AbortError");
        reject(abortError);
      };
      callerAbortSignal.addEventListener("abort", handleAbort);
      const timeoutMs = commitment === "processed" ? 3e4 : 6e4;
      const startMs = performance.now();
      const timeoutId = (
        // We use `setTimeout` instead of `AbortSignal.timeout()` because we want to measure
        // elapsed time instead of active time.
        // See https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static
        setTimeout(() => {
          const elapsedMs = performance.now() - startMs;
          reject(new DOMException(`Timeout elapsed after ${elapsedMs} ms`, "TimeoutError"));
        }, timeoutMs)
      );
    });
  }
  async function raceStrategies(signature2, config, getSpecificStrategiesForRace) {
    const { abortSignal: callerAbortSignal, commitment, getRecentSignatureConfirmationPromise } = config;
    callerAbortSignal == null ? void 0 : callerAbortSignal.throwIfAborted();
    const abortController = new AbortController();
    if (callerAbortSignal) {
      const handleAbort = () => {
        abortController.abort();
      };
      callerAbortSignal.addEventListener("abort", handleAbort, { signal: abortController.signal });
    }
    try {
      const specificStrategies = getSpecificStrategiesForRace({
        ...config,
        abortSignal: abortController.signal
      });
      return await Promise.race([
        getRecentSignatureConfirmationPromise({
          abortSignal: abortController.signal,
          commitment,
          signature: signature2
        }),
        ...specificStrategies
      ]);
    } finally {
      abortController.abort();
    }
  }
  async function waitForDurableNonceTransactionConfirmation(config) {
    await raceStrategies(
      getSignatureFromTransaction(config.transaction),
      config,
      function getSpecificStrategiesForRace({ abortSignal, commitment, getNonceInvalidationPromise, transaction }) {
        return [
          getNonceInvalidationPromise({
            abortSignal,
            commitment,
            currentNonceValue: transaction.lifetimeConstraint.nonce,
            nonceAccountAddress: transaction.instructions[0].accounts[0].address
          })
        ];
      }
    );
  }
  async function waitForRecentTransactionConfirmation(config) {
    await raceStrategies(
      getSignatureFromTransaction(config.transaction),
      config,
      function getSpecificStrategiesForRace({
        abortSignal,
        commitment,
        getBlockHeightExceedencePromise,
        transaction
      }) {
        return [
          getBlockHeightExceedencePromise({
            abortSignal,
            commitment,
            lastValidBlockHeight: transaction.lifetimeConstraint.lastValidBlockHeight
          })
        ];
      }
    );
  }
  async function waitForRecentTransactionConfirmationUntilTimeout(config) {
    await raceStrategies(
      config.signature,
      config,
      function getSpecificStrategiesForRace({ abortSignal, commitment, getTimeoutPromise: getTimeoutPromise2 }) {
        return [
          getTimeoutPromise2({
            abortSignal,
            commitment
          })
        ];
      }
    );
  }

  // src/airdrop-internal.ts
  init_env_shim();
  async function requestAndConfirmAirdrop_INTERNAL_ONLY_DO_NOT_EXPORT({
    abortSignal,
    commitment,
    confirmSignatureOnlyTransaction,
    lamports: lamports2,
    recipientAddress,
    rpc
  }) {
    const airdropTransactionSignature = await rpc.requestAirdrop(recipientAddress, lamports2, { commitment }).send({ abortSignal });
    await confirmSignatureOnlyTransaction({
      abortSignal,
      commitment,
      signature: airdropTransactionSignature
    });
    return airdropTransactionSignature;
  }

  // src/airdrop.ts
  function airdropFactory({ rpc, rpcSubscriptions }) {
    const getRecentSignatureConfirmationPromise = createRecentSignatureConfirmationPromiseFactory(
      rpc,
      rpcSubscriptions
    );
    async function confirmSignatureOnlyTransaction(config) {
      await waitForRecentTransactionConfirmationUntilTimeout({
        ...config,
        getRecentSignatureConfirmationPromise,
        getTimeoutPromise
      });
    }
    return async function airdrop(config) {
      return await requestAndConfirmAirdrop_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...config,
        confirmSignatureOnlyTransaction,
        rpc
      });
    };
  }

  // src/decode-transaction.ts
  init_env_shim();
  var compiledTransactionDecoder = void 0;
  async function fetchLookupTables(lookupTableAddresses, rpc, config) {
    const fetchedLookupTables = await fetchJsonParsedAccounts(
      rpc,
      lookupTableAddresses,
      config
    );
    assertAccountsDecoded(fetchedLookupTables);
    assertAccountsExist(fetchedLookupTables);
    return fetchedLookupTables.reduce((acc, lookup) => {
      return {
        ...acc,
        [lookup.address]: lookup.data.addresses
      };
    }, {});
  }
  async function decodeTransaction(encodedTransaction, rpc, config) {
    const { lastValidBlockHeight, ...fetchAccountsConfig } = config != null ? config : {};
    if (!compiledTransactionDecoder)
      compiledTransactionDecoder = getCompiledTransactionDecoder();
    const compiledTransaction = compiledTransactionDecoder.decode(encodedTransaction);
    const { compiledMessage } = compiledTransaction;
    const lookupTables = "addressTableLookups" in compiledMessage && compiledMessage.addressTableLookups !== void 0 && compiledMessage.addressTableLookups.length > 0 ? compiledMessage.addressTableLookups : [];
    const lookupTableAddresses = lookupTables.map((l) => l.lookupTableAddress);
    const fetchedLookupTables = lookupTableAddresses.length > 0 ? await fetchLookupTables(lookupTableAddresses, rpc, fetchAccountsConfig) : {};
    return decompileTransaction(compiledTransaction, {
      addressesByLookupTableAddress: fetchedLookupTables,
      lastValidBlockHeight
    });
  }

  // src/send-transaction.ts
  init_env_shim();

  // src/send-transaction-internal.ts
  init_env_shim();
  function getSendTransactionConfigWithAdjustedPreflightCommitment(commitment, config) {
    if (
      // The developer has supplied no value for `preflightCommitment`.
      !(config == null ? void 0 : config.preflightCommitment) && // The value of `commitment` is lower than the server default of `preflightCommitment`.
      commitmentComparator(
        commitment,
        "finalized"
        /* default value of `preflightCommitment` */
      ) < 0
    ) {
      return {
        ...config,
        // In the common case, it is unlikely that you want to simulate a transaction at
        // `finalized` commitment when your standard of commitment for confirming the
        // transaction is lower. Cap the simulation commitment level to the level of the
        // confirmation commitment.
        preflightCommitment: commitment
      };
    }
    return config;
  }
  async function sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
    abortSignal,
    commitment,
    rpc,
    transaction,
    ...sendTransactionConfig
  }) {
    const base64EncodedWireTransaction = getBase64EncodedWireTransaction(transaction);
    return await rpc.sendTransaction(base64EncodedWireTransaction, {
      ...getSendTransactionConfigWithAdjustedPreflightCommitment(commitment, sendTransactionConfig),
      encoding: "base64"
    }).send({ abortSignal });
  }
  async function sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
    abortSignal,
    commitment,
    confirmDurableNonceTransaction,
    rpc,
    transaction,
    ...sendTransactionConfig
  }) {
    const transactionSignature = await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
      ...sendTransactionConfig,
      abortSignal,
      commitment,
      rpc,
      transaction
    });
    await confirmDurableNonceTransaction({
      abortSignal,
      commitment,
      transaction
    });
    return transactionSignature;
  }
  async function sendAndConfirmTransactionWithBlockhashLifetime_INTERNAL_ONLY_DO_NOT_EXPORT({
    abortSignal,
    commitment,
    confirmRecentTransaction,
    rpc,
    transaction,
    ...sendTransactionConfig
  }) {
    const transactionSignature = await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
      ...sendTransactionConfig,
      abortSignal,
      commitment,
      rpc,
      transaction
    });
    await confirmRecentTransaction({
      abortSignal,
      commitment,
      transaction
    });
    return transactionSignature;
  }

  // src/send-transaction.ts
  function sendTransactionWithoutConfirmingFactory({
    rpc
  }) {
    return async function sendTransactionWithoutConfirming(transaction, config) {
      await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...config,
        rpc,
        transaction
      });
    };
  }
  function sendAndConfirmDurableNonceTransactionFactory({
    rpc,
    rpcSubscriptions
  }) {
    const getNonceInvalidationPromise = createNonceInvalidationPromiseFactory(rpc, rpcSubscriptions);
    const getRecentSignatureConfirmationPromise = createRecentSignatureConfirmationPromiseFactory(
      rpc,
      rpcSubscriptions
    );
    async function confirmDurableNonceTransaction(config) {
      await waitForDurableNonceTransactionConfirmation({
        ...config,
        getNonceInvalidationPromise,
        getRecentSignatureConfirmationPromise
      });
    }
    return async function sendAndConfirmDurableNonceTransaction(transaction, config) {
      await sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...config,
        confirmDurableNonceTransaction,
        rpc,
        transaction
      });
    };
  }
  function sendAndConfirmTransactionFactory({
    rpc,
    rpcSubscriptions
  }) {
    const getBlockHeightExceedencePromise = createBlockHeightExceedencePromiseFactory({
      rpc,
      rpcSubscriptions
    });
    const getRecentSignatureConfirmationPromise = createRecentSignatureConfirmationPromiseFactory(
      rpc,
      rpcSubscriptions
    );
    async function confirmRecentTransaction(config) {
      await waitForRecentTransactionConfirmation({
        ...config,
        getBlockHeightExceedencePromise,
        getRecentSignatureConfirmationPromise
      });
    }
    return async function sendAndConfirmTransaction(transaction, config) {
      await sendAndConfirmTransactionWithBlockhashLifetime_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...config,
        confirmRecentTransaction,
        rpc,
        transaction
      });
    };
  }

  exports.AccountRole = AccountRole;
  exports.BASE_ACCOUNT_SIZE = BASE_ACCOUNT_SIZE;
  exports.Endian = Endian;
  exports.SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND;
  exports.SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED;
  exports.SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT;
  exports.SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT;
  exports.SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND;
  exports.SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED;
  exports.SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS;
  exports.SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH;
  exports.SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY;
  exports.SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE;
  exports.SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = SOLANA_ERROR__ADDRESSES__MALFORMED_PDA;
  exports.SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED;
  exports.SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED;
  exports.SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE;
  exports.SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER;
  exports.SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE;
  exports.SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE;
  exports.SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED;
  exports.SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY;
  exports.SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH;
  exports.SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH;
  exports.SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH;
  exports.SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE;
  exports.SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH;
  exports.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH;
  exports.SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH;
  exports.SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH;
  exports.SOLANA_ERROR__CODECS__INVALID_DATA_ENUM_VARIANT = SOLANA_ERROR__CODECS__INVALID_DATA_ENUM_VARIANT;
  exports.SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS;
  exports.SOLANA_ERROR__CODECS__INVALID_SCALAR_ENUM_VARIANT = SOLANA_ERROR__CODECS__INVALID_SCALAR_ENUM_VARIANT;
  exports.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE;
  exports.SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE;
  exports.SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID;
  exports.SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR;
  exports.SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS;
  exports.SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA;
  exports.SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH;
  exports.SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH;
  exports.SOLANA_ERROR__INVALID_NONCE = SOLANA_ERROR__INVALID_NONCE;
  exports.SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING;
  exports.SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE;
  exports.SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE;
  exports.SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING = SOLANA_ERROR__INVARIANT_VIOLATION__WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING;
  exports.SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR;
  exports.SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = SOLANA_ERROR__JSON_RPC__INVALID_PARAMS;
  exports.SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = SOLANA_ERROR__JSON_RPC__INVALID_REQUEST;
  exports.SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND;
  exports.SOLANA_ERROR__JSON_RPC__PARSE_ERROR = SOLANA_ERROR__JSON_RPC__PARSE_ERROR;
  exports.SOLANA_ERROR__JSON_RPC__SCAN_ERROR = SOLANA_ERROR__JSON_RPC__SCAN_ERROR;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE;
  exports.SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION;
  exports.SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH;
  exports.SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH;
  exports.SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH;
  exports.SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE;
  exports.SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE;
  exports.SOLANA_ERROR__MALFORMED_BIGINT_STRING = SOLANA_ERROR__MALFORMED_BIGINT_STRING;
  exports.SOLANA_ERROR__MALFORMED_NUMBER_STRING = SOLANA_ERROR__MALFORMED_NUMBER_STRING;
  exports.SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND;
  exports.SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_REQUEST = SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_REQUEST;
  exports.SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID;
  exports.SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED = SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED;
  exports.SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CONNECTION_CLOSED = SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_CONNECTION_CLOSED;
  exports.SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_FAILED_TO_CONNECT = SOLANA_ERROR__RPC_SUBSCRIPTIONS__TRANSPORT_FAILED_TO_CONNECT;
  exports.SOLANA_ERROR__RPC__INTEGER_OVERFLOW = SOLANA_ERROR__RPC__INTEGER_OVERFLOW;
  exports.SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR;
  exports.SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN;
  exports.SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER;
  exports.SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER;
  exports.SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS;
  exports.SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED;
  exports.SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED;
  exports.SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT;
  exports.SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME;
  exports.SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME;
  exports.SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE;
  exports.SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND;
  exports.SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE;
  exports.SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES;
  exports.SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE;
  exports.SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING;
  exports.SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE;
  exports.SolanaError = SolanaError;
  exports.addSignersToInstruction = addSignersToInstruction;
  exports.addSignersToTransaction = addSignersToTransaction;
  exports.address = address;
  exports.airdropFactory = airdropFactory;
  exports.appendTransactionInstruction = appendTransactionInstruction;
  exports.appendTransactionInstructions = appendTransactionInstructions;
  exports.assertAccountDecoded = assertAccountDecoded;
  exports.assertAccountExists = assertAccountExists;
  exports.assertAccountsDecoded = assertAccountsDecoded;
  exports.assertAccountsExist = assertAccountsExist;
  exports.assertByteArrayHasEnoughBytesForCodec = assertByteArrayHasEnoughBytesForCodec;
  exports.assertByteArrayIsNotEmptyForCodec = assertByteArrayIsNotEmptyForCodec;
  exports.assertByteArrayOffsetIsNotOutOfRange = assertByteArrayOffsetIsNotOutOfRange;
  exports.assertIsAddress = assertIsAddress;
  exports.assertIsBlockhash = assertIsBlockhash;
  exports.assertIsDurableNonceTransaction = assertIsDurableNonceTransaction;
  exports.assertIsFixedSize = assertIsFixedSize;
  exports.assertIsInstructionForProgram = assertIsInstructionForProgram;
  exports.assertIsInstructionWithAccounts = assertIsInstructionWithAccounts;
  exports.assertIsInstructionWithData = assertIsInstructionWithData;
  exports.assertIsKeyPairSigner = assertIsKeyPairSigner;
  exports.assertIsLamports = assertIsLamports;
  exports.assertIsMessageModifyingSigner = assertIsMessageModifyingSigner;
  exports.assertIsMessagePartialSigner = assertIsMessagePartialSigner;
  exports.assertIsMessageSigner = assertIsMessageSigner;
  exports.assertIsProgramDerivedAddress = assertIsProgramDerivedAddress;
  exports.assertIsSignature = assertIsSignature;
  exports.assertIsStringifiedBigInt = assertIsStringifiedBigInt;
  exports.assertIsStringifiedNumber = assertIsStringifiedNumber;
  exports.assertIsTransactionModifyingSigner = assertIsTransactionModifyingSigner;
  exports.assertIsTransactionPartialSigner = assertIsTransactionPartialSigner;
  exports.assertIsTransactionSendingSigner = assertIsTransactionSendingSigner;
  exports.assertIsTransactionSigner = assertIsTransactionSigner;
  exports.assertIsTransactionWithBlockhashLifetime = assertIsTransactionWithBlockhashLifetime;
  exports.assertIsTransactionWithSingleSendingSigner = assertIsTransactionWithSingleSendingSigner;
  exports.assertIsUnixTimestamp = assertIsUnixTimestamp;
  exports.assertIsVariableSize = assertIsVariableSize;
  exports.assertNumberIsBetweenForCodec = assertNumberIsBetweenForCodec;
  exports.assertTransactionIsFullySigned = assertTransactionIsFullySigned;
  exports.assertValidBaseString = assertValidBaseString;
  exports.assertValidNumberOfItemsForCodec = assertValidNumberOfItemsForCodec;
  exports.blockhash = blockhash;
  exports.combineCodec = combineCodec;
  exports.commitmentComparator = commitmentComparator;
  exports.compileMessage = compileMessage;
  exports.createAddressWithSeed = createAddressWithSeed;
  exports.createCodec = createCodec;
  exports.createDecoder = createDecoder;
  exports.createDefaultRpcSubscriptionsTransport = createDefaultRpcSubscriptionsTransport;
  exports.createDefaultRpcTransport = createDefaultRpcTransport;
  exports.createEncoder = createEncoder;
  exports.createKeyPairFromBytes = createKeyPairFromBytes;
  exports.createKeyPairSignerFromBytes = createKeyPairSignerFromBytes;
  exports.createNoopSigner = createNoopSigner;
  exports.createPrivateKeyFromBytes = createPrivateKeyFromBytes;
  exports.createRpc = createRpc;
  exports.createRpcApi = createRpcApi;
  exports.createRpcSubscriptionsApi = createRpcSubscriptionsApi;
  exports.createSignableMessage = createSignableMessage;
  exports.createSignerFromKeyPair = createSignerFromKeyPair;
  exports.createSolanaRpc = createSolanaRpc;
  exports.createSolanaRpcApi = createSolanaRpcApi;
  exports.createSolanaRpcFromTransport = createSolanaRpcFromTransport;
  exports.createSolanaRpcSubscriptions = createSolanaRpcSubscriptions;
  exports.createSolanaRpcSubscriptionsApi = createSolanaRpcSubscriptionsApi;
  exports.createSolanaRpcSubscriptionsApi_UNSTABLE = createSolanaRpcSubscriptionsApi_UNSTABLE;
  exports.createSolanaRpcSubscriptionsFromTransport = createSolanaRpcSubscriptionsFromTransport;
  exports.createSolanaRpcSubscriptionsFromTransport_UNSTABLE = createSolanaRpcSubscriptionsFromTransport_UNSTABLE;
  exports.createSolanaRpcSubscriptions_UNSTABLE = createSolanaRpcSubscriptions_UNSTABLE;
  exports.createSubscriptionRpc = createSubscriptionRpc;
  exports.createTransaction = createTransaction;
  exports.decodeAccount = decodeAccount;
  exports.decodeTransaction = decodeTransaction;
  exports.decompileTransaction = decompileTransaction;
  exports.devnet = devnet;
  exports.downgradeRoleToNonSigner = downgradeRoleToNonSigner;
  exports.downgradeRoleToReadonly = downgradeRoleToReadonly;
  exports.fetchEncodedAccount = fetchEncodedAccount;
  exports.fetchEncodedAccounts = fetchEncodedAccounts;
  exports.fetchJsonParsedAccount = fetchJsonParsedAccount;
  exports.fetchJsonParsedAccounts = fetchJsonParsedAccounts;
  exports.fixBytes = fixBytes;
  exports.fixCodec = fixCodec;
  exports.fixDecoder = fixDecoder;
  exports.fixEncoder = fixEncoder;
  exports.generateKeyPair = generateKeyPair;
  exports.generateKeyPairSigner = generateKeyPairSigner;
  exports.getAddressCodec = getAddressCodec;
  exports.getAddressComparator = getAddressComparator;
  exports.getAddressDecoder = getAddressDecoder;
  exports.getAddressEncoder = getAddressEncoder;
  exports.getAddressFromPublicKey = getAddressFromPublicKey;
  exports.getArrayCodec = getArrayCodec;
  exports.getArrayDecoder = getArrayDecoder;
  exports.getArrayEncoder = getArrayEncoder;
  exports.getBase10Codec = getBase10Codec;
  exports.getBase10Decoder = getBase10Decoder;
  exports.getBase10Encoder = getBase10Encoder;
  exports.getBase16Codec = getBase16Codec;
  exports.getBase16Decoder = getBase16Decoder;
  exports.getBase16Encoder = getBase16Encoder;
  exports.getBase58Codec = getBase58Codec;
  exports.getBase58Decoder = getBase58Decoder;
  exports.getBase58Encoder = getBase58Encoder;
  exports.getBase64Codec = getBase64Codec;
  exports.getBase64Decoder = getBase64Decoder;
  exports.getBase64EncodedWireTransaction = getBase64EncodedWireTransaction;
  exports.getBase64Encoder = getBase64Encoder;
  exports.getBaseXCodec = getBaseXCodec;
  exports.getBaseXDecoder = getBaseXDecoder;
  exports.getBaseXEncoder = getBaseXEncoder;
  exports.getBaseXResliceCodec = getBaseXResliceCodec;
  exports.getBaseXResliceDecoder = getBaseXResliceDecoder;
  exports.getBaseXResliceEncoder = getBaseXResliceEncoder;
  exports.getBitArrayCodec = getBitArrayCodec;
  exports.getBitArrayDecoder = getBitArrayDecoder;
  exports.getBitArrayEncoder = getBitArrayEncoder;
  exports.getBlockhashCodec = getBlockhashCodec;
  exports.getBlockhashComparator = getBlockhashComparator;
  exports.getBlockhashDecoder = getBlockhashDecoder;
  exports.getBlockhashEncoder = getBlockhashEncoder;
  exports.getBooleanCodec = getBooleanCodec;
  exports.getBooleanDecoder = getBooleanDecoder;
  exports.getBooleanEncoder = getBooleanEncoder;
  exports.getBytesCodec = getBytesCodec;
  exports.getBytesDecoder = getBytesDecoder;
  exports.getBytesEncoder = getBytesEncoder;
  exports.getCompiledMessageCodec = getCompiledMessageCodec;
  exports.getCompiledMessageDecoder = getCompiledMessageDecoder;
  exports.getCompiledMessageEncoder = getCompiledMessageEncoder;
  exports.getCompiledTransactionDecoder = getCompiledTransactionDecoder;
  exports.getDataEnumCodec = getDataEnumCodec;
  exports.getDataEnumDecoder = getDataEnumDecoder;
  exports.getDataEnumEncoder = getDataEnumEncoder;
  exports.getEncodedSize = getEncodedSize;
  exports.getF32Codec = getF32Codec;
  exports.getF32Decoder = getF32Decoder;
  exports.getF32Encoder = getF32Encoder;
  exports.getF64Codec = getF64Codec;
  exports.getF64Decoder = getF64Decoder;
  exports.getF64Encoder = getF64Encoder;
  exports.getI128Codec = getI128Codec;
  exports.getI128Decoder = getI128Decoder;
  exports.getI128Encoder = getI128Encoder;
  exports.getI16Codec = getI16Codec;
  exports.getI16Decoder = getI16Decoder;
  exports.getI16Encoder = getI16Encoder;
  exports.getI32Codec = getI32Codec;
  exports.getI32Decoder = getI32Decoder;
  exports.getI32Encoder = getI32Encoder;
  exports.getI64Codec = getI64Codec;
  exports.getI64Decoder = getI64Decoder;
  exports.getI64Encoder = getI64Encoder;
  exports.getI8Codec = getI8Codec;
  exports.getI8Decoder = getI8Decoder;
  exports.getI8Encoder = getI8Encoder;
  exports.getLamportsCodec = getLamportsCodec;
  exports.getLamportsDecoder = getLamportsDecoder;
  exports.getLamportsEncoder = getLamportsEncoder;
  exports.getMapCodec = getMapCodec;
  exports.getMapDecoder = getMapDecoder;
  exports.getMapEncoder = getMapEncoder;
  exports.getNullableCodec = getNullableCodec;
  exports.getNullableDecoder = getNullableDecoder;
  exports.getNullableEncoder = getNullableEncoder;
  exports.getOptionCodec = getOptionCodec;
  exports.getOptionDecoder = getOptionDecoder;
  exports.getOptionEncoder = getOptionEncoder;
  exports.getProgramDerivedAddress = getProgramDerivedAddress;
  exports.getScalarEnumCodec = getScalarEnumCodec;
  exports.getScalarEnumDecoder = getScalarEnumDecoder;
  exports.getScalarEnumEncoder = getScalarEnumEncoder;
  exports.getSetCodec = getSetCodec;
  exports.getSetDecoder = getSetDecoder;
  exports.getSetEncoder = getSetEncoder;
  exports.getShortU16Codec = getShortU16Codec;
  exports.getShortU16Decoder = getShortU16Decoder;
  exports.getShortU16Encoder = getShortU16Encoder;
  exports.getSignatureFromTransaction = getSignatureFromTransaction;
  exports.getSignersFromInstruction = getSignersFromInstruction;
  exports.getSignersFromTransaction = getSignersFromTransaction;
  exports.getSolanaErrorFromInstructionError = getSolanaErrorFromInstructionError;
  exports.getSolanaErrorFromJsonRpcError = getSolanaErrorFromJsonRpcError;
  exports.getSolanaErrorFromTransactionError = getSolanaErrorFromTransactionError;
  exports.getStringCodec = getStringCodec;
  exports.getStringDecoder = getStringDecoder;
  exports.getStringEncoder = getStringEncoder;
  exports.getStructCodec = getStructCodec;
  exports.getStructDecoder = getStructDecoder;
  exports.getStructEncoder = getStructEncoder;
  exports.getTransactionCodec = getTransactionCodec;
  exports.getTransactionDecoder = getTransactionDecoder;
  exports.getTransactionEncoder = getTransactionEncoder;
  exports.getTupleCodec = getTupleCodec;
  exports.getTupleDecoder = getTupleDecoder;
  exports.getTupleEncoder = getTupleEncoder;
  exports.getU128Codec = getU128Codec;
  exports.getU128Decoder = getU128Decoder;
  exports.getU128Encoder = getU128Encoder;
  exports.getU16Codec = getU16Codec;
  exports.getU16Decoder = getU16Decoder;
  exports.getU16Encoder = getU16Encoder;
  exports.getU32Codec = getU32Codec;
  exports.getU32Decoder = getU32Decoder;
  exports.getU32Encoder = getU32Encoder;
  exports.getU64Codec = getU64Codec;
  exports.getU64Decoder = getU64Decoder;
  exports.getU64Encoder = getU64Encoder;
  exports.getU8Codec = getU8Codec;
  exports.getU8Decoder = getU8Decoder;
  exports.getU8Encoder = getU8Encoder;
  exports.getUnitCodec = getUnitCodec;
  exports.getUnitDecoder = getUnitDecoder;
  exports.getUnitEncoder = getUnitEncoder;
  exports.getUnsignedTransaction = getUnsignedTransaction;
  exports.getUtf8Codec = getUtf8Codec;
  exports.getUtf8Decoder = getUtf8Decoder;
  exports.getUtf8Encoder = getUtf8Encoder;
  exports.isAddress = isAddress;
  exports.isAdvanceNonceAccountInstruction = isAdvanceNonceAccountInstruction;
  exports.isBlockhash = isBlockhash;
  exports.isFixedSize = isFixedSize;
  exports.isInstructionForProgram = isInstructionForProgram;
  exports.isInstructionWithAccounts = isInstructionWithAccounts;
  exports.isInstructionWithData = isInstructionWithData;
  exports.isKeyPairSigner = isKeyPairSigner;
  exports.isLamports = isLamports;
  exports.isMessageModifyingSigner = isMessageModifyingSigner;
  exports.isMessagePartialSigner = isMessagePartialSigner;
  exports.isMessageSigner = isMessageSigner;
  exports.isNone = isNone;
  exports.isOption = isOption;
  exports.isProgramDerivedAddress = isProgramDerivedAddress;
  exports.isSignature = isSignature;
  exports.isSignerRole = isSignerRole;
  exports.isSolanaError = isSolanaError;
  exports.isSome = isSome;
  exports.isStringifiedBigInt = isStringifiedBigInt;
  exports.isStringifiedNumber = isStringifiedNumber;
  exports.isTransactionModifyingSigner = isTransactionModifyingSigner;
  exports.isTransactionPartialSigner = isTransactionPartialSigner;
  exports.isTransactionSendingSigner = isTransactionSendingSigner;
  exports.isTransactionSigner = isTransactionSigner;
  exports.isTransactionWithSingleSendingSigner = isTransactionWithSingleSendingSigner;
  exports.isUnixTimestamp = isUnixTimestamp;
  exports.isVariableSize = isVariableSize;
  exports.isWritableRole = isWritableRole;
  exports.lamports = lamports;
  exports.mainnet = mainnet;
  exports.mapCodec = mapCodec;
  exports.mapDecoder = mapDecoder;
  exports.mapEncoder = mapEncoder;
  exports.mergeBytes = mergeBytes;
  exports.mergeRoles = mergeRoles;
  exports.none = none;
  exports.offsetCodec = offsetCodec;
  exports.offsetDecoder = offsetDecoder;
  exports.offsetEncoder = offsetEncoder;
  exports.padBytes = padBytes;
  exports.padLeftCodec = padLeftCodec;
  exports.padLeftDecoder = padLeftDecoder;
  exports.padLeftEncoder = padLeftEncoder;
  exports.padNullCharacters = padNullCharacters;
  exports.padRightCodec = padRightCodec;
  exports.padRightDecoder = padRightDecoder;
  exports.padRightEncoder = padRightEncoder;
  exports.parseBase58RpcAccount = parseBase58RpcAccount;
  exports.parseBase64RpcAccount = parseBase64RpcAccount;
  exports.parseJsonRpcAccount = parseJsonRpcAccount;
  exports.partiallySignTransaction = partiallySignTransaction;
  exports.partiallySignTransactionWithSigners = partiallySignTransactionWithSigners;
  exports.pipe = pipe;
  exports.prependTransactionInstruction = prependTransactionInstruction;
  exports.prependTransactionInstructions = prependTransactionInstructions;
  exports.removeNullCharacters = removeNullCharacters;
  exports.resizeCodec = resizeCodec;
  exports.resizeDecoder = resizeDecoder;
  exports.resizeEncoder = resizeEncoder;
  exports.resolveTransactionError = resolveTransactionError;
  exports.reverseCodec = reverseCodec;
  exports.reverseDecoder = reverseDecoder;
  exports.reverseEncoder = reverseEncoder;
  exports.safeCaptureStackTrace = safeCaptureStackTrace;
  exports.sendAndConfirmDurableNonceTransactionFactory = sendAndConfirmDurableNonceTransactionFactory;
  exports.sendAndConfirmTransactionFactory = sendAndConfirmTransactionFactory;
  exports.sendTransactionWithoutConfirmingFactory = sendTransactionWithoutConfirmingFactory;
  exports.setTransactionFeePayer = setTransactionFeePayer;
  exports.setTransactionFeePayerSigner = setTransactionFeePayerSigner;
  exports.setTransactionLifetimeUsingBlockhash = setTransactionLifetimeUsingBlockhash;
  exports.setTransactionLifetimeUsingDurableNonce = setTransactionLifetimeUsingDurableNonce;
  exports.signAndSendTransactionWithSigners = signAndSendTransactionWithSigners;
  exports.signBytes = signBytes;
  exports.signTransaction = signTransaction;
  exports.signTransactionWithSigners = signTransactionWithSigners;
  exports.signature = signature;
  exports.some = some;
  exports.stringifiedBigInt = stringifiedBigInt;
  exports.stringifiedNumber = stringifiedNumber;
  exports.testnet = testnet;
  exports.unixTimestamp = unixTimestamp;
  exports.unwrapOption = unwrapOption;
  exports.unwrapOptionRecursively = unwrapOptionRecursively;
  exports.upgradeRoleToSigner = upgradeRoleToSigner;
  exports.upgradeRoleToWritable = upgradeRoleToWritable;
  exports.verifySignature = verifySignature;
  exports.wrapNullable = wrapNullable;

  return exports;

})({});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.development.js.map