import './social.css'

export function Social({ url, children }){
  return(
    <a className='social' href={url} target="blank">
      {children}
    </a>
  )
}