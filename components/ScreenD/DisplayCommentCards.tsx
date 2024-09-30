import CommentCard from "./CommentCard";

export default function DisplayCommentCards() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4].map(() => (
        <CommentCard />
      ))}
    </div>
  )
}
