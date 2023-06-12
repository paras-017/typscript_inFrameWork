import { ReactNode } from "react"

interface ListProps<T>{
    items: T[]       //array of items
    render:(item:T)=> ReactNode     //function for  rendering each item of array
}

const List =<T,>({items, render}:ListProps<T>) => {
  return (
    <ul>
        {items.map((data,i)=>(
            <li key={i}>
                  {render(data)}
            </li>
        ))}
    </ul>
  )
}

export default List