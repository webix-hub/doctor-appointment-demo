import {JetView,plugins} from "webix-jet";

export default class ProfileMenuView extends JetView {
	config(){
		return {
			view:"popup",
			body:{
				view:"list",
				localId:"menu",
				autoheight:true,
				width:150,
				select:true,
				borderless:true,
				css:"profile_menu",
				data:[
					{ id:"profile", value:"My profile", icon:"mdi mdi-account" },
					{ id:"settings", value:"Settings", icon:"mdi mdi-settings" },
					{ id:"logout", value:"Log out", icon:"mdi mdi-logout" }
				],
				on:{
					onAfterSelect:id => {
						if (id !== "logout")
							webix.delay(() => {
								this.getRoot().hide();
								this.$$("menu").unselect();
							});
					}
				}
			}
		};
	}
	init(){
		this.use(plugins.Menu,{
			id:"menu",
			urls:{
				"profile":"profile/about",
				"logout":"/login"
			}
		})
	}
	showMenu(pos){
		this.getRoot().show(pos);
	}
}
