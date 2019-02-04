import { JetView } from "webix-jet";
import PersonsView from "views/persons";
import DatesView from "views/dates";
import RegistryView from "views/registry";
import InformationView from "views/information";
import StatisticsView from "views/statistics";

export default class DashboardView extends JetView{
	config(){
		const form_and_chat = {
			type:"wide", margin:10, padding:{ top:11, bottom:10, right:2, left:2 },
			cols:[ StatisticsView, InformationView	]
		};

		return {
			//type:"space", margin:0, padding:5,
			cols:[
				{
					view:"scrollview", borderless:true,
					body:{
						type:"wide", margin:0, padding:{ top:0, bottom:11, right:5, left:10 },
						rows:[
							form_and_chat,
							RegistryView
						]
					}
				},
				{
					type:"wide", margin:10, padding:{ top:10, bottom:10, right:10, left:5 },
					rows:[
						PersonsView,
						DatesView
					]
				}
			]
		};
	}
	ready(){
		const viewsWithShadows = [];
		this.getRoot().queryView(function(view){
			if (view.config.css === "dashboard_panel")
				viewsWithShadows.push(view);
		});
		
		this.hover = [];
		this.mouseOut = [];
		for (let i = 0; i < viewsWithShadows.length; i++){
			this.hover.push(webix.event(viewsWithShadows[i].$view,"mouseover",() => {
				webix.html.addCss(viewsWithShadows[i].$view,"webix_shadow_medium");
			}));
			this.mouseOut.push(webix.event(viewsWithShadows[i].$view,"mouseout",() => {
				webix.html.removeCss(viewsWithShadows[i].$view,"webix_shadow_medium");
			}));
		}
	}
	destroy(){
		for (let i = 0; i < this.hover.length; i++)
			webix.eventRemove(this.hover[i]);
		for (let i = 0; i < this.mouseOut.length; i++)
			webix.eventRemove(this.mouseOut[i]);
	}
}