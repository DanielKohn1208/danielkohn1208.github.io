<script>
	import Name from "./lib/Name.svelte";
	import { fade } from "svelte/transition";
	import Icon from "@iconify/svelte";
	import Project from "./lib/Project.svelte";
	let render = false;
	import resumeurl from "./assets/Daniel_s_Resume.pdf";
	import imageurl from "./assets/picture.jpg";
</script>

<div class="container">
	<Name
		on:done={() => {
			render = true;
		}}
	/>


	{#if render}
		<div transition:fade={{ delay: 150, duration: 500 }}>
			<img src={imageurl} alt="" class="">
			<p class="paragraph">
				I'm currently a student in my second year at the University of Waterloo
				pursuing a double major in Computer Science and Applied Mathematics. 
        I'm currently looking for a coop position for Spring 2025. 
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
					technologies={[
						"Svelte",
						"SvelteKit",
						"Node.js",
						"MongoDB",
						"Bulma CSS",
					]}
					link={"https://github.com/DanielKohn1208/Linktree-Clone"}
					description={"Built a clone of the popular site linktree"}
				/>
				<Project
					title={"chat app"}
					technologies={[
						"Python",
						"Django",
						"Django-channels",
						"Javascript",
						"SQLite",
						"Bootstrap CSS",
					]}
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

			<h2>
				Contact Information <Icon icon="noto:closed-mailbox-with-raised-flag" />
			</h2>
			<ul>
				<li>
					<Icon icon="fxemoji:email" /> Email:
					<a target="_blank" href="mailto:dmkohn@uwaterloo.ca"
						>dmkohn@uwaterloo.ca</a
					>
				</li>
				<li>
					<Icon icon="openmoji:linkedin" />
					<a
						target="_blank"
						href="https://www.linkedin.com/in/daniel-kohn-925616262/"
						>Linkedin</a
					>
				</li>
				<li>
					<Icon icon="openmoji:github" />
					<a target="_blank" href="https://github.com/DanielKohn1208">Github</a>
				</li>
			</ul>

			<h2>Resume <Icon icon="twemoji:check-mark-button" /></h2>
			Here is a pdf copy of my resume. Click <a target="_blank" href={resumeurl}
				>here</a
			>
			to download
			<object
				id="pdf-viewer"
				class="pdf-viewer"
				data={resumeurl}
				type="application/pdf"
			></object>

			<footer>
				This website was built using <a
					target="_blank"
					href="https://svelte.dev/">Svelte</a
				>, the
				<a target="_blank" href="https://github.com/catppuccin"
					>Catpuccin Color Scheme</a
				>, and the
				<a target="_blank" href="https://iconify.design/"
					>Iconify Icon library</a
				>. View the source code for this site
				<a
					target="_blank"
					href="https://github.com/DanielKohn1208/danielkohn1208.github.io"
					>here</a
				>.
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
	.pdf-viewer {
		background-color: white;
	}
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

	.paragraph {
		text-align: justify;
	}

	img {
		border-radius: 50px;
		max-width: 350px;
		object-fit:cover;
		display: block;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0 0 80px var(--crust);
	}
</style>
