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
				studying Computer Science. Besides my interest in Computer Science, I also love to ski and listen to jazz music. I'm currently looking for a coop position for summer 2024.
				this summer.
			</p>

			<h2>Projects <Icon icon="vscode-icons:folder-type-cli" /></h2>
			<div class="projects">
				<Project
					title={"gitlet"}
					technologies={["Python", "IO", "OOP", "Data Structures"]}
					link={"https://github.com/DanielKohn1208/gitlet"}
					description={"Reimplemented several of git's core features"}
				/>
				<Project
					title={"linktree clone"}
					technologies={['Svelte', 'SvelteKit', 'Node.js', 'MongoDB', "Bulma CSS"]}
					link={"https://github.com/DanielKohn1208/Linktree-Clone"}
					description={"Built a clone of the popular site linktree"}
				/>
				<Project
					title={"chat app"}
					technologies={["Python", "Django", "Django-channels", "Javascript", "SQLite", "Bootstrap CSS"]}
					link={"https://github.com/DanielKohn1208/django-chat-app"}
					description={"Built a real time chat application using the Django Framework"}
				/>
				<Project
					title={"dotfiles"}
					technologies={["Arch Linux", "Neovim", "Qtile", "Other Programs"]}
					link={"https://github.com/DanielKohn1208/dotfiles"}
					description={"My configuration files for my Arch Linux System and Neovim"}
				/>
				<Project
					title={"elements quiz"}
					technologies={["Javascript", "Pico CSS"]}
					link={"https://danielkohn1208.github.io/periodic-table-practice/"}
					description={"Built a site to help friends and myself study for a chemistry quiz"}
				/>
			</div>

			<h2>Resume <Icon icon="twemoji:check-mark-button" /></h2>
			Here is a pdf copy of my resume. Click <a href={resumeurl}>here</a> to
			download
			<object class="pdf-viewer" data={resumeurl} type="application/pdf"
			></object>

			<h2>
				Contact Information <Icon icon="noto:closed-mailbox-with-raised-flag" />
			</h2>
			<ul>
				<li>
					<Icon icon="fxemoji:email" /> Email:
					<a href="mailto:dmkohn@uwaterloo.ca">dmkohn@uwaterloo.ca</a>
				</li>
				<li>
					<Icon icon="openmoji:linkedin" />
					<a href="https://www.linkedin.com/in/daniel-kohn-925616262/"
						>Linkedin</a
					>
				</li>
				<li>
					<Icon icon="openmoji:github" />
					<a href="https://github.com/DanielKohn1208">Github</a>
				</li>
			</ul>

			<footer>
				This website was built using <a href="https://svelte.dev/">Svelte</a>, the <a
					href="https://github.com/catppuccin">Catpuccin Color Scheme</a
				>, and the <a href="https://iconify.design/">Iconify Icon library</a>.
				View the source code for this site <a href="https://github.com/DanielKohn1208/danielkohn1208.github.io">here</a>.
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
