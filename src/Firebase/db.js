import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
}

export const getProductsByCategory = async (categoryId) => {
  try {
    const q = query(collection(db, "products"), where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    throw error;
  }
}

export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No existe el producto");
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    throw error;
  }
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Orden creada con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creando orden:", error);
    throw error;
  }
}

export default db;
