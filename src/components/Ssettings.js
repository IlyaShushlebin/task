import React,{Component} from 'react'

export default class Ssettings extends Component{
    render(){
        return(
            <div>
                <p>3</p>
                <input type='text' defaultValue='' placeholder='Фамилия'/>
                <input type='text' defaultValue='' placeholder='Имя'/>
                <input type='text' defaultValue='' placeholder='Отчество'/>
                <input type='number' defaultValue='' placeholder='табельный номер'/>
                <input type='text' defaultValue='' placeholder='Должность'/>
                <input type='text' defaultValue='' placeholder='Подразделение'/>
            </div>
        )
    }
}