import { ReactNode } from 'react'
import ReactMasonry from 'react-masonry-css'

type MasonryProps = {
  children: ReactNode
  breakpointCols?: number
}

const Masonry: React.FC<MasonryProps> = ({ children, breakpointCols = 2 }: MasonryProps) => {
  return (
    <ReactMasonry
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </ReactMasonry>
  )
}

export { Masonry }
