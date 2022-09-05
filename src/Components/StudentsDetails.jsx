import React from "react";
import { Link } from "react-router-dom";

class StudentsDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            age: "",
            course: "",
            batch: "",
            details: [],
        }
    }

    getName = (e) => {
        this.setState({ fName: e.target.value })
    }
    getAge = (e) => {
        this.setState({ age: e.target.value })
    }
    getCourse = (e) => {
        this.setState({ course: e.target.value })
    }
    getBatch = (e) => {
        this.setState({ batch: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if ((this.state.fName.length && this.state.age.length && this.state.course.length && this.state.batch.length) === 0) {
            return;
        }

        const newDetail = {
            nameValue: this.state.fName,
            ageValue: this.state.age,
            courseValue: this.state.course,
            batchValue: this.state.batch,
            id: Date.now()
        }
        this.setState(state => ({
            details: state.details.concat(newDetail)
        }))

        this.setState({
            fName: '',
            age: '',
            course: '',
            batch: ''
        })
    }


    render() {
        return (
            <div>
                <form action="/Students/Details" className="form" >
                    <label for="name" className="label1">Name</label>
                    <input type="text" name="name" className="input1" value={this.state.fName} onChange={this.getName}></input>

                    <label for="age" className="label2" >Age</label>
                    <input type="number" name="age" className="input2" value={this.state.age} onChange={this.getAge}></input><br />

                    <label for="course" className="label3">Course</label>
                    <input type="text" name="course" className="input3" value={this.state.course} onChange={this.getCourse}></input>

                    <label for="batch" className="label4" >Batch</label>
                    <input type="text" name="batch" className="input4" value={this.state.batch} onChange={this.getBatch}></input><br />

                    <Link to="/Students" className="cancel">Cancel</Link>
                    <Link to="/Students" className="cancel2">Submit</Link>
                    {/* <button className="submit">Submit</button> */}
                </form>
                {
                }

            </div>
        )
    }
}



export default StudentsDetails;
