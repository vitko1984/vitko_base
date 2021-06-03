<div class="auth" transition:fly={{ y:500, duration:500 }}>
  <div class="auth__wrap backdrop-filter backdrop-blur-md">
    {#if $modal.event === 'signIn'}
      <div class="auth__inner">
        <div class="auth__header">
          <span class="auth__caption">{menu.Auth.caption}</span>
          <!--<span class="fas fa-times fa-2x cursor-pointer" on:click={() => $modal = {show:false, event:''}}></span>-->
        </div>
        <span class="auth__text">{menu.Auth.text}</span>
        <div class="auth__forms">
          <div class="auth__tab">
            {#each menu.Auth.tabs as tab, id}
              <button 
                  key={tab.name} 
                  class="w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0" 
                  class:active-btn={currentTab === tab.name} 
                  on:click={() => selectTab(tab.name)}>
                  {tab.text}
              </button>                    
            {/each}
          </div>
          <div class="auth__tab-wrap">
            {#if currentTab === 'Email'}
              <AuthEmail />
            {:else}
              <AuthPhone />
            {/if}
          </div>
        </div>
        <span class="auth__label" on:click={() => toggleAuth('register')}>{menu.Auth.label}<a href="#" class="auth__link">{menu.Auth.labelLink}</a></span>
        <div class="auth__reserve">
          <span class="auth__label">{menu.Auth.alternative}:</span>
          <div class="auth__group">
            <AuthFacebook />
            <AuthGoogle />
          </div>
        </div>      
      </div>  
    {/if}

    {#if $modal.event === 'register'}
      <div class="auth__inner">
        <div class="auth__header">
          <span class="auth__caption">{menu.Register.caption}</span>
          <!--<span class="fas fa-times fa-2x" on:click={() => $modal = {show:false, event:''}}></span>-->
        </div>
        <span class="auth__text">{menu.Register.text}</span>
        <div class="auth__forms">
          <div class="auth__tab">
            {#each menu.Auth.tabs as tab, id}
              <button key={tab.name} 
                  class="w-full h-12 text-sm font-semibold text-blue-500 cursor-pointer static mr-8 last:m-0" 
                  class:active-btn={currentTab === tab.name} 
                  on:click={() => selectTab(tab.name)}>
                  {tab.text}
              </button>                    
            {/each}
          </div>
          <div class="auth__tab-wrap">
            {#if currentTab === 'Email'}
              <RegisterEmail />
            {:else}
              <RegisterPhone />
            {/if}
          </div>
        </div>
        <span class="auth__label" on:click={() => toggleAuth('signIn')}>{menu.Register.label}<a href="#" class="auth__link">{menu.Register.labelLink}</a></span>
        <div class="auth__reserve">
          <span class="auth__label">{menu.Register.alternative}:</span>
          <div class="auth__group">
            <AuthFacebook />
            <AuthGoogle />
          </div>
        </div>      
      </div>  
    {/if}
  </div>
</div>
  
<script>
import { fly } from 'svelte/transition';

import AuthEmail from './AuthEmail.svelte'
import AuthPhone from './AuthPhone.svelte'
import RegisterEmail from './RegisterEmail.svelte'
import RegisterPhone from './RegisterPhone.svelte'
import AuthGoogle from './AuthGoogle1.svelte'
import AuthFacebook from './AuthFacebook.svelte'

import menu from '$lib/local/ru-RU';
import { modal } from '../../routes/localStore';

let currentTab = 'Email';

const selectTab = (vl) => {
  currentTab = vl;
};
const toggleAuth = (vl) => {
  $modal = {show: true, event: vl};
};

$: console.log('modal: ', $modal);
$: console.log('currentTab: ', currentTab);
</script>

<style lang="postcss">
.auth {
  @apply fixed overflow-hidden w-full h-full top-0 left-0 z-20;
}

.auth__wrap {
  @apply w-full h-full bg-white bg-opacity-60 overflow-y-auto;    
}

.auth__inner {
  @apply absolute left-1/2 top-1/2 bg-white max-w-full px-6 pt-12 pb-10 text-gray-600 flex flex-col shadow-menu rounded-b-lg transform -translate-x-1/2 -translate-y-1/2;
  width: 468px;   
}

.auth__header {
  @apply flex items-center justify-between mx-0 mt-0 mb-2;
}

.auth__caption {
  @apply text-xl font-bold;
}

.auth__text {
  @apply mx-0 mt-0 mb-2 text-sm;
}

.auth__forms {
  @apply mx-0 mt-0 mb-5;
}

.auth__label {
  @apply text-gray-400 text-sm font-semibold text-center mx-0 mt-0 mb-2;
}

.auth__group {
  @apply flex justify-center flex-wrap;
}

.auth__reserve {
  @apply mx-0 mt-10 mb-0 flex flex-col;
}

.auth__tab {
  @apply flex mx-0 mt-0 mb-6;
  box-shadow: inset 0px -1px 0px #f2f4f6;
}

.auth__tab-wrap {

}

.btn {
  @apply w-40 h-12 mx-2 mt-0 mb-2;    
}

.active-btn {
  @apply shadow-btns;
}
    
</style>