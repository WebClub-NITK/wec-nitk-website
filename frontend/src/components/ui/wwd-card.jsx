import * as React from "react"

import { cn } from "@/lib/utils"

const WWDCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    )}
    {...props} />
))
WWDCard.displayName = "WWDCard"

const WWDCardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
WWDCardHeader.displayName = "WWDCardHeader"

const WWDCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
WWDCardTitle.displayName = "WWDCardTitle"

const WWDCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props} />
))
WWDCardDescription.displayName = "WWDCardDescription"

const WWDCardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
WWDCardContent.displayName = "WWDCardContent"

const WWDCardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
WWDCardFooter.displayName = "WWDCardFooter"

const WWDCardAsset = React.forwardRef(({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      src={props.src}
    alt={props.alt}
       />
  ))
  WWDCardAsset.displayName = "WWDCardAsset"

export { WWDCard, WWDCardHeader, WWDCardFooter, WWDCardTitle, WWDCardDescription, WWDCardContent, WWDCardAsset }
