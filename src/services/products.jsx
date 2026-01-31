import { getProducts as getProductsFromDB, getProductsByCategory as getProductsByCategoryFromDB, getProductById as getProductByIdFromDB } from '../Firebase/db';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getProductsFromDB()
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getProductsByCategoryFromDB(categoryId)
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getProductByIdFromDB(productId)
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 500);
  });
};

