import CommentCard from "./CommentCard";

export default function DisplayCommentCards() {
  return (
    <div className="flex flex-col relative border rounded-b-2xl border-prim p-4 gap-4">
      <p className="p-3 rounded-xl absolute top-3 right-3 bg-prim text-secondary font-semibold">Post a Comment</p>
      {[1, 2, 3, 4].map((el, key) => (
        <div key={key} className="">
          <CommentCard />
        </div>
      ))}
    </div>
  )
}
