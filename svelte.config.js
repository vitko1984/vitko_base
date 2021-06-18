import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
//import node from '@sveltejs/adapter-vercel';
//import node from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: null,
	extensions: ['.svelte'],
	preprocess: [
        sveltePreprocess({
            defaults: {
                //script: 'typescript',
                style: 'postcss',
            },
            postcss: true
        }),
    ],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		
	}
};

export default config;
