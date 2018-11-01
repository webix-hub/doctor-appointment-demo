import {JetView} from "webix-jet";
import {getProfileData} from "models/profile";

export default class AboutView extends JetView {
	config(){
		return {
			view:"form", minWidth:560, padding:10,
			rows:[
				this.toolbar("About",56),
				{
					cols:[
						{
							view:"template", localId:"about", borderless:true,
							css:"profile_templates", autoheight:true,
							template:"#about#"
						},
						{
							localId:"edit:about", hidden:true,
							rows:[
								{
									view:"textarea", 
									name:"about", height:140
								},
								this.editButtons("about")
							]
						}
					]
				},
				{ view:"label", template:"Working time", css:"about_label" },
				{
					view:"template", localId:"schedule", borderless:true,
					css:"profile_templates", minHeight:52,
					template:obj => {
						let result = "";
						if (obj.schedule)
							for (let i = 0; i < obj.schedule.length; i++)
								result += `<div class="schedule">
									<div class="days">${obj.schedule[i].day}</div>
									<div class="time">${obj.schedule[i].time}</div>
								</div>`;
						return result;
					}
				},
				this.toolbar("Skills",56),
				{
					cols:[
						{
							view:"template", localId:"skills", borderless:true,
							css:"profile_templates", autoheight:true,
							template:obj => {
								let result = "";
								if (obj.skills)
									for (let i = 0; i < obj.skills.length; i++)
										result += `<div class="skill">
											<span class="webix_icon mdi mdi-circle-small"></span>
											${obj.skills[i]}
										</div>`;
								return result;
							}
						},
						{
							localId:"edit:skills", hidden:true,
							rows:[
								this.editButtons("skills"),
								{
									view:"multitext", separator:",",
									name:"skills"
								}
							]
						}
					]
				},
				{ view:"label", template:"Qualification", css:"about_label" },
				{
					view:"template", localId:"qualification", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						let result = `<div class="qualification">`;
						if (obj.qualification)
							for (let i = 0; i < obj.qualification.length; i++)
								result += `<div class="qualification_step">
									${obj.qualification[i].step}
									<span class="year">${obj.qualification[i].time}</span>
								</div>`;
						return result + `</div>`;
					}
				}
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
	toolbar(label,labelWidth){
		return {
			view:"toolbar", borderless:true, elements:[
				{ view:"label", template:label, width:labelWidth, css:"about_label" },
				{
					view:"icon", icon:"mdi mdi-pencil",
					localId:"icon:" + label.toLowerCase(),
					click:function(){
						this.$scope.$$("edit:" + label.toLowerCase()).show();
						this.$scope.$$(label.toLowerCase()).hide();
						this.hide();
					}
				},
				{}
			]
		};
	}
	editButtons(label){
		return {
			margin:5, cols:[
				{},
				{
					view:"button", value:"Cancel", width:100,
					click:() => {
						this.getRoot().elements[label].setValue(this._data[label]);
						this.editEnd(label);
					}
				},
				{
					view:"button", value:"Save", type:"form", width:100,
					click:() => {
						const newData = {};
						const formData = this.getRoot().getValues();
						if (label === "about")
							newData[label] = formData[label];
						else if (label === "skills")
							newData[label] = formData[label].split(",");
						this.$$(label).setValues(newData);
						this._data = formData;
						this.editEnd(label);
					}
				}
			]
		};
	}
	editEnd(label){
		this.$$("edit:" + label).hide();
		this.$$("icon:" + label).show();
		this.$$(label).show();
	}
}