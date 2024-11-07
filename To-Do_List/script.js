    const inputBox = document.getElementById("input_box");
    const list = document.getElementById("list_container");

    function AddTask(){
        if(inputBox.value === ''){
            alert("You must write something !");
        }else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            list.appendChild(li);

            // add cross button 
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
            inputBox.value = '';
            savaData();
    }
    // list.addEventListener("click",function(e){
    //          if(e.target.tagName === "LI"){
    //             e.target.classList.toggle("checked");
    //             savaData()
    //     }
    //     else if(e.target.tagName === "SPAN"){
    //             e.target.parentElement.remove();
    //             savaData()
    //     }

    // },false);

    //  add eventListener 
    list.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savaData();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savaData()
        }
    },false);

    // Save the Data and show the Data 
    function savaData(){
        localStorage.setItem("data",list.innerHTML);
    }
     function showTask(){
        list.innerHTML = localStorage.getItem("data")
     }
     showTask();