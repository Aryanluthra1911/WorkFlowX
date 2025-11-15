import Notification_card from '@/components/Notification_card'
import React from 'react'

const page = () => {
    const notification = [
        {
            title: "New Message",
            description: "You received a new message from John.",
            status:'not seen',
            time: "2 mins ago"
        },
        {
            title: "Payment Successful",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nemo dolore iusto fuga totam repellendus in facere maiores consectetur a, id aliquid veritatis aperiam exercitationem cupiditate nostrum nam! Dolores aut voluptatum sunt repudiandae temporibus libero officiis, culpa ad labore et vel explicabo nisi, praesentium illo consequuntur corrupti dolorum nemo. Possimus, illo. Blanditiis ullam magni facere aperiam debitis",
            status:'not seen',
            time: "10 mins ago"
        },
        {
            title: "New Follower",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nemo dolore iusto fuga totam repellendus in facere maiores consectetur a, id ",
            status:'seen',
            time: "30 mins ago"
        },
        {
            title: "Server Update",
            description: "Scheduled maintenance will occur at 11:00 PM tonight.",
            status:'seen',
            time: "1 hour ago"
        },
        {
            title: "Weekly Report Ready",
            description: "Your weekly performance report is available for review.",
            status:'seen',
            time: "3 hours ago"
        },
        {
            title: "Password Changed",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nemo dolore iusto fuga totam repellendus in facere maiores consectetur a, id aliquid veritatis aperiam exercitationem cupiditate nostrum nam! Dolores aut voluptatum sunt repudiandae temporibus libero officiis, culpa ad labore et vel explicabo nisi, praesentium illo consequuntur corrupti dolorum nemo. Possimus, illo. Blanditiis ullam magni facere aperiam debitis cumque, rerum veniam eum, fuga vitae impedit voluptatum sapiente corrupti inventore molestiae nam error beatae veritatis optio quisquam cum enim non placeat dolor. Modi, amet iusto non ratione in harum, distinctio commodi reprehenderit minus necessitatibus quisquam explicabo doloribus error excepturi assumenda illo quaerat..",
            status:'seen',
            time: "Yesterday"
        }
    ];

    return (
        <div className='bg-[#e9ecef] w-full h-[90%] flex flex-col gap-5 items-center overflow-y-auto no-scrollbar pt-4'>
            {notification.map((idx,key)=>{
                return <Notification_card key={key} idx={idx}/>
            })}
        </div>
    )
}

export default page