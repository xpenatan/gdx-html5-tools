
var ImGui = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(ImGui = {})  {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof ImGui != 'undefined' ? ImGui : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_free","_malloc","_emscripten_bind_VoidPtr___destroy___0","_emscripten_bind_Im_CreateContext_0","_emscripten_bind_Im_DestroyContext_0","_emscripten_bind_Im_DestroyContext_1","_emscripten_bind_Im_GetCurrentContext_0","_emscripten_bind_Im_SetCurrentContext_1","_emscripten_bind_Im_GetIO_0","_emscripten_bind_Im_GetStyle_0","_emscripten_bind_Im_NewFrame_0","_emscripten_bind_Im_EndFrame_0","_emscripten_bind_Im_Render_0","_emscripten_bind_Im_GetDrawData_0","_emscripten_bind_Im_ShowDemoWindow_0","_emscripten_bind_Im_ShowDemoWindow_1","_emscripten_bind_Im_ShowMetricsWindow_0","_emscripten_bind_Im_ShowMetricsWindow_1","_emscripten_bind_Im_ShowDebugLogWindow_0","_emscripten_bind_Im_ShowDebugLogWindow_1","_emscripten_bind_Im_ShowStackToolWindow_0","_emscripten_bind_Im_ShowStackToolWindow_1","_emscripten_bind_Im_ShowAboutWindow_0","_emscripten_bind_Im_ShowAboutWindow_1","_emscripten_bind_Im_ShowStyleEditor_0","_emscripten_bind_Im_ShowStyleEditor_1","_emscripten_bind_Im_ShowStyleSelector_1","_emscripten_bind_Im_ShowFontSelector_1","_emscripten_bind_Im_ShowUserGuide_0","_emscripten_bind_Im_GetVersion_0","_emscripten_bind_Im_StyleColorsDark_0","_emscripten_bind_Im_StyleColorsDark_1","_emscripten_bind_Im_StyleColorsLight_0","_emscripten_bind_Im_StyleColorsLight_1","_emscripten_bind_Im_StyleColorsClassic_0","_emscripten_bind_Im_StyleColorsClassic_1","_emscripten_bind_Im_Begin_1","_emscripten_bind_Im_End_0","_emscripten_bind_Im_BeginChild_1","_emscripten_bind_Im_BeginChild_2","_emscripten_bind_Im_BeginChild_3","_emscripten_bind_Im_BeginChild_4","_emscripten_bind_Im_BeginChild2_1","_emscripten_bind_Im_BeginChild2_2","_emscripten_bind_Im_BeginChild2_3","_emscripten_bind_Im_BeginChild2_4","_emscripten_bind_Im_EndChild_0","_emscripten_bind_Im_IsWindowAppearing_0","_emscripten_bind_Im_IsWindowCollapsed_0","_emscripten_bind_Im_IsWindowFocused_0","_emscripten_bind_Im_IsWindowFocused_1","_emscripten_bind_Im_IsWindowHovered_0","_emscripten_bind_Im_IsWindowHovered_1","_emscripten_bind_Im_GetWindowDrawList_0","_emscripten_bind_Im_GetWindowDpiScale_0","_emscripten_bind_Im_GetWindowPos_0","_emscripten_bind_Im_GetWindowSize_0","_emscripten_bind_Im_GetWindowWidth_0","_emscripten_bind_Im_GetWindowHeight_0","_emscripten_bind_Im_GetWindowViewport_0","_emscripten_bind_Im_SetNextWindowPos_1","_emscripten_bind_Im_SetNextWindowPos_2","_emscripten_bind_Im_SetNextWindowPos_3","_emscripten_bind_Im_SetNextWindowSize_1","_emscripten_bind_Im_SetNextWindowSize_2","_emscripten_bind_Im_SetNextWindowSizeConstraints_2","_emscripten_bind_Im_SetNextWindowContentSize_1","_emscripten_bind_Im_SetNextWindowCollapsed_1","_emscripten_bind_Im_SetNextWindowCollapsed_2","_emscripten_bind_Im_SetNextWindowFocus_0","_emscripten_bind_Im_SetNextWindowScroll_1","_emscripten_bind_Im_SetNextWindowBgAlpha_1","_emscripten_bind_Im_SetNextWindowViewport_1","_emscripten_bind_Im_SetWindowPos_1","_emscripten_bind_Im_SetWindowPos_2","_emscripten_bind_Im_SetWindowSize_1","_emscripten_bind_Im_SetWindowSize_2","_emscripten_bind_Im_SetWindowCollapsed_1","_emscripten_bind_Im_SetWindowCollapsed_2","_emscripten_bind_Im_SetWindowFocus_0","_emscripten_bind_Im_SetWindowFontScale_1","_emscripten_bind_Im_SetWindowPos2_2","_emscripten_bind_Im_SetWindowPos2_3","_emscripten_bind_Im_SetWindowSize2_2","_emscripten_bind_Im_SetWindowSize2_3","_emscripten_bind_Im_SetWindowCollapsed2_2","_emscripten_bind_Im_SetWindowCollapsed2_3","_emscripten_bind_Im_SetWindowFocus2_1","_emscripten_bind_Im_GetContentRegionAvail_0","_emscripten_bind_Im_GetContentRegionMax_0","_emscripten_bind_Im_GetWindowContentRegionMin_0","_emscripten_bind_Im_GetWindowContentRegionMax_0","_emscripten_bind_Im_GetScrollX_0","_emscripten_bind_Im_GetScrollY_0","_emscripten_bind_Im_SetScrollX_1","_emscripten_bind_Im_SetScrollY_1","_emscripten_bind_Im_GetScrollMaxX_0","_emscripten_bind_Im_GetScrollMaxY_0","_emscripten_bind_Im_SetScrollHereX_0","_emscripten_bind_Im_SetScrollHereX_1","_emscripten_bind_Im_SetScrollHereY_0","_emscripten_bind_Im_SetScrollHereY_1","_emscripten_bind_Im_SetScrollFromPosX_1","_emscripten_bind_Im_SetScrollFromPosX_2","_emscripten_bind_Im_SetScrollFromPosY_1","_emscripten_bind_Im_SetScrollFromPosY_2","_emscripten_bind_Im_PushFont_1","_emscripten_bind_Im_PopFont_0","_emscripten_bind_Im_PushStyleColor_2","_emscripten_bind_Im_PushStyleColor2_2","_emscripten_bind_Im_PopStyleColor_0","_emscripten_bind_Im_PopStyleColor_1","_emscripten_bind_Im_PushStyleVar_2","_emscripten_bind_Im_PushStyleVar2_2","_emscripten_bind_Im_PopStyleVar_0","_emscripten_bind_Im_PopStyleVar_1","_emscripten_bind_Im_PushAllowKeyboardFocus_1","_emscripten_bind_Im_PopAllowKeyboardFocus_0","_emscripten_bind_Im_PushButtonRepeat_1","_emscripten_bind_Im_PopButtonRepeat_0","_emscripten_bind_Im_PushItemWidth_1","_emscripten_bind_Im_PopItemWidth_0","_emscripten_bind_Im_SetNextItemWidth_1","_emscripten_bind_Im_CalcItemWidth_0","_emscripten_bind_Im_PushTextWrapPos_0","_emscripten_bind_Im_PushTextWrapPos_1","_emscripten_bind_Im_PopTextWrapPos_0","_emscripten_bind_Im_GetFont_0","_emscripten_bind_Im_GetFontSize_0","_emscripten_bind_Im_GetFontTexUvWhitePixel_0","_emscripten_bind_Im_GetColorU32_1","_emscripten_bind_Im_GetColorU32_2","_emscripten_bind_Im_GetColorU322_1","_emscripten_bind_Im_GetColorU323_1","_emscripten_bind_Im_GetStyleColorVec4_1","_emscripten_bind_Im_Separator_0","_emscripten_bind_Im_SameLine_0","_emscripten_bind_Im_SameLine_1","_emscripten_bind_Im_SameLine_2","_emscripten_bind_Im_NewLine_0","_emscripten_bind_Im_Spacing_0","_emscripten_bind_Im_Dummy_1","_emscripten_bind_Im_Indent_0","_emscripten_bind_Im_Indent_1","_emscripten_bind_Im_Unindent_0","_emscripten_bind_Im_Unindent_1","_emscripten_bind_Im_BeginGroup_0","_emscripten_bind_Im_EndGroup_0","_emscripten_bind_Im_GetCursorPos_0","_emscripten_bind_Im_GetCursorPosX_0","_emscripten_bind_Im_GetCursorPosY_0","_emscripten_bind_Im_SetCursorPos_1","_emscripten_bind_Im_SetCursorPosX_1","_emscripten_bind_Im_SetCursorPosY_1","_emscripten_bind_Im_GetCursorStartPos_0","_emscripten_bind_Im_GetCursorScreenPos_0","_emscripten_bind_Im_SetCursorScreenPos_1","_emscripten_bind_Im_AlignTextToFramePadding_0","_emscripten_bind_Im_GetTextLineHeight_0","_emscripten_bind_Im_GetTextLineHeightWithSpacing_0","_emscripten_bind_Im_GetFrameHeight_0","_emscripten_bind_Im_GetFrameHeightWithSpacing_0","_emscripten_bind_Im_PushID_1","_emscripten_bind_Im_PushID2_2","_emscripten_bind_Im_PushID3_1","_emscripten_bind_Im_PushID4_1","_emscripten_bind_Im_PopID_0","_emscripten_bind_Im_GetID_1","_emscripten_bind_Im_GetID2_2","_emscripten_bind_Im_GetID3_1","_emscripten_bind_Im_TextUnformatted_1","_emscripten_bind_Im_TextUnformatted_2","_emscripten_bind_Im_Text_1","_emscripten_bind_Im_TextV_2","_emscripten_bind_Im_TextColored_2","_emscripten_bind_Im_TextColoredV_3","_emscripten_bind_Im_TextDisabled_1","_emscripten_bind_Im_TextDisabledV_2","_emscripten_bind_Im_TextWrapped_1","_emscripten_bind_Im_TextWrappedV_2","_emscripten_bind_Im_LabelText_2","_emscripten_bind_Im_LabelTextV_3","_emscripten_bind_Im_BulletText_1","_emscripten_bind_Im_BulletTextV_2","_emscripten_bind_Im_Button_1","_emscripten_bind_Im_Button_2","_emscripten_bind_Im_SmallButton_1","_emscripten_bind_Im_InvisibleButton_2","_emscripten_bind_Im_InvisibleButton_3","_emscripten_bind_Im_ArrowButton_2","_emscripten_bind_Im_Checkbox_2","_emscripten_bind_Im_CheckboxFlags_3","_emscripten_bind_Im_CheckboxFlags2_3","_emscripten_bind_Im_RadioButton_2","_emscripten_bind_Im_RadioButton2_3","_emscripten_bind_Im_ProgressBar_1","_emscripten_bind_Im_ProgressBar_2","_emscripten_bind_Im_ProgressBar_3","_emscripten_bind_Im_Bullet_0","_emscripten_bind_Im_Image_2","_emscripten_bind_Im_Image_3","_emscripten_bind_Im_Image_4","_emscripten_bind_Im_Image_6","_emscripten_bind_Im_ImageButton_3","_emscripten_bind_Im_ImageButton_4","_emscripten_bind_Im_ImageButton_5","_emscripten_bind_Im_ImageButton_6","_emscripten_bind_Im_ImageButton_7","_emscripten_bind_Im_BeginCombo_2","_emscripten_bind_Im_BeginCombo_3","_emscripten_bind_Im_EndCombo_0","_emscripten_bind_Im_Combo_3","_emscripten_bind_Im_Combo_4","_emscripten_bind_Im_DragFloat_2","_emscripten_bind_Im_DragFloat_3","_emscripten_bind_Im_DragFloat_4","_emscripten_bind_Im_DragFloat_5","_emscripten_bind_Im_DragFloat_6","_emscripten_bind_Im_DragFloat_7","_emscripten_bind_Im_DragFloat2_2","_emscripten_bind_Im_DragFloat2_3","_emscripten_bind_Im_DragFloat2_4","_emscripten_bind_Im_DragFloat2_5","_emscripten_bind_Im_DragFloat2_6","_emscripten_bind_Im_DragFloat2_7","_emscripten_bind_Im_DragFloat3_2","_emscripten_bind_Im_DragFloat3_3","_emscripten_bind_Im_DragFloat3_4","_emscripten_bind_Im_DragFloat3_5","_emscripten_bind_Im_DragFloat3_6","_emscripten_bind_Im_DragFloat3_7","_emscripten_bind_Im_DragFloat4_2","_emscripten_bind_Im_DragFloat4_3","_emscripten_bind_Im_DragFloat4_4","_emscripten_bind_Im_DragFloat4_5","_emscripten_bind_Im_DragFloat4_6","_emscripten_bind_Im_DragFloat4_7","_emscripten_bind_Im_DragFloatRange2_3","_emscripten_bind_Im_DragFloatRange2_4","_emscripten_bind_Im_DragFloatRange2_5","_emscripten_bind_Im_DragFloatRange2_6","_emscripten_bind_Im_DragFloatRange2_7","_emscripten_bind_Im_DragFloatRange2_8","_emscripten_bind_Im_DragFloatRange2_9","_emscripten_bind_Im_DragInt_2","_emscripten_bind_Im_DragInt_3","_emscripten_bind_Im_DragInt_4","_emscripten_bind_Im_DragInt_5","_emscripten_bind_Im_DragInt_6","_emscripten_bind_Im_DragInt_7","_emscripten_bind_Im_DragInt2_2","_emscripten_bind_Im_DragInt2_3","_emscripten_bind_Im_DragInt2_4","_emscripten_bind_Im_DragInt2_5","_emscripten_bind_Im_DragInt2_6","_emscripten_bind_Im_DragInt2_7","_emscripten_bind_Im_DragInt3_2","_emscripten_bind_Im_DragInt3_3","_emscripten_bind_Im_DragInt3_4","_emscripten_bind_Im_DragInt3_5","_emscripten_bind_Im_DragInt3_6","_emscripten_bind_Im_DragInt3_7","_emscripten_bind_Im_DragInt4_2","_emscripten_bind_Im_DragInt4_3","_emscripten_bind_Im_DragInt4_4","_emscripten_bind_Im_DragInt4_5","_emscripten_bind_Im_DragInt4_6","_emscripten_bind_Im_DragInt4_7","_emscripten_bind_Im_DragIntRange2_3","_emscripten_bind_Im_DragIntRange2_4","_emscripten_bind_Im_DragIntRange2_5","_emscripten_bind_Im_DragIntRange2_6","_emscripten_bind_Im_DragIntRange2_7","_emscripten_bind_Im_DragIntRange2_8","_emscripten_bind_Im_DragIntRange2_9","_emscripten_bind_Im_DragScalar_3","_emscripten_bind_Im_DragScalar_4","_emscripten_bind_Im_DragScalar_5","_emscripten_bind_Im_DragScalar_6","_emscripten_bind_Im_DragScalar_7","_emscripten_bind_Im_DragScalar_8","_emscripten_bind_Im_DragScalarN_4","_emscripten_bind_Im_DragScalarN_5","_emscripten_bind_Im_DragScalarN_6","_emscripten_bind_Im_DragScalarN_7","_emscripten_bind_Im_DragScalarN_8","_emscripten_bind_Im_DragScalarN_9","_emscripten_bind_Im_SliderFloat_4","_emscripten_bind_Im_SliderFloat_5","_emscripten_bind_Im_SliderFloat_6","_emscripten_bind_Im_SliderFloat2_4","_emscripten_bind_Im_SliderFloat2_5","_emscripten_bind_Im_SliderFloat2_6","_emscripten_bind_Im_SliderFloat3_4","_emscripten_bind_Im_SliderFloat3_5","_emscripten_bind_Im_SliderFloat3_6","_emscripten_bind_Im_SliderFloat4_4","_emscripten_bind_Im_SliderFloat4_5","_emscripten_bind_Im_SliderFloat4_6","_emscripten_bind_Im_SliderAngle_2","_emscripten_bind_Im_SliderAngle_3","_emscripten_bind_Im_SliderAngle_4","_emscripten_bind_Im_SliderAngle_5","_emscripten_bind_Im_SliderAngle_6","_emscripten_bind_Im_SliderInt_4","_emscripten_bind_Im_SliderInt_5","_emscripten_bind_Im_SliderInt_6","_emscripten_bind_Im_SliderInt2_4","_emscripten_bind_Im_SliderInt2_5","_emscripten_bind_Im_SliderInt2_6","_emscripten_bind_Im_SliderInt3_4","_emscripten_bind_Im_SliderInt3_5","_emscripten_bind_Im_SliderInt3_6","_emscripten_bind_Im_SliderInt4_4","_emscripten_bind_Im_SliderInt4_5","_emscripten_bind_Im_SliderInt4_6","_emscripten_bind_Im_SliderScalar_5","_emscripten_bind_Im_SliderScalar_6","_emscripten_bind_Im_SliderScalar_7","_emscripten_bind_Im_SliderScalarN_6","_emscripten_bind_Im_SliderScalarN_7","_emscripten_bind_Im_SliderScalarN_8","_emscripten_bind_Im_VSliderFloat_5","_emscripten_bind_Im_VSliderFloat_6","_emscripten_bind_Im_VSliderFloat_7","_emscripten_bind_Im_VSliderInt_5","_emscripten_bind_Im_VSliderInt_6","_emscripten_bind_Im_VSliderInt_7","_emscripten_bind_Im_VSliderScalar_6","_emscripten_bind_Im_VSliderScalar_7","_emscripten_bind_Im_VSliderScalar_8","_emscripten_bind_Im_InputText_3","_emscripten_bind_Im_InputText_4","_emscripten_bind_Im_InputTextMultiline_3","_emscripten_bind_Im_InputTextMultiline_4","_emscripten_bind_Im_InputTextMultiline_5","_emscripten_bind_Im_InputTextWithHint_4","_emscripten_bind_Im_InputTextWithHint_5","_emscripten_bind_Im_InputFloat_2","_emscripten_bind_Im_InputFloat_3","_emscripten_bind_Im_InputFloat_4","_emscripten_bind_Im_InputFloat_5","_emscripten_bind_Im_InputFloat_6","_emscripten_bind_Im_InputFloat2_2","_emscripten_bind_Im_InputFloat2_3","_emscripten_bind_Im_InputFloat2_4","_emscripten_bind_Im_InputFloat3_2","_emscripten_bind_Im_InputFloat3_3","_emscripten_bind_Im_InputFloat3_4","_emscripten_bind_Im_InputFloat4_2","_emscripten_bind_Im_InputFloat4_3","_emscripten_bind_Im_InputFloat4_4","_emscripten_bind_Im_InputInt_2","_emscripten_bind_Im_InputInt_3","_emscripten_bind_Im_InputInt_4","_emscripten_bind_Im_InputInt_5","_emscripten_bind_Im_InputInt2_2","_emscripten_bind_Im_InputInt2_3","_emscripten_bind_Im_InputInt3_2","_emscripten_bind_Im_InputInt3_3","_emscripten_bind_Im_InputInt4_2","_emscripten_bind_Im_InputInt4_3","_emscripten_bind_Im_InputDouble_2","_emscripten_bind_Im_InputDouble_3","_emscripten_bind_Im_InputDouble_4","_emscripten_bind_Im_InputDouble_5","_emscripten_bind_Im_InputDouble_6","_emscripten_bind_Im_InputScalar_3","_emscripten_bind_Im_InputScalar_4","_emscripten_bind_Im_InputScalar_5","_emscripten_bind_Im_InputScalar_6","_emscripten_bind_Im_InputScalar_7","_emscripten_bind_Im_InputScalarN_4","_emscripten_bind_Im_InputScalarN_5","_emscripten_bind_Im_InputScalarN_6","_emscripten_bind_Im_InputScalarN_7","_emscripten_bind_Im_InputScalarN_8","_emscripten_bind_Im_ColorEdit3_2","_emscripten_bind_Im_ColorEdit3_3","_emscripten_bind_Im_ColorEdit4_2","_emscripten_bind_Im_ColorEdit4_3","_emscripten_bind_Im_ColorPicker3_2","_emscripten_bind_Im_ColorPicker3_3","_emscripten_bind_Im_ColorPicker4_2","_emscripten_bind_Im_ColorPicker4_3","_emscripten_bind_Im_ColorPicker4_4","_emscripten_bind_Im_ColorButton_2","_emscripten_bind_Im_ColorButton_3","_emscripten_bind_Im_ColorButton_4","_emscripten_bind_Im_SetColorEditOptions_1","_emscripten_bind_Im_TreeNode_1","_emscripten_bind_Im_TreeNode2_2","_emscripten_bind_Im_TreeNode3_2","_emscripten_bind_Im_TreeNodeV_3","_emscripten_bind_Im_TreeNodeV2_3","_emscripten_bind_Im_TreeNodeEx_1","_emscripten_bind_Im_TreeNodeEx_2","_emscripten_bind_Im_TreeNodeEx2_3","_emscripten_bind_Im_TreeNodeEx3_3","_emscripten_bind_Im_TreeNodeExV_4","_emscripten_bind_Im_TreeNodeExV2_4","_emscripten_bind_Im_TreePush_1","_emscripten_bind_Im_TreePush2_1","_emscripten_bind_Im_TreePop_0","_emscripten_bind_Im_GetTreeNodeToLabelSpacing_0","_emscripten_bind_Im_CollapsingHeader_1","_emscripten_bind_Im_CollapsingHeader_2","_emscripten_bind_Im_CollapsingHeader2_2","_emscripten_bind_Im_CollapsingHeader2_3","_emscripten_bind_Im_SetNextItemOpen_1","_emscripten_bind_Im_SetNextItemOpen_2","_emscripten_bind_Im_Selectable_1","_emscripten_bind_Im_Selectable_2","_emscripten_bind_Im_Selectable_3","_emscripten_bind_Im_Selectable_4","_emscripten_bind_Im_Selectable2_2","_emscripten_bind_Im_Selectable2_3","_emscripten_bind_Im_Selectable2_4","_emscripten_bind_Im_BeginListBox_1","_emscripten_bind_Im_BeginListBox_2","_emscripten_bind_Im_EndListBox_0","_emscripten_bind_Im_ListBox_4","_emscripten_bind_Im_ListBox_5","_emscripten_bind_Im_PlotLines_3","_emscripten_bind_Im_PlotLines_4","_emscripten_bind_Im_PlotLines_5","_emscripten_bind_Im_PlotLines_6","_emscripten_bind_Im_PlotLines_7","_emscripten_bind_Im_PlotHistogram_3","_emscripten_bind_Im_PlotHistogram_4","_emscripten_bind_Im_PlotHistogram_5","_emscripten_bind_Im_PlotHistogram_6","_emscripten_bind_Im_PlotHistogram_7","_emscripten_bind_Im_Value_2","_emscripten_bind_Im_Value2_2","_emscripten_bind_Im_Value3_2","_emscripten_bind_Im_Value4_2","_emscripten_bind_Im_Value4_3","_emscripten_bind_Im_BeginMenuBar_0","_emscripten_bind_Im_EndMenuBar_0","_emscripten_bind_Im_BeginMainMenuBar_0","_emscripten_bind_Im_EndMainMenuBar_0","_emscripten_bind_Im_BeginMenu_1","_emscripten_bind_Im_BeginMenu_2","_emscripten_bind_Im_EndMenu_0","_emscripten_bind_Im_MenuItem_1","_emscripten_bind_Im_MenuItem_2","_emscripten_bind_Im_MenuItem_3","_emscripten_bind_Im_MenuItem_4","_emscripten_bind_Im_MenuItem2_3","_emscripten_bind_Im_MenuItem2_4","_emscripten_bind_Im_BeginTooltip_0","_emscripten_bind_Im_EndTooltip_0","_emscripten_bind_Im_SetTooltip_1","_emscripten_bind_Im_SetTooltipV_2","_emscripten_bind_Im_BeginPopup_1","_emscripten_bind_Im_BeginPopup_2","_emscripten_bind_Im_BeginPopupModal_1","_emscripten_bind_Im_BeginPopupModal_2","_emscripten_bind_Im_BeginPopupModal_3","_emscripten_bind_Im_EndPopup_0","_emscripten_bind_Im_OpenPopup_1","_emscripten_bind_Im_OpenPopup_2","_emscripten_bind_Im_OpenPopup2_1","_emscripten_bind_Im_OpenPopup2_2","_emscripten_bind_Im_OpenPopupOnItemClick_0","_emscripten_bind_Im_OpenPopupOnItemClick_1","_emscripten_bind_Im_OpenPopupOnItemClick_2","_emscripten_bind_Im_CloseCurrentPopup_0","_emscripten_bind_Im_BeginPopupContextItem_0","_emscripten_bind_Im_BeginPopupContextItem_1","_emscripten_bind_Im_BeginPopupContextItem_2","_emscripten_bind_Im_BeginPopupContextWindow_0","_emscripten_bind_Im_BeginPopupContextWindow_1","_emscripten_bind_Im_BeginPopupContextWindow_2","_emscripten_bind_Im_BeginPopupContextVoid_0","_emscripten_bind_Im_BeginPopupContextVoid_1","_emscripten_bind_Im_BeginPopupContextVoid_2","_emscripten_bind_Im_IsPopupOpen_1","_emscripten_bind_Im_IsPopupOpen_2","_emscripten_bind_Im_BeginTable_2","_emscripten_bind_Im_BeginTable_3","_emscripten_bind_Im_BeginTable_4","_emscripten_bind_Im_BeginTable_5","_emscripten_bind_Im_EndTable_0","_emscripten_bind_Im_TableNextRow_0","_emscripten_bind_Im_TableNextRow_1","_emscripten_bind_Im_TableNextRow_2","_emscripten_bind_Im_TableNextColumn_0","_emscripten_bind_Im_TableSetColumnIndex_1","_emscripten_bind_Im_TableSetupColumn_1","_emscripten_bind_Im_TableSetupColumn_2","_emscripten_bind_Im_TableSetupColumn_3","_emscripten_bind_Im_TableSetupColumn_4","_emscripten_bind_Im_TableSetupScrollFreeze_2","_emscripten_bind_Im_TableHeadersRow_0","_emscripten_bind_Im_TableHeader_1","_emscripten_bind_Im_TableGetSortSpecs_0","_emscripten_bind_Im_TableGetColumnCount_0","_emscripten_bind_Im_TableGetColumnIndex_0","_emscripten_bind_Im_TableGetRowIndex_0","_emscripten_bind_Im_TableGetColumnName_0","_emscripten_bind_Im_TableGetColumnName_1","_emscripten_bind_Im_TableGetColumnFlags_0","_emscripten_bind_Im_TableGetColumnFlags_1","_emscripten_bind_Im_TableSetColumnEnabled_2","_emscripten_bind_Im_TableSetBgColor_2","_emscripten_bind_Im_TableSetBgColor_3","_emscripten_bind_Im_Columns_0","_emscripten_bind_Im_Columns_1","_emscripten_bind_Im_Columns_2","_emscripten_bind_Im_Columns_3","_emscripten_bind_Im_NextColumn_0","_emscripten_bind_Im_GetColumnIndex_0","_emscripten_bind_Im_GetColumnWidth_0","_emscripten_bind_Im_GetColumnWidth_1","_emscripten_bind_Im_SetColumnWidth_2","_emscripten_bind_Im_GetColumnOffset_0","_emscripten_bind_Im_GetColumnOffset_1","_emscripten_bind_Im_SetColumnOffset_2","_emscripten_bind_Im_GetColumnsCount_0","_emscripten_bind_Im_BeginTabBar_1","_emscripten_bind_Im_BeginTabBar_2","_emscripten_bind_Im_EndTabBar_0","_emscripten_bind_Im_BeginTabItem_1","_emscripten_bind_Im_BeginTabItem_2","_emscripten_bind_Im_BeginTabItem_3","_emscripten_bind_Im_EndTabItem_0","_emscripten_bind_Im_TabItemButton_1","_emscripten_bind_Im_TabItemButton_2","_emscripten_bind_Im_SetTabItemClosed_1","_emscripten_bind_Im_DockSpace_1","_emscripten_bind_Im_DockSpace_2","_emscripten_bind_Im_DockSpace_3","_emscripten_bind_Im_DockSpace_4","_emscripten_bind_Im_DockSpaceOverViewport_0","_emscripten_bind_Im_DockSpaceOverViewport_1","_emscripten_bind_Im_DockSpaceOverViewport_2","_emscripten_bind_Im_DockSpaceOverViewport_3","_emscripten_bind_Im_SetNextWindowDockID_1","_emscripten_bind_Im_SetNextWindowDockID_2","_emscripten_bind_Im_SetNextWindowClass_1","_emscripten_bind_Im_GetWindowDockID_0","_emscripten_bind_Im_IsWindowDocked_0","_emscripten_bind_Im_LogToTTY_0","_emscripten_bind_Im_LogToTTY_1","_emscripten_bind_Im_LogToFile_0","_emscripten_bind_Im_LogToFile_1","_emscripten_bind_Im_LogToFile_2","_emscripten_bind_Im_LogToClipboard_0","_emscripten_bind_Im_LogToClipboard_1","_emscripten_bind_Im_LogFinish_0","_emscripten_bind_Im_LogButtons_0","_emscripten_bind_Im_LogText_1","_emscripten_bind_Im_LogTextV_2","_emscripten_bind_Im_BeginDragDropSource_0","_emscripten_bind_Im_BeginDragDropSource_1","_emscripten_bind_Im_SetDragDropPayload_3","_emscripten_bind_Im_SetDragDropPayload_4","_emscripten_bind_Im_EndDragDropSource_0","_emscripten_bind_Im_BeginDragDropTarget_0","_emscripten_bind_Im_AcceptDragDropPayload_1","_emscripten_bind_Im_AcceptDragDropPayload_2","_emscripten_bind_Im_EndDragDropTarget_0","_emscripten_bind_Im_GetDragDropPayload_0","_emscripten_bind_Im_BeginDisabled_0","_emscripten_bind_Im_BeginDisabled_1","_emscripten_bind_Im_EndDisabled_0","_emscripten_bind_Im_PushClipRect_3","_emscripten_bind_Im_PopClipRect_0","_emscripten_bind_Im_SetItemDefaultFocus_0","_emscripten_bind_Im_SetKeyboardFocusHere_0","_emscripten_bind_Im_SetKeyboardFocusHere_1","_emscripten_bind_Im_IsItemHovered_0","_emscripten_bind_Im_IsItemHovered_1","_emscripten_bind_Im_IsItemActive_0","_emscripten_bind_Im_IsItemFocused_0","_emscripten_bind_Im_IsItemClicked_0","_emscripten_bind_Im_IsItemClicked_1","_emscripten_bind_Im_IsItemVisible_0","_emscripten_bind_Im_IsItemEdited_0","_emscripten_bind_Im_IsItemActivated_0","_emscripten_bind_Im_IsItemDeactivated_0","_emscripten_bind_Im_IsItemDeactivatedAfterEdit_0","_emscripten_bind_Im_IsItemToggledOpen_0","_emscripten_bind_Im_IsAnyItemHovered_0","_emscripten_bind_Im_IsAnyItemActive_0","_emscripten_bind_Im_IsAnyItemFocused_0","_emscripten_bind_Im_GetItemID_0","_emscripten_bind_Im_GetItemRectMin_0","_emscripten_bind_Im_GetItemRectMax_0","_emscripten_bind_Im_GetItemRectSize_0","_emscripten_bind_Im_SetItemAllowOverlap_0","_emscripten_bind_Im_GetMainViewport_0","_emscripten_bind_Im_GetBackgroundDrawList_0","_emscripten_bind_Im_GetForegroundDrawList_0","_emscripten_bind_Im_GetBackgroundDrawList2_1","_emscripten_bind_Im_GetForegroundDrawList2_1","_emscripten_bind_Im_IsRectVisible_1","_emscripten_bind_Im_IsRectVisible2_2","_emscripten_bind_Im_GetTime_0","_emscripten_bind_Im_GetFrameCount_0","_emscripten_bind_Im_GetDrawListSharedData_0","_emscripten_bind_Im_GetStyleColorName_1","_emscripten_bind_Im_SetStateStorage_1","_emscripten_bind_Im_GetStateStorage_0","_emscripten_bind_Im_BeginChildFrame_2","_emscripten_bind_Im_BeginChildFrame_3","_emscripten_bind_Im_EndChildFrame_0","_emscripten_bind_Im_CalcTextSize_1","_emscripten_bind_Im_CalcTextSize_2","_emscripten_bind_Im_CalcTextSize_3","_emscripten_bind_Im_CalcTextSize_4","_emscripten_bind_Im_ColorConvertU32ToFloat4_1","_emscripten_bind_Im_ColorConvertFloat4ToU32_1","_emscripten_bind_Im_ColorConvertRGBtoHSV_6","_emscripten_bind_Im_ColorConvertHSVtoRGB_6","_emscripten_bind_Im_IsKeyDown_1","_emscripten_bind_Im_IsKeyPressed_1","_emscripten_bind_Im_IsKeyPressed_2","_emscripten_bind_Im_IsKeyReleased_1","_emscripten_bind_Im_GetKeyPressedAmount_3","_emscripten_bind_Im_GetKeyName_1","_emscripten_bind_Im_SetNextFrameWantCaptureKeyboard_1","_emscripten_bind_Im_IsMouseDown_1","_emscripten_bind_Im_IsMouseClicked_1","_emscripten_bind_Im_IsMouseClicked_2","_emscripten_bind_Im_IsMouseReleased_1","_emscripten_bind_Im_IsMouseDoubleClicked_1","_emscripten_bind_Im_GetMouseClickedCount_1","_emscripten_bind_Im_IsMouseHoveringRect_2","_emscripten_bind_Im_IsMouseHoveringRect_3","_emscripten_bind_Im_IsMousePosValid_0","_emscripten_bind_Im_IsMousePosValid_1","_emscripten_bind_Im_IsAnyMouseDown_0","_emscripten_bind_Im_GetMousePos_0","_emscripten_bind_Im_GetMousePosOnOpeningCurrentPopup_0","_emscripten_bind_Im_IsMouseDragging_1","_emscripten_bind_Im_IsMouseDragging_2","_emscripten_bind_Im_GetMouseDragDelta_0","_emscripten_bind_Im_GetMouseDragDelta_1","_emscripten_bind_Im_GetMouseDragDelta_2","_emscripten_bind_Im_ResetMouseDragDelta_0","_emscripten_bind_Im_ResetMouseDragDelta_1","_emscripten_bind_Im_GetMouseCursor_0","_emscripten_bind_Im_SetMouseCursor_1","_emscripten_bind_Im_SetNextFrameWantCaptureMouse_1","_emscripten_bind_Im_GetClipboardText_0","_emscripten_bind_Im_SetClipboardText_1","_emscripten_bind_Im_LoadIniSettingsFromDisk_1","_emscripten_bind_Im_LoadIniSettingsFromMemory_1","_emscripten_bind_Im_LoadIniSettingsFromMemory_2","_emscripten_bind_Im_SaveIniSettingsToDisk_1","_emscripten_bind_Im_SaveIniSettingsToMemory_0","_emscripten_bind_Im_DebugTextEncoding_1","_emscripten_bind_Im_DebugCheckVersionAndDataLayout_7","_emscripten_bind_Im_MemAlloc_1","_emscripten_bind_Im_MemFree_1","_emscripten_bind_Im_GetPlatformIO_0","_emscripten_bind_Im_UpdatePlatformWindows_0","_emscripten_bind_Im_RenderPlatformWindowsDefault_0","_emscripten_bind_Im_RenderPlatformWindowsDefault_1","_emscripten_bind_Im_RenderPlatformWindowsDefault_2","_emscripten_bind_Im_DestroyPlatformWindows_0","_emscripten_bind_Im_FindViewportByID_1","_emscripten_bind_Im_FindViewportByPlatformHandle_1","_emscripten_bind_BoolArray_BoolArray_1","_emscripten_bind_BoolArray_resize_1","_emscripten_bind_BoolArray_getValue_1","_emscripten_bind_BoolArray_setValue_2","_emscripten_bind_BoolArray_getPointer_0","_emscripten_bind_BoolArray_get_size_0","_emscripten_bind_BoolArray_set_size_1","_emscripten_bind_BoolArray___destroy___0","_emscripten_bind_IntArray_IntArray_1","_emscripten_bind_IntArray_resize_1","_emscripten_bind_IntArray_getValue_1","_emscripten_bind_IntArray_setValue_2","_emscripten_bind_IntArray_getPointer_0","_emscripten_bind_IntArray_get_size_0","_emscripten_bind_IntArray_set_size_1","_emscripten_bind_IntArray___destroy___0","_emscripten_bind_FloatArray_FloatArray_1","_emscripten_bind_FloatArray_resize_1","_emscripten_bind_FloatArray_getValue_1","_emscripten_bind_FloatArray_setValue_2","_emscripten_bind_FloatArray_getPointer_0","_emscripten_bind_FloatArray_get_size_0","_emscripten_bind_FloatArray_set_size_1","_emscripten_bind_FloatArray___destroy___0","_emscripten_bind_DoubleArray_DoubleArray_1","_emscripten_bind_DoubleArray_resize_1","_emscripten_bind_DoubleArray_getValue_1","_emscripten_bind_DoubleArray_setValue_2","_emscripten_bind_DoubleArray_getPointer_0","_emscripten_bind_DoubleArray_get_size_0","_emscripten_bind_DoubleArray_set_size_1","_emscripten_bind_DoubleArray___destroy___0","_emscripten_bind_CharArray_CharArray_1","_emscripten_bind_CharArray_resize_1","_emscripten_bind_CharArray_getValue_1","_emscripten_bind_CharArray_setValue_2","_emscripten_bind_CharArray_getPointer_0","_emscripten_bind_CharArray_get_size_0","_emscripten_bind_CharArray_set_size_1","_emscripten_bind_CharArray___destroy___0","_emscripten_bind_ImHelper_memcpyIdx_3","_emscripten_bind_ImHelper_memcpyVtx_3","_emscripten_bind_ImHelper_memcpyFont_5","_emscripten_bind_ImHelper_getTextureId_1","_emscripten_bind_ImHelper_setIniFilename_2","_emscripten_bind_ImHelper_removeIniFilename_1","_emscripten_bind_ImHelper___destroy___0","_emscripten_bind_ImVec2_ImVec2_0","_emscripten_bind_ImVec2_ImVec2_2","_emscripten_bind_ImVec2_get_x_0","_emscripten_bind_ImVec2_set_x_1","_emscripten_bind_ImVec2_get_y_0","_emscripten_bind_ImVec2_set_y_1","_emscripten_bind_ImVec2___destroy___0","_emscripten_bind_ImVec4_ImVec4_0","_emscripten_bind_ImVec4_ImVec4_4","_emscripten_bind_ImVec4_get_x_0","_emscripten_bind_ImVec4_set_x_1","_emscripten_bind_ImVec4_get_y_0","_emscripten_bind_ImVec4_set_y_1","_emscripten_bind_ImVec4_get_z_0","_emscripten_bind_ImVec4_set_z_1","_emscripten_bind_ImVec4_get_w_0","_emscripten_bind_ImVec4_set_w_1","_emscripten_bind_ImVec4___destroy___0","_emscripten_bind_VecCmdBuffer_getData_1","_emscripten_bind_VecCmdBuffer_size_0","_emscripten_bind_VecCmdBuffer___destroy___0","_emscripten_bind_VecIdxBuffer_size_0","_emscripten_bind_VecIdxBuffer___destroy___0","_emscripten_bind_VecVtxBuffer_size_0","_emscripten_bind_VecVtxBuffer___destroy___0","_emscripten_bind_ImDrawCmd_get_ClipRect_0","_emscripten_bind_ImDrawCmd_set_ClipRect_1","_emscripten_bind_ImDrawCmd_get_VtxOffset_0","_emscripten_bind_ImDrawCmd_set_VtxOffset_1","_emscripten_bind_ImDrawCmd_get_IdxOffset_0","_emscripten_bind_ImDrawCmd_set_IdxOffset_1","_emscripten_bind_ImDrawCmd_get_ElemCount_0","_emscripten_bind_ImDrawCmd_set_ElemCount_1","_emscripten_bind_ImDrawCmd_get_TextureId_0","_emscripten_bind_ImDrawCmd_set_TextureId_1","_emscripten_bind_ImDrawCmd___destroy___0","_emscripten_bind_ImDrawVert_get_pos_0","_emscripten_bind_ImDrawVert_set_pos_1","_emscripten_bind_ImDrawVert_get_uv_0","_emscripten_bind_ImDrawVert_set_uv_1","_emscripten_bind_ImDrawVert_get_col_0","_emscripten_bind_ImDrawVert_set_col_1","_emscripten_bind_ImDrawVert___destroy___0","_emscripten_bind_ImDrawData_get_CmdListsCount_0","_emscripten_bind_ImDrawData_set_CmdListsCount_1","_emscripten_bind_ImDrawData_get_TotalIdxCount_0","_emscripten_bind_ImDrawData_set_TotalIdxCount_1","_emscripten_bind_ImDrawData_get_TotalVtxCount_0","_emscripten_bind_ImDrawData_set_TotalVtxCount_1","_emscripten_bind_ImDrawData_get_CmdLists_1","_emscripten_bind_ImDrawData_set_CmdLists_2","_emscripten_bind_ImDrawData_get_DisplayPos_0","_emscripten_bind_ImDrawData_set_DisplayPos_1","_emscripten_bind_ImDrawData_get_DisplaySize_0","_emscripten_bind_ImDrawData_set_DisplaySize_1","_emscripten_bind_ImDrawData_get_FramebufferScale_0","_emscripten_bind_ImDrawData_set_FramebufferScale_1","_emscripten_bind_ImDrawData___destroy___0","_emscripten_bind_ImDrawList_get_CmdBuffer_0","_emscripten_bind_ImDrawList_set_CmdBuffer_1","_emscripten_bind_ImDrawList_get_IdxBuffer_0","_emscripten_bind_ImDrawList_set_IdxBuffer_1","_emscripten_bind_ImDrawList_get_VtxBuffer_0","_emscripten_bind_ImDrawList_set_VtxBuffer_1","_emscripten_bind_ImDrawList___destroy___0","_emscripten_bind_ImGuiIO_AddMouseWheelEvent_2","_emscripten_bind_ImGuiIO_AddMouseButtonEvent_2","_emscripten_bind_ImGuiIO_AddMousePosEvent_2","_emscripten_bind_ImGuiIO_AddKeyEvent_2","_emscripten_bind_ImGuiIO_AddInputCharacter_1","_emscripten_bind_ImGuiIO_get_WantCaptureMouse_0","_emscripten_bind_ImGuiIO_set_WantCaptureMouse_1","_emscripten_bind_ImGuiIO_get_DisplaySize_0","_emscripten_bind_ImGuiIO_set_DisplaySize_1","_emscripten_bind_ImGuiIO_get_DisplayFramebufferScale_0","_emscripten_bind_ImGuiIO_set_DisplayFramebufferScale_1","_emscripten_bind_ImGuiIO_get_DeltaTime_0","_emscripten_bind_ImGuiIO_set_DeltaTime_1","_emscripten_bind_ImGuiIO_get_Fonts_0","_emscripten_bind_ImGuiIO_set_Fonts_1","_emscripten_bind_ImGuiIO_get_FontGlobalScale_0","_emscripten_bind_ImGuiIO_set_FontGlobalScale_1","_emscripten_bind_ImGuiIO_get_ConfigDockingNoSplit_0","_emscripten_bind_ImGuiIO_set_ConfigDockingNoSplit_1","_emscripten_bind_ImGuiIO_get_ConfigDockingWithShift_0","_emscripten_bind_ImGuiIO_set_ConfigDockingWithShift_1","_emscripten_bind_ImGuiIO_get_ConfigDockingAlwaysTabBar_0","_emscripten_bind_ImGuiIO_set_ConfigDockingAlwaysTabBar_1","_emscripten_bind_ImGuiIO_get_ConfigDockingTransparentPayload_0","_emscripten_bind_ImGuiIO_set_ConfigDockingTransparentPayload_1","_emscripten_bind_ImGuiIO_get_ConfigFlags_0","_emscripten_bind_ImGuiIO_set_ConfigFlags_1","_emscripten_bind_ImGuiIO___destroy___0","_emscripten_bind_ImFontAtlas_get_TexID_0","_emscripten_bind_ImFontAtlas_set_TexID_1","_emscripten_bind_ImFontAtlas___destroy___0","_emscripten_bind_ImFont___destroy___0","_emscripten_bind_ImGuiStyle___destroy___0","_emscripten_bind_ImGuiViewport___destroy___0","_emscripten_bind_ImGuiTableSortSpecs___destroy___0","_emscripten_bind_ImGuiWindowClass___destroy___0","_emscripten_bind_ImGuiPayload___destroy___0","_emscripten_bind_ImDrawListSharedData___destroy___0","_emscripten_bind_ImGuiStorage___destroy___0","_emscripten_bind_ImGuiPlatformIO___destroy___0","_emscripten_enum_ImGuiKey_ImGuiKey_None","_fflush","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(Module['ready'], prop)) {
    Object.defineProperty(Module['ready'], prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  if (e && typeof e == 'object' && e.stack) {
    toLog = [e, e.stack];
  }
  err('exiting due to exception: ' + toLog);
}

if (ENVIRONMENT_IS_NODE) {
  if (typeof process == 'undefined' || !process.release || process.release.name !== 'node') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');
  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?
  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = nodePath.dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js
read_ = (filename, binary) => {
  // We need to re-wrap `file://` strings to URLs. Normalizing isn't
  // necessary in that case, the path should already be absolute.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return fs.readFileSync(filename, binary ? undefined : 'utf8');
};

readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = (filename, onload, onerror) => {
  // See the comment in the `read_` function.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  fs.readFile(filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  // Without this older versions of node (< v15) will log unhandled rejections
  // but return 0, which is not normally the desired behaviour.  This is
  // not be needed with node v15 and about because it is now the default
  // behaviour:
  // See https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
  var nodeMajor = process.version.match(/^v(\d+)\./)[1];
  if (nodeMajor < 15) {
    process['on']('unhandledRejection', function(reason) { throw reason; });
  }

  quit_ = (status, toThrow) => {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    let data;
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(() => onload(readBinary(f)), 0);
  };

  if (typeof clearTimeout == 'undefined') {
    globalThis.clearTimeout = (id) => {};
  }

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      logExceptionOnExit(toThrow);
      quit(status);
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');
var noExitRuntime = Module['noExitRuntime'] || true;legacyModuleProp('noExitRuntime', 'noExitRuntime');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// include: runtime_strings.js
// runtime_strings.js: String related runtime functions that are part of both
// MINIMAL_RUNTIME and regular runtime.

var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
 * array that contains uint8 values, returns a copy of that string as a
 * Javascript String object.
 * heapOrArray is either a regular array, or a JavaScript typed array view.
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on
  // null terminator by itself.  Also, use the length info to avoid running tiny
  // strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation,
  // so that undefined means Infinity)
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = '';
  // If building with TextDecoder, we have already computed the string length
  // above, so test loop end condition against that
  while (idx < endPtr) {
    // For UTF8 byte structure, see:
    // http://en.wikipedia.org/wiki/UTF-8#Description
    // https://www.ietf.org/rfc/rfc2279.txt
    // https://tools.ietf.org/html/rfc3629
    var u0 = heapOrArray[idx++];
    if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 0xF0) == 0xE0) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }

    if (u0 < 0x10000) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    }
  }
  return str;
}

/**
 * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
 * emscripten HEAP, returns a copy of that string as a Javascript String object.
 *
 * @param {number} ptr
 * @param {number=} maxBytesToRead - An optional length that specifies the
 *   maximum number of bytes to read. You can omit this parameter to scan the
 *   string until the first \0 byte. If maxBytesToRead is passed, and the string
 *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
 *   string will cut short at that byte index (i.e. maxBytesToRead will not
 *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
 *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
 *   JS JIT optimizations off, so it is worth to consider consistently using one
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

/**
 * Copies the given Javascript String object 'str' to the given byte array at
 * address 'outIdx', encoded in UTF8 form and null-terminated. The copy will
 * require at most str.length*4+1 bytes of space in the HEAP.  Use the function
 * lengthBytesUTF8 to compute the exact number of bytes (excluding null
 * terminator) that this function will write.
 *
 * @param {string} str - The Javascript string to copy.
 * @param {ArrayBufferView|Array<number>} heap - The array to copy to. Each
 *                                               index in this array is assumed
 *                                               to be one 8-byte element.
 * @param {number} outIdx - The starting offset in the array to begin the copying.
 * @param {number} maxBytesToWrite - The maximum number of bytes this function
 *                                   can write to the array.  This count should
 *                                   include the null terminator, i.e. if
 *                                   maxBytesToWrite=1, only the null terminator
 *                                   will be written and nothing else.
 *                                   maxBytesToWrite=0 does not write any bytes
 *                                   to the output, not even the null
 *                                   terminator.
 * @return {number} The number of bytes written, EXCLUDING the null terminator.
 */
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
  // undefined and false each don't write out any bytes.
  if (!(maxBytesToWrite > 0))
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
    // and https://www.ietf.org/rfc/rfc2279.txt
    // and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

/**
 * Copies the given Javascript String object 'str' to the emscripten HEAP at
 * address 'outPtr', null-terminated and encoded in UTF8 form. The copy will
 * require at most str.length*4+1 bytes of space in the HEAP.
 * Use the function lengthBytesUTF8 to compute the exact number of bytes
 * (excluding null terminator) that this function will write.
 *
 * @return {number} The number of bytes written, EXCLUDING the null terminator.
 */
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

/**
 * Returns the number of bytes the given Javascript string takes if encoded as a
 * UTF8 byte array, EXCLUDING the null terminator byte.
 *
 * @param {string} str - JavaScript string to operator on
 * @return {number} Length, in bytes, of the UTF8 encoded string.
 */
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var c = str.charCodeAt(i); // possibly a lead surrogate
    if (c <= 0x7F) {
      len++;
    } else if (c <= 0x7FF) {
      len += 2;
    } else if (c >= 0xD800 && c <= 0xDFFF) {
      len += 4; ++i;
    } else {
      len += 3;
    }
  }
  return len;
}

// end include: runtime_strings.js
// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with the (separate) address-zero check
  // below.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x2135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten at ' + ptrToString(max) + ', expected hex dwords 0x89BACDFE and 0x2135467, but received ' + ptrToString(cookie2) + ' ' + ptrToString(cookie1));
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[0] !== 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js
// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function keepRuntimeAlive() {
  return noExitRuntime;
}

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
/** @param {boolean=} fixedasm */
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'imgui.wasm.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 67108864);
    updateMemoryViews();

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming == 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        // Avoid instantiateStreaming() on Node.js environment for now, as while
        // Node.js v18.1.0 implements it, it does not have a full fetch()
        // implementation yet.
        //
        // Reference:
        //   https://github.com/emscripten-core/emscripten/pull/16917
        !ENVIRONMENT_IS_NODE &&
        typeof fetch == 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        // Suppress closure warning here since the upstream definition for
        // instantiateStreaming only allows Promise<Repsponse> rather than
        // an actual Response.
        // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
        /** @suppress {checkTypes} */
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  // Also pthreads and wasm workers initialize the wasm instance through this path.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
function legacyModuleProp(prop, newName) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get: function() {
        abort('Module.' + prop + ' has been replaced with plain ' + newName + ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort('`Module.' + prop + '` was supplied but `' + prop + '` not included in INCOMING_MODULE_JS_API');
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

function missingGlobal(sym, msg) {
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        warnOnce('`' + sym + '` is not longer defined by emscripten. ' + msg);
        return undefined;
      }
    });
  }
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');

function missingLibrarySymbol(sym) {
  if (typeof globalThis !== 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        // Can't `abort()` here because it would break code that does runtime
        // checks.  e.g. `if (typeof SDL === 'undefined')`.
        var msg = '`' + sym + '` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line';
        // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
        // library.js, which means $name for a JS name with no prefix, or name
        // for a JS name like _name.
        var librarySymbol = sym;
        if (!librarySymbol.startsWith('_')) {
          librarySymbol = '$' + sym;
        }
        msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=" + librarySymbol + ")";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        warnOnce(msg);
        return undefined;
      }
    });
  }
  // Any symbol that is not included from the JS libary is also (by definttion)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get: function() {
        var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// end include: runtime_debug.js
// === Body ===

function array_bounds_check_error(idx,size) { throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')'; }



// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
      if (type.endsWith('*')) type = '*';
      switch (type) {
        case 'i1': return HEAP8[((ptr)>>0)];
        case 'i8': return HEAP8[((ptr)>>0)];
        case 'i16': return HEAP16[((ptr)>>1)];
        case 'i32': return HEAP32[((ptr)>>2)];
        case 'i64': return HEAP32[((ptr)>>2)];
        case 'float': return HEAPF32[((ptr)>>2)];
        case 'double': return HEAPF64[((ptr)>>3)];
        case '*': return HEAPU32[((ptr)>>2)];
        default: abort('invalid type for getValue: ' + type);
      }
      return null;
    }

  function ptrToString(ptr) {
      assert(typeof ptr === 'number');
      return '0x' + ptr.toString(16).padStart(8, '0');
    }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
      if (type.endsWith('*')) type = '*';
      switch (type) {
        case 'i1': HEAP8[((ptr)>>0)] = value; break;
        case 'i8': HEAP8[((ptr)>>0)] = value; break;
        case 'i16': HEAP16[((ptr)>>1)] = value; break;
        case 'i32': HEAP32[((ptr)>>2)] = value; break;
        case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
        case 'float': HEAPF32[((ptr)>>2)] = value; break;
        case 'double': HEAPF64[((ptr)>>3)] = value; break;
        case '*': HEAPU32[((ptr)>>2)] = value; break;
        default: abort('invalid type for setValue: ' + type);
      }
    }

  function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  
  var SYSCALLS = {varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }};
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  }

  function _abort() {
      abort('native code called abort()');
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  
  function emscripten_realloc_buffer(size) {
      var b = wasmMemory.buffer;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - b.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
        err('emscripten_realloc_buffer: Attempted to grow heap from ' + b.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  function _fd_close(fd) {
      abort('fd_close called without SYSCALLS_REQUIRE_FILESYSTEM');
    }

  function _fd_read(fd, iov, iovcnt, pnum) {
      abort('fd_read called without SYSCALLS_REQUIRE_FILESYSTEM');
    }

  function convertI32PairToI53Checked(lo, hi) {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    }
  
  
  
  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      return 70;
    }

  var printCharBuffers = [null,[],[]];
  function printChar(stream, curr) {
      var buffer = printCharBuffers[stream];
      assert(buffer);
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    }
  
  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      _fflush(0);
      if (printCharBuffers[1].length) printChar(1, 10);
      if (printCharBuffers[2].length) printChar(2, 10);
    }
  
  
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    }

  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  "__assert_fail": ___assert_fail,
  "__syscall_fcntl64": ___syscall_fcntl64,
  "__syscall_ioctl": ___syscall_ioctl,
  "__syscall_openat": ___syscall_openat,
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");
/** @type {function(...*):?} */
var _emscripten_bind_VoidPtr___destroy___0 = Module["_emscripten_bind_VoidPtr___destroy___0"] = createExportWrapper("emscripten_bind_VoidPtr___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CreateContext_0 = Module["_emscripten_bind_Im_CreateContext_0"] = createExportWrapper("emscripten_bind_Im_CreateContext_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DestroyContext_0 = Module["_emscripten_bind_Im_DestroyContext_0"] = createExportWrapper("emscripten_bind_Im_DestroyContext_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DestroyContext_1 = Module["_emscripten_bind_Im_DestroyContext_1"] = createExportWrapper("emscripten_bind_Im_DestroyContext_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCurrentContext_0 = Module["_emscripten_bind_Im_GetCurrentContext_0"] = createExportWrapper("emscripten_bind_Im_GetCurrentContext_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetCurrentContext_1 = Module["_emscripten_bind_Im_SetCurrentContext_1"] = createExportWrapper("emscripten_bind_Im_SetCurrentContext_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetIO_0 = Module["_emscripten_bind_Im_GetIO_0"] = createExportWrapper("emscripten_bind_Im_GetIO_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetStyle_0 = Module["_emscripten_bind_Im_GetStyle_0"] = createExportWrapper("emscripten_bind_Im_GetStyle_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_NewFrame_0 = Module["_emscripten_bind_Im_NewFrame_0"] = createExportWrapper("emscripten_bind_Im_NewFrame_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndFrame_0 = Module["_emscripten_bind_Im_EndFrame_0"] = createExportWrapper("emscripten_bind_Im_EndFrame_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Render_0 = Module["_emscripten_bind_Im_Render_0"] = createExportWrapper("emscripten_bind_Im_Render_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetDrawData_0 = Module["_emscripten_bind_Im_GetDrawData_0"] = createExportWrapper("emscripten_bind_Im_GetDrawData_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowDemoWindow_0 = Module["_emscripten_bind_Im_ShowDemoWindow_0"] = createExportWrapper("emscripten_bind_Im_ShowDemoWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowDemoWindow_1 = Module["_emscripten_bind_Im_ShowDemoWindow_1"] = createExportWrapper("emscripten_bind_Im_ShowDemoWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowMetricsWindow_0 = Module["_emscripten_bind_Im_ShowMetricsWindow_0"] = createExportWrapper("emscripten_bind_Im_ShowMetricsWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowMetricsWindow_1 = Module["_emscripten_bind_Im_ShowMetricsWindow_1"] = createExportWrapper("emscripten_bind_Im_ShowMetricsWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowDebugLogWindow_0 = Module["_emscripten_bind_Im_ShowDebugLogWindow_0"] = createExportWrapper("emscripten_bind_Im_ShowDebugLogWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowDebugLogWindow_1 = Module["_emscripten_bind_Im_ShowDebugLogWindow_1"] = createExportWrapper("emscripten_bind_Im_ShowDebugLogWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowStackToolWindow_0 = Module["_emscripten_bind_Im_ShowStackToolWindow_0"] = createExportWrapper("emscripten_bind_Im_ShowStackToolWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowStackToolWindow_1 = Module["_emscripten_bind_Im_ShowStackToolWindow_1"] = createExportWrapper("emscripten_bind_Im_ShowStackToolWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowAboutWindow_0 = Module["_emscripten_bind_Im_ShowAboutWindow_0"] = createExportWrapper("emscripten_bind_Im_ShowAboutWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowAboutWindow_1 = Module["_emscripten_bind_Im_ShowAboutWindow_1"] = createExportWrapper("emscripten_bind_Im_ShowAboutWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowStyleEditor_0 = Module["_emscripten_bind_Im_ShowStyleEditor_0"] = createExportWrapper("emscripten_bind_Im_ShowStyleEditor_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowStyleEditor_1 = Module["_emscripten_bind_Im_ShowStyleEditor_1"] = createExportWrapper("emscripten_bind_Im_ShowStyleEditor_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowStyleSelector_1 = Module["_emscripten_bind_Im_ShowStyleSelector_1"] = createExportWrapper("emscripten_bind_Im_ShowStyleSelector_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowFontSelector_1 = Module["_emscripten_bind_Im_ShowFontSelector_1"] = createExportWrapper("emscripten_bind_Im_ShowFontSelector_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ShowUserGuide_0 = Module["_emscripten_bind_Im_ShowUserGuide_0"] = createExportWrapper("emscripten_bind_Im_ShowUserGuide_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetVersion_0 = Module["_emscripten_bind_Im_GetVersion_0"] = createExportWrapper("emscripten_bind_Im_GetVersion_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsDark_0 = Module["_emscripten_bind_Im_StyleColorsDark_0"] = createExportWrapper("emscripten_bind_Im_StyleColorsDark_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsDark_1 = Module["_emscripten_bind_Im_StyleColorsDark_1"] = createExportWrapper("emscripten_bind_Im_StyleColorsDark_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsLight_0 = Module["_emscripten_bind_Im_StyleColorsLight_0"] = createExportWrapper("emscripten_bind_Im_StyleColorsLight_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsLight_1 = Module["_emscripten_bind_Im_StyleColorsLight_1"] = createExportWrapper("emscripten_bind_Im_StyleColorsLight_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsClassic_0 = Module["_emscripten_bind_Im_StyleColorsClassic_0"] = createExportWrapper("emscripten_bind_Im_StyleColorsClassic_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_StyleColorsClassic_1 = Module["_emscripten_bind_Im_StyleColorsClassic_1"] = createExportWrapper("emscripten_bind_Im_StyleColorsClassic_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Begin_1 = Module["_emscripten_bind_Im_Begin_1"] = createExportWrapper("emscripten_bind_Im_Begin_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_End_0 = Module["_emscripten_bind_Im_End_0"] = createExportWrapper("emscripten_bind_Im_End_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild_1 = Module["_emscripten_bind_Im_BeginChild_1"] = createExportWrapper("emscripten_bind_Im_BeginChild_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild_2 = Module["_emscripten_bind_Im_BeginChild_2"] = createExportWrapper("emscripten_bind_Im_BeginChild_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild_3 = Module["_emscripten_bind_Im_BeginChild_3"] = createExportWrapper("emscripten_bind_Im_BeginChild_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild_4 = Module["_emscripten_bind_Im_BeginChild_4"] = createExportWrapper("emscripten_bind_Im_BeginChild_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild2_1 = Module["_emscripten_bind_Im_BeginChild2_1"] = createExportWrapper("emscripten_bind_Im_BeginChild2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild2_2 = Module["_emscripten_bind_Im_BeginChild2_2"] = createExportWrapper("emscripten_bind_Im_BeginChild2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild2_3 = Module["_emscripten_bind_Im_BeginChild2_3"] = createExportWrapper("emscripten_bind_Im_BeginChild2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChild2_4 = Module["_emscripten_bind_Im_BeginChild2_4"] = createExportWrapper("emscripten_bind_Im_BeginChild2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndChild_0 = Module["_emscripten_bind_Im_EndChild_0"] = createExportWrapper("emscripten_bind_Im_EndChild_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowAppearing_0 = Module["_emscripten_bind_Im_IsWindowAppearing_0"] = createExportWrapper("emscripten_bind_Im_IsWindowAppearing_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowCollapsed_0 = Module["_emscripten_bind_Im_IsWindowCollapsed_0"] = createExportWrapper("emscripten_bind_Im_IsWindowCollapsed_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowFocused_0 = Module["_emscripten_bind_Im_IsWindowFocused_0"] = createExportWrapper("emscripten_bind_Im_IsWindowFocused_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowFocused_1 = Module["_emscripten_bind_Im_IsWindowFocused_1"] = createExportWrapper("emscripten_bind_Im_IsWindowFocused_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowHovered_0 = Module["_emscripten_bind_Im_IsWindowHovered_0"] = createExportWrapper("emscripten_bind_Im_IsWindowHovered_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowHovered_1 = Module["_emscripten_bind_Im_IsWindowHovered_1"] = createExportWrapper("emscripten_bind_Im_IsWindowHovered_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowDrawList_0 = Module["_emscripten_bind_Im_GetWindowDrawList_0"] = createExportWrapper("emscripten_bind_Im_GetWindowDrawList_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowDpiScale_0 = Module["_emscripten_bind_Im_GetWindowDpiScale_0"] = createExportWrapper("emscripten_bind_Im_GetWindowDpiScale_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowPos_0 = Module["_emscripten_bind_Im_GetWindowPos_0"] = createExportWrapper("emscripten_bind_Im_GetWindowPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowSize_0 = Module["_emscripten_bind_Im_GetWindowSize_0"] = createExportWrapper("emscripten_bind_Im_GetWindowSize_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowWidth_0 = Module["_emscripten_bind_Im_GetWindowWidth_0"] = createExportWrapper("emscripten_bind_Im_GetWindowWidth_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowHeight_0 = Module["_emscripten_bind_Im_GetWindowHeight_0"] = createExportWrapper("emscripten_bind_Im_GetWindowHeight_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowViewport_0 = Module["_emscripten_bind_Im_GetWindowViewport_0"] = createExportWrapper("emscripten_bind_Im_GetWindowViewport_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowPos_1 = Module["_emscripten_bind_Im_SetNextWindowPos_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowPos_2 = Module["_emscripten_bind_Im_SetNextWindowPos_2"] = createExportWrapper("emscripten_bind_Im_SetNextWindowPos_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowPos_3 = Module["_emscripten_bind_Im_SetNextWindowPos_3"] = createExportWrapper("emscripten_bind_Im_SetNextWindowPos_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowSize_1 = Module["_emscripten_bind_Im_SetNextWindowSize_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowSize_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowSize_2 = Module["_emscripten_bind_Im_SetNextWindowSize_2"] = createExportWrapper("emscripten_bind_Im_SetNextWindowSize_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowSizeConstraints_2 = Module["_emscripten_bind_Im_SetNextWindowSizeConstraints_2"] = createExportWrapper("emscripten_bind_Im_SetNextWindowSizeConstraints_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowContentSize_1 = Module["_emscripten_bind_Im_SetNextWindowContentSize_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowContentSize_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowCollapsed_1 = Module["_emscripten_bind_Im_SetNextWindowCollapsed_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowCollapsed_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowCollapsed_2 = Module["_emscripten_bind_Im_SetNextWindowCollapsed_2"] = createExportWrapper("emscripten_bind_Im_SetNextWindowCollapsed_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowFocus_0 = Module["_emscripten_bind_Im_SetNextWindowFocus_0"] = createExportWrapper("emscripten_bind_Im_SetNextWindowFocus_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowScroll_1 = Module["_emscripten_bind_Im_SetNextWindowScroll_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowScroll_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowBgAlpha_1 = Module["_emscripten_bind_Im_SetNextWindowBgAlpha_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowBgAlpha_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowViewport_1 = Module["_emscripten_bind_Im_SetNextWindowViewport_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowViewport_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowPos_1 = Module["_emscripten_bind_Im_SetWindowPos_1"] = createExportWrapper("emscripten_bind_Im_SetWindowPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowPos_2 = Module["_emscripten_bind_Im_SetWindowPos_2"] = createExportWrapper("emscripten_bind_Im_SetWindowPos_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowSize_1 = Module["_emscripten_bind_Im_SetWindowSize_1"] = createExportWrapper("emscripten_bind_Im_SetWindowSize_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowSize_2 = Module["_emscripten_bind_Im_SetWindowSize_2"] = createExportWrapper("emscripten_bind_Im_SetWindowSize_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowCollapsed_1 = Module["_emscripten_bind_Im_SetWindowCollapsed_1"] = createExportWrapper("emscripten_bind_Im_SetWindowCollapsed_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowCollapsed_2 = Module["_emscripten_bind_Im_SetWindowCollapsed_2"] = createExportWrapper("emscripten_bind_Im_SetWindowCollapsed_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowFocus_0 = Module["_emscripten_bind_Im_SetWindowFocus_0"] = createExportWrapper("emscripten_bind_Im_SetWindowFocus_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowFontScale_1 = Module["_emscripten_bind_Im_SetWindowFontScale_1"] = createExportWrapper("emscripten_bind_Im_SetWindowFontScale_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowPos2_2 = Module["_emscripten_bind_Im_SetWindowPos2_2"] = createExportWrapper("emscripten_bind_Im_SetWindowPos2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowPos2_3 = Module["_emscripten_bind_Im_SetWindowPos2_3"] = createExportWrapper("emscripten_bind_Im_SetWindowPos2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowSize2_2 = Module["_emscripten_bind_Im_SetWindowSize2_2"] = createExportWrapper("emscripten_bind_Im_SetWindowSize2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowSize2_3 = Module["_emscripten_bind_Im_SetWindowSize2_3"] = createExportWrapper("emscripten_bind_Im_SetWindowSize2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowCollapsed2_2 = Module["_emscripten_bind_Im_SetWindowCollapsed2_2"] = createExportWrapper("emscripten_bind_Im_SetWindowCollapsed2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowCollapsed2_3 = Module["_emscripten_bind_Im_SetWindowCollapsed2_3"] = createExportWrapper("emscripten_bind_Im_SetWindowCollapsed2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetWindowFocus2_1 = Module["_emscripten_bind_Im_SetWindowFocus2_1"] = createExportWrapper("emscripten_bind_Im_SetWindowFocus2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetContentRegionAvail_0 = Module["_emscripten_bind_Im_GetContentRegionAvail_0"] = createExportWrapper("emscripten_bind_Im_GetContentRegionAvail_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetContentRegionMax_0 = Module["_emscripten_bind_Im_GetContentRegionMax_0"] = createExportWrapper("emscripten_bind_Im_GetContentRegionMax_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowContentRegionMin_0 = Module["_emscripten_bind_Im_GetWindowContentRegionMin_0"] = createExportWrapper("emscripten_bind_Im_GetWindowContentRegionMin_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowContentRegionMax_0 = Module["_emscripten_bind_Im_GetWindowContentRegionMax_0"] = createExportWrapper("emscripten_bind_Im_GetWindowContentRegionMax_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetScrollX_0 = Module["_emscripten_bind_Im_GetScrollX_0"] = createExportWrapper("emscripten_bind_Im_GetScrollX_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetScrollY_0 = Module["_emscripten_bind_Im_GetScrollY_0"] = createExportWrapper("emscripten_bind_Im_GetScrollY_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollX_1 = Module["_emscripten_bind_Im_SetScrollX_1"] = createExportWrapper("emscripten_bind_Im_SetScrollX_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollY_1 = Module["_emscripten_bind_Im_SetScrollY_1"] = createExportWrapper("emscripten_bind_Im_SetScrollY_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetScrollMaxX_0 = Module["_emscripten_bind_Im_GetScrollMaxX_0"] = createExportWrapper("emscripten_bind_Im_GetScrollMaxX_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetScrollMaxY_0 = Module["_emscripten_bind_Im_GetScrollMaxY_0"] = createExportWrapper("emscripten_bind_Im_GetScrollMaxY_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollHereX_0 = Module["_emscripten_bind_Im_SetScrollHereX_0"] = createExportWrapper("emscripten_bind_Im_SetScrollHereX_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollHereX_1 = Module["_emscripten_bind_Im_SetScrollHereX_1"] = createExportWrapper("emscripten_bind_Im_SetScrollHereX_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollHereY_0 = Module["_emscripten_bind_Im_SetScrollHereY_0"] = createExportWrapper("emscripten_bind_Im_SetScrollHereY_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollHereY_1 = Module["_emscripten_bind_Im_SetScrollHereY_1"] = createExportWrapper("emscripten_bind_Im_SetScrollHereY_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollFromPosX_1 = Module["_emscripten_bind_Im_SetScrollFromPosX_1"] = createExportWrapper("emscripten_bind_Im_SetScrollFromPosX_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollFromPosX_2 = Module["_emscripten_bind_Im_SetScrollFromPosX_2"] = createExportWrapper("emscripten_bind_Im_SetScrollFromPosX_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollFromPosY_1 = Module["_emscripten_bind_Im_SetScrollFromPosY_1"] = createExportWrapper("emscripten_bind_Im_SetScrollFromPosY_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetScrollFromPosY_2 = Module["_emscripten_bind_Im_SetScrollFromPosY_2"] = createExportWrapper("emscripten_bind_Im_SetScrollFromPosY_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushFont_1 = Module["_emscripten_bind_Im_PushFont_1"] = createExportWrapper("emscripten_bind_Im_PushFont_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopFont_0 = Module["_emscripten_bind_Im_PopFont_0"] = createExportWrapper("emscripten_bind_Im_PopFont_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushStyleColor_2 = Module["_emscripten_bind_Im_PushStyleColor_2"] = createExportWrapper("emscripten_bind_Im_PushStyleColor_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushStyleColor2_2 = Module["_emscripten_bind_Im_PushStyleColor2_2"] = createExportWrapper("emscripten_bind_Im_PushStyleColor2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopStyleColor_0 = Module["_emscripten_bind_Im_PopStyleColor_0"] = createExportWrapper("emscripten_bind_Im_PopStyleColor_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopStyleColor_1 = Module["_emscripten_bind_Im_PopStyleColor_1"] = createExportWrapper("emscripten_bind_Im_PopStyleColor_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushStyleVar_2 = Module["_emscripten_bind_Im_PushStyleVar_2"] = createExportWrapper("emscripten_bind_Im_PushStyleVar_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushStyleVar2_2 = Module["_emscripten_bind_Im_PushStyleVar2_2"] = createExportWrapper("emscripten_bind_Im_PushStyleVar2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopStyleVar_0 = Module["_emscripten_bind_Im_PopStyleVar_0"] = createExportWrapper("emscripten_bind_Im_PopStyleVar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopStyleVar_1 = Module["_emscripten_bind_Im_PopStyleVar_1"] = createExportWrapper("emscripten_bind_Im_PopStyleVar_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushAllowKeyboardFocus_1 = Module["_emscripten_bind_Im_PushAllowKeyboardFocus_1"] = createExportWrapper("emscripten_bind_Im_PushAllowKeyboardFocus_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopAllowKeyboardFocus_0 = Module["_emscripten_bind_Im_PopAllowKeyboardFocus_0"] = createExportWrapper("emscripten_bind_Im_PopAllowKeyboardFocus_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushButtonRepeat_1 = Module["_emscripten_bind_Im_PushButtonRepeat_1"] = createExportWrapper("emscripten_bind_Im_PushButtonRepeat_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopButtonRepeat_0 = Module["_emscripten_bind_Im_PopButtonRepeat_0"] = createExportWrapper("emscripten_bind_Im_PopButtonRepeat_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushItemWidth_1 = Module["_emscripten_bind_Im_PushItemWidth_1"] = createExportWrapper("emscripten_bind_Im_PushItemWidth_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopItemWidth_0 = Module["_emscripten_bind_Im_PopItemWidth_0"] = createExportWrapper("emscripten_bind_Im_PopItemWidth_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextItemWidth_1 = Module["_emscripten_bind_Im_SetNextItemWidth_1"] = createExportWrapper("emscripten_bind_Im_SetNextItemWidth_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CalcItemWidth_0 = Module["_emscripten_bind_Im_CalcItemWidth_0"] = createExportWrapper("emscripten_bind_Im_CalcItemWidth_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushTextWrapPos_0 = Module["_emscripten_bind_Im_PushTextWrapPos_0"] = createExportWrapper("emscripten_bind_Im_PushTextWrapPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushTextWrapPos_1 = Module["_emscripten_bind_Im_PushTextWrapPos_1"] = createExportWrapper("emscripten_bind_Im_PushTextWrapPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopTextWrapPos_0 = Module["_emscripten_bind_Im_PopTextWrapPos_0"] = createExportWrapper("emscripten_bind_Im_PopTextWrapPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFont_0 = Module["_emscripten_bind_Im_GetFont_0"] = createExportWrapper("emscripten_bind_Im_GetFont_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFontSize_0 = Module["_emscripten_bind_Im_GetFontSize_0"] = createExportWrapper("emscripten_bind_Im_GetFontSize_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFontTexUvWhitePixel_0 = Module["_emscripten_bind_Im_GetFontTexUvWhitePixel_0"] = createExportWrapper("emscripten_bind_Im_GetFontTexUvWhitePixel_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColorU32_1 = Module["_emscripten_bind_Im_GetColorU32_1"] = createExportWrapper("emscripten_bind_Im_GetColorU32_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColorU32_2 = Module["_emscripten_bind_Im_GetColorU32_2"] = createExportWrapper("emscripten_bind_Im_GetColorU32_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColorU322_1 = Module["_emscripten_bind_Im_GetColorU322_1"] = createExportWrapper("emscripten_bind_Im_GetColorU322_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColorU323_1 = Module["_emscripten_bind_Im_GetColorU323_1"] = createExportWrapper("emscripten_bind_Im_GetColorU323_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetStyleColorVec4_1 = Module["_emscripten_bind_Im_GetStyleColorVec4_1"] = createExportWrapper("emscripten_bind_Im_GetStyleColorVec4_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Separator_0 = Module["_emscripten_bind_Im_Separator_0"] = createExportWrapper("emscripten_bind_Im_Separator_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SameLine_0 = Module["_emscripten_bind_Im_SameLine_0"] = createExportWrapper("emscripten_bind_Im_SameLine_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SameLine_1 = Module["_emscripten_bind_Im_SameLine_1"] = createExportWrapper("emscripten_bind_Im_SameLine_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SameLine_2 = Module["_emscripten_bind_Im_SameLine_2"] = createExportWrapper("emscripten_bind_Im_SameLine_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_NewLine_0 = Module["_emscripten_bind_Im_NewLine_0"] = createExportWrapper("emscripten_bind_Im_NewLine_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Spacing_0 = Module["_emscripten_bind_Im_Spacing_0"] = createExportWrapper("emscripten_bind_Im_Spacing_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Dummy_1 = Module["_emscripten_bind_Im_Dummy_1"] = createExportWrapper("emscripten_bind_Im_Dummy_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Indent_0 = Module["_emscripten_bind_Im_Indent_0"] = createExportWrapper("emscripten_bind_Im_Indent_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Indent_1 = Module["_emscripten_bind_Im_Indent_1"] = createExportWrapper("emscripten_bind_Im_Indent_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Unindent_0 = Module["_emscripten_bind_Im_Unindent_0"] = createExportWrapper("emscripten_bind_Im_Unindent_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Unindent_1 = Module["_emscripten_bind_Im_Unindent_1"] = createExportWrapper("emscripten_bind_Im_Unindent_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginGroup_0 = Module["_emscripten_bind_Im_BeginGroup_0"] = createExportWrapper("emscripten_bind_Im_BeginGroup_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndGroup_0 = Module["_emscripten_bind_Im_EndGroup_0"] = createExportWrapper("emscripten_bind_Im_EndGroup_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCursorPos_0 = Module["_emscripten_bind_Im_GetCursorPos_0"] = createExportWrapper("emscripten_bind_Im_GetCursorPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCursorPosX_0 = Module["_emscripten_bind_Im_GetCursorPosX_0"] = createExportWrapper("emscripten_bind_Im_GetCursorPosX_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCursorPosY_0 = Module["_emscripten_bind_Im_GetCursorPosY_0"] = createExportWrapper("emscripten_bind_Im_GetCursorPosY_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetCursorPos_1 = Module["_emscripten_bind_Im_SetCursorPos_1"] = createExportWrapper("emscripten_bind_Im_SetCursorPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetCursorPosX_1 = Module["_emscripten_bind_Im_SetCursorPosX_1"] = createExportWrapper("emscripten_bind_Im_SetCursorPosX_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetCursorPosY_1 = Module["_emscripten_bind_Im_SetCursorPosY_1"] = createExportWrapper("emscripten_bind_Im_SetCursorPosY_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCursorStartPos_0 = Module["_emscripten_bind_Im_GetCursorStartPos_0"] = createExportWrapper("emscripten_bind_Im_GetCursorStartPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetCursorScreenPos_0 = Module["_emscripten_bind_Im_GetCursorScreenPos_0"] = createExportWrapper("emscripten_bind_Im_GetCursorScreenPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetCursorScreenPos_1 = Module["_emscripten_bind_Im_SetCursorScreenPos_1"] = createExportWrapper("emscripten_bind_Im_SetCursorScreenPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_AlignTextToFramePadding_0 = Module["_emscripten_bind_Im_AlignTextToFramePadding_0"] = createExportWrapper("emscripten_bind_Im_AlignTextToFramePadding_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetTextLineHeight_0 = Module["_emscripten_bind_Im_GetTextLineHeight_0"] = createExportWrapper("emscripten_bind_Im_GetTextLineHeight_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetTextLineHeightWithSpacing_0 = Module["_emscripten_bind_Im_GetTextLineHeightWithSpacing_0"] = createExportWrapper("emscripten_bind_Im_GetTextLineHeightWithSpacing_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFrameHeight_0 = Module["_emscripten_bind_Im_GetFrameHeight_0"] = createExportWrapper("emscripten_bind_Im_GetFrameHeight_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFrameHeightWithSpacing_0 = Module["_emscripten_bind_Im_GetFrameHeightWithSpacing_0"] = createExportWrapper("emscripten_bind_Im_GetFrameHeightWithSpacing_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushID_1 = Module["_emscripten_bind_Im_PushID_1"] = createExportWrapper("emscripten_bind_Im_PushID_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushID2_2 = Module["_emscripten_bind_Im_PushID2_2"] = createExportWrapper("emscripten_bind_Im_PushID2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushID3_1 = Module["_emscripten_bind_Im_PushID3_1"] = createExportWrapper("emscripten_bind_Im_PushID3_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushID4_1 = Module["_emscripten_bind_Im_PushID4_1"] = createExportWrapper("emscripten_bind_Im_PushID4_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopID_0 = Module["_emscripten_bind_Im_PopID_0"] = createExportWrapper("emscripten_bind_Im_PopID_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetID_1 = Module["_emscripten_bind_Im_GetID_1"] = createExportWrapper("emscripten_bind_Im_GetID_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetID2_2 = Module["_emscripten_bind_Im_GetID2_2"] = createExportWrapper("emscripten_bind_Im_GetID2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetID3_1 = Module["_emscripten_bind_Im_GetID3_1"] = createExportWrapper("emscripten_bind_Im_GetID3_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextUnformatted_1 = Module["_emscripten_bind_Im_TextUnformatted_1"] = createExportWrapper("emscripten_bind_Im_TextUnformatted_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextUnformatted_2 = Module["_emscripten_bind_Im_TextUnformatted_2"] = createExportWrapper("emscripten_bind_Im_TextUnformatted_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Text_1 = Module["_emscripten_bind_Im_Text_1"] = createExportWrapper("emscripten_bind_Im_Text_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextV_2 = Module["_emscripten_bind_Im_TextV_2"] = createExportWrapper("emscripten_bind_Im_TextV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextColored_2 = Module["_emscripten_bind_Im_TextColored_2"] = createExportWrapper("emscripten_bind_Im_TextColored_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextColoredV_3 = Module["_emscripten_bind_Im_TextColoredV_3"] = createExportWrapper("emscripten_bind_Im_TextColoredV_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextDisabled_1 = Module["_emscripten_bind_Im_TextDisabled_1"] = createExportWrapper("emscripten_bind_Im_TextDisabled_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextDisabledV_2 = Module["_emscripten_bind_Im_TextDisabledV_2"] = createExportWrapper("emscripten_bind_Im_TextDisabledV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextWrapped_1 = Module["_emscripten_bind_Im_TextWrapped_1"] = createExportWrapper("emscripten_bind_Im_TextWrapped_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TextWrappedV_2 = Module["_emscripten_bind_Im_TextWrappedV_2"] = createExportWrapper("emscripten_bind_Im_TextWrappedV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LabelText_2 = Module["_emscripten_bind_Im_LabelText_2"] = createExportWrapper("emscripten_bind_Im_LabelText_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LabelTextV_3 = Module["_emscripten_bind_Im_LabelTextV_3"] = createExportWrapper("emscripten_bind_Im_LabelTextV_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BulletText_1 = Module["_emscripten_bind_Im_BulletText_1"] = createExportWrapper("emscripten_bind_Im_BulletText_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BulletTextV_2 = Module["_emscripten_bind_Im_BulletTextV_2"] = createExportWrapper("emscripten_bind_Im_BulletTextV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Button_1 = Module["_emscripten_bind_Im_Button_1"] = createExportWrapper("emscripten_bind_Im_Button_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Button_2 = Module["_emscripten_bind_Im_Button_2"] = createExportWrapper("emscripten_bind_Im_Button_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SmallButton_1 = Module["_emscripten_bind_Im_SmallButton_1"] = createExportWrapper("emscripten_bind_Im_SmallButton_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InvisibleButton_2 = Module["_emscripten_bind_Im_InvisibleButton_2"] = createExportWrapper("emscripten_bind_Im_InvisibleButton_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InvisibleButton_3 = Module["_emscripten_bind_Im_InvisibleButton_3"] = createExportWrapper("emscripten_bind_Im_InvisibleButton_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ArrowButton_2 = Module["_emscripten_bind_Im_ArrowButton_2"] = createExportWrapper("emscripten_bind_Im_ArrowButton_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Checkbox_2 = Module["_emscripten_bind_Im_Checkbox_2"] = createExportWrapper("emscripten_bind_Im_Checkbox_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CheckboxFlags_3 = Module["_emscripten_bind_Im_CheckboxFlags_3"] = createExportWrapper("emscripten_bind_Im_CheckboxFlags_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CheckboxFlags2_3 = Module["_emscripten_bind_Im_CheckboxFlags2_3"] = createExportWrapper("emscripten_bind_Im_CheckboxFlags2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_RadioButton_2 = Module["_emscripten_bind_Im_RadioButton_2"] = createExportWrapper("emscripten_bind_Im_RadioButton_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_RadioButton2_3 = Module["_emscripten_bind_Im_RadioButton2_3"] = createExportWrapper("emscripten_bind_Im_RadioButton2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ProgressBar_1 = Module["_emscripten_bind_Im_ProgressBar_1"] = createExportWrapper("emscripten_bind_Im_ProgressBar_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ProgressBar_2 = Module["_emscripten_bind_Im_ProgressBar_2"] = createExportWrapper("emscripten_bind_Im_ProgressBar_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ProgressBar_3 = Module["_emscripten_bind_Im_ProgressBar_3"] = createExportWrapper("emscripten_bind_Im_ProgressBar_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Bullet_0 = Module["_emscripten_bind_Im_Bullet_0"] = createExportWrapper("emscripten_bind_Im_Bullet_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Image_2 = Module["_emscripten_bind_Im_Image_2"] = createExportWrapper("emscripten_bind_Im_Image_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Image_3 = Module["_emscripten_bind_Im_Image_3"] = createExportWrapper("emscripten_bind_Im_Image_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Image_4 = Module["_emscripten_bind_Im_Image_4"] = createExportWrapper("emscripten_bind_Im_Image_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Image_6 = Module["_emscripten_bind_Im_Image_6"] = createExportWrapper("emscripten_bind_Im_Image_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ImageButton_3 = Module["_emscripten_bind_Im_ImageButton_3"] = createExportWrapper("emscripten_bind_Im_ImageButton_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ImageButton_4 = Module["_emscripten_bind_Im_ImageButton_4"] = createExportWrapper("emscripten_bind_Im_ImageButton_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ImageButton_5 = Module["_emscripten_bind_Im_ImageButton_5"] = createExportWrapper("emscripten_bind_Im_ImageButton_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ImageButton_6 = Module["_emscripten_bind_Im_ImageButton_6"] = createExportWrapper("emscripten_bind_Im_ImageButton_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ImageButton_7 = Module["_emscripten_bind_Im_ImageButton_7"] = createExportWrapper("emscripten_bind_Im_ImageButton_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginCombo_2 = Module["_emscripten_bind_Im_BeginCombo_2"] = createExportWrapper("emscripten_bind_Im_BeginCombo_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginCombo_3 = Module["_emscripten_bind_Im_BeginCombo_3"] = createExportWrapper("emscripten_bind_Im_BeginCombo_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndCombo_0 = Module["_emscripten_bind_Im_EndCombo_0"] = createExportWrapper("emscripten_bind_Im_EndCombo_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Combo_3 = Module["_emscripten_bind_Im_Combo_3"] = createExportWrapper("emscripten_bind_Im_Combo_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Combo_4 = Module["_emscripten_bind_Im_Combo_4"] = createExportWrapper("emscripten_bind_Im_Combo_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_2 = Module["_emscripten_bind_Im_DragFloat_2"] = createExportWrapper("emscripten_bind_Im_DragFloat_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_3 = Module["_emscripten_bind_Im_DragFloat_3"] = createExportWrapper("emscripten_bind_Im_DragFloat_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_4 = Module["_emscripten_bind_Im_DragFloat_4"] = createExportWrapper("emscripten_bind_Im_DragFloat_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_5 = Module["_emscripten_bind_Im_DragFloat_5"] = createExportWrapper("emscripten_bind_Im_DragFloat_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_6 = Module["_emscripten_bind_Im_DragFloat_6"] = createExportWrapper("emscripten_bind_Im_DragFloat_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat_7 = Module["_emscripten_bind_Im_DragFloat_7"] = createExportWrapper("emscripten_bind_Im_DragFloat_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_2 = Module["_emscripten_bind_Im_DragFloat2_2"] = createExportWrapper("emscripten_bind_Im_DragFloat2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_3 = Module["_emscripten_bind_Im_DragFloat2_3"] = createExportWrapper("emscripten_bind_Im_DragFloat2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_4 = Module["_emscripten_bind_Im_DragFloat2_4"] = createExportWrapper("emscripten_bind_Im_DragFloat2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_5 = Module["_emscripten_bind_Im_DragFloat2_5"] = createExportWrapper("emscripten_bind_Im_DragFloat2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_6 = Module["_emscripten_bind_Im_DragFloat2_6"] = createExportWrapper("emscripten_bind_Im_DragFloat2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat2_7 = Module["_emscripten_bind_Im_DragFloat2_7"] = createExportWrapper("emscripten_bind_Im_DragFloat2_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_2 = Module["_emscripten_bind_Im_DragFloat3_2"] = createExportWrapper("emscripten_bind_Im_DragFloat3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_3 = Module["_emscripten_bind_Im_DragFloat3_3"] = createExportWrapper("emscripten_bind_Im_DragFloat3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_4 = Module["_emscripten_bind_Im_DragFloat3_4"] = createExportWrapper("emscripten_bind_Im_DragFloat3_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_5 = Module["_emscripten_bind_Im_DragFloat3_5"] = createExportWrapper("emscripten_bind_Im_DragFloat3_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_6 = Module["_emscripten_bind_Im_DragFloat3_6"] = createExportWrapper("emscripten_bind_Im_DragFloat3_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat3_7 = Module["_emscripten_bind_Im_DragFloat3_7"] = createExportWrapper("emscripten_bind_Im_DragFloat3_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_2 = Module["_emscripten_bind_Im_DragFloat4_2"] = createExportWrapper("emscripten_bind_Im_DragFloat4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_3 = Module["_emscripten_bind_Im_DragFloat4_3"] = createExportWrapper("emscripten_bind_Im_DragFloat4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_4 = Module["_emscripten_bind_Im_DragFloat4_4"] = createExportWrapper("emscripten_bind_Im_DragFloat4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_5 = Module["_emscripten_bind_Im_DragFloat4_5"] = createExportWrapper("emscripten_bind_Im_DragFloat4_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_6 = Module["_emscripten_bind_Im_DragFloat4_6"] = createExportWrapper("emscripten_bind_Im_DragFloat4_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloat4_7 = Module["_emscripten_bind_Im_DragFloat4_7"] = createExportWrapper("emscripten_bind_Im_DragFloat4_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_3 = Module["_emscripten_bind_Im_DragFloatRange2_3"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_4 = Module["_emscripten_bind_Im_DragFloatRange2_4"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_5 = Module["_emscripten_bind_Im_DragFloatRange2_5"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_6 = Module["_emscripten_bind_Im_DragFloatRange2_6"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_7 = Module["_emscripten_bind_Im_DragFloatRange2_7"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_8 = Module["_emscripten_bind_Im_DragFloatRange2_8"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragFloatRange2_9 = Module["_emscripten_bind_Im_DragFloatRange2_9"] = createExportWrapper("emscripten_bind_Im_DragFloatRange2_9");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_2 = Module["_emscripten_bind_Im_DragInt_2"] = createExportWrapper("emscripten_bind_Im_DragInt_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_3 = Module["_emscripten_bind_Im_DragInt_3"] = createExportWrapper("emscripten_bind_Im_DragInt_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_4 = Module["_emscripten_bind_Im_DragInt_4"] = createExportWrapper("emscripten_bind_Im_DragInt_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_5 = Module["_emscripten_bind_Im_DragInt_5"] = createExportWrapper("emscripten_bind_Im_DragInt_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_6 = Module["_emscripten_bind_Im_DragInt_6"] = createExportWrapper("emscripten_bind_Im_DragInt_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt_7 = Module["_emscripten_bind_Im_DragInt_7"] = createExportWrapper("emscripten_bind_Im_DragInt_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_2 = Module["_emscripten_bind_Im_DragInt2_2"] = createExportWrapper("emscripten_bind_Im_DragInt2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_3 = Module["_emscripten_bind_Im_DragInt2_3"] = createExportWrapper("emscripten_bind_Im_DragInt2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_4 = Module["_emscripten_bind_Im_DragInt2_4"] = createExportWrapper("emscripten_bind_Im_DragInt2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_5 = Module["_emscripten_bind_Im_DragInt2_5"] = createExportWrapper("emscripten_bind_Im_DragInt2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_6 = Module["_emscripten_bind_Im_DragInt2_6"] = createExportWrapper("emscripten_bind_Im_DragInt2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt2_7 = Module["_emscripten_bind_Im_DragInt2_7"] = createExportWrapper("emscripten_bind_Im_DragInt2_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_2 = Module["_emscripten_bind_Im_DragInt3_2"] = createExportWrapper("emscripten_bind_Im_DragInt3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_3 = Module["_emscripten_bind_Im_DragInt3_3"] = createExportWrapper("emscripten_bind_Im_DragInt3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_4 = Module["_emscripten_bind_Im_DragInt3_4"] = createExportWrapper("emscripten_bind_Im_DragInt3_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_5 = Module["_emscripten_bind_Im_DragInt3_5"] = createExportWrapper("emscripten_bind_Im_DragInt3_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_6 = Module["_emscripten_bind_Im_DragInt3_6"] = createExportWrapper("emscripten_bind_Im_DragInt3_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt3_7 = Module["_emscripten_bind_Im_DragInt3_7"] = createExportWrapper("emscripten_bind_Im_DragInt3_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_2 = Module["_emscripten_bind_Im_DragInt4_2"] = createExportWrapper("emscripten_bind_Im_DragInt4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_3 = Module["_emscripten_bind_Im_DragInt4_3"] = createExportWrapper("emscripten_bind_Im_DragInt4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_4 = Module["_emscripten_bind_Im_DragInt4_4"] = createExportWrapper("emscripten_bind_Im_DragInt4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_5 = Module["_emscripten_bind_Im_DragInt4_5"] = createExportWrapper("emscripten_bind_Im_DragInt4_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_6 = Module["_emscripten_bind_Im_DragInt4_6"] = createExportWrapper("emscripten_bind_Im_DragInt4_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragInt4_7 = Module["_emscripten_bind_Im_DragInt4_7"] = createExportWrapper("emscripten_bind_Im_DragInt4_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_3 = Module["_emscripten_bind_Im_DragIntRange2_3"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_4 = Module["_emscripten_bind_Im_DragIntRange2_4"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_5 = Module["_emscripten_bind_Im_DragIntRange2_5"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_6 = Module["_emscripten_bind_Im_DragIntRange2_6"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_7 = Module["_emscripten_bind_Im_DragIntRange2_7"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_8 = Module["_emscripten_bind_Im_DragIntRange2_8"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragIntRange2_9 = Module["_emscripten_bind_Im_DragIntRange2_9"] = createExportWrapper("emscripten_bind_Im_DragIntRange2_9");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_3 = Module["_emscripten_bind_Im_DragScalar_3"] = createExportWrapper("emscripten_bind_Im_DragScalar_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_4 = Module["_emscripten_bind_Im_DragScalar_4"] = createExportWrapper("emscripten_bind_Im_DragScalar_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_5 = Module["_emscripten_bind_Im_DragScalar_5"] = createExportWrapper("emscripten_bind_Im_DragScalar_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_6 = Module["_emscripten_bind_Im_DragScalar_6"] = createExportWrapper("emscripten_bind_Im_DragScalar_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_7 = Module["_emscripten_bind_Im_DragScalar_7"] = createExportWrapper("emscripten_bind_Im_DragScalar_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalar_8 = Module["_emscripten_bind_Im_DragScalar_8"] = createExportWrapper("emscripten_bind_Im_DragScalar_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_4 = Module["_emscripten_bind_Im_DragScalarN_4"] = createExportWrapper("emscripten_bind_Im_DragScalarN_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_5 = Module["_emscripten_bind_Im_DragScalarN_5"] = createExportWrapper("emscripten_bind_Im_DragScalarN_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_6 = Module["_emscripten_bind_Im_DragScalarN_6"] = createExportWrapper("emscripten_bind_Im_DragScalarN_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_7 = Module["_emscripten_bind_Im_DragScalarN_7"] = createExportWrapper("emscripten_bind_Im_DragScalarN_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_8 = Module["_emscripten_bind_Im_DragScalarN_8"] = createExportWrapper("emscripten_bind_Im_DragScalarN_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DragScalarN_9 = Module["_emscripten_bind_Im_DragScalarN_9"] = createExportWrapper("emscripten_bind_Im_DragScalarN_9");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat_4 = Module["_emscripten_bind_Im_SliderFloat_4"] = createExportWrapper("emscripten_bind_Im_SliderFloat_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat_5 = Module["_emscripten_bind_Im_SliderFloat_5"] = createExportWrapper("emscripten_bind_Im_SliderFloat_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat_6 = Module["_emscripten_bind_Im_SliderFloat_6"] = createExportWrapper("emscripten_bind_Im_SliderFloat_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat2_4 = Module["_emscripten_bind_Im_SliderFloat2_4"] = createExportWrapper("emscripten_bind_Im_SliderFloat2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat2_5 = Module["_emscripten_bind_Im_SliderFloat2_5"] = createExportWrapper("emscripten_bind_Im_SliderFloat2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat2_6 = Module["_emscripten_bind_Im_SliderFloat2_6"] = createExportWrapper("emscripten_bind_Im_SliderFloat2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat3_4 = Module["_emscripten_bind_Im_SliderFloat3_4"] = createExportWrapper("emscripten_bind_Im_SliderFloat3_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat3_5 = Module["_emscripten_bind_Im_SliderFloat3_5"] = createExportWrapper("emscripten_bind_Im_SliderFloat3_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat3_6 = Module["_emscripten_bind_Im_SliderFloat3_6"] = createExportWrapper("emscripten_bind_Im_SliderFloat3_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat4_4 = Module["_emscripten_bind_Im_SliderFloat4_4"] = createExportWrapper("emscripten_bind_Im_SliderFloat4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat4_5 = Module["_emscripten_bind_Im_SliderFloat4_5"] = createExportWrapper("emscripten_bind_Im_SliderFloat4_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderFloat4_6 = Module["_emscripten_bind_Im_SliderFloat4_6"] = createExportWrapper("emscripten_bind_Im_SliderFloat4_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderAngle_2 = Module["_emscripten_bind_Im_SliderAngle_2"] = createExportWrapper("emscripten_bind_Im_SliderAngle_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderAngle_3 = Module["_emscripten_bind_Im_SliderAngle_3"] = createExportWrapper("emscripten_bind_Im_SliderAngle_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderAngle_4 = Module["_emscripten_bind_Im_SliderAngle_4"] = createExportWrapper("emscripten_bind_Im_SliderAngle_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderAngle_5 = Module["_emscripten_bind_Im_SliderAngle_5"] = createExportWrapper("emscripten_bind_Im_SliderAngle_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderAngle_6 = Module["_emscripten_bind_Im_SliderAngle_6"] = createExportWrapper("emscripten_bind_Im_SliderAngle_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt_4 = Module["_emscripten_bind_Im_SliderInt_4"] = createExportWrapper("emscripten_bind_Im_SliderInt_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt_5 = Module["_emscripten_bind_Im_SliderInt_5"] = createExportWrapper("emscripten_bind_Im_SliderInt_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt_6 = Module["_emscripten_bind_Im_SliderInt_6"] = createExportWrapper("emscripten_bind_Im_SliderInt_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt2_4 = Module["_emscripten_bind_Im_SliderInt2_4"] = createExportWrapper("emscripten_bind_Im_SliderInt2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt2_5 = Module["_emscripten_bind_Im_SliderInt2_5"] = createExportWrapper("emscripten_bind_Im_SliderInt2_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt2_6 = Module["_emscripten_bind_Im_SliderInt2_6"] = createExportWrapper("emscripten_bind_Im_SliderInt2_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt3_4 = Module["_emscripten_bind_Im_SliderInt3_4"] = createExportWrapper("emscripten_bind_Im_SliderInt3_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt3_5 = Module["_emscripten_bind_Im_SliderInt3_5"] = createExportWrapper("emscripten_bind_Im_SliderInt3_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt3_6 = Module["_emscripten_bind_Im_SliderInt3_6"] = createExportWrapper("emscripten_bind_Im_SliderInt3_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt4_4 = Module["_emscripten_bind_Im_SliderInt4_4"] = createExportWrapper("emscripten_bind_Im_SliderInt4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt4_5 = Module["_emscripten_bind_Im_SliderInt4_5"] = createExportWrapper("emscripten_bind_Im_SliderInt4_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderInt4_6 = Module["_emscripten_bind_Im_SliderInt4_6"] = createExportWrapper("emscripten_bind_Im_SliderInt4_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalar_5 = Module["_emscripten_bind_Im_SliderScalar_5"] = createExportWrapper("emscripten_bind_Im_SliderScalar_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalar_6 = Module["_emscripten_bind_Im_SliderScalar_6"] = createExportWrapper("emscripten_bind_Im_SliderScalar_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalar_7 = Module["_emscripten_bind_Im_SliderScalar_7"] = createExportWrapper("emscripten_bind_Im_SliderScalar_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalarN_6 = Module["_emscripten_bind_Im_SliderScalarN_6"] = createExportWrapper("emscripten_bind_Im_SliderScalarN_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalarN_7 = Module["_emscripten_bind_Im_SliderScalarN_7"] = createExportWrapper("emscripten_bind_Im_SliderScalarN_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SliderScalarN_8 = Module["_emscripten_bind_Im_SliderScalarN_8"] = createExportWrapper("emscripten_bind_Im_SliderScalarN_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderFloat_5 = Module["_emscripten_bind_Im_VSliderFloat_5"] = createExportWrapper("emscripten_bind_Im_VSliderFloat_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderFloat_6 = Module["_emscripten_bind_Im_VSliderFloat_6"] = createExportWrapper("emscripten_bind_Im_VSliderFloat_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderFloat_7 = Module["_emscripten_bind_Im_VSliderFloat_7"] = createExportWrapper("emscripten_bind_Im_VSliderFloat_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderInt_5 = Module["_emscripten_bind_Im_VSliderInt_5"] = createExportWrapper("emscripten_bind_Im_VSliderInt_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderInt_6 = Module["_emscripten_bind_Im_VSliderInt_6"] = createExportWrapper("emscripten_bind_Im_VSliderInt_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderInt_7 = Module["_emscripten_bind_Im_VSliderInt_7"] = createExportWrapper("emscripten_bind_Im_VSliderInt_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderScalar_6 = Module["_emscripten_bind_Im_VSliderScalar_6"] = createExportWrapper("emscripten_bind_Im_VSliderScalar_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderScalar_7 = Module["_emscripten_bind_Im_VSliderScalar_7"] = createExportWrapper("emscripten_bind_Im_VSliderScalar_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_VSliderScalar_8 = Module["_emscripten_bind_Im_VSliderScalar_8"] = createExportWrapper("emscripten_bind_Im_VSliderScalar_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputText_3 = Module["_emscripten_bind_Im_InputText_3"] = createExportWrapper("emscripten_bind_Im_InputText_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputText_4 = Module["_emscripten_bind_Im_InputText_4"] = createExportWrapper("emscripten_bind_Im_InputText_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputTextMultiline_3 = Module["_emscripten_bind_Im_InputTextMultiline_3"] = createExportWrapper("emscripten_bind_Im_InputTextMultiline_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputTextMultiline_4 = Module["_emscripten_bind_Im_InputTextMultiline_4"] = createExportWrapper("emscripten_bind_Im_InputTextMultiline_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputTextMultiline_5 = Module["_emscripten_bind_Im_InputTextMultiline_5"] = createExportWrapper("emscripten_bind_Im_InputTextMultiline_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputTextWithHint_4 = Module["_emscripten_bind_Im_InputTextWithHint_4"] = createExportWrapper("emscripten_bind_Im_InputTextWithHint_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputTextWithHint_5 = Module["_emscripten_bind_Im_InputTextWithHint_5"] = createExportWrapper("emscripten_bind_Im_InputTextWithHint_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat_2 = Module["_emscripten_bind_Im_InputFloat_2"] = createExportWrapper("emscripten_bind_Im_InputFloat_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat_3 = Module["_emscripten_bind_Im_InputFloat_3"] = createExportWrapper("emscripten_bind_Im_InputFloat_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat_4 = Module["_emscripten_bind_Im_InputFloat_4"] = createExportWrapper("emscripten_bind_Im_InputFloat_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat_5 = Module["_emscripten_bind_Im_InputFloat_5"] = createExportWrapper("emscripten_bind_Im_InputFloat_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat_6 = Module["_emscripten_bind_Im_InputFloat_6"] = createExportWrapper("emscripten_bind_Im_InputFloat_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat2_2 = Module["_emscripten_bind_Im_InputFloat2_2"] = createExportWrapper("emscripten_bind_Im_InputFloat2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat2_3 = Module["_emscripten_bind_Im_InputFloat2_3"] = createExportWrapper("emscripten_bind_Im_InputFloat2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat2_4 = Module["_emscripten_bind_Im_InputFloat2_4"] = createExportWrapper("emscripten_bind_Im_InputFloat2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat3_2 = Module["_emscripten_bind_Im_InputFloat3_2"] = createExportWrapper("emscripten_bind_Im_InputFloat3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat3_3 = Module["_emscripten_bind_Im_InputFloat3_3"] = createExportWrapper("emscripten_bind_Im_InputFloat3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat3_4 = Module["_emscripten_bind_Im_InputFloat3_4"] = createExportWrapper("emscripten_bind_Im_InputFloat3_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat4_2 = Module["_emscripten_bind_Im_InputFloat4_2"] = createExportWrapper("emscripten_bind_Im_InputFloat4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat4_3 = Module["_emscripten_bind_Im_InputFloat4_3"] = createExportWrapper("emscripten_bind_Im_InputFloat4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputFloat4_4 = Module["_emscripten_bind_Im_InputFloat4_4"] = createExportWrapper("emscripten_bind_Im_InputFloat4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt_2 = Module["_emscripten_bind_Im_InputInt_2"] = createExportWrapper("emscripten_bind_Im_InputInt_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt_3 = Module["_emscripten_bind_Im_InputInt_3"] = createExportWrapper("emscripten_bind_Im_InputInt_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt_4 = Module["_emscripten_bind_Im_InputInt_4"] = createExportWrapper("emscripten_bind_Im_InputInt_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt_5 = Module["_emscripten_bind_Im_InputInt_5"] = createExportWrapper("emscripten_bind_Im_InputInt_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt2_2 = Module["_emscripten_bind_Im_InputInt2_2"] = createExportWrapper("emscripten_bind_Im_InputInt2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt2_3 = Module["_emscripten_bind_Im_InputInt2_3"] = createExportWrapper("emscripten_bind_Im_InputInt2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt3_2 = Module["_emscripten_bind_Im_InputInt3_2"] = createExportWrapper("emscripten_bind_Im_InputInt3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt3_3 = Module["_emscripten_bind_Im_InputInt3_3"] = createExportWrapper("emscripten_bind_Im_InputInt3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt4_2 = Module["_emscripten_bind_Im_InputInt4_2"] = createExportWrapper("emscripten_bind_Im_InputInt4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputInt4_3 = Module["_emscripten_bind_Im_InputInt4_3"] = createExportWrapper("emscripten_bind_Im_InputInt4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputDouble_2 = Module["_emscripten_bind_Im_InputDouble_2"] = createExportWrapper("emscripten_bind_Im_InputDouble_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputDouble_3 = Module["_emscripten_bind_Im_InputDouble_3"] = createExportWrapper("emscripten_bind_Im_InputDouble_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputDouble_4 = Module["_emscripten_bind_Im_InputDouble_4"] = createExportWrapper("emscripten_bind_Im_InputDouble_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputDouble_5 = Module["_emscripten_bind_Im_InputDouble_5"] = createExportWrapper("emscripten_bind_Im_InputDouble_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputDouble_6 = Module["_emscripten_bind_Im_InputDouble_6"] = createExportWrapper("emscripten_bind_Im_InputDouble_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalar_3 = Module["_emscripten_bind_Im_InputScalar_3"] = createExportWrapper("emscripten_bind_Im_InputScalar_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalar_4 = Module["_emscripten_bind_Im_InputScalar_4"] = createExportWrapper("emscripten_bind_Im_InputScalar_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalar_5 = Module["_emscripten_bind_Im_InputScalar_5"] = createExportWrapper("emscripten_bind_Im_InputScalar_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalar_6 = Module["_emscripten_bind_Im_InputScalar_6"] = createExportWrapper("emscripten_bind_Im_InputScalar_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalar_7 = Module["_emscripten_bind_Im_InputScalar_7"] = createExportWrapper("emscripten_bind_Im_InputScalar_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalarN_4 = Module["_emscripten_bind_Im_InputScalarN_4"] = createExportWrapper("emscripten_bind_Im_InputScalarN_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalarN_5 = Module["_emscripten_bind_Im_InputScalarN_5"] = createExportWrapper("emscripten_bind_Im_InputScalarN_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalarN_6 = Module["_emscripten_bind_Im_InputScalarN_6"] = createExportWrapper("emscripten_bind_Im_InputScalarN_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalarN_7 = Module["_emscripten_bind_Im_InputScalarN_7"] = createExportWrapper("emscripten_bind_Im_InputScalarN_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_InputScalarN_8 = Module["_emscripten_bind_Im_InputScalarN_8"] = createExportWrapper("emscripten_bind_Im_InputScalarN_8");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorEdit3_2 = Module["_emscripten_bind_Im_ColorEdit3_2"] = createExportWrapper("emscripten_bind_Im_ColorEdit3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorEdit3_3 = Module["_emscripten_bind_Im_ColorEdit3_3"] = createExportWrapper("emscripten_bind_Im_ColorEdit3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorEdit4_2 = Module["_emscripten_bind_Im_ColorEdit4_2"] = createExportWrapper("emscripten_bind_Im_ColorEdit4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorEdit4_3 = Module["_emscripten_bind_Im_ColorEdit4_3"] = createExportWrapper("emscripten_bind_Im_ColorEdit4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorPicker3_2 = Module["_emscripten_bind_Im_ColorPicker3_2"] = createExportWrapper("emscripten_bind_Im_ColorPicker3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorPicker3_3 = Module["_emscripten_bind_Im_ColorPicker3_3"] = createExportWrapper("emscripten_bind_Im_ColorPicker3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorPicker4_2 = Module["_emscripten_bind_Im_ColorPicker4_2"] = createExportWrapper("emscripten_bind_Im_ColorPicker4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorPicker4_3 = Module["_emscripten_bind_Im_ColorPicker4_3"] = createExportWrapper("emscripten_bind_Im_ColorPicker4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorPicker4_4 = Module["_emscripten_bind_Im_ColorPicker4_4"] = createExportWrapper("emscripten_bind_Im_ColorPicker4_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorButton_2 = Module["_emscripten_bind_Im_ColorButton_2"] = createExportWrapper("emscripten_bind_Im_ColorButton_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorButton_3 = Module["_emscripten_bind_Im_ColorButton_3"] = createExportWrapper("emscripten_bind_Im_ColorButton_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorButton_4 = Module["_emscripten_bind_Im_ColorButton_4"] = createExportWrapper("emscripten_bind_Im_ColorButton_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetColorEditOptions_1 = Module["_emscripten_bind_Im_SetColorEditOptions_1"] = createExportWrapper("emscripten_bind_Im_SetColorEditOptions_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNode_1 = Module["_emscripten_bind_Im_TreeNode_1"] = createExportWrapper("emscripten_bind_Im_TreeNode_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNode2_2 = Module["_emscripten_bind_Im_TreeNode2_2"] = createExportWrapper("emscripten_bind_Im_TreeNode2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNode3_2 = Module["_emscripten_bind_Im_TreeNode3_2"] = createExportWrapper("emscripten_bind_Im_TreeNode3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeV_3 = Module["_emscripten_bind_Im_TreeNodeV_3"] = createExportWrapper("emscripten_bind_Im_TreeNodeV_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeV2_3 = Module["_emscripten_bind_Im_TreeNodeV2_3"] = createExportWrapper("emscripten_bind_Im_TreeNodeV2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeEx_1 = Module["_emscripten_bind_Im_TreeNodeEx_1"] = createExportWrapper("emscripten_bind_Im_TreeNodeEx_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeEx_2 = Module["_emscripten_bind_Im_TreeNodeEx_2"] = createExportWrapper("emscripten_bind_Im_TreeNodeEx_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeEx2_3 = Module["_emscripten_bind_Im_TreeNodeEx2_3"] = createExportWrapper("emscripten_bind_Im_TreeNodeEx2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeEx3_3 = Module["_emscripten_bind_Im_TreeNodeEx3_3"] = createExportWrapper("emscripten_bind_Im_TreeNodeEx3_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeExV_4 = Module["_emscripten_bind_Im_TreeNodeExV_4"] = createExportWrapper("emscripten_bind_Im_TreeNodeExV_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreeNodeExV2_4 = Module["_emscripten_bind_Im_TreeNodeExV2_4"] = createExportWrapper("emscripten_bind_Im_TreeNodeExV2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreePush_1 = Module["_emscripten_bind_Im_TreePush_1"] = createExportWrapper("emscripten_bind_Im_TreePush_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreePush2_1 = Module["_emscripten_bind_Im_TreePush2_1"] = createExportWrapper("emscripten_bind_Im_TreePush2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TreePop_0 = Module["_emscripten_bind_Im_TreePop_0"] = createExportWrapper("emscripten_bind_Im_TreePop_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetTreeNodeToLabelSpacing_0 = Module["_emscripten_bind_Im_GetTreeNodeToLabelSpacing_0"] = createExportWrapper("emscripten_bind_Im_GetTreeNodeToLabelSpacing_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CollapsingHeader_1 = Module["_emscripten_bind_Im_CollapsingHeader_1"] = createExportWrapper("emscripten_bind_Im_CollapsingHeader_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CollapsingHeader_2 = Module["_emscripten_bind_Im_CollapsingHeader_2"] = createExportWrapper("emscripten_bind_Im_CollapsingHeader_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CollapsingHeader2_2 = Module["_emscripten_bind_Im_CollapsingHeader2_2"] = createExportWrapper("emscripten_bind_Im_CollapsingHeader2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CollapsingHeader2_3 = Module["_emscripten_bind_Im_CollapsingHeader2_3"] = createExportWrapper("emscripten_bind_Im_CollapsingHeader2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextItemOpen_1 = Module["_emscripten_bind_Im_SetNextItemOpen_1"] = createExportWrapper("emscripten_bind_Im_SetNextItemOpen_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextItemOpen_2 = Module["_emscripten_bind_Im_SetNextItemOpen_2"] = createExportWrapper("emscripten_bind_Im_SetNextItemOpen_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable_1 = Module["_emscripten_bind_Im_Selectable_1"] = createExportWrapper("emscripten_bind_Im_Selectable_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable_2 = Module["_emscripten_bind_Im_Selectable_2"] = createExportWrapper("emscripten_bind_Im_Selectable_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable_3 = Module["_emscripten_bind_Im_Selectable_3"] = createExportWrapper("emscripten_bind_Im_Selectable_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable_4 = Module["_emscripten_bind_Im_Selectable_4"] = createExportWrapper("emscripten_bind_Im_Selectable_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable2_2 = Module["_emscripten_bind_Im_Selectable2_2"] = createExportWrapper("emscripten_bind_Im_Selectable2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable2_3 = Module["_emscripten_bind_Im_Selectable2_3"] = createExportWrapper("emscripten_bind_Im_Selectable2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Selectable2_4 = Module["_emscripten_bind_Im_Selectable2_4"] = createExportWrapper("emscripten_bind_Im_Selectable2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginListBox_1 = Module["_emscripten_bind_Im_BeginListBox_1"] = createExportWrapper("emscripten_bind_Im_BeginListBox_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginListBox_2 = Module["_emscripten_bind_Im_BeginListBox_2"] = createExportWrapper("emscripten_bind_Im_BeginListBox_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndListBox_0 = Module["_emscripten_bind_Im_EndListBox_0"] = createExportWrapper("emscripten_bind_Im_EndListBox_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ListBox_4 = Module["_emscripten_bind_Im_ListBox_4"] = createExportWrapper("emscripten_bind_Im_ListBox_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ListBox_5 = Module["_emscripten_bind_Im_ListBox_5"] = createExportWrapper("emscripten_bind_Im_ListBox_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotLines_3 = Module["_emscripten_bind_Im_PlotLines_3"] = createExportWrapper("emscripten_bind_Im_PlotLines_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotLines_4 = Module["_emscripten_bind_Im_PlotLines_4"] = createExportWrapper("emscripten_bind_Im_PlotLines_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotLines_5 = Module["_emscripten_bind_Im_PlotLines_5"] = createExportWrapper("emscripten_bind_Im_PlotLines_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotLines_6 = Module["_emscripten_bind_Im_PlotLines_6"] = createExportWrapper("emscripten_bind_Im_PlotLines_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotLines_7 = Module["_emscripten_bind_Im_PlotLines_7"] = createExportWrapper("emscripten_bind_Im_PlotLines_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotHistogram_3 = Module["_emscripten_bind_Im_PlotHistogram_3"] = createExportWrapper("emscripten_bind_Im_PlotHistogram_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotHistogram_4 = Module["_emscripten_bind_Im_PlotHistogram_4"] = createExportWrapper("emscripten_bind_Im_PlotHistogram_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotHistogram_5 = Module["_emscripten_bind_Im_PlotHistogram_5"] = createExportWrapper("emscripten_bind_Im_PlotHistogram_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotHistogram_6 = Module["_emscripten_bind_Im_PlotHistogram_6"] = createExportWrapper("emscripten_bind_Im_PlotHistogram_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PlotHistogram_7 = Module["_emscripten_bind_Im_PlotHistogram_7"] = createExportWrapper("emscripten_bind_Im_PlotHistogram_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Value_2 = Module["_emscripten_bind_Im_Value_2"] = createExportWrapper("emscripten_bind_Im_Value_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Value2_2 = Module["_emscripten_bind_Im_Value2_2"] = createExportWrapper("emscripten_bind_Im_Value2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Value3_2 = Module["_emscripten_bind_Im_Value3_2"] = createExportWrapper("emscripten_bind_Im_Value3_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Value4_2 = Module["_emscripten_bind_Im_Value4_2"] = createExportWrapper("emscripten_bind_Im_Value4_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Value4_3 = Module["_emscripten_bind_Im_Value4_3"] = createExportWrapper("emscripten_bind_Im_Value4_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginMenuBar_0 = Module["_emscripten_bind_Im_BeginMenuBar_0"] = createExportWrapper("emscripten_bind_Im_BeginMenuBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndMenuBar_0 = Module["_emscripten_bind_Im_EndMenuBar_0"] = createExportWrapper("emscripten_bind_Im_EndMenuBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginMainMenuBar_0 = Module["_emscripten_bind_Im_BeginMainMenuBar_0"] = createExportWrapper("emscripten_bind_Im_BeginMainMenuBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndMainMenuBar_0 = Module["_emscripten_bind_Im_EndMainMenuBar_0"] = createExportWrapper("emscripten_bind_Im_EndMainMenuBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginMenu_1 = Module["_emscripten_bind_Im_BeginMenu_1"] = createExportWrapper("emscripten_bind_Im_BeginMenu_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginMenu_2 = Module["_emscripten_bind_Im_BeginMenu_2"] = createExportWrapper("emscripten_bind_Im_BeginMenu_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndMenu_0 = Module["_emscripten_bind_Im_EndMenu_0"] = createExportWrapper("emscripten_bind_Im_EndMenu_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem_1 = Module["_emscripten_bind_Im_MenuItem_1"] = createExportWrapper("emscripten_bind_Im_MenuItem_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem_2 = Module["_emscripten_bind_Im_MenuItem_2"] = createExportWrapper("emscripten_bind_Im_MenuItem_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem_3 = Module["_emscripten_bind_Im_MenuItem_3"] = createExportWrapper("emscripten_bind_Im_MenuItem_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem_4 = Module["_emscripten_bind_Im_MenuItem_4"] = createExportWrapper("emscripten_bind_Im_MenuItem_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem2_3 = Module["_emscripten_bind_Im_MenuItem2_3"] = createExportWrapper("emscripten_bind_Im_MenuItem2_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MenuItem2_4 = Module["_emscripten_bind_Im_MenuItem2_4"] = createExportWrapper("emscripten_bind_Im_MenuItem2_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTooltip_0 = Module["_emscripten_bind_Im_BeginTooltip_0"] = createExportWrapper("emscripten_bind_Im_BeginTooltip_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndTooltip_0 = Module["_emscripten_bind_Im_EndTooltip_0"] = createExportWrapper("emscripten_bind_Im_EndTooltip_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetTooltip_1 = Module["_emscripten_bind_Im_SetTooltip_1"] = createExportWrapper("emscripten_bind_Im_SetTooltip_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetTooltipV_2 = Module["_emscripten_bind_Im_SetTooltipV_2"] = createExportWrapper("emscripten_bind_Im_SetTooltipV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopup_1 = Module["_emscripten_bind_Im_BeginPopup_1"] = createExportWrapper("emscripten_bind_Im_BeginPopup_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopup_2 = Module["_emscripten_bind_Im_BeginPopup_2"] = createExportWrapper("emscripten_bind_Im_BeginPopup_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupModal_1 = Module["_emscripten_bind_Im_BeginPopupModal_1"] = createExportWrapper("emscripten_bind_Im_BeginPopupModal_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupModal_2 = Module["_emscripten_bind_Im_BeginPopupModal_2"] = createExportWrapper("emscripten_bind_Im_BeginPopupModal_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupModal_3 = Module["_emscripten_bind_Im_BeginPopupModal_3"] = createExportWrapper("emscripten_bind_Im_BeginPopupModal_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndPopup_0 = Module["_emscripten_bind_Im_EndPopup_0"] = createExportWrapper("emscripten_bind_Im_EndPopup_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopup_1 = Module["_emscripten_bind_Im_OpenPopup_1"] = createExportWrapper("emscripten_bind_Im_OpenPopup_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopup_2 = Module["_emscripten_bind_Im_OpenPopup_2"] = createExportWrapper("emscripten_bind_Im_OpenPopup_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopup2_1 = Module["_emscripten_bind_Im_OpenPopup2_1"] = createExportWrapper("emscripten_bind_Im_OpenPopup2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopup2_2 = Module["_emscripten_bind_Im_OpenPopup2_2"] = createExportWrapper("emscripten_bind_Im_OpenPopup2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopupOnItemClick_0 = Module["_emscripten_bind_Im_OpenPopupOnItemClick_0"] = createExportWrapper("emscripten_bind_Im_OpenPopupOnItemClick_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopupOnItemClick_1 = Module["_emscripten_bind_Im_OpenPopupOnItemClick_1"] = createExportWrapper("emscripten_bind_Im_OpenPopupOnItemClick_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_OpenPopupOnItemClick_2 = Module["_emscripten_bind_Im_OpenPopupOnItemClick_2"] = createExportWrapper("emscripten_bind_Im_OpenPopupOnItemClick_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CloseCurrentPopup_0 = Module["_emscripten_bind_Im_CloseCurrentPopup_0"] = createExportWrapper("emscripten_bind_Im_CloseCurrentPopup_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextItem_0 = Module["_emscripten_bind_Im_BeginPopupContextItem_0"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextItem_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextItem_1 = Module["_emscripten_bind_Im_BeginPopupContextItem_1"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextItem_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextItem_2 = Module["_emscripten_bind_Im_BeginPopupContextItem_2"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextItem_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextWindow_0 = Module["_emscripten_bind_Im_BeginPopupContextWindow_0"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextWindow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextWindow_1 = Module["_emscripten_bind_Im_BeginPopupContextWindow_1"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextWindow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextWindow_2 = Module["_emscripten_bind_Im_BeginPopupContextWindow_2"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextWindow_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextVoid_0 = Module["_emscripten_bind_Im_BeginPopupContextVoid_0"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextVoid_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextVoid_1 = Module["_emscripten_bind_Im_BeginPopupContextVoid_1"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextVoid_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginPopupContextVoid_2 = Module["_emscripten_bind_Im_BeginPopupContextVoid_2"] = createExportWrapper("emscripten_bind_Im_BeginPopupContextVoid_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsPopupOpen_1 = Module["_emscripten_bind_Im_IsPopupOpen_1"] = createExportWrapper("emscripten_bind_Im_IsPopupOpen_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsPopupOpen_2 = Module["_emscripten_bind_Im_IsPopupOpen_2"] = createExportWrapper("emscripten_bind_Im_IsPopupOpen_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTable_2 = Module["_emscripten_bind_Im_BeginTable_2"] = createExportWrapper("emscripten_bind_Im_BeginTable_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTable_3 = Module["_emscripten_bind_Im_BeginTable_3"] = createExportWrapper("emscripten_bind_Im_BeginTable_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTable_4 = Module["_emscripten_bind_Im_BeginTable_4"] = createExportWrapper("emscripten_bind_Im_BeginTable_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTable_5 = Module["_emscripten_bind_Im_BeginTable_5"] = createExportWrapper("emscripten_bind_Im_BeginTable_5");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndTable_0 = Module["_emscripten_bind_Im_EndTable_0"] = createExportWrapper("emscripten_bind_Im_EndTable_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableNextRow_0 = Module["_emscripten_bind_Im_TableNextRow_0"] = createExportWrapper("emscripten_bind_Im_TableNextRow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableNextRow_1 = Module["_emscripten_bind_Im_TableNextRow_1"] = createExportWrapper("emscripten_bind_Im_TableNextRow_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableNextRow_2 = Module["_emscripten_bind_Im_TableNextRow_2"] = createExportWrapper("emscripten_bind_Im_TableNextRow_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableNextColumn_0 = Module["_emscripten_bind_Im_TableNextColumn_0"] = createExportWrapper("emscripten_bind_Im_TableNextColumn_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetColumnIndex_1 = Module["_emscripten_bind_Im_TableSetColumnIndex_1"] = createExportWrapper("emscripten_bind_Im_TableSetColumnIndex_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetupColumn_1 = Module["_emscripten_bind_Im_TableSetupColumn_1"] = createExportWrapper("emscripten_bind_Im_TableSetupColumn_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetupColumn_2 = Module["_emscripten_bind_Im_TableSetupColumn_2"] = createExportWrapper("emscripten_bind_Im_TableSetupColumn_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetupColumn_3 = Module["_emscripten_bind_Im_TableSetupColumn_3"] = createExportWrapper("emscripten_bind_Im_TableSetupColumn_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetupColumn_4 = Module["_emscripten_bind_Im_TableSetupColumn_4"] = createExportWrapper("emscripten_bind_Im_TableSetupColumn_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetupScrollFreeze_2 = Module["_emscripten_bind_Im_TableSetupScrollFreeze_2"] = createExportWrapper("emscripten_bind_Im_TableSetupScrollFreeze_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableHeadersRow_0 = Module["_emscripten_bind_Im_TableHeadersRow_0"] = createExportWrapper("emscripten_bind_Im_TableHeadersRow_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableHeader_1 = Module["_emscripten_bind_Im_TableHeader_1"] = createExportWrapper("emscripten_bind_Im_TableHeader_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetSortSpecs_0 = Module["_emscripten_bind_Im_TableGetSortSpecs_0"] = createExportWrapper("emscripten_bind_Im_TableGetSortSpecs_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnCount_0 = Module["_emscripten_bind_Im_TableGetColumnCount_0"] = createExportWrapper("emscripten_bind_Im_TableGetColumnCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnIndex_0 = Module["_emscripten_bind_Im_TableGetColumnIndex_0"] = createExportWrapper("emscripten_bind_Im_TableGetColumnIndex_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetRowIndex_0 = Module["_emscripten_bind_Im_TableGetRowIndex_0"] = createExportWrapper("emscripten_bind_Im_TableGetRowIndex_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnName_0 = Module["_emscripten_bind_Im_TableGetColumnName_0"] = createExportWrapper("emscripten_bind_Im_TableGetColumnName_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnName_1 = Module["_emscripten_bind_Im_TableGetColumnName_1"] = createExportWrapper("emscripten_bind_Im_TableGetColumnName_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnFlags_0 = Module["_emscripten_bind_Im_TableGetColumnFlags_0"] = createExportWrapper("emscripten_bind_Im_TableGetColumnFlags_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableGetColumnFlags_1 = Module["_emscripten_bind_Im_TableGetColumnFlags_1"] = createExportWrapper("emscripten_bind_Im_TableGetColumnFlags_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetColumnEnabled_2 = Module["_emscripten_bind_Im_TableSetColumnEnabled_2"] = createExportWrapper("emscripten_bind_Im_TableSetColumnEnabled_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetBgColor_2 = Module["_emscripten_bind_Im_TableSetBgColor_2"] = createExportWrapper("emscripten_bind_Im_TableSetBgColor_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TableSetBgColor_3 = Module["_emscripten_bind_Im_TableSetBgColor_3"] = createExportWrapper("emscripten_bind_Im_TableSetBgColor_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Columns_0 = Module["_emscripten_bind_Im_Columns_0"] = createExportWrapper("emscripten_bind_Im_Columns_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Columns_1 = Module["_emscripten_bind_Im_Columns_1"] = createExportWrapper("emscripten_bind_Im_Columns_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Columns_2 = Module["_emscripten_bind_Im_Columns_2"] = createExportWrapper("emscripten_bind_Im_Columns_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_Columns_3 = Module["_emscripten_bind_Im_Columns_3"] = createExportWrapper("emscripten_bind_Im_Columns_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_NextColumn_0 = Module["_emscripten_bind_Im_NextColumn_0"] = createExportWrapper("emscripten_bind_Im_NextColumn_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnIndex_0 = Module["_emscripten_bind_Im_GetColumnIndex_0"] = createExportWrapper("emscripten_bind_Im_GetColumnIndex_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnWidth_0 = Module["_emscripten_bind_Im_GetColumnWidth_0"] = createExportWrapper("emscripten_bind_Im_GetColumnWidth_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnWidth_1 = Module["_emscripten_bind_Im_GetColumnWidth_1"] = createExportWrapper("emscripten_bind_Im_GetColumnWidth_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetColumnWidth_2 = Module["_emscripten_bind_Im_SetColumnWidth_2"] = createExportWrapper("emscripten_bind_Im_SetColumnWidth_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnOffset_0 = Module["_emscripten_bind_Im_GetColumnOffset_0"] = createExportWrapper("emscripten_bind_Im_GetColumnOffset_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnOffset_1 = Module["_emscripten_bind_Im_GetColumnOffset_1"] = createExportWrapper("emscripten_bind_Im_GetColumnOffset_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetColumnOffset_2 = Module["_emscripten_bind_Im_SetColumnOffset_2"] = createExportWrapper("emscripten_bind_Im_SetColumnOffset_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetColumnsCount_0 = Module["_emscripten_bind_Im_GetColumnsCount_0"] = createExportWrapper("emscripten_bind_Im_GetColumnsCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTabBar_1 = Module["_emscripten_bind_Im_BeginTabBar_1"] = createExportWrapper("emscripten_bind_Im_BeginTabBar_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTabBar_2 = Module["_emscripten_bind_Im_BeginTabBar_2"] = createExportWrapper("emscripten_bind_Im_BeginTabBar_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndTabBar_0 = Module["_emscripten_bind_Im_EndTabBar_0"] = createExportWrapper("emscripten_bind_Im_EndTabBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTabItem_1 = Module["_emscripten_bind_Im_BeginTabItem_1"] = createExportWrapper("emscripten_bind_Im_BeginTabItem_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTabItem_2 = Module["_emscripten_bind_Im_BeginTabItem_2"] = createExportWrapper("emscripten_bind_Im_BeginTabItem_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginTabItem_3 = Module["_emscripten_bind_Im_BeginTabItem_3"] = createExportWrapper("emscripten_bind_Im_BeginTabItem_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndTabItem_0 = Module["_emscripten_bind_Im_EndTabItem_0"] = createExportWrapper("emscripten_bind_Im_EndTabItem_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TabItemButton_1 = Module["_emscripten_bind_Im_TabItemButton_1"] = createExportWrapper("emscripten_bind_Im_TabItemButton_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_TabItemButton_2 = Module["_emscripten_bind_Im_TabItemButton_2"] = createExportWrapper("emscripten_bind_Im_TabItemButton_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetTabItemClosed_1 = Module["_emscripten_bind_Im_SetTabItemClosed_1"] = createExportWrapper("emscripten_bind_Im_SetTabItemClosed_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpace_1 = Module["_emscripten_bind_Im_DockSpace_1"] = createExportWrapper("emscripten_bind_Im_DockSpace_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpace_2 = Module["_emscripten_bind_Im_DockSpace_2"] = createExportWrapper("emscripten_bind_Im_DockSpace_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpace_3 = Module["_emscripten_bind_Im_DockSpace_3"] = createExportWrapper("emscripten_bind_Im_DockSpace_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpace_4 = Module["_emscripten_bind_Im_DockSpace_4"] = createExportWrapper("emscripten_bind_Im_DockSpace_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpaceOverViewport_0 = Module["_emscripten_bind_Im_DockSpaceOverViewport_0"] = createExportWrapper("emscripten_bind_Im_DockSpaceOverViewport_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpaceOverViewport_1 = Module["_emscripten_bind_Im_DockSpaceOverViewport_1"] = createExportWrapper("emscripten_bind_Im_DockSpaceOverViewport_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpaceOverViewport_2 = Module["_emscripten_bind_Im_DockSpaceOverViewport_2"] = createExportWrapper("emscripten_bind_Im_DockSpaceOverViewport_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DockSpaceOverViewport_3 = Module["_emscripten_bind_Im_DockSpaceOverViewport_3"] = createExportWrapper("emscripten_bind_Im_DockSpaceOverViewport_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowDockID_1 = Module["_emscripten_bind_Im_SetNextWindowDockID_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowDockID_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowDockID_2 = Module["_emscripten_bind_Im_SetNextWindowDockID_2"] = createExportWrapper("emscripten_bind_Im_SetNextWindowDockID_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextWindowClass_1 = Module["_emscripten_bind_Im_SetNextWindowClass_1"] = createExportWrapper("emscripten_bind_Im_SetNextWindowClass_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetWindowDockID_0 = Module["_emscripten_bind_Im_GetWindowDockID_0"] = createExportWrapper("emscripten_bind_Im_GetWindowDockID_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsWindowDocked_0 = Module["_emscripten_bind_Im_IsWindowDocked_0"] = createExportWrapper("emscripten_bind_Im_IsWindowDocked_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToTTY_0 = Module["_emscripten_bind_Im_LogToTTY_0"] = createExportWrapper("emscripten_bind_Im_LogToTTY_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToTTY_1 = Module["_emscripten_bind_Im_LogToTTY_1"] = createExportWrapper("emscripten_bind_Im_LogToTTY_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToFile_0 = Module["_emscripten_bind_Im_LogToFile_0"] = createExportWrapper("emscripten_bind_Im_LogToFile_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToFile_1 = Module["_emscripten_bind_Im_LogToFile_1"] = createExportWrapper("emscripten_bind_Im_LogToFile_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToFile_2 = Module["_emscripten_bind_Im_LogToFile_2"] = createExportWrapper("emscripten_bind_Im_LogToFile_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToClipboard_0 = Module["_emscripten_bind_Im_LogToClipboard_0"] = createExportWrapper("emscripten_bind_Im_LogToClipboard_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogToClipboard_1 = Module["_emscripten_bind_Im_LogToClipboard_1"] = createExportWrapper("emscripten_bind_Im_LogToClipboard_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogFinish_0 = Module["_emscripten_bind_Im_LogFinish_0"] = createExportWrapper("emscripten_bind_Im_LogFinish_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogButtons_0 = Module["_emscripten_bind_Im_LogButtons_0"] = createExportWrapper("emscripten_bind_Im_LogButtons_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogText_1 = Module["_emscripten_bind_Im_LogText_1"] = createExportWrapper("emscripten_bind_Im_LogText_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LogTextV_2 = Module["_emscripten_bind_Im_LogTextV_2"] = createExportWrapper("emscripten_bind_Im_LogTextV_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginDragDropSource_0 = Module["_emscripten_bind_Im_BeginDragDropSource_0"] = createExportWrapper("emscripten_bind_Im_BeginDragDropSource_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginDragDropSource_1 = Module["_emscripten_bind_Im_BeginDragDropSource_1"] = createExportWrapper("emscripten_bind_Im_BeginDragDropSource_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetDragDropPayload_3 = Module["_emscripten_bind_Im_SetDragDropPayload_3"] = createExportWrapper("emscripten_bind_Im_SetDragDropPayload_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetDragDropPayload_4 = Module["_emscripten_bind_Im_SetDragDropPayload_4"] = createExportWrapper("emscripten_bind_Im_SetDragDropPayload_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndDragDropSource_0 = Module["_emscripten_bind_Im_EndDragDropSource_0"] = createExportWrapper("emscripten_bind_Im_EndDragDropSource_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginDragDropTarget_0 = Module["_emscripten_bind_Im_BeginDragDropTarget_0"] = createExportWrapper("emscripten_bind_Im_BeginDragDropTarget_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_AcceptDragDropPayload_1 = Module["_emscripten_bind_Im_AcceptDragDropPayload_1"] = createExportWrapper("emscripten_bind_Im_AcceptDragDropPayload_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_AcceptDragDropPayload_2 = Module["_emscripten_bind_Im_AcceptDragDropPayload_2"] = createExportWrapper("emscripten_bind_Im_AcceptDragDropPayload_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndDragDropTarget_0 = Module["_emscripten_bind_Im_EndDragDropTarget_0"] = createExportWrapper("emscripten_bind_Im_EndDragDropTarget_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetDragDropPayload_0 = Module["_emscripten_bind_Im_GetDragDropPayload_0"] = createExportWrapper("emscripten_bind_Im_GetDragDropPayload_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginDisabled_0 = Module["_emscripten_bind_Im_BeginDisabled_0"] = createExportWrapper("emscripten_bind_Im_BeginDisabled_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginDisabled_1 = Module["_emscripten_bind_Im_BeginDisabled_1"] = createExportWrapper("emscripten_bind_Im_BeginDisabled_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndDisabled_0 = Module["_emscripten_bind_Im_EndDisabled_0"] = createExportWrapper("emscripten_bind_Im_EndDisabled_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PushClipRect_3 = Module["_emscripten_bind_Im_PushClipRect_3"] = createExportWrapper("emscripten_bind_Im_PushClipRect_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_PopClipRect_0 = Module["_emscripten_bind_Im_PopClipRect_0"] = createExportWrapper("emscripten_bind_Im_PopClipRect_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetItemDefaultFocus_0 = Module["_emscripten_bind_Im_SetItemDefaultFocus_0"] = createExportWrapper("emscripten_bind_Im_SetItemDefaultFocus_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetKeyboardFocusHere_0 = Module["_emscripten_bind_Im_SetKeyboardFocusHere_0"] = createExportWrapper("emscripten_bind_Im_SetKeyboardFocusHere_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetKeyboardFocusHere_1 = Module["_emscripten_bind_Im_SetKeyboardFocusHere_1"] = createExportWrapper("emscripten_bind_Im_SetKeyboardFocusHere_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemHovered_0 = Module["_emscripten_bind_Im_IsItemHovered_0"] = createExportWrapper("emscripten_bind_Im_IsItemHovered_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemHovered_1 = Module["_emscripten_bind_Im_IsItemHovered_1"] = createExportWrapper("emscripten_bind_Im_IsItemHovered_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemActive_0 = Module["_emscripten_bind_Im_IsItemActive_0"] = createExportWrapper("emscripten_bind_Im_IsItemActive_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemFocused_0 = Module["_emscripten_bind_Im_IsItemFocused_0"] = createExportWrapper("emscripten_bind_Im_IsItemFocused_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemClicked_0 = Module["_emscripten_bind_Im_IsItemClicked_0"] = createExportWrapper("emscripten_bind_Im_IsItemClicked_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemClicked_1 = Module["_emscripten_bind_Im_IsItemClicked_1"] = createExportWrapper("emscripten_bind_Im_IsItemClicked_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemVisible_0 = Module["_emscripten_bind_Im_IsItemVisible_0"] = createExportWrapper("emscripten_bind_Im_IsItemVisible_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemEdited_0 = Module["_emscripten_bind_Im_IsItemEdited_0"] = createExportWrapper("emscripten_bind_Im_IsItemEdited_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemActivated_0 = Module["_emscripten_bind_Im_IsItemActivated_0"] = createExportWrapper("emscripten_bind_Im_IsItemActivated_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemDeactivated_0 = Module["_emscripten_bind_Im_IsItemDeactivated_0"] = createExportWrapper("emscripten_bind_Im_IsItemDeactivated_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemDeactivatedAfterEdit_0 = Module["_emscripten_bind_Im_IsItemDeactivatedAfterEdit_0"] = createExportWrapper("emscripten_bind_Im_IsItemDeactivatedAfterEdit_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsItemToggledOpen_0 = Module["_emscripten_bind_Im_IsItemToggledOpen_0"] = createExportWrapper("emscripten_bind_Im_IsItemToggledOpen_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsAnyItemHovered_0 = Module["_emscripten_bind_Im_IsAnyItemHovered_0"] = createExportWrapper("emscripten_bind_Im_IsAnyItemHovered_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsAnyItemActive_0 = Module["_emscripten_bind_Im_IsAnyItemActive_0"] = createExportWrapper("emscripten_bind_Im_IsAnyItemActive_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsAnyItemFocused_0 = Module["_emscripten_bind_Im_IsAnyItemFocused_0"] = createExportWrapper("emscripten_bind_Im_IsAnyItemFocused_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetItemID_0 = Module["_emscripten_bind_Im_GetItemID_0"] = createExportWrapper("emscripten_bind_Im_GetItemID_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetItemRectMin_0 = Module["_emscripten_bind_Im_GetItemRectMin_0"] = createExportWrapper("emscripten_bind_Im_GetItemRectMin_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetItemRectMax_0 = Module["_emscripten_bind_Im_GetItemRectMax_0"] = createExportWrapper("emscripten_bind_Im_GetItemRectMax_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetItemRectSize_0 = Module["_emscripten_bind_Im_GetItemRectSize_0"] = createExportWrapper("emscripten_bind_Im_GetItemRectSize_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetItemAllowOverlap_0 = Module["_emscripten_bind_Im_SetItemAllowOverlap_0"] = createExportWrapper("emscripten_bind_Im_SetItemAllowOverlap_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMainViewport_0 = Module["_emscripten_bind_Im_GetMainViewport_0"] = createExportWrapper("emscripten_bind_Im_GetMainViewport_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetBackgroundDrawList_0 = Module["_emscripten_bind_Im_GetBackgroundDrawList_0"] = createExportWrapper("emscripten_bind_Im_GetBackgroundDrawList_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetForegroundDrawList_0 = Module["_emscripten_bind_Im_GetForegroundDrawList_0"] = createExportWrapper("emscripten_bind_Im_GetForegroundDrawList_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetBackgroundDrawList2_1 = Module["_emscripten_bind_Im_GetBackgroundDrawList2_1"] = createExportWrapper("emscripten_bind_Im_GetBackgroundDrawList2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetForegroundDrawList2_1 = Module["_emscripten_bind_Im_GetForegroundDrawList2_1"] = createExportWrapper("emscripten_bind_Im_GetForegroundDrawList2_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsRectVisible_1 = Module["_emscripten_bind_Im_IsRectVisible_1"] = createExportWrapper("emscripten_bind_Im_IsRectVisible_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsRectVisible2_2 = Module["_emscripten_bind_Im_IsRectVisible2_2"] = createExportWrapper("emscripten_bind_Im_IsRectVisible2_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetTime_0 = Module["_emscripten_bind_Im_GetTime_0"] = createExportWrapper("emscripten_bind_Im_GetTime_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetFrameCount_0 = Module["_emscripten_bind_Im_GetFrameCount_0"] = createExportWrapper("emscripten_bind_Im_GetFrameCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetDrawListSharedData_0 = Module["_emscripten_bind_Im_GetDrawListSharedData_0"] = createExportWrapper("emscripten_bind_Im_GetDrawListSharedData_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetStyleColorName_1 = Module["_emscripten_bind_Im_GetStyleColorName_1"] = createExportWrapper("emscripten_bind_Im_GetStyleColorName_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetStateStorage_1 = Module["_emscripten_bind_Im_SetStateStorage_1"] = createExportWrapper("emscripten_bind_Im_SetStateStorage_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetStateStorage_0 = Module["_emscripten_bind_Im_GetStateStorage_0"] = createExportWrapper("emscripten_bind_Im_GetStateStorage_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChildFrame_2 = Module["_emscripten_bind_Im_BeginChildFrame_2"] = createExportWrapper("emscripten_bind_Im_BeginChildFrame_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_BeginChildFrame_3 = Module["_emscripten_bind_Im_BeginChildFrame_3"] = createExportWrapper("emscripten_bind_Im_BeginChildFrame_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_EndChildFrame_0 = Module["_emscripten_bind_Im_EndChildFrame_0"] = createExportWrapper("emscripten_bind_Im_EndChildFrame_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CalcTextSize_1 = Module["_emscripten_bind_Im_CalcTextSize_1"] = createExportWrapper("emscripten_bind_Im_CalcTextSize_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CalcTextSize_2 = Module["_emscripten_bind_Im_CalcTextSize_2"] = createExportWrapper("emscripten_bind_Im_CalcTextSize_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CalcTextSize_3 = Module["_emscripten_bind_Im_CalcTextSize_3"] = createExportWrapper("emscripten_bind_Im_CalcTextSize_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_CalcTextSize_4 = Module["_emscripten_bind_Im_CalcTextSize_4"] = createExportWrapper("emscripten_bind_Im_CalcTextSize_4");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorConvertU32ToFloat4_1 = Module["_emscripten_bind_Im_ColorConvertU32ToFloat4_1"] = createExportWrapper("emscripten_bind_Im_ColorConvertU32ToFloat4_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorConvertFloat4ToU32_1 = Module["_emscripten_bind_Im_ColorConvertFloat4ToU32_1"] = createExportWrapper("emscripten_bind_Im_ColorConvertFloat4ToU32_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorConvertRGBtoHSV_6 = Module["_emscripten_bind_Im_ColorConvertRGBtoHSV_6"] = createExportWrapper("emscripten_bind_Im_ColorConvertRGBtoHSV_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ColorConvertHSVtoRGB_6 = Module["_emscripten_bind_Im_ColorConvertHSVtoRGB_6"] = createExportWrapper("emscripten_bind_Im_ColorConvertHSVtoRGB_6");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsKeyDown_1 = Module["_emscripten_bind_Im_IsKeyDown_1"] = createExportWrapper("emscripten_bind_Im_IsKeyDown_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsKeyPressed_1 = Module["_emscripten_bind_Im_IsKeyPressed_1"] = createExportWrapper("emscripten_bind_Im_IsKeyPressed_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsKeyPressed_2 = Module["_emscripten_bind_Im_IsKeyPressed_2"] = createExportWrapper("emscripten_bind_Im_IsKeyPressed_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsKeyReleased_1 = Module["_emscripten_bind_Im_IsKeyReleased_1"] = createExportWrapper("emscripten_bind_Im_IsKeyReleased_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetKeyPressedAmount_3 = Module["_emscripten_bind_Im_GetKeyPressedAmount_3"] = createExportWrapper("emscripten_bind_Im_GetKeyPressedAmount_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetKeyName_1 = Module["_emscripten_bind_Im_GetKeyName_1"] = createExportWrapper("emscripten_bind_Im_GetKeyName_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextFrameWantCaptureKeyboard_1 = Module["_emscripten_bind_Im_SetNextFrameWantCaptureKeyboard_1"] = createExportWrapper("emscripten_bind_Im_SetNextFrameWantCaptureKeyboard_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseDown_1 = Module["_emscripten_bind_Im_IsMouseDown_1"] = createExportWrapper("emscripten_bind_Im_IsMouseDown_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseClicked_1 = Module["_emscripten_bind_Im_IsMouseClicked_1"] = createExportWrapper("emscripten_bind_Im_IsMouseClicked_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseClicked_2 = Module["_emscripten_bind_Im_IsMouseClicked_2"] = createExportWrapper("emscripten_bind_Im_IsMouseClicked_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseReleased_1 = Module["_emscripten_bind_Im_IsMouseReleased_1"] = createExportWrapper("emscripten_bind_Im_IsMouseReleased_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseDoubleClicked_1 = Module["_emscripten_bind_Im_IsMouseDoubleClicked_1"] = createExportWrapper("emscripten_bind_Im_IsMouseDoubleClicked_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMouseClickedCount_1 = Module["_emscripten_bind_Im_GetMouseClickedCount_1"] = createExportWrapper("emscripten_bind_Im_GetMouseClickedCount_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseHoveringRect_2 = Module["_emscripten_bind_Im_IsMouseHoveringRect_2"] = createExportWrapper("emscripten_bind_Im_IsMouseHoveringRect_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseHoveringRect_3 = Module["_emscripten_bind_Im_IsMouseHoveringRect_3"] = createExportWrapper("emscripten_bind_Im_IsMouseHoveringRect_3");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMousePosValid_0 = Module["_emscripten_bind_Im_IsMousePosValid_0"] = createExportWrapper("emscripten_bind_Im_IsMousePosValid_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMousePosValid_1 = Module["_emscripten_bind_Im_IsMousePosValid_1"] = createExportWrapper("emscripten_bind_Im_IsMousePosValid_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsAnyMouseDown_0 = Module["_emscripten_bind_Im_IsAnyMouseDown_0"] = createExportWrapper("emscripten_bind_Im_IsAnyMouseDown_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMousePos_0 = Module["_emscripten_bind_Im_GetMousePos_0"] = createExportWrapper("emscripten_bind_Im_GetMousePos_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMousePosOnOpeningCurrentPopup_0 = Module["_emscripten_bind_Im_GetMousePosOnOpeningCurrentPopup_0"] = createExportWrapper("emscripten_bind_Im_GetMousePosOnOpeningCurrentPopup_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseDragging_1 = Module["_emscripten_bind_Im_IsMouseDragging_1"] = createExportWrapper("emscripten_bind_Im_IsMouseDragging_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_IsMouseDragging_2 = Module["_emscripten_bind_Im_IsMouseDragging_2"] = createExportWrapper("emscripten_bind_Im_IsMouseDragging_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMouseDragDelta_0 = Module["_emscripten_bind_Im_GetMouseDragDelta_0"] = createExportWrapper("emscripten_bind_Im_GetMouseDragDelta_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMouseDragDelta_1 = Module["_emscripten_bind_Im_GetMouseDragDelta_1"] = createExportWrapper("emscripten_bind_Im_GetMouseDragDelta_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMouseDragDelta_2 = Module["_emscripten_bind_Im_GetMouseDragDelta_2"] = createExportWrapper("emscripten_bind_Im_GetMouseDragDelta_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ResetMouseDragDelta_0 = Module["_emscripten_bind_Im_ResetMouseDragDelta_0"] = createExportWrapper("emscripten_bind_Im_ResetMouseDragDelta_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_ResetMouseDragDelta_1 = Module["_emscripten_bind_Im_ResetMouseDragDelta_1"] = createExportWrapper("emscripten_bind_Im_ResetMouseDragDelta_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetMouseCursor_0 = Module["_emscripten_bind_Im_GetMouseCursor_0"] = createExportWrapper("emscripten_bind_Im_GetMouseCursor_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetMouseCursor_1 = Module["_emscripten_bind_Im_SetMouseCursor_1"] = createExportWrapper("emscripten_bind_Im_SetMouseCursor_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetNextFrameWantCaptureMouse_1 = Module["_emscripten_bind_Im_SetNextFrameWantCaptureMouse_1"] = createExportWrapper("emscripten_bind_Im_SetNextFrameWantCaptureMouse_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetClipboardText_0 = Module["_emscripten_bind_Im_GetClipboardText_0"] = createExportWrapper("emscripten_bind_Im_GetClipboardText_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SetClipboardText_1 = Module["_emscripten_bind_Im_SetClipboardText_1"] = createExportWrapper("emscripten_bind_Im_SetClipboardText_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LoadIniSettingsFromDisk_1 = Module["_emscripten_bind_Im_LoadIniSettingsFromDisk_1"] = createExportWrapper("emscripten_bind_Im_LoadIniSettingsFromDisk_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LoadIniSettingsFromMemory_1 = Module["_emscripten_bind_Im_LoadIniSettingsFromMemory_1"] = createExportWrapper("emscripten_bind_Im_LoadIniSettingsFromMemory_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_LoadIniSettingsFromMemory_2 = Module["_emscripten_bind_Im_LoadIniSettingsFromMemory_2"] = createExportWrapper("emscripten_bind_Im_LoadIniSettingsFromMemory_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SaveIniSettingsToDisk_1 = Module["_emscripten_bind_Im_SaveIniSettingsToDisk_1"] = createExportWrapper("emscripten_bind_Im_SaveIniSettingsToDisk_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_SaveIniSettingsToMemory_0 = Module["_emscripten_bind_Im_SaveIniSettingsToMemory_0"] = createExportWrapper("emscripten_bind_Im_SaveIniSettingsToMemory_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DebugTextEncoding_1 = Module["_emscripten_bind_Im_DebugTextEncoding_1"] = createExportWrapper("emscripten_bind_Im_DebugTextEncoding_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DebugCheckVersionAndDataLayout_7 = Module["_emscripten_bind_Im_DebugCheckVersionAndDataLayout_7"] = createExportWrapper("emscripten_bind_Im_DebugCheckVersionAndDataLayout_7");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MemAlloc_1 = Module["_emscripten_bind_Im_MemAlloc_1"] = createExportWrapper("emscripten_bind_Im_MemAlloc_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_MemFree_1 = Module["_emscripten_bind_Im_MemFree_1"] = createExportWrapper("emscripten_bind_Im_MemFree_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_GetPlatformIO_0 = Module["_emscripten_bind_Im_GetPlatformIO_0"] = createExportWrapper("emscripten_bind_Im_GetPlatformIO_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_UpdatePlatformWindows_0 = Module["_emscripten_bind_Im_UpdatePlatformWindows_0"] = createExportWrapper("emscripten_bind_Im_UpdatePlatformWindows_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_RenderPlatformWindowsDefault_0 = Module["_emscripten_bind_Im_RenderPlatformWindowsDefault_0"] = createExportWrapper("emscripten_bind_Im_RenderPlatformWindowsDefault_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_RenderPlatformWindowsDefault_1 = Module["_emscripten_bind_Im_RenderPlatformWindowsDefault_1"] = createExportWrapper("emscripten_bind_Im_RenderPlatformWindowsDefault_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_RenderPlatformWindowsDefault_2 = Module["_emscripten_bind_Im_RenderPlatformWindowsDefault_2"] = createExportWrapper("emscripten_bind_Im_RenderPlatformWindowsDefault_2");
/** @type {function(...*):?} */
var _emscripten_bind_Im_DestroyPlatformWindows_0 = Module["_emscripten_bind_Im_DestroyPlatformWindows_0"] = createExportWrapper("emscripten_bind_Im_DestroyPlatformWindows_0");
/** @type {function(...*):?} */
var _emscripten_bind_Im_FindViewportByID_1 = Module["_emscripten_bind_Im_FindViewportByID_1"] = createExportWrapper("emscripten_bind_Im_FindViewportByID_1");
/** @type {function(...*):?} */
var _emscripten_bind_Im_FindViewportByPlatformHandle_1 = Module["_emscripten_bind_Im_FindViewportByPlatformHandle_1"] = createExportWrapper("emscripten_bind_Im_FindViewportByPlatformHandle_1");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_BoolArray_1 = Module["_emscripten_bind_BoolArray_BoolArray_1"] = createExportWrapper("emscripten_bind_BoolArray_BoolArray_1");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_resize_1 = Module["_emscripten_bind_BoolArray_resize_1"] = createExportWrapper("emscripten_bind_BoolArray_resize_1");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_getValue_1 = Module["_emscripten_bind_BoolArray_getValue_1"] = createExportWrapper("emscripten_bind_BoolArray_getValue_1");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_setValue_2 = Module["_emscripten_bind_BoolArray_setValue_2"] = createExportWrapper("emscripten_bind_BoolArray_setValue_2");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_getPointer_0 = Module["_emscripten_bind_BoolArray_getPointer_0"] = createExportWrapper("emscripten_bind_BoolArray_getPointer_0");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_get_size_0 = Module["_emscripten_bind_BoolArray_get_size_0"] = createExportWrapper("emscripten_bind_BoolArray_get_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray_set_size_1 = Module["_emscripten_bind_BoolArray_set_size_1"] = createExportWrapper("emscripten_bind_BoolArray_set_size_1");
/** @type {function(...*):?} */
var _emscripten_bind_BoolArray___destroy___0 = Module["_emscripten_bind_BoolArray___destroy___0"] = createExportWrapper("emscripten_bind_BoolArray___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_IntArray_1 = Module["_emscripten_bind_IntArray_IntArray_1"] = createExportWrapper("emscripten_bind_IntArray_IntArray_1");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_resize_1 = Module["_emscripten_bind_IntArray_resize_1"] = createExportWrapper("emscripten_bind_IntArray_resize_1");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_getValue_1 = Module["_emscripten_bind_IntArray_getValue_1"] = createExportWrapper("emscripten_bind_IntArray_getValue_1");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_setValue_2 = Module["_emscripten_bind_IntArray_setValue_2"] = createExportWrapper("emscripten_bind_IntArray_setValue_2");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_getPointer_0 = Module["_emscripten_bind_IntArray_getPointer_0"] = createExportWrapper("emscripten_bind_IntArray_getPointer_0");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_get_size_0 = Module["_emscripten_bind_IntArray_get_size_0"] = createExportWrapper("emscripten_bind_IntArray_get_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray_set_size_1 = Module["_emscripten_bind_IntArray_set_size_1"] = createExportWrapper("emscripten_bind_IntArray_set_size_1");
/** @type {function(...*):?} */
var _emscripten_bind_IntArray___destroy___0 = Module["_emscripten_bind_IntArray___destroy___0"] = createExportWrapper("emscripten_bind_IntArray___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_FloatArray_1 = Module["_emscripten_bind_FloatArray_FloatArray_1"] = createExportWrapper("emscripten_bind_FloatArray_FloatArray_1");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_resize_1 = Module["_emscripten_bind_FloatArray_resize_1"] = createExportWrapper("emscripten_bind_FloatArray_resize_1");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_getValue_1 = Module["_emscripten_bind_FloatArray_getValue_1"] = createExportWrapper("emscripten_bind_FloatArray_getValue_1");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_setValue_2 = Module["_emscripten_bind_FloatArray_setValue_2"] = createExportWrapper("emscripten_bind_FloatArray_setValue_2");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_getPointer_0 = Module["_emscripten_bind_FloatArray_getPointer_0"] = createExportWrapper("emscripten_bind_FloatArray_getPointer_0");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_get_size_0 = Module["_emscripten_bind_FloatArray_get_size_0"] = createExportWrapper("emscripten_bind_FloatArray_get_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray_set_size_1 = Module["_emscripten_bind_FloatArray_set_size_1"] = createExportWrapper("emscripten_bind_FloatArray_set_size_1");
/** @type {function(...*):?} */
var _emscripten_bind_FloatArray___destroy___0 = Module["_emscripten_bind_FloatArray___destroy___0"] = createExportWrapper("emscripten_bind_FloatArray___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_DoubleArray_1 = Module["_emscripten_bind_DoubleArray_DoubleArray_1"] = createExportWrapper("emscripten_bind_DoubleArray_DoubleArray_1");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_resize_1 = Module["_emscripten_bind_DoubleArray_resize_1"] = createExportWrapper("emscripten_bind_DoubleArray_resize_1");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_getValue_1 = Module["_emscripten_bind_DoubleArray_getValue_1"] = createExportWrapper("emscripten_bind_DoubleArray_getValue_1");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_setValue_2 = Module["_emscripten_bind_DoubleArray_setValue_2"] = createExportWrapper("emscripten_bind_DoubleArray_setValue_2");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_getPointer_0 = Module["_emscripten_bind_DoubleArray_getPointer_0"] = createExportWrapper("emscripten_bind_DoubleArray_getPointer_0");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_get_size_0 = Module["_emscripten_bind_DoubleArray_get_size_0"] = createExportWrapper("emscripten_bind_DoubleArray_get_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray_set_size_1 = Module["_emscripten_bind_DoubleArray_set_size_1"] = createExportWrapper("emscripten_bind_DoubleArray_set_size_1");
/** @type {function(...*):?} */
var _emscripten_bind_DoubleArray___destroy___0 = Module["_emscripten_bind_DoubleArray___destroy___0"] = createExportWrapper("emscripten_bind_DoubleArray___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_CharArray_1 = Module["_emscripten_bind_CharArray_CharArray_1"] = createExportWrapper("emscripten_bind_CharArray_CharArray_1");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_resize_1 = Module["_emscripten_bind_CharArray_resize_1"] = createExportWrapper("emscripten_bind_CharArray_resize_1");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_getValue_1 = Module["_emscripten_bind_CharArray_getValue_1"] = createExportWrapper("emscripten_bind_CharArray_getValue_1");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_setValue_2 = Module["_emscripten_bind_CharArray_setValue_2"] = createExportWrapper("emscripten_bind_CharArray_setValue_2");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_getPointer_0 = Module["_emscripten_bind_CharArray_getPointer_0"] = createExportWrapper("emscripten_bind_CharArray_getPointer_0");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_get_size_0 = Module["_emscripten_bind_CharArray_get_size_0"] = createExportWrapper("emscripten_bind_CharArray_get_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray_set_size_1 = Module["_emscripten_bind_CharArray_set_size_1"] = createExportWrapper("emscripten_bind_CharArray_set_size_1");
/** @type {function(...*):?} */
var _emscripten_bind_CharArray___destroy___0 = Module["_emscripten_bind_CharArray___destroy___0"] = createExportWrapper("emscripten_bind_CharArray___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_memcpyIdx_3 = Module["_emscripten_bind_ImHelper_memcpyIdx_3"] = createExportWrapper("emscripten_bind_ImHelper_memcpyIdx_3");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_memcpyVtx_3 = Module["_emscripten_bind_ImHelper_memcpyVtx_3"] = createExportWrapper("emscripten_bind_ImHelper_memcpyVtx_3");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_memcpyFont_5 = Module["_emscripten_bind_ImHelper_memcpyFont_5"] = createExportWrapper("emscripten_bind_ImHelper_memcpyFont_5");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_getTextureId_1 = Module["_emscripten_bind_ImHelper_getTextureId_1"] = createExportWrapper("emscripten_bind_ImHelper_getTextureId_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_setIniFilename_2 = Module["_emscripten_bind_ImHelper_setIniFilename_2"] = createExportWrapper("emscripten_bind_ImHelper_setIniFilename_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper_removeIniFilename_1 = Module["_emscripten_bind_ImHelper_removeIniFilename_1"] = createExportWrapper("emscripten_bind_ImHelper_removeIniFilename_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImHelper___destroy___0 = Module["_emscripten_bind_ImHelper___destroy___0"] = createExportWrapper("emscripten_bind_ImHelper___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_ImVec2_0 = Module["_emscripten_bind_ImVec2_ImVec2_0"] = createExportWrapper("emscripten_bind_ImVec2_ImVec2_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_ImVec2_2 = Module["_emscripten_bind_ImVec2_ImVec2_2"] = createExportWrapper("emscripten_bind_ImVec2_ImVec2_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_get_x_0 = Module["_emscripten_bind_ImVec2_get_x_0"] = createExportWrapper("emscripten_bind_ImVec2_get_x_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_set_x_1 = Module["_emscripten_bind_ImVec2_set_x_1"] = createExportWrapper("emscripten_bind_ImVec2_set_x_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_get_y_0 = Module["_emscripten_bind_ImVec2_get_y_0"] = createExportWrapper("emscripten_bind_ImVec2_get_y_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2_set_y_1 = Module["_emscripten_bind_ImVec2_set_y_1"] = createExportWrapper("emscripten_bind_ImVec2_set_y_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec2___destroy___0 = Module["_emscripten_bind_ImVec2___destroy___0"] = createExportWrapper("emscripten_bind_ImVec2___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_ImVec4_0 = Module["_emscripten_bind_ImVec4_ImVec4_0"] = createExportWrapper("emscripten_bind_ImVec4_ImVec4_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_ImVec4_4 = Module["_emscripten_bind_ImVec4_ImVec4_4"] = createExportWrapper("emscripten_bind_ImVec4_ImVec4_4");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_get_x_0 = Module["_emscripten_bind_ImVec4_get_x_0"] = createExportWrapper("emscripten_bind_ImVec4_get_x_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_set_x_1 = Module["_emscripten_bind_ImVec4_set_x_1"] = createExportWrapper("emscripten_bind_ImVec4_set_x_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_get_y_0 = Module["_emscripten_bind_ImVec4_get_y_0"] = createExportWrapper("emscripten_bind_ImVec4_get_y_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_set_y_1 = Module["_emscripten_bind_ImVec4_set_y_1"] = createExportWrapper("emscripten_bind_ImVec4_set_y_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_get_z_0 = Module["_emscripten_bind_ImVec4_get_z_0"] = createExportWrapper("emscripten_bind_ImVec4_get_z_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_set_z_1 = Module["_emscripten_bind_ImVec4_set_z_1"] = createExportWrapper("emscripten_bind_ImVec4_set_z_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_get_w_0 = Module["_emscripten_bind_ImVec4_get_w_0"] = createExportWrapper("emscripten_bind_ImVec4_get_w_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4_set_w_1 = Module["_emscripten_bind_ImVec4_set_w_1"] = createExportWrapper("emscripten_bind_ImVec4_set_w_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImVec4___destroy___0 = Module["_emscripten_bind_ImVec4___destroy___0"] = createExportWrapper("emscripten_bind_ImVec4___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_VecCmdBuffer_getData_1 = Module["_emscripten_bind_VecCmdBuffer_getData_1"] = createExportWrapper("emscripten_bind_VecCmdBuffer_getData_1");
/** @type {function(...*):?} */
var _emscripten_bind_VecCmdBuffer_size_0 = Module["_emscripten_bind_VecCmdBuffer_size_0"] = createExportWrapper("emscripten_bind_VecCmdBuffer_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_VecCmdBuffer___destroy___0 = Module["_emscripten_bind_VecCmdBuffer___destroy___0"] = createExportWrapper("emscripten_bind_VecCmdBuffer___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_VecIdxBuffer_size_0 = Module["_emscripten_bind_VecIdxBuffer_size_0"] = createExportWrapper("emscripten_bind_VecIdxBuffer_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_VecIdxBuffer___destroy___0 = Module["_emscripten_bind_VecIdxBuffer___destroy___0"] = createExportWrapper("emscripten_bind_VecIdxBuffer___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_VecVtxBuffer_size_0 = Module["_emscripten_bind_VecVtxBuffer_size_0"] = createExportWrapper("emscripten_bind_VecVtxBuffer_size_0");
/** @type {function(...*):?} */
var _emscripten_bind_VecVtxBuffer___destroy___0 = Module["_emscripten_bind_VecVtxBuffer___destroy___0"] = createExportWrapper("emscripten_bind_VecVtxBuffer___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_get_ClipRect_0 = Module["_emscripten_bind_ImDrawCmd_get_ClipRect_0"] = createExportWrapper("emscripten_bind_ImDrawCmd_get_ClipRect_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_set_ClipRect_1 = Module["_emscripten_bind_ImDrawCmd_set_ClipRect_1"] = createExportWrapper("emscripten_bind_ImDrawCmd_set_ClipRect_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_get_VtxOffset_0 = Module["_emscripten_bind_ImDrawCmd_get_VtxOffset_0"] = createExportWrapper("emscripten_bind_ImDrawCmd_get_VtxOffset_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_set_VtxOffset_1 = Module["_emscripten_bind_ImDrawCmd_set_VtxOffset_1"] = createExportWrapper("emscripten_bind_ImDrawCmd_set_VtxOffset_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_get_IdxOffset_0 = Module["_emscripten_bind_ImDrawCmd_get_IdxOffset_0"] = createExportWrapper("emscripten_bind_ImDrawCmd_get_IdxOffset_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_set_IdxOffset_1 = Module["_emscripten_bind_ImDrawCmd_set_IdxOffset_1"] = createExportWrapper("emscripten_bind_ImDrawCmd_set_IdxOffset_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_get_ElemCount_0 = Module["_emscripten_bind_ImDrawCmd_get_ElemCount_0"] = createExportWrapper("emscripten_bind_ImDrawCmd_get_ElemCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_set_ElemCount_1 = Module["_emscripten_bind_ImDrawCmd_set_ElemCount_1"] = createExportWrapper("emscripten_bind_ImDrawCmd_set_ElemCount_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_get_TextureId_0 = Module["_emscripten_bind_ImDrawCmd_get_TextureId_0"] = createExportWrapper("emscripten_bind_ImDrawCmd_get_TextureId_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd_set_TextureId_1 = Module["_emscripten_bind_ImDrawCmd_set_TextureId_1"] = createExportWrapper("emscripten_bind_ImDrawCmd_set_TextureId_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawCmd___destroy___0 = Module["_emscripten_bind_ImDrawCmd___destroy___0"] = createExportWrapper("emscripten_bind_ImDrawCmd___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_get_pos_0 = Module["_emscripten_bind_ImDrawVert_get_pos_0"] = createExportWrapper("emscripten_bind_ImDrawVert_get_pos_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_set_pos_1 = Module["_emscripten_bind_ImDrawVert_set_pos_1"] = createExportWrapper("emscripten_bind_ImDrawVert_set_pos_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_get_uv_0 = Module["_emscripten_bind_ImDrawVert_get_uv_0"] = createExportWrapper("emscripten_bind_ImDrawVert_get_uv_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_set_uv_1 = Module["_emscripten_bind_ImDrawVert_set_uv_1"] = createExportWrapper("emscripten_bind_ImDrawVert_set_uv_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_get_col_0 = Module["_emscripten_bind_ImDrawVert_get_col_0"] = createExportWrapper("emscripten_bind_ImDrawVert_get_col_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert_set_col_1 = Module["_emscripten_bind_ImDrawVert_set_col_1"] = createExportWrapper("emscripten_bind_ImDrawVert_set_col_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawVert___destroy___0 = Module["_emscripten_bind_ImDrawVert___destroy___0"] = createExportWrapper("emscripten_bind_ImDrawVert___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_CmdListsCount_0 = Module["_emscripten_bind_ImDrawData_get_CmdListsCount_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_CmdListsCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_CmdListsCount_1 = Module["_emscripten_bind_ImDrawData_set_CmdListsCount_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_CmdListsCount_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_TotalIdxCount_0 = Module["_emscripten_bind_ImDrawData_get_TotalIdxCount_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_TotalIdxCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_TotalIdxCount_1 = Module["_emscripten_bind_ImDrawData_set_TotalIdxCount_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_TotalIdxCount_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_TotalVtxCount_0 = Module["_emscripten_bind_ImDrawData_get_TotalVtxCount_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_TotalVtxCount_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_TotalVtxCount_1 = Module["_emscripten_bind_ImDrawData_set_TotalVtxCount_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_TotalVtxCount_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_CmdLists_1 = Module["_emscripten_bind_ImDrawData_get_CmdLists_1"] = createExportWrapper("emscripten_bind_ImDrawData_get_CmdLists_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_CmdLists_2 = Module["_emscripten_bind_ImDrawData_set_CmdLists_2"] = createExportWrapper("emscripten_bind_ImDrawData_set_CmdLists_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_DisplayPos_0 = Module["_emscripten_bind_ImDrawData_get_DisplayPos_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_DisplayPos_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_DisplayPos_1 = Module["_emscripten_bind_ImDrawData_set_DisplayPos_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_DisplayPos_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_DisplaySize_0 = Module["_emscripten_bind_ImDrawData_get_DisplaySize_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_DisplaySize_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_DisplaySize_1 = Module["_emscripten_bind_ImDrawData_set_DisplaySize_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_DisplaySize_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_get_FramebufferScale_0 = Module["_emscripten_bind_ImDrawData_get_FramebufferScale_0"] = createExportWrapper("emscripten_bind_ImDrawData_get_FramebufferScale_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData_set_FramebufferScale_1 = Module["_emscripten_bind_ImDrawData_set_FramebufferScale_1"] = createExportWrapper("emscripten_bind_ImDrawData_set_FramebufferScale_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawData___destroy___0 = Module["_emscripten_bind_ImDrawData___destroy___0"] = createExportWrapper("emscripten_bind_ImDrawData___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_get_CmdBuffer_0 = Module["_emscripten_bind_ImDrawList_get_CmdBuffer_0"] = createExportWrapper("emscripten_bind_ImDrawList_get_CmdBuffer_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_set_CmdBuffer_1 = Module["_emscripten_bind_ImDrawList_set_CmdBuffer_1"] = createExportWrapper("emscripten_bind_ImDrawList_set_CmdBuffer_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_get_IdxBuffer_0 = Module["_emscripten_bind_ImDrawList_get_IdxBuffer_0"] = createExportWrapper("emscripten_bind_ImDrawList_get_IdxBuffer_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_set_IdxBuffer_1 = Module["_emscripten_bind_ImDrawList_set_IdxBuffer_1"] = createExportWrapper("emscripten_bind_ImDrawList_set_IdxBuffer_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_get_VtxBuffer_0 = Module["_emscripten_bind_ImDrawList_get_VtxBuffer_0"] = createExportWrapper("emscripten_bind_ImDrawList_get_VtxBuffer_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList_set_VtxBuffer_1 = Module["_emscripten_bind_ImDrawList_set_VtxBuffer_1"] = createExportWrapper("emscripten_bind_ImDrawList_set_VtxBuffer_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawList___destroy___0 = Module["_emscripten_bind_ImDrawList___destroy___0"] = createExportWrapper("emscripten_bind_ImDrawList___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_AddMouseWheelEvent_2 = Module["_emscripten_bind_ImGuiIO_AddMouseWheelEvent_2"] = createExportWrapper("emscripten_bind_ImGuiIO_AddMouseWheelEvent_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_AddMouseButtonEvent_2 = Module["_emscripten_bind_ImGuiIO_AddMouseButtonEvent_2"] = createExportWrapper("emscripten_bind_ImGuiIO_AddMouseButtonEvent_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_AddMousePosEvent_2 = Module["_emscripten_bind_ImGuiIO_AddMousePosEvent_2"] = createExportWrapper("emscripten_bind_ImGuiIO_AddMousePosEvent_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_AddKeyEvent_2 = Module["_emscripten_bind_ImGuiIO_AddKeyEvent_2"] = createExportWrapper("emscripten_bind_ImGuiIO_AddKeyEvent_2");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_AddInputCharacter_1 = Module["_emscripten_bind_ImGuiIO_AddInputCharacter_1"] = createExportWrapper("emscripten_bind_ImGuiIO_AddInputCharacter_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_WantCaptureMouse_0 = Module["_emscripten_bind_ImGuiIO_get_WantCaptureMouse_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_WantCaptureMouse_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_WantCaptureMouse_1 = Module["_emscripten_bind_ImGuiIO_set_WantCaptureMouse_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_WantCaptureMouse_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_DisplaySize_0 = Module["_emscripten_bind_ImGuiIO_get_DisplaySize_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_DisplaySize_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_DisplaySize_1 = Module["_emscripten_bind_ImGuiIO_set_DisplaySize_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_DisplaySize_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_DisplayFramebufferScale_0 = Module["_emscripten_bind_ImGuiIO_get_DisplayFramebufferScale_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_DisplayFramebufferScale_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_DisplayFramebufferScale_1 = Module["_emscripten_bind_ImGuiIO_set_DisplayFramebufferScale_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_DisplayFramebufferScale_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_DeltaTime_0 = Module["_emscripten_bind_ImGuiIO_get_DeltaTime_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_DeltaTime_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_DeltaTime_1 = Module["_emscripten_bind_ImGuiIO_set_DeltaTime_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_DeltaTime_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_Fonts_0 = Module["_emscripten_bind_ImGuiIO_get_Fonts_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_Fonts_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_Fonts_1 = Module["_emscripten_bind_ImGuiIO_set_Fonts_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_Fonts_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_FontGlobalScale_0 = Module["_emscripten_bind_ImGuiIO_get_FontGlobalScale_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_FontGlobalScale_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_FontGlobalScale_1 = Module["_emscripten_bind_ImGuiIO_set_FontGlobalScale_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_FontGlobalScale_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_ConfigDockingNoSplit_0 = Module["_emscripten_bind_ImGuiIO_get_ConfigDockingNoSplit_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_ConfigDockingNoSplit_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_ConfigDockingNoSplit_1 = Module["_emscripten_bind_ImGuiIO_set_ConfigDockingNoSplit_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_ConfigDockingNoSplit_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_ConfigDockingWithShift_0 = Module["_emscripten_bind_ImGuiIO_get_ConfigDockingWithShift_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_ConfigDockingWithShift_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_ConfigDockingWithShift_1 = Module["_emscripten_bind_ImGuiIO_set_ConfigDockingWithShift_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_ConfigDockingWithShift_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_ConfigDockingAlwaysTabBar_0 = Module["_emscripten_bind_ImGuiIO_get_ConfigDockingAlwaysTabBar_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_ConfigDockingAlwaysTabBar_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_ConfigDockingAlwaysTabBar_1 = Module["_emscripten_bind_ImGuiIO_set_ConfigDockingAlwaysTabBar_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_ConfigDockingAlwaysTabBar_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_ConfigDockingTransparentPayload_0 = Module["_emscripten_bind_ImGuiIO_get_ConfigDockingTransparentPayload_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_ConfigDockingTransparentPayload_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_ConfigDockingTransparentPayload_1 = Module["_emscripten_bind_ImGuiIO_set_ConfigDockingTransparentPayload_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_ConfigDockingTransparentPayload_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_get_ConfigFlags_0 = Module["_emscripten_bind_ImGuiIO_get_ConfigFlags_0"] = createExportWrapper("emscripten_bind_ImGuiIO_get_ConfigFlags_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO_set_ConfigFlags_1 = Module["_emscripten_bind_ImGuiIO_set_ConfigFlags_1"] = createExportWrapper("emscripten_bind_ImGuiIO_set_ConfigFlags_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiIO___destroy___0 = Module["_emscripten_bind_ImGuiIO___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiIO___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImFontAtlas_get_TexID_0 = Module["_emscripten_bind_ImFontAtlas_get_TexID_0"] = createExportWrapper("emscripten_bind_ImFontAtlas_get_TexID_0");
/** @type {function(...*):?} */
var _emscripten_bind_ImFontAtlas_set_TexID_1 = Module["_emscripten_bind_ImFontAtlas_set_TexID_1"] = createExportWrapper("emscripten_bind_ImFontAtlas_set_TexID_1");
/** @type {function(...*):?} */
var _emscripten_bind_ImFontAtlas___destroy___0 = Module["_emscripten_bind_ImFontAtlas___destroy___0"] = createExportWrapper("emscripten_bind_ImFontAtlas___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImFont___destroy___0 = Module["_emscripten_bind_ImFont___destroy___0"] = createExportWrapper("emscripten_bind_ImFont___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiStyle___destroy___0 = Module["_emscripten_bind_ImGuiStyle___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiStyle___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiViewport___destroy___0 = Module["_emscripten_bind_ImGuiViewport___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiViewport___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiTableSortSpecs___destroy___0 = Module["_emscripten_bind_ImGuiTableSortSpecs___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiTableSortSpecs___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiWindowClass___destroy___0 = Module["_emscripten_bind_ImGuiWindowClass___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiWindowClass___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiPayload___destroy___0 = Module["_emscripten_bind_ImGuiPayload___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiPayload___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImDrawListSharedData___destroy___0 = Module["_emscripten_bind_ImDrawListSharedData___destroy___0"] = createExportWrapper("emscripten_bind_ImDrawListSharedData___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiStorage___destroy___0 = Module["_emscripten_bind_ImGuiStorage___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiStorage___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_ImGuiPlatformIO___destroy___0 = Module["_emscripten_bind_ImGuiPlatformIO___destroy___0"] = createExportWrapper("emscripten_bind_ImGuiPlatformIO___destroy___0");
/** @type {function(...*):?} */
var _emscripten_enum_ImGuiKey_ImGuiKey_None = Module["_emscripten_enum_ImGuiKey_ImGuiKey_None"] = createExportWrapper("emscripten_enum_ImGuiKey_ImGuiKey_None");
/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");
/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");
/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");
/** @type {function(...*):?} */
var ___errno_location = createExportWrapper("__errno_location");
/** @type {function(...*):?} */
var _emscripten_stack_init = function() {
  return (_emscripten_stack_init = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = function() {
  return (_emscripten_stack_get_free = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_base = function() {
  return (_emscripten_stack_get_base = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = function() {
  return (_emscripten_stack_get_end = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = createExportWrapper("stackSave");
/** @type {function(...*):?} */
var stackRestore = createExportWrapper("stackRestore");
/** @type {function(...*):?} */
var stackAlloc = createExportWrapper("stackAlloc");
/** @type {function(...*):?} */
var _emscripten_stack_get_current = function() {
  return (_emscripten_stack_get_current = Module["asm"]["emscripten_stack_get_current"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
var ___start_em_js = Module['___start_em_js'] = 188976;
var ___stop_em_js = Module['___stop_em_js'] = 189074;

// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module["UTF8ToString"] = UTF8ToString;
var missingLibrarySymbols = [
  'zeroMemory',
  'stringToNewUTF8',
  'exitJS',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'getHostByName',
  'getRandomDevice',
  'traverseStack',
  'convertPCtoSourceLocation',
  'readEmAsmArgs',
  'jstoi_q',
  'jstoi_s',
  'getExecutableName',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'handleException',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'safeSetTimeout',
  'asmjsMangle',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'handleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'getCFunc',
  'ccall',
  'cwrap',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'allocateUTF8',
  'allocateUTF8OnStack',
  'writeStringToMemory',
  'writeArrayToMemory',
  'writeAsciiToMemory',
  'getSocketFromFD',
  'getSocketAddress',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'demangle',
  'demangleAll',
  'jsStackTrace',
  'stackTrace',
  'getEnvStrings',
  'checkWasiClock',
  'createDyncallWrapper',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'newNativePromise',
  'getPromise',
  'ExceptionInfo',
  'exception_addRef',
  'exception_decRef',
  'setMainLoop',
  'heapObjectForWebGLType',
  'heapAccessShiftForWebGLHeap',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'emscriptenWebGLGetTexPixelData',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  'writeGLArray',
  'SDL_unicode',
  'SDL_ttfContext',
  'SDL_audio',
  'GLFW_Window',
  'runAndAbortIfError',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'UTF8ArrayToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'addRunDependency',
  'removeRunDependency',
  'FS_createFolder',
  'FS_createPath',
  'FS_createDataFile',
  'FS_createPreloadedFile',
  'FS_createLazyFile',
  'FS_createLink',
  'FS_createDevice',
  'FS_unlink',
  'out',
  'err',
  'callMain',
  'abort',
  'keepRuntimeAlive',
  'wasmMemory',
  'stackAlloc',
  'stackSave',
  'stackRestore',
  'getTempRet0',
  'setTempRet0',
  'writeStackCookie',
  'checkStackCookie',
  'ptrToString',
  'getHeapMax',
  'emscripten_realloc_buffer',
  'ENV',
  'ERRNO_CODES',
  'ERRNO_MESSAGES',
  'setErrNo',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'UNWIND_CACHE',
  'readEmAsmArgsArray',
  'convertI32PairToI53Checked',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'intArrayFromString',
  'UTF16Decoder',
  'SYSCALLS',
  'JSEvents',
  'specialHTMLTargets',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'ExitStatus',
  'flush_NO_FILESYSTEM',
  'dlopenMissingError',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'wget',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'GL',
  'AL',
  'SDL',
  'SDL_gfx',
  'GLUT',
  'EGL',
  'GLFW',
  'GLEW',
  'IDBStore',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

/** @type {function(Array=)} */
function run() {

  if (runDependencies > 0) {
    return;
  }

    stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    flush_NO_FILESYSTEM();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js
// include: D:\Dev\Projects\java\jDear-imgui\imgui\imgui-cpp\imgui-cpp\build\emscripten\glue.js

// Bindings utilities

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (ensureCache.needed) {
      // clear the temps
      for (var i = 0; i < ensureCache.temps.length; i++) {
        Module['_free'](ensureCache.temps[i]);
      }
      ensureCache.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](ensureCache.buffer);
      ensureCache.buffer = 0;
      ensureCache.size += ensureCache.needed;
      // clean up
      ensureCache.needed = 0;
    }
    if (!ensureCache.buffer) { // happens first time, or when we need to grow
      ensureCache.size += 128; // heuristic, avoid many small grow events
      ensureCache.buffer = Module['_malloc'](ensureCache.size);
      assert(ensureCache.buffer);
    }
    ensureCache.pos = 0;
  },
  alloc: function(array, view) {
    assert(ensureCache.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (ensureCache.pos + len >= ensureCache.size) {
      // we failed to allocate in the buffer, ensureCache time around :(
      assert(len > 0); // null terminator, at least
      ensureCache.needed += len;
      ret = Module['_malloc'](len);
      ensureCache.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = ensureCache.buffer + ensureCache.pos;
      ensureCache.pos += len;
    }
    return ret;
  },
  copy: function(array, view, offset) {
    offset >>>= 0;
    var bytes = view.BYTES_PER_ELEMENT;
    switch (bytes) {
      case 2: offset >>>= 1; break;
      case 4: offset >>>= 2; break;
      case 8: offset >>>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[offset + i] = array[i];
    }
  },
};

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureString(value) {
  if (typeof value === 'string') {
    var intArray = intArrayFromString(value);
    var offset = ensureCache.alloc(intArray, HEAP8);
    ensureCache.copy(intArray, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt8(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP8);
    ensureCache.copy(value, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt16(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP16);
    ensureCache.copy(value, HEAP16, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP32);
    ensureCache.copy(value, HEAP32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF32);
    ensureCache.copy(value, HEAPF32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat64(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF64);
    ensureCache.copy(value, HEAPF64, offset);
    return offset;
  }
  return value;
}

// VoidPtr
/** @suppress {undefinedVars, duplicate} @this{Object} */function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
// Im
/** @suppress {undefinedVars, duplicate} @this{Object} */function Im() { throw "cannot construct a Im, no constructor in IDL" }
Im.prototype = Object.create(WrapperObject.prototype);
Im.prototype.constructor = Im;
Im.prototype.__class__ = Im;
Im.__cache__ = {};
Module['Im'] = Im;

Im.prototype['CreateContext'] = Im.prototype.CreateContext = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_CreateContext_0(self), ImGuiContext);
};;

Im.prototype['DestroyContext'] = Im.prototype.DestroyContext = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ctx) {
  var self = this.ptr;
  if (ctx && typeof ctx === 'object') ctx = ctx.ptr;
  if (ctx === undefined) { _emscripten_bind_Im_DestroyContext_0(self);  return }
  _emscripten_bind_Im_DestroyContext_1(self, ctx);
};;

Im.prototype['GetCurrentContext'] = Im.prototype.GetCurrentContext = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetCurrentContext_0(self), ImGuiContext);
};;

Im.prototype['SetCurrentContext'] = Im.prototype.SetCurrentContext = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ctx) {
  var self = this.ptr;
  if (ctx && typeof ctx === 'object') ctx = ctx.ptr;
  _emscripten_bind_Im_SetCurrentContext_1(self, ctx);
};;

Im.prototype['GetIO'] = Im.prototype.GetIO = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetIO_0(self), ImGuiIO);
};;

Im.prototype['GetStyle'] = Im.prototype.GetStyle = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetStyle_0(self), ImGuiStyle);
};;

Im.prototype['NewFrame'] = Im.prototype.NewFrame = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_NewFrame_0(self);
};;

Im.prototype['EndFrame'] = Im.prototype.EndFrame = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndFrame_0(self);
};;

Im.prototype['Render'] = Im.prototype.Render = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_Render_0(self);
};;

Im.prototype['GetDrawData'] = Im.prototype.GetDrawData = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetDrawData_0(self), ImDrawData);
};;

Im.prototype['ShowDemoWindow'] = Im.prototype.ShowDemoWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(p_open) {
  var self = this.ptr;
  ensureCache.prepare();
  if (p_open === undefined) { _emscripten_bind_Im_ShowDemoWindow_0(self);  return }
  _emscripten_bind_Im_ShowDemoWindow_1(self, p_open);
};;

Im.prototype['ShowMetricsWindow'] = Im.prototype.ShowMetricsWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(p_open) {
  var self = this.ptr;
  ensureCache.prepare();
  if (p_open === undefined) { _emscripten_bind_Im_ShowMetricsWindow_0(self);  return }
  _emscripten_bind_Im_ShowMetricsWindow_1(self, p_open);
};;

Im.prototype['ShowDebugLogWindow'] = Im.prototype.ShowDebugLogWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(p_open) {
  var self = this.ptr;
  ensureCache.prepare();
  if (p_open === undefined) { _emscripten_bind_Im_ShowDebugLogWindow_0(self);  return }
  _emscripten_bind_Im_ShowDebugLogWindow_1(self, p_open);
};;

Im.prototype['ShowStackToolWindow'] = Im.prototype.ShowStackToolWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(p_open) {
  var self = this.ptr;
  ensureCache.prepare();
  if (p_open === undefined) { _emscripten_bind_Im_ShowStackToolWindow_0(self);  return }
  _emscripten_bind_Im_ShowStackToolWindow_1(self, p_open);
};;

Im.prototype['ShowAboutWindow'] = Im.prototype.ShowAboutWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(p_open) {
  var self = this.ptr;
  ensureCache.prepare();
  if (p_open === undefined) { _emscripten_bind_Im_ShowAboutWindow_0(self);  return }
  _emscripten_bind_Im_ShowAboutWindow_1(self, p_open);
};;

Im.prototype['ShowStyleEditor'] = Im.prototype.ShowStyleEditor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ref) {
  var self = this.ptr;
  if (ref && typeof ref === 'object') ref = ref.ptr;
  if (ref === undefined) { _emscripten_bind_Im_ShowStyleEditor_0(self);  return }
  _emscripten_bind_Im_ShowStyleEditor_1(self, ref);
};;

Im.prototype['ShowStyleSelector'] = Im.prototype.ShowStyleSelector = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  _emscripten_bind_Im_ShowStyleSelector_1(self, label);
};;

Im.prototype['ShowFontSelector'] = Im.prototype.ShowFontSelector = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  _emscripten_bind_Im_ShowFontSelector_1(self, label);
};;

Im.prototype['ShowUserGuide'] = Im.prototype.ShowUserGuide = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_ShowUserGuide_0(self);
};;

Im.prototype['GetVersion'] = Im.prototype.GetVersion = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return UTF8ToString(_emscripten_bind_Im_GetVersion_0(self));
};;

Im.prototype['StyleColorsDark'] = Im.prototype.StyleColorsDark = /** @suppress {undefinedVars, duplicate} @this{Object} */function(dst) {
  var self = this.ptr;
  if (dst && typeof dst === 'object') dst = dst.ptr;
  if (dst === undefined) { _emscripten_bind_Im_StyleColorsDark_0(self);  return }
  _emscripten_bind_Im_StyleColorsDark_1(self, dst);
};;

Im.prototype['StyleColorsLight'] = Im.prototype.StyleColorsLight = /** @suppress {undefinedVars, duplicate} @this{Object} */function(dst) {
  var self = this.ptr;
  if (dst && typeof dst === 'object') dst = dst.ptr;
  if (dst === undefined) { _emscripten_bind_Im_StyleColorsLight_0(self);  return }
  _emscripten_bind_Im_StyleColorsLight_1(self, dst);
};;

Im.prototype['StyleColorsClassic'] = Im.prototype.StyleColorsClassic = /** @suppress {undefinedVars, duplicate} @this{Object} */function(dst) {
  var self = this.ptr;
  if (dst && typeof dst === 'object') dst = dst.ptr;
  if (dst === undefined) { _emscripten_bind_Im_StyleColorsClassic_0(self);  return }
  _emscripten_bind_Im_StyleColorsClassic_1(self, dst);
};;

Im.prototype['Begin'] = Im.prototype.Begin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  return !!(_emscripten_bind_Im_Begin_1(self, name));
};;

Im.prototype['End'] = Im.prototype.End = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_End_0(self);
};;

Im.prototype['BeginChild'] = Im.prototype.BeginChild = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, size, border, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (size && typeof size === 'object') size = size.ptr;
  if (border && typeof border === 'object') border = border.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size === undefined) { return !!(_emscripten_bind_Im_BeginChild_1(self, str_id)) }
  if (border === undefined) { return !!(_emscripten_bind_Im_BeginChild_2(self, str_id, size)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginChild_3(self, str_id, size, border)) }
  return !!(_emscripten_bind_Im_BeginChild_4(self, str_id, size, border, flags));
};;

Im.prototype['BeginChild2'] = Im.prototype.BeginChild2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(id, size, border, flags) {
  var self = this.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (border && typeof border === 'object') border = border.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size === undefined) { return !!(_emscripten_bind_Im_BeginChild2_1(self, id)) }
  if (border === undefined) { return !!(_emscripten_bind_Im_BeginChild2_2(self, id, size)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginChild2_3(self, id, size, border)) }
  return !!(_emscripten_bind_Im_BeginChild2_4(self, id, size, border, flags));
};;

Im.prototype['EndChild'] = Im.prototype.EndChild = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndChild_0(self);
};;

Im.prototype['IsWindowAppearing'] = Im.prototype.IsWindowAppearing = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsWindowAppearing_0(self));
};;

Im.prototype['IsWindowCollapsed'] = Im.prototype.IsWindowCollapsed = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsWindowCollapsed_0(self));
};;

Im.prototype['IsWindowFocused'] = Im.prototype.IsWindowFocused = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_IsWindowFocused_0(self)) }
  return !!(_emscripten_bind_Im_IsWindowFocused_1(self, flags));
};;

Im.prototype['IsWindowHovered'] = Im.prototype.IsWindowHovered = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_IsWindowHovered_0(self)) }
  return !!(_emscripten_bind_Im_IsWindowHovered_1(self, flags));
};;

Im.prototype['GetWindowDrawList'] = Im.prototype.GetWindowDrawList = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowDrawList_0(self), ImDrawList);
};;

Im.prototype['GetWindowDpiScale'] = Im.prototype.GetWindowDpiScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetWindowDpiScale_0(self);
};;

Im.prototype['GetWindowPos'] = Im.prototype.GetWindowPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowPos_0(self), ImVec2);
};;

Im.prototype['GetWindowSize'] = Im.prototype.GetWindowSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowSize_0(self), ImVec2);
};;

Im.prototype['GetWindowWidth'] = Im.prototype.GetWindowWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetWindowWidth_0(self);
};;

Im.prototype['GetWindowHeight'] = Im.prototype.GetWindowHeight = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetWindowHeight_0(self);
};;

Im.prototype['GetWindowViewport'] = Im.prototype.GetWindowViewport = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowViewport_0(self), ImGuiViewport);
};;

Im.prototype['SetNextWindowPos'] = Im.prototype.SetNextWindowPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pos, cond, pivot) {
  var self = this.ptr;
  if (pos && typeof pos === 'object') pos = pos.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (pivot && typeof pivot === 'object') pivot = pivot.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetNextWindowPos_1(self, pos);  return }
  if (pivot === undefined) { _emscripten_bind_Im_SetNextWindowPos_2(self, pos, cond);  return }
  _emscripten_bind_Im_SetNextWindowPos_3(self, pos, cond, pivot);
};;

Im.prototype['SetNextWindowSize'] = Im.prototype.SetNextWindowSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size, cond) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetNextWindowSize_1(self, size);  return }
  _emscripten_bind_Im_SetNextWindowSize_2(self, size, cond);
};;

Im.prototype['SetNextWindowSizeConstraints'] = Im.prototype.SetNextWindowSizeConstraints = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size_min, size_max) {
  var self = this.ptr;
  if (size_min && typeof size_min === 'object') size_min = size_min.ptr;
  if (size_max && typeof size_max === 'object') size_max = size_max.ptr;
  _emscripten_bind_Im_SetNextWindowSizeConstraints_2(self, size_min, size_max);
};;

Im.prototype['SetNextWindowContentSize'] = Im.prototype.SetNextWindowContentSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_Im_SetNextWindowContentSize_1(self, size);
};;

Im.prototype['SetNextWindowCollapsed'] = Im.prototype.SetNextWindowCollapsed = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collapsed, cond) {
  var self = this.ptr;
  if (collapsed && typeof collapsed === 'object') collapsed = collapsed.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetNextWindowCollapsed_1(self, collapsed);  return }
  _emscripten_bind_Im_SetNextWindowCollapsed_2(self, collapsed, cond);
};;

Im.prototype['SetNextWindowFocus'] = Im.prototype.SetNextWindowFocus = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_SetNextWindowFocus_0(self);
};;

Im.prototype['SetNextWindowScroll'] = Im.prototype.SetNextWindowScroll = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scroll) {
  var self = this.ptr;
  if (scroll && typeof scroll === 'object') scroll = scroll.ptr;
  _emscripten_bind_Im_SetNextWindowScroll_1(self, scroll);
};;

Im.prototype['SetNextWindowBgAlpha'] = Im.prototype.SetNextWindowBgAlpha = /** @suppress {undefinedVars, duplicate} @this{Object} */function(alpha) {
  var self = this.ptr;
  if (alpha && typeof alpha === 'object') alpha = alpha.ptr;
  _emscripten_bind_Im_SetNextWindowBgAlpha_1(self, alpha);
};;

Im.prototype['SetNextWindowViewport'] = Im.prototype.SetNextWindowViewport = /** @suppress {undefinedVars, duplicate} @this{Object} */function(viewport_id) {
  var self = this.ptr;
  if (viewport_id && typeof viewport_id === 'object') viewport_id = viewport_id.ptr;
  _emscripten_bind_Im_SetNextWindowViewport_1(self, viewport_id);
};;

Im.prototype['SetWindowPos'] = Im.prototype.SetWindowPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pos, cond) {
  var self = this.ptr;
  if (pos && typeof pos === 'object') pos = pos.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowPos_1(self, pos);  return }
  _emscripten_bind_Im_SetWindowPos_2(self, pos, cond);
};;

Im.prototype['SetWindowSize'] = Im.prototype.SetWindowSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size, cond) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowSize_1(self, size);  return }
  _emscripten_bind_Im_SetWindowSize_2(self, size, cond);
};;

Im.prototype['SetWindowCollapsed'] = Im.prototype.SetWindowCollapsed = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collapsed, cond) {
  var self = this.ptr;
  if (collapsed && typeof collapsed === 'object') collapsed = collapsed.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowCollapsed_1(self, collapsed);  return }
  _emscripten_bind_Im_SetWindowCollapsed_2(self, collapsed, cond);
};;

Im.prototype['SetWindowFocus'] = Im.prototype.SetWindowFocus = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_SetWindowFocus_0(self);
};;

Im.prototype['SetWindowFontScale'] = Im.prototype.SetWindowFontScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scale) {
  var self = this.ptr;
  if (scale && typeof scale === 'object') scale = scale.ptr;
  _emscripten_bind_Im_SetWindowFontScale_1(self, scale);
};;

Im.prototype['SetWindowPos2'] = Im.prototype.SetWindowPos2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name, pos, cond) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  if (pos && typeof pos === 'object') pos = pos.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowPos2_2(self, name, pos);  return }
  _emscripten_bind_Im_SetWindowPos2_3(self, name, pos, cond);
};;

Im.prototype['SetWindowSize2'] = Im.prototype.SetWindowSize2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name, size, cond) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  if (size && typeof size === 'object') size = size.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowSize2_2(self, name, size);  return }
  _emscripten_bind_Im_SetWindowSize2_3(self, name, size, cond);
};;

Im.prototype['SetWindowCollapsed2'] = Im.prototype.SetWindowCollapsed2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name, collapsed, cond) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  if (collapsed && typeof collapsed === 'object') collapsed = collapsed.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetWindowCollapsed2_2(self, name, collapsed);  return }
  _emscripten_bind_Im_SetWindowCollapsed2_3(self, name, collapsed, cond);
};;

Im.prototype['SetWindowFocus2'] = Im.prototype.SetWindowFocus2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  _emscripten_bind_Im_SetWindowFocus2_1(self, name);
};;

Im.prototype['GetContentRegionAvail'] = Im.prototype.GetContentRegionAvail = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetContentRegionAvail_0(self), ImVec2);
};;

Im.prototype['GetContentRegionMax'] = Im.prototype.GetContentRegionMax = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetContentRegionMax_0(self), ImVec2);
};;

Im.prototype['GetWindowContentRegionMin'] = Im.prototype.GetWindowContentRegionMin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowContentRegionMin_0(self), ImVec2);
};;

Im.prototype['GetWindowContentRegionMax'] = Im.prototype.GetWindowContentRegionMax = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetWindowContentRegionMax_0(self), ImVec2);
};;

Im.prototype['GetScrollX'] = Im.prototype.GetScrollX = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetScrollX_0(self);
};;

Im.prototype['GetScrollY'] = Im.prototype.GetScrollY = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetScrollY_0(self);
};;

Im.prototype['SetScrollX'] = Im.prototype.SetScrollX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scroll_x) {
  var self = this.ptr;
  if (scroll_x && typeof scroll_x === 'object') scroll_x = scroll_x.ptr;
  _emscripten_bind_Im_SetScrollX_1(self, scroll_x);
};;

Im.prototype['SetScrollY'] = Im.prototype.SetScrollY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scroll_y) {
  var self = this.ptr;
  if (scroll_y && typeof scroll_y === 'object') scroll_y = scroll_y.ptr;
  _emscripten_bind_Im_SetScrollY_1(self, scroll_y);
};;

Im.prototype['GetScrollMaxX'] = Im.prototype.GetScrollMaxX = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetScrollMaxX_0(self);
};;

Im.prototype['GetScrollMaxY'] = Im.prototype.GetScrollMaxY = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetScrollMaxY_0(self);
};;

Im.prototype['SetScrollHereX'] = Im.prototype.SetScrollHereX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(center_x_ratio) {
  var self = this.ptr;
  if (center_x_ratio && typeof center_x_ratio === 'object') center_x_ratio = center_x_ratio.ptr;
  if (center_x_ratio === undefined) { _emscripten_bind_Im_SetScrollHereX_0(self);  return }
  _emscripten_bind_Im_SetScrollHereX_1(self, center_x_ratio);
};;

Im.prototype['SetScrollHereY'] = Im.prototype.SetScrollHereY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(center_y_ratio) {
  var self = this.ptr;
  if (center_y_ratio && typeof center_y_ratio === 'object') center_y_ratio = center_y_ratio.ptr;
  if (center_y_ratio === undefined) { _emscripten_bind_Im_SetScrollHereY_0(self);  return }
  _emscripten_bind_Im_SetScrollHereY_1(self, center_y_ratio);
};;

Im.prototype['SetScrollFromPosX'] = Im.prototype.SetScrollFromPosX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(local_x, center_x_ratio) {
  var self = this.ptr;
  if (local_x && typeof local_x === 'object') local_x = local_x.ptr;
  if (center_x_ratio && typeof center_x_ratio === 'object') center_x_ratio = center_x_ratio.ptr;
  if (center_x_ratio === undefined) { _emscripten_bind_Im_SetScrollFromPosX_1(self, local_x);  return }
  _emscripten_bind_Im_SetScrollFromPosX_2(self, local_x, center_x_ratio);
};;

Im.prototype['SetScrollFromPosY'] = Im.prototype.SetScrollFromPosY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(local_y, center_y_ratio) {
  var self = this.ptr;
  if (local_y && typeof local_y === 'object') local_y = local_y.ptr;
  if (center_y_ratio && typeof center_y_ratio === 'object') center_y_ratio = center_y_ratio.ptr;
  if (center_y_ratio === undefined) { _emscripten_bind_Im_SetScrollFromPosY_1(self, local_y);  return }
  _emscripten_bind_Im_SetScrollFromPosY_2(self, local_y, center_y_ratio);
};;

Im.prototype['PushFont'] = Im.prototype.PushFont = /** @suppress {undefinedVars, duplicate} @this{Object} */function(font) {
  var self = this.ptr;
  if (font && typeof font === 'object') font = font.ptr;
  _emscripten_bind_Im_PushFont_1(self, font);
};;

Im.prototype['PopFont'] = Im.prototype.PopFont = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopFont_0(self);
};;

Im.prototype['PushStyleColor'] = Im.prototype.PushStyleColor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx, col) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  _emscripten_bind_Im_PushStyleColor_2(self, idx, col);
};;

Im.prototype['PushStyleColor2'] = Im.prototype.PushStyleColor2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx, col) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  _emscripten_bind_Im_PushStyleColor2_2(self, idx, col);
};;

Im.prototype['PopStyleColor'] = Im.prototype.PopStyleColor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(count) {
  var self = this.ptr;
  if (count && typeof count === 'object') count = count.ptr;
  if (count === undefined) { _emscripten_bind_Im_PopStyleColor_0(self);  return }
  _emscripten_bind_Im_PopStyleColor_1(self, count);
};;

Im.prototype['PushStyleVar'] = Im.prototype.PushStyleVar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx, val) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  if (val && typeof val === 'object') val = val.ptr;
  _emscripten_bind_Im_PushStyleVar_2(self, idx, val);
};;

Im.prototype['PushStyleVar2'] = Im.prototype.PushStyleVar2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx, val) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  if (val && typeof val === 'object') val = val.ptr;
  _emscripten_bind_Im_PushStyleVar2_2(self, idx, val);
};;

Im.prototype['PopStyleVar'] = Im.prototype.PopStyleVar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(count) {
  var self = this.ptr;
  if (count && typeof count === 'object') count = count.ptr;
  if (count === undefined) { _emscripten_bind_Im_PopStyleVar_0(self);  return }
  _emscripten_bind_Im_PopStyleVar_1(self, count);
};;

Im.prototype['PushAllowKeyboardFocus'] = Im.prototype.PushAllowKeyboardFocus = /** @suppress {undefinedVars, duplicate} @this{Object} */function(allow_keyboard_focus) {
  var self = this.ptr;
  if (allow_keyboard_focus && typeof allow_keyboard_focus === 'object') allow_keyboard_focus = allow_keyboard_focus.ptr;
  _emscripten_bind_Im_PushAllowKeyboardFocus_1(self, allow_keyboard_focus);
};;

Im.prototype['PopAllowKeyboardFocus'] = Im.prototype.PopAllowKeyboardFocus = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopAllowKeyboardFocus_0(self);
};;

Im.prototype['PushButtonRepeat'] = Im.prototype.PushButtonRepeat = /** @suppress {undefinedVars, duplicate} @this{Object} */function(repeat) {
  var self = this.ptr;
  if (repeat && typeof repeat === 'object') repeat = repeat.ptr;
  _emscripten_bind_Im_PushButtonRepeat_1(self, repeat);
};;

Im.prototype['PopButtonRepeat'] = Im.prototype.PopButtonRepeat = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopButtonRepeat_0(self);
};;

Im.prototype['PushItemWidth'] = Im.prototype.PushItemWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function(item_width) {
  var self = this.ptr;
  if (item_width && typeof item_width === 'object') item_width = item_width.ptr;
  _emscripten_bind_Im_PushItemWidth_1(self, item_width);
};;

Im.prototype['PopItemWidth'] = Im.prototype.PopItemWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopItemWidth_0(self);
};;

Im.prototype['SetNextItemWidth'] = Im.prototype.SetNextItemWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function(item_width) {
  var self = this.ptr;
  if (item_width && typeof item_width === 'object') item_width = item_width.ptr;
  _emscripten_bind_Im_SetNextItemWidth_1(self, item_width);
};;

Im.prototype['CalcItemWidth'] = Im.prototype.CalcItemWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_CalcItemWidth_0(self);
};;

Im.prototype['PushTextWrapPos'] = Im.prototype.PushTextWrapPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(wrap_local_pos_x) {
  var self = this.ptr;
  if (wrap_local_pos_x && typeof wrap_local_pos_x === 'object') wrap_local_pos_x = wrap_local_pos_x.ptr;
  if (wrap_local_pos_x === undefined) { _emscripten_bind_Im_PushTextWrapPos_0(self);  return }
  _emscripten_bind_Im_PushTextWrapPos_1(self, wrap_local_pos_x);
};;

Im.prototype['PopTextWrapPos'] = Im.prototype.PopTextWrapPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopTextWrapPos_0(self);
};;

Im.prototype['GetFont'] = Im.prototype.GetFont = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetFont_0(self), ImFont);
};;

Im.prototype['GetFontSize'] = Im.prototype.GetFontSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetFontSize_0(self);
};;

Im.prototype['GetFontTexUvWhitePixel'] = Im.prototype.GetFontTexUvWhitePixel = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetFontTexUvWhitePixel_0(self), ImVec2);
};;

Im.prototype['GetColorU32'] = Im.prototype.GetColorU32 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx, alpha_mul) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  if (alpha_mul && typeof alpha_mul === 'object') alpha_mul = alpha_mul.ptr;
  if (alpha_mul === undefined) { return _emscripten_bind_Im_GetColorU32_1(self, idx) }
  return _emscripten_bind_Im_GetColorU32_2(self, idx, alpha_mul);
};;

Im.prototype['GetColorU322'] = Im.prototype.GetColorU322 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col) {
  var self = this.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  return _emscripten_bind_Im_GetColorU322_1(self, col);
};;

Im.prototype['GetColorU323'] = Im.prototype.GetColorU323 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col) {
  var self = this.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  return _emscripten_bind_Im_GetColorU323_1(self, col);
};;

Im.prototype['GetStyleColorVec4'] = Im.prototype.GetStyleColorVec4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  return wrapPointer(_emscripten_bind_Im_GetStyleColorVec4_1(self, idx), ImVec4);
};;

Im.prototype['Separator'] = Im.prototype.Separator = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_Separator_0(self);
};;

Im.prototype['SameLine'] = Im.prototype.SameLine = /** @suppress {undefinedVars, duplicate} @this{Object} */function(offset_from_start_x, spacing) {
  var self = this.ptr;
  if (offset_from_start_x && typeof offset_from_start_x === 'object') offset_from_start_x = offset_from_start_x.ptr;
  if (spacing && typeof spacing === 'object') spacing = spacing.ptr;
  if (offset_from_start_x === undefined) { _emscripten_bind_Im_SameLine_0(self);  return }
  if (spacing === undefined) { _emscripten_bind_Im_SameLine_1(self, offset_from_start_x);  return }
  _emscripten_bind_Im_SameLine_2(self, offset_from_start_x, spacing);
};;

Im.prototype['NewLine'] = Im.prototype.NewLine = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_NewLine_0(self);
};;

Im.prototype['Spacing'] = Im.prototype.Spacing = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_Spacing_0(self);
};;

Im.prototype['Dummy'] = Im.prototype.Dummy = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_Im_Dummy_1(self, size);
};;

Im.prototype['Indent'] = Im.prototype.Indent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(indent_w) {
  var self = this.ptr;
  if (indent_w && typeof indent_w === 'object') indent_w = indent_w.ptr;
  if (indent_w === undefined) { _emscripten_bind_Im_Indent_0(self);  return }
  _emscripten_bind_Im_Indent_1(self, indent_w);
};;

Im.prototype['Unindent'] = Im.prototype.Unindent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(indent_w) {
  var self = this.ptr;
  if (indent_w && typeof indent_w === 'object') indent_w = indent_w.ptr;
  if (indent_w === undefined) { _emscripten_bind_Im_Unindent_0(self);  return }
  _emscripten_bind_Im_Unindent_1(self, indent_w);
};;

Im.prototype['BeginGroup'] = Im.prototype.BeginGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_BeginGroup_0(self);
};;

Im.prototype['EndGroup'] = Im.prototype.EndGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndGroup_0(self);
};;

Im.prototype['GetCursorPos'] = Im.prototype.GetCursorPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetCursorPos_0(self), ImVec2);
};;

Im.prototype['GetCursorPosX'] = Im.prototype.GetCursorPosX = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetCursorPosX_0(self);
};;

Im.prototype['GetCursorPosY'] = Im.prototype.GetCursorPosY = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetCursorPosY_0(self);
};;

Im.prototype['SetCursorPos'] = Im.prototype.SetCursorPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(local_pos) {
  var self = this.ptr;
  if (local_pos && typeof local_pos === 'object') local_pos = local_pos.ptr;
  _emscripten_bind_Im_SetCursorPos_1(self, local_pos);
};;

Im.prototype['SetCursorPosX'] = Im.prototype.SetCursorPosX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(local_x) {
  var self = this.ptr;
  if (local_x && typeof local_x === 'object') local_x = local_x.ptr;
  _emscripten_bind_Im_SetCursorPosX_1(self, local_x);
};;

Im.prototype['SetCursorPosY'] = Im.prototype.SetCursorPosY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(local_y) {
  var self = this.ptr;
  if (local_y && typeof local_y === 'object') local_y = local_y.ptr;
  _emscripten_bind_Im_SetCursorPosY_1(self, local_y);
};;

Im.prototype['GetCursorStartPos'] = Im.prototype.GetCursorStartPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetCursorStartPos_0(self), ImVec2);
};;

Im.prototype['GetCursorScreenPos'] = Im.prototype.GetCursorScreenPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetCursorScreenPos_0(self), ImVec2);
};;

Im.prototype['SetCursorScreenPos'] = Im.prototype.SetCursorScreenPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pos) {
  var self = this.ptr;
  if (pos && typeof pos === 'object') pos = pos.ptr;
  _emscripten_bind_Im_SetCursorScreenPos_1(self, pos);
};;

Im.prototype['AlignTextToFramePadding'] = Im.prototype.AlignTextToFramePadding = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_AlignTextToFramePadding_0(self);
};;

Im.prototype['GetTextLineHeight'] = Im.prototype.GetTextLineHeight = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetTextLineHeight_0(self);
};;

Im.prototype['GetTextLineHeightWithSpacing'] = Im.prototype.GetTextLineHeightWithSpacing = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetTextLineHeightWithSpacing_0(self);
};;

Im.prototype['GetFrameHeight'] = Im.prototype.GetFrameHeight = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetFrameHeight_0(self);
};;

Im.prototype['GetFrameHeightWithSpacing'] = Im.prototype.GetFrameHeightWithSpacing = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetFrameHeightWithSpacing_0(self);
};;

Im.prototype['PushID'] = Im.prototype.PushID = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  _emscripten_bind_Im_PushID_1(self, str_id);
};;

Im.prototype['PushID2'] = Im.prototype.PushID2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id_begin, str_id_end) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id_begin && typeof str_id_begin === 'object') str_id_begin = str_id_begin.ptr;
  else str_id_begin = ensureString(str_id_begin);
  if (str_id_end && typeof str_id_end === 'object') str_id_end = str_id_end.ptr;
  else str_id_end = ensureString(str_id_end);
  _emscripten_bind_Im_PushID2_2(self, str_id_begin, str_id_end);
};;

Im.prototype['PushID3'] = Im.prototype.PushID3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id) {
  var self = this.ptr;
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  _emscripten_bind_Im_PushID3_1(self, ptr_id);
};;

Im.prototype['PushID4'] = Im.prototype.PushID4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(int_id) {
  var self = this.ptr;
  if (int_id && typeof int_id === 'object') int_id = int_id.ptr;
  _emscripten_bind_Im_PushID4_1(self, int_id);
};;

Im.prototype['PopID'] = Im.prototype.PopID = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopID_0(self);
};;

Im.prototype['GetID'] = Im.prototype.GetID = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  return _emscripten_bind_Im_GetID_1(self, str_id);
};;

Im.prototype['GetID2'] = Im.prototype.GetID2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id_begin, str_id_end) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id_begin && typeof str_id_begin === 'object') str_id_begin = str_id_begin.ptr;
  else str_id_begin = ensureString(str_id_begin);
  if (str_id_end && typeof str_id_end === 'object') str_id_end = str_id_end.ptr;
  else str_id_end = ensureString(str_id_end);
  return _emscripten_bind_Im_GetID2_2(self, str_id_begin, str_id_end);
};;

Im.prototype['GetID3'] = Im.prototype.GetID3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id) {
  var self = this.ptr;
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  return _emscripten_bind_Im_GetID3_1(self, ptr_id);
};;

Im.prototype['TextUnformatted'] = Im.prototype.TextUnformatted = /** @suppress {undefinedVars, duplicate} @this{Object} */function(text, text_end) {
  var self = this.ptr;
  ensureCache.prepare();
  if (text && typeof text === 'object') text = text.ptr;
  else text = ensureString(text);
  if (text_end && typeof text_end === 'object') text_end = text_end.ptr;
  else text_end = ensureString(text_end);
  if (text_end === undefined) { _emscripten_bind_Im_TextUnformatted_1(self, text);  return }
  _emscripten_bind_Im_TextUnformatted_2(self, text, text_end);
};;

Im.prototype['Text'] = Im.prototype.Text = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_Text_1(self, fmt);
};;

Im.prototype['TextV'] = Im.prototype.TextV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_TextV_2(self, fmt, args);
};;

Im.prototype['TextColored'] = Im.prototype.TextColored = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (col && typeof col === 'object') col = col.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_TextColored_2(self, col, fmt);
};;

Im.prototype['TextColoredV'] = Im.prototype.TextColoredV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (col && typeof col === 'object') col = col.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_TextColoredV_3(self, col, fmt, args);
};;

Im.prototype['TextDisabled'] = Im.prototype.TextDisabled = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_TextDisabled_1(self, fmt);
};;

Im.prototype['TextDisabledV'] = Im.prototype.TextDisabledV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_TextDisabledV_2(self, fmt, args);
};;

Im.prototype['TextWrapped'] = Im.prototype.TextWrapped = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_TextWrapped_1(self, fmt);
};;

Im.prototype['TextWrappedV'] = Im.prototype.TextWrappedV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_TextWrappedV_2(self, fmt, args);
};;

Im.prototype['LabelText'] = Im.prototype.LabelText = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_LabelText_2(self, label, fmt);
};;

Im.prototype['LabelTextV'] = Im.prototype.LabelTextV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_LabelTextV_3(self, label, fmt, args);
};;

Im.prototype['BulletText'] = Im.prototype.BulletText = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_BulletText_1(self, fmt);
};;

Im.prototype['BulletTextV'] = Im.prototype.BulletTextV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_BulletTextV_2(self, fmt, args);
};;

Im.prototype['Button'] = Im.prototype.Button = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (size && typeof size === 'object') size = size.ptr;
  if (size === undefined) { return !!(_emscripten_bind_Im_Button_1(self, label)) }
  return !!(_emscripten_bind_Im_Button_2(self, label, size));
};;

Im.prototype['SmallButton'] = Im.prototype.SmallButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  return !!(_emscripten_bind_Im_SmallButton_1(self, label));
};;

Im.prototype['InvisibleButton'] = Im.prototype.InvisibleButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, size, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (size && typeof size === 'object') size = size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InvisibleButton_2(self, str_id, size)) }
  return !!(_emscripten_bind_Im_InvisibleButton_3(self, str_id, size, flags));
};;

Im.prototype['ArrowButton'] = Im.prototype.ArrowButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, dir) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (dir && typeof dir === 'object') dir = dir.ptr;
  return !!(_emscripten_bind_Im_ArrowButton_2(self, str_id, dir));
};;

Im.prototype['Checkbox'] = Im.prototype.Checkbox = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  return !!(_emscripten_bind_Im_Checkbox_2(self, label, v));
};;

Im.prototype['CheckboxFlags'] = Im.prototype.CheckboxFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags, flags_value) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof flags == 'object') { flags = ensureInt32(flags); }
  if (flags_value && typeof flags_value === 'object') flags_value = flags_value.ptr;
  return !!(_emscripten_bind_Im_CheckboxFlags_3(self, label, flags, flags_value));
};;

Im.prototype['CheckboxFlags2'] = Im.prototype.CheckboxFlags2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags, flags_value) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof flags == 'object') { flags = ensureInt32(flags); }
  if (flags_value && typeof flags_value === 'object') flags_value = flags_value.ptr;
  return !!(_emscripten_bind_Im_CheckboxFlags2_3(self, label, flags, flags_value));
};;

Im.prototype['RadioButton'] = Im.prototype.RadioButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, active) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (active && typeof active === 'object') active = active.ptr;
  return !!(_emscripten_bind_Im_RadioButton_2(self, label, active));
};;

Im.prototype['RadioButton2'] = Im.prototype.RadioButton2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_button) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_button && typeof v_button === 'object') v_button = v_button.ptr;
  return !!(_emscripten_bind_Im_RadioButton2_3(self, label, v, v_button));
};;

Im.prototype['ProgressBar'] = Im.prototype.ProgressBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fraction, size_arg, overlay) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fraction && typeof fraction === 'object') fraction = fraction.ptr;
  if (size_arg && typeof size_arg === 'object') size_arg = size_arg.ptr;
  if (overlay && typeof overlay === 'object') overlay = overlay.ptr;
  else overlay = ensureString(overlay);
  if (size_arg === undefined) { _emscripten_bind_Im_ProgressBar_1(self, fraction);  return }
  if (overlay === undefined) { _emscripten_bind_Im_ProgressBar_2(self, fraction, size_arg);  return }
  _emscripten_bind_Im_ProgressBar_3(self, fraction, size_arg, overlay);
};;

Im.prototype['Bullet'] = Im.prototype.Bullet = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_Bullet_0(self);
};;

Im.prototype['Image'] = Im.prototype.Image = /** @suppress {undefinedVars, duplicate} @this{Object} */function(user_texture_id, size, uv0, uv1, tint_col, border_col) {
  var self = this.ptr;
  if (user_texture_id && typeof user_texture_id === 'object') user_texture_id = user_texture_id.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (uv0 && typeof uv0 === 'object') uv0 = uv0.ptr;
  if (uv1 && typeof uv1 === 'object') uv1 = uv1.ptr;
  if (tint_col && typeof tint_col === 'object') tint_col = tint_col.ptr;
  if (border_col && typeof border_col === 'object') border_col = border_col.ptr;
  if (uv0 === undefined) { _emscripten_bind_Im_Image_2(self, user_texture_id, size);  return }
  if (uv1 === undefined) { _emscripten_bind_Im_Image_3(self, user_texture_id, size, uv0);  return }
  if (tint_col === undefined) { _emscripten_bind_Im_Image_4(self, user_texture_id, size, uv0, uv1);  return }
  if (border_col === undefined) { _emscripten_bind_Im_Image_5(self, user_texture_id, size, uv0, uv1, tint_col);  return }
  _emscripten_bind_Im_Image_6(self, user_texture_id, size, uv0, uv1, tint_col, border_col);
};;

Im.prototype['ImageButton'] = Im.prototype.ImageButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, user_texture_id, size, uv0, uv1, bg_col, tint_col) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (user_texture_id && typeof user_texture_id === 'object') user_texture_id = user_texture_id.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (uv0 && typeof uv0 === 'object') uv0 = uv0.ptr;
  if (uv1 && typeof uv1 === 'object') uv1 = uv1.ptr;
  if (bg_col && typeof bg_col === 'object') bg_col = bg_col.ptr;
  if (tint_col && typeof tint_col === 'object') tint_col = tint_col.ptr;
  if (uv0 === undefined) { return !!(_emscripten_bind_Im_ImageButton_3(self, str_id, user_texture_id, size)) }
  if (uv1 === undefined) { return !!(_emscripten_bind_Im_ImageButton_4(self, str_id, user_texture_id, size, uv0)) }
  if (bg_col === undefined) { return !!(_emscripten_bind_Im_ImageButton_5(self, str_id, user_texture_id, size, uv0, uv1)) }
  if (tint_col === undefined) { return !!(_emscripten_bind_Im_ImageButton_6(self, str_id, user_texture_id, size, uv0, uv1, bg_col)) }
  return !!(_emscripten_bind_Im_ImageButton_7(self, str_id, user_texture_id, size, uv0, uv1, bg_col, tint_col));
};;

Im.prototype['BeginCombo'] = Im.prototype.BeginCombo = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, preview_value, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (preview_value && typeof preview_value === 'object') preview_value = preview_value.ptr;
  else preview_value = ensureString(preview_value);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginCombo_2(self, label, preview_value)) }
  return !!(_emscripten_bind_Im_BeginCombo_3(self, label, preview_value, flags));
};;

Im.prototype['EndCombo'] = Im.prototype.EndCombo = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndCombo_0(self);
};;

Im.prototype['Combo'] = Im.prototype.Combo = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, current_item, items_separated_by_zeros, popup_max_height_in_items) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof current_item == 'object') { current_item = ensureInt32(current_item); }
  if (items_separated_by_zeros && typeof items_separated_by_zeros === 'object') items_separated_by_zeros = items_separated_by_zeros.ptr;
  else items_separated_by_zeros = ensureString(items_separated_by_zeros);
  if (popup_max_height_in_items && typeof popup_max_height_in_items === 'object') popup_max_height_in_items = popup_max_height_in_items.ptr;
  if (popup_max_height_in_items === undefined) { return !!(_emscripten_bind_Im_Combo_3(self, label, current_item, items_separated_by_zeros)) }
  return !!(_emscripten_bind_Im_Combo_4(self, label, current_item, items_separated_by_zeros, popup_max_height_in_items));
};;

Im.prototype['DragFloat'] = Im.prototype.DragFloat = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragFloat_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragFloat_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragFloat_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragFloat_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragFloat_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragFloat_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragFloat2'] = Im.prototype.DragFloat2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragFloat2_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragFloat2_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragFloat2_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragFloat2_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragFloat2_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragFloat2_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragFloat3'] = Im.prototype.DragFloat3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragFloat3_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragFloat3_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragFloat3_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragFloat3_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragFloat3_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragFloat3_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragFloat4'] = Im.prototype.DragFloat4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragFloat4_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragFloat4_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragFloat4_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragFloat4_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragFloat4_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragFloat4_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragFloatRange2'] = Im.prototype.DragFloatRange2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v_current_min == 'object') { v_current_min = ensureFloat32(v_current_min); }
  if (typeof v_current_max == 'object') { v_current_max = ensureFloat32(v_current_max); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (format_max && typeof format_max === 'object') format_max = format_max.ptr;
  else format_max = ensureString(format_max);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_3(self, label, v_current_min, v_current_max)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_4(self, label, v_current_min, v_current_max, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_5(self, label, v_current_min, v_current_max, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_6(self, label, v_current_min, v_current_max, v_speed, v_min, v_max)) }
  if (format_max === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_7(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragFloatRange2_8(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max)) }
  return !!(_emscripten_bind_Im_DragFloatRange2_9(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max, flags));
};;

Im.prototype['DragInt'] = Im.prototype.DragInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragInt_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragInt_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragInt_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragInt_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragInt_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragInt_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragInt2'] = Im.prototype.DragInt2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragInt2_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragInt2_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragInt2_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragInt2_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragInt2_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragInt2_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragInt3'] = Im.prototype.DragInt3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragInt3_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragInt3_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragInt3_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragInt3_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragInt3_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragInt3_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragInt4'] = Im.prototype.DragInt4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_speed, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragInt4_2(self, label, v)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragInt4_3(self, label, v, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragInt4_4(self, label, v, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragInt4_5(self, label, v, v_speed, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragInt4_6(self, label, v, v_speed, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_DragInt4_7(self, label, v, v_speed, v_min, v_max, format, flags));
};;

Im.prototype['DragIntRange2'] = Im.prototype.DragIntRange2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v_current_min == 'object') { v_current_min = ensureInt32(v_current_min); }
  if (typeof v_current_max == 'object') { v_current_max = ensureInt32(v_current_max); }
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (format_max && typeof format_max === 'object') format_max = format_max.ptr;
  else format_max = ensureString(format_max);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_3(self, label, v_current_min, v_current_max)) }
  if (v_min === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_4(self, label, v_current_min, v_current_max, v_speed)) }
  if (v_max === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_5(self, label, v_current_min, v_current_max, v_speed, v_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_6(self, label, v_current_min, v_current_max, v_speed, v_min, v_max)) }
  if (format_max === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_7(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragIntRange2_8(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max)) }
  return !!(_emscripten_bind_Im_DragIntRange2_9(self, label, v_current_min, v_current_max, v_speed, v_min, v_max, format, format_max, flags));
};;

Im.prototype['DragScalar'] = Im.prototype.DragScalar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, v_speed, p_min, p_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (p_min && typeof p_min === 'object') p_min = p_min.ptr;
  if (p_max && typeof p_max === 'object') p_max = p_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragScalar_3(self, label, data_type, p_data)) }
  if (p_min === undefined) { return !!(_emscripten_bind_Im_DragScalar_4(self, label, data_type, p_data, v_speed)) }
  if (p_max === undefined) { return !!(_emscripten_bind_Im_DragScalar_5(self, label, data_type, p_data, v_speed, p_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragScalar_6(self, label, data_type, p_data, v_speed, p_min, p_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragScalar_7(self, label, data_type, p_data, v_speed, p_min, p_max, format)) }
  return !!(_emscripten_bind_Im_DragScalar_8(self, label, data_type, p_data, v_speed, p_min, p_max, format, flags));
};;

Im.prototype['DragScalarN'] = Im.prototype.DragScalarN = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, components, v_speed, p_min, p_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (components && typeof components === 'object') components = components.ptr;
  if (v_speed && typeof v_speed === 'object') v_speed = v_speed.ptr;
  if (p_min && typeof p_min === 'object') p_min = p_min.ptr;
  if (p_max && typeof p_max === 'object') p_max = p_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_speed === undefined) { return !!(_emscripten_bind_Im_DragScalarN_4(self, label, data_type, p_data, components)) }
  if (p_min === undefined) { return !!(_emscripten_bind_Im_DragScalarN_5(self, label, data_type, p_data, components, v_speed)) }
  if (p_max === undefined) { return !!(_emscripten_bind_Im_DragScalarN_6(self, label, data_type, p_data, components, v_speed, p_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_DragScalarN_7(self, label, data_type, p_data, components, v_speed, p_min, p_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_DragScalarN_8(self, label, data_type, p_data, components, v_speed, p_min, p_max, format)) }
  return !!(_emscripten_bind_Im_DragScalarN_9(self, label, data_type, p_data, components, v_speed, p_min, p_max, format, flags));
};;

Im.prototype['SliderFloat'] = Im.prototype.SliderFloat = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderFloat_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderFloat_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderFloat_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderFloat2'] = Im.prototype.SliderFloat2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderFloat2_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderFloat2_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderFloat2_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderFloat3'] = Im.prototype.SliderFloat3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderFloat3_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderFloat3_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderFloat3_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderFloat4'] = Im.prototype.SliderFloat4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderFloat4_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderFloat4_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderFloat4_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderAngle'] = Im.prototype.SliderAngle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v_rad, v_degrees_min, v_degrees_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v_rad == 'object') { v_rad = ensureFloat32(v_rad); }
  if (v_degrees_min && typeof v_degrees_min === 'object') v_degrees_min = v_degrees_min.ptr;
  if (v_degrees_max && typeof v_degrees_max === 'object') v_degrees_max = v_degrees_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (v_degrees_min === undefined) { return !!(_emscripten_bind_Im_SliderAngle_2(self, label, v_rad)) }
  if (v_degrees_max === undefined) { return !!(_emscripten_bind_Im_SliderAngle_3(self, label, v_rad, v_degrees_min)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderAngle_4(self, label, v_rad, v_degrees_min, v_degrees_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderAngle_5(self, label, v_rad, v_degrees_min, v_degrees_max, format)) }
  return !!(_emscripten_bind_Im_SliderAngle_6(self, label, v_rad, v_degrees_min, v_degrees_max, format, flags));
};;

Im.prototype['SliderInt'] = Im.prototype.SliderInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderInt_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderInt_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderInt_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderInt2'] = Im.prototype.SliderInt2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderInt2_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderInt2_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderInt2_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderInt3'] = Im.prototype.SliderInt3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderInt3_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderInt3_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderInt3_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderInt4'] = Im.prototype.SliderInt4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderInt4_4(self, label, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderInt4_5(self, label, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_SliderInt4_6(self, label, v, v_min, v_max, format, flags));
};;

Im.prototype['SliderScalar'] = Im.prototype.SliderScalar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, p_min, p_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (p_min && typeof p_min === 'object') p_min = p_min.ptr;
  if (p_max && typeof p_max === 'object') p_max = p_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderScalar_5(self, label, data_type, p_data, p_min, p_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderScalar_6(self, label, data_type, p_data, p_min, p_max, format)) }
  return !!(_emscripten_bind_Im_SliderScalar_7(self, label, data_type, p_data, p_min, p_max, format, flags));
};;

Im.prototype['SliderScalarN'] = Im.prototype.SliderScalarN = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, components, p_min, p_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (components && typeof components === 'object') components = components.ptr;
  if (p_min && typeof p_min === 'object') p_min = p_min.ptr;
  if (p_max && typeof p_max === 'object') p_max = p_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_SliderScalarN_6(self, label, data_type, p_data, components, p_min, p_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_SliderScalarN_7(self, label, data_type, p_data, components, p_min, p_max, format)) }
  return !!(_emscripten_bind_Im_SliderScalarN_8(self, label, data_type, p_data, components, p_min, p_max, format, flags));
};;

Im.prototype['VSliderFloat'] = Im.prototype.VSliderFloat = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, size, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (size && typeof size === 'object') size = size.ptr;
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_VSliderFloat_5(self, label, size, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_VSliderFloat_6(self, label, size, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_VSliderFloat_7(self, label, size, v, v_min, v_max, format, flags));
};;

Im.prototype['VSliderInt'] = Im.prototype.VSliderInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, size, v, v_min, v_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (size && typeof size === 'object') size = size.ptr;
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (v_min && typeof v_min === 'object') v_min = v_min.ptr;
  if (v_max && typeof v_max === 'object') v_max = v_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_VSliderInt_5(self, label, size, v, v_min, v_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_VSliderInt_6(self, label, size, v, v_min, v_max, format)) }
  return !!(_emscripten_bind_Im_VSliderInt_7(self, label, size, v, v_min, v_max, format, flags));
};;

Im.prototype['VSliderScalar'] = Im.prototype.VSliderScalar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, size, data_type, p_data, p_min, p_max, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (size && typeof size === 'object') size = size.ptr;
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (p_min && typeof p_min === 'object') p_min = p_min.ptr;
  if (p_max && typeof p_max === 'object') p_max = p_max.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_VSliderScalar_6(self, label, size, data_type, p_data, p_min, p_max)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_VSliderScalar_7(self, label, size, data_type, p_data, p_min, p_max, format)) }
  return !!(_emscripten_bind_Im_VSliderScalar_8(self, label, size, data_type, p_data, p_min, p_max, format, flags));
};;

Im.prototype['InputText'] = Im.prototype.InputText = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, buf, buf_size, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof buf == 'object') { buf = ensureInt8(buf); }
  if (buf_size && typeof buf_size === 'object') buf_size = buf_size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputText_3(self, label, buf, buf_size)) }
  return !!(_emscripten_bind_Im_InputText_4(self, label, buf, buf_size, flags));
};;

Im.prototype['InputTextMultiline'] = Im.prototype.InputTextMultiline = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, buf, buf_size, size, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof buf == 'object') { buf = ensureInt8(buf); }
  if (buf_size && typeof buf_size === 'object') buf_size = buf_size.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size === undefined) { return !!(_emscripten_bind_Im_InputTextMultiline_3(self, label, buf, buf_size)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputTextMultiline_4(self, label, buf, buf_size, size)) }
  return !!(_emscripten_bind_Im_InputTextMultiline_5(self, label, buf, buf_size, size, flags));
};;

Im.prototype['InputTextWithHint'] = Im.prototype.InputTextWithHint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, hint, buf, buf_size, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (hint && typeof hint === 'object') hint = hint.ptr;
  else hint = ensureString(hint);
  if (typeof buf == 'object') { buf = ensureInt8(buf); }
  if (buf_size && typeof buf_size === 'object') buf_size = buf_size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputTextWithHint_4(self, label, hint, buf, buf_size)) }
  return !!(_emscripten_bind_Im_InputTextWithHint_5(self, label, hint, buf, buf_size, flags));
};;

Im.prototype['InputFloat'] = Im.prototype.InputFloat = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, step, step_fast, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (step && typeof step === 'object') step = step.ptr;
  if (step_fast && typeof step_fast === 'object') step_fast = step_fast.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (step === undefined) { return !!(_emscripten_bind_Im_InputFloat_2(self, label, v)) }
  if (step_fast === undefined) { return !!(_emscripten_bind_Im_InputFloat_3(self, label, v, step)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_InputFloat_4(self, label, v, step, step_fast)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputFloat_5(self, label, v, step, step_fast, format)) }
  return !!(_emscripten_bind_Im_InputFloat_6(self, label, v, step, step_fast, format, flags));
};;

Im.prototype['InputFloat2'] = Im.prototype.InputFloat2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_InputFloat2_2(self, label, v)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputFloat2_3(self, label, v, format)) }
  return !!(_emscripten_bind_Im_InputFloat2_4(self, label, v, format, flags));
};;

Im.prototype['InputFloat3'] = Im.prototype.InputFloat3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_InputFloat3_2(self, label, v)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputFloat3_3(self, label, v, format)) }
  return !!(_emscripten_bind_Im_InputFloat3_4(self, label, v, format, flags));
};;

Im.prototype['InputFloat4'] = Im.prototype.InputFloat4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat32(v); }
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (format === undefined) { return !!(_emscripten_bind_Im_InputFloat4_2(self, label, v)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputFloat4_3(self, label, v, format)) }
  return !!(_emscripten_bind_Im_InputFloat4_4(self, label, v, format, flags));
};;

Im.prototype['InputInt'] = Im.prototype.InputInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, step, step_fast, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (step && typeof step === 'object') step = step.ptr;
  if (step_fast && typeof step_fast === 'object') step_fast = step_fast.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (step === undefined) { return !!(_emscripten_bind_Im_InputInt_2(self, label, v)) }
  if (step_fast === undefined) { return !!(_emscripten_bind_Im_InputInt_3(self, label, v, step)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputInt_4(self, label, v, step, step_fast)) }
  return !!(_emscripten_bind_Im_InputInt_5(self, label, v, step, step_fast, flags));
};;

Im.prototype['InputInt2'] = Im.prototype.InputInt2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputInt2_2(self, label, v)) }
  return !!(_emscripten_bind_Im_InputInt2_3(self, label, v, flags));
};;

Im.prototype['InputInt3'] = Im.prototype.InputInt3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputInt3_2(self, label, v)) }
  return !!(_emscripten_bind_Im_InputInt3_3(self, label, v, flags));
};;

Im.prototype['InputInt4'] = Im.prototype.InputInt4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureInt32(v); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputInt4_2(self, label, v)) }
  return !!(_emscripten_bind_Im_InputInt4_3(self, label, v, flags));
};;

Im.prototype['InputDouble'] = Im.prototype.InputDouble = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, v, step, step_fast, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof v == 'object') { v = ensureFloat64(v); }
  if (step && typeof step === 'object') step = step.ptr;
  if (step_fast && typeof step_fast === 'object') step_fast = step_fast.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (step === undefined) { return !!(_emscripten_bind_Im_InputDouble_2(self, label, v)) }
  if (step_fast === undefined) { return !!(_emscripten_bind_Im_InputDouble_3(self, label, v, step)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_InputDouble_4(self, label, v, step, step_fast)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputDouble_5(self, label, v, step, step_fast, format)) }
  return !!(_emscripten_bind_Im_InputDouble_6(self, label, v, step, step_fast, format, flags));
};;

Im.prototype['InputScalar'] = Im.prototype.InputScalar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, p_step, p_step_fast, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (p_step && typeof p_step === 'object') p_step = p_step.ptr;
  if (p_step_fast && typeof p_step_fast === 'object') p_step_fast = p_step_fast.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (p_step === undefined) { return !!(_emscripten_bind_Im_InputScalar_3(self, label, data_type, p_data)) }
  if (p_step_fast === undefined) { return !!(_emscripten_bind_Im_InputScalar_4(self, label, data_type, p_data, p_step)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_InputScalar_5(self, label, data_type, p_data, p_step, p_step_fast)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputScalar_6(self, label, data_type, p_data, p_step, p_step_fast, format)) }
  return !!(_emscripten_bind_Im_InputScalar_7(self, label, data_type, p_data, p_step, p_step_fast, format, flags));
};;

Im.prototype['InputScalarN'] = Im.prototype.InputScalarN = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, data_type, p_data, components, p_step, p_step_fast, format, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (data_type && typeof data_type === 'object') data_type = data_type.ptr;
  if (p_data && typeof p_data === 'object') p_data = p_data.ptr;
  if (components && typeof components === 'object') components = components.ptr;
  if (p_step && typeof p_step === 'object') p_step = p_step.ptr;
  if (p_step_fast && typeof p_step_fast === 'object') p_step_fast = p_step_fast.ptr;
  if (format && typeof format === 'object') format = format.ptr;
  else format = ensureString(format);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (p_step === undefined) { return !!(_emscripten_bind_Im_InputScalarN_4(self, label, data_type, p_data, components)) }
  if (p_step_fast === undefined) { return !!(_emscripten_bind_Im_InputScalarN_5(self, label, data_type, p_data, components, p_step)) }
  if (format === undefined) { return !!(_emscripten_bind_Im_InputScalarN_6(self, label, data_type, p_data, components, p_step, p_step_fast)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_InputScalarN_7(self, label, data_type, p_data, components, p_step, p_step_fast, format)) }
  return !!(_emscripten_bind_Im_InputScalarN_8(self, label, data_type, p_data, components, p_step, p_step_fast, format, flags));
};;

Im.prototype['ColorEdit3'] = Im.prototype.ColorEdit3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, col, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof col == 'object') { col = ensureFloat32(col); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_ColorEdit3_2(self, label, col)) }
  return !!(_emscripten_bind_Im_ColorEdit3_3(self, label, col, flags));
};;

Im.prototype['ColorEdit4'] = Im.prototype.ColorEdit4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, col, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof col == 'object') { col = ensureFloat32(col); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_ColorEdit4_2(self, label, col)) }
  return !!(_emscripten_bind_Im_ColorEdit4_3(self, label, col, flags));
};;

Im.prototype['ColorPicker3'] = Im.prototype.ColorPicker3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, col, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof col == 'object') { col = ensureFloat32(col); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_ColorPicker3_2(self, label, col)) }
  return !!(_emscripten_bind_Im_ColorPicker3_3(self, label, col, flags));
};;

Im.prototype['ColorPicker4'] = Im.prototype.ColorPicker4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, col, flags, ref_col) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof col == 'object') { col = ensureFloat32(col); }
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (typeof ref_col == 'object') { ref_col = ensureFloat32(ref_col); }
  if (flags === undefined) { return !!(_emscripten_bind_Im_ColorPicker4_2(self, label, col)) }
  if (ref_col === undefined) { return !!(_emscripten_bind_Im_ColorPicker4_3(self, label, col, flags)) }
  return !!(_emscripten_bind_Im_ColorPicker4_4(self, label, col, flags, ref_col));
};;

Im.prototype['ColorButton'] = Im.prototype.ColorButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(desc_id, col, flags, size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (desc_id && typeof desc_id === 'object') desc_id = desc_id.ptr;
  else desc_id = ensureString(desc_id);
  if (col && typeof col === 'object') col = col.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_ColorButton_2(self, desc_id, col)) }
  if (size === undefined) { return !!(_emscripten_bind_Im_ColorButton_3(self, desc_id, col, flags)) }
  return !!(_emscripten_bind_Im_ColorButton_4(self, desc_id, col, flags, size));
};;

Im.prototype['SetColorEditOptions'] = Im.prototype.SetColorEditOptions = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _emscripten_bind_Im_SetColorEditOptions_1(self, flags);
};;

Im.prototype['TreeNode'] = Im.prototype.TreeNode = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  return !!(_emscripten_bind_Im_TreeNode_1(self, label));
};;

Im.prototype['TreeNode2'] = Im.prototype.TreeNode2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  return !!(_emscripten_bind_Im_TreeNode2_2(self, str_id, fmt));
};;

Im.prototype['TreeNode3'] = Im.prototype.TreeNode3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  return !!(_emscripten_bind_Im_TreeNode3_2(self, ptr_id, fmt));
};;

Im.prototype['TreeNodeV'] = Im.prototype.TreeNodeV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  return !!(_emscripten_bind_Im_TreeNodeV_3(self, str_id, fmt, args));
};;

Im.prototype['TreeNodeV2'] = Im.prototype.TreeNodeV2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  return !!(_emscripten_bind_Im_TreeNodeV2_3(self, ptr_id, fmt, args));
};;

Im.prototype['TreeNodeEx'] = Im.prototype.TreeNodeEx = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_TreeNodeEx_1(self, label)) }
  return !!(_emscripten_bind_Im_TreeNodeEx_2(self, label, flags));
};;

Im.prototype['TreeNodeEx2'] = Im.prototype.TreeNodeEx2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, flags, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  return !!(_emscripten_bind_Im_TreeNodeEx2_3(self, str_id, flags, fmt));
};;

Im.prototype['TreeNodeEx3'] = Im.prototype.TreeNodeEx3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id, flags, fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  return !!(_emscripten_bind_Im_TreeNodeEx3_3(self, ptr_id, flags, fmt));
};;

Im.prototype['TreeNodeExV'] = Im.prototype.TreeNodeExV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, flags, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  return !!(_emscripten_bind_Im_TreeNodeExV_4(self, str_id, flags, fmt, args));
};;

Im.prototype['TreeNodeExV2'] = Im.prototype.TreeNodeExV2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id, flags, fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  return !!(_emscripten_bind_Im_TreeNodeExV2_4(self, ptr_id, flags, fmt, args));
};;

Im.prototype['TreePush'] = Im.prototype.TreePush = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  _emscripten_bind_Im_TreePush_1(self, str_id);
};;

Im.prototype['TreePush2'] = Im.prototype.TreePush2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr_id) {
  var self = this.ptr;
  if (ptr_id && typeof ptr_id === 'object') ptr_id = ptr_id.ptr;
  _emscripten_bind_Im_TreePush2_1(self, ptr_id);
};;

Im.prototype['TreePop'] = Im.prototype.TreePop = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_TreePop_0(self);
};;

Im.prototype['GetTreeNodeToLabelSpacing'] = Im.prototype.GetTreeNodeToLabelSpacing = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetTreeNodeToLabelSpacing_0(self);
};;

Im.prototype['CollapsingHeader'] = Im.prototype.CollapsingHeader = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_CollapsingHeader_1(self, label)) }
  return !!(_emscripten_bind_Im_CollapsingHeader_2(self, label, flags));
};;

Im.prototype['CollapsingHeader2'] = Im.prototype.CollapsingHeader2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, p_visible, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_CollapsingHeader2_2(self, label, p_visible)) }
  return !!(_emscripten_bind_Im_CollapsingHeader2_3(self, label, p_visible, flags));
};;

Im.prototype['SetNextItemOpen'] = Im.prototype.SetNextItemOpen = /** @suppress {undefinedVars, duplicate} @this{Object} */function(is_open, cond) {
  var self = this.ptr;
  if (is_open && typeof is_open === 'object') is_open = is_open.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetNextItemOpen_1(self, is_open);  return }
  _emscripten_bind_Im_SetNextItemOpen_2(self, is_open, cond);
};;

Im.prototype['Selectable'] = Im.prototype.Selectable = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, selected, flags, size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (selected && typeof selected === 'object') selected = selected.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (selected === undefined) { return !!(_emscripten_bind_Im_Selectable_1(self, label)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_Selectable_2(self, label, selected)) }
  if (size === undefined) { return !!(_emscripten_bind_Im_Selectable_3(self, label, selected, flags)) }
  return !!(_emscripten_bind_Im_Selectable_4(self, label, selected, flags, size));
};;

Im.prototype['Selectable2'] = Im.prototype.Selectable2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, p_selected, flags, size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_Selectable2_2(self, label, p_selected)) }
  if (size === undefined) { return !!(_emscripten_bind_Im_Selectable2_3(self, label, p_selected, flags)) }
  return !!(_emscripten_bind_Im_Selectable2_4(self, label, p_selected, flags, size));
};;

Im.prototype['BeginListBox'] = Im.prototype.BeginListBox = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (size && typeof size === 'object') size = size.ptr;
  if (size === undefined) { return !!(_emscripten_bind_Im_BeginListBox_1(self, label)) }
  return !!(_emscripten_bind_Im_BeginListBox_2(self, label, size));
};;

Im.prototype['EndListBox'] = Im.prototype.EndListBox = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndListBox_0(self);
};;

Im.prototype['ListBox'] = Im.prototype.ListBox = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, current_item, items, items_count, height_in_items) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof current_item == 'object') { current_item = ensureInt32(current_item); }
  if (items_count && typeof items_count === 'object') items_count = items_count.ptr;
  if (height_in_items && typeof height_in_items === 'object') height_in_items = height_in_items.ptr;
  if (height_in_items === undefined) { return !!(_emscripten_bind_Im_ListBox_4(self, label, current_item, items, items_count)) }
  return !!(_emscripten_bind_Im_ListBox_5(self, label, current_item, items, items_count, height_in_items));
};;

Im.prototype['PlotLines'] = Im.prototype.PlotLines = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, values, values_count, values_offset, overlay_text, scale_min, scale_max) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof values == 'object') { values = ensureFloat32(values); }
  if (values_count && typeof values_count === 'object') values_count = values_count.ptr;
  if (values_offset && typeof values_offset === 'object') values_offset = values_offset.ptr;
  if (overlay_text && typeof overlay_text === 'object') overlay_text = overlay_text.ptr;
  else overlay_text = ensureString(overlay_text);
  if (scale_min && typeof scale_min === 'object') scale_min = scale_min.ptr;
  if (scale_max && typeof scale_max === 'object') scale_max = scale_max.ptr;
  if (values_offset === undefined) { _emscripten_bind_Im_PlotLines_3(self, label, values, values_count);  return }
  if (overlay_text === undefined) { _emscripten_bind_Im_PlotLines_4(self, label, values, values_count, values_offset);  return }
  if (scale_min === undefined) { _emscripten_bind_Im_PlotLines_5(self, label, values, values_count, values_offset, overlay_text);  return }
  if (scale_max === undefined) { _emscripten_bind_Im_PlotLines_6(self, label, values, values_count, values_offset, overlay_text, scale_min);  return }
  _emscripten_bind_Im_PlotLines_7(self, label, values, values_count, values_offset, overlay_text, scale_min, scale_max);
};;

Im.prototype['PlotHistogram'] = Im.prototype.PlotHistogram = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, values, values_count, values_offset, overlay_text, scale_min, scale_max) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (typeof values == 'object') { values = ensureFloat32(values); }
  if (values_count && typeof values_count === 'object') values_count = values_count.ptr;
  if (values_offset && typeof values_offset === 'object') values_offset = values_offset.ptr;
  if (overlay_text && typeof overlay_text === 'object') overlay_text = overlay_text.ptr;
  else overlay_text = ensureString(overlay_text);
  if (scale_min && typeof scale_min === 'object') scale_min = scale_min.ptr;
  if (scale_max && typeof scale_max === 'object') scale_max = scale_max.ptr;
  if (values_offset === undefined) { _emscripten_bind_Im_PlotHistogram_3(self, label, values, values_count);  return }
  if (overlay_text === undefined) { _emscripten_bind_Im_PlotHistogram_4(self, label, values, values_count, values_offset);  return }
  if (scale_min === undefined) { _emscripten_bind_Im_PlotHistogram_5(self, label, values, values_count, values_offset, overlay_text);  return }
  if (scale_max === undefined) { _emscripten_bind_Im_PlotHistogram_6(self, label, values, values_count, values_offset, overlay_text, scale_min);  return }
  _emscripten_bind_Im_PlotHistogram_7(self, label, values, values_count, values_offset, overlay_text, scale_min, scale_max);
};;

Im.prototype['Value'] = Im.prototype.Value = /** @suppress {undefinedVars, duplicate} @this{Object} */function(prefix, b) {
  var self = this.ptr;
  ensureCache.prepare();
  if (prefix && typeof prefix === 'object') prefix = prefix.ptr;
  else prefix = ensureString(prefix);
  if (b && typeof b === 'object') b = b.ptr;
  _emscripten_bind_Im_Value_2(self, prefix, b);
};;

Im.prototype['Value2'] = Im.prototype.Value2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(prefix, v) {
  var self = this.ptr;
  ensureCache.prepare();
  if (prefix && typeof prefix === 'object') prefix = prefix.ptr;
  else prefix = ensureString(prefix);
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_Im_Value2_2(self, prefix, v);
};;

Im.prototype['Value3'] = Im.prototype.Value3 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(prefix, v) {
  var self = this.ptr;
  ensureCache.prepare();
  if (prefix && typeof prefix === 'object') prefix = prefix.ptr;
  else prefix = ensureString(prefix);
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_Im_Value3_2(self, prefix, v);
};;

Im.prototype['Value4'] = Im.prototype.Value4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(prefix, v, float_format) {
  var self = this.ptr;
  ensureCache.prepare();
  if (prefix && typeof prefix === 'object') prefix = prefix.ptr;
  else prefix = ensureString(prefix);
  if (v && typeof v === 'object') v = v.ptr;
  if (float_format && typeof float_format === 'object') float_format = float_format.ptr;
  else float_format = ensureString(float_format);
  if (float_format === undefined) { _emscripten_bind_Im_Value4_2(self, prefix, v);  return }
  _emscripten_bind_Im_Value4_3(self, prefix, v, float_format);
};;

Im.prototype['BeginMenuBar'] = Im.prototype.BeginMenuBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_BeginMenuBar_0(self));
};;

Im.prototype['EndMenuBar'] = Im.prototype.EndMenuBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndMenuBar_0(self);
};;

Im.prototype['BeginMainMenuBar'] = Im.prototype.BeginMainMenuBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_BeginMainMenuBar_0(self));
};;

Im.prototype['EndMainMenuBar'] = Im.prototype.EndMainMenuBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndMainMenuBar_0(self);
};;

Im.prototype['BeginMenu'] = Im.prototype.BeginMenu = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, enabled) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (enabled && typeof enabled === 'object') enabled = enabled.ptr;
  if (enabled === undefined) { return !!(_emscripten_bind_Im_BeginMenu_1(self, label)) }
  return !!(_emscripten_bind_Im_BeginMenu_2(self, label, enabled));
};;

Im.prototype['EndMenu'] = Im.prototype.EndMenu = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndMenu_0(self);
};;

Im.prototype['MenuItem'] = Im.prototype.MenuItem = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, shortcut, selected, enabled) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (shortcut && typeof shortcut === 'object') shortcut = shortcut.ptr;
  else shortcut = ensureString(shortcut);
  if (selected && typeof selected === 'object') selected = selected.ptr;
  if (enabled && typeof enabled === 'object') enabled = enabled.ptr;
  if (shortcut === undefined) { return !!(_emscripten_bind_Im_MenuItem_1(self, label)) }
  if (selected === undefined) { return !!(_emscripten_bind_Im_MenuItem_2(self, label, shortcut)) }
  if (enabled === undefined) { return !!(_emscripten_bind_Im_MenuItem_3(self, label, shortcut, selected)) }
  return !!(_emscripten_bind_Im_MenuItem_4(self, label, shortcut, selected, enabled));
};;

Im.prototype['MenuItem2'] = Im.prototype.MenuItem2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, shortcut, p_selected, enabled) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (shortcut && typeof shortcut === 'object') shortcut = shortcut.ptr;
  else shortcut = ensureString(shortcut);
  if (enabled && typeof enabled === 'object') enabled = enabled.ptr;
  if (enabled === undefined) { return !!(_emscripten_bind_Im_MenuItem2_3(self, label, shortcut, p_selected)) }
  return !!(_emscripten_bind_Im_MenuItem2_4(self, label, shortcut, p_selected, enabled));
};;

Im.prototype['BeginTooltip'] = Im.prototype.BeginTooltip = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_BeginTooltip_0(self);
};;

Im.prototype['EndTooltip'] = Im.prototype.EndTooltip = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndTooltip_0(self);
};;

Im.prototype['SetTooltip'] = Im.prototype.SetTooltip = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_SetTooltip_1(self, fmt);
};;

Im.prototype['SetTooltipV'] = Im.prototype.SetTooltipV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_SetTooltipV_2(self, fmt, args);
};;

Im.prototype['BeginPopup'] = Im.prototype.BeginPopup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginPopup_1(self, str_id)) }
  return !!(_emscripten_bind_Im_BeginPopup_2(self, str_id, flags));
};;

Im.prototype['BeginPopupModal'] = Im.prototype.BeginPopupModal = /** @suppress {undefinedVars, duplicate} @this{Object} */function(name, p_open, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (name && typeof name === 'object') name = name.ptr;
  else name = ensureString(name);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (p_open === undefined) { return !!(_emscripten_bind_Im_BeginPopupModal_1(self, name)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginPopupModal_2(self, name, p_open)) }
  return !!(_emscripten_bind_Im_BeginPopupModal_3(self, name, p_open, flags));
};;

Im.prototype['EndPopup'] = Im.prototype.EndPopup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndPopup_0(self);
};;

Im.prototype['OpenPopup'] = Im.prototype.OpenPopup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, popup_flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (popup_flags === undefined) { _emscripten_bind_Im_OpenPopup_1(self, str_id);  return }
  _emscripten_bind_Im_OpenPopup_2(self, str_id, popup_flags);
};;

Im.prototype['OpenPopup2'] = Im.prototype.OpenPopup2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(id, popup_flags) {
  var self = this.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (popup_flags === undefined) { _emscripten_bind_Im_OpenPopup2_1(self, id);  return }
  _emscripten_bind_Im_OpenPopup2_2(self, id, popup_flags);
};;

Im.prototype['OpenPopupOnItemClick'] = Im.prototype.OpenPopupOnItemClick = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, popup_flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (str_id === undefined) { _emscripten_bind_Im_OpenPopupOnItemClick_0(self);  return }
  if (popup_flags === undefined) { _emscripten_bind_Im_OpenPopupOnItemClick_1(self, str_id);  return }
  _emscripten_bind_Im_OpenPopupOnItemClick_2(self, str_id, popup_flags);
};;

Im.prototype['CloseCurrentPopup'] = Im.prototype.CloseCurrentPopup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_CloseCurrentPopup_0(self);
};;

Im.prototype['BeginPopupContextItem'] = Im.prototype.BeginPopupContextItem = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, popup_flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (str_id === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextItem_0(self)) }
  if (popup_flags === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextItem_1(self, str_id)) }
  return !!(_emscripten_bind_Im_BeginPopupContextItem_2(self, str_id, popup_flags));
};;

Im.prototype['BeginPopupContextWindow'] = Im.prototype.BeginPopupContextWindow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, popup_flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (str_id === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextWindow_0(self)) }
  if (popup_flags === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextWindow_1(self, str_id)) }
  return !!(_emscripten_bind_Im_BeginPopupContextWindow_2(self, str_id, popup_flags));
};;

Im.prototype['BeginPopupContextVoid'] = Im.prototype.BeginPopupContextVoid = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, popup_flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (popup_flags && typeof popup_flags === 'object') popup_flags = popup_flags.ptr;
  if (str_id === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextVoid_0(self)) }
  if (popup_flags === undefined) { return !!(_emscripten_bind_Im_BeginPopupContextVoid_1(self, str_id)) }
  return !!(_emscripten_bind_Im_BeginPopupContextVoid_2(self, str_id, popup_flags));
};;

Im.prototype['IsPopupOpen'] = Im.prototype.IsPopupOpen = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_IsPopupOpen_1(self, str_id)) }
  return !!(_emscripten_bind_Im_IsPopupOpen_2(self, str_id, flags));
};;

Im.prototype['BeginTable'] = Im.prototype.BeginTable = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, column, flags, outer_size, inner_width) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (column && typeof column === 'object') column = column.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (outer_size && typeof outer_size === 'object') outer_size = outer_size.ptr;
  if (inner_width && typeof inner_width === 'object') inner_width = inner_width.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginTable_2(self, str_id, column)) }
  if (outer_size === undefined) { return !!(_emscripten_bind_Im_BeginTable_3(self, str_id, column, flags)) }
  if (inner_width === undefined) { return !!(_emscripten_bind_Im_BeginTable_4(self, str_id, column, flags, outer_size)) }
  return !!(_emscripten_bind_Im_BeginTable_5(self, str_id, column, flags, outer_size, inner_width));
};;

Im.prototype['EndTable'] = Im.prototype.EndTable = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndTable_0(self);
};;

Im.prototype['TableNextRow'] = Im.prototype.TableNextRow = /** @suppress {undefinedVars, duplicate} @this{Object} */function(row_flags, min_row_height) {
  var self = this.ptr;
  if (row_flags && typeof row_flags === 'object') row_flags = row_flags.ptr;
  if (min_row_height && typeof min_row_height === 'object') min_row_height = min_row_height.ptr;
  if (row_flags === undefined) { _emscripten_bind_Im_TableNextRow_0(self);  return }
  if (min_row_height === undefined) { _emscripten_bind_Im_TableNextRow_1(self, row_flags);  return }
  _emscripten_bind_Im_TableNextRow_2(self, row_flags, min_row_height);
};;

Im.prototype['TableNextColumn'] = Im.prototype.TableNextColumn = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_TableNextColumn_0(self));
};;

Im.prototype['TableSetColumnIndex'] = Im.prototype.TableSetColumnIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_n) {
  var self = this.ptr;
  if (column_n && typeof column_n === 'object') column_n = column_n.ptr;
  return !!(_emscripten_bind_Im_TableSetColumnIndex_1(self, column_n));
};;

Im.prototype['TableSetupColumn'] = Im.prototype.TableSetupColumn = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags, init_width_or_weight, user_id) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (init_width_or_weight && typeof init_width_or_weight === 'object') init_width_or_weight = init_width_or_weight.ptr;
  if (user_id && typeof user_id === 'object') user_id = user_id.ptr;
  if (flags === undefined) { _emscripten_bind_Im_TableSetupColumn_1(self, label);  return }
  if (init_width_or_weight === undefined) { _emscripten_bind_Im_TableSetupColumn_2(self, label, flags);  return }
  if (user_id === undefined) { _emscripten_bind_Im_TableSetupColumn_3(self, label, flags, init_width_or_weight);  return }
  _emscripten_bind_Im_TableSetupColumn_4(self, label, flags, init_width_or_weight, user_id);
};;

Im.prototype['TableSetupScrollFreeze'] = Im.prototype.TableSetupScrollFreeze = /** @suppress {undefinedVars, duplicate} @this{Object} */function(cols, rows) {
  var self = this.ptr;
  if (cols && typeof cols === 'object') cols = cols.ptr;
  if (rows && typeof rows === 'object') rows = rows.ptr;
  _emscripten_bind_Im_TableSetupScrollFreeze_2(self, cols, rows);
};;

Im.prototype['TableHeadersRow'] = Im.prototype.TableHeadersRow = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_TableHeadersRow_0(self);
};;

Im.prototype['TableHeader'] = Im.prototype.TableHeader = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  _emscripten_bind_Im_TableHeader_1(self, label);
};;

Im.prototype['TableGetSortSpecs'] = Im.prototype.TableGetSortSpecs = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_TableGetSortSpecs_0(self), ImGuiTableSortSpecs);
};;

Im.prototype['TableGetColumnCount'] = Im.prototype.TableGetColumnCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_TableGetColumnCount_0(self);
};;

Im.prototype['TableGetColumnIndex'] = Im.prototype.TableGetColumnIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_TableGetColumnIndex_0(self);
};;

Im.prototype['TableGetRowIndex'] = Im.prototype.TableGetRowIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_TableGetRowIndex_0(self);
};;

Im.prototype['TableGetColumnName'] = Im.prototype.TableGetColumnName = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_n) {
  var self = this.ptr;
  if (column_n && typeof column_n === 'object') column_n = column_n.ptr;
  if (column_n === undefined) { return UTF8ToString(_emscripten_bind_Im_TableGetColumnName_0(self)) }
  return UTF8ToString(_emscripten_bind_Im_TableGetColumnName_1(self, column_n));
};;

Im.prototype['TableGetColumnFlags'] = Im.prototype.TableGetColumnFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_n) {
  var self = this.ptr;
  if (column_n && typeof column_n === 'object') column_n = column_n.ptr;
  if (column_n === undefined) { return _emscripten_bind_Im_TableGetColumnFlags_0(self) }
  return _emscripten_bind_Im_TableGetColumnFlags_1(self, column_n);
};;

Im.prototype['TableSetColumnEnabled'] = Im.prototype.TableSetColumnEnabled = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_n, v) {
  var self = this.ptr;
  if (column_n && typeof column_n === 'object') column_n = column_n.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_Im_TableSetColumnEnabled_2(self, column_n, v);
};;

Im.prototype['TableSetBgColor'] = Im.prototype.TableSetBgColor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(target, color, column_n) {
  var self = this.ptr;
  if (target && typeof target === 'object') target = target.ptr;
  if (color && typeof color === 'object') color = color.ptr;
  if (column_n && typeof column_n === 'object') column_n = column_n.ptr;
  if (column_n === undefined) { _emscripten_bind_Im_TableSetBgColor_2(self, target, color);  return }
  _emscripten_bind_Im_TableSetBgColor_3(self, target, color, column_n);
};;

Im.prototype['Columns'] = Im.prototype.Columns = /** @suppress {undefinedVars, duplicate} @this{Object} */function(count, id, border) {
  var self = this.ptr;
  ensureCache.prepare();
  if (count && typeof count === 'object') count = count.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  else id = ensureString(id);
  if (border && typeof border === 'object') border = border.ptr;
  if (count === undefined) { _emscripten_bind_Im_Columns_0(self);  return }
  if (id === undefined) { _emscripten_bind_Im_Columns_1(self, count);  return }
  if (border === undefined) { _emscripten_bind_Im_Columns_2(self, count, id);  return }
  _emscripten_bind_Im_Columns_3(self, count, id, border);
};;

Im.prototype['NextColumn'] = Im.prototype.NextColumn = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_NextColumn_0(self);
};;

Im.prototype['GetColumnIndex'] = Im.prototype.GetColumnIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetColumnIndex_0(self);
};;

Im.prototype['GetColumnWidth'] = Im.prototype.GetColumnWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_index) {
  var self = this.ptr;
  if (column_index && typeof column_index === 'object') column_index = column_index.ptr;
  if (column_index === undefined) { return _emscripten_bind_Im_GetColumnWidth_0(self) }
  return _emscripten_bind_Im_GetColumnWidth_1(self, column_index);
};;

Im.prototype['SetColumnWidth'] = Im.prototype.SetColumnWidth = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_index, width) {
  var self = this.ptr;
  if (column_index && typeof column_index === 'object') column_index = column_index.ptr;
  if (width && typeof width === 'object') width = width.ptr;
  _emscripten_bind_Im_SetColumnWidth_2(self, column_index, width);
};;

Im.prototype['GetColumnOffset'] = Im.prototype.GetColumnOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_index) {
  var self = this.ptr;
  if (column_index && typeof column_index === 'object') column_index = column_index.ptr;
  if (column_index === undefined) { return _emscripten_bind_Im_GetColumnOffset_0(self) }
  return _emscripten_bind_Im_GetColumnOffset_1(self, column_index);
};;

Im.prototype['SetColumnOffset'] = Im.prototype.SetColumnOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(column_index, offset_x) {
  var self = this.ptr;
  if (column_index && typeof column_index === 'object') column_index = column_index.ptr;
  if (offset_x && typeof offset_x === 'object') offset_x = offset_x.ptr;
  _emscripten_bind_Im_SetColumnOffset_2(self, column_index, offset_x);
};;

Im.prototype['GetColumnsCount'] = Im.prototype.GetColumnsCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetColumnsCount_0(self);
};;

Im.prototype['BeginTabBar'] = Im.prototype.BeginTabBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(str_id, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (str_id && typeof str_id === 'object') str_id = str_id.ptr;
  else str_id = ensureString(str_id);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginTabBar_1(self, str_id)) }
  return !!(_emscripten_bind_Im_BeginTabBar_2(self, str_id, flags));
};;

Im.prototype['EndTabBar'] = Im.prototype.EndTabBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndTabBar_0(self);
};;

Im.prototype['BeginTabItem'] = Im.prototype.BeginTabItem = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, p_open, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (p_open === undefined) { return !!(_emscripten_bind_Im_BeginTabItem_1(self, label)) }
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginTabItem_2(self, label, p_open)) }
  return !!(_emscripten_bind_Im_BeginTabItem_3(self, label, p_open, flags));
};;

Im.prototype['EndTabItem'] = Im.prototype.EndTabItem = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndTabItem_0(self);
};;

Im.prototype['TabItemButton'] = Im.prototype.TabItemButton = /** @suppress {undefinedVars, duplicate} @this{Object} */function(label, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (label && typeof label === 'object') label = label.ptr;
  else label = ensureString(label);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_TabItemButton_1(self, label)) }
  return !!(_emscripten_bind_Im_TabItemButton_2(self, label, flags));
};;

Im.prototype['SetTabItemClosed'] = Im.prototype.SetTabItemClosed = /** @suppress {undefinedVars, duplicate} @this{Object} */function(tab_or_docked_window_label) {
  var self = this.ptr;
  ensureCache.prepare();
  if (tab_or_docked_window_label && typeof tab_or_docked_window_label === 'object') tab_or_docked_window_label = tab_or_docked_window_label.ptr;
  else tab_or_docked_window_label = ensureString(tab_or_docked_window_label);
  _emscripten_bind_Im_SetTabItemClosed_1(self, tab_or_docked_window_label);
};;

Im.prototype['DockSpace'] = Im.prototype.DockSpace = /** @suppress {undefinedVars, duplicate} @this{Object} */function(id, size, flags, window_class) {
  var self = this.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (window_class && typeof window_class === 'object') window_class = window_class.ptr;
  if (size === undefined) { return _emscripten_bind_Im_DockSpace_1(self, id) }
  if (flags === undefined) { return _emscripten_bind_Im_DockSpace_2(self, id, size) }
  if (window_class === undefined) { return _emscripten_bind_Im_DockSpace_3(self, id, size, flags) }
  return _emscripten_bind_Im_DockSpace_4(self, id, size, flags, window_class);
};;

Im.prototype['DockSpaceOverViewport'] = Im.prototype.DockSpaceOverViewport = /** @suppress {undefinedVars, duplicate} @this{Object} */function(viewport, flags, window_class) {
  var self = this.ptr;
  if (viewport && typeof viewport === 'object') viewport = viewport.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (window_class && typeof window_class === 'object') window_class = window_class.ptr;
  if (viewport === undefined) { return _emscripten_bind_Im_DockSpaceOverViewport_0(self) }
  if (flags === undefined) { return _emscripten_bind_Im_DockSpaceOverViewport_1(self, viewport) }
  if (window_class === undefined) { return _emscripten_bind_Im_DockSpaceOverViewport_2(self, viewport, flags) }
  return _emscripten_bind_Im_DockSpaceOverViewport_3(self, viewport, flags, window_class);
};;

Im.prototype['SetNextWindowDockID'] = Im.prototype.SetNextWindowDockID = /** @suppress {undefinedVars, duplicate} @this{Object} */function(dock_id, cond) {
  var self = this.ptr;
  if (dock_id && typeof dock_id === 'object') dock_id = dock_id.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { _emscripten_bind_Im_SetNextWindowDockID_1(self, dock_id);  return }
  _emscripten_bind_Im_SetNextWindowDockID_2(self, dock_id, cond);
};;

Im.prototype['SetNextWindowClass'] = Im.prototype.SetNextWindowClass = /** @suppress {undefinedVars, duplicate} @this{Object} */function(window_class) {
  var self = this.ptr;
  if (window_class && typeof window_class === 'object') window_class = window_class.ptr;
  _emscripten_bind_Im_SetNextWindowClass_1(self, window_class);
};;

Im.prototype['GetWindowDockID'] = Im.prototype.GetWindowDockID = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetWindowDockID_0(self);
};;

Im.prototype['IsWindowDocked'] = Im.prototype.IsWindowDocked = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsWindowDocked_0(self));
};;

Im.prototype['LogToTTY'] = Im.prototype.LogToTTY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(auto_open_depth) {
  var self = this.ptr;
  if (auto_open_depth && typeof auto_open_depth === 'object') auto_open_depth = auto_open_depth.ptr;
  if (auto_open_depth === undefined) { _emscripten_bind_Im_LogToTTY_0(self);  return }
  _emscripten_bind_Im_LogToTTY_1(self, auto_open_depth);
};;

Im.prototype['LogToFile'] = Im.prototype.LogToFile = /** @suppress {undefinedVars, duplicate} @this{Object} */function(auto_open_depth, filename) {
  var self = this.ptr;
  ensureCache.prepare();
  if (auto_open_depth && typeof auto_open_depth === 'object') auto_open_depth = auto_open_depth.ptr;
  if (filename && typeof filename === 'object') filename = filename.ptr;
  else filename = ensureString(filename);
  if (auto_open_depth === undefined) { _emscripten_bind_Im_LogToFile_0(self);  return }
  if (filename === undefined) { _emscripten_bind_Im_LogToFile_1(self, auto_open_depth);  return }
  _emscripten_bind_Im_LogToFile_2(self, auto_open_depth, filename);
};;

Im.prototype['LogToClipboard'] = Im.prototype.LogToClipboard = /** @suppress {undefinedVars, duplicate} @this{Object} */function(auto_open_depth) {
  var self = this.ptr;
  if (auto_open_depth && typeof auto_open_depth === 'object') auto_open_depth = auto_open_depth.ptr;
  if (auto_open_depth === undefined) { _emscripten_bind_Im_LogToClipboard_0(self);  return }
  _emscripten_bind_Im_LogToClipboard_1(self, auto_open_depth);
};;

Im.prototype['LogFinish'] = Im.prototype.LogFinish = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_LogFinish_0(self);
};;

Im.prototype['LogButtons'] = Im.prototype.LogButtons = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_LogButtons_0(self);
};;

Im.prototype['LogText'] = Im.prototype.LogText = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  _emscripten_bind_Im_LogText_1(self, fmt);
};;

Im.prototype['LogTextV'] = Im.prototype.LogTextV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(fmt, args) {
  var self = this.ptr;
  ensureCache.prepare();
  if (fmt && typeof fmt === 'object') fmt = fmt.ptr;
  else fmt = ensureString(fmt);
  if (args && typeof args === 'object') args = args.ptr;
  else args = ensureString(args);
  _emscripten_bind_Im_LogTextV_2(self, fmt, args);
};;

Im.prototype['BeginDragDropSource'] = Im.prototype.BeginDragDropSource = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginDragDropSource_0(self)) }
  return !!(_emscripten_bind_Im_BeginDragDropSource_1(self, flags));
};;

Im.prototype['SetDragDropPayload'] = Im.prototype.SetDragDropPayload = /** @suppress {undefinedVars, duplicate} @this{Object} */function(type, data, sz, cond) {
  var self = this.ptr;
  ensureCache.prepare();
  if (type && typeof type === 'object') type = type.ptr;
  else type = ensureString(type);
  if (data && typeof data === 'object') data = data.ptr;
  if (sz && typeof sz === 'object') sz = sz.ptr;
  if (cond && typeof cond === 'object') cond = cond.ptr;
  if (cond === undefined) { return !!(_emscripten_bind_Im_SetDragDropPayload_3(self, type, data, sz)) }
  return !!(_emscripten_bind_Im_SetDragDropPayload_4(self, type, data, sz, cond));
};;

Im.prototype['EndDragDropSource'] = Im.prototype.EndDragDropSource = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndDragDropSource_0(self);
};;

Im.prototype['BeginDragDropTarget'] = Im.prototype.BeginDragDropTarget = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_BeginDragDropTarget_0(self));
};;

Im.prototype['AcceptDragDropPayload'] = Im.prototype.AcceptDragDropPayload = /** @suppress {undefinedVars, duplicate} @this{Object} */function(type, flags) {
  var self = this.ptr;
  ensureCache.prepare();
  if (type && typeof type === 'object') type = type.ptr;
  else type = ensureString(type);
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return wrapPointer(_emscripten_bind_Im_AcceptDragDropPayload_1(self, type), ImGuiPayload) }
  return wrapPointer(_emscripten_bind_Im_AcceptDragDropPayload_2(self, type, flags), ImGuiPayload);
};;

Im.prototype['EndDragDropTarget'] = Im.prototype.EndDragDropTarget = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndDragDropTarget_0(self);
};;

Im.prototype['GetDragDropPayload'] = Im.prototype.GetDragDropPayload = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetDragDropPayload_0(self), ImGuiPayload);
};;

Im.prototype['BeginDisabled'] = Im.prototype.BeginDisabled = /** @suppress {undefinedVars, duplicate} @this{Object} */function(disabled) {
  var self = this.ptr;
  if (disabled && typeof disabled === 'object') disabled = disabled.ptr;
  if (disabled === undefined) { _emscripten_bind_Im_BeginDisabled_0(self);  return }
  _emscripten_bind_Im_BeginDisabled_1(self, disabled);
};;

Im.prototype['EndDisabled'] = Im.prototype.EndDisabled = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndDisabled_0(self);
};;

Im.prototype['PushClipRect'] = Im.prototype.PushClipRect = /** @suppress {undefinedVars, duplicate} @this{Object} */function(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect) {
  var self = this.ptr;
  if (clip_rect_min && typeof clip_rect_min === 'object') clip_rect_min = clip_rect_min.ptr;
  if (clip_rect_max && typeof clip_rect_max === 'object') clip_rect_max = clip_rect_max.ptr;
  if (intersect_with_current_clip_rect && typeof intersect_with_current_clip_rect === 'object') intersect_with_current_clip_rect = intersect_with_current_clip_rect.ptr;
  _emscripten_bind_Im_PushClipRect_3(self, clip_rect_min, clip_rect_max, intersect_with_current_clip_rect);
};;

Im.prototype['PopClipRect'] = Im.prototype.PopClipRect = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_PopClipRect_0(self);
};;

Im.prototype['SetItemDefaultFocus'] = Im.prototype.SetItemDefaultFocus = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_SetItemDefaultFocus_0(self);
};;

Im.prototype['SetKeyboardFocusHere'] = Im.prototype.SetKeyboardFocusHere = /** @suppress {undefinedVars, duplicate} @this{Object} */function(offset) {
  var self = this.ptr;
  if (offset && typeof offset === 'object') offset = offset.ptr;
  if (offset === undefined) { _emscripten_bind_Im_SetKeyboardFocusHere_0(self);  return }
  _emscripten_bind_Im_SetKeyboardFocusHere_1(self, offset);
};;

Im.prototype['IsItemHovered'] = Im.prototype.IsItemHovered = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_IsItemHovered_0(self)) }
  return !!(_emscripten_bind_Im_IsItemHovered_1(self, flags));
};;

Im.prototype['IsItemActive'] = Im.prototype.IsItemActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemActive_0(self));
};;

Im.prototype['IsItemFocused'] = Im.prototype.IsItemFocused = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemFocused_0(self));
};;

Im.prototype['IsItemClicked'] = Im.prototype.IsItemClicked = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mouse_button) {
  var self = this.ptr;
  if (mouse_button && typeof mouse_button === 'object') mouse_button = mouse_button.ptr;
  if (mouse_button === undefined) { return !!(_emscripten_bind_Im_IsItemClicked_0(self)) }
  return !!(_emscripten_bind_Im_IsItemClicked_1(self, mouse_button));
};;

Im.prototype['IsItemVisible'] = Im.prototype.IsItemVisible = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemVisible_0(self));
};;

Im.prototype['IsItemEdited'] = Im.prototype.IsItemEdited = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemEdited_0(self));
};;

Im.prototype['IsItemActivated'] = Im.prototype.IsItemActivated = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemActivated_0(self));
};;

Im.prototype['IsItemDeactivated'] = Im.prototype.IsItemDeactivated = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemDeactivated_0(self));
};;

Im.prototype['IsItemDeactivatedAfterEdit'] = Im.prototype.IsItemDeactivatedAfterEdit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemDeactivatedAfterEdit_0(self));
};;

Im.prototype['IsItemToggledOpen'] = Im.prototype.IsItemToggledOpen = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsItemToggledOpen_0(self));
};;

Im.prototype['IsAnyItemHovered'] = Im.prototype.IsAnyItemHovered = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsAnyItemHovered_0(self));
};;

Im.prototype['IsAnyItemActive'] = Im.prototype.IsAnyItemActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsAnyItemActive_0(self));
};;

Im.prototype['IsAnyItemFocused'] = Im.prototype.IsAnyItemFocused = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsAnyItemFocused_0(self));
};;

Im.prototype['GetItemID'] = Im.prototype.GetItemID = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetItemID_0(self);
};;

Im.prototype['GetItemRectMin'] = Im.prototype.GetItemRectMin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetItemRectMin_0(self), ImVec2);
};;

Im.prototype['GetItemRectMax'] = Im.prototype.GetItemRectMax = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetItemRectMax_0(self), ImVec2);
};;

Im.prototype['GetItemRectSize'] = Im.prototype.GetItemRectSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetItemRectSize_0(self), ImVec2);
};;

Im.prototype['SetItemAllowOverlap'] = Im.prototype.SetItemAllowOverlap = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_SetItemAllowOverlap_0(self);
};;

Im.prototype['GetMainViewport'] = Im.prototype.GetMainViewport = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetMainViewport_0(self), ImGuiViewport);
};;

Im.prototype['GetBackgroundDrawList'] = Im.prototype.GetBackgroundDrawList = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetBackgroundDrawList_0(self), ImDrawList);
};;

Im.prototype['GetForegroundDrawList'] = Im.prototype.GetForegroundDrawList = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetForegroundDrawList_0(self), ImDrawList);
};;

Im.prototype['GetBackgroundDrawList2'] = Im.prototype.GetBackgroundDrawList2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(viewport) {
  var self = this.ptr;
  if (viewport && typeof viewport === 'object') viewport = viewport.ptr;
  return wrapPointer(_emscripten_bind_Im_GetBackgroundDrawList2_1(self, viewport), ImDrawList);
};;

Im.prototype['GetForegroundDrawList2'] = Im.prototype.GetForegroundDrawList2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(viewport) {
  var self = this.ptr;
  if (viewport && typeof viewport === 'object') viewport = viewport.ptr;
  return wrapPointer(_emscripten_bind_Im_GetForegroundDrawList2_1(self, viewport), ImDrawList);
};;

Im.prototype['IsRectVisible'] = Im.prototype.IsRectVisible = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  return !!(_emscripten_bind_Im_IsRectVisible_1(self, size));
};;

Im.prototype['IsRectVisible2'] = Im.prototype.IsRectVisible2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rect_min, rect_max) {
  var self = this.ptr;
  if (rect_min && typeof rect_min === 'object') rect_min = rect_min.ptr;
  if (rect_max && typeof rect_max === 'object') rect_max = rect_max.ptr;
  return !!(_emscripten_bind_Im_IsRectVisible2_2(self, rect_min, rect_max));
};;

Im.prototype['GetTime'] = Im.prototype.GetTime = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetTime_0(self);
};;

Im.prototype['GetFrameCount'] = Im.prototype.GetFrameCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetFrameCount_0(self);
};;

Im.prototype['GetDrawListSharedData'] = Im.prototype.GetDrawListSharedData = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetDrawListSharedData_0(self), ImDrawListSharedData);
};;

Im.prototype['GetStyleColorName'] = Im.prototype.GetStyleColorName = /** @suppress {undefinedVars, duplicate} @this{Object} */function(idx) {
  var self = this.ptr;
  if (idx && typeof idx === 'object') idx = idx.ptr;
  return UTF8ToString(_emscripten_bind_Im_GetStyleColorName_1(self, idx));
};;

Im.prototype['SetStateStorage'] = Im.prototype.SetStateStorage = /** @suppress {undefinedVars, duplicate} @this{Object} */function(storage) {
  var self = this.ptr;
  if (storage && typeof storage === 'object') storage = storage.ptr;
  _emscripten_bind_Im_SetStateStorage_1(self, storage);
};;

Im.prototype['GetStateStorage'] = Im.prototype.GetStateStorage = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetStateStorage_0(self), ImGuiStorage);
};;

Im.prototype['BeginChildFrame'] = Im.prototype.BeginChildFrame = /** @suppress {undefinedVars, duplicate} @this{Object} */function(id, size, flags) {
  var self = this.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  if (flags === undefined) { return !!(_emscripten_bind_Im_BeginChildFrame_2(self, id, size)) }
  return !!(_emscripten_bind_Im_BeginChildFrame_3(self, id, size, flags));
};;

Im.prototype['EndChildFrame'] = Im.prototype.EndChildFrame = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_EndChildFrame_0(self);
};;

Im.prototype['CalcTextSize'] = Im.prototype.CalcTextSize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(text, text_end, hide_text_after_double_hash, wrap_width) {
  var self = this.ptr;
  ensureCache.prepare();
  if (text && typeof text === 'object') text = text.ptr;
  else text = ensureString(text);
  if (text_end && typeof text_end === 'object') text_end = text_end.ptr;
  else text_end = ensureString(text_end);
  if (hide_text_after_double_hash && typeof hide_text_after_double_hash === 'object') hide_text_after_double_hash = hide_text_after_double_hash.ptr;
  if (wrap_width && typeof wrap_width === 'object') wrap_width = wrap_width.ptr;
  if (text_end === undefined) { return wrapPointer(_emscripten_bind_Im_CalcTextSize_1(self, text), ImVec2) }
  if (hide_text_after_double_hash === undefined) { return wrapPointer(_emscripten_bind_Im_CalcTextSize_2(self, text, text_end), ImVec2) }
  if (wrap_width === undefined) { return wrapPointer(_emscripten_bind_Im_CalcTextSize_3(self, text, text_end, hide_text_after_double_hash), ImVec2) }
  return wrapPointer(_emscripten_bind_Im_CalcTextSize_4(self, text, text_end, hide_text_after_double_hash, wrap_width), ImVec2);
};;

Im.prototype['ColorConvertU32ToFloat4'] = Im.prototype.ColorConvertU32ToFloat4 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col) {
  var self = this.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  return wrapPointer(_emscripten_bind_Im_ColorConvertU32ToFloat4_1(self, col), ImVec4);
};;

Im.prototype['ColorConvertFloat4ToU32'] = Im.prototype.ColorConvertFloat4ToU32 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(col) {
  var self = this.ptr;
  if (col && typeof col === 'object') col = col.ptr;
  return _emscripten_bind_Im_ColorConvertFloat4ToU32_1(self, col);
};;

Im.prototype['ColorConvertRGBtoHSV'] = Im.prototype.ColorConvertRGBtoHSV = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r, g, b, out_h, out_s, out_v) {
  var self = this.ptr;
  ensureCache.prepare();
  if (r && typeof r === 'object') r = r.ptr;
  if (g && typeof g === 'object') g = g.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  if (typeof out_h == 'object') { out_h = ensureFloat32(out_h); }
  if (typeof out_s == 'object') { out_s = ensureFloat32(out_s); }
  if (typeof out_v == 'object') { out_v = ensureFloat32(out_v); }
  _emscripten_bind_Im_ColorConvertRGBtoHSV_6(self, r, g, b, out_h, out_s, out_v);
};;

Im.prototype['ColorConvertHSVtoRGB'] = Im.prototype.ColorConvertHSVtoRGB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(h, s, v, out_r, out_g, out_b) {
  var self = this.ptr;
  ensureCache.prepare();
  if (h && typeof h === 'object') h = h.ptr;
  if (s && typeof s === 'object') s = s.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  if (typeof out_r == 'object') { out_r = ensureFloat32(out_r); }
  if (typeof out_g == 'object') { out_g = ensureFloat32(out_g); }
  if (typeof out_b == 'object') { out_b = ensureFloat32(out_b); }
  _emscripten_bind_Im_ColorConvertHSVtoRGB_6(self, h, s, v, out_r, out_g, out_b);
};;

Im.prototype['IsKeyDown'] = Im.prototype.IsKeyDown = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  return !!(_emscripten_bind_Im_IsKeyDown_1(self, key));
};;

Im.prototype['IsKeyPressed'] = Im.prototype.IsKeyPressed = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key, repeat) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  if (repeat && typeof repeat === 'object') repeat = repeat.ptr;
  if (repeat === undefined) { return !!(_emscripten_bind_Im_IsKeyPressed_1(self, key)) }
  return !!(_emscripten_bind_Im_IsKeyPressed_2(self, key, repeat));
};;

Im.prototype['IsKeyReleased'] = Im.prototype.IsKeyReleased = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  return !!(_emscripten_bind_Im_IsKeyReleased_1(self, key));
};;

Im.prototype['GetKeyPressedAmount'] = Im.prototype.GetKeyPressedAmount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key, repeat_delay, rate) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  if (repeat_delay && typeof repeat_delay === 'object') repeat_delay = repeat_delay.ptr;
  if (rate && typeof rate === 'object') rate = rate.ptr;
  return _emscripten_bind_Im_GetKeyPressedAmount_3(self, key, repeat_delay, rate);
};;

Im.prototype['GetKeyName'] = Im.prototype.GetKeyName = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  return UTF8ToString(_emscripten_bind_Im_GetKeyName_1(self, key));
};;

Im.prototype['SetNextFrameWantCaptureKeyboard'] = Im.prototype.SetNextFrameWantCaptureKeyboard = /** @suppress {undefinedVars, duplicate} @this{Object} */function(want_capture_keyboard) {
  var self = this.ptr;
  if (want_capture_keyboard && typeof want_capture_keyboard === 'object') want_capture_keyboard = want_capture_keyboard.ptr;
  _emscripten_bind_Im_SetNextFrameWantCaptureKeyboard_1(self, want_capture_keyboard);
};;

Im.prototype['IsMouseDown'] = Im.prototype.IsMouseDown = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  return !!(_emscripten_bind_Im_IsMouseDown_1(self, button));
};;

Im.prototype['IsMouseClicked'] = Im.prototype.IsMouseClicked = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button, repeat) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  if (repeat && typeof repeat === 'object') repeat = repeat.ptr;
  if (repeat === undefined) { return !!(_emscripten_bind_Im_IsMouseClicked_1(self, button)) }
  return !!(_emscripten_bind_Im_IsMouseClicked_2(self, button, repeat));
};;

Im.prototype['IsMouseReleased'] = Im.prototype.IsMouseReleased = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  return !!(_emscripten_bind_Im_IsMouseReleased_1(self, button));
};;

Im.prototype['IsMouseDoubleClicked'] = Im.prototype.IsMouseDoubleClicked = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  return !!(_emscripten_bind_Im_IsMouseDoubleClicked_1(self, button));
};;

Im.prototype['GetMouseClickedCount'] = Im.prototype.GetMouseClickedCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  return _emscripten_bind_Im_GetMouseClickedCount_1(self, button);
};;

Im.prototype['IsMouseHoveringRect'] = Im.prototype.IsMouseHoveringRect = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r_min, r_max, clip) {
  var self = this.ptr;
  if (r_min && typeof r_min === 'object') r_min = r_min.ptr;
  if (r_max && typeof r_max === 'object') r_max = r_max.ptr;
  if (clip && typeof clip === 'object') clip = clip.ptr;
  if (clip === undefined) { return !!(_emscripten_bind_Im_IsMouseHoveringRect_2(self, r_min, r_max)) }
  return !!(_emscripten_bind_Im_IsMouseHoveringRect_3(self, r_min, r_max, clip));
};;

Im.prototype['IsMousePosValid'] = Im.prototype.IsMousePosValid = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mouse_pos) {
  var self = this.ptr;
  if (mouse_pos && typeof mouse_pos === 'object') mouse_pos = mouse_pos.ptr;
  if (mouse_pos === undefined) { return !!(_emscripten_bind_Im_IsMousePosValid_0(self)) }
  return !!(_emscripten_bind_Im_IsMousePosValid_1(self, mouse_pos));
};;

Im.prototype['IsAnyMouseDown'] = Im.prototype.IsAnyMouseDown = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Im_IsAnyMouseDown_0(self));
};;

Im.prototype['GetMousePos'] = Im.prototype.GetMousePos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetMousePos_0(self), ImVec2);
};;

Im.prototype['GetMousePosOnOpeningCurrentPopup'] = Im.prototype.GetMousePosOnOpeningCurrentPopup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetMousePosOnOpeningCurrentPopup_0(self), ImVec2);
};;

Im.prototype['IsMouseDragging'] = Im.prototype.IsMouseDragging = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button, lock_threshold) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  if (lock_threshold && typeof lock_threshold === 'object') lock_threshold = lock_threshold.ptr;
  if (lock_threshold === undefined) { return !!(_emscripten_bind_Im_IsMouseDragging_1(self, button)) }
  return !!(_emscripten_bind_Im_IsMouseDragging_2(self, button, lock_threshold));
};;

Im.prototype['GetMouseDragDelta'] = Im.prototype.GetMouseDragDelta = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button, lock_threshold) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  if (lock_threshold && typeof lock_threshold === 'object') lock_threshold = lock_threshold.ptr;
  if (button === undefined) { return wrapPointer(_emscripten_bind_Im_GetMouseDragDelta_0(self), ImVec2) }
  if (lock_threshold === undefined) { return wrapPointer(_emscripten_bind_Im_GetMouseDragDelta_1(self, button), ImVec2) }
  return wrapPointer(_emscripten_bind_Im_GetMouseDragDelta_2(self, button, lock_threshold), ImVec2);
};;

Im.prototype['ResetMouseDragDelta'] = Im.prototype.ResetMouseDragDelta = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  if (button === undefined) { _emscripten_bind_Im_ResetMouseDragDelta_0(self);  return }
  _emscripten_bind_Im_ResetMouseDragDelta_1(self, button);
};;

Im.prototype['GetMouseCursor'] = Im.prototype.GetMouseCursor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_Im_GetMouseCursor_0(self);
};;

Im.prototype['SetMouseCursor'] = Im.prototype.SetMouseCursor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(cursor_type) {
  var self = this.ptr;
  if (cursor_type && typeof cursor_type === 'object') cursor_type = cursor_type.ptr;
  _emscripten_bind_Im_SetMouseCursor_1(self, cursor_type);
};;

Im.prototype['SetNextFrameWantCaptureMouse'] = Im.prototype.SetNextFrameWantCaptureMouse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(want_capture_mouse) {
  var self = this.ptr;
  if (want_capture_mouse && typeof want_capture_mouse === 'object') want_capture_mouse = want_capture_mouse.ptr;
  _emscripten_bind_Im_SetNextFrameWantCaptureMouse_1(self, want_capture_mouse);
};;

Im.prototype['GetClipboardText'] = Im.prototype.GetClipboardText = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return UTF8ToString(_emscripten_bind_Im_GetClipboardText_0(self));
};;

Im.prototype['SetClipboardText'] = Im.prototype.SetClipboardText = /** @suppress {undefinedVars, duplicate} @this{Object} */function(text) {
  var self = this.ptr;
  ensureCache.prepare();
  if (text && typeof text === 'object') text = text.ptr;
  else text = ensureString(text);
  _emscripten_bind_Im_SetClipboardText_1(self, text);
};;

Im.prototype['LoadIniSettingsFromDisk'] = Im.prototype.LoadIniSettingsFromDisk = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ini_filename) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ini_filename && typeof ini_filename === 'object') ini_filename = ini_filename.ptr;
  else ini_filename = ensureString(ini_filename);
  _emscripten_bind_Im_LoadIniSettingsFromDisk_1(self, ini_filename);
};;

Im.prototype['LoadIniSettingsFromMemory'] = Im.prototype.LoadIniSettingsFromMemory = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ini_data, ini_size) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ini_data && typeof ini_data === 'object') ini_data = ini_data.ptr;
  else ini_data = ensureString(ini_data);
  if (ini_size && typeof ini_size === 'object') ini_size = ini_size.ptr;
  if (ini_size === undefined) { _emscripten_bind_Im_LoadIniSettingsFromMemory_1(self, ini_data);  return }
  _emscripten_bind_Im_LoadIniSettingsFromMemory_2(self, ini_data, ini_size);
};;

Im.prototype['SaveIniSettingsToDisk'] = Im.prototype.SaveIniSettingsToDisk = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ini_filename) {
  var self = this.ptr;
  ensureCache.prepare();
  if (ini_filename && typeof ini_filename === 'object') ini_filename = ini_filename.ptr;
  else ini_filename = ensureString(ini_filename);
  _emscripten_bind_Im_SaveIniSettingsToDisk_1(self, ini_filename);
};;

Im.prototype['SaveIniSettingsToMemory'] = Im.prototype.SaveIniSettingsToMemory = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return UTF8ToString(_emscripten_bind_Im_SaveIniSettingsToMemory_0(self));
};;

Im.prototype['DebugTextEncoding'] = Im.prototype.DebugTextEncoding = /** @suppress {undefinedVars, duplicate} @this{Object} */function(text) {
  var self = this.ptr;
  ensureCache.prepare();
  if (text && typeof text === 'object') text = text.ptr;
  else text = ensureString(text);
  _emscripten_bind_Im_DebugTextEncoding_1(self, text);
};;

Im.prototype['DebugCheckVersionAndDataLayout'] = Im.prototype.DebugCheckVersionAndDataLayout = /** @suppress {undefinedVars, duplicate} @this{Object} */function(version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_drawvert, sz_drawidx) {
  var self = this.ptr;
  ensureCache.prepare();
  if (version_str && typeof version_str === 'object') version_str = version_str.ptr;
  else version_str = ensureString(version_str);
  if (sz_io && typeof sz_io === 'object') sz_io = sz_io.ptr;
  if (sz_style && typeof sz_style === 'object') sz_style = sz_style.ptr;
  if (sz_vec2 && typeof sz_vec2 === 'object') sz_vec2 = sz_vec2.ptr;
  if (sz_vec4 && typeof sz_vec4 === 'object') sz_vec4 = sz_vec4.ptr;
  if (sz_drawvert && typeof sz_drawvert === 'object') sz_drawvert = sz_drawvert.ptr;
  if (sz_drawidx && typeof sz_drawidx === 'object') sz_drawidx = sz_drawidx.ptr;
  return !!(_emscripten_bind_Im_DebugCheckVersionAndDataLayout_7(self, version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_drawvert, sz_drawidx));
};;

Im.prototype['MemAlloc'] = Im.prototype.MemAlloc = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  return _emscripten_bind_Im_MemAlloc_1(self, size);
};;

Im.prototype['MemFree'] = Im.prototype.MemFree = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ptr) {
  var self = this.ptr;
  if (ptr && typeof ptr === 'object') ptr = ptr.ptr;
  _emscripten_bind_Im_MemFree_1(self, ptr);
};;

Im.prototype['GetPlatformIO'] = Im.prototype.GetPlatformIO = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Im_GetPlatformIO_0(self), ImGuiPlatformIO);
};;

Im.prototype['UpdatePlatformWindows'] = Im.prototype.UpdatePlatformWindows = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_UpdatePlatformWindows_0(self);
};;

Im.prototype['RenderPlatformWindowsDefault'] = Im.prototype.RenderPlatformWindowsDefault = /** @suppress {undefinedVars, duplicate} @this{Object} */function(platform_render_arg, renderer_render_arg) {
  var self = this.ptr;
  if (platform_render_arg && typeof platform_render_arg === 'object') platform_render_arg = platform_render_arg.ptr;
  if (renderer_render_arg && typeof renderer_render_arg === 'object') renderer_render_arg = renderer_render_arg.ptr;
  if (platform_render_arg === undefined) { _emscripten_bind_Im_RenderPlatformWindowsDefault_0(self);  return }
  if (renderer_render_arg === undefined) { _emscripten_bind_Im_RenderPlatformWindowsDefault_1(self, platform_render_arg);  return }
  _emscripten_bind_Im_RenderPlatformWindowsDefault_2(self, platform_render_arg, renderer_render_arg);
};;

Im.prototype['DestroyPlatformWindows'] = Im.prototype.DestroyPlatformWindows = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_Im_DestroyPlatformWindows_0(self);
};;

Im.prototype['FindViewportByID'] = Im.prototype.FindViewportByID = /** @suppress {undefinedVars, duplicate} @this{Object} */function(id) {
  var self = this.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  return wrapPointer(_emscripten_bind_Im_FindViewportByID_1(self, id), ImGuiViewport);
};;

Im.prototype['FindViewportByPlatformHandle'] = Im.prototype.FindViewportByPlatformHandle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(platform_handle) {
  var self = this.ptr;
  if (platform_handle && typeof platform_handle === 'object') platform_handle = platform_handle.ptr;
  return wrapPointer(_emscripten_bind_Im_FindViewportByPlatformHandle_1(self, platform_handle), ImGuiViewport);
};;

// BoolArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function BoolArray(size) {
  if (size && typeof size === 'object') size = size.ptr;
  this.ptr = _emscripten_bind_BoolArray_BoolArray_1(size);
  getCache(BoolArray)[this.ptr] = this;
};;
BoolArray.prototype = Object.create(WrapperObject.prototype);
BoolArray.prototype.constructor = BoolArray;
BoolArray.prototype.__class__ = BoolArray;
BoolArray.__cache__ = {};
Module['BoolArray'] = BoolArray;

BoolArray.prototype['resize'] = BoolArray.prototype.resize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_BoolArray_resize_1(self, size);
};;

BoolArray.prototype['getValue'] = BoolArray.prototype.getValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return !!(_emscripten_bind_BoolArray_getValue_1(self, index));
};;

BoolArray.prototype['setValue'] = BoolArray.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index, value) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_BoolArray_setValue_2(self, index, value);
};;

BoolArray.prototype['getPointer'] = BoolArray.prototype.getPointer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_BoolArray_getPointer_0(self);
};;

  BoolArray.prototype['get_size'] = BoolArray.prototype.get_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_BoolArray_get_size_0(self);
};
    BoolArray.prototype['set_size'] = BoolArray.prototype.set_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_BoolArray_set_size_1(self, arg0);
};
    Object.defineProperty(BoolArray.prototype, 'size', { get: BoolArray.prototype.get_size, set: BoolArray.prototype.set_size });
  BoolArray.prototype['__destroy__'] = BoolArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_BoolArray___destroy___0(self);
};
// IntArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function IntArray(size) {
  if (size && typeof size === 'object') size = size.ptr;
  this.ptr = _emscripten_bind_IntArray_IntArray_1(size);
  getCache(IntArray)[this.ptr] = this;
};;
IntArray.prototype = Object.create(WrapperObject.prototype);
IntArray.prototype.constructor = IntArray;
IntArray.prototype.__class__ = IntArray;
IntArray.__cache__ = {};
Module['IntArray'] = IntArray;

IntArray.prototype['resize'] = IntArray.prototype.resize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_IntArray_resize_1(self, size);
};;

IntArray.prototype['getValue'] = IntArray.prototype.getValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return _emscripten_bind_IntArray_getValue_1(self, index);
};;

IntArray.prototype['setValue'] = IntArray.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index, value) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_IntArray_setValue_2(self, index, value);
};;

IntArray.prototype['getPointer'] = IntArray.prototype.getPointer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_IntArray_getPointer_0(self);
};;

  IntArray.prototype['get_size'] = IntArray.prototype.get_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_IntArray_get_size_0(self);
};
    IntArray.prototype['set_size'] = IntArray.prototype.set_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_IntArray_set_size_1(self, arg0);
};
    Object.defineProperty(IntArray.prototype, 'size', { get: IntArray.prototype.get_size, set: IntArray.prototype.set_size });
  IntArray.prototype['__destroy__'] = IntArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_IntArray___destroy___0(self);
};
// FloatArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function FloatArray(size) {
  if (size && typeof size === 'object') size = size.ptr;
  this.ptr = _emscripten_bind_FloatArray_FloatArray_1(size);
  getCache(FloatArray)[this.ptr] = this;
};;
FloatArray.prototype = Object.create(WrapperObject.prototype);
FloatArray.prototype.constructor = FloatArray;
FloatArray.prototype.__class__ = FloatArray;
FloatArray.__cache__ = {};
Module['FloatArray'] = FloatArray;

FloatArray.prototype['resize'] = FloatArray.prototype.resize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_FloatArray_resize_1(self, size);
};;

FloatArray.prototype['getValue'] = FloatArray.prototype.getValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return _emscripten_bind_FloatArray_getValue_1(self, index);
};;

FloatArray.prototype['setValue'] = FloatArray.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index, value) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_FloatArray_setValue_2(self, index, value);
};;

FloatArray.prototype['getPointer'] = FloatArray.prototype.getPointer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_FloatArray_getPointer_0(self);
};;

  FloatArray.prototype['get_size'] = FloatArray.prototype.get_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_FloatArray_get_size_0(self);
};
    FloatArray.prototype['set_size'] = FloatArray.prototype.set_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_FloatArray_set_size_1(self, arg0);
};
    Object.defineProperty(FloatArray.prototype, 'size', { get: FloatArray.prototype.get_size, set: FloatArray.prototype.set_size });
  FloatArray.prototype['__destroy__'] = FloatArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_FloatArray___destroy___0(self);
};
// DoubleArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function DoubleArray(size) {
  if (size && typeof size === 'object') size = size.ptr;
  this.ptr = _emscripten_bind_DoubleArray_DoubleArray_1(size);
  getCache(DoubleArray)[this.ptr] = this;
};;
DoubleArray.prototype = Object.create(WrapperObject.prototype);
DoubleArray.prototype.constructor = DoubleArray;
DoubleArray.prototype.__class__ = DoubleArray;
DoubleArray.__cache__ = {};
Module['DoubleArray'] = DoubleArray;

DoubleArray.prototype['resize'] = DoubleArray.prototype.resize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_DoubleArray_resize_1(self, size);
};;

DoubleArray.prototype['getValue'] = DoubleArray.prototype.getValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return _emscripten_bind_DoubleArray_getValue_1(self, index);
};;

DoubleArray.prototype['setValue'] = DoubleArray.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index, value) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_DoubleArray_setValue_2(self, index, value);
};;

DoubleArray.prototype['getPointer'] = DoubleArray.prototype.getPointer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_DoubleArray_getPointer_0(self);
};;

  DoubleArray.prototype['get_size'] = DoubleArray.prototype.get_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_DoubleArray_get_size_0(self);
};
    DoubleArray.prototype['set_size'] = DoubleArray.prototype.set_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_DoubleArray_set_size_1(self, arg0);
};
    Object.defineProperty(DoubleArray.prototype, 'size', { get: DoubleArray.prototype.get_size, set: DoubleArray.prototype.set_size });
  DoubleArray.prototype['__destroy__'] = DoubleArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_DoubleArray___destroy___0(self);
};
// CharArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function CharArray(size) {
  if (size && typeof size === 'object') size = size.ptr;
  this.ptr = _emscripten_bind_CharArray_CharArray_1(size);
  getCache(CharArray)[this.ptr] = this;
};;
CharArray.prototype = Object.create(WrapperObject.prototype);
CharArray.prototype.constructor = CharArray;
CharArray.prototype.__class__ = CharArray;
CharArray.__cache__ = {};
Module['CharArray'] = CharArray;

CharArray.prototype['resize'] = CharArray.prototype.resize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(size) {
  var self = this.ptr;
  if (size && typeof size === 'object') size = size.ptr;
  _emscripten_bind_CharArray_resize_1(self, size);
};;

CharArray.prototype['getValue'] = CharArray.prototype.getValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return _emscripten_bind_CharArray_getValue_1(self, index);
};;

CharArray.prototype['setValue'] = CharArray.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index, value) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_CharArray_setValue_2(self, index, value);
};;

CharArray.prototype['getPointer'] = CharArray.prototype.getPointer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_CharArray_getPointer_0(self);
};;

  CharArray.prototype['get_size'] = CharArray.prototype.get_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_CharArray_get_size_0(self);
};
    CharArray.prototype['set_size'] = CharArray.prototype.set_size = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_CharArray_set_size_1(self, arg0);
};
    Object.defineProperty(CharArray.prototype, 'size', { get: CharArray.prototype.get_size, set: CharArray.prototype.set_size });
  CharArray.prototype['__destroy__'] = CharArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_CharArray___destroy___0(self);
};
// ImHelper
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImHelper() { throw "cannot construct a ImHelper, no constructor in IDL" }
ImHelper.prototype = Object.create(WrapperObject.prototype);
ImHelper.prototype.constructor = ImHelper;
ImHelper.prototype.__class__ = ImHelper;
ImHelper.__cache__ = {};
Module['ImHelper'] = ImHelper;

ImHelper.prototype['memcpyIdx'] = ImHelper.prototype.memcpyIdx = /** @suppress {undefinedVars, duplicate} @this{Object} */function(destination, drawList, num) {
  var self = this.ptr;
  if (destination && typeof destination === 'object') destination = destination.ptr;
  if (drawList && typeof drawList === 'object') drawList = drawList.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  _emscripten_bind_ImHelper_memcpyIdx_3(self, destination, drawList, num);
};;

ImHelper.prototype['memcpyVtx'] = ImHelper.prototype.memcpyVtx = /** @suppress {undefinedVars, duplicate} @this{Object} */function(destination, drawList, num) {
  var self = this.ptr;
  if (destination && typeof destination === 'object') destination = destination.ptr;
  if (drawList && typeof drawList === 'object') drawList = drawList.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  _emscripten_bind_ImHelper_memcpyVtx_3(self, destination, drawList, num);
};;

ImHelper.prototype['memcpyFont'] = ImHelper.prototype.memcpyFont = /** @suppress {undefinedVars, duplicate} @this{Object} */function(io, pixelBuffer, widthData, heightData, bytesPerPixel) {
  var self = this.ptr;
  ensureCache.prepare();
  if (io && typeof io === 'object') io = io.ptr;
  if (pixelBuffer && typeof pixelBuffer === 'object') pixelBuffer = pixelBuffer.ptr;
  if (typeof widthData == 'object') { widthData = ensureInt32(widthData); }
  if (typeof heightData == 'object') { heightData = ensureInt32(heightData); }
  if (typeof bytesPerPixel == 'object') { bytesPerPixel = ensureInt32(bytesPerPixel); }
  _emscripten_bind_ImHelper_memcpyFont_5(self, io, pixelBuffer, widthData, heightData, bytesPerPixel);
};;

ImHelper.prototype['getTextureId'] = ImHelper.prototype.getTextureId = /** @suppress {undefinedVars, duplicate} @this{Object} */function(imDrawCmd) {
  var self = this.ptr;
  if (imDrawCmd && typeof imDrawCmd === 'object') imDrawCmd = imDrawCmd.ptr;
  return _emscripten_bind_ImHelper_getTextureId_1(self, imDrawCmd);
};;

ImHelper.prototype['setIniFilename'] = ImHelper.prototype.setIniFilename = /** @suppress {undefinedVars, duplicate} @this{Object} */function(io, fileName) {
  var self = this.ptr;
  ensureCache.prepare();
  if (io && typeof io === 'object') io = io.ptr;
  if (typeof fileName == 'object') { fileName = ensureInt8(fileName); }
  _emscripten_bind_ImHelper_setIniFilename_2(self, io, fileName);
};;

ImHelper.prototype['removeIniFilename'] = ImHelper.prototype.removeIniFilename = /** @suppress {undefinedVars, duplicate} @this{Object} */function(io) {
  var self = this.ptr;
  if (io && typeof io === 'object') io = io.ptr;
  _emscripten_bind_ImHelper_removeIniFilename_1(self, io);
};;

  ImHelper.prototype['__destroy__'] = ImHelper.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImHelper___destroy___0(self);
};
// ImVec2
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImVec2(x, y) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (x === undefined) { this.ptr = _emscripten_bind_ImVec2_ImVec2_0(); getCache(ImVec2)[this.ptr] = this;return }
  if (y === undefined) { this.ptr = _emscripten_bind_ImVec2_ImVec2_1(x); getCache(ImVec2)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ImVec2_ImVec2_2(x, y);
  getCache(ImVec2)[this.ptr] = this;
};;
ImVec2.prototype = Object.create(WrapperObject.prototype);
ImVec2.prototype.constructor = ImVec2;
ImVec2.prototype.__class__ = ImVec2;
ImVec2.__cache__ = {};
Module['ImVec2'] = ImVec2;

  ImVec2.prototype['get_x'] = ImVec2.prototype.get_x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec2_get_x_0(self);
};
    ImVec2.prototype['set_x'] = ImVec2.prototype.set_x = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec2_set_x_1(self, arg0);
};
    Object.defineProperty(ImVec2.prototype, 'x', { get: ImVec2.prototype.get_x, set: ImVec2.prototype.set_x });
  ImVec2.prototype['get_y'] = ImVec2.prototype.get_y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec2_get_y_0(self);
};
    ImVec2.prototype['set_y'] = ImVec2.prototype.set_y = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec2_set_y_1(self, arg0);
};
    Object.defineProperty(ImVec2.prototype, 'y', { get: ImVec2.prototype.get_y, set: ImVec2.prototype.set_y });
  ImVec2.prototype['__destroy__'] = ImVec2.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImVec2___destroy___0(self);
};
// ImVec4
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImVec4(x, y, z, w) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  if (x === undefined) { this.ptr = _emscripten_bind_ImVec4_ImVec4_0(); getCache(ImVec4)[this.ptr] = this;return }
  if (y === undefined) { this.ptr = _emscripten_bind_ImVec4_ImVec4_1(x); getCache(ImVec4)[this.ptr] = this;return }
  if (z === undefined) { this.ptr = _emscripten_bind_ImVec4_ImVec4_2(x, y); getCache(ImVec4)[this.ptr] = this;return }
  if (w === undefined) { this.ptr = _emscripten_bind_ImVec4_ImVec4_3(x, y, z); getCache(ImVec4)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ImVec4_ImVec4_4(x, y, z, w);
  getCache(ImVec4)[this.ptr] = this;
};;
ImVec4.prototype = Object.create(WrapperObject.prototype);
ImVec4.prototype.constructor = ImVec4;
ImVec4.prototype.__class__ = ImVec4;
ImVec4.__cache__ = {};
Module['ImVec4'] = ImVec4;

  ImVec4.prototype['get_x'] = ImVec4.prototype.get_x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec4_get_x_0(self);
};
    ImVec4.prototype['set_x'] = ImVec4.prototype.set_x = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec4_set_x_1(self, arg0);
};
    Object.defineProperty(ImVec4.prototype, 'x', { get: ImVec4.prototype.get_x, set: ImVec4.prototype.set_x });
  ImVec4.prototype['get_y'] = ImVec4.prototype.get_y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec4_get_y_0(self);
};
    ImVec4.prototype['set_y'] = ImVec4.prototype.set_y = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec4_set_y_1(self, arg0);
};
    Object.defineProperty(ImVec4.prototype, 'y', { get: ImVec4.prototype.get_y, set: ImVec4.prototype.set_y });
  ImVec4.prototype['get_z'] = ImVec4.prototype.get_z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec4_get_z_0(self);
};
    ImVec4.prototype['set_z'] = ImVec4.prototype.set_z = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec4_set_z_1(self, arg0);
};
    Object.defineProperty(ImVec4.prototype, 'z', { get: ImVec4.prototype.get_z, set: ImVec4.prototype.set_z });
  ImVec4.prototype['get_w'] = ImVec4.prototype.get_w = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImVec4_get_w_0(self);
};
    ImVec4.prototype['set_w'] = ImVec4.prototype.set_w = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImVec4_set_w_1(self, arg0);
};
    Object.defineProperty(ImVec4.prototype, 'w', { get: ImVec4.prototype.get_w, set: ImVec4.prototype.set_w });
  ImVec4.prototype['__destroy__'] = ImVec4.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImVec4___destroy___0(self);
};
// VecCmdBuffer
/** @suppress {undefinedVars, duplicate} @this{Object} */function VecCmdBuffer() { throw "cannot construct a VecCmdBuffer, no constructor in IDL" }
VecCmdBuffer.prototype = Object.create(WrapperObject.prototype);
VecCmdBuffer.prototype.constructor = VecCmdBuffer;
VecCmdBuffer.prototype.__class__ = VecCmdBuffer;
VecCmdBuffer.__cache__ = {};
Module['VecCmdBuffer'] = VecCmdBuffer;

VecCmdBuffer.prototype['getData'] = VecCmdBuffer.prototype.getData = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_VecCmdBuffer_getData_1(self, index), ImDrawCmd);
};;

VecCmdBuffer.prototype['size'] = VecCmdBuffer.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_VecCmdBuffer_size_0(self);
};;

  VecCmdBuffer.prototype['__destroy__'] = VecCmdBuffer.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_VecCmdBuffer___destroy___0(self);
};
// VecIdxBuffer
/** @suppress {undefinedVars, duplicate} @this{Object} */function VecIdxBuffer() { throw "cannot construct a VecIdxBuffer, no constructor in IDL" }
VecIdxBuffer.prototype = Object.create(WrapperObject.prototype);
VecIdxBuffer.prototype.constructor = VecIdxBuffer;
VecIdxBuffer.prototype.__class__ = VecIdxBuffer;
VecIdxBuffer.__cache__ = {};
Module['VecIdxBuffer'] = VecIdxBuffer;

VecIdxBuffer.prototype['size'] = VecIdxBuffer.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_VecIdxBuffer_size_0(self);
};;

  VecIdxBuffer.prototype['__destroy__'] = VecIdxBuffer.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_VecIdxBuffer___destroy___0(self);
};
// VecVtxBuffer
/** @suppress {undefinedVars, duplicate} @this{Object} */function VecVtxBuffer() { throw "cannot construct a VecVtxBuffer, no constructor in IDL" }
VecVtxBuffer.prototype = Object.create(WrapperObject.prototype);
VecVtxBuffer.prototype.constructor = VecVtxBuffer;
VecVtxBuffer.prototype.__class__ = VecVtxBuffer;
VecVtxBuffer.__cache__ = {};
Module['VecVtxBuffer'] = VecVtxBuffer;

VecVtxBuffer.prototype['size'] = VecVtxBuffer.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_VecVtxBuffer_size_0(self);
};;

  VecVtxBuffer.prototype['__destroy__'] = VecVtxBuffer.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_VecVtxBuffer___destroy___0(self);
};
// ImDrawCmd
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImDrawCmd() { throw "cannot construct a ImDrawCmd, no constructor in IDL" }
ImDrawCmd.prototype = Object.create(WrapperObject.prototype);
ImDrawCmd.prototype.constructor = ImDrawCmd;
ImDrawCmd.prototype.__class__ = ImDrawCmd;
ImDrawCmd.__cache__ = {};
Module['ImDrawCmd'] = ImDrawCmd;

  ImDrawCmd.prototype['get_ClipRect'] = ImDrawCmd.prototype.get_ClipRect = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawCmd_get_ClipRect_0(self), ImVec4);
};
    ImDrawCmd.prototype['set_ClipRect'] = ImDrawCmd.prototype.set_ClipRect = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawCmd_set_ClipRect_1(self, arg0);
};
    Object.defineProperty(ImDrawCmd.prototype, 'ClipRect', { get: ImDrawCmd.prototype.get_ClipRect, set: ImDrawCmd.prototype.set_ClipRect });
  ImDrawCmd.prototype['get_VtxOffset'] = ImDrawCmd.prototype.get_VtxOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawCmd_get_VtxOffset_0(self);
};
    ImDrawCmd.prototype['set_VtxOffset'] = ImDrawCmd.prototype.set_VtxOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawCmd_set_VtxOffset_1(self, arg0);
};
    Object.defineProperty(ImDrawCmd.prototype, 'VtxOffset', { get: ImDrawCmd.prototype.get_VtxOffset, set: ImDrawCmd.prototype.set_VtxOffset });
  ImDrawCmd.prototype['get_IdxOffset'] = ImDrawCmd.prototype.get_IdxOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawCmd_get_IdxOffset_0(self);
};
    ImDrawCmd.prototype['set_IdxOffset'] = ImDrawCmd.prototype.set_IdxOffset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawCmd_set_IdxOffset_1(self, arg0);
};
    Object.defineProperty(ImDrawCmd.prototype, 'IdxOffset', { get: ImDrawCmd.prototype.get_IdxOffset, set: ImDrawCmd.prototype.set_IdxOffset });
  ImDrawCmd.prototype['get_ElemCount'] = ImDrawCmd.prototype.get_ElemCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawCmd_get_ElemCount_0(self);
};
    ImDrawCmd.prototype['set_ElemCount'] = ImDrawCmd.prototype.set_ElemCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawCmd_set_ElemCount_1(self, arg0);
};
    Object.defineProperty(ImDrawCmd.prototype, 'ElemCount', { get: ImDrawCmd.prototype.get_ElemCount, set: ImDrawCmd.prototype.set_ElemCount });
  ImDrawCmd.prototype['get_TextureId'] = ImDrawCmd.prototype.get_TextureId = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawCmd_get_TextureId_0(self);
};
    ImDrawCmd.prototype['set_TextureId'] = ImDrawCmd.prototype.set_TextureId = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawCmd_set_TextureId_1(self, arg0);
};
    Object.defineProperty(ImDrawCmd.prototype, 'TextureId', { get: ImDrawCmd.prototype.get_TextureId, set: ImDrawCmd.prototype.set_TextureId });
  ImDrawCmd.prototype['__destroy__'] = ImDrawCmd.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImDrawCmd___destroy___0(self);
};
// ImDrawVert
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImDrawVert() { throw "cannot construct a ImDrawVert, no constructor in IDL" }
ImDrawVert.prototype = Object.create(WrapperObject.prototype);
ImDrawVert.prototype.constructor = ImDrawVert;
ImDrawVert.prototype.__class__ = ImDrawVert;
ImDrawVert.__cache__ = {};
Module['ImDrawVert'] = ImDrawVert;

  ImDrawVert.prototype['get_pos'] = ImDrawVert.prototype.get_pos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawVert_get_pos_0(self), ImVec2);
};
    ImDrawVert.prototype['set_pos'] = ImDrawVert.prototype.set_pos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawVert_set_pos_1(self, arg0);
};
    Object.defineProperty(ImDrawVert.prototype, 'pos', { get: ImDrawVert.prototype.get_pos, set: ImDrawVert.prototype.set_pos });
  ImDrawVert.prototype['get_uv'] = ImDrawVert.prototype.get_uv = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawVert_get_uv_0(self), ImVec2);
};
    ImDrawVert.prototype['set_uv'] = ImDrawVert.prototype.set_uv = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawVert_set_uv_1(self, arg0);
};
    Object.defineProperty(ImDrawVert.prototype, 'uv', { get: ImDrawVert.prototype.get_uv, set: ImDrawVert.prototype.set_uv });
  ImDrawVert.prototype['get_col'] = ImDrawVert.prototype.get_col = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawVert_get_col_0(self);
};
    ImDrawVert.prototype['set_col'] = ImDrawVert.prototype.set_col = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawVert_set_col_1(self, arg0);
};
    Object.defineProperty(ImDrawVert.prototype, 'col', { get: ImDrawVert.prototype.get_col, set: ImDrawVert.prototype.set_col });
  ImDrawVert.prototype['__destroy__'] = ImDrawVert.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImDrawVert___destroy___0(self);
};
// ImDrawData
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImDrawData() { throw "cannot construct a ImDrawData, no constructor in IDL" }
ImDrawData.prototype = Object.create(WrapperObject.prototype);
ImDrawData.prototype.constructor = ImDrawData;
ImDrawData.prototype.__class__ = ImDrawData;
ImDrawData.__cache__ = {};
Module['ImDrawData'] = ImDrawData;

  ImDrawData.prototype['get_CmdListsCount'] = ImDrawData.prototype.get_CmdListsCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawData_get_CmdListsCount_0(self);
};
    ImDrawData.prototype['set_CmdListsCount'] = ImDrawData.prototype.set_CmdListsCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_CmdListsCount_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'CmdListsCount', { get: ImDrawData.prototype.get_CmdListsCount, set: ImDrawData.prototype.set_CmdListsCount });
  ImDrawData.prototype['get_TotalIdxCount'] = ImDrawData.prototype.get_TotalIdxCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawData_get_TotalIdxCount_0(self);
};
    ImDrawData.prototype['set_TotalIdxCount'] = ImDrawData.prototype.set_TotalIdxCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_TotalIdxCount_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'TotalIdxCount', { get: ImDrawData.prototype.get_TotalIdxCount, set: ImDrawData.prototype.set_TotalIdxCount });
  ImDrawData.prototype['get_TotalVtxCount'] = ImDrawData.prototype.get_TotalVtxCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImDrawData_get_TotalVtxCount_0(self);
};
    ImDrawData.prototype['set_TotalVtxCount'] = ImDrawData.prototype.set_TotalVtxCount = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_TotalVtxCount_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'TotalVtxCount', { get: ImDrawData.prototype.get_TotalVtxCount, set: ImDrawData.prototype.set_TotalVtxCount });
  ImDrawData.prototype['get_CmdLists'] = ImDrawData.prototype.get_CmdLists = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ImDrawData_get_CmdLists_1(self, arg0), ImDrawList);
};
    ImDrawData.prototype['set_CmdLists'] = ImDrawData.prototype.set_CmdLists = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0, arg1) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  _emscripten_bind_ImDrawData_set_CmdLists_2(self, arg0, arg1);
};
    Object.defineProperty(ImDrawData.prototype, 'CmdLists', { get: ImDrawData.prototype.get_CmdLists, set: ImDrawData.prototype.set_CmdLists });
  ImDrawData.prototype['get_DisplayPos'] = ImDrawData.prototype.get_DisplayPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawData_get_DisplayPos_0(self), ImVec2);
};
    ImDrawData.prototype['set_DisplayPos'] = ImDrawData.prototype.set_DisplayPos = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_DisplayPos_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'DisplayPos', { get: ImDrawData.prototype.get_DisplayPos, set: ImDrawData.prototype.set_DisplayPos });
  ImDrawData.prototype['get_DisplaySize'] = ImDrawData.prototype.get_DisplaySize = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawData_get_DisplaySize_0(self), ImVec2);
};
    ImDrawData.prototype['set_DisplaySize'] = ImDrawData.prototype.set_DisplaySize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_DisplaySize_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'DisplaySize', { get: ImDrawData.prototype.get_DisplaySize, set: ImDrawData.prototype.set_DisplaySize });
  ImDrawData.prototype['get_FramebufferScale'] = ImDrawData.prototype.get_FramebufferScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawData_get_FramebufferScale_0(self), ImVec2);
};
    ImDrawData.prototype['set_FramebufferScale'] = ImDrawData.prototype.set_FramebufferScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawData_set_FramebufferScale_1(self, arg0);
};
    Object.defineProperty(ImDrawData.prototype, 'FramebufferScale', { get: ImDrawData.prototype.get_FramebufferScale, set: ImDrawData.prototype.set_FramebufferScale });
  ImDrawData.prototype['__destroy__'] = ImDrawData.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImDrawData___destroy___0(self);
};
// ImDrawList
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImDrawList() { throw "cannot construct a ImDrawList, no constructor in IDL" }
ImDrawList.prototype = Object.create(WrapperObject.prototype);
ImDrawList.prototype.constructor = ImDrawList;
ImDrawList.prototype.__class__ = ImDrawList;
ImDrawList.__cache__ = {};
Module['ImDrawList'] = ImDrawList;

  ImDrawList.prototype['get_CmdBuffer'] = ImDrawList.prototype.get_CmdBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawList_get_CmdBuffer_0(self), VecCmdBuffer);
};
    ImDrawList.prototype['set_CmdBuffer'] = ImDrawList.prototype.set_CmdBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawList_set_CmdBuffer_1(self, arg0);
};
    Object.defineProperty(ImDrawList.prototype, 'CmdBuffer', { get: ImDrawList.prototype.get_CmdBuffer, set: ImDrawList.prototype.set_CmdBuffer });
  ImDrawList.prototype['get_IdxBuffer'] = ImDrawList.prototype.get_IdxBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawList_get_IdxBuffer_0(self), VecIdxBuffer);
};
    ImDrawList.prototype['set_IdxBuffer'] = ImDrawList.prototype.set_IdxBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawList_set_IdxBuffer_1(self, arg0);
};
    Object.defineProperty(ImDrawList.prototype, 'IdxBuffer', { get: ImDrawList.prototype.get_IdxBuffer, set: ImDrawList.prototype.set_IdxBuffer });
  ImDrawList.prototype['get_VtxBuffer'] = ImDrawList.prototype.get_VtxBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImDrawList_get_VtxBuffer_0(self), VecVtxBuffer);
};
    ImDrawList.prototype['set_VtxBuffer'] = ImDrawList.prototype.set_VtxBuffer = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImDrawList_set_VtxBuffer_1(self, arg0);
};
    Object.defineProperty(ImDrawList.prototype, 'VtxBuffer', { get: ImDrawList.prototype.get_VtxBuffer, set: ImDrawList.prototype.set_VtxBuffer });
  ImDrawList.prototype['__destroy__'] = ImDrawList.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImDrawList___destroy___0(self);
};
// ImGuiIO
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiIO() { throw "cannot construct a ImGuiIO, no constructor in IDL" }
ImGuiIO.prototype = Object.create(WrapperObject.prototype);
ImGuiIO.prototype.constructor = ImGuiIO;
ImGuiIO.prototype.__class__ = ImGuiIO;
ImGuiIO.__cache__ = {};
Module['ImGuiIO'] = ImGuiIO;

ImGuiIO.prototype['AddMouseWheelEvent'] = ImGuiIO.prototype.AddMouseWheelEvent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(wheel_x, wheel_y) {
  var self = this.ptr;
  if (wheel_x && typeof wheel_x === 'object') wheel_x = wheel_x.ptr;
  if (wheel_y && typeof wheel_y === 'object') wheel_y = wheel_y.ptr;
  _emscripten_bind_ImGuiIO_AddMouseWheelEvent_2(self, wheel_x, wheel_y);
};;

ImGuiIO.prototype['AddMouseButtonEvent'] = ImGuiIO.prototype.AddMouseButtonEvent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(button, down) {
  var self = this.ptr;
  if (button && typeof button === 'object') button = button.ptr;
  if (down && typeof down === 'object') down = down.ptr;
  _emscripten_bind_ImGuiIO_AddMouseButtonEvent_2(self, button, down);
};;

ImGuiIO.prototype['AddMousePosEvent'] = ImGuiIO.prototype.AddMousePosEvent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x, y) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _emscripten_bind_ImGuiIO_AddMousePosEvent_2(self, x, y);
};;

ImGuiIO.prototype['AddKeyEvent'] = ImGuiIO.prototype.AddKeyEvent = /** @suppress {undefinedVars, duplicate} @this{Object} */function(key, down) {
  var self = this.ptr;
  if (key && typeof key === 'object') key = key.ptr;
  if (down && typeof down === 'object') down = down.ptr;
  _emscripten_bind_ImGuiIO_AddKeyEvent_2(self, key, down);
};;

ImGuiIO.prototype['AddInputCharacter'] = ImGuiIO.prototype.AddInputCharacter = /** @suppress {undefinedVars, duplicate} @this{Object} */function(c) {
  var self = this.ptr;
  if (c && typeof c === 'object') c = c.ptr;
  _emscripten_bind_ImGuiIO_AddInputCharacter_1(self, c);
};;

  ImGuiIO.prototype['get_WantCaptureMouse'] = ImGuiIO.prototype.get_WantCaptureMouse = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImGuiIO_get_WantCaptureMouse_0(self));
};
    ImGuiIO.prototype['set_WantCaptureMouse'] = ImGuiIO.prototype.set_WantCaptureMouse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_WantCaptureMouse_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'WantCaptureMouse', { get: ImGuiIO.prototype.get_WantCaptureMouse, set: ImGuiIO.prototype.set_WantCaptureMouse });
  ImGuiIO.prototype['get_DisplaySize'] = ImGuiIO.prototype.get_DisplaySize = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImGuiIO_get_DisplaySize_0(self), ImVec2);
};
    ImGuiIO.prototype['set_DisplaySize'] = ImGuiIO.prototype.set_DisplaySize = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_DisplaySize_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'DisplaySize', { get: ImGuiIO.prototype.get_DisplaySize, set: ImGuiIO.prototype.set_DisplaySize });
  ImGuiIO.prototype['get_DisplayFramebufferScale'] = ImGuiIO.prototype.get_DisplayFramebufferScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImGuiIO_get_DisplayFramebufferScale_0(self), ImVec2);
};
    ImGuiIO.prototype['set_DisplayFramebufferScale'] = ImGuiIO.prototype.set_DisplayFramebufferScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_DisplayFramebufferScale_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'DisplayFramebufferScale', { get: ImGuiIO.prototype.get_DisplayFramebufferScale, set: ImGuiIO.prototype.set_DisplayFramebufferScale });
  ImGuiIO.prototype['get_DeltaTime'] = ImGuiIO.prototype.get_DeltaTime = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImGuiIO_get_DeltaTime_0(self);
};
    ImGuiIO.prototype['set_DeltaTime'] = ImGuiIO.prototype.set_DeltaTime = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_DeltaTime_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'DeltaTime', { get: ImGuiIO.prototype.get_DeltaTime, set: ImGuiIO.prototype.set_DeltaTime });
  ImGuiIO.prototype['get_Fonts'] = ImGuiIO.prototype.get_Fonts = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImGuiIO_get_Fonts_0(self), ImFontAtlas);
};
    ImGuiIO.prototype['set_Fonts'] = ImGuiIO.prototype.set_Fonts = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_Fonts_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'Fonts', { get: ImGuiIO.prototype.get_Fonts, set: ImGuiIO.prototype.set_Fonts });
  ImGuiIO.prototype['get_FontGlobalScale'] = ImGuiIO.prototype.get_FontGlobalScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImGuiIO_get_FontGlobalScale_0(self);
};
    ImGuiIO.prototype['set_FontGlobalScale'] = ImGuiIO.prototype.set_FontGlobalScale = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_FontGlobalScale_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'FontGlobalScale', { get: ImGuiIO.prototype.get_FontGlobalScale, set: ImGuiIO.prototype.set_FontGlobalScale });
  ImGuiIO.prototype['get_ConfigDockingNoSplit'] = ImGuiIO.prototype.get_ConfigDockingNoSplit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImGuiIO_get_ConfigDockingNoSplit_0(self));
};
    ImGuiIO.prototype['set_ConfigDockingNoSplit'] = ImGuiIO.prototype.set_ConfigDockingNoSplit = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_ConfigDockingNoSplit_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'ConfigDockingNoSplit', { get: ImGuiIO.prototype.get_ConfigDockingNoSplit, set: ImGuiIO.prototype.set_ConfigDockingNoSplit });
  ImGuiIO.prototype['get_ConfigDockingWithShift'] = ImGuiIO.prototype.get_ConfigDockingWithShift = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImGuiIO_get_ConfigDockingWithShift_0(self));
};
    ImGuiIO.prototype['set_ConfigDockingWithShift'] = ImGuiIO.prototype.set_ConfigDockingWithShift = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_ConfigDockingWithShift_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'ConfigDockingWithShift', { get: ImGuiIO.prototype.get_ConfigDockingWithShift, set: ImGuiIO.prototype.set_ConfigDockingWithShift });
  ImGuiIO.prototype['get_ConfigDockingAlwaysTabBar'] = ImGuiIO.prototype.get_ConfigDockingAlwaysTabBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImGuiIO_get_ConfigDockingAlwaysTabBar_0(self));
};
    ImGuiIO.prototype['set_ConfigDockingAlwaysTabBar'] = ImGuiIO.prototype.set_ConfigDockingAlwaysTabBar = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_ConfigDockingAlwaysTabBar_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'ConfigDockingAlwaysTabBar', { get: ImGuiIO.prototype.get_ConfigDockingAlwaysTabBar, set: ImGuiIO.prototype.set_ConfigDockingAlwaysTabBar });
  ImGuiIO.prototype['get_ConfigDockingTransparentPayload'] = ImGuiIO.prototype.get_ConfigDockingTransparentPayload = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImGuiIO_get_ConfigDockingTransparentPayload_0(self));
};
    ImGuiIO.prototype['set_ConfigDockingTransparentPayload'] = ImGuiIO.prototype.set_ConfigDockingTransparentPayload = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_ConfigDockingTransparentPayload_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'ConfigDockingTransparentPayload', { get: ImGuiIO.prototype.get_ConfigDockingTransparentPayload, set: ImGuiIO.prototype.set_ConfigDockingTransparentPayload });
  ImGuiIO.prototype['get_ConfigFlags'] = ImGuiIO.prototype.get_ConfigFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImGuiIO_get_ConfigFlags_0(self);
};
    ImGuiIO.prototype['set_ConfigFlags'] = ImGuiIO.prototype.set_ConfigFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImGuiIO_set_ConfigFlags_1(self, arg0);
};
    Object.defineProperty(ImGuiIO.prototype, 'ConfigFlags', { get: ImGuiIO.prototype.get_ConfigFlags, set: ImGuiIO.prototype.set_ConfigFlags });
  ImGuiIO.prototype['__destroy__'] = ImGuiIO.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiIO___destroy___0(self);
};
// ImFontAtlas
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImFontAtlas() { throw "cannot construct a ImFontAtlas, no constructor in IDL" }
ImFontAtlas.prototype = Object.create(WrapperObject.prototype);
ImFontAtlas.prototype.constructor = ImFontAtlas;
ImFontAtlas.prototype.__class__ = ImFontAtlas;
ImFontAtlas.__cache__ = {};
Module['ImFontAtlas'] = ImFontAtlas;

  ImFontAtlas.prototype['get_TexID'] = ImFontAtlas.prototype.get_TexID = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ImFontAtlas_get_TexID_0(self);
};
    ImFontAtlas.prototype['set_TexID'] = ImFontAtlas.prototype.set_TexID = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ImFontAtlas_set_TexID_1(self, arg0);
};
    Object.defineProperty(ImFontAtlas.prototype, 'TexID', { get: ImFontAtlas.prototype.get_TexID, set: ImFontAtlas.prototype.set_TexID });
  ImFontAtlas.prototype['__destroy__'] = ImFontAtlas.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImFontAtlas___destroy___0(self);
};
// ImFont
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImFont() { throw "cannot construct a ImFont, no constructor in IDL" }
ImFont.prototype = Object.create(WrapperObject.prototype);
ImFont.prototype.constructor = ImFont;
ImFont.prototype.__class__ = ImFont;
ImFont.__cache__ = {};
Module['ImFont'] = ImFont;

  ImFont.prototype['__destroy__'] = ImFont.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImFont___destroy___0(self);
};
// ImGuiStyle
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiStyle() { throw "cannot construct a ImGuiStyle, no constructor in IDL" }
ImGuiStyle.prototype = Object.create(WrapperObject.prototype);
ImGuiStyle.prototype.constructor = ImGuiStyle;
ImGuiStyle.prototype.__class__ = ImGuiStyle;
ImGuiStyle.__cache__ = {};
Module['ImGuiStyle'] = ImGuiStyle;

  ImGuiStyle.prototype['__destroy__'] = ImGuiStyle.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiStyle___destroy___0(self);
};
// ImGuiViewport
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiViewport() { throw "cannot construct a ImGuiViewport, no constructor in IDL" }
ImGuiViewport.prototype = Object.create(WrapperObject.prototype);
ImGuiViewport.prototype.constructor = ImGuiViewport;
ImGuiViewport.prototype.__class__ = ImGuiViewport;
ImGuiViewport.__cache__ = {};
Module['ImGuiViewport'] = ImGuiViewport;

  ImGuiViewport.prototype['__destroy__'] = ImGuiViewport.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiViewport___destroy___0(self);
};
// ImGuiTableSortSpecs
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiTableSortSpecs() { throw "cannot construct a ImGuiTableSortSpecs, no constructor in IDL" }
ImGuiTableSortSpecs.prototype = Object.create(WrapperObject.prototype);
ImGuiTableSortSpecs.prototype.constructor = ImGuiTableSortSpecs;
ImGuiTableSortSpecs.prototype.__class__ = ImGuiTableSortSpecs;
ImGuiTableSortSpecs.__cache__ = {};
Module['ImGuiTableSortSpecs'] = ImGuiTableSortSpecs;

  ImGuiTableSortSpecs.prototype['__destroy__'] = ImGuiTableSortSpecs.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiTableSortSpecs___destroy___0(self);
};
// ImGuiWindowClass
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiWindowClass() { throw "cannot construct a ImGuiWindowClass, no constructor in IDL" }
ImGuiWindowClass.prototype = Object.create(WrapperObject.prototype);
ImGuiWindowClass.prototype.constructor = ImGuiWindowClass;
ImGuiWindowClass.prototype.__class__ = ImGuiWindowClass;
ImGuiWindowClass.__cache__ = {};
Module['ImGuiWindowClass'] = ImGuiWindowClass;

  ImGuiWindowClass.prototype['__destroy__'] = ImGuiWindowClass.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiWindowClass___destroy___0(self);
};
// ImGuiPayload
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiPayload() { throw "cannot construct a ImGuiPayload, no constructor in IDL" }
ImGuiPayload.prototype = Object.create(WrapperObject.prototype);
ImGuiPayload.prototype.constructor = ImGuiPayload;
ImGuiPayload.prototype.__class__ = ImGuiPayload;
ImGuiPayload.__cache__ = {};
Module['ImGuiPayload'] = ImGuiPayload;

  ImGuiPayload.prototype['__destroy__'] = ImGuiPayload.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiPayload___destroy___0(self);
};
// ImDrawListSharedData
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImDrawListSharedData() { throw "cannot construct a ImDrawListSharedData, no constructor in IDL" }
ImDrawListSharedData.prototype = Object.create(WrapperObject.prototype);
ImDrawListSharedData.prototype.constructor = ImDrawListSharedData;
ImDrawListSharedData.prototype.__class__ = ImDrawListSharedData;
ImDrawListSharedData.__cache__ = {};
Module['ImDrawListSharedData'] = ImDrawListSharedData;

  ImDrawListSharedData.prototype['__destroy__'] = ImDrawListSharedData.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImDrawListSharedData___destroy___0(self);
};
// ImGuiStorage
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiStorage() { throw "cannot construct a ImGuiStorage, no constructor in IDL" }
ImGuiStorage.prototype = Object.create(WrapperObject.prototype);
ImGuiStorage.prototype.constructor = ImGuiStorage;
ImGuiStorage.prototype.__class__ = ImGuiStorage;
ImGuiStorage.__cache__ = {};
Module['ImGuiStorage'] = ImGuiStorage;

  ImGuiStorage.prototype['__destroy__'] = ImGuiStorage.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiStorage___destroy___0(self);
};
// ImGuiPlatformIO
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiPlatformIO() { throw "cannot construct a ImGuiPlatformIO, no constructor in IDL" }
ImGuiPlatformIO.prototype = Object.create(WrapperObject.prototype);
ImGuiPlatformIO.prototype.constructor = ImGuiPlatformIO;
ImGuiPlatformIO.prototype.__class__ = ImGuiPlatformIO;
ImGuiPlatformIO.__cache__ = {};
Module['ImGuiPlatformIO'] = ImGuiPlatformIO;

  ImGuiPlatformIO.prototype['__destroy__'] = ImGuiPlatformIO.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ImGuiPlatformIO___destroy___0(self);
};
// ImGuiContext
/** @suppress {undefinedVars, duplicate} @this{Object} */function ImGuiContext() { throw "cannot construct a ImGuiContext, no constructor in IDL" }
ImGuiContext.prototype = Object.create(WrapperObject.prototype);
ImGuiContext.prototype.constructor = ImGuiContext;
ImGuiContext.prototype.__class__ = ImGuiContext;
ImGuiContext.__cache__ = {};
Module['ImGuiContext'] = ImGuiContext;

(function() {
  function setupEnums() {
    

    // ImGuiKey

    Module['ImGuiKey_None'] = _emscripten_enum_ImGuiKey_ImGuiKey_None();

  }
  if (runtimeInitialized) setupEnums();
  else addOnInit(setupEnums);
})();


// end include: D:\Dev\Projects\java\jDear-imgui\imgui\imgui-cpp\imgui-cpp\build\emscripten\glue.js


  return ImGui.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = ImGui;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return ImGui; });
else if (typeof exports === 'object')
  exports["ImGui"] = ImGui;
async function asyncCall() {
	window.ImGui = await ImGui();
}

asyncCall();