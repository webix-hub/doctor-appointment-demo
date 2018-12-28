import { JetView } from "webix-jet";
import { getProfileData } from "models/profile";

export default class AboutView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%F %Y");

		return {
			margin:1,
			rows:[
				{ view:"label", template:"About", css:"about_label" },
				{					
					view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:"#about#"
				},
				{ view:"label", template:"Schedule", css:"about_label" },
				{
					view:"template", localId:"schedule:template", borderless:true,
					css:"profile_templates", height:48,
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
				{ view:"label", template:"Contact Info", css:"about_label" },
				{
					view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						let result = "";
						if (obj.email)
							result += `<div class="contact">Email address: ${obj.email}</div>`;
						if (obj.phone)
							result += `<div class="contact">Phone number: ${obj.phone}</div>`;
						if (obj.address)
							result += `<div class="contact">Address: ${obj.address}</div>`;
						return result;
					}
				},
				{ view:"label", template:"Skills", css:"about_label" },
				{
					view:"template", borderless:true,
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
				{ view:"label", template:"Qualification", css:"about_label" },
				{
					view:"template", borderless:true,
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
				{ view:"label", template:"Hobbies", css:"about_label" },
				{
					view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:"#hobbies#"
				},
				{}
			]
		};
	}
	init(){
		this._data = getProfileData();
		const templates = this.getRoot().queryView({ view:"template" },"all");

		templates.map(view => {
			view.setValues(this._data);
		});

		this._resizeEvent = webix.event(window, "resize", () => {
			const days = this.$$("schedule:template").$view.childNodes[0].childNodes.length;
			if (this.getRoot().$width <= 480 && days > 2)
				this.$$("schedule:template").config.height = 96;
			else if (this.getRoot().$width > 480)
				this.$$("schedule:template").config.height = 48;
			this.$$("schedule:template").resize();
		});
	}
	destroy(){
		webix.eventRemove(this._resizeEvent);
	}
}