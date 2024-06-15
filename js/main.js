window.load = () => {
	if ('ServiceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js')
			.then((reg) => {
				console.log('Service Worker registered successfully');
			})
			.catch((err) => {
				console.warn('Error while registering Service Worker', err);
			});
	}
};
