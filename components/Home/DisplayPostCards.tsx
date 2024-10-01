'use client'
import { useAppSelector } from '@/redux/store/hook'
import PostCard from './PostCard'

export default function DisplayPostCards() {
    const type = useAppSelector(store => store.sidebar.type)

    return (
    <div className={`grid duration-300 ${type == "" ? "grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"} gap-5`}>
            {[1, 2, 3, 4, 5].map((el, key) => (
                <div key={key} className="">
                    <PostCard />
                </div>
            ))}
        </div>
    )
}
