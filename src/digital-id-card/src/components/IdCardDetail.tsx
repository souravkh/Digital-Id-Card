import './IdCardDetail.css'
import profile from '../data/profile.json'

function IdCardDetail() {
    return (
        <section className="page">
            <div className="id-card">

                {/* ── TOP SECTION: orange gradient + photo ── */}
                <div className="card-top">
                    <div className="lanyard-hole"></div>

                    <div className="avatar-ring">
                        <div className="avatar">
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="avatar-img"
                            />
                        </div>
                    </div>
                    <svg className="wave" viewBox="0 0 320 60" preserveAspectRatio="none">
                        <path d="M0,30 C80,60 240,0 320,30 L320,60 L0,60 Z" fill="rgba(253,240,226,0.9)" />
                    </svg>
                </div>

                {/* ── BOTTOM SECTION: glassmorphism details ── */}
                <div className="card-bottom">

                    {/* Name & Title */}
                    <h2 className="card-name">{profile.name}</h2>
                    <p className="card-role">{profile.title} | {profile.experience} YOE</p>

                    {/* <div className="card-divider"></div> */}

                    {/* Quick Info */}
                    {/* <ul className="card-info">
                        <li>
                            <span className="info-label">Experience</span>
                            <span className="info-sep">:</span>
                            <span className="info-value">{profile.experience}</span>
                        </li>
                        <li>
                            <span className="info-label">Education</span>
                            <span className="info-sep">:</span>
                            <span className="info-value">{profile.education}</span>
                        </li>
                    </ul> */}

                    <div className="card-divider"></div>

                    {/* Skills */}
                    <p className="section-label">Skills</p>
                    <div className="skills-list">
                        {profile.skills.map(skill => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>

                    <div className="card-divider"></div>

                    {/* Links */}
                    <p className="section-label">Connect</p>
                    <div className="links-list">
                        <a href={profile.links.portfolio} target="_blank" rel="noreferrer" className="link-item">
                            <i className="ri-global-line"></i>
                        </a>
                        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="link-item">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a href={profile.links.github} target="_blank" rel="noreferrer" className="link-item">
                            <i className="ri-github-line"></i>
                        </a>
                        <a href={`mailto:${profile.links.email}`} className="link-item">
                            <i className="ri-mail-line"></i>
                        </a>
                    </div>

                </div>
            </div>

            {/* Watermark discreetly placed below the card */}
            <div className="watermark">
               <span> 
                    <p>Made by</p>
                    <a href="https://www.linkedin.com/in/sourav-k-b49361166/"  target="_blank">
                        Sourav
                    </a>
                </span>
            </div>
        </section>
)};

export default IdCardDetail