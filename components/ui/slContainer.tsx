export function SLcontainer({children}: {children: React.ReactNode}) {
  // TODO: make it more flexible for more use-cases
  //    for example direction or variant props.
  return (
    <div className="sl-container__outer">
      <div className="sl-container__inner overflow-scroll">
        <div className="flex flex-col min-w-fit max-w-fit max-h-full items-center m-auto w-full">
          {children}
        </div>
      </div>
    </div>
)}
