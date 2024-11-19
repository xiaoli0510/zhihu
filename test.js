let arr1 = [{a:1},3];
let arr2 = [4,5];
let res = [...arr1,...arr2];
arr1[0]={a:444};
//res[0]=12;
console.log(res,arr1,arr2);