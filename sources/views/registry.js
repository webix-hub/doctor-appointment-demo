import {JetView} from "webix-jet";
import {persons} from "models/persons";

export default class RegistryView extends JetView {
	config(){
		return {
			view:"datatable",
			select:true,
			columns:[
				{ id:"id", header:"#", width:40, sort:"int" },
				{
					id:"type", header:"In/Out", sort:"int",
					template:data => {
						let type = data.type ? "incoming" : "outcoming";
						return `<span class='webix_icon mdi mdi-${type}'></span>`;
					}
				},
				{
					id:"date", header:"Date",
					sort:"date"
				},
				{
					id:"", header:"Name", sort:"text",
					template:data => {
						return data.fname + " " + data.lname;
					}
				},
				{
					id:"", header:"Gender",
					sort:"text",
					template: data => `<span class='webix_icon mdi mdi-${data.gender} ${data.gender}'></span>`
				},
				{ id:"email", header:"Email" },
				{ id:"visit", header:"Visit" /*1st or not*/ },
				{
					id:"diagnosis", header:"Diagnosis", sort:"text", fillspace:true
				}
			]
		};
	}
	init(grid){
		grid.sync(persons);
	}
}
