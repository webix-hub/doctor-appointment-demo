import {JetView} from "webix-jet";
import "webix/photo";
import "webix/profilelabel";
import {getProfileData} from "models/profile";

export default class MainInfoView extends JetView {
	socIcon(type){
		return {
			view:"icon", icon:`mdi mdi-${type}`, type:type,
			click:() => {
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
						{
							view:"photo", width:150, height:150, name:"photo",
							css:"profile_photo"
						},
						{}
					]
				},
				{
					view:"profilelabel", css:"doc_main", name:"doctor",
					borderless:true,
					template:obj => `<span class="doc_name">Dr. ${obj}</span>`
				},
				{
					view:"profilelabel", css:"doc_main", name:"job",
					borderless:true,
					template:obj => `<span class="doc_field">${obj}</span>`
				},
				{
					cols:[
						{},
						this.socIcon("facebook"),
						this.socIcon("linkedin"),
						this.socIcon("instagram"),
						this.socIcon("youtube"),
						this.socIcon("twitter"),
						this.socIcon("vk"),
						{}
					]
				}
			]
		};
	}
	init(){
		const form = this.getRoot();
		const data = getProfileData();
		form.setValues(data);

		const icons = form.queryView({ view:"icon" },"all");
		for (let i = 0; i < icons.length; i++){
			if (!data[icons[i].config.type])
				icons[i].hide();
		}
	}
}