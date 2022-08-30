import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import NewsPage from '@/pages/NewsPage/NewsPage';
import MePage from '@/pages/MePage';
import SettingsPage from '@/pages/SettingsPage';
import ViewBase from './pages/ViewBase';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home/recommend" replace />
  },
  {
    path: '/home',
    element: <HomePage />,
    children: [
      {
        path: 'recommend',
        element: <ViewBase>Recommends</ViewBase>
      },
      {
        path: 'live',
        element: <ViewBase>Live</ViewBase>
      },
      {
        path: 'hot',
        element: <ViewBase>Hot</ViewBase>
      },
      {
        path: 'bangumi',
        element: <ViewBase>Bangumi</ViewBase>
      },
      {
        path: 'movie',
        element: <ViewBase>Movie</ViewBase>
      }
    ]
  },
  {
    path: '/news',
    element: <NewsPage />,
    children: [
      {
        path: 'all',
        element: <ViewBase>All</ViewBase>
      },
      {
        path: 'video',
        element: <ViewBase>Video</ViewBase>
      }
    ]
  },
  {
    path: '/me',
    element: <MePage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  }
];

export default routes;
