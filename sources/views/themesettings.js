import {JetView} from "webix-jet";

export default class ThemeSettingsView extends JetView {
	config(){
		return {
			view:"popup",
			width:146, height:312,
			body:{
				type:"clean", rows:[
					{ view:"label", css:"theme_settings", template:"Main layout" },
					{
						view:"dataview", localId:"layout_theme",
						css:"theme_options",
						select:true,
						borderless:true,
						type:{
							type:"tiles",
							width:"auto",
							template:obj => `${obj.value}`
						},
						on:{
							onAfterSelect:id => {
								const newTheme = id === "dark" ? "webix_dark" : "";
								this.app.config.theme = newTheme;
								webix.storage.session.put("doctor_demo_theme",newTheme);
								this.app.refresh();
							}
						},
						data:[
							{ id:"light", value:"Light" },
							{ id:"dark", value:"Dark" }
						]
					},
					{ view:"label", css:"theme_settings", template:"Toolbar color" },
					{
						view:"dataview", select:true,
						css:"theme_options",
						borderless:true,
						type:{
							type:"tiles",
							width:"auto",
							template:obj => `${obj.value}`
						},
						data:[
							{ id:"light", value:"Light" },
							{ id:"dark", value:"Dark" }
						]
					},
					{ view:"label", css:"theme_settings", template:"Sidebar color" },
					{
						view:"dataview", select:true,
						borderless:true,
						css:"theme_options",
						type:{
							type:"tiles",
							width:"auto",
							template:obj => `${obj.value}`
						},
						data:[
							{ id:"light", value:"Light" },
							{ id:"dark", value:"Dark" }
						]
					}
				]
			}
		}
	}
	showPopup(position){
		this.getRoot().show(position);
	}
}