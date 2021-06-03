<svelte:window bind:innerWidth={ widthWin } />

<div class="menu">
  <div class=" menu__btn md:hidden">
    {#if isActiveMenu}
      <label for="menu-toggle" class="cursor-pointer fas fa-times" in:fade></label>
    {:else}
      <label for="menu-toggle" class="cursor-pointer fas fa-bars" in:fade></label>    
    {/if}
    <input id="menu-toggle" type="checkbox" bind:checked={isActiveMenu} class="hidden" />
  </div>

  {#if widthWin <= 768}
    {#if isActiveMenu}
      <nav class="menu__wrap-md" transition:fly={{ x:-200, duration:500 }} class:themeDark={ $theme }>
        <div class="mt-1 border-b border-solid border-gray-100">
          {#if isLogin}
            <Account />
          {:else}
            <AuthBtnGroup />
          {/if}
        </div>
        <ul class="menu__list">
          {#each menuList as items, id}
            <li key={id} 
                on:click={() => toggleVisited(id)} class:link-active={!$theme && keyList === id} class:textDark={$theme && keyList === id} 
                class="relative flex h-16 px-2 border-b border-solid border-gray-100 items-center">
              <button class="text-sm font-semibold text-gray-400 hover:text-purple-400 focus:outline-none" on:click={ navigateTo(items.path) }>
                <i>{ items.name }</i>
              </button>
              {#if items.sublist}
                <span on:click={ () => {if (items.sublist) {isActiveSubMenu = !isActiveSubMenu; keySubMenuList = id;}} } 
                    class="menu__arrow" 
                    class:menu__arrow-active={ isActiveSubMenu &&  keySubMenuList === id}>
                  <i class="fas fa-chevron-right"></i>
                </span>
              {/if}
              
            </li>
            {#if isActiveSubMenu && keySubMenuList === id}
              <nav class="menu__sub_md" class:themeDark={ $theme }>
                <ul class="menu__sub-list_md">
                  {#each items.sublist as subitem, id}
                    <li on:click={() => {isActiveMenu = false; isActiveSubMenu = false;}}
                    class="flex items-center hover:bg-gray-100 h-16" key={id}>
                      <a href={ subitem.path } class="menu__sub-link text-gray-400" class:textDark={ $theme }>
                        <i>{ subitem.name }</i>
                      </a>
                    </li>
                  {/each}
                </ul>
              </nav>
            {/if}
          {/each}
        </ul>
      </nav>
      <span class="shadow" transition:fly={{ x:200, duration:500 }}></span>
    {/if}
  {:else}
    <nav class="menu__wrap">
      <ul class="menu__list">
        {#each menuList as items, id}
          <li  
              key={id} 
              on:click={() => toggleVisited(id)} class:link-active={!$theme && keyList === id}
              on:mouseover={() => {isActiveSubMenu = items.sublist ? true : false; keySubMenuList = id;}}
              use:clickOutside={() => {isActiveSubMenu = false; keySubMenuList = undefined; keyList = undefined;}} 
              class="menu__item" 
              class:textDark={$theme && keyList === id}>
            <button class="menu__link" on:click={ navigateTo(items.path) }>
              <i>{ items.name }</i>
            </button>
            {#if isActiveSubMenu && keySubMenuList === id}
              <nav class="menu__sub" class:themeDark={ $theme }>
                <ul class="menu__sub-list">
                  {#each items.sublist as subitem, id}
                    <li class="menu__sub-item" key={id}>
                      <a href={ subitem.path } class="menu__sub-link" class:textDark={ $theme }>
                        <i>{ subitem.name }</i>
                      </a>
                    </li>
                  {/each}
                </ul>
              </nav>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  {/if}    
</div>

<script>
import { theme } from '../routes/store';
import { fade, fly } from 'svelte/transition';
import { onMount } from 'svelte';
import { clickOutside } from 'svelte-use-click-outside';
import menu from '$lib/local/ru-RU';  
import Account from '../components/Account.svelte';
import AuthBtnGroup from '../components/AuthBtnGroup.svelte';

export let isActiveMenu = false;

let menuList = [];
let isActiveSubMenu = false;
let isVisited = false;
let keyList;
let keySubMenuList;
let widthWin;
let isLogin = false;

const toggleVisited = (id) => {
  keyList = id;
  if (!isVisited) isVisited = true;
  console.log('key: ',keyList);
};

const getMenuData = () => {
  menuList = menu.menuList;
};

const navigateTo = (path) => {
  if (path) {
    console.log('path: ', path);
  } else {
    return;
  }
};

onMount(() => getMenuData());

$: console.log('isActiveMenu: ', isActiveMenu);
$: console.log('isActiveSubMenu: ', isActiveSubMenu);
</script>

<style lang="postcss">
.menu {
  @apply lg:w-auto;
}

.menu__wrap {
  @apply relative flex flex-shrink-0 px-2 w-auto h-auto top-auto bg-transparent visible;    
}

.menu__wrap-md {
  @apply absolute flex-col z-20 overflow-auto top-11 right-1/4 w-3/4 shadow-menu bg-white;
  height: calc(100vh - 44px);
}

.shadow {
  @apply absolute z-30 left-3/4 top-11 w-1/4 bg-gray-500 opacity-30;
  height: calc(100vh - 44px);
}

.menu__btn {
  @apply absolute right-2 top-3;
}

.menu__list {
  @apply relative list-none;
}

.menu__link {
  @apply px-2 block text-sm font-semibold leading-none focus:outline-none;
}

.menu__sub_md {
  @apply pl-2 h-auto w-auto bg-gray-100  flex-col z-20 overflow-auto;
}

.menu__sub-list_md {
  
}

.menu__sub-link {
  @apply px-4 text-sm font-semibold text-gray-600 hover:text-purple-400;
}

.menu__arrow {
  @apply  absolute top-5 right-5 transition-transform duration-300 ease-in-out transform rotate-90 text-gray-400;
  content: "";
}

.menu__arrow-active {
  @apply transform -rotate-90;
}

@screen md {
  .menu__list {
    @apply flex ;
  }

  .menu__link {
    @apply relative;
  }

  .menu__sub {
    @apply absolute top-7 w-48 h-auto rounded-b-lg shadow-menu bg-white;
  }

  .menu__sub-list {
    @apply flex flex-col items-start py-4;
  }

  .menu__sub-item {
    @apply hover:bg-gray-100 w-full;
  }

  .active {
    @apply block left-0 shadow-menu;
  }
}

.link-active {
  @apply text-gray-300;
}

.textDark {
  @apply text-gray-300;
}

.themeDark {
  @apply bg-gray-700;
}
</style>