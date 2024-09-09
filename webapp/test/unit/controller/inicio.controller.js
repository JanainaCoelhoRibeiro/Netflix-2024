/*global QUnit*/

sap.ui.define([
	"projeto_netflix/controller/inicio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("inicio Controller");

	QUnit.test("I should test the inicio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
