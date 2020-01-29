import React, { Component } from 'react'

export class AddBooks extends Component {
    constructor(props){
        super(props)
        this.state = {
            // book: {
            //     title: "",
            //     genre:"",
            //     publisher: "",
            //     year: 0,
            //     imgURL: ""
            // },
            bookList: []
        }
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleAddBook = (e) => {

        fetch("")
        let newBook = {
            title: this.state.title,
            genre: this.state.genre,
            publisher: this.state.publisher,
            year: this.state.year,
            imgURL: this.state.imgURL,
        }

        this.setState({
            bookList: this.state.bookList.concat(newBook)
        })
    }

    render() {
        return (
            <div>
                <h3>Add books here</h3>
                Title: <input name="title" type="textbox" onChange ={this.handleChange} />
                Genre: <input name="genre" type="textbox" onChange ={this.handleChange} />
                Publisher: <input name="publisher" type="textbox" onChange ={this.handleChange} />
                Year: <input name="year" type="textbox" onChange ={this.handleChange} />
                Image: <input name="imgURL" type="textbox" onChange ={this.handleChange} />

                <button onClick ={this.handleAddBook}>Add Book</button>
            </div>
        )
    }
}

export default AddBooks
