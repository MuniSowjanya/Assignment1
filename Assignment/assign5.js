var array=[9,7,8,6,5,3,4,2,1]
function evenOdd(arr){
    var even=[]
    var odd=[]
    for(var i=0;i<array.length;i++){
        if(arr[i]%2===0)
        {
           even.push(arr[i])
        }
        else
        {
            odd.push(arr[i])
        }
    }
   even=even.sort(function(a,b){return (a-b)})
    odd=odd.sort(function(a,b){return (a-b)})
    console.log(even,odd)
    var evenOddarr=[]
    for(var i=0;i<even.length;i++){
        evenOddarr.push(even[i])
        evenOddarr.push(odd[i])
    }return evenOddarr
}

console.log(evenOdd(array))