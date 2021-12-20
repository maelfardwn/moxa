import React, { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import TnC from "./pages/TnC";
import Pp from "./pages/Pp";
// import Faq from "./pages/Faq";
import Tentang from "./pages/Tentang";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Trivia from "./pages/Trivia2";
import Blogs from "./pages/Blogs";
import FaqNew from "./pages/FaqNew";
import HomepageFix from "./pages/HomepageFix";
import ProductDetail from "./pages/product/ProductDetail";
import Faq from "./pages/Faq";

const history = createBrowserHistory();
ReactGA.initialize("UA-175679937-1");
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
      <Router history={history}>
        <Switch>
          <Route path="/artikel" exact>
            <Redirect to="/artikel/blog" />
          </Route>

          <Route path="/" component={HomepageFix} exact />
          <Route path="/product/detail/:slug" component={ProductDetail} exact />
          
          <Route path="/syarat-dan-ketentuan" component={TnC} />
          <Route path="/kebijakan-privasi" component={Pp} />
          <Route path="/faq" component={Faq} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/artikel/berita" component={News} exact />
          <Route path="/artikel/blog" component={Blogs} exact />
          <Route path="/artikel/:id" component={NewsDetail} />
          <Route path="/trivia" component={Trivia} />
        </Switch>
      </Router>
  );
}

export default App;
