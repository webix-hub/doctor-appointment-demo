import {JetView} from "webix-jet";
import {getFriendsActivity} from "models/friendsactivity";

export default class FriendsActivityView extends JetView{
	config(){
		const theme = this.app.config.theme;

		return {
			rows:[
				{ template:"Friends activity", height:46, css:"webix_header " + theme },
				{
					view:"list",
					localId:"friends",
					css:"friends_activity_list",
					select:true,
					type:{
						height:92,
						template:obj => {
							let photo = "<span >";
							if (obj.friend)
								photo += `<img class="friend_photo" style="height:60px;width:60px;" src="data/photos/${obj.friend}_1.jpg" />`;

							const people = (obj.objects) ? obj.objects.join(", ") : "";
							const details = obj.object || people || "";
							const icon = obj.icon ? `<span class="webix_icon ${obj.icon}"></span>` : "";
							return `${photo}
							<div class="text">
								<span class="activity_text">
								<span class="event_details">${obj.name}</span> ${obj.event} <span class="event_details">${details}</span> ${icon}</span>
							</div>`;
						}
					}
				}
			]
		};
	}
	init(){
		this.$$("friends").parse(getFriendsActivity());
	}
}
