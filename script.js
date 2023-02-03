const starsEl=document.querySelectorAll('.fas');
const emojisEl=document.querySelectorAll('.far');
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// updateRating(0);

starsEl.forEach((starEl,index)=>{
 starEl.addEventListener('click',()=>{
  updateRating(index)
 })
})

function updateRating(index){
 starsEl.forEach((starEl,idx)=>{
  console.log(idx,index);
  if(idx<=index){
   starEl.classList.add('active')
  }else{
   starEl.classList.remove('active')
  }
 })

 emojisEl.forEach((emojiEl)=>{
  emojiEl.style.transform=`translateX(-${index*50}px)`;
  emojiEl.style.color=colorsArray[index];
 })
}