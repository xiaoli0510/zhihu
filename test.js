let arr = [2,3,4];
let arr1 = arr.sort((a,b)=>{
    console.log(a.index,b.index)
    return b - a;
});
console.log(arr,arr1)