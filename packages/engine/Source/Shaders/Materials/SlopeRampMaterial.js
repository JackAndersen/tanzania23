//This file is automatically rebuilt by the Cesium build process.
export default "uniform sampler2D image;\n\
\n\
czm_material czm_getMaterial(czm_materialInput materialInput)\n\
{\n\
    czm_material material = czm_getDefaultMaterial(materialInput);\n\
    vec4 rampColor = texture(image, vec2(materialInput.slope / (czm_pi / 2.0), 0.5));\n\
    rampColor = czm_gammaCorrect(rampColor);\n\
    material.diffuse = rampColor.rgb;\n\
    material.alpha = rampColor.a;\n\
    return material;\n\
}\n\
";
