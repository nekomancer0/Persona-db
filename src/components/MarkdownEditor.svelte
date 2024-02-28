<script lang="ts">
	// Import markdown conversion library
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import { Linkify } from '../stores';

	// Declare a variable to store the markdown data
	export let markdown = '';
</script>

<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
<textarea bind:value={markdown} placeholder="Enter description here" />

<!-- Convert the markdown to HTML and display it -->
<div class="preview">
	{@html DOMPurify.sanitize(Linkify(marked(markdown)), {
		FORBID_TAGS: ['script'],
		ADD_TAGS: ['iframe'],
		ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
	})}
</div>

<!-- Make it look (slightly) nicer ;) -->
<style lang="scss">
	textarea,
	.preview {
		box-sizing: border-box;
		display: block;
		width: 100%;
	}

	textarea {
		font-family: monospace, Roboto;
		height: 25%;
		border: none;
		margin: 0;
		padding: 1rem;
	}

	.preview {
		height: 75%;
		padding: 2rem;
		border-top: solid 2px #888;
	}

	:global(body) {
		padding: 0;
	}
</style>
