import {JetView} from "webix-jet";
export default class DatesView extends JetView{
	config(){
		return {
			view:"calendar",
			width:250
		};
	}
	init(calendar){
		calendar.setValue(new Date(2019,0,1));
	}
}
