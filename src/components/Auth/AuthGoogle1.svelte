<button
    type="button"
    name="button"
    class="uppercase w-40 h-14 flex items-center justify-center font-bold border-0 mr-4 text-black bg-gray-100 hover:bg-gray-50 rounded-sm"
    on:click={onSignIn}>
  <img src={google} alt="Google" class="mr-5" />
  Google
</button>

<script>
//import GoogleLogin from "vue-google-login";
import google from '$lib/icons/icon-google.svg';

const onSignIn = () => {};
</script>