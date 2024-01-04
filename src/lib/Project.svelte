<script>
	export let title;
	export let technologies;
	export let link;
	export let description;
</script>

<a target="_blank" class="project-link" href={link}>
	<div class="project-container">
		<h3 class="project-title">{title}</h3>
		<p class="project-description">{description}</p>
		<div class="project-technology">
			{#each technologies as technology}
				<div class="technology">{technology}</div>
			{/each}
		</div>
	</div>
</a>

<style>
	.project-link {
		text-decoration: none;
	}
	.project-technology {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.technology {
		margin-left: 2px;
		margin-right: 2px;
		font-size: 20px;
		background-color: var(--base);
		color: var(--yellow);
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
		margin-top: 5px;
	}
	.project-description {
		margin-bottom: 10px;
		margin-top: 0;
		font-size: 22px;
		color: var(--text);
	}
	.project-container {
		max-width: 350px;
		padding: 10px;
		border-color: var(--mauve);
		background-color: var(--surface0);
		border-width: 3px;
		border-style: solid;
		border-radius: 10px;
		box-shadow: 0 0 40px var(--crust);
		transition: 0.3s ease;
		text-align: center;
		margin-bottom: 20px;
	}

	.project-container:hover > .project-title {
		font-size: 45px;
	}

	.project-container:hover {
		box-shadow: 0 0 200px var(--crust);
		background-color: var(--surface1);
	}
	.project-title {
		font-size: 40px;
		text-decoration-line: underline;
		margin-bottom: 0px;
		margin-top: 0px;
		color: var(--sky);
		transition: 0.3s ease;
	}
</style>
