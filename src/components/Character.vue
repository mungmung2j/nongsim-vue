<template>
  <div class="character"></div>
</template>

<style>
.character{
  width: 188px;
  height: 176px;
  background: url(@/assets/character1.png);
  background-size: contain;
}

.character.over{
  background: url(@/assets/character2.png);
}

</style>

<script setup>
import { onMounted } from "vue"

onMounted(function(){
  const character=document.querySelector('.character')

character.addEventListener('mouseover', function(){
  character.classList.add('over')
})

character.addEventListener('mouseleave', function(){
  character.classList.remove('over')
})
})
</script>
