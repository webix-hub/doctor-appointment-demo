import {JetView} from "webix-jet";
import {getFriends} from "models/friends";

export default class FriendsView extends JetView {
	config(){
		return {
			rows:[
				{ template:"Friends", type:"header", localId:"header" },
				{
					view:"list", css:"persons_list", select:true,
					localId:"list",
					type:{
						height:65,
						width:"auto",
						template:obj => {
							return `<image class="doctorphoto" src="data/photos/${obj.photo}_1.jpg" />
							<div class="text">
						  		<span class="doctorname">${obj.name}</span>
								<span class="field">${(obj.field)}</span>
								<span class="webix_icon mdi mdi-circle status ${obj.status}"></span>
							</div>`
						}
					}
				}
			]
		};
	}
	init(){
		this.$$("list").parse(getFriends());
		this.$$("header").setHTML(`Friends (${this.$$("list").count()})`);
	}
}