Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		}
	},
	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    <p>
		    	{{ title }}
		    	<button @click="isVisible = false">x</button>
		    </p>
		    <button class="delete" aria-label="delete"></button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`
})

new Vue({
	el: '#root'
});