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
									view:"button", type:"form", value:"Log in",
									click:() => {
										if (this.$$("form").validate()){
											const up = this.$$("form").getValues();
											if (up.user === this._loginData.user && up.password === this._loginData.password)
												this.show("/top/dashboard");
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
									label:"<span class=\"webix_icon mdi mdi-account\">",
									labelWidth:30, placeholder:"Username",
									value:"awoolfe"
								},
								{
									view:"text", type:"password",
									localId:"pswd", name:"password",
									label:"<span class=\"webix_icon mdi mdi-lock\">",
									labelWidth:30, placeholder:"Password"
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
		webix.delay(() => this.$$("name").focus());
		
		// very dummy login and password
		let login = {
			user:"awoolfe",
			password:"sta7wi10hm8ar4en8tte"
		};
		try {
			login = webix.storage.session.get("demo_login_data")
		}
		catch(err){/* for blocked cookies */}
		this._loginData = login;

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