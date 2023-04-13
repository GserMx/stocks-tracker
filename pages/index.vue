<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

const form = reactive({ stock: "", price: 0, qty: 0 });
const submitted = { success: false };

const submit = () => {
  const res = $fetch("/api/stocks", { method: "POST", body: form });
  console.log(res);
  if (res.message == "success") {
    debugger;
    resetForm();
    submitted.success = true;
    setTimeout(() => {
      submitted.success = false;
    }, 6000);
  }
};
const resetForm = () => {
  form.price = 0;
  form.qty = 0;
  form.stock = 0;
};
onMounted(async () => {
  initFlowbite();
  const datepickerEl = document.getElementById("datepickerId");
  // new Datepicker(datepickerEl, {
  // // options
  // });
});
</script>

<template>
  <div class="container mx-auto sm:w-4/5 mt-3">
    <div
      class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-600"
      role="alert"
      v-show="submitted.success"
    >
      <span class="font-medium">Success</span>
    </div>
    <section>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="stock"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Stock</label
            >
            <input
              type="text"
              id="stock"
              v-model="form.stock"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google"
              required
            />
          </div>
          <div>
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Price
            </label>
            <input
              type="text"
              id="price"
              v-model="form.price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$"
              required
            />
          </div>
          <div>
            <label
              for="qty"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Qty
            </label>
            <input
              type="text"
              id="qty"
              v-model="form.qty"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$"
              required
            />
          </div>
        </div>
        <button
          type="button"
          @click="submit()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </section>
  </div>
</template>
