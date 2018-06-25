import React, {Component} from 'react';
import './App.css';
import Pagination from "./components/Pagination";

class App extends Component {

    constructor(props) {
        super(props)
        this.state={
            movies: [
                {name: "God’s Compass", imageLink: "m15.jpg"},
                {name: "Bad Moms", imageLink: "m2.jpg"},
                {name: "Jason Bourne", imageLink: "m5.jpg"},
                {name: "Rezort", imageLink: "m16.jpg"},
                {name: "The Other Side", imageLink: "m14.jpg"},
                {name: "Civil War", imageLink: "m19.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "Peter", imageLink: "m17.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "ISRA 88", imageLink: "m18.jpg"},
                {name: "War Dogs", imageLink: "m1.jpg"},
                {name: "The Other Side", imageLink: "m14.jpg"},
                {name: "Civil War", imageLink: "m19.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "War Dogs", imageLink: "m1.jpg"},
                {name: "The Other Side", imageLink: "m14.jpg"},
                {name: "Civil War", imageLink: "m19.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "War Dogs", imageLink: "m1.jpg"},
                {name: "The Other Side", imageLink: "m14.jpg"},
                {name: "Civil War", imageLink: "m19.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "Jason Bourne", imageLink: "m5.jpg"},
                {name: "Rezort", imageLink: "m16.jpg"},
                {name: "Peter", imageLink: "m17.jpg"},
                {name: "The Secret Life of Pets", imageLink: "m20.jpg"},
                {name: "The Jungle Book", imageLink: "m21.jpg"},
                {name: "Assassin's Creed 3", imageLink: "m22.jpg"},
                {name: "Bad Moms", imageLink: "m2.jpg"},
                {name: "Jason Bourne", imageLink: "m5.jpg"},
                {name: "Rezort", imageLink: "m16.jpg"},
                ],
            currentPage: 1,
            mPerPage: 12
        }
        this.pagination = this.pagination.bind(this)

    }

    pagination(page){
        this.setState({
            currentPage: page
        })
    }

    display(movie){
        return movie.map((m, index) => {
            return (
                <div className="col-md-2 w3l-movie-gride-agile" key={index}>
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src={"images/" + m.imageLink}
                                                                                      title="album-name"
                                                                                      className="img-responsive" alt=" "/>
                        <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                        <div className="w3l-movie-text">
                            <h6><a href="single.html">{m.name}</a></h6>
                        </div>
                        <div className="mid-2 agile_mid_2_home">
                            <p>2016</p>
                            <div className="block-stars">
                                <ul className="w3l-ratings">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="ribben">
                        <p>NEW</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        let allMovies = this.state.movies
        let pagiMovies
        if(this.state.currentPage - 1 === Math.floor(allMovies.length/this.state.mPerPage)){
            pagiMovies = allMovies.slice(this.state.mPerPage*(this.state.currentPage-1), allMovies.length)
        }else {
            pagiMovies = allMovies.slice(this.state.mPerPage*(this.state.currentPage-1), this.state.mPerPage*this.state.currentPage)
        }
        let movies = allMovies.length <= this.state.mPerPage ? this.display(allMovies) : this.display(pagiMovies)
        // let movies = this.display(this.state.movies)
        return (
            <div>
                <div className="w3_agile_featured_movies">
                    {movies}
                    <div className="clearfix"></div>
                </div>
                <Pagination allItems={this.state.movies}
                            pagination={this.pagination}
                            mPerPage={this.state.mPerPage}/>
            </div>

        );
    }
}

export default App;
