# Code folding is recommended to read this code.
# TODO: diagram of the rough philosophy of how the pie menu is organized.
# Depends on other add-ons: PolyQuilt (for its delete tool), 3D hair brush (for groom brushes)

import bpy
from math import dist
from bpy.types import Menu, Operator

# TODO / ideas:
# Annotation tool? Measure tool? Repeat action? (could fit in undo menu, if I'm willing to drag a lil further to undo)
# Wireframe/xray/materialpreview/render pie? Maybe for object mode pie only? (could fit in undo menu)
# Ortho cam toggle? -- just edit flow nav to toggle ortho even if already ortho. And also maybe s.t. doubletap does ortho on selected face normal.
# Think about how you could use global vars here. E.g. I could have an editmode op take you to sculptmode, but, keep the "effective mode" in a global var still being EDIT mode, s.t. when you activate the pie menu in this pseudo-sculptmode it actully still shows the editmode pie menu, and anything you select there will automatically send you back to edit mode. Y'know, for quick convenient dips into other modes.


# -=- Common bits -=-
# --- ↑ Mode ↑ ---
class VIEW3D_OT_spawn_modepie_then_spawn_mainpie(Operator):
    bl_idname = 'view3d.spawn_modepie_then_spawn_mainpie'
    bl_label=''
    def execute(self,C): pass
        # TODO
        # pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie'

# --- ↗ Undo ↗ ---
class VIEW3D_OT_undo_then_spawn_undopie1(Operator):
    bl_idname = 'view3d.undo_then_spawn_undopie1'
    bl_label = ''
    def execute(self,C):
        try: bpy.ops.ed.undo()
        except RuntimeError: pass # No more steps to undo
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_undopie1')
        return {'FINISHED'}
class VIEW3D_OT_undo_then_spawn_undopie2(Operator):
    bl_idname = 'view3d.undo_then_spawn_undopie2'
    bl_label = ''
    def execute(self,C):
        try: bpy.ops.ed.undo()
        except RuntimeError: pass # No more steps to undo
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_undopie2')
        return {'FINISHED'}
class VIEW3D_OT_redo_then_spawn_redopie1(Operator):
    bl_idname = 'view3d.redo_then_spawn_redopie1'
    bl_label = ''
    def execute(self,C):
        try: bpy.ops.ed.redo()
        except RuntimeError: pass # No more steps to redo
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_redopie1')
        return {'FINISHED'}
class VIEW3D_OT_redo_then_spawn_redopie2(Operator):
    bl_idname = 'view3d.redo_then_spawn_redopie2'
    bl_label = ''
    def execute(self,C):
        try: bpy.ops.ed.redo()
        except RuntimeError: pass # No more steps to redo
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_redopie2')
        return {'FINISHED'}
