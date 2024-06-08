"use client"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center h-screen">
    <h2>Hello There!</h2>
    <Button>Button</Button>
    <Button variant={'secondary'} className="bg-slate-600 m-2 text-white">Button2</Button>
<Button2 className="" onClick={()=>alert("Hello there")} variant={'destructive'}>Hello Btn 2</Button2>
</div>   
  );
}


interface Button2Props extends React.ComponentProps<typeof Button>{

}
 function Button2(props:Button2Props){
  const {children, ...others} = props
   return (
    <Button {...others}>{children}</Button>
  )
}
