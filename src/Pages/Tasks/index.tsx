import * as React  from 'react';
import TopBar from '../../components/TopBar';
import TableTasks from './TableTasks';


const TasksPages: React.FC = () => {
    return (
        <>
            <TopBar />
            <div style={{textAlign: 'center', margin: '48px 0'}}>
                <h1>Fila de Upload</h1>
            </div>
            
            <TableTasks />
        </>
    );
}


export default TasksPages;