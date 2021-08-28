import headerSyles from '../styles/Header.module.css';

export const Header = () => {
  const x = 4;
  return (
    <div>
      <h1 className={headerSyles.title}>
        <span>DISA</span> development
      </h1>
      <p className={headerSyles.description}>Creating your software with passion and greatness!</p>
    </div>
  );
};
