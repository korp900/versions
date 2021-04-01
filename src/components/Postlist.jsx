import React from "react";
import {Link} from "react-router-dom";

function Tr(props){
    return <tr>
        <th scope="col">{props.index}</th>
        <th scope="col"><Link to={"/post"}>{props.title}</Link></th>
        <th scope="col">{props.author}</th>
        <th scope="col">{props.date_added}</th>
    </tr>
}
// noinspection UnreachableCodeJS
export class Postlist extends React.Component{
    rows;
        constructor() {
        super();
        this.state = {
            posts: []
        }
    }
        componentDidMount = () => {
        console.log('Компонент +')
        fetch("http://korp9000.beget.tech/php/getPosts.php", {
            metod: "get",
            mode: "no-cors"
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                for (let i = 0; i < result.length; i++){
                   rows.push(<Tr
                        index={i+1}
                        title={result[i].title}
                        author={result[i].author}
                        date_added={result[i].date_added}
                    />)
                    }
                    this.setState({
                        posts: rows
                    })
            })
    }
    render() {
        return
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Username</th>
            </tr>
            </thead>
            <tbody>
            {this.state.posts}
            </tbody>
        </table>
    };
}
