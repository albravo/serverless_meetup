sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("slfrontend.controller.View1", {
			onInit: function () {
                
                var oView = this.getView();
                oView.setBusy(true);
                fetch('https://conexion.c-4eecc85.kyma.shoot.live.k8s-hana.ondemand.com/')
                    .then(function(response) {
                        return response.text();
                    })
                    .then(function(data) {
                        console.log('data = ', data);
                        var oModel = new JSONModel(JSON.parse(data));
                        oView.setModel(oModel);
                        oView.setBusy(false);
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            },

            getRandomColor: function () {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
		});
	});
