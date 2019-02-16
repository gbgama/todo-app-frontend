import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr className='descriptions' key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}><p>{todo.description}</p></td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                    onClick={() => props.handleMarkAsDone(todo)} ></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                    onClick={() => props.handleMarkAsPending(todo)} ></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                    onClick={() => props.handleRemove(todo)} ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table todo-list'>
            <thead>
                <tr>
                    <th style={{fontSize: 16}}>Descrição</th>
                    <th style={{fontSize: 16}} className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor: '#FCFCD9'}}>
                {renderRows()}
            </tbody>
        </table>
    )
}