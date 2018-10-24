import {JetView} from "webix-jet";
import PersonsView from "views/persons";
import DatesView from "views/dates";
import RegistryView from "views/registry";
import InformationView from "views/information";
import StatisticsView from "views/statistics";

export default class DashboardView extends JetView{
	config(){
		return {
			type:"wide",
			cols:[
				{
					type:"wide",
					rows:[
						RegistryView,
						{
							height:420,
							type:"wide",
							cols:[
								InformationView,
								StatisticsView
							]
						}
					]
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