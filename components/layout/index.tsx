import React from 'react'
import  Header  from './header'
interface ILayout{
    children:JSX.Element
}
const Layout:React.FC<ILayout>= ({children}) => {
  return (
    <div>
<Header/>
{children}
    </div>
  )
}

export default Layout