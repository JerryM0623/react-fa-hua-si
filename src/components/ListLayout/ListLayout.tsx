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
                                <li className={styles.listItem} key={item.id}>
                                    <img className={styles.listItemIcon} src={item.coveImg || item.headImage || item.newsCoverImg} alt="" />
                                    <span className={styles.listItemText}>{item.caption || item.name || item.headline}</span>
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
