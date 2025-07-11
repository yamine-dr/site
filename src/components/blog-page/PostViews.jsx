import { Icons } from "@/src/components/ui/Icons"

export const PostViews = ({ views, className }) => (
  <span className={`flex gap-1.5 items-center text-xs text-base-content/70 ${className}`}>
    <Icons.Eye size={17}/> {views}
  </span>
)