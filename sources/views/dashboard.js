import {JetView} from "webix-jet";
import PersonsView from "views/persons";
import DatesView from "views/dates";
import RegistryView from "views/registry";
import InformationView from "views/information";
import StatisticsView from "views/statistics";

export default class DashboardView extends JetView{
	config(){
		const form_and_chat = {
			type:"wide",
			height:420,
			cols:[
				StatisticsView,
				InformationView				
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
							form_and_chat,
							RegistryView
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