<script>
import './_global.postcss';
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
</script>

<div class="page">
  <Header /> 
  <main class="main pt-12">    
	<slot /> 
  </main>
  <Footer />
</div>
