import {JetView} from "webix-jet";
import "webix/multidate";
import "webix/multitime";
import {getProfileData} from "models/profile";

import {AboutBlock} from "views/aboutblock";
import {ContactInfoBlock} from "views/contactinfoblock";
import {ScheduleBlock} from "views/scheduleblock";
import {SkillsBlock} from "views/skillsblock";
import {QualificationBlock} from "views/qualificationblock";

export default class ProfileInfoView extends JetView {
	config(){
		return {
			view:"form",
			padding:10,
			margin:10,
			visibleBatch:"read",
			rows:[
				{
					view:"toolbar", borderless:true, elements:[
						{ view:"label", template:"Personal info", css:"about_label" },
						{},
						this.editButtons(),
						{
							view:"icon", icon:"mdi mdi-pencil", batch:"read",
							click:function(){
								this.$scope.toggleBatches("edit","read");
								this.hide();
							}
						}
					]
				},
				{
					cols:[
						{
							batch:"read", view:"template", template:"Name: #doctor#",
							autoheight:true,
							css:"profile_templates", borderless:true
						},
						{
							batch:"edit", hidden:true,
							view:"text", name:"doctor", label:"Name", labelWidth:130,
							validate:webix.rules.isNotEmpty
						}
					]
				},
				AboutBlock,
				ContactInfoBlock,
				ScheduleBlock,
				SkillsBlock,
				QualificationBlock,
				this.editButtons()
			]
		};
	}
	init(){
		this._data = getProfileData();
		const templates = this.getRoot().queryView({ view:"template" },"all");
		
		templates.map(view => {
			view.setValues(this._data);
		});

		this.getRoot().setValues(this._data);
	}
	editButtons(){
		return {
			batch:"edit", hidden:true,
			margin:5, cols:[
				{},
				{
					view:"button", value:"Cancel", width:100,
					click:() => {
						this.getRoot().setValues(this._data);
						this.toggleBatches("read","edit");
					}
				},
				{
					view:"button", value:"Save", type:"form", width:100,
					click:() => {
						const formData = this.getRoot().getValues();
						formData["skills"] = formData["skills"].split(",");
						try{
							webix.storage.session.put("demo_profile_data",formData);
						}
						catch(err){
							webix.message("You blocked cookies. Data won't be saved.");
						}
						this.app.refresh();
					}
				}
			]
		};
	}
	toggleBatches(a,b){
		const showBatch = this.getRoot().queryView({ batch:a },"all");
		for (let i = 0; i < showBatch.length; i++)
			showBatch[i].show();
		const hideBatch = this.getRoot().queryView({ batch:b },"all");
		for (let i = 0; i < hideBatch.length; i++)
			hideBatch[i].hide();
	}
}