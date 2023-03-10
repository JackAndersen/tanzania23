//This file is automatically rebuilt by the Cesium build process.
export default "uniform sampler2D colorTexture;\n\
uniform sampler2D ambientOcclusionTexture;\n\
uniform bool ambientOcclusionOnly;\n\
in vec2 v_textureCoordinates;\n\
\n\
void main(void)\n\
{\n\
    vec3 color = texture(colorTexture, v_textureCoordinates).rgb;\n\
    vec3 ao = texture(ambientOcclusionTexture, v_textureCoordinates).rgb;\n\
    out_FragColor.rgb = ambientOcclusionOnly ? ao : ao * color;\n\
}\n\
";
