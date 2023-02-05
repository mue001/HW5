let Colors = function(colorID,R,G,B) {
    this.colorNum = colorID;
    this.colorR = R;
    this.colorG = G;
    this.colorB = B;
}

Colors.prototype.dysplayColor = function (){
    let aColorObject = document.createElement("div");
    let displayAObject = document.createElement("h3");
    let inputR = document.createElement("input");
    inputR.name = "RGB";
    inputR.id = "colorR-of-" + this.colorNum;
    inputR.type = "number";
    inputR.value = this.colorR;

    let inputG = document.createElement("input");
    inputG.name = "RGB";
    inputG.id = "colorG-of-" + this.colorNum;
    inputG.type = "number";
    inputG.value = this.colorG;

    let inputB = document.createElement("input");
    inputB.name = "RGB";
    inputB.id = "colorB-of-" + this.colorNum;
    inputB.type = "number";
    inputB.value = this.colorB;

    aColorObject.id = "list2-of-" + this.colorNum;
    aColorObject.class = "list2";
    displayAObject.textContent = "ColorID " + this.colorNum + " : "; 
    
}