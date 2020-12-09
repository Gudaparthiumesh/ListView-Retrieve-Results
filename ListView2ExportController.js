({
    doInit : function(cmp, event, helper) {
        var action = cmp.get("c.getObjects");
        action.setCallback(this, function(response) {
            var state = response.getState();
            var ObjectName=[];
            if (state === "SUCCESS") {
                var nst=response.getReturnValue();
                cmp.set("v.ObjectType",nst);
                cmp.set("v.displayAfterInit",true);
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
        });
        $A.enqueueAction(action);
    },
    getListViews : function(cmp, event, helper) {
        var getkey=cmp.find("pickedobjValue").get("v.value");
        cmp.set('v.selectedObjectName',getkey);
        var action = cmp.get("c.fetchListViews");
        action.setParams({"selectedObj":getkey});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res= response.getReturnValue();
                cmp.set("v.displayAfterSelectObj",true);
                cmp.set("v.retListViews",res);
            }
        });
        $A.enqueueAction(action);
    },
    getResults: function(cmp, evt, hlp) {
        cmp.set("v.spinner",true);
        cmp.set("v.ShowListViewResults",false);
        var getLstViewkey= cmp.find("pickedLstViewValue").get("v.value");
        cmp.set('v.selectedListViewName',getLstViewkey); 
        cmp.set("v.ShowListViewResults",true);
        cmp.set("v.spinner",false);
    },
})