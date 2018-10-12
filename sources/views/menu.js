import {JetView} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		return {
			view:"sidebar",
			width:200,
			collapsed:true,
			data:[
				{ id:"dashboard", value:"", icon:"mdi mdi-doctor" },
				{ id:"cube", value:"", icon:"mdi mdi-cube" },
				{ id:"code", value:"", icon:"mdi mdi-code-not-equal-variant" },
				{ id:"layout", value:"", icon:"mdi mdi-view-dashboard" },
				{ id:"charts", value:"", icon:"mdi mdi-chart-areaspline" },
				{ id:"typo", value:"", icon:"mdi mdi-format-line-style" },
				{ id:"calendar", value:"", icon:"mdi mdi-calendar" },
				{ id:"files", value:"", icon:"mdi mdi-folder-star" },
			]
		};
	}
	init(sidebar){
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
		sidebar.select("dashboard");
	}
}
