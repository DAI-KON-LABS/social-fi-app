import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <h1>Title</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  );
}

export default React.memo(Layout);
