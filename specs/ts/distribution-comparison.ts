import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Distribution Comparison",
    "description": "Here brush to show a density plots of a selection (`densityY` mark). Reference density plots are shown in a background layer. Optionally normalize using the `normalize` option to aid comparison of distribution features (enabled by default). To change the amount of smoothing, use the slider to set the `densityY` KDE kernel bandwidth.\n"
  },
  "data": {
    "flights": {
      "file": "data/flights-200k.parquet"
    }
  },
  "params": {
    "brush": {
      "select": "crossfilter"
    },
    "bandwidth": 20,
    "normalize": true
  },
  "vconcat": [
    {
      "input": "menu",
      "label": "Normalize",
      "as": "$normalize",
      "options": [
        true,
        false
      ]
    },
    {
      "input": "slider",
      "label": "Bandwidth (σ)",
      "as": "$bandwidth",
      "min": 0.1,
      "max": 100,
      "step": 0.1
    },
    {
      "plot": [
        {
          "mark": "densityY",
          "data": {
            "from": "flights"
          },
          "x": "delay",
          "fill": "#888",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "mark": "densityY",
          "data": {
            "from": "flights",
            "filterBy": "$brush"
          },
          "x": "delay",
          "fill": "aqua",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "select": "intervalX",
          "as": "$brush"
        }
      ],
      "yAxis": null,
      "xDomain": "Fixed",
      "width": 600,
      "marginLeft": 10,
      "height": 200
    },
    {
      "plot": [
        {
          "mark": "densityY",
          "data": {
            "from": "flights"
          },
          "x": "distance",
          "fill": "#888",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "mark": "densityY",
          "data": {
            "from": "flights",
            "filterBy": "$brush"
          },
          "x": "distance",
          "fill": "aqua",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "select": "intervalX",
          "as": "$brush"
        }
      ],
      "yAxis": null,
      "xDomain": "Fixed",
      "width": 600,
      "marginLeft": 10,
      "height": 200
    },
    {
      "plot": [
        {
          "mark": "densityY",
          "data": {
            "from": "flights"
          },
          "x": "time",
          "fill": "#888",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "mark": "densityY",
          "data": {
            "from": "flights",
            "filterBy": "$brush"
          },
          "x": "time",
          "fill": "aqua",
          "fillOpacity": 0.5,
          "bandwidth": "$bandwidth",
          "normalize": "$normalize"
        },
        {
          "select": "intervalX",
          "as": "$brush"
        }
      ],
      "xLabel": "Departure Time (hour)",
      "yTickFormat": "s",
      "yAxis": null,
      "xDomain": "Fixed",
      "width": 600,
      "marginLeft": 10,
      "height": 200
    }
  ]
};