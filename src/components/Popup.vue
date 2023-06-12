<template>
  <div class="popup">
    <div class="popup_background"></div>
    <div class="popup_wrap">
      <div class="popup_img">
        <div class="x_button">
          <img src="@/assets/icn-close-01-1.png" alt=""/>
        </div>
        <img src="@/assets/clover.png" alt=""/>
        <a class="participaion" href="#"><img src="@/assets/participation.png"></a>
      </div>
    </div>
  </div>
</template>

<style>
.popup_img{
  display:flex;
  flex-flow: column nowrap;
}

.popup_wrap{
  position: fixed;
  z-index: 10001;
  visibility: visible;
  width: 358px;
  top: 50%;
  left: 50%;
  margin-left: -179px;
  margin-top: -233.5px;
}

.participation{
  z-index:2;
}

.x_button{
  position: absolute;
    top: 3%;
    right: 3%;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: 0 none;
}

.popup_background{
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.popup_background.click{
  display:none;
}

.popup_wrap.click{
  display:none;
}
</style>

<script setup>
import { onMounted } from "vue"

onMounted(function() {
  const popup_close=document.querySelector('.x_button')
  const popup=document.querySelector('.popup_wrap')
  const popup_back=document.querySelector('.popup_background')
  
  popup_close.addEventListener('click', function(){
    popup.classList.add('click');
    popup_back.classList.add('click');
  })
})

</script>