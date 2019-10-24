import React from 'react'
import axios from '../../config/axios'
import CategoryItem from './Item'

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:[]
        }
        this.removeHandle = this.removeHandle.bind(this)
    }

    componentDidMount() {
        axios.get('/categories')
            .then(response => {
                const categories = response.data
                this.setState({ categories })
            })
            .catch(err => {
                console.log(err)
            })
    }

    removeHandle(id) {
        axios.delete(`/categories/${id}`)
            .then((response) => {
                if (response.data._id) {
                    this.setState(prevState => {
                        return { categories: prevState.categories.filter(category => category._id !== id) }

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
                <h2>Listing categories - {this.state.categories.length}</h2>
                {this.state.categories.map((category) => {
                    return (
                        <CategoryItem removeHandle={this.removeHandle}
                            key={category._id}
                            name={category.name}
                            id={category._id} />
                    )
                })}
            </div>

        )
    }
}
