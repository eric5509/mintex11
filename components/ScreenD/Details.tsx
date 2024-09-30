import Chart from "./Chart";
import CommentCard from "./CommentCard";

export default function Details() {
    return (
        <div className="p-3 text-white">
            <p>Space Man (#Space) is a forward-thinking cryptocurrency project inspired by the pioneering spirit of space exploration and the legacy of human ingenuity in the cosmos. The project draws its core inspiration from the real-life achievements of astronauts and space pioneers who have ventured beyond Earth’s atmosphere to explore the unknown. By embodying the ethos of these explorers, Space Man seeks to push the boundaries of traditional finance and bring the vast potential of blockchain technology to new frontiers.             </p>
            <div className="grid gap-5">
                <Chart />
                <Chart />
            </div>
        </div>
    )
}
