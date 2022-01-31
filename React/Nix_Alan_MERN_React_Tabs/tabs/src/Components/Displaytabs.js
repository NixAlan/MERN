import React, {useState} from "react";

const Displaytabs = (props) => {

    const [tabArr, setTabArr] = useState([
        {label: "tab1", content: "Tab 1 content"},
        {label: "tab2", content: "Tab 2 content"},
        {label: "tab2", content: "Tab 2 content"},
        {label: "tab3", content: "Tab 3 content"},
        {label: "tab3", content: "Tab 3 content"},
        {label: "tab3", content: "Tab 3 content"}
    ])
    const [fillteredTabs, setFillteredTabs] = useState([])
    const [selected, setSelected] = useState('')
    const [button1, setButton1] = useState('')
    const [button2, setButton2] = useState('')
    const [button3, setButton3] = useState('')


    const handleTabs = (e) => {
        // setTabContent(e.target.id)
        // console.log(tabContent)
         const filteredArr = tabArr.filter((element,index)=> element.label === e.target.id)
         setFillteredTabs(filteredArr)
         if(e.target.id === 'tab1'){
             setButton1('selected')
             setButton2('')
             setButton3('')
         } else if(e.target.id === 'tab2'){
            setButton2('selected')
            setButton1('')
             setButton3('')
         }else{
            setButton3('selected')
            setButton1('')
             setButton2('')
         }
    }


    return(
        <div>
            {/* <form onSubmit={handleTabs}> */}
                <button className = {button1}  id="tab1" onClick={(e) => handleTabs(e)}>Tab 1</button>
                <button className = {button2} id="tab2" onClick={(e) => handleTabs(e)}>Tab 2</button>
                <button className = {button3} id="tab3" onClick={(e) => handleTabs(e)}>Tab 3</button>
            {fillteredTabs.map((element, index)=>{
                return(
                    <div key={index}>
                        <p>{element.content}</p>
                    </div>
                )
            })}
            

            

            
        </div>
        
    )
}

export default Displaytabs
