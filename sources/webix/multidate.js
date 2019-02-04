webix.protoUI({
	name:"multidate",
	$init:function(config){
		config.body = {
			margin:5, rows:[this._getForm("plus")]
		};
	
		this.$ready.push(() => {
			this._inputs = [this.queryView("form").config.id];
		});  
	},
	_getForm:function(mode){
		const id = webix.uid();
		return {
			view:"form", id:id, borderless:true, padding:0,
			cols:[
				{ view:"text", label:"Step", labelWidth:65, name:"step" },
				{ width:5 },
				{ view:"daterangepicker", stringResult:true, name:"time", label:"When", labelWidth:65 }, 
				{
					view:"icon", icon:"wxi-"+mode+"-circle", 
					click:() => { 
						if (mode == "plus") this.addInput(); 
						else  this.removeInput(id);
					}
				}
			]
		}
	},
	addInput:function(){
		const section = this.getBody().addView(this._getForm("minus"));
		this._inputs.push(section);
	},
	removeInput:function(id){
		for (var i = 0; i < this._inputs.length; i++){
			if (this._inputs[i] == id){
				this._inputs.splice(i, 1);
				break;
			}
		}
		this.getBody().removeView(id);
	},
	setValue(value){
		const dataLines = value.length; 
		const inputs = this.getChildViews().length;
		const delta = dataLines - inputs;  
	
		if (delta > 0){
			for (let i = 0; i < delta; i++)
				this.addInput(this);
		}
		else if (delta < 0){
			for (let i = 1; i <= (-1)*delta; i++){
				this.removeInput(inputs-i-1);
			}
		}
	
		this._inputs.forEach((view, i) => {
			$$(view).setValues(value[i]);
		});
	},
	getValue(){
		let values = [];
		this._inputs.forEach((view) => {
			const vs = $$(view).getValues();
			//if (vs["step"] || (vs["time"].start && vs["time"].end))
			if (!this._isEmpty(vs))
				values.push(vs);
		});
		return values;
	},
	_isEmpty(obj){
		for (let i in obj){
			if (typeof obj[i] === "object")
				return this._isEmpty(obj[i]);
			else
				if (obj[i]) return false;
		}
		return true;
	}
}, webix.ui.forminput);