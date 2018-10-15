import {JetView} from "webix-jet";
import {persons} from "models/persons";

export default class RegistryView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", elements:[
						{ view:"label", template:"Visits" }
					]
				},
				{
					view:"datatable",
					localId:"grid",
					select:true,
					tooltip:true,
					columns:[
						{ id:"id", header:"#", width:40, sort:"int", tooltip:"" },
						{
							id:"type", header:"", sort:"int",
							tooltip:"#type#",
							width:40,
							template:data => {
								let type = data.type === "inpatient" ? "gold" : "grey";
								return `<span class='webix_icon mdi mdi-star ${type}'></span>`;
							}
						},
						{
							id:"date", header:"Date", tooltip:"",
							fillspace:1,
							sort:"date", format:webix.Date.dateToStr("%j %F")
						},
						{
							id:"", header:"Name", sort:"text",
							fillspace:1, tooltip:"",
							template:data => data.fname + " " + data.lname
						},
						{ id:"email", header:"Email", tooltip:"", fillspace:1 },
						{ id:"diagnosis", header:"Diagnosis", sort:"text", fillspace:2, tooltip:"" },
						{ id:"symptoms", header:"Symptoms", sort:"text", fillspace:3, tooltip:"" }
					]
				}
			]
		};
	}
	init(){
		const grid = this.$$("grid");
		grid.sync(persons);
		persons.waitData.then(() => grid.select(7));
	}
}
