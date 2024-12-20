export function SLcontainer({children, direction, variant}: {children: React.ReactNode, direction?: string, variant?: string}) {
  return (
    <div className="sl-container__outer">
      <div className="sl-container__inner h- overflow-scroll">
        <div className="flex flex-col min-w-fit max-w-fit max-h-full items-center m-auto w-full">
          {children}
        </div>
      </div>
    </div>
)}
