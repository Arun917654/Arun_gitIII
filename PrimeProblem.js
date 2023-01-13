num=13
c=0
for(i=2;i<Math.sqrt(num);i++){
if(i%num==0){
c++;
} if(c==0){
console.log(num, "is prime")}
}else{
console.log(num,"is not prime")
}