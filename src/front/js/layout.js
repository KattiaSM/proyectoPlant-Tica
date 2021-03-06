import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Registration } from "./pages/register";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Garden } from "./pages/garden";
import { Favorites } from "./pages/favorites";
import { CreateTodo } from "./pages/create_todo";
import { Plants } from "./pages/plants";
import { Restore } from "./pages/restore";
import { TodosList } from "./pages/todos_list";
import { SearchView } from "./pages/search_view";

import injectContext from "./store/appContext";

import Navbar from "./component/navbar/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/create">
							<CreateTodo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/register">
							<Registration />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/favorites">
							<Favorites />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/search">
							<SearchView />
						</Route>
						<Route exact path="/garden">
							<Profile />
							<div className="m-5 mt-0">
								<div className="row justify-content-center">
									<TodosList />
								</div>
							</div>
						</Route>
						<Route exact path="/plants">
							<Plants />
						</Route>
						<Route exact path="/restore">
							<Restore />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
