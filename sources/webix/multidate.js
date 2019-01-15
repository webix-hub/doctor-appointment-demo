webix.protoUI({
	name:"multidate",
	defaults:{
		borderless:true, padding:0,
		rows:[
			{
				margin:4, cols:[
					{ view:"text", label:"Step", labelWidth:45, name:"step0" },
					{ view:"daterangepicker", name:"time0", label:"When", labelWidth:45 },
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
			margin:4, cols:[
				{ view:"text", label:"Step", labelWidth:45, name:"step" + view.getChildViews().length },
				{
					view:"daterangepicker", label:"When", labelWidth:45,
					name:"time" + view.getChildViews().length
				}, 
				{
					view:"icon", icon:"mdi mdi-minus-circle", 
					click:function(){
						var toRemove = this.getParentView();
						view.removeInput(toRemove);
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