import s from './Loader.module.css'

// export const Loader = () => <div className={s.loader}/>

export const Loader = () => {
   return (
      <div className={s.loader}>
         <div className={s.inLoader}></div>
      </div>
   )
}

