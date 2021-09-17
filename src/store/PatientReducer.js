const initstate = {
  patient: [
    {
      id: 1,
      patient_name: "ahmed",
      email: "ahmed@gmail.com",
      phone: 10986724926,
      age: 20,
      Diagnosis: "heart",
      Department: "sergury",
    },
    {
      id: 2,
      patient_name: "hassan",
      email: "hassan@gmail.com",
      phone: 109867249426,
      age: 20,
      Diagnosis: "critcal",
      Department: "Critical Care",
    },
  ],
  firstSearch: true,
};
const PatientReducer = (state = initstate, action) => {
  let currentPatient = [];

  switch (action.type) {
    case "ADD_PATIENT": {
      return { patient: [...state.patient, action.patient] };
    }
    case "DELETE_PATIENT": {
      currentPatient = state.patient.filter(
        (patient) => patient.id !== action.patient
      );
      console.log("TESTPATIENT", currentPatient);

      return { ...state, patient: currentPatient };
    }
    case "EDIT_PATIENT": {
      const newList = state.patient.map((patient) => {
        if (patient.id === action.patient.id) {
          const updatedItem = {
            ...action.patient,
          };
          console.log(updatedItem, 'test found', patient.email, action.patient.email);
          return updatedItem;
        }
        return patient;
      });

      return { ...state, patient: newList };
    }

    case "SEARCH_PATIENT": {
      // Empty query
      if (action.value == '' || action.value == undefined) {
        return { ...state, patient: state.patient }
      }
      // Set original list on first search only
      let originalList = state.firstSearch ? state.patient : state.originalList;
      let copy = originalList.map((x) => x);
      const newList = originalList.filter(
          (patient) => {
            return patient.patient_name.includes(action.value);
          }
      );
      return { ...state, patient: newList, originalList: copy, firstSearch: false };
    }

    case 'FILTERED_PATIENT':{
      if (action.value==''|| action.value==undefined)
      {
        return {...state, patient:state.patient}
      }
      // Set original list on first search only
      let originalList = state.firstSearch ? state.patient : state.originalList;
      let copy = originalList.map((x) => x);

      const newlist = originalList.filter((patient)=>{
        return patient.Department.includes(action.value.Department)
      });
      return {...state, patient:newlist, originalList: copy, firstSearch: false}

    }
    default:
      return state;
  }
};
export default PatientReducer;