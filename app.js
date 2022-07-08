const post_form=document.getElementById('post_form')
const outputdiv=document.getElementById('outputdiv')
const msg=document.querySelector('.msg')


// get all products 



const getAllProducts=()=>{

    // get all lsdata



  const data =readLSData('product')

   // validate
   if(!data){
      outputdiv.innerHTML = `
      <div class="wdiv">
         <h5>Welcome to Instragram</h5>
      </div>
      `
   }
   if(data){
      let list='' 


     data.reverse().map((item,index)=>{
        
        list +=`
   <div class="posting">
    <div class="posthead">
    <img src="${item.aphoto}" alt="">
    <p>${item.name}</p>
    <i class="fa-solid fa-ellipsis"></i>
  </div>
  <div class="imgpost">
        <img src="${item.photo}" alt="">
  </div>
  <div class="like">
    <i class="bi bi-heart love"></i>
    <i class="bi bi-chat text"></i>
    <i class="bi bi-send sent"></i>
    <i class="fa-solid fa-bookmark save"></i>
  </div>
  <div class="totallike">
       <p>100 like</p>
  </div>
  <div class="texted">
    <p>${item.text} </p>
  </div>
  <div class="time">
    <p>1 our ago</p>
  </div>
  <div class="comm">
    <i class="bi bi-emoji-smile"></i>
    <input placeholder="Add a comment..." type="text" name="" id="">
  </div>
                      
                      
  </div>
    `
  outputdiv.innerHTML=list

     })



   }



}
getAllProducts()


post_form.onsubmit=(e)=>{
   console.log(e.target);
   e.preventDefault()
   let  formdata = new FormData(e.target)
   let alldata = Object.fromEntries(formdata.entries());
   let {name,aphoto,text,photo} = Object.fromEntries(formdata.entries());
   

   

if(!name || !aphoto || !text || !photo){

    msg.innerHTML=setAlert('All filed are requard')
    console.log('no data');

}else{
   console.log('data stable');
   msg.innerHTML=setAlert('data stable','info')
   createLSData('product',alldata)
location.reload()
}


      // e.target.reset()


   
   
   

}
