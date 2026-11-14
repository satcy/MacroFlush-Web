import { readFile, writeFile, mkdir } from "node:fs/promises";
import { advancedCatalog } from "../src/advanced-projects.js";
import * as code from "../src/advanced-code.js";
import { chromaticShader, passthroughShader } from "../src/workshop-code.js";
import { project, root, html, layer, templates, composition, number, text, keys, shader, wav, embedded } from "./tutorial-project-utils.mjs";
import { bottleGLB } from "./tutorial-model.mjs";
import { zip } from "./tutorial-archive.mjs";

const requested = process.argv.slice(2);
if (requested.some(id => !advancedCatalog.some(row => row[0] === id))) throw Error("Unknown advanced tutorial");
for (const [id, title] of advancedCatalog.filter(([id]) => !requested.length || requested.includes(id))) {
  const folder = `projects/tutorials/${id}`; await mkdir(folder, { recursive: true });
  const extra = [];
  for (const stage of ["start", "complete"]) {
    const done = stage === "complete";
    let p = project(id, ["composition-reuse", "cue-performance", "stem-reactive"].includes(id) ? 480 : id === "model-product" ? 360 : 240);
    root(p).name = title; p.assets[0].name = title;
    if (id === "composition-reuse") {
      const child = composition("Card", 480, 560, 300); child.id = "card-composition"; p.assets.push(child);
      const card = html(p, "card-clip", "Card Face", code.cardCode, { title: text("title", "REUSE"), tint: text("tint", "#5dd4ff", "color") }, child.composition);
      layer(p, card, { target: child.composition });
      for (let i = 0; i < (done ? 2 : 1); i++) {
        const c = { id: `card-${i + 1}`, name: `Card ${i + 1}`, kind: "composition-ref", assetId: child.id, inFrame: i * 60, outFrame: 480, params: structuredClone(card.params), keyframeTracks: {} };
        delete c.params.title; delete c.params.tint;
        c.params.position.value = [i ? 310 : -310, 0]; c.params.rotation.value = i ? 6 : -6;
        layer(p, c);
      }
      layer(p, html(p, "background", "Background", code.backdropCode));
    } else if (id === "timeline-mask") {
      const source = html(p, "content", "Prism", code.prismCode); if (done) source.maskClipId = "matte";
      const matte = html(p, "matte", "Matte", code.matteCode, { radius: number("radius", 70, 10, 180) });
      if (done) matte.keyframeTracks.radius = keys([[0, 30], [120, 140], [239, 30]], "sineInOut");
      layer(p, source); layer(p, matte, { visible: false }); layer(p, html(p, "background", "Background", code.backdropCode));
    } else if (id === "cue-performance") {
      layer(p, html(p, "stage", "Stage", code.cueCode));
      if (done) { root(p).cues = { Intro: { frame: 0, endFrame: 120, mode: "none" }, Loop: { frame: 120, endFrame: 360, mode: "loop" }, Outro: { frame: 360, endFrame: 480, mode: "stop" } }; root(p).cueScript = code.performanceCues; }
    } else if (id === "stem-reactive") {
      layer(p, html(p, "ensemble-visual", "Stem Visual", code.stemsCode, { gain: number("gain", 2.5, 0, 8) }));
      const signal = {
        drums: (t, i) => { const u=t%0.5, noise=((Math.imul(i+1,1664525)>>>0)/2147483648-1); return 0.4*Math.sin(2*Math.PI*65*u)*Math.exp(-u*20)+noise*0.13*Math.exp(-(t%0.25)*90); },
        bass: t => 0.32*Math.sin(2*Math.PI*[82.41,110,98,73.42][Math.floor(t)%4]*t)*Math.exp(-(t%1)*4),
        other: t => 0.11*(Math.sin(2*Math.PI*330*t)+Math.sin(2*Math.PI*440*t))*Math.pow(Math.sin(Math.PI*(t%2)/2),2),
        vocals: t => 0.12*(Math.sin(2*Math.PI*620*t)+0.4*Math.sin(2*Math.PI*1240*t))*Math.pow(Math.max(0,Math.sin(Math.PI*t)),4)
      };
      const stems = Object.fromEntries(Object.entries(signal).map(([name, fn]) => [name, wav(fn)]));
      const mix = wav((t,i) => Object.values(signal).reduce((sum, fn) => sum+fn(t,i),0)*0.7);
      const audioAsset = { id: "ensemble", name: "Ensemble", kind: "audio", detail: "Original synthetic mix and four practice parts; not model-separated", sourceUrl: embedded("audio/wav",mix), ...(done ? { stemSources: Object.fromEntries(Object.entries(stems).map(([name,b])=>[name,embedded("audio/wav",b)])) } : {}) };
      p.assets.push(audioAsset);
      layer(p, { id: "music", name: "Ensemble", kind: "audio", assetId: "ensemble", inFrame: 0, outFrame: 480, params: { volume: { ...number("volume",0.4), group:"builtin" } } });
      if (!done) { extra.push(...Object.entries(stems).map(([name,b])=>[`${name}.wav`,b]), ["mix.wav",mix]); await writeFile(`${folder}/practice-stems.zip`,zip(extra)); for(const [name,b] of extra)await writeFile(`${folder}/${name}`,b); }
    } else if (id === "seamless-loop") {
      const js = done ? code.loopCode : code.loopCode.replace("time / 4", "time / 3.3");
      layer(p, html(p,"orbit","Orbit",js));
    } else if (id === "shader-stack") {
      const input = html(p,"source","Prism",code.prismCode); layer(p,input);
      if (done) {
        const blur = shader(p,"Blur",code.blurShader,{radius:number("radius",8,0,24)});
        const chromatic=shader(p,"Chromatic",chromaticShader,{amount:number("amount",7,0,24)});
        const grade=shader(p,"Grade",code.gradeShader,{contrast:number("contrast",1.3,0.5,2)});
        for (const c of [blur,chromatic,grade]) root(p).layers.unshift({id:`${c.id}-layer`,name:c.name,kind:"effect",visible:true,effectInputMode:"below",clips:[c]});
      }
    } else if (id === "model-product") {
      p=JSON.parse(await readFile("projects/tutorials/timeline-3d/complete.json","utf8"));
      p.assets[0].name=title; root(p).durationFrames=360;
      const clips=root(p).layers.flatMap(l=>l.clips), rig=structuredClone(clips.find(c=>c.id==="rig-placement")), camera=clips.find(c=>c.id==="camera-placement"), light=clips.find(c=>c.id==="light-placement"), scene=clips.find(c=>c.id==="scene1");
      root(p).layers=root(p).layers.filter(l=>["camera-layer","light-layer","scene-layer"].includes(l.id));
      for(const c of [rig,camera,light,scene]){c.outFrame=360;delete c.keyframeTracks;}
      rig.params.rotation.value=[0,0,0]; if(done)rig.keyframeTracks={rotation:keys([[0,[0,0,0]],[359,[0,Math.PI*2,0]]])};
      const model=structuredClone(clips.find(c=>c.id==="cube-placement"));
      Object.assign(model,{id:"product",name:"Bottle",assetId:"product-glb",inFrame:0,outFrame:360,parentPlacementId:rig.id}); delete model.keyframeTracks;
      model.params=Object.fromEntries(["position","rotation","scale"].map(key=>[key,structuredClone(model.params[key])]));
      model.params.position.value=[0,0,0];model.params.rotation.value=[0,0,0];model.params.scale.value=[1,1,1];
      const glb=bottleGLB();p.assets.push({id:"product-glb",name:"Bottle GLB",kind:"model-3d",detail:"Original static product bottle / GLB 2.0",descriptor:{},format:"glb",sourceUrl:embedded("model/gltf-binary",glb)});
      if(!done)await writeFile(`${folder}/bottle.glb`,glb);
      p.assets=p.assets.filter(a=>!["mesh1", "mesh2", "mesh1-geometry", "mesh2-geometry", "mesh1-material", "mesh2-material"].includes(a.id));
      camera.params.position.value=[330,160,550];camera.params.aimTarget.value=[0,0,0];camera.params.fov.value=42;
      light.params.position.value=[180,300,350];light.params.intensity.value=3;
      scene.source.js=code.productSceneCode;
      root(p).layers.unshift({id:"product-layer",name:"Bottle",kind:"chromium",visible:true,clips:[model]},{id:"product-rig",name:"Turntable",kind:"chromium",visible:true,clips:[rig]});
      if(done){const rim=structuredClone(light);rim.id="rim";rim.name="Rim";rim.params.position.value=[-250,120,-220];rim.params.color.value="#ff6c9a";rim.params.intensity.value=2;layer(p,rim);const titleClip=html(p,"title","Title",code.productTitleCode);root(p).layers.unshift({id:"title-layer",name:"Title",kind:"chromium",visible:true,clips:[titleClip]});}
    } else if (id === "seeded-motion") {
      const js=done?code.seededCode:code.seededCode.replaceAll("randomAt(clip.seed,", "unstableRandom(clip.seed,")+"\nfunction unstableRandom() { return Math.random(); }";
      layer(p,html(p,"particles","Particles",js,{seed:number("seed",42,0,9999,1)}));
    } else if (id === "alpha-logo") {
      const c=html(p,"mark","Mark",done?code.logoCode:code.logoCode.replace("bg(0, 0)",'bg("#0c1019")'),{reveal:number("reveal",1)});
      if(done)c.keyframeTracks.reveal=keys([[0,0],[45,1],[195,1],[239,0]],"sineInOut");layer(p,c);
    } else if (id === "embed-player") {
      const c=html(p,"artwork","Artwork",code.webArtworkCode,{hue:number("hue",200,0,360)});
      if(done)c.keyframeTracks.hue=keys([[0,200],[120,300],[239,200]],"sineInOut");layer(p,c);
    }
    templates(p); await writeFile(`${folder}/${stage}.json`,JSON.stringify(p,null,2)+"\n");
  }
}
console.log("Generated requested advanced tutorial project pairs and original practice assets.");
