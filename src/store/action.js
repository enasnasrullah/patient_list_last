export const addPatient = (patient) => {
    return {
        type: 'ADD_PATIENT',
        patient
    }
}


export const deletePatient = (patient) => {
    return {
        type: 'DELETE_PATIENT',
        patient

    }


}
export const editPatient = (patient)=>{
    return {
        type: 'EDIT_PATIENT',
        patient
    }
}
export const searchPatient = (value)=>{
    return {
        type: 'SEARCH_PATIENT',
        value
    }
}

export const filterdPatientDep = (value)=>{
    return {
        type: 'FILTERED_PATIENT',
        value
    }
}