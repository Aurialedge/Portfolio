import React from 'react';

// Import images for each project
import cookiepediaImg from './image/Cookiepedia.jpg';
import stockieImg from './image/Stock.jpg';
import wardrobeaiImg from './image/Wardrobe.jpg';
import carpriceImg from './image/Garage.jpg';

/* ----------------------------- Styles (injected) ---------------------------- */
const globalStyles = `import React from 'react';
:root{--bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#7c3aed;--glass: rgba(255,255,255,0.03)}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:linear-gradient(180deg,#081022 0%, #071025 100%); color:#e6eef8}
.container{max-width:1100px;margin:0 auto;padding:28px}
.nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0}ice.png';
.brand{display:flex;gap:12px;align-items:center}
.brand .logo{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#4f46e5);display:flex;align-items:center;justify-content:center;font-weight:700}
.nav a{color:var(--muted);text-decoration:none;margin-left:12px}
.hero{display:grid;grid-template-columns:1fr 360px;gap:28px;align-items:center;padding:28px 0}
.card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03)}
.heroIntro h1{margin:0;font-size:34px}
.heroIntro p{color:var(--muted);margin-top:8px;line-height:1.4}
.cta{margin-top:16px;display:flex;gap:10px}meal suggestion chatbot, social features (follow/save), and search by ingredients.',
.btn{padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#4f46e5);color:white;border:none;cursor:pointer}
.btn.secondary{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
.skillsGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:14px}
  },
  {
    title: 'Stock Web – AI-Powered Stock Prediction Platform',
    tech: ['ReactJS','Node.js','MongoDB','Python(LSTM/ARIMA)','Flask','PowerBI'],
    description: 'Integrated ML models (LSTM, ARIMA) with a React dashboard to visualise and predict stock trends.',
    repo: 'https://github.com/Aurialedge/Stockie.git',
    imgAlt: 'Stockie',
    img: stockieImg
  },
  {
    title: 'Wardrobe AI – Smart Dressing Room',
    tech: ['Flutter/React','Firebase','Node.js','Computer Vision','MongoDB'],
    description: 'Virtual fitting and outfit recommendation engine using computer vision and size-fit intelligence.',
    repo: 'https://github.com/Aurialedge/WardrobeAI.git',
    imgAlt: 'WardrobeAI',
    img: wardrobeaiImg
  },
  {
    title: 'Car Price Predictor',
    tech: ['Python','Flask','scikit-learn','Pandas','NumPy','Heroku'],
    description: 'Used car price estimation with a Linear Regression model (R² = 0.92), deployed on Heroku.',
    repo: 'https://github.com/Aurialedge/Car_price_predictor',
    imgAlt: 'CarPrice',
    img: carpriceImg
  }
];

// ...existing code...

function ProjectCard({p}){
  return (
    <div className="card projectCard">
      <img src={p.img} alt={p.imgAlt} className="projectImg" />
      <div style={{flex:1}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700}}>{p.title}</div>
          <div style={{fontSize:12}}><a href={p.repo} target="_blank" rel="noreferrer" style={{color:'var(--muted)'}}>Repo</a></div>
        </div>
        <div className="pmeta">{p.description}</div>
        <div className="techList">
          {p.tech.map(t => <div key={t} className="tech">{t}</div>)}
        </div>
      </div>
    </div>
  );
}
.brand{display:flex;gap:12px;align-items:center}
.brand .logo{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#4f46e5);display:flex;align-items:center;justify-content:center;font-weight:700}
.nav a{color:var(--muted);text-decoration:none;margin-left:12px}
.hero{display:grid;grid-template-columns:1fr 360px;gap:28px;align-items:center;padding:28px 0}
.card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03)}
.heroIntro h1{margin:0;font-size:34px}
.heroIntro p{color:var(--muted);margin-top:8px;line-height:1.4}
.cta{margin-top:16px;display:flex;gap:10px}
.btn{padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#4f46e5);color:white;border:none;cursor:pointer}
.btn.secondary{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
.skillsGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:14px}
.skillItem{background:var(--glass);padding:12px;border-radius:10px;color:var(--muted);font-weight:600}
.projectsList{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:14px}
.projectCard{display:flex;gap:12px;align-items:flex-start}
.projectImg{width:110px;height:80px;border-radius:8px;background:linear-gradient(135deg,#0ea5e9,#7c3aed);flex-shrink:0}
.pmeta{color:var(--muted);font-size:14px}
.techList{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.tech{background:rgba(255,255,255,0.04);padding:6px 8px;border-radius:8px;font-size:12px;color:var(--muted)}
.achievements{margin-top:18px}
.contact{display:flex;gap:12px;flex-direction:column}
.contact input, .contact textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
.footer{margin-top:28px;padding:18px 0;color:var(--muted);font-size:14px;text-align:center}
.links{display:flex;gap:12px;flex-wrap:wrap}
@media (max-width:880px){.hero{grid-template-columns:1fr;}.projectsList{grid-template-columns:1fr}.skillsGrid{grid-template-columns:1fr}}
`;

