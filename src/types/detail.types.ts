type TenantListImgType = {
    imgUrl: string
    message: string
    sort: number
    status: number
}

export type DetailType = {
    id: number
    status: number
    tenantId: number
    createTime: string
    // 第一种（法会、佛事）
    blessingArr?: string
    caption?: string
    coveImg?: string
    details?: string
    djJian?: number
    greetings?: number
    isBuddhism?: number
    paymentId?: number
    projectHeadline?: string
    sort?: number
    tenantItemsImgList?: TenantListImgType[]
    type?: number
    typeName?: string
    // 第二种（寺物、法物）
    urlPath?: string
    writing?: string
    // 第三种（活动报名）
    currentNum?: number
    delTf?: number
    endDate?: string
    headImage?: string
    message?: string
    name?: string
    slideshowList?: TenantListImgType[]
    startDate?: string
    // 第四种（义工）
    beginTime: string
    delTF: number
    expireTime: string
    headline: string
    newsCoverImg: string
    recruitContent: string
    recruitmentConditions: string
    updateTime: string
}
