(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dist/scripts/routes/single-product"],{

/***/ "./node_modules/hybrids/esm/cache.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/cache.js ***!
  \*******************************************/
/*! exports provided: getEntry, get, set, invalidate, observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntry", function() { return getEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidate", function() { return invalidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
/* harmony import */ var _emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter.js */ "./node_modules/hybrids/esm/emitter.js");


var entries = new WeakMap();
function getEntry(target, key) {
  var targetMap = entries.get(target);

  if (!targetMap) {
    targetMap = new Map();
    entries.set(target, targetMap);
  }

  var entry = targetMap.get(key);

  if (!entry) {
    entry = {
      target: target,
      key: key,
      value: undefined,
      contexts: undefined,
      deps: undefined,
      state: 0,
      checksum: 0,
      observed: false
    };
    targetMap.set(key, entry);
  }

  return entry;
}

function calculateChecksum(entry) {
  var checksum = entry.state;

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      checksum += depEntry.state;
    });
  }

  return checksum;
}

function dispatchDeep(entry) {
  if (entry.observed) _emitter_js__WEBPACK_IMPORTED_MODULE_1__["dispatch"](entry);
  if (entry.contexts) entry.contexts.forEach(dispatchDeep);
}

function restoreObservedDeps(entry, deps) {
  if (deps) {
    deps.forEach(function (depEntry) {
      entry.deps.add(depEntry);
      if (!depEntry.contexts) depEntry.contexts = new Set();
      depEntry.contexts.add(entry);
      restoreObservedDeps(entry, depEntry.deps);
    });
  }
}

var contextStack = new Set();
function get(target, key, getter) {
  var entry = getEntry(target, key);

  if (contextStack.size && contextStack.has(entry)) {
    throw Error("Circular get invocation of the '".concat(key, "' property in '").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(target), "'"));
  }

  contextStack.forEach(function (context) {
    if (!context.deps) context.deps = new Set();
    context.deps.add(entry);

    if (context.observed) {
      if (!entry.contexts) entry.contexts = new Set();
      entry.contexts.add(context);
    }
  });

  if (entry.checksum && entry.checksum === calculateChecksum(entry)) {
    return entry.value;
  }

  try {
    contextStack.add(entry);

    if (entry.observed && entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }

    entry.deps = undefined;
    var nextValue = getter(target, entry.value);

    if (entry.observed && entry.deps) {
      entry.deps.forEach(function (depEntry) {
        restoreObservedDeps(entry, depEntry.deps);
      });
    }

    if (nextValue !== entry.value) {
      entry.state += 1;
      entry.value = nextValue;
      dispatchDeep(entry);
    }

    entry.checksum = calculateChecksum(entry);
    contextStack.delete(entry);
  } catch (e) {
    entry.checksum = 0;
    contextStack.delete(entry);
    contextStack.forEach(function (context) {
      context.deps.delete(entry);
      if (context.observed) entry.contexts.delete(context);
    });
    throw e;
  }

  return entry.value;
}
function set(target, key, setter, value, force) {
  if (contextStack.size && !force) {
    throw Error("Try to set '".concat(key, "' of '").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(target), "' in get call"));
  }

  var entry = getEntry(target, key);
  var newValue = setter(target, value, entry.value);

  if (newValue !== entry.value) {
    entry.checksum = 0;
    entry.state += 1;
    entry.value = newValue;
    dispatchDeep(entry);
  }
}
function invalidate(target, key, clearValue) {
  if (contextStack.size) {
    throw Error("Try to invalidate '".concat(key, "' in '").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(target), "' get call"));
  }

  var entry = getEntry(target, key);
  entry.checksum = 0;
  entry.state += 1;
  dispatchDeep(entry);

  if (clearValue) {
    entry.value = undefined;
  }
}
function observe(target, key, getter, fn) {
  var entry = getEntry(target, key);
  entry.observed = true;
  var lastValue;
  var unsubscribe = _emitter_js__WEBPACK_IMPORTED_MODULE_1__["subscribe"](entry, function () {
    var value = get(target, key, getter);

    if (value !== lastValue) {
      fn(target, value, lastValue);
      lastValue = value;
    }
  });

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      if (!depEntry.contexts) depEntry.contexts = new Set();
      depEntry.contexts.add(entry);
    });
  }

  return function unobserve() {
    unsubscribe();
    entry.observed = false;

    if (entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdpZnlFbGVtZW50IiwiZW1pdHRlciIsImVudHJpZXMiLCJXZWFrTWFwIiwiZ2V0RW50cnkiLCJ0YXJnZXQiLCJrZXkiLCJ0YXJnZXRNYXAiLCJnZXQiLCJNYXAiLCJzZXQiLCJlbnRyeSIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29udGV4dHMiLCJkZXBzIiwic3RhdGUiLCJjaGVja3N1bSIsIm9ic2VydmVkIiwiY2FsY3VsYXRlQ2hlY2tzdW0iLCJmb3JFYWNoIiwiZGVwRW50cnkiLCJkaXNwYXRjaERlZXAiLCJkaXNwYXRjaCIsInJlc3RvcmVPYnNlcnZlZERlcHMiLCJhZGQiLCJTZXQiLCJjb250ZXh0U3RhY2siLCJnZXR0ZXIiLCJzaXplIiwiaGFzIiwiRXJyb3IiLCJjb250ZXh0IiwiZGVsZXRlIiwibmV4dFZhbHVlIiwiZSIsInNldHRlciIsImZvcmNlIiwibmV3VmFsdWUiLCJpbnZhbGlkYXRlIiwiY2xlYXJWYWx1ZSIsIm9ic2VydmUiLCJmbiIsImxhc3RWYWx1ZSIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidW5vYnNlcnZlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxnQkFBVCxRQUFpQyxZQUFqQztBQUNBLE9BQU8sS0FBS0MsT0FBWixNQUF5QixjQUF6QjtBQUVBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLEVBQWhCO0FBQ0EsT0FBTyxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDcEMsTUFBSUMsU0FBUyxHQUFHTCxPQUFPLENBQUNNLEdBQVIsQ0FBWUgsTUFBWixDQUFoQjs7QUFDQSxNQUFJLENBQUNFLFNBQUwsRUFBZ0I7QUFDZEEsSUFBQUEsU0FBUyxHQUFHLElBQUlFLEdBQUosRUFBWjtBQUNBUCxJQUFBQSxPQUFPLENBQUNRLEdBQVIsQ0FBWUwsTUFBWixFQUFvQkUsU0FBcEI7QUFDRDs7QUFFRCxNQUFJSSxLQUFLLEdBQUdK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RCxRQUFNQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0gsTUFBRCxFQUFTQyxHQUFULEVBQWNzQixNQUFkLENBQWpCOztBQUNBLFFBQUloQixLQUFLLEtBQUsrQixTQUFkLEVBQXlCO0FBQ3ZCRCxNQUFBQSxFQUFFLENBQUNyQyxNQUFELEVBQVNPLEtBQVQsRUFBZ0IrQixTQUFoQixDQUFGO0FBQ0FBLE1BQUFBLFNBQVMsR0FBRy9CLEtBQVo7QUFDRDtBQUNGLEdBTm1CLENBQXBCOztBQVFBLE1BQUlELEtBQUssQ0FBQ0ksSUFBVixFQUFnQjtBQUNkSixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV0ssT0FBWCxDQUFtQixVQUFBQyxRQUFRLEVBQUk7QUFDN0IsVUFBSSxDQUFDQSxRQUFRLENBQUNQLFFBQWQsRUFBd0JPLFFBQVEsQ0FBQ1AsUUFBVCxHQUFvQixJQUFJWSxHQUFKLEVBQXBCO0FBQ3hCTCxNQUFBQSxRQUFRLENBQUNQLFFBQVQsQ0FBa0JXLEdBQWxCLENBQXNCZCxLQUF0QjtBQUNELEtBSEQ7QUFJRDs7QUFFRCxTQUFPLFNBQVNtQyxTQUFULEdBQXFCO0FBQzFCRixJQUFBQSxXQUFXO0FBQ1hqQyxJQUFBQSxLQUFLLENBQUNPLFFBQU4sR0FBaUIsS0FBakI7O0FBQ0EsUUFBSVAsS0FBSyxDQUFDSSxJQUFOLElBQWNKLEtBQUssQ0FBQ0ksSUFBTixDQUFXYyxJQUE3QixFQUFtQztBQUNqQ2xCLE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXSyxPQUFYLENBQW1CLFVBQUFDLFFBQVEsRUFBSTtBQUM3QixZQUFJQSxRQUFRLENBQUNQLFFBQWIsRUFBdUJPLFFBQVEsQ0FBQ1AsUUFBVCxDQUFrQm1CLE1BQWxCLENBQXlCdEIsS0FBekI7QUFDeEIsT0FGRDtBQUdEO0FBQ0YsR0FSRDtBQVNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5naWZ5RWxlbWVudCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgKiBhcyBlbWl0dGVyIGZyb20gXCIuL2VtaXR0ZXIuanNcIjtcblxuY29uc3QgZW50cmllcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnkodGFyZ2V0LCBrZXkpIHtcbiAgbGV0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICghdGFyZ2V0TWFwKSB7XG4gICAgdGFyZ2V0TWFwID0gbmV3IE1hcCgpO1xuICAgIGVudHJpZXMuc2V0KHRhcmdldCwgdGFyZ2V0TWFwKTtcbiAgfVxuXG4gIGxldCBlbnRyeSA9IHRhcmdldE1hcC5nZXQoa2V5KTtcblxuICBpZiAoIWVudHJ5KSB7XG4gICAgZW50cnkgPSB7XG4gICAgICB0YXJnZXQsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dHM6IHVuZGVmaW5lZCxcbiAgICAgIGRlcHM6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXRlOiAwLFxuICAgICAgY2hlY2tzdW06IDAsXG4gICAgICBvYnNlcnZlZDogZmFsc2UsXG4gICAgfTtcbiAgICB0YXJnZXRNYXAuc2V0KGtleSwgZW50cnkpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDaGVja3N1bShlbnRyeSkge1xuICBsZXQgY2hlY2tzdW0gPSBlbnRyeS5zdGF0ZTtcbiAgaWYgKGVudHJ5LmRlcHMpIHtcbiAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgY2hlY2tzdW0gKz0gZGVwRW50cnkuc3RhdGU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRGVlcChlbnRyeSkge1xuICBpZiAoZW50cnkub2JzZXJ2ZWQpIGVtaXR0ZXIuZGlzcGF0Y2goZW50cnkpO1xuICBpZiAoZW50cnkuY29udGV4dHMpIGVudHJ5LmNvbnRleHRzLmZvckVhY2goZGlzcGF0Y2hEZWVwKTtcbn1cblxuZnVuY3Rpb24gcmVzdG9yZU9ic2VydmVkRGVwcyhlbnRyeSwgZGVwcykge1xuICBpZiAoZGVwcykge1xuICAgIGRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICBlbnRyeS5kZXBzLmFkZChkZXBFbnRyeSk7XG4gICAgICBpZiAoIWRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGRlcEVudHJ5LmNvbnRleHRzLmFkZChlbnRyeSk7XG4gICAgICByZXN0b3JlT2JzZXJ2ZWREZXBzKGVudHJ5LCBkZXBFbnRyeS5kZXBzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBjb250ZXh0U3RhY2sgPSBuZXcgU2V0KCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0KHRhcmdldCwga2V5LCBnZXR0ZXIpIHtcbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG5cbiAgaWYgKGNvbnRleHRTdGFjay5zaXplICYmIGNvbnRleHRTdGFjay5oYXMoZW50cnkpKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgQ2lyY3VsYXIgZ2V0IGludm9jYXRpb24gb2YgdGhlICcke2tleX0nIHByb3BlcnR5IGluICcke3N0cmluZ2lmeUVsZW1lbnQoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICl9J2AsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnRleHRTdGFjay5mb3JFYWNoKGNvbnRleHQgPT4ge1xuICAgIGlmICghY29udGV4dC5kZXBzKSBjb250ZXh0LmRlcHMgPSBuZXcgU2V0KCk7XG4gICAgY29udGV4dC5kZXBzLmFkZChlbnRyeSk7XG5cbiAgICBpZiAoY29udGV4dC5vYnNlcnZlZCkge1xuICAgICAgaWYgKCFlbnRyeS5jb250ZXh0cykgZW50cnkuY29udGV4dHMgPSBuZXcgU2V0KCk7XG4gICAgICBlbnRyeS5jb250ZXh0cy5hZGQoY29udGV4dCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZW50cnkuY2hlY2tzdW0gJiYgZW50cnkuY2hlY2tzdW0gPT09IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KSkge1xuICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29udGV4dFN0YWNrLmFkZChlbnRyeSk7XG5cbiAgICBpZiAoZW50cnkub2JzZXJ2ZWQgJiYgZW50cnkuZGVwcyAmJiBlbnRyeS5kZXBzLnNpemUpIHtcbiAgICAgIGVudHJ5LmRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICAgIGlmIChkZXBFbnRyeS5jb250ZXh0cykgZGVwRW50cnkuY29udGV4dHMuZGVsZXRlKGVudHJ5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVudHJ5LmRlcHMgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gZ2V0dGVyKHRhcmdldCwgZW50cnkudmFsdWUpO1xuXG4gICAgaWYgKGVudHJ5Lm9ic2VydmVkICYmIGVudHJ5LmRlcHMpIHtcbiAgICAgIGVudHJ5LmRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICAgIHJlc3RvcmVPYnNlcnZlZERlcHMoZW50cnksIGRlcEVudHJ5LmRlcHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICAgIGVudHJ5LnN0YXRlICs9IDE7XG4gICAgICBlbnRyeS52YWx1ZSA9IG5leHRWYWx1ZTtcblxuICAgICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgICB9XG5cbiAgICBlbnRyeS5jaGVja3N1bSA9IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KTtcbiAgICBjb250ZXh0U3RhY2suZGVsZXRlKGVudHJ5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVudHJ5LmNoZWNrc3VtID0gMDtcblxuICAgIGNvbnRleHRTdGFjay5kZWxldGUoZW50cnkpO1xuICAgIGNvbnRleHRTdGFjay5mb3JFYWNoKGNvbnRleHQgPT4ge1xuICAgICAgY29udGV4dC5kZXBzLmRlbGV0ZShlbnRyeSk7XG4gICAgICBpZiAoY29udGV4dC5vYnNlcnZlZCkgZW50cnkuY29udGV4dHMuZGVsZXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBlbnRyeS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCh0YXJnZXQsIGtleSwgc2V0dGVyLCB2YWx1ZSwgZm9yY2UpIHtcbiAgaWYgKGNvbnRleHRTdGFjay5zaXplICYmICFmb3JjZSkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRyeSB0byBzZXQgJyR7a2V5fScgb2YgJyR7c3RyaW5naWZ5RWxlbWVudCh0YXJnZXQpfScgaW4gZ2V0IGNhbGxgLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgY29uc3QgbmV3VmFsdWUgPSBzZXR0ZXIodGFyZ2V0LCB2YWx1ZSwgZW50cnkudmFsdWUpO1xuXG4gIGlmIChuZXdWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICBlbnRyeS5jaGVja3N1bSA9IDA7XG4gICAgZW50cnkuc3RhdGUgKz0gMTtcbiAgICBlbnRyeS52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZSh0YXJnZXQsIGtleSwgY2xlYXJWYWx1ZSkge1xuICBpZiAoY29udGV4dFN0YWNrLnNpemUpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBUcnkgdG8gaW52YWxpZGF0ZSAnJHtrZXl9JyBpbiAnJHtzdHJpbmdpZnlFbGVtZW50KHRhcmdldCl9JyBnZXQgY2FsbGAsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGVudHJ5ID0gZ2V0RW50cnkodGFyZ2V0LCBrZXkpO1xuXG4gIGVudHJ5LmNoZWNrc3VtID0gMDtcbiAgZW50cnkuc3RhdGUgKz0gMTtcblxuICBkaXNwYXRjaERlZXAoZW50cnkpO1xuXG4gIGlmIChjbGVhclZhbHVlKSB7XG4gICAgZW50cnkudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUodGFyZ2V0LCBrZXksIGdldHRlciwgZm4pIHtcbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG4gIGVudHJ5Lm9ic2VydmVkID0gdHJ1ZTtcblxuICBsZXQgbGFzdFZhbHVlO1xuICBjb25zdCB1bnN1YnNjcmliZSA9IGVtaXR0ZXIuc3Vic2NyaWJlKGVudHJ5LCAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXQodGFyZ2V0LCBrZXksIGdldHRlcik7XG4gICAgaWYgKHZhbHVlICE9PSBsYXN0VmFsdWUpIHtcbiAgICAgIGZuKHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSk7XG4gICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlbnRyeS5kZXBzKSB7XG4gICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgZGVwRW50cnkuY29udGV4dHMuYWRkKGVudHJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgICBlbnRyeS5vYnNlcnZlZCA9IGZhbHNlO1xuICAgIGlmIChlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/children.js":
/*!**********************************************!*\
  !*** ./node_modules/hybrids/esm/children.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return children; });
function walk(node, fn, options) {
  var items = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  Array.from(node.children).forEach(function (child) {
    var hybrids = child.constructor.hybrids;

    if (hybrids && fn(hybrids)) {
      items.push(child);

      if (options.deep && options.nested) {
        walk(child, fn, options, items);
      }
    } else if (options.deep) {
      walk(child, fn, options, items);
    }
  });
  return items;
}

function children(hybridsOrFn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    deep: false,
    nested: false
  };
  var fn = typeof hybridsOrFn === "function" ? hybridsOrFn : function (hybrids) {
    return hybrids === hybridsOrFn;
  };
  return {
    get: function get(host) {
      return walk(host, fn, options);
    },
    connect: function connect(host, key, invalidate) {
      var observer = new MutationObserver(invalidate);
      observer.observe(host, {
        childList: true,
        subtree: !!options.deep
      });
      return function () {
        observer.disconnect();
      };
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGlsZHJlbi5qcyJdLCJuYW1lcyI6WyJ3YWxrIiwibm9kZSIsImZuIiwib3B0aW9ucyIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoeWJyaWRzIiwiY29uc3RydWN0b3IiLCJwdXNoIiwiZGVlcCIsIm5lc3RlZCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiaG9zdCIsImNvbm5lY3QiLCJrZXkiLCJpbnZhbGlkYXRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0JDLEVBQXBCLEVBQXdCQyxPQUF4QixFQUE2QztBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTtBQUMzQ0MsRUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdMLElBQUksQ0FBQ00sUUFBaEIsRUFBMEJDLE9BQTFCLENBQWtDLFVBQUFDLEtBQUssRUFBSTtBQUN6QyxRQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkQsT0FBbEM7O0FBQ0EsUUFBSUEsT0FBTyxJQUFJUixFQUFFLENBQUNRLE9BQUQsQ0FBakIsRUFBNEI7QUFDMUJOLE1BQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXSCxLQUFYOztBQUNBLFVBQUlOLE9BQU8sQ0FBQ1UsSUFBUixJQUFnQlYsT0FBTyxDQUFDVyxNQUE1QixFQUFvQztBQUNsQ2QsUUFBQUEsSUFBSSxDQUFDUyxLQUFELEVBQVFQLEVBQVIsRUFBWUMsT0FBWixFQUFxQkMsS0FBckIsQ0FBSjtBQUNEO0FBQ0YsS0FMRCxNQUtPLElBQUlELE9BQU8sQ0FBQ1UsSUFBWixFQUFrQjtBQUN2QmIsTUFBQUEsSUFBSSxDQUFDUyxLQUFELEVBQVFQLEVBQVIsRUFBWUMsT0FBWixFQUFxQkMsS0FBckIsQ0FBSjtBQUNEO0FBQ0YsR0FWRDtBQVlBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFlLFNBQVNHLFFBQVQsQ0FDYlEsV0FEYSxFQUdiO0FBQUEsTUFEQVosT0FDQSx1RUFEVTtBQUFFVSxJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxJQUFBQSxNQUFNLEVBQUU7QUFBdkIsR0FDVjtBQUNBLE1BQU1aLEVBQUUsR0FDTixPQUFPYSxXQUFQLEtBQXVCLFVBQXZCLEdBQ0lBLFdBREosR0FFSSxVQUFBTCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLSyxXQUFoQjtBQUFBLEdBSGI7QUFJQSxTQUFPO0FBQ0xDLElBQUFBLEdBREssZUFDREMsSUFEQyxFQUNLO0FBQ1IsYUFBT2pCLElBQUksQ0FBQ2lCLElBQUQsRUFBT2YsRUFBUCxFQUFXQyxPQUFYLENBQVg7QUFDRCxLQUhJO0FBSUxlLElBQUFBLE9BSkssbUJBSUdELElBSkgsRUFJU0UsR0FKVCxFQUljQyxVQUpkLEVBSTBCO0FBQzdCLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQkYsVUFBckIsQ0FBakI7QUFFQUMsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCTixJQUFqQixFQUF1QjtBQUNyQk8sUUFBQUEsU0FBUyxFQUFFLElBRFU7QUFFckJDLFFBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUN0QixPQUFPLENBQUNVO0FBRkUsT0FBdkI7QUFLQSxhQUFPLFlBQU07QUFDWFEsUUFBQUEsUUFBUSxDQUFDSyxVQUFUO0FBQ0QsT0FGRDtBQUdEO0FBZkksR0FBUDtBQWlCRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdhbGsobm9kZSwgZm4sIG9wdGlvbnMsIGl0ZW1zID0gW10pIHtcbiAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjb25zdCBoeWJyaWRzID0gY2hpbGQuY29uc3RydWN0b3IuaHlicmlkcztcbiAgICBpZiAoaHlicmlkcyAmJiBmbihoeWJyaWRzKSkge1xuICAgICAgaXRlbXMucHVzaChjaGlsZCk7XG4gICAgICBpZiAob3B0aW9ucy5kZWVwICYmIG9wdGlvbnMubmVzdGVkKSB7XG4gICAgICAgIHdhbGsoY2hpbGQsIGZuLCBvcHRpb25zLCBpdGVtcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRlZXApIHtcbiAgICAgIHdhbGsoY2hpbGQsIGZuLCBvcHRpb25zLCBpdGVtcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoaWxkcmVuKFxuICBoeWJyaWRzT3JGbixcbiAgb3B0aW9ucyA9IHsgZGVlcDogZmFsc2UsIG5lc3RlZDogZmFsc2UgfSxcbikge1xuICBjb25zdCBmbiA9XG4gICAgdHlwZW9mIGh5YnJpZHNPckZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gaHlicmlkc09yRm5cbiAgICAgIDogaHlicmlkcyA9PiBoeWJyaWRzID09PSBoeWJyaWRzT3JGbjtcbiAgcmV0dXJuIHtcbiAgICBnZXQoaG9zdCkge1xuICAgICAgcmV0dXJuIHdhbGsoaG9zdCwgZm4sIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY29ubmVjdChob3N0LCBrZXksIGludmFsaWRhdGUpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaW52YWxpZGF0ZSk7XG5cbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaG9zdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6ICEhb3B0aW9ucy5kZWVwLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/define.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/define.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return define; });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/hybrids/esm/property.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./node_modules/hybrids/esm/render.js");
/* harmony import */ var _cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.js */ "./node_modules/hybrids/esm/cache.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/* istanbul ignore next */

try {
  "development";
} catch (e) {
  var process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var defaultMethod = function defaultMethod(host, value) {
  return value;
};

function compile(Hybrid, descriptors) {
  Hybrid.hybrids = descriptors;
  Hybrid.callbacks = [];
  Object.keys(descriptors).forEach(function (key) {
    var desc = descriptors[key];

    var type = _typeof(desc);

    var config;

    if (type === "function") {
      config = key === "render" ? Object(_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])(desc) : {
        get: desc
      };
    } else if (type !== "object" || desc === null || Array.isArray(desc)) {
      config = Object(_property_js__WEBPACK_IMPORTED_MODULE_0__["default"])(desc);
    } else {
      config = {
        get: desc.get || defaultMethod,
        set: desc.set || !desc.get && defaultMethod || undefined,
        connect: desc.connect,
        observe: desc.observe
      };
    }

    Object.defineProperty(Hybrid.prototype, key, {
      get: function get() {
        return _cache_js__WEBPACK_IMPORTED_MODULE_2__["get"](this, key, config.get);
      },
      set: config.set && function set(newValue) {
        _cache_js__WEBPACK_IMPORTED_MODULE_2__["set"](this, key, config.set, newValue);
      },
      enumerable: true,
      configurable: "development" !== "production"
    });

    if (config.observe) {
      Hybrid.callbacks.unshift(function (host) {
        return _cache_js__WEBPACK_IMPORTED_MODULE_2__["observe"](host, key, config.get, config.observe);
      });
    }

    if (config.connect) {
      Hybrid.callbacks.push(function (host) {
        return config.connect(host, key, function () {
          _cache_js__WEBPACK_IMPORTED_MODULE_2__["invalidate"](host, key);
        });
      });
    }
  });
}

var update;
/* istanbul ignore else */

if (true) {
  var walkInShadow = function walkInShadow(node, fn) {
    fn(node);
    Array.from(node.children).forEach(function (el) {
      return walkInShadow(el, fn);
    });

    if (node.shadowRoot) {
      Array.from(node.shadowRoot.children).forEach(function (el) {
        return walkInShadow(el, fn);
      });
    }
  };

  var updateQueue = new Map();

  update = function update(Hybrid, lastHybrids) {
    if (!updateQueue.size) {
      _utils_js__WEBPACK_IMPORTED_MODULE_3__["deferred"].then(function () {
        walkInShadow(document.body, function (node) {
          if (updateQueue.has(node.constructor)) {
            var hybrids = updateQueue.get(node.constructor);
            node.disconnectedCallback();
            Object.keys(node.constructor.hybrids).forEach(function (key) {
              _cache_js__WEBPACK_IMPORTED_MODULE_2__["invalidate"](node, key, node.constructor.hybrids[key] !== hybrids[key]);
            });
            node.connectedCallback();
          }
        });
        updateQueue.clear();
      });
    }

    updateQueue.set(Hybrid, lastHybrids);
  };
}

var disconnects = new WeakMap();

function defineElement(tagName, hybridsOrConstructor) {
  var type = _typeof(hybridsOrConstructor);

  if (type !== "object" && type !== "function") {
    throw TypeError("Second argument must be an object or a function: ".concat(type));
  }

  var CustomElement = window.customElements.get(tagName);

  if (type === "function") {
    if (CustomElement !== hybridsOrConstructor) {
      return window.customElements.define(tagName, hybridsOrConstructor);
    }

    return CustomElement;
  }

  if (CustomElement) {
    if (CustomElement.hybrids === hybridsOrConstructor) {
      return CustomElement;
    }

    if ( true && CustomElement.hybrids) {
      Object.keys(CustomElement.hybrids).forEach(function (key) {
        delete CustomElement.prototype[key];
      });
      var lastHybrids = CustomElement.hybrids;
      compile(CustomElement, hybridsOrConstructor);
      update(CustomElement, lastHybrids);
      return CustomElement;
    }

    throw Error("Element '".concat(tagName, "' already defined"));
  }

  var Hybrid = /*#__PURE__*/function (_HTMLElement) {
    _inherits(Hybrid, _HTMLElement);

    function Hybrid() {
      _classCallCheck(this, Hybrid);

      return _possibleConstructorReturn(this, _getPrototypeOf(Hybrid).apply(this, arguments));
    }

    _createClass(Hybrid, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var callbacks = this.constructor.callbacks;
        var list = [];

        for (var index = 0; index < callbacks.length; index += 1) {
          var cb = callbacks[index](this);
          if (cb) list.push(cb);
        }

        disconnects.set(this, list);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var list = disconnects.get(this);

        for (var index = 0; index < list.length; index += 1) {
          list[index]();
        }
      }
    }], [{
      key: "name",
      get: function get() {
        return tagName;
      }
    }]);

    return Hybrid;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  compile(Hybrid, hybridsOrConstructor);
  customElements.define(tagName, Hybrid);
  return Hybrid;
}

