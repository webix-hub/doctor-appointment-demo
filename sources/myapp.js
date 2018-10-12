import "./styles/app.css";
import {JetApp, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id			: APPNAME,
			version 	: VERSION,
			router 		: HashRouter,
			debug 		: !PRODUCTION,
			start 		: "/top/dashboard"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
		if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll)
			webix.CustomScroll.init();
		new MyApp().render();
	});
}
