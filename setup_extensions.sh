# Yes you could make a for loop, but then it's harder to isolate one addon to see its error msgs.
# TODO: can you link extensions as submodules from projects.blender.org? And still have it work for remote downloads?
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension build --source-dir ../addons/made_by_me/tf_in_3b
rm -fr                                                                                                    tf_in_3b/.git*
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension build --source-dir ../addons/made_by_me/pie
rm -fr                                                                                                    pie/.git*
cp ../addons/made_by_me/.*zip .
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension server-generate --repo-dir .