function defineMap(elements) {
  return Object.keys(elements).reduce(function (acc, key) {
    var tagName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pascalToDash"])(key);
    acc[key] = defineElement(tagName, elements[key]);
    return acc;
  }, {});
}

function define() {
  if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) === "object") {
    return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
  }

  return defineElement.apply(void 0, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsInBhc2NhbFRvRGFzaCIsImRlZmVycmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRlZmF1bHRNZXRob2QiLCJob3N0IiwidmFsdWUiLCJjb21waWxlIiwiSHlicmlkIiwiZGVzY3JpcHRvcnMiLCJoeWJyaWRzIiwiY2FsbGJhY2tzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJkZXNjIiwidHlwZSIsImNvbmZpZyIsImdldCIsIkFycmF5IiwiaXNBcnJheSIsInNldCIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJvYnNlcnZlIiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJuZXdWYWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ1bnNoaWZ0IiwicHVzaCIsImludmFsaWRhdGUiLCJ1cGRhdGUiLCJ3YWxrSW5TaGFkb3ciLCJub2RlIiwiZm4iLCJmcm9tIiwiY2hpbGRyZW4iLCJlbCIsInNoYWRvd1Jvb3QiLCJ1cGRhdGVRdWV1ZSIsIk1hcCIsImxhc3RIeWJyaWRzIiwic2l6ZSIsInRoZW4iLCJkb2N1bWVudCIsImJvZHkiLCJoYXMiLCJjb25zdHJ1Y3RvciIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjbGVhciIsImRpc2Nvbm5lY3RzIiwiV2Vha01hcCIsImRlZmluZUVsZW1lbnQiLCJ0YWdOYW1lIiwiaHlicmlkc09yQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJDdXN0b21FbGVtZW50Iiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJFcnJvciIsImxpc3QiLCJpbmRleCIsImxlbmd0aCIsImNiIiwiSFRNTEVsZW1lbnQiLCJkZWZpbmVNYXAiLCJlbGVtZW50cyIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QStCakQsTUFBL0I7QUFFQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBUzhELFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQzNCLFNBQU8zRCxNQUFNLENBQUNDLElBQVAsQ0FBWTBELFFBQVosRUFBc0JDLE1BQXRCLENBQTZCLFVBQUNDLEdBQUQsRUFBTTFELEdBQU4sRUFBYztBQUNoRCxRQUFNMEMsT0FBTyxHQUFHM0QsWUFBWSxDQUFDaUIsR0FBRCxDQUE1QjtBQUNBMEQsSUFBQUEsR0FBRyxDQUFDMUQsR0FBRCxDQUFILEdBQVd5QyxhQUFhLENBQUNDLE9BQUQsRUFBVWMsUUFBUSxDQUFDeEQsR0FBRCxDQUFsQixDQUF4QjtBQUVBLFdBQU8wRCxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1EOztBQUVELGVBQWUsU0FBU1YsTUFBVCxHQUF5QjtBQUN0QyxNQUFJLDhEQUFtQixRQUF2QixFQUFpQztBQUMvQixXQUFPTyxTQUFTLGtEQUFoQjtBQUNEOztBQUVELFNBQU9kLGFBQWEsTUFBYixtQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb3BlcnR5IGZyb20gXCIuL3Byb3BlcnR5LmpzXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5pbXBvcnQgKiBhcyBjYWNoZSBmcm9tIFwiLi9jYWNoZS5qc1wiO1xuaW1wb3J0IHsgcGFzY2FsVG9EYXNoLCBkZWZlcnJlZCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG50cnkgeyBwcm9jZXNzLmVudi5OT0RFX0VOViB9IGNhdGNoKGUpIHsgdmFyIHByb2Nlc3MgPSB7IGVudjogeyBOT0RFX0VOVjogJ3Byb2R1Y3Rpb24nIH0gfTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IGRlZmF1bHRNZXRob2QgPSAoaG9zdCwgdmFsdWUpID0+IHZhbHVlO1xuXG5mdW5jdGlvbiBjb21waWxlKEh5YnJpZCwgZGVzY3JpcHRvcnMpIHtcbiAgSHlicmlkLmh5YnJpZHMgPSBkZXNjcmlwdG9ycztcbiAgSHlicmlkLmNhbGxiYWNrcyA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGRlc2NyaXB0b3JzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBkZXNjO1xuXG4gICAgbGV0IGNvbmZpZztcblxuICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZyA9IGtleSA9PT0gXCJyZW5kZXJcIiA/IHJlbmRlcihkZXNjKSA6IHsgZ2V0OiBkZXNjIH07XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSBcIm9iamVjdFwiIHx8IGRlc2MgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShkZXNjKSkge1xuICAgICAgY29uZmlnID0gcHJvcGVydHkoZGVzYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgZ2V0OiBkZXNjLmdldCB8fCBkZWZhdWx0TWV0aG9kLFxuICAgICAgICBzZXQ6IGRlc2Muc2V0IHx8ICghZGVzYy5nZXQgJiYgZGVmYXVsdE1ldGhvZCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0OiBkZXNjLmNvbm5lY3QsXG4gICAgICAgIG9ic2VydmU6IGRlc2Mub2JzZXJ2ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEh5YnJpZC5wcm90b3R5cGUsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQodGhpcywga2V5LCBjb25maWcuZ2V0KTtcbiAgICAgIH0sXG4gICAgICBzZXQ6XG4gICAgICAgIGNvbmZpZy5zZXQgJiZcbiAgICAgICAgZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgY2FjaGUuc2V0KHRoaXMsIGtleSwgY29uZmlnLnNldCwgbmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiLFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vYnNlcnZlKSB7XG4gICAgICBIeWJyaWQuY2FsbGJhY2tzLnVuc2hpZnQoaG9zdCA9PlxuICAgICAgICBjYWNoZS5vYnNlcnZlKGhvc3QsIGtleSwgY29uZmlnLmdldCwgY29uZmlnLm9ic2VydmUpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIEh5YnJpZC5jYWxsYmFja3MucHVzaChob3N0ID0+XG4gICAgICAgIGNvbmZpZy5jb25uZWN0KGhvc3QsIGtleSwgKCkgPT4ge1xuICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoaG9zdCwga2V5KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCB1cGRhdGU7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBjb25zdCB3YWxrSW5TaGFkb3cgPSAobm9kZSwgZm4pID0+IHtcbiAgICBmbihub2RlKTtcblxuICAgIEFycmF5LmZyb20obm9kZS5jaGlsZHJlbikuZm9yRWFjaChlbCA9PiB3YWxrSW5TaGFkb3coZWwsIGZuKSk7XG5cbiAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICBBcnJheS5mcm9tKG5vZGUuc2hhZG93Um9vdC5jaGlsZHJlbikuZm9yRWFjaChlbCA9PiB3YWxrSW5TaGFkb3coZWwsIGZuKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVF1ZXVlID0gbmV3IE1hcCgpO1xuICB1cGRhdGUgPSAoSHlicmlkLCBsYXN0SHlicmlkcykgPT4ge1xuICAgIGlmICghdXBkYXRlUXVldWUuc2l6ZSkge1xuICAgICAgZGVmZXJyZWQudGhlbigoKSA9PiB7XG4gICAgICAgIHdhbGtJblNoYWRvdyhkb2N1bWVudC5ib2R5LCBub2RlID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlUXVldWUuaGFzKG5vZGUuY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdCBoeWJyaWRzID0gdXBkYXRlUXVldWUuZ2V0KG5vZGUuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgbm9kZS5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhub2RlLmNvbnN0cnVjdG9yLmh5YnJpZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBub2RlLmNvbnN0cnVjdG9yLmh5YnJpZHNba2V5XSAhPT0gaHlicmlkc1trZXldLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5vZGUuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVRdWV1ZS5jbGVhcigpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZVF1ZXVlLnNldChIeWJyaWQsIGxhc3RIeWJyaWRzKTtcbiAgfTtcbn1cblxuY29uc3QgZGlzY29ubmVjdHMgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBkZWZpbmVFbGVtZW50KHRhZ05hbWUsIGh5YnJpZHNPckNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgaHlicmlkc09yQ29uc3RydWN0b3I7XG4gIGlmICh0eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IFR5cGVFcnJvcihgU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb246ICR7dHlwZX1gKTtcbiAgfVxuXG4gIGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpO1xuXG4gIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBpZiAoQ3VzdG9tRWxlbWVudCAhPT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gIH1cblxuICBpZiAoQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmIChDdXN0b21FbGVtZW50Lmh5YnJpZHMgPT09IGh5YnJpZHNPckNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBDdXN0b21FbGVtZW50Lmh5YnJpZHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKEN1c3RvbUVsZW1lbnQuaHlicmlkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBkZWxldGUgQ3VzdG9tRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsYXN0SHlicmlkcyA9IEN1c3RvbUVsZW1lbnQuaHlicmlkcztcblxuICAgICAgY29tcGlsZShDdXN0b21FbGVtZW50LCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICB1cGRhdGUoQ3VzdG9tRWxlbWVudCwgbGFzdEh5YnJpZHMpO1xuXG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aHJvdyBFcnJvcihgRWxlbWVudCAnJHt0YWdOYW1lfScgYWxyZWFkeSBkZWZpbmVkYCk7XG4gIH1cblxuICBjbGFzcyBIeWJyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRhZ05hbWU7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCB7IGNhbGxiYWNrcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhbGxiYWNrcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2IgPSBjYWxsYmFja3NbaW5kZXhdKHRoaXMpO1xuICAgICAgICBpZiAoY2IpIGxpc3QucHVzaChjYik7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RzLnNldCh0aGlzLCBsaXN0KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBkaXNjb25uZWN0cy5nZXQodGhpcyk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlzdC5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgbGlzdFtpbmRleF0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21waWxlKEh5YnJpZCwgaHlicmlkc09yQ29uc3RydWN0b3IpO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSHlicmlkKTtcblxuICByZXR1cm4gSHlicmlkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVNYXAoZWxlbWVudHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHBhc2NhbFRvRGFzaChrZXkpO1xuICAgIGFjY1trZXldID0gZGVmaW5lRWxlbWVudCh0YWdOYW1lLCBlbGVtZW50c1trZXldKTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lKC4uLmFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGRlZmluZU1hcChhcmdzWzBdKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVFbGVtZW50KC4uLmFyZ3MpO1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/hybrids/esm/emitter.js ***!
  \*********************************************/
/*! exports provided: dispatch, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
var callbacks = new WeakMap();
var queue = new Set();

function execute() {
  try {
    queue.forEach(function (target) {
      try {
        callbacks.get(target)();
        queue.delete(target);
      } catch (e) {
        queue.delete(target);
        throw e;
      }
    });
  } catch (e) {
    if (queue.size) execute();
    throw e;
  }
}

function dispatch(target) {
  if (!queue.size) {
    requestAnimationFrame(execute);
  }

  queue.add(target);
}
function subscribe(target, cb) {
  callbacks.set(target, cb);
  dispatch(target);
  return function unsubscribe() {
    queue.delete(target);
    callbacks.delete(target);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbWl0dGVyLmpzIl0sIm5hbWVzIjpbImNhbGxiYWNrcyIsIldlYWtNYXAiLCJxdWV1ZSIsIlNldCIsImV4ZWN1dGUiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZ2V0IiwiZGVsZXRlIiwiZSIsInNpemUiLCJkaXNwYXRjaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZCIsInN1YnNjcmliZSIsImNiIiwic2V0IiwidW5zdWJzY3JpYmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxPQUFKLEVBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFBZDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLE1BQUk7QUFDRkYsSUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFVBQUk7QUFDRk4sUUFBQUEsU0FBUyxDQUFDTyxHQUFWLENBQWNELE1BQWQ7QUFDQUosUUFBQUEsS0FBSyxDQUFDTSxNQUFOLENBQWFGLE1BQWI7QUFDRCxPQUhELENBR0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZQLFFBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0EsY0FBTUcsQ0FBTjtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBVkQsQ0FVRSxPQUFPQSxDQUFQLEVBQVU7QUFDVixRQUFJUCxLQUFLLENBQUNRLElBQVYsRUFBZ0JOLE9BQU87QUFDdkIsVUFBTUssQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsT0FBTyxTQUFTRSxRQUFULENBQWtCTCxNQUFsQixFQUEwQjtBQUMvQixNQUFJLENBQUNKLEtBQUssQ0FBQ1EsSUFBWCxFQUFpQjtBQUNmRSxJQUFBQSxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUFyQjtBQUNEOztBQUNERixFQUFBQSxLQUFLLENBQUNXLEdBQU4sQ0FBVVAsTUFBVjtBQUNEO0FBRUQsT0FBTyxTQUFTUSxTQUFULENBQW1CUixNQUFuQixFQUEyQlMsRUFBM0IsRUFBK0I7QUFDcENmLEVBQUFBLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBY1YsTUFBZCxFQUFzQlMsRUFBdEI7QUFDQUosRUFBQUEsUUFBUSxDQUFDTCxNQUFELENBQVI7QUFFQSxTQUFPLFNBQVNXLFdBQVQsR0FBdUI7QUFDNUJmLElBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0FOLElBQUFBLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQkYsTUFBakI7QUFDRCxHQUhEO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcXVldWUgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gIHRyeSB7XG4gICAgcXVldWUuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2tzLmdldCh0YXJnZXQpKCk7XG4gICAgICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBxdWV1ZS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChxdWV1ZS5zaXplKSBleGVjdXRlKCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0KSB7XG4gIGlmICghcXVldWUuc2l6ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgfVxuICBxdWV1ZS5hZGQodGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSh0YXJnZXQsIGNiKSB7XG4gIGNhbGxiYWNrcy5zZXQodGFyZ2V0LCBjYik7XG4gIGRpc3BhdGNoKHRhcmdldCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgIGNhbGxiYWNrcy5kZWxldGUodGFyZ2V0KTtcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/index.js ***!
  \*******************************************/
/*! exports provided: define, property, parent, children, render, dispatch, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/hybrids/esm/define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "define", function() { return _define_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/hybrids/esm/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent.js */ "./node_modules/hybrids/esm/parent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return _parent_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _children_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children.js */ "./node_modules/hybrids/esm/children.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "children", function() { return _children_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.js */ "./node_modules/hybrids/esm/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_5__["dispatch"]; });

/* harmony import */ var _template_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/index.js */ "./node_modules/hybrids/esm/template/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _template_index_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _template_index_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });








//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZGVmaW5lIiwicHJvcGVydHkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImRpc3BhdGNoIiwiaHRtbCIsInN2ZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBTyxJQUFJQyxNQUFwQixRQUFrQyxhQUFsQztBQUNBLFNBQVNELE9BQU8sSUFBSUUsUUFBcEIsUUFBb0MsZUFBcEM7QUFDQSxTQUFTRixPQUFPLElBQUlHLE1BQXBCLFFBQWtDLGFBQWxDO0FBQ0EsU0FBU0gsT0FBTyxJQUFJSSxRQUFwQixRQUFvQyxlQUFwQztBQUNBLFNBQVNKLE9BQU8sSUFBSUssTUFBcEIsUUFBa0MsYUFBbEM7QUFFQSxTQUFTQyxRQUFULFFBQXlCLFlBQXpCO0FBRUEsU0FBU0MsSUFBVCxFQUFlQyxHQUFmLFFBQTBCLHFCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmaW5lIH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3BlcnR5IH0gZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyZW50IH0gZnJvbSBcIi4vcGFyZW50LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoaWxkcmVuIH0gZnJvbSBcIi4vY2hpbGRyZW4uanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmV4cG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuZXhwb3J0IHsgaHRtbCwgc3ZnIH0gZnJvbSBcIi4vdGVtcGxhdGUvaW5kZXguanNcIjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/parent.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/parent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parent; });
function walk(node, fn) {
  var parentElement = node.parentElement || node.parentNode.host;

  while (parentElement) {
    var hybrids = parentElement.constructor.hybrids;

    if (hybrids && fn(hybrids)) {
      return parentElement;
    }

    parentElement = parentElement.parentElement || parentElement.parentNode && parentElement.parentNode.host;
  }

  return parentElement || null;
}

function parent(hybridsOrFn) {
  var fn = typeof hybridsOrFn === "function" ? hybridsOrFn : function (hybrids) {
    return hybrids === hybridsOrFn;
  };
  return {
    get: function get(host) {
      return walk(host, fn);
    },
    connect: function connect(host, key, invalidate) {
      var target = host[key];

      if (target) {
        return invalidate;
      }

      return false;
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJlbnQuanMiXSwibmFtZXMiOlsid2FsayIsIm5vZGUiLCJmbiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaG9zdCIsImh5YnJpZHMiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiY29ubmVjdCIsImtleSIsImludmFsaWRhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDdEIsTUFBSUMsYUFBYSxHQUFHRixJQUFJLENBQUNFLGFBQUwsSUFBc0JGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsSUFBMUQ7O0FBRUEsU0FBT0YsYUFBUCxFQUFzQjtBQUNwQixRQUFNRyxPQUFPLEdBQUdILGFBQWEsQ0FBQ0ksV0FBZCxDQUEwQkQsT0FBMUM7O0FBRUEsUUFBSUEsT0FBTyxJQUFJSixFQUFFLENBQUNJLE9BQUQsQ0FBakIsRUFBNEI7QUFDMUIsYUFBT0gsYUFBUDtBQUNEOztBQUVEQSxJQUFBQSxhQUFhLEdBQ1hBLGFBQWEsQ0FBQ0EsYUFBZCxJQUNDQSxhQUFhLENBQUNDLFVBQWQsSUFBNEJELGFBQWEsQ0FBQ0MsVUFBZCxDQUF5QkMsSUFGeEQ7QUFHRDs7QUFFRCxTQUFPRixhQUFhLElBQUksSUFBeEI7QUFDRDs7QUFFRCxlQUFlLFNBQVNLLE1BQVQsQ0FBZ0JDLFdBQWhCLEVBQTZCO0FBQzFDLE1BQU1QLEVBQUUsR0FDTixPQUFPTyxXQUFQLEtBQXVCLFVBQXZCLEdBQ0lBLFdBREosR0FFSSxVQUFBSCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLRyxXQUFoQjtBQUFBLEdBSGI7QUFJQSxTQUFPO0FBQ0xDLElBQUFBLEdBQUcsRUFBRSxhQUFBTCxJQUFJO0FBQUEsYUFBSUwsSUFBSSxDQUFDSyxJQUFELEVBQU9ILEVBQVAsQ0FBUjtBQUFBLEtBREo7QUFFTFMsSUFBQUEsT0FGSyxtQkFFR04sSUFGSCxFQUVTTyxHQUZULEVBRWNDLFVBRmQsRUFFMEI7QUFDN0IsVUFBTUMsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEdBQUQsQ0FBbkI7O0FBQ0EsVUFBSUUsTUFBSixFQUFZO0FBQ1YsZUFBT0QsVUFBUDtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBUkksR0FBUDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2Fsayhub2RlLCBmbikge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudCB8fCBub2RlLnBhcmVudE5vZGUuaG9zdDtcblxuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGh5YnJpZHMgPSBwYXJlbnRFbGVtZW50LmNvbnN0cnVjdG9yLmh5YnJpZHM7XG5cbiAgICBpZiAoaHlicmlkcyAmJiBmbihoeWJyaWRzKSkge1xuICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50RWxlbWVudCA9XG4gICAgICBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgfHxcbiAgICAgIChwYXJlbnRFbGVtZW50LnBhcmVudE5vZGUgJiYgcGFyZW50RWxlbWVudC5wYXJlbnROb2RlLmhvc3QpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyZW50KGh5YnJpZHNPckZuKSB7XG4gIGNvbnN0IGZuID1cbiAgICB0eXBlb2YgaHlicmlkc09yRm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBoeWJyaWRzT3JGblxuICAgICAgOiBoeWJyaWRzID0+IGh5YnJpZHMgPT09IGh5YnJpZHNPckZuO1xuICByZXR1cm4ge1xuICAgIGdldDogaG9zdCA9PiB3YWxrKGhvc3QsIGZuKSxcbiAgICBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gaG9zdFtrZXldO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/property.js":
/*!**********************************************!*\
  !*** ./node_modules/hybrids/esm/property.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return property; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var defaultTransform = function defaultTransform(v) {
  return v;
};

var objectTransform = function objectTransform(value) {
  if (_typeof(value) !== "object") {
    throw TypeError("Assigned value must be an object: ".concat(_typeof(value)));
  }

  return value && Object.freeze(value);
};

function property(value, connect) {
  var type = _typeof(value);

  var transform = defaultTransform;

  switch (type) {
    case "string":
      transform = String;
      break;

    case "number":
      transform = Number;
      break;

    case "boolean":
      transform = Boolean;
      break;

    case "function":
      transform = value;
      value = transform();
      break;

    case "object":
      if (value) Object.freeze(value);
      transform = objectTransform;
      break;

    default:
      break;
  }

  return {
    get: function get(host) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
      return val;
    },
    set: function set(host, val, oldValue) {
      return transform(val, oldValue);
    },
    connect: type !== "object" && type !== "undefined" ? function (host, key, invalidate) {
      if (host[key] === value) {
        var attrName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(key);

        if (host.hasAttribute(attrName)) {
          var attrValue = host.getAttribute(attrName);
          host[key] = attrValue === "" && transform === Boolean ? true : attrValue;
        }
      }

      return connect && connect(host, key, invalidate);
    } : connect
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsImRlZmF1bHRUcmFuc2Zvcm0iLCJ2Iiwib2JqZWN0VHJhbnNmb3JtIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJwcm9wZXJ0eSIsImNvbm5lY3QiLCJ0eXBlIiwidHJhbnNmb3JtIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImdldCIsImhvc3QiLCJ2YWwiLCJzZXQiLCJvbGRWYWx1ZSIsImtleSIsImludmFsaWRhdGUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULFFBQTRCLFlBQTVCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTUMsU0FBUyxxREFBNkNELEtBQTdDLEdBQWY7QUFDRDs7QUFDRCxTQUFPQSxLQUFLLElBQUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxlQUFlLFNBQVNJLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCSyxPQUF6QixFQUFrQztBQUMvQyxNQUFNQyxJQUFJLFdBQVVOLEtBQVYsQ0FBVjs7QUFDQSxNQUFJTyxTQUFTLEdBQUdWLGdCQUFoQjs7QUFFQSxVQUFRUyxJQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLE1BQUFBLFNBQVMsR0FBR0MsTUFBWjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFRCxNQUFBQSxTQUFTLEdBQUdFLE1BQVo7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRUYsTUFBQUEsU0FBUyxHQUFHRyxPQUFaO0FBQ0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VILE1BQUFBLFNBQVMsR0FBR1AsS0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUdPLFNBQVMsRUFBakI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJUCxLQUFKLEVBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkO0FBQ1hPLE1BQUFBLFNBQVMsR0FBR1IsZUFBWjtBQUNBOztBQUNGO0FBQ0U7QUFuQko7O0FBc0JBLFNBQU87QUFDTFksSUFBQUEsR0FBRyxFQUFFLGFBQUNDLElBQUQ7QUFBQSxVQUFPQyxHQUFQLHVFQUFhYixLQUFiO0FBQUEsYUFBdUJhLEdBQXZCO0FBQUEsS0FEQTtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsYUFBQ0YsSUFBRCxFQUFPQyxHQUFQLEVBQVlFLFFBQVo7QUFBQSxhQUF5QlIsU0FBUyxDQUFDTSxHQUFELEVBQU1FLFFBQU4sQ0FBbEM7QUFBQSxLQUZBO0FBR0xWLElBQUFBLE9BQU8sRUFDTEMsSUFBSSxLQUFLLFFBQVQsSUFBcUJBLElBQUksS0FBSyxXQUE5QixHQUNJLFVBQUNNLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLEVBQTJCO0FBQ3pCLFVBQUlMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEtBQWNoQixLQUFsQixFQUF5QjtBQUN2QixZQUFNa0IsUUFBUSxHQUFHdEIsV0FBVyxDQUFDb0IsR0FBRCxDQUE1Qjs7QUFFQSxZQUFJSixJQUFJLENBQUNPLFlBQUwsQ0FBa0JELFFBQWxCLENBQUosRUFBaUM7QUFDL0IsY0FBTUUsU0FBUyxHQUFHUixJQUFJLENBQUNTLFlBQUwsQ0FBa0JILFFBQWxCLENBQWxCO0FBQ0FOLFVBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQ0VJLFNBQVMsS0FBSyxFQUFkLElBQW9CYixTQUFTLEtBQUtHLE9BQWxDLEdBQTRDLElBQTVDLEdBQW1EVSxTQURyRDtBQUVEO0FBQ0Y7O0FBRUQsYUFBT2YsT0FBTyxJQUFJQSxPQUFPLENBQUNPLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLENBQXpCO0FBQ0QsS0FiTCxHQWNJWjtBQWxCRCxHQUFQO0FBb0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gdiA9PiB2O1xuXG5jb25zdCBvYmplY3RUcmFuc2Zvcm0gPSB2YWx1ZSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYEFzc2lnbmVkIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0OiAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgJiYgT2JqZWN0LmZyZWV6ZSh2YWx1ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eSh2YWx1ZSwgY29ubmVjdCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZXQgdHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBOdW1iZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgdHJhbnNmb3JtID0gQm9vbGVhbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgdHJhbnNmb3JtID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYgKHZhbHVlKSBPYmplY3QuZnJlZXplKHZhbHVlKTtcbiAgICAgIHRyYW5zZm9ybSA9IG9iamVjdFRyYW5zZm9ybTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCwgdmFsID0gdmFsdWUpID0+IHZhbCxcbiAgICBzZXQ6IChob3N0LCB2YWwsIG9sZFZhbHVlKSA9PiB0cmFuc2Zvcm0odmFsLCBvbGRWYWx1ZSksXG4gICAgY29ubmVjdDpcbiAgICAgIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IChob3N0LCBrZXksIGludmFsaWRhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChob3N0W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0Rhc2goa2V5KTtcblxuICAgICAgICAgICAgICBpZiAoaG9zdC5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIGhvc3Rba2V5XSA9XG4gICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IFwiXCIgJiYgdHJhbnNmb3JtID09PSBCb29sZWFuID8gdHJ1ZSA6IGF0dHJWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdCAmJiBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IGNvbm5lY3QsXG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/render.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/render.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function render(fn) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof fn !== "function") {
    throw TypeError("The first argument must be a function: ".concat(_typeof(fn)));
  }

  var options = _objectSpread({
    shadowRoot: true
  }, customOptions);

  var shadowRootInit = {
    mode: "open"
  };

  if (_typeof(options.shadowRoot) === "object") {
    Object.assign(shadowRootInit, options.shadowRoot);
  }

  return {
    get: function get(host) {
      var update = fn(host);
      var target = host;

      if (options.shadowRoot) {
        if (!host.shadowRoot) host.attachShadow(shadowRootInit);
        target = host.shadowRoot;
      }

      return function flush() {
        update(host, target);
        return target;
      };
    },
    observe: function observe(host, flush) {
      flush();
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZm4iLCJjdXN0b21PcHRpb25zIiwiVHlwZUVycm9yIiwib3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJzaGFkb3dSb290SW5pdCIsIm1vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJob3N0IiwidXBkYXRlIiwidGFyZ2V0IiwiYXR0YWNoU2hhZG93IiwiZmx1c2giLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGVBQWUsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBd0M7QUFBQSxNQUFwQkMsYUFBb0IsdUVBQUosRUFBSTs7QUFDckQsTUFBSSxPQUFPRCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsVUFBTUUsU0FBUywwREFBa0RGLEVBQWxELEdBQWY7QUFDRDs7QUFFRCxNQUFNRyxPQUFPO0FBQUtDLElBQUFBLFVBQVUsRUFBRTtBQUFqQixLQUEwQkgsYUFBMUIsQ0FBYjs7QUFDQSxNQUFNSSxjQUFjLEdBQUc7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkI7O0FBRUEsTUFBSSxRQUFPSCxPQUFPLENBQUNDLFVBQWYsTUFBOEIsUUFBbEMsRUFBNEM7QUFDMUNHLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCRixPQUFPLENBQUNDLFVBQXRDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMSyxJQUFBQSxHQURLLGVBQ0RDLElBREMsRUFDSztBQUNSLFVBQU1DLE1BQU0sR0FBR1gsRUFBRSxDQUFDVSxJQUFELENBQWpCO0FBQ0EsVUFBSUUsTUFBTSxHQUFHRixJQUFiOztBQUVBLFVBQUlQLE9BQU8sQ0FBQ0MsVUFBWixFQUF3QjtBQUN0QixZQUFJLENBQUNNLElBQUksQ0FBQ04sVUFBVixFQUFzQk0sSUFBSSxDQUFDRyxZQUFMLENBQWtCUixjQUFsQjtBQUN0Qk8sUUFBQUEsTUFBTSxHQUFHRixJQUFJLENBQUNOLFVBQWQ7QUFDRDs7QUFFRCxhQUFPLFNBQVNVLEtBQVQsR0FBaUI7QUFDdEJILFFBQUFBLE1BQU0sQ0FBQ0QsSUFBRCxFQUFPRSxNQUFQLENBQU47QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FIRDtBQUlELEtBZEk7QUFlTEcsSUFBQUEsT0FmSyxtQkFlR0wsSUFmSCxFQWVTSSxLQWZULEVBZWdCO0FBQ25CQSxNQUFBQSxLQUFLO0FBQ047QUFqQkksR0FBUDtBQW1CRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihmbiwgY3VzdG9tT3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0geyBzaGFkb3dSb290OiB0cnVlLCAuLi5jdXN0b21PcHRpb25zIH07XG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0geyBtb2RlOiBcIm9wZW5cIiB9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5zaGFkb3dSb290ID09PSBcIm9iamVjdFwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzaGFkb3dSb290SW5pdCwgb3B0aW9ucy5zaGFkb3dSb290KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0KGhvc3QpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGZuKGhvc3QpO1xuICAgICAgbGV0IHRhcmdldCA9IGhvc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgaWYgKCFob3N0LnNoYWRvd1Jvb3QpIGhvc3QuYXR0YWNoU2hhZG93KHNoYWRvd1Jvb3RJbml0KTtcbiAgICAgICAgdGFyZ2V0ID0gaG9zdC5zaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIHVwZGF0ZShob3N0LCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9ic2VydmUoaG9zdCwgZmx1c2gpIHtcbiAgICAgIGZsdXNoKCk7XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/core.js":
/*!***************************************************!*\
  !*** ./node_modules/hybrids/esm/template/core.js ***!
  \***************************************************/
/*! exports provided: getPlaceholder, createInternalWalker, compileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceholder", function() { return getPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInternalWalker", function() { return createInternalWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return compileTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/template/utils.js");
/* harmony import */ var _resolvers_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/value.js */ "./node_modules/hybrids/esm/template/resolvers/value.js");
/* harmony import */ var _resolvers_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/property.js */ "./node_modules/hybrids/esm/template/resolvers/property.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/* istanbul ignore next */

try {
  "development";
} catch (e) {
  var process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var TIMESTAMP = Date.now();
var getPlaceholder = function getPlaceholder() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return "{{h-".concat(TIMESTAMP, "-").concat(id, "}}");
};
var PLACEHOLDER_REGEXP_TEXT = getPlaceholder("(\\d+)");
var PLACEHOLDER_REGEXP_EQUAL = new RegExp("^".concat(PLACEHOLDER_REGEXP_TEXT, "$"));
var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, "g");
var ATTR_PREFIX = "--".concat(TIMESTAMP, "--");
var ATTR_REGEXP = new RegExp(ATTR_PREFIX, "g");
var preparedTemplates = new WeakMap();
/* istanbul ignore next */

function applyShadyCSS(template, tagName) {
  if (!tagName) return template;
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["shadyCSS"])(function (shady) {
    var map = preparedTemplates.get(template);

    if (!map) {
      map = new Map();
      preparedTemplates.set(template, map);
    }

    var clone = map.get(tagName);

    if (!clone) {
      clone = document.createElement("template");
      clone.content.appendChild(template.content.cloneNode(true));
      map.set(tagName, clone);
      var styles = clone.content.querySelectorAll("style");
      Array.from(styles).forEach(function (style) {
        var count = style.childNodes.length + 1;

        for (var i = 0; i < count; i += 1) {
          style.parentNode.insertBefore(document.createTextNode(getPlaceholder()), style);
        }
      });
      shady.prepareTemplate(clone, tagName.toLowerCase());
    }

    return clone;
  }, template);
}

function createSignature(parts, styles) {
  var signature = parts.reduce(function (acc, part, index) {
    if (index === 0) {
      return part;
    }

    if (parts.slice(index).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)) {
      return "".concat(acc, "<!--").concat(getPlaceholder(index - 1), "-->").concat(part);
    }

    return acc + getPlaceholder(index - 1) + part;
  }, "");

  if (styles) {
    signature += "<style>\n".concat(styles.join("\n/*------*/\n"), "\n</style>");
  }
  /* istanbul ignore if */


  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
    return signature.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g, function (match) {
      return "".concat(ATTR_PREFIX).concat(match);
    });
  }

  return signature;
}

