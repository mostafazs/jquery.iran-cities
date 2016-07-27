# jquery.iran-cities


jQuery plugin for adding iran cities dynamically to web page.support Farsi(Iran) and English languages.

## Installation

Use npm:

    npm install jquery.iran-cities


## Usage

Make sure you have jquery on page. use example located on `example.html`.

### I wanna see it!

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example</title>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" charset="utf-8"></script>
    <script src="./jquery.iran-cities.js" charset="utf-8"></script>
  </head>
  <body>
    <ul id="CT" data-lang="fa">

    </ul>
    <select id="CT" data-lang="en">

    </select>
    <div id="otherElement" data-lang="fa">
    </div>

    <script type="text/javascript">
      $("document").ready(function(){
        $("ul#CT").cities();
        $("select#CT").cities();
        $("div#otherElement").cities();
      });
    </script>
  </body>
</html>
```


## Examples:
    $("ul").cities(); //Add cities as <li> to <ul>
    $("select").cities(); //Add cities as <option> to <select>

## Example:(Use language)
      <ul data-lang="fa">
      </ul>
      <ul data-lang="en">
      </ul>
      <script>
      $("document").ready(function(){
        $("ul").cities();
        });
      </scipt>

## TODO

* add more parameters
* more tests

## Found a bug?

Open a [github issue](https://github.com/mostafazs/jquery.iran-cities/issues).

## License

MIT License ( [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT) )
