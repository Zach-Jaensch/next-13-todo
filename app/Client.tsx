"use client";

export function Client({component, ...props}) {
const Component = component()
  return <Component {...props} />
}