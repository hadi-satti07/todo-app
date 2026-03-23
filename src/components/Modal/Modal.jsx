import React, { useContext, useEffect, useState } from 'react'
import classes from './Modal.module.css'
import { doc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { ContextAPI } from '../../utils/ContextAPI';
const Modal = ({ theme, closeopenmodal, editData }) => {
    const [inputField, setInputField] = useState({ title: '', date: '', priority: '' });
    const { user } = useContext(ContextAPI)
    const handlecreateData = async () => {
        const listRef = collection(db, 'lists')
        try {
            await addDoc(listRef, {
                ...inputField,
                addedBy: user.uid
            })
            window.location.reload();
            
        } catch (err) {
            alert(err.message)
            
        }
    }

    useEffect(()=>{
        if(editData){
            setInputField({
                title: editData.title, date: editData.date, priority: editData.priority
            })
        }

    },[])
    const handleSaveBtn = async () => {
        if (inputField.title.length === 0 || inputField.date.length === 0 || inputField.priority.length === 0) {
            alert('Please Fill All The Details')

        }
        if(editData){
            updateData()
        }
        else{
            handlecreateData()
        }
    }

    const updateData = async()=>{
        const listRef = doc(db, 'lists', editData.id)
        try {
            await updateDoc(listRef,{
                title: inputField.title,
                date: inputField.date,
                priority: inputField.priority
            })
            window.location.reload();
            
        } catch (err) {
            alert(err.message)
            
        }
    }
    return (
        <div className={classes.modal}>
            <div className={[classes.card, theme == 'light' ? classes.cardLight : classes.cardDark].join(' ')}>
                <h1>{editData ? 'Edit' : 'Add'} Items</h1>
                {inputField.title}{inputField.date}

                <div className={classes.inputbox}>
                    <input value={inputField.title} onChange={(e) => setInputField({ ...inputField, title: e.target.value })} className={classes.inputField} placeholder='Enter Items' />
                </div>

                <div className={classes.secondRow}>
                    <input value={inputField.date} onChange={(e) => setInputField({ ...inputField, date: e.target.value })} className={classes.date} type='date' />

                    <div className={classes.badges}>
                        <div onClick={() => setInputField({ ...inputField, priority: "HIGH" })} className={[classes.high, inputField.priority === "HIGH" ? classes.selectedPriority : null].join(' ')}>High</div>
                        <div onClick={() => setInputField({ ...inputField, priority: "MEDIUM" })} className={[classes.Medium, inputField.priority === "MEDIUM" ? classes.selectedPriority : null].join(' ')}>Medium</div>
                        <div onClick={() => setInputField({ ...inputField, priority: "LOW" })} className={[classes.Low, inputField.priority === "LOW" ? classes.selectedPriority : null].join(' ')}>Low</div>
                    </div>
                </div>

                <div className={classes.btns}>
                    <div onClick={() => closeopenmodal()} className={[classes.btn, classes.cancel].join(' ')}>Cancel</div>
                    <div className={[classes.btn, classes.add].join(' ')} onClick={()=> handleSaveBtn()}>Save</div>
                </div>
            </div>
        </div>
    )
}

export default Modal