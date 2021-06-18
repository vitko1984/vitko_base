<div class="auth-phone">
  <form method="post" class="mt-0 mx-0 mb-2 last:m-0" on:submit|preventDefault={sendSms}>
    <div class:disabled={!isInvalid} on:click={() => isInvalid = true}>
      <MaskedInput 
            type="tel" 
            {options}
            bind:value={yourValue} 
            on:complete={complete} 
            name="phone"
            class="input-code js-input-phone-wrap" />
    </div>
    {#if !results.isValid && isInvalid}
      <span class="auth-phone__invalid">
        {menu.Errors.phoneInvalid}
      </span>
    {/if}
    <div id="recaptcha-container" class="hidden"></div>
    {#if isSmsSent}
      <span class="auth-phone__success">{menu.Register.successSms}</span>
    {/if}        
    <button 
        type="submit"
        name="button"
        class="btn btn--big btn--success m-0 text-xs sm:text-sm"
        class:btn_disabled={!results.isValid || blockedBtn}>
      {menu.Register.sms}
    </button>
</form>
<form class="mt-0 mx-0 mb-2 last:m-0" on:submit|preventDefault={register}>
  <input
        type="text"
        autocomplete="phone"
        name="code"
        on:focus={onFocusCodeInput}
        bind:value={code}
        placeholder={menu.Register.smsPlaceholder}
        class="input-code js-input-code"
        class:disabled={!codeInput } />

      <!-- <span
        class="auth-phone__invalid"
        v-if="
          ($v.code.$dirty && !$v.code.required) ||
            ($v.code.$dirty && !$v.code.minLength) ||
            ($v.code.$dirty && !$v.code.maxLength)
        "
      >
        {{ $t("Errors.codeError") }}
      </span> -->
  {#if $authErrCode === '403007'}
    <span class="auth-phone__invalid">
        {errMsg[$authErrCode][lang]}
        <button
            on:click={() => showModal('signIn')}
            class="auth-phone__invalid underline">
          {menu.Auth.signinLink}
        </button>
    </span>
  {/if}
  {#if $authErrCode === '403012'}
    <span class="auth-phone__invalid">
      {errMsg[$authErrCode][lang]}
    </span>
  {/if}
  {#if $authErrCode === '403004'}
    <span class="auth-phone__invalid">
      {errMsg[$authErrCode][lang].phone}
    </span>
  {/if}        
  <span class="auth-phone__label">
    {menu.Register.linkGroup}
    <a href="#">{menu.Register.linkTerms}</a>
    {menu.Register.linkGroup2}
    <a href="#">{menu.Register.linkPrivacy}</a>
  </span>
  <button
        class:btn_disabled={!blockedBtn}
        type="submit"
        name="button"
        class="btn btn--big">
    {menu.Auth.button}
  </button>
</form>
</div>

<script>
import { onMount, afterUpdate } from 'svelte';

import { MaskedInput } from 'svelte-imask';
import { form, bindClass } from 'svelte-forms';
import authErrors from "$lib/local/additional/authErrors";

import menu from '$lib/local/ru-RU';
import { modal, isSendingSmsCode, authErrCode } from '../../routes/localStore';

let isInvalid = false;
let yourValue = '';
let errMsg = authErrors;
let code = '';
let results = {};
let blockedBtn = false;
let lang = 'ru';
let codeInput = false;
let phoneForm;
const options = {
  mask: '+{7}(000)000-00-00'
};

const showModal = (vl) => {
  $authErrCode = null;
  $modal = {show: true, event: vl};
};
const sendSms = async () => {
  console.log('phoneForm: ', $phoneForm);
  if (!$phoneForm.fields.yourValue.valid) {
    return;
  }

  let formData = {acc_type: "phone", login: results.phone};

  try {
    if ($modal.event === 'signIn') {
      //await this.$store.dispatch("modules/auth/login", formData);
      await console.log('formData: ', formData);
      await console.log('modalEvent: ', $modal.event);
      $isSendingSmsCode = true;
      codeInput = true;
    } else {
      //await this.$store.dispatch("modules/auth/register", formData);
      await console.log('formData: ', formData);
      await console.log('modalEvent: ', $modal.event)
      codeInput = true;
    }
  } catch (e) {}
};
const register = async () => {
  $authErrCode = '403007';
  if (!$phoneForm.fields.code.valid) {
    return;
  }
  let formData = {acc_type: "phone", login: results.phone, code: results.code};
  try {
    if ($modal.event === 'signIn') {
      //await this.$store.dispatch("modules/auth/login", formData);
      codeInput = true;
    } else {
      //await this.$store.dispatch("modules/auth/register", formData);
      codeInput = true;
    }
  } catch (e) {}
};
const onFocusCodeInput = () => {
  //this.$store.commit("modules/auth/changeSendingCodeStatus", {type: "phone", status: false});
  $isSendingSmsCode = false;
  blockedBtn = true;
};
const setPlaceholder = () => {
  const phoneInput = document.querySelector(".js-input-phone-wrap");
  if (lang === "ru") {
    phoneInput.setAttribute("placeholder", "Телефон");
  } else {
    phoneInput.setAttribute("placeholder", "Phone number");
  }
};
const complete = ({detail: imask}) => {
  results.isValid = true;
  results.phone = yourValue;
  console.log('completed', imask);    
};

onMount(() => {
phoneForm = form(() => ({yourValue: {value: yourValue, validators: ['required']}, code: {value: code, validators: ['required', 'min: 4', 'max: 4']}}), 
    {
      validateOnChange: false
    });
  setTimeout(() => {
    setPlaceholder();
  }, 100);
});

afterUpdate(() => {
  phoneForm.validate();
});

$: isSmsSent = $isSendingSmsCode; 

$: console.log('phone: ', results.phone);
$: console.log('isValid: ', results.isValid);
$: console.log('results: ', results);
</script>

<style lang="postcss">
.btn_disabled {
   @apply pointer-events-none opacity-50;
}

.auth-phone__invalid {
  @apply text-red-500 text-xs text-left w-full mt-0 mx-0 mb-2 block;
}

.auth-phone__success {
  @apply text-green-500 text-xs text-left w-full mt-0 mx-0 mb-2 block;
}
.input-code {
  @apply  font-normal;    
}
</style>