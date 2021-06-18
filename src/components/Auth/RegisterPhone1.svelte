<div class="auth-phone">
  <form class="auth-phone__form" method="post" on:submit|preventDefault={sendSms}>
    <div class="js-input-phone-wrap" on:click={() => isInvalid = true}>
      <label>
        <MaskedInput
            {options}
            bind:value={yourValue} 
            on:complete={complete} 
            name="phone" 
            type="tel" />
      </label>
          <!--<VuePhoneNumberInput
            v-model="yourValue"
            no-flags
            show-code-on-list
            :error="hasErrorActive"
            @update="onUpdate" />-->
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
          class="btn btn--big btn--success"
          class:disabled={!results.isValid || blockedBtn }>
      {menu.Register.sms}
    </button>
  </form>
  <form class="auth-phone__form" on:submit|preventDefault={register}>
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
    {#if authErrCode === '403007'}
      <span class="auth-phone__invalid">
          {errMsg[authErrCode][lang]}
          <button
              on:click={showModal('signIn')}
              class="auth-phone__invalid underline">
            {menu.Auth.signinLink}
          </button>
      </span>
    {/if}
    {#if authErrCode === '403012'}
      <span class="auth-phone__invalid">
        {errMsg[authErrCode][lang]}
      </span>
    {/if}
    {#if authErrCode === '403004'}
      <span class="auth-phone__invalid">
        {errMsg[authErrCode][lang].phone}
      </span>
    {/if}        
    <span class="auth-phone__label">
      {menu.Register.linkGroup}
      <a href="#">{menu.Register.linkTerms}</a>
      {menu.Register.linkGroup2}
      <a href="#">{menu.Register.linkPrivacy}</a>
    </span>
    <button
          class:disabled={!$codeForm.code_after.valid }
          type="submit"
          name="button"
          class="btn btn--big">
      {menu.Auth.button}
    </button>
  </form>
</div>
  
  <script>
  import { onMount, afterUpdate } from 'svelte';
  
  import menu from '$lib/local/ru-RU';

  import { MaskedInput } from 'svelte-imask';
  import { form, bindClass } from 'svelte-forms';
  import authErrors from "$lib/local/additional/authErrors";

  const options = {
    mask: '+{7}(000)000-00-00'
  };
  let isInvalid = false;
  let lang = 'ru';
  let errMsg = authErrors;
  let code = '';
  let phone = '';
  let password = '';
  let yourValue = '';
  let translations = {
    countrySelectorLabel: false
  };
  let hasErrorActive = false;
  let results = '';
  let codeInput = false;
  let blockedBtn = false;
  let params = {
    show: true,
    event: ''
  };

  const complete = ({detail: imask}) => {
    console.log('completed', imask);
  };
  const sendSms = async () => {
    if (!$codeForm.valid) {
      //this.$v.$touch();
      return;
    }
    let formData;
    //phone = results.countryCallingCode + results.nationalNumber;
    phone = yourValue;
    formData = {
      acc_type: "phone",
      login: phone
    };
    console.log('formData', formData);
  
    /*try {
      if (isSignin) {
        await this.$store.dispatch("modules/auth/login", formData);
        codeInput = true;
      } else {
        await this.$store.dispatch("modules/auth/register", formData);
        codeInput = true;
      }
    } catch (e) {}*/ 
  };

  onMount(() => {
    codeForm = form(() => ({code_before: {value: yourValue, validators: ['required', 'min: 4', 'max: 4']}, code_after: {value: code, validators: ['required', 'min: 4', 'max: 4']}}), 
    {
      validateOnChange: false
    });
  });

  afterUpdate(() => {
    codeForm.validate();
  });
  
  /*export default {
    validations: {
      code: { minLength: minLength(4), maxLength: maxLength(4) }
    },
    props: {
      isSignin: Boolean
    },
    computed: {
      lang() {
        return this.$i18n.locale;
      },
      isSmsSent() {
        return this.$store.state.modules.auth.isSendingSmsCode;
      },
      authErrCode() {
        return this.$store.state.modules.auth.authErrCode;
      }
    },
    components: {
      VuePhoneNumberInput
    },
    mounted() {
      setTimeout(() => {
        this.setPlaceholder();
      }, 100);
    },
    methods: {
      onFocusCodeInput() {
        this.$store.commit("modules/auth/changeSendingCodeStatus", {
          type: "phone",
          status: false
        });
      },
      showModal(event) {
        this.params.event = event;
        this.$store.commit("modules/auth/setErrorCode", null);
        this.$store.dispatch("modules/modal/changePopup", this.params);
      },
      setPlaceholder() {
        const phoneInput = document.querySelector(
          ".js-input-phone-wrap .input-tel__input"
        );
        const currentLang = document.querySelector(".js-lang-btn");
        if (currentLang.innerText === "Русский") {
          phoneInput.setAttribute("placeholder", "Телефон");
        } else {
          phoneInput.setAttribute("placeholder", "Phone number");
        }
      },
      onUpdate(payload) {
        this.results = payload;
      },
      onShowInvalid(event) {
        this.isInvalid = true;
      },
      async sendSms() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        let formData;
        this.phone =
          this.results.countryCallingCode + this.results.nationalNumber;
        formData = {
          acc_type: "phone",
          login: this.phone
        };
  
        try {
          if (this.isSignin) {
            await this.$store.dispatch("modules/auth/login", formData);
            this.codeInput = true;
          } else {
            await this.$store.dispatch("modules/auth/register", formData);
            this.codeInput = true;
          }
        } catch (e) {}
      },
      async register() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        let formData = {
          acc_type: "phone",
          login: this.phone,
          code: this.code
        };
        try {
          if (this.isSignin) {
            await this.$store.dispatch("modules/auth/login", formData);
            this.codeInput = true;
          } else {
            await this.$store.dispatch("modules/auth/register", formData);
            this.codeInput = true;
          }
        } catch (e) {}
      }
    }
  };*/
  </script>
  
  <style lang="postcss">
  /*.auth-phone {
    &__form {
      margin: 0 0 $spacer * 2;
      &:last-child {
        margin: 0;
        .btn {
          margin: $spacer * 3 0 0;
        }
      }
    }
    &__label {
      color: $text-color-pale;
      font-size: $font-size-md;
      line-height: $line-height-xs;
      text-align: center;
      margin: $spacer * 3 0 $spacer * 2;
      display: block;
      a {
        color: $primary-light-color;
        text-decoration: none;
        font-weight: 600;
        transition: color $delay ease-in-out;
        &:hover {
          color: $primary-color;
        }
      }
    }
    &__invalid {
      color: $danger-color;
      font-size: $font-size-xs;
      text-align: left;
      width: 100%;
      margin: 0 0 $spacer * 2;
      display: block;
    }
    &__success {
      color: $succes-color;
      font-size: $font-size-xs;
      text-align: left;
      width: 100%;
      margin: 0 0 $spacer * 2;
      display: block;
    }
    .input-code {
      border-color: $succes-color;
      color: $text-color;
      font-weight: bold;
      &.disabled {
        font-weight: 400;
        border-color: $disabled-color;
      }
    }
  }*/
  </style>