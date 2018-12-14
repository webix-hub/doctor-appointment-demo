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
						this.editButtons(),
						{
							view:"icon", icon:"mdi mdi-pencil",
							localId:"edit:icon", 
							click:function(){
								this.$scope.$$("edit:btns").show();
								this.$scope.show("profileedit");
								this.hide();
							}
						}
					]
				},
				{ $subview:true }
			]
		};
	}
	editButtons(){
		return {
			hidden:true, localId:"edit:btns",
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
						this.endEdit();
					}
				}
			]
		};
	}
	endEdit(){
		this.$$("edit:icon").show();
		this.$$("edit:btns").hide();
		this.show("about");
	}
}