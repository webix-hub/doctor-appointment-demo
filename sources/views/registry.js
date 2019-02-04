import {JetView} from "webix-jet";
import {persons} from "models/persons";

export default class RegistryView extends JetView {
	config(){
		return {
			css:this.app.config.shadows,
			minHeight:360,
			rows:[
				{
					view:"toolbar", css:this.app.config.theme,
					elements:[
						{ view:"label", template:"Visits" }
					]
				},
				{
					view:"datatable",
					localId:"grid",
					select:true,
					columns:[
						{ id:"id", header:"", width:30, sort:"int" },
						{
							id:"type", header:"", sort:"int",
							width:34,
							template:data => {
								let type = (data.type == 1) ? "gold" : "grey";
								return `<span class='webix_icon mdi mdi-star ${type}'></span>`;
							}
						},
						{
							id:"date", header:"Date",
							fillspace:1,
							sort:"date", format:webix.Date.dateToStr("%j %F")
						},
						{
							id:"name", header:"Name", sort:"text",
							fillspace:2
						},
						{ id:"email", header:"Email", sort:"text", fillspace:2 },
						{ id:"diagnosis", header:"Diagnosis", sort:"text", fillspace:2 },
						{ id:"symptoms", header:"Symptoms", sort:"text", fillspace:3 }
					],
					on:{
						onAfterSelect:record => this.app.callEvent("record:select",[record])
					},
					onClick:{
						"mdi-star":(ev,record) => {
							const old_type = persons.getItem(record.row).type;
							const new_type = old_type == 1 ? 2 : 1;
							persons.updateItem(record.row,{ type:new_type });
							return false;
						}
					}
				}
			]
		};
	}
	init(){
		const grid = this.$$("grid");
		grid.sync(persons);

		this.on(this.app,"person:select",person => grid.select(person.id));

		this.on(this.app,"date:select",date => {
			if (date) grid.filter(obj => !(obj.date < date) && !(obj.date > date));
			else grid.filter();
		});
	}
}
