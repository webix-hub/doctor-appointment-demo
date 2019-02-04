import {JetView} from "webix-jet";

export default class ThemeSettingsView extends JetView {
	config(){
		const appConfig = this.app.config;

		return {
			view:"popup", width:160,
			body:{
				padding:10, rows:[
					{
						view:"switch", css:"theme_switch", value:appConfig.theme ? 1 : 0,
						label:"Light", labelWidth:45, labelRight:"Dark",
						on:{
							onChange:newv => this.switchThemes(newv)
						}
					},
					{
						view:"switch", label:"Shadows", //labelWidth:45,
						value:appConfig.shadows ? 1 : 0,
						on:{
							onChange:newv => this.switchShadows(newv)
						}
					}
				]
			}
		};
	}
	showPopup(position){
		this.getRoot().show(position);
	}
	switchThemes(nt){
		const newTheme = nt == 1 ? "webix_dark" : "";
		this.app.config.theme = newTheme;

		try{
			webix.storage.session.put("doctor_demo_theme",newTheme);
		}
		catch(err){/* for blocked cookies */}

		webix.delay(() => this.app.refresh(),null,null,500);
	}
	switchShadows(shadows){
		const newShadows = shadows == 1 ? "webix_shadow_medium" : "";
		this.app.config.shadows = newShadows;

		try{
			webix.storage.session.put("doctor_demo_shadows",newShadows);
		}
		catch(err){/* for blocked cookies */}

		webix.delay(() => this.app.refresh(),null,null,500);
	}
}