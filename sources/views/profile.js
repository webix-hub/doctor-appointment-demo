import {JetView,plugins} from "webix-jet";
import MainInfoView from "views/maininfo";
import ReviewsView from "views/reviews";
import FriendsView from "views/friends";
import FriendsActivityView from "views/friendsactivity";

export default class ProfileView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"scrollview", borderless:true,
			body:{
				type:"wide",
				cols:[
					{
						type:"wide",
						rows:[
							MainInfoView,
							ReviewsView
						]
					},
					{
						gravity:2,
						type:"wide",
						rows:[
							{
								gravity:2,
								rows:[
									{
										view:"toolbar", css:theme.toolbar,
										paddingX:17, elements:[
											{},
											{
												view:"segmented", localId:"segmented",
												width:300,
												options:[
													{ id:"profileinfo", value:"About" },
													{ id:"settings", value:"Settings" }
												]
											}
										]
									},
									{ $subview:true }
								]
							},
							//FriendsActivityView
							{}
						]
					},
					{
						type:"wide",
						rows:[
							FriendsView,
							{}
						]
					}
				]
			}
		};
	}
	init(){
		this.use(plugins.Menu,"segmented");
	}
}