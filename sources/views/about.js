import { JetView } from "webix-jet";
import { getProfileData } from "models/profile";

export default class AboutView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%F %Y");

		return {
			margin:1,
			rows:[
				{ view:"label", label:"About", css:"about_label" },
				{					
					view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:"#about#"
				},
				{ view:"label", label:"Schedule", css:"about_label" },
				{
					view:"template", localId:"schedule:template", borderless:true,
					css:"profile_templates", height:48,
					template:obj => {
						let result = "";
						if (obj.schedule)
							for (let i = 0; i < obj.schedule.length; i++){
								result += `<div class="schedule"><div class="days">${obj.schedule[i].day}</div>`;
								result += `<div class="time">${obj.schedule[i].time}</div></div>`;
							}
						return result;
					}
				},
				{ view:"label", label:"Contact Info", css:"about_label" },
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
				{ view:"label", label:"Skills", css:"about_label" },
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
				{ view:"label", label:"Qualification", css:"about_label" },
				{
					view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						let result = "<div class=\"qualification\">";
						if (obj.qualification){
							for (let i = 0; i < obj.qualification.length; i++){
								result += `<div class="qualification_step">
										<span class="place">${obj.qualification[i].step}</span>`;
								const startDate = dateFormat(obj.qualification[i].time.start) || "unknown";
								const endDate = dateFormat(obj.qualification[i].time.end) || "Present";
								result += ` - <span>${startDate} - ${endDate}</span></div>`;
							}
						}
						return result + "</div>";
					}
				},
				{ view:"label", label:"Hobbies", css:"about_label" },
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