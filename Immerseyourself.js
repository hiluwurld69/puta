/*
segment_width = width / geometry.xSegCount,
                          segment_height = height / geometry.ySegCount;
                      for (let yIndex= 0; yIndex <= geometry.ySegCount; yIndex++) {
                          const t = r + yIndex * segment_height;
                          for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                              const r = o + xIndex * segment_width,
                                  l = yIndex * (geometry.xSegCount + 1) + xIndex;
                              geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[0])] = r, 
                              geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[1])] = -t
                          }
                      }
                      geometry.attributes.position.update(), _miniGl.debug("Geometry.setSize", {
                          position: geometry.attributes.position
                      })
                  }
              }
          },
          Mesh: {
              enumerable: !1,
              value: class {
                  constructor(geometry, material) {
                      const mesh = this;
                      mesh.geometry = geometry, mesh.material = material, mesh.wireframe = !1, mesh.attributeInstances = [], Object.entries(mesh.geometry.attributes).forEach(([e, attribute]) => {
                          mesh.attributeInstances.push({
                              attribute: attribute,
                              location: attribute.attach(e, mesh.material.program)
                          })
                      }), _miniGl.meshes.push(mesh), _miniGl.debug("Mesh.constructor", {
                          mesh: mesh
                      })
                  }
                  draw() {
                    context.useProgram(this.material.program), this.material.uniformInstances.forEach(({
                          uniform: e,
                          location: t
                      }) => e.update(t)), this.attributeInstances.forEach(({
                          attribute: e,
                          location: t
                      }) => e.use(t)), context.drawElements(this.wireframe ? context.LINES : context.TRIANGLES, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0)
                  }
                  remove() {
                      _miniGl.meshes = _miniGl.meshes.filter(e => e != this)
                  }
              }
          },
          Attribute: {
              enumerable: !1,
              value: class {
                  constructor(e) {
                      this.type = context.FLOAT, this.normalized = !1, this.buffer = context.createBuffer(), Object.assign(this, e), this.update()
                  }
                  update() {
                      void 0 !== this.values && (context.bindBuffer(this.target, this.buffer), context.bufferData(this.target, this.values, context.STATIC_DRAW))
                  }
                  attach(e, t) {
                      const n = context.getAttribLocation(t, e);
                      return this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(n), context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)), n
                  }
                  use(e) {
                    context.bindBuffer(this.target, this.buffer), this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(e), context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0))
                  }
              }
          }
      });
      const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      _miniGl.commonUniforms = {
          projectionMatrix: new _miniGl.Uniform({
              type: "mat4",
              value: a
          }),
          modelViewMatrix: new _miniGl.Uniform({
              type: "mat4",
              value: a
          }),
          resolution: new _miniGl.Uniform({
              type: "vec2",
              value: [1, 1]
          }),
          aspectRatio: new _miniGl.Uniform({
              type: "float",
              value: 1
          })
      }
  }
  setSize(e = 640, t = 480) {
      this.width = e, this.height = t, this.canvas.width = e, this.canvas.height = t, this.gl.viewport(0, 0, e, t), this.commonUniforms.resolution.value = [e, t], this.commonUniforms.aspectRatio.value = e / t, this.debug("MiniGL.setSize", {
          width: e,
          height: t
      })
  }
  //left, right, top, bottom, near, far
  setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, s = 2e3) {
      this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - s), 0, e, t, n, 1], this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value)
  }
  render() {
      this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach(e => e.draw())
  }
}


 */




var _0xfb78=["\x23\x74\x72\x69\x61\x6E\x67\x6C\x65\x53\x20\x70\x61\x74\x68","\x72\x61\x6E\x64\x6F\x6D","\x3C","\x74\x6F","\x74\x69\x6D\x65\x6C\x69\x6E\x65","\x23\x73\x65\x63\x74\x69\x6F\x6E\x39","\x74\x6F\x70\x20\x37\x35\x25","\x62\x6F\x74\x74\x6F\x6D\x20\x74\x6F\x70","\x70\x6C\x61\x79\x20\x6E\x6F\x6E\x65\x20\x6E\x6F\x6E\x65\x20\x72\x65\x73\x65\x74","\x63\x72\x65\x61\x74\x65"];let tls9=gsap[_0xfb78[4]]({paused:true,repeat:-1,repeatDelay:1,yoyo:true,yoyoEase:true})[_0xfb78[3]](_0xfb78[0],{x:200,duration:2,stagger:{each:0.02,from:_0xfb78[1]},opacity:0,rotation:120},_0xfb78[2]);ScrollTrigger[_0xfb78[9]]({animation:tls9,trigger:_0xfb78[5],start:_0xfb78[6],end:_0xfb78[7],toggleActions:_0xfb78[8]})