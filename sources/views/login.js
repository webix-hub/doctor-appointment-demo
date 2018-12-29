import {JetView} from "webix-jet";
import {getLoginData} from "helpers/userdata";

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
									view:"button", type:"form", value:"Log in",
									hotkey:"enter",
									click:() => {
										if (this.$$("form").validate()){
											const up = this.$$("form").getValues();
											if (up.user === this._loginData.user && up.password === this._loginData.password)
												this.show("/top/dashboard");
											else
												webix.message("Wrong login or password","error");
										}
									}
								},
								{
									template:"Forgot password?", localId:"tip",
									autoheight:true, borderless:true, css:"link",
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
							view:"form", localId:"form",
							margin:20, padding:30,
							height:440, width:360,
							elements:[
								logo,
								{
									view:"text", name:"user", localId:"name",
									label:"<span class=\"webix_icon mdi mdi-account\"></span>",
									labelWidth:30, placeholder:"Username"
								},
								{
									view:"search", type:"password",
									localId:"pswd", name:"password",
									icon:"wxi-eye",
									label:"<div class=\"webix_icon mdi mdi-lock\"></div>",
									labelWidth:30, placeholder:"Password",
									on:{
										onSearchIconClick: function(){
											var theInput = this.config.type;
	
											if (theInput !== "password") {
												this.config.icon = "wxi-eye";
												this.config.type = "password";
											}
											else if (theInput === "password") {
												this.config.icon = "wxi-eye-slash";
												this.config.type = "";
											}
											this.refresh();
										}
									}
								},
								buttons
							],
							rules:{
								$all:webix.rules.isNotEmpty
							}
						},
						{}
					]
				},
				{}
			]
		};
	}
	init(){
		this.$$("name").focus();
		
		// for demo only
		this._loginData = getLoginData();

		this.$$("name").setValue(this._loginData.user);
		this.$$("pswd").setValue(this._loginData.password);

		this._loginTip = webix.ui({
			view:"tooltip",
			template:"Don't worry.<br>Login is #user#<br>Password is #password#"
		});

		this._tipEvent = webix.event(this.$$("tip").$view,"click",(e) => {
			const coordinates = webix.html.pos(e);
			coordinates.x += 50;
			coordinates.y += 10;
			webix.delay(() => this._loginTip.show(this._loginData,coordinates));
		});
	}
	destroy(){
		webix.eventRemove(this._tipEvent);
	}
}