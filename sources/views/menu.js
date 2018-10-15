import {JetView} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		return {
			view:"sidebar",
			width:200,
			collapsed:true,
			data:[
				{ id:"dashboard", icon:"mdi mdi-doctor" },
				{ id:"cube", icon:"mdi mdi-cube" },
				{ id:"code", icon:"mdi mdi-code-not-equal-variant" },
				{ id:"layout", icon:"mdi mdi-view-dashboard" },
				{ id:"charts", icon:"mdi mdi-chart-areaspline" },
				{ id:"typo", icon:"mdi mdi-format-line-style" },
				{ id:"calendar", icon:"mdi mdi-calendar" },
				{ id:"files", icon:"mdi mdi-folder-star" },
			]
		};
	}
	init(sidebar){
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
		sidebar.select("dashboard");
	}
}
