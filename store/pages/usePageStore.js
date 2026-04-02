import { create } from "zustand";

const usePageStore = create((set)=>({
    title:"",
    activePage:"Dashboard",
    setTitle:(title)=>set({title}),
    setActivePage:(activePage)=>set({activePage}),
    clearpageStore: () =>
        set({
            title:"",
            active:"",

        }),
}))
export default usePageStore