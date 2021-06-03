<script>
import FacebookLogin from "svelte-facebook-login";  
import fb from '$lib/icons/icon-fb.svg';
import { modal } from '../../routes/localStore';
</script>

<FacebookLogin
  clientId="2918569291764665"
  state="1"
  redirectUri="http://localhost:3000"
  on:success={params => {console.log('params: ', params); $modal = {show:false, event: ''};}}
  on:error={error => console.log(error)}
  let:onLogin
>
  <button
      type="button"
      name="button"
      class="uppercase w-40 h-14 flex justify-center items-center font-bold border-0 mr-4 text-white bg-blue-800 hover:bg-blue-600 rounded-sm"
      on:click={onLogin}>
    <img src={fb} alt="Facebook" class="mr-5" />
    Facebook
  </button>
</FacebookLogin>