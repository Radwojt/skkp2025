// Team data array - sorted alphabetically by surname
const teamMembers = [
    { 
        name: "Maciej Aniserowicz", 
        image: "./photos/MaciejAniserowicz.webp",
        position: "CEO",
        company: "devstyle",
        website: "https://devstyle.pl",
        linkedin: "https://www.linkedin.com/in/maciejaniserowicz/",
        instagram: "https://www.instagram.com/maciej.aniserowicz/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null
    },
    { 
        name: "Aleksandra Benowska", 
        image: "./photos/AleksandraBenowska.webp",
        position: "Prezes Zarządu",
        company: "Fundacja Kanał Studencki",
        website: "https://kanalstudencki.pl/",
        linkedin: "https://www.linkedin.com/in/aleksandra-benowska/",
        instagram: "https://www.instagram.com/abenowska/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null
    },
    { 
        name: "Kamil Brzeziński", 
        image: "./photos/KamilBrzezinski.webp",
        position: "Programista, mentor",
        company: "Jak nauczyć się programowania",
        website: null,
        linkedin: null,
        instagram: "https://www.instagram.com/kamilbrzezinski",
        youtube: "https://youtube.com/jaknauczycsieprogramowania",
        twitter: null,
        tiktok: null,
        facebook: null
    },
{ 
        name: "Katarzyna Brzozowska", 
        image: "./photos/KatarzynaBrzozowska.webp",
        position: "Właścicielka",
        company: "Be Like Neo & Trinity",
        website: "https://belikeneoandtrinity.com/",
        linkedin: "https://www.linkedin.com/in/katarinabrzozowska/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: "https://www.facebook.com/belikeneoandtrinityfb"
    },
    { 
        name: "Bartosz Gałek", 
        image: "./photos/BartoszGalek.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/bartosz-galek/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Principal Software Engineer",
        company: "Allegro"
    },
    { 
        name: "Rafał Guźniczak", 
        image: "./photos/RafalGuzniczak.webp",
        website: "https://www.meetup.com/pl-PL/poznan-a11y-meetup/events/311534241/",
        linkedin: "https://www.linkedin.com/in/rafalguzniczak/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Allegro",
        position: "Senior Front-end Software Engineer"
    },
    { 
        name: "Anna Karoń", 
        image: "./photos/AnnaKaron.webp",
        website: "https://www.meetup.com/pl-PL/poznan-a11y-meetup/events/311534241/",
        linkedin: "https://www.linkedin.com/in/anna-karon/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Freelancer",
        company: "Accessibility Meetup Poznań"
    },
    { 
        name: "Krzysztof Kempiński", 
        image: "./photos/KrzysztofKempinski.webp",
        website: "https://porozmawiajmyoit.pl",
        linkedin: "https://www.linkedin.com/in/kkempinski/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Programista, Podcaster",
        company: "Porozmawiajmy o IT & SOLID.Jobs"
    },
    {
        name: "Natalia Kierczuk", 
        image: "./photos/NataliaKierczuk.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/natalia-kierczuk",
        instagram: "https://www.instagram.com/itbezkodu/",
        youtube: null,
        twitter: null,
        tiktok: "https://www.tiktok.com/@itbezkodu",
        facebook: null,
        company: null,
        position: "Analityk IT / Konsultant IT"
    },
    { 
        name: "Kacper Koza", 
        image: "./photos/KacperKoza.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/kacper-koza-352a5913b/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Senior Software Engineer",
        company: "Allegro"
    },
    { 
        name: "Natalia Król", 
        image: "./photos/NataliaKrol.webp",
        website: "https://kanalstudencki.pl/",
        linkedin: "https://www.linkedin.com/in/nataliakrolkn/",
        instagram: "https://www.instagram.com/natiskrol/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Członkini Zarządu",
        company: "Fundacja Kanał Studencki",
    },
    {
        name: "Aleksandra Kunysz", 
        image: "./photos/AleksandraKunysz.webp",
        website: "https://wypaleniewit.pl/",
        linkedin: "https://www.linkedin.com/in/akunysz/",
        instagram: "https://www.instagram.com/olaqnysz/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Wypalenie w IT",
        position: "Mentorka"
    },
    { 
        name: "Małgorzata (Rita) Łyczywek", 
        image: "./photos/MalgorzataLyczywek.webp",
        website: "https://flynerd.pl",
        linkedin: "https://www.linkedin.com/in/ritalyczywek/",
        instagram: "https://www.instagram.com/flynerdpl/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Lead Software Engineer",
        company: "Wizards of The Coast"
    },
    { 
        name: "Cezary Łysiak", 
        image: "./photos/CezaryLysiak.webp",
        website: "https://fabrykatestow.pl/",
        linkedin: "https://www.linkedin.com/in/cezary-%C5%82ysiak-%F0%9F%A7%99%E2%80%8D%E2%99%82%EF%B8%8F-28b461156/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Team Leader",
        company: "Fabryka Testów",
    },
    { 
        name: "Marcin Milewicz", 
        image: "./photos/MarcinMilewicz.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/marcinmilewicz/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Xebia",
        position: "Principal Developer / Team Leader"
    },
    { 
        name: "Bartek Miś", 
        image: "./photos/BartekMis.webp",
        website: "https://www.webdevinsider.pl/",
        linkedin: "https://www.linkedin.com/in/bartekmis/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Studio Sidekicks / Bigger Picture",
        position: "CTO"
    },
    { 
        name: "Aleksander Patschek", 
        image: "./photos/AleksanderPatschek.webp",
        website: "https://patschek.dev",
        linkedin: "https://www.linkedin.com/in/aleksanderpatschek/",
        instagram: "https://www.instagram.com/fsgeek/",
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Solution Architect",
        company: "The Software House"
    },
    {
        name: "Anita Przybył", 
        image: "./photos/AnitaPrzybyl.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/anita-przybyl/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Bottega IT Minds",
        position: "Trenerka kompetencji miękkich, Trenerka Leadership"
    },
    { 
        name: "Cezary Sanecki", 
        image: "./photos/CezarySanecki.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/cezary-sanecki/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Allegro",
        position: "Software Engineer"
    },
    { 
        name: "Artur Skowroński", 
        image: "./photos/ArturSkowronski.webp",
        website: "https://jvm-weekly.com",
        linkedin: "https://www.linkedin.com/in/arturskowronski/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        company: null,
        position: "Head of Java/Kotlin Development"
    },
    { 
        name: "Natalia Świątek-Nowak", 
        image: "./photos/NataliaSwiatekNowak.webp",
        website: "https://mentorkait.pl",
        linkedin: "https://www.linkedin.com/in/natalia-świątek-nowak",
        instagram: "https://www.instagram.com/mentorkait_pl",
        youtube: null,
        twitter: null,
        tiktok: "https://www.tiktok.com/@mentorkait_pl",
        facebook: "https://www.facebook.com/mentorka.it",
        company: "Mentorka IT",
        position: "Mentorka"
    },
    { 
        name: "Wojciech Trawiński", 
        image: "./photos/WojciechTrawinski.webp",
        website: "https://medium.com/javascript-everyday",
        linkedin: "https://www.linkedin.com/in/wojciech-trawiński/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Senior Angular Software Engineer",
        company: "XTB",
    },
    { 
        name: "Weronika Witek", 
        image: "./photos/WeronikaWitek.webp",
        website: null,
        linkedin: "https://www.linkedin.com/in/weronika-witek/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null,
        position: "Google Developer Groups",
        company: null
    },
    { 
        name: "Radek Wojtysiak", 
        image: "./photos/RadekWojtysiak.webp",
        website: null,
        linkedin: "https://linkedin.com/in/radekwojtysiak",
        instagram: "https://www.instagram.com/karieradevelopera/",
        youtube: "https://www.youtube.com/@KarieraDev",
        twitter: null,
        tiktok: null,
        facebook: null,
        company: "Allegro",
        position: "Senior Front-end Software Engineer"
    },
    { 
        name: "Anna Wójcik", 
        image: "./photos/AnnaWojcik.webp",
        website: "https://paniodprogramowania.pl/",
        linkedin: "https://www.linkedin.com/in/anna-wojcik-b91717ab/",
        instagram: "https://www.instagram.com/pani.od.programowania/",
        youtube: "https://www.youtube.com/@pani.od.programowania",
        twitter: null,
        tiktok: null,
        facebook: "https://www.facebook.com/profile.php?id=100064287754362",
        position: "Programistka, Mentorka, Założycielka firmy",
        company: "Pani Od Programowania"
    },
    { 
        name: "Dominika Zając", 
        image: "./photos/DominikaZajac.webp",
        website: "https://sessionize.com/domi-zajac",
        linkedin: "https://www.linkedin.com/in/dominikazajac/",
        instagram: null,
        youtube: null,
        twitter: null,
        tiktok: null,
        facebook: null
    }
];

