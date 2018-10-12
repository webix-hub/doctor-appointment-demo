import {JetView} from "webix-jet";
import PersonsView from "views/persons";
import DatesView from "views/dates";
import RegistryView from "views/registry";
import InformationView from "views/information";
import CompareView from "views/compare";

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
							height:370,
							type:"wide",
							cols:[
								InformationView,
								CompareView
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