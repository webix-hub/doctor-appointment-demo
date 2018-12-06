import {JetView} from "webix-jet";
import {persons} from "models/persons";
import "webix/nstateicon";

export default class PersonsView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			rows:[
				{
					view:"toolbar", css:theme.toolbar,
					localId:"toolbar",
					visibleBatch:"default",
					elements:[
						{ view:"label", label:"Patients", batch:"default" },
						{ width:4 },
						{
							view:"nstateicon", batch:"default",
							states:["inpatients","outpatients","all patients"],
							icons:["mdi mdi-all-inclusive","mdi mdi-hospital","mdi mdi-home"],
							tooltip:true, tip:"Click to show",
							on:{
								onStateChange:state => {
									this.$$("list").filter("type",state);
								}
							}
						},
						{
							view:"text", batch:"search", localId:"search",
							on:{
								onTimedKeyPress(){
									const input = this.getValue().toLowerCase();
									this.$scope.$$("list").filter(obj => {
										const name = obj.fname + " " + obj.lname;
										return name.toLowerCase().indexOf(input) !== -1;
									});
								}
							}
						},
						{
							view:"nstateicon",
							icons:["mdi mdi-magnify","mdi mdi-close"],
							states:["default","search"],
							on:{
								onStateChange:function(state){
									const batch = this.config.states[state];
									this.$scope.$$("toolbar").showBatch(batch);
									if (batch === "search") this.$scope.$$("search").focus();
								}
							}
						}
					]
				},
				{
					view:"list",
					localId:"list",
					css:"persons_list",
					width:250,
					select:true,
					type:{
						template:obj => `<image class="userphoto" src="data/photos/${obj.photo}_1.jpg" />
							<div class="text">
						  		<span class="username">${obj.fname} ${obj.lname}</span>
						  		<span class="patient">${(obj.type === 1) ? "Inpatient" : "Outpatient"}</span>
							</div>`,
						height:66
					},
					on:{
						onAfterSelect:id => {
							const person = persons.getItem(id);
							this.app.callEvent("person:select",[person]);
						}
					}
				}
			]
		};
	}
	init(){
		const list = this.$$("list");
		list.sync(persons);
		persons.waitData.then(() => list.select(7));

		this.on(this.app,"save:patient:data",data => {
			persons.updateItem(data.id,data);
		});

		this.on(this.app,"person:select",record => list.select(record.id));
	}
}
