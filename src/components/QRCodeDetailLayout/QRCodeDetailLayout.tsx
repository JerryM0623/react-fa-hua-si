import styles from './QRCode.module.css'
import {DetailType} from "../../types/detail.types.ts";
import SafeRichTextRenderer from "../SafeRichTextRenderer/SafeRichTextRenderer.tsx";

type QRCodeDetailLayoutProps = {
    detailInfo: DetailType
}

function QRCodeDetailLayout({detailInfo}: QRCodeDetailLayoutProps) {
    return (
        <div className={styles.qrcodeDetailWrapper}>
            <section className={styles.qrcodeWrapper}>
                <span style={{fontSize: "35px", marginBottom: "50px"}}>{detailInfo.recruitmentConditions}</span>
                <img src={detailInfo.urlPath || "https://fsy.zhifo.net.cn/fahua/assets/qr-img-TmmCT5v_.png"} alt="" />
                <span>{detailInfo.writing || "请扫码报名"}</span>
            </section>
            <section className={styles.contentWrapper}>
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
                    <SafeRichTextRenderer dirtyHtml={
                        detailInfo.details as string ||
                        detailInfo.message as string ||
                        detailInfo.recruitContent as string
                    } />
                </section>
            </section>
        </div>
    )
}

export default QRCodeDetailLayout;
