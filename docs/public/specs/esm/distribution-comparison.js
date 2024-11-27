import * as vg from "@uwdata/vgplot";

await vg.coordinator().exec([
  vg.loadParquet("flights", "data/flights-200k.parquet")
]);

const $brush = vg.Selection.crossfilter();
const $bandwidth = vg.Param.value(20);
const $normalize = vg.Param.value(true);

export default vg.vconcat(
  vg.menu({label: "Normalize", as: $normalize, options: [true, false]}),
  vg.slider({label: "Bandwidth (σ)", as: $bandwidth, min: 0.1, max: 100, step: 0.1}),
  vg.plot(
    vg.densityY(
      vg.from("flights"),
      {
        x: "delay",
        fill: "#888",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.densityY(
      vg.from("flights", {filterBy: $brush}),
      {
        x: "delay",
        fill: "aqua",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.intervalX({as: $brush}),
    vg.yAxis(null),
    vg.xDomain(vg.Fixed),
    vg.width(600),
    vg.marginLeft(10),
    vg.height(200)
  ),
  vg.plot(
    vg.densityY(
      vg.from("flights"),
      {
        x: "distance",
        fill: "#888",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.densityY(
      vg.from("flights", {filterBy: $brush}),
      {
        x: "distance",
        fill: "aqua",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.intervalX({as: $brush}),
    vg.yAxis(null),
    vg.xDomain(vg.Fixed),
    vg.width(600),
    vg.marginLeft(10),
    vg.height(200)
  ),
  vg.plot(
    vg.densityY(
      vg.from("flights"),
      {
        x: "time",
        fill: "#888",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.densityY(
      vg.from("flights", {filterBy: $brush}),
      {
        x: "time",
        fill: "aqua",
        fillOpacity: 0.5,
        bandwidth: $bandwidth,
        normalize: $normalize
      }
    ),
    vg.intervalX({as: $brush}),
    vg.xLabel("Departure Time (hour)"),
    vg.yTickFormat("s"),
    vg.yAxis(null),
    vg.xDomain(vg.Fixed),
    vg.width(600),
    vg.marginLeft(10),
    vg.height(200)
  )
);