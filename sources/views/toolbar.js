import {JetView} from "webix-jet";

export default class ToolView extends JetView {
	config(){
		return {
			view:"toolbar",
			height:56,
			elements:[
				{
					paddingY:7,
					rows:[
						{
							view:"icon", icon:"mdi mdi-menu",
							click:() => this.app.callEvent("menu:toggle")
						}
					]
				},
				{ css:"logo" },
				{},
				{
					paddingY:7,
					rows:[
						{
							margin:8,
							cols:[
								{
									view:"icon", icon:"mdi mdi-bell",
									localId:"bell", badge:3,
									tooltip:"Open latest notifications",
									click:function(){
										
									}
								},
								{
									view:"icon", icon:"mdi mdi-settings",
									tooltip:"Go to settings",
									click:() => {}
								}
							]
						}
					]
				},
				{ width:6 }
			]
		};
	}
}
