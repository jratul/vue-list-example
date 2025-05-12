<template>
  <div class="product-item">
    <p>
      <strong>{{ product.name }}</strong> (ID: {{ product.id }})
    </p>
    <p>
      가격: {{ product.price }}원 / 재고: {{ product.stock }}개 / 판매량:
      {{ product.sales }}개
    </p>
    <button
      v-if="product.adAvailable"
      class="ad-button"
      @click="openModal(product)"
    >
      광고 설정
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useProductModal } from '../composables/useProductModal'

const props = defineProps<{
  product: {
    id: string
    name: string
    price: number
    stock: number
    sales: number
    adAvailable?: boolean
  }
}>()

const { openModal } = useProductModal()
</script>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  height: 150px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
}

.ad-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 4px;
}

.ad-button:hover {
  background-color: #0056b3;
}
</style>
