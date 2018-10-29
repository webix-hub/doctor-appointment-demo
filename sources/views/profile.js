import {JetView,plugins} from "webix-jet";
import MainInfoView from "views/maininfo";
import ReviewsView from "views/reviews";
import FriendsView from "views/friends";

export default class ProfileView extends JetView {
	config(){
		return {
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
									view:"toolbar", elements:[
										{},
										{
											view:"segmented", localId:"segmented",
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
						{
							template:"friends activity"
						}
					]
				}
			]
		};
	}
	init(){
		this.use(plugins.Menu,"segmented");
	}
}