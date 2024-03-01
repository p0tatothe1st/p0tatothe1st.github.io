gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDBButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPlusObjects1= [];
gdjs.Untitled_32sceneCode.GDPlusObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueBackground2Objects1= [];
gdjs.Untitled_32sceneCode.GDBlueBackground2Objects2= [];
gdjs.Untitled_32sceneCode.GDFlagYellowObjects1= [];
gdjs.Untitled_32sceneCode.GDFlagYellowObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBlueBackground2Objects1Objects = Hashtable.newFrom({"BlueBackground2": gdjs.Untitled_32sceneCode.GDBlueBackground2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDFlagYellowObjects1Objects = Hashtable.newFrom({"FlagYellow": gdjs.Untitled_32sceneCode.GDFlagYellowObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.Untitled_32sceneCode.GDPlusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlusObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlusObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlusObjects1[k] = gdjs.Untitled_32sceneCode.GDPlusObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlusObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.Untitled_32sceneCode.GDBButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Untitled_32sceneCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.Untitled_32sceneCode.GDBButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBackground2"), gdjs.Untitled_32sceneCode.GDBlueBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, "PlatformerObject", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBlueBackground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(58);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setY(233);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlagYellow"), gdjs.Untitled_32sceneCode.GDFlagYellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDFlagYellowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBottomArrowButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlusObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlusObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBackground2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueBackground2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlagYellowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlagYellowObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
