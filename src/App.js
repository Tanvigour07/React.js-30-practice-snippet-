import React from 'react'
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import Thirteen from './Thirteen';
import Forteen from './Forteen';
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Nineteen from './Nineteen';
import { ThemeProvider } from './ThemeContext';
import NineteenComp from './NineteenComp';
import Twenty from './Twenty';
import { CartProvider } from './CartContext';
import Twentyone from './Twentyone';



 const items = ['Item 1','Item 2','Item 3','Another Item','Another Item 2'];

export default function App() {
  return (
    <div>
     {/* <One/>  */}

     {/* <Two/> */}

     {/* <Three/> */}

     {/* <Four /> */}

     {/* <Five /> */}

     {/* <Six /> */}

     {/* <Seven /> */}

     {/* <Eight /> */}

     {/* <Nine /> */}

     {/* <Ten /> */}

     {/* <Eleven /> */}

     {/* <Twelve /> */}

     {/* <Thirteen /> */}

     {/* <Forteen /> */}

       {/* <Fifteen items={items}/> */}
      
       {/* <Sixteen items={items} itemsPerPage={2}/> */}

       {/* <Seventeen />*/}

       {/* <Eighteen /> */}
{/* 
      //  <ThemeProvider>
      //   <div className='App'>
      //   <Nineteen/>
      // <NineteenComp/>
      //   </div>
      // </ThemeProvider> */}

     {/* <CartProvider>
      <Twenty/>
      </CartProvider> */}

      <Twentyone />
      

    </div>
  )
}


