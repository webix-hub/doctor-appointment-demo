import {JetView} from "webix-jet";
export default class DatesView extends JetView{
	config(){
		return {
			view:"calendar",
			width:250,
			on:{
				onDateSelect:date => {}
			}
		};
	}
}
