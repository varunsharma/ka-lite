(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.extend(KhanUtil,{coinFlips:function(n){if(0===n)return[["",0]];var t=KhanUtil.coinFlips(n-1),i=$.map(t,function(n,t){var i=n[0],o=n[1];return[[i18n._("H")+i,o+1]]}),o=$.map(t,function(n,t){var i=n[0],o=n[1];return[[i18n._("T")+i,o]]});return i.concat(o)},choose:function(n,t){if("number"==typeof t)return 2*t>n?KhanUtil.choose(n,n-t):t>.5?KhanUtil.choose(n,t-1)*(n-t+1)/t:Math.abs(t)<=.5?1:0;var i=0;return $.each(t,function(t,o){i+=KhanUtil.choose(n,o)}),i}});
},{}]},{},[1]);