// Function to generate team members
function generateTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) {
        console.error('Team grid element not found');
        return;
    }
    
    console.log('Generating team members, found', teamMembers.length, 'members');
    
    teamMembers.forEach(member => {
        const teamMemberDiv = document.createElement('div');
        teamMemberDiv.className = 'team-member';
        
        // Generate social links dynamically
        let socialLinksHTML = '';
        
        if (member.website) {
            socialLinksHTML += `<a href="${member.website}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i></a>`;
        }
        if (member.linkedin) {
            socialLinksHTML += `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>`;
        }
        if (member.instagram) {
            socialLinksHTML += `<a href="${member.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>`;
        }
        if (member.youtube) {
            socialLinksHTML += `<a href="${member.youtube}" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>`;
        }
        if (member.twitter) {
            socialLinksHTML += `<a href="${member.twitter}" target="_blank" rel="noopener noreferrer"><i class="fab fa-x-twitter"></i></a>`;
        }
        if (member.tiktok) {
            socialLinksHTML += `<a href="${member.tiktok}" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok"></i></a>`;
        }
        if (member.facebook) {
            socialLinksHTML += `<a href="${member.facebook}" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>`;
        }
        
        teamMemberDiv.innerHTML = `
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <h3>${member.name}</h3>
            <div class="member-info">
                ${member.position ? `<p class="member-position">${member.position}</p>` : ''}
                ${member.company ? `<p class="member-company">@ ${member.company}</p>` : ''}
            </div>
            <div class="social-links">
                ${socialLinksHTML}
            </div>
        `;
        
        teamGrid.appendChild(teamMemberDiv);
        
        // Ensure visibility on mobile
        if (window.innerWidth <= 768) {
            teamMemberDiv.style.opacity = '1';
            teamMemberDiv.style.visibility = 'visible';
            teamMemberDiv.style.display = 'block';
        }
    });
    
    // Double-check team grid is visible on mobile after generation
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach(member => {
                member.style.opacity = '1';
                member.style.visibility = 'visible';
                member.style.display = 'block';
            });
            console.log('Force-fixed team member visibility on mobile');
        }, 500);
    }
}


