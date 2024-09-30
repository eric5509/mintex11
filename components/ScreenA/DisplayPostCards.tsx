'use client'
import { useAppSelector } from '@/redux/store/hook'
import PostCard from './PostCard'

export default function DisplayPostCards() {
    const type = useAppSelector(store => store.sidebar.type)

    return (
        <div className={`grid duration-300 ${type == "" ? "grid-cols-3" : "grid-cols-2"} gap-5`}>
            {[1, 2, 3, 4, 5].map(() => (
                <PostCard />
            ))}
        </div>
    )
}
