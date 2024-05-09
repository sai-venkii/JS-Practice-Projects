function handleSubmit(event){
    event.preventDefault();
    name1=document.getElementById("name1").value;
    name2=document.getElementById("name2").value;
    var i,j;
    var name1_arr=name1.split('');
    var name2_arr=name2.split('');
    var flames=['F','L','A','M','E','S'];
    for(i=0;i<name1_arr.length;i++){
        var ch=name1_arr[i];
        if(ch=== ' '){
            name1_arr.splice(i,1);
            i--;
            continue;
        }
        for(j=0;j<name2_arr.length;j++){
            if(name2_arr[j]=== ' '){
                name2_arr.splice(j,1);
                j--;
                continue;
            }
            if(ch===name2_arr[j]){
                name1_arr.splice(i,1);
                name2_arr.splice(j,1);
                i--;
                j--;
                break;
            }
        }
    }
    var count=name1_arr.length+name2_arr.length;
    i=0;j=-1;
    while(flames.length != 1){
        i++;j++;
        if(j===flames.length){
            j=0;
        }
        if(i===count){
            flames.splice(j,1);
            i=0;
            j--;
        }
    }
    var result=flames[0];
    console.log(result);
    var div=document.getElementById('output');
    if(result==='F'){
        div.innerHTML= "Friends";
    }else if(result==='L'){
        div.innerHTML="Love";
    }else if(result==='A'){
        div.innerHTML="Affection";
    }else if(result==='M'){
        div.innerHTML="Marriage";
    }else if(result==='E'){
        div.innerHTML="Enemy";
    }else if(result==='S'){
        div.innerHTML="Sister";
    }
    
}