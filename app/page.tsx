import Backdrop from "@/components/Backdrop/Backdrop";
import Base from "@/components/ScreenA/Base";

export default function page() {
  return (
    <div className="overflow-y-auto h-full">
      <Base />
      <Backdrop />
    </div>
  )
}
