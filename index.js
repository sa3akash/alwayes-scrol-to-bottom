 
   const scroll = useRef();
 
 
 // Always scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])
  
  
  // message contaienr
  
   <div ref={scroll} className={ message.senderId === currentUserId ? "message own" : "message"}>
       <span>{message.text}</span>
      <span>{format(message.createdAt)}</span>
 </div>
 
 
 
