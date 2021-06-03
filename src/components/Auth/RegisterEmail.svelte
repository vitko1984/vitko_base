<div class="auth-email">
  <form 
        action="index.html" 
        method="post"
        class="flex flex-col gap-y-2 items-end" 
        on:submit|preventDefault={registerUser}>
        {#if !isSendingCode}
          <input 
            type="text" 
            name="email"
            bind:value={email}
            placeholder="Email" 
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
          <input 
            type="password"
            name="password"
            minlength="6"
            bind:value={password}
            placeholder={menu.Register.pswdPlaceholder} 
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
          <input 
            type="tel"
            name="code"
            maxlength="6"
            bind:value={code} 
            placeholder={menu.Register.enterCode}
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
          <span class="block w-full mt-2 mr-0 mb-0 -ml-1 text-gray-600 text-sm text-center" class:marg-top={isSendingCode}>
            {menu.Register.linkGroup}
            <a href="#" class="text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">{menu.Register.linkTerms}</a>
            {menu.Register.linkGroup2}
            <a href="#" class="text-blue-500 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">{menu.Register.linkPrivacy}</a>
          </span>  
        {/if}
        <button class="w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-gray-300 text-white rounded-sm">
          {menu.Register.button}    
        </button>
  </form>
</div>
  
<script>
import menu from '$lib/local/ru-RU';

let email = "";
let password = "";
let code = "";
let isSendingCode = false;

const registerUser = () => {};
</script>
  
<style lang="postcss">
.marg-top {
  @apply mt-0;
}
</style>