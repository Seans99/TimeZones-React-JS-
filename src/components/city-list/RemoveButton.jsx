import { useState } from "react";
//Add removebutton for user can remove any city.
// the city removes from the site and localStorage.

export default function RemoveButton(props) {
  const [remove, removeCity] = useState([]);
  let { buttonId, setAndSaveItems, stateList } = props;

  const handleDelete = (buttonId) => {

  
    let updatedList = stateList.filter((item) => { return item.indexId != buttonId });

   
    updatedList.splice(buttonId, 1);

    setAndSaveItems(updatedList);
  };

  return (
    
    <div className="RemoveButton">
    <button
        className="btn-primary btn-m"
        style={{border:"transparent", background:"rgba(0, 1, 0, 0.500)"  }}
        
      onClick={() => handleDelete(buttonId)}
    >
        Remove { }
    
      </button>
      </div>
    
  );
}


