gdjs.FakeLoadingCode = {};
gdjs.FakeLoadingCode.GDBlackSpaceObjects1= [];
gdjs.FakeLoadingCode.GDBlackSpaceObjects2= [];
gdjs.FakeLoadingCode.GDNewTextObjects1= [];
gdjs.FakeLoadingCode.GDNewTextObjects2= [];


gdjs.FakeLoadingCode.asyncCallback10011164 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}
gdjs.FakeLoadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.FakeLoadingCode.asyncCallback10011164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FakeLoadingCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSpace"), gdjs.FakeLoadingCode.GDBlackSpaceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FakeLoadingCode.GDBlackSpaceObjects1.length;i<l;++i) {
    if ( gdjs.FakeLoadingCode.GDBlackSpaceObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.FakeLoadingCode.GDBlackSpaceObjects1[k] = gdjs.FakeLoadingCode.GDBlackSpaceObjects1[i];
        ++k;
    }
}
gdjs.FakeLoadingCode.GDBlackSpaceObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FakeLoadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FakeLoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FakeLoadingCode.GDBlackSpaceObjects1.length = 0;
gdjs.FakeLoadingCode.GDBlackSpaceObjects2.length = 0;
gdjs.FakeLoadingCode.GDNewTextObjects1.length = 0;
gdjs.FakeLoadingCode.GDNewTextObjects2.length = 0;

gdjs.FakeLoadingCode.eventsList1(runtimeScene);

return;

}

gdjs['FakeLoadingCode'] = gdjs.FakeLoadingCode;
