import styles from './MainContent.module.css';
import {useMenusStore} from '../../store/useMenusStore.ts'

function MainContent() {
    const menuItems = useMenusStore((state) => state.menuItems);
    const activeId = useMenusStore((state) => state.activeId);

    // 2. 直接在渲染逻辑中计算 title
    let title = "法华禅寺"; // 设置一个默认值或加载状态
    try {
        const activeMenuItem = menuItems.find(item => item.id === activeId);
        if (activeMenuItem && activeMenuItem.name) {
            title = activeMenuItem.name;
        } else if (activeMenuItem) {
            console.warn(`菜单项 (ID: ${activeId}) 存在但缺少 'name' 属性。`);
        } else {
            if (activeId !== null && menuItems.length > 0) {
                console.warn(`没有找到 ID 为 ${activeId} 的菜单项。`);
            }
        }
    } catch (e) {
        console.error("计算菜单标题时出错:", e);
    }

    return (
        <div className={styles.mainContent}>
           <header className={styles.header}>
               <div className={styles.titleWrapper}>
                   <span className={styles.title}>{title}</span>
               </div>
           </header>
        </div>
    );
}

export default MainContent;
