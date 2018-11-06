import {JetView} from "webix-jet";
import {getProfileData} from "models/profile";

export default class SettingsView extends JetView {
	config(){
		return {
			view:"form", minWidth:560,
			elements:[
				{
					margin:30, cols:[
						{
							rows:[
								{ type:"section", template:"Change password" },
								{ view:"text", label:"Old password", labelWidth:130 },
								{ view:"text", label:"New password", labelWidth:130 },
								{ view:"text", label:"Repeat password", labelWidth:130 },
								{},
								{
									cols:[
										{},
										{ view:"button", value:"Save", type:"form", width:150 }
									]
								}
							]
						},
						{
							rows:[
								{ type:"section", template:"Personal settings" },
								{ view:"text", label:"Name", name:"doctor", labelWidth:130 },
								{ view:"text", label:"Email", name:"email", labelWidth:130 },
								{ view:"text", label:"Phone", name:"phone", labelWidth:130 },
								{ view:"text", label:"Address", name:"address", labelWidth:130 },
								{},
								{
									cols:[
										{}, this.saveButton()
									]
								}
							]
						}
					]
				},
				{
					margin:30, cols:[
						{
							rows:[
								{ type:"section", template:"Notification settings" },
								{ view:"label", template:"Receive notifications on these events:" },
								{ view:"switch", name:"notifications_mentions", labelWidth:0, labelRight:"Mentions" },
								{ view:"switch", name:"notifications_upcoming", labelWidth:0, labelRight:"Upcoming appointments" },
								{ view:"switch", name:"notifications_cancelled", labelWidth:0, labelRight:"Cancelled appointments" },
								{ view:"switch", name:"notifications_friends", labelWidth:0, labelRight:"New friends" },
								{ view:"switch", name:"notifications_messages", labelWidth:0, labelRight:"New messages" },
								{},
								{
									cols:[
										{}, this.saveButton()
									]
								}
							]
						},
						{
							rows:[
								{ type:"section", template:"Linked accounts" },
								{ view:"text", name:"linkedin", label:"LinkedIn", labelWidth:130 },
								{ view:"text", name:"instagram", label:"Instagram", labelWidth:130 },
								{ view:"text", name:"youtube", label:"Youtube", labelWidth:130 },
								{ view:"text", name:"facebook", label:"Facebook", labelWidth:130 },
								{ view:"text", name:"twitter", label:"Twitter", labelWidth:130 },
								{ view:"text", name:"vkontakte", label:"Vkontakte", labelWidth:130 },
								{},
								{
									cols:[
										{}, this.saveButton()
									]
								}
							]
						}
					]
				}
			]
		};
	}
	init(){
		this.getRoot().setValues(getProfileData());
	}
	saveButton(){
		return {
			view:"button", value:"Save", type:"form", width:150,
			click:() => this.updateProfileData()
		};
	}
	updateProfileData(){
		const form = this.getRoot();
		if (form.validate()){
			const formData = form.getValues();
			webix.storage.session.put("demo_profile_data", formData);
			this.app.refresh();
		}
	}
}