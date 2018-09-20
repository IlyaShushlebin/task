import React,{Component} from 'react'


export default class AddZap extends Component{

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Фамилия" /><br/>
                <input type="text" placeholder="Имя" /><br/>
                <input type="text" placeholder="Отчество" /><br/>
                <input type="date" /><br/>
                <input type="number" placeholder="Табельный номер" /><br/>
                <select>
                </select><br/>
                <select>
                </select><br/>
                <button>Save</button>
            </form>
        );
    }
}