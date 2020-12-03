import { writable, derived, readable } from 'svelte/store';

export const points = writable([3,3,3,3,3,3]);

export const total = derived(
	points,
	$points => {$points[0] + $points[1] + $points[2] + $points[3] + $points[4] + $points[5] - 18}
);

// export const total = readable( (points[0] + points[1] + points[2] + points[3] + points[4] + points[5]) )