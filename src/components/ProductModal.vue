<template>
  <div v-if="product" class="modal-overlay">
    <div class="modal">
      <h2 class="modal-title">상품 정보</h2>
      <p>
        <strong>{{ product.name }}</strong> (ID: {{ product.id }})
      </p>
      <p>가격: {{ product.price }}원</p>
      <p>재고: {{ product.stock }}개</p>
      <p>판매량: {{ product.sales }}개</p>
      <button class="modal-close" @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductModal } from '../composables/useProductModal'

const { product, closeModal } = useProductModal()
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  width: 380px;
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.modal-close {
  margin-top: 20px;
  background-color: #666;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.modal-close:hover {
  background-color: #444;
}
</style>
