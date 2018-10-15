export const persons = new webix.DataCollection({
	url:"data/persons.json",
	scheme:{
		$init:function(obj){
			obj.date = new Date();
		}
	}
});
