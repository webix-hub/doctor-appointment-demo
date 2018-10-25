import {JetView} from "webix-jet";
import "webix/photo";

export default class InformationView extends JetView {
	config(){
		const controls = {
			margin:10,
			minWidth:226,
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
				},
				{
					view:"radio", name:"type",
					value:1,
					options:[
						{ id:1, value:"Inpatient" },
						{ id:2, value:"Outpatient" }
					]
				},
				{ height:20 }
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

		return {
			view:"form",
			margin:20,
			gravity:2,
			cols:[
				photo,
				{
					rows:[
						controls,
						buttons
					]
				}
			],
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
