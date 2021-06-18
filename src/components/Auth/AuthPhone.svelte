<div class="">
  {#if $modal.event === 'signIn'}
    <RegisterPhone />  
  {/if}
</div>

<script>
import RegisterPhone from './RegisterPhone.svelte'

import { modal } from '../../routes/localStore';
</script>