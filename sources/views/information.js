import {JetView} from "webix-jet";
import "webix/photo";

export default class InformationView extends JetView {
	config(){
		const size = this.app.config.size;
		function isEmail(value){
			return !value || /\S+@[^@\s]+\.[^2\s]+$/.test(value);
		}

		const controls = {
			margin:10,
			rows:[
				{
					view:"text", name:"name", validate:webix.rules.isNotEmpty,
					label:"Name", labelPosition:"top",
					placeholder:"Patient's name"
				},
				{
					view:"datepicker", name:"birthday",
					label:"Birthday", labelPosition:"top",
					placeholder:"Click to select"
				},
				{
					view:"text", name:"email", validate:isEmail,
					label:"Email", labelPosition:"top",
					placeholder:"judetheawesome@obscure.com"
				}
			]
		};

		const radio = {
			view:"radio", name:"type", value:1,
			vertical:size !== "wide",
			options:[
				{ id:1, value:"Inpatient" },
				{ id:2, value:"Outpatient" }
			]
		};

		const photo = {
			view:"photo",
			name:"photo",
			css:"form_photo",
			borderless:true,
			width:size === "small" ? 130 : 260,
			height:size === "small" ? 130 : 260
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

		const narrowConf = [
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

		const wideConf = [
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

		return {
			view:"form",
			margin:20, minWidth:260,
			cols:size !== "small" ? wideConf : narrowConf
		};
	}
	init(form){
		this.on(this.app,"person:select",person => {
			form.setValues(person);
			this._currData = person;
		});
	}
}