function getPropertyName(string) {
  return string.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}

function replaceComments(fragment) {
  var iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_COMMENT, null, false);
  var node; // eslint-disable-next-line no-cond-assign

  while (node = iterator.nextNode()) {
    if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
      node.parentNode.insertBefore(document.createTextNode(node.textContent), node);
      node.parentNode.removeChild(node);
    }
  }
}

function createInternalWalker(context) {
  var node;
  return {
    get currentNode() {
      return node;
    },

    nextNode: function nextNode() {
      if (node === undefined) {
        node = context.childNodes[0];
      } else if (node.childNodes.length) {
        node = node.childNodes[0];
      } else if (node.nextSibling) {
        node = node.nextSibling;
      } else {
        var parentNode = node.parentNode;
        node = parentNode.nextSibling;

        while (!node && parentNode !== context) {
          parentNode = parentNode.parentNode;
          node = parentNode.nextSibling;
        }
      }

      return !!node;
    }
  };
}

function createExternalWalker(context) {
  return document.createTreeWalker(context, // eslint-disable-next-line no-bitwise
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
}
/* istanbul ignore next */


var createWalker = _typeof(window.ShadyDOM) === "object" && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
var container = document.createElement("div");
function compileTemplate(rawParts, isSVG, styles) {
  var template = document.createElement("template");
  var parts = [];
  var signature = createSignature(rawParts, styles);
  if (isSVG) signature = "<svg>".concat(signature, "</svg>");
  /* istanbul ignore if */

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
    template.innerHTML = signature;
  } else {
    container.innerHTML = "<template>".concat(signature, "</template>");
    template.content.appendChild(container.children[0].content);
  }

  if (isSVG) {
    var svgRoot = template.content.firstChild;
    template.content.removeChild(svgRoot);
    Array.from(svgRoot.childNodes).forEach(function (node) {
      return template.content.appendChild(node);
    });
  }

  replaceComments(template.content);
  var compileWalker = createWalker(template.content);
  var compileIndex = 0;

  var _loop = function _loop() {
    var node = compileWalker.currentNode;

    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.textContent;

      if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
        var results = text.match(PLACEHOLDER_REGEXP_ALL);

        if (results) {
          var currentNode = node;
          results.reduce(function (acc, placeholder) {
            var _acc$pop$split = acc.pop().split(placeholder),
                _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                before = _acc$pop$split2[0],
                next = _acc$pop$split2[1];

            if (before) acc.push(before);
            acc.push(placeholder);
            if (next) acc.push(next);
            return acc;
          }, [text]).forEach(function (part, index) {
            if (index === 0) {
              currentNode.textContent = part;
            } else {
              currentNode = currentNode.parentNode.insertBefore(document.createTextNode(part), currentNode.nextSibling);
            }
          });
        }
      }

      var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL);

      if (equal) {
        /* istanbul ignore else */
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) node.textContent = "";
        parts[equal[1]] = [compileIndex, _resolvers_value_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
      }
    } else {
      /* istanbul ignore else */
      // eslint-disable-next-line no-lonely-if
      if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.attributes).forEach(function (attr) {
          var value = attr.value.trim();
          /* istanbul ignore next */

          var name = _utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"] ? attr.name.replace(ATTR_PREFIX, "") : attr.name;
          var equal = value.match(PLACEHOLDER_REGEXP_EQUAL);

          if (equal) {
            var propertyName = getPropertyName(rawParts[equal[1]]);
            parts[equal[1]] = [compileIndex, Object(_resolvers_property_js__WEBPACK_IMPORTED_MODULE_3__["default"])(name, propertyName, isSVG)];
            node.removeAttribute(attr.name);
          } else {
            var _results = value.match(PLACEHOLDER_REGEXP_ALL);

            if (_results) {
              var partialName = "attr__".concat(name);

              _results.forEach(function (placeholder, index) {
                var _placeholder$match = placeholder.match(PLACEHOLDER_REGEXP_EQUAL),
                    _placeholder$match2 = _slicedToArray(_placeholder$match, 2),
                    id = _placeholder$match2[1];

                parts[id] = [compileIndex, function (host, target, attrValue) {
                  var data = _utils_js__WEBPACK_IMPORTED_MODULE_1__["dataMap"].get(target, {});
                  data[partialName] = (data[partialName] || value).replace(placeholder, attrValue == null ? "" : attrValue);

                  if (_results.length === 1 || index + 1 === _results.length) {
                    target.setAttribute(name, data[partialName]);
                    data[partialName] = undefined;
                  }
                }];
              });

              attr.value = "";
              /* istanbul ignore next */

              if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"] && name !== attr.name) {
                node.removeAttribute(attr.name);
                node.setAttribute(name, "");
              }
            }
          }
        });
      }
    }

    compileIndex += 1;
  };

  while (compileWalker.nextNode()) {
    _loop();
  }

  return function updateTemplateInstance(host, target, args) {
    var data = _utils_js__WEBPACK_IMPORTED_MODULE_1__["dataMap"].get(target, {
      type: "function"
    });

    if (template !== data.template) {
      if (data.template || target.nodeType === Node.ELEMENT_NODE) Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["removeTemplate"])(target);
      data.prevArgs = null;
      var fragment = document.importNode(applyShadyCSS(template, host.tagName).content, true);
      var renderWalker = createWalker(fragment);
      var clonedParts = parts.slice(0);
      var renderIndex = 0;
      var currentPart = clonedParts.shift();
      var markers = [];
      data.template = template;
      data.markers = markers;

      while (renderWalker.nextNode()) {
        var node = renderWalker.currentNode;

        if (node.nodeType === Node.TEXT_NODE) {
          /* istanbul ignore next */
          if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
            node.textContent = "";
          } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
            node.textContent = node.textContent.replace(ATTR_REGEXP, "");
          }
        } else if ( true && node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.indexOf("-") > -1 && !customElements.get(node.tagName.toLowerCase())) {
            throw Error("Missing '".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(node), "' element definition in '").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(host), "'"));
          }
        }

        while (currentPart && currentPart[0] === renderIndex) {
          markers.push([node, currentPart[1]]);
          currentPart = clonedParts.shift();
        }

        renderIndex += 1;
      }

      if (target.nodeType === Node.TEXT_NODE) {
        data.startNode = fragment.childNodes[0];
        data.endNode = fragment.childNodes[fragment.childNodes.length - 1];
        var previousChild = target;
        var child = fragment.childNodes[0];

        while (child) {
          target.parentNode.insertBefore(child, previousChild.nextSibling);
          previousChild = child;
          child = fragment.childNodes[0];
        }
      } else {
        target.appendChild(fragment);
      }
    }

    var prevArgs = data.prevArgs;
    data.prevArgs = args;

    for (var index = 0; index < data.markers.length; index += 1) {
      var _data$markers$index = _slicedToArray(data.markers[index], 2),
          _node = _data$markers$index[0],
          marker = _data$markers$index[1];

      if (!prevArgs || prevArgs[index] !== args[index]) {
        marker(host, _node, args[index], prevArgs ? prevArgs[index] : undefined);
      }
    }

    if (target.nodeType !== Node.TEXT_NODE) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["shadyCSS"])(function (shady) {
        if (host.shadowRoot) {
          if (prevArgs) {
            shady.styleSubtree(host);
          } else {
            shady.styleElement(host);
          }
        }
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJjb21waWxlVGVtcGxhdGUiLCJyYXdQYXJ0cyIsImlzU1ZHIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJzdmdSb290IiwiZmlyc3RDaGlsZCIsImNvbXBpbGVXYWxrZXIiLCJjb21waWxlSW5kZXgiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJ0ZXh0IiwicmVzdWx0cyIsInBsYWNlaG9sZGVyIiwiYmVmb3JlIiwibmV4dCIsInB1c2giLCJlcXVhbCIsIkVMRU1FTlRfTk9ERSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwidmFsdWUiLCJ0cmltIiwibmFtZSIsInByb3BlcnR5TmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnRpYWxOYW1lIiwiaG9zdCIsInRhcmdldCIsImF0dHJWYWx1ZSIsImRhdGEiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVUZW1wbGF0ZUluc3RhbmNlIiwiYXJncyIsInR5cGUiLCJwcmV2QXJncyIsImltcG9ydE5vZGUiLCJyZW5kZXJXYWxrZXIiLCJjbG9uZWRQYXJ0cyIsInJlbmRlckluZGV4IiwiY3VycmVudFBhcnQiLCJzaGlmdCIsIm1hcmtlcnMiLCJpbmRleE9mIiwiY3VzdG9tRWxlbWVudHMiLCJFcnJvciIsInN0YXJ0Tm9kZSIsImVuZE5vZGUiLCJwcmV2aW91c0NoaWxkIiwiY2hpbGQiLCJtYXJrZXIiLCJzaGFkb3dSb290Iiwic3R5bGVTdWJ0cmVlIiwic3R5bGVF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QUVBLFNBQUssSUFBSXBFLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHaUUsSUFBSSxDQUFDWSxPQUFMLENBQWExRixNQUF6QyxFQUFpRGEsS0FBSyxJQUFJLENBQTFELEVBQTZEO0FBQUEsK0NBQ3BDaUUsSUFBSSxDQUFDWSxPQUFMLENBQWE3RSxLQUFiLENBRG9DO0FBQUEsVUFDcERlLEtBRG9EO0FBQUEsVUFDOUNzRSxNQUQ4Qzs7QUFFM0QsVUFBSSxDQUFDZixRQUFELElBQWFBLFFBQVEsQ0FBQ3RFLEtBQUQsQ0FBUixLQUFvQm9FLElBQUksQ0FBQ3BFLEtBQUQsQ0FBekMsRUFBa0Q7QUFDaERxRixRQUFBQSxNQUFNLENBQUN2QixJQUFELEVBQU8vQyxLQUFQLEVBQWFxRCxJQUFJLENBQUNwRSxLQUFELENBQWpCLEVBQTBCc0UsUUFBUSxHQUFHQSxRQUFRLENBQUN0RSxLQUFELENBQVgsR0FBcUJ1QixTQUF2RCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJd0MsTUFBTSxDQUFDcEIsUUFBUCxLQUFvQkMsSUFBSSxDQUFDQyxTQUE3QixFQUF3QztBQUN0Q3ZHLE1BQUFBLFFBQVEsQ0FBQyxVQUFBMEIsS0FBSyxFQUFJO0FBQ2hCLFlBQUk4RixJQUFJLENBQUN3QixVQUFULEVBQXFCO0FBQ25CLGNBQUloQixRQUFKLEVBQWM7QUFDWnRHLFlBQUFBLEtBQUssQ0FBQ3VILFlBQU4sQ0FBbUJ6QixJQUFuQjtBQUNELFdBRkQsTUFFTztBQUNMOUYsWUFBQUEsS0FBSyxDQUFDd0gsWUFBTixDQUFtQjFCLElBQW5CO0FBQ0Q7QUFDRjtBQUNGLE9BUk8sQ0FBUjtBQVNEO0FBQ0YsR0FoR0Q7QUFpR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmdpZnlFbGVtZW50LCBzaGFkeUNTUywgSVNfSUUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuaW1wb3J0IHJlc29sdmVWYWx1ZSBmcm9tIFwiLi9yZXNvbHZlcnMvdmFsdWUuanNcIjtcbmltcG9ydCByZXNvbHZlUHJvcGVydHkgZnJvbSBcIi4vcmVzb2x2ZXJzL3Byb3BlcnR5LmpzXCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG50cnkgeyBwcm9jZXNzLmVudi5OT0RFX0VOViB9IGNhdGNoKGUpIHsgdmFyIHByb2Nlc3MgPSB7IGVudjogeyBOT0RFX0VOVjogJ3Byb2R1Y3Rpb24nIH0gfTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IFRJTUVTVEFNUCA9IERhdGUubm93KCk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGFjZWhvbGRlciA9IChpZCA9IDApID0+IGB7e2gtJHtUSU1FU1RBTVB9LSR7aWR9fX1gO1xuXG5jb25zdCBQTEFDRUhPTERFUl9SRUdFWFBfVEVYVCA9IGdldFBsYWNlaG9sZGVyKFwiKFxcXFxkKylcIik7XG5jb25zdCBQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwgPSBuZXcgUmVnRXhwKGBeJHtQTEFDRUhPTERFUl9SRUdFWFBfVEVYVH0kYCk7XG5jb25zdCBQTEFDRUhPTERFUl9SRUdFWFBfQUxMID0gbmV3IFJlZ0V4cChQTEFDRUhPTERFUl9SRUdFWFBfVEVYVCwgXCJnXCIpO1xuXG5jb25zdCBBVFRSX1BSRUZJWCA9IGAtLSR7VElNRVNUQU1QfS0tYDtcbmNvbnN0IEFUVFJfUkVHRVhQID0gbmV3IFJlZ0V4cChBVFRSX1BSRUZJWCwgXCJnXCIpO1xuXG5jb25zdCBwcmVwYXJlZFRlbXBsYXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBhcHBseVNoYWR5Q1NTKHRlbXBsYXRlLCB0YWdOYW1lKSB7XG4gIGlmICghdGFnTmFtZSkgcmV0dXJuIHRlbXBsYXRlO1xuXG4gIHJldHVybiBzaGFkeUNTUyhzaGFkeSA9PiB7XG4gICAgbGV0IG1hcCA9IHByZXBhcmVkVGVtcGxhdGVzLmdldCh0ZW1wbGF0ZSk7XG4gICAgaWYgKCFtYXApIHtcbiAgICAgIG1hcCA9IG5ldyBNYXAoKTtcbiAgICAgIHByZXBhcmVkVGVtcGxhdGVzLnNldCh0ZW1wbGF0ZSwgbWFwKTtcbiAgICB9XG5cbiAgICBsZXQgY2xvbmUgPSBtYXAuZ2V0KHRhZ05hbWUpO1xuXG4gICAgaWYgKCFjbG9uZSkge1xuICAgICAgY2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgICBjbG9uZS5jb250ZW50LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblxuICAgICAgbWFwLnNldCh0YWdOYW1lLCBjbG9uZSk7XG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IGNsb25lLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlXCIpO1xuXG4gICAgICBBcnJheS5mcm9tKHN0eWxlcykuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3R5bGUuY2hpbGROb2Rlcy5sZW5ndGggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICBzdHlsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGdldFBsYWNlaG9sZGVyKCkpLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNoYWR5LnByZXBhcmVUZW1wbGF0ZShjbG9uZSwgdGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LCB0ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZ25hdHVyZShwYXJ0cywgc3R5bGVzKSB7XG4gIGxldCBzaWduYXR1cmUgPSBwYXJ0cy5yZWR1Y2UoKGFjYywgcGFydCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiBwYXJ0O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBhcnRzXG4gICAgICAgIC5zbGljZShpbmRleClcbiAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgICAgLm1hdGNoKC9eXFxzKjxcXC9cXHMqKHRhYmxlfHRyfHRoZWFkfHRib2R5fHRmb290fGNvbGdyb3VwKT4vKVxuICAgICkge1xuICAgICAgcmV0dXJuIGAke2FjY308IS0tJHtnZXRQbGFjZWhvbGRlcihpbmRleCAtIDEpfS0tPiR7cGFydH1gO1xuICAgIH1cbiAgICByZXR1cm4gYWNjICsgZ2V0UGxhY2Vob2xkZXIoaW5kZXggLSAxKSArIHBhcnQ7XG4gIH0sIFwiXCIpO1xuXG4gIGlmIChzdHlsZXMpIHtcbiAgICBzaWduYXR1cmUgKz0gYDxzdHlsZT5cXG4ke3N0eWxlcy5qb2luKFwiXFxuLyotLS0tLS0qL1xcblwiKX1cXG48L3N0eWxlPmA7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKElTX0lFKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5yZXBsYWNlKFxuICAgICAgL3N0eWxlXFxzKj1cXHMqKFtcIl1bXlwiXStbXCJdfFsnXVteJ10rWyddfFteXFxzXCInPD4vXSspL2csXG4gICAgICBtYXRjaCA9PiBgJHtBVFRSX1BSRUZJWH0ke21hdGNofWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5TmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgIC5yZXBsYWNlKC9cXHMqPVxccypbJ1wiXSokL2csIFwiXCIpXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDb21tZW50cyhmcmFnbWVudCkge1xuICBjb25zdCBpdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcbiAgICBmcmFnbWVudCxcbiAgICBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCxcbiAgICBudWxsLFxuICAgIGZhbHNlLFxuICApO1xuICBsZXQgbm9kZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gIHdoaWxlICgobm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgaWYgKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTC50ZXN0KG5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLnRleHRDb250ZW50KSxcbiAgICAgICAgbm9kZSxcbiAgICAgICk7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcm5hbFdhbGtlcihjb250ZXh0KSB7XG4gIGxldCBub2RlO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGN1cnJlbnROb2RlKCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgICBuZXh0Tm9kZSgpIHtcbiAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZSA9IGNvbnRleHQuY2hpbGROb2Rlc1swXTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBub2RlID0gbm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgICAgfSBlbHNlIGlmIChub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIG5vZGUgPSBwYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIHdoaWxlICghbm9kZSAmJiBwYXJlbnROb2RlICE9PSBjb250ZXh0KSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBub2RlID0gcGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gISFub2RlO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4dGVybmFsV2Fsa2VyKGNvbnRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgY29udGV4dCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgbnVsbCxcbiAgICBmYWxzZSxcbiAgKTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGNyZWF0ZVdhbGtlciA9XG4gIHR5cGVvZiB3aW5kb3cuU2hhZHlET00gPT09IFwib2JqZWN0XCIgJiYgd2luZG93LlNoYWR5RE9NLmluVXNlXG4gICAgPyBjcmVhdGVJbnRlcm5hbFdhbGtlclxuICAgIDogY3JlYXRlRXh0ZXJuYWxXYWxrZXI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKHJhd1BhcnRzLCBpc1NWRywgc3R5bGVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBjb25zdCBwYXJ0cyA9IFtdO1xuXG4gIGxldCBzaWduYXR1cmUgPSBjcmVhdGVTaWduYXR1cmUocmF3UGFydHMsIHN0eWxlcyk7XG4gIGlmIChpc1NWRykgc2lnbmF0dXJlID0gYDxzdmc+JHtzaWduYXR1cmV9PC9zdmc+YDtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKElTX0lFKSB7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc2lnbmF0dXJlO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHRlbXBsYXRlPiR7c2lnbmF0dXJlfTwvdGVtcGxhdGU+YDtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lci5jaGlsZHJlblswXS5jb250ZW50KTtcbiAgfVxuXG4gIGlmIChpc1NWRykge1xuICAgIGNvbnN0IHN2Z1Jvb3QgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgdGVtcGxhdGUuY29udGVudC5yZW1vdmVDaGlsZChzdmdSb290KTtcbiAgICBBcnJheS5mcm9tKHN2Z1Jvb3QuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKG5vZGUpLFxuICAgICk7XG4gIH1cblxuICByZXBsYWNlQ29tbWVudHModGVtcGxhdGUuY29udGVudCk7XG5cbiAgY29uc3QgY29tcGlsZVdhbGtlciA9IGNyZWF0ZVdhbGtlcih0ZW1wbGF0ZS5jb250ZW50KTtcbiAgbGV0IGNvbXBpbGVJbmRleCA9IDA7XG5cbiAgd2hpbGUgKGNvbXBpbGVXYWxrZXIubmV4dE5vZGUoKSkge1xuICAgIGNvbnN0IG5vZGUgPSBjb21waWxlV2Fsa2VyLmN1cnJlbnROb2RlO1xuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcblxuICAgICAgaWYgKCF0ZXh0Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRleHQubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0FMTCk7XG4gICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgICByZXN1bHRzXG4gICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAoYWNjLCBwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtiZWZvcmUsIG5leHRdID0gYWNjLnBvcCgpLnNwbGl0KHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlKSBhY2MucHVzaChiZWZvcmUpO1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dCkgYWNjLnB1c2gobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW3RleHRdLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gcGFydDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFydCksXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlcXVhbCA9IG5vZGUudGV4dENvbnRlbnQubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKTtcbiAgICAgIGlmIChlcXVhbCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoIUlTX0lFKSBub2RlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcGFydHNbZXF1YWxbMV1dID0gW2NvbXBpbGVJbmRleCwgcmVzb2x2ZVZhbHVlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmVseS1pZlxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIEFycmF5LmZyb20obm9kZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZS50cmltKCk7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBjb25zdCBuYW1lID0gSVNfSUUgPyBhdHRyLm5hbWUucmVwbGFjZShBVFRSX1BSRUZJWCwgXCJcIikgOiBhdHRyLm5hbWU7XG4gICAgICAgICAgY29uc3QgZXF1YWwgPSB2YWx1ZS5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpO1xuICAgICAgICAgIGlmIChlcXVhbCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gZ2V0UHJvcGVydHlOYW1lKHJhd1BhcnRzW2VxdWFsWzFdXSk7XG4gICAgICAgICAgICBwYXJ0c1tlcXVhbFsxXV0gPSBbXG4gICAgICAgICAgICAgIGNvbXBpbGVJbmRleCxcbiAgICAgICAgICAgICAgcmVzb2x2ZVByb3BlcnR5KG5hbWUsIHByb3BlcnR5TmFtZSwgaXNTVkcpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB2YWx1ZS5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfQUxMKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRpYWxOYW1lID0gYGF0dHJfXyR7bmFtZX1gO1xuXG4gICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocGxhY2Vob2xkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgaWRdID0gcGxhY2Vob2xkZXIubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKTtcbiAgICAgICAgICAgICAgICBwYXJ0c1tpZF0gPSBbXG4gICAgICAgICAgICAgICAgICBjb21waWxlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAoaG9zdCwgdGFyZ2V0LCBhdHRyVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCwge30pO1xuICAgICAgICAgICAgICAgICAgICBkYXRhW3BhcnRpYWxOYW1lXSA9IChkYXRhW3BhcnRpYWxOYW1lXSB8fCB2YWx1ZSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT0gbnVsbCA/IFwiXCIgOiBhdHRyVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxIHx8IGluZGV4ICsgMSA9PT0gcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKG5hbWUsIGRhdGFbcGFydGlhbE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW3BhcnRpYWxOYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBhdHRyLnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICBpZiAoSVNfSUUgJiYgbmFtZSAhPT0gYXR0ci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBcIlwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZUluZGV4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGVJbnN0YW5jZShob3N0LCB0YXJnZXQsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7IHR5cGU6IFwiZnVuY3Rpb25cIiB9KTtcblxuICAgIGlmICh0ZW1wbGF0ZSAhPT0gZGF0YS50ZW1wbGF0ZSkge1xuICAgICAgaWYgKGRhdGEudGVtcGxhdGUgfHwgdGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSlcbiAgICAgICAgcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KTtcbiAgICAgIGRhdGEucHJldkFyZ3MgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIGFwcGx5U2hhZHlDU1ModGVtcGxhdGUsIGhvc3QudGFnTmFtZSkuY29udGVudCxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcldhbGtlciA9IGNyZWF0ZVdhbGtlcihmcmFnbWVudCk7XG4gICAgICBjb25zdCBjbG9uZWRQYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwO1xuICAgICAgbGV0IGN1cnJlbnRQYXJ0ID0gY2xvbmVkUGFydHMuc2hpZnQoKTtcblxuICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuXG4gICAgICBkYXRhLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICBkYXRhLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICB3aGlsZSAocmVuZGVyV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlbmRlcldhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwudGVzdChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChJU19JRSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZShBVFRSX1JFR0VYUCwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5vZGUudGFnTmFtZS5pbmRleE9mKFwiLVwiKSA+IC0xICYmXG4gICAgICAgICAgICAhY3VzdG9tRWxlbWVudHMuZ2V0KG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgIGBNaXNzaW5nICcke3N0cmluZ2lmeUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgKX0nIGVsZW1lbnQgZGVmaW5pdGlvbiBpbiAnJHtzdHJpbmdpZnlFbGVtZW50KGhvc3QpfSdgLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudFBhcnQgJiYgY3VycmVudFBhcnRbMF0gPT09IHJlbmRlckluZGV4KSB7XG4gICAgICAgICAgbWFya2Vycy5wdXNoKFtub2RlLCBjdXJyZW50UGFydFsxXV0pO1xuICAgICAgICAgIGN1cnJlbnRQYXJ0ID0gY2xvbmVkUGFydHMuc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlckluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIGRhdGEuc3RhcnROb2RlID0gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgZGF0YS5lbmROb2RlID0gZnJhZ21lbnQuY2hpbGROb2Rlc1tmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0NoaWxkID0gdGFyZ2V0O1xuXG4gICAgICAgIGxldCBjaGlsZCA9IGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZCwgcHJldmlvdXNDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgICAgcHJldmlvdXNDaGlsZCA9IGNoaWxkO1xuICAgICAgICAgIGNoaWxkID0gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmV2QXJncyA9IGRhdGEucHJldkFyZ3M7XG4gICAgZGF0YS5wcmV2QXJncyA9IGFyZ3M7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5tYXJrZXJzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3QgW25vZGUsIG1hcmtlcl0gPSBkYXRhLm1hcmtlcnNbaW5kZXhdO1xuICAgICAgaWYgKCFwcmV2QXJncyB8fCBwcmV2QXJnc1tpbmRleF0gIT09IGFyZ3NbaW5kZXhdKSB7XG4gICAgICAgIG1hcmtlcihob3N0LCBub2RlLCBhcmdzW2luZGV4XSwgcHJldkFyZ3MgPyBwcmV2QXJnc1tpbmRleF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBzaGFkeUNTUyhzaGFkeSA9PiB7XG4gICAgICAgIGlmIChob3N0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBpZiAocHJldkFyZ3MpIHtcbiAgICAgICAgICAgIHNoYWR5LnN0eWxlU3VidHJlZShob3N0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZHkuc3R5bGVFbGVtZW50KGhvc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/template/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/hybrids/esm/template/helpers.js ***!
  \******************************************************/
/*! exports provided: set, resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
var setCache = new Map();
function set(propertyName, value) {
  if (!propertyName) throw Error("Target property name missing: ".concat(propertyName));

  if (arguments.length === 2) {
    return function (host) {
      host[propertyName] = value;
    };
  }

  var fn = setCache.get(propertyName);

  if (!fn) {
    fn = function fn(host, _ref) {
      var target = _ref.target;
      host[propertyName] = target.value;
    };

    setCache.set(propertyName, fn);
  }

  return fn;
}
var promiseMap = new WeakMap();
function resolve(promise, placeholder) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  return function (host, target) {
    var timeout;

    if (placeholder) {
      timeout = setTimeout(function () {
        timeout = undefined;
        requestAnimationFrame(function () {
          placeholder(host, target);
        });
      }, delay);
    }

    promiseMap.set(target, promise);
    promise.then(function (template) {
      if (timeout) clearTimeout(timeout);

      if (promiseMap.get(target) === promise) {
        template(host, target);
        promiseMap.set(target, null);
      }
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNldENhY2hlIiwiTWFwIiwic2V0IiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImhvc3QiLCJmbiIsImdldCIsInRhcmdldCIsInByb21pc2VNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZSIsInByb21pc2UiLCJwbGFjZWhvbGRlciIsImRlbGF5IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwidGVtcGxhdGUiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxHQUFKLEVBQWpCO0FBQ0EsT0FBTyxTQUFTQyxHQUFULENBQWFDLFlBQWIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLE1BQUksQ0FBQ0QsWUFBTCxFQUNFLE1BQU1FLEtBQUsseUNBQWtDRixZQUFsQyxFQUFYOztBQUVGLE1BQUlHLFNBQVMsQ0FBQ0MsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUFPLFVBQUFDLElBQUksRUFBSTtBQUNiQSxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQkMsS0FBckI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBSUssRUFBRSxHQUFHVCxRQUFRLENBQUNVLEdBQVQsQ0FBYVAsWUFBYixDQUFUOztBQUVBLE1BQUksQ0FBQ00sRUFBTCxFQUFTO0FBQ1BBLElBQUFBLEVBQUUsR0FBRyxZQUFDRCxJQUFELFFBQXNCO0FBQUEsVUFBYkcsTUFBYSxRQUFiQSxNQUFhO0FBQ3pCSCxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQlEsTUFBTSxDQUFDUCxLQUE1QjtBQUNELEtBRkQ7O0FBR0FKLElBQUFBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxZQUFiLEVBQTJCTSxFQUEzQjtBQUNEOztBQUVELFNBQU9BLEVBQVA7QUFDRDtBQUVELElBQU1HLFVBQVUsR0FBRyxJQUFJQyxPQUFKLEVBQW5CO0FBQ0EsT0FBTyxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUEwQkMsV0FBMUIsRUFBb0Q7QUFBQSxNQUFiQyxLQUFhLHVFQUFMLEdBQUs7QUFDekQsU0FBTyxVQUFDVCxJQUFELEVBQU9HLE1BQVAsRUFBa0I7QUFDdkIsUUFBSU8sT0FBSjs7QUFFQSxRQUFJRixXQUFKLEVBQWlCO0FBQ2ZFLE1BQUFBLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDekJELFFBQUFBLE9BQU8sR0FBR0UsU0FBVjtBQUVBQyxRQUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0FBQzFCTCxVQUFBQSxXQUFXLENBQUNSLElBQUQsRUFBT0csTUFBUCxDQUFYO0FBQ0QsU0FGb0IsQ0FBckI7QUFHRCxPQU5tQixFQU1qQk0sS0FOaUIsQ0FBcEI7QUFPRDs7QUFFREwsSUFBQUEsVUFBVSxDQUFDVixHQUFYLENBQWVTLE1BQWYsRUFBdUJJLE9BQXZCO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLFVBQUFDLFFBQVEsRUFBSTtBQUN2QixVQUFJTCxPQUFKLEVBQWFNLFlBQVksQ0FBQ04sT0FBRCxDQUFaOztBQUViLFVBQUlOLFVBQVUsQ0FBQ0YsR0FBWCxDQUFlQyxNQUFmLE1BQTJCSSxPQUEvQixFQUF3QztBQUN0Q1EsUUFBQUEsUUFBUSxDQUFDZixJQUFELEVBQU9HLE1BQVAsQ0FBUjtBQUNBQyxRQUFBQSxVQUFVLENBQUNWLEdBQVgsQ0FBZVMsTUFBZixFQUF1QixJQUF2QjtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBdkJEO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2V0Q2FjaGUgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gc2V0KHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgdGhyb3cgRXJyb3IoYFRhcmdldCBwcm9wZXJ0eSBuYW1lIG1pc3Npbmc6ICR7cHJvcGVydHlOYW1lfWApO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIGhvc3QgPT4ge1xuICAgICAgaG9zdFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBmbiA9IHNldENhY2hlLmdldChwcm9wZXJ0eU5hbWUpO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IChob3N0LCB7IHRhcmdldCB9KSA9PiB7XG4gICAgICBob3N0W3Byb3BlcnR5TmFtZV0gPSB0YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBzZXRDYWNoZS5zZXQocHJvcGVydHlOYW1lLCBmbik7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgcGxhY2Vob2xkZXIsIGRlbGF5ID0gMjAwKSB7XG4gIHJldHVybiAoaG9zdCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHBsYWNlaG9sZGVyKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgcHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4odGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKHByb21pc2VNYXAuZ2V0KHRhcmdldCkgPT09IHByb21pc2UpIHtcbiAgICAgICAgdGVtcGxhdGUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hybrids/esm/template/index.js ***!
  \****************************************************/
/*! exports provided: html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../define.js */ "./node_modules/hybrids/esm/define.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/hybrids/esm/template/core.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/hybrids/esm/template/helpers.js");



var PLACEHOLDER = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["getPlaceholder"])();
var SVG_PLACEHOLDER = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["getPlaceholder"])("svg");
var templatesMap = new Map();
var stylesMap = new WeakMap();
var methods = {
  define: function define(elements) {
    Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elements);
    return this;
  },
  key: function key(id) {
    this.id = id;
    return this;
  },
  style: function style() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    stylesMap.set(this, styles);
    return this;
  }
};

