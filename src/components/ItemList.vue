<template>
  <div class="list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border p-4">
    <div
      v-for="item in items"
      :key="item.id"
      @click="selectItem(item)"
      :class="[
        'list-item cursor-pointer p-2 border rounded-lg shadow-md',
        isSelected(item) ? 'selected' : ''
      ]"
    >
      <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image w-full h-32 object-cover rounded-t-lg" />
      <p class="text-center mt-2">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    selectedItems: Array,
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item);
    },
    isSelected(item) {
      
      return this.selectedItems && this.selectedItems.some(selectedItem => selectedItem && selectedItem.id === item.id);
    },
    getImageUrl(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.list-item:hover {
  background-color: #f0f0f0;
}

.item-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.selected {
  background-color: #add8e6;
  border-color: #1e90ff;
}
</style>