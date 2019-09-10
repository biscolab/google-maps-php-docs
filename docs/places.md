---
id: places
title: Places (Search)
sidebar_label: Places (Search)
---

The Places API allows you to query for place information on a variety of categories, such as: establishments, prominent points of interest, geographic locations, and more. You can search for places either by proximity or a text string (credits: <a href="https://developers.google.com/places/web-service/search" target="_blank">Official Documentation website</a>.

There are 3 types of request:

* Find Place requests
* Nearby Search requests
* Text Search requests 

<a href="https://developers.google.com/places/web-service/search" target="_blank">Official Google Place documentation</a>

## Initialize Places Object

First of all replace `YOUR_API_KEY` with your actual API key.


```php
use Biscolab\GoogleMaps\Api\Places;
use Biscolab\GoogleMaps\Enum\GoogleMapsApiConfigFields;

$place = new Places([
	GoogleMapsApiConfigFields::KEY => 'YOUR_API_KEY'
]);
```

## Find Places requests

This function takes a text input (name, address or phone number) and returns a place.

### Using name or address

Search place using the "name" or "address".

```php
use Biscolab\GoogleMaps\Fields\GoogleMapsRequestFields;

// get results by place's name or address
$result = $places->findPlaceByText("Museum of Contemporary Art Australia");
```

`findPlaceByText` method accepts 3 arguments

| Name | Type | Description | Default |
| ------------ | ----------------- | ----------------- | --------------------- |
| `$query` | `string` | The address (or the name) specifying which place to search for | Required |
| `$params` | `array` | The list of search params to add to API request | `[]` |
| `$fields` | `array` | The fields specifying the types of place data to return | `[]` |

Find further details about request fields (required, types, etc...) here: <a href="https://developers.google.com/places/web-service/search#FindPlaceRequests" target="_blank">https://developers.google.com/places/web-service/search#FindPlaceRequests</a>

### Using phone number

Search place using the "phone number".

```php
use Biscolab\GoogleMaps\Fields\GoogleMapsRequestFields;

// get results by place's phone number
$result = $places->findPlaceByPhoneNumber("+61293744000");
```

`findPlaceByPhoneNumber` method accepts 3 arguments

| Name | Type | Description | Default |
| ------------ | ----------------- | ----------------- | --------------------- |
| `$number` | `string` | The phone number specifying which place to search for | Required |
| `$params` | `array` | The list of search params to add to API request | `[]` |
| `$fields` | `array` | The fields specifying the types of place data to return | `[]` |

Find further details about request fields (required, types, etc...) here: <a href="https://developers.google.com/places/web-service/search#FindPlaceRequests" target="_blank">https://developers.google.com/places/web-service/search#FindPlaceRequests</a>

## Nearby Search requests

This function looks for places within a specified area.

### Using location & radius

```php

use Biscolab\GoogleMaps\Object\Location;
use Biscolab\GoogleMaps\Fields\GoogleMapsRequestFields;

$location = new Location([
        LatLngFields::LAT => -33.8670522,
        LatLngFields::LNG => 151.1957362,
    ]);
$radius = 1000;

$result = $places->findNearbyPlaceByRadius($location, $radius);
```

`findNearbyPlaceByRadius` method accepts 3 arguments

| Name | Type | Description | Default |
| ------------ | ----------------- | ----------------- | --------------------- |
| `$location` | `Location` | must be instance of `Biscolab\GoogleMaps\Object\Location` class | Required |
| `$radius` | `int` | defines the distance in meters. Maximum allowed value is 50000. | Required |
| `$params` | `array` | additional parameters to add to API call | `[]` |

### Rank by distance

```php

use Biscolab\GoogleMaps\Object\Location;
use Biscolab\GoogleMaps\Fields\GoogleMapsRequestFields;

$location = new Location([
        LatLngFields::LAT => -33.8670522,
        LatLngFields::LNG => 151.1957362,
    ]);

// You MUST set at least one of following values
$params = [
    GoogleMapsRequestFields::KEYWORD => 'a keyword',
    GoogleMapsRequestFields::NAME => 'name of the place you are looking for',
    // Biscolab\GoogleMaps\Values\PlaceTypeValues enum class
    GoogleMapsRequestFields::TYPE => 'Type of the place you are looking for'
];

$result = $places->findNearbyPlaceByDistance($location, $params);
```
`findNearbyPlaceByDistance` method accepts 2 arguments

| Name | Type | Description | Default |
| ------------ | ----------------- | ----------------- | --------------------- |
| `$location` | `Location` | must be instance of `Biscolab\GoogleMaps\Object\Location` class | Required |
| `$params` | `array` | additional parameters to add to API call. You MUST set at least one of following values: `keyword`, `name`, `type` | `[]` |


Find further details about request fields (required, types, etc...) here: <a href="https://developers.google.com/places/web-service/search#PlaceSearchRequests" target="_blank">https://developers.google.com/places/web-service/search#PlaceSearchRequests</a>

## Text Search request

This service returns information about a set of places based on a string.

### Search by query

```php

use Biscolab\GoogleMaps\Fields\GoogleMapsRequestFields;

$query = "restaurants in Sydney";

$params = [
    ...
];

$result = $places->textSearch($query, $params);
```

`textSearch` method accepts 2 arguments

| Name | Type | Description | Default |
| ------------ | ----------------- | ----------------- | --------------------- |
| `$query` | `string` | The text string on which to search, for example: "restaurant" or "123 Main Street". | Required |
| `$params` | `array` | additional parameters to add to API call | `[]` |

Find further details about request fields (required, types, etc...) here: <a href="https://developers.google.com/places/web-service/search#TextSearchRequests" target="_blank">https://developers.google.com/places/web-service/search#TextSearchRequests</a>


## Use results
Results is/are a `Biscolab\GoogleMaps\Http\PlaceResultsCollection` object.  

### Current page
First thing you should know how many results there are in your `PlaceResultsCollection` using `count
` method.

```php
$number_of_results = $results->count();
```

To retrieve the first result you can use the `first` method:

```php
$first_result = $results->first();
```

`$first_result` is an instance of `PlaceResult` class and has the following methods:

| Method name | Return Type |
| --------------------- | --------------------- |
|`getPhotos()`  | `PhotoCollection` |
|`getGeometry()`    | `Geometry` |
|`getFormattedAddress()`    | `string` |
|`getName()`    | `string` |
|`getIcon()`    | `string` |
|`getId()`  | `string` |
|`getPlaceId()`     | `string` |
|`getReference()`   | `string` |
|`getVicinity()`   | `string` |
|`getTypes()`   | `array` |
|`getOpeningHours()`    | `array` |
|`getPriceLevel()`  | `int` |
|`getRating()`  | `float` |
|`getPermanentlyClose()`    | `bool` |
|`getPlusCode()`    | `array` |

### Next result page

Results can be paginated. How do you know id a result has more pages?

```php

// getNextPage method checks if $result has "next page"
$next_page_result = $result->getNextPage();

````

