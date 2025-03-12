import WaitlistForm from "./WaitlistForm"


const Footer = ({ joinWaitlist }) => {
    return (
        <footer className="footer wrapper" id="footer">
            <div>
                <p>Take Control of Your Finance</p>
                <WaitlistForm joinWaitlist={joinWaitlist}/>
            </div>
            <p className="copyright">&copy; 2025 Clearledgr B.V. All right reserved.</p>
        </footer>
    )
}

export default Footer