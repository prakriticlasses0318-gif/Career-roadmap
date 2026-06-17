// Mermaid configuration
mermaid.initialize({ 
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true
    }
});

const careerTreeData = {
    all: `graph TD
        ROOT["<b>CLASS 12 SCIENCE<br/>PCM / PCMB</b>"]
        
        ROOT --> ACAD["<b>ACADEMIC & PURE SCIENCE</b><br/>(Blue Path)"]
        ROOT --> ENG["<b>TECHNICAL & ENGINEERING</b><br/>(Green Path)"]
        ROOT --> MED["<b>MEDICAL & ALLIED HEALTH</b><br/>(Purple Path)"]
        ROOT --> VOC["<b>VOCATIONAL & APPLIED TECH</b><br/>(Cyan Path)"]
        
        %% ACADEMIC & PURE SCIENCE
        ACAD --> ACAD_DEG["<b>B.Sc. Honours / M.Sc. / Ph.D.</b>"]
        ACAD_DEG --> ASTRO["<b>ASTROPHYSICS</b><br/>Research in space & galaxies"]
        ACAD_DEG --> QC["<b>QUANTUM COMPUTING</b><br/>Advanced computing research"]
        ACAD_DEG --> MAT["<b>MATERIALS SCIENCE</b><br/>New material development"]
        ACAD_DEG --> NUC["<b>NUCLEAR PHYSICS</b><br/>Nuclear research & development"]
        
        ASTRO --> UNI["<b>INSTITUTIONS</b><br/>IISc, IISERs, NISER, TIFR<br/>Delhi Univ, CMI"]
        QC --> UNI
        MAT --> UNI
        NUC --> UNI
        
        UNI --> EXAM1["<b>EXAMS</b><br/>CUET-UG, JEST<br/>GATE, JAM, JRF"]
        EXAM1 --> CAR1["<b>CAREERS</b><br/>Research Scientist<br/>University Professor<br/>Laboratory Head"]
        
        %% TECHNICAL & ENGINEERING
        ENG --> ENG_DEG["<b>B.Tech / M.Tech / Ph.D.</b>"]
        ENG_DEG --> PHOT["<b>PHOTONICS &<br/>OPTOELECTRONICS</b>"]
        ENG_DEG --> AERO["<b>AEROSPACE<br/>ENGINEERING</b>"]
        ENG_DEG --> ROBOT["<b>ROBOTICS &<br/>AUTOMATION</b>"]
        ENG_DEG --> SEMI["<b>SEMICONDUCTORS &<br/>MICROELECTRONICS</b>"]
        ENG_DEG --> RENEW["<b>RENEWABLE<br/>ENERGY</b>"]
        
        PHOT --> IIT["<b>INSTITUTIONS</b><br/>IIT Bombay, Delhi, Madras<br/>IIT Guwahati, NITs<br/>BITS Pilani, DTU"]
        AERO --> IIT
        ROBOT --> IIT
        SEMI --> IIT
        RENEW --> IIT
        
        IIT --> EXAM2["<b>EXAMS</b><br/>JEE Advanced<br/>JEE Main, BITSAT<br/>GATE"]
        EXAM2 --> CAR2["<b>CAREERS</b><br/>R&D Engineer<br/>Aerospace Engineer<br/>Robotics Engineer<br/>Tech Lead"]
        
        %% MEDICAL & ALLIED HEALTH
        MED --> MED_DEG["<b>B.Sc. Medical Tech<br/>M.Sc. Medical Physics</b>"]
        MED_DEG --> MRI["<b>MRI/CT TECH</b><br/>Medical imaging specialist"]
        MED_DEG --> RAD["<b>RADIOTHERAPY</b><br/>Cancer treatment technology"]
        MED_DEG --> NUCMED["<b>NUCLEAR MEDICINE</b><br/>Radioactive isotope therapy"]
        
        MRI --> AIIMS["<b>INSTITUTIONS</b><br/>AIIMS New Delhi, Mumbai<br/>PGIMER, CMC Vellore<br/>Tata Memorial"]
        RAD --> AIIMS
        NUCMED --> AIIMS
        
        AIIMS --> EXAM3["<b>EXAMS</b><br/>NEET-UG<br/>AIIMS Institutional<br/>CUET-UG"]
        EXAM3 --> CAR3["<b>CAREERS</b><br/>Medical Physicist<br/>Radiation Safety Officer<br/>Radiotherapist"]
        
        %% VOCATIONAL & APPLIED TECH
        VOC --> VOC_DEG["<b>Commercial Pilot License<br/>B.Sc. Aviation / Nautical</b>"]
        VOC_DEG --> PILOT["<b>COMMERCIAL AVIATION</b><br/>Pilot training"]
        VOC_DEG --> NAVY["<b>MERCHANT NAVY</b><br/>Maritime careers"]
        VOC_DEG --> GIS["<b>GIS & REMOTE SENSING</b><br/>Geospatial analysis"]
        
        PILOT --> IGRUA["<b>INSTITUTIONS</b><br/>IGRUA Rae Bareli<br/>Flying Academies<br/>IMU Campuses, IIRS"]
        NAVY --> IGRUA
        GIS --> IGRUA
        
        IGRUA --> EXAM4["<b>EXAMS</b><br/>IMU-CET<br/>IGRUA Test<br/>CUET-UG"]
        EXAM4 --> CAR4["<b>CAREERS</b><br/>Commercial Pilot<br/>Merchant Navy Officer<br/>GIS Analyst"]
        
        style ROOT fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#fff
        style ACAD fill:#1e3a8a,stroke:#2563eb,stroke-width:2px,color:#fff
        style ENG fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff
        style MED fill:#6b21a8,stroke:#a855f7,stroke-width:2px,color:#fff
        style VOC fill:#0c4a6e,stroke:#06b6d4,stroke-width:2px,color:#fff`,
    
    pcm: `graph TD
        ROOT["<b>CLASS 12 PCM</b><br/>(Without Biology)"]
        
        ROOT --> ACAD["<b>ACADEMIC & PURE SCIENCE</b>"]
        ROOT --> ENG["<b>TECHNICAL & ENGINEERING</b>"]
        
        ACAD --> ACAD_DEG["B.Sc. Honours / M.Sc. / Ph.D.<br/>IISc, IISERs, NISER, TIFR"]
        ACAD_DEG --> ASTRO["Astrophysics, Quantum Computing<br/>Materials Science, Nuclear Physics"]
        ASTRO --> EXAM1["CUET-UG, JEST, GATE, JAM, JRF"]
        EXAM1 --> CAR1["Research Scientist<br/>University Professor<br/>Laboratory Head"]
        
        ENG --> ENG_DEG["B.Tech / M.Tech / Ph.D.<br/>IITs, NITs, BITS, DTU"]
        ENG_DEG --> SPEC["Photonics, Aerospace, Robotics<br/>Semiconductors, Renewable Energy"]
        SPEC --> EXAM2["JEE Advanced, JEE Main, BITSAT"]
        EXAM2 --> CAR2["R&D Engineer<br/>Aerospace Engineer<br/>Robotics Engineer"]
        
        style ROOT fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#fff
        style ACAD fill:#1e3a8a,stroke:#2563eb,stroke-width:2px,color:#fff
        style ENG fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff`,
    
    pcmb: `graph TD
        ROOT["<b>CLASS 12 PCMB</b><br/>(With Biology)"]
        
        ROOT --> ACAD["<b>ACADEMIC & PURE SCIENCE</b>"]
        ROOT --> ENG["<b>TECHNICAL & ENGINEERING</b>"]
        ROOT --> MED["<b>MEDICAL & ALLIED HEALTH</b>"]
        ROOT --> BIO["<b>BIOLOGICAL SCIENCES</b>"]
        
        ACAD --> ACAD_DEG["B.Sc. Honours with Biology<br/>IISc, IISERs, NISER"]
        ACAD_DEG --> SPEC1["Biophysics, Biochemistry<br/>Molecular Biology, Genetics"]
        
        ENG --> ENG_DEG["B.Tech / M.Tech<br/>Biomedical Engineering"]
        
        MED --> MED_DEG["B.Sc. Medical Tech<br/>M.Sc. Medical Physics"]
        MED_DEG --> MED_SPEC["Medical Imaging, Radiotherapy<br/>Nuclear Medicine"]
        
        BIO --> BIO_DEG["B.Sc. Biology / B.Pharm<br/>MBBS (with Medical education)"]
        
        style ROOT fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#fff
        style ACAD fill:#1e3a8a,stroke:#2563eb,stroke-width:2px,color:#fff
        style ENG fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff
        style MED fill:#6b21a8,stroke:#a855f7,stroke-width:2px,color:#fff
        style BIO fill:#7c2d12,stroke:#ea580c,stroke-width:2px,color:#fff`,
    
    physics: `graph TD
        ROOT["<b>PHYSICS SPECIALIZATION</b><br/>Career Path"]
        
        ROOT --> PURE["Pure Physics Research"]
        ROOT --> APPLIED["Applied Physics & Engineering"]
        ROOT --> TECH["Technical & Technology"]
        
        PURE --> ASTROPH["Astrophysics &<br/>Cosmology"]
        PURE --> QUANTUM["Quantum Physics &<br/>Computing"]
        PURE --> NUCLEAR["Nuclear &<br/>Particle Physics"]
        
        APPLIED --> PHOTON["Photonics &<br/>Lasers"]
        APPLIED --> MATER["Materials<br/>Physics"]
        APPLIED --> PLASMA["Plasma<br/>Physics"]
        
        TECH --> SEMI["Semiconductor<br/>Engineering"]
        TECH --> AERO["Aerospace<br/>Engineering"]
        TECH --> RENEW["Renewable<br/>Energy"]
        
        ASTROPH --> CAREER["CAREERS:<br/>Research Scientist<br/>Astrophysicist<br/>Observatory Director<br/>University Professor"]
        QUANTUM --> CAREER
        NUCLEAR --> CAREER
        PHOTON --> CAREER2["CAREERS:<br/>Photonics Engineer<br/>Laser Specialist<br/>R&D Engineer<br/>Tech Lead"]
        MATER --> CAREER2
        PLASMA --> CAREER2
        SEMI --> CAREER3["CAREERS:<br/>Semiconductor Engineer<br/>Device Physicist<br/>Process Engineer<br/>Fab Manager"]
        AERO --> CAREER3
        RENEW --> CAREER3
        
        CAREER --> SALARY1["Salary Range:<br/>₹4-12 LPA (Starting)<br/>₹15-30 LPA (Senior)"]
        CAREER2 --> SALARY2["Salary Range:<br/>₹6-15 LPA (Starting)<br/>₹20-35 LPA (Senior)"]
        CAREER3 --> SALARY3["Salary Range:<br/>₹8-18 LPA (Starting)<br/>₹25-40 LPA (Senior)"]
        
        style ROOT fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#fff
        style PURE fill:#1e3a8a,stroke:#2563eb,stroke-width:2px,color:#fff
        style APPLIED fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff
        style TECH fill:#6b21a8,stroke:#a855f7,stroke-width:2px,color:#fff`
};

