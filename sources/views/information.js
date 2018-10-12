import {JetView} from "webix-jet";
import "webix/photo";
import {getPositions} from "models/positions";

export default class InformationView extends JetView {
	config(){
		const controls = {
			minWidth:200,
			margin:10,
			rows:[
				{
					view:"text", name:"fname",
					label:"First name", labelPosition:"top",
					placeholder:"First name"
				},
				{
					view:"text", name:"lname",
					label:"Last name", labelPosition:"top",
					placeholder:"Last name"
				},
				{
					view:"richselect", name:"position",
					localId:"position:combo",
					label:"Position", labelPosition:"top",
					placeholder:"Click to select",
					options:getPositions()
				},
				{
					view:"text", name:"email",
					label:"Email", labelPosition:"top",
					placeholder:"judetheawesome@obscure.com"
				},
				{
					view:"radio", name:"notifications",
					label:"Notifications", labelPosition:"top",
					value:1,
					options:[
						{ id:1, value:"Yes" },
						{ id:2, value:"No" }
					]
				},
				{ height:20 }
			]
		};

		const photo = {
			view:"photo",
			name:"photo",
			css:"form_photo",
			width:260,
			height:260,
			borderless:true
		};

		return {
			view:"form",
			margin:20,
			cols:[
				photo, controls
			]
		};
	}
	init(form){
		this.on(this.app,"person:select",person => {
			form.setValues(person);
		});
	}
}
