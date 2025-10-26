// Hamburger menu toggle
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.hamburger-menu')) {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close menu when clicking a link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Profile Switching Functionality
const profileButtons = document.querySelectorAll('.profile-btn');
const profileSections = document.querySelectorAll('.profile-section');

profileButtons.forEach(button => {
  button.addEventListener('click', () => {
    const profileType = button.getAttribute('data-profile');
    
    // Remove active class from all buttons and sections
    profileButtons.forEach(btn => btn.classList.remove('active'));
    profileSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(profileType).classList.add('active');
  });
});

// Communication Tools Switching Functionality
const communicationButtons = document.querySelectorAll('.communication-btn');
const communicationSections = document.querySelectorAll('.communication-section');

communicationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const communicationType = button.getAttribute('data-communication');
    
    // Remove active class from all buttons and sections
    communicationButtons.forEach(btn => btn.classList.remove('active'));
    communicationSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(communicationType).classList.add('active');
  });
});

// Content Curation Switching Functionality
const curationButtons = document.querySelectorAll('.curation-btn');
const curationSections = document.querySelectorAll('.curation-section');

curationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const curationType = button.getAttribute('data-curation');
    
    // Remove active class from all buttons and sections
    curationButtons.forEach(btn => btn.classList.remove('active'));
    curationSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(curationType).classList.add('active');
  });
});

// Storage Switching Functionality
const storageButtons = document.querySelectorAll('.storage-btn');
const storageSections = document.querySelectorAll('.storage-section');

storageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const storageType = button.getAttribute('data-storage');
    
    // Remove active class from all buttons and sections
    storageButtons.forEach(btn => btn.classList.remove('active'));
    storageSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(storageType).classList.add('active');
  });
});

// Website Switching Functionality
const websiteButtons = document.querySelectorAll('.website-btn');
const websiteSections = document.querySelectorAll('.website-section');

websiteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const websiteType = button.getAttribute('data-website');
    
    // Remove active class from all buttons and sections
    websiteButtons.forEach(btn => btn.classList.remove('active'));
    websiteSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(websiteType).classList.add('active');
  });
});

// Community Switching Functionality
const communityButtons = document.querySelectorAll('.community-btn');
const communitySections = document.querySelectorAll('.community-section');

communityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const communityType = button.getAttribute('data-community');
    
    // Remove active class from all buttons and sections
    communityButtons.forEach(btn => btn.classList.remove('active'));
    communitySections.forEach(section => section.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(communityType).classList.add('active');
  });
});

// Assessment Tools Switching Functionality
// Assessment Tools Switching Functionality - FIXED VERSION
const assessmentButtons = document.querySelectorAll('.assessment-btn');
const assessmentSections = document.querySelectorAll('.assessment-section');

assessmentButtons.forEach(button => {
  button.addEventListener('click', () => {
    const assessmentType = button.getAttribute('data-assessment');
    
    // Remove active class from all buttons and sections
    assessmentButtons.forEach(btn => btn.classList.remove('active'));
    assessmentSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(assessmentType).classList.add('active');
  });
});

// Teaching Tools Switching Functionality
const teachingButtons = document.querySelectorAll('.teaching-btn');
const teachingSections = document.querySelectorAll('.teaching-section');

teachingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const teachingType = button.getAttribute('data-teaching');
    
    // Remove active class from all buttons and sections
    teachingButtons.forEach(btn => btn.classList.remove('active'));
    teachingSections.forEach(section => section.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(teachingType).classList.add('active');
  });
});

// LinkedIn Carousel
const linkedinImages = document.querySelectorAll('.linkedin-evidence');
const linkedinNextBtn = document.querySelector('.linkedin-next');
const linkedinBackBtn = document.querySelector('.linkedin-back');
let linkedinIndex = 0;

if (linkedinImages.length > 0) {
  linkedinImages[linkedinIndex].classList.add('active');
}

if (linkedinNextBtn && linkedinBackBtn) {
  linkedinNextBtn.addEventListener('click', () => {
    linkedinImages[linkedinIndex].classList.remove('active');
    linkedinIndex = (linkedinIndex + 1) % linkedinImages.length;
    linkedinImages[linkedinIndex].classList.add('active');
  });

  linkedinBackBtn.addEventListener('click', () => {
    linkedinImages[linkedinIndex].classList.remove('active');
    linkedinIndex = (linkedinIndex - 1 + linkedinImages.length) % linkedinImages.length;
    linkedinImages[linkedinIndex].classList.add('active');
  });
}

// x Carousel
const xImages = document.querySelectorAll('.x-evidence');
const xNextBtn = document.querySelector('.x-next');
const xBackBtn = document.querySelector('.x-back');
let xIndex = 0;

if (xImages.length > 0) {
  xImages[xIndex].classList.add('active');
}

