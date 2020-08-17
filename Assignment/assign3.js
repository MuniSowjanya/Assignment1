var array=[21,53,24,85,98,55]
var arr=[]
var temp
for(var i=0;i<array.length;i++){
    var m=array[i]
palindrome(m)
}
function palindrome(n)
{
    var number=n.toString()
    var num =number.split('').reverse().join('')
    var l=parseInt(num)
    arr.push(l)
}
var ascendingArray=arr.sort()
var largest=ascendingArray[ascendingArray.length-1]
console.log(largest)
