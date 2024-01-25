interface Props{
    title:string
    size?:'sm'|'md';
}

export const Button = ({title,size ='sm'}: Props) =>{
    return(
        <button className="bg-primary text-white font-medium hover:bg-primary/80 duration-300 ${size === 'sm' && 'px-4 py-2 rounded-lg}${size === 'md' && px-12 py-4 rounded 2x1
         ">{title}</button>
    )
}