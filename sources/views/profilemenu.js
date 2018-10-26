import {JetView} from "webix-jet";

export default class ProfileMenuView extends JetView {
	config(){
		return {
			view:"popup",
			body:{
				view:"list",
				autoheight:true,
				width:150,
				select:true,
				data:[
					{ id:"profile", value:"My profile", icon:"mdi mdi-account" },
					{ id:"settings", value:"Settings", icon:"mdi mdi-settings" },
					{ id:"logout", value:"Log out", icon:"mdi mdi-logout" }
				]
			}
		};
	}
	showMenu(pos){
		this.getRoot().show(pos);
	}
}
