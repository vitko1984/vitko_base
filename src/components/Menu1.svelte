<div class="menu">  
  <div class="cursor-pointer md:hidden">
    <input id="menu-toggle" type="checkbox" bind:checked={isDrawerOpen} class="hidden" />
    <label for="menu-toggle" class="fas fa-bars"></label>
  </div>
  
  <nav class="menu__wrap hidden md:visible " class:active={isActiveMenu}>
    <ul class="menu__list">
      {#each menuList as items, id}
        <li class="menu__item" key={id} on:click={() => toggleVisited(id)} class:link-active={!$theme && keyList === id} class:textDark={$theme && keyList === id}>
          <button 
          class="menu__link" 
          on:click={ navigateTo(items.path) } 
          on:mouseover={() => {isActiveSubMenu = items.sublist ? true : false; keySubMenuList = id;}} 
          on:mouseout= {() => {isActiveSubMenu = false; keySubMenuList = undefined;}}>
            <i>{ items.name }</i>
          </button>
          <!--{#if isActiveSubMenu && keySubMenuList === id}
            <nav class="menu__sub">
              <ul class="menu__sub-list">
                {#each items.sublist as subitem, id}
                  <li class="menu__sub-item">
                    <a href={ subitem.path } class="">
                      <i>{ subitem.name }</i>
                      {#if subitem.underlist}
                        <span class=""></span>
                      {/if}                      
                    </a>
                    {#if subitem.underlist}
                      <nav class="">
                        <ul class="">
                          {#each subitem.underlist as underitem, id}
                            <li class="">
                              <a href={ underitem.path } class="">
                                <i>{ underitem.name }</i>
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
          {/if}-->        
        </li>
      {/each}
    </ul>
    <div class="" on:click={ openMenu() }></div>
  </nav>
</div>    

<script>
  import { theme } from '../routes/store';
  import { onMount } from 'svelte';
  import menu from '$lib/local/ru-RU';

  export let isDrawerOpen = false;

  let menuList = [];

  let isActiveMenu = false;
  let isActiveSubMenu = false;
  let isVisited = false;
  let keyList;
  let keySubMenuList;

  const navigateTo = (path) => {
    if (path) {
      console.log('path: ', path);
    } else {
      return;
    }
  };

  const showSub = (e) => {
    e.target.classList.toggle("is-active");
    e.target.nextElementSibling.classList.toggle("is-active");
  };

  const toggleVisited = (id) => {
    keyList = id;
    if (!isVisited) isVisited = true;
    console.log('key: ',keyList);
  };

  const openMenu = () => {};

  const getMenuData = () => {
    menuList = menu.menuList;
  };

  onMount(() => getMenuData());

  $: console.log('isActiveSubMenu: ', isActiveSubMenu);
</script>

<style lang="postcss">
.menu {
  @apply absolute right-2 md:static p-0 lg:w-auto;
}
.menu__list {
  @apply relative list-none;
}

.menu__sub {
  @apply bg-white;
}

/*.menu__item {
  @apply relative mr-8 last:m-0 hover:absolute hover:top-12 hover:z-20 hover:min-w-min hover:border-t-4 hover:border-solid hover:border-gray-600 hover:transition-all hover:rounded-lg hover:shadow-sub hover:overflow-hidden hover:opacity-100 hover:h-auto;
}*/

.menu__link {
  @apply px-2 block text-sm font-semibold leading-none transition-colors hover:text-purple-400 focus:outline-none;
}

.active {
  @apply fixed top-14 right-0 transition-all z-30 hidden overflow-auto  bg-gray-600 bg-opacity-30;
  height: calc(100vh - 44px);
  width: calc(100% - 310px);
}

@screen md {
  .menu__wrap {
    @apply relative flex flex-shrink-0 px-2;
  }

  .menu__list {
    @apply flex ;
  }

  /*.menu__item {
    @apply m-0 border-b-2 border-solid border-gray-900 hover:border-none hover:w-full hover:static hover:opacity-100 hover:z-20 hover:bg-gray-100 hover:max-h-0 hover:overflow-hidden hover:border-0;
  }*/

  .menu__link {
    @apply relative;
  }

  .menu__sub {
    @apply absolute top-7 w-48 h-auto rounded-b-lg shadow-menu;
  }

  .menu__sub-list {
    @apply flex flex-col items-start p-4;
  }

  .menu__sub-item {
    @apply hover:bg-gray-50;
  }

  .

  .active {
    @apply block left-0 shadow-menu;
  }
}

/*.menu__item {
  @apply relative mr-8 last:m-0 md:m-0 md:border-b-2 md:border-solid md:border-gray-900;
  @apply hover:absolute hover:top-12 hover:z-20 hover:min-w-min hover:border-t-4 hover:border-solid hover:border-gray-600 hover:transition-all hover:rounded-lg hover:shadow-sub hover:overflow-hidden hover:opacity-100 hover:h-auto;
  @apply md:hover:border-none md:hover:w-full md:hover:static md:hover:opacity-100 md:hover:z-20 md:hover:bg-gray-100 md:hover:max-h-0 md:hover:overflow-hidden md:hover:border-0;
}
.is-active {
  @apply md:h-auto;
  max-height:1000px;
}*/

.link-active {
  @apply text-gray-300;
}

.textDark {
  @apply text-gray-500;
}
</style>
