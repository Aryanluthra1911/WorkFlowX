import { create } from "zustand";

const useAdminStore = create((set)=>({
    projects:[],
    latestProjects:[],
    tasks:[],
    latestTasks:[],
    members:[],
    managers: [],

    setprojects:(projects)=>set({projects}),
    setlatestProjects:(latestProjects)=>set({latestProjects}),

    settasks:(tasks)=>set({tasks}),
    setlatestTasks:(latestTasks)=>set({latestTasks}),
    
    setmembers:(members)=>set({members}),
    setmanagers:(managers)=>set({managers}),

    clearAdminStore: () =>
    set({
        projects: [],
        latestProjects: [],
        tasks: [],
        latestTasks: [],
        members: [],
        managers: [],
    }),
}))

export default useAdminStore