<script>
  import { onMount } from 'svelte';
  import { theme } from '../routes/store';

  let isDark = false;

  $: $theme = isDark;

  const toggleTheme = () => {
    isDark = !isDark;
    document.querySelector('html').classList.toggle('dark', isDark);
  }

  onMount(() => {
    if (!$theme ) {   
      document.querySelector('html').classList.add('light');
    }
  })
  </script>
  
  <button on:click={ toggleTheme } class="btnDark">
    {#if !$theme }
      <i class="far fa-moon"></i>
    {:else}
      <i class="far fa-sun"></i>
    {/if}
  </button>

  <style lang="postcss">
    .btnDark {@apply py-1 px-2 my-2 cursor-pointer outline-none;}
  </style>