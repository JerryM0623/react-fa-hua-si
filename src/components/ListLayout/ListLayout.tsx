import styles from './ListLayout.module.css'
import type {ListItem} from "../../types/list.types.ts";
import NoData from "../NoData/NoData.tsx";

interface ListLayoutProps {
    list: ListItem[];
}

function ListLayout({ list }: ListLayoutProps) {
    return (
        <>
            {list.length <= 0 ? (
                <NoData />
            ) : (
                <ul className={styles.listWrapper}>
                    {
                        list.map(item => {
                            return (
                                <li className={styles.listItem}>
                                    <img className={styles.listItemIcon} src={item.coveImg} alt="" />
                                    <span className={styles.listItemText}>{item.caption}</span>
                                    <div className={styles.listItemButton}>详情</div>
                                </li>
                            )
                        })
                    }
                </ul>
            )}
        </>
    )
}

export default ListLayout;
