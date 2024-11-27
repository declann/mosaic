<script setup>
  import { coordinator } from '@uwdata/vgplot';
  coordinator().clear();
</script>

# Distribution Comparison

Here brush to show a density plots of a selection (`densityY` mark). Reference density plots are shown in a background layer. Optionally normalize using the `normalize` option to aid comparison of distribution features (enabled by default). To change the amount of smoothing, use the slider to set the `densityY` KDE kernel bandwidth.

<Example spec="/specs/yaml/distribution-comparison.yaml" />

## Specification

::: code-group
<<< @/public/specs/esm/distribution-comparison.js [JavaScript]
<<< @/public/specs/yaml/distribution-comparison.yaml [YAML]
<<< @/public/specs/json/distribution-comparison.json [JSON]
:::
