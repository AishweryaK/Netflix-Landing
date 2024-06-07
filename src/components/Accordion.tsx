// import React from 'react'
// import BootStrap from './BootStrap'

// export default function Accordion() {
//   return (
//     <div className='bootstrap'>
//         <BootStrap />
//     </div>
//   )
// }

const GoTopButton = () => {

const handleScrollUp = () => {
    window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
}

return (
    <div onClick={ handleScrollUp } >
        <button type={'button'} >
            <p>scroll</p>
        </button>
    </div>
)
}

export default GoTopButton
