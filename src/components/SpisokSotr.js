import React,{Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import 'react-bootstrap-table/css/react-bootstrap-table.css'


const sotr = [
    {
        fam:'Иванов',
        dol:'Бухгалтер'
    },
    {
        fam:'Петров',
        dol:'Главный бухгалтер'
    }
];


export default class Spisok extends Component{

    render(){
        return(

            <BootstrapTable data={sotr} className='table-bordered'>
                <TableHeaderColumn  dataField='fam' isKey={true}>Фамилия</TableHeaderColumn>
                <TableHeaderColumn  dataField='dol'>Должность</TableHeaderColumn>
            </BootstrapTable>

        )
    }
}