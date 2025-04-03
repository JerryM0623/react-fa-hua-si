import styles from './NoData.module.css'

function NoData() {
    return (
        <div className={styles.noDataWrapper}>
            <img className={styles.image} src="https://fsy.zhifo.net.cn/fahua/assets/no-data-sogJWoAB.png" alt="" />
            <p className={styles.tip}>暂无内容 敬请期待</p>
        </div>
    )
}

export default NoData;
