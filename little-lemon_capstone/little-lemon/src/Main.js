import React, { lazy, Suspense, memo } from 'react';
import { Route, Routes } from "react-router-dom";
import { useSitesContext } from './context/SitesContext.js';

function Main() {
    const sites = useSitesContext();
    return (
        <main>
            <Routes>
                {sites.map( ({name, path}) => {
                    const compCapital = name.charAt(0).toUpperCase() + name.slice(1);
                    const comp = compCapital.replace(/\s+/g, '');
                    const Component = lazy( () => import(`./pages/${comp}`));
                return (
                    <Route key={name} exact path={path} element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Component />
                        </Suspense>
                    } />
                )})}
            </Routes>
        </main>
    );
};

export default Main;