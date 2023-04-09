import { useRef } from "react";

function App() {

   const renkInput = useRef()

   function renkDeistir(){
      const renk = renkInput.current.value

      document.body.style.backgroundColor = renk
   }

   return(
      <div>
         
         <input ref={renkInput} type="text"  />
         <button onClick={renkDeistir}> Renk Değiştir</button>
      </div>
   )
}
export default App;