<div class="search" class:active-input={ searchValue || isFocus } on:click|stopPropagation use:clickOutside={closeSearchList}>
  <div class="search__form">
    <span on:click={showMobileInput} class="search__icon">
      <i class="fas fa-search mr-3"></i>
    </span>
    <input type="text" placeholder={menu.searchString} on:focus={() => {isFocus = true;}} on:input={loadCompanies()} class="search__input" />
  </div>
  <!--{#if isFocus && searchQuery && !isLoading}
    <div class="search__list pt-3" use:clickOutside={closeSearchList}>
      {#if companiesRes.length > 0 && searchQuery}
        <span class="search__header-results">{ resHeader }</span>
      {/if}
      {#if companiesRes.length === 0 && searchQuery && !isLoading}
        <p class="search-list__no-res pl-4">
          { $t("searchInput.noRes") }
        </p>
      {/if}
      {#each companiesRes as el,index}
        <ul :key="el.id" class="search-list">
          <li on:click={navigateToInstrument(el.code)} on:mouseenter={el.isHover = true} on:mouseleave={el.isHover = false} class="search-list__item">
            <div class="row align-items-center ml-0">
              <img src={minFileName(el.logo, 'T')} class="search-list__logo"/>
              <p class:blue-text={el.isHover } class="search-list__ticker">
                { el.tiker }
              </p>
              <span class:blue-text={el.isHover } class="search-list__company-name">
                { el.name }
              </span>
            </div>
            <span class="search-list__kind-stocks">
              { kindStocks(index) }
            </span>
          </li>
        </ul> 
      {/each}      
    </div>  
  {/if}-->  
</div>

  <script>
  import { clickOutside } from 'svelte-use-click-outside';
  import menu from '$lib/local/ru-RU';

  let isFocus = false;
  let isLoading = false;
  let searchValue = '';
  let searchQuery = '';
  let companiesRes = [];
  
  const closeSearchList = () => {
    // handler logic
  };

  const showMobileInput = (e) => {
      e.target.nextElementSibling.classList.toggle("is-active");
  };

  const loadCompanies = (e) => {
    /*searchQuery = e.target.value;
    if (!searchQuery) {
      companiesRes = [];
    };
    isLoading = true;
    $api.get('/company/search', {q: searchQuery})
    .then(data => {
      isLoading = false;
      companiesRes = data.data;
    })
    .catch(err => {
        isLoading = false;
    });*/
  };
  </script>

  <style lang="postcss">
  .search {
    @apply absolute right-2 top-3 md:static h-8 max-w-min md:max-w-xl flex-1 mr-2;
  }

  .search__input {
    @apply bg-transparent text-sm font-normal w-full h-4;
  }

  .search__form {
    @apply h-8 pt-0.5 flex md:justify-start px-4 border-none md:border md:border-solid md:border-gray-500 md:rounded-lg;
  }

  .active-input {

  }

  </style>