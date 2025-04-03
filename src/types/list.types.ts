export type ListItem = {
    id: number  // 共有
    // 第一种list（法会、佛事）
    caption?: string
    coveImg?: string
    details?: string
    projectHeadline?: string
    type?: number
    // 第二种list（义工）
    beginTime?: string
    expireTime?: string
    headline?: string
    newsCoverImg?: string
    recruitContent?: string
    recruitmentConditions?: string
    tVolunteerForms?: string
    tenantId?: number
    // 第三种list（活动）
    createTime?: string
    currentNum?: number
    delTf?: number
    endDate?: string
    headImage?: string
    message?: string
    name?: string
    startDate?: string
    status?: number
}
