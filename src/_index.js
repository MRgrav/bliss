import $ from "./$.js";
import $$ from "./$$.js";

import overload from "./overload.js";
import extend from "./extend.js";
import type from "./type.js";

import create from "./create.js";
import set, {setProps} from "./dom/set.js";
import toggleAttribute from "./dom/toggleAttribute.js";
import each  from "./each.js";
import ready from "./ready.js";
import value from "./value.js";
import Class from "./Class.js";
import Hooks from "./Hooks.js";
import fetch from "./fetch.js";

import bind   from "./events/bind.js";
import unbind from "./events/unbind.js";
import events from "./events/events.js";
import fire   from "./events/fire.js";
import when   from "./events/when.js";

import add from "./add.js";

(function() {
"use strict";

let Bliss = extend($, self.Bliss);

extend($, {
	extend,
	overload,
	type,

	property: $.property || "_",

	$: $$,

	create,
	each,
	ready,

	Class,
	live,
	lazy,

	include,
	load,

	fetch,

	value,

	Hooks,
	hooks: new Hooks()
});

var _ = $.property;

$.Element = function (subject) {
	this.subject = subject;

	// Author-defined element-related data
	this.data = {};

	// Internal Bliss element-related data
	this.bliss = {};
};

$.Element.prototype = {
	set,
	transition,
	fire,
	when,
	toggleAttribute
};

$.Array = function (subject) {
	this.subject = subject;
};

$.Array.prototype = {
	all: function(method) {
		var args = Array.from(arguments).slice(1);

		return this[method].apply(this, args);
	}
};

add($.Array.prototype, {element: false});
add($.Element.prototype);
add(setProps);

// Add native methods on $ and _
var dummy = document.createElement("_");
add($.extend({}, HTMLElement.prototype, function(method) {
	return $.type(dummy[method]) === "function";
}), null, true);


})();
