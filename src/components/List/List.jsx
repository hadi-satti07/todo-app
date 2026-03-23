import React, { useContext } from 'react'
import classes from './List.module.css'
import { ContextAPI } from '../../utils/ContextAPI'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({ data, deleteItem, closeOpenModel, setEditData }) => {
    const { theme } = useContext(ContextAPI)
    const editBtnClick = () => {
        closeOpenModel()
        setEditData(data)
    }
    return (
        <div className={[classes.listCard, theme === 'light' ? classes.lightCard : classes.darkCard].join(' ')}>
            <div className={classes.listLeft}>
                <span>{data.title}</span>
                <span className={[classes.priority, data.priority === 'HIGH' ? classes.highPrior : data.priority === 'MEDIUM' ? classes.mediumPrior : classes.lowPrior].join(' ')}>{data.priority}</span>
                <div className={classes.dates}>{data.date}</div>
            </div>
            <div className={classes.listRight}>
                <div onClick={editBtnClick} className={classes.editBtn}>
                    <EditIcon />
                </div>
                <div onClick={() => deleteItem(data.id)} className={classes.deleteBtn}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default List