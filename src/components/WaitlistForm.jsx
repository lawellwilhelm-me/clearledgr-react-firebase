import { useState } from 'react'

const WaitlistForm = ({ joinWaitlist }) => {
    const [ email, setEmail ] = useState('')

    const handleJoinWaitlist = (e) => {
        e.preventDefault()
        joinWaitlist(email)
        setEmail('')
    }

    return (
        <form className="waitlist-form" onSubmit={handleJoinWaitlist}>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="your-email@example.com"
                required
                value={email}
                onChange={({ target }) => { setEmail(target.value) }}
            />
            <button type="submit" className="waitlist-btn">
                Join Waitlist
            </button>
        </form>
    )
}

export default WaitlistForm