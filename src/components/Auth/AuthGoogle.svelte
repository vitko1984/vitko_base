<button class="uppercase w-40 h-14 flex items-center justify-center font-bold border-0 mr-4 text-black bg-gray-500 hover:bg-gray-50 rounded-sm">
  <GoogleAuth clientId="kittest" on:auth-success={e => console.dir(e.detail.user)} />
</button>

<script>
import { GoogleAuth } from '@beyonk/svelte-social-auth';    
</script>