import ListLayout from "../components/ListLayout/ListLayout.tsx";
import {useEffect, useState} from "react";

import type {ListItem} from "../types/list.types.ts";

function FoshiPage() {

    const [list, setList] = useState<ListItem[]>([])

    useEffect(() => {
        try {
            const getList = async () => {
                const apiUrl = "https://fsy.zhifo.net.cn/fosiyun/api/v1/operatingFloor/item/list?tenantId=360&type=4"

                const response = await fetch(apiUrl)

                // 发送请求结束但是请求没有完成
                if (!response.ok) {
                    throw new Error(`网络错误！状态码: ${response.status}`);
                }

                const data = await response.json();

                if (data.status !== 0) {
                    throw new Error(`获取佛事登记列表数据异常，错误码：${data.status}`);
                }

                const fetchData = data.data

                if (Array.isArray(fetchData)) {
                    setList(fetchData)
                } else {
                    throw new Error(`获取佛事登记列表数据异常，原因：fetchData 不是数组`);
                }
            }

            getList()
        } catch (e) {
            console.error("获取佛事登记列表失败，原因：", e)
        }
    }, []);

    return (
        <>
            <ListLayout list={list} />
        </>
    );
}

export default FoshiPage;
