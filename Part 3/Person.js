const Person = (props) => {
    let msg 
    let name
    
        if (props.age > 17) {
             msg = "please go vote!" 
        }
        else {
           msg = "you must be 18"
        }   
    props.name.length > 6? name= props.name.substring(0,6): name = props.name 

            


    return (
    <div>
        <h3>{msg}</h3>
        <p>
            Learn some information about this Person
            <p>Name: {name}</p>
        </p>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
    )
}

