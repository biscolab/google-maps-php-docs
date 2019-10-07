---
id: elevation
title: Elevation
sidebar_label: Elevation
---

The Elevation API provides elevation data for all locations on the surface of the earth, including depth locations on the ocean floor (which return negative values).

There are two types of request:

* Positional Requests
* Sampled Path Requests

At the moment this package support only **Positional Requests** but I'm working on **Sampled Path Requests** and it will be available soon.   

<a href="https://developers.google.com/maps/documentation/elevation/start" target="_blank">Official Google Elevation documentation</a>

## Initialize Elevation Object

First of all replace `YOUR_API_KEY` with your actual API key.


```php
use Biscolab\GoogleMaps\Api\Elevation;
use Biscolab\GoogleMaps\Enum\GoogleMapsApiConfigFields;

$elevation = new Elevation([
	GoogleMapsApiConfigFields::KEY => 'YOUR_API_KEY'
]);
```

## Get results (Positional Requests)

First of all you have to prepare the `locations` variable, it can be a single `Location` object, an array of `Location` objects or a polyline string.

### Single Location object

Create a Location object using latitude and longitude.

```php
// get results by single Location object
$locations = new Location([
	LatLngFields::LAT => 39.73915360,
	LatLngFields::LNG => -104.9847034,
]);
```

### Array of Location objects

Using multiple Location objects inside an array

```php
// or by multiple Location objects
$locations = [
	new Location([
		LatLngFields::LAT => 39.73915360,
		LatLngFields::LNG => -104.9847034,
	]),
	// ... more locations
	new Location([
		LatLngFields::LAT => 50.123,
		LatLngFields::LNG => 99.456,
	])
];
```
### Polyline encoded string

Encode a location using the <a href="https://developers.google.com/maps/documentation/utilities/polylinealgorithm" target="_blank">Encoded Polyline Algorithm Format</a>

```php
// or by polyline
$locations = 'enc:gfo}EtohhU';
```
### Make API call

```php
// make API call
$results = $elevation->getByLocations($locations);
```

## Get results (Sampled Path Requests)

First of all you have to prepare the `path` variable, it can be an array of `Location` objects or a polyline string.

### Array of Location objects

Using multiple Location objects inside an array

```php
// or by multiple Location objects
$path = [
	new Location([
		LatLngFields::LAT => 39.73915360,
		LatLngFields::LNG => -104.9847034,
	]),
	// ... more locations
	new Location([
		LatLngFields::LAT => 50.123,
		LatLngFields::LNG => 99.456,
	])
];
```
### Polyline encoded string

Encode a location using the <a href="https://developers.google.com/maps/documentation/elevation/intro#Paths" target="_blank">Encoded Polyline Algorithm Format</a>

```php
// or by polyline
$path = 'enc:gfo}EtohhUxD@bAxJmGF';
```
### Make API call

```php
// make API call
$samples = 5; // must be int > 0
$results = $elevation->getBySampledPath($path, $samples);
```

## Use results
Results is/are a `Biscolab\GoogleMaps\Http\ElevationResultsCollection` object.  
First thing you should know how many results there are in your `ElevationResultsCollection` using `count
` method.

```php
$number_of_results = $results->count();
```
To retrieve the first result you can use the `first` method:

```php
$first_result = $results->first();
```

`$first_result` is an instance of `ElevationResult` class and has the following methods:

| Method name | Return Type |
| --------------------- | --------------------- |
|`getLocation()`  | `Location` |
|`getElevation()`    | `float` |
|`getResolution()`    | `float` |