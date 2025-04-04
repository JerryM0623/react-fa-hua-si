import ListLayout from '../components/ListLayout/ListLayout.tsx'
import {DetailType} from "../types/detail.types.ts";
import CommonDetailLayout from "../components/CommonDetailLayout/CommonDetailLayout.tsx";
import {useBackButtonStore} from "../store/useBackButtonStore.ts"
import {useEffect, useState} from "react";
import type {ListItem} from '../types/list.types.ts'

function FaHuiPage() {
    const backButtonStore = useBackButtonStore();

    const [list, setList] = useState<ListItem[]>([])
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [detailInfo, setDetailInfo] = useState<DetailType>({
        id: -9999,
        status: -9999,
        tenantId: -9999,
        createTime: ""
    })

    useEffect(() => {
        try {
            const getList = async () => {
                const apiUrl = "https://fsy.zhifo.net.cn/fosiyun/api/v1/operatingFloor/item/list?tenantId=360&type=3"

                const response = await fetch(apiUrl)

                // 发送请求结束但是请求没有完成
                if (!response.ok) {
                    throw new Error(`网络错误！状态码: ${response.status}`);
                }

                const data = await response.json();

                if (data.status !== 0) {
                    throw new Error(`获取法会登记列表数据异常，错误码：${data.status}`);
                }

                const fetchData = data.data

                if (Array.isArray(fetchData)) {
                    setList(fetchData)
                } else {
                    throw new Error(`获取法会登记列表数据异常，原因：fetchData 不是数组`);
                }
            }

            getList()
        } catch (e) {
            console.error("获取法会登记列表失败，原因：", e)
        }
    }, []);

    const getDetailData = async (id: number) => {
        try {
            const apiUrl = "https://fsy.zhifo.net.cn/fosiyun/api/v1/operatingFloor/item/details?id=" + id

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

export default FaHuiPage;
