# Yes you could make a for loop, but then it's harder to isolate one addon to see its error msgs.
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension build --output-dir . --source-dir ../../addons/made_by_me/tf_in_3b
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension build --output-dir . --source-dir ../../addons/made_by_me/pie     
/Applications/Blender-5.2.app/Contents/MacOS/Blender -c extension server-generate --repo-dir .
jq '.data[].archive_url |= sub("^\\./"; "./extensions/")' index.json > tmp && mv tmp index.json
