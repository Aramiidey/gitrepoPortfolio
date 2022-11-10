import React, {Suspense} from "react";
import { Routes, Route} from "react-router-dom";
import Layout from "./components/layouts/Layout";
const HomePage = React.lazy(() => import("./pages/HomePage.js"));
const AllRepositoryPage = React.lazy(() => import("./pages/AllRepositoryPage.js"));
const SingleRepoPage = React.lazy(() => import("./pages/SingleRepoPage.js"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage.js"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={ <Suspense fallback={<div></div>}> <NotFoundPage /> </Suspense> } />
        <Route path="/" element={<Suspense fallback={<div></div>}> <HomePage /> </Suspense>} />
        <Route path="/repositories" element={<Suspense fallback={<div></div>}> <AllRepositoryPage /> </Suspense> } />
        <Route path="/repositories/:reponame" element={<Suspense fallback={<div></div>}><SingleRepoPage /></Suspense> } />
      </Routes>
    </Layout>
  );
};

export default App;
