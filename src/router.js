import React from 'react';
import { Route, Redirect } from 'react-router';

function Router() {
 
  
    return (
    <Route>
       <Route path="/artikel" exact>
            <Redirect to="/artikel/blog" />
          </Route>

          <Route path="/"  exact />
          <Route path="/HomepageFix"  exact />
          <Route path="/product/detail/:slug" />
          <Route path="/syarat-dan-ketentuan"  />
          <Route path="/kebijakan-privasi"  />
          <Route path="/faq"  />
          <Route path="/tentang"  />
          <Route path="/artikel/berita"  exact />
          <Route path="/artikel/blog"  exact />
          <Route path="/artikel/:id"  />
          <Route path="/trivia"  />
    </Route>
);
    }
export default Router;