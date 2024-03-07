function main() {
  var pluginStartTime = new Date().getTime();
  var tickDispose = context.subscribe("interval.tick", function () {
    var firstTickTime = new Date().getTime();
    var timeBewteenTicks = firstTickTime - pluginStartTime;
    if (timeBewteenTicks >= 500) {
      console.log(
        "gamefile was already paused on load, so no need to toggle; disposing of tick listener."
      );
      tickDispose.dispose();
    } else {
      console.log("not paused, so activating toggle."),
        context.executeAction("pausetoggle", {}),
        tickDispose.dispose();
    }
  });
}

registerPlugin({
  name: "OpenRCT2-AutomaticallyPause",
  version: "1.1",
  authors: ["Ken"],
  type: "remote",
  licence: "Unlicense",
  targetApiVersion: 7,
  main: main,
});
