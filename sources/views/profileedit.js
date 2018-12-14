import { JetView } from "webix-jet";
import { getProfileData } from "models/profile";
import "webix/multidate";
import "webix/multitime";

export default class ProfileEditView extends JetView {
	config(){
		function isEmail(value){
			return !value || /\S+@[^@\s]+\.[^2\s]+$/.test(value);
		}

		return {
			view:"form", borderless:true, elements:[
				{
					view:"text", name:"doctor", label:"Name", labelWidth:75,
					validate:webix.rules.isNotEmpty
				},
				{ view:"textarea", name:"about", height:160, label:"About", labelWidth:75 },
				{
					// outer layout for multiline control
					rows:[
						{ view:"multitime", name:"schedule" }
					]
				},
				{ view:"text", label:"Email", name:"email", labelWidth:75, validate:isEmail },
				{ view:"text", label:"Phone", name:"phone", labelWidth:75, pattern:webix.patterns.phone },
				{ view:"text", label:"Address", name:"address", labelWidth:75 },
				{ view:"textarea", name:"hobbies", height:100, label:"Hobbies", labelWidth:75 },
				{
					// outer layout for multiline control
					rows:[
						{ view:"multidate", name:"qualification" /*label:"Qualification"*/ }
					]
				},
				{
					// outer layout for multiline control
					rows:[
						{ view:"multitext", separator:",", name:"skills" }
					]
				}
			]
		};
	}
	init(){
		this._data = getProfileData();
		this.getRoot().setValues(this._data);

		this.on(this.app,"save:form:data",() => {
			const formData = this.getRoot().getValues();
			formData["skills"] = formData["skills"].split(",");
			try{
				webix.storage.session.put("demo_profile_data",formData);
			}
			catch(err){
				webix.message("You blocked cookies. Data won't be saved.");
			}
		});
	}
}