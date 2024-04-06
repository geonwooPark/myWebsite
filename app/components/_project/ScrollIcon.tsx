export default function ScrollIcon() {
  return (
    <div className="fixed bottom-4 left-[50%] z-[100] translate-x-[-50%] overflow-hidden">
      <div className="flex h-8 w-5 justify-center rounded-full border-2 border-black">
        <div className="mt-1 h-2 w-1.5 animate-wheelDown rounded-full bg-black"></div>
      </div>
    </div>
  )
}
