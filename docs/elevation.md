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

## Get results

```php
// get results by single Location object
$locations = new Location([
	LatLngFields::LAT => 39.73915360,
	LatLngFields::LNG => -104.9847034,
]);

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

// or by polyline
$locations = 'enc:gfo}EtohhU';

// make API call
$results = $elevation->getByLocations($locations);

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

Every result had the following methods to retrieve member variables:

* `$first_result->getLocation()` (return Location)
* `$first_result->getElevation()` (return float)
* `$first_result->getResolution()` (return float)