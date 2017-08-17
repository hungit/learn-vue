Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks"> {{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the store', complete: true },
				{ task: 'Finish screencast', complete: false },
				{ task: 'Make donation', complete: true },
				{ task: 'Clear inbox', complete: false }
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
});