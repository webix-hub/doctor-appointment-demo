import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		return {
			view:"sidebar",
			css:theme,
			width:200,
			data:[
				{ id:"transactions", value:"Transactions", icon:"mdi mdi-cart" },
				{ id:"customers", value:"Customers", icon:"mdi mdi-account-box" },
				{ id:"payhistoryview", value:"Payment History", icon:"mdi mdi-chart-areaspline" },
				{ id:"widgets", value:"Widgets", icon:"mdi mdi-widgets" },
				{ id:"demos", value:"Demos", icon:"mdi mdi-monitor-dashboard" },
				{ id:"prices", value:"Prices", icon:"mdi mdi-currency-usd" },
				{ id:"tutorials", value:"Tutorials", icon:"mdi mdi-school" }
			]
		};
	}
	init(sidebar){
		this.use(plugins.Menu,sidebar);
		this.on(this.app,"menu:toggle",() => sidebar.toggle());
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);
	}
}
