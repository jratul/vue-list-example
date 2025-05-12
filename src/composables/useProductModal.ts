import { ref } from "vue";

const product = ref<null | {
  id: string;
  name: string;
  price: number;
  stock: number;
  sales: number;
}>(null);

const openModal = (p: typeof product.value) => {
  product.value = p;
};

const closeModal = () => {
  product.value = null;
};

export function useProductModal() {
  return {
    product,
    openModal,
    closeModal,
  };
}
