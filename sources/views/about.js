import {JetView} from "webix-jet";

export default class AboutView extends JetView {
	config(){
		return {
			rows:[
				{ template:"about" },
				{ template:"Working time" },
				{ template:"specialities" },
				{ template:"qualification" }
			]
		};
	}
}