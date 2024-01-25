let inputTasks = document.getElementById("inputTasks")
let ulTasks = document.getElementById("ulTasks")
let btnPlus = document.getElementsByClassName("btnPlus")[0]

let categoryOne = document.getElementById("categoryOne")
let categoryTwo = document.getElementById("categoryTwo")
let categoryThree = document.getElementById("categoryThree")



function hideTasks(classE){
    Array.from(ulTasks.children).forEach(task => {
        if (task.classList.contains(classE)){
            task.style.display = "none"
        }else{
            task.style.display = "block"
        }
    })
}

    function AllTasks(){
        let allTasks = ulTasks.querySelectorAll("li")
        allTasks.forEach(task =>{
            task.style.display = "block"
        })
    }
    categoryOne.addEventListener("click", AllTasks)

    function pendingTasks(){
        let pendingTasks = ulTasks.querySelectorAll("li:not(.doDone)")
        pendingTasks.forEach(task =>{
            task.style.display = "block"
            task.classList.add("Lee")

        })
    }
    categoryTwo.addEventListener("click", ()=>{
        pendingTasks()
        hideTasks("doDone")

    })

    function doneTasks(){
        let doneTask = ulTasks.querySelectorAll("li.doDone")
        doneTask.forEach(task => {
            task.style.display = "block"
            task.classList.add("Lee")
        })
    }
    categoryThree.addEventListener("click",() => {
        doneTasks()
        Array.from(ulTasks.children).forEach(task =>{
            if(task.classList.contains("doDone")){
                task.style.visibility="block"
                task.classList.add("Lee")
            } else {
                task.style.display = "none"
            }
        })
    } )




//Rajout d'une tâche à ma liste

function redPage() {
    document.body.transition = "background-color 0.5s"
    document.body.style.backgroundColor = "#FF3B3F"
    setTimeout(()=>{
        document.body.style.transition = "background-color 0.5s"
        document.body.style.backgroundColor = ""
    },500)
    alert("Don't run away from your responsibilities"
    +" write something!")
}

function addTask() {
    if(inputTasks.value === " "){
        redPage()
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputTasks.value
        li.classList.add("Lee")

        let divConfigTask = document.createElement("div")
        divConfigTask.classList.add("configTask")

        let btnDone = document.createElement("button")
        btnDone.classList.add("btnDone")
        btnDone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'

        btnDone.addEventListener("click",() =>{
            li.classList.toggle("doDone")
        })

        let btnEdit = document.createElement("button")
        btnEdit.classList.add("btnEdit")
        btnEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>'

        btnEdit.addEventListener("click", () =>{
            function editTask(e) {
                if (e.target.classList ="btnEdit"){
                let newTask = prompt("Change your task: ")
                if(newTask !== null){
                    li.innerHTML = newTask
                    }
                }
            }
    
        })

        let btnDelete = document.createElement("button")
        btnDelete.classList.add("btnDelete")
        btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>'
        
        btnDelete.addEventListener("click",()=>{
            let confirmation = confirm("So, you declare that you have completed your task"+"\n"
            +"Are you sure you want to delete it?");
            if (confirmation) {
            li.remove();
            alert("🕊️You are now relieved and freed from a task."+ "\n"
                    +"You can be proud of yourself!🕊️"+"\n"+"\n"
                    +"🎉 Congratulations! 🎉");
                }
            })


        li.appendChild(divConfigTask)
        divConfigTask.appendChild(btnDone)
        divConfigTask.appendChild(btnEdit)
        divConfigTask.appendChild(btnDelete)
        ulTasks.appendChild(li) //Thanks Counter

    }
    inputTasks.value = ""
}

btnPlus.addEventListener("click",addTask)




// let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
// document.getElementById("btn").style.backgroundColor = randomColor;



// let allBtn = document.querySelectorAll("#btn")
// Array.from(allBtn).forEach(btn => {
    
//     btn.addEventListener("mouseover", () => {
//     let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
//     btn.style.backgroundColor = randomColor
// })
// btn.addEventListener("mouseout", () => {
// btn.style.backgroundColor = "transparent"
// })
// })

