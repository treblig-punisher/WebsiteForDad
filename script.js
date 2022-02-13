
const photosArray = [];
let folderPath = 'images/dad';
const amountOfPhotos = 18;
//addGlobaleventListener("click", )
//const getParentPicContainer = document.querySelector(".pictures-Container").addEventListener("click", turnDimmerOn, false);;
 for(let i = 0; i < amountOfPhotos; i++)
 {
    const getMainDiv = document.getElementsByClassName("pictures-container");
    const newDiv = document.createElement("div");
    newDiv.addEventListener("click", turnDimmerOn);
    photosArray.push(folderPath+String(i)+".png");
    const newImage = document.createElement("img")
    newImage.src = photosArray[i];   
    newImage.width = 300;
    newDiv.append(newImage);
    getMainDiv[0].append(newDiv);
 
 }

 const div1 = document.querySelector(".top-container");
 const div2 = document.querySelector(".pictures-container");
 const dimmerContainer = document.querySelector(".dimmer-container");
// dimmerContainer.offsetHeight = div1.offsetHeight + div2.offsetHeight;
// dimmerContainer.offsetWidth = div2.offsetWidth*2;

function turnDimmerOff()
{
   dimmerContainer.style.display = "none";
   dimmerContainer.firstElementChild.remove();
   
}

function turnDimmerOn()
{ 
      
      dimmerContainer.style.display = "flex";
      var getThisElementsChild = this.firstElementChild;
      var newImg = document.createElement("img");
      newImg.src = getThisElementsChild.src;
      dimmerContainer.append(newImg);
      
     
      //dimmerContainer.append(imageToAdd);
      
     // imageToAdd.src = this.querySelector
}

