import React from "react";

export default class Card extends React.Component {
    render() {
        return (
            <div className="rounded-md ">
                <img className='object-fill max-w-full h-80 mx-auto' src={this.props.article.urlToImage} alt={this.props.article.title} />
                <h3 className='text-3xl'>{this.props.article.title}</h3>
                <div>
                    <small className="card-text"><span>{this.props.article.author === null ? 'anonymous' : this.props.article.author}</span> | {this.props.article.publishedAt}</small>
                </div>
                <p className="my-3 text-lg">{this.props.article.description}</p>
                <a className="bg-blue-500 text-white px-4 py-2 my-8 hover:bg-blue-300 transition delay-100" href={this.props.article.url} target='_blank' rel='noreferrer'>Read More</a>
            </div>
        )
    }
}