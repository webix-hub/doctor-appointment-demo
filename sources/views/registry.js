import {JetView} from "webix-jet";
import {persons} from "models/persons";

export default class RegistryView extends JetView {
	config(){
		return {
			view:"datatable",
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
				// {
				// 	id:"gender", header:"Gender",
				// 	sort:"text", tooltip:"#gender#",
				// 	width:40,
				// 	template: data => `<span class='webix_icon mdi mdi-gender-${data.gender}'></span>`
				// },
				{ id:"email", header:"Email", tooltip:"", fillspace:1 },
				// {
				// 	id:"visit", header:"Visit", width:40,
				// 	tooltip:"#visit#",
				// 	template:data => {
				// 		const visit = (data.visit === "first time") ? "numeric-1-box" : "repeat";
				// 		return `<span class='webix_icon mdi mdi-${visit}'></span>`;
				// 	}
				// },
				{ id:"diagnosis", header:"Diagnosis", sort:"text", fillspace:2, tooltip:"" },
				{ id:"symptoms", header:"Symptoms", sort:"text", fillspace:3, tooltip:"" }
			]
		};
	}
	init(grid){
		grid.sync(persons);
		persons.waitData.then(() => grid.select(1));
	}
}
