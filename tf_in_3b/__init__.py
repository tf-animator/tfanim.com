# --- Initial boilerplate ---
import bpy

class TFin3BSettingsAndState(bpy.types.PropertyGroup):
    lmb:  bpy.props.PointerProperty(name='GPencil', type=bpy.types.Object, poll=lambda self, obj: obj.type=='GREASEPENCIL')
    rmb: bpy.props.PointerProperty(name='Mesh',    type=bpy.types.Object, poll=lambda self, obj: obj.type=='MESH'        )
    mmb: bpy.props.PointerProperty(name='Mesh',    type=bpy.types.Object, poll=lambda self, obj: obj.type=='MESH'        )

    # State
    playback: bpy.props.BoolProperty(name='playback')
z
# So I don't have to type "bpy.context.scene.tf_in_3b" all the time
S = type('SettingsAndStateAccessorThingy', (), {
    '__setattr__': lambda self, k, v: setattr(bpy.context.scene.tf_in_3b, k, v),
    '__getattr__': lambda self, k:    getattr(bpy.context.scene.tf_in_3b, k   ),
    '__getitem__': lambda self, k:    getattr(bpy.context.scene.tf_in_3b, k   ),
    '__call__':    lambda self:               bpy.context.scene.tf_in_3b
})()
# --- End initial boilerplate ---

# === Cutstom Transform operator ===
class VIEW3D_OT_super_transform(bpy.types.Operator):
    bl_idname = 'view3d.super_transform'
    bl_label = 'Fast Transform'
    bl_options = {'REGISTER', 'MODAL_PRIORITY'}

    def invoke(self,C,ev):
        running_modals = [op.bl_idname for op in C.window.modal_operators]
        if (C.space_data.type != 'VIEW_3D') or ('VIEW3D_OT_super_transform' in running_modals): return {'FINISHED'}
        self.lmb = True
        self.rmb = False
        self.mmb = False
        if C.mode == 'POSE': bpy.ops.view3d.select(location=(ev.mouse_region_x,ev.mouse_region_y)) # Solo-select is more useful in pose mode.
        C.window_manager.modal_handler_add(self)
        return {'RUNNING_MODAL'}

    def modal(self,C,ev):
        if ev.type in {'LEFTMOUSE','RIGHTMOUSE','BUTTON4MOUSE'}: print(ev.type, ev.value)

        running_modals = [op.bl_idname for op in C.window.modal_operators]
        translate_running = "TRANSFORM_OT_translate" in running_modals
        trackball_running = "TRANSFORM_OT_trackball" in running_modals
        resize_running    = "TRANSFORM_OT_resize"    in running_modals
        running = translate_running or trackball_running or resize_running

        if ev.type ==    'LEFTMOUSE' and ev.value ==   'PRESS':
            self.lmb = True
            if resize_running: return {'FINISHED', 'PASS_THROUGH'}
        if ev.type ==   'RIGHTMOUSE' and ev.value ==   'PRESS': self.rmb = True
        if ev.type == 'BUTTON4MOUSE' and ev.value ==   'PRESS': self.mmb = True
        if ev.type ==    'LEFTMOUSE' and ev.value == 'RELEASE': self.lmb = False
        if ev.type ==   'RIGHTMOUSE' and ev.value == 'RELEASE': self.rmb = False
        if ev.type == 'BUTTON4MOUSE' and ev.value == 'RELEASE': self.mmb = False

        if     self.lmb and not self.rmb and not self.mmb and not running: bpy.ops.transform.translate('INVOKE_DEFAULT')
        if     self.lmb and     self.rmb and not self.mmb and not running: bpy.ops.transform.trackball('INVOKE_DEFAULT')
        if not self.lmb and not self.rmb and     self.mmb and not running: bpy.ops.transform.resize   ('INVOKE_DEFAULT')
        if not self.lmb and not self.rmb and not self.mmb and not resize_running: return {'FINISHED', 'PASS_THROUGH'}
        return {'PASS_THROUGH'}

class SuperTransformTool(bpy.types.WorkSpaceTool):
    bl_space_type = 'VIEW_3D'
    bl_context_mode = 'OBJECT'
    bl_idname = 'super_transform.super_transform'
    bl_label = 'Super Transform'
    bl_description = ('This is a tooltip\nwith multiple lines')
    bl_icon = 'ops.transform.transform'
    bl_keymap = ( ("view3d.super_transform", {"type": 'LEFTMOUSE', "value": 'CLICK_DRAG'}, None), )





# --- Final boilerplate ---
all_classes_in_this_file = tuple(
    obj for obj in globals().values()
    if isinstance(obj, type)
    and obj.__module__ == __name__
    and issubclass(obj, (Menu, Operator))
)
KMS = [] # Stores KeyMaps created by this add-on, for easy registering/deregistering.
def register():
    for c in all_classes_in_this_file: bpy.utils.register_class(c)
    bpy.types.Scene.tf_in_3b = bpy.props.PointerProperty(type=TFin3BSettingsAndState)
    #bpy.utils.register_tool(SuperTransformTool, after={'builtin.move'}, separator=False, group=False)

    #wm = bpy.context.window_manager
    #if wm.keyconfigs.addon:
    #    km  = wm.keyconfigs.addon.keymaps.new(name='3D View', space_type='VIEW_3D')
    #    kmi = km.keymap_items.new('wm.call_menu_pie', 'RIGHTMOUSE', 'PRESS')
    #    kmi.properties.name = 'VIEW3D_MT_PIE_mypie'
    #    KMS.append((km,kmi))
def unregister():
    for c in all_classes_in_this_file: bpy.utils.unregister_class(c)
    wm = bpy.context.window_manager
    print(KMS)
    if wm and wm.keyconfigs and wm.keyconfigs.addon: [km.kmi.remove(kmi) for km,kmi in KMS]
    KMS.clear()
if __name__ == '__main__': register()
