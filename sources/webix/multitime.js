const options = [
	"10:00 AM - 14:00 PM",
	"11:00 AM - 15:00 PM",
	"14:00 PM - 18:00 PM",
	"15:00 PM - 19:00 PM"
];

webix.protoUI({
	name:"multitime",
	defaults:{
		borderless:true, padding:0,
		rows:[
			{
				margin:4, cols:[
					{ view:"text", label:"Day(s)", labelWidth:50, name:"day0" },
					{
						view:"combo", name:"time0", label:"Time", labelWidth:45,
						options:options
					},
					{
						view:"icon", icon:"mdi mdi-plus-circle",
						click:function(){
							var parent = this.getParentView().getParentView();
							parent.addInput(parent);
						}
					}
				]
			}
		]
	},
	addInput:function(view){
		const newSec = view.addView({
			margin:4, cols:[
				{ view:"text", label:"Day(s)", labelWidth:50, name:"day" + view.getChildViews().length },
				{
					view:"combo", label:"Time", labelWidth:45,
					name:"time" + view.getChildViews().length,
					options:options
				}, 
				{
					view:"icon", icon:"mdi mdi-minus-circle", 
					click:function(){
						var toRemove = this.getParentView();
						view.removeView(toRemove);
					}
				}
			]
		});
		this._extraInputs.push(newSec);
	}
}, webix.ui.multidate);