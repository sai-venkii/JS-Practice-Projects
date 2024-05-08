function processData(string){
    console.log(string);
    removeOutput();
    var b=document.getElementById('button');
    if(string.length!=6 && string.length!=5){
        var err=document.createElement('p');
        err.innerHTML='Input Error';
        err.setAttribute('id','error');
        b.insertAdjacentElement('afterend',err);
        return;
    }
    var year=string.substring(0,2);
    var course=string.substring(2,4);
    var rollNo=string.substring(4,6);
    var div=document.createElement('div');
    div.setAttribute('id','output');
    var y=document.createElement('p');
    y.textContent="20"+year+" - "+"20"+(parseInt(year)+5);
    var c=document.createElement('p');
    c.textContent=getCourse(course);
    var r=document.createElement('p');
    r.textContent="Roll No: "+rollNo;
    b.insertAdjacentElement('afterend',div);
    div.appendChild(y);
    y.insertAdjacentElement('afterend',c);
    c.insertAdjacentElement('afterend',r);
}

function removeOutput(){
    var err=document.getElementById('error');
    var output=document.getElementById('output');
    if(err){
        err.remove();
    }
    if(output){
        output.remove();
    }
}

function getCourse(course){
    if(course==="PC"){
        return "Cyber Security";
    }else if(course === "PW"){
        return "Software Systems";
    }else if(course === "PT"){
        return "Theoretical Computer Science";
    }else if(course === "PD"){
        return "Data Science";
    }else {
        return "Invalid Course Entered";
    }
}