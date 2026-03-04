'use client'
import React, { useEffect, useState, use } from 'react'
import api from '@/lib/axios';
import { useParams, useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter()
    const params = useParams();
    const orgId = params.orgId;
    const [orgData,setorgData] = useState([])
    const [loading, setLoading] = useState(true);
    const [totalProjects,settotalProjects] = useState([])
    const [statusSummary,setstatusSummary] = useState([])
    const projectStatus = [{title:"TOTAL PROJECTS",count:totalProjects,color:'#4f8ef7'},{title:"ACTIVE",count:statusSummary.ACTIVE,color:'#0891b2'},{title:"PENDING",count:statusSummary.PENDING,color:'#facc15'},{title:"COMPLETED",count:statusSummary.COMPLETED,color:'#22c55e'},{title:"ON HOLD",count:statusSummary.ON_HOLD,color:'#ef4444'}]
    const filter = ["All","Active","Pending","Completed","On Hold"]
    const colordata = [{title:"ACTIVE",textClr:"#000000",bg:"#8ec5ff"},{title:"PENDING",textClr:"#000000",bg:"#fff085"},{title:"COMPLETED",textClr:"#000000",bg:"#7bf1a8"},{title:"ON_HOLD",textClr:"#000000",bg:"#ff6467"}]
    const [active,setactive] = useState("All")
    const [projects,setprojects] = useState([])
    useEffect(()=>{
        const fetch_data = async()=>{
            try{
                const res = await api.get(`/organisation/projectsByOrgId?orgId=${orgId}`);
                console.log(res.data.data.projects)
                setorgData(res.data.data)
                setprojects(res.data.data.projects)
                settotalProjects(res.data.totalProjects)
                setstatusSummary(res.data.statusSummary)
            } catch (err) {
                console.error(err);
            
            }finally {
                setLoading(false)
            }
        }
        fetch_data()
        
    },[params])
    const filteredProjects = active ==="All"?projects:projects.filter(project => project.status === active.toUpperCase().replace(" ", "_"))
    if (loading) 
        return <div className='w-full h-[90%] bg-[#e9ecef] flex flex-col justify-between items-center'>
            <div className='w-full h-[20%] flex justify-evenly items-center'>
                {Array.from({ length: 5}).map((_,index) => (
                    <div key={index} className=' border-r-4 border-b-4 w-[18%] h-[85%] border-gray-400 bg-gray-300 animate-pulse [animation-duration:900ms] shadow-xl rounded-2xl '>
                    </div>
                ))}
            </div>
            <div className='w-full h-[5%] flex justify-evenly items-center'>
                <div className=' w-[54%] h-[90%] bg-gray-300 animate-pulse [animation-duration:900ms] rounded-xl border-r-4 border-b-4 border-gray-400'/>
                <div className=' w-[40%] h-[90%] flex gap-5 justify-center items-center'>
                    {filter.map((idx,key) => (
                        <button key={key} className={`h-[90%] min-w-15 w-auto p-2 shadow-md rounded-2xl bg-gray-300 animate-pulse [animation-duration:900ms] border-r-4 border-b-4 border-gray-400 `}/>
                    ))}
                </div>
            </div>
        <div className='w-full h-[70%] flex justify-center'>
            <div className='w-[96%] h-[100%] overflow-y-auto no-scrollbar space-y-2 '>
                {Array.from({length:10}).map((_,index)=>(
                    <div key={index} className='w-[100%] h-[60px] border-r-4 border-b-4 border-gray-400 bg-gray-300 animate-pulse [animation-duration:900ms] rounded-2xl shadow-lg flex'/>
                ))}
            </div>
        </div>
    </div>
    return (
        <div className='w-full h-[90%] bg-[#e9ecef] flex flex-col justify-between items-center'>
            <div className='w-full h-[20%] flex justify-evenly items-center'>
                {projectStatus.map((idx,key)=>{
                    return <div idx={idx} key={key} className='border-r-4 border-b-4 border-gray-400 hover:scale-105 transition-all duration-500  w-[18%] h-[85%] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-evenly'>
                        <div className='w-[80%] h-[20%]  font-semibold text-xl text-gray-500 flex items-center justify-center'>
                            {idx.title}
                        </div>
                        <div style={{ color: idx.color }} className={` w-[70%] h-[60%] flex items-center justify-center font-bold text-3xl`}>
                            {idx.count}
                        </div>
                    </div>
                })}
            </div>
            <div className='w-full h-[5%] flex font-semibold justify-evenly items-center'>
                <div className=' w-[54%] h-[90%] text-xl text-gray-500 transition-all duration-500'>
                    {active} Projects
                </div>
                <div className=' w-[40%] h-[90%] flex gap-5 justify-center items-center'>
                    {filter.map((idx,key) => (
                        <button onClick={()=>setactive(idx)} key={key} className={`${active === idx?"bg-[#1e293b] text-white scale-105":"bg-white text-gray-500"} hover:scale-104 hover:shadow-2xl transition-all duration-500 h-[90%] min-w-10 w-auto p-2 border shadow-md  rounded-2xl flex items-center justify-center text-sm`}>{idx}</button>
                    ))}
                </div>
            </div>
            <div className='w-full h-[70%] flex justify-center items-center'>
                <div className='w-[96%] h-full overflow-y-auto no-scrollbar space-y-2 flex flex-col items-center '>
                    
                    {filteredProjects.map((project)=>{
                        const clr = colordata.find(data => data.title === project.status)
                        const totalTasks = project.task.length;
                        const completedTasks = project.task.filter(
                            task => task.status === "COMPLETED"
                        ).length;
                        const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
                        return <div onClick={()=>{
                            router.push(`/organisation/${orgId}/${project.id}`)
                        }} key={project.id} className='hover:scale-98 w-[100%] h-15 border-r-4 border-b-4 border-gray-400 bg-white rounded-2xl shadow-lg flex transition-all duration-800'>
                            <div className='w-[60%] h-full flex items-center pl-4 gap-5'>
                                <div style={{backgroundColor: clr?.bg,color: clr?.textClr || "white"}} className='w-11 h-[75%] border rounded-2xl  flex justify-center items-center font-semibold'>
                                    {project.title?.split(" ").slice(0, 2).map(word => word[0]).join("").toUpperCase()}
                                </div>
                                <div className='h-[80%] w-auto text-lg font-semibold flex justify-center items-center'>
                                    {project.title}
                                </div>
                            </div>
                            <div className='w-[10%] h-full flex justify-center items-center'>
                                <div style={{backgroundColor: clr?.bg,color: clr?.textClr || "white"}} className='h-[45%] w-auto pr-2 pl-2 flex justify-center items-center rounded-2xl  text-sm font-semibold '>
                                    {project.status}
                                </div>
                            </div>
                            
                            <div className='w-[30%] h-full flex justify-center items-center'>
                                <div className='w-[80%] h-[30%] bg-[#e9ecef] rounded-2xl'>
                                    <div style={{ width: `${progress}%` }} className='w-[15%] h-full bg-green-500 rounded-2xl'/>
                                </div>
                                <div className='w-[10%] h-[40%] text-xs flex justify-center items-center'>
                                    {progress}%
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default page