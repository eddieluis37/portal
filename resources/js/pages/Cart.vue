<template>
  <div>
    <h2>Mi Carrito</h2>
    <DataTable :value="cartItems">
      <Column field="name" header="Producto" />
      <Column field="price" header="Precio" />
      <Column field="quantity" header="Cantidad" />
      <Column header="Acciones">
        <template #body="{ data }">
          <Button @click="removeItem(data.id)" label="Eliminar" />
        </template>
      </Column>
    </DataTable>
    <Button label="Finalizar Compra" @click="checkout" />
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import { useCartStore } from '@/stores/cart'

// IMPORT CORRECTO de PrimeVue :contentReference[oaicite:0]{index=0}
import DataTable from 'primevue/datatable'
import Column    from 'primevue/column'
import Button    from 'primevue/button'

const cart = useCartStore()
const cartItems = ref(cart.items)

const removeItem = (id) => {
  cart.remove(id)
}

const checkout = () => {
  // lógica de envío de orden al backend
}
</script>
