import "./styles/app.css";
import {JetApp, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		let theme = "";
		try {
			theme = webix.storage.session.get("doctor_demo_theme");
		}
		catch(err){
			webix.message("You blocked cookies. Theme won't be restored after page reload.","debug");
		}

		const size = () => {
			const screen = document.body.offsetWidth;
			return screen > 1400 ? "wide" : "small";
		};

		const defaults = {
			id			: APPNAME,
			version 	: VERSION,
			router 		: HashRouter,
			debug 		: !PRODUCTION,
			start 		: "/login",
			theme		: theme || "",
			size		: size()
		};

		super({ ...defaults, ...config });

		webix.event(window, "resize", () => {
			const newSize = size();
			if (newSize != this.config.size){
				this.config.size = newSize;
				this.refresh();
			}
		});

		this.attachEvent("app:error:resolve", function() {
			webix.delay(() => this.show("/login"));
		});
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
		if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll)
			webix.CustomScroll.init();
		new MyApp().render();
	});
}
