import { site } from '../data/site'

type DiscussModalProps = {
  open: boolean
  onClose: () => void
}

export function DiscussModal({ open, onClose }: DiscussModalProps) {
  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <form
        className="relative w-full max-w-[480px] rounded-[18px] border border-white/10 bg-[#171719] px-7 py-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          const name = String(data.get('name') ?? '')
          const email = String(data.get('email') ?? '')
          const number = String(data.get('number') ?? '')
          const details = String(data.get('details') ?? '')
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\n${details}`)
          window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry')}&body=${body}`
          onClose()
        }}
      >
        <button
          type="button"
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[22px] text-white/60 hover:bg-white/10 hover:text-white"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="mb-4 text-center text-2xl font-bold text-white">Discuss your project</h2>
        <label className="mb-3 flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
          Your name
          <input
            className="rounded-lg border border-white/10 bg-[#111216] p-3 text-sm text-white outline-none focus:border-blue"
            name="name"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label className="mb-3 flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
          Your email
          <input
            className="rounded-lg border border-white/10 bg-[#111216] p-3 text-sm text-white outline-none focus:border-blue"
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label className="mb-3 flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
          Your number
          <input
            className="rounded-lg border border-white/10 bg-[#111216] p-3 text-sm text-white outline-none focus:border-blue"
            type="tel"
            name="number"
            placeholder="Enter your number..."
          />
        </label>
        <label className="mb-5 flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
          Project details
          <textarea
            className="resize-none rounded-lg border border-white/10 bg-[#111216] p-3 text-sm text-white outline-none focus:border-blue"
            name="details"
            rows={3}
            placeholder="Enter project details..."
          />
        </label>
        <button
          className="gradient-btn mx-auto block min-w-[180px] rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-500"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  )
}
