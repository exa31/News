import React from "react";
import { Grid } from 'react-loader-spinner';
import Card from "./Card";



const API_KEY = '90ce8ff6827d43aaa9a1f5ead11bb44f'
const API_URL = `https://newsapi.org/v2/everything`

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            loaader: false
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        async function getNews() {
            try {
                const data = await fetch(`${API_URL}?q=marvel&from=2024-07-09&sortBy=popularity&apiKey=${API_KEY}`)
                const res = await data.json()
                const news = res.articles.filter((article) => article.title !== '[Removed]' && article.urlToImage !== null)
                return news
            }
            catch (error) {
                console.log(error)
            }
        }
        getNews().then(data => this.setState({ news: data }))
            .catch(err => console.log(err)
            ).finally(() => this.setState({ loader: false }))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search !== this.props.search && this.props.search !== '') {
            this.setState({ loader: true })
            const getNews = async () => {
                try {
                    const data = await fetch(`${API_URL}?q=${this.props.search}&from=2024-07-09&to=2024-07-09&sortBy=popularity&apiKey=${API_KEY}`)
                    const res = await data.json()
                    const news = res.articles.filter((article) => article.title !== '[Removed]' && article.urlToImage !== null)
                    return news
                }
                catch (error) {
                    console.log(error)
                }
            }
            getNews().then(data => this.setState({ news: data }))
                .catch(err => console.log(err)
                ).finally(() => this.setState({ loader: false }))
        } else if (this.props.search === '' && prevProps.search !== this.props.search) {
            this.setState({ loader: true })
            async function getNews() {
                try {
                    const data = await fetch(`${API_URL}?q=marvel&from=2024-07-09&sortBy=popularity&apiKey=${API_KEY}`)
                    const res = await data.json()
                    const news = res.articles.filter((article) => article.title !== '[Removed]' && article.urlToImage !== null)
                    return news
                }
                catch (error) {
                    console.log(error)
                }
            }
            getNews().then(data => this.setState({ news: data }))
                .catch(err => console.log(err)
                ).finally(() => this.setState({ loader: false }))
        }
    }

    render() {
        return (
            <>
                {this.state.loader ?
                    <div className='container mx-auto flex justify-center items-center max-h-full'>
                        <Grid
                            visible={true}
                            height="80"
                            width="80"
                            color="black"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass="grid-wrapper"
                        />
                    </div > : this.state.news.length === 0 ? <h1 className="text-4xl text-red-600 text-center font-extrabold">Not Found</h1> :
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 p-6 items-stretch gap-10'>
                            {this.state.news.map((article, index) => {
                                return (
                                    <Card key={index} article={article} />
                                )
                            })}
                        </div>
                }
            </>
        );
    }
}