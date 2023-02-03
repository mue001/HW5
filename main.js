let colorID = 0;
let Colors = function(colorID,R,G,B) {
    this.colorNum = colorID;
    this.colorR = R;
    this.colorG = G;
    this.colorB = B;
};
let colorLibrary = [];

document.addEventListener("DOMContentLoaded", function(event){

    document.getElementById("colorbtn").addEventListener("click", function(){

    colorID++;
    let R = parseInt(Math.random() * 256);
    let G = parseInt(Math.random() * 256);
    let B = parseInt(Math.random() * 256);
    colorLibrary.push(new Colors(colorID,R,G,B));

    //List colors you made
    let list = document.createElement("div");
    list.textContent = `ColorID: ${colorID}  RGB ${R} : ${G} : ${B}`;
    document.getElementById("colorItems").append(list);

    list.style.background = "rgb(" + R + "," + G + "," + B + ")";

    displayAllColors(colorID,R,G,B);
    

});
});

//display all colors in 

// function displayAllColors(){

//       let list2 = document.createElement("div");
//       let inputR = document.createElement("input")
//       let inputG = document.createElement("input")
//       let inputB = document.createElement("input")
//       document.getElementById("organizeItems").append(list2);
//       list2.append(inputR, inputG, inputB)
//       inputR.value = colorLibrary.colorR;
//       inputG.value = colorLibrary.colorG
//       inputB.value = colorLibrary.colorB
//       list2.style.background = "rgb(" + colorLibrary.colorR + "," + colorLibrary.colorG + "," + colorLibrary.colorB + ")";
      
// }


function displayAllColors(colorID,R,G,B){


        console.log(colorID,R,G,B)
    
        let list2 = document.createElement("div");
        list2.textContent = `ColorID: ${colorID}  RGB ${R} : ${G} : ${B}`;
        document.getElementById("organizeItems").append(list2);
        list2.style.background = "rgb(" + R + "," + G + "," + B + ")";

        let editbtn = document.createElement("input");
        list2.append(editbtn);
        editbtn.type = "button";
        editbtn.value = "Edit";
        
        //function to edit color code
        editbtn.onclick = function(){
            list2.textContent.isContentEditable = true;
        }
        
};



