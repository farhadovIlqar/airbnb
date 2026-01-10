import "./button.css"

export default function Button({ text }: { text: string }) {
  return (
    <button className="Btn">

      <div className="sign"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      </div>

      <div className="text">{text}</div>
    </button>



  )
}
