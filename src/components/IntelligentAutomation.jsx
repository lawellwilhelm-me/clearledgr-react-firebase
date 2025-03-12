import aiAutomation from '../assets/images/ai-automation.png'


const IntelligentAutomation = () => {
    return (
        <section className="automation wrapper wrapper-primary">
            <div className="description">
                <h2>Intelligent Automation That Learns</h2>
                <p>Our self-learning AI agents handle your reconciliations, variance analysis, and journal entries with increasing precision over time. Watch as your month-end close time drops by 40% while accuracy soars.</p>
            </div>
            <figure>
                <img src={aiAutomation} alt="AI automation illustration" />
            </figure>
        </section>
    )
}

export default IntelligentAutomation