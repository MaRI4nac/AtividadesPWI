import { Container } from './styled'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddActivities, updateAct, removeAct } from '../../redux/reducers/activities';

export default function Home() {
    
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.Activities)

    const [title,setTitle] = useState('')    
    const [description,setDescription] = useState('') 

    const onAddactivitie = () => { 
        dispatch(AddActivities({
            title: title,
            description: description
        }))

        setTitle('')
        setDescription('')
    }

    console.log(title)


    return ( 
        <Container> 
            <h1 className='Title'> Activities </h1>

            <div className='Insert'>
                <div className='Init'> 
                    <div className='Title'> Titulo </div>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} /> 
                </div> 
                <div className='Description'> 
                    <div className='Title'> Descrição </div>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className='Button'>  
                    <button onClick={() => onAddactivitie}> Adicionar </button> 
                </div>
            </div>

            <div className = 'List'> 
                <h1> List Activities </h1>
                <table className='table-act'>
                        <thead>
                            <tr>
                               <th> Atividade </th>
                                <th> Descrição </th>
                                <th className='Remove'>  </th>
                                <th className='Alter'>   </th>
                            </tr>
                        </thead>
                        
                        {/* <tbody>
                            {selector.map(item => 
                              <tr>
                                <td> {item.title} </td>
                                <td> {item.description} </td>
                                <td>  <button className='Button'> Remove </button>  </td>
                                <td>  <button  className='Button'> Alter </button> </td>
                             </tr>  
                            )}
                        </tbody> */}
                </table>
            </div>
    </Container>
    );
}
