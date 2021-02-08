<template>
 <div>
    <DataView :value="listProduct" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
          <div class="p-grid p-nogutter">
              <div class="p-col-6" style="text-align: left">
                  <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
              </div>
          </div>
      </template>

      <template #grid="slotProps">
          <div class="p-col-3 p-p-4">
              <Card>
                  <template #header>
                      <img alt="user header" src="/images/temp/carrots.jpg">
                  </template>
                  <template #title>
                      {{slotProps.data.product_name}}
                  </template>
                  <template  #content>
                      <i class="pi pi-tag product-category-icon p-pr-2"></i><span class="product-category">{{slotProps.data.product_type}}</span>
                      <div class="product-price p-pr-4">${{slotProps.data.product_price}}</div>
                  </template>
                  <template #footer>
                    <Button 
                      icon="pi pi-times" 
                      class="p-button-danger" 
                      label="Unsubscribe" 
                      @click="openConfirmationModal(slotProps.data, 'unsubscribe')" />
                  </template>
              </Card>
          </div>
      </template>
    </DataView>

    <action-confirmation-modal
      :is-visible="confirmationModalIsVisible"
      :selected-product="selectedProduct"
      :selected-task="selectedTask"
      @cancel="closeConfirmationModal()"
      @unsubscribe="unsubscribe()" />
  </div>
</template>

<script>
import ActionConfirmationModal from '../ActionConfirmationModal.vue'

export default {
  name: 'CustomerSubscriptionsPage',
  components: {
    ActionConfirmationModal
  },
  data() {
		return {
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
          {label: 'Price High to Low', value: '!product_price'},
          {label: 'Price Low to High', value: 'product_price'},
      ],
      confirmationModalIsVisible: false,
      selectedProduct: null,
      selectedTask: null,
      listproduce:[
        "berries.jpg",
        "blueberries.jpg",
        "broccoli.jpg",
        "carrots.jpg"
      ]
      ,
      listProduct:[
        {
          product_id: 1,
          product_name: "carrots", 
          product_type: "food",
          product_price: 15.99,
          is_subscribed: true,
        }, 
        {
          product_id: 2,
          product_name: "crrots", 
          product_type: "food", 
          product_price: 15.99,
          is_subscribed: true,
        }, 
        {
          product_id: 3,
          product_name: "carots", 
          product_type: "food",
          product_price: 15.99,
          is_subscribed: true,
        }, 
        {
          product_id: 4,
          product_name: "carots", 
          product_type: "food",
          product_price: 15.99,
          is_subscribed: true,
        }, 
        {
          product_id: 5,
          product_name: "carots", 
          product_type: "food",
          product_price: 15.99,
          is_subscribed: true,
        }, 
        {
          product_id: 6,
          product_name: "carros", 
          product_type: "food",
          product_price: 15.99,
          is_subscribed: true,
        },
      ]
		}
	},
  methods: {
    openConfirmationModal(product, task) {
      this.selectedProduct = product;
      this.selectedTask = task;
      this.confirmationModalIsVisible = true;
    },
    closeConfirmationModal() {
      this.confirmationModalIsVisible = false;
    },

    unsubscribe() {
      let index = this.listProduct.findIndex(element => {
        return element.product_id == this.selectedProduct.product_id;
      })
      this.listProduct.splice(index, 1);
      this.closeConfirmationModal();
    },
  }
}
</script>

<style>

</style>