<script setup>
import router from "@/router/index.js";
import apiClient from "@/boot/axios.js";
import {useUserStore} from "@/store/user-store.js";

const userStore = useUserStore()
function onSubmit() {
  userStore.$state.user = "skdflsdfl"
  apiClient.get("/warehouses").then((e) => {
    router.push("/home");
  });
}
</script>

<template>
  <div class="flex items-center min-h-screen p-4 border-gray-200 dark:bg-gray-800 lg:justify-center">
    <div
        class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
          class="p-4 py-6 text-white bg-green-400 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <a href="#">K-WD</a>
        </div>
        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
          UI design on us!
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Don't have an account?</span>
          <a href="#" class="underline">Get Started!</a>
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
        </p>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
        <form @submit="(e) => {e.preventDefault(); onSubmit();}" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Login</label>
            <input
                id="login"
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              <a href="#" class="text-sm text-green-400 hover:underline focus:text-green-800">Forgot Password?</a>
            </div>
            <input
                type="password"
                id="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
            />
            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
          </div>
          <div>
            <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-400 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>