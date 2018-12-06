import {JetView,plugins} from "webix-jet";

export default class MenuView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"sidebar",
			css:theme.sidebar,
			width:200,
			collapsed:true,
			tooltip:{
				template:"#value#"
			},
			data:[
				{ id:"dashboard", value:"Dashboard", icon:"mdi mdi-doctor" },
				{ id:"widgets", value:"Widgets", icon:"mdi mdi-widgets" },
				{ id:"demos", value:"Demos", icon:"mdi mdi-monitor-dashboard" },
				{ id:"prices", value:"Prices", icon:"mdi mdi-currency-usd" },
				{ id:"tutorials", value:"Tutorials", icon:"mdi mdi-school" }
			]
		};
	}
	init(sidebar){
		this.use(plugins.Menu,sidebar);
		sidebar.getPopup().attachEvent("onBeforeShow",() => false);

		this.on(this.app,"menu:toggle",() => {
			sidebar.toggle();
			if (sidebar.config.collapsed)
				sidebar.config.tooltip.enable();
			else
				sidebar.config.tooltip.disable();
		});
	}
	urlChange(){
		if (this.getUrl()[2])
			this.getRoot().unselect();
	}
}
