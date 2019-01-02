import { JetView } from "webix-jet";

export default class ProfileInfoView extends JetView {
	config(){
		return {
			padding:10,
			type:"form",
			rows:[
				{
					view:"toolbar", borderless:true, elements:[
						{ view:"label", template:"Personal info", css:"about_label" },
						{},
						this.editButtons("top"),
						{
							view:"icon", icon:"mdi mdi-pencil",
							localId:"edit:icon", 
							click:() => {
								this.show("profileedit");
								this.showButtons();
							}
						}
					]
				},
				{ $subview:true },
				this.editButtons("bottom")
			]
		};
	}
	editButtons(pos){
		return {
			hidden:true, localId:"edit:btns:"+pos,
			margin:5, cols:[
				{},
				{
					view:"button", value:"Cancel", width:100,
					click:() => this.endEdit()
				},
				{
					view:"button", value:"Save", type:"form", width:100,
					click:() => {
						this.app.callEvent("save:form:data");
					}
				}
			]
		};
	}
	endEdit(){
		this.$$("edit:icon").show();
		this.$$("edit:btns:top").hide();
		this.$$("edit:btns:bottom").hide();
		this.show("about");
		webix.delay(() => this.app.refresh());
	}
	showButtons(){
		this.$$("edit:btns:top").show();
		this.$$("edit:btns:bottom").show();
		this.$$("edit:icon").hide();
	}
	init(){
		if (this.getUrl()[1].page === "profileedit")
			this.showButtons(this.$$("edit:icon"));
	}
}