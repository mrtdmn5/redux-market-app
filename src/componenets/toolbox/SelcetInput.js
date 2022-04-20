import React from "react";

const SelectInput =( {
    name, label, onChange, defaultOption, value, error ,options

}) =>{

    return (
        <div className="form-group">
            <label htmlFor={name}></label>
            


 


  <select name={name} value={value} onChange={onchange} className="form-control">
  
      
  <option  /> {
      
    options.map((optionNode) => {
        <option value="">  {defaultOption}</option>
      return <option key={optionNode.value} value={optionNode.value}>{optionNode.text}</option>
    })
  }
  
   </select>




                {error && <div className="aler alert-danger" > {error} </div>  }
        </div>
    )

}
export default SelectInput;