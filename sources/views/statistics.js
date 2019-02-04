import {JetView} from "webix-jet";
import {getStatistics} from "models/statistics";

export default class StatisticsView extends JetView {
	config(){
		return {
			css:this.app.config.shadows,
			type:"clean", minWidth:196,
			rows:[
				{ template:"Total visits", type:"header", css:"webix_header chart_header" },
				{
					localId:"chart", view:"chart",
					type:"bar", barWidth:20,
					css:"patients_chart",
					xAxis:{
						lines:false,
						template:obj => {
							if (this.app.config.size !== "small")
								return obj.system;
							else
								return `<span title="${obj.system} system">${obj.system.slice(0,3)}</span>`;
						}
					},
					yAxis:{ start:0, step:15, end:90, color:"#fff" },
					legend:{
						values:[
							{ text:"Inpatients",color:"#8664C6" },
							{ text:"Outpatients",color:"#1CA1C1" }
						],
						valign:"bottom", align:"right", layout:"x",
						margin:4, padding:10,
						marker:{
							type:"round", width:7, height:8
						}
					},
					series:[
						{
							value:"#inpatients#",
							color:"#8664C6",
							tooltip:{
								template:"#inpatients#"
							}
						},
						{
							value:"#outpatients#",
							color:"#1CA1C1",
							tooltip:{
								template:"#outpatients#"
							}
						}
					],
					padding:{ left:40, top:5, bottom:44 }
				}
			]
		};
	}
	init(){
		this.$$("chart").parse(getStatistics());
	}
}
