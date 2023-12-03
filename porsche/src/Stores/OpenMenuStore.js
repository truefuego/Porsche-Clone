import {create} from 'zustand'

const openMenuStore = create((set) => ({
    openMenu: false,
    toggleOpenMenu: () => {
        set((state) => ({openMenu: !state.openMenu}))
        
    }
}))

export default openMenuStore