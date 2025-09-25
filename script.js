let closer=document.querySelector(".close")
let opened=document.querySelector(".open")
let container=document.querySelector(".container")

closer.addEventListener("click",function(){

    closer.classList.add("hide")
    opened.classList.remove("hide")
    container.classList.add("hide")
    
    })



    opened.addEventListener("click",function(){

        closer.classList.remove("hide")
        opened.classList.add("hide")
        container.classList.remove("hide")
        
        })



        const btn = document.querySelector('open');
        const list = document.querySelector('container');
    
        btn.addEventListener('click', () => {
          list.classList.toggle('show');
        });
