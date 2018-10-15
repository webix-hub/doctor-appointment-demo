import {JetView} from "webix-jet";
import {persons} from "models/persons";

export default class PersonsView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar",
					elements:[
						{ view:"label", label:"Persons", localId:"label" },
						{ width:4 },
						{
							view:"text", localId:"search", hidden:true,
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
							view:"icon", icon:"mdi mdi-magnify",
							state:"closed", localId:"search_icon",
							click:function(){
								if (this.config.state === "closed"){
									this.$scope.$$("label").hide();
									this.$scope.$$("search").show();
									this.$scope.$$("search").focus();
									this.config.state = "open";
								}
								else if (this.config.state === "open"){
									this.$scope.$$("label").show();
									this.$scope.$$("search").hide();
									this.config.state = "closed";
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
					tooltip:{
						template:"Click twice to see more goodies"
					},
					type:{
						template:obj => `<image class="userphoto" src="data/photos/${obj.photo}.jpg" />
							<div class="text">
						  		<span class="username">${obj.fname} ${obj.lname}</span>
						  		<span class="patient">${obj.type}</span>
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
	}
}