// Function to style agenda table automatically
function styleAgendaTable() {
    const agendaTable = document.querySelector('.agenda-table tbody');
    if (!agendaTable) return;
    
    const rows = agendaTable.querySelectorAll('tr');
    rows.forEach(row => {
        const dateCell = row.querySelector('td:first-child');
        const topicCell = row.querySelector('td:nth-child(3)');
        
        if (dateCell && !dateCell.querySelector('.agenda-date')) {
            // Style date cell
            const dateText = dateCell.textContent.trim();
            if (dateText && !dateText.includes('Wkrótce')) {
                // Split date and time
                const dateTimeMatch = dateText.match(/^(\d{2}\.\d{2})(?:\s+godz\.\s+(\d{2}:\d{2}))?/);
                if (dateTimeMatch) {
                    const date = dateTimeMatch[1];
                    const time = dateTimeMatch[2];
                    
                    if (time) {
                        dateCell.innerHTML = `<span class="agenda-date">${date}</span> <span class="agenda-time">godz. ${time}</span>`;
                    } else {
                        dateCell.innerHTML = `<span class="agenda-date">${date}</span>`;
                    }
                }
            }
        }
        
        if (topicCell && !topicCell.querySelector('.agenda-topic') && !topicCell.querySelector('.empty-slot')) {
            // Style topic cell (only if it's not empty and doesn't have empty-slot class)
            const topicText = topicCell.textContent.trim();
            if (topicText && topicText !== '') {
                topicCell.innerHTML = `<span class="agenda-topic">${topicText}</span>`;
            }
        }
    });
}

// Snowflakes effect
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '✽', '✾', '✿'];
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        
        // Random position and properties
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        
        snowflakesContainer.appendChild(snowflake);
        
        // Remove snowflake after animation completes
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, 5000);
    }
    
    // Create initial snowflakes
    for (let i = 0; i < 15; i++) {
        setTimeout(createSnowflake, i * 200);
    }
    
    // Continue creating snowflakes
    setInterval(createSnowflake, 300);
}

