import {JetView} from "webix-jet";
import "webix/photo";

export default class InformationView extends JetView {
	config(){
		const controls = {
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
					view:"datepicker", name:"birthday",
					label:"Birthday", labelPosition:"top",
					placeholder:"Click to select"
				},
				{
					view:"text", name:"email",
					label:"Email", labelPosition:"top",
					placeholder:"judetheawesome@obscure.com"
				}
			]
		};

		const photo = {
			view:"photo",
			name:"photo",
			css:"form_photo",
			borderless:true
		};

		const buttons = {
			margin:10,
			cols:[
				{
					view:"button", value:"Reset",
					click:() => this.getRoot().setValues(this._currData)
				},
				{ 
					view:"button", value:"Save", type:"form",
					click:() => {
						if (this.getRoot().validate())
							this.app.callEvent("save:patient:data",[this.getRoot().getValues()]);
					}
				}
			]
		};

		const radio = {
			view:"radio", name:"type",
			value:1, vertical:true,
			options:[
				{ id:1, value:"Inpatient" },
				{ id:2, value:"Outpatient" }
			]
		};

		const wideConfig = [
			photo,
			{
				rows:[
					controls,
					radio,
					{ height:20 },
					buttons
				]
			}
		];
		const narrowConfig = [
			{
				rows:[
					photo,
					{ height:20 },
					radio
				]
			},
			{
				rows:[
					controls,
					{ height:20 },
					buttons
				]
			}
		];

		return {
			view:"form",
			margin:20,
			//cols:this.app.config.screen === "wide" ? wideConfig : narrowConfig,
			cols:wideConfig,
			rules:{
				"fname":webix.rules.isNotEmpty
			}
		};
	}
	init(form){
		this.on(this.app,"person:select",person => {
			form.setValues(person);
			this._currData = person;
		});
	}
}
