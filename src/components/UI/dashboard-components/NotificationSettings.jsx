import React from 'react'
import comingSoonUi from "../../../assets/dashboard/comingSoon.png"


function NotificationSettings(props) {
  return (
    <section className={`text-black flex flex-col mb-16 gap-20 items-center justify-start ${props.className}`}>
      <img  className={"w-40 h-40 mt-20"} src={comingSoonUi} alt="coming soon" />
    </section>
  )
}

export default NotificationSettings