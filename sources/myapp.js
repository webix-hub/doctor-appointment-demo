import "./styles/app.css";
import {JetApp, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		let theme = "", shadows = "";
		try {
			theme = webix.storage.session.get("doctor_demo_theme");
			shadows = webix.storage.session.get("doctor_demo_shadows");
		}
		catch(err){
			webix.message("You blocked cookies. Themes and shadows won't be restored after page reload.","debug");
		}

		const size = () => {
			const screen = document.body.offsetWidth;
			return screen > 1415 ? "wide" : ( screen > 1200 ? "mid" : "small");
		};

		const defaults = {
			id			: APPNAME,
			version 	: VERSION,
			router 		: HashRouter,
			debug 		: !PRODUCTION,
			start 		: "/login",
			theme		: theme || "",
			shadows		: shadows || "",
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
