# react-borough-map-munich

Interactive borough map of Munich with SVG and React.

For more information see my blog:

https://www.tderflinger.com/en/interactive-svg-map-munich

## Run

```
yarn
```

and

```
yarn start
```

## Overpass Turbo Query

```
// Time-out hochsetzen
[out:json][timeout:300];

{{geocodeArea:Hannover}}->.searchArea;

(
  // Nur Elemente vom Typ "Relation" abfragen.
  relation["boundary"="administrative"]["admin_level"="9"](area.searchArea);
);

out body;
>;
out skel qt;
```
