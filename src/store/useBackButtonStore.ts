import { create } from 'zustand'

type BackButtonStore = {
    buttonVisible: boolean
    buttonCallFunc: Function | null
    changeButtonVisible: (status: boolean) => void
    setButtonCallFunc: (cb: Function | null) => void
}

export const useBackButtonStore = create<BackButtonStore>((set) => {
    return {
        buttonVisible: false,
        buttonCallFunc: null,
        changeButtonVisible: (status: boolean) => {
            set({ buttonVisible: status })
        },
        setButtonCallFunc: (cb: Function | null) => {
            set({ buttonCallFunc: cb })
        }
    }
})
