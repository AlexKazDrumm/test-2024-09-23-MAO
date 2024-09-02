<template>
  <div class="container">
    <div class="selected-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div v-for="item in selectedItems" :key="item.id" class="selected-item p-2 border rounded-lg shadow-md">
        <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image w-full h-32 object-cover rounded-t-lg" />
        <p class="text-center mt-2">{{ item.name }}</p>
      </div>
    </div>
    <p class="col-span-full text-center mt-4">Selected: {{ selectedItems.length }} / {{ limit }}</p>
  </div>
</template>

<script>
export default {
  props: {
    selectedItems: Array,
    limit: Number,
  },
  methods: {
    getImageUrl(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 8px;
}
.selected-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.selected-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.item-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
