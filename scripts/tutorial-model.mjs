// Original lathed bottle, glTF 2.0 / GLB, no external buffers, skins or extensions.
export function bottleGLB() {
  const profile = [[0,-98],[49,-98],[53,-90],[53,55],[46,72],[25,85],[25,112],[0,112]], slices = 48;
  const position = [], normal = [], indices = [];
  profile.forEach(([r,y], j) => {
    const before=profile[Math.max(0,j-1)], after=profile[Math.min(profile.length-1,j+1)];
    const dr=after[0]-before[0], dy=after[1]-before[1], len=Math.hypot(dr,dy)||1;
    for(let i=0;i<=slices;i++){const a=i/slices*Math.PI*2;position.push(r*Math.cos(a),y,r*Math.sin(a));normal.push(dy/len*Math.cos(a),-dr/len,dy/len*Math.sin(a));}
  });
  for(let j=0;j<profile.length-1;j++)for(let i=0;i<slices;i++){const a=j*(slices+1)+i,b=a+slices+1;indices.push(a,b,a+1,b,b+1,a+1);}
  // A contrasting front badge makes turntable rotation legible on a round bottle.
  const bodyCount=indices.length, badge=position.length/3;
  position.push(-28,-25,54,28,-25,54,28,35,54,-28,35,54);
  normal.push(0,0,1,0,0,1,0,0,1,0,0,1);
  indices.push(badge,badge+1,badge+2,badge,badge+2,badge+3);
  const pos=Buffer.from(new Float32Array(position).buffer), norm=Buffer.from(new Float32Array(normal).buffer), idx=Buffer.from(new Uint16Array(indices).buffer);
  const bin=Buffer.concat([pos,norm,idx]), padded=Buffer.alloc(Math.ceil(bin.length/4)*4);bin.copy(padded);
  const json={asset:{version:"2.0",generator:"MacroFlush Web original bottle"},scene:0,scenes:[{nodes:[0]}],nodes:[{mesh:0}],meshes:[{primitives:[{attributes:{POSITION:0,NORMAL:1},indices:2,material:0},{attributes:{POSITION:0,NORMAL:1},indices:3,material:1}]}],materials:[{name:"Cyan enamel",pbrMetallicRoughness:{baseColorFactor:[0.12,0.64,0.82,1],metallicFactor:0.45,roughnessFactor:0.28}},{name:"Front badge",pbrMetallicRoughness:{baseColorFactor:[1,0.88,0.45,1],metallicFactor:0,roughnessFactor:0.7}}],buffers:[{byteLength:padded.length}],bufferViews:[{buffer:0,byteOffset:0,byteLength:pos.length,target:34962},{buffer:0,byteOffset:pos.length,byteLength:norm.length,target:34962},{buffer:0,byteOffset:pos.length+norm.length,byteLength:idx.length,target:34963}],accessors:[{bufferView:0,componentType:5126,count:position.length/3,type:"VEC3",min:[-53,-98,-53],max:[53,112,54]},{bufferView:1,componentType:5126,count:normal.length/3,type:"VEC3"},{bufferView:2,componentType:5123,count:bodyCount,type:"SCALAR"},{bufferView:2,byteOffset:bodyCount*2,componentType:5123,count:6,type:"SCALAR"}]};
  const raw=Buffer.from(JSON.stringify(json)), js=Buffer.alloc(Math.ceil(raw.length/4)*4,32);raw.copy(js);
  const header=Buffer.alloc(20);header.writeUInt32LE(0x46546c67);header.writeUInt32LE(2,4);header.writeUInt32LE(28+js.length+padded.length,8);header.writeUInt32LE(js.length,12);header.writeUInt32LE(0x4e4f534a,16);
  const bh=Buffer.alloc(8);bh.writeUInt32LE(padded.length);bh.writeUInt32LE(0x004e4942,4);
  return Buffer.concat([header,js,bh,padded]);
}
