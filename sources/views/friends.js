import {JetView} from "webix-jet";
import {getFriends} from "models/friends";

export default class FriendsView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			minHeight:280,
			rows:[
				{
					view:"toolbar", css:theme, elements:[
						{ view:"label", template:"Friends", localId:"header" },
						{},
						{
							view:"nstateicon", tooltip:true, tip:"Show",
							icons:[
								"mdi mdi-toggle-switch-off-outline",
								"mdi mdi-toggle-switch"
							],
							states:[
								"online", "all"
							],
							on:{
								onStateChange:function(state){
									const list = this.$scope.$$("list");
									list.filter("status",this.config.states[--state]);
									this.$scope.$$("header").setHTML(`Friends (${list.count()})`);
								}
							}
						},
						{
							view:"nstateicon", tooltip:"Sort bt A-Z",
							icons:[
								"mdi mdi-sort-descending",
								"mdi mdi-sort-ascending"
							],
							states:[
								"asc", "desc"
							],
							on:{
								onStateChange: state => this.$$("list").sort("name",state)
							}
						}
					]
				},
				{
					view:"list", css:"persons_list", select:true,
					localId:"list",
					type:{
						height:65,
						width:"auto",
						template:obj => {
							return `<image class="doctorphoto" src="data/photos/${obj.photo}_1.jpg" />
							<div class="text">
						  		<span class="doctorname">${obj.name}</span>
								<span class="field">${(obj.field)}</span>
								<span class="webix_icon mdi mdi-circle status ${obj.status}"></span>
							</div>`
						}
					}
				}
			]
		};
	}
	init(){
		const list = this.$$("list");
		list.parse(getFriends());
		this.$$("header").setHTML(`Friends (${list.count()})`);
	}
}