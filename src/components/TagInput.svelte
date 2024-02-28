<script lang="ts">
	export let placeholder: string;
	export let max: number | undefined = 5;
	export let keywordsList: string[] = [];
	export let tagsToSet: string[] | undefined = undefined;

	let keywordsEl: HTMLDivElement;
	let ibox: HTMLDivElement;

	function keyboardInput(el: HTMLDivElement) {
		keywordsEl = document.querySelector('.keywords')!;
		let input = el.querySelector('input')!;

		el.addEventListener('click', (e) => {
			input.focus();
		});

		input.addEventListener('keyup', (ev) => {
			if (ev.key === ',') {
				//@ts-ignore
				addKeyword(ev.target.value);
			}
		});

		if (tagsToSet) {
			addKeyword(tagsToSet.join(','));
		}

		function listenDelete() {
			let domEls: NodeListOf<HTMLDivElement> = keywordsEl.querySelectorAll('.keyword-delete');

			for (let el of domEls) {
				el.onclick = (ev: MouseEvent) => {
					//@ts-ignore
					let parent = ev.target!.parentNode;
					let span = parent.querySelector('span');
					keywordsList = keywordsList.filter((k) => k !== span.textContent);

					parent.remove();
				};
			}
		}

		function addKeyword(text: string) {
			let input = el.querySelector('input')!;
			let keywords = text.split(',');

			if (keywordsList.length === max) {
				input.value = '';
				return;
			}

			for (let key of keywords) {
				if (!key) {
					input.value = '';
					break;
				}

				let keywordElement = `<div class="keyword"><span>${key}</span><div class="keyword-delete fa fa-close"></div></div>`;
				input.value = '';
				keywordsEl!.innerHTML += keywordElement;
				input.focus();
				keywordsList.push(key);
			}

			listenDelete();
		}
	}
</script>

<div class="keyword-input-box" bind:this={ibox} use:keyboardInput>
	<div class="keywords" bind:this={keywordsEl}></div>
	<input type="text" {placeholder} />
</div>

<style lang="scss">
	.keywords {
		display: flex;
		gap: 5px;
	}

	.keyword-input-box {
		border-width: 0 0 1px 0;
		border-color: gray;
		border-style: solid;
		width: 400px;
		display: flex;
		gap: 1px;
		margin-inline: auto;
	}

	.keyword-input-box:hover {
		cursor: text;
	}

	input {
		width: 250px;
		border: 0;
		border-radius: 0;
		border-width: 0;
		background-color: rgba(255, 255, 255, 0);
	}

	input:focus {
		outline: none;
	}

	:global(.keyword) {
		display: flex;
		background-color: rgb(201, 173, 122);
		align-items: center;
		gap: 10px;
		padding: 5px;
		border-radius: 5px;
	}

	:global(.keyword-delete:hover) {
		cursor: pointer;
	}
</style>