class VIEW3D_MT_SUBPIE_undopie1(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.separator()                                                                    # ←
        pie.separator()                                                                    # →
        pie.separator()                                                                    # ↓
        pie.separator()                                                                    # ↑
        pie.operator('view3d.redo_then_spawn_redopie1', text='Redo', icon='LOOP_FORWARDS') # ↖
        pie.separator()                                                                    # ↗
        pie.operator('view3d.undo_then_spawn_undopie2', text='Undo', icon='LOOP_BACK'    ) # ↙
        pie.operator('view3d.redo_then_spawn_redopie2', text='Redo', icon='LOOP_FORWARDS') # ↘
class VIEW3D_MT_SUBPIE_undopie2(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.separator()                                                                    # ←
        pie.separator()                                                                    # →
        pie.separator()                                                                    # ↓
        pie.separator()                                                                    # ↑
        pie.operator('view3d.redo_then_spawn_redopie1', text='Redo', icon='LOOP_FORWARDS') # ↖
        pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK'    ) # ↗
        pie.separator()                                                                    # ↙
        pie.operator('view3d.redo_then_spawn_redopie2', text='Redo', icon='LOOP_FORWARDS') # ↘
class VIEW3D_MT_SUBPIE_redopie1(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.separator()                                                                    # ←
        pie.separator()                                                                    # →
        pie.separator()                                                                    # ↓
        pie.separator()                                                                    # ↑
        pie.separator()                                                                    # ↖
        pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK'    ) # ↗
        pie.operator('view3d.undo_then_spawn_undopie2', text='Undo', icon='LOOP_BACK'    ) # ↙
        pie.operator('view3d.redo_then_spawn_redopie2', text='Redo', icon='LOOP_FORWARDS') # ↘
class VIEW3D_MT_SUBPIE_redopie2(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.separator()                                                                    # ←
        pie.separator()                                                                    # →
        pie.separator()                                                                    # ↓
        pie.separator()                                                                    # ↑
        pie.operator('view3d.redo_then_spawn_redopie1', text='Redo', icon='LOOP_FORWARDS') # ↖
        pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK'    ) # ↗
        pie.operator('view3d.undo_then_spawn_undopie2', text='Undo', icon='LOOP_BACK'    ) # ↙
        pie.separator()                                                                    # ↘

# --- → Grab → ---
class VIEW3D_OT_select_3btf_tool_then_spawn_orientpie(Operator):
    bl_idname = 'view3d.select_3btf_tool_then_spawn_orientpie'
    bl_label = ''
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='builtin.select', as_fallback=True)
        bpy.ops.wm.tool_set_by_id(name='builtin..translate')
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_orientpie')
        return {'FINISHED'}
class VIEW3D_OT_set_scene_orientation_then_spawn_pivotpie(Operator):
    bl_idname = 'view3d.set_scene_orientation_then_spawn_pivotpie'
    bl_label = ''
    orientation: bpy.props.EnumProperty(items=[
         ('GLOBAL', 'Global', ''),
         ('LOCAL' , 'Local' , ''),
         ('NORMAL', 'Normal', ''),
         ('GIMBAL', 'Gimbal', ''),
         ('VIEW'  , 'View'  , ''),
         ('CURSOR', 'Cursor', ''),
         ('PARENT', 'Parent', ''),
         ('CUSTOM', 'Custom', ''),
    ])
    def execute(self, C):
        # Note: You want a subpie enumerating the custom orientatinos? You have to do s/t stupid b/c custom orientations' names not easily gettable: https://blender.stackexchange.com/a/196080
        C.scene.transform_orientation_slots[0].type = self.orientation
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_pivotpie')
        return {'FINISHED'}
class VIEW3D_OT_set_scene_pivot(bpy.types.Operator):
    bl_idname = 'view3d.set_scene_pivot'
    bl_label = ''
    pivot: bpy.props.EnumProperty(items=[
        ('BOUNDING_BOX_CENTER', "Bounding Box Center", ""),
        ('CURSOR',             "3D Cursor", ""),
        ('INDIVIDUAL_ORIGINS', "Individual Origins", ""),
        ('MEDIAN_POINT',       "Median Point", ""),
        ('ACTIVE_ELEMENT',     "Active Element", ""),
    ])
    def execute(self, context):
        context.scene.tool_settings.transform_pivot_point = self.pivot
        return {'FINISHED'}
class VIEW3D_MT_SUBPIE_orientpie(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Local',  icon='ORIENTATION_LOCAL' ).orientation = 'LOCAL'  # ← Local
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Global', icon='ORIENTATION_GLOBAL').orientation = 'GLOBAL' # → Global
        pie.operator('transform.select_orientation',                     text='Custom', icon='ORIENTATION_GLOBAL')                        # ↓ Custom
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Normal', icon='ORIENTATION_NORMAL').orientation = 'NORMAL' # ↑ Normal
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Parent', icon='ORIENTATION_PARENT').orientation = 'PARENT' # ↖ Parent
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Cursor', icon='ORIENTATION_CURSOR').orientation = 'CURSOR' # ↗ Cursor
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='Gimbal', icon='ORIENTATION_GIMBAL').orientation = 'GIMBAL' # ↙ Gimbal
        pie.operator('view3d.set_scene_orientation_then_spawn_pivotpie', text='View',   icon='ORIENTATION_VIEW'  ).orientation = 'VIEW'   # ↘ View
class VIEW3D_MT_SUBPIE_pivotpie(Menu):
    bl_label = 'pivot'
    def draw(self, context):
        pie = self.layout.menu_pie()
        pie.operator('view3d.set_scene_pivot', text='Bounding Box Center').pivot = 'BOUNDING_BOX_CENTER' # ←
        pie.operator('view3d.set_scene_pivot', text='3D Cursor'          ).pivot = 'CURSOR'              # →
        pie.operator('view3d.set_scene_pivot', text='Individual Origins' ).pivot = 'INDIVIDUAL_ORIGINS'  # ↓
        pie.operator('view3d.set_scene_pivot', text='Median Point'       ).pivot = 'MEDIAN_POINT'        # ↑
        pie.operator('view3d.set_scene_pivot', text='Active Element'     ).pivot = 'ACTIVE_ELEMENT'      # ↖
        pie.separator()                                                                                  # ↗
        pie.separator()                                                                                  # ↙
        pie.separator()                                                                                  # ↘

# --- ↘ Selection, Snapping ↘ ---
class VIEW3D_OT_set_snap_target(Operator):
    bl_idname = 'view3d.set_snap_target'
    bl_label = ''
    snap_target: bpy.props.EnumProperty(items=[
       ('NONE', '', ''),
       ('INCREMENT', '', ''),
       ('GRID', '', ''),
       ('VERTEX', '', ''),
       ('EDGE', '', ''),
       ('FACE', '', ''),
       ('VOLUME', '', ''),
       ('FACE_PROJECT', '', ''),
       ('FACE_NEAREST', '', ''),
    ])
    def execute(self,C):
        bpy.context.scene.tool_settings.use_snap = True
        if self.snap_target in ['FACE_PROJECT','FACE_NEAREST']: C.scene.tool_settings.snap_elements_individual = {self.snap_target}
        else                                                  : C.scene.tool_settings.snap_elements_base       = {self.snap_target}
        return {'FINISHED'}
class VIEW3D_OT_set_selection_tool(Operator):
    # Selecting a tool is simple as wm.tool_set_by_id. But setting the active tool's mode is a bit of a song and dance.
    bl_idname = 'view3d.set_selection_tool'
    bl_label = ''
    tool: bpy.props.StringProperty()
    mode: bpy.props.StringProperty()
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name=self.tool)
        tool = C.workspace.tools.from_space_view3d_mode(C.mode, create=False)
        props = tool.operator_properties('view3d.select_box')   if self.tool=='builtin.select_box' \
           else tool.operator_properties('view3d.select_lasso') if self.tool=='builtin.select_lasso' \
           else tool.operator_properties('view3d.select_circle')
        props.mode = self.mode
        return {'FINISHED'}
class VIEW3D_OT_select_circle_tool_then_spawn_selectionpie1(Operator):
    bl_idname = 'view3d.select_circle_tool_then_spawn_selectionpie1'
    bl_label = ''
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='builtin.select_circle', as_fallback=True)
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_selectionpie1')
        return {'FINISHED'}
class VIEW3D_OT_toggle_snapping_then_spawn_magnetpie(Operator):
    bl_idname = 'view3d.toggle_snapping_then_spawn_magnetpie'
    bl_label = ''
    def execute(self,C):
        C.scene.tool_settings.use_snap = not C.scene.tool_settings.use_snap
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_magnetpie')
        return {'FINISHED'}
#class VIEW3D_OT_grow_selection_then_spawn_growselectionmenu1(Operator): TODO
#class VIEW3D_OT_grow_selection_then_spawn_growselectionmenu2(Operator): TODO
class VIEW3D_MT_SUBPIE_selectionpie1(Menu):
    # TODO:
    #   probably replace "Loop" w/ editmode-specific selection stuff
    #     Like Shortest path, Checker select, Select similar / by normal direction etc.
    #   Probably add a "hiding" operators subpie
    #   Add grow selection subpie (useful in both edit+pose modes is why it may deserve a place here)
    #     ↙ Feels good for the grow/shrink selection menu, b/c it's diagonal direction for ez swiping.
    #     ← Hiding menu
    # TODO maybe one day, I could modify PolyQuilt's delete tool to do selecting instead. Or just use Flow Selection add-on.
    bl_label = ''
    def draw(self,C):
        pie = self.layout.menu_pie()
        if C.mode=='EDIT_MESH': pie.operator('mesh.select_edge_loop_multi')                                       # ← Loop
        else                  : pie.separator()
        pie.separator()                                                                                           # →
        pie.operator('wm.call_menu_pie', text='Snap').name = 'VIEW3D_MT_snap_pie'                                 # ↓ Snap to cursor/origin # TODO: remake this pie custom, w/ only the options you need, and recursive, so you can quickly snap cusror to origin then immediately snap object to cusror.
        pie.operator('view3d.toggle_snapping_then_spawn_magnetpie', icon='SNAP_ON')                               # ↑ Snap targets
        if   C.mode=='POSE'              : pie.operator(         'pose.select_all', text='Inv').action = 'INVERT' # ↖ Invert (doubles as select all)
        elif C.mode=='OBJECT'            : pie.operator(       'object.select_all', text='Inv').action = 'INVERT'   
        elif C.mode=='EDIT_MESH'         : pie.operator(         'mesh.select_all', text='Inv').action = 'INVERT'
        elif C.mode=='EDIT_CURVES'       : pie.operator(       'curves.select_all', text='Inv').action = 'INVERT'
        elif C.mode=='EDIT_ARMATURE'     : pie.operator(     'armature.select_all', text='Inv').action = 'INVERT'
        elif C.mode=='EDIT_GREASE_PENCIL': pie.operator('grease_pencil.select_all', text='Inv').action = 'INVERT'
        else                             : pie.separator()
        pie.separator()                                                                                           # ↗
        pie.separator()                                                                                           # ↙
        pie.separator()                                                                                           # ↘
class VIEW3D_MT_SUBPIE_magnetpie(Menu):
    bl_label = ''
    def draw(self, context):
        pie = self.layout.menu_pie()
        pie.operator('view3d.set_snap_target', text='Increment'   ).snap_target = 'INCREMENT'    # ← Increment
        pie.operator('view3d.set_snap_target', text='Grid'        ).snap_target = 'GRID'         # → Grid
        pie.operator('view3d.set_snap_target', text='Vertex'      ).snap_target = 'VERTEX'       # ↓ Vertex
        pie.operator('view3d.set_snap_target', text='Edge'        ).snap_target = 'EDGE'         # ↑ Edge
        pie.operator('view3d.set_snap_target', text='Face'        ).snap_target = 'FACE'         # ↖ Face
        pie.operator('view3d.set_snap_target', text='Volume'      ).snap_target = 'VOLUME'       # ↗ Volume
        pie.operator('view3d.set_snap_target', text='Face Project').snap_target = 'FACE_PROJECT' # ↙ Face Project
        pie.operator('view3d.set_snap_target', text='Face Nearest').snap_target = 'FACE_NEAREST' # ↘ Face Nearest

# --- ↓ Rotate ↓ ---
# Note I edited my keymap so the Rotate tool activates trackball instead of typical rotate.
class VIEW3D_OT_select_rotate_tool_then_spawn_orientpie(Operator):
    bl_idname = 'view3d.select_rotate_tool_then_spawn_orientpie'
    bl_label = ''
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='builtin.select', as_fallback=True)
        bpy.ops.wm.tool_set_by_id(name='builtin.rotate')
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_orientpie')
        return {'FINISHED'}