if (xNextBtn && xBackBtn) {
  xNextBtn.addEventListener('click', () => {
    xImages[xIndex].classList.remove('active');
    xIndex = (xIndex + 1) % xImages.length;
    xImages[xIndex].classList.add('active');
  });

  xBackBtn.addEventListener('click', () => {
    xImages[xIndex].classList.remove('active');
    xIndex = (xIndex - 1 + xImages.length) % xImages.length;
    xImages[xIndex].classList.add('active');
  });
}

// portfolioper Carousel
const portfolioperImages = document.querySelectorAll('.portfolioper-evidence');
let portfolioperIndex = 0;

if (portfolioperImages.length > 0) {
  portfolioperImages[portfolioperIndex].classList.add('active');
}

// WhatsApp Carousel
const whatsappImages = document.querySelectorAll('.whatsapp-evidence');
const whatsappNextBtn = document.querySelector('.whatsapp-next');
const whatsappBackBtn = document.querySelector('.whatsapp-back');
let whatsappIndex = 0;

if (whatsappImages.length > 0) {
  whatsappImages[whatsappIndex].classList.add('active');
}

if (whatsappNextBtn && whatsappBackBtn) {
  whatsappNextBtn.addEventListener('click', () => {
    whatsappImages[whatsappIndex].classList.remove('active');
    whatsappIndex = (whatsappIndex + 1) % whatsappImages.length;
    whatsappImages[whatsappIndex].classList.add('active');
  });

  whatsappBackBtn.addEventListener('click', () => {
    whatsappImages[whatsappIndex].classList.remove('active');
    whatsappIndex = (whatsappIndex - 1 + whatsappImages.length) % whatsappImages.length;
    whatsappImages[whatsappIndex].classList.add('active');
  });
}

// Discord Carousel
const discordImages = document.querySelectorAll('.discord-evidence');
const discordNextBtn = document.querySelector('.discord-next');
const discordBackBtn = document.querySelector('.discord-back');
let discordIndex = 0;

if (discordImages.length > 0) {
  discordImages[discordIndex].classList.add('active');
}

if (discordNextBtn && discordBackBtn) {
  discordNextBtn.addEventListener('click', () => {
    discordImages[discordIndex].classList.remove('active');
    discordIndex = (discordIndex + 1) % discordImages.length;
    discordImages[discordIndex].classList.add('active');
  });

  discordBackBtn.addEventListener('click', () => {
    discordImages[discordIndex].classList.remove('active');
    discordIndex = (discordIndex - 1 + discordImages.length) % discordImages.length;
    discordImages[discordIndex].classList.add('active');
  });
}

// Google Meet Carousel
const meetImages = document.querySelectorAll('.meet-evidence');
const meetNextBtn = document.querySelector('.meet-next');
const meetBackBtn = document.querySelector('.meet-back');
let meetIndex = 0;

if (meetImages.length > 0) {
  meetImages[meetIndex].classList.add('active');
}

if (meetNextBtn && meetBackBtn) {
  meetNextBtn.addEventListener('click', () => {
    meetImages[meetIndex].classList.remove('active');
    meetIndex = (meetIndex + 1) % meetImages.length;
    meetImages[meetIndex].classList.add('active');
  });

  meetBackBtn.addEventListener('click', () => {
    meetImages[meetIndex].classList.remove('active');
    meetIndex = (meetIndex - 1 + meetImages.length) % meetImages.length;
    meetImages[meetIndex].classList.add('active');
  });
}

// Pinterest Carousel
const pinterestImages = document.querySelectorAll('.pinterest-evidence');
const pinterestNextBtn = document.querySelector('.pinterest-next');
const pinterestBackBtn = document.querySelector('.pinterest-back');
let pinterestIndex = 0;

if (pinterestImages.length > 0) {
  pinterestImages[pinterestIndex].classList.add('active');
}

if (pinterestNextBtn && pinterestBackBtn) {
  pinterestNextBtn.addEventListener('click', () => {
    pinterestImages[pinterestIndex].classList.remove('active');
    pinterestIndex = (pinterestIndex + 1) % pinterestImages.length;
    pinterestImages[pinterestIndex].classList.add('active');
  });

  pinterestBackBtn.addEventListener('click', () => {
    pinterestImages[pinterestIndex].classList.remove('active');
    pinterestIndex = (pinterestIndex - 1 + pinterestImages.length) % pinterestImages.length;
    pinterestImages[pinterestIndex].classList.add('active');
  });
}

/* Education.com */

const educationImages = document.querySelectorAll('.education-evidence');
const educationNextBtn = document.querySelector('.education-next');
const educationBackBtn = document.querySelector('.education-back');
let educationIndex = 0;

if (educationImages.length > 0) {
  educationImages[educationIndex].classList.add('active');
}

