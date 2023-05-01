<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

const form = reactive({ stock: "", price: 0, qty: 0, date: null });
const submitted = { success: false };

const submit = async () => {
  try {
    const res = await $fetch("/api/stocks", { method: "POST", body: form });
    if (res.message == "success") {
      resetForm();
      submitted.success = true;
      setTimeout(() => {
        submitted.success = false;
      }, 6000);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
const resetForm = () => {
  form.price = 0;
  form.qty = 0;
  form.stock = 0;
  form.date = null;
};
onMounted(async () => {
  initFlowbite();
  // const datepickerEl = document.getElementById('datepickerId');
  // new Datepicker(datepickerEl, {
  //   // options
  // });
});
</script>

<template>
  
  <div class="container mx-auto sm:w-4/5 mt-3">
    <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-600" role="alert"
      v-show="submitted.success">
      <span class="font-medium">Success</span>
    </div>
    <section>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
            <input type="text" id="stock" v-model="form.stock"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google" required />
          </div>
          <div>
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price
            </label>
            <input type="text" id="price" v-model="form.price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$" required />
          </div>
          <div>
            <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qty
            </label>
            <input type="text" id="qty" v-model="form.qty"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$" required />
          </div>
          <div>
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Purchase Date
            </label>

            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input v-model="form.date" datepicker-autohide datepicker datepicker-title="Flowbite datepicker" type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mm/dd/yyyy" />
            </div>
          </div>
        </div>
        <button type="button" @click="submit()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Save
        </button>
      </form>
    </section>
  </div>
</template>
