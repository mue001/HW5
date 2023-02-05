let colorID = 0;
let Colors = function(colorID,R,G,B) {
    this.colorNum = colorID;
    this.colorR = R;
    this.colorG = G;
    this.colorB = B;
};
let colorLibrary = [];


document.addEventListener("DOMContentLoaded", function(){

    //Create function to choose random numbers for RGB and push it to the array ColorLibrary
    document.getElementById("colorbtn").addEventListener("click", function(){

    colorID++;
    let R = parseInt(Math.random() * 256);
    let G = parseInt(Math.random() * 256);
    let B = parseInt(Math.random() * 256);
    colorLibrary.push(new Colors(colorID,R,G,B));

    //List colors that you made
    let list = document.createElement("div");
    list.id = "colorList";
    list.textContent = `ColorID: ${colorID}  RGB ${R} : ${G} : ${B}`;
    document.getElementById("colorItems").append(list);
    list.style.background = "rgb(" + R + "," + G + "," + B + ")";

    //Call a function to display the color list in the Color Library page
    displayAllColors();

    //Call a function to display the newest color list
    document.getElementById("newbtn").addEventListener("click", displayNewestColors);

    });
    
});

//Create a function to display all color items in the Color Library page 
function displayAllColors(){
    document.getElementById("listItems").textContent = "";

    for(i=0; i<colorLibrary.length; i++){
    let list2 = document.createElement("div");
    let displayID = document.createElement("h3");
    let inputR = document.createElement("input");
    let inputG = document.createElement("input");
    let inputB = document.createElement("input");
    list2.id = "list2-of-" + colorLibrary[i].colorNum;
    list2.class = "list2";
    displayID.textContent = "ColorID " + colorLibrary[i].colorNum + " : ";
    inputR.name = "RGB";
    inputG.name = "RGB";
    inputB.name = "RGB";
    inputR.id = "colorR-of-" + colorLibrary[i].colorNum;
    inputG.id = "colorG-of-" + colorLibrary[i].colorNum;
    inputB.id = "colorB-of-" + colorLibrary[i].colorNum;
    inputR.type = "number";
    inputG.type = "number";
    inputB.type = "number";
    inputR.value = colorLibrary[i].colorR;
    inputG.value = colorLibrary[i].colorG;
    inputB.value = colorLibrary[i].colorB;

    //Create the change button for each div (set changebtn's id = colorNum of colorLibrary)
    let changebtn = document.createElement("button");
    changebtn.textContent = "change";
    changebtn.id = colorLibrary[i].colorNum;
    
    //Create a function to change color and pass the valuable of the changebtn's id
    changebtn.addEventListener("click", function(event){
        console.log(event.target.id)
        let targetNum = event.target.id;
        changeColor(targetNum);
    });

    //Append all items in divs
    document.getElementById("listItems").append(list2);
    list2.append(displayID);
    list2.append(inputR, inputG, inputB);
    list2.append(changebtn);
    list2.style.background = "rgb(" + colorLibrary[i].colorR + "," + colorLibrary[i].colorG + "," + colorLibrary[i].colorB + ")";

    };
}
    

//Change color of dav and change valuables in the array
function changeColor(targetNum){
    
    let newR = parseInt(document.getElementById("colorR-of-" + colorLibrary[targetNum-1].colorNum).value);
    let newG = parseInt(document.getElementById("colorG-of-" + colorLibrary[targetNum-1].colorNum).value);
    let newB = parseInt(document.getElementById("colorB-of-" + colorLibrary[targetNum-1].colorNum).value);
    colorLibrary[targetNum-1].colorR = newR;
    colorLibrary[targetNum-1].colorG = newG;
    colorLibrary[targetNum-1].colorB = newB;

    let newDiv = document.getElementById("list2-of-" + colorLibrary[targetNum-1].colorNum);
    newDiv.style.background = "rgb(" + newR + "," + newG + "," + newB + ")";
}
    

function displayNewestColors(){
    document.getElementById("newestColorItems").textContent = "";

    //delete old color lists and create new div with the same name
    document.getElementById("colorItems").remove();
    let newColorItems = document.createElement("div");
    newColorItems.id = "colorItems";
    document.getElementById("colorList").append(newColorItems);

    //Create the newest color list
    for(x=0; x<colorLibrary.length; x++){
        let list3 = document.createElement("div");
        list3.id = "newList";
        let newestR = colorLibrary[x].colorR;
        let newestG = colorLibrary[x].colorG;
        let newestB = colorLibrary[x].colorB;
        list3.textContent = `ColorID: ${colorLibrary[x].colorNum}  
        RGB ${newestR} : ${newestG} : ${newestB}`;
        document.getElementById("newestColorItems").append(list3);
        list3.style.background = "rgb(" + newestR + "," + newestG + "," + newestB + ")";
    }
}