if (educationNextBtn && educationBackBtn) {
  educationNextBtn.addEventListener('click', () => {
    educationImages[educationIndex].classList.remove('active');
    educationIndex = (educationIndex + 1) % educationImages.length;
    educationImages[educationIndex].classList.add('active');
  });

  educationBackBtn.addEventListener('click', () => {
    educationImages[educationIndex].classList.remove('active');
    educationIndex = (educationIndex - 1 + educationImages.length) % educationImages.length;
    educationImages[educationIndex].classList.add('active');
  });
}

// symbaloo Carousel
const symbalooImages = document.querySelectorAll('.symbaloo-evidence');
let symbalooIndex = 0;

if (symbalooImages.length > 0) {
  symbalooImages[symbalooIndex].classList.add('active');
}
// Padlet Carousel
const padletImages = document.querySelectorAll('.padlet-evidence');
const padletNextBtn = document.querySelector('.padlet-next');
const padletBackBtn = document.querySelector('.padlet-back');
let padletIndex = 0;

if (padletImages.length > 0) {
  padletImages[padletIndex].classList.add('active');
}

if (padletNextBtn && padletBackBtn) {
  padletNextBtn.addEventListener('click', () => {
    padletImages[padletIndex].classList.remove('active');
    padletIndex = (padletIndex + 1) % padletImages.length;
    padletImages[padletIndex].classList.add('active');
  });

  padletBackBtn.addEventListener('click', () => {
    padletImages[padletIndex].classList.remove('active');
    padletIndex = (padletIndex - 1 + padletImages.length) % padletImages.length;
    padletImages[padletIndex].classList.add('active');
  });
}

// Google Drive Carousel
const driveImages = document.querySelectorAll('.drive-evidence');
const driveNextBtn = document.querySelector('.drive-next');
const driveBackBtn = document.querySelector('.drive-back');
let driveIndex = 0;

if (driveImages.length > 0) {
  driveImages[driveIndex].classList.add('active');
}

if (driveNextBtn && driveBackBtn) {
  driveNextBtn.addEventListener('click', () => {
    driveImages[driveIndex].classList.remove('active');
    driveIndex = (driveIndex + 1) % driveImages.length;
    driveImages[driveIndex].classList.add('active');
  });

  driveBackBtn.addEventListener('click', () => {
    driveImages[driveIndex].classList.remove('active');
    driveIndex = (driveIndex - 1 + driveImages.length) % driveImages.length;
    driveImages[driveIndex].classList.add('active');
  });
}

// Dropbox Carousel
const dropboxImages = document.querySelectorAll('.dropbox-evidence');
const dropboxNextBtn = document.querySelector('.dropbox-next');
const dropboxBackBtn = document.querySelector('.dropbox-back');
let dropboxIndex = 0;

if (dropboxImages.length > 0) {
  dropboxImages[dropboxIndex].classList.add('active');
}

if (dropboxNextBtn && dropboxBackBtn) {
  dropboxNextBtn.addEventListener('click', () => {
    dropboxImages[dropboxIndex].classList.remove('active');
    dropboxIndex = (dropboxIndex + 1) % dropboxImages.length;
    dropboxImages[dropboxIndex].classList.add('active');
  });

  dropboxBackBtn.addEventListener('click', () => {
    dropboxImages[dropboxIndex].classList.remove('active');
    dropboxIndex = (dropboxIndex - 1 + dropboxImages.length) % dropboxImages.length;
    dropboxImages[dropboxIndex].classList.add('active');
  });
}

// OneDrive Carousel - Fixed
const onedriveImages = document.querySelectorAll('.onedrive-evidence');
const onedriveNextBtn = document.querySelector('.onedrive-next');
const onedriveBackBtn = document.querySelector('.onedrive-back');
let onedriveIndex = 0;

if (onedriveImages.length > 0) {
  onedriveImages[onedriveIndex].classList.add('active');
}

if (onedriveNextBtn && onedriveBackBtn) {
  onedriveNextBtn.addEventListener('click', () => {
    onedriveImages[onedriveIndex].classList.remove('active');
    onedriveIndex = (onedriveIndex + 1) % onedriveImages.length;
    onedriveImages[onedriveIndex].classList.add('active');
  });

  onedriveBackBtn.addEventListener('click', () => {
    onedriveImages[onedriveIndex].classList.remove('active');
    onedriveIndex = (onedriveIndex - 1 + onedriveImages.length) % onedriveImages.length;
    onedriveImages[onedriveIndex].classList.add('active');
  });
}

// YouTube Carousel
const youtubeImages = document.querySelectorAll('.youtube-evidence');
const youtubeNextBtn = document.querySelector('.youtube-next');
const youtubeBackBtn = document.querySelector('.youtube-back');
let youtubeIndex = 0;

if (youtubeImages.length > 0) {
  youtubeImages[youtubeIndex].classList.add('active');
}

