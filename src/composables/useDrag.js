import { ref } from "vue";

export function useDrag() {
	const dragging = ref(false);
	const mouseX = ref(0);
	const mouseY = ref(0);
	const x = ref(0);
	const y = ref(0);

	window.addEventListener("mousemove", (event) => {
		if (dragging.value) {
			const diffX = event.clientX - mouseX.value;
			const diffY = event.clientY - mouseY.value;
			x.value += diffX;
			y.value += diffY;
		}

		mouseX.value = event.clientX;
		mouseY.value = event.clientY;
	});

	window.addEventListener("mouseup", () => {
		dragging.value = false;
	});

	return { x, y, dragging };
}
