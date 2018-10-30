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
						{ view:"photo", width:150, height:150, value:"dr_arienette", css:"profile_photo" },
						{}
					]
				},
				{
					view:"label", height:80, css:"doc_main",
					template:`<span class="doc_name">Dr. Arienette Woolfe</span><span class="doc_field">General practitioner</span>`
				},
				{
					cols:[
						{},
						{ view:"icon", icon:"mdi mdi-facebook-box", click:() => window.open("https://www.facebook.com/webixui/") },
						{ view:"icon", icon:"mdi mdi-linkedin-box", click:() => window.open("https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library") },
						{ view:"icon", icon:"mdi mdi-instagram", click:() => window.open("https://www.instagram.com/xbsoftware/") },
						{ view:"icon", icon:"mdi mdi-youtube", click:() => window.open("https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow") },
						{ view:"icon", icon:"mdi mdi-twitter-box", click:() => window.open("https://twitter.com/webixui?lang=en") },
						{ view:"icon", icon:"mdi mdi-vk-box", click:() => window.open("https://vk.com/webixui") },
						{}
					]
				}
			]
		};
	}
}