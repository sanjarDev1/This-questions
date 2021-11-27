

// var data = {id:1,name:"Asad",status:"students"};
// const counts = (obj,text)=>{
// var str =[];
// var count = 0;
// Object.values(obj).map((value)=>str+=value)
// str = str.toLowerCase();
// text = text.toLowerCase();
// for(let i =0; i<str.length; i++){
//     if(str[i]===text){
//         count++
//     }
// }
// console.log(count);
// }

// counts(data,"a")


// data.map((value)=>{
//     var a = Object.values(value)
//     console.log(a);

// ENCODING

const copmress=(text) =>{
    let count  =0;
    let result = "";
    for(let i=0;i<text.length;i++){
        count++;
        let current = text[i];
        if(current!==text[i+1]){
            if(count==1) count="";
        result+= count+current;
        count=0;
        }
    }
return result;


}
var ar ="AAABBADDTY";
console.log("AAABBDDTY");
console.log(copmress(ar));



let numberes = [7,2,3,8];
// let sum = 0;
// for(let number of numberes){
//     sum+=number
// }
let sum = numberes.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
},0)

console.log(sum);