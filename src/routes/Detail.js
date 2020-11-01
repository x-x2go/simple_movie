import React from "react";
import MovieDetail from "../components/MovieDetail";

class Detail extends React.Component{
    componenetDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    showMovieDetail = movie =>{
        return (<MovieDetail key={movie.id} year={movie.year}title={movie.title} summary={movie.summary} poster={movie.poster} genres={movie.genres}/>)
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return this.showMovieDetail(location.state);
        }else{
            return null;
        }
    }
}

export default Detail;