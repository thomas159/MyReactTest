import React from "react";
import { Route, IndexRoute } from "React-router";
import Contact from "./containers/contact";
import App from "./components/app";
import Nav from "./components/nav";
import Main from "./containers/main";
import Reviews from "./containers/reviews";


export default (
<Route path="/" component={App}>
	<IndexRoute component={Main} />
	<Route path="contact" component={Contact} />
	<Route path="reviews" component={Reviews} />
</Route>
);