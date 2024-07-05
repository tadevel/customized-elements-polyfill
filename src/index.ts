const run = ()=>{
	for (let node of Array.from(document.querySelectorAll('[is]')) as (HTMLElement & { connectedCallback?: Function })[]) {
		let clazz = customElements.get(node.getAttribute('is') as string);
		if (clazz && node.constructor != clazz) {
			Object.setPrototypeOf(node, clazz.prototype);
			Object.setPrototypeOf(clazz, function(){ return document.createElement(node.tagName); });
			Object.assign(node, Reflect.construct(clazz, []));
			node?.connectedCallback?.();
		}
	}
}

if (document.readyState == 'loading') {
	document.addEventListener('readystatechange', ()=>{
		if (document.readyState == 'interactive') run()
	})
} else {
	queueMicrotask(()=>run())
}

window.customizedElementsPolyfill = { run }
export { run as runCustomizedElementsPolyfill }