if (youtubeNextBtn && youtubeBackBtn) {
  youtubeNextBtn.addEventListener('click', () => {
    youtubeImages[youtubeIndex].classList.remove('active');
    youtubeIndex = (youtubeIndex + 1) % youtubeImages.length;
    youtubeImages[youtubeIndex].classList.add('active');
  });

  youtubeBackBtn.addEventListener('click', () => {
    youtubeImages[youtubeIndex].classList.remove('active');
    youtubeIndex = (youtubeIndex - 1 + youtubeImages.length) % youtubeImages.length;
    youtubeImages[youtubeIndex].classList.add('active');
  });
}

// freeCodeCamp Carousel
const freeCodeCampImages = document.querySelectorAll('.freeCodeCamp-evidence');
const freeCodeCampNextBtn = document.querySelector('.freeCodeCamp-next');
const freeCodeCampBackBtn = document.querySelector('.freeCodeCamp-back');
let freeCodeCampIndex = 0;

if (freeCodeCampImages.length > 0) {
  freeCodeCampImages[freeCodeCampIndex].classList.add('active');
}

if (freeCodeCampNextBtn && freeCodeCampBackBtn) {
  freeCodeCampNextBtn.addEventListener('click', () => {
    freeCodeCampImages[freeCodeCampIndex].classList.remove('active');
    freeCodeCampIndex = (freeCodeCampIndex + 1) % freeCodeCampImages.length;
    freeCodeCampImages[freeCodeCampIndex].classList.add('active');
  });

  freeCodeCampBackBtn.addEventListener('click', () => {
    freeCodeCampImages[freeCodeCampIndex].classList.remove('active');
    freeCodeCampIndex = (freeCodeCampIndex - 1 + freeCodeCampImages.length) % freeCodeCampImages.length;
    freeCodeCampImages[freeCodeCampIndex].classList.add('active');
  });
}

// learn-accounting Educator Center Carousel
const accountingImages = document.querySelectorAll('.accounting-evidence');
const accountingNextBtn = document.querySelector('.accounting-next');
const accountingBackBtn = document.querySelector('.accounting-back');
let accountingIndex = 0;

if (accountingImages.length > 0) {
  accountingImages[accountingIndex].classList.add('active');
}

if (accountingNextBtn && accountingBackBtn) {
  accountingNextBtn.addEventListener('click', () => {
    accountingImages[accountingIndex].classList.remove('active');
    accountingIndex = (accountingIndex + 1) % accountingImages.length;
    accountingImages[accountingIndex].classList.add('active');
  });

  accountingBackBtn.addEventListener('click', () => {
    accountingImages[accountingIndex].classList.remove('active');
    accountingIndex = (accountingIndex - 1 + accountingImages.length) % accountingImages.length;
    accountingImages[accountingIndex].classList.add('active');
  });
}

// w3schools Carousel
const w3schoolsImages = document.querySelectorAll('.w3schools-evidence');
const w3schoolsNextBtn = document.querySelector('.w3schools-next');
const w3schoolsBackBtn = document.querySelector('.w3schools-back');
let w3schoolsIndex = 0;

if (w3schoolsImages.length > 0) {
  w3schoolsImages[w3schoolsIndex].classList.add('active');
}

if (w3schoolsNextBtn && w3schoolsBackBtn) {
  w3schoolsNextBtn.addEventListener('click', () => {
    w3schoolsImages[w3schoolsIndex].classList.remove('active');
    w3schoolsIndex = (w3schoolsIndex + 1) % w3schoolsImages.length;
    w3schoolsImages[w3schoolsIndex].classList.add('active');
  });

  w3schoolsBackBtn.addEventListener('click', () => {
    w3schoolsImages[w3schoolsIndex].classList.remove('active');
    w3schoolsIndex = (w3schoolsIndex - 1 + w3schoolsImages.length) % w3schoolsImages.length;
    w3schoolsImages[w3schoolsIndex].classList.add('active');
  });
}

// edWeb Carousel
const edWebImages = document.querySelectorAll('.edWeb-evidence');
const edWebNextBtn = document.querySelector('.edWeb-next');
const edWebBackBtn = document.querySelector('.edWeb-back');
let edWebIndex = 0;

if (edWebImages.length > 0) {
  edWebImages[edWebIndex].classList.add('active');
}

if (edWebNextBtn && edWebBackBtn) {
  edWebNextBtn.addEventListener('click', () => {
    edWebImages[edWebIndex].classList.remove('active');
    edWebIndex = (edWebIndex + 1) % edWebImages.length;
    edWebImages[edWebIndex].classList.add('active');
  });

  edWebBackBtn.addEventListener('click', () => {
    edWebImages[edWebIndex].classList.remove('active');
    edWebIndex = (edWebIndex - 1 + edWebImages.length) % edWebImages.length;
    edWebImages[edWebIndex].classList.add('active');
  });
}

// edutopia Carousel
const edutopiaImages = document.querySelectorAll('.edutopia-evidence');
const edutopiaNextBtn = document.querySelector('.edutopia-next');
const edutopiaBackBtn = document.querySelector('.edutopia-back');
let edutopiaIndex = 0;

