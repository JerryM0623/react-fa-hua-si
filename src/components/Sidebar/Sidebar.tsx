import styles from './Sidebar.module.css'
import {useEffect} from "react"
import {useMenusStore} from '../../store/useMenusStore.ts'
import { sideMenus } from '../../data/SideMenus.ts'
import {useNavigate} from 'react-router-dom'

import type {MenuItem} from '../../types/menu.types.ts'

function Sidebar() {
    const navigate = useNavigate(); // 获取 navigate 函数

    const menuItems = useMenusStore((state) => state.menuItems);
    const setMenuItems = useMenusStore((state) => state.setMenuItems);

    const activeId = useMenusStore((state) => state.activeId);
    const setActiveId = useMenusStore((state) => state.setActiveId);

    useEffect(() => {
        const apiUrl = 'https://fsy.zhifo.net.cn/fosiyun/api/v1/tenant/operatingFloorUrl/all?tenantId=360';

        const fetMenuItems = async () => {
            try {
                const response = await fetch(apiUrl);

                // 发送请求结束但是请求没有完成
                if (!response.ok) {
                    throw new Error(`网络错误！状态码: ${response.status}`);
                }

                const data = await response.json();

                if (data.status !== 0) {
                    throw new Error(`获取菜单数据异常，错误码：${data.status}`);
                }

                setMenuItems(sideMenus as MenuItem[]);
                setActiveId(sideMenus[0].id);
            } catch (e) {
                console.error("获取菜单列表信息失败:", e);
            }
        }

        fetMenuItems()
    }, []) //空数组代表了这个 useeffect 只在初始化的时候裁回运行

    const clickMenuItem = (id: number, url: string) => {
        console.log("点击了菜单，id：", id)
        if (activeId === id) return;
        setActiveId(id);
        navigate(`/${url}`) // 跳转页面
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.iconWrapper}>
                <img className={styles.iconImage} src="https://fsy.zhifo.net.cn/fahua/assets/logo-E4Mcrmmh.png"
                     alt="法华禅寺"/>
            </div>
            <ul className={styles.menuList}>
                {
                    menuItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={`${styles.menuItem} ${item.id === activeId ? styles.active : ''}`}
                                onClick={() => clickMenuItem(item.id, item.url)}
                            >
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.patternWrapper}>
                <img className={styles.pattern} src="https://fsy.zhifo.net.cn/fahua/assets/zi-MO2iJjuS.png" alt=""/>
            </div>
        </div>
    );
}

export default Sidebar;
