import {JetView} from "webix-jet";
import {getFriendsActivity} from "models/friendsactivity";

export default class FriendsActivityView extends JetView{
	config(){
		const theme = this.app.config.theme;

		return {
			rows:[
				{ template:"Friends activity", height:46, css:"webix_header " + theme },
				{
					view:"datalayout",
					localId:"friends",
					margin:30, padding:30,
					type:"form",
					rows:[
						{
							margin:20, cols:[
								{
									name:"$value",
									template:obj => {
										if (obj.friend)
											return `<img style="height:60px;width:60px;" src="data/photos/${obj.friend}_1.jpg" />`;
										return "";
									},
									css:"friend_photo", width:60, height:60
								},
								{
									name:"data", borderless:true,
									template:obj => {
										const people = (obj.objects) ? obj.objects.join(", ") : "";
										const details = obj.object || people || "";
										const icon = obj.icon ? `<span class="webix_icon ${obj.icon}"></span>` : "";
										return `<span class="activity_text"><span class="event_details">${obj.name}</span> ${obj.event} <span class="event_details">${details}</span> ${icon}</span>`;
									}
								}
							]
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("friends").parse(getFriendsActivity());
	}
}
