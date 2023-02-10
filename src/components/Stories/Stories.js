import React from 'react'
import { useSelector } from 'react-redux'
import { selectPost } from '../../store/slices/posts/postsSlice'
import Story from '../Story/Story'

function Stories() {
    const posts = useSelector(selectPost)
  return (
    <div className="status-wrapper">
        {
            posts.map(el => <Story key={el.id} duration={3000}
                type={el.type} img={el.img} name={el.name} />)
        }
    </div>
  )
}

export default Stories


