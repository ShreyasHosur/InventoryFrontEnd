import React from 'react';
import Select from 'react-select';


const dropdownform = (props) => {
    let options =[]
    options =  props.items.map(item => {
        return { 
            label:item,
            value:item
        }
    })

    const styles = {
        control : (provided) => ({
            ...provided, 
            height: '40px' ,
            width:'100%',
            borderRadius:'5px'
        }),
        option : (provided, state) => ({
            ...provided ,
            fontFamily: "Ubuntu",
            fontSize:'1.3rem',
            backgroundColor: state.isSelected ? '#a8674f' : 'white',
            color: state.isSelected ? 'yellow' : 'black',
            borderBottom: "1px solid #dddddd"
        })
    }

    return (
     <Select options={options} 
     styles={styles}
     maxMenuHeight ={120}
     onChange ={props.changed}/>
    )
}

export default dropdownform;