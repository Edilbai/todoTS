import React, { useRef }  from 'react'


interface TodoFormProps{
	add(title: string):void
}
export const TodoForm:React.FC<TodoFormProps> =(props)=>{
	// const [title, setTitle]=useState<string>()
 
	// const ChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
	// 	setTitle(event.target.value)
		
	// }
	const ref=useRef<HTMLInputElement>(null)
 const keyHandler=(event:React.KeyboardEvent)=>{
// if(event.key ==='Enter'){
// 	console.log(title)
// 	setTitle('')
if(event.key==='Enter'){
	props.add(ref.current!.value)
	ref.current!.value=''
}


}
 return(
	<div className='input-field mt2'>
<input 
// value={title}
//  onChange={ChangeHandler}
ref={ref}
  type="text" 
	id='title' 
	placeholder='Введите название дела' 
	onKeyPress={keyHandler} />
	
<label htmlFor="title" className='active'>
	Введите название дела
</label>
	</div>
 )
 }
 