function create(parts, args, isSVG) {
  var createTemplate = function createTemplate(host) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : host;
    var styles = stylesMap.get(createTemplate);
    var id = parts.join(PLACEHOLDER);
    if (styles) id += styles.join(PLACEHOLDER);
    if (isSVG) id += SVG_PLACEHOLDER;
    var render = templatesMap.get(id);

    if (!render) {
      render = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["compileTemplate"])(parts, isSVG, styles);
      templatesMap.set(id, render);
    }

    render(host, target, args);
  };

  return Object.assign(createTemplate, methods);
}

function html(parts) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return create(parts, args);
}
function svg(parts) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return create(parts, args, true);
}
Object.assign(html, _helpers_js__WEBPACK_IMPORTED_MODULE_2__);
Object.assign(svg, _helpers_js__WEBPACK_IMPORTED_MODULE_2__);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZpbmVFbGVtZW50cyIsImNvbXBpbGVUZW1wbGF0ZSIsImdldFBsYWNlaG9sZGVyIiwiaGVscGVycyIsIlBMQUNFSE9MREVSIiwiU1ZHX1BMQUNFSE9MREVSIiwidGVtcGxhdGVzTWFwIiwiTWFwIiwic3R5bGVzTWFwIiwiV2Vha01hcCIsIm1ldGhvZHMiLCJkZWZpbmUiLCJlbGVtZW50cyIsImtleSIsImlkIiwic3R5bGUiLCJzdHlsZXMiLCJzZXQiLCJjcmVhdGUiLCJwYXJ0cyIsImFyZ3MiLCJpc1NWRyIsImNyZWF0ZVRlbXBsYXRlIiwiaG9zdCIsInRhcmdldCIsImdldCIsImpvaW4iLCJyZW5kZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJodG1sIiwic3ZnIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxjQUFQLE1BQTJCLGNBQTNCO0FBRUEsU0FBU0MsZUFBVCxFQUEwQkMsY0FBMUIsUUFBZ0QsV0FBaEQ7QUFDQSxPQUFPLEtBQUtDLE9BQVosTUFBeUIsY0FBekI7QUFFQSxJQUFNQyxXQUFXLEdBQUdGLGNBQWMsRUFBbEM7QUFDQSxJQUFNRyxlQUFlLEdBQUdILGNBQWMsQ0FBQyxLQUFELENBQXRDO0FBRUEsSUFBTUksWUFBWSxHQUFHLElBQUlDLEdBQUosRUFBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBSUMsT0FBSixFQUFsQjtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxNQURjLGtCQUNQQyxRQURPLEVBQ0c7QUFDZlosSUFBQUEsY0FBYyxDQUFDWSxRQUFELENBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUphO0FBS2RDLEVBQUFBLEdBTGMsZUFLVkMsRUFMVSxFQUtOO0FBQ04sU0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FSYTtBQVNkQyxFQUFBQSxLQVRjLG1CQVNHO0FBQUEsc0NBQVJDLE1BQVE7QUFBUkEsTUFBQUEsTUFBUTtBQUFBOztBQUNmUixJQUFBQSxTQUFTLENBQUNTLEdBQVYsQ0FBYyxJQUFkLEVBQW9CRCxNQUFwQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBWmEsQ0FBaEI7O0FBZUEsU0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBeUI7QUFBQSxRQUFsQkMsTUFBa0IsdUVBQVRELElBQVM7QUFDOUMsUUFBTVAsTUFBTSxHQUFHUixTQUFTLENBQUNpQixHQUFWLENBQWNILGNBQWQsQ0FBZjtBQUNBLFFBQUlSLEVBQUUsR0FBR0ssS0FBSyxDQUFDTyxJQUFOLENBQVd0QixXQUFYLENBQVQ7QUFDQSxRQUFJWSxNQUFKLEVBQVlGLEVBQUUsSUFBSUUsTUFBTSxDQUFDVSxJQUFQLENBQVl0QixXQUFaLENBQU47QUFDWixRQUFJaUIsS0FBSixFQUFXUCxFQUFFLElBQUlULGVBQU47QUFFWCxRQUFJc0IsTUFBTSxHQUFHckIsWUFBWSxDQUFDbUIsR0FBYixDQUFpQlgsRUFBakIsQ0FBYjs7QUFDQSxRQUFJLENBQUNhLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUcxQixlQUFlLENBQUNrQixLQUFELEVBQVFFLEtBQVIsRUFBZUwsTUFBZixDQUF4QjtBQUNBVixNQUFBQSxZQUFZLENBQUNXLEdBQWIsQ0FBaUJILEVBQWpCLEVBQXFCYSxNQUFyQjtBQUNEOztBQUVEQSxJQUFBQSxNQUFNLENBQUNKLElBQUQsRUFBT0MsTUFBUCxFQUFlSixJQUFmLENBQU47QUFDRCxHQWJEOztBQWVBLFNBQU9RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxjQUFkLEVBQThCWixPQUE5QixDQUFQO0FBQ0Q7O0FBRUQsT0FBTyxTQUFTb0IsSUFBVCxDQUFjWCxLQUFkLEVBQThCO0FBQUEscUNBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUNuQyxTQUFPRixNQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUFiO0FBQ0Q7QUFFRCxPQUFPLFNBQVNXLEdBQVQsQ0FBYVosS0FBYixFQUE2QjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLElBQUFBLElBQU07QUFBQTs7QUFDbEMsU0FBT0YsTUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBYyxJQUFkLENBQWI7QUFDRDtBQUVEUSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxFQUFvQjNCLE9BQXBCO0FBQ0F5QixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxFQUFtQjVCLE9BQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmluZUVsZW1lbnRzIGZyb20gXCIuLi9kZWZpbmUuanNcIjtcblxuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBnZXRQbGFjZWhvbGRlciB9IGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVycy5qc1wiO1xuXG5jb25zdCBQTEFDRUhPTERFUiA9IGdldFBsYWNlaG9sZGVyKCk7XG5jb25zdCBTVkdfUExBQ0VIT0xERVIgPSBnZXRQbGFjZWhvbGRlcihcInN2Z1wiKTtcblxuY29uc3QgdGVtcGxhdGVzTWFwID0gbmV3IE1hcCgpO1xuY29uc3Qgc3R5bGVzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgZGVmaW5lKGVsZW1lbnRzKSB7XG4gICAgZGVmaW5lRWxlbWVudHMoZWxlbWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBrZXkoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHN0eWxlKC4uLnN0eWxlcykge1xuICAgIHN0eWxlc01hcC5zZXQodGhpcywgc3R5bGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShwYXJ0cywgYXJncywgaXNTVkcpIHtcbiAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoaG9zdCwgdGFyZ2V0ID0gaG9zdCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc01hcC5nZXQoY3JlYXRlVGVtcGxhdGUpO1xuICAgIGxldCBpZCA9IHBhcnRzLmpvaW4oUExBQ0VIT0xERVIpO1xuICAgIGlmIChzdHlsZXMpIGlkICs9IHN0eWxlcy5qb2luKFBMQUNFSE9MREVSKTtcbiAgICBpZiAoaXNTVkcpIGlkICs9IFNWR19QTEFDRUhPTERFUjtcblxuICAgIGxldCByZW5kZXIgPSB0ZW1wbGF0ZXNNYXAuZ2V0KGlkKTtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgcmVuZGVyID0gY29tcGlsZVRlbXBsYXRlKHBhcnRzLCBpc1NWRywgc3R5bGVzKTtcbiAgICAgIHRlbXBsYXRlc01hcC5zZXQoaWQsIHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKGhvc3QsIHRhcmdldCwgYXJncyk7XG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY3JlYXRlVGVtcGxhdGUsIG1ldGhvZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbChwYXJ0cywgLi4uYXJncykge1xuICByZXR1cm4gY3JlYXRlKHBhcnRzLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN2ZyhwYXJ0cywgLi4uYXJncykge1xuICByZXR1cm4gY3JlYXRlKHBhcnRzLCBhcmdzLCB0cnVlKTtcbn1cblxuT2JqZWN0LmFzc2lnbihodG1sLCBoZWxwZXJzKTtcbk9iamVjdC5hc3NpZ24oc3ZnLCBoZWxwZXJzKTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/array.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/array.js ***!
  \**************************************************************/
