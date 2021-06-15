import * as React  from 'react';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { URL_TASKS } from '../../urls';
import { handleAPIError } from '../../utils';


interface ITask {
    id: string;
    layer_name: string;
    status: string;
    detail: string;
}


const TableTasks: React.FC = () => {

    let [tasks, setTasks] = useState<ITask []>([])

    useEffect(() => {
        axios.get(URL_TASKS).then(
            (resp) => {
                setTasks(resp.data)
            }
        ).catch(
            (err) => {
                handleAPIError(
                    err, () => { alert('Error') }
                )
                
            }
        )
    }, [])

    return (
        <div style={{margin: '32px 120px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome da Camada</th>
                        <th>Status</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(
                            (task: ITask) => (
                                <tr>
                                    <td>{task.id}</td>
                                    <td>{task.layer_name}</td>
                                    <td>{task.status}</td>
                                    <td>{task.detail}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}


export default TableTasks;