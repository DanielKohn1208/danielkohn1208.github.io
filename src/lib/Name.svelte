<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	let typewriterElement;
	const valueToDisplay = `👋 Hi, I'm Daniel`;
	let curVal = "";
	var i = 0;
	function generateWaitTime(){
		const val = Math.random() * 200;
		return val > 50? val :50
	}
	function goBack(){
		if (Math.random()>  0.95){
			i -= 2
		}
	}
	function type() {
		if (i <= valueToDisplay.length) {
			curVal = valueToDisplay.substring(0,i);

			i++;
			goBack();
			setTimeout(type, generateWaitTime())
		}else{
			dispatch('done',{text:'we done frfr'})
		}
	}
	type()
</script>
<h1 class="title">{@html curVal}</h1>
<style>
	.title{
		text-align: center;
		font-size: 55px;
		color: var(--sapphire)
	}
</style>
