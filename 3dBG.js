var 3dBG = function(engine)
{
	'use strict';
	var s = {
		textures:
		{
		},

		scenes:
		{
			"3dBG":
			{
				shaders:
				{
					// mesh, shader 'surfaceShader2'
					m_surfaceShader2:
					{
					},
					// mesh, shader 'Eye_Shader'
					m_Eye__Shader:
					{
					},
					// mesh, shader 'Eye'
					m_Eye:
					{
					}
				},

				initGlobal: function(global, data)
				{
					// mesh, shader 'surfaceShader2'
					var vsm_surfaceShader2 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[4];\n\
attribute vec3 _0;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.00112548, 0.00557314, 0.00125064) + vec3(-57.6855, 7.81867, -40.7608);\n\
	vec3 b = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * b.x + _b[1] * b.y + _b[2] * b.z + _b[3];\n\
}\n\
';
					var psm_surfaceShader2 =
'precision highp float;\n\
void main()\n\
{\n\
	gl_FragColor = vec4(0.563912, 0.563912, 0.563912, 1.0);\n\
}\n\
';

					// mesh, shader 'Eye_Shader'
					var vsm_Eye__Shader =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _d[7];\n\
uniform vec4 s_o[1];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
attribute vec2 _2;\n\
varying vec4 _e;\n\
varying vec2 _f;\n\
varying vec3 _g;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.00112548, 0.00557314, 0.00125064) + vec3(-57.6855, 7.81867, -40.7608);\n\
	vec3 b = _1;\n\
	vec3 c = _d[0].xyz * a.x + _d[1].xyz * a.y + _d[2].xyz * a.z + _d[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_e.xy = _2;\n\
	_e.zw = s_o[0].xy;\n\
	_f = s_o[0].zw;\n\
	_g = _d[4].xyz * b.x + _d[5].xyz * b.y + _d[6].xyz * b.z;\n\
}\n\
';
					var psm_Eye__Shader =
'precision highp float;\n\
uniform vec4 _c[7];\n\
uniform float f_f;\n\
varying vec4 _e;\n\
varying vec2 _f;\n\
varying vec3 _g;\n\
void main()\n\
{\n\
	vec2 a = _e.xy * _e.zw + _f;\n\
	vec3 b = (_g);\n\
	vec3 c = b * b;\n\
	vec2 d = a * vec2(3.33333, 2.22222) + _c[0].xy;\n\
	vec2 e = a * vec2(3.33333, 2.22222) + _c[0].zw;\n\
	float f = step(0.0, e.x) * step(e.x, 1.0) * step(0.0, e.y) * step(e.y, 1.0);\n\
	float g = fract(d.x) + -0.5;\n\
	float h = fract(d.y) + -0.5;\n\
	vec3 i = vec3(sqrt((g * g + h * h) * 2.0) < 0.511 ? 2.0 : 0.0);\n\
	vec2 j = a * vec2(3.33333, 2.22222) + _c[1].xy;\n\
	vec2 k = a * vec2(3.33333, 2.22222) + _c[1].zw;\n\
	float l = step(0.0, k.x) * step(k.x, 1.0) * step(0.0, k.y) * step(k.y, 1.0);\n\
	float m = fract(j.x) + -0.5;\n\
	float n = fract(j.y) + -0.5;\n\
	vec3 o = vec3(sqrt((m * m + n * n) * 2.0) < 0.511 ? 2.0 : 0.0);\n\
	vec2 p = a * vec2(3.33333, 2.22222) + _c[3].zw;\n\
	float q = step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0);\n\
	float r = fract((_c[2].xy * a.x + _c[2].zw * a.y + _c[3].xy).y);\n\
	float s = r < 0.001 ? r < 9.5e-4 ? 0.0 : r * 19999.9 + -18.9999 : r < 0.95 ? 1.0 : r * -20.0 + 20.0;\n\
	vec4 t = q * (vec4(s, s, s, 1.0) * vec4(1.0, 1.0, 1.0, 0.0) + vec4(0.0, 0.0, 0.0, 1.534)) + 1.0 - q;\n\
	vec2 u = a * vec2(3.33333, 2.22222) + _c[5].zw;\n\
	float v = step(0.0, u.x) * step(u.x, 1.0) * step(0.0, u.y) * step(u.y, 1.0);\n\
	float w = fract((_c[4].xy * a.x + _c[4].zw * a.y + _c[5].xy).y);\n\
	float x = w < 0.001 ? w < 9.5e-4 ? 0.0 : w * 19999.9 + -18.9999 : w < 0.95 ? 1.0 : w * -20.0 + 20.0;\n\
	vec4 y = v * (vec4(x, x, x, 1.0) * vec4(1.0, 1.0, 1.0, 0.0) + vec4(0.0, 0.0, 0.0, 1.53367)) + 1.0 - v;\n\
	vec3 z = (f * vec4(i, 1.0) + (1.0 - f) * vec4(0.502586, 0.502586, 0.502586, 0.502586)).xyz + -1.01 + (l * vec4(o, 1.0) + vec4((1.0 - l) * 0.5)).xyz;\n\
	vec3 A = z + vec3(min(z.x, t.x), min(z.y, t.y), min(z.z, t.z)) - z;\n\
	vec3 B = A + vec3(min(A.x, y.x), min(A.y, y.y), min(A.z, y.z)) - A;\n\
	vec3 C = B + B - B;\n\
	vec3 D = C + abs(C + -1.0) - C;\n\
	vec3 E = b * inversesqrt(c.x + c.y + c.z) * f_f * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 F = D * (_c[6].xyz + vec3(max(E.x + E.y + E.z, 0.0) * 0.8));\n\
	gl_FragColor = vec4(F, 1.0);\n\
}\n\
';

					// mesh, shader 'Eye'
					var vsm_Eye =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[4];\n\
attribute vec3 _0;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.00112548, 0.00557314, 0.00125064) + vec3(-57.6855, 7.81867, -40.7608);\n\
	vec3 b = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * b.x + _b[1] * b.y + _b[2] * b.z + _b[3];\n\
}\n\
';
					var psm_Eye =
