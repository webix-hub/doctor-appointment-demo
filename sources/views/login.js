import {JetView} from "webix-jet";

export default class LoginView extends JetView{
	config(){
		const logo = {
			rows:[
				{
					cols:[
						{},{ css:"logo", width:100, height:50 }, {}
					]
				},
				{
					cols:[
						{},
						{ view:"label", template:"Log Into Doctor Appointment Demo", width:232 },
						{}
					]
				}
			]
		};

		const buttons = {
			margin:20, rows:[
				{ view:"checkbox", labelRight:"Remember me", labelWidth:0 },
				{
					cols:[
						{},
						{
							margin:20, width:140,
							rows:[
								{
									view:"button", type:"form", value:"Log in"
								},
								{
									template:"<a href=\"#\">Forgot password?</a>",
									autoheight:true, borderless:true, css:"link"
								}
							]
						},
						{}
					]
				}
			]
		};

		return {
			type:"space",
			rows:[
				{},
				{
					cols:[
						{},
						{
							view:"form",
							margin:20, padding:30,
							height:440, width:360,
							elements:[
								logo,
								{
									view:"text", name:"name", localId:"name",
									label:"<span class=\"webix_icon mdi mdi-account\">",
									labelWidth:30, placeholder:"Username"
								},
								{
									view:"text", type:"password", name:"password",
									label:"<span class=\"webix_icon mdi mdi-lock\">",
									labelWidth:30, placeholder:"Password"
								},
								buttons
							]
						},
						{}
					]
				},
				{}
			]
		};
	}
	init(){
		webix.delay(() => this.$$("name").focus());
	}
}