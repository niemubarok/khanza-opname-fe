<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script setup>
import {onMounted,ref, inject} from 'vue'

const store = inject('store')
const obat = ref("")

onMounted(async ()=>{
 const getObat = await store.opname.getSettings()
})
</script>
