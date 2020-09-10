import React from 'react';

function Header() {
  return (
    <div style={{ background: '#333' }}>
      <div className="container">
        <div className="text-sm-center text-white py-5">
          <h1>Awesome Piano Playing</h1>
          <p>
            An interactive piano keyboard for React. Supports custom sounds,
            <br className="d-none d-sm-block" /> touch/click/keyboard events, and fully configurable
            styling.
          </p>
          <div className="mt-4">
            <a
              className="btn btn-outline-light btn-lg"
              href="https://github.com/kevinsqi/react-piano"
            >
              Documentation is Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
