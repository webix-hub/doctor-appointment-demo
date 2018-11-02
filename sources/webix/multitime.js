const options = [
	"10:00 AM - 14:00 PM",
	"11:00 AM - 15:00 PM",
	"14:00 PM - 18:00 PM",
	"15:00 PM - 19:00 PM"
];

webix.protoUI({
	name:"multitime",
	defaults:{
	  	borderless:true,
		rows:[
			{
				margin:10, cols:[
					{ view:"text", label:"Day(s)", labelWidth:50, name:"day0" },
					{
						view:"combo", name:"time0", label:"Time", labelWidth:50,
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
	_extraInputs:[],
	addInput:function(view){
		const newSec = view.addView({
			margin:10, cols:[
				{ view:"text", label:"Day", labelWidth:50, name:"day" + view.getChildViews().length },
				{
					view:"combo", label:"Time", labelWidth:50,
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
	},
	removeInput:function(section){
		this.removeView(section);
	},
	setValue(value){
		const dataLines = Object.keys(value).length / 2;
		const inputs = this.getChildViews().length;
		const delta = dataLines - inputs;

		if (delta > 0)
			for (let i = 0; i < delta; i++)
				this.addInput(this);
		else if (delta < 0)
			for (let i = 1; i <= (-1)*delta; i++){
				this.removeInput(this._extraInputs[inputs-i-1]);
			}

		this.setValues(value);
	},
	getValue(){
		return this.getValues();
	}
}, webix.ui.form);