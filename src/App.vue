<template>
  <div id="app">
    <h1>Тестовое задание VueJS</h1>
    <div class="container">

      <div class="block">
        <SelectedItems :selectedItems="selectedUserItems" :limit="6" />
      </div>

      <div class="block">
        <SelectedAvailableItem :selectedItem="selectedAvailableItem" />
      </div>
    </div>

    <div class="container">

      <div class="block">
        <ItemList
          :items="userItems"
          :selectedItems="selectedUserItems"
          @select="handleSelectUserItem"
        />
      </div>

      <div class="block">
        <ItemList
          :items="availableItems"
          :selectedItems="[selectedAvailableItem]"
          @select="handleSelectAvailableItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUserItems, fetchAvailableItems } from './api';
import SelectedItems from './components/SelectedItems.vue';
import SelectedAvailableItem from './components/SelectedAvailableItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    SelectedItems,
    SelectedAvailableItem,
    ItemList,
  },
  data() {
    return {
      userItems: [],
      availableItems: [],
      selectedUserItems: [],
      selectedAvailableItem: null,
    };
  },
  async created() {
    try {
      this.userItems = await fetchUserItems();
      this.availableItems = await fetchAvailableItems();
    } catch (error) {
      console.error('Error loading items:', error);
    }
  },
  methods: {
    handleSelectUserItem(item) {
      if (this.selectedUserItems.includes(item)) {
        this.selectedUserItems = this.selectedUserItems.filter(
          (i) => i.id !== item.id
        );
      } else if (this.selectedUserItems.length < 6) {
        this.selectedUserItems.push(item);
      }
    },
    handleSelectAvailableItem(item) {
      this.selectedAvailableItem = item;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.block {
  width: 45%;
}
</style>