# -=- Edit Mode -=-
class VIEW3D_OT_set_polyquilt_brush_tool(Operator):
    # TODO: Hm... see set_selection_tool() and consider if these two ops could be combined into one general varargs tool-setting op? Even though it would make calling it in pie menu definitions require multiple lines, it might be clearer.
    bl_idname = 'view3d.set_polyquilt_brush_tool'
    bl_label = ''
    brush_type: bpy.props.StringProperty()
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='mesh_tool.poly_quilt_brush')
        tool = C.workspace.tools.from_space_view3d_mode(C.mode, create=False)
        props = tool.operator_properties('mesh.poly_quilt')
        props.brush_type = self.brush_type
        return {'FINISHED'}
class VIEW3D_OT_set_bevel_tool(Operator):
    # TODO: Hm... see set_selection_tool() and consider if these two ops could be combined into one general varargs tool-setting op? Even though it would make calling it in pie menu definitions require multiple lines, it might be clearer.
    bl_idname = 'view3d.set_bevel_tool'
    bl_label = ''
    affect: bpy.props.StringProperty()
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='builtin.select', as_fallback=True)
        bpy.ops.wm.tool_set_by_id(name='builtin.bevel')
        tool = C.workspace.tools.from_space_view3d_mode(C.mode, create=False)
        props = tool.operator_properties('mesh.bevel')
        props.affect = self.affect
        if self.affect=='VERTICES': bpy.ops.mesh.select_mode(type='VERT')
        else                      : bpy.ops.mesh.select_mode(type='EDGE')
        return {'FINISHED'}
