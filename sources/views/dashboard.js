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
}