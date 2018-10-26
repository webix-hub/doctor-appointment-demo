import {JetView} from "webix-jet";
import ProfileMenuView from "views/profilemenu";

export default class ToolView extends JetView {
	config(){
		return {
			view:"toolbar",
			height:56,
			elements:[
				{
					paddingY:7,
					rows:[
						{
							view:"icon", icon:"mdi mdi-menu",
							tooltip:"Toggle menu",
							click:() => this.app.callEvent("menu:toggle")
						}
					]
				},
				{ css:"logo" },
				{},
				{
					paddingY:7,
					rows:[
						{
							margin:8,
							cols:[
								{
									view:"icon", icon:"mdi mdi-settings",
									tooltip:"Open theme settings",
									click:function(){
										
									}
								},
								{
									view:"icon", icon:"mdi mdi-account",
									tooltip:"Open profile options",
									click:function(){
										this.$scope.profileMenu.showMenu(this.$view);
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
	}
}
