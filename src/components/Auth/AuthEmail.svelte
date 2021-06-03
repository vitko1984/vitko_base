<div class="auth-email">
  {#if !isReset}
    <form method="post" class="flex flex-col gap-y-2 items-end" on:submit|preventDefault={login}>
      <input 
            type="text" 
            name="email"
            bind:value={email}
            placeholder="Email"
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none" 
            class:invalid={isReset}>
      <input 
            type="password" 
            name="password"
            minlength="6"
            bind:value={password}
            placeholder={menu.Auth.pswdPlaceholder}
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none" 
            class:invalid={isReset}>
      <div class="w-full flex justify-end">
        <a href="#" on:click={() => isReset = true}>{menu.Auth.labelPswd}</a>  
      </div>        
      <button type="submit" name="button" class="w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm">
        {menu.Auth.button}
      </button>      
    </form>
  {:else}
    <ResetPswd />    
  {/if}
</div>
  
<script>
import menu from '$lib/local/ru-RU';

import ResetPswd from "./ResetPswd.svelte";

let isReset = false;
let email = "";
let password = "";

const login = () => {

};
</script>
  
<style lang="postcss">  
.invalid {
  @apply w-full text-left text-red-500 text-xs;
}
</style>