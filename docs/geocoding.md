---
id: geocoding
title: Geocoding
sidebar_label: Geocoding
---

The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.

<a href="https://developers.google.com/maps/documentation/geocoding/start" target="_blank">Official Google Geocoding documentation</a>

## Initialize Geocoding Object

First of all replace `YOUR_API_KEY` with your actual API key.


```php
use Biscolab\GoogleMaps\Api\Geocoding;
use Biscolab\GoogleMaps\Enum\GoogleMapsApiConfigFields;

$geocoding = new Geocoding([
	GoogleMapsApiConfigFields::KEY => 'YOUR_API_KEY'
]);
```

## Get results

You have 3 different ways to retrieve data of your place! 

Go to complete <a href="https://biscolab.com/google-maps-php-reference/Biscolab/GoogleMaps/Api/Geocoding.html" target="_blank">SDK reference</a>

### By address as string

`getByAddress` accept as parameter the address of the place.

```php

$results = $geocoding->getByAddress('Insert your address here, city, postal code etc...');

```

### By Location/LatLng object

`getReverse` accept a `LatLng` object which represents the location of the place.

```php
$results = $geocoding->getReverse(new LatLng([
			LatLngFields::LAT => $lat,
			LatLngFields::LNG => $lng,
		]));
```

### By Place ID as string

`getByPlaceId` accept as parameter the address the place ID.

```php
$results = $geocoding->getByPlaceId('YOUR_PLACE_ID');

```

## Use results
Results is/are a `Biscolab\GoogleMaps\Http\GeocodingResultsCollection` object.  
First thing you should know how many results there are in your `GeocodingResultsCollection` using `count
` method.

```php
$number_of_results = $results->count();
```

To retrieve the first result you can use the `first` method:

```php
$first_result = $results->first();
```

`$first_result` is an instance of `GeocodingResult` class and has the following methods:

| Method name | Return Type |
| --------------------- | --------------------- |
|`getAddressComponents()`  | `Address` |
|`getFormattedAddress()`    | `string` |
|`getGeometry()`    | `Geometry` |
|`getPlaceId()`    | `string` |
|`getTypes()`    | `array` |

