import {JetView} from "webix-jet";
import "webix/multidate";
import "webix/multitime";
import {getProfileData} from "models/profile";

export default class ProfileInfoView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%F %Y");
		
		function isEmail(value){
			return !value || /\S+@[^@\s]+\.[^2\s]+$/.test(value);
		}

		return {
			view:"form",
			padding:10,
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
								{ view:"textarea", name:"about", height:140 },
								this.editButtons("about")
							]
						}
					]
				},
				this.toolbar("Personal settings",130),
				{
					cols:[
						{ localId:"personal settings" },
						{
							localId:"edit:personal settings", hidden:true, rows:[
								{ view:"text", label:"Name", name:"doctor", labelWidth:130, validate:webix.rules.isNotEmpty },
								{ view:"text", label:"Email", name:"email", labelWidth:130, validate:isEmail },
								{ view:"text", label:"Phone", name:"phone", labelWidth:130, pattern:webix.patterns.phone },
								{ view:"text", label:"Address", name:"address", labelWidth:130 },
								this.editButtons("personal settings")
							]
						}
					]
				},
				this.toolbar("Schedule",110),
				{
					cols:[
						{
							view:"template", localId:"schedule", borderless:true,
							css:"profile_templates", minHeight:52,
							template:obj => {
								let result = "";
								if (obj.schedule)
									for (let key in obj.schedule){
										if (key.indexOf("day") !== -1)
											result += `<div class="schedule"><div class="days">${obj.schedule[key]}</div>`;
										else if (key.indexOf("time") !== -1)
											result += `<div class="time">${obj.schedule[key]}</div></div>`;
									}
								return result;
							}
						},
						{
							localId:"edit:schedule", hidden:true,
							rows:[	// outer layout for multiline control
								{
									rows:[
										{
											view:"multitime", name:"schedule"
										}
									]
								},
								this.editButtons("schedule")
							]
						}
					]
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
							rows:[		// outer layout for multiline control
								{
									rows:[
										{
											view:"multitext", separator:",",
											name:"skills"
										}
									]
								},
								this.editButtons("skills")
							]
						}
					]
				},
				this.toolbar("Qualification",110),
				{
					cols:[
						{
							view:"template", localId:"qualification", borderless:true,
							css:"profile_templates", autoheight:true,
							template:obj => {
								if (obj.qualification){
									let result = "<div class=\"qualification\">";
									for (let key in obj.qualification){

										if (key.indexOf("step") !== -1)	
											result += `<div class="qualification_step">
														<span class="place">${obj.qualification[key]}</span>`;
										else if (key.indexOf("time") !== -1){
											const startDate = dateFormat(obj.qualification[key].start) || "unknown";
											const endDate = dateFormat(obj.qualification[key].end) || "Present";

											result += ` - <span>${startDate} - ${endDate}</span></div>`;
										}

									}
									return result + "</div>";
								}
							}
						},
						{
							localId:"edit:qualification", hidden:true,
							rows:[		// outer layout for multiline control
								{
									rows:[
										{
											view:"multidate", name:"qualification"
										}
									]
								},
								this.editButtons("qualification")
							]
						}
					]
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
	editEnd(label){
		this.$$("edit:" + label).hide();
		this.$$("icon:" + label).show();
		this.$$(label).show();
	}
}