// Initialize Mermaid diagram
function loadDiagram(type = 'all') {
    const diagramElement = document.getElementById('mermaidDiagram');
    const diagram = careerTreeData[type] || careerTreeData.all;
    
    diagramElement.innerHTML = diagram;
    mermaid.contentLoaded();
}

// Event listeners for filter buttons
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Load corresponding diagram
        const streamType = this.dataset.filter;
        loadDiagram(streamType);
    });
});

// Initialize with 'all' diagram on page load
document.addEventListener('DOMContentLoaded', function() {
    loadDiagram('all');
    
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Export functionality
function exportAsImage() {
    const svg = document.querySelector('.mermaid svg');
    if (!svg) {
        alert('Please wait for the diagram to load first');
        return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgString = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'career-tree.png';
        link.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
}

// Print functionality
function printDiagram() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S for export
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        exportAsImage();
    }
    
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printDiagram();
    }
});

// Responsive handling
window.addEventListener('resize', function() {
    const container = document.querySelector('.diagram-container');
    if (container.offsetWidth < 600) {
        document.querySelector('.mermaid').style.fontSize = '0.8em';
    } else {
        document.querySelector('.mermaid').style.fontSize = '1em';
    }
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑ Top';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    background: var(--accent);
    color: var(--primary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    font-weight: bold;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Console greeting
console.log('%c🎓 Welcome to Class 12 Science Career Tree!', 'color: #38bdf8; font-size: 16px; font-weight: bold;');
console.log('%cExplore different career paths after 12th Science', 'color: #10b981; font-size: 12px;');
console.log('%cPress Ctrl+S to export diagram | Ctrl+P to print', 'color: #a855f7; font-size: 12px;');
