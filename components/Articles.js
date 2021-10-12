import articleStyles from '../styles/Articles.module.css'
import Article from './Article'

const Articles = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article=>(
                <Article article = {article} key = {article.id}/>
            ))}
        </div>
    )
}

export default Articles
