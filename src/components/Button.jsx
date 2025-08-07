function Button({
    children,
    type='button',
    textColor='text-white',
    backgroundColor='bg-blue-600',
    className='',
    ...props

}){
    return(
        <button className={`px-4 py-2 rounded-xl ${backgroundColor} ${textColor} ${className}`} {...props}>{children}</button>
    )
}
export default Button