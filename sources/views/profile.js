import {JetView,plugins} from "webix-jet";
import MainInfoView from "views/maininfo";
import ReviewsView from "views/reviews";
import FriendsView from "views/friends";
import FriendsActivityView from "views/friendsactivity";

export default class ProfileView extends JetView {
	config(){
		return {
			view:"scrollview",
			body:{
				type:"wide",
				cols:[
					{
						type:"wide",
						rows:[
							MainInfoView,
							ReviewsView,
							FriendsView
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
										view:"toolbar", paddingX:17, elements:[
											{},
											{
												view:"segmented", localId:"segmented",
												width:300,
												options:[
													{ id:"about", value:"About" },
													{ id:"settings", value:"Settings" }
												]
											}
										]
									},
									{ $subview:true }
								]
							},
							FriendsActivityView
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