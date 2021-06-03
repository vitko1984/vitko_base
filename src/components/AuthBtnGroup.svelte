<div class="authBtn">
  <button type="button" name="button" on:click={() => showModal('signIn')} class="px-2 h-12 w-1/2 md:w-full hover:text-gray-400">
    <i>{ menu.buttons.signIn }</i>
  </button>
  <button type="button" name="button" on:click={() => showModal('register')} class="px-2 h-12 w-1/2 md:w-full bg-purple-400 text-white hover:text-gray-200">
    <i>{ menu.buttons.registration }</i>
  </button>

  {#if $modal.show}
    <Auth />
  {/if}
</div>

<script>
import menu from '$lib/local/ru-RU';
import { modal } from '../routes/localStore';

import Auth from './Auth/Auth.svelte';

let params = {
  show: true,
  event: 'signIn'
}

const showModal = (vl) => {
  params.show = true;
  params.event = vl;      
};

$: $modal = params;
</script>

<style lang="postcss">
.authBtn {
  @apply max-w-full flex text-sm font-normal;    
}
</style>