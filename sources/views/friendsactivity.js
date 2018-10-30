import {JetView} from "webix-jet";
import "webix/photo";

export default class FriendsActivityView extends JetView{
	config(){
		return {
			minHeight:300, rows:[
				{ template:"Friends activity", type:"header" },
				{
					view:"datalayout", cols:[
						{ view:"photo" },
						{ template:"some data component" }
					]
				}
			]
		};
	}
}
