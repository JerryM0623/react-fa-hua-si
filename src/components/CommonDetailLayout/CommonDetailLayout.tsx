import styles from './CommonDetailLayout.module.css'
import {DetailType} from "../../types/detail.types.ts";
import SafeRichTextRenderer from "../SafeRichTextRenderer/SafeRichTextRenderer.tsx";

type CommonDetailLayoutProps = {
    detailInfo: DetailType
}

function CommonDetailLayout({ detailInfo }: CommonDetailLayoutProps) {
    return (
        <>
            <header className={styles.header}>
                <img className={styles.image} src={detailInfo.coveImg || detailInfo.headImage} alt="" />
                <span className={styles.title}>{detailInfo.caption || detailInfo.name}</span>
            </header>
            <section className={styles.carouselWrapper}>
                <ul className={styles.imgList}>
                    {
                        detailInfo.tenantItemsImgList ? (
                            detailInfo.tenantItemsImgList.map((slide) => (
                                <li className={styles.imgListItem} key={slide.imgUrl}>
                                    <img src={slide.imgUrl} alt="" />
                                </li>
                            ))
                        ) : detailInfo.slideshowList ? (
                            detailInfo.slideshowList.map((slide) => (
                                <li className={styles.imgListItem} key={slide.imgUrl}>
                                    <img src={slide.imgUrl} alt="" />
                                </li>
                            ))
                        ) : (
                            <></>
                        )
                    }
                </ul>
            </section>
            <section className={styles.richTextWrapper}>
                <SafeRichTextRenderer dirtyHtml={detailInfo.details as string || detailInfo.message as string} />
            </section>
        </>
    )
}

export default CommonDetailLayout;
