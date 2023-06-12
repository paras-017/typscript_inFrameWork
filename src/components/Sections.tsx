// Old Method
/*
import React, { ReactNode } from "react";
type SectionProps ={
    title?:string,
    children:ReactNode
}
export const Section: React.FC<SectionProps>=({title, children})=>{
    return (
        <>
        <div>{title}</div>
        <div>{children}</div>
        </>
        )
    }
    */


import  { ReactNode } from "react";
    type SectionProps ={
        title?:string,
        children:ReactNode
    }
export const Section=({title='Default Value', children}:SectionProps)=>{
    return (
        <>
        <div>{title}</div>
        <div>{children}</div>
        </>
    )
}