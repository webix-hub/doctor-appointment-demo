import {JetView} from "webix-jet";
import "webix/photo";

export default class MainInfoView extends JetView {
	config(){
		return {
			type:"form",
			rows:[
				{
					cols:[
						{},
						{ view:"photo", css:"round", width:150, height:150 },
						{}
					]
				},
				{ view:"label", template:"<p class=\"line\">Dr. Arienette Woolfe</p>", css:"doc_name" },
				{ view:"label", template:"<p class=\"line\">General practitioner</p>", css:"doc_field" },
				{
					cols:[
						{},
						{ view:"icon", icon:"mdi mdi-facebook-box" },
						{ view:"icon", icon:"mdi mdi-linkedin-box" },
						{ view:"icon", icon:"mdi mdi-twitter-box" },
						{ view:"icon", icon:"mdi mdi-instagram" },
						{ view:"icon", icon:"mdi mdi-vk-box" },
						{ view:"icon", icon:"mdi mdi-youtube" },
						{}
					]
				}
			]
		};
	}
}