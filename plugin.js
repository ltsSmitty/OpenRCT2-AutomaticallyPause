function main() {  
	try {
		var pluginStartTime = new Date().getTime();
		var tickDispose = context.subscribe("interval.tick", function () {
			var firstTickTime = new Date().getTime();
			var timeBewteenTicks = firstTickTime - pluginStartTime;
			if (timeBewteenTicks >= 500) {
				tickDispose.dispose();
			} else {
				context.executeAction("pausetoggle", {}),
				tickDispose.dispose();
			}
		});
	} catch (error) {
		console.log(error);
	}
}

registerPlugin({
    name: 'OpenRCT2-AutomaticallyPause',
    version: '1.2',
    authors: ['Ken'],
    type: 'remote',
    licence: 'Unlicense',
    targetApiVersion: 7,
    main: main
});