if (edutopiaImages.length > 0) {
  edutopiaImages[edutopiaIndex].classList.add('active');
}

if (edutopiaNextBtn && edutopiaBackBtn) {
  edutopiaNextBtn.addEventListener('click', () => {
    edutopiaImages[edutopiaIndex].classList.remove('active');
    edutopiaIndex = (edutopiaIndex + 1) % edutopiaImages.length;
    edutopiaImages[edutopiaIndex].classList.add('active');
  });

  edutopiaBackBtn.addEventListener('click', () => {
    edutopiaImages[edutopiaIndex].classList.remove('active');
    edutopiaIndex = (edutopiaIndex - 1 + edutopiaImages.length) % edutopiaImages.length;
    edutopiaImages[edutopiaIndex].classList.add('active');
  });
}

// PEBuddy Carousel
const PEBuddyImages = document.querySelectorAll('.PEBuddy-evidence');
const PEBuddyNextBtn = document.querySelector('.PEBuddy-next');
const PEBuddyBackBtn = document.querySelector('.PEBuddy-back');
let PEBuddyIndex = 0;

if (PEBuddyImages.length > 0) {
  PEBuddyImages[PEBuddyIndex].classList.add('active');
}

if (PEBuddyNextBtn && PEBuddyBackBtn) {
  PEBuddyNextBtn.addEventListener('click', () => {
    PEBuddyImages[PEBuddyIndex].classList.remove('active');
    PEBuddyIndex = (PEBuddyIndex + 1) % PEBuddyImages.length;
    PEBuddyImages[PEBuddyIndex].classList.add('active');
  });

  PEBuddyBackBtn.addEventListener('click', () => {
    PEBuddyImages[PEBuddyIndex].classList.remove('active');
    PEBuddyIndex = (PEBuddyIndex - 1 + PEBuddyImages.length) % PEBuddyImages.length;
    PEBuddyImages[PEBuddyIndex].classList.add('active');
  });
}

// teachersConnect Carousel
const teachersConnectImages = document.querySelectorAll('.teachersConnect-evidence');
const teachersConnectNextBtn = document.querySelector('.teachersConnect-next');
const teachersConnectBackBtn = document.querySelector('.teachersConnect-back');
let teachersConnectIndex = 0;

if (teachersConnectImages.length > 0) {
  teachersConnectImages[teachersConnectIndex].classList.add('active');
}

if (teachersConnectNextBtn && teachersConnectBackBtn) {
  teachersConnectNextBtn.addEventListener('click', () => {
    teachersConnectImages[teachersConnectIndex].classList.remove('active');
    teachersConnectIndex = (teachersConnectIndex + 1) % teachersConnectImages.length;
    teachersConnectImages[teachersConnectIndex].classList.add('active');
  });

  teachersConnectBackBtn.addEventListener('click', () => {
    teachersConnectImages[teachersConnectIndex].classList.remove('active');
    teachersConnectIndex = (teachersConnectIndex - 1 + teachersConnectImages.length) % teachersConnectImages.length;
    teachersConnectImages[teachersConnectIndex].classList.add('active');
  });
}

// Google Forms Carousel
const googleFormsEvidence = document.querySelectorAll('.google-forms-evidence');
const googleFormsNextBtn = document.querySelector('.google-forms-next');
const googleFormsBackBtn = document.querySelector('.google-forms-back');
let googleFormsIndex = 0;

if (googleFormsEvidence.length > 0) {
  googleFormsEvidence[googleFormsIndex].classList.add('active');
}

if (googleFormsNextBtn && googleFormsBackBtn) {
  googleFormsNextBtn.addEventListener('click', () => {
    googleFormsEvidence[googleFormsIndex].classList.remove('active');
    googleFormsIndex = (googleFormsIndex + 1) % googleFormsEvidence.length;
    googleFormsEvidence[googleFormsIndex].classList.add('active');
  });

  googleFormsBackBtn.addEventListener('click', () => {
    googleFormsEvidence[googleFormsIndex].classList.remove('active');
    googleFormsIndex = (googleFormsIndex - 1 + googleFormsEvidence.length) % googleFormsEvidence.length;
    googleFormsEvidence[googleFormsIndex].classList.add('active');
  });
}

// Kahoot Carousel
const kahootImages = document.querySelectorAll('.kahoot-evidence');
const kahootNextBtn = document.querySelector('.kahoot-next');
const kahootBackBtn = document.querySelector('.kahoot-back');
let kahootIndex = 0;

if (kahootImages.length > 0) {
  kahootImages[kahootIndex].classList.add('active');
}

if (kahootNextBtn && kahootBackBtn) {
  kahootNextBtn.addEventListener('click', () => {
    kahootImages[kahootIndex].classList.remove('active');
    kahootIndex = (kahootIndex + 1) % kahootImages.length;
    kahootImages[kahootIndex].classList.add('active');
  });

  kahootBackBtn.addEventListener('click', () => {
    kahootImages[kahootIndex].classList.remove('active');
    kahootIndex = (kahootIndex - 1 + kahootImages.length) % kahootImages.length;
    kahootImages[kahootIndex].classList.add('active');
  });
}

