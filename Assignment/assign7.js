var x="Hai"
var y="Hai!"

function abc(str1,str2){
    if(str1.length==str2.length){
      var a = str1.split('');
      var b = str2.split('');
      for(i=0;i<a.length;i++)
         if(a.indexOf(b[i])!==-1)
         if(b.indexOf(a[i])!==-1)
          return true
        }
          else{
            return false;
  }}
  console.log(abc(x,y))