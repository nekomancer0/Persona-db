<script lang="ts">
	export let data: { name: string; value: number }[] = [];
	export let dataToSet: { name: string; value: number }[] | undefined = undefined;

	if (dataToSet && dataToSet.length === 1) {
		if (dataToSet[0].name === '') dataToSet = undefined;
	}

	let statLineDiv: HTMLDivElement;
	let statsContainer: HTMLDivElement;

	function removeStatLine(ev: Event) {
		//@ts-ignore
		let id = ev.target.classList[0];
		let line = statsContainer.querySelector(`.line-${id}`);
		line?.remove();
	}

	function genId() {
		let ret = '';
		let chars = 'abcdefghijklmnopqrstuvwxyz';

		for (let i = 0; i < 5; i++) {
			ret += chars[Math.floor(Math.random() * chars.length)];
		}

		return ret;
	}

	function addStatLine(
		ev: Event | null,
		name?: string,
		value?: number,
		x?: HTMLDivElement,
		c?: HTMLDivElement
	) {
		let id = genId();

		let newLine = document.createElement('div');
		newLine.classList.add('line');
		newLine.innerHTML = x ? x.innerHTML : statLineDiv.innerHTML;

		newLine.querySelector('button')!.remove();
		newLine.classList.add(`line-${id}`);
		let button = document.createElement('button');
		button.id = 'remove';
		button.classList.add(`${id}`);
		button.innerText = '-';

		if (name && value) {
			let nameInput: HTMLInputElement = newLine.querySelector('#name')!;
			let valueInput: HTMLInputElement = newLine.querySelector('#value')!;

			nameInput.value = name;
			valueInput.value = value.toString();
		}

		button.addEventListener('click', removeStatLine);

		newLine.appendChild(button);

		(c ? c : statsContainer).appendChild(newLine);
	}

	const getData = (s: HTMLDivElement) => {
		let data: { name: string; value: number }[] = [];
		let lines = s.querySelectorAll('.line');

		for (let line of lines) {
			let nameInput: HTMLInputElement = line.querySelector('#name')!;
			let valueInput: HTMLInputElement = line.querySelector('#value')!;

			data.push({ name: nameInput.value, value: parseInt(valueInput.value) });
		}

		return data;
	};

	function onLoad(el: HTMLDivElement) {
		if (dataToSet) {
			let statLineDiv: HTMLDivElement = el.querySelector('.line')!;

			dataToSet.forEach((v, i) => {
				if (!i) {
					let nameInput: HTMLInputElement = statLineDiv.querySelector('#name')!;
					let valueInput: HTMLInputElement = statLineDiv.querySelector('#value')!;

					nameInput.value = v.name;
					valueInput.value = v.value.toString();
				} else {
					addStatLine(null, v.name, v.value, statLineDiv, el);
				}
			});
		}

		setInterval(() => {
			data = getData(el);
		}, 100);
	}
</script>

<div class="stats-container" use:onLoad bind:this={statsContainer}>
	<div class="line" bind:this={statLineDiv}>
		<input
			type="text"
			id="name"
			autocomplete="off"
			placeholder="Name of the stats (HP, ATK, DEX, etc)"
		/>
		:
		<input type="number" id="value" autocomplete="off" placeholder="Value" />
		<button id="add" on:click={addStatLine}>+</button>
	</div>
</div>

<style lang="scss">
	.stats-container {
		display: flex;
		flex-direction: column-reverse;
		gap: 5px;
	}

	:global(.stats-container .line) {
		margin-inline: auto;
	}

	:global(.stats-container .line #value) {
		width: 80px;
	}

	:global(.stats-container .line #name) {
		width: 300px;
	}

	:global(.stats-container .line #add) {
		width: 60px;
	}

	:global(.stats-container .line #remove) {
		width: 60px;
	}
</style>
