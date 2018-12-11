import {JetView} from "webix-jet";

export default class ThemeSettingsView extends JetView {
	dataview(name){
		return {
			paddingY:10, rows:[
				{ view:"label", height:20, css:"theme_settings", label:name + " color" },
				{
					view:"dataview",
					css:"theme_options",
					select:true,
					borderless:true,
					type:{
						type:"tiles",
						width:"auto",
						template:obj => `<span class="theme_color">${obj.value}</span>`
					},
					on:{
						onAfterSelect:id => {
							const newTheme = id == "dark" ? "webix_dark" : "";
							name = name.toLowerCase();

							if (name == "theme")
								for (let k in this.app.config.theme)
									this.app.config.theme[k] = newTheme;
							else
								this.app.config.theme[name] = newTheme;

							try{
								webix.storage.session.put("doctor_demo_theme",this.app.config.theme);
							}
							catch(err){/* for blocked cookies */}

							this.app.refresh();
						}
					},
					data:[
						{ id:"light", value:"Light", $css:"light_theme_option" },
						{ id:"dark", value:"Dark", $css:"dark_theme_option" }
					]
				}
			]
		};
	}
	config(){
		return {
			view:"popup",
			width:146, height:312,
			body:{
				type:"clean", rows:[
					this.dataview("Theme"),
					this.dataview("Toolbar"),
					this.dataview("Sidebar")
				]
			}
		};
	}
	showPopup(position){
		this.getRoot().show(position);
	}
}