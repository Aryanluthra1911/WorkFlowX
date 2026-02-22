import { Phone } from "lucide-react";
import Email from "next-auth/providers/email";
import { create } from "zustand";

const useUserStore = create((set)=>({
    Id:[],
    Name:[],
    C_name:[],
    Email:[],
    Role:[],
    Phone:[],
    JoiningDate:[],
    PerformanceRating:[],
    TaskAssigned:[],
    TaskCompleted:[],
    ProjectCompleted:[],
    YearsOfExperience:[],

    setId:(Id)=>set({Id}),
    setName:(Name)=>set({Name}),
    setC_name:(C_name)=>set({C_name}),
    setEmail:(Email)=>set({Email}),
    setRole:(Role)=>set({Role}),
    setPhone:(Phone)=>set({Phone}),
    setJoiningDate:(JoiningDate)=>set({JoiningDate}),
    setPerformanceRating:(PerformanceRating)=>set({PerformanceRating}),
    setlatestTasks:(latestTasks)=>set({latestTasks}),
    setTaskAssigned:(TaskAssigned)=>set({TaskAssigned}),
    setTaskCompleted:(TaskCompleted)=>set({TaskCompleted}),
    setProjectCompleted:(ProjectCompleted)=>set({ProjectCompleted}),
    setYearsOfExperience:(YearsOfExperience)=>set({YearsOfExperience}),

    clearAdminStore: () =>
    set({
        Id:[],
        Name:[],
        C_name:[],
        Email:[],
        Role:[],
        Phone:[],
        JoiningDate:[],
        PerformanceRating:[],
        TaskAssigned:[],
        TaskCompleted:[],
        ProjectCompleted:[],
        YearsOfExperience:[],
    }),
}))

export default useUserStore