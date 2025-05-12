<template>
  <div>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProductItem from './ProductItem.vue'
import {useData} from "../composables/useData"

interface Product {
  id: string
  name: string
  price: number
  stock: number
  sales: number
  adAvailable?: boolean
}

const products = ref<Product[]>([])

onMounted(() => {
  const {getItemList, getCanAdvertiseList} = useData();
  const data = getItemList();
  products.value = data

  const adData: Record<string, boolean> = getCanAdvertiseList();

  products.value = products.value.map(p => ({
    ...p,
    adAvailable: adData[p.id] ?? false,
  }))
})
</script>
