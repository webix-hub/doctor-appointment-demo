webix.protoUI({
	name:"photo",
	defaults:{
		width:260,
		height:260
	},
	getValue(){
		return this.config.value;
	},
	setValue(value){
		const height = width = this.config.height;
		this.setHTML(`<img style="height:${height}px;width:${width}px;" src="data/photos/${value}_1.jpg">`);
		this.config.value = value;
	}
},
webix.ui.template);
