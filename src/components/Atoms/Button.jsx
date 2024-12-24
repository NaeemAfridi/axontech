import React from 'react'

const Button = ({className,title}) => {
  return (
    <div>
         <button className={className}  >
          {title}
        </button>
    </div>
  )
}

export default Button