/*! exports provided: arrayMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMap", function() { return arrayMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveArray; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/template/utils.js");
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.js */ "./node_modules/hybrids/esm/template/resolvers/value.js");
 // eslint-disable-next-line import/no-cycle


var arrayMap = new WeakMap();

function movePlaceholder(target, previousSibling) {
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target);
  var startNode = data.startNode;
  var endNode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getTemplateEnd"])(data.endNode);
  previousSibling.parentNode.insertBefore(target, previousSibling.nextSibling);
  var prevNode = target;
  var node = startNode;

  while (node) {
    var nextNode = node.nextSibling;
    prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
    prevNode = node;
    node = nextNode !== endNode.nextSibling && nextNode;
  }
}

function resolveArray(host, target, value) {
  var lastEntries = arrayMap.get(target);
  var entries = value.map(function (item, index) {
    return {
      id: Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index,
      value: item,
      placeholder: null,
      available: true
    };
  });
  arrayMap.set(target, entries);

  if (lastEntries) {
    var ids = new Set();
    entries.forEach(function (entry) {
      return ids.add(entry.id);
    });
    lastEntries = lastEntries.filter(function (entry) {
      if (!ids.has(entry.id)) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
        return false;
      }

      return true;
    });
  }

  var previousSibling = target;
  var lastIndex = value.length - 1;
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target);

  for (var index = 0; index < entries.length; index += 1) {
    var entry = entries[index];
    var matchedEntry = void 0;

    if (lastEntries) {
      for (var i = 0; i < lastEntries.length; i += 1) {
        if (lastEntries[i].available && lastEntries[i].id === entry.id) {
          matchedEntry = lastEntries[i];
          break;
        }
      }
    }

    var placeholder = void 0;

    if (matchedEntry) {
      matchedEntry.available = false;
      placeholder = matchedEntry.placeholder;

      if (placeholder.previousSibling !== previousSibling) {
        movePlaceholder(placeholder, previousSibling);
      }

      if (matchedEntry.value !== entry.value) {
        Object(_value_js__WEBPACK_IMPORTED_MODULE_1__["default"])(host, placeholder, entry.value);
      }
    } else {
      placeholder = document.createTextNode("");
      previousSibling.parentNode.insertBefore(placeholder, previousSibling.nextSibling);
      Object(_value_js__WEBPACK_IMPORTED_MODULE_1__["default"])(host, placeholder, entry.value);
    }

    previousSibling = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getTemplateEnd"])(_utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(placeholder).endNode || placeholder);
    if (index === 0) data.startNode = placeholder;
    if (index === lastIndex) data.endNode = previousSibling;
    entry.placeholder = placeholder;
  }

  if (lastEntries) {
    lastEntries.forEach(function (entry) {
      if (entry.available) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJyZXNvbHZlVmFsdWUiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLEVBQWtDQyxjQUFsQyxRQUF3RCxhQUF4RCxDLENBRUE7O0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixZQUF6QjtBQUVBLE9BQU8sSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7O0FBRVAsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLGVBQWpDLEVBQWtEO0FBQ2hELE1BQU1DLElBQUksR0FBR1QsT0FBTyxDQUFDVSxHQUFSLENBQVlILE1BQVosQ0FBYjtBQUNBLE1BQU1JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUF2QjtBQUNBLE1BQU1DLE9B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SU4sS0FBSyxLQUFLLENBQWQsRUFBaUJqQixJQUFJLENBQUNFLFNBQUwsR0FBaUJxQixXQUFqQjtBQUNqQixRQUFJTixLQUFLLEtBQUtpQixTQUFkLEVBQXlCbEMsSUFBSSxDQUFDRyxPQUFMLEdBQWVKLGVBQWY7QUFFekI4QixJQUFBQSxLQUFLLENBQUNOLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0Q7O0FBRUQsTUFBSVYsV0FBSixFQUFpQjtBQUNmQSxJQUFBQSxXQUFXLENBQUNlLE9BQVosQ0FBb0IsVUFBQUMsS0FBSyxFQUFJO0FBQzNCLFVBQUlBLEtBQUssQ0FBQ0wsU0FBVixFQUFxQjtBQUNuQmhDLFFBQUFBLGNBQWMsQ0FBQ3FDLEtBQUssQ0FBQ04sV0FBUCxDQUFkO0FBQ0FNLFFBQUFBLEtBQUssQ0FBQ04sV0FBTixDQUFrQm5CLFVBQWxCLENBQTZCNkIsV0FBN0IsQ0FBeUNKLEtBQUssQ0FBQ04sV0FBL0M7QUFDRDtBQUNGLEtBTEQ7QUFNRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YU1hcCwgcmVtb3ZlVGVtcGxhdGUsIGdldFRlbXBsYXRlRW5kIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCByZXNvbHZlVmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGNvbnN0IGFycmF5TWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbW92ZVBsYWNlaG9sZGVyKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nKSB7XG4gIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBzdGFydE5vZGUgPSBkYXRhLnN0YXJ0Tm9kZTtcbiAgY29uc3QgZW5kTm9kZSA9IGdldFRlbXBsYXRlRW5kKGRhdGEuZW5kTm9kZSk7XG5cbiAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nKTtcblxuICBsZXQgcHJldk5vZGUgPSB0YXJnZXQ7XG4gIGxldCBub2RlID0gc3RhcnROb2RlO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGNvbnN0IG5leHROb2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICBwcmV2Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwcmV2Tm9kZS5uZXh0U2libGluZyk7XG4gICAgcHJldk5vZGUgPSBub2RlO1xuICAgIG5vZGUgPSBuZXh0Tm9kZSAhPT0gZW5kTm9kZS5uZXh0U2libGluZyAmJiBuZXh0Tm9kZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlQXJyYXkoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkge1xuICBsZXQgbGFzdEVudHJpZXMgPSBhcnJheU1hcC5nZXQodGFyZ2V0KTtcbiAgY29uc3QgZW50cmllcyA9IHZhbHVlLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpdGVtLCBcImlkXCIpID8gaXRlbS5pZCA6IGluZGV4LFxuICAgIHZhbHVlOiBpdGVtLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgfSkpO1xuXG4gIGFycmF5TWFwLnNldCh0YXJnZXQsIGVudHJpZXMpO1xuXG4gIGlmIChsYXN0RW50cmllcykge1xuICAgIGNvbnN0IGlkcyA9IG5ldyBTZXQoKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gaWRzLmFkZChlbnRyeS5pZCkpO1xuXG4gICAgbGFzdEVudHJpZXMgPSBsYXN0RW50cmllcy5maWx0ZXIoZW50cnkgPT4ge1xuICAgICAgaWYgKCFpZHMuaGFzKGVudHJ5LmlkKSkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZShlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIGVudHJ5LnBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZW50cnkucGxhY2Vob2xkZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHByZXZpb3VzU2libGluZyA9IHRhcmdldDtcbiAgY29uc3QgbGFzdEluZGV4ID0gdmFsdWUubGVuZ3RoIC0gMTtcbiAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVudHJpZXMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICBsZXQgbWF0Y2hlZEVudHJ5O1xuICAgIGlmIChsYXN0RW50cmllcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0RW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobGFzdEVudHJpZXNbaV0uYXZhaWxhYmxlICYmIGxhc3RFbnRyaWVzW2ldLmlkID09PSBlbnRyeS5pZCkge1xuICAgICAgICAgIG1hdGNoZWRFbnRyeSA9IGxhc3RFbnRyaWVzW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlaG9sZGVyO1xuICAgIGlmIChtYXRjaGVkRW50cnkpIHtcbiAgICAgIG1hdGNoZWRFbnRyeS5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIHBsYWNlaG9sZGVyID0gbWF0Y2hlZEVudHJ5LnBsYWNlaG9sZGVyO1xuXG4gICAgICBpZiAocGxhY2Vob2xkZXIucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgbW92ZVBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyLCBwcmV2aW91c1NpYmxpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoZWRFbnRyeS52YWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZVZhbHVlKGhvc3QsIHBsYWNlaG9sZGVyLCBlbnRyeS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICBwcmV2aW91c1NpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICBwcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcsXG4gICAgICApO1xuICAgICAgcmVzb2x2ZVZhbHVlKGhvc3QsIHBsYWNlaG9sZGVyLCBlbnRyeS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTaWJsaW5nID0gZ2V0VGVtcGxhdGVFbmQoXG4gICAgICBkYXRhTWFwLmdldChwbGFjZWhvbGRlcikuZW5kTm9kZSB8fCBwbGFjZWhvbGRlcixcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSBkYXRhLnN0YXJ0Tm9kZSA9IHBsYWNlaG9sZGVyO1xuICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSBkYXRhLmVuZE5vZGUgPSBwcmV2aW91c1NpYmxpbmc7XG5cbiAgICBlbnRyeS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgbGFzdEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnkuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/class.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/class.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveClassList; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function normalizeValue(value) {
  var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (Array.isArray(value)) {
    value.forEach(function (className) {
      return set.add(className);
    });
  } else if (value !== null && _typeof(value) === "object") {
    Object.keys(value).forEach(function (key) {
      return value[key] && set.add(key);
    });
  } else {
    set.add(value);
  }

  return set;
}

var classMap = new WeakMap();
function resolveClassList(host, target, value) {
  var previousList = classMap.get(target) || new Set();
  var list = normalizeValue(value);
  classMap.set(target, list);
  list.forEach(function (className) {
    target.classList.add(className);
    previousList.delete(className);
  });
  previousList.forEach(function (className) {
    target.classList.remove(className);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvY2xhc3MuanMiXSwibmFtZXMiOlsibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZSIsInNldCIsIlNldCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2xhc3NNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUNsYXNzTGlzdCIsImhvc3QiLCJ0YXJnZXQiLCJwcmV2aW91c0xpc3QiLCJnZXQiLCJsaXN0IiwiY2xhc3NMaXN0IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWdEO0FBQUEsTUFBakJDLEdBQWlCLHVFQUFYLElBQUlDLEdBQUosRUFBVzs7QUFDOUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsSUFBQUEsS0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBQUMsU0FBUztBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sR0FBSixDQUFRRCxTQUFSLENBQUo7QUFBQSxLQUF2QjtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQ3REUSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVQsS0FBWixFQUFtQkssT0FBbkIsQ0FBMkIsVUFBQUssR0FBRztBQUFBLGFBQUlWLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLElBQWNULEdBQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSLENBQWxCO0FBQUEsS0FBOUI7QUFDRCxHQUZNLE1BRUE7QUFDTFQsSUFBQUEsR0FBRyxDQUFDTSxHQUFKLENBQVFQLEtBQVI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NmLEtBQXhDLEVBQStDO0FBQzVELE1BQU1nQixZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhRixNQUFiLEtBQXdCLElBQUliLEdBQUosRUFBN0M7QUFDQSxNQUFNZ0IsSUFBSSxHQUFHbkIsY0FBYyxDQUFDQyxLQUFELENBQTNCO0FBRUFXLEVBQUFBLFFBQVEsQ0FBQ1YsR0FBVCxDQUFhYyxNQUFiLEVBQXFCRyxJQUFyQjtBQUVBQSxFQUFBQSxJQUFJLENBQUNiLE9BQUwsQ0FBYSxVQUFBQyxTQUFTLEVBQUk7QUFDeEJTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlosR0FBakIsQ0FBcUJELFNBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0ksTUFBYixDQUFvQmQsU0FBcEI7QUFDRCxHQUhEO0FBS0FVLEVBQUFBLFlBQVksQ0FBQ1gsT0FBYixDQUFxQixVQUFBQyxTQUFTLEVBQUk7QUFDaENTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0JmLFNBQXhCO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUsIHNldCA9IG5ldyBTZXQoKSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBzZXQuYWRkKGNsYXNzTmFtZSkpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB2YWx1ZVtrZXldICYmIHNldC5hZGQoa2V5KSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0LmFkZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG5jb25zdCBjbGFzc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVDbGFzc0xpc3QoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkge1xuICBjb25zdCBwcmV2aW91c0xpc3QgPSBjbGFzc01hcC5nZXQodGFyZ2V0KSB8fCBuZXcgU2V0KCk7XG4gIGNvbnN0IGxpc3QgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgY2xhc3NNYXAuc2V0KHRhcmdldCwgbGlzdCk7XG5cbiAgbGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwcmV2aW91c0xpc3QuZGVsZXRlKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIHByZXZpb3VzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/event.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/event.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveEventListener; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var targets = new WeakMap();
function resolveEventListener(eventType) {
  return function (host, target, value, lastValue) {
    if (lastValue) {
      var eventMap = targets.get(target);

      if (eventMap) {
        target.removeEventListener(eventType, eventMap.get(lastValue), lastValue.options !== undefined ? lastValue.options : false);
      }
    }

    if (value) {
      if (typeof value !== "function") {
        throw Error("Event listener must be a function: ".concat(_typeof(value)));
      }

      var _eventMap = targets.get(target);

      if (!_eventMap) {
        _eventMap = new WeakMap();
        targets.set(target, _eventMap);
      }

      var callback = value.bind(null, host);

      _eventMap.set(value, callback);

      target.addEventListener(eventType, callback, value.options !== undefined ? value.options : false);
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvZXZlbnQuanMiXSwibmFtZXMiOlsidGFyZ2V0cyIsIldlYWtNYXAiLCJyZXNvbHZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhvc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsImV2ZW50TWFwIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInNldCIsImNhbGxiYWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN0RCxTQUFPLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCQyxTQUF0QixFQUFvQztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDYixVQUFNQyxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWpCOztBQUNBLFVBQUlHLFFBQUosRUFBYztBQUNaSCxRQUFBQSxNQUFNLENBQUNLLG1CQUFQLENBQ0VQLFNBREYsRUFFRUssUUFBUSxDQUFDQyxHQUFULENBQWFGLFNBQWIsQ0FGRixFQUdFQSxTQUFTLENBQUNJLE9BQVYsS0FBc0JDLFNBQXRCLEdBQWtDTCxTQUFTLENBQUNJLE9BQTVDLEdBQXNELEtBSHhEO0FBS0Q7QUFDRjs7QUFFRCxRQUFJTCxLQUFKLEVBQVc7QUFDVCxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsY0FBTU8sS0FBSyxzREFBOENQLEtBQTlDLEdBQVg7QUFDRDs7QUFFRCxVQUFJRSxTQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWY7O0FBQ0EsVUFBSSxDQUFDRyxTQUFMLEVBQWU7QUFDYkEsUUFBQUEsU0FBUSxHQUFHLElBQUlQLE9BQUosRUFBWDtBQUNBRCxRQUFBQSxPQUFPLENBQUNjLEdBQVIsQ0FBWVQsTUFBWixFQUFvQkcsU0FBcEI7QUFDRDs7QUFFRCxVQUFNTyxRQUFRLEdBQUdULEtBQUssQ0FBQ1UsSUFBTixDQUFXLElBQVgsRUFBaUJaLElBQWpCLENBQWpCOztBQUNBSSxNQUFBQSxTQUFRLENBQUNNLEdBQVQsQ0FBYVIsS0FBYixFQUFvQlMsUUFBcEI7O0FBRUFWLE1BQUFBLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FDRWQsU0FERixFQUVFWSxRQUZGLEVBR0VULEtBQUssQ0FBQ0ssT0FBTixLQUFrQkMsU0FBbEIsR0FBOEJOLEtBQUssQ0FBQ0ssT0FBcEMsR0FBOEMsS0FIaEQ7QUFLRDtBQUNGLEdBaENEO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSkgPT4ge1xuICAgIGlmIChsYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0gdGFyZ2V0cy5nZXQodGFyZ2V0KTtcbiAgICAgIGlmIChldmVudE1hcCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgZXZlbnRNYXAuZ2V0KGxhc3RWYWx1ZSksXG4gICAgICAgICAgbGFzdFZhbHVlLm9wdGlvbnMgIT09IHVuZGVmaW5lZCA/IGxhc3RWYWx1ZS5vcHRpb25zIDogZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYEV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE1hcCA9IHRhcmdldHMuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWV2ZW50TWFwKSB7XG4gICAgICAgIGV2ZW50TWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGFyZ2V0cy5zZXQodGFyZ2V0LCBldmVudE1hcCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUuYmluZChudWxsLCBob3N0KTtcbiAgICAgIGV2ZW50TWFwLnNldCh2YWx1ZSwgY2FsbGJhY2spO1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdmFsdWUub3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gdmFsdWUub3B0aW9ucyA6IGZhbHNlLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/property.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveProperty; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/hybrids/esm/template/resolvers/event.js");
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.js */ "./node_modules/hybrids/esm/template/resolvers/class.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.js */ "./node_modules/hybrids/esm/template/resolvers/style.js");



function resolveProperty(attrName, propertyName, isSVG) {
  if (propertyName.substr(0, 2) === "on") {
    var eventType = propertyName.substr(2);
    return Object(_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])(eventType);
  }

  switch (attrName) {
    case "class":
      return _class_js__WEBPACK_IMPORTED_MODULE_1__["default"];

    case "style":
      return _style_js__WEBPACK_IMPORTED_MODULE_2__["default"];

    default:
      return function (host, target, value) {
        if (!isSVG && !(target instanceof SVGElement) && propertyName in target) {
          if (target[propertyName] !== value) {
            target[propertyName] = value;
          }
        } else if (value === false || value === undefined || value === null) {
          target.removeAttribute(attrName);
        } else {
          var attrValue = value === true ? "" : String(value);
          target.setAttribute(attrName, attrValue);
        }
      };
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlQ2xhc3NMaXN0IiwicmVzb2x2ZVN0eWxlTGlzdCIsInJlc29sdmVQcm9wZXJ0eSIsImF0dHJOYW1lIiwicHJvcGVydHlOYW1lIiwiaXNTVkciLCJzdWJzdHIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJTVkdFbGVtZW50IiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0clZhbHVlIiwiU3RyaW5nIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBUCxNQUFpQyxZQUFqQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLFlBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsWUFBN0I7QUFFQSxlQUFlLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxZQUFuQyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDckUsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsV0FBT1Asb0JBQW9CLENBQUNRLFNBQUQsQ0FBM0I7QUFDRDs7QUFFRCxVQUFRSixRQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBT0gsZ0JBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBT0MsZ0JBQVA7O0FBQ0Y7QUFDRSxhQUFPLFVBQUNPLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQzlCLFlBQ0UsQ0FBQ0wsS0FBRCxJQUNBLEVBQUVJLE1BQU0sWUFBWUUsVUFBcEIsQ0FEQSxJQUVBUCxZQUFZLElBQUlLLE1BSGxCLEVBSUU7QUFDQSxjQUFJQSxNQUFNLENBQUNMLFlBQUQsQ0FBTixLQUF5Qk0sS0FBN0IsRUFBb0M7QUFDbENELFlBQUFBLE1BQU0sQ0FBQ0wsWUFBRCxDQUFOLEdBQXVCTSxLQUF2QjtBQUNEO0FBQ0YsU0FSRCxNQVFPLElBQUlBLEtBQUssS0FBSyxLQUFWLElBQW1CQSxLQUFLLEtBQUtFLFNBQTdCLElBQTBDRixLQUFLLEtBQUssSUFBeEQsRUFBOEQ7QUFDbkVELFVBQUFBLE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsUUFBdkI7QUFDRCxTQUZNLE1BRUE7QUFDTCxjQUFNVyxTQUFTLEdBQUdKLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCSyxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFDQUQsVUFBQUEsTUFBTSxDQUFDTyxZQUFQLENBQW9CYixRQUFwQixFQUE4QlcsU0FBOUI7QUFDRDtBQUNGLE9BZkQ7QUFOSjtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNvbHZlRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHJlc29sdmVDbGFzc0xpc3QgZnJvbSBcIi4vY2xhc3MuanNcIjtcbmltcG9ydCByZXNvbHZlU3R5bGVMaXN0IGZyb20gXCIuL3N0eWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVQcm9wZXJ0eShhdHRyTmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRykge1xuICBpZiAocHJvcGVydHlOYW1lLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cigyKTtcbiAgICByZXR1cm4gcmVzb2x2ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXR0ck5hbWUpIHtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgIHJldHVybiByZXNvbHZlQ2xhc3NMaXN0O1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZUxpc3Q7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU1ZHICYmXG4gICAgICAgICAgISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJlxuICAgICAgICAgIHByb3BlcnR5TmFtZSBpbiB0YXJnZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eU5hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/style.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/style.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveStyle; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/hybrids/esm/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var styleMap = new WeakMap();
function resolveStyle(host, target, value) {
  if (value === null || _typeof(value) !== "object") {
    throw TypeError("Style value must be an object in ".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(target), ":"), value);
  }

  var previousMap = styleMap.get(target) || new Map();
  var nextMap = Object.keys(value).reduce(function (map, key) {
    var dashKey = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(key);
    var styleValue = value[key];

    if (!styleValue && styleValue !== 0) {
      target.style.removeProperty(dashKey);
    } else {
      target.style.setProperty(dashKey, styleValue);
    }

    map.set(dashKey, styleValue);
    previousMap.delete(dashKey);
    return map;
  }, new Map());
  previousMap.forEach(function (styleValue, key) {
    target.style[key] = "";
  });
  styleMap.set(target, nextMap);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvc3R5bGUuanMiXSwibmFtZXMiOlsiY2FtZWxUb0Rhc2giLCJzdHJpbmdpZnlFbGVtZW50Iiwic3R5bGVNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZVN0eWxlIiwiaG9zdCIsInRhcmdldCIsInZhbHVlIiwiVHlwZUVycm9yIiwicHJldmlvdXNNYXAiLCJnZXQiLCJNYXAiLCJuZXh0TWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm1hcCIsImtleSIsImRhc2hLZXkiLCJzdHlsZVZhbHVlIiwic3R5bGUiLCJyZW1vdmVQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0IiwiZGVsZXRlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxnQkFBdEIsUUFBOEMsZ0JBQTlDO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBSUEsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUF2QyxFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLDRDQUN1QlAsZ0JBQWdCLENBQUNLLE1BQUQsQ0FEdkMsUUFFYkMsS0FGYSxDQUFmO0FBSUQ7O0FBRUQsTUFBTUUsV0FBVyxHQUFHUCxRQUFRLENBQUNRLEdBQVQsQ0FBYUosTUFBYixLQUF3QixJQUFJSyxHQUFKLEVBQTVDO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBWixFQUFtQlEsTUFBbkIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEQsUUFBTUMsT0FBTyxHQUFHbEIsV0FBVyxDQUFDaUIsR0FBRCxDQUEzQjtBQUNBLFFBQU1FLFVBQVUsR0FBR1osS0FBSyxDQUFDVSxHQUFELENBQXhCOztBQUVBLFFBQUksQ0FBQ0UsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkNiLE1BQUFBLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxjQUFiLENBQTRCSCxPQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMWixNQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUUsV0FBYixDQUF5QkosT0FBekIsRUFBa0NDLFVBQWxDO0FBQ0Q7O0FBRURILElBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTCxPQUFSLEVBQWlCQyxVQUFqQjtBQUNBVixJQUFBQSxXQUFXLENBQUNlLE1BQVosQ0FBbUJOLE9BQW5CO0FBRUEsV0FBT0YsR0FBUDtBQUNELEdBZGUsRUFjYixJQUFJTCxHQUFKLEVBZGEsQ0FBaEI7QUFnQkFGLEVBQUFBLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBb0IsVUFBQ04sVUFBRCxFQUFhRixHQUFiLEVBQXFCO0FBQ3ZDWCxJQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUgsR0FBYixJQUFvQixFQUFwQjtBQUNELEdBRkQ7QUFJQWYsRUFBQUEsUUFBUSxDQUFDcUIsR0FBVCxDQUFhakIsTUFBYixFQUFxQk0sT0FBckI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoLCBzdHJpbmdpZnlFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzLmpzXCI7XG5cbmNvbnN0IHN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBTdHlsZSB2YWx1ZSBtdXN0IGJlIGFuIG9iamVjdCBpbiAke3N0cmluZ2lmeUVsZW1lbnQodGFyZ2V0KX06YCxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c01hcCA9IHN0eWxlTWFwLmdldCh0YXJnZXQpIHx8IG5ldyBNYXAoKTtcblxuICBjb25zdCBuZXh0TWFwID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBjb25zdCBkYXNoS2V5ID0gY2FtZWxUb0Rhc2goa2V5KTtcbiAgICBjb25zdCBzdHlsZVZhbHVlID0gdmFsdWVba2V5XTtcblxuICAgIGlmICghc3R5bGVWYWx1ZSAmJiBzdHlsZVZhbHVlICE9PSAwKSB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShkYXNoS2V5LCBzdHlsZVZhbHVlKTtcbiAgICB9XG5cbiAgICBtYXAuc2V0KGRhc2hLZXksIHN0eWxlVmFsdWUpO1xuICAgIHByZXZpb3VzTWFwLmRlbGV0ZShkYXNoS2V5KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcHJldmlvdXNNYXAuZm9yRWFjaCgoc3R5bGVWYWx1ZSwga2V5KSA9PiB7XG4gICAgdGFyZ2V0LnN0eWxlW2tleV0gPSBcIlwiO1xuICB9KTtcblxuICBzdHlsZU1hcC5zZXQodGFyZ2V0LCBuZXh0TWFwKTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/value.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/value.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveValue; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/template/utils.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/hybrids/esm/template/resolvers/array.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // eslint-disable-next-line import/no-cycle


function resolveValue(host, target, value) {
  var type = Array.isArray(value) ? "array" : _typeof(value);
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target, {});

  if (data.type !== type) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(target);
    if (type === "array") _array_js__WEBPACK_IMPORTED_MODULE_1__["arrayMap"].delete(target);
    data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].set(target, {
      type: type
    });

    if (target.textContent !== "") {
      target.textContent = "";
    }
  }

  switch (type) {
    case "function":
      value(host, target);
      break;

    case "array":
      Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(host, target, value);
      break;

    default:
      target.textContent = type === "number" || value ? value : "";
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvdmFsdWUuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZUFycmF5IiwiYXJyYXlNYXAiLCJyZXNvbHZlVmFsdWUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImdldCIsImRlbGV0ZSIsInNldCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLGFBQXhDLEMsQ0FDQTs7QUFDQSxPQUFPQyxZQUFQLElBQXVCQyxRQUF2QixRQUF1QyxZQUF2QztBQUVBLGVBQWUsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQztBQUN4RCxNQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxLQUFkLElBQXVCLE9BQXZCLFdBQXdDQSxLQUF4QyxDQUFiO0FBQ0EsTUFBSUksSUFBSSxHQUFHWCxPQUFPLENBQUNZLEdBQVIsQ0FBWU4sTUFBWixFQUFvQixFQUFwQixDQUFYOztBQUVBLE1BQUlLLElBQUksQ0FBQ0gsSUFBTCxLQUFjQSxJQUFsQixFQUF3QjtBQUN0QlAsSUFBQUEsY0FBYyxDQUFDSyxNQUFELENBQWQ7QUFDQSxRQUFJRSxJQUFJLEtBQUssT0FBYixFQUFzQkwsUUFBUSxDQUFDVSxNQUFULENBQWdCUCxNQUFoQjtBQUV0QkssSUFBQUEsSUFBSSxHQUFHWCxPQUFPLENBQUNjLEdBQVIsQ0FBWVIsTUFBWixFQUFvQjtBQUFFRSxNQUFBQSxJQUFJLEVBQUpBO0FBQUYsS0FBcEIsQ0FBUDs7QUFFQSxRQUFJRixNQUFNLENBQUNTLFdBQVAsS0FBdUIsRUFBM0IsRUFBK0I7QUFDN0JULE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxHQUFxQixFQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBUVAsSUFBUjtBQUNFLFNBQUssVUFBTDtBQUNFRCxNQUFBQSxLQUFLLENBQUNGLElBQUQsRUFBT0MsTUFBUCxDQUFMO0FBQ0E7O0FBQ0YsU0FBSyxPQUFMO0FBQ0VKLE1BQUFBLFlBQVksQ0FBQ0csSUFBRCxFQUFPQyxNQUFQLEVBQWVDLEtBQWYsQ0FBWjtBQUNBOztBQUNGO0FBQ0VELE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxHQUFxQlAsSUFBSSxLQUFLLFFBQVQsSUFBcUJELEtBQXJCLEdBQTZCQSxLQUE3QixHQUFxQyxFQUExRDtBQVJKO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHJlc29sdmVBcnJheSwgeyBhcnJheU1hcCB9IGZyb20gXCIuL2FycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVWYWx1ZShob3N0LCB0YXJnZXQsIHZhbHVlKSB7XG4gIGNvbnN0IHR5cGUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiYXJyYXlcIiA6IHR5cGVvZiB2YWx1ZTtcbiAgbGV0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHt9KTtcblxuICBpZiAoZGF0YS50eXBlICE9PSB0eXBlKSB7XG4gICAgcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KTtcbiAgICBpZiAodHlwZSA9PT0gXCJhcnJheVwiKSBhcnJheU1hcC5kZWxldGUodGFyZ2V0KTtcblxuICAgIGRhdGEgPSBkYXRhTWFwLnNldCh0YXJnZXQsIHsgdHlwZSB9KTtcblxuICAgIGlmICh0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICB2YWx1ZShob3N0LCB0YXJnZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFycmF5XCI6XG4gICAgICByZXNvbHZlQXJyYXkoaG9zdCwgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB2YWx1ZSA/IHZhbHVlIDogXCJcIjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/template/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/hybrids/esm/template/utils.js ***!
  \****************************************************/
/*! exports provided: dataMap, getTemplateEnd, removeTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataMap", function() { return dataMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateEnd", function() { return getTemplateEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTemplate", function() { return removeTemplate; });
var map = new WeakMap();
var dataMap = {
  get: function get(key, defaultValue) {
    var value = map.get(key);
    if (value) return value;

    if (defaultValue) {
      map.set(key, defaultValue);
    }

    return defaultValue;
  },
  set: function set(key, value) {
    map.set(key, value);
    return value;
  }
};
function getTemplateEnd(node) {
  var data; // eslint-disable-next-line no-cond-assign

  while (node && (data = dataMap.get(node)) && data.endNode) {
    node = data.endNode;
  }

  return node;
}
function removeTemplate(target) {
  if (target.nodeType !== Node.TEXT_NODE) {
    var child = target.childNodes[0];

    while (child) {
      target.removeChild(child);
      child = target.childNodes[0];
    }
  } else {
    var data = dataMap.get(target);

    if (data.startNode) {
      var endNode = getTemplateEnd(data.endNode);
      var node = data.startNode;
      var lastNextSibling = endNode.nextSibling;

      while (node) {
        var nextSibling = node.nextSibling;
        node.parentNode.removeChild(node);
        node = nextSibling !== lastNextSibling && nextSibling;
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXAiLCJXZWFrTWFwIiwiZGF0YU1hcCIsImdldCIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0IiwiZ2V0VGVtcGxhdGVFbmQiLCJub2RlIiwiZGF0YSIsImVuZE5vZGUiLCJyZW1vdmVUZW1wbGF0ZSIsInRhcmdldCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwic3RhcnROb2RlIiwibGFzdE5leHRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsT0FBTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEdBRHFCLGVBQ2pCQyxHQURpQixFQUNaQyxZQURZLEVBQ0U7QUFDckIsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNHLEdBQUosQ0FBUUMsR0FBUixDQUFkO0FBQ0EsUUFBSUUsS0FBSixFQUFXLE9BQU9BLEtBQVA7O0FBRVgsUUFBSUQsWUFBSixFQUFrQjtBQUNoQkwsTUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFILEdBQVIsRUFBYUMsWUFBYjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVZvQjtBQVdyQkUsRUFBQUEsR0FYcUIsZUFXakJILEdBWGlCLEVBV1pFLEtBWFksRUFXTDtBQUNkTixJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUUgsR0FBUixFQUFhRSxLQUFiO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBZG9CLENBQWhCO0FBaUJQLE9BQU8sU0FBU0UsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSUMsSUFBSixDQURtQyxDQUVuQzs7QUFDQSxTQUFPRCxJQUFJLEtBQUtDLElBQUksR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVosQ0FBWixDQUFKLElBQXNDQyxJQUFJLENBQUNDLE9BQWxELEVBQTJEO0FBQ3pERixJQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsT0FBWjtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0csY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBSUEsTUFBTSxDQUFDQyxRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDLFFBQUlDLEtBQUssR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLENBQWxCLENBQVo7O0FBQ0EsV0FBT0QsS0FBUCxFQUFjO0FBQ1pKLE1BQUFBLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkYsS0FBbkI7QUFDQUEsTUFBQUEsS0FBSyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBUjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0wsUUFBTVIsSUFBSSxHQUFHUixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsTUFBWixDQUFiOztBQUVBLFFBQUlILElBQUksQ0FBQ1UsU0FBVCxFQUFvQjtBQUNsQixVQUFNVCxPQUFPLEdBQUdILGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFOLENBQTlCO0FBRUEsVUFBSUYsSUFBSSxHQUFHQyxJQUFJLENBQUNVLFNBQWhCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHVixPQUFPLENBQUNXLFdBQWhDOztBQUVBLGFBQU9iLElBQVAsRUFBYTtBQUNYLFlBQU1hLFdBQVcsR0FBR2IsSUFBSSxDQUFDYSxXQUF6QjtBQUNBYixRQUFBQSxJQUFJLENBQUNjLFVBQUwsQ0FBZ0JKLFdBQWhCLENBQTRCVixJQUE1QjtBQUNBQSxRQUFBQSxJQUFJLEdBQUdhLFdBQVcsS0FBS0QsZUFBaEIsSUFBbUNDLFdBQTFDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IGRhdGFNYXAgPSB7XG4gIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgbWFwLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSxcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUVuZChub2RlKSB7XG4gIGxldCBkYXRhO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKG5vZGUgJiYgKGRhdGEgPSBkYXRhTWFwLmdldChub2RlKSkgJiYgZGF0YS5lbmROb2RlKSB7XG4gICAgbm9kZSA9IGRhdGEuZW5kTm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbMF07XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoZGF0YS5zdGFydE5vZGUpIHtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBnZXRUZW1wbGF0ZUVuZChkYXRhLmVuZE5vZGUpO1xuXG4gICAgICBsZXQgbm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICAgICAgY29uc3QgbGFzdE5leHRTaWJsaW5nID0gZW5kTm9kZS5uZXh0U2libGluZztcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZyAhPT0gbGFzdE5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/utils.js ***!
  \*******************************************/
/*! exports provided: camelToDash, pascalToDash, dispatch, shadyCSS, stringifyElement, IS_IE, deferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDash", function() { return camelToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalToDash", function() { return pascalToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadyCSS", function() { return shadyCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyElement", function() { return stringifyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IE", function() { return IS_IE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferred", function() { return deferred; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelToDashMap = new Map();
function camelToDash(str) {
  var result = camelToDashMap.get(str);

  if (result === undefined) {
    result = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    camelToDashMap.set(str, result);
  }

  return result;
}
function pascalToDash(str) {
  return camelToDash(str.replace(/((?!([A-Z]{2}|^))[A-Z])/g, "-$1"));
}
function dispatch(host, eventType) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return host.dispatchEvent(new CustomEvent(eventType, _objectSpread({
    bubbles: false
  }, options)));
}
function shadyCSS(fn, fallback) {
  var shady = window.ShadyCSS;
  /* istanbul ignore next */

  if (shady && !shady.nativeShadow) {
    return fn(shady);
  }

  return fallback;
}
function stringifyElement(element) {
  var tagName = String(element.tagName).toLowerCase();
  return "<".concat(tagName, ">");
}
var IS_IE = "ActiveXObject" in window;
var deferred = Promise.resolve();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaE1hcCIsIk1hcCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVzdWx0IiwiZ2V0IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0IiwicGFzY2FsVG9EYXNoIiwiZGlzcGF0Y2giLCJob3N0IiwiZXZlbnRUeXBlIiwib3B0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJzaGFkeUNTUyIsImZuIiwiZmFsbGJhY2siLCJzaGFkeSIsIndpbmRvdyIsIlNoYWR5Q1NTIiwibmF0aXZlU2hhZG93Iiwic3RyaW5naWZ5RWxlbWVudCIsImVsZW1lbnQiLCJ0YWdOYW1lIiwiU3RyaW5nIiwiSVNfSUUiLCJkZWZlcnJlZCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsSUFBSUMsR0FBSixFQUF2QjtBQUNBLE9BQU8sU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDL0IsTUFBSUMsTUFBTSxHQUFHSixjQUFjLENBQUNLLEdBQWYsQ0FBbUJGLEdBQW5CLENBQWI7O0FBQ0EsTUFBSUMsTUFBTSxLQUFLRSxTQUFmLEVBQTBCO0FBQ3hCRixJQUFBQSxNQUFNLEdBQUdELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFUO0FBQ0FSLElBQUFBLGNBQWMsQ0FBQ1MsR0FBZixDQUFtQk4sR0FBbkIsRUFBd0JDLE1BQXhCO0FBQ0Q7O0FBQ0QsU0FBT0EsTUFBUDtBQUNEO0FBRUQsT0FBTyxTQUFTTSxZQUFULENBQXNCUCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPRCxXQUFXLENBQUNDLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLDBCQUFaLEVBQXdDLEtBQXhDLENBQUQsQ0FBbEI7QUFDRDtBQUVELE9BQU8sU0FBU0ksUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQWlEO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3RELFNBQU9GLElBQUksQ0FBQ0csYUFBTCxDQUNMLElBQUlDLFdBQUosQ0FBZ0JILFNBQWhCO0FBQTZCSSxJQUFBQSxPQUFPLEVBQUU7QUFBdEMsS0FBZ0RILE9BQWhELEVBREssQ0FBUDtBQUdEO0FBRUQsT0FBTyxTQUFTSSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDckMsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQXJCO0FBRUE7O0FBQ0EsTUFBSUYsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0csWUFBcEIsRUFBa0M7QUFDaEMsV0FBT0wsRUFBRSxDQUFDRSxLQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNLLGdCQUFULENBQTBCQyxPQUExQixFQUFtQztBQUN4QyxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDQyxPQUFULENBQU4sQ0FBd0JuQixXQUF4QixFQUFoQjtBQUNBLG9CQUFXbUIsT0FBWDtBQUNEO0FBRUQsT0FBTyxJQUFNRSxLQUFLLEdBQUcsbUJBQW1CUCxNQUFqQztBQUNQLE9BQU8sSUFBTVEsUUFBUSxHQUFHQyxPQUFPLENBQUNDLE9BQVIsRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW1lbFRvRGFzaE1hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaChzdHIpIHtcbiAgbGV0IHJlc3VsdCA9IGNhbWVsVG9EYXNoTWFwLmdldChzdHIpO1xuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXN1bHQgPSBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhbWVsVG9EYXNoTWFwLnNldChzdHIsIHJlc3VsdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbFRvRGFzaChzdHIpIHtcbiAgcmV0dXJuIGNhbWVsVG9EYXNoKHN0ci5yZXBsYWNlKC8oKD8hKFtBLVpdezJ9fF4pKVtBLVpdKS9nLCBcIi0kMVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChob3N0LCBldmVudFR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gaG9zdC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgYnViYmxlczogZmFsc2UsIC4uLm9wdGlvbnMgfSksXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkeUNTUyhmbiwgZmFsbGJhY2spIHtcbiAgY29uc3Qgc2hhZHkgPSB3aW5kb3cuU2hhZHlDU1M7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHNoYWR5ICYmICFzaGFkeS5uYXRpdmVTaGFkb3cpIHtcbiAgICByZXR1cm4gZm4oc2hhZHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHRhZ05hbWUgPSBTdHJpbmcoZWxlbWVudC50YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gYDwke3RhZ05hbWV9PmA7XG59XG5cbmV4cG9ydCBjb25zdCBJU19JRSA9IFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdztcbmV4cG9ydCBjb25zdCBkZWZlcnJlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xuIl19

/***/ })

}]);