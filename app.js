//Eltároljuk változóba az input mező értékét és a divet amibe bele akarom tölteni ezeket az értékeket
var list = document.getElementById("list");
var todoText = document.getElementById("todoText");

//Klikk esemény hozzáadása a gombomhoz és általam készített függvény leffutatása
document.getElementById("add").addEventListener("click", addTodo);


//Függvény létrehozása
function addTodo(){

        //Ha nem üres az input mezőm értéke...akkor fut tovább...
        if(todoText.value != "") {

        //Létrehozok egy bekezdést
        var p = document.createElement("p");
        //A létrehozott bekezdéshez hozzáadom az input mezőm értékét szöveges tartalomként
        p.innerText = todoText.value;
        //A létrehozott bekezdéshez adok egy "todo" classt
        p.classList.add("todo");
        //A létrehozott bekezdést (amiben már benne van az input mező értéke és rendelkezik egy todo classal) hozzáadom a "list"-hez
        list.appendChild(p);

        //Ha végbement a folyamat, akkor visszaállítom üresre az input mező értékét
        todoText.value = "";
        }
 
        //Létrehozunk egy klikk eseményt a létrehozott bekezdésre amiben a megkattintott bekezdést áthúzzuk
        p.addEventListener("click", function(){
        p.classList.toggle("line"); /*toggle-el ki-be lehet kapcsolgatni az aláhúzást!*/
        });

        //Dupla kattintás esetén töröljük ki a bekezdést a listából
        p.addEventListener("dblclick", function(){
            list.removeChild(p); //azt a bekezdést amit megkattintok azt fogja kiszedni a listából!
        })
    }

    //Az input mezőhöz hozzáadok egy keyUp(gombnyomás "ENTER") eseményt melynek hatására ugyanúgy hozzá kell adnia a listához a létrehozott bekezdést
    
    //keyup, keydown ugyan az szinte
    //mi történjen, ha lenyomom az entert!
    todoText.addEventListener("keyup", function(event){
        
            //ha az enter lenyomásra került == 13(enter) akkor meghívja a függvényemet
            if(event.keyCode == 13){
            addTodo();
            }  
    })

    

