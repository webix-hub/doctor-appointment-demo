import {JetView} from "webix-jet";
import PersonsView from "views/persons";
import DatesView from "views/dates";
import RegistryView from "views/registry";
import InformationView from "views/information";
import StatisticsView from "views/statistics";

export default class DashboardView extends JetView{
	config(){
		const form_and_chat = {
			id:"form-and-chart",
			type:"wide",
			rows:[
				{
					height:420,
					type:"wide",
					responsive:"form-and-chart",
					cols:[
						InformationView,
						StatisticsView
					]
				}
			]
		};

		return {
			type:"wide",
			cols:[
				{
					view:"scrollview",
					borderless:true,
					body:{
						type:"wide",
						rows:[
							RegistryView,
							form_and_chat
						]
					}
				},
				{
					type:"wide",
					rows:[
						PersonsView,
						DatesView
					]
				}
			]
		};
	}
}