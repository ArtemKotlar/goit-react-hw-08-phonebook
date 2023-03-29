import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main>
      This page doesn't exist. Go <Link to="/">Home</Link>
    </main>
  );
};
