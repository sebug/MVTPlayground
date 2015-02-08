# MVT Playground
This is just me toying around with ASP.NET and Thermite.

## How to build
This one has a really high barrier of entry - you'll need both [kvm](http://graemechristie.github.io/graemechristie/blog/2014/05/26/asp-dot-net-vnext-on-osx-and-linux/) and [PureScript](http://www.purescript.org).

After that
	kpm restore
	kpm build
	cd thermite
	pulp dep update
	pulp build
	pulp browserify > ../wwwroot/dist.js
	cp bower_components/react/react.js ../wwwroot/


Finally, you can start the whole shebang with

	k kestrel
