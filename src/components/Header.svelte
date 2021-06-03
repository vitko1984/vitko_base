<svelte:window bind:innerWidth={ widthWin } />

<header class="header" class:themeDark={ $theme }>
  <div class="container-no-height">
    <div class="relative flex justify-between items-center h-12">  
      <a href="/" class="header__logo">
        <i class="fab fa-accusoft fa-2x mr-2 text-purple-500"></i>   
        <div class="grid gap-0 text-gray-600" class:textDark={$theme}>
          <i class="font-bold text-lg leading-none">Вит-Ко</i>
          <i class="font-semibold text-xs leading-none">кровля и стройка</i>
        </div>
      </a>
      <Menu />
      {#if isSearch}
        <Search />        
      {/if}
      {#if widthWin > 768}
        {#if !!isLogin}
          <Account />
        {:else}
          <AuthBtnGroup />
        {/if}       
      {/if}
      <div class="invisible md:visible">
        <DarkModeSwitcher />
      </div>
    </div>
  </div>
</header>

<script>
  import { theme } from '../routes/store';  
  import Account from '../components/Account.svelte';
  import AuthBtnGroup from '../components/AuthBtnGroup.svelte';
  import Menu from '../components/Menu.svelte';
  import DarkModeSwitcher from './ToggleTheme.svelte';
  import Search from './Search.svelte';

  let isSearch = true;
  let isLogin = '';
  let widthWin;
</script>

<style lang="postcss">
.header__logo {
  @apply absolute left-2 md:static flex flex-shrink-0;
}

.themeDark {
  @apply bg-gray-800;
}

.textDark {
  @apply text-gray-300;
}
</style>