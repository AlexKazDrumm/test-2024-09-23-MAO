<template>
  <div class="container">
    <h3>Selected Item</h3>
    <div v-if="selectedItem" class="p-2 border rounded-lg shadow-md">
      <img :src="getImageUrl(selectedItem.image)" :alt="selectedItem.name" class="item-image w-full h-48 object-cover rounded-t-lg" />
      <p class="text-center mt-2">{{ selectedItem.name }}</p>
    </div>
    <p v-else class="text-center p-4">No item selected</p>
  </div>
</template>

<script>
export default {
  props: {
    selectedItem: Object,
  },
  methods: {
    getImageUrl(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.item-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 8px;
}
</style>
