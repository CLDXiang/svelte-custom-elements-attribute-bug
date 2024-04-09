<script setup lang="ts">
import { ref } from 'vue';

const x = ref(false);

function toggle() {
  x.value = !x.value;
}
</script>

<template>
  <div class="page" @click="toggle">
    <my-component :a-boolean="x" />
    <my-component a-boolean="true" />
    <my-component a-boolean="false" />
    <my-component a-boolean />
    <my-component />
    <my-component :a-boolean="true" />
    <my-component :a-boolean="false" />
    <unknown-component :a-boolean="x" />
    <unknown-component a-boolean="true" />
    <unknown-component a-boolean="false" />
    <unknown-component a-boolean />
    <unknown-component />
    <unknown-component :a-boolean="true" />
    <unknown-component :a-boolean="false" />
  </div>
</template>

<style>
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
