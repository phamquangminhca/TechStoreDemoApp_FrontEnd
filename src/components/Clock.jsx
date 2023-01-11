import React, {Fragment} from 'react'

function Clock({timerDays, timerHours, timerMinutes, timerSeconds}) {

  return (
    <Fragment>
      <section className='timer-container'>
        <section className='timer'>
            <div className="clock">
                {/* <section>
                    {timerDays}
                    <small>Days</small>
                </section>
                <span>:</span> */}
                <section>
                    {timerHours}
                    <small>Hours</small>
                </section>{" "}
                <span>:</span>
                <section>
                    {timerMinutes}
                    <small>Mins</small>
                </section>{" "}
                <span>:</span>
                <section>
                    {timerSeconds}
                    <small>Secs</small>
                </section>
            </div>
        </section>
      </section>
    </Fragment>
  )
}

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
}

export default Clock
