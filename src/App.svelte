<script>
	export let name;
	import { spring } from 'svelte/motion';
	import { points, total } from './total.js';
	import RangeSlider from "svelte-range-slider-pips";

	// Slider
	const minOfTheSlider = 1
	const maxOfTheSlider = 5

	let inclinazione = spring(10)
	let test0, test1, test2, test3, test4, test5;

	function hey() {console.log(test0)}
	
</script>

<main>

	<div id="grid">

		<div id="space">
			<div id="spaceship_container" style="transform: rotateZ({ (parseInt(test0) + parseInt(test1) + parseInt(test2) + parseInt(test3) + parseInt(test4) + parseInt(test5) -18 )*3 }deg)">
				<img id="spaceship_image" src="spaceship.png" alt="">
			</div>
		</div>
	
	</div>

	<div id="center_slider_container">
		<div id="sliders_container">
			<h1>Total: {parseInt(test0) + parseInt(test1) + parseInt(test2) + parseInt(test3) + parseInt(test4) + parseInt(test5)}</h1>
			<h1>Total: </h1>

			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test0 } />
			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test1 } />
			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test2 } />
			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test3 } />
			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test4 } />
			<RangeSlider min={minOfTheSlider} max={maxOfTheSlider} bind:values={ test5 } />

			<button on:click={hey}></button>
			
		</div>
	</div>

</main>

<style>

	main {
		background-image: linear-gradient(0deg, #030026 0%, #2F2352 100%);
	}

	#grid {
		background-image: url(../grid.png);
		background-repeat: repeat;
		background-size: 590px 590px;
		background-position: center top;
	}

	#space {
		padding-top: 350px; /* minimum to compensate negative margin of spaceship*/
		width: 100vw;
		height: 300px;

		background-color: rgba(0, 0, 0, 0.1);

		display: flex;
		justify-content: center;
		align-items: flex-start;

		overflow: hidden;

		background-image: url(../quadrante.png);
		background-repeat: no-repeat;
		background-size: 1401px auto;
		background-position: center 279px;
	}

	#spaceship_container {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: flex-start;

		height: 1401px;
		width: 1401px;
		min-height: 1401px;
		min-width: 1401px;

		border: 1px solid green;
		border-radius: 99999px;

		transform-origin: center center;
	}

	#spaceship_image {
		margin-top: -49px;
	}


	#center_slider_container {
		background-color: white;
		display: flex;
		justify-content: center;
	}	
	#sliders_container {
		display: inline-flex;
		flex-direction: column;

		width: 600px;

		padding: 30px 24px 40px 24px;
		background: #FFFFFF;
		box-shadow: 5px 5px 20px rgba(12, 5, 29, 0.1);
		border-radius: 30px;

		text-align: center;

		margin-top: -64px;
	}

	.slider {
	-webkit-appearance: none;
	width: 500px;
	height: 2px;
	background: #BFBAC9;
	outline: none;

	margin: 0;
	padding: 0;
	border: none;

	margin-bottom: 32px;
	}

	.slider:hover {
	opacity: 1;
	}

	.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	/* appearance: none; */
	width: 16px;
	height: 16px;
	background: #C92212;
	border-radius: 100px;
	box-sizing: content-box;
	border: 12px solid white;

	opacity: 1;
	cursor: pointer;


  	transition: 0.3s;
	}

	.slider:hover::-webkit-slider-thumb {
	-webkit-appearance: none;
	
	border: 12px solid rgba(255,195,189,0.5);

  	transition: 0.3s;
	}

	main {
		margin: 0;
		padding: 0;
	}

</style>