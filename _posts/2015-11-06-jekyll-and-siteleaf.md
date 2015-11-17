---
title: Jekyll and Siteleaf Sitting in a Tree
date: 2015-11-06 08:33:57 -05:00
categories:
- Jekyll
- Siteleaf
layout: post
---

[Jekyll](http://jekyllrb.com) and [Siteleaf](://www.siteleaf.com), two great tastes that taste great together. You get the power, flexibility, and portability of Jekyll—and you get the easy to use, client friendly, GUI goodness of Siteleaf. What’s not to like?

This freebie starter theme is a simple fixed-width, adaptive blog template. It's fixed-width because I hate fluid layouts. It's adaptive because **_mobile_**. The grid is controlled by a couple of simple [Sass](http://sass-lang.com) mixins. Basically, you set the width of your columns and gutters, center the grid on the viewport, and let the column count be determined by whatever breakpoints make sense given the content. That's it, mostly...

<!--more-->

``` sass
$font-size: 16px; // Your base font-size in pixels
$em: $font-size / 1em; // Shorthand for outputting ems
$column: 48px;	// The column-width of your grid in pixels
$gutter: 24px;	// The gutter-width of your grid in pixels

@mixin width ($cols:1) {
	width: ($cols * ($column + $gutter) - $gutter) / $em;
}
@mixin min-width ($cols:1) {
	width: ($cols * ($column + $gutter) - $gutter) / $em;
}
```
Set the number of columns (i.e. width) you want for the otermost container and then arrange interior content appropriately—spanning some or all of those columns as makes sense for the content.

``` sass
.wrap{
	@include width(12);
}
.sidebar{
	@include width(4);
	float: left;
	margin-right: $gutter;
}
```

**Not that you really have to worry about any of that stuff though.** I've already setup the grid and breakpoints as seemed appropriate for a blog type site. Just go through the minimal [setup](/setup/) to get the theme up and running with Siteleaf and start writing!

Not sure what I'm talking [about](/about/)?
