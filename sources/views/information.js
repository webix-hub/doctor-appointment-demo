import {JetView} from "webix-jet";
import "webix/photo";

export default class InformationView extends JetView {
	config(){
		const left_main = {
			gravity:3,
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
					options:[]
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

		const right_photo = {
			gravity:3,
			margin:10,
			rows:[
				{
					view:"photo",
					name:"photo",
					css:"form_photo",
					width:260,
					height:260,
					borderless:true
				},
				{
					view:"multicombo", name:"tags",
					localId:"tags:combo",
					placeholder:"Click to add tags",
					options:[]
				}
			]
		};

		return {
			view:"form",
			cols:[
				left_main, { gravity:1 }, right_photo
			]
		};
	}
}
