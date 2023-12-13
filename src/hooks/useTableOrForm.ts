import { useState } from "react";

export default function useTableOrForm(){
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const showTable = () => setVisible('table')
    const showForm = () => setVisible('form')

    

    return {
        visibleForm: visible === 'form',
        visibleTable: visible === 'table',
        showTable,
        showForm,
    }
}