// Gimkit Carousel
const GimkitImages = document.querySelectorAll('.Gimkit-evidence');
const GimkitNextBtn = document.querySelector('.Gimkit-next');
const GimkitBackBtn = document.querySelector('.Gimkit-back');
let GimkitIndex = 0;

if (GimkitImages.length > 0) {
  GimkitImages[GimkitIndex].classList.add('active');
}

if (GimkitNextBtn && GimkitBackBtn) {
  GimkitNextBtn.addEventListener('click', () => {
    GimkitImages[GimkitIndex].classList.remove('active');
    GimkitIndex = (GimkitIndex + 1) % GimkitImages.length;
    GimkitImages[GimkitIndex].classList.add('active');
  });

  GimkitBackBtn.addEventListener('click', () => {
    GimkitImages[GimkitIndex].classList.remove('active');
    GimkitIndex = (GimkitIndex - 1 + GimkitImages.length) % GimkitImages.length;
    GimkitImages[GimkitIndex].classList.add('active');
  });
}

// quizlet Carousel
const quizletImages = document.querySelectorAll('.quizlet-evidence');
const quizletNextBtn = document.querySelector('.quizlet-next');
const quizletBackBtn = document.querySelector('.quizlet-back');
let quizletIndex = 0;

if (quizletImages.length > 0) {
  quizletImages[quizletIndex].classList.add('active');
}

if (quizletNextBtn && quizletBackBtn) {
  quizletNextBtn.addEventListener('click', () => {
    quizletImages[quizletIndex].classList.remove('active');
    quizletIndex = (quizletIndex + 1) % quizletImages.length;
    quizletImages[quizletIndex].classList.add('active');
  });

  quizletBackBtn.addEventListener('click', () => {
    quizletImages[quizletIndex].classList.remove('active');
    quizletIndex = (quizletIndex - 1 + quizletImages.length) % quizletImages.length;
    quizletImages[quizletIndex].classList.add('active');
  });
}

// Google-Classroom Carousel
const googleClassroomImages = document.querySelectorAll('.Google-Classroom-evidence');
const googleClassroomNextBtn = document.querySelector('.Google-Classroom-next');
const googleClassroomBackBtn = document.querySelector('.Google-Classroom-back');
let googleClassroomIndex = 0;

if (googleClassroomImages.length > 0) {
  googleClassroomImages[googleClassroomIndex].classList.add('active');
}

if (googleClassroomNextBtn && googleClassroomBackBtn) {
  googleClassroomNextBtn.addEventListener('click', () => {
    googleClassroomImages[googleClassroomIndex].classList.remove('active');
    googleClassroomIndex = (googleClassroomIndex + 1) % googleClassroomImages.length;
    googleClassroomImages[googleClassroomIndex].classList.add('active');
  });

  googleClassroomBackBtn.addEventListener('click', () => {
    googleClassroomImages[googleClassroomIndex].classList.remove('active');
    googleClassroomIndex = (googleClassroomIndex - 1 + googleClassroomImages.length) % googleClassroomImages.length;
    googleClassroomImages[googleClassroomIndex].classList.add('active');
  });
}

// Nearpod Carousel
const nearpodImages = document.querySelectorAll('.nearpod-evidence');
const nearpodNextBtn = document.querySelector('.nearpod-next');
const nearpodBackBtn = document.querySelector('.nearpod-back');
let nearpodIndex = 0;

if (nearpodImages.length > 0) {
  nearpodImages[nearpodIndex].classList.add('active');
}

if (nearpodNextBtn && nearpodBackBtn) {
  nearpodNextBtn.addEventListener('click', () => {
    nearpodImages[nearpodIndex].classList.remove('active');
    nearpodIndex = (nearpodIndex + 1) % nearpodImages.length;
    nearpodImages[nearpodIndex].classList.add('active');
  });

  nearpodBackBtn.addEventListener('click', () => {
    nearpodImages[nearpodIndex].classList.remove('active');
    nearpodIndex = (nearpodIndex - 1 + nearpodImages.length) % nearpodImages.length;
    nearpodImages[nearpodIndex].classList.add('active');
  });
}

// Powerpoint Carousel
const PowerpointImages = document.querySelectorAll('.Powerpoint-evidence');
const PowerpointNextBtn = document.querySelector('.Powerpoint-next');
const PowerpointBackBtn = document.querySelector('.Powerpoint-back');
let PowerpointIndex = 0;

if (PowerpointImages.length > 0) {
  PowerpointImages[PowerpointIndex].classList.add('active');
}

