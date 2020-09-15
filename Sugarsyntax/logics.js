var st= "Mamas {number} Empire!";
var dict = {};
dict["{number}"]="6";

function StringFormatter(string, dictionary){
    var dictkeys= Object.keys(dictionary);
    var count=0;
    for (var i=0;i<dictkeys.length;i++)
    {
        var newstr="";
        console.log(dictkeys[i]);
        if(string.indexOf(dictkeys[i])!=-1)
        {
            for (var j=0;j<string.indexOf(dictkeys[i]);j++)
            {
                newstr+=string[j];
            }
            newstr+=dictionary[dictkeys[i]];
            for(var p=string.indexOf(dictkeys[i])+dictkeys[i].length;p<string.length;p++)
            {
                newstr+=string[p];
            }
        }
        else{
            count++;
        }
    }
    if(count>0)
        return "Error ! Not Found";
    else
        return newstr;
}

alert(StringFormatter(st,dict));


