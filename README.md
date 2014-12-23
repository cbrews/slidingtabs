# slidingtabs

slidingtabs is an easy-to-use jQuery plugin for horizontally sliding tabs.

Demo coming soon.

## Usage

Install the slidingtabs.jquery.js file and dependencies.

The structure of the sliding tabs is flexible, as long as it falls into this configuration:
```html
<div id="container"> <!-- you can use any element (not just div) for the container block -->
  <nav>
    <h1 data-tab="tab-1">Page 1</h1>
    <h1 data-tab="tab-2">Page 2</h1>
  </nav>
  <div>
    <article id="tab-1">My page 1 content</article>
    <article id="tab-2">My page 2 content</article>
  </div>
</div>
<script>$('#container').slidingtabs();</script>
```

### Required elements
* `<nav>` must contain each tab name.  The navigation elements themselves are not restricted to a particular element type ( (I used `<h1>` elements, but you could use `<li>`, `<p>`, `<h3>`, etc), but each element must have a `data-tab` attribute referencing the ids of the elements in the content section.
* `<div>` must contain each content page.  Like the navigation, the elements themselves are not restricted to any particular type (I used `<article>`, but you could use `<p>`, `<div>`, `<ul>`, etc), but they should be `display: block` and contain an id that references the navigation data-tab attributes.  

### Optional configurations

The additional optional configurations are available in the sliding tabs configuration:

```javascript
$('.tabs').slidingtabs({
  duration: 500,
  easing: "easeInOutExpo",
  startTab: 'tab-1'
});
```

#### duration
The time it takes to switch tabs in ms (defaults to 500)

#### easing
The easing of switching tabs (defaults to "easeInOutExpo").
See the [jQuery Easing page](http://api.jqueryui.com/easings/) for available options.

#### startTab
The id of the initial tab to show. Defaults to the first tab.

## Dependencies

* jQuery
* jQuery UI

## Known Issues
1. If you order the tabs and content pages differently you may get unexpected direction sliding behavior.
