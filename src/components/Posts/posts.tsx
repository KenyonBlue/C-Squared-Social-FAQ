import Post from "./Post/post"
import useStyles from './posts-styles'
import { useSelector } from 'react-redux'

const Posts = () => {
    const classes = useStyles()
    const posts = useSelector((state: any) => state.posts)
    console.log("🚀 ~ file: posts.tsx ~ line 8 ~ Posts ~ posts", posts)

    return (
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        </>
    ) 
}

export default Posts
