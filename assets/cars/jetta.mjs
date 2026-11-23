import {NodeIO} from '@gltf-transform/core';import {prune,weld,dedup,flatten,join,simplifyPrimitive} from '@gltf-transform/functions';import {MeshoptSimplifier} from 'meshoptimizer';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);const d=await io.read(process.argv[2]);const root=d.getRoot();await MeshoptSimplifier.ready;
// fuera: frenos, sombras falsas, sistema de escape de abajo, pantallas con logo
for(const n of root.listNodes()){const nm=n.getName();if(/^(Ext_Brake|Ext_Body_Exhaust_System|Ext_Body_Grille_Shadow|Int_Airbag|Ext_Door_Limiter)/.test(nm))n.dispose();}
const SIDE={FL:'LF',FR:'RF',RL:'LB',RR:'RB'};   // el Jetta tiene el frente en −Z y la izquierda en −X; se gira 180° y queda frente +Z, izquierda +X (como el juego)
const tag=nm=>{let m;if(/^Int_SW/.test(nm))return'SW';if(m=nm.match(/^(?:Rim_[A-Z0-9_]+_|Tire_)(FL|FR|RL|RR)/))return'WH'+SIDE[m[1]];if(m=nm.match(/^(?:Ext|Int)_Door_(FL|FR|RL|RR)/))return'DR'+SIDE[m[1]];if(m=nm.match(/^Ext_Door_Blocker_(FL|FR|RL|RR)/))return'DB'+SIDE[m[1]];
  if(/^Ext_Headlight/.test(nm))return'HEAD';if(/^Ext_Taillight#(Glow_Red|Glass_Red)/.test(nm))return'TAIL';if(/^Ext_Window_Windshield/.test(nm))return'WSH';return null;};
const used=new Map();for(const n of root.listNodes()){const m=n.getMesh();if(m)used.set(m,(used.get(m)||0)+1);}
for(const n of root.listNodes()){let m=n.getMesh();if(!m)continue;if(used.get(m)>1){m=m.clone();n.setMesh(m);}const t=tag(n.getName());m.setName(t||'');n.setName(t||'');}
for(const m of root.listMaterials()){const c=m.getBaseColorFactor();m.setBaseColorTexture(null).setMetallicRoughnessTexture(null).setNormalTexture(null).setOcclusionTexture(null).setEmissiveTexture(null).setMetallicFactor(0).setRoughnessFactor(1);for(const e of m.listExtensions())e.dispose();}
for(const t of root.listTextures())t.dispose();
// giro de 180° alrededor de Y
const sc=root.listScenes()[0],top=d.createNode('jetta').setRotation([0,1,0,0]);for(const c of sc.listChildren()){sc.removeChild(c);top.addChild(c);}sc.addChild(top);
await d.transform(prune(),weld({tolerance:.0008}),flatten(),join({keepNamed:true}));
for(const m of root.listMeshes()){const k=/^(SW|HEAD|TAIL)$/.test(m.getName());for(const p of m.listPrimitives())if(p.getIndices())simplifyPrimitive(p,{simplifier:MeshoptSimplifier,ratio:0,error:k?.0005:.0007});}
await d.transform(prune());
let tri=0;const nm=[];for(const n of root.listNodes()){const m=n.getMesh();if(!m)continue;let t=0;for(const p of m.listPrimitives())t+=(p.getIndices()?p.getIndices().getCount():p.getAttribute('POSITION').getCount())/3;tri+=t;if(m.getName())nm.push(m.getName()+':'+t);}
console.log('tris',tri,nm.join(' '));await io.write(process.argv[3],d);
