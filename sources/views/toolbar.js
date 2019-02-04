import {JetView} from "webix-jet";
import ProfileMenuView from "views/profilemenu";
import ThemeSettingsView from "views/themesettings";

export default class ToolView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"toolbar",
			css:theme + " webix_shadow_small",
			height:56,
			elements:[
				{ width:4 },
				{ css:theme ? "logo_inverted" : "logo" },
				{},
				{
					paddingY:7,
					rows:[
						{
							margin:8,
							cols:[
								{
									template:"<image class=\"mainphoto\" src=\"data/photos/dr_arienette_1.jpg\" title=\"Open your profile\">",
									width:40, borderless:true, css:"toolbar_photo",
									localId:"user:avatar",
									onClick:{
										"mainphoto":function(){
											this.$scope.profileMenu.showMenu(this.$view);
											return false;
										}
									}
								},
								{
									view:"icon", icon:"mdi mdi-settings",
									tooltip:"Open theme settings",
									click:function(){
										this.$scope.themeSettings.showPopup(this.$view);
									}
								}
							]
						}
					]
				},
				{ width:6 }
			]
		};
	}
	init(){
		this.profileMenu = this.ui(ProfileMenuView);
		this.themeSettings = this.ui(ThemeSettingsView);

		if (this.getUrl()[1].page === "dashboard"){
			this.tip = webix.ui({
				view:"tooltip",
				template:"#value#"
			});
			webix.delay(() => {
				const pos = webix.html.offset(this.$$("user:avatar").$view);
				this.tip.show({
					value:"Click the user avatar to open the profile"
				},{ x:pos.x, y:pos.y+10 });
			},null,null,1000);
		}
	}
}
