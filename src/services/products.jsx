const BASE_URL = 'https://dummyjson.com';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${BASE_URL}/products?limit=100`)
        .then(response => response.json())
        .then(data => resolve(data.products))
        .catch(error => reject(error));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${BASE_URL}/products/category/${categoryId}`)
        .then(response => response.json())
        .then(data => resolve(data.products))
        .catch(error => reject(error));
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${BASE_URL}/products/${productId}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 500);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${BASE_URL}/products/categories`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 500);
  });
};
