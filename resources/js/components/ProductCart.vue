<template>
  <Card>
    <template #title>{{ product.name }}</template>
    <template #content>
      <img :src="product.image" class="w-full object-cover h-48" />
      <p>{{ product.description }}</p>
      <p class="text-lg font-bold mt-2">${{ product.price }}</p>
    </template>
    <template #footer>
      <Button label="Agregar al Carrito" @click="addToCart" />
    </template>
  </Card>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const props = defineProps({ product: Object })
const cart = useCartStore()
const addToCart = () => cart.add(props.product)
</script>