// Partners data
const partners = [
    { logo: "./partners/AccessibilityMeetup.svg", link: "https://www.linkedin.com/company/accessibility-meetup-poznan/", alt: "Accessibility Meetup Poznań" },
    { logo: "./partners/SolidJobs.webp", link: "https://solid.jobs/", alt: "Solid.Jobs" },
    { logo: "./partners/jsPoland.webp", link: "https://js-poland.pl/", alt: "JS Poland" },
    { logo: "./partners/ngPoland.webp", link: "https://ng-poland.pl/", alt: "NG Poland" },
    { logo: "./partners/aiPoland.webp", link: "https://ai-poland.pl/", alt: "AI Poland" },
    { logo: "./partners/polskieProgramistki.webp", link: "https://polskieprogramistki.pl/", alt: "Polskie Programistki" },
    { logo: "./partners/programujdziewczyno.webp", link: "https://www.facebook.com/groups/programujdziewczyno/?locale=pl_PL", alt: "Programuj Dziewczyno!" },
    { logo: "./partners/HoryzontDanych.webp", link: "https://www.meetup.com/pl-PL/poznanski-horyzont-danych/", alt: "Poznański Horyzont Danych" },
    { logo: "./partners/gdgPoznan.webp", link: "https://gdg.community.dev/gdg-poznan/", alt: "GDG Poznań" },
    { logo: "./partners/poit.webp", link: "https://porozmawiajmyoit.pl/", alt: "Porozmawiajmy o IT Podcast" },
    { logo: "./partners/nofluffjobs.webp", link: "https://nofluffjobs.com/pl", alt: "No Fluff Jobs" },
    { logo: "./partners/helion.webp", link: "http://helion.pl/", alt: "Helion" },
    { logo: "./partners/wjug.webp", link: "https://www.meetup.com/pl-PL/warszawa-jug/", alt: "Warsaw Java User Group" },
    { logo: "./partners/devstyle.svg", link: "https://devstyle.pl/", alt: "Devstyle.pl" },
    { logo: "./partners/flynerd.webp", link: "https://flynerd.pl/", alt: "FlyNerd Blog" },
    { logo: "./partners/nerdCodingGang.svg", link: "https://www.facebook.com/groups/1427451931347639/", alt: "Nerds Coding Gang" },
    { logo: "./partners/jaktestowacpl.webp", link: "https://jaktestowac.pl", alt: "JakTestować.pl" },
    { logo: "./partners/ai_testers.webp", link: "https://aitesters.pl/", alt: "AI Testers" },
    { logo: "./partners/fundacjaKanalStudencki.svg", link: "https://kanalstudencki.pl/", alt: "Fundacja Kanał Studencki" },
    { logo: "./partners/softskilledlaprogramistow.webp", link: "https://softskilledlaprogramistow.pl/", alt: "Soft Skille Dla Programistów" },
    { logo: "./partners/tech_leaders.svg", link: "https://techleaders.eu/", alt: "Tech Leaders" },
    { logo: "./partners/put_net.svg", link: "https://net.cs.put.poznan.pl/", alt: "PUT .Net - Koło naukowe Politechniki Poznańskiej" },
    { logo: "./partners/PP_WIiT.svg", link: "https://cat.put.poznan.pl/", alt: "Politechnika Poznańska - Wydział Informatyki i Telekomunikacji" },
    { logo: "./partners/crossweb.webp", link: "https://crossweb.pl/", alt: "Crossweb" },
    { logo: "./partners/wakeup.webp", link: "https://www.wakeupandcode.pl/", alt: "Wake Up and Code" },
    { logo: "./partners/fabrykaTestow.webp", link: "https://www.fabrykatestow.pl/", alt: "Fabryka Testów" },
    { logo: "./partners/mikrus.webp", link: "https://mikr.us/", alt: "mikr.us - Serwery VPS dla pasjonatów" },
    { logo: "./partners/eldorado.svg", link: "https://czyjesteldorado.pl/", alt: "Czy jest eldorado?" },
    { logo: "./partners/allegro_tech.webp", link: "https://allegro.tech", alt: "Allegro Tech" },
    { logo: "./partners/codeme.webp", link: "https://codeme.pl/", alt: "CODE:ME" },
    { logo: "./partners/future_collars.webp", link: "https://futurecollars.com/", alt: "Future Collars" },
    { logo: "./partners/magazyn_programista.webp", link: "https://programistamag.pl/", alt: "Magazyn Programista" },
    { logo: "./partners/meetjs.svg", link: "https://meetjs.pl/", alt: "Meet.js" },
    { logo: "./partners/bki.webp", link: "https://bki.org.pl/", alt: "Bydgoski Klaster Informatyczny" },
    { logo: "./partners/xebia.webp", link: "https://xebia.com/", alt: "Xebia" },
    { logo: "./partners/hacknation.webp", link: "https://hacknation.pl/", alt: "HackNation" },
    { logo: "./partners/prasowka.svg", link: "https://prasowka.eu", alt: "Prasówka" },
    { logo: "./partners/theprotocol.svg", link: "https://theprotocol.it/", alt: "The:Protocol.it" },
    { logo: "./partners/tsh.webp", link: "https://tsh.io/", alt: "The Software House" },
    { logo: "./partners/taby_spacje.webp", link: "https://tsh.io/taby-vs-spacje", alt: "Taby vs Spacje Podcast" },
    { logo: "./partners/42_Warsaw.webp", link: "https://42warsaw.pl/en/", alt: "42 Warsaw" },
    { logo: "./partners/dataart.webp", link: "https://www.dataart.team/pl", alt: "DataArt" },
    { logo: "./partners/inzynier_domu.svg", link: "https://www.instagram.com/inzynier.domu/", alt: "Inżynier Domu" },
    { logo: "./partners/sfi.webp", link: "https://sfi.pl/", alt: "Studencki Festiwal Informatyczny" },
    { logo: "./partners/virtuslab.webp", link: "https://virtuslab.com/", alt: "Virtuslab" },
    { logo: "./partners/softwaremill.webp", link: "https://softwaremill.com/", alt: "SoftwareMill" },
    { logo: "./partners/jlabs.webp", link: "https://www.j-labs.pl/", alt: "J-Labs" },
    { logo: "./partners/uczmnie.webp", link: "https://www.uczmnie.pl/", alt: "uczmnie.pl" },
    { logo: "./partners/gft.webp", link: "https://jobs.gft.com/Poland/go/poland/4413301/", alt: "GFT Technologies" },
    { logo: "./partners/jobsy.webp", link: "https://jobsy.it", alt: "Jobsy" },
    { logo: "./partners/sjsi.webp", link: "http://www.sjsi.org", alt: "Stowarzyszenie Jakości Systemów Informatycznych" },
    { logo: "./partners/ubb.webp", link: "https://www.instagram.com/ubb_swiat", alt: "UBB_Świat" },
];

