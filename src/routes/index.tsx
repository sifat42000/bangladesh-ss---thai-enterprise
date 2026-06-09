/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy } from 'react';
import { createHashRouter, useRouteError } from 'react-router-dom';
import Layout from '../layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const Quote = lazy(() => import('../pages/Quote'));

function RouteError() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8 text-slate-900">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold mb-4">Oops! Something went wrong.</h1>
        <p className="text-base text-slate-600 mb-6">
          {(error as Error)?.message ?? 'Unable to load this page. Please try again.'}
        </p>
        <a href="#/" className="text-brand-gold underline">
          Return home
        </a>
      </div>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:slug', // Added detailed route
        element: <ServiceDetails />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'quote',
        element: <Quote />,
      },
    ],
  },
]);