if (PowerpointNextBtn && PowerpointBackBtn) {
  PowerpointNextBtn.addEventListener('click', () => {
    PowerpointImages[PowerpointIndex].classList.remove('active');
    PowerpointIndex = (PowerpointIndex + 1) % PowerpointImages.length;
    PowerpointImages[PowerpointIndex].classList.add('active');
  });

  PowerpointBackBtn.addEventListener('click', () => {
    PowerpointImages[PowerpointIndex].classList.remove('active');
    PowerpointIndex = (PowerpointIndex - 1 + PowerpointImages.length) % PowerpointImages.length;
    PowerpointImages[PowerpointIndex].classList.add('active');
  });
}

// Gmail Carousel
const gmailImages = document.querySelectorAll('.gmail-evidence');
const gmailNextBtn = document.querySelector('.gmail-next');
const gmailBackBtn = document.querySelector('.gmail-back');
let gmailIndex = 0;

if (gmailImages.length > 0) {
  gmailImages[gmailIndex].classList.add('active');
}

if (gmailNextBtn && gmailBackBtn) {
  gmailNextBtn.addEventListener('click', () => {
    gmailImages[gmailIndex].classList.remove('active');
    gmailIndex = (gmailIndex + 1) % gmailImages.length;
    gmailImages[gmailIndex].classList.add('active');
  });

  gmailBackBtn.addEventListener('click', () => {
    gmailImages[gmailIndex].classList.remove('active');
    gmailIndex = (gmailIndex - 1 + gmailImages.length) % gmailImages.length;
    gmailImages[gmailIndex].classList.add('active');
  });
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Nearpod Modal Functionality - Triggered by Button Click
function initNearpodModal() {
    const nearpodModal = document.getElementById('nearpodModal');
    const closeNearpodModal = document.getElementById('closeNearpodModal');
    const confirmNearpodModal = document.getElementById('confirmNearpodModal');
    const dontShowAgain = document.getElementById('dontShowAgain');
    const modalNearpodContent = document.getElementById('modalNearpodContent');
    const nearpodPopupBtn = document.getElementById('nearpodPopupBtn');
    
    // Check if user has already dismissed the modal
    function hasSeenNearpodModal() {
        return localStorage.getItem('nearpodModalSeen') === 'true';
    }
    
    // Show Nearpop lessons in modal
    function showNearpodModal() {
        modalNearpodContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=4C27B9F1F2EDAB6BDDC4D09BFCB59915-1&oc=user-created&utm_source=embed&he=true">
                    <div class="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-4xl">play_lesson</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 text-center">Lesson 1</h3>
                        <p class="text-sm text-gray-600 mt-2 text-center">Interactive Presentation</p>
                    </div>
                </div>
                
                <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=2AA25696180529607C90F9AEA2622CF4-1&oc=user-created&utm_source=embed&he=true">
                    <div class="h-32 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-4xl">quiz</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 text-center">Lesson 2</h3>
                        <p class="text-sm text-gray-600 mt-2 text-center">Assessment Activity</p>
                    </div>
                </div>
                
                <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=C2D87A9B1E2028960CF45FD4BC16EF35-1&oc=user-created&utm_source=embed&he=true">
                    <div class="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-4xl">collaboration</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 text-center">Lesson 3</h3>
                        <p class="text-sm text-gray-600 mt-2 text-center">Collaborative Board</p>
                    </div>
                </div>
            </div>
        `;
        
        if (!hasSeenNearpodModal()) {
            nearpodModal.classList.remove('hidden');
        } else {
            // If user has seen it before, just open the modal without instructions
            openNearpodLessons();
        }
    }
    
    // Open modal with lessons (without instructions)
    function openNearpodLessons() {
        modalNearpodContent.innerHTML = `
            <div class="w-full">
                <h4 class="text-xl font-bold text-gray-800 mb-4 text-center">Select a Nearpod Lesson</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=4C27B9F1F2EDAB6BDDC4D09BFCB59915-1&oc=user-created&utm_source=embed&he=true">
                        <div class="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-4xl">play_lesson</span>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 text-center">Lesson 1</h3>
                            <p class="text-sm text-gray-600 mt-2 text-center">Interactive Presentation</p>
                        </div>
                    </div>
                    
                    <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=2AA25696180529607C90F9AEA2622CF4-1&oc=user-created&utm_source=embed&he=true">
                        <div class="h-32 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-4xl">quiz</span>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 text-center">Lesson 2</h3>
                            <p class="text-sm text-gray-600 mt-2 text-center">Assessment Activity</p>
                        </div>
                    </div>
                    
                    <div class="nearpod-lesson-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" data-nearpod-src="https://app.nearpod.com/?pin=C2D87A9B1E2028960CF45FD4BC16EF35-1&oc=user-created&utm_source=embed&he=true">
                        <div class="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-4xl">collaboration</span>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 text-center">Lesson 3</h3>
                            <p class="text-sm text-gray-600 mt-2 text-center">Collaborative Board</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        nearpodModal.classList.remove('hidden');
        
        // Add event listeners to lesson items
        document.querySelectorAll('.nearpod-lesson-item').forEach(item => {
            item.addEventListener('click', function() {
                const src = this.getAttribute('data-nearpod-src');
                openNearpodLesson(src);
            });
        });
    }
    
    // Open specific Nearpod lesson
    function openNearpodLesson(src) {
        modalNearpodContent.innerHTML = `
            <div class="w-full">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xl font-bold text-gray-800">Nearpod Lesson</h4>
                    <button id="backToLessons" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                        Back to Lessons
                    </button>
                </div>
                <iframe 
                    src="${src}" 
                    width="1000" 
                    height="600" 
                    frameborder="0" 
                    allowfullscreen 
                    allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                    class="rounded-lg w-full"
                ></iframe>
            </div>
        `;
        
        // Add event listener to back button
        document.getElementById('backToLessons').addEventListener('click', openNearpodLessons);
    }
    
    // Close modal
    function closeModal() {
        nearpodModal.classList.add('hidden');
        modalNearpodContent.innerHTML = '';
        
        // Save preference if "Don't show again" is checked
        if (dontShowAgain.checked) {
            localStorage.setItem('nearpodModalSeen', 'true');
        }
    }
    
    // Event listener for Nearpod popup button
    if (nearpodPopupBtn) {
        nearpodPopupBtn.addEventListener('click', showNearpodModal);
    }
    
    // Event listeners for modal controls
    closeNearpodModal.addEventListener('click', closeModal);
    confirmNearpodModal.addEventListener('click', closeModal);
    
    // Close modal when clicking outside content
    nearpodModal.addEventListener('click', function(e) {
        if (e.target === nearpodModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !nearpodModal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Initialize Nearpod modal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNearpodModal();
});


// Back to top functionality
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove('opacity-0', 'invisible');
    backToTopBtn.classList.add('opacity-100', 'visible');
  } else {
    backToTopBtn.classList.remove('opacity-100', 'visible');
    backToTopBtn.classList.add('opacity-0', 'invisible');
  }
});