// Generate partners
function generatePartners() {
    const partnersGrid = document.getElementById('partners-grid');
    if (!partnersGrid) return;
    
    partners.forEach(partner => {
        const partnerDiv = document.createElement('div');
        partnerDiv.className = 'partner-item';
        
        partnerDiv.innerHTML = `
            <a href="${partner.link}" target="_blank" rel="noopener noreferrer" class="partner-link">
                <img src="${partner.logo}" alt="${partner.alt}" loading="lazy">
            </a>
        `;
        
        partnersGrid.appendChild(partnerDiv);
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Generate team members
    generateTeamMembers();
    
    // Generate partners
    generatePartners();
    
    // Style agenda table
    styleAgendaTable();
    
    // Create snowflakes effect
    createSnowflakes();
    // Smooth scrolling for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Add intersection observer for fade-in animations
    // Special mobile handling to prevent team section opacity issues
    const isMobile = window.innerWidth <= 768;
    
    const observerOptions = {
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section entering view:', entry.target.className);
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.classList.contains('team-section') && isMobile) {
            // Mobile: Force team section visibility immediately, no animation
            section.style.cssText = 'opacity: 1 !important; transform: translateY(0) !important; transition: none !important; visibility: visible !important;';
            console.log('Mobile team section forced visible');
            
            // Also force team grid and members visibility
            setTimeout(() => {
                const teamGrid = section.querySelector('.team-grid');
                const teamMembers = section.querySelectorAll('.team-member');
                
                if (teamGrid) {
                    teamGrid.style.cssText = 'opacity: 1 !important; transform: none !important; visibility: visible !important; display: grid !important;';
                    console.log('Team grid forced visible');
                }
                
                teamMembers.forEach((member, index) => {
                    member.style.cssText = 'opacity: 1 !important; transform: none !important; visibility: visible !important; display: block !important;';
                    console.log(`Team member ${index} forced visible`);
                });
            }, 100);
        } else {
            // Desktop or non-team sections: normal animation
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });

    // Additional mobile team section safety check
    if (isMobile) {
        // Multiple checks to ensure team visibility
        [500, 1000, 2000].forEach(delay => {
            setTimeout(() => {
                const teamSection = document.querySelector('.team-section');
                const teamGrid = document.querySelector('.team-grid');
                const teamMembers = document.querySelectorAll('.team-member');
                
                if (teamSection) {
                    teamSection.style.cssText = 'opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important;';
                }
                
                if (teamGrid) {
                    teamGrid.style.cssText = 'opacity: 1 !important; visibility: visible !important; transform: none !important; display: grid !important;';
                }
                
                teamMembers.forEach(member => {
                    member.style.cssText = 'opacity: 1 !important; visibility: visible !important; transform: none !important; display: block !important;';
                });
                
                console.log(`Mobile team visibility check at ${delay}ms - Team section: ${!!teamSection}, Grid: ${!!teamGrid}, Members: ${teamMembers.length}`);
            }, delay);
        });
    }
    
    // Handle window resize/rotation
    window.addEventListener('resize', function() {
        const teamSection = document.querySelector('.team-section');
        if (teamSection && window.innerWidth <= 768 && teamSection.style.opacity === '0') {
            teamSection.style.opacity = '1';
            teamSection.style.transform = 'translateY(0)';
        }
    });

    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Add hover effects to team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default - let the link work normally
            // Just add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
        z-index: 0;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .social-links a {
        position: relative;
        overflow: hidden;
    }
    
    .calendar-btn {
        background: linear-gradient(135deg, #009f67 0%, #2d5a3d 100%);
        border: none;
        color: white;
        padding: 8px 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 159, 103, 0.2);
        min-width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .calendar-btn:hover {
        background: linear-gradient(135deg, #2d5a3d 0%, #009f67 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 159, 103, 0.3);
    }
    
    .calendar-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 159, 103, 0.2);
    }
    
    .calendar-btn i {
        font-size: 0.85rem;
    }
    
    /* Responsive styles for calendar buttons */
    @media (max-width: 768px) {
        .calendar-btn {
            padding: 6px 8px;
            font-size: 0.8rem;
            min-width: 32px;
            height: 32px;
        }
        
        .calendar-btn i {
            font-size: 0.75rem;
        }
    }
    
    @media (max-width: 480px) {
        .calendar-btn {
            padding: 4px 6px;
            font-size: 0.7rem;
            min-width: 28px;
            height: 28px;
        }
        
        .calendar-btn i {
            font-size: 0.7rem;
        }
    }
    
    /* Red download button styles */
    .download-btn-red {
        background: linear-gradient(135deg, #ff3838 0%, #cc1111 100%) !important;
        box-shadow: 0 5px 15px rgba(255, 56, 56, 0.3) !important;
        border: none !important;
        color: white !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        transition: all 0.3s ease !important;
    }
    
    .download-btn-red:hover {
        background: linear-gradient(135deg, #cc1111 0%, #ff3838 100%) !important;
        transform: translateY(-3px) !important;
        box-shadow: 0 8px 25px rgba(255, 56, 56, 0.4) !important;
        color: white !important;
        text-decoration: none !important;
    }
    
    .download-btn-red:active {
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 15px rgba(255, 56, 56, 0.3) !important;
    }
    
    .download-btn-red i {
        margin-right: 8px;
        color: white !important;
    }
    
    /* Download buttons container styles */
    .download-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 15px;
    }
    
    /* Responsive styles for download buttons */
    @media (max-width: 768px) {
        .download-buttons {
            gap: 12px;
            flex-direction: column;
            align-items: center;
        }
    }
    
    @media (max-width: 480px) {
        .download-buttons {
            gap: 10px;
        }
        
        .download-btn {
            width: 100%;
            max-width: 200px;
        }
    }
    
    /* Playlist button styles */
    .playlist-btn {
        background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
        border: none;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(255, 0, 0, 0.2);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }
    
    .playlist-btn:hover {
        background: linear-gradient(135deg, #cc0000 0%, #ff0000 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
        color: white;
        text-decoration: none;
    }
    
    .playlist-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(255, 0, 0, 0.2);
    }
    
    .playlist-btn i {
        margin-right: 8px;
        font-size: 0.9rem;
    }
    
    /* Responsive styles for playlist button */
    @media (max-width: 768px) {
        .playlist-btn {
            padding: 6px 10px;
            font-size: 0.8rem;
        }
        
        .playlist-btn i {
            font-size: 0.8rem;
            margin-right: 6px;
        }
    }
    
    @media (max-width: 480px) {
        .playlist-btn {
            padding: 4px 8px;
            font-size: 0.7rem;
        }
        
        .playlist-btn i {
            font-size: 0.7rem;
            margin-right: 4px;
        }
    }
    
    /* YouTube button styles */
    .youtube-btn {
        background: linear-gradient(135deg, #009f67 0%, #2d5a3d 100%);
        border: none;
        color: white;
        padding: 8px 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 159, 103, 0.2);
        min-width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-left: 8px;
    }
    
    .youtube-btn:hover {
        background: linear-gradient(135deg, #2d5a3d 0%, #009f67 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 159, 103, 0.3);
        color: white;
        text-decoration: none;
    }
    
    .youtube-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 159, 103, 0.2);
    }
    
    .youtube-btn i {
        font-size: 0.85rem;
    }
    
    /* Responsive styles for YouTube buttons */
    @media (max-width: 768px) {
        .youtube-btn {
            padding: 6px 8px;
            font-size: 0.8rem;
            min-width: 32px;
            height: 32px;
            margin-left: 6px;
        }
        
        .youtube-btn i {
            font-size: 0.75rem;
        }
    }
    
    @media (max-width: 480px) {
        .youtube-btn {
            padding: 4px 6px;
            font-size: 0.7rem;
            min-width: 28px;
            height: 28px;
            margin-left: 4px;
        }
        
        .youtube-btn i {
            font-size: 0.7rem;
        }
    }
    
    /* Agenda header styles */
    .agenda-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    .agenda-header h2 {
        margin: 0;
        text-align: left;
    }
    
    .agenda-buttons {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    /* ICS button styles */
    .ics-btn {
        background: linear-gradient(135deg, #009f67 0%, #2d5a3d 100%);
        border: none;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 3px 10px rgba(0, 159, 103, 0.3);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }
    
    .ics-btn:hover {
        background: linear-gradient(135deg, #2d5a3d 0%, #009f67 100%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 159, 103, 0.4);
    }
    
    .ics-btn:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(0, 159, 103, 0.3);
    }
    
    .ics-btn i {
        margin-right: 10px;
        font-size: 1.1rem;
    }
    
    /* Channel button styles */
    .channel-btn {
        background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
        border: none;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 3px 10px rgba(255, 0, 0, 0.3);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }
    
    .channel-btn:hover {
        background: linear-gradient(135deg, #cc0000 0%, #ff0000 100%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
        color: white;
        text-decoration: none;
    }
    
    .channel-btn:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(255, 0, 0, 0.3);
    }
    
    .channel-btn i {
        margin-right: 10px;
        font-size: 1.1rem;
    }
    
    /* Responsive styles for agenda header */
    @media (max-width: 768px) {
        .agenda-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
        
        .agenda-header h2 {
            text-align: center;
            width: 100%;
        }
        
        .agenda-buttons {
            align-self: center;
            justify-content: center;
            gap: 12px;
        }
        
        .ics-btn,
        .channel-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
        }
        
        .ics-btn i,
        .channel-btn i {
            margin-right: 8px;
            font-size: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .agenda-header {
            gap: 12px;
        }
        
        .agenda-buttons {
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }
        
        .ics-btn,
        .channel-btn {
            padding: 8px 14px;
            font-size: 0.8rem;
            width: 100%;
            max-width: 200px;
        }
        
        .ics-btn i,
        .channel-btn i {
            margin-right: 6px;
            font-size: 0.9rem;
        }
    }
    
    /* Organizer signature styles */
    .organizer-signature {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 20px;
        justify-content: center;
    }
    
    .organizer-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #009f67;
        flex-shrink: 0;
    }
    
    .organizer-signature p {
        margin: 0;
        font-style: italic;
        color: #666;
    }
    
    /* Responsive styles for organizer signature */
    @media (max-width: 768px) {
        .organizer-signature {
            flex-direction: column;
            gap: 10px;
            text-align: center;
        }
        
        .organizer-photo {
            width: 60px;
            height: 60px;
        }
    }
    
    @media (max-width: 480px) {
        .organizer-signature {
            gap: 8px;
        }
        
        .organizer-photo {
            width: 50px;
            height: 50px;
        }
    }
    
    /* Dual speakers styles */
    .dual-speakers {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 200px;
    }
    
    .dual-speakers .speaker-info {
        display: flex;
        align-items: center;
        gap: 12px;
        white-space: nowrap;
    }
    
    .dual-speakers .speaker-info strong {
        font-size: 1rem;
        line-height: 1.2;
        font-weight: 600;
    }
    
    .dual-speakers .speaker-photo {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
    }
    
    /* Responsive styles for dual speakers */
    @media (max-width: 768px) {
        .dual-speakers {
            min-width: 150px;
            gap: 8px;
        }
        
        .dual-speakers .speaker-info {
            gap: 8px;
        }
        
        .dual-speakers .speaker-info strong {
            font-size: 0.9rem;
        }
        
        .dual-speakers .speaker-photo {
            width: 32px;
            height: 32px;
        }
    }
    
    @media (max-width: 480px) {
        .dual-speakers {
            min-width: 120px;
            gap: 6px;
        }
        
        .dual-speakers .speaker-info {
            gap: 6px;
        }
        
        .dual-speakers .speaker-info strong {
            font-size: 0.7rem;
        }
        
        .dual-speakers .speaker-photo {
            width: 28px;
            height: 28px;
        }
    }
    
    /* Team member info styles */
    .member-info {
        margin-bottom: 10px;
    }
    
    .member-position,
    .member-company {
        margin: 0;
        font-size: 0.75rem;
        line-height: 1.3;
        color: #a1a1a1ff;
    }
    
    .member-position {
        margin-bottom: 2px;
        font-weight: 500;
    }
    
    .member-company {
        font-weight: 400;
        font-style: italic;
    }
    
    /* Responsive styles for member info */
    @media (max-width: 768px) {
        .member-position,
        .member-company {
            font-size: 0.8rem;
        }
    }
    
    @media (max-width: 480px) {
        .member-position,
        .member-company {
            font-size: 0.75rem;
        }
    }
    
    /* Footer styles */
    .footer-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 30px 20px;
    }
    
    /* Press note button styles */
    .press-note-btn {
        background: linear-gradient(135deg, #009f67 0%, #2d5a3d 100%);
        border: none;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 3px 10px rgba(0, 159, 103, 0.3);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }
    
    .press-note-btn:hover {
        background: linear-gradient(135deg, #2d5a3d 0%, #009f67 100%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 159, 103, 0.4);
        color: white;
        text-decoration: none;
    }
    
    .press-note-btn:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(0, 159, 103, 0.3);
    }
    
    .press-note-btn i {
        margin-right: 10px;
        font-size: 1.1rem;
    }
    
    /* Responsive styles for press note button */
    @media (max-width: 768px) {
        .footer-bottom {
            gap: 15px;
            padding: 25px 15px;
        }
        
        .press-note-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
        }
        
        .press-note-btn i {
            margin-right: 8px;
            font-size: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .footer-bottom {
            gap: 12px;
            padding: 20px 10px;
        }
        
        .press-note-btn {
            padding: 8px 14px;
            font-size: 0.8rem;
        }
        
        .press-note-btn i {
            margin-right: 6px;
            font-size: 0.9rem;
        }
    }
`;
document.head.appendChild(style);

// Google Calendar Integration Function
function addToGoogleCalendar(startDate, endDate, title, description, location) {
    // Format dates for Google Calendar URL
    const formatDate = (dateString) => {
        return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    
    // Build Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
        text: title,
        dates: `${start}/${end}`,
        details: description + '\n\nDodaj wydarzenie do swojego kalendarza, aby nie przegapić prezentacji! 🎄 Link do prezentacji znajdziesz na https://kalendarzprogramisty.pl',
        location: location,
        ctz: 'Europe/Warsaw'
    });
    
    const url = `${baseUrl}&${params.toString()}`;
    window.open(url, '_blank');
}

// Download ICS file with all events
function downloadAllEventsICS() {
    // All events data
    const events = [
        { start: '2025-11-28T10:00:00', end: '2025-11-28T11:00:00', title: 'SKKP 2025 - Nie polegaj tylko na papierowym CV. Wykreuj swój profil kandydata na LinkedIn', speaker: 'Radek Wojtysiak x SOLID.Jobs', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-01T19:00:00', end: '2025-12-01T19:30:00', title: 'SKKP 2025 - Ceremonia otwarcia', speaker: 'Radek Wojtysiak', description: 'Start akcji SKKP 2025' },
        { start: '2025-12-01T19:30:00', end: '2025-12-01T20:30:00', title: 'Z czym NAPRAWDĘ wiążą się Agentic AI na produkcji', speaker: 'Artur Skowroński', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-02T20:00:00', end: '2025-12-02T21:00:00', title: 'Jak się uczyć 3x szybciej w czasach, gdy utrzymanie skupienia jest 5x trudniejsze?', speaker: 'Kamil Brzeziński', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-03T19:00:00', end: '2025-12-03T20:00:00', title: 'Od pomysłu do kodu: jak powstają projekty IT w praktyce?', speaker: 'Natalia Kierczuk', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-04T18:00:00', end: '2025-12-04T19:00:00', title: 'Prosta droga branży IT do wypalenia: Jak można pracować inaczej?', speaker: 'Aleksandra Kunysz', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-05T17:00:00', end: '2025-12-05T18:00:00', title: 'Jak uczyć się Google Cloud przy użyciu dostępnych narzędzi?', speaker: 'Weronika Witek', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-06T18:00:00', end: '2025-12-06T19:00:00', title: 'Zacznij karierę w IT mówili ..., będzie fajnie mówili. Co Juniorom radzą pracodawcy?', speaker: 'Natalia Król, Aleksandra Benowska', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-07T18:00:00', end: '2025-12-07T19:00:00', title: 'Kim będziesz za 5 lat? Jak odnaleźć się na rynku pracy w czasach rewolucji AI?', speaker: 'Katarzyna Brzozowska', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-08T18:00:00', end: '2025-12-08T19:00:00', title: 'Marka osobista w IT. Jak ją zbudować i wykorzystać', speaker: 'Krzysztof Kempiński', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-09T19:00:00', end: '2025-12-09T20:00:00', title: 'Debugging kariery w IT', speaker: 'Natalia Świątek-Nowak', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-10T18:00:00', end: '2025-12-10T19:00:00', title: 'Filary dostępności na froncie - jak tworzyć dostępne aplikacje webowe', speaker: 'Anna Karoń & Rafał Guźniczak', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-11T19:00:00', end: '2025-12-11T20:00:00', title: 'Tajna Broń w Twojej Karierze IT', speaker: 'Anita Przybył', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-12T20:30:00', end: '2025-12-12T21:30:00', title: 'Po 8 latach wróciłem do kodu dzięki LLMom i Gangowi Kodziaków', speaker: 'Maciej Aniserowicz', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-13T19:00:00', end: '2025-12-13T20:00:00', title: 'Open Source - dlaczego warto?', speaker: 'Bartosz Gałek', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-14T17:00:00', end: '2025-12-14T18:00:00', title: 'Z budowy do IT. Nie bój się działać!', speaker: 'Cezary Sanecki', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-15T19:00:00', end: '2025-12-15T20:00:00', title: 'MCP Deep Dive: od teorii po bezpieczne serwery z OAuth', speaker: 'Aleksander Patschek', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-16T19:00:00', end: '2025-12-16T20:00:00', title: 'Wydajny frontend z Google Tag Manager i Cookie Consent Mode V2', speaker: 'Bartek Miś', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-17T17:00:00', end: '2025-12-17T18:00:00', title: 'Hello World, goodbye anonimowość, czyli budowanie marki osobistej programisty', speaker: 'Marcin Milewicz', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-18T20:00:00', end: '2025-12-18T21:00:00', title: 'Twój zespół nie potrzebuje strażaka. Potrzebuje architekta.', speaker: 'Cezary Łysiak', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-19T17:00:00', end: '2025-12-19T18:00:00', title: '10 tips to improve code review process', speaker: 'Wojciech Trawiński', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-20T19:00:00', end: '2025-12-20T20:00:00', title: 'Jetbrains IDE: beyond the shift-shift', speaker: 'Kacper Koza', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-21T18:00:00', end: '2025-12-21T19:00:00', title: 'Długo pracujesz w IT, a nadal nie czujesz się pewnie? Czas to zmienić!', speaker: 'Anna Wójcik', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-22T18:00:00', end: '2025-12-22T19:00:00', title: 'Chrome DevTools', speaker: 'Dominika Zając', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-23T18:00:00', end: '2025-12-23T19:00:00', title: 'ADR: dlaczego potrzebujesz Architecture Decision Record w swoim projekcie?', speaker: 'Małgorzata Łyczywek', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-24T10:00:00', end: '2025-12-24T11:00:00', title: 'Tajniki programistycznej rekrutacji technicznej', speaker: 'Radek Wojtysiak', description: 'Prezentacja w ramach SKKP 2025' },
        { start: '2025-12-24T11:00:00', end: '2025-12-24T12:00:00', title: 'Podsumowanie akcji', speaker: 'Radek Wojtysiak', description: 'Zakończenie SKKP 2025' }
    ];

    // Format date for ICS
    const formatICSDate = (dateString) => {
        return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    // Generate ICS content
    let icsContent = 'BEGIN:VCALENDAR\r\n';
    icsContent += 'VERSION:2.0\r\n';
    icsContent += 'PRODID:-//SKKP 2025//Calendar//PL\r\n';
    icsContent += 'CALSCALE:GREGORIAN\r\n';
    icsContent += 'METHOD:PUBLISH\r\n';
    icsContent += 'X-WR-CALNAME:Świąteczny Kalendarz Kariery Programisty 2025\r\n';
    icsContent += 'X-WR-CALDESC:Wszystkie prezentacje SKKP 2025 - 24 dni bezpłatnych prezentacji IT\r\n';
    icsContent += 'X-WR-TIMEZONE:Europe/Warsaw\r\n';

    events.forEach((event, index) => {
        const uid = `skkp2025-${index + 1}@kalendarzprogramisty.pl`;
        const dtstart = formatICSDate(event.start);
        const dtend = formatICSDate(event.end);
        const summary = event.title;
        const description = `${event.speaker} - ${event.description}\\n\\nŚwiateczny Kalendarz Kariery Programisty 2025\\nLink do prezentacji: https://kalendarzprogramisty.pl\\n\\n🎄 Nie przegap tej prezentacji!`;
        
        icsContent += 'BEGIN:VEVENT\r\n';
        icsContent += `UID:${uid}\r\n`;
        icsContent += `DTSTART:${dtstart}\r\n`;
        icsContent += `DTEND:${dtend}\r\n`;
        icsContent += `SUMMARY:${summary}\r\n`;
        icsContent += `DESCRIPTION:${description}\r\n`;
        icsContent += `LOCATION:Online - https://kalendarzprogramisty.pl\r\n`;
        icsContent += `URL:https://kalendarzprogramisty.pl\r\n`;
        icsContent += 'STATUS:CONFIRMED\r\n';
        icsContent += 'TRANSP:OPAQUE\r\n';
        icsContent += `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z\r\n`;
        icsContent += 'END:VEVENT\r\n';
    });

    icsContent += 'END:VCALENDAR\r\n';

    // Create and download file
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'SKKP2025-Kalendarz-Programisty.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
}
