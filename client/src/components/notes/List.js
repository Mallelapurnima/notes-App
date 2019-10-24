import React from 'react'
import axios from '../../config/axios'
import NoteItem from '../notes/Item'
 export default class NoteList extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
        }
        this.removeHandle=this.removeHandle.bind(this)
    }
    componentDidMount() {
        axios.get('/notes')
            .then(response => {
                console.log(response,"data")
                const notes = response.data
                this.setState({ notes })
            })
            .catch(err => {
                console.log(err)
            })
    }

    removeHandle(id) {
        axios.delete(`/notes/${id}`)
            .then((response) => {
                if (response.data._id) {
                    this.setState(prevState => {
                        return { notes: prevState.notes.filter(note => note._id !== id) }

                    })
                }
            })
            .catch((err) => {
                alert(err)

            })
    }

    render() {
        return (
            <div>
                <h2>Listing notes- {this.state.notes.length}</h2>
                {(this.state.notes.length > 0) ? ( this.state.notes.map((note) => {
                    return (
                        <NoteItem removeHandle={this.removeHandle}
                            key={note._id}
                            name={note.title}
                            id={note._id} />
                    )
                })) :"no data"}
            </div>

        )
    }


    
}