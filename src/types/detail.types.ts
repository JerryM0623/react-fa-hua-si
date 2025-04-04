type TenantListImgType = {
    imgUrl: string
    message: string
    sort: number
    status: number
}

export type DetailType = {
    blessingArr: string
    caption: string
    coveImg: string
    createTime: string
    details: string
    djJian: number
    greetings: number
    id: number
    isBuddhism: number
    paymentId: number
    projectHeadline: string
    sort: number
    status: number
    tenantId: number
    tenantItemsImgList: TenantListImgType[]
    type: number
    typeName: string
}
