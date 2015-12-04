---
title: Siteleaf and Jekyll Sitting in a Tree
date: 2015-11-03 08:33:00 -05:00
topics:
- Jekyll
- Siteleaf
- Kissyface
layout: post
---

[Jekyll](http://jekyllrb.com) and [Siteleaf](://www.siteleaf.com), two great tastes that taste great together. You get the power, flexibility, and portability of Jekyll—and you get the easy to use, client friendly, GUI goodness of Siteleaf. What’s not to like?

[Jekyll](http://jekyllrb.com) is a deceptively simple Ruby-based static site generator. It powers [Github Pages](https://pages.github.com), is one of [the most popular](https://www.staticgen.com) generators around, and now at version 3.0 includes a host of great features like [Sass](http://sass-lang.com) and [Coffee Script](http://coffeescript.org) support, [custom content types](http://jekyllrb.com/docs/collections/), [data files](http://jekyllrb.com/docs/datafiles/), [Liquid templating](https://github.com/Shopify/liquid), and tons more.

![Screenshot 2015-12-03 at 10.58.59 PM.png](/uploads/Screenshot%202015-12-03%20at%2010.58.59%20PM.png)

[Siteleaf](http://www.siteleaf.com) helps you use Jekyll with clients. **Specifically, it provides a well designed web-based interface to your Jekyll application that content managers can actually use.** Getting non-technical subject matter experts on board with any kind of Jekyll workflow has always been the biggest challenge of using Jekyll with clients. They don't want to hear about build scripts, or Github repos, or file name conventions. Siteleaf lets your content managers shortcut that steep Jekyll learning curve by giving them the beautifully simple web-based interface they deserve. Want to add an image? Just drag and drop. Adding structured metadata? It's point and click.

Speaking of point and click, [this site](https://github.com/BryanSchuetz/siteleaf-jekyll) is a freebie starter theme to help you quickly get started with Siteleaf and Jekyll. Use it as a starting point for your own customizations, or just change the title and use it as is, or ignore it altogether.

It's a simple fixed-width, adaptive blog template. It's fixed-width because I hate fluid layouts. It's adaptive because **_mobile_**. The grid is controlled by a couple of small [Sass](http://sass-lang.com) mixins. Basically, you set the width of your columns and gutters, center the grid on the viewport, and let the column count be determined by whatever breakpoints make sense given the content. That's it, mostly...

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

**Not that you really have to worry about any of that though.** I've already setup the grid and breakpoints as seemed appropriate for a blog type site.

If you just want to use this theme 'as is' then go through the minimal [setup](/setup/) to get the theme up and running with Siteleaf, and start writing! Not sure what I'm talking [about](/about/)?
