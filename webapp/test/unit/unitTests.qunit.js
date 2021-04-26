/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sl_frontend/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
