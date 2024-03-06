function main() {
    context.executeAction("pausetoggle", {});
}

registerPlugin({
    name: 'OpenRCT2-AutomaticallyPause',
    version: '1.0',
    authors: ['Ken'],
    type: 'local',
    licence: 'Unlicense',
    targetApiVersion: 7,
    main: main
});