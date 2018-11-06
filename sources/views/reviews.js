import {JetView} from "webix-jet";
import {getReviews} from "models/reviews";
import "webix/nstateicon";

export default class ReviewsView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			minHeight:300,
			rows:[
				{
					view:"toolbar", css:theme, elements:[
						{ view:"label", template:"Reviews" },
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
					type:{
						width:"auto", type:"tiles", height:80,
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