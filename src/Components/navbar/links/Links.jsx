import styles from './Links.module.css'
import NavLink from "./navLink/NavLink"

const Links = () => {
    
    const link=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Posts",
            path:"/posts"
        },
        
    ]
  return (
    <div className={styles.links}>
        {link.map((link)=>{
           return <NavLink item={link} key={link.title}/>
        })}
    </div>
  )
}

export default Links