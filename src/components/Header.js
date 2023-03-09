import styles from './Header.module.css';

const Header = () => {
  const onClickHandler = () => {
    alert("you are not allowed")
  }
  return (
    <>
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles['nav-items']}>
          <a href='#home'>Home</a>
          <a href='#store'>Store</a>
          <a href='#about'>About</a>
        </div>
        
        <button onClick={onClickHandler} className={styles.cart}>Cart</button>
      </nav>
    </div>
    <h1 className={styles.header}>The Generics</h1>
    <h2 className='text-center my-5'>Music</h2>
    
    </>
  );
}

export default Header;
