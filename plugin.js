function main() {
    try {
		context.executeAction("pausetoggle", {});
	} catch (error) {
		console.log(error);
	}
}

registerPlugin({
    name: 'OpenRCT2-AutomaticallyPause',
    version: '1.1',
    authors: ['Ken'],
    type: 'remote',
    licence: 'Unlicense',
    targetApiVersion: 7,
    main: main
});