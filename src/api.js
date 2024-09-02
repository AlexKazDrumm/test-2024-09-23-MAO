export function fetchUserItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Shoes 1', image: 'shoes1.jpg' },
          { id: 2, name: 'Shoes 2', image: 'shoes2.jpeg' },
          { id: 3, name: 'Shoes 3', image: 'shoes3.jpg' },
          { id: 4, name: 'Shoes 4', image: 'shoes4.jpg' },
          { id: 5, name: 'T-shirt 1', image: 'tshirt1.webp' },
          { id: 6, name: 'T-shirt 2', image: 'tshirt2.webp' },
          { id: 7, name: 'T-shirt 3', image: 'tshirt3.jpg' },
          { id: 8, name: 'T-shirt 4', image: 'tshirt4.webp' },
        ]);
      }, 500);
    });
  }
  
  export function fetchAvailableItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 11, name: 'Jacket 1', image: 'jacket1.webp' },
          { id: 12, name: 'Jacket 2', image: 'jacket2.jpg' },
          { id: 13, name: 'Jacket 3', image: 'jacket3.jpg' },
          { id: 14, name: 'Jacket 4', image: 'jacket4.webp' },
          { id: 15, name: 'Hoodie 1', image: 'hoodie1.jpg' },
          { id: 16, name: 'Hoodie 2', image: 'hoodie2.jpeg' },
          { id: 17, name: 'Hoodie 3', image: 'hoodie3.jpg' },
          { id: 18, name: 'Hoodie 4', image: 'hoodie4.jpg' },
        ]);
      }, 500);
    });
  }