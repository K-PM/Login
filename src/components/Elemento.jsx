import '../assets/style/elemento.css';
import Inputs from "../atoms/Inputs";

function Elemento() {

    const Elementos =[
        {
            Label:"Usuario",
            type:"Text",
            id:"Usuario"
        },
        {
            Label:"Correo",
            type:"email",
            id:"email"
        },
        {
            Label:"Contraseña",
            type:"password",
            id:"pass"
        },
        {
            Label:"Acepto los terminos y condiciones",
            type:"checkbox",
            id:"Acepto"
        },
        {
            Label:"",
            type:"submit",
            id:"submit"
        },
        {
            Label:"",
            type:"reset",
            id:"reset"
        }

    ];
    return ( 
        <div>
            <h1>Iniciar sesion</h1>
            {Elementos.map((elemet)=>(
                 <Inputs
                type={elemet.type}
                id={elemet.id}
                text={elemet.Label}
                label={elemet.Label2}
                />
            )
        )}
        </div>
     );
}
export default Elemento;