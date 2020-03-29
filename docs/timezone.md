---
id: timezone
title: TimeZone
sidebar_label: TimeZone
---

The Time Zone API provides time offset data for locations on the surface of the earth

<a href="https://developers.google.com/maps/documentation/timezone/start" target="_blank">Official Google TimeZone documentation</a>

## Initialize TimeZone Object

First of all replace `YOUR_API_KEY` with your actual API key.

```php
use Biscolab\GoogleMaps\Api\TimeZone;
use Biscolab\GoogleMaps\Enum\GoogleMapsApiConfigFields;

$timezone = new TimeZone([
	GoogleMapsApiConfigFields::KEY => 'YOUR_API_KEY'
]);

```

## Get result

Go to complete <a href="https://biscolab.com/google-maps-php-reference/Biscolab/GoogleMaps/Api/TimeZone.html" target="_blank">SDK reference</a>

### By location and timestamp

```php

$result = $timezone->get($location, $timestamp, $language);

```

`get` accepts 3 arguments

| Name         | Requested | Type                                | Description                                                                                                                                       |     |
| ------------ | --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `$location`  | Yes       | Biscolab\GoogleMaps\Object\Location | Represents the location to look up                                                                                                                |
| `$timestamp` | Yes       | integer                             | The Time Zone API uses the `$timestamp` to determine whether or not Daylight Savings should be applied, based on the time zone of the `$location` |
| `$language`  | No        | string                              | The language in which to return results                                                                                                           |

## Use result

Result is an instance of `Biscolab\GoogleMaps\Http\Result\TimeZoneResult` class and has the following methods:

| Method name         | Return Type |
| ------------------- | ----------- |
| `getDdstOffset()`   | `int`       |
| `getRawOffset()`    | `int`       |
| `getTimeZoneId()`   | `string`    |
| `getTimeZoneName()` | `string`    |
