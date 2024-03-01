gdjs.StartCode = {};
gdjs.StartCode.GDBackgroundBlueDesertObjects1= [];
gdjs.StartCode.GDBackgroundBlueDesertObjects2= [];
gdjs.StartCode.GDLargePlayButtonObjects1= [];
gdjs.StartCode.GDLargePlayButtonObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.StartCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDLargePlayButtonObjects1[k] = gdjs.StartCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FakeLoading", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDBackgroundBlueDesertObjects1.length = 0;
gdjs.StartCode.GDBackgroundBlueDesertObjects2.length = 0;
gdjs.StartCode.GDLargePlayButtonObjects1.length = 0;
gdjs.StartCode.GDLargePlayButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