/* inject global styles once */
if (typeof document !== 'undefined'){
  const id = 'portfolio-global-styles';
  if (!document.getElementById(id)){
    const s = document.createElement('style');
    s.id = id; s.innerText = globalStyles; document.head.appendChild(s);
  }
}

/* ------------------------------- Data (edit this) ------------------------------ */
const PROJECTS = [
  {
    title: 'Cookiepedia – AI-Based Cooking Platform',
    tech: ['ReactJS','Node.js','Express.js','MongoDB','OpenAI API','JWT'],
    description: 'AI-personalized recipe-sharing app with meal suggestion chatbot, social features (follow/save), and search by ingredients.',
    repo: 'https://github.com/Aurialedge/cookiepedia-vite.git',
    imgAlt: 'Cookiepedia',
    img: cookiepediaImg
  },
  {
    title: 'Stock Web – AI-Powered Stock Prediction Platform',
    tech: ['ReactJS','Node.js','MongoDB','Python(LSTM/ARIMA)','Flask','PowerBI'],
    description: 'Integrated ML models (LSTM, ARIMA) with a React dashboard to visualise and predict stock trends.',
    repo: 'https://github.com/Aurialedge/Stockie.git',
    imgAlt: 'Stockie',
    img: stockieImg
  },
  {
    title: 'Wardrobe AI – Smart Dressing Room',
    tech: ['Flutter/React','Firebase','Node.js','Computer Vision','MongoDB'],
    description: 'Virtual fitting and outfit recommendation engine using computer vision and size-fit intelligence.',
    repo: 'https://github.com/Aurialedge/WardrobeAI.git',
    imgAlt: 'WardrobeAI',
    img: wardrobeaiImg
  },
  {
    title: 'Car Price Predictor',
    tech: ['Python','Flask','scikit-learn','Pandas','NumPy','Heroku'],
    description: 'Used car price estimation with a Linear Regression model (R² = 0.92), deployed on Heroku.',
    repo: 'https://github.com/Aurialedge/Car_price_predictor',
    imgAlt: 'CarPrice',
    img: carpriceImg
  }
];

const SKILLS = {
  'Languages & Frameworks': ['C', 'C++', 'Python', 'JavaScript', 'Java', 'React.js', 'Dart', 'Node.js', 'Express.js', 'Next.js'],
  'Web & App': ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Flutter'],
  'DB & Tools': ['MySQL', 'PostgreSQL', 'MongoDB', 'Postman'],
  'Libraries & ML': ['NumPy','Pandas','SciPy','Django','Matplotlib','PowerBI','Scikit-learn']
};

