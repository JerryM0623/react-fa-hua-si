import ListLayout from "../components/ListLayout/ListLayout.tsx";
import {useEffect, useState} from "react";
import type {ListItem} from "../types/list.types.ts";
import {useBackButtonStore} from "../store/useBackButtonStore.ts";
import CommonDetailLayout from "../components/CommonDetailLayout/CommonDetailLayout.tsx";
import {DetailType} from "../types/detail.types.ts";

function HuoDongPage() {
    const backButtonStore = useBackButtonStore();

    const [list, setList] = useState<ListItem[]>([])
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [detailInfo, setDetailInfo] = useState<DetailType>({
        blessingArr: "",
        caption: "",
        coveImg: "",
        createTime: "",
        details: "",
        djJian: 0,
        greetings: 0,
        id: 0,
        isBuddhism: 0,
        paymentId: 0,
        projectHeadline: "",
        sort: 0,
        status: 0,
        tenantId: 0,
        tenantItemsImgList: [],
        type: 0,
        typeName: ""
    })

    useEffect(() => {
        try {
            const getList = async () => {
                const apiUrl = "https://fsy.zhifo.net.cn/fosiyun/api/v1/activity/page?tenantId=360&type=4&page=0&pageSize=0"

                const response = await fetch(apiUrl)

                // 发送请求结束但是请求没有完成
                if (!response.ok) {
                    throw new Error(`网络错误！状态码: ${response.status}`);
                }

                const data = await response.json();

                if (data.status !== 0) {
                    throw new Error(`获取活动报名列表数据异常，错误码：${data.status}`);
                }

                const fetchData = data.data.list

                if (Array.isArray(fetchData)) {
                    setList(fetchData)
                } else {
                    throw new Error(`获取活动报名列表数据异常，原因：fetchData 不是数组`);
                }
            }

            getList()
        } catch (e) {
            console.error("获取活动报名列表失败，原因：", e)
        }
    }, []);

    const getDetailData = async (id: number) => {
        try {
            const apiUrl = "https://fsy.zhifo.net.cn/fosiyun/api/v1/activity/get?id=" + id

            const response = await fetch(apiUrl)

            if (!response.ok) {
                throw new Error(`网络错误！状态码: ${response.status}`)
            }

            const data = await response.json();

            if (data.status !== 0) {
                throw new Error(`获取法会详细信息异常，错误码：${data.status}`);
            }

            const fetchData = data.data
            setDetailInfo(fetchData)
        } catch (e) {
            console.error("获取详细信息错误，原因:", e)
        }
    }

    const openDetailHandler = async (id: number) => {
        // 获取详情信息
        await getDetailData(id)

        // 显示详情页面
        setOpenDetail(true)

        // 显示返回按钮
        backButtonStore.changeButtonVisible(true)

        // 编辑返回按钮的回调函数
        const backButtonCallback = () => {
            console.log("backButtonCallback");
            setOpenDetail(false)
            backButtonStore.changeButtonVisible(false)
            backButtonStore.setButtonCallFunc(null)
        }

        // 设置返回按钮的回调函数
        backButtonStore.setButtonCallFunc(backButtonCallback)
    }

    return (
        <>
            { openDetail ? (
                <CommonDetailLayout detailInfo={detailInfo} />
            ) : (
                <ListLayout list={list} onOpenItemDetail={openDetailHandler} />
            ) }
        </>
    );
}

export default HuoDongPage;
