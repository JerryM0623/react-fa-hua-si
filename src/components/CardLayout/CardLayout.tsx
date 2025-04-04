import styles from './CardLayout.module.css'
import NoData from "../NoData/NoData.tsx";
import type {ListItem} from "../../types/list.types.ts";

interface ListLayoutProps {
    list: ListItem[];
    onOpenItemDetail: (id: number) => void;
}

function CardLayout({ list, onOpenItemDetail }: ListLayoutProps) {
    return (
        <>
            {list.length <= 0 ? (
                <NoData />
            ) : (
                <div className={styles.cardWrapper}>
                    {
                        list.map(item => {
                            return (
                                <div className={styles.gridItem} key={item.id} onClick={() => onOpenItemDetail(item.id)}>
                                    <span className={styles.gridItemText}>{item.caption || item.name || item.headline}</span>
                                    <img className={styles.gridItemIcon} src={item.coveImg || item.headImage || item.newsCoverImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </>
    )
}

export default CardLayout;
