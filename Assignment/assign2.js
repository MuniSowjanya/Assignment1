var array=[21,53,24,85,98,55]
var arr=[]
for(var i=0;i<array.length;i++){
    var m=array[i]
palindrome(m)
}
function palindrome(n)
{
    var number=n.toString()
    var num =number.split('').reverse().join('')
    arr.push(num)
}
console.log(arr)//palindrome of array
var sum=0
for(var i=0;i<arr.length;i++){
    sum+=parseInt(arr[i])
}
console.log(sum)//sum of palindrome number in array