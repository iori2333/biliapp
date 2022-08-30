import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

import HomePage from '@/pages/HomePage/HomePage';
import NewsPage from '@/pages/NewsPage/NewsPage';
import MePage from '@/pages/MePage';
import SettingsPage from '@/pages/SettingsPage';
import VideoPage from '@/pages/VideoPage';

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
        element: 'Recommend'
      },
      {
        path: 'live',
        element: 'Live'
      },
      {
        path: 'hot',
        element: 'Hot'
      },
      {
        path: 'bangumi',
        element: 'Bangumi'
      },
      {
        path: 'movie',
        element: 'Movie'
      }
    ]
  },
  {
    path: '/news',
    element: <NewsPage />,
    children: [
      {
        path: 'all',
        element: 'All'
      },
      {
        path: 'video',
        element: 'Video'
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
  },
  {
    path: '/video/:bvid',
    element: <VideoPage />
  }
];

export default routes;
