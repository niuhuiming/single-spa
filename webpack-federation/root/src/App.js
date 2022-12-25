import React, { Suspense } from 'react';

// 导入子模块
const About = React.lazy(() => import('myUser/about'));
const Home = React.lazy(() => import('myUser/home'));

export default function App() {
  return (
    <Suspense fallback="Loading app">
      <h3>root的app</h3>
      <About />
      <Home />
    </Suspense>
  )
}
