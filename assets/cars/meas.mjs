import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);const d=await io.read(process.argv[2]);const B={};const pts={};
const mul=(m,p)=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12],m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13],m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]];
let all=[1e9,1e9,1e9,-1e9,-1e9,-1e9];
for(const n of d.getRoot().listNodes()){const m=n.getMesh();if(!m)continue;const W=n.getWorldMatrix(),k=m.getName()||'-';for(const p of m.listPrimitives()){const a=p.getAttribute('POSITION'),N=a.getCount(),v=[];for(let i=0;i<N;i++){const w=mul(W,a.getElement(i,v));const b=B[k]||(B[k]=[1e9,1e9,1e9,-1e9,-1e9,-1e9]);for(let q=0;q<3;q++){b[q]=Math.min(b[q],w[q]);b[q+3]=Math.max(b[q+3],w[q]);all[q]=Math.min(all[q],w[q]);all[q+3]=Math.max(all[q+3],w[q]);}if(k==='SW')(pts.SW||(pts.SW=[])).push(w);}}}
const r=v=>v.map(x=>+x.toFixed(3));console.log('total',r(all));for(const k in B)if(k!=='-')console.log(k,r(B[k]),'centro',r([0,1,2].map(q=>(B[k][q]+B[k][q+3])/2)));
// volante: plano por PCA
const P=pts.SW,c=[0,1,2].map(q=>P.reduce((s,p)=>s+p[q],0)/P.length);let C=[[0,0,0],[0,0,0],[0,0,0]];for(const p of P){const d=[p[0]-c[0],p[1]-c[1],p[2]-c[2]];for(let i=0;i<3;i++)for(let j=0;j<3;j++)C[i][j]+=d[i]*d[j];}
// eje = vector propio menor (iteración inversa simple con potencia sobre (tr*I - C))
let t=C[0][0]+C[1][1]+C[2][2],M=C.map((row,i)=>row.map((x,j)=>(i===j?t:0)-x)),v=[0,.3,-1];for(let it=0;it<200;it++){const w=[0,1,2].map(i=>M[i][0]*v[0]+M[i][1]*v[1]+M[i][2]*v[2]);const l=Math.hypot(...w);v=w.map(x=>x/l);}
console.log('SW centro',r(c),'eje',r(v));
