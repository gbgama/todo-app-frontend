import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>


        <Grid cols='12 9 10'>        
            <input id='description' className='form-control' onChange={props.handleChange} 
            placeholder='Add or search for a note' value={props.description}/>     
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
            onClick={props.handleAdd}></IconButton>
            <IconButton style='info' icon='search'
            onClick={props.handleSearch}></IconButton>
            <IconButton style='default' icon='close'
            onClick={props.handleClear}></IconButton>
        </Grid>
         
    </div>
)