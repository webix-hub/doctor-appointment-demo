import {JetView} from "webix-jet";
import {getProfileData} from "models/profile";
import {getLoginData} from "models/userdata";

export default class SettingsView extends JetView {
	config(){
		const oldPswd = getLoginData().password;
		return {
			view:"form", minWidth:560,
			rules:{
				"doctor":webix.rules.isNotEmpty
			},
			elements:[
				{
					margin:30, cols:[
						{
							rows:[
								{ type:"section", template:"Change password" },
								{
									view:"text", localId:"oldpswd",
									label:"Old password", labelWidth:130,
									type:"password"
								},
								{
									view:"text", localId:"pswd1", type:"password",
									label:"New password", labelWidth:130
								},
								{
									view:"text", localId:"pswd2", type:"password",
									label:"Repeat password", labelWidth:130
								},
								{},
								{
									cols:[
										{},
										{
											view:"button", value:"Save", type:"form", width:150,
											click:() => {
												const oldpswd = this.$$("oldpswd").getValue();
												const newpswd = this.$$("pswd1").getValue();

												if (oldpswd === oldPswd && newpswd === this.$$("pswd2").getValue()){
													try {
														webix.storage.session.put("demo_login_data",{
															user:"awoolfe", password:newpswd
														});
														webix.message("New password saved","success");
													}
													catch(err){
														webix.message("You blocked cookies. Changes won't be saved.","debug");
													}
												}
												else if (oldpswd !== oldPswd)
													webix.message("Incorrect old password","error");
												else if (newpswd !== this.$$("pswd2").getValue())
													webix.message("Check the new password in both inputs","error");
											}
										}
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
			try{
				webix.storage.session.put("demo_profile_data", formData);
			}
			catch(err){
				webix.message("You blocked cookies. Changes won't be saved.");
			}
			webix.message("Saved","success");
			this.app.refresh();
		}
	}
}