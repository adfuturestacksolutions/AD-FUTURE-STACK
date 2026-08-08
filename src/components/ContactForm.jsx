import { useState } from 'react'

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [values, setValues] = useState({ name: '', email: '', budget: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues({ name: '', email: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center">
        <p className="eyebrow mb-3">Message sent</p>
        <h3 className="text-xl font-semibold text-paper">Thanks &mdash; we&rsquo;ll reply within one business day.</h3>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" value={values.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} required />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-paper">Project budget</span>
        <select
          name="budget"
          value={values.budget}
          onChange={handleChange}
          className="rounded-lg border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal-violet"
        >
          <option value="">Select a range</option>
          <option value="<15k">Under $15k</option>
          <option value="15k-50k">$15k &ndash; $50k</option>
          <option value="50k-150k">$50k &ndash; $150k</option>
          <option value="150k+">$150k+</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-paper">Tell us about the project</span>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-lg border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal-violet"
        />
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn-primary justify-center disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong &mdash; please email us directly instead.</p>
      )}
    </form>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-paper">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg border border-ink-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal-violet"
      />
    </label>
  )
}
