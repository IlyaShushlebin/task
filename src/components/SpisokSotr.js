import React,{Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import 'react-bootstrap-table/css/react-bootstrap-table.css'


const sotr = [
    {
        id: 1,
        fam:'Иванов',
        dol:'Бухгалтер'
    },
    {
        id: 2,
        fam:'Петров',
        dol:'Главный бухгалтер'
    },
    {
        id: 7,
        fam:'Сиротенко',
        dol:'Программист'
    },
    {
        id: 4,
        fam:'Сирофима',
        dol:'Стажер'
    },
    {
        id: 5,
        fam:'Иванко',
        dol:'Охранник'
    }
];

export default class Spisok extends Component{
    onClickProductSelected(cell, row, rowIndex){
        console.log('Product #', rowIndex );
    }

    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <button
                type="button"
                onClick={() =>
                    this.onClickProductSelected(cell, row, rowIndex)}
            >
                Подробнее
            </button>

        )
    }

    render(){
        return(
            <BootstrapTable
                data={sotr}
                bordered={true}
                tableStyle={ { width: '370px' } }
                height='300' scrollTop={ 'Top' }
                headerStyle={ { background: '#BBBBBB' } }
                containerStyle={{width: '300px'}} hover={true}
            >
                <TableHeaderColumn  dataField='fam' isKey={true}
                                    tdStyle={{ width: '150px'}}
                                    thStyle={{ width: '150px'}}>Фамилия</TableHeaderColumn>
                <TableHeaderColumn  dataField='dol'
                                    tdStyle={{ width: '150px'}}
                                    thStyle={{ width: '150px'}}>Должность</TableHeaderColumn>
                <TableHeaderColumn dataField='id'
                                   tdStyle={{ width: '70px'}}
                                   thStyle={{ width: '70px'}}
                                   dataFormat={this.cellButton.bind(this)}

                />
            </BootstrapTable>

        )
    }
}