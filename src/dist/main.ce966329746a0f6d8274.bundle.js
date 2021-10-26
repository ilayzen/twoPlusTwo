/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function render() {
  //connect library to head for fixing float numbers;
  var script = document.createElement('script');
  script.setAttribute('src', 'src/big.js'); // create first input;

  var inputFir = document.createElement('input');
  inputFir.setAttribute('type', 'text');
  inputFir.setAttribute('class', 'fir'); // create second input;

  var inputSec = document.createElement('input');
  inputSec.setAttribute('type', 'text');
  inputSec.setAttribute('class', 'sec'); //create tag 'br' for a carryover second input;

  var br = document.createElement('br'); //create tag 'br' for a carryover button;

  var brSec = document.createElement('br'); //create div  for output the result;

  var divOne = document.createElement('div');
  divOne.setAttribute('class', 'error-message'); //create button;

  var button = document.createElement('button');
  button.innerText = 'count'; //bind all elements to the 'body' tag;

  var body = document.querySelector('body'); //bind library 'head' tag;

  var head = document.querySelector('head'); //output elements;

  body.appendChild(inputFir);
  body.appendChild(br);
  body.appendChild(inputSec);
  body.appendChild(brSec);
  body.appendChild(button);
  body.appendChild(divOne);
  head.appendChild(script); //applying 'onClick' for checking when user click on button;

  document.querySelector('button').onclick = sum; // function for a count result;

  function sum() {
    var a = document.querySelector('.fir').value;
    var b = document.querySelector('.sec').value;
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b) || a === Infinity || b === Infinity) {
      document.querySelector('.error-message').innerHTML = 'this is not a number!';
    } else {
      var one = new Big(a);
      var two = new Big(b);
      document.querySelector('.error-message').innerHTML = one.plus(two);
    }
  }
}

window.addEventListener('load', render);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlbmRlciIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlucHV0RmlyIiwiaW5wdXRTZWMiLCJiciIsImJyU2VjIiwiZGl2T25lIiwiYnV0dG9uIiwiaW5uZXJUZXh0IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJvbmNsaWNrIiwic3VtIiwiYSIsInZhbHVlIiwiYiIsIk51bWJlciIsImlzTmFOIiwiSW5maW5pdHkiLCJpbm5lckhUTUwiLCJvbmUiLCJCaWciLCJ0d28iLCJwbHVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNB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USxDQUFDVyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q1csU0FBekMsR0FBcURDLEdBQUcsQ0FBQ0csSUFBSixDQUFTRCxHQUFULENBQXJEO0FBQ0g7QUFDSjtBQUNKOztBQUVERSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDOUIsTUFBaEMsRSIsImZpbGUiOiJtYWluLmNlOTY2MzI5NzQ2YTBmNmQ4Mjc0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gcmVuZGVyKCkge1xuLy9jb25uZWN0IGxpYnJhcnkgdG8gaGVhZCBmb3IgZml4aW5nIGZsb2F0IG51bWJlcnM7XG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdzcmMvYmlnLmpzJyk7XG5cbi8vIGNyZWF0ZSBmaXJzdCBpbnB1dDtcbiAgICBsZXQgaW5wdXRGaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RmlyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRGaXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaXInKTtcblxuLy8gY3JlYXRlIHNlY29uZCBpbnB1dDtcbiAgICBsZXQgaW5wdXRTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0U2VjLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRTZWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWMnKTtcblxuLy9jcmVhdGUgdGFnICdicicgZm9yIGEgY2FycnlvdmVyIHNlY29uZCBpbnB1dDtcbiAgICBsZXQgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4vL2NyZWF0ZSB0YWcgJ2JyJyBmb3IgYSBjYXJyeW92ZXIgYnV0dG9uO1xuICAgIGxldCBiclNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbi8vY3JlYXRlIGRpdiAgZm9yIG91dHB1dCB0aGUgcmVzdWx0O1xuICAgIGxldCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZPbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlcnJvci1tZXNzYWdlJyk7XG5cbi8vY3JlYXRlIGJ1dHRvbjtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ2NvdW50JztcblxuLy9iaW5kIGFsbCBlbGVtZW50cyB0byB0aGUgJ2JvZHknIHRhZztcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy9iaW5kIGxpYnJhcnkgJ2hlYWQnIHRhZztcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcblxuLy9vdXRwdXQgZWxlbWVudHM7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dEZpcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChicik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dFNlYyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChiclNlYyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2T25lKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbi8vYXBwbHlpbmcgJ29uQ2xpY2snIGZvciBjaGVja2luZyB3aGVuIHVzZXIgY2xpY2sgb24gYnV0dG9uO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLm9uY2xpY2sgPSBzdW07XG5cbi8vIGZ1bmN0aW9uIGZvciBhIGNvdW50IHJlc3VsdDtcbiAgICBmdW5jdGlvbiBzdW0oKSB7XG4gICAgICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcicpLnZhbHVlO1xuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWMnKS52YWx1ZTtcblxuICAgICAgICBhID0gTnVtYmVyKGEpO1xuICAgICAgICBiID0gTnVtYmVyKGIpO1xuXG4gICAgICAgIGlmIChpc05hTihhKSB8fCBpc05hTihiKSB8fCBhID09PSBJbmZpbml0eSB8fCBiID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKS5pbm5lckhUTUwgPSAoJ3RoaXMgaXMgbm90IGEgbnVtYmVyIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9uZSA9IG5ldyBCaWcoYSk7XG4gICAgICAgICAgICBsZXQgdHdvID0gbmV3IEJpZyhiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJykuaW5uZXJIVE1MID0gb25lLnBsdXModHdvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZW5kZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==