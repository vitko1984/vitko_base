
<div class="auth-reset">
  {#if !isSendingCode}
    <span class="block text-base font-semibold mt-0 mx-0 mb-5">{menu.Reset.caption}</span>
  {:else}
    <span class="block text-base font-semibold mt-0 mx-0 mb-5">{menu.Reset.captionChange}</span> 
  {/if}

  {#if !isSendingCode}
    <form class="flex flex-col gap-2 items-end" on:submit|preventDefault={resetPassword}>
      <input 
            type="text" 
            name="email" 
            bind:value={email} 
            placeholder="Email"
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
      <button type="submit" name="button" class="w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-blue-500 text-white rounded-sm">{menu.Reset.button}</button>
      {#if resetMsg}
        <span class="text-xs w-full text-green-400 my-2 mx-0">{menu.Reset.resetMsg}</span> 
      {/if}
    </form>
  {:else}  
    <form class="flex flex-col gap-2 items-end" on:submit|preventDefault={changePassword}>
      <input 
            type="password" 
            name="password"
            bind:value={password}
            placeholder={menu.Auth.newPswd} 
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
      <input 
            type="tel"
            name="code"
            maxlength="6"
            minlength="6"
            placeholder={menu.Register.enterCode}
            bind:value={code} 
            class="w-full h-12 px-5 bg-blue-50 border border-solid border-blue-100 rounded-sm focus:outline-none">
      <button type="submit" name="button" class="w-full h-12 font-bold text-sm text-center justify-center mt-5 mb-0 mx-0 bg-blue-500 text-white rounded-sm">{menu.Reset.changePass}</button>
      {#if resetMsg}
        <span class="text-xs w-full text-green-400 my-2 mx-0">{menu.Reset.resetMsg}</span> 
      {/if}
    </form>
  {/if}
</div>

<script>
import menu from '$lib/local/ru-RU';

let email = "";
let password = "";
let code = "";
let resetMsg = false;
let isSendingCode = false;

const resetPassword = async() => {
  resetMsg = true;
  await setTimeout(() => {isSendingCode = true;}, 3000);
};
const changePassword = () => {
  //resetMsg = true
};
</script>
  
<style lang="postcss">  
.auth-reset__invalid {
  @apply text-xs text-red-500 text-left w-full mt-0 mx-0 mb-2;
}
  </style>