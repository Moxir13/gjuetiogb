let ismlar=["Moxir","Amirxon","Yamal","Messi","Ranaldo","Abduqodir"]
let nharBor=[];
let nharYoq=[];

for (const ism of ismlar){
if(ism.toLocaleLowerCase().includes("n")){
    nharBor.push(ism)
}else{
    nharYoq.push(ism)
}    


}
console.log(isimlar, "Barcha ismlar");
console.log(nharBor, "n harifi bor ismlar");
console.log(nharYoq, "n harifi bor isimlar");

