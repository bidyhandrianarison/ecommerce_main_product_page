const mainImage=document.querySelector('#mainImage').querySelector('img')
let image=document.querySelector('#otherImage').querySelectorAll('img')
let monPanier= document.querySelector(".cartContent")
let panierContainer=document.querySelector('.forProduct')
console.log(image)
mainImage.src=image[0].src
console.log(mainImage)
resetCart("Your cart is empty");
//AFFICHAGE IMAGE
for(let i=0;i<image.length;i++)
{
    image[i].addEventListener('click',()=>{
        mainImage.src=image[i].src
        image[i].classList.toggle("selectedImage")
    })
}
let number=0;
let boutons=document.querySelector(".count").querySelectorAll('button')
boutons[0].addEventListener('click',()=>{
    number--;
    if(number<0){
        number=0;
    }
        document.querySelector(".quantity").innerText=number;
})
boutons[1].addEventListener('click',()=>{
    number++;
    document.querySelector(".quantity").innerText=number;
})
document.getElementById("panier").addEventListener('click',()=>{
   monPanier.classList.toggle("hidden");
})
//AJOUT DANS LE PANIER
function ajoutPanier(image,nom,prix,quantite){
    
    let nouveauSection=document.createElement('section');
    nouveauSection.className="innerCart"
    let imageProduit=document.createElement('img');
    imageProduit.src=image.src;
    nouveauSection.appendChild(imageProduit);
    let divDetails=document.createElement('div')
    let nomProduit=document.createElement("p");
    nomProduit.innerText=nom;
    divDetails.appendChild(nomProduit);
    let totalPrix=document.createElement('p');
    totalPrix.innerHTML=`${prix}  x  ${quantite} $<strong>${prix*quantite}</strong>`;
    divDetails.appendChild(totalPrix);
    nouveauSection.appendChild(divDetails)
    panierContainer.appendChild(nouveauSection);
    document.querySelector('.cartContent button').classList.remove('hidden')
    let nbre=document.querySelector('.panierNumber');
    let n=document.querySelectorAll('.innerCart').length
    nbre.innerText=n
    if(n>0){
        nbre.classList.remove('hidden')
        panierContainer.querySelector('p').innerText='';
    }
}
//FONCTION QUI REMET LE PANIER A VIDE
function resetCart(text=''){
    panierContainer.innerHTML=`<p>${text}</p>`
}
let productName=document.querySelector(".nameOfProduct").innerText;
let productPrice=document.querySelector(".truePrice").innerText;
let productQuantity=document.querySelector(".quantity").innerText;

document.getElementById('cart').addEventListener('click',()=>{
    console.log(mainImage)
    ajoutPanier(mainImage,productName,productPrice,number)
}
)
document.querySelector('.cartContent button').addEventListener('click',()=>{
    resetCart("Your cart is empty");
    document.querySelector('.cartContent button').classList.add('hidden');
    let n=document.querySelectorAll('.innerCart').length
    let nbre=document.querySelector('.panierNumber');
    nbre.innerText=n
    if(n>0){
        nbre.classList.remove('hidden')
    }
    else{
        nbre.classList.add('hidden')

    }
})
let page=document.querySelector('.container')
let divDiapo=document.createElement('div');
divDiapo.className="diapo"
let containerMain=document.createElement('div')
containerMain.className="imageActive"
let mainProduct=document.createElement('img')
mainProduct.src=mainImage.src
containerMain.appendChild(mainProduct);
let prev=document.createElement('button');
prev.innerHTML=`<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>`
prev.id="prev"
containerMain.appendChild(prev)
let next=document.createElement('button')
next.innerHTML=`<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>`
next.id="next"
containerMain.appendChild(next)
divDiapo.appendChild(containerMain)
let pics=document.createElement('div');
pics.className="allImages";
for(let i=0;i<image.length;i++){
    let element=document.createElement('img');
    element.src=image[i].src;
    pics.appendChild(element);
}
divDiapo.appendChild(pics);
page.appendChild(divDiapo);
