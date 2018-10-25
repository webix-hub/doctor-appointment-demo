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
					view:"scrollview",
					body:{
						type:"wide",
						rows:[
							RegistryView,
							{
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
							}
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