class VIEW3D_OT_select_knife_tool_then_spawn_edit_toolpie(Operator):
    bl_idname = 'view3d.select_knife_tool_then_spawn_edit_toolpie'
    bl_label = ''
    def execute(self,C):
        bpy.ops.wm.tool_set_by_id(name='builtin.knife')
        bpy.ops.wm.call_menu_pie(name='VIEW3D_MT_SUBPIE_edit_toolpie')
        return {'FINISHED'}
class VIEW3D_MT_SUBPIE_edit_markpie(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.operator('mesh.select_mode',         text='Vert'     ).type = 'VERT' # ←
        pie.operator('mesh.mark_seam',           text='Seam'     ).clear = False # →
        pie.separator()#pie.operator('mesh.mark_bevel',          text='Bevel'    ).clear = False # ↓
        pie.operator('mesh.select_mode',         text='Face'     ).type = 'FACE' # ↑
        pie.operator('mesh.select_mode',         text='Edge'     ).type = 'EDGE' # ↖
        pie.operator('mesh.mark_sharp',          text='Sharp'    ).clear = False # ↗
        pie.separator()#pie.operator('mesh.mark_crease',         text='Crease'   ).clear = False # ↙
        pie.operator('mesh.mark_freestyle_edge', text='Freestyle').clear = False # ↘
class VIEW3D_MT_SUBPIE_edit_toolpie(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.operator('wm.tool_set_by_id',     text='Loop Cut'      ).name   = 'builtin.loop_cut'              # ←
        pie.operator('view3d.set_polyquilt_brush_tool', text='PQ Move').brush_type = 'MOVE'                   # → # TODO maybe just do a sculptmode switch instead of PolyQuilt, w/ global var set s.t. next time you open pie it will still be editmode pie.
        pie.operator('wm.tool_set_by_id',     text='Extrude'       ).name   = 'builtin.extrude_region'        # ↓
        pie.operator('wm.tool_set_by_id',     text='PQ Edgeloop'   ).name   = 'mesh_tool.poly_quilt_edgeloop' # ↑
        pie.operator('view3d.set_bevel_tool', text='Bevel'         ).affect = 'EDGES'                         # ↖
        pie.operator('wm.tool_set_by_id',     text='PQ Delete'     ).name   = 'mesh_tool.poly_quilt_delete'   # ↗
        pie.separator() # ↙
        pie.operator('view3d.set_polyquilt_brush_tool', text='PQ Smooth').brush_type = 'SMOOTH'               # ↘ # TODO maybe just do a sculptmode switch instead of PolyQuilt, w/ global var set s.t. next time you open pie it will still be editmode pie.
class VIEW3D_MT_SUBPIE_edit_miscpie(Menu):
    bl_label = ''
    def draw(self, C):
        pie = self.layout.menu_pie()
        pie.operator('mesh.fill_grid',         text='Grid Fill'  ) # ←
        pie.operator('mesh.bridge_edge_loops', text='Bridge'     ) # →
        pie.operator('mesh.edge_face_add',     text='Fill'       ) # ↓
        pie.operator('mesh.subdivide',         text='Subdivide'  ) # ↑
        pie.operator('mesh.remove_doubles',    text='By Distance') # ↖
        pie.operator('mesh.rip_move',          text='Rip'        ) # ↗
        pie.operator('mesh.poke',              text='Poke'       ) # ↙
        pie.operator('wm.tool_set_by_id',      text='Bisect'     ).name = 'builtin.bisect' # ↘

# -=- Sculpt Mode -=-
# What I want:
#   Smooth brush (maybe should be modifier button instead)
#   Invert brush (maybe should be modifier button instead)
# -=- Draw Mode -=-
# -=- Texture Paint Mode -=-
# -=- Weight Paint Mode -=-
# -=- VSE -=-
# -=- TODO etc etc.-=-

# === Main Pie ===
class VIEW3D_MT_PIE_mypie(Menu):
    bl_label = 'My Pie'
    def draw(self, C):
        pie = self.layout.menu_pie()
        if C.mode=='EDIT_MESH':
            pie.operator('view3d.select_knife_tool_then_spawn_edit_toolpie', text='Tool')        # ← Edit mode tools
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',     text='Grab')        # → Grab
            pie.separator()                                                                      # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie'     # ↑ Mode
            pie.operator('wm.call_menu_pie', text='Mark').name = 'VIEW3D_MT_SUBPIE_edit_markpie' # ↖
            pie.operator('view3d.undo_then_spawn_undopie1',                  text='Undo')        # ↗
            pie.operator('wm.call_menu_pie', text='Misc').name = 'VIEW3D_MT_SUBPIE_edit_miscpie' # ↙
            pie.operator('view3d.select_circle_tool_then_spawn_selectionpie1', text='Circle')      # ↘ Selection
        if C.mode=='EDIT_CURVE':
            pie.separator()                                                                  # ←
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',   text='Grab')      # → Grab
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.operator('view3d.select_circle_tool_then_spawn_selectionpie1', text='Circle')  # ↘ Selection
        if C.mode=='SCULPT_CURVES': # Groom mode
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode=='EDIT_ARMATURE':
            pie.separator()                                                                  # ←
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',   text='Grab')      # → Grab
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.operator('view3d.select_circle_tool_then_spawn_selectionpie1', text='Circle')  # ↘ Selection
        if C.mode=='OBJECT':
            pie.operator('wm.save_mainfile', text='Save')                                    # ←
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',   text='Grab')      # → Grab
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.operator('view3d.select_circle_tool_then_spawn_selectionpie1', text='Circle')  # ↘ Selection
        if C.mode=='SCULPT':
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode=='POSE':
            pie.separator()                                                                  # ←
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',   text='Grab')      # → Grab
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode=='PAINT_VERTEX':
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode=='PAINT_WEIGHT':
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode in ['PAINT_GPENCIL','PAINT_GREASE_PENCIL']:
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode in ['EDIT_GPENCIL','EDIT_GREASE_PENCIL']:
            pie.separator()                                                                  # ←
            pie.operator('view3d.select_3btf_tool_then_spawn_orientpie',   text='Grab')      # → Grab
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode in ['SCULPT_GPENCIL','SCULPT_GREASE_PENCIL']:
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode in ['WEIGHT_GPENCIL','WEIGHT_GREASE_PENCIL']:
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘
        if C.mode in ['VERTEX_GPENCIL','VERTEX_GREASE_PENCIL']:
            pie.separator()                                                                  # ←
            pie.separator()                                                                  # →
            pie.separator()                                                                  # ↓
            pie.operator('wm.call_menu_pie', text='Mode').name = 'VIEW3D_MT_object_mode_pie' # ↑ Mode
            pie.separator()                                                                  # ↖
            pie.operator('view3d.undo_then_spawn_undopie1', text='Undo', icon='LOOP_BACK')   # ↗
            pie.separator()                                                                  # ↙
            pie.separator()                                                                  # ↘




# === Boilerplate ===
all_classes_in_this_file = tuple(
    obj for obj in globals().values()
    if isinstance(obj, type)
    and obj.__module__ == __name__
    and issubclass(obj, (Menu, Operator))
)
KMS = [] # Stores KeyMaps created by this add-on, for easy registering/deregistering.
def register():
    for c in all_classes_in_this_file: bpy.utils.register_class(c)

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