'precision highp float;\n\
void main()\n\
{\n\
	gl_FragColor = vec4(1.0);\n\
}\n\
';

					var d = new engine.Decompressor(new Uint8Array(data, 0));
					global.buffers = 
					[
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
						d.decompress16(7),
					];
					var b2 = d.decompress16(67672);
					var vb = new Float32Array(67672);
					for (var i = 0, j = 0; i < 33836; ++i, j += 2)
					{
						vb[j + 0] = b2[i + 0] * 1.5259e-5;
						vb[j + 1] = b2[i + 33836] * 1.5259e-5;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);
					var b1 = d.decompress8(101508);
					var b2 = d.decompress16(101508);
					var vb = new Float32Array(203016);
					for (var i = 0, j = 0; i < 33836; ++i, j += 6)
					{
						vb[j + 0] = b2[i + 0];
						vb[j + 1] = b2[i + 33836];
						vb[j + 2] = b2[i + 67672];
						vb[j + 3] = (b1[i + 0] << 24) * 4.65661e-10;
						vb[j + 4] = (b1[i + 33836] << 24) * 4.65661e-10;
						vb[j + 5] = (b1[i + 67672] << 24) * 4.65661e-10;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);

					var b = d.decompress16(149550);
					var ib = new Uint16Array(149550);
					for (var i = 0, j = 0; i < 49850; ++i, j += 3)
					{
						ib[j] = b[i];
						ib[j + 1] = b[i + 49850];
						ib[j + 2] = b[i + 99700];
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ib, gl.STATIC_DRAW);

					global.scaleOffset0 = new Float32Array([1.79769e308, 1.79769e308, -1.79769e308, -1.79769e308]);

					var shaders = global.shaders;
					{
						var shader = shaders.m_surfaceShader2;
						var vertexShader = engine.createVertexShader(vsm_surfaceShader2, "mesh, shader 'surfaceShader2'");
						var pixelShader = engine.createPixelShader(psm_surfaceShader2, "mesh, shader 'surfaceShader2'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 0, '_0');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
					}
					{
						var shader = shaders.m_Eye__Shader;
						var vertexShader = engine.createVertexShader(vsm_Eye__Shader, "mesh, shader 'Eye_Shader'");
						var pixelShader = engine.createPixelShader(psm_Eye__Shader, "mesh, shader 'Eye_Shader'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 1, '_1');
						gl.bindAttribLocation(program, 0, '_0');
						gl.bindAttribLocation(program, 2, '_2');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
						shader._d = gl.getUniformLocation(program, '_d');
						shader.s_o = gl.getUniformLocation(program, 's_o');
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_Eye;
						var vertexShader = engine.createVertexShader(vsm_Eye, "mesh, shader 'Eye'");
						var pixelShader = engine.createPixelShader(psm_Eye, "mesh, shader 'Eye'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 0, '_0');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
					}
				},

				doneGlobal: function(global)
				{
					gl.deleteBuffer(global.shaderInputBuffer0);
					gl.deleteBuffer(global.shaderInputBuffer1);
					gl.deleteBuffer(global.indexBuffer0);
					gl.deleteProgram(global.shaders.m_surfaceShader2.program);
					gl.deleteProgram(global.shaders.m_Eye__Shader.program);
					gl.deleteProgram(global.shaders.m_Eye.program);
				},

				render: {
					m_surfaceShader2_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_surfaceShader2;
						var transfer = instance.shaders.m_surfaceShader2.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _c = instance.fu0_16;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						flip = G * (K * O - L * N) + H * (L * M - J * O) + I * (J * N - K * M) < 0.0;
						_c[0] = G;
						_c[1] = H;
						_c[2] = I;
						_c[4] = J;
						_c[5] = K;
						_c[6] = L;
						_c[8] = M;
						_c[9] = N;
						_c[10] = O;
						_c[12] = q * m + u * n + y * o + C * p;
						_c[13] = r * m + v * n + z * o + D * p;
						_c[14] = s * m + w * n + A * o + E * p;
						gl.uniform4fv(shader._c, _c);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_Eye__Shader_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_Eye__Shader;
						var transfer = instance.shaders.m_Eye__Shader.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _d = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_d[0] = G;
						_d[1] = H;
						_d[2] = I;
						_d[4] = J;
						_d[5] = K;
						_d[6] = L;
						_d[8] = M;
						_d[9] = N;
						_d[10] = O;
						_d[12] = q * m + u * n + y * o + C * p;
						_d[13] = r * m + v * n + z * o + D * p;
						_d[14] = s * m + w * n + A * o + E * p;
						_d[16] = P;
						_d[17] = Q;
						_d[18] = R;
						_d[20] = N * I - O * H;
						_d[21] = O * G - M * I;
						_d[22] = M * H - N * G;
						_d[24] = H * L - I * K;
						_d[25] = I * J - G * L;
						_d[26] = G * K - H * J;
						gl.uniform4fv(shader._d, _d);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_Eye_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_Eye;
						var transfer = instance.shaders.m_Eye.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _c = instance.fu0_16;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						flip = G * (K * O - L * N) + H * (L * M - J * O) + I * (J * N - K * M) < 0.0;
						_c[0] = G;
						_c[1] = H;
						_c[2] = I;
						_c[4] = J;
						_c[5] = K;
						_c[6] = L;
						_c[8] = M;
						_c[9] = N;
						_c[10] = O;
						_c[12] = q * m + u * n + y * o + C * p;
						_c[13] = r * m + v * n + z * o + D * p;
						_c[14] = s * m + w * n + A * o + E * p;
						gl.uniform4fv(shader._c, _c);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					}
				},
				draw: {
					a: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 292632);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 2424, gl.UNSIGNED_SHORT, 294252);
					},
					b: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_Eye__Shader;
						gl.uniform4fv(shader.s_o, global.scaleOffset0);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 0);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 24, gl.UNSIGNED_SHORT, 0);
					},
					c: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 216);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 147102, gl.UNSIGNED_SHORT, 48);
					}
				},

				createInstance: function(global, renderer)
				{
					var instance = 
					{
						global: global,
						renderer: renderer,
						ids: new Uint32Array(1),
						fstate: new Float32Array(1), 
						funiforms: new Float32Array(13), 
						shaders:
						{
							m_surfaceShader2:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_Eye__Shader:
							{
								uniform: {_b: new Float32Array(16), _c: new Float32Array(28)},
								transfer: {_a: new Float32Array(16)},
							},
							m_Eye:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							}
						},
						itransforms: new Int32Array(1), ftransforms: new Float32Array(16), 
						fboundingBoxes: new Float32Array(6), 
						sceneSequence: 0,
						deformerSequence: 0,
						renderSequence: 0,
						viewProjectionMatrix: new Float32Array(16),
						fu0_16: new Float32Array(16),
						fu0_28: new Float32Array(28),
					};

					var particlePools = instance.particlePools = {};

					instance.update = function()
					{
						++instance.sceneSequence;

						var fstate = instance.fstate;
						var buffers = global.buffers;
						var funiforms = instance.funiforms;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						var a = engine.eWBT(buffers[0], buffers[1], 3, 43671.1) * 6.1036e-6 + -0.1;
						var b = engine.eWBT(buffers[2], buffers[3], 3, 51329.8) * 9.15541e-6 + 1.11022e-16;
						var c = engine.eWBT(buffers[6], buffers[7], 3, 51329.8) * 9.15541e-6;
						var d = engine.eWBT(buffers[4], buffers[5], 3, 43671.1) * 6.1036e-6 + 0.4;
						ftransforms[0] = 1.0;
						ftransforms[1] = 0.0;
						ftransforms[2] = 0.0;
						ftransforms[3] = 0.0;
						ftransforms[4] = 0.0;
						ftransforms[5] = 1.0;
						ftransforms[6] = 0.0;
						ftransforms[7] = 0.0;
						ftransforms[8] = 0.0;
						ftransforms[9] = 0.0;
						ftransforms[10] = 1.0;
						ftransforms[11] = 0.0;
						ftransforms[12] = 0.0;
						ftransforms[13] = 0.0;
						ftransforms[14] = 0.0;
						ftransforms[15] = 1.0;
						itransforms[0] = 1;
						fboundingBoxes[0] = -20.8062;
						fboundingBoxes[1] = 190.436;
						fboundingBoxes[2] = 0.219638;
						fboundingBoxes[3] = 36.8798;
						fboundingBoxes[4] = 182.62;
						fboundingBoxes[5] = 40.9811;
						funiforms[0] = 1.0;
						funiforms[1] = 1.0;
						funiforms[2] = 1.0;
						funiforms[3] = a;
						funiforms[4] = b;
						funiforms[5] = d;
						funiforms[6] = c;
						funiforms[7] = engine.eWBT(buffers[10], buffers[11], 3, 32767.5) * 1.59792e-5 + -0.523599;
						funiforms[8] = a;
						funiforms[9] = b;
						funiforms[10] = engine.eWBT(buffers[8], buffers[9], 3, 32767.5) * 1.59792e-5 + -0.523599;
						funiforms[11] = d;
						funiforms[12] = c;
					};

					instance.render = function(viewMatrix, projectionMatrix, layerName, renderQueues)
					{
						instance.renderSequence = ++global.sequence;
						var viewProjectionMatrix = instance.viewProjectionMatrix;
						engine.matrix4x4Mul(projectionMatrix, viewMatrix, viewProjectionMatrix);
						var funiforms = instance.funiforms;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						// mesh, shader 'surfaceShader2'
						var s_ = instance.shaders.m_surfaceShader2;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						s_.renderJobs = null;
						// mesh, shader 'Eye_Shader'
						var s_ = instance.shaders.m_Eye__Shader;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _c = uniform._c;
						var _a = s_.transfer._a;
						var a = -funiforms[3] + 0.5;
						var b = -funiforms[4] + 0.5;
						var c = a * 3.33333 + b * 0.0 + 0.0 + -1.66666;
						var d = a * 0.0 + b * 2.22222 + 0.0 + -1.11111;
						var e = -funiforms[5] + 0.5;
						var f = -funiforms[6] + 0.5;
						var g = e * 3.33333 + f * 0.0 + 0.0 + -1.66666;
						var h = e * 0.0 + f * 2.22222 + 0.0 + -1.11111;
						var i = -funiforms[8] + 0.5;
						var j = -funiforms[9] + 0.5;
						var k = i * 3.33333 + j * 0.0 + 0.0 + -1.66666;
						var l = i * 0.0 + j * 2.22222 + 0.0 + -1.11111;
						var m = i * 0.0 + j * 0.0 + 1.0 + 0.0;
						var n = funiforms[7];
						var o = Math.cos(n);
						var p = Math.sin(n);
						var q = -p;
						var r = -funiforms[11] + 0.5;
						var s = -funiforms[12] + 0.5;
						var t = r * 3.33333 + s * 0.0 + 0.0 + -1.66666;
						var u = r * 0.0 + s * 2.22222 + 0.0 + -1.11111;
						var v = r * 0.0 + s * 0.0 + 1.0 + 0.0;
						var w = funiforms[10];
						var x = Math.cos(w);
						var y = Math.sin(w);
						var z = -y;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						_c[0] = c;
						_c[1] = d;
						_c[2] = c;
						_c[3] = d;
						_c[4] = g;
						_c[5] = h;
						_c[6] = g;
						_c[7] = h;
						_c[8] = o * 3.33333;
						_c[9] = p * 3.33333;
						_c[10] = q * 2.22222;
						_c[11] = o * 2.22222;
						_c[12] = o * k + q * l + (o * -0.5 + q * -0.5 + 0.5) * m;
						_c[13] = p * k + o * l + (p * -0.5 + o * -0.5 + 0.5) * m;
						_c[14] = k;
						_c[15] = l;
						_c[16] = x * 3.33333;
						_c[17] = y * 3.33333;
						_c[18] = z * 2.22222;
						_c[19] = x * 2.22222;
						_c[20] = x * t + z * u + (x * -0.5 + z * -0.5 + 0.5) * v;
						_c[21] = y * t + x * u + (y * -0.5 + x * -0.5 + 0.5) * v;
						_c[22] = t;
						_c[23] = u;
						_c[24] = funiforms[0];
						_c[25] = funiforms[1];
						_c[26] = funiforms[2];
						s_.renderJobs = null;
						// mesh, shader 'Eye'
						var s_ = instance.shaders.m_Eye;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						s_.renderJobs = null;

						var jobIt = renderQueues.begin;
						var jobEnd = renderQueues.end;
						if (itransforms[0])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_surfaceShader2;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_surfaceShader2_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.c;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_Eye__Shader;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_Eye__Shader_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.b;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_Eye;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_Eye_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.a;
								renderJob.instance = instance;
							}
						}
						renderQueues.begin = jobIt;
						var shader = global.shaders.m_surfaceShader2;
						var shader = global.shaders.m_surfaceShader2;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_surfaceShader2.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						gl.disableVertexAttribArray(1);
						var current = instance.shaders.m_surfaceShader2.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_Eye__Shader;
						var shader = global.shaders.m_Eye__Shader;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_Eye__Shader.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.uniform4fv(shader._c, uniform._c);
						gl.enable(gl.CULL_FACE);
						gl.enableVertexAttribArray(1);
						gl.enableVertexAttribArray(2);
						var current = instance.shaders.m_Eye__Shader.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_Eye;
						var shader = global.shaders.m_Eye;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_Eye.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						gl.disableVertexAttribArray(2);
						gl.disableVertexAttribArray(1);
						var current = instance.shaders.m_Eye.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						gl.enableVertexAttribArray(1);
					};

					var fstate = instance.fstate;

					return instance;
				},

				doneInstance: function(instance)
				{
				},

				sequence: 0,

				attributes:
				{
					"time": {t: 1, b: 0, e: 1}
				},

				textureBindings:
				[
				],

				objects:
				{
					"PullsShape[0]": 0
				}

			}

		},

		numFiles: 1,
		check: function (){
			return 0;
		}
	};
	return s;
}
(inka3dEngine);
