import {JetView,plugins} from "webix-jet";
import MainInfoView from "views/maininfo";
import ReviewsView from "views/reviews";
import FriendsView from "views/friends";

export default class ProfileView extends JetView {
	config(){
		const theme = this.app.config.theme;
		const size = this.app.config.size;

		const mainBar = {
			type:"wide",
			width:310,
			rows:[
				MainInfoView,
				ReviewsView,
				{}
			]
		};
		const midBar = {
			view:"scrollview", borderless:true,
			body:{
				rows:[
					{
						view:"toolbar", css:theme,
						paddingX:17, elements:[
							{
								view:"segmented", localId:"segmented",
								width:300,
								options:[
									{ id:"profileinfo", value:"About" },
									{ id:"settings", value:"Settings" }
								]
							},
							{}
						]
					},
					{ $subview:true }
				]
			}
		};
		const friendsList = {
			type:"wide",
			rows:[
				FriendsView,
				{}
			]
		};

		const wideConf = [
			mainBar, midBar, friendsList
		];
		const narrowConf = [
			mainBar, midBar
		];

		return {
			type:"space",
			cols:size !== "small" ? wideConf : narrowConf
		};
	}
	init(){
		this.use(plugins.Menu,{
			id:"segmented",
			urls:{
				"profileinfo":"profileinfo/about"
			}
		});
	}
}