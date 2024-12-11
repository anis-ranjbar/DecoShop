import React from 'react'
import { GiSeahorse } from "react-icons/gi";
export default function Footer() {
  return (
    <div>
        <div class="p-10 flex items-center">
            <span class="h-px w-3/4 !mt-24 mx-auto my-4 bg-[#54786a] border-0 rounded md:my-10 dark:bg-slate-400"></span>
            <span class="mx-4"><GiSeahorse  size={80} /></span>
            <span class="h-px w-3/4 !mt-24 mx-auto my-4 bg-[#54786a] border-0 rounded md:my-10 dark:bg-slate-400"></span>
        </div>
    </div>
  )
}