// Initialize button state
backToTopBtn.classList.add('opacity-0', 'invisible');

// OneDrive Sign-in Modal Functionality
function initOnedriveModal() {
    const onedriveModal = document.getElementById('onedriveModal');
    const closeOnedriveModal = document.getElementById('closeOnedriveModal');
    const dontShowAgain = document.getElementById('dontShowAgain');
    
    // Check if user has already dismissed the modal
    function hasSeenOnedriveModal() {
        return localStorage.getItem('onedriveModalSeen') === 'true';
    }
    
    // Show modal on page load if not seen before
    function showOnedriveModal() {
        if (!hasSeenOnedriveModal()) {
            // Small delay to ensure page is loaded
            setTimeout(() => {
                onedriveModal.classList.remove('hidden');
            }, 1000);
        }
    }
    
    // Close modal
    function closeModal() {
        onedriveModal.classList.add('hidden');
        
        // Save preference if "Don't show again" is checked
        if (dontShowAgain) {
            localStorage.setItem('onedriveModalSeen', 'true');
        }
    }
    
    // Event listeners for modal controls
    if (closeOnedriveModal) {
        closeOnedriveModal.addEventListener('click', closeModal);
    }
    
    if (dontShowAgain) {
        dontShowAgain.addEventListener('click', () => {
            localStorage.setItem('onedriveModalSeen', 'true');
            closeModal();
        });
    }
    
    // Close modal when clicking outside content
    onedriveModal.addEventListener('click', function(e) {
        if (e.target === onedriveModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !onedriveModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Initialize modal on page load
    showOnedriveModal();
}

// Initialize OneDrive modal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initOnedriveModal();
});

// Show OneDrive reminder when navigating to sections with OneDrive content
function setupOnedriveSectionReminders() {
    const sectionsWithOnedrive = ['teaching-tools', 'online-communities', 'cloud-storages'];
    
    sectionsWithOnedrive.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasSeenOnedriveModal()) {
                        // Show a subtle reminder instead of full modal
                        showSectionReminder();
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(section);
        }
    });
}

// Helper function to check if modal was seen
function hasSeenOnedriveModal() {
    return localStorage.getItem('onedriveModalSeen') === 'true';
}

// Show a subtle reminder for sections with OneDrive content
function showSectionReminder() {
    // Create a subtle toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg z-40 transform transition-all duration-300';
    toast.innerHTML = `
        <div class="flex items-center">
            <span class="material-symbols-outlined mr-2">info</span>
            <span>Remember to sign in to OneDrive to view embedded content</span>
            <button class="ml-4 text-white/80 hover:text-white" onclick="this.parentElement.parentElement.remove()">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

// Initialize section reminders
document.addEventListener('DOMContentLoaded', function() {
    setupOnedriveSectionReminders();
});