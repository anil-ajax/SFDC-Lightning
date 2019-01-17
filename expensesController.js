({
	doInit : function(component, event, helper) {
		var action = component.get('c.getExpenseDetails');
        
        action.setCallback(this, function(res){
            var resData = res.getReturnValue();
            //console.log(resData);
            component.set("v.expense", resData);
            //return resData;
        })
        
        $A.enqueueAction(action, false);
	},
    makeEditable : function(component, event, helper) {
		var tagetId = event.currentTarget;
    	var id_str = tagetId.dataset.value;
        //alert($('#'+id_str));
        $('#id_'+id_str).prop('type', 'text');
	},
    inlineUpdate : function(component, event, helper) {
		var tagetId = event.currentTarget;
    	var id_str = tagetId.dataset.value;
        id_str = id_str;
        var newName = $("#id_"+id_str).val();
        //alert(newName);
        $('#id_'+id_str).prop('type', 'hidden');
        
        var saveAction = component.get('c.saveExpense');
        
        saveAction.setParams({
            id : id_str,
            name : newName
        })

                
        // send save request       
        saveAction.setCallback(this, function(res){
            console.log(res);
        }, 'SUCCESS')
        
        $A.enqueueAction(saveAction, false);
	},
})
