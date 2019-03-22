import {JetView} from "webix-jet";
import {getReviews} from "models/reviews";
import "webix/nstateicon";

export default class ReviewsView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:this.app.config.theme, elements:[
						{ width:6 },
						{ view:"label", label:"Reviews" },
						{},
						{
							view:"nstateicon", tooltip:"Sort by stars",
							icons:[
								"mdi mdi-sort-ascending",
								"mdi mdi-sort-descending"
							],
							states:[
								"asc", "desc"
							],
							on:{
								onStateChange: state => this.$$("reviews").sort("stars",state)
							}
						}
					]
				},
				{
					view:"dataview", xCount:1, select:true,
					css:"reviews", localId:"reviews",
					height:466, minWidth:310,
					type:{
						width:"auto", type:"tiles", height:56,
						template:obj => {
							let result = "";
							for (let i = 1; i <= 5; i++){
								let color = (i <= obj.stars) ? "gold" : "grey";
								result += `<span class='webix_icon mdi mdi-star star ${color} ${i}'></span>`;
							}
							return `<span class="criterion">${obj.value}</span>
							<span class="stars">${result}</span>`;
						}
					}
				}
			]
		};
	}
	init(){
		this.$$("reviews").parse(getReviews());
	}
}