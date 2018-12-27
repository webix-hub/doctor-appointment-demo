import {JetView} from "webix-jet";

export default class ThemeSettingsView extends JetView {
	config(){
		const theme = this.app.config.theme ? 1 : 0;

		return {
			view:"popup", width:160,
			body:{
				padding:10, rows:[
					{
						view:"switch", css:"theme_switch", value:theme,
						label:"Light", labelWidth:45, labelRight:"Dark",
						on:{
							onChange:newv => {
								const newTheme = newv == 1 ? "webix_dark" : "";
								this.app.config.theme = newTheme;

								try{
									webix.storage.session.put("doctor_demo_theme",newTheme);
								}
								catch(err){/* for blocked cookies */}

								webix.delay(() => this.app.refresh(),null,null,500);
							}
						}
					}
				]
			}
		};
	}
	showPopup(position){
		this.getRoot().show(position);
	}
}