/* ------------------------------- Components ------------------------------- */
function Navbar(){
  return (
    <div className="nav container">
      <div className="brand">
        <div className="logo">SP</div>
        <div>
          <div style={{fontWeight:700}}>Shivraj Perkar</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Full Stack Developer • AI/ML Enthusiast</div>
        </div>
      </div>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

function Hero(){
  return (
    <div className="container hero">
      <div>
        <div className="card heroIntro">
          <h1>Hi — I’m <span style={{color:'var(--accent)'}}>Shivraj</span></h1>
          <p>I build full-stack web apps and ML-backed tools. I enjoy turning small ideas into polished user-facing products. Currently studying B.Tech (CSE) at IIIT Nagpur — pursuing projects in AI, web, and mobile dev.</p>
          <div className="cta">
            <a className="btn" href="/Resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
            <a className="btn secondary" href="https://github.com/Aurialedge" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div style={{marginTop:14}} className="pmeta">Contact: <a href="mailto:saperkar1862004@gmail.com">saperkar1862004@gmail.com</a> • +91-7249566615</div>
        </div>
        <div className="card" style={{marginTop:12}}>
          <h3 style={{margin:'0 0 8px 0'}}>Quick Links</h3>
          <div className="links">
            <a href="https://github.com/Aurialedge/cookiepedia-vite.git" target="_blank" rel="noreferrer">Cookiepedia Repo</a>
            <a href="https://github.com/Aurialedge/Stockie.git" target="_blank" rel="noreferrer">Stockie Repo</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <h3 style={{margin:0}}>Profile</h3>
          <p className="pmeta" style={{marginTop:8}}>B.Tech, Computer Science — IIIT Nagpur (Sept 2023 - Jun 2027). CGPA: 8.02</p>
          <div style={{marginTop:8}} className="skillsGrid">
            {Object.entries(SKILLS).slice(0,2).map(([k,v])=> (
              <div key={k} className="skillItem">
                <div style={{fontSize:13,fontWeight:700}}>{k}</div>
                <div style={{fontSize:12,color:'var(--muted)',marginTop:6}}>{v.slice(0,6).join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{marginTop:12}}>
          <h3 style={{margin:0}}>Achievements</h3>
          <ul className="achievements" style={{paddingLeft:18,marginTop:8}}>
            <li>Runner-up — GPT-3.5 Hackathon</li>
            <li>Runner-up — Abacus National Level</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Skills(){
  return (
    <div id="skills" className="container" style={{paddingTop:6}}>
      <h2>Skills</h2>
      <div className="card" style={{marginTop:12}}>
        <div className="skillsGrid">
          {Object.entries(SKILLS).map(([heading, arr]) => (
            <div key={heading}>
              <div style={{fontWeight:700}}>{heading}</div>
              <div style={{marginTop:8,display:'flex',flexWrap:'wrap',gap:8}}>
                {arr.map(s => <div key={s} className="tech">{s}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({p}){
  return (
    <div className="card projectCard">
      <img src={p.img} alt={p.imgAlt} className="projectImg" />
      <div style={{flex:1}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700}}>{p.title}</div>
          <div style={{fontSize:12}}><a href={p.repo} target="_blank" rel="noreferrer" style={{color:'var(--muted)'}}>Repo</a></div>
        </div>
        <div className="pmeta">{p.description}</div>
        <div className="techList">
          {p.tech.map(t => <div key={t} className="tech">{t}</div>)}
        </div>
      </div>
    </div>
  );
}

function Projects(){
  return (
    <div id="projects" className="container" style={{paddingTop:6}}>
      <h2>Projects</h2>
      <div className="projectsList" style={{marginTop:12}}>
        {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </div>
  );
}

function Contact(){
  return (
    <div id="contact" className="container" style={{paddingTop:6}}>
      <h2>Contact</h2>
      <div className="card contact">
        <div style={{fontWeight:700}}>Let's build something together</div>
        <div className="pmeta">Prefer email: <a href="mailto:saperkar1862004@gmail.com">saperkar1862004@gmail.com</a></div>
        <div style={{marginTop:12}}>
          <input placeholder="Your name" />
          <input placeholder="Your email" style={{marginTop:8}} />
          <textarea placeholder="Message" style={{marginTop:8, minHeight:100}} />
          <div style={{marginTop:8}}>
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>

      <div className="footer">
        © {new Date().getFullYear()} Shivraj Perkar — <span style={{color:'var(--muted)'}}>Full Stack & AI/ML</span>
      </div>
    </div>
  );
}

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
