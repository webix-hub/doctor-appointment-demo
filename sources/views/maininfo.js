import {JetView} from "webix-jet";
import "webix/photo";
import {getProfileData} from "models/profile";

export default class MainInfoView extends JetView {
	socIcon(type){
		return {
			view:"icon", icon:`mdi mdi-${type}`, click:() => {
				window.open(this.getRoot().getValues()[type]);
			}
		};
	}
	config(){
		return {
			view:"form", height:322,
			rows:[
				{
					cols:[
						{},
						{ view:"photo", width:150, height:150, name:"photo", css:"profile_photo" },
						{}
					]
				},
				{
					view:"label", css:"doc_main", name:"name",
					template:obj => `<span class="doc_name">Dr. ${obj.name}</span> `
				},
				{
					view:"label", css:"doc_main", name:"job",
					template:obj => `<span class="doc_field">${obj.job}</span>`
				},
				{
					cols:[
						{},
						this.socIcon("facebook","https://www.facebook.com/webixui/"),
						this.socIcon("linkedin","https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library"),
						this.socIcon("instagram","https://www.instagram.com/xbsoftware/"),
						this.socIcon("youtube","https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow"),
						this.socIcon("twitter","https://twitter.com/webixui?lang=en"),
						this.socIcon("vk","https://vk.com/webixui"),
						{}
					]
				}
			]
		};
	}
	init(){
		this.getRoot().setValues(getProfileData());
	}
}