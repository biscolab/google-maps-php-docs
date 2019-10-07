---
id: contributing
title: Contributing
sidebar_label: Contributing
---

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on [Github](https://github.com/biscolab/laravel-recaptcha).


## Pull Requests

- **[PSR-2 Coding Standard](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)** - The easiest way to apply the conventions is to install [PHP Code Sniffer](http://pear.php.net/package/PHP_CodeSniffer).

- **Add tests!** - Your patch won't be accepted if it doesn't have tests.

- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Consider our release cycle** - We try to follow [SemVer v2.0.0](http://semver.org/). Randomly breaking public APIs is not an option.

- **Create feature branches** - Don't ask us to pull from your master branch.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please [squash them](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) before submitting.


## Running Tests

By default the tests will send live HTTP requests to the Google API, that means you need a valid `api_key`. 
To set your `api_key` you have to create a `phpunit.xml` file from `phpunit.xml.dist` file and set php environment `API_KEY` variable.

```xml
<phpunit>
    ...
    <php>
        <env name="API_KEY" value=""/>
    </php>
</phpunit>
```
> DO NOT edit `phpunit.xml`

Then run the following command
``` bash
$ composer test
```

If you are without an internet connection you can skip these tests by excluding the `http` group:

``` bash
$ composer test-no-http
```

**Happy coding**!