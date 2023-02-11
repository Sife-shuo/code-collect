Calc={}
Calc.Math=Object.create(Math)
Calc.Math.factor=(num)=>Calc.Math.range(1,num+1).map(e=>{return num/e%1==0?e:false}).filter(e=>{return e!=false})//因数
Calc.Math.gcd=(a,b)=>Calc.Math.set.intersection(Calc.Math.factor(a),Calc.Math.factor(b)).sort((a,b)=>a>b?-1:1)[0]//最大公因数
Calc.Math.lcm=(a,b)=>a*b/Calc.Math.gcd(a,b)//最小公倍数
Calc.Math.range=function(){
    if(!arguments[1]){return Array(arguments[0]).fill(0).map((m,e)=>{return e})}
    else if(!arguments[2]){return Array(arguments[1]-arguments[0]).fill(0).map((m,e)=>{return e+arguments[0]})}
    else{var ru=[];Array(arguments[1]-arguments[0]).fill(0).map((m,e)=>{if(e%arguments[2]==0){ru.push(e+arguments[0])}});return ru}
}
Calc.Math.set={
    issubset:(a,b)=>b.every((e)=>a.indexOf(e)!=-1),//b is a's subset?
    ispsubset:(a,b)=>Calc.Math.set.issubset(a,b)&&a.sort().toString()!=b.sort().toString(),//b is a's proper subset?
    intersection:(a,b)=>a.filter(e=>b.indexOf(e)!=-1),//get intersection
    union:(a,b)=>[...new Set(a.concat(b))],//get union
    complement:(a,b)=>Calc.Math.set.remove(a,Calc.Math.set.intersection(a,b)),
    remove:(a,b)=>a.filter(e=>b.indexOf(e)!=-1?false:true)
}
Calc.Math.findprimes=(n)=>{var P=[];var isPrime = new Array(n).fill(1);
    for(let i=2;i<n;++i){if(isPrime[i]){P.push(i);for(let j=i*i;j<n;j+=i){isPrime[j]=0}}}return P;
}
Calc.Math.round=function(n){if(arguments[1]){var m=arguments[1];return Math.round(n*Math.pow(10,m))/Math.pow(10,m)}else{return Math.round(n)}}
Calc.Math.log=function(N){if(arguments[1]){var a=arguments[1];return Math.log(N)/Math.log(a)}else{return Math.log(N)}}
Calc.Math.root=(a,b)=>Calc.Math.pow(a,1/b)//开根
Calc.Math.reciprocal=a=>1/a//倒数
Calc.Math.continued=(arr)=>{return arr.slice(1).toString()==[].toString()?arr[0]:arr[0]+1/eval("Calc.Math.continued(["+String(arr.slice(1))+"])")}//连分数
Calc.Math.sigma=(i,n,f)=>Calc.Math.range(i,n+1).reduce((a,b) =>a+f(b),0)
Calc.Math.pi=(k,n,f)=>{var r=1;Calc.Math.range(k,n+1).map(e=>{r*=f(e)});return r}
Number.prototype.factorial=function(){return Calc.Math.pi(1,this!=0?Math.round(this):1,x=>x)}
Calc.Math.factorial=(n)=>Calc.Math.pi(1,n!=0?Math.round(n):1,x=>x)
Number.prototype.factorial2=function(){var n=this;if(n>0){var t= Calc.Math.range(Math.round(n)%2==0?2:1,Math.round(n)+1,2);return Calc.Math.pi(0,t.length-1,x=>t[x])}else if(n==-1){return 1}else if(n<0&&(-n)%2==1){return Math.pow(-1,(-n-1)/2)/Calc.Math.factorial2(-n-2)}else if(n==0){return 1}}
Calc.Math.factorial2=(n)=>{if(n>0){var t= Calc.Math.range(Math.round(n)%2==0?2:1,Math.round(n)+1,2);return Calc.Math.pi(0,t.length-1,x=>t[x])}else if(n==-1){return 1}else if(n<0&&(-n)%2==1){return Math.pow(-1,(-n-1)/2)/Calc.Math.factorial2(-n-2)}else if(n==0){return 1}}
Calc.Math.random=(a,b)=>a-1+Math.random()*b
Calc.Math.mod=(a,b)=>a%b
Calc.Statistics={
    data:(f,list)=>list.map(e=>f(e))
}
Calc.Statistics.mean={
    arithmetic:function(a){q=arguments[1]||Array(a.length).fill(1);return Calc.Math.sigma(0,a.length-1,(e)=>a[e]*q[e])/Calc.Math.sigma(0,q.length-1,(e)=>q[e])},
    geometric:function(a){q=arguments[1]||Array(a.length).fill(1);return Calc.Math.root(Calc.Math.pi(0,a.length-1,(e)=>Calc.Math.pow(a[e],q[e])),Calc.Math.sigma(0,q.length-1,(e)=>q[e]))},
    harmonic:function(a){q=arguments[1]||Array(a.length).fill(1);return Calc.Math.sigma(0,q.length-1,(e)=>q[e])/Calc.Math.sigma(0,a.length-1,(e)=>q[e]/a[e])},
    quadratic:(a)=>Calc.Math.root(Calc.Math.sigma(0,a.length-1,(e)=>a[e]*a[e])/a.length,2)
}
Calc.factory=function(str){var o = Array.from(arguments);o.shift();return function(){var a=str;o.map((e,q)=>a=a.replaceAll(e,arguments[q]));return eval(a);}}
export {Calc}
