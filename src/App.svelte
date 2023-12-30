<script>
	import Name from "./lib/Name.svelte";
	import { fade } from "svelte/transition";
	import Icon from "@iconify/svelte";
	import Project from "./lib/Project.svelte";
	let render = false;
	import resumeurl from "./assets/Daniel_s_Resume.pdf";
</script>

<div class="container">
	<Name
		on:done={() => {
			render = true;
		}}
	/>
	{#if render}
		<div transition:fade={{ delay: 200, duration: 700 }}>
			<p>
				I'm currently a student in my 1B term at the University of Waterloo
				studying Computer Science. I'm currently looking for a coop position
				this summer.
			</p>

			<h2>Projects <Icon icon="vscode-icons:folder-type-cli"/></h2>
			<div class="projects">
				<Project
					title={"gitlet"}
					technologies={["python", "io", "oop", "another one", "dj khaled"]}
					link={"ur-mom"}
					description={"reimplemented several of git's core features"}
				/>

				<Project
					title={"gitlet"}
					technologies={["python", "io", "oop", "another one", "dj khaled"]}
					link={"ur-mom"}
					description={"reimplemented several of git's core features"}
				/>
				<Project
					title={"gitlet"}
					technologies={["python", "io", "oop", "another one", "dj khaled"]}
					link={"ur-mom"}
					description={"reimplemented several of git's core features"}
				/>
				<Project
					title={"gitlet"}
					technologies={["python", "io", "oop", "another one", "dj khaled"]}
					link={"ur-mom"}
					description={"reimplemented several of git's core features"}
				/>
			</div>

			<h2>Resume <Icon icon="twemoji:check-mark-button" /></h2>
			Here is a pdf copy of my resume. Click<a href={resumeurl}>here</a> to
			download
			<object class="pdf-viewer" data={resumeurl} type="application/pdf"
			></object>

			<h2>Contact Information <Icon icon="noto:closed-mailbox-with-raised-flag" /></h2>
			<ul>
				<li>
					<Icon icon="fxemoji:email" /> Email:
					<a href="mailto:dmkohn@uwaterloo.ca">dmkohn@uwaterloo.ca</a>
				</li>
				<li><Icon icon="openmoji:linkedin" /> Linkedin:</li>
				<li><Icon icon="openmoji:github" /> Github:</li>
			</ul>

			<footer>
				This website was built using Svelte, the Catpuccin Color Scheme, and the
				Iconify icon library. View the source code for this site here.
			</footer>
		</div>
	{/if}
	<div />
</div>
<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap");
	</style>
</svelte:head>

<style>
	footer {
		padding-top: 50px;
	}
	.title {
		text-align: center;
		font-size: 300px;
		color: var(--sapphire);
	}
	.pdf-viewer {
		width: 100%;
		height: 400px;
	}

	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
