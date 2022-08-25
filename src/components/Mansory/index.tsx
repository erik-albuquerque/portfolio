import { ReactNode } from 'react'
import ReactMasonry from 'react-masonry-css'

type MasonryProps = {
  children: ReactNode
}

const Masonry: React.FC<MasonryProps> = ({ children }: MasonryProps) => {
  return (
    <ReactMasonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </ReactMasonry>
  )
}

export { Masonry }
