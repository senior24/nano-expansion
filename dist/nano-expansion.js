(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.NanoExpansion = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var NanoExpansion = /*#__PURE__*/function () {
    function NanoExpansion(_ref) {
      var _this = this;

      var _ref$wrapper = _ref.wrapper,
          wrapper = _ref$wrapper === void 0 ? "" : _ref$wrapper,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.2 : _ref$duration,
          _ref$autoFolding = _ref.autoFolding,
          autoFolding = _ref$autoFolding === void 0 ? false : _ref$autoFolding;

      _classCallCheck(this, NanoExpansion);

      this.duration = duration;
      this.isAutoFolding = autoFolding;

      try {
        this.wrapper = document.querySelector(wrapper);
        if (this.wrapper.length === 0) return console.error("NanoExpansion: Wrapper element not found!");
      } catch (err) {
        return console.error("NanoExpansion: The wrapper id's cannot be empty!");
      }

      this.expansions = this.wrapper.querySelectorAll(".nano-expansion");
      if (this.expansions.length === 0) return console.error("NanoExpansion: Expansion element not found!");
      this.expansions.forEach(function (expansion, index) {
        var expansionToggle = expansion.children[0];
        expansionToggle.addEventListener("click", _this.evenHandler.bind(_this), false);
        expansionToggle.style.transition = _this.duration + "s";
        expansion.setAttribute("open", "no");
        expansion.setAttribute("index", index);
        expansion.style.maxHeight = expansionToggle.scrollHeight + "px";
        expansion.style.transition = "max-height " + _this.duration + "s";
      });
    }

    _createClass(NanoExpansion, [{
      key: "evenHandler",
      value: function evenHandler(e) {
        var parent = e.target.parentElement;

        if (this.isAutoFolding) {
          for (var i = 0; i < this.expansions.length; i++) {
            if (i !== parseInt(parent.getAttribute("index"))) {
              this.hideExpansion(this.expansions[i]);
            }
          }
        }

        if (parent.getAttribute("open") === "no") {
          this.showExpansion(parent);
        } else {
          this.hideExpansion(parent);
        }
      }
    }, {
      key: "showExpansion",
      value: function showExpansion(element) {
        var expansionToggle = element.children[0];
        expansionToggle.classList.add("active");
        element.style.maxHeight = element.scrollHeight + "px";
        element.setAttribute("open", "yes");
      }
    }, {
      key: "hideExpansion",
      value: function hideExpansion(element) {
        var expansionToggle = element.children[0];
        expansionToggle.classList.remove("active");
        element.style.maxHeight = expansionToggle.scrollHeight + "px";
        element.setAttribute("open", "no");
      }
    }]);

    return NanoExpansion;
  }();

  return NanoExpansion;

})));
