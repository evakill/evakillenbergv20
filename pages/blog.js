import Footer from '../components/Footer'
import BlogHeader from '../components/BlogHeader'

const Blog = () => (
  <div>
    <div className="columns is-centered is-desktop" style={{padding: '0rem 4rem'}}>
      <div className="column is-10">
        <BlogHeader/>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Blog;
