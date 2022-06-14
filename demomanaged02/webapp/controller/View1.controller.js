sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("ns.demomanaged02.demomanaged02.controller.View1", {
            onInit: function () {
                let myPath = window.location.pathname
                let myPathWithoutFile = myPath.substring(0, myPath.lastIndexOf('/'));
                var sUrl = myPathWithoutFile + "/user-api/currentUser";
                var oView = this.getView();
                jQuery.ajax({
                    url: sUrl,
                    method: "GET",
                    success: function (oResponse) {
                        oResponse = JSON.parse(oResponse);
                        var lv_title = "Hi " + oResponse.displayName;
                        oView.byId("page0").setTitle(lv_title);
                    },
                    error: function () { }
                });

            }
        });
    });
