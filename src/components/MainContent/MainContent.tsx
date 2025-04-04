import { Outlet } from 'react-router-dom';
import styles from './MainContent.module.css';
import {useMenusStore} from '../../store/useMenusStore.ts'
import {useBackButtonStore} from "../../store/useBackButtonStore.ts";

function MainContent() {
    const menuItems = useMenusStore((state) => state.menuItems);
    const activeId = useMenusStore((state) => state.activeId);
    const backButtonStore = useBackButtonStore();

    // 2. 直接在渲染逻辑中计算 title
    let title = ""; // 设置一个默认值或加载状态
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

    // 返回按钮的style
    const backButtonStyle = {
        display: backButtonStore.buttonVisible ? "block" : "none",
    }

    // 点击事件处理器
    const handleBackButtonClick = () => {
        // 检查 buttonCallFunc 是否是一个函数
        if (typeof backButtonStore.buttonCallFunc === 'function') {
            console.log("执行 BackButton 回调函数");
            backButtonStore.buttonCallFunc(); // 调用存储的函数
        } else {
            console.warn("BackButton 被点击，但 buttonCallFunc 不是一个有效的函数或未设置。");
        }
    };

    return (
        <div className={styles.mainContent}>
           <header className={styles.header}>
               <img
                   className={styles.backButton}
                   style={backButtonStyle}
                   src="https://fsy.zhifo.net.cn/fahua/assets/back-btn-BPtIhr-y.png"
                   alt=""
                   onClick={handleBackButtonClick}
               />
               <div className={styles.titleWrapper}>
                   <span className={styles.title}>{title}</span>
               </div>
           </header>
            <main className={styles.pages}>
                <Outlet />
            </main>
        </div>
    );
}

export default MainContent;
