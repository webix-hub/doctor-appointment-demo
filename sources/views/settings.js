import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config(){
		return {
			view:"form", minWidth:560,
			elements:[
				{ type:"section", template:"Change password", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"Old password", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"New password", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"Repeat password", labelWidth:130, inputWidth:500 },
				{
					cols:[
						{},
						{ view:"button", value:"Reset", width:150 },
						{ view:"button", value:"Save", type:"form", width:150 }
					]
				},
				{ type:"section", template:"Personal settings" },
				{ view:"text", label:"First name", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"Last name", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"Email", labelWidth:130, inputWidth:500 },
				{ view:"text", label:"Phone", labelWidth:130, inputWidth:500 },
				{
					cols:[
						{},
						{ view:"button", value:"Reset", width:150 },
						{ view:"button", value:"Save", type:"form", width:150 }
					]
				},
				{}
			]
		};
	}
}