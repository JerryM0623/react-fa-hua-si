import styles from './MainContent.module.css';

function MainContent() {
    return (
        <div className={styles.mainContent}>
           <header className={styles.header}>
               <div className={styles.titleWrapper}>
                   <span className={styles.title}>法会登记</span>
               </div>
           </header>
        </div>
    );
}

export default MainContent;
