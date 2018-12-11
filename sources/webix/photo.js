webix.protoUI({
	name:"photo",
	defaults:{
		width:260,
		height:260
	},
	$init(config){
		if (config.value) webix.delay(() => this.setValue(config.value));
	},
	getValue(){
		return this.config.value;
	},
	setValue(value){
		let height, width;
		height = width = this.config.height;
		this.setHTML(`<img style="height:${height}px;width:${width}px;" src="data/photos/${value}_1.jpg" />`);
		this.config.value = value;
	}
}, webix.ui.template);
