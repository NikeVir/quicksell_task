
export const column_type={
    'backlog':{
        'name':'Backlog',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" /></svg>
    },

    'todo':{
        'name':'Todo',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    },
    'inprogress':{
        'name':'In Progress',
        'color':'#F1F3F4',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#f0c94a"}} height="16" width="16" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    },
    'done':{
        'name':'Done',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#5c68d1"}} height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
    },
    'cancel':{
        'name':'Cancel',
        'color':'#F1F3F4',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#93a1b2"}} height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
    },
    'nopriority':{
        'name':'No Priority',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
    },
    'urgent':{
        'name':'Urgent',
        'color':'#F1F3F4',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
    },
    'high':{
        'name':'High',
        'svg':<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px"><path d="M7,15.5v7a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-7a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,7,15.5ZM14.5,11h-5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-11A.5.5,0,0,0,14.5,11Zm8-5h-5a.5.5,0,0,0-.5.5v16a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V6.5A.5.5,0,0,0,22.5,6Z"/></svg>
      
    },
    'medium':{
        'name':'Medium',
        'svg':<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px"><path d="M7,15.5v7a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-7a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,7,15.5ZM14.5,11h-5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-11A.5.5,0,0,0,14.5,11ZM23,6.5v16a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5V6.5a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,23,6.5ZM22,7H18V22h4Z"/></svg>
    },
    'low':{
        'name':'Low',
        'svg': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px"><path d="M7,15.5v7a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-7a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,7,15.5Zm8-4v11a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-11a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,15,11.5ZM14,12H10V22h4Zm9-5.5v16a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5V6.5a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,23,6.5ZM22,7H18V22h4Z"/></svg>
    }

}
export const statusColor = {
    'Backlog':{
      'svg':<svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:"-10px"}} viewBox="0 0 256 256" ><rect width="256" height="256" fill="none"></rect><path fill="#93a1b2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M35.25567 103.14925a95.55835 95.55835 0 0 1 24.86208-43.0315M60.10646 195.89357a95.55822 95.55822 0 0 1-24.83534-43.04694M152.85078 220.74432a95.55827 95.55827 0 0 1-49.69741-.01544M220.74433 152.85075a95.55835 95.55835 0 0 1-24.86208 43.0315M195.89354 60.10643a95.55822 95.55822 0 0 1 24.83534 43.04694M103.14922 35.25568a95.55827 95.55827 0 0 1 49.69741.01544"></path></svg>
  },
  
  'Todo':{
      'svg': <svg fill='#93a1b2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
  },
  'In progress':{
      'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#f0c94a"}} height="16" width="16" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
  },
  'Done':{
      'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#5c68d1"}} height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
  },
  'Cancel':{
      'svg': <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#93a1b2"}} height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  },
  }