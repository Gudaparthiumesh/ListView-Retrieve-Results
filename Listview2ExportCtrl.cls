public class Listview2ExportCtrl {
    @Auraenabled
    public static List<string> getObjects(){ 
        List<string> objectList = new List<string>();
        for(Schema.SObjectType objTyp : Schema.getGlobalDescribe().Values()){
            String name = objTyp.getDescribe().getName();
            if(!name.containsignorecase('history') && !name.containsignorecase('tag')&&
               !name.containsignorecase('share') && !name.containsignorecase('feed')){      
                   objectList.add(name);
                   objectList.sort();
               }
        }
        return objectList;
    }
    @Auraenabled
    public static List<ListView> fetchListViews(String selectedObj){
        List<ListView> oListView= new List<ListView>();
        for(ListView lv : [SELECT id, Name, DeveloperName FROM ListView
                           WHERE sObjectType = : selectedObj ORDER By Name ASC]){ 
                               oListView.add(lv);
                           }
        return oListView